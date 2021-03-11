---
issue: 61
title: Převedení metod na samostatné funkce v  JavaScriptu
category: dev
tags: [ JavaScript, vývojářské tipy ]
---

Jen krátký tip na převedení metod (funkcí v `prototype`) na samostané funkce v {{ site.data.abbr.JS }} pomocí [`Proxy` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

<!--more-->

Myšlenka stojí na možnosti použití [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) a [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

{% include code.html caption="Ekvivalentí volání metody `forEach` (body *#1–#3*). Ve *#3* využijeme `.bind` pro možnost volání bez `.call` (šlo by také použít obalení funkcí)." code='
```JavaScript
const arr= "ABCDEF".split("");//jen vytvoření pole
//#1
arr.forEach(conslole.log);
//#2
const forEach1= Array.prototype.forEach;
forEach1.call(arr, console.log);
//#3
const forEach= Function.prototype.call.bind(Array.prototype.forEach);
forEach(arr, console.log)
```
' %}

Pro zobecnění a zautomatizování lze pomocí `Proxy` vytvořit pomocné jmenné prostory či pomocnou funkci:

{% include code.html caption="Použití jako jmenné prostory (tj. vytvoření knihovny)" code='
```JavaScript
const utils= (function(proxy){
  return {
    Array: new Proxy(Array.prototype, proxy),
    String: new Proxy(String.prototype, proxy),
    console: new Proxy(console, { get(target,name){ return target[name].bind(target); } })
  };
})({
  get(target,name){ return Function.prototype.call.bind(target[name]); }
});

const { map }= utils.Array;
const { charCodeAt }= utils.String;
const { log }= utils.console;

log(map(["A"], a=> charCodeAt(a, 0)));
```
' %}

{% include code.html caption="Převádění na funkce pomocí `toFunctional`" code='
```JavaScript
const toFunctional= object=> object.prototype ?
  new Proxy(object.prototype, { get(target,name){ return Function.prototype.call.bind(target[name]); } }) :
  new Proxy(object, { get(target, name){ return target[name].bind(target); } });

const { map }= toFunctional(Array);
const { charCodeAt }= toFunctional(String);
const { log }= toFunctional(console);

log(map(["A"], a=> charCodeAt(a, 0)));
```
' %}

Důležité je mít na paměti, že takovéto použití má důsledky mimojiné v hlášení chyb – první argument takovýchto funkcí je `this`, takže například při zavolání `map(["A"])` dostaneme chybu *„Uncaught TypeError: missing argument 0 when calling function Array.prototype.map”*.

Dále některé takto vytvořené funkce nejsou „funkcionální” (*[Pure function](https://en.wikipedia.org/wiki/Pure_function)*) – například [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

Pro funkcionální přístup potřebujeme některé další nástroje, jako například *„pipe” funkci* (viz dále). Jako lépe předpřipravené ucelené řešení lze použít nějakou knihovnu jako [emphori/stark: Minimal and incredibly lightweight functional programming for JavaScript](https://github.com/emphori/stark).
{% include code.html caption="Příklad definice „pipe” funkce." code='
```JavaScript
/**
 * @param {...function} functions
 * @returns {(mixed: any)=> any}
 * @example
 * console.log(pipe(
 *  a=> a+1,
 *  a=> a*2
 * )(0));//= 2
 */
const pipe= (...functions)=>
  Array.prototype.reduce.bind(functions,
    (acc, currFunction)=> currFunction(acc));
```
' %}
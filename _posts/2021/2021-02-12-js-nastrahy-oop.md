---
issue: 62
title: Nástrahy (prototypové) dědičnosti v JavaScriptu
tags: [vývojářské tipy, JavaScript, OOP]
category: dev
show_toc: 3
reference:
    - lokální:
        mdn_dedictnost:
            caption: "Inheritance and the prototype chain"
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
        exploringjs_dedictnost:
            caption: "Prototype chains and classes"
            href: "https://exploringjs.com/impatient-js/ch_proto-chains-classes.html"
        kirupa_dedicnost:
            caption: "JS Tip of the Day: Prototypes as Instance of Type"
            href: "https://forum.kirupa.com/t/js-tip-of-the-day-prototypes-as-instance-of-type/643352"
        exploringjs_regexp:
            caption: "Pitfalls of `/g` and `/y`"
            href: "https://exploringjs.com/impatient-js/ch_regexps.html#pitfalls-of-g-and-y"
        mdn_classes:
            caption: "Classes"
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
        Reflect.construct():
            caption: "Mixing class and function Constructors"
            href: "https://forum.kirupa.com/t/js-tip-of-the-day-mixing-class-and-function-constructors/643264/1"
        clone:
            caption: "copy-constructor.js"
            href: "https://gist.github.com/rauschma/c00b747df893b8afa30bbdd0bb6357a9"
        copy:
            caption: "Kopírování objektů v JS"
            href: "https://jecas.cz/js-klonovani-objektu"
        memory:
            caption: "4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them"
            href: "https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/"
---

Tohle asi nebude pro zkušenější programátory nic nového. Spíše jde o občané (znovu)připomenutí těchto vlastností JavaScriptu.

<!--more-->

## Ukázka

Následující ukázka je jen edukativní (neošetřuje dostatečně reálné situace) a demonstruje několik situací, které mohou být matoucí.

{% include code.html caption="Ukázky vybraných nástrah, týkajících se OOP, v JavaScriptu" code='
```JavaScript
const pseudoArray= {
    _status: "empty",
    push(...prvek){
        if(!this._array) this._array= [];
        if(this._status==="empty") this._status= "not_empty";
        return this._array.push(...prvek);
    },
    next(){ // !4
        if(typeof this._index==="undefined") this._index= 0;
        if(this._array.length===this._index) return null;
        return this._array[this._index++];
    },
    get status(){
        return this._status;
    }
};

const $array= Object.create(pseudoArray);
$array.push("A");
console.log($array.next());
//="A"
console.log($array.status);
//="not_empty"
delete $array._status; //   !1
console.log($array.status);
//="empty"                  !1
console.log($array.next());
//=null
$array.push("B");
console.log($array.next());
//="B"
Object.assign($array, //    !3
    { _array: [ "C", "D" ], _index: 1 });
console.log($array.next());
//="D"                      !3
pseudoArray.push("?"); //   !2
const $array_wtf= Object.create(pseudoArray);
$array_wtf.push("??");
console.log($array_wtf.next());
//="?"                      !2
console.log($array_wtf.next());
//="??"                     !2
```
' %}

`pseudoArray` zde pracuje s internímy vlastnostmi `_array`, `_status` a `_index`. Ukázka je úmyslně napsána takto[^class] aby vynikla **[prototypová dědičnost](https://cs.wikipedia.org/wiki/JavaScript#D%C4%9Bdi%C4%8Dnost_%28Inheritance%29) typická pro JavaScript**.

### Prototypová dědičnost
Jde o to, že v JavaScriptu *nejsou třídy*, ale *objekty*. Ty mají vlastní atributy a metody, další pak dědí z „rodiče” (klíč `prototype` resp. `__proto__`) {% include reference.html target="mdn_dedicnost" %}{% include reference.html target="exploringjs_dedictnost" %}:

{% include code.html caption="Ukázka prototypové dědičnosti" code='
```JavaScript
const rodic= { a: "A", b: "B" };
const potomek= Object.assign(Object.create(rodic),
    { b: "b", c: "c" });
console.log(potomek.a);
//="A" ⇐ JS se podiva na `potomek.a`,
//   ten neexistuje, pokracuje tedy na `rodic.a`
console.log(potomek.b);
//="b" ⇐ JS se podiva na `potomek.b` a ten existuje,
//   ignoruje tedy existenci `rodic.b`
console.log(potomek.c);
//="c" ⇐ analogicky jako predchozi
```
' %}

Nyní by tedy měli být jasné situace `!1` a `!2`. U `!2` navíc nastala situace, kdy k `_array` jen přistupujeme a tedy pokud jsme jej (asi omylem?) vytvořili na rodiči, náš kód se chová „podivně”![^oprava__array] (viz skutečná implementace `Array` popsaná např. v {% include reference.html target="kirupa_dedicnost" %}). Na to navazuje `!3`, kdy v JavaScriptu neexistují[^private] privátní atributy, tj. lze je přepsat.

### Vnitřní stav „třídy”
V {{ site.data.abbr.OOP }} je časté, že si třída udržuje nějaký vnitřní stav (viz `!4`). Důležité je, si toto chování uvědomit **(číst/psát poctivě dokumentace!)**, aby nás toto nepřekvapilo, viz například {% include reference.html target="exploringjs_regexp" %}!


## Míchání zápisů v JavaScriptu
Kromně dříve ukázaného zápisu[^class] se v {{ site.data.abbr.JS }} setkáváme:

{% include code.html caption="Klasické „třídy” v JS" code='
```JavaScript
function Trida(name) {
    this.name= name;
}
Trida.prototype.logName= function(){
    console.log(this.name);
}
const instance= new Trida("jméno");
```
' %}

{% include code.html caption="Nové „třídy” v JS" code='
```JavaScript
class Trida{
    constructor(name){
        this.name= name;
    }
    logName(){
        console.log(this.name);
    }
}
const instance= new Trida("jméno");
```
' %}

{% include code.html caption="Prototypový zápis alá „třída” v JS" code='
```JavaScript
const Trida= {
    logName(){
        console.log(this.name);
    }
};
const instance= Object.assign(Object.create(Trida),
    { name: "jméno" });
```
' %}

Nový zápis je [Syntaktický cukr](https://cs.wikipedia.org/wiki/Syntaktick%C3%BD_cukr "Wikipedie") starého zápisu s několika změnami (přesněji {% include reference.html target="mdn_classes" %}). Potíž může nastat, pokud bychom z nějakého důvodu potřebovali použít starý postup, ale dědit ze třídy již přepsané do nového zápisu, viz {% include reference.html target="Reflect.construct()" %}.

Dále klíčové slovo `super` ve skutečnosti pracuje s prototypovou dědičností – lze jej používat i u objektů viz [Using `super.prop` in object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super#Using_super.prop_in_object_literals)[^super].

## Objekty jsou předávány referencí!
Častou potíží je, že v JS je skoro vše objekt, který se předává referecní a navíc díky dříve zmíněné dědičnosti se většinou neknonuje:

{% include code.html caption="`Object.assign` argumenty neklonuje!" code='
```JavaScript
const a= { A: "text" };
const b= Object.assign(a, { A: "!!!" });
console.log(a.A);
//="!!!"
```
' %}

… podobné je to pro [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), knihovnu [Moment.js](https://momentjs.com/) apod. Obecná rada je, na to myslet, **číst/psát dokumentaci**, počítat s možností klonování třídy (pokud dává smysl) {% include reference.html target="clone" %}. Dále být obecně opatrný (vědět co dělám) {% include reference.html target="copy" %}, protože můžu zbytečne alokovat místo v paměti {% include reference.html target="memory" %}.

## Reference
{% include references_list.html references=page.reference %}

[^class]: Často se používá populárnější zápis („z Javy”): `class pseudoArray{ … }; const $array= new pseudoArray();`. Technicky tyto zápisy dělají něco jiného, ale pro potřeby tohoto článku můžeme říci, že se „chovají stejně”. **Správný popis viz {% include reference.html target="mdn_dedicnost" %} a {% include reference.html target="mdn_classes" %}!**
[^private]: Viz podpora [JavaScript classes: Private class fields](https://caniuse.com/mdn-javascript_classes_private_class_fields "Podpora dle 'caniuse.com'").
[^oprava__array]: Šlo by opravit ručním vytvořením atributu na potomkovi: `Object.assign($array_wtf, { _array: [ "OK" ], _index: 0 });`.
[^super]: [A closer look at super-references in JavaScript and ECMAScript 6](https://2ality.com/2011/11/super-references.html)
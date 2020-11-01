---
issue: 41
title: "Provedení kódu po příštím překreslením stránky"
category: dev
tags: [JavaScript,snippet]
---

Na začátek, tento příspěvek je inspirován problémem provedení kódu po změně v {{site.data.abbr.DOM}}u podrobně popsaného v [When DOM Updates Appear to Be Asynchronous](https://macarthur.me/posts/when-dom-updates-appear-to-be-asynchronous). Problémem je, že `window.requestAnimationFrame` volá *callback* před následujícím překreslením viz [dokumentace](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame "Popis API na MDN").

<!--more-->

Kombinací dvou `window.requestAnimationFrame` zařídíme zavolání *callback*u před druhým následujícím překreslení. Obecná funkce by mohla vypadat nějak takto:

{% include code.html caption="Funkce pro zavolání *callback*u po příštím překreslení stránky (podtržítko mám jako úzus pro funkce vracející `Promise`)" code="
```JavaScript
function requestNextAnimationFrame(callback){
    return requestAnimationFrame(requestAnimationFrame.bind(null, callback));
}
function requestNextAnimationFrame_(){
    return new Promise(resolve=> requestAnimationFrame(requestAnimationFrame.bind(null, resolve)));
}
```
" %}

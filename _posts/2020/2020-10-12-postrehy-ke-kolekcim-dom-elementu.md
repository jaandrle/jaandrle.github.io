---
layout: post
tags: [JavaScript,DOM]
title: "Postřehy ke kolekcím DOM elementů"
category: dev
excerpt_separator: <!--more-->
---

[Axel Rauschmayer sdílel na Twitteru](https://twitter.com/rauschma/status/1311717821131431938 "Odkaz na příspšvek na Twitteru") postřeh o tom, že v *JavaScript*u máme dvě třídy reprezentující pole elementů (`NodeList` a `HTMLCollection`) a dvě varianty provázání s `DOM`em (statický a samoaktualizující). Z tohoto plyne několik vlastností/důsledků…

<!--more-->

## Společné vlastnosti
Obě třídy jsou podobné polím, ale nedědí z `Array`. Primárně to tedy spíš znamená, že jsou [iterovatelné](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "Dokumentace na MDN k 'Iteration protocol'"). Dále pak podporují spread operátor `...` a lze je převést na pole (`Array.from`). Z `Array` method ještě obě `DOM` kolekce mají getter `length` a `item` (metoda vrací prvek dle indexu, nebo `null`[^1]).

{% include code.html caption="Procházení kolekcemi elementů. V ukázce použitý `document.forms` vrací `NodeList`, viz dále v textu." code='
```JavaScript
const { forms }= document;
// Klasické procházení
for(let i=0, forms_lenght= forms.lengt; i<forms_length; i++){
    forms[i].className= "just-example";
}
// Novější
for(const form_el of forms){
   form_el.className= "just-example";
}
// forEach, map, …
Array.prototype.forEach.call(forms,
   form_el=> form_el.className= "just-example");
// … resp.
Array.from(forms).forEach(
   form_el=> form_el.className= "just-example");
```
' %}

## Reflektování změn v `DOM`u
Rozdíl spočívá hlavně v tom, zda se pole aktualizuje dle změn `DOM`u (např přidání elementu), viz [Live vs. Static NodeLists](https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Live_vs._Static_NodeLists "Příslušná sekce v dokumentaci NodeList na MDN"). Používá se názvosloví *live*/*static* (*živý*/*statický*), které je dostatečně popisné.

## `NodeList` (živý/statický)
Podrobné informace viz [NodeList - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

Jedná se výstup z [`document.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll "Dokumentace na MDN") (**statiscký**) resp. [`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes "Dokumentace na MDN") (živý).

V podporovaných prohlížečích obsahuje metody `forEach`, `values`, `entries`, apod.

## `HTMLCollection` (vždy živý)
Podrobné infomace viz [HTMLCollection - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection).

Vrací ji například [`Element.getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName), [`Element.getElementsByTagName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) či `document.forms`.

K prvkům pole lze přistupovat i přes HTML vlastnosti `id` či `name` daného elementu a to pomocí metody `namedItem` resp. pomocí závorek `pole["name_or_id"]` či tečkového zápisu `pole.name_or_id`.

{% include code.html caption="Využití přístupu k elementům `HTMLCollection` přes `name`." code='
```JavaScript
// pro <form name="login"><input name="login_email" type="email"/></form>
const login_form= document.forms.login;
const login_form_elements= login_form.elements;
const email_input= login_form_elements.login_email;
```
' %}


---
[^1]: Třídy samozřejmě podporují i klasický přístup k prvkům pole přes `[…]`, ten však vrací `undefined` pokud prvek neexistuje.
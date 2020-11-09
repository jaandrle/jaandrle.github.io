---
issue: 62
title: Nástrahy (prototypové) dědičnosti v JavaScriptu
tags: [vývojářské tipy, JavaScript, OOP]
category: dev
---

Tohle asi nebude pro zkušenější programátory nic nového. Spíše jde o obačné (znovu)připomenutí těchto vlastností JavaScriptu.

<!--more-->

{% include code.html caption="Ukázky vybraných vlastností, týkajících se OOP, v JavaScriptu" code='
```JavaScript
const rodic= { a: "A" };
const potomek= { "__proto__": rodic, b: "B" }
```
' %}
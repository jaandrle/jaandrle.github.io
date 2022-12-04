---
issue: 93
title: React JS bez tříd – Odkazy na aktualizované postupy
category: dev
tags: [ vývojářské tipy, JavaScript, React JS, node ]
updated: 2022-12-04
reference:
    - react_2020
---

[Axel Rauschmayer na Twitteru upozornil](https://twitter.com/rauschma/status/1301598857067933696), že pro (úplné) začátečníky není teď oficiální dokumentace úplně ideální.
V článku se nachází mnou posbírané odkazy na lepší návody.

<!--more-->

## Sumarizace
React je již delší dobu možné psát bez „staršího” zápisu pomocí tříd. A to díky [React Function Components](https://reactjs.org/docs/components-and-props.html) (<abbr title="React Function Components">RFC</abbr>) resp. {% include reference.html target="RH_official" caption="React Hooks" %} (<abbr title="React Hooks">RH</abbr>).

Z referencích bych primárně vypíchl minimalistický startovací projekt {% include reference.html target="minimal_react" %}. Zápis pomocí {{ site.data.abbr.JSX }}[^1] nahrazuje projektem [developit/htm](https://github.com/developit/htm), který používá podobnou syntaxi s využitím [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "Dokumentace na MDN"). Podobně u dalších rozhodnutí, obecně by měli stačit jen *znalosti JavaScriptu, {{ site.data.abbr.DOM }}u a npm (resp. node)*.

## Reference/K dalšímu zkoumání
{% include references_list.html references=page.reference %}

[^1]: Nejedná se vlastně o standardní {{ site.data.abbr.JS }} funkcionalitu! Je potřeba ji kompilovat.

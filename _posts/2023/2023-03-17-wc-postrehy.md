---
issue: 64
title: Postřehy k Webovým komponentám
category: dev
tags: [webové komponenty, custom elements, JavaScript, HTML, webdev]
show_toc: 3
---

Článek sdružující záložky, které jsem si poznamenal (před rokem 2023 – tj. možná neaktuální!).

<!--more-->

V tomto příspěvku se podíváme na několik zajímavých projektů a myšlenek týkajících
se webových komponent. Nejprve se zaměříme na nástroje a frameworky, které
nám mohou usnadnit práci s webovými komponentami, a poté se podíváme na některé
kritické postřehy a návrhy na zlepšení.

## Nástroje a frameworky

### uce-template

[uce-template](https://github.com/WebReflection/uce-template#readme) je nástroj
inspirovaný Vue 3 pro tvorbu webových komponent bez použití buildovacích
nástrojů. Více informací naleznete v [článku od Andrea Giammarchi](https://webreflection.medium.com/a-new-web-components-wonder-f9e042785a91).

### qwc

[qwc](https://github.com/Hydrophobefireman/qwc) nabízí rychlé a jednoduché
vytvoření webových komponent. K definování se používají template a objekty.

### haunted
[haunted](https://github.com/matthewp/haunted) nabízí možnost definovat
webové komponenty alá ReactJS.

## Kritické postřehy a návrhy na zlepšení

### Kolize požadavků na CSS

U webových komponent narážíme na problém sdílení CSS a zároveň
jejich odstínění, viz např. diskuze [Web components should be able to easily adapt to the host page while maintaining enapsulation · Issue #986 · WICG/webcomponents](https://github.com/WICG/webcomponents/issues/986).

Tento [příklad](https://gitlab.com/lit-element-softly/vanilla-web-components/-/blob/master/step-08-css-framework/index.html)
z vanilla-web-components ukazuje, jak použít sdílené CSS s webovými
komponentami.

### The failed promise of Web Components

Lea Verou ve svém [příspěvku](https://twitter.com/LeaVerou/status/1309168178761805825)
kritizuje slib webových komponent a uvádí, že potřebujeme lepší způsoby, jak
řešit jejich nedostatky.

### html-syntax-guidelines

V [html-syntax-guidelines](https://github.com/LeaVerou/html-syntax-guidelines)
Lea Verou shrnuje zásady a doporučení pro psaní čistého a srozumitelného HTML
kódu.

### Declarative Custom Elements Strawman

Tento [návrh](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Declarative-Custom-Elements-Strawman.md)
z WICG se zabývá deklarativním způsobem definování webových komponent.

### observed-state

[observed-state](https://github.com/ankar71/observed-state) je demo, které
ukazuje, jak lze implementovat správu stavu pomocí uce-template.

# K dalšímu zkoumání
Související GitHub repozitáře se snažím shraňovat zde [🌐 HTML/DOM/Web Components](https://github.com/stars/jaandrle/lists/html-dom-web-components).

---
issue: 113
title: Používání JSDoc v TypeScriptu (bonus „automatická” dokumentace)
category: dev
tags: [jsDoc, TypeScript, JavaScript, webdev]
---

Jen nástin používání typů při programování v JavaScriptu
a přitom stále těžit z výhod TypeScriptu.

<!--more-->

V tomto příspěvku se zaměříme na koexistenci
JavaScriptu s JSDoc a TypeScriptu. Projekty
není totiž přímo nutné psát v TypeScriptu,
při použití typického editoru (např. VSCode)
totiž získáme i zabudovanou kontrolu JavaScriptu.

Většina knihoven totiž nabízí deklarační soubory
`*.d.ts`, s jejichž pomocí editor dokáže kontrolovat
používání knihoven. Pro vlastní kód pak můžeme použít
část [JSDoc](https://jsdoc.app/about-getting-started.html) syntaxe.

## JSDoc v TypeScriptu

Podpora JSDoc v TypeScriptu umožňuje dokumentovat
kód za použití standardních JSDoc anotací. Více
informací o podporovaných typech a syntaxi lze
nalézt v [TypeScript: Documentation - JSDocReference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html?utm_source=pocket_mylist).

## Generování dokumentace z TypeScriptu

Můžete použít `gulp` spolu s `jsdoc-to-md` pro
generování dokumentace z JSDoc.

Bohužel, osobně jsem spokojenější s `typedoc-plugin-markdown`.
Nainstalovat lze pomocí `npm install --save-dev gulp-typedoc typedoc typedoc-plugin-markdown`,
odkazy ke studiu:

- [rogierschouten/gulp-typedoc: Gulp plugin for the typedoc TypeScript documentation tool.](https://github.com/rogierschouten/gulp-typedoc)
- [typedoc-plugin-markdown/packages/typedoc-plugin-markdown at master · tgreyuk/typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown)

Pro knihovny tedy nakonec píšu JavaScript & `d.ts`.
Pro používání JSDoc & `jsdoc-to-md` zkouším konverzi…

## Rozšíření JSDoc pro TypeScript

Existují různá rozšíření JSDoc pro lepší podporu
TypeScriptu, jako například
[jsdoc-advanced-types-plugin](https://github.com/alshakh/jsdoc-advanced-types-plugin/blob/master/index.js)
a
[jsdoc-typescript-plugin](https://github.com/jumpinjackie/jsdoc-typescript-plugin),
které umožňují generování TypeScript definic
(.d.ts) z JSDoc anotovaného zdrojového kódu.

## Důvody pro ne-migraci JavaScriptu na TypeScript

I přesto, že TypeScript nabízí mnoho výhod oproti
klasickému JavaScriptu, existují i důvody proč
některé projekty raději zůstávají u JavaScriptu.
Článek [One Reason not to migrate JavaScript to
TypeScript | Nerd For Tech](https://medium.com/nerd-for-tech/the-reasons-not-to-migrate-from-javascript-to-typescript-89b587ed9ac9)
se zabývá některými z těchto důvodů.

---
issue: 71
title: Kdy je `document`/stránka dostupná z JavaScriptu
category: dev
tags: [ vývojářské tipy, JavaScript, HTML, DOM, Web API ]
reference:
    - lokální:
        DOMContentLoaded:
            caption: "MDN dokumentace k `DOMContentLoaded`"
            href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event"
        load:
            caption: "MDN dokumentace k `window.onload`"
            href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"
        readyState:
            caption: "MDN dokumentace k `document.readyState`"
            href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState"
            description: 'Indikuje status stránky – `"loading"`= stále se parsuje, `"interactive"`= DOM již přístupný (srovnej s `DOMContentLoaded`) a `"complete"`= hotovo (srovnej s `load`).'
        docReady:
            caption: "Knihovna zobecňující `DOMContentLoaded` událost"
            href: "https://github.com/jaandrle/docReady"
            description: "Například „zfunkčnění” i na starších prohlížečích. Měla by fungovat po vzoru jQuery kódu: `$(document).ready()`."
---

Článek jen rychle shrnuje události `document.DOMContentLoaded`, `window.onload` a Vanilla JavaScript „alternativu” k `$(document).ready()`.

<!--more-->

## Chci jen `$(document).ready()`
Stačí přejít na {% include reference.html target="docReady" %}.

{% include code.html caption="Spíše pseudokód demonstrující, kdy se která událost fakticky volá." code='
```HTML
<html>
    <head>
        <meta charset="utf-8">
        <script>
            window.addEventListener("load",
                ()=> void( el.textContent= "Nadpis změněn") );
        </script>
    </head>
    <body>
        <script>
            var el;
            document.addEventListener("DOMContentLoaded",
                ()=> void( el= document.getElementById("test") ));
        </script>
        <h1 id="test">Nadpis</h1>
    </body>
</html>
```
' %}

## Průřez
`document` událost `DOMContentLoaded` je volána v situaci, kdy byl zparsován {{ site.data.abbr.HTML }} (tj. je dostuplný {{ site.data.abbr.DOM }}), zatímco `window` událost `load` je volána až jsou zpracovány i externí zdroje.

V ukázce, když prohlížeč zpracuje stránku zavolá funkci pro uložení elementu `el`, následně volá dříve definovanou funkci pro změnu textu.

Pro praktické použití je potřeba dbát i toho, že naše knihovna může být inicializována např. až na vyžádání. Tedy, pomocí {% include reference.html target="readyState" %} zkontrolovat, zda již události nenastaly.

Knihovna {% include reference.html target="docReady" %} toto bere v potaz, navíc přidává podporu pro straší prohlížeče. Primárně pracuje s událostí `DOMContentLoaded`, `load` je jen fallback!

## Reference
{% include references_list.html references=page.reference %}
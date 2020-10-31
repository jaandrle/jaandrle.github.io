---
tags : [first]
title: První příspěvek znovuobnoveného blogu (Hello World)
category: dev
show_toc: 3
reference:
    - lokální:
        generovani referenci:
            caption: Ukázka souboru pro generování referencí
            href: https://github.com/jaandrle/jaandrle.github.io/blob/master/_includes/references_list.html
            description: Zatím ne příliš univerzální
---

Tento blok využívá statický generátor stránek **Jekyll**. Pro více informací můžete navštívit wikipedii [Jekyll (software) - Wikipedia](https://en.wikipedia.org/wiki/Jekyll_(software)).

<!--more-->

## Demonstrace
Pár ukázek.

### Kus kódu

{% include code.html
    caption='Ukázka kódu'
    code='
```JavaScript
console.log("HI", \'honza\');
```
'
%}

### Obrázek

{% include image.html
    caption='Popisek obrázku'
    img='
![Jen demonstrace (na obrázku je stará? homepage Jekyll projektu)](/files/internal/404.jpg)
'
    attributes='height="896" width="896"'
%}

### Ukázka textového boxu

{% include textBox.html text="
> Toto je zvýrazněná část (např. poznámka).
" %}

### Ukázka citace `<blockquote>`

{% include blockquote.html caption="První věta v <cite>[Nineteen Eighty-Four](http://www.george-orwell.org/1984/0.html)</cite>: George Orwell (Part 1, Chapter 1)" blockquote="
> It was a bright cold day in April, and the clocks were striking thirteen.
" %}

### Ukázka citace `<q>`

Dle MDN stačí napsat {% include q.html q='[`<q>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q "MDN dokumentace")' %}.

### Ukázka referencí (viz {% include reference.html target='generovani referenci' %})

{% include references_list.html
    references=page.reference
%}

To je zatím vše. [^1]

[^1]: Test
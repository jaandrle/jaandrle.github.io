---
layout: post
tags : [first]
title: První příspěvek znovuobnoveného blogu (Hello World)
excerpt_separator: <!--more-->
category: dev
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
Kus kódu:

{% include code.html
    caption='Ukázka kódu'
    code='
```JavaScript
console.log("HI", \'honza\');
```
'
%}

Obrázek:

{% include image.html
    caption='Popisek obrázku'
    alt='Jen demonstrace (na obrázku je stará? homepage Jekyll projektu)'
    src='/files/internal/404.jpg'
%}

Ukázka referencí (viz {% include reference.html target='generovani referenci' %}):

{% include references_list.html
    references=page.reference
%}

To je zatím vše.
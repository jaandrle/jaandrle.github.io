---
issue: 63
title: Postřehy k naslouchačům v JavaScriptu
category: dev
tags: [JavaScript, webdev]
reference:
    - lokální:
        tip_dne:
            caption: "JS Tip of the Day: Attribute Event Scopes - programming / web dev - kirupaForum"
            href: "https://forum.kirupa.com/t/js-tip-of-the-day-attribute-event- scopes/643139"
        mdn:
            caption: "EventListener - Web technology for developers | MDN"
            href: "https://developer.mozilla.org/en-US/docs/web/api/eventlistene"
        garbage_collection:
            caption: "Event listeners and garbage collection - JakeArchibald.com"
            href: "https://developer.mozilla.org/en-US/docs/web/api/eventlistene"
        abort:
            caption: "Abortable Fetch | Web | Google Developers"
            href: "https://developer.mozilla.org/en-US/docs/web/api/eventlistene"
---

Článek sdružující záložky, které se mi nahromadili a týkají se naslouchačů v JS.

<!--more-->

Pokud pracujete s JavaScriptem, pravděpodobně se setkáte s mnoha situacemi, kdy 
potřebujete naslouchat určitým událostem a reagovat na ně. V tomto článku se 
budeme zabývat několika tipy a triky, které vám pomohou efektivně pracovat s 
naslouchači.

## Attribute Event Scopes

Začneme tím, že se podíváme na {% include reference.html target="tip_dne" %}
na fóru Kirupa. Zde je shrnuto, jak vlastně prohlížeč zpracovává:

{% include code.html caption="Ukázka z tipu, zajímá nás `onclick`" code='
```HTML
<button onclick="console.log(doctype)">
    Log doctype
</button>
<!-- click:
<!doctype html> (<- document.doctype)
-->
```
' %}

## EventListener

Dalším užitečným zdrojem informací je {% include reference.html target="mdn" %}.
Tato metoda umožňuje přidat naslouchače, který může být například přidán k 
určitému elementu a reagovat na různé události, jako je kliknutí 
myší nebo stisk klávesy na klávesnici apod.

## Garbage Collection a naslouchači

Posledním tématem, na které se zaměříme, je {% include reference.html target="garbage_collection" %}
 a jeho vztah k naslouchačům. Naslouchače mohou 
být zdrojem úniku paměti v JavaScriptu, pokud nejsou správně odstraněny, když 
již nejsou potřebné. Tento článek se zaměřuje na to, jak můžete zkontrolovat a 
odstranit nepotřebné naslouchače, aby nedocházelo ke zbytečnému plýtvání pamětí.

## Abortable Fetch

Uvádím jen poznámku, že `AbortController` má v JavaScriptu širší použití {% include reference.html target="abort" %}.

## Reference
{% include references_list.html references=page.reference %}

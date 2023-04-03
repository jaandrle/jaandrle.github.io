---
issue: 120
title: Ze záložek k CSS a responzivnímu designu
category: dev
tags: [CSS, SVG, design, webové komponenty, custom elements, webdev]
---

Článek sdružující záložky, které se mi nahromadili a týkají se CSS a obrázků a responzivního designu (vč. obrázků).

<!--more-->

Tento článek obsahuje kolekci odkazů na postprosessing `:is()` pseudotřídy,
kolekcí stylů a triků, které mohou pomoci s prací s CSS a SVG (i obecně obrázky).

Prozkoumáme, jak nové pseudotřídy, animace placeholderů a praktické
příklady CSS Houdini API mohou zlepšit vaše projekty. Dále se zaměříme
na responzivní design, optimalizaci obrázků a moderní techniky pro
práci s obrázky, jako je použití SVG ikon. Kromě toho se seznámíme
s tipy a triky pro implementaci tmavého režimu a zvážíme výhody SVG ikon
oproti ikonovým fontům.

## CSS postprocesory / kolekce stylů

- [`@csstools/postcss-is-pseudo-class` - npm](https://www.npmjs.com/package/@csstools/postcss-is-pseudo-class):
  Tento postprocesor řeší převod nové [`:is(…)` pseudotřídy](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
  na zápis pro prohlížeče, kde není podporován. Naneštěstí
  nelze použít na [`:where()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where), který má nulovou specificitu
  (což by nešlo nasimulovat).

- [Water.css](https://watercss.kognise.dev/):
  kolekce stylů pro (skoro) čisté HTML aby vypadalo „hezčeji”
  (např. řeší světlý/tmavý režim viz dále).

## CSS triky

- [:placeholder-shown](https://www.tiktok.com/@js_bits/video/6978841329723870469?_d=secCgYIASAHKAESMgowFATdhKckZCq7OgMCUA8pVype%2FtdGCCEyv%2BJecCKfng1G0xVW9IJbW2G8UrIu8EH%2FGgA%3D&checksum=ee39a8d6c2f9a99d45f324690d0c1da480dd95895cef5520acba7d163a79d133&language=cs&preview_pb=0&sec_user_id=MS4wLjABAAAAIb506GM6UixbvGHsiNtnhVdbtjquc3sOIS_luyCyYrTH2-ZbhwUARf1vLYQ6H0Br&share_app_id=1233&share_item_id=6978841329723870469&share_link_id=348bbcf0-5c25-41ee-b090-27c168184fb1&source=h5_m&timestamp=1624913360&u_code=dcj6mjlh66i7ge&user_id=6833841330151703558&utm_campaign=client_share&utm_medium=android&utm_source=more&_r=1):
  Tento příspěvek na TikToku ukazuje, jak snadno můžete použít
  `:placeholder-shown` pseudotřídu k elegantnějšímu řešení animace
  „placeholder vyjede nad input”.

- [Houdini.how](https://houdini.how/#):
  Houdini.how je katalog [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini), který vám poskytne praktické příklady a
  návody, jak využít Houdini API ve vašem projektu.

- [Flexbox Dynamic Line Separator - Ahmad Shadeed](https://ishadeed.com/article/flexbox-separator/):
  Tento článek představuje zajímavý způsob, jak vytvořit dynamický/responzivní
  oddělovač pomocí flexboxu. Jde o situaci „1|2 ←→ ½”.

- [@Jahoda na Twitteru](https://twitter.com/Jahoda/status/1582805364156039169/photo/1):
  Zajímavé řešení automatického vytváření kontrastní barvy textu k pozadí. Čistě v CSS pomocí proměnných.

- [CSS deskriptor size-adjust](https://www.vzhurudolu.cz/prirucka/css-size-adjust):
  Článek o CSS deskriptoru `size-adjust`, který umožňuje měnit velikost fontu
  dle potřeby.

## CSS tipy a triky na specifické problémy

- [Ahmad Shadeed na Twitter](https://twitter.com/shadeed9/status/1427652246813216770):
  zuje řešení implementace hodnocení hvězdičkami (star rating) s použitím SVG,
  který zohledňuje i částečné hvězdy (např. půlhvězdy).

- [Martin Michálek na blogu](https://www.vzhurudolu.cz/prirucka/css-tisk-knih):
  popisuje, jak autor sází knihu pouze pomocí CSS, což je zajímavý
  pohled na možnosti tiskového formátování pomocí CSS.

## Responsivní design a obrázky

- [SVGOMG - SVGO's Missing GUI](https://jakearchibald.github.io/svgomg):
  SVGOMG je nástroj s grafickým uživatelským rozhraním, který vám pomůže optimalizovat
  SVG soubory a snížit jejich velikost.

- [Squoosh](https://squoosh.app/): optimalizovat lze i pomocí cli utilit `AVIF` → `avifenc`, `cwebp`
  je online nástroj pro optimalizaci a konverzi obrázků, který podporuje
  různé formáty, jako je AVIF a WebP.

- [Building a responsive image](https://9elements.com/blog/building-a-responsive-image/):
  Tento článek se zabývá vytvářením responzivních log s použitím SVG.

- [Picture perfect images with the modern <img> element - Stack Overflow Blog](https://stackoverflow.blog/2022/03/28/picture-perfect-images-with-the-modern-element/):
  Článek na Stack Overflow Blogu zkoumá možnosti a nejlepší postupy pro práci s
  moderním `<img>` elementem, který podporuje různé formáty obrázků a techniky
  pro responzivní design.

## Cheat sheety

- [SQL/HTML/… cheatsheets](https://twitter.com/swapnakpanda/status/1566740489608790016/photo/1):
  Toto Twitter vlákno obsahuje grafiky pro HTML, CSS ale i další webdev věci

## Tmavý režim – tipy

- [Dark mode in 5 minutes, with inverted lightness variables – Lea Verou](https://lea.verou.me/2021/03/inverted-lightness-variables/):
  Tento článek nabízí rychlé a efektivní řešení pro implementaci tmavého režimu
  (dark mode) na vašem webu pomocí CSS proměnných a HSL. Podobně to zkoušel
  i Martin a jeho zkušenosti → [Jak na dark mode, tmavý režim webů](https://www.vzhurudolu.cz/prirucka/dark-mode).

- [Jak vytvořit tmavý režim / dark mode v CSS](https://jecas.cz/dark-theme):
  Článek popisuje, jak vytvořit tmavý režim (dark mode) v CSS, který bude
  respektovat nastavení uživatele a přizpůsobit se tak jeho preferencím.
  Samotný režim zkouší udělat přes `filter: invert(100%) contrast(90%) hue-rotate(180deg);`.

## SVG ikony

- [It’s 2019! Let’s End The Debate On Icon Fonts vs SVG Icons](https://www.lambdatest.com/blog/its-2019-lets-end-the-debate-on-icon-fonts-vs-svg-icons/):
  Tento článek zkoumá vývoj ikonových fontů a ukazuje, proč
  bychom měli dát přednost SVG ikonám. SVG ikony nabízejí lepší škálovatelnost,
  kontrolu nad barvami a styly, a také lepší podporu pro přístupnost. Navrhuje
  vyrobit/vyexportovat SVG s definicemi ikon `<defs><symbol>` a jejich
  používání přes `<use>`. Dále tomu říkejme ‚SVG sprite’ příszup.

- [IndigoMultimediaTeam/SVGIcon](https://github.com/IndigoMultimediaTeam/SVGIcon/)
  SVGIcon je moje webová komponenta, která usnadňuje práci s ‚SVG sprite’ příszupem.
  {% include code.html caption="Ukázka použití SVGIcon" code='
```HTML
<script>SVGIcon.setAlias("icon", "path/file.svg#")</script>
<svg-icon use="icon-icon_name"></svg-icon>
```
' %}

- [star icon](https://fosstodon.org/@kate/109389213208787297): Minimalistická SVG hvězda `<svg viewBox="0 0 48 48"><path d="m24 4-6 13-14 1 11 10-3 14 12-7 12 7-3-14 11-10-14-1z"/></svg>`.

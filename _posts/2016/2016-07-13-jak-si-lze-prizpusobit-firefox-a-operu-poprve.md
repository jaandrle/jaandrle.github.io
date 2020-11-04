---
layout: post
tags: [ Chrome, Chromium, Firefox, pokročilejší tipy, Opera, web ]
title: "Jak si lze přizpůsobit Firefox a Operu (Chrome) - Poprvé"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

V tomto článku shrnu svá nastavení a rozšíření prohlížečů, která používám. Článek jsem rozčlenil podle jednotlivých oblastí a v každé popsal, jak dosáhnou stejné funkcionality napříč prohlížeči. Což více či méně lze, nejproblematičtější jsou funkce typické pro starou Operu jako Speedial a možnost načítání plug-inů na vyžádání.

Vzhledem k tomu, že jsem se rozepsal, rozdělil jsem text na (prozatím) dva články. V tomto článku jsem se zaměřil na panely, navigaci po webu a práci s textem. Ve druhém se budu věnovat blokování nechtěného obsahu a některým dalším „drobnostem“.

<!--more-->

## Úvod

Od doby ukončení vývoje staré Opery jsem, tak jako asi všichni její uživatelé, hledal náhradu. Při té příležitosti, kdy jsem se seznamoval s ostatními prohlížeči, jsem také zredukoval své návyky. Ukázalo se totiž, že spousta věcí, které jsem používal, byly malicherné resp. jsem zjistil, že je vlastně nepotřebuji.

Nakonec jsem s dále zmíněnými úpravami skončil u Firefoxu. Protože jsem však také koketoval s novou Operou (Vývojářskou verzí) a Chromiem/Chrome, tak jsem zkoumal nakolik si lze přizpůsobit i je. Na nový prohlížeč jsem totiž kladl také požadavek, abych všechny nastavované resp. doinstalované funkce mohl v nějaké podobě případně používat i na jiném prohlížeči. Přechod ze staré Opery byl totiž opravdu bolestivý i právě proto, že jsem nesledoval ostatní prohlížeče.

Toliko na úvod, jak vůbec článek vznikl. Všechny zmíněné úpravy prohlížečů se samozřejmě mohou hodit komukoliv, byť některé jsou určeny spíše pokročilým uživatelům.

## Taby/Panely

### O zavírání posledního panelu
Jelikož aktivně využívám prohlížení v panelech (tj. více webů v jednom okně) trápí mně dvě věci. Za prvé nemám rád pokud se mi prohlížeč ukončí po zavření poslední záložky. Naštěstí Opera ani Firefox s tímto nemají problém. Přesněji, v případě druhého lze toto chování nastavit pomocí konfigurační stránky `about:config`. Zde je potřeba upravit nastavení `browser.tabs.closeWindowWithLastTab` na _false_.

Naproti tomu Chrome tuto možnost nenabízí ani pomocí žádného rozšíření. Jistou útěchou může být rozšíření [Keep Last Two Tabs](https://chrome.google.com/webstore/detail/keep-last-two-tabs/fcnmaiiahjldikaollhjobhchdbhfhgf "Odkaz na rozšíření pro Chrome Keep Last Two Tabs") (případně [Last Tab](https://chrome.google.com/webstore/detail/last-tab/nggjcpipkefkgldicofgmealjndjnhba "Odkaz na rozšíření pro Chrome Last Tab"), [Pin Last Tab](https://chrome.google.com/webstore/detail/pin-last-tab/lmhacemfmaapnkiehojbhmclmdnhjhfn "Odkaz na rozšíření pro Chrome Pin Last Tab")).

### O lepším používání mnoha panelů
Druhým problémem je pak zátěž počítače. Oproti staré Opeře jsou ostatní prohlížeče (bohučel i nová Opera) dost náchylní na opravdu velké množství otevřených panelů. Tomu se lze bránit tím, že se člověk trochu uskromní. Což není nikdy na škodu. Pokud však (vyjímečně) chceme otevřít vícero panelů můžeme použít rozšíření [Open Link in Silent Tab](https://addons.mozilla.org/cs/firefox/addon/open-link-in-silent-tab/?src=api "Odkaz na rozšíření pro Firefox Open Link in Silent Tab") (pro Firefox).

Toto rozšíření přidá stejně pojmenovanou možnost (lze v nastavení rozšíření změnit) do kontextové nabídky odkazů. Při zvolení této možnosti se link otevře v novém panelu, ale stránka se nenačte dokud panel uživatel nezvolí.

Podobné funkcionality lze dosáhnout v Opeře/Chrome pomocí rozšíření  [VIEW LATER](https://chrome.google.com/webstore/detail/view-later-save-links-in/hnolaplfoobcmgfmjphkmbjolinelpkb "Odkaz na rozšíření pro Chrome VIEW LATER") (do Opery jej lze nainstalovat pomocí postupu v [Užitečné tipy - Poprvé](/archive/2013-12-16/uzitecne-tipy-poprve "Užitečné tipy - Poprvé")). 

Podobně jako u Firefoxu rozšíření přidá položku do kontextové nabídky pojmenovanou _View link later_. Rozšíření však funguje jako tzv. TODO list, tedy takto přidané odkazy zapisuje do interní paměti - seznamu (neotvírá přímo panely). K rozšíření lze však přidat klávesovou zkratku pro otevření prvního odkazu na seznamu (v nastavení však možná nešťastně pojmenováno jako „opens the latest added page“), čímž lze dosáhnout podobného chování jako ve Firefoxu.

{% include image.html caption='Sekce Zkratky v nastavení Opery'
    img='![Screenshot/výřez z nastavení Opery zobrazující sekci Zkratky](https://dm2302files.storage.live.com/y3pjO1o0mGQ6QNCfxTRTQakLmizB0SweiTBjMgKpMM7wffKEYOuFGdBBd4KafdlJbLbIlP920eDFdrij2lucdwxehFLuIw89IZ1nsrlheT_84126IIbchHpVTPVV31AYgvsvEh0YIBLoJ8-wRCWXO8HCA/O-zkratky.png?psid=1&width=364&height=152)'
%}

![]()
{% include image.html caption='Rozšíření VIEW LATER lze přiřadit 3 zkratky'
    img='![Ukázka části nastavení zkratek rozšíření VIEW LATER](https://dm2302files.storage.live.com/y3ppffrU50e7Vfm542JfT4-o8oRYldprUXib6-gK_uTUNAxh7-TXZQH4vMeQjMleH1bkkKsukgF2ULqZS4NRjQM3Yt6ho6_L-hJn-m3dcMYIq30fhYkjiLQGfrK-jlmkua9tn4SOnRxlumE8otU5t_MHw/O-zkratky01.png?psid=1&width=464&height=108)'
%}

Kde se nastavují zkratky v Opeře

Abychom dosáhly kýženého efektu, je ještě potřeba poupravit nastavení rozšíření. Pro ukázku připojuji svoje:

{% include image.html caption='Ukázka nastavení VIEW LATER (vyšší kvalita po kliknutí)'
    img='![Nastavení VIEW LATER: kromě třetí položky vše zaškrtnuto](https://dm2302files.storage.live.com/y3prKieQNiaj3kssGBMixOK3tocT2Ggi9LdGO3pMipo6UCWGpLHF3lPCMXm9Vx1hJ0VR7DRZ1H6HBvi3LWxRBLBlZ5M-1JYVLQvK74mtD7_7V9rxCE1uySYOHnTm3B3Yi46Cz8tWITLHLXDOwkRWaYL1A/O-vievlater.png?psid=1&width=319&height=166)'
    href='https://ddg2jq.dm2302.livefilestore.com/y3mQbHdxZCZR2DzOF4bWreTXSLtfyNN-jrW6fF36Cm7S9ej9dnqaL7Yk5wkoa9iXG3wKwWNbOxH1U0GNhm_1V0lYKfK-iU7qeZkBkZVAbDUZ8r2LqAI3SQXSITiJ8tlRRM8fbPvzTlbtgnjI-G8ZvJxFrit4WcBmaqquXPJoqBY35w?width=795&height=413&cropmode=none'
%}

### O Tab Mix Plus a Skupinách ve Firefoxu
Ve Firefoxu lze provést o mnoho více pomocí rozšíření [Tab Mix Plus](https://addons.mozilla.org/en-US/firefox/addon/tab-mix-plus/ "Odkaz na rozšíření pro Firefox Tab Mix Plus"). Zde je například možné panely obarvit, zobrazit progressbar načítání či nastavit zobrazení tlačítka pro zavření panelu pouze na aktuálním panelu. Pro organizaci panelů (analogie seskupování panelů ze staré Opery) lze používat rozšíření pro Firefox [Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/tab-groups-panorama/ "Odkaz na rozšíření pro Firefox Tab Groups"). Podobně fungující a funkční rozšíření bohužel pro Crome ani Operu není.

### O přepínání panelů – 1.
V rozšíření **Tab Mix Plus** lze také upravit přepínání panelů, pro mně je přirozené nastavení přepínání dle poslední návštěvy (tak jak se používá v operačních systémech). Opera má toto nastavení k dispozici samo v sekci _Uživatelské rozhraní_ (možná je dokone defaultně zvolené). Chrome bohužel neumožňuje toto nastavení, je nutné nainstalovat rozšíření [Toggle Switch Recent Last Tabs](https://chrome.google.com/webstore/detail/odhjcgnlbagjllfbilicalpigimhdcll) a tomuto rozšíření přiřadit nějakou vlastní klávesovou zkratku.

### O přepínání panelů – 2.
Ve všech prohlížečích lze dále používat zkratky **Ctrl+1** až **8** pro přepnutí na 1\. až 8\. panel, na poslední panel lze přepnout pomocí **Ctrl+9**, a **Ctrl+PgUp** či **Ctrl+PgDn** pro přepínání dle pořadí na liště panelů.

## Vyhledávání resp. navigace na stránce

Ve všech prohlížečích lze vyvolat vyhledávání na stránce. Ve Firefoxu lze však postoupit o mnoho dále. Začít vyhledávat lze jen stisknutím lomítka **`/`**, či dokonce lze vyhledávat rovnou psaním volbou v nastavení `Rozšířené > Obecné > Usnadnění > Psaním vyhledávat na stránce`.

Ale to není vše, pokud půjdeme do pokročilých možností nastavení v `about:config` a zde zvolíme v `accessibility.typeaheadfind.linksonly` logickou hodnotu _true_. Dosáhneme toho, že Firefox bude vyhledávat _pouze v odkazech_, přičemž standartní možnosti vyhledávání (pomocí klávesové zkratky _**Ctrl+F**_) nebudou ovlivněny.

### O navigaci na Internetu psaním
Při takovémto nastavení stačí vždy jen začít psát název odkazu, kam chceme jít, dokud jej Firefox neoznačí a pak stiknutím klávesy **Enter** na příslušnou stránku přejít. Pokud rádi používáte klávesnici, může to pro vás být zajímavá možnost navigace po webu (mně se osvědčila velmi).

V Opeře resp. Chrome stejné funkcionality dosáhneme pomocí rozšíření [Type-ahead-find](https://chrome.google.com/webstore/detail/type-ahead-find/cpecbmjeidppdiampimghndkikcmoadk "Odkaz na rozšíření pro Chrome Type-ahead-find").

## Výběr textu a překlad

Aby bylo možné bezproblému označovat text i v odkazech, lze používat rozšíření [Drag-Select Link Text](https://addons.mozilla.org/cs/firefox/addon/drag-select-link-text/?src=api "Odkaz na rozšíření pro Firefox Drag-Select Link Text") (Firefox), či _Select like a boss_ ([Opera](https://addons.opera.com/cs/extensions/details/select-like-a-boss/?display=en "Odkaz na rozšíření pro Operu Select like a boss"), [Chrome](https://chrome.google.com/webstore/detail/select-like-a-boss/mnbiiidkialopoakajjpeghipbpljffi "Odkaz na rozšíření pro Chrome Select like a boss")).

U jakéhokoliv vybraného textu si lze v kontextové nabídce zobrait překlad pomocí rozšíření pro Firefox [gtranslate](https://addons.mozilla.org/cs/firefox/addon/gtranslate/ "Odkaz na rozšíření pro Firefox gtranslate") (v kontextové nabídce vybraného textu stačí zvolit položku „Translate ...“). V [Opeře](https://addons.opera.com/cs/extensions/details/translator/ "Odkaz na rozšíření pro Operu Translator") resp. [Chrome](https://chrome.google.com/webstore/detail/translator/blndkmebkmenignoajhoemebccmmfjib "Odkaz na rozšíření pro Chrome Translator") lze vybraný text přeložit pomocí rozšíření _Translator_, kterému se přiřadí libovolná klávesová zkratka.

## Závěrem

Na blogu jsem se také věnoval [Otevíráme dokumenty z Internetu](/archive/2014-03-30/otevirame-dokumenty-z-internetu "Otevíráme dokumenty z Internetu") a [Vyhledávání v Internetu v prohlížečích](/archive/2014-04-06/vyhledavani-v-internetu-v-prohlizecich "Vyhledávání v Internetu v prohlížečích"). V posledním zmiňovaném článku jsem představil rozšíření, kterému jsem se věnoval v [All in one web Searcher](/archive/2014-04-27/all-in-one-web-searcher "All in one web Searcher"), suplující chybějící vyhledávací políčko. V případě Opery již je však možné toto políčko zobrazit přímo v Opeře pomocí skrytého nastavení v [opera://flags/#search-box-in-address-bar](opera://flags/#search-box-in-address-bar "Link zobrazí nastavení vyhledávacího pole v Opeře"). Prozatím je však funkčně velmi chudé (nelze např. přepínat vyhledávací služby).

To je tedy prozatím vše, těšte se na pokračování.
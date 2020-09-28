---
layout: post
tags : [chrome, chromium, ms_word, office, opera, programy, tipy, triky, ubuntu, windows]
title: "Užitečné tipy - Poprvé"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

První díl seriálu, kde se setkáme s pro někoho neznámými triky a tipy pro ovládání počítače. Tentokrát se zaměříme na prefix "shell:" (Windows), hibernaci (Ubuntu), používání konkurenčních rozšíření (Chrome/Chromium nebo Opera 15 a vyšší), vložení textu jinak (MS Office) a nakonec se pokusíme získat placený program zadarmo.

<!--more-->

## Něco na úvod

V tomto seriálu bych vás rád, vždy na několika řádcích, seznámil s užitečnými postupy, "udělátky" a programy. Pro většinu nadšenců do počítačů půjde spíše již o známé věci, ale budu se snaži zaujmout i vás.

## Shell složky

[pro uživatele Windows]

Než se zaměříme pouze na složky, musíme zmínit, co to ten prefix `shell:` vlastně je. Jedná se o způsob jakým můžou nejenom programátoři přistupovat k objektům (šložkám a příkazů) operačního systému. Podrobné informace lze nalézt v [MSDN - Dev Center Library](http://msdn.microsoft.com/en-us/library/windows/desktop/bb776426%28v=vs.85%29.aspx "Podrobné informace o prefixu "shell:" na webu MSDN Microsoft") a [MSDN - <span>Developer Network </span>Library](http://msdn.microsoft.com/en-us/library/ms723237.aspx "Přehled metody "System.Shell.knownFolder""), kopletní seznam možných příkazů pak v [článku na mallvoid.com](http://smallvoid.com/article/winnt-shell-keyword.html "Kompletní seznam možných příkazů "shell:""). Oproti "jednoduchým" zástupcům lze pomocí `shell:` vyvolat určité dialogy ale hlavně systémové složky (např. AppData) či složky závislé na přihlášeném uživateli (např. složka s volbami Odeslat). Oproti proměnným (např. `%userprofile%`) volají "přímo" daný objekt, proměnná je prostě jen nahrazena skutečnou cestou.

Nyní k aplikacím. Tento způsob přináší možnost rychlejší navigace (buď z adresního řádku v Průzkumníku Windows, či vyhledávání v nabídce Start, případně dialog Spustit vyvolaný klávesovou zkratkou WIN+R) do speciálních složek, například (kompletní seznam viz dříve): `shell:Recent` (naposledy navštíveno), `shell:Contacts` (složka Kontakty), `shell:Templates` (šablony), `shell:Fonts` (složka nainstalovaných fontů), `shell:History` (složka historie prohlížení Internetu Explorer), `shell:RecycleBinFolder` (Koš), ... Další a asi zajímavější aplikací je vytvoření "zástupce" na tyto složky, takovéhoto zástupce lze pak totiž umístit do Rychlého přístupu (platí pro Windows Vista a starší), či připnout (platí pro Windows 7 a novější) na Hlavní panel nebo do nabídky Start. Zvlášte pak pro Koš je to zajímavá alternativa ke klasickému umístění na Ploše.

Kompletní návod pro vytvoření zástupce je k nalezení v [článku na askvg.com](http://www.askvg.com/how-to-pin-my-computer-recycle-bin-other-useful-shortcuts-to-windows-7-taskbar/ "Připnutí zástupce "sehll:" ve Windows 7") (v angličtině) a další tipy k možnostem navigace ve článku Jiřího Brejchala "[Elegantní navigace mezi složkami](http://www.jiribrejcha.net/2009/09/elegantni-navigace-mezi-slozkami/)". Nazávěr zbývá již jen upozornění, pokud by Vás, jako mně, napadlo vyhledat `shell:RecycleBinFolder` pomocí nabídky Start a nalezný záznam následně připnout, tak je asi důležité říci, že již pak **nelze** odepnout a ani přejmenovat.

## Zlobivá hibernace

[pro uživatele (nejenom) Ubuntu]

V Ubuntu je kvůli bezpečnosti defaultně možnost hibernovat (tj. uložit sezení na disk) deaktivována. Což by až takový problém nebyl, neboť je možné ji relativně jednoduše aktivovat na příslušném místě (podrobněji [článku](http://gdhnotes.blogspot.cz/2012/05/unity-nenabizi-hibernaci-tak-mu.html "Článek "Ubuntu nenabízí hibernaci.. Tak mu domluvíme!"") na [GdH - Notes](/archive/2014-03-25/gdh-notes "blog převážně o linuxovém desktopu")). V článku si můžete všimnout změny z verze 13.04 na 13.10, bohužel já jsem si toho nevšimnul a tak se mi hibernace opět deaktivovala. Jelikož však hibernuji přes vypínací tlačítko na laptopu (nikoliv z nabídky), tak jsem si toho nešimnul. Ne, že by hibernace přestala fungovat, ale pokud není aktivována, tak se počítač automaticky nezamyká.

Řešením je tedy povolení hibernace (viz dříve), případně použití [tohoto scriptu](/images/2013-12/screenlock.sh.tar.gz "Script pro uzamykání počítače po hibernaci [Ubuntu]"), který se umístí do `/etc/pm/sleep.d`. Pomocí scriptu lze samozřejmě pouštět i jiné příkazy. Při tvorbě scriptu jsem se narazil na problém, který je ve scriptu již vyřešen, totiž script se spouští s právy root, což pro gnome-screensaver nefunguje (není pro něj nastaveno heslo). Řešením je tedy spustit příkaz jako "klasický" uživatel (viz script). Samozřejmě pro obecnější řešení (více uživatelů) je potřeba zvolit toho, jenž hibernaci aktivoval!

## Používání rozšíření z konkurenčního prohlížeče

[pro uživatele Chrome/Chromium nebo Opera 15 a vyšší]

Pokud jste hrdý uživatel nové Opery (tj. verze 15 a novější) a brousíte si zuby na rozšíření z Chrome Web Storu, pak právě pro Vás je tu rozšíření [Download Chrome Extension](https://addons.opera.com/cs/extensions/details/download-chrome-extension-9/?display=en "odkaz na rozšíření Download Chrome Extension"). Po jeho nainstalování stačí již jen navštívit [Chrome Web Store](https://chrome.google.com/webstore/category/extensions "stránka s rozšířeními pro Google Chrome/Cromium") a kliknout na zvolené rozšíření. A co naopak?

Tedy pokud používate Chrome/Cromium a hledáte třeba pořádné rozšíření pro čtení rss. Tak není nic jednodužšího, než navštívit [<span>Doplňky</span> Opery](https://addons.opera.com/cs/) a zvolené rozšíření stáhnout kliknutím na "Přidat do Opery" a následně "_Or just get it anyway_". Rozšíření se stáhne s příponou `.nex`, tu stačí jen přejmenovat na `.crx`. Tento soubor již jen stačí přesunout nad stránku `chrome://extensions/` otevřenou v Chrome (prohlížeč jinak totiž blokuje instalaci z jiných zdrojů než Chrome Web Store).

Postup by samozřejmě fungoval i opačně z Chrome do Opery, ale bohužel z Chrome Web Store nelze stahovat pomocí jiného prohlížeče než Chrome. Jinak zmíněnou čtečku rss najdete pod jménem [Smart RSS](https://addons.opera.com/cs/extensions/details/smart-rss/?display=en "RSS čečka pro Operu") a hodit se bude taktéž [RSS Detector](https://addons.opera.com/cs/extensions/details/rss-detector/?display=en "Detekce RSS zdrojů pro Operu"), který na stránce detekuje rss zdroje. Já jsem si navíc oblíbil [Translator](https://addons.opera.com/cs/extensions/details/translator/?display=en "Překladač pro Operu") (nepřekládá jen pomocí Googlu).

## Vkládání textu jinak...

[pro uživatele Microsoft Office 2010]

Metoda, kterou většina z nás používá nejčastěji (pomocí kláveskových zkratek CTRL+C a následně CTRL+V), pro kopírování textu odněkud někam má jednu dost nepříjemnou vlastnost. Pokud totiž kopírujeme již formátovaný text tak cílová aplikace, v našem případě například Microsoft Word, vloží text včetně onoho formátování. A co když zrovna toto chování neoceňujeme? Pak zde máme rozsáhlý návod na oficiálních [stránkách MS Office](http://office.microsoft.com/cs-cz/word-help/control-the-formatting-when-you-paste-text-HA010215708.aspx "Ovládání formátování při vkládání textu pro Word 2007") (platí pro verzi 2007 a novější), ve starších verzí lze postupova skrz nabídku `Úpravy > Vložit jinak ...`.

Ale co většina lidí včetně IT profesionálů neví. Totiž, že MS Office ve své neskonalé moudrosti mají k tomuto účelu klávesovou "zkratku". Postupuje se tak, že se klasicky stiskne CTRL+V, poté se stiskne samotné CTRL a poté opět buď samotná klávesa T (vložit pouze text), nebo U (vložit s formátováním zdroje), anebo M (sloučit), či G (grafika). Bohužel plně implementována je tato funkcionalita jen v novějších verzí jako Microsoft Office 2010.

## Placené programy zdarma

[pro uživatele Windows]

Jen jeden den, ani o hodinu více, ani o hodinu méně. Jen jeden den na stažení, instalaci a aktivaci programu. A proč? Protože, pokud tak neučiníte, nabídka se stáhne a vy nebudete mít daný program zcela zdarma! To není sci-fi, prostě jen způsob, jak uživatelům nabídnout možnost vyzkoušet plnohodnotný placený program aniž by firmy na akci výrazně tratily. Jedná se vždy o jednu licenci, bez technické podpory a s dalšími podobnými omezeními - avšak bez omezení programu (žádná demo, trial, ... verze). Nebudu zastírat, že v drtivé většině případů nabízené programy nikdy nevyužijete, ale jde právě o to malé procento. Chcete program na správu (a částečně úpravu) fotek? Tak právě takto můžete získat např. Zoner Photo Studio zcela zdarma! Pojďme si tedy ukázat, kde tak lze učinit.

Průkopníkem této myšlenky je web [Giveaway of the Day](http://www.giveawayoftheday.com/ "Placené programy zdarma na Giveaway of the Day"). Na titulní stránce je vždy program, který je právě zdarma, visí zde vždy jeden den a poté se zde objeví nabídka zase na jiný program. Obdobně fungují též [Daily Software Giveaway](http://dailysoftwaregiveaway.com/ "Placené programy zdarma na Daily Software Giveaway") a [BitsDuJour](http://www.bitsdujour.com/software/free-giveawayoftheday "Placené programy zdarma na BitsDuJour").

Pokud fandíte firmě Ashampoo, tak i jejich programy (většinou starší vydání) lze získat občas zdarma, konkrétně [na ashampoo.com](http://www.ashampoo.com/en/usd/lpa/softpedia "Ashampoo nabídka pro server Softpedia"), [na softpedii.com](http://news.softpedia.com/news/Free-Full-Versions-for-Ashampoo-Software-292544.shtml "Některé starší verze programů firmy Ashampoo") a opět [na softpedii.com](http://www.softpedia.com/get/Antivirus/Ashampoo-Anti-Malware.shtml "Ashampoo Anti-Malware").
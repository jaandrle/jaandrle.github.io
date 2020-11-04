---
layout: post
tags: [ pokročilejší tipy, pokročilejší návody, tisk, WiFi, Windows, Windows Media Player ]
title: "Užitečné tipy - Po druhé"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

Druhý díl seriálu, kde se setkáme s pro někoho neznámými triky a tipy pro ovládání počítače. Tentokrát se zaměříme na chybovou zprávu „_Došlo k interní chybě. Parametr je nesprávný: (0x80070057)_“ zobrazenou při pokusu o zálohování (Windows), zálohování nastavení WiFi sítí (opět Windows), restartování tiskových úloh (Windows) a spuštění více instancí přehrávače (Windows Media Player).

<!--more-->

## Něco na úvod

V tomto díle se na několika řádcích, seznámíme s užitečnými postupy a programy, které nám pomůžou ze svízelných situací při práci s operačním systémem Windows. Pro většinu nadšenců do počítačů půjde spíše již o známé věci, ale budu se snaži zaujmout i vás.

## Chyba 0x80070057

[pro uživatele Windows 7 a Windows 8]

### O vzniku této chyby
Tato chyba se objevuje velmi zřítka, ale zase ne zcela vůbec. Navíc, pokud člověk nezálohuje pravidelně (a často), případně pro zálohování nevyužívá integrovanou aplikaci ve Windows, nemusí si této chyby všimnout vůbec. Možná si říkáte, že tato skutečnost je snad samozřejmá, ale ve skutečnosti se nejedná o chybu samotného programu pro zálohování, ale systému. Konkrétně tedy problém _používání oddělovače desetinných míst_.

### O typických příznacích
Chyba se tedy projevuje _všude_ tam, kde se používají oddělovače desetinných míst resp. oddělovač tisíců. Tedy mnohem častější je nevyzpytatelné chování **tabulkového procesoru** typicky Microsoft Excel. Také lze pozorovat problémy například ve **Správi úloh** (chybí údaje využití paměti RAM).

### O problému desetinného oddělovače obecně
Přestože se programy chovají nestandardně (jen při práci s čísli samozřejmě), _nezobrazují_ žádnou chybu. Teď tedy víte, že stačí spustit Správce úloh a zálohování. Pokud fungují jak mají, můžete dále hledat problém v **Ovládací panelech**, v položce **Hodiny, jazyk a oblast**, kde klikněte na položku **Oblast a jazyk**. Na kartě **Formáty** dále klikněte na položku **Další nastavení** a zde zkontrolujte správné nastavení oddělovačů (pokud např. používáte anglickou verzi programu budete muset nastavit anglické oddělení tisíců `,` a desetinných míst `.`).

### O způsobu řešení
Pokud však Správce úloh nezobrazuje kolik paměti programy využívají a **zálohování hlásí chybu 0x80070057**. Stačí jen následovat odkazy pro [Automatickou opravu](http://support.microsoft.com/kb/982736/cs#FixItForMeAlways "Oprava pomocí aplikace Fix it") případně pro [Manuální opravu](http://support.microsoft.com/kb/982736/cs#LetMeFixItMyselfAlways "Oprava pomocí zásahu do systémových registrů") (doporučuji spíše).

## Zálohování nastavení (WiFi) sítí

[pro uživatele Windows Vista a novější]

Tento návod nejvíce ocení majitelé přenosých zařízení, kteří hojně využivají přípojení k Internetu z různých (zdarma) dostupných WiFi sítí. Pokud totiž, chtete informace o těchto sítí zálohovat (například pro použití na jiném počítačí), systém Windows vás nemile překvamí. Systém totiž tuto možnost, zdá se, nenabízí, nebo snad ano?

### O zálohování
Zálohování je možné provést pomocí příkazu `netsh wlan export profile folder=“...“`, ten stačí zadat do Příkazového řádku či dialogu Spustit (klávesová zkratka **WIN+R**). Místo tří teček je **nutné** zadat cestu složky, kam se má záloha uložit (jedná se o soubor ve formátu XML).

### O obnově
Obnovu ze zálohy lze pak provést příkazem `netsh wlan add profile filename=“...“`, místo tří teček je nuté zadat **cestu** ke zmíněnému souboru XML, tedy např.: `C:\Zaloha\wlan-janandrle.xml`.

### O specifických potřebách
Tímto způsobem se zálohují sítě jen přihlášeného uživatele, pro zálohování/obnovení sítí všech uživatelů stačí k příkazům připsat `user="all"`. Pro zálohování jen jedné síťe lze využít [tento](http://extrawindows.cnews.cz/zaloha-obnoveni-nastaveni-bezdratove-site-ve-windows-7 "Návod ze Cnews.cz") návod.

## Restartování tiskových úloh

[pro uživatele Windows 2000 a novější]

Každý se určitě setkal se situací, kdy si chtěl vytisknout právě dopsaný dokument, ale tiskárna ne a ne začít tisknou. Přitom však naše tiskárna netrpí nedostatkem ingoustu či papíru! Co ted?

### O klasickém (ne)řešení
No, navštívíme příslušnou stránku [Microsfot](http://support.microsoft.com/kb/946737/cs "Jak zrušit tiskové úlohy?")u (strojový překlad). Respektive pokusíme se použít možnosti, které nám systém k řešení tohoto problému dává: [Zobrazení, pozastavení a zrušení tisku](http://windows.microsoft.com/cs-CZ/windows7/view-pause-or-cancel-printing "Článek " Zobrazení, pozastavení a zrušení tisku"").

### O účinějším řešení
Pokud se nám stále nedaří tisknout, nezbývá nic jiného, než použít tento prográmek (dávkový soubor): [RestartTiskovychUloh.bat](https://skydrive.live.com/download.aspx?cid=EBD7AB323284C5B2&resid=EBD7AB323284C5B2%218231&canary=r2R9P8s91w9Dy%2FOVcwmOp9YyaOpONxNzMakd62eXA18%3D0 "RestartTiskovychUloh.bat - dávkový soubor") nebo počítač restartovat.

## Více instancí přehrávače

[pro uživatele Windows Media Player 12 a novější]

Právě si přehráváte hudbu, když vás napadne si pustit krátké video. Bohužel Windows Media Player (dále již jen WMP) nám nedává na výběr, buď hudba, nebo video. Tato situace lze řešit pomocí tzv. playlistů, ale my si tentokrát ukážeme jak spustit <abbr title="Windows Media Player" lang="en">WMP</abbr> ještě jednou. Pomůže nám k tomu prográmek [Multiple Windows Media Player](http://www.lukepaynesoftware.com/patches/Multiple_WMP.zip) (k nalezení na [stránkách Luke Payne](http://www.lukepaynesoftware.com/other/ "Osobní stránky vývojáře se jménem Luke Payne")).

### O aktivaci pomocí prográmku
Prográmek stačí stáhnout, rozbalit (jedná se o archiv ZIP) a spustit. Objeví se dialog, kde stačí klinout na položku _Active_, v budoucnu pak funkcionalitu deaktivujeme kliknutím na_ Deactive_. A nyní již jen spustit druhý <abbr title="Windows Media Player" class="" lang="en">WMP</abbr>.
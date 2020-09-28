---
layout: post
tags : [návody, tipy, triky, windows]
title: "Kontextová nabídka"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

Kontextová nabídka ve Windows je mnohokrát velmi silný nástroj při práci s počítačem. Asi víte, že při kliknutí pravým tlačítkem myši nad Plochou lze lehce vyvolat ovládací panel Přizpůsobení (ve Windows Vista/7), případně vytvořit nový soubor a mnoho dalšího. Ale co když nám, uživatelům, nějaký příkaz schází? Tím jsme narazili na první důvod proč by si ji měl uživatel přizpůsobit.

Samozřejmě není vhodné do kontextové nabídky "narvat" tisíce nástrojů (příkazů) a myslet si, že se takto "vylepšená" a nepřehledná nabídka bude dobře používat. A tím se dostáváme k druhému důvodu proč si kontextové nabídky přizpůsobit. Totiž při instalaci některých programů jsou do kontextových nabídek přidány nové příkazy, které uživatel v lepším případě využije jen zřídka (v horším případě nikdy). Tyto příkazy je tedy vhodné z nabídky odstranit.

<!--more-->

## Přidání položky do kontextové nabídky
Upravit kontextovou nabídku lze buď pomocí nástrojů dostupných přímo ve Windows (těžší postup), nebo použít nástroje třetích stran (lehčí postup). Obě možnosti si v následujícím textu rozebereme.

## Používáme nástroje dostupné přímo ve Windows
Sám operační systém nabízí velmi intuitivní nástroj pro práci s kontextovou nabídkou. Kéž by tato věta byla pravdivá, že? Ale asi už tušíte, že tak úplně není. Jediným způsobem, jak dosáhnout úpravy kontextové nabídky je editace systémového registru. V "domácích" verzí systému Windows máme k tomuto účelu dostupný nástroj Editor systémového registru. Otevřeme jej příkazem `regedit` v dialogu Spustit, nebo ve vyhledávání v nabídce Start. Klíče, které obsahují nastavení kontextových menu, se v registrech nachází na několika místech v oddělení `HKEY_CLASSES_ROOT` a podobných, případně lze využít CLSID. Jen se nelekejte, v následujícím odstavci si tyto pojmy zběžně objasníme. Tedy, tzv. klíče jsou v registru obdoby složek, které již jistě znáte.

Každý klíč může obsahovat vlastní klíče a něco čemu říkejme hodnoty. Hodnoty se skládají z názvu a vlastní hodnoty, které mohou mít různý tvar, nás budou nyní zajímat tzv. Řetězcové hodnoty, které obsahují textovou či číselnou hodnotu. Každý klíč a hodnota reprezentuje v registru nastavení systému (jednoduše řečeno). Řekněme, že máme klíč `Plocha` a hodnotu `ZobrazovatIkonyNaPoše = 1`. Toto nám říká, že je povoleno zobrazovat ikony na ploše (1 totiž znamená "ano", 0 pak "ne"). Doufám, že z tohoto příkladu je zřejmé, jak registr funguje, pokud by jste hledali podrobnější (rozumnějte správné) informace o systémovém registru, zde je bohužel nenajdete, ale jistě je lze při troše hledání naleznout na Internetu. V registru, jak už bylo nastíněno, lze nalézt klíče reprezentující soubory a složky, v nichž jsou klíče reprezentující kontextovou nabídku. Zde je jejich přehled:

- Menu různých programů, resp. souborů, kde * je jejich identifikátor (ne nutně jejich název)
    - `HKEY_CLASSES_ROOT\*\shell`
    - `HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers`
    - `HKEY_CLASSES_ROOT\AllFileSystemObjects\ShellEx`
    - `HKEY_CLASSES_ROOT\Directory\shell`
    - `HKEY_CLASSES_ROOT\Directory\shellex\ContextMenuHandlers`
- Menu „speciálních” složek
    - Plocha: `HKEY_CLASSES_ROOT\DesktopBackground\Shell`

Také bylo zmíněno jakési CLSID. Opět jednodduše řečeno a nepříliš blízko pravdě se jedná o číselnou identifikaci složek, souborů a jiných "věcí". Tyto klíče jsou umístěni (mimo jiné) v `HKEY_CLASSES_ROOT\CLSID`. Zde jsou jen některé identifikátory, další lze jistě dohledat pomocí googlu:

- (Tento) Počítač: `{20D04FE0-3AEA-1069-A2D8-08002B30309D}`
- Dokumenty: `{450D8FBA-AD25-11D0-98A8-0800361B1103}`
- Ovládací panely: `{21EC2020-3AEA-1069-A2DD-08002b30309d}`

Jak přidat položku do klíče Shell? Prvně se přesuneme na požadovanou položku souboru, programu či složky, dále vytvoříme klíč (pomocí kontextové nabídky), který bude reprezentovat novou položku v menu. Zadaný název klíče slouží jako identifikátor naší položky. Nyní změníme hodnotu Výchozí v nově vytvořeném klíči, tato hodnota reprezentuje název zobrazovaný v kontextové nabídce (pokud ji nevyplníme bude použit název klíče). Není asi překvapením, že do našeho klíče lze přidávat další klíče a (Řetězcové) hodnoty. Použijeme-li jejich správná jména lze naši položku vylepšit. Řetězcovou hodnotu přidáme pomocí kontextové nabídky. Musíme zadat jej&´ jméno a hodnotu, seznam níže.

- Přehled *Řetězcových hodnot*
    - název `Position`= určuje pozici položky v menu (následující jsou hodnoty)
        - hodnota `Bottom` = dole (většinou nad položkou Vlastnosti)
        - hodnota `Top` = nahoře (většinou pod položkou Otevřít)
    - název `Extended`= zobrazí nabídku pouze při stisknutí tlačítka Shift a pravého tlačítka myši
        - hodnota `1` = aktivováno
        - hodnota `0` = deaktivováno
    - název `LegacyDisable`= skryje nabídku
        - hodnota `1` = aktivováno
        - hodnota `0` = deaktivováno
- Přehled klíčů
    - `Command` = do hodnoty Výchozí se zadává umístění programu, souboru, či skriptu

A nyní se podíváme na úpravu klíče ShellEx, resp. ContextMenuHandlers. Upřímně řečeno, editaci tohoto klíče příliš nedoporučuji. V drtivé většině případů totiž stačí editovat klíč Shell a navíc při editování ShellEx je již nutné "odkazovat" na "zaevidované" programy či příkazy např. pomocí CLSID. Podíváme se tedy jen na demonstrační příklad. Konkrétně se pokusíme přidat příkaz "Přesunout do..." do kontextové nabídky všech souborů, programů a složek. Přesuňme se na klíč `HKEY_CLASSES_ROOT/AllFilesystemObjects/shellex/ContextMenuHandlers` Zde přidáme nový klíč s názvem `MoveTo` a upravíme hodnotu `Výchozí` na `{C2FBB630-297111D1-A18C-00C04FD75D13}` (včetně složených závorek). Obdobně lze vytvořit položku "Zkopírovat do...": klíč `CopyTo`, hodnota Výchozí = `{C2FBB631-2971-11D1-A18C-00C04FD75D13}`.

## Používáme nástroje třetích stran
Pro ty uživatele, kteří se necítí na manipulaci s registrem, existují konkrétně dvě vhodné aplikace od vývojářské skupiny NirSoft.

ShellExView, který pracuje s klíči ShellEx (viz výše). [Download](http://www.nirsoft.net/utils/shexview.html "Navigace na stránku ke stažení programu") [ [32bit](http://www.nirsoft.net/utils/shexview_setup.exe "stažení ShellExView (32bit)")\| [64bit](http://www.nirsoft.net/utils/shexview-x64.zip "stažení ShellExView (64bit)")\| [Portable](http://www.nirsoft.net/utils/shexview.zip "stažení ShellExView (přenosná verze)")].  
A ShellMenuView pro práci s Shell (viz výše). [Download](http://www.nirsoft.net/utils/shell_menu_view.html "Navigace na stránku ke stažení programu") [ [32bit](http://www.nirsoft.net/utils/shmnview.zip "stažení ShellMenuView (32bit)")\| [64bit](http://www.nirsoft.net/utils/shmnview-x64.zip "stažení ShellMenuView (64bit)")].

## Kaskádové menu v kontextové nabídce
> *Ukázka [převzato z AskVG.com]*

### Návod
- Spočívá v editaci systémového registru. Konkrétně je opět nutné (jako u ShellEx) prvně "zaregistrovat" programy v klíči `CommandStore: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell` a teprve poté lze přidávat tyto programy do menu , které se jinak vytváří obdobně jako výše a opět do klíče Shell.
- [Kompletní návod naleznete na stránkách AskVG.com](http://www.askvg.com/add-cascading-menus-for-your-favorite-programs-in-windows-7-desktop-context-menu/)
- Zdrojové kódy (.reg soubory, text obalený **###** je určen ke smazání, či změně):
{% include code.html caption='Plocha' code='
```
Windows Registry Editor Version 5.00  
[HKEY_CLASSES_ROOT\DesktopBackground\Shell\**Menu1**]
"MUIVerb"= ###Název menu (př.: "Aplikace" )###
"SubCommands"= ###Odkaz na programy v CommandStore oddělené středníkem (př.: "notepad;calc" )###
"icon"="explorer.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###notepad### ]  
@="Poznámkový blok" "icon"="notepad.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###notepad### \command]  
@="notepad.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###calc### ]  
@="Kalkulačka"  
"icon"="calc.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###calc### \command]  
@="calc.exe"
```
' %}
{% include code.html caption='(Tento) Počítač' code='
```
Windows Registry Editor Version 5.00  
[HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell\Menu1]  
"MUIVerb"= ###Název menu (př.: "Aplikace" )###
"SubCommands"= ###Odkaz na programy v CommandStore oddělené středníkem (př.: "notepad;calc" )###
"icon"="explorer.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###notepad### ]  
@="Poznámkový blok" "icon"="notepad.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###notepad### \command]  
@="notepad.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###calc### ]  
@="Kalkulačka"  
"icon"="calc.exe"  

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\CommandStore\shell\ ###calc### \command]  
@="calc.exe"
```
' %}
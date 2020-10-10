---
layout: post
tags: [Compose,typografie]
title: "Klávesa Compose a typografický exkurz z rychlíku"
category: nondev
excerpt_separator: <!--more-->
show_toc: 3
reference:
    - lokální:
        wiki:
            caption: Compose
            href: https://cs.wikipedia.org/wiki/Compose
            title: Odkaz na článek na Wikipedii
            description: Heslo na Wikipedii, obsahuje i tipy na software a pár ukázek použití (víc infomací lze dále získat přepnutím na anglickou verzi).
        linux:
            caption: Psaní zřídkavě užívaných znaků v linuxovém prostředí
            href: https://www.abclinuxu.cz/blog/kenyho_stesky/2017/1/psani-zridkave-uzivanych-znaku-v-linuxovem-prostredi
            title: Odkaz na článek (abclinuxu.cz)
        ubuntu:
            caption: Accented characters with qwerty keyboard (Ubuntu Linux)
            href: https://www.stefaanlippens.net/accented-characters-on-qwerty-keyboard/
            title: Accented characters with qwerty keyboard (Ubuntu Linux)
        dead_greek:
            caption: Compose key with greek letters support [linux]
            href: https://askubuntu.com/questions/787113/compose-dead-greek-with-compose-key#877344
            title: Odkaz na řešení v diskuzi
            description: Zprovoznění řecké abecedy na linuxu (vl. jde jen o soubor `.XCompose` viz např. [GitHub/ryukinix/dotfiles/.XCompose](https://raw.githubusercontent.com/ryukinix/dotfiles/master/.XCompose))
        typo_tahak:
            caption: Typografický tahák nejen pro grafiky
            href: https://www.peckadesign.cz/blog/typograficky-tahak-nejen-pro-grafiky?utm_source=twitter&utm_medium=wall&utm_campaign=typograficky-tahak-nejen-pro-grafiky
            title: Odkaz na článek na blogu PeckaDesign
---

Klávesa *Compose* (dále jen symbolicky jako {% include kbd.html keys='⎄' %}) umožňuje „intuitivnější” zadávání speciálních znaků na klávesnici, která je neobsahuje. V textu si ukážeme její zprovoznění a pár ukázek použití.

<!--more-->

## Nastavení klávesy na Ubuntu/Windows(/macOS)
Ve skutečnosti asi není nutné se omezovat jen na Ubuntu, většina linuxových distribucí umožňuje volbu této klávesy v nastevní klávesnice (či tweak utilit jako `gnome-tweak-tool`) viz {% include reference.html target="ubuntu" %}. Více obecněji, jde o nastavení `xkb-options` viz např. [keyboard - How to set a Compose Key in Ubuntu 18.04](https://askubuntu.com/questions/1028957/how-to-set-a-compose-key-in-ubuntu-18-04/1152027#1152027 "Dotaz na Ask Ubuntu") a [Setting the compose key on Xfce](https://www.setphaserstostun.org/posts/setting-the-compose-key-on-xfce/ "Článek na Just another blog"). Případně lze provést mapování pomocí `xmodmap`, viz {% include reference.html target="linux" %}. Chování lze poupravit konfiguračním souborem `.XCompose` (viz nastavení řecké abecedy: {% include reference.html target="dead_greek" %}).

Na operačním systému *Windows* je možné použít například program [samhocevar/wincompose: 🔣 Compose Key for Windows](https://github.com/SamHocevar/wincompose "Github repozitář programu WinCompose"). Wikipedia pak pokrývá otázku zprovoznění na *macOS* ([Compose key - macOS](https://en.wikipedia.org/wiki/Compose_key#macOS)).

Zbývá otázka jakou klávesu zvolit. Já všude používám {% include kbd.html keys='Scroll_Lock' %} (většinou mezi {% include kbd.html keys='Print_Screen' %} a {% include kbd.html keys='Pause' %} klávesou), která už dnes nemá takové využití.

## První krůčky
Po stisknutí klávesy {% include kbd.html keys='⎄' %} se počítač přepne do „módu skládání” – raději ukázka: kombinace kláves {% include kbd.html keys='⎄ - >' %} vytvoří `→`. Podobně {% include kbd.html keys='⎄ = >' %}=`⇒` (a analogicky opačné: {% include kbd.html keys='⎄ - <' %}, {% include kbd.html keys='⎄ = <' %}) či například {% include kbd.html keys='⎄ o c' %}=`©`. Nedá se říci, že ale neexistují matoucí kombinace, jako {% include kbd.html keys='⎄ ← →' %} (šipky na klávesnici)=`↔`. Některé kombinace je lepší chápat spíše jako „sčítání se znamínky”, už například použitá úvozovka `„` se provede {% include kbd.html keys='⎄ , "' %} („posuň `"` dolů”).

Spoustu kombinací obsahuje {% include reference.html target="linux" %} a také v něm odkazované reference nebo pomůže *googlení*.

## Typografický rychlo-exkurz vybraných částí
V následujícím textu rozhodně neaspiruji na kdovíjak podrobný popis, spíše se na problém podíváme dle kláves, které máme na klávesnici, a dle situace je vylepšíme pomocí {% include kbd.html keys='⎄' %}. Lepší typografické rady/vysvětlení lze nalézt v {% include reference.html target="typo_tahak" %}.

### Klávesa {% include kbd.html keys='-' %} (mezi {% include kbd.html keys='.' %} a {% include kbd.html keys='Shift' %})
Jedná se o **spojovník** (*spojuje* složené výrazy: *e-mail*, *česko-anglický*). Pokud ale potřebujeme někdy *pomlčet* použijeme spíše **pomlčku** ({% include kbd.html keys='⎄ - - .' %}, místo tečky lze použít i mezeru): „Mám vás rád – Tebe a Honzu”. Také platí pro situace „od–do“, „odkud–kam“, „versus/proti“. Dále potřebujeme odčítat – to je jednoduché, stačí {% include kbd.html keys='⎄ - - =' %} (ptáte se jak to zapadá do předchozích pravidel?).

Jen drobné terminologické upřesnění, {% include kbd.html keys='⎄ - - .' %} je tzv. půlčtverčíková čili krátká pomlčka o délce půl čtverčíku. V některých jazycích (či v češtině pro ozvláštnění textu) existuje {% include kbd.html keys='⎄ - - -' %}, tedy čtverčíková neboli dlouhá pomlčka.

### Klávesa {% include kbd.html keys='x' %} (prostě písmeno x) a matematické operace
Mínus už jsme již objevily {% include kbd.html keys='⎄ - - =' %}, následuje dělení {% include kbd.html keys='⎄ : -' %} a avizované násobení provedeme {% include kbd.html keys='⎄ x x' %}. Jeho pužití se liší dle kontextu. Ve vzorečku je s mezerami okolo, jinak např. 3× (třikrát).

### Klávesa {% include kbd.html keys='o' %} (prostě písmeno o), {% include kbd.html keys='%' %} a „jednotky”
Kombinací {% include kbd.html keys='⎄ o o' %} získáme `°` pro použití například v **°C** (stupně Celsia). Promile (‰) lze zapsat jako {% include kbd.html keys='⎄ % o' %}.

Podobně jako pro procenta a veličiny (metr) platí, že zápis bez mezery naznačuje přídavné jméno **10°C** („desetistupňový“) a **10 °C** označuje „deset stupňů“.

### Znaky `"` resp. `'`
České **uvozovky** okolo slova (věty) získáme {% include kbd.html keys='⎄ , "' %} a {% include kbd.html keys='⎄ > "' %} („”) resp. {% include kbd.html keys="⎄ , '" %} a {% include kbd.html keys="⎄ > '" %} (‚’). Ve skutečnosti zde stále platí „skládáací logika”, jen bohužel v neprospěch Češtiny (viz ty americké {% include kbd.html keys='⎄ < "' %} a {% include kbd.html keys='⎄ > "' %}= `“”`).

### Klávesa {% include kbd.html keys='.' %} (tečka) a mezera
Tečku využijeme pro zápis výpustky takto {% include kbd.html keys='⎄ . . .' %} (velmi překvapující). Pomocí mezerníku pak můžeme zapsat nezlomitelnou mezeru {% include kbd.html keys='⎄ · ·' %} (`·` značí klasickou mezeru).

## Pár dalších tipů
Středová tečka `•` se zapíše pomocí {% include kbd.html keys='⎄ . =' %}, násobící tečka pak {% include kbd.html keys='⎄ . -' %}.

Než pokročíme dále, ukážeme si zápis dvou diakritický znamének na české klávesnici ve Windows (*WČ*) a Ubuntu (*UČ*). Zápis se provádí pomocí {% include kbd.html keys='AltGr' %} (klávesa vpravo od mezerníku) a v *WČ* je potřeba zmáčknout druhou klávesu dvakrát – systém ví, že se jedná o diakritické znaménko, takže ho nenapíše rovnou a čeká na další znak (my ho trochu podvedeme, uděláme vlastně diakritické znaménko znaménka ;-D). Gravis (tedy <code>`</code>) zapíšeme na klávesnici pomocí {% include kbd.html keys='AltGr ýý' %} (*WČ*) resp. {% include kbd.html keys='AltGr ;' %} (*UČ*). Stříšku `^` zapíšeme {% include kbd.html keys='AltGr šš' %} (*WČ*) resp. {% include kbd.html keys='AltGr ž' %} (*UČ*).

Hornní/dolní indexy: {% include kbd.html keys='⎄ ^ *' %}/{% include kbd.html keys='⎄ _ *' %} (kde \* uznačuje číslici).

## Reference
{% include references_list.html references=page.reference %}
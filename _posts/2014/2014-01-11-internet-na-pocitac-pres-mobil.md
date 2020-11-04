---
layout: post
tags: [ pokročilejší návody, pokročilejší tipy, web, Opera Mini ]
title: "Internet na počítač přes mobil"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

I přes rostoucí počet míst s WiFi připojením k Internetu může, z různých důvodů, nastat situace, kdy jediným připojením k Internetu zůstává mobilní připojení (myšleno GPRS či EDGE resp. 3G). Jak na to, aby jsme toto připojení mohli využít i v (přenosném) počítači?

<!--more-->

## Důležité poznámky k mobilnímu připojení

Kdo už používal mobilní připojení (Internet v mobilu a Mobilní internet) ví, že s jeho použitelností je to takové „nemastné, neslané“. Je nutné si prostě uvědomit, že je primárně určen pro jednodušší prohlížení mobilních/wapových schránek a kontrolu emailů pomocí emailového klienta. Na mnoha místech lépe pokrytých signálem EDGE/3G není nutné jej takto degradovat, avšak nikdy se nebude jednat o „plnohodnotné připojení k internetu“.

### O FUPu
Už jen vzhledem k tomu, že i dražší tarify nemají velký <abbr title="Fair User Policy" dir="ltr" class="" lang="en">FUP</abbr>, v překladu _zásady férového užívání služby_, pro více informací si lze přečíst [výklad na Wikipedii](http://cs.wikipedia.org/wiki/Fair_User_Policy "Informace o FUP"). Na druhou stranu, pokud jsme například na dovolené v místech, kde není jiná možnost připojení k internetu. Může být právě mobilní připojení vhodné ke kontrole pošty a přečtení si internetových novin. Asi, ani nic víc by člověk na dovolné nechtěl.

## WiFi Ad-hoc

U moderních (chytrých) telefonů se nabízí možnost sdílet internet přes WiFi signál. Tomu se říká vytvořit WiFi Ad-hoc připojení. Naneštěstí nemusím sepisovat celé návody pro každou platformu sám, neboť již existují. Konkrétně návod pro [Windows Phone (např. telefon Nokia Lumia)](http://mywindows.cz/item/posledni-chybejici-clanek-k-dokonalosti-windows-phone-je-tu-wifi-tethering "Sdílení internetového připojení v telefonech s Windows Phone"), [iOS (např. iPhone 7)](http://www.mujiphone.com/2009/06/22/jak-nastavit-sdileni-internetu-pomoci-iphone-3g-navod/ "Sdílení internetového připojení v telefonech s iOS") a [Android (např. Nexus)](http://www.androidmarket.cz/navod/jak-sdilet-androidem-internet-pomoci-wifi-hotspotu/ "Sdílení internetového připojení v telefonech s Androidem").

Výhoda tohoto způsobu je v jeho jednoduchosti. Prostě aktivovat Ad-hoc, v počítači se připojit k vzniknuvší WiFi síti a vesle používat internet.

## Mobil jako modem

Pokud nemáme k dispozici předchozí možnost. Přichází v úvahu použití mobilního telefonu jakožto modemu. Propojíme tedy telefon s počítačem pomocí Bluetooth či USB kabelu (nebo <abbr title="Infrared Data Association" dir="ltr" lang="en">IrDA</abbr> :)). Je potřeba, aby si systém (Windows 7) nainstaloval potřebné ovladače, takže je vhodné tento bod dělat s funkčním připojením k Internetu.

Do systému by se měl bez problému nainstalovat i ovladač pro modem telefonu. To lze ověřit v `Ovládací panely > Síť a Internet > Síťová připojení`, zde by se měla objevit nová položka. Konkrétně u laptopů se zde standartně nachází dvě položky (LAN a WiFi připojení) a nová položka může nést označení Bluetooth (v případě, že jsme zařízení spojili pomocí Bluetooth).

### O nastavení modemu
U této nové položky (modemu) zvolíme Vlastnosti a kartu Upřesnit, do kolonky Zvláštní inicializační příkazy vložíme `AT+CGDCONT=1,"IP","internet"` (O2, ale mělo by fungovat univerzálně), či `AT+CGDCONT=1,"IP","internet.t-mobile.cz"` (T-Mobile). Alternativně lze tento dialog nastavení vyvolat [skrz správce zařízení](https://www.o2.cz/osobni/techzona-sluzby/272500-neni_win_vista.html "Nastavení modemu").

### O vytvoření internetového připojení
Nyní stačí již jen v Centru síťových připojení a sdílení zvolit `Nastavit nové připojení nebo síť > Nastavit telefonické připojení` a následně vybrat požadovaný modem (resp. telefon). V následujícím dialogu zadáme jako číslo pro připojení buď `*99***1#`,nebo `*99#` (mělo by fungovat univerzálně). Uživatelské jméno ani heslo se nevyplňuje. Připojení pojmenujeme a pod stejným názvem jej nalezneme v seznamu dostupných připojení vyvolaného z oznamovací oblasti (podobně jako bychom se připojovali pomocí WiFi).

## Speciální webový prohlížeč

### O mobilním prohlíčeči v PC
Jak už bylo řečeno, nelze takto vytvořené připojení považovat za plnohodnotné. Hlavně se příliš nevyplatí používat klasické verze webů, tedy místo nich používat ty mobilní (m.seznam.cz, m.email.seznam.cz, www.google.cz/mobile, atp.). Zajímavou možností může být používání [Opery Mini](http://www.opera.com/cs/mobile/mini "Informace o Opeře Mini") ([link ke stažení](http://www.opera.com/mobile/download/versions/ "Stažení nejenom Opery Mini")), která dokáže také komprimovat posílaná a přijímaná data. Na počítač ji lze nainstalovat pomocí [návodu na Cnews](http://extranotebook.cnews.cz/jak-nekolikanasobne-zrychlit-web-na-noteboocich "Opera Mini na počítači").

## Pro linuxové distribuce

### O možnosti řešení v „linuxu“
Opera Mini lze nainstalovat také na linuxové distribuce (ve článku zmíněná aplikace MicroEmulator využívá Javu). Taktéž WiFi Ad-hoc připojení není odlišné. Pro připojení k Internetu pomocí mobilu/modemu pak lze využít návody [na abclinux.cz](http://www.abclinuxu.cz/blog/poznatky/2010/8/pripojeni-na-internet-pres-mobil-modem "Připojení k Internetu pomocí mobilu na linuxu") a [linuxexpress.cz (KPPP)](http://www.linuxexpres.cz/praxe/jak-se-pripojit-pres-modem-mobil-adsl "Možnosti připojení k Internetu pomocí KPPP").
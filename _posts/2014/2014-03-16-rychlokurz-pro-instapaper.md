---
layout: post
tags: [ e-knihy, e-čtečka, web, Kindle, návody, PocketBook, seznámení, tipy, webové služby ]
title: "Rychlokurz pro Instapaper"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

**Instapaper** je jedna ze služeb umožňující odložení resp. uschování webového článku pro pozdější přečtení. Jedná se tedy v podstatě o jedno­du­chou a snadno ovla­da­telnou online službu pro zálož­kování (bookmarking) webových stránek. Toto samozřejmě ale také dokáže každý slušný webový prohlížeč. Avšak Instapaper nabízí některé další možnosti práce s uschovanými články, pojďme si je tedy projítt.

<!--more-->

## Něco na úvod

Jak už bylo řečeno, není Instapaper jediná podobná služba typu _přečtu si později_ (_read it later_), zmiňme alespoň také **[Pocket](http://getpocket.com/ "Alternativní služba umožňující ukládat články k pozdějšímu přečtení")** nebo **[Readability](http://www.readability.com/ "Další alternativní služba umožňující ukládat články k pozdějšímu přečtení")**. Instapaper a podobné služby umožňují uschované webové stránky uložit do počí­tače v přímo tisknu­telné podobě či přizpůsobené pro mobilní zařízení jako jsou čtečky, tablety a mobilní telefony. Takto lze pracovat nejen s jednotlivými stránkami, ale i s několika stránkami najednou (hromadně).

Hlavní výhodou je, že se z vybraných stránek ukládají jen texty článků samotných (služba si je dokáže ze stránky „vycucnout“) a to v podobě, ve které byly do služby nahrány. Služba je dostupná _zdarma_ resp. hrazena reklamními banery, platí i pro aplikace dostupné pro různé mobilní platformy. Službu Instapaper je nutné si zaregistrovat na oficiálních stránkách [Instapaper.com](http://www.instapaper.com/ "Oficiální stránka služby Instapaper") (vpravo nahoře kliknout na _Create Account_).

## Přidání stránky do služby

Po registraci jsme přesměrováni do prostoru, kde se budou shromažďovat námi vložené stránky. Všechny možnosti vkládání článku jsou přehledně vypsány v sekci _How to Save_ (položka v menu vlevo). Nejpohodlněji vložíme vybraný článek do služby pomocí speciální záložky _Read Later_ (vyžaduje JavaScript). V sekci _How to Save_ se nachází černě podbarvené tlačítko _Read Later_, které stačí metodou _táhni a pusť_ přesunout do lišty záložek webového prohlížeče, případně na tlačítko kliknout pravým tlačítkem myši a zvvolit uložení odkazu do záložek (záleží na prohlížeči jak je tato položka konkrétně pojmenovaná).

{% include image.html
    caption='Animace získání tlačítka Read Later (vyšší kvalita po kliknutí)'
    alt='Ukázka přetažení tlačítka Read Later do lišty záložek webového prohlížeče'
    href='https://staticinstapaper.s3.amazonaws.com/images/instapaper_bookmarklet.gif'
    src='https://staticinstapaper.s3.amazonaws.com/images/instapaper_bookmarklet.gif'
%}

### O _Read Later_ tlačítku
Jak lze z animace lehce nahlédnou dále již jen stačí přejít na článek, který chceme do služby vložit, a následně na tuto záložku/tlačítko kliknout. Obdobně pracuje i další tlačítko _Instapaper Text_. Toto tlačítko však slouží k „očištění“ textu článku od okolích rušivých elementů. Kliknutí na tlačítko _Instapaper Text_ nás tedy přesune na speciální stránku pouze s textem článku, na této stránce lze měnit barvu a velikost písma či pozadí a případně se zde také nachází tlačítko pro vložení článku pro pozdější přečtení.

### O alterantivním vkládání článků
Alternativně lze používat speciálně vygenerovaný email (opět k nalezení v sekci _How to Save_), kam lze texty zasílat. Dále je možné před <abbr title="Uniform Resource Locator" dir="ltr" lang="en">URL</abbr> adresu článku připsat buť `http://www.instapaper.com/add?url=` (možnost _Read Later_), anebo `http://www.instapaper.com/text?url=` (_Instapaper Text_). Poslední možností je využití formuláře pro vkládání <abbr title="Uniform Resource Locator" dir="ltr" lang="en">URL</abbr> adres článků, jak je vidět na následujícím obrázku (položka _Add Article_).

{% include image.html
    caption='Vyvolání dialogu pro vložení URL článku (vyšší kvalita po kliknutí)'
    alt='Vyvolání dialogu kliknutím na opravárenský klíč'
    href='https://pi8pdq.db.files.1drv.com/y4p2x-31AkwwSoWbdHJxsV_hs8p-PDYPU9KKpXPd3MFWUb4W_tiZu-5pGkSSq_AOBoWMNkckrBxmHb8Scm_uF01J-Jwgx5Afc_LCvo9nJioy8m0U8kczhPHF91HZKnecMxy0GYozljDySHIUfcM3zjLWk2yqUM9cLpgYVMDTLGql3lygqAq2B4HZ7U4ix3qAYVPDRkR8VovYjTbYviO2gLQQ-Kq0R8mofLf8QJ6WnL6Puw/Instapaper-actions.png?psid=1'
    src='https://pi8pdq.db.files.1drv.com/y4mMlhTOcrNff6oMl4-pgXJZrncechLgSegxQybNPk0OtQM6LdazS4SEtcvVzH5N-0ES1foCo4QXejGGobsYTpn7WBnaQ-1avicIF9nfksYB7ZgBa1ddvbZULXUYxzPQYvjrh2z8nxqxJ0xH1NSI43YBMbVbAFl-poNKiJd-59IIDdYoZMQzq5XhV1CdjIF7uJR?width=660&height=294&cropmode=none'
%}

## Přehled článků k přečtení

Položka _Unread_ (v levém menu) schraňuje všechny články, které jsme do služby vložili. Jedná se také o první místo, kam se po registraci či přihlášení dostaneme. Po přejetí nad nějakým zde uloženým článkem se zobrazí ikony/odkazy pro označení oblíbenosti/archivace, dále možnosti sdílení či přesunutí do jiné složky a editace (název, popis,... článku) nebo jeho smazání ze služby.

{% include image.html
    caption='Přehled uschovaných článků (vyšší kvalita po kliknutí)'
    alt='Přehled rozhraní služby Instapaper'
    href='https://rcpqgq.db.files.1drv.com/y4pF6OUUS7KgdVUBiFS5RyUrhrnfhowVJAe4dvOtGyTsevA1JW-GV-TZk5ZoE5V4_q9OfHaL81kS0aedft0ZLNBX8QfY03Jh-CuaVw_vOo7manKT6vtKiaCCEXy6xUEcM6Ayvh0sXqbDVKmceaK2H5ch6nC_KvH4tIn1ny2A5oFvcMtIMscSSOdGDS_0PbyDXrHgG1CsG-_D7h9mxdFOYOZMdEenUsB3JFY3dQpsL3PnvY/Instapaper-unread.png?psid=1'
    src='https://rcpqgq.db.files.1drv.com/y4moLAfIaZGIydCR546WeK5194lgb0aetorV93gInobVxOW2w_NJfGUWnHp765u7VmTKpoOAXUq7gngtSI2rjlMfxHAxcbMxIaJF6CgchwuetqkfHFnTvMGwSCQSr3GX4yIjk_QP0LEwFB36lz6kxxAjUrINuZGDruMDXrkm0JEnZFl5mD0EfsPBG2K_A2RslIH?width=660&height=360&cropmode=none'
%}

Články lze organizovat do složek. K tvorbě resp. organizaci složek slouží ikona vedle nápisu _Unread_. Zde se nachází příkazy _Add_ (Přidat složku) a _Edit_ (Upravit vybranou složku). Články lze do složek přesouvat příkazem _move_, které se objeví po přejetí nad daným článkem (bohužel nelze přesouvat více článků hromadně). Každá složka obsahuje vlastní tlačítko (_Read Later_) pro přidávání článků, viz dříve.

{% include image.html
    caption='Ukázka složek (vyšší kvalita po kliknutí)'
    alt='Přehled složek'
    href='https://rypqgq.db.files.1drv.com/y4pBqva62XE_H9CILqqasZRNTmOA86ZZiEO-F9AcGrGgC2Go9aiaWaKjTAGfTX0Mdso-oDb88MvRR_FfN3Ja32JIHLF7q8AtemYf90KBEEWkgKIA1wgtxkB4_Cy29cVTasjSeYCaa0ww2UV_QXznxcQBlRE_T5WIe0jchJp86BXGmOGpyoZ0LvYgP-wwRAqbea8K3tZnbySdGhUb2aQ6DX5KsAUNw-HWZ24X1Oxmu8aI3s/Instapaper-folders.png?psid=1'
    src='https://rypqgq.db.files.1drv.com/y4mQ1XaQutQjj2Abqc2XWY6bEJ_xx1gyRQm4yG1MUj8Xjb9SN60AmufqsqveAOGPND5EMLe_PJl2pwcGTxUqyCK9f5wv6tiICr5tGeEsiWbx7JtwV8CcCdnvBJpYkGMeY3wRBtQoQNHl6V4qsCIUM648LoKFDjLKc92V2mWGADl_01y3hiKBSzpRY9Kl78Shr0Y?width=660&height=317&cropmode=none'
%}

### O možnostech nakládání s články
V pravo nahoře se nachází tlačítko pro kompaktní zobrazení článků (jen nadpisy), Hned vlevo se pak nachází ikona pro vygenerování souboru MOBI (formát pro čtečky Kindle), EPUB (univerzální formát určený nejen do čteček eknih) či vygenerování verze pro tisk nebo [RSS formátu](http://cs.wikipedia.org/wiki/Rss "O RSS výstupu - Wikipedia.cz"). Takto vygenerované soubory v sobě zahrnují všechny články v dané složce najednou!

{% include image.html
    caption='Ukázka ukládání článků (vyšší kvalita po kliknutí)'
    alt='Možnosti uložení článků (Kindle, Epub, Tisk, RSS)'
    href='https://sspqgq.db.files.1drv.com/y4p3dxCmpz6c1oU0qBRvHIS0IADKit6AuYXdGt2TNUIGPNNIebGd5E6VPSbKJBNAASfKlqDTE4qmjw8rBZ4VKnyHtGzJ6ufgGDHBQvGH4u3e58QNnCxn0NUqfbh6iORrrzDYNnIUtbTgnze6VTGEzsVKGJtYX_3KfImYpQFlpkAfOjOZo2RxCbQ-JYcrAi-vZd76u3aBb_LsusEf9Ai74WwoRUwNjtoSd6B9_qcYjMC78I/Instapaper-download.png?psid=1'
    src='https://sspqgq.db.files.1drv.com/y4maRNGuIj93X7u3Vm4AGHkXFOzdQr4BRhN_WdYSGXXOUd8bcGDdZKxzFI4GqKKMePuVpLs7Jvf_Bs5mBg_AgJ8fyJnhvkq13oW-MycwyiKL9bLaRwzATpl1tJiCsaLle06FkoSEeZUJ4qekAr7ki8tfe42XAIcWqkUDPiUd2UqFxEgoi9RSFWAxLda0c3FqnvE?width=660&height=294&cropmode=none'
%}

## Přečtení uložených článků

Z předchozího odstavece je zřejmé, že po vygenerování příslušného souboru, lze články číst ve RSS čtečce, ve čtečce elektonických knih (Kindle, PockeBook apod.) či po vytištění i na papíře. Speciálně na čtečku Kindle lze články přeposílat přímo, více v [Instapaper for Kindle](http://www.instapaper.com/user/kindle "Nastavení přeposílání článků na čtečky Kindle").

Kromně zmíněného, existují aplikace pro iPhone nebo iPad ([Instapaper for iPhone and iPad](http://www.instapaper.com/iphone "Aplikace Instapaper for iPhone and iPad")) a Android ([Instapaper for Android](http://www.instapaper.com/android "Aplikace Instapaper for Android")). Články si lze případně přečíst i přes webový prohlížeč.

Jak už bylo řečeno dříve, při čtení článků, lze upravit styl, velikost a barvu písma případně pozadí. Články také obsahují i odkaz na originální umístění uschovaného článku.

## Na závěr

[Pro uživatele elektronické čtečky](/archive/2014-02-02/co-vse-lze-cist-ve-ctecce-e-knih "Co vše lze číst ve čtečce e-knih") může být tato služba velmi zajímavá. Umožňuje totiž nastřádání článků, které potom dokáže uložit do elektronické „knihy“. Díky tomu lze získat čtivo do čteky a zároveň se netrápit čtením z, pro někoho, nepohodlné obrazovky počítače.

Pro použití jen jako „místo pro ukládání záložek“ však asi služba nenabízí nic jiného, než to, co již podporují samotné prohlížeče. I vnich lze ukládat záložky, přidávat k nim popisky a možnost záložek synchronizovat na různá zařízení.
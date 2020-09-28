---
layout: post
tags : [návody, programy, první_seznámení, qtiplot, tipy]
title: "Rychlokurz pro QtiPlot"
show_toc: 3
excerpt_separator: <!--more-->
category: nondev
---

Asi by bylo vhodné si ujasnit jakou přesně alternativou QtiPlot je. Oproti **Originu** nabízí skromnější možnosti, za to však vyniká jednodužším prostředím či ovládáním a cenou. Také jej můžeme chápat jako uživatelsky přivětivějším generátorem a analyzátorem grafů než **GnuPlot**. Nebo jako tabulkový kalkulátor podobný programům **MS Excel** či **Calc** s lepšími/pokročilejšími možnostmi tvorby grafů a jejich zkoumáním. To vše je **QtiPlot**!

<!--more-->

## Základní informace

QtiPlot, jak asi vyplynulo z předchozího, je nástroj pro analýzu a vizualizaci dat. Hlavními činnostmi programu je tedy vybraná data zpracovat do podoby grafu, případně body proložit nějakou křivku a o této křivce podat podrobné informace. Program je multiplatformní, nabízí několik cenově odlišných licencí dle velikosti organizace a délky licencování, více informací lze získat na [oficiálních stránkách programu](http://soft.proindependent.com/qtiplot.html "Oficiální stránky v angličtině o programu QtiPlot"). My se však budeme věnovat omezené verzi bez technické podpory, ke stažení na [Ulož.to](http://uloz.to/x9jee1Pv/qtiplot-janandrle-2013-zip "Moje kompilace programu QtiPlot pro windows") pro Windows (moje upravené sestavení) či v repozitářích pro linuxové distribuce.

Aplikace je naprogramována v jazyce **Python**, může tedy být potřeba si tento skriptovací jazyk do systému doinstalovat. Stačí navštívit [oficiální stránky projektu](http://www.python.org/download/ "Oficiální stránky projektu Python"), stáhnout příslušnou verzi a nainstalovat. Měla by ale stačit jen knihovna **python27.dll** (v mém sestavení na Ulož.to). Knihovnu do systému Windows přidáme přesunutím souboru do `c:\Windows\system32`, dále je nutné přes dialog **Spustit** (např. pomocí klávesové zkratky **WIN+R**) tuto knihovnu „zaevidovat“ příkazem `regsvr32 python27.dll`.

**Poznámka:** Pokud při „evidování“ vyskočí zpráva s rudým vykřičníkem, není nutně se hned lekat, on ten příkaz je poněkud pesimistický a rád vypisuje i nedůležité chyby, takže si stačí zprávu přečíst, a pokud neobsahuje něco ve smyslu „knihovnu se nepodařilo zaregistrovat“, tak by snad neměl být problém.

Tato verze neumožňuje export/import tabulek z jiných aplikací. Omezení se týká pouze tabulek, takže grafy je možné exportovat v široké škále grafických formátů dále **PDF** a dokonce **ODT** (Word jde případně přemluvit pomocí aktualizace od Microsoftu, aby otevíral i formáty OpenOffice). Tedy ve skutečnosti tabulku lze do PDF také exportovat, ale není možné ji naformátovat, takže je to k ničemu a stejně asi lepší hodnoty prostě do Wordu zkopírovat.

První, co je po stažení archivu vhodné udělat, je určitě oprava umístění souborů v nabídce `Úpravy > Nastavení > Obecné > Umístění souborů` (JODConverter jsem také přibalil), podle toho, kam si program umístíme. Nyní by snad mělo vše fungovat.

## Tabulky

Novou tabulku vytvoříme ikonou <img class="display__i" alt="obrázek listu papíru s tabulkou" src="http://andrle-jan.4fan.cz/images/2014-02/qtiplot-ikona-tabulky.png"/> (vypadá podobně jako ikona „Nová matice“!). Vyskočí tabulka se dvěma sloupci **1[X]** a **2[Y]**, číslo je _název sloupce_ a v závorce je _označení osy_ (x, y, z), případně chybových úseček. Jméno sloupce se dá změnit klinutím pravým tlačítkem a výběrem _Volby pro sloupce …_, zde je možné měnit i formát dat (počet desetinných míst), či přidat poznámku. Označení se opět mění pravým tlačítkem a volbou _Nastavit jako_. V kontextové nabídce jsou i další zajímavé možnosti jako vyplnění sloupce čísly řádků, apod. Také je zde možnost _Nastavit hodnoty pro sloupce …_ což je ekvivalent vkládaní vzorců v Excelu (viz obrázek).

{% include image.html
    caption='Dialog pro nastavení hodnoty sloupce (vyšší kvalita po kliknutí)'
    alt='Dialog podobný tomu v programu Origin'
    href='https://sc9mpq.db.files.1drv.com/y4pLHy6EfLIqYCVaKK1VVi8H_zorQNMjv9pkUP1Av6K2iacC902CpBVvo1LeTUYm7HyIck5kV2JTzNEM5vznS_Eu5gGmY_SdOQq4s_Wx4EZDhcXljt2orfLoMBY1tT5QmehELeMIiwPb_9S6c7Ju40K9YkJ8PIPCNBFBUnCnke09s1-Rszfxq0Vph9KFMTFCkgk9jRYlThSC-CgwYF22rAyVg/qtiplot-tabulky.png?psid=1'
    src='https://db3pap003files.storage.live.com/y4pu48Wv76WgM7-g7XtEMrd6tX9WMw97IjEhWxhE615HDOXA9lQLlVYfDQvVQMmTeCnH2ym-31yCrxvq6Nomt66v55A3pGq9MLvnak5B2H_489wTnEj8D-Pg3yWBFP8qRX0QAj0gbli_JNsA8awpyUj14_mXbxtKb1-c2CccFN7CLZcFeCy1-33EUOhjipIbsic/qtiplot-tabulky.png?psid=1&width=349&height=236'
%}

Program pracuje s celými sloupci, takže i vzorce se tak musí „psát“. Konkrétně funkce `col(“1”,i)` vybere hodnotu ze sloupce _1_ na _i-tém řádku_ (v tomto případě _i_ běží od 1 do 10). Funkci lze buď napsat přímo, nebo vybrat z nabídky a kliknout na _Přidat funkci_ (přičemž se zobrazí i popisek).

## Grafy

Graf lze vygenerovat vybráním sloupců a pomocí panelu/nabídky _Nákres._

{% include image.html
    caption='Jednoduché vytvoření grafu (vyšší kvalita po kliknutí)'
    alt='Graf a dialog „Nákres”'
    href='https://ss9mpq.db.files.1drv.com/y4pLkZf5ammS0kTpnLynQsbNbUwSHh68k9FoNUInqXNni95v54FrY8DzmYzijsHoW9k9BvP9TVGKuU3q1li3BZgZ9DZTCXDXUCeUgUiJRQE619b9IK0p7Ebh09-uEcv3A4QUSd1hEd3e8waqqEAqkq0lOPv_YsVC9tsHKHlU8xfh26oNs88CDTUqBkIug9Thpd5RNqd853XOLQxqz_XQImUBQ/qtiplot-grafy.png?psid=1'
    src='https://db3pap003files.storage.live.com/y4phz_t-pgZFXIoZ08YmLLoMsri5zjEoHbhmOESjfT0SSxyena-VXaxk9wC7g0mJwl_ec3N7K_KV__HrHSW07s42VidrHg4ZZoFapbAwybeqti_DrAyzgl4Ms0J7B8dEFCsF6cS3RV1iVc7AoKuQmkedgY5I33Lw2RSkGIvbQjnWvdKMPqFTTEaaVhszZ-O2KAm/qtiplot-grafy.png?psid=1&width=338&height=183'
%}

Změna stupnice, mřížky a popisu os se asi nejrychleji provede poklepáním na stupnici – objeví se jednotné dialogové okno, které právě umožňuje tyto změny. Naopak poklepáním do grafu se zobrazí vše, co je „nakresleno“ – lze tedy měnit značky bodů, křivky i popisek. Poklepáním na „Název“ lze dát grafu jméno, případně pravým tlačítkem lze vyvolat _Vlastnosti …_, kde je možné používat i speciální znaky.

Proložit tyto body křivkou lze provést pomocí nabídky `Provést rozbor > Průvodce umístěním křivek`. Prvně vyskočí okno na výběr jakési složky pro skripty (nepřišel jsem na to, jak to zrušit), takže stačí stisknout **ESC** (případně Storno) a objeví se okno pro zadání vzorce, kde `x` je automaticky rezervovaná pro hodnoty _x_ z příslušné tabulky. Aby mohl program dobře nafitovat křivku je nutné zvolit vhodně parametry viz obrázek - moje funkce `a*cos(b*x-c)-d`.

{% include image.html
    caption='Zapsání křivky pro fitování (vyšší kvalita po kliknutí)'
    alt='Proložení předpokládaným průběhem - zadání křivky'
    href='https://qy9mpq.db.files.1drv.com/y4pxzGktVRK1iDe0hK7FR91nxdn2R6jcQ3FAeqoGk2ddGAfitvfhSDgP2qquL_PsmiVFxsgmxx4eFogPMeGhzEnOjnmg0NnnNv719_F9h9HcFB2VM-uIFkXU3ac7FAVJiTA2iokQNW7B4edRqBaXSG82Gl6-Jb0CzeFYQeHak87JS-iJEIBs8TrVU-IVQMtRFXh5ur7gTp0odAlLbC3CqhOcw/qtiplot-fit1.png?psid=1'
    src='https://db3pap003files.storage.live.com/y4pHiwzDh73lzySMBDSUSC9I1HZiSsElavYgAyOnqOJF5_TANqzD9QjMDWXXGtHkdRz8eyj8m8g5_W8gvggllsFQP2ZPOq8TC0-HltojySXwqq_xU7Nacfnvnh0wYjVAb_JeMaZdAiZh3pt2UQp0VFBSnKs2CKaOG_VyV4wVbzB2beq7KA-MDh4__XM8yCZXVYm/qtiplot-fit1.png?psid=1&width=192&height=183'
%}

Zelenou šipkou se dostaneme sem:

{% include image.html
    caption='Upřesnění fitu (vyšší kvalita po kliknutí)'
    alt='Proložení předpokládaným průběhem - upřesnění'
    href='https://qi9mpq.db.files.1drv.com/y4pOE60VH4quLk9xv3lo0Yce_bRJvd7N02zZYae5FnJESCbLDIcaEg4co8tOAxmtcXcvJEPhBhNfpO0Iks3ZK13Olzc9ZNiMcfc6Fg9xmYsl3aAq1MhOTFTDKx7Qq6y1N6FE-xhh0t4aRJiPsQhi5R4tX1-AhTm4FptAfhrMVgo3asp-JS8VM-M4fZMZokrV3_BphWzS6jlD64NxiAaBO8r3g/qtiplot-fit2.png?psid=1'
    src='https://db3pap003files.storage.live.com/y4pRr7FlEcwLLse-vnQGkV10N57WpKUYWz8Hj249Ulw-RTZY9xZnPBbxfPngsYoRCYoqAIUaj4tEwgTaXwwZ_ORFruvOcAwYhoeKJutnidpjlFUxKwpSbI9H8SV3NXUBOw2wKpFccDNCeKVXzTOJ6-hyc6-ixWnymoLP4Ilek6ovVBSlHndmxubxXyqwWY4yjPN/qtiplot-fit2.png?psid=1&width=192&height=183'
%}

Kde lze přednastavit parametry, případně některé zafixovat (zaškrtnout _Stálá hodnota_), nelze samozřejmě zafixovat vše, protože by poté nebylo možné se přibližovat k naměřeným hodnotám a vlastně by se jednalo o vynesení funkce, na to je v programu zvláštní příkaz. Já to jen říkám, protože jsem poprvé omylem u všech zaškrtal stálá hodnota a program mi poté vždy hlásil jen, že se objevila chyba, ale neřekl jaká. Tlačítkem _Umístit_ se vygeneruje a zakreslí daná křivka. Přičemž se objeví tzv. _Zápis výsledků_, kde je v textové podobě zaznamenán vzorec křivky, dále jsou zde vyčísleny parametry včetně chyb a další statistické údaje o vygenerované křivce. Výsledný graf může vypadat například takto:

{% include image.html
    caption='Výsledný graf (vyšší kvalita po kliknutí)'
    alt='Graf vytvořený programem QtiPlot'
    href='https://rc9mpq.db.files.1drv.com/y4pc1CNPQQ3N3xu70WnRlouqhY26jtB3Dc_eA-ewNRL-yHkEtIdbb-5gbQsNs1FPYOTQujW8LtjRAky5nzveY_zPcl5dR1DR8FMqXTc5XTDkSQYkeVY8-Nxj9h32j8kJNSSdVSWpkYoFOKEbvCfIfdj0VIU35yovkrYZX0CFU3QFoaJSwBshPDuQ0iOIfifYa7FFFdfbwtkCkSPfmO8jQ8NVQ/qtiplot-grafy-graf.png?psid=1'
    src='https://db3pap003files.storage.live.com/y4plEcK7UCAOpOu7y9i306pRErx9HvObXCnxqOTuPLvhOvEjQbxIgV9LlHhtfM9s-Hg2gyQEjFYikQbVl7fVzZmjmaIeXZwuHhHyFrxB2W9YCHBXCVsNzlyf8fBhWqkH9vAKehS6X3AHg6bEMY0h3FQmNumOJHrrEPIn2T_spWTrAI55h4hyz6jjQGvWscANw6w/qtiplot-grafy-graf.png?psid=1&width=318&height=183'
%}

## Závěrem

V archivu na Ulož.to je i tento rychlokurz v podobě dokumentu DOCX, je však starší a psal jsem ho opravdu v rychlosti pro spolužáka. Co se programu týče, mně se zalíbil. V úvodu jsem se pokusil v krátkosti uvést rozdíly oproti programům OriginLab, GnuPlot a Excel/Calc a pokud k tomuto rozlišení přistoupíme, tak myslím, že si program své uživatele nalezne. Někteří si však raději předpřipravují různé skripty s jejichž pomocí pak dokáží automaticky vygenerovat grafy a statistiky použitelní i pro následující podobné projekty - pro ty se tedy asi více hodí **GnuPlot** či **[MatPlotLib](http://matplotlib.sf.net/ "Python knihovna na kreslení grafů")**. Jiní zase potřebují provádět pokročilejší statistiku - pro ty je nejspíš výhodnější **Origin**, **[R](http://www.r-project.org/ "Rozhraní pro statistické analyzování")** či **Excel**/**Calc**. Další názor(y) například v [článku na Root](http://www.root.cz/clanky/qtiplot-konkurenci-pro-origin/ "QtiPlot konkurencí pro Origin?")u.
---
issue: 88
title: Trochu bezpečnější přímá editace souborů na vzdáleném serveru
tags: [ vývojářské tipy, FTP, Notepad++ ]
category: dev
updated: 2021-02-02
reference:
    - ftp_npm
    - lokální:
        deploy_script:
            caption: "Jednoduchý deploy skript nejen pro web v Silexu"
            href: "https://www.maxiorel.cz/jednoduchy-deploy-skript-nejen-pro-web-v-silexu"
            title: "Článek na Maxiorel.cz"
        NppFTP:
            caption: "Rozšíření „NppFTP” pro Notepad++"
            href: "https://ashkulz.github.io/NppFTP/"
            description: "umožňující připojování k FTP, FTPS, FTPES a SFTP."
        Compare plugin:
            caption: "Rozšíření „Compare plugin” pro Notepad++"
            href: "https://github.com/jsleroy/compare-plugin"
            description: "umožňující porovnávání souborů, případně aktuálně neuložené úpravy."
        jecas_ostry_server:
            caption: "Úprava CSS/JS na ostrém serveru"
            href: "https://jecas.cz/pripojeni-lokalnich-souboru"
            description: "Idea vývoje na ostrém serveru namapováním lokálních souborů, které chceme měnit"
    - ftp_vscode
---

Zde popíšu moje workflow pro editování souborů na {{ site.data.abbr.FTP }} serveru, kde hrozí kolize s dalšími programátory.

<!--more-->

## Zamyšlení
Prvně je dobré se zamyslet, **zda** toto opravdu chcete **podstupovat**. Úpravy na vzdáleném serveru *jsou problematické* sami o sobě, natož pokud na něm pracuje více lidí. Navíc, u takto položené otázky, to skoro vypadá, že se nepoužívá žádné verzování[^1], že?

Některá {{ site.data.abbr.IDE }}[^2] tento postup umožňují, přičemž někdy podporují i detekci konfliktů. Osobně s tím ale dobrou zkušenost nemám.

Korektní postup samozřejmě je, spravovat vývojářskou část odděleně vč. verzování[^1] a používat například nějaký script pro publikaci. Pro inspiraci můžete následovat {% include reference.html target="deploy_script" %} nebo {% include reference.html target="gulp-deploy-ftp" %}.

Případně *ke zvážení/vyzkoušení – lze také použít postup Bohumila Jahody viz {% include reference.html target="jecas_ostry_server" %}*.

## Můj Notepad++ workflow
Ideální postup/program by fungoval tak, že při ukládání by rozpoznal rozdíly a zobrazil porovnání souborů při kterém by šlo změny sloučit. Bohužel, něco takového a 100% funkčního se mi nalézt či zprovoznit nepodařilo.

Nejblíže jsem se k tomuto ideálu přiblížil pomocí programu **Notepad++** s rozšířeními {% include reference.html target="NppFTP" %} a {% include reference.html target="Compare plugin" %}.

Postupuji pak tak, že po provedení změn u sebe, uložím text souboru do *schránky* a **stáhnu** si vzdálenou verzi[^3]. Ze schránky obnovím svoje změny a pomocí {% include kbd.html keys="Ctrl Alt d" %} vyvolám *porovnání změn*. Změny sloučím a soubor uložím na vzdálený server.

{% capture tmp_textBox %}

> ### Zkratky k zapamatování
> - {% include kbd.html keys="Ctrl Alt d" %}= porovnání změn vůči uloženému souboru
> - {% include kbd.html keys="Alt Shift f" %}= fokus do FTP panelu
{% endcapture %}{% include textBox.html text=tmp_textBox %}

## Jiné možnosti ke zmínění
Šlo by samozřejmě napsat script, který by danou věc zautomatizoval, jen to tolik nepotřebuji. Jinak pro vzdálené připojení existují i další postupy, např. pro VSCode viz [K dalšímu zkoumání](#k-dalšímu-zkoumání). Respective, pomocí {{ site.data.abbr.WSL }}, VSCode umožňuje vzdálenou editaci nativně, viz {% include reference.html target="VSCode Native Remote" %}.

## K dalšímu zkoumání
{% include references_list.html references=page.reference %}

[^1]: [Distribuované verzování](https://cs.wikipedia.org/wiki/Distribuovan%C3%A9_verzov%C3%A1n%C3%AD "Popis na Wikipedii"), jako například [Git](https://git-scm.com/).
[^2]: Například [PhpStorm](https://www.jetbrains.com/help/phpstorm/editing-individual-files-on-remote-hosts.html "Odkaz na část nápovědy: Edit individual files on remote hosts").
[^3]: Jen pro pořádek, plugin stahuje tyto soubory do `%appdata%\Notepad++\plugins\config\NppFTP\Cache`.

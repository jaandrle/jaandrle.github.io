---
layout: post
tags : [git]
title: "Git: Ignorování souborů a změn v textu"
excerpt_separator: <!--more-->
category: dev
---

Jak ignorovat sobory a nahrazovat texty při commitování…

<!--more-->

## Aliasy
Aliasy pro git pomáhající s lokálním ignorováním souborů (do `.git/config` zadat – viz [příspěvek od phatmann](https://stackoverflow.com/a/18317425)):
{% highlight text %}
[alias]
    ignore = update-index --assume-unchanged
    unignore = update-index --no-assume-unchanged
    ignored = !git ls-files -v | grep "^[[:lower:]]"
{% endhighlight %}

## Gitignore pro již commitnutý soubor
Ignorování již nahraného souboru:
{% highlight console %}
$git update-index --assume-unchanged [file]
{% endhighlight %}

## gitattributes (jedno z použití)
V `.git/info/attributes` lze nastavit filtry:
- situace:
    - lokálně chci v `_config.yml` používat: `LOCAL`
    - ale globálně: `GLOBAL`
- do souboru jméno filtru: `_config.yml filter=local_global`
- do konzole:
{% highlight console %}
$gitconfig --global filter.local_global.smudge 'sed "s/LOCAL/GLOBAL/"'
$gitconfig --global filter.local_global.clean 'sed "s/LOCAL/GLOBAL/"'
{% endhighlight %}
- alternativně v `.gitconfig`:
{% highlight text %}
[filter "local_global"]
	smudge = sed "s/LOCAL/GLOBAL/"
	clean = sed "s/LOCAL/GLOBAL/"
{% endhighlight %}
- se `sed` escapuje pomocí `\\` — oddělovač lze měnit `s/…/…/` na `s:…:…:g`.
- více [StackOverflow> Can git ignore a specific line?](https://stackoverflow.com/questions/6557467/can-git-ignore-a-specific-line)

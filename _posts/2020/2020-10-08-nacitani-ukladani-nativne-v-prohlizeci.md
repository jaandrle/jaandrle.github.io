---
title: "Načítání/ukládání soborů (a složek) nativně v prohlížeči"
category: dev
tags : [fs,JavaScript,chrome,Web API]
---

[Tomek Sułkowski ukazuje na Twitteru](https://twitter.com/sulco/status/1313798240043753473) možnost otevírání souborů pomocí `window.showOpenFilePicker()` v poslední verzi Chromu ([Chrome 86 přináší několik nových API - Root.cz](https://www.root.cz/zpravicky/chrome-86-prinasi-nekolik-novych-api/)). Univerzálně použitelný kód nezávisle na podpoře nového API je k nalezení v [GoogleChromeLabs/browser-nativefs: Native File System API with legacy fallback in the browser](https://github.com/GoogleChromeLabs/browser-nativefs). Pokud prohlížeč nepodporuje nové API, použije se `<input type="file">` resp. `<a download>`. Viz také [Reading and writing files and directories with the browser-nativefs library](https://web.dev/browser-nativefs/).
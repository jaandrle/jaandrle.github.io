---
issue: 49
title: Připomenutí existence „server-sent events” (SSE)
tags: [ vývojářské tipy, vývojářské seznámení, JavaScript, PHP, Web API, SSE ]
category: dev
show_toc: 3
reference:
    - lokální:
        mdn:
            caption: Using server-sent events
            href: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
            title: Část dokumentace na MDN
            description: Přehledový článek dokumnetace k SSE
        sseVSws:
            caption: WebSockets vs. Server-Sent events/EventSource
            href: https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159#5326159
            title: Odpověď na otázku na StackOverflow
            description: Docela vyčerávající seznam o vlastnostech SSE a srovnání s `WebSockets`
        rauschma:
            caption: Poznámky o SSE – Axel Rauschmayer
            href: https://gist.github.com/rauschma/5ac9c3b8ed708f244ad1f3ef6e6721cb
            title: Gist poznámka s ukázkami
        postup-vývoje:
            caption: Developing Real-Time Web Applications with Server-Sent Events
            href: https://auth0.com/blog/developing-real-time-web-applications-with-server-sent-events/
        twitter-sse-demo:
            caption: A demo of a very basic twitter clone that implements server sent events
            href: https://github.com/kaitmore/SSE-demo
            title: Github repozitář „Twitter” aplikace v JavaScriptu (server/klient)
---

Kromně více známého a rozšířeného [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API "Dokumnetace k WebSocket API na MDN")u a klasického {{ site.data.abbr.Ajax }}ového dotazování API serveru existuje také „server-sent events” (dále **SSE**). SSE slouží k jednosměrnému posílání informací ze serveru ke klientovi.

<!--more-->

## Hlavní vlastnosti
Podrobněji rozebírá {% include reference.html target="sseVSws" %} a {% include reference.html target="mdn" %}.

SSE pracuje přes protokol **HTTP(S)**[^1] (může být vstřícnější k firemním firewallům), je *podporováno nativně*[^2] v prohlížečích (z předchozího i na serverech) a relativně jednoduché na implementaci a pochopení (viz dále).

Nativní implementace navíc řeší *znovupřipojování* a *spárovávání zpráv s identifikátory*.

Klíčovými **limitacemi** je nepodpora binárních dat a protokol, v případě velmi komplexních/vytížených systémů.

## Implementace na straně serveru
Zde použijeme {{ site.data.abbr.MIME_typ }} `text/event-stream` a zprávy posíláme v jednoduchém textovém UTF-8 formátu [event stream](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format "Odkaz na sekci 'Event stream format' na MDN").

Tedy se zápisem `data: zpráva` a oddělujeme je `\n\n`[^3]. Ke zprávě lze dodat její jméno `event: jméno` a identifikátor `id: 1`. Tedy celkem:
{% include code.html caption="Ukázka SSE dvou zpráv, které vytvořil server" code='
```text
data: Jen samotná zpráva

id: 1
event: pojmenovana_zprava
data: Druhá zpráva
```
' %}

Jako zprávu můžeme sapozřejmě použít {{ site.data.abbr.JSON }}. Pro {{ site.data.abbr.PHP }} bychom mohli tedy vytvořit funkci ve tvaru:
{% include code.html caption="Ukázka jednoduché funkce pro zasílání SSE v PHP" code='
```PHP
function eventEmmit($data= "", $event= false, $id= false){
    if($id)
        echo "id: $id\n";
    if($event)
        echo "event: $event\n";
    if(is_array($data))
        $data= json_encode($data);
    echo "data: $data\n\n";
    ob_end_flush();
    flush();
}
```
' %}

{% include code.html caption="Ukázka použití `eventEmmit`" code="
```PHP
define('EVENT_DELAY', 1);
header('Cache-Control: no-cache');
header('Content-Type: text/event-stream');
$id= 0;
function out($event, $data){
    global $id;
    eventEmmit($data, $event, id++);
    sleep(EVENT_DELAY);
}
while(true){
    $event= 'event_'.(rand(1, 10)>5 ? 'a': 'b');
    out($event, array( 'now'=> date(DATE_ISO8601) ));
}
```
" %}

## Použití/naslouchání v JavaScriptu
Zde stačí inicializovat [`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource "Dokumentace na MDN") s cestou ke skriptu na serveru. Instance pak mimojiné obsahuje settery `onmessage` resp. `onerror` (k naslouchání nepojmenovaných zpráv resp. chyb), metodu `addEventListener` s jejíž pomocí se dají naslouchat jen vybrané zprávy (dle jména) a metodu `close` pro ukončení spojení.
{% include code.html caption="Tedy ukázka pro dřívější serverovou část" code='
```JavaScript
const sse= new EventSource("cesta/ke/skriptu.php");
const parse= json_candidate=> { try{ return JSON.parse(json_candidate); } catch(e){ return json_candidate; } };
const log= ({ data= "" }= {})=> console.log(parse(data));

sse.addEventListener("event_a", log);
sse.addEventListener("event_b", log);
sse.onerror= console.error;
/*
    …
*/
sse.close();
```
' %}

## Možná (typická) použití
1. Tzv. „hot-reload”: Server a klient si pamatují poslední aktualizaci souboru/stránky. Pokud na serveru dojde ke změně, pomocí SSE pošle nové časové razítko klientovi a ten stránku přenačte (např. `location.reload()`).
1. Rozšířením předchozího je donačítání příspěvků alá Twitter.
1. Velmi podobné je také použití pro notifikace.

## Reference a související zdroje
{% include references_list.html references=page.reference %}

[^1]: Nezabezpečená verze má limity na počet otevřených připojení, viz {% include reference.html target="mdn" %}.
[^2]: Kromně starých prohlížečů, viz [Can I use](https://caniuse.com/eventsource "Tabulka podporovanosti EventSource v JavaScriptu"). Ale existuje např. polyfill ([event-source-polyfill](https://www.npmjs.com/package/event-source-polyfill "Stránky NPM balíčku")).
[^3]: Víceřádkovou zprávu lze zapsat `data: řádek 1.\ndata: řádek 2.`.

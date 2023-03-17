/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global prompt */
window.mastodonShare= function(event){
	event.preventDefault();
	const { target }= event;
	const href= target.getAttribute("data-href");
	const domain= prompt("Zadejte svoji Mastodon instanci:", "mastodon.social");
	if(!domain) return;
	location.href= "https://"+domain+href;
};

document.documentElement.classList.remove("nojs");

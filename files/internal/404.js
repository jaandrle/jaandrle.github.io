/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
(function(){
    const { search: { q: search_el }= {} }= document.forms;
    const { pathname, search }= document.location;
    if(!search_el) return false;
    search_el.value= pathname.split(/[\/-]/).concat(search.slice(1).split("&")).join(" ");
})();
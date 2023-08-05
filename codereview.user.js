// ==UserScript==
// @name         code review in github
// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fix Code review related functionality on github for librejs/noscript users.
// @author       Zach DeCook
// @match        https://github.com/*/*/pull/*/files*
// @match https://github.com/*/*/pull/*
// @grant        none
// ==/UserScript==
window.onload = function() {
// "Viewed" forms. If you check the box, then submit, it will minimize that snippet for next time.
var items = document.querySelectorAll('form[data-autosubmit=true]')
for (var i = 0; i < items.length; i++){
    b=document.createElement('button')
    b.innerText="submit"
    items[i].appendChild(b);
}
// Widget for which files can be hidden.
items = document.querySelectorAll('form.js-file-filter-form')
for (i = 0; i < items.length; i++){
    b=document.createElement('button')
    b.innerText="submit"
    items[i].appendChild(b);
}

    // thread reply (already implemented???)
    items = document.querySelectorAll('button.js-toggle-inline-comment-form')
    for(i = 0; i < items.length; i++) {
        items[i].onclick = function(){
            this.closest('.js-inline-comment-form-container').querySelector('div.inline-comment-form').style = 'display: block;';
        };
    }
}
// TODO: Ability to comment on a line of code.
// @license-end

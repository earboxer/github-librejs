// ==UserScript==
// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
// @name Create pull request
//
// @version 0.1
// @description  Fix Comment related functionality on github for librejs/noscript users.
// @author       Zach DeCook
// @match https://github.com/*/*/compare
// ==/UserScript==
document.querySelector('.compare-pr button').onclick = function(e){
    this.closest('.compare-pr').classList.remove('compare-pr');
};
// @license-end

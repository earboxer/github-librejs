// ==UserScript==
// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
// @name         code review in github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix Code review related functionality on github for librejs/noscript users.
// @author       Zach DeCook
// @match        https://github.com/*/*/pull/*/files*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

// "Viewed" forms. If you check the box, then submit, it will minimize that snippet for next time.
jQuery('form[data-autosubmit=true]').append("<button>submit</button>");
// Widget for which files can be hidden.
jQuery('form.js-file-filter-form').append("<button>submit</button>");
// TODO: Ability to comment on a line of code.
// @license-end

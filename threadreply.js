// ==UserScript==
// @name         thread reply in github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*/*/pull/*
// @match        https://github.com/*/*/issues/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Thread Reply
    jQuery('button.review-thread-reply-button').click(function(e) {
        this.closest('.inline-comment-form-container').classList.add('open')
    });
    // Edit comment!
    jQuery('button.js-comment-edit-button').click(function(e) {
        this.closest('.js-targetable-comment').classList.add('is-comment-editing');
    });
    jQuery('button.js-comment-cancel-button').click(function(e) {
        this.closest('.js-targetable-comment').classList.remove('is-comment-editing');
    });
    // hide comment!
    jQuery('button.js-comment-hide-button').click(function(e) {
        jQuery(this).closest('.edit-comment-hide').find('.js-minimize-comment').removeClass('d-none')
    });
    jQuery('button.js-comment-hide-minimize-form').click(function(e) {
        this.closest('.js-minimize-comment').classList.add('d-none');
    });
})();

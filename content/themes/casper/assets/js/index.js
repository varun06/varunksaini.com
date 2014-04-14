/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

           //This is for reading time and word count in a post
    $('.post-content').readingTime({
    	readingTimeTarget: '.post-reading-time',
    	wordCountTarget: '.post-word-count',
		});

    $('.post-header').readingTime({
    	readingTimeTarget: '.post-reading-time'
    });

    });

}(jQuery));
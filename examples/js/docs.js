(function (tutorial) {
    'use strict';

    //set the active tutorial page on first load
    var section = (document.location.hash) ? document.location.hash.slice(1) : 'get-started';

    $('#trunk').load('docs/' + section + '.html', function () {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });

    $('.docs li a#goto-' + section).addClass('active');

    //handle mouse clicks and so on
    assignEventListeners();

    function assignEventListeners() {
        $('ul.docs li a.viewer').on('click', function (event) {
            event.preventDefault();

            //remove the active viewer from the trunk div
            $('ul.docs li a.viewer').removeClass('active');
            $(this).addClass('active');

            //get the name of the viewer, stars after 'goto-' phrase
            var section = $(this).attr('id').slice(5);
            $('#trunk').load('docs/' + section + '.html', function () {
                $('pre code').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            });

            document.location.hash = section;

            return false;
        });
    }
}(window.tutorial = window.tutorial || {}));
(function (example) {
    'use strict';

    //set the active viewer and section on first load
    var section = (document.location.hash) ? document.location.hash.slice(1) : 'counter';

    $('#trunk').load('viewers/' + section + '.html', function () {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });

    $('.examples li a#goto-' + section).addClass('active');

    //handle mouse clicks and so on
    assignEventListeners();

    function assignEventListeners() {
        $('ul.examples li a.viewer').on('click', function (event) {
            event.preventDefault();

            //remove the active viewer from the trunk div
            $('ul.examples li a.viewer').removeClass('active');
            $(this).addClass('active');

            //clear the old div tags
            metricsViewer.clear();

            //clear all the timers
            while (timers.length) {
                var timer = timers.pop();
                clearInterval(timer);
            }

            //get the name of the viewer, stars after 'goto-' phrase
            var section = $(this).attr('id').slice(5);
            $('#trunk').load('viewers/' + section + '.html', function () {
                $('pre code').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            });

            document.location.hash = section;

            return false;
        });

        $('#dark-css').on('click', function () {
            theme = 'dark';

            $('.trunk-section')
                .css('border-top-color', '#5e5e5e');

            $('.mg-missing-background')
                .css('stroke', '#ccc');

            $('.head ul li a.viewer').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: '../lib/css/metrics-graphics-2.15.6/metricsgraphics-dark.css'});
            $('#dark-code').attr({href : 'css/railscasts.css'});
            $('#mv-dark').attr({href: '../dist/css/metricsviewer-dark.css'});

            return false;
        });

        $('#light-css').on('click', function () {
            theme = 'light';

            $('.trunk-section')
                .css('border-top-color', '#ccc');

            $('.mg-missing-background')
                .css('stroke', 'blue');

            $('.head ul li a.viewer').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: ''});
            $('#dark-code').attr({href: ''});
            $('#mv-dark').attr({href: ''});

            return false;
        });
    }

    example.addTimer = function (timer) {
        timers.push(timer);
    };

    var timers = [];
    var theme = 'light';
}(window.example = window.example || {}));
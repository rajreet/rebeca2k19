document.addEventListener("DOMContentLoaded", particlesJS.load('particle-box', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
}));


$(function () {
    var Page = (function () {
        var $navArrows = $('#nav-arrows').hide(),
            $navOptions = $('#nav-options').hide(),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({
                onReady: function () {

                    $navArrows.show();
                    $navOptions.show();
                    $shadow.show();

                },
                orientation: 'h',
                cuboidsCount: 3,
                autoplay: true,
                interval: 5000
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

            };

        return {
            init: init
        };

    })();

    Page.init();
});
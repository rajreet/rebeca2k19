document.addEventListener("DOMContentLoaded", particlesJS.load('particle-box', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
}));

document.getElementById("selDay").addEventListener("click", () => {
    if (document.getElementsByName("tabs")[0].checked) {
        document.getElementById("typedDay").innerHTML = "Events on Saptami"
    } else if (document.getElementsByName("tabs")[1].checked) {
        document.getElementById("typedDay").innerHTML = "Events on Ashtami"
    } else if (document.getElementsByName("tabs")[2].checked) {
        document.getElementById("typedDay").innerHTML = "Events on Navami"
    } else if (document.getElementsByName("tabs")[3].checked) {
        document.getElementById("typedDay").innerHTML = "Events on Dashami"
    }
});


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

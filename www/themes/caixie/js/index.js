$(window).on('load', function() {

    $('#container-general').removeClass('hide');
    $('#container-general').addClass('ready');

    $(function(){
        $("a.delay").click(function(e) {
            $('#container-general').addClass('hide');
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 500);
            e.preventDefault();
        });
    });

    var windowHeight = $(window).height()/2;


    /* SCROLL CLASS ANIMATION */

    $window = $(window);

    var $containerGeneral = $('#container-general');

    var distanceThumb1 = $('.pres-pr:nth-child(1)').offset().top - windowHeight;

    var distanceThumb2 = $('.pres-pr:nth-child(2)').offset().top - windowHeight;

    var distanceThumb3 = $('.pres-pr:nth-child(3)').offset().top - windowHeight;

    $window.scroll(function() {


        if ( $window.scrollTop() <= 0 ) {

            $containerGeneral.removeClass('anim-thumb-chauffeur-prive').removeClass('anim-thumb-thoughtspot').removeClass('anim-thumb-orange');

        }

        if ( $window.scrollTop() >= distanceThumb1 ) {

            if (!$containerGeneral.hasClass('anim-thumb-chauffeur-prive')) {

                $containerGeneral.addClass('anim-thumb-chauffeur-prive');

            }

        }

        if ( $window.scrollTop() >= distanceThumb2 ) {

            if (!$containerGeneral.hasClass('anim-thumb-thoughtspot')) {

                $containerGeneral.addClass('anim-thumb-thoughtspot');

            }

        }

        if ( $window.scrollTop() >= distanceThumb3 ) {

            if (!$containerGeneral.hasClass('anim-thumb-orange')) {

                $containerGeneral.addClass('anim-thumb-orange');

            }

        }


    });


    /* END SCROLL CLASS ANIMATION */


    /* SCROLL NAV ANIMATION */

    var distanceHref1 = $('#href-pres-chauffeur-prive').offset().top - windowHeight;

    var distanceHref2 = $('#href-pres-thoughtspot').offset().top - windowHeight;

    var distanceHref3 = $('#href-pres-orange').offset().top - windowHeight;

    // var distanceOurVision = $('#href-our-vision').offset().top - windowHeight;

    var distanceExt = $('#href-ext').offset().top - windowHeight;

    var distanceContact = $('#href-nav-contact').offset().top - windowHeight;

    $window.scroll(function() {


        if ( $window.scrollTop() <= 0 ) {

            $containerGeneral.addClass('active-nav-home');
            $containerGeneral.removeClass('active-nav-thumb-1');

        }

        if ( $window.scrollTop() >= distanceHref1 && $window.scrollTop() <= distanceHref2 ) {

            $containerGeneral.removeClass('active-nav-home');
            $containerGeneral.addClass('active-nav-thumb-1');
            $containerGeneral.removeClass('active-nav-thumb-2');

        }

        if ( $window.scrollTop() >= distanceHref2 && $window.scrollTop() <= distanceHref3  ) {

            $containerGeneral.addClass('active-nav-thumb-2');
            $containerGeneral.removeClass('active-nav-thumb-1');
            $containerGeneral.removeClass('active-nav-thumb-3');

        }

/*        if ( $window.scrollTop() >= distanceHref3 && $window.scrollTop() <= distanceOurVision ) {

            $containerGeneral.addClass('active-nav-thumb-3');
            $containerGeneral.removeClass('active-nav-thumb-2');
            $containerGeneral.removeClass('active-nav-our-vision');

        }

        if ( $window.scrollTop() >= distanceOurVision && $window.scrollTop() <= distanceExt ) {

            $containerGeneral.addClass('active-nav-our-vision');
            $containerGeneral.removeClass('active-nav-thumb-3');
            $containerGeneral.removeClass('active-nav-ext');

        }*/

        if ( $window.scrollTop() >= distanceExt && $window.scrollTop() <= distanceContact ) {

            $containerGeneral.addClass('active-nav-ext');
            $containerGeneral.removeClass('active-nav-our-vision');
            $containerGeneral.removeClass('active-nav-contact');

        }

        if ( $window.scrollTop() >= distanceContact ) {

            $containerGeneral.addClass('active-nav-contact');
            $containerGeneral.removeClass('active-nav-ext');

        }



    });

    /* END SCROLL NAV ANIMATION */


    /* NAV AVIS */

    $('.section-ext_container_avis .btn-nav').click(function(){

        if (!$(this).hasClass('disable')) {

            $(this).addClass('disable');

            if ($(this).hasClass('right')) {

                $('.section-ext_container_avis .avis.show')
                    .removeClass('show')
                    .delay(1000)
                    .hide(0)
                    .next()
                    .addClass('waiting-show')
                    .show()
                setTimeout(function() {
                    $('.section-ext_container_avis .avis.waiting-show')
                        .addClass('show')
                        .removeClass('waiting-show');
                }, 500);

            } else if ($(this).hasClass('left')) {

                $('.section-ext_container_avis .avis.show')
                    .removeClass('show')
                    .delay(1000)
                    .hide(0)
                    .prev()
                    .addClass('waiting-show')
                    .show()
                setTimeout(function() {
                    $('.section-ext_container_avis .avis.waiting-show')
                        .addClass('show')
                        .removeClass('waiting-show');
                }, 500);

            };

            setTimeout(function() {
                if (!$('.section-ext_container_avis .avis:last-child()').hasClass('show') && !$('.section-ext_container_avis .avis:first-child()').hasClass('show')) {
                    $('.section-ext_container_avis .btn-nav').removeClass('disable');
                };
            }, 1500);

        };

    });

    $('.section-ext_container_avis .btn-nav.right').click();

    /* END NAV AVIS */




    /* ICOSAHEDRON */

    // var icosahedron = new AnimatedShape( 'shape-icosahedron', 'icosahedron', 3000 );
    // icosahedron.init();

    /* END ICOSAHEDRON */

    // $(function(){
        var icosahedron = new Icosahedron({
            container: document.getElementById("shape-icosahedron"),
//            container: document.querySelector("aside.icosahedron"),
            radius: 120,
            vertexLabels: getVertexLabels()
        });
        icosahedron.show(1e3);
        // icosahedron.showConnection();

    // })
});




/* ------------------------------------------------------------------------------
*
*  # Fixed secondary sidebar
*
*  Specific JS code additions for layout_navbar_secondary_fixed.html page
*
*  Version: 1.0
*  Latest update: Feb 26, 2016
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Affix sidebar
    // ------------------------------

    // When affixed
    $('#navbar-second').on('affixed.bs.affix', function() {
        $(this).parent().children('.page-header-content').css('padding-bottom', $(this).outerHeight());
        $('body').addClass('navbar-affixed-top');
    });

    // When on top
    $('#navbar-second').on('affixed-top.bs.affix', function() {
        $(this).parent().children('.page-header-content').css('padding-bottom', '');
        $('body').removeClass('navbar-affixed-top');
    });

    // init
    $('#navbar-second, .page-header > .fab-menu').affix({
        offset: {
            top: $('#navbar-second').offset().top
        }
    });

});

/* ------------------------------------------------------------------------------
*
*  # Login page
*
*  Specific JS code additions for login and registration pages
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

	// Style checkboxes and radios
	// $('.styled').uniform();
    var windowWidth = $(window).width();


    if (windowWidth > 767) {
        particlesJS.load('particlesred-js', '/static/data/particlesred.json');
        particlesJS.load('particlesblack-js', '/static/data/particlesblack.json');
        particlesJS.load('particlesblue-js', '/static/data/particlesblue.json');
        particlesJS.load('particlesorange-js', '/static/data/particlesorange.json');

        // particlesJS.load('particlesred-js-thanks', '/static/assets/build/particlesred.json');
        // particlesJS.load('particlesblack-js-thanks', '/static/assets/build/particlesblack.json');
        // particlesJS.load('particlesblue-js-thanks', '/static/assets/build/particlesblue.json');
        // particlesJS.load('particlesorange-js-thanks', '/static/assets/build/particlesorange.json');
    }
});

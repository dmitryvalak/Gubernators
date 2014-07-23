jQuery(function ($) {

	FastClick.attach(document.body);

	/**
	 * Off-screen navigation
	 */
	var $wrapper = $('.i-canvas-wrapper'),
		$nav = $('.b-nav:first');

	// Toggle on click
	$('.b-header__nav-toggle').on('click', function (e) {
		e.preventDefault();
		$wrapper.toggleClass('i-offset-right');
        $(".b-nav").toggleClass("show-nav");
	});

	// Menu nav
	$nav.find('a').on('click', function (e) {
        //e.preventDefault();  TODO: remove this line when navigation is ready

        var parentEl    = $(this).parent('li'),
            dropNav     = $(this).parent('li').children('ul');

		$nav.find('li').removeClass('active');  // remove active class from other nav elements
        parentEl.addClass('active'); // add active class to clicked nav element

        // Hide other visible dropdowns
        $("nav ul li").find("ul").not(dropNav).each(function(){
           if($(this).is(":visible")) {
               $(this).slideUp();
           }
        });

        $("nav ul li").not(parentEl).each(function(){
            if($(this).hasClass("parent")) {
                $(this).removeClass("parent");
            }
        });

        // Show dropdown menu
        if(dropNav.length != 0) {
            dropNav.slideToggle();
            parentEl.toggleClass('parent');
        }


	});




    var mySwiper = $('.swiper-container').swiper({
        mode: 'horizontal',
        loop: true,
        autoplay: 5000,
        calculateHeight: true
    });


});

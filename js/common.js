$(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    auto: true,
    mouseDrag: true,
    nav: false,
    dots: true,
    items: 1
  });

  // ----------------- Variables

  wrapper   = $(".tabs");
  tabs      = wrapper.find(".tab");
  tabToggle = wrapper.find(".tab-toggle");

  // ----------------- Functions

  function openTab() {
  	var content     = $(this).parent().next(".content"),
  		activeItems = wrapper.find(".active");

  	if(!$(this).hasClass('active')) {
  		$(this).add(content).add(activeItems).toggleClass('active');
  		wrapper.css('min-height', content.outerHeight());
  	}
  };

  // ----------------- Interactions

  tabToggle.on('click', openTab);

  // ----------------- Constructor functions

  $(window).load(function(){
    tabToggle.first().trigger('click');
  });

  $(".burger-nav").on("click", function(){
    $("header nav ul").toggleClass("open");
  });

  $('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });

  // JQUERY NAV TOGGLE
  $('#menu').bind('click',function(event){
      $('#mainnav ul').slideToggle();
  });

  $(window).resize(function(){
      var w = $(window).width();
      if(w > 768) {
          $('#mainnav ul').removeAttr('style');
      }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
	});

});

  jQuery(function($){
    $(".phone").mask("+7 (999) 999-9999");

  });

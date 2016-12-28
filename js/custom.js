/*back to top */
jQuery(document).ready(function($) {
	if($(window).width() < 767){
  		  $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000, 'easeInOutExpo'); // Animate the scroll to this link's href value
												
});
}
else{
	jQuery(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top-60}, 2000, 'easeInOutExpo'); // Animate the scroll to this link's href value
												
});
}

});

jQuery(document).ready(function($){
	$("#scroll-up").hide();
	$(function () {
		$(window).scroll(function(){
		if ($(window).scrollTop()>50){
		$("#scroll-up").fadeIn(1500);
		}
		else
		{
		$("#scroll-up").fadeOut(1500);
		}
		});
		
		$("#scroll-up").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
		});
		});	
		
	
      $('#slideshow-home').flexslider({
        animation: "fade",
		controlNav:false,
	   directionNav: true
      });
 $('#testimonials-slider').flexslider({
        animation: "fade",
	//	controlNav:false,
	   directionNav: true
      });
	  
	 $('#testimonials-slider2').flexslider({
        animation: "fade",
	//	controlNav:false,
	   directionNav: true
      });  
	  
	   $('#latest-slider').flexslider({
        animation: "fade",
		controlNav:false,
	   directionNav: true
      });
	  
	  $(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 1) sticky.addClass('header-fixed');
  else sticky.removeClass('header-fixed');
});
$('.fancybox').fancybox();	
	 
	 jQuery(".servicesArrow" ).click(function() {
         //  jQuery(".click-menu").toggleClass("close-menu");
		 jQuery(".slide-dropdown").toggleClass("slide-dropdown-open");
		 
		   // Animation complete.
           
           }); 
	  
	  
});

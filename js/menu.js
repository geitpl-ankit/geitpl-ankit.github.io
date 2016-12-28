$(function() {
			var pull 		= $('.pull');
				menu 		= $('.menu ul');
				menuHeight	= menu.height();
				
			$(pull).on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				menu.slideToggle();
			});
			

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 600 && menu.is(':hidden')) {
        			menu.removeAttr('style');
					
        		}
    		});
		});




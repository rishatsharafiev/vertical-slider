$(document).ready(mousewheel);

function mousewheel() {
	var 
		screen = 0,
		container = $('.main'),
		pages = $('.page'),
		inscroll = false;

	$('.page').first().addClass('active');

	$('body').on('mousewheel', function(event) {
		var activePage = pages.filter('.active');

		if(!inscroll) {
			inscroll = true;

		    if(event.deltaY > 0) {
	    		if(activePage.prev().length) screen--;
		    } else {
		    	if(activePage.next().length) screen++;

		    }
		}

		var 
			position = (-screen * 100) + '%';

		pages.eq(screen).addClass('active').siblings().removeClass('active');
		container.css('top', position);

		console.log(screen, position);
	    setTimeout(function() {
	    	inscroll = false;
	    }, 1500);
	});
}
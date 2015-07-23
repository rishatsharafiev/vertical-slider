$(document).ready(run);


function run () {
	$('.radious').on('click', '.radio', radio);
	mousewheel();
}

function radio() {
	var
		index = $(this).index(),
		container = $('.main'),
		pages = $('.page');

	pages.eq(index).addClass('active').siblings().removeClass('active');
	container.css('top', index*(-100)+"%");
  $('.radious').find('.radio')
    .eq(index)
    .addClass('radio--active')
    .siblings()
    .removeClass('radio--active');
}


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

		$('.radious').find('.radio')
	    .eq(screen)
	    .addClass('radio--active')
	    .siblings()
	    .removeClass('radio--active');

		console.log(screen, position);
	    setTimeout(function() {
	    	inscroll = false;
	    }, 1500);
	});
}


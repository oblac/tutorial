// show-hide blocks
function show(block) {
	$('.more', '#block' + block).slideToggle(1000);
	// $('.circle', '#scroller-' + block).toggleClass('click');
	var link = $('.amore a', '#block' + block);
	var txt = link.text();
	if (txt.charAt(0) === 'V') {
		link.html('Hide snippets &laquo;');
	} else {
		link.html('View all snippets &raquo;');
	}
	return false;
}

function addSingleShowSnippet(screenWidth) {
	if(screenWidth <= 1024) {
		$('.more').each(function() {
			$(this).after('<a href="javascript:;" class="show-single-snippet">Show snippet</a>');
		});
	}
}

// inverter
function inverter() {
	$('.section h2').each(function() {
		var $this = $(this);
		var text = $this.text();
		var len = text.length;
		var index = Math.floor(Math.random() * len + 1);

		char = text.charAt(index);
		if (char != ' ') {
			text = text.substring(0, index) + '<span>' + char + '</span>' + text.substring(index + 1);
		}

		$this.html(text);
	});
}

var firstTime = true;

function circleSectionLogic(screenWidth) {
	var elementPosition;
	if (screenWidth >= 1024) {
		// position them
		elementPosition = screenWidth - 800;
		elementPosition = elementPosition / 4;
		$('.circle').each(function() {
			$(this).css('left', elementPosition);
		});
    $('.vertical-line').each(function() {
      $(this).css('left', elementPosition + 46);
    });

    if (firstTime === true) {
		initLogoAnimation(elementPosition - 20);
		firstTime = false;
	}
	else {
		var finalDestination = elementPosition - 20;
		$('.animated-logo').css({ 'top': 80 + 'px', 'left': finalDestination + 'px'});
	}

    $('.scroll-up').css('right', elementPosition - 60);
		$('.loop-logo').each(function() {
			$(this).css('right', elementPosition - 50);
		});
	}
}

function initLogoAnimation(finalDestination) {
	$('.animated-logo').css({ 'right': -160 + 'px', 'transform': 'rotate(-100deg)' });
	$('.animated-logo').addClass('animate');

	setTimeout(function() {
		$('.animated-logo').css({ 'top': -160 + 'px', 'left': 'initial', 'right': 110 + '%', 'transform': 'rotate(-110deg)' });
	}, 1000);

	setTimeout(function() {
		$('.animated-logo').css({ 'top': 60 + '%', 'left': -160 + 'px', 'transform': 'rotate(-10deg)' });
		$('.animated-logo').removeClass('animate');
	}, 2000);

	setTimeout(function() {
		$('.animated-logo').addClass('animate-fast');
		$('.animated-logo').css({ 'top': 30 + '%', 'left': -160 + 'px', 'transform': 'rotate(-10deg)'});
	}, 2100);

	setTimeout(function() {
		$('.animated-logo').removeClass('animate-fast').addClass('animate');
		$('.animated-logo').css({ 'top': 80 + 'px', 'left': finalDestination + 'px', 'transform': 'rotate(0deg)'});
	}, 2400);
}


function levelPlanes() {
	setTimeout(function() {
		$('.loop-logo img').css('transform', 'rotate(45deg)');
		$('.loop-logo.inverted img').css('transform', 'rotate(-124deg)');
	},1000);
}



function animatedCircles(screenWidth) {
	if (screenWidth >= 1024) {
		var $window = $(window);

		var scrollers = [$('#scroller-1'), $('#scroller-2'), $('#scroller-3'), $('#scroller-4'), $('#scroller-5'), $('#scroller-6')];
		var blocks = [$('#block1'), $('#block2'), $('#block3'), $('#block4'), $('#block5'), $('#block6')];
		var scrollerAnchors = [$('#scroller-anchor-1'), $('#scroller-anchor-2'), $('#scroller-anchor-3'), $('#scroller-anchor-4'), $('#scroller-anchor-5'), $('#scroller-anchor-6')];

		var alreadyInAir = false;

		$window.scroll(function() {
			var window_top = $window.scrollTop();

			if(window_top > 300) {
				$('.scroll-up').addClass('animate');
				if(alreadyInAir === false) {
					$('.loop-logo').each(function() {
						$(this).addClass('animated');
						$(this).find('img').css('transform', 'rotate(-38deg)');
					});
					levelPlanes();
					alreadyInAir = true;
				}
			} else {
				if(alreadyInAir === true) {
					alreadyInAir = false;
					$('.scroll-up').removeClass('animate');
					$('.loop-logo').each(function() {
						$(this).removeClass('animated');
						$(this).find('img').css('transform', 'rotate(142deg)');
					});
				}
			}

			for (var i = 0; i < scrollers.length; i++) {

				var div_top = scrollerAnchors[i].offset().top;
				var block_top = blocks[i].offset().top;
				var block_height = blocks[i].height() - 260;

				if (window_top > div_top && window_top < div_top + block_height) {
					scrollers[i].removeClass('fixed');
					scrollers[i].addClass('stick');
				} else if(window_top > div_top && window_top > div_top + block_height ) {
					scrollers[i].addClass('fixed');
					scrollers[i].removeClass('stick');
				} else {
					scrollers[i].removeClass('stick');
					scrollers[i].removeClass('fixed');
				}
			}
		});
	}
}

$(document).ready(function() {
	//window.setInterval(inverter, 10000);
	//inverter();
	var screenWidth = $(window).width();

	// circleSectionLogic
	circleSectionLogic(screenWidth);
	animatedCircles(screenWidth);

	addSingleShowSnippet(screenWidth);

	$('.show-single-snippet').on('click', function() {

		$(this).prev().slideToggle();

		var el = $(this);

		if (el.text().charAt(0) === 'S') {
			el.text('Hide snippet');
		} else {
			el.text('Show snippet');
		}

	});

	$('.scroll-up').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
	});
});
// doc ready

$(window).resize(function() {
	var screenWidth = $(window).width();
	circleSectionLogic(screenWidth);
});

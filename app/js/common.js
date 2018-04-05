$(function() {


	$(".toggle-mnu").on('click', function () {
		if ($(".menu").is(":visible")) {
			$(".menu").fadeOut(300);
	} else {
			$(".menu").fadeIn(300);
		}
		return false;
	});

	$("body, .menu a").on('click', function () {
		$(".menu").fadeOut(300);
	});


	$(".top-text h2").each(function () {
		var self = $(this);
		self.html(self.html().replace(/^\s*(\S+)/, '<span>$1</span>'))
	});
	function skill($class, num) {
		$($class).circleProgress({
			value: num,
			size: 120,
			thickness: 2,
			fill: "#00a99d"
		});
	}
	skill('.skill-item', 0.76);
	skill('.skill-item-2', 0.92);
	skill('.skill-item-3', 0.68);
	skill('.skill-item-4', 1.0);
	skill('.skill-item-5', 0.83);
	skill('.skill-item-6', 0.50);

	$(".member-wrap").owlCarousel({
		loop: true,
		smartSpeed: 700,
		responsiveClass: true,
		items: 4,
		nav: true,
		navText: ['<i class="arrow_triangle-left"></i>', '<i class="arrow_triangle-right"></i>'],
		responsive:{
			0:{
				items: 1
			},
			400:{
				items: 2
			},
			700:{
				items: 3
			},
			1000:{
				items: 4
			}
		}
	});

	$(".quotes").owlCarousel({
		loop: true,
		smartSpeed: 700,
		items: 1,
		nav: true,
		autoHeight: true,
		navText: ['<i class="arrow_triangle-left"></i>', '<i class="arrow_triangle-right"></i>']
	});

	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$('.owl-carousel').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});

	$('.portfolio-item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex','-1');
							$target.focus();
						};
					});
				}
			}
		});

});


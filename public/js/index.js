$(document).ready(function () {

	function initSoFunktioniertZastaSlider() {
		$('#funktioniert-slider').slick({
			dots: false,
			infinite: false,
			// speed: 300,
			slidesToShow: 3,
			// slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true
					}
				}
			]
		});
	}

	function initDashboardFeaturesSlider() {
		$('.dashboard-features-items .feature').each(function (i, v) {
			var html = "";
			var icon = $(this).find('.icon')[0].currentSrc;
			var text = $(this).html();
			var fixedIcon = $(this).find('.icon')[0].currentSrc;
			// html += '<div><img src="img/feature' + (i + 1) + '.png" /><div><img src="' + icon + '" class="Group-14 icon"/><p>' + text + '</p></div></div>';
			html += '<div><img src="img/group-34' + '.png"  class="apn-mob-img"/><div><img src="' + fixedIcon + '" class="Group-14 icon"/><p>' + text + '</p></div></div>';

			$('#dashboard-features-carousel').append(html);
		});

		$('#dashboard-features-carousel').slick({
			dots: true,
			infinite: true,
		});
	}

	initSoFunktioniertZastaSlider()

	
	

	let isDashboardInitialized = false;
	const windowEl = $(window);
	const checkDashboardSliderInit = function() {
		if (!isDashboardInitialized && windowEl.width() < 768) {
			isDashboardInitialized = true;
			initDashboardFeaturesSlider();
		}
	}
	checkDashboardSliderInit();
	windowEl.on('resize', checkDashboardSliderInit);

	if ($('.faq-list').length > 0) {
		if (window.location.hash) {
			var elem = $('#' + window.location.hash.replace('#', ''));
			if (elem) {
				const prev = elem.prev('.faq-title');
				if (prev) {
					$('html, body').animate({
						scrollTop: prev.offset().top - 50
					}, 1000, 'swing', function(){
						prev.trigger('click');
					});
				}
			}
		}
		$('.faq-title').on('click', function () {
			history.replaceState({}, "", $(this).attr('href'));
		});
	}
});

// var video = document.getElementById("video1");
// if($(window).width() < 768){
// 	video.setAttribute('poster', 'img/video_fallback.png');
// }

function videoPlay() {
	video.play();
	$('#video1').show();
	$('#video1').css('z-index', 5);
	$('.videoClose').css('display', 'block');
}

function videoStop() {
	video.pause();
	video.currentTime = 0;
	$('#video1').css('z-index', 0);
	$('.videoClose').css('display', 'none');
}

function videoPlayEnded(e) {
	$('#video1').css('z-index', 0);
	$('.videoClose').css('display', 'none');
}

function testSlider() {
	$('#testimonial-slider').slick({
		dots: false,
		infinite: false,
		// speed: 300,
		slidesToShow: 3,
		// slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
}

testSlider();


function featureSlider() {
	$('#feature-slider').slick({
		dots: false,
		infinite: false,
		// speed: 300,
		slidesToShow: 3,
		// slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
}

featureSlider();
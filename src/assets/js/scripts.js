$(document).ready(function(){

	$('select').styler({
		selectSearch: true
	});
	
	$('#scrollbox').enscroll({
		verticalTrackClass: 'track1',
		verticalHandleClass: 'handle1',
		drawScrollButtons: false,
	});
	
	if($('#accordion').length){
		
		$('#accordion > li > a').click(function(){
			if($(this).closest('li').hasClass('avisits-active')) {
				$(this).closest('li').removeClass('avisits-active');
			} else {
				$('#accordion > li').removeClass('avisits-active');
				$(this).closest('li').addClass('avisits-active');
			}
			return false;
		});
	}
	
	$(".avisits-date_slider").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
		dots: false
    });
	
	$(".avisits_slider").slick({
        infinite: true,
		centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: false,
		arrows: false
    });
	
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box').addClass('active').eq($(this).index()).removeClass('active');
	})
		
});


$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});
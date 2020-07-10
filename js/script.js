$(function () {
	
    // swiper
    var swiper = new Swiper('.swiper1', {
        effect: 'fade',
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    var swiper = new Swiper('.swiper2', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    var swiper = new Swiper('.swiper3', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
	
	var swiper = new Swiper('.swiper4', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });        
    
    // 우측 네비게이션 클릭 이동
    $('.right_nav li a').click(function () {
        var scroll = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: scroll}, 800);       
    });

    // 스크롤 #scene2 부터 글자색 변경
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        var sec1 = $('#scene1').offset().top 
        var sec2 = $('#scene2').offset().top - 1
        var sec3 = $('#scene3').offset().top - 1
        var sec4 = $('#scene4').offset().top - 1
        var sec5 = $('#scene5').offset().top - 1
        var sec6 = $('#scene6').offset().top - 1
        if(top == sec1) {
            $('.top_list').css('color','')
            $('.left_wrap').css('color','')
            $('.right_nav').css('color','')
            $('.after').css('background-color','')
            $('.line').css('background-color','')
			$('.logo').css({'margin-top':''})
			$('.follow img').attr('src','images/common/plus_white.svg')
			$('.left_wrap').css('border-color','')
		    $('.follow').css('border-color','')
			$('.top_list li .after').css('background-color','')
			$('.scroll_down').css('color','')
			$('.scroll_down img').attr('src','images/common/scroll_white.png')
         } else if (top > sec2 && top < sec6) {
            $('.top_list').css('color','#222')
            $('.left_wrap').css('color','#222')
            $('.right_nav').css('color','#222')
            $('.after').css('background-color','#222')
            $('.line').css('background-color','#222')
		    $('.logo').css({'margin-top':'-35px'})
		    $('.follow img').attr('src','images/common/plus_black.svg')
		    $('.left_wrap').css('border-color','rgba(0,0,0,0.2)')
		    $('.follow').css('border-color','rgba(0,0,0,0.2)')
			$('.top_list li .after').css('background-color','#555')
			$('.scroll_down').css('color','#222')
			$('.scroll_down img').attr('src','images/common/scroll_black.png')
        } else if (top >= sec6 /*&& top < sec2*/) {
            $('.top_list').css('color','')
            $('.left_wrap').css('color','')
            $('.right_nav').css('color','')
            $('.after').css('background-color','')
            $('.line').css('background-color','')
			$('.logo').css({'margin-top':''})
			$('.follow img').attr('src','images/common/plus_white.svg')
			$('.left_wrap').css('border-color','')
		    $('.follow').css('border-color','')
			$('.top_list li .after').css('background-color','')
			$('.scroll_down').css('color','')
			$('.scroll_down img').attr('src','images/common/scroll_white.png')
        }	
		
		
		
    }); /*window scroll*/
    
    /*메뉴 아이콘 클릭 토탈메뉴*/
	$('.total_menu').hide();
	$('.menu_icon').click(function(){		
		$('.total_menu').fadeIn();
	})
	$('.close').click(function(){
		$('.total_menu').fadeOut();
	})
	
    /*notice tab 색변경*/
	$('.tab li').click(function(){
		$('.tab li').removeClass('selected')
		$(this).addClass('selected')
	})
	
	/*notice tab 내용변경*/
	$('.tab li').click(function(){
		$('.notice1, .notice2, .notice3, .notice4, .notice5').hide()
		$($(this).attr('href')).show()		
	})
	
	
	
	
	
    
}); /*doc ready*/
    


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
        /*var sec4 = $('#scene4').offset().top + 1
        var sec4 = $('#scene5').offset().top + 1*/
        if(top == sec1) {
            $('.top_list').css('color','')
            $('.left_wrap').css('color','')
            $('.right_nav').css('color','')
            $('.after').css('background-color','')
            $('.line').css('background-color','')
			$('.logo img').attr('src','images/common/logo_white.png')
			$('.left_wrap').css('border-color','')
		    $('.follow').css('border-color','')
			$('.top_list li .after').css('background-color','')
         } else if (top > sec2 /*&& top < sec2*/) {
            $('.top_list').css('color','#222')
            $('.left_wrap').css('color','#222')
            $('.right_nav').css('color','#222')
            $('.after').css('background-color','#222')
            $('.line').css('background-color','#222')
		    $('.logo img').attr('src','images/common/logo_black.png')
		    $('.left_wrap').css('border-color','rgba(0,0,0,0.2)')
		    $('.follow').css('border-color','rgba(0,0,0,0.2)')
			$('.top_list li .after').css('background-color','#555')
        }
		/*
       .left_wrap{cborder-right: 1px solid rgba(0,0,0,0.2);}
	   .follow{border-color: rgba(0,0,0,0.2);}
	   	*/
		
		
    }); /*window scroll*/
    
    
    
    
}); /*doc ready*/
    


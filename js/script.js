$(function () {
    
	// language
	$('.top_right .top_sublist >li:nth-child(4)').toggle(function(){
		$(this).children('ul').stop().slideDown()	
		$(this).css('opacity','1')
	}, function(){
		$(this).children('ul').stop().slideUp()
		$(this).css('opacity','0.6')
	})
	
	// plus 애니메이션
	$('#scene1 .info .plus').hover(function(){
		$(this).animate({'margin-left':'10px'}, function(){
			$(this).animate({'margin-left':''})
		})
	}, function(){		
	})
	$('#scene5 .more').hover(function(){
		$(this).animate({'margin-right':'-5px'}, function(){
			$(this).animate({'margin-right':'5px'})
		})
	}, function(){		
	})
	
    // right_nav 클릭 이동
    $('.right_nav li a').click(function () {
        var scroll = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: scroll}, 800);       
    });
	
	/*follow_popup*/	
	$('.follow_popup_txt').animate({'left':'40px'})
	$('.follow_popup_txt').css('opacity','0')
	$('.follow').click(function(){
		$('.follow_popup_wrap').show()/*z-index*/
		$('.follow_popup').animate({'margin-top':'0'}, 500, function(){			
			$('.follow_popup_txt').animate({'left':'90px','opacity':'1'})			
		})
	})
	$('.follow_popup_tit').click(function(){			
		$('.follow_popup_txt').animate({'left':'40px','opacity':'0'}, 500, function(){
			$('.follow_popup').animate({'margin-top':'160px'}, 500, function(){				
				$('.follow_popup_wrap').hide()/*z-index*/
			})
		})
	})
		
	
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
            $('.top_right').css('color','')
            $('.top_right .top_sublist >li:nth-child(3)').css('border','')
            $('.top_right .top_sublist >li:nth-child(4)').css('border','')
            $('.top_right .top_sublist >li:nth-child(4) > ul').css('border','')
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
			$('.mobile_hamburger > div').css('background-color','')
         } else if (top > sec1 && top < sec6) {
            $('.top_right').css('color','#222')
			$('.top_right .top_sublist >li:nth-child(3)').css('border','1px solid #666')
            $('.top_right .top_sublist >li:nth-child(4)').css('border','1px solid #666')
			 $('.top_right .top_sublist >li:nth-child(4) > ul').css('border','1px solid #666')
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
			$('.mobile_hamburger > div').css('background-color','#222')
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
			$('.mobile_hamburger > div').css('background-color','')
        }		
    }); /*window scroll*/
    
    // 햄버거버튼
	$('.total_menu').hide();
	$('.menu_icon').click(function(){		
		$('.total_menu').fadeIn();
	})
	$('.close').click(function(){
		$('.total_menu').fadeOut();
	})
	
	// 모바일 햄버거버튼	
	$('.mobile_hamburger').toggle(function(){		
		$('.mobile_hamburger .line1').addClass('click');
		$('.mobile_hamburger .line2').addClass('click');
		$('.mobile_menu').stop().animate({'margin-left':'0'}, 1000, 'easeOutCubic');
	}, function(){
		$('.mobile_hamburger .line1').removeClass('click');
		$('.mobile_hamburger .line2').removeClass('click');
		$('.mobile_menu').stop().animate({'margin-left':'-800px'}, 1000);
	})
	
	// 모바일 메뉴 슬라이드 다운
	$('.mobile_gnb li').toggle(function(){
		$('.mobile_gnb >li> ul').stop().slideUp();
		$('.mobile_gnb >li> img').removeClass('click');
		$(this).children('ul').stop().slideDown();
		$(this).children('img').addClass('click');
	}, function(){
		$(this).children('ul').stop().slideUp();
		$(this).children('img').removeClass('click');
	})
	
    // notice tab
	$('.tab li').click(function(){
		$('.tab li').removeClass('selected')
		$(this).addClass('selected')
		$('.notice1, .notice2, .notice3, .notice4, .notice5').hide()
		$($(this).attr('href')).show()
	})
	
	 // 닷 클릭 이동
    $('.icon ul li a').click(function () {
        var scroll = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 400, 'easeOutCubic');       
    });   

    // 닷 위치에 따라 색변화
	/*여기 못줄이나...*/
	$('.right_nav li:eq(5) .before').css('visibility','visible')
	$('.right_nav li:eq(5)').css('background-color', '#fff').css('color','#222')	
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        var sec1 = $('#scene1').offset().top
        var sec2 = $('#scene2').offset().top 
        var sec3 = $('#scene3').offset().top 
        var sec4 = $('#scene4').offset().top 
        var sec5 = $('#scene5').offset().top 
        var sec6 = $('#scene6').offset().top 
        var sec7 = $('#scene7').offset().top 		
        if(top == sec1) {
			$('.right_nav li').css('background-color', '').css('color','').removeClass('selected')            
            $('.right_nav li:eq(5)').css('background-color', '#fff').css('color','#222').addClass('selected')            
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(5) .before').css('visibility','visible')
        } else if (top == sec2) {
            $('.right_nav li').css('background-color', '').css('color','').removeClass('selected')             
            $('.right_nav li:eq(0)').css('background-color', '#222').css('color','#fff').addClass('selected')              
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(0) .before').css('visibility','visible')
			$('.right_nav li:eq(0) .before').css('background-color','#222')
        } else if (top == sec3) { 
            $('.right_nav li').css('background-color', '').css('color','').removeClass('selected')              
            $('.right_nav li:eq(1)').css('background-color', '#222').css('color','#fff').addClass('selected')  
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(1) .before').css('visibility','visible')
			$('.right_nav li:eq(1) .before').css('background-color','#222')
        } else if (top == sec4) { 
            $('.right_nav li').css('background-color', '').css('color','').removeClass('selected')           
            $('.right_nav li:eq(2)').css('background-color', '#222').css('color','#fff').addClass('selected')
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(2) .before').css('visibility','visible')
			$('.right_nav li:eq(2) .before').css('background-color','#222')
        } else if (top == sec5) { 
            $('.right_nav li').css('background-color', '').css('color','').removeClass('selected')             
            $('.right_nav li:eq(3)').css('background-color', '#222').css('color','#fff').addClass('selected')
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(3) .before').css('visibility','visible')
			$('.right_nav li:eq(3) .before').css('background-color','#222')
        } else if (top == sec6) { 
            $('.right_nav li').css('background-color', '').css('color','').removeClass('selected')             
            $('.right_nav li:eq(4)').css('background-color', '#fff').css('color','#222').addClass('selected')
			$('.right_nav li .before').css('visibility','hidden')
			$('.right_nav li:eq(4) .before').css('visibility','visible')
			$('.right_nav li:eq(4) .before').css('background-color','')
        } 
		return false;
    });
	
	
    
}); /*doc ready*/

/*
$( window ).resize(function() {  
    var width = $(window).width();    
    $('html, body, .container, .container > div').css('width',width);
});
    */
/*, body, .wrap , .container, .container section*/

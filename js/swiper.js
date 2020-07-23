$(function () {
	
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
		speed : 1000,
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
}); 
/*
* @Author: 15032063277
* @Date:   2017-12-21 13:54:47
* @Last Modified by:   15032063277
* @Last Modified time: 2017-12-21 18:31:47
*/
$(function(){
	var memberSystem = {
		init:function(){
			this._swiper();
		},
		_swiper:function(){
			var index = null;
			var afterOffset = null;
			var mySwiper = new Swiper('.swiper-container', {
				effect : 'coverflow',
				slidesPerView: 1.2,
				centeredSlides: true,
				coverflow: {
				            rotate: 30,
				            stretch: 10,
				            depth: 60,
				            modifier: 2,
				            slideShadows : false
				},
				onSlideChangeEnd: function(swiper,translate){
					var  index = mySwiper.realIndex;
					switch(index){
						case 0:
							$('#opacity').removeClass('active');
							mySwiper.setWrapperTransition(500);
							mySwiper.setWrapperTranslate(0);
						  break;
						case 1:
						  $('#opacity').removeClass('active');
						  break;
						case 2:
						  	$('#opacity').addClass('active');
						  break;
						case 3:
							$('#opacity').addClass('active');
						  break;
						case 4:
							$('#opacity').addClass('active');
							afterOffset = mySwiper.translate;
							mySwiper.setWrapperTransition(500);
							mySwiper.setWrapperTranslate(afterOffset+30);	
						  break;					  					  					  
						default:
					}										
				},			
			});
			mySwiper.setWrapperTransition(500);
			mySwiper.setWrapperTranslate(0);
		},
	};
	memberSystem.init();
});
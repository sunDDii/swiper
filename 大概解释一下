# swiper
swiper 制作滑动轮播效果
幻灯片的切换效果运用的是3D流效果：effect : 'coverflow',
页面显示多少个元素（本次显示1.3）：slidesPerView: 1.4,
显示是居中还是靠左：centeredSlides: true/false,
本次需求为五个不同状态会员显示，若为第一个或者最后一个那么边缘显示其他会显示的多，
如果进入页面不是第一个或者最后一个那么两端显示平均，有点乱，还是看代码吧；
			var index = null;
			var afterOffset = null;
			var mySwiper = new Swiper('.swiper-container', {//实例化不用说吧
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
				onSlideChangeEnd: function(swiper,translate){//当slide改变后执行的操作
					var  index = mySwiper.realIndex;//拿到当前的index
					switch(index){
						case 0:
							$('#opacity').removeClass('active');
							mySwiper.setWrapperTransition(500);//
							mySwiper.setWrapperTranslate(0);//手动设置 当为0 的时候自动设置 swiper-wrapper的位移为0那么就在最左边了呀 相对右侧的盒子也会多暴露一些，
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
							mySwiper.setWrapperTranslate(afterOffset+30);//控制最后一个的时候 让左侧的盒子多显示出一点，保证在正中间的位置	
						  break;					  					  					  
						default:
					}										
				},			
			});
			mySwiper.setWrapperTransition(500);
			mySwiper.setWrapperTranslate(0);
代码不多，却很乱套。

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function(){
	


	var height = $(window).height();
	var firstscreen = $('.firstscreen');
 	var width = $(window).width();
	
 	if($(window).width() >= 743 ){

		firstscreen.height(height);
 	}

	
 	
 	
 	

 	if( width / height <= 1.4){
 		
 		$('.main-2__title').css({
 			"paddingTop" : "90px"
 		});

 		$('.main-1__logo').css({
 			"paddingTop" : "90px"
 		});
 	}
	

 	$('.main-2__round').click(function (event) {

 		event.preventDefault();

 		$('body,html').animate({scrollTop: height}, 1500);

 	});


 	if(!isMobile.any()){ //====условине для десктопа

	//=============паралакс=============

	 	$(window).scroll(function(){
		 	var st = $(this).scrollTop();
		 	
		 	//=============main-1 main-2=============
		 	$('.main-1__paralax').css({
		 		"transform" : "translate(0%, -" + st /12 + "%"
		 	});

		 	$('.main-1').css({
		 		"transform" : "translate(0%, " + st /12 + "%"
		 	});

		 	var main4Top = $('.main-3').offset().top;
		 	
		 	//console.log(main4Top);
		 	
		 	//=============main-4=============


		 	if( st >= main4Top){


		 	/*	$('.main-3 .container').css({
		 			"transform" : "translate(0%, " + (st - main4Top) /12 + "%"
		 		});*/

		 		$('.main-3__body').css({
		 			"transform" : "translate(0%, " + (st - main4Top) /70 + "%"
		 		});

		 	}else{
		 		$('.main-3 .container').css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}

		 	//=============main-5 main-6=============


		 	var main5Top = $('.main-5').offset().top;
		 	var sketchbook = $('.main-5 .container');
		 	var paper2 = $('.main-6__paper2 img');
		 	var paper1 = $('.main-6__paper1 img');
		 	var main6Items = $('.main-6__items');

		 	if( st >= main5Top){

		 		$('.main-3 .container, .main-3__body, .main-1').css({
		 			"transform" : "translate(0%, 0%)"
		 		});


		 		
		 		sketchbook.css({
		 			"transform" : "translate(0%, " + (st - main5Top) /60 + "%"
		 		});

		 		paper2.css({
		 			"transform" : "translate(0%, " + (st - main5Top) /50 + "%"
		 		});

		 		paper1.css({
		 			"transform" : "translate(0%, " + (st - main5Top) /100 + "%"
		 		});

		 		main6Items.css({
		 			"transform" : "translate(0%, -" + (st - main5Top) /50 + "%"
		 		});

		 	}else{
		 		$('.main-5 .container,  .main-6__paper2 img, .main-6__paper1 img, .main-6__items').css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}


		 //=============main-7=============

		
		 	var main7Top = $('.main-7').offset().top;
		 	var main7Papers = $('.main-7 .container');

		 	
		 	if( st >= main7Top - 350){
		 		
		 		main7Papers.css({
		 			"transform" : "translate(0%, " + (st - main7Top + 350 ) /70 + "%"
		 		});
		 	}else{
		 		main7Papers.css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}

		 if( st >= main7Top ){
		 		$('.main-5 .container,  .main-6__paper2 img, .main-6__paper1 img, .main-6__items').css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}


		 	//=============main-8=============
		 	

			var main8Top = $('.main-8__title').offset().top;
			var main8Pict = $('.main-8__pict img');

			if( st >= main8Top ){
					
					main8Pict.css({
					 	"transform" : "translate(0%, " + (st - main8Top ) /60 + "%"
					});
				}else{
		 		
		 			main8Pict.css({
		 				"transform" : "translate(0%, 0%)"
		 			});
		 		}

		 	//=============main-9=============	
		 	//
		 	var main9Top = $('.main-9').offset().top;
			var main9 = $('.main-9__stickers ');
			var main10 = $('.main-10 .container--par');

			if( st >= main9Top ){
		 		main9.css({
		 			"transform" : "translate(0%, " + (st - main9Top ) /40 + "%"
		 		});

		 		main10.css({
		 			"transform" : "translate(0%, -" + (st - main9Top ) /40 + "%"
		 		});
		 		
		 	}else{
		 		main9.css({
		 			"transform" : "translate(0%, 0%)"
		 		});

		 		main10.css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}
	 	

			//=============main-10=============	
			
			var main10Top = $('.main-10').offset().top;

			if( st >= main10Top ){
		 		$(".main-10__right").css({
		 			"transform" : "translate(0%, -" + (st - main10Top ) /60 + "%"
		 		});
		 		
		 	}else{
		 		$(".main-10__right").css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}

		 	//=============main-10Bot=============	
		 	
		 	var main10BotTop = $('.main-10__bot').offset().top;
		 	var main11 = $('.main-11__body');

		 	if( st >= main10BotTop){
		 		main11.css({
		 			"transform" : "translate(0%, -" + (st - main10BotTop ) /30 + "%"
		 		});
		 	}else{
		 		main11.css({
		 			"transform" : "translate(0%, 0%)"
		 		});
		 	}

		 	//=============main-11=============
		 	
		 	var main11Top = $('.main-11').offset().top;

		 	if( st >= main11Top){
		 		$('.main-12__left img, .main-12__img').css({
		 			"transform" : "translate(0%, -" + (st - main11Top ) /60 + "%"
		 		});

		 		$('.main-12 .bigtitle, .main-12__right').css({
		 			"transform" : "translate(0%, -" + (st - main11Top ) /60 + "%"
		 		});

		 	}else{
		 		$('.main-12__left img, .main-12__img, .main-12 .bigtitle, .main-12__right').css({
		 			"transform" : "translate(0%, 0%)"
		 		});

		 	}
		});
	}//====КОНЕЦ условине для десктопа

	if(isMobile.any()){
		$('.main-2').css("position", "static");
	 }

 	//=============WOW=============


 	var wow = new WOW(

      {

        boxClass:     'wow',      // класс анимируемого элемента

        offset:       100,        // расстояние до элемента, когда анимация начинает работать

        mobile:       false       // разрешение анимации в мобильной версии

      }

    );

    wow.init();
	
});

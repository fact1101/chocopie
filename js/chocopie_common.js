$(document).ready(

  function() { 

    $("html").niceScroll({
		cursorcolor:"#777",
		cursorwidth:5,
		scrollspeed:40,
		cursorborderradius:'0',
		mousescrollstep:40,
		cursoropacitymin:0,
		cursoropacitymax:1,
		background:"#c1c1c1",
		cursorborder:"none",
		autohidemode:false,
		boxzoom:true,
		zindex:99999

	});
  }

);


var rotation = function (){	
   $(".main_choco img").rotate({
	  angle:-3, 
	  animateTo:3, 
	  duration:800,
	  callback: rotation02,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var rotation02 = function (){
	
   $(".main_choco img").rotate({
	  angle:3, 
	  animateTo:-3, 
	  duration:800,
	  callback: rotation,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });  
   
}


var arrow = function (){
	
   $(".wind04 img").rotate({
	  angle:0, 
	  animateTo:180, 
	  duration:2000,
	  callback: arrow02,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var arrow02 = function (){
	
   $(".wind04 img").rotate({
	  angle:180, 
	  animateTo:0, 
	  duration:1200,
	  callback: arrow,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}



var arrow03 = function (){
	
   $(".wind05 img").rotate({
	  angle:180, 
	  animateTo:0, 
	  duration:2000,
	  callback: arrow04,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var arrow04 = function (){
	
   $(".wind05 img").rotate({
	  angle:0, 
	  animateTo:180, 
	  duration:1200,
	  callback: arrow03,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}



var full01 = function (){
	
   $(".wind06 img").rotate({
	  angle:5, 
	  animateTo:85, 
	  duration:2000,
	  callback: full02,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var full02 = function (){
	
   $(".wind06 img").rotate({
	  angle:85, 
	  animateTo:5, 
	  duration:1200,
	  callback: full01,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var choco01 = function (){
	
   $(".choco05_1 img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:2000,
	  callback: choco01,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}
var choco02 = function (){
	
   $(".choco05_2 img").rotate({
	  angle:0, 
	  animateTo:-360, 
	  duration:2000,
	  callback: choco02,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
}

var winds = function (){
   $(".wind01 img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:2500,
	  callback: winds,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
   
   $(".wind02 img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:1500,
	  callback: winds,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
   
   $(".wind03 img").rotate({
	  angle:0, 
	  animateTo:360, 
	  duration:2000,
	  callback: winds,
	  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
		  return c*(t/d)+b;
	  }
   });
   
}


function punch(){
	$('.scene04 .punch02 .punch').animate({'height':'30px'}, function(){
			$('.scene04 .punch02 .punch').animate({'height':'100px'}, 1200,'easeOutElastic', function(){
				punch();
			})
	});
}

function scene05Ani(){
	$('.scene05 .choco05_2').css({'top':'563px', 'margin-right':'-698px'}).animate({'top':'730px'}, 400)
											.animate({'top':'862px', 'margin-right':'-58px'}, 2600);
	$('.scene05 .choco05_1').css({'top':'563px', 'margin-left':'-698px'}).animate({'top':'730px'}, 400)
											.animate({'top':'862px', 'margin-left':'-58px'}, 2600, function(){
												setTimeout(scene05Ani, 3000);
											});
};




	function frameAni(aniName){
		var idx = 0;
		var total = $(aniName).children().length-1;
		var downup=0;

		function frameImage(){
			if(idx < total && downup == 0 ){
				idx++;
				if(idx == total){
					downup = 1;
				}

			}else{
				idx--;
				if(idx == 0){
					downup = 0;
				}
			}
			console.log(aniName + idx);
			$(aniName).children().hide().eq(idx).show();

			setTimeout(frameImage, 150);
		};
		frameImage();
	};





$(function(){	
scene05Ani();
	punch();
	rotation();
	winds();
	arrow();
	full01();
	arrow03();
	frameAni('#tongs')
	choco01();
	choco02();
	
	$('.scene03 .machine02_2_on').css({'opacity':'0'});
	
	$('.navi li > a').click(function(){
	    var posY = $($(this).attr('href')).position().top;
		$('body,html').stop().animate({'scrollTop':posY},1200, 'easeInOutExpo');
		if($(this).parent().hasClass('navi_02')){
			$('body,html').stop().animate({'scrollTop':posY+700},1200, 'easeInOutExpo');
		}else if($(this).parent().hasClass('navi_05')){
			$('body,html').stop().animate({'scrollTop':posY+300},1200, 'easeInOutExpo');
		}
		return false;
	})



	var s1 = $('#scene01').height();
	var s2 = $('#scene02').height();
	var s3 = $('#scene03').height();
	var s4 = $('#scene04').height();
	var s5 = $('#scene05').height();	
	

	$(window).scroll(function(){ 
		var scrollTop = $(document).scrollTop() ; 
		$('.posNum').text(scrollTop);
		
		
	  $('.scene03 .machine02_2_on').css({'opacity':((scrollTop-3000)*0.003)})	

		if(scrollTop <= s1){ // scrolltop이 s1의 높이값보다 작거나 같을때
			$('.navi > li').removeClass('on').eq(0).addClass('on'); // .navi의 자식 li 첫번째 클래스 on 추가, 리스트 순번은 0부터 시작합니다.
		}
		
		if(scrollTop >= s1){
			$('.navi > li').removeClass('on').eq(1).addClass('on');
		}
		
		if(scrollTop >= s1+s2){
			$('.navi > li').removeClass('on').eq(2).addClass('on');
		}
		
		if(scrollTop >= s1+s2+s3){
			$('.navi > li').removeClass('on').eq(3).addClass('on');
		}
		
		if(scrollTop >= s1+s2+s3+s4-200){
			$('.navi > li').removeClass('on').eq(4).addClass('on');
		}
		
		
		$('#scene02 .men').stop().animate({'margin-left':((scrollTop-s1+500)*1)},1000)	
		
		if(scrollTop >= 1500 && scrollTop <= 1845){
			$('#scene02 .choco02_1').stop().animate({'margin-top':((scrollTop-1540)*1)},400)	
			$('#scene02 .choco02_2').stop().animate({'margin-left':((scrollTop-1540)*1), 'margin-top':((scrollTop-1540)*0.03)},400)	
		}
		if(scrollTop >= 1790 && scrollTop <= 2135){
			$('#scene02 .choco02_3').stop().animate({'margin-top':((scrollTop-1900)*1)},400)			
		}
		
			
		
		
	});




});
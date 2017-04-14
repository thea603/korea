$(function() {
			var fuBu = $('.fuBu');
			var xY = $('.xY');
			var xT = $('.xT');
			var dM = $('.dM');
			var text = $('.koreaMask>span.num')

    // $('.fat').each(function() {
		// var nub = $(this).find('span.num').text();
		// var num = $(this).find('span.num').text() / 16 * 360;
		// var bgColor = $(this).find('.koreaMask');
		// var koreaCircle =  $(this).find('.koreaCircle');
    //
		// if(nub<0){
		// 	if(nub<0){
		// 		$(this).find('.circleLeft').css('transform', "rotate(" + num + "deg)");
		// 	}if(nub<-8){
		// 		$(this).find('.circleLeft').css('transform', "rotate(-180deg)");
		// 		$(this).find('.circleRight').css('transform', "rotate(" + (num+180) + "deg)");
		// 	}
		// }else{
		// 	if(nub>0){
		// 		$(this).find('.circleRight').css('transform', "rotate(" + num + "deg)");
		// 	}if(nub>8){
		// 		$(this).find('.circleRight').css('transform', "rotate(180deg)");
		// 		$(this).find('.circleLeft').css('transform', "rotate(" + (num-180) + "deg)");
		// 	}
		// }
    //
    //
		// if (nub < 0 && nub >= -5) {
		// 	bgColor.css('background','#4ec9f5');
		// 	koreaCircle.css('background','#4ec9f5');
    //
		// }else if(nub < -5 && nub >= -10){
		// 	bgColor.css('background',"#00aeef");
		// 	koreaCircle.css('background',"#00aeef");
		// }else if(nub < -10 && nub >= -15){
		// 	bgColor.css('background',"#0092d7");
		// 	koreaCircle.css('background',"#0092d7");
		// } else if (nub >= 0 && nub <= 5) {
		// 	bgColor.css('background',"#f8995d");
		// 	koreaCircle.css('background',"#f8995d");
    //
		// }else if(nub > 5 && nub <= 10){
		// 	bgColor.css('background',"#f36f21");
		// 	koreaCircle.css('background',"#f36f21");
    //
		// }else if(nub > 10 && nub <= 15){
		// 	bgColor.css('background',"#ef4136");
		// 	koreaCircle.css('background',"#ef4136");
		// }
    //
    // });















			function circle(name,num){
				var nub = num;
				var rote = num / 16 * 360;
				console.log(num);
				text.text(num);
				if(nub<0){
					if(nub<0){
						name.find('.circleLeft').css('transform', "rotate(" + rote + "deg)");
					}if(nub<-8){
						name.find('.circleLeft').css('transform', "rotate(-180deg)");
						name.find('.circleRight').css('transform', "rotate(" + (rote+180) + "deg)");
					}``
				}else{
					if(nub>0){
						name.find('.circleRight').css('transform', "rotate(" + rote + "deg)");
					}if(nub>8){
						name.find('.circleRight').css('transform', "rotate(180deg)");
						name.find('.circleLeft').css('transform', "rotate(" + (rote-180) + "deg)");
					}
				}
				bgColor(nub)
			}


			function bgColor(percent){
				       var bgColor = $('.koreaMask');
						if (percent < 0 && percent >= -5) {
							bgColor.css('background','#4ec9f5')
						}else if(percent < -5 && percent >= -10){
							bgColor.css('background',"#00aeef")

						}else if(percent < -10 && percent >= -15){
							bgColor.css('background',"#0092d7")
						} else if (percent >= 0 && percent <= 5) {
							bgColor.css('background',"#f8995d")
						}else if(percent > 5 && percent <= 10){
							bgColor.css('background',"#f36f21")
						}else if(percent > 10 && percent <= 15){
							bgColor.css('background',"#ef4136")
						}

			}
             circle(fuBu,-5.8);
			new circle(xY,2.3);
			 circle(xT,-7.2);
			 circle(dM,9.3);

});
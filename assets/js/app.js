$(document).foundation(); 
 

 
/*! Lazy Load https://www.appelsiini.net/projects/lazyload */ 
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
 

/* CUSTOM */
$(document).ready(function() {	
	console.log("loaded");
	var preLoader = "#preloader", pageStatus = "#status"; 

	TweenLite.to(preLoader, 0.3, {autoAlpha: 0 ,delay:0.5});
	TweenLite.to(pageStatus, 0.3, {autoAlpha: 0 ,delay:0.5});

	//button click load fader
	function show_confirm(obj){
		var newObj = obj;
		TweenLite.to(preLoader, 0.2, {autoAlpha: 1, onComplete:tweenComplete});
		
		function tweenComplete() {
		  console.log(newObj, obj , "11the tween is complete");
		  
		  window.location = newObj.attr('href');
		}
	}
 
	$('.button, .page-menu').click(function(event) {
		event.preventDefault();
		show_confirm($(this));
	});
	//end

	if ( window.location.pathname == '/' ){

		var isBreakPoint = function (bp) {
			var bps = [320, 480, 768, 1024],
				w = $(window).width(),
				min, max
			for (var i = 0, l = bps.length; i < l; i++) {
			  if (bps[i] === bp) {
				min = bps[i-1] || 0
				max = bps[i]
				break
			  }
			}
			return w > min && w <= max
		}
		// Usage
		// document.getElementById("insta").innerHTML = "<iframe src='//lightwidget.com/widgets/acfd88078923583e9384c5929877aa6a.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='padding: 2px;width:100%;border:0;overflow:hidden;'></iframe>";

		// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isBreakPoint(1024)) {
		// 	console.log("load insta for mobile");
		//     document.getElementById("insta").innerHTML = "<iframe src='//lightwidget.com/widgets/acfd88078923583e9384c5929877aa6a.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='padding: 2px;width:100%;border:0;overflow:hidden;'></iframe>";
	    // } else {
		// 	console.log("load insta");
		// 	document.getElementById("insta").innerHTML = "<iframe src='//lightwidget.com/widgets/3f4045c5ace853dab5374d616ad138fa.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='padding: 2px;width:100%;border:0;overflow:hidden;'></iframe>";
		// }
		 
		// var logo = document.getElementById('logo');
		// if(window.location.hostname == "aguycalledgary.co") {
		// 	console.log('show agcg', window.location.host);
		// 	logo.src = "/assets/img/logo/agcg-logo.svg";
		// } else {
		// 	console.log('show ld', window.location.hostname);
		// 	logo.src = "/assets/img/logo/ld-logo.svg";
		// }
		// console.log(window.location.pathname);

		//var desc = document.getElementById("work-1");
		//const animdesc = document.querySelectorAll(".work-button");
		//TweenMax.set(animdesc, {opacity:0});
		
		var viewportHeight = window.innerHeight;
		const images = document.querySelectorAll(".work");
		console.log(images, viewportHeight);

		if (images.height >= viewportHeight) {
			console.log('less than');
		}
		
		$('#fullpage').fullpage({
			verticalCentered: true,
			css3: true,
			scrollingSpeed: 400,
			autoScrolling: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			keyboardScrolling: true,


			anchors: ['home', 'Sonos', 'ITV-CR-Website', 'Eat', 'Text-Santa', 'Tackle-Hunger-Together', 'Le-Manoir','ITV-CR-Report','Social'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Home', 'Sonos', 'ITV CR Website', 'Eat', 'Text Santa', 'Tackle Hunger Together', 'Le Manoir','ITV CR Report','Social'],
				afterLoad: function(anchorLink, index){
				//console.log(index);
				console.log('this is', index);
				console.log('anchor is', anchorLink);
				
					if(index > 1 && index < 8){
						//TweenMax.to(animdesc, 0.7, {opacity:0});
						//TweenMax.to(animdesc[index - 2], 0.2, {opacity:1});
					}
					else{
						//TweenMax.to(animdesc, 0.7, {opacity:0});
					}
			},
			onLeave: function(index, nextIndex, direction){
				console.log(nextIndex);
			},
			responsiveHeight: 638,
			afterResponsive: function(isResponsive){
				console.log('is respo')
			}
		});
	} else {
		console.log(window.location.pathname);
	}


	//GA 
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-87402911-1', 'auto');
	ga('send', 'pageview'); 
	
});
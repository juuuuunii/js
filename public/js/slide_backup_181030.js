var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		//console.log(_wrap);
		//console.log(_option);
		var ori = this;
		//console.log(this);
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		this.now = 0;
		this.wid = $(this.slide[0]).width();
		//_option 존재여부에 따른 this.option 생성
		if(_option) {
			this.option = _option;
		}
		else {
			this.option = {
				type: "normal",
				delay: 2000,
				speed: 300
			}
		}
		switch(this.option.type) {
			case "pingpong" :
				this.initPingpong();
				break;
			case "infinite" :
				this.initInfinite();
				break;
			case "fade" :
				this.initFade();
				break;
			case "vertical" :
				this.initvertical();
				break;
			default :
				this.initNormal();
				break;
		}
		$(window).resize(function(){
			obj.wid = $(ori.slide[0]).width();
			obj.hei = $(ori.slide[0]).height();
			obj.slides.height(ori.hei);
		}).trigger("resize");
	};
	//type:pingpong
	Slide.prototype.initPingpong = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slidePingpong();
	};
	Slide.prototype.slidePingpong = function(){
		var ori = this;
		$(this.slides).delay(this.option.delay).animate({
			"left":-(this.wid*this.now)+"px"}, this.option.speed, function(){
				if(ori.now == ori.cnt - 1) ori.direction = -1;
				else if(ori.now == 0) ori.direction = 1;
				ori.now += ori.direction;
				ori.slidePingpong();
		});
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {
		this.slides.find(".slide").eq(0).clone().appendTo(this.slides);
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slideInfinite();
	};
	Slide.prototype.slideInfinite = function(){
		var ori = this;
		this.slides.delay(this.option.delay).animate({"left":-(this.now*this.wid)+"px"}, this.option.speed, function(){
			if(ori.now == ori.cnt - 1) {
				ori.slides.css({"left":0});
				ori.now = 0;
			}
			ori.now++;
			ori.slideInfinite();
		});
	}
	//type:fade
	Slide.prototype.initFade = function() {
		this.depth = 2;
		this.slideFade();
	};
	Slide.prototype.slideFade = function() {
		var ori = this;
		this.slide.eq(this.now).css({"z-index":this.depth++, "display":"none"}).delay(this.option.delay).fadeIn(this.option.speed, function(){
			if(ori.now == ori.cnt - 1) ori.now = 0;
			else ori.now++;
			ori.slideFade();
			//fadeIn은 기본으로 opacity를 가지고 있기 떄문에 display:none을 주어야한다.
		});
	};
	//type:vertical
	Slide.prototype.initVertical = function() {
		this.slides.find(".slide").eq(0).clone().appendTo(this.slides);
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"top":(this.hei*i)+"px"});
		}
		this.slideVertical();
	};
	Slide.prototype.slideVertical = function(){
		var obj = this;
		this.slides.delay(this.option.delay).animate({"top":-(this.now*this.hei)+"px"}, this.option.speed, function(){
			if(obj.now == obj.cnt - 1) {
				obj.slides.css({"top":0});
				obj.now = 0;
			}
			obj.now++;
			obj.slideVertical();
		});
	}
	//type:normal
	Slide.prototype.initNormal = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slideNormal();
	};
	Slide.prototype.slideNormal = function(){
		var ori = this;
		$(this.slides).delay(this.option.delay).animate({"left":-(this.now*this.wid)+"px"}, this.option.speed, function(){
			if(ori.now == ori.cnt - 1) ori.now = 0;
			else ori.now++;
			ori.slideNormal();
		});
	};
	return Slide;
}());


/***** 참고사항 *****/
/*
switch(값) {
	case "infinite" :
		//실행문
		break;
	case "pingpong" :
		//실행문
		break;
	default :
		//실행문
		break;
}
*/
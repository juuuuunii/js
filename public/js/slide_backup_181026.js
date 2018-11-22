var Slide = (function() {
	function Slide(_option) {
		if(!_option){
			this.option = {
				speed: 1000,
				delay: 3000
			}
		} else {
			this.option = _option;
		}
		this.option = _option;
		this.slides = $(".slides");
		this.slide = $(".slide", this.slides);
		this.init();
	};
	Slide.prototype.init = function(){
		this.cnt = this.slide.length;
		this.stn = 0;
		var ori = this;
		$(window).resize(ori, function() {
			ori.wid = ori.slide.width();
			ori.hei = ori.slide.height();
			ori.posInit();
		}).trigger("resize");
	}
	Slide.prototype.posInit = function(){
		//console.log(this.wid, this.hei);
		this.now = this.slide.eq(this.stn);
		switch(this.stn) {
			case this.cnt - 1:
				this.prev = this.slide.eq(this.stn-1);
				this.next = this.slide.eq(0);
				break;
			case 0 :
				this.prev = this.slide.eq(this.cnt);
				this.next = this.slide.eq(this.stn+1);
				break;
			case 0 :
				this.prev = this.slide.eq(this.stn-1);
				this.next = this.slide.eq(this.stn+1);
		}
		this.slide.css({"z-index":1});
		this.slides.css({"left":-this.wid+ "px"});
		this.now.css({"z-index":2, "left":this.wid+ "px"});
		this.prev.css({"z-index":2, "left":"0px"});
		this.next.css({"z-index":2, "left":this.wid*2+ "px"});
	}
	return Slide;
}());


/*
var: 객체
	 객체의 이름은 대문자로 시작한다.
	


////////기본규칙////////
var 객체이름 = (function(){
	function 객체와같은이름으로한다() {

	};
	return 객체이름;
}());

var 변수이름 = new 객체이름();
//////// 응 용 ////////
var Slide = (function(){
	function Slide(_wrap) {
		//console.log(this);         여기서의 this는 Slide{} 함수, 즉 객체 자체이다.
		this.slides = _wrap;       여기서 _wrap 이름은 임의로 정한 것으로, 바꾸어도 무방하다.
		this.slide = $("slide", this.slides);   this의 slide는 _wrap 안에 있는 $("slide)"라는 것이다.   
		this.cnt = this.slide.length;
		this.wid = this.slide[0].width();
		this.n = 0;
		for(var i=0; i<this.cnt; i++) {
			this.slide[i].css({"left":this.wid*i +"px"})
		}
		this.ani();
	};
	Slide.prototype.ani = function(){
		this.slides.stop().delay(3000).animate({"left":-wid*this.n +"px"}, 500, function(){
			//this.slides 즉 _wrap에 걸려있는 애니메이션을 멈추고 3초(3000)뒤 animate를 실행한다.
			this.n++;
			this.ani;
		});   
	};
	return Slide;
}());

var slide = new Slide();        이와 같이 new 하는 순간에 Slide라는 객체가 실행된다.

switch(값) {
	case "infinite":
		//실행문
		break;
	case "pingpong":
		//실행문
		break;
	default:
		//실행문
		break;
}

*/

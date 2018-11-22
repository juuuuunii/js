//전역변수
var scTop = $(window).scrollTop();
var gap = [];
var now = 0;

$(window).resize(function() {
	$(".page").each(function(i) {
		//offset().위치 :'위치'에서부터 얼마나 떨어져있는지에 대한 이벤트
		gap[i] = $(this).offset().top; //gap[i]는 ".page"가 위어서부터 얼마나 떨어졌는지에 대한 배열이다.
	});
}).trigger("resize");
$(window).on("mousewheel DOMMouseScroll", wheelFn);
function wheelFn(e) {
	e.preventDefault(); //scroll의 기능을 막음
	e.stopPropagation();
	//console.log(e); 겉으로 봤을 때 wheel이 막혀 있어도 이벤트는 발생된다.
	//console.log(e.originalEvent.wheelDelta);
	var dir = e.originalEvent.wheelDelta;
	$(window).off("mousewheel DOMMouseScroll");	//첫 휠이 먹는 순간 이벤트를 죽인다.
	scTop = $(window).scrollTop();	
	//console.log(gap);
	for(var i=0; i<gap.length; i++) {
		if(scTop <= gap[i]) {
			now = i;
			break;
			//반복문 안에서 break를 만나면 그 문장에서 바로 빠져나온다. 즉, 만약 현재 반복문에서 gap[0]이 실행된 뒤 break를 만나면 그 실행된 문장에서 빠져나와 다른 함수가 실행될 수 있는 상태를 만들어준다.
		}
	}
	if(dir > 0) { if(now > 0) now--; }
	else { if(now < gap.length-1) now++; }
	//console.log(now);
	$("html, body").stop().delay(100).animate({"scrollTop":gap[now]+"px"}, 200, function() {
		$(window).on("mousewheel DOMMouseScroll", wheelFn)
		//처음에 에니메이션이 실행되는 순간 그 해당 애니메이션을 죽이고, 그 다음에 다시 이벤트를 붙여준다. 한 번에 이벤트가 여러번 실행되는 것을 막아준다.
	});	
}
$(".nav").on("click", function() {
	var oldNow = now;
	now = $(this).data("now");
	var speedGap = Math.abs(now - oldNow);
	$("html, body").stop().delay(100).animate({"scrollTop":gap[now]+"px"}, 200*speedGap);
});
//scroll :마우스 휠과 포인터 두가지 모두 이벤트 발생
//mousewheel DOMMouseScroll: 마우스휠만 이벤트 발생


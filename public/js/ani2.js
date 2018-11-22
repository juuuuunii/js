//전역변수
var cnt = $(".ban").length;
var stn = 0;
var prev = cnt - 1;
var next = stn + 1;
var wid = $(".ban").width();
var hei = $(".ban").height();
var delay = 3000;
var speed = 500;
sildeInit(); //interval이 되기 전 위치값을 가지고 있어야 하기 때문에 interval 이전에 선언해야한다.
var interval = setInterval(slideAni, delay);
//페이저 Init
$(".ban").each(function(i){
	var name = $(this).data("name");
	var link = $(this).data("link");
	var pager = '<a href ="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	$(".pager").append(pager);
});

//silde Init
//보여지는 배너 양 옆으로 나머지 배너들를 붙이는 함수
function sildeInit() {
	//console.log(stn); 슬라이드에서 보여지는 배너의 숫자(순서)확인
	//lengh:6  cnt:6
	if(stn == 0) {
		prev = cnt - 1; //5
		next = stn + 1; //1
	} else if(stn == cnt - 1/* 5 */) {
		prev = stn - 1; //4
		next = 0;
	} else {
		prev = stn - 1; 
		next = stn + 1;
	}


	$(".ban_wrap").css({"left":-wid +"px", "height":hei +"px"});
	$(".ban").css({"left":"0px", "z-index":1});
	$(".ban").eq(stn).css({"left":wid+"px", "z-index":2});
	$(".ban").eq(prev).css({"left": "0px", "z-index":2});
	$(".ban").eq(next).css({"left": wid*2 +"px", "z-index":2});
/*
	$(".ban_wrap").css({"left":"0px"});
	$(".ban").css({"left":"0px", "z-index":1, "width":wid+"px"});
	$(".ban").eq(stn).css({"left":"0px", "z-index":2});
	$(".ban").eq(prev).css({"left": - wid + "px", "z-index":2});
	$(".ban").eq(next).css({"left": wid+ "px", "z-index":2});
*/
}
$(window).resize(function() {
	wid = $(".ban").width();
	hei = $(".ban").height();
	slideAni();
}).trigger("resize");

//slide 구현
function slideAni(){
	//console.log("hi"); 3초 뒤 실행되는 것을 확인한 것
	$(".ban_wrap").stop().animate({"left":-wid*2 +"px"}, speed, 
		function() {//애니메이션이 끝난 후 실행되는 콜백함수
			if(stn == cnt - 1) stn = 0;
			else stn++;
			sildeInit();
		}
	);
}
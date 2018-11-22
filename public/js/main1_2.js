/*

var hei = [];
for(var i=0; i<$(".pages").length; i++){
	console.log($(".pages").eq(i).attr("id"));
};
//index i번째의 속성 중 id를 찍어라
//eq :순서
//attribute :속성

hei[i] = $(this).height();          
*/
var hei = [];
var offTop = [];
var scTop = 0;
var now = 0;
$(window).scroll(function(){
	scTop = $(this).scrollTop();            //현재 문서에서 스크롤 된 값을 찾는다
	$(".pages").each(function(i){
		offTop[i] = $(this).offset().top;   //부모로부터 떨어진 거리(top)
		if(scTop >= offTop[i]){
			now = i;
		}
		//if(scTop >= offTop[i]) now = i;    한 줄짜리 if문은 {}쓰지 않고 표현해도 위의 함수와 같은 결과로 나온다.
		
	});
	console.log(now);
});

/*
var hei = [];
for(var i=0; i<$(".pages").length; i++){
	hei[i] = $(".pages").eq(i).height();     //현재 문서에서 각 페이지의 높이를 변수에 넣는다.
};
$(window).scroll(function(){
	//console.log("hi~");
	console.log( $(this).scrollTop() );
});
//window는 "따옴표"를 쓰지 않는다.
////위와 같은 함수
var hei = [];
$(".pages").each(function(i){
	hei[i] = $(this).height();           
});
console.log(hei);
//.pages i번째의 속성 중 height를 찍어라
//.height() :선택된 개체『hei[i] = $(this)』의 높이를 숫자로 보여줌

*/


7. 다중 조건문
if(조건){
	조건이 참이면 실행
}
else if(조건1){
	조건1이 참이면 실행
}
else if(조건2){
	조건2이 참이면 실행
}
else if(조건3){
	조건3이 참이면 실행
}
else (조건){
	그 외의 조건이 참이면 실행
}
6. 반복문
for(초기값; 비교문; 증가값){
	반복문
}
ex)   for(var i=1, sum=0; i<=100; i++){
	         sum += i
      }
	  console.log(sum);
	  //i를 100번 더하라
	  //결과값 :5050
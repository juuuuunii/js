/*
//function oddChk(n){} 아래와 같은 함수
var oddChk = function(n){
	var n = 10;
	console.log(n%2);//%는 뒤의 수로 나눈 나머지값을 보여줌
}
oddChk(10);
*/

/**
var oddChk = function(){
	var n = 10;
	console.log(n%2);
}
**/
////////////////////////////////////////////////////////
var oddChk = function(){
	var n = prompt("원하는 숫자를 입력하세요.");
	//console.log(n%2);
	if(n%2 == 0){
      console.log("짝수입니다.");
	}
	else{
      console.log("홀수입니다.");
	}
}
$("#bt1").click(oddChk);
//////////////////////////////////////////////////////////
var sizeChk = function(){
   var width = prompt("예상하는 사이즈를 넣어주세요.");
   var windowWidth = $(window).width(); 
   if(width > windowWidth){
	   console.log("입력하신 값" + width + "는 윈도우 사이즈" + windowWidth + "보다 큽니다.");
   }
     
   else{
	   console.log("입력하신 값" + width + "는 윈도우 사이즈" + windowWidth + "보다 작습니다.");
}
}
$("#bt1").click(sizeChk);

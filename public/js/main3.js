var n = 30;
function test(){
	console.log(n);
	return "n은" +n+ "입니다.";
}

console.log(test);//test함수 자체를 보여줌
console.log(test());//test의 함수를 실행

/**
 위와 같은 값
var n = 30;
var test = function(){
	return "n은" +n+ "입니다.";
}
console.log(test);
console.log(test());
**/

var fn = function(){
	console.log("함수");
}
fn();
var x = fn;
x();

var i = 0;
var fn = function(){
	console.log("안녕"+(i++));
	/* i++은 i = i + 1과 같은 함수 */
}
/*
위와 같은 결과값
setInterval(fn, 1000);
setInterval(function(){
	console.log("안녕"+(i++));
},1000);
*/

/*
var fn = function(){
	console.log("안녕");
}
*/
/*
var i = 0;
var fn = function(){
	console.log("안녕"+i);
	i = i + 1
}
*/
//아래의 세 개는 같은 함수. 즉 같은 결과값을 나타낸다
window.setInterval(fn, 1000);
$("body").click(function(){

});
$("body").click(fn);


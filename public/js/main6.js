/*
if(조건){
    //조건이 참일 때 실행되는 곳
}
else{
    //조건이 거짓일 때 실행되는 곳
}


//반복실행의 함수 :for
for(초기값; 조건; 증가값){
    실행문(조건이 참일 때 반복실행)
}
*/
//////////////////////////////////////////////////////
/*
for(var i=1, sum=0; i<=10000; i++){
    sum = sum + i;
    console.log(sum);
}
※※※※※ i++               = i+1
      i+=5              = i+5
      str += "A"        = str+"A" = str


//////위와 같은 값
var sum = 0;
for(var i=1, sum=0; i<=10000; i++){
    sum = sum + i;
}
※※※※※ sum = sum + i;        = sum += i
*/
//////////////////////////////////////////////////////
//구구단
$("table").addClass("w3-table w3-centered w3-border w3-bordered"); //addClass에 클래스 추가
$("table").css({"max-width" : "1200px", "margin" : "100px auto"});
$("thead").append('<th class="w3-center">구분</th>');
/*
$("thead").hover(
    function(){
        $(this).stop().fadeOut(0);
        $("tbody").stop().fadeIn(100);
    },
    function(){
        $(this).stop().fadeOut(0);
    }

);
*/
for(i=2; i<=9; i++){
    $("thead").append('<th class="w3-center">' +i+ '단</th>');
};
//가로로 9번 반복됨 
/*
아래와 같은 함수
for(i=1; 1<=9; i++){
    str = '<tr>';
    str = str + '</tr>';
}
*/
for(i=1; i<=9; i++){
    str = '<tr>';
    str += '<td>' +i+ '</td>'
    for(j=2; j<=9; j++){
        str += '<td>'+j+' x '+i+' = '+j*i+'</td>'
    }
    str += '</tr>';
    $("tbody").append(str);
};

/*
for(j=2; j<=9; j++){
        str += '<td>' +j*i+ '</td>'
    }
/////위와 같음
    str += '<td>' +2*i+ '</td>'
    str += '<td>' +3*i+ '</td>'
    str += '<td>' +4*i+ '</td>'
    str += '<td>' +5*i+ '</td>'
    str += '<td>' +6*i+ '</td>'
    str += '<td>' +7*i+ '</td>'
    str += '<td>' +8*i+ '</td>'
    str += '<td>' +9*i+ '</td>'
*/
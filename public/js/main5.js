/*
if(조건){
    조건이 참일 때 실행
}
else{
    조건이 거짓일 때 실행... (else{}는 생략 가능)
}
*/






/*
아래와 같은 함수
$("bt_join").click(function(){

});
*/
var joinFn = function () {
    var f = $("#join_form");
    var username = $("input[name='username']", f /*form의 약자*/ ).val();
    var userid = $("input[name='userid']", f).val();
    var userpw = $("input[name='userpw']", f).val();
    var usermail = $("input[name='usermail']", f).val();
    console.log(username, userid, userpw, usermail);
    if (username == "") {
        alert("이름을 입력하지 않았습니다.");
        $("input[name='username']", f).focus();
        return false;
    }
    if (userid == "") {
        alert("아이디를 입력하지 않았습니다.");
        $("input[name='userid']", f).focus();
        return false;
    }
    if (userpw == "") {
        alert("비밀번호를 입력하지 않았습니다.");
        $("input[name='userpw']", f).focus();
        return false;
    }
    if (usermail == "") {
        alert("메일을 입력하지 않았습니다.");
        $("input[name='usermail']", f).focus();
        return false;
    }
    //모든 입력창에 입력이 완료되어 있으면 return을 만나지 않고 여기로 바로 옴
    alert("회원가입이 완료되었습니다.");
};

$("#bt_join").click(joinFn);
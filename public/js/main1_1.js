/**********show, hide, toggle**********/
$("#bt1").click(function(){
	//$("#box").stop().hide();
	//$("#box").stop().hide(1000);
	$("#box").stop().hide("slow");
});
$("#bt2").click(function(){
	//$("#box").stop().show();
	//$("#box").stop().show(1000);
	$("#box").stop().show("fast");
});
$("#bt3").click(function(){
	//$("#box").stop().toggle();
	$("#box").stop().toggle(1000);
});

/**********fadeOut, fadeIn, fadeToggle**********/
$("#bt4").click(function(){
	$("#box").stop().fadeOut("slow");
});
$("#bt5").click(function(){
	$("#box").stop().fadeIn("fast");
});
$("#bt6").click(function(){
	$("#box").stop().fadeToggle(1000);
});

/**********sildeUp, sildeDown, slideToggle**********/
$("#bt7").click(function(){
	$("#box").stop().slideUp("slow");
});
$("#bt8").click(function(){
	$("#box").stop().slideDown("fast");
});
$("#bt9").click(function(){
	$("#box").stop().slideToggle(1000);
});




/*
jQuery Effects Animate
-
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent
*/
$("#bt10").click(function(){
	$("#box").hide();
	$("#txt").stop().animate({"letterSpacing":"5px"},1000);
});
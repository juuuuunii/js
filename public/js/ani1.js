
/*
(function pagerInit(){
	var cnt = $(".ban").length;
	var pager = [];
	$(".ban").each(function(i){
		var name = $(this).data("name");
		var link = $(this).data("link");
		pager[i] = '<a href ="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	});
	pager.forEach(function(item){
		//forEach: 배열이나 객체에 적용
		$(".pager").append(item);
	});
})();
*/

(function banFadeInOut(){
	var cnt = $('.ban').length;
	var dep = 1;
	var stn = 0;
	var interval = setInterval(banAni, 4000);
	$(".ban").each(function(){
		var html = '<a href ="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>';
		$(".pager").append(html);
		/*
		또는
			$(".pager").append('<a href ="'+$(this).data('link')+'" class="w3-bar-item w3-button" onclick="pageSel(this)">'+$(this).data('name')+'</a>');
		*/
	});	
	$(".pager > a").click(function(){
		clearInterval(interval);
		stn = $(this).index();
		banAni();
		interval = setInterval(banAni, 4000);
	});
	function banAni(){
		$(".ban").eq(stn).css({"z-index":dep++, "opacity":0});
		$(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
		$(".pager > a").removeClass("w3-red");
		$(".pager > a").eq(stn).addClass("w3-red");
		if(stn == cnt-1) stn = 0;//
		else stn++;
	} 
	/*
	또는
	var interval = setInterval(function(){
		$(".ban").css("z-index", 1);
		$(".ban").eq(stn).css("z-index", 2);
		if(stn == cnt-1) stn = 0;//
		else stn++;
	}, 3000);	

	또는
	var interval = setInterval(function(){
		$(".ban").eq(stn).css({"z-index":2, "opacity":0});
		$(".ban").eq(stn).stop().animate({"opacity":1}, 1000)
		if(stn == cnt-1) stn = 0;//
		else stn++;
	}, 4000);	
	*/
	$(".ban_wrap").hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(banAni, 4000);
	});
})();

//이미지 로드관련 js
var $grid = $('.grid').imagesLoaded(function () {
	// init Masonry after all images have loaded
	//이미지 그리드(이벤트?) 관련 js
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});
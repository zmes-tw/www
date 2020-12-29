(function(){
	function resize_canvas(){
		now_sc = $(window).width()/ $(window).height();
		set_sc = 16 / 9;
		if(now_sc <= set_sc){
			scale=($(window).width()/1280);
		}else{
			scale=($(window).height()/720);
		}
		$("#wrapper").css("width",1280*scale);
		$("#wrapper").css("height",720*scale);
	}
	$(window).resize(function() {
		resize_canvas();
	});
	resize_canvas();
})();
(function(){
	window.onload=function (){
			var canvas, stage, exportRoot ;
		
			canvas = document.getElementById("canvas");
			images = images||{};
		
			var manifest = [
				{src:"images/bg.jpg", id:"bg"},
				{src:"images/logo.png", id:"logo"},
				{src:"images/file.png", id:"file"},
				{src:"images/img1.png", id:"img1"},
				{src:"images/img2.png", id:"img2"},
				{src:"images/img3.png", id:"img3"},
				{src:"images/img4.png", id:"img4"},
				{src:"images/img5.png", id:"img5"},
				{src:"images/img6.png", id:"img6"},
				{src:"images/img7.png", id:"img7"},
				{src:"images/img8.png", id:"img8"},
				{src:"images/img9.png", id:"img9"},
				{src:"images/img10.png", id:"img10"},
				{src:"images/img11.png", id:"img11"},
				{src:"images/img12.png", id:"img12"},
				{src:"sounds/classover.mp3", id:"classover"},
				{src:"sounds/dinedine.mp3", id:"dinedine"},
				{src:"sounds/fail.mp3", id:"fail"},
				{src:"sounds/fail2.mp3", id:"fail2"},
				{src:"sounds/firework.mp3", id:"firework"},
				{src:"sounds/right.mp3", id:"right"},
				{src:"sounds/test.mp3", id:"test"}
			];
		
			var loader = new createjs.LoadQueue(false);
			loader.installPlugin(createjs.Sound);
			loader.addEventListener("fileload", handleFileLoad);
			loader.addEventListener("complete", handleComplete);
			loader.loadManifest(manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}
		
		function handleComplete() {
			exportRoot = new lib.game5();
		
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			stage.enableMouseOver();
		
			createjs.Ticker.setFPS(12);
			createjs.Ticker.addEventListener("tick", stage);
		}
		
	}
})();
var mp3Ary,mp;
mp3Ary = [];
function playSound(id, bool, loop) {
	//console.log("ip="+id);
	//console.log("bool="+bool);
	//console.log("loop="+loop);
	if(bool){
		for(i=0;i<mp3Ary.length;i++){
			
			if(!mp3Ary[i]){
				continue;
			}
			//console.log("mp3Ary="+mp3Ary[0]);
			//console.log(mp3Ary[i].id);
			mp3Ary[i].stop();	
		}
		mp3Ary.length = 0;
		mp3Ary = [];
	}
	
	var mp3 = createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
	mp3Ary.push(mp3);
	//console.log("===========================");
	
}
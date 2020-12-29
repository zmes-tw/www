var mp3Ary,mp;

mus_bo = true;
mp3Ary = [];
function playSound(id, bool, loop) {
	if(! mus_bo && id != "stop"){
		console.log("stop")
		return;	
	}
	if(bool){
		for(i=0;i<mp3Ary.length;i++){
			if(!mp3Ary[i]){
				continue;
			}
			mp3Ary[i].stop();	
		}
		mp3Ary.length = 0;
		mp3Ary = [];
	}
	if(id == "stop"){
		return;	
	}
	var mp3 = createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
	mp3Ary.push(mp3);
	//console.log("===========================");
}

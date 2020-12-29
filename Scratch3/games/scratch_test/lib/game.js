(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		
		console.log("校園文化製作 http://www.eduweb.idv.tw/");
		this.edulogo.onClick=function (){
			window.open(' http://www.eduweb.idv.tw/ ', '校園文化');
		}
		
		this.mus_mc.cursor ="pointer";
		this.mus_mc.onClick = function() {
			mus_bo = ! Boolean(this.currentFrame);
			if(mus_bo){
				this.gotoAndStop(1);
				musicbg.volume = 1;
			}else{
				this.gotoAndStop(0);
				playSound("stop",true);
				musicbg.volume = 0;
			}
		};
	}
	this.frame_9 = function() {
		this.stop();
		this.startBtn.onClick=function (){
			root.gotoAndStop(10);
		}
		this.startBtn.onMouseOver=function (){
			sound_Channel('mouseoverb');
		}
	}
	this.frame_10 = function() {
		this.beginBtn.onClick=function (){
			root.gotoAndStop(11);
		}
		this.beginBtn.onMouseOver=function (){
			sound_Channel('mouseoverb');
		}
		
		for(var i=1;i<=10;i++){
			root.star['s'+i].gotoAndStop(0);
		}
	}
	this.frame_11 = function() {
		var qAry, 
			cSort, // sort
			cAry, // show
			aAry;
		var wait = false,
			fail = false;
		root.topicMc.bg.onClick = function (e){}
		root.topicMc.btn.onClick = function (e){
			root.topicMc.visible = false;
			finish();
		}
		
		function finish(){
			wait = false;
			fail = false;
			if(qAry.length == 0){
				setTimeout(function (){
					root.gotoAndStop(12);
				},1000)
				return;
			}
			root.fairy.gotoAndStop(9);
			root.fairy.txt.visible = true;
			drawQ();
		}
		function drawQ(){
			for(var i = 1;i<=11;i++){
				root['b'+i].visible = false;
			}
			
			aAry = [0,1,2];
			var r = Math.floor(Math.random()*aAry.length);
			var rAry = [];
			var arear = -1,
			area = -1,
			areai = -1;
			// find Number from cAry[]
			arear = cAry[qAry[0]]-1;
			
			rAry = rAry.concat(cSort[arear]);
			
			root.fairy.txt.gotoAndStop(arear);
			root["b"+rAry[0]].visible = true;
			root["b"+rAry[0]]['num'].gotoAndStop(aAry[r]);
			root["b"+rAry[0]].r = 1;
			
			rAry.splice(0,1);
			aAry.splice(r,1);
			
			// select 2 mc
			for(var i = 0 ; i<2;i++){
				r = Math.floor(Math.random()*aAry.length);
				var rr = Math.floor(Math.random()*rAry.length);
				root["b"+rAry[rr]].visible = true;
				root["b"+rAry[rr]]['num'].gotoAndStop(aAry[r]);
				root["b"+rAry[rr]].r = 0;
				// console.log("b"+rAry[rr] + ' is pick !')
				
				aAry.splice(r,1);
				rAry.splice(rr,1);
			}
					
		}
		
		function init(){
			cSort = [[5,7,10],[9,8,10],[1,10,11],[10,5,9],[7,5,10],[8,9,10],[6,3,5]];
			cAry = [1,2,3,4,5,6,7];
			wait = false;
			fail = false;
			qAry = [];
			for(var qq=1;qq<=cAry.length;qq++){
				qAry.push(qq-1);
				root.star['s' + qq].gotoAndStop(0);
			}
			for(var i=1;i<=11;i++){
				root["b"+i].gotoAndStop(0);
				root["b"+i]['i'] = i;
				
				root["b"+i].cursor ="pointer";
				root["b"+i].onClick = function(e){
					if(wait){
						return;
					}
					wait = true;
					root.ox.visible = true;
					if(this.r == 1){
						sound_Channel('rightsound');
						sound_Channel('effect02');
						
						for(var a = 1 ; a<=11;a++){
							if(a == this.i){
								continue;
							}
							root["b"+a].visible = false;
						}
						root.ox.gotoAndPlay(0);
						root.fairy.play();
						root.fairy.txt.visible = false;
						
						if(fail){
							root.topicMc.visible = true;
							root.topicMc.txt.gotoAndStop(cAry[qAry[0]]-1);
							//wait user touch topicMc.btn
						}else{
							setTimeout(function (){
								finish();
							},1000)
						}
						
						qAry.splice(0,1);
						
						var q = cAry.length - qAry.length;
						root.star['s' + q].play();
					}else{
						sound_Channel('wrongsound');
						fail = true;
						root.ox.gotoAndPlay(25);
						root.fairy.txt.gotoAndStop(7);
						setTimeout(function (){
							wait = false;
							root.fairy.txt.gotoAndStop(cAry[qAry[0]]-1);
						},1000)
					}
				}
				root["b"+i].onMouseOver = function(e){
					sound_Channel('mouseoverq');
					root["b"+this.i].gotoAndStop(1);
					this.gotoAndStop(1);
				}
				root["b"+i].onMouseOut = function(e){
					root["b"+this.i].gotoAndStop(0);
					this.gotoAndStop(0);
				}
			}
			
			// random
			var _q = [];
			while (qAry.length > 0) {
				var i = Math.floor(Math.random() * qAry.length);
				_q.push(qAry[i]);
				qAry.splice(i,1);
			}
			qAry = _q;
			
			root.topicMc.visible = false;
			root.fairy.gotoAndPlay(0);
			root.ox.visible = false;
			drawQ();
		}
		
		init();
	}
	this.frame_12 = function() {
		this.replayBtn.onClick=function (){
			root.gotoAndStop(10);
		}
		this.replayBtn.onMouseOver=function (){
			sound_Channel('mouseoverb');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12));

	// logo
	this.mus_mc = new lib.mus_btn();
	this.mus_mc.setTransform(67.6,693.6,0.8,0.8,0,0,0,20.3,21.7);

	this.edulogo = new lib.edulogo();
	this.edulogo.setTransform(27.6,696.6,0.596,0.596);
	new cjs.ButtonHelper(this.edulogo, 0, 1, 2, false, new lib.edulogo(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edulogo},{t:this.mus_mc}]}).wait(13));

	// title
	this.instance = new lib.遊戲標題();
	this.instance.setTransform(685.1,-119.7,1.687,1.687,0,0,0,342.2,117.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:117.9,y:296.4},5).to({regY:117.8,scaleY:1.03,y:299.8},2).to({scaleY:1.69,y:247.6},2).wait(1).to({scaleX:1,scaleY:1,x:430.9,y:140},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:329.7,y:90.6},0).to({_off:true},1).wait(1));

	// topObj
	this.star = new lib.星星燈號組正式();
	this.star.setTransform(1238.2,108.4,1.5,1.5,0,0,0,5.7,4);

	this.instance_1 = new lib.小精靈亂飛2();
	this.instance_1.setTransform(1075.6,480.9,1.5,1.5,0,0,0,69.2,72.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.star}]},10).to({state:[{t:this.instance_1}]},2).wait(1));

	// 圖層 1
	this.ox = new lib.動畫顯示圈叉();
	this.ox.setTransform(639.5,394.4,1.624,1.624);

	this.fairy = new lib.小精靈出題();
	this.fairy.setTransform(757.9,520.8,1.5,1.5,0,0,0,69,72.8);

	this.topicMc = new lib.topicMc();
	this.topicMc.setTransform(640.1,378.4,1.083,1.083,0,0,0,193.8,179.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.topicMc},{t:this.fairy},{t:this.ox}]},11).to({state:[]},1).wait(1));

	// obj
	this.instance_2 = new lib.小精靈亂飛();
	this.instance_2.setTransform(923.9,507.8,1.34,1.34,0,0,0,94.9,99.9);

	this.startBtn = new lib.進入();
	this.startBtn.setTransform(637.8,527.7,2,2);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.進入(), 3);

	this.instance_3 = new lib.黑螢幕();
	this.instance_3.setTransform(640,545.1,1.205,1.205);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);

	this.instance_4 = new lib.整底圖();
	this.instance_4.setTransform(1074,534.9,1.34,1.34,0,0,0,126.6,126.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.251)"],[0,0.902],0.7,339.4,-0.7,-339.1).s().p("Ehj/A4QMAAAhwfMDH+AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(420.7,421);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("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");
	this.shape_2.setTransform(814.3,344.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("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");
	this.shape_3.setTransform(636,312.9);

	this.instance_5 = new lib.箭頭動畫();
	this.instance_5.setTransform(1035,584.6,1.5,1.5,0,0,0,14.4,22.4);

	this.instance_6 = new lib.img02();
	this.instance_6.setTransform(710.1,441.3);

	this.beginBtn = new lib.遊戲開始();
	this.beginBtn.setTransform(641,585,2,2);
	new cjs.ButtonHelper(this.beginBtn, 0, 1, 2, false, new lib.遊戲開始(), 3);

	this.instance_7 = new lib.小精靈上下漂浮();
	this.instance_7.setTransform(347.9,578.5,1.5,1.5,0,0,180,69.1,73);

	this.instance_8 = new lib.題目對話框框();
	this.instance_8.setTransform(421.9,435.5,0.934,1.305,0,0,180,149.5,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("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");
	this.shape_4.setTransform(641.1,193.3);

	this.instance_9 = new lib.說明背景();
	this.instance_9.setTransform(633.4,452.4,1.851,1.851,0,0,0,269.8,178.3);

	this.b11 = new lib.b11();
	this.b11.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b10 = new lib.b10();
	this.b10.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b9 = new lib.b9();
	this.b9.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b8 = new lib.b8();
	this.b8.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b7 = new lib.b7();
	this.b7.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b6 = new lib.b6();
	this.b6.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b5 = new lib.b5();
	this.b5.setTransform(93.7,35,1,1,0,0,0,94.7,69.2);

	this.b4 = new lib.b4();
	this.b4.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b3 = new lib.b3();
	this.b3.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b2 = new lib.b2();
	this.b2.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.b1 = new lib.b1();
	this.b1.setTransform(94.7,69.2,1,1,0,0,0,94.7,69.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("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");
	this.shape_5.setTransform(645.6,382.6,1,1,0,0,0,1.4,7.5);

	this.instance_10 = new lib.遊戲標題();
	this.instance_10.setTransform(668.2,159.7,1.38,1.38,0,0,0,342.3,58.9);

	this.replayBtn = new lib.再玩一次();
	this.replayBtn.setTransform(636.9,523.9,1.5,1.5);
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.再玩一次(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.startBtn},{t:this.instance_2}]}).to({state:[{t:this.instance_9,p:{scaleX:1.851,scaleY:1.851,x:633.4,y:452.4}},{t:this.shape_4},{t:this.instance_8},{t:this.instance_7},{t:this.beginBtn},{t:this.instance_6},{t:this.instance_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.517,scaleY:1.517,x:640,y:421.2}},{t:this.replayBtn},{t:this.instance_10},{t:this.shape_5}]},1).wait(1));

	// main
	this.instance_11 = new lib.scratch3();
	this.instance_11.setTransform(96.7,88.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{scaleX:0.6,scaleY:0.6,x:96.7,y:88.3}}]}).to({state:[{t:this.instance_11,p:{scaleX:0.66,scaleY:0.66,x:90.7,y:86.6}}]},11).to({state:[]},1).wait(1));

	// bg
	this.instance_12 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-290.4,1280,1010.5);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,56);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.img04 = function() {
	this.initialize(img.img04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.scratch3 = function() {
	this.initialize(img.scratch3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1661,922);


(lib.bigmouse = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AB5guIABAAIAAAAgAhnBTIgEAEIgBgCIgek3IEEC0AhsBVIAFgCIBKhDIB4DTIAwgcIh6jRIBogk");
	this.shape.setTransform(13.8,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAQIhKBDIgFACIgek3IEEC0IgBAAIhoAkIB6DRIgwAcg");
	this.shape_1.setTransform(13.8,21.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.9,28,45.5);


(lib.黑螢幕 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009BE1").s().p("AlOAOIAAgbIKdAAIAAAbg");
	this.shape.setTransform(0,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4948").s().p("Av2L6IAA3zIftAAIAAXzg");
	this.shape_1.setTransform(-0.1,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF7FD").s().p("AvzgNIfmAAIAeAaMgghAABg");
	this.shape_2.setTransform(-0.3,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#31B2EA").s().p("AvyAPIgegcMAghgABIgdAdg");
	this.shape_3.setTransform(-0.3,-96.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#31B2EA").s().p("AgOL4IAA3uIAcgbIAAYjg");
	this.shape_4.setTransform(102.4,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDF7FD").s().p("AgOsRIAdAbIAAXuIgdAag");
	this.shape_5.setTransform(-102.9,-18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94D0F4").s().p("AusODQhZAAg/g/QhAg/AAhZIAA1YQAAhYBAg/QA/g/BZAAIdYAAQBaAAA/A/QBAA/AABYIAAVYQAABZhAA/Qg/A/haAAg");
	this.shape_6.setTransform(0,-18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAE7").s().p("AlDCVQgLAAAAgKIAAkVQAAgKALAAIKHAAQALAAAAAKIAAEVQAAAKgLAAg");
	this.shape_7.setTransform(0,80.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3DEF8").s().p("AnJBHQgLAAAFgKIAxh5QAEgKALAAIMtAAQAKAAAEAKIAlB5QACAKgKAAg");
	this.shape_8.setTransform(0,95.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#57BBED").s().p("AnqAnIAmhNIOcAIIATBFg");
	this.shape_9.setTransform(-0.5,104.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.6,-108.4,231.4,217);


(lib.星星 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ah9ABIgEgVID5gVIAJBTg");
	this.shape.setTransform(54.3,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AiWChIDQlTIBdAwIkSE2g");
	this.shape_1.setTransform(48.8,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ACGDxIg6AXIAag2IglgxIA6AJIAigtIASA5IA1ALIgyAdIAGA9gAh0hWIhvgmIBlgxIAGhsIBbBJIBtgrIg/BlIBLBbIh5gMIhFBhg");
	this.shape_2.setTransform(22.8,48.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,12.5,67.3,64.1);


(lib.亮晶晶 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlBhgQEZgkAvpmQAnJmEUAGQj8CXhELSQhCrSkBh5g");
	this.shape.setTransform(0.3,3.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.9,-71.5,64.5,149.6);


(lib.打錯x = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAAG2IpwJyIm3m3IJypxIpypwIG3m3IJwJyIJxpyIG3G3IpyJwIJyJxIm3G3g");
	this.shape.setTransform(0,-0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.4,-106.9,212.9,212.9);


(lib.打對o = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339900").s().p("Aq+K/QkkkjAAmcQAAmbEkkjQEjkkGbABQGcgBEjEkQEkEjgBGbQABGckkEjQkjEkmcAAQmbAAkjkkgAlclSQiRCQAADMQAADNCRCQQCQCSDMAAQDNAACQiSQCSiQAAjNQAAjMiSiQQiQiRjNAAQjMAAiQCRg");
	this.shape.setTransform(0.5,-0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.9,-99.9,199,199);


(lib.手指 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBDQgSgjg1g/Qgog0ghgcQgUgOgLgFQAXAEAfAYQA4AsAgApQAbAgAWAtQAaA2gTAQIgBABQgGgggQggg");
	this.shape.setTransform(38.8,46.1,0.722,0.722,101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCDDDD").s().p("ABUBWQgZg0g2g6IgVgZQg1g1gtgQIAPgNIAEgDQAFgCAIADQALAFAUAOQAhAcAoA0QA1A/ASAjQAQAgAGAgIgDABIgBACIgLAEg");
	this.shape_1.setTransform(38.9,44.6,0.722,0.722,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCDDDD").s().p("AgPAMQABgPALgqIATgVQgKAogFAdQgFAnABAZQgPgcADgbg");
	this.shape_2.setTransform(11.2,34,0.722,0.722,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCDDDD").s().p("AhIDnQgPgBgSgXQgRgWAGgVIATgjIABgBIACgGQgBgGgDgCIgIgDIgGAEIgNAMQgTgEgPgTQgQgUAFgSQADgOAOgXQADgEgBgDQgCgFgCgBQgEgDgDABQgEAAgCACIgKAGQgRgIgLgVQgMgYApgwQAtg0BOgxQBLgwA7gDIABABQAOAAAOADIAAgBQAvAPA1A1IABACQg2gchSAGQhnAHgxAmQg0AmgbAfQgcAeAEAOQAEAPAPAHQAOAHAEAFQAFAFgDAbQgFAaAHAIQADAEAPAIQAMAFAHAJQAQAUgEAUQgBAWANARQALAMAQABQAPAEAFAEIgBABQgaAbgMAAIgBgBg");
	this.shape_3.setTransform(33.6,25.6,0.722,0.722,101.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkJFPIAAAAIgMgFQgCgkBfhjQBKhLAZghIATgVIAHgIIABAAIACgIQgBgFgDgCQgEgEgDABQgFgBgDAEIgGAGQgGgEgPgEQgQgBgKgMQgOgRACgUQAEgUgQgUQgIgJgMgFQgPgIgCgEQgIgIAFgaQADgbgEgFQgEgFgOgHQgPgJgEgPQgFgOAcgeQAcgfA0gmQAxgmBmgHQBTgGA2AcIAVAWQA3A7AUAwQALAeAHAZIABAAQACAUAAAWQgBAog0BdQgPAZgDAeIgBABQgIBbgOAUIAAABQgMARgPgEIgBABQgOgCgNgTIgBAAQgDgFgBgFIgBgBIgCgEQgBgZAHgnQAEgfALgoIACgCQADgFAAgEIAAgCIgBgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBgBIgIgEQgGACgBACIgUASQgCAAgDACQgDAHgHABIgCACIAAAAIkEDgQgnAhgdAJQgIACgHAAQgIAAgGgCg");
	this.shape_4.setTransform(21.9,26.9,0.722,0.722,101.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DCDDDD").s().p("AhjBuQgRgYAzgyIBAgzIABgBQAugpA1g5IAEgFQgZAhhJBKQhdBhACAkQgJgHgEgEgABoh4IgBABIABgBg");
	this.shape_5.setTransform(9.8,10.4,0.722,0.722,101.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231916").s().p("AkaGJQgTgDgPgTQggglBChCIABgBIBAg1QAigdAvgwQgUgDgZgeQgZgfAJgfIAEgLQgXgFgUgZQgXgaAIgdIAAAAQADgMADgHQgXgHgRgiQgXgkA2g8QAvg1BQgzQBUg0A+gBIABgBIAYACQAJgMAPgMQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIACgDQAbgNA/AtQA8AuAhArQAgApAUApQAiBHggAZQgFAEgCAAQgKAGgJACIADAkIgBABQgDAug1BgQgMAUgDAdQgNBkgOAUQgRAbgegGIAAAAQgVgCgVgZIgBgCIgGgMQgVgmAEghIAGgoIj3DXIgBAAQgtAmgfAHIABgBQgKAEgKAAQgLAAgLgEgAj3F2QAdgJAnghIEEjgIAAAAIACgCQAHgBADgHQADgCACAAIAUgSQABgCAGgCIAIAEIABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABADIAAACQAAAEgDAFIgCACIgVAVQgMAqAAARQgDAbAPAcIACAEIABABQABAFADAFIABAAQANATAOACIABgBQAPAEAMgRIAAgBQAOgUAIhbIABgBQADgeAPgZQA0hdABgoQAAgWgCgUIgBAAQgHgZgLgeQgUgwg3g7IgVgWIgCgCQg0g1gvgPIgBABQgOgDgOAAIAAgBQg5ADhNAwQhOAxguA0QgpAwAMAYQAMAXARAIIAJgGQADgCAEAAQADgBAEADQACABACAFQAAADgDAEQgNAXgEAOQgFASAQAUQAQARATAEIAMgLIAHgDIAHADQADAAABAGIgBAGIgBABIgUAjQgGAVASAWQASAXAPABQAMABAagbIACgBIAGgGQADgEAFABQADgBAEAEQADACABAFIgCAIIgBAAIgHAIIgTAVIgFAGQg1A5gwApIgBABIhAA1QgzAyARAYQAEAEAJAHIAMAFIAAAAQANAFAQgFgABVl3IgEADIgPANQAtAQA1A1IAXAZQA2A8AZA0IAQAxIALgEIABgCIADgBIABgBQATgQgag2QgWgtgbgiQgggpg6gsQgfgYgXgEIgIgBIgFAAg");
	this.shape_6.setTransform(24.5,28.2,0.722,0.722,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{scaleX:0.722,scaleY:0.722,x:24.5,y:28.2}},{t:this.shape_5,p:{scaleX:0.722,scaleY:0.722,x:9.8,y:10.4}},{t:this.shape_4,p:{scaleX:0.722,scaleY:0.722,x:21.9,y:26.9}},{t:this.shape_3,p:{scaleX:0.722,scaleY:0.722,x:33.6,y:25.6}},{t:this.shape_2,p:{scaleX:0.722,scaleY:0.722,x:11.2,y:34}},{t:this.shape_1,p:{scaleX:0.722,scaleY:0.722,x:38.9,y:44.6}},{t:this.shape,p:{scaleX:0.722,scaleY:0.722,x:38.8,y:46.1}}]}).to({state:[{t:this.shape_6,p:{scaleX:0.71,scaleY:0.71,x:21.1,y:21.4}},{t:this.shape_5,p:{scaleX:0.71,scaleY:0.71,x:6.7,y:3.8}},{t:this.shape_4,p:{scaleX:0.71,scaleY:0.71,x:18.5,y:20.1}},{t:this.shape_3,p:{scaleX:0.71,scaleY:0.71,x:30,y:18.8}},{t:this.shape_2,p:{scaleX:0.71,scaleY:0.71,x:8.1,y:27}},{t:this.shape_1,p:{scaleX:0.71,scaleY:0.71,x:35.3,y:37.5}},{t:this.shape,p:{scaleX:0.71,scaleY:0.71,x:35.2,y:39}}]},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,53.5);


(lib.小貓綵球 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgTAHIgBgCIABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIANgCQANgBAKgGIABAAIACAAIAAACIgBABIgJADQgJADgJACIgKADIgCgBg");
	this.shape.setTransform(57.1,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgQARIgBgBIAAgBIABgBIAMgIQALgIAIgNIABgBIABAAIABABIAAABQgIAOgLAJIgNAIIgBAAIgBAAg");
	this.shape_1.setTransform(55.1,37.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AiCASQgCgFACgEQACgEAEgCQA/gWBegEQAxgCAoADQAFAAADAEQADADgBAFQAAAFgEADQgDACgFAAQgkgCgwACQhcACg7AXIgEAAQgIAAgDgHg");
	this.shape_2.setTransform(21.8,55.1,0.293,0.293,-21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("ACMA1QgbgSgygUQhggmhxgIQgFgBgDgDQgDgEAAgFQABgFADgDQAEgDAFABQB1AJBjAoQAzATAeAUQAEADABAFQABAEgDAEQgEAFgGAAQgEAAgCgCg");
	this.shape_3.setTransform(20.3,51.8,0.293,0.293,-21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AgmAxQgigSgTgWQgQgRADgQQAEgYAkgKQAYgHAhAAIABAAQBqgKAFAwQADAbghAgQgdAfgVAEIgHABQgVAAgjgTgAg4gkQgYAGgBAKQgCAFAKALQAPARAfAQQAcAQARAAIADgBQANgCAXgZQAagZgBgRQgCgTg1AAIgfACIgDAAQgcAAgVAGg");
	this.shape_4.setTransform(41.8,43.9,0.293,0.293,-21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94717F").s().p("AgvAeQgygeAEgWQADgVArgHQAVgEAVABQB3gMgYA6QgIATgYAVQgWAUgNADIgHAAQgWAAgpgag");
	this.shape_5.setTransform(41.8,43.9,0.293,0.293,-21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231815").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAIgJALABQALgBAJAJQAJAJAAAKQAAAMgJAIQgJAIgLABQgLgBgIgIg");
	this.shape_6.setTransform(44.7,37.6,0.293,0.293,-21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231815").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_7.setTransform(32.3,44.6,0.293,0.293,-21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231815").s().p("AgiCWQgsgdgfgxQgshEABhEQADhFAtgeQAXgQAfAAQAqAAArAdQAsAdAfAxQAsBEgCBEQgBBGguAeQgYAQgeAAQgrAAgqgegAhbiQQgnAZABA8QABA7AmA8QAdAsAmAaQAlAaAlAAQAYAAARgLQAmgZAAg9QgBg7gng7QgbgsgngaQglgbglAAQgYAAgRAMgAAJBaQgKgLAAgRQAAgRAKgMQAMgMAQAAQARAAAMAMQAMAMAAARQAAARgMALQgMAMgRAAQgQAAgMgMgAAZAxQgFAGAAAHQAAAHAFAFQAGAFAGAAQAHAAAGgFQAEgFAAgHQAAgHgEgGQgGgFgHAAQgGAAgGAFg");
	this.shape_8.setTransform(43,36.3,0.293,0.293,-21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACcQg6gagphAQgphAAAg/QAAhBAqgcQAqgbA4AaQA8AaAoBAQApBAAAA/QgBBBgqAcQgVAOgaAAQgYAAgbgNgAARAqQgJAIAAAMQAAAMAJAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_9.setTransform(43,36.3,0.293,0.293,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231815").s().p("Ag6CaQgugfgcg2QglhGANhHQAMhHA3gdQAagOAeAAQAvAAAtAhQAuAgAcA1QAlBGgNBIQgMBGg3AdQgaAOgeAAQgvgBgtgggAhOiXQgvAYgJA+QgKA+AhA9QAZAvAoAeQApAdAnAAQAZAAAUgLQAvgYAJg/QAKg+ghg9QgYgvgpgdQgogdgoAAQgYAAgVALgAAABKQgKgMAAgQQAAgRAKgMQAMgMAQAAQARAAAMAMQAMAMAAARQAAAQgMAMQgMAMgRAAQgQAAgMgMgAAQAhQgFAFAAAIQAAAGAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgGQAAgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_10.setTransform(31,43.7,0.293,0.293,-21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZCgQg9gdgjhEQgjhBALhDQALhCAzgbQAygaA7AdQA9AdAjBEQAkBBgMBDQgLBCgzAbQgYAMgaAAQgdAAgegPgAAIAZQgIAIAAAMQAAAMAIAJQAIAIAMAAQAMAAAJgIQAIgJAAgMQAAgMgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_11.setTransform(31,43.7,0.293,0.293,-21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231815").s().p("AhJGKQkagNimiqQhChDgihRQgfhHACg+QAEhmA7h0QAdg7AggrQADgDAFgBQAFgBADADQAEADABAFQAAAEgCAEQgdAngdA5Qg6BygEBhQgCA7AeBDQAhBMA/BAQCgChEPANIA3ABQEEAAC+hoQC0hiANh/QALhqgyg2QgjgmhYgZQgFgBgCgEQgCgEABgFQABgFAFgCQAEgCAEABQBXAZAmAjQBDBAgNB8QgHBFg6BCQg6BBhiAzQhdAwh0AZQhyAZh7AAIg3gBg");
	this.shape_12.setTransform(40,47.7,0.293,0.293,-21.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBFAFA").s().p("AgaBTQhjgXhMgtQhKgqgpg5QDaByGfAQQhoAdh4AIQgjACggAAIg0gCg");
	this.shape_13.setTransform(42,56.3,0.293,0.293,-21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231815").s().p("Ah7CDQhXgYgihCQgbgvAGhEIANg8QABgFAFgCQAEgCAEABQAFACACAEQACAFgCAEIgKA2QgGA+AXAqQAeA4BNAVQB4AhBog3QA8gfBQhSQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgDADQhDBEgwAfQhVA4hcAAQguAAgxgNg");
	this.shape_14.setTransform(45,49.8,0.293,0.293,-21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231815").s().p("AAkAxQiZgciIhCQgEgCgCgFQgBgEACgEQACgEAEgCQAFgBAEACQCeBMC1AYQBbAMA9gEQAFAAAEADQADADAAAFQABAFgDADQgDAEgFAAIgbABQhYAAhjgSg");
	this.shape_15.setTransform(44.3,47.7,0.293,0.293,-21.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah4B3Qh4gggNhvQgEgjAHgoIAIggQCiBRC3AXQBcAMA8gEQhSBUg+AgQhDAjhIAAQgsAAgwgNg");
	this.shape_16.setTransform(45,49.8,0.293,0.293,-21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231815").s().p("AhpBeQgCgEABgEQACgFAEgCQAxgdBIhKQAmgmAcghQADgEAEAAQAFgBAEADQADAEABAEQAAAFgDAEQgeAkgmAnQhJBKg0AeIgGABQgHAAgDgGg");
	this.shape_17.setTransform(35.4,27.5,0.293,0.293,-21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231815").s().p("AAXB3QgEAAgEgDQgDgDAAgEQgEgogHguQgNhagUghQgDgEACgFQABgFAEgCQAEgDAFACQAFABACAEQATAkAQBcQAIAvAEAsQAAAFgDADQgDAEgFAAg");
	this.shape_18.setTransform(38.9,26.7,0.293,0.293,-21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231815").s().p("ABjDHQgFgCgCgEQgCgFACgEQAQgsgThCQgliDiqh5QgEgCAAgFQgBgFADgEQACgEAFgBQAFAAAEACQC0CAAmCLQATBIgTAyQgDAIgIAAg");
	this.shape_19.setTransform(45.8,33.3,0.293,0.293,-21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231815").s().p("AhqC9QgyhjABiPQAAhJAMg7QABgGAGgCQAGgDAFAEIDtCoIApAoQADADAAAFQAAAEgDAEQgEADgEAAQgFAAgEgDIgogmIjbidQgLBIADBKQAFBzApBQQACAEgBAFQgCAEgEADIgFABQgHAAgEgGg");
	this.shape_20.setTransform(22.4,36.8,0.293,0.293,-21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231815").s().p("AjKACQCoggCEAIQBEAFAlAMIgHAUQgigLhCgEQiDgHijAfg");
	this.shape_21.setTransform(30.4,32.6,0.293,0.293,-21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ai9E2QiugqhchjQhdhkAlhrQAZhPBWgvQAiAWAiAEQAkAFAegQQAkgSARgqQA6gBA0AMIgCAHQgEAXAxAfQAwAfAXgFQATgEAdggQAfgkgMgVQAWgMAHgOIAIgIQAdAOAbAAQAbAAAVgOQAigWAHgxQAlgDAiAIQARAFAJAFQgCAUgEALQBXAYAlAlQA6A7gMB1QgNB5ijBiQisBmjwAOQgjACghAAIg2gBgAjtgnQgHAnAEAhQANByB4AgQB8AiBrg4QA+ghBShVQg8AEhcgMQi3gYiihOg");
	this.shape_22.setTransform(44,48.4,0.293,0.293,-21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2990A").s().p("AoSB5QALh5A8hhQgxhhABiRQABhIALg2IDtCoQC+gnCKAQQAzgdBMhOQAlgmAcghQAVAjAPBeQAIAvADAoQCNBiA1BtQAkBJgHBAQgKgFgRgEQgigJgkAEQAFgigKglQgKgpgYglQgphAg7gaQg7gagqAcQgpAcgBBAQAABBApA+QAnA+A5AbIgIAIQgIANgVANQgPgbhTAIQgSAAgTADQgnAFgJAQQg0gMg5ABQAPgjgEgsQgEgtgWgoQgjhEg9gdQg9gdgyAaQgzAbgLBCQgLBBAjBDQAcA2AuAfQhWAugaBPQgfBdBABYQj4iEAWj2g");
	this.shape_23.setTransform(35.3,40.5,0.293,0.293,-21.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED7E08").s().p("AEQGSQhXgDhPgWQjCg0hxiOQhhh4AFhyQAEhkA6h1QAeg6AegoIAbgkIgYAnQgbAsgVBBQgqCDAdBtQApCWCuBdIABABQAnA6BMAsQBLArBgAXIAWAFgAj6jWQgkBXgDBMQgFBxBgB3QBxCMDAA0QBGATBKAFQhagYhGgrQhGgrglg2QivhdgqiZQgXhVAVhkQAOhEAfhBQgkA5gYA8g");
	this.shape_24.setTransform(30.4,50.9,0.293,0.293,-21.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ED7E08").s().p("AB1FmQi/gzhyiMQhih4AFh0QAEhkA7h1QAdg6AdgmQg8BhgLB7QgWD0D4CEQAnA5BKAsQBMAsBjAYQhagEhMgVg");
	this.shape_25.setTransform(30.3,51.5,0.293,0.293,-21.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231815").s().p("AiPgMIABgFQCCAeBYAAQAugBAUgGIACAEQgWAHgvAAQhYAAiCgdg");
	this.shape_26.setTransform(41.9,58.2,0.293,0.293,-14.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231815").s().p("AhUC8QgCgFAAgEQABgFAEgCQAlgeAlg7QBHhyAAiUQAAgGADgCQADgEAFAAQAFAAADAEQAEACAAAGQAACbhMB3QgkA9gqAiQgEACgDAAQgGAAgEgEg");
	this.shape_27.setTransform(45.9,62.9,0.293,0.293,-14.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231815").s().p("Ag9FPQgDgDgBgFQAAgFADgDQAug3gEgcQgDgQgVgSQgOgLgogaQhPgygzgtQgvgrADg6QAEhXBshyQAigkApgjIAmgfQADgDAFABIEtAZQAFABADADQADAEAAAFQgBAFgDADQgEADgFgBIkpgZQg8Aug2A7QheBngEBLQgCAvAnAkQAvAqBPAyQAtAdAQAOQAYAWACAXQAGAng0A+QgDAEgFAAQgFAAgDgDg");
	this.shape_28.setTransform(41.6,67.7,0.293,0.293,-14.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ED7E08").s().p("ABBDCQhQg0gugqQgogkgBgxQgDhcB+iAIANgNIgJAQIgUAoQgTAygHAyQgXCdB5BmIAbAWgAhiAPQABAvAmAjQAuApBEAtQhchaAJiCQAFhOAlhMQhyB3ACBXg");
	this.shape_29.setTransform(36.8,67.8,0.293,0.293,-14.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED7E08").s().p("AAZCgQgngcghgfQhBg6AnhdQAdhFBPhSIgUAoQgTAygHAyQgYCfB8BoIhAgqg");
	this.shape_30.setTransform(36.4,67.8,0.293,0.293,-14.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231815").s().p("AAZBdIgIgDIg6ggQgNgIgDgMQgDgJADgKIAEgJQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIADAAIACACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDAHQgCAJABAIQADAJAKAGIA5AgIAKADQAJABAGgDQAGgCABgHQAEgLgQgOQgLgKgOgHQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgYQACgXgCgJIgBgFQgCgMgJgJQgNgPgpgUQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIACgCIADAAQArAVAOAQQAJAKADAOIABAEQADAOgFAqQAPAIALAKQASAQgFAPQgCAJgJAEIgEACIgIABIgKgBg");
	this.shape_31.setTransform(47.6,76.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeBVQgxgFgegbQgagYgEgiQgDgiATgeQAUggAmgOQBBgYBMAdQAnAPAaAUQgbBUg1BEQgbAhgWARQgVgYgVgSg");
	this.shape_32.setTransform(43.8,65.1,0.293,0.293,-14.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2990A").s().p("ACdHsIgygbQhchThJhLQgvguAVg5QAHgSANgRIALgNQAqgyADgeQADgbgegZQgLgKhCgpQg/gogsgoQhghXCAifQAogyA6gzIAxgpIEuAZQAACahMB4QgmA7gmAdQBNBNARAxQAFAPgCA3QAAAggeBUQgPAqgOAjIA9BCQA4BLgbArQgTAfghAAQgOAAgPgEg");
	this.shape_33.setTransform(42.9,72.5,0.293,0.293,-14.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231815").s().p("AiBC/QgugFgbglQgdgngGhFQgFg2ALgxQAMg8AgghQAhggAwgCIAKAAQBdgDA4AFQBqAJAtAiQAXASAJAZQAIAZgKAYQgOAhguATQhLAfiJgSQAAB4gnAnQgTATgaAAgAisiJQgaAcgLA0QgKAxAGA0QAGA7AYAgQAVAeAjADQAUACANgOQATgUAIgwQAHgngCgwIAAgBQAAgYgCgTQgBgEADgEQADgEAFAAQAFgBADADQAEADABAFIACAkQBuAOBFgQQA6gQAOgiQAHgQgGgSQgGgSgRgNQg3gpinAAIg/ABIgLAAQgnABgbAcg");
	this.shape_34.setTransform(52.7,59.4,0.293,0.293,-143.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2990A").s().p("Ag2CpQgmgggKhLQgIg8AMg2QAMg4AegfQAegfAqgBIBagCIgXAFIgtAQQgxAagcAtQg5BbAtCcIACAIgAAQinQgpABgcAeQgeAegLA3QgLAzAHA6QAIBGAhAgQgqiYA5hbQAlg8BHgZg");
	this.shape_35.setTransform(55.3,61.6,0.293,0.293,-143.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ED7E08").s().p("AhZBBQgIg8AMg2QAMg6AegdQAdgeApgBIBCgCQgOADgTAJQgnARgaAeQhaBfA1C4QglgfgKhJg");
	this.shape_36.setTransform(55.5,61.9,0.293,0.293,-143.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2990A").s().p("AiPCzQgdgDgUgRQg1i4BahgQAcgdAngSQATgIAOgDQCxgBA8AtQAbAVADAdQAEAegaAYQhCA7i9gcQACBHgNAuQgSA/grAAIgGgBg");
	this.shape_37.setTransform(52.1,59,0.293,0.293,-143.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231815").s().p("AjfAtQgEgCgCgEQgBgFACgEQACgEAEgCQAFgBAEACQCsBRCKhSQAtgZAkgoQAUgXAKgRQADgEAFgBQAEgBAEADQAEACACAFQABAEgDAEIgTAaQgYAdgeAXQhfBOhwAAQhUAAhXgqg");
	this.shape_38.setTransform(34.6,76.7,0.293,0.293,-14.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231815").s().p("AgpDLQg8gegKhvQgJhsAdhZQAJgdAMgXIALgTQADgEAEgBQAFAAAEACQAEADABAFQAAAEgCAEIgdBCQgbBVAJBmQAHBiAxAYQAWAKAbgFQAVgEARgMQASgLAKg0QAIgqgBgtQAAgFADgEQAEgDAEAAQAFAAAEADQADADAAAFQAAArgFAlQgLBIgdATQghAVgkAAQgVAAgUgJg");
	this.shape_39.setTransform(25.6,79.5,0.293,0.293,-14.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231815").s().p("AAKBNQgYgKgagYQgQgOgagdQgYgdgMgLQgTgRgSgCQgYgBgeAaQgEAEgEgBQgFAAgDgEQgDgDAAgFQAAgFAEgDQAmghAhACQAYACAYAUQAOAMAbAhQAZAbAOANQAXAWAUAJQA4AUBIhHQAWgUAWgdIASgZQACgEAFgBQAFgBAEADQAEACABAFQABAFgDAEIg6BHQhDBEg6AAQgTAAgPgGg");
	this.shape_40.setTransform(29.1,73.8,0.293,0.293,-14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231815").s().p("ACeEgQi1gjhnhZQhOhEgcheQgWhKAOhMQANhGAkgjQAtgrAhAKQAeAKAWA4QATAvAWBnQAVBsB3BBQA8AgA5AKQAFABACAEQADAEgBAFQAAAFgEACQgEADgFgBQg8gLhBgjQh+hFgZh2QgShXgQgtQgUg7gXgHQgUgHgjAiQgdAcgMA8QgPBIAVBJQAaBXBLBAQBiBUCtAiQAFABACAEQADAEgBAEQgBAKgKAAg");
	this.shape_41.setTransform(26.5,67.1,0.293,0.293,-14.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2990A").s().p("Ah5A1QgqgZghgcIgYgaQACgwAZgfQAyg+B0BWQAsBNBlArQAzAXAqAHQAEANAGAKIgIAMIgVAcIgGAAQixAAiChPg");
	this.shape_42.setTransform(27.8,69.4,0.293,0.293,-14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2990A").s().p("AjbDRQg+gWgKhxQgIhpAchYIAehDQAkggAfAFQAYAEAcAeQARARAiApQAgAjAfALQAzAUBBg2QAagVAfglIAVgcIAHgLQAYAsBMAzIgIAYQgNAegWAbQhKBSiVATQg4gJg6gcIgEBGQgKBKgaARQgeAUgeAAQgQAAgQgGg");
	this.shape_43.setTransform(30.9,77.7,0.293,0.293,-14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ED7E08").s().p("ACbB4QiWgchfhEQhKgygmhGIgNgYIAQAVIAZAaQAgAeApAZQCCBNCvgBIAMAAIgDADQgbAjgdAYIgBAAgAhKAeQBaA7CLAbQAZgVAbggIgDAAQiVAAh1g6QhMgigyg0QApBBBJAug");
	this.shape_44.setTransform(27.8,71.5,0.293,0.293,-14.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ED7E08").s().p("AhTAUQhRgzgqhMIAYAZQAhAeAqAZQCFBPC0gCQgeAlgaAVQiNgbhcg9g");
	this.shape_45.setTransform(28,71.8,0.293,0.293,-14.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231815").s().p("AgagEIAAgFQAeAFAYAJIgCAFQgYgKgcgEg");
	this.shape_46.setTransform(27.8,79.3,0.293,0.293,-14.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ED7E08").s().p("AiaBcIgOgCIAOgCQCTgSBHhSQAXgaANgeIAJgZIAAgDIACACIA4AkIADABIgBACIgTAYQgYAdgcAWQhdBNhtAAQgXAAgbgFgAA9gCQhFBIiDAUQAQACATAAQBoAABXhEQAwgjAdgsIg0ghQgLAsgoAqg");
	this.shape_47.setTransform(35.9,75.7,0.293,0.293,-14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ED7E08").s().p("AifBaQCUgTBIhTQAWgaANgeIAIgZQAbASAdASIgUAcQgbAfgjAZQhUBDhmAAQgZAAgagEg");
	this.shape_48.setTransform(36.1,75.7,0.293,0.293,-14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhwgOQAJhUAognQA5g3AgAtQAdAnAfCSQAIAnAVAjQhzhWgxA+QgZAfgCAxQguhXAKhfg");
	this.shape_49.setTransform(22.2,64.9,0.293,0.293,-14.9);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.5,23.7,44.6,62);


(lib.topicMcbg = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FF3300"],[0.082,0.894],-35.1,-328,-35.1,-19.9).s().p("AniBWIAAirIPFAAIAACrg");
	this.shape.setTransform(104.3,371.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FF3300"],[0.082,0.894],316.1,-270.3,316.1,37.7).s().p("ABfKXQiaAAhuhrQhthqgBiVIAAvDIDgAAIAAOPQAADxD8AAIBSAAIAACtg");
	this.shape_1.setTransform(28,313.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9900","#FF3300"],[0.082,0.894],316.1,-30.4,316.1,277.5).s().p("AkXTVMAAAgg/QABiWBthqQBuhqCaAAIC4AAIAALMIhSAAQj8AAAADyIAAXrg");
	this.shape_2.setTransform(28,123.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9900","#FF3300"],[0.082,0.894],-35.1,57.5,-35.1,365.5).s().p("AniFmIAArLIPFAAIAACWIieAAIAABGIAyAAIAAgdIBsAAIAAAUQgKAQgIAJIiFAAIAAApIBsAAQgIALgJAJIgaAcQArAIArAJIAAANQg6AKhiAAIgKAAIAZAvQBQgEA9gLIAAAZIiwAAIAAAqICwAAIAAABQhGA9hrAWIAaAtQBagbA9gxIAADGgACdDgIAAAYIA0AAIAAikImGAAIAACkIA0AAIAAgYgAj3AEIAhAtQA5gSAbgMIAAAbIEaAAIAAgeQAhANAsANIAhgqQh7gWhmhNIgFgDIg1AAQhNBQiVAagAh8iUQAMAcAIArIAzgIQgNgsgHgTIBOAAIAAgsIiBAAQAIgPALgbIgxgHQgaBJhDA1IApAkQAjgoAUgdgABriUQAKAYAHAmIA1gFQgLgogHgRIBnAAIAAgsIijAAQANgWAGgWIgxgFQgfBLgpAgIAmAgQAPgJAYglgAiBC2IAAg1IEeAAIAAA1gAhXABQAmgQA3gtQAvAkA9AZgAHhg2IACgBIAAABIgCAAg");
	this.shape_3.setTransform(104.3,35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("ALfDUQA9gvAYgtQAZguAAhEIAAjnIDpAAIAAGUQABAigLAOQgMAOg5AAIg4AAIgPg1IA6AEIARABQAXAAAAgTIAAhfIiFAAQgJA5guA4QgtA1gLAAgAODAeIB/AAIAAhQIh/AAgAODhjIB/AAIAAhOIh/AAgADWDMQBgguABh4Ig9AAIAAijIEDAAIAACjIg+AAIAACFQAAARASAAIAIAAQANAAAEgKQAFgNAAg1IAAgGIAtAQIAAAJQAABFgQAQQgQARgcAAIgZAAQg7AAAAg+IAAiFIgmAAIAAAFQAACPhtA7gAEtgEICdAAIAAhMIidAAgAAsD1IAAi7ICnAAIAAC3IgwAAIAAgZIhIAAIAAAdgABbCvIBIAAIAAhNIhIAAgAknD1IAAiNQgWAdgdAYQg9AxhaAbIgagtQBrgXBGg8IABgBIgBAAIiwAAIAAgqICwAAIAzAAIAAgiIAyAAIAAAiIDkAAIAAAqIi1AAQA/A9B6AXIgYAtQiSgog+hZIAACNgAqgD1IAAgYIkgAAIAAAYIg0AAIAAikIGIAAIAACkgAvACzIEgAAIAAg1IkgAAgAJdC7IAAmRIC/AAIAAFqIiOAAIAAAngAKOBjIBcAAIAAh1IhcAAgAKOhAIBcAAIAAhkIhcAAgAjzAFQgoAUg/AMQg9ALhQAEIgZgwIAKAAQBiAAA6gJIAbgHIgbgGQgrgKgrgHIAagcQAJgJAIgMIhsAAIAAgoICFAAQAIgJAKgRIAKgTIgKAAIhsAAIAAAdIgyAAIAAhGICeAAIAzAAIgMgOIgMgNIA3gHIAOARIAPARIDMAAIAABGIgzAAIAAgdIj+AAIAxATQgIAPgKALIEKAAIAAAoIhkAAQgVAjglAYIBMASQAqAIAnAMIghApQibgxgPAAgAlQhHIgKANIgCABIACAAQA8AKAhAIQAjgRAUgcIiDAAIgHANgAw2ABQCVgaBNhQIA3AAIAFADQBmBNB6AWIggAqQgsgNghgNIAAAeIkcAAIAAgbQgbAMg5ASgAuWAAIDLAAQg9gbgvgkQg5AtgmASgAAqAQIAAgoICvAAIAAAogAAqg9IAAgpICvAAIAAApgAu7iXIgbAAQgUAcgjAoIgpgkQBDg1AahIIAxAGQgLAcgIAPICDAAIAAAsIhQAAQAHATANAsIgzAIQgIgsgMgbgArSiXIghAAQgYAlgPAJIgoghQArgfAfhLIAxAFQgGAWgNAWICiAAIAAAsIhmAAQAHARALAoIg1AFQgHgmgKgYgAGMibQAmgiAXg3IAqATQgVA4gpArgAD9jcIAogUQArA0AVAkIgrAZQgcg3ghgmgAAdiKIAAgsIBQAAQgLgjgMgVIAygGQAOAZAKAlIBFAAIAAAsg");
	this.shape_4.setTransform(187.4,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmiWwIvGAAIhSAAQj/AAAAjxIAAuRIAA3rQAAjyD/AAIBSAAIPGAAIddAAQD/AAAADyMAAAAl8QAADxj/AAg");
	this.shape_5.setTransform(194.5,217.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF9900","#FF3300"],[0.082,0.894],-216.2,-118.1,-216.2,189.8).s().p("AyVdsIAAisIddAAQD+AAAAjyMAAAgl8QAAjxj+AAI9dAAIAAjGQAdgYAWgdIAACNIAyAAIAAiNQA/BaCRAnIAYgtQh6gXg/g9IC2AAIAAgqIjlAAIAAgiIgyAAIAAAiIgzAAIAAgZQBAgLAogUQAOAACbAwIAhgpQgngMgqgKIhLgSQAlgYAUgiIBkAAIAAgpIkJAAQAJgLAIgPIgxgTID/AAIAAAdIAyAAIAAhGIjMAAIgPgQIgOgSIg3AHIAMANIAMAOIgzAAIAAiWIe0AAQCbABBuBqQBuBqAACVMAAAAwEQAACWhuBqQhuBqibAAgAAT37QAABDgXAvQgZAtg9AuIAwAhQAKAAAsg1QAtg4AJg5ICFAAIAABfQAAATgXAAIgRgBIg5gEIAPA1IA3AAQA6AAALgOQALgOAAgiIgBmWIjoAAgAo+3cIA8AAQgBB5hgAtIAjApQBug6AAiQIAAgFIAmAAIAACFQAAA/A6gBIAZAAQAcAAAQgRQAQgQAAhFIAAgJIgtgQIAAAGQAAA2gFAMQgEAKgNAAIgHAAQgTAAAAgRIAAiFIA+AAIAAilIkCAAgAsN0NIAvAAIAAgdIBIAAIAAAZIAwAAIAAi3IinAAgAjc1HIAxAAIAAgnICOAAIAAlsIi/AAgAsO3yICvAAIAAgqIivAAgAsO5BICvAAIAAgpIivAAgAms6eIAoAcQApgrAVg4IgpgTQgYA3glAjgAo87gQAiAmAbA3IAsgZQgWgkgrg0gAsc6NIDIAAIAAgtIhEAAQgKgkgPgaIgyAHQAMAVALAiIhQAAgAre1SIAAhOIBIAAIAABOgAyV2aIABAAIgBABgAir2fIAAh2IBdAAIAAB2gABI3jIAAhTIB/AAIAABTgAoM4IIAAhMICdAAIAABMgAyV4WIAbAGIgbAHgAyV49IAAgBIAKgNIAHgMICDAAQgUAbgiASQgigIg8gLgAir5DIAAhkIBdAAIAABkgABI5nIAAhOIB/AAIAABOgAyV6tIAKAAIgKAUg");
	this.shape_6.setTransform(270.1,190.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,387.6,380.2);


(lib.edulogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9DQIAAmfIJ7AAIAAF8QAAAjhMAAgAjXChIGWAAQAZAAAAgKIAAhYQgRAYgPAFQgRAIgVgBIgNAAQAIAMAQgBIAiAAIAAAoIhRAAQgbAAgTgXIgvhDIBdAAIAHAMIAFAAQANAAALgMIBGAAIAAjcImvAAgAghCbQgvAAAAgXIAAgXIgGAJQgPAegnAAIhAAAIAAgpIAbAAQAOgBAGgRIAOgsIgpAAIAAhRIFqAAIAAA3QgBAagsAAIi0AAIgLAYIA5AAIAAAiQAAALAMAAIAmAAIAAApgAhfAKICxAAQAJAAAAgBIAAgJIi6AAgAjIgxIAAgoICXAAIAAgLIiLAAIAAgnICLAAIAAgPIBYAAIAAAPICUAAIAAAlIiUAAIAAANIChAAIAAAog");
	this.shape.setTransform(-7.3,20.1,0.205,0.205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A+IAAgRIALAAQADAAAAgMIAHhDIgVAAIAAgRIAyAAIAAgKIAWAAIAAAKIAzAAIAAARIhTAAIgBAPIBPAAIAABBQAAAPgRAAIguAAIAAgSIAnAAQABAAABAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgqIg9AAIgEAtQgBASgIAAg");
	this.shape_1.setTransform(28,28.4,0.205,0.205);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGA+QgQAAAAgRIAAhCIgHABIAAgSIAHgBIAAgTIAQAAIAAARIAJgBIAAgSIARAAIAAAQIAbgFIAABFQAAAQgQAAIgFAAIAAgQIACAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAguIgKABIAABCIgRAAIAAg/IgJACIAABAQAAAEAEAAIA0AAIAAARgAg9A7IAAgRIANAAIAAhHIgMAAIAAgRIAMAAIAAgOIATAAIAAAOIALAAIAAARIgLAAIAABHIAMAAIAAARg");
	this.shape_2.setTransform(23.7,28.4,0.205,0.205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDA+IAAgRIAcAAQADAAAAgHIAAgSIgiAAIAAgRIAiAAIAAgPIgaAAIAAgRIAcAAIAHgOIgoAAIAAgRIA/AAIAAANIgNAYIAAAaIAPAAIAAARIgPAAIAAAdQAAANgLAAgAgYA9QgEAAgCgEIgEgHIgGAHQgCADgFABIgMAAIAAgQIAEAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAHgLIgJgOIgBgGIAAgqIgHAAIAAgRIAHAAIAAgOIASAAIAAAOIAIAAIAAgOIARAAIAAAOIAHAAIAAARIgHAAIAAArIgBAGIgLAPIAEAJIADACIAFAAIAAAQgAgkAGIABAEIACAGIADgFIACgEIAAglIgIAAg");
	this.shape_3.setTransform(19.3,28.4,0.205,0.205);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJA+IAAgRIAcAAQAFAAAAgDIAAhLIgaAAIAAADQgDALgKAAIgIAAIAABEQAAANgNAAIgqAAIAAhxIAQAAIADgJIAVAAIgDAJIASAAIAAAQIAFAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIADgWIATAAIgCAKIApAAIAABiQAAAPgRAAgAgqAtIAPAAQAFAAgBgEIAAgdIgTAAgAgqgEIATAAIAAgfIgTAAgAAUAjQgJAAgCgKIgJgpIASAAIAHAdQAAAFAEAAIAJAAIAAARg");
	this.shape_4.setTransform(15,28.4,0.205,0.205);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4A+IAAg6IArAAIADgFIgJAAIAAgtIgpAAIAAgPIA6AAIAAA8IAEAAIAAgLIAPAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAEgGIATAAIgJAQQgDAEgHAAIgQAAIgCAEIA0AAIAAAwQAAAKgNAAgAglAwIBIAAQAFAAAAgDIAAgEIhNAAgAglAbIBNAAIAAgJIhNAAgAg6AAIAAgMIAOAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIADgFIASAAIgIAPQgDAEgGAAgAArAAIAAguIgqAAIAAgPIA8AAIAAA9gAADgWIAAgMIAKAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIADgGIASAAIgIAPQgDAFgGAAgAg5gWIAAgNIAJAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgGIASAAIgIAPQgCAFgHAAg");
	this.shape_5.setTransform(10.7,28.4,0.205,0.205);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA9IAAgMIA9AAQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIAAgEIhRAAIAAgNIBSAAIAHgGIhPAAIAAgKIgJAAIAAgRIAEAAIAAg0IAQAAQACgBACgDIAPAAIAAABIARAAIAEAFIAIgFIAWAAIgBABIAcAAIAAA2IAEAAIAAARIgIAAIAAAGIgMAKIAVAAIAAANIgXAAIAAAMQABAHgMAAgAgoAMIBRAAIAAgGIhRAAgAgmgEIBNAAIAAgHIgSAAIAGAEIgWAAIgFgEIgEAEIgVAAIAQgLIgNgJIgQAAIAAAFIAQAAIAAAMIgQAAgAALgSIAKAHIAAgLIASAAIAAgGIgQAAgAgWgeIASAAIAEAEIAGgEIAPAAIAAgCIgRgBIgEgFIgGAFIgQAAgAALguIAKAJIAAgDIASAAIAAgFIgSAAIAAgIgAgmgnIAQAAIAAABIAMgIIgLgIQAAALgNAAIgEAAg");
	this.shape_6.setTransform(6.4,28.4,0.205,0.205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA/IAAghIg1AAIAAgQIA1AAIAAgEIARAAIAAAEIA1AAIAAAQIg1AAIAAAhgAAlA+QgIAAgDgHIgJgVIAUAAIAFALQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAPAAIAAAOgAg8A+IAAgOIASAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBIAEgKIATAAIgHAUQgCAHgKAAgAgTAIIAAg/IAHAAIACgHIAQAAIgDAHIAPAAIAAA1QAAAKgKAAgAgFgEIAGAAQADAAAAgEIAAgIIgJAAgAgFgdIAJAAIAAgMIgJAAgAAVAHIAAgJIACgEIALgRIgNAAIAAgNQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAOgVIAUAAIgQAYIARAAIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgQAWIAGAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAPAAIAAAMQAAAIgNAAgAg9AHIAAgJIACgEIANgRIgOAAIAAgNQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIARgVIATAAIgSAYIASAAIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgSAWIAGAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAOAAIAAAMQAAAIgMAAg");
	this.shape_7.setTransform(2,28.4,0.205,0.205);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmA+QgJAAgFgJIgJgaIgKAaQgDAJgFAAIgQAAIAAgQIAFAAQAFAAACgEIAJgfIgVAAIAAgOIAYAAIAAgiIgQAAIAAgQIAQAAIAAgIIATAAIAAAIIAfAAIAAAyIAHAAIAAAOIgiAAIANAfQADAEAFAAIALAAIAAAQgAAYgDIAMAAIAAgiIgMAAgAgnA+IAAhWIgFAAIAABOIgRAAIAAhtIARAAIAAAPIAFAAIAAgVIARAAIAAAVIAFAAIAAAQIgFAAIAABWg");
	this.shape_8.setTransform(-2.2,28.4,0.205,0.205);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA/IAAgPIACAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAhQIgEAAIgDBMQgBALgEAEQgEAGgGAAIgIAAIAAgPIADAAQAEAAAAgJIADhJIgIAAIAAgQIAJAAIAAgKIAQAAIAAAKIAUAAIAABkQAAANgPABgAg8A+IAAgOIAeAAIAAgDIgcAAIAAgOIAcAAIAAgDIgaAAIAAgzIAaAAIAAgDIgdAAIAAgOIAdAAIAAgEIgbAAIAAgOIAyAAQAEAAABgDIAQAAQgBAJgEAEQgEAEgFAAIgOAAIAAAEIAcAAIAAAOIgcAAIAAADIAZAAIAAApQAAAKgLAAIgOAAIAAADIAbAAIAAAOIgbAAIAAADIAaAAIAAAOgAgOAPIAHAAQAEAAAAgEIAAgCIgLAAgAgoAPIAKAAIAAgGIgKAAgAgOgDIALAAIAAgGIgLAAgAgogDIAKAAIAAgGIgKAAg");
	this.shape_9.setTransform(-6.6,28.4,0.205,0.205);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATA/IAAgNIAOAAQAEAAAAgGIAAgFIhCAAIAAgOIBCAAIAAgDIAQAAIAAADIAGAAIAAAOIgGAAIAAAJQAAAGgEAFQgDAEgHAAgAg3A+IAAhRIgGAAIAAgRIAEAAQACAAABgEIAHgWIATAAIgCAFIAhAAIAAgEIASAAIAAAEIAnAAIAAANIgnAAIAAAEIAkAAIAAAjQAAAFgFACIAKAAQgBALgEADQgDAEgIAAIhOAAIAAgMIAjAAIAAgFIggAAIAAgrIAgAAIAAgEIgjAAIAAgHIgGAQIAABhgAAVAIIATAAQADAAABgFIgXAAgAAVgHIAQAAQADAAAAgEIAAgBIgTAAgAgLgHIAOAAIAAgFIgOAAgAAVgXIATAAIAAgFIgTAAgAgLgXIAOAAIAAgFIgOAAgAgJA8QgEAAgCgEIgHgOIAUAAIACAFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAOAAIAAAMg");
	this.shape_10.setTransform(-10.9,28.4,0.205,0.205);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjA9QgOAAgGgMIgPghIgRAhQgHAMgNAAIgYAAIAAgSIAOAAQAHAAAEgFIAVglIgtAAIAAgQIAzAAIAAgcIgvAAIAAgRIBxAAIAAARIgvAAIAAAcIA0AAIAAAQIgvAAIAUAlQAFAFAGAAIAQAAIAAASg");
	this.shape_11.setTransform(-15.2,28.4,0.205,0.205);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBDAAIAAgYIhDAAIAAg3IBVAAIAAATIg/AAIAAAXIAvAAQAKAAAGAEQAEACAAAKIAAAVQAAAJgHAFQgFAEgJABg");
	this.shape_12.setTransform(-19.6,28.4,0.205,0.205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAyQgPgBgGgEQgHgFABgPIAAgyQgBgNAGgGQAGgEANAAIBDAAIAAATIhFAAIAAAXIAwAAQAPAAAFAEQAGACgBAMIAAAPQAAAWgYABgAgZAfIAzAAIAAgYIgzAAg");
	this.shape_13.setTransform(-23.9,28.4,0.205,0.205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBDAAIAAgYIg3AAIAAgOIA3AAIAAgWIhDAAIAAgTIBCAAQAXgBAAASIAAAQQAAAHgDAEQgDADgGABIAKAGQACAFAAAFIAAARQAAARgXAAg");
	this.shape_14.setTransform(-28.2,28.4,0.205,0.205);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAODPQg7AAAAgiIAAlzIBnAAIAACrIB2AAQATAAAAgbIAAhwIBoAAIAACKQAAAagZAPQgWAPgnAAIibAAIAABvQAAAKATAAID8AAIAAA6gAkADPIAAjxIhIAAIAAhAIA8AAQAQAAAJgSIAwhaIBtAAIhFB9IAAEgg");
	this.shape_15.setTransform(22.9,20.1,0.205,0.205);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ADKDSQgwAAgkgYIh4hUIhtBJQgwAghBAAIhsAAIAAg9IBMAAQAqAAAbgTIByhJIjUiRICHAAICYBeICUheICHAAIjSCLICHBUQAaASAjgBIA9AAIAAA9gAlLhzIAAg7IETAAIAAgjIB6AAIAAAjIELAAIAAA7g");
	this.shape_16.setTransform(7.8,20.1,0.205,0.205);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AD7DRQgdAAgXgSIgygqIghAhQgbAXgigBIhWAAIAAgxIAdAAQAaAAAfgcIAggdIiIhxIBzAAIBPA9IBIg/IBzAAIh7BxIA+AzQAPANAUAAIAaAAIAAAxgAjgDQIAAlBIhjAAIAAg1IBjAAIAAgqIBRAAIAAAqIBXAAIAAA1IhXAAIAAFBgAlRC7IAAgzQAPgBABgRIASjSIBLAAIgTDoQgBAXgSAMQgRAMgZAAgAhLC5QgoAAgFgpIgVjsIBJAAIATDWQADAQANAAIAAAvgADzgiQgYAAgPgWIgog/IBfAAIANAeQAFAJALAAIAyAAIAAAugAghgiIAAguIAhAAQAKAAAEgJIARgeIBdAAIgrA/QgOAWghAAgAgkiGIAAg4ICGAAIAAgSIBkAAIAAASICLAAIAAA4g");
	this.shape_17.setTransform(-22.6,20.1,0.205,0.205);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BpIAAjRIApAAIAACgIBIAAIAAAxg");
	this.shape_18.setTransform(16.8,-26.7,0.205,0.205);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BMQgTgcAAgwQAAgwAUgdQAUgeAkgBQAmABAVAfQASAcAAAwQAAAwgTAdQgUAfgmAAQglABgUghgAggAAQAAAhALAPQAJANAMAAQAOAAAJgNQALgOAAgiQAAg9giAAQggABAAA8g");
	this.shape_19.setTransform(13.6,-26.7,0.205,0.205);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BMQgSgcAAgwQAAgwAUgdQAUgeAkgBQAmABAUAfQATAcAAAwQAAAwgTAdQgUAfgmAAQglABgVghgAggAAQAAAhALAPQAJANAMAAQANAAAKgNQALgOAAgiQAAg9giAAQggABAAA8g");
	this.shape_20.setTransform(10.1,-26.7,0.205,0.205);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBpIAAhXIgxAAIAABXIgqAAIAAjRIAqAAIAABNIAxAAIAAhNIAqAAIAADRg");
	this.shape_21.setTransform(6.7,-26.7,0.205,0.205);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BKQgQgcAAguQgBgzAXgeQAUgbAeAAQA0AAAPBDIgnANQgHghgVAAQgdAAAAA9QgBA9AdAAQAXAAAHgqIAnAQQgOBJg2AAQgjABgVgjg");
	this.shape_22.setTransform(3.4,-26.7,0.205,0.205);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BNQgJgRgBgcIAogFQAFAlAUAAQALAAAGgFQAHgHAAgJQAAgLgIgFQgFgDgUgIQgzgPAAgvQAAgeAUgSQAQgOAYAAQAkAAAPAZQAHAOADAcIgoADQgCgMgDgGQgGgJgLAAQgSAAAAAOQgBAIAJAGIAVAIQAXAHAMALQAVAQAAAhQAAAWgJASQgRAfgngBQgnABgRggg");
	this.shape_23.setTransform(0.3,-26.7,0.205,0.205);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBpIAAhZIg4h4IAvAAIAdBIIAfhIIAuAAIg5B4IAABZg");
	this.shape_24.setTransform(-4,-26.7,0.205,0.205);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BpIAAjRIA8AAQAUAAAIADQAMADAHAKQAOASABAgQgBAogXARQgMAJgaAAIgSAAIAABNgAgSgOIALAAQAKAAAGgCQAKgFAAgQQAAgKgEgHQgFgGgRAAIgLAAg");
	this.shape_25.setTransform(-7,-26.7,0.205,0.205);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIA9AAQAUAAAIADQALADAIAKQAPATAAAfQAAAngYASQgMAJgaAAIgTAAIAABNgAgTgOIAMAAQAKAAAGgCQALgFAAgQQAAgKgFgHQgFgGgRAAIgMAAg");
	this.shape_26.setTransform(-10,-26.7,0.205,0.205);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAjBpIgKgoIgzAAIgKAoIgrAAIA6jRIAqAAIA7DRgAgOATIAcAAIgOg+g");
	this.shape_27.setTransform(-13.1,-26.7,0.205,0.205);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYBpIAAhXIgwAAIAABXIgqAAIAAjRIAqAAIAABNIAwAAIAAhNIArAAIAADRg");
	this.shape_28.setTransform(-16.5,-26.7,0.205,0.205);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIALBNIANhMIAVAAIAMBNIALhOIAaAAIgaCJg");
	this.shape_29.setTransform(11.5,10.9,0.205,0.205);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLBQQgDgMAAgaIAAgyIgJAAIAAgkIAJAAIAAgZIAXgaIAAAzIANAAIAAAkIgNAAIAAA9QABAFADAAQACAAAHgEIACAkIgCABQgJAFgGAAQgNAAgFgQg");
	this.shape_30.setTransform(9.8,10.5,0.205,0.205);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_31.setTransform(8.8,11.9,0.205,0.205);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAfBGIAAhMQABgZgJAAQgLAAABAgIAABFIgYAAIgBhcQgDgJgEAAQgIAAgCAOQgBAEAAAPIAABEIgaAAIAAiIIAYAAIAAAPQAJgSANAAQANAAAGAUQAKgUANAAQASAAAGAbQABAJAAASIAABVg");
	this.shape_32.setTransform(7.1,10.9,0.205,0.205);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAyQgKgUAAgeQAAgcAKgVQALgWARAAQATAAALAYQAJATAAAcQAAAcgJAVQgLAXgTAAQgQAAgMgWgAgIgZQgEAKAAAPQAAAQADAJQAEAKAFAAQAFAAAEgJQAEgIAAgSQAAgNgDgKQgDgLgHAAQgEAAgEAJg");
	this.shape_33.setTransform(4.8,11,0.205,0.205);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAyQgJgUAAgeQAAgeAJgSQAJgXATAAQARAAAIAPQAHAKAFAbIgYAHQgDgWgJAAQgMAAAAAiQAAAjAMAAQAJAAADgYIAZAHQgEAXgGANQgKASgRAAQgTAAgKgWg");
	this.shape_34.setTransform(3.1,11,0.205,0.205);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_35.setTransform(1.8,11.9,0.205,0.205);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBaIgGgMIAAAPIgYAAIAAi9IAZAAIAAA+QAIgOAJAAQAPAAAIAVQAIAVAAAcQAAAhgIAVQgJAVgOAAQgHAAgFgHgAgLAXQAAAVAGAJQADAFACAAQALAAAAgjQAAghgLAAQgLAAAAAhg");
	this.shape_36.setTransform(0.5,10.4,0.205,0.205);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTA+QgKgKgFgWQgCgQAAgOQAAgdAIgTQAKgXASAAQAmAAgBBVIgwAAQACAYAJAAQAIAAAEgPIAYAFQgEAUgGAJQgJAPgRAAQgLAAgIgKgAgHgeQgEAHAAAKIAXAAQgCgZgKABQgEAAgDAHg");
	this.shape_37.setTransform(-1.1,11,0.205,0.205);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgLBMIgWAAIgaiJIAZAAIALBNIAMhMIAWAAIAMBNIALhOIAZAAIgZCJg");
	this.shape_38.setTransform(-3.2,10.9,0.205,0.205);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYA+QgFgGgCgIQgDgQAAgQIAAhVIAaAAIAABaQADALAFAAQAEAAAEgLQACgJAAgSIAAg/IAZAAIAACJIgXAAIAAgSQgIAUgOAAQgIAAgGgIg");
	this.shape_39.setTransform(-5.3,11,0.205,0.205);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcBMQgIgXAAgfQAAgjAKgTQAIgQANAAQAJAAAIAOIAAg+IAZAAIAAC9IgXAAIAAgQQgHAUgNAAQgNAAgJgVgAgLAYQAAAUAGAJQADAFACAAQAEAAAEgGQAEgKAAgTQAAgPgDgIQgDgKgGAAQgLAAAAAig");
	this.shape_40.setTransform(-7.1,10.4,0.205,0.205);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUA+QgJgLgFgVQgCgMAAgSQAAgdAIgTQAKgXASAAQAmAAgBBVIgwAAQACAYAJAAQAHAAAFgPIAYAFQgEAUgGAJQgJAPgRAAQgLAAgJgKgAgHgeQgEAHAAAKIAXAAQgCgZgKABQgEAAgDAHg");
	this.shape_41.setTransform(-8.8,11,0.205,0.205);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_42.setTransform(-10.1,11.9,0.205,0.205);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIAMBNIAMhMIAVAAIANBNIALhOIAZAAIgZCJg");
	this.shape_43.setTransform(-11.7,10.9,0.205,0.205);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIAMBNIAMhMIAVAAIANBNIALhOIAZAAIgZCJg");
	this.shape_44.setTransform(-14.2,10.9,0.205,0.205);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgLBMIgWAAIgaiJIAaAAIALBNIAMhMIAVAAIAMBNIAMhOIAYAAIgYCJg");
	this.shape_45.setTransform(-16.6,10.9,0.205,0.205);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AnfAGIAAgLIO+AAIAAALg");
	this.shape_46.setTransform(-20.4,3.2,0.205,0.205);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ai6AIIAAgPIF1AAIAAAPg");
	this.shape_47.setTransform(-12.8,-1.2,0.205,0.205);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkTAFIAAgJIInAAIAAAJg");
	this.shape_48.setTransform(-4.6,-3.3,0.205,0.205);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Am3AGIAAgLINvAAIAAALg");
	this.shape_49.setTransform(-8.6,-3.8,0.205,0.205);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AnyAIIAAgPIPlAAIAAAPg");
	this.shape_50.setTransform(-6.9,-7.4,0.205,0.205);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AmtAGIAAgLINbAAIAAALg");
	this.shape_51.setTransform(-3.1,-9.3,0.205,0.205);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AnaAHIAAgNIO1AAIAAANg");
	this.shape_52.setTransform(-5.7,-9.8,0.205,0.205);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AnfAIIAAgPIO/AAIAAAPg");
	this.shape_53.setTransform(-7,-16.1,0.205,0.205);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ABoD9QifgGhVgtQhmg6g5guQgbgagygXQhjguhvALIgtkLIAiADQArAGAtALQCQAjBuBPIAlAcQAuAhAwAbQCYBVBwgIIAbAAQAhgCAigMQBugjBMh2IDUBKQgfA7g/BEQh/CHijAjQgrAEgxAAIg0gBg");
	this.shape_54.setTransform(13.9,-10,0.205,0.205);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AE3DYQAeghAZgtQAxhbgdg6QgMgbgggZQhBgyhpAIQgRACgbAGQg1ANgxAYQgiARg1ARQhrAghagBQgzAFhJgZQiSg2hsicIDbhvIAoBCQAzBBA9AAIAqgBQA3gHA+gbIB0gjQCFgjBMADIAtAHQA4AKA1AUQCpBABLCNIALAiQAKApgCAvQgGCWiACCg");
	this.shape_55.setTransform(8.3,4.2,0.205,0.205);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("Ah4B5QgzgyAAhHQAAhGAzgyQAygzBGAAQBHAAAzAzQAyAyAABGQAABHgyAyQgzAzhHAAQhGAAgygzg");
	this.shape_56.setTransform(13.3,-15.8,0.205,0.205);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A0C6").s().p("AjZDtIAAi0ID/AAIAAklIC0AAIAAHZg");
	this.shape_57.setTransform(24.4,7.5,0.205,0.205);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgrAwIAAhfIAlAAIAAA6IAyAAIAAAlg");
	this.shape_58.setTransform(-24.2,7.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AjYDtIAAnZIGxAAIAAC0Ij9AAIAAElg");
	this.shape_59.setTransform(-24.2,-24.2,0.205,0.205);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7FC31C").s().p("AAHAwIAAg6IgyAAIAAglIBXAAIAABfg");
	this.shape_60.setTransform(24.4,-24.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("A4wYxMAAAgxhMAxhAAAMAAAAxhg");
	this.shape_61.setTransform(0,0,0.205,0.205);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003366").s().p("Am8GpIAAtRIN5AAIAANRg");
	this.shape_62.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_62}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,65,65);


(lib.共用方按鈕2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(2,1,1).p("AIBjGIwAAAQguAAAABFIAAEDQAABFAuAAIQAAAQAtAAAAhFIAAkDQAAhFgtAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6600","#FFFFCC","#FFCC00","#FF6600"],[0,0.149,0.769,1],0.1,-22.1,0,22.3).s().p("An/DHQguAAAAhFIAAkDQAAhFAuAAIQAAAQAtAAAABFIAAEDQAABFgtAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.8,-19.9,111.7,39.9);


(lib.共用方按鈕 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CC99").ss(2,1,1).p("AIBjGIwAAAQguAAAABFIAAEDQAABFAuAAIQAAAQAtAAAAhFIAAkDQAAhFgtAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFCC","#FFFFCC","#33FFCC","#33CC99"],[0,0.133,0.871,1],0.1,-22.1,0,22.3).s().p("An/DHQguAAAAhFIAAkDQAAhFAuAAIQAAAQAtAAAABFIAAEDQAABFgtAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.8,-19.9,111.7,39.9);


(lib.board3 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiOAwQg7g5AAhUIABgOQAEBLA2A0QA8A7BSAAQBTAAA8g7QA2g0AEhLIABAOQAABUg7A5Qg8A8hTAAQhSAAg8g8g");
	this.shape.setTransform(20.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiOCPQg2g2gEhLIgBgOQAAhSA7g8QA8g7BSAAQBTAAA8A7QA7A8AABSIgBAOQgEBLg2A2Qg8A7hTAAQhSAAg8g7g");
	this.shape_1.setTransform(20.3,20.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,43.4);


(lib.星星亮燈動畫10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.text = new cjs.Text("0", "42px DFYuanUBold-B5", "#666600");
	this.text.lineHeight = 42;
	this.text.setTransform(-0.5,-15.2,0.667,0.667);

	this.text_1 = new cjs.Text("1", "42px DFYuanUBold-B5", "#666600");
	this.text_1.lineHeight = 42;
	this.text_1.setTransform(-14.5,-15.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{color:"#666600"}},{t:this.text,p:{color:"#666600"}}]}).to({state:[{t:this.text_1,p:{color:"#FF9900"}},{t:this.text,p:{color:"#FF9900"}}]},1).to({state:[{t:this.text_1,p:{color:"#666600"}},{t:this.text,p:{color:"#666600"}}]},4).to({state:[{t:this.text_1,p:{color:"#FF9900"}},{t:this.text,p:{color:"#FF9900"}}]},4).to({state:[{t:this.text_1,p:{color:"#666600"}},{t:this.text,p:{color:"#666600"}}]},4).to({state:[{t:this.text_1,p:{color:"#FF9900"}},{t:this.text,p:{color:"#FF9900"}}]},4).to({state:[{t:this.text_1,p:{color:"#666600"}},{t:this.text,p:{color:"#666600"}}]},4).to({state:[{t:this.text_1,p:{color:"#FF9900"}},{t:this.text,p:{color:"#FF9900"}}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgpBoQgQgPAAgVQAAgLAIgGQAGgGAKABQASgBAEARQACAJAGABQAMAAADgdQgIAEgKAAQgZAAgPgXQgOgWAAgiQAAgkANgVQAPgdAgAAQAgABAPAeQAOAbAAA3QAAA6gOAfQgQAjgiAAQgWAAgQgPgAgKg7QgBAGAAAUQAAAhALABQAHAAADgKQACgHAAgSQAAgmgMABQgHAAgDAMg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgpBoQgQgPAAgVQAAgLAIgGQAGgGAKABQASgBAEARQACAJAGABQAMAAADgdQgIAEgKAAQgZAAgPgXQgOgWAAgiQAAgkANgVQAPgdAgAAQAgABAPAeQAOAbAAA3QAAA6gOAfQgQAjgiAAQgWAAgQgPgAgKg7QgBAGAAAUQAAAhALABQAHAAADgKQACgHAAgSQAAgmgMABQgHAAgDAMg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AguBgQgPgUAAgfQAAggASgUQgOgQAAgdQAAgfAQgSQAPgRAaAAQAdAAAQAWQANARAAAbQAAAcgOARQASASAAAiQAAAhgRAVQgRATgcABQgdAAgRgXgAgMAsQAAAcAMAAQANAAAAgcQAAgegNAAQgMAAAAAegAgIgyQAAAUAIAAQAKAAAAgUQAAgVgKAAQgIAAAAAVg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AguBgQgPgUAAgfQAAggASgUQgOgQAAgdQAAgfAQgSQAPgRAaAAQAdAAAQAWQANARAAAbQAAAcgOARQASASAAAiQAAAhgRAVQgRATgcABQgdAAgRgXgAgMAsQAAAcAMAAQANAAAAgcQAAgegNAAQgMAAAAAegAgIgyQAAAUAIAAQAKAAAAgUQAAgVgKAAQgIAAAAAVg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgSBvQgHgGAAgKIABgHIAkiZQABgFgFAAIgQAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIAAASQAAAKgHAFQgHAGgKAAQgKAAgHgGQgIgFAAgKIAAglQAAgOAJgIQAJgJAQAAIA5AAQAgAAAAAhQAAAKgEASIgmCbQgFATgQAAQgKAAgHgHg");
	this.shape.setTransform(0.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgSBvQgHgGAAgKIABgHIAkiZQABgFgFAAIgQAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIAAASQAAAKgHAFQgHAGgKAAQgKAAgHgGQgIgFAAgKIAAglQAAgOAJgIQAJgJAQAAIA5AAQAgAAAAAhQAAAKgEASIgmCbQgFATgQAAQgKAAgHgHg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgvBYQgNgcAAg3QAAg6AOgeQAQgjAiAAQAVAAARAPQAPAOAAAVQAAALgHAHQgHAFgJAAQgTAAgEgQQgCgKgGAAQgMAAgCAdQAHgFAKAAQAaAAAOAYQAPAWAAAiQAAAjgNAXQgQAcggAAQgggBgPgegAgJAKQgCAHAAASQAAAlALAAQAIAAACgMQACgHAAgTQAAgigMAAQgGAAgDAKg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgvBYQgNgcAAg3QAAg6AOgeQAQgjAiAAQAVAAARAPQAPAOAAAVQAAALgHAHQgHAFgJAAQgTAAgEgQQgCgKgGAAQgMAAgCAdQAHgFAKAAQAaAAAOAYQAPAWAAAiQAAAjgNAXQgQAcggAAQgggBgPgegAgJAKQgCAHAAASQAAAlALAAQAIAAACgMQACgHAAgTQAAgigMAAQgGAAgDAKg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape.setTransform(0.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAIBxQgIgGABgJIAAgRIgqAAQgMAAgGgIQgIgGABgMQAAgKAEgNIA5iFQAFgRAVAAQALAAAHAHQAJAHAAANIAAB+QAJAAAFAGQAGAHAAAJQAAAKgGAGQgFAIgJAAIAAARQgBAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIANAAIAAgng");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAIBxQgHgGgBgJIAAgRIgpAAQgMAAgHgIQgGgGgBgMQABgKAFgNIA4iFQAFgRAUAAQALAAAIAHQAIAHAAANIAAB+QAKAAAGAGQAEAHAAAJQAAAKgEAGQgGAIgKAAIAAARQAAAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIAMAAIAAgng");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgvBhQgOgRgBgXQAAgOAHgHQAIgIAKABQAIAAAHAEQAHAFABAKQADAYALAAQAOAAAAgcQABgQgIgGQgFgFgIABQgLgBgHgHQgGgHAAgIQAAgKAHgHQAFgHAMAAQAHAAAEgEQAEgFABgNQAAgMgCgDQgCgFgGAAQgHAAgEATQgBAJgGAFQgGAEgIABQgMAAgHgIQgIgIABgNQAHg4A0AAQAbAAAPAWQAOASAAAcQAAAbgOARQAUASAAAhQAAAegOAUQgRAYggAAQgdAAgSgWg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AguBhQgQgRAAgXQAAgOAIgHQAHgIAKABQAJAAAFAEQAIAFABAKQAEAYAKAAQAPAAAAgcQgBgQgGgGQgGgFgJABQgLgBgGgHQgGgHAAgIQAAgKAGgHQAHgHAKAAQAIAAAFgEQAEgFgBgNQABgMgBgDQgDgFgGAAQgIAAgCATQgCAJgGAFQgGAEgJABQgKAAgJgIQgHgIABgNQAGg4A0AAQAcAAAQAWQANASAAAcQAAAbgNARQATASAAAhQAAAegOAUQgQAYghAAQgdAAgRgWg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape.setTransform(0.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape_1.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.星星亮燈動畫1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAABxQgGgGAAgLIAAiOQgFACgEAAQgLAAgHgHQgHgHAAgKQAAgLAKgJIAdgWQAIgIALABQAXgBAAAcIAAC6QAAALgIAGQgGAGgLgBQgJABgHgGg");
	this.shape.setTransform(-0.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAABxQgGgGAAgLIAAiOQgFACgFAAQgKAAgHgHQgHgHAAgKQAAgLALgJIAdgWQAHgIALABQAXgBAAAcIAAC6QAAALgHAGQgIAGgJgBQgLABgGgGg");
	this.shape_1.setTransform(-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).wait(1));

	// star
	this.instance = new lib.img04();
	this.instance.setTransform(-29.9,-29.9);

	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(-29.9,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.WindowsXP大考驗 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AJACCQgTgQAAgcQAAgJAFgFQAEgFAQgFQAQgGAEAAQADAAACADQACADAAADQAAADgFAKQgEAKAAAIQAAAOALAKQAKAKAQAAQAYAAAOgXQAOgYAAgdQAAgWgKgNQgKgPgOABIgPABQgGABAAgHQAAgLADgCQADgDAGAAQARAAAKgDQAKgCAIgKQAJgKAFgPQAFgPAAgPQAAgRgLgMQgLgMgRAAQgQABgLAIQgMAKAAANQAAAFADAGQADAIAAADQAAAGgOAHQgOAIgGAAQgFgBgDgFQgDgGAAgIQAAgZAbgZQAagXApAAQAhAAAVARQAVATAAAaQAAAzhJAVQA5ASAAAyQAAAmggAZQggAagxAAQglAAgUgQgAhhCIQgVAHgSAAQgaAAgSgNQgVgPAAgdQAAgfAagRQAVgMAdAAQARAAAWAHQgGgYgeAAQgigBgcATIgMgfQAggZArAAQBiAAAAB1QAAAbgFAZIhHAEIACgIgAhYBjIADgeQgTgJgOAAQgdAAAAATQAAAFADAEQADAEAFAAQAMABAJgHQAGgEALgMgAHKCCQAPgpAAgdQAAgugUgBQgTAAgRAZIAHBdIhFAMIASkCIAgAFIAIBiQAUgRAZAAQAnAAAUAgQAQAeAAAxQAAAVgDAogADGB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHATAQIgSAfQgXgXggAAQgRAAgMAJQgNALAAASQAAAOAKAKQAJAKANAAQAQAAASgMQAQgLALgRIAhBCQgNAQgbALQgYAIgXABQgkgBgagVgAAoBuQgJgXAAguIAAgXIghAAIgHgiIAtgHQAEghAJggIAjAGQgGAfgDAVIA5gIIALA4IhIAAIAAABQAAAwAWAAQAQABANgYIAhBBQgfAhghABQglgBgOgggAligdIAjAGIACARQAZgXAdAAQARAAAUAHIgRBDQgbgWgPgBQgOABgMAPIAMBdIhHAMgAohB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHAUAQIgTAfQgXgXgfAAQgSAAgLAJQgNALAAASQAAAOAJAKQAKAKAMAAQARAAASgMQAQgLAKgRIAiBCQgOAQgaALQgYAIgYABQgkgBgagVgAr5BdIAkhGQAgA9AfAAQAJAAAJgHQAIgGAAgLQAAgRgTgJQgmgTgbgPQgdgPAAgiQAAgiAcgSQAWgOAeAAQAqAAAmAjIgRAlQgkgcglAAQgIAAgGAEQgHAHAAAKQAAAGAIAFIARAJQAaANAgASQAlAWAAAtQAAAkgaAVQgWARgdABQg7gBgtgxg");
	this.shape.setTransform(162.7,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AscBZQAzgMANgmQAJgUAAgxIAhADIACAmQAABphLAkgAFFBeQAIACAJgBQAqABAIgYIibgBIANghIgpASIgeg4QA8gKAxgXIhcAEIgEgdIBogLIACgUIhCACIgFgfIBOgIIADgWIAhACIABAQIA8gHIADAVIAXgZIAWAUQgPAUgQASIAwgFIAIAwIhoADQgPAOgRALQAzgKArgPIANAsQhNARhGABIgDASICLgQQgDAxgFAUQgIAbgUANQgUAMgpADgAFZhaIABAPIAPgBIASgPgAnGg+IBTgEIAJgVIhvADIgFgjIEbgbIAJA2IiDADIgBAVIBwgHIASDUIhCAIIABgNIiaAGIABAHIhCAFgAmZBoIARgCIAMiCIgmAAgAlVBMIABAUIAXgCIACgTgAkKBXIARgCIAHhsIghgBgAlXAvIAegHIABgQIghAAgAlbgCIAmgGIABgRIgpgCgAKsB6QgIAQgLAJIgagcQgNAbgcABIgLgrIgMACQAAgdgJgfIAOgFQAOAbAFAaQAKgEAFgQIgQAEQgBgTgHgUIAOgFQAJALAFALQACgNABgQIg6AGIAAAFIgyAFIANisIAdACIAAADIBXgYIAIAqIgoAGIAAAJIAYgHIACAOQA1gPAdgzIAZANIgCAFQAZAYAyAWIgdAwIgWgRIADAVIhXALIgEgVQgJAIgKAFIgVgxIADASIgaAFIABAKIAXgHIAGAkIgaAFIABAMIAfgGQABAJAAAyIgBAMIAIhIIA/gOIAIBHIAFg+IA/gRIALBVIgmAFIABgEIgJACIAAAGIgjAEIABgEIgfAEIABgEIgJABIAAAEIgHAAIAPAJQgBAHgCAHQAOAHAPALQAWgPANgcIAVAKIgEAQQASAHASAQIgbAhIgTgbQgJAQgMALIgUgWIgUAWIgUgbgAKKBKQgCAUgFAPQAVgNANgagAKuApIAMgGIABgYIgQgBgAL1AEIACAdIAOgFIACgZgAIxgFIABANIAMgDIABgNgAIvgvIABARIARgGIABgOgAK1g5IA3gPQgMgNgJgQQgOAagUASgAIshcIACARIAWgGIAAgOgApvggIAhACIAPCsIg/AGgAiTBJQAygOAdgcQAbgbALgnIhhADIgFgiIBugMQADgdAAgnIAkAGIAAA5IBqgMIAJA4Ih0ADQAkBSBeAaIgmBEQhLgvghhOQgQAsgdAiQgdAjgjARgAH7CAQALgdADg0IAUACIAABZgAIgA0IAPgDQAMAlADAhIgaAJIgEhMgAsvg8QBbggA/g8IAWAaIgEAFQA4AnBPAUIggA2QhIgfg2g2QgzA6hCAig");
	this.shape_1.setTransform(328.7,19.3);

	// 圖層 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8BgIAAi/ID5AAIAAC/g");
	this.shape_2.setTransform(394.6,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IBgAAIAAB/g");
	this.shape_3.setTransform(294.2,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(6,1,1).p("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");
	this.shape_4.setTransform(248.4,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AscBZQAzgMANgmQAJgUAAgxIAhADIACAmQAABphLAkgAFFBeQAIACAJgBQAqABAIgYIibgBIANghIgpASIgeg4QA8gKAxgXIhcAEIgEgdIBogLIACgUIhCACIgFgfIBOgIIADgWIAhACIABAQIA8gHIADAVIAXgZIAWAUQgPAUgQASIAwgFIAIAwIhoADQgPAOgRALQAzgKArgPIANAsQhNARhGABIgDASICLgQQgDAxgFAUQgIAbgUANQgUAMgpADgAFZhaIABAPIAPgBIASgPgAnGg+IBTgEIAJgVIhvADIgFgjIEbgbIAJA2IiDADIgBAVIBwgHIASDUIhCAIIABgNIiaAGIABAHIhCAFgAmZBoIARgCIAMiCIgmAAgAlVBMIABAUIAXgCIACgTgAkKBXIARgCIAHhsIghgBgAlXAvIAegHIABgQIghAAgAlbgCIAmgGIABgRIgpgCgAKsB6QgIAQgLAJIgagcQgNAbgcABIgLgrIgMACQAAgdgJgfIAOgFQAOAbAFAaQAKgEAFgQIgQAEQgBgTgHgUIAOgFQAJALAFALQACgNABgQIg6AGIAAAFIgyAFIANisIAdACIAAADIBXgYIAIAqIgoAGIAAAJIAYgHIACAOQA1gPAdgzIAZANIgCAFQAZAYAyAWIgdAwIgWgRIADAVIhXALIgEgVQgJAIgKAFIgVgxIADASIgaAFIABAKIAXgHIAGAkIgaAFIABAMIAfgGQABAJAAAyIgBAMIAIhIIA/gOIAIBHIAFg+IA/gRIALBVIgmAFIABgEIgJACIAAAGIgjAEIABgEIgfAEIABgEIgJABIAAAEIgHAAIAPAJQgBAHgCAHQAOAHAPALQAWgPANgcIAVAKIgEAQQASAHASAQIgbAhIgTgbQgJAQgMALIgUgWIgUAWIgUgbgAKKBKQgCAUgFAPQAVgNANgagAKKBGIAAgGgAKuApIAMgGIABgYIgQgBgAL1AEIACAdIAOgFIACgZgAIxgFIABANIAMgDIABgNgAIvgvIABARIARgGIABgOgAK1g5IA3gPQgMgNgJgQQgOAagUASgAIshcIACARIAWgGIAAgOgApvggIAhACIAPCsIg/AGgAiTBJQAygOAdgcQAbgbALgnIhhADIgFgiIBugMQADgdAAgnIAkAGIAAA5IBqgMIAJA4Ih0ADQAkBSBeAaIgmBEQhLgvghhOQgQAsgdAiQgdAjgjARgAH7CAQALgdADg0IAUACIAABZgAIgA0IAPgDQAMAlADAhIgaAJIgEhMgAsvg8QBbggA/g8IAWAaIgEAFQA4AnBPAUIggA2QhIgfg2g2QgzA6hCAig");
	this.shape_5.setTransform(328.7,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AJACCQgTgQAAgcQAAgJAFgFQAEgFAQgFQAQgGAEAAQADAAACADQACADAAADQAAADgFAKQgEAKAAAIQAAAOALAKQAKAKAQAAQAYAAAOgXQAOgYAAgdQAAgWgKgNQgKgPgOABIgPABQgGABAAgHQAAgLADgCQADgDAGAAQARAAAKgDQAKgCAIgKQAJgKAFgPQAFgPAAgPQAAgRgLgMQgLgMgRAAQgQABgLAIQgMAKAAANQAAAFADAGQADAIAAADQAAAGgOAHQgOAIgGAAQgFgBgDgFQgDgGAAgIQAAgZAbgZQAagXApAAQAhAAAVARQAVATAAAaQAAAzhJAVQA5ASAAAyQAAAmggAZQggAagxAAQglAAgUgQgAhhCIQgVAHgSAAQgaAAgSgNQgVgPAAgdQAAgfAagRQAVgMAdAAQARAAAWAHQgGgYgeAAQgigBgcATIgMgfQAggZArAAQBiAAAAB1QAAAbgFAZIhHAEIACgIgAhYBjIADgeQgTgJgOAAQgdAAAAATQAAAFADAEQADAEAFAAQAMABAJgHQAGgEALgMgAHKCCQAPgpAAgdQAAgugUgBQgTAAgRAZIAHBdIhFAMIASkCIAgAFIAIBiQAUgRAZAAQAnAAAUAgQAQAeAAAxQAAAVgDAogADGB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHATAQIgSAfQgXgXggAAQgRAAgMAJQgNALAAASQAAAOAKAKQAJAKANAAQAQAAASgMQAQgLALgRIAhBCQgNAQgbALQgYAIgXABQgkgBgagVgAAoBuQgJgXAAguIAAgXIghAAIgHgiIAtgHQAEghAJggIAjAGQgGAfgDAVIA5gIIALA4IhIAAIAAABQAAAwAWAAQAQABANgYIAhBBQgfAhghABQglgBgOgggAligdIAjAGIACARQAZgXAdAAQARAAAUAHIgRBDQgbgWgPgBQgOABgMAPIAMBdIhHAMgAohB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHAUAQIgTAfQgXgXgfAAQgSAAgLAJQgNALAAASQAAAOAJAKQAKAKAMAAQARAAASgMQAQgLAKgRIAiBCQgOAQgaALQgYAIgYABQgkgBgagVgAr5BdIAkhGQAgA9AfAAQAJAAAJgHQAIgGAAgLQAAgRgTgJQgmgTgbgPQgdgPAAgiQAAgiAcgSQAWgOAeAAQAqAAAmAjIgRAlQgkgcglAAQgIAAgGAEQgHAHAAAKQAAAGAIAFIARAJQAaANAgASQAlAWAAAtQAAAkgaAVQgWARgdABQg7gBgtgxg");
	this.shape_6.setTransform(162.7,18.6);

	// 圖層 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("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");
	this.shape_7.setTransform(248.4,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AscBZQAzgMANgmQAJgUAAgxIAhADIACAmQAABphLAkgAFFBeQAIACAJgBQAqABAIgYIibgBIANghIgpASIgeg4QA8gKAxgXIhcAEIgEgdIBogLIACgUIhCACIgFgfIBOgIIADgWIAhACIABAQIA8gHIADAVIAXgZIAWAUQgPAUgQASIAwgFIAIAwIhoADQgPAOgRALQAzgKArgPIANAsQhNARhGABIgDASICLgQQgDAxgFAUQgIAbgUANQgUAMgpADgAFZhaIABAPIAPgBIASgPgAnGg+IBTgEIAJgVIhvADIgFgjIEbgbIAJA2IiDADIgBAVIBwgHIASDUIhCAIIABgNIiaAGIABAHIhCAFgAmZBoIARgCIAMiCIgmAAgAlVBMIABAUIAXgCIACgTgAkKBXIARgCIAHhsIghgBgAlXAvIAegHIABgQIghAAgAlbgCIAmgGIABgRIgpgCgAKsB6QgIAQgLAJIgagcQgNAbgcABIgLgrIgMACQAAgdgJgfIAOgFQAOAbAFAaQAKgEAFgQIgQAEQgBgTgHgUIAOgFQAJALAFALQACgNABgQIg6AGIAAAFIgyAFIANisIAdACIAAADIBXgYIAIAqIgoAGIAAAJIAYgHIACAOQA1gPAdgzIAZANIgCAFQAZAYAyAWIgdAwIgWgRIADAVIhXALIgEgVQgJAIgKAFIgVgxIADASIgaAFIABAKIAXgHIAGAkIgaAFIABAMIAfgGQABAJAAAyIgBAMIAIhIIA/gOIAIBHIAFg+IA/gRIALBVIgmAFIABgEIgJACIAAAGIgjAEIABgEIgfAEIABgEIgJABIAAAEIgHAAIAPAJQgBAHgCAHQAOAHAPALQAWgPANgcIAVAKIgEAQQASAHASAQIgbAhIgTgbQgJAQgMALIgUgWIgUAWIgUgbgAKKBKQgCAUgFAPQAVgNANgagAKKBGIAAgGgAKuApIAMgGIABgYIgQgBgAL1AEIACAdIAOgFIACgZgAIxgFIABANIAMgDIABgNgAIvgvIABARIARgGIABgOgAK1g5IA3gPQgMgNgJgQQgOAagUASgAIshcIACARIAWgGIAAgOgApvggIAhACIAPCsIg/AGgAiTBJQAygOAdgcQAbgbALgnIhhADIgFgiIBugMQADgdAAgnIAkAGIAAA5IBqgMIAJA4Ih0ADQAkBSBeAaIgmBEQhLgvghhOQgQAsgdAiQgdAjgjARgAH7CAQALgdADg0IAUACIAABZgAIgA0IAPgDQAMAlADAhIgaAJIgEhMgAsvg8QBbggA/g8IAWAaIgEAFQA4AnBPAUIggA2QhIgfg2g2QgzA6hCAig");
	this.shape_8.setTransform(328.7,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AJACCQgTgQAAgcQAAgJAFgFQAEgFAQgFQAQgGAEAAQADAAACADQACADAAADQAAADgFAKQgEAKAAAIQAAAOALAKQAKAKAQAAQAYAAAOgXQAOgYAAgdQAAgWgKgNQgKgPgOABIgPABQgGABAAgHQAAgLADgCQADgDAGAAQARAAAKgDQAKgCAIgKQAJgKAFgPQAFgPAAgPQAAgRgLgMQgLgMgRAAQgQABgLAIQgMAKAAANQAAAFADAGQADAIAAADQAAAGgOAHQgOAIgGAAQgFgBgDgFQgDgGAAgIQAAgZAbgZQAagXApAAQAhAAAVARQAVATAAAaQAAAzhJAVQA5ASAAAyQAAAmggAZQggAagxAAQglAAgUgQgAhhCIQgVAHgSAAQgaAAgSgNQgVgPAAgdQAAgfAagRQAVgMAdAAQARAAAWAHQgGgYgeAAQgigBgcATIgMgfQAggZArAAQBiAAAAB1QAAAbgFAZIhHAEIACgIgAhYBjIADgeQgTgJgOAAQgdAAAAATQAAAFADAEQADAEAFAAQAMABAJgHQAGgEALgMgAHKCCQAPgpAAgdQAAgugUgBQgTAAgRAZIAHBdIhFAMIASkCIAgAFIAIBiQAUgRAZAAQAnAAAUAgQAQAeAAAxQAAAVgDAogADGB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHATAQIgSAfQgXgXggAAQgRAAgMAJQgNALAAASQAAAOAKAKQAJAKANAAQAQAAASgMQAQgLALgRIAhBCQgNAQgbALQgYAIgXABQgkgBgagVgAAoBuQgJgXAAguIAAgXIghAAIgHgiIAtgHQAEghAJggIAjAGQgGAfgDAVIA5gIIALA4IhIAAIAAABQAAAwAWAAQAQABANgYIAhBBQgfAhghABQglgBgOgggAligdIAjAGIACARQAZgXAdAAQARAAAUAHIgRBDQgbgWgPgBQgOABgMAPIAMBdIhHAMgAohB5QgdgXAAgnQAAgoAXgXQAXgZAmAAQAaAAATAHQATAHAUAQIgTAfQgXgXgfAAQgSAAgLAJQgNALAAASQAAAOAJAKQAKAKAMAAQARAAASgMQAQgLAKgRIAiBCQgOAQgaALQgYAIgYABQgkgBgagVgAr5BdIAkhGQAgA9AfAAQAJAAAJgHQAIgGAAgLQAAgRgTgJQgmgTgbgPQgdgPAAgiQAAgiAcgSQAWgOAeAAQAqAAAmAjIgRAlQgkgcglAAQgIAAgGAEQgHAHAAAKQAAAGAIAFIARAJQAaANAgASQAlAWAAAtQAAAkgaAVQgWARgdABQg7gBgtgxg");
	this.shape_9.setTransform(162.7,18.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(86.5,4,324,30.6);


(lib.題目對話框框 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AmsEcQlegckWhKQm2h0AAikQAAilG2h1QG2h0JqgBQJrABG1B0QG3B1AAClQAACkm3B0Qm1B1prAAQgwAAhiAKIAHC9g");
	this.shape.setTransform(149.5,48.3,1,1,0,0,0,0,-1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299.1,99.6);


(lib.選項ABC文字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCzIgXhFIh6AAIgWBFIhmAAICIllIBkAAICJFlgAgjAiIBFAAIgihsg");
	this.shape.setTransform(20.8,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AicCzIAAllICnAAQAiAAAUAFQAeAFATATQAbAbgBAlQAAAXgOAUQgQAXgcAHQBLAMAABKQAAAggSAaQgRAagcAKQgaALhFAAgAg6BmIA3AAQAbAAAMgEQAVgIAAgYQAAgZgXgHQgMgFgdAAIgzAAgAg6goIAqAAQAdAAAKgEQAVgGAAgXQAAgWgVgFQgKgDghAAIgmAAg");
	this.shape_1.setTransform(22.6,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah9B/QgngxAAhOQAAhYA0gzQAwgsBIAAQB5gBAiByIhaAVQgTg2guAAQhHAAgBBnQAABoBFAAQA2AAAQhHIBaAbQggB9h8AAQhYgBgug5g");
	this.shape_2.setTransform(20,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,9.2,37.4,35.9);


(lib.說明背景 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(163,200,254,0.749)","rgba(255,255,255,0.749)"],[0.082,0.894],39.3,31,39.3,-218.5).s().p("EgldAYVQh8AAhXhYQhZhYAAh8MAAAgnRQAAh8BZhYQBXhYB8AAMBK6AAAQB8AABZBYQBXBYABB8MAAAAnRQgBB8hXBYQhZBYh8AAgEgnWgL6IAAe4QAADIDLAAMBIiAAAQDMAAAAjIIAA+4QAAjIjMAAMhIiAAAQjLAAAADIg");
	this.shape.setTransform(269.8,162.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgkRASkQjLAAAAjIIAA+4QAAjHDLgBMBIiAAAQDMABAADHIAAe4QAADIjMAAg");
	this.shape_1.setTransform(270.4,184.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,6.5,539.6,311.5);


(lib.說明文字組 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ABPCJIAAkMIEFAAIAAAbIjoAAIAADGIDwAAIAAAaIjwAAIAAARgAgGCJIAAgSIikAAIAAASIgeAAIAAh/IDdAAIAAB/gAiqBdICkAAIAAg5IikAAgAk8CJIAAgfIhOAAIAOhPIBAAAIAAgRIAaAAIAAARIAjAAIAAAZIgjAAIAAAdIAoAAIAAAZIgoAAIAAAfgAltBRIAxAAIAAgdIgrAAgAoMByQApgFAXgPQgcgdgHAAIgOAKIgSgUQAhgQAbgiIAVAJQgEAGgEADIA/AAIAAAXQgdBPhXAMgAnfAzQANAJAZATQAOgOAKgUIg4AAgAHsBTIAAglIAjAAIAAAlgADxBMIAAhMIBeAAIAABMgAEKA1IAsAAIAAgfIgsAAgAB+BMIAAhMIBfAAIAABMgACXA1IAsAAIAAgfIgsAAgAoFAEIAAgTIAmAAIAAgfIgwAAIAAgVIAwAAIAAgcIgCAAQgHAJgUAQIgSgUQAfgTATgbIAcADQgHALgGAEIDOAAIAAAXIgiAAIAAAcIAnAAIAAAVIgnAAIAAAfIAhAAIAAATgAlZgPIAfAAIAAgfIgfAAgAmQgPIAeAAIAAgfIgeAAgAnGgPIAdAAIAAgfIgdAAgAlZhDIAfAAIAAgcIgfAAgAmQhDIAeAAIAAgcIgeAAgAnGhDIAdAAIAAgcIgdAAgAAPgNIgHgKQhbAGiBAAIgLAAIgDgfIAXACIARAAQAnguATgsIAeAIQgXAsgeAmIAVAAQBJAAArgEQgZgYgXgWIAXgRQAsAnArA0IgXAWIgKgNgACZgRIAAhIICSAAIAABIgAC0gpIBcAAIAAgYIhcAAgAHsgdIAAglIAjAAIAAAlg");
	this.shape.setTransform(60.9,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(171.9,77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ABPCJIAAkMIEFAAIAAAbIjoAAIAADGIDwAAIAAAaIjwAAIAAARgAhnCJIAAi9QghBYhFA9IgVgZQBAg3AdhFIhaAAIAAgcIB4AAIAAg4IAeAAIAAA4IB3AAIAAAcIhZAAQAaA/BBA7IgTAbQhDg6gjhbIAAC9gAlJBzIAKgTQAmAFAfANIgKAXQgegNgngJgAm4BzQAqgFAdgOIAOASQghARgpAGgAniCJIAAiBQgMAigUAaIgNgdQAZgbAQgrIgjAAIAAgWIAnAAIAAgpQgTAEgPABIgGgZQA5gFAdgNIALAWQgSAJgNADIAAAtIAcAAIAAAWIgcAAIAAAJQATASASAVIgOAYQgJgSgOgUIAACGgAmeBeIAAhxICVAAIAABxgAmEBJIBiAAIAAgNIhiAAgAmEAqIBiAAIAAgOIhiAAgAmEALIBiAAIAAgLIhiAAgAHsBTIAAglIAjAAIAAAlgADxBMIAAhMIBeAAIAABMgAEKA1IAsAAIAAgfIgsAAgAB+BMIAAhMIBfAAIAABMgACXA1IAsAAIAAgfIgsAAgACZgRIAAhIICSAAIAABIgAC0gpIBcAAIAAgYIhcAAgAHsgdIAAglIAjAAIAAAlgAmkgeIAAgVIBDAAIAAgNIg3AAIAAgVIA3AAIAAgMIhBAAIAAgUIBBAAIAAgTIAaAAIAAATIBDAAIAAAUIhDAAIAAAMIA6AAIAAAVIg6AAIAAANIBNAAIAAAVg");
	this.shape_2.setTransform(64.1,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("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");
	this.shape_3.setTransform(160.5,72.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AhMB0QAlggAGg3IglAAIAAgUQAYggAKgXIgmAAIAAgYIBCAAIAAAUQgLAbgUAdIAgAAIAAAQQgEAggGAPQAAAEALAMQAJANAZAEQAYAEA+AAQAuAAAmgCIgFAbIgzAAQhoAAgcgHQgagHgMgXQgLAWgTAWgAFZCJIAAgkIh8AAIAAgZIB8AAIAAgQIhfAAIAAhqIDcAAIAABqIhhAAIAAAQIB9AAIAAAZIh9AAIAAAkgAF1AlIBFAAIAAgVIhFAAgAEVAlIBEAAIAAgVIhEAAgAF1gEIBFAAIAAgTIhFAAgAEVgEIBEAAIAAgTIhEAAgAj9CJIAAhQQglAyhIAWIgPgYQA7gNAmgjIhgAAIAAgXIB7AAIAAgTIAbAAIAAATIB8AAIAAAXIhiAAQAiAiBBANIgNAZQhOgVgigzIAABQgAm1CJIAAgMIhwAAIAAAMIgaAAIAAhzICkAAIAABzgAniBoIAtAAIAAgWIgtAAgAolBoIAsAAIAAgWIgsAAgAniA/IAtAAIAAgUIgtAAgAolA/IAsAAIAAgUIgsAAgAp8CJIAAiLQgJAhgSAfIgNgeQAbggAMg2IgkAAIAAgZIAlAAIAAg6IAaAAIAAA6IAaAAIAAAZIgaAAIAAAKQARASATAaIgPAWQgMgWgJgNIAACWgABuBHIAPgSQAdAKAbAPIgQAXQgfgTgYgLgAAEBNQAfgLAVgNIARATQgeATgXAJgAKCBTIAAglIAjAAIAAAlgAAAA1IAAgUIAsAAIAAgVIgqAAIAAgTIAqAAIAAgOIAZAAIAAAOIAuAAIAAgOIAaAAIAAAOIAtAAIAAATIgtAAIAAAVIAzAAIAAAUgABFAhIAuAAIAAgVIguAAgAjhACQgqAWhaAEIgOgaIAGAAQBDAAAggJQgegHgfgGIAOgPIAJgLIg6AAIAAgXIBIAAQAGgIAJgRIhAAAIAAAQIgbAAIAAgoIBxAAIgHgIIgGgHIAegEIAHAKIAIAJIBvAAIAAAoIgbAAIAAgQIiKAAIAaAJQgEAKgFAGICQAAIAAAXIg3AAQgKASgVAOIApAKIAsAKIgSAYQhUgcgIAAgAkTgoIgGAIIAzAKQATgJALgPIhHAAIgEAGgAouAIIAAgnIgVAAIAAg3IBJAAIAAgzIAaAAIAAAzIBKAAIAAA3IgXAAIAAAngAoVgJIBQAAIAAgUIhQAAgAoqgxIB6AAIAAgPIh6AAgAB5gbQgXAAAAgaIAAhLIBVAAIAAA6Ig8AAIAAAOQAAAJAJAAIAaAAQAHAAADgSIAYAHQgGAfgWAAgAB7hYIAjAAIAAgVIgjAAgAAZgbQgXAAAAgaIAAhLIBSAAIAAA6Ig5AAIAAAPQAAAIAIAAIAYAAQAJAAACgSIAXAHQgEAfgXAAgAAbhYIAgAAIAAgUIggAAgAKCgdIAAglIAjAAIAAAlgAFwg9IAAhCIByAAIAABCgAGLhUIA7AAIAAgUIg7AAgADug9IAAhCIBvAAIAABCgAEJhUIA4AAIAAgUIg4AAgAhEh3IASgOQAUAQATAVIgUATQgWgdgPgNgAnQhpQARgLANgSIATAOQgKATgTAPgAo8h5IAVgNQAPANAOASIgXARQgNgVgOgOg");
	this.shape_4.setTransform(79.1,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("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");
	this.shape_5.setTransform(145.1,77);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AixCKIAAgpIgzAAIAAgWIAzAAIAAgWIgnAAIAAh7IAnAAIAAgRIgwAAIAAgYIAwAAIAAgaIAYAAIAAAaIAwAAIAAAYIgwAAIAAARIApAAIAAB7IgpAAIAAAWIA0AAIAAAKIAGgBIAHgBIAAhpIgRAAIAAgZICYAAIAAAZIgWAAIAABfIAMgCIAKgCIAAAYIgWADIAAApIgZAAIAAglQghAGhLAGIgCgPIgrAAIAAApgAg+BSQAkgDAagDIAAgUIg+AAgAg+AiIA+AAIAAgSIg+AAgAiZAfIASAAIAAgfIgSAAgAjCAfIARAAIAAgfIgRAAgAg+gDIA+AAIAAgTIg+AAgAiZgTIASAAIAAgdIgSAAgAjCgTIARAAIAAgdIgRAAgABOCJIAAkMIEFAAIAAAbIjoAAIAADGIDwAAIAAAaIjwAAIAAARgAmGCJIAAiNICEAAIAABxQgBAZgUAAIgMAAIgFgVIAKAAQAGAAABgIIAAgfIgSAAIAAA2IgTAAIAAg2IgRAAIAAA2IgUAAIAAg2IgOAAIAAA/gAkpA0IASAAIAAgkIgSAAgAlNA0IARAAIAAgkIgRAAgAlvA0IAOAAIAAgkIgOAAgAmzByQATg9AAhhIAAhPQBpgCAqgMIAMAXQg+ALhBAAIgIAAIAAASIB+AAIAAA/Ih+AAQgEBdgRA8gAmIgsIBmAAIAAgVIhmAAgAoOB6QAJgWAFgxIAUABQgEAzgGAbgAniBTIgBggIASgBQAEAaAAAnIgWABQABgRAAgQgAnIAxIASgEQAEANAFAcIgSAGQgBgTgIgYgAHrBTIAAglIAjAAIAAAlgADwBMIAAhNIBeAAIAABNgAEJA0IAsAAIAAgeIgsAAgAB9BMIAAhNIBfAAIAABNgACWA0IAsAAIAAgeIgsAAgAm7AlIgBgFQguAGgdACIgGgYIAJAAIAKgBQAUgYAPgcQgfAFgTAAIgEgXIAFAAIAHAAQAVgkAOgtIAYAHQgNAmgWAjIAcgCQAKgPAEgOIAVAIQgQAyglArIAggDQgBgJgGgIIASgEQAJASAGAeIgVADIgBgEgACYgSIAAhIICSAAIAABIgACzgpIBcAAIAAgZIhcAAgAHrgeIAAgkIAjAAIAAAkgAhcg/IAAhAIB9AAIAABAgAhAhUIBFAAIAAgWIhFAAg");
	this.shape_6.setTransform(64.2,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("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");
	this.shape_7.setTransform(159.9,77);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("ABOCKIAAkMIEFAAIAAAbIjoAAIAADFIDwAAIAAAbIjwAAIAAARgAnuCKIAAiiIDVAAIAAB8QABAVgHAHQgGAHgVAAIgrAAIgHgdIAsABQAKAAAAgJIAAgMIibAAIAAA0gAnRA+ICbAAIAAgUIibAAgAnRATICbAAIAAgTIibAAgAiFCHIgHgbIAgABQAJAAABgJIAAglIhjAAIAAg6IDZAAIAAA6IhbAAIAAAmQAAAUgGAHQgIAHgSAAgAirArICnAAIAAgRIinAAgAjgBmQApgKAhgXIAQATQggAYgtAPgAgnBbIAMgVQAbAJAtAUIgLAaQgsgYgdgKgAHrBTIAAglIAjAAIAAAlgADwBNIAAhNIBeAAIAABNgAEJA1IAsAAIAAgfIgsAAgAB9BNIAAhNIBfAAIAABNgACWA1IAsAAIAAgfIgsAAgAjjgGIAAgWIB8AAQgEgKgDgGIhbAAIAAhVIDiAAIAABVIhoAAQAEAHACAJIB4AAIAAAWgAiug/ICtAAIAAgPIitAAgAiuhgICtAAIAAgOIitAAgACYgRIAAhIICSAAIAABIgACzgpIBcAAIAAgYIhcAAgAHrgdIAAglIAjAAIAAAlgAoOg8QA0gCAngHIAAgWIhTAAIAAgZIBTAAIAAgUIAdAAIAAA+IAPgDIABAZQg/ANhCAGgAlcgnQgbAAAAgdIAAhFIAcABIAAAbQAqgEAmgNIAKAXQgqAOgwAEIAAALQAAALAMAAIAvAAQAJAAABgYIAbAJQgCAYgFAIQgGAHgNAAg");
	this.shape_8.setTransform(64.2,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("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");
	this.shape_9.setTransform(155.4,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AF7CKIAAkMIEFAAIAAAbIjpAAIAADGIDxAAIAAAaIjxAAIAAARgABIB0QAVgIAQgSQARgRABgRIg1AAIAAgXIA3AAIAAgaIAaAAIAAAaIAUAAQgEgNgFgKIAWgDQAGAKADAQIAKAAIAAAXIg2AAIgBAHQAUAKAaAYIgSAYQgNgTgYgQQgNAfgmAVgAsICKIAAh9QgQAhgRAcIgSgdQAcgkAVgpIguAAIAAgYIAwAAIAAgnQgOADgbADIgGgYQA7gFAmgPIALAXQgJADgLAEIgRAEIAAArIAlAAIAAAYIglAAIAAAGQATAUATAWIgNAZIgZgkIAACFgAC8B0QAkgMAZgYIATAQQgWAYgnASgAESBhIAQgRQAgAPAaAUIgQAWQgXgUgjgUgAjUBwQApgUAWggQAXgfADgdIgxAAIAAgbICuABQgCBPgCAeQgEAcgLALQgKAKgsgBIgPAAIgJgcIAlABQAVAAAEgOQAIgXAAhDIhFAAQgMBbhXAugAlVBMQgXg6AAhNIAAgCIiiAAIAAgbIChAAIAAgwIAdAAIAAAwIBVAAIAAAbIhUAAQAAA9AOAxQAPAxAOAAQAHAAAKg5IAZAaQgOBDgcAAQgbABgWg7gArYB+IAAgXIBOAAIAAgoIg8AAIAAgXIA8AAIAAgfQgUADglABIgGgXQBUgBA5gOIANAXQgZAEgoAFIAAAhIBBAAIAAAXIhBAAIAAAoIBKAAIAAAXgAoPBfIAggEIAigEIAAhRIg4AAIAAgaICJAAIAAAaIg0AAIAABLQAfgFAcgIIAAAdQg4ARheAKgAMYBUIAAglIAjAAIAAAlgAIdBNIAAhNIBeAAIAABNgAI2A1IAsAAIAAgeIgsAAgAGpBNIAAhNIBgAAIAABNgAHDA1IAsAAIAAgeIgsAAgADYBNIAAicIAnAAQAFgRABgHIg3AAIAAgYICOAAIAAAYIg8AAIgCAMIgDAMIAyAAIAACcgADyA2IBBAAIAAgZIhBAAgADyAIIBBAAIAAgWIhBAAgADygjIBBAAIAAgWIhBAAgABIgKQAagTAIgZIgiAAIAAgWIA5AAIAAg8IAZAAIAAA8IAzAAIAAAWIgzAAIAAACQAaAMAXATIgOAVQgTgVgQgHIAAAcIgZAAIAAg2QgOAngaAWgAjigWQA8gzAXg7IAaANQgbBGg+AzgAgshmIg4AAIAAgbIBJAAQAbA7AwAtIgXAXQghghgkhDgAHEgRIAAhIICTAAIAABIgAHggoIBcAAIAAgZIhcAAgAMYgdIAAgkIAjAAIAAAkgArCglIAAhYICOAAIAABYgAqlg9IBVAAIAAgoIhVAAgACghdQAMgOAKgYIAUAJQgMAbgKANgABQh6IASgJQAJAJAOAeIgVAKQgKgZgKgPgAk6h8IASgNQARAPAOATIgWAPQgMgTgPgRg");
	this.shape_10.setTransform(94.1,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("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");
	this.shape_11.setTransform(160.1,77);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("ABPCJIAAkMIEFAAIAAAbIjpAAIAADGIDxAAIAAAaIjxAAIAAARgAoJBzQAQgNAIgVQAJgVAAg8IAAgzIgMAIIgKAGIgQgbQA+gaAiguIAcAGIgLAMIBsAAIAAASIgOAPQgIAJgNALIBNAAIAACkQAAAUgHAHQgHAGgUABIgkAAIgHggIAnACQAKAAAAgJIAAgbIitAAQgHArgaAbgAlvAsIBMAAIAAghIhMAAgAnOAsIBFAAIAAghIhDAAQAAAUgCANgAlvgNIBMAAIAAgcIhMAAgAnMgNIBDAAIAAgcIhDAAgAnShBIBWAAQATgPAPgPIhVAAQgPAQgUAOgAiNCAQgeAAgMgJQgLgJAAgjIAAh4IgQAKIgQgZQA/geAeguIAfAEQgFAJgGAHIBtAAIAAAUQgUAZgcASIBPAAIAABdIjAAAIAAAnQAAAXAYAAICJAAQAOAAADgMQAEgMADgVIAcAJQgEAcgIARQgIARgcAAgAhHAPIBHAAIAAgqIhHAAgAilAPIBBAAIAAgqIhBAAgAi2g1IBWAAQAkgWAPgPIhaAAQgUATgbASgAHsBTIAAglIAjAAIAAAlgADxBMIAAhMIBeAAIAABMgAEKA1IAsAAIAAgfIgsAAgAB9BMIAAhMIBgAAIAABMgACXA1IAsAAIAAgfIgsAAgACYgRIAAhIICTAAIAABIgAC0gpIBcAAIAAgYIhcAAgAHsgdIAAglIAjAAIAAAlg");
	this.shape_12.setTransform(64.1,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("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");
	this.shape_13.setTransform(162.9,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,3.2,327.7,107.5);


(lib.按鈕橘圓 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AjWDWQhYhZAAh9QAAh8BYhaQBahYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBZQhZBZh9AAQh8AAhahZg");
	this.shape.setTransform(30.4,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Aj3D4QhnhnAAiRQAAiQBnhnQBnhnCQAAQCRAABnBnQBnBnAACQQAACRhnBnQhnBniRAAQiQAAhnhng");
	this.shape_1.setTransform(30.4,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.7,60.7);


(lib.翅膀單 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FFFF").ss(1,1,1).p("ADjiDQAABgi1B4QhFAwhJAgQhHAhgjAAQgPAAgGgOQgDgHAAgRQAAgSAGgVQAEgQAGgQQAyhqBkhUQBxhgBmAAQAgAAAUAUQAUASAAAcg");
	this.shape.setTransform(22.7,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AjfC5QgDgIAAgRQAAgSAGgVQAEgPAGgRQAyhqBkhTQBxhgBmgBQAgAAAUAUQAUATAAAbQAABgi1B4QhFAwhJAgQhHAhgjgBQgPABgGgNg");
	this.shape_1.setTransform(22.7,19.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,39.6);


(lib.箭頭動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.星星();
	this.instance.setTransform(-64.8,-102.7,0.86,0.86,0,0,0,33.6,38.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(2).to({rotation:-14.8,x:-75.9,y:-108.8},0).wait(2).to({rotation:0,x:-64.7,y:-102.6},0).to({_off:true},2).wait(45));

	// 圖層 1
	this.instance_1 = new lib.bigmouse();
	this.instance_1.setTransform(14.4,22.4,1,1,0,0,0,13.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-75.8,y:-67.8},9).wait(2).to({rotation:-14.8,x:-78.3},0).wait(2).to({rotation:0,x:-75.8},0).wait(27).to({x:14.4,y:22.4},9).wait(11));

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2B7IgMgoIhVAAIgMAoIhOAAIBdj1IBRAAIBdD1gAgaAdIA0AAIgahXg");
	this.shape.setTransform(-101.5,-97.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiUCTQg9g9AAhWQAAhVA9g/QA/g9BVAAQBWAAA+A9QA+A/AABVQAABWg+A9Qg+A/hWAAQhVAAg/g/g");
	this.shape_1.setTransform(-101.5,-97.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("AuvizIdfAAIAAFoI9fAAg");
	this.shape_2.setTransform(-109.6,-55.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AiUCTQg9g9AAhWQAAhVA9g/QA/g9BVAAQBWAAA+A9QA+A/AABVQAABWg+A9Qg+A/hWAAQhVAAg/g/g");
	this.shape_3.setTransform(-101.5,-97.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(3,1,1).p("AuvizIdfAAIAAFoI9fAAg");
	this.shape_4.setTransform(-109.6,-55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},9).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},2).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.1,-118.9,232.5,164.1);


(lib.遊戲標題 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.WindowsXP大考驗();
	this.instance.setTransform(353.6,59.9,2.072,2.072,0,0,0,263.3,24.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,16.6,671.1,63.4);


(lib.動畫顯示圈叉 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
		this.visible = false;
	}
	this.frame_49 = function() {
		this.stop();
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49));

	// 圖層 1
	this.instance = new lib.打對o();
	this.instance.setTransform(0.4,0.5,0.799,0.799,0,0,0,0.5,-0.4);
	this.instance.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.898},14).wait(10).to({alpha:0.602},0).to({_off:true},1).wait(25));

	// 圖層 4
	this.instance_1 = new lib.打錯x();
	this.instance_1.setTransform(0.4,0.4,0.736,0.736,0,0,0,0.5,-0.4);
	this.instance_1.alpha = 0.051;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1,y:0.5,alpha:0.898},9).wait(15).to({alpha:0.602},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-79.1,159,159);


(lib.亮晶晶動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.亮晶晶();
	this.instance.setTransform(1.1,-2.6,1.508,1.508,0,0,0,-0.7,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:7.2,scaleX:1.33,scaleY:1.33,y:-2.4},0).wait(2).to({scaleX:1.11,scaleY:1.11},0).wait(2).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-121.3,97.3,225.6);


(lib.亮晶晶動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.亮晶晶();
	this.instance.setTransform(1.1,-2.5,1,1,0,0,0,-0.7,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.11,scaleY:1.11},0).wait(2).to({scaleX:1.33,scaleY:1.33},0).wait(2).to({regY:7.1,scaleX:1.51,scaleY:1.51,y:-2.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-81.3,64.5,149.6);


(lib.亮晶晶一群 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.亮晶晶動畫();
	this.instance.setTransform(203.8,102.1,0.232,0.232,0,0,0,2,-6.6);

	this.instance_1 = new lib.亮晶晶動畫2();
	this.instance_1.setTransform(168.2,55.8,0.257,0.257,0,0,0,2.6,-8.7);

	this.instance_2 = new lib.亮晶晶動畫2();
	this.instance_2.setTransform(163.1,132.2,0.152,0.152,0,0,0,2.6,-8.5);

	this.instance_3 = new lib.亮晶晶動畫2();
	this.instance_3.setTransform(23.2,57.6,0.169,0.169,0,0,0,2.6,-8.5);

	this.instance_4 = new lib.亮晶晶動畫();
	this.instance_4.setTransform(56.4,19.3,0.258,0.258,0,0,0,2,-6.7);

	this.instance_5 = new lib.亮晶晶動畫();
	this.instance_5.setTransform(92,155.5,0.232,0.232,0,0,0,2,-6.6);

	this.instance_6 = new lib.亮晶晶動畫();
	this.instance_6.setTransform(112.7,105.5,0.276,0.276,0,0,0,1.8,-6.6);

	this.instance_7 = new lib.亮晶晶動畫2();
	this.instance_7.setTransform(50.1,114.7,0.227,0.227,0,0,0,2.6,-8.5);

	this.instance_8 = new lib.亮晶晶動畫2();
	this.instance_8.setTransform(153.4,93.1,0.258,0.258,0,0,0,2.5,-8.4);

	this.instance_9 = new lib.亮晶晶動畫();
	this.instance_9.setTransform(56.4,19.3,0.258,0.258,0,0,0,2,-6.7);

	this.instance_10 = new lib.亮晶晶動畫2();
	this.instance_10.setTransform(50.1,114.7,0.227,0.227,0,0,0,2.6,-8.5);
	this.instance_10.alpha = 0.602;

	this.instance_11 = new lib.亮晶晶動畫2();
	this.instance_11.setTransform(23.2,57.6,0.169,0.169,0,0,0,2.6,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:0.152,scaleY:0.152,x:163.1,y:132.2,regY:-8.5,regX:2.6}},{t:this.instance_1,p:{scaleX:0.257,scaleY:0.257,x:168.2,y:55.8,alpha:1}},{t:this.instance,p:{x:203.8,y:102.1,alpha:1}}]}).to({state:[{t:this.instance_4,p:{regY:-6.7,scaleX:0.258,scaleY:0.258,x:56.4,y:19.3,regX:2,alpha:1}},{t:this.instance_3,p:{scaleX:0.169,scaleY:0.169,x:23.2,y:57.6,regX:2.6,regY:-8.5,alpha:1}},{t:this.instance_2,p:{scaleX:0.152,scaleY:0.152,x:163.1,y:132.2,regY:-8.5,regX:2.6}},{t:this.instance_1,p:{scaleX:0.257,scaleY:0.257,x:168.2,y:55.8,alpha:1}},{t:this.instance,p:{x:203.8,y:102.1,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:-6.7,scaleX:0.258,scaleY:0.258,x:56.4,y:19.3,regX:2,alpha:1}},{t:this.instance_2,p:{scaleX:0.169,scaleY:0.169,x:23.2,y:57.6,regY:-8.5,regX:2.6}},{t:this.instance_1,p:{scaleX:0.137,scaleY:0.137,x:29.8,y:155.7,alpha:1}},{t:this.instance,p:{x:92,y:155.5,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.227,scaleY:0.227,x:50.1,y:114.7,regY:-8.5}},{t:this.instance_3,p:{scaleX:0.152,scaleY:0.152,x:163.1,y:132.2,regX:2.6,regY:-8.5,alpha:1}},{t:this.instance_2,p:{scaleX:0.137,scaleY:0.137,x:29.8,y:155.7,regY:-8.7,regX:2.6}},{t:this.instance_6,p:{regX:1.8,scaleX:0.276,scaleY:0.276,x:112.7,y:105.5}},{t:this.instance_5,p:{regX:2,scaleX:0.232,scaleY:0.232,x:92,y:155.5,alpha:1}},{t:this.instance_1,p:{scaleX:0.257,scaleY:0.257,x:168.2,y:55.8,alpha:1}},{t:this.instance_4,p:{regY:-6.6,scaleX:0.232,scaleY:0.232,x:7.5,y:102.1,regX:2,alpha:1}},{t:this.instance,p:{x:203.8,y:102.1,alpha:1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{regX:2.5,regY:-8.4,scaleX:0.258,scaleY:0.258,x:153.4,y:93.1}},{t:this.instance_6,p:{regX:2,scaleX:0.336,scaleY:0.336,x:132.5,y:44.7}},{t:this.instance_7,p:{scaleX:0.169,scaleY:0.169,x:23.2,y:57.6,regY:-8.5}},{t:this.instance_3,p:{scaleX:0.152,scaleY:0.152,x:163.1,y:132.2,regX:2.6,regY:-8.5,alpha:1}},{t:this.instance_5,p:{regX:1.9,scaleX:0.433,scaleY:0.433,x:70.5,y:72.8,alpha:1}},{t:this.instance_4,p:{regY:-6.6,scaleX:0.276,scaleY:0.276,x:112.7,y:105.5,regX:1.8,alpha:1}},{t:this.instance_2,p:{scaleX:0.303,scaleY:0.303,x:94.6,y:34.1,regY:-8.7,regX:2.5}},{t:this.instance_1,p:{scaleX:0.257,scaleY:0.257,x:168.2,y:55.8,alpha:1}},{t:this.instance,p:{x:203.8,y:102.1,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{regX:2,scaleX:0.336,scaleY:0.336,x:132.5,y:44.7}},{t:this.instance_11},{t:this.instance_10},{t:this.instance_8,p:{regX:2.6,regY:-8.5,scaleX:0.152,scaleY:0.152,x:163.1,y:132.2}},{t:this.instance_7,p:{scaleX:0.137,scaleY:0.137,x:29.8,y:155.7,regY:-8.7}},{t:this.instance_5,p:{regX:2,scaleX:0.232,scaleY:0.232,x:92,y:155.5,alpha:0.602}},{t:this.instance_3,p:{scaleX:0.303,scaleY:0.303,x:94.6,y:34.1,regX:2.5,regY:-8.7,alpha:0.602}},{t:this.instance_2,p:{scaleX:0.257,scaleY:0.257,x:168.2,y:55.8,regY:-8.7,regX:2.6}},{t:this.instance_4,p:{regY:-6.6,scaleX:0.232,scaleY:0.232,x:7.5,y:102.1,regX:2,alpha:0.602}},{t:this.instance,p:{x:203.8,y:102.1,alpha:0.602}},{t:this.instance_1,p:{scaleX:0.257,scaleY:0.257,x:121.7,y:69.8,alpha:0.301}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(155.7,26.8,55.6,122.5);


(lib.小貓綵球動 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.小貓綵球();
	this.instance.setTransform(39.7,59.2,1.022,1.022,0,0,0,38,60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.7,22.1,45.5,63.3);


(lib.mus_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(3,1,1).p("ABeBtIi7jZ");
	this.shape.setTransform(25.3,24.7,1.157,1.157,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0000").ss(3,1,1).p("ABeBtIi7jZ");
	this.shape_1.setTransform(25.2,24.8,1.157,1.157,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwAhIAAgHIAAgDIAAgCIAAgHQAAgOARgQQAWgWAcAAQANAAAKAGQAHAEAAAEQAAAEgDADQADACAAADQAAAEgEADQgDACgDAAQgEAAgFgCQgFgDgIAAQgWAAgSAWQgNAZgEAAQgGAAgCgGg");
	this.shape_2.setTransform(20.1,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhxCLQgigUgKgnQgJgmAUgiQAVgcAjgMQAOgDANAAQAXABAVALIAKAHIASARIAFgfIAIg+IAHg1QABgFAIABQADAAACABIAEAAIAAABQARAEANAOQAHAFAGAIIAHANIAGANQADAHADAMIADAJIAAADIAHAUQAGAQAkAHQgGAJgSAAQgSAAgHgDIgKgFIgFgFQgOgMgFgTIgHgRQgGgOgTgNIgBAGIgEAjIgMBpIAAACIgBAFQgCAXgMAXQgTAfgjALQgOAEgNAAQgXAAgXgLgAh0AFQgSASAAAOIAAAHIABABIgBAEIAAAGQACAHAHAAQADAAANgZQASgZAYAAQAJAAAEADQAGADADAAQADAAADgCQAEgDAAgEQAAgDgDgDQADgDAAgBQAAgFgHgEQgJgGgOAAQgeAAgVAVg");
	this.shape_3.setTransform(28.6,25.7);

	this.instance = new lib.board3();
	this.instance.setTransform(25.2,26.9,1.186,1.186,0,0,0,20.3,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,1.3,48.1,51.4);


(lib.確定2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手指();
	this.instance.setTransform(56.3,31.5,0.744,0.744,0,0,0,25.7,26.8);

	this.text = new cjs.Text("確 定", "25px DFNHeiXBold-B5", "#996600");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.setTransform(-0.2,-15.3);

	this.instance_1 = new lib.共用方按鈕2();
	this.instance_1.setTransform(0.2,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-0.2,y:-15.3,color:"#996600"}},{t:this.instance,p:{scaleX:0.744,scaleY:0.744,x:56.3,y:31.5}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.062,scaleY:1.062}},{t:this.text,p:{scaleX:1.174,scaleY:1.174,x:-6,y:-17.8,color:"#CC0000"}},{t:this.instance,p:{scaleX:0.88,scaleY:0.88,x:57.8,y:33}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.062,scaleY:1.062}},{t:this.text,p:{scaleX:1,scaleY:1,x:-0.2,y:-15.3,color:"#CC0000"}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-20.8,131.1,72.2);


(lib.遊戲開始 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("AELBcQATgPAMgVIAFgKIgOgMIgDAMIgbgGQANgoAJguIgUAAIAAgaIAZAAIAFgmIAcAEIgGAiIAoAAQgBAugJAmQgDAPgFAMIAXAXIgTAVIgQgRIgDAGQgQAYgVARgAEpAHIARAOIAEgMQAGgbACgcIgRAAIgMA1gAjvBkQAHgdACgUQADgaAAgZIAAhPIAmAAIAAgfIAbAAIAAAFIA6AAIAAAVIg6AAIAAAFIBGAAIAAAgIgaAAIAAgLIhVAAIAABFQAAAdgEAcQgDAWgHAXgAHDBwIAAgKIg+AAIAAAKIgcAAIAAhqIB2AAIAABqgAGFBKIA+AAIAAgpIg+AAgAASBwIAAjdIBgAAIAABcIhHAAIAACBgAArgqIAuAAIAAgJIguAAgAArhKIAuAAIAAgJIguAAgAg1BgIgGgMQgNANgQAKIgNgWQAUgOANgRIgFgYQgFgUgDgaIgNADIgFgbIAQgDIgChDIAZAAIACA9IAugKIADAcIgvAKIADAiIACAMQAIgQAGgSIAZALQgNAmgQAYIABADQAFAQADAAIAAgCIABgTIAZAHQgEAggIAGQgFAFgJAAQgLAAgKgQgACuBtIgHgdQAMAEALAAQAJAAAAgTIAAhSIhFAAIAAhcIBfAAIAAC5QAAAjgeAAQgJAAgMgCgACbgqIAsAAIAAgJIgsAAgACbhKIAsAAIAAgJIgsAAgAjNBYIAYgCIgLgNIAKgGIgPAAIAAguIBeAAIAAAuIgWAAIAMAEIgFAKIANgBIAEAVQgrAGg1AEgAibBPIgKAGIASgBIACgFIAEgMIgWAAQAFAGADAGgAisAwIAsAAIAAgIIgsAAgAnoBTIAagNIAAg3IgYAAIAAgZIAzAAIAABLQAQAMAVABQAPADA+AAQAkAAAZgFQgIAPgFARIhKAAQgoAAgZgFQgRgFgRgOIgXAbIgTgcgAA1BVQAPgIAHgOIADgHIgYAAIAAgZIAcAAIAAgEIABgNIgXAAIAAgXIB6AAIAAAXIgXAAIAAARIAcAAIAAAZIgcAAIAAAxIgbAAIAAgxIgZAAQgDAOgFAKQgLARgSAKgABtAfIAXAAIAAgRIgXAAIAAARgAlQBMIgFgcQAKAEAJAAIADgCIABgIIAAgXIgaAAIAAgYIAaAAIAAgOIALAAIAKgKIglAAIAAgPIgGAJIgWgRIAEgFIgdAAIAAAVIAkAAQAABbgIAKQgGALgQAAQgHAAgKgDIgEgUQgFALgGAIIgUgRQALgSAFgYQAEgUAAgYIAAgaIgOAAIAAgaIAaAAIAAgbIAcAAIAAAbIAVAAIAAAOIAFgLQAHgQAEgOIAZAIIgEANIAzAAIAAAaIg9AAIgFAKIBAAAIAAAWQgJAPgMALIAXAAIAAAYIgbAAIAAAdQAAASgHAFQgGAGgSAAIgOgBgAmLAeQgCAKgEAIQAKADAHAAQADAAABgGQACgHABgxIgLAAQgBAVgGAUgAjHAOIAAgRIBiAAIAAARgAHJgPQgtAHg0AEIgFgdIAPgBQAUglAPgpIAeAJQgQAmgRAdIAsgEQgHgQgJgNIAbgMQATAeANAkIgdAMIgDgMgAiogKQgSgBgBgQIgKABIgCgTIAMgBIAAgJIAZAAIAAAGIAjgEIACAUIghADIABABQAFACAIAAIANgBQAFAAACgBQACgCABgJIAVAKQgBAIgEAHQgDAFgIABIgcABQgVAAgDgCgAnngwIAUgVQARAKANAMIgUAZQgOgPgQgLgAg4hTIARgTQAPAKAMAMIgSAWQgNgOgNgLgAnZhZIATgVQAQAJANAKIgUAYQgNgNgPgJg");
	this.shape.setTransform(-0.1,-0.9);

	this.instance = new lib.手指();
	this.instance.setTransform(56.3,31.5,0.744,0.744,0,0,0,25.7,26.8);

	this.instance_1 = new lib.共用方按鈕();
	this.instance_1.setTransform(0.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AElBlQAUgRAOgWIAFgLIgPgNIgEAMIgdgGQAOgsAKgyIgWAAIAAgdIAbAAIAGgqIAeAFIgGAlIAsAAQgCAygJAqQgEARgFANQANAMAMANIgVAXIgQgSIgFAHQgQAagYASgAFFAIIATAPIAEgNQAHgdACgfIgTAAIgNA6gAkHBuQAIggADgWQADgcAAgcIAAhXIAqAAIAAgiIAeAAIAAAGIA/AAIAAAXIg/AAIAAAFIBMAAIAAAkIgdAAIAAgMIhcAAIAABLQgBAggEAfQgDAYgIAZgAHuB7IAAgLIhDAAIAAALIggAAIAAh0ICCAAIAAB0gAGrBSIBDAAIAAguIhDAAgAAUB7IAAjyIBpAAIAABlIhNAAIAACNgAAwguIAxAAIAAgJIgxAAgAAwhRIAxAAIAAgKIgxAAgAg6BpIgHgNQgOAPgSALIgOgZQAVgPAPgSIgGgbQgFgWgDgcIgOADIgGgeIASgDQgCghAAgpIAbAAIACBEIAzgLIADAeIg0ALQABAYADAOIACANQAJgSAHgTIAbALQgPAqgSAaIABAEQAHARACAAIAAgCIABgVIAcAIQgEAjgJAHQgFAFgLAAQgLAAgLgSgAC+B4IgGggQAMAEAMAAQAKAAAAgUIAAhaIhMAAIAAhlIBpAAIAADLQAAAmgiAAQgKAAgNgCgACqguIAwAAIAAgJIgwAAgACqhRIAwAAIAAgKIgwAAgAjhBgIAagBIgLgOIAKgHIgRAAIAAgzIBoAAIAAAzIgYAAIAOAEIgGALIAOgBIAEAXQgvAGg6AFgAiqBXIgMAHIAUgCIADgGIAEgMIgYAAQAGAGADAHgAi9A1IAwAAIAAgJIgwAAgAoXBbIAcgOIAAg8IgaAAIAAgcIA4AAIAABTQARAMAYACQARADBDAAQAnAAAcgFQgJAQgFATIhSAAQgsAAgbgGQgSgGgTgPIgaAeQgJgRgLgOgAA6BdQARgIAIgPIACgIIgaAAIAAgbIAfAAIABgFIAAgOIgZAAIAAgZICGAAIAAAZIgaAAIAAATIAfAAIAAAbIgfAAIAAA1IgeAAIAAg1IgbAAQgDAPgGALQgMATgTAKgAB4AjIAYAAIAAgTIgYAAIAAATgAlxBUIgFgfQAKAEALAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQACgCAAgHIAAgZIgeAAIAAgaIAeAAIAAgQIALABIALgMIgoAAIAAgRIgHAKIgYgSIAEgFIggAAIAAAWIAoAAQAABlgJALQgGAMgSAAQgHAAgLgDIgGgXQgFAMgGAKIgWgTQAMgUAFgaQAGgXgBgaIAAgcIgQAAIAAgdIAdAAIAAgeIAgAAIAAAeIAWAAIAAAQIAGgNQAHgRAEgQIAcAJIgEAPIA3AAIAAAcIhCAAIgGALIBGAAIAAAYQgKAQgNANIAZAAIAAAaIgdAAIAAAgQAAATgIAGQgHAHgTAAIgQgBgAmxAhQgDALgEAJQALADAIAAQADAAABgGQACgIABg2IgLAAQgCAXgGAWgAjbAQIAAgTIBsAAIAAATgAH0gRQgwAIg6AFIgFggIAQgBQAXgpAQgtIAhAKQgRApgUAgIAxgDQgIgSgJgPIAcgNQAVAiAPAnIgfANIgFgOgAi5gLQgSgBgCgRIgLABIgDgVIAOgCIAAgJIAcAAIAAAGIAmgEIABAWIgkAEIABAAQAHACAJAAIANAAIAHgCQADgCACgKIAWALQgCAJgEAIQgCAFgKABQgJACgUAAQgYAAgEgDgAoWg1IAVgWQATAKAPAOIgVAbQgQgRgSgMgAg+hbIAUgUQAQAKANANIgUAZQgOgQgPgMgAoGhhIAUgXQARAJAOALIgVAbQgPgOgPgKg");
	this.shape_1.setTransform(0.9,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApdDiIAAnDIS7AAIAAHDg");
	this.shape_2.setTransform(0.7,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:0.744,scaleY:0.744,x:56.3,y:31.5}},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{scaleX:1.062,scaleY:1.062}},{t:this.instance,p:{scaleX:0.88,scaleY:0.88,x:57.8,y:33}},{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-20.8,131.1,72.2);


(lib.進入 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("ABMBcQASgPAMgVIAGgKIgOgMIgEAMIgagGQANgoAJguIgUAAIAAgaIAZAAIAFgmIAcAEIgGAiIAoAAQgCAugJAmQgDAPgEAMIAWAXIgTAVIgPgRIgEAGQgPAYgWARgABpAHIARAOIAEgMQAGgbACgcIgRAAIgMA1gAEDBwIAAgKIg9AAIAAAKIgcAAIAAhqIB2AAIAABqgADGBKIA9AAIAAgpIg9AAgAkoBwIAAjdIBfAAIAABcIhGAAIAACBgAkPgqIAtAAIAAgJIgtAAgAkPhKIAtAAIAAgJIgtAAgAiNBtIgGgdQAMAEAKAAQAJAAAAgTIAAhSIhFAAIAAhcIBgAAIAAC5QAAAjgeAAQgKAAgMgCgAifgqIArAAIAAgJIgrAAgAifhKIArAAIAAgJIgrAAgAkFBVQAPgIAHgOIADgHIgYAAIAAgZIAcAAIAAgEIAAgNIgWAAIAAgXIB6AAIAAAXIgYAAIAAARIAdAAIAAAZIgdAAIAAAxIgbAAIAAgxIgZAAQgCAOgGAKQgKARgSAKgAjNAfIAWAAIAAgRIgWAAIAAARgAEJgPQgsAHg0AEIgGgdIAPgBQAVglAPgpIAeAJQgQAmgSAdIAtgEQgIgQgIgNIAagMQATAeANAkIgcAMIgEgMg");
	this.shape.setTransform(2.2,-0.9);

	this.instance = new lib.手指();
	this.instance.setTransform(56.3,31.5,0.744,0.744,0,0,0,25.7,26.8);

	this.instance_1 = new lib.共用方按鈕();
	this.instance_1.setTransform(0.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("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");
	this.shape_1.setTransform(2.2,67.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ABZBsQAWgSANgXIAHgMIgRgPIgDAOIgggHQAQgvAKg2IgXAAIAAgfIAdAAIAGgtIAgAFIgHAoIAwAAQgCA2gLAtQgDASgGAOIAbAbIgWAYIgSgUIgFAIQgRAcgaAUgAB7AJIAVAPIAEgNQAHggACghIgUAAIgOA/gAEwCEIAAgMIhIAAIAAAMIghAAIAAh9ICKAAIAAB9gADoBXIBIAAIAAgwIhIAAgAlcCEIAAkEIBwAAIAABsIhTAAIAACYgAk/gxIA2AAIAAgKIg2AAgAk/hXIA2AAIAAgLIg2AAgAimCBIgHgjQAOAFAMAAQALAAgBgWIAAhhIhRAAIAAhsIBxAAIAADZQAAAqgjAAQgLAAgPgCgAi7gxIAyAAIAAgKIgyAAgAi7hXIAyAAIAAgLIgyAAgAkzBkQASgKAHgPIAFgIIgdAAIAAgeIAhAAIAAgFIAAgPIgaAAIAAgcICPAAIAAAcIgcAAIAAAUIAjAAIAAAeIgjAAIAAA4IgfAAIAAg4IgeAAQgCAPgHANQgMATgWALgAjxAlIAaAAIAAgUIgaAAIAAAUgAE3gSQg0AIg9AFIgGgiIARgBQAYgsARgwIAkALQgTAsgUAiIA0gEQgIgTgLgQIAfgNQAWAkAQApIghAPIgFgPg");
	this.shape_2.setTransform(2.3,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AsgB3QgPAAAAgPIAAjPQAAgPAPAAIZBAAQAPAAAAAPIAADPQAAAPgPAAg");
	this.shape_3.setTransform(1.5,67.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ApcDjIAAnFIS5AAIAAHFg");
	this.shape_4.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:0.744,scaleY:0.744,x:56.3,y:31.5}},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.instance_1,p:{scaleX:1.062,scaleY:1.062}},{t:this.instance,p:{scaleX:0.88,scaleY:0.88,x:57.8,y:33}},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-20.8,131.1,72.2);


(lib.再玩一次 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("AGnBBQgLgOgHgSQgFAKgEAIQgWAkgnAZIgRgYQAigXASghQAQgdAEg2IgTAAQgLAYgQATIgWgWQAOgTAJgUQALgVAHgWIAbAIIgIAZIBnAAIAAAWQgPAjgRAWIgWgPQAJgQAJgUIgeAAQgBAYgDATQALAbAOAUQARAaAfAVIgVAbQgZgUgTgcgAlcBrIgGgdQAVAGAQAAQAFAAAAgOIAAgPIh9AAIAAA4IgdAAIAAg4IgWAAIAAgaIAWAAIAAhaIBLAAIAAgQIhYAAIAAgaIDSAAIAAAaIhdAAIAAAQIBPAAIAABaIAXAAIAAAaIgXAAIAAAWQAAAigiAAQgNAAgSgEgAlqAdIAyAAIAAgUIgyAAgAm1AdIAuAAIAAgUIguAAgAlqgQIAyAAIAAgSIgyAAgAm1gQIAuAAIAAgSIguAAgAiiBZQAXgPALgWQAJgRACgvIgbAAIAAgbICBAAIAAAbIghAAIAABQQAAAJABABQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAQAGAAABgDQACgCABgHIABgOIAZAOQgDAegIAFQgCADgHABQgDABgNAAQgLAAgGgCQgPgCAAgdIAAhWIgOAAQgCA4gMAVQgMAbgcASgAjuA6IAigFIAAg1IgaAAIAAgbIAaAAIAAgpIgdAAIAAgcIBXAAIAAAcIgdAAIAAApIAZAAIAAAbIgZAAIAAAwIAdgGIADAbQgpALgvAIgAEFAoQAvgSAhgUIAIAZQgiAYgqASgAATAGIAAgbIDQAAIAAAbgAEIg7IAAgdIBFAAIAAAdgAiGhNIAAgbIBuAAIAAAbg");
	this.shape.setTransform(-0.1,-0.8);

	this.instance = new lib.手指();
	this.instance.setTransform(56.3,31.5,0.744,0.744,0,0,0,25.7,26.8);

	this.instance_1 = new lib.共用方按鈕();
	this.instance_1.setTransform(0.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AHPBHQgLgQgJgSQgEAKgGAJQgWAogrAbIgTgbQAlgZAUgjQARghAEg7IgVAAQgMAagRAVIgZgYQAQgVALgVQALgXAIgZIAeAJIgIAbIBvAAIAAAYQgPAmgUAZIgYgQQALgSAJgWIggAAQgBAagDAVQALAeAQAVQASAdAiAXIgXAeQgcgWgVgfgAl9B2IgGggQAVAGATAAQAFAAAAgPIAAgQIiIAAIAAA9IghAAIAAg9IgYAAIAAgdIAYAAIAAhjIBSAAIAAgSIhgAAIAAgcIDmAAIAAAcIhlAAIAAASIBVAAIAABjIAZAAIAAAdIgZAAIAAAYQAAAlgkAAQgPAAgTgEgAmMAgIA2AAIAAgWIg2AAgAneAgIAxAAIAAgWIgxAAgAmMgSIA2AAIAAgUIg2AAgAnegSIAxAAIAAgUIgxAAgAiyBhQAZgQAMgYQALgTABgzIgdAAIAAgeICOAAIAAAeIglAAIAABYQAAAJABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAGAAABgDQACgDACgHIABgQIAbAQQgEAggHAGQgDADgIACIgRABQgMAAgIgDQgPgDAAgfIAAheIgPAAQgCA9gNAYQgOAcgfAVgAkEBAIAkgGIAAg6IgbAAIAAgdIAbAAIAAgtIggAAIAAgfIBgAAIAAAfIggAAIAAAtIAcAAIAAAdIgcAAIAAA0IAggGIADAeQgsALg0AJgAEeAsQAzgUAkgWIAJAcQgkAagvAUgAAVAGIAAgdIDlAAIAAAdgAEihBIAAgfIBLAAIAAAfgAiUhVIAAgdIB7AAIAAAdg");
	this.shape_1.setTransform(0.8,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("ApbDeIAAm7IS3AAIAAG7g");
	this.shape_2.setTransform(0,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:0.744,scaleY:0.744,x:56.3,y:31.5}},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{scaleX:1.062,scaleY:1.062}},{t:this.instance,p:{scaleX:0.88,scaleY:0.88,x:57.8,y:33}},{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-20.8,131.1,72.2);


(lib.b11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(171.4,669.4,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai0C0QhMhKAAhqQAAhpBMhMQBLhKBpAAQBqAABLBKQBLBMABBpQgBBqhLBKQhLBNhqAAQhpAAhLhNg");
	this.shape.setTransform(171.1,667.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AjhiPIAAEfQAAAyAyAAIFeAAQAyAAAAgyIAAkfQAAgygyAAIleAAQgyAAAAAyg");
	this.shape_1.setTransform(118.3,670.5);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(171.2,667.7,0.847,0.847,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(171.4,669.4,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("AjhiPIAAEfQAAAyAyAAIFeAAQAyAAAAgyIAAkfQAAgygyAAIleAAQgyAAAAAyg");
	this.shape_2.setTransform(118.3,670.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.7,641.9,101.1,51.4);


(lib.b10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(680.3,614.1,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhZQBZhZB8AAQB9AABYBZQBaBZAAB8QAAB9haBYQhYBah9AAQh8AAhZhag");
	this.shape.setTransform(680.1,612.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("EAfcgozMg+3AAAQhrAAAAAyMAAABQDQAAAyBrAAMA+3AAAQBrAAAAgyMAAAhQDQAAgyhrAAg");
	this.shape_1.setTransform(561.2,427.1);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(680.1,612.4,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(680.3,614.1,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("EAfcgozMg+3AAAQhrAAAAAyMAAABQDQAAAyBrAAMA+3AAAQBrAAAAgyMAAAhQDQAAgyhrAAg");
	this.shape_2.setTransform(561.2,427.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(349.3,165.8,423.8,522.5);


(lib.b9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(286.9,613,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhaQBZhYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBYQhZBah9AAQh8AAhZhag");
	this.shape.setTransform(286.6,611.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("EAOtgozI9aAAQgyAAAAAyMAAABQDQAAAyAyAAIdaAAQAyAAAAgyMAAAhQDQAAgygyAAg");
	this.shape_1.setTransform(246.4,427.1);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(286.7,611.3,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(286.9,613,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("EAOtgozI9aAAQgyAAAAAyMAAABQDQAAAyAyAAIdaAAQAyAAAAgyMAAAhQDQAAgygyAAg");
	this.shape_2.setTransform(246.4,427.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.2,165.8,198.4,522.5);


(lib.b8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(116.7,615.2,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhaQBZhYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBYQhZBah9AAQh8AAhZhag");
	this.shape.setTransform(116.4,613.4,0.847,0.847);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("EgDngj0MAAABHpQAAE9AOAAIGyAAQAOAAAAk9MAAAhHpQAAk9gOAAImyAAQgOAAAAE9g");
	this.shape_1.setTransform(118.9,426.6);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(116.5,613.5,0.847,0.847,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(116.7,615.2,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("EgDngj0MAAABHpQAAE9AOAAIGyAAQAOAAAAk9MAAAhHpQAAk9gOAAImyAAQgOAAAAE9g");
	this.shape_2.setTransform(118.9,426.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.7,165.6,51.5,522.1);


(lib.b7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(1151.5,613,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDWQhZhZAAh9QAAh8BZhaQBZhYB8AAQB9AABYBYQBaBaAAB8QAAB9haBZQhYBZh9AAQh8AAhZhZg");
	this.shape.setTransform(1151.2,611.3,0.876,0.876);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AEhxiIpAAAQgTAAAACGIAAe1QAACKATAAIJAAAQASAAAAiKIAA+1QAAiGgSAAg");
	this.shape_1.setTransform(1151.6,579.4);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(1151.3,611.3,0.876,0.876,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(1151.5,613,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("AEhxiIpAAAQgTAAAACGIAAe1QAACKATAAIJAAAQASAAAAiKIAA+1QAAiGgSAAg");
	this.shape_2.setTransform(1151.6,579.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1120.9,467.1,61.5,224.7);


(lib.b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(849.1,612.3,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjWDWQhYhZAAh9QAAh8BYhaQBahYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBZQhZBZh9AAQh8AAhahZg");
	this.shape.setTransform(848.8,610.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("A5cvcIAAe1QAACKBkAAMAvzAAAQBjAAAAiKIAA+1QAAiGhjAAMgvzAAAQhkAAAACGg");
	this.shape_1.setTransform(948.1,580);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(848.9,610.6,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(849.1,612.3,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("A5cvcIAAe1QAACKBkAAMAvzAAAQBjAAAAiKIAA+1QAAiGhjAAMgvzAAAQhkAAAACGg");
	this.shape_2.setTransform(948.1,580);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(785.1,467.7,326,224.8);


(lib.b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(860.8,429.8,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjWDVQhYhYAAh9QAAh8BYhZQBahZB8AAQB9AABZBZQBZBZAAB8QAAB9hZBYQhZBah9AAQh8AAhahag");
	this.shape.setTransform(860.6,428.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("Ac/59Mg56AAAQh6AAAADHMAAAAtnQAADNB6AAMA56AAAQB4AAAAjNMAAAgtnQAAjHh4AAg");
	this.shape_1.setTransform(983.6,328.6);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(860.6,428.1,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(860.8,429.8,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("Ac/59Mg56AAAQh6AAAADHMAAAAtnQAADNB6AAMA56AAAQB4AAAAjNMAAAgtnQAAjHh4AAg");
	this.shape_2.setTransform(983.6,328.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(786.1,162.4,395,332.4);


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(271.3,202,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhZQBZhZB8AAQB9AABYBZQBaBZAAB8QAAB9haBYQhYBah9AAQh8AAhZhag");
	this.shape.setTransform(271,200.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AlZiDIAAEGQAAATAVAAIKKAAQAUAAAAgTIAAkGQAAgSgUAAIqKAAQgVAAAAASg");
	this.shape_1.setTransform(270.2,143.2);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(271.1,200.3,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(271.3,202,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("AlZiDIAAEGQAAATAVAAIKKAAQAUAAAAgTIAAkGQAAgSgUAAIqKAAQgVAAAAASg");
	this.shape_2.setTransform(270.2,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.5,128.2,69.4,102.4);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(202.3,202,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhaQBZhYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBYQhZBah9AAQh8AAhZhag");
	this.shape.setTransform(202,200.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AFGiVIqKAAQgVAAAAASIAAEGQAAATAVAAIKKAAQAVAAAAgTIAAkGQAAgSgVAAg");
	this.shape_1.setTransform(201.2,143.2);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(202.1,200.3,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(202.3,202,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("AFGiVIqKAAQgVAAAAASIAAEGQAAATAVAAIKKAAQAVAAAAgTIAAkGQAAgSgVAAg");
	this.shape_2.setTransform(201.2,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.5,128.2,69.4,102.4);


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(398.3,467.7,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhZQBZhZB8AAQB9AABYBZQBaBZAAB8QAAB9haBYQhYBah9AAQh8AAhZhag");
	this.shape.setTransform(398.1,466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("EA1WAr5MhqrAAAMAAAhXxIKvACIAAExMBf8AADg");
	this.shape_1.setTransform(434.5,412);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(398.1,466,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(398.3,467.7,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("EA1WAr5MhqrAAAMAAAhXxIKvACIAAExMBf8AADg");
	this.shape_2.setTransform(434.5,412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(93,131,683,562);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.num = new lib.選項ABC文字();
	this.num.setTransform(402.8,124.8,1,1,0,0,0,20.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num}]}).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjVDVQhZhYAAh9QAAh8BZhaQBZhYB8AAQB9AABZBYQBZBaAAB8QAAB9hZBYQhZBah9AAQh8AAhZhag");
	this.shape.setTransform(402.6,123.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AN7ikI71AAQg6AAAAAUIAAEhQAAAUA6AAIb1AAQA6AAAAgUIAAkhQAAgUg6AAg");
	this.shape_1.setTransform(261.4,106.7);

	this.instance = new lib.按鈕橘圓();
	this.instance.setTransform(402.6,123.1,1,1,0,0,0,30.4,30.4);

	this.num_1 = new lib.選項ABC文字();
	this.num_1.setTransform(402.8,124.8,1,1,0,0,0,20.4,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(5,1,1).p("AN7ikI71AAQg6AAAAAUIAAEhQAAAUA6AAIb1AAQA6AAAAgUIAAkhQAAgUg6AAg");
	this.shape_2.setTransform(261.4,106.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.num_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.5,90.2,266.4,63.3);


(lib.星星燈號組正式 = function() {
	this.initialize();

	// 圖層 1
	this.s10 = new lib.星星亮燈動畫10();
	this.s10.setTransform(-0.2,24.9,0.667,0.667,0,0,0,30.2,30.2);
	this.s10.visible = false;

	this.s9 = new lib.星星亮燈動畫9();
	this.s9.setTransform(-47,24.3,0.667,0.667,0,0,0,30.2,30.2);
	this.s9.visible = false;

	this.s8 = new lib.星星亮燈動畫8();
	this.s8.setTransform(-93.9,24.5,0.667,0.667,0,0,0,30.1,30.2);
	this.s8.visible = false;

	this.s7 = new lib.星星亮燈動畫7();
	this.s7.setTransform(18,-11.8,0.667,0.667,0,0,0,30.2,30.2);

	this.s6 = new lib.星星亮燈動畫6();
	this.s6.setTransform(-27.9,-11.4,0.667,0.667,0,0,0,30.2,30.2);

	this.s5 = new lib.星星亮燈動畫5();
	this.s5.setTransform(-73.9,-11.8,0.667,0.667,0,0,0,30.2,30.2);

	this.s1 = new lib.星星亮燈動畫1();
	this.s1.setTransform(-257.9,-12.8,0.667,0.667,0,0,0,30.2,30.2);

	this.s2 = new lib.星星亮燈動畫2();
	this.s2.setTransform(-211.9,-13,0.667,0.667,0,0,0,30.2,30.2);

	this.s3 = new lib.星星亮燈動畫3();
	this.s3.setTransform(-165.9,-12.8,0.667,0.667,0,0,0,30.2,30.2);

	this.s4 = new lib.星星亮燈動畫4();
	this.s4.setTransform(-119.9,-12.3,0.667,0.667,0,0,0,30.2,30.2);

	this.addChild(this.s4,this.s3,this.s2,this.s1,this.s5,this.s6,this.s7,this.s8,this.s9,this.s10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-298.1,-53.2,316,41.6);


(lib.題目對話文字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(137.7,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(137.7,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(135.4,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(137.5,41.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(137.7,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(137.5,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(137.7,44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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");
	this.shape_7.setTransform(137.2,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// 圖層 4
	this.instance = new lib.題目對話框框();
	this.instance.setTransform(136.8,54.6,0.658,1.13,0,0,180,149.4,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.3,0,196.8,112.6);


(lib.小精靈笑 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#541B1E").s().p("AA9gNIAWgcQgNAiAHAMIAHAIQgEgDgFgDQhZgwhFBTQAzhoBdAxg");
	this.shape.setTransform(91.9,61.5,1,1,0,0,0,0.9,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#541B1E").s().p("Ag+AjQgBgSgdgTIAgALQA4haBiBAQhlgkg0BYIgFAKQACgFAAgFg");
	this.shape_1.setTransform(60.8,70,1,1,0,0,0,-0.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD8664").s().p("AgfAHQAbgSAkABQgLAKgNAGQgIAFgJAAQgKAAgMgEg");
	this.shape_2.setTransform(82.1,83.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B84864").s().p("AhDAHQBIALA/gtQgLAXgPANQgmgBgaAUQgUgGgZgPg");
	this.shape_3.setTransform(81.1,81.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKARQgGgFgDgIQgBgHAEgHQAFgHAIgBQAGgCAIAEQAHAFACAIQABAGgEAHQgEAHgJACIgEABQgEAAgGgDg");
	this.shape_4.setTransform(47.2,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF100").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAFAUgMATQgNATgWAFIgLABQgOAAgOgJg");
	this.shape_5.setTransform(45.6,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgIQAFgHAIgCQAHgBAHAEQAHAFACAIQABAGgEAHQgFAHgIACIgEABQgFAAgEgDg");
	this.shape_6.setTransform(39.3,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#55C3F1").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAEAWQAFAUgMASQgMATgWAFIgLACQgOAAgOgJg");
	this.shape_7.setTransform(37.7,29);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgIQAFgGAIgDQAHgBAHAEQAHAFACAIQABAGgEAIQgFAGgIADIgEAAQgEAAgFgDg");
	this.shape_8.setTransform(50.1,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F39800").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAEAWQAFAUgMASQgMATgWAFIgLACQgOAAgOgJg");
	this.shape_9.setTransform(48.5,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB6D80").s().p("AgJARQgHgFgCgJQgCgFAFgHQAFgIAHgBQAGgCAHAFQAIAEABAIQACAGgEAHQgFAHgIACIgEABQgEAAgFgDg");
	this.shape_10.setTransform(4.8,47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB6D80").s().p("AgOAYQgKgHgDgLQgCgKAHgKQAGgKAMgCQAJgDAKAGQAKAHACALQADAKgGAKQgHAKgLACIgGABQgHAAgHgEg");
	this.shape_11.setTransform(8.3,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB6D80").s().p("AgRAcQgMgHgDgOQgDgMAIgMQAHgMAOgDQAMgDAMAIQAMAHADAOQADAMgIAMQgHAMgOADIgHABQgIAAgJgGg");
	this.shape_12.setTransform(13.8,50.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB6D80").s().p("AgVAjQgQgJgDgSQgEgOAJgPQAKgPARgEQAQgFAPAKQAPAKADARQAEAPgJAQQgKAPgRAEIgJABQgLAAgKgIg");
	this.shape_13.setTransform(18.4,45.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB6D80").s().p("AgaArQgSgMgFgUQgEgTALgSQAMgSAVgFQASgEASALQASAMAFAUQAFATgMASQgLASgVAFIgLABQgNAAgNgIg");
	this.shape_14.setTransform(20.7,37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DB6D80").s().p("AggA0QgXgNgFgaQgFgYANgWQAOgVAagGQAXgGAWAOQAWAOAGAaQAFAXgOAXQgOAWgZAFQgHACgGAAQgRAAgPgLg");
	this.shape_15.setTransform(26.9,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DB6D80").s().p("Ag2BWQgkgXgJgpQgKgoAYgkQAXgkApgJQAogJAkAXQAkAXAJAqQAJAngXAkQgXAkgqAJQgLADgKAAQgcAAgagRg");
	this.shape_16.setTransform(40.6,21.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKARQgHgEgCgJQgBgHAEgGQAFgIAIgBQAGgDAHAFQAHAEACAJQACAHgEAGQgFAIgIABIgEABQgEAAgGgDg");
	this.shape_17.setTransform(86.9,12.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF100").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAFAUgNATQgMATgWAFIgLABQgOAAgOgJg");
	this.shape_18.setTransform(89.3,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgHQAFgHAIgCQAHgCAHAEQAHAFABAIQACAHgEAHQgFAHgIABIgEABQgEAAgFgDg");
	this.shape_19.setTransform(96.4,14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#55C3F1").s().p("AgcAtQgTgMgFgWQgFgUAMgTQANgTAWgFQAUgFASANQAUAMAEAWQAFAUgMASQgMATgWAFIgLACQgPAAgNgJg");
	this.shape_20.setTransform(98.8,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKARQgHgFgCgIQgBgGAEgHQAFgHAIgCQAGgCAHAEQAHAFACAIQACAHgEAHQgFAHgIACIgEAAQgEAAgGgDg");
	this.shape_21.setTransform(80.9,6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F39800").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAEAUgMATQgMATgWAFIgLABQgOAAgOgJg");
	this.shape_22.setTransform(83.3,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DB6D80").s().p("AgJARQgHgFgCgIQgCgHAFgGQAEgHAIgCQAGgCAHAFQAHAEACAIQACAGgFAIQgEAGgIACIgEABQgEAAgFgDg");
	this.shape_23.setTransform(136.2,18.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DB6D80").s().p("AgOAYQgKgHgDgLQgCgKAGgKQAHgKALgCQAKgDAKAGQAKAHACALQADAKgGAKQgHAKgLACIgGABQgGAAgIgEg");
	this.shape_24.setTransform(134.2,22.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DB6D80").s().p("AgRAcQgMgHgDgOQgDgMAIgMQAHgMAOgDQAMgDAMAIQAMAHADAOQADAMgIAMQgHAMgOADIgHABQgIAAgJgGg");
	this.shape_25.setTransform(129.6,25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DB6D80").s().p("AgWAkQgPgKgEgRQgEgQAKgOQAKgPARgEQAPgEAQAJQAOAKAEARQAEAQgJAPQgKAPgRADIgJABQgLAAgLgGg");
	this.shape_26.setTransform(123.1,22.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DB6D80").s().p("AgaArQgTgMgEgVQgEgSALgSQALgSAWgFQASgFASAMQASAMAFAUQAFATgMASQgLASgWAFIgKABQgOAAgMgIg");
	this.shape_27.setTransform(117.6,15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DB6D80").s().p("AghA1QgVgOgGgaQgGgXAOgXQAOgWAagFQAXgFAXAOQAVAOAGAZQAGAYgOAWQgOAVgaAGQgHACgGAAQgRAAgQgKg");
	this.shape_28.setTransform(108,9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DB6D80").s().p("Ag2BWQgkgXgJgpQgKgoAYgkQAXgkApgJQAogJAkAXQAkAXAJApQAKAogYAkQgXAkgpAJQgMADgKAAQgcAAgagRg");
	this.shape_29.setTransform(93.2,10.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D75174").s().p("AB+FvQA/loiFjTQhTiJiUg4QBPAKBOApQAxAbAqAiQB8BogZEqQgNCXglCCg");
	this.shape_30.setTransform(96,46.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DB6D80").s().p("Al3AZQgmiMBHhlQBgiIBzg3QBfgtBmAMQCUA4BVCJQCFDUg/FnQAqlujRh6QhBgmhSgJIhDgCQlBBuBQEjQAlCJBdB3QjPj3gtisg");
	this.shape_31.setTransform(71.7,50.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE000").s().p("AgFAFIgPgFIAQgEIACgQIAHAOIAQgDIgLAKIAIAPIgPgHIgJAMg");
	this.shape_32.setTransform(15.4,72.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F39800").s().p("AgDADIgLgDIALgCIACgMIAEAKIAMgCIgIAHIAGAKIgLgFIgGAJg");
	this.shape_33.setTransform(6.7,92.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C59AC5").s().p("AgEAEIgMgEIANgDIACgOIAFAMIANgDIgJAJIAHAMIgNgGIgHALg");
	this.shape_34.setTransform(1.8,73.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE000").s().p("AgDAEIgLgEIAMgCIABgNIAEALIAMgDIgJAHIAHALIgMgFIgFAKg");
	this.shape_35.setTransform(2.9,83.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EC7080").s().p("AgGAGIgSgGIAUgFIACgTIAHARIAUgFIgNANIAKARIgSgIIgLAPg");
	this.shape_36.setTransform(10.1,79.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C59AC5").s().p("AgDAEIgMgEIAMgCIACgOIAEAMIANgDIgIAIIAGALIgMgFIgHAKg");
	this.shape_37.setTransform(20.1,94.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFE000").s().p("AgGAGIgTgGIAVgFIABgUIAIASIAVgFIgOAOIALARIgTgIIgMAPg");
	this.shape_38.setTransform(14.8,89);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3EDFB").s().p("AgHAGIgUgHIAWgEIACgWIAJATIAWgFIgPAPIALATIgUgJIgNAQg");
	this.shape_39.setTransform(22,80.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB6D80").s().p("AhHBUQgVjNCMiNIAbARQg4AqgmBUQhRCoBODWQgnhLgKhog");
	this.shape_40.setTransform(54.9,55.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DB6D80").s().p("AgJh6Qguglg0gWIgrgOIARgcQC7BFBDDCQAiBjgEBVQgSjiiOh4g");
	this.shape_41.setTransform(90.8,48.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231916").s().p("AAkgiQApAIAdAYQhNglhLAjQgXAJgVARQgKAJgFAGQA8hVBRAOg");
	this.shape_42.setTransform(57.2,56.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231916").s().p("AhbAWQAPgWAVgQQBAg0BfAyQgggMgqACQhRAEg0BDg");
	this.shape_43.setTransform(91.3,49.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7B981").s().p("AgDAPQgFgCgEgGQgDgFABgEQACgGAGgEQAFgDAEABQAHACADAFQADAGgCAEQgBAGgFAEQgEACgEAAIgDAAg");
	this.shape_44.setTransform(79,74.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCE2BA").s().p("AhHFoQjmg9hJk/QgNhAAfhLQBAiXDkg2IAwgHQA5gFA3AHQCvAZBGCQQApBogEB4QgID0jkBYQg1ASg6AAQgwAAg2gOg");
	this.shape_45.setTransform(74.7,57.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E7BE99").s().p("AAAAhIgegYQgngxAjgCQASgBAYAIIAsBEQgKAKgNAAQgNAAgQgKg");
	this.shape_46.setTransform(42.5,72.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCE2BA").s().p("AAdBhQgQgOgggzQgpg9hRhbQBAAVBGAwQALAJAcAIQAYAIAOAOQB6B4hUALIgQACQgkAAgbgYg");
	this.shape_47.setTransform(36.2,68.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E7BE99").s().p("AgiA0IALhPIAigZQAigNgOA/QgHAQgLARQgPAYgTAAQgGAAgHgDg");
	this.shape_48.setTransform(113.3,56.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCE2BA").s().p("Ag8AXQAHgTATgOQAWgUAIgOQAohHAzgvQgjBygMBKQgJA9gJATQgSAogrAOQgLADgIAAQg2AAA0iMg");
	this.shape_49.setTransform(116.3,49.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DB6D80").s().p("AAOC4QhZgbgUjkIgDhzIAQBDQAVBPAXA7QBHDDBCgxQgdAWgeAAQgNAAgNgDg");
	this.shape_50.setTransform(118.9,51.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DB6D80").s().p("Ag6DIQBPARgPjQQgFg/gNhRIgNhDIArBpQBODXhHA/QgZAWggAAQgMAAgOgDg");
	this.shape_51.setTransform(40.2,68.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009243").s().p("AgRCxQgRgBgTgPQAmAAASgcIAMgcQAXg5AOjgQAIBfgTB7QgJA+gMArQgPAegVAAIgBAAg");
	this.shape_52.setTransform(102.4,127.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3AAE3A").s().p("Ag7CzQAYAGASgTIAMgVQANgjgUhxIgXhtQAEgTAqghQAWgQAVgMQAEAUADAcQgODggXA5IgMAcQgSAcgmAAg");
	this.shape_53.setTransform(101.5,124.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A0C913").s().p("AgaCjIgcgVQAOAHAXgVIARgXQAKhRgfhnIgjhYQARAKA4AOQAxBogLBpQgGA2gPAhQgSAPgRAAQgMAAgNgFg");
	this.shape_54.setTransform(96.7,127.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFD700").s().p("Ah/BCQgGgDgFgKIgDgIIgBgIQAIAQANgBQATgBAZgoIAcAUQAdALAEgqIAfAKQAeADgIgtIAgASQAfAJABgmIAPgEQAQgGAGgOQAFAGAAAGQgFARgRAHIgRAEQAAAkgggJIgggQQAJAtgfgDIgegNQgEAtgdgLIgcgUQgbApgTAAQgEAAgEgCg");
	this.shape_55.setTransform(89.8,95.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFF100").s().p("Ah/BLQgGgEgFgJIgDgJQgEguAwgbQAYgPAZgFQB1gvAxAPQAYAIABARQgFARgRAHIgRAEQAAAkgggJIgggPQAJAsgfgDIgegMQgEAsgdgLIgcgUQgbAqgTAAQgEAAgEgCg");
	this.shape_56.setTransform(89.8,94.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F29B76").s().p("Ag9AHIBpgvIASAfIgmAuIguAEg");
	this.shape_57.setTransform(99,110.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F29B76").s().p("AhCArIgkgZIgFhCICDg4QAOApAkA/QASAdAQAXIhyA1QgUgfgogfg");
	this.shape_58.setTransform(94.2,101.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FCE2BA").s().p("AgYA2IhvgeIADgtIB1AdIAqgFIATgfQAZghAdABIAWACQAUAHgKAaQgGAMgLAMQgWAXgXAHIAZAGQAPAJgxANIgaAEg");
	this.shape_59.setTransform(109.6,92.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCE2BA").s().p("AgRAKIAOgaIAWAKQgbAXgHAAQgEAAACgHg");
	this.shape_60.setTransform(62.6,104.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F29B76").s().p("AgHAZQgKgEgFgJQgFgKADgJQAEgKAKgFQAKgFAIADQALAEAFAKQAFAKgEAIQgEALgJAFQgGACgGAAQgCAAgFgBg");
	this.shape_61.setTransform(26.7,89.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DC5E9E").s().p("ADDBcImMinQgDgCgBgDQgCgDACgEQABgDAEgBQADgCADACIGMCnQADABABAEQACADgCADQgCAGgFAAIgEgBg");
	this.shape_62.setTransform(47.1,98.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCE2BA").s().p("AhxBAQgHgHgLgSQgCgEgEgNQgEgPADgDIALgIQAJgIAEABIBEACQAYAFAtgWQAfgOAigXQATgMAHAEIAXAWQASAShLAfQg5AWg1ANQgOAEgOAPQgOAPgOADIgGABQgLAAgKgJg");
	this.shape_63.setTransform(71.5,102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// 圖層 2
	this.instance = new lib.翅膀單();
	this.instance.setTransform(88,102,0.584,0.584,0,-83.2,96.7,7.7,32.5);

	this.instance_1 = new lib.翅膀單();
	this.instance_1.setTransform(87.4,100.7,0.585,0.585,0,-26.2,153.7,5.5,35.5);

	this.instance_2 = new lib.翅膀單();
	this.instance_2.setTransform(96.6,99.9,0.685,0.685,41.6,0,0,3.8,36.2);

	this.instance_3 = new lib.翅膀單();
	this.instance_3.setTransform(96.7,96.6,0.687,0.687,-15.2,0,0,0.7,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regX:0.7,regY:33.8,scaleX:0.687,scaleY:0.687,rotation:-15.2,x:96.7,y:96.6}},{t:this.instance_2,p:{regX:3.8,regY:36.2,scaleX:0.685,scaleY:0.685,rotation:41.6,x:96.6,y:99.9}},{t:this.instance_1,p:{regX:5.5,regY:35.5,scaleX:0.585,scaleY:0.585,skewX:-26.2,skewY:153.7,x:87.4,y:100.7}},{t:this.instance,p:{regX:7.7,regY:32.5,skewX:-83.2,skewY:96.7,x:88,y:102}}]}).to({state:[{t:this.instance_3,p:{regX:22.7,regY:19.8,scaleX:0.688,scaleY:0.688,rotation:0,x:111.8,y:86.9}},{t:this.instance_2,p:{regX:22.7,regY:19.8,scaleX:0.686,scaleY:0.686,rotation:34.4,x:113.7,y:97.9}},{t:this.instance_1,p:{regX:22.7,regY:19.8,scaleX:0.586,scaleY:0.586,skewX:-36.5,skewY:143.4,x:73.9,y:99.3}},{t:this.instance,p:{regX:22.6,regY:19.8,skewX:-70.9,skewY:109,x:78.2,y:107.8}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.3,145.5);


(lib.小精靈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKARQgGgFgDgIQgBgHAEgHQAFgHAIgBQAGgCAIAEQAHAFACAIQABAGgEAHQgEAHgJACIgEABQgEAAgGgDg");
	this.shape.setTransform(47.2,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAFAUgMATQgNATgWAFIgLABQgOAAgOgJg");
	this.shape_1.setTransform(45.6,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgIQAFgHAIgCQAHgBAHAEQAHAFACAIQABAGgEAHQgFAHgIACIgEABQgFAAgEgDg");
	this.shape_2.setTransform(39.3,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#55C3F1").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAEAWQAFAUgMASQgMATgWAFIgLACQgOAAgOgJg");
	this.shape_3.setTransform(37.7,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgIQAFgGAIgDQAHgBAHAEQAHAFACAIQABAGgEAIQgFAGgIADIgEAAQgEAAgFgDg");
	this.shape_4.setTransform(50.1,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F39800").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAEAWQAFAUgMASQgMATgWAFIgLACQgOAAgOgJg");
	this.shape_5.setTransform(48.5,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB6D80").s().p("AgJARQgHgFgCgJQgCgFAFgHQAFgIAHgBQAGgCAHAFQAIAEABAIQACAGgEAHQgFAHgIACIgEABQgEAAgFgDg");
	this.shape_6.setTransform(4.8,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB6D80").s().p("AgOAYQgKgHgDgLQgCgKAHgKQAGgKAMgCQAJgDAKAGQAKAHACALQADAKgGAKQgHAKgLACIgGABQgHAAgHgEg");
	this.shape_7.setTransform(8.3,49.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB6D80").s().p("AgRAcQgMgHgDgOQgDgMAIgMQAHgMAOgDQAMgDAMAIQAMAHADAOQADAMgIAMQgHAMgOADIgHABQgIAAgJgGg");
	this.shape_8.setTransform(13.8,50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB6D80").s().p("AgVAjQgQgJgDgSQgEgOAJgPQAKgPARgEQAQgFAPAKQAPAKADARQAEAPgJAQQgKAPgRAEIgJABQgLAAgKgIg");
	this.shape_9.setTransform(18.4,45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB6D80").s().p("AgaArQgSgMgFgUQgEgTALgSQAMgSAVgFQASgEASALQASAMAFAUQAFATgMASQgLASgVAFIgLABQgNAAgNgIg");
	this.shape_10.setTransform(20.7,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB6D80").s().p("AggA0QgXgNgFgaQgFgYANgWQAOgVAagGQAXgGAWAOQAWAOAGAaQAFAXgOAXQgOAWgZAFQgHACgGAAQgRAAgPgLg");
	this.shape_11.setTransform(26.9,27.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB6D80").s().p("Ag2BWQgkgXgJgpQgKgoAYgkQAXgkApgJQAogJAkAXQAkAXAJAqQAJAngXAkQgXAkgqAJQgLADgKAAQgcAAgagRg");
	this.shape_12.setTransform(40.6,21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKARQgHgEgCgJQgBgHAEgGQAFgIAIgBQAGgDAHAFQAHAEACAJQACAHgEAGQgFAIgIABIgEABQgEAAgGgDg");
	this.shape_13.setTransform(86.9,12.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF100").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAFAUgNATQgMATgWAFIgLABQgOAAgOgJg");
	this.shape_14.setTransform(89.3,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJARQgHgFgCgIQgCgGAEgHQAFgHAIgCQAHgCAHAEQAHAFABAIQACAHgEAHQgFAHgIABIgEABQgEAAgFgDg");
	this.shape_15.setTransform(96.4,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#55C3F1").s().p("AgcAtQgTgMgFgWQgFgUAMgTQANgTAWgFQAUgFASANQAUAMAEAWQAFAUgMASQgMATgWAFIgLACQgPAAgNgJg");
	this.shape_16.setTransform(98.8,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKARQgHgFgCgIQgBgGAEgHQAFgHAIgCQAGgCAHAEQAHAFACAIQACAHgEAHQgFAHgIACIgEAAQgEAAgGgDg");
	this.shape_17.setTransform(80.9,6.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F39800").s().p("AgcAtQgTgMgFgWQgFgUANgTQAMgTAWgFQAUgFATANQATAMAFAWQAEAUgMATQgMATgWAFIgLABQgOAAgOgJg");
	this.shape_18.setTransform(83.3,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DB6D80").s().p("AgJARQgHgFgCgIQgCgHAFgGQAEgHAIgCQAGgCAHAFQAHAEACAIQACAGgFAIQgEAGgIACIgEABQgEAAgFgDg");
	this.shape_19.setTransform(136.2,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DB6D80").s().p("AgOAYQgKgHgDgLQgCgKAGgKQAHgKALgCQAKgDAKAGQAKAHACALQADAKgGAKQgHAKgLACIgGABQgGAAgIgEg");
	this.shape_20.setTransform(134.2,22.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DB6D80").s().p("AgRAcQgMgHgDgOQgDgMAIgMQAHgMAOgDQAMgDAMAIQAMAHADAOQADAMgIAMQgHAMgOADIgHABQgIAAgJgGg");
	this.shape_21.setTransform(129.6,25.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DB6D80").s().p("AgWAkQgPgKgEgRQgEgQAKgOQAKgPARgEQAPgEAQAJQAOAKAEARQAEAQgJAPQgKAPgRADIgJABQgLAAgLgGg");
	this.shape_22.setTransform(123.1,22.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DB6D80").s().p("AgaArQgTgMgEgVQgEgSALgSQALgSAWgFQASgFASAMQASAMAFAUQAFATgMASQgLASgWAFIgKABQgOAAgMgIg");
	this.shape_23.setTransform(117.6,15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DB6D80").s().p("AghA1QgVgOgGgaQgGgXAOgXQAOgWAagFQAXgFAXAOQAVAOAGAZQAGAYgOAWQgOAVgaAGQgHACgGAAQgRAAgQgKg");
	this.shape_24.setTransform(108,9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DB6D80").s().p("Ag2BWQgkgXgJgpQgKgoAYgkQAXgkApgJQAogJAkAXQAkAXAJApQAKAogYAkQgXAkgpAJQgMADgKAAQgcAAgagRg");
	this.shape_25.setTransform(93.2,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D75174").s().p("AB+FvQA/loiFjTQhTiJiUg4QBPAKBOApQAxAbAqAiQB8BogZEqQgNCXglCCg");
	this.shape_26.setTransform(96,46.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DB6D80").s().p("Al3AZQgmiMBHhlQBgiIBzg3QBfgtBmAMQCUA4BVCJQCFDUg/FnQAqlujRh6QhBgmhSgJIhDgCQlBBuBQEjQAlCJBdB3QjPj3gtisg");
	this.shape_27.setTransform(71.7,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE000").s().p("AgFAFIgPgFIAQgEIACgQIAHAOIAQgDIgLAKIAIAPIgPgHIgJAMg");
	this.shape_28.setTransform(15.4,72.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F39800").s().p("AgDADIgLgDIALgCIACgMIAEAKIAMgCIgIAHIAGAKIgLgFIgGAJg");
	this.shape_29.setTransform(6.7,92.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C59AC5").s().p("AgEAEIgMgEIANgDIACgOIAFAMIANgDIgJAJIAHAMIgNgGIgHALg");
	this.shape_30.setTransform(1.8,73.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE000").s().p("AgDAEIgLgEIAMgCIABgNIAEALIAMgDIgJAHIAHALIgMgFIgFAKg");
	this.shape_31.setTransform(2.9,83.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EC7080").s().p("AgGAGIgSgGIAUgFIACgTIAHARIAUgFIgNANIAKARIgSgIIgLAPg");
	this.shape_32.setTransform(10.1,79.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C59AC5").s().p("AgDAEIgMgEIAMgCIACgOIAEAMIANgDIgIAIIAGALIgMgFIgHAKg");
	this.shape_33.setTransform(20.1,94.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE000").s().p("AgGAGIgTgGIAVgFIABgUIAIASIAVgFIgOAOIALARIgTgIIgMAPg");
	this.shape_34.setTransform(14.8,89);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D3EDFB").s().p("AgHAGIgUgHIAWgEIACgWIAJATIAWgFIgPAPIALATIgUgJIgNAQg");
	this.shape_35.setTransform(22,80.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B84864").s().p("AgSANQgWgMAGgIIAsAXIAWgsQAJAFgLAXQgFAKgMATQgTgJgMgHg");
	this.shape_36.setTransform(81.8,84.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB6D80").s().p("AhHBUQgVjNCMiNIAbARQg4AqgmBUQhRCoBODWQgnhLgKhog");
	this.shape_37.setTransform(54.9,55.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DB6D80").s().p("AgJh6Qguglg0gWIgrgOIARgcQC7BFBDDCQAiBjgEBVQgSjiiOh4g");
	this.shape_38.setTransform(90.8,48.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231916").s().p("AAkgiQApAIAdAYQhNglhLAjQgXAJgVARQgKAJgFAGQA8hVBRAOg");
	this.shape_39.setTransform(57.2,56.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231916").s().p("AhbAWQAPgWAVgQQBAg0BfAyQgggMgqACQhRAEg0BDg");
	this.shape_40.setTransform(91.3,49.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAKQgEgDgBgFQgBgDACgFQADgEAGgBQADgBAFADQAFACABAGQABADgEAFQgDAFgFABIgCAAQgDAAgDgDg");
	this.shape_41.setTransform(63.7,68.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#203134").s().p("AgSAcQgMgIgCgOQgDgMAIgMQAIgMAOgDQAMgCAMAIQAMAIACAOQADAMgIAMQgIAMgOACIgGABQgJAAgJgGg");
	this.shape_42.setTransform(65.1,69.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#81292D").s().p("AgRBCIAFgjIgoANQgLgPgDgQQgGgaAQgYQAQgYAcgFQAagGAYAQQAYAQAFAcQAGAagQAYQgQAYgcAGIgNABQgIAAgJgDg");
	this.shape_43.setTransform(64.2,69.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXBjQgpgKgWgkQgWglAKgnQAKgpAkgWQAkgWAoAKQApAKAWAkQAWAkgKAoQgKApgkAWQgaAPgbAAQgKAAgNgDg");
	this.shape_44.setTransform(62.4,69.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGALQgFgDAAgGQgCgDAEgFQADgFAFgBQADgBAFADQAFADAAAGQACADgEAFQgDAFgFABIgCAAQgCAAgEgCg");
	this.shape_45.setTransform(95,61.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#203134").s().p("AgSAcQgMgHgDgPQgCgMAIgMQAIgMAOgCQAMgDAMAIQAMAIACAOQADAMgIAMQgIAMgOADIgGAAQgIAAgKgGg");
	this.shape_46.setTransform(96.4,62.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#81292D").s().p("AgRBCIAGgjIgpANQgLgOgDgRQgGgaAQgYQAQgYAcgGQAbgFAXAQQAYAQAGAcQAFAagQAYQgQAYgcAFIgNACQgIAAgJgDg");
	this.shape_47.setTransform(95.5,63);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXBjQgpgKgWglQgWgjAKgoQAKgpAkgWQAkgWAoAKQApAJAWAlQAWAlgKAmQgKAqgkAWQgZAPgbAAQgLAAgNgDg");
	this.shape_48.setTransform(93.7,63.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7B981").s().p("AgDAPQgFgCgEgGQgDgFABgEQACgGAGgEQAFgDAEABQAHACADAFQADAGgCAEQgBAGgFAEQgEACgEAAIgDAAg");
	this.shape_49.setTransform(79,74.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCE2BA").s().p("AhHFoQjmg9hJk/QgNhAAfhLQBAiXDkg2IAwgHQA5gFA3AHQCvAZBGCQQApBogEB4QgID0jkBYQg1ASg6AAQgwAAg2gOg");
	this.shape_50.setTransform(74.7,57.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E7BE99").s().p("AAAAhIgegYQgngxAjgCQASgBAYAIIAsBEQgKAKgNAAQgNAAgQgKg");
	this.shape_51.setTransform(42.5,72.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCE2BA").s().p("AAdBhQgQgOgggzQgpg9hRhbQBAAVBGAwQALAJAcAIQAYAIAOAOQB6B4hUALIgQACQgkAAgbgYg");
	this.shape_52.setTransform(36.2,68.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E7BE99").s().p("AgiA0IALhPIAigZQAigNgOA/QgHAQgLARQgPAYgTAAQgGAAgHgDg");
	this.shape_53.setTransform(113.3,56.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCE2BA").s().p("Ag8AXQAHgTATgOQAWgUAIgOQAohHAzgvQgjBygMBKQgJA9gJATQgSAogrAOQgLADgIAAQg2AAA0iMg");
	this.shape_54.setTransform(116.3,49.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DB6D80").s().p("AAOC4QhZgbgUjkIgDhzIAQBDQAVBPAXA7QBHDDBCgxQgdAWgeAAQgNAAgNgDg");
	this.shape_55.setTransform(118.9,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DB6D80").s().p("Ag6DIQBPARgPjQQgFg/gNhRIgNhDIArBpQBODXhHA/QgZAWggAAQgMAAgOgDg");
	this.shape_56.setTransform(40.2,68.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009243").s().p("AgRCxQgRgBgTgPQAmAAASgcIAMgcQAXg5AOjgQAIBfgTB7QgJA+gMArQgPAegVAAIgBAAg");
	this.shape_57.setTransform(102.4,127.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3AAE3A").s().p("Ag7CzQAYAGASgTIAMgVQANgjgUhxIgXhtQAEgTAqghQAWgQAVgMQAEAUADAcQgODggXA5IgMAcQgSAcgmAAg");
	this.shape_58.setTransform(101.5,124.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A0C913").s().p("AgaCjIgcgVQAOAHAXgVIARgXQAKhRgfhnIgjhYQARAKA4AOQAxBogLBpQgGA2gPAhQgSAPgRAAQgMAAgNgFg");
	this.shape_59.setTransform(96.7,127.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFD700").s().p("Ah/BCQgGgDgFgKIgDgIIgBgIQAIAQANgBQATgBAZgoIAcAUQAdALAEgqIAfAKQAeADgIgtIAgASQAfAJABgmIAPgEQAQgGAGgOQAFAGAAAGQgFARgRAHIgRAEQAAAkgggJIgggQQAJAtgfgDIgegNQgEAtgdgLIgcgUQgbApgTAAQgEAAgEgCg");
	this.shape_60.setTransform(89.8,95.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF100").s().p("Ah/BLQgGgEgFgJIgDgJQgEguAwgbQAYgPAZgFQB1gvAxAPQAYAIABARQgFARgRAHIgRAEQAAAkgggJIgggPQAJAsgfgDIgegMQgEAsgdgLIgcgUQgbAqgTAAQgEAAgEgCg");
	this.shape_61.setTransform(89.8,94.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F29B76").s().p("Ag9AHIBpgvIASAfIgmAuIguAEg");
	this.shape_62.setTransform(99,110.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F29B76").s().p("AhCArIgkgZIgFhCICDg4QAOApAkA/QASAdAQAXIhyA1QgUgfgogfg");
	this.shape_63.setTransform(94.2,101.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCE2BA").s().p("AgYA2IhvgeIADgtIB1AdIAqgFIATgfQAZghAdABIAWACQAUAHgKAaQgGAMgLAMQgWAXgXAHIAZAGQAPAJgxANIgaAEg");
	this.shape_64.setTransform(109.6,92.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCE2BA").s().p("AgRAKIAOgaIAWAKQgbAXgHAAQgEAAACgHg");
	this.shape_65.setTransform(62.6,104.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F29B76").s().p("AgHAZQgKgEgFgJQgFgKADgJQAEgKAKgFQAKgFAIADQALAEAFAKQAFAKgEAIQgEALgJAFQgGACgGAAQgCAAgFgBg");
	this.shape_66.setTransform(26.7,89.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC5E9E").s().p("ADDBcImMinQgDgCgBgDQgCgDACgEQABgDAEgBQADgCADACIGMCnQADABABAEQACADgCADQgCAGgFAAIgEgBg");
	this.shape_67.setTransform(47.1,98.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCE2BA").s().p("AhxBAQgHgHgLgSQgCgEgEgNQgEgPADgDIALgIQAJgIAEABIBEACQAYAFAtgWQAfgOAigXQATgMAHAEIAXAWQASAShLAfQg5AWg1ANQgOAEgOAPQgOAPgOADIgGABQgLAAgKgJg");
	this.shape_68.setTransform(71.5,102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// 圖層 2
	this.instance = new lib.翅膀單();
	this.instance.setTransform(88,102,0.584,0.584,0,-83.2,96.7,7.7,32.5);

	this.instance_1 = new lib.翅膀單();
	this.instance_1.setTransform(87.4,100.7,0.585,0.585,0,-26.2,153.7,5.5,35.5);

	this.instance_2 = new lib.翅膀單();
	this.instance_2.setTransform(96.6,99.9,0.685,0.685,41.6,0,0,3.8,36.2);

	this.instance_3 = new lib.翅膀單();
	this.instance_3.setTransform(96.7,96.6,0.687,0.687,-15.2,0,0,0.7,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regX:0.7,regY:33.8,scaleX:0.687,scaleY:0.687,rotation:-15.2,x:96.7,y:96.6}},{t:this.instance_2,p:{regX:3.8,regY:36.2,scaleX:0.685,scaleY:0.685,rotation:41.6,x:96.6,y:99.9}},{t:this.instance_1,p:{regX:5.5,regY:35.5,scaleX:0.585,scaleY:0.585,skewX:-26.2,skewY:153.7,x:87.4,y:100.7}},{t:this.instance,p:{regX:7.7,regY:32.5,skewX:-83.2,skewY:96.7,x:88,y:102}}]}).to({state:[{t:this.instance_3,p:{regX:22.7,regY:19.8,scaleX:0.688,scaleY:0.688,rotation:0,x:111.8,y:86.9}},{t:this.instance_2,p:{regX:22.7,regY:19.8,scaleX:0.686,scaleY:0.686,rotation:34.4,x:113.7,y:97.9}},{t:this.instance_1,p:{regX:22.7,regY:19.8,scaleX:0.586,scaleY:0.586,skewX:-36.5,skewY:143.4,x:73.9,y:99.3}},{t:this.instance,p:{regX:22.6,regY:19.8,skewX:-70.9,skewY:109,x:78.2,y:107.8}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.3,145.5);


(lib.整底圖 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AiBC/QgugFgbglQgdgngGhFQgFg2ALgxQAMg8AgghQAhggAwgCIAKAAQBdgDA4AFQBqAJAtAiQAXASAJAZQAIAZgKAYQgOAhguATQhLAfiJgSQAAB4gnAnQgTATgaAAgAisiJQgaAcgLA0QgKAxAGA0QAGA7AYAgQAVAeAjADQAUACANgOQATgUAIgwQAHgngCgwIAAgBQAAgYgCgTQgBgEADgEQADgEAFAAQAFgBADADQAEADABAFIACAkQBuAOBFgQQA6gQAOgiQAHgQgGgSQgGgSgRgNQg3gpinAAIg/ABIgLAAQgnABgbAcg");
	this.shape.setTransform(88.6,161.5,0.704,0.704,-134);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2990A").s().p("Ag2CpQgmgggKhLQgIg8AMg2QAMg4AegfQAegfAqgBIBagCIgXAFIgtAQQgxAagcAtQg5BbAtCcIACAIgAAQinQgpABgcAeQgeAegLA3QgLAzAHA6QAIBGAhAgQgqiYA5hbQAlg8BHgZg");
	this.shape_1.setTransform(93.8,167.8,0.704,0.704,-134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED7E08").s().p("AhZBBQgIg8AMg2QAMg6AegdQAdgeApgBIBCgCQgOADgTAJQgnARgaAeQhaBfA1C4QglgfgKhJg");
	this.shape_2.setTransform(94.3,168.5,0.704,0.704,-134);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2990A").s().p("AiPCzQgdgDgUgRQg1i4BahgQAcgdAngSQATgIAOgDQCxgBA8AtQAbAVADAdQAEAegaAYQhCA7i9gcQACBHgNAuQgSA/grAAIgGgBg");
	this.shape_3.setTransform(87.4,160.4,0.704,0.704,-134);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AGzAAItlnnIAAPQg");
	this.shape_4.setTransform(182.3,165.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmynoINlHoItlHpg");
	this.shape_5.setTransform(182.3,165.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AB5907").s().p("AmrngINXHgItXHgg");
	this.shape_6.setTransform(186.3,169);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AgIq6QAFgBADAAQEhAADODNQDNDNAAEhQAAEijNDNQjODNkhAAQkhAAjNjNQjNjNAAkiQAAgCAAgEQADkdDKjLQDKjKEcgCg");
	this.shape_7.setTransform(169.5,165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2990A").s().p("AnQHRQi1i0gMj7QADkbDKjLQDKjKEagDQD8ALC1C1QDBDBAAEQQAAEPjBDCQjBDBkQAAQkPAAjBjBg");
	this.shape_8.setTransform(165.3,160.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED7E08").s().p("AnuHvQjNjNAAkiIAAgGQAMD5C1C0QDBDBEQAAQEPAADBjBQDBjCAAkOQAAkRjBjBQi1i1j6gLIAIAAQEhAADODNQDNDNAAEhQAAEijNDNQjODNkhAAQkhAAjNjNg");
	this.shape_9.setTransform(169.5,165);

	this.instance = new lib.小貓綵球動();
	this.instance.setTransform(67.1,153,2.524,2.524,0,0,0,38,60);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(98,98,98,0.302)").s().p("AoxDHQjphTAAh0QAAh0DphSQDqhTFHAAQFJAADoBTQDpBSAAB0QAAB0jpBTQjoBTlJAAQlHAAjqhTg");
	this.shape_10.setTransform(125.3,221.3,1.262,0.445,0,0,0,0,0.1);

	this.text = new cjs.Text("校園", "25px DFGirlW3-B5", "#763001");
	this.text.lineHeight = 27;
	this.text.setTransform(85.4,6.3,3.07,3.07);

	this.addChild(this.text,this.shape_10,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.4,6.3,238.4,228.8);


(lib.topicMc = function() {
	this.initialize();

	// 圖層 2
	this.btn = new lib.確定2();
	this.btn.setTransform(195.2,320.9,1.5,1.5);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.確定2(), 3);

	this.txt = new lib.說明文字組();
	this.txt.setTransform(270.1,139.5,1,1,0,0,0,244.9,57);

	// 圖層 1
	this.bg = new lib.topicMcbg();
	this.bg.setTransform(193.8,190.1,1,1,0,0,0,193.8,190.1);

	this.addChild(this.bg,this.txt,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,387.6,397.8);


(lib.小精靈亂飛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.小精靈();
	this.instance.setTransform(-290.3,33.5,1.372,1.372,0,0,180,69.1,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.4},15).to({y:33.5},20).to({y:41.6},18).to({y:33.5},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.2,-66.4,189.8,199.7);


(lib.小精靈換表情 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.小精靈笑();
	this.instance.setTransform(0,1.1,1,1,0,0,0,69.1,72.8);

	this.instance_1 = new lib.小精靈();
	this.instance_1.setTransform(0,1.1,1,1,0,0,0,69.1,72.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-71.7,138.3,145.5);


(lib.小精靈上下漂浮換表情 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.小精靈換表情();
	this.instance.setTransform(69.1,73.1,1,1,0,0,0,69.1,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:68.1},19).to({y:73.1},20).to({y:78.1},20).to({y:73.1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-71.4,138.3,145.5);


(lib.小精靈上下漂浮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.小精靈();
	this.instance.setTransform(69.1,73.1,1,1,0,0,0,69.1,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:68.1},19).to({y:73.1},20).to({y:78.1},20).to({y:73.1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,138.3,145.5);


(lib.小精靈出題 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.visible = false;
	}
	this.frame_9 = function() {
		this.stop();
		this.txt.visible = true;
	}
	this.frame_19 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19));

	// 圖層 7
	this.instance = new lib.亮晶晶一群("synched",0);
	this.instance.setTransform(232.3,103.2,1,1,0,0,0,105.7,86.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0,_off:false},0).wait(10));

	// 小精靈
	this.instance_1 = new lib.小精靈上下漂浮();
	this.instance_1.setTransform(393.3,-364,1,1,0,0,0,69.1,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:238.9,y:87.1},9).wait(11));

	// 題目文字
	this.txt = new lib.題目對話文字();
	this.txt.setTransform(273.6,-55.5,1.2,1.2,0,0,0,129.4,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.3,-436.8,298.2,461.4);


(lib.小精靈亂飛2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.小精靈上下漂浮換表情();
	this.instance.setTransform(106.9,-57.9,1,1,0,0,0,0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85.6,y:42.7},4).wait(1).wait(44).to({x:-31.6,y:-9},0).wait(1).to({x:-466.3,y:-140.3},4).wait(1).to({regY:1.2,skewX:-14.8,skewY:165,x:-489.4,y:-164.2},0).wait(44).wait(1).to({x:-483.8,y:-153.1},0).to({regY:1.3,scaleX:1.69,scaleY:1.69,x:-469.8,y:56.5},5).wait(68).to({regY:1.4,scaleX:3.08,scaleY:3.08,x:492.5,y:29.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.8,-130.8,138.3,145.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
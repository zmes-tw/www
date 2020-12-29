(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

var title , ansAry , qusAry, nowQus ;
// stage content:
(lib.game5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{main_tag:0,game_tag:1,gameover_tag:31,gamewin_tag:41,end_tag:45});
	root = this;
	function ansFn(ans){
		if(nowQus ==0){
			return;	
		}
		if(ans == ansAry[nowQus-1]){
			if(title == 5){
				root.gotoAndStop("gamewin_tag");
			}else{
				title ++;
				root.gotoAndPlay("game_tag");
				root.no1.gotoAndStop(0);
				root.yes.gotoAndPlay(1);
				root.yes.visible = true;
				switch(title){
					case 2:
					root.star.st1.gotoAndPlay(1);
					break;
					case 3:
					root.star.st2.gotoAndPlay(1);
					break;
					case 4:
					root.star.st3.gotoAndPlay(1);
					break;
					case 5:
					root.star.st4.gotoAndPlay(1);
					break;
				};
				playSound("right",false);
			}
			nowQus = 0;
			return true;
		}else{
			root.gotoAndPlay("gameover_tag");
			nowQus = 0;
			return false;
		}
	}
	function resetInit(){
		nowQus = 0;
		title = 1;
		ansAry = [2,1,1,1,2];
		qusAry = [1,2,3,4,5];
	}
	resetInit();
	
	function qusNext(){
		var c = Math.floor(Math.random()*qusAry.length);
		nowQus = qusAry[c];
		qusAry[c] = 0;
		qusAry.sort();
		qusAry.shift();
		root.no1.gotoAndStop(nowQus);
	}

	// timeline functions:
	this.frame_0 = function() {
		playSound("classover",true);
		this.stop();
		this.start_btn.onClick=function (){
			root.gotoAndPlay("game_tag");
			playSound("test",true,-1);
		}
		this.logoBtn.onClick=function(){
			window.open('http://www.eduweb.com.tw/');
		}
	}
	this.frame_1 = function() {
		this.yes.stop();
		this.yes.visible = false;
		this.no1.gotoAndStop(0);
		if(title == 1){
			root.star.st1.gotoAndStop(0);
			root.star.st2.gotoAndStop(0);
			root.star.st3.gotoAndStop(0);
			root.star.st4.gotoAndStop(0);
			root.star.st5.gotoAndStop(0);
		}
	}
	this.frame_16 = function() {
		this.stop();
		qusNext();
		this.btn1.onClick = function(){
			ansFn(1);
		}
		this.btn2.onClick = function(){
			ansFn(2);
		}
		this.btn3.onClick = function(){
			ansFn(3);
		}
	}
	this.frame_30 = function() {
		this.gotoAndPlay("game_tag");
	}
	this.frame_32 = function() {
		playSound("fail",true);
		playSound("fail2",false,-1);
		this.restart_btn.onClick = function(){
			resetInit();
			root.gotoAndPlay("game_tag");
			playSound("test",true,-1);
		}
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		playSound("dinedine",true);
		this.stop();
		this.fire_btn.onClick = function(){
			root.gotoAndStop("end_tag");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(14).call(this.frame_30).wait(2).call(this.frame_32).wait(8).call(this.frame_40).wait(1).call(this.frame_41).wait(4));

	// 圖層 2
	this.btn3 = new lib._2西瓜鈕();
	this.btn3.setTransform(867.3,584.6,1.286,1.013);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib._2西瓜鈕(), 3);

	this.btn2 = new lib._2西瓜鈕();
	this.btn2.setTransform(521.9,584.6,1.286,1.013);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib._2西瓜鈕(), 3);

	this.btn1 = new lib._1草莓鈕();
	this.btn1.setTransform(188.1,587.5,1.286,1.013);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib._1草莓鈕(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3}]},15).to({state:[]},1).to({state:[]},13).to({state:[]},1).to({state:[]},1).to({state:[]},8).to({state:[]},1).wait(5));

	// 圖層 1
	this.logoBtn = new lib.logo_area();
	this.logoBtn.setTransform(1226,672.9,0.6,0.6,0,0,0,45,42.5);

	this.instance = new lib.logo();
	this.instance.setTransform(1199,647.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.logoBtn}]}).wait(46));

	// 題目xx
	this.instance_1 = new lib.草莓妹妹開頭();
	this.instance_1.setTransform(215.5,591.6,1,1,0,0,180,-12.2,66.2);

	this.instance_2 = new lib.男2開頭();
	this.instance_2.setTransform(325.5,560.2,1,1,0,0,180,15.5,18.7);

	this.instance_3 = new lib.男A開頭();
	this.instance_3.setTransform(915.4,369.3,2.11,2.11,0,0,0,67.7,107.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACnBxQgbAegmAYIgMgQQAqgbAXgcQgagzgFg1IARgGQALA9AQAfQASgfAHgvQAGgeACg3Ig0AAQgSAugXAdIgPgLQAlgwAWhhIASADQgEAYgLAjIBSAAIAAATIgRAAQgEB1glBBQAVAdAkAZIgLAQQgkgXgWgfgAAHCIQgiAWg2AHIgHgSQAwgGAbgOQgcgMgXgGIAZgcIg1AAIAAgRIBDAAQAMgOAJgOIg9AAIAAg4IBBAAIAAgXIhBAAIAAgrIgbAAIAAgSIAbAAIAAgoIBBAAIAAgUIATAAIAAAUIBBAAIAAAoIAaAAIAAASIgaAAIAAArIhBAAIAAAXIBBAAIAAA4IhCAAQgLARgHALIAtAAQADgFACgIIATAFIgDAIIApAAIAAARIgwAAQgOAbgVAQQAhAPAWAMIgNAOQgbgPgggOgAgeBmIAiANQATgMAMgWIgxAAIgQAVgAATATIAvAAIAAgWIgvAAgAguATIAuAAIAAgWIguAAgAATg8IAvAAIAAgaIgvAAgAgug8IAuAAIAAgaIguAAgAAThoIAvAAIAAgXIgvAAgAguhoIAuAAIAAgXIguAAgAnYCbQAXgyAIhTIASACQgEAmgFAZQAPARAaAOIAAh2IhRAAIAAgRICpAAIAAARIhFAAIAAAxIA5AAIAAATIg5AAIAAA6QAdALAmADQAnACA/AAQAiAAAdgCIgFAUIhOABQhFAAgggEQgggEgdgMQgdgMgWgVQgJAigLAWgAG0CRQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAHAHQAGAGAAAJQAAAJgGAHQgGAGgKAAQgJAAgGgGgAjWBZIAKgQQAjAWAWAUIgMAPQgYgXgfgSgAk8ByQAdgQAignIgkAAIAAigIAoAAQAHgPAFgWIg/AAIAAgSICZAAIAAASIhHAAQgDARgIAUIBGAAIAACgIhbAAIALAOQgiAkgcATgAkOAqIBcAAIAAgfIhcAAgAkOgEIBcAAIAAggIhcAAgAkOg1IBcAAIAAgeIhcAAgAG0gZQgHgGAAgJQAAgJAHgGQAGgGAJAAQAJAAAHAGQAGAGAAAJQAAAJgGAGQgHAGgJAAQgJAAgGgGgAnIgqIAAhyICLAAIAABygAm0g9IBjAAIAAgfIhjAAgAm0huIBjAAIAAgdIhjAAg");
	this.shape.setTransform(706.6,60.5);

	this.star = new lib.星星燈號組正式();
	this.star.setTransform(769.1,35.4,1,1,0,0,0,5.7,4);

	this.yes = new lib.對();
	this.yes.setTransform(518,390.6,1.6,1.6);

	this.no1 = new lib.題目();
	this.no1.setTransform(294.5,480,1.507,1.239);

	this.instance_4 = new lib.播放標題面板();
	this.instance_4.setTransform(897.7,56.8,1.842,1.636,0,0,0,140.3,15.7);

	this.instance_5 = new lib.草莓妹妹失敗();
	this.instance_5.setTransform(260.8,545.5,1.614,1.614,0,0,0,-11.1,42);

	this.instance_6 = new lib.課程("synched",0);
	this.instance_6.setTransform(555.5,168.6,1.8,1.8,0,0,0,36,12.1);

	this.instance_7 = new lib.主標題("synched",0);
	this.instance_7.setTransform(554.9,114.8,3.559,3.559,0,0,0,55.1,27.9);

	this.fire_btn = new lib.彩球鈕();
	this.fire_btn.setTransform(894.8,637.4,2.01,2.01,0,0,0,25.6,32);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.彩球鈕(), 3);

	this.text = new cjs.Text("贈送一顆煙火球,快點點看吧!", "40px DFLiHei-Md", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.setTransform(556.1,643.8);

	this.text_1 = new cjs.Text("恭喜你全部答對!", "100px DFLiHei-Md", "#FFFF99");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 102;
	this.text_1.setTransform(638,347);

	this.instance_8 = new lib.煙花點();
	this.instance_8.setTransform(645,391.6,6.029,6.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_4},{t:this.no1},{t:this.yes},{t:this.star},{t:this.shape}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},30).to({state:[{t:this.text_1},{t:this.text},{t:this.fire_btn}]},10).to({state:[{t:this.instance_8}]},1).wait(4));

	// 標題
	this.instance_9 = new lib.課程("synched",0);
	this.instance_9.setTransform(640.1,344.3,2,2,0,0,0,36,12.1);

	this.instance_10 = new lib.主標題("synched",0);
	this.instance_10.setTransform(644.4,261.2,4.101,4.101,0,0,0,55.1,27.9);

	this.instance_11 = new lib._151("synched",0);
	this.instance_11.setTransform(122.8,112.7,0.867,0.867);

	this.text_2 = new cjs.Text("挑戰一次吧！", "60px Microsoft JhengHei", "#000066");
	this.text_2.lineHeight = 62;
	this.text_2.lineWidth = 402;
	this.text_2.setTransform(285.1,312.6);

	this.restart_btn = new lib.重考();
	this.restart_btn.setTransform(561.4,569.8,2.06,2.06);
	new cjs.ButtonHelper(this.restart_btn, 0, 1, 2, false, new lib.重考(), 3);

	this.text_3 = new cjs.Text("你答錯了！讓我們再", "60px Microsoft JhengHei", "#000066");
	this.text_3.lineHeight = 62;
	this.text_3.lineWidth = 543;
	this.text_3.setTransform(285.1,234);

	this.instance_12 = new lib.下話框();
	this.instance_12.setTransform(557,415.6,2.01,2.01,0,0,0,155.9,117.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{regX:55.1,regY:27.9,scaleX:4.101,scaleY:4.101,x:644.4,y:261.2}},{t:this.instance_9,p:{scaleX:2,scaleY:2,x:640.1,y:344.3}}]}).to({state:[{t:this.instance_11},{t:this.instance_10,p:{regX:54.6,regY:27.3,scaleX:1.667,scaleY:1.667,x:124.5,y:84.6}},{t:this.instance_9,p:{scaleX:1,scaleY:1,x:111.9,y:159.7}}]},1).to({state:[]},30).to({state:[{t:this.instance_12},{t:this.text_3},{t:this.restart_btn},{t:this.text_2}]},1).to({state:[{t:this.instance_10,p:{regX:55.1,regY:27.9,scaleX:4,scaleY:4,x:646.1,y:212.9}},{t:this.instance_9,p:{scaleX:2,scaleY:2,x:636.4,y:294.3}}]},9).wait(5));

	// 圖層 5
	this.start_btn = new lib.登入();
	this.start_btn.setTransform(612.1,465,2.912,2.912);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.登入(), 3);

	this.instance_13 = new lib.小明話框();
	this.instance_13.setTransform(414.1,446.6,1,1,0,0,180,225.9,145.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-51,0,51.1).s().p("EhkAAH+IAAv7MDIBAAAIAAP7g");
	this.shape_1.setTransform(640.1,-62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-91.2,0,91.3).s().p("EhkAAOQIAA8fMDIBAAAIAAcfg");
	this.shape_2.setTransform(640.1,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-131.4,0,131.4).s().p("EhkAAUiMAAAgpDMDIBAAAMAAAApDg");
	this.shape_3.setTransform(640.1,54.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-171.5,0,171.6).s().p("EhkAAa0MAAAg1nMDIBAAAMAAAA1ng");
	this.shape_4.setTransform(640.1,112.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-211.7,0,211.8).s().p("EhkAAhGMAAAhCLMDIBAAAMAAABCLg");
	this.shape_5.setTransform(640.1,170.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-251.8,0,252).s().p("EhkAAnYMAAAhOvMDIBAAAMAAABOvg");
	this.shape_6.setTransform(640.1,228.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start_btn}]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape_1}]},30).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},5).wait(5));

	// 圖層 6
	this.instance_14 = new lib.登錄證();
	this.instance_14.setTransform(640,281.8,1.407,1.407,0,0,0,245,137.7);

	this.instance_15 = new lib.粉紅桌複製3();
	this.instance_15.setTransform(943.6,589.9,0.842,1.447,0,0,0,114.4,48.7);

	this.instance_16 = new lib.粉紅桌複製3();
	this.instance_16.setTransform(352.8,593,0.788,1.216,0,0,0,114.5,48.6);

	this.instance_17 = new lib.粉紅桌複製3();
	this.instance_17.setTransform(658.5,589.9,0.842,1.447,0,0,0,114.4,48.7);

	this.instance_18 = new lib.男2失敗();
	this.instance_18.setTransform(1041.9,547.3,1.631,1.631,0,0,0,19.5,-8.5);

	this.instance_19 = new lib.男A失敗();
	this.instance_19.setTransform(1061,696.6,1.631,1.631,0,0,0,89.8,130.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.instance_19},{t:this.instance_18}]},30).to({state:[]},10).wait(5));

	// 背景
	this.instance_20 = new lib.雲2();
	this.instance_20.setTransform(1206.6,403.9,1.598,1.858);
	this.instance_20.alpha = 0.422;

	this.instance_21 = new lib.雲1();
	this.instance_21.setTransform(141.9,400.4,2.413,1.681,0,180,0);
	this.instance_21.alpha = 0.371;

	this.instance_22 = new lib.雲3();
	this.instance_22.setTransform(32.4,243.9,1.377,1.076,180);
	this.instance_22.alpha = 0.66;

	this.instance_23 = new lib.雲3();
	this.instance_23.setTransform(1138.5,104.2,1.753,1.576,5.3);
	this.instance_23.alpha = 0.699;

	this.instance_24 = new lib.雲2();
	this.instance_24.setTransform(286.1,62.3,1.598,1.858);
	this.instance_24.alpha = 0.781;

	this.instance_25 = new lib.摩天輪轉mod();
	this.instance_25.setTransform(78.6,573.8,1,1,0,0,0,54.8,65.1);

	this.instance_26 = new lib._101大樓();
	this.instance_26.setTransform(1192.6,352,1,1,0,0,0,35.4,222.7);

	this.instance_27 = new lib.全背景圖();
	this.instance_27.setTransform(288.4,209.7,1,1,0,0,0,288.4,209.7);

	this.instance_28 = new lib.啋璃105("synched",0);
	this.instance_28.setTransform(1161.1,688.5,1.027,0.632);

	this.instance_29 = new lib.啋璃105("synched",0);
	this.instance_29.setTransform(1190.5,685.5,1.027,0.632);

	this.instance_30 = new lib.啋璃105("synched",0);
	this.instance_30.setTransform(1281.9,684.2,1.027,0.632);

	this.instance_31 = new lib.啋璃105("synched",0);
	this.instance_31.setTransform(1265.5,685.5,1.027,0.632);

	this.instance_32 = new lib.啋璃105("synched",0);
	this.instance_32.setTransform(1254.5,684.2,1.027,0.632);

	this.instance_33 = new lib.啋璃105("synched",0);
	this.instance_33.setTransform(1232,672.4,1.027,0.632);

	this.instance_34 = new lib.啋璃105("synched",0);
	this.instance_34.setTransform(1213.3,672.4,1.027,0.632);

	this.instance_35 = new lib.啋璃105("synched",0);
	this.instance_35.setTransform(1223.4,667.3,1.027,0.632);

	this.instance_36 = new lib.啋璃105("synched",0);
	this.instance_36.setTransform(1214.7,667.3,1.027,0.632);

	this.instance_37 = new lib.啋璃105("synched",0);
	this.instance_37.setTransform(1232,661.9,1.027,0.632);

	this.instance_38 = new lib.啋璃105("synched",0);
	this.instance_38.setTransform(1214.7,661.9,1.027,0.632);

	this.instance_39 = new lib.啋璃105("synched",0);
	this.instance_39.setTransform(1169.1,669.9,1.027,0.632);

	this.instance_40 = new lib.啋璃105("synched",0);
	this.instance_40.setTransform(1161,669.9,1.027,0.632);

	this.instance_41 = new lib.啋璃105("synched",0);
	this.instance_41.setTransform(1151.1,669.9,1.027,0.632);

	this.instance_42 = new lib.啋璃105("synched",0);
	this.instance_42.setTransform(1150.1,662.7,1.027,0.632);

	this.instance_43 = new lib.啋璃105("synched",0);
	this.instance_43.setTransform(1169.1,657.4,1.027,0.632);

	this.instance_44 = new lib.啋璃105("synched",0);
	this.instance_44.setTransform(1159.7,655.9,1.027,0.632);

	this.instance_45 = new lib.啋璃105("synched",0);
	this.instance_45.setTransform(1150.1,657.4,1.027,0.632);

	this.instance_46 = new lib.啋璃105("synched",0);
	this.instance_46.setTransform(1139.7,655.9,1.027,0.632);

	this.instance_47 = new lib.啋璃105("synched",0);
	this.instance_47.setTransform(1169.1,650.1,1.027,0.632);

	this.instance_48 = new lib.啋璃105("synched",0);
	this.instance_48.setTransform(1159.7,650.1,1.027,0.632);

	this.instance_49 = new lib.啋璃105("synched",0);
	this.instance_49.setTransform(1150.1,650.1,1.027,0.632);

	this.instance_50 = new lib.啋璃105("synched",0);
	this.instance_50.setTransform(1169.1,644.3,1.027,0.632);

	this.instance_51 = new lib.啋璃105("synched",0);
	this.instance_51.setTransform(1150.1,644.3,1.027,0.632);

	this.instance_52 = new lib.啋璃105("synched",0);
	this.instance_52.setTransform(1159.7,638.3,1.027,0.632);

	this.instance_53 = new lib.啋璃105("synched",0);
	this.instance_53.setTransform(1150.1,638.9,1.027,0.632);

	this.instance_54 = new lib.啋璃105("synched",0);
	this.instance_54.setTransform(1139.7,638.3,1.027,0.632);

	this.instance_55 = new lib.啋璃105("synched",0);
	this.instance_55.setTransform(1077.4,691.6,1.027,0.632);

	this.instance_56 = new lib.啋璃105("synched",0);
	this.instance_56.setTransform(1067.8,691.6,1.027,0.632);

	this.instance_57 = new lib.啋璃105("synched",0);
	this.instance_57.setTransform(1077.4,685.5,1.027,0.632);

	this.instance_58 = new lib.啋璃105("synched",0);
	this.instance_58.setTransform(1068.9,685.5,1.027,0.632);

	this.instance_59 = new lib.啋璃105("synched",0);
	this.instance_59.setTransform(1057.9,685.5,1.027,0.632);

	this.instance_60 = new lib.啋璃105("synched",0);
	this.instance_60.setTransform(1077.4,679.6,1.027,0.632);

	this.instance_61 = new lib.啋璃105("synched",0);
	this.instance_61.setTransform(1068.9,679.6,1.027,0.632);

	this.instance_62 = new lib.啋璃105("synched",0);
	this.instance_62.setTransform(1048.1,679.6,1.027,0.632);

	this.instance_63 = new lib.啋璃105("synched",0);
	this.instance_63.setTransform(948.4,691.6,1.027,0.632);

	this.instance_64 = new lib.啋璃105("synched",0);
	this.instance_64.setTransform(956.2,691.6,1.027,0.632);

	this.instance_65 = new lib.啋璃105("synched",0);
	this.instance_65.setTransform(939.5,676.6,1.027,0.632);

	this.instance_66 = new lib.啋璃105("synched",0);
	this.instance_66.setTransform(948.4,687.6,1.027,0.632);

	this.instance_67 = new lib.啋璃105("synched",0);
	this.instance_67.setTransform(946.9,681,1.027,0.632);

	this.instance_68 = new lib.啋璃105("synched",0);
	this.instance_68.setTransform(956.2,687.6,1.027,0.632);

	this.instance_69 = new lib.啋璃105("synched",0);
	this.instance_69.setTransform(955.2,681,1.027,0.632);

	this.instance_70 = new lib.啋璃105("synched",0);
	this.instance_70.setTransform(956.2,672,1.027,0.632);

	this.instance_71 = new lib.啋璃105("synched",0);
	this.instance_71.setTransform(946.9,677.4,1.027,0.632);

	this.instance_72 = new lib.啋璃105("synched",0);
	this.instance_72.setTransform(946.9,672,1.027,0.632);

	this.instance_73 = new lib.啋璃105("synched",0);
	this.instance_73.setTransform(939.5,672,1.027,0.632);

	this.instance_74 = new lib.啋璃105("synched",0);
	this.instance_74.setTransform(863.8,674.5,1.027,0.632);

	this.instance_75 = new lib.啋璃105("synched",0);
	this.instance_75.setTransform(854.1,673.9,1.027,0.632);

	this.instance_76 = new lib.啋璃105("synched",0);
	this.instance_76.setTransform(845.4,673.9,1.027,0.632);

	this.instance_77 = new lib.啋璃105("synched",0);
	this.instance_77.setTransform(836.8,673.9,1.027,0.632);

	this.instance_78 = new lib.啋璃105("synched",0);
	this.instance_78.setTransform(824,673.9,1.027,0.632);

	this.instance_79 = new lib.啋璃105("synched",0);
	this.instance_79.setTransform(863.8,667.9,1.027,0.632);

	this.instance_80 = new lib.啋璃105("synched",0);
	this.instance_80.setTransform(855.9,667.9,1.027,0.632);

	this.instance_81 = new lib.啋璃105("synched",0);
	this.instance_81.setTransform(836.8,667.9,1.027,0.632);

	this.instance_82 = new lib.啋璃105("synched",0);
	this.instance_82.setTransform(863.8,661.9,1.027,0.632);

	this.instance_83 = new lib.啋璃105("synched",0);
	this.instance_83.setTransform(845.4,661.9,1.027,0.632);

	this.instance_84 = new lib.啋璃105("synched",0);
	this.instance_84.setTransform(836.8,661.9,1.027,0.632);

	this.instance_85 = new lib.啋璃105("synched",0);
	this.instance_85.setTransform(824,661.9,1.027,0.632);

	this.instance_86 = new lib.啋璃105("synched",0);
	this.instance_86.setTransform(846.8,655.9,1.027,0.632);

	this.instance_87 = new lib.啋璃105("synched",0);
	this.instance_87.setTransform(836.8,655.9,1.027,0.632);

	this.instance_88 = new lib.啋璃105("synched",0);
	this.instance_88.setTransform(863.8,649.8,1.027,0.632);

	this.instance_89 = new lib.啋璃105("synched",0);
	this.instance_89.setTransform(855.9,649.8,1.027,0.632);

	this.instance_90 = new lib.啋璃105("synched",0);
	this.instance_90.setTransform(846.8,649.8,1.027,0.632);

	this.instance_91 = new lib.啋璃105("synched",0);
	this.instance_91.setTransform(825.4,649.8,1.027,0.632);

	this.instance_92 = new lib.啋璃105("synched",0);
	this.instance_92.setTransform(863.8,643.3,1.027,0.632);

	this.instance_93 = new lib.啋璃105("synched",0);
	this.instance_93.setTransform(846.8,643.3,1.027,0.632);

	this.instance_94 = new lib.啋璃105("synched",0);
	this.instance_94.setTransform(825.4,643.3,1.027,0.632);

	this.instance_95 = new lib.啋璃105("synched",0);
	this.instance_95.setTransform(863.8,637.4,1.027,0.632);

	this.instance_96 = new lib.啋璃105("synched",0);
	this.instance_96.setTransform(855.9,637.4,1.027,0.632);

	this.instance_97 = new lib.啋璃105("synched",0);
	this.instance_97.setTransform(846.8,637.4,1.027,0.632);

	this.instance_98 = new lib.啋璃105("synched",0);
	this.instance_98.setTransform(836.8,637.4,1.027,0.632);

	this.instance_99 = new lib.啋璃105("synched",0);
	this.instance_99.setTransform(825.4,637.4,1.027,0.632);

	this.instance_100 = new lib.啋璃105("synched",0);
	this.instance_100.setTransform(846.8,631.2,1.027,0.632);

	this.instance_101 = new lib.啋璃105("synched",0);
	this.instance_101.setTransform(837.7,630.4,1.027,0.632);

	this.instance_102 = new lib.啋璃105("synched",0);
	this.instance_102.setTransform(825.4,630.4,1.027,0.632);

	this.instance_103 = new lib.啋璃105("synched",0);
	this.instance_103.setTransform(772.3,658.3,1.027,0.632);

	this.instance_104 = new lib.啋璃105("synched",0);
	this.instance_104.setTransform(753.2,658.3,1.027,0.632);

	this.instance_105 = new lib.啋璃105("synched",0);
	this.instance_105.setTransform(743.3,657.9,1.027,0.632);

	this.instance_106 = new lib.啋璃105("synched",0);
	this.instance_106.setTransform(723.1,657.9,1.027,0.632);

	this.instance_107 = new lib.啋璃105("synched",0);
	this.instance_107.setTransform(772.3,650.5,1.027,0.632);

	this.instance_108 = new lib.啋璃105("synched",0);
	this.instance_108.setTransform(753.2,650.5,1.027,0.632);

	this.instance_109 = new lib.啋璃105("synched",0);
	this.instance_109.setTransform(743.3,650.5,1.027,0.632);

	this.instance_110 = new lib.啋璃105("synched",0);
	this.instance_110.setTransform(732.6,650.5,1.027,0.632);

	this.instance_111 = new lib.啋璃105("synched",0);
	this.instance_111.setTransform(772.3,642.3,1.027,0.632);

	this.instance_112 = new lib.啋璃105("synched",0);
	this.instance_112.setTransform(753.2,641.8,1.027,0.632);

	this.instance_113 = new lib.啋璃105("synched",0);
	this.instance_113.setTransform(743.3,641.8,1.027,0.632);

	this.instance_114 = new lib.啋璃105("synched",0);
	this.instance_114.setTransform(723.1,641.8,1.027,0.632);

	this.instance_115 = new lib.啋璃105("synched",0);
	this.instance_115.setTransform(772.3,634.9,1.027,0.632);

	this.instance_116 = new lib.啋璃105("synched",0);
	this.instance_116.setTransform(762.2,634.9,1.027,0.632);

	this.instance_117 = new lib.啋璃105("synched",0);
	this.instance_117.setTransform(753.2,634.9,1.027,0.632);

	this.instance_118 = new lib.啋璃105("synched",0);
	this.instance_118.setTransform(743.3,634.5,1.027,0.632);

	this.instance_119 = new lib.啋璃105("synched",0);
	this.instance_119.setTransform(732.6,634.5,1.027,0.632);

	this.instance_120 = new lib.啋璃105("synched",0);
	this.instance_120.setTransform(721.8,634.5,1.027,0.632);

	this.instance_121 = new lib.啋璃105("synched",0);
	this.instance_121.setTransform(762.2,627,1.027,0.632);

	this.instance_122 = new lib.啋璃105("synched",0);
	this.instance_122.setTransform(753.2,627,1.027,0.632);

	this.instance_123 = new lib.啋璃105("synched",0);
	this.instance_123.setTransform(730.7,626.1,1.027,0.632);

	this.instance_124 = new lib.啋璃105("synched",0);
	this.instance_124.setTransform(769.9,619.2,1.027,0.632);

	this.instance_125 = new lib.啋璃105("synched",0);
	this.instance_125.setTransform(762.2,619.2,1.027,0.632);

	this.instance_126 = new lib.啋璃105("synched",0);
	this.instance_126.setTransform(753.2,619.2,1.027,0.632);

	this.instance_127 = new lib.啋璃105("synched",0);
	this.instance_127.setTransform(743.3,619.2,1.027,0.632);

	this.instance_128 = new lib.啋璃105("synched",0);
	this.instance_128.setTransform(730.7,619.2,1.027,0.632);

	this.instance_129 = new lib.啋璃105("synched",0);
	this.instance_129.setTransform(721.8,619.2,1.027,0.632);

	this.instance_130 = new lib.啋璃105("synched",0);
	this.instance_130.setTransform(769.9,611.5,1.027,0.632);

	this.instance_131 = new lib.啋璃105("synched",0);
	this.instance_131.setTransform(753.2,611,1.027,0.632);

	this.instance_132 = new lib.啋璃105("synched",0);
	this.instance_132.setTransform(743.3,611,1.027,0.632);

	this.instance_133 = new lib.啋璃105("synched",0);
	this.instance_133.setTransform(730.7,611,1.027,0.632);

	this.instance_134 = new lib.啋璃105("synched",0);
	this.instance_134.setTransform(769.9,603.1,1.027,0.632);

	this.instance_135 = new lib.啋璃105("synched",0);
	this.instance_135.setTransform(762.2,603.1,1.027,0.632);

	this.instance_136 = new lib.啋璃105("synched",0);
	this.instance_136.setTransform(753.2,603.1,1.027,0.632);

	this.instance_137 = new lib.啋璃105("synched",0);
	this.instance_137.setTransform(743.3,603.1,1.027,0.632);

	this.instance_138 = new lib.啋璃105("synched",0);
	this.instance_138.setTransform(730.7,603.1,1.027,0.632);

	this.instance_139 = new lib.啋璃105("synched",0);
	this.instance_139.setTransform(720.5,603.1,1.027,0.632);

	this.instance_140 = new lib.啋璃105("synched",0);
	this.instance_140.setTransform(640.9,677.4,1.027,0.632);

	this.instance_141 = new lib.啋璃105("synched",0);
	this.instance_141.setTransform(653.2,689.3,1.027,0.632);

	this.instance_142 = new lib.啋璃105("synched",0);
	this.instance_142.setTransform(653.2,684.2,1.027,0.632);

	this.instance_143 = new lib.啋璃105("synched",0);
	this.instance_143.setTransform(653,677.4,1.027,0.632);

	this.instance_144 = new lib.啋璃105("synched",0);
	this.instance_144.setTransform(640.9,665,1.027,0.632);

	this.instance_145 = new lib.啋璃105("synched",0);
	this.instance_145.setTransform(672.4,670.4,1.027,0.632);

	this.instance_146 = new lib.啋璃105("synched",0);
	this.instance_146.setTransform(672.4,665,1.027,0.632);

	this.instance_147 = new lib.啋璃105("synched",0);
	this.instance_147.setTransform(653.2,670.6,1.027,0.632);

	this.instance_148 = new lib.啋璃105("synched",0);
	this.instance_148.setTransform(653.2,665,1.027,0.632);

	this.instance_149 = new lib.啋璃105("synched",0);
	this.instance_149.setTransform(653,657.9,1.027,0.632);

	this.instance_150 = new lib.啋璃105("synched",0);
	this.instance_150.setTransform(671.9,652,1.027,0.632);

	this.instance_151 = new lib.啋璃105("synched",0);
	this.instance_151.setTransform(662.5,652,1.027,0.632);

	this.instance_152 = new lib.啋璃105("synched",0);
	this.instance_152.setTransform(653.2,652,1.027,0.632);

	this.instance_153 = new lib.啋璃105("synched",0);
	this.instance_153.setTransform(642,652,1.027,0.632);

	this.instance_154 = new lib.啋璃105("synched",0);
	this.instance_154.setTransform(632.6,652,1.027,0.632);

	this.instance_155 = new lib.啋璃105("synched",0);
	this.instance_155.setTransform(672.4,644.3,1.027,0.632);

	this.instance_156 = new lib.啋璃105("synched",0);
	this.instance_156.setTransform(664.2,644.3,1.027,0.632);

	this.instance_157 = new lib.啋璃105("synched",0);
	this.instance_157.setTransform(653.2,644.3,1.027,0.632);

	this.instance_158 = new lib.啋璃105("synched",0);
	this.instance_158.setTransform(642,644.3,1.027,0.632);

	this.instance_159 = new lib.啋璃105("synched",0);
	this.instance_159.setTransform(632.6,644.3,1.027,0.632);

	this.instance_160 = new lib.啋璃105("synched",0);
	this.instance_160.setTransform(671.9,636.8,1.027,0.632);

	this.instance_161 = new lib.啋璃105("synched",0);
	this.instance_161.setTransform(662.5,636.8,1.027,0.632);

	this.instance_162 = new lib.啋璃105("synched",0);
	this.instance_162.setTransform(653,636.8,1.027,0.632);

	this.instance_163 = new lib.啋璃105("synched",0);
	this.instance_163.setTransform(642,637.4,1.027,0.632);

	this.instance_164 = new lib.啋璃105("synched",0);
	this.instance_164.setTransform(631.8,637.4,1.027,0.632);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#343247").s().p("AgMAKIAGABIgDAGgAAIgQIAFAAIAAABg");
	this.shape_7.setTransform(1210.9,701.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C0937").s().p("AQLCtIgBgBIgBgrIgBgDIgBADQgJAQgNAPIgIANIgEgIQgDgKABgKIAAgNIgDABIgqAZIgIAHIACgJQADgJAGgHQADgGAHgDIgJACIgHADQgPAHgKAKIgIAJIgBgCQgCgIADgIIAFgLIgCAAIgOAJIgbAVIAIgiIgnAoIAFgFIAGgLIAGgfIgCgDQgHAPgTALIgcANIAAABIgFACIAEgDIARgXIAHgNIAAgBIgDADIguAaIgPAGQAAgIAGgIIAOgWIAJgJIgJAEIgeAQIgeAXIgCgIQgBgMADgLIAFgIIgHAEIgoAnIgGAHIAAgCIgBgHIgBgiIgdAkIgBADIgBACIgBgrIgjAvIAEgxIgBgGIAAgBIgZA1IgCgCIgGg5IgCAFIgGAKIAAhLICgAAIAAhXIBDAAIAAAtIBSAAIAAg1IBTgBIgBAqIBOAAIAAgpIBmAAIAAA9IB2AAIgEg4IBgAAIAACyIgXAVIARgkIAAgBIgqAkIAAgFIAHgcIgWAWIgOASIAAABIgBgCIgCgLIAAgZIgHAHQgFAGgDAGIgOAYIgBABIgBAAIgUgsIgPAsIgLgOQgFgIgCgJIgDgKIgEAIIAAACIgIAbIgEgGIgEgMQgBgHABgHIgRAdIgBABIAAgBIgBgCIABgVIABgCQgUALgNAPIgEAEIAAgBIgBgDQAAgGACgFIADgTQgRAMgNAOIgLALIAAABIgBAAIAEgrIgCAAIgmAxgAt3CRIACgSIgCgCIgZAqIgCgGIgHglQgMANgKAOIgLAPIgDAAIgGgqIgCACQgKAOgRAMIgcARIgFABIgBgCQgGgKAFgKQAGgPALgOQAEgGAIgEIgDABQgOADgMAFQgUAGgQAJQgOAHgJAKIgIAJIgCAAIgSgmIgcAhIgEAKIgMgoIgBgCIgeAqIgEgnIgeAaIgCAAIADgKQAGgMAIgLIAKgLIgsAWIAAjpIAvAAIAAhDIBTAAIAAAtIBTAAIAAgmIA2AAIAAAdIBjAAIAAEvIgBABIgDAEQgJgOACgOgACuCAIgQAnIgIgiIgMAfIgDAEIgBAAIgDgLQgCgNgHgKIgBgBIAAABIgCAHIgPAWIgCACIgBAAIgFgHQgGgJgJgJIgBgBIgDAWIgBABIgLgZIgDgFIAAABIgJAdIgbgXIgEgCIgLAdIgCgBIgIgIQgFgJgDgJIgBgCIgNAcIgCADIAAgBIgGgIQgHgMgBgNIgBABIgQAbIgCACIAAgBIgEgIIgCgSIgEAKQgEAHgHAFIgBAAIACgEIAIgkIgVANIgzAXIgLAEQADgPAKgMIgUAOQgRAKgWAGIAJgIIAVgjIgPAQIgHAFQgTAOgdAGIgHACQAAgGAGgEIALgLQgaAEgNANQgDgCAFgKIADgMIggAdIgGAHQAAgQALgPIACgFIgJADIgdARIABjQIBqAAIAAg3IBKAAIAAArIBSAAIAAAhIB7AAIAAgmIBaAAIAAgfIB8AAIAAEDIAAADIgCAAIgFAFIgIgrIgNAmIgCACIAAgCIgBgBIgDgLQgDgMABgMIgeAnIgCACIABgdIggAkgA/KCPIgDgTQgLAQgIARIgCgEQgIgNAIgOIgeAYIgIAEQgDgQAAgQIgBgGIgFAGQgQARgKATIAAggIgBgGIgEAFQgOATgDAVIgIgOIgPguIgBgCIgLAQQgNAVgGAWQgIgSgEgSQgEgLAAgKQAAgMAFgLIgdAzIgGARIgBAAIgCgFQgNgjgDgkIAAgBIgBABIgJAMQgJANgGANQgJASgGATIgBADIgCgKIAAjyIApAAIAAhIIBKAAIAAAzIBDAAIAAgdIAzAAIAAAYIBZAAIAADyIgBAAIgCgDIgDAHQgNAVgHAWIgCAEQgKgLgDgNgAcSAuIAAhMIBaAAIAAAcIBRAAIAAgrIBeAAIAAAlIB5gBIAAgrIBQAAIAABig");
	this.shape_8.setTransform(905.1,688);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#351069").s().p("Eg1JAIjIAAsDIIvAAIAAHqIAAD1IgGhAIAAgDIgJAaQgKAYAAAZIgEAAQgPgQgEgTIgMgjIAAgBIgBgBIAAABIgEAKQgQAegBAfIgBAAIgCgEQgFgdADgdIAAgDIgmAiIACgbIAGgVIgJAGQgVANgRAPIgiAkIgBAAIgBgrIgxA1IgJgUQgEgJABgKIAAgSIgOAKQgPAMgKAOIgMAQIgYgUIgNgPIgHAYQgFAMADANIhkgfIgWgOIgCgCIABAKQAEAMAIAMIAZAfgAuMHxQgRATgMAUQgIgUALgSIABgDIg6AiIgHAGQgGghAKggQgOARgIAVIgLAQQgGgFAAgDIAAgWIgBgEQgEALgGALIgLANIgGgIIABgnIgVAeIgIAJIgDgCIACg2IgbAtQgKARgZALIgIAAQgDgCABgDIAEgKIgCABIgPAFIgYALQgCgKAFgFIAFgEQABgBABAAQABAAAAgBQAAAAAAAAQgBAAAAAAIgEgBIgKgBIgIADIgWAPIgBgCIgBgjIgCgCIgPAWIgOANIgEgMIgCgpIgoAvIgGAEQgFgSAFgSIAFgRIAAgBIgCABQgfAXgYAbIgPAKIgBgKQgCgLAEgLQADgJgBgKIg9A4IAAkyIAAnzIIuAAIgFJFIgBDSQgLAHgGAJIgBADgEAwqAIMQgFgHAAgHQgBgOgIgNIgCgCIgHAIIgTAkIgBAAIgEgMQgCgPgHgPIgBgCIgCABIgXAuQgMgJgEgLIgGgYIgGgIIgbAqQgOgKgDgMIgNgmIgiAxIgFAFIggg9IgWA5IgBACIgJgJQgRgNgHgPIgMgVIgFgGIgYAxIgLAPIgCACIAAgBIgQgpIgCAFIgOAXQgGAIgKAGIgEADIgDgEQgEgJABgJQACgLAHgKQgoAWAAABIgQAaIAAgGIAGg0IgdAjQgKAPgDARIgEgRQgCgRACgRIAGggIAAgFIgEAFIgIAIQgYAZgJAeIgBAFIAAABIACAAIgDAFIgBAAIAAgGIABAAIgBgFIAChMIgBgDIAAAFIgaBHIAEg/IgJAWIgSAaQgHAKAAAMQgGgWADgVQABgOgDgNIgPAoIgEAAIACgVIgBAAIgHAUIAAABIgKAdIgGgBQgDgOAAgPIgQApQgEgLAAgMIgBgfIgnA9QgCgGABgFQgDgVAFgVIAAgFIgBABIgZAoQgGAIgBAJIgHgWIgGgKIgDAeIgZgfIAAAFIgJAZIgCAEIgdgnIgDgBIgFAMQgLAQgBARQAAgNgEgMIgJgYIgEgFIgaAkIgIgVIgCgCIgXAiIgBAAIgBggIgBgDIgDgCIgBgCIgBAAIgLAaIgIALIgDADIgFACIgCg3IgFAPIgTAiIgFADIgCgTIACgPIgBgDIAAgBIgDAFIgoAkIAAgDIABgMIAEgIIAFgIIAMgJIADgCIgvAQIgdAOIgFAEIACgxIgYAnIgPAQIAAgCIAEgcIAAgCIACgJIgJALIgfAYIgBgFQgFgSAEgSQACgJAGgJIAQgSIhDAoQgPAMgLANQgFAEgCAFIgCANIgHgOQgDgNABgMIADgOIAFgKIgBAAIgbAdIgRAcIgQgTIgIgSIgYAnIgBgBIgCgMQgCgEACgEIgTAVIgBACIgBgMIABgQIACgKIAAgBIgBACIgcAnIgBgBIgHgWIgLAPIgCAAIADgWIgUAWIABgQIgBgFIAAACIgMAPIgBABIAAgZIgBgBIgKAYIgGgBIgBgQIgGAVIgCADIgBgBIgFgHIgDgRIgQAeIgCgiIgSAXIgDAHIAAgGIgEgYIgHATIgGAAIAAgBIgBgJIgDAJIgFgBIABgHIAEgHIgCAAIgQAUIgGgMIABgTIgEAGIgMAVIgDABIgBgFIAAgJIgGAMIAAACIgDAKIADgaIAAgDIgBADIgWAXIgBgJIAEgHIADgDIgCABIgHAEIgOAMQgEAEgCAFIgCgBIgCgDIgCgFIgCgOIgHAXIgFgGIgEgRIgEALIgEAFIgCAAIgFgBIgIgNIgFgGIgGAZIgDgHIAAgBIgBgKIABgOIgNATIgBAIIAAABIgBAAIgEgGIAAgFIAEgPQABgEADgDIgWAMIgRAOIgCgBIgBgOIABgMIAAgBIgBACIgVAfIgBgaIABgCIgDACIgOAdIgBAAIgCgRIAAgCIgDgNIAAgBIgKAdIgCAEIgGgbIAAABIgMAWIABgfIgIAHIgTAWIAAgFIABgTIABggIgBAFIgaAqIgTAUIgDgHIAAgZIgEAAIgJASQgGAIgCAIIAAgBIgFgfIgRAaIgCgBIAJgpIgFALIgTAVIgKAIIgBgBQgDgIADgJIAHgRIAEgIIgZANQgOAIgFALIgDAEIAAgFQAAgHADgHIAMgWIggAZIgPAPIgBACIAAgCIALgnIAFgKIgiAcIgPAQIgFAHIAAgDIANgtIgBgBQgOATgRAQQgIAIgDAIIgCAAQgDgPAGgPIAKgXIghAeQgKAJgFAKIgCgBIAKgmIgBgBIgyApIACgHIANgpIgNAOQgNALgIAOIgEAKIgCABIgCgrIgCgFIgXAqIgHAKIgDgLIgEggQgKAOgGAPIgHAPIgCACIgFgJQgEgKgBgJIAAgOIgCACIgDANQgFAKAAALIgBABIgBgHQgDgJAAgKIABgMIgBAAIgkAfIgFAIIgBACIAAgDQgBgGABgHIADgPIAGgNIgVAQIgBAAIAAi0IAAhSIHLAAIAABjIAABOIHSAAIAAhkIAAnmIG1AAIAAHFIE8AAIAAjVIE7AAIAADeIJxAAIAADPIgaAUIgEABIgEgkIgHAIQgOAMgCAOIABgNQABgMgDgMIgDgKIgEAKIgTAcQgEAFgGABQgMABgIgHIgPgPIgHAkIgDgMQgBgKADgJIAJgaIgDAHIgmAqIAAgLQABgNAHgOIgQAVQgMAMgQAKIgDgGIgGgQIgCgQQgBgOACgOIABgEIgEAEIguAuQgGAGgDAIIgGARgAjcIQIgMgvIgTA3IgKg5IgcAvIAAkFIAAhnIEkAAIAAD5IAABMIgPAoIAAAHIgEgIIgCguIgBgEIgtAyIgEgEQgIgJgDgJQgCgHABgGIgbAgQgEADgBAEIgCAEIgBAAIgCgFIgCgqIgDgEIgEAFQgSAPgKASIgGAIIgBAAIgCgKQgEgNABgMIgWAjIgEACIgEgxIgFANIgIATIgFAWgEgi5AIRQAAgKACgJIAHgnIgCAEIgXAbQgHAHgGAPIgCACIACgDIgCgiIgBgFIgmAwIgEg6IgBAFIgBABIguAuIAAgFQAAgTADgTIABgJIg2A3QgIgSgBgSIgEgfIgBgCIgLAVQgJAOgIAVQgHgZgBgaIghAvIgMAMIgEAAIgQgiIAAgGIAAj0IAAsSILHAAIAAMpIAADrIgWAKQgOAHgKAJIAJgzIAAgBIgIAEQgLAHgJAJIgUATIgOAKIgHADQgDgEABgFIgDggIAAgCIgEAGQgKAUgOATIgBABIgBgBIgLgmIgFAEIgLAQQgIAOgQAKIgSgaIgCgCQgBAMgJAMIgDADIAAADIgQgZIgCgLIgEALQgGAMgJAMIgCACQgIgIAAgGIgEgTIgOANIgLAHIgDgDIAGgfIgCgDQgNAMgRAJQgQAIgHANIgBAAQgFgRAFgRIAJgkIgEAGIg2ApQgOALgHAVg");
	this.shape_9.setTransform(961.8,651.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E3755").s().p("Eg1RAHaIAPs/IBzAAIgZgfQgIgMgDgMIgBgKIACACIAVAOIBkAfQgCgNAEgMIAHgZIAOAQIAXAUIANgQQAKgOAPgMIANgKIAAASQgBAKAFAJIAJAUIAwg1IABArIAAACIABgCIAigkQARgPAVgNIAJgGIgFAUIgDAbIAmgiIAAAEQgCAdAEAdIACAEIABACIAAgCQABggAQgdIAEgKIACAAIAAABIALAjQAFATAOAQIAEACIAAgCQAAgZAKgZIAJgaIAAAEIAGBAIACAKIACgDQAFgTAJgTQAGgNAJgNIAKgMIABAAQACAkAOAkIABAFIAAABIABgBIAHgRIAcg0QgFALAAAMQAAAKAEAMQAFASAHASQAHgWAMgWIALgQIACACIAOAvIAIAOQADgVAOgTIAEgGIACAHIAAAgQAJgTARgRIAEgHIABAHQAAAQAEAQIAHgEIAegYQgIAOAIANIACAEQAJgRAKgQIADATQADANAKALIACgEQAHgWANgWIADgHIADADIAAAAIAAAFIARAjIADAAIANgMIAggvQABAaAHAZQAIgVAJgOIALgWIABACIAEAgQABASAIASIA3g3IgBAJQgEATAAATIAAAFIAugvIACgBIABgEIADA6IAmgwIABAEIACAjIgCADIACgCQAHgPAGgHIAYgbIACgFIgIAoQgBAJAAAKIAAAHQAGgVAOgLIA2gqIAFgFIgJAkQgGARAGARIAAABIABgBQAGgNAQgIQASgJAMgMIADACIgHAgIADADIALgHIAOgNIAEATQAAAGAIAIIACgCQAJgMAGgMIAFgLIABALIARAZIAAgDIACgDQAJgMABgMIADACIASAaQAQgKAHgOIAMgQIAEgFIALAnIABABIACgBQANgTAKgVIAEgFIAAACIAEAgQgCAFADAEIAHgDIAOgKIAVgTQAIgKAMgGIAIgEIAAABIgJAzQAJgJAPgHIAVgKIAtgXIgLALQgIAMgGAMIgDAKIAAACIACgCIAegaIAFAnIAdgqIABACIAMAoIAEgKIAcgiIASAnIABABIABgBIAIgJQAJgKAOgHQARgJATgHQAMgFAPgDIACgBQgHAEgFAGQgLAPgGAPQgEAKAFAKIABACIAFgBIAdgRQAQgMALgOIABgCIAHAqIAAABIACgBIALgPQALgOAMgNIAGAlIADAGIAYgqIACACIgCASQgBAOAIAOIADgEIABgBIA9g4QABAKgDAJQgEALACALIABAKIAQgKQAXgbAfgXIACgCIAAACIgEAQQgGATAGASIAFgEIAogvIADApIADAMIAOgNIAPgWIACACIACAjIAAACIAWgPIAIgDIAKABIAEABQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBABIgGAEQgFAFADAKIAXgLIAPgFIACgBIgEAKQgBADADACIAJAAQAYgLAKgRIAcguIgDA3IAEACIAIgJIAUgfIgBAoIAHAIIAKgNQAGgLAEgMIABAFIAAAWQABADAFAFIALgQQAIgWAPgRQgLAhAGAhIAHgGIA6giIgBADQgLASAJAUQALgUARgTIgBAtIABgDQAGgJALgHIAdgRIAJgDIgCAFQgKAPAAAQIAFgHIAggdIgDAMQgFAKADACQANgNAbgEIgMALQgFAEAAAGIAGgCQAdgGATgOIAIgFIAOgRIgVAkIgJAIQgEAAAAADIABgBIADgCQAWgGARgKIAVgOQgLAMgDAPIALgEIAzgXIAVgOIgHAlIgDAEIAAABIABgBQAIgFADgHIAEgKIACASIAEAIIAAABIACgCIARgbIABgBQAAANAIAMIAFAIIAAABIADgDIAMgcIABACQAEAJAGAJIAIAIIACACIAAgBIAMgdIADACIAbAXIAJgdIAAgBIADAFIALAZIAAABIABgCIADgWIABABQAJAJAHAJIAEAHIABAAIADgCIAOgWIADgHIAAgBIABABQAGAKADANIACALIAAABIABgBIADgEIANgfIAIAiIAQgnIADAsIAfgkIgBAdIADgCIAegnQgCAMADAMIADALIABABIAAACIADgCIAMgmIAIArIAFgFIACAAIAAgDIAcgwIAKA6IATg4IANAwIAFAIIAFgWIAIgTIAFgNIAEAxIAEgCIAXgjQgCAMAEANIACAKIABAAIAGgIQALgSARgQIAEgEIAEADIACArIABAFIABAAIACgEQABgEAEgDIAbggQgBAGACAHQADAJAIAJIAFAEIAsgyIABADIACAvIAEAIIAAgHIAPgpIAGgKIACgFIAGA6IACACIAZg2IAAABIABAGIgDAyIAjgwIABAsIABgCIABgDIAcglIABAjIABAHIAAACIAGgHIAogoIAHgEIgEAIQgEAMABAMIADAIIAdgXIAegRIAJgEIgJAJIgNAXQgHAIAAAIIAQgGIAtgaIADgEIAAACIgGANIgRAXIgFADIAGgCIAAgBIAbgNQATgLAIgQIABAEIgGAfIgGALIgFAFIAngoIgHAiIAagVIAOgJIACAAIgFALQgDAIACAIIABACIAIgJQAKgKAPgHIAHgDIAJgCQgHADgDAGQgGAHgDAJIgBAJIAIgHIApgZIAEgBIAAANQgBAKACAKIAEAIIAIgNQANgPAJgQIABgDIABADIABArIABABIABAAIAmgxIADAAIgFArIABAAIAAgBIAMgLQANgOAQgMIgDATQgCAFAAAGIABADIAAABIAEgEQANgPAVgLIgBACIgCAVIACACIAAABIABgBIARgdQgCAHACAHIADAMIAEAGIAIgbIAAgCIAEgIIADAKQACAJAGAIIAKAOIAPgtIAVAtIAAAAIABgBIAPgYQACgGAGgGIAGgIIAAAaIADALIABACIAAgBIANgSIAWgXIgHAdIAAAFIArglIAAABIgRAlIAWgVIABAAIAVgQIgGANIgDAPQgBAHABAGIAAADIABgCIAFgIIAkggIABAAIgBANQAAAKAEAJIABAHIABgBQgBgLAGgKIADgOIABgCIAAAPQABAJAFAKIAEAJIACgCIAHgPQAGgPALgOIADAgIAEALIAHgKIAWgqIACAEIACAsIACgBIAEgKQAJgOAMgMIANgNIgNApIgCAHIAygqIABABIgJAnIAAABIABAAQAFgKAKgJIAhgfIgKAYQgGAPAEAPIABACIAAgCQADgIAIgIQARgQAOgTIABABIgNAtIAAADIAFgHIAPgQIAjgdIgFALIgMAnIAAACIABgCIAQgPIAfgaIgMAXQgDAHAAAHIAAAFIADgEQAGgLAOgIIAZgNIgFAIIgHARQgCAJACAIIABABIALgIIATgVIAEgMIgJAqIACABIARgaIAFAfIAAABQADgIAFgIIAKgSIADAAIAAAZIAEAHIASgUIAagrIABgEIgBAgIgBATIAAAFIATgWIAIgHIgBAfIANgWIAAgBIAFAbIADgEIAKgdIAAABIACANIAAACIACARIABAAIAOgdIADgCIgBACIABAaIAWgfIABgCIAAABIgBAMIABAOIABABIARgOIAWgMQgDADgBAEIgEAPIAAAFIAEAGIABAAIAAgBIABgIIANgTIgBAOIABAKIAAABIAEAHIAFgZIAFAGIAIANIAFABIADAAIADgFIAEgLIAEARIAFAGIAHgXIACAOIADAFIABADIACABQACgFAEgEIAPgMIAGgEIADgBIgEADIgDAHIABAJIAVgXIABgDIAAADIgDAaIADgKIAAgCIAGgMIAAAJIABAFIADgBIAMgVIAEgGIgBATIAGAMIARgUIABAAIgEAHIgBAHIAFABIADgJIABAJIAAABIAGAAIAHgTIAEAYIAAAGIADgHIASgXIADAiIAPgeIAEARIAEAHIACABIACgDIAFgVIACAQIAFABIAKgYIABABIAAAZIABgBIAMgPIAAgCIABAFIgBAQIAUgWIgCAWIABAAIALgPIAHAWIABABIAcgnIABgCIAAABIgCAKIgBAQIABAMIABgCIATgVQgBAEABAEIACAMIABABIAYgnIAIASIARATIARgcIAageIABAAIgFALIgDAOQgBAMADANIAHAOIACgNQACgFAFgEQALgNAQgNIBCgnIgQASQgGAIgCAKQgEASAGASIABAFIAegYIAJgMIgCAKIAAACIgDAcIAAACIAOgQIAYgnIgCAxIAFgEIAegOIAvgQIgEACIgMAJIgFAIIgEAIIgBAMIAAADIAogkIAEgFIAAABIAAADIgBAPIABATIAFgDIAUgiIAEgQIACA4IAFgCIADgDIAIgLIALgaIACAAIABACIACACIABADIABAgIABAAIAXgiIACACIAIAVIAbgkIADAEIAJAZQAEAMABANQABgRAKgQIAGgMIACABIAdAnIACgEIAJgZIAAgFIAZAfIADgeIAGAKIAHAWQABgJAGgIIAZgoIABgBIAAAEQgEAWACAVQgBAFACAGIAog+IAAAgQABAMADALIAQgpQAAAPADAOIADAHIADgGIAKgdIAAgBIAHgUIABAAIgCAVIAEABIAAgBIAPgpQADANgBAOQgDAWAGAWQAAgMAHgKIASgaIAJgXIgEBAIAahIIAAgEIABACIgCBNIABAFIgBAAIAAAGIABAAIADgFIgCAAIAAgBIABgFQAKgeAYgZIAIgIIADgGIAAAGIgGAfQgCASACARIAFARQACgRAKgPIAdgkIgGA1IAAAGIARgaQAAgBAngWQgGAJgDAMQgBAJAEAJIADAEIAEgDQAKgGAHgIIANgXIADgGIAPAqIAAABIADgCIAKgPIAYgyIAFAGIAMAWQAHAPARANIAJAJIABgCIAWg6IAgA+IAFgFIAigxIANAmQADAMAOAKIAbgqIAGAIIAGAYQAEALAMAJIAXguIACgBIABACQAHAPACAPIAEAMIABABIAAgBIATglIAHgIIADADQAHANACAOQgBAHAFAHIAJANIAGgRQADgIAGgGIAugvIAEgDIgBADQgCAOABAOIACARIAGAQIADAGQARgKALgMIAQgVQgHAOgBANIAAALIAmgrIAEgGIgKAaQgDAJABAKIADAMIAIgkIAOAPQAIAHANgBQAFgBAEgFIATgdIAEgKIADAKQAEANgCAMIgBANQACgOAOgMIAHgIIAFAkIAAABIADgCIAagUIgENwg");
	this.shape_10.setTransform(961.1,741.7);

	this.instance_165 = new lib.啋璃105("synched",0);
	this.instance_165.setTransform(507.3,688.5,0.993,0.872);

	this.instance_166 = new lib.啋璃105("synched",0);
	this.instance_166.setTransform(535.1,684.2,0.993,0.872);

	this.instance_167 = new lib.啋璃105("synched",0);
	this.instance_167.setTransform(624.1,682.9,0.993,0.872);

	this.instance_168 = new lib.啋璃105("synched",0);
	this.instance_168.setTransform(607.8,683.5,0.993,0.872);

	this.instance_169 = new lib.啋璃105("synched",0);
	this.instance_169.setTransform(597.5,682.9,0.993,0.872);

	this.instance_170 = new lib.啋璃105("synched",0);
	this.instance_170.setTransform(576.4,665.9,0.993,0.872);

	this.instance_171 = new lib.啋璃105("synched",0);
	this.instance_171.setTransform(557.2,665.9,0.993,0.872);

	this.instance_172 = new lib.啋璃105("synched",0);
	this.instance_172.setTransform(566.8,658.5,0.993,0.872);

	this.instance_173 = new lib.啋璃105("synched",0);
	this.instance_173.setTransform(557.2,658.5,0.993,0.872);

	this.instance_174 = new lib.啋璃105("synched",0);
	this.instance_174.setTransform(576.4,652,0.993,0.872);

	this.instance_175 = new lib.啋璃105("synched",0);
	this.instance_175.setTransform(558.4,652,0.993,0.872);

	this.instance_176 = new lib.啋璃105("synched",0);
	this.instance_176.setTransform(514.6,661.9,0.993,0.872);

	this.instance_177 = new lib.啋璃105("synched",0);
	this.instance_177.setTransform(506.3,661.9,0.993,0.872);

	this.instance_178 = new lib.啋璃105("synched",0);
	this.instance_178.setTransform(496.8,661.9,0.993,0.872);

	this.instance_179 = new lib.啋璃105("synched",0);
	this.instance_179.setTransform(496.2,652.9,0.993,0.872);

	this.instance_180 = new lib.啋璃105("synched",0);
	this.instance_180.setTransform(514.6,644.3,0.993,0.872);

	this.instance_181 = new lib.啋璃105("synched",0);
	this.instance_181.setTransform(505,644.3,0.993,0.872);

	this.instance_182 = new lib.啋璃105("synched",0);
	this.instance_182.setTransform(496.2,644.3,0.993,0.872);

	this.instance_183 = new lib.啋璃105("synched",0);
	this.instance_183.setTransform(485.8,644.3,0.993,0.872);

	this.instance_184 = new lib.啋璃105("synched",0);
	this.instance_184.setTransform(514.6,635.9,0.993,0.872);

	this.instance_185 = new lib.啋璃105("synched",0);
	this.instance_185.setTransform(505,635.9,0.993,0.872);

	this.instance_186 = new lib.啋璃105("synched",0);
	this.instance_186.setTransform(496.2,635.9,0.993,0.872);

	this.instance_187 = new lib.啋璃105("synched",0);
	this.instance_187.setTransform(514.6,627.2,0.993,0.872);

	this.instance_188 = new lib.啋璃105("synched",0);
	this.instance_188.setTransform(496.2,627.2,0.993,0.872);

	this.instance_189 = new lib.啋璃105("synched",0);
	this.instance_189.setTransform(505,619.2,0.993,0.872);

	this.instance_190 = new lib.啋璃105("synched",0);
	this.instance_190.setTransform(496.2,620.1,0.993,0.872);

	this.instance_191 = new lib.啋璃105("synched",0);
	this.instance_191.setTransform(485.8,619.2,0.993,0.872);

	this.instance_192 = new lib.啋璃105("synched",0);
	this.instance_192.setTransform(425.4,693.1,0.993,0.872);

	this.instance_193 = new lib.啋璃105("synched",0);
	this.instance_193.setTransform(415.8,691.6,0.993,0.872);

	this.instance_194 = new lib.啋璃105("synched",0);
	this.instance_194.setTransform(426.5,684.2,0.993,0.872);

	this.instance_195 = new lib.啋璃105("synched",0);
	this.instance_195.setTransform(417.1,684.2,0.993,0.872);

	this.instance_196 = new lib.啋璃105("synched",0);
	this.instance_196.setTransform(407.5,684.2,0.993,0.872);

	this.instance_197 = new lib.啋璃105("synched",0);
	this.instance_197.setTransform(426.5,676.6,0.993,0.872);

	this.instance_198 = new lib.啋璃105("synched",0);
	this.instance_198.setTransform(417.1,675.7,0.993,0.872);

	this.instance_199 = new lib.啋璃105("synched",0);
	this.instance_199.setTransform(398.5,675.7,0.993,0.872);

	this.instance_200 = new lib.啋璃105("synched",0);
	this.instance_200.setTransform(301.8,693.5,0.993,0.872);

	this.instance_201 = new lib.啋璃105("synched",0);
	this.instance_201.setTransform(309.9,693.5,0.993,0.872);

	this.instance_202 = new lib.啋璃105("synched",0);
	this.instance_202.setTransform(293.4,672,0.993,0.872);

	this.instance_203 = new lib.啋璃105("synched",0);
	this.instance_203.setTransform(301.8,685.7,0.993,0.872);

	this.instance_204 = new lib.啋璃105("synched",0);
	this.instance_204.setTransform(301.1,678,0.993,0.872);

	this.instance_205 = new lib.啋璃105("synched",0);
	this.instance_205.setTransform(309.9,686,0.993,0.872);

	this.instance_206 = new lib.啋璃105("synched",0);
	this.instance_206.setTransform(308.7,678,0.993,0.872);

	this.instance_207 = new lib.啋璃105("synched",0);
	this.instance_207.setTransform(309.9,665.8,0.993,0.872);

	this.instance_208 = new lib.啋璃105("synched",0);
	this.instance_208.setTransform(301.1,672.4,0.993,0.872);

	this.instance_209 = new lib.啋璃105("synched",0);
	this.instance_209.setTransform(301.1,665,0.993,0.872);

	this.instance_210 = new lib.啋璃105("synched",0);
	this.instance_210.setTransform(292.8,665,0.993,0.872);

	this.instance_211 = new lib.啋璃105("synched",0);
	this.instance_211.setTransform(219.4,668.8,0.993,0.872);

	this.instance_212 = new lib.啋璃105("synched",0);
	this.instance_212.setTransform(211.1,668.8,0.993,0.872);

	this.instance_213 = new lib.啋璃105("synched",0);
	this.instance_213.setTransform(201.7,667.9,0.993,0.872);

	this.instance_214 = new lib.啋璃105("synched",0);
	this.instance_214.setTransform(192,667.9,0.993,0.872);

	this.instance_215 = new lib.啋璃105("synched",0);
	this.instance_215.setTransform(181.9,667.9,0.993,0.872);

	this.instance_216 = new lib.啋璃105("synched",0);
	this.instance_216.setTransform(219.4,660.6,0.993,0.872);

	this.instance_217 = new lib.啋璃105("synched",0);
	this.instance_217.setTransform(211.9,660.6,0.993,0.872);

	this.instance_218 = new lib.啋璃105("synched",0);
	this.instance_218.setTransform(193.1,660.6,0.993,0.872);

	this.instance_219 = new lib.啋璃105("synched",0);
	this.instance_219.setTransform(219.4,652,0.993,0.872);

	this.instance_220 = new lib.啋璃105("synched",0);
	this.instance_220.setTransform(201.7,652,0.993,0.872);

	this.instance_221 = new lib.啋璃105("synched",0);
	this.instance_221.setTransform(192,652,0.993,0.872);

	this.instance_222 = new lib.啋璃105("synched",0);
	this.instance_222.setTransform(181.9,652,0.993,0.872);

	this.instance_223 = new lib.啋璃105("synched",0);
	this.instance_223.setTransform(201.7,642.3,0.993,0.872);

	this.instance_224 = new lib.啋璃105("synched",0);
	this.instance_224.setTransform(193.1,642.3,0.993,0.872);

	this.instance_225 = new lib.啋璃105("synched",0);
	this.instance_225.setTransform(220.8,634.9,0.993,0.872);

	this.instance_226 = new lib.啋璃105("synched",0);
	this.instance_226.setTransform(211.9,634.9,0.993,0.872);

	this.instance_227 = new lib.啋璃105("synched",0);
	this.instance_227.setTransform(202.9,634.5,0.993,0.872);

	this.instance_228 = new lib.啋璃105("synched",0);
	this.instance_228.setTransform(181.9,634.5,0.993,0.872);

	this.instance_229 = new lib.啋璃105("synched",0);
	this.instance_229.setTransform(221.8,626.1,0.993,0.872);

	this.instance_230 = new lib.啋璃105("synched",0);
	this.instance_230.setTransform(202.9,626.1,0.993,0.872);

	this.instance_231 = new lib.啋璃105("synched",0);
	this.instance_231.setTransform(181.9,626.1,0.993,0.872);

	this.instance_232 = new lib.啋璃105("synched",0);
	this.instance_232.setTransform(220.8,617.9,0.993,0.872);

	this.instance_233 = new lib.啋璃105("synched",0);
	this.instance_233.setTransform(211.9,616.9,0.993,0.872);

	this.instance_234 = new lib.啋璃105("synched",0);
	this.instance_234.setTransform(202.9,616.9,0.993,0.872);

	this.instance_235 = new lib.啋璃105("synched",0);
	this.instance_235.setTransform(193.9,616.9,0.993,0.872);

	this.instance_236 = new lib.啋璃105("synched",0);
	this.instance_236.setTransform(181.9,616.9,0.993,0.872);

	this.instance_237 = new lib.啋璃105("synched",0);
	this.instance_237.setTransform(202.9,608.7,0.993,0.872);

	this.instance_238 = new lib.啋璃105("synched",0);
	this.instance_238.setTransform(193.9,608.7,0.993,0.872);

	this.instance_239 = new lib.啋璃105("synched",0);
	this.instance_239.setTransform(181.9,608.7,0.993,0.872);

	this.instance_240 = new lib.啋璃105("synched",0);
	this.instance_240.setTransform(130.2,647.1,0.993,0.872);

	this.instance_241 = new lib.啋璃105("synched",0);
	this.instance_241.setTransform(111.6,646.7,0.993,0.872);

	this.instance_242 = new lib.啋璃105("synched",0);
	this.instance_242.setTransform(103.6,645.6,0.993,0.872);

	this.instance_243 = new lib.啋璃105("synched",0);
	this.instance_243.setTransform(82.9,645.6,0.993,0.872);

	this.instance_244 = new lib.啋璃105("synched",0);
	this.instance_244.setTransform(130.2,636.5,0.993,0.872);

	this.instance_245 = new lib.啋璃105("synched",0);
	this.instance_245.setTransform(111.6,636.5,0.993,0.872);

	this.instance_246 = new lib.啋璃105("synched",0);
	this.instance_246.setTransform(103.6,636.5,0.993,0.872);

	this.instance_247 = new lib.啋璃105("synched",0);
	this.instance_247.setTransform(91.8,636.5,0.993,0.872);

	this.instance_248 = new lib.啋璃105("synched",0);
	this.instance_248.setTransform(130.2,624.7,0.993,0.872);

	this.instance_249 = new lib.啋璃105("synched",0);
	this.instance_249.setTransform(111.6,624.7,0.993,0.872);

	this.instance_250 = new lib.啋璃105("synched",0);
	this.instance_250.setTransform(103.6,624.5,0.993,0.872);

	this.instance_251 = new lib.啋璃105("synched",0);
	this.instance_251.setTransform(82.9,624.5,0.993,0.872);

	this.instance_252 = new lib.啋璃105("synched",0);
	this.instance_252.setTransform(130.2,614.1,0.993,0.872);

	this.instance_253 = new lib.啋璃105("synched",0);
	this.instance_253.setTransform(122,614.1,0.993,0.872);

	this.instance_254 = new lib.啋璃105("synched",0);
	this.instance_254.setTransform(111.6,614.1,0.993,0.872);

	this.instance_255 = new lib.啋璃105("synched",0);
	this.instance_255.setTransform(103.6,613.4,0.993,0.872);

	this.instance_256 = new lib.啋璃105("synched",0);
	this.instance_256.setTransform(91.8,613.4,0.993,0.872);

	this.instance_257 = new lib.啋璃105("synched",0);
	this.instance_257.setTransform(82.9,612.8,0.993,0.872);

	this.instance_258 = new lib.啋璃105("synched",0);
	this.instance_258.setTransform(120,603.1,0.993,0.872);

	this.instance_259 = new lib.啋璃105("synched",0);
	this.instance_259.setTransform(111.6,603.1,0.993,0.872);

	this.instance_260 = new lib.啋璃105("synched",0);
	this.instance_260.setTransform(91.8,603.1,0.993,0.872);

	this.instance_261 = new lib.啋璃105("synched",0);
	this.instance_261.setTransform(128.7,593.7,0.993,0.872);

	this.instance_262 = new lib.啋璃105("synched",0);
	this.instance_262.setTransform(120,593,0.993,0.872);

	this.instance_263 = new lib.啋璃105("synched",0);
	this.instance_263.setTransform(110.9,593,0.993,0.872);

	this.instance_264 = new lib.啋璃105("synched",0);
	this.instance_264.setTransform(103.6,592.4,0.993,0.872);

	this.instance_265 = new lib.啋璃105("synched",0);
	this.instance_265.setTransform(91.8,592.4,0.993,0.872);

	this.instance_266 = new lib.啋璃105("synched",0);
	this.instance_266.setTransform(82.9,592.4,0.993,0.872);

	this.instance_267 = new lib.啋璃105("synched",0);
	this.instance_267.setTransform(129.9,581.7,0.993,0.872);

	this.instance_268 = new lib.啋璃105("synched",0);
	this.instance_268.setTransform(111.6,580.5,0.993,0.872);

	this.instance_269 = new lib.啋璃105("synched",0);
	this.instance_269.setTransform(103.6,580.5,0.993,0.872);

	this.instance_270 = new lib.啋璃105("synched",0);
	this.instance_270.setTransform(91.8,580.5,0.993,0.872);

	this.instance_271 = new lib.啋璃105("synched",0);
	this.instance_271.setTransform(128.7,571,0.993,0.872);

	this.instance_272 = new lib.啋璃105("synched",0);
	this.instance_272.setTransform(120,571,0.993,0.872);

	this.instance_273 = new lib.啋璃105("synched",0);
	this.instance_273.setTransform(110.9,570,0.993,0.872);

	this.instance_274 = new lib.啋璃105("synched",0);
	this.instance_274.setTransform(103.6,570,0.993,0.872);

	this.instance_275 = new lib.啋璃105("synched",0);
	this.instance_275.setTransform(91.8,570,0.993,0.872);

	this.instance_276 = new lib.啋璃105("synched",0);
	this.instance_276.setTransform(82.9,570,0.993,0.872);

	this.instance_277 = new lib.啋璃105("synched",0);
	this.instance_277.setTransform(4,673.1,0.993,0.872);

	this.instance_278 = new lib.啋璃105("synched",0);
	this.instance_278.setTransform(16.4,690.9,0.993,0.872);

	this.instance_279 = new lib.啋璃105("synched",0);
	this.instance_279.setTransform(16.4,682.3,0.993,0.872);

	this.instance_280 = new lib.啋璃105("synched",0);
	this.instance_280.setTransform(16.4,673.1,0.993,0.872);

	this.instance_281 = new lib.啋璃105("synched",0);
	this.instance_281.setTransform(4,655.9,0.993,0.872);

	this.instance_282 = new lib.啋璃105("synched",0);
	this.instance_282.setTransform(33.5,662.9,0.993,0.872);

	this.instance_283 = new lib.啋璃105("synched",0);
	this.instance_283.setTransform(34.2,655,0.993,0.872);

	this.instance_284 = new lib.啋璃105("synched",0);
	this.instance_284.setTransform(16.4,663.9,0.993,0.872);

	this.instance_285 = new lib.啋璃105("synched",0);
	this.instance_285.setTransform(16.4,655.9,0.993,0.872);

	this.instance_286 = new lib.啋璃105("synched",0);
	this.instance_286.setTransform(16.4,645.6,0.993,0.872);

	this.instance_287 = new lib.啋璃105("synched",0);
	this.instance_287.setTransform(32.5,638,0.993,0.872);

	this.instance_288 = new lib.啋璃105("synched",0);
	this.instance_288.setTransform(25.9,638,0.993,0.872);

	this.instance_289 = new lib.啋璃105("synched",0);
	this.instance_289.setTransform(16.4,638,0.993,0.872);

	this.instance_290 = new lib.啋璃105("synched",0);
	this.instance_290.setTransform(5.2,638,0.993,0.872);

	this.instance_291 = new lib.啋璃105("synched",0);
	this.instance_291.setTransform(-4.2,638,0.993,0.872);

	this.instance_292 = new lib.啋璃105("synched",0);
	this.instance_292.setTransform(33.5,626.1,0.993,0.872);

	this.instance_293 = new lib.啋璃105("synched",0);
	this.instance_293.setTransform(25.9,626.1,0.993,0.872);

	this.instance_294 = new lib.啋璃105("synched",0);
	this.instance_294.setTransform(16.4,626.1,0.993,0.872);

	this.instance_295 = new lib.啋璃105("synched",0);
	this.instance_295.setTransform(5.2,626.1,0.993,0.872);

	this.instance_296 = new lib.啋璃105("synched",0);
	this.instance_296.setTransform(-3.1,626.1,0.993,0.872);

	this.instance_297 = new lib.啋璃105("synched",0);
	this.instance_297.setTransform(32.5,616.1,0.993,0.872);

	this.instance_298 = new lib.啋璃105("synched",0);
	this.instance_298.setTransform(25.9,616.1,0.993,0.872);

	this.instance_299 = new lib.啋璃105("synched",0);
	this.instance_299.setTransform(16.4,616.1,0.993,0.872);

	this.instance_300 = new lib.啋璃105("synched",0);
	this.instance_300.setTransform(5.2,616.9,0.993,0.872);

	this.instance_301 = new lib.啋璃105("synched",0);
	this.instance_301.setTransform(-4.2,616.9,0.993,0.872);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343247").s().p("AgLANIAFABIgBAGIgCACgAAIgWIAFAAIAAABg");
	this.shape_11.setTransform(555,705.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E3755").s().p("EgzdAKOIAMx8IBvAAIgXgqQgHgQgEgRIgCgNIAYAVIAhASIA/AYQgCgRADgRIAIggIANAUIAVAbIANgVQAKgSAOgRIANgOIAAAYQAAAOAEAMIAKAbIAthIIABA6IAAADIABgCIAhgxQARgWAUgSIAJgHIgFAbIgCAmIAjgvIAAAFQgBApAEAnIAAACIABAGIAAgDQADgrAOgpIAFgOIABAAIAAABIAKAyQAGAZAOAVIADAEIAAgDQAAgiAKghIAJglIABAFQACAtAEArIABAOIACgEQAGgaAIgaIANgkIAKgRIACABQABAyANAwIACAHIAAABIABgBIAGgYIAbhHQgDARAAAQQAAAOACAPQAEAZAIAYQAHgeAMgdIAKgVIABACIAOBAIAIATQAEgdANgaIAEgIIABAJIAAAsQAJgaAQgYIAFgIIAAAIQAAAWAEAXIAIgHIAdghQgIAUAIATIACAFIARgtIAFAaQACARAJAPIACgEQAHgfAMgdIADgLIACAFIACAAIAAAHIAOAvIAEgBIAMgQIAhg/QABAjAGAiQAHgdAIgTIAMgfIABAFIADArQADAZAFAYIA2hKIgBAMIgDAyIAAAIIAshAIABgCIACgEIADBNIAmhAIACA1IgBADIABgCQAHgUAFgLIAXgjIACgHIgHA1IgBAaIAAAGIgBAFQAIgdAMgPIAzg5IAFgIIgJAyQgFAXAGAXIAAABIABgBQAGgRAQgMQARgMAMgQIABADIgFAqIADAGIAYgdIADAbQAAAIAIALIACgDQAJgQAFgRIAGgPIABAPIAPAjIABgFIACgDQAIgQABgRIACACIATAkQAPgNAIgUIAOgcIAMA1IAAABIABgBQAOgaAJgbIADgHIABACIADArQAAAHACAFIAHgEIAhgpQAKgLAKgIIAHgGIAAABIgJBEQAKgLANgKIAVgOIArgeIgKAPQgIAPgFAQIgDAPIgBADIACgDIAbgiIADgCIACAtIACAJIAcg7IABACIANA5QABgHADgHIAZguIAQAxIADAEIABAAIABgBIAHgMQAKgNANgKQAPgMATgJQAMgGANgFIAEgCQgIAGgFAJQgKASgGAVQgEAOAEAOIADADIADgCIAcgYQAQgQALgTIABgDIAFA6IAAACIADgCIAMgVQAJgTALgTIAHA0IACAJIAYg6IABADIgBAYQgBAUAJASIABgFIABgBIA9hMQABANgEAMQgDAPAAAPIABAOIAQgOQAXgkAeggIABgCIAAADIgEAWQgFAZAFAZIAGgGIAng/IABA2IAEARIANgSIAQgeIABADIABAwIABACIAWgUQADgDAEgBIAKABIADABQAEABgFACIgGAGQgDAHACAOIAXgQIAOgHIACgBIgFAOQAAAEADADIAIAAQAXgPAKgXIAahAIgCBMIAEACIAIgMIATgqIgBA2IAHALIAJgSQAIgPACgPIABAGIAAAeQAAAEAGAHIAJgWQAJgcAOgZQgJAtAFAtIAHgIIA0gsIAEgDIgBAEQgKAaAHAbQALgcARgaIgBA9IABgEQAGgMAKgKIAKgJIAbgTIgCAHQgJAVgBAXIAFgLIAggoIgEARQgEAPADACQAMgSAZgFIABAAIgMAPQgFAGgBAIIAHgDQAcgJATgTIAHgHIAPgWIgVAxIgIAKQAVgHAQgPIAUgSQgKARgDATIALgFIAwgfIAVgTIgIAxIgCAGIAAABQAIgHAEgKIAFgOIAEAlIADgDIAOglIABgBQADASAHARIAEAKIAAABIACgDIANgnIABADQADANAHAMIAHALIACACIAAgBIALgnIADACIAbAfIAIgoIAAgBIAEAHIALAiIADgfIABABQAJAMAFANIAEAJIABABIAEgDIAOgeIACgKIAAgCIABACQAHAPABAQIADAPIAAABIAEgGIALgrIAIAvIAPg1IAEA8IAfgxIAAAnIAdg4IAAABQAAAQADARIADAPIAAABIABACIABgDIANg0IAHA7IAFgGIABAAIAAgEIAchBIAJBOIAUhMIAMBCIAFAKIAGgeQACgNAEgNIAGgQIADBBIAEgCIAWgwQgCARAEARIABAOIABgBIAGgKQAMgZAQgVIAEgFIACAEIACABIABA5IACAHIACgFQABgGAEgEIAagsIABARQAEAOAGALIAFAFIAshDIABAFIACA/IACALIAAgKIAQg2IAIgVIAGBNIABADIAAgCIAXhHIABACIgDBMIACgCIAfg+IABADIABA0IAeg1IADA7IAFgKIAmg2IAIgGIgFAMQgEAQABAPIACAMIAdggIAcgWIAKgFIgEADIgGAJIgMAeQgFALgBAMIAPgJIAtgkIACgEIAAABIgHATIgQAfIgEAFIAggXQASgPAIgUIAAADIgGArIgJAWIAEgGIAAgBIAfgtIABgDIACAAIgKAvIAbgdIAPgNIABAAIgEAQQgEALACAKIAAADIAIgMQALgOAOgKIAHgEIAIgDQgHAGgDAHQgFAKgDAMIgBAMIAHgJIApgiIACgBIAAARQAAAOACANIAEALIAIgRQAMgVAIgWIACgFIACBAIABACIABgBIAcg0IAJgOIACgBIgEA7IABAAIAAgBIALgPQANgTAPgRIgDAaQgCAIAAAIIABADIAAABIAEgEQANgVATgPIgBACIgBAdIABAEIAAABIASgpIABASIADARIAEAJIAIgnIAAgBIACgLIABAAIACANIAIAYIAIAQIADADIANg9IAVA8IAAABIAPgjIAIgQIAFgKIAAAiIADAPIABADIAAABIABgBIAMgaIAVgdIgGAmIAAAHIABgBIAogxIAAABIgRAxIAAACIABgBIAVgdIABgBIAVgUIgGAQIgDAVIgBATIABAEIAAgEIAHgLIAhgqIADgBIgDASQAAANAEANIACAJIAAgBQAAgPAEgPIAEgRIABgDIAAAUQABANAFANIAEANIADgDIAFgVQAGgUAJgTIABAAIAGA6IAIgOIAVg5IACAGIADA6IAFgOQAIgSAMgRIANgSIgNA4IgBAKIAvg5IACABIgJA1IAAABQAGgOAJgMIAggpIgJAgQgGAUAEAVIAAADIABgDQADgLAIgLQAQgWAOgZIAAABIgNBBIAUgfIAhgnIgEAPIAAABIgMAzIAAAEIABgDIAPgWIAfgiIgLAeQgDAKAAAKIAAAEIADgDQAFgPANgKIAZgSIgGALIgHAXQgCAMADAMIAAABIALgMIATgcIAFgPIgKA4IACABIARgkIAGArIAAACQABgMAGgLIAIgYIABgBIADAAIAAAkIADAJIASgcIAZg5IABgGIgBArIgBAaIAAAHIASgeIAHgJIABgBIgBArIALggIABgBIAGAmIADgGIAJgoIABACIADAsIACgBIAOgqIABAmIAWgtIAAAlIABACIAQgTIAXgSQgDAFgCAGIgDAUIADAPIAAABIACgBIABgMIALgaIgBATIACAOIAAABIAEAKIAFgjIANAaIAFADIABgBIAEgHIADgKIAAgFIABgBIAAABIADAXIAFAJIAHgeIAAgCIACATIACAHIAEAGQACgHAFgFIAMgRIAJgIIgDAFIgEAJQAAAHACAGIAUgfIACgFIgBAEIgCAkIABgJIAIgXIAAASIAFgBIAKgeIAEgIIgCAOIABANIAFARIAQgcIABgBIgDAKIgBALIAEABIAAgBIAEgMIABANIAAABIAFgBIAIgZIADAgIAAAJIADgJIARghIADAvIADgHIAMgiIADAXIAEALIACABIACgEIAGgdIABAWIAFABIAAgEIAFgRIAGgMIAAAkIABgBIAMgWIAAgBIABAGIgBAWIASgeIgBAeIALgUIAEAVIADAJIAAABIADgEIAagxIABgEIAAACIgEAOIABAmIATggIAAAMIADAQIAAACIAYg2IAAAFIASAnIAFAGIABgCIAPgkIAagoIgEAPIgCASQgCASAEAQIAFAUIAEgSIAGgNQALgSAOgQIAiggIAfgWIgHAJIgJARQgGALgCANQgDAYAEAZIADAGIAcghIAJgPIgCANIAAADIgEAmIAAACIAPgWIAXgzIgCBCIAFgGIAcgUIAugWIABAAIgFADIgLANIgGALIgDALIgBAQIABAFIAAgCIAmgwIADgHIAAABIABAFIgCAUIACAaIAFgEIATgwIADgUIAEBFIgBAIIAIgHIAIgQIAKgkIACAAIAAACIACADIACAGIAAAsIABgBIAXgvIAJAfIAXgpIACgGIAEAFIABAAIAIAhQAEARAAARQADgXAJgVIAFgRIABABIAcA2IADgFIAJgkIAAgFIAYAqIADgpIAGANIAHAeQABgMAFgLIAXgyIABgEIABgBIAAAFQgDAdABAdIABAPIAkhOIABgGIABACIACAqQAAAQADAPIAPg4IABAAQAAAUACATIADAJIAAACIACgFIABgFIAJgmIAAgBIAIgcIABAAIgCAdIAEABIAAgBIAOg5QADASgBAUQgCAdADAeQACgQAIgOIAQgjIAJggIgFBXIAahiIAAgGIABADIgCBqIABAGIgBABIAAAIIACAAIACgHIgBAAIAAgBIgBAAIABgHQAJgoAXgkIAIgMIADgHIAAAJIgFArQgCAXACAXIADAYQADgWALgVIAbgyIgHBIIABAJIABgEIAOggQABgCAngdQgIAOgBAPQgCAMAFAMIACAFIAEgDQALgJAFgLIANgfIACgIIAPA5IABABIACgCIALgVIAWhEIAFAHIAMAgQAHAVAQAQIAJAMIAXhRIAeBUIAlhKIANA1QADARANAMIAbg4IAGALIAHAfQADAQAKANIAXg/IACgBIABADQAHATACAUIADARIACABIASgyIAHgMIACAFQAIARABATQAAAKADAJIAJASIAGgXQAEgLAFgJIAshBIAFgEIAAAEQgDAVACATIAGAsIAEAIQAQgMAKgSIAQgbQgHASgBASIAAAPIAkg7IAEgHIgJAhQgDANAAAOIAEARIAHgyIABACIAMASQAIALANgCQAFgBADgHIAUgmIADgPIADAOQAEARgBARIgBARQACgTAMgRIAHgJIAFAvIAAACIADgCIAZgcIgES/g");
	this.shape_12.setTransform(313.5,761.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C0937").s().p("APmDtIgBhAIgCAFQgIAWgNAVIgIARIgDgLQgDgNAAgOIAAgRIgCABIgpAiIgHAJIABgMQAEgMAEgKQAEgHAHgGIgIADIgHAEQgPAKgKAOIgJAMIAAgDQgCgKAEgLIAFgQIgCAAIgPANIgaAdIAJgvIABgDIgCADIgBADIgfAtIAAABIgFAGIAKgWIAFgrIAAgDQgIAUgSAPIggAXIAFgFIAQgfIAHgTIAAgBIgDAEIgtAkIgPAJQACgMAEgLIANgeIAFgJIAEgDIgJAFIgdAWIgcAgIgDgMQgBgPAFgQIAEgMIgIAGIglA2IgGAKIgCg7IgeA1IgBg0IgBgDIgfA+IgDACIAEhMIgBgCIgXBHIAAACIgBgDIgHhNIgIAVIAAhqICbAAIAAh4IBBAAIAABAIBOAAIAAhKIBRgBIgCA5IBMAAIAAg4IBiAAIAABUIB0ABIgGhOIBeAAIAAD1IAAABIgWAdIgBABIAAgCIARgxIAAgBIgoAxIgBABIAAgHIAHgmIgWAdIgMAaIgBABIAAgBIgBgDIgCgPIAAgiIgGAKIgIAQIgPAjIAAgBIgUg8IgOA9IgCgDIgIgQIgIgYIgCgNIgBgBIAAABIgDALIAAABIgIAnIgDgJIgEgRIgBgSIgRApIAAgBIgBgEIABgdIABgCQgTAPgNAVIgFAEIAAgBIgBgDQAAgIADgIIADgaQgQARgMATIgMAPIAAABIgBAAIAFg7IgDABIgJAOIgcA0IgBABgAtaDIIABgYIgBgDIgYA6IgDgJIgGg0QgLATgJATIgNAVIgCAAIgGg6IgBADQgKATgQAQIgdAYIgDACIgCgDQgFgOAFgOQAFgVALgSQAEgJAIgGIgDACQgOAFgLAGQgUAJgPAMQgMAKgLANIgHAMIgCABIgCgEIgQgxIgZAuQgEAHgBAHIgMg5IgBgCIgcA7IgCgJIgDgtIgCACIgbAiIgBAAIADgPQAEgQAIgPIALgPIgsAeIAAlDIAvAAIAAhdIBPAAIAAA/IBPAAIAAg1IA2AAIAAAoIBfAAIAAGkIgBABIgBAFQgJgSABgUgAyGCTIAAABIACgDgACmCxIgOA1IgIgvIgMArIgDAGIAAgBIgEgPQgBgQgHgPIgBgCIAAACIgCAKIgOAeIgDADIgBgBIgFgJQgEgNgJgMIgBgBIgEAfIgKgiIgFgHIAAABIgIAoIgagfIgEgCIgKAnIgCgBIgHgLQgFgMgDgNIgCgDIgMAnIgCADIAAgBIgFgKQgHgRgCgSIgBABIgPAlIgCADIgFglIgEAOQgEAKgIAHIAAgBIACgGIAHgxIgVATIgwAfIgLAFQAEgTAKgRIgVASQgQAPgVAHIAJgKIAUgxIgOAWIgHAHQgTATgdAJIgGADQABgIAEgGIANgPIgBAAQgZAFgNASQgCgCADgPIAFgRIggAoIgGALQABgXAJgVIADgHIgcATIgJAJIABkfIBmAAIAAhNIBIAAIAAA7IBPAAIAAAvIB3AAIAAg2IBXAAIAAgqIB3AAIAAFnIAAAEIgBAAIgGAGIgHg7IgMA0IgBADIgCgCIAAgBIgDgPQgCgRAAgQIAAgBIgeA4IAAgnIgfAxgA+HDGIgEgaIgRAtIgDgFQgIgTAIgUIgdAhIgIAHQgDgXAAgWIAAgIIgGAIQgQAYgJAaIAAgsIgBgJIgDAIQgOAagDAdIgIgTIgOhAIgBgCIgKAVQgNAdgGAeQgIgYgFgZQgCgPAAgOQAAgQADgRIgbBHIgGAYIgBAAIgCgHQgNgwgBgyIgBgCIgBABIgJARIgOAkQgIAagFAaIgDAEIgBgOIAAlPIAnAAIAAhjIBIAAIAABFIBAAAIAAgnIAxAAIAAAhIBXAAIAAFPIgBAAIgCgFIgEALQgLAdgHAfIgCAEQgJgPgDgRgAbVA+IAAhoIBWAAIAAAnIBPAAIAAg7IBbAAIAAAzIB1gCIAAg7IBOAAIAACGg");
	this.shape_13.setTransform(259.4,687.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#351069").s().p("EgzXALzIAAwoIIeAAIAAKmIAAFQQgEgrgCgsIgBgFIgJAkQgKAhAAAiIgDgBQgOgVgGgZIgKgxIAAgBIgCgBIAAABIgEAOQgPAogCArIgBgDIAAgCQgEgnAAgoIAAgFIgjAuIADglIAFgbIgJAHQgUASgRAVIghAxIgBgBIgBg6IguBIIgKgbQgDgMAAgOIAAgYIgOAOQgNARgLASIgMAVIgVgbIgNgUIgIAgQgDARACARIhAgYIgggSIgYgVIACANQAEARAGAQIAYArgAttKuQgRAagMAcQgGgbAKgaIABgEIgFADIg0AsIgGAIQgFgtAJgtQgOAZgJAcIgJAWQgGgHAAgEIAAgeIgBgGQgDAPgHAPIgJASIgHgLIAAg2IgSAqIgIAMIgEgCIAChLIgaA/QgKAXgYAPIgIAAQgCgDAAgEIAFgOIgDABIgNAHIgXAQQgCgOADgHIAGgGQAEgCgDgBIgDgBIgKgBQgEABgDADIgWAUIgBgCIgCgwIgBgDIgPAeIgNASIgEgRIgBg2IgnA/IgHAGQgEgZAEgZIAFgWIAAgDIgBACQgeAggXAkIgQAOIgBgOQAAgPADgPQAEgMgBgNIg9BNIAAmnIAAqxIIcAAIgFMiIgBEhQgKAKgGANIgBAEgEAvBALTQgDgJAAgKQgBgTgJgRIgBgFIgIAMIgSAyIgBgBIgEgRQgCgUgHgTIgBgDIgBABIgXA/QgKgNgEgQIgHgfIgFgLIgbA4QgNgMgDgRIgNg0IglBJIgehTIgYBQIgJgMQgQgQgGgVIgMgfIgFgHIgWBDIgLAVIgCACIgCgBIgOg5IgDAIIgMAfQgFALgLAJIgFADIgCgFQgEgMACgMQABgPAIgOQgnAdgBACIgOAgIgBAEIgBgJIAGhIIgbAyQgKAVgDAWIgDgYQgCgXACgXIAFgqIAAgJIgDAHIgIAMQgXAjgKAoIgBAHIABAAIAAABIACAAIgDAHIgCAAIAAgIIABgBIgBgGIAChpIgBgDIAAAGIgZBhIAFhWIgJAfIgRAjQgHAOgCAQQgDgeACgdQABgTgDgSIgOA4IgEAAIACgdIgBAAIgIAcIAAABIgJAmIgGgBQgDgTABgUIgBAAIgPA4QgEgPABgQIgCgqIgBgCIgBAGIgkBOIgBgPQgBgdADgdIAAgFIgBABIgBAEIgXAyQgFALgBAMIgIgeIgFgNIgEApIgXgqIAAAFIgJAkIgDAFIgcg2IgBgBIgGARQgIAVgDAXQAAgRgEgRIgIghIgBAAIgEgFIgDAGIgWApIgJgfIgXAvIgBABIAAgsIgCgGIgDgDIAAgCIgBAAIgLAkIgIAQIgIAHIABgIIgDhFIgDAUIgUAwIgEAEIgCgaIACgUIgBgFIAAgBIgEAHIgmAwIAAACIgBgFIABgQIAEgLIAGgLIALgNIAFgDIgBAAIguAWIgcAUIgGAGIADhCIgXAzIgPAWIAAgCIAEgmIAAgDIACgNIgJAPIgcAhIgDgGQgEgZADgYQACgNAGgLIAJgQIAHgJIgfAVIgiAgQgOAQgLASIgHANIgDASIgGgUQgDgQABgSIACgSIAFgPIgaAoIgPAkIgBACIgGgGIgSgnIAAgFIgXA2IAAgCIgEgQIAAgMIgSAgIgBgmIAEgOIAAgCIgBAEIgaAxIgDAEIAAgBIgEgJIgDgVIgMAUIABgeIgSAeIACgWIgCgGIAAABIgMAWIgBABIAAgkIgGAMIgEARIAAAEIgGgBIgBgWIgGAdIgCAEIgBgBIgEgLIgEgXIgLAiIgDAHIgDgvIgRAhIgEAJIAAgJIgCggIgIAZIgFABIAAgBIgCgNIgDAMIAAABIgFgBIACgLIADgKIgBABIgQAcIgFgRIgBgNIACgOIgEAIIgKAeIgFABIAAgSIgIAXIgCAJIADgkIABgEIgCAFIgVAfQgBgGAAgHIADgJIAEgFIgJAIIgNARQgEAFgCAHIgEgGIgCgHIgCgTIAAACIgHAeIgFgJIgDgXIAAgBIgBABIAAAFIgDAKIgEAHIgCABIgEgDIgNgaIgGAjIgDgKIAAgBIgCgOIABgTIgLAaIgBAMIgCABIAAgBIgEgPIAEgUQACgGADgFIgXASIgQATIgBgCIAAglIgWAtIgBgmIgPAqIgBABIgDgsIgBgCIgJAoIgDAGIgGgmIgBABIgMAgIABgrIgBABIgGAJIgSAeIAAgHIABgaIABgrIgBAGIgZA5IgSAcIgDgJIAAgkIgEAAIgBABIgIAYQgFALgCAMIAAgCIgFgrIgRAkIgCgBIAKg4IgGAPIgTAcIgKAMIAAgBQgEgMADgMIAHgXIAFgLIgZASQgMAKgGAPIgCADIAAgEQAAgKACgKIAMgeIgfAiIgPAWIgBADIAAgEIAMgzIAAgBIAEgPIghAnIgUAfIANhBIAAgBQgOAZgQAWQgIALgEALIgBAAQgDgVAFgUIAKggIggApQgJAMgGAOIAAgBIAJg1IgCgBIgvA5IABgKIANg4IgNASQgNARgHASIgFAOIgDg6IgCgGIgWA5IgIAOIgFg6IAAgBIgBABQgJATgGAUIgGAVIgCADIgFgNQgEgNgBgNIAAgUIgBADIgEARQgFAPABAPIAAABIgCgJQgFgNAAgNIADgSIgDABIghAqIgGALIAAAEIgBgEIABgTIADgVIAGgQIgVAUIgBAAIAAj3IAAhxIG8AAIAACIIAABrIHDAAIAAiJIAAqfIGmAAIAAJxIExAAIAAkkIEwAAIAAExIJcAAIAAEdIgZAcIgEAAIgEgvIgHAJQgMARgDATIABgRQACgRgEgRIgDgOIgEAPIgTAmQgEAHgEABQgNACgIgLIgMgSIgBgCIgHAyIgEgRQAAgOADgNIAJghIgEAHIglA7IAAgPQACgSAGgSIgQAbQgJASgRAMIgDgIIgHgsQgBgTACgUIAAgEIgEAEIgsBAQgGAJgDALIgGAYgEghtALfIAAgGIABgaIAHg1IgBAHIgXAjQgGALgGAUIgBACIABgDIgCg1IgmBAIgEhNIgBAEIgBACIgsBAIAAgIIADgyIABgMIg2BKQgFgYgDgZIgEgrIgBgEIgLAeQgIATgIAdQgFgigCgjIggA/IgNAQIgDABIgPgvIAAgHIAAlQIAAw/IKvAAIAARdIAAFEIgVAOQgOAKgJALIAJhEIAAgBIgHAGQgLAIgJALIgiApIgGAEQgCgFgBgHIgCgrIgBgCIgEAHQgIAbgOAaIgBABIAAgBIgNg1IgNAcQgJAUgPANIgSgkIgCgCQgCARgHAQIgCADIgCAFIgOgjIgBgPIgHAPQgEARgJAQIgDADQgHgLgBgIIgDgbIgYAdIgCgGIAFgqIgCgDQgLAQgSAMQgPAMgGARIgBAAQgGgXAFgXIAJgxIgFAHIgzA5QgMAPgJAdgAjTLZIgMhCIgUBMIgJhOIgcBBIAAloIAAiNIEbAAIAAFXIAABpIgPA2IAAAKIgCgLIgDg/IAAgFIgtBDIgEgFQgHgLgDgOIgBgRIgbAsQgDAEgBAGIgCAFIgDgHIgBg5IgBgBIgCgEIgFAFQgQAVgMAZIgFAKIgCABIgBgOQgDgRABgRIgVAwIgEACIgDhBIgGAQQgFANgBANIgGAeg");
	this.shape_14.setTransform(314.1,636.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#0099CC","#000099","#000000"],[0,0.11,1],-0.1,402,0,-401.8).s().p("EhozBEwMAAAiJgMDRnAAAMAAACJgg");
	this.shape_15.setTransform(644.1,301.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},41).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,0,1370.7,791.9);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,51);


(lib.img10 = function() {
	this.initialize(img.img10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.img11 = function() {
	this.initialize(img.img11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,56);


(lib.img12 = function() {
	this.initialize(img.img12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,59);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,49);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,52);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,49);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,51);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,51);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,62);


(lib.img8 = function() {
	this.initialize(img.img8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,57);


(lib.img9 = function() {
	this.initialize(img.img9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,63);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,85);


(lib.課程 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACJBcIAAhFIA3AAIAAA/IgLAAIAAgKIghAAIAAAQgACUBBIAhAAIAAggIghAAgAjnBcIAAg0QgiAeg4AQIgGgKQA3gPAdgaIhHAAIAJglIBKAAIAAgTIhVAAIAAgKICsAAIAAAlIhMAAIAAATIBUAAQAAAKgCARQgDASgEADIgIAFQgDABgPAAIgVgBIgEgKIAiABQAIAAACgIQADgIABgSIhIAAIAAA5gAkrAZIBEAAIAAgTIg/AAgAjcgCIBBAAIAAgTIhBAAgAECBbIAAhAQgSAegjAZIgHgHQAngeAOgcIgvAAIAAgKIA2AAIAAgQIguAAIAAhLIBpAAIAABLIgvAAIAAAQIA3AAIAAAKIgwAAQAOAeAlAbIgHAIQglgbgOgcIAABAgAEOgTIAjAAIAAgWIgjAAgADfgTIAjAAIAAgWIgjAAgAEOgzIAjAAIAAgXIgjAAgADfgzIAjAAIAAgXIgjAAgAhiBXIAAgLIA0AAIAThVIg1AAIAAgLIA4AAIALg1IhNAAIAAgLIC1AAIAAALIhcAAIgLA1IBLAAIAABgIAjAAIAAALgAghBMIBTAAIAAhVIhAAAgACGACIAAgKIA8AAIAAAKgACGgcIAAgLIA8AAIAAALgAi3g3IALgDQAKAJAEAIIgMADQgEgJgJgIgAkVg3IALgEQAJAIAEAIIgLAEQgFgIgIgIgAjrgvQAagRAQgZIAKAEIgJANIBBAAIAAAKIhJAAIgYAXgAlHguQAbgWAMgWIAMAEQgEAHgGAHIA7AAIAAAKIhDAAQgOAPgJAIgACBg5IAAgKIAfAAQgEgIgHgKIALgGQAHALAGANIAaAAIAAAKg");
	this.shape.setTransform(36,15.7);

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlABsQgtAAgfggQgggfAAgtIAAAAQAAgsAggfQAfggAtAAIKBAAQAtAAAfAgQAgAfAAAsIAAAAQAAAtggAfQgfAggtAAg");
	this.shape_1.setTransform(37.8,15.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,4.6,85.9,21.7);


(lib.標題文字 = function() {
	this.initialize();

	// 圖層 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AljAtIAQgDIAAgEIgPACIgBgNIAQgCIAAgDQgKAAgFgEQgGgGgBgJQAAgLAHgLIAGACIAMgDIAAgBIgZACIgBgMIAbgDIAAgDIgQADIgEgMIAwgJIAFANIgPACIgBAEIAVAAIACAOIgXAAIgBACIAFABQAIABAFADIADADIgCgIQAIgEAHAAIAFgbIARAEIgEAXQAEABAEACQAIAGAAANIAAADIgCAVIgDASIgSgDQAEgMABgMIAAgOQAAgDgCgBIgLA5IgRgEIAJg0IgDACIAAAEIAAADQAAAGgDADQgDAFgHACQgGABgJAAIAAACIATgBIABAOIgUAAIgBADIASgCIAEALQgXAFgdADgAlBALIAIgCQADgBABgHQgBgGgGgCIgDAAIgBAEIAIAAIgBAKIgIAAIAAAEgAlWAJIAEABIAAgEIgGgBIACAEgAlYgEIAHAAIAAgDIgHADgAjmAuIBkgDIAAALQgwACgyAAgAFSAnIgHAJIgMgKIAMgQQgDgMgCgMIAAgCIgHABIgBgJIgCAFIgNgDIAAAFIgOAAIABABQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAFAAANgDIACAIIgOADIATABIgBAMQgYgDgZAAIAAgLIANAAIgDgBQgFgCAAgDIAAgEIgEgBIACgLIAEAAIACgCIgJABQgEAiAAAlIgPgCQABgsAFgmIANABIACAAIgCgVIAQgCIABAFIAegBIABAMQgQAAgOABIAAADIAOAAQAIAAAFADQAGACAAAHIAAABIgBABIAFAAIgCghIARABIABAfIASgCIADAQIgSACIAAAFIACAFIAFgFIAMAKIgMAOIADAFQADAFAHAFIgIARQgKgGgHgLgAEfgVIAGABIgBADIAMACIAAABIABgGIgBgCIgFAAIgMABgABSAyIAJgcIgEgCQgDgDgBgFQAAADgBACQgEAGgGAAIgBAAIAFACIgDAHIAKAEIgEANIgKgDIgCAJIgOgFIAIgcQgDAAgBgCQgFgGAAgKQAAgHAFgJIADABQAFgCADABIAHAAQADACACADQADADAAAEQACgFADgHIAEACQAEgCAFAAIAGAAQADACACADQADAEAAAGIAAACQAAAHgCAEQgEAHgGgBIgCAAIAFADIgDAIIAMAGIgDAOIgPgFIgCAHgABgAAIgBAEIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAABAAIAAgFIAAgEQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAgABBAAIAAADQAAAEABACQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIABAAIACgCIAAgDQAAgEgBgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgCAAgAEMAtIAHgBIgBgGIgCgBQgEgCAAgFQAAgHAFgGIAFACIAOgBQAQAAAFADQAGACgBAFIABABQAAAGgFACIgCABIgCAEIAJgBIABAKQgZAAgaAEgAEgArIAHgBIACgDIgEAAIgGAAIABAEgAEaAdIABABIAHABIACAAIALgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAIgJAAQgFAAgGACgAhXAwIAHgVIAAAAQgFgJAAgPQAAgLACgMIgDACIgIAIIgCAEQAAACAJADIgHAMQgKgCgIgIQgDgDgBgEQABgGAFgFIAIgGIABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgJgDIAGgNQAFABALAFQAHAFABAFIAGgTIAIACIAIgCQAJAAADABQAEADADAHQACAHABAWQgBATgDALQgCAFgEAEQAHAEAEAGIgLAKQgFgGgHgFIAEgFIgDAAIgGAAIgHAUgAhDAPQABAFAGAAQADAAAAgHQACgHAAgMQAAgYgCgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgCAAIgEACIgCAKIAJABIgCAOIgJgBIAAADIAKABIgBAMIgJAAQAAAGABACgACmA1QgPAAgKgFQgLgGAAgNQAAgMAEgOIATAEQgEAKAAAIQgBAGAGADQAEADALAAQAJAAAJgCIgLgFIAGgPIABgFQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgGADIgGAUIgQgFQAGgZAIgUIgIABIgCgLIgDALQgKgEgKgCIAGgQQALABAIAEIAJgBIgEgJIAQgHIAGAOIAJAAIABAGIAHgUIAQAEIgDAGIAWACIgBARIgZgEIgCAKIAHgBQAHAAAGAEQAGADAAAHQAAAFgFAHIABAEIAJgCIABAQIgKACQgBANgKAHIgNgJQAFgEACgEIgOABIgCgNIgBACIgGAOIAJgCIADAQQgRAFgOAAgADCgDQAFADAAAHIAAAHIAOgBQgCgEgFgCIAJgJIACABIABgCQgBgBgFAAQgFABgGADIgFgPIAGgCIgLgCIABgDIgJABIgFAPIAFAAQAGAAAFADgAAiA0IAGgTIgGAGIgHgMIAFgFIgEAAIgHABQgNAAAAgPQAAgXAEgWIgCAAIABgOQAWAAAWACIgBAJQARgKAQgGIAEAHIAYAHIgDANIgbgIIgOAGIAhADIgBAPIgngEIACgLIgJAFIgGgMIgEAAIgBAIIAIABIgCANIgIgBIgBAHIAHABIgBAKIgHgBIAAAGQAFAAAFAEQAEAFAAAJQAAAJgHARgAApAeIAAgCQgBgGgFAAIAGAIgAAVAHQAAABAAABQAAAAABAAQAAABABAAQABAAAAAAIAEAAIAAgIIgGAAIgBAFgAAWgKIAHABIAAgGIgGgBIgBAGgAAZgdIAGAAIABgIIgGAAIgBAIgAgVgHIgDgpIAPgBQACAJACAjIACA2IgPACIgDg6gAAEAjQAEgGAGAAIAEABIAEABQAEAAAAgBIAGAMQgCAEgHAAQgCAAgCgCIgEgBQgCAAgEAEgAhxAZIAVgGIAGATQgKAFgMACgAi8ArQgUAAgKgDQgNgCAAgLQAAgFAEgLIAGACQAegFAgAAIAPABQAJABAEAEQADAFAAAJIAAADQAAACgDAEQgGAEgQABIgbABgAi0AhIAUgBQAHAAAEgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAAAIgBgGQgCgDgDAAIgHgBIgWABIAAADIAQAAIgBAJIgOgBIAAADgAjOAfIAJABIAAgCIgNAAIAEABgAjTAWIgBAAIAPAAIgBgCIgNACgAgmgTIAOgCIADA0IgMABIgFgzgAjnAAQATAAAVgBIAAgBQgQAAgPABIgBgKIAfgBIAAgDIgkgCIABgKIAiACIAAgDIgqgBIABgKIAHABIgBgJQAQgCARAAIAAgDIASgCIAAAEQARAAAKADQAJAEABAHIALAAIgBALIgKgBQgCAGgEACQgJADgMAAIgDAAIgDAAIAAACIAbAAIABAJIgbABIAAABIAqAAIAAAIQgyAAgyAEgAiugZIAEAAIAIgBIABgBIgNAAIAAACgAivgmIANABIgDgCIgLgBIABACgAjVgmIATAAIAAgCIgTACgACBgDIAEgQQAMACAIAFIgFAOQgJgDgKgCgAFVgmIAJgKQAHAFAGAIIgKAKIgMgNg");
	this.shape.setTransform(27.9,28.4);

	// 圖層 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AFfgwQAHAFAFAIIgKAKQgFgGgHgHgACIgjIABgGQAMACAHAEQAFgBAFgBQgCgEgCgFIARgHQACAIAEAGQAEAAAEAAIABAGQACgKAFgKIAQAEQgBADgBACQALABAKACIgBARQgOgCgLgBQgBAEgCAFQAEgBAEAAQAHAAAGAEQAGADAAAHQAAAFgFAHQAAACABACQAFgBAEgBIACAQQgFACgFAAQgCANgKAHIgNgJQAFgDADgFQgIAAgHABIgCgNQAAABgBABQgCAHgEAIQAEgBAFgCIADAQQgQAFgPAAIgFAAQgPAAgKgFQgLgGAAgNQAAgBAAgBABqAbQgCADgCAEQAIADAGACIgFAOQgHgCgHgDQgBAEAAADIgPgFQAFgQAFgMQgBgBgDgBQgCgDgCgFQAAADgCACQgDAHgGAAIgBAAIAFABQgCAEgBADQAFACAFACIgDAOQgHgCgEgCQgCAFgBAEIgNgEQAEgQAEgNQgDAAgBgCQgCgDgCgDAA1APQADAFAAAHQAAAJgGARIgQgBQAEgMACgGIgGAFQgDgFgEgHIAFgFQgCAAgDAAQgGACAAAAQgKAAgCgJAgEAPQABAZAAAKIgPACQgBgWgBgPAgrAiQADADADAEIgLAKQgGgIgHgFIAFgEQgCABgCAAQgCAAgDgBQgEAKgDAKIgPgGQACgHADgHAhYAiIABAEQgJAFgMACIgDgLAiBAiQgBABgCACQgFAEgQABQgKABgRAAIgIAAQgUAAgKgCQgOgDAAgLQAAgFAFgLIAFACQAUgDATgBAi3AIQgYAAgYACIgBgKQAUAAAVAAQAAgBAAgBQgQAAgPACIgBgKQAPgCAQAAQgBgCAAgBQgRAAgSgCIABgKQARABAQABQAAgBAAgCQgUgBgVAAIABgKQAEAAADABIgBgJQAQgCAQAAQAAgCAAgBIATgCQAAACAAACQARAAAKAEQADABACABAhrgsIABgCQACABAFABAhOgsQABgCABgDIAHACQAEgCAFAAQAJAAACACQACABACACAgXgmQgBgFgBgFIAQgBQABADAAAIAAKgmIABgNQAWAAAWACIgBAJQARgJAQgHIAEAHQAOADALAEIgCAHAEMAFQgCAXgBAYIgOgBQAAgtAFgmIANABQABAAABAAQgBgLgBgKIARgCQAAADAAACQAPgBAPAAIABAMQgQAAgOACQABABAAABQAGAAAHAAQAIAAAGADQAFACAAAHIAAABQAAABAAABQABAAADAAQgBgQgBgSIASABQAAASABANQAJgBAJgCIACARQgKABgIABQAAADAAACQABACABADQADgDACgCIAMAKQgGAHgFAHQABADABACQADAFAHAFIgIARQgKgGgGgLQgEAFgEAEIgMgKQAGgJAGgHQgDgLgCgMQAAgBAAgCQgEABgDAAIgBgJQgCADAAACIgBAAAEvAGQAIAAAIABIgBALQgHgBgIAAAEvASQAHABAEACQAFACgBAFIABABQAAAGgEACQgBABgCAAQgBACgBACQAFAAAFAAIABAKQgaAAgaADIAAgKQADAAAEgBQgBgDgBgDQgBAAgBgBQgDgCAAgFQAAgGAEgHIAFACIABAAAEXAQQgFAAgFAAIABgLACygGQADAAABAAQAIAAAEAEQAFADAAAGQAAAEAAADQAHAAAIgBQgDgEgFgCIAJgIQABAAABAAQAAgBAAgBQAAgBgFAAQgGABgFADIgFgPQADAAACgCIgKgCQAAgBAAgCQgEAAgEABQgCAHgDAIgACVAbQABAFAEADQAEACALAAQAIAAAKgCIgLgFQAEgIABgHQACgDAAgCQAAgCgEAAQgDAAgEACIAAABACoAbQAAACgBABIgJgDAA1geIAEAGQAEgBAFgDIgCALQAOACAPABABdgdQgLgBgLAAQAHgEAHgCQADABAFABAiCA2QgxACgyAAIgBgKQAwgBAzgCgAjUAXQAHAAAIAAQgBgCAAgBQgHABgHABgAkqgPIgCgFQAHgEAHAAQADgOADgNIARAEQgCALgDAMQAFAAAEAEQAIAFAAAOIAAACQAAAJgCANQgCALgCAHIgRgEQADgMACgMQAAgKAAgDQAAgEgCgBQgGAbgFAeIgRgEQACgOADgOAkxAUQAAABgBAAQgGABgJABQAAABAAABQAJgBAJAAIACANQgLAAgKAAQAAACAAACQAJgBAJgCIAEAMQgXAFgdACIgEgMQAJgCAIAAQAAgCAAgDQgIABgHABIgCgNQAIgBAJgBQAAgBAAgBQgLgBgEgEQgHgGAAgIQAAgLAGgMIAGACQAGgCAHAAQAAgBAAgBQgNABgMABIgBgMQANgCAOgBQAAgBAAgBQgIABgIABIgFgMQAagFAXgDIAEAMQgHABgHACQAAABgBADQALgBAKAAIACAOQgNAAgLAAQAAACAAABQACAAADAAQAIABAFADAjOAgQADAAAGABQAAgBAAgCQgHAAgGAAQABABADABgAA1gUIABgGIgBAAABCAKQAAABACAAIACAAQAAAAABgBAAgArQgCADgHAAQgCAAgDgCQgCgBgBAAQgCAAgEAEIgGgMQAFgGAHAAQABAAACABQADACAAAAQAFAAAAgCg");
	this.shape_1.setTransform(27.9,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEnAuIAAgcIAAgDIAAgLIgKAAIgCAAIgGAAIAAgeIA1AAIAAASIAAAMIgLAAIAAABIAAALIAAABIAAAJIAAADIAAARgAgaAhIgoAAIgFAAIgYAAIgSAAIg2AAIAAgZIAAgBIAAg0IAmAAIAmAAIAIAAIAVAAIAhAAIATAAIAAAGIADAAIANAAIAUAAIArAAIAAAIIAAAEIAAAGIAAAHIAoAAIAAgBIAAgOIAAgGIAAgBIAVAAIAWAAIAlAAIAAAtIAAABIAAAQIgFAAIgKAAIgJAAIgTAAIgZAAIgMAAIAAgRIgXAAIgDAAIgOAAIAAAEIAAABIgsAAIgPAAIgOAAIgBAAIgFAAIAAARIAAACgAkWATIgLAAIgoAAIAAgjIAsAAIADAAIAQAAIAAAjg");
	this.shape_2.setTransform(26.3,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC00").s().p("AljAtIAQgDIAAgEIgPACIgBgNIAQgCIAAgDQgKAAgFgEQgGgGgBgJQAAgLAHgLIAGACIAMgDIAAgBIgZACIgBgMIAbgDIAAgDIgQADIgEgMIAwgJIAFANIgPACIgBAEIAVAAIACAOIgXAAIgBACIAFABQAIABAFADIgsAAIAAAjIAoAAIgBABQgGABgJAAIAAACIATgBIABAOIgUAAIgBADIASgCIAEALQgXAFgdADgAjmAuIBkgDIAAALQgwACgyAAgAFSAnIgHAJIgMgKIAMgQQgDgMgCgMIAAgCIgHABIgBgJIgCAFIgCAAIAAgSIg1AAIAAAeIAGAAQgCAXAAAYIgPgCQABgsAFgmIANABIACAAIgCgVIAQgCIABAFIAegBIABAMQgQAAgOABIAAADIAOAAQAIAAAFADQAGACAAAHIAAABIgBABIAFAAIgCghIARABIABAfIASgCIADAQIgSACIAAAFIACAFIAFgFIAMAKIgMAOIADAFQADAFAHAFIgIARQgKgGgHgLgABSAyIAJgcIgEgCQgDgDgBgFQAAADgBACQgEAGgGAAIgBAAIAFACIgDAHIAKAEIgEANIgKgDIgCAJIgOgFIAIgcQgDAAgBgCQgCgDgCgDIAAgEIAOAAIABABIABAAIABgBIAXAAIAAARIAMAAIgCAGIAMAGIgDAOIgPgFIgCAHgAEMAtIAHgBIgBgGIgCgBQgEgCAAgFQAAgHAFgGIAFACIABAAIAAAcIAYAAIAAgRQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIAAgJQAHABADACQAGACgBAFIABABQAAAGgFACIgCABIgCAEIAJgBIABAKQgZAAgaAEgAhXAwIAFgPIAoAAIAFAHIgLAKQgFgGgHgFIAEgFIgDAAIgGAAIgHAUgACmA1QgPAAgKgFQgLgGAAgNIAAgCIATAAQAAAEAFADQAEADALAAQAJAAAJgCIgLgFIAGgPIABgFQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgGADIAAgtIglAAIACgGQALABAIAEIAJgBIgEgJIAQgHIAGAOIAJAAIABAGIAHgUIAQAEIgDAGIAWACIgBARIgZgEIgCAKIAHgBQAHAAAGAEQAGADAAAHQAAAFgFAHIABAEIAJgCIABAQIgKACQgBANgKAHIgNgJQAFgEACgEIgOABIgCgNIgBACIgGAOIAJgCIADAQQgRAFgOAAgADCgDQAFADAAAHIAAAHIAOgBQgCgEgFgCIAJgJIACABIABgCQgBgBgFAAQgFABgGADIgFgPIAGgCIgLgCIABgDIgJABIgFAPIAFAAQAGAAAFADgAAiA0IAGgTIgGAGIgHgMIAFgFIgEAAIgHABQgJAAgDgIIAsAAQADAFAAAHQAAAJgHARgAApAeIAAgCQgBgGgFAAIAGAIgAkrAwIAFgcIAMAAIAAgjIgQAAIgCgFQAIgEAHAAIAFgbIARAEIgEAXQAEABAEACQAIAGAAANIAAADIgCAVIgDASIgSgDQAEgMABgMIAAgOQAAgDgCgBIgLA5gAgUAPIAQAAIABAiIgPACIgCgkgAAEAjQAEgGAGAAIAEABIAEABQAEAAAAgBIAGAMQgCAEgHAAQgCAAgCgCIgEgBQgCAAgEAEgAhvAhIAYAAIABAFQgKAFgMACgAi8ArQgUAAgKgDQgNgCAAgLQAAgFAEgLIAGACQATgDATgBIAAAYIA2AAIgCAEQgGAEgQABIgbABgAjOAfIAJABIAAgCIgNAAIAEABgAjTAWIgBAAIAPAAIgBgCIgNACgAgaAPIAFAAIAAAQIgFAAgACeAbIAKAAIgBADgAEvAQIAAgLIAQABIgBAMIgPgCgAENAPIAAgKIAKAAIAAAKIgKAAgAjnAAQATAAAVgBIAAgBQgQAAgPABIgBgKIAfgBIAAgDIgkgCIABgKIAiACIAAgDIgqgBIABgKIAHABIgBgJQAQgCARAAIAAgDIASgCIAAAEQARAAAKADIAFADIgmAAIAAAzQgYABgXACgAjVgmIATAAIAAgCIgTACgABAgRIACgLIgJAFIgEgIIAAgHIgrAAIABgNQAWAAAWACIgBAJQARgKAQgGIAEAHIAYAHIgBAHIgVAAIAAABIgIgDIgOAGIAWACIAAAPIgdgDgAA1gaIABAAIgBAFgAFVgmIAJgKQAHAFAGAIIgKAKIgMgNgAgXgmIgBgKIAPgBIABALgAhOgsIACgFIAIACIAIgCQAJAAADABIADAEgAhrgsIABgCIAHACg");
	this.shape_3.setTransform(27.9,28.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,22.7,72.7,11.5);


(lib.玻璃 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAgIAjgzIAEACIAHAGIgdArgAgwAgIAtg/IAMAAIAVAHIglA4g");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFE4FF").s().p("AhPAhQADgbAVgRQAVgUAcgBIAGAAIAYACIAbAOIAFAFQAWARACAbgAADAgIAQAAIAdgrIgGgGIgEgCgAgwAgIApAAIAlg3IgVgIIgNAAg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#76C8F8").s().p("AhSAmQABgfAWgUQAWgWAfgBIAGgBIAZADIARAIIARANQAWAUACAfgAgGggQgdACgUAUQgWARgCAbICfAAQgCgbgXgRIgEgGIgbgNIgYgDg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-3.8,16.8,7.8);


(lib.木架棒 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA2600").ss(1,1,1).p("AgVgHIARAAIAVAAIIWAAIAAAPIxNAAIACgPIH6AAgAgEgHIABAAIAUAAAgqgHIAWAAIgBAA");
	this.shape.setTransform(-55.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D57500").s().p("AomAIIACgPIH6AAIAWAAIAAAAIARAAIAAAAIAUAAIIWAAIAAAPg");
	this.shape_1.setTransform(-55.1,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.2,-0.7,110.3,1.8);


(lib.對 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// 答對字
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AETCuIgHgVQALABAxABQAEgBAEgDQADgEAAgEIAAixQBLgyA7g5IkcAAIAAgWIE6AAIAAAWQhGBHhIAuIAACpQAAASgKAHQgLAHgfgBQgRAAgRgCgAAECvIgGgUIAyAAQARAAAAgRIAAjJIhWAAIAAgVIBWAAIAAhWIAUAAIAABWIAlAAIAAAVIglAAIAADLQAAAOgHAJQgGAHgJADQgIADgaAAIgZgBgAlYCuIAAgTIjVAAIAAATIgWAAIAAhsIEAAAIAABsgAotCHIDVAAIAAgxIjVAAgAjgCSQApgDAygFIAAg1IhOAAIAAgVIBOAAIAAgtIhWAAIAAgTIA1AAQgJgdgMgXIggAAIAAgTIA6AAIAAhkIAVAAIAABkIAjAAIAAhkIAUAAIAABkIA0AAIAAATIgfAAQgJAbgMAZIAwAAIAAATIhMAAIAAAtIBDAAIAAAVIhDAAIAAAzQAmgEAsgKIAAAVQhPAOhsAJgAiRAAIAmAAQAOgeAHgWIhOAAQALAYAIAcgAJPCZQgGgHAAgJQAAgJAGgIQAHgGAJAAQAJAAAHAGQAGAIAAAJQAAAJgGAHQgGAGgJAAQgKAAgHgGgAgVgPIARgJQAVAjAUA6IgTAKQgPgxgYgtgAJRBHIgEjYIAjAAIgEDYgAloALIAAARIi1AAIAAgSQgiAQgoALIgNgSQBtgbBEhEIAVAJQgDAGgDABQBBA6BjAVIgPASQgngKgigQgAoaAJICtAAQgtgTgqgjQgkAhgyAVgAl+hZIAUgJQAWAWAJASIgVAJQgOgYgQgQgAochYIAUgJQALANAKAXIgUAKQgHgVgOgQgApwhRQA2gnAXg2IAUAHQgGAPgMATIBbAAIAAAUIhqAAQgWAbgbAUgAnBhfQAlghASgwIAUAIQgGAQgLAUIBtAAIAAATIh6AAQgQAUgNALgAhDhhQAWgkAHgaIATAIQgNAlgTAcgAjciUIARgJQAQAdAKAhIgSAIQgJgggQgdg");
	this.shape.setTransform(-17.1,112.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(15));

	// 必勝
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(5,1,1).p("AJ/mlIg1DIIGRAFIihDfIDYCgIivBQIBpDdIlfhMIAAB4AJrIFIjqh3AF/GLIiyDBIjfigIgyBGIhChQIi+CbIgKiNIkPBvIBbi0IkZBBIBkibIlahHIE8jVIiCiCIDDAAIipk5IFsCTIAui4IDcCVIAtiGICCB8IFJjqIAZD0IE1hPAF/GLIACgD");
	this.shape_1.setTransform(-17.7,105.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(3,1,1).p("AAAACIAAgD");
	this.shape_2.setTransform(46.3,63.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgSGrIgyBGIhChQIi+CcIgKiNIkPBuIBbi0IkZBBIBkibIlahGIE8jWIiCiBIDDAAIipk5IFsCUIAui6IDcCXIAtiHICCB9IFJjrIAZD1IE1hQIg1DHIGRAGIihDfIDYCgIivBQIBpDdIlfhMIAAB4IgCAEIjqh3IgCgCIACgDIgCADIiyDAg");
	this.shape_3.setTransform(-17.7,105.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(5,1,1).p("AI2l1IgvCxIFjAEIiODGIC/COIibBHIBdDDIk3hDIAABrAIkHJIjPhpAFTFeIieCrIjFiOIgtA9Ig6hGIioCJIgJh8IjwBhIBQifIj5A6IBZiKIkyg+IEYi9Ih0hzICtAAIiWkVIFDCCIAoikIDECFIAoh3IBzBvIEjjRIAWDZIEShGAFTFeIACgD");
	this.shape_4.setTransform(-17.6,105.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AgQF7IgtA+Ig6hHIioCJIgJh8IjwBhIBQifIj5A6IBZiKIkyg+IEYi9Ih0hzICtAAIiWkVIFDCDIAoilIDECFIAoh3IBzBvIEjjRIAWDZIEShGIgvCxIFjAEIiODGIC/COIibBHIBdDDIk3hCIAABqIgCAEIjPhqIgCgCIACgCIgCACIieCrg");
	this.shape_5.setTransform(-17.6,105.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(5,1,1).p("AJ/mlIg1DIIGQAFIigDfIDYChIivBPIBpDdIlfhLIAAB4AJrIFIjqh3AF/GLIiyDBIjgigIgyBGIhBhQIi+CbIgKiMIkPBuIBai0IkYBBIBkibIlahHIE8jVIiCiCIDDAAIipk4IFsCTIAui6IDcCXIAtiIICCB+IFJjsIAZD2IE1hQAF/GLIACgC");
	this.shape_6.setTransform(-17.7,105.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AgTGsIgyBGIhBhQIi+CbIgKiNIkPBvIBai0IkYBBIBkibIlahHIE8jVIiCiCIDDAAIipk4IFsCTIAui5IDcCWIAtiIICCB+IFJjsIAZD2IE1hQIg1DIIGQAFIigDfIDYChIivBPIBpDcIlfhLIAAB4IgCAFIjqh3IgCgDIACgDIgCADIiyDBg");
	this.shape_7.setTransform(-17.7,105.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:46.3,y:63.1}},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_2,p:{x:39,y:68}},{t:this.shape_4}]},4).to({state:[{t:this.shape_7},{t:this.shape_2,p:{x:46.3,y:63.1}},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_2,p:{x:39,y:68}},{t:this.shape_4}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,46.9,208.5,117.6);


(lib.煙火7 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAdIAAgXIgJAJIgDgDIAJgKIgYAAIAAgDIAYAAIgJgKIADgDIAJAJIAAgXIADAAIAAAYIAKgKIADADIgJAKIAXAAIAAADIgXAAIAJAKIgDADIgKgKIAAAYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.感應答題框 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AC+iqIAAFVIl7AAIAAlVg");
	this.shape.setTransform(36.4,0,2.92,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ai9CrIAAlVIF6AAIAAFVg");
	this.shape_1.setTransform(36.4,0,2.92,1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-17.1,111,34.3);


(lib.雲元件3 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmoHjQhUhEAAhgQgBhMA3g7QgoALguAAQhcAAhBgvQhCgvAAhDQAAhABCgvQA1gmBIgIIAAAAQAAixB5h8QB6h9CrgBQCLABBoBRQAigLAoAAQBpgBBLBPQAsAuASA6QAdgEAfAAQB9AABZA/QBZA+AABYQAABYhZA9QhZA/h9AAIgQgBIAAASQAABghPBDQhPBFhwAAQg+AAg1gWQgMBMhDA4QhUBDh3AAQh3AAhThDg");
	this.shape.setTransform(76.4,55.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152.9,110.2);


(lib.雲元件2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBEDQgsgegLgoQgbADgdAAIgBABQhDAqhfABQhfgBhDgqQhDgqAAg8QgBgdAQgYQgQgRABgVQAAgeAggWQARgLAVgGQAFgWAagQQAhgVAuABIAIAAIgBgQQAAg0AzgkQAzgkBIAAQA4AAAsAWIADgCQBLg0BpAAQBqAABMA0QBKAzABBIQBUAKBBAlQBXAyAABFQAABHhXAzQhYAyh8AAIgHAAQgPAZgdAUQg8AphTAAQhSAAg7gpg");
	this.shape.setTransform(57,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,60.1);


(lib.雲元件1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASDPQghgHgRgdIgEgJQgrAVgsgFQgxgHgVgkQgPgbAFgeQg7gLgcgwQgcguAVg6QAVg5A5giQA6ghA8ALQAjAGAYASQBCgnBEAGQBEAGAcAwQAUAjgJAqQASgGASgBQA0gGAPAaQAOAageAoQgeApg6AiQgiATgfAKQACARgGASQgLAighATQgYAOgYAAQgKAAgJgCg");
	this.shape.setTransform(30.7,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.4,41.9);


(lib.登錄證 = function() {
	this.initialize();

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AEeCiIm1nXIgCBIIhshSIAXBWIhJgQIAoBIIg/gQICYCZIFCFbIgDgxIBdA+IgThAIBHAhIgIhIIA9AGg");
	this.shape.setTransform(57.6,236.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.424)").s().p("ACJECIADAxIlClbIiYiZIA/AQIgohIIBJAQIgXhWIBsBSIAChIIG1HXIAxA9Ig9gGIAIBIIhHghIATBAg");
	this.shape_1.setTransform(57.6,236.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1).p("AEGk/IgXBWIBJgQIgoBIIA/gQIiYCZIlCFbIADgxIhdA+IAThAIhHAhIAIhIIg9AGIAxg9IG1nXIACBIg");
	this.shape_2.setTransform(434.9,236.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.424)").s().p("AjSEAIhHAhIAIhIIg9AGIAxg9IG1nXIACBIIBshSIgXBWIBJgQIgoBIIA/gQIiYCZIlCFbIADgxIhdA+g");
	this.shape_3.setTransform(434.9,236.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ajlk/IATBAIhHghIAIBIIg9gGIAxA9IG1HXIAChIIBsBSIgXhWIBJAQIgohIIA/AQIiYiZIlClbIADAxg");
	this.shape_4.setTransform(432.3,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,204,204,0.424)").s().p("ACaDuIgCBIIm1nXIgxg9IA9AGIgIhIIBHAhIgThAIBdA+IgDgxIFCFbICYCZIg/gQIAoBIIhJgQIAXBWg");
	this.shape_5.setTransform(432.3,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(1,1,1).p("AEeihIm1HXIgChIIhsBSIAXhWIhJAQIAohIIg/AQICYiZIFClbIgDAxIBdg+IgTBAIBHghIgIBIIA9gGg");
	this.shape_6.setTransform(55,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,204,204,0.424)").s().p("AjuDqIhJAQIAohIIg/AQICYiZIFClbIgDAxIBdg+IgTBAIBHghIgIBIIA9gGIgxA9Im1HXIgChIIhsBSg");
	this.shape_7.setTransform(55,40.6);

	// 圖層 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(1,1,1).p("AZvAAMgzdAAA");
	this.shape_8.setTransform(253.6,249.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Aa3RiMgzdAAAIniAAMAAAgjDMBARAAAMAAAAjDg");
	this.shape_9.setTransform(246.4,137.7);

	// 圖層 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#660000").ss(5,1,1).p("EAjZgVNMhGxAAAQhVABAABXMAAAAnrQAABXBVABMBGxAAAQBVgBAAhXMAAAgnrQAAhXhVgBg");
	this.shape_10.setTransform(245,137.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0033").s().p("EgjYAVOQhVgBAAhXMAAAgnrQAAhXBVAAMBGxAAAQBVAAAABXMAAAAnrQAABXhVABg");
	this.shape_11.setTransform(245,137.6);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,1.9,470.1,271.6);


(lib.登入 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AESBTQgFAIgMAAQgXAAAAgLQAAgOAKAAIALACQADAAACgIIAAgDIgCABQgFAAAAgFQAAgOgDgTIgBgCQAAgEAHAAQAFAAABAYIABgRQAAgJgHAAIglAAQgMAAAAgMIAAhPQAAgLALABIA+AAQAHAAAAAKQAAAKgHAAIgRAAIAAAGIALAAQAHAAAAAKQAAAKgHAAIgLAAIAAAGIANAAQABgFACgCQATgNASgcQAFgIAKAAQAIAAAFAHQAOAUAcAUQAFADAAAEQAAAFgDAEQgDAFgFAAIgFgBIAAAAQgKgGgIgHIgBADQgBAFgGAAIgmAAQgGAAgBgFQgNALgFAAQgEAAgBgCQAAAKgIAAIgKAAIAAAKIAEAAQARAAAAAUIAAALQgDAvgEADQASgOAGgaIgCAAQgNAAAAgPIAAgfQAAgOANABIAUAAQAOgBAAAOIAAAfQAAAPgMAAIAAACIAAAAIAAABIgBADQAPAOAAAHQAAAFgFADQgDADgFAAQgEAAgEgHIgBgDQgOAhgMgBQgLABgCgMgAEygEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgADmgJQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAIAKAAIAAgKIgMAAgADmglIAMAAIAAgGIgMAAgAFJhDIgLAPIAaAAIgJgLIgFgFIgBABgADmhCIAAADIAMAAIAAgGIgJAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABgAmGBVIAAifQAAgQASAAIAvAAQARAAAAAQIAAApQAAARgRAAIgqAAIAABlQAAAJgLAAQgMAAAAgJgAlvgmIAhAAQAFAAAAgEIAAgCIgmAAgAlvhBIAAACIAmAAIAAgCQAAgDgFgBIgdAAQgEABAAADgAA2BeQgFAAgEgEQgEgEAAgFQAAgEAEgEQALgKAHgLQAFgFAEgBQAFAAAEADQAFAEAAAFQAAAFgNAQQgMAPgGAAIgBAAgAFwBUIgEgGIgFgLQgOAbgJAAQgEAAgEgEQgEgDAAgFQAAgDADgDQAQgTAGgXQgNgCAAgNIAAgfQAAgOANAAIAVAAQANAAAAAOIAAAfQAAAPgNAAIAAABIgBADIAAABIAAADQAAAHAJANIALAOQACAEAAACQAAAFgEADQgDAEgFAAQgGAAgFgKgAFkgEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgABvBYQgHgQgHgLIgBgEQAAgDAEgFQAEgDAFAAQAEAAADAEIABACQAQAXAAAIQAAALgOAAQgGAAgCgGgAjABZQgEgFAAgFQAAgEAEgEQAPgMAMgPIgPgPQgKgIAAgGQAAgFACgEQAJgUAGgYIgLAAQgKAAAAgMQAAgMAKAAIAOAAIACgMQABgOAEgBQACgDAFAAQAOAAAAAJIgBACIgCATIAPAAQAMAAAAAMIgCATIAAAEIADgBIABAAQAPgdAIgdQACgHAIAAQAPAAAAALQAAANgTAnIAGgBIANgBIAVgDIgHgMQgGgLAAgDQAAgLAOAAQAGAAAHALQAGAJAKAUQAJATABAGQAAAJgOAAQgIABgDgHIgFgKIglAGIgCAAIgoAEQgEAAgCgBQgDAVgKAWQALALAGAIIAAgjQAAgUATAAIA9AAQATAAAAAUIAAAwQAAAUgTAAIg9AAQgTAAAAgSIAAgCQgFAHgIAAQgEAAgCgDIgLgNQgHAKgLALQgMALgFAAQgEAAgFgEgAheAeIAAAgQAAADAEAAIArAAQAEAAAAgDIAAggQAAgDgEAAIgrAAQgEAAAAADgAigAAIgEALQAAACAFADIAFAEQAKgXADghQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgGAAQgEAVgHASgAkKBPQAAgOAKAAIAEABIANADQAEgBAAgFIAAhPIgsAAQgRAAAAgRIAAgpQAAgQARAAIAyAAQARAAAAAQIAACMQAAAagWAAQggABAAgOgAkTgqQAAAEAEAAIAkAAIAAgGIgoAAgAkThBIAAACIAoAAIAAgCQAAgDgEgBIggAAQgEABAAADgAAHBYQgFgEAAgEQAAgDAFgKQAKgTAKghQADgHAHAAQAOAAAAAKQAAAFgHAWIgNAiQgGAMgIAAQgFAAgFgDgACIBOQAAgPAKAAIADABIAKACQAGAAAAgXIAAiBQAAgHALgBQALABAAAHIAACCQAAAegFAIQgEAIgOAAQgcAAAAgMgAlfBTQgFgDAAgFQAAgDADgDQAMgOACgLIgRAAQgJgBAAgKQAAgLAJAAIATAAIAAgNIgPAAQgKAAAAgJQAAgKAKAAIBnAAQAJAAAAAKQAAAJgJAAIgSAAIAAANIAWAAQAJAAAAALQAAAKgJABIgWAAIAAAeQAAAKgLAAQgLAAAAgKIAAgeIgbAAQgDAPgIAOQgIAPgHAAQgFAAgEgFgAk7AWIAaAAIAAgNIgaAAgADKBLIABgIQADgaAAgRQAAgIAIABQAHgBAAAIIAAALIgBAbIgBATQAAAFgHABQgKAAAAgMgADfBCIAAgBIAAgSIAAgFIgBgUQAAgGAHAAIAAAAQAGAAABAFIABATIAAABIAAAUQAAALgIAAQgGAAAAgGgADvA6QAAgXgCgNIgBgCQAAgFAIAAQAEAAACAPIABAbQAAAHgHAAQgFAAAAgGgACJAsIAAh3QAAgJALAAQALAAAAAJIAAB3QAAAJgLAAQgLAAAAgJgABGAtQgHgBgEgEQgFgEAAgHIAAhSQgDAKgLAAQgDgBgCgCIgNgPIgDgCIgJgKQgDgDAAgEQAAgEAEgEQAEgEAEAAQAFAAAOAOQAPAPABAEIAAgPQAAgOAOAAIAtAAQARABAAAPIAABkQAAAIgFAEQgFAFgDAAgABNAPQAAAHAJAAIAPAAQAGAAAAgHIAAgMIgeAAgABNgQIAeAAIAAgPIgeAAgABNg9IAAAJIAeAAIAAgJQAAgFgEgBIgXAAQgDABAAAFgAAegDIgUgQQgGgFAAgEQAAgFADgEQAEgEAEAAQAEAAARANQARANAAAFQAAAEgFAFQgEACgEAAQgDAAgHgEg");
	this.shape.setTransform(8.7,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AESBTQgFAIgMAAQgXAAAAgLQAAgOAKAAIALACQADAAACgIIAAgDIgCABQgFAAAAgFQAAgOgDgTIgBgCQAAgEAHAAQAFAAABAYIABgRQAAgJgHAAIglAAQgMAAAAgMIAAhPQAAgLALABIA+AAQAHAAAAAKQAAAKgHAAIgRAAIAAAGIALAAQAHAAAAAKQAAAKgHAAIgLAAIAAAGIANAAQABgFACgCQATgNASgcQAFgIAKAAQAIAAAFAHQAOAUAcAUQAFADAAAEQAAAFgDAEQgDAFgFAAIgFgBIAAAAQgKgGgIgHIgBADQgBAFgGAAIgmAAQgGAAgBgFQgNALgFAAQgEAAgBgCQAAAKgIAAIgKAAIAAAKIAEAAQARAAAAAUIAAALQgDAvgEADQASgOAGgaIgCAAQgNAAAAgPIAAgfQAAgOANABIAUAAQAOgBAAAOIAAAfQAAAPgMAAIAAACIAAAAIAAABIgBADQAPAOAAAHQAAAFgFADQgDADgFAAQgEAAgEgHIgBgDQgOAhgMgBQgLABgCgMgAEygEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgADmgJQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAIAKAAIAAgKIgMAAgADmglIAMAAIAAgGIgMAAgAFJhDIgLAPIAaAAIgJgLIgFgFIgBABgADmhCIAAADIAMAAIAAgGIgJAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABgAmGBVIAAifQAAgQASAAIAvAAQARAAAAAQIAAApQAAARgRAAIgqAAIAABlQAAAJgLAAQgMAAAAgJgAlvgmIAhAAQAFAAAAgEIAAgCIgmAAgAlvhBIAAACIAmAAIAAgCQAAgDgFgBIgdAAQgEABAAADgAA2BeQgFAAgEgEQgEgEAAgFQAAgEAEgEQALgKAHgLQAFgFAEgBQAFAAAEADQAFAEAAAFQAAAFgNAQQgMAPgGAAIgBAAgAFwBUIgEgGIgFgLQgOAbgJAAQgEAAgEgEQgEgDAAgFQAAgDADgDQAQgTAGgXQgNgCAAgNIAAgfQAAgOANAAIAVAAQANAAAAAOIAAAfQAAAPgNAAIAAABIgBADIAAABIAAADQAAAHAJANIALAOQACAEAAACQAAAFgEADQgDAEgFAAQgGAAgFgKgAFkgEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgABvBYQgHgQgHgLIgBgEQAAgDAEgFQAEgDAFAAQAEAAADAEIABACQAQAXAAAIQAAALgOAAQgGAAgCgGgAjABZQgEgFAAgFQAAgEAEgEQAPgMAMgPIgPgPQgKgIAAgGQAAgFACgEQAJgUAGgYIgLAAQgKAAAAgMQAAgMAKAAIAOAAIACgMQABgOAEgBQACgDAFAAQAOAAAAAJIgBACIgCATIAPAAQAMAAAAAMIgCATIAAAEIADgBIABAAQAPgdAIgdQACgHAIAAQAPAAAAALQAAANgTAnIAGgBIANgBIAVgDIgHgMQgGgLAAgDQAAgLAOAAQAGAAAHALQAGAJAKAUQAJATABAGQAAAJgOAAQgIABgDgHIgFgKIglAGIgCAAIgoAEQgEAAgCgBQgDAVgKAWQALALAGAIIAAgjQAAgUATAAIA9AAQATAAAAAUIAAAwQAAAUgTAAIg9AAQgTAAAAgSIAAgCQgFAHgIAAQgEAAgCgDIgLgNQgHAKgLALQgMALgFAAQgEAAgFgEgAheAeIAAAgQAAADAEAAIArAAQAEAAAAgDIAAggQAAgDgEAAIgrAAQgEAAAAADgAigAAIgEALQAAACAFADIAFAEQAKgXADghQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgGAAQgEAVgHASgAkKBPQAAgOAKAAIAEABIANADQAEgBAAgFIAAhPIgsAAQgRAAAAgRIAAgpQAAgQARAAIAyAAQARAAAAAQIAACMQAAAagWAAQggABAAgOgAkTgqQAAAEAEAAIAkAAIAAgGIgoAAgAkThBIAAACIAoAAIAAgCQAAgDgEgBIggAAQgEABAAADgAAHBYQgFgEAAgEQAAgDAFgKQAKgTAKghQADgHAHAAQAOAAAAAKQAAAFgHAWIgNAiQgGAMgIAAQgFAAgFgDgACIBOQAAgPAKAAIADABIAKACQAGAAAAgXIAAiBQAAgHALgBQALABAAAHIAACCQAAAegFAIQgEAIgOAAQgcAAAAgMgAlfBTQgFgDAAgFQAAgDADgDQAMgOACgLIgRAAQgJgBAAgKQAAgLAJAAIATAAIAAgNIgPAAQgKAAAAgJQAAgKAKAAIBnAAQAJAAAAAKQAAAJgJAAIgSAAIAAANIAWAAQAJAAAAALQAAAKgJABIgWAAIAAAeQAAAKgLAAQgLAAAAgKIAAgeIgbAAQgDAPgIAOQgIAPgHAAQgFAAgEgFgAk7AWIAaAAIAAgNIgaAAgADKBLIABgIQADgaAAgRQAAgIAIABQAHgBAAAIIAAALIgBAbIgBATQAAAFgHABQgKAAAAgMgADfBCIAAgBIAAgSIAAgFIgBgUQAAgGAHAAIAAAAQAGAAABAFIABATIAAABIAAAUQAAALgIAAQgGAAAAgGgADvA6QAAgXgCgNIgBgCQAAgFAIAAQAEAAACAPIABAbQAAAHgHAAQgFAAAAgGgACJAsIAAh3QAAgJALAAQALAAAAAJIAAB3QAAAJgLAAQgLAAAAgJgABGAtQgHgBgEgEQgFgEAAgHIAAhSQgDAKgLAAQgDgBgCgCIgNgPIgDgCIgJgKQgDgDAAgEQAAgEAEgEQAEgEAEAAQAFAAAOAOQAPAPABAEIAAgPQAAgOAOAAIAtAAQARABAAAPIAABkQAAAIgFAEQgFAFgDAAgABNAPQAAAHAJAAIAPAAQAGAAAAgHIAAgMIgeAAgABNgQIAeAAIAAgPIgeAAgABNg9IAAAJIAeAAIAAgJQAAgFgEgBIgXAAQgDABAAAFgAAegDIgUgQQgGgFAAgEQAAgFADgEQAEgEAEAAQAEAAARANQARANAAAFQAAAEgFAFQgEACgEAAQgDAAgHgEg");
	this.shape_1.setTransform(8.7,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009999").ss(2,1,1).p("AJCinIyDAAQhUAAAABHIAADAQAABIBUAAISDAAQBUAAAAhIIAAjAQAAhHhUAAg");
	this.shape_2.setTransform(9.6,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99FFFF","#FFFFFF","#33CCFF","#006699"],[0,0.267,0.706,1],0,-18.7,0,18.7).s().p("ApBCoQhUAAAAhIIAAjAQAAhHBUAAISDAAQBUAAAABHIAADAQAABIhUAAg");
	this.shape_3.setTransform(9.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-17.9,132.6,33.7);


(lib.彩球 = function() {
	this.initialize();

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAABJQgKgBgCgFQgBgBAAgOQAAgVANgQQAOgPAAgOQAAgQgSgq");
	this.shape.setTransform(26.8,-6.7);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(1,1,1,0)","rgba(0,0,0,0.702)"],[0,1],-5.4,-0.4,0,-5.4,-0.4,34.5).s().p("AizCzQhLhKAAhpQAAhoBLhLQBLhLBoAAQBpAABKBLQBMBLAABoQAABphMBKQhKBMhpAAQhoAAhLhMg");
	this.shape_1.setTransform(25.5,25.5);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhbDmIgDgqIgqgFIAogVIgGhEIAyAtIAhgSIgRAgIA1AyIhLgKIgWApIgLgEgACWCFIg/hVIBXAgIAcg/IAJBMIAdALQgSAnghAgQgmAmgtATgAh+gZIh0BLIA0h4IglgaQAFgOAHgNIAwAAIAohfQANgIANgHIApBuIBOAAIg/ArIA2CWgACBhWIgqgGIAogVIgFhEIAxAtIAhgSIgRAgIA4AzIhOgLIgfA6g");
	this.shape_2.setTransform(24.5,25.9);

	// 圖層 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00CC").s().p("AizCzQhLhKAAhpQAAhoBLhLQBLhLBoAAQBpAABKBLQBMBLAABoQAABphMBKQhKBMhpAAQhoAAhLhMg");
	this.shape_3.setTransform(25.5,25.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-14,51,65.1);


(lib.啋璃105 = function() {
	this.initialize();

	// 芞脯 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAXIAAgtIAtAAIAAAtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.3,4.7,4.7);


(lib.粉紅桌複製3 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B89D61").s().p("AM8FQIAAicQAAhAg8AAI3zAAQg8AAgBBAIAACcIi8AAIAAqfIfZAAIAAKfgAs8j9IAAC6QAABAA+gBIX4AAQA8ABABhAIAAi6QgBhAg8AAI34AAQg+AAAABAg");
	this.shape.setTransform(115.4,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E763E").s().p("AviCVIAAgCIhjAAQgyAAAAgyIAAjDQAAgyAyAAMAiLAAAQAyAAAAAyIAADDQAAAhgVALQgMAGgRAAIhPAAIAAACg");
	this.shape_1.setTransform(114.4,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,228.9,97.1);


(lib.粉紅桌 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2E67B").s().p("Ar7CcQg+AAAAhAIAAi3QAAhAA+AAIX4AAQA9AAAABAIAAC3QAABAg9AAg");
	this.shape.setTransform(115.1,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CDAA56","#63461D"],[0,1],1.9,-0.7,2,-39.4).s().p("AM8FQIAAicQAAhAg8AAI3zAAQg8AAgBBAIAACcIi8AAIAAqfIfZAAIAAKfgAs8j9IAAC6QAABAA+gBIX4AAQA8ABABhAIAAi6QgBhAg8AAI34AAQg+AAAABAg");
	this.shape_1.setTransform(115.4,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDAA56").s().p("AviCVIAAgCIhjAAQgyAAAAgyIAAjDQAAgyAyAAMAiLAAAQAyAAAAAyIAADDQAAAhgVALQgMAGgRAAIhPAAIAAACg");
	this.shape_2.setTransform(114.4,15);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,228.9,97.1);


(lib.重播鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.text = new cjs.Text("重 播", "23px DFLiYuan-Bd", "#003366");
	this.text.lineHeight = 25;
	this.text.setTransform(-39.3,-14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("Ag2hvIBtBvIhtBvg");
	this.shape.setTransform(36,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ag2hvIBtBvIhtBvg");
	this.shape_1.setTransform(36,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#003366"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#CC0000"}}]},1).to({state:[]},1).wait(2));

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009999").ss(2,1,1).p("AHuinIvbAAQhIAAAABHIAADAQAABIBIAAIPbAAQBIAAAAhIIAAjAQAAhHhIAAg");
	this.shape_2.setTransform(0,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99FFFF","#FFFFFF","#33CCFF","#006699"],[0,0.267,0.706,1],0,-18.7,0,18.7).s().p("AntCoQhIAAAAhIIAAjAQAAhHBIAAIPbAAQBIAAAABHIAADAQAABIhIAAg");
	this.shape_3.setTransform(0,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ao/C1IAAlqIR/AAIAAFqg");
	this.shape_4.setTransform(0,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-17.9,113.2,33.7);


(lib.重考 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.text = new cjs.Text("重 考", "27px DFZongYiW5-B5", "#003366");
	this.text.lineHeight = 29;
	this.text.setTransform(-34.8,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#003366"}}]}).to({state:[{t:this.text,p:{color:"#CC0000"}}]},1).to({state:[]},2).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(2,1,1).p("AHuinIvbAAQhIAAAABHIAADAQAABIBIAAIPbAAQBIAAAAhIIAAjAQAAhHhIAAg");
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99FFFF","#FFFFFF","#33CCFF","#006699"],[0,0.267,0.706,1],0,-18.7,0,18.7).s().p("AntCoQhIAAAAhIIAAjAQAAhHBIAAIPbAAQBIAAAABHIAADAQAABIhIAAg");
	this.shape_1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-17.9,113.2,33.7);


(lib.紅暈 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B090").s().p("AgDAqQglgGgYgPQgZgSADgOQADgUAcgGQAagJAkAFQAkAFAXAMQAXAQgCASQgDAQgcAKQgSAIgUAAQgLAAgKgCg");
	this.shape.setTransform(8.8,4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,8.9);


(lib.男2開頭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1,3,true).p("ABegNQhiAzhZgo");
	this.shape.setTransform(13.2,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AgoASQgBgEACgFQAKgmAgAJQAgAIAGAPQgxgIggAbg");
	this.shape_1.setTransform(13.3,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqANIgCgCIgcgIQgMgCgXAIIgZAGIgIABQgGgBgBgEIAAgCQAIAEAWgNQAXgRAPACQAKAAAOAHQAOAHAKAGIALAKIgFABQgGAAgLgDg");
	this.shape_2.setTransform(31.8,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgEQgDgEAAgDQABgEAEgEQAEgDACAAIAEABIADACQAHAFgEAIQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgDADgFAAIAAAAg");
	this.shape_3.setTransform(31.7,-6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAeQgPgBgIgLQgKgJACgLQABgMALgJQALgIAMACQANABAKAKQAEAFABAFIADAHIgBADQgBAOgLAHQgKAHgLAAIgBAAg");
	this.shape_4.setTransform(30.9,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAeQgPgFgLgLQgJgNACgJQASgZAlAEQAOABAIAFQANAFAAAIQgIAUgRAMQgMAJgLAAIgJgBg");
	this.shape_5.setTransform(31.6,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhVARIAAgBQATgJAXgHQAXgHAggGQAjgIAUAJQAUAJgBADIgCABQhaAFhNAMg");
	this.shape_6.setTransform(36.9,-23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhQgRIgBgDQgBgDAWgGQAVgFAhAPQAeANAWAKIAlAZIgBABIgCABQhJgbhXgVg");
	this.shape_7.setTransform(-2.9,-26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA2AXIgGgCQgJgDgOgJQgXgKgLgCQgDAAgZADIgEAAQgRABgEgCIANgIQALgGAQgDQAOgEAIABQARADASASQATAUAJgDIAAABQgCAFgFAAIgCAAg");
	this.shape_8.setTransform(-4,-12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgEQgDgDAAgEQABgFAEgEQADgCADAAIAEABIADABQAHAGgEAIQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgDADgFAAIAAAAg");
	this.shape_9.setTransform(-3.2,-9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCAeQgOgBgJgKQgJgKACgLQABgMALgIQAKgJAMACQAOABAJAKIAGAKIADAHIgBAEQgCANgKAIQgKAGgLAAIgCAAg");
	this.shape_10.setTransform(-3.3,-10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaARQgOgPgEgVQADgIAMgCQAKgCAOABQAlAEANAbQgBALgMAJQgMAKgRABIgCAAQgPAAgMgPg");
	this.shape_11.setTransform(-3.8,-10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AFyFGQANg+gThWQgShXhOhPQgKgLgMgIIgZgSQgdgWgngLQgTgBgPAJIguARQgwASgUADQgRADgogcQgngegggRQgXgLgfAOQgvAYgjAfQghAbgRAUQgPAUgCAEQgaAngRAvQgQAvgDAxQgDAxgGAkQgHAlgRgrQgSgsgLgeIgDgIIgEgYQgMhFAAgNQgCgqAGg3QACgZACgEQAAgFAGAHQAFAGAOAGIAFgYQACgNADgFQAMg3AbgsQAXgkAEABQAIABAKAPQAJAMADAHQAAgPAJgUQAGgSANgWQAhg2ArgWIAEABIgCAGQgBANABAEQACADAEABQAFAAAQgNIAEgDQARgKAggRQAlgWADAAIAGAAIgCAOIgGAUIgCAJQAAADAGAAQAGgCAzgZQAtgbAfgtIADgFIAEgIQAIAWAeAjQAXAbAUAQQACgHAIgHQAHgJAEAEIAhAcQAbAZAgAiQAFgHAUgSQAXAiAQASQArAzABAoIAOgNIAOgPQAHAHAKAaQAFAIADANQAQAsADAQIAGAaQACAMAQAZQAfgTAEgEQgFANgIBaQgIBUgeBdQgFAIAAAIIgDAIQgcA/gKAAQgLAAAHhAg");
	this.shape_12.setTransform(18.1,-42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#655245").s().p("AGmF0QAeheAHhTQAJhbAEgMQgEADgfATQgPgZgCgLIgGgcQgDgRgRgqQgDgMgFgIQgKgagHgHIgOAPIgNANQgCgogqgzQgQgTgXghQgUASgFAGQggghgcgZIghgcQgEgEgGAJQgIAGgDAIQgTgQgXgbQgegkgJgVIgEAIIgDAEQgfAugtAaQgyAagGACQgHgBAAgCIADgJIAFgUIADgOIgGAAQgEAAgkAVQghASgRAKIgDADQgQAMgGAAQgEAAgBgDQgCgEACgNIABgHIgDgBQgrAXghA2QgNAWgGASQgJAUAAAPQgEgIgIgLQgKgQgIAAQgFgBgWAkQgbAsgMA1QgDAFgCANIgGAaQgNgJgGgFQgGgHAAAFQgBAEgDAaQgFA3ABAqQABANALBFIAFAZIgFgOIgBgCQgOgrgKgtQgJgtgDgvIAAgDQAAgOABgOIAJg5QABACALAKIANAOQAKghARglQAXgyATgYQAOgUANACQACAAAFAIQAGAHADACQANg5ArgoQAsgqApgPIgCAZIADABQANgJA+gfQBEgjAOgCIgBAHQgRAbgCAVIAbgRQAbgRATgeQAKgNANgZQAKgXAEgCQAIAFAWA8QASAiAVAWIABgPQAFgKACgZQAYAVAkAxQAdAnALAAQAIACAGgHQAEgEAIgMQAIAHAHAGQBCA6AXA1IAJAOIAIgbIABgDQAcAXAXBGIABAIQAGATALA3QABAEAFAHIAHAIQAIABAOgIQAMgHAHAAQAEAPgBANQAAAHgGA5QgHBEgNAmQgMAhgiBVIgCAFIgDAHQAAgIAFgIg");
	this.shape_13.setTransform(17.9,-49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AGNgaQAQgHADAAQAGgCAOADQAYAGAMAXQANAbgLApQgJAkgdAMQgVAKgZgFAmRAlQgcABgUgPQgagSgDgjQgBgqATgaQABgBACgBQAFgGAFgFQAdgPAbAPQADACADABQADACABABQACABAAAB");
	this.shape_14.setTransform(16.9,-12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("Al1hKQABgKABgKIAFg3QADgcAHgbQAbhHArgsQAXgYAmgRQAugTAvgKQAdgCAegCQBagFBeAQQBUAIBJArQBSAxArBVQAJAdAHAuQADAZgCAbIgGA4QgBAJgBAGQAAAFAAAEQgHBDABBGQAAAOAAANIgBAoQgSCvj+AFQgjABghAAQgkABhSgJIhKgPQgVgEgVgFQj4g4ASivIAHgmQACgPAEgNAl1hKQgBAEAAACQgHBEgPBC");
	this.shape_15.setTransform(16.3,-15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCC7A5").s().p("AGGB2QgBhGAHhBIABgJQAQgHADAAQAGgCAOADQAYAGAMAXQANAbgLApQgJAkgdAMQgOAHgRAAIgPgCgAnBAXQgagSgDgjQgBgqATgaIADgCIAKgLQAdgPAbAPIAGADIAEADIACACIAAAGQgHBEgPBCIgFAAQgZAAgSgOg");
	this.shape_16.setTransform(16.9,-12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAD8AF").s().p("Ag/GDIhKgPIgqgJQj4g4ASivIAHgmQACgPAEgNQAPhCAHhEIABgGIACgUIAFg3QADgcAHgbQAbhHArgsQAXgYAmgRQAugTAvgKIA7gEQBagFBeAQQBUAIBJArQBSAxArBVQAJAdAHAuQADAZgCAbIgGA4IgCAPIAAAJQgHBDABBGIAAAbIgBAoQgSCvj+AFIhEABIgLAAQgkAAhHgIg");
	this.shape_17.setTransform(16.3,-15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#993300").ss(1,1,1,3,true).p("ABcgUQhcA+hbgf");
	this.shape_18.setTransform(11.6,8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9966").s().p("AgnAVQgBgFABgFQAFgnAiAFQAgAEAIAQQgygDgcAfg");
	this.shape_19.setTransform(10.3,-3.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag/APIAAgBQAJADAUgRQAVgSAOgBQAKgBAPAFQAPAFAKAHIANAIQgEADgTgDIgCgCIgcgDQgLAAgXAJIgYAJIgIACQgGAAgCgFg");
	this.shape_20.setTransform(28.4,-10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgFQADgDAEABIADAAIADABQAHAEgCAJQAAACgCACQgDAEgGAAQgDAAgEgEg");
	this.shape_21.setTransform(28.5,-8.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAVQgKgIgBgNQAAgKALgKQAJgJANgBQAMAAAMAJQAEAFACAEIADAHIAAAFQAAAMgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_22.setTransform(27.7,-9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAfQgRgCgMgKQgKgMAAgJQAPgcAlAAQAOAAAJADQANAEABAIQgFAUgPAPQgOALgNAAIgDAAg");
	this.shape_23.setTransform(28.2,-8.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhTAZIAAgBIAngVQAWgJAfgLQAigMAVAHQAVAHgBADIgCAEQhYANhLAVg");
	this.shape_24.setTransform(31.6,-25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhSgFIgCgEQgBgDAVgHQAUgIAjALQAfAKAXAHIAoAUIAAABIgCABQhMgRhZgLg");
	this.shape_25.setTransform(-8.4,-24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAxASQgJgCgPgHQgZgJgLAAQgDAAgYAGIgDABQgRAEgFgDIANgIQAJgIAQgEQANgGAKAAQAPABAVARQAWAQAHgEIABACQgCAFgGAAIgCAAIgFgBg");
	this.shape_26.setTransform(-7.5,-10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgFQADgDAEAAIADAAIADABQAHAFgCAJQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgDAEgGAAQgDAAgEgEg");
	this.shape_27.setTransform(-6.6,-8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAWQgKgJAAgNQgBgLAKgJQAJgKAOAAQAMAAALAJIAHAJQACADABAEIAAAFQAAAMgKAJQgKAJgNABIAAAAQgNAAgJgJg");
	this.shape_28.setTransform(-6.8,-8.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXATQgQgNgGgVQACgIAMgDQAJgEAOAAQAlgBAQAbQABAJgLALQgKAMgSACIgFABQgMAAgNgMg");
	this.shape_29.setTransform(-7.3,-8.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AmDFqQgXgqgOgcIgEgHIgHgYQgUhDgCgNQgHgqgBg3IABgfQgBgEAHAGQAGAEAPAHIACgaQAAgNACgGQAGg1AWgwQASgmAFAAQAIAAALAOIAPARQgCgPAGgUQAEgTALgXQAag6AogaIADAAIAAAGQAAAOACADQACADAEAAQAFAAAPgPIADgDIAugiQAigZADgBIAGgBIgBAPQgDAMAAAIIgCAKQABADAHAAIA0gjQAsgfAZgyIADgFIADgIQALAUAfAgQAbAYAVAOQACgIAGgHQAGgKAFADIAjAZQAfAVAjAeQAFgIARgUQAbAfASARQAwAsAGApQADgCAJgOQAKgMADgDQAIAGANAYQAFAIAFAMQAWAqAEAQIAJAbQAEALASAVIAhgYQgEAMACBaQADBTgTBgQgEAJABAIQgCADAAAFQgpCEgBiAQAFg/gchTQgchVhXhDIgYgSIgcgPQgfgTgngGQgUACgOAKIgsAXQgtAXgSAFQgSAEgrgWQgqgZgigNQgYgIgdARQgtAegeAhQgeAggOAWIgOAaQgWApgLAyQgLAwADAxQADAxgBAlQgCARgFAAQgHAAgLgVg");
	this.shape_30.setTransform(11,-43.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#655245").s().p("AmwFiIAAgBQgTgqgPgrQgPgsgIguIgBgEIgBgbIACg6QABACAMAJIAPAMQAGgjALgoQARgzAQgZQAMgVAOAAQACAAAFAGQAHAHADABQAHg5AmgsQAmgvAogVIAAAaIADAAQANgLA6gmQA+gqAOgEIAAAHQgOAdABAVIAZgUQAZgVAQgfQAJgPALgaQAHgYADgCQAIAEAbA5QAWAgAYASIAAgPQADgKgBgZQAaASAqAsQAhAkALgBQAJABAFgIQADgEAGgNIAQAMQBJAwAdAzIALANIAFgfQAfATAfBEIACAIIAaBGQABAEAGAGIAIAIQAIgBAMgJQAMgIAHAAQAFAOABANIACBAQABBFgIAnIghB6IgBAFIgCAIQgBgIAEgJQAThhgDhTQgChbADgNIggAaQgTgWgDgMIgJgaQgFgQgVgoQgFgMgGgJQgNgYgHgGQgEADgJANQgKANgCACQgGgogxgtQgRgQgbgfQgSAUgEAHQgkgegegVIgkgYQgEgDgGAKQgGAHgCAHQgWgNgagYQgigggJgVIgDAJIgCAFQgaAxgrAgIg1AiQgHAAAAgDIABgJQABgIADgNIABgOIgHABQgDABgiAZIguAhIgDAEQgOAOgGABQgEAAgCgEQgCgDAAgOIABgGIgEAAQgnAbgbA6QgKAWgEATQgGAVABAPIgOgSQgMgNgHAAQgFAAgTAjQgVAwgGA4QgCAFgBANIgCAbQgOgHgGgFQgHgGAAAFIAAAfQABA3AGApQACANAUBEIAIAXIgIgNg");
	this.shape_31.setTransform(10.6,-51.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AGHhIQAQgJACAAQAHgDAOABQAYADAOAWQARAagGAoQgFAmgcAPQgTAMgZgBAmKBUQgbAEgVgMQgdgPgHgkQgFgoAPgcQAAgBACgBQAFgHAEgFQAbgTAdAMQADABADABQADACABAAQACACABAB");
	this.shape_32.setTransform(12.8,-12.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("AmJgbQAAgLAAgJIgCg4QAAgcAEgbQAThKAmgxQATgbAkgVQAsgZAsgPQAdgFAegGQBbgPBdAEQBVgBBNAiQBXAnA1BPQANAcAMAtQAGAYABAcIABA3QgBAKABAIQAAAEAAAEQABBCAJBGQACANACAOIADAnQADCwj7AjQgjAFghAEQgjAFhSAAIhMgFQgWgBgVgDQj9gcgDivIACgnQABgOADgOAmJgbQAAAEAAACQACBCgHBF");
	this.shape_33.setTransform(13.3,-15.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCC7A5").s().p("Am6BMQgdgPgHgkQgFgoAPgcIACgCIAJgMQAbgTAdAMIAGACIAEACIADADIAAAGQABBCgHBFIgOABQgTAAgPgJgAGSBIQgJhGgBhCIgBgIIASgJQAHgDAOABQAYADAOAWQARAagGAoQgFAmgcAPQgRALgWAAIgFAAg");
	this.shape_34.setTransform(12.8,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FAD8AF").s().p("AhpGEIgrgEQj9gcgDivIACgnQABgOADgOQAHhFgChCIAAgGIAAgUIgCg4QAAgcAEgbQAThKAmgxQATgbAkgVQAsgZAsgPIA7gLQBbgPBdAEQBVgBBNAiQBXAnA1BPQANAcAMAtQAGAYABAcIABA3IAAASIAAAIQABBCAJBGIAEAbIADAnQADCwj7AjIhEAJQgjAFhSAAg");
	this.shape_35.setTransform(13.3,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

	// 圖層 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399FF").s().p("AgLAeIAAg7IAXAAIAAA7g");
	this.shape_36.setTransform(15.4,38.2,2.144,3.014,0,0,0,0,-0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C68B53").s().p("ABRBoIADgCIhSgFIgChOIgJgCIgEBQIjNAEQgBgXgFgnIgJg9QgDgPAAgPIgBg9IADABIBNASQBMAPBRgGQA1gCAyACQBCgHBFgNQAAAvgEAwQgGBCgIA6g");
	this.shape_37.setTransform(16.3,86);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCC7A5").s().p("AgrBKQgVgFgTgNQgKgFgIgJIAHhvIDBgIIADBvIAAAAQgvAsg6AAQgTAAgVgEg");
	this.shape_38.setTransform(16.4,21);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399FF").s().p("AlOAWQgEgHgDgMQAHgJALgLQARgRAVgPIBIB3IgOA/QhHgqgkhFgADDArQAtggAigsQAIgHAEgIQAYAKAUAWQARAQgIAUQgGAZgTARQgqAogxAegAiIh1IAogNIAJAGQAIAKAJAEQAUANAVAFQBTATA9g7IABAAIAoAPIgcAcQgPAKgSAIQguAVgxgDIgNABQhOAAgthBg");
	this.shape_39.setTransform(15,37.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66FFFF").s().p("AiQD3IhNgSQgOgGgLgPIATjUIAOg/IhIh6ICVhDQAwBGBYgGQAxADAugVQASgIAPgKIAcgcICCBFQgEAIgIAHQgiAugtAgIAcBZQAIAiAKAjQAUBIABBLIgLAZQhFANhDAHQgxgCg2ACIgqABQg7AAg3gKg");
	this.shape_40.setTransform(15,51.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#542B01").s().p("AgaAXIgZgKIgPgKIgLgGIADgDQAJgGAEgJIArARQAXAEBFgWIABAAIAAgBIADABIgGAHIgHAJQgDAEgEACQgeAYgkAAIgSgBg");
	this.shape_41.setTransform(1.1,123.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7F8F3").s().p("AgkBEIgrgQQAHgXAEgbQAEgYgCguQASAfA1AMQAlAHAmgbQgFAUgEAiQgGAXgIARIAAABIgBAAQg4ATgbAAIgJgBg");
	this.shape_42.setTransform(2.9,115.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],500.7,292.9,0,500.7,292.9,70.7).s().p("AgJB6Qg2gNgSgfIgDgFIAAgGQACgCAAgEIAAgZIAAgUIADiKIArAKQAkAMAzAJIAiAGIgIBcQgDAdgEAZQgCAOAAALIAAACIgDANQgeAWgeAAIgOgBg");
	this.shape_43.setTransform(4.5,101.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#542B01").s().p("Ag5AAIgHgGIgHgJQgEgDgBgEIABgBIAAABIABAAQBFAWAYgEQAhgOAKgDQAEAJAJAGIACADIgKAGIgPAKIgaAKIgSABQgkAAgdgYg");
	this.shape_44.setTransform(31,123.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7F8F3").s().p("Ag4AyIgBAAIAAgBQgIgRgGgXQgEgigEgUQAlAbAmgHQA0gMASgfQgBAuADAYQAEAbAIAXQgKADghANIgJABQgbAAg5gTg");
	this.shape_45.setTransform(29.2,115.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],-500.5,292.9,0,-500.5,292.9,70.6).s().p("Ag/BlIgDgNIAAgCIgEgZIgFg2IgIhcIAhgGQAygJAkgMIAsgKIADCKIAAAUIAAAZIABAGIAAAGIgCAFQgSAfg2ANIgOABQgeAAgdgWg");
	this.shape_46.setTransform(27.6,101.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],99.9,-83.5,0,99.9,-83.5,55.7).s().p("AgqDQQgngBgRgeQgWgfAJguQAFgaAIgUIAHgaQAGgRAohUQAlhWATgVQAVgPAIgMQALAQAeAZIAHAIQAQAKALAJIgMAUQgNAdgMAmIgeBPQADAHAIAIIAUASQAdAbgGAhQgEAYgxAAQAAgFgDgCQgKAegQAOQgVAbggAAIgJAAg");
	this.shape_47.setTransform(-32,47.8,1,1,0,96.3,-83.6,1.8,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(16));

	// 圖層 4
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],-16.1,-129.6,0,-16.1,-129.6,55.8).s().p("AAPCOQgQgRgMgPIgSgVQgLgOg0hOQg0hPgEgdQgCgZgHgPQAVAAAlgLQAFgDAFABQATgHAMgGQADALAHAMQASAaAYAgIAzBFIASgDQALgDAPgCQAogMAXAZQASAQgaAmQgFgBgDABQATAZACAWQANAlgXAdQgWAgglAAIgDABQgjAAghgkg");
	this.shape_48.setTransform(42.8,42.2,1,1,0,0,0,-11.3,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48,p:{rotation:0,y:42.2}}]}).to({state:[{t:this.shape_48,p:{rotation:-33.1,y:42.1}}]},5).to({state:[{t:this.shape_48,p:{rotation:0,y:42.2}}]},4).to({state:[{t:this.shape_48,p:{rotation:-33.1,y:42.1}}]},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-88.4,121.1,214.4);


(lib.男2做答 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C59A").s().p("AhBA5QgGgDgEgGQgfg6AwgsQAYgWAhAEQAHACAzAVIAdAjQAJAtgkAeQgHAGgLACQgUAFgSAAQgjAAghgRg");
	this.shape.setTransform(-27.4,55.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgTgBIAkgWIADAvg");
	this.shape_1.setTransform(-14,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgrALQAKg6BIAGIAFA9IgmAXg");
	this.shape_2.setTransform(-16.7,63.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAMCCIh1jZQAIhDBSAaIB5DPIAAADQhLgGgKA8g");
	this.shape_3.setTransform(-23.4,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6C59A").s().p("Ag7A/QgHgCgEgHQglg2AsgwQAVgZAhABQAJABAzAQIAhAfQANAtggAhQgHAGgLAEQgbAJgXAAQgdAAgbgKg");
	this.shape_4.setTransform(-28.2,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgVACIAigYIAIAtg");
	this.shape_5.setTransform(-13.6,66.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgrARQADg6BJgCIALA9IgjAag");
	this.shape_6.setTransform(-16.7,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AAZB+IiKjLQABhEBUATICNDBIABACQhLACgEA8g");
	this.shape_7.setTransform(-24.8,50.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6C59A").s().p("AhJAuQgFgEgDgHQgVg9A3gkQAbgTAeAKQAIADAuAeIAYAmQABAvgoAXQgJAFgKAAIgNAAQgxAAgpgdg");
	this.shape_8.setTransform(-26.9,55.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgTgHIAngQIgEAvg");
	this.shape_9.setTransform(-15.6,69.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AgsABQATg3BGASIgFA9IgoAQg");
	this.shape_10.setTransform(-17.6,64.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgHCFIhTjoQAThCBLAoIBXDgIgBACQhIgSgSA6g");
	this.shape_11.setTransform(-22.1,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-23.4}},{t:this.shape_2,p:{x:-16.7}},{t:this.shape_1,p:{x:-14}},{t:this.shape,p:{x:-27.4}}]}).to({state:[{t:this.shape_3,p:{x:-21}},{t:this.shape_2,p:{x:-14.3}},{t:this.shape_1,p:{x:-11.6}},{t:this.shape,p:{x:-25}}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_3,p:{x:-21.8}},{t:this.shape_2,p:{x:-15.1}},{t:this.shape_1,p:{x:-12.4}},{t:this.shape,p:{x:-25.8}}]},4).wait(3));

	// 圖層 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#993300").ss(1,1,1,3,true).p("ABegNQhiAzhZgo");
	this.shape_12.setTransform(13.2,8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9966").s().p("AgoASQgBgEACgFQAKgmAgAJQAgAIAGAPQgxgIggAbg");
	this.shape_13.setTransform(13.3,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAqANIgCgCIgcgIQgMgCgXAIIgZAGIgIABQgGgBgBgEIAAgCQAIAEAWgNQAXgRAPACQAKAAAOAHQAOAHAKAGIALAKIgFABQgGAAgLgDg");
	this.shape_14.setTransform(31.8,-9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgEQgDgEAAgDQABgEAEgEQAEgDACAAIAEABIADACQAHAFgEAIQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgDADgFAAIAAAAg");
	this.shape_15.setTransform(31.7,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAeQgPgBgIgLQgKgJACgLQABgMALgJQALgIAMACQANABAKAKQAEAFABAFIADAHIgBADQgBAOgLAHQgKAHgLAAIgBAAg");
	this.shape_16.setTransform(30.9,-6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAeQgPgFgLgLQgJgNACgJQASgZAlAEQAOABAIAFQANAFAAAIQgIAUgRAMQgMAJgLAAIgJgBg");
	this.shape_17.setTransform(31.6,-6.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhVARIAAgBQATgJAXgHQAXgHAggGQAjgIAUAJQAUAJgBADIgCABQhaAFhNAMg");
	this.shape_18.setTransform(36.9,-23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhQgRIgBgDQgBgDAWgGQAVgFAhAPQAeANAWAKIAlAZIgBABIgCABQhJgbhXgVg");
	this.shape_19.setTransform(-2.9,-26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA2AXIgGgCQgJgDgOgJQgXgKgLgCQgDAAgZADIgEAAQgRABgEgCIANgIQALgGAQgDQAOgEAIABQARADASASQATAUAJgDIAAABQgCAFgFAAIgCAAg");
	this.shape_20.setTransform(-4,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgEQgDgDAAgEQABgFAEgEQADgCADAAIAEABIADABQAHAGgEAIQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgDADgFAAIAAAAg");
	this.shape_21.setTransform(-3.2,-9.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAeQgOgBgJgKQgJgKACgLQABgMALgIQAKgJAMACQAOABAJAKIAGAKIADAHIgBAEQgCANgKAIQgKAGgLAAIgCAAg");
	this.shape_22.setTransform(-3.3,-10.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaARQgOgPgEgVQADgIAMgCQAKgCAOABQAlAEANAbQgBALgMAJQgMAKgRABIgCAAQgPAAgMgPg");
	this.shape_23.setTransform(-3.8,-10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AFyFGQANg+gThWQgShXhOhPQgKgLgMgIIgZgSQgdgWgngLQgTgBgPAJIguARQgwASgUADQgRADgogcQgngegggRQgXgLgfAOQgvAYgjAfQghAbgRAUQgPAUgCAEQgaAngRAvQgQAvgDAxQgDAxgGAkQgHAlgRgrQgSgsgLgeIgDgIIgEgYQgMhFAAgNQgCgqAGg3QACgZACgEQAAgFAGAHQAFAGAOAGIAFgYQACgNADgFQAMg3AbgsQAXgkAEABQAIABAKAPQAJAMADAHQAAgPAJgUQAGgSANgWQAhg2ArgWIAEABIgCAGQgBANABAEQACADAEABQAFAAAQgNIAEgDQARgKAggRQAlgWADAAIAGAAIgCAOIgGAUIgCAJQAAADAGAAQAGgCAzgZQAtgbAfgtIADgFIAEgIQAIAWAeAjQAXAbAUAQQACgHAIgHQAHgJAEAEIAhAcQAbAZAgAiQAFgHAUgSQAXAiAQASQArAzABAoIAOgNIAOgPQAHAHAKAaQAFAIADANQAQAsADAQIAGAaQACAMAQAZQAfgTAEgEQgFANgIBaQgIBUgeBdQgFAIAAAIIgDAIQgcA/gKAAQgLAAAHhAg");
	this.shape_24.setTransform(18.1,-42.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#655245").s().p("AGmF0QAeheAHhTQAJhbAEgMQgEADgfATQgPgZgCgLIgGgcQgDgRgRgqQgDgMgFgIQgKgagHgHIgOAPIgNANQgCgogqgzQgQgTgXghQgUASgFAGQggghgcgZIghgcQgEgEgGAJQgIAGgDAIQgTgQgXgbQgegkgJgVIgEAIIgDAEQgfAugtAaQgyAagGACQgHgBAAgCIADgJIAFgUIADgOIgGAAQgEAAgkAVQghASgRAKIgDADQgQAMgGAAQgEAAgBgDQgCgEACgNIABgHIgDgBQgrAXghA2QgNAWgGASQgJAUAAAPQgEgIgIgLQgKgQgIAAQgFgBgWAkQgbAsgMA1QgDAFgCANIgGAaQgNgJgGgFQgGgHAAAFQgBAEgDAaQgFA3ABAqQABANALBFIAFAZIgFgOIgBgCQgOgrgKgtQgJgtgDgvIAAgDQAAgOABgOIAJg5QABACALAKIANAOQAKghARglQAXgyATgYQAOgUANACQACAAAFAIQAGAHADACQANg5ArgoQAsgqApgPIgCAZIADABQANgJA+gfQBEgjAOgCIgBAHQgRAbgCAVIAbgRQAbgRATgeQAKgNANgZQAKgXAEgCQAIAFAWA8QASAiAVAWIABgPQAFgKACgZQAYAVAkAxQAdAnALAAQAIACAGgHQAEgEAIgMQAIAHAHAGQBCA6AXA1IAJAOIAIgbIABgDQAcAXAXBGIABAIQAGATALA3QABAEAFAHIAHAIQAIABAOgIQAMgHAHAAQAEAPgBANQAAAHgGA5QgHBEgNAmQgMAhgiBVIgCAFIgDAHQAAgIAFgIg");
	this.shape_25.setTransform(17.9,-49.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AGNgaQAQgHADAAQAGgCAOADQAYAGAMAXQANAbgLApQgJAkgdAMQgVAKgZgFAmRAlQgcABgUgPQgagSgDgjQgBgqATgaQABgBACgBQAFgGAFgFQAdgPAbAPQADACADABQADACABABQACABAAAB");
	this.shape_26.setTransform(16.9,-12.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("Al1hKQABgKABgKIAFg3QADgcAHgbQAbhHArgsQAXgYAmgRQAugTAvgKQAdgCAegCQBagFBeAQQBUAIBJArQBSAxArBVQAJAdAHAuQADAZgCAbIgGA4QgBAJgBAGQAAAFAAAEQgHBDABBGQAAAOAAANIgBAoQgSCvj+AFQgjABghAAQgkABhSgJIhKgPQgVgEgVgFQj4g4ASivIAHgmQACgPAEgNAl1hKQgBAEAAACQgHBEgPBC");
	this.shape_27.setTransform(16.3,-15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCC7A5").s().p("AGGB2QgBhGAHhBIABgJQAQgHADAAQAGgCAOADQAYAGAMAXQANAbgLApQgJAkgdAMQgOAHgRAAIgPgCgAnBAXQgagSgDgjQgBgqATgaIADgCIAKgLQAdgPAbAPIAGADIAEADIACACIAAAGQgHBEgPBCIgFAAQgZAAgSgOg");
	this.shape_28.setTransform(16.9,-12.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAD8AF").s().p("Ag/GDIhKgPIgqgJQj4g4ASivIAHgmQACgPAEgNQAPhCAHhEIABgGIACgUIAFg3QADgcAHgbQAbhHArgsQAXgYAmgRQAugTAvgKIA7gEQBagFBeAQQBUAIBJArQBSAxArBVQAJAdAHAuQADAZgCAbIgGA4IgCAPIAAAJQgHBDABBGIAAAbIgBAoQgSCvj+AFIhEABIgLAAQgkAAhHgIg");
	this.shape_29.setTransform(16.3,-15.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#993300").ss(1,1,1,3,true).p("ABcgUQhcA+hbgf");
	this.shape_30.setTransform(11.6,8.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9966").s().p("AgnAVQgBgFABgFQAFgnAiAFQAgAEAIAQQgygDgcAfg");
	this.shape_31.setTransform(10.3,-3.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag/APIAAgBQAJADAUgRQAVgSAOgBQAKgBAPAFQAPAFAKAHIANAIQgEADgTgDIgCgCIgcgDQgLAAgXAJIgYAJIgIACQgGAAgCgFg");
	this.shape_32.setTransform(28.4,-10.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgFQADgDAEABIADAAIADABQAHAEgCAJQAAACgCACQgDAEgGAAQgDAAgEgEg");
	this.shape_33.setTransform(28.5,-8.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAVQgKgIgBgNQAAgKALgKQAJgJANgBQAMAAAMAJQAEAFACAEIADAHIAAAFQAAAMgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_34.setTransform(27.7,-9.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAfQgRgCgMgKQgKgMAAgJQAPgcAlAAQAOAAAJADQANAEABAIQgFAUgPAPQgOALgNAAIgDAAg");
	this.shape_35.setTransform(28.2,-8.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhTAZIAAgBIAngVQAWgJAfgLQAigMAVAHQAVAHgBADIgCAEQhYANhLAVg");
	this.shape_36.setTransform(31.6,-25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhSgFIgCgEQgBgDAVgHQAUgIAjALQAfAKAXAHIAoAUIAAABIgCABQhMgRhZgLg");
	this.shape_37.setTransform(-8.4,-24.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAxASQgJgCgPgHQgZgJgLAAQgDAAgYAGIgDABQgRAEgFgDIANgIQAJgIAQgEQANgGAKAAQAPABAVARQAWAQAHgEIABACQgCAFgGAAIgCAAIgFgBg");
	this.shape_38.setTransform(-7.5,-10.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgFQADgDAEAAIADAAIADABQAHAFgCAJQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgDAEgGAAQgDAAgEgEg");
	this.shape_39.setTransform(-6.6,-8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgWAWQgKgJAAgNQgBgLAKgJQAJgKAOAAQAMAAALAJIAHAJQACADABAEIAAAFQAAAMgKAJQgKAJgNABIAAAAQgNAAgJgJg");
	this.shape_40.setTransform(-6.8,-8.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXATQgQgNgGgVQACgIAMgDQAJgEAOAAQAlgBAQAbQABAJgLALQgKAMgSACIgFABQgMAAgNgMg");
	this.shape_41.setTransform(-7.3,-8.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AmDFqQgXgqgOgcIgEgHIgHgYQgUhDgCgNQgHgqgBg3IABgfQgBgEAHAGQAGAEAPAHIACgaQAAgNACgGQAGg1AWgwQASgmAFAAQAIAAALAOIAPARQgCgPAGgUQAEgTALgXQAag6AogaIADAAIAAAGQAAAOACADQACADAEAAQAFAAAPgPIADgDIAugiQAigZADgBIAGgBIgBAPQgDAMAAAIIgCAKQABADAHAAIA0gjQAsgfAZgyIADgFIADgIQALAUAfAgQAbAYAVAOQACgIAGgHQAGgKAFADIAjAZQAfAVAjAeQAFgIARgUQAbAfASARQAwAsAGApQADgCAJgOQAKgMADgDQAIAGANAYQAFAIAFAMQAWAqAEAQIAJAbQAEALASAVIAhgYQgEAMACBaQADBTgTBgQgEAJABAIQgCADAAAFQgpCEgBiAQAFg/gchTQgchVhXhDIgYgSIgcgPQgfgTgngGQgUACgOAKIgsAXQgtAXgSAFQgSAEgrgWQgqgZgigNQgYgIgdARQgtAegeAhQgeAggOAWIgOAaQgWApgLAyQgLAwADAxQADAxgBAlQgCARgFAAQgHAAgLgVg");
	this.shape_42.setTransform(11,-43.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#655245").s().p("AmwFiIAAgBQgTgqgPgrQgPgsgIguIgBgEIgBgbIACg6QABACAMAJIAPAMQAGgjALgoQARgzAQgZQAMgVAOAAQACAAAFAGQAHAHADABQAHg5AmgsQAmgvAogVIAAAaIADAAQANgLA6gmQA+gqAOgEIAAAHQgOAdABAVIAZgUQAZgVAQgfQAJgPALgaQAHgYADgCQAIAEAbA5QAWAgAYASIAAgPQADgKgBgZQAaASAqAsQAhAkALgBQAJABAFgIQADgEAGgNIAQAMQBJAwAdAzIALANIAFgfQAfATAfBEIACAIIAaBGQABAEAGAGIAIAIQAIgBAMgJQAMgIAHAAQAFAOABANIACBAQABBFgIAnIghB6IgBAFIgCAIQgBgIAEgJQAThhgDhTQgChbADgNIggAaQgTgWgDgMIgJgaQgFgQgVgoQgFgMgGgJQgNgYgHgGQgEADgJANQgKANgCACQgGgogxgtQgRgQgbgfQgSAUgEAHQgkgegegVIgkgYQgEgDgGAKQgGAHgCAHQgWgNgagYQgigggJgVIgDAJIgCAFQgaAxgrAgIg1AiQgHAAAAgDIABgJQABgIADgNIABgOIgHABQgDABgiAZIguAhIgDAEQgOAOgGABQgEAAgCgEQgCgDAAgOIABgGIgEAAQgnAbgbA6QgKAWgEATQgGAVABAPIgOgSQgMgNgHAAQgFAAgTAjQgVAwgGA4QgCAFgBANIgCAbQgOgHgGgFQgHgGAAAFIAAAfQABA3AGApQACANAUBEIAIAXIgIgNg");
	this.shape_43.setTransform(10.6,-51.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AGHhIQAQgJACAAQAHgDAOABQAYADAOAWQARAagGAoQgFAmgcAPQgTAMgZgBAmKBUQgbAEgVgMQgdgPgHgkQgFgoAPgcQAAgBACgBQAFgHAEgFQAbgTAdAMQADABADABQADACABAAQACACABAB");
	this.shape_44.setTransform(12.8,-12.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("AmJgbQAAgLAAgJIgCg4QAAgcAEgbQAThKAmgxQATgbAkgVQAsgZAsgPQAdgFAegGQBbgPBdAEQBVgBBNAiQBXAnA1BPQANAcAMAtQAGAYABAcIABA3QgBAKABAIQAAAEAAAEQABBCAJBGQACANACAOIADAnQADCwj7AjQgjAFghAEQgjAFhSAAIhMgFQgWgBgVgDQj9gcgDivIACgnQABgOADgOAmJgbQAAAEAAACQACBCgHBF");
	this.shape_45.setTransform(13.3,-15.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCC7A5").s().p("Am6BMQgdgPgHgkQgFgoAPgcIACgCIAJgMQAbgTAdAMIAGACIAEACIADADIAAAGQABBCgHBFIgOABQgTAAgPgJgAGSBIQgJhGgBhCIgBgIIASgJQAHgDAOABQAYADAOAWQARAagGAoQgFAmgcAPQgRALgWAAIgFAAg");
	this.shape_46.setTransform(12.8,-12.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAD8AF").s().p("AhpGEIgrgEQj9gcgDivIACgnQABgOADgOQAHhFgChCIAAgGIAAgUIgCg4QAAgcAEgbQAThKAmgxQATgbAkgVQAsgZAsgPIA7gLQBbgPBdAEQBVgBBNAiQBXAnA1BPQANAcAMAtQAGAYABAcIABA3IAAASIAAAIQABBCAJBGIAEAbIADAnQADCwj7AjIhEAJQgjAFhSAAg");
	this.shape_47.setTransform(13.3,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},6).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	// 圖層 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399FF").s().p("AgLAeIAAg7IAXAAIAAA7g");
	this.shape_48.setTransform(15.4,38.2,2.144,3.014,0,0,0,0,-0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C68B53").s().p("ABRBoIADgCIhSgFIgChOIgJgCIgEBQIjNAEQgBgXgFgnIgJg9QgDgPAAgPIgBg9IADABIBNASQBMAPBRgGQA1gCAyACQBCgHBFgNQAAAvgEAwQgGBCgIA6g");
	this.shape_49.setTransform(16.3,86);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCC7A5").s().p("AgrBKQgVgFgTgNQgKgFgIgJIAHhvIDBgIIADBvIAAAAQgvAsg6AAQgTAAgVgEg");
	this.shape_50.setTransform(16.4,21);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399FF").s().p("AlOAWQgEgHgDgMQAHgJALgLQARgRAVgPIBIB3IgOA/QhHgqgkhFgADDArQAtggAigsQAIgHAEgIQAYAKAUAWQARAQgIAUQgGAZgTARQgqAogxAegAiIh1IAogNIAJAGQAIAKAJAEQAUANAVAFQBTATA9g7IABAAIAoAPIgcAcQgPAKgSAIQguAVgxgDIgNABQhOAAgthBg");
	this.shape_51.setTransform(15,37.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66FFFF").s().p("AiQD3IhNgSQgOgGgLgPIATjUIAOg/IhIh6ICVhDQAwBGBYgGQAxADAugVQASgIAPgKIAcgcICCBFQgEAIgIAHQgiAugtAgIAcBZQAIAiAKAjQAUBIABBLIgLAZQhFANhDAHQgxgCg2ACIgqABQg7AAg3gKg");
	this.shape_52.setTransform(15,51.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#542B01").s().p("AgaAXIgZgKIgPgKIgLgGIADgDQAJgGAEgJIArARQAXAEBFgWIABAAIAAgBIADABIgGAHIgHAJQgDAEgEACQgeAYgkAAIgSgBg");
	this.shape_53.setTransform(1.1,123.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7F8F3").s().p("AgkBEIgrgQQAHgXAEgbQAEgYgCguQASAfA1AMQAlAHAmgbQgFAUgEAiQgGAXgIARIAAABIgBAAQg4ATgbAAIgJgBg");
	this.shape_54.setTransform(2.9,115.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],500.7,292.9,0,500.7,292.9,70.7).s().p("AgJB6Qg2gNgSgfIgDgFIAAgGQACgCAAgEIAAgZIAAgUIADiKIArAKQAkAMAzAJIAiAGIgIBcQgDAdgEAZQgCAOAAALIAAACIgDANQgeAWgeAAIgOgBg");
	this.shape_55.setTransform(4.5,101.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#542B01").s().p("Ag5AAIgHgGIgHgJQgEgDgBgEIABgBIAAABIABAAQBFAWAYgEQAhgOAKgDQAEAJAJAGIACADIgKAGIgPAKIgaAKIgSABQgkAAgdgYg");
	this.shape_56.setTransform(31,123.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7F8F3").s().p("Ag4AyIgBAAIAAgBQgIgRgGgXQgEgigEgUQAlAbAmgHQA0gMASgfQgBAuADAYQAEAbAIAXQgKADghANIgJABQgbAAg5gTg");
	this.shape_57.setTransform(29.2,115.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],-500.5,292.9,0,-500.5,292.9,70.6).s().p("Ag/BlIgDgNIAAgCIgEgZIgFg2IgIhcIAhgGQAygJAkgMIAsgKIADCKIAAAUIAAAZIABAGIAAAGIgCAFQgSAfg2ANIgOABQgeAAgdgWg");
	this.shape_58.setTransform(27.6,101.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],99.9,-83.5,0,99.9,-83.5,55.7).s().p("AgqDQQgngBgRgeQgWgfAJguQAFgaAIgUIAHgaQAGgRAohUQAlhWATgVQAVgPAIgMQALAQAeAZIAHAIQAQAKALAJIgMAUQgNAdgMAmIgeBPQADAHAIAIIAUASQAdAbgGAhQgEAYgxAAQAAgFgDgCQgKAegQAOQgVAbggAAIgJAAg");
	this.shape_59.setTransform(-18.7,63,1,1,0,0,0,1.7,2.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],-110.8,-68.2,0,-110.8,-68.2,55.8).s().p("AAIC1QgRgLgPgbQgCACgCAFQguAHgIgXQgMggAbgfQAIgNAIgIIAJgQQgZgxgPgaQgTgjgQgbQgIgMgIgHQAKgIAOgPQABgEAFgEQAZgdAJgTQAMAMAVANQAZAQAvBQQA0BQAHAOIAMAaQAJARAIAYQATAugRAhQgQAhgmAHQgIACgIAAQgaAAgWgVg");
	this.shape_60.setTransform(50,63.3,1,1,0,0,0,-0.8,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-88.4,103.8,214.4);


(lib.男2失敗 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIA/QglgagFgpQgEgrAfgiIAHgFQBOBZB1gIQgDAcgXAZQgfAigwAEIgMABQgnAAgfgYg");
	this.shape.setTransform(63.9,-69.6,0.712,0.712,0,0,0,0.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLBIQgcgVgJgcQB0gNA9hoIAHAFQAlAbAEArQAEAogeAjQggAhgvAFIgKABQgoAAghgXg");
	this.shape_1.setTransform(-20.4,-68,0.712,0.712,0,0,0,-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA6240").s().p("AgnArQgTgPgCgZQAAgWARgVQARgRAagBQAXgCASARQAUASAAAXQACAXgTATQgQASgZABIgDAAQgYAAgPgQg");
	this.shape_2.setTransform(60.8,-49.3,0.712,0.712);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA6240").s().p("AgoAtQgTgTAAgZQgCgWASgRQARgUAZAAQAXgCAVATQARAQABAXQAAAXgPAVQgTAQgZABQgXAAgTgOg");
	this.shape_3.setTransform(-22.3,-44.8,0.712,0.712);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("AhtCaIgOgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgDAEAAQBwgZBMgmQBNglAegXIAIgEQgsgRgmgLIgZgFQgLgDgKAAQg5AZguARQgUAHgUAEQhHAVhIAOIgBAAQgeADggABIgEgBQgEAAAAgDQAAgEACgDQADgDADAAQAfgBAdgFQBJgMBFgUQAUgEATgIQAngMAsgWQgugJgugDIgCAAQgXgDgYACIhBgCIgGgCIgBgDQAAgDADgEQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIBBAAQAOAAANACQg4gyhkgdQgDAAgCgDIAAgFIAKgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQBwAhA6A5QA5AGA7ANIACAAIAZAFQgTgSgUgQQgygwg8gjQgDAAAAgFQgDgDADgCIAFAAIAJAAQA6AlA1AtQAaAYAYAZQALADARAIIBDAUQgJgMgKgLQgqg6gzgrIgBgEQgCgEACgDIAAACQAPADADACIABAAQAyAsAqA8IAiAtIADAEIAaAVIAJAGIAZAZQADACAAADQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIgBAEIgCABIgDABQgCAAgOgNIgogfQgFgGgHgDIAAgCIgDAAIAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQgQgNgLgEQgcAZhcAuQhMAmhqAZIgDgDg");
	this.shape_4.setTransform(20.6,-80.4,0.712,0.712);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006600").ss(0.1,1,1).p("Aj9BUQBCglAygYQgTgGgXgIIh3goQA8glBRgJQBSgKBLAHQBLAGA6AXQA5AXAcARQAKAIAIAEQAyAjANAv");
	this.shape_5.setTransform(18.5,-85.6,0.712,0.712);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AhlCIQhegdgvghIgEgBQgDAAgBgDQgtgdgJgNIAzgcQBCgiAzgZIgrgOIh3gpQA8gmBSgIQBSgKBKAHQBLAGA6AWQA6AYAbARIATANQAxAkAOAtQAIAZgFAeIgBAFQgHAmgeAUQglAegwAIQgvAJgwACIgQAAQhXAAhTgfg");
	this.shape_6.setTransform(18.4,-79.7,0.712,0.712);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003C00").s().p("AgEBgIghgGQgngGgigPQgkgOg/gmQhCgggLgYQgLgYABgEQADgHAKAAQAKAAAzAjQBBAtAFACQAcARAvALIBTAUIBlgEQAygCAugcQAvgbAEgcQAJhIARAFQAQADABAnQACA0gpAnQgWAZgmAPQhIAchJAAQgdAAgcgFg");
	this.shape_7.setTransform(19.3,-72.5,0.712,0.712);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A6707").s().p("AjPAUIgBgLQgCgSAdgFQAdgGAAAXQACAJgNAIQgMAJgNAAQgOAAgFgJgACjAIQgNgHgBgHQAAgYAdACQAdADACAVQAAAEgCAEQgGAKgNABQgNAAgMgHg");
	this.shape_8.setTransform(18.8,-58.1,0.712,0.712);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqCvQhZg0gbhPQgahOA6hSQA8hRBWgNQBVgOBQAxQBPAxAWBRQAZBQgvBTQgvBRhWAMQgTADgUAAQhBAAhFgng");
	this.shape_9.setTransform(62.8,-71.8,0.712,0.712);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwDXQhZgGg0hOQg2hNAShTQARhUBMg1QBKg3BWAHQBYAFBBBPQBABLgUBQQgTBShTA6QhMAzhLAAIgUgBg");
	this.shape_10.setTransform(-20.1,-68.6,0.712,0.712);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CC6633").ss(1,1,1).p("AIgCmQgpBmhgBRQipCSjuAAQjRAAibhwQgWgRgUgRQipiRAAjMQAAjKCpiUQCoiQDuAAQDuAACpCQQCpCUAADLQAABYggBNg");
	this.shape_11.setTransform(19.2,-10.2,0.712,0.712);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#85B80C").s().p("AgmNSQh+gFh8gdQh8gchtg/Qhag8hAhNQhMhegshwQhFizAoi8IAMgiQAGgQACgOQAfhVAxhKQhKgbgzhKQhNhwAch3QAYh3BphOQBshPB8ALQB9AJBfBvQA3A/ANBCQBmgaB1gFQCSgGB/AgQAEhJA3hKQBTh3B8gSQB+gVBwBGQBxBDAjB7QAiB0hDBzQg5BkhmAaQAiAxAbAyIAKAXQA9B6ADB2QAEBMgSBIQgqDCiTCMIgkAjQhMBDhsA0QhmAxhsAdQhuAYhsAAIgZgBgAmpgSQipCRAADLQAADOCpCRIAqAhQCbBxDRAAQDuAACpiSQBghSAphlQAghNAAhZQAAjNipiRQipiQjuAAQjuAAioCQg");
	this.shape_12.setTransform(20.5,-33.8,0.712,0.712);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#993300").ss(1,1,1,3,true).p("ACLAWQiRhNiEA8");
	this.shape_13.setTransform(17.8,12.3,0.712,0.712);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9966").s().p("Ag8AbQgBgHADgHQAOg4AwANQAxAMAJAWQhLgMguApg");
	this.shape_14.setTransform(13.6,-5.6,0.712,0.712);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA/ATIgDgCIgqgNQgSgCgjAMQgXAHgOACIgMABQgJgBgCgHIABgCQAMAGAhgVQAigYAWACQAPAAAVAKQAWAKAOAKQAOAMADAEQgDABgEAAQgJAAgRgFg");
	this.shape_15.setTransform(33.2,-10.4,0.712,0.712);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAASQgHgBgGgGQgEgFAAgHQABgHAHgGQAFgEAFABIAGABIAEACQAKAIgFAOQAAADgEADQgEAEgHAAIgBAAg");
	this.shape_16.setTransform(33.1,-7.5,0.712,0.712);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAtQgVgCgNgQQgOgOACgRQACgSARgNQAPgLATACQATACAPAOQAGAIACAHIAEALIgBAGQgCATgQALQgOAMgRAAIgDgBg");
	this.shape_17.setTransform(32.3,-8.1,0.712,0.712);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAtQgYgHgPgRQgPgSAEgPQAbgmA3AGQAUACAOAHQASAHAAAMQgLAfgaASQgSANgSAAIgLgBg");
	this.shape_18.setTransform(33,-7.7,0.712,0.712);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABGBNQgggEgmgjQgmgigYgaQgYgcgRgYIAAgCIAEAAQBaBJBxBIIAAAGQgBACgMAAIgVAAg");
	this.shape_19.setTransform(41.2,-21.7,0.712,0.712);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhaAsQghgIABgEIACgFQCCghBtgnIADABIABACIg3AkQggAQguAUQglAQgaAAQgJAAgIgCg");
	this.shape_20.setTransform(-7.1,-26.5,0.712,0.712);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABSAiQgEAAgGgDQgNgFgWgNQgigQgRgCQgFgBglAGQgDAAgCAAQgaACgHgEQAFgEAQgIQAQgKAYgEQAVgGANACQAYAEAcAcQAdAeAMgFIABACQgEAHgHAAIgCAAg");
	this.shape_21.setTransform(-4.6,-13.7,0.712,0.712);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAASQgHgBgGgGQgEgFAAgGQABgIAGgGQAGgEAFABIAGABIAEACQAKAIgFAOQAAADgEADQgEAEgHAAIgBAAg");
	this.shape_22.setTransform(-3.8,-11.3,0.712,0.712);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDAtQgWgCgNgPQgNgPACgRQACgSAQgMQAPgMAUACQAUACAOAPQAGAIADAHQACAEABAGIgBAGQgCATgQAMQgOALgRAAIgDgBg");
	this.shape_23.setTransform(-3.9,-11.9,0.712,0.712);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAZQgWgWgFggQAEgMATgDQAPgDAUACQA3AGAUAoQgBAQgTAOQgRAPgaABIgCAAQgWAAgTgWg");
	this.shape_24.setTransform(-4.5,-11.6,0.712,0.712);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AJOgnQAYgKAEAAQAKgDAUAEQAjAJASAiQAUApgQA8QgOA2gsASQgeAPglgHApVA3QgqACgdgWQgngbgEg1QgBg/AbgmQABgCADgBQAIgJAIgHQArgXAoAWQAEADAFACQAEADACABQACACABAB");
	this.shape_25.setTransform(17.4,-13.9,0.712,0.712);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("AorhvQABgPACgOIAHhSQAFgpAKgoQAohqBBhCQAhgkA5gYQBFgdBFgOQArgEAsgDQCIgHCLAYQB+AMBsBAQB6BJA/B+QAOArAKBEQAFAlgDApIgJBSQgCAOgBAKQgBAHAAAGQgKBkABBoQAAAUAAAVIgBA7QgaEDl5AIQg1ABgxAAQg1ACh7gOIhvgVQgfgGgfgHQlwhVAakDIAKg5QAEgWAGgUAorhvQgBAGAAAEQgLBkgWBj");
	this.shape_26.setTransform(16.8,-17,0.712,0.712);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCC7A5").s().p("AJECwQgBhoAKhiIABgNQAYgKAEAAQAKgDAUAEQAjAJASAiQAUApgQA8QgOA2gsASQgUAKgYAAQgLAAgMgCgAqcAjQgngbgEg1QgBg/AbgmQABgCADgBIAQgQQArgXAoAWIAJAFIAGAEIADADIgBAKQgKBkgWBjIgHAAQglAAgbgUg");
	this.shape_27.setTransform(17.4,-13.9,0.712,0.712);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAD8AF").s().p("AheI/IhvgVIg+gNQlwhVAakDIAKg5QAEgWAGgUQAWhjALhkIABgKIADgdIAHhSQAFgpAKgoQAohqBBhCQAhgkA5gYQBFgdBFgOIBXgHQCIgHCLAYQB+AMBsBAQB6BJA/B+QAOArAKBEQAFAlgDApIgJBSIgDAYIgBANQgKBkABBoIAAApIgBA7QgaEDl5AIIhmABIgOAAQg2AAhsgMg");
	this.shape_28.setTransform(16.8,-17,0.712,0.712);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhEBBQgmgZgHgoQgGgrAdgkIAGgFQBUBVBzgOQgBAcgVAaQgeAkgvAGQgLACgIAAQgjAAgegUg");
	this.shape_29.setTransform(56.1,-71.3,0.712,0.712,0,0,0,0.9,-0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhIBNQgdgUgLgbQB0gTA4hrQAEACADADQAmAYAGArQAHAogdAlQgeAjguAHIgRACQglAAgfgUg");
	this.shape_30.setTransform(-28.3,-65.9,0.712,0.712,0,0,0,-0.3,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA6240").s().p("AglAsQgUgOgDgYQgCgWAQgWQARgSAagCQAWgDAUAPQAUARACAYQADAWgSAUQgQATgZADIgGABQgVAAgPgQg");
	this.shape_31.setTransform(53.8,-51.4,0.712,0.712);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA6240").s().p("AgmAvQgUgSgBgZQgEgWASgSQAQgVAZgBQAXgDAWARQARAPACAYQACAWgOAWQgSASgZACIgFAAQgUAAgSgMg");
	this.shape_32.setTransform(-29,-42.7,0.712,0.712);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006600").s().p("AhpCcIgOgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgDAFgBQBugeBJgqQBMgoAdgbIAHgDQgsgPgogJIgYgDQgLgCgLAAQg3AbgtAUQgTAIgVAFQhFAYhHATIgBAAQgeAEggADQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEAAAAgDQgBgEACgDQADgDADgBQAfgCAdgHQBIgPBFgYQASgFATgJQAmgOArgYQgugHgugBIgBAAQgXgBgZADIhBABIgGgBIgCgCQAAgEADgEQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAIBBgEQAOAAANAAQg7gthlgZQgDAAgCgDIgBgEIAKgCQABAAAAgBQAAAAABAAQAAgBABAAQABAAABAAQBxAbA9A1QA6ADA6ALIACAAIAaADQgVgRgTgPQg2gsg9ggQgDgBgBgEQgCgDACgDIAGAAIAJAAQA9AiA1AqQAcAWAaAYQAKACASAHIBDATQgIgNgMgKQgtg4g1gpIgBgDQgCgFACgCIAAABQAPACADADIABAAQA0AoAtA7IAlArIACADIAcAUIAKAGQAPAMALALQADADAAACQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABAAIgBAEIgCACIgEABQgCAAgOgNIgpgdQgGgFgHgDIgBgCIgDAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgQgNgLgEQgbAchaAyQhKArhoAeIgDgCg");
	this.shape_33.setTransform(12.3,-80.1,0.712,0.712);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#006600").ss(0.1,1,1).p("Aj6BZQBAgoAxgbQgTgFgYgHIh5ghQA6goBRgNQBRgOBNADQBKACA7ATQA6AVAdAPQAKAHAJAGQAzAeAQAu");
	this.shape_34.setTransform(9.7,-85,0.712,0.712);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AheCOQhggZgwgeIgEgBQgDAAgCgDQgvgbgJgMIAygfQBAgmAxgbIgrgLIh5gjQA6gpBRgNQBRgOBNADQBJACA7AUQA7AUAcAQIATAMQA0AhAQAuQAJAXgDAfIgBAFQgFAlgdAWQgjAggwAKQguAMgwAEQgWACgVAAQhIAAhIgWg");
	this.shape_35.setTransform(10,-79.6,0.712,0.712);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003C00").s().p("AACBpIgfgEQgngEgigOQgmgMhBgiQhDgggNgVQgMgXABgEQADgIAKAAQAKgBA0AhIBJAsQAdAPAvAJIBUAPIBlgJQAygFAtgeQAtgeADgcQAFhIARAEQAQACADAnQAFA0gnApQgVAaglARQhQAkhTAAQgUAAgUgCg");
	this.shape_36.setTransform(10.9,-73,0.712,0.712);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A6707").s().p("AjOAeIgCgLQgDgTAegEQAcgIABAWQADAJgNAJQgLAKgNAAIgCAAQgMAAgGgIgACjAAQgNgFgBgJQgCgYAdABQAeACADAUQAAAGgCAEQgFAIgOACIgCAAQgMAAgLgFg");
	this.shape_37.setTransform(11.4,-58,0.712,0.712);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhgC1QhdgvgfhOQgdhMA1hVQA4hUBVgSQBUgSBSAtQBSAtAbBPQAcBPgqBVQgrBThVARQgZAFgaAAQg7AAhAggg");
	this.shape_38.setTransform(54.6,-74.1,0.712,0.712);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglDYQhZgBg4hLQg5hKANhTQAMhWBJg4QBHg7BXACQBYAABFBMQBDBIgPBRQgPBThQA+QhPA7hRAAIgIgBg");
	this.shape_39.setTransform(-27.9,-66.5,0.712,0.712);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CC6633").ss(1,1,1).p("AInCJQgjBohcBXQihCajvAMQjPALihhoQgXgQgUgPQixiIgKjNQgLjJCiicQCfiZDugMQDugNCwCIQCxCKAKDNQAFBWgdBOg");
	this.shape_40.setTransform(14.3,-10.2,0.712,0.712);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#85B80C").s().p("AjbNMQh9gVhxg5Qhcg4hEhJQhRhbgyhtQhOivAei+QAGgRAFgUQAFgQABgOQAahUAthNQhLgXg3hIQhShrAVh5QASh3BkhUQBphVB8AFQB+ADBkBpQA6A8AQBCQBlgfB1gLQCRgOCBAZQAAhJAzhMQBMh8B8gYQB9gbBzBAQB0A9AqB4QAnBzg9B2Qg0BnhjAfQAjAvAeAxIALAXQBEB2AJB2QAHBMgNBIQghDEiKCUIgjAkQhJBHhpA6QhiA1hrAjQh5Ahh6ADIgQAAQh0AAh2gVgAgBiTQjuANigCWQihCcAKDLQALDNCwCIIArAgQCiBoDOgLQDwgNCgiaQBdhWAjhoQAchPgEhYQgLjNixiIQihh8jWAAIgmABg");
	this.shape_41.setTransform(12.6,-34.8,0.712,0.712);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#993300").ss(1,1,1,3,true).p("ACLAAQibg3h6BO");
	this.shape_42.setTransform(16.1,12.1,0.712,0.712);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9966").s().p("Ag6AfQgCgHACgHQAHg7AzAHQAwAHAMAXQhLgFgpAvg");
	this.shape_43.setTransform(10.5,-4.9,0.712,0.712);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhfAXIABgCQANAEAdgZQAfgcAWgBQAPgCAXAIQAWAIAQAKIATAMQgHAFgbgFIgDgCIgrgGQgRABgiAOQgXAKgNADIgLADQgJAAgEgHg");
	this.shape_44.setTransform(29.6,-12.4,0.712,0.712);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAMQgFgEgBgIQAAgFAGgHQAEgFAHABIAFAAIAEABQALAHgDAOQAAADgEADQgEAGgJAAQgFAAgGgGg");
	this.shape_45.setTransform(29.7,-9.9,0.712,0.712);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghAgQgQgMAAgUQAAgQAPgPQAOgNAUgBQASAAARANQAHAHADAHIAFAKIAAAIQAAASgOANQgQAPgTAAIgBAAQgTAAgOgOg");
	this.shape_46.setTransform(28.8,-10.4,0.712,0.712);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJAvQgZgEgRgPQgQgRABgOQAXgqA3gBQAVABANAFQATAFACAMQgIAfgWAVQgUASgVAAIgFAAg");
	this.shape_47.setTransform(29.4,-10.1,0.712,0.712);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAEAjQgpgcgcgXQgbgXgVgWIAAgCIAEAAQBkA7B5A3IACAGQgBAEggACIgEABQgfAAgqgdg");
	this.shape_48.setTransform(35.3,-23.7,0.712,0.712);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhTA8QghgDABgEIABgGQB7g0Bng2IADAAIABACIgyAsQgdAUgqAbQgqAageAAIgGAAg");
	this.shape_49.setTransform(-10.7,-24.6,0.712,0.712);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ABKAbQgOgDgXgKQgkgOgRAAQgGAAgjAKQgDABgCgBQgZAHgIgFQAFgEAOgIQAPgMAWgHQAVgIAPAAQAWABAgAaQAgAYALgFIACACQgDAHgJAAIgCAAIgIgBg");
	this.shape_50.setTransform(-8.3,-11.9,0.712,0.712);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLAMQgEgEgBgIQAAgGAFgGQAFgFAGAAIAFAAQAAABABAAQABABAAAAQABAAAAAAQABAAAAAAQALAHgDAOQAAADgDADQgFAGgJAAQgFAAgGgGg");
	this.shape_51.setTransform(-7.4,-9.2,0.712,0.712);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAhQgPgOAAgTQAAgRAPgOQANgOAVAAQATAAAPANIAMAOQACAEACAGIAAAIQAAARgPAOQgPAOgUABIAAAAQgUAAgOgNg");
	this.shape_52.setTransform(-7.6,-9.9,0.712,0.712);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgjAdQgXgUgJgfQACgNASgFQAOgFAVAAQA3gBAZAoQABAPgRAQQgPARgaAEIgIAAQgTAAgTgRg");
	this.shape_53.setTransform(-8.2,-9.5,0.712,0.712);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AJGhtQAXgMAEgBQAJgEAVABQAkAFAVAgQAZAogJA8QgIA4gpAWQgcATgmgDApKB8QgpAHgfgTQgqgVgLg3QgIg7AWgqQABgCADgBQAHgKAHgIQAngcArARQAEADAFABQAFADACAAQACACABAB");
	this.shape_54.setTransform(13.1,-13.9,0.712,0.712);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("ApIgqQgBgPAAgPIgChSQAAgqAGgpQAbhuA5hIQAcgoA2gfQBBglBCgWQArgJAsgIQCIgXCKAHQB/gDBzA0QCBA5BOB2QATApASBDQAKAkACApIAABSQAAAPAAAMQAAAHABAGQACBiANBoQACAUADAUIAFA7QAFEEl2A1Qg0AHgxAGQg0AIh7AAIhxgIQgggCgggDQl3gqgFkEIADg6QACgWAEgUApIgqQAAAGAAAEQACBigKBn");
	this.shape_55.setTransform(13.6,-17,0.712,0.712);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCC7A5").s().p("AqSBwQgqgVgLg3QgIg7AWgqIAEgDIAOgSQAngcArARIAJAEIAHADIADADIAAAKQACBigKBnQgKACgKAAQgdAAgXgOgAJVBqQgNhngChjIAAgNQAXgMAEgBQAJgEAVABQAkAFAVAgQAZAogJA8QgIA4gpAWQgYARghAAIgJgBg");
	this.shape_56.setTransform(13.1,-13.9,0.712,0.712);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FAD8AF").s().p("AidJAQgggCgggDQl3gqgFkEIADg6QACgWAEgUQAKhngChiIAAgKIgBgeIgChSQAAgqAGgpQAbhuA5hIQAcgoA2gfQBBglBCgWIBXgRQCIgXCKAHQB/gDBzA0QCBA5BOB2QATApASBDQAKAkACApIAABSIAAAbIABANQACBiANBoIAFAoIAFA7QAFEEl2A1IhlANQg0AIh7AAg");
	this.shape_57.setTransform(13.6,-17,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

	// 圖層 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399FF").s().p("AgLAeIAAg7IAXAAIAAA7g");
	this.shape_58.setTransform(15.4,38.2,2.144,3.014,0,0,0,0,-0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C68B53").s().p("ABRBoIADgCIhSgFIgChOIgJgCIgEBQIjNAEQgBgXgFgnIgJg9QgDgPAAgPIgBg9IADABIBNASQBMAPBRgGQA1gCAyACQBCgHBFgNQAAAvgEAwQgGBCgIA6g");
	this.shape_59.setTransform(16.3,86);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCC7A5").s().p("AgrBKQgVgFgTgNQgKgFgIgJIAHhvIDBgIIADBvIAAAAQgvAsg6AAQgTAAgVgEg");
	this.shape_60.setTransform(16.4,21);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399FF").s().p("AlOAWQgEgHgDgMQAHgJALgLQARgRAVgPIBIB3IgOA/QhHgqgkhFgADDArQAtggAigsQAIgHAEgIQAYAKAUAWQARAQgIAUQgGAZgTARQgqAogxAegAiIh1IAogNIAJAGQAIAKAJAEQAUANAVAFQBTATA9g7IABAAIAoAPIgcAcQgPAKgSAIQguAVgxgDIgNABQhOAAgthBg");
	this.shape_61.setTransform(15,37.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66FFFF").s().p("AiQD3IhNgSQgOgGgLgPIATjUIAOg/IhIh6ICVhDQAwBGBYgGQAxADAugVQASgIAPgKIAcgcICCBFQgEAIgIAHQgiAugtAgIAcBZQAIAiAKAjQAUBIABBLIgLAZQhFANhDAHQgxgCg2ACIgqABQg7AAg3gKg");
	this.shape_62.setTransform(15,51.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#542B01").s().p("AgaAXIgZgKIgPgKIgLgGIADgDQAJgGAEgJIArARQAXAEBFgWIABAAIAAgBIADABIgGAHIgHAJQgDAEgEACQgeAYgkAAIgSgBg");
	this.shape_63.setTransform(1.1,123.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7F8F3").s().p("AgkBEIgrgQQAHgXAEgbQAEgYgCguQASAfA1AMQAlAHAmgbQgFAUgEAiQgGAXgIARIAAABIgBAAQg4ATgbAAIgJgBg");
	this.shape_64.setTransform(2.9,115.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],500.7,292.9,0,500.7,292.9,70.7).s().p("AgJB6Qg2gNgSgfIgDgFIAAgGQACgCAAgEIAAgZIAAgUIADiKIArAKQAkAMAzAJIAiAGIgIBcQgDAdgEAZQgCAOAAALIAAACIgDANQgeAWgeAAIgOgBg");
	this.shape_65.setTransform(4.5,101.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#542B01").s().p("Ag5AAIgHgGIgHgJQgEgDgBgEIABgBIAAABIABAAQBFAWAYgEQAhgOAKgDQAEAJAJAGIACADIgKAGIgPAKIgaAKIgSABQgkAAgdgYg");
	this.shape_66.setTransform(31,123.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F7F8F3").s().p("Ag4AyIgBAAIAAgBQgIgRgGgXQgEgigEgUQAlAbAmgHQA0gMASgfQgBAuADAYQAEAbAIAXQgKADghANIgJABQgbAAg5gTg");
	this.shape_67.setTransform(29.2,115.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FED0B4","#FCC19C"],[0.208,1],-500.5,292.9,0,-500.5,292.9,70.6).s().p("Ag/BlIgDgNIAAgCIgEgZIgFg2IgIhcIAhgGQAygJAkgMIAsgKIADCKIAAAUIAAAZIABAGIAAAGIgCAFQgSAfg2ANIgOABQgeAAgdgWg");
	this.shape_68.setTransform(27.6,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).wait(16));

	// 圖層 5
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],106.8,-72.4,0,106.8,-72.4,55.7).s().p("Ah7BpQgwgCgYgeQgYgYAJgmQAGgkAlgRQASgLAfgCQgBgEgFgBQANgwAYADQAiACASAjIAMAYQAGALAGAEIBUgIQAogCAfgFIAXgGQAFAMAGATIAGAJQAQAhANAPQgOAFgUAQQgaAOhcAOQhbARgTABQgSgBgJABQgLABgNAAIgXgBg");
	this.shape_69.setTransform(-33.5,45.8,1,1,0,0,0,-1.8,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],-94.6,-88.6,0,-94.6,-88.6,55.8).s().p("ABuBqQgYgBgTgEIgcgFQgQgDhbgdQhZgbgWgUQgSgRgPgGQAQgOAWggQACgFAEgCQALgRAFgNQAJAGANAFQAfAIAnAJQAdAIA1AMIANgOQAGgKALgLQAXgiAhAEQAYACAFAuQgEADgBADQAeAHAPAPQAiAVACAjQACAmgcAYQgVAUgkAAIgUgCg");
	this.shape_70.setTransform(61.4,48.2,1,1,0,0,0,2.4,-0.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],115.5,-57.4,0,115.5,-57.4,55.7).s().p("Ag5BrIgbgDQgVAAgagGQgugIgVghQgVgbAOgiQALglAmgMQATgJAgACQgBgEgFgCQATguAXAGQAiAHAOAlQAGAOADALQAEALAGAFIBUADQAoADAfgBIAXgCQAEAMAEASIAFAJQAMAlALAQQgPADgWAOQgbALheACQhHAEgbAAIgNgBg");
	this.shape_71.setTransform(-13.9,43.8,1,1,0,0,0,18.4,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFEAD5","#FCC7A5"],[0.208,1],-114.8,-58.6,0,-114.8,-58.6,55.7).s().p("Ag1BpQhdgEgbgNQgWgMgQgEQAMgRANglQABgGADgDQAGgRABgNQALADAOABQAfABAogCQAeAAA2gDIAJgRQAEgLAHgNQAOgnAhgFQAYgEARArIgEAHQAfgBATALQAlALAMAjQAMAjgVAeQgTAfgzAGQgXAGgUABIgcACIgLABIhkgDg");
	this.shape_72.setTransform(42.1,42.9,1,1,0,0,0,-18.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_72},{t:this.shape_71}]},7).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-94.4,138.4,220.4);


(lib.免版影 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AztCeQg+AAgsgiQgtgjABgyIAAhNQgBgyAtgjQAsgiA+AAMAnbAAAQA+AAAsAiQAtAjAAAyIAABNQAAAygtAjQgsAig+AAg");
	this.shape.setTransform(145.7,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.094)").s().p("AztDGQhPAAg4gsQg8gwAAhDIAAhNQAAhDA8gwQA4gsBPAAMAnbAAAQBPAAA4AsQA8AwAABDIAABNQAABDg8AwQg4AshPAAgA1xiVQg7AuABBBIAABNQgBBBA7AuQA3AsBNAAMAnbAAAQBNAAA3gsQA6guAAhBIAAhNQAAhBg6guQg3grhNgBMgnbAAAQhNABg3Arg");
	this.shape_1.setTransform(145.7,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.196)").s().p("AztDCQhNgBg3grQg7guABhBIAAhNQgBhCA7guQA3grBNAAMAnbAAAQBNAAA3ArQA6AuAABCIAABNQAABBg6AuQg3ArhNABgA2mgmIAABNQAAA/A4AtQA2AqBLAAMAnbAAAQBLAAA1gqQA5gtAAg/IAAhNQAAhAg5gsIAAAAQg1gqhLAAMgnbAAAQhLAAg1AqIgBAAQg4AsAABAg");
	this.shape_2.setTransform(145.7,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.294)").s().p("AztC9QhLAAg2gqQg4gtAAg/IAAhNQAAhAA4gsIABAAQA1gqBLAAMAnbAAAQBLAAA1AqIAAAAQA5AsAABAIAABNQAAA/g5AtQg1AqhLAAgA2hgmIAABNQAAA9A3AsQA0ApBJAAMAnbAAAQBJAAA0gpQA3gsAAg9IAAhNQAAg+g3grIAAAAQg0gphJAAMgnbAAAQhJAAg0ApIAAAAQg3ArAAA+g");
	this.shape_3.setTransform(145.7,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.396)").s().p("AztC5QhJAAg0gpQg3gsAAg9IAAhNQAAg+A3grIAAAAQA0gpBJAAMAnbAAAQBJAAA0ApIAAAAQA3ArAAA+IAABNQAAA9g3AsQg0AphJAAgA2cgmIAABNQgBA7A2AqIAAAAQAzAoBHAAMAnbAAAQBHAAAzgoQA1gqAAg7IAAhNQAAg8g1gqQgzgnhHAAMgnbAAAQhHAAgzAnIAAAAQg2AqABA8g");
	this.shape_4.setTransform(145.7,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AztC0QhHAAgzgoIAAAAQg2gqABg7IAAhNQgBg8A2gqIAAAAQAzgnBHAAMAnbAAAQBHAAAzAnQA1AqAAA8IAABNQAAA7g1AqQgzAohHAAgA1kiIIAAAAQg0AoABA6IAABNQgBA5A0ApIAAAAQAyAnBFAAMAnbAAAQBFAAAygnIAAAAQAzgpAAg5IAAhNQAAg6gzgoIAAAAQgygnhFAAMgnbAAAQhFAAgyAng");
	this.shape_5.setTransform(145.7,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.596)").s().p("AztCwQhFAAgygnIAAAAQg0gpABg5IAAhNQgBg6A0goIAAAAQAygnBFAAMAnbAAAQBFAAAyAnIAAAAQA0AogBA6IAABNQABA5g0ApIAAAAQgyAnhFAAgA1giFIAAAAQgyAnAAA4IAABNQAAA3AyAoIAAAAQAwAmBDAAMAnbAAAQBEAAAwgmIAAAAQAygogBg3IAAhNQABg4gygnIAAAAQgwgmhEAAMgnbAAAIAAAAQhDAAgwAmg");
	this.shape_6.setTransform(145.7,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.698)").s().p("AztCsQhDAAgwgmIAAAAQgygoAAg3IAAhNQAAg4AygnIAAAAQAwgmBDAAMAnbAAAQBDAAAxAmIAAAAQAxAnAAA4IAABNQAAA3gxAoIAAAAQgxAmhDAAgA1eiCQgwAmABA2IAABNQgBA2AwAlQAvAlBCAAMAnbAAAQBCAAAvglQAwglgBg2IAAhNQABg2gwgmQgvgkhCAAMgnbAAAIAAAAQhCAAgvAkg");
	this.shape_7.setTransform(145.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.898)").s().p("AztCjQhAAAgtgkQgvglABgzIAAhNQgBg0AvgkQAtgkBAAAMAnbAAAQBAAAAtAkQAuAkAAA0IAABNQAAAzguAlQgtAkhAAAgA1Xh7QgtAjAAAyIAABNQAAAyAtAjQAsAiA+AAMAnbAAAQA+AAAsgiQAsgjAAgyIAAhNQAAgygsgjQgsgig+AAMgnbAAAIAAAAQg+AAgsAig");
	this.shape_8.setTransform(145.7,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.796)").s().p("AztCnQhCAAgvglQgwglABg2IAAhNQgBg2AwgmQAvgkBCAAMAnbAAAQBCAAAvAkQAwAmgBA2IAABNQABA2gwAlQgvAlhCAAgA1ah+QguAkAAA0IAABNQAAAzAuAlQAtAkBAAAMAnbAAAQBAAAAtgkQAvglgBgzIAAhNQABg0gvgkQgtgkhAAAMgnbAAAIAAAAQhAAAgtAkg");
	this.shape_9.setTransform(145.7,19.9);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,291.5,39.8);


(lib.全背景圖 = function() {
	this.initialize();

	// 圖層 4
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.手複製 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3C27A").s().p("AAUAiQAMgTgHgUQgIgVgUgOQgRgJgRAAIgGAAQANgFAPABQAPABAMAIIACABIAFAEQAQAMAGASQAHATgLAUQgHALgKAGQgLAGgLABQAOgGAIgOg");
	this.shape.setTransform(26.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE6B6").s().p("AAAA0QgcgIgRgVIABgBIgFgIQgFgCgEgHQgEgFgBgJQgBgMAFgIQAEgJAHAAQADgBADACQAKgLANgEQARAAAPAJQAWAOAIAVQAHAUgMAUQgIANgQAGQANgBALgGQAKgGAHgKQALgUgHgUQgGgSgQgMQASANAGATQAIATgMATQgMATgXAFIgLABIgLgBg");
	this.shape_1.setTransform(24.7,5.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.2,0.1,12.9,11.1);


(lib.元件150 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgNAJIgVgJIAZgHIAJgVIAOAUIAVAAIgSANIAJAVIgXgKIgVANg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-2.9,7,5.9);


(lib.元件146 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AgyAnIAOgdIAag3IABAAIACgGIADgEQAAgHAEgDIACgBQATADATgCQAMgCAAANQgBAKgKAFIgCABIgBABIgFADIgEAGIgvBaQgMAFgHAAQgRAAAEgcg");
	this.shape.setTransform(1,-0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,-7.7,10.4,13.6);


(lib.元件145 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AHLgLQAEAFABAGQgBAHgEAEQgEAFgGAAQgHAAgEgFQgEgEAAgHQAAgGAEgFQAEgEAHAAQAAAAABAAQAFAAAEAEgAnAgPQAGAAAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgFQgFgEABgHQgBgGAFgFQADgDAEgBQAAAAABAAIAAAAQABAAABAAg");
	this.shape.setTransform(1.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("ApYC2QgqkRCfhaIA5AAIOUAAQCLA6gWExg");
	this.shape_1.setTransform(0.2,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663399").s().p("AnhAWIgygrIQnAAIgoArIjpAAIAAgEQAEgCAAgEQAAgFgEgCQgFgDgGAAQgGAAgFADQgDACgBAFQAAAEAEACQAFADAGAAIAAABIhuAAIAAgEQAEgCABgEIAAgBQgBgEgEgCQgEgDgGAAQgGAAgFADQgEACAAAEIAAABQAAAEAEACQAFADAGAAIAAABIhoAAIAAgEQAFgCAAgEIAAgBQAAgEgFgCQgEgDgGAAQgGAAgFADQgDACAAAEIAAABQAAAEADACQAFADAGAAIAAABIhjAAIAAgEQAEgCAAgEIAAgBQAAgEgEgCQgEgDgHAAQgGAAgEADQgEACAAAEIAAABQAAAEAEACQAEADAGAAIAAABIhjAAIAAgEQAFgCAAgFIAAAAQAAgEgFgDQgEgCgGgBQgGABgEACQgEADAAAEIAAAAQAAAFAEACQAEADAGAAIAAABIhhAAIAAgDQAFgDAAgEQAAgEgFgDQgEgDgGAAQgGAAgFADQgDADAAAEQgBAEAEADQAFADAGAAIhhAAQAGAAADgDQAFgDAAgEIAAAAQAAgEgFgDQgEgDgGAAQgGAAgFADQgDADAAAEIAAAAQgBAEAEADQAFADAFAAIgNAAgAFmAEQgEADAAAEIAAAAQAAAFAEACQAEADAHAAQAGAAAEgDQAEgCAAgFIAAAAQAAgEgEgDQgEgCgGgBQgHABgEACg");
	this.shape_2.setTransform(0,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("ADmAyIAAAAQAGAAAFgDIAAADgABuAyIAAAAQAGAAAEgDIAAADgAgCAyIAAAAQAEAAAEgDIAAADgAhyAyIAAAAQAHAAAEgDIAAADgAjfAyIAAAAQAGAAAEgDIAAADgAlKAyQAHAAADgDIAAADgAG2gVQgEgEAAgHQAAgIAEgFQAEgEAHAAIAAAAQAGAAAEAEQAEAFABAIQgBAHgEAEQgEAGgGAAQgHAAgEgGgAnKgVQgFgEAAgHQAAgIAFgFQADgDAEgBIABAAIAAAAIACAAQAGAAAEAEQAFAFAAAIQAAAHgFAEQgEAGgGAAQgGAAgEgGg");
	this.shape_3.setTransform(1.8,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ak4A8QgGAAgFgDQgEgDABgEQAAgEADgDQAFgDAGAAQAGAAAEADQAFADAAAEQAAAFgFACQgDADgHAAgAmbA8QgFAAgFgDQgEgDABgEIAAAAQAAgEADgDQAFgDAGAAQAGAAAEADQAFADAAAEIAAAAQAAAEgFADQgDADgGAAgADtA5QgEgDAAgEQABgEADgDQAFgDAGAAQAGAAAFADQAEADAAAEQAAAEgEADQgFADgGAAQgGAAgFgDgAB1A5QgEgDAAgEIAAAAQAAgEAEgDQAFgDAGAAQAGAAAEADQAEADABAEIAAAAQgBAEgEADQgEADgGAAQgGAAgFgDgAADA5QgDgDAAgEIAAAAQAAgEADgDQAFgDAGAAQAGAAAEADQAFADAAAEIAAAAQAAAEgFADQgEADgGAAQgGAAgFgDgAhqA5QgEgDAAgEIAAAAQAAgEAEgDQAEgDAGAAQAHAAAEADQAEADAAAEIAAAAQAAAEgEADQgEADgHAAQgGAAgEgDgAFmA5QgEgDAAgEIAAgBQAAgEAEgCQAEgDAHAAQAGAAAEADQAEACAAAEIAAABQAAAEgEADQgEADgGAAQgHAAgEgDgAjXA5QgEgDAAgEIAAgBQAAgEAEgCQAEgDAGAAQAGAAAEADQAFACAAAEIAAABQAAAEgFADQgEADgGAAQgGAAgEgDgAoTAPIAAhKIQnAAIAABKgAHIgjQgEAFAAAIQAAAHAEAEQAEAGAHAAQAGAAAEgGQAEgEABgHQgBgIgEgFQgEgEgGAAIAAAAIAAAAQgHAAgEAEgAmxgnQgEABgDADQgFAFAAAIQAAAHAFAEQAEAGAGAAQAGAAAEgGQAFgEAAgHQAAgIgFgFQgEgEgGAAIgCAAIAAAAIgBAAg");
	this.shape_4.setTransform(0,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAAAEIABgHIgBAHg");
	this.shape_5.setTransform(-51.2,-17.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.7,-17.7,122.1,63.7);


(lib.小明話框 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#378701").s().p("EhAWAd0MAAAg7nMCAtAAAMAAAA7ng");

	// 圖層 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("EhBiAfSMAAAg+jMCDFAAAMAAAA+jg");
	this.shape_1.setTransform(0.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("EhELAjdMAAAhG5MCIXAAAMAAABG5gEhBaAfNMCDFAAAMAAAg+jMiDFAAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-436.3,-226.9,872.8,453.9);


(lib.下話框 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(8.3,1,1).p("AWFsEMgsJAAAQiSAAAABuIAANvQAABuCSAAIREAAIFaG+IF8m+IPvAAQCSAAAAhuIAAtvQAAhuiSAAg");
	this.shape.setTransform(155.9,92.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlAFHIxEAAQiSAAAAhuIAAtvQAAhuCSAAMAsJAAAQCSAAAABuIAANvQAABuiSAAIvvAAIl8G+g");
	this.shape_1.setTransform(155.9,92.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,15,311.9,154.8);


(lib.logo_area = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBGoIAAtQIODAAIAANQg");
	this.shape.setTransform(45,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,85);


(lib._101大樓 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC66FF").s().p("AhJBpQgagYgDgnIBKAAIAAAEQAAAOAJAHQAHAJAOAAQAgAAAAgTQAAgKgSgJQgBgCgqgVQgegPgNgMQgSgUAAgbQgBgfAagVQAYgVAnAAQAsAAAdAYQAZAVACAiIhIAAQgCgYgWAAQgKAAgHAFQgDAFAAAFQAAAKAWALIAfARQBBAfAAAxQAAAdgWAVQgbAbgxAAQgwAAgdgcg");
	this.shape.setTransform(20.6,315.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333CC").s().p("AAaB+Igch+IggB+Ig+AAIg6j7IBJAAQgBAFABAIIAVBtIAch6IA8AAIAcB9IAZhwIABgJIAAgEIBJAAIhED7g");
	this.shape_1.setTransform(22.2,279.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399FF").s().p("AhcBiQgfgjAAg/QAAg+AhgjQAigjA4AAQA6AAAhAjQAhAjAAA+QAAA+gfAlQgdAihAAAQg9AAgfgjgAglg1QgPAWAAAfQAAAgAPAWQAQAXAVAAQAXAAAQgXQAPgWAAggQAAgfgPgWQgQgXgXAAQgVAAgQAXg");
	this.shape_2.setTransform(21.8,242.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC00").s().p("AhtB+IABgNIAAjgIgBgOIBlAAQAwAAAkAlQAiAlAAAzQAAA0giAlQgkAlgwAAgAgqBAIAaAAQAWAAASgUQAOgSAAgaQAAgYgQgUQgRgSgRAAIgeAAg");
	this.shape_3.setTransform(22.6,204.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AAmB+IhNiDIAAB2IABANIhHAAIABgNIAAjuIBLAAIBLB/IAAhxQAAgIgCgGIBGAAIgBAOIAADtg");
	this.shape_4.setTransform(21.7,168.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgfB+QACgGAAgHIAAjgIgCgOIA/AAIgBAOIAADgIABANg");
	this.shape_5.setTransform(20.3,133.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAaB+Igch+IggB+Ig+AAIg6j7IBJAAQgBAGABAGIAVBuIAch6IA8AAIAcB9IAZhxIABgIIAAgEIBJAAIhED7g");
	this.shape_6.setTransform(22.2,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},60).wait(10));

	// 圖層 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhjSxIAAAAQgfgcgCgtQAAgEACgEIAAAAQACgEADgBQADgDAFAAIBAAAQgdgPgOgPIAAAAIgBAAQgWgZAAggQAAgmAfgaQAbgZAvAAQAxAAAgAcQAeAZACAoIAAAAQAAAEgCAEIAAABIgGAFIABAAQgEACgEAAIg5AAIACABIAAABQBKAlgBA5QAAAkgbAZIgCABQgeAfg1AAQg4AAghghgAgdRnIAAAEQAAAGADAEIACABQAEAEAJAAQALAAACgDQgCgDgFgDIAAgBIgEgCIgUgKIAAADgAgPP+IANAHIABAAIAAAAQgBgIgIAAIgFABgAAaNiQgFAAgEgDQgEgDgBgFIgPhEIgQBEQgBAFgEADQgFADgFAAIg+AAQgFAAgEgDQgEgDgBgFIg7j9IAAAAQgBgEABgEIABgCQABgDAEgDIAAAAQAEgDAEAAIBJAAQAFAAADADIABAAQADACACAEQACAEgBAEIAAABIAAAGIAIAqIAMg2QABgFAEgDIABAAQAEgEAFAAIA8AAQAFAAAEAEQAEACACAGIAAAAIANA6IAKguIABgBIAAgEIAAgEQAAgGAFgEQAEgFAGAAIBKAAQAEAAAEADIgBAAQAEACACAFIABABQABADgBAGIAAgBIhFD9QgBAFgEADIAAAAQgEADgFAAgAhuHTQgkgpAAhIQAAhJAmgoQAngpBCAAQBCAAAmApQAmAoAABJQAABIgjAqQgiAnhJAAQhIAAgjgogAglEuQgOAVAAAfQAAAfAOAVQAOAUAUAAQAUAAAOgUQAOgVAAgfQAAgfgOgVQgOgVgUABQgUgBgOAVgAhpB4QgFAAgDgCIgBAAQgDgDgCgEIAAABQgCgEABgFIAAAAIABgLIAAjgIgBgMIAAgBQgBgEACgDIAAAAQACgEAEgCQADgDAFAAIBlAAQA3AAAoAqIAAAAQAnApAAA6QAAA5gnAqIgBABQgoAog2AAgAgXAcIAMAAQAOAAANgOQAMgOAAgUQAAgSgMgPIgBgBQgMgOgLAAIgPAAgAAhjuQgEAAgDgCQgEgCgCgEIABAAIgyhWIAABCIABAKIAAAAQABAEgCAFQgCAEgDACIgBABQgDACgFAAIhHAAQgEAAgEgCIAAgBQgEgDgCgDQgCgFACgEIAAgKIAAjxQAAgFAFgFQAEgEAGAAIBMAAQAEAAADACIAAAAQADACACADIAvBTIAAg9IgBgKIABAAQgCgFACgEIAAgBQABgEAEgCIABgBQADgCAFAAIBGAAQAEAAAEACIAAABQAEACACAEQACAEgBAFQgCAFAAAGIAADuQAAAHgEAEIAAABQgFAEgGAAgAgxpNQgFAAgDgCIgBgBQgEgCgBgEIAAgBQgCgEACgFIgBABIABgKIAAjiIgBgKQgBgGACgDQACgEADgDIABAAQADgDAFAAIA+AAQAFAAADADQAEACACAEIAAAAQACADgBAEIAAABIgBAMIAADiIABALIAAAAQABAFgCADIAAAAQgCAEgDADIgBAAQgDACgFAAgABXu1Ig9AAQgFgBgEgDQgEgDgBgFIgPhDIgQBDQgBAFgEADQgEADgGABIg+AAQgFAAgEgEQgEgDgBgFIg7j9IAAABQgBgFABgEIABgBQABgEAEgCIAAgBQAEgCAEAAIBJAAQAFgBADADIABAAQADACACAEQACAEgBAFIAAAAIAAAHIAAAAIAIApIAMg1QACgGADgDIABAAQAEgEAFABIA8AAQAFgBAEAEQAEADACAFIAAAAIANA7IAKguIABgCIAAgDIAAgFQAAgGAFgEIAAAAQAEgEAGAAIBKAAQAFAAADADIgBgBQAFADABAEIABABQABAEgBAFIAAgBIhFD9QgBAFgEADIAAABQgEADgFAAIAAAAg");
	this.shape_7.setTransform(22.2,206.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},10).to({state:[]},60).wait(10));

	// 圖層 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdCCIAygNIgBAtIgxANgAgZBwIArgLIgCAsIgrANgAAlBgIAogLIgDAsIgnALgAhdAnIA0gMIgBAuIgzANgAgYAXIAugLIgCAtIgsAMgAApAHIAqgJIgDArIgqALgAhdgqIA1gNIgBAsIg0ALgAgVg8IAugLIgCAsIguAMgAAthNIArgLIgDAsIgqAMgAhdh9IA3gOIgBA1Ig2AOgAgTiQIAvgNIgBA1IgvANgAAxiiIAsgMIgCA1IgtAMg");
	this.shape_8.setTransform(60.1,494.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#899D95").s().p("AgqB1IgxANIAAgrIAygNIACguIg0AMIAAgnIA0gMIABgsIg1ANIAAgdIA2gOIABg2IASgFIAAA1IAugMIACg1IAVgGIgEA2IAtgNIgDAhIgrAMIgCAsIArgLIgCAqIgqAIIgDAtIApgKIgCAsIgpALIgCArIgTAGIACgtIgrAMIgCAtIgRAFgAgWAXIgBAuIAtgLIACgugAgTg7IgCAsIAugMIABgsg");
	this.shape_9.setTransform(60,494.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9CDC2").s().p("ABACZIgBg1Ig4gJIACA1IgVgDIgBg1IgwgJIACA0IgWgEIgDgzIgqgIIgCgcIArAIIgCgwIgsgIIgDgjIAuAIIgCgpIgvgIIgBgcIAvAHIgEg0IAZADIACA2IAxAJIgCg2IAVADIAAA2IA6AKIgBg3IAaAEIACA4IA0AHIABAeIg0gIIABApIAzAHIAAAhIgygHIABAvIAxAIIABAcIgxgIIABA1gAA/BIIgBgvIg7gJIADAvIA5AJgAgOA8IgCgwIgvgJIACAxIAvAIgAA9gIIgBgoIg7gLIABAqIA7AJgAgRgUIgBgrIgwgJIAAAqIAxAKg");
	this.shape_10.setTransform(21.1,495.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABdCeIgBg1IAxAIIAAA1gAALCQIgCg1IA4AJIABA1gAg5CDIgCg0IAwAJIABA1gAh5B3IgDgzIAqAIIADAzgABbBNIgBgvIAyAHIAAAwgAAIA/IgDgvIA7AJIABAvgAg7A0IgCgxIAvAJIACAwgAh+AoIgDgwIAsAIIACAwgABZgDIgBgpIA0AIIAAAogAAEgRIgBgqIA7ALIABAogAhAgeIAAgqIAwAJIABArgAiEgrIgDgpIAvAIIACApgABXhJIgCg4IA2AIIAAA3gAAChYIgBg2IA6AJIABA3gAhChkIgCg2IAxAJIACA2gAiIhwIgEg0IAvAHIAEA0g");
	this.shape_11.setTransform(20.9,495.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99A9AE").s().p("Ah+ARIDWgzIAnAGIj9A/g");
	this.shape_12.setTransform(60.4,476.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3CBD3").s().p("AgUgHIApgDIgBAQIgoAFg");
	this.shape_13.setTransform(45.5,479.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BDD9E3").s().p("AgTAHIAAgRIAnADIAAASg");
	this.shape_14.setTransform(41.3,479.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6E5ED").s().p("Ai+gXIAfgNIFcA2IACATg");
	this.shape_15.setTransform(20.3,476.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#899D95").s().p("Ah+iRID9hCIgtFoIjQA/g");
	this.shape_16.setTransform(60.4,494.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#99A9AE").s().p("AgUi1IApgFIAAFlIgpAQg");
	this.shape_17.setTransform(45.5,498.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_18.setTransform(41.4,498.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#81A093").s().p("AiYCbIgmlvIF9A9IAAFsg");
	this.shape_19.setTransform(20.3,495.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhcCBIAxgMIgBAtIgxAOgAgaBxIAsgMIgCAtIgrALgAAlBgIAngLIgDArIgmAMgAhcAnIAygLIAAAtIgyANgAgXAXIAsgLIgCAtIgrALgAAoAHIAqgIIgDAqIgoALgAhcgrIA0gNIgBAtIgzALgAgVg8IAugMIgCAtIgtALgAAthNIArgLIgDAsIgrALgAhch9IA1gOIgBA1Ig0AOgAgTiQIAwgMIgCA1IgwAMgAAxiiIAtgNIgEA2IgsAMg");
	this.shape_20.setTransform(60.1,458.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#899D95").s().p("AgpB2IgxAMIAAgsIAygMIAAgtIgyAKIAAgmIAzgMIABgsIg0ANIAAgdIA0gPIABg0IAUgFIgCA1IAvgNIADg1IAUgFIgDA0IArgMIgCAiIgqAKIgDAtIArgLIgDAqIgqAJIgBAtIAogLIgDArIgoALIgCAsIgSAGIACgsIgtALIgBAtIgQAFgAgVAYIgCAtIAsgMIACgtgAgTg7IgBAsIAtgLIABgtg");
	this.shape_21.setTransform(60,458.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A9CDC2").s().p("ABBCaIgCg1Ig4gKIABA1IgUgEIgCg1IgvgIIADA0IgXgEIgCg0IgrgIIgBgbIArAIIgDgwIgsgIIgCgjIAtAIIgCgpIgugJIgDgcIAwAJIgDg1IAYADIACA1IAyAJIgCg2IAUAEIABA2IA6AJIgBg2IAZAEIABA3IA1AIIAAAeIg0gJIADAqIAyAGIAAAiIgygIIABAvIAxAIIABAcIgxgHIACA1gAA/BJIgCgwIg5gKIACAwIA5AKgAgOA8IgBgwIgxgJIACAwIAwAJgAA9gHIgBgqIg6gKIABApIA6ALgAgQgVIgBgqIgygJIACAqIAxAJg");
	this.shape_22.setTransform(21.1,458.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABeCfIgDg2IAyAHIAAA1gAAJCRIgBg1IA4AJIADA2gAg4CDIgEgzIAwAIIACA0gAh4B4IgFg1IArAIIACA1gABaBNIgBgvIAzAIIAAAvgAAHBAIgBgwIA4AKIACAwgAg9A0IgCgxIAxAJIACAwgAh+AoIgDgvIAsAHIADAwgABZgCIgCgqIA0AJIABAngAAFgRIgBgpIA5AKIABAqgAhAgeIgBgpIAxAJIABApgAiEgqIgDgrIAuAJIACAqgABWhKIgBg3IA2AIIAAA3gAADhXIgDg2IA8AJIABA2gAhChkIgCg1IAxAIIACA2gAiJhxIgDg0IAwAIIACA1g");
	this.shape_23.setTransform(20.9,458.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99A9AE").s().p("Ah9ASIDUg1IAoAHIj8BAg");
	this.shape_24.setTransform(60.5,439.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3CBD3").s().p("AgUgGIApgEIgBAQIgoAFg");
	this.shape_25.setTransform(45.6,442.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BDD9E3").s().p("AgTAHIAAgRIAnAEIAAARg");
	this.shape_26.setTransform(41.3,442.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C6E5ED").s().p("Ai/gWIAggOIFcA1IADAUg");
	this.shape_27.setTransform(20.3,439.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#899D95").s().p("Ah+iRID9hBIgsFmIjRA/g");
	this.shape_28.setTransform(60.4,458);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#99A9AE").s().p("AgUi1IApgFIAAFkIgpARg");
	this.shape_29.setTransform(45.5,462.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#738B80").s().p("AgSCzIAAlsIAlADIAAFwg");
	this.shape_30.setTransform(41.4,462.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#81A093").s().p("AiYCaIgnluIF/A9IgBFsg");
	this.shape_31.setTransform(20.3,458.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhcCBIAygMIgBAtIgxANgAgaBxIAsgMIgCAsIgrANgAAlBgIAngLIgCAsIgnALgAhcAnIAygMIAAAuIgyANgAgXAXIAsgLIgCAtIgrAMgAAoAHIArgJIgDArIgpALgAhcgrIA0gMIgBAsIgzALgAgVg8IAugMIgCAsIgtAMgAAthNIArgLIgDAsIgqALgAhdh9IA2gOIgBA1Ig0AOgAgSiQIAvgNIgDA1IgvANgAAwiiIAugMIgEA1IgsAMg");
	this.shape_32.setTransform(60.1,421.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#899D95").s().p("AgpB1IgxANIAAgsIAxgNIABguIgyANIAAgoIAzgKIABgtIg0AMIAAgdIA0gNIABg1IAUgGIgCA1IAugMIAEg1IATgGIgCA2IArgMIgCAgIgrAMIgCArIArgLIgDArIgqAIIgBAtIAogLIgDAtIgoAKIgCAtIgTAEIACgsIgsAMIgBAtIgQAEgAgVAXIgCAuIAsgLIACgtgAgTg8IgBAsIAtgMIABgsg");
	this.shape_33.setTransform(60,421.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A9CDC2").s().p("ABBCaIgCg1Ig4gKIABA1IgTgDIgCg1IgwgJIADA1IgXgFIgCg0IgrgIIgBgbIArAIIgCgwIgtgIIgCgjIAtAIIgCgpIgugJIgCgcIAuAJIgBg1IAYAEIACA1IAxAJIgCg2IAUAEIACA2IA6AJIgCg2IAZADIACA3IA1AJIAAAeIg0gJIACApIAzAHIAAAiIgzgJIABAwIAyAHIAAAcIgxgHIADA1gAA+BJIgBgwIg4gKIABAxIA4AJgAgOA9IgBgxIgxgJIACAwIAwAKgAA8gHIAAgpIg5gKIABApIA4AKgAgQgVIgCgpIgwgKIABAqIAxAJg");
	this.shape_34.setTransform(21,422.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABeCeIgDg1IAxAHIABA2gAAJCQIgBg1IA4AKIACA1gAg5CEIgDg1IAwAJIACA1gAh5B3IgEg0IArAIIACA0gABaBNIgBgwIAzAJIAAAugAAHBAIgBgxIA4AKIABAwgAg9AzIgCgwIAxAJIABAxgAh+AoIgEgwIAtAIIACAwgABZgDIgCgpIA0AJIABAngAAFgRIgBgpIA5AKIAAApgAhAgeIgBgqIAwAKIACApgAiEgrIgDgqIAuAJIACApgABWhKIgCg3IA2AIIABA4gAADhXIgDg2IA7AJIACA2gAhChkIgCg1IAxAIIACA2gAiJhxIgDg0IAwAIIABA1g");
	this.shape_35.setTransform(20.9,422.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#99A9AE").s().p("Ah9ASIDUg1IAoAHIj8BAg");
	this.shape_36.setTransform(60.5,403.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B3CBD3").s().p("AgUgHIApgDIgCAQIgnAFg");
	this.shape_37.setTransform(45.6,406.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BDD9E3").s().p("AgTAHIAAgSIAnAFIAAASg");
	this.shape_38.setTransform(41.3,406.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C6E5ED").s().p("Ai/gXIAggNIFcA1IADAUg");
	this.shape_39.setTransform(20.3,403.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#899D95").s().p("Ah/iQID/hCIgtFmIjRA/g");
	this.shape_40.setTransform(60.4,421.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99A9AE").s().p("AgUi1IAogFIABFjIgpASg");
	this.shape_41.setTransform(45.5,425.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_42.setTransform(41.5,425.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A9IAAFsg");
	this.shape_43.setTransform(20.3,422.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhdCCIAxgNIAAAtIgxANgAgaBxIArgNIgCAtIgqANgAAlBhIAngMIgDAsIgmALgAhdAoIAzgNIgBAuIgyAOgAgXAXIAtgLIgDAtIgsAMgAApAHIAqgJIgEAsIgoAKgAhdgrIA2gMIgBAsIg1ALgAgVg8IAugMIgBAtIguALgAAthMIArgMIgCAsIgrAMgAhdh9IA3gOIgBA1Ig2AOgAgSiQIAvgNIgDA2IguAMgAAxiiIAtgMIgEA1IgrAMg");
	this.shape_44.setTransform(60.1,385.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#899D95").s().p("AgqB2IgxAMIAAgrIAygNIABguIgzAMIAAgnIA1gMIABgsIg2ANIAAgdIA2gPIABg1IAUgEIgCA0IAugMIADg2IAUgEIgCA0IArgMIgCAiIgrALIgCAsIArgLIgDApIgqAKIgCAtIAogLIgDArIgnAMIgCArIgUAGIACgtIgrAMIgBAtIgRAFgAgVAXIgCAuIAsgMIADgtgAgTg7IgBAsIAugLIABgtg");
	this.shape_45.setTransform(59.9,385.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A9CDC2").s().p("ABACZIgBg1Ig5gIIACA0IgTgEIgCg0IgwgJIACA0IgWgEIgDg0IgqgHIgBgcIAqAIIgBgwIgtgIIgCgjIAtAIIgBgpIgvgJIgCgbIAvAHIgCg0IAYAEIACA1IAxAJIgBg2IATAEIACA2IA6AJIgCg3IAZAEIACA3IA1AIIAAAfIg0gJIABApIAzAHIABAiIgzgIIABAvIAyAIIAAAcIgxgIIACA1gAA+BIIgBgvIg5gJIACAwIA4AIgAgOA8IgBgwIgwgJIABAxIAwAIgAA9gHIgBgpIg5gLIABAqIA5AKgAgQgUIgCgqIgwgJIACAoIAwALg");
	this.shape_46.setTransform(21,385.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABdCeIgCg1IAxAIIABA1gAAJCQIgCg0IA5AIIABA1gAg6CDIgCg0IAwAJIACA0gAh6B3IgDgzIAqAHIADA0gABaBNIgBgvIAzAIIAAAvgAAHBAIgCgwIA5AJIABAvgAg9A0IgBgxIAwAJIABAwgAh+AoIgEgwIAtAIIABAwgABYgDIgBgpIA0AJIAAAngAAFgRIgBgqIA5ALIABApgAg/gfIgCgoIAwAJIACAqgAiEgrIgDgqIAvAJIABApgABWhKIgCg3IA2AIIABA3gAADhXIgCg2IA6AIIACA3gAhChkIgCg1IAyAIIABA2gAiJhwIgDg1IAwAIIACA0g");
	this.shape_47.setTransform(20.9,385.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#99A9AE").s().p("Ah+ASIDVg0IAnAGIj8BAg");
	this.shape_48.setTransform(60.5,366.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B3CBD3").s().p("AgUgHIApgDIgCARIgnAEg");
	this.shape_49.setTransform(45.6,369.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BDD9E3").s().p("AgUAHIAAgRIApADIAAASg");
	this.shape_50.setTransform(41.3,369.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6E5ED").s().p("Ai/gXIAhgNIFbA1IADAUg");
	this.shape_51.setTransform(20.3,366.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#899D95").s().p("Ah+iQID+hCIguFnIjRA/g");
	this.shape_52.setTransform(60.4,385.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#99A9AE").s().p("AgTi2IAogEIgBFkIgoARg");
	this.shape_53.setTransform(45.5,389.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAEIAAFxg");
	this.shape_54.setTransform(41.5,389.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A+IAAFrg");
	this.shape_55.setTransform(20.3,385.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhdCCIAxgMIgBAsIgwANgAgaBwIArgKIgCAsIgqAMgAAlBgIAogLIgDAsIgnALgAhdAnIA0gMIgCAuIgyANgAgXAXIAtgLIgCAtIgtAMgAApAIIAqgJIgEArIgoAKgAhdgqIA1gNIAAAsIg1ALgAgVg8IAugLIgCAsIgtAMgAAshNIAsgLIgCAsIgsAMgAhdh9IA3gOIgBA1Ig2AOgAgUiQIAwgNIgCA1IguANgAAxiiIAtgMIgEA1IgrAMg");
	this.shape_56.setTransform(60.2,349.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#899D95").s().p("AgqB2IgxAMIAAgsIAygMIACguIg0AMIAAgnIA1gMIAAgsIg1ANIAAgeIA2gNIABg1IASgGIAAA1IAugMIACg1IAVgGIgCA1IArgMIgCAiIgsALIgCAsIAsgMIgDArIgqAJIgCAsIAogKIgCAsIgoAKIgCAsIgUAHIACgtIgrAKIgBAuIgSAFgAgVAXIgCAuIAtgLIACgugAgTg7IgBAsIAtgMIACgsg");
	this.shape_57.setTransform(60,349.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A9CDC2").s().p("ABACZIgBg0Ig4gKIACA1IgUgEIgCg0IgwgJIACA0IgVgEIgEg0IgqgIIgBgbIAqAHIgCgvIgsgIIgCgjIAtAJIgCgqIgugJIgCgcIAvAIIgDg0IAZADIACA2IAxAJIgBg2IATADIABA2IA5AKIgBg3IAaADIACA4IA1AIIAAAfIg0gJIABAqIAzAFIAAAiIgygHIACAvIAxAHIAAAcIgxgIIABA2gAA/BJIgBgwIg6gJIACAwIA5AJgAgOA8IgCgxIgvgIIACAxIAvAIgAA9gHIgBgqIg7gJIACApIA6AKgAgRgVIgBgpIgwgKIACAqIAvAJg");
	this.shape_58.setTransform(21.1,349.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABdCeIgBg2IAxAIIAAA2gAAKCQIgCg0IA5AJIABA1gAg5CDIgCg0IAwAJIABA0gAh5B3IgEg0IArAJIADA0gABbBNIgCgvIAzAIIABAvgAAHBAIgBgwIA5AJIABAxgAg8A0IgCgxIAvAJIADAwgAh+AoIgDgwIAsAIIACAwgABYgCIgBgqIA1AJIAAAngAAFgRIgCgpIA6AKIABAqgAg/geIgBgqIAvAKIABApgAiEgqIgDgqIAuAIIACAqgABXhKIgCg3IA2AIIABA3gAADhXIgCg2IA6AIIABA3gAhBhkIgCg2IAxAJIABA2gAiIhwIgFg1IAxAIIACA1g");
	this.shape_59.setTransform(20.9,349.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#99A9AE").s().p("Ah+ASIDVg1IAnAHIj8BAg");
	this.shape_60.setTransform(60.5,330.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3CBD3").s().p("AgUgGIApgEIgCAQIgnAFg");
	this.shape_61.setTransform(45.6,333.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BDD9E3").s().p("AgUAHIAAgRIApAEIAAARg");
	this.shape_62.setTransform(41.3,333.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C6E5ED").s().p("Ai/gXIAhgNIFbA2IADATg");
	this.shape_63.setTransform(20.3,330.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#899D95").s().p("Ah+iRID9hBIgtFmIjQA/g");
	this.shape_64.setTransform(60.4,348.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#99A9AE").s().p("AgTi1IAngFIAAFkIgnARg");
	this.shape_65.setTransform(45.5,353);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_66.setTransform(41.5,353);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A9IAAFsg");
	this.shape_67.setTransform(20.3,349.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhdCBIAygMIgBAtIgxANgAgaBxIAsgMIgCAtIgrALgAAlBgIAogMIgDAsIgoALgAhdAnIA0gLIgBAtIgzANgAgYAXIAugMIgCAuIgtALgAApAHIAqgJIgDArIgpAMgAhdgrIA1gMIgBArIg0AMgAgVg8IAugMIgBAtIguALgAAthNIArgLIgCAsIgrAMgAhdh9IA3gOIgBA0Ig2APgAgTiQIAwgNIgDA1IguAOgAAxiiIAtgNIgEA1IgsAMg");
	this.shape_68.setTransform(60.1,313);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#899D95").s().p("AgqB2IgxAMIAAgrIAygNIACgtIg0ALIAAgnIA0gMIABgrIg1AMIAAgdIA2gPIABg0IASgFIAAA2IAugOIADg1IAUgFIgEA0IAtgMIgCAiIgsALIgCAtIAsgMIgDAqIgqAJIgCAuIAogMIgCArIgoAMIgDArIgTAHIACgtIgrAMIgBAsIgSAFgAgWAYIgBAtIAtgLIACgugAgTg7IgBAsIAtgLIACgtg");
	this.shape_69.setTransform(60,312.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A9CDC2").s().p("ABACaIgBg1Ig4gKIACA1IgVgEIgBg0IgwgJIACA1IgWgFIgDg0IgqgIIgCgbIArAIIgCgwIgsgIIgCgjIAtAIIgCgpIgugJIgCgcIAvAJIgDg1IAYADIADA1IAxAKIgDg2IAVADIAAA2IA6AKIgBg3IAaAEIACA3IA0AJIABAdIg0gIIABApIAzAGIAAAiIgygIIACAwIAxAHIAAAcIgxgHIABA1gAA/BJIgBgwIg6gKIACAwIA5AKgAgOA8IgCgwIgvgJIACAwIAvAJgAA9gHIgBgqIg7gJIACApIA6AKgAgRgVIgBgqIgwgJIABAqIAwAJg");
	this.shape_70.setTransform(21.1,313.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ABdCeIgBg1IAxAHIAAA2gAAKCQIgCg1IA5AKIABA1gAg5CEIgCg1IAwAJIABA0gAh5B3IgEg0IArAIIACA0gABbBNIgBgwIAyAIIABAvgAAHA/IgBgwIA5AKIABAwgAg8AzIgCgwIAwAJIACAwgAh+AoIgDgwIAsAIIACAwgABZgDIgBgpIA0AIIAAAngAAFgRIgCgpIA6AJIABAqgAg/geIgBgqIAwAJIABAqgAiDgrIgDgqIAtAJIACApgABXhKIgCg3IA2AIIAAA4gAAChYIgBg2IA6AJIABA3gAhBhlIgDg1IAxAJIACA2gAiIhxIgEg0IAwAIIACA1g");
	this.shape_71.setTransform(20.9,313.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#99A9AE").s().p("Ah9ARIDVg0IAnAHIj9BAg");
	this.shape_72.setTransform(60.5,294.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B3CBD3").s().p("AgUgGIAqgEIgDARIgnAEg");
	this.shape_73.setTransform(45.7,297.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BDD9E3").s().p("AgUAIIAAgSIApAEIAAARg");
	this.shape_74.setTransform(41.4,297.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C6E5ED").s().p("Ai+gWIAfgOIFcA1IACAUg");
	this.shape_75.setTransform(20.3,294.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#899D95").s().p("Ah/iQID/hCIguFmIjRA/g");
	this.shape_76.setTransform(60.4,312.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#99A9AE").s().p("AgTi2IAngEIAAFkIgnARg");
	this.shape_77.setTransform(45.5,316.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#738B80").s().p("AgSCzIgBltIAnAEIAAFxg");
	this.shape_78.setTransform(41.5,316.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#81A093").s().p("AiZCbIgmlvIF+A9IABFsg");
	this.shape_79.setTransform(20.3,313.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhcCBIAxgMIgBAtIgwANgAgaBwIAsgLIgCAtIgsALgAAkBfIApgKIgDArIgoAMgAhcAnIAzgMIgBAvIgyALgAgXAXIAtgLIgCAuIgtALgAApAHIAqgJIgDArIgpALgAhcgrIA0gNIgBAtIgzALgAgUg8IAsgMIgBAsIgtAMgAAthMIAqgMIgCArIgqAMgAhch9IA2gOIgBA2Ig1AMgAgTiQIAwgNIgDA2IguAMgAAxiiIAtgMIgEA1IgsAMg");
	this.shape_80.setTransform(60.2,276.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#899D95").s().p("AgpB1IgyAMIAAgrIAygMIABgvIgzANIAAgoIAzgKIABgtIg0AMIAAgdIA1gNIABg2IAUgEIgCA1IAvgNIACg1IAUgFIgDA1IAtgNIgDAhIgqAMIgCArIApgLIgCArIgqAJIgCAtIAqgLIgEAsIgoAKIgCAtIgSAFIACgtIgsAMIgCAtIgQAEgAgWAYIgBAuIAsgMIACgugAgTg8IgCAsIAtgLIACgsg");
	this.shape_81.setTransform(60,276.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A9CDC2").s().p("ABBCaIgDg1Ig4gKIACA2IgUgFIgBg0IgvgIIACA0IgYgFIgCg0IgrgIIgBgbIAsAIIgCgwIgtgHIgDgkIAtAJIgCgqIgugJIgBgcIAuAJIgCg1IAYAEIACA1IAxAJIgCg1IAVACIABA2IA6AKIgBg2IAZADIACA3IA0AJIABAeIg0gJIABAqIAzAGIAAAhIgygHIAAAvIAzAHIAAAcIgygHIADA1gAA+BJIgBgwIg4gJIAAAwIA5AJgAgOA8IgCgwIgwgJIACAxIAwAIgAA8gHIgBgqIg5gJIABApIA5AKgAgRgVIgBgpIgwgKIABAqIAwAJg");
	this.shape_82.setTransform(21.1,277.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ABeCeIgDg1IAyAHIAAA2gAAKCQIgCg1IA4AJIADA2gAg4CEIgCg0IAvAIIABA0gAh4B3IgFg0IArAIIACA0gABaBNIAAgwIAyAIIABAvgAAHBAIAAgwIA4AJIABAwgAg8A0IgCgyIAwAKIACAwgAh+AoIgDgwIAtAIIACAwgABZgCIgBgqIA0AJIAAAngAAFgRIgBgqIA5AKIABAqgAg/geIgBgqIAwAKIABApgAiEgrIgDgqIAuAIIACArgABXhKIgCg3IA2AIIAAA4gAADhYIgDg2IA8AJIABA2gAhChkIgCg1IAxAJIACA1gAiIhxIgEg0IAwAHIACA2g");
	this.shape_83.setTransform(20.9,277.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#99A9AE").s().p("Ah+ASIDVg1IAoAHIj9BAg");
	this.shape_84.setTransform(60.5,258.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B3CBD3").s().p("AgUgGIApgEIgBAQIgoAFg");
	this.shape_85.setTransform(45.6,261.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BDD9E3").s().p("AgTAIIAAgSIAnAEIAAARg");
	this.shape_86.setTransform(41.3,261.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C6E5ED").s().p("Ai/gXIAggNIFcA1IADAUg");
	this.shape_87.setTransform(20.3,258.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#899D95").s().p("Ah+iRID+hBIguFmIjRA/g");
	this.shape_88.setTransform(60.4,276.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#99A9AE").s().p("AgUi1IApgFIgBFkIgnARg");
	this.shape_89.setTransform(45.5,280.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#738B80").s().p("AgSCyIAAlrIAlADIAAFwg");
	this.shape_90.setTransform(41.5,280.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A9IAAFsg");
	this.shape_91.setTransform(20.3,277.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhcCBIAxgMIgBAtIgwANgAgbBxIAtgMIgCAsIgsANgAAkBgIAogLIgCAsIgoALgAhcAnIAygMIAAAuIgyANgAgXAXIAsgLIgCAtIgsAMgAAoAHIAqgJIgDArIgoALgAhcgqIA0gNIgBAsIgzALgAgVg8IAtgLIgBArIgtAMgAAthNIAqgLIgCAsIgrALgAhch9IA1gOIgBA1Ig0AOgAgTiQIAwgNIgDA1IguANgAAxiiIAtgMIgFA1IgrAMg");
	this.shape_92.setTransform(60.2,240.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#899D95").s().p("AgpB1IgxAMIAAgrIAygNIAAgtIgyALIAAgmIAzgMIABgsIg0ANIAAgdIA0gPIABg1IAUgFIgBA2IAugOIADg1IAUgEIgDA1IArgNIgCAiIgqAKIgDAsIArgLIgDAqIgqAJIgBAuIAogMIgDAsIgoALIgCAsIgSAFIACgsIgtAMIgBAtIgQAFgAgVAXIgCAvIAsgNIACgtgAgTg8IgBAsIAtgLIABgsg");
	this.shape_93.setTransform(60,240.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A9CDC2").s().p("ABBCaIgCg1Ig4gJIABA0IgUgDIgCg1IgugJIACA1IgXgFIgCg0IgrgHIgBgcIArAIIgDgwIgsgIIgCgjIAtAIIgCgpIgugJIgDgcIAwAJIgDg1IAYAEIACA1IAyAJIgCg2IAUAEIABA2IA6AJIgBg2IAZADIABA3IA1AJIAAAeIg0gJIADApIAyAHIAAAiIgxgJIAAAwIAxAHIABAdIgxgIIACA1gAA/BJIgCgwIg5gKIACAxIA5AJgAgOA9IgBgxIgxgJIACAwIAwAKgAA9gHIgBgpIg6gKIABApIA6AKgAgQgVIgBgpIgygKIADAqIAwAJg");
	this.shape_94.setTransform(21.1,241);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ABeCeIgDg1IAyAIIAAA1gAAJCQIgBg0IA4AJIADA1gAg4CEIgCg1IAuAJIACA1gAh4B3IgFgzIArAHIACA0gABaBNIAAgwIAyAJIAAAugAAHBAIgBgxIA4AKIACAwgAg9AzIgCgwIAxAJIACAxgAh+AoIgDgwIAsAIIADAwgABZgDIgCgpIA0AJIABAngAAFgRIgBgpIA5AKIABApgAg/geIgCgqIAxAKIABApgAiEgrIgDgqIAuAJIACApgABWhKIgBg3IA2AIIAAA4gAADhXIgDg2IA8AJIABA2gAhChkIgCg1IAxAIIACA2gAiJhxIgDg0IAwAIIACA1g");
	this.shape_95.setTransform(20.9,241);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#99A9AE").s().p("Ah9ARIDUg0IAoAHIj8BAg");
	this.shape_96.setTransform(60.5,222);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B3CBD3").s().p("AgUgHIApgDIgBAQIgoAFg");
	this.shape_97.setTransform(45.6,224.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BDD9E3").s().p("AgTAHIAAgSIAnAFIAAASg");
	this.shape_98.setTransform(41.3,224.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C6E5ED").s().p("Ai/gXIAggNIFcA1IADAUg");
	this.shape_99.setTransform(20.3,221.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#899D95").s().p("Ah+iQID9hCIgtFmIjQA/g");
	this.shape_100.setTransform(60.4,240.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#99A9AE").s().p("AgUi1IApgFIAAFkIgpARg");
	this.shape_101.setTransform(45.5,244.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_102.setTransform(41.5,244.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A9IAAFsg");
	this.shape_103.setTransform(20.3,240.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhdCCIAygNIgBAtIgxANgAgbBwIAsgLIgCAtIgrAMgAAkBfIAogKIgDAsIgnALgAhcAnIAygMIgBAvIgyAMgAgXAXIAsgLIgCAtIgsAMgAAoAHIAqgJIgDArIgpALgAhcgqIA0gOIgBAtIgzALgAgVg7IAugNIgCAsIgtANgAAshMIAsgMIgDArIgrANgAhch9IA1gOIgBA2Ig0ANgAgTiQIAwgMIgDA1IguAMgAAwiiIAugMIgEA1IgsAMg");
	this.shape_104.setTransform(60.2,204.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#899D95").s().p("AgpB1IgyAOIAAgsIAygNIABgvIgyANIAAgoIAzgKIABgtIg0ANIAAgdIA0gOIABg2IAUgEIgBA1IAugNIADg1IATgFIgCA1IAsgNIgCAhIgsAMIgCAsIArgMIgDArIgqAJIgCAtIApgLIgDAsIgoAKIgCAtIgTAFIACgtIgsAMIgBAuIgQADgAgVAYIgCAuIAsgMIACgugAgTg7IgBAsIAtgMIACgsg");
	this.shape_105.setTransform(60,204.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A9CDC2").s().p("ABACaIgBg2Ig4gIIABA0IgUgDIgCg1IgvgJIACA0IgWgEIgCgzIgrgIIgBgcIAqAIIgCgwIgsgIIgCgjIAtAIIgBgpIgvgJIgCgcIAvAJIgDg1IAZAEIACA1IAyAJIgCg2IATAEIABA2IA7AJIgCg3IAZAEIACA4IA1AHIAAAfIg0gJIACApIAzAHIgBAiIgxgIIAAAvIAxAIIAAAcIgwgIIACA1gAA+BJIAAgvIg6gKIACAwIA4AJgAgPA8IAAgwIgwgKIABAyIAvAIgAA9gHIgBgpIg6gLIABAqIA6AKgAgQgVIgBgpIgxgJIACApIAwAJg");
	this.shape_106.setTransform(21.1,204.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ABdCdIgCg1IAxAIIABA1gAAJCQIgBg0IA4AIIABA2gAg6CDIgCg0IAwAJIACA0gAh6B3IgDg0IArAIIACA0gABaBMIAAguIAyAIIAAAvgAAHBAIgBgxIA5AKIAAAwgAg9A0IgBgyIAwAKIABAwgAh+AoIgEgwIAtAIIABAwgABZgDIgCgpIA0AIIABAngAAFgRIgBgqIA5ALIABApgAg/gfIgCgpIAxAJIABApgAiEgrIgDgqIAvAJIACApgABWhKIgCg4IA2AJIABA3gAADhXIgCg2IA6AIIACA3gAhChlIgCg1IAyAJIACA2gAiJhxIgDg0IAwAIIACA1g");
	this.shape_107.setTransform(20.9,204.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#99A9AE").s().p("Ah+ARIDVgzIAnAGIj8A/g");
	this.shape_108.setTransform(60.5,185.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B3CBD3").s().p("AgUgHIApgDIgCAQIgnAFg");
	this.shape_109.setTransform(45.6,188.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BDD9E3").s().p("AgTAHIAAgRIAnADIAAASg");
	this.shape_110.setTransform(41.4,188.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C6E5ED").s().p("Ai/gXIAggNIFcA2IADATg");
	this.shape_111.setTransform(20.3,185.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#899D95").s().p("Ah+iRID9hCIgtFoIjQA/g");
	this.shape_112.setTransform(60.4,204);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#99A9AE").s().p("AgTi1IAngFIABFlIgpAQg");
	this.shape_113.setTransform(45.5,208.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_114.setTransform(41.5,208.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#81A093").s().p("AiYCbIgnlvIF/A9IgBFsg");
	this.shape_115.setTransform(20.3,204.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhcCCIAwgNIAAAtIgwANgAgaBxIArgLIgCArIgqANgAAlBhIAogMIgDAsIgnALgAhdAnIA0gMIgCAuIgxANgAgXAXIAtgLIgCAtIgtAMgAApAIIAqgKIgEAsIgoAKgAhdgqIA2gNIgBAsIg1ALgAgVg8IAugLIgCAsIgtAMgAAshNIAsgLIgCAtIgsALgAhdh9IA3gOIgBA1Ig2AOgAgTiQIAwgNIgDA1IguANgAAxiiIAtgMIgEA1IgrAMg");
	this.shape_116.setTransform(60.2,168.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#899D95").s().p("AgqB1IgwANIAAgsIAxgNIACgtIg0ALIAAgmIA1gMIABgsIg2ANIAAgdIA2gPIABg1IATgFIgBA2IAugOIADg1IAUgEIgCA1IArgNIgCAiIgsAKIgCAtIAsgLIgDApIgqAKIgCAtIAogLIgCArIgoAMIgCArIgUAFIACgrIgrALIgBAtIgRAFgAgVAXIgCAvIAtgNIACgtgAgTg8IgBAtIAtgLIACgtg");
	this.shape_117.setTransform(60,168.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A9CDC2").s().p("ABACZIgBg1Ig4gJIACA0IgUgDIgCg0IgwgKIACA1IgVgFIgEgzIgpgIIgCgbIAqAHIgCgvIgsgJIgCgiIAtAIIgBgpIgvgJIgCgcIAvAIIgDg0IAZADIACA1IAxAJIgBg2IATAEIABA2IA7AJIgCg2IAZADIACA4IA1AIIAAAeIg0gJIABAqIAzAGIABAiIgzgIIACAvIAxAIIAAAcIgxgIIACA2gAA/BIIgBgvIg6gKIADAwIA4AJgAgOA8IgBgxIgwgIIACAwIAvAJgAA9gIIgBgpIg6gKIABApIA6AKgAgQgVIgBgqIgxgJIACAqIAwAJg");
	this.shape_118.setTransform(21.1,168.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("ABeCfIgCg2IAwAHIABA2gAAKCQIgCg0IA5AIIABA1gAg5CDIgCg0IAvAJIACA0gAh5B3IgDg0IAqAIIADA0gABbBNIgCgvIAzAIIAAAvgAAIBAIgCgwIA5AJIABAvgAg8A0IgCgxIAwAIIABAxgAh+ApIgEgxIAtAIIACAvgABYgCIgBgqIA0AJIAAAngAAFgRIgBgqIA5ALIABAogAg/geIgCgqIAxAKIABApgAiEgrIgDgqIAvAJIABAqgABWhKIgCg3IA2AHIABA4gAADhYIgCg2IA6AJIACA3gAhChkIgCg1IAyAIIABA2gAiJhwIgDg1IAwAIIACA0g");
	this.shape_119.setTransform(20.9,168.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#99A9AE").s().p("Ah+ASIDVg0IAnAFIj8BBg");
	this.shape_120.setTransform(60.5,149.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B3CBD3").s().p("AgUgGIApgEIgCAQIgnAFg");
	this.shape_121.setTransform(45.6,152.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BDD9E3").s().p("AgUAHIAAgRIApAEIAAARg");
	this.shape_122.setTransform(41.3,152.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C6E5ED").s().p("Ai/gXIAhgNIFbA2IADATg");
	this.shape_123.setTransform(20.3,149.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#899D95").s().p("Ah+iQID9hDIgtFoIjQA/g");
	this.shape_124.setTransform(60.4,167.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#99A9AE").s().p("AgTi1IAngFIAAFkIgnARg");
	this.shape_125.setTransform(45.5,171.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#738B80").s().p("AgSCyIAAlsIAlAFIAAFwg");
	this.shape_126.setTransform(41.5,171.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#81A093").s().p("AiXCbIgolvIF/A9IAAFsg");
	this.shape_127.setTransform(20.3,168.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AhdB8IAxgMIgBAtIgwAMgAgaBrIArgKIgCAsIgqALgAAlBcIAngJIgDApIgmALgAhdAiIAzgKIgBAtIgyALgAgXATIAsgJIgCAsIgsALgAAoAGIAqgHIgDApIgoAKgAhdguIA0gLIAAArIg0ALgAgVg+IAugJIgCArIgtAKgAAshLIAsgKIgDAqIgrAKgAhdiAIA3gMIgCA1Ig1ALgAgTiQIAvgKIgCA0IguALgAAxifIAtgKIgEA0IgsAKg");
	this.shape_128.setTransform(60.2,132.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#899D95").s().p("AgqByIgxAMIAAgsIAygLIACgtIg0AKIAAglIA1gLIAAgsIg1ALIAAgdIA2gLIABg1IATgEIgBA0IAugLIADgzIAUgFIgCA0IArgKIgCAgIgsAJIgCArIAsgKIgDApIgqAIIgCArIAogJIgCArIgoAJIgCArIgUAFIACgrIgrAKIgBAtIgSAEgAgVAVIgCAuIAtgLIACgsgAgTg8IgBArIAtgKIACgqg");
	this.shape_129.setTransform(60,132.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A9CDC2").s().p("ABACVIgBg1Ig4gHIACAzIgUgDIgCgzIgwgJIACA0IgVgFIgEgyIgqgHIgBgaIAqAGIgCgvIgsgGIgCgiIAtAHIgCgpIgugHIgCgbIAvAHIgCg0IAYAEIACAzIAxAIIgBg1IATADIABA1IA5AIIAAg2IAZADIACA3IA1AHIAAAdIg0gHIABAoIAzAGIAAAhIgygHIACAvIAxAHIAAAcIgxgHIABA1gAA/BFIgBguIg6gJIACAvIA5AIgAgOA6IgBgvIgwgIIACAvIAvAIgAA9gKIgBgoIg6gJIABApIA6AIgAgRgVIAAgpIgxgIIACAoIAvAJg");
	this.shape_130.setTransform(21.1,132.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("ABcCXIgBg0IAxAFIABAzgAAKCMIgCgzIA4AHIABAzgAg6CCIgCgyIAwAGIACAygAh6B4IgCgxIApAFIAEAygABbBIIgCguIAyAGIABAtgAAHA+IgCguIA6AHIABAugAg8A1IgCgvIAwAHIABAugAh+AsIgEguIAsAEIACAwgABYgGIgBgmIA0AGIAAAmgAAEgQIgCgoIA7AIIABAogAg/gaIgCgpIAxAIIAAAogAiEglIgDgoIAuAHIACAogABWhKIgCg1IA2AGIABA2gAAChVIgBgzIA6AGIAAA1gAhChfIgCgyIAxAFIACA1gAiJhoIgDgyIAwAFIACA0g");
	this.shape_131.setTransform(21,132.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#99A9AE").s().p("Ah9AMIDVgpIAnAJIj8Ayg");
	this.shape_132.setTransform(60.6,113.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B3CBD3").s().p("AgUgHIApgCIgCAQIgnADg");
	this.shape_133.setTransform(45.7,116.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BDD9E3").s().p("AgUAIIAAgSIApAEIAAARg");
	this.shape_134.setTransform(41.4,116.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C6E5ED").s().p("Ai/gPIAhgOIFbAnIADAUg");
	this.shape_135.setTransform(20.3,113.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#899D95").s().p("Ah+iWID+g1IguFaIjRA9g");
	this.shape_136.setTransform(60.4,132.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99A9AE").s().p("AgTi2IAngDIAAFiIgnARg");
	this.shape_137.setTransform(45.6,135.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#738B80").s().p("AgSCxIAAlqIAlADIAAFwg");
	this.shape_138.setTransform(41.5,135.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#81A093").s().p("AiZCWIgmliIF/AvIAAFqg");
	this.shape_139.setTransform(20.3,132.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhcBvIAxgGIgBAtIgwAGgAgaBoIAsgFIgCAqIgrAHgAAmBgIAngEIgDAqIgoAFgAhcAWIAzgFIgBAuIgyAFgAgXAQIAtgDIgCAsIgtAEgAApALIAqgEIgDArIgoAEgAhcg8IA0gDIgBAsIgzADgAgUhBIAtgDIgBAqIgtAFgAAthGIArgDIgCArIgrADgAhciOIA2gDIgBA0Ig1AEgAgTiTIAwgDIgDAzIguADgAAxiYIAtgDIgEAyIgsAFg");
	this.shape_140.setTransform(60.2,95.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#899D95").s().p("AgpBrIgyAFIAAgrIAygFIABgtIgzAEIAAglIAzgEIABgsIg0AEIAAgdIA1gFIABg0IAUgCIgBA0IAugDIACg0IAUgBIgDAzIAtgEIgCAgIgrADIgCAqIAqgDIgDAmIgqADIgBAsIApgFIgEAqIgnAFIgDAqIgSADIACgrIgsAFIgBAsIgRACgAgWARIgBAtIAsgEIACgsgAgThAIgBAsIAugEIABgrg");
	this.shape_141.setTransform(60,95.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A9CDC2").s().p("ABBCTIgBg3Ig6gEIACA1IgUgCIgBg2IgvgEIACAzIgXgCIgDg0IgqgDIgCgaIAsACIgCgvIgtgEIgCgfIAsACIgCgpIgtgCIgCgbIAuACIgBg0IAYAAIACA1IAwABIgCg2IAVAAIABA3IA6ACIgBg5IAZAAIACA5IA0ACIABAhIg0gDIABAqIAzAEIAAAiIgygEIABAyIAyADIAAAeIgwgEIABA3gAA+BAIgBgyIg4gDIAAAwIA5AFgAgOA6IgCgyIgwgDIACAwIAwAFgAA8gTIgBgrIg5gDIACArIA4ADgAgRgYIgBgpIgwgDIABAoIAwAEg");
	this.shape_142.setTransform(21.1,95.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("ABdCUIgBg3IAxADIAAA5gAAKCLIgCg1IA5ADIABA3gAg5CCIgCg0IAwAEIABA2gAh5B7IgDgzIAqAEIADAzgABbA/IgBgxIAyADIABAygAAHA5IgBgxIA5AEIABAxgAg8AzIgCgwIAwADIACAxgAh+AuIgDgvIAsACIACAwgABZgUIgBgrIA0ADIAAArgAAFgZIgCgqIA6ADIABArgAg/geIgBgpIAwAEIABAogAiDgiIgDgoIAtACIACApgABXheIgCg6IA2AAIAAA8gAAChhIgBg3IA7AAIAAA6gAhBhjIgCg1IAwAAIACA2gAiIhlIgEgzIAwAAIACA0g");
	this.shape_143.setTransform(20.9,96.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#899D95").s().p("Ah8DEIAAmKID5ABIgmGMg");
	this.shape_144.setTransform(60.4,96);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#99A9AE").s().p("AgTDFIAAmJIAnAAIAAGJg");
	this.shape_145.setTransform(45.8,95.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#738B80").s().p("AgWDFIAAmJIAtAAIAAGJg");
	this.shape_146.setTransform(41.5,95.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#81A093").s().p("AiVDGIgomMIF7ABIAAGMg");
	this.shape_147.setTransform(20.4,95.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#99A9AE").s().p("AkHAYIAAgwIIPABIAAAwg");
	this.shape_148.setTransform(36.5,73.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#738B80").s().p("AhEAxIABhhICIABIgNBgg");
	this.shape_149.setTransform(46.9,66.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#81A093").s().p("AhJAxIgUhhIC7AAIAABhg");
	this.shape_150.setTransform(30.6,66.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#859899").s().p("AgqhuIBVAAIgWDbIhAACg");
	this.shape_151.setTransform(44.4,51.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#96AEB0").s().p("AgjBvIghjcICJgBIgBDdg");
	this.shape_152.setTransform(33.1,51.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8EA69E").s().p("AgnAwIgBheIBRAAIgXBeg");
	this.shape_153.setTransform(44,35.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A4C6BB").s().p("AhBgvICBAAIACBeIhqACg");
	this.shape_154.setTransform(33.4,35.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#859899").s().p("AgSAoIAAhPIAlAAIAABPg");
	this.shape_155.setTransform(40.8,27.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#96AEB0").s().p("AgggnIBBAAIAABOIg8ABg");
	this.shape_156.setTransform(35.6,27.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#8EA69E").s().p("AgLASIgfgjIBVAAIgcAjg");
	this.shape_157.setTransform(37.5,21.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8EA69E").s().p("AAADgIABm3IgGgFIgIgCQAIgBAFABQAGACAIAFIgBG3g");
	this.shape_158.setTransform(38.4,-2.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A4C6BB").s().p("AgWDgIAAm1IAEgDQAFgEAGgBQAHgCAGABQAJAAAIAGIgBG4g");
	this.shape_159.setTransform(37.5,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-24.6,72.3,542);


(lib.星星亮燈動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape.setTransform(0.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAIBxQgIgGABgJIAAgRIgqAAQgMAAgGgIQgIgGABgMQAAgKAEgNIA5iFQAFgRAVAAQALAAAHAHQAJAHAAANIAAB+QAJAAAFAGQAGAHAAAJQAAAKgGAGQgFAIgJAAIAAARQgBAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIANAAIAAgng");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAIBxQgHgGgBgJIAAgRIgpAAQgMAAgHgIQgGgGgBgMQABgKAFgNIA4iFQAFgRAUAAQALAAAIAHQAIAHAAANIAAB+QAKAAAGAGQAEAHAAAJQAAAKgEAGQgGAIgKAAIAAARQAAAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIAMAAIAAgng");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgvBhQgOgRgBgXQAAgOAHgHQAIgIAKABQAIAAAHAEQAHAFABAKQADAYALAAQAOAAAAgcQABgQgIgGQgFgFgIABQgLgBgHgHQgGgHAAgIQAAgKAHgHQAFgHAMAAQAHAAAEgEQAEgFABgNQAAgMgCgDQgCgFgGAAQgHAAgEATQgBAJgGAFQgGAEgIABQgMAAgHgIQgIgIABgNQAHg4A0AAQAbAAAPAWQAOASAAAcQAAAbgOARQAUASAAAhQAAAegOAUQgRAYggAAQgdAAgSgWg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AguBhQgQgRAAgXQAAgOAIgHQAHgIAKABQAJAAAFAEQAIAFABAKQAEAYAKAAQAPAAAAgcQgBgQgGgGQgGgFgJABQgLgBgGgHQgGgHAAgIQAAgKAGgHQAHgHAKAAQAIAAAFgEQAEgFgBgNQABgMgBgDQgDgFgGAAQgIAAgCATQgCAJgGAFQgGAEgJABQgKAAgJgIQgHgIABgNQAGg4A0AAQAcAAAQAWQANASAAAcQAAAbgNARQATASAAAhQAAAegOAUQgQAYghAAQgdAAgRgWg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape.setTransform(0.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape_1.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAABxQgGgGAAgLIAAiOQgFACgEAAQgLAAgHgHQgHgHAAgKQAAgLAKgJIAdgWQAIgIALABQAXgBAAAcIAAC6QAAALgIAGQgGAGgLgBQgJABgHgGg");
	this.shape.setTransform(-0.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAABxQgGgGAAgLIAAiOQgFACgFAAQgKAAgHgHQgHgHAAgKQAAgLALgJIAdgWQAHgIALABQAXgBAAAcIAAC6QAAALgHAGQgIAGgJgBQgLABgGgGg");
	this.shape_1.setTransform(-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.播放標題面板 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(2,1,1).p("ASvAsIAAhYQAAg1glgmQgkgmgzABMghlAAAQgzgBgkAmQglAmAAA1IAABYQAAA1AlAmQAkAmAzAAMAhlAAAQAzAAAkgmQAlgmAAg1g");
	this.shape.setTransform(119.9,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F2EAA6","#F9F9D2","#FFFFFF","#FDFCCE","#ECDB46"],[0,0.114,0.192,0.376,1],0,-17.3,0,17.4).s().p("AwxCtQg0AAgkgmQglgmAAg1IAAhYQAAg1AlgmQAkgmA0ABMAhkAAAQAygBAlAmQAlAmgBA1IAABYQABA1glAmQglAmgyAAg");
	this.shape_1.setTransform(119.9,17.4);

	// 圖層 2
	this.instance = new lib.免版影();
	this.instance.setTransform(121.6,20.4,0.835,1,0,0,0,145.7,19.9);
	this.instance.alpha = 0.57;

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243.4,40.2);


(lib.圓輪上木架 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA2600").ss(1,1,1).p("AMhAAIAAAIQgFFHjnDpQjsDrlLAAIgJAAQlIgEjojnQjojpgElHIAAgIQAAlMDsjrQDojpFIgDIAJAAQFLAADsDsQDrDrABFMgANGAAIAAAKQgFFUjxDyQj2D1laABIgIAAQlVgFjyjxQjzjygDlUIAAgKQAAlaD2j1QDyjyFVgEIAIAAQFaAAD2D2QD1D1ABFag");
	this.shape.setTransform(-0.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D57500").s().p("AgINGQlVgFjxjxQjzjygElUIAAgKQAAlaD3j1QDxjyFVgEIAIAAQFaAAD1D2QD1D1ACFaIAAAKQgFFUjyDyQj1D1laABgAo6o3QjtDrABFMIAAAIQADFHDpDpQDnDnFIAEIAJAAQFKAADsjrQDojpAElHIAAgIQAAlMjsjrQjsjslKAAIgJAAQlIADjnDpg");
	this.shape_1.setTransform(-0.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AA2600").ss(1,1,1).p("ATBgCIAAAMQgFHvlgFhQllFmn4ABIgPAAQnvgGlhlhQlglhgGnvIAAgMQAAn6FmllQFhlhHvgFIAPAAQH4AAFlFmQFlFlAAH6gAN6t5QFxFxAAIIIAAAQQgGH/lrFsQlwFwoJAAIgPAAQoAgFlrlrQlslsgFn/IAAgQQAAoIFxlxQFrlsIAgFIAPAAQIJAAFwFxg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D57500").s().p("AgOTrQoAgFlrlsQlslrgFn/IAAgQQAAoIFxlxQFrlsIAgFIAOAAQIKAAFwFxQFxFxAAIIIAAAQQgGH/lrFrQlwFxoKAAgAtgtgQllFlgBH5IAAALQAGHwFgFhQFhFhHvAFIAPAAQH4gBFlllQFflhAGnwIAAgLQAAn5llllQlllnn4AAIgPAAQnvAGlhFhg");

	this.instance = new lib.木架棒("synched",0);
	this.instance.setTransform(-1.2,-0.5,1.126,1.96);

	this.instance_1 = new lib.木架棒("synched",0);
	this.instance_1.setTransform(-1.2,-0.5,1.126,1.96,-71.9);

	this.instance_2 = new lib.木架棒("synched",0);
	this.instance_2.setTransform(-1.2,-0.5,1.126,1.96,-143.9);

	this.instance_3 = new lib.木架棒("synched",0);
	this.instance_3.setTransform(-1.2,-0.5,1.126,1.96,144);

	this.instance_4 = new lib.木架棒("synched",0);
	this.instance_4.setTransform(-1.2,-0.5,1.126,1.96,72);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.8,-125.9,251.8,251.9);


(lib.球車藍 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.玻璃("synched",0);
	this.instance.setTransform(0.1,-23.6,4.8,4.8);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(0.8,1,1).p("Anpg+QASikB5h5QCQiTDOAAIBeAHQCQAbBwBxQB6B5AQCkIAEA9QAADOiOCQQiACAivANIgvAFQjOAAiQiSQiSiQAFjOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AleCFQiSiPAFjOIACg+QASCnB5B6QCQCSDOAAIAvAAQCvgSCAiAQB6h6AQinIAEA+QAADOiOCPQiAB/ivAOIgvAFQjOAAiQiSg");
	this.shape_1.setTransform(0,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AAAGyQjMAAiRiSQh5h8gSilQASikB5h5QCRiTDMAAIBfAHQCQAbBwBxQB6B5AQCkQgQClh6B8Qh/CAiwASg");
	this.shape_2.setTransform(0,-6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-49.4,98.6,99);


(lib.球車橘 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.玻璃("synched",0);
	this.instance.setTransform(0.1,-23.6,4.8,4.8);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(0.8,1,1).p("Anpg+QASikB5h5QCQiTDOAAIBeAHQCQAbBwBxQB6B5AQCkIAEA9QAADOiOCQQiACAivANIgvAFQjOAAiQiSQiSiQAFjOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AleCFQiSiPAFjOIACg+QASCnB5B6QCQCSDOAAIAvAAQCvgSCAiAQB6h6AQinIAEA+QAADOiOCPQiAB/ivAOIgvAFQjOAAiQiSg");
	this.shape_1.setTransform(0,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAAGyQjMAAiRiSQh5h8gSilQASikB5h5QCRiTDMAAIBfAHQCQAbBwBxQB6B5AQCkQgQClh6B8Qh/CAiwASg");
	this.shape_2.setTransform(0,-6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-49.4,98.6,99);


(lib.球車綠 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.玻璃("synched",0);
	this.instance.setTransform(0.1,-23.6,4.8,4.8);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999900").ss(0.8,1,1).p("Anpg+QASikB5h5QCQiTDOAAIBeAHQCQAbBwBxQB6B5AQCkIAEA9QAADOiOCQQiACAivANIgvAFQjOAAiQiSQiSiQAFjOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC00").s().p("AleCFQiSiPAFjOIACg+QASCnB5B6QCQCSDOAAIAvAAQCvgSCAiAQB6h6AQinIAEA+QAADOiOCPQiAB/ivAOIgvAFQjOAAiQiSg");
	this.shape_1.setTransform(0,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF00").s().p("AAAGyQjMAAiRiSQh5h8gSilQASikB5h5QCRiTDMAAIBfAHQCQAbBwBxQB6B5AQCkQgQClh6B8Qh/CAiwASg");
	this.shape_2.setTransform(0,-6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-49.4,98.6,99);


(lib.球車紫 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.玻璃("synched",0);
	this.instance.setTransform(0.1,-23.6,4.8,4.8);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9900CC").ss(0.8,1,1).p("Anpg+QASikB5h5QCQiTDOAAIBeAHQCQAbBwBxQB6B5AQCkIAEA9QAADOiOCQQiACAivANIgvAFQjOAAiQiSQiSiQAFjOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933CC").s().p("AleCFQiSiPAFjOIACg+QASCnB5B6QCQCSDOAAIAvAAQCvgSCAiAQB6h6AQinIAEA+QAADOiOCPQiAB/ivAOIgvAFQjOAAiQiSg");
	this.shape_1.setTransform(0,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9966CC").s().p("AAAGyQjMAAiRiSQh5h8gSilQASikB5h5QCRiTDMAAIBfAHQCQAbBwBxQB6B5AQCkQgQClh6B8Qh/CAiwASg");
	this.shape_2.setTransform(0,-6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-49.4,98.6,99);


(lib.球車粉 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.玻璃("synched",0);
	this.instance.setTransform(0.1,-23.6,4.8,4.8);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00CC").ss(0.8,1,1).p("Anpg+QASikB5h5QCQiTDOAAIBeAHQCQAbBwBxQB6B5AQCkIAEA9QAADOiOCQQiACAivANIgvAFQjOAAiQiSQiSiQAFjOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF66CC").s().p("AAAGyQjMAAiRiSQh5h8gSilQASikB5h5QCRiTDMAAIBfAHQCQAbBwBxQB6B5AQCkQgQClh6B8Qh/CAiwASg");
	this.shape_1.setTransform(0,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF33CC").s().p("AleCFQiSiPAFjOIACg+QASCnB5B6QCQCSDOAAIAvAAQCvgSCAiAQB6h6AQinIAEA+QAADOiOCPQiAB/ivAOIgvAFQjOAAiQiSg");
	this.shape_2.setTransform(0,21.6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-49.4,98.6,99);


(lib.煙火6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.煙火7("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:92.7,x:13,alpha:0.803},0).wait(1).to({rotation:183.7,x:25.8,alpha:0.609},0).wait(1).to({rotation:272.8,x:38.4,alpha:0.505},0).wait(1).to({rotation:360,x:50.7,alpha:0.45},0).wait(1).to({rotation:445.5,x:62.7,alpha:0.397},0).wait(1).to({rotation:529.2,x:74.5,alpha:0.344},0).wait(1).to({rotation:611.2,x:86,alpha:0.293},0).wait(1).to({rotation:691.2,x:97.3,alpha:0.243},0).wait(1).to({rotation:769.5,x:108.3,alpha:0.194},0).wait(1).to({rotation:846,x:119.1,alpha:0.146},0).wait(1).to({rotation:920.8,x:129.6,alpha:0.1},0).wait(1).to({rotation:993.6,x:139.8,alpha:0.054},0).wait(1).to({rotation:1064.8,x:149.8,alpha:0.01},0).wait(1).to({rotation:1080,x:152,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,-2.9,6,6);


(lib.雲3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件3("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,76.4,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0.8},0).wait(1).to({y:1.6},0).wait(1).to({y:2.3},0).wait(1).to({y:3.1},0).wait(1).to({y:3.8},0).wait(1).to({y:4.6},0).wait(1).to({y:5.4},0).wait(1).to({y:6.1},0).wait(1).to({y:6.9},0).wait(1).to({y:7.6},0).wait(1).to({y:8.4},0).wait(1).to({y:9.2},0).wait(1).to({y:9.9},0).wait(1).to({y:10.7},0).wait(1).to({y:11.4},0).wait(1).to({y:12.2},0).wait(1).to({y:13},0).wait(1).to({y:13.7},0).wait(1).to({y:14.5},0).wait(1).to({y:15.2},0).wait(1).to({y:16},0).wait(1).to({y:16.8},0).wait(1).to({y:17.5},0).wait(1).to({y:18.3},0).wait(1).to({y:19},0).wait(1).to({y:19.8},0).wait(1).to({y:20.5},0).wait(1).to({y:21.3},0).wait(1).to({y:22.1},0).wait(1).to({y:22.8},0).wait(1).to({y:23.6},0).wait(1).to({y:24.3},0).wait(1).to({y:25.1},0).wait(1).to({y:25.9},0).wait(1).to({y:26.6},0).wait(1).to({y:27.4},0).wait(1).to({y:28.1},0).wait(1).to({y:28.9},0).wait(1).to({y:29.7},0).wait(1).to({y:30.4},0).wait(1).to({y:31.2},0).wait(1).to({y:31.9},0).wait(1).to({y:32.7},0).wait(1).to({y:33.5},0).wait(1).to({y:34.2},0).wait(1).to({y:35},0).wait(1).to({y:35.7},0).wait(1).to({y:36.5},0).wait(1).to({y:37.2},0).wait(1).to({y:35.6},0).wait(1).to({y:33.9},0).wait(1).to({y:32.2},0).wait(1).to({y:30.5},0).wait(1).to({y:28.8},0).wait(1).to({y:27.1},0).wait(1).to({y:25.4},0).wait(1).to({y:23.7},0).wait(1).to({y:22},0).wait(1).to({y:20.3},0).wait(1).to({y:18.6},0).wait(1).to({y:17},0).wait(1).to({y:15.3},0).wait(1).to({y:13.6},0).wait(1).to({y:11.9},0).wait(1).to({y:10.2},0).wait(1).to({y:8.5},0).wait(1).to({y:6.8},0).wait(1).to({y:5.1},0).wait(1).to({y:3.4},0).wait(1).to({y:1.7},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-43.7,152.9,110.2);


(lib.雲2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件2("synched",0);
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,57,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30,y:0.5},0).wait(1).to({y:0.9},0).wait(1).to({y:1.4},0).wait(1).to({y:1.8},0).wait(1).to({y:2.3},0).wait(1).to({y:2.8},0).wait(1).to({y:3.2},0).wait(1).to({y:3.7},0).wait(1).to({y:4.2},0).wait(1).to({y:4.6},0).wait(1).to({y:5.1},0).wait(1).to({y:5.5},0).wait(1).to({y:6},0).wait(1).to({y:6.5},0).wait(1).to({y:6.9},0).wait(1).to({y:7.4},0).wait(1).to({y:7.8},0).wait(1).to({y:8.3},0).wait(1).to({y:8.8},0).wait(1).to({y:9.2},0).wait(1).to({y:9.7},0).wait(1).to({y:10.2},0).wait(1).to({y:10.6},0).wait(1).to({y:11.1},0).wait(1).to({y:11.5},0).wait(1).to({y:12},0).wait(1).to({y:12.5},0).wait(1).to({y:12.9},0).wait(1).to({y:13.4},0).wait(1).to({y:13.8},0).wait(1).to({y:14.3},0).wait(1).to({y:14.8},0).wait(1).to({y:15.2},0).wait(1).to({y:15.7},0).wait(1).to({y:16.1},0).wait(1).to({y:14.8},0).wait(1).to({y:13.5},0).wait(1).to({y:12.1},0).wait(1).to({y:10.8},0).wait(1).to({y:9.4},0).wait(1).to({y:8.1},0).wait(1).to({y:6.7},0).wait(1).to({y:5.4},0).wait(1).to({y:4},0).wait(1).to({y:2.7},0).wait(1).to({y:1.3},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-23.1,114,60.1);


(lib.雲1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件1("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,30.7,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:21,y:-0.2},0).wait(1).to({y:-0.7},0).wait(1).to({y:-1.2},0).wait(1).to({y:-1.7},0).wait(1).to({y:-2.2},0).wait(1).to({y:-2.8},0).wait(1).to({y:-3.3},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.5},0).wait(1).to({y:-5.1},0).wait(1).to({y:-5.7},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.6},0).wait(1).to({y:-8.2},0).wait(1).to({y:-8.9},0).wait(1).to({y:-9.5},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10.9},0).wait(1).to({y:-11.6},0).wait(1).to({y:-12.4},0).wait(1).to({y:-13.1},0).wait(1).to({y:-12.8},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.8},0).wait(1).to({y:-9.8},0).wait(1).to({y:-8.7},0).wait(1).to({y:-7.6},0).wait(1).to({y:-6.5},0).wait(1).to({y:-5.4},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2},0).wait(1).to({y:-0.9},0).wait(1).to({y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-29.4,61.4,41.9);


(lib.彩球動 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.彩球();
	this.instance.setTransform(25.5,39.6,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:0.82,y:44.1},4).to({scaleX:1,scaleY:1,y:39.6},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,65.1);


(lib.草莓妹妹開頭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB5372").s().p("AhpgrIDTALQAAACgNAYQgNAXgWAbQgsgegeAIQgeAHgPAPQgWgcgWg7g");
	this.shape.setTransform(-12.4,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B090").s().p("Ag7gEQAPgQAfgHQAcgHAtAdQgZAcgfAGIgHABQgbAAgdgig");
	this.shape_1.setTransform(-12.6,66.1);

	this.instance = new lib.紅暈();
	this.instance.setTransform(16.8,55.4,0.895,0.895,-2.7,0,0,9,4.4);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-41.9,50.5,0.895,0.895,-2.7,0,0,8.8,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAAAAAg");
	this.shape_2.setTransform(13.8,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBDAC8").s().p("AAAAAIABAAIAAAAgAAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(13.3,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBDCD9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(8.2,-17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8C589").s().p("AgfAHIgBgHIADgEQAFgNANgEQALgEAMAGQAJAEAHAJQADAFACAGIAAAAIgLgFQgOgFgMAFQgPAIgDAQQgIgGgBgLg");
	this.shape_5.setTransform(-13.7,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#471600").s().p("AlwFGIgJgIQgGgGgCgGQhFhbADhsQADgjAJgiQAYhGBAgrQA4gpBGgFIgdgaQgDgVAIgPQAHgTAMgQQANgTATgOQAVgQAYgLQA4gcA/gQQAjgKAnAAQA+gDA4AgIA+AjQAzAbAygSQgDAIgDAHQgIAOgRAHIAAABQAPAJAPAKQAoAeAdAqQAfApAMAzQAIAgADAgQAFAggBAjQAFAiABAkIgOBNQgOAtgWAsQAAg4gQhAQgMgxgrh+QgNAUgXASQgrAlgkgJIgIgCQARgNADgIQADgCAGgZQAGgUgBgZQABgTgFgRQg6BNhvAtQhvAvhagQQAkgpAIgXQAGgXAAgFQABgOgEgUQg2BDhJA0QhKA1hRAVQgLAtAEAjQAAAHAKA6IgFgHg");
	this.shape_6.setTransform(-11.1,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F2900").s().p("AGMF4IgCADIAEgrQAQgsAIgsQAJgnAGgmQAEglABgiQABgjgFggQgEghgHgfQgMgygfgqQgegqgngeIgfgSIABgCQARgHAIgNQADgIACgIQgxASgzgbQgegPghgUQg3ggg/ADQglAAgkAKQg/ARg4AbQgZALgUARQgTAOgNASQgMAQgHATQgIAPADAVIAcAaQhFAGg4ApQg7AqgSBGQgJAigDAjQgJBsBABbQACAGAFAFQgRgPgLgDQgPgEgSAFQgjhQgIhiQgCgnABgnQABgmAGgkQASg1AugyQAlgsAngSIAIgDQBEh3CKgxQCJgwCPAmQA1APBXBFQAKACAhAfQAhAeACAIQBABBAXBxIAaByQAMA6gOA8QgQA7gaAzQgVAmgaApQAFgNgCADg");
	this.shape_7.setTransform(-10.5,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AALAgQgsgDAEgnQABgYAUACQADAAACADQADAJAEAIQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAHAGQATANgCALQgBALgKAAIgIgBg");
	this.shape_8.setTransform(5.5,45.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAdQgJgBgHgKQgHgJAAgKQACgLAIgIQAJgJAIABQAKAAAIALQAIAJgCAJQgBAMgKAIQgHAJgJAAIgBgBg");
	this.shape_9.setTransform(10.3,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBcQgegCgSgeQgTgdAEgkQADglAYgaQAWgbAdAEQAfACARAeQATAegFAkQgDAlgXAZQgVAXgaAAIgEAAgAgvAbQgEApAuADQAPAHACgQQACgLgRgPIgIgHIgBgDQgGgIgDgJQgCgDgEAAIgEgBQgPAAgBAWgAALgqQgIAHgDALQABANAHAJQAHAIAJABQALABAIgIQAKgHABgMQACgLgIgJQgIgLgJgBIgBAAQgKAAgJAJg");
	this.shape_10.setTransform(7.3,41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AALAfQgsgEAEgmQADgYARADQADAAAEACQACAKAEAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACADAFAEQASANgBAKQgBAMgJAAQgEAAgFgCg");
	this.shape_11.setTransform(-32.1,42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBAdQgLAAgHgKQgHgKABgLQACgKAHgHQAKgKAIABQAKABAHAKQAIAJgCAKQAAAMgLAIQgGAHgIAAIgBAAg");
	this.shape_12.setTransform(-27.4,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBcQgegDgSgeQgTgcAEgkQAEgmAWgZQAYgbAbAEQAgACASAeQASAegEAjQgEAngXAZQgWAXgYAAIgFgBgAgvAbQgEAoAuAEQARAHAAgRQACgKgQgPQgGgEgCgDQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgGgIgCgKQgDgCgDAAIgEAAQgPAAgCAVgAALgqQgIAHgCALQgBANAHAJQAHAIALAAQAKACAIgIQAKgHAAgNQADgKgIgKQgIgKgKgBIgCAAQgJAAgIAJg");
	this.shape_13.setTransform(-30.3,38.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSgWQA8gYAnAYQgGgDgyADQgzAEg2A1QAOgkAwgVg");
	this.shape_14.setTransform(-31.9,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABQAdQhGg0gtACQgoABgIAEQAggXAzANQAhAMAfAaQAWAUgCAAIgEgDg");
	this.shape_15.setTransform(10.5,25.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBD9B1").s().p("AALBpQgWgCgRgWQgEgJgHgIIgBgDQgDgDgBgGQgNgdACgZQAHhAAXgaQACgCACgBQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIgBABIAAABIALgDQALgBAJABIAKAEIABABQARAIAHAVQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABIgBAGIgBgBIgGALIgMAfQgXAxgBA5QgCACACADIABAFIgBABIAAAHg");
	this.shape_16.setTransform(-53.7,45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBD9B1").s().p("Ag0BnQAGgWACgUIAAgOIAAgDIABgDIAAgDQAAgVgDgVQgCgDAAgEQgBgCgBgDQABgCgBgEQgCgRACgUIAAgBIAAgCIABgCIgBAAIACgRIAAgCQANgOAQgFIANgDIAJADQAKABAHAJQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIABABQAMALAHAXQANAhgDAVQgDAqgfAiQgYAagiAFIgIABIgFgDg");
	this.shape_17.setTransform(33.5,52.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_18.setTransform(-43.2,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDE5C3").s().p("AgmHDQgSAAgQgFIgLgFIgagJQgRgIgRgEQgJgFgLAAIhngeQgigNgegPQgTgJgRgNIgNgKQgfgYgJgsIgHgUIAAgHIAAgBIAAgDQgCgEACgCQABg5AWgzIANgfIAFgKIABAAIACgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgCIgDgFQgKgeAHhKIABgFQgBgJACgHQgWh4BJhdQAtg6A9gpQBohJB8AFQB6ADByAtQCCA2AsCCQAoB0gzB1IgCAAIABACIgBACQgDAogHApIAAADIgBAFIgDASIABAAIgCARIgBACIABACIAAAAQgDAVADARIAAAFQAAAFABAAQAAAEADAFQACAWAAAVIAAADIAAADIgBALIAAAGQgBATgHAXIAAAAIgFAMQgBAAABABIgBACIgBABIAAADQgMAegXAVQgNALgKAGQgQAKgPAGIgIADIgBABQgcAIgdACIiaAHIhOANQgJACgIAAIgHAAgAhhGxQgRgIgRgEIgFgBQAUAFATAIIAAAAgAlNiIIABgCIgBAAg");
	this.shape_19.setTransform(-9.8,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E85298").s().p("AgXB0IgHgvQgHgfgfgIIgvgIQgbgHAYgOIArgTQAbgQgCggIgGgvQgCgcAVATIAhAiQAVAVAegMIArgVQAagKgMAZIgWAqQgMAeAUAWIAhAiQASAWgcgDIgugIQgggDgRAaIgVArQgHALgFAAQgFAAgDgPg");
	this.shape_20.setTransform(-59.8,13.2,1,1,0,0,0,0.3,-1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5F2900").s().p("AhxCSQgNgOgJgPQgTgagIgZQgVhGAqhLQAohLBQgXQBCgUA5AjQAZAPAQAYQALALAGAQIAKALQgNADgNAFIgsAEQhzAdAJBvQgIgIgEgMQgYgvAUg1IgXASQh0BmBgB2QgXgLgZgcg");
	this.shape_21.setTransform(-76.4,26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#471600").s().p("AhtCEQhfh2B0hmQALgKAMgIQgUA1AXAxQAFAJAIAJQgIhwBygdIArgEIAbgIIAKAJIAKAgQARA8gdAgQgSAQg3ATIgOAEQgsAPgOAOQgcAZAMAxQgggVgNgOIgQgcIgIAeQgBAOAEARIABAFQgJgCgJgFg");
	this.shape_22.setTransform(-72.1,31.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F2900").s().p("AhPC2QgXgLgZgdQgNgOgJgOQgTgbgHgZQgVhGAphLQAphLBPgXQBDgUA4AjQAZAQARAXQAKAMAGAPIAKALIALAJIAKAgQARA5gdAgQgSATg3ASIgOAEQgtAPgPAOQgaAaAKAwQgegVgNgOIgRgcIgHAeQgCAOAEARIACAGQgKgCgIgFg");
	this.shape_23.setTransform(-74.8,26.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F88C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_24.setTransform(24.5,-12.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAPQgHgEgBgHQgCgEADgGQADgHAIgCQAEgCAGAEQAFADACAGQADAGgEAEQgDAIgGABIgFABQgDAAgDgBg");
	this.shape_25.setTransform(-57.9,47.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAOQgHgCgCgHQgCgFAEgGQADgGAGgCQAFgDAFAEQAHADADAHQACAFgEAEQgDAIgFABIgGABQgCAAgEgCg");
	this.shape_26.setTransform(35.5,47.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E85298").s().p("AgIByIgPgtQgNgdgggCIgvAAQgcgBAVgTIAmgaQAXgVgHgfIgPgtQgIgcAZAPIAmAcQAbAQAagRIAmgdQAXgPgGAbIgOAtQgHAgAYAUIAnAaQAXARgdACIgvABQggAEgMAdIgOAtQgFANgFAAQgDAAgGgMg");
	this.shape_27.setTransform(39.4,23.6,1,1,0,0,0,0.6,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5F2900").s().p("AAqgZQgIgNgKgKQAHA2ghApQgHAKgKAHQAihrhog4IgpgOQgMgIgMgGIANgJQAJgNANgJQAWgSAcgJQA/gVA8AkQBHAqAWBSQAWBSgmBAQgNAXgZAVQgNAMgPALQggAVgYAFQB4hchXh+g");
	this.shape_28.setTransform(53.5,40.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#471600").s().p("AA3CdQAIgPABgOIAAgfQgRASgFAEQgQALgiAOQAVgtgTggQgMgRgngZIgMgHQgygdgNgXQgUgnAfg1IARgcIAMgHIAYAPIApANQBoA5gjBqQAJgHAHgJQAjgogHg4QAKAKAIAMQBYCAh5BcQgKACgJAAIADgFg");
	this.shape_29.setTransform(47.1,43.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5F2900").s().p("AARC+QAIgQABgOIAAgfQgRATgFAEQgOALgkAMQAWgsgUgfQgMgSgogZIgMgIQgxgegOgWQgTglAfg2IARgcIAMgGIANgJQAJgNANgJQAWgTAcgJQA9gUA+AkQBIAqAVBSQAWBRgmBBQgNAWgZAWQgNAMgQAKQgfAWgYAFQgJADgKAAIADgFg");
	this.shape_30.setTransform(51.1,40.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB5372").s().p("AhpggIDTgQIgKAcQgJAXgTAeQgvgXgcAKQgdAMgNARQgagageg3g");
	this.shape_31.setTransform(-14.4,61.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5B090").s().p("Ag6ABQAMgQAegLQAbgLAwAXQgUAfgeALQgHACgFAAQgZAAgegdg");
	this.shape_32.setTransform(-13.5,66.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_33.setTransform(3.5,-7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBDAC8").s().p("AAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_34.setTransform(2.6,-9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8C589").s().p("AgfAJQgBgDAAgDIACgFQADgNAMgFQANgHAKAFQAKADAJAIQADAEADAHIgBAAIgLgDQgPgFgLAIQgNAJgCAQQgJgEgCgMg");
	this.shape_35.setTransform(-16.6,49.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#471600").s().p("AlUFfIgKgHQgHgEgDgGQhQhRgLhrQgBgjAEgjQAOhLA6gxQAzgvBEgPIgfgWQgHgUAGgRQAFgTAKgSQAKgTARgRQASgTAXgOQA0gjA8gYQAjgPAngEQA7gLA8AYQAjAPAfALQA2AUAvgYIgEAQQgGAOgQAJIAAACQARAHAQAIQArAYAjAlQAkAmASAwQAMAfAIAhQAJAfADAhQAJAhAGAkIgDBPQgJAtgQAvQgHg4gYg9QgTgug7h2QgKAVgVATQglArglgFIgJgBQAQgPADgIQABgCADgYQADgVgDgYQgDgVgHgRQgvBUhoA7QhnA+hcgEQAfguAEgXQADgYAAgFQgBgOgHgUQgsBLhCA8QhCA+hOAfQgFAvAIAiQABAHASA4QgEgDgCgEg");
	this.shape_36.setTransform(-18.1,7.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5F2900").s().p("Al7FuQgPgCgRAHQgthKgVhhQgIgmgDgnQgFglABgnQALg1Ang3QAggwAjgXIAIgEQA0h+CChEQCDhCCRAUQA3AHBfA5QAKABAlAaQAlAaADAHQBIA5AlBsIApBvQATA3gGA+QgIA8gSA2QgRAogUAtQADgOgBADIgBADIgDgrQALgtACgtIAEhPQAAgkgEgiQgDgjgJgeQgJgggLgfQgSgxgkglQgjglgrgZIghgPIAAgBQAQgJAGgPIAEgPQgvAYg2gUQgggMgjgPQg7gYg7ALQgnAFgjAOQg8AZg0AiQgXAOgSAUQgRAQgLAUQgKASgEATQgGAQAGAUIAgAXQhEAOgzAwQg0AwgJBKQgFAiACAjQAFBtBMBSQADAFAGAFQgTgOgMgBg");
	this.shape_37.setTransform(-18.2,4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AAOAeQgsADgBgnQgCgYATAAQAEAAACADIAJAQQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABABIAIAGQAVAJAAALQAAANgLAAIgHgBg");
	this.shape_38.setTransform(1.9,43.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAVQgIgJgCgLQABgKAHgIQAIgKAJgBQAJAAAJAJQAJAIgBALQABAKgJAJQgGAKgLAAQgIAAgIgIg");
	this.shape_39.setTransform(5.7,36.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgvBDQgWgbgBgmQgCgjAUgdQAUgdAeAAQAdgCAVAbQAWAcABAlQACAjgUAdQgTAcgfABIgDAAQgaAAgVgZgAAUA7QABgKgVgNIgHgFIgCgDIgLgQQgCgDgDAAQgUAAADAYQABAqAsgEQASAEgBgQgAAGgsQgGAJAAALQAAANAHAIQAJAHAJgBQALAAAHgIQAIgJAAgMQAAgLgJgIQgJgJgJAAQgLABgHAJg");
	this.shape_40.setTransform(3.1,39);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AAPAeQgsACgCgmQAAgYARAAQADAAAEACQAEAJAFAHQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQADADAFACQAUALAAAKQABAOgMAAIgGgBg");
	this.shape_41.setTransform(-35.8,45.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAVQgIgIgBgNQABgJAGgIQAIgKAKgCQAJAAAIAKQAJAIAAALQABAKgJAKQgHAJgKAAIgBABQgJAAgHgJg");
	this.shape_42.setTransform(-32,38.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgvBCQgVgagDgmQAAgkATgcQAUgdAeAAQAdgDAVAcQAWAcABAkQABAlgTAcQgUAcgeABIgCAAQgaAAgWgagAAUA6QAAgKgUgNQgDgCgDgDQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgHgHgDgJIgIgCQgRAAAAAYQACAoAsgCQASAFgBgSgAAFgsQgFAJAAAKQAAANAHAJQAIAHALgBQAKAAAHgIQAJgJgCgMQABgLgJgJQgJgJgJAAQgLABgIAKg");
	this.shape_43.setTransform(-34.5,41.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVgVQA4ghAqATQgHgCgxAKQgyALgvA7QAJgoAugYg");
	this.shape_44.setTransform(-37.9,28.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("ABSAWQhMgqgtAIQgnAGgHAEQAcgaA1AGQAiAHAhAWQAZARgCAAIgEgCg");
	this.shape_45.setTransform(4.2,22.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBD9B1").s().p("AgMBWQgGgIgHgHIgCgDQgDgDgCgFQgQgcgCgaQgCg/ATgdIAEgDIAEgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQACgCADgBIAAACIgBAAIANgEQAJgDAJAAIAKACIACACQASAFAJAUQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAIgBAGIgBAAIgEAMIgJAgQgPAzAGA5QgBACACADIABAEIAAABIABAHIgBAAIgCAAQgXAAgQgSg");
	this.shape_46.setTransform(-57.4,50.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBD9B1").s().p("AgjBqQAEgYgBgTIgBgOIgBgEIAAgCIgBgCQgCgWgFgUQgDgEAAgDQgCgBgBgEIgBgGQgFgQAAgVIAAgBIAAgBIABgDIgBAAIgBgQIAAgCQALgPAQgIIAMgEIALABQAIAAAIAHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAAABQAOAJAKAXQAQAeABAWQACApgZAmQgYAegeAJIgIABIgGgBg");
	this.shape_47.setTransform(30.1,47.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(-50.1,22.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDE5C3").s().p("AgVHCQgFgCgGgBIgbgHQgSgFgRgBQgKgEgLABIhqgQQgkgIgegLQgVgHgSgLIgOgHQgjgVgOgpIgKgTIAAgIIAAgBIgBgDQgCgDABgDQgGg4APg1IAIghIAFgLIABAAIABgHQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIABgCIgEgFQgNgcgDhLIAAgFQgCgIABgIQgmhzA8hmQAmhAA2gxQBehVB+gLQB3gNB2AdQCIAlA9B6QA3BvgjB9IgBgBIAAACIAAACQACAmgCAqIAAACIAAAFIAAATIAAAAIABARIAAADIAAAAIAAABQAAAVAFAQIABAGQABAEABABQABAEADAEQAFAVACAWIABACIAAADIABALIABAGQABAUgEAXIgBAAIgCANQgCAAACAAIgBADIgBABIAAACQgHAggVAYIgUAUQgPALgOAIIgIAFIAAABQgaALgdAGIiYAbQgmAMgoAMQgLADgMABIgQACQgIAAgJgCgAgvG4QgRgGgTgBIgDAAQAUACATAFIAAAAgAlkhdIABgCIgBAAIAAACg");
	this.shape_49.setTransform(-14.4,31.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E85298").s().p("AgMByIgNguQgLgdgggFIgvgBQgcgEAWgRIAogYQAYgUgFgfIgNgtQgGgdAXARIAmAdQAYASAcgPIAngbQAZgOgIAbIgRAtQgIAfAXAVIAlAcQAVATgcAAIgvgCQggACgOAcIgQAsQgGANgDAAQgFAAgFgNg");
	this.shape_50.setTransform(-67,19.5,1,1,0,0,0,-0.3,-2.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5F2900").s().p("AhYCdQgOgLgMgOQgWgYgKgXQgfhFAfhOQAfhQBMghQA/gcA8AbQAbAMAUAVQALAKAIAPQAHAEAFAFQgMAFgNAHIgqAJQhuAsAVBtQgHgHgGgLQgdgtAMg1IgUAVQhlB0BuBoQgYgIgdgZg");
	this.shape_51.setTransform(-82.4,34.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#471600").s().p("AhYCTQhvhoBmh0IAUgVQgNA4AeArQAHALAIAGQgXhtBugsIAqgJQANgHAMgEIALAHIAPAeQAYA5gYAjQgQAVg0AXIgNAGQgqAWgMAPQgYAdASAvQgigRgPgNIgUgZIgDAfQgBANAHARIACAGQgJgBgJgFg");
	this.shape_52.setTransform(-77.2,39.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5F2900").s().p("Ag2C8QgZgIgcgZQgOgMgMgOQgWgXgKgYQgfhEAfhOQAfhQBMghQA/gdA8AbQAbANAUAVQALAKAIAOQAHAEAFAGIAMAHIAOAfQAYA4gYAhQgPAWg1AZIgNAFQgqAVgOAQQgYAdASAvQgggRgPgMIgUgaIgDAfQgBAOAHARIACAFQgJgBgJgEg");
	this.shape_53.setTransform(-80.3,35.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAQQgHgDgDgHQgDgGADgEQADgIAHgCQAEgDAGADQAFACADAGQADAGgBAFQgEAIgFABQgFACgCAAIgEAAg");
	this.shape_54.setTransform(-60.8,53.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgFAQQgHgDgCgGQgDgGACgFQADgGAFgDQAHgEAEADQAHADAEAGQADAFgDAFQgDAIgFACQgEABgDAAIgFAAg");
	this.shape_55.setTransform(31.9,41.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E85298").s().p("AABB3IgTgrQgRgbgfACIgvAHQgcACATgUIAhgiQAVgWgLgeIgVgqQgLgaAaALIAqAWQAdAMAWgUIAighQAWgTgDAdIgIAuQgCAgAaARIArAUQAYAPgcAGIgvAHQgfAHgIAeIgIAwQgDAOgGAAQgFAAgHgLg");
	this.shape_56.setTransform(32.8,17.4,1,1,0,0,0,0.2,-1.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5F2900").s().p("AAtgfIgUgVQANA2gdAuQgFAKgHAIQAThuhvgqIgqgIQgNgHgNgFIAMgKQAIgOALgKQAUgWAagMQA8gdA/AcQBNAgAhBPQAgBNgdBFQgKAYgWAZQgLANgOANQgcAZgYAIQBshrhohyg");
	this.shape_57.setTransform(48,31.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#471600").s().p("ABNCSQAGgRgBgOIgDgeIgUAaQgOAMgiASQAQgvgYgdQgMgQgqgUIgOgGQg1gXgQgUQgZgiAYg5IANgfIAMgIIAZALIAqAJQBvAqgVBuQAIgIAHgKQAdgsgOg3QAKAJAKALQBoByhsBrQgJAEgJABIACgFg");
	this.shape_58.setTransform(42.6,36.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5F2900").s().p("AAqC7QAGgQAAgOIgEgfIgUAaQgOAMggASQARgvgZgdQgOgPgqgVIgNgFQg1gYgQgVQgZghAYg5IANgfIALgIIAMgJQAIgPALgKQATgWAbgMQA8gcA/AbQBNAfAhBQQAgBNgdBFQgKAYgWAZQgLANgPANQgbAZgYAJQgJADgKACIACgGg");
	this.shape_59.setTransform(46.2,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:8.2,y:-17.1}},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_4,p:{x:-3.6,y:-19}},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_32},{t:this.shape_31}]},4).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:8.2,y:-17.1}},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_4,p:{x:-3.6,y:-19}},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_32},{t:this.shape_31}]},3).wait(4));

	// 圖層 2
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDE5C3").s().p("AhFBTQgjgdgEgtQgDgsAdgiQAegkAtgDQArgEAjAeQAjAdADAtQAEArgdAkQgdAiguAEIgJAAQgnAAgegag");
	this.shape_60.setTransform(-31.7,100.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDE5C3").s().p("AgsBaQgQgDgMgOIgGgLIgCgEQgMgTAMgbQAJgUAYgbQASgTAXgUIALgMIAGgEIBMBPQgsA9glAZQgVAQgUAAIgJgBg");
	this.shape_61.setTransform(-37.9,105.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDE5C3").s().p("AgIBtQgugEgdgiQgdgkAEgrQADgtAjgdQAjgeArAEQAtADAeAkQAdAigDAsQgEAtgjAdQgeAagnAAIgJAAg");
	this.shape_62.setTransform(6.9,100.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#813682").s().p("AgCArQgQgkgLgnQgJgegEgeIgDgYQAOAAAPAJQANAGALAMIASASIAHAJIAGA2IAEA5IADBEQgcgegUgsg");
	this.shape_63.setTransform(0.2,90.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#813682").s().p("AgqAxIAEg5IAGg2IAHgJIATgSQAKgMAMgGQAQgJAOAAIgDAYQgEAegIAeQgLAngRAkQgTAsgcAeg");
	this.shape_64.setTransform(-27.1,90.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#965F9A").s().p("AiSBVQBpgWA/g/QAYgVARgaQAMgTAGgSIBCBpQhFAlhQAPQg8AMhBAAIgTAAg");
	this.shape_65.setTransform(-1.4,132.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AF86B4").s().p("AhaBdQgkgFgkgJQgZgFgWgHIgRgGIBGigIFuAAIARAdQgGASgMATQgRAagXAVQhCA/hnAXQgsgCgugFg");
	this.shape_66.setTransform(-16,131);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2AB00").s().p("Ag+BlQAzgkAfhDQANgaALgdIANgrQAEAkABAoQABAegBAhIgCAtIgCARg");
	this.shape_67.setTransform(-0.8,110.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDDC00").s().p("AizDYIgBgQIgDgpQgChFAFg9QAJhVAXg6QAehKAzgbQAgASAgACQAoAEApgVQAvAcAdBDQAVA2AKBMQgNA1gXAtQgiBFgyAkg");
	this.shape_68.setTransform(-13.6,99.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E35E46").s().p("AgTAhQgogCgpgLIANgvQAkATAlgGQAZgEAYgPQAUAKAOAKQAXAPAJARIgEABIgLAEQgUAFgWACQgUADgVAAIgWgBg");
	this.shape_69.setTransform(-2,163.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C2C1C1").s().p("Ag/AfIAThIIBsgDQgCAVgDAQQgDARgFALIABAAIABABIACABIADACQgYAPgbAEIgQABQgbAAgbgOg");
	this.shape_70.setTransform(-4.3,157.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F6C59A").s().p("AgoAAQAGgpgBgfIBSgGIAFAzIADAxIgBA2IhsADQAJguAFghg");
	this.shape_71.setTransform(-3.3,144.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E35E46").s().p("AgrAfQgXgCgUgFIgKgEIgEgBQAJgRAXgPQAPgLATgJQAXAPAYAEQAmAGAjgTIAPAvQgqALgoACIgWABQgUAAgUgDg");
	this.shape_72.setTransform(-23.6,163.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C2C1C1").s().p("AgHAsQgagEgYgPIADgCIACgBIABgBIABAAQgLgVgCgsIBtADIASBIQgbAOgcAAIgQgBg");
	this.shape_73.setTransform(-21.4,157.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F6C59A").s().p("Ag1BMQgCgYABgeQAAgWACgbIAFgzIBSAGQgBAfAHApQAFAjAKAsg");
	this.shape_74.setTransform(-22.3,144.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EB8972").s().p("AhYgEICkhpIANCOIhhBNg");
	this.shape_75.setTransform(-34.3,93.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EB8972").s().p("AhYAgIASiOICgBuIhTBvg");
	this.shape_76.setTransform(2.5,90.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F8D1A7").s().p("Ag2AsIAAhXIBtAAIAABXg");
	this.shape_77.setTransform(-13,78.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FDE5C3").s().p("AgFBLQglgZgsg9IBMhPIAGAEIALAMQAXAUASATQAYAbAJAUQAMAbgMATIgCAEIgGALQgMAOgQADIgJABQgUAAgVgQg");
	this.shape_78.setTransform(13.1,105.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-34,162.6,200.6);


(lib.草莓妹妹做答 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE5C3").s().p("AgyBJQg4gpAag9QALggAhgLQAJgCA3gDIArATQAeAogUAqQgEAJgJAHQgwAmg4AAQgIAAgGgFg");
	this.shape.setTransform(-49,89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgYAQIAYgkIAZAqg");
	this.shape_1.setTransform(-31.8,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgpAoQgSg6BHgcIAAAAIAhA3IgaAmg");
	this.shape_2.setTransform(-36.3,90.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3399").s().p("ABKByIjQiVQgXhCBYgNIDPCKIACADQhJAbASA9g");
	this.shape_3.setTransform(-49.1,82.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6C59A").s().p("AgyBJQg4gpAag9QALggAhgLQAJgCA3gDIArATQAeAogUAqQgEAJgJAHQgwAmg4AAQgIAAgGgFg");
	this.shape_4.setTransform(-52.2,90.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgYAQIAYgkIAZApg");
	this.shape_5.setTransform(-35.1,95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6C59A").s().p("Ag1BHQgHgCgFgFQgug1Ang2QATgcAigEQAJAAA3AKIAmAcQAUAsgeAmQgGAIgKAFQgkASgkAAQgTAAgTgFg");
	this.shape_6.setTransform(-49.7,88.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgWAHIAegdIAQAug");
	this.shape_7.setTransform(-34.4,97);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("AgtAaQgDg9BKgLIAAAAIAUA9IghAgg");
	this.shape_8.setTransform(-38.1,93);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3399").s().p("AAsB+Iiqi/QgHhGBZAHICrC1IAAADQhMALAEA/g");
	this.shape_9.setTransform(-48.2,82.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6C59A").s().p("AgtBMQg6gmAVg+QAKghAhgNQAIgCA3gHIAsAQQAgAngRAqQgEAKgIAIQgtAog5AEIgCAAQgGAAgGgEg");
	this.shape_10.setTransform(-49.2,88.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgYASIAXglIAaAng");
	this.shape_11.setTransform(-31.6,92.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFCC").s().p("AgnAsQgVg6BEggIABAAIAkA2IgXAng");
	this.shape_12.setTransform(-36.4,89.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC3399").s().p("ABSBuIjZiIQgbhABYgTIDXB9IABADQhGAgAVA7g");
	this.shape_13.setTransform(-49.8,82.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-49.1,y:82.8}},{t:this.shape_2,p:{x:-36.3,y:90.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:-52.4,y:84.4}},{t:this.shape_2,p:{x:-39.6,y:91.8}},{t:this.shape_5},{t:this.shape_4}]},5).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_3,p:{x:-52.4,y:84.4}},{t:this.shape_2,p:{x:-39.6,y:91.8}},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).wait(2));

	// 圖層 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CB5372").s().p("AhpgrIDTALQAAACgNAYQgNAXgWAbQgsgegeAIQgeAHgPAPQgWgcgWg7g");
	this.shape_14.setTransform(-12.4,61);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5B090").s().p("Ag7gEQAPgQAfgHQAcgHAtAdQgZAcgfAGIgHABQgbAAgdgig");
	this.shape_15.setTransform(-12.6,66.1);

	this.instance = new lib.紅暈();
	this.instance.setTransform(16.8,55.4,0.895,0.895,-2.7,0,0,9,4.4);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-41.9,50.5,0.895,0.895,-2.7,0,0,8.8,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAAAAAg");
	this.shape_16.setTransform(13.8,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBDAC8").s().p("AAAAAIABAAIAAAAgAAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_17.setTransform(13.3,-7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBDCD9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_18.setTransform(8.2,-17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8C589").s().p("AgfAHIgBgHIADgEQAFgNANgEQALgEAMAGQAJAEAHAJQADAFACAGIAAAAIgLgFQgOgFgMAFQgPAIgDAQQgIgGgBgLg");
	this.shape_19.setTransform(-13.7,49.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#471600").s().p("AlwFGIgJgIQgGgGgCgGQhFhbADhsQADgjAJgiQAYhGBAgrQA4gpBGgFIgdgaQgDgVAIgPQAHgTAMgQQANgTATgOQAVgQAYgLQA4gcA/gQQAjgKAnAAQA+gDA4AgIA+AjQAzAbAygSQgDAIgDAHQgIAOgRAHIAAABQAPAJAPAKQAoAeAdAqQAfApAMAzQAIAgADAgQAFAggBAjQAFAiABAkIgOBNQgOAtgWAsQAAg4gQhAQgMgxgrh+QgNAUgXASQgrAlgkgJIgIgCQARgNADgIQADgCAGgZQAGgUgBgZQABgTgFgRQg6BNhvAtQhvAvhagQQAkgpAIgXQAGgXAAgFQABgOgEgUQg2BDhJA0QhKA1hRAVQgLAtAEAjQAAAHAKA6IgFgHg");
	this.shape_20.setTransform(-11.1,5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5F2900").s().p("AGMF4IgCADIAEgrQAQgsAIgsQAJgnAGgmQAEglABgiQABgjgFggQgEghgHgfQgMgygfgqQgegqgngeIgfgSIABgCQARgHAIgNQADgIACgIQgxASgzgbQgegPghgUQg3ggg/ADQglAAgkAKQg/ARg4AbQgZALgUARQgTAOgNASQgMAQgHATQgIAPADAVIAcAaQhFAGg4ApQg7AqgSBGQgJAigDAjQgJBsBABbQACAGAFAFQgRgPgLgDQgPgEgSAFQgjhQgIhiQgCgnABgnQABgmAGgkQASg1AugyQAlgsAngSIAIgDQBEh3CKgxQCJgwCPAmQA1APBXBFQAKACAhAfQAhAeACAIQBABBAXBxIAaByQAMA6gOA8QgQA7gaAzQgVAmgaApQAFgNgCADg");
	this.shape_21.setTransform(-10.5,4.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AALAgQgsgDAEgnQABgYAUACQADAAACADQADAJAEAIQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAHAGQATANgCALQgBALgKAAIgIgBg");
	this.shape_22.setTransform(5.5,45.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAdQgJgBgHgKQgHgJAAgKQACgLAIgIQAJgJAIABQAKAAAIALQAIAJgCAJQgBAMgKAIQgHAJgJAAIgBgBg");
	this.shape_23.setTransform(10.3,39.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBcQgegCgSgeQgTgdAEgkQADglAYgaQAWgbAdAEQAfACARAeQATAegFAkQgDAlgXAZQgVAXgaAAIgEAAgAgvAbQgEApAuADQAPAHACgQQACgLgRgPIgIgHIgBgDQgGgIgDgJQgCgDgEAAIgEgBQgPAAgBAWgAALgqQgIAHgDALQABANAHAJQAHAIAJABQALABAIgIQAKgHABgMQACgLgIgJQgIgLgJgBIgBAAQgKAAgJAJg");
	this.shape_24.setTransform(7.3,41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AALAfQgsgEAEgmQADgYARADQADAAAEACQACAKAEAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACADAFAEQASANgBAKQgBAMgJAAQgEAAgFgCg");
	this.shape_25.setTransform(-32.1,42.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAdQgLAAgHgKQgHgKABgLQACgKAHgHQAKgKAIABQAKABAHAKQAIAJgCAKQAAAMgLAIQgGAHgIAAIgBAAg");
	this.shape_26.setTransform(-27.4,36.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBcQgegDgSgeQgTgcAEgkQAEgmAWgZQAYgbAbAEQAgACASAeQASAegEAjQgEAngXAZQgWAXgYAAIgFgBgAgvAbQgEAoAuAEQARAHAAgRQACgKgQgPQgGgEgCgDQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgGgIgCgKQgDgCgDAAIgEAAQgPAAgCAVgAALgqQgIAHgCALQgBANAHAJQAHAIALAAQAKACAIgIQAKgHAAgNQADgKgIgKQgIgKgKgBIgCAAQgJAAgIAJg");
	this.shape_27.setTransform(-30.3,38.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSgWQA8gYAnAYQgGgDgyADQgzAEg2A1QAOgkAwgVg");
	this.shape_28.setTransform(-31.9,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABQAdQhGg0gtACQgoABgIAEQAggXAzANQAhAMAfAaQAWAUgCAAIgEgDg");
	this.shape_29.setTransform(10.5,25.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBD9B1").s().p("AALBpQgWgCgRgWQgEgJgHgIIgBgDQgDgDgBgGQgNgdACgZQAHhAAXgaQACgCACgBQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIgBABIAAABIALgDQALgBAJABIAKAEIABABQARAIAHAVQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABIgBAGIgBgBIgGALIgMAfQgXAxgBA5QgCACACADIABAFIgBABIAAAHg");
	this.shape_30.setTransform(-53.7,45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBD9B1").s().p("Ag0BnQAGgWACgUIAAgOIAAgDIABgDIAAgDQAAgVgDgVQgCgDAAgEQgBgCgBgDQABgCgBgEQgCgRACgUIAAgBIAAgCIABgCIgBAAIACgRIAAgCQANgOAQgFIANgDIAJADQAKABAHAJQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIABABQAMALAHAXQANAhgDAVQgDAqgfAiQgYAagiAFIgIABIgFgDg");
	this.shape_31.setTransform(33.5,52.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_32.setTransform(-43.2,17.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDE5C3").s().p("AgmHDQgSAAgQgFIgLgFIgagJQgRgIgRgEQgJgFgLAAIhngeQgigNgegPQgTgJgRgNIgNgKQgfgYgJgsIgHgUIAAgHIAAgBIAAgDQgCgEACgCQABg5AWgzIANgfIAFgKIABAAIACgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgCIgDgFQgKgeAHhKIABgFQgBgJACgHQgWh4BJhdQAtg6A9gpQBohJB8AFQB6ADByAtQCCA2AsCCQAoB0gzB1IgCAAIABACIgBACQgDAogHApIAAADIgBAFIgDASIABAAIgCARIgBACIABACIAAAAQgDAVADARIAAAFQAAAFABAAQAAAEADAFQACAWAAAVIAAADIAAADIgBALIAAAGQgBATgHAXIAAAAIgFAMQgBAAABABIgBACIgBABIAAADQgMAegXAVQgNALgKAGQgQAKgPAGIgIADIgBABQgcAIgdACIiaAHIhOANQgJACgIAAIgHAAgAhhGxQgRgIgRgEIgFgBQAUAFATAIIAAAAgAlNiIIABgCIgBAAg");
	this.shape_33.setTransform(-9.8,31.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E85298").s().p("AgXB0IgHgvQgHgfgfgIIgvgIQgbgHAYgOIArgTQAbgQgCggIgGgvQgCgcAVATIAhAiQAVAVAegMIArgVQAagKgMAZIgWAqQgMAeAUAWIAhAiQASAWgcgDIgugIQgggDgRAaIgVArQgHALgFAAQgFAAgDgPg");
	this.shape_34.setTransform(-59.8,13.2,1,1,0,0,0,0.3,-1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5F2900").s().p("AhxCSQgNgOgJgPQgTgagIgZQgVhGAqhLQAohLBQgXQBCgUA5AjQAZAPAQAYQALALAGAQIAKALQgNADgNAFIgsAEQhzAdAJBvQgIgIgEgMQgYgvAUg1IgXASQh0BmBgB2QgXgLgZgcg");
	this.shape_35.setTransform(-76.4,26);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#471600").s().p("AhtCEQhfh2B0hmQALgKAMgIQgUA1AXAxQAFAJAIAJQgIhwBygdIArgEIAbgIIAKAJIAKAgQARA8gdAgQgSAQg3ATIgOAEQgsAPgOAOQgcAZAMAxQgggVgNgOIgQgcIgIAeQgBAOAEARIABAFQgJgCgJgFg");
	this.shape_36.setTransform(-72.1,31.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5F2900").s().p("AhPC2QgXgLgZgdQgNgOgJgOQgTgbgHgZQgVhGAphLQAphLBPgXQBDgUA4AjQAZAQARAXQAKAMAGAPIAKALIALAJIAKAgQARA5gdAgQgSATg3ASIgOAEQgtAPgPAOQgaAaAKAwQgegVgNgOIgRgcIgHAeQgCAOAEARIACAGQgKgCgIgFg");
	this.shape_37.setTransform(-74.8,26.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4F88C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_38.setTransform(24.5,-12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAPQgHgEgBgHQgCgEADgGQADgHAIgCQAEgCAGAEQAFADACAGQADAGgEAEQgDAIgGABIgFABQgDAAgDgBg");
	this.shape_39.setTransform(-57.9,47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAOQgHgCgCgHQgCgFAEgGQADgGAGgCQAFgDAFAEQAHADADAHQACAFgEAEQgDAIgFABIgGABQgCAAgEgCg");
	this.shape_40.setTransform(35.5,47.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E85298").s().p("AgIByIgPgtQgNgdgggCIgvAAQgcgBAVgTIAmgaQAXgVgHgfIgPgtQgIgcAZAPIAmAcQAbAQAagRIAmgdQAXgPgGAbIgOAtQgHAgAYAUIAnAaQAXARgdACIgvABQggAEgMAdIgOAtQgFANgFAAQgDAAgGgMg");
	this.shape_41.setTransform(39.4,23.6,1,1,0,0,0,0.6,-2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5F2900").s().p("AAqgZQgIgNgKgKQAHA2ghApQgHAKgKAHQAihrhog4IgpgOQgMgIgMgGIANgJQAJgNANgJQAWgSAcgJQA/gVA8AkQBHAqAWBSQAWBSgmBAQgNAXgZAVQgNAMgPALQggAVgYAFQB4hchXh+g");
	this.shape_42.setTransform(53.5,40.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#471600").s().p("AA3CdQAIgPABgOIAAgfQgRASgFAEQgQALgiAOQAVgtgTggQgMgRgngZIgMgHQgygdgNgXQgUgnAfg1IARgcIAMgHIAYAPIApANQBoA5gjBqQAJgHAHgJQAjgogHg4QAKAKAIAMQBYCAh5BcQgKACgJAAIADgFg");
	this.shape_43.setTransform(47.1,43.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5F2900").s().p("AARC+QAIgQABgOIAAgfQgRATgFAEQgOALgkAMQAWgsgUgfQgMgSgogZIgMgIQgxgegOgWQgTglAfg2IARgcIAMgGIANgJQAJgNANgJQAWgTAcgJQA9gUA+AkQBIAqAVBSQAWBRgmBBQgNAWgZAWQgNAMgQAKQgfAWgYAFQgJADgKAAIADgFg");
	this.shape_44.setTransform(51.1,40.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CB5372").s().p("AhpggIDTgQIgKAcQgJAXgTAeQgvgXgcAKQgdAMgNARQgagageg3g");
	this.shape_45.setTransform(-14.4,61.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5B090").s().p("Ag6ABQAMgQAegLQAbgLAwAXQgUAfgeALQgHACgFAAQgZAAgegdg");
	this.shape_46.setTransform(-13.5,66.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_47.setTransform(3.5,-7.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBDAC8").s().p("AAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_48.setTransform(2.6,-9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8C589").s().p("AgfAJQgBgDAAgDIACgFQADgNAMgFQANgHAKAFQAKADAJAIQADAEADAHIgBAAIgLgDQgPgFgLAIQgNAJgCAQQgJgEgCgMg");
	this.shape_49.setTransform(-16.6,49.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#471600").s().p("AlUFfIgKgHQgHgEgDgGQhQhRgLhrQgBgjAEgjQAOhLA6gxQAzgvBEgPIgfgWQgHgUAGgRQAFgTAKgSQAKgTARgRQASgTAXgOQA0gjA8gYQAjgPAngEQA7gLA8AYQAjAPAfALQA2AUAvgYIgEAQQgGAOgQAJIAAACQARAHAQAIQArAYAjAlQAkAmASAwQAMAfAIAhQAJAfADAhQAJAhAGAkIgDBPQgJAtgQAvQgHg4gYg9QgTgug7h2QgKAVgVATQglArglgFIgJgBQAQgPADgIQABgCADgYQADgVgDgYQgDgVgHgRQgvBUhoA7QhnA+hcgEQAfguAEgXQADgYAAgFQgBgOgHgUQgsBLhCA8QhCA+hOAfQgFAvAIAiQABAHASA4QgEgDgCgEg");
	this.shape_50.setTransform(-18.1,7.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5F2900").s().p("Al7FuQgPgCgRAHQgthKgVhhQgIgmgDgnQgFglABgnQALg1Ang3QAggwAjgXIAIgEQA0h+CChEQCDhCCRAUQA3AHBfA5QAKABAlAaQAlAaADAHQBIA5AlBsIApBvQATA3gGA+QgIA8gSA2QgRAogUAtQADgOgBADIgBADIgDgrQALgtACgtIAEhPQAAgkgEgiQgDgjgJgeQgJgggLgfQgSgxgkglQgjglgrgZIghgPIAAgBQAQgJAGgPIAEgPQgvAYg2gUQgggMgjgPQg7gYg7ALQgnAFgjAOQg8AZg0AiQgXAOgSAUQgRAQgLAUQgKASgEATQgGAQAGAUIAgAXQhEAOgzAwQg0AwgJBKQgFAiACAjQAFBtBMBSQADAFAGAFQgTgOgMgBg");
	this.shape_51.setTransform(-18.2,4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AAOAeQgsADgBgnQgCgYATAAQAEAAACADIAJAQQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABABIAIAGQAVAJAAALQAAANgLAAIgHgBg");
	this.shape_52.setTransform(1.9,43.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgPAVQgIgJgCgLQABgKAHgIQAIgKAJgBQAJAAAJAJQAJAIgBALQABAKgJAJQgGAKgLAAQgIAAgIgIg");
	this.shape_53.setTransform(5.7,36.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgvBDQgWgbgBgmQgCgjAUgdQAUgdAeAAQAdgCAVAbQAWAcABAlQACAjgUAdQgTAcgfABIgDAAQgaAAgVgZgAAUA7QABgKgVgNIgHgFIgCgDIgLgQQgCgDgDAAQgUAAADAYQABAqAsgEQASAEgBgQgAAGgsQgGAJAAALQAAANAHAIQAJAHAJgBQALAAAHgIQAIgJAAgMQAAgLgJgIQgJgJgJAAQgLABgHAJg");
	this.shape_54.setTransform(3.1,39);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AAPAeQgsACgCgmQAAgYARAAQADAAAEACQAEAJAFAHQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQADADAFACQAUALAAAKQABAOgMAAIgGgBg");
	this.shape_55.setTransform(-35.8,45.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgQAVQgIgIgBgNQABgJAGgIQAIgKAKgCQAJAAAIAKQAJAIAAALQABAKgJAKQgHAJgKAAIgBABQgJAAgHgJg");
	this.shape_56.setTransform(-32,38.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgvBCQgVgagDgmQAAgkATgcQAUgdAeAAQAdgDAVAcQAWAcABAkQABAlgTAcQgUAcgeABIgCAAQgaAAgWgagAAUA6QAAgKgUgNQgDgCgDgDQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgHgHgDgJIgIgCQgRAAAAAYQACAoAsgCQASAFgBgSgAAFgsQgFAJAAAKQAAANAHAJQAIAHALgBQAKAAAHgIQAJgJgCgMQABgLgJgJQgJgJgJAAQgLABgIAKg");
	this.shape_57.setTransform(-34.5,41.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVgVQA4ghAqATQgHgCgxAKQgyALgvA7QAJgoAugYg");
	this.shape_58.setTransform(-37.9,28.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ABSAWQhMgqgtAIQgnAGgHAEQAcgaA1AGQAiAHAhAWQAZARgCAAIgEgCg");
	this.shape_59.setTransform(4.2,22.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FBD9B1").s().p("AgMBWQgGgIgHgHIgCgDQgDgDgCgFQgQgcgCgaQgCg/ATgdIAEgDIAEgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQACgCADgBIAAACIgBAAIANgEQAJgDAJAAIAKACIACACQASAFAJAUQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAIgBAGIgBAAIgEAMIgJAgQgPAzAGA5QgBACACADIABAEIAAABIABAHIgBAAIgCAAQgXAAgQgSg");
	this.shape_60.setTransform(-57.4,50.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBD9B1").s().p("AgjBqQAEgYgBgTIgBgOIgBgEIAAgCIgBgCQgCgWgFgUQgDgEAAgDQgCgBgBgEIgBgGQgFgQAAgVIAAgBIAAgBIABgDIgBAAIgBgQIAAgCQALgPAQgIIAMgEIALABQAIAAAIAHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAAABQAOAJAKAXQAQAeABAWQACApgZAmQgYAegeAJIgIABIgGgBg");
	this.shape_61.setTransform(30.1,47.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_62.setTransform(-50.1,22.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FDE5C3").s().p("AgVHCQgFgCgGgBIgbgHQgSgFgRgBQgKgEgLABIhqgQQgkgIgegLQgVgHgSgLIgOgHQgjgVgOgpIgKgTIAAgIIAAgBIgBgDQgCgDABgDQgGg4APg1IAIghIAFgLIABAAIABgHQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIABgCIgEgFQgNgcgDhLIAAgFQgCgIABgIQgmhzA8hmQAmhAA2gxQBehVB+gLQB3gNB2AdQCIAlA9B6QA3BvgjB9IgBgBIAAACIAAACQACAmgCAqIAAACIAAAFIAAATIAAAAIABARIAAADIAAAAIAAABQAAAVAFAQIABAGQABAEABABQABAEADAEQAFAVACAWIABACIAAADIABALIABAGQABAUgEAXIgBAAIgCANQgCAAACAAIgBADIgBABIAAACQgHAggVAYIgUAUQgPALgOAIIgIAFIAAABQgaALgdAGIiYAbQgmAMgoAMQgLADgMABIgQACQgIAAgJgCgAgvG4QgRgGgTgBIgDAAQAUACATAFIAAAAgAlkhdIABgCIgBAAIAAACg");
	this.shape_63.setTransform(-14.4,31.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E85298").s().p("AgMByIgNguQgLgdgggFIgvgBQgcgEAWgRIAogYQAYgUgFgfIgNgtQgGgdAXARIAmAdQAYASAcgPIAngbQAZgOgIAbIgRAtQgIAfAXAVIAlAcQAVATgcAAIgvgCQggACgOAcIgQAsQgGANgDAAQgFAAgFgNg");
	this.shape_64.setTransform(-67,19.5,1,1,0,0,0,-0.3,-2.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5F2900").s().p("AhYCdQgOgLgMgOQgWgYgKgXQgfhFAfhOQAfhQBMghQA/gcA8AbQAbAMAUAVQALAKAIAPQAHAEAFAFQgMAFgNAHIgqAJQhuAsAVBtQgHgHgGgLQgdgtAMg1IgUAVQhlB0BuBoQgYgIgdgZg");
	this.shape_65.setTransform(-82.4,34.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#471600").s().p("AhYCTQhvhoBmh0IAUgVQgNA4AeArQAHALAIAGQgXhtBugsIAqgJQANgHAMgEIALAHIAPAeQAYA5gYAjQgQAVg0AXIgNAGQgqAWgMAPQgYAdASAvQgigRgPgNIgUgZIgDAfQgBANAHARIACAGQgJgBgJgFg");
	this.shape_66.setTransform(-77.2,39.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5F2900").s().p("Ag2C8QgZgIgcgZQgOgMgMgOQgWgXgKgYQgfhEAfhOQAfhQBMghQA/gdA8AbQAbANAUAVQALAKAIAOQAHAEAFAGIAMAHIAOAfQAYA4gYAhQgPAWg1AZIgNAFQgqAVgOAQQgYAdASAvQgggRgPgMIgUgaIgDAfQgBAOAHARIACAFQgJgBgJgEg");
	this.shape_67.setTransform(-80.3,35.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgEAQQgHgDgDgHQgDgGADgEQADgIAHgCQAEgDAGADQAFACADAGQADAGgBAFQgEAIgFABQgFACgCAAIgEAAg");
	this.shape_68.setTransform(-60.8,53.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAQQgHgDgCgGQgDgGACgFQADgGAFgDQAHgEAEADQAHADAEAGQADAFgDAFQgDAIgFACQgEABgDAAIgFAAg");
	this.shape_69.setTransform(31.9,41.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E85298").s().p("AABB3IgTgrQgRgbgfACIgvAHQgcACATgUIAhgiQAVgWgLgeIgVgqQgLgaAaALIAqAWQAdAMAWgUIAighQAWgTgDAdIgIAuQgCAgAaARIArAUQAYAPgcAGIgvAHQgfAHgIAeIgIAwQgDAOgGAAQgFAAgHgLg");
	this.shape_70.setTransform(32.8,17.4,1,1,0,0,0,0.2,-1.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5F2900").s().p("AAtgfIgUgVQANA2gdAuQgFAKgHAIQAThuhvgqIgqgIQgNgHgNgFIAMgKQAIgOALgKQAUgWAagMQA8gdA/AcQBNAgAhBPQAgBNgdBFQgKAYgWAZQgLANgOANQgcAZgYAIQBshrhohyg");
	this.shape_71.setTransform(48,31.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#471600").s().p("ABNCSQAGgRgBgOIgDgeIgUAaQgOAMgiASQAQgvgYgdQgMgQgqgUIgOgGQg1gXgQgUQgZgiAYg5IANgfIAMgIIAZALIAqAJQBvAqgVBuQAIgIAHgKQAdgsgOg3QAKAJAKALQBoByhsBrQgJAEgJABIACgFg");
	this.shape_72.setTransform(42.6,36.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5F2900").s().p("AAqC7QAGgQAAgOIgEgfIgUAaQgOAMggASQARgvgZgdQgOgPgqgVIgNgFQg1gYgQgVQgZghAYg5IANgfIALgIIAMgJQAIgPALgKQATgWAbgMQA8gcA/AbQBNAfAhBQQAgBNgdBFQgKAYgWAZQgLANgPANQgbAZgYAJQgJADgKACIACgGg");
	this.shape_73.setTransform(46.2,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:8.2,y:-17.1}},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_18,p:{x:-3.6,y:-19}},{t:this.shape_48},{t:this.shape_47},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_46},{t:this.shape_45}]},4).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:8.2,y:-17.1}},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_18,p:{x:-3.6,y:-19}},{t:this.shape_48},{t:this.shape_47},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_46},{t:this.shape_45}]},3).wait(4));

	// 圖層 2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FDE5C3").s().p("AgIBtQgugEgdgiQgdgkAEgrQADgtAjgdQAjgeArAEQAtADAeAkQAdAigDAsQgEAtgjAdQgeAagnAAIgJAAg");
	this.shape_74.setTransform(6.9,100.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#813682").s().p("AgCArQgQgkgLgnQgJgegEgeIgDgYQAOAAAPAJQANAGALAMIASASIAHAJIAGA2IAEA5IADBEQgcgegUgsg");
	this.shape_75.setTransform(0.2,90.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#813682").s().p("AgqAxIAEg5IAGg2IAHgJIATgSQAKgMAMgGQAQgJAOAAIgDAYQgEAegIAeQgLAngRAkQgTAsgcAeg");
	this.shape_76.setTransform(-27.1,90.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#965F9A").s().p("AiSBVQBpgWA/g/QAYgVARgaQAMgTAGgSIBCBpQhFAlhQAPQg8AMhBAAIgTAAg");
	this.shape_77.setTransform(-1.4,132.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AF86B4").s().p("AhaBdQgkgFgkgJQgZgFgWgHIgRgGIBGigIFuAAIARAdQgGASgMATQgRAagXAVQhCA/hnAXQgsgCgugFg");
	this.shape_78.setTransform(-16,131);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F2AB00").s().p("Ag+BlQAzgkAfhDQANgaALgdIANgrQAEAkABAoQABAegBAhIgCAtIgCARg");
	this.shape_79.setTransform(-0.8,110.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FDDC00").s().p("AizDYIgBgQIgDgpQgChFAFg9QAJhVAXg6QAehKAzgbQAgASAgACQAoAEApgVQAvAcAdBDQAVA2AKBMQgNA1gXAtQgiBFgyAkg");
	this.shape_80.setTransform(-13.6,99.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E35E46").s().p("AgTAhQgogCgpgLIANgvQAkATAlgGQAZgEAYgPQAUAKAOAKQAXAPAJARIgEABIgLAEQgUAFgWACQgUADgVAAIgWgBg");
	this.shape_81.setTransform(-2,163.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C2C1C1").s().p("Ag/AfIAThIIBsgDQgCAVgDAQQgDARgFALIABAAIABABIACABIADACQgYAPgbAEIgQABQgbAAgbgOg");
	this.shape_82.setTransform(-4.3,157.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F6C59A").s().p("AgoAAQAGgpgBgfIBSgGIAFAzIADAxIgBA2IhsADQAJguAFghg");
	this.shape_83.setTransform(-3.3,144.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E35E46").s().p("AgrAfQgXgCgUgFIgKgEIgEgBQAJgRAXgPQAPgLATgJQAXAPAYAEQAmAGAjgTIAPAvQgqALgoACIgWABQgUAAgUgDg");
	this.shape_84.setTransform(-23.6,163.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C2C1C1").s().p("AgHAsQgagEgYgPIADgCIACgBIABgBIABAAQgLgVgCgsIBtADIASBIQgbAOgcAAIgQgBg");
	this.shape_85.setTransform(-21.4,157.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F6C59A").s().p("Ag1BMQgCgYABgeQAAgWACgbIAFgzIBSAGQgBAfAHApQAFAjAKAsg");
	this.shape_86.setTransform(-22.3,144.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EB8972").s().p("AhegpIC9gxIggCLIh0Aqg");
	this.shape_87.setTransform(-29.3,88.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EB8972").s().p("AhYAgIASiOICgBuIhTBvg");
	this.shape_88.setTransform(2.5,90.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F8D1A7").s().p("Ag2AsIAAhXIBtAAIAABXg");
	this.shape_89.setTransform(-13,78.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F2AF84").s().p("AgFBLQglgZgsg9IBMhPIAGAEIALAMQAXAUASATQAYAbAJAUQAMAbgMATIgCAEIgGALQgMAOgQADIgJABQgUAAgVgQg");
	this.shape_90.setTransform(13.1,105.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FDE5C3").s().p("AhyBgQgSgQgDgdIABgTIABgHQAAghAmgdQAcgXA2gUQAigOAtgMIAmgHIAfCkQhqA3hAAHIgWABQgmAAgTgSg");
	this.shape_91.setTransform(-29.7,91.6,1,1,0,0,0,16.2,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-34,162.6,200.6);


(lib.草莓妹妹失敗 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA6240").s().p("AgdAgQgOgLgCgTQAAgQANgQQANgMATgBQARgCAOANQAPANAAASQABAQgOAOQgMAOgTABIgCAAQgRAAgMgMg");
	this.shape.setTransform(32.6,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA6240").s().p("AgdAhQgPgOAAgTQgCgQAOgNQANgOASAAQARgCAQAOQANAMAAASQAAAQgLAQQgOAMgTABQgQAAgOgLg");
	this.shape_1.setTransform(-55,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgRALQgIgEAAgHQAAgFAIgGQAIgFAJAAQAKAAAIAFQAHAGAAAFQAAAHgHAEQgIAGgKAAQgJAAgIgGg");
	this.shape_2.setTransform(-11.1,-9,1.846,1.846,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1AvQgcgTgEgeQgDghAXgaIAGgDQA7BCBWgFQgCAUgRATQgXAZgkAEIgIAAQgdAAgYgSg");
	this.shape_3.setTransform(14.6,-16,1,1,0,0,0,0,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4A2QgVgQgHgUQBXgLAuhNIAFAEQAbAUADAgQAEAegXAaQgYAZgjAEIgHAAQgeAAgZgRg");
	this.shape_4.setTransform(-36.6,-16,1,1,0,0,0,-0.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAIBBQgiABgNgwIgGg4IABgXIA/gDIAVABIABAhIgCApIgDAjQgFATgVAAIgCAAgABJAhIgBghIADgrIABgTQAsAEAqAJQgEAMgHApQgOAvgkABIgBAAQgXAAgEgTgAiZABIgIgoQAogMArgGIABAKIACAsIAAAgQgDATgXAAQglAAgPgvg");
	this.shape_5.setTransform(-8.3,-41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AhgA0QgQhCAAgzQABgpAMgQQANgSAcAFQAqAGBUBXQAYAcAVAUQguAbgwAhQgzAlgoAiIgYhVg");
	this.shape_6.setTransform(-48.6,-35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("AijA7QgUhgABhBQABgyAYgdQAYgeApAGQBRAMBvBhQAyAqAhAlQglARglAVQgVgVgYgcQhUhWgqgHQgcgEgNARQgMARgBAoQAAAzAQBCIAYBVQghAcgaAcQgFgigXhyg");
	this.shape_7.setTransform(-48.2,-37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AgQBEQgvgggvgaQASgUAagdQBRhYAqgIQAdgEANAQQALARABAoQADAzgPBCIgXBWQgqgigygjg");
	this.shape_8.setTransform(30.3,-39.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("ABQCXIAYhVQAOhCgDgzQgBgogKgRQgOgQgcADQgqAIhSBZQgaAagSAXQglgVgmgQQAgglAxgsQBthiBSgNQApgHAZAcQAXAdACAxQADBDgSBgIgbCVQgbgbghgdg");
	this.shape_9.setTransform(29.8,-41.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("Ao7DBQgCiLC2iOQBVhHBkgkIAvgOIAIAqQAOAvAlAAQAYgBADgSIAAgjIgDgsIAAgKIAigEIgCAYQACAGAFA0QANAvAigBQAXABAFgTIADgkIABgqIgBghIAlABIgCASIgCAsIABAjQADATAZgBQAjgBAOguQAIgrADgNIAaAGQB+AiBhBXQCeCJACCKQgBAWgEAUQgYhuiNhRQiohejrABQjtADimBiQiNBSgVBvQgFgUAAgVg");
	this.shape_10.setTransform(-8.4,-23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CC6633").ss(1,1,1).p("AGJgDQgFCihyBtQhyBtiGAOQiFAOiHhsQiHhsgOioQgPioB0h6QBzh2CngEQClgEB4B0QB5BygFCig");
	this.shape_11.setTransform(-8.6,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9999").s().p("AmxHOQiui5ADkJQADkICpi6QCsi8D5gFQD2gFC0CzQCzCzAKEEQAJECiYC6QiYC7kdARIgvACQj8AAieiqgAgUi4QinADhzB3Qh0B3APCqQAOCpCHBrQCHBsCFgOQCGgOByhsQByhuAFijQAFiih5hxQh0hvieAAIgLAAg");
	this.shape_12.setTransform(-7.4,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5B090").s().p("Ag9AQQgNgDgFgIIAIgEQAUgIAQgDQAdgHAcACQAgADAbAMQgIAEgKACQgNADgTgFQgSgEgMACIgOAGIgRAGQgLADgKAAIgKgBg");
	this.shape_13.setTransform(-13.5,66.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CB5372").s().p("AhVAbQgFgUAWgPQAWgRAcgEQAZgEAYABQAYABAcAVIADAHQADALgFAKQgCAFgFAEQgagNgggDQgcgCgeAHQgPAEgVAJIgIAFQgCgDAAgEg");
	this.shape_14.setTransform(-13.2,63.6);

	this.instance = new lib.紅暈();
	this.instance.setTransform(16.1,56.6,0.898,0.898,-2.7,0,0,8.5,4.3);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-39.5,52.4,0.898,0.898,-2.7,0,0,8.7,4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(14.4,-5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBDAC8").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_16.setTransform(13.9,-8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBDCD9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(8.8,-18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8C589").s().p("AggAGIAAgGIACgEQAGgNANgEQALgFALAGQAKAEAHAJQADAGACAGIgBAAQgBgCgJgDQgOgGgNAGQgOAIgEAQQgIgHgBgLg");
	this.shape_18.setTransform(-13.1,48.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#471600").s().p("AlyFHIgJgIQgGgGgCgFQhFhbADhtQADgkAJghQAYhHBAgrQA5gpBGgFIgdgaQgDgVAIgQQAHgTAMgQQANgSATgPQAVgQAYgLQA5gcA/gQQAigKAnAAQA/gDA4AgIA/AjQAzAcAygTIgGAPQgIAOgRAHIAAACQAPAIAPALQAoAeAeApQAfAqAMAzQAHAgAEAgQAFAggBAjQAEAjABAkIgNBOQgPAsgVAtQAAg5gRhAQgMgxgrh/QgNAVgXARQgrAmgkgKIgJgCQARgNAEgIQACgBAHgZQAFgVAAgZQAAgTgFgRQg6BNhvAuQhvAvhbgQQAlgqAHgXQAHgXAAgEQAAgPgDgUQg3BEhJA0QhKA1hRAVQgMAtAFAjQgBAHAKA6IgFgHg");
	this.shape_19.setTransform(-10.6,4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F2900").s().p("AGNF6IgBACIADgqQAQgsAJgsQAIgoAGgmQAEglABgiQACgjgFghQgFghgGgfQgMgygfgqQgegqgogeIgfgTIABgCQARgHAIgNQADgHACgIQgxASg0gcQgegPgggUQg4ggg/ADQglAAglAKQg/ARg4AbQgZALgUARQgTAOgOASQgMAQgHAUQgHAPADAVIAcAaQhFAGg5ApQg7AqgSBGQgJAigDAjQgJBtBABcQACAGAFAFQgQgQgMgDQgPgEgSAFQgjhQgIhjQgCgnABgnQABgmAGgkQASg2AugyQAlgrAngSIAIgEQBFh3CKgxQCJgxCQAnQA2APBXBFQAKACAhAfQAhAfACAHQBBBBAWByIAaBzQANA6gPA8QgQA7gZAzQgWAmgaAqQAFgNgCADg");
	this.shape_20.setTransform(-10,3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AALAgQgsgDAEgnQABgZAUADQADAAACADQADAJADAIQAAABAAAAQAAAAABABQAAAAABABQAAAAABABIAHAGQATANgCALQgBALgKAAIgIgBg");
	this.shape_21.setTransform(6.1,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAeQgJgCgHgKQgHgJAAgKQACgLAIgIQAJgJAIABQAKAAAIALQAIAJgCAKQgBAMgKAIQgHAIgIAAIgCAAg");
	this.shape_22.setTransform(10.9,38.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBdQgegCgSgfQgTgdAEgkQADglAYgaQAXgbAcAEQAfACASAeQASAegEAkQgDAmgYAZQgUAXgZAAIgGAAgAguAcQgFApAvADQAPAGACgQQACgLgSgOIgHgHIgCgEQgFgIgEgJQgBgDgEAAIgEgBQgPAAgBAXgAAMgqQgJAIgCAKQAAANAHAJQAIAIAJABQALABAIgIQAJgHABgMQADgLgJgJQgHgLgKgBIgBAAQgKAAgIAJg");
	this.shape_23.setTransform(7.9,40.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AALAgQgsgEAEgnQADgYARADQADAAADACQADAKAEAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAHAHQASANgBAKQAAANgKAAQgEAAgFgCg");
	this.shape_24.setTransform(-31.7,42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAdQgLAAgHgLQgHgJABgLQACgKAHgIQAKgJAIAAQAKABAHALQAIAJgCAJQAAAMgKAIQgHAJgIAAIgBgBg");
	this.shape_25.setTransform(-27,35.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBdQgegDgTgeQgSgdAEgkQADgmAXgZQAYgbAbAEQAgACASAeQASAegEAjQgEAngXAZQgWAXgYAAIgFAAgAgvAbQgEApAuAEQARAHAAgSQACgKgRgPQgFgEgCgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgGgIgCgKQgDgCgEAAIgDgBQgPAAgCAWgAALgqQgIAHgCALQgBANAHAJQAHAIALAAQAKACAIgIQALgHAAgNQACgKgIgKQgIgKgKgBIgCAAQgJAAgIAJg");
	this.shape_26.setTransform(-29.8,37.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhOAhQBOAAAmghQAmggADgIQgLAsg+AaQgYALgXAAQgUAAgRgIg");
	this.shape_27.setTransform(-32.3,22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAkA1QglgNgcgYQglglADgmQABAIATAjQAWAoBQAiQACAAABABQABAAAAABQABAAAAAAQAAAAAAAAIgcgHg");
	this.shape_28.setTransform(15.2,23.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBD9B1").s().p("AALBpQgWgCgRgWQgFgJgGgIIgBgDQgDgDgBgGQgNgdACgZQAHhBAWgZIAFgEQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQACgCAEAAIgBACIAAAAIALgCQALgCAJABIAKAEIABACQARAHAHAWQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAABAAIgCAGIgBAAIgGALIgMAfQgXAxgBA5QgBADABADIABAEIgBABIAAAHg");
	this.shape_29.setTransform(-53.4,44.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBD9B1").s().p("Ag0BnQAGgWACgUIgBgGIABgIIAAgDIAAgDIAAgDQABgVgDgVQgCgDAAgFQgCgBAAgDIAAgGQgDgSADgUIAAAAIAAgCIABgDIgBAAIACgQIAAgCQANgOAQgFIANgDIAJADQAKABAHAIQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABACQAMALAIAXQAMAggDAWQgDAqgeAiQgZAagiAGIgIAAIgFgDg");
	this.shape_30.setTransform(34.2,52);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(-42.8,17.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDE5C3").s().p("AgmHFQgTABgQgGIgLgFIgZgJQgSgIgRgEQgJgFgLAAIhngeQgjgNgdgPQgTgJgSgNIgMgKQgggZgJgrIgHgUIAAgIIAAAAIAAgEQgCgEACgCQABg5AWgzIANgfIAGgLIABABIABgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIABgBIgDgFQgJgeAGhLIABgFQAAgJACgHQgXh4BJheQAug6A9gqQBohJB9AGQB6ADBzAtQCCA2AsCCQAoB1gzB2IgBgBIAAADIAAABQgDAogIApIAAADIAAAFIgEATIABAAIgBARIgBACIAAABIAAABQgCAVACARIAAAGQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQgBAEAEAFQACAWgBAWIABACIgBADIgBALIABAGQgCAUgGAXIgBAAIgEAMQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBACIAAABIgBADQgMAegXAVIgXARQgQAKgPAGIgIADIgBABQgcAIgdADIibAGIhPANQgIACgIAAIgHAAgAhhGzQgRgIgSgEIgFgBQAVAFATAIIAAAAgAlPiIIABgCIgBAAIAAACg");
	this.shape_32.setTransform(-9.3,31);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E85298").s().p("AgXB1IgHgwQgHgegfgJIgvgIQgcgHAZgOIArgTQAbgQgCggIgGgvQgCgdAVAUIAhAiQAWAVAdgMIArgVQAbgKgMAZIgXAqQgMAeAUAWIAhAjQATAVgcgDIgvgIQgggDgRAbIgUAqQgHALgFAAQgGAAgDgOg");
	this.shape_33.setTransform(-59.7,12.3,1,1,0,0,0,0.1,-1.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F2900").s().p("AhyCSQgMgNgKgPQgTgbgHgZQgVhGAphMQAphLBQgXQBCgUA5AjQAZAQARAYQAKALAGAPQAGAFAFAGQgNADgOAGIgrAEQh0AdAKBwQgJgJgEgLQgYgwAUg1IgXASQh0BmBgB3QgXgLgagdg");
	this.shape_34.setTransform(-76.1,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#471600").s().p("AhtCFQhgh3B0hmQAMgKALgIQgUA1AYAxQAFAJAHAJQgIhwBzgdIArgEIAbgIIAKAJIALAgQAQA8gcAfQgTARg3ASIgOAFQgtAPgNAOQgcAaAMAxQgggWgNgOIgRgcIgHAeQgCAOAEARIABAGQgJgCgIgFg");
	this.shape_35.setTransform(-71.8,30.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5F2900").s().p("AhPC3QgXgMgZgcQgNgOgJgPQgUgbgHgYQgVhGAphMQAphMBQgXQBDgTA4AiQAZAQASAYQAKALAGAPIAKAMIALAJIAJAgQASA5gdAgQgSATg4ASIgOAFQgtAPgPAOQgaAZAKAxQgegVgNgOIgRgcIgHAeQgCAOAEARIACAGQgKgCgIgFg");
	this.shape_36.setTransform(-74.6,25.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4F88C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_37.setTransform(25.1,-13.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAPQgHgDgBgIQgDgEAEgGQADgHAIgCQAEgCAGAEQAFADACAGQACAGgDAFQgDAHgGABIgFACQgDAAgDgCg");
	this.shape_38.setTransform(-57.5,46.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAPQgGgDgCgHQgCgFADgGQAEgGAFgCQAGgDAFAEQAGADADAHQADAFgEAEQgDAIgGABIgFABQgDAAgEgBg");
	this.shape_39.setTransform(36.3,47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E85298").s().p("AgIByIgQgtQgNgdgfgCIgwAAQgcgBAVgSIAngbQAXgVgHggIgQgsQgHgcAYAPIAnAbQAbAQAZgRIAngcQAXgQgGAcIgOAtQgHAgAZAUIAnAaQAWARgdADIgvAAQggAEgMAdIgOAuQgFANgFAAQgDAAgGgNg");
	this.shape_40.setTransform(40.1,22.8,1,1,0,0,0,0.6,-2.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5F2900").s().p("AArgZQgJgNgJgLQAGA3ghAqQgHAKgJAGQAihrhpg4IgpgOQgNgJgMgGIANgIQAKgNANgJQAWgTAcgJQA/gUA8AkQBIApAWBTQAWBSgmBBQgNAWgZAWQgNAMgQAKQgfAWgZAFQB5hchXh/g");
	this.shape_41.setTransform(54.2,39.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#471600").s().p("AA3CeQAIgQACgOIAAggIgXAYQgQAKgiAOQAVgtgTggQgMgSgngZIgNgHQgygdgNgXQgUgmAfg2IASgdIAMgFQALAFANAJIApAOQBpA4gkBrQAJgHAIgKQAjgngHg5QAJALAJAMQBYCAh6BcQgJACgKABIADgFg");
	this.shape_42.setTransform(47.9,42.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5F2900").s().p("AARC/QAIgQACgOIAAgfIgXAXQgOAKgkANQAXgsgVggQgMgRgogaIgMgHQgygfgNgVQgUgmAfg2IARgdIAMgGIANgIQAKgNAMgJQAXgTAcgJQA9gUA+AjQBIAqAWBTQAWBSgmBAQgNAXgZAWQgNALgQALQgfAWgZAFQgJADgLAAIAEgFg");
	this.shape_43.setTransform(51.8,39.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6240").s().p("AgWAlQgQgIgGgSQgDgQAKgRQAKgQATgEQAQgFAQAKQARAKAEARQAEAQgKARQgKAQgSAEQgHACgEAAQgMAAgKgIg");
	this.shape_44.setTransform(19.8,-9.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA6240").s().p("AgWAnQgRgMgEgRQgEgRAKgPQAKgQASgEQARgFASALQAPAIADASQAEAQgHASQgMAPgTAFIgKABQgLAAgLgGg");
	this.shape_45.setTransform(-65.3,11.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpAyQgfgPgKgeQgJgdARgeIAFgEQBFA3BVgYQADAWgNATQgTAfgiAKQgNAEgLAAQgUAAgTgJg");
	this.shape_46.setTransform(-0.1,-17.7,1,1,0,0,0,0.1,-0.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AguBDQgZgLgKgSQBUgcAdhVQADABADADQAfAOAJAfQAKAdgSAeQgSAcgiALQgOAEgMAAQgTAAgTgJg");
	this.shape_47.setTransform(-50.3,-9.6,1,1,0,0,0,-0.6,-0.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AiNAlQgLgagFgMQAlgTApgOIADAJQAJAfACAKIAGAiQABATgXAFIgKABQgeAAgUgmgAgZAgQgPgwgDgGIgDgXQAegIAegHIAWgDIAGAfIAHApIAEAkQgBATgWAEIgLABQgaAAgSglgABXAZIgHggQgCgIgFgjIgCgTQAsgFArABQgBAMABAsQgFAugiAIIgKABQgQAAgGgNg");
	this.shape_48.setTransform(-28.6,-39.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF99").s().p("AhNA5Qgdg+gJgyQgHgoAIgSQAJgUAdgBQAqgCBjBEQAdAYAZARQgpAignApQgsAuggApIgohOg");
	this.shape_49.setTransform(-66.9,-24.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9999").s().p("AiIBDQgnhagLhBQgIgwASgiQASgiApgCQBSgDCABJQA5AgAnAdQgiAagfAbQgZgRgdgYQhjhEgqACQgdABgJAUQgIASAHAoQAJAyAdA+IAoBOQgbAigUAhQgLggguhsg");
	this.shape_50.setTransform(-67.4,-24.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF99").s().p("AgEBUQgzgWgzgQQANgaAUgeQBBhnAmgRQAbgIAQANQAOAOAIAoQANAxgBBDIgGBZQgwgZg5gZg");
	this.shape_51.setTransform(10.5,-45.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9999").s().p("ABuCdIAHhYQABhFgNgwQgIgngOgPQgRgNgbAJQgnAQg/BlQgUAggOAbQgpgOgogKQAYgrAogyQBah2BMgdQAngOAeAWQAcAZALAwQAQBAABBhQACB2AAAiQgfgVgmgWg");
	this.shape_52.setTransform(9.6,-48.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9999").s().p("AouD+QgdiHCWiuQBGhXBbg2IArgXIAQAnQAYAsAkgHQAXgFgBgTIgGgiIgLgrIgCgJIAggKIADAWQADAHAPAxQAWAtAigJQAXgDACgUQgEgYAAgMIgHgqIgHgfIAjgHIACASIAEAsQAEALAEAXQAHASAZgGQAigHAEgxQAAgrABgNIAaABQCCAJBvBCQC3BqAdCGQADAVAAAUQgthliag0Qi3g+jnAvQjnAwiQCAQh7BsABBwQgIgSgEgVg");
	this.shape_53.setTransform(-20.8,-16.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CC6633").ss(1,1,1).p("AGEhOQAaCfhbCCQhaCBiCAnQh/AoiZhQQiZhQgvijQgvihBaiOQBaiKCjgkQChgkCMBaQCNBZAbCgg");
	this.shape_54.setTransform(-13.5,36.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9999").s().p("AlSIXQjOiVgxkEQgxkECEjXQCEjaDzg0QDwg1DTCNQDTCNA7D9QA8D8hyDUQhxDUkVBIQhaAYhQAAQirAAiLhkgAg6izQijAjhaCLQhaCMAvCjQAvCiCZBQQCZBQB/goQCCgnBaiBQBbiBgaihQgbifiNhYQhkhAhwAAQgqAAgvAKg");
	this.shape_55.setTransform(-15.8,16);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5B090").s().p("AhPAMIAIgGQATgJAPgFQAdgKAcgBQAggBAcALQgHAGgJADQgOADgSgDQgTgBgMABIgNAIIgQAHQgRAFgOAAQgOgBgGgHg");
	this.shape_56.setTransform(-15,66.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB5372").s().p("AhTAhQgHgUAUgRQAVgTAbgGQAZgIAXgBQAYgBAeASIAEAGQAEANgEAJIgGAJQgbgKggAAQgcABgdAKQgPAFgUAMIgHAFIgDgGg");
	this.shape_57.setTransform(-14.8,64.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhKAqQBLgHAmglQAiglACgHQgHAug6AeQgdARgcAAQgNAAgOgFg");
	this.shape_58.setTransform(-38.1,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AApAxQgogJgcgVQgpghgBgmQACAIAXAhQAaAlBTAaQABAAABAAQACABAAAAQABAAAAAAQAAAAgBAAIgcgEg");
	this.shape_59.setTransform(9.3,21.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(4.1,-8.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBDAC8").s().p("AAAAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_61.setTransform(3.2,-10.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8C589").s().p("AgfAJIgBgHIACgEQADgOAMgFQANgGAKAEQAKADAJAIQADAFADAHIgBAAIgLgEQgPgEgLAIQgNAJgCAQQgJgFgCgLg");
	this.shape_62.setTransform(-16.1,49.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#471600").s().p("AlWFhIgKgHQgGgFgDgGQhRhRgLhsQgBgjAEgjQAOhLA7gxQAzgwBEgPIgggVQgGgVAGgQQAFgUAJgSQALgTARgRQASgTAXgOQA0gjA9gZQAjgOAmgFQA8gLA8AYQAjAPAgAMQA2AUAvgYQgBAIgDAHQgGAPgQAJIAAACQARAGAQAIQArAZAjAlQAkAmATAwQALAgAIAgQAKAgADAhQAJAhAGAkIgEBPQgJAugPAvQgHg4gZg+QgSgug8h2QgKAVgUATQgmArglgFIgJgBQAPgPAEgIIAEgaQADgVgEgZQgCgVgHgQQgvBUhpA7QhoA+hbgEQAfguADgXQAEgZgBgEQgBgOgGgUQgtBLhCA9QhCA+hPAfQgFAvAJAiQABAHASA4IgHgGg");
	this.shape_63.setTransform(-17.6,6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5F2900").s().p("Al9FwQgPgCgRAHQgthLgVhhQgIgmgDgnQgFgmABgmQALg2Ang3QAggxAkgXIAHgEQA0h+CDhEQCEhCCSATQA2AIBfA5QALABAlAaQAlAaADAHQBIA5AlBtIAqBvQATA4gGA9QgIA9gSA2IglBVQADgOgCAEIgBADIgCgsQAKgtADgtIAEhPQgBglgDgiQgEgjgJgdQgIghgLgfQgTgxgkglQgjgmgrgZIgigOIABgCQAQgJAGgPIAEgPQgvAYg3gUQgfgMgjgPQg8gYg8ALQgnAEgiAPQg9AZg0AjQgXAOgSATQgRAQgLAUQgKASgEAUQgGAQAGAUIAgAWQhFAPgyAwQg1AwgJBKQgFAjACAjQAFBuBMBRQADAGAGAFQgSgOgNgBg");
	this.shape_64.setTransform(-17.7,3.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AAPAeQgtADgBgnQgCgYATAAQAEAAACACIAJAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAIAGQAWAKgBALQAAANgLAAIgGgBg");
	this.shape_65.setTransform(2.4,42.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgPAVQgIgJgCgMQABgJAHgIQAIgLAJgBQAJAAAJAKQAJAIgBALQABAKgIAJQgHAKgLABQgHAAgJgJg");
	this.shape_66.setTransform(6.2,35.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgvBDQgWgagBgnQgCgjAUgdQAUgdAegBQAdgBAWAbQAWAcAAAlQACAkgUAcQgTAcgfACIgDAAQgaAAgVgagAAVA8QAAgLgVgMIgGgGQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgLgQQgCgDgEABQgUgBADAYQABAqAtgDQARAEAAgQgAAGgsQgGAJAAALQAAANAIAIQAIAHAKAAQALgBAHgIQAIgJgBgMQABgLgJgIQgJgKgKAAQgLACgHAJg");
	this.shape_67.setTransform(3.6,38.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AAOAeQgrACgCgmQgBgYASAAQADgBAEACQAEAKAFAHQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAIAFQAUALAAAKQABAOgMAAIgHgBg");
	this.shape_68.setTransform(-35.3,44.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgQAVQgJgIAAgNQAAgJAHgIQAIgKAKgCQAIAAAJAKQAJAIAAALQABAKgJAKQgHAKgKAAIgBAAQgJAAgHgJg");
	this.shape_69.setTransform(-31.6,37.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgvBDQgWgagCgnQAAgkATgcQAUgeAdABQAegDAWAcQAVAcACAkQAAAlgSAdQgVAbgeACIgCAAQgbAAgVgagAAUA7QAAgKgUgNQgDgDgDgDQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgHgHgEgJQgDgCgEABQgSgBABAYQACApAsgCQATAEgCgRgAAFgsQgFAJAAALQAAANAHAIQAIAHALgBQAKAAAHgHQAJgKgCgMQABgLgJgJQgJgJgKAAQgKABgIAKg");
	this.shape_70.setTransform(-34.1,40.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBD9B1").s().p("AgMBWQgGgIgIgHIgBgDIgFgJQgRgbgBgbQgCg/ATgcQACgDACgBQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIABgCQADgCACgBIAAACIAAABIANgFQAJgDAJAAIAKACIACACQASAFAJAVQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIgBAGIgBgBIgEAMIgJAgQgPA0AGA5QgBACACADIABAEIAAABIABAHIgBAAIgDABQgXAAgPgTg");
	this.shape_71.setTransform(-57.1,49.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FBD9B1").s().p("AgiBqQADgXgBgUIgBgGIAAgIIgBgDIAAgDIAAgCQgDgWgFgUQgDgEAAgDQgCgBgBgEQABgDgCgDQgFgQAAgVIAAgCIABgDIgBAAIAAgQIgBgCQALgQAQgHIAMgFIALACQAIgBAIAIQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABABQANAKALAWQAQAfAAAVQACArgZAmQgXAdgeAJIgJACIgFgCg");
	this.shape_72.setTransform(30.8,46.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FDE5C3").s().p("AgVHFIgMgEIgbgHQgSgEgRgCQgKgEgLABIhrgQQgjgIgfgLQgUgHgTgLIgOgIQgigUgPgqIgKgTIAAgHIAAgBIgBgEQgCgDABgDQgGg4APg1IAIghIAFgLIABAAIABgHQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAIABgCIgEgFQgNgdgEhLIAAgEQgBgJABgIQgmh0A8hmQAmg/A3gyQBehWB+gLQB3gNB4AeQCIAlA9B7QA3BugjB+IgBgBIABADIAAABQABAngCApIAAADIABAFIgBATIABAAIAAARIAAACIABABIAAABQAAAVAEAQIACAGQAAAEACABQAAADADAFQAFAVACAWIABADIAAACIABAMIABAFQABAUgEAXIAAAAIgDANQgBAAABABIgBACIAAABIgBADQgHAfgUAYQgMANgJAHQgPAMgOAIIgIAFIAAAAQgaAMgdAGIiZAbQgmAMgoAMQgMAEgMABIgPABIgRgBgAgwG6QgRgGgSgBIgEAAQAUADATAEIAAAAgAlmhdIABgCIgBAAIAAACg");
	this.shape_73.setTransform(-13.9,31.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E85298").s().p("AgMByIgNguQgLgdgggFIgwgBQgcgEAXgRIAngYQAZgUgFgfIgNguQgGgcAXARIAmAdQAYARAcgPIAogaQAYgOgIAbIgRAsQgIAfAXAWIAlAcQAVATgcAAIgvgCQggACgOAcIgQAtQgGANgDAAQgFAAgFgOg");
	this.shape_74.setTransform(-66.8,18.9,1,1,0,0,0,-0.4,-2.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5F2900").s().p("AhZCeQgOgMgLgOQgXgXgKgYQgehFAehOQAfhQBMgiQBAgcA8AbQAcAMATAWQAMAKAIAOQAGAEAGAGQgNAEgNAHIgqAKQhuAsAVBuQgHgIgGgLQgegtANg1QgKAJgKAMQhmB0BvBpQgZgIgdgZg");
	this.shape_75.setTransform(-82.1,34.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#471600").s().p("AhZCUQhuhpBlh0IAVgVQgNA3AeAsQAHAKAIAIQgXhuBugsIAqgKQANgHANgEIALAHIAOAfQAZA5gYAjQgQAVg1AXIgNAHQgqAUgMAQQgYAeASAuQgjgRgPgMIgUgaIgDAfQAAAOAHARIACAFQgKgBgJgEg");
	this.shape_76.setTransform(-76.9,38.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5F2900").s().p("Ag2C9QgYgIgdgaQgOgLgMgOQgWgYgLgYQgehEAfhPQAfhQBMghQBAgdA8AcQAbAMAUAVQALAKAIAPQAHAEAFAFIAMAIIAOAeQAYA5gYAhQgPAWg1AZIgOAFQgqAWgNAQQgYAdASAuQghgQgPgNIgUgZIgDAfQgBAOAHAQIADAGQgKgBgJgEg");
	this.shape_77.setTransform(-80.1,34.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgEAQQgHgDgDgHQgCgFACgFQADgHAHgDQAEgDAHADQAFACADAGQADAGgCAFQgDAIgGACQgEACgDAAIgEgBg");
	this.shape_78.setTransform(-60.5,52.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFAQQgHgDgCgGQgDgGACgFQADgGAFgDQAHgEAEADQAHACAEAGQADAGgDAEQgDAJgFABQgEACgDAAIgFAAg");
	this.shape_79.setTransform(32.6,41.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E85298").s().p("AABB3IgTgqQgRgcggADIguAHQgcACASgVIAigiQAVgVgLgeIgWgrQgLgaAaALIArAWQAdAMAWgUIAighQAWgTgDAdIgIAuQgCAgAbASIAqAUQAYAOgbAGIgwAHQgfAIgIAeIgIAwQgDAOgGAAQgFAAgHgMg");
	this.shape_80.setTransform(33.5,16.4,1,1,0,0,0,0.2,-1.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5F2900").s().p("AAugfQgLgLgKgJQANA0gdAvQgFAKgHAIQAThuhvgqIgrgIQgNgIgMgEIALgLQAIgOAMgKQATgVAbgNQA8gdBAAcQBNAfAgBRQAhBNgdBGQgKAXgWAZQgMANgOANQgcAZgYAJQBthshohyg");
	this.shape_81.setTransform(48.7,31.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#471600").s().p("ABNCTQAGgRgBgOIgDgfIgUAaQgOANgiARQAQgvgYgdQgMgQgrgTIgNgGQg1gYgRgUQgYgjAXg5IAOgfIALgIIAaAMIAqAJQBvAqgVBuQAJgIAGgKQAdgtgOg3IAVAUQBnB0hsBrQgJAEgJABIACgFg");
	this.shape_82.setTransform(43.4,35.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F2900").s().p("AArC8QAGgRAAgOIgEgfIgUAbQgOAMggARQAQgvgYgdQgOgPgrgVIgNgFQg1gYgQgVQgZghAXg5IAOgfIALgIIAMgKQAIgPALgKQATgWAcgMQA7gcBAAbQBOAgAgBPQAgBOgdBFQgKAYgWAZQgLANgPANQgbAagZAIQgJAEgJABIACgFg");
	this.shape_83.setTransform(46.9,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-42.8,y:17.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:8.8,y:-18}},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-2.7,x:-39.5,y:52.4}},{t:this.instance,p:{regX:8.5,regY:4.3,rotation:-2.7,x:16.1,y:56.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{rotation:-5.4,x:-11.1,y:-9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_31,p:{x:-49.7,y:21.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_17,p:{x:-3.1,y:-20}},{t:this.shape_61},{t:this.shape_60},{t:this.instance_1,p:{regX:8.6,regY:4.3,rotation:-10.2,x:-44.3,y:54.2}},{t:this.instance,p:{regX:8.7,regY:4.7,rotation:-10.2,x:14.7,y:51.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2,p:{rotation:-16.5,x:-24.3,y:-6.2}},{t:this.shape_45},{t:this.shape_44}]},4).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-42.8,y:17.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:8.8,y:-18}},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-2.7,x:-39.5,y:52.4}},{t:this.instance,p:{regX:8.5,regY:4.3,rotation:-2.7,x:16.1,y:56.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{rotation:-5.4,x:-11.1,y:-9}},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_31,p:{x:-49.7,y:21.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_17,p:{x:-3.1,y:-20}},{t:this.shape_61},{t:this.shape_60},{t:this.instance_1,p:{regX:8.6,regY:4.3,rotation:-10.2,x:-44.3,y:54.2}},{t:this.instance,p:{regX:8.7,regY:4.7,rotation:-10.2,x:14.7,y:51.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2,p:{rotation:-16.5,x:-24.3,y:-6.2}},{t:this.shape_45},{t:this.shape_44}]},3).wait(4));

	// 圖層 4
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FDE5C3").s().p("AhFBTQgjgdgEgtQgDgsAdgiQAegkAtgDQArgEAjAeQAjAdADAtQAEArgdAkQgdAiguAEIgJAAQgnAAgegag");
	this.shape_84.setTransform(-31.6,98.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FDE5C3").s().p("AgsBaQgQgDgMgOIgGgLIgCgEQgMgTAMgbQAJgUAYgbQASgTAXgUIALgMIAGgEIBMBPQgsA9glAZQgVAQgUAAIgJgBg");
	this.shape_85.setTransform(-37.8,103.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FDE5C3").s().p("AgIBtQgugEgdgiQgdgkAEgrQADgtAjgdQAjgeArAEQAtADAeAkQAdAigDAsQgEAtgjAdQgeAagnAAIgJAAg");
	this.shape_86.setTransform(6.9,100.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDE5C3").s().p("AgFBLQglgZgsg9IBMhPIAGAEIALAMQAXAUASATQAYAbAJAUQAMAbgMATIgCAEIgGALQgMAOgQADIgJABQgUAAgVgQg");
	this.shape_87.setTransform(13.1,105.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FDE5C3").s().p("AhFBTQgkgegDgsQgEgsAdgjQAfgjAtgDQArgEAiAeQAjAdAEAuQAEArgdAiQgeAjgtAEIgJAAQgmAAgfgag");
	this.shape_88.setTransform(-28.6,100);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FDE5C3").s().p("AgfA5QgkgHgMgTQgKgOACgRIAEgLIABgFQAFgVAcgLQAVgJAjgCIA4ABIAZACIgCBsQgvAIgiAAQgUAAgQgDg");
	this.shape_89.setTransform(-38,99.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDE5C3").s().p("AgkBnQgrgQgTgpQgTgpAPgoQAQgsApgTQAogUApARQArAOAUApQATApgPAqQgPAqgqAUQgXALgXAAQgRAAgTgHg");
	this.shape_90.setTransform(3.4,101.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FDE5C3").s().p("AAWBGQgpgChGghIAZhpIAIABIARAEQAeAGAXAHQAiAMASAOQAZASgCAUIABAEIAAANQgCASgNALQgOANgbAAIgMgBg");
	this.shape_91.setTransform(12.2,102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},4).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},8).wait(3));

	// 圖層 2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#813682").s().p("AgCArQgQgkgLgnQgJgegEgeIgDgYQAOAAAPAJQANAGALAMIASASIAHAJIAGA2IAEA5IADBEQgcgegUgsg");
	this.shape_92.setTransform(0.2,90.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#813682").s().p("AgqAxIAEg5IAGg2IAHgJIATgSQAKgMAMgGQAQgJAOAAIgDAYQgEAegIAeQgLAngRAkQgTAsgcAeg");
	this.shape_93.setTransform(-27.1,90.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#965F9A").s().p("AiSBVQBpgWA/g/QAYgVARgaQAMgTAGgSIBCBpQhFAlhQAPQg8AMhBAAIgTAAg");
	this.shape_94.setTransform(-1.4,132.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AF86B4").s().p("AhaBdQgkgFgkgJQgZgFgWgHIgRgGIBGigIFuAAIARAdQgGASgMATQgRAagXAVQhCA/hnAXQgsgCgugFg");
	this.shape_95.setTransform(-16,131);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F2AB00").s().p("Ag+BlQAzgkAfhDQANgaALgdIANgrQAEAkABAoQABAegBAhIgCAtIgCARg");
	this.shape_96.setTransform(-0.8,110.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FDDC00").s().p("AizDYIgBgQIgDgpQgChFAFg9QAJhVAXg6QAehKAzgbQAgASAgACQAoAEApgVQAvAcAdBDQAVA2AKBMQgNA1gXAtQgiBFgyAkg");
	this.shape_97.setTransform(-13.6,99.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E35E46").s().p("AgTAhQgogCgpgLIANgvQAkATAlgGQAZgEAYgPQAUAKAOAKQAXAPAJARIgEABIgLAEQgUAFgWACQgUADgVAAIgWgBg");
	this.shape_98.setTransform(-2,163.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C2C1C1").s().p("Ag/AfIAThIIBsgDQgCAVgDAQQgDARgFALIABAAIABABIACABIADACQgYAPgbAEIgQABQgbAAgbgOg");
	this.shape_99.setTransform(-4.3,157.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F6C59A").s().p("AgoAAQAGgpgBgfIBSgGIAFAzIADAxIgBA2IhsADQAJguAFghg");
	this.shape_100.setTransform(-3.3,144.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E35E46").s().p("AgrAfQgXgCgUgFIgKgEIgEgBQAJgRAXgPQAPgLATgJQAXAPAYAEQAmAGAjgTIAPAvQgqALgoACIgWABQgUAAgUgDg");
	this.shape_101.setTransform(-23.6,163.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C2C1C1").s().p("AgHAsQgagEgYgPIADgCIACgBIABgBIABAAQgLgVgCgsIBtADIASBIQgbAOgcAAIgQgBg");
	this.shape_102.setTransform(-21.4,157.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F6C59A").s().p("Ag1BMQgCgYABgeQAAgWACgbIAFgzIBSAGQgBAfAHApQAFAjAKAsg");
	this.shape_103.setTransform(-22.3,144.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EB8972").s().p("AhXgKICqhgIAFCOIhlBHg");
	this.shape_104.setTransform(-34,92.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EB8972").s().p("AhYAgIASiOICgBuIhTBvg");
	this.shape_105.setTransform(2.5,90.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8D1A7").s().p("Ag2AsIAAhXIBtAAIAABXg");
	this.shape_106.setTransform(-13,78.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-61.8,163.2,228.4);


(lib.男生頭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE7B6A").s().p("AhmADQAWgSA0gOQAzgPBQAeQghAgg0ANQgNAEgLAAQgrAAg1ggg");
	this.shape.setTransform(85,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB5372").s().p("AhaBVIg5g9Qgyg2gVgtQAFAFBgAOQBhAOCCghIgCAAIBigYIAEAAQASAIgUAzQgUAxgEAHIgNAVQgMATgYAZQhQgeg0APQgyAOgWAUIgVgPg");
	this.shape_1.setTransform(81.7,128.7);

	this.instance = new lib.紅暈();
	this.instance.setTransform(119.1,116.7,1.183,1.183,-6.2,0,0,8.8,4.5);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(42.6,112.9,1.182,1.182,-3.4,0,0,8.7,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AicAWQBFg+BIAAQBGABAyAWQAxAVADADIglAUQhTggg0AFQg3ADgbASQgcARAAADg");
	this.shape_2.setTransform(54.3,76.5,1,1,0,0,0,0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGgNQhBgIgvARQguAPgCADIgOgTQBUhHBNAQQBKAPAyApQAyAnACAFIgZAYQhGhFhEgIg");
	this.shape_3.setTransform(111.2,77.2,1,1,0,0,0,0.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#443100").s().p("AgZB8QgdhQgPhiQgQhiAog6IB4CxQgGACgiBDQgjBGAGBpQgDgFgchSg");
	this.shape_4.setTransform(25.4,76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#443100").s().p("AJnHLQAMh6geiDQgIAChNg8QhMg8g5ieQAAAFhSBBQhRBEiWBLQiVBNjQAfIBBgkQBAgjBSg6QBQg6A/hEIhQA0QhPAyh5BAQh5A/iDAnQAIgFBQhPQBQhPAxhdQgDAFg9BEQg+BEhWBEQhYBEhSAGQADgBAPgXQAPgWgHgnQgGgFgUhQQgGgXgBgYIgCAAIgBgXIAAgGQhdgfgxhZQgagwgXg0QA5AHA5gTIAagIQhSgUgkhOQgPgfgIghQgKglAHglQADgOABgQQA2AdA6ARQAVAFAUgDQCGgWBZgtQBZgsAngQQAmgQBEgKQEHg5EMBOQCkAuBwCAQEoCCgoE+QgIBEgaA7QADBfhCB1QgIAIg7BEQg8BDgPAgQAFgLALh5g");
	this.shape_5.setTransform(80.5,52.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AATAlQg3AFgCgxQgEgdAYgBQAEAAADAEQAGAKAFAJIADADIALAHQAaAMAAANQABARgPAAIgHgBg");
	this.shape_6.setTransform(57.8,101.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAaQgJgJgDgQQAAgLAJgLQAJgMANgCQAKAAALALQAMAJgBAPQABAMgKALQgIAMgNABIgCAAQgJAAgKgKg");
	this.shape_7.setTransform(62.2,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4BUQgbgggDgwQgEgqAZglQAWgjAlgCQAkgDAaAgQAdAiABAtQAEAsgXAjQgXAjglADIgGAAQgfAAgagdgAAbBIQAAgNgagOQgEgDgEgEQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgIgIgGgLQgCgDgFAAQgXAAADAdQACAzA3gFQAWAEgBgTgAAGg2QgHALgBANQACAPAJALQALAIALgBQAOgBAIgJQAKgMgCgOQABgPgLgJQgMgLgMAAQgNABgIANg");
	this.shape_8.setTransform(59.3,96.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AATAlQg3AFgCgxQgEgdAYgBQAEAAADAEIALATIADADIALAHQAaAMAAANQABARgPAAIgHgBg");
	this.shape_9.setTransform(103.1,101.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAaQgJgJgDgQQABgLAIgLQAJgMANgCQAKAAALALQAMAJgBAPQABAMgKALQgIAMgNABIgCAAQgJAAgKgKg");
	this.shape_10.setTransform(107.3,93.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BUQgbgggDgwQgEgqAZglQAWgjAlgCQAkgDAaAgQAdAiABAtQAEAsgXAjQgXAjglADIgGAAQgfAAgagdgAAbBIQAAgNgagOQgEgDgEgEQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgIgIgGgLQgCgDgFAAQgXAAADAdQACAzA3gFQAWAEgBgTgAAGg2QgHALgBANQACAPAJALQALAIALgBQAOgBAIgJQAKgMgCgOQABgPgLgJQgMgLgMAAQgNABgIANg");
	this.shape_11.setTransform(104.3,96.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE7B6A").s().p("AgeABQADgMAbgCQAbABADAMQgCAMgcACQgaAAgEgNg");
	this.shape_12.setTransform(79.6,109.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBD8B5").s().p("AiFJ/Qj9gthphiQhohigUhVQgThVAFgFQgCiJgchbQgchdgFgEQgli1A8htQA8huBKgxQBLgwAHAAQDehECWASQCTARAGAIQAJgFCTAfQCUAfC9CIQAHABA2BGQA4BGAVB7QAWB6hdCeQgFACg5BQQg4BQguCAQADAHgtBKQgtBKiDA8QhQAkh+AAQhOAAhjgPg");
	this.shape_13.setTransform(88.3,85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8C499").s().p("Ag3A7IAwh4QAHgEAiAHQAjAFgXA0QAAAEgbAkQgSAZgcAAQgNAAgPgFg");
	this.shape_14.setTransform(139.4,120.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8C499").s().p("AgWA8QgPgbACgEQgRhMAbgSQAZgSAEAEIAnCeQgMACgJAAQghAAgLgVg");
	this.shape_15.setTransform(25.5,106);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBD8B5").s().p("AhlBbIBli/QABgCAhgFQAggFAYAWQAYAVgWBLQAAAEgZAiQgZAigqAWQgSAJgUAAQgdAAgigSg");
	this.shape_16.setTransform(140.6,121.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBD8B5").s().p("AgmBdQgVgeACgEQgfhWATgoQATgoAfgLQAdgLADACQBNBWgQBRQgPBSgJAGQhCgFgWgeg");
	this.shape_17.setTransform(23.5,105.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE7B6A").s().p("AhkAOQATgUAygUQAxgTBTAVQgdAjgzATQgRAGgSAAQgmAAgwgWg");
	this.shape_18.setTransform(84.1,138.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CB5372").s().p("AhJBlQgHgEg4gzQg3gwgZgsQAFAFBhAEQBhAEB+guIgBAAIBfghIADAAQATAFgOA1QgPA1gEAGQABABgLAUQgKAVgWAbQhSgWgzAUQgwAUgUAVIgWgMg");
	this.shape_19.setTransform(79.1,128.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiaAfQA+hEBIgHQBFgHA0ARQAzASADADIgjAWQhVgYg0ALQg2AIgaAUQgZAVABACg");
	this.shape_20.setTransform(47.4,80,1,1,0,0,0,-0.2,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AADgIQhDgBgrATQgtAWgBADIgQgTQBMhNBOAIQBMAIA2AjQA1AiADAFIgYAaQhLg+hFgBg");
	this.shape_21.setTransform(104.1,74.9,1,1,0,0,0,0.3,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#443100").s().p("AgFB8QglhNgZhfQgZhhAig9ICICkQgFACgbBHQgcBIARBoQgEgFgkhOg");
	this.shape_22.setTransform(17.9,83.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#443100").s().p("AKlGsQAAh7gsiAQgHAEhSg1QhSg0hJiXQAAAFhLBJQhJBMiOBZQiNBcjLA0IA9gqQA8gqBLhCQBKhCA4hMQgDAEhJA6QhHA6hyBLQhyBLh/A1QAIgGBIhXQBHhWAohiQgDAFg2BKQg2BKhQBNQhQBMhRAOQADgBANgZQAMgYgLgmQgGgEgchNQgIgWgEgYIgCAAIgDgYIgBgFQhggWg5hVQgfgrgcgxQA5ABA3gZIAZgKQhUgNgrhKQgSgcgLggQgNgkADgmQABgPgBgPQA5AYA7AKQAVADAVgFQCCgjBVg1QBTg2AmgTQAkgUBDgRQEChTEQAzQCoAdB8B0QEzBkgIFAQgBBFgUA9QANBeg2B7Ig7BSQg1BJgMAhQAEgLgBh5g");
	this.shape_23.setTransform(69.1,49.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgngDQgHgcAXgEQAFAAAEADQAGAJAIAIIACAEIALAFQAbAKABANQADAUgWgDQgKACgJAAQgkAAgGgng");
	this.shape_24.setTransform(53.5,104.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAcQgKgIgFgPQgBgMAIgMQAIgNAMgDQAKgBAMAKQANAIAAAOQADANgIAMQgHAMgOADIgEAAQgHAAgKgIg");
	this.shape_25.setTransform(57,96.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgvBZQgfgdgHgvQgIgqAUgmQATgnAlgFQAjgHAeAeQAfAeAGAuQAJArgUAlQgTAlglAGIgNACQgbAAgZgYgAgeAPQgXADAGAdQAHAyA3gLQAWACgDgUQgBgMgbgMIgJgGQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQgIgIgHgKQgDgCgDAAIgCAAgAAUhGQgNACgHANQgGANABANQAEAPAJAJQAMAHAMgCQANAAAGgNQAJgMgDgOQgBgPgMgIQgKgIgKAAIgEAAg");
	this.shape_26.setTransform(54.4,99.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgngDQgHgcAXgEQAFAAAEADQAGAJAIAIIACAEIALAFQAbAKABANQADAUgWgDQgKACgJAAQgkAAgGgng");
	this.shape_27.setTransform(98.5,100.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAcQgKgIgFgPQAAgMAHgMQAIgNAMgDQAKgBAMAKQANAIAAAOQADANgIAMQgHAMgOADIgEAAQgHAAgKgIg");
	this.shape_28.setTransform(101.8,91.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvBZQgfgdgHgvQgIgqAUgmQATgnAlgFQAjgHAeAeQAfAeAGAuQAJArgUAlQgTAlglAGIgNACQgbAAgZgYgAgeAPQgXADAGAdQAHAyA3gLQAWACgDgUQgBgMgcgMIgIgGQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQgIgIgHgKQgDgCgDAAIgCAAgAAUhGQgNACgHANQgGANABANQAEAPAJAJQAMAHAMgCQANAAAGgNQAJgMgDgOQgBgPgMgIQgKgIgKAAIgEAAg");
	this.shape_29.setTransform(99.2,95.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE7B6A").s().p("AgdAEQABgMAcgFQAZgCAFANQgBALgbAFIgGAAQgVAAgEgKg");
	this.shape_30.setTransform(75.8,109.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBD8B5").s().p("AgzKDQj/gUhzhXQhyhXgbhSQgchTAFgGQgRiHglhaQglhYgFgEQg3iwAxhzQAwhzBGg4QBFg3AHAAQDWhaCWACQCVACAHAIQAIgHCWARQCVAQDKB0QAHAAA9BAQA+BBAiB4QAiB4hMClQgFADgxBWQgvBUghCFQADAGglBOQgmBPh8BIQhqA+jMAAQggAAglgCg");
	this.shape_31.setTransform(80.3,85.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8C499").s().p("AgxA/IAjh9QAHgEAiADQAjACgRA1QABAHgYAkQgSAeghAAQgJAAgLgCg");
	this.shape_32.setTransform(136.6,115.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8C499").s().p("AgTA/QgRgZABgFQgYhJAZgUQAYgVAFADIA1CaQgRAEgNAAQgZAAgMgRg");
	this.shape_33.setTransform(22,112.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBD8B5").s().p("AheBlIBSjIQADgDAdgIQAggIAaATQAaATgOBPQAAACgVAkQgVAkgqAbQgTANgZAAQgaAAgegMg");
	this.shape_34.setTransform(137.9,115.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FBD8B5").s().p("AgaBkQgZgbACgFQgohTAPgpQAPgqAegOQAdgOACACQBUBNgHBSQgHBUgHAHIgKAAQg7AAgWgag");
	this.shape_35.setTransform(19.5,111.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1,p:{regY:4.3,rotation:-3.4,x:42.6,y:112.9}},{t:this.instance,p:{scaleX:1.183,scaleY:1.183,rotation:-6.2,x:119.1,y:116.7}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1,p:{regY:4.4,rotation:-9.2,x:39.5,y:117.4}},{t:this.instance,p:{scaleX:1.182,scaleY:1.182,rotation:-11.9,x:115.9,y:113.5}},{t:this.shape_19},{t:this.shape_18}]},15).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1,p:{regY:4.3,rotation:-3.4,x:42.6,y:112.9}},{t:this.instance,p:{scaleX:1.183,scaleY:1.183,rotation:-6.2,x:119.1,y:116.7}},{t:this.shape_1},{t:this.shape}]},4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-6.8,168.7,157.4);


(lib.男A開頭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.男生頭();
	this.instance.setTransform(122.2,184.1,0.6,0.6,0,0,0,81,75.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:89,regY:149.6,rotation:2.3,x:126.9,y:228.4},0).wait(4).to({regX:81,regY:75.6,rotation:0,x:122.2,y:184.1},0).wait(8));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C66A5").s().p("Ag9A/QAhgUAggrQANgOALgTIARgdIASB9g");
	this.shape.setTransform(137.5,278.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4177B4").s().p("AAeBRIgTgwIgUAwIiaAAIADihIFAAAIAEAkQgSAigWAcQgjArghAUg");
	this.shape_1.setTransform(125.6,276.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09A85B").s().p("Ag8BaQAzgeAfg9QANgXAJgbQAHgTAEgTQAEAgABAkQABAZgBAeIgBAoIgCAQg");
	this.shape_2.setTransform(135.9,259.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67B958").s().p("AicC9IgBgNIgDglQgCg7AFg3QAHhIAVg1QAahAAugYQAbAPAdACQAjAFAjgTQApAXAYA5QAUAvAIBCQgLAvgWAqQghA+gzAeg");
	this.shape_3.setTransform(125.2,249.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#623B20").s().p("AhUgDQAjAEAegLQAUgKAPgSQASAEAQAFQAXAIAMAMIgMAHQgPAHgSAJQgZAKgaAGQgkAIglABg");
	this.shape_4.setTransform(142.3,304.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF74F").s().p("AgxAuQABgegDgjIBagdQAJAngDAUIAEAAIADABQgQARgWAKQgSAKgWAAQgLAAgMgDg");
	this.shape_5.setTransform(138.8,298.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCE2BA").s().p("AgpAJQgGgkgHgZIBDgaIAQArQAIAVAGATQAIAZAEAUIhaAdQgDgngDgfg");
	this.shape_6.setTransform(137.2,288.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#623B20").s().p("AglAbQgVgBgQgEIgNgEQAHgOAUgNQAOgLAPgIQAWANAVACQAgAFAfgRIAOAoQgkAKgkADIgTABQgSAAgRgCg");
	this.shape_7.setTransform(117.2,305.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF74F").s().p("AgEAmQgYgDgVgMIADgBIACgDIABAAQgFgJgDgOIgFghIBfAAIASA/QgZAMgZAAIgLAAg");
	this.shape_8.setTransform(119,300);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCE2BA").s().p("AguBEQgCgWAAgaIABgqIAEgtIBIAEQAAAaAGAlIAOBEg");
	this.shape_9.setTransform(118,289.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8D1A7").s().p("AgvAnIAAhNIBfAAIAABNg");
	this.shape_10.setTransform(125.9,231);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCE2BA").s().p("Ag2BOQghgYgGgnQgHglAXghQAYggAngGQAlgHAhAYQAfAXAHAnQAHAlgYAgQgYAhgmAGIgPACQgdAAgZgSg");
	this.shape_11.setTransform(159.8,266.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#75C5F0").s().p("AgvAuIgkh5ICnAiIgeB1g");
	this.shape_12.setTransform(139.5,238.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCE2BA").s().p("AA4AAQgkgwg6gYQgrgSgzgEQgRgCgPABIgJAAIgDAAIAYgzQCAgKBOAqQBAAiAfBAQAXAtAEA5QABASgBARIgBANIhKAPQgChcgrg5g");
	this.shape_13.setTransform(145.7,249.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// 圖層 3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCE2BA").s().p("AhCBYQgggcgFgrQgDgpAdggQAbghAsgEQAZgCAYAMQgCgZALgDQAJgEAMANQANANAIAWQALAegFAVQADAMABAGQACAqgbAiQgdAggqADIgIAAQglAAgdgZg");
	this.shape_14.setTransform(73.2,235);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#75C5F0").s().p("AhLgOICXhMIgBB9IhbA4g");
	this.shape_15.setTransform(108.7,243.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCE2BA").s().p("AhXBVQgxgQgtglIgZgZIgJgHIAphAQBEA/BJAHQA4AHA8gYQAqgTAngiIAXgWIAFgHIACgCIAWA1QhSBghVAeQgjAMghAAQgiAAgigLg");
	this.shape_16.setTransform(98.8,243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCE2BA").s().p("Ag3BjQgkgXgJgrQgJgoAYgjQAXglArgJQAZgFAYAIQgFgYALgFQAIgFAPAMQANALAMAVQAOAcgCAVQAEAMACAIQAIAogXAkQgYAkgqAIQgMACgJAAQgdAAgagRg");
	this.shape_17.setTransform(73.1,239.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#75C5F0").s().p("AhNAAICNhgIAOB9IhTBEg");
	this.shape_18.setTransform(109.3,243.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCE2BA").s().p("AhJBqQgygKgxgfQgOgKgOgLIgKgIIAhhDQBKA0BKAAQA5AAA3ggQAngZAkgmIATgZIAFgHIABgCIAcAxQhDBqhSAoQguAWgvAAQgVAAgVgDg");
	this.shape_19.setTransform(99.1,243.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCE2BA").s().p("Ag2BkQgkgWgKgrQgJgnAXglQAWglArgJQAZgGAYAIQgFgZAKgEQAJgGAOAMQAOALAMAUQAPAcgCAVQAFALABAJQAKAngXAlQgXAlgqAJQgMADgLAAQgcAAgagRg");
	this.shape_20.setTransform(73.2,240.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#75C5F0").s().p("AhNABICKhhIARB8IhRBFg");
	this.shape_21.setTransform(109.4,243.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCE2BA").s().p("AhGBtQgygJgygeQgPgJgOgLIgKgIIAfhDQBMAyBKgCQA5gCA2ggQAngaAignIATgZIAEgIIACgCIAdAxQhBBrhRAqQgvAZgyAAQgSAAgTgDg");
	this.shape_22.setTransform(99.1,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},6).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.8,134.6,109.7,173.6);


(lib.男A失敗 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA6240").s().p("AgZAbQgMgJgBgQQAAgOALgNQALgLAQgBQAOgBAMALQANAMAAAOQABAOgMANQgLALgPABIgCAAQgOAAgLgLg");
	this.shape.setTransform(23.2,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA6240").s().p("AgZAdQgNgNAAgPQgBgOAMgLQALgMAQAAQAOgCAOAMQAKAKABAQQAAAOgJAMQgNALgQABQgOAAgMgJg");
	this.shape_1.setTransform(-51.6,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsAqQgYgQgEgaQgFgbAUgWIADgEQA2A1BKgHQgCARgOAQQgTAXgeAEIgLABQgXAAgTgMg");
	this.shape_2.setTransform(9.6,-30.9,1,1,0,0,0,-0.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvAxQgRgNgHgRQBJgMAkhEIAEADQAZAQAEAbQAEAagTAWQgTAXgeAFIgLABQgXAAgUgNg");
	this.shape_3.setTransform(-34.1,-28.7,1,1,0,0,0,-0.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#510600").s().p("AgSALQgIgFAAgGQAAgFAIgFQAIgFAKAAQALAAAIAFQAIAFAAAFQAAAGgIAFQgIAFgLAAQgKAAgIgFg");
	this.shape_4.setTransform(-13.4,-16.5,4.48,3.011,0,0,0,0,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("Ag1AvQgXgUAAgbQAAgaAXgUQAXgTAeAAQAfAAAXATQAXAUAAAaQAAAbgXAUQgXATgfAAQgeAAgXgTg");
	this.shape_5.setTransform(-5.3,-9.4,1.262,1.262);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("Ag1AvQgXgUAAgbQAAgaAXgUQAXgTAeAAQAfAAAXATQAXAUAAAaQAAAbgXAUQgXATgfAAQgeAAgXgTg");
	this.shape_6.setTransform(-23.1,-9.4,1.262,1.262);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC6633").ss(1,1,1).p("ADlj7QhlhNiEAJQiJAJhgBBQhhBAAGCVQAHCUBgBnQBfBmCEAAQCIAABfhmQBghnAAiPQAAiShkhOg");
	this.shape_7.setTransform(-10.7,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("Al5GMIgJgJQifihAAjiQAAh8AzhsIADgGQAhhgBSg+QCciXDcAAQDGAACUB7IAGAFIAEADIAAAAQBbBMAzBwQAwBqAAB6QAADiihChQgeAeghAYQiKBri4AAQjcAAidiYgAABhpQiHAJhgBBQhgA/AFCVQAHCVBgBnQBfBmCEAAQCIAABfhmQBghnAAiRQAAiShkhLQhahGh1AAIgcABg");
	this.shape_8.setTransform(-11.4,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AghA0QgWgNgGgZQgFgXANgWQAOgWAagGQAXgGAWAOQAYANAGAZQAFAYgPAVQgOAWgZAGQgIACgGAAQgRAAgPgKg");
	this.shape_9.setTransform(28.4,-34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("Ag0BUQgkgVgJgpQgJgmAWgjQAXgiAogKQAngJAjAVQAkAWAJAoQAJAmgWAiQgXAjgoAJQgNADgKAAQgbAAgYgOgAgUgvQgZAGgOAWQgOAUAFAZQAGAZAWANQAWAOAYgGQAagGAOgWQAPgVgGgYQgGgZgXgNQgQgJgPAAQgHAAgIABg");
	this.shape_10.setTransform(29.1,-35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AgrAtQgRgTAAgaQAAgZARgSQATgTAYAAQAZAAASATQASASAAAZQAAAagSATQgSASgZAAQgYAAgTgSg");
	this.shape_11.setTransform(-52.2,-34.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("AhFBHQgcgeAAgpQAAgoAcgeQAdgdAoAAQAoAAAdAdQAdAeAAAoQAAApgdAeQgdAdgoAAQgoAAgdgdgAghgiQgRATAAAYQAAAaARATQATASAYAAQAZAAASgSQASgTAAgaQAAgYgSgTQgSgTgZAAQgYAAgTATg");
	this.shape_12.setTransform(-53.2,-35.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_13.setTransform(-51.2,45.3,0.532,0.532,0,0,0,-0.1,-0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_14.setTransform(30.5,42.9,0.644,0.644,0,0,0,0.3,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_15.setTransform(-7,-57.9,1.29,1.29);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_16.setTransform(46.6,10.6,1.29,1.29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_17.setTransform(42.5,31.1,0.869,0.869,0,0,0,0.2,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_18.setTransform(45.3,-14.9,1.29,1.29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_19.setTransform(36.5,-39.1,1.29,1.29);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_20.setTransform(16.8,-53.2,1.29,1.29);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_21.setTransform(-32.8,-55.4,1.29,1.29);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_22.setTransform(-54,-45.4,1.29,1.29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_23.setTransform(-67.5,-26.8,1.29,1.29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_24.setTransform(-72,-2.7,1.29,1.29);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_25.setTransform(-69.5,19.7,1.065,1.065,0,0,0,0.2,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_26.setTransform(-60.7,36.5,0.7,0.7,0,0,0,-0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB8972").s().p("AA1AZIgcgKIgagKQgWgFggAJQgeAIgZgFQgSgFgLgHQAtgWA3gFQAygEA0AMQAbAHAjAPIAPAHQgJAOgYAEQgJABgJAAQgRAAgTgEg");
	this.shape_27.setTransform(-13.6,47);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B3E50").s().p("ACEA0QgkgRgagHQg1gMgyAEQg3AFgtAXQgIgHgEgJQgJgRAFgWQACgHADgFQAygkApgCQApgCAuAIQAwAHAmAdQAnAbgIAkQgCAGgDAFIgOgHg");
	this.shape_28.setTransform(-14.2,42.1);

	this.instance = new lib.紅暈();
	this.instance.setTransform(14.3,33.7,0.851,0.851,-6.2,0,0,8.8,4.5);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-40.5,30.9,0.851,0.851,-3.4,0,0,8.8,4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhpAgIAQgVQAAACAXAEQAXAEAmgLQAjgKAugsIAeADQAAADgbAdQgcAagvATQgUAJgZAAQgeAAgigNg");
	this.shape_29.setTransform(-32.3,4.3,1,1,0,0,0,0.2,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglAqQgzgYgShLIARgGQAAADATAeQATAdArAXQApAYBGgLIAEAYQgDADguACIgJAAQgrAAgrgWg");
	this.shape_30.setTransform(8.7,3.9,1,1,0,0,0,-0.1,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#443100").s().p("AgRBaQgWg7gKhFQgMhHAdgpIBWB+QgEACgZAwQgZAyAEBLQgCgDgTg6g");
	this.shape_31.setTransform(-53,4.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AANAaQgnAEgBgiQgDgVARgBQADAAACACQAEAIAEAGIACADIAIAFQASAHAAAKQABAMgLAAIgFgBg");
	this.shape_32.setTransform(-29.7,23);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNASQgHgGgCgMQABgHAGgIQAGgJAJgBQAHAAAIAIQAIAGAAALQABAIgHAIQgGAJgKABIgBAAQgGAAgHgIg");
	this.shape_33.setTransform(-26.5,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnA8QgUgXgCgiQgDgeASgaQAQgaAagBQAZgCAUAXQAUAYABAhQADAfgRAZQgQAZgbACIgFAAQgWAAgRgVgAATAzQABgJgTgKIgGgFIgCgDIgKgNQgBgDgEAAQgQABACAVQABAkAogDQAPADgBgPgAAEgnQgEAJgBAJQABALAHAHQAHAGAJgBQAJAAAGgHQAHgIgBgLQABgKgJgHQgHgIgJAAQgKABgGAJg");
	this.shape_34.setTransform(-28.7,19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AANAaQgmAEgCgiQgCgVAQgBQAEAAACACIAHAOIACADIAIAFQATAHgBAKQABAMgLAAIgFgBg");
	this.shape_35.setTransform(2.8,23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNASQgHgGgCgMQABgHAGgIQAGgJAJgBQAHAAAIAIQAIAGAAALQABAIgHAIQgGAJgKABIgBAAQgGAAgHgIg");
	this.shape_36.setTransform(5.8,17);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnA8QgUgXgCgiQgDgeASgaQAQgaAagBQAagCATAXQAUAYABAhQADAfgRAZQgQAZgbACIgFAAQgWAAgRgVgAATAzQABgJgTgKIgGgFIgCgDIgKgNQgBgDgEAAQgQABACAVQABAkAogDQAPADgBgPgAAEgnQgEAJgBAJQABALAHAHQAHAGAJgBQAJAAAGgHQAHgIgBgLQABgKgJgHQgHgIgJAAQgKABgGAJg");
	this.shape_37.setTransform(3.7,19.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE7B6A").s().p("AgUAAQABgHATgCQAUABACAIQgCAIgUACQgTgBgBgJg");
	this.shape_38.setTransform(-14,28.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FBD8B5").s().p("AhgHMQi1ghhMhGQhLhHgOg9QgOg9AEgEQgChigUhBQgUhDgDgDQgbiCArhPQArhOA2gkQA1gjAFABQCggxBsAMQBpANAFAGQAGgEBqAWQBqAXCIBhQAFABAnAyQAoAzAQBYQAPBZhDBwQgDACgpA5QgoA5giBdQADAFghA1QggA1hfArQg5AahbAAQg4AAhHgKg");
	this.shape_39.setTransform(-7.7,10.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8C499").s().p("AgnAqIAihWQAFgCAYAEQAaAFgRAkQAAADgTAZQgOATgTAAQgJAAgLgEg");
	this.shape_40.setTransform(28.9,36.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F8C499").s().p("AgQArQgKgTABgDQgMg2ATgNQASgNADADIAcBxIgPABQgXAAgJgPg");
	this.shape_41.setTransform(-52.9,25.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FBD8B5").s().p("AhIBBIBIiJQABgCAXgDQAXgDASAPQARAPgQA2QAAADgSAYQgSAZgeAQQgMAHgPAAQgVAAgYgOg");
	this.shape_42.setTransform(29.8,37);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBD8B5").s().p("AgaBEQgQgWACgDQgXg+AOgcQAOgdAXgIQAUgIACABQA3A+gLA6QgLA7gGAEQgvgDgQgVg");
	this.shape_43.setTransform(-54.4,25.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6240").s().p("AgXAdQgMgJgDgQQgBgOAKgNQAKgMARgCQAOgCAMAKQANALABAPQADAOgLAMQgKANgQACIgEAAQgNAAgKgJg");
	this.shape_44.setTransform(19.2,-12.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA6240").s().p("AgXAeQgOgLgBgPQgCgOAMgMQAKgNAPgBQAPgCAOALQALAJACAPQABAOgJANQgLAMgQACIgDAAQgMAAgMgIg");
	this.shape_45.setTransform(-55.2,-4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoArQgagOgFgbQgGgZARgYIADgFQA5A0BKgNQgBARgMARQgSAYgeAGQgJACgHAAQgUAAgRgKg");
	this.shape_46.setTransform(4,-32.1,1,1,0,0,0,-0.5,-0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgsA1QgSgLgIgSQBIgQAghHQABACADABQAZAPAHAbQAFAZgSAYQgQAYgeAHQgJACgHAAQgUAAgTgLg");
	this.shape_47.setTransform(-39.2,-27.4,1,1,0,0,0,-0.6,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CC6633").ss(1,1,1).p("AFJgwQgKiRhphHQhphHiEARQiIAThcBGQhbBIAPCUQAQCSBnBhQBmBgCDgJQCIgJBYhsQBZhtgJiPg");
	this.shape_48.setTransform(-12.5,25.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("AleGjQgFgFgFgDQipiWgPjiQgIh7AshvIADgHQAbhiBNhDQCSigDdgPQDDgNCcBxIAHAFIAEADIAAAAQBgBGA6BsQA3BmAIB7QAPDhiXCqQgbAhgfAaQiEBzi4ANIglABQjEAAiYiBgAgEhpQiIAShcBHQhbBFAPCUQAQCVBnBhQBmBgCDgJQCIgJBYhtQBZhtgJiRQgKiRhphFQhUg4hnAAQgaAAgYADg");
	this.shape_49.setTransform(-14.4,4.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9999").s().p("AgeA2QgXgLgHgZQgHgXAMgWQANgXAZgHQAXgIAXAMQAYAMAIAYQAHAXgOAXQgMAWgZAIQgKADgHAAQgPAAgPgIg");
	this.shape_50.setTransform(22.9,-36.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("AgvBXQglgSgLgpQgMglATgkQAVgjAogNQAmgMAkATQAlATAMAnQAMAmgVAkQgUAkgnAMQgQAEgNAAQgYAAgWgLgAgXgtQgZAIgNAWQgMAUAHAZQAHAZAXAMQAXAMAYgIQAZgIAMgWQAOgWgHgXQgIgZgYgMQgOgHgMAAQgKAAgKADg");
	this.shape_51.setTransform(23.5,-37.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9999").s().p("AgnAvQgTgRgCgbQgCgXARgUQARgUAagCQAXgCATASQAUASABAZQACAZgRAUQgQATgaACIgEAAQgWAAgRgQg");
	this.shape_52.setTransform(-57.6,-31.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("AhABLQgdgbgDgqQgDgnAaggQAbggAogCQAogDAeAbQAfAcADAqQACAngbAgQgaAggpACIgGAAQgkAAgcgZgAAGg2QgYADgRAUQgQAUABAXQACAaATASQAUASAYgCQAZgCARgUQARgTgCgbQgCgXgTgSQgSgRgXAAIgEAAg");
	this.shape_53.setTransform(-58.7,-32.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EB8972").s().p("AA3AXQgGAAgXgHIgbgIQgWgDgeAKQgfAMgYgEQgTgDgMgJQAsgXA2gJQAygIA1AIQAbAFAkAOIAPAEQgIAPgXAGQgNADgOAAQgNAAgOgDg");
	this.shape_54.setTransform(-14.2,47);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8B3E50").s().p("AiRArQgJgRADgYQABgFADgFQAvgoApgFQApgFAuAEQAwAEApAaQAoAYgFAkQgBAGgDAGIgPgGQgkgPgbgEQg1gIgyAIQg2AIgsAaQgIgGgGgIg");
	this.shape_55.setTransform(-15,42.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhmApIAOgWQAAABAXADQAYADAlgOQAigMAqgxIAfACIgZAhQgaAcguAXQgXANgfAAQgZAAgdgJg");
	this.shape_56.setTransform(-36.1,6.1,1,1,0,0,0,0.2,0.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgiArQg1gUgYhJIARgHQAAACAWAdQAVAaAtAUQAqAWBFgRIAHAZQgEACguAFIgVABQglAAgmgPg");
	this.shape_57.setTransform(4.8,2.6,1,1,0,0,0,0,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgcgDQgEgUARgCQADAAADACQAEAHAFAGIABACIAIAFQAUAGAAAKQACAOgQgCIgMABQgbAAgEgdg");
	this.shape_58.setTransform(-32.1,24.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgLAUQgIgGgDgLQAAgIAFgIQAHgKAIgCQAHAAAJAHQAJAGAAALQACAIgHAIQgFAJgJACIgDAAQgFAAgHgGg");
	this.shape_59.setTransform(-29.4,18.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjA/QgVgVgFgiQgFgeAQgbQAOgbAagEQAZgEAVAWQAWAXAEAgQAFAfgPAbQgPAZgaAEIgKABQgSAAgSgSgAghAhQAEAkAmgHQAQACgCgOQAAgJgUgJIgFgEIgDgDIgLgNQgBgCgEAAQgRACAFAVgAAQgyQgJACgGAKQgDAIAAAKQACAKAGAHQAJAFAIgBQAJgBAFgIQAHgJgCgKQAAgKgJgGQgIgHgIAAIgBAAg");
	this.shape_60.setTransform(-31.4,20.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgcgDQgEgUARgCQADAAADACQAFAHAEAGIABACIAJAFQATAGAAAKQACAOgQgCIgMABQgbAAgEgdg");
	this.shape_61.setTransform(0.3,22.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLAUQgIgGgDgLQAAgIAFgIQAHgKAIgCQAHAAAJAHQAJAGAAALQACAIgHAIQgFAJgJACIgDAAQgFAAgHgGg");
	this.shape_62.setTransform(2.8,15.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgjA/QgVgVgFgiQgFgeAQgbQAOgcAagDQAZgEAVAWQAWAXAEAgQAFAfgPAaQgPAagaAEIgKABQgSAAgSgSgAghAgQAEAlAmgHQAQACgCgOQAAgJgUgJIgFgEIgDgDIgLgNQgBgCgEAAQgRACAFAUgAAQgyQgJACgGAJQgDAJAAAKQACAKAGAHQAJAFAIgBQAJgBAFgIQAHgJgCgKQAAgKgJgGQgIgHgIAAIgBAAg");
	this.shape_63.setTransform(0.9,18.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EE7B6A").s().p("AgVACQABgIAUgDQATgBADAJQgBAIgUADIgEAAQgPAAgDgIg");
	this.shape_64.setTransform(-16.1,28.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FBD8B5").s().p("Ag0HOQi3gThQhAQhRhBgTg8QgSg8AEgEQgKhigYhBQgahAgDgCQgkiAAlhSQAlhRAzgnQAzgoAFABQCcg9BsAFQBpAEAGAGQAGgFBrAPQBrAOCPBYQAFAAArAvQAsAwAWBXQAWBXg7B1QgDACgkA8QgkA8gaBfQACAEgcA4QgdA3hbAyQhHAniCAAQghAAgngDg");
	this.shape_65.setTransform(-12,11.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8C499").s().p("AgkAtIAchZQAFgDAXADQAaACgNAmQAAAEgSAaQgNAVgXAAQgHAAgIgCg");
	this.shape_66.setTransform(27.4,33.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8C499").s().p("AgOAsQgMgSABgDQgQg1ASgOQASgOAEACIAiBvQgLACgJAAQgSAAgJgNg");
	this.shape_67.setTransform(-54.9,29.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBD8B5").s().p("AhEBHIA+iOQACgCAVgFQAXgFATAOQASAOgMA3QAAACgQAaQgPAagfASQgMAJgSAAQgTAAgWgKg");
	this.shape_68.setTransform(28.4,34);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FBD8B5").s().p("AgVBHQgRgVABgDQgbg7AMgeQALgeAWgKQAUgJACABQA8A6gHA6QgHA8gGAFQgvAAgRgUg");
	this.shape_69.setTransform(-56.5,28.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EB8972").s().p("AhsAZQgTgCgMgIQArgZA2gKQAxgJA2AIQAbAEAlAOIAPADQgIAPgYAGQgXAHgfgFIgcgHIgbgHQgWgDgeALQgYAJgUAAIgLgBg");
	this.shape_70.setTransform(-14.3,47);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8B3E50").s().p("AiQAsQgKgRADgXQABgGADgFQAugpApgFQAogGAvADQAwADApAZQAqAagGAhQgBAHgCAFIgPgFQglgOgbgEQg1gIgxAJQg3AKgqAbQgJgGgGgIg");
	this.shape_71.setTransform(-15.2,42.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhlArIANgWQABACAYACQAXACAkgPQAjgMApgyIAeABQAAADgYAfQgZAdguAXQgYAOggAAQgZAAgbgIg");
	this.shape_72.setTransform(-36.9,6.6,1,1,0,0,0,0.3,0.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghArQg1gTgahJIARgHQAAACAXAcQAVAaAtAUQArAUBFgSIAGAZQgDACgtAHQgMABgMAAQgkAAglgOg");
	this.shape_73.setTransform(3.9,2.3,1,1,0,0,0,0,0.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgcgCQgEgUARgDQADAAACACQAFAHAFAGIABACIAIAEQAUAHAAAJQACAOgPgCIgNACQgbAAgEgcg");
	this.shape_74.setTransform(-32.6,24.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgIgGgDgLQAAgIAFgIQAGgKAJgCQAGAAAJAHQAJAFAAALQACAIgGAJQgFAJgKACIgCAAQgFAAgHgGg");
	this.shape_75.setTransform(-30,18.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgiA/QgWgUgFgiQgFgeAPgbQANgcAbgDQAZgFAVAWQAWAWAEAgQAGAfgOAaQgOAbgbAEIgJABQgTAAgSgSgAghAhQAFAlAmgIQAQACgCgOQAAgKgUgIIgGgEIgDgDQgGgFgEgHQgCgDgEAAQgRADAFAUgAAPgyQgJACgGAJQgDAJAAAKQADAKAGAHQAIAFAJgBQAJgBAFgIQAGgJgCgKQAAgLgJgGQgIgGgIAAIgBAAg");
	this.shape_76.setTransform(-32,21.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgcgCQgEgUARgDQADAAACACIAKANIABACIAIAEQAUAHAAAJQACAOgPgBIgNABQgbAAgEgcg");
	this.shape_77.setTransform(-0.2,21.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLAUQgIgGgDgLQAAgIAFgIQAGgKAJgCQAHAAAIAHQAJAGABAKQACAIgHAJQgFAJgKACIgDAAQgEAAgHgGg");
	this.shape_78.setTransform(2.2,15.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgiA/QgWgUgEgiQgGgdAPgcQANgbAbgEQAZgFAVAWQAWAWAEAgQAHAfgPAbQgOAagbAEIgKABQgSAAgSgSgAgVALQgQACAEAVQAFAkAmgIQAQACgCgOQAAgKgUgIIgGgEIgCgDQgHgFgEgHQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgBAAgAAPgyQgJACgGAKQgDAIABAKQACAKAGAHQAJAFAIgBQAKgBAEgIQAGgJgCgKQAAgKgIgHQgIgGgIAAIgCAAg");
	this.shape_79.setTransform(0.2,18.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE7B6A").s().p("AgVACQABgHAUgEQASgBAEAJQgBAHgUAEIgEAAQgPAAgDgIg");
	this.shape_80.setTransform(-16.5,28.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FBD8B5").s().p("AgpHOQi4gQhRg+QhShAgTg7QgUg8AEgEQgLhigahBQgbg/gDgCQgnh/AkhSQAkhTAygoQAygoAFABQCbhABsADQBqACAFAGQAGgFBrANQBsANCRBUQAEAAAsAvQAtAuAXBXQAYBWg4B3QgEACgjA8QgjA9gYBfQACAFgbA4QgcA4haAzQhKAriMAAQgbAAgfgCg");
	this.shape_81.setTransform(-13.1,11.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8C499").s().p("AgjAtIAahZQAFgDAYACQAZACgNAnQAAAEgRAZQgNAWgWAAQgHAAgIgCg");
	this.shape_82.setTransform(27,33.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8C499").s().p("AgOAtQgMgSABgDQgRg1ASgOQASgPAEACIAkBuQgMADgJAAQgSAAgJgMg");
	this.shape_83.setTransform(-55.3,29.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FBD8B5").s().p("AhEBIIA9iPQABgCAVgGQAXgFASAOQATAOgKA4QAAABgQAaQgPAageATQgNAJgSAAQgTAAgWgJg");
	this.shape_84.setTransform(28,33.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FBD8B5").s().p("AgTBHQgSgUABgDQgcg7ALgeQAMgeAVgKQAUgJACAAQA8A5gGA6QgFA8gGAFIgEABQgsAAgQgUg");
	this.shape_85.setTransform(-57,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.5,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-72,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.5,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.8,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.8,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.5,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.6,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-7,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-7.7,x:-42.4,y:33.3}},{t:this.instance,p:{regX:8.7,regY:4.4,rotation:-10.4,x:12.5,y:31.9}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_26,p:{regX:-1.2,regY:0.7,rotation:-3.6,x:-61.6,y:39.7}},{t:this.shape_25,p:{regX:-0.1,regY:0.8,rotation:-3.6,x:-71.4,y:23.2}},{t:this.shape_24,p:{rotation:-3.6,x:-75.2,y:1.3}},{t:this.shape_23,p:{rotation:-3.6,x:-72.4,y:-23}},{t:this.shape_22,p:{rotation:-3.6,x:-59.9,y:-42.4}},{t:this.shape_21,p:{rotation:-3.6,x:-39.6,y:-54.1}},{t:this.shape_20,p:{rotation:-3.6,x:10.1,y:-55.2}},{t:this.shape_19,p:{rotation:-3.6,x:30.4,y:-42.4}},{t:this.shape_18,p:{rotation:-3.6,x:40.7,y:-18.4}},{t:this.shape_17,p:{regY:0,rotation:-3.6,x:41.2,y:27.6}},{t:this.shape_16,p:{rotation:-3.6,x:43.9,y:6.8}},{t:this.shape_15,p:{rotation:-3.6,x:-14,y:-58}},{t:this.shape_14,p:{regX:0.1,regY:1.2,rotation:-3.6,x:29.8,y:39.9}},{t:this.shape_13,p:{regX:0.3,regY:-0.2,rotation:-3.6,x:-51.3,y:47.8}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_6,p:{rotation:-3.6,x:-26.9,y:-8.5}},{t:this.shape_5,p:{rotation:-3.6,x:-9.2,y:-9.8}},{t:this.shape_4,p:{rotation:-3.6,x:-17.7,y:-16.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.5,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-72,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.5,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.8,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.8,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.5,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.6,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-7,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.instance_1,p:{regX:8.8,regY:4.4,rotation:-8.7,x:-42.7,y:33.8}},{t:this.instance,p:{regX:8.7,regY:4.5,rotation:-11.4,x:12.1,y:31.4}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_26,p:{regX:-1.2,regY:0.7,rotation:-3.6,x:-61.6,y:39.7}},{t:this.shape_25,p:{regX:-0.1,regY:0.8,rotation:-3.6,x:-71.4,y:23.2}},{t:this.shape_24,p:{rotation:-3.6,x:-75.2,y:1.3}},{t:this.shape_23,p:{rotation:-3.6,x:-72.4,y:-23}},{t:this.shape_22,p:{rotation:-3.6,x:-59.9,y:-42.4}},{t:this.shape_21,p:{rotation:-3.6,x:-39.6,y:-54.1}},{t:this.shape_20,p:{rotation:-3.6,x:10.1,y:-55.2}},{t:this.shape_19,p:{rotation:-3.6,x:30.4,y:-42.4}},{t:this.shape_18,p:{rotation:-3.6,x:40.7,y:-18.4}},{t:this.shape_17,p:{regY:0,rotation:-3.6,x:41.2,y:27.6}},{t:this.shape_16,p:{rotation:-3.6,x:43.9,y:6.8}},{t:this.shape_15,p:{rotation:-3.6,x:-14,y:-58}},{t:this.shape_14,p:{regX:0.1,regY:1.2,rotation:-3.6,x:29.8,y:39.9}},{t:this.shape_13,p:{regX:0.3,regY:-0.2,rotation:-3.6,x:-51.3,y:47.8}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_6,p:{rotation:-3.6,x:-26.9,y:-8.5}},{t:this.shape_5,p:{rotation:-3.6,x:-9.2,y:-9.8}},{t:this.shape_4,p:{rotation:-3.6,x:-17.7,y:-16.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.5,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-72,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.5,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.8,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.8,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.5,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.6,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-7,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

	// 圖層 1
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4C66A5").s().p("AhMBOQAqgYAng2QAPgSAOgYIAVgjIAWCbg");
	this.shape_86.setTransform(5.9,117);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4177B4").s().p("AAlBjIgXg7IgZA7Ii+AAIAFjFIGJAAIAFArQgXArgbAiQgpA1gqAYg");
	this.shape_87.setTransform(-8.8,114.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#09A85B").s().p("AhKBuQA+gkAnhLQAPgdAMggQAIgYAFgXQAEAnADAsQABAfgBAmIgCAxIgCASg");
	this.shape_88.setTransform(3.9,93.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#67B958").s().p("AjADoIgBgQIgEgtQgChJAGhDQAIhZAbhBQAfhOA5geQAhATAjADQArAFAsgXQAyAdAeBGQAYA5AKBSQgOA4gbA0QgoBNg+Akg");
	this.shape_89.setTransform(-9.2,81.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#623B20").s().p("AhngEQAqAFAlgPQAZgMATgVQAWAFATAGQAdAKAOAPIgOAIQgTAKgWAKQgfANghAHQgqAKguABg");
	this.shape_90.setTransform(11.7,148.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFF74F").s().p("Ag7A5QgBglgDgsIBvgjQAMAvgFAaIAFAAIAEABQgTAVgbAMQgXAMgcAAQgNAAgNgDg");
	this.shape_91.setTransform(7.4,142.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FCE2BA").s().p("AgzALQgGgtgKgeIBTggIAUA1QAKAaAHAXQAKAeAFAaIhvAjQgDgxgFglg");
	this.shape_92.setTransform(5.4,130.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#623B20").s().p("AguAhQgYgCgVgEIgRgFQAKgRAYgRQASgNASgKQAaAQAbADQAnAFAmgUIAQAxQgrAMgrAEIgbACQgVAAgUgDg");
	this.shape_93.setTransform(-19.1,150.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFF74F").s().p("AgFAuQgdgDgagPIADgBIAEgDIABAAQgHgMgDgSIgHgoIB1AAIAWBNQgeAQgfAAIgOgBg");
	this.shape_94.setTransform(-16.8,143.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FCE2BA").s().p("Ag5BTQgCgaAAgfIABg1IAFg3IBYADQAAAiAIAtQAGAlALAug");
	this.shape_95.setTransform(-18,130.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F8D1A7").s().p("Ag6AwIAAhfIB1AAIAABfg");
	this.shape_96.setTransform(-8.3,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(10));

	// 圖層 2
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCE2BA").s().p("AgJCLQg0gDgigoQgjgpAEg0QAAgIAEgPQgGgZANglQAKgbAQgPQAPgRALAEQANAEgCAfQAdgOAfACQA2AEAiApQAjAngEAzQgFA1goAjQgjAegvAAIgJAAg");
	this.shape_97.setTransform(53.9,61);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#75C5F0").s().p("AhaArIgDiaIC7BeIhJCBg");
	this.shape_98.setTransform(10.4,70.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#75C5F0").s().p("AhdgMIC3hlIAECaIhuBJg");
	this.shape_99.setTransform(-28.7,70.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCE2BA").s().p("AhTBqQgngjgEg1QgCgyAigoQAjgoA1gDQAhgBAcAOQgCgeAOgEQAKgFAQARQAPAQAJAcQANAkgHAZQAEAPAAAIQADA0gjAoQgjAng1ADIgHAAQguAAglggg");
	this.shape_100.setTransform(-79.2,66.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FCE2BA").s().p("AhuBkQg7gUg2gvIgfgeIgKgKIAzhNQBSBOBZALQBGAKBJgdQA0gWAxgpIAcgbIAGgIIADgCIAZBBQhlB1hqAiQgpANgnAAQgsAAgrgPg");
	this.shape_101.setTransform(-46.9,76.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FCE2BA").s().p("Ag7BnQhpgkhjh3IAZhBIAEADIAGAJIAbAaQAxAqA0AYQBIAeBGgJQBZgJBThOIAzBPIgLAKIgfAeQg3Atg8ATQgqAOgpAAQgpAAgrgPg");
	this.shape_102.setTransform(22.6,70.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FCE2BA").s().p("AgUCMQg0gIgegrQgfgrAIgyQABgKAGgOQgEgaAQgjQANgbAQgOQARgPAKAGQANAFgEAeQAdgLAgAFQA0AIAfAsQAfArgIAyQgKA0gqAfQgiAYgoAAQgJAAgLgCg");
	this.shape_103.setTransform(54,65.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#75C5F0").s().p("AheAmIALiaICyBvIhUB6g");
	this.shape_104.setTransform(9.8,71.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#75C5F0").s().p("AhfAAICrh3IAUCaIhlBVg");
	this.shape_105.setTransform(-28,71.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FCE2BA").s().p("AhIB2QgrgfgKg0QgIgyAfgqQAegsA1gJQAfgFAeALQgFgeANgFQAKgGARAQQARAOAMAaQARAjgEAaQAFAOABAKQAJAygfAsQgeAqg0AIQgLACgKAAQgnAAghgYg");
	this.shape_106.setTransform(-78.7,72.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FCE2BA").s().p("AhfB6Qg+gOg6goIgigbIgLgLIArhQQBZBDBaADQBGADBGglQAxgbAtguIAZgdIAFgJIADgDIAgA+QhZB/hlAtQg1AXg0AAQgeAAgfgHg");
	this.shape_107.setTransform(-46,77.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FCE2BA").s().p("AhGBqQhmgthYh/IAgg/IAIANIAZAcQAtAuAxAcQBFAlBHgDQBagDBZhEIArBQIgLALQgQAOgTANQg5Apg9AOQgfAIgfAAQg1AAg0gYg");
	this.shape_108.setTransform(22.3,71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-72.8,158.8,226.6);


(lib.男2做答6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("3.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img12();
	this.instance.setTransform(135.6,192.5,0.859,0.859);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBaIAAhMIhMAAIAAgbIBMAAIAAhMIAcAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(117.8,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(22.6,197.5,0.895,0.895);

	this.instance_2 = new lib.手複製();
	this.instance_2.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_3 = new lib.手複製();
	this.instance_3.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("APEosIAARZI+HAAIAAxZg");
	this.shape_1.setTransform(109.5,215.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_2.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_4 = new lib.粉紅桌();
	this.instance_4.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_5 = new lib.男2做答();
	this.instance_5.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{mode:"independent",startPosition:undefined}},{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_5,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.男2做答5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("3.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img12();
	this.instance.setTransform(135.6,192.5,0.859,0.859);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(117.8,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(22.6,197.5,0.895,0.895);

	this.instance_2 = new lib.手複製();
	this.instance_2.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_3 = new lib.手複製();
	this.instance_3.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("AvDItIAAxZIeHAAIAARZg");
	this.shape_1.setTransform(109.5,215.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_2.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_4 = new lib.粉紅桌();
	this.instance_4.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_5 = new lib.男2做答();
	this.instance_5.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{mode:"independent",startPosition:undefined}},{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_5,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.男2做答4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("3.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img2();
	this.instance.setTransform(60.1,185,0.632,1.185);

	this.instance_1 = new lib.手複製();
	this.instance_1.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_2 = new lib.手複製();
	this.instance_2.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("AvDItIAAxZIeHAAIAARZg");
	this.shape.setTransform(109.5,215.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_1.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_3 = new lib.粉紅桌();
	this.instance_3.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_4 = new lib.男2做答();
	this.instance_4.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{mode:"independent",startPosition:undefined}},{t:this.instance_3}]}).to({state:[{t:this.instance_3},{t:this.instance_4,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.男2做答3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("3.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img7();
	this.instance.setTransform(138.2,197.5,0.762,0.762);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAcAAIAABMIBMAAIAAAbIhMAAIAABMg");
	this.shape.setTransform(119.6,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(25.6,197.5,0.895,0.895);

	this.instance_2 = new lib.手複製();
	this.instance_2.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_3 = new lib.手複製();
	this.instance_3.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("APEItI+HAAIAAxZIeHAAg");
	this.shape_1.setTransform(109.5,215.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_2.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_4 = new lib.粉紅桌();
	this.instance_4.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_5 = new lib.男2做答();
	this.instance_5.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{mode:"independent",startPosition:undefined}},{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_5,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.男2做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("3.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img2();
	this.instance.setTransform(123.8,199.2,0.437,0.816);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAcAAIAABMIBMAAIAAAbIhMAAIAABMg");
	this.shape.setTransform(110,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(17.8,197.5,0.895,0.895);

	this.instance_2 = new lib.手複製();
	this.instance_2.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_3 = new lib.手複製();
	this.instance_3.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("APEosIAARZI+HAAIAAxZg");
	this.shape_1.setTransform(109.5,215.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_2.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_4 = new lib.粉紅桌();
	this.instance_4.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_5 = new lib.男2做答();
	this.instance_5.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{mode:"independent",startPosition:undefined}},{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_5,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.男2做答1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.手複製();
	this.instance.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_1 = new lib.手複製();
	this.instance_1.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.text_1 = new cjs.Text("列印品質越差", "28px DFLiHei-Bd", "#990000");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(25.5,192.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("AvDosIeHAAIAARZI+HAAg");
	this.shape.setTransform(109.5,215.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_1.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.instance_1},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_3 = new lib.男2做答();
	this.instance_3.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.instance_3,p:{mode:"single",startPosition:14}}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,12.8,216.8,274.5);


(lib.西瓜弟弟做答 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C59A").s().p("AhBA5QgGgDgEgGQgfg6AwgsQAYgWAhAEQAHACAzAVIAdAjQAJAtgkAeQgHAGgLACQgUAFgSAAQgjAAghgRg");
	this.shape.setTransform(-28.2,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgTgBIAkgWIADAvg");
	this.shape_1.setTransform(-14.8,66.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgrALQAKg6BIAGIAFA9IgmAXg");
	this.shape_2.setTransform(-17.5,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AAMCCIh1jZQAIhDBSAaIB5DPIAAADQhLgGgKA8g");
	this.shape_3.setTransform(-24.2,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6C59A").s().p("Ag7A/QgHgCgEgHQglg2AsgwQAVgZAhABQAJABAzAQIAhAfQANAtggAhQgHAGgLAEQgbAJgXAAQgdAAgbgKg");
	this.shape_4.setTransform(-29,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgVACIAigYIAIAtg");
	this.shape_5.setTransform(-14.4,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgrARQADg6BJgCIALA9IgjAag");
	this.shape_6.setTransform(-17.5,61.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AAZB+IiKjLQABhEBUATICNDBIABACQhLACgEA8g");
	this.shape_7.setTransform(-25.6,49.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6C59A").s().p("AhJAuQgFgEgDgHQgVg9A3gkQAbgTAeAKQAIADAuAeIAYAmQABAvgoAXQgJAFgKAAIgNAAQgxAAgpgdg");
	this.shape_8.setTransform(-27.7,54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgTgHIAngQIgEAvg");
	this.shape_9.setTransform(-16.4,68.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AgsABQATg3BGASIgFA9IgoAQg");
	this.shape_10.setTransform(-18.4,63.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgHCFIhTjoQAThCBLAoIBXDgIgBACQhIgSgSA6g");
	this.shape_11.setTransform(-22.9,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-24.2}},{t:this.shape_2,p:{x:-17.5}},{t:this.shape_1,p:{x:-14.8}},{t:this.shape,p:{x:-28.2}}]}).to({state:[{t:this.shape_3,p:{x:-21.8}},{t:this.shape_2,p:{x:-15.1}},{t:this.shape_1,p:{x:-12.4}},{t:this.shape,p:{x:-25.8}}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_3,p:{x:-22.6}},{t:this.shape_2,p:{x:-15.9}},{t:this.shape_1,p:{x:-13.2}},{t:this.shape,p:{x:-26.6}}]},4).wait(3));

	// 圖層 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE7B6A").s().p("AhHAKQANgOAlgOQAigOA7APQgUAZgkANQgNAFgNAAQgbAAgigQg");
	this.shape_12.setTransform(12.3,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB5372").s().p("Ag0BIIgtgoQgogigSgfQAEADBGAEQBFADBaghIBEgYIACAAQAOAEgLAmQgKAmgDADIgIAQQgHAPgPATQg7gQglAOQgiAOgOAQIgQgJg");
	this.shape_13.setTransform(8.7,18.3);

	this.instance = new lib.紅暈();
	this.instance.setTransform(34.7,8.2,0.849,0.849,-11.7,0,0,8.3,4.2);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-19,9.5,0.849,0.849,-9,0,0,8.9,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhuAVQAsgwA0gEQAxgFAlAMQAmANACACIgaAPQg9gRgkAIQgoAFgSAPQgRAOgBACg");
	this.shape_14.setTransform(-14,-14.9,1,1,0,0,0,-0.4,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AACgFQgvgBgfANQggAPgBACIgMgOQA3g2A4AGQA2AGAnAZQAmAYABAEIgQATQg2gtgyAAg");
	this.shape_15.setTransform(27,-20.1,1,1,0,0,0,0.4,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#443100").s().p("AgDBZQgbg4gShDQgRhGAYgsIBhB2QgEACgUAyQgUA0AMBLQgDgEgYg4g");
	this.shape_16.setTransform(-35,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#443100").s().p("AHkEzQAAhXgehcQgGADg7gmQg6gmg1htQAAAEg1A0Qg1A2hmBAQhlBBiSAlIAtgeQAqgeA3gvQA0gvAog2Ig2AsQgzAqhSA1QhSA2hbAlQAFgEA0g+QA0g+AchGQgCADgnA1QgnA1g5A3Qg6A3g6AKQACgBAJgSQAJgRgHgbQgFgDgUg4QgGgQgCgRIgCAAIgCgRIAAgEQhFgPgpg+QgWgegUgjQApAAAogRIARgIQg8gIgfg2QgNgVgHgWQgKgaACgbIABgWQAoARArAIQAPACAPgEQBdgYA9gnQA9gmAagNQAagOAxgNQC5g6DDAlQB4AVBZBUQDcBIgGDlQgCAygOArQAKBEgoBYIgrA7QgmA0gIAYQACgIAAhYg");
	this.shape_17.setTransform(1.8,-37.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgcgCQgEgVAQgCQAEAAACACQAFAHAFAFIABADIAJAEQATAGAAAKQACAOgPgCIgNACQgaAAgFgcg");
	this.shape_18.setTransform(-9.5,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLAUQgHgGgEgLQAAgIAFgIQAGgJAJgDQAHgBAIAIQAJAFAAALQACAIgGAJQgFAJgJACIgCAAQgGAAgHgGg");
	this.shape_19.setTransform(-7,-4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghA/QgWgUgFgiQgGgeAOgbQAOgcAagDQAZgFAVAVQAXAWAEAhQAGAegOAbQgOAagaAFIgKABQgSAAgSgSgAgVAKQgQADAEAUQAFAkAngIQAPACgCgOQAAgJgUgIIgGgFIgDgCIgLgNQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgBAAgAAPgyQgKACgFAJQgEAJABAJQADALAGAGQAIAFAJgBQAJAAAFgJQAGgJgCgKQgBgKgIgGQgIgGgHAAIgCAAg");
	this.shape_20.setTransform(-8.9,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgcgCQgEgUAQgDQAEAAACACQAFAHAFAGIABACIAJAFQATAGAAAJQACAOgPgBIgNABQgaAAgFgcg");
	this.shape_21.setTransform(22.7,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAUQgHgGgEgLQAAgIAFgIQAGgKAJgCQAHgBAIAIQAJAFAAALQACAIgGAJQgFAJgJABIgDABQgFAAgHgGg");
	this.shape_22.setTransform(25.2,-8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiA/QgVgUgGgiQgFgdAOgcQAOgbAagEQAZgFAVAWQAXAWAEAgQAGAfgOAaQgPAagaAFIgJABQgTAAgSgSgAgVALQgQACAEAVQAFAjAmgHQAQABgCgOQgBgJgUgIIgFgEIgDgDIgLgNQAAAAAAgBQgBAAAAAAQAAAAgBAAQgBgBAAAAIgCABgAAOgyQgJACgFAKQgEAIABAKQADAKAGAHQAIAEAIgBQAKAAAEgJQAHgJgCgJQgBgLgIgGQgHgGgIAAIgDAAg");
	this.shape_23.setTransform(23.3,-5.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE7B6A").s().p("AgVACQABgHAUgEQASgBAEAJQgBAIgUADIgDAAQgQAAgDgIg");
	this.shape_24.setTransform(6.5,4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBD8B5").s().p("AgmHOQi3gPhSg/QhSg/gTg7QgUg7ADgEQgLhigahAQgbg/gEgDQgmh+AjhTQAjhSAygoQAxgoAGABQCahABrABQBqACAGAGQAFgFBsAMQBrAMCRBUQAFAAArAvQAtAuAYBWQAYBWg4B3QgDACgjA9QgjA8gXBfQACAFgbA4QgbA4hZAzQhMAsiRAAIgzgBg");
	this.shape_25.setTransform(9.8,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8C499").s().p("AgjAtIAahZQAFgDAXACQAaACgNAmQABAFgRAZQgNAWgXAAQgHAAgIgCg");
	this.shape_26.setTransform(50.1,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8C499").s().p("AgNAtQgNgSABgDQgRg1ASgOQARgPAEACIAlBuQgMADgKAAQgRAAgIgMg");
	this.shape_27.setTransform(-32.1,6.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBD8B5").s().p("AhDBIIA7iPQACgCAUgFQAXgGATAOQATAOgLA4IgPAbQgQAagdASQgOAKgSAAQgSAAgVgJg");
	this.shape_28.setTransform(51.1,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBD8B5").s().p("AgTBIQgSgUABgEQgcg6ALgeQALgeAWgKQAUgKABABQA9A4gGA6QgFA8gFAFIgHAAQgpAAgRgSg");
	this.shape_29.setTransform(-33.8,6.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE7B6A").s().p("AhJAAQAQgNAngIQAjgJA5AZQgYAVgnAHQgHABgGAAQggAAgngYg");
	this.shape_30.setTransform(13.4,25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB5372").s().p("AhHA2QgEgDgigrQgigogNghQAEAEBEAOQBEAOBegSIgBAAIBHgOIADAAQANAGgRAkIgTAnIgKAOQgKAOgSAQQg4gYgkAJQgmAHgQAOIgPgMg");
	this.shape_31.setTransform(11.7,18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAAQgnACgVALQgUAMAAACIgVgPQAzgpA0ADQAxADAjASQAjAQABADIgbANQg6gbglAAg");
	this.shape_32.setTransform(-6.9,-20.2,1,1,0,0,0,-1,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAGgKQgvgJghAKQgiAJgCABIgJgNQA/gvA3AOQA0AOAiAfQAiAeABADIgTAQQgvgzgwgIg");
	this.shape_33.setTransform(34.7,-16.3,1,1,0,0,0,0.3,1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#443100").s().p("AgZBZQgSg7gHhGQgHhHAfgoIBOCEQgEABgcAuQgZAxAABLIgUg/g");
	this.shape_34.setTransform(-26.5,-21);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#443100").s().p("AGgFXQANhXgQhgQgGACg1gvQg0gugihzQAAAEg+ArQg8AthvAwQhtAxiWAOIAwgYQAvgWA9gmQA9gmAuguIg7AhQg6AhhZAoQhZAphgAWQAGgDA8g1QA9g1Ang/IgyAvQguAvhBAtQhBAtg7ABQACAAAMgRQALgPgDgcQgEgEgLg6QgEgQAAgSIgBAAIAAgPIABgEQhCgagfhCQgRgkgOgmQAoAHAqgMQAJgBAJgDQg5gSgXg5QgJgWgEgYQgGgbAGgbQADgKACgLQAlAXApAOQAOAEAPgBQBhgKBCgcQBBgcAdgKQAbgKAygFQC+gdC9BDQBzAnBLBgQDOBpgqDiQgIAwgVApQgBBFg1BRIgzA0QgtAtgNAWQAFgJANhUg");
	this.shape_35.setTransform(14.2,-35.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAMAbQgnABAAgiQgBgVARAAQAEAAACADQADAHADAHIACADIAHAFQASAJAAAKQgBALgJAAIgGgBg");
	this.shape_36.setTransform(-4.6,-1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOARQgGgHgCgKQABgIAHgIQAHgIAHgBQAJAAAHAJQAIAHgBAJQAAAKgHAHQgHAJgJAAIAAAAQgHAAgHgJg");
	this.shape_37.setTransform(-1.1,-7.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrA5QgSgXAAgiQgBgeATgZQARgaAaABQAagBASAZQASAZAAAfQABAggTAYQgRAZgbAAIAAAAQgZAAgSgYgAARA1QAAgJgRgMIgGgGIgCgCQgGgHgDgHQgCgDgDAAQgRAAABAUQAAAlAngCQAPAFABgOgAAGgmQgGAIAAAJQAAALAGAIQAIAGAIAAQAJAAAHgHQAHgIAAgKQABgKgIgHQgHgJgJAAQgJAAgHAJg");
	this.shape_38.setTransform(-3.4,-5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AAMAbQgnACAAgjQgBgVARAAQAEABACACIAGAOIACADIAHAGQASAJAAAJQgBALgJAAIgGgBg");
	this.shape_39.setTransform(27.8,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOARQgGgHgCgKQACgIAGgIQAHgIAHgBQAJAAAHAJQAIAHgBAJQAAAKgHAHQgHAJgJAAIAAAAQgHAAgHgJg");
	this.shape_40.setTransform(31.1,-5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrA5QgSgXAAgiQgBgeATgZQARgaAaABQAagBASAZQATAZgBAfQABAggTAYQgRAZgbAAIAAAAQgZAAgSgYgAARA1QAAgJgRgMIgGgGQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgFgHgEgHQgCgDgDAAQgQAAAAAVQAAAkAngCQAPAFABgOgAAGgmQgGAIAAAJQAAALAGAIQAIAGAIAAQAKAAAGgHQAHgIABgKQAAgKgHgHQgIgJgJAAQgJAAgHAJg");
	this.shape_41.setTransform(28.9,-3.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EE7B6A").s().p("AgVAAQADgJASAAQAUACABAHQgCAJgTABQgTgCgCgIg");
	this.shape_42.setTransform(10.7,4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBD8B5").s().p("AiAHGQizgrhHhKQhIhLgKg9QgKg+AEgEQAEhhgRhCQgQhEgDgDQgTiDAvhMQAwhMA3ggQA3ggAFABQCignBrASQBoASAEAHQAGgEBpAcQBoAdCCBpQAFABAkA0QAkA1ALBYQAKBZhIBtQgFABgrA3QgsA2gmBaQACAFgjA0QgkAzhgAlQgwAThFAAQhDAAhagTg");
	this.shape_43.setTransform(18.6,-12.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C499").s().p("AgoAoIAnhTQADgCAZAGQAZAFgSAiQAAAEgVAZQgNAQgSAAQgKAAgMgFg");
	this.shape_44.setTransform(53,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8C499").s().p("AgRApQgJgUABgDQgIg2ATgMQASgLAEACIAVByIgLABQgaAAgJgRg");
	this.shape_45.setTransform(-28,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBD8B5").s().p("AhLA8IBOiEQACgBAYgCQAXgDAQARQARAQgTA1QAAACgTAYQgUAXgeAOQgMAFgMAAQgXAAgZgQg");
	this.shape_46.setTransform(53.8,15.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBD8B5").s().p("AgfBAQgOgXACgDQgTg+AQgcQAPgcAXgGQAUgHACACQA0BAgPA5QgOA7gHADQgugGgPgWg");
	this.shape_47.setTransform(-29.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1,p:{regX:8.9,regY:2.9,scaleX:0.849,scaleY:0.849,rotation:-9,x:-19,y:9.5}},{t:this.instance,p:{regX:8.3,regY:4.2,scaleX:0.849,scaleY:0.849,rotation:-11.7,x:34.7,y:8.2}},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_1,p:{regX:7.2,regY:4.5,scaleX:0.848,scaleY:0.848,rotation:-0.2,x:-16.5,y:6.1}},{t:this.instance,p:{regX:7.5,regY:3.1,scaleX:0.848,scaleY:0.848,rotation:-2.9,x:38,y:10.5}},{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1,p:{regX:8.9,regY:2.9,scaleX:0.849,scaleY:0.849,rotation:-9,x:-19,y:9.5}},{t:this.instance,p:{regX:8.3,regY:4.2,scaleX:0.849,scaleY:0.849,rotation:-11.7,x:34.7,y:8.2}},{t:this.shape_13},{t:this.shape_12}]},6).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_1,p:{regX:7.2,regY:4.5,scaleX:0.848,scaleY:0.848,rotation:-0.2,x:-16.5,y:6.1}},{t:this.instance,p:{regX:7.5,regY:3.1,scaleX:0.848,scaleY:0.848,rotation:-2.9,x:38,y:10.5}},{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1,p:{regX:8.9,regY:2.9,scaleX:0.849,scaleY:0.849,rotation:-9,x:-19,y:9.5}},{t:this.instance,p:{regX:8.3,regY:4.2,scaleX:0.849,scaleY:0.849,rotation:-11.7,x:34.7,y:8.2}},{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	// 圖層 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F6C59A").s().p("AgJBuQgugLgYgqQgPgaAAgcQgYANgJgJQgIgHAIgRQAGgSASgTQAYgZAXgFQAKgJAIgEQAngXAuALQAtAMAXAoQAYAqgLArQgMAugpAYQgbAQgdAAQgPAAgNgEg");
	this.shape_48.setTransform(44.3,90.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C66A5").s().p("AhEBFQAlgVAjgwQAOgPANgWIASgfIAUCJg");
	this.shape_49.setTransform(26.3,88.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4177B4").s().p("AAhBZIgUg1IgXA1IiqAAIAEixIFgAAIAEAnQgUAmgZAfQglAvgkAWg");
	this.shape_50.setTransform(13.2,86.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#09A85B").s().p("AhCBjQA4ggAihEQAOgZALgdIALgqQAEAjACAnQABAcgBAhIgCAsIgCARg");
	this.shape_51.setTransform(24.5,67.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#67B958").s().p("AisDPIgBgOIgDgoQgChCAFg7QAIhQAXg5QAdhHAygaQAeARAfACQAnAFAngUQAtAZAaA/QAVAyAJBJQgLAzgZAuQgkBFg4Agg");
	this.shape_52.setTransform(12.8,56.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#623B20").s().p("AhcgEQAmAFAhgNQAVgKASgUQAUAEAQAGQAaAJANANIgNAIQgQAIgVAJQgbALgdAHQgmAJgpABg");
	this.shape_53.setTransform(31.5,116.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFF74F").s().p("Ag1AzQAAghgDgnIBjgfQAKAqgEAWIAFAAIADABQgSAUgXAKQgVAKgZAAQgLAAgMgCg");
	this.shape_54.setTransform(27.6,110.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F6C59A").s().p("AgtAKQgGgogJgbIBKgcIASAvIAPAsQAJAbAFAWIhkAfQgCgqgEgig");
	this.shape_55.setTransform(25.9,99.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#623B20").s().p("AgpAeQgWgCgSgEIgPgEQAIgQAWgOQAPgMARgJQAXAOAYADQAjAFAigTIAPAsQgnALgnAEIgXABQgTAAgSgCg");
	this.shape_56.setTransform(4,117.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF74F").s().p("AgFAqQgZgDgYgOIADgBIADgDIABAAQgGgLgDgPIgFgkIBoAAIATBFQgbAOgcAAIgMAAg");
	this.shape_57.setTransform(5.9,112);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F6C59A").s().p("AgzBLQgBgYAAgcIAAgvIAEgyIBPAEQAAAeAHAoQAGAhAKAqg");
	this.shape_58.setTransform(4.9,100.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F6C59A").s().p("AgCBoQgrgBgeggQgegfACgqQABgsAfgdQAggeAqACQArABAeAfQAeAggCAqQgBArggAeQgdAcgpAAIgDAAg");
	this.shape_59.setTransform(-21.1,80.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#75C5F0").s().p("AhDAtIgViIICxA9IgxB6g");
	this.shape_60.setTransform(29.9,46.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#75C5F0").s().p("AhYgeICxg9IgVCIIhrAvg");
	this.shape_61.setTransform(-4,46.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F6C59A").s().p("AAxDAQAdhggahNQgUg7g2gtQgnggg0gXIgggLIgJgCIgDgBIApgvQCGAgBGBHQA4A4AMBNQAHA3gPA+QgFATgGASIgGANg");
	this.shape_62.setTransform(37.8,62.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F6C59A").s().p("AipCuIgDgOQgEgSgBgVQgEg9ARg2QAZhKBBgtQBPg6CMgHIAiA0IgDAAIgKABQgRACgRAEQg4AMgsAaQg8AjgfA3QgnBHALBkg");
	this.shape_63.setTransform(-8.4,58.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8D1A7").s().p("Ag0ArIAAhVIBpAAIAABVg");
	this.shape_64.setTransform(13.5,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-78.3,123.5,199.4);


(lib.主標題 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGAAgIAEgFQARAFAOAHIgFAEQgMgGgSgFgAFPAmQAQgEANgHIAEAEQgNAHgRAFgAG3AnQAMgKAAgbIAAgGQgKAIgHAFIgFgEQAVgLALgTIgfAAIAAgFIAiAAIAGgMIAEACIgEAKIAtAAIAAAFIgwAAIgIALIAwAAIAAAwQAAAFgDABQgCACgLAAIgHAAIgCgFIAJAAIAJgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgNIgvAAQgDANgIAIgAHHAQIAvAAIAAgLIguAAIgBALgAHIAAIAuAAIAAgKIguAAgAAsAmQADgIABgKIABgTIAAgoIAWAAIAABLQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgGAAIgBgFIAHAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgeIgLAMIgDgDQgBARgEALgAA1AMIAOgNIAAgJIgCACIgMgJgABDgMIAAgWIgOAAIAAAPIADgCIALAJgAIPAnQAFgNAAgaIAFAAIAAAKIgBAGIACAEIAFAFIAAggIgQAAIAAgFIAOAAIAAgMIgMAAIAAgFIAMAAIAAgMIAFAAIAAAMIAJAAIAAAFIgJAAIAAAMIAMAAIAAAFIgLAAIAAAJIAJAAIAAAFIgJAAIAAAWQALAGAVAAIAgAAIgCAFIgdAAQgTAAgKgEQgKgEgFgIQgBALgFAHgAEkAqIAAghIAFAAIAAAhgADxAlQAGgBAFgEQAEgDACgFQADgEAAgLIAFAAQABAZgWAIgAB6AqIAAgEIglAAIAAAEIgGAAIAAgtIANAAIAEgJIAFABIgEAIIAdAAIAAAtgABVAhIAlAAIAAghIglAAgAgBApQgGAAgCgCQgCgCAAgEIAAgHIgeAAIAAgaIBAAAIAAAaIgcAAIAAAIIAAABIAFABIALABIANgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIACgGIAEADQAAAGgCACQgDADgFAAIgOABIgKgBgAgFAVIAXAAIAAgHIgXAAgAglAVIAaAAIAAgHIgaAAgAgFAKIAXAAIAAgHIgXAAgAglAKIAaAAIAAgHIgaAAgACYAnIAAgzIgMAAIAAgFIAMAAIAAgVIAFAAIAAAVIATAAIAAgYIAFAAIAAAYIAXAAIAAgYIAGAAIAAAYIAOAAIAAAFIgOAAIAAAdIgiAAIAAgdIgTAAIAAAuIBAAAIAAAFgAC1AMIAXAAIAAgYIgXAAgAhlAcQgHgJAAgSQAAgRAHgKQAGgKAMAAQAWAAAAAkQAAASgFAKQgHAKgMAAQgLAAgFgKgAhkABQAAAeAQAAQAPAAABgeQAAgegPAAQgQAAgBAegAjmAjIAAgJQAHAFAHAAQAMAAAAgHQAAgEgDgCIgJgFQgJgDgCgDQgDgEAAgDQAAgHAFgEQAHgEAIAAQAGAAAFACIAAAJQgFgEgHAAQgFAAgDACQgDACAAADQAAACACACIAJAEQAJAEADADQADAEAAAFQAAAHgGAEQgFAEgKAAQgHAAgGgDgAlnAfQgHgIAAgMQAAgLAHgIQAHgHAMAAQAMAAAGAHQAHAHAAALQAAANgHAHQgIAIgLAAQgLAAgHgHgAlhgDQgFAEAAAKQAAAJAFAGQAFAFAHAAQAJAAAFgFQAEgGAAgJQAAgKgEgEQgFgFgJAAQgHAAgFAFgAmlAfQgGgHAAgMQAAgMAGgHQAHgIALAAQALAAAEAJIAAghIAIAAIAABMIgIAAIAAgJQgFAKgNAAQgKAAgFgHgAmfgCQgEADAAAKQAAAJAEAGQAEAFAHAAQAIAAAEgFQAEgFAAgIIAAgIQAAgFgDgEQgFgEgHAAQgHAAgFAGgAieAlIAAgHIAQAAIAAg4IgRAFIAAgIIAZgIIAABDIAQAAIAAAHgAkFAlIgKglIgBgEIgBAEIgMAlIgIAAIgPgzIAIAAIAKAmIABAFIAAAAIABgFIANgmIAHAAIALAmIABAFIAAAAIABgFIAKgmIAJAAIgQAzgAm/AlIAAgeQAAgPgNAAQgGAAgEAFQgEADAAAHIAAAeIgIAAIAAgzIAIAAIAAAJQAGgKALAAQAJAAAFAFQAEAGAAAJIAAAggAn7AlIAAgzIAIAAIAAAzgAojAlIgPg1IgBgHIAAAAIgCAHIgPA1IgJAAIgWhIIAJAAIAQA3IABAHIAAAAIACgHIAQg3IAIAAIAQA3IABAHIABgHIAQg3IAJAAIgVBIgAJBAfIAAgMIgTAEIgDgEIAHgCIAAgzIgFAAIAAgFIAdAAIAAAFIgEAAIAABBgAI3AQIAKgDIAAgMIgKAAgAI3gCIAKAAIAAgOIgKAAgAI3gUIAKAAIAAgOIgKAAgABXAaIAOgJIgNgKIAEgDIAMAJIAJgKIAEADQgDAFgGAFIALAKIgEADIgLgKIgOALgAJXAOQgFAIgGAFIgEgDQAIgHAEgIQgGgPgBgUIgEAAIAAgFIAYAAQgBAbgHANQAEAHAGAIIgDAEQgGgHgDgHgAJXADQADgLABgSIgKAAQABASAFALgAFOAYIAAgEIANAAIAAgsIAUAAIADgGIgiAAIAAgFIAkAAIACgHIAGABIgDAGIAoAAIAAAFIgpAAIgDAGIAgAAIAAAsIANAAIAAAEgAFgAUIAwAAIAAgHIgwAAgAFgAIIAwAAIAAgGIgwAAgAFggBIAwAAIAAgHIgwAAgAFggMIAwAAIAAgHIgwAAgAEegCIgNAAQgMAMgVAIIgCgEQATgHAJgJIgUAAIAAglIBDAAIAAAlIgUAAQAJAKAUAHIgDAEQgWgIgLgNgAEbgHIAaAAIAAgMIgaAAgAD7gHIAaAAIAAgMIgaAAgAEbgXIAaAAIAAgLIgaAAgAD7gXIAaAAIAAgLIgaAAgAgCgGIACgEQANABAIACIgDAEQgJgCgLgBgAgmgIQALAAAKgDIACAEQgLADgLABgAgLgEIAAgTIggAAIAAARIgEAAIAAgWIAkAAIAAgHIghAAIAAgEIBHAAIAAAEIghAAIAAAHIAlAAIAAAWIgGAAIAAgRIgfAAIAAATgABxgYQAIgLADgHIAEACQgCAFgHALIALANIgFADQgEgIgIgIgABMgZQAHgKADgHIAEACQgDAHgGAIQAFAGAGAIIgFADIgLgRgABfgYQAGgKADgIIAFACIgIAPIAKAOIgFACQgEgGgHgJgAglgQIABgEQAMABAJACIgCAFIgUgEgAgBgRQAIAAALgDIACAFIgUACgAn6gdQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(53.9,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApAA8QgZAAgSgRQgSgSAAgZQAAgYASgRQASgTAZABISBAAQAagBARATQASARAAAYQAAAZgSASQgRARgaAAg");
	this.shape_1.setTransform(54.7,6.6);

	// 圖層 1
	this.instance = new lib.標題文字();
	this.instance.setTransform(59.8,36.1,1.431,1.609,0,0,0,31.5,35);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,0.5,127.8,34.2);


(lib.女做答6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},15).wait(1));

	// 圖層 3
	this.instance = new lib.img10();
	this.instance.setTransform(141.2,194.1,0.814,0.814);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBaIAAhMIhMAAIAAgbIBMAAIAAhMIAcAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(122.6,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(29.3,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_1.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape_2.setTransform(146.6,157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC6699").ss(3,1,1).p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_3.setTransform(114.4,213.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_4.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]},15).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_3 = new lib.草莓妹妹做答();
	this.instance_3.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.instance_3,p:{mode:"single",startPosition:14}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.女做答5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},15).wait(1));

	// 圖層 3
	this.instance = new lib.img10();
	this.instance.setTransform(141.2,194.1,0.814,0.814);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(122.6,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(29.3,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_1.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape_2.setTransform(146.6,157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC6699").ss(3,1,1).p("APFooIAARRI+JAAIAAxRg");
	this.shape_3.setTransform(114.4,213.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_4.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]},15).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_3 = new lib.草莓妹妹做答();
	this.instance_3.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.instance_3,p:{mode:"single",startPosition:14}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.女做答4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},15).wait(1));

	// 圖層 3
	this.instance = new lib.img8();
	this.instance.setTransform(77.3,180.1,1.235,1.235);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape_1.setTransform(146.6,157.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6699").ss(3,1,1).p("APFIpI+JAAIAAxRIeJAAg");
	this.shape_2.setTransform(114.4,213.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_3.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},15).wait(1));

	// 圖層 1
	this.instance_1 = new lib.粉紅桌();
	this.instance_1.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_2 = new lib.草莓妹妹做答();
	this.instance_2.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{mode:"independent",startPosition:undefined}},{t:this.instance_1}]}).to({state:[{t:this.instance_1},{t:this.instance_2,p:{mode:"single",startPosition:14}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.女做答3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15));

	// 圖層 5
	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},15).wait(1));

	// 圖層 3
	this.instance = new lib.img7();
	this.instance.setTransform(100.7,214.6,0.782,0.782);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(83.3,239.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape_1.setTransform(121.7,190.4);

	this.instance_1 = new lib.img5();
	this.instance_1.setTransform(136.6,169,0.756,0.895);

	this.instance_2 = new lib.img4();
	this.instance_2.setTransform(45,168.1,0.727,0.895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_2.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE2C6").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape_3.setTransform(146.6,157.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC6699").ss(3,1,1).p("APFooIAARRI+JAAIAAxRg");
	this.shape_4.setTransform(114.4,213.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_5.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]},15).wait(1));

	// 圖層 1
	this.instance_3 = new lib.粉紅桌();
	this.instance_3.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_4 = new lib.草莓妹妹做答();
	this.instance_4.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{mode:"independent",startPosition:undefined}},{t:this.instance_3}]}).to({state:[{t:this.instance_3},{t:this.instance_4,p:{mode:"single",startPosition:14}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.女做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},15).wait(1));

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(113.9,218.9);

	this.instance = new lib.img5();
	this.instance.setTransform(126.2,197.5,0.895,0.895);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(23.5,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5C3").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape_1.setTransform(146.6,157.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_2.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC6699").ss(3,1,1).p("APFooIAARRI+JAAIAAxRg");
	this.shape_3.setTransform(114.4,213.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_4.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},15).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_3 = new lib.草莓妹妹做答();
	this.instance_3.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.instance_3,p:{mode:"single",startPosition:14}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.女做答1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE2C6").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape.setTransform(146.6,157.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_1.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.text = new cjs.Text("1.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},15).wait(1));

	// 圖層 3
	this.text_1 = new cjs.Text("影像越清晰", "28px DFLiHei-Bd", "#990000");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(45.8,189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6699").ss(3,1,1).p("APFooIAARRI+JAAIAAxRg");
	this.shape_2.setTransform(114.4,213.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_3.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_1}]},15).wait(1));

	// 圖層 1
	this.instance = new lib.粉紅桌();
	this.instance.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_1 = new lib.草莓妹妹做答();
	this.instance_1.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:117.1,y:72.4}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:117.5,y:72.2}},{t:this.instance}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件150("synched",0);
	this.instance.setTransform(6.6,-12.6,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

	// 圖層 2
	this.instance_1 = new lib.元件146("synched",0);
	this.instance_1.setTransform(8.1,7.1,1,1,0,0,0,2.1,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:8},5).to({rotation:0,x:8.1},5).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AiFCgIA4hnQAwAiBog/QhwAngvgOIgDgBQgigRgTgZQgWgbACgoQAWhqBKgUQCZgyA7BrQAqBNhZBEIABAEQAlA1ABBQIgYAAIgKg2IgEABIgrgNIgeBDIhIgCIAAgtIgcAwIggAnQgKADgHAAQgaAAANgogAiDgYIAAAAIgDACIgBABIgCAFIgBAEQgBALAGAGQAGAIAMAGIABAAIABABQABAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAFAAABgBIADgFQACgFAAgHQgBgKgMgKIgJgFIgCAAIgEAAgAgQg9IgBACIgBAEQgHAaAdAMQACAAAFgEQADgKgCgJIAAgBQgEgNgPgJQgDAAgEACIAAAAIAAAAIgCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0ApQgMgFgGgJQgGgIABgKIABgEIABgFIACAAIACgBIAAAAIAHgBIAJAEQAMAJAAANQABAHgCAEIgDAFQgBABgFAAIgBAAgAAqghIACgEIABgBIACgBIAAAAIAAAAQAEgBADAAQARAJAEAMIAAACQACAJgEAIQgEADgDABQgegLAGgag");
	this.shape_1.setTransform(-6.2,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("Ag6AQIAAAtIgdADgAArgCIArALIAEgBIAKA3IhXAAIAehBgAhdgjIgHgDQAwANBwgmQhDApgsAAQgZAAgRgNg");
	this.shape_2.setTransform(1.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-20.1,32.3,40.4);


(lib.星星燈號組正式 = function() {
	this.initialize();

	// 圖層 1
	this.st4 = new lib.星星亮燈動畫4();
	this.st4.setTransform(244.5,60.1,1,1,0,0,0,30.2,30.2);

	this.st5 = new lib.星星亮燈動畫5();
	this.st5.setTransform(305.9,60.1,1,1,0,0,0,30.2,30.2);

	this.st1 = new lib.星星亮燈動畫1();
	this.st1.setTransform(60.2,60.1,1,1,0,0,0,30.3,30.2);

	this.st2 = new lib.星星亮燈動畫2();
	this.st2.setTransform(121.6,60.1,1,1,0,0,0,30.2,30.2);

	this.st3 = new lib.星星亮燈動畫3();
	this.st3.setTransform(183.1,60.1,1,1,0,0,0,30.3,30.2);

	this.addChild(this.st3,this.st2,this.st1,this.st5,this.st4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.1,4.8,295.8,46.2);


(lib._2西瓜鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("ADqjVIk+GrIg8iuIhZA9");
	this.shape.setTransform(193.8,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AwkBRIAAihMAhJAAAIAAChg");
	this.shape_1.setTransform(104.6,81.4);

	this.instance = new lib.感應答題框("synched",0);
	this.instance.setTransform(106.9,55.3,2.217,4.833,0,0,0,37.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib._1草莓鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("ADqjVIk+GrIg8iuIhZA9");
	this.shape.setTransform(180.8,63.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Av6BNIAAiZIf1AAIAACZg");
	this.shape_1.setTransform(95.7,84.4);

	this.instance = new lib.感應答題框("synched",0);
	this.instance.setTransform(91.1,36.2,2.392,5.095,0,0,0,37.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib._151 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AHCCFIBRkLAoSgnIBVCu");
	this.shape.setTransform(-10.8,17.2);

	// 圖層 3
	this.instance = new lib.blue();
	this.instance.setTransform(-37,19.8,0.5,0.5,0,0,180);

	// 圖層 4
	this.instance_1 = new lib.元件145("synched",0);
	this.instance_1.setTransform(-12.4,30.2);

	// 圖層 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AwjG/IiDiMQkykaEyk7IDUiPQCBglBxA0QAyAYAwAqIbJBVIBZAtQECC0iqDJIgCACQgVAZgaAYI8mBwQg6A1hLAfQhrAriPAAQgjAAgmgCg");
	this.shape_1.setTransform(12.4,-51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AtJCsQh0gkhshAIAGgQQBKAXBTANIA9AJQFPAqHThOQFkg8G0h/QCYgtChg2QiUBNiYBAIgDABQmHCimbBQQjCAljIATQgtADgsAAQikAAibgyg");
	this.shape_2.setTransform(22.9,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("As0JfIg9gJQhTgNhKgWIgQAJIhZheQC+ANCFg2QBMgfA6g1IcmhwIgoAiIgRAIQihA2iYAuQm0CBljA7QkwAzj3AAQiGAAh2gPgArSlBQgvgqgzgYQhwg0iBAlIAHgFQByhlB4g2QCehGCnAMQD1APDpAnQIpBfHfDrg");
	this.shape_3.setTransform(20.7,-54.5);

	// 圖層 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ag/BAIAAhYQABgVAJgJQAIgJAPAAIBeAAIAAAaIhNAAQgegCAEAjIAABEg");
	this.shape_4.setTransform(34.6,25.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122,-116.9,268.8,193.1);


(lib.圓輪球車播放 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 6
	this.instance = new lib.球車綠("synched",0);
	this.instance.setTransform(-125.8,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-125.3,y:-7.7},0).wait(1).to({x:-124.7,y:-14.3},0).wait(1).to({x:-123.7,y:-20.8},0).wait(1).to({x:-122.4,y:-27.2},0).wait(1).to({x:-120.8,y:-33.7},0).wait(1).to({x:-118.9,y:-40.1},0).wait(1).to({x:-116.6,y:-46.3},0).wait(1).to({x:-114.1,y:-52.4},0).wait(1).to({x:-111.2,y:-58.4},0).wait(1).to({x:-108,y:-64.2},0).wait(1).to({x:-104.5,y:-69.8},0).wait(1).to({x:-100.7,y:-75.2},0).wait(1).to({x:-96.6,y:-80.3},0).wait(1).to({x:-92.2,y:-85.3},0).wait(1).to({x:-87.5,y:-89.9},0).wait(1).to({x:-82.6,y:-94.4},0).wait(1).to({x:-77.5,y:-98.5},0).wait(1).to({x:-72.1,y:-102.4},0).wait(1).to({x:-66.6,y:-106},0).wait(1).to({x:-60.9,y:-109.4},0).wait(1).to({x:-55.1,y:-112.6},0).wait(1).to({x:-49.1,y:-115.4},0).wait(1).to({x:-43,y:-117.9},0).wait(1).to({x:-36.7,y:-120.1},0).wait(1).to({x:-30.4,y:-121.9},0).wait(1).to({x:-23.9,y:-123.4},0).wait(1).to({x:-17.4,y:-124.5},0).wait(1).to({x:-10.8,y:-125.2},0).wait(1).to({x:-4.2,y:-125.6},0).wait(1).to({x:2.2},0).wait(1).to({x:8.8,y:-125.2},0).wait(1).to({x:15.4,y:-124.5},0).wait(1).to({x:21.9,y:-123.4},0).wait(1).to({x:28.4,y:-122.1},0).wait(1).to({x:34.8,y:-120.5},0).wait(1).to({x:41.1,y:-118.5},0).wait(1).to({x:47.3,y:-116.3},0).wait(1).to({x:53.4,y:-113.7},0).wait(1).to({x:59.4,y:-110.8},0).wait(1).to({x:65.2,y:-107.6},0).wait(1).to({x:70.7,y:-104},0).wait(1).to({x:76.1,y:-100.2},0).wait(1).to({x:81.3,y:-96.1},0).wait(1).to({x:86.2,y:-91.6},0).wait(1).to({x:90.8,y:-86.9},0).wait(1).to({x:95.2,y:-82},0).wait(1).to({x:99.4,y:-76.8},0).wait(1).to({x:103.3,y:-71.5},0).wait(1).to({x:106.9,y:-65.9},0).wait(1).to({x:110.3,y:-60.2},0).wait(1).to({x:113.3,y:-54.4},0).wait(1).to({x:116.1,y:-48.4},0).wait(1).to({x:118.6,y:-42.3},0).wait(1).to({x:120.7,y:-36},0).wait(1).to({x:122.5,y:-29.6},0).wait(1).to({x:123.9,y:-23.2},0).wait(1).to({x:125,y:-16.6},0).wait(1).to({x:125.7,y:-10.1},0).wait(1).to({x:126,y:-3.5},0).wait(1).to({x:125.9,y:2.9},0).wait(1).to({x:125.5,y:9.5},0).wait(1).to({x:124.8,y:16.1},0).wait(1).to({x:123.7,y:22.6},0).wait(1).to({x:122.4,y:29},0).wait(1).to({x:120.7,y:35.5},0).wait(1).to({x:118.7,y:41.9},0).wait(1).to({x:116.4,y:48.1},0).wait(1).to({x:113.8,y:54.1},0).wait(1).to({x:110.9,y:60.1},0).wait(1).to({x:107.7,y:65.8},0).wait(1).to({x:104.1,y:71.4},0).wait(1).to({x:100.2,y:76.7},0).wait(1).to({x:96,y:81.9},0).wait(1).to({x:91.6,y:86.7},0).wait(1).to({x:86.8,y:91.4},0).wait(1).to({x:81.9,y:95.7},0).wait(1).to({x:76.7,y:99.9},0).wait(1).to({x:71.3,y:103.7},0).wait(1).to({x:65.7,y:107.3},0).wait(1).to({x:60,y:110.6},0).wait(1).to({x:54.2,y:113.7},0).wait(1).to({x:48.2,y:116.4},0).wait(1).to({x:42,y:118.9},0).wait(1).to({x:35.7,y:121},0).wait(1).to({x:29.4,y:122.7},0).wait(1).to({x:22.9,y:124.1},0).wait(1).to({x:16.4,y:125.1},0).wait(1).to({x:9.8,y:125.8},0).wait(1).to({x:3.2,y:126},0).wait(1).to({x:-3.2},0).wait(1).to({x:-9.8,y:125.5},0).wait(1).to({x:-16.4,y:124.7},0).wait(1).to({x:-22.9,y:123.6},0).wait(1).to({x:-29.4,y:122.2},0).wait(1).to({x:-35.8,y:120.5},0).wait(1).to({x:-42.1,y:118.5},0).wait(1).to({x:-48.3,y:116.2},0).wait(1).to({x:-54.4,y:113.5},0).wait(1).to({x:-60.3,y:110.6},0).wait(1).to({x:-66,y:107.3},0).wait(1).to({x:-71.5,y:103.7},0).wait(1).to({x:-76.9,y:99.7},0).wait(1).to({x:-82,y:95.5},0).wait(1).to({x:-86.8,y:91.1},0).wait(1).to({x:-91.4,y:86.3},0).wait(1).to({x:-95.8,y:81.3},0).wait(1).to({x:-99.8,y:76.1},0).wait(1).to({x:-103.7,y:70.7},0).wait(1).to({x:-107.2,y:65.1},0).wait(1).to({x:-110.5,y:59.4},0).wait(1).to({x:-113.6,y:53.5},0).wait(1).to({x:-116.3,y:47.5},0).wait(1).to({x:-118.7,y:41.3},0).wait(1).to({x:-120.8,y:35},0).wait(1).to({x:-122.5,y:28.7},0).wait(1).to({x:-123.9,y:22.2},0).wait(1).to({x:-124.8,y:15.6},0).wait(1).to({x:-125.5,y:9.1},0).wait(1).to({x:-125.7,y:2.5},0).wait(1));

	// 圖層 1
	this.instance_1 = new lib.球車橘("synched",0);
	this.instance_1.setTransform(-27.4,-123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-20.7,y:-124.1},0).wait(1).to({x:-14.2,y:-125},0).wait(1).to({x:-7.6,y:-125.5},0).wait(1).to({x:-1.1,y:-125.8},0).wait(1).to({x:5.5,y:-125.6},0).wait(1).to({x:12.1,y:-125.2},0).wait(1).to({x:18.7,y:-124.5},0).wait(1).to({x:25.3,y:-123.4},0).wait(1).to({x:31.7,y:-122},0).wait(1).to({x:38.1,y:-120.2},0).wait(1).to({x:44.4,y:-118.1},0).wait(1).to({x:50.5,y:-115.6},0).wait(1).to({x:56.5,y:-112.8},0).wait(1).to({x:62.3,y:-109.6},0).wait(1).to({x:68,y:-106.1},0).wait(1).to({x:73.4,y:-102.3},0).wait(1).to({x:78.6,y:-98.2},0).wait(1).to({x:83.7,y:-93.9},0).wait(1).to({x:88.5,y:-89.4},0).wait(1).to({x:93.1,y:-84.6},0).wait(1).to({x:97.5,y:-79.6},0).wait(1).to({x:101.6,y:-74.4},0).wait(1).to({x:105.5,y:-69},0).wait(1).to({x:109,y:-63.4},0).wait(1).to({x:112.3,y:-57.7},0).wait(1).to({x:115.2,y:-51.7},0).wait(1).to({x:117.7,y:-45.6},0).wait(1).to({x:120,y:-39.4},0).wait(1).to({x:121.8,y:-33},0).wait(1).to({x:123.3,y:-26.5},0).wait(1).to({x:124.5,y:-20},0).wait(1).to({x:125.3,y:-13.4},0).wait(1).to({x:125.8,y:-6.8},0).wait(1).to({x:125.9,y:-0.2},0).wait(1).to({x:125.8,y:6.2},0).wait(1).to({x:125.4,y:12.9},0).wait(1).to({x:124.6,y:19.4},0).wait(1).to({x:123.5,y:26},0).wait(1).to({x:122,y:32.4},0).wait(1).to({x:120.2,y:38.8},0).wait(1).to({x:118,y:45.1},0).wait(1).to({x:115.5,y:51.2},0).wait(1).to({x:112.6,y:57.2},0).wait(1).to({x:109.4,y:63},0).wait(1).to({x:105.9,y:68.6},0).wait(1).to({x:102.1,y:74},0).wait(1).to({x:98,y:79.3},0).wait(1).to({x:93.7,y:84.3},0).wait(1).to({x:89.2,y:89.1},0).wait(1).to({x:84.4,y:93.7},0).wait(1).to({x:79.3,y:98},0).wait(1).to({x:74.1,y:102.1},0).wait(1).to({x:68.7,y:105.9},0).wait(1).to({x:63.1,y:109.4},0).wait(1).to({x:57.3,y:112.7},0).wait(1).to({x:51.3,y:115.5},0).wait(1).to({x:45.2,y:118.1},0).wait(1).to({x:38.9,y:120.2},0).wait(1).to({x:32.6,y:122.1},0).wait(1).to({x:26.1,y:123.5},0).wait(1).to({x:19.6,y:124.6},0).wait(1).to({x:13,y:125.4},0).wait(1).to({x:6.4,y:125.9},0).wait(1).to({x:0,y:126},0).wait(1).to({x:-6.7,y:125.8},0).wait(1).to({x:-13.3,y:125.3},0).wait(1).to({x:-19.9,y:124.5},0).wait(1).to({x:-26.4,y:123.4},0).wait(1).to({x:-32.9,y:121.9},0).wait(1).to({x:-39.2,y:120},0).wait(1).to({x:-45.5,y:117.8},0).wait(1).to({x:-51.6,y:115.3},0).wait(1).to({x:-57.5,y:112.4},0).wait(1).to({x:-63.3,y:109.1},0).wait(1).to({x:-68.9,y:105.6},0).wait(1).to({x:-74.3,y:101.8},0).wait(1).to({x:-79.5,y:97.6},0).wait(1).to({x:-84.5,y:93.3},0).wait(1).to({x:-89.3,y:88.6},0).wait(1).to({x:-93.9,y:83.8},0).wait(1).to({x:-98.2,y:78.8},0).wait(1).to({x:-102.2,y:73.6},0).wait(1).to({x:-106,y:68.1},0).wait(1).to({x:-109.5,y:62.5},0).wait(1).to({x:-112.7,y:56.7},0).wait(1).to({x:-115.5,y:50.7},0).wait(1).to({x:-118,y:44.5},0).wait(1).to({x:-120.2,y:38.3},0).wait(1).to({x:-121.9,y:31.9},0).wait(1).to({x:-123.4,y:25.4},0).wait(1).to({x:-124.4,y:18.9},0).wait(1).to({x:-125.2,y:12.3},0).wait(1).to({x:-125.6,y:5.7},0).wait(1).to({y:-0.8},0).wait(1).to({x:-125.5,y:-7.4},0).wait(1).to({x:-125,y:-14},0).wait(1).to({x:-124.1,y:-20.6},0).wait(1).to({x:-122.9,y:-27.1},0).wait(1).to({x:-121.4,y:-33.5},0).wait(1).to({x:-119.5,y:-39.9},0).wait(1).to({x:-117.3,y:-46.1},0).wait(1).to({x:-114.7,y:-52.2},0).wait(1).to({x:-111.7,y:-58.2},0).wait(1).to({x:-108.5,y:-63.9},0).wait(1).to({x:-104.9,y:-69.5},0).wait(1).to({x:-101,y:-74.9},0).wait(1).to({x:-96.8,y:-80},0).wait(1).to({x:-92.4,y:-85},0).wait(1).to({x:-87.8,y:-89.8},0).wait(1).to({x:-83,y:-94.3},0).wait(1).to({x:-77.9,y:-98.6},0).wait(1).to({x:-72.7,y:-102.7},0).wait(1).to({x:-67.2,y:-106.4},0).wait(1).to({x:-61.6,y:-109.9},0).wait(1).to({x:-55.7,y:-113},0).wait(1).to({x:-49.7,y:-115.8},0).wait(1).to({x:-43.6,y:-118.3},0).wait(1).to({x:-37.3,y:-120.4},0).wait(1).to({x:-30.9,y:-122.2},0).wait(1));

	// 圖層 3
	this.instance_2 = new lib.球車紫("synched",0);
	this.instance_2.setTransform(-22.5,123.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-28.8,y:122.2},0).wait(1).to({x:-35.2,y:120.4},0).wait(1).to({x:-41.4,y:118.4},0).wait(1).to({x:-47.5,y:116.1},0).wait(1).to({x:-53.7,y:113.4},0).wait(1).to({x:-59.6,y:110.4},0).wait(1).to({x:-65.3,y:107.2},0).wait(1).to({x:-70.9,y:103.6},0).wait(1).to({x:-76.3,y:99.8},0).wait(1).to({x:-81.4,y:95.7},0).wait(1).to({x:-86.3,y:91.3},0).wait(1).to({x:-91,y:86.6},0).wait(1).to({x:-95.4,y:81.7},0).wait(1).to({x:-99.5,y:76.5},0).wait(1).to({x:-103.3,y:71.2},0).wait(1).to({x:-106.8,y:65.6},0).wait(1).to({x:-110,y:59.8},0).wait(1).to({x:-112.9,y:53.9},0).wait(1).to({x:-115.6,y:47.9},0).wait(1).to({x:-117.9,y:41.7},0).wait(1).to({x:-120,y:35.4},0).wait(1).to({x:-121.8,y:29.1},0).wait(1).to({x:-123.2,y:22.6},0).wait(1).to({x:-124.3,y:16.1},0).wait(1).to({x:-125,y:9.6},0).wait(1).to({x:-125.4,y:3},0).wait(1).to({y:-3.4},0).wait(1).to({x:-125,y:-10},0).wait(1).to({x:-124.2,y:-16.5},0).wait(1).to({x:-123.1,y:-23},0).wait(1).to({x:-121.6,y:-29.5},0).wait(1).to({x:-119.8,y:-35.8},0).wait(1).to({x:-117.7,y:-42.1},0).wait(1).to({x:-115.3,y:-48.2},0).wait(1).to({x:-112.6,y:-54.2},0).wait(1).to({x:-109.6,y:-60.1},0).wait(1).to({x:-106.3,y:-65.9},0).wait(1).to({x:-102.8,y:-71.4},0).wait(1).to({x:-98.9,y:-76.8},0).wait(1).to({x:-94.8,y:-81.9},0).wait(1).to({x:-90.4,y:-86.8},0).wait(1).to({x:-85.7,y:-91.4},0).wait(1).to({x:-80.7,y:-95.8},0).wait(1).to({x:-75.6,y:-99.9},0).wait(1).to({x:-70.1,y:-103.6},0).wait(1).to({x:-64.6,y:-107.1},0).wait(1).to({x:-58.8,y:-110.3},0).wait(1).to({x:-52.9,y:-113.2},0).wait(1).to({x:-46.8,y:-115.9},0).wait(1).to({x:-40.6,y:-118.2},0).wait(1).to({x:-34.3,y:-120.2},0).wait(1).to({x:-28,y:-122},0).wait(1).to({x:-21.5,y:-123.4},0).wait(1).to({x:-15,y:-124.4},0).wait(1).to({x:-8.5,y:-125.1},0).wait(1).to({x:-1.9,y:-125.4},0).wait(1).to({x:4.5,y:-125.3},0).wait(1).to({x:11.1,y:-124.9},0).wait(1).to({x:17.6,y:-124.1},0).wait(1).to({x:24.1,y:-122.9},0).wait(1).to({x:30.5,y:-121.4},0).wait(1).to({x:36.9,y:-119.6},0).wait(1).to({x:43.1,y:-117.4},0).wait(1).to({x:49.1,y:-115},0).wait(1).to({x:55.3,y:-112.3},0).wait(1).to({x:61.1,y:-109.3},0).wait(1).to({x:66.9,y:-106},0).wait(1).to({x:72.4,y:-102.4},0).wait(1).to({x:77.7,y:-98.5},0).wait(1).to({x:82.8,y:-94.3},0).wait(1).to({x:87.7,y:-89.9},0).wait(1).to({x:92.3,y:-85.2},0).wait(1).to({x:96.6,y:-80.2},0).wait(1).to({x:100.7,y:-75},0).wait(1).to({x:104.4,y:-69.6},0).wait(1).to({x:107.9,y:-63.9},0).wait(1).to({x:111.1,y:-58.1},0).wait(1).to({x:114,y:-52.2},0).wait(1).to({x:116.5,y:-46.1},0).wait(1).to({x:118.8,y:-40},0).wait(1).to({x:120.8,y:-33.7},0).wait(1).to({x:122.5,y:-27.3},0).wait(1).to({x:123.9,y:-20.8},0).wait(1).to({x:124.9,y:-14.3},0).wait(1).to({x:125.5,y:-7.8},0).wait(1).to({x:125.8,y:-1.2},0).wait(1).to({x:125.7,y:5.2},0).wait(1).to({x:125.2,y:11.8},0).wait(1).to({x:124.3,y:18.3},0).wait(1).to({x:123.1,y:24.8},0).wait(1).to({x:121.6,y:31.2},0).wait(1).to({x:119.7,y:37.6},0).wait(1).to({x:117.5,y:43.8},0).wait(1).to({x:115,y:49.9},0).wait(1).to({x:112.3,y:55.9},0).wait(1).to({x:109.2,y:61.8},0).wait(1).to({x:105.9,y:67.5},0).wait(1).to({x:102.3,y:73},0).wait(1).to({x:98.4,y:78.3},0).wait(1).to({x:94.2,y:83.4},0).wait(1).to({x:89.7,y:88.2},0).wait(1).to({x:85,y:92.8},0).wait(1).to({x:80,y:97.1},0).wait(1).to({x:74.7,y:101.1},0).wait(1).to({x:69.3,y:104.8},0).wait(1).to({x:63.6,y:108.2},0).wait(1).to({x:57.8,y:111.4},0).wait(1).to({x:51.9,y:114.2},0).wait(1).to({x:45.8,y:116.8},0).wait(1).to({x:39.6,y:119},0).wait(1).to({x:33.3,y:121},0).wait(1).to({x:26.9,y:122.7},0).wait(1).to({x:20.4,y:124},0).wait(1).to({x:13.9,y:125},0).wait(1).to({x:7.4,y:125.6},0).wait(1).to({x:0.8,y:125.8},0).wait(1).to({x:-5.6,y:125.7},0).wait(1).to({x:-12.2,y:125.2},0).wait(1).to({x:-18.8,y:124.3},0).wait(1));

	// 圖層 4
	this.instance_3 = new lib.球車藍("synched",0);
	this.instance_3.setTransform(106.1,-67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:109.4,y:-61.8},0).wait(1).to({x:112.4,y:-56},0).wait(1).to({x:115.2,y:-50},0).wait(1).to({x:117.6,y:-43.9},0).wait(1).to({x:119.8,y:-37.6},0).wait(1).to({x:121.7,y:-31.2},0).wait(1).to({x:123.2,y:-24.8},0).wait(1).to({x:124.5,y:-18.3},0).wait(1).to({x:125.3,y:-11.8},0).wait(1).to({x:125.9,y:-5.2},0).wait(1).to({x:126,y:1.2},0).wait(1).to({x:125.8,y:7.8},0).wait(1).to({x:125.1,y:14.4},0).wait(1).to({x:124.2,y:20.9},0).wait(1).to({x:122.8,y:27.4},0).wait(1).to({x:121.1,y:33.8},0).wait(1).to({x:119.1,y:40.1},0).wait(1).to({x:116.8,y:46.2},0).wait(1).to({x:114.1,y:52.3},0).wait(1).to({x:111.3,y:58.3},0).wait(1).to({x:108.1,y:64.1},0).wait(1).to({x:104.6,y:69.7},0).wait(1).to({x:100.9,y:75.1},0).wait(1).to({x:96.9,y:80.4},0).wait(1).to({x:92.6,y:85.4},0).wait(1).to({x:88,y:90.1},0).wait(1).to({x:83.2,y:94.6},0).wait(1).to({x:78.1,y:98.8},0).wait(1).to({x:72.8,y:102.8},0).wait(1).to({x:67.2,y:106.4},0).wait(1).to({x:61.5,y:109.7},0).wait(1).to({x:55.6,y:112.7},0).wait(1).to({x:49.6,y:115.4},0).wait(1).to({x:43.5,y:117.8},0).wait(1).to({x:37.2,y:120},0).wait(1).to({x:30.9,y:121.8},0).wait(1).to({x:24.4,y:123.3},0).wait(1).to({x:17.9,y:124.5},0).wait(1).to({x:11.4,y:125.4},0).wait(1).to({x:4.8,y:125.8},0).wait(1).to({x:-1.6,y:125.9},0).wait(1).to({x:-8.2,y:125.7},0).wait(1).to({x:-14.8,y:125},0).wait(1).to({x:-21.3,y:124},0).wait(1).to({x:-27.8,y:122.7},0).wait(1).to({x:-34.1,y:120.9},0).wait(1).to({x:-40.4,y:118.9},0).wait(1).to({x:-46.6,y:116.6},0).wait(1).to({x:-52.7,y:113.9},0).wait(1).to({x:-58.6,y:111},0).wait(1).to({x:-64.4,y:107.8},0).wait(1).to({x:-70,y:104.3},0).wait(1).to({x:-75.4,y:100.5},0).wait(1).to({x:-80.6,y:96.5},0).wait(1).to({x:-85.6,y:92.1},0).wait(1).to({x:-90.3,y:87.5},0).wait(1).to({x:-94.8,y:82.6},0).wait(1).to({x:-98.9,y:77.5},0).wait(1).to({x:-102.8,y:72.2},0).wait(1).to({x:-106.4,y:66.6},0).wait(1).to({x:-109.7,y:60.9},0).wait(1).to({x:-112.6,y:55},0).wait(1).to({x:-115.3,y:49},0).wait(1).to({x:-117.7,y:42.9},0).wait(1).to({x:-119.9,y:36.5},0).wait(1).to({x:-121.7,y:30.2},0).wait(1).to({x:-123.2,y:23.7},0).wait(1).to({x:-124.3,y:17.2},0).wait(1).to({x:-125.1,y:10.7},0).wait(1).to({x:-125.6,y:4.1},0).wait(1).to({y:-2.3},0).wait(1).to({x:-125.3,y:-8.9},0).wait(1).to({x:-124.6,y:-15.5},0).wait(1).to({x:-123.6,y:-22},0).wait(1).to({x:-122.2,y:-28.4},0).wait(1).to({x:-120.4,y:-34.8},0).wait(1).to({x:-118.3,y:-41.1},0).wait(1).to({x:-116,y:-47.2},0).wait(1).to({x:-113.3,y:-53.3},0).wait(1).to({x:-110.3,y:-59.2},0).wait(1).to({x:-107.1,y:-65},0).wait(1).to({x:-103.6,y:-70.6},0).wait(1).to({x:-99.8,y:-76},0).wait(1).to({x:-95.7,y:-81.1},0).wait(1).to({x:-91.3,y:-86.1},0).wait(1).to({x:-86.7,y:-90.8},0).wait(1).to({x:-81.8,y:-95.2},0).wait(1).to({x:-76.6,y:-99.4},0).wait(1).to({x:-71.3,y:-103.2},0).wait(1).to({x:-65.7,y:-106.7},0).wait(1).to({x:-59.9,y:-110},0).wait(1).to({x:-54,y:-112.9},0).wait(1).to({x:-48,y:-115.5},0).wait(1).to({x:-41.8,y:-117.9},0).wait(1).to({x:-35.5,y:-120},0).wait(1).to({x:-29.1,y:-121.8},0).wait(1).to({x:-22.7,y:-123.2},0).wait(1).to({x:-16.2,y:-124.3},0).wait(1).to({x:-9.6,y:-125.1},0).wait(1).to({x:-3,y:-125.5},0).wait(1).to({x:3.4},0).wait(1).to({x:10,y:-125.2},0).wait(1).to({x:16.5,y:-124.5},0).wait(1).to({x:23,y:-123.4},0).wait(1).to({x:29.5,y:-121.9},0).wait(1).to({x:35.8,y:-120.1},0).wait(1).to({x:42.1,y:-118},0).wait(1).to({x:48.2,y:-115.6},0).wait(1).to({x:54.3,y:-112.8},0).wait(1).to({x:60.2,y:-109.9},0).wait(1).to({x:65.9,y:-106.6},0).wait(1).to({x:71.5,y:-103.1},0).wait(1).to({x:76.9,y:-99.3},0).wait(1).to({x:82.1,y:-95.2},0).wait(1).to({x:87,y:-90.8},0).wait(1).to({x:91.7,y:-86.1},0).wait(1).to({x:96.1,y:-81.2},0).wait(1).to({x:100.2,y:-76},0).wait(1).to({x:104.1,y:-70.7},0).wait(1));

	// 圖層 5
	this.instance_4 = new lib.球車粉("synched",0);
	this.instance_4.setTransform(104.3,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:100.4,y:75.1},0).wait(1).to({x:96.3,y:80.2},0).wait(1).to({x:91.9,y:85.2},0).wait(1).to({x:87.4,y:89.8},0).wait(1).to({x:82.4,y:94.3},0).wait(1).to({x:77.4,y:98.6},0).wait(1).to({x:72.1,y:102.6},0).wait(1).to({x:66.7,y:106.3},0).wait(1).to({x:61.1,y:109.7},0).wait(1).to({x:55.3,y:112.8},0).wait(1).to({x:49.3,y:115.6},0).wait(1).to({x:43.1,y:118},0).wait(1).to({x:36.9,y:120},0).wait(1).to({x:30.5,y:121.8},0).wait(1).to({x:24.1,y:123.1},0).wait(1).to({x:17.6,y:124.1},0).wait(1).to({x:11,y:124.8},0).wait(1).to({x:4.4,y:125.1},0).wait(1).to({x:-1.9,y:125.2},0).wait(1).to({x:-8.5,y:124.9},0).wait(1).to({x:-15.1,y:124.3},0).wait(1).to({x:-21.6,y:123.4},0).wait(1).to({x:-28.1,y:122.2},0).wait(1).to({x:-34.5,y:120.6},0).wait(1).to({x:-40.8,y:118.6},0).wait(1).to({x:-47,y:116.3},0).wait(1).to({x:-53,y:113.7},0).wait(1).to({x:-58.9,y:110.7},0).wait(1).to({x:-64.6,y:107.4},0).wait(1).to({x:-70.1,y:103.8},0).wait(1).to({x:-75.4,y:99.9},0).wait(1).to({x:-80.5,y:95.7},0).wait(1).to({x:-85.4,y:91.3},0).wait(1).to({x:-90,y:86.6},0).wait(1).to({x:-94.5,y:81.8},0).wait(1).to({x:-98.7,y:76.7},0).wait(1).to({x:-102.7,y:71.5},0).wait(1).to({x:-106.4,y:66},0).wait(1).to({x:-109.8,y:60.3},0).wait(1).to({x:-112.8,y:54.5},0).wait(1).to({x:-115.6,y:48.5},0).wait(1).to({x:-117.9,y:42.4},0).wait(1).to({x:-120,y:36.1},0).wait(1).to({x:-121.7,y:29.7},0).wait(1).to({x:-123,y:23.3},0).wait(1).to({x:-124,y:16.8},0).wait(1).to({x:-124.6,y:10.2},0).wait(1).to({x:-124.9,y:3.6},0).wait(1).to({y:-2.8},0).wait(1).to({x:-124.6,y:-9.3},0).wait(1).to({x:-124,y:-15.9},0).wait(1).to({x:-123,y:-22.4},0).wait(1).to({x:-121.7,y:-28.9},0).wait(1).to({x:-120.1,y:-35.3},0).wait(1).to({x:-118.1,y:-41.6},0).wait(1).to({x:-115.8,y:-47.7},0).wait(1).to({x:-113.1,y:-53.7},0).wait(1).to({x:-110.1,y:-59.6},0).wait(1).to({x:-106.8,y:-65.3},0).wait(1).to({x:-103.1,y:-70.8},0).wait(1).to({x:-99.2,y:-76},0).wait(1).to({x:-95,y:-81.1},0).wait(1).to({x:-90.5,y:-86},0).wait(1).to({x:-86,y:-90.5},0).wait(1).to({x:-81,y:-95.1},0).wait(1).to({x:-75.9,y:-99.3},0).wait(1).to({x:-70.6,y:-103.2},0).wait(1).to({x:-65.1,y:-106.9},0).wait(1).to({x:-59.5,y:-110.2},0).wait(1).to({x:-53.6,y:-113.2},0).wait(1).to({x:-47.6,y:-115.9},0).wait(1).to({x:-41.5,y:-118.3},0).wait(1).to({x:-35.2,y:-120.3},0).wait(1).to({x:-28.8,y:-121.9},0).wait(1).to({x:-22.4,y:-123.2},0).wait(1).to({x:-15.8,y:-124.2},0).wait(1).to({x:-9.3,y:-124.8},0).wait(1).to({x:-2.7,y:-125},0).wait(1).to({x:3.7},0).wait(1).to({x:10.3,y:-124.6},0).wait(1).to({x:16.9,y:-124},0).wait(1).to({x:23.4,y:-123},0).wait(1).to({x:29.8,y:-121.7},0).wait(1).to({x:36.2,y:-120},0).wait(1).to({x:42.5,y:-118},0).wait(1).to({x:48.6,y:-115.6},0).wait(1).to({x:54.6,y:-112.9},0).wait(1).to({x:60.5,y:-109.9},0).wait(1).to({x:66.1,y:-106.5},0).wait(1).to({x:71.6,y:-102.8},0).wait(1).to({x:76.8,y:-98.9},0).wait(1).to({x:81.9,y:-94.6},0).wait(1).to({x:86.7,y:-90.1},0).wait(1).to({x:91.3,y:-85.4},0).wait(1).to({x:95.7,y:-80.5},0).wait(1).to({x:99.9,y:-75.4},0).wait(1).to({x:103.8,y:-70.1},0).wait(1).to({x:107.4,y:-64.6},0).wait(1).to({x:110.7,y:-58.9},0).wait(1).to({x:113.7,y:-53},0).wait(1).to({x:116.4,y:-47},0).wait(1).to({x:118.7,y:-40.8},0).wait(1).to({x:120.7,y:-34.5},0).wait(1).to({x:122.3,y:-28.1},0).wait(1).to({x:123.5,y:-21.7},0).wait(1).to({x:124.4,y:-15.2},0).wait(1).to({x:124.9,y:-8.6},0).wait(1).to({x:125.2,y:-2},0).wait(1).to({x:125.1,y:4.4},0).wait(1).to({x:124.7,y:11},0).wait(1).to({x:124.1,y:17.5},0).wait(1).to({x:123.1,y:24},0).wait(1).to({x:121.7,y:30.5},0).wait(1).to({x:120,y:36.9},0).wait(1).to({x:118,y:43.1},0).wait(1).to({x:115.6,y:49.3},0).wait(1).to({x:112.9,y:55.3},0).wait(1).to({x:109.8,y:61.1},0).wait(1).to({x:106.4,y:66.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.6,-155.7,324.8,328.4);


(lib.圓輪木架播放 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圓輪上木架();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:24.2},0).wait(1).to({rotation:27.2},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:33.3},0).wait(1).to({rotation:36.3},0).wait(1).to({rotation:39.3},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:45.4},0).wait(1).to({rotation:48.4},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:60.5},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:66.6},0).wait(1).to({rotation:69.6},0).wait(1).to({rotation:72.6},0).wait(1).to({rotation:75.6},0).wait(1).to({rotation:78.7},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:87.7},0).wait(1).to({rotation:90.8},0).wait(1).to({rotation:93.8},0).wait(1).to({rotation:96.8},0).wait(1).to({rotation:99.8},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:108.9},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:115},0).wait(1).to({rotation:118},0).wait(1).to({rotation:121},0).wait(1).to({rotation:124},0).wait(1).to({rotation:127.1},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:133.1},0).wait(1).to({rotation:136.1},0).wait(1).to({rotation:139.2},0).wait(1).to({rotation:142.2},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:151.3},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:157.3},0).wait(1).to({rotation:160.3},0).wait(1).to({rotation:163.4},0).wait(1).to({rotation:166.4},0).wait(1).to({rotation:169.4},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:175.5},0).wait(1).to({rotation:178.5},0).wait(1).to({rotation:181.6},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:187.7},0).wait(1).to({rotation:190.7},0).wait(1).to({rotation:193.7},0).wait(1).to({rotation:196.7},0).wait(1).to({rotation:199.8},0).wait(1).to({rotation:202.8},0).wait(1).to({rotation:205.8},0).wait(1).to({rotation:208.8},0).wait(1).to({rotation:211.9},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:217.9},0).wait(1).to({rotation:220.9},0).wait(1).to({rotation:224},0).wait(1).to({rotation:227},0).wait(1).to({rotation:230},0).wait(1).to({rotation:233},0).wait(1).to({rotation:236.1},0).wait(1).to({rotation:239.1},0).wait(1).to({rotation:242.1},0).wait(1).to({rotation:245.1},0).wait(1).to({rotation:248.2},0).wait(1).to({rotation:251.2},0).wait(1).to({rotation:254.2},0).wait(1).to({rotation:257.2},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:263.3},0).wait(1).to({rotation:266.3},0).wait(1).to({rotation:269.3},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:275.4},0).wait(1).to({rotation:278.4},0).wait(1).to({rotation:281.4},0).wait(1).to({rotation:284.5},0).wait(1).to({rotation:287.5},0).wait(1).to({rotation:290.5},0).wait(1).to({rotation:293.5},0).wait(1).to({rotation:296.6},0).wait(1).to({rotation:299.6},0).wait(1).to({rotation:302.6},0).wait(1).to({rotation:305.6},0).wait(1).to({rotation:308.7},0).wait(1).to({rotation:311.7},0).wait(1).to({rotation:314.7},0).wait(1).to({rotation:317.7},0).wait(1).to({rotation:320.8},0).wait(1).to({rotation:323.8},0).wait(1).to({rotation:326.8},0).wait(1).to({rotation:329.8},0).wait(1).to({rotation:332.9},0).wait(1).to({rotation:335.9},0).wait(1).to({rotation:338.9},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:345},0).wait(1).to({rotation:348},0).wait(1).to({rotation:351},0).wait(1).to({rotation:354},0).wait(1).to({rotation:357.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.7,-177.7,355.6,355.6);


(lib.煙花點 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		playSound("firework",false);
	}
	this.frame_11 = function() {
		playSound("firework",false);
	}
	this.frame_14 = function() {
		playSound("firework",false);
	}
	this.frame_16 = function() {
		playSound("firework",false);
	}
	this.frame_18 = function() {
		playSound("firework",false);
	}
	this.frame_42 = function() {
		this.stop();
		this.rest.onClick = function(){
			this.parent.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1).call(this.frame_11).wait(3).call(this.frame_14).wait(2).call(this.frame_16).wait(2).call(this.frame_18).wait(24).call(this.frame_42));

	// Layer 1
	this.instance = new lib.煙火7("synched",0);
	this.instance.setTransform(13.3,49.6,0.467,0.467);

	this.instance_1 = new lib.煙火6("synched",0);
	this.instance_1.setTransform(13.6,-3.4,0.205,0.188,105);

	this.instance_2 = new lib.煙火6("synched",0);
	this.instance_2.setTransform(13.6,-3.4,0.205,0.188,75);

	this.instance_3 = new lib.煙火6("synched",0);
	this.instance_3.setTransform(13.6,-3.4,0.178,0.163,15);

	this.instance_4 = new lib.煙火6("synched",0);
	this.instance_4.setTransform(13.6,-3.4,0.191,0.175,-44.9);

	this.instance_5 = new lib.煙火6("synched",0);
	this.instance_5.setTransform(13.6,-3.4,0.191,0.175,-44.9);

	this.instance_6 = new lib.煙火6("synched",0);
	this.instance_6.setTransform(13.6,-3.4,0.173,0.159,-119.9);

	this.instance_7 = new lib.煙火6("synched",0);
	this.instance_7.setTransform(13.6,-3.4,0.2,0.184,180);

	this.instance_8 = new lib.煙火6("synched",0);
	this.instance_8.setTransform(13.6,-3.4,0.316,0.29,120);

	this.instance_9 = new lib.煙火6("synched",0);
	this.instance_9.setTransform(13.6,-3.4,0.263,0.241,150);

	this.instance_10 = new lib.煙火6("synched",0);
	this.instance_10.setTransform(13.6,-3.4,0.239,0.226,0,-179.9,180);

	this.instance_11 = new lib.煙火6("synched",0);
	this.instance_11.setTransform(13.6,-3.4,0.256,0.256,-149.9);

	this.instance_12 = new lib.煙火6("synched",0);
	this.instance_12.setTransform(13.6,-3.4,0.366,0.366,-119.9);

	this.instance_13 = new lib.煙火6("synched",0);
	this.instance_13.setTransform(13.6,-3.4,0.309,0.309,-74.9);

	this.instance_14 = new lib.煙火6("synched",0);
	this.instance_14.setTransform(13.7,-3.4,0.294,0.294,-14.9);

	this.instance_15 = new lib.煙火6("synched",0);
	this.instance_15.setTransform(13.7,-3.4,0.346,0.346,30);

	this.instance_16 = new lib.煙火6("synched",0);
	this.instance_16.setTransform(13.6,-3.4,0.246,0.226,45);

	this.instance_17 = new lib.煙火6("synched",0);
	this.instance_17.setTransform(13.6,-3.4,0.246,0.226,15);

	this.instance_18 = new lib.煙火6("synched",0);
	this.instance_18.setTransform(13.6,-3.4,0.214,0.196,-44.9);

	this.instance_19 = new lib.煙火6("synched",0);
	this.instance_19.setTransform(13.6,-3.4,0.229,0.211,-104.9);

	this.instance_20 = new lib.煙火6("synched",0);
	this.instance_20.setTransform(13.6,-3.4,0.229,0.211,-104.9);

	this.instance_21 = new lib.煙火6("synched",0);
	this.instance_21.setTransform(13.6,-3.4,0.209,0.191,0,-179.9,180);

	this.instance_22 = new lib.煙火6("synched",0);
	this.instance_22.setTransform(13.6,-3.4,0.241,0.221,120);

	this.instance_23 = new lib.煙火6("synched",0);
	this.instance_23.setTransform(13.6,-3.4,0.38,0.349,60);

	this.instance_24 = new lib.煙火6("synched",0);
	this.instance_24.setTransform(13.6,-3.4,0.317,0.291,90);

	this.instance_25 = new lib.煙火6("synched",0);
	this.instance_25.setTransform(13.6,-3.4,0.288,0.272,120);

	this.instance_26 = new lib.煙火6("synched",0);
	this.instance_26.setTransform(13.6,-3.4,0.308,0.308,150);

	this.instance_27 = new lib.煙火6("synched",0);
	this.instance_27.setTransform(13.6,-3.4,0.441,0.441,180);

	this.instance_28 = new lib.煙火6("synched",0);
	this.instance_28.setTransform(13.6,-3.4,0.371,0.371,-134.9);

	this.instance_29 = new lib.煙火6("synched",0);
	this.instance_29.setTransform(13.6,-3.4,0.354,0.354,-74.9);

	this.instance_30 = new lib.煙火6("synched",0);
	this.instance_30.setTransform(13.6,-3.4,0.416,0.416,-29.9);

	this.instance_31 = new lib.煙火6("synched",0);
	this.instance_31.setTransform(13.6,-4.1,0.343,0.315,135);

	this.instance_32 = new lib.煙火6("synched",0);
	this.instance_32.setTransform(13.6,-4.1,0.343,0.315,105);

	this.instance_33 = new lib.煙火6("synched",0);
	this.instance_33.setTransform(13.6,-4.1,0.298,0.274,45);

	this.instance_34 = new lib.煙火6("synched",0);
	this.instance_34.setTransform(13.6,-4.1,0.319,0.293,-14.9);

	this.instance_35 = new lib.煙火6("synched",0);
	this.instance_35.setTransform(13.6,-4.1,0.319,0.293,-14.9);

	this.instance_36 = new lib.煙火6("synched",0);
	this.instance_36.setTransform(13.6,-4.1,0.29,0.267,-89.9);

	this.instance_37 = new lib.煙火6("synched",0);
	this.instance_37.setTransform(13.6,-4.1,0.335,0.308,-149.9);

	this.instance_38 = new lib.煙火6("synched",0);
	this.instance_38.setTransform(13.6,-4.1,0.529,0.486,150);

	this.instance_39 = new lib.煙火6("synched",0);
	this.instance_39.setTransform(13.6,-4.1,0.441,0.405,-179.9);

	this.instance_40 = new lib.煙火6("synched",0);
	this.instance_40.setTransform(13.6,-4.1,0.401,0.379,-149.9);

	this.instance_41 = new lib.煙火6("synched",0);
	this.instance_41.setTransform(13.6,-4.1,0.429,0.429,-119.9);

	this.instance_42 = new lib.煙火6("synched",0);
	this.instance_42.setTransform(13.6,-4.1,0.614,0.614,-89.9);

	this.instance_43 = new lib.煙火6("synched",0);
	this.instance_43.setTransform(13.6,-4.1,0.517,0.517,-44.9);

	this.instance_44 = new lib.煙火6("synched",0);
	this.instance_44.setTransform(13.7,-4.1,0.493,0.493,15);

	this.instance_45 = new lib.煙火6("synched",0);
	this.instance_45.setTransform(13.7,-4.1,0.579,0.579,60);

	this.instance_46 = new lib.煙火6("synched",0);
	this.instance_46.setTransform(13.6,-4.1,0.413,0.379,75);

	this.instance_47 = new lib.煙火6("synched",0);
	this.instance_47.setTransform(13.6,-4.1,0.413,0.379,45);

	this.instance_48 = new lib.煙火6("synched",0);
	this.instance_48.setTransform(13.6,-4.1,0.359,0.329,-14.9);

	this.instance_49 = new lib.煙火6("synched",0);
	this.instance_49.setTransform(13.6,-4.1,0.384,0.353,-74.9);

	this.instance_50 = new lib.煙火6("synched",0);
	this.instance_50.setTransform(13.6,-4.1,0.384,0.353,-74.9);

	this.instance_51 = new lib.煙火6("synched",0);
	this.instance_51.setTransform(13.6,-4.1,0.349,0.321,-149.9);

	this.instance_52 = new lib.煙火6("synched",0);
	this.instance_52.setTransform(13.6,-4.1,0.403,0.37,150);

	this.instance_53 = new lib.煙火6("synched",0);
	this.instance_53.setTransform(13.6,-4.1,0.637,0.584,90);

	this.instance_54 = new lib.煙火6("synched",0);
	this.instance_54.setTransform(13.6,-4.1,0.531,0.487,120);

	this.instance_55 = new lib.煙火6("synched",0);
	this.instance_55.setTransform(13.6,-4.1,0.482,0.456,150);

	this.instance_56 = new lib.煙火6("synched",0);
	this.instance_56.setTransform(13.6,-4.1,0.517,0.517,-179.9);

	this.instance_57 = new lib.煙火6("synched",0);
	this.instance_57.setTransform(13.6,-4.1,0.738,0.738,-149.9);

	this.instance_58 = new lib.煙火6("synched",0);
	this.instance_58.setTransform(13.6,-4.1,0.622,0.622,-104.9);

	this.instance_59 = new lib.煙火6("synched",0);
	this.instance_59.setTransform(13.6,-4.2,0.593,0.593,-44.9);

	this.instance_60 = new lib.煙火6("synched",0);
	this.instance_60.setTransform(13.6,-4.2,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:49.6,x:13.3}}]}).to({state:[{t:this.instance,p:{y:43.6,x:13.3}}]},1).to({state:[{t:this.instance,p:{y:37.6,x:13.4}}]},1).to({state:[{t:this.instance,p:{y:31.6,x:13.4}}]},1).to({state:[{t:this.instance,p:{y:25.7,x:13.5}}]},1).to({state:[{t:this.instance,p:{y:19.7,x:13.5}}]},1).to({state:[{t:this.instance,p:{y:13.7,x:13.5}}]},1).to({state:[{t:this.instance,p:{y:7.7,x:13.6}}]},1).to({state:[{t:this.instance,p:{y:1.8,x:13.6}}]},1).to({state:[{t:this.instance,p:{y:-4.1,x:13.7}}]},1).to({state:[{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},24).wait(9));

	// Layer 1
	this.instance_61 = new lib.煙火7("synched",0);
	this.instance_61.setTransform(38.8,52.6,0.467,0.467);

	this.instance_62 = new lib.煙火6("synched",0);
	this.instance_62.setTransform(39.1,-0.4,0.205,0.188,105);

	this.instance_63 = new lib.煙火6("synched",0);
	this.instance_63.setTransform(39.1,-0.4,0.205,0.188,75);

	this.instance_64 = new lib.煙火6("synched",0);
	this.instance_64.setTransform(39.1,-0.4,0.178,0.163,15);

	this.instance_65 = new lib.煙火6("synched",0);
	this.instance_65.setTransform(39.1,-0.4,0.191,0.175,-44.9);

	this.instance_66 = new lib.煙火6("synched",0);
	this.instance_66.setTransform(39.1,-0.4,0.191,0.175,-44.9);

	this.instance_67 = new lib.煙火6("synched",0);
	this.instance_67.setTransform(39.1,-0.4,0.173,0.159,-119.9);

	this.instance_68 = new lib.煙火6("synched",0);
	this.instance_68.setTransform(39.1,-0.4,0.2,0.184,180);

	this.instance_69 = new lib.煙火6("synched",0);
	this.instance_69.setTransform(39.1,-0.4,0.316,0.29,120);

	this.instance_70 = new lib.煙火6("synched",0);
	this.instance_70.setTransform(39.1,-0.4,0.263,0.241,150);

	this.instance_71 = new lib.煙火6("synched",0);
	this.instance_71.setTransform(39.1,-0.4,0.239,0.226,0,-179.9,180);

	this.instance_72 = new lib.煙火6("synched",0);
	this.instance_72.setTransform(39.1,-0.4,0.256,0.256,-149.9);

	this.instance_73 = new lib.煙火6("synched",0);
	this.instance_73.setTransform(39.1,-0.4,0.366,0.366,-119.9);

	this.instance_74 = new lib.煙火6("synched",0);
	this.instance_74.setTransform(39.1,-0.4,0.309,0.309,-74.9);

	this.instance_75 = new lib.煙火6("synched",0);
	this.instance_75.setTransform(39.2,-0.4,0.294,0.294,-14.9);

	this.instance_76 = new lib.煙火6("synched",0);
	this.instance_76.setTransform(39.2,-0.4,0.346,0.346,30);

	this.instance_77 = new lib.煙火6("synched",0);
	this.instance_77.setTransform(39.1,-0.4,0.246,0.226,45);

	this.instance_78 = new lib.煙火6("synched",0);
	this.instance_78.setTransform(39.1,-0.4,0.246,0.226,15);

	this.instance_79 = new lib.煙火6("synched",0);
	this.instance_79.setTransform(39.1,-0.4,0.214,0.196,-44.9);

	this.instance_80 = new lib.煙火6("synched",0);
	this.instance_80.setTransform(39.1,-0.4,0.229,0.211,-104.9);

	this.instance_81 = new lib.煙火6("synched",0);
	this.instance_81.setTransform(39.1,-0.4,0.229,0.211,-104.9);

	this.instance_82 = new lib.煙火6("synched",0);
	this.instance_82.setTransform(39.1,-0.4,0.209,0.191,0,-179.9,180);

	this.instance_83 = new lib.煙火6("synched",0);
	this.instance_83.setTransform(39.1,-0.4,0.241,0.221,120);

	this.instance_84 = new lib.煙火6("synched",0);
	this.instance_84.setTransform(39.1,-0.4,0.38,0.349,60);

	this.instance_85 = new lib.煙火6("synched",0);
	this.instance_85.setTransform(39.1,-0.4,0.317,0.291,90);

	this.instance_86 = new lib.煙火6("synched",0);
	this.instance_86.setTransform(39.1,-0.4,0.288,0.272,120);

	this.instance_87 = new lib.煙火6("synched",0);
	this.instance_87.setTransform(39.1,-0.4,0.308,0.308,150);

	this.instance_88 = new lib.煙火6("synched",0);
	this.instance_88.setTransform(39.1,-0.4,0.441,0.441,180);

	this.instance_89 = new lib.煙火6("synched",0);
	this.instance_89.setTransform(39.1,-0.4,0.371,0.371,-134.9);

	this.instance_90 = new lib.煙火6("synched",0);
	this.instance_90.setTransform(39.1,-0.4,0.354,0.354,-74.9);

	this.instance_91 = new lib.煙火6("synched",0);
	this.instance_91.setTransform(39.1,-0.4,0.416,0.416,-29.9);

	this.instance_92 = new lib.煙火6("synched",0);
	this.instance_92.setTransform(39.1,-1.1,0.343,0.315,135);

	this.instance_93 = new lib.煙火6("synched",0);
	this.instance_93.setTransform(39.1,-1.1,0.343,0.315,105);

	this.instance_94 = new lib.煙火6("synched",0);
	this.instance_94.setTransform(39.1,-1.1,0.298,0.274,45);

	this.instance_95 = new lib.煙火6("synched",0);
	this.instance_95.setTransform(39.1,-1.1,0.319,0.293,-14.9);

	this.instance_96 = new lib.煙火6("synched",0);
	this.instance_96.setTransform(39.1,-1.1,0.319,0.293,-14.9);

	this.instance_97 = new lib.煙火6("synched",0);
	this.instance_97.setTransform(39.1,-1.1,0.29,0.267,-89.9);

	this.instance_98 = new lib.煙火6("synched",0);
	this.instance_98.setTransform(39.1,-1.1,0.335,0.308,-149.9);

	this.instance_99 = new lib.煙火6("synched",0);
	this.instance_99.setTransform(39.1,-1.1,0.529,0.486,150);

	this.instance_100 = new lib.煙火6("synched",0);
	this.instance_100.setTransform(39.1,-1.1,0.441,0.405,-179.9);

	this.instance_101 = new lib.煙火6("synched",0);
	this.instance_101.setTransform(39.1,-1.1,0.401,0.379,-149.9);

	this.instance_102 = new lib.煙火6("synched",0);
	this.instance_102.setTransform(39.1,-1.1,0.429,0.429,-119.9);

	this.instance_103 = new lib.煙火6("synched",0);
	this.instance_103.setTransform(39.1,-1.1,0.614,0.614,-89.9);

	this.instance_104 = new lib.煙火6("synched",0);
	this.instance_104.setTransform(39.1,-1.1,0.517,0.517,-44.9);

	this.instance_105 = new lib.煙火6("synched",0);
	this.instance_105.setTransform(39.2,-1.1,0.493,0.493,15);

	this.instance_106 = new lib.煙火6("synched",0);
	this.instance_106.setTransform(39.2,-1.1,0.579,0.579,60);

	this.instance_107 = new lib.煙火6("synched",0);
	this.instance_107.setTransform(39.1,-1.1,0.413,0.379,75);

	this.instance_108 = new lib.煙火6("synched",0);
	this.instance_108.setTransform(39.1,-1.1,0.413,0.379,45);

	this.instance_109 = new lib.煙火6("synched",0);
	this.instance_109.setTransform(39.1,-1.1,0.359,0.329,-14.9);

	this.instance_110 = new lib.煙火6("synched",0);
	this.instance_110.setTransform(39.1,-1.1,0.384,0.353,-74.9);

	this.instance_111 = new lib.煙火6("synched",0);
	this.instance_111.setTransform(39.1,-1.1,0.384,0.353,-74.9);

	this.instance_112 = new lib.煙火6("synched",0);
	this.instance_112.setTransform(39.1,-1.1,0.349,0.321,-149.9);

	this.instance_113 = new lib.煙火6("synched",0);
	this.instance_113.setTransform(39.1,-1.1,0.403,0.37,150);

	this.instance_114 = new lib.煙火6("synched",0);
	this.instance_114.setTransform(39.1,-1.1,0.637,0.584,90);

	this.instance_115 = new lib.煙火6("synched",0);
	this.instance_115.setTransform(39.1,-1.1,0.531,0.487,120);

	this.instance_116 = new lib.煙火6("synched",0);
	this.instance_116.setTransform(39.1,-1.1,0.482,0.456,150);

	this.instance_117 = new lib.煙火6("synched",0);
	this.instance_117.setTransform(39.1,-1.1,0.517,0.517,-179.9);

	this.instance_118 = new lib.煙火6("synched",0);
	this.instance_118.setTransform(39.1,-1.1,0.738,0.738,-149.9);

	this.instance_119 = new lib.煙火6("synched",0);
	this.instance_119.setTransform(39.1,-1.1,0.622,0.622,-104.9);

	this.instance_120 = new lib.煙火6("synched",0);
	this.instance_120.setTransform(39.1,-1.2,0.593,0.593,-44.9);

	this.instance_121 = new lib.煙火6("synched",0);
	this.instance_121.setTransform(39.1,-1.2,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_61,p:{y:52.6,x:38.8}}]},1).to({state:[{t:this.instance_61,p:{y:46.6,x:38.8}}]},1).to({state:[{t:this.instance_61,p:{y:40.6,x:38.9}}]},1).to({state:[{t:this.instance_61,p:{y:34.6,x:38.9}}]},1).to({state:[{t:this.instance_61,p:{y:28.7,x:39}}]},1).to({state:[{t:this.instance_61,p:{y:22.7,x:39}}]},1).to({state:[{t:this.instance_61,p:{y:16.7,x:39}}]},1).to({state:[{t:this.instance_61,p:{y:10.7,x:39.1}}]},1).to({state:[{t:this.instance_61,p:{y:4.8,x:39.1}}]},1).to({state:[{t:this.instance_61,p:{y:-1.1,x:39.2}}]},1).to({state:[{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62}]},1).to({state:[]},26).to({state:[]},2).wait(4));

	// Layer 1
	this.instance_122 = new lib.煙火7("synched",0);
	this.instance_122.setTransform(-22.3,32.3,0.467,0.467);

	this.instance_123 = new lib.煙火6("synched",0);
	this.instance_123.setTransform(-22,-20.7,0.205,0.188,105);

	this.instance_124 = new lib.煙火6("synched",0);
	this.instance_124.setTransform(-22,-20.7,0.205,0.188,75);

	this.instance_125 = new lib.煙火6("synched",0);
	this.instance_125.setTransform(-22,-20.7,0.178,0.163,15);

	this.instance_126 = new lib.煙火6("synched",0);
	this.instance_126.setTransform(-22,-20.7,0.191,0.175,-44.9);

	this.instance_127 = new lib.煙火6("synched",0);
	this.instance_127.setTransform(-22,-20.7,0.191,0.175,-44.9);

	this.instance_128 = new lib.煙火6("synched",0);
	this.instance_128.setTransform(-22,-20.7,0.173,0.159,-119.9);

	this.instance_129 = new lib.煙火6("synched",0);
	this.instance_129.setTransform(-22,-20.7,0.2,0.184,180);

	this.instance_130 = new lib.煙火6("synched",0);
	this.instance_130.setTransform(-22,-20.7,0.316,0.29,120);

	this.instance_131 = new lib.煙火6("synched",0);
	this.instance_131.setTransform(-22,-20.7,0.263,0.241,150);

	this.instance_132 = new lib.煙火6("synched",0);
	this.instance_132.setTransform(-22,-20.7,0.239,0.226,0,-179.9,180);

	this.instance_133 = new lib.煙火6("synched",0);
	this.instance_133.setTransform(-22,-20.7,0.256,0.256,-149.9);

	this.instance_134 = new lib.煙火6("synched",0);
	this.instance_134.setTransform(-22,-20.7,0.366,0.366,-119.9);

	this.instance_135 = new lib.煙火6("synched",0);
	this.instance_135.setTransform(-22,-20.7,0.309,0.309,-74.9);

	this.instance_136 = new lib.煙火6("synched",0);
	this.instance_136.setTransform(-21.9,-20.7,0.294,0.294,-14.9);

	this.instance_137 = new lib.煙火6("synched",0);
	this.instance_137.setTransform(-21.9,-20.7,0.346,0.346,30);

	this.instance_138 = new lib.煙火6("synched",0);
	this.instance_138.setTransform(-22,-20.7,0.246,0.226,45);

	this.instance_139 = new lib.煙火6("synched",0);
	this.instance_139.setTransform(-22,-20.7,0.246,0.226,15);

	this.instance_140 = new lib.煙火6("synched",0);
	this.instance_140.setTransform(-22,-20.7,0.214,0.196,-44.9);

	this.instance_141 = new lib.煙火6("synched",0);
	this.instance_141.setTransform(-22,-20.7,0.229,0.211,-104.9);

	this.instance_142 = new lib.煙火6("synched",0);
	this.instance_142.setTransform(-22,-20.7,0.229,0.211,-104.9);

	this.instance_143 = new lib.煙火6("synched",0);
	this.instance_143.setTransform(-22,-20.7,0.209,0.191,0,-179.9,180);

	this.instance_144 = new lib.煙火6("synched",0);
	this.instance_144.setTransform(-22,-20.7,0.241,0.221,120);

	this.instance_145 = new lib.煙火6("synched",0);
	this.instance_145.setTransform(-22,-20.7,0.38,0.349,60);

	this.instance_146 = new lib.煙火6("synched",0);
	this.instance_146.setTransform(-22,-20.7,0.317,0.291,90);

	this.instance_147 = new lib.煙火6("synched",0);
	this.instance_147.setTransform(-22,-20.7,0.288,0.272,120);

	this.instance_148 = new lib.煙火6("synched",0);
	this.instance_148.setTransform(-22,-20.7,0.308,0.308,150);

	this.instance_149 = new lib.煙火6("synched",0);
	this.instance_149.setTransform(-22,-20.7,0.441,0.441,180);

	this.instance_150 = new lib.煙火6("synched",0);
	this.instance_150.setTransform(-22,-20.7,0.371,0.371,-134.9);

	this.instance_151 = new lib.煙火6("synched",0);
	this.instance_151.setTransform(-22,-20.7,0.354,0.354,-74.9);

	this.instance_152 = new lib.煙火6("synched",0);
	this.instance_152.setTransform(-22,-20.7,0.416,0.416,-29.9);

	this.instance_153 = new lib.煙火6("synched",0);
	this.instance_153.setTransform(-22,-21.4,0.343,0.315,135);

	this.instance_154 = new lib.煙火6("synched",0);
	this.instance_154.setTransform(-22,-21.4,0.343,0.315,105);

	this.instance_155 = new lib.煙火6("synched",0);
	this.instance_155.setTransform(-22,-21.4,0.298,0.274,45);

	this.instance_156 = new lib.煙火6("synched",0);
	this.instance_156.setTransform(-22,-21.4,0.319,0.293,-14.9);

	this.instance_157 = new lib.煙火6("synched",0);
	this.instance_157.setTransform(-22,-21.4,0.319,0.293,-14.9);

	this.instance_158 = new lib.煙火6("synched",0);
	this.instance_158.setTransform(-22,-21.4,0.29,0.267,-89.9);

	this.instance_159 = new lib.煙火6("synched",0);
	this.instance_159.setTransform(-22,-21.4,0.335,0.308,-149.9);

	this.instance_160 = new lib.煙火6("synched",0);
	this.instance_160.setTransform(-22,-21.4,0.529,0.486,150);

	this.instance_161 = new lib.煙火6("synched",0);
	this.instance_161.setTransform(-22,-21.4,0.441,0.405,-179.9);

	this.instance_162 = new lib.煙火6("synched",0);
	this.instance_162.setTransform(-22,-21.4,0.401,0.379,-149.9);

	this.instance_163 = new lib.煙火6("synched",0);
	this.instance_163.setTransform(-22,-21.4,0.429,0.429,-119.9);

	this.instance_164 = new lib.煙火6("synched",0);
	this.instance_164.setTransform(-22,-21.4,0.614,0.614,-89.9);

	this.instance_165 = new lib.煙火6("synched",0);
	this.instance_165.setTransform(-22,-21.4,0.517,0.517,-44.9);

	this.instance_166 = new lib.煙火6("synched",0);
	this.instance_166.setTransform(-21.9,-21.4,0.493,0.493,15);

	this.instance_167 = new lib.煙火6("synched",0);
	this.instance_167.setTransform(-21.9,-21.4,0.579,0.579,60);

	this.instance_168 = new lib.煙火6("synched",0);
	this.instance_168.setTransform(-22,-21.4,0.413,0.379,75);

	this.instance_169 = new lib.煙火6("synched",0);
	this.instance_169.setTransform(-22,-21.4,0.413,0.379,45);

	this.instance_170 = new lib.煙火6("synched",0);
	this.instance_170.setTransform(-22,-21.4,0.359,0.329,-14.9);

	this.instance_171 = new lib.煙火6("synched",0);
	this.instance_171.setTransform(-22,-21.4,0.384,0.353,-74.9);

	this.instance_172 = new lib.煙火6("synched",0);
	this.instance_172.setTransform(-22,-21.4,0.384,0.353,-74.9);

	this.instance_173 = new lib.煙火6("synched",0);
	this.instance_173.setTransform(-22,-21.4,0.349,0.321,-149.9);

	this.instance_174 = new lib.煙火6("synched",0);
	this.instance_174.setTransform(-22,-21.4,0.403,0.37,150);

	this.instance_175 = new lib.煙火6("synched",0);
	this.instance_175.setTransform(-22,-21.4,0.637,0.584,90);

	this.instance_176 = new lib.煙火6("synched",0);
	this.instance_176.setTransform(-22,-21.4,0.531,0.487,120);

	this.instance_177 = new lib.煙火6("synched",0);
	this.instance_177.setTransform(-22,-21.4,0.482,0.456,150);

	this.instance_178 = new lib.煙火6("synched",0);
	this.instance_178.setTransform(-22,-21.4,0.517,0.517,-179.9);

	this.instance_179 = new lib.煙火6("synched",0);
	this.instance_179.setTransform(-22,-21.4,0.738,0.738,-149.9);

	this.instance_180 = new lib.煙火6("synched",0);
	this.instance_180.setTransform(-22,-21.4,0.622,0.622,-104.9);

	this.instance_181 = new lib.煙火6("synched",0);
	this.instance_181.setTransform(-22,-21.5,0.593,0.593,-44.9);

	this.instance_182 = new lib.煙火6("synched",0);
	this.instance_182.setTransform(-22,-21.5,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_122,p:{x:-22.3,y:32.3}}]},6).to({state:[{t:this.instance_122,p:{x:-22.2,y:26.3}}]},1).to({state:[{t:this.instance_122,p:{x:-22.2,y:20.3}}]},1).to({state:[{t:this.instance_122,p:{x:-22.1,y:14.3}}]},1).to({state:[{t:this.instance_122,p:{x:-22.1,y:8.4}}]},1).to({state:[{t:this.instance_122,p:{x:-22.1,y:2.4}}]},1).to({state:[{t:this.instance_122,p:{x:-22,y:-3.5}}]},1).to({state:[{t:this.instance_122,p:{x:-22,y:-9.5}}]},1).to({state:[{t:this.instance_122,p:{x:-21.9,y:-15.4}}]},1).to({state:[{t:this.instance_122,p:{x:-21.9,y:-21.4}}]},1).to({state:[{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123}]},1).to({state:[]},24).wait(3));

	// Layer 1
	this.instance_183 = new lib.煙火7("synched",0);
	this.instance_183.setTransform(19.8,56.4,0.467,0.467);

	this.instance_184 = new lib.煙火6("synched",0);
	this.instance_184.setTransform(20.1,3.4,0.205,0.188,105);

	this.instance_185 = new lib.煙火6("synched",0);
	this.instance_185.setTransform(20.1,3.4,0.205,0.188,75);

	this.instance_186 = new lib.煙火6("synched",0);
	this.instance_186.setTransform(20.1,3.4,0.178,0.163,15);

	this.instance_187 = new lib.煙火6("synched",0);
	this.instance_187.setTransform(20.1,3.4,0.191,0.175,-44.9);

	this.instance_188 = new lib.煙火6("synched",0);
	this.instance_188.setTransform(20.1,3.4,0.191,0.175,-44.9);

	this.instance_189 = new lib.煙火6("synched",0);
	this.instance_189.setTransform(20.1,3.4,0.173,0.159,-119.9);

	this.instance_190 = new lib.煙火6("synched",0);
	this.instance_190.setTransform(20.1,3.4,0.2,0.184,180);

	this.instance_191 = new lib.煙火6("synched",0);
	this.instance_191.setTransform(20.1,3.4,0.316,0.29,120);

	this.instance_192 = new lib.煙火6("synched",0);
	this.instance_192.setTransform(20.1,3.4,0.263,0.241,150);

	this.instance_193 = new lib.煙火6("synched",0);
	this.instance_193.setTransform(20.1,3.4,0.239,0.226,0,-179.9,180);

	this.instance_194 = new lib.煙火6("synched",0);
	this.instance_194.setTransform(20.1,3.4,0.256,0.256,-149.9);

	this.instance_195 = new lib.煙火6("synched",0);
	this.instance_195.setTransform(20.1,3.4,0.366,0.366,-119.9);

	this.instance_196 = new lib.煙火6("synched",0);
	this.instance_196.setTransform(20.1,3.4,0.309,0.309,-74.9);

	this.instance_197 = new lib.煙火6("synched",0);
	this.instance_197.setTransform(20.2,3.4,0.294,0.294,-14.9);

	this.instance_198 = new lib.煙火6("synched",0);
	this.instance_198.setTransform(20.2,3.4,0.346,0.346,30);

	this.instance_199 = new lib.煙火6("synched",0);
	this.instance_199.setTransform(20.1,3.4,0.246,0.226,45);

	this.instance_200 = new lib.煙火6("synched",0);
	this.instance_200.setTransform(20.1,3.4,0.246,0.226,15);

	this.instance_201 = new lib.煙火6("synched",0);
	this.instance_201.setTransform(20.1,3.4,0.214,0.196,-44.9);

	this.instance_202 = new lib.煙火6("synched",0);
	this.instance_202.setTransform(20.1,3.4,0.229,0.211,-104.9);

	this.instance_203 = new lib.煙火6("synched",0);
	this.instance_203.setTransform(20.1,3.4,0.229,0.211,-104.9);

	this.instance_204 = new lib.煙火6("synched",0);
	this.instance_204.setTransform(20.1,3.4,0.209,0.191,0,-179.9,180);

	this.instance_205 = new lib.煙火6("synched",0);
	this.instance_205.setTransform(20.1,3.4,0.241,0.221,120);

	this.instance_206 = new lib.煙火6("synched",0);
	this.instance_206.setTransform(20.1,3.4,0.38,0.349,60);

	this.instance_207 = new lib.煙火6("synched",0);
	this.instance_207.setTransform(20.1,3.4,0.317,0.291,90);

	this.instance_208 = new lib.煙火6("synched",0);
	this.instance_208.setTransform(20.1,3.4,0.288,0.272,120);

	this.instance_209 = new lib.煙火6("synched",0);
	this.instance_209.setTransform(20.1,3.4,0.308,0.308,150);

	this.instance_210 = new lib.煙火6("synched",0);
	this.instance_210.setTransform(20.1,3.4,0.441,0.441,180);

	this.instance_211 = new lib.煙火6("synched",0);
	this.instance_211.setTransform(20.1,3.4,0.371,0.371,-134.9);

	this.instance_212 = new lib.煙火6("synched",0);
	this.instance_212.setTransform(20.1,3.4,0.354,0.354,-74.9);

	this.instance_213 = new lib.煙火6("synched",0);
	this.instance_213.setTransform(20.1,3.4,0.416,0.416,-29.9);

	this.instance_214 = new lib.煙火6("synched",0);
	this.instance_214.setTransform(20.1,2.7,0.343,0.315,135);

	this.instance_215 = new lib.煙火6("synched",0);
	this.instance_215.setTransform(20.1,2.7,0.343,0.315,105);

	this.instance_216 = new lib.煙火6("synched",0);
	this.instance_216.setTransform(20.1,2.7,0.298,0.274,45);

	this.instance_217 = new lib.煙火6("synched",0);
	this.instance_217.setTransform(20.1,2.7,0.319,0.293,-14.9);

	this.instance_218 = new lib.煙火6("synched",0);
	this.instance_218.setTransform(20.1,2.7,0.319,0.293,-14.9);

	this.instance_219 = new lib.煙火6("synched",0);
	this.instance_219.setTransform(20.1,2.7,0.29,0.267,-89.9);

	this.instance_220 = new lib.煙火6("synched",0);
	this.instance_220.setTransform(20.1,2.7,0.335,0.308,-149.9);

	this.instance_221 = new lib.煙火6("synched",0);
	this.instance_221.setTransform(20.1,2.7,0.529,0.486,150);

	this.instance_222 = new lib.煙火6("synched",0);
	this.instance_222.setTransform(20.1,2.7,0.441,0.405,-179.9);

	this.instance_223 = new lib.煙火6("synched",0);
	this.instance_223.setTransform(20.1,2.7,0.401,0.379,-149.9);

	this.instance_224 = new lib.煙火6("synched",0);
	this.instance_224.setTransform(20.1,2.7,0.429,0.429,-119.9);

	this.instance_225 = new lib.煙火6("synched",0);
	this.instance_225.setTransform(20.1,2.7,0.614,0.614,-89.9);

	this.instance_226 = new lib.煙火6("synched",0);
	this.instance_226.setTransform(20.1,2.7,0.517,0.517,-44.9);

	this.instance_227 = new lib.煙火6("synched",0);
	this.instance_227.setTransform(20.2,2.7,0.493,0.493,15);

	this.instance_228 = new lib.煙火6("synched",0);
	this.instance_228.setTransform(20.2,2.7,0.579,0.579,60);

	this.instance_229 = new lib.煙火6("synched",0);
	this.instance_229.setTransform(20.1,2.7,0.413,0.379,75);

	this.instance_230 = new lib.煙火6("synched",0);
	this.instance_230.setTransform(20.1,2.7,0.413,0.379,45);

	this.instance_231 = new lib.煙火6("synched",0);
	this.instance_231.setTransform(20.1,2.7,0.359,0.329,-14.9);

	this.instance_232 = new lib.煙火6("synched",0);
	this.instance_232.setTransform(20.1,2.7,0.384,0.353,-74.9);

	this.instance_233 = new lib.煙火6("synched",0);
	this.instance_233.setTransform(20.1,2.7,0.384,0.353,-74.9);

	this.instance_234 = new lib.煙火6("synched",0);
	this.instance_234.setTransform(20.1,2.7,0.349,0.321,-149.9);

	this.instance_235 = new lib.煙火6("synched",0);
	this.instance_235.setTransform(20.1,2.7,0.403,0.37,150);

	this.instance_236 = new lib.煙火6("synched",0);
	this.instance_236.setTransform(20.1,2.7,0.637,0.584,90);

	this.instance_237 = new lib.煙火6("synched",0);
	this.instance_237.setTransform(20.1,2.7,0.531,0.487,120);

	this.instance_238 = new lib.煙火6("synched",0);
	this.instance_238.setTransform(20.1,2.7,0.482,0.456,150);

	this.instance_239 = new lib.煙火6("synched",0);
	this.instance_239.setTransform(20.1,2.7,0.517,0.517,-179.9);

	this.instance_240 = new lib.煙火6("synched",0);
	this.instance_240.setTransform(20.1,2.7,0.738,0.738,-149.9);

	this.instance_241 = new lib.煙火6("synched",0);
	this.instance_241.setTransform(20.1,2.7,0.622,0.622,-104.9);

	this.instance_242 = new lib.煙火6("synched",0);
	this.instance_242.setTransform(20.1,2.6,0.593,0.593,-44.9);

	this.instance_243 = new lib.煙火6("synched",0);
	this.instance_243.setTransform(20.1,2.6,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_183,p:{y:56.4,x:19.8}}]},8).to({state:[{t:this.instance_183,p:{y:50.4,x:19.8}}]},1).to({state:[{t:this.instance_183,p:{y:44.5,x:19.9}}]},1).to({state:[{t:this.instance_183,p:{y:38.5,x:19.9}}]},1).to({state:[{t:this.instance_183,p:{y:32.5,x:20}}]},1).to({state:[{t:this.instance_183,p:{y:26.5,x:20}}]},1).to({state:[{t:this.instance_183,p:{y:20.6,x:20}}]},1).to({state:[{t:this.instance_183,p:{y:14.6,x:20.1}}]},1).to({state:[{t:this.instance_183,p:{y:8.6,x:20.1}}]},1).to({state:[{t:this.instance_183,p:{y:2.7,x:20.2}}]},1).to({state:[{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184}]},1).to({state:[]},24).wait(1));

	// Layer 1
	this.instance_244 = new lib.煙火7("synched",0);
	this.instance_244.setTransform(-42.5,45,0.467,0.467);

	this.instance_245 = new lib.煙火6("synched",0);
	this.instance_245.setTransform(-42.2,-7.9,0.205,0.188,105);

	this.instance_246 = new lib.煙火6("synched",0);
	this.instance_246.setTransform(-42.2,-7.9,0.205,0.188,75);

	this.instance_247 = new lib.煙火6("synched",0);
	this.instance_247.setTransform(-42.2,-7.9,0.178,0.163,15);

	this.instance_248 = new lib.煙火6("synched",0);
	this.instance_248.setTransform(-42.2,-7.9,0.191,0.175,-44.9);

	this.instance_249 = new lib.煙火6("synched",0);
	this.instance_249.setTransform(-42.2,-7.9,0.191,0.175,-44.9);

	this.instance_250 = new lib.煙火6("synched",0);
	this.instance_250.setTransform(-42.2,-7.9,0.173,0.159,-119.9);

	this.instance_251 = new lib.煙火6("synched",0);
	this.instance_251.setTransform(-42.2,-7.9,0.2,0.184,180);

	this.instance_252 = new lib.煙火6("synched",0);
	this.instance_252.setTransform(-42.2,-7.9,0.316,0.29,120);

	this.instance_253 = new lib.煙火6("synched",0);
	this.instance_253.setTransform(-42.2,-7.9,0.263,0.241,150);

	this.instance_254 = new lib.煙火6("synched",0);
	this.instance_254.setTransform(-42.2,-7.9,0.239,0.226,0,-179.9,180);

	this.instance_255 = new lib.煙火6("synched",0);
	this.instance_255.setTransform(-42.2,-7.9,0.256,0.256,-149.9);

	this.instance_256 = new lib.煙火6("synched",0);
	this.instance_256.setTransform(-42.2,-7.9,0.366,0.366,-119.9);

	this.instance_257 = new lib.煙火6("synched",0);
	this.instance_257.setTransform(-42.2,-7.9,0.309,0.309,-74.9);

	this.instance_258 = new lib.煙火6("synched",0);
	this.instance_258.setTransform(-42.1,-8,0.294,0.294,-14.9);

	this.instance_259 = new lib.煙火6("synched",0);
	this.instance_259.setTransform(-42.1,-8,0.346,0.346,30);

	this.instance_260 = new lib.煙火6("synched",0);
	this.instance_260.setTransform(-42.2,-7.9,0.246,0.226,45);

	this.instance_261 = new lib.煙火6("synched",0);
	this.instance_261.setTransform(-42.2,-7.9,0.246,0.226,15);

	this.instance_262 = new lib.煙火6("synched",0);
	this.instance_262.setTransform(-42.2,-7.9,0.214,0.196,-44.9);

	this.instance_263 = new lib.煙火6("synched",0);
	this.instance_263.setTransform(-42.2,-7.9,0.229,0.211,-104.9);

	this.instance_264 = new lib.煙火6("synched",0);
	this.instance_264.setTransform(-42.2,-7.9,0.229,0.211,-104.9);

	this.instance_265 = new lib.煙火6("synched",0);
	this.instance_265.setTransform(-42.2,-7.9,0.209,0.191,0,-179.9,180);

	this.instance_266 = new lib.煙火6("synched",0);
	this.instance_266.setTransform(-42.2,-7.9,0.241,0.221,120);

	this.instance_267 = new lib.煙火6("synched",0);
	this.instance_267.setTransform(-42.2,-7.9,0.38,0.349,60);

	this.instance_268 = new lib.煙火6("synched",0);
	this.instance_268.setTransform(-42.2,-7.9,0.317,0.291,90);

	this.instance_269 = new lib.煙火6("synched",0);
	this.instance_269.setTransform(-42.2,-7.9,0.288,0.272,120);

	this.instance_270 = new lib.煙火6("synched",0);
	this.instance_270.setTransform(-42.2,-7.9,0.308,0.308,150);

	this.instance_271 = new lib.煙火6("synched",0);
	this.instance_271.setTransform(-42.2,-7.9,0.441,0.441,180);

	this.instance_272 = new lib.煙火6("synched",0);
	this.instance_272.setTransform(-42.2,-7.9,0.371,0.371,-134.9);

	this.instance_273 = new lib.煙火6("synched",0);
	this.instance_273.setTransform(-42.2,-7.9,0.354,0.354,-74.9);

	this.instance_274 = new lib.煙火6("synched",0);
	this.instance_274.setTransform(-42.2,-7.9,0.416,0.416,-29.9);

	this.instance_275 = new lib.煙火6("synched",0);
	this.instance_275.setTransform(-42.2,-8.7,0.343,0.315,135);

	this.instance_276 = new lib.煙火6("synched",0);
	this.instance_276.setTransform(-42.2,-8.7,0.343,0.315,105);

	this.instance_277 = new lib.煙火6("synched",0);
	this.instance_277.setTransform(-42.2,-8.7,0.298,0.274,45);

	this.instance_278 = new lib.煙火6("synched",0);
	this.instance_278.setTransform(-42.2,-8.7,0.319,0.293,-14.9);

	this.instance_279 = new lib.煙火6("synched",0);
	this.instance_279.setTransform(-42.2,-8.7,0.319,0.293,-14.9);

	this.instance_280 = new lib.煙火6("synched",0);
	this.instance_280.setTransform(-42.2,-8.7,0.29,0.267,-89.9);

	this.instance_281 = new lib.煙火6("synched",0);
	this.instance_281.setTransform(-42.2,-8.7,0.335,0.308,-149.9);

	this.instance_282 = new lib.煙火6("synched",0);
	this.instance_282.setTransform(-42.2,-8.7,0.529,0.486,150);

	this.instance_283 = new lib.煙火6("synched",0);
	this.instance_283.setTransform(-42.2,-8.7,0.441,0.405,-179.9);

	this.instance_284 = new lib.煙火6("synched",0);
	this.instance_284.setTransform(-42.2,-8.7,0.401,0.379,-149.9);

	this.instance_285 = new lib.煙火6("synched",0);
	this.instance_285.setTransform(-42.2,-8.7,0.429,0.429,-119.9);

	this.instance_286 = new lib.煙火6("synched",0);
	this.instance_286.setTransform(-42.2,-8.7,0.614,0.614,-89.9);

	this.instance_287 = new lib.煙火6("synched",0);
	this.instance_287.setTransform(-42.2,-8.7,0.517,0.517,-44.9);

	this.instance_288 = new lib.煙火6("synched",0);
	this.instance_288.setTransform(-42.1,-8.7,0.493,0.493,15);

	this.instance_289 = new lib.煙火6("synched",0);
	this.instance_289.setTransform(-42.1,-8.7,0.579,0.579,60);

	this.instance_290 = new lib.煙火6("synched",0);
	this.instance_290.setTransform(-42.2,-8.7,0.413,0.379,75);

	this.instance_291 = new lib.煙火6("synched",0);
	this.instance_291.setTransform(-42.2,-8.7,0.413,0.379,45);

	this.instance_292 = new lib.煙火6("synched",0);
	this.instance_292.setTransform(-42.2,-8.7,0.359,0.329,-14.9);

	this.instance_293 = new lib.煙火6("synched",0);
	this.instance_293.setTransform(-42.2,-8.7,0.384,0.353,-74.9);

	this.instance_294 = new lib.煙火6("synched",0);
	this.instance_294.setTransform(-42.2,-8.7,0.384,0.353,-74.9);

	this.instance_295 = new lib.煙火6("synched",0);
	this.instance_295.setTransform(-42.2,-8.7,0.349,0.321,-149.9);

	this.instance_296 = new lib.煙火6("synched",0);
	this.instance_296.setTransform(-42.2,-8.7,0.403,0.37,150);

	this.instance_297 = new lib.煙火6("synched",0);
	this.instance_297.setTransform(-42.2,-8.7,0.637,0.584,90);

	this.instance_298 = new lib.煙火6("synched",0);
	this.instance_298.setTransform(-42.2,-8.7,0.531,0.487,120);

	this.instance_299 = new lib.煙火6("synched",0);
	this.instance_299.setTransform(-42.2,-8.7,0.482,0.456,150);

	this.instance_300 = new lib.煙火6("synched",0);
	this.instance_300.setTransform(-42.2,-8.7,0.517,0.517,-179.9);

	this.instance_301 = new lib.煙火6("synched",0);
	this.instance_301.setTransform(-42.2,-8.7,0.738,0.738,-149.9);

	this.instance_302 = new lib.煙火6("synched",0);
	this.instance_302.setTransform(-42.2,-8.7,0.622,0.622,-104.9);

	this.instance_303 = new lib.煙火6("synched",0);
	this.instance_303.setTransform(-42.2,-8.7,0.593,0.593,-44.9);

	this.instance_304 = new lib.煙火6("synched",0);
	this.instance_304.setTransform(-42.2,-8.7,0.697,0.697);

	this.rest = new lib.重播鈕();
	this.rest.setTransform(-1.5,29.7,0.296,0.296);
	new cjs.ButtonHelper(this.rest, 0, 1, 2, false, new lib.重播鈕(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_244,p:{x:-42.5,y:45}}]},4).to({state:[{t:this.instance_244,p:{x:-42.4,y:39}}]},1).to({state:[{t:this.instance_244,p:{x:-42.4,y:33.1}}]},1).to({state:[{t:this.instance_244,p:{x:-42.3,y:27.1}}]},1).to({state:[{t:this.instance_244,p:{x:-42.3,y:21.1}}]},1).to({state:[{t:this.instance_244,p:{x:-42.3,y:15.1}}]},1).to({state:[{t:this.instance_244,p:{x:-42.2,y:9.2}}]},1).to({state:[{t:this.instance_244,p:{x:-42.2,y:3.2}}]},1).to({state:[{t:this.instance_244,p:{x:-42.1,y:-2.7}}]},1).to({state:[{t:this.instance_244,p:{x:-42.1,y:-8.7}}]},1).to({state:[{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245}]},1).to({state:[]},24).to({state:[{t:this.rest}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,48.2,2.8,2.8);


(lib.彩球鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.彩球動();
	this.instance.setTransform(25.5,32,1,1,0,0,0,25.5,32);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkxFSIAAqjIJjAAIAAKjg");
	this.shape.setTransform(25.8,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,65.1);


(lib.男做答6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img11();
	this.instance.setTransform(140,196.8,0.775,0.775);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBaIAAhMIhMAAIAAgbIBMAAIAAhMIAbAAIAABMIBMAAIAAAbIhMAAIAABMg");
	this.shape.setTransform(118.3,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(24.3,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape_1.setTransform(144.9,159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_2.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(3,1,1).p("APEItI+HAAIAAxZIeHAAg");
	this.shape_3.setTransform(109.5,215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_4.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_3 = new lib.西瓜弟弟做答();
	this.instance_3.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{mode:"single",startPosition:14}},{t:this.instance_2}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263.2);


(lib.男做答5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img11();
	this.instance.setTransform(140,196.8,0.775,0.775);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(118.3,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(24.3,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape_1.setTransform(144.9,159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_2.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(3,1,1).p("APEosIAARZI+HAAIAAxZg");
	this.shape_3.setTransform(109.5,215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_4.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.instance_3 = new lib.西瓜弟弟做答();
	this.instance_3.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{mode:"single",startPosition:14}},{t:this.instance_2}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263.2);


(lib.男做答4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img9();
	this.instance.setTransform(75.5,179.8,1.151,1.151);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape.setTransform(144.9,159.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_1.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(3,1,1).p("APEItI+HAAIAAxZIeHAAg");
	this.shape_2.setTransform(109.5,215.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_3.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_1 = new lib.粉紅桌();
	this.instance_1.setTransform(114.7,233.4,0.947,1.103,0,0,0,114.3,48.6);

	this.instance_2 = new lib.西瓜弟弟做答();
	this.instance_2.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{mode:"independent",startPosition:undefined}},{t:this.instance_1}]}).to({state:[{t:this.instance_2,p:{mode:"single",startPosition:14}},{t:this.instance_1}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263);


(lib.男做答3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// 圖層 3
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(108,219.7);

	this.instance = new lib.img5();
	this.instance.setTransform(120.3,198.3,0.895,0.895);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(17.6,198.3,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape_1.setTransform(144.9,159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_2.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(3,1,1).p("APEItI+HAAIAAxZIeHAAg");
	this.shape_3.setTransform(109.5,215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_4.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.7,233.4,0.947,1.103,0,0,0,114.3,48.6);

	this.instance_3 = new lib.西瓜弟弟做答();
	this.instance_3.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{mode:"single",startPosition:14}},{t:this.instance_2}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263);


(lib.男做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.img3();
	this.instance.setTransform(114.8,197.5,0.827,0.907);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBaIAAhMIhLAAIAAgbIBLAAIAAhMIAdAAIAABMIBLAAIAAAbIhLAAIAABMg");
	this.shape.setTransform(105.8,218.9);

	this.instance_1 = new lib.img4();
	this.instance_1.setTransform(15.4,197.5,0.895,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape_1.setTransform(144.9,159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_2.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(3,1,1).p("APEosIAARZI+HAAIAAxZg");
	this.shape_3.setTransform(109.5,215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_4.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.7,233.4,0.947,1.103,0,0,0,114.3,48.6);

	this.instance_3 = new lib.西瓜弟弟做答();
	this.instance_3.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{mode:"single",startPosition:14}},{t:this.instance_2}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263);


(lib.男做答1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.text = new cjs.Text("2.", "25px DFLiHei-Bd", "#990000");
	this.text.lineHeight = 27;
	this.text.setTransform(21.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},14).wait(1));

	// 圖層 2
	this.instance = new lib.手複製();
	this.instance.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_1 = new lib.手複製();
	this.instance_1.setTransform(71.5,142.4,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.text_1 = new cjs.Text("列印品質越差", "28px DFLiHei-Bd", "#990000");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(25.5,192.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("AvDItIAAxZIeHAAIAARZg");
	this.shape.setTransform(109.5,215.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_1.setTransform(109.5,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.instance_1},{t:this.instance}]},14).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.instance_3 = new lib.西瓜弟弟做答();
	this.instance_3.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:107}},{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{x:110.1}},{t:this.instance_2}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263.3);


(lib.題目 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("可按？", "bold 48px Microsoft JhengHei", "#FFFF00");
	this.text.lineHeight = 53;
	this.text.lineWidth = 508;
	this.text.setTransform(-21.7,-217.6);

	this.text_1 = new cjs.Text("想切換各種中文輸入法", "bold 48px Microsoft JhengHei", "#FFFF00");
	this.text_1.lineHeight = 53;
	this.text_1.lineWidth = 508;
	this.text_1.setTransform(-21.7,-266.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{text:"想切換各種中文輸入法",lineWidth:508}},{t:this.text,p:{y:-217.6,text:"可按？",lineWidth:508,x:-21.7}}]},1).to({state:[{t:this.text_1,p:{text:"用什麼快速鍵可開啟標",lineWidth:508}},{t:this.text,p:{y:-214.7,text:"點符號小鍵盤？",lineWidth:508,x:-21.7}}]},1).to({state:[{t:this.text_1,p:{text:"想揀選【同音異字】，",lineWidth:515}},{t:this.text,p:{y:-209.8,text:"要按？",lineWidth:500,x:-21.7}}]},1).to({state:[{t:this.text,p:{y:-266.4,text:"【複製】的快速鍵是？",lineWidth:500,x:-20.4}}]},1).to({state:[{t:this.text,p:{y:-266.4,text:"【貼上】的快速鍵是？",lineWidth:500,x:-20.4}}]},1).to({state:[]},1).wait(1));

	// 圖層 2
	this.instance = new lib.男2做答1("single",0);
	this.instance.setTransform(365,-82.8,0.9,0.9);

	this.instance_1 = new lib.男做答1("single",0);
	this.instance_1.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_2 = new lib.女做答1("single",0);
	this.instance_2.setTransform(-92.4,-81.1,0.9,0.9);

	this.instance_3 = new lib.男2做答2("single",14);
	this.instance_3.setTransform(364.9,-82.6,0.9,0.9);

	this.instance_4 = new lib.男做答2("single",14);
	this.instance_4.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_5 = new lib.女做答2("single",15);
	this.instance_5.setTransform(-92.4,-82.9,0.9,0.9);

	this.instance_6 = new lib.男2做答3("single",14);
	this.instance_6.setTransform(364.9,-82.6,0.9,0.9);

	this.instance_7 = new lib.男做答3("single",14);
	this.instance_7.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_8 = new lib.女做答3("single",15);
	this.instance_8.setTransform(-92.4,-82.9,0.9,0.9);

	this.instance_9 = new lib.男2做答4("single",14);
	this.instance_9.setTransform(364.9,-82.6,0.9,0.9);

	this.instance_10 = new lib.男做答4("single",14);
	this.instance_10.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_11 = new lib.女做答4("single",15);
	this.instance_11.setTransform(-92.4,-82.9,0.9,0.9);

	this.instance_12 = new lib.男2做答5("single",14);
	this.instance_12.setTransform(364.9,-82.6,0.9,0.9);

	this.instance_13 = new lib.男做答5("single",14);
	this.instance_13.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_14 = new lib.女做答5("single",15);
	this.instance_14.setTransform(-92.4,-82.9,0.9,0.9);

	this.instance_15 = new lib.男2做答6("single",14);
	this.instance_15.setTransform(364.9,-82.6,0.9,0.9);

	this.instance_16 = new lib.男做答6("single",14);
	this.instance_16.setTransform(135.8,-82.6,0.9,0.9);

	this.instance_17 = new lib.女做答6("single",15);
	this.instance_17.setTransform(-92.4,-82.9,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:-81.1}},{t:this.instance_1},{t:this.instance,p:{x:365,y:-82.8}}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},1).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.instance_2,p:{y:-82.9}},{t:this.instance_1},{t:this.instance,p:{x:364.9,y:-82.6}}]},1).wait(1));

	// 圖層 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AZdBWQkigkAAgyQAAgxEigkQEjgkGaAAQGbAAEjAkQA/AIAxAIQCzAfgBAmQABAoizAeQgxAIg/AIQkjAkmbgBQmaABkjgkgArBBWQkjgkAAgyQAAgxEjgkQEigkGbAAQGZAAEiAkQBAAIAxAIQCyAfAAAmQAAAniyAfQgxAIhAAIQkiAkmZgBQmbABkigkgEgu/ABNQk6ghAAgvQAAgwE6ghQE7giG9ABQG+gBE6AiQE6AhABAwQgBAvk6AhQk6Ahm+AAQm9AAk7ghg");
	this.shape.setTransform(237.2,175.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-71.3,664.6,259);


(lib.摩天輪轉mod = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.圓輪球車播放();
	this.instance.setTransform(58.6,57.5,0.334,0.334);

	this.instance_1 = new lib.圓輪木架播放();
	this.instance_1.setTransform(56.5,50,0.334,0.334);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D57000").s().p("AhdGqQgIgCgEgKQgEgJADgLIDAseQACgLAHgGQAHgFAGABIjINTg");
	this.shape.setTransform(45.8,91.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF4301").s().p("AhtGqIDJtTIADAAQAJACAEAKQADAJgCALIjAMfQgDAKgHAGQgGAEgHAAIgDAAg");
	this.shape_1.setTransform(47.4,91.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF4301").s().p("ABfGqIjLtTQAHgCAIAGQAHAGADALIDAMeQACALgEAJQgEAKgIACg");
	this.shape_2.setTransform(67.1,91.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D57000").s().p("ABeGmQgIgGgCgKIjAsfQgDgLAEgJQAEgKAJgCIABAAIDLNTIgDAAQgHAAgGgEg");
	this.shape_3.setTransform(65.5,91.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.2,110.5,135);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
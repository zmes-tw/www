(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// LOGO
	this.musBtn = new lib.music_btn();
	this.musBtn.setTransform(1190.4,689.6,0.6,0.6,0,0,0,43.9,43.9);

	this.edulogo = new lib.edulogo();
	this.edulogo.setTransform(1250.7,690.6,0.75,0.75);
	new cjs.ButtonHelper(this.edulogo, 0, 1, 2, false, new lib.edulogo(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edulogo},{t:this.musBtn}]}).wait(4));

	// obj
	this.start_btn = new lib.登入();
	this.start_btn.setTransform(612.1,465,2.912,2.912);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.登入(), 3);

	this.instance = new lib.titlebg();
	this.instance.setTransform(305,82.7);

	this.text = new cjs.Text("v2.0", "9px Microsoft JhengHei");
	this.text.textAlign = "right";
	this.text.lineHeight = 11;
	this.text.setTransform(1276,0);

	this.instance_1 = new lib.草莓妹妹開頭();
	this.instance_1.setTransform(215.5,591.6,1,1,0,0,180,-12.2,66.2);

	this.instance_2 = new lib.男2開頭();
	this.instance_2.setTransform(325.5,560.2,1,1,0,0,180,15.5,18.7);

	this.instance_3 = new lib.男A開頭();
	this.instance_3.setTransform(915.4,369.3,2.11,2.11,0,0,0,67.7,107.9);

	this.yes = new lib.對();
	this.yes.setTransform(518,390.6,1.6,1.6);

	this.btn0 = new lib._1草莓鈕();
	this.btn0.setTransform(188.1,587.5,1.286,1.013);
	new cjs.ButtonHelper(this.btn0, 0, 1, 2, false, new lib._1草莓鈕(), 3);

	this.btn2 = new lib._2西瓜鈕();
	this.btn2.setTransform(867.3,584.6,1.286,1.013);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib._2西瓜鈕(), 3);

	this.btn1 = new lib._2西瓜鈕();
	this.btn1.setTransform(521.9,584.6,1.286,1.013);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib._2西瓜鈕(), 3);

	this.no1 = new lib.題目();
	this.no1.setTransform(204,137.7);

	this.c2 = new lib.男2做答2();
	this.c2.setTransform(844.3,377.6,1.356,1.115);

	this.c1 = new lib.男做答2();
	this.c1.setTransform(499.1,377.6,1.356,1.115);

	this.c0 = new lib.女做答2();
	this.c0.setTransform(155.2,377.3,1.356,1.115);

	this.star = new lib.星星燈號組正式();
	this.star.setTransform(511.6,66.6,1,1,0,0,0,5.7,4);

	this.instance_4 = new lib.小明話框();
	this.instance_4.setTransform(662.5,300.8,1,1,0,0,180);

	this.instance_5 = new lib.粉紅桌複製3();
	this.instance_5.setTransform(1009.2,588.6,0.842,1.447,0,0,0,114.4,48.7);

	this.instance_6 = new lib.粉紅桌複製3();
	this.instance_6.setTransform(309.9,580.7,0.788,1.216,0,0,0,114.5,48.6);

	this.instance_7 = new lib.粉紅桌複製3();
	this.instance_7.setTransform(657.2,588.6,0.842,1.447,0,0,0,114.4,48.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("EAmYABrQm2gsAAg/QAAg9G2gtQG2gsJqAAQCXAACMADQGyAIFMAhQBfAKBKALQENAmAAAvQAAAxkNAmQhKAKhfAKQlMAhmyAIQiMADiXAAQpqAAm2gsgAwnBrQm2gsAAg/QAAg9G2gtQG1gsJsAAQJpAAG1AsQBfAKBLALQEMAmAAAvQAAAxkMAmQhLAKhfAKQm1AsppAAQpsAAm1gsgEg1ZACJQqLgBnQgoQnagqAAg5QAAg8HagpQHQgpKLgBIAeAAQKfAAHbAqQHaApgBA8QABA5naAqQnbApqfAAIgeAAg");
	this.shape.setTransform(651.9,697.3);

	this.instance_8 = new lib.草莓妹妹失敗();
	this.instance_8.setTransform(260.8,545.5,1.614,1.614,0,0,0,-11.1,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("Egm5AJ9QBphSADiDQgtAsg3AlIgUgaQA/gqA+g6IAAj6IAdAAIAAEEQAABjgeA/QgeA/g6AugAojG3QgrCBiOBYIgUgbQBAglAtg0QAug0AQgxQASgxgBhXIAgAAQgBAOAAASQAAA/ATArQAUAsAoAvQApAwBQAzIgTAbQiZhkgqh3gA9+KPIAAhVIiLAAIAAgdICLAAIAAguIhwAAIAAjIID8AAIAADIIhuAAIAAAuIB+AAIAAAdIh+AAIAABVgA9gHSIBQAAIAAg6IhQAAgA/PHSIBRAAIAAg6IhRAAgA9gF6IBQAAIAAg2IhQAAgA/PF6IBRAAIAAg2IhRAAgEgpMAKOIgKgdIAvAAQAHAAAFgFQAHgGgBgFIAAioQgjAPgkANIgLgeQAygRAggNIAAiLIhLAAIAAggIBLAAIAAhuIAgAAIAABuIA6AAIAAAgIg6AAIAAB+QAcgMAegOIAIAfQgkARgeALIAACwQAAAUgLAPQgKAPglAAQgPAAgOgBgA6DIlQg2A5gvAiIgWgWQBEgxAwg5QgNhBgEhxIg7AEIgCgdQAegCAdgEIgCisIAfAAIAACpQAmgCBTgJIADAeIh5ALQADBmAJAuQAqg5AbhFIAaAOQgpBbgwA/QAGAfAJAZQAJAaAJAKQAIALAFAAQAEAAADgDQAEgCAKgbQAKgaAFgmIAbAVQgMA7gPAYQgOAYgXAAQgpAAgchqgAAsKIQhDAAAAhEIAAmzIECAAIAAEHIjlAAIAACqQAAAoAoAAICVAAQApAAAAhWIAeAKQgCA3gPAaQgQAZg1AAgAB4F6IBUAAIAAjKIhUAAgAAGF6IBSAAIAAjKIhSAAgEgjkAJ9QgTgKAAghIAAnRIAfAAIAACgQAwggAvgyIAWAaQgvAvhGAzIAAAyQBJAsAyAvIgUAaQgwgtg3glIAAC0QAAAUAtAAQAdAAALgOQAKgNADg6IAfANQgDA8gSAWQgSAVgfAAQg2AAgRgKgAI/JvQgKgLAAgOQAAgOALgKQAKgKAOAAQAOAAAKAKQAKAKAAAOQAAAOgKALQgKAKgOAAQgPAAgKgKgAjvJaIAAmtICWAAIAAGgIgeAAIAAgrIhYAAIAAA4gAjPIDIBYAAIAAk4IhYAAgAJCHyIgFlGIAzAAIgFFGgAtaHVIAAgeIDEAAIAAAegAnVGfQA2hCAfhYIjgAAQgkBMgnAoIgXgWQBFhKApiVIAgAIQgPAygQAnID2AAIAAAgQAAAFgNAgQgPAggLAWQgMAVgNAVQgPAVgQAUgA2wGOIAAghIIIAAIAAAhgEgm4ADWIAfgPQAmBDARA4IgeAOQgWhAgig6gA9cEDIAAh0IB5AAIAAB0gA8/DoIA/AAIAAg7Ig/AAgA/7EDIAAh0IB5AAIAAB0gA/eDoIA/AAIAAg7Ig/AAgA5jCvIAZgPQAcAeAcAzIgaARQgcg1gbgegAtMD2IAAggICmAAIAAAggAKykAIAYgMQASAgAUATQAZgVAXgfIAWAQQgRAYgiAfQAnAgA1AUIgPAZQhsgqgyhdgAU6ieQgcgjgUgwQgxAqhNAhIgVgbQBWgiAygtQgWhagDhgIiOAAIAABpQArgFBHgXIAAAhQg5AQg5AMIAACZQAAAQgMALQgLALgWABIhPAAIgJghQAlACAwAAQAQAAAAgPIAAiLQhOAPg0AHIgIggQAqgDBggSIAAhyIiOAAIAAgfICOAAIAAheQheAPgZACIgLgeQCcgQBmgjIAKAcQgxAQg5ANIAABlICNAAIgBg7QAAg6ACgwIAgAAQgDAqAAA4IABBDICzAAIAAAfIixAAQACBRARBNQAqgqAohTIAbARQg0BfguAxQAOArAZAhQAYAhALAAQAGAAAGgHQAEgHANggQALghAHgiIAcARQgIAmgPAmQgPAmgNAHQgMAHgNAAQgYAAgbgjgAeKh+IgNggQApACAlAAQAIAAAFgFQAGgGAAgJIAAjXIh6AAIAAj3ICZAAIAAHTQAAAug6AAIg5gBgAeFmkIBZAAIAAhRIhZAAgAeFoTIBZAAIAAhMIhZAAgAI1iaQAKgIAAgNIAAgqQgeARgjAOIgSgaQBUgZA0g0Ih5AAIAAgcIBlAAIAAggIhTAAIAAgbIBTAAIAAgfIhcAAIAAgZIBcAAIAAgdIAeAAIAAAdIBjAAIAAgdIAeAAIAAAdIBUAAIAAAZIhUAAIAAAfIBFAAIAAAbIhFAAIAAAgIBeAAIAAAcIjFAAQgeAkgfATIAABHQAigHAygRIAAAdQhDAWgvAKgAJ+k9IBjAAIAAggIhjAAgAJ+l4IBjAAIAAgfIhjAAgEglrgB/IgOghQAgADAZAAQAeAAAAgWIAAk/IAfAAIAAE+QAAAcgOANQgOANgtAAQgQAAgPgBgEgoPgB+IAAloQghA4gkAsIgRghQBGhTA9iZIAdAMIgaA8IgSAkIAAGlgArCiCIgKggQARADBJAAQAHAAAFgGQAFgGAAgGIAAkNQBwhLBYhWImqAAIAAggIHZAAIAAAgQhrBrhrBGIAAEAQAAAbgQAKQgQAKguAAQgZAAgbgDgEAm0gCAIgNghQAUACAdAAQAiAAAHgEQAHgEAAgHIAAhqIlLAAIAACYIggAAIAAiYIhBAAIAAggIBBAAIAAjdIC0AAIAAhMIj2AAIAAgfIIMAAIAAAfIj2AAIAABMIC1AAIAADdIBCAAIAAAgIhCAAIAAByQAAAQgKALQgMAKgQABIguABIgegBgEAlxgE4ICXAAIAAhPIiXAAgEAi9gE4ICUAAIAAhPIiUAAgEAlxgGmICXAAIAAhPIiXAAgEAi9gGmICUAAIAAhPIiUAAgAvth/IAAgfIitAAIAAAfIgfAAIAAkGIDrAAIAAEGgAyai8ICtAAIAAhIIitAAgAyakiICtAAIAAhGIitAAgAaoiAIAAn+ICWAAIAAD3Ih2AAIAAEHgAbImmIBXAAIAAhPIhXAAgAbIoTIBXAAIAAhMIhXAAgAFiiAIAAjIICCAAIAAC6IgfAAIAAggIhFAAIAAAugAGAjLIBFAAIAAhgIhFAAgAZIiBIAAlKQgbA0gbAmIgSggQBGhlAoiZIAdAGQgFAcgPAsIgQArIAAGVgA5liCIAAgeIlAAAIAAAeIgfAAIAAiiIF+AAIAACigA+li9IFAAAIAAhKIlAAAgA2zinQAwgHAzgMIAAjCIhUAAIAAgdIBUAAIAAhDIg6AAIAAgVIgZAXIgVgYQBJg+A0hfIAfAKQgCAHgIAJQA0A1AZAiIgYAVQgmgzgfgeQghAygrAuICNAAIAAAeIg8AAIAABDIBPAAIAAAdIhPAAIAAC5QAtgJAogLIABAeQiFAihMANgAgXihQgKgKAAgOQAAgPAKgKQALgJAMAAQAOAAAKAJQAKAKAAAPQAAAOgKAKQgJAKgPAAQgNAAgKgKgEgjRgGLIAcgOQA4BjApBkIgeAOQgnhkg4hjgEgnPgDXQA3hPAnh1IAfAKQguCFg1BHgA2ilPIAcgKQAXBBAHA6IgcAIQgNhHgRgygA0WjxQARg6AIgwIAdAKQgNBDgOAlgAgTkeIgGlGIAyAAIgGFGgA59l2IAAAaIkQAAIAAgdQgzAZg7AQIgUgcQCkgqBlhlIAgANQgFAIgDADQBhBVCUAjIgVAcQg8gQgzgXgA+Il6IEDAAQhDggg+g0Qg4AxhKAjgAFimDIAAgcICKAAIAAAcgEgnWgG3QBPheAmh3IAhAIQgJAagSAoID0AAQgMBDghBVIgdgMQAXgzANg5IjdAAQglBLgzA7gAzdm6IAAgcIBMAAIAAhVIg+AAIAAgdIA+AAIAAhDIAeAAIAABDIBfAAIAAhDIAeAAIAABDIBBAAIAAAdIhBAAIAABVIBPAAIAAAcgAxznWIBfAAIAAhVIhfAAgA6eoQIAfgOQAgAiANAbIgeAOQgWglgYgYgA+LoPIAegOQARATAPAkIgdAOQgMgegVgZgALBneIAAhPICFAAIAABPgALen3IBMAAIAAgcIhMAAgAIbneIAAhPICBAAIAABPgAI1n3IBMAAIAAgcIhMAAgAFineIAAgcICKAAIAAAcgEggJgIFQBSg6AhhQIAeALQgIAWgTAcICJAAIAAAeIifAAQghAogoAfgAUypjIAYgUQAxAtAeA1IgZASQgfg2gvgqgA8DoZQA5gxAbhIIAdALQgKAYgQAeICkAAIAAAdIi3AAQgXAegVARgAFWoyIAAgeIBKAAQgGgWgRggIAbgNQAOAbANAoIAzAAIAAAegAIJpIIAAgbICXAAQgGgQgMgRIAZgMQANAVAKAYICZAAIAAAbg");
	this.shape_1.setTransform(557.1,316.5);

	this.restart_btn = new lib.重考();
	this.restart_btn.setTransform(561.4,569.8,2.06,2.06);
	new cjs.ButtonHelper(this.restart_btn, 0, 1, 2, false, new lib.重考(), 3);

	this.instance_9 = new lib.下話框();
	this.instance_9.setTransform(557,415.6,2.01,2.01,0,0,0,155.9,117.8);

	this.instance_10 = new lib.黑影();
	this.instance_10.setTransform(640.1,-28.8,1,1,0,0,0,640.1,51.1);

	this.instance_11 = new lib.男2失敗();
	this.instance_11.setTransform(1041.9,547.3,1.631,1.631,0,0,0,19.5,-8.5);

	this.instance_12 = new lib.男A失敗();
	this.instance_12.setTransform(1061,696.6,1.631,1.631,0,0,0,89.8,130.3);

	this.backmain_btn = new lib.重播鈕();
	this.backmain_btn.setTransform(640.1,549.8,2,2);
	new cjs.ButtonHelper(this.backmain_btn, 0, 1, 2, false, new lib.重播鈕(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.text,p:{x:1276,y:0,text:"v2.0",font:"9px Microsoft JhengHei",color:"#000000",textAlign:"right",lineHeight:11,lineWidth:25}},{t:this.instance},{t:this.start_btn}]}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.star},{t:this.c0},{t:this.c1},{t:this.c2},{t:this.no1},{t:this.btn1},{t:this.btn2},{t:this.btn0},{t:this.yes}]},1).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.restart_btn},{t:this.shape_1},{t:this.instance_8}]},1).to({state:[{t:this.backmain_btn},{t:this.text,p:{x:638,y:347,text:"恭喜你全部答對!",font:"100px DFLiHei-Md",color:"#FFFF99",textAlign:"center",lineHeight:102,lineWidth:766}}]},1).wait(1));

	// cloud
	this.instance_13 = new lib.雲2();
	this.instance_13.setTransform(1206.6,403.9,1.598,1.858);
	this.instance_13.alpha = 0.422;

	this.instance_14 = new lib.雲1();
	this.instance_14.setTransform(141.9,400.4,2.413,1.681,0,180,0);
	this.instance_14.alpha = 0.371;

	this.instance_15 = new lib.雲3();
	this.instance_15.setTransform(32.4,243.9,1.377,1.076,180);
	this.instance_15.alpha = 0.66;

	this.instance_16 = new lib.雲3();
	this.instance_16.setTransform(1138.5,104.2,1.753,1.576,5.3);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.雲2();
	this.instance_17.setTransform(286.1,62.3,1.598,1.858);
	this.instance_17.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).to({state:[]},3).wait(1));

	// bg
	this.instance_18 = new lib.mainbg();

	this.instance_19 = new lib.gamebg();

	this.instance_20 = new lib.losebg();

	this.instance_21 = new lib.endbg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,0,1370.7,791.9);


// symbols:
(lib.endbg = function() {
	this.initialize(img.endbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.gamebg = function() {
	this.initialize(img.gamebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.losebg = function() {
	this.initialize(img.losebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.mainbg = function() {
	this.initialize(img.mainbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.titlebg = function() {
	this.initialize(img.titlebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,670,390);


(lib.題目 = function() {
	this.initialize();

	// txt
	this.txt = new cjs.Text("測試題目測試題目測試題目測試題目測試題目測試題目測試題目測試題目測試題目測試題目測試題目", "bold 60px Microsoft JhengHei", "#FFFF00");
	this.txt.lineHeight = 62;
	this.txt.lineWidth = 920;

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,924.2,254.1);


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


(lib.黑影 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-51,0,51.1).s().p("EhkAAH+IAAv7MDIBAAAIAAP7g");
	this.shape.setTransform(640.1,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-91.2,0,91.3).s().p("EhkAAOQIAA8fMDIBAAAIAAcfg");
	this.shape_1.setTransform(640.1,91.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-131.4,0,131.4).s().p("EhkAAUiMAAAgpDMDIBAAAMAAAApDg");
	this.shape_2.setTransform(640.1,149.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-171.5,0,171.6).s().p("EhkAAa0MAAAg1nMDIBAAAMAAAA1ng");
	this.shape_3.setTransform(640.1,207.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-211.7,0,211.8).s().p("EhkAAhGMAAAhCLMDIBAAAMAAABCLg");
	this.shape_4.setTransform(640.1,265.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.702)","rgba(1,1,1,0)"],[0,1],0,-251.8,0,252).s().p("EhkAAnYMAAAhOvMDIBAAAMAAABOvg");
	this.shape_5.setTransform(640.1,323.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.3,102.2);


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


(lib.登入 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AESBTQgFAIgMAAQgXAAAAgLQAAgOAKAAIALACQADAAACgIIAAgDIgCABQgFAAAAgFQAAgOgDgTIgBgCQAAgEAHAAQAFAAABAYIABgRQAAgJgHAAIglAAQgMAAAAgMIAAhPQAAgLALABIA+AAQAHAAAAAKQAAAKgHAAIgRAAIAAAGIALAAQAHAAAAAKQAAAKgHAAIgLAAIAAAGIANAAQABgFACgCQATgNASgcQAFgIAKAAQAIAAAFAHQAOAUAcAUQAFADAAAEQAAAFgDAEQgDAFgFAAIgFgBIAAAAQgKgGgIgHIgBADQgBAFgGAAIgmAAQgGAAgBgFQgNALgFAAQgEAAgBgCQAAAKgIAAIgKAAIAAAKIAEAAQARAAAAAUIAAALQgDAvgEADQASgOAGgaIgCAAQgNAAAAgPIAAgfQAAgOANABIAUAAQAOgBAAAOIAAAfQAAAPgMAAIAAACIAAAAIAAABIgBADQAPAOAAAHQAAAFgFADQgDADgFAAQgEAAgEgHIgBgDQgOAhgMgBQgLABgCgMgAEygEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgADmgJQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAIAKAAIAAgKIgMAAgADmglIAMAAIAAgGIgMAAgAFJhDIgLAPIAaAAIgJgLIgFgFIgBABgADmhCIAAADIAMAAIAAgGIgJAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABgAmGBVIAAifQAAgQASAAIAvAAQARAAAAAQIAAApQAAARgRAAIgqAAIAABlQAAAJgLAAQgMAAAAgJgAlvgmIAhAAQAFAAAAgEIAAgCIgmAAgAlvhBIAAACIAmAAIAAgCQAAgDgFgBIgdAAQgEABAAADgAA2BeQgFAAgEgEQgEgEAAgFQAAgEAEgEQALgKAHgLQAFgFAEgBQAFAAAEADQAFAEAAAFQAAAFgNAQQgMAPgGAAIgBAAgAFwBUIgEgGIgFgLQgOAbgJAAQgEAAgEgEQgEgDAAgFQAAgDADgDQAQgTAGgXQgNgCAAgNIAAgfQAAgOANAAIAVAAQANAAAAAOIAAAfQAAAPgNAAIAAABIgBADIAAABIAAADQAAAHAJANIALAOQACAEAAACQAAAFgEADQgDAEgFAAQgGAAgFgKgAFkgEIAAAPQAAADAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgPQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAACgABvBYQgHgQgHgLIgBgEQAAgDAEgFQAEgDAFAAQAEAAADAEIABACQAQAXAAAIQAAALgOAAQgGAAgCgGgAjABZQgEgFAAgFQAAgEAEgEQAPgMAMgPIgPgPQgKgIAAgGQAAgFACgEQAJgUAGgYIgLAAQgKAAAAgMQAAgMAKAAIAOAAIACgMQABgOAEgBQACgDAFAAQAOAAAAAJIgBACIgCATIAPAAQAMAAAAAMIgCATIAAAEIADgBIABAAQAPgdAIgdQACgHAIAAQAPAAAAALQAAANgTAnIAGgBIANgBIAVgDIgHgMQgGgLAAgDQAAgLAOAAQAGAAAHALQAGAJAKAUQAJATABAGQAAAJgOAAQgIABgDgHIgFgKIglAGIgCAAIgoAEQgEAAgCgBQgDAVgKAWQALALAGAIIAAgjQAAgUATAAIA9AAQATAAAAAUIAAAwQAAAUgTAAIg9AAQgTAAAAgSIAAgCQgFAHgIAAQgEAAgCgDIgLgNQgHAKgLALQgMALgFAAQgEAAgFgEgAheAeIAAAgQAAADAEAAIArAAQAEAAAAgDIAAggQAAgDgEAAIgrAAQgEAAAAADgAigAAIgEALQAAACAFADIAFAEQAKgXADghQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgGAAQgEAVgHASgAkKBPQAAgOAKAAIAEABIANADQAEgBAAgFIAAhPIgsAAQgRAAAAgRIAAgpQAAgQARAAIAyAAQARAAAAAQIAACMQAAAagWAAQggABAAgOgAkTgqQAAAEAEAAIAkAAIAAgGIgoAAgAkThBIAAACIAoAAIAAgCQAAgDgEgBIggAAQgEABAAADgAAHBYQgFgEAAgEQAAgDAFgKQAKgTAKghQADgHAHAAQAOAAAAAKQAAAFgHAWIgNAiQgGAMgIAAQgFAAgFgDgACIBOQAAgPAKAAIADABIAKACQAGAAAAgXIAAiBQAAgHALgBQALABAAAHIAACCQAAAegFAIQgEAIgOAAQgcAAAAgMgAlfBTQgFgDAAgFQAAgDADgDQAMgOACgLIgRAAQgJgBAAgKQAAgLAJAAIATAAIAAgNIgPAAQgKAAAAgJQAAgKAKAAIBnAAQAJAAAAAKQAAAJgJAAIgSAAIAAANIAWAAQAJAAAAALQAAAKgJABIgWAAIAAAeQAAAKgLAAQgLAAAAgKIAAgeIgbAAQgDAPgIAOQgIAPgHAAQgFAAgEgFgAk7AWIAaAAIAAgNIgaAAgADKBLIABgIQADgaAAgRQAAgIAIABQAHgBAAAIIAAALIgBAbIgBATQAAAFgHABQgKAAAAgMgADfBCIAAgBIAAgSIAAgFIgBgUQAAgGAHAAIAAAAQAGAAABAFIABATIAAABIAAAUQAAALgIAAQgGAAAAgGgADvA6QAAgXgCgNIgBgCQAAgFAIAAQAEAAACAPIABAbQAAAHgHAAQgFAAAAgGgACJAsIAAh3QAAgJALAAQALAAAAAJIAAB3QAAAJgLAAQgLAAAAgJgABGAtQgHgBgEgEQgFgEAAgHIAAhSQgDAKgLAAQgDgBgCgCIgNgPIgDgCIgJgKQgDgDAAgEQAAgEAEgEQAEgEAEAAQAFAAAOAOQAPAPABAEIAAgPQAAgOAOAAIAtAAQARABAAAPIAABkQAAAIgFAEQgFAFgDAAgABNAPQAAAHAJAAIAPAAQAGAAAAgHIAAgMIgeAAgABNgQIAeAAIAAgPIgeAAgABNg9IAAAJIAeAAIAAgJQAAgFgEgBIgXAAQgDABAAAFgAAegDIgUgQQgGgFAAgEQAAgFADgEQAEgEAEAAQAEAAARANQARANAAAFQAAAEgFAFQgEACgEAAQgDAAgHgEg");
	this.shape.setTransform(9.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AESBTQgFAIgMAAQgXAAAAgMQAAgMAKAAIALABQADAAACgIIAAgCIgCAAQgFAAAAgGQAAgOgDgSIgBgCQAAgEAHAAQAFAAABAYIABgRQAAgJgHABIglAAQgMAAAAgNIAAhPQAAgKALgBIA+AAQAHAAAAALQAAALgHgBIgRAAIAAAFIALAAQAHAAAAAKQAAALgHgBIgLAAIAAAHIANAAQABgGACgCQATgNASgbQAFgIAKAAQAIAAAFAIQAOATAcAUQAFADAAAFQAAAEgDAFQgDAEgFAAIgFgBIAAAAQgKgGgIgHIgBADQgBAFgGAAIgmAAQgGAAgBgGQgNAMgFAAQgEAAgBgCQAAAKgIAAIgKAAIAAAJIAEAAQARAAAAAWIAAAKQgDAvgEAEQASgQAGgZIgCAAQgNgBAAgOIAAgeQAAgOANgBIAUAAQAOABAAAOIAAAeQAAAOgMABIAAABIAAABIAAABIgBAEQAPANAAAHQAAAFgFADQgDADgFAAQgEAAgEgGIgBgEQgOAggMABQgLAAgCgMgAEygDIAAAPQAAACAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgPQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAADgADmgJQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIAKAAIAAgJIgMAAgADmglIAMAAIAAgHIgMAAgAFJhCIgLAOIAaAAIgJgMIgFgEIgBACgADmhCIAAACIAMAAIAAgFIgJAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABgAmGBWIAAigQAAgQASAAIAvAAQARAAAAAQIAAApQAAARgRAAIgqAAIAABmQAAAIgLABQgMgBAAgIgAlvgmIAhAAQAFAAAAgEIAAgCIgmAAgAlvhBIAAACIAmAAIAAgCQAAgEgFAAIgdAAQgEAAAAAEgAA2BeQgFAAgEgEQgEgFAAgEQAAgDAEgFQALgKAHgLQAFgGAEAAQAFABAEADQAFADAAAFQAAAFgNAQQgMAPgGAAIgBAAgAFwBVIgEgHIgFgKQgOAagJAAQgEAAgEgEQgEgEAAgEQAAgDADgDQAQgSAGgYQgNgDAAgMIAAgfQAAgOANAAIAVAAQANAAAAAOIAAAfQAAAOgNABIAAABIgBADIAAABIAAADQAAAHAJAMIALAQQACACAAADQAAAFgEADQgDAEgFAAQgGAAgFgJgAFkgDIAAAPQAAACAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgPQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAAAADgABvBYQgHgRgHgKIgBgDQAAgFAEgDQAEgEAFAAQAEAAADAEIABABQAQAYAAAJQAAAKgOAAQgGAAgCgGgAjABYQgEgEAAgFQAAgFAEgDQAPgLAMgQIgPgOQgKgJAAgGQAAgEACgFQAJgUAGgYIgLAAQgKAAAAgMQAAgMAKAAIAOAAIACgMQABgOAEgCQACgCAFAAQAOAAAAAJIgBACIgCATIAPAAQAMAAAAAMIgCAUIAAACIADAAIABAAQAPgdAIgdQACgGAIAAQAPgBAAALQAAAMgTAoIAGgBIANgBIAVgDIgHgMQgGgMAAgCQAAgLAOAAQAGAAAHAKQAGALAKATQAJATABAGQAAAKgOAAQgIgBgDgFIgFgLIglAFIgCABIgoAFQgEAAgCgCQgDAVgKAXQALAKAGAJIAAgkQAAgTATAAIA9AAQATAAAAATIAAAwQAAAUgTAAIg9AAQgTAAAAgTIAAgBQgFAHgIAAQgEAAgCgCIgLgOQgHALgLAKQgMALgFAAQgEAAgFgFgAheAfIAAAeQAAAEAEAAIArAAQAEAAAAgEIAAgeQAAgEgEAAIgrAAQgEAAAAAEgAigAAIgEAMQAAABAFADIAFAFQAKgXADgjQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgGAAQgEAUgHASgAkKBPQAAgOAKAAIAEABIANADQAEAAAAgHIAAhOIgsAAQgRAAAAgRIAAgpQAAgQARAAIAyAAQARAAAAAQIAACNQAAAagWAAQggAAAAgOgAkTgqQAAAEAEAAIAkAAIAAgGIgoAAgAkThBIAAACIAoAAIAAgCQAAgEgEAAIggAAQgEAAAAAEgAAHBYQgFgEAAgFQAAgDAFgIQAKgVAKggQADgHAHgBQAOAAAAALQAAAFgHAWIgNAiQgGAMgIAAQgFAAgFgDgACIBOQAAgPAKAAIADABIAKADQAGgBAAgXIAAiAQAAgIALAAQALAAAAAIIAACBQAAAdgFAJQgEAIgOAAQgcAAAAgMgAlfBUQgFgEAAgEQAAgEADgDQAMgOACgMIgRAAQgJABAAgLQAAgLAJAAIATAAIAAgNIgPAAQgKAAAAgJQAAgLAKABIBnAAQAJgBAAALQAAAJgJAAIgSAAIAAANIAWAAQAJAAAAALQAAALgJgBIgWAAIAAAfQAAAKgLAAQgLAAAAgKIAAgfIgbAAQgDAQgIAOQgIAOgHABQgFgBgEgDgAk7AWIAaAAIAAgNIgaAAgADKBMIABgJQADgaAAgRQAAgIAIAAQAHAAAAAIIAAAKIgBAcIgBASQAAAHgHAAQgKAAAAgLgADfBCIAAAAIAAgSIAAgGIgBgTQAAgHAHAAIAAAAQAGAAABAGIABATIAAAAIAAATQAAAMgIAAQgGAAAAgGgADvA6QAAgWgCgNIgBgDQAAgFAIAAQAEAAACAQIABAbQAAAGgHAAQgFAAAAgGgACJAsIAAh3QAAgIALAAQALAAAAAIIAAB3QAAAIgLAAQgLAAAAgIgABGAsQgHABgEgFQgFgEAAgGIAAhTQgDAJgLAAQgDABgCgDIgNgPIgDgDIgJgJQgDgDAAgEQAAgEAEgFQAEgDAEAAQAFAAAOAOQAPAQABAEIAAgQQAAgOAOAAIAtAAQARAAAAAPIAABlQAAAIgFAFQgFADgDAAgABNAPQAAAHAJAAIAPAAQAGAAAAgHIAAgLIgeAAgABNgQIAeAAIAAgOIgeAAgABNg+IAAAKIAeAAIAAgKQAAgEgEAAIgXAAQgDAAAAAEgAAegDIgUgQQgGgFAAgEQAAgEADgFQAEgEAEAAQAEAAARANQARANAAAFQAAAFgFAEQgEACgEAAQgDAAgHgEg");
	this.shape_1.setTransform(9.9,-1.1);

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AA7BuIAAgNIh8AAIAAANIgXAAIAAiXIBDAAQACgGAEgOIhiAAIAAgUIA+AAIgGgJIgJgNIAWgGQAOARAGALIAoAAQAJgJALgTIAYAJQgHALgJAIIA+AAIAAAUIhkAAIgFAUIBRAAIAACXgAhBBNIB8AAIAAgXIh8AAgAhBAkIB8AAIAAgVIh8AAgAhBgCIB8AAIAAgTIh8AAgAi3BuIAAgOIifAAIAAAOIgXAAIAAjOIDNAAIAADOgAlWBLICfAAIAAiVIifAAgAEVBUIAMgRQAlAGAoAPIgNAVQgqgRgigIgACRBXQAtgIAcgMIAPAQQgiASgrAIgACpBBIAAh+IBEAAQADgHACgKIhhAAIAAgUIDdAAIAAAUIhjAAQgBAMgDAFIBNAAIAAB+gADAAuIB8AAIAAgUIh8AAgADAAJIB8AAIAAgRIh8AAgADAgZIB8AAIAAgRIh8AAgAk5AtIAAhbIBmAAIAABbgAkjAXIA6AAIAAgvIg6AAg");
	this.shape.setTransform(-7.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("Ag3hvIBvBvIhvBvg");
	this.shape_1.setTransform(42,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AA7BuIAAgNIh8AAIAAANIgXAAIAAiXIBDAAQACgGAEgOIhiAAIAAgUIA+AAIgGgJIgJgNIAWgGQAOARAGALIAoAAQAJgJALgTIAYAJQgHALgJAIIA+AAIAAAUIhkAAIgFAUIBRAAIAACXgAhBBNIB8AAIAAgXIh8AAgAhBAkIB8AAIAAgVIh8AAgAhBgCIB8AAIAAgTIh8AAgAi3BuIAAgOIifAAIAAAOIgXAAIAAjOIDNAAIAADOgAlWBLICfAAIAAiVIifAAgAEVBUIAMgRQAlAGAoAPIgNAVQgqgRgigIgACRBXQAtgIAcgMIAPAQQgiASgrAIgACpBBIAAh+IBEAAQADgHACgKIhhAAIAAgUIDdAAIAAAUIhjAAQgBAMgDAFIBNAAIAAB+gADAAuIB8AAIAAgUIh8AAgADAAJIB8AAIAAgRIh8AAgADAgZIB8AAIAAgRIh8AAgAk5AtIAAhbIBmAAIAABbgAkjAXIA6AAIAAgvIg6AAg");
	this.shape_2.setTransform(-7.6,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("Ag3hvIBvBvIhvBvg");
	this.shape_3.setTransform(42,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// 圖層 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#009999").ss(2,1,1).p("AHuinIvbAAQhIAAAABHIAADAQAABIBIAAIPbAAQBIAAAAhIIAAjAQAAhHhIAAg");
	this.shape_4.setTransform(0,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#99FFFF","#FFFFFF","#33CCFF","#006699"],[0,0.267,0.706,1],0,-18.7,0,18.7).s().p("AntCoQhIAAAAhIIAAjAQAAhHBIAAIPbAAQBIAAAABHIAADAQAABIhIAAg");
	this.shape_5.setTransform(0,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ao/C1IAAlqIR/AAIAAFqg");
	this.shape_6.setTransform(0,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-17.9,113.2,33.7);


(lib.重考 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AlCB6IAAgXIBrAAIAAgNIhgAAIAAgWIBgAAIAAgNIhWAAIAAhZIBWAAIAAgOIhmAAIAAgWIBmAAIAAgOIhgAAIAAgVIC6AAQAHAAADgLIAfAAQgCATgHAGQgHAIgNgBIhJAAIAAAOIBpAAIAAAWIhpAAIAAAOIBYAAIAABJQAAAQgVAAIhDAAIAAANIBiAAIAAAWIhiAAIAAANIBsAAIAAAXgAi6AeIA0AAQAIAAAAgGIAAgJIg8AAgAkRAeIA6AAIAAgPIg6AAgAi6gCIA8AAIAAgPIg8AAgAkRgCIA6AAIAAgPIg6AAgABtB2IAAgXICmAAQAHAAAAgEIAAgdIiYAAQgVAAAAgUIAAgQIgcAAIAAgZIAXAAQAJAAAEgHIAHgRIgqAAIAAgYIBoAAIAAgdIhgAAIAAgYIBgAAIAAgUIAeAAIAAAUIBlAAIAAAYIhlAAIAAAdIASAAIANgVIAjAAIgNAVIA2AAIAAAYIilAAIgJASICrAAIAAAXIi2AAIAAARQAAAEAHAAICoAAIAAA5QAAAWgeAAg");
	this.shape.setTransform(0.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AlCB6IAAgXIBrAAIAAgNIhgAAIAAgWIBgAAIAAgNIhWAAIAAhZIBWAAIAAgOIhmAAIAAgWIBmAAIAAgOIhgAAIAAgVIC6AAQAHAAADgLIAfAAQgCATgHAGQgHAIgNgBIhJAAIAAAOIBpAAIAAAWIhpAAIAAAOIBYAAIAABJQAAAQgVAAIhDAAIAAANIBiAAIAAAWIhiAAIAAANIBsAAIAAAXgAi6AeIA0AAQAIAAAAgGIAAgJIg8AAgAkRAeIA6AAIAAgPIg6AAgAi6gCIA8AAIAAgPIg8AAgAkRgCIA6AAIAAgPIg6AAgABtB2IAAgXICmAAQAHAAAAgEIAAgdIiYAAQgVAAAAgUIAAgQIgcAAIAAgZIAXAAQAJAAAEgHIAHgRIgqAAIAAgYIBoAAIAAgdIhgAAIAAgYIBgAAIAAgUIAeAAIAAAUIBlAAIAAAYIhlAAIAAAdIASAAIANgVIAjAAIgNAVIA2AAIAAAYIilAAIgJASICrAAIAAAXIi2AAIAAARQAAAEAHAAICoAAIAAA5QAAAWgeAAg");
	this.shape_1.setTransform(0.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009999").ss(2,1,1).p("AHuinIvbAAQhIAAAABHIAADAQAABIBIAAIPbAAQBIAAAAhIIAAjAQAAhHhIAAg");
	this.shape_2.setTransform(0,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99FFFF","#FFFFFF","#33CCFF","#006699"],[0,0.267,0.706,1],0,-18.7,0,18.7).s().p("AntCoQhIAAAAhIIAAjAQAAhHBIAAIPbAAQBIAAAABHIAADAQAABIhIAAg");
	this.shape_3.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

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
	this.shape_12.graphics.f().s("#993300").ss(1,1,1,3,true).p("ACLgVQiRBNiEg8");
	this.shape_12.setTransform(13.2,8.3,0.673,0.673);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9966").s().p("Ag8AbQgBgHADgHQAOg4AwANQAxAMAJAWQhLgMguApg");
	this.shape_13.setTransform(13.3,-4.6,0.673,0.673);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA/ATIgDgCIgqgNQgSgCgjAMQgXAHgOACIgMABQgJgBgCgHIABgCQAMAGAhgVQAigYAWACQAPAAAVAKQAWAKAOAKQAOAMADAEQgDABgEAAQgJAAgRgFg");
	this.shape_14.setTransform(31.8,-9,0.673,0.673);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAASQgHgBgGgGQgEgFAAgHQABgHAHgGQAFgEAFABIAGABIAEACQAKAIgFAOQAAADgEADQgEAEgHAAIgBAAg");
	this.shape_15.setTransform(31.7,-6.3,0.673,0.673);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAtQgVgCgNgQQgOgOACgRQACgSARgNQAPgLATACQATACAPAOQAGAIACAHIAEALIgBAGQgCATgQALQgOAMgRAAIgDgBg");
	this.shape_16.setTransform(30.9,-6.9,0.673,0.673);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAtQgYgHgPgRQgPgSAEgPQAbgmA3AGQAUACAOAHQASAHAAAMQgLAfgaASQgSANgSAAIgLgBg");
	this.shape_17.setTransform(31.6,-6.5,0.673,0.673);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiAAaIABgCQAbgNAjgLQAigLAxgKQA0gLAdANQAeAOgBAEIgEADQiGAHhzASg");
	this.shape_18.setTransform(36.9,-23,0.673,0.673);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ah4gaIgCgFQgBgEAhgIQAfgIAxAWQAuAUAgAQIA3AkIgBACIgDABQhtgniCghg");
	this.shape_19.setTransform(-2.8,-26.7,0.673,0.673);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABSAiQgEAAgGgDQgNgFgWgNQgigQgRgCQgFgBglAGQgDAAgCAAQgaACgHgEQAFgEAQgIQAQgKAYgEQAVgGANACQAYAEAcAcQAdAeAMgFIABACQgEAHgHAAIgCAAg");
	this.shape_20.setTransform(-4,-12.2,0.673,0.673);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAASQgHgBgGgGQgEgFAAgGQABgIAGgGQAGgEAFABIAGABIAEACQAKAIgFAOQAAADgEADQgEAEgHAAIgBAAg");
	this.shape_21.setTransform(-3.2,-9.9,0.673,0.673);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDAtQgWgCgNgPQgNgPACgRQACgSAQgMQAPgMAUACQAUACAOAPQAGAIADAHQACAEABAGIgBAGQgCATgQAMQgOALgRAAIgDgBg");
	this.shape_22.setTransform(-3.3,-10.5,0.673,0.673);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnAZQgWgWgFggQAEgMATgDQAPgDAUACQA3AGAUAoQgBAQgTAOQgRAPgaABIgCAAQgWAAgTgWg");
	this.shape_23.setTransform(-3.8,-10.2,0.673,0.673);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AIlHlQAUhcgciAQgbiCh0h1QgPgQgRgNQgRgNgVgOQgrghg5gQQgdgBgXANIhEAZQhHAcgeAEQgaAEg7gqQg6gtgwgYQgigRguAVQhHAkgzAuQgyApgYAeQgXAdgDAGQgmA6gaBHQgYBEgEBKQgEBIgJA3QgLA2gZhAQgbhCgQgsQgBgGgDgFIgHglQgRhmgBgUQgCg+AIhSQAEglACgGQAAgHAJAKQAIAIAUAKIAJgkQADgTAEgJQAShQAohDQAhg0AHABQAMABAPAWQANASAFAKQAAgWANgdQAJgbATghQAyhQA/ghIAFABIgCAJQgCAVACAFQACAFAGABQAIAAAYgTIAFgEQAagQAwgaQA3gfAFgBIAJAAIgEAVQgGARgCAMIgEAOQAAAEAKABQAJgDBKgmQBFgnAthEIAFgHQADgIADgEQAMAgAtA1QAiAoAdAXQAEgKAMgKQAKgNAGAFIAwAqQApAlAwAyQAIgKAdgaQAiAyAYAbQA/BLACA9QADgCARgTIAVgVQALAKAPAnQAHAMAFATQAYBBAEAZIAJAnQADARAXAlQAvgcAGgFQgHASgNCHQgLB8gtCLQgHAMAAAMIgFALQgpBegQAAQgQAAAKhfg");
	this.shape_24.setTransform(18.1,-42.7,0.673,0.673);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#655245").s().p("AJzIpQAtiLAKh8QANiHAHgSQgGAFguAcQgXglgDgRIgJgpQgFgZgYg/QgFgTgHgMQgPgngKgKIgVAVQgRATgDACQgCg9hAhLQgXgbgigyQgeAagIAKQgvgygpglIgxgqQgGgFgKANQgLAKgEAKQgdgXgjgoQgsg1gMggQgDAEgDAIIgFAHQgvBEhDAnQhLAmgJADQgKgBAAgEIAEgOQACgMAGgRIAEgVIgJAAQgFABg2AfQgxAagZAQIgFAEQgYATgIAAQgGgBgCgFQgCgFACgVIACgJIgFgBQhAAhgxBQQgUAhgJAbQgNAdAAAWQgFgKgNgSQgPgWgLgBQgHgBghA0QgpBDgSBOQgEAJgDATIgIAmQgUgMgIgIQgJgKAAAHQgCAGgEAnQgIBSACA+QABAUARBmIAHAlIgIgVIgBgCQgUhBgQhDQgOhDgEhGIAAgFQAAgVACgUIANhVQABADASAPIATAWQAPgzAYg2QAihMAdgiQAVgeATACQADAAAHAMQAJALAFACQAThUBBg7QBAg+A+gXIgEAlIAFABQAUgNBcguQBkg0AVgDIgBAKQgZApgDAfIAogZQAogbAcgrQAQgUAUglQAPgiAFgDQALAIAhBZQAbAyAgAgIACgVQAHgQADgkQAjAeA2BJQArA6AQABQAMADAJgLQAGgGALgSQANAKAKAKQBiBVAiBQIAOAVIAMgoIABgFQAqAiAiBpQAAAFACAHQAIAcARBSQACAGAHAKQAIALACABQAMABAUgLQASgLAKABQAHAWgBATQAAALgKBUQgKBmgTA4QgSAygzB9IgCAHIgFALQAAgMAHgMg");
	this.shape_25.setTransform(17.9,-49.5,0.673,0.673);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AJOgnQAYgKAEAAQAKgDAUAEQAjAJASAiQAUApgQA8QgOA2gsASQgeAPglgHApVA3QgqACgdgWQgngbgEg1QgBg/AbgmQABgCADgBQAIgJAIgHQArgXAoAWQAEADAFACQAEADACABQACACABAB");
	this.shape_26.setTransform(16.9,-12.4,0.673,0.673);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("AorhvQABgPACgOIAHhSQAFgpAKgoQAohqBBhCQAhgkA5gYQBFgdBFgOQArgEAsgDQCIgHCLAYQB+AMBsBAQB6BJA/B+QAOArAKBEQAFAlgDApIgJBSQgCAOgBAKQgBAHAAAGQgKBkABBoQAAAUAAAVIgBA7QgaEDl5AIQg1ABgxAAQg1ACh7gOIhvgVQgfgGgfgHQlwhVAakDIAKg5QAEgWAGgUAorhvQgBAGAAAEQgLBkgWBj");
	this.shape_27.setTransform(16.3,-15.3,0.673,0.673);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCC7A5").s().p("AJECwQgBhoAKhiIABgNQAYgKAEAAQAKgDAUAEQAjAJASAiQAUApgQA8QgOA2gsASQgUAKgYAAQgLAAgMgCgAqcAjQgngbgEg1QgBg/AbgmQABgCADgBIAQgQQArgXAoAWIAJAFIAGAEIADADIgBAKQgKBkgWBjIgHAAQglAAgbgUg");
	this.shape_28.setTransform(16.9,-12.4,0.673,0.673);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAD8AF").s().p("AheI/IhvgVIg+gNQlwhVAakDIAKg5QAEgWAGgUQAWhjALhkIABgKIADgdIAHhSQAFgpAKgoQAohqBBhCQAhgkA5gYQBFgdBFgOIBXgHQCIgHCLAYQB+AMBsBAQB6BJA/B+QAOArAKBEQAFAlgDApIgJBSIgDAYIgBANQgKBkABBoIAAApIgBA7QgaEDl5AIIhmABIgOAAQg2AAhsgMg");
	this.shape_29.setTransform(16.3,-15.3,0.673,0.673);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#993300").ss(1,1,1,3,true).p("ACJgfQiJBeiIgu");
	this.shape_30.setTransform(11.5,8.2,0.673,0.673);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9966").s().p("Ag6AfQgCgHACgHQAHg7AzAHQAwAHAMAXQhLgFgpAvg");
	this.shape_31.setTransform(10.3,-3.9,0.673,0.673);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhfAXIABgCQANAEAdgZQAfgcAWgBQAPgCAXAIQAWAIAQAKIATAMQgHAFgbgFIgDgCIgrgGQgRABgiAOQgXAKgNADIgLADQgJAAgEgHg");
	this.shape_32.setTransform(28.4,-10.9,0.673,0.673);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAMQgFgEgBgIQAAgFAGgHQAEgFAHABIAFAAIAEABQALAHgDAOQAAADgEADQgEAGgJAAQgFAAgGgGg");
	this.shape_33.setTransform(28.5,-8.6,0.673,0.673);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghAgQgQgMAAgUQAAgQAPgPQAOgNAUgBQASAAARANQAHAHADAHIAFAKIAAAIQAAASgOANQgQAPgTAAIgBAAQgTAAgOgOg");
	this.shape_34.setTransform(27.7,-9.1,0.673,0.673);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJAvQgZgEgRgPQgQgRABgOQAXgqA3gBQAVABANAFQATAFACAMQgIAfgWAVQgUASgVAAIgFAAg");
	this.shape_35.setTransform(28.2,-8.8,0.673,0.673);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ah9AlIABgCQAZgPAhgQQAhgOAvgQQAygRAfAJQAfALAAAEIgEAGQiEAVhwAeg");
	this.shape_36.setTransform(31.6,-25,0.673,0.673);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ah7gIIgDgGQgBgEAfgLQAegLAzAPQAwAPAiAMIA8AeIgBACIgDABQhxgaiFgRg");
	this.shape_37.setTransform(-8.3,-24.4,0.673,0.673);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABKAbQgOgDgXgKQgkgOgRAAQgGAAgjAKQgDABgCgBQgZAHgIgFQAFgEAOgIQAPgMAWgHQAVgIAPAAQAWABAgAaQAgAYALgFIACACQgDAHgJAAIgCAAIgIgBg");
	this.shape_38.setTransform(-7.5,-10.5,0.673,0.673);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAMQgEgEgBgIQAAgGAFgGQAFgFAGAAIAFAAQAAABABAAQABABAAAAQABAAAAAAQABAAAAAAQALAHgDAOQAAADgDADQgFAGgJAAQgFAAgGgGg");
	this.shape_39.setTransform(-6.6,-8,0.673,0.673);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiAhQgPgOAAgTQAAgRAPgOQANgOAVAAQATAAAPANIAMAOQACAEACAGIAAAIQAAARgPAOQgPAOgUABIAAAAQgUAAgOgNg");
	this.shape_40.setTransform(-6.8,-8.6,0.673,0.673);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjAdQgXgUgJgfQACgNASgFQAOgFAVAAQA3gBAZAoQABAPgRAQQgPARgaAEIgIAAQgTAAgTgRg");
	this.shape_41.setTransform(-7.3,-8.2,0.673,0.673);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ApAIaQgig+gVgqQgCgGgEgFIgLgjQgdhkgDgTQgKg+gBhSQgBgnABgHQAAgHAKAJQAJAHAVAKIAEgnQAAgTADgJQAJhQAghHQAcg4AHAAQALAAARAUQAPARAHAJQgDgWAKgfQAFgcAQgiQAnhWA7gnIAFAAIAAAJQAAAVADAEQACAFAGABQAIgBAWgWIAFgFQAXgSAtggQAyglAFgBIAJgCIgBAWQgEASgBAMIgCAOQAAAEALAAQAIgEBGgvQBAgvAmhJIAEgHQACgJADgEQAQAeAwAwQAnAkAgATQADgKAJgLQAJgPAGAFIA1AkQAuAfA1AtQAGgLAageQAoAuAaAYQBIBDAJA8QAEgDAOgUQAOgTAFgEQALAJAUAkQAIAMAHASQAgA+AHAYIAOAoQAFAQAbAgQArgfAFgGQgFATADCGQAFB7gdCQQgGANACAMQgDAFgBAGQg8DEgCi+QAIhdgqh8Qgqh+iBhkQgRgOgTgNQgSgLgXgMQgugbg7gJQgdACgUAQIhCAhQhDAjgbAIQgcAGg/ghQg/gmgygTQgkgNgsAbQhCAsgtAxQgsAxgVAhQgTAggCAGQggA9gQBJQgRBIAFBJQAEBJgCA3QgCAagJAAQgJAAgRggg");
	this.shape_42.setTransform(11,-43.5,0.673,0.673);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#655245").s().p("AqCIOIgBgCQgbg9gXhBQgWhBgMhFIgBgFQgDgVAAgUIADhWQACADASANIAWATQAJg0ARg7QAZhNAYglQASggAUgBQADABAIAJQAKAKAFACQAKhVA5hCQA4hFA7gfIAAAlIAFABQATgQBWg5QBdg/AUgFIAAALQgUAqABAgIAlgeQAlgfAZguQAMgWAQgoQALgiAFgEQAMAHApBUQAgAvAkAbIAAgVQAFgQgBglQAmAaA+BCQAyA1AQgBQAMABAIgLQAFgGAJgUQANAIALAKQBsBIArBLIARATIAHguQAuAdAuBlQAAAFADAGQAMAdAaBNQADAGAIAJQAJAKADABQAMgBASgNQARgNAKAAQAJAVABATQABAMABBUQACBmgMA7QgMAzglCCIgBAHIgEALQgBgMAGgNQAciPgEh7QgDiIAFgTQgGAGgqAhQgcgigFgRIgOgnQgGgYggg9QgHgRgJgMQgTglgLgIQgFAEgOATQgPAUgDADQgJg9hIhCQgagYgoguQgaAegHALQg1gtgtggIg1gkQgHgEgIAOQgKALgDALQgggTgnglQgygvgOgeQgCAEgCAIIgEAIQgmBJhBAvQhFAvgJAEQgKAAgBgEIADgPQAAgMAEgRIACgWIgJABQgFACgzAlQgtAggXASIgFAFQgVAVgIABQgGAAgDgFQgDgEAAgVIABgJIgFAAQg7AngoBWQgPAigGAcQgJAeACAXQgGgKgPgQQgSgUgLAAQgHAAgbA2QghBHgIBSQgDAJgBATIgDAnQgWgKgJgHQgKgJABAHQgBAGAAAoQACBSAJA9QADAUAeBkIALAjIgLgUg");
	this.shape_43.setTransform(10.6,-51.7,0.673,0.673);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF9966").ss(1,1,1,3,true).p("AJGhtQAXgMAEgBQAJgEAVABQAkAFAVAgQAZAogJA8QgIA4gpAWQgcATgmgDApKB8QgpAHgfgTQgqgVgLg3QgIg7AWgqQABgCADgBQAHgKAHgIQAngcArARQAEADAFABQAFADACAAQACACABAB");
	this.shape_44.setTransform(12.8,-12.3,0.673,0.673);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFA766").ss(1,1,1,3,true).p("ApIgqQgBgPAAgPIgChSQAAgqAGgpQAbhuA5hIQAcgoA2gfQBBglBCgWQArgJAsgIQCIgXCKAHQB/gDBzA0QCBA5BOB2QATApASBDQAKAkACApIAABSQAAAPAAAMQAAAHABAGQACBiANBoQACAUADAUIAFA7QAFEEl2A1Qg0AHgxAGQg0AIh7AAIhxgIQgggCgggDQl3gqgFkEIADg6QACgWAEgUApIgqQAAAGAAAEQACBigKBn");
	this.shape_45.setTransform(13.2,-15.3,0.673,0.673);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCC7A5").s().p("AqSBwQgqgVgLg3QgIg7AWgqIAEgDIAOgSQAngcArARIAJAEIAHADIADADIAAAKQACBigKBnQgKACgKAAQgdAAgXgOgAJVBqQgNhngChjIAAgNQAXgMAEgBQAJgEAVABQAkAFAVAgQAZAogJA8QgIA4gpAWQgYARghAAIgJgBg");
	this.shape_46.setTransform(12.8,-12.3,0.673,0.673);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAD8AF").s().p("AidJAQgggCgggDQl3gqgFkEIADg6QACgWAEgUQAKhngChiIAAgKIgBgeIgChSQAAgqAGgpQAbhuA5hIQAcgoA2gfQBBglBCgWIBXgRQCIgXCKAHQB/gDBzA0QCBA5BOB2QATApASBDQAKAkACApIAABSIAAAbIABANQACBiANBoIAFAoIAFA7QAFEEl2A1IhlANQg0AIh7AAg");
	this.shape_47.setTransform(13.2,-15.3,0.673,0.673);

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
	this.shape_53.graphics.f("#F7F8F3").s().p("AgkBEIgrgQQAHgXAEgbQAEgYgCguQASAfA1AMQAlAHAmgbQgFAUgEAiQgGAXgIARIAAABIgBAAQg4ATgbAAIgJgBg");
	this.shape_53.setTransform(2.9,115.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#542B01").s().p("AgaAXIgZgKIgPgKIgLgGIADgDQAJgGAEgJIArARQAXAEBFgWIABAAIAAgBIADABIgGAHIgHAJQgDAEgEACQgeAYgkAAIgSgBg");
	this.shape_54.setTransform(1.1,123.4);

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


(lib.小明話框 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#378701").s().p("EhHsAhOMAAAhCbMCPZAAAMAAABCbg");
	this.shape.setTransform(0,-24.8);

	// 圖層 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("EhJBAi3MAAAhFsMCSDAAAMAAABFsg");
	this.shape_1.setTransform(0.9,-25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("EhL8AngMAAAhO/MCX5AAAMAAABO/gEhI4AixMCSDAAAMAAAhFsMiSDAAAg");
	this.shape_2.setTransform(0,-24.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-486.1,-277.7,972.4,505.7);


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


(lib.music_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ACoC4IlvlNQgHgHAAgJQgBgKAHgHQAGgHAKgBQAKAAAHAHIFvFNQAHAGAAAKQABAKgHAHQgGAHgKAAIgBABQgJAAgHgHg");
	this.shape.setTransform(43.7,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AiyDoQgjgjAAgyQAAgzAjgkQAkgjAzAAQAyAAAkAjIADAEIAAiwIAAgDIAAiHQAAgFACgEQABgFAFgCQAGgDAGADQBqAtBFBVQAlAtgcA3QgJASgPANQgDADgFABQgFAAgEgCQgEgDgCgEQgDgGgEgFQgvg9hMgQIAADWQADAPAAAQQAAAyghAjQgkAkgyAAQgzAAgkgkg");
	this.shape_1.setTransform(44.5,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AheFxQABgHgCgFQgEgGgGgCQgdgIgbgNQgGgEgGADQgGABgDAGQgWgNgVgPQADgGAAgGQgBgGgFgFQgPgMgNgNIgQgSQgFgFgGAAQgHgBgEAFQgRgUgNgWQAFgDABgGQACgGgDgGQgOgbgKgdQgDgGgGgDQgGgCgFABQgIgZgDgaQAFgBAFgFQAEgFgBgGQgCgVAAgVIABgRQAAgHgEgEQgFgFgGgBQACgbAGgZQAGACAFgDQAGgEACgGQAIgdANgcQADgGgCgGQgDgGgFgDQAMgXAQgVQAFAEAGgBQAHgBAEgFQANgRARgQIAMgMQAFgEAAgHQAAgGgEgFQAVgSAWgOQADAGAGABQAGACAGgDQAagQAcgJQAGgDADgGQADgFgCgGQAYgIAbgEQABAFAFAFQAFADAGAAQAYgDAXAAIALAAQAGAAAFgFQAEgEAAgGQAcACAbAGQgCAGAEAFQADAGAGABQAeAHAbANQAGACAGgCQAGgCADgGQAXAMAWAQQgEAFABAGQABAHAFAEQAUAPATATIAHAHQAEAFAGABQAHAAAFgEIABgBQARAVAPAVQgGADgCAHQgBAGADAGQAQAZALAdQACAGAGADQAGACAGgCQAIAZAFAZQgHABgEAFQgDAGABAGQADAaAAAaIAAAHQAAAHAFAEQAEAFAGAAQgBAbgFAaQgGgCgFAEQgGADgCAGQgGAegMAcQgEAGADAGQACAGAGADQgLAXgPAWQgFgEgHABQgGABgEAFQgRAXgUAVIgBABQgFAEAAAHQAAAGAFAFQgVASgVAPQgEgFgGgBQgGgCgGAEQgbARgbAMQgHACgCAGQgDAFADAGQgZAJgaAFQgCgGgFgEQgFgDgGABQgeAEgeAAIAAAAIgZgBQgHgBgEAFQgGAEAAAHQgbgDgZgGg");
	this.shape_2.setTransform(43.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAAGLIgbgBQgHgBgDgEQgGgGABgGQABgHAFgEQAFgEAHAAIAYABIAAAAQAfAAAdgEQAGgBAGAEQAEADACAHIAAAAQABAHgFAFQgDAFgHABQgfAFghAAgAhyF7QgggKgdgOQgGgDgCgGQgCgGAEgHQACgGAHgBQAFgCAHADQAaANAdAIQAGADAEAFQADAFgCAHIAAAAQgCAHgGADQgDACgEAAIgFgBgACKFvQgHgDgCgGIAAgBQgCgFACgFQACgHAHgCQAbgLAbgSQAGgDAHABQAFABAEAFQAEAGgBAHQgCAGgGAEQgdATgeAMIgGABIgGgBgAj4EzIgegcQgKgJgHgKQgFgFAAgGQABgHAEgDIABgBQAEgEAHAAQAGABAFAFIAQARQAOANAOANQAFAEABAGQAAAGgDAGIAAAAQgFAFgGABIgBAAQgGAAgFgEgAEAEYQgFgFAAgGQAAgHAFgEIABgBQAVgUAQgYQAEgFAHgBQAGgBAFAEQAFADACAIQAAAGgEAFQgRAYgXAXIgBABQgFAFgGAAQgGAAgFgFgAlRDGQgGgCgEgFQgPgegLgfQgDgHADgFQADgGAGgCIABAAQAFgCAHADQAFACADAHQAKAcAOAbQAEAGgDAGQgBAGgFADIAAABIgIACIgFgBgAFWClQgFgDgDgFQgDgHAEgGQAMgcAGgdQACgGAGgEQAFgDAGABIAAAAQAHABADAHQAEAFgBAGQgJAhgNAeQgCAGgGACIgGABIgHgBgAmCA2QgGgEAAgGQgCgWAAgWIAAgTQABgHAFgEQAFgFAGAAQAGABAFAFQAEAFAAAGIgBASQABAVACAUQAAAGgEAFQgFAFgFACIgBAAIgBAAQgGAAgEgFgAF6AXQgGgBgEgFQgFgEAAgHIAAgGQAAgagDgbQgBgGADgGQAFgFAGgBQAGgBAGAFQAFAEABAGQAEAcAAAdIAAAGQAAAHgFAEQgFAGgGAAgAlxhWIAAAAQgHgCgDgGQgDgGABgGQAKghAOgeQADgFAGgCQAGgDAFAEIABAAQAFACADAHQACAGgDAFQgNAcgIAdQgCAHgFADQgEACgEAAIgEAAgAFdh5QgHgCgCgHQgLgdgQgZQgDgGACgGQABgGAGgEQAFgEAHACQAHACADAGQAQAcAMAeQADAHgDAGQgCAFgGADIAAABIgGAAIgGgBgAk0jcQgFgEgBgGQgBgIAEgEQAQgTARgSIANgMQAEgEAIAAQAGAAAEAFIABAAQADAFAAAGQAAAHgEAEIgNAMQgQAQgOARQgEAFgGABIgCABQgGAAgEgEgAESjzQgGAAgEgFIgHgIQgTgSgUgQQgFgEAAgGQgCgHAEgEIABgBQAEgFAGgBQAGgBAGAEQAVAQAUAUIAJAJQAEAGgBAGQAAAGgEAFIAAABQgFADgGAAIgCAAgAi/k7QgFgBgEgGIgBAAQgCgGABgGQACgHAFgDQAdgQAfgLQAGgCAGACQAGADACAGIAAABQACAGgCAFQgEAHgFACQgdAJgaAQQgEACgEAAIgEgBgACWlMQgcgMgegIQgGgBgDgGQgEgFACgGIAAgBQACgGAGgDQAEgEAHACQAhAIAdANQAGADADAGQACAHgDAFQgDAHgFABIgGABIgGgBgAg6lrQgFgEgBgGIAAgBQAAgGADgGQAFgFAGAAQAZgDAZAAIALAAQAGAAAFAFQAEAFABAFIAAABQgBAHgEADQgFAGgGAAIgLAAQgXgBgXADIgCAAQgGAAgEgDg");
	this.shape_3.setTransform(43.6,43.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("Ak1E1Qh/iAgBi1QABi0B/iBQCBh/C0gBQC1ABCAB/QCACBAAC0QAAC1iACAQiACAi1AAQi0AAiBiAg");
	this.shape_4.setTransform(43.8,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("Ak1E1Qh/iAgBi1QABi0B/iAQCBiBC0AAQC1AACACBQCACAAAC0QAAC1iACAQiACBi1AAQi0AAiBiBg");
	this.shape_5.setTransform(48.4,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.2,92.1);


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


(lib.星星亮燈動畫10 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#666600").s().p("AhOBxQgIgGAAgLIAAiOQgFACgEAAQgLAAgHgHQgHgHAAgKQAAgLALgJIAdgWQAJgIALABQAXgBAAAcIAAC6QAAALgHAGQgHAGgKgBQgKABgHgGgAAKBTQgKgcAAg3QAAg4AKgbQAOgiAkAAQAjgBAOAkQAMAbAAA3QAAA4gMAbQgOAjgjAAQgjAAgPgjgAAugdIAAAPIABAOIgBAQIAAAQQAAAoAOgBQAKAAADgWIAAgxIAAgwQgDgYgKAAQgOAAAAArg");
	this.shape.setTransform(1.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhOBxQgIgGAAgLIAAiOQgFACgEAAQgLAAgHgHQgHgHAAgKQAAgLALgJIAdgWQAJgIALABQAXgBAAAcIAAC6QAAALgHAGQgHAGgKgBQgKABgHgGgAAKBTQgKgcAAg3QAAg4AKgbQAOgiAkAAQAjgBAOAkQAMAbAAA3QAAA4gMAbQgOAjgjAAQgjAAgPgjgAAugdIAAAPIABAOIgBAQIAAAQQAAAoAOgBQAKAAADgWIAAgxIAAgwQgDgYgKAAQgOAAAAArg");
	this.shape_1.setTransform(1.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫9 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#666600").s().p("AgpBoQgQgPAAgVQAAgLAIgGQAGgGAKABQASgBAEARQACAJAGABQAMAAADgdQgIAEgKAAQgZAAgPgXQgOgWAAgiQAAgkANgVQAPgdAgAAQAgABAPAeQAOAbAAA3QAAA6gOAfQgQAjgiAAQgWAAgQgPgAgKg7QgBAGAAAUQAAAhALABQAHAAADgKQACgHAAgSQAAgmgMABQgHAAgDAMg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgpBoQgQgPAAgVQAAgLAIgGQAGgGAKABQASgBAEARQACAJAGABQAMAAADgdQgIAEgKAAQgZAAgPgXQgOgWAAgiQAAgkANgVQAPgdAgAAQAgABAPAeQAOAbAAA3QAAA6gOAfQgQAjgiAAQgWAAgQgPgAgKg7QgBAGAAAUQAAAhALABQAHAAADgKQACgHAAgSQAAgmgMABQgHAAgDAMg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫8 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#666600").s().p("AguBgQgPgUAAgfQAAggASgUQgOgQAAgdQAAgfAQgSQAPgRAaAAQAdAAAQAWQANARAAAbQAAAcgOARQASASAAAiQAAAhgRAVQgRATgcABQgdAAgRgXgAgMAsQAAAcAMAAQANAAAAgcQAAgegNAAQgMAAAAAegAgIgyQAAAUAIAAQAKAAAAgUQAAgVgKAAQgIAAAAAVg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AguBgQgPgUAAgfQAAggASgUQgOgQAAgdQAAgfAQgSQAPgRAaAAQAdAAAQAWQANARAAAbQAAAcgOARQASASAAAiQAAAhgRAVQgRATgcABQgdAAgRgXgAgMAsQAAAcAMAAQANAAAAgcQAAgegNAAQgMAAAAAegAgIgyQAAAUAIAAQAKAAAAgUQAAgVgKAAQgIAAAAAVg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫7 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#666600").s().p("AgSBvQgHgGAAgKIABgHIAkiZQABgFgFAAIgQAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIAAASQAAAKgHAFQgHAGgKAAQgKAAgHgGQgIgFAAgKIAAglQAAgOAJgIQAJgJAQAAIA5AAQAgAAAAAhQAAAKgEASIgmCbQgFATgQAAQgKAAgHgHg");
	this.shape.setTransform(0.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgSBvQgHgGAAgKIABgHIAkiZQABgFgFAAIgQAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIAAASQAAAKgHAFQgHAGgKAAQgKAAgHgGQgIgFAAgKIAAglQAAgOAJgIQAJgJAQAAIA5AAQAgAAAAAhQAAAKgEASIgmCbQgFATgQAAQgKAAgHgHg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫6 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#666600").s().p("AgvBYQgNgcAAg3QAAg6AOgeQAQgjAiAAQAVAAARAPQAPAOAAAVQAAALgHAHQgHAFgJAAQgTAAgEgQQgCgKgGAAQgMAAgCAdQAHgFAKAAQAaAAAOAYQAPAWAAAiQAAAjgNAXQgQAcggAAQgggBgPgegAgJAKQgCAHAAASQAAAlALAAQAIAAACgMQACgHAAgTQAAgigMAAQgGAAgDAKg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgvBYQgNgcAAg3QAAg6AOgeQAQgjAiAAQAVAAARAPQAPAOAAAVQAAALgHAHQgHAFgJAAQgTAAgEgQQgCgKgGAAQgMAAgCAdQAHgFAKAAQAaAAAOAYQAPAWAAAiQAAAjgNAXQgQAcggAAQgggBgPgegAgJAKQgCAHAAASQAAAlALAAQAIAAACgMQACgHAAgTQAAgigMAAQgGAAgDAKg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


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


(lib.雲3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件3("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,76.4,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0.8},0).wait(1).to({y:1.6},0).wait(1).to({y:2.3},0).wait(1).to({y:3.1},0).wait(1).to({y:3.8},0).wait(1).to({y:4.6},0).wait(1).to({y:5.4},0).wait(1).to({y:6.1},0).wait(1).to({y:6.9},0).wait(1).to({y:7.6},0).wait(1).to({y:8.4},0).wait(1).to({y:9.2},0).wait(1).to({y:9.9},0).wait(1).to({y:10.7},0).wait(1).to({y:11.4},0).wait(1).to({y:12.2},0).wait(1).to({y:13},0).wait(1).to({y:13.7},0).wait(1).to({y:14.5},0).wait(1).to({y:15.2},0).wait(1).to({y:16},0).wait(1).to({y:16.8},0).wait(1).to({y:17.5},0).wait(1).to({y:18.3},0).wait(1).to({y:19},0).wait(1).to({y:19.8},0).wait(1).to({y:20.5},0).wait(1).to({y:21.3},0).wait(1).to({y:22.1},0).wait(1).to({y:22.8},0).wait(1).to({y:23.6},0).wait(1).to({y:24.3},0).wait(1).to({y:25.1},0).wait(1).to({y:25.9},0).wait(1).to({y:26.6},0).wait(1).to({y:27.4},0).wait(1).to({y:28.1},0).wait(1).to({y:28.9},0).wait(1).to({y:29.7},0).wait(1).to({y:30.4},0).wait(1).to({y:31.2},0).wait(1).to({y:31.9},0).wait(1).to({y:32.7},0).wait(1).to({y:33.5},0).wait(1).to({y:34.2},0).wait(1).to({y:35},0).wait(1).to({y:35.7},0).wait(1).to({y:36.5},0).wait(1).to({y:37.2},0).wait(1).to({y:35.6},0).wait(1).to({y:33.9},0).wait(1).to({y:32.2},0).wait(1).to({y:30.5},0).wait(1).to({y:28.8},0).wait(1).to({y:27.1},0).wait(1).to({y:25.4},0).wait(1).to({y:23.7},0).wait(1).to({y:22},0).wait(1).to({y:20.3},0).wait(1).to({y:18.6},0).wait(1).to({y:17},0).wait(1).to({y:15.3},0).wait(1).to({y:13.6},0).wait(1).to({y:11.9},0).wait(1).to({y:10.2},0).wait(1).to({y:8.5},0).wait(1).to({y:6.8},0).wait(1).to({y:5.1},0).wait(1).to({y:3.4},0).wait(1).to({y:1.7},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-54.3,152.9,110.2);


(lib.雲2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件2("synched",0);
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,57,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30,y:0.5},0).wait(1).to({y:0.9},0).wait(1).to({y:1.4},0).wait(1).to({y:1.8},0).wait(1).to({y:2.3},0).wait(1).to({y:2.8},0).wait(1).to({y:3.2},0).wait(1).to({y:3.7},0).wait(1).to({y:4.2},0).wait(1).to({y:4.6},0).wait(1).to({y:5.1},0).wait(1).to({y:5.5},0).wait(1).to({y:6},0).wait(1).to({y:6.5},0).wait(1).to({y:6.9},0).wait(1).to({y:7.4},0).wait(1).to({y:7.8},0).wait(1).to({y:8.3},0).wait(1).to({y:8.8},0).wait(1).to({y:9.2},0).wait(1).to({y:9.7},0).wait(1).to({y:10.2},0).wait(1).to({y:10.6},0).wait(1).to({y:11.1},0).wait(1).to({y:11.5},0).wait(1).to({y:12},0).wait(1).to({y:12.5},0).wait(1).to({y:12.9},0).wait(1).to({y:13.4},0).wait(1).to({y:13.8},0).wait(1).to({y:14.3},0).wait(1).to({y:14.8},0).wait(1).to({y:15.2},0).wait(1).to({y:15.7},0).wait(1).to({y:16.1},0).wait(1).to({y:14.8},0).wait(1).to({y:13.5},0).wait(1).to({y:12.1},0).wait(1).to({y:10.8},0).wait(1).to({y:9.4},0).wait(1).to({y:8.1},0).wait(1).to({y:6.7},0).wait(1).to({y:5.4},0).wait(1).to({y:4},0).wait(1).to({y:2.7},0).wait(1).to({y:1.3},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-29.5,114,60.1);


(lib.雲1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲元件1("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,30.7,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:21,y:-0.2},0).wait(1).to({y:-0.7},0).wait(1).to({y:-1.2},0).wait(1).to({y:-1.7},0).wait(1).to({y:-2.2},0).wait(1).to({y:-2.8},0).wait(1).to({y:-3.3},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.5},0).wait(1).to({y:-5.1},0).wait(1).to({y:-5.7},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.6},0).wait(1).to({y:-8.2},0).wait(1).to({y:-8.9},0).wait(1).to({y:-9.5},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10.9},0).wait(1).to({y:-11.6},0).wait(1).to({y:-12.4},0).wait(1).to({y:-13.1},0).wait(1).to({y:-12.8},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.8},0).wait(1).to({y:-9.8},0).wait(1).to({y:-8.7},0).wait(1).to({y:-7.6},0).wait(1).to({y:-6.5},0).wait(1).to({y:-5.4},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2},0).wait(1).to({y:-0.9},0).wait(1).to({y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-21.3,61.4,41.9);


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
	this.shape_60.graphics.f("#FDE5C3").s().p("AgIBtQgugEgdgiQgdgkAEgrQADgtAjgdQAjgeArAEQAtADAeAkQAdAigDAsQgEAtgjAdQgeAagnAAIgJAAg");
	this.shape_60.setTransform(-31.7,100.2,1,1,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDE5C3").s().p("AgFBLQglgZgsg9IBMhPIAGAEIALAMQAXAUASATQAYAbAJAUQAMAbgMATIgCAEIgGALQgMAOgQADIgJABQgUAAgVgQg");
	this.shape_61.setTransform(-37.9,105.1,1,1,0,0,180);

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
	this.shape_75.graphics.f("#EB8972").s().p("AhegpIC9gxIggCLIh0Aqg");
	this.shape_75.setTransform(-32.9,93.8,1,1,-17.6);

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
	this.shape_14.graphics.f("#CB5372").s().p("AiXg/IEvARQAAADgSAiQgTAhgfAnQhAgqgrAKQgrAKgWAXQgggqgfhVg");
	this.shape_14.setTransform(-12.4,61,0.697,0.697);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5B090").s().p("AhVgHQAVgXAsgKQAqgKBAApQgjApgtAJQgGACgFAAQgnAAgpgyg");
	this.shape_15.setTransform(-12.6,66.1,0.697,0.697);

	this.instance = new lib.紅暈();
	this.instance.setTransform(16.8,55.4,0.895,0.895,-2.7,0,0,9,4.4);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-41.9,50.5,0.895,0.895,-2.7,0,0,8.8,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAg");
	this.shape_16.setTransform(13.8,-4.4,0.697,0.697);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBDAC8").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape_17.setTransform(13.3,-7.1,0.697,0.697);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBDCD9").s().p("AAAAAIABAAIgBAAg");
	this.shape_18.setTransform(8.2,-17.1,0.697,0.697);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8C589").s().p("AguAJIAAgJIADgHQAIgSASgGQARgGARAJQAOAFAKANQAEAIADAJIgBAAQgCgCgNgFQgUgJgTAJQgVAMgFAWQgLgJgCgQg");
	this.shape_19.setTransform(-13.6,49.2,0.697,0.697);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#471600").s().p("AoRHUIgNgMQgIgIgEgIQhjiCAFicQAEgzANgvQAjhmBbg+QBRg6BlgIIgqglQgEgeALgWQAKgbARgYQATgaAbgUQAegYAjgQQBQgnBagYQAzgOA4ABQBZgFBQAuIBaAyQBJAnBHgaQgDAMgFAJQgLAVgZAJIAAADQAWAMAWAPQA4ArArA7QAsA8ARBIQALAvAFAuQAHAugBAyQAGAxACA0IgUBvQgVBAgeA/QAAhRgYhbQgRhGg+i1QgSAdgiAZQg9A2gzgOIgNgDQAZgSAFgMQADgCAKgkQAIgdgBgkQABgcgIgYQhTBvifBBQifBDiCgWQA0g8ALghQAJghAAgGQABgVgFgeQhOBihoBLQhqBLh1AeQgQBBAGAyQgBAKAPBTQgEgFgDgFg");
	this.shape_20.setTransform(-11.1,5.4,0.697,0.697);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5F2900").s().p("AI4IcIgCAEIAFg+QAXg/AMg/QAMg5AJg2QAGg0ABgxQACgzgHguQgGgvgKguQgRhIgsg8Qgrg7g5grIgsgbIABgDQAZgKAKgTQAFgKAEgMQhHAahKgnQgrgWgugcQhQguhaAFQg2gBg0AOQhbAYhQAoQgjAPgdAYQgcAUgTAaQgRAXgKAcQgLAWAFAeIAoAlQhjAIhRA7QhVA9gaBlQgMAwgEAyQgNCcBbCDQAEAIAHAHQgYgWgQgEQgWgFgZAHQgzhzgLiNQgEg4ACg4QABg2AJg1QAahMBChIQA1g+A4gaIALgFQBiiqDGhHQDFhFDNA3QBNAVB8BjQAOADAwAtQAvArADALQBdBdAgCiIAlClQASBUgVBWQgXBUgkBJQgfA3glA7QAHgSgDAEg");
	this.shape_21.setTransform(-10.5,4.5,0.697,0.697);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AAQAuQhAgFAGg4QACgjAbADQAFABADAEQAFANAFAMQAAACADADIAKAJQAcATgDAQQgCAQgNAAQgFAAgHgCg");
	this.shape_22.setTransform(5.5,45.4,0.697,0.697);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAqQgNgBgKgPQgLgNAAgQQADgPANgLQAMgNANAAQAOACALAQQALAMgDAPQgBARgOALQgKAMgNAAIgCgBg");
	this.shape_23.setTransform(10.3,39.1,0.697,0.697);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLCEQgrgDgagrQgagpAGg1QADg1AjglQAggnAqAGQAsADAZArQAbArgHA0QgEA2giAkQgdAhglAAIgIgBgAhDAnQgHA7BDAFQAWAJADgXQADgQgagVIgLgKQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgIgMgEgNQgDgEgFgBIgGAAQgWAAgBAfgAARg9QgMALgEAPQABATAKAMQAKANAOABQAPABAMgLQANgLACgRQADgQgMgNQgLgPgNgCIgBAAQgPAAgMANg");
	this.shape_24.setTransform(7.3,41.4,0.697,0.697);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAQAtQhAgGAGg3QAEgjAYAEQAFAAAFADQAEAPAGALQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQAEAFAHAFQAaAUgCAOQgBASgNAAQgGAAgHgDg");
	this.shape_25.setTransform(-32.1,42.7,0.697,0.697);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAqQgQAAgJgPQgLgOACgQQACgPALgKQAOgOAMABQAOABALAPQAMANgDAOQgBASgPALQgJALgMAAIgCAAg");
	this.shape_26.setTransform(-27.4,36.4,0.697,0.697);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKCFQgsgFgagrQgagoAFg1QAFg2AhgkQAignAoAGQAtADAZArQAaArgFAzQgGA3ggAkQggAhgkAAIgGAAgAhEAnQgFA6BBAGQAZAKABgaQACgOgYgWQgIgFgDgEQgDgCABgDQgJgLgDgOQgFgEgFAAIgFAAQgVAAgDAfgAAQg9QgLAKgDAPQgBATAKANQAJANAQAAQAPADALgMQAPgLAAgSQADgPgLgOQgLgOgOgCIgDAAQgNAAgMANg");
	this.shape_27.setTransform(-30.3,38.6,0.697,0.697);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaggQBWgjA5AjQgKgFhIAFQhKAGhNBNQAUg1BGgeg");
	this.shape_28.setTransform(-31.9,25.3,0.697,0.697);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AByAqQhkhMhCACQg5ACgLAFQAtggBKATQAxARArAmQAgAdgCAAIgHgEg");
	this.shape_29.setTransform(10.5,25.5,0.697,0.697);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBD9B1").s().p("AAPCWQgggCgXggQgHgNgKgLIgBgEQgEgFgCgJQgSgpADgkQAJhdAhglQADgDADgBQADgEADAAQABgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQADgDAFgBIgBADIAAABQALgCAFgCQAQgDANACQAHACAHAEIACACQAZALAJAfQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAIgDAJIgBgBIgIAQQgKAVgIAXQggBIgCBRQgCADACAFIABAGIgBABIAAALg");
	this.shape_30.setTransform(-53.7,45,0.697,0.697);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBD9B1").s().p("AhMCUQAKggACgdIgBgIIABgLIAAgFIABgEIAAgEQAAgfgDgeQgEgFAAgGQgCgCAAgFQABgDgCgFQgDgZADgdIABgBIgBgCIACgEIgBAAQABgOACgJIgBgDQATgUAXgIIATgEIANAEQAPACAJAMQAEgBABACIABACQASAQAKAhQASAvgEAfQgFA9grAxQglAlgvAHIgNABIgHgEg");
	this.shape_31.setTransform(33.5,52.6,0.697,0.697);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_32.setTransform(-43.2,17.9,0.697,0.697);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDE5C3").s().p("AgmHDQgSAAgQgFIgLgFIgagJQgRgIgRgEQgJgFgLAAIhngeQgigNgegPQgTgJgRgNIgNgKQgfgYgJgsIgHgUIAAgHIAAgBIAAgDQgCgEACgCQABg5AWgzIANgfIAFgKIABAAIACgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgCIgDgFQgKgeAHhKIABgFQgBgJACgHQgWh4BJhdQAtg6A9gpQBohJB8AFQB6ADByAtQCCA2AsCCQAoB0gzB1IgCAAIABACIgBACQgDAogHApIAAADIgBAFIgDASIABAAIgCARIgBACIABACIAAAAQgDAVADARIAAAFQAAAFABAAQAAAEADAFQACAWAAAVIAAADIAAADIgBALIAAAGQgBATgHAXIAAAAIgFAMQgBAAABABIgBACIgBABIAAADQgMAegXAVQgNALgKAGQgQAKgPAGIgIADIgBABQgcAIgdACIiaAHIhOANQgJACgIAAIgHAAgAhhGxQgRgIgRgEIgFgBQAUAFATAIIAAAAgAlNiIIABgCIgBAAg");
	this.shape_33.setTransform(-9.8,31.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E85298").s().p("AgiCnIgKhEQgKgsgsgMIhDgMQgogJAkgUIA9gcQAmgXgCguIgJhDQgDgpAeAbIAvAxQAgAeArgRIA9geQAmgPgRAlIggA8QgSArAdAgIAvAxQAbAfgogEIhDgMQgugEgYAmIgeA9QgKAQgHAAQgJAAgEgVg");
	this.shape_34.setTransform(-59.8,13.2,0.697,0.697,0,0,0,0.4,-2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5F2900").s().p("AijDRQgSgTgOgVQgbgngLgjQgehlA7htQA7hrByghQBggcBRAxQAkAXAYAiQAPAQAIAWQAIAHAHAJQgTAEgTAIIg+AFQimAqANChQgLgNgHgQQgihEAdhMQgRAMgQAOQimCSCJCqQghgQgkgpg");
	this.shape_35.setTransform(-76.4,26,0.697,0.697);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#471600").s().p("AidC+QiJiqCmiTQARgOAQgMQgcBNAhBFQAHAPALANQgLiiCkgpIA+gGIAmgMIAPANIAPAuQAYBVgpAuQgaAZhQAaIgTAHQhAAVgVAUQgnAlAQBFQgtgegTgUQgGgIgRggIgLArQgDAUAGAZIACAIQgNgEgMgHg");
	this.shape_36.setTransform(-72.1,31.2,0.697,0.697);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5F2900").s().p("AhyEFQghgQgjgpQgTgTgNgVQgcgngKgjQgehlA7htQA6hsBzggQBggcBQAxQAkAXAZAiQAOAQAJAWQAIAHAHAJIAPANIAOAtQAYBUgpAtQgaAbhPAaIgUAGQhAAWgWAUQgmAlAPBFQgsgegTgUQgFgIgSggIgLArQgDAUAGAYIADAJQgOgDgMgIg");
	this.shape_37.setTransform(-74.8,26.4,0.697,0.697);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4F88C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_38.setTransform(24.4,-12.9,0.697,0.697);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAVQgJgEgCgLQgDgHAEgIQAFgLALgCQAHgDAJAGQAHAEADAIQADAKgEAHQgFAKgJACQgFACgCAAQgFAAgFgDg");
	this.shape_39.setTransform(-57.9,47.1,0.697,0.697);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAVQgJgEgDgKQgDgHAFgJQAFgJAIgDQAIgEAIAGQAJAFAEAJQAEAIgGAHQgEALgIABQgEACgEAAQgEAAgGgDg");
	this.shape_40.setTransform(35.5,47.9,0.697,0.697);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E85298").s().p("AgMCjIgWhAQgTgqgtgDIhEABQgogCAegaIA3gnQAhgegKgtIgWhAQgLgoAjAVIA3AoQAnAXAlgZIA3goQAigXgKAoIgUBBQgJAtAjAdIA4AlQAgAZgpAEIhEABQguAFgRApIgUBCQgHATgIAAQgFAAgIgTg");
	this.shape_41.setTransform(39.3,23.5,0.697,0.697,0,0,0,0.8,-3.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5F2900").s().p("AA9glQgMgSgOgPQAJBPgvA8QgKAOgOAJQAxiZiXhRIg6gUQgSgMgRgJQAJgGAKgGQANgTATgMQAfgbApgNQBagdBWAzQBnA8AgB2QAfB2g3BdQgSAggkAeQgTARgWAQQgtAegjAIQCtiEh9i3g");
	this.shape_42.setTransform(53.5,40.2,0.697,0.697);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#471600").s().p("ABPDiQAMgXACgUIAAgtQgaAcgHAGQgXAPgxATQAfhAgcguQgRgZg5gkIgRgKQhIgrgSghQgdg2AshNIAZgpIASgJQAQAJASAMIA6AUQCXBRgzCZQANgJALgOQAyg6gKhRQAOAQAMARQB+C3iuCEQgOAEgOAAIAFgHg");
	this.shape_43.setTransform(47.1,43.6,0.697,0.697);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5F2900").s().p("AAYERQAMgXACgUIAAgtQgZAcgHAGQgVAPg0ASQAhg/geguQgRgZg5gkIgRgLQhHgsgTgfQgdg2AthNIAYgpIASgJQAJgHAJgFQAOgTASgMQAggcAogNQBYgcBZAzQBnA8AfB2QAfB2g2BcQgSAggkAfQgTARgXAPQgsAfgkAHQgNAFgPAAIAFgHg");
	this.shape_44.setTransform(51.1,40.4,0.697,0.697);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CB5372").s().p("AiXguIEvgYQAAADgOAlQgOAjgaAqQhEghgpAQQgqAQgSAYQglglgrhPg");
	this.shape_45.setTransform(-14.4,61.3,0.697,0.697);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5B090").s().p("AhUACQASgYArgPQAogQBEAhQgdAtgrAPQgKAEgIAAQgkAAgrgqg");
	this.shape_46.setTransform(-13.5,66.1,0.697,0.697);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_47.setTransform(3.5,-7.3,0.697,0.697);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBDAC8").s().p("AABAAIAAAAIABAAIgBAAgAAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAg");
	this.shape_48.setTransform(2.7,-9.8,0.697,0.697);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8C589").s().p("AgtANQgCgFABgEIACgHQAFgUASgHQARgJAQAGQAPAEAMAMQAFAGAEALIgBAAIgQgGQgVgGgSAMQgTANgCAXQgMgHgEgQg");
	this.shape_49.setTransform(-16.6,49.7,0.697,0.697);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#471600").s().p("AnpH4IgOgKQgJgGgFgJQhzhzgPibQgCgyAFgyQAVhrBThHQBJhEBigWIgtgfQgJgdAIgYQAHgcAOgZQAPgcAYgYQAagbAhgVQBKgxBXgjQAygVA3gHQBXgQBVAjQAyAVAtARQBOAdBDgjQgCALgEALQgIAVgXANIAAADQAYAJAXAMQA+AjAyA1QA0A2AaBFQAQAtAMAvQAOAtAEAwQANAvAIAzQgBA4gEA6QgNBBgWBDQgKhQgjhYQgahChWiqQgOAfgdAcQg2A9g1gHIgNgCQAWgVAFgMQACgDAEgiQAFgfgGgjQgDgegKgXQhEB5iVBVQiVBYiDgGQAshBAFgiQAFgjgBgGQgBgUgKgdQg/BrhfBXQhfBZhvAtQgIBCANAxQABAKAZBRQgFgEgEgGg");
	this.shape_50.setTransform(-18.1,7.7,0.697,0.697);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5F2900").s().p("AohIOQgVgDgZAKQhAhqgeiLQgLg3gGg4QgGg2ACg3QAPhNA4hPQAuhFAzghIAKgGQBLi1C7hhQC8heDRAcQBOALCIBRQAPABA1AmQA1AlAEAKQBoBRA1CcQAeBRAdBOQAcBQgJBYQgMBWgaBOQgYA6gdBAQAFgUgCAFIgCAEIgDg+QAPhBAEhAQADg6ACg3QgBg0gFgxQgFgygNgrQgMgvgQgtQgahGg0g1Qgyg1g+gkIgvgVIABgCQAXgNAIgVQADgLACgLQhDAihOgcQgtgRgygWQhVgihWAQQg4AGgyAVQhWAkhLAxQghAUgZAcQgZAXgPAdQgPAZgFAcQgJAYAJAcIAtAgQhiAVhIBFQhMBFgNBqQgGAyADAyQAHCdBsB0QAFAIAIAHQgagTgSgCg");
	this.shape_51.setTransform(-18.2,3.9,0.697,0.697);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AAVAsQhBAEgBg5QgDgiAcgBQAFAAADAEQAHAMAGALQABACADACIALAJQAfAPgBAPQAAATgQAAIgJgBg");
	this.shape_52.setTransform(1.8,43.2,0.697,0.697);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAeQgMgMgDgRQACgOAKgMQALgPAOgCQANABANANQANAMgBAQQABAPgMANQgKAOgQABQgLAAgMgNg");
	this.shape_53.setTransform(5.7,36.4,0.697,0.697);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhEBgQgfgmgCg3QgDgyAdgqQAcgqArgBQAqgCAfAmQAgApABA1QADA0gdApQgcAngsADIgEAAQgmAAgeglgAAdBVQABgPgegSIgKgIQgDgCAAgCQgIgLgIgMQgDgEgFABQgbgBADAiQABA8BBgEQAZAFgBgXgAAJg/QgJAMgBAQQABASALAMQAMALAOgBQAPgBALgMQALgMgBgRQABgRgNgLQgNgOgOAAQgPACgKAOg");
	this.shape_54.setTransform(3.1,39,0.697,0.697);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AAVAsQg/ACgDg3QgBgjAZAAQAFAAAFADQAGANAIAKQgBADAEABQAEAEAIAEQAcARAAAOQABAUgQAAIgKgBg");
	this.shape_55.setTransform(-35.8,45.4,0.697,0.697);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAeQgMgMAAgSQAAgNAKgMQALgPAPgCQAMAAAMAOQAOALgBAQQACAQgNANQgKAOgPAAIgBABQgNAAgLgNg");
	this.shape_56.setTransform(-32,38.6,0.697,0.697);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhEBfQgfglgDg3QgBg0AcgoQAdgrAqABQArgEAfAoQAfAnACA1QABA2gbAoQgeAogqACIgDAAQgnAAgfgmgAAdBUQAAgOgcgTQgGgEgEgEQgEgBABgDQgKgKgFgNQgFgDgFABQgagBABAiQADA6A/gCQAbAGgCgZgAAihPQgPABgLAPQgIAMAAAPQAAATAKAMQAMALAQgCQAOABAKgMQANgOgDgRQACgQgNgMQgNgNgNAAIgBAAg");
	this.shape_57.setTransform(-34.5,41.2,0.697,0.697);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfgfQBQgvA9AbQgKgDhGAOQhJAQhDBWQANg5BCgkg");
	this.shape_58.setTransform(-37.8,28.4,0.697,0.697);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AB2AgQhtg+hCALQg4AJgKAGQAoglBMAJQAyAKAwAgQAkAZgDAAIgGgDg");
	this.shape_59.setTransform(4.2,22.5,0.697,0.697);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FBD9B1").s().p("AAqCVQgjACgZgcQgIgMgLgJIgCgFQgEgEgEgIQgXgngCgmQgDhbAbgpQADgEADgBQADgFACAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQADgEAEgBIAAADIgBABIATgGQANgFANAAIAPADQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAQAaAHANAdQAAABgBAAQAAABAAAAQAAABAAAAQAAABABABIgBAIIgCAAIgGAQQgGAWgGAZQgWBKAJBRQgBAEADAEIABAGIAAABIABALg");
	this.shape_60.setTransform(-57.4,50.4,0.697,0.697);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBD9B1").s().p("AgyCYQAFgigBgcIgCgIIAAgLIgCgGIABgDIgBgEQgEgfgHgdQgEgGgBgFQgCgBgBgFQAAgEgCgFQgHgXAAgeIAAgBIAAgCIABgEIgBAAIgBgXIgBgDQAQgWAXgLIASgGIAPACQANgBALALQAEgBABABIABACQAUAOAOAgQAYArAAAfQADA9gkA3QghAqgsANIgNACQgDgCgEAAg");
	this.shape_61.setTransform(30.1,47.1,0.697,0.697);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDE5C3").s().p("AgfKHQgHgEgJgCIgmgJQgagHgZgCQgOgGgQACIiYgYQgzgLgsgQQgdgJgbgQIgUgLQgxgdgVg8IgOgbIgBgLIAAgBIgBgFQgDgEABgEQgIhRAWhMQAFgZAHgWIAGgQIABAAIACgJQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIABgDIgFgHQgTgogFhsIAAgHQgCgMABgMQg2ilBWiTQA2haBPhHQCGh7C1gPQCrgTCqAqQDDA1BYCwQBOCegyCzIgCAAIABADIAAACQACA4gDA7IABAEIAAAHIgBAcIABAAIABAXIAAAEIABABIAAABQAAAfAHAXIABAIQABAGACABQABAFAEAGQAIAfADAfIABAEIgBAEIACAQIACAIQABAcgFAiIgBAAIgEASQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIgCADIAAACIgBADQgKAtgdAjQgRARgNALQgVARgUAMQgHADgEADIgBABQglAQgqAKIjaAmQg3ASg5AQQgQAFgRACQgNACgKAAQgNAAgMgCgAhEJ4QgZgJgagCIgGAAQAdAFAcAGIAAAAgAoAiGIACgCIgBAAIgBACg");
	this.shape_62.setTransform(-14.4,31.9,0.697,0.697);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E85298").s().p("AgSCjIgShBQgQgqgugHIhEgCQgogFAggYIA5gkQAjgcgIgtIgShBQgIgpAhAYIA1AqQAkAZAogWIA5gmQAjgUgMAnIgYBAQgLAsAhAfIA1ApQAeAbgoAAIhEgCQguACgTApIgYA/QgJATgFAAQgIAAgGgUg");
	this.shape_63.setTransform(-67.1,19.5,0.697,0.697,0,0,0,-0.5,-3.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5F2900").s().p("Ah/DiQgUgRgRgTQgggigOgiQgshiAshxQAshzBtgvQBcgpBWAnQAnARAcAfQARAOALAVQAJAGAIAHQgRAHgTAKIg8AOQifA/AgCdQgMgKgIgQQgrhAAThOQgPAOgPAQQiRCnCeCXQgjgMgpgkg");
	this.shape_64.setTransform(-82.4,34.9,0.697,0.697);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#471600").s().p("AiADUQieiWCSinQAOgQAPgOQgSBPArA/QAJAPAMALQghieCeg/IA8gNQATgKASgHIAQALIAUArQAjBSgiAyQgXAfhLAhIgTAJQg8AegSAXQgiAqAZBCQgxgYgVgSIgdgkQgBAWgDAWQgBAUAKAYIADAHQgOgBgNgGg");
	this.shape_65.setTransform(-77.2,39,0.697,0.697);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5F2900").s().p("AhOEOQgjgLgpgkQgUgRgRgUQgggigPgiQgrhiAshxQAshyBtgwQBcgpBWAnQAnASAcAeQAQAPAMAUQAJAGAIAIIAQALIAUArQAkBRgjAxQgWAfhMAjIgTAIQg8AfgTAXQgjApAaBDQgwgYgVgSQgGgHgWgdIgFAsQgBAUAKAYIADAHQgNgBgNgGg");
	this.shape_66.setTransform(-80.3,35.1,0.697,0.697);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAXQgLgEgDgKQgEgIADgHQAEgLAKgEQAHgEAKAFQAHACAEAIQAEAKgCAHQgFALgIADQgGADgEAAIgGgBg");
	this.shape_67.setTransform(-60.8,53.2,0.697,0.697);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAXQgKgEgEgJQgEgIAEgIQADgJAIgEQAJgGAHAEQAKAEAGAJQAEAIgEAHQgEAMgHACQgGADgFAAIgHgBg");
	this.shape_68.setTransform(31.9,41.7,0.697,0.697);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E85298").s().p("AACCrIgdg9QgXgnguADIhDAKQgoADAbgeIAwgwQAegggQgrIgfg9QgPglAlAQIA8AgQAqARAhgdIAxgvQAfgbgFApIgLBCQgDAuAmAZIA9AdQAjAVgoAJIhEAKQgsALgMArIgLBEQgFAUgIAAQgHAAgKgQg");
	this.shape_69.setTransform(32.8,17.4,0.697,0.697,0,0,0,0.3,-2.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5F2900").s().p("ABBgtQgPgQgPgNQAUBNgqBBQgIAQgLALQAdifigg8Ig9gMQgSgKgSgHIAQgOQAMgUAQgPQAcgfAmgTQBWgoBcAoQBuAtAuByQAvBwgqBjQgOAiggAjQgQATgUASQgoAlgjAMQCciaiVikg");
	this.shape_70.setTransform(48,31.8,0.697,0.697);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#471600").s().p("ABuDSQAIgZAAgTIgFgsQgWAegHAHQgUASgxAZQAYhDgjgqQgSgWg9gdIgTgIQhMgigXgdQgkgyAihSIATgsIARgLIAkAQIA9ANQCgA8gfCeQAMgLAJgPQAqhAgUhPQAPAOAOAPQCVCmibCZQgNAGgNABIADgHg");
	this.shape_71.setTransform(42.6,36.2,0.697,0.697);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5F2900").s().p("AA9ENQAJgYAAgUIgGgsQgWAfgGAHQgVARguAZQAXhDgjgpQgUgWg8geIgTgHQhNgjgXgeQgjgwAihSIATgsIAQgLQAHgIAKgGQALgVAQgPQAcgfAngSQBVgoBcAnQBvAtAuByQAuBwgqBjQgOAigfAkQgQATgVASQgoAkgiANQgNAFgOACIADgIg");
	this.shape_72.setTransform(46.1,32.1,0.697,0.697);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FDE5C3").s().p("Ag3KHQgaABgYgHIgPgHIglgOQgZgLgYgFQgNgIgPAAIiVgrQgxgTgqgVQgbgNgZgTIgSgOQgtgjgNg+IgKgdIAAgKIAAgBIAAgGQgDgFACgDQADhRAfhJQAJgYAJgVIAIgPIACAAIACgJQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgCIgFgHQgNgrAJhrIABgIQAAgMADgLQghisBpiFQBBhTBYg8QCUhpC0AIQCuAECkBBQC7BNA/C6QA5CnhJCpIgCAAIAAADIAAACQgFA6gLA6IAAAFIAAAHIgFAbIABAAIgCAXIgBAEIABACIAAABQgEAeADAYIABAIQAAAGACABQgBAFAFAHQADAggBAeIABAEIgBAEIgBAQIAAAIQgCAdgJAgIgBAAIgGASQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAABIgBAEQgRArghAeQgTAQgOAJQgXAOgVAJQgHACgFADIgBABQgoALgqAEIjdAJIhxATQgMADgMAAIgKgBgAiMJuQgYgMgZgGIgHgBQAdAIAbALIAAAAgAnfjEIABgCIgBgBIAAADg");
	this.shape_73.setTransform(-9.8,31.8,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-43.2,y:17.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:8.2,y:-17.1}},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_32,p:{x:-50.1,y:22.3}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_18,p:{x:-3.6,y:-19}},{t:this.shape_48},{t:this.shape_47},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_46},{t:this.shape_45}]},4).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_73},{t:this.shape_32,p:{x:-43.2,y:17.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:8.2,y:-17.1}},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1,p:{regX:8.8,regY:4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:-41.9,y:50.5}},{t:this.instance,p:{regX:9,regY:4.4,scaleX:0.895,scaleY:0.895,rotation:-2.7,x:16.8,y:55.4}},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_32,p:{x:-50.1,y:22.3}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_18,p:{x:-3.6,y:-19}},{t:this.shape_48},{t:this.shape_47},{t:this.instance_1,p:{regX:8,regY:4.2,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:-45.1,y:54.8}},{t:this.instance,p:{regX:8.3,regY:4.8,scaleX:0.894,scaleY:0.894,rotation:-10.2,x:14.1,y:51.8}},{t:this.shape_46},{t:this.shape_45}]},3).wait(4));

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
	this.shape.graphics.f("#EA6240").s().p("AgrAuQgUgQgCgbQAAgYASgWQATgSAcgBQAYgCAUASQAVATAAAZQACAYgUAUQgSAUgaABIgEAAQgZAAgRgRg");
	this.shape.setTransform(32.6,-3.6,0.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA6240").s().p("AgrAwQgVgUAAgbQgCgYAUgSQASgVAaAAQAagCAWAUQASARABAZQAAAYgQAXQgUARgbACQgZAAgUgQg");
	this.shape_1.setTransform(-55,1,0.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgRALQgIgEAAgHQAAgFAIgGQAIgFAJAAQAKAAAIAFQAHAGAAAFQAAAHgHAEQgIAGgKAAQgJAAgIgGg");
	this.shape_2.setTransform(-11.1,-9,1.846,1.846,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNBEQgogcgFgsQgEguAhglQADgDAEgCQBVBgB8gJQgDAegYAaQgiAlgzAFIgMAAQgqAAgigZg");
	this.shape_3.setTransform(14.6,-16,0.7,0.7,0,0,0,0,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhQBNQgfgWgJgeQB9gPBBhvIAIAGQAnAcAEAvQAFArghAlQghAkgzAFIgLABQgrAAgjgZg");
	this.shape_4.setTransform(-36.5,-16,0.7,0.7,0,0,0,-0.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAMBdQgyABgShEQgHhIgCgJIACghQAsgDAugBIAeACIABAuIgCA8QgCAPgCAjQgHAbgfAAIgCAAgABpAvIgBgvIADg/IACgaQA+AFA9ANQgGASgKA7QgUBDgzABIgCAAQghAAgFgbgAjbACQgJgmgDgUQA5gRA+gKIABAPQAEAxAAANQgBAPABAhQgFAaghABQg1AAgVhDg");
	this.shape_5.setTransform(-8.3,-41.9,0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AiKBLQgXhfABhJQABg6ARgYQASgZApAGQA7AKB5B7QAiApAfAdQhDAmhDAwQhKA0g5AxIgjh5g");
	this.shape_6.setTransform(-48.6,-35.9,0.7,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("AjqBUQgdiJACheQABhHAjgqQAigqA6AIQB0ASChCKQBHA8AvA0Qg2Aag0AdQgegdgjgpQh4h7g8gKQgpgGgSAZQgRAYgBA6QgBBJAYBfIAiB5QgvAnglApQgHgwgiikg");
	this.shape_7.setTransform(-48.2,-37.4,0.7,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9999").s().p("ABzDYIAhh6QAVhfgEhJQgBg5gQgYQgTgYgoAGQg8ALh2B/QglAmgaAhQg2gfg2gXQAug1BHg+QCdiNB0gTQA7gJAkAoQAhApACBHQAFBfgaCJQgeCmgJAvQgmgmgvgpg");
	this.shape_8.setTransform(29.8,-41.1,0.7,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF99").s().p("AgYBhQhDgthDglQAageAlgpQB1h+A8gMQApgFATAXQAPAYABA5QAFBJgVBfIghB7Qg8gxhJgyg");
	this.shape_9.setTransform(30.3,-39.6,0.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AswEUQgDjGEDjMQB7hmCOgzIBDgUQADAUAIAoQAVBDA1AAQAigBAEgaQgBghABgRQAAgOgDgwIgBgPIAwgFIgCAhQACAJAIBKQASBEAygCQAgACAIgcIAEgzIACg9IgBguIA0ABIgCAaIgEA+IABAyQAGAcAjgCQAygBAUhCQALg9AFgSIAkAIQC1AxCKB7QDjDGACDFQgBAfgGAcQgiidjKhzQjwiIlRACQlSAEjuCNQjKB2gdCdQgHgbAAgfg");
	this.shape_10.setTransform(-8.4,-23.7,0.7,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CC6633").ss(1,1,1).p("AGIF/QiiCbjAAUQi/AUjBiaQjBiagUjxQgVjwCliuQCkiqDvgFQDsgFCtClQCsCjgHDoQgHDoijCcg");
	this.shape_11.setTransform(-8.6,35,0.7,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9999").s().p("ApsKVQj4kJAEl7QAEl6DykJQD2kOFjgGQFhgIEBEAQEBEBAOFzQAMFyjZEKQjaEKmXAZQgiACggAAQlpAAjjjygAgekIQjuAFilCqQilCrAWDzQAUDxDBCaQDBCaC+gUQDAgUCjibQCiidAIjpQAGjoisiiQimifjjAAIgQAAg");
	this.shape_12.setTransform(-7.4,14.3,0.7,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5B090").s().p("AhXAXQgUgEgHgLIALgGQAegMAWgFQAqgKApADQAuAEAlASQgKAGgOADQgUAFgZgHQgbgHgRAEIgWAIIgXAIQgQAEgOAAIgOgBg");
	this.shape_13.setTransform(-13.5,66.4,0.7,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CB5372").s().p("Ah7AnQgGgdAfgWQAggYAngGQAmgGAhABQAjACAoAeIAEAKQAFARgIAOQgDAHgHAGQglgTgtgEQgpgDgrAKQgWAFgdAOIgMAGQgDgEgBgFg");
	this.shape_14.setTransform(-13.2,63.6,0.7,0.7);

	this.instance = new lib.紅暈();
	this.instance.setTransform(16.1,56.6,0.898,0.898,-2.7,0,0,8.5,4.3);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-39.5,52.4,0.898,0.898,-2.7,0,0,8.7,4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAg");
	this.shape_15.setTransform(14.4,-5.3,0.7,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBDAC8").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape_16.setTransform(13.9,-8,0.7,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBDCD9").s().p("AAAAAIABAAIgBAAg");
	this.shape_17.setTransform(8.8,-18,0.7,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8C589").s().p("AguAJIAAgJIADgHQAIgSASgGQARgGARAJQAOAFAKANQAEAIADAJIgBAAQgCgCgNgFQgUgJgTAJQgVAMgFAWQgLgJgCgQg");
	this.shape_18.setTransform(-13.1,48.6,0.7,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#471600").s().p("AoRHUIgNgMQgIgIgEgIQhjiCAFicQAEgzANgvQAjhmBbg+QBRg6BlgIIgqglQgEgeALgWQAKgbARgYQATgaAbgUQAegYAjgQQBQgnBagYQAzgOA4ABQBZgFBQAuIBaAyQBJAnBHgaQgDAMgFAJQgLAVgZAJIAAADQAWAMAWAPQA4ArArA7QAsA8ARBIQALAvAFAuQAHAugBAyQAGAxACA0IgUBvQgVBAgeA/QAAhRgYhbQgRhGg+i1QgSAdgiAZQg9A2gzgOIgNgDQAZgSAFgMQADgCAKgkQAIgdgBgkQABgcgIgYQhTBvifBBQifBDiCgWQA0g8ALghQAJghAAgGQABgVgFgeQhOBihoBLQhqBLh1AeQgQBBAGAyQgBAKAPBTQgEgFgDgFg");
	this.shape_19.setTransform(-10.6,4.5,0.7,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F2900").s().p("AI4IcIgCAEIAFg+QAXg/AMg/QAMg5AJg2QAGg0ABgxQACgzgHguQgGgvgKguQgRhIgsg8Qgrg7g5grIgsgbIABgDQAZgKAKgTQAFgKAEgMQhHAahKgnQgrgWgugcQhQguhaAFQg2gBg0AOQhbAYhQAoQgjAPgdAYQgcAUgTAaQgRAXgKAcQgLAWAFAeIAoAlQhjAIhRA7QhVA9gaBlQgMAwgEAyQgNCcBbCDQAEAIAHAHQgYgWgQgEQgWgFgZAHQgzhzgLiNQgEg4ACg4QABg2AJg1QAahMBChIQA1g+A4gaIALgFQBiiqDGhHQDFhFDNA3QBNAVB8BjQAOADAwAtQAvArADALQBdBdAgCiIAlClQASBUgVBWQgXBUgkBJQgfA3glA7QAHgSgDAEg");
	this.shape_20.setTransform(-10,3.7,0.7,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAQAuQhAgFAGg4QACgjAbADQAFABADAEQAFANAFAMQAAACADADIAKAJQAcATgDAQQgCAQgNAAQgFAAgHgCg");
	this.shape_21.setTransform(6.1,44.8,0.7,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAqQgNgBgKgPQgLgNAAgQQADgPANgLQAMgNANAAQAOACALAQQALAMgDAPQgBARgOALQgKAMgNAAIgCgBg");
	this.shape_22.setTransform(10.9,38.4,0.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLCEQgrgDgagrQgagpAGg1QADg1AjglQAggnAqAGQAsADAZArQAbArgHA0QgEA2giAkQgdAhglAAIgIgBgAhDAnQgHA7BDAFQAWAJADgXQADgQgagVIgLgKQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgIgMgEgNQgDgEgFgBIgGAAQgWAAgBAfgAARg9QgMALgEAPQABATAKAMQAKANAOABQAPABAMgLQANgLACgRQADgQgMgNQgLgPgNgCIgBAAQgPAAgMANg");
	this.shape_23.setTransform(7.9,40.7,0.7,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAQAtQhAgGAGg3QAEgjAYAEQAFAAAFADQAEAPAGALQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQAEAFAHAFQAaAUgCAOQgBASgNAAQgGAAgHgDg");
	this.shape_24.setTransform(-31.7,42,0.7,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAqQgQAAgJgPQgLgOACgQQACgPALgKQAOgOAMABQAOABALAPQAMANgDAOQgBASgPALQgJALgMAAIgCAAg");
	this.shape_25.setTransform(-27,35.7,0.7,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKCFQgsgFgagrQgagoAFg1QAFg2AhgkQAignAoAGQAtADAZArQAaArgFAzQgGA3ggAkQggAhgkAAIgGAAgAhEAnQgFA6BBAGQAZAKABgaQACgOgYgWQgIgFgDgEQgDgCABgDQgJgLgDgOQgFgEgFAAIgFAAQgVAAgDAfgAAQg9QgLAKgDAPQgBATAKANQAJANAQAAQAPADALgMQAPgLAAgSQADgPgLgOQgLgOgOgCIgDAAQgNAAgMANg");
	this.shape_26.setTransform(-29.8,37.9,0.7,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhwAvQBvABA3gwQA3gvAEgKQgQA/hYAlQgkAPghAAQgcAAgYgLg");
	this.shape_27.setTransform(-32.3,22.7,0.7,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA0BMQg2gSgogjQg1g1AFg3QABAMAbAyQAfA6B0AwQAIADgCAAQgDAAgkgKg");
	this.shape_28.setTransform(15.2,23.9,0.7,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBD9B1").s().p("AAPCWQgggCgXggQgHgNgKgLIgBgEQgEgFgCgJQgSgpADgkQAJhdAhglQADgDADgBQADgEADAAQABgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQADgDAFgBIgBADIAAABQALgCAFgCQAQgDANACQAHACAHAEIACACQAZALAJAfQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAIgDAJIgBgBIgIAQQgKAVgIAXQggBIgCBRQgCADACAFIABAGIgBABIAAALg");
	this.shape_29.setTransform(-53.4,44.4,0.7,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBD9B1").s().p("AhMCUQAKggACgdIgBgIIABgLIAAgFIABgEIAAgEQAAgfgDgeQgEgFAAgGQgCgCAAgFQABgDgCgFQgDgZADgdIABgBIgBgCIACgEIgBAAQABgOACgJIgBgDQATgUAXgIIATgEIANAEQAPACAJAMQAEgBABACIABACQASAQAKAhQASAvgEAfQgFA9grAxQglAlgvAHIgNABIgHgEg");
	this.shape_30.setTransform(34.2,52,0.7,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0072BD").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_31.setTransform(-42.8,17.1,0.7,0.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDE5C3").s().p("Ag3KHQgaABgYgHIgPgHIglgOQgZgLgYgFQgNgIgPAAIiVgrQgxgTgqgVQgbgNgZgTIgSgOQgtgjgNg+IgKgdIAAgKIAAgBIAAgGQgDgFACgDQADhRAfhJQAJgYAJgVIAIgPIACAAIACgJQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgCIgFgHQgNgrAJhrIABgIQAAgMADgLQghisBpiFQBBhTBYg8QCUhpC0AIQCuAECkBBQC7BNA/C6QA5CnhJCpIgCAAIAAADIAAACQgFA6gLA6IAAAFIAAAHIgFAbIABAAIgCAXIgBAEIABACIAAABQgEAeADAYIABAIQAAAGACABQgBAFAFAHQADAggBAeIABAEIgBAEIgBAQIAAAIQgCAdgJAgIgBAAIgGASQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAABIgBAEQgRArghAeQgTAQgOAJQgXAOgVAJQgHACgFADIgBABQgoALgqAEIjdAJIhxATQgMADgMAAIgKgBgAiMJuQgYgMgZgGIgHgBQAdAIAbALIAAAAgAnfjEIABgCIgBgBIAAADg");
	this.shape_32.setTransform(-9.3,31.1,0.7,0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E85298").s().p("AgiCnIgKhEQgKgsgsgMIhDgMQgogJAkgUIA9gcQAmgXgCguIgJhDQgDgpAeAbIAvAxQAgAeArgRIA9geQAmgPgRAlIggA8QgSArAdAgIAvAxQAbAfgogEIhDgMQgugEgYAmIgeA9QgKAQgHAAQgJAAgEgVg");
	this.shape_33.setTransform(-59.6,12.3,0.7,0.7,0,0,0,0.2,-2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F2900").s().p("AijDRQgSgTgOgVQgbgngLgjQgehlA7htQA7hrByghQBggcBRAxQAkAXAYAiQAPAQAIAWQAIAHAHAJQgTAEgTAIIg+AFQimAqANChQgLgNgHgQQgihEAdhMQgRAMgQAOQimCSCJCqQghgQgkgpg");
	this.shape_34.setTransform(-76.1,25.2,0.7,0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#471600").s().p("AidC+QiJiqCmiTQARgOAQgMQgcBNAhBFQAHAPALANQgLiiCkgpIA+gGIAmgMIAPANIAPAuQAYBVgpAuQgaAZhQAaIgTAHQhAAVgVAUQgnAlAQBFQgtgegTgUQgGgIgRggIgLArQgDAUAGAZIACAIQgNgEgMgHg");
	this.shape_35.setTransform(-71.8,30.5,0.7,0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5F2900").s().p("AhyEFQghgQgjgpQgTgTgNgVQgcgngKgjQgehlA7htQA6hsBzggQBggcBQAxQAkAXAZAiQAOAQAJAWQAIAHAHAJIAPANIAOAtQAYBUgpAtQgaAbhPAaIgUAGQhAAWgWAUQgmAlAPBFQgsgegTgUQgFgIgSggIgLArQgDAUAGAYIADAJQgOgDgMgIg");
	this.shape_36.setTransform(-74.6,25.6,0.7,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4F88C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_37.setTransform(25.1,-13.8,0.7,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKAVQgJgEgCgLQgDgHAEgIQAFgLALgCQAHgDAJAGQAHAEADAIQADAKgEAHQgFAKgJACQgFACgCAAQgFAAgFgDg");
	this.shape_38.setTransform(-57.5,46.5,0.7,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAVQgJgEgDgKQgDgHAFgJQAFgJAIgDQAIgEAIAGQAJAFAEAJQAEAIgGAHQgEALgIABQgEACgEAAQgEAAgGgDg");
	this.shape_39.setTransform(36.3,47.2,0.7,0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E85298").s().p("AgMCjIgWhAQgTgqgtgDIhEABQgogCAegaIA3gnQAhgegKgtIgWhAQgLgoAjAVIA3AoQAnAXAlgZIA3goQAigXgKAoIgUBBQgJAtAjAdIA4AlQAgAZgpAEIhEABQguAFgRApIgUBCQgHATgIAAQgFAAgIgTg");
	this.shape_40.setTransform(40.2,22.8,0.7,0.7,0,0,0,0.9,-3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5F2900").s().p("AA9glQgMgSgOgPQAJBPgvA8QgKAOgOAJQAxiZiXhRIg6gUQgSgMgRgJQAJgGAKgGQANgTATgMQAfgbApgNQBagdBWAzQBnA8AgB2QAfB2g3BdQgSAggkAeQgTARgWAQQgtAegjAIQCtiEh9i3g");
	this.shape_41.setTransform(54.3,39.5,0.7,0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#471600").s().p("ABPDiQAMgXACgUIAAgtQgaAcgHAGQgXAPgxATQAfhAgcguQgRgZg5gkIgRgKQhIgrgSghQgdg2AshNIAZgpIASgJQAQAJASAMIA6AUQCXBRgzCZQANgJALgOQAyg6gKhRQAOAQAMARQB+C3iuCEQgOAEgOAAIAFgHg");
	this.shape_42.setTransform(47.9,42.9,0.7,0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5F2900").s().p("AAYERQAMgXACgUIAAgtQgZAcgHAGQgVAPg0ASQAhg/geguQgRgZg5gkIgRgLQhHgsgTgfQgdg2AthNIAYgpIASgJQAJgHAJgFQAOgTASgMQAggcAogNQBYgcBZAzQBnA8AfB2QAfB2g2BcQgSAggkAfQgTARgXAPQgsAfgkAHQgNAFgPAAIAFgHg");
	this.shape_43.setTransform(51.8,39.7,0.7,0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6240").s().p("AghA1QgXgLgHgbQgFgXAOgZQAPgWAagGQAYgHAYAOQAYAPAFAYQAGAYgPAXQgOAXgaAGQgJADgHAAQgRAAgPgLg");
	this.shape_44.setTransform(19.8,-9.7,0.7,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA6240").s().p("AggA3QgZgQgFgZQgHgZAQgVQANgYAagFQAZgHAaAPQAVANAFAZQAFAXgKAaQgRAVgbAHIgOACQgQAAgQgJg");
	this.shape_45.setTransform(-65.3,11.8,0.7,0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag7BIQgtgVgNgrQgOgrAZgqIAHgHQBjBQB7gjQADAggTAcQgaArgxAPQgTAGgRAAQgdAAgagNg");
	this.shape_46.setTransform(-0.1,-17.7,0.7,0.7,0,0,0,0.2,-1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhCBgQgjgPgPgbQB4goAqh5QAFABAEADQAsAUANAtQAOAqgaArQgaApgwAPQgUAFgSAAQgcAAgagMg");
	this.shape_47.setTransform(-50.4,-9.6,0.7,0.7,0,0,0,-0.9,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AjKA1IgXg3QA1gcA7gUIAEAOQANAtACANQACARAIAgQABAbghAHIgOACQgqAAgeg2gAgkAtQgWhFgEgJIgFggQAsgMAsgKIAegEQAFAUAFAZIAKA7IAGAzQgCAcggAFQgIACgHAAQgmAAgag2gAB9AjIgLgvQgCgLgHgyIgDgbQA+gGA+AAQgCASACA/QgHBDgxALQgIACgHAAQgWAAgIgUg");
	this.shape_48.setTransform(-28.6,-39.8,0.7,0.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF99").s().p("AhvBSQgphZgNhIQgKg5AMgaQAMgdAqgBQA8gDCOBiQApAiAlAYQg7Axg5A7Qg+BCgvA7Ig5hwg");
	this.shape_49.setTransform(-66.9,-24.4,0.7,0.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9999").s().p("AjCBgQg4iBgQhdQgMhGAagwQAZgwA7gDQB1gFC4BpQBRAtA5AqQgwAlgtAnQgkgYgqgiQiNhig9ADQgpABgNAdQgMAaAKA5QANBIAqBZIA5BwQgnAwgcAvQgQguhBiag");
	this.shape_50.setTransform(-67.4,-24.9,0.7,0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF99").s().p("AgGB5QhJgfhKgXQAUgmAcgsQBciTA3gYQAngMAYATQAUAUALA5QATBGgCBhIgJB/QhEgkhSgjg");
	this.shape_51.setTransform(10.5,-45.9,0.7,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9999").s().p("ACeDhIAJh+QAChjgThFQgLg4gUgVQgYgSgnAMQg4AXhbCSQgcAtgUAmQg7gUg5gPQAig8A5hJQCCioBsgpQA4gVArAgQAoAjAQBFQAXBcABCMQADCoAAAxQgtgeg1ggg");
	this.shape_52.setTransform(9.6,-48.3,0.7,0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9999").s().p("AsfFsQgojCDWj6QBkh7CChOIA+ghIAWA5QAjA+AzgKQAhgHgBgbQgHgggCgRQgDgNgNgwIgDgOIAugOIAEAgQAEAJAWBHQAfBAAygMQAggFACgcIgFgzIgKg9QgFgagFgTIAzgJIADAaIAGA+QAFAQAGAhQALAZAigIQAxgKAHhGQgBg9ACgTIAkABQC7ANCfBfQEFCYApC/QAFAegBAdQhAiRjchLQkGhZlKBEQlLBFjOC4QivCaACCgQgNgZgGgeg");
	this.shape_53.setTransform(-20.8,-16.9,0.7,0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CC6633").ss(1,1,1).p("AHPEuQiCC4i5A4Qi3A5jahyQjbhzhDjoQhDjnCAjLQCBjGDpgzQDngzDICAQDJB/AnDlQAlDliBC5g");
	this.shape_54.setTransform(-13.5,36.1,0.7,0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9999").s().p("AnjL9QknjVhFl0QhGl0C7kzQC+k4FbhKQFYhMEuDJQEsDLBWFpQBUFpiiEuQiiEvmLBoQiBAhh0AAQj0AAjGiOgAhTkBQjpAziBDGQiADJBDDpQBDDoDbBzQDaByC3g5QC5g4CCi4QCBi5gljnQgnjjjJh/QiPhcigAAQg+AAhCAPg");
	this.shape_55.setTransform(-15.8,16,0.7,0.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5B090").s().p("AhVAdQgUgCgIgKIALgIQAcgPAUgHQAqgOAqgBQAtgBAnAPQgJAIgOAFQgTAFgbgEQgagDgRAEIgVAKQgSAKgEABQgWAHgUAAIgCAAg");
	this.shape_56.setTransform(-15,66.9,0.7,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB5372").s().p("Ah4AvQgJgcAcgaQAegaAmgKQAlgKAhgCQAjgCArAaQADAEACAFQAGATgGANQgDAHgFAHQgngPguAAQgpACgqAOQgVAHgcARIgKAHQgDgEgCgFg");
	this.shape_57.setTransform(-14.8,64.2,0.7,0.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhqA9QBsgLA1g1QAxg1ADgKQgKBChTAsQgqAXgnAAQgUAAgTgGg");
	this.shape_58.setTransform(-38.1,25,0.7,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AA7BGQg6gNgpgeQg6gwgBg3QADAMAgAvQAlA3B4AkQAJADgDAAQgFAAgjgHg");
	this.shape_59.setTransform(9.3,21.6,0.7,0.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_60.setTransform(4,-8.1,0.7,0.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBDAC8").s().p("AABAAIAAAAIABAAIgBAAgAAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAg");
	this.shape_61.setTransform(3.3,-10.7,0.7,0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8C589").s().p("AgtANQgCgFABgEIACgHQAFgUASgHQARgJAQAGQAPAEAMAMQAFAGAEALIgBAAIgQgGQgVgGgSAMQgTANgCAXQgMgHgEgQg");
	this.shape_62.setTransform(-16.1,49,0.7,0.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#471600").s().p("AnpH4IgOgKQgJgGgFgJQhzhzgPibQgCgyAFgyQAVhrBThHQBJhEBigWIgtgfQgJgdAIgYQAHgcAOgZQAPgcAYgYQAagbAhgVQBKgxBXgjQAygVA3gHQBXgQBVAjQAyAVAtARQBOAdBDgjQgCALgEALQgIAVgXANIAAADQAYAJAXAMQA+AjAyA1QA0A2AaBFQAQAtAMAvQAOAtAEAwQANAvAIAzQgBA4gEA6QgNBBgWBDQgKhQgjhYQgahChWiqQgOAfgdAcQg2A9g1gHIgNgCQAWgVAFgMQACgDAEgiQAFgfgGgjQgDgegKgXQhEB5iVBVQiVBYiDgGQAshBAFgiQAFgjgBgGQgBgUgKgdQg/BrhfBXQhfBZhvAtQgIBCANAxQABAKAZBRQgFgEgEgGg");
	this.shape_63.setTransform(-17.6,6.9,0.7,0.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5F2900").s().p("AohIOQgVgDgZAKQhAhqgeiLQgLg3gGg4QgGg2ACg3QAPhNA4hPQAuhFAzghIAKgGQBLi1C7hhQC8heDRAcQBOALCIBRQAPABA1AmQA1AlAEAKQBoBRA1CcQAeBRAdBOQAcBQgJBYQgMBWgaBOQgYA6gdBAQAFgUgCAFIgCAEIgDg+QAPhBAEhAQADg6ACg3QgBg0gFgxQgFgygNgrQgMgvgQgtQgahGg0g1Qgyg1g+gkIgvgVIABgCQAXgNAIgVQADgLACgLQhDAihOgcQgtgRgygWQhVgihWAQQg4AGgyAVQhWAkhLAxQghAUgZAcQgZAXgPAdQgPAZgFAcQgJAYAJAcIAtAgQhiAVhIBFQhMBFgNBqQgGAyADAyQAHCdBsB0QAFAIAIAHQgagTgSgCg");
	this.shape_64.setTransform(-17.7,3.1,0.7,0.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AAVAsQhBAEgBg5QgDgiAcgBQAFAAADAEQAHAMAGALQABACADACIALAJQAfAPgBAPQAAATgQAAIgJgBg");
	this.shape_65.setTransform(2.4,42.5,0.7,0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAeQgMgMgDgRQACgOAKgMQALgPAOgCQANABANANQANAMgBAQQABAPgMANQgKAOgQABQgLAAgMgNg");
	this.shape_66.setTransform(6.3,35.7,0.7,0.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhEBgQgfgmgCg3QgDgyAdgqQAcgqArgBQAqgCAfAmQAgApABA1QADA0gdApQgcAngsADIgEAAQgmAAgeglgAAdBVQABgPgegSIgKgIQgDgCAAgCQgIgLgIgMQgDgEgFABQgbgBADAiQABA8BBgEQAZAFgBgXgAAJg/QgJAMgBAQQABASALAMQAMALAOgBQAPgBALgMQALgMgBgRQABgRgNgLQgNgOgOAAQgPACgKAOg");
	this.shape_67.setTransform(3.6,38.3,0.7,0.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AAVAsQg/ACgDg3QgBgjAZAAQAFAAAFADQAGANAIAKQgBADAEABQAEAEAIAEQAcARAAAOQABAUgQAAIgKgBg");
	this.shape_68.setTransform(-35.3,44.8,0.7,0.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgYAeQgMgMAAgSQAAgNAKgMQALgPAPgCQAMAAAMAOQAOALgBAQQACAQgNANQgKAOgPAAIgBABQgNAAgLgNg");
	this.shape_69.setTransform(-31.6,37.9,0.7,0.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhEBfQgfglgDg3QgBg0AcgoQAdgrAqABQArgEAfAoQAfAnACA1QABA2gbAoQgeAogqACIgDAAQgnAAgfgmgAAdBUQAAgOgcgTQgGgEgEgEQgEgBABgDQgKgKgFgNQgFgDgFABQgagBABAiQADA6A/gCQAbAGgCgZgAAihPQgPABgLAPQgIAMAAAPQAAATAKAMQAMALAQgCQAOABAKgMQANgOgDgRQACgQgNgMQgNgNgNAAIgBAAg");
	this.shape_70.setTransform(-34.1,40.5,0.7,0.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBD9B1").s().p("AAqCVQgjACgZgcQgIgMgLgJIgCgFQgEgEgEgIQgXgngCgmQgDhbAbgpQADgEADgBQADgFACAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQADgEAEgBIAAADIgBABIATgGQANgFANAAIAPADQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAQAaAHANAdQAAABgBAAQAAABAAAAQAAABAAAAQAAABABABIgBAIIgCAAIgGAQQgGAWgGAZQgWBKAJBRQgBAEADAEIABAGIAAABIABALg");
	this.shape_71.setTransform(-57.1,49.8,0.7,0.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FBD9B1").s().p("AgyCYQAFgigBgcIgCgIIAAgLIgCgGIABgDIgBgEQgEgfgHgdQgEgGgBgFQgCgBgBgFQAAgEgCgFQgHgXAAgeIAAgBIAAgCIABgEIgBAAIgBgXIgBgDQAQgWAXgLIASgGIAPACQANgBALALQAEgBABABIABACQAUAOAOAgQAYArAAAfQADA9gkA3QghAqgsANIgNACQgDgCgEAAg");
	this.shape_72.setTransform(30.8,46.4,0.7,0.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FDE5C3").s().p("AgfKHQgHgEgJgCIgmgJQgagHgZgCQgOgGgQACIiYgYQgzgLgsgQQgdgJgbgQIgUgLQgxgdgVg8IgOgbIgBgLIAAgBIgBgFQgDgEABgEQgIhRAWhMQAFgZAHgWIAGgQIABAAIACgJQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIABgDIgFgHQgTgogFhsIAAgHQgCgMABgMQg2ilBWiTQA2haBPhHQCGh7C1gPQCrgTCqAqQDDA1BYCwQBOCegyCzIgCAAIABADIAAACQACA4gDA7IABAEIAAAHIgBAcIABAAIABAXIAAAEIABABIAAABQAAAfAHAXIABAIQABAGACABQABAFAEAGQAIAfADAfIABAEIgBAEIACAQIACAIQABAcgFAiIgBAAIgEASQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIgCADIAAACIgBADQgKAtgdAjQgRARgNALQgVARgUAMQgHADgEADIgBABQglAQgqAKIjaAmQg3ASg5AQQgQAFgRACQgNACgKAAQgNAAgMgCgAhEJ4QgZgJgagCIgGAAQAdAFAcAGIAAAAgAoAiGIACgCIgBAAIgBACg");
	this.shape_73.setTransform(-13.9,31.1,0.7,0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E85298").s().p("AgSCjIgShBQgQgqgugHIhEgCQgogFAggYIA5gkQAjgcgIgtIgShBQgIgpAhAYIA1AqQAkAZAogWIA5gmQAjgUgMAnIgYBAQgLAsAhAfIA1ApQAeAbgoAAIhEgCQguACgTApIgYA/QgJATgFAAQgIAAgGgUg");
	this.shape_74.setTransform(-66.8,18.9,0.7,0.7,0,0,0,-0.6,-3.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5F2900").s().p("Ah/DiQgUgRgRgTQgggigOgiQgshiAshxQAshzBtgvQBcgpBWAnQAnARAcAfQARAOALAVQAJAGAIAHQgRAHgTAKIg8AOQifA/AgCdQgMgKgIgQQgrhAAThOQgPAOgPAQQiRCnCeCXQgjgMgpgkg");
	this.shape_75.setTransform(-82.1,34.2,0.7,0.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#471600").s().p("AiADUQieiWCSinQAOgQAPgOQgSBPArA/QAJAPAMALQghieCeg/IA8gNQATgKASgHIAQALIAUArQAjBSgiAyQgXAfhLAhIgTAJQg8AegSAXQgiAqAZBCQgxgYgVgSIgdgkQgBAWgDAWQgBAUAKAYIADAHQgOgBgNgGg");
	this.shape_76.setTransform(-76.9,38.4,0.7,0.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5F2900").s().p("AhOEOQgjgLgpgkQgUgRgRgUQgggigPgiQgrhiAshxQAshyBtgwQBcgpBWAnQAnASAcAeQAQAPAMAUQAJAGAIAIIAQALIAUArQAkBRgjAxQgWAfhMAjIgTAIQg8AfgTAXQgjApAaBDQgwgYgVgSQgGgHgWgdIgFAsQgBAUAKAYIADAHQgNgBgNgGg");
	this.shape_77.setTransform(-80.1,34.4,0.7,0.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgGAXQgLgEgDgKQgEgIADgHQAEgLAKgEQAHgEAKAFQAHACAEAIQAEAKgCAHQgFALgIADQgGADgEAAIgGgBg");
	this.shape_78.setTransform(-60.5,52.6,0.7,0.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgHAXQgKgEgEgJQgEgIAEgIQADgJAIgEQAJgGAHAEQAKAEAGAJQAEAIgEAHQgEAMgHACQgGADgFAAIgHgBg");
	this.shape_79.setTransform(32.6,41.1,0.7,0.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E85298").s().p("AACCrIgdg9QgXgnguADIhDAKQgoADAbgeIAwgwQAegggQgrIgfg9QgPglAlAQIA8AgQAqARAhgdIAxgvQAfgbgFApIgLBCQgDAuAmAZIA9AdQAjAVgoAJIhEAKQgsALgMArIgLBEQgFAUgIAAQgHAAgKgQg");
	this.shape_80.setTransform(33.5,16.4,0.7,0.7,0,0,0,0.3,-2.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5F2900").s().p("ABBgtQgPgQgPgNQAUBNgqBBQgIAQgLALQAdifigg8Ig9gMQgSgKgSgHIAQgOQAMgUAQgPQAcgfAmgTQBWgoBcAoQBuAtAuByQAvBwgqBjQgOAiggAjQgQATgUASQgoAlgjAMQCciaiVikg");
	this.shape_81.setTransform(48.7,31.1,0.7,0.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#471600").s().p("ABuDSQAIgZAAgTIgFgsQgWAegHAHQgUASgxAZQAYhDgjgqQgSgWg9gdIgTgIQhMgigXgdQgkgyAihSIATgsIARgLIAkAQIA9ANQCgA8gfCeQAMgLAJgPQAqhAgUhPQAPAOAOAPQCVCmibCZQgNAGgNABIADgHg");
	this.shape_82.setTransform(43.4,35.5,0.7,0.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F2900").s().p("AA9ENQAJgYAAgUIgGgsQgWAfgGAHQgVARguAZQAXhDgjgpQgUgWg8geIgTgHQhNgjgXgeQgjgwAihSIATgsIAQgLQAHgIAKgGQALgVAQgPQAcgfAngSQBVgoBcAnQBvAtAuByQAuBwgqBjQgOAigfAkQgQATgVASQgoAkgiANQgNAFgOACIADgIg");
	this.shape_83.setTransform(46.9,31.4,0.7,0.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CC6633").ss(1,1,1).p("ACUIeQi3A5jahyQjbhzhDjoQhDjnCAjLQCBjGDpgzQDngzDICAQDJB/AnDlQAlDliBC5QiCC4i5A4g");
	this.shape_84.setTransform(-13.5,36.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-42.8,y:17.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:8.8,y:-18}},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-2.7,x:-39.5,y:52.4}},{t:this.instance,p:{regX:8.5,regY:4.3,rotation:-2.7,x:16.1,y:56.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{rotation:-5.4,x:-11.1,y:-9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_31,p:{x:-49.7,y:21.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_17,p:{x:-3.1,y:-19.9}},{t:this.shape_61},{t:this.shape_60},{t:this.instance_1,p:{regX:8.6,regY:4.3,rotation:-10.2,x:-44.3,y:54.2}},{t:this.instance,p:{regX:8.7,regY:4.7,rotation:-10.2,x:14.7,y:51.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2,p:{rotation:-16.5,x:-24.3,y:-6.2}},{t:this.shape_45},{t:this.shape_44}]},4).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-42.8,y:17.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:8.8,y:-18}},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-2.7,x:-39.5,y:52.4}},{t:this.instance,p:{regX:8.5,regY:4.3,rotation:-2.7,x:16.1,y:56.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{rotation:-5.4,x:-11.1,y:-9}},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_31,p:{x:-49.7,y:21.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_17,p:{x:-3.1,y:-19.9}},{t:this.shape_61},{t:this.shape_60},{t:this.instance_1,p:{regX:8.6,regY:4.3,rotation:-10.2,x:-44.3,y:54.2}},{t:this.instance,p:{regX:8.7,regY:4.7,rotation:-10.2,x:14.7,y:51.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_84},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2,p:{rotation:-16.5,x:-24.3,y:-6.2}},{t:this.shape_45},{t:this.shape_44}]},3).wait(4));

	// 圖層 4
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FDE5C3").s().p("AhFBTQgjgdgEgtQgDgsAdgiQAegkAtgDQArgEAjAeQAjAdADAtQAEArgdAkQgdAiguAEIgJAAQgnAAgegag");
	this.shape_85.setTransform(-31.6,98.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FDE5C3").s().p("AgsBaQgQgDgMgOIgGgLIgCgEQgMgTAMgbQAJgUAYgbQASgTAXgUIALgMIAGgEIBMBPQgsA9glAZQgVAQgUAAIgJgBg");
	this.shape_86.setTransform(-37.8,103.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDE5C3").s().p("AgIBtQgugEgdgiQgdgkAEgrQADgtAjgdQAjgeArAEQAtADAeAkQAdAigDAsQgEAtgjAdQgeAagnAAIgJAAg");
	this.shape_87.setTransform(6.9,100.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FDE5C3").s().p("AgFBLQglgZgsg9IBMhPIAGAEIALAMQAXAUASATQAYAbAJAUQAMAbgMATIgCAEIgGALQgMAOgQADIgJABQgUAAgVgQg");
	this.shape_88.setTransform(13.1,105.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FDE5C3").s().p("AhFBTQgkgegDgsQgEgsAdgjQAfgjAtgDQArgEAiAeQAjAdAEAuQAEArgdAiQgeAjgtAEIgJAAQgmAAgfgag");
	this.shape_89.setTransform(-28.6,100);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDE5C3").s().p("AgfA5QgkgHgMgTQgKgOACgRIAEgLIABgFQAFgVAcgLQAVgJAjgCIA4ABIAZACIgCBsQgvAIgiAAQgUAAgQgDg");
	this.shape_90.setTransform(-38,99.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FDE5C3").s().p("AgkBnQgrgQgTgpQgTgpAPgoQAQgsApgTQAogUApARQArAOAUApQATApgPAqQgPAqgqAUQgXALgXAAQgRAAgTgHg");
	this.shape_91.setTransform(3.4,101.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FDE5C3").s().p("AAWBGQgpgChGghIAZhpIAIABIARAEQAeAGAXAHQAiAMASAOQAZASgCAUIABAEIAAANQgCASgNALQgOANgbAAIgMgBg");
	this.shape_92.setTransform(12.2,102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},4).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},8).wait(3));

	// 圖層 2
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#813682").s().p("AgCArQgQgkgLgnQgJgegEgeIgDgYQAOAAAPAJQANAGALAMIASASIAHAJIAGA2IAEA5IADBEQgcgegUgsg");
	this.shape_93.setTransform(0.2,90.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#813682").s().p("AgqAxIAEg5IAGg2IAHgJIATgSQAKgMAMgGQAQgJAOAAIgDAYQgEAegIAeQgLAngRAkQgTAsgcAeg");
	this.shape_94.setTransform(-27.1,90.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#965F9A").s().p("AiSBVQBpgWA/g/QAYgVARgaQAMgTAGgSIBCBpQhFAlhQAPQg8AMhBAAIgTAAg");
	this.shape_95.setTransform(-1.4,132.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AF86B4").s().p("AhaBdQgkgFgkgJQgZgFgWgHIgRgGIBGigIFuAAIARAdQgGASgMATQgRAagXAVQhCA/hnAXQgsgCgugFg");
	this.shape_96.setTransform(-16,131);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F2AB00").s().p("Ag+BlQAzgkAfhDQANgaALgdIANgrQAEAkABAoQABAegBAhIgCAtIgCARg");
	this.shape_97.setTransform(-0.8,110.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FDDC00").s().p("AizDYIgBgQIgDgpQgChFAFg9QAJhVAXg6QAehKAzgbQAgASAgACQAoAEApgVQAvAcAdBDQAVA2AKBMQgNA1gXAtQgiBFgyAkg");
	this.shape_98.setTransform(-13.6,99.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E35E46").s().p("AgTAhQgogCgpgLIANgvQAkATAlgGQAZgEAYgPQAUAKAOAKQAXAPAJARIgEABIgLAEQgUAFgWACQgUADgVAAIgWgBg");
	this.shape_99.setTransform(-2,163.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C2C1C1").s().p("Ag/AfIAThIIBsgDQgCAVgDAQQgDARgFALIABAAIABABIACABIADACQgYAPgbAEIgQABQgbAAgbgOg");
	this.shape_100.setTransform(-4.3,157.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F6C59A").s().p("AgoAAQAGgpgBgfIBSgGIAFAzIADAxIgBA2IhsADQAJguAFghg");
	this.shape_101.setTransform(-3.3,144.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E35E46").s().p("AgrAfQgXgCgUgFIgKgEIgEgBQAJgRAXgPQAPgLATgJQAXAPAYAEQAmAGAjgTIAPAvQgqALgoACIgWABQgUAAgUgDg");
	this.shape_102.setTransform(-23.6,163.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C2C1C1").s().p("AgHAsQgagEgYgPIADgCIACgBIABgBIABAAQgLgVgCgsIBtADIASBIQgbAOgcAAIgQgBg");
	this.shape_103.setTransform(-21.4,157.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F6C59A").s().p("Ag1BMQgCgYABgeQAAgWACgbIAFgzIBSAGQgBAfAHApQAFAjAKAsg");
	this.shape_104.setTransform(-22.3,144.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EB8972").s().p("AhXgKICqhgIAFCOIhlBHg");
	this.shape_105.setTransform(-34,92.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EB8972").s().p("AhYAgIASiOICgBuIhTBvg");
	this.shape_106.setTransform(2.5,90.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F8D1A7").s().p("Ag2AsIAAhXIBtAAIAABXg");
	this.shape_107.setTransform(-13,78.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]}).wait(15));

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
	this.shape.graphics.f("#EA6240").s().p("AglAoQgSgOgCgXQAAgVAQgUQARgQAYgBQAVgBASAQQASARAAAWQACAVgRASQgQARgXABIgDAAQgVAAgQgQg");
	this.shape.setTransform(23.2,-10.5,0.679,0.679);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA6240").s().p("AglAqQgTgSAAgXQgCgVASgQQAQgSAXAAQAWgCAUARQAPAPABAXQAAAVgNATQgSAQgYABQgWAAgRgOg");
	this.shape_1.setTransform(-51.6,-6.5,0.679,0.679);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBA+QglgYgFgmQgHgoAdghIAEgGQBQBQBugMQgDAagUAYQgcAigtAGIgRABQghAAgcgSg");
	this.shape_2.setTransform(9.5,-31,0.679,0.679,0,0,0,-0.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhFBJQgagTgKgaQBsgRA1hmQADADAEACQAkAYAGAoQAGAmgdAiQgbAigsAHIgRABQgiAAgdgTg");
	this.shape_3.setTransform(-34.1,-28.7,0.679,0.679,0,0,0,-0.8,0.3);

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
	this.shape_7.graphics.f().s("#CC6633").ss(1,1,1).p("AHlgpQAAjWiUhzQiUhyjEANQjKANiNBgQiOBfAIDcQAKDaCNCYQCNCWDDAAQDIAACMiWQCOiYAAjUg");
	this.shape_7.setTransform(-10.7,25.8,0.679,0.679);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AosJHIgOgOQjpjrgBlOQAAi4BMidIAEgKQAyiOB4hbQDmjeFEgBQEjAADaC1IAKAIIAFAFIABAAQCFBwBMCkQBGCcAAC1QABFOjuDrQgrAugxAjQjMCekPAAQlEAAjojhgAACibQjIANiNBgQiOBdAIDcQAKDcCNCYQCNCWDDAAQDHAACNiWQCOiYAAjXQAAjWiUhwQiFhniuAAIgnACg");
	this.shape_8.setTransform(-11.4,4.4,0.679,0.679);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AgxBNQghgTgIgmQgIgjAUgfQAVghAlgIQAkgJAgAUQAjATAIAlQAJAkgXAfQgUAggmAJQgLADgJAAQgZAAgXgOg");
	this.shape_9.setTransform(28.4,-34,0.679,0.679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AhOB7Qg0gegNg8QgOg5AhgzQAhgzA8gOQA5gOA0AgQA1AfANA7QAOA5ghAzQgiAzg7AOQgSAEgQAAQgoAAgkgWgAgehFQglAIgVAhQgUAdAIAlQAIAmAhATQAgAUAkgJQAmgJAUggQAXgfgJgkQgIglgjgTQgWgOgXAAQgLAAgMADg");
	this.shape_10.setTransform(29.1,-35.2,0.679,0.679);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AhABCQgagbAAgnQAAglAagbQAcgcAkAAQAmAAAZAcQAbAbAAAlQAAAngbAbQgZAbgmAAQgkAAgcgbg");
	this.shape_11.setTransform(-52.2,-34.5,0.679,0.679);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("AhmBoQgpgrAAg9QAAg8ApgsQArgrA7AAQA8AAAqArQAqAsAAA8QAAA9gqArQgqAsg8AAQg7AAgrgsgAgxgyQgaAbAAAkQAAAoAaAbQAbAbAkAAQAmAAAagbQAbgbAAgoQAAgkgbgbQgagcgmAAQgkAAgbAcg");
	this.shape_12.setTransform(-53.2,-35.4,0.679,0.679);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_13.setTransform(-51.2,45.3,0.532,0.532,0,0,0,-0.1,-0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_14.setTransform(30.5,42.9,0.644,0.644,0,0,0,0.3,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_15.setTransform(-6.9,-57.9,1.29,1.29);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_16.setTransform(46.7,10.6,1.29,1.29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_17.setTransform(42.5,31.1,0.869,0.869,0,0,0,0.2,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_18.setTransform(45.3,-14.9,1.29,1.29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_19.setTransform(36.6,-39.1,1.29,1.29);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_20.setTransform(16.9,-53.2,1.29,1.29);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_21.setTransform(-32.7,-55.4,1.29,1.29);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_22.setTransform(-54,-45.4,1.29,1.29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_23.setTransform(-67.4,-26.8,1.29,1.29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_24.setTransform(-71.9,-2.7,1.29,1.29);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_25.setTransform(-69.4,19.7,1.065,1.065,0,0,0,0.2,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC6600").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape_26.setTransform(-60.7,36.5,0.7,0.7,0,0,0,-0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB8972").s().p("ABPAlIgqgPQghgNgGgCQgggHgvANQguAMgjgIQgbgGgQgLQBCgiBRgHQBLgGBNATQAnAJA0AXIAVAKQgOAVgiAGQgNACgPAAQgYAAgbgGg");
	this.shape_27.setTransform(-13.6,47,0.679,0.679);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B3E50").s().p("ADCBMQg1gZgmgJQhOgShKAGQhRAHhDAhQgMgKgGgNQgNgZAIggQACgLAFgHQBJg2A9gDQA8gCBFALQBGAKA5ArQA5ApgMA0QgCAKgFAHIgVgLg");
	this.shape_28.setTransform(-14.2,42.1,0.679,0.679);

	this.instance = new lib.紅暈();
	this.instance.setTransform(14.3,33.7,0.851,0.851,-6.2,0,0,8.8,4.5);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-40.5,30.9,0.851,0.851,-3.4,0,0,8.8,4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AicAwIAXgfQACACAhAHQAiAGA4gRQA1gPBDhCIAsAGQAAAEgnAqQgpAnhGAdQgeANglAAQgsAAgzgTg");
	this.shape_29.setTransform(-32.2,4.4,0.679,0.679,0,0,0,0.3,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag4A+QhLgjgahwIAZgIQAAAEAcArQAdAsA/AiQA9AkBngRIAGAkQgFAEhEADIgMAAQg+AAhDggg");
	this.shape_30.setTransform(8.8,3.9,0.679,0.679,0,0,0,-0.1,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#443100").s().p("AgaCEQgghWgQhnQgQhoAqg9IB/C7QgGACgkBIQglBKAGBuQgDgFgdhWg");
	this.shape_31.setTransform(-53,4.9,0.679,0.679);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AAUAnQg6AGgDg0QgDgfAYgBQAFAAADAEQAGALAGAJIADAEIAMAHQAbANAAAOQABARgQAAIgHgBg");
	this.shape_32.setTransform(-29.7,23,0.679,0.679);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTAbQgLgJgDgRQABgMAJgMQAKgNANgCQALAAAMANQAMAJgBAPQABAOgKALQgIANgPABIgCABQgJAAgKgMg");
	this.shape_33.setTransform(-26.5,17,0.679,0.679);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag7BYQgdghgDgyQgEgtAagnQAXgmAogCQAmgDAcAjQAeAjACAwQAEAvgZAlQgYAlgoADIgHAAQggAAgbgggAAdBMQAAgNgbgQIgKgHQgCgCgBgCQgIgJgGgLQgDgDgFAAQgYABADAeQACA2A7gFQAXAEgBgVgAAGg5QgHAMgBAOQACAQAKAKQALAJAMAAQAPgBAIgLQALgMgCgPQABgQgMgJQgMgMgNAAQgOABgJAOg");
	this.shape_34.setTransform(-28.7,19.3,0.679,0.679);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AAUAnQg6AGgDg0QgDgfAYgBQAFAAADAEQAHALAFAJIADAEIAMAHQAbANAAAOQABARgQAAIgHgBg");
	this.shape_35.setTransform(2.8,23,0.679,0.679);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAbQgLgJgDgRQABgMAJgMQAKgNANgCQALAAAMANQAMAJgBAPQABAOgKALQgIANgPABIgCABQgJAAgKgMg");
	this.shape_36.setTransform(5.8,17,0.679,0.679);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag7BYQgdghgDgyQgEgtAagnQAXgmAogCQAmgDAcAjQAeAjACAwQAEAvgZAlQgYAlgoADIgHAAQggAAgbgggAAdBMQAAgNgcgQIgJgHQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgIgJgGgLQgDgDgFAAQgYABADAeQACA2A7gFQAXAEgBgVgAAGg5QgHAMgBAOQACAQAKAKQALAJAMAAQAPgBAIgLQALgMgCgPQABgQgMgJQgMgMgNAAQgOABgJAOg");
	this.shape_37.setTransform(3.7,19.3,0.679,0.679);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE7B6A").s().p("AgfAAQACgMAdgCQAdABADANQgCANgeACQgcgBgDgOg");
	this.shape_38.setTransform(-14,28.2,0.679,0.679);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FBD8B5").s().p("AiNKlQkMgwhvhnQhvhogVhaQgUhaAFgGQgCiQgehhQgehjgEgEQgojABAh0QA/h0BPg0QBPgzAHABQDshJCfATQCbASAIAJQAJgGCcAhQCcAhDICQQAIABA6BKQA6BLAXCCQAXCChiCnQgGACg8BVQg7BUgxCIQADAHgwBPQgwBOiLA/QhVAniFAAQhTAAhogQg");
	this.shape_39.setTransform(-7.7,10.9,0.679,0.679);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8C499").s().p("Ag6A+IAzh/QAHgEAkAHQAmAGgZA2QAAAGgcAlQgUAagdAAQgOAAgQgFg");
	this.shape_40.setTransform(28.9,36.6,0.679,0.679);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F8C499").s().p("AgYA/QgPgcABgEQgRhQAcgTQAbgTAFADIApCoQgNABgKAAQgiAAgNgWg");
	this.shape_41.setTransform(-52.9,25.9,0.679,0.679);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FBD8B5").s().p("AhrBgIBrjKQABgDAjgFQAigFAZAXQAaAXgXBQQgBADgaAlQgaAkgtAXQgTAKgWAAQgfAAgjgUg");
	this.shape_42.setTransform(29.8,37,0.679,0.679);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBD8B5").s().p("AgnBjQgXggACgEQghhcAUgqQAVgrAhgLQAegLAEABQBRBbgRBWQgQBYgJAGQhGgFgXggg");
	this.shape_43.setTransform(-54.3,25.6,0.679,0.679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6240").s().p("AgjArQgSgNgDgXQgCgWAOgUQAQgRAYgDQAVgDATAPQATAQACAWQADAVgQATQgPASgXADIgGAAQgUAAgPgNg");
	this.shape_44.setTransform(19.2,-12.9,0.679,0.679);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA6240").s().p("AgiAsQgVgQgBgXQgDgVAQgRQAPgUAXgBQAWgEAVARQARAOACAWQACAVgNAUQgRARgXACIgFABQgTAAgQgMg");
	this.shape_45.setTransform(-55.2,-4,0.679,0.679);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag8A/QgmgVgIgoQgJglAagkIAEgGQBVBNBtgVQgBAagTAZQgZAkgtAJQgNADgLAAQgdAAgagPg");
	this.shape_46.setTransform(4,-32.1,0.679,0.679,0,0,0,-0.8,-0.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhBBPQgbgRgMgaQBrgYAvhpQACADAFABQAlAWAJAoQAIAlgaAkQgZAjgsAKQgNADgLAAQgeAAgbgPg");
	this.shape_47.setTransform(-39.3,-27.4,0.679,0.679,0,0,0,-1,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CC6633").ss(1,1,1).p("AHlhHQgOjWibhpQibhojDAaQjIAbiHBoQiHBpAWDaQAYDZCXCOQCWCODDgNQDIgNCCigQCDihgOjTg");
	this.shape_48.setTransform(-12.5,25.6,0.679,0.679);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("AoEJqIgPgNQj5jcgWlNQgMi3BCiiIADgKQAoiRByhjQDXjtFFgVQEhgTDlCmQAGAEAEAEIAGAEIABAAQCNBnBVCfQBRCXAMC2QAWFLjeD7QgoAwguAnQjCCqkPASQgdACgbAAQkhAAjfi+gAgHibQjIAbiHBoQiHBnAXDaQAXDbCYCOQCWCODDgNQDHgNCCigQCDihgOjVQgOjWiahnQh8hTiYAAQglAAgmAFg");
	this.shape_49.setTransform(-14.4,4.3,0.679,0.679);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9999").s().p("AgtBQQghgRgLglQgLgiATghQASghAlgLQAjgMAiASQAkARALAkQALAjgVAhQgSAhglAMQgOAEgMAAQgWAAgWgLg");
	this.shape_50.setTransform(22.9,-36.6,0.679,0.679);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("AhGCAQg2gbgRg7QgRg3Adg2QAeg0A7gTQA4gRA2AcQA3AcARA6QARA4geA0QgdA2g7ARQgXAHgUAAQgjAAghgRgAgihDQglALgTAiQgSAeAKAlQALAlAiAQQAiASAjgLQAlgMATggQAUghgLgjQgLgkgkgSQgUgKgTAAQgPAAgOAEg");
	this.shape_51.setTransform(23.4,-37.8,0.679,0.679);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9999").s().p("Ag7BGQgcgagDgnQgCgkAZgdQAZgeAmgCQAkgDAcAbQAcAZADAmQACAlgZAdQgYAdgmADIgGAAQghAAgagXg");
	this.shape_52.setTransform(-57.6,-31.8,0.679,0.679);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("AhfBvQgsgpgEg9QgEg7AmgvQAoguA8gEQA7gEAtApQAtApAEA9QAEA7goAvQgnAug8AEIgJAAQg2AAgpglgAAJhPQgkACgZAeQgZAdADAkQACAnAcAaQAdAZAkgCQAmgDAYgdQAZgdgCgnQgDgkgcgZQgagYgiAAIgGAAg");
	this.shape_53.setTransform(-58.6,-32.7,0.679,0.679);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EB8972").s().p("ABQAjQgHgBgigKIgqgMQgfgFguAQQgsARglgGQgbgEgRgNQBAgkBQgMQBKgMBPAMQAnAHA2AVIAVAHQgMAVgiAJQgTAEgVAAQgTAAgVgDg");
	this.shape_54.setTransform(-14.2,47,0.679,0.679);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8B3E50").s().p("AjVA/QgPgZAGgjQABgIAFgIQBEg7A9gHQA8gHBFAFQBGAGA9AnQA7AkgIA1QgBAJgFAIIgVgIQg2gWgngGQhPgMhKALQhQANhAAmQgMgJgIgMg");
	this.shape_55.setTransform(-15,42.5,0.679,0.679);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AiXA9IAUghQABACAiAEQAjAEA2gVQA0gSA+hIIAtACQgBAEgkAtQglArhEAiQgkATgtAAQgmAAgqgNg");
	this.shape_56.setTransform(-36,6.1,0.679,0.679,0,0,0,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgzBAQhNgegkhtIAZgKQABAEAfApQAgAoBBAeQBAAgBlgZIAJAkQgEAEhEAIQgPABgQAAQg2AAg6gWg");
	this.shape_57.setTransform(4.8,2.7,0.679,0.679,0,0,0,-0.1,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgpgFQgGgeAYgDQAFAAAEADQAGALAIAIIACAEIAMAGQAdALAAAOQADAVgXgDQgKACgIAAQgpAAgFgsg");
	this.shape_58.setTransform(-32.1,24.5,0.679,0.679);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAdQgLgJgFgQQAAgMAIgMQAJgOANgDQALgBAMALQANAJAAAPQADANgJANQgIANgOACIgDAAQgJAAgKgJg");
	this.shape_59.setTransform(-29.4,18.3,0.679,0.679);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag1BdQgfgfgGgyQgIgtAXgoQAUgoAogFQAlgGAfAgQAhAiAFAwQAHAugWAnQgVAmgnAGIgNABQgdAAgbgbgAgyAwQAGA2A5gKQAXADgCgVQgBgNgcgOIgKgGIgEgEQgIgJgHgKQgDgDgFAAQgZADAHAegAAXhKQgNADgJAOQgGAMABAPQADAPAKAKQAMAIAMgCQAOgBAIgMQAKgNgDgPQgBgPgMgJQgLgKgMAAIgDAAg");
	this.shape_60.setTransform(-31.4,20.8,0.679,0.679);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgpgFQgGgeAYgDQAFAAAEADQAHALAHAIIACAEIAMAGQAdALAAAOQADAVgXgDQgKACgIAAQgpAAgFgsg");
	this.shape_61.setTransform(0.3,22.1,0.679,0.679);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgRAdQgLgJgFgQQAAgMAIgMQAJgOANgDQALgBAMALQANAJAAAPQADANgJANQgIANgOACIgDAAQgJAAgKgJg");
	this.shape_62.setTransform(2.8,15.9,0.679,0.679);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag1BdQgfgfgGgyQgIgtAXgoQAUgoAogFQAlgGAfAgQAhAiAFAwQAHAugWAnQgVAmgnAGIgNABQgdAAgbgbgAgyAwQAGA2A5gKQAXADgCgVQgBgNgdgOIgJgGIgEgEQgIgJgHgKQgDgDgFAAQgZADAHAegAAXhKQgNADgJAOQgGAMABAPQADAPAKAKQAMAIAMgCQAOgBAIgMQAKgNgDgPQgBgPgMgJQgLgKgMAAIgDAAg");
	this.shape_63.setTransform(0.9,18.4,0.679,0.679);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EE7B6A").s().p("AgfADQABgMAegFQAcgBAEANQgBANgeAEIgFAAQgYAAgDgMg");
	this.shape_64.setTransform(-16.1,28.5,0.679,0.679);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FBD8B5").s().p("AhNKpQkOgch2hfQh3hfgbhYQgbhZAFgGQgOiQgkhgQglhfgFgDQg2i9A3h4QA3h4BLg5QBKg6AIAAQDmhZCfAHQCcAGAIAIQAJgGCeAVQCeAWDTCAQAHABA/BFQBABGAhCAQAgCAhWCuQgFADg1BZQg1BYgnCLQAEAHgqBSQgqBSiGBJQhpA6i+AAQgyAAg6gFg");
	this.shape_65.setTransform(-12,11.2,0.679,0.679);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8C499").s().p("Ag2BCIApiEQAIgEAjAEQAmADgUA5QABAGgbAmQgTAfgiAAQgLAAgMgDg");
	this.shape_66.setTransform(27.4,33.8,0.679,0.679);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8C499").s().p("AgVBCQgSgbABgFQgXhOAbgVQAagVAGADIAzCkQgRAEgNAAQgcAAgMgTg");
	this.shape_67.setTransform(-54.9,29.1,0.679,0.679);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBD8B5").s().p("AhmBoIBcjSQADgCAggIQAhgIAcAWQAbAUgRBSQAAADgYAmQgXAmgtAbQgTANgaAAQgcAAghgPg");
	this.shape_68.setTransform(28.4,34,0.679,0.679);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FBD8B5").s().p("AgfBoQgageACgEQgohZARgsQASgsAggOQAdgNAEABQBYBVgKBXQgKBYgJAHQhGAAgZgeg");
	this.shape_69.setTransform(-56.5,28.8,0.679,0.679);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EB8972").s().p("AigAlQgbgDgSgNQA/glBQgOQBJgNBPALQAoAFA2AVIAWAGQgMAWgiAJQgjAJgsgGQgIgBgjgKIgogKQghgFgtARQgiANgdAAIgRgBg");
	this.shape_70.setTransform(-14.3,47,0.679,0.679);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8B3E50").s().p("AjVBBQgPgZAFgiQABgJAEgHQBEg9A8gIQA8gIBFAEQBHAEA9AmQA9AlgIAzQgBAJgEAIIgWgIQg2gVgogFQhPgLhJANQhQAOg/AnQgNgIgIgMg");
	this.shape_71.setTransform(-15.2,42.7,0.679,0.679);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AiWBAIAUghQABACAjADQAiADA2gVQA0gTA8hJIAtABQgBAEgjAuQgkArhEAjQglAUgwAAQgjAAgpgLg");
	this.shape_72.setTransform(-36.9,6.6,0.679,0.679,0,0,0,0.4,0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgyA/QhOgcglhsIAZgLQAAAEAgApQAhAnBCAdQBAAfBlgbIAKAkQgFADhDAKQgRADgSAAQg0AAg5gWg");
	this.shape_73.setTransform(3.8,2.3,0.679,0.679,0,0,0,-0.1,0.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgpgEQgHgeAZgDQAFgBADAEQAHAKAIAIIACAEIAMAGQAdAKABAOQADAVgXgDQgLACgIAAQgoAAgGgqg");
	this.shape_74.setTransform(-32.6,24.9,0.679,0.679);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgRAeQgLgKgFgPQgBgNAIgMQAJgOANgDQALgBAMAKQAOAJAAAPQADANgJANQgIAOgOACIgEAAQgIAAgKgIg");
	this.shape_75.setTransform(-30,18.6,0.679,0.679);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgyBdQghgegHgyQgIgsAWgpQAUgoAngGQAmgGAfAfQAhAhAGAwQAJAugWAnQgUAngoAGIgOACQgcAAgagbgAgfAPQgZAEAHAeQAHA2A5gLQAYACgDgVQgBgOgdgMIgKgGQgDgCAAgCQgJgIgHgKQgDgEgEAAIgBAAgAAXhLQgOADgIAOQgGANABAOQAEAQAJAJQANAIAMgBQAOgBAHgNQAJgNgDgPQAAgPgNgJQgMgKgLAAIgCAAg");
	this.shape_76.setTransform(-32,21.1,0.679,0.679);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgpgEQgHgeAZgDQAFgBADAEQAHAKAIAIIACAEIAMAGQAdAKABAOQADAVgXgDQgLACgIAAQgoAAgGgqg");
	this.shape_77.setTransform(-0.2,21.9,0.679,0.679);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgRAeQgLgKgFgPQAAgNAHgMQAJgOANgDQALgBAMAKQAOAJAAAPQADANgJANQgIAOgOACIgEAAQgIAAgKgIg");
	this.shape_78.setTransform(2.2,15.6,0.679,0.679);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgyBdQghgegHgyQgIgsAWgpQAUgoAngGQAmgGAfAfQAhAhAGAwQAJAugWAnQgUAngoAGIgOACQgcAAgagbgAgfAPQgZAEAHAeQAHA2A5gLQAYACgDgVQgBgOgdgMIgKgGQgDgCAAgCQgJgIgHgKQgDgEgEAAIgBAAgAAXhLQgOADgIAOQgGANABAOQAEAQAJAJQANAIAMgBQAOgBAHgNQAJgNgDgPQAAgPgNgJQgMgKgLAAIgCAAg");
	this.shape_79.setTransform(0.2,18.1,0.679,0.679);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE7B6A").s().p("AgfAEQABgNAdgFQAcgCAFAOQgBAMgeAFIgFAAQgXAAgEgLg");
	this.shape_80.setTransform(-16.5,28.6,0.679,0.679);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FBD8B5").s().p("Ag9KqQkPgYh4hcQh4hegdhXQgdhYAFgGQgQiQgmhgQgnhegFgDQg5i7A1h5QA0h6BKg7QBKg6AHAAQDkheCgAEQCdAEAHAIQAJgHCeATQCfATDVB8QAHAABBBFQBBBFAjB/QAiB/hSCwQgFADg0BZQg0BZgkCNQAEAHgoBSQgpBSiEBMQhuA/jQAAQgnAAgtgCg");
	this.shape_81.setTransform(-13.1,11.2,0.679,0.679);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8C499").s().p("Ag1BCIAniDQAHgFAkADQAmADgTA5QAAAHgZAlQgTAggjAAQgKAAgMgDg");
	this.shape_82.setTransform(27,33.1,0.679,0.679);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8C499").s().p("AgVBCQgSgaABgFQgYhOAagVQAagWAGADIA2CjQgRAEgOAAQgbAAgNgSg");
	this.shape_83.setTransform(-55.3,29.9,0.679,0.679);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FBD8B5").s().p("AhkBqIBYjUQADgCAggJQAhgIAbAVQAcAUgPBUQgBABgWAnQgXAmgsAcQgVAOgbAAQgbAAgfgOg");
	this.shape_84.setTransform(28,33.4,0.679,0.679);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FBD8B5").s().p("AgdBpQgagdACgFQgqhYARgsQAQgsAggPQAegOADABQBZBUgJBWQgIBZgIAIIgHAAQhBAAgYgdg");
	this.shape_85.setTransform(-57,29.5,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.4,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-71.9,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.4,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.7,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.9,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.6,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.7,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-6.9,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_1,p:{regX:8.7,regY:4.4,rotation:-7.7,x:-42.4,y:33.3}},{t:this.instance,p:{regX:8.7,regY:4.4,rotation:-10.4,x:12.5,y:31.9}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_26,p:{regX:-1.2,regY:0.7,rotation:-3.6,x:-61.6,y:39.7}},{t:this.shape_25,p:{regX:-0.1,regY:0.8,rotation:-3.6,x:-71.4,y:23.2}},{t:this.shape_24,p:{rotation:-3.6,x:-75.2,y:1.3}},{t:this.shape_23,p:{rotation:-3.6,x:-72.4,y:-23}},{t:this.shape_22,p:{rotation:-3.6,x:-59.9,y:-42.4}},{t:this.shape_21,p:{rotation:-3.6,x:-39.6,y:-54.1}},{t:this.shape_20,p:{rotation:-3.6,x:10.1,y:-55.2}},{t:this.shape_19,p:{rotation:-3.6,x:30.4,y:-42.4}},{t:this.shape_18,p:{rotation:-3.6,x:40.7,y:-18.4}},{t:this.shape_17,p:{regY:0,rotation:-3.6,x:41.2,y:27.6}},{t:this.shape_16,p:{rotation:-3.6,x:43.9,y:6.8}},{t:this.shape_15,p:{rotation:-3.6,x:-14,y:-58}},{t:this.shape_14,p:{regX:0.1,regY:1.2,rotation:-3.6,x:29.8,y:39.9}},{t:this.shape_13,p:{regX:0.3,regY:-0.2,rotation:-3.6,x:-51.3,y:47.8}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_6,p:{rotation:-3.6,x:-26.9,y:-8.5}},{t:this.shape_5,p:{rotation:-3.6,x:-9.2,y:-9.8}},{t:this.shape_4,p:{rotation:-3.6,x:-17.7,y:-16.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.4,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-71.9,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.4,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.7,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.9,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.6,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.7,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-6.9,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.instance_1,p:{regX:8.8,regY:4.4,rotation:-8.7,x:-42.7,y:33.8}},{t:this.instance,p:{regX:8.7,regY:4.5,rotation:-11.4,x:12.1,y:31.4}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_26,p:{regX:-1.2,regY:0.7,rotation:-3.6,x:-61.6,y:39.7}},{t:this.shape_25,p:{regX:-0.1,regY:0.8,rotation:-3.6,x:-71.4,y:23.2}},{t:this.shape_24,p:{rotation:-3.6,x:-75.2,y:1.3}},{t:this.shape_23,p:{rotation:-3.6,x:-72.4,y:-23}},{t:this.shape_22,p:{rotation:-3.6,x:-59.9,y:-42.4}},{t:this.shape_21,p:{rotation:-3.6,x:-39.6,y:-54.1}},{t:this.shape_20,p:{rotation:-3.6,x:10.1,y:-55.2}},{t:this.shape_19,p:{rotation:-3.6,x:30.4,y:-42.4}},{t:this.shape_18,p:{rotation:-3.6,x:40.7,y:-18.4}},{t:this.shape_17,p:{regY:0,rotation:-3.6,x:41.2,y:27.6}},{t:this.shape_16,p:{rotation:-3.6,x:43.9,y:6.8}},{t:this.shape_15,p:{rotation:-3.6,x:-14,y:-58}},{t:this.shape_14,p:{regX:0.1,regY:1.2,rotation:-3.6,x:29.8,y:39.9}},{t:this.shape_13,p:{regX:0.3,regY:-0.2,rotation:-3.6,x:-51.3,y:47.8}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_6,p:{rotation:-3.6,x:-26.9,y:-8.5}},{t:this.shape_5,p:{rotation:-3.6,x:-9.2,y:-9.8}},{t:this.shape_4,p:{rotation:-3.6,x:-17.7,y:-16.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1,p:{regX:8.8,regY:4.3,rotation:-3.4,x:-40.5,y:30.9}},{t:this.instance,p:{regX:8.8,regY:4.5,rotation:-6.2,x:14.3,y:33.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{regX:-0.8,regY:0.8,rotation:0,x:-60.7,y:36.5}},{t:this.shape_25,p:{regX:0.2,regY:1.3,rotation:0,x:-69.4,y:19.7}},{t:this.shape_24,p:{rotation:0,x:-71.9,y:-2.7}},{t:this.shape_23,p:{rotation:0,x:-67.4,y:-26.8}},{t:this.shape_22,p:{rotation:0,x:-54,y:-45.4}},{t:this.shape_21,p:{rotation:0,x:-32.7,y:-55.4}},{t:this.shape_20,p:{rotation:0,x:16.9,y:-53.2}},{t:this.shape_19,p:{rotation:0,x:36.6,y:-39.1}},{t:this.shape_18,p:{rotation:0,x:45.3,y:-14.9}},{t:this.shape_17,p:{regY:-0.1,rotation:0,x:42.5,y:31.1}},{t:this.shape_16,p:{rotation:0,x:46.7,y:10.6}},{t:this.shape_15,p:{rotation:0,x:-6.9,y:-57.9}},{t:this.shape_14,p:{regX:0.3,regY:0.8,rotation:0,x:30.5,y:42.9}},{t:this.shape_13,p:{regX:-0.1,regY:-0.9,rotation:0,x:-51.2,y:45.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{rotation:0,x:-23.1,y:-9.4}},{t:this.shape_5,p:{rotation:0,x:-5.3,y:-9.4}},{t:this.shape_4,p:{rotation:0,x:-13.4,y:-16.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

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


(lib.男2做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.txt = new cjs.Text("", "bold 36px Microsoft JhengHei", "#990000");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 34;
	this.txt.lineWidth = 182;
	this.txt.setTransform(111.7,173.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt}]}).wait(2));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhLA1IAVgKQAAATAIAIQAHAGANAAQALAAAGgGQAHgJAAgQQAAgVgFgGQgGgJgKAAIgQAAIAAgXIAQAAQAIAAAEgKQAEgHAAgTQAAgOgFgGQgEgFgKgBQgNAAgGAHQgGAIAAAQIgVgNQAAgVAOgMQALgKAVAAQAUAAALAOQAMAMAAAZQAAAggXAOQAcAKAAAnQAAAZgMANQgNATgXAAQguAAgDgxgAAvBkIAAgdIAdAAIAAAdg");
	this.shape.setTransform(32.6,174.4);

	this.instance = new lib.手複製();
	this.instance.setTransform(152.9,143.3,1.897,2.026,0,-140.5,31.8,17.7,12.1);

	this.instance_1 = new lib.手複製();
	this.instance_1.setTransform(71.8,141.9,1.897,2.026,0,140.6,148.2,17.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("AvDosIeHAAIAARZI+HAAg");
	this.shape_1.setTransform(113.7,215.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_2.setTransform(113.7,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},1).wait(1));

	// 圖層 1
	this.instance_2 = new lib.粉紅桌();
	this.instance_2.setTransform(114.9,233.7,0.947,1.103,0,0,0,114.5,48.6);

	this.ss = new lib.男2做答();
	this.ss.setTransform(99.6,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ss,p:{mode:"independent",startPosition:undefined}},{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.ss,p:{mode:"single",startPosition:14}}]},1).wait(1));

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
	this.shape_12.graphics.f("#EE7B6A").s().p("AhpAOQAUgVA1gUQAzgUBXAWQgeAlg1ATQgTAHgTAAQgoAAgygYg");
	this.shape_12.setTransform(12.3,25.4,0.685,0.685);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB5372").s().p("AhNBpQgGgFg7g1Qg6gzgagtQAFAEBmAGQBlAECDgvIBkgjIAEAAQATAFgPA4QgQA3gDAGIgMAXQgKAWgWAbQhXgWg1AUQgzAUgUAXIgYgNg");
	this.shape_13.setTransform(8.7,18.3,0.685,0.685);

	this.instance = new lib.紅暈();
	this.instance.setTransform(34.7,8.2,0.849,0.849,-11.7,0,0,8.3,4.2);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(-19,9.5,0.849,0.849,-9,0,0,8.9,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiiAgQBBhHBMgHQBIgHA3ASQA2ATADADIglAXQhagag2AMQg4AIgbAVQgaAWgBACg");
	this.shape_14.setTransform(-14,-14.9,0.685,0.685,0,0,0,-0.6,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAEgJQhGgBguAUQguAWgDAEIgQgVQBQhQBSAJQBPAIA5AlQA3AkACAFIgXAcQhQhChHgBg");
	this.shape_15.setTransform(27,-20.2,0.685,0.685,0,0,0,0.6,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#443100").s().p("AgFCDQgnhSgahjQgahmAjhAICPCsQgGADgcBJQgeBNASBsQgEgFglhRg");
	this.shape_16.setTransform(-35,-14.1,0.685,0.685);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#443100").s().p("ALDHBQAAiAgtiGQgIAEhWg4QhVg3hNifQABAFhPBNQhNBPiVBeQiTBfjVA1QADgBA9grQA+grBQhFQBNhEA7hQQgDAEhNA9QhLA9h3BOQh4BOiFA2QAIgGBMhaQBLhbAphmQgCAFg5BOQg5BNhUBQQhUBQhVAOQADgBAOgaQANgZgLgoQgHgEgdhSQgJgWgDgaIgCABIgEgZIAAgGQhlgXg8hZQgggugdgzQA8ABA6gaQANgEANgHQhYgMgthOQgTgegLgiQgOglADgoQACgPgBgQQA7AZA/ALQAVADAWgFQCIgkBZg4QBYg4AngUQAmgUBHgSQEOhWEdA2QCvAfCCB6QFBBqgJFPQgCBIgVBAQAOBjg6CBIg+BVQg3BNgNAiQAEgMAAh/g");
	this.shape_17.setTransform(1.8,-37.9,0.685,0.685);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgpgEQgGgdAYgEQAFAAADADQAHAKAIAIIACAEIAMAGQAdAKAAAOQADAUgXgCQgKACgJAAQgnAAgGgqg");
	this.shape_18.setTransform(-9.5,1.3,0.685,0.685);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAdQgLgJgEgPQgBgNAIgMQAIgOANgDQALgBAMALQANAIABAPQADANgJANQgHANgOACIgEABQgJAAgKgJg");
	this.shape_19.setTransform(-7,-4.9,0.685,0.685);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxBdQgggegIgxQgIgsAVgoQAUgpAmgFQAmgHAeAfQAiAgAGAwQAIAtgVAnQgUAmgmAHIgOABQgcAAgagZgAgfAQQgYADAHAeQAHA0A5gLQAXACgDgUQgBgNgdgMIgKgGQgDgCAAgCQgJgJgHgKQgCgDgEAAIgCABgAAWhJQgOACgHAOQgHANABAOQAEAPAKAJQAMAIAMgBQAOgBAHgNQAKgNgEgPQgBgPgMgIQgLgKgLAAIgDABg");
	this.shape_20.setTransform(-8.9,-2.3,0.685,0.685);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgpgEQgGgdAYgEQAFAAADADQAIAKAHAIIACAEIAMAGQAdAKAAAOQADAUgXgCQgKACgJAAQgnAAgGgqg");
	this.shape_21.setTransform(22.7,-1.7,0.685,0.685);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAdQgLgJgEgPQgBgNAIgMQAIgOANgDQALgBAMALQANAIABAPQADANgJANQgHANgOACIgEABQgJAAgKgJg");
	this.shape_22.setTransform(25.2,-8,0.685,0.685);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgxBdQgggegIgxQgIgsAVgoQAUgpAmgFQAmgHAeAfQAiAgAGAwQAIAtgVAnQgUAmgmAHIgOABQgcAAgagZgAgfAQQgYADAHAeQAHA0A5gLQAXACgDgUQgBgNgegMIgJgGQgDgCAAgCQgJgJgHgKQgCgDgEAAIgCABgAAWhJQgOACgHAOQgHANABAOQAEAPAKAJQAMAIAMgBQAOgBAHgNQAKgNgEgPQgBgPgMgIQgLgKgLAAIgDABg");
	this.shape_23.setTransform(23.3,-5.5,0.685,0.685);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE7B6A").s().p("AgfAEQABgMAegFQAbgDAFANQgCANgcAFIgGAAQgXAAgEgLg");
	this.shape_24.setTransform(6.5,4.9,0.685,0.685);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBD8B5").s().p("Ag4KiQkMgWh3hbQh3hcgdhXQgdhWAFgGQgQiOgnheQgnhdgFgDQg4i5Azh4QAzh4BJg6QBIg7AIABQDhheCdADQCbADAIAIQAIgHCdASQCdARDTB7QAHAABABDQBABEAjB+QAkB9hRCuQgFADgzBYQgzBZgiCLQADAHgnBRQgoBSiCBLQhuBAjSAAQgkAAgpgCg");
	this.shape_25.setTransform(9.8,-12.3,0.685,0.685);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8C499").s().p("Ag0BCIAliDQAIgEAjADQAlADgSA3QABAHgZAmQgTAfgiAAQgLAAgLgCg");
	this.shape_26.setTransform(50.1,9.2,0.685,0.685);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8C499").s().p("AgUBCQgSgaABgFQgYhNAZgVQAagWAGADIA2ChQgSAEgNAAQgaAAgNgRg");
	this.shape_27.setTransform(-32.2,6.4,0.685,0.685);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBD8B5").s().p("AhjBpIBXjRQACgDAfgIQAhgIAcAUQAbAUgPBSQAAACgWAmQgXAmgrAbQgUAPgbAAQgbAAgfgOg");
	this.shape_28.setTransform(51,9.4,0.685,0.685);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBD8B5").s().p("AgcBpQgagdABgFQgphXAQgrQAQgsAggPQAegOACABQBYBSgHBWQgIBYgIAHIgJAAQg+AAgYgbg");
	this.shape_29.setTransform(-33.8,6.1,0.685,0.685);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE7B6A").s().p("AhrAAQAXgUA4gMQA1gMBTAkQgkAgg3AKQgLACgKAAQguAAg5gkg");
	this.shape_30.setTransform(13.4,25.4,0.685,0.685);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB5372").s().p("AhoBPQgGgFgxg+Qgyg7gTgwQAFAFBkAUQBjAVCKgbIgBAAIBogTIADAAQATAJgYA0QgYAzgFAHIgOAVQgOATgaAYQhSgjg2AMQg3AMgYATIgVgRg");
	this.shape_31.setTransform(11.7,18.6,0.685,0.685);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgPABQg6ACgdARQgeAQAAADIgfgWQBLg8BLAFQBJAEAzAaQAzAYACAEIgoATQhUgng3ABg");
	this.shape_32.setTransform(-7,-20.1,0.685,0.685,0,0,0,-1.5,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJgQQhFgNgxAPQgxAOgDACIgNgUQBchFBPAVQBNAUAyAuQAyAsABAFIgcAXQhEhMhGgMg");
	this.shape_33.setTransform(34.6,-16.2,0.685,0.685,0,0,0,0.3,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#443100").s().p("AglCCQgahWgKhnQgKhoAtg6IByDAQgGACgoBEQgmBHAABuQgDgGgahWg");
	this.shape_34.setTransform(-26.5,-21,0.685,0.685);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#443100").s().p("AJeH0QAUh/gYiLQgIADhNhEQhMhEgzioQAAAFhZA/QhZBDihBFQigBIjbAUQADgBBDghQBEghBZg4QBZg3BFhEIhXAxQhVAxiCA6QiCA8iMAgQAJgEBYhOQBZhOA4hcQgDAFhFBBQhEBEheBCQhgBChWABQADgBASgXQARgWgGgqQgFgFgRhVQgFgYABgZIgCAAIAAgXIABgGQhggmguhhQgYg0gVg3QA7AKA9gRQAOgCANgFQhUgaghhUQgOgggGgjQgIgnAJgnQAEgOACgRQA3AiA8AVQAVAGAVgCQCNgOBggpQBggqApgOQApgOBIgIQEWgrEUBiQCoA5BtCNQEtCZg9FKQgMBHgfA7QgCBlhMB2QgJAHhCBEQhCBCgSAgQAGgMATh8g");
	this.shape_35.setTransform(14.2,-35.2,0.685,0.685);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AASAoQg6ACABgzQgCgfAYAAQAGABADADQAEALAGAKIADAEIAKAIQAbAOgBAOQgBAQgOAAIgIgBg");
	this.shape_36.setTransform(-4.6,-1.6,0.685,0.685);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAZQgJgKgDgPQACgNAJgLQALgMALgBQANAAALANQALAKgCAOQABAOgLALQgJANgOAAIAAAAQgLAAgKgNg");
	this.shape_37.setTransform(-1.1,-7.5,0.685,0.685);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag/BUQgbgjAAgxQgBgtAbglQAagkAmABQAmgBAaAjQAcAlgBAuQABAvgbAjQgaAkgnAAIgBAAQgkAAgagigAAYBNQABgNgZgRQgGgEgEgEQgCgCgBgCQgIgKgFgLQgCgDgFAAQgYgBABAeQgBA2A6gDQAXAHAAgVgAAJg4QgJALAAAOQAAAQAKALQAKAKANAAQAOAAAIgLQAMgLgBgPQABgPgLgKQgKgNgNAAQgOAAgKANg");
	this.shape_38.setTransform(-3.4,-5.3,0.685,0.685);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AASAoQg6ACABgzQgCgfAYAAQAGABADADQAFALAFAKIADAEIAKAIQAbAOgBAOQgBAQgOAAIgIgBg");
	this.shape_39.setTransform(27.8,0.1,0.685,0.685);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAZQgJgKgDgPQACgNAJgLQALgMALgBQANAAALANQALAKgCAOQABAOgLALQgJANgOAAIAAAAQgLAAgKgNg");
	this.shape_40.setTransform(31.1,-5.6,0.685,0.685);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag/BUQgbgjAAgxQgBgtAbglQAagkAmABQAmgBAaAjQAcAlgBAuQABAvgbAjQgaAkgnAAIgBAAQgkAAgagigAAYBNQABgNgZgRIgKgIQgCgCgBgCQgIgKgFgLQgCgDgFAAQgYgBABAeQgBA2A6gDQAXAHAAgVgAAJg4QgJALAAAOQAAAQAKALQAKAKANAAQAOAAAIgLQAMgLgBgPQABgPgLgKQgKgNgNAAQgOAAgKANg");
	this.shape_41.setTransform(29,-3.4,0.685,0.685);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EE7B6A").s().p("AgfAAQAEgOAbAAQAdACADAMQgDAOgdABQgcgDgDgMg");
	this.shape_42.setTransform(10.7,4.3,0.685,0.685);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBD8B5").s().p("Ai7KWQkGg+hnhsQhohtgPhaQgPhaAGgFQAFiPgYhhQgYhjgEgEQgcjABFhuQBFhvBRguQBRgvAHABQDsg5CcAbQCYAaAHAKQAJgGCYAqQCYApC+CZQAHACA0BMQA2BNAPCBQAQCBhrCgQgGACg/BQQhABPg3CEQACAHgzBLQg0BLiMA2QhGAbhkAAQhjAAiEgcg");
	this.shape_43.setTransform(18.6,-12.6,0.685,0.685);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C499").s().p("Ag8A7IA6h7QAFgDAlAJQAlAIgbAyQgBAHgeAjQgTAYgbAAQgQAAgRgHg");
	this.shape_44.setTransform(53,15,0.685,0.685);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8C499").s().p("AgaA8QgNgcACgFQgNhQAdgRQAagRAGAEIAfCnIgOABQgpAAgNgZg");
	this.shape_45.setTransform(-27.9,0,0.685,0.685);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBD8B5").s().p("AhuBYIBzjBQADgDAjgDQAigDAXAYQAYAYgbBOQgBADgbAiQgdAigtAVQgRAIgSAAQghAAglgYg");
	this.shape_46.setTransform(53.8,15.6,0.685,0.685);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBD8B5").s().p("AgtBeQgVghACgFQgbhbAXgpQAXgpAggJQAfgKADACQBLBfgVBTQgVBWgJAFQhFgJgVggg");
	this.shape_47.setTransform(-29.2,-0.3,0.685,0.685);

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


(lib.女做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.txt = new cjs.Text("", "bold 36px Microsoft JhengHei", "#990000");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 34;
	this.txt.lineWidth = 182;
	this.txt.setTransform(111.7,173.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt}]}).wait(2));

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE5C3").s().p("AhaA4QgUgRgQgUQgrg2AngyQAGgKANgEIASgDIBdgMQBdATAtBdQAcA3gmAwQgJAJgOACQgUADgTAAQhXAAhFg7g");
	this.shape.setTransform(146.6,157.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5C3").s().p("Ah1BkQgOgEgHgKQgfg0AigzQA5hWBegGIBbAYQAJACAIADQANAFAFALQAgA3gyAwQgSASgWAOQg+AnhEAAQgjAAgkgKg");
	this.shape_1.setTransform(59.1,157,1,1,0,0,0,-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AglBmIAAiZIgaAAIAAgVQARAAAHgGQAHgFADgSIASAAIAADLgAAiBkIAAgdIAdAAIAAAdg");
	this.shape_2.setTransform(33.9,174.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC6699").ss(3,1,1).p("APFooIAARRI+JAAIAAxRg");
	this.shape_3.setTransform(114.4,213.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvEIpIAAxRIeJAAIAARRg");
	this.shape_4.setTransform(114.4,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 圖層 1
	this.instance = new lib.粉紅桌();
	this.instance.setTransform(114.8,233.7,0.947,1.103,0,0,0,114.4,48.6);

	this.ss = new lib.草莓妹妹做答();
	this.ss.setTransform(117.1,72.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ss,p:{mode:"independent",startPosition:undefined}},{t:this.instance}]}).to({state:[{t:this.instance},{t:this.ss,p:{mode:"single",startPosition:14}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,34.8,216.8,252.3);


(lib.星星燈號組正式 = function() {
	this.initialize();

	// 圖層 1
	this.st10 = new lib.星星亮燈動畫10();
	this.st10.setTransform(612.6,60.1,1,1,0,0,0,30.2,30.2);

	this.st6 = new lib.星星亮燈動畫6();
	this.st6.setTransform(366.9,60.1,1,1,0,0,0,30.3,30.2);

	this.st7 = new lib.星星亮燈動畫7();
	this.st7.setTransform(428.3,60.1,1,1,0,0,0,30.2,30.2);

	this.st8 = new lib.星星亮燈動畫8();
	this.st8.setTransform(489.8,60.1,1,1,0,0,0,30.3,30.2);

	this.st9 = new lib.星星亮燈動畫9();
	this.st9.setTransform(551.2,60.1,1,1,0,0,0,30.2,30.2);

	this.st5 = new lib.星星亮燈動畫5();
	this.st5.setTransform(305.9,60.1,1,1,0,0,0,30.2,30.2);

	this.st1 = new lib.星星亮燈動畫1();
	this.st1.setTransform(60.2,60.1,1,1,0,0,0,30.3,30.2);

	this.st2 = new lib.星星亮燈動畫2();
	this.st2.setTransform(121.6,60.1,1,1,0,0,0,30.2,30.2);

	this.st3 = new lib.星星亮燈動畫3();
	this.st3.setTransform(183.1,60.1,1,1,0,0,0,30.3,30.2);

	this.st4 = new lib.星星亮燈動畫4();
	this.st4.setTransform(244.5,60.1,1,1,0,0,0,30.2,30.2);

	this.addChild(this.st4,this.st3,this.st2,this.st1,this.st5,this.st9,this.st8,this.st7,this.st6,this.st10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.1,4.8,602.6,46.2);


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


(lib.男做答2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.txt = new cjs.Text("", "bold 36px Microsoft JhengHei", "#990000");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 34;
	this.txt.lineWidth = 182;
	this.txt.setTransform(112.3,173.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt}]}).wait(2));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAvBlIAAgdIAdAAIAAAdgAhLBjQADgmAog0QAeglAAgWQAAgMgEgFQgHgHgMAAQgNABgHAHQgHAKAAAZIgWgKQAAgeANgOQAOgPAWAAQAXAAAMAPQAMAOAAAVQAAAZgiAsQgZAigHAVIBCAAIAAAZg");
	this.shape.setTransform(32.6,174.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2C6").s().p("AhZA5QgUgSgPgUQgqg2AmgzQAGgKANgDQAJgDAJAAIBbgMQBcASAsBeQAbA4glAwQgIAJgOACQgUACgTAAQhWAAhEg6g");
	this.shape_1.setTransform(144.9,159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE2C6").s().p("Ah0BlQgNgEgHgKQgfg0Aig0QA4hXBdgGIBaAYQAIACAJAEQAMAFAFALQAfA3gxAwQgRASgXAPQg9AnhCAAQgjAAgkgKg");
	this.shape_2.setTransform(78.5,159.7,1,1,0,0,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(3,1,1).p("AvDItIAAxZIeHAAIAARZg");
	this.shape_3.setTransform(114.3,215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvDItIAAxZIeHAAIAARZg");
	this.shape_4.setTransform(114.3,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 圖層 1
	this.instance = new lib.粉紅桌();
	this.instance.setTransform(114.7,233.4,0.947,1.103,0,0,0,114.3,48.6);

	this.ss = new lib.西瓜弟弟做答();
	this.ss.setTransform(107,110.4,0.947,1.103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ss,p:{mode:"independent",startPosition:undefined}},{t:this.instance}]}).to({state:[{t:this.ss,p:{mode:"single",startPosition:14}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,24,216.8,263);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1250,
	height: 820,
	fps: 10,
	color: "#FFFFFF",
	manifest: [
		{src:"images/book_dvd.png", id:"book_dvd"},
		{src:"images/S075bn.png", id:"S075bn"},
		{src:"images/S075p1.png", id:"S075p1"},
		{src:"images/S075p2.png", id:"S075p2"},
		{src:"images/S075p3.png", id:"S075p3"},
		{src:"images/S075p4.png", id:"S075p4"},
		{src:"images/win10note.png", id:"win10note"},
		{src:"images/win10wordpad.png", id:"win10wordpad"},
		{src:"sounds/Splashing_Around.mp3", id:"Splashing_Around"}
	]
};



// symbols:



(lib.book_dvd = function() {
	this.initialize(img.book_dvd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,141);


(lib.S075bn = function() {
	this.initialize(img.S075bn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,365);


(lib.S075p1 = function() {
	this.initialize(img.S075p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,328);


(lib.S075p2 = function() {
	this.initialize(img.S075p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,266);


(lib.S075p3 = function() {
	this.initialize(img.S075p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,400);


(lib.S075p4 = function() {
	this.initialize(img.S075p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,340);


(lib.win10note = function() {
	this.initialize(img.win10note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,224);


(lib.win10wordpad = function() {
	this.initialize(img.win10wordpad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,224);


(lib.黃鈕底 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3.4,1,1).p("AnQkhIOhAAQBbAABABBQBBBAAABbIAACLQAABbhBBAQhABBhbAAIuhAAQhaAAhBhBQhBhAAAhbIAAiLQAAhbBBhAQBBhBBaAAg");
	this.shape.setTransform(68.5,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AnQEhQhbABhAhBQhBhAABhcIAAiKQgBhbBBhAQBAhBBbAAIOgAAQBbAABBBBQBBBAAABbIAACKQAABchBBAQhBBBhbgBg");
	this.shape_1.setTransform(68.5,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3.4,1,1).p("AnQkhIOhAAQBbAABABBQBBBAAABbIAACLQAABbhBBAQhABBhbAAIuhAAQhaAAhBhBQhBhAAAhbIAAiLQAAhbBBhAQBBhBBaAAg");
	this.shape_2.setTransform(68.5,29,1.046,1.046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{scaleX:1.046,scaleY:1.046}},{t:this.shape_2}]},3).wait(3));

	// 圖層 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(3.4,1,1).p("AnQkhIOhAAQBbAABABBQBBBAAABbIAACLQAABbhBBAQhABBhbAAIuhAAQhaAAhBhBQhBhAAAhbIAAiLQAAhbBBhAQBBhBBaAAg");
	this.shape_3.setTransform(73.1,33.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AnQEhQhbABhAhBQhBhAABhcIAAiKQgBhbBBhAQBAhBBbAAIOgAAQBbAABBBBQBBBAAABbIAACKQAABchBBAQhBBBhbgBg");
	this.shape_4.setTransform(73.1,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:1,scaleY:1,x:73.1,y:33.6}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:73.1,y:33.6}}]}).to({state:[{t:this.shape_4,p:{scaleX:1.046,scaleY:1.046,x:71.7,y:33.5}},{t:this.shape_3,p:{scaleX:1.046,scaleY:1.046,x:71.7,y:33.5}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,145,66);


(lib.電腦螢幕反光 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-22.6,0,22.6,0).s().p("AjgCtIFvm+IBTABInCIig");
	this.shape.setTransform(22.7,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-34.3,0,34.3,0).s().p("AlWEyIJTrQIBaAAIqtM+g");
	this.shape_1.setTransform(34.3,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-12.4,0,12.5,0).s().p("Ah7CWID3ksIAABnIijDGg");
	this.shape_2.setTransform(99,70.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-17.6,0,17.7,0).s().p("AivDWIFfmrIAABBIkqFqg");
	this.shape_3.setTransform(93.8,63.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111.5,85.3);


(lib.電腦_手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ACdBmIg+gVQhJAFhDgZQhNgag+gxQgSgOgPgRQgGgGgEgIQgIgWAQgRIAGgFQAPgDAIAKIAKANQAWAWAcAPQAnAVAqARQAcAJAaAIQAmAMAngOQAEghAegSIAHgDIAAAAIAEAAQAGAAAGAGQAGAFAAAGIgBACIAAAEIgEAFIgBAAIgDAAIgDAAIAAACIAAABIAAABIAEANIACAHQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIABACIgCAHIABAAIgEAUIANgVIABgBIACgEIAKgKIACgCQAFgDACAAIAAgBQAeABAcAVQAJAagPAgQgLAagcAFIgJABQgIAAgIgDgACSAHIAAgBIAAABgACcgBIgBABIgBAAgAChgGIABAAIgBAAg");
	this.shape.setTransform(23.4,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA64E").s().p("AgoAIIgBgBIACgHIgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIgCgIIgFgOIABgBIgBgBIABgBIADgBIADABIAAAAIABAAQAogEAiAbQAEADAHAHQgdgVgbAAIgBAAQgCAAgEAEIgDACIgJAKIgDADIgBABIgNAWgAghAAIAAAAIAAAAgAgZgGIABgBIABgCgAgRgOIAAAAIAAAAg");
	this.shape_1.setTransform(41.4,11.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.5,46.2,21.1);


(lib.資料夾 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AplHeQgVgRAHghIB1pcQAGggAdgdQAdgcAjgIIPKjWQAjgIAUASQAVARgGAhIh1JbQgHAhgdAcQgdAdgjAIIvKDWQgLACgJAAQgVAAgOgMg");
	this.shape.setTransform(39.8,29.4,0.499,0.499,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0A645").s().p("AplHeQgVgRAGghIB1pcQAHggAdgdQAdgcAjgIIPKjWQAjgIAUASQAVARgHAhIh1JbQgGAhgdAcQgdAdgjAIIvKDWQgLACgJAAQgVAAgOgMg");
	this.shape_1.setTransform(38.9,28.6,0.499,0.499,-1.3);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AiOBuIABgCIEGglIgBAKIkGAkIAAgHgAiGAtIABgDIEFghIAAAKIkGAhIAAgHgAh+gUIABgDIEFgfIAAAKIkGAfIAAgHgAh3hSIABgDIEFgfIAAAKIkGAfIAAgHg");
	this.shape_2.setTransform(45,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai/h7IAAAAIAEhEIGRgmIgaGlIgKABImHAlg");
	this.shape_3.setTransform(44.4,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.502)").s().p("Ai0i1IALgCIABAAIgWFhIGHgmIADAAIgBAKIgEAAIAAAEImSAmg");
	this.shape_4.setTransform(42.1,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AiAB/IAAgEIEAhCIABAKIkBBCIAAgGgAiAA9IAAgEIEAg9IABAIIkBA/IAAgGgAiAgEIAAgEIEAg9IABAKIkBA7IAAgEgAiAhDIAAgEIEAg9IABAKIkBA9IAAgGg");
	this.shape_5.setTransform(28.9,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjQinIGKhWIAXGlImKBWg");
	this.shape_6.setTransform(28.5,13.9,1,1,0,0,0,0,-0.2);

	// 圖層 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1A55A").s().p("AkYC/IgFjQQAAgSAMgQQAMgPARgEIAZgGIgBgmQAAgLAJgKQAKgKANgDIDCgvQANgDAKAGQAKAFAAALIABAnIDGgvQASgEANAJQAMAKABARIAEDCQgWAFgdAKIgyAUIh0AuQhGAcgxAPQhiAfhIAAQghAAgbgGg");
	this.shape_7.setTransform(30.2,20.1,1,1.016,0,-10.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0A645").s().p("AoiIHQgZgTAAgkIAAqNQAAgjAZgeQAZgeAjgIIAygKIAAhNQAAgWATgUQATgUAbgFIGJhUQAbgGATAMQATALAAAWIAABNIGQhVQAjgHAZATQAZAUAAAjIAAKNQAAAjgZAfQgZAegjAHIvNDPQgKACgJAAQgXAAgSgOg");
	this.shape_8.setTransform(30.5,26.7,0.497,0.509,0,-11.4,-1.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-17.2,70.8,71.9);


(lib.螢幕頭 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AnsBMQgXgZAAggQAAgfAXgYQAYgXAhAAQAgAAAZAXQAXAYAAAfQAAAggXAZQgZAXggAAQghAAgYgXgAGDAeQgXgXAAgcQAAggAXgXQAWgWAgAAQAeAAAXAWQAWAXAAAgQAAAcgWAXQgXAWgeAAQggAAgWgWg");
	this.shape.setTransform(72.3,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBhQgjgegGhAIAHAAIAqABQABAUAQATQAWAXAXAAQAYAAASgUQARgRADgXIArABQgIA3ggAdQgdAdgqAAQgkAAgcgXgAkWAdQgQgWAAgdQAAggAQgWQARgXAXAAQAYAAAQAXQARAWAAAgQAAAdgRAWQgQAXgYAAQgXAAgRgXgADLACQgPgTAAgeQAAgdAPgXQAQgUAXAAQAWAAAPAUQAQAXAAAdQAAAegQATQgPAWgWAAQgXAAgQgWg");
	this.shape_1.setTransform(70.6,45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgcgNIA5gGIAAAhIg5AGg");
	this.shape_2.setTransform(114.2,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AhUgJIAvgEIAAAhIgvAFgAgYgOIA3gFIAAAhIg3AFgAApgUIAsgEIAAAiIgsADg");
	this.shape_3.setTransform(101.5,101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCE4DC").s().p("Aoam6IQygOIADM1IvxBcg");
	this.shape_4.setTransform(68,57.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#46B39E").s().p("Ao8H4IhOvqQgShIBgAEISrAAQAdABABAkIAAPEQgDAXgfAAIyFBsIgHABQgYAAgDg/gAETG2IAAAjIAvgEIAAgjgAFPGxIAAAjIA5gFIAAgjgAoBm1IBEODIPxhcIgDs1gAGSGrIAAAjIAsgEIAAgjgAHKGmIAAAjIA7gFIAAgjg");
	this.shape_5.setTransform(65.4,56.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.8,113.5);


(lib.盾 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AAOCeIgCgDQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAAAIgCgQIgHAEQgFACAAgFQgEgFAFgBIAIgHIgEgQQgDgNAHgCIBAgsQAGgFAFAMIAFAOIAKgGQADgGADAGQABAFgEAEIgKAJIADANIAMgGQACgFAEAIQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAABABQgFABACAFIgNAIIABARQgEADgDAFQgLADgHAGQgGAAABgCQgEgJAGACQAJgKAHABIACgIIAAgBIhAArQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAgAASCBQAAAEADAHIACABIAegSQgGgGAAAEQgEgCgBACQgFgEABAAIgBgCgAAOBrQgCADACAGIAfgVQgBgBgBAAQgBgBgBAAQgBAAAAABQAAAAAAABQgFgDgBABQAAAAgBgBQAAAAgBAAQAAgBAAABQgBAAAAAAIgBgCIgPAKIgBAAQgEAAAEAHgAA8BuIABAFIAWgPQgDgFACgEIgCgEIgjAVIAAAAIAAAAQACAAAEABIACAAIAHABgAA2BYIgBADIAYgPIgDgKQgBgBgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAIgeATIAEABQACgCAEADIAAAAIAEAEgAgVBgQgEgGAGgBIAqgfIgCgGIghAXQgHACABgDQgEgHAFAAIAjgYIgEgHIgnAcQgGAAgBgCQgDgIAGAAIAngbIgCgFQgEgGAGgBQAEgFADAIIAEADIAogYQADgEAEAHIgDAFIgpAZIADAHIAkgWQACgDABAGQABACgCAEIgiAWIADAHIAugdQACgDAFAFQgBAEgCAEIhkBAQgFAAAAgCgAg1ASIg1h1QgEgFACgCQAAgBgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgBQgBgFAHgCIACAAIATgJQAFgGAEALIADAGIAEAhQAAAAgBAAQAAAAAAABQAAAAAAABQABABAAABIADAEQAJAFAFAGQAFADADAIQAEAJgBAMQgEAHgGAHQgGACgEACIANAbQACAFgEAEIgCABQgEAAgBgDgAhfhmIAhBKIABABQAEgFAGABQABgFADgCQgCgJABgDIgGgIQgHgHgKgGQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgDgEACgCIgFghQgCgDAAAEIgMAGIgBAAQgEAAAEAFgAggAAQgCgCADgCQAJgcAAgVQgDgTgFgOIgMgcIgMAFQgGACgDgGQgDgHAGgCIAYgMIgFgPQgFgGAHgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADAFIAGANIAegRIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAQAAAAAAAAQgBAAABAAQAAAAAAAAQAAgBABAAIADAFQABAEgDAGIgqAXIAKAXIAegSQAHgJAGAOQANAeAIAWIAAAUQgEAFgGAGIgXAIQgGAAABgDQgDgJADgBQAQgGAIgBQABgEADgCIgDgOQgDgOgLgbQgDgHgCAEIgbARQAHATABAZQgEAUgGAWIgDACIgDABQgFAAgBgDg");
	this.shape.setTransform(35.2,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#331A00").s().p("AAQCeIgBAAIAAAAIgBAAIgCgDQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAAAIgCgQIgHAEQgFACAAgFQgEgFAFgBIAIgHIgEgQQgDgNAHgCIBAgsQAGgFAFAMIAFAOIAKgGQADgGADAGQABAFgEAEIgKAJIADANIAMgGQAAgBABgBQAAAAABAAQAAAAABAAQAAABABABQADAAAAAFQAAAFgFACIgLAHIABARIgHAIIgSAJQgGAAABgCQgEgJAGACIAQgJIACgIIAAgBIhAArIgBAAIgBABIgCAAIAAABIgBgBgAASCBQAAAEADAHIACABIAegSIgHgCIgDgBIgBABQgFgEABAAIgBgCgAANBoQgCAEADAIIAdgTIgFgCIgDgCIgBAAIgFgCIgOAJIAAAAIgCAEgAA8BuIABAFIAWgPQgDgFACgEIgCgEIgjAVIAAAAIAAAAQACAAAEABIACAAIAHABgAA2BYIgBADIAYgPIgDgKQgBgBgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAIgdATIAEAAQACAAADACIAAAAIAEAEgAgVBgQgEgGAGgBIAqgfIgCgGIghAXQgHACABgDQgEgHAFAAIAjgYIgEgHIgnAcQgGAAgBgCQgDgIAGAAIAngbIgCgFQgEgGAGgBQAEgFADAIIAEADIAogYQADgEAEAHIgDAFIgpAZIADAHIAkgWQACgDABAGQABACgCAEIgiAWIADAHIAugdQACgDAFAFQgBAEgCAEIhkBAQgFAAAAgCgAg1ASIg1h1QgEgFACgCQAAgBgBAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgBQgBgFAHgCIACAAIATgJQAFgGAEALIADAGIAEAhQAAAAgBAAQAAAAAAABQAAAAAAABQABABAAABIADAEQAJAFAFAGQAFADADAIQAEAJgBAMQgEAHgGAHQgGACgEACIANAbQACAFgEAEIgCABQgEAAgBgDgAhfhmIAhBKIABABQAEgFAGABQABgFADgCQgCgJABgDIgGgIQgHgHgKgGQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgDgEACgCIgFghQgCgDAAAEIgMAGIgBAAQgEAAAEAFgAggAAQgCgCADgCQAJgcAAgVQgDgTgFgOIgMgcIgMAFQgGACgDgGQgDgHAGgCIAYgMIgFgPQgFgGAHgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADAFIAGANIAegRIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAQAAAAgBAAQAAAAABAAQAAAAAAAAQAAgBABAAIADAFQABAEgDAGIgqAXIAKAXIAegSQAHgJAGAOQANAeAIAWIAAAUQgEAFgGAGIgXAIQgGAAABgDQgDgJADgBQAQgGAIgBQABgEADgCIgDgOQgDgOgLgbQgDgHgCAEIgbARQAHATABAZQgEAUgGAWIgDACIgDABQgFAAgBgDg");
	this.shape_1.setTransform(35.6,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AAOCeIgCgDQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAAAIgCgQIgHAEQgFACAAgFQgEgFAFgBIAIgHIgEgQQgDgNAHgCIBAgsQAGgFAFAMIAFAOIAKgGQADgGADAGQABAFgEAEIgKAJIADANIAMgGQACgFAEAIQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAABABQgFABACAFIgNAIIABARQgEADgDAFQgLADgHAGQgGAAABgCQgEgJAGACQAJgKAHABIACgIIAAgBIhAArQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAgAASCBQAAAEADAHIACABIAegSQgGgGAAAEQgEgCgBACQgFgEABAAIgBgCgAAOBrQgCADACAGIAfgVQgBgBgBAAQgBgBgBAAQgBAAAAABQAAAAAAABQgFgDgBABQAAAAgBgBQAAAAgBAAQAAgBAAABQgBAAAAAAIgBgCIgPAKIgBAAQgEAAAEAHgAA8BuIABAFIAWgPQgDgFACgEIgCgEIgjAVIAAAAIAAAAQACAAAEABIACAAIAHABgAA2BYIgBADIAYgPIgDgKQgBgBgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAIgeATIAEABQACgCAEADIAAAAIAEAEgAgVBgQgEgGAGgBIAqgfIgCgGIghAXQgHACABgDQgEgHAFAAIAjgYIgEgHIgnAcQgGAAgBgCQgDgIAGAAIAngbIgCgFQgEgGAGgBQAEgFADAIIAEADIAogYQADgEAEAHIgDAFIgpAZIADAHIAkgWQACgDABAGQABACgCAEIgiAWIADAHIAugdQACgDAFAFQgBAEgCAEIhkBAQgFAAAAgCgAg1ASIg1h1QgEgFACgCQAAgBgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgBQgBgFAHgCIACAAIATgJQAFgGAEALIADAGIAEAhQAAAAgBAAQAAAAAAABQAAAAAAABQABABAAABIADAEQAJAFAFAGQAFADADAIQAEAJgBAMQgEAHgGAHQgGACgEACIANAbQACAFgEAEIgCABQgEAAgBgDgAhfhmIAhBKIABABQAEgFAGABQABgFADgCQgCgJABgDIgGgIQgHgHgKgGQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgDgEACgCIgFghQgCgDAAAEIgMAGIgBAAQgEAAAEAFgAggAAQgCgCADgCQAJgcAAgVQgDgTgFgOIgMgcIgMAFQgGACgDgGQgDgHAGgCIAYgMIgFgPQgFgGAHgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADAFIAGANIAegRIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAQAAAAAAAAQgBAAABAAQAAAAAAAAQAAgBABAAIADAFQABAEgDAGIgqAXIAKAXIAegSQAHgJAGAOQANAeAIAWIAAAUQgEAFgGAGIgXAIQgGAAABgDQgDgJADgBQAQgGAIgBQABgEADgCIgDgOQgDgOgLgbQgDgHgCAEIgbARQAHATABAZQgEAUgGAWIgDACIgDABQgFAAgBgDg");
	this.shape_2.setTransform(35.2,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AAOCeIgCgDQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAAAIgCgQIgHAEQgFACAAgFQgEgFAFgBIAIgHIgEgQQgDgNAHgCIBAgsQAGgFAFAMIAFAOIAKgGQADgGADAGQABAFgEAEIgKAJIADANIAMgGQACgFAEAIQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAABABQgFABACAFIgNAIIABARQgEADgDAFQgLADgHAGQgGAAABgCQgEgJAGACQAJgKAHABIACgIIAAgBIhAArQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAgAASCBQAAAEADAHIACABIAegSQgGgGAAAEQgEgCgBACQgFgEABAAIgBgCgAAOBrQgCADACAGIAfgVQgBgBgBAAQgBgBgBAAQgBAAAAABQAAAAAAABQgFgDgBABQAAAAgBgBQAAAAgBAAQAAgBAAABQgBAAAAAAIgBgCIgPAKIgBAAQgEAAAEAHgAA8BuIABAFIAWgPQgDgFACgEIgCgEIgjAVIAAAAIAAAAQACAAAEABIACAAIAHABgAA2BYIgBADIAYgPIgDgKQgBgBgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAIgeATIAEABQACgCAEADIAAAAIAEAEgAgVBgQgEgGAGgBIAqgfIgCgGIghAXQgHACABgDQgEgHAFAAIAjgYIgEgHIgnAcQgGAAgBgCQgDgIAGAAIAngbIgCgFQgEgGAGgBQAEgFADAIIAEADIAogYQADgEAEAHIgDAFIgpAZIADAHIAkgWQACgDABAGQABACgCAEIgiAWIADAHIAugdQACgDAFAFQgBAEgCAEIhkBAQgFAAAAgCgAg1ASIg1h1QgEgFACgCQAAgBgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgBQgBgFAHgCIACAAIATgJQAFgGAEALIADAGIAEAhQAAAAgBAAQAAAAAAABQAAAAAAABQABABAAABIADAEQAJAFAFAGQAFADADAIQAEAJgBAMQgEAHgGAHQgGACgEACIANAbQACAFgEAEIgCABQgEAAgBgDgAhfhmIAhBKIABABQAEgFAGABQABgFADgCQgCgJABgDIgGgIQgHgHgKgGQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgDgEACgCIgFghQgCgDAAAEIgMAGIgBAAQgEAAAEAFgAggAAQgCgCADgCQAJgcAAgVQgDgTgFgOIgMgcIgMAFQgGACgDgGQgDgHAGgCIAYgMIgFgPQgFgGAHgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADAFIAGANIAegRIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAQAAAAAAAAQgBAAABAAQAAAAAAAAQAAgBABAAIADAFQABAEgDAGIgqAXIAKAXIAegSQAHgJAGAOQANAeAIAWIAAAUQgEAFgGAGIgXAIQgGAAABgDQgDgJADgBQAQgGAIgBQABgEADgCIgDgOQgDgOgLgbQgDgHgCAEIgbARQAHATABAZQgEAUgGAWIgDACIgDABQgFAAgBgDg");
	this.shape_3.setTransform(35.2,35);

	// 圖層 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FEC842","#FFDB76","#D29402","#AD7116","#FDBB24","#E49D34","#F6B21C","#FEE1A3"],[0,0.094,0.22,0.353,0.549,0.741,0.898,1],1.9,10.4,-1.6,-13.6).s().p("AhZA2IgEgLQAvAKAxgTQAygSAXgmQAJgQAEgSIAFAJQgFASgIAQQgXAngyASQggANggAAQgRAAgQgDg");
	this.shape_4.setTransform(15,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEC842","#FFDB76","#FDB91C","#F7AE09","#FED370","#F6B21C","#FEE1A3"],[0,0.094,0.208,0.302,0.647,0.784,1],0.3,-73.7,6,48.8).s().p("AgNCzQhBgmgnhUQgOgfgHgcQgIgdAAgbQAAgWADgVQAKg3AhgZQAIgGAKgEIABgBIACgBQALgEALgBQAngFAsAfQAQALAOAOQASARAPAWQAPAWAMAbQAXAuAGAsQADAagCAaQgEA5gdAfQgIAIgKAHQgLAHgLADQgLADgMAAQgfAAgggUg");
	this.shape_5.setTransform(34.7,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FEC842","#FFDB76","#FDB91C","#CF8C1B","#FED370","#E49D34","#F6B21C","#FEE1A3"],[0,0.094,0.208,0.353,0.549,0.741,0.898,1],5,-31.3,17,32.3).s().p("AB5DFQAMgEALgJQAJgHAHgHIAfBBIgTAVIgWAEgAi+giIABgBIBTgkQAAAcAHAdIhDAdgABiigIBFgeIAUAqIg4AbQgPgWgSgRgAhJjhQAIgQAGgSQANAIAOAFIARAjQgLABgLAEIgCABIgBABQgKADgJAGg");
	this.shape_6.setTransform(30.5,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B65EC").s().p("AAKEXIgRgGQgagMgYgVIgUgWIgFgIQgVgigPggIgjhFIgXg2IBCgcQAHAgAQAkQAoBUBBArQAzAfAqgPIAdA+IAAABIgBAAQgXAHgXAFQgVAEgVAAQgUAAgVgEgACWCwQAggjAAg5QAAgegGgeQgGgsgWguQgNgbgPgWIA5gaIAAAAIAVArIAaA6QAMAaALAeIACAIIAFAZQAIBCgZAwQgTAlghAlIgDADIgCACgAj/iWQAxAKAygTQAygTAXgoIAOAeQgkAXgJA/QgCATAAATIhUAkgAA5iyQgtgfgmAFIgQgkIADACIAFACQArAOAqgQQAmgPAVgdIAvBiIgBAAIhEAeQgPgNgQgLg");
	this.shape_7.setTransform(31.6,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA7902").s().p("AAVFIQgLgCgKgEIAAgCQgcgMgdgZIgXgXIAAgBQgDgFgEgEQgWgogSgjIgmhPIiDkgIAKAEQA8AYA4gUQBLgaAShOIABgFIAEADQBIAuA+gWQAqgQAPgqIAEgHIBuDoIAcBAQAMAYALAbIADAKIADAJIAAABIAEAcQALBKgcA3QgaAzg5A+IgIADQgaAJgsAJQgZAFgZAAQgXAAgWgEgAByE9IABAAQArgKAhgKIAFgHQAyg1AagxQAag1gJhHIgFgbIgDgJQgMgfgOgdIgchAIhnjaQgRAogpAPQg/AXhJgsQgUBPhNAZQg2AUg4gTIB6ELIAlBOQASAjAWAmIAGAJIAVAXQAbAYAbANIAAgBIAUAHIAAgBQAvAKAsgKgAAkDIQhBgsgohUQgQgjgHgjQgGgbAAgcQAAgTACgTQAJg+AkgYQAIgGAKgDQgKAEgIAGQghAZgJA3QgEAVABAWQAAAbAHAbQAHAeAPAfQAmBUA/AmQAxAcAngLQAMgDALgHQAKgHAIgIQAdgfAEg5QACgagEgaQAGAdAAAfQAAA5ggAjQgHAHgJAHQgLAJgMAEQgOAFgPAAQgeAAgigUg");
	this.shape_8.setTransform(29.8,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEC842","#FFDB76","#FDB91C","#CF8C1B","#FED370","#E49D34","#F6B21C","#FEE1A3"],[0,0.094,0.208,0.353,0.549,0.741,0.898,1],2.4,-36.4,15.9,36).s().p("AAQE6IABAAIgSgGIgBAAQgdgNgbgXIgVgXIgGgJQgWgmgSgjIglhPIh6kLQA5ATA2gTQBMgaAUhPQBLAtA9gYQApgOARgoIBnDZIAdBAQAOAeAMAfIADAJIAEAaQAJBIgaA1QgaAwgxA1IgGAHQggALgrAJIgBAAQgXAFgXAAQgXAAgXgEgAjziOIA3B6IgBAAIAYAxIAYA2IAiBFQAQAgAUAiIAFAIIAUAWQAZAVAYAMIATAGQAqAJAogJQAYgFAWgHIABAAIAAgBIAWgEIATgUIABgCIADgDQAhglAUglQAZgwgJhCIgEgZIgCgIQgMgegMgaIgag6IgUgrIgBAAIgUgrIAAAAIguhiIgEgJQgVAdgmAPQgqAPgsgNQgRgHgTgKQgFASgIAQQgXAogyATQgzASgwgJg");
	this.shape_9.setTransform(30.4,33.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FEC842","#FFDB76","#D29402","#AD7116","#FDBB24","#E49D34","#F6B21C","#FEE1A3"],[0,0.094,0.22,0.353,0.549,0.741,0.898,1],5.3,4.8,1.7,-15.9).s().p("Ag0AXIgEgBIgEgCQgNgFgOgIIgFgHQATAIARAGQAuAOAogQQAngMAUgdIAEAIQgVAbgmAPQgWAJgWAAQgUAAgWgHg");
	this.shape_10.setTransform(33.3,8.3);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.6,66.6);


(lib.滑鼠 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AkUgbQDnh1CJAaQAvAJAiAIQAVAFAQAFQAkAKAVAaQAaAlgpARQgDABgDAAQgDAAgCABQgqALg0gHQgRgDgQgBQgMgBgLAAQgxgFgqAJQgFADgGACQgqAQAHAhQAIAhBZAh");
	this.shape.setTransform(11.8,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FFCC").s().p("AA1CWQhRgFhMgnQg2gdgqgZQAOhOAxg7IAFgIIAKgLQAjgiAXgMQAbAEAcAKQA3ASAxAgQBMAwAZBGQAFALAAANQgBBAhBAVQgdAKghAAIgUgBg");
	this.shape_1.setTransform(43.3,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BRIgPgLQg0gwAagwIAIgOIAGgGIADgEIArACQAoADAlAKQgvA5gOBQQgTgKgQgLgAghg3IgrgCQAfgeAvgHQAtgJAxACIAOABQgXAMgiAiIgKALQglgJgngDg");
	this.shape_2.setTransform(25.7,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7465").s().p("AgUAAIgqgDIAHgGIAqABQAoAEAkAGIgFAIQgmgJgogBg");
	this.shape_3.setTransform(23.6,32.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,6.4,80.4,50.8);


(lib.書名 = function() {
	this.initialize();

	// 圖層 3
	this.instance = new lib.S075bn();
	this.instance.setTransform(62.5,0,0.662,0.662);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(62.5,0,397,241.5);


(lib.城市剪影 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhSaAKhIAAtlIDHAAIAAA6ICYAAIAAg6IDGAAIAACHIChAAIAAjLICrAAIAAEOICeAAIAAiQIC9AAIAAg8IDIAAIAAA6ICWAAIAAg6IDHAAIAACHIChAAIAAjLICrAAIAAEOICfAAIAAiQICrAAIAAg6IDGAAIAAB8IB4AAIAThPIADgCIgFgRIAAgIIgigNIgGAGIgjAMIgkgMIgPgeIAPgcIAKgGIgGgHIgRglIgNACIgkgNIgKgMIgCgFIgDgLIADgNIADgIIANgMIAIgEIAEgBIAFgCIAKgCIAFAAIAJACIAGgXIAIgUIAAgBIgBgBIgCgBIAAgCIAAAAIgCgCIgFgGIgDgHIgBgIIABgJIACgEIAGgLIACgDIAHgGIAJgEIATgFIARABIAKAEIAHgFIAbgNIAVgGIAAgJIABgJIADgHIACgDIAJgJIAIgHIAEgBIAOgEIAUAAIASAFIANAMIADAEIAFAKIAAANIAAAEIAhALIAVAMIAKAIIAMgEIANgBIALABIASAFIAOAMIAEAGIAEAIIABAJIAAAEIgFAMIgHAJIgGAGIgEACIAEALIAJAkIAJABIASAGIAOALIAFAIIADAHIAAAJIgOAdIgkAMIgNgCIgLAVIgLAPIAIAFIAOAdIgOAdIgkAMIgjgMIgJgJIgYAJIAAAHIADAAIACADIALAlIABAAIANADQATACAWgDQAegFgGgQIgEgJQgCgEADgCQAGgCAUAMQAMADAUABIAhgBIApAAQArACDQAAIAaABQAQABALgDIAegKIgDALQgDAJADABQATANAGACQAOAGARgBQASgBAMgHQABACgDADIgMAOQgKAHACAIQABAJANABQAEAAATgFQAQgCAJADIgeANQgVAIgKAJQgDAEABAEIABALQADAIAAAUIAFAkIA1ADIACiFIgDgKIgIgKIgWgXIgDgDIgHgGIgCgFIAAgCIACgBIADAAIBMADIAWgBIAPgEIAGgDIACgBIAEgFIABgEIgDgLIgDgFIgCgEIgegbIgEgDIgHgIIgCgBIgBgCIAAAAIAAgBIADgBIAGAAIATADIAmAOIgKgPIgDgHIgDgEIgCgIIABgDIABgDIBBAXIAEABIABAAIAEABIAVAFIABAAIADABIA4AHIADAAIAEABIA/gIIARgEIBRgbIACADIABADIgCAIIgGALIgLAPIAygQIAMgBIAEABIABABIgKALIgZAVIgJAJIAAABIgEAIIgEAHIAAAEIAAACIABAAIAAACIACAEIACAAIAAAAIACACIAGADIAPAEIAWABIBMgDIADAAIACABIAAAEIgDADIgDADIgPAMIgOAQIgIANIgDAIIACBJIBUAAIgHgzIAAgMIgEggIAAgMIgBgFIAAgFIgCgMIgIheQgEgBgCgCQgDABgBgDIgEgKIAAgFQgKgvAQgBQALgFAjACIEwABIgGhPIgHAAIgEgBIgDAAIgDAAIgBAAIAAgHIABgDIAWghIAFgHIAQgVIAGgHIAKgOIA7hDIACgBIAAgLIACgMIgGAAIAGgBIAAgBIgCAAIABgaIACgHIAAgfIABgCIAAgEIABgDIAAgHIALAAIAEADIAAABIADAAIAJACIAIAEIAAABIAEACIAFACIAEAAIACACIAGADIABAAIADACIABAAIATAKIADAAIAGAHIABAAIADADIAAAFIADABIABACIAAAEIgEACIgCACIhJAJQAAAPgCAMIgBAKIAFAAIABABIACAEIADADIBdB5IAAABIAEAEIACAGIACACQAIAIgBADQABAGgMAAIgGAAIgHBRIAGgDIAIgBIAkAAIAFgBIAaAAIAAAAIDNgBQAagBAXADIAHAAQARABAFANQAAATgEALIgEATQgFADgEACQgFgBgCAOIgHA1QgJBKgLBKIgGANIgDADIBqAAIAAiuIgYAAIAQgZIAqAAIAAgcIgUgcIgXgNIAFgGIAxgMIBFAAIAMAHIALAFIAHABIAGAAIAAAAIAMgBIgPgVIgEgBIgMgEIgMgLIAHgHIAQACIANgCIAPgGIANgJIBPAAIALAIIALAFIALADIALACIgNgSIgJgBIgFgCIAAAAIAAgBIgCAAIgCAAIgDgDIAAAAIgBAAIgDgDIgHgIIAIgHIARACIARgCIARgGIAPgKIBgAAIAFABIAEADIAIAGIAQAGIARACIARgCIAHAHIgFAIIgIAGIgJADIgKABIgMASIALgCIAKgDIARgIIAFgFIBQAAIAPAJIAHAEIACAAIAEACIAQACIAOgCIAGAHIgIAJIgHADIgMAEIgQAVIANABIAMgBIAHgCIAFgDIAMgHIBEAAIANAHIALAFIAHABIAGAAIAAAAIANgBIAEAGIgDAFIgGAEIgNAE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");
	this.shape.setTransform(527.5,67.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1055,134.7);


(lib.城市複製 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape.setTransform(168.1,103.9,2.777,2.777,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_1.setTransform(165.6,108.2,2.777,2.777,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHACIAAALg");
	this.shape_2.setTransform(159.7,98.7,2.777,2.777,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_3.setTransform(167.3,96.9,2.777,2.777,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_4.setTransform(163,93.3,2.777,2.777,31.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA5521").s().p("AgDAFIAAgMIAHACIAAANg");
	this.shape_5.setTransform(173.3,96.4,2.777,2.777,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_6.setTransform(169.9,92.5,2.777,2.777,31.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_7.setTransform(165.6,88,2.777,2.777,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA5521").s().p("AgDAHIAAgNIAHABIAAAMg");
	this.shape_8.setTransform(122.4,23.1,2.777,2.777,31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_9.setTransform(115.8,34.2,2.777,2.777,31.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_10.setTransform(128.6,35.3,2.777,2.777,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_11.setTransform(123.7,32.1,2.777,2.777,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_12.setTransform(118.9,29.1,2.777,2.777,31.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_13.setTransform(132.3,29.9,2.777,2.777,31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AA5521").s().p("AgDAHIAAgNIAHABIAAAMg");
	this.shape_14.setTransform(135.6,24.2,2.777,2.777,31.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_15.setTransform(117.9,20,2.777,2.777,31.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_16.setTransform(125.5,18.2,2.777,2.777,31.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_17.setTransform(121.2,14.5,2.777,2.777,31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_18.setTransform(133.3,16.4,2.777,2.777,31.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_19.setTransform(128.9,13.1,2.777,2.777,31.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_20.setTransform(123.8,9.3,2.777,2.777,31.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F8BC00","#C98711"],[0,1],0,9.8,0,-18.9).s().p("AgaCHIgFkLIA/gEIgFERg");
	this.shape_21.setTransform(173.7,117.5,2.777,2.777,31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FACE00").s().p("AgaCpIABlRIA0ASIgCE/g");
	this.shape_22.setTransform(139,84,2.777,2.777,31.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7C500").s().p("Ag2jFIBsANIABFzIheALg");
	this.shape_23.setTransform(105,55.1,2.777,2.777,31.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F8BC00","#C48715"],[0,1],-60.3,-6.2,3.3,-6.2).s().p("AgaCHIgFkLIA/gEIgFERg");
	this.shape_24.setTransform(173.7,117.4,2.772,2.783,0,31.3,31.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F8BC00","#C48715"],[0,1],-43.3,-2.4,20.3,-2.4).s().p("AgaCpIABlRIA0ASIgCE/g");
	this.shape_25.setTransform(139,84,2.772,2.783,0,31.3,31.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F8BC00","#C48715"],[0,1],-27.5,0.1,36.1,0.1).s().p("Ag2jFIBsANIABFzIheALg");
	this.shape_26.setTransform(105,55.2,2.772,2.783,0,31.3,31.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FED945","#CC9900"],[0.141,1],-2.4,-52.5,-41.1,14.9).s().p("Ar4BgIFXpZIACABICWkOICNgfIDxC8IhPCCIDMBRIBkB6IiPDrICSA0IBnB5IBJh3ICiBUIBOCSIl2I7g");
	this.shape_27.setTransform(133.1,80.7);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(56.9,0,152.4,161.4);


(lib.城市 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape.setTransform(168.1,103.9,2.777,2.777,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_1.setTransform(165.6,108.2,2.777,2.777,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHACIAAALg");
	this.shape_2.setTransform(159.7,98.7,2.777,2.777,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_3.setTransform(167.3,96.9,2.777,2.777,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_4.setTransform(163,93.3,2.777,2.777,31.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA5521").s().p("AgDAFIAAgMIAHACIAAANg");
	this.shape_5.setTransform(173.3,96.4,2.777,2.777,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_6.setTransform(169.9,92.5,2.777,2.777,31.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA5521").s().p("AgDAGIAAgNIAHACIAAANg");
	this.shape_7.setTransform(165.6,88,2.777,2.777,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA5521").s().p("AgDAHIAAgNIAHABIAAAMg");
	this.shape_8.setTransform(122.4,23.1,2.777,2.777,31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_9.setTransform(115.8,34.2,2.777,2.777,31.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_10.setTransform(128.6,35.3,2.777,2.777,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_11.setTransform(123.7,32.1,2.777,2.777,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_12.setTransform(118.9,29.1,2.777,2.777,31.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_13.setTransform(132.3,29.9,2.777,2.777,31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AA5521").s().p("AgDAHIAAgNIAHABIAAAMg");
	this.shape_14.setTransform(135.6,24.2,2.777,2.777,31.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_15.setTransform(117.9,20,2.777,2.777,31.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_16.setTransform(125.5,18.2,2.777,2.777,31.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_17.setTransform(121.2,14.5,2.777,2.777,31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_18.setTransform(133.3,16.4,2.777,2.777,31.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_19.setTransform(128.9,13.1,2.777,2.777,31.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_20.setTransform(123.8,9.3,2.777,2.777,31.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_21.setTransform(75.8,39.3,2.777,2.777,31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_22.setTransform(68.5,41.6,2.777,2.777,31.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_23.setTransform(71.4,36.3,2.777,2.777,31.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_24.setTransform(79,34.4,2.777,2.777,31.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_25.setTransform(74.8,30.8,2.777,2.777,31.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_26.setTransform(86.6,33.5,2.777,2.777,31.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_27.setTransform(81.9,29.6,2.777,2.777,31.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_28.setTransform(77.3,25.5,2.777,2.777,31.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHAAIAAANg");
	this.shape_29.setTransform(43.8,32,2.777,2.777,31.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_30.setTransform(36.5,34.3,2.777,2.777,31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_31.setTransform(39.4,28.9,2.777,2.777,31.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_32.setTransform(46.9,27.1,2.777,2.777,31.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_33.setTransform(42.8,23.4,2.777,2.777,31.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_34.setTransform(54.6,26.2,2.777,2.777,31.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_35.setTransform(49.9,22.3,2.777,2.777,31.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AA5521").s().p("AgDAGIAAgMIAHABIAAAMg");
	this.shape_36.setTransform(45.3,18.2,2.777,2.777,31.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F8BC00","#C98711"],[0,1],0,9.8,0,-18.9).s().p("AgaCHIgFkLIA/gEIgFERg");
	this.shape_37.setTransform(173.7,117.5,2.777,2.777,31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FACE00").s().p("AgaCpIABlRIA0ASIgCE/g");
	this.shape_38.setTransform(139,84,2.777,2.777,31.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7C500").s().p("Ag2jFIBsANIABFzIheALg");
	this.shape_39.setTransform(105,55.1,2.777,2.777,31.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E8A318").s().p("AggB/IgHj9IBEAFIALD4g");
	this.shape_40.setTransform(66.7,55,2.777,2.777,31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7C500").s().p("AgYBsIgQjZIBOAOIACDNg");
	this.shape_41.setTransform(37.2,41.5,2.777,2.777,31.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F8BC00","#C48715"],[0,1],-60.3,-6.2,3.3,-6.2).s().p("AgaCHIgFkLIA/gEIgFERg");
	this.shape_42.setTransform(173.7,117.5,2.777,2.777,31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#F8BC00","#C48715"],[0,1],-43.3,-2.4,20.3,-2.4).s().p("AgaCpIABlRIA0ASIgCE/g");
	this.shape_43.setTransform(139,84,2.777,2.777,31.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F8BC00","#C48715"],[0,1],-27.5,0.1,36.1,0.1).s().p("Ag2jFIBsANIABFzIheALg");
	this.shape_44.setTransform(105,55.1,2.777,2.777,31.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F8BC00","#C48715"],[0,1],-15.7,-7,47.9,-7).s().p("AggB/IgHj9IBEAFIALD4g");
	this.shape_45.setTransform(66.7,55,2.777,2.777,31.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#F8BC00","#C48715"],[0,1],-4.1,-8.4,59.5,-8.4).s().p("AgYBsIgQjZIBOAOIACDNg");
	this.shape_46.setTransform(37.2,41.5,2.777,2.777,31.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FED945","#CC9900"],[0.141,1],26,-52.5,-12.7,14.9).s().p("AwVj9IEEn0ICvApICoCUIAcg4IB8AEICfBwICUkOICNgfIDzC8IhPCCIDMBRIBkB6IiPDrICSA0IBoB5IBIh3ICiBUIBPCSIl3I7g");
	this.shape_47.setTransform(104.6,80.7);

	this.addChild(this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.3,161.4);


(lib.學校 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAGQgDgCAAgEQAAgDADgCIABAAQAEgDADAAQAEAAAEADQAEACAAADQAAAEgEACQgEADgEAAQgDAAgFgDgAgEgDQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQACABACAAQACAAADgBIAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBgCgCQgDgBgCAAQgCAAgCABg");
	this.shape.setTransform(88,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgEAVIABgpIAAAAIAAABIAIAAIAAAog");
	this.shape_1.setTransform(86.2,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A6391").s().p("AgUANIAAgaIApABIAAAag");
	this.shape_2.setTransform(87.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgEAEQgDgCAAgCQAAgBADgCQACgCACAAQADAAACACQADACAAABQAAACgDACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(86,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F03D29").s().p("AghAaIgKAAIAAgBIAAgZIArAAIAAgZIAsAAIAAA0g");
	this.shape_4.setTransform(90.1,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#755846").s().p("AiCA1QgSgWgHgjQgIgmALgGIANgGQAZgHAaAAQAdAAALAFQALADAEAFIADADIgIgEQgMgEgdAAQgagBgXAIQgFABgJAFQgLAFAIAkQAHAmASAWIADADQgIgFgFgGgAA7A0QgSgWgHgkQgIgmAKgFQAKgFAEgBQAZgIAZABQAeAAAKAEQALAEAEAFIAEADQgEgDgFgBQgLgEgdAAQgbgBgXAIQgEAAgKAGQgKAFAIAkQAHAmASAVIADAEQgIgFgFgGg");
	this.shape_5.setTransform(40.9,113.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3957D").s().p("AiJA2IgEgDQgRgWgIgkQgIglALgFQAKgGAEgBQAYgHAaAAQAdAAALAEIAIAFQAFAEAEAFQAFAJAEALQAPAdgBAWQAAAYgNAHQgNAIgsAAIgDAAQgdAAgQgLgAAzA2IgDgEQgSgWgHgkQgIglAKgFQAKgGAEgBQAYgHAbAAQAdAAALAFQAFABADACIAJAKQAFAJAEALQAOAdAAAWQAAAXgOAIQgMAHgtABQgeAAgSgKg");
	this.shape_6.setTransform(42.9,114.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3957D").s().p("AAxA3IgDgEQgRgWgGglQgGgmAKgFQAKgGAEgBQAXgHAaABQAdAAALAEQAFACADACIAIAKIAJAUQAMAeAAAXQgBAXgNAIQgNAHgsABQgdgBgSgKgAiJA2IgDgDQgRgXgGgkQgHgmALgFQAKgGAEgBQAYgHAZABQAdAAALAEIAIAFIAIAJIAJAUQANAegBAWQgBAYgNAIQgNAHgsABQgeAAgRgMg");
	this.shape_7.setTransform(34.4,85.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#755846").s().p("AA4A1QgRgXgGgkQgHgmAKgFQAKgGAEgBQAZgIAZABQAdAAAKAFQALAEAEAFIADADQgDgDgFgBQgLgEgdgBQgaAAgXAHQgEABgKAFQgKAFAGAlQAGAmARAWIADAEQgHgFgFgGgAiCA1QgRgXgGgkQgHgmALgGIANgGQAZgHAZAAQAdAAALAFQAKAEAFAEIACAEIgIgEQgLgFgdAAQgZgBgYAIQgEABgKAFQgLAFAHAlQAGAmARAXIADACQgHgEgFgGg");
	this.shape_8.setTransform(32.5,84.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3957D").s().p("ABZBCQgsgBgNgIQgNgHAAgXQAAgWAPgeIAJgTIAIgKQAEgCAFgBQALgFAeAAQATAAAUAFQAPADALAJIADADQADALgCAKIgDAQQgIAkgSAWQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgRAKgdAAIgDAAgAhkA/QgrgBgNgIQgOgHAAgXQAAgWAPgeIAJgUIAJgJIAIgEQAMgEAdAAQAZAAAYAIQAEAAALAHQAKAFgHAlQgJAkgSAWIgDADQgRAKgdAAIgDAAg");
	this.shape_9.setTransform(128.2,115.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#755846").s().p("AB4A+QASgWAIgmIADgOQADgKgEgLIgDgDQgLgJgPgDQgTgFgUAAQgeAAgLAFQgFABgDACIACgDQAFgEALgEQAMgEAdAAQAOgBAOADQAVADAOAJQAFADABAEQABAOgDANIgBAJQgJAjgSAWQgFAGgHAFQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAgAhFA7QATgWAIglQAHgkgKgFQgKgHgFAAQgYgIgZAAQgdAAgMAEIgIAEIADgDQAEgEAMgEQAKgFAeAAQAaAAAYAIIAOAHQAJAFgHAlQgIAkgTAWQgFAGgHAFIADgDg");
	this.shape_10.setTransform(130.3,115);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#755846").s().p("AB4A+QASgWAIgmIADgOQADgKgEgLIgCgDQgMgJgPgDQgUgFgTAAQgdAAgMAFQgFABgEACIADgDQAFgEALgEQALgEAeAAQAPgBAOADQATADAQAJQADADABAEQACAOgDANIgBAJQgJAjgSAWQgFAGgHAFQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAgAhEA7QASgWAIglQAIgkgLgFQgLgHgDAAQgZgIgZAAQgdAAgLAEIgJAEIACgDQAGgEALgEQALgFAdAAQAaAAAYAIIAOAHQAKAFgIAlQgIAkgSAWQgGAGgHAFIAEgDg");
	this.shape_11.setTransform(137.3,85.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3957D").s().p("ABZBCQgsgBgNgIQgNgHAAgXQAAgWAPgeIAJgTIAIgKQAEgCAFgBQALgFAeAAQATAAAUAFQAPADALAJIADADQADALgCAKIgDAQQgIAkgSAWQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgRAKgdAAIgDAAgAhkA/QgrgBgNgIQgOgHAAgXQAAgWAPgeIAJgUIAJgJIAIgEQAMgEAdAAQAZAAAYAIQAEAAALAHQAKAFgHAlQgJAkgSAWIgDADQgRAKgdAAIgDAAg");
	this.shape_12.setTransform(135.2,86.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(2,1,1).p("AiIAAQAAglApgaQAogZA3AAQA5AAAnAaQAqAbgBAjQAAAZgTAUQgJAJgNAJQgoAag4AAQgvAAglgTQgGgEgGgEQgogaAAgkg");
	this.shape_13.setTransform(85.4,56.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(2,1,1).p("Ag5gGIAvAaQAKgGAWgOQAZgNALgG");
	this.shape_14.setTransform(86.5,55.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755846").s().p("AhLAkQgEg5AAgOQAAgjAXgQQARgNApgCIAOABIAIAAQAnABARALQgRgGgbAAIgIAAIgOgBQgoABgSANQgWAQAAAkQgBANAEA6IAEA7IgLABQAAgQgFgyg");
	this.shape_15.setTransform(85.5,118.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3957D").s().p("AhOBiIgEg7QgEg6AAgNQAAgkAWgQQASgNAqgBIANABIAHAAQAcAAARAGIADACQAXARAAAkIgGBGIgFBBg");
	this.shape_16.setTransform(87.5,119);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ADjELIADgWIHlACIgJAXgArCEHIgIgXIHkACIADAXgAhZhsIgMgIQgogaAAgmQAAgmApgZQAogaA5ABQA3gBAnAbQAqAbgBAkQAAAZgTAUQgJAKgNAJQgoAag3AAQgwgBglgSgAgEioIAggUIAkgVIgkAVIggAUIgvgcIAvAcg");
	this.shape_17.setTransform(85.9,74.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9D5A6").s().p("ACgEfIBeo7IAQAAIgpERIgEAVIgBAKIgoELgAi+EdIgkkLIgCgKIgDgWIgmkQIARAAIBWI7g");
	this.shape_18.setTransform(86,100.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("ADiE+IABgLIHfADIgDAKgAq9E5IgEgLIHfADIACAKgAEIkpIgjAAIgJAAIhsgCIgQAAIgRAAIgUAAIg5ABIhIAAIi0AAQgWACgMgDIgIgCQgKgGABgHQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABgCQADADAFACIAHADQAMACAWAAQATgBChAAIBIAAIA5AAIAUgBIARABIAQAAIBsABIAJAAIAjABQAWABAHgBIAIgCQAEgDACgDIABAAQACADAAACQABAIgLAFIgHACIgHABIgWgCg");
	this.shape_19.setTransform(85.8,70.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EEFBFF").s().p("AEEALIgjgBIgIAAIhtgBIgPAAIgRgBIgUABIg4AAIhJAAQihAAgTABQgWABgNgDIgHgDQgEgCgDgDIgBACQABgDAJgFQAJgEANAAIAKABIABAAIIDACIAAAAIARAAQAGAAAJADQAJACAEACIAEADQgCADgFADIgIACIgIAAIgVAAg");
	this.shape_20.setTransform(86.2,38.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CA998B").s().p("ABxBYIAShxIH/g+QAWAJAMAfQANAgApBLQABATgTAEQgGACgMABIgLAAQgVABgggBIg+AAIm6ACQgGgBgHABgAmABVIlZgGIFegrIAHAxIgMAAg");
	this.shape_21.setTransform(99,61.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F0C4").s().p("AC4G5IAnkKIHdACIhhEKgABaG4IAFhAIAGhJQAAgjgWgRIgEgCQgRgLgogBIgIAAIgLgBQgrABgSANQgWARAAAjQgBANAFA8QAFAyAAAPIhbgBIhWo7IAAAAIgCgJIAAgDIAMAAIgIgwIgci/IgJg7QANADAWgCIC0AAIBIAAIA5gBIAUAAIARAAIAQAAIBsACIAIAAIAjAAQAWACAHgBIgJA8IgUB8IgTByQAIgBAGABIgCAEIgCAJIABgBIhdI6gAhmlaQgoAZgBAmQAAAmApAaIALAIQAlASAwABQA3AAAogaQAOgKAJgJQASgUAAgZQABgkgqgbQgmgbg4ABIgCgBQg4AAgnAagApdG2IhikMIHdACIAkELgADlCNIAokOQEMgCBGABICJACQAtgBALgDQALgEABgHIAMAAIhvEfgArMCJIhqkhIALABQABAHALADQAKAFAtgBICJAAIFSAGIAlEOg");
	this.shape_22.setTransform(86.1,84.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BD6853").s().p("AJfAJQhGgBkMACIgQAAIABgIIACgCIG6gCIA+ABQAgAAAUgBQgBAGgLADQgLAEgtAAIiJgCgApfACIiJAAQgtABgKgDQgLgCgBgIIA0ABIA/AAIBhABIFZAGIAAACIACAIIgRAAIlSgGg");
	this.shape_23.setTransform(86.1,70.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8A395").s().p("AqMElIg/AAIg0gBIgLAAIgSgDQgUgFABgSQAqhNAOggQAQgoAggDQDGgjEYgTIAcC/IleArIhhgBgAFGBAQEWAVDHAlQAHABAGACIn/A/gAjXgcIAAAAIDUjjQAmgvASALQARALAHAIQAGAIAEADIDVDrIAAAAg");
	this.shape_24.setTransform(81.6,40.3);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.1,129.2);


(lib.鍵盤_手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AjxCsIgEgFIgGgBIgCgGIgHgDIgDgHQgGgVAMgVQA7AIA5gUQAzgRAzgYQAggQAdgSQArgXAUguQgdghAKgrQACgMANgDIAPgBIALAIIABAIIgFAHIAFACIANAEIAFAGIAGACIAVAfIgIgfIgHgEIgBgaIBEgqQAmARARAnQAOAggSAdQgIANgPAJIhHAkQg4BFhPAqQhXAvhiAOQgUAEgVAAQgVAAgVgEg");
	this.shape.setTransform(26.6,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA64E").s().p("AgXATIgGgBIgFgGIgNgFIABgHQAfgpAzgHIAMgCIhCApIACAZIAGADIAJAgg");
	this.shape_1.setTransform(42.3,5.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,35.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA015E").s().p("AgeAaQgQgEgDgMQgBgDAAgFQADAKAEACIAUACQATABAWgPQAXgOAHgPIADAHQADANgNALQgNANgVAGQgMAFgMAAIgNgCg");
	this.shape.setTransform(59.8,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB026F").s().p("AgVAeIgUgCQgFgBgCgKQABgKAIgKQAMgTAWgFQAVgFAQAHQAMAFAFAIQgGAMgYAQQgUAOgSAAIgCAAg");
	this.shape_1.setTransform(59.7,67.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB026F").s().p("AAdBQIgHgHIg1hKIgpg4IAcAXQAcAZASATQATAVAEALQAGAKACADQAAgdAmhvQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAAEIgOBzQgQAkgFAUIgJgIg");
	this.shape_2.setTransform(47.1,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3399").s().p("AjZALQBCACAxANQAPAEAIADQgIgngBg3QgBg2AWhVQAAAPAgBXQAgBbANAMQADgDAggyQAggzAMgKIAEAAQAAASgEBPIACABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAQgGAhghQARgRA7gfQgdAVhDB6QglBEgUAtIANh1IAAgFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQglByAAAdQgDgDgFgLQgFgLgTgVQgSgVgbgYIgdgYIApA5IA1BLQiZiXhbgng");
	this.shape_3.setTransform(46.6,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0C1E0").s().p("AhGDHQABgPAPgCQAPACABAPQgBAPgPACQgPgCgBgPgACACvQABgNALgCQAJACABANQgBAOgJABQgLgBgBgOgAgqBhQACgPANgCQAOACABAPQgBAPgOACQgNgCgCgPgAA6gMQABgTARgCQAPACACATQgCARgPABQgRgBgBgRgACvghQACgNAKgBQALABABANQgBAOgLACQgKgCgCgOgAiig7QABgNAMgBQANABABANQgBAMgNACQgMgCgBgMgAgVhAQAAgLAKAAQAJABABAKQgBAKgJABQgKgBAAgKgAjehqQAAgLAKgBQAJABACALQgCANgJABQgKgBAAgNgACHiMQABgJAHgBQAGABABAJQgBAIgGABQgHgBgBgIgADFjJQACgMAKgCQANACABAMQgBANgNABQgKgBgCgNg");
	this.shape_4.setTransform(69.4,97.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B6CB6").s().p("Ag+CJQACgTAUgCQATACACATQgCATgTACQgUgCgCgTgACDCGQACgQAQgCQAQABACARQgCARgQACQgQgCgCgRgAASA2QACgVAUgCQASACACAVQgCAVgSACQgUgCgCgVgAByAhQACgRAPgCQAOACABARQgBASgOABQgPgBgCgSgAg8gCQACgMAKgCQALACABAMQgBALgLABQgKgBgCgLgAilgbQABgUAWgCQAVACACAUQgCAUgVACQgWgCgBgUgAAbhVQADgWASgCQATACABAWQgBAVgTACQgSgCgDgVgABjiLQACgRANgBQAMABACARQgCAPgMACQgNgCgCgPg");
	this.shape_5.setTransform(76.4,99.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B6CB6").s().p("AiNBFQghgIgVgqQgCgEAEgEQAFgCACAFQAUAlAcAHQAeAGAlgVQAkgUAkgbQAmgcAlgVQAmgVAhAGQAeAHATAjQADAFgFADQgEACgDgEQgRgggagGQg9gBhMA+QhEA7hAAIIgFABIgLgCg");
	this.shape_6.setTransform(64.1,73.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF100").s().p("AhwArIATgGIACAogAhJAaIAfgUIADA2gAgbgEIAbgVIgFA4gAARgmIAdgTIADA/gAA+hBQAZgLAaAAIgPBMg");
	this.shape_7.setTransform(65.7,74.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYBUQhIgDg2gqQghghAAgGQA6A6A2gdQA3gcA2gtQA4gtA+AHQAjAQgJAnQgSA2g2AcQg4Adg+AAIgQAAg");
	this.shape_8.setTransform(63.5,75.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAWQgZgJADgTQAIgUAYAFQAYAJgDATQgGAQgSAAIgHgBg");
	this.shape_9.setTransform(42.8,59.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF100").s().p("AgQBDQhLgaAJg9QAYg8BMAPQBKAZgKA+QgSAvg2AAQgLAAgPgCg");
	this.shape_10.setTransform(40.7,59.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FD9F6").s().p("AgZBjQhugnAOhbQAihYBxAVQBuAngOBcQgcBGhPAAQgSAAgWgEg");
	this.shape_11.setTransform(41.8,59.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAXQgOgRAUgVQAWgVARAOQAOATgUAVQgNALgKAAQgIAAgIgGg");
	this.shape_12.setTransform(70.8,51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF100").s().p("AhFBGQgqg2A8hDQBDg8A2AqQArA3g8BDQgpAighAAQgaAAgWgRg");
	this.shape_13.setTransform(70.2,52.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9FD9F6").s().p("AhmBnQhAhPBahlQBjhYBRA+QA+BRhYBjQg8A1gyAAQglAAghgbg");
	this.shape_14.setTransform(71.3,51.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B6CB6").s().p("AgfE4QgCACgdgTQgcgTgcg6QACgFgSgSQgRgTgvAeQgCACgfAVQgeAVgkAGQAJgTAOgPQAegMAWgQIAYgSQAvgdARATQASASgCAFQAcA6AcASQAdATACgCQAiANACgfQADASgGAVQgCANgNAAQgIAAgKgEgAA9DgQgDgCgWgEQgVgEgKAUIgCgIQgBgpAbADQAbADAFAEQBcAQAfgHQAggGABgIQALANgKANQAFAEgaALQgKAFgWAAQgjAAhFgMgAC4CKIgOgGQgWgSAWgEQAXgDAFACQBYgFAAgJIACAAQAWALgYATQAAAIhYAFIgOAAgAByAdQg3hVAHhjQAABUAwBHQADABATAXQATAVgJAaQgXgmgJgEgABYkjIAHgYQgIAogCA0QAAgkADggg");
	this.shape_15.setTransform(86.1,105);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B6CB6").s().p("AgfE5QgCABgdgTQgcgSgcg6QACgFgSgTQgRgSgvAdQgCADgfAVQgeAVgkAFQAqhKBVgYQBWgYBKACQBHACAFACQBogYgWgpQgXgpgLgEQg2hUAGhhQAFhhAYhDQgRBOANBoQAMBoBUBNQABACAXAPQAXAQAhAEQAGABARALQATALgXASQAAAHhYAFQgFgBgXADQgWADAWATQAFABAcAPQAcAQgNAXQAFADgaAMQgZALhvgSQgFgEgbgDQgbgDABApQADAFgBAgQgBAXgRAAQgIAAgKgDg");
	this.shape_16.setTransform(86.1,104.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUgbQgogBgHAiQgGAlABAFIgvgLQAZiJA5AUQA3ATAyBDQAxBFAEAJQhmhtgngCg");
	this.shape_17.setTransform(35,38.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhSATQAThQAugoQArgoBMB3IgoAcQAAgGgUgfQgUgfgjARQglASgzCLQgBgKAUhTg");
	this.shape_18.setTransform(72.7,28.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B6CB6").s().p("AiICIQgpgtAKhDQAJhBA4g7QA8g5BCgKQBCgJAsAqQArAsgJBDQgKBBg6A8Qg6A4hBAKQgMACgMAAQg0AAglgig");
	this.shape_19.setTransform(71.9,50.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B6CB6").s().p("AgiCFQhFgVglgxQgkgyANg3QARg4A4gaQA5gYBEARQBFAUAlAyQAkAygNA3QgRA4g4AZQgiAOgnAAQgYAAgcgGg");
	this.shape_20.setTransform(41.5,59.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9999CC").s().p("ACYIyQgDABgcgSQgdgTgbg6QABgFgRgTQgRgSgtAdQgFAHgxAdQgxAdgngcQgEgBgHgVQgHgTAwgZQAEgBAQgJQAPgJgegHQgGACgsABQgtABgRgWQgDgCABgPQACgPAwgIIAlgEQAKAFA0gFQAzgEgdhGQgchGjpjCQgKgBhGhMQhGhMgIhxQgHhwCxhvQADgEBPggQBPggB3gGQB0gGB7BIQALgCA3BPQA4BQgfDEQgDAEgQBOQgQBMANBnQANBnBTBOQAAACAXAOQAYAQAhAEQAFABASALQATAMgXARQAAAHhYAFQgGAAgWADQgWADAWASQAFABAcAQQAcAQgNAXQAEADgZALQgaAMhvgTQgEgEgbgDQgbgCABAoQADAFgBAgQgBAXgUAAQgHAAgKgDg");
	this.shape_21.setTransform(68,80);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BA015E").s().p("AgeAbQgQgEgDgMQgBgEAAgFQADALAEABIAUACQATABAWgPQAXgOAHgPIADAHQADANgNALQgNANgVAHQgMAEgMAAIgNgBg");
	this.shape_22.setTransform(59.8,67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DB026F").s().p("AgVAfIgUgCQgFgCgCgKQABgKAIgKQAMgUAWgFQAVgFAQAIQAMAFAFAHQgGANgYAQQgUAPgSAAIgCAAg");
	this.shape_23.setTransform(59.7,66.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DB026F").s().p("AAdBRIgHgHIg1hLIgpg5IAcAXQAcAaASATQATAVAEALQAGALACADQAAgdAmhyQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAAFIgOB1QgQAkgFAVIgJgJg");
	this.shape_24.setTransform(47.1,32.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF3399").s().p("AjZALQBCACAxANIAXAHQgIgngBg4QgBg3AWhXQAAAQAgBYQAgBcANANQADgDAggzQAgg0AMgKIAEAAQAAASgEBRIACAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAQgHAhghQARgRA7gfQgdAUhDB9QglBFgUAuIANh4IAAgEQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQglBzAAAeQgDgDgFgLQgFgLgTgWQgSgUgbgaIgdgYIApA6IA1BNQiZiahbgog");
	this.shape_25.setTransform(46.6,19.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0C1E0").s().p("AhGDKQABgPAPgCQAPACABAPQgBAPgPADQgPgDgBgPgACACyQABgOALgBQAJABABAOQgBAOgJABQgLgBgBgOgAgqBjQACgQANgBQAOABABAQQgBAPgOACQgNgCgCgPgAA6gNQABgSARgCQAPACACASQgCASgPABQgRgBgBgSgACvghQACgNAKgCQALACABANQgBAOgLABQgKgBgCgOgAiig8QABgNAMgCQANACABANQgBANgNABQgMgBgBgNgAgVhBQAAgLAKAAQAJABABAKQgBAKgJABQgKgBAAgKgAjehsQAAgLAKgCQAJACACALQgCANgJABQgKgBAAgNgACHiOQABgKAHgBQAGABABAKQgBAIgGABQgHgBgBgIgADFjMQACgNAKgCQANACABANQgBANgNABQgKgBgCgNg");
	this.shape_26.setTransform(69.4,97.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B6CB6").s().p("Ag+CMQACgVAUgCQATACACAVQgCATgTACQgUgCgCgTgACDCIQACgRAQgCQAQACACARQgCASgQACQgQgCgCgSgAASA3QACgWAUgCQASACACAWQgCAVgSADQgUgDgCgVgAByAiQACgSAPgCQAOACABASQgBASgOABQgPgBgCgSgAg8gCQACgNAKgBQALABABANQgBALgLABQgKgBgCgLgAilgcQABgUAWgDQAVADACAUQgCAVgVACQgWgCgBgVgAAbhXQADgWASgCQATACABAWQgBAVgTACQgSgCgDgVgABjiOQACgQANgCQAMACACAQQgCAQgMACQgNgCgCgQg");
	this.shape_27.setTransform(76.4,98.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B6CB6").s().p("AhsA7QgXgLgLgsQgBgEAEgCQAEgBABADQAKAnATAJQAVAJAcgTQAdgSAcgYQAegZAdgTQAegSAWAJQAVAJAKAmQABAFgDACQgDACgCgEQgJgigSgIQgrgGg+A5Qg3A2guADIgCAAQgFAAgEgCg");
	this.shape_28.setTransform(64.2,72.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF100").s().p("AhWAiIAOgFIgDApgAg5ATIAZgRIgFA3gAgUgHIAUgUIgJA4gAAOgmIAYgRIgGBAgAAyg+QATgJASACIgTBLg");
	this.shape_29.setTransform(65.3,74.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdBNQgzgIgigvQgUgiABgHQAjA/AqgZQAqgXArgrQAugpArAMQAYASgMAoQgSA1gqAYQgkAVgkAAQgNAAgOgDg");
	this.shape_30.setTransform(63.7,75.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF100").s().p("AgQBEQhLgaAJg/QAYg9BMAPQBKAbgKA+QgSAxg1AAQgLAAgQgDg");
	this.shape_31.setTransform(40.7,58);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9FD9F6").s().p("AgZBlQhugnAOheQAihaBxAWQBuAngOBeQgcBIhPAAQgSAAgWgEg");
	this.shape_32.setTransform(41.8,58.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAXQgOgRAUgWQAWgVARAOQAOAUgUAVQgNALgJAAQgJAAgIgGg");
	this.shape_33.setTransform(70.8,49.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFF100").s().p("AhFBHQgqg2A8hFQBDg9A2ArQArA4g8BEQgpAjghAAQgaAAgWgSg");
	this.shape_34.setTransform(70.2,50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9FD9F6").s().p("AhmBqQhAhSBahmQBjhaBRBAQA+BRhYBmQg8A1gzAAQglAAgggag");
	this.shape_35.setTransform(71.3,49.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6B6CB6").s().p("AgfE+QgCABgdgTQgcgTgcg7QACgFgSgTQgRgTgvAeQgCADgfAVQgeAWgkAFQAJgTAOgPQAegMAWgQIAYgTQAvgeARAUQASATgCAFQAcA6AcATQAdATACgCQAiANACgfQADASgGAVQgCAOgNAAQgIAAgKgEgAA9DkQgDgCgWgEQgVgEgKAUIgCgIQgBgpAbACQAbAEAFADQBcARAfgHQAggGABgJQALANgKAOQAFAEgaALQgKAFgWAAQgkAAhEgMgAC4CMIgOgFQgWgTAWgEQAXgDAFACQBYgFAAgJIACAAQAWALgYAUQAAAHhYAFIgOAAgAByAeQg3hXAHhlQAABWAwBIQADABATAXQATAWgJAbQgXgngJgEgABYkoIAHgZQgIApgCA1QAAgkADghg");
	this.shape_36.setTransform(86.1,104.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B6CB6").s().p("AgfE+QgCABgdgTQgcgTgcg7QACgFgSgTQgRgTgvAeQgCADgfAVQgeAWgkAFQAqhLBVgZQBWgYBKACQBHACAFACQBogYgWgqQgXgqgLgEQg2hVAGhjQAFhjAYhEQgRBQANBpQAMBqBUBPQABACAXAPQAXAQAhAEQAGABARAMQATALgXASQAAAHhYAFQgFgBgXADQgWADAWATQAFACAcAPQAcAQgNAXQAFAEgaALQgZAMhvgTQgFgEgbgCQgbgDABApQADAFgBAhQgBAYgRAAQgIAAgKgEg");
	this.shape_37.setTransform(86.1,104.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUgcQgogBgHAiQgGAmABAGIgvgMQAZiLA5AUQA3AUAyBEQAxBGAEAJQhmhvgngCg");
	this.shape_38.setTransform(35,36.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhSAUQAThSAugoQArgpBMB4IgoAdQAAgGgUgfQgUgggjASQglASgzCNQgBgKAUhUg");
	this.shape_39.setTransform(72.7,27);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B6CB6").s().p("AiICKQgpguAKhEQAJhBA4g9QA8g5BCgLQBCgJAsAqQArAugJBEQgKBCg6A8Qg6A6hBAKQgMACgMAAQg0AAglgjg");
	this.shape_40.setTransform(71.9,49.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B6CB6").s().p("AgiCHQhFgVglgyQgkgzANg4QARg5A4gaQA5gaBEASQBFAUAlA0QAkAzgNA3QgRA5g4AaQgiAPgmAAQgYAAgdgHg");
	this.shape_41.setTransform(41.5,58.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9999CC").s().p("ACYI7QgDACgcgTQgdgTgbg7QABgFgRgTQgRgTgtAeQgFAHgxAdQgxAegngcQgEgCgHgVQgHgUAwgZQAEgBAQgJQAPgJgegHQgGACgsABQgtABgRgWQgDgCABgQQACgPAwgJIAlgEQAKAFA0gEQAzgEgdhHQgchIjpjFQgKgBhGhOQhGhNgIhzQgHhyCxhxQADgEBPghQBPggB3gHQB0gFB7BJQALgCA3BQQA4BSgfDHQgDAEgQBQQgQBNANBoQANBpBTBQQAAACAXAOQAYAQAhAFQAFAAASAMQATAMgXARQAAAIhYAFQgGgBgWADQgWAEAWASQAFABAcAQQAcAQgNAYQAEADgZALQgaAMhvgTQgEgEgbgDQgbgCABAoQADAGgBAhQgBAXgUAAQgHAAgKgEg");
	this.shape_42.setTransform(68,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{y:59.7}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_9,p:{y:58.3}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},5).wait(5));

	// 圖層 2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B6CB6").s().p("AilAeIgTgUQAuAsBoAfQBlAfB+hUQg5A9hgAYQgQAEgRAAQhPAAhdhbgAi/gbQADACARAGQATAHAFgLQABACgEgJQgEgHgmgcQAFAAAZAPQAbAPgCAUQAAACgMADIgFAAQgNAAgYgRgAiwhDQAGACAfAFQAhAEgDgSQAAgCgOgOQgNgOgagHQADAAAVAHQAWAHARAVQAFAFgIAQQgDAFgLAAQgSAAgqgRgAiQh4QAcABALgBQgSAGgKAAQgKAAgBgGg");
	this.shape_43.setTransform(19.8,84.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6B6CB6").s().p("AiMCmQCVgNA9hZQA9hXAKg/IgEAcQgTCZhYApQhDAhhBAAQgTAAgTgDgABWhMQgOgPALgcQALgbADgDQgMAsACAKQABAJACgDQAKAGAKgRQAKgPABgEQgKAhgMAGQgJAFgDAAIgBgBgAAihXQgQgHAAgGQABgbANgUQAMgTACgCQgaA0AIAKQAJAQAXgXIAYgdQgfA4gPAAIgEgBgAAaijQAFAKghAOQAHgGAVgSg");
	this.shape_44.setTransform(113.8,58.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9999CC").s().p("AixA5QgIgGgkgsQgjgrApgLQgCgDACgUQACgUAZgGQgBgFAKgaQAKgZAhAHQAIAAApAMQAoALgZAVIgRAFQgQAFgKgCQgCAJAfAPQACAAAQgRQARgQAHgcQAAgBAFgJQAFgJAPAEQADAAADASQAEASgZAlQgKAJgDAfQAEAEgNAiQABAKBBAWQBEAWBzhbIAtAZQgCAGg5A8Qg6A9heAWQgQAEgPAAQhQAAhdhag");
	this.shape_45.setTransform(20.9,81.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9999CC").s().p("AhdC7QhTgMgHgFIAUgvQCUAAAlg7QAng7gGgHQgggUAAgGQgFgKgOgGIgPgHQgqgNgIgQQgIgQACgBQAJgNAJADQAKAEAAABQAXARAWADIAYACQAPgggHgFQgIAHgOAGIgQAHQggAAAZgjQAXgiAGgFQAUgbAZAOQAXAOADAEQAXgLAOAPQAOAOABAEQAngSAAA6QAAA4gDAKQgTCYhXAqQhFAhg/AAQgSAAgSgCg");
	this.shape_46.setTransform(109.5,56.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6B6CB6").s().p("AiPA9QgBAAgXgNQA6AcBsgBQBpgCBeh1QgjBLhUAzQgiAVgsAAQg9AAhTgqgAi5AMIAWACQATAAABgLIgEgFQgHgFgsgRQAFgBAdAHQAdAHAFARQAAACgKAHQgFADgJAAQgMAAgTgGgAi3gdQAFAAAggFQAggGgHgRQgBgCgSgJQgRgJgaAAQADgBAVABQAYAAAXAPQAFAEgDARQgCANgoAAIgfgBgAiphbQAbgHAKgEQgWAOgJAAQgEAAgCgDg");
	this.shape_47.setTransform(21.5,91.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B6CB6").s().p("AirB8QCUAfBThFQBUhFAcg5IgMAaQhACQhgAPQgaAEgbAAQhAAAg2gZgAB0guQgIgTATgXQASgYADgCQgYAogBAKQgBAJACgCQAIAIAOgOQAOgLACgEQgTAegNACIgLABIgDgBgABGhHQgNgMACgGQAIgaASgPQASgQACgBQgoArAEANQAFASAcgRIAggUQgqApgQAAQgDAAgDgCgABViUQABALglADQAKgCAagMg");
	this.shape_48.setTransform(115.1,63.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9999CC").s().p("AiRBlQgKgDgvggQgvghAjgXQgCgCgFgSQgEgUAWgOQgDgEACgcQACgcAhgDQAIgCArgBQAqgBgSAcIgPAKQgNAJgKABQAAAKAjAFIAMgWQAKgVgBgeQgBAAACgKQACgKAQgBQADgBAIARQAJAQgMArQgHAMAHAfQAFADgCAkQAFAKBEABQBIABBQh7IAzAKQABAIgkBMQgkBLhTAyQgjAUgpAAQg/AAhSgqg");
	this.shape_49.setTransform(21.6,87.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9999CC").s().p("AiJCXQhMgjgFgHIAhgpQCNArA1guQA3gugDgLQgZgaACgGQgCgMgMgKIgNgLQgjgZgDgSQgDgSACAAQANgKAIAFIAHAIQAQAYAVAJIAXAJQAYgbgFgHQgKAFgQACIgRABQgggJAigaQAigbAIgDQAagUAUAVQASAUABAEQAagDAJASQAJASAAAEQAqgGgRA4QgQA1gGAJQhACRhfAPQgeAFgZAAQg+AAg1gYg");
	this.shape_50.setTransform(112,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,1.2,130.9,135.5);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.book_dvd();
	this.instance.setTransform(76.4,-30.3,0.734,0.734,-31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// 圖層 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAbQgLgBgLgHIgFgCQgEgCgFgFQgGgFgBgGQgCgIAFgLIANAAIAcABQAPAAAPgBQAPgCAIgEIADAHQADAHAAAJQABAHgIAIQgHAJgUADIgIACIgKABIgIAAg");
	this.shape.setTransform(4.9,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.6,1,1,3,true).p("AgLAvQABAAAGgPQAEgPAGgTQAGgWABgW");
	this.shape_1.setTransform(9.2,70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.6,1,1,3,true).p("AgBA5QAAAAAAgLQAAgLABgRQAAgSAAgSQAAgUACgT");
	this.shape_2.setTransform(4.4,69.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.6,1,1,3,true).p("AAFAxQAAAAgCgKQgCgKgBgPQgBgOgCgRQgBgRAAgO");
	this.shape_3.setTransform(0.2,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67C6DD").s().p("AgMBQQgNgBgKgHIgIgDQgHgDgKgJQgJgKgHgUQgIgUABghIACgJQACgKAKgLQAKgMAWgHQAVgHAlADIAJAEQAJADAMAIQANAIAJANQAKAOACATIAAAKQgBAJgEAOQgEAOgJAOQgKAOgTAHIgIADIgUAEIgMACIgKgBg");
	this.shape_4.setTransform(5.4,72);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67C6DD").s().p("AgDAbIgDgIQgCgIgCgLQgCgNgBgQIAFAAIAKAAIACAKIAFAUIAEATIgDAEQgCAEgFACIgCAAQgBAAgDgDg");
	this.shape_5.setTransform(4.8,82.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(4));

	// 圖層 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAhQgOgBgNgJIgGgDQgGgDgGgFQgGgGgCgIQgCgKAGgNIAKAAIAZABIAdAAQARAAAOgCQANgCAHgEIAFAIQADAIABAMQAAAJgJAKQgJALgZAEIgKACIgMABIgKAAg");
	this.shape_6.setTransform(5.6,77);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.7,1,1,3,true).p("AgOA6QAAAAAFgLQAFgKAEgRQAGgSAFgSQAFgUAAgV");
	this.shape_7.setTransform(11,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.7,1,1,3,true).p("AgCBHQAAgBAAgNQABgOAAgVQABgWAAgWQABgZACgX");
	this.shape_8.setTransform(5.1,67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.7,1,1,3,true).p("AAGA9QAAgBgCgMQgCgMgCgTQgCgRgCgVQgCgUABgS");
	this.shape_9.setTransform(-0.1,68.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#67C6DD").s().p("AgQBjQgPgCgNgIIgJgDQgJgEgNgMQgLgMgJgZQgJgZABgnIABgJQACgHAGgLQAGgLAPgKQANgKAZgGQAYgFAkADIAMAEQALAFAPAKQAPAJAMARQALAQADAYIgBAMQAAALgFASQgEARgNARQgLARgYAKIgKADQgJADgPACIgRABIgLAAg");
	this.shape_10.setTransform(6.3,70.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67C6DD").s().p("AgEAiIgDgKQgDgKgDgOQgDgRAAgTIAGAAQAFABAIgBIABAIIADASIAFATIAFAQIgEAFQgDAEgFADIgEAAQgBAAgEgDg");
	this.shape_11.setTransform(5.5,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},3).wait(4));

	// 圖層 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF8A").s().p("AgeBFQAcgfAKgaQALgaABgUQABgVgEgPQgFgQgFgHIgEgHQAWAdAHAaQAHAagFAVQgEAXgMASQgLASgLANIgWAUIgKAHg");
	this.shape_12.setTransform(85,48.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtCBIgNgDQgdgPgNgSQgNgRgDgRQgCgQADgOQAEgNAEgIIAFgIQANgZASgLQARgKAUgBQAUgBAPAFQARAEALAFIALAGQARgGAIgMQAIgMADgOQADgNgBgKIAAgKQgDgSACgEQACgEAEAEQAFAEAFAIQAFAIADAGIAEAHQAOAggCAaQgBAagLATQgKAVgNAOQgNAOgKAIIgLAHQgMAdgRANQgSAMgQACIgPABQgIAAgHgBg");
	this.shape_13.setTransform(76.6,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},3).wait(4));

	// 圖層 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF8A").s().p("AgWBqQAYgcAKgcQAJgcgCgaQgDgbgJgYQgHgYgMgSQgLgSgIgKIgJgLQApAkATAiQATAjACAfQABAcgJAaQgIAZgNATQgMASgJALIgKAKg");
	this.shape_14.setTransform(89.8,52.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiCxQghgIgRgNQgRgNgHgQQgGgPAAgOQAAgPACgIIADgKQAGgcAOgPQAPgPATgGQATgDARAAQASAAAKACIAMABQAMgGAEgSQAFgSgBgWQgBgXgDgVIgGgjIgDgOQgHgQACgDQACgCAIAFIAQANIAQAQIAHAHQAZApAKAhQAJAhgCAbQgCAYgJATQgKAUgKANQgMAMgIAHIgIAGQgFAfgOARQgOAQgRAHQgOAGgNAAIgLABIgBAAg");
	this.shape_15.setTransform(82.3,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},3).wait(4));

	// 圖層 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASBoIgPABQgMABgWgEQgWgEgZgQQgZgPgVghQgVghgMg2IgBgKIABgWIACgVQABgJAEAAQAEAAAGAQIAEANQADAMAIARQAHASAMAQQALAQAQAHQAQAIAUgFIAFgGQAEgJAJgMQAIgMAMgMQAKgMAOgIQAOgJAQAAIAKAAQAKABAQAEQAPADAQAIQAQAIALAQQAMAPADAWQADAZgLAjIgGAJQgGAIgMALQgLALgRAIQgQAJgUAAIgDAAQgTAAgWgMg");
	this.shape_16.setTransform(6.9,86.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF8A").s().p("AAnBmQgVgEgVgLQgXgLgUgXQgTgXgMglQgLgmACg6IABALQAAAOAEAVQAEAWAJAYQAJAWARAWQAQAWAaAOQAaAPAnACIAWARIgOABIgHAAQgLAAgQgCg");
	this.shape_17.setTransform(0.1,86.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD4A13").s().p("AmfB9QAPg4AYguQAZgsAbgjQAbgiAXgYQAZgXAPgNIAQgLQBYgxBOgUQBMgUBCACQBCACA2AQQA2AQApAXQAqAYAcAWQAcAXAOAQIAOAQQgggTgogFQgngFgqAEQgqAFgnAKQgnAJgfALQggALgRAIIgTAIQhOAWg0AGQg2AFghgGQgggGgPgLQgRgKgFgJIgFgJQAAAlgPAkQgOAngXAjQgWAlgaAfQgYAfgXAYQgWAYgPANIgPANQABhDAPg5g");
	this.shape_18.setTransform(31.5,31);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B52010").s().p("AmtCfIANgLIAhggQAVgUAXgdQAYgdAWgkQAXgiAQgpQARgqAGguIAJAKQAJAKAUAMQAVALAjAGQAjAGA1gIQAzgHBIgcIASgIIAugRQAegLAlgIQAkgJAogEQAogDAnAHQAmAHAgAUIgQgEQgQgFgfgCQgggDguAEQguAEg7APQg8AQhIAhIgPAGIglANQgXAHgeAFQgdAFgfgBQgeAAgbgLQgbgKgUgXIABAMQABAMgCAWQgDAWgKAeQgLAdgXAmQgXAlgnArQgoAqg9Avg");
	this.shape_19.setTransform(31.4,39.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFEB00").s().p("AmyDKIgDgVIgBgJQA4gqAlgtQAmgtAXgpQAYgrALgiQAMgiAFgUIADgVQAjAcAmAJQAmAIAlgEQAlgEAegKQAcgKASgIIATgKQAzgdAwgQQAwgPAqgFQAqgFAgABQAgABASADIATAEQASAHAMAKQANALAGAIIAHAIQgsgPgvgBQgugCgrAGQgrAHgiAKQgiAJgUAIIgUAIQhBAkgyAOQg0ANgmAAQgngBgagIQgZgIgNgIQgNgIAAgBQABAygQAsQgPAqgYAmQgZAmgdAdQgcAfgZAVIgpAgIgQALIgDgWg");
	this.shape_20.setTransform(32.4,41);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgjCJQgggCghgQQghgPgfgiIgHgGIgMgQQgHgJgCgKQgDgLAGgIQAHgJATgCIAZgEQAYgEApgLQApgMAxgXQAzgXA3gmIAGgGIAPgLQAJgFAKABQAKAAAIAMQAJALAEAcIAAARQAAAQgFAZQgEAZgMAaQgNAcgXAaQgXAagmAQIgQAGQgPAFgZAFQgSADgSAAIgTgBg");
	this.shape_21.setTransform(44.6,72);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgBAaQgLgBgHgIQgHgJAAgJQABgLAIgHQAKgHAIAAQALABAIAIQAHAKgBAIQgBALgIAIQgIAHgJAAIgBgBg");
	this.shape_22.setTransform(56.9,40.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRA0QgOgEgKgMQgKgMgDgOQgCgNAEgOQAFgOAMgKQAMgKAOgDQANgCANAEQAOAFAKAMQALAMACAOQADANgFANQgEAOgMAKQgMALgOACIgKABQgIAAgJgDg");
	this.shape_23.setTransform(55.8,38.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgHAKAAQALAAAIAHQAIAIgBAKQABALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_24.setTransform(20.1,55.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_25.setTransform(17.9,55.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF8A").s().p("AicHZQhLgag+guQg+gtgug+Qgtg+gZhLQgZhLgBhSQABhRAZhLQAZhLAtg+QAug+A+guQA+gtBLgZQBLgZBRgBQBSABBLAZQBKAZA/AtQA+AuAtA+QAuA+AaBLQAZBLAABRQAABSgZBLQgaBKguA/QgtA+g+AtQg+AuhLAaQhLAZhSAAQhRAAhLgZg");
	this.shape_26.setTransform(38.1,56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFEB00").s().p("AinH4QhPgchCgwQhDgxgwhCQgxhCgahQQgbhQAAhXQAAhXAbhQQAahPAxhCQAwhDBDgwQBCgwBPgbQBQgbBXAAQBXAABQAbQBPAbBDAwQBCAwAxBDQAxBCAbBPQAaBQABBXQgBBXgaBQQgbBQgxBCQgxBChCAxQhDAwhPAcQhQAahXABQhXgBhQgag");
	this.shape_27.setTransform(38.2,56);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF54").s().p("Ag6JoQgjgNghgmIgKgIQgKgIgRgLQgQgLgWgKQgWgKgZgFQgYgFgaAFIgOACQgNABgWgBQgVAAgZgFQgYgFgXgNQgXgNgQgXQgRgXgEgkQgFgkAMg1IgCgLQgBgKgFgQQgGgQgJgSQgKgRgQgPQgQgPgXgHIgLgGQgLgGgPgLQgPgMgMgRQgMgRgDgWQgDgWAMgbQAMgbAigeIAHgHQAGgHAHgOQAIgNAFgTQAFgUgCgaQgCgZgNggIgFgQQgEgQgEgaQgCgaAEgdQAFgeARgcQARgcAkgUQAjgVA8gHIAIACQAJABAQgDQAQgCAXgLQAXgKAdgXQAcgXAignIAHgKQAHgJAOgNQANgOAVgMQAUgNAcgHQAbgHAhADQAiADAlASIAVAJQAVAHAkAKQAkAKAuAHQAuAHAzgCIAQgBQAQgBAYADQAZACAbAHQAbAIAZAQQAYARAPAbQAPAcgBAqIABAQQABAPAEAXQAFAYAKAbQAKAaASAYQASAXAcAPIALAHQAKAGAPANQAQANAOAVQAOAVAJAcQAIAdgDAlQgDAlgUArIgKALQgJAKgOAUQgNATgMAaQgMAagHAgQgFAfAFAjIACAPQABAPgCAXQgDAXgKAaQgKAbgXAXQgXAXgnAOQgoAOg8AAIgQACQgPAEgbAJQgbAIgiASQghARgmAbIgMANQgMAMgVAQQgWAQgcAOQgdAOggADIgNABQgaAAgbgLg");
	this.shape_28.setTransform(38.2,58.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-208.3,452.1,329.2);


(lib.rocklogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#271E1C").s().p("ACcEbQgHgFgKgJQgKgJgbgPQgugZgmgtQgCgEAAgCQADgCACABQAvAOAkAEQAHABAAgDQADgBAAgJQgEhrAFhsQAFheAKhRQACgMgGgEIgFgEQgmgIg3AeQggASgqgQQgWgIgKABQgLACABgEQAAgBAEgDQCKhPBVAdQAoAMAKApQADARgDAGQgDAEgCAMQgfCFASEGQAFA3gMAPQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBgAiIClQgUgOgMgZQgKgXACgYQADgVgLgfQgHgSACgPQADgOAIgJQAHgHABABQADACgEAHQgGAKARAQQAJAGAHALQAugTA3gdQAhgPAkAmQAbAZgMAQQggAyADAMQgCAGABAHQAJAKAAAEQAAALgJAAQhAABgyARQACAKgCAGQgDAKgGAAIAAAAQgHAAgRgMgAh1BmQASgBAOgFQAggLAFgKQAMgUAHgUQACgLgCgCQgFgCgLAFQg1AbgegCgAiDg5QghgLgKgnQgDgLAKACQAaAGBGgdQAugVAbACQAhAEADATQACASgYAJQg+ARg6AeQgJAEgLAAIgHAAg");
	this.shape.setTransform(143.8,54.7,0.217,0.217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#271E1C").s().p("ACLDXQgJgPgQgwIgJgZQgvAIgHAEQhhAYg6AmQgQANgQAGQgNADgIgOQgOgXgKgcQgGgVAKgDIAQgBIASgBQAMgEAHgFQAwgvAvhcQARgmgNgaQgEgGAAgDQADAAAHABQAkAQAQARQAfAogeAUIgeAlQgNAagUAYQgJALABADQACADAQgEQBCgPAtAEIgQglQgDgEgBgFQgBgGADgDQADgCAFABQAFABAJAGQBHA0AJAhQAFAYgXA4QgGAMgFAAQgEAAgEgHgAjmgLQgDgBgDgIQgKgkANgEQAagNAZgYQABgDADAAQA0g2AGggQADgLgGgLQgDgGABgEQADgDAJACQAsAJAaAUQATANAAAQQAAAKgHAJQgFAGgGAAQgSADgoAjQgwAuhEAiQgJAHgEAAIgBAAgAA7huQABgEACgBQBTgVAIgVQgJgag8gTQgMgKAOgCQA5gMAjAKQAmAMAPAbQAKAVAAARQgFAQgIAIQgJAHgWgDQgYgEgjACQggAEgoABQgIAAABgCg");
	this.shape_1.setTransform(128.9,54.1,0.217,0.217);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#271E1C").s().p("AgtD2QgagYgMgpQgIgsALh8IAOiQQACgMAIgMQAIgKAEAAQAHABAAAQIABALQAcgFAbgKQArgOAOAFQAGADAGAKIAIgqQAEgTgIgFQgNgLgsATQgYALgTgDQgMgCgOACQgLADgBgIQgCgHAMgJQAdgaASgDQA2gVAbAGQArAOAcAwQAHAKgLAKQgSAegMAsQgZBYgWAKQgPAGgFgHIgHgKQhAAXgTAKQgDACgIAAQgKBNADBmQABAIAEADQADAAADgDQAngWA4gyQAFgEADACQACADgCAGQgLAlgUAUQgcAcgCAQQgIAbgJAAIgBAAQgOAAgUgTgAgdgmQBIgfARAIQAPghAHgcQhQAjgJAGQgIAEgHgFQgDAZgEATgAjrD3QgzgzAPhMQAIgjADhQQAChBAHghQADgUAKAAQAHABABAIQADANALAPQAHAIABAOQAJAKANAIQAZAPACgOQACgIgJgMQgaglAGgqQABgGgBgEQgBgDgNgBQgZAAgegKQgSgHAPgHQAmgRAfggQANgUAkAGQAeAGAEAMQAGANgFAKQgmBMAQAkQAbAygqBKQgGAIgHABQgJAAgSgiQgSgYgKgUQgEAfgJAvQgLAtgFAvQgCAgADAAIADgBQAlgXAlhQIADgDQACABAAAFQgHAtgvCEQgDAHgFAAIAAAAQgEAAgNgLgAC9DPIgagGQgegLgog4QgdglgkgNQgbgKgdgTQgHgFAKgCQAxgSAwAdIASgIQAngaAAgUQABgVAEgCQAGgEAKABQAIACAGASQAGARAAAPQgBAVg2AeIgIAEQAwAvAxAWQAsAUAZAeQAJAKgTAAQghAAgpgIg");
	this.shape_2.setTransform(114.6,54.2,0.217,0.217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#271E1C").s().p("ABrEdQgKgWghgkQgdgdgohCIABAtQACBAgIAPQgEAIgEAAQgEAAgGgKIgFgHQgVgkAFgkQAEgXACgwIAHhKQACgaAAgfQgHAJgKARQgUAfgOAIQgbAPgcAEQhHAJgfgmIAAgEQABgBAAgBQABAAAAAAQABAAAAgBQABAAAAABQAXAIAVgDQASgCAVgFQA8gUBZidQhFAWhYAkQgIAEgOgJQgPgKgLgUQgLgVAPgBQBBgFAtgRQAogPBNgRQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAJgZgBgJQgDgJgGgGQgIgHgHACQgKADAFgMQALgPAOgCQAKgCAOAIQAKAFAIAMQANAWgGAYQAqgLAXgDIAwgNQAQAGAPAMQAZAbAAARQgBAJgGAFQgEADgOgDQgRgDgsAHQgvAKgfAKQgGADgBgDQgCgEAggTQAMgHAAgDQgBgGgaAGIghAIQgUAngiA6QAHAJAGALQAlg+AggEQAfgEAcAdQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABABQATAWAADAQgBBNgDAQQgQA8gSATQgFAFgEAAQgFAAgDgJgABTCNQgaAOgaAKQAZAXAYARQAOAIAFgCQAGgEABhQQgGACgRAMgAABAbQgFAdgBA/QANAVASATIATgUIACgEQACgGgNgSQgUgbAFgLIAMgpQAEgLgFgIQgDgGgFAAQgJAAgOAUgABqBnQAAhHgGhcQgBgKgHgEQgFgCgHAFQgaARgWAJQgJACgHAFQgCANgEANQAZgVAKABQANABAGACQANAEALAdQADAMgFALQgLASgIAUQgKAWAYABQARACAIANIAAAAg");
	this.shape_3.setTransform(98.6,54.1,0.217,0.217);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#271E1C").s().p("AAwELQgMgWgbgUQgTgRgJgYQgEgOALAHQAVAVAZAHQAaAHAQgMQAOgZAIgRQAVgugQgZQgFgGgQADQgZAEgRAOQgSAPgsAWQgMAGgHgQQgFgMAAgLQAAgrAUgBQAggDAqhJQAKgTgDgDQgCgBgFABQggAJg9AnQgFAEgEgKQgHgRADgZQACgTAGgCQAHgEANgTQBAhXAHg5QAAgfgqAEQgPADgBgDQgBgFAPgIQArgWAxAfQAUAOgFAPQgVBHgvA5QgFAFACAGQABADAKAAQAuABAPAWQAPAVgDAIQgLAXgXAbQgOARABAFQABADAIAAQAXACAVASQAgAdABARQAAAIgDAJQgDAHgDAVQgMBHg1AqQgMAHgJAAQgIAAgFgHgAikD6QgqgzAIgQIAPiNIgSgtQgnAogGAAQgGAAgGgLQgZgyARgIQAsgdAng6QA2hagSgRQgDgFAAgDQABgEAIABQAmABAZAKQASAJACAMQADAWgPAGQgSAJgkA5QgcAygmAuQAaASAHAZQADAHACAAIAjhLQAAABAAAAQABAAAAABQAAABAAAAQAAABAAABQgQBIAAAWQgJCKgIAvQgDAJgEABQgFAAgDgEgADaANQgbgRgcgMQgIgDgFgFQgHgEABgGQABgGAHgDQAIgEAPgBQA4AAARAOQANAJALAkQAFASgHAFIgDABQgOAAgjgWg");
	this.shape_4.setTransform(84.6,54,0.217,0.217);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#271E1C").s().p("AD1ELQgbgOgkgfQgpgggmgaQgdAggYAIQg2ATgugfIgBAAIgCAtQgCAdgJAAIgPgOIhzh8QgXA1gfAeQgMAKgDgDQgDgBgBgMQgCgUADgUQAAgJAFAEQAEADACAAQAEgBAMgfQAZg5AEi5QAAgugHgOQgIgNgDgQIgCgPQADgBAGAFQAGAEALABQAbADAQAbQAJAOgHAWQgFAPgEAUQAJgFALgBQAigCAQAVIADg0QAGhDgGgGQgEgFgIAEQgXAMgIACQgQAFgOgKQgIgHAHgGQAYgZAegTQANgHAKADQAeAJAZAaQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAHAKgHAWQgDAFgDAMQgYBgAMCnIADAAQBHgMBCAiQASgcAKggQADgIgDgBQgEgDgHAEQgYAQgsATQgNAFgFgDQgEgBgEgLQgHgRADgPQACgJADgDQAEgDAkgHQBPg0ACgSQgCgFgXgWQgMgPAKgtQAGglgGgJQAAgBgEgBQgXADgRAFQgEABgBgBQgBgCACgDQAfg1ACgCQAGgLAKgCQAMgDAEAAQAEAAAGAEQAzAigMAjQgbBIALAPQAGAEAKAAQALAAALAJQANAJABAKQgDALgKAFQgjASgPANIAIADQAjAVgIASQgGAKgLAeQgOAkgSAgIgBACIACABQB0A4APAyQALAmgGADIgGACQgGAAgKgFgAg0BiIABBJIAbADQAuAIAngrQg3ghg6gIIAAAAgAi/B3QBVAxAHgDQAFgDAAgTQACgugFhOQgFAFgEAGQgWAZgPAWQgFAHgJABQgIAAgEgGIgLgQQAAAPgLApgAioAKIgBAFQABACAFAAQAOgBASgHQANgFAVgKIgBgyQgjAUgjAugAixABIABgBQAPgPARghQAFgMgGgGQgFgGgYgCQgDATAAA4gAANgTQgdgcAWhDQADgUgSgoQgDgIADgFQAEgEANADQApAOAJATQAJASgMAjQgHAVgLAuQgFAUgJAAQgFAAgFgEg");
	this.shape_5.setTransform(69.5,54.2,0.217,0.217);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#271E1C").s().p("AD6EBQgygigOgSQgggkgbgSQgjAsgvAGQghAEgegZIgMAZQgJAQgCgBQgDAAgDgKQgIgeAEgfQgIgLgIgIIgBgEQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAKAGAGAGQAEABAFgPIAOg9QgdgGggAiQAAA2ACAaQABATgGAXQgCAJgDABQgFACgFgHQgXgcACgfQAHgsADgzQAAgIgDAAIgHAEQgZATgQAAQgKgBgGgGQgBBUhBA/QgLAKgDgDQgKgKAGgrQABgJAEAEQAEAEADgBQAEgCALgeQAOgpAGhpQADiHgLgRQgIgNgDgPIgCgPQAEAAAFAEQAGAFAMABQAcACATAbQAJAOgHAXQgGASgFAaQAdgTAZgLIABgCQAyhhgigZQgHgHADgGQADgHAHgEQAJgEAPAMQAQAKAJANQAOAXgmBQQAGABAEAEQAIAIAFALQAEAGgHADQgJAFgKANQgRAVhEA+QgGAFgCgDQgEgEAEgFQARgLAJgQQAHgPgCgDQgCgDgNgBQgRgDgMgJIAAAAQgCAPAABRQAegJAXgQQAYgSAQAEQAQAEAGAJQAHAIgJAKQgQAOgBAfQAcgeAjADQAZh4gCgUQgIgpgLAEQgGACAAgFQABgFAFgFQAGgFAKADQAEABAHAFQAhgTAggWQAYgSAYgfQAFgFgDgFQgCgEAAgDQABgDAIADQAlAHASAXQAIAJgBAJQgDAJgKADQgeAIgXAMQgvAag5ALQAFAGANATIgMBLIAMgDQAVgFAigSIAVgLQAhgXAMAEQAeALADAJIgDAPQgEALgHAkQgMBCgVAvQAKAFAGAGQAbAWAOAHQAnATAQArQALAlgJAPIgCABQgEAAgIgGgAgKCbQAXAHAOAAQAggEAeghIhQgxQgRBKgCAFgAAPAwQAVAEAOAFQAlANAYAQQAXg/AEglQABgKgEgBQgEgCgGAEQgZARguASQgNAFgGgCQgGgDgEgMg");
	this.shape_6.setTransform(54.6,54.3,0.217,0.217);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#271E1C").s().p("AiGEOQgngKgOgxQgCgUAQgnQAMgZAUgSQAOgNALgCQAigKgSAUQgGAGgMAiQgIAagMAZIgFAJQBBgLA9gYQgNgkAEgwQADgYABgzQg7Aog9AeQgJADgGgGQgEgDgBgEQgag1AMgaQAcg8AAgQQAEgcACgHQADgNAPATQANAPAEAeQAAAVgSAwQBDgaAmgYQAGihgOgVQgHgHgDgNQgEgTASAAQARACAOAKQAPAKAJASQAHAQgFAMQgEAOgEBcIgCAOQAYgRAmghQADgFAEAEQADADgDAIQgiA7glAnIgCA7QApgiAVgZQAZgeALgkQAJghgHgUQgEgOAKgDQAFgBAKAEQAcAQAGAZQAFASgTAiQgFAIgDAHQg6BXhKAUQACA6gEAnQAxgSArADIgPgkQgDgNACgBQADgCADABQAGACAGAEQBFA3AHAhQAEAZgYA3QgGAKgEgBQgMgFgXhZQh0AhhkA2QgRAIgNAAQgGAAgFgCg");
	this.shape_7.setTransform(39.4,53.9,0.217,0.217);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#271E1C").s().p("AjSEVQgCgJABgFQgBgmAYAAQASAABrhvQgHgPgBgIQgCgNAWALQAFAAACAEIARgVQAHgMAegjQAYgagDgEQgLgNhfA9QgGAFgRgIQgfgQgDgYQgBgSAEgMQADgJAFAAQADACgBAIQAAAGAMAIQARAHAKAAQA9gSBNgmIgSAAQgEgBAAgCQABgDAHgFQAygdAXgYQgbAGgeAJQgDANgHAEQgFADgSgKQgtARg4AeQgSALgPgEQgHgCgDgJQgQglAOgOQAugwgIgfQgCgIAJACQANAEAIASQAHARgCAIQgBAJACACQACADAmgJQgGgKgEgMQgBgFACgBQACgBADACQALAHALgBQAKgBADgEQAMgvgXgxQgGgQAEgCQAFgDANAFQAbAJAUAVQAIAHACAFQACAEgQBKQAlgIAqgCQAQghgEgSQgCgNAJAAQAGgBAJAGQAZARACAeQACAPgVAZQgkAogiAVQAGAMAFAMQAHAUgZARQggAWhQBiQA3gTA2gXQAhgOAlApQAYAdgPAPQgrA3AAANQgEAGgBAGQAIAJAAAFQAAAKgJgBQhIgFg/ASIABAFQAGAlgQgOQgZgTgSgWQgJgSAAgxIgDADQhKBNg9AoQgGADgEAAQgGAAgDgJgAAADFQAXABAWgHQAngOAHgKQARgVAKgXQAGgMgDgDQgGgDgNAGQhHAhgmgGQAFAMACAvg");
	this.shape_8.setTransform(24,54.1,0.217,0.217);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#271E1C").s().p("AiUEEQgcgsgGgSQgEgRADgkQAEghABhIQAAhAAEgrQACgiAAgtQgCheAKgKQAFgFAOAMQAtAlgRA5QgVBKADB6QABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAmgEAYgKQA7gWAvgIQARgYAJgZQACgIgDgDQgFgGgKAFQhxArgIgDQgHgEgJgUQgKgWADgLQAAgFAKAAQA6hFAegYIgMAGQgLAEgOgIQgfgRgPgNQgJgKABgFQACgEAMgCQAbgEATgKQAHgEAHgBQBMgjAsAPQAYAIAFAWQABATgNACQhEAEh6B8QAwgHBcgbIAJABQARAGAbAdQATAYAAADQAAAWgWAKQgNAGgGAKQAJAEAGAEQAWAWAAANQgDAPgUgBQgtABhRAqQgEADgBgCQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAQgPAMgIQANgJgBgDQgBgCgLADQgsAJhAAbQgIAEgMgHQgNgJgIgPQACA4AEAnIADgBQA3gVB4gEQAjgCAYgFQARgDAIADQAlARAMAiQADALgDAGIgCAEQgHADglgGQiIgph/A/QgBAfgEALQgFAIgCAAIAAAAQgEAAgGgIg");
	this.shape_9.setTransform(10.1,54.4,0.217,0.217);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABYKHQg0hRAAjFIAArgQAAjDA1hTQA0hSB5AAQB6AAA1BSQA1BSAADEIAACbIjCAAIAAj4QAAglgHgPQgIgPgTAAQgRAAgIAPQgHAPAAAlIAAONQAAAlAIAPQAHAQARAAQATAAAIgQQAHgQAAgkIAAkZIDCAAIAADJQAADEg1BRQg0BSh7AAQh6AAg0hRgAnWKFQg1hRAAjFIAAreQAAjDA1hSQA1hTB6AAQB5AAA1BSQA1BRAADFIAALeQAADFg0BRQg1BTh6AAQh7AAg0hTgAlAn/QgIAQAAAjIAAONQAAAlAIAPQAHAQASAAQASAAAIgQQAHgQAAgkIAAuNQAAglgHgPQgIgPgSAAQgSAAgHAQgANyK4IhbrMIgDAAIAALMIjDAAIAA1xIDDAAIAAJnIADAAIBhpnIC6AAIh4JCIB6MvgAsbK4QgKgkgFgsQgEgrAAgzIAAliQAAg6gQgfQgPgeggAAIgDAAIAAKHIjDAAIAA1xIDkAAQB3AAA2A8QA1A9AACEIAACSQAABuglA7QgmA6hLAGIAAAIQBUAHAhAyQAhAzAAB8IAAFjQAAArAFAqQAEAsAJAlgAtwiLIALAAQAfAAAMgRQAMgTAAgrIAAjeQAAgvgNgRQgOgQgnAAg");
	this.shape_10.setTransform(124.5,21.9,0.217,0.217);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AskMkQCIhYCeh1QCjh5BzhkQgagygBgZQgLgnBUAhQARAEAKAIQAhggAegfQAagnB2hvQBYhXgKgLQgpgmlnDCQgaAPg+gYQh1g0gJhQQgFguAPguQAMgeAPACQAMADgBAbQgDATAwAYQA8AWAoAAQDdg2Esh4IhBAAQgPgCAAgIQADgLAZgOQC8hdBYhJQh3AVheAaQgQAogWAMQgVAKhDgeQizA2jMBeIAAAAQhGAjg4gPQgZgIgKgaQg9h2A2grQCqiVgehiQgFgYAhAGQAtAMAhA3QAbA2gHAbQgFAaAIAGQAEAJCQgbQgagmgJgfQgFgQAHgCQAIgEAKAIQAqAUAugCQAjgDAQgNQAqiUhSiYQgXgzAPgIQARgIAwAOQBkAcBPBDQAaAWAJARQAIAOg9DnQCKgYCfgIQA8hngPg5QgHgpAggCQAVgCAlAUQBeA0AHBgQAFAxhOBLQiAB6iGBHQAaAkAPAlQAbA9hdA5Qh5BMkrExQDHg6DRhKQB+gsCHCBQBbBag4AxQihCoAAAqQgPAVgCASQAcAdAAAOQAAAeghgCQkWgOjkA5IAFAQQAUBzhBgsQhjg/g8hDQgjgzAAieQgIAFgCAFQhPBFi9BmIlMCrgAAIJ7QBYADBTgVQCRgqAaghQBChBAlhJQAUgmgKgJQgXgJgvATIgBABQkJBliWgSQASAmANCSg");
	this.shape_11.setTransform(74.2,21.7,0.217,0.217);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AojMiQhmiCgYg9QgPg8ALhoQAPhrACjYQAGjhAJhuQAJhsgCiHQgHkkAogdQAQgOA0AkQCkBvg8C0QhMDkAKF8QAHgEAKAAQCNgNBZgdQDShEC3gaQA7hEAmhVQAHgbgKgJQgRgSgoAOQmiCIgggMQgYgMghg+Qgkg/AIgnQgBgQAnAAQDZjVBwhIIgyASQgoAOg2gaQh6g6grgkQgmgfAIgMQAFgOAsgGQBhgLBKgfQAXgMAdgGQEdhrCjAvQBaAaANBCQADA7gsAHQj4AMnJF+QCZgTFvhWQAQAAAQACQBBAUBiBZQBIBIAAAMQAABChSAgQgxAUgXAeQAiAMAXAPQBPBCAAAqQgKAvhLgDQiiADkxCDQgSAIgCgGQgEgHAKgHQAxgoA5giQAvgcgCgIQgFgGgoAIQihAcjyBWQgcAMgsgYQgugYghgwQAICqAOB7QAEgCAGgCQDJg/HEgPQBzgDBkgTQA+gKAhAMQCHAyAtBsQAJAigJASQgHAFgEAHQgYAKiIgSQn2iAnYDCQgDBegRAlQgPAWgKAAIgCAAQgPAAgSgYg");
	this.shape_12.setTransform(32.9,21.8,0.217,0.217);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2865B5").s().p("Ax/OSIAA8jMAj/AAAIAAcjg");
	this.shape_13.setTransform(124.6,21.9,0.217,0.217);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("EgjdAOSIAA8jMBG6AAAIAAcjg");
	this.shape_14.setTransform(54.3,21.9,0.217,0.217);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.698)").ss(1,1,1).p("AsulsIZdAAIAALZI5dAAg");
	this.shape_15.setTransform(77.1,30.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AstFtIAArYIZcAAIAALYg");
	this.shape_16.setTransform(77.1,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{scaleX:0.217,scaleY:0.217,x:54.3,y:21.9}},{t:this.shape_13,p:{scaleX:0.217,scaleY:0.217,x:124.6,y:21.9}},{t:this.shape_12,p:{scaleX:0.217,scaleY:0.217,x:32.9,y:21.8}},{t:this.shape_11,p:{scaleX:0.217,scaleY:0.217,x:74.2,y:21.7}},{t:this.shape_10,p:{scaleX:0.217,scaleY:0.217,x:124.5,y:21.9}},{t:this.shape_9,p:{scaleX:0.217,scaleY:0.217,x:10.1,y:54.4}},{t:this.shape_8,p:{scaleX:0.217,scaleY:0.217,x:24,y:54.1}},{t:this.shape_7,p:{scaleX:0.217,scaleY:0.217,x:39.4,y:53.9}},{t:this.shape_6,p:{scaleX:0.217,scaleY:0.217,x:54.6,y:54.3}},{t:this.shape_5,p:{scaleX:0.217,scaleY:0.217,x:69.5,y:54.2}},{t:this.shape_4,p:{scaleX:0.217,scaleY:0.217,x:84.6,y:54}},{t:this.shape_3,p:{scaleX:0.217,scaleY:0.217,x:98.6,y:54.1}},{t:this.shape_2,p:{scaleX:0.217,scaleY:0.217,x:114.6,y:54.2}},{t:this.shape_1,p:{scaleX:0.217,scaleY:0.217,x:128.9,y:54.1}},{t:this.shape,p:{scaleX:0.217,scaleY:0.217,x:143.8,y:54.7}}]}).to({state:[{t:this.shape_14,p:{scaleX:0.232,scaleY:0.232,x:52.7,y:21.2}},{t:this.shape_13,p:{scaleX:0.232,scaleY:0.232,x:127.9,y:21.2}},{t:this.shape_12,p:{scaleX:0.232,scaleY:0.232,x:29.8,y:21.1}},{t:this.shape_11,p:{scaleX:0.232,scaleY:0.232,x:73.9,y:21}},{t:this.shape_10,p:{scaleX:0.232,scaleY:0.232,x:127.7,y:21.2}},{t:this.shape_9,p:{scaleX:0.232,scaleY:0.232,x:5.4,y:55.9}},{t:this.shape_8,p:{scaleX:0.232,scaleY:0.232,x:20.3,y:55.6}},{t:this.shape_7,p:{scaleX:0.232,scaleY:0.232,x:36.8,y:55.5}},{t:this.shape_6,p:{scaleX:0.232,scaleY:0.232,x:53,y:55.9}},{t:this.shape_5,p:{scaleX:0.232,scaleY:0.232,x:69,y:55.7}},{t:this.shape_4,p:{scaleX:0.232,scaleY:0.232,x:85.1,y:55.6}},{t:this.shape_3,p:{scaleX:0.232,scaleY:0.232,x:100,y:55.6}},{t:this.shape_2,p:{scaleX:0.232,scaleY:0.232,x:117.2,y:55.7}},{t:this.shape_1,p:{scaleX:0.232,scaleY:0.232,x:132.4,y:55.6}},{t:this.shape,p:{scaleX:0.232,scaleY:0.232,x:148.4,y:56.2}}]},1).to({state:[{t:this.shape_14,p:{scaleX:0.232,scaleY:0.232,x:52.7,y:21.2}},{t:this.shape_13,p:{scaleX:0.232,scaleY:0.232,x:127.9,y:21.2}},{t:this.shape_12,p:{scaleX:0.232,scaleY:0.232,x:29.8,y:21.1}},{t:this.shape_11,p:{scaleX:0.232,scaleY:0.232,x:73.9,y:21}},{t:this.shape_10,p:{scaleX:0.232,scaleY:0.232,x:127.7,y:21.2}},{t:this.shape_9,p:{scaleX:0.232,scaleY:0.232,x:5.4,y:55.9}},{t:this.shape_8,p:{scaleX:0.232,scaleY:0.232,x:20.3,y:55.6}},{t:this.shape_7,p:{scaleX:0.232,scaleY:0.232,x:36.8,y:55.5}},{t:this.shape_6,p:{scaleX:0.232,scaleY:0.232,x:53,y:55.9}},{t:this.shape_5,p:{scaleX:0.232,scaleY:0.232,x:69,y:55.7}},{t:this.shape_4,p:{scaleX:0.232,scaleY:0.232,x:85.1,y:55.6}},{t:this.shape_3,p:{scaleX:0.232,scaleY:0.232,x:100,y:55.6}},{t:this.shape_2,p:{scaleX:0.232,scaleY:0.232,x:117.2,y:55.7}},{t:this.shape_1,p:{scaleX:0.232,scaleY:0.232,x:132.4,y:55.6}},{t:this.shape,p:{scaleX:0.232,scaleY:0.232,x:148.4,y:56.2}},{t:this.shape_16},{t:this.shape_15}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,2.1,144.7,58.8);


(lib.影子 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.kilani_Book_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF8A77").ss(1,1,1).p("AJ9qKIAAVGQqihipXBKIE20uQHhhjHiBjg");
	this.shape.setTransform(75.1,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHghjHjBjIAAVGQqihipXBKg");
	this.shape_1.setTransform(75.1,72.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF8A77").ss(1,1,1).p("Ap8KkIE20uQHhhjHiBjIAAVHQqihjpXBKg");
	this.shape_2.setTransform(75.1,72.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHghjHjBjIAAVHQqjhjpWBKg");
	this.shape_3.setTransform(75.1,72.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AF8A77").ss(1,1,1).p("AlGqKQHhhjHiBjIAAVGQqihipXBKg");
	this.shape_4.setTransform(75.1,72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,1.5,129.5,142.2);


(lib.kilani_Book_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF8A77").ss(1,1,1).p("AJ9qKIAAVGQqihipXBKIE20uQHhhjHiBjg");
	this.shape.setTransform(75.1,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHghjHjBjIAAVGQqihipXBKg");
	this.shape_1.setTransform(75.1,72.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF8A77").ss(1,1,1).p("Ap8KkIE20uQHhhjHiBjIAAVHQqihjpXBKg");
	this.shape_2.setTransform(75.1,72.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHghjHjBjIAAVHQqjhjpWBKg");
	this.shape_3.setTransform(75.1,72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,1.5,129.5,142.2);


(lib.kilani_Book_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF8A77").ss(1,1,1).p("AgFobQAFluAFjQQAVGkgVHIIAAVHQgRh1gCkiQAAmTgBkNQAFikAFmag");
	this.shape.setTransform(61.8,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOLDQAAmUAAkLQAEilAGmZQAElvAFjQQAVGkgVHIIAAVHQgQh1gDkig");
	this.shape_1.setTransform(61.8,-39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF8A77").ss(1,1,1).p("AAKxZQAbIngPFFIAAVHQgqkSgGspg");
	this.shape_2.setTransform(60.1,-39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfIAkx4QAbIngPFFIAAVHQgqkSgGspg");
	this.shape_3.setTransform(60.1,-39.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AF8A77").ss(1,1,1).p("AgZxAQAZKOBVCsIAAVHQh9kMgssgg");
	this.shape_4.setTransform(53.9,-37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUAVIA7xUQAZKNBUCsIAAVHQh8kMgssgg");
	this.shape_5.setTransform(53.9,-37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AF8A77").ss(1,1,1).p("AhkwBQA2InDNCVIAAVHQk+i/ABsDg");
	this.shape_6.setTransform(46.4,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AieBAIA6xBQA2InDNCVIAAVHQk+i/ABsDg");
	this.shape_7.setTransform(46.4,-30.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AF8A77").ss(1,1,1).p("AijvFQB4HUErBwIAAVHQljkoicoOg");
	this.shape_8.setTransform(36.8,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Aj/CQIBcxVQB4HUErBwIAAVHQljkoicoOg");
	this.shape_9.setTransform(36.8,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#AF8A77").ss(1,1,1).p("AFInQIAAVHQm2jVjZm9IBExbQCXCsG0D6g");
	this.shape_10.setTransform(29.5,-16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlHDmIBExbQCXCrG0D6IAAVHQm2jVjZm8g");
	this.shape_11.setTransform(29.5,-16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#AF8A77").ss(1,1,1).p("AlYsoQB9DvJ4AbIAAVHQqjhjiWmFg");
	this.shape_12.setTransform(21.1,-9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmbFBIBDxpQB9DvJ3AbIAAVHQqihjiVmFg");
	this.shape_13.setTransform(21.1,-9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#AF8A77").ss(1,1,1).p("AmyqfQHBhKHiBiIAAVHQqihjk/kgg");
	this.shape_14.setTransform(12.7,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnwE9IA+vcQHBhKHiBiIAAVHQqihjk/kgg");
	this.shape_15.setTransform(12.7,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#AF8A77").ss(1,1,1).p("AmfqKQHghjHjBjIAAVGQqjhimkjYg");
	this.shape_16.setTransform(7.6,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AojGCICEwMQHghjHjBjIAAVGQqjhimkjYg");
	this.shape_17.setTransform(7.6,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#AF8A77").ss(1,1,1).p("AJ9K8QqihipXBKIE20uQHghjHjBjg");
	this.shape_18.setTransform(-1.3,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHhhjHiBjIAAVGQqihipXBKg");
	this.shape_19.setTransform(-1.3,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.2,-152,5.2,224.9);


(lib.kilani_Book_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF8A77").ss(1,1,1).p("AJ9qKIAAVGQqihipXBKIE20uQHghjHjBjg");
	this.shape.setTransform(-1.3,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap8KkIE20uQHhhjHiBjIAAVGQqihipXBKg");
	this.shape_1.setTransform(-1.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF8A77").ss(1,1,1).p("AmfqKQHghjHjBjIAAVGQqjhimkjYg");
	this.shape_2.setTransform(7.6,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AojGCICEwMQHghjHjBjIAAVGQqjhimkjYg");
	this.shape_3.setTransform(7.6,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AF8A77").ss(1,1,1).p("AmyqfQHBhKHiBiIAAVHQqihjk/kgg");
	this.shape_4.setTransform(12.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnwE9IA+vcQHBhKHiBiIAAVHQqihjk/kgg");
	this.shape_5.setTransform(12.7,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AF8A77").ss(1,1,1).p("AlYsoQB9DvJ4AbIAAVHQqjhjiWmFg");
	this.shape_6.setTransform(21.1,-9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmbFBIBDxpQB9DvJ3AbIAAVHQqihjiVmFg");
	this.shape_7.setTransform(21.1,-9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AF8A77").ss(1,1,1).p("AFInQIAAVHQm2jVjZm9IBExbQCXCsG0D6g");
	this.shape_8.setTransform(29.5,-16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlHDmIBExbQCXCrG0D6IAAVHQm2jVjZm8g");
	this.shape_9.setTransform(29.5,-16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#AF8A77").ss(1,1,1).p("AijvFQB4HUErBwIAAVHQljkoicoOg");
	this.shape_10.setTransform(36.8,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj/CQIBcxVQB4HUErBwIAAVHQljkoicoOg");
	this.shape_11.setTransform(36.8,-24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#AF8A77").ss(1,1,1).p("AhkwBQA2InDNCVIAAVHQk+i/ABsDg");
	this.shape_12.setTransform(46.4,-30.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AieBAIA6xBQA2InDNCVIAAVHQk+i/ABsDg");
	this.shape_13.setTransform(46.4,-30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#AF8A77").ss(1,1,1).p("AgZxAQAZKOBVCsIAAVHQh9kMgssgg");
	this.shape_14.setTransform(53.9,-37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhUAVIA7xUQAZKNBUCsIAAVHQh8kMgssgg");
	this.shape_15.setTransform(53.9,-37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#AF8A77").ss(1,1,1).p("AAKxZQAbIngPFFIAAVHQgqkSgGspg");
	this.shape_16.setTransform(60.1,-39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAfIAkx4QAbIngPFFIAAVHQgqkSgGspg");
	this.shape_17.setTransform(60.1,-39.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#AF8A77").ss(1,1,1).p("AgFobQAFluAFjQQAVGkgVHIIAAVHQgRh1gCkiQAAmTgBkNQAFikAFmag");
	this.shape_18.setTransform(61.8,-39.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOLDQAAmUAAkLQAEilAGmZQAElvAFjQQAVGkgVHIIAAVHQgQh1gDkig");
	this.shape_19.setTransform(61.8,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-69.3,129.5,142.2);


(lib.C8 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],-1.7,-46.8,-1.8,42).s().p("AgSGsQjTAAiVhQQiChFgRhfQgzAPg9AAQhuAAhOgyQhQgzAAhIQAAhGBQgzQBOgyBuAAQA0ABAsALIAAgOQgBhMBKg4QBIg1BlgBQBMAAA7AeQAZgdAmgZQBqhGCYAAQCYAABrBGQBXA4ASBMIANgBQCXABBsA9QBtA+AABZQAABYhtA+QhsA+iXAAQgcAAgbgCQgXBXh6BAQiUBQjQAAIAAAAg");
	this.shape.setTransform(47.1,33.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-9.6,181.2,85.7);


(lib.c4 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],3.1,-42.1,3.1,61.4).s().p("AsSHPQiFhWABh7QAAggAJgeQgcAHgeAAQhgAAhFhEQhEhFAAhfQAAhgBEhEQBFhEBggBIAJABIAAgNQAAhwBPhPQBPhPBwAAQBwAABPBPQANANALAOQCQhPDLAAQDLAACQBRQAmAVAcAYIAEgEQA3g2BNgBQBNABA2A2QA3A3AABNQAAAlgMAgQAdALAaAQQA2gpBGAAQBUAAA7A8QAnAmAOAyIACAAQBeAABDBAQBCBCAABeQAABehCBDQhDBCheAAQgzAAgrgUQhLAwhrgBQhrABhMgxQgbgQgQgTQgkArg5AlQiVBijSAAQhtgBhegaQh6BDikAAQi6AAiDhWg");
	this.shape.setTransform(34.8,28.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.3,-26.6,240.4,109.9);


(lib.C7 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0.2,-42.1,0.2,24.4).s().p("AAGEsQhfABhEg3Qg1gqgMg5QhHAuhfAAQhpAAhKg3QhLg2AAhOQAAhLBLg3QBFgyBegEQATgZAhgWQBKgwBpAAQBoAABIAwIAMAJQBPg4BrgBIABAAQBEgbBWAAQB2ABBUAzQBWA1gBBLQAAA9g3AuQApAoAAA2QAABFhFAxIAAAAQhEAwhgAAQhhAAhEgwIAAAAIgLgIQgRAeggAZQhEA2hhAAIAAAAg");
	this.shape.setTransform(13.3,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-23.6,128.8,60.2);


(lib.c6 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,-48.3,0,48.4).s().p("AEaHbQh9AAhZhgQgqgugWg3IgPATQhUBUh3AAQh3AAhVhUQg9g+gRhQQgzAYg/AAQhkAAhGg9QhHg8AAhUQAAhVBHg+QA8gzBQgHQAOgjAigcQA5guBQAAQBPAAA5AuQA2AtADA9QAVgDAWgBQARgkAkgeQA/gzBXgEQARgyAvgpQBQhGByAAQBxAABQBGQA7AzAQBEIAVgBQBeAABCA8IABAAQBCA9AABWQAAAbgHAZQAaANAWATQA1AzAABHQAABIg1AyQg0AzhLAAQg+AAgugjQgWA/gvAzQhYBgh9AAIAAAAg");
	this.shape.setTransform(0.1,19.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.1,-28.2,170.5,95.2);


(lib.c2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,-40.4,0,40.5).s().p("AE1FUQhAAAgsgvQglgmgGg0QhGA5hdAAQhpAAhKhGIgRgSQhXA9h4AAQiAAAhZhEQhbhFAAhgQAAhgBbhEQBZhECAAAQAWAAAVACQANgaAXgWQAygwBIAAQBIAAAyAwIAAAAQAdAbAMAiQATgCAUAAQAdAAAcAGQAYgdAkgaQBohHCTAAQCSAABnBHQBpBJAABmQAABlhpBIQgbATgdAOQgQAcggAWIAAAAQgVAPgZAKQgDA9gqAsIAAAAQgsAvhAAAIAAAAg");
	this.shape.setTransform(-38.8,24.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.6,-9.1,143.5,68.2);


(lib.c1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],-0.2,-29.8,0.3,29.9).s().p("AByDBQhTAAg4gmQgZgRgOgTQgnAUgyAAQhCAAgvgiQgvgkAAgyQAAgvAvgjQAvgjBCAAIAPAAQAFglAmgbQArgeA6AAQA9AAAqAeIAPANQARgDAUAAQA5AAAoAYQArAagBAkQAAAcgZAVQAnAgAAAtQAAA4g7AnQg7AmhSAAIAAAAg");
	this.shape.setTransform(-33,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.4,-19.7,62.9,38.7);


(lib.時針 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("Ag2jzIBtAAIgaHiIg5AFg");
	this.shape.setTransform(6,1.6,1,1.133,0,0,0,0.5,-23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,55.4);


(lib.btn04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.S075p3();
	this.instance.setTransform(75.7,-175.7,1,1,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.7,-274.1,371.8,449.4);


(lib.btn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.S075p2();
	this.instance.setTransform(-55.8,-267.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-267.4,452,266);


(lib.btn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.S075p1();
	this.instance.setTransform(-282.2,-160.7,1.141,1.141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.2,-160.7,456.3,374.2);


(lib.btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.S075p4();
	this.instance.setTransform(44.2,-247.7,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.2,-247.7,280.6,258.6);


(lib.機器人手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgMAcQgKgHgEgOQgDgMAFgMQAGgMALgDQAKgDAKAIQALAIADAOIABADQACAKgFAKQgFAMgMADIgGABQgGAAgIgGg");
	this.shape.setTransform(8.7,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9999").ss(6,1,1).p("AgWCCIAtkD");
	this.shape_1.setTransform(0.5,3.2,0.228,0.228,0,19.4,-160.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9999").ss(6,1,1).p("Ai/gTIF/An");
	this.shape_2.setTransform(4.3,7.2,0.228,0.228,0,19.4,-160.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9999").ss(6,1,1).p("AhQAyICihj");
	this.shape_3.setTransform(10.4,1.7,0.228,0.228,0,19.4,-160.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9999").ss(6,1,1).p("AAYBuIgujb");
	this.shape_4.setTransform(10.4,5.7,0.228,0.228,0,19.4,-160.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgMAcQgKgHgEgOQgDgMAFgMQAGgMALgDQAKgDAKAIQALAIADAOIABADQACAKgFAKQgFAMgMADIgGABQgGAAgIgGg");
	this.shape_5.setTransform(11.1,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9999").ss(6,1,1).p("AjHB2IGPjq");
	this.shape_6.setTransform(9.7,18.2,0.311,0.308,0,51.4,-128.6,-0.1,0.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,17.8,31.9);


(lib._101 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BSIAegGIgDAfIgeAGgAgWBKIAagFIgDAdIgaAHgAAQBCIAZgFIgEAdIgYAGgAg6AVIAggFIgEAfIgfAGgAgPAOIAbgFIgEAeIgbAGgAAYAGIAagFIgEAeIgaAGgAg1ghIAhgGIgEAeIggAGgAgJgpIAcgGIgEAeIgbAGgAAfgxIAbgGIgEAeIgaAFgAgwhZIAhgGIgDAjIghAHgAgChiIAcgGIgEAkIgcAGgAAnhrIAcgFIgFAjIgcAGg");
	this.shape.setTransform(97,770.8,2.763,2.763,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6B9AF").s().p("AgfBNIgfAGIADgeIAegGIAEgfIggAGIACgZIAhgGIADgeIghAGIACgUIAhgGIAEgkIAMgCIgEAjIAcgGIAFgjIAMgDIgFAkIAcgGIgEAWIgbAFIgDAeIAbgGIgFAbIgaAFIgDAeIAZgFIgFAdIgZAGIgDAdIgMADIADgeIgZAGIgEAeIgLACgAgOAOIgEAfIAcgFIADgfgAgIgpIgDAeIAbgGIAFgdg");
	this.shape_1.setTransform(96.7,770.6,2.763,2.763,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9DFD3").s().p("AAbBrIACgkIgggJIgCAjIgNgDIADgkIgdgIIgCAjIgNgDIACgjIgagIIAAgSIAaAHIACggIgbgIIABgYIAbAIIACgcIgcgIIABgTIAcAIIABgkIAOAFIgCAkIAdAIIADglIAKAEIgBAlIAiAJIACglIAQAEIgDAlIAgAIIgBAVIgggIIgCAaIAgAIIgDAWIgdgIIgCAhIAdAHIgBATIgdgIIgDAkgAgCArIAhAJIABggIgggJgAgrAfIAdAIIACggIgdgHgAAAgLIAiAKIACgcIgigKgAgogXIAdAJIABgcIgdgJg");
	this.shape_2.setTransform(33,760.2,2.763,2.763,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBvIADgkIAdAIIgDAkgAgGBhIACgjIAgAJIgCAkgAgvBVIACgjIAdAIIgDAkgAhVBKIABgjIAaAIIgCAjgAAuA5IABghIAeAIIgCAggAgDArIACggIAgAJIgBAggAgsAfIACgfIAdAHIgCAggAhUAVIABghIAbAIIgCAggAAwACIACgaIAgAIIgCAagAAAgLIABgcIAiAKIgCAcgAgpgXIABgcIAdAJIgBAcgAhSgkIABgcIAcAIIgCAcgAAzgtIADglIAgAIIgDAlgAACg6IABglIAjAJIgCAlgAgnhGIACgkIAeAHIgDAlgAhQhTIABgjIAcAHIgBAkg");
	this.shape_3.setTransform(33.2,760.2,2.763,2.763,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9C8CB").s().p("AhNAGICEgXIAYAGIidAdg");
	this.shape_4.setTransform(103.6,736.2,2.763,2.763,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1E2E5").s().p("AgLgFIAYAAIgCAKIgXABg");
	this.shape_5.setTransform(78,737.7,2.763,2.763,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9EAED").s().p("AgMADIABgKIAYAEIgBAMg");
	this.shape_6.setTransform(70.9,736.3,2.763,2.763,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0F1F4").s().p("AhygaIAVgHIDPA2IABANg");
	this.shape_7.setTransform(36.9,725,2.763,2.763,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6B9AF").s().p("AhEhoICegfIgxDvIiBAgg");
	this.shape_8.setTransform(97.5,770.1,2.763,2.763,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D8CD").s().p("AAAh7IAXgBIgVDwIgYAJg");
	this.shape_9.setTransform(71.5,773.4,2.763,2.763,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgWD4g");
	this.shape_10.setTransform(64.9,772.4,2.763,2.763,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9DFD3").s().p("AhwBgIgCj5IDlA+IgWD1g");
	this.shape_11.setTransform(33.8,760,2.763,2.763,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhABSIAggFIgEAeIgeAGgAgWBKIAagFIgDAeIgbAGgAAQBCIAZgFIgEAdIgYAGgAg6AWIAfgGIgDAfIgeAGgAgPAOIAbgFIgEAeIgbAGgAAYAHIAagFIgEAeIgaAFgAg1ghIAhgGIgDAeIghAGgAgJgpIAcgGIgEAeIgbAGgAAfgxIAbgFIgEAdIgaAGgAgwhZIAhgGIgEAkIggAGgAgChiIAcgGIgEAkIgcAGgAAnhqIAcgGIgGAjIgbAGg");
	this.shape_12.setTransform(111.8,700,2.991,2.991,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A6B9AF").s().p("AgfBNIgfAGIADgeIAfgFIADggIggAGIADgZIAggGIADgdIggAFIABgUIAhgGIADgkIANgDIgEAkIAcgGIAFgjIAMgDIgEAjIAbgFIgDAWIgbAFIgEAeIAagGIgDAbIgaAFIgFAeIAagFIgEAdIgZAGIgEAdIgMADIAEgeIgbAGIgDAeIgKACgAgOAOIgDAfIAbgFIADgfgAgHgpIgEAeIAcgGIADgdg");
	this.shape_13.setTransform(111.4,699.9,2.991,2.991,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9DFD3").s().p("AAaBrIADgkIgggJIgCAjIgNgDIACgkIgcgIIgCAjIgNgEIABgjIgZgHIAAgTIAaAIIABggIgagIIABgYIAaAJIACgdIgcgIIABgTIAcAIIACgjIAOAEIgCAjIAdAJIADglIALAEIgDAkIAjAKIADglIAPAEIgDAlIAgAIIgCAVIgfgJIgBAaIAeAJIgCAWIgegIIgCAgIAeAIIgCATIgdgIIgCAkgAgCArIAgAJIACggIgggKgAgrAgIAcAHIACggIgcgHgAAAgLIAhAKIACgcIgigKgAgogXIAdAIIABgcIgdgIg");
	this.shape_14.setTransform(42.6,688.6,2.991,2.991,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqBvIACgkIAdAIIgDAkgAgGBiIACgkIAgAJIgDAkgAgvBVIACgiIAcAHIgCAkgAhVBKIABgjIAZAHIgBAkgAAtA4IACgfIAeAIIgCAfgAgDAsIACgiIAgAKIgCAhgAgsAgIACggIAcAHIgCAggAhUAUIABggIAaAIIgBAggAAwABIACgaIAfAJIgCAagAAAgKIAAgdIAiAKIgCAcgAgpgXIABgcIAdAIIgBAcgAhSgjIAAgcIAcAIIgCAcgAAzgtIADglIAgAIIgDAmgAABg7IACgkIAkAJIgDAlgAgnhGIACgkIAeAIIgDAkgAhRhSIABgkIAdAIIgCAjg");
	this.shape_15.setTransform(42.9,688.6,2.991,2.991,5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B9C8CB").s().p("AhMAGICEgYIAWAHIibAdg");
	this.shape_16.setTransform(118.9,662.7,2.991,2.991,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1E2E5").s().p("AgLgFIAYAAIgCAKIgXABg");
	this.shape_17.setTransform(91.2,664.2,2.991,2.991,5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9EAED").s().p("AgMADIACgLIAXAGIgBAKg");
	this.shape_18.setTransform(83.5,662.7,2.991,2.991,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0F1F4").s().p("AhygaIAVgHIDPA1IABAOg");
	this.shape_19.setTransform(46.7,650.5,2.991,2.991,5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A6B9AF").s().p("AhEhoICdgfIgwDvIiBAgg");
	this.shape_20.setTransform(112.4,699.3,2.991,2.991,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C3D8CD").s().p("AgBh7IAYgBIgUDwIgZAJg");
	this.shape_21.setTransform(84.2,702.9,2.991,2.991,5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgWD4g");
	this.shape_22.setTransform(77,701.7,2.991,2.991,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C9DFD3").s().p("AhvBgIgDj5IDlA+IgWD1g");
	this.shape_23.setTransform(43.3,688.4,2.991,2.991,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag/BTIAegGIgCAeIgfAGgAgWBLIAagGIgDAeIgaAGgAARBCIAYgFIgEAdIgZAGgAg6AWIAggGIgEAfIgeAGgAgPAOIAbgFIgDAeIgbAGgAAYAHIAagFIgEAeIgaAFgAg1ghIAggGIgDAeIggAGgAgIgpIAcgGIgEAeIgcAGgAAfgxIAbgFIgEAdIgaAGgAgwhZIAhgGIgDAkIghAGgAgChhIAdgHIgFAkIgcAGgAAnhqIAcgGIgFAjIgbAGg");
	this.shape_24.setTransform(126.7,625.3,3.133,3.133,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A6B9AF").s().p("AggBNIgeAGIADgeIAegGIAEgfIggAGIACgZIAhgGIACgeIggAGIACgUIAhgGIADgkIANgCIgEAjIAcgGIAFgkIAMgCIgEAjIAbgGIgEAXIgbAFIgDAeIAagGIgEAbIgaAFIgEAeIAagFIgFAdIgYAFIgFAeIgLADIADgeIgaAGIgDAeIgKACgAgOAOIgDAfIAbgGIADgegAgHgpIgEAeIAcgGIAEgeg");
	this.shape_25.setTransform(126.4,625.3,3.133,3.133,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C9DFD3").s().p("AAbBrIACgkIgggJIgCAkIgNgEIACgkIgcgIIgCAkIgNgEIABgkIgZgHIAAgTIAaAIIABgfIgZgIIAAgYIAbAIIABgcIgbgJIAAgTIAcAJIACgkIAOAEIgCAkIAeAIIACgkIAKADIgCAkIAjAKIACglIAQAEIgCAlIAfAJIgCAUIgfgJIgCAaIAfAJIgBAWIgfgIIgCAgIAeAIIgCATIgdgIIgCAkgAgCArIAgAJIACggIgggJgAgrAgIAdAIIABghIgdgHgAAAgLIAiAKIACgcIgjgKgAgogXIAcAIIADgcIgegIg");
	this.shape_26.setTransform(54.2,613.4,3.133,3.133,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAqBvIACgkIAdAIIgCAkgAgGBiIACgkIAgAJIgCAkgAgvBWIACgkIAcAIIgCAkgAhVBKIABgjIAZAHIgCAkgAAtA4IACggIAfAIIgDAggAgDArIACggIAgAJIgCAggAgsAgIABggIAdAHIgCAhgAhUAUIACgfIAZAIIgBAfgAAwABIACgaIAfAJIgCAagAAAgLIAAgcIAjAKIgCAcgAgpgXIABgcIAeAIIgDAcgAhSgjIABgdIAbAJIgBAcgAA0gtIACglIAgAIIgDAmgAABg7IACgkIAjAJIgCAlgAgnhGIACgkIAeAIIgCAkgAhRhTIABgjIAdAIIgCAkg");
	this.shape_27.setTransform(54.5,613.4,3.133,3.133,5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B9C8CB").s().p("AhMAGICDgXIAXAGIibAeg");
	this.shape_28.setTransform(134.2,586.3,3.133,3.133,5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D1E2E5").s().p("AgLgFIAZAAIgDAKIgYABg");
	this.shape_29.setTransform(105.2,587.9,3.133,3.133,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D9EAED").s().p("AgLAEIABgMIAXAFIgCAMg");
	this.shape_30.setTransform(97.2,586.4,3.133,3.133,5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0F1F4").s().p("AhxgaIAUgHIDPA1IAAAOg");
	this.shape_31.setTransform(58.6,573.5,3.133,3.133,5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A6B9AF").s().p("AhDhnICcggIgwDvIiBAgg");
	this.shape_32.setTransform(127.4,624.7,3.133,3.133,5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C3D8CD").s().p("AgBh7IAYgBIgVDwIgYAJg");
	this.shape_33.setTransform(97.9,628.4,3.133,3.133,5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgWD4g");
	this.shape_34.setTransform(90.3,627.1,3.133,3.133,5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C9DFD3").s().p("AhvBhIgCj6IDjA+IgVD1g");
	this.shape_35.setTransform(55.1,613.2,3.133,3.133,5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag/BTIAegHIgDAfIgeAGgAgWBLIAagGIgDAeIgaAGgAAQBCIAZgFIgEAeIgZAFgAg6AVIAggFIgEAfIgfAGgAgPAOIAbgFIgEAfIgbAFgAAYAGIAagEIgFAdIgZAGgAg1ghIAggGIgDAeIggAGgAgJgpIAcgGIgEAeIgbAGgAAfgxIAbgGIgEAeIgaAFgAgwhYIAhgHIgDAkIghAGgAgChhIAcgHIgEAkIgcAGgAAnhqIAcgGIgFAkIgcAGg");
	this.shape_36.setTransform(141.7,547.5,3.276,3.276,5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A6B9AF").s().p("AggBNIgeAGIACgeIAggGIADgfIgfAGIACgZIAfgGIAEgeIghAGIACgUIAhgGIADgkIANgCIgEAjIAcgGIAEgkIANgCIgFAkIAcgGIgDAWIgbAFIgEAeIAagGIgEAbIgZAFIgFAeIAZgFIgDAdIgaAGIgDAdIgMADIAEgeIgaAGIgEAeIgLACgAgOAOIgDAfIAagFIAEgfgAgIgpIgDAeIAcgGIADgdg");
	this.shape_37.setTransform(141.3,547.3,3.276,3.276,5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C9DFD3").s().p("AAaBrIADgkIgfgJIgDAkIgNgEIACgkIgcgHIgBAjIgPgFIADgjIgagHIABgTIAaAIIABgfIgagIIAAgYIAbAIIABgcIgbgJIAAgSIAcAIIACgkIAOADIgBAkIAdAJIACglIALAEIgDAkIAjAKIADglIAOAEIgCAlIAgAJIgCAUIgegJIgCAaIAeAIIgBAYIgegIIgDAfIAeAIIgCATIgdgHIgCAkgAgBArIAgAJIACggIghgKgAgrAgIAcAIIADghIgdgHgAAAgLIAiAKIACgcIgjgKgAgogXIAdAIIACgcIgdgIg");
	this.shape_38.setTransform(65.7,535,3.276,3.276,5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqBwIACgkIAdAHIgDAkgAgGBiIADgkIAfAJIgDAkgAguBWIABgjIAcAHIgCAkgAhVBKIABgjIAaAHIgDAjgAAtA4IADgfIAeAIIgDAfgAgCArIABghIAhAKIgCAggAgsAgIACggIAdAHIgDAhgAhTAUIABgfIAaAIIgBAfgAAxABIACgaIAeAJIgCAZgAAAgLIAAgcIAjAKIgCAcgAgpgXIACgcIAdAIIgCAcgAhSgjIABgdIAbAJIgBAcgAA0gtIABglIAhAIIgDAmgAABg7IADgkIAjAJIgDAlgAgmhHIACgkIAdAIIgCAlgAhRhSIABgkIAdAIIgCAkg");
	this.shape_39.setTransform(66.1,535,3.276,3.276,5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B9C8CB").s().p("AhMAGICDgXIAXAGIibAdg");
	this.shape_40.setTransform(149.5,506.6,3.276,3.276,5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D1E2E5").s().p("AgLgFIAZAAIgCAKIgYABg");
	this.shape_41.setTransform(119.1,508.3,3.276,3.276,5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9EAED").s().p("AgMAEIABgMIAYAGIgCAKg");
	this.shape_42.setTransform(110.7,506.8,3.276,3.276,5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E0F1F4").s().p("AhxgZIAUgIIDOA1IABAOg");
	this.shape_43.setTransform(70.4,493.3,3.276,3.276,5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A6B9AF").s().p("AhDhoICcgfIgwDvIiCAgg");
	this.shape_44.setTransform(142.3,546.8,3.276,3.276,5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C3D8CD").s().p("AgBh7IAYgBIgVDvIgYAKg");
	this.shape_45.setTransform(111.5,550.7,3.276,3.276,5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgWD4g");
	this.shape_46.setTransform(103.5,549.4,3.276,3.276,5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C9DFD3").s().p("AhvBhIgCj5IDjA9IgVD0g");
	this.shape_47.setTransform(66.7,534.8,3.276,3.276,5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag/BSIAegFIgDAeIgeAGgAgWBKIAbgFIgFAeIgaAGgAAQBCIAZgFIgEAdIgZAGgAg6AVIAggFIgDAfIggAGgAgPAOIAbgFIgEAeIgaAGgAAYAHIAagFIgFAeIgZAFgAg1ghIAhgGIgEAeIgfAGgAgJgpIAcgGIgDAeIgcAGgAAggxIAbgFIgFAdIgbAGgAgxhZIAigGIgDAjIgiAHgAgChiIAdgGIgFAkIgdAGgAAnhqIAcgGIgFAjIgcAGg");
	this.shape_48.setTransform(155.7,466.4,3.418,3.418,5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A6B9AF").s().p("AgfBNIgfAFIADgdIAfgGIADgeIgfAEIACgYIAggGIADgeIghAGIACgUIAhgHIAEgjIAMgCIgEAkIAcgHIAFgkIANgCIgGAkIAcgHIgDAXIgbAFIgEAeIAbgGIgFAbIgaAFIgDAeIAZgFIgFAdIgZAFIgDAeIgMADIAEgeIgaAFIgEAfIgLACgAgNAPIgEAeIAagGIAFgegAgIgpIgDAeIAcgGIAEgdg");
	this.shape_49.setTransform(155.2,466.3,3.418,3.418,5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C9DFD3").s().p("AAaBrIADgkIgggJIgCAjIgNgDIACgkIgcgIIgCAjIgOgEIACgjIgZgHIABgTIAZAIIACggIgbgIIABgYIAbAJIABgdIgbgIIAAgTIAcAIIABgjIAPADIgCAkIAeAJIABglIAMAEIgDAkIAjAKIACglIAPAEIgCAlIAgAIIgCAVIgfgJIgBAaIAeAJIgCAWIgegIIgCAgIAdAIIgBATIgdgIIgCAkgAgCArIAgAJIACggIgggKgAgsAgIAdAHIACggIgdgHgAAAgLIAiAKIACgcIgjgKgAgpgXIAeAIIABgcIgdgIg");
	this.shape_50.setTransform(76.6,453.4,3.418,3.418,5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAqBwIACgkIAdAHIgDAkgAgGBhIACgjIAgAJIgDAkgAgvBVIACgjIAcAIIgCAkgAhVBKIABgjIAZAIIgCAjgAAtA5IACghIAeAIIgDAggAgDArIACggIAgAJIgCAggAgtAgIACggIAdAHIgCAhgAhTAVIAAghIAbAJIgCAfgAAxACIABgaIAfAIIgCAagAAAgLIAAgcIAjAKIgCAcgAgqgXIACgcIAdAJIgBAcgAhSgkIABgcIAbAIIgBAdgAAzgtIACglIAhAIIgDAlgAABg6IADglIAiAJIgCAlgAgnhHIACgkIAdAIIgBAlgAhRhTIABgjIAcAIIgBAjg");
	this.shape_51.setTransform(77,453.3,3.418,3.418,5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B9C8CB").s().p("AhNAGICEgXIAYAGIidAdg");
	this.shape_52.setTransform(163.8,423.8,3.418,3.418,5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D1E2E5").s().p("AgLgFIAYAAIgCAKIgXABg");
	this.shape_53.setTransform(132.2,425.4,3.418,3.418,5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D9EAED").s().p("AgMADIACgKIAXAEIgBAMg");
	this.shape_54.setTransform(123.4,423.8,3.418,3.418,5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E0F1F4").s().p("AhygaIAVgHIDPA1IABAOg");
	this.shape_55.setTransform(81.3,409.9,3.418,3.418,5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A6B9AF").s().p("AhDhoICdgfIgxDvIiBAgg");
	this.shape_56.setTransform(156.3,465.7,3.418,3.418,5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C3D8CD").s().p("AAAh7IAXgBIgVDwIgYAJg");
	this.shape_57.setTransform(124.2,469.7,3.418,3.418,5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgVD4g");
	this.shape_58.setTransform(115.9,468.4,3.418,3.418,5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C9DFD3").s().p("AhwBgIgCj5IDlA+IgWD0g");
	this.shape_59.setTransform(77.5,453.1,3.418,3.418,5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ag/BPIAfgGIgEAeIgdAGgAgWBIIAbgGIgEAeIgaAFgAAQBAIAZgEIgEAcIgYAFgAg6ASIAfgEIgCAeIggAGgAgPAMIAbgEIgEAeIgbAFgAAYAGIAagEIgFAdIgZAFgAg1gkIAhgEIgDAdIghAFgAgJgqIAcgEIgEAdIgbAEgAAfgwIAbgEIgEAcIgbAFgAgwhbIAhgFIgEAkIghAFgAgChhIAcgFIgEAjIgdAFgAAnhoIAcgEIgGAiIgbAFg");
	this.shape_60.setTransform(171.2,382.8,3.561,3.561,5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A6B9AF").s().p("AgfBKIgfAGIADgdIAfgGIADgeIggAEIADgYIAggFIADgeIghAFIACgTIAhgGIADgjIANgCIgEAkIAcgGIAEgiIANgCIgFAiIAcgEIgEAVIgbAFIgDAdIAagFIgEAZIgaAFIgEAdIAagEIgFAdIgYAEIgEAdIgMADIAEgeIgbAFIgDAeIgKACgAgOANIgDAfIAagGIAEgegAgIgpIgDAdIAcgEIADgdg");
	this.shape_61.setTransform(170.8,382.5,3.561,3.561,5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C9DFD3").s().p("AAaBoIADgkIgggIIgCAjIgNgEIACgjIgcgHIgCAiIgNgEIABgiIgZgHIAAgSIAaAHIABgeIgagIIAAgXIAbAHIACgbIgcgHIABgTIAbAHIADgiIAOADIgCAjIAdAHIACgjIAMADIgDAjIAjAJIACglIAPAEIgCAlIAgAHIgBAUIgggHIgBAaIAeAHIgCAXIgegIIgCAgIAeAHIgBATIgegIIgCAkgAgCApIAgAJIACggIgggJgAgrAfIAcAHIACggIgcgGgAAAgMIAiAJIABgbIgigJgAgogXIAdAIIABgcIgdgHg");
	this.shape_62.setTransform(88.7,369.1,3.561,3.561,5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAqBqIACgjIAeAHIgDAigAgFBfIACgjIAgAIIgDAigAgvBVIACgjIAcAHIgCAigAhVBLIABgiIAZAGIgBAigAAuA1IACgfIAdAHIgCAegAgDAqIACgfIAhAHIgCAggAgsAgIACggIAdAHIgCAggAhUAXIABgfIAbAHIgCAegAAxAAIABgZIAgAHIgDAZgAAAgKIAAgbIAiAIIgBAbgAgpgUIABgcIAdAIIgBAbgAhTgfIABgbIAcAHIgCAbgAAzgtIACgkIAhAHIgDAkgAABg4IADgkIAjAIIgDAkgAgnhCIACgjIAdAHIgCAjgAhRhNIAAgiIAeAHIgDAig");
	this.shape_63.setTransform(89.2,368.1,3.561,3.561,5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B9C8CB").s().p("AhMACICDgPIAXAHIibAUg");
	this.shape_64.setTransform(179.5,338.8,3.561,3.561,5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D1E2E5").s().p("AgNAGIACgLIAYABIgBAKg");
	this.shape_65.setTransform(146.8,338.9,3.561,3.561,5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D9EAED").s().p("AgMAEIABgLIAYAEIgCALg");
	this.shape_66.setTransform(137.7,337.3,3.561,3.561,5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E0F1F4").s().p("AhygVIAVgHIDPAsIABANg");
	this.shape_67.setTransform(93.6,324.4,3.561,3.561,5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A6B9AF").s().p("AhDhsICcgWIgwDnIiBAeg");
	this.shape_68.setTransform(171.7,382.5,3.561,3.561,5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C3D8CD").s().p("AgBh7IAYAAIgVDvIgYAJg");
	this.shape_69.setTransform(138.5,385.1,3.561,3.561,5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B5C9BF").s().p("AgVB3IAVj1IAWAFIgWD4g");
	this.shape_70.setTransform(129.9,383.6,3.561,3.561,5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C9DFD3").s().p("AhvBdIgDjwIDlAzIgVD1g");
	this.shape_71.setTransform(89.6,369.3,3.561,3.561,5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag+BGIAegBIgDAeIgeABgAgVBFIAagBIgEAdIgaABgAAQBDIAZgBIgEAcIgYACgAg5AJIAfAAIgDAfIgfABgAgPAJIAbAAIgEAeIgaABgAAYAJIAZAAIgEAdIgZAAgAg0gsIAgAAIgDAdIggAAgAgIgsIAbAAIgEAcIgbABgAAfgsIAbAAIgFAcIgaAAgAgvhjIAhAAIgEAjIggAAgAgChjIAcAAIgEAiIgcABgAAihBIAEgiIAcAAIgFAig");
	this.shape_72.setTransform(189.4,293.6,3.703,3.703,5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A6B9AF").s().p("AgfBGIgeABIADgdIAegBIAEgfIggAAIACgYIAgAAIADgdIgggBIACgTIAhgBIADgjIAMAAIgEAjIAcAAIAFgiIALAAIgEAiIAbAAIgDAVIgbAAIgDAcIAaAAIgFAZIgZAAIgEAdIAaAAIgFAcIgYABIgEAcIgMABIAEgdIgaABIgDAeIgKABgAgRApIAbgBIADgeIgaAAgAgLgOIAbgBIAFgcIgcAAg");
	this.shape_73.setTransform(188.9,293.3,3.703,3.703,5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C9DFD3").s().p("AAbBmIACglIgggGIgCAkIgNgDIACgjIgdgGIgBAjIgOgDIACgiIgagFIABgSIAZAEIACgeIgbgFIABgXIAbAEIABgbIgbgEIAAgSIAcADIACgjIAPABIgCAkIAdADIACgkIAMABIgDAlIAjAEIADgmIAPABIgCAnIAgAEIgCAWIgfgFIgCAdIAfAFIgCAWIgfgFIgCAiIAeAFIgBAUIgegGIgCAmgAgCAoIAgAGIADghIghgGgAgsAhIAdAFIACghIgdgFgAAAgPIAiAGIACgdIgjgFgAgpgVIAdAEIACgcIgdgEg");
	this.shape_74.setTransform(103.8,279.1,3.703,3.703,5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAqBoIACgmIAdAGIgCAmgAgGBdIABgkIAhAGIgCAlgAgwBUIACgjIAdAGIgCAjgAhWBMIABgiIAZAFIgBAigAAtAvIACgiIAfAFIgDAigAgDAmIACghIAgAGIgCAhgAgtAfIACgfIAdADIgCAhgAhVAYIABgfIAbAFIgCAegAAwgJIADgdIAfAFIgCAdgAAAgRIAAgcIAjAFIgCAdgAgqgXIABgcIAeAEIgCAcgAhUgeIACgbIAbAEIgBAbgAA0g7IACgnIAhADIgEAogAABhBIACglIAjADIgCAmgAgohGIADgkIAdADIgCAkgAhShLIABgiIAdACIgCAjg");
	this.shape_75.setTransform(104.2,279.9,3.703,3.703,5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A6B9AF").s().p("AhWB+IAXkIICWANIguEIg");
	this.shape_76.setTransform(189.8,294.3,3.703,3.703,5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C3D8CD").s().p("AgXCEIAXkJIAYACIgYEJg");
	this.shape_77.setTransform(157.4,288.7,3.703,3.703,5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B5C9BF").s().p("AgYCEIAXkJIAaACIgXEJg");
	this.shape_78.setTransform(147.8,287,3.703,3.703,5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C9DFD3").s().p("AhxB+IgBkNIDlAUIgXELg");
	this.shape_79.setTransform(105.2,279.4,3.703,3.703,5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E0E9E7").s().p("AigADIACggIFAAcIgEAfg");
	this.shape_80.setTransform(146.3,230.6,3.703,3.703,5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9FB1A8").s().p("Ag1AsIAIhgIBjALIgRBeg");
	this.shape_81.setTransform(177.4,212.6,3.703,3.703,5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B5C9BF").s().p("Ag9AsIgGhhICHALIgIBgg");
	this.shape_82.setTransform(135.4,205.3,3.703,3.703,5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AEC1B7").s().p("AgoBsIATjZIA+AGIgkDVg");
	this.shape_83.setTransform(174.7,194.1,3.703,3.703,5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C3D8CD").s().p("AgsBqIgFjaIBjAJIgTDYg");
	this.shape_84.setTransform(147.9,189.8,3.703,3.703,5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C5D5CD").s().p("AghAsIAIhbIA7AFIgZBag");
	this.shape_85.setTransform(183.2,139.4,3.703,3.703,5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D2E3DB").s().p("AgkAuIgKhgIBdAJIgGBcg");
	this.shape_86.setTransform(156.2,134.8,3.703,3.703,5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D1DBD9").s().p("AgQAmIAHhNIAaACIgHBNg");
	this.shape_87.setTransform(180.1,107.2,3.703,3.703,5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E0E9E7").s().p("AgYAlIAChNIAwAEIgHBNg");
	this.shape_88.setTransform(166.8,104.8,3.703,3.703,5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D1DBD9").s().p("AgLARIgUgjIA+AFIgXAgg");
	this.shape_89.setTransform(175.1,86.5,3.703,3.703,5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E0E9E7").s().p("AhyGDIByqNIAAgDQAFgjARg3QARg4ApAIQAJgBAKAAIAGABIAKAHIiLMiIAhAHg");
	this.shape_90.setTransform(180.9,41);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D1DBD9").s().p("AhTGOICLsiQALAHAKALQACADAGAUIiFMAg");
	this.shape_91.setTransform(186.9,41.4);

	this.addChild(this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,0,225.8,807.4);


(lib.地球 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04B6E1").s().p("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");
	this.shape.setTransform(195.9,203.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F8C2F").s().p("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");
	this.shape_1.setTransform(202.6,204.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4EC44D").s().p("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");
	this.shape_2.setTransform(195.1,201.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,0,403.9,407.2);


(lib.校園LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9DQIAAmfIJ7AAIAAF8QAAAjhMAAgAjYChIGYAAQAXAAAAgLIAAhXQgQAXgPAGQgRAHgWABIgMAAQAHALARAAIAjAAIAAAmIhSAAQgbAAgTgVIgwhFIBeAAIAHANIAFAAQAOAAAJgNIBGAAIAAjbImvAAgAghCcQgwgBAAgYIAAgVIgFAJQgPAdgmAAIhBAAIAAgpIAaAAQAPAAAGgSIAOgrIgoAAIAAhSIFoAAIAAA4QAAAagsAAIizAAIgMAXIA5AAIAAAiQAAAKAMAAIAnAAIAAArgAheALICvAAQAJAAAAgCIAAgJIi4AAgAjHgxIAAgoICXAAIAAgLIiMAAIAAgnICMAAIAAgQIBYAAIAAAQICSAAIAAAlIiSAAIAAANIChAAIAAAog");
	this.shape.setTransform(122.2,256.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A+IAAgRIAKAAQAEAAABgLIAFhEIgUAAIAAgRIAzAAIAAgKIAUAAIAAAKIA0AAIAAARIhTAAIgCAQIBQAAIAABAQAAAPgSAAIgtAAIAAgRIAnAAQAEAAAAgDIAAgqIg9AAIgEAuQgCARgGAAg");
	this.shape_1.setTransform(295.1,297);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGA9QgQABAAgSIAAhAIgHAAIAAgSIAHgBIAAgTIAQAAIAAARIAJgBIAAgSIARAAIAAAPIAbgDIAABEQAAAPgQAAIgFAAIAAgPIACAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAguIgKABIAABCIgRAAIAAg/IgJACIAABAQAAADAEAAIA0AAIAAARgAg9A7IAAgRIANAAIAAhHIgMAAIAAgRIAMAAIAAgOIATAAIAAAOIALAAIAAARIgLAAIAABHIAMAAIAAARg");
	this.shape_2.setTransform(274,297);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDA+IAAgRIAcAAQADAAAAgGIAAgSIgiAAIAAgSIAiAAIAAgPIgaAAIAAgRIAcAAIAHgOIgoAAIAAgRIA/AAIAAANIgNAYIAAAaIAPAAIAAASIgPAAIAAAcQAAANgLAAgAgYA8QgEABgCgEIgEgHIgGAIQgCACgFAAIgMAAIAAgPIAEAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBIAHgKIgJgOIgBgFIAAgrIgHAAIAAgRIAHAAIAAgOIASAAIAAAOIAIAAIAAgOIARAAIAAAOIAHAAIAAARIgHAAIAAArIgBAGIgLAPIAEAIIADADIAFAAIAAAPgAgkAGIABAFIACAEIADgDIACgFIAAglIgIAAg");
	this.shape_3.setTransform(252.8,297.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIA+IAAgRIAeAAQAEAAAAgDIAAhLIgaAAIgBADQgCALgJAAIgIAAIAABEQAAANgOAAIgqAAIAAhxIAQAAIAEgJIAUAAIgCAJIASAAIAAAQIADAAQABAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAEgWIASAAIgCAKIApAAIAABiQAAAPgRAAgAgpAtIAOAAQAEAAABgEIAAgdIgTAAgAgpgEIATAAIAAgfIgTAAgAAUAjQgIAAgDgKIgJgpIASAAIAGAdQABAFAEAAIAJAAIAAARg");
	this.shape_4.setTransform(231.7,297);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4A+IAAg6IArAAIADgFIgJAAIAAgtIgpAAIAAgPIA6AAIAAA8IAEAAIAAgLIAPAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIAEgGIATAAIgJAQQgDAEgHAAIgQAAIgCAEIA0AAIAAAwQAAAKgNAAgAglAwIBIAAQAFAAAAgDIAAgEIhNAAgAglAbIBNAAIAAgJIhNAAgAg6AAIAAgMIAOAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIADgFIASAAIgIAPQgDAEgGAAgAArAAIAAguIgqAAIAAgPIA8AAIAAA9gAADgWIAAgMIAKAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIADgGIASAAIgIAPQgDAFgGAAgAg5gWIAAgNIAJAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgGIASAAIgIAPQgCAFgHAAg");
	this.shape_5.setTransform(210.4,297);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA9IAAgMIA+AAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgEIhQAAIAAgNIBSAAIAHgFIhQAAIAAgLIgJAAIAAgSIAGAAIAAgzIAOAAQACAAADgEIAQAAIAAABIAPAAIAFAGIAIgGIAWAAIgCABIAcAAIAAA1IAGAAIAAASIgJAAIAAAGIgLAKIAUAAIAAANIgXAAIAAAMQAAAHgMAAgAgpALIBSAAIAAgEIhSAAgAglgFIBLAAIAAgFIgRAAIAGADIgVAAIgGgDIgEADIgVAAIAQgLIgNgJIgPAAIAAAEIAPAAIAAANIgPAAgAAKgSIALAHIAAgMIARAAIAAgEIgOAAgAgWgeIASAAIAEAEIAGgEIAPAAIAAgDIgQAAIgFgEIgHAEIgPAAgAAKgtIALAIIAAgDIARAAIAAgFIgRAAIAAgIgAglgnIAPAAIAAABIAMgIIgKgIQAAALgOAAIgDAAg");
	this.shape_6.setTransform(189.5,297.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJA/IAAghIg0AAIAAgQIA0AAIAAgEIATAAIAAAEIA0AAIAAAQIg0AAIAAAhgAAlA+QgIAAgEgHIgIgVIAUAAIAEALQABABAAAAQAAABABAAQAAAAABABQAAAAAAAAIAPAAIAAAOgAg7A+IAAgOIARAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIAEgKIAUAAIgHAUQgDAHgLAAgAgTAIIAAg/IAHAAIACgHIAPAAIgBAHIAPAAIAAA1QAAAKgLAAgAgEgEIAFAAQADAAAAgEIAAgIIgIAAgAgEgdIAIAAIAAgMIgIAAgAAVAHIAAgJIACgEIALgRIgMAAIAAgNQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAIAPgVIATAAIgQAYIARAAIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgRAWIAGAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAAgGIANAAIAAAMQAAAIgMAAgAg8AHIAAgJIABgEIANgRIgOAAIAAgNQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAQgVIAUAAIgSAYIASAAIAAAGQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgRAWIAFAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAOAAIAAAMQAAAIgMAAg");
	this.shape_7.setTransform(168.3,297);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmA+QgJAAgFgJIgJgaIgKAaQgDAJgFAAIgQAAIAAgQIAFAAQAFAAACgEIAJgfIgVAAIAAgOIAYAAIAAgiIgQAAIAAgQIAQAAIAAgIIATAAIAAAIIAfAAIAAAyIAHAAIAAAOIgiAAIANAfQADAEAFAAIALAAIAAAQgAAYgDIAMAAIAAgiIgMAAgAgnA+IAAhWIgFAAIAABOIgRAAIAAhtIARAAIAAAPIAFAAIAAgVIARAAIAAAVIAFAAIAAAQIgFAAIAABWg");
	this.shape_8.setTransform(147.1,297);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA/IAAgPIACAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAhRIgEAAIgDBNQgBALgEAFQgEAFgGAAIgIAAIAAgPIADAAQAEAAAAgJIADhKIgIAAIAAgPIAJAAIAAgKIAQAAIAAAKIAUAAIAABkQAAAOgPAAgAg8A+IAAgOIAeAAIAAgDIgcAAIAAgOIAcAAIAAgDIgaAAIAAgyIAaAAIAAgFIgdAAIAAgNIAdAAIAAgEIgbAAIAAgOIAyAAQAEAAABgDIAQAAQgBAJgEAEQgEAEgFAAIgOAAIAAAEIAcAAIAAANIgcAAIAAAFIAZAAIAAAoQAAAKgLAAIgOAAIAAADIAbAAIAAAOIgbAAIAAADIAaAAIAAAOgAgOAPIAHAAQAEAAAAgDIAAgDIgLAAgAgoAPIAKAAIAAgGIgKAAgAgOgDIALAAIAAgHIgLAAgAgogDIAKAAIAAgHIgKAAg");
	this.shape_9.setTransform(125.8,297.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATA/IAAgNIAOAAQAEAAAAgGIAAgFIhCAAIAAgOIBCAAIAAgDIAQAAIAAADIAGAAIAAAOIgGAAIAAAJQAAAGgEAFQgDAEgHAAgAg3A+IAAhRIgGAAIAAgRIAEAAQACAAABgEIAHgWIATAAIgCAFIAhAAIAAgEIASAAIAAAEIAnAAIAAANIgnAAIAAAEIAkAAIAAAjQAAAFgFACIAKAAQgBALgEADQgDAEgIAAIhOAAIAAgMIAjAAIAAgFIggAAIAAgrIAgAAIAAgEIgjAAIAAgHIgGAQIAABhgAAVAIIATAAQADAAABgFIgXAAgAAVgHIAQAAQADAAAAgEIAAgBIgTAAgAgLgHIAOAAIAAgFIgOAAgAAVgXIATAAIAAgFIgTAAgAgLgXIAOAAIAAgFIgOAAgAgJA8QgEAAgCgEIgHgOIAUAAIACAFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAOAAIAAAMg");
	this.shape_10.setTransform(104.9,297);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjA9QgOAAgGgMIgPghIgSAhQgGAMgNAAIgYAAIAAgSIANAAQAIAAADgFIAWglIgtAAIAAgQIAyAAIAAgcIgvAAIAAgRIBzAAIAAARIgwAAIAAAcIA0AAIAAAQIgvAAIAUAlQAFAFAHAAIAPAAIAAASg");
	this.shape_11.setTransform(83.7,297);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBCAAIAAgYIhCAAIAAg4IBVAAIAAAUIg+AAIAAAXIAuAAQALAAAEAEQAFACAAAKIAAAUQAAAKgGAFQgGAFgKAAg");
	this.shape_12.setTransform(62.5,297);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAyQgOAAgGgFQgGgFAAgPIAAgyQAAgNAFgGQAHgEAMgBIBCAAIAAAUIhEAAIAAAXIAvAAQAQABAFADQAFACABAMIAAAPQgBAWgYABgAgZAfIAzAAIAAgXIgzAAg");
	this.shape_13.setTransform(41.4,297);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBDAAIAAgXIg3AAIAAgPIA3AAIAAgWIhDAAIAAgUIBCAAQAXAAAAARIAAARQAAAHgDADQgDAFgGAAIAKAGQACAFAAAFIAAARQAAAQgXABg");
	this.shape_14.setTransform(20.3,297);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAODPQg7AAAAgiIAAlzIBnAAIAACrIB2AAQATAAAAgbIAAhwIBoAAIAACKQAAAagZAPQgWAPgnAAIibAAIAABvQAAAKATAAID8AAIAAA6gAkADPIAAjxIhIAAIAAhAIA8AAQAQAAAJgSIAwhaIBtAAIhFB9IAAEgg");
	this.shape_15.setTransform(270,256.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ADKDSQgwgBgkgXIh4hUIhtBJQgwAghBAAIhsAAIAAg9IBMAAQAqgBAbgSIByhKIjUiQICHAAICYBeICUheICHAAIjSCMICHBTQAaARAjABIA9AAIAAA8gAlLh0IAAg5IETAAIAAgkIB6AAIAAAkIELAAIAAA5g");
	this.shape_16.setTransform(196.3,256.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AD7DRQgdAAgXgRIgxgrIgjAhQgZAWgkAAIhUAAIAAgxIAdAAQAZAAAfgcIAggdIiHhxIByAAIBOA9IBIhAIB0AAIh8ByIA/A0QAOAMAVAAIAaAAIAAAxgAjgDQIAAlBIhjAAIAAg1IBjAAIAAgqIBQAAIAAAqIBYAAIAAA1IhYAAIAAFBgAlRC7IAAgzQAPAAABgSIASjSIBLAAIgSDoQgCAYgRALQgSAMgZAAgAhKC5QgoABgGgrIgVjrIBJAAIAUDWQACAQAMAAIAAAvgADygiQgXAAgPgWIgpg/IBgAAIAOAeQAEAJALAAIAyAAIAAAugAgigiIAAguIAiAAQAKAAAEgJIARgeIBcAAIgrA/QgOAWggAAgAgkiGIAAg4ICGAAIAAgSIBkAAIAAASICMAAIAAA4g");
	this.shape_17.setTransform(47.9,256.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BpIAAjRIAqAAIAACgIBHAAIAAAxg");
	this.shape_18.setTransform(240.4,27.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BMQgTgcAAgwQAAgwAUgdQAUgfAkABQAmgBAVAgQASAdAAAvQAAAwgTAcQgUAhgmAAQglgBgUgggAggAAQAAAgALAQQAJANAMAAQAOAAAJgNQALgPAAghQAAg9giABQgggBAAA9g");
	this.shape_19.setTransform(224.8,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BMQgSgdAAgvQAAgwAUgdQAUgfAkABQAmgBAUAgQATAcAAAwQAAAwgTAcQgUAhgmAAQglgBgVgggAggAAQAAAgALAQQAJANAMAAQANAAAKgNQALgPAAghQAAg9giABQgggBAAA9g");
	this.shape_20.setTransform(207.9,27.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBpIAAhXIgxAAIAABXIgqAAIAAjRIAqAAIAABNIAxAAIAAhNIAqAAIAADRg");
	this.shape_21.setTransform(191.3,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BKQgRgcAAguQABg0AWgdQAUgaAfAAQAzAAAPBCIgnANQgHghgUABQgfAAAAA8QABA9AcAAQAYAAAGgqIAmAQQgNBKg1AAQglAAgUgjg");
	this.shape_22.setTransform(175.3,27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BNQgJgQgBgdIApgEQADAlAWgBQAKABAHgHQAGgFAAgKQAAgLgIgFQgEgDgVgHQgzgQAAgvQAAgfAUgRQARgNAXAAQAjgBAPAZQAIAOAEAcIgpADQgCgMgEgGQgGgKgKAAQgTAAAAAPQABAJAHAFIAWAHQAXAIANAKQAUARAAAhQAAAWgKASQgQAegnABQgogBgQgfg");
	this.shape_23.setTransform(159.9,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBpIAAhYIg4h5IAvAAIAdBIIAfhIIAuAAIg5B5IAABYg");
	this.shape_24.setTransform(138.6,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIA9AAQAUAAAHACQAMAFAJAJQAOASgBAgQABAogYARQgMAJgaAAIgTAAIAABNgAgTgOIAMAAQAJABAHgDQALgFAAgQQgBgKgEgGQgFgHgRAAIgMAAg");
	this.shape_25.setTransform(124.1,27.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIA9AAQAUAAAIACQALAFAIAJQAPATAAAfQAAAogYARQgMAJgaAAIgTAAIAABNgAgTgOIAMAAQAKABAGgDQALgFAAgQQAAgKgFgGQgFgHgRAAIgMAAg");
	this.shape_26.setTransform(109.4,27.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAkBpIgKgoIgzAAIgKAoIgsAAIA6jRIAqAAIA7DRgAgOATIAcAAIgOg+g");
	this.shape_27.setTransform(93.9,27.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAZBpIAAhXIgxAAIAABXIgqAAIAAjRIAqAAIAABNIAxAAIAAhNIAqAAIAADRg");
	this.shape_28.setTransform(77.8,27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMBFIgMhMIgLBMIgWAAIgZiJIAYAAIAMBNIALhMIAWAAIAMBNIALhOIAZAAIgZCJg");
	this.shape_29.setTransform(214.7,211.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLBQQgDgMAAgaIAAgyIgJAAIAAgkIAJAAIAAgZIAXgaIAAAzIANAAIAAAkIgNAAIAAA9QABAFADAAQACAAAHgEIACAkIgCABQgJAFgGAAQgNAAgFgQg");
	this.shape_30.setTransform(206.1,209.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_31.setTransform(201.4,216.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAfBGIAAhMQAAgZgHAAQgMAAAAAgIAABFIgXAAIgBhcQgDgJgEAAQgHAAgDAOQgBAEAAAPIAABEIgaAAIAAiIIAYAAIAAAPQAJgSANAAQANAAAGAUQAKgUANAAQASAAAFAbQACAJAAASIAABVg");
	this.shape_32.setTransform(193,211.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAyQgKgUAAgeQAAgcAKgVQALgWARAAQATAAALAXQAJAUAAAcQAAAdgJATQgLAYgTAAQgQAAgMgWgAgIgZQgEAKAAAPQAAAQADAJQAEAKAFAAQAFAAAEgIQAEgJAAgSQAAgNgDgKQgDgLgHAAQgEABgEAIg");
	this.shape_33.setTransform(182.1,211.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAyQgJgTABgfQgBgdAJgTQAJgXATAAQAQAAAKAOQAGAMAFAaIgZAGQgBgUgLgBQgLAAAAAiQAAAjALAAQAKAAADgYIAYAHQgCAYgIAMQgJASgSAAQgRAAgLgWg");
	this.shape_34.setTransform(173.6,211.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_35.setTransform(167.3,216.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBaIgGgMIAAAPIgYAAIAAi9IAZAAIAAA+QAIgOAJAAQAPAAAIAVQAIAVAAAcQAAAhgIAVQgJAVgOAAQgHAAgFgHgAgLAXQAAAVAGAJQADAFACAAQALAAAAgjQAAghgLAAQgLAAAAAhg");
	this.shape_36.setTransform(161.1,209.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTA+QgKgKgFgWQgCgQAAgOQAAgdAIgTQAKgXASAAQAmAAgBBUIgwAAQACAZAJAAQAIAAAEgQIAYAGQgEAUgGAJQgJAPgRAAQgLAAgIgKgAgHgeQgEAHAAAKIAXAAQgCgYgKAAQgEgBgDAIg");
	this.shape_37.setTransform(152.4,211.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAMBFIgMhMIgKBMIgYAAIgYiJIAYAAIAMBNIAMhMIAVAAIAMBNIALhOIAaAAIgaCJg");
	this.shape_38.setTransform(142.4,211.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYA/QgFgHgCgJQgDgPAAgQIAAhVIAaAAIAABaQADALAFAAQAEAAAEgLQACgJAAgSIAAg/IAZAAIAACJIgXAAIAAgSQgIAUgOAAQgIAAgGgHg");
	this.shape_39.setTransform(132.1,212);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcBMQgIgXAAgfQAAgjAKgTQAIgQANAAQAJAAAIAOIAAg+IAZAAIAAC9IgXAAIAAgQQgHAUgNAAQgNAAgJgVgAgLAYQAAAUAGAJQADAFACAAQAEAAAEgGQAEgKAAgTQAAgPgDgIQgDgKgGAAQgLAAAAAig");
	this.shape_40.setTransform(123.3,209.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUA+QgJgLgFgVQgCgMAAgSQAAgdAIgTQAKgXASAAQAmAAgBBUIgwAAQACAZAJAAQAHAAAFgQIAYAGQgEAUgGAJQgJAPgRAAQgLAAgJgKgAgHgeQgEAHAAAKIAXAAQgCgYgKAAQgEgBgDAIg");
	this.shape_41.setTransform(114.9,211.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_42.setTransform(108.6,216.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAMBFIgMhMIgLBMIgWAAIgZiJIAZAAIALBNIAMhMIAVAAIAMBNIALhOIAZAAIgZCJg");
	this.shape_43.setTransform(100.8,211.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAMBFIgMhMIgLBMIgXAAIgYiJIAYAAIAMBNIAMhMIAVAAIAMBNIALhOIAZAAIgZCJg");
	this.shape_44.setTransform(89,211.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAMBFIgMhMIgKBMIgYAAIgYiJIAYAAIAMBNIAMhMIAVAAIANBNIAKhOIAaAAIgaCJg");
	this.shape_45.setTransform(77.2,211.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AneAGIAAgLIO9AAIAAALg");
	this.shape_46.setTransform(58.6,174.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ai6AIIAAgPIF1AAIAAAPg");
	this.shape_47.setTransform(95.7,151.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkTAFIAAgJIInAAIAAAJg");
	this.shape_48.setTransform(135.7,141.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Am3AGIAAgLINvAAIAAALg");
	this.shape_49.setTransform(116,139.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AnyAIIAAgPIPlAAIAAAPg");
	this.shape_50.setTransform(124.3,122.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AmtAGIAAgLINbAAIAAALg");
	this.shape_51.setTransform(142.8,112.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AnaAHIAAgNIO1AAIAAANg");
	this.shape_52.setTransform(130.3,110.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AnfAIIAAgPIO/AAIAAAPg");
	this.shape_53.setTransform(123.9,79.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCFF24").s().p("ABoD9QifgGhVgtQhmg6g5guQgbgagygXQhjguhvALIgtkLIAiADQArAGAtALQCQAjBuBPIAlAcQAuAhAwAbQCYBVBwgIIAbAAQAhgCAigMQBugjBMh2IDUBKQgfA7g/BEQh/CHijAjQgrAEgxAAIg0gBg");
	this.shape_54.setTransform(226.4,109.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCFF24").s().p("AE3DYQAeghAZguQAxhagdg6QgMgbgggYQhBgyhpAHQgRACgbAGQg1ANgxAYQgiASg1AQQhrAhhagCQgzAEhJgYQiSg1hsidIDbhvIAoBCQAzBBA9AAIAqgBQA3gHA+gbIB0gjQCFgjBMAEIAtAFQA4ALA1AUQCpBABLCNIALAhQAKAqgCAvQgGCWiACCg");
	this.shape_55.setTransform(198.9,179.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCFF24").s().p("Ah4B5QgzgyAAhHQAAhGAzgyQAygzBGAAQBHAAAyAzQAzAyAABGQAABHgzAyQgyAzhHAAQhGAAgygzg");
	this.shape_56.setTransform(223.3,80.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#339FC4").s().p("AjYDtIAAi0ID9AAIAAklIC0AAIAAHZg");
	this.shape_57.setTransform(277.3,194.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCFF24").s().p("AjYDtIAAnZIC0AAIAAElID9AAIAAC0g");
	this.shape_58.setTransform(39.8,194.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F7001A").s().p("AjYDtIAAnZIGxAAIAAC0Ij9AAIAAElg");
	this.shape_59.setTransform(39.8,39.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#81C528").s().p("AAlDtIAAklIj9AAIAAi0IGxAAIAAHZg");
	this.shape_60.setTransform(277.3,39.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("A4wYxMAAAgxhMAxhAAAMAAAAxhg");
	this.shape_61.setTransform(158.5,158.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61,p:{scaleX:1,scaleY:1}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:277.3,y:39.9}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:39.8,y:39.9}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:39.8,y:194.8}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:277.3,y:194.8}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:223.3,y:80.8}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:198.9,y:179.1}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:226.4,y:109.4}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:123.9,y:79.4}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:130.3,y:110.3}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:142.8,y:112.5}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:124.3,y:122.1}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:116,y:139.5}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:135.7,y:141.7}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:95.7,y:151.9}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:58.6,y:174.2}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:77.2,y:211.8}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:89,y:211.8}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:100.8,y:211.8}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:108.6,y:216.5}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:114.9,y:211.9}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:123.3,y:209.4}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:132.1,y:212}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:142.4,y:211.8}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:152.4,y:211.9}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:161.1,y:209.4}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:167.3,y:216.5}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:173.6,y:211.9}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:182.1,y:211.9}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:193,y:211.7}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:201.4,y:216.5}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:206.1,y:209.4}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:214.7,y:211.8}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:77.8,y:27.8}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:93.9,y:27.8}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:109.4,y:27.8}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:124.1,y:27.8}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:138.6,y:27.8}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:159.9,y:27.8}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:175.3,y:27.8}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:191.3,y:27.8}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:207.9,y:27.8}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:224.8,y:27.8}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:240.4,y:27.8}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:47.9,y:256.5}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:196.3,y:256.4}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:270,y:256.4}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:20.3,y:297}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:41.4,y:297}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:62.5,y:297}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:83.7,y:297}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:104.9,y:297}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:125.8,y:297.1}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:147.1,y:297}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:168.3,y:297}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:189.5,y:297.1}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:210.4,y:297}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:231.7,y:297}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:252.8,y:297.1}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:274,y:297}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:295.1,y:297}},{t:this.shape,p:{scaleX:1,scaleY:1,x:122.2,y:256.7}}]}).to({state:[{t:this.shape_61,p:{scaleX:1.087,scaleY:1.087}},{t:this.shape_60,p:{scaleX:1.087,scaleY:1.087,x:287.6,y:29.6}},{t:this.shape_59,p:{scaleX:1.087,scaleY:1.087,x:29.5,y:29.6}},{t:this.shape_58,p:{scaleX:1.087,scaleY:1.087,x:29.5,y:197.9}},{t:this.shape_57,p:{scaleX:1.087,scaleY:1.087,x:287.6,y:197.9}},{t:this.shape_56,p:{scaleX:1.087,scaleY:1.087,x:228.9,y:74.1}},{t:this.shape_55,p:{scaleX:1.087,scaleY:1.087,x:202.4,y:180.9}},{t:this.shape_54,p:{scaleX:1.087,scaleY:1.087,x:232.3,y:105.1}},{t:this.shape_53,p:{scaleX:1.087,scaleY:1.087,x:120.9,y:72.6}},{t:this.shape_52,p:{scaleX:1.087,scaleY:1.087,x:127.8,y:106.1}},{t:this.shape_51,p:{scaleX:1.087,scaleY:1.087,x:141.4,y:108.5}},{t:this.shape_50,p:{scaleX:1.087,scaleY:1.087,x:121.4,y:118.9}},{t:this.shape_49,p:{scaleX:1.087,scaleY:1.087,x:112.3,y:137.9}},{t:this.shape_48,p:{scaleX:1.087,scaleY:1.087,x:133.8,y:140.2}},{t:this.shape_47,p:{scaleX:1.087,scaleY:1.087,x:90.2,y:151.4}},{t:this.shape_46,p:{scaleX:1.087,scaleY:1.087,x:49.9,y:175.6}},{t:this.shape_45,p:{scaleX:1.087,scaleY:1.087,x:70.1,y:216.5}},{t:this.shape_44,p:{scaleX:1.087,scaleY:1.087,x:82.9,y:216.5}},{t:this.shape_43,p:{scaleX:1.087,scaleY:1.087,x:95.7,y:216.5}},{t:this.shape_42,p:{scaleX:1.087,scaleY:1.087,x:104.3,y:221.6}},{t:this.shape_41,p:{scaleX:1.087,scaleY:1.087,x:111.2,y:216.5}},{t:this.shape_40,p:{scaleX:1.087,scaleY:1.087,x:120.2,y:213.8}},{t:this.shape_39,p:{scaleX:1.087,scaleY:1.087,x:129.8,y:216.6}},{t:this.shape_38,p:{scaleX:1.087,scaleY:1.087,x:141,y:216.5}},{t:this.shape_37,p:{scaleX:1.087,scaleY:1.087,x:151.9,y:216.5}},{t:this.shape_36,p:{scaleX:1.087,scaleY:1.087,x:161.4,y:213.8}},{t:this.shape_35,p:{scaleX:1.087,scaleY:1.087,x:168,y:221.6}},{t:this.shape_34,p:{scaleX:1.087,scaleY:1.087,x:174.9,y:216.5}},{t:this.shape_33,p:{scaleX:1.087,scaleY:1.087,x:184.1,y:216.5}},{t:this.shape_32,p:{scaleX:1.087,scaleY:1.087,x:195.9,y:216.3}},{t:this.shape_31,p:{scaleX:1.087,scaleY:1.087,x:205.1,y:221.6}},{t:this.shape_30,p:{scaleX:1.087,scaleY:1.087,x:210.2,y:213.9}},{t:this.shape_29,p:{scaleX:1.087,scaleY:1.087,x:219.6,y:216.5}},{t:this.shape_28,p:{scaleX:1.087,scaleY:1.087,x:70.7,y:16.5}},{t:this.shape_27,p:{scaleX:1.087,scaleY:1.087,x:88.2,y:16.5}},{t:this.shape_26,p:{scaleX:1.087,scaleY:1.087,x:105.1,y:16.5}},{t:this.shape_25,p:{scaleX:1.087,scaleY:1.087,x:121.1,y:16.5}},{t:this.shape_24,p:{scaleX:1.087,scaleY:1.087,x:136.9,y:16.5}},{t:this.shape_23,p:{scaleX:1.087,scaleY:1.087,x:160,y:16.5}},{t:this.shape_22,p:{scaleX:1.087,scaleY:1.087,x:176.7,y:16.5}},{t:this.shape_21,p:{scaleX:1.087,scaleY:1.087,x:194.1,y:16.5}},{t:this.shape_20,p:{scaleX:1.087,scaleY:1.087,x:212.2,y:16.5}},{t:this.shape_19,p:{scaleX:1.087,scaleY:1.087,x:230.5,y:16.5}},{t:this.shape_18,p:{scaleX:1.087,scaleY:1.087,x:247.5,y:16.5}},{t:this.shape_17,p:{scaleX:1.087,scaleY:1.087,x:38.3,y:265}},{t:this.shape_16,p:{scaleX:1.087,scaleY:1.087,x:199.6,y:264.8}},{t:this.shape_15,p:{scaleX:1.087,scaleY:1.087,x:279.7,y:264.9}},{t:this.shape_14,p:{scaleX:1.087,scaleY:1.087,x:8.3,y:309}},{t:this.shape_13,p:{scaleX:1.087,scaleY:1.087,x:31.2,y:309}},{t:this.shape_12,p:{scaleX:1.087,scaleY:1.087,x:54.2,y:309}},{t:this.shape_11,p:{scaleX:1.087,scaleY:1.087,x:77.2,y:309}},{t:this.shape_10,p:{scaleX:1.087,scaleY:1.087,x:100.3,y:309}},{t:this.shape_9,p:{scaleX:1.087,scaleY:1.087,x:123,y:309.1}},{t:this.shape_8,p:{scaleX:1.087,scaleY:1.087,x:146.1,y:309}},{t:this.shape_7,p:{scaleX:1.087,scaleY:1.087,x:169.1,y:309}},{t:this.shape_6,p:{scaleX:1.087,scaleY:1.087,x:192.1,y:309.1}},{t:this.shape_5,p:{scaleX:1.087,scaleY:1.087,x:214.9,y:309}},{t:this.shape_4,p:{scaleX:1.087,scaleY:1.087,x:238.1,y:309}},{t:this.shape_3,p:{scaleX:1.087,scaleY:1.087,x:261,y:309.1}},{t:this.shape_2,p:{scaleX:1.087,scaleY:1.087,x:284,y:309}},{t:this.shape_1,p:{scaleX:1.087,scaleY:1.087,x:307,y:309}},{t:this.shape,p:{scaleX:1.087,scaleY:1.087,x:119,y:265.2}}]},1).to({state:[{t:this.shape_61,p:{scaleX:1,scaleY:1}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:277.3,y:39.9}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:39.8,y:39.9}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:39.8,y:194.8}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:277.3,y:194.8}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:223.3,y:80.8}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:198.9,y:179.1}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:226.4,y:109.4}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:123.9,y:79.4}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:130.3,y:110.3}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:142.8,y:112.5}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:124.3,y:122.1}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:116,y:139.5}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:135.7,y:141.7}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:95.7,y:151.9}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:58.6,y:174.2}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:77.2,y:211.8}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:89,y:211.8}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:100.8,y:211.8}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:108.6,y:216.5}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:114.9,y:211.9}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:123.3,y:209.4}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:132.1,y:212}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:142.4,y:211.8}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:152.4,y:211.9}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:161.1,y:209.4}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:167.3,y:216.5}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:173.6,y:211.9}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:182.1,y:211.9}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:193,y:211.7}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:201.4,y:216.5}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:206.1,y:209.4}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:214.7,y:211.8}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:77.8,y:27.8}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:93.9,y:27.8}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:109.4,y:27.8}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:124.1,y:27.8}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:138.6,y:27.8}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:159.9,y:27.8}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:175.3,y:27.8}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:191.3,y:27.8}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:207.9,y:27.8}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:224.8,y:27.8}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:240.4,y:27.8}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:47.9,y:256.5}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:196.3,y:256.4}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:270,y:256.4}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:20.3,y:297}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:41.4,y:297}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:62.5,y:297}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:83.7,y:297}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:104.9,y:297}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:125.8,y:297.1}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:147.1,y:297}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:168.3,y:297}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:189.5,y:297.1}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:210.4,y:297}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:231.7,y:297}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:252.8,y:297.1}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:274,y:297}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:295.1,y:297}},{t:this.shape,p:{scaleX:1,scaleY:1,x:122.2,y:256.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.1,317.1);


(lib.鼠環保_眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape.setTransform(89.5,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqArQgSgSAAgZQAAgYASgSQASgTAYABQAZgBASATQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_1.setTransform(88.9,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AhUhVQAjgjAxAAQAyAAAjAjQAkAkAAAxQAAAygkAkQgDACgCADQgiAeguAAQgcAAgXgLQgSgJgPgPQgkgkAAgyQAAgxAkgkg");
	this.shape_2.setTransform(90,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBtQgSgIgQgPQgjgkAAgyQAAgxAjgjQAkgkAxAAQAyAAAkAkQAjAjAAAxQAAAygjAkIgGAEQgiAfguAAQgcAAgXgMg");
	this.shape_3.setTransform(90,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgJAAgIgIg");
	this.shape_4.setTransform(-8.1,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtAtQgSgTAAgaQAAgZASgTQAUgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgUgTg");
	this.shape_5.setTransform(-8.7,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AhZhZQAmglAzAAQA1AAAlAlQAmAmAAAzQAAA1gmAlQgDADgCADQgkAggxAAQgdAAgZgMQgTgKgQgQQgmglAAg1QAAgzAmgmg");
	this.shape_6.setTransform(-10,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2B0QgTgKgQgQQgmglAAg1QAAgzAmgmQAmgmAzABQA0gBAmAmQAmAmAAAzQAAA1gmAlIgFAFQglAhgwAAQgdAAgZgMg");
	this.shape_7.setTransform(-10,16.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.8,2.7,127,30.5);


(lib.分針 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993333").s().p("AgaGHIAMsNIAYAAIARMNg");
	this.shape.setTransform(3.3,78.5,1,1,0,0,0,0.5,39.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.5,78.3);


(lib.紅暈 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAA690").s().p("Ag5AhQgXgOAAgTQAAgSAXgNQAYgOAhAAQAiAAAXAOQAYANAAASQAAATgYAOQgXANgiAAQghAAgYgNg");
	this.shape.setTransform(8.2,3.9,1,0.839);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,7.8);


(lib.電腦螢幕 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.電腦螢幕反光();
	this.instance.setTransform(72.3,41.7,1.132,0.773,0,0,0,55.7,42.6);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#495F72").s().p("AmNBfQAxhWBqgyQBug1CEAAQCFAABtA1QBrAzAxBVgAkTAHQgrAggVAeIBYgDQAEgTAagbQAzgzBrgnQh6AOhaA/g");
	this.shape.setTransform(71.8,111.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkPBBQAhg7BJghQBLglBaAAQBbAABLAlQBJAiAhA6g");
	this.shape_1.setTransform(73.2,111.1,1.462,1.462);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCFFFF","#66FFFF"],[0.004,0.647],-0.1,45.9,0,-45.9).s().p("ApVGyQgUAAgQgOQgOgPAAgUIAAsBQAAgUAOgPQAQgOAUAAISrAAQAVAAAOAOQAPAPAAAUIAAMBQAAAUgPAPQgOAOgVAAg");
	this.shape_2.setTransform(73,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#495F72").s().p("AhPIcIAAhnIpRAAQgXABgQgRQgRgQAAgXIAAtgQAAgYARgQQAQgRAXAAIVBAAQAXAAARARQAQAQAAAYIAANgQAAAXgQAQQgRARgXgBIp6AAIAABngAp5nWQgOAPAAAUIAAMBQAAAVAOAOQAQAOAUAAISrAAQAVAAAOgOQAPgOAAgVIAAsBQAAgUgPgPQgOgOgVAAIyrAAQgUAAgQAOg");
	this.shape_3.setTransform(73,54.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146,121);


(lib.電腦 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AghAOQgPgFAAgHQAAgGAOgFQAOgHAUgBQATgBAPAFQAPAEAAAIQABAFgPAGQgOAGgVABIgGABQgPAAgMgEg");
	this.shape.setTransform(59.5,38.6,1.28,1.28,17.8,0,0,0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgoAOQgRgGAAgIQAAgHARgGQARgGAXAAQAYAAAQAGQASAGgBAHQABAIgSAGQgQAGgYAAQgXAAgRgGg");
	this.shape_1.setTransform(95.8,47.5,1.097,1.126,0,15.3,14.8,0.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABDAYQgRgRgagKQgVgJgWABQgeACgYARIABgDQANgaAegHQAZgGAUAKQAZALATAXQAJALAFAKIgHgHg");
	this.shape_2.setTransform(63.7,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAsQgEABgGgDQgJgEgBgOQAAgKADgJIAFgEQgCAKAFANQAGAPAJAFIgDAAIgDAAgAgKAhQgNgGgBgTQgBgOAFgNQACgDAGgEQgDAPAIARQAHAXANAHIgKAAIgCAAQgDAAgIgDgAAOAZQgOgHgBgUQAAgSAEgOQACgEAHgFQgDARAJAXQAJAXAQAJIgLABIgCAAQgGAAgKgFg");
	this.shape_3.setTransform(60.3,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgMARQgMgDgFgHQgFgHADgEIACgMIAOAEIANAFQAIACAMgBQAJgCAGgDIgSAPQgNANgJAAIgFAAg");
	this.shape_4.setTransform(64.1,33);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAVQgJgCgFgIQgFgIABgHQACgJAIgEQAIgFAHACQAJADAFAHQAFAIgCAHQgBAJgIAEQgFADgGAAIgEAAg");
	this.shape_5.setTransform(64.3,27.4,1,1,0,0,0,-0.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBqQgbgHgPgYQgOgXAGgbQAFgZAWgOQAYgPAbAHQAZAHAOAXQAQAXgGAbQgGAbgYAOQgOAJgPAAQgIAAgKgCgAAKhYQgtgOguAIQAmgUArALQArAJAeAaIAJAIQgigRgmgLg");
	this.shape_6.setTransform(64.9,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAhgGQgVgNgVgCQgcgDgXAHQgFABgEADQAIgHAOgGQAdgLAZACQAYACATARQAXASgDAeIgBAEQgLgcgZgOg");
	this.shape_7.setTransform(97.8,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAwQgHAAgCgCIgHgEQAMAAAMgKQALgIADgKIACAGQgBAKgFAIQgHAKgJAAIgCAAgAADAeQgIgBgEgDIgJgFQAQAAAQgPQAQgLAFgOQAEAGgBADQgBAMgJANQgJAPgNAAIgDAAgAgOALQgMgBgGgEIgJgGQATAAAVgPQAQgQAGgQQADAHAAAEQgBAQgKAPQgLAQgNAAIgDAAg");
	this.shape_8.setTransform(103,31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AgHARQgQgGgFgbIADgBQAHgCAFACQAEABADADIADAGQADgDACgBQAGgCAHADQAFACADAEQAEACACACQgQATgNAAQgDAAgEgCg");
	this.shape_9.setTransform(76.7,52.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#990000","#430101"],[0,1],-1.2,1.3,0,-1.2,1.3,6.3).s().p("AALAfQgEgEgEgCQgGgDgFACQgFABgCADIgDgGQgDgDgEgCQgFgBgIACIgCAAIgBgHIgBgcIgBgSIANAHQAXAJAQADQARAEATAAIgIAPQgHAPgJAMIgFAGQgBgDgEgCg");
	this.shape_10.setTransform(77.9,49.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgCAXQgMgEgHgTIgHgYQAEAGAIAGQAJAHAIADIAOACIAOAAIgEAMQgBAHgIAEQgEACgGAAIgIgCg");
	this.shape_11.setTransform(95.1,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAUQgJgCgEgIQgEgHADgHQACgJAIgEQAJgEAHACQAJACAEAIQAFAIgDAHQgDAIgIAEQgGADgEAAIgGgBg");
	this.shape_12.setTransform(97.1,34.5,1,1,0,0,0,-0.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvBmQgbgIgMgXQgOgXAJgbQAIgYAagNQAYgPAbAIQAZAHANAWQAMAXgIAaQgJAagYAOQgPAJgRAAQgJAAgJgCgAAMhXQglgJgmgBQAGgDAGAAQAngIAoANQAtAMAWAkQgkgdgvgLg");
	this.shape_13.setTransform(100,33.1);

	this.instance = new lib.電腦螢幕();
	this.instance.setTransform(78.5,41.6,0.564,0.564,12.9,0,0,71.3,59.3);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 63, -7, 20, 0)];
	this.instance.cache(-2,-2,150,125);

	this.instance_1 = new lib.影子();
	this.instance_1.setTransform(83,66.8,0.685,0.685,38.2,0,0,44.1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// 圖層 3
	this.instance_2 = new lib.電腦_手();
	this.instance_2.setTransform(41,22.7,0.997,0.997,0,29.3,-150.7,5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:52.2,skewY:-127.8,x:40.9},4).to({skewX:29.3,skewY:-150.7,x:41},5).wait(1));

	// 圖層 2
	this.instance_3 = new lib.電腦_手();
	this.instance_3.setTransform(120,40.1,1,1,0,0,0,5.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-28.8},4).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,166.3,80.5);


(lib.雲飄 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 8
	this.instance = new lib.C8("synched",0);
	this.instance.setTransform(476.9,2.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:-488},291).to({_off:true},1).wait(74));

	// 圖層 7
	this.instance_1 = new lib.C7("synched",0);
	this.instance_1.setTransform(458.7,-30.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:-494.7,y:-27.3},177).to({_off:true},1).wait(198));

	// 圖層 2
	this.instance_2 = new lib.c6("synched",0);
	this.instance_2.setTransform(-62.6,82.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-478.4},128).to({_off:true},1).wait(4).to({_off:false,x:458.8},0).to({x:-62.6},266).wait(1));

	// 圖層 5
	this.instance_3 = new lib.c4("synched",0);
	this.instance_3.setTransform(132.6,-6.2);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-545.9,y:10.5},180).to({_off:true},1).wait(12).to({_off:false,x:508.8,y:-6.2,alpha:1},0).to({x:132.6},206).wait(1));

	// 圖層 3
	this.instance_4 = new lib.c2("synched",0);
	this.instance_4.setTransform(-191.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-506.9},100).to({_off:true},1).wait(16).to({_off:false,x:476.5},0).to({x:438.6},16).to({x:-191.7},266).wait(1));

	// 圖層 1
	this.instance_5 = new lib.c1("synched",0);
	this.instance_5.setTransform(-326.6,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-485},76).to({_off:true},1).wait(78).to({_off:false,x:448.9},0).to({x:-326.6},244).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.1,-38.2,678.7,187.9);


(lib.雲動5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.btn03();
	this.instance.setTransform(105.5,173,0.659,0.659,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:157.9},14).to({y:173},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-64.8,298,175.4);


(lib.雲動3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.btn04();
	this.instance.setTransform(20.7,125.1,0.522,0.522,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:147.8},19).to({y:125.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-66.5,193.9,234.4);


(lib.雲動2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.btn01();
	this.instance.setTransform(-72.7,231.9,0.641,0.641,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:223},14).to({y:231.9},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,13.3,179.9,165.7);


(lib.雲動1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.btn02();
	this.instance.setTransform(151.9,125.9,0.653,0.653,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:135},11).to({y:125.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.1,-40,298,244.4);


(lib.學校動 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.學校();
	this.instance.setTransform(86,64.5,1,1,0,0,0,86,64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.1,129.2);


(lib.鍵盤 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AghAOQgPgFAAgHQAAgGAOgFQAOgHAUgBQATgBAPAFQAPAEAAAIQABAFgPAGQgOAGgVABIgGABQgPAAgMgEg");
	this.shape.setTransform(76.3,58.2,1.6,1.6,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgoAOQgRgGAAgIQAAgHARgGQARgGAXAAQAYAAAQAGQASAGgBAHQABAIgSAGQgQAGgYAAQgXAAgRgGg");
	this.shape_1.setTransform(209.6,35.1,1.371,1.407,0,-10.1,-10.5,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAB36B").s().p("AhgAgIAMgQQAIgMASgLQARgPAjgJQARgFATgBIAPAAIAWABIAeAEIgLAOIgNAMIgLAHIgSAMQgTALgWAGQgYAIgdAAQgWAAgYgGg");
	this.shape_2.setTransform(144.2,60.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3300").s().p("Ag0BUQgfgIgggRQgmgWgigdIgLgJQA2ABBzgRQBxgTBzgxQgOArgNAbIgYAjIgdgEIgXgBIgOAAQgUABgTAFQgjAJgPAPQgRANgJAMIgMAQIgHgCg");
	this.shape_3.setTransform(139,55.2);

	this.instance = new lib.鼠環保_眼();
	this.instance.setTransform(136.5,24.6,0.758,0.758,0,-7.7,172.3,40.3,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("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");
	this.shape_4.setTransform(143.5,49.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7B7B7").s().p("AuQDJQgKgKgCgeQgEgcABgNIP2iuQAHgDBFgNIGOhFQFKg6ARgGQAHAOANA/QADAPggAIQggAHhxASQhxARhwAWIl8A/QkKAtksA0QkrAzheATQhAANgYAAQgLAAgDgDg");
	this.shape_5.setTransform(143.8,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(143.5,49.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDDDD").s().p("AsrhiIDngnQBFgIGYhFICcgcQIpheAcgGQAQgEAZAbIABAAIDBEJQADAIAGAHQAQAaAXAdIAAACIABABQgRAGlKA6ImOBFQhFANgHADIv2CwQBQl0AahGgAlogZIj+AqIhbARIhXAPQg1DfANAKQANAKCXgcIAdgFQAsgJBHgMIAIgCIBtgUIBqgSIBkgRIBngSIBbgPIBkgRIBZgQIBBgMQAMgMglhVIgCgGIgag6Igfg5Qj4ApkTAxgAFVgPIAVAjIgXAEQgLADgYADQgZADgJAEQgCADABADIAcA3IAPgDQAKgCAWgDIA2gKIA5gJQAcgGALgBIBVgRQADgCgQgaQgSgagGgDIhVANIgbgigAKbjLIgLACIg2AKIgHABIgDABIgBAAQglAGgLADIgEABQgxAMgDAJQASAkAfAyQAQAaATAdIAYAlIAIAOQAAABAFAEQAFACAlgGQAmgGAZgFQAYgGAQgBQAQgCARgEIACgBIADAAQAUgDAjgHQAKgCgOgSIgKgNIgUgdIgFgJQgDgDgCgFIAAgBIgFgEQgFgJgGgJIgKgNIgBgCIgagkQgCgEgDgDIgCgBIgBgCIgGgHQgagigIAAQgGgBgHAAQgJAAgMACgAh9iqIjdAmIhWAPIkEAtIhSAOQgXBJALgDIBTgOIBYgQIBagQIBegRIAHgBIBZgPQAwgKAkgFIAEgBIBPgNIAGgBIAFgBIAwgIIAkgGIBOgOIBMgNIBCgLIgYgyQgKgOgMACIgcAFIgMACIgEAAIgGABQgjAGgcAHIgCABIgVAEIg3AKIgBAAIgiAGgAGoifIhAAMQgbAEg3AMIgwAJIgWAHIABAFIAJATIAAABIAJASIALAZQAJAYAHABQAGACBDgMIA3gKIAfgFQBdgOgDgJQgCgIgLgSIgOgZIgTgeQgGgKgOAAQgGAAgHACgAE8j3IhVAPIhOANIAOAeQAHAOAFAHQAIANAEgCQAHgDA+gMIAggFIAtgIIAJgCIBPgNQglg3gIgDg");
	this.shape_7.setTransform(142.8,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// 圖層 3
	this.instance_1 = new lib.鍵盤_手();
	this.instance_1.setTransform(52.5,55,0.998,0.998,0,-15.1,164.9,12.9,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12.8,regY:30,scaleX:1,scaleY:1,skewX:5.7,skewY:185.7,y:54.9},2).to({regX:12.9,regY:30.1,scaleX:1,scaleY:1,skewX:-15.1,skewY:164.9,y:55},2).wait(1));

	// 圖層 2
	this.instance_2 = new lib.鍵盤_手();
	this.instance_2.setTransform(220,30,1,1,0,0,0,12.9,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:13,scaleX:1,scaleY:1,rotation:-24.5,x:220.1},2).to({regX:12.9,scaleX:1,scaleY:1,rotation:0,x:220},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,254.6,91);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(65.5,68.3,1,1,0,0,0,65.5,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:68.4,scaleX:0.97,scaleY:0.97,x:62.5,y:68.7},10).to({regY:68.3,scaleX:1,scaleY:1,x:65.5,y:68.3},10).to({regY:68.4,scaleX:0.97,scaleY:0.97,x:62.5,y:68.7},10).to({regY:68.3,scaleX:1,scaleY:1,x:65.5,y:68.3,startPosition:9},9).to({regY:68.4,scaleX:0.97,scaleY:0.97,x:62.5,y:68.7},10).to({regY:68.3,scaleX:1,scaleY:1,x:65.5,y:68.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,1.2,130.9,135.5);


(lib.kilani_Book_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.kilani_Book_6("single",0);
	this.instance.setTransform(203,-71.9,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.kilani_Book_6("synched",0);
	this.instance_1.setTransform(203,-71.9,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(26));

	// Layer 1
	this.instance_2 = new lib.kilani_Book_5("synched",0,false);
	this.instance_2.setTransform(-74.9,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-70.6,129.5,142.2);


(lib.kilani_Book_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.kilani_Book_3("synched",0,false);
	this.instance.setTransform(65.2,39.6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(10));

	// Layer 1
	this.instance_1 = new lib.kilani_Book_1("synched",0,false);
	this.instance_1.setTransform(-60.1,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.2,-29.7,129.5,142.2);


(lib.物件_資訊安全與倫理 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC0000","#990000"],[0,1],-13.2,-55.6,33.5,25.3).s().p("Ak8BaQiBh/gHizQAugEAvgGQAFCTBpBnQBtBuCZAAQCbAABthuQA5g2AbhGQAtAUAvADQgiBchMBLQiJCJjBAAQjAAAiJiJg");
	this.shape.setTransform(115.2,95,0.823,0.823,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CC0000","#990000"],[0,1],-14.1,-32.9,32.6,48).s().p("AmOhaIAchRIMBEFIgcBSg");
	this.shape_1.setTransform(122.1,77.6,0.823,0.823,19.5);

	this.instance = new lib.Symbol3();
	this.instance.setTransform(122.8,63.9,0.699,0.699,28.6,0,0,61.2,70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CC0000","#990000"],[0,1],-14.6,-16.4,32.1,64.5).s().p("AFcEjQAOglAGgoIABgBQAEgeAAgfQAAiZhuhtQhthtiaAAQiZAAhuBtQguAugbA2IgBAEQgjBHAABXIAAAMQgvAGguAEIgBgWQAAhmAmhUIABgCQAihMBAhAQCJiJDAAAQDBAACICJQCKCJAAC/QAAAugIAqIgBADQgHAlgMAiQgvgEgsgTg");
	this.shape_2.setTransform(127,64.9,0.823,0.823,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CC0000","#990000"],[0,1],9.2,-48.1,13.4,44.6).s().p("AiIEUQirhZg6i3Qg3irBMihQAqASAtAQQhACDAtCNQAuCQCIBHQCHBHCSgvQBMgXA4gwQAfAlAnAZQhIBChmAgQhIAXhHAAQhpAAhng1g");
	this.shape_3.setTransform(112.7,92.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CC0000","#990000"],[0,1],2.5,-35.5,6.7,57.2).s().p("Ak1kFIA9g7IIuJGIg/A7g");
	this.shape_4.setTransform(119.4,80.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CC0000","#990000"],[0,1],-0.6,-28.5,3.6,64.2).s().p("ADdFWQAdgaAYghIABAAQARgZAPgbQBGiJguiQQgviSiIhHQiIhHiQAuQg/AUgwAkIgDACQhAAwgoBNIgFALQgtgQgqgSIAKgTQAuhbBJg6IACgBQBAg0BWgbQC1g6CrBZQCqBYA6C3QA7C1hZCrQgVAogaAiIgCACQgXAdgaAZQgngZgfglg");
	this.shape_5.setTransform(122.5,73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance,p:{regX:61.2,regY:70.1,scaleX:0.699,scaleY:0.699,rotation:28.6,x:122.8,y:63.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.instance,p:{regX:61.3,regY:70.5,scaleX:0.844,scaleY:0.844,rotation:36.6,x:122.5,y:64}},{t:this.shape_4},{t:this.shape_3}]},6).wait(10));

	// 圖層 2
	this.instance_1 = new lib.盾();
	this.instance_1.setTransform(31.5,72,1.622,1.622,-2.2,0,0,29.8,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.37,scaleY:1.37,rotation:7.5,y:72.1},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,9.3,193.7,118.5);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.win10wordpad();
	this.instance.setTransform(-14.4,12.1,0.141,0.141,-17.2);

	this.instance_1 = new lib.鍵盤("single",0);
	this.instance_1.setTransform(34.1,52.6,0.454,0.454,0,0,0,130.1,45.4);

	this.instance_2 = new lib.win10note();
	this.instance_2.setTransform(52.5,-9,0.138,0.138,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{rotation:22.7,x:52.5,y:-9}},{t:this.instance_1,p:{regX:130.1,regY:45.4,rotation:0,x:34.1,y:52.6}},{t:this.instance,p:{rotation:-17.2,x:-14.4,y:12.1}}]}).to({state:[{t:this.instance_2,p:{rotation:6.5,x:52.7,y:9.1}},{t:this.instance_1,p:{regX:130.2,regY:45.3,rotation:15.2,x:35,y:57.1}},{t:this.instance,p:{rotation:2.5,x:-5.5,y:-3.5}}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-9,114.8,82.3);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgBAeQgQgBgKgKQgKgKABgLQABgMALgIQAMgIAOABQAQACAKAJQAKAKgBALQgBANgMAHQgKAHgMAAIgDAAg");
	this.shape.setTransform(158.4,85.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSGcIAFjCIAWAAIgBDCgAgLBYIAHnzIAXACIgJHyg");
	this.shape_1.setTransform(158.4,68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#46B39E").s().p("AilHKIANubIE9AXIgeOMgAgeG5IAdAAIABjBIgYAAgAgjCwQgMAIgBANQgBANAKAJQALAKAPABQAOACALgIQANgIABgNQABgMgLgKQgKgKgNgBIgEAAQgOAAgKAGgAgXB1IAXABIAInxIgXgCg");
	this.shape_2.setTransform(159.6,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// 圖層 2
	this.instance = new lib.螢幕頭();
	this.instance.setTransform(74.3,63.8,0.999,0.999,-6.8,0,0,71.5,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:71.6,scaleX:1,scaleY:1,rotation:1.6},0).wait(4));

	// 圖層 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#017676").s().p("AlCg0IKRhdIAWCeIrJCFg");
	this.shape_3.setTransform(79.9,110.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-6.5,180.4,131.6);


(lib.時鐘 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 時針
	this.instance = new lib.時針();
	this.instance.setTransform(20.6,20.3,0.152,0.149,177.5,0,0,5.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:537.5},83).wait(1));

	// 分針
	this.instance_1 = new lib.分針();
	this.instance_1.setTransform(20.6,20.2,0.15,0.152,0,73.5,73,3.7,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},20).to({rotation:720},20).to({rotation:1080},21).to({rotation:1440},22).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993333").s().p("Ag8A9QgagZAAgkQAAgjAagZQAZgaAjAAQAjAAAaAaQAZAZAAAjQAAAkgZAZQgaAZgjABQgjgBgZgZg");
	this.shape.setTransform(20.7,20.3,0.152,0.149,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFCUQgCgFAAgHQgBgKACgFQADgFAEAAQADAAAEACQADACAAACIgBACIgCABIgCgBQgBgDgEAAQgBAAgBAEIgBAHQACgDACAAQAFAAACADQADAEAAAEQAAAGgCADQgCAFgGAAQgFgBgCgFgAABCGQgCAAAAAHQAAAIADgBQAEAAAAgHQAAgHgEAAIgBAAgAiRAaQgDgDAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAGAAgBgLQgDADgDAAQgJAAgBgMQAAgDADgEQACgEAGAAQAGAAADAFQACAEAAAFQAAAKgCAGQgCAGgHABIgGgCgAiPgBIgBADIABAEQABABAAABQAAAAABAAQAAABABAAQABAAAAAAQAFgBAAgGQAAgGgFAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABgACEARQgCgDgBgEQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAFAFgBQAFAAAAgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQADAAACgCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgHgEAAQgEABAAAEIAAACIgDABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAQAAgEADgDQADgCAEAAQAEgBADADQADADAAAEQAAAFgEADQACAAACADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAALgLABQgFAAgDgCgAgTh0IAAgdIgGAEIgBgBIgBgCIABgCIAHgFIACgBQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIABAhQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAgAgCh3QAAgEACgFIAHgKQADgCAAgDQAAgFgFAAQgDAAgBAGIAAACIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgFACgDQABgCAFAAQAEAAADACQADACAAAFQAAAEgCACIgHALIgFAFIAMAAQAAABABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAIgNAAQgCAAAAgEg");
	this.shape_1.setTransform(20,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgrDCQg1gMgrgnQg+g5gDhUQAEBQA7A3QA9A4BSgDQBUgCA5g8QArgtAKg5QADgTgBgTQAAgVgFgTQgMg4gugrQgegagigOIgMgFIANAFQAlAOAfAcQAlAiAQArQALAeABAiQABAggJAeQgNAsgjAkQgoAqg2APQgXAGgbAAIgKAAQgUAAgSgDgAhpB+QAtAgA7gCQBDgCAvgyQAwgygChBQgChEgzgvQgzgvhDACQgjABgeAOQAggPAngCQBDgCA0AvQAzAwACBFQACBDgwAzQgxAyhFACIgFAAQg5AAgtghg");
	this.shape_2.setTransform(20.6,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AiJCQQg7g3gEhPIgBgEQgChRA5g8QAcgcAigQQAkgRAsgBQAegBAeAIIAGABIANAFQAiAOAdAbQAuAqANA4QAEATABAWQABASgEATQgJA6grAsQg6A9hTACIgHAAQhOAAg6g2gAgDimQgnACgfAPQgbANgWAXQgwAzACBDQACBFAzAvIAOAMQAvAkA7gCQBGgCAxgzQAwgygChDQgChFgzgwQgyguhCAAIgEAAg");
	this.shape_3.setTransform(20.2,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhBCCIAAgBIAFgSIAAgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgEAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIAAACQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAgEIABgCIADgBIAIAAIADABQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABIgBACIgEAVIgCABQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgABAB+IgCgFQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAIAAABQABAEADAAQADAAAAgHQAAgGgDAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgCACIgCAAIgBgCIABgLQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAIgBQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgFAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAAEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIACAGQgBAEgBADQgCADgEAAIgGgCgAh1BRQgCgDgBgDIABgDIADgEQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgBgCQAAgEABgDQACgBAEgBQADABADABQACACAAAEIAAADIgDADQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABIABADQAAAFgCACQgDACgDAAQgEAAgCgCgAhvBGQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIAAADIABADIADACIACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgDQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAABgAhyA8QgBAAAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAAEAEAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgCIgBgCIgCgCQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABgACBBOIgBgDIgIABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgBIACgCIAEgMIADgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAABIABAQIAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAB6BIIAGAAIAAgPgAh/gsIgBgWQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAEgDIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABAZQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAgAhsgsQgEAAgCgFIgCgIIABgJQACgFAFAAQAFAAACAEQABADAAAGQABAGgCADQgCAFgEAAIgBAAgAhshEQgEAAAAALQAAADABACQABAFACgBQADAAABgEIAAgGIAAgFQgCgFgCAAIAAAAgABwg5QAAgDADgDIAFgHIACgFQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAIAAADIgCAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAgDACgBQADgCACAAQAEAAACABQACACAAADIgBAFIgGAJIgDADIAJAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgKAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAhOhiIgBgVIgDADIgCgBIAAgBIAAgCIAFgDIADgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIABAYQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAgAg8hiIAAgWIgEADIgBAAIgBgCIABgCIAFgDIACgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIABAZQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgABHhnQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgUIgEACIgBgBIAAgBIAAgCIAFgDIACgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIABAYQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_4.setTransform(19.5,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhiCGIgNgMQgzgvgDhGQgChCAxg0QAVgXAbgMQAegOAjgBQBDgCAzAvQAzAvACBEQACBBgwAyQgvAyhFACIgEAAQg3AAgrgegAgEB7QgCAEAAAKQAAAIACAEQADAGAEAAQAGAAACgEQADgDgBgHQABgEgDgEQgCgDgFAAQgEAAAAADIAAgHQAAgEADAAQADAAABADIADABIACgBIAAgCQAAgCgDgCQgDgCgDAAQgFAAgCAGgAg/BxIgBACIgEASIAAABQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIADgBIADgUIABgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgCgBIgJAAIgDABIgBACIABAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIADAAIABgBIABACgAA7B9IACAEIAFACQAEAAACgDQACgCAAgFIgBgGQgCgDgEAAQAAAAgBAAQgBAAAAAAQAAABgBAAQAAAAgBABIAAgFQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAFAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgIAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAABIgBAKIABACIACAAIABgCQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQADAAAAAHQABAGgEAAQgCAAgCgDIAAgBQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAABgAh5A8QgCACAAAEIABADQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIgCAEIgBADQAAAEACACQACACAFAAQADAAACgCQACgCAAgEIgBgEQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIADgDIABgDQAAgEgDgCQgCgBgDAAQgEAAgCACgAB9BRQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAIgBgQQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIgCADIgEAMIgCACIgBACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAIgBgAiSAWQAAADACACIAGACQAHgBADgGQACgFAAgKQgBgHgCgCQgCgGgHAAQgFABgCADQgDAEAAADQAAAMAKAAQADAAADgDQAAAMgFAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABgACDALQAAAEADADQADACAEAAQALAAAAgMQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgDgDgBQAFgCgBgFQAAgEgDgDQgCgDgFABQgEAAgDACQgCADAAAEQAAAAAAABQAAABAAAAQABAAAAABQABAAAAAAIADgBIAAgCQAAgEAEAAQAEAAABAGQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQgBABgEAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAQADAAACACQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAHgEAAQgFAAgBgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAiDgpQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIgBgZQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCABIgFAEIgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBgAh2g/IgBAJIABAJQACAEAFAAQAFABACgGQABgCAAgHQAAgGgCgCQgCgFgFAAQgEAAgCAFgAB2hHIgBAEIgGAHQgCAEgBADQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAKAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgIABIACgEIAGgJIACgFQAAgDgDgCQgBgBgEAAQgDAAgCACQgCACAAADQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAIACAAIABgCQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABgAhRhfQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIgBgYQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgCABIgFADIgBACIABABIABABIAEgDgAg/hfQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAIgBgYQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgCABIgFAEIgBABIABACIABAAIAEgCgABFhlIAAgYQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCABIgFADIgBACIAAABIACABIAEgCIAAAVQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAgAgRhzQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAQAAgBABAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgBghQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgDABIgHAFIgBACIABACIACABIAFgEgAALiOQAAADgCADIgIAKQgCAEABAFQAAADACAAIAMAAQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIgLAAIAEgGIAIgKQABgDAAgEQAAgEgDgDQgCgCgFAAQgEAAgCACQgCADAAAFQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIACgBIAAgCQACgFADAAQAEAAAAAEgAAACPQAAgIADAAQAEAAABAHQAAAIgFAAIAAAAQgDAAAAgHgAh2BRIgBgDIABgDQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDACIgDgCgAB2BLIAHgOIAAAOgAh3BBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIACACIACACIgBADQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgEAAAAgEgAiNAIIgBgFIABgDQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQAFAAAAAGQABAHgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgAhygwQgCgCABgEQAAgKADAAQADgBABAFIAAAFIABAHQgCAEgCAAIgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBg");
	this.shape_5.setTransform(19.9,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,40.5);


(lib.機器人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅暈();
	this.instance.setTransform(56.9,32.9,0.277,0.277,51.4,0,0,7.9,4);

	this.instance_1 = new lib.紅暈();
	this.instance_1.setTransform(42.1,14.3,0.277,0.277,51.4,0,0,8.3,4.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AoHBBQgbAAgUgTQgSgTgBgbQABgaASgTQAUgUAbABIQPAAQAbgBATAUQATATAAAaQAAAbgTATQgTATgbAAg");
	this.shape.setTransform(24.2,45.1,0.282,0.109,51.4,0,0,0.8,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgDAsIgGgBIABgDIAFABQAPACAOgKQALgKAEgOIACABQgDAPgMAKQgMAJgPAAIgEAAgAgCAjIgFgBIABgCIAEABQAMABAKgIQAJgIADgLIACABQgCALgKAIQgKAIgMAAIgCAAgAghgGQACgMAKgIQAMgKANACIAFABIAAACIgGgBQgLgCgLAJQgKAIgCALgAgqgIQADgQANgKQAPgMAQADIAGABIAAACIgHgBQgPgBgOALQgMAJgDAPg");
	this.shape_1.setTransform(7.8,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBMQgggEgUgZQgUgZAEgdQADggAZgUQAZgUAeAEQAgADAUAZQAUAZgEAeQgEAggZAUQgVARgaAAIgHgBgAgkguQgUAQgCAZQgDAWAPAUQAQAUAZACQAWADAUgPQATgQADgZQADgWgPgUQgQgUgZgCIgGgBQgUAAgQANg");
	this.shape_2.setTransform(7.7,43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgFA7QgZgCgQgUQgPgUADgWQACgZAUgQQATgPAXADQAZACAQAUQAPAUgDAWQgDAZgTAQQgRANgTAAIgGgBgAgIgyQgMACgLAJQgIAGgEAJQgFAJgCAKQgBAFABAEQABAPAKAMQAIAJAJAGQAIAEAKABQAHABAIgCQAMgDAJgHQAKgJAFgKQADgIABgIQABgGgBgHQgCgMgJgLQgHgJgIgEQgJgFgLgBIgFgBIgIABgAAAAVIgIgCQgEgCgEgEQgEgGAAgHIAAgDQAAgEADgEIAFgHQAFgDAEgCQADgBADABIAJADQAEACACAEQAEAEABAGIABAEIgDAIQgCAFgEADQgFAEgFABIgDAAIgCAAg");
	this.shape_3.setTransform(7.7,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAzQgKgBgIgEQgJgFgIgKQgKgMgBgPQgBgEABgEQACgLAFgJQAEgJAIgGQALgIAMgCQAHgCAGABQALABAJAFQAIAFAHAIQAJALACAMQABAIgBAFQgBAJgDAHQgFALgKAIQgJAIgMACIgKABIgFAAgAgDgWQgEABgFADIgFAHQgDAEAAAFIAAADQAAAGAEAGQAEAEAEACIAIACIAFAAQAFgBAFgEQAEgDACgFIADgHIgBgEQgBgGgEgFQgCgEgEgCIgJgDIgDAAIgDABg");
	this.shape_4.setTransform(7.7,43.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDAsIgGgBIABgDIAFABQAPACAOgKQALgKAEgOIACABQgDAPgMAKQgMAJgPAAIgEAAgAgCAjIgFgBIABgCIAEABQAMABAKgIQAJgIADgLIACABQgCALgKAIQgKAIgMAAIgCAAgAghgGQACgMAKgIQAMgKANACIAFABIAAACIgGgBQgLgCgLAJQgKAIgCALgAgqgIQADgQANgKQAPgMAQADIAGABIAAACIgHgBQgPgBgOALQgMAJgDAPg");
	this.shape_5.setTransform(22.1,61.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBMQgggEgUgZQgUgZAEgdQADggAZgUQAZgUAeAEQAgADAUAZQAUAZgEAeQgEAggZAUQgVARgaAAIgHgBgAgkguQgUAQgCAZQgDAWAPAUQAQAUAZACQAWADAUgPQATgQADgZQADgWgPgUQgQgUgZgCIgGgBQgUAAgQANg");
	this.shape_6.setTransform(22.1,61.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgFA7QgZgCgQgUQgPgUADgWQACgZAUgQQATgPAXADQAZACAQAUQAPAUgDAWQgDAZgTAQQgRANgTAAIgGgBgAgIgyQgMACgLAJQgIAGgEAJQgFAJgCAKQgBAFABAEQABAPAKAMQAIAJAJAGQAIAEAKABQAHABAIgCQAMgDAJgHQAKgJAFgKQADgIABgIQABgGgBgHQgCgMgJgLQgHgJgIgEQgJgFgLgBIgFgBIgIABgAAAAVIgIgCQgEgCgEgEQgEgGAAgHIAAgDQAAgEADgEIAFgHQAFgDAEgCQADgBADABIAJADQAEACACAEQAEAEABAGIABAEIgDAIQgCAFgEADQgFAEgFABIgDAAIgCAAg");
	this.shape_7.setTransform(22.1,61.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAzQgKgBgIgEQgJgFgIgKQgKgMgBgPQgBgEABgEQACgLAFgJQAEgJAIgGQALgIAMgCQAHgCAGABQALABAJAFQAIAFAHAIQAJALACAMQABAIgBAFQgBAJgDAHQgFALgKAIQgJAIgMACIgKABIgFAAgAgDgWQgEABgFADIgFAHQgDAEAAAEIAAAEQAAAGAEAGQAEAEAEACIAIACIAFAAQAFgBAFgEQAEgDACgFIADgHIgBgEQgBgGgEgFQgCgEgEgCIgJgDIgDAAIgDABg");
	this.shape_8.setTransform(22.1,61.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AgEAvIAAAAQgTgCgNgQQgMgPACgSQACgUAQgMQAPgMASACQAHAAAHAEQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAEIgDAEIgFAAQgFgCgFAAQgNgDgLAKQgMAJgCAPQgBAMAJALQAJAMAPACQAMABAMgJQALgJABgPQACgDgBgFQgBgDABgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQADABgBADQACAHgBAFQgCATgPANQgOALgQAAIgEgBgAgBAAQgCAAAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIAfgaQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIghAZIgEABIgCgDg");
	this.shape_9.setTransform(31.8,38.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AoHBBQgbAAgUgTQgSgTgBgbQABgaASgTQAUgUAbABIQPAAQAbgBATAUQATATAAAaQAAAbgTATQgTATgbAAg");
	this.shape_10.setTransform(24.8,44.4,0.3,0.3,51.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AiGBmQhPgygQhWIgDgTIHIhVQADAJACAJQAQBZg4BJQg3BLhfASQgZAEgVAAQhEAAg7glg");
	this.shape_11.setTransform(19.3,47.7,0.642,0.642,62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDDDD").s().p("AjkB5QgQhZA3hIQA4hMBfgRQBegSBOAyQBPAxARBXIADASInJBWIgEgSg");
	this.shape_12.setTransform(31.1,40.7,0.642,0.642,62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAAAfQgMgDgJgLQgJgLABgLQAAgNAJgIQAJgHALADQALACAIAJIADADQAJALAAALQAAANgKAIQgGAFgJAAIgGgBg");
	this.shape_13.setTransform(36.7,34.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660000").s().p("AALAwQgCAAgEgBQgCgSgMgRQgOgQgSgGIgCgBQgBgHABgEQADgPAIgGQADgDAFgBIABABIABAAQAIABADAGIAIAPIAEALIAQAQIACACIARAMQAHAFABAHIAAADQgCAHgFAEQgGAFgNAAIgHAAg");
	this.shape_14.setTransform(48.4,24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DD5C63").s().p("AAMAaQgMgEgJgLQgKgLgDgQIgCgMIADAAQARAGAMASQAPAPACASIgNgDg");
	this.shape_15.setTransform(46.5,26);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATABQATgBAPAOQAOAOgBATQABAUgOAOQgPAOgTAAQgTAAgOgOg");
	this.shape_16.setTransform(59.4,26.1,0.274,0.274,51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhOBPQggghAAguQAAgtAgghQAhghAtABQAugBAgAhQAhAhABAtQgBAughAhQggAgguAAQgtAAghggg");
	this.shape_17.setTransform(59.6,26.3,0.274,0.274,51.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgCAqQgSgCgMgPQgLgOACgQQACgRANgLQAOgLAPACQASADALAOQALAPgBAPQgCASgNALQgLAJgOAAIgEgBg");
	this.shape_18.setTransform(59.3,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATABQATgBAPAOQAOAOgBATQABAUgOAOQgPAOgTAAQgTAAgOgOg");
	this.shape_19.setTransform(48.9,13.2,0.274,0.274,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhOBPQggghAAguQAAgtAgghQAhghAtABQAugBAgAhQAhAhABAtQgBAughAhQggAgguAAQgtAAghggg");
	this.shape_20.setTransform(49.1,13.4,0.274,0.274,51.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgCAqQgSgCgMgPQgLgOACgQQACgRANgLQAOgLAPACQASADALAOQALAPgBAPQgCASgNALQgLAJgOAAIgEgBg");
	this.shape_21.setTransform(48.8,13.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmWE0QhlAAABhkIAAmfQgBhjBlgBIMtAAQBlABgBBjIAAGfQABBkhlAAg");
	this.shape_22.setTransform(51.1,21.9,0.285,0.287,51.4,0,0,-0.1,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AmWE0QhlAAABhkIAAmfQgBhjBlgBIMtAAQBlABgBBjIAAGfQABBkhlAAg");
	this.shape_23.setTransform(51.4,21.6,0.3,0.3,51.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9999").s().p("AAMC7QhJgXg4hGQg4hHgFhLQgGhOAygnQAwgnBLAWQBIAWA5BHQA4BHAGBLQAFBOgxAnQgfAZgpAAQgYAAgcgIg");
	this.shape_24.setTransform(51.5,22.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AidCYQhCg/AAhZQAAhYBCg/QBBg/BcAAQBdAABBA/QBBA/AABYQAABZhBA/QhBBAhdAAQhcAAhBhAg");
	this.shape_25.setTransform(36.8,6.8,0.175,0.166,0,51.4,-128.6,-0.5,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC00").s().p("AidCYQhCg/AAhZQAAhYBCg/QBBg/BcAAQBdAABBA/QBBA/AABYQAABZhBA/QhBBAhdAAQhcAAhBhAg");
	this.shape_26.setTransform(39.1,6.6,0.3,0.3,0,51.4,-128.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AidCYQhCg/AAhZQAAhYBCg/QBBg/BcAAQBdAABBA/QBBA/AABYQAABZhBA/QhBBAhdAAQhcAAhBhAg");
	this.shape_27.setTransform(63.1,39.6,0.175,0.166,51.4,0,0,-1,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("AidCYQhCg/AAhZQAAhYBCg/QBBg/BcAAQBdAABBA/QBBA/AABYQAABZhBA/QhBBAhdAAQhcAAhBhAg");
	this.shape_28.setTransform(63.7,37.6,0.3,0.3,51.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(6,1,1).p("AAAhWIAACu");
	this.shape_29.setTransform(38.1,33,0.3,0.3,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(10));

	// 圖層 2
	this.instance_2 = new lib.機器人手();
	this.instance_2.setTransform(39,48.9,0.998,0.998,133.6,0,0,11.4,26.7);

	this.instance_3 = new lib.機器人手();
	this.instance_3.setTransform(25.4,29.4,1,1,0,0,0,11.4,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:133.6}}]}).to({state:[{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:11.8}},{t:this.instance_2,p:{scaleX:0.996,scaleY:0.996,rotation:115.6}}]},5).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:133.6}}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,70.3,72);


(lib.進入鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s().p("AlgCUQAUgRAWgWIAAhjQAAgJgDAAQgEAAgUAMIgQgZQAqgZAKAAIADAAQAbAAAAAgIAABrIAgAIIAAiYIgHAJIgggYQAsg5Ajg5IAiAXIgOAVIArAAIAAglIAlAAIAAAlIBOAAIAAAkIhOAAIAAAcIBGAAIAAAjIhGAAIAAAcIBGAAIAAAiIhGAAIAAAdIBRAAIAAAkIi3AAIAAALIglAAIAvAJQBJAMBrADIgBAkQhRgChBgJQg0gGg/gQIgGgBQgFAAgiAkgAjJA/IBBAAIAAgdIhBAAgAjJAAIBBAAIAAgcIhBAAgAjJg/IBBAAIAAgcIhBAAgAC7g9QgUAugXAoQgjA+g5BPIghgfQA7hRAjg+QAZgvAWg0IgFgGQgCgFgFABQgLAAg/AkIgRgmQBKgqAQAAIAIAAQALAAALAHQASAOCfEXIgsAbQhVifgmhEgAk/g6QgHgIAAgKQAAgLAGgIQAJgIANgBQAKAAAJAHQAIAIAAANQAAANgKAIQgIAHgJAAQgMAAgJgKgAk/h6QgHgIAAgKQAAgLAGgHQAJgJANAAQAKAAAJAHQAIAIAAAMQAAANgKAIQgIAIgJgBQgMAAgJgKg");
	this.shape.setTransform(89.4,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Al6CfQAVgSAYgXIAAhrQgBgJgDAAQgEAAgWAMIgRgbQAtgbAMAAIACAAQAeAAgBAjIAABzIAjAIIAAikIgIALIgjgbQAwg9Amg9IAkAYIgPAXIAuAAIAAgoIApAAIAAAoIBTAAIAAAmIhTAAIAAAfIBKAAIAAAlIhKAAIAAAfIBKAAIAAAkIhKAAIAAAfIBXAAIAAAnIjGAAIAAAMIgoAAIA0AKQBOAMBzADIgCAnQhWgChGgJQg4gHhEgQIgHgCQgFAAglAngAjZBDIBGAAIAAgfIhGAAgAjZAAIBGAAIAAgfIhGAAgAjZhEIBGAAIAAgfIhGAAgADJhBQgVAwgZAsQglBCg+BWIgkgiQBBhXAkhDQAbgyAYg5IgFgGQgDgFgFAAQgMAAhDAnIgTgoQBQguARAAIAIAAQANAAALAIQAUAPCrEsIgwAeQhbisgphIgAlXg+QgIgJABgLQgBgMAHgIQAJgJAOAAQALAAAKAHQAIAIAAAOQAAANgKAJQgJAIgKAAQgNAAgJgKgAlXiDQgIgJABgKQgBgMAHgIQAJgKAOAAQALAAAKAHQAIAJAAAOQAAANgKAJQgJAIgKAAQgNAAgJgLg");
	this.shape_1.setTransform(89.4,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 圖層 1
	this.instance = new lib.黃鈕底();
	this.instance.setTransform(85.2,29,1,1,0,0,0,68.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:84.9,y:28.7},0).wait(1).to({scaleX:1,scaleY:1,x:85.2,y:29},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-1.7,145,66);


(lib.太陽出來 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// 圖層 1
	this.instance = new lib.sun();
	this.instance.setTransform(110.7,32.3,0.097,0.097,31.5,0,0,105,99.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:104.9,scaleX:0.67,scaleY:0.67,y:32.4,alpha:1},4).wait(1).to({regX:104.8,regY:99.8,scaleX:0.59,scaleY:0.59,x:110.6,y:32.3},0).wait(1).to({regX:104.9,regY:99.7,scaleX:0.67,scaleY:0.67,x:110.7,y:32.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.7,5.5,53.8,39.5);


(lib.小畫家LOGO = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("ABMgEQAJgBADgBQADgBAAgBQgBgBAAgPQAAgGgBgFIgBgBQgDgKgHgCQgHgEgIACQgQAEgGAUQAAACgBADQgBAHAAAJQADAAAIAAQABAFgJAbQgBAAgBAAQgNADgOgBQgMAAgKgBQgCgBgCAAQgEgBgCgBQgDgDgDgBQgGgEgGgCQgPgDgSAFQgCABgBABQgEACgDACQgFAEgEAEQgEAIALABQAMABAJgBQAJAAALAEQAFABAEABQARAFAPAAQALgBAJABIAaAAQADAAALgBQAKgBADgZQACgYABgEgAAygFQAGABAJAAQAGAAAFAA");
	this.shape.setTransform(51.3,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD1B5").s().p("AAcAcQgKgBgKABQgQAAgRgEIgJgDQgKgEgJAAIgVAAQgLgBAEgIQADgEAFgEIAHgCIAEgBQARgGAQADIALAGIAHACIAFACIAEABIAWABQAOABAOgCIACgBQAIgZgBgGIAQAAIAKAAIgDAcQgCAZgLABIgNABg");
	this.shape_1.setTransform(50.5,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFD89").s().p("AAAAXIgNgBIgMAAIACgQIABgFQAGgSAQgEQAGgCAHAEQAHACADAKIABABIABAJIAAAQQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgNACIgKAAg");
	this.shape_2.setTransform(57.8,36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AgIhsQgKgBgMAEQgCAAgCABQgFABgJADQgRAGgQgDQAHAKALABQACAAACABQgUAAgbAdQgYAbgIAeIAAAGQAEAAAsgRQAsgTAHAAQAPAAAHAMQAIANgIALQAOgGAFgPQAbAEgDAYQgEAagFAgQADABAHABQAIACABgBQABgNAHgSQAHgTATAFQALAEgBALQgBALgLAMQgMAMgEANQgEAOAPACQALACAMgDQAPgFAJgKQAIgJAGgLQABgCACgDQAGgNADgOQADgQAAgOQAAgMgDgPQgCgOgFgOQgFgMgJgJQgWgYgbgFQgbgGgLAFQgMgHgOgFQgEAAgGgBg");
	this.shape_3.setTransform(57.3,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#754D24").s().p("AA/BtQgPgCAEgOQAEgNAMgMQALgMABgLQABgLgLgEQgTgFgHATQgHASgBANIgJgBIgKgCIAJg6QADgYgbgEQgFAPgOAGQAIgLgIgNQgHgMgPAAQgHAAgsATQgsARgEAAIAAgGQAIgeAYgbQAbgdAUAAIgEgBQgLgBgHgKQAQADARgGIAOgEIAEgBQAMgEAKABIAKABQAOAFAMAHQALgFAbAGQAbAFAWAYQAJAJAFAMQAFAOACAOQADAPAAAMQAAAOgDAQQgDAOgGANIgDAFQgGALgIAJQgJAKgPAFQgIACgHAAIgIgBg");
	this.shape_4.setTransform(57.3,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAFAAACADQAEAEABADQgBAFgEADQgCAEgFgBQgDABgEgEg");
	this.shape_5.setTransform(47.9,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAEQgCgVAOgGQAJgHAJAbIAAANQgDAPgNABIAAAAQgNAAgBgWg");
	this.shape_6.setTransform(48.6,20.8,1,1,0,0,0,0.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AhGBbQAiAWAmABQAtABAkgZQARgNAKgRQAQgXgCgcQgIh9h8ADQgFABgGACQgaAHgUAQQgMAKgIALQgdAmABAtQAAAHABAHQgFACgDAEQgDAFAAADQAAAHAOAAQACAAABAAQAKAVAUAPQADACADABQAFABAJgEQAJgFAGgI");
	this.shape_7.setTransform(56.5,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDD1B5").s().p("AACByQgmgBgigWIAAAAIAAAAIABAAIABAAIAAAAIABAAIAHgCIAAAAIAEgBQAJgFAGgIQgGAIgJAFIgEABIAAAAIgHACIgBAAIAAAAIgBAAIgBAAIAAAAIAAAAQgDgBgDgCQgUgPgKgVIgDAAQgOAAAAgHQAAgDADgFQADgEAFgCQgBgHAAgHQgBgtAdgmQAIgLAMgKQAUgQAagHIALgDQB8gDAIB9QACAcgQAXQgKARgRANQgjAYgqAAIgEAAg");
	this.shape_8.setTransform(56.5,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AixhOQghAAgGAAQgFgBgCgDQgBgOAEgDQAEgDAAAAQADgDANAAQAGAAAHAAQAHABAIAAQA6ABBHABQACAAACAAIAKAAQABAAABAAQAYAAAcgBIAJAAQADAAADAAQAAAAABAAIAKAAQAUgBAWAAQBBgBBBgBIABAUQABAGgGABQgGAAgXABQABALgBAzQAAAYAAAWQAAAIAAAIIAAAEQAAATAAAKQAAASAAAFQgBAFgGAAQgIAAgFAAQgGgBACgXQABgYAAgGQAAgBAAgBQAAgKAAgLQAAg2gBg2QALAAAIAAQADAAACAAACmhOQgSAAgZAAIi+ABQgDAAgCAAQgxAAgggBAixhOQAKAAAOAAQABALgBAyQAAAYAAAXQAAAIAAAHIAAAEQAAAUAAAKQAAARAAAFQgBAFgHAAQgHAAgFAAQgGgBABgXQABgXAAgHQAAgBAAgBQAAgKAAgKQABg3gBg1g");
	this.shape_9.setTransform(29.4,55.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA6C11").s().p("ACqBrQgGgBACgXIABgeIAAgCIAAgVQAAg2gBg2IATAAIAFAAQABALgBAzIAAAuIAAAQIAAAEIAAAdIAAAXQgBAFgGAAIgNAAgAitBqQgGgBABgXIABgeIAAgCIAAgUQABg3gBg1IAYAAQABALgBAyIAAAvIAAAPIAAAEIAAAeIAAAWQgBAFgHAAIgMAAgAhIhNIhRgBIgYAAIgnAAQgFgBgCgDQgBgOAEgDIAEgDQADgDANAAIANAAIAPABICBACIAEAAIAKAAIACAAIA0gBIAJAAIAGAAIABAAIAKAAIAqgBICCgCIABAUQABAGgGABIgdABIgFAAIgTAAIgrAAIi+ABIgFAAgACmhOIAAAAg");
	this.shape_10.setTransform(29.4,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AgYgZQAIAAAGgBQAKgCAAgJQAAgKgSgDQgUgBgBAAQgJAAgJABQgDAAgCABQgDABgCACQgFAEAAAEQAAANAYAAQADAAADAAQAKAAAIAAgABGgIQALgDAHgXQABgDABgDQAAgHACgGQABgIACgHQAAgMABgNQABgKAAgKQAAgKgBgLQgBgKgGgHQgGgHgNACQgSACgHAXQgJAXgDAnQABAfAGAOQADAIAHAEQABABABAAQAAABAAABQABADAAAEQAAAFgBAEQgCAFgHAGQgDgCgHAAQgCgBgEAAIgKAAQgGAAgGAAQgBAAgCAAQgCAAgCAAQgLAAgNAAQAAAAgBAAQgBAUgHgCQgIgBABgQQg2ADAAAPQAAASAbAIQAPAFAcACQAIAAAHAAQABAAABAAIAFAAIAMgCIABAAQASgBANgEQAagHgGgRQAAgCAAgBAA0gLQAFADAGABQAEAAADgBQABAFAAAFQAAAOgLARQgFgMgMgDAA0CFQgEACgHAAQABAFAAAJQAAAGAGAAQAFAAAAgLIgBgLQAHgBABgGQAAgFgUABQgUAAgOgBQgBgWgEgFQgBgCgEAAIAAgZAAaCHQAHAAADAAQAEAAABAAAANCIQAAANACACQAAAFAHAAQAHAAgDgVAANCIQAHAAAGgBAgqgZQAAARAAAVQAAABAAACAgaBcIAAgZAgEBcQgDgBgGAAQgJAAgCABQgBAAgBAAQgEABAAADQgBAIgBASIglABQgQABAEAKQAAABAGABIgBALQAAAKAEAAQAIAAAAgJIgBgLAgvCJQgBADAAAHQAAAGABACQACACAFAAQAFgBAAgGQgBgHAAgGQAGAAAGAAQAYgBANAAAhLCIQAEAAAGABQAIAAAKAAQAFAAAGAAAARAPQgHgBgIABAgbAPQADgOAAga");
	this.shape_11.setTransform(59.5,49.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#20232D").s().p("AgjAKIgBgIIABgJIALAAIAAALQABAHgFABQgFAAgCgCgAhAABIABgJIAKABIABAKQAAAJgIAAQgEAAAAgLgAAaAFQgBgBAAgMIAMAAQADASgGAAQgHAAgBgFgAA2AEIgBgMQAGgBAFgCIABALQAAAKgGAAQgFAAAAgGg");
	this.shape_12.setTransform(58.3,64.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A5168").s().p("AgYAWIgLAAIgSAAIgKgBQgGAAAAgCQgEgJAQgBIAlgCIACgYQAAgDAEgBIACAAIALAAIAHAAQAFABACACQAEAEABAUIAiABQAUgBgBAGQAAAGgHAAQgEACgHABIgFgBIgKABIgNAAIglABIgMAAg");
	this.shape_13.setTransform(58.3,61);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747C9C").s().p("AgbA6IgKABIgCAAIAAgZIAOAAIACAAIAFAAIAAAZIgJgBgAgxABQgIgBACgPIgBgDIAAgoIATAAQAAAdgEAOQgBAQgGAAIgBAAgAAdgNQAHgGABgEQACgEABgIIgCgGIgBgDQAGADAHABIAFgBQACAFAAAHQAAAOgLAPQgFgKgMgDg");
	this.shape_14.setTransform(60.9,52.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C154A3").s().p("AgJBwIgCAAIgOAAQgdgBgPgFQgbgJAAgRQAAgQA3gDQgCARAIABQAHABABgTIACAAIAXgBIAFAAIABAAIANAAIAKABIAGAAIAKACQAMAEAFALIAAADQAGASgaAHQgNADgSACIgBAAIgMABgAAzAgIgBgBQgGgEgEgIQgGgNgBgdQADgoAJgWQAHgXASgDQANgCAGAHQAFAHACALIABAUIgBAVIgCAZIgBAOIgDALIgCAGQgHAXgMAEIgFAAQgHgBgGgDgAgwATQgYgBAAgMQAAgFAFgCIAGgDIAEgBIASgBIAVACQASACAAAIQAAAKgKABIgNABIgTABIgGAAg");
	this.shape_15.setTransform(59.5,45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AgxAzQAAhCAHgYQACgJAHgLQAcgcAgASQADACADACQAIAIACANQACATAAABQABACAAACQACAdACA+QgCACgDAAQgGACgFgBQhCACgRABg");
	this.shape_16.setTransform(58.7,39.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFD89").s().p("AgxAzQABhCAGgYQACgJAHgLQAcgcAgASIAGAEQAIAIACANIADAUIAAAEIAEBbIgEACQgHACgFgBIhTADg");
	this.shape_17.setTransform(58.7,39.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AgegUQgBAAgBABIgBAAQgCABgCADQgCAHgBAJQAAAKgDAZQgCAYAAAIQgBAEAAADQgJABgLAAQgKAAgCAAQgCgBAAgEQgBgggBgmQAAgEAAgFQgCgWALgSQAHgKAagHQAEgBADgBQAEgBAdgGQAAAAAAAAQAJgBAbAAQAbgBARABQAKAegSANQgTAMgfAAQgegBgNABAgegUQAEgBAFABQgFAAgCAAQgBAAgBAAg");
	this.shape_18.setTransform(55.2,54.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A5BF37").s().p("AhOBMQgCgBAAgEIgChGIAAgJQgCgWALgSQAHgKAagHIAHgCIAhgHIAAAAIAkgBIAsAAQAKAegSANQgTAMgfAAIgrAAIgJAAIgCABIgBAAQgCABgCADQgCAHgBAJIgDAjIgCAgIgBAHIgUABIgMAAg");
	this.shape_19.setTransform(55.2,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AABgOQgBADgOACQgRADgBAMQgBANAhAAQAhAAAAgQQAAgOgEgEQgEgDgIAAQgIAAgDABQgDABgCACg");
	this.shape_20.setTransform(47.5,63.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#754D24").s().p("AggAGQABgMARgDQAOgCABgDQACgCADgBQADgBAIAAQAIAAAEADQAEAEAAAOQAAAQghAAQghAAABgNg");
	this.shape_21.setTransform(47.5,63.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(102,51,0,0.502)").ss(0.1,1,1).p("AChCrIhxABIAAgNIBxgBgAhpgcQgIgXgMgkQgTg3gNgnQAQgHASgGQAIARAjBlQAjBkALAdQACAFABAEIAHASIgJAEIgBAAQgLAEgIAEIgIADIgIgSQgBgDgBgDQgBgCAAgCQgKgcgFgPQgFgLgDgLQgCgDgBgFQgEgJgDgNgAiAB3QAEgQAGgcQAJgmADgQQgNgHgBgSQAAgQAPgIAgxCHIAVAAIAAAzQABAIgJABQgJAAgfAAQgeAAgQAAQgQAAgLgBQgLAAAAgFQgBgDABgBQABgnAAgLIAKAAQAFgPAAgBIAQAAIAtAAIAfAAQACABAAAHQABAFAAADgAhXAYIgCAAQAFBFABAaAiVCHIBkAAAhZAYQgLAAgGgD");
	this.shape_22.setTransform(29.3,27.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BFBFBF").s().p("AASAdIgtAAIgagBQgLAAgBgEIAAgFIABgvIAKAAIBjAAIAVAAIAAAxQAAAIgIAAIgoAAg");
	this.shape_23.setTransform(19.8,44.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AAOAaQgLABgEgEQgNgHgBgSQAAgQAPgIIAFAXIADAIIAIAVg");
	this.shape_24.setTransform(18.8,27.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AAuCqIByAAIAAANIhyAAgAiXCTIAFgRIAQAAIAKgsIAMg2QAHAEALAAIAFBeIgtAAIAtAAIAfAAQACABABAHIAAAJgAhGBYIgCgGIgCgDIgPgrIgIgWIgDgKIgHgUIgTg8IghheIAigMQAIAQAkBmQAiBkAMAcIADAJIAHATIgKAEIAAAAIgUAHIgIADg");
	this.shape_25.setTransform(29.5,26.4);

	// 圖層 2
	this.instance = new lib.時鐘();
	this.instance.setTransform(-5,21.5,0.721,0.721,0,0,0,20.4,20.1);

	this.addChild(this.instance,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.7,6.2,92,60.7);


(lib.翻書本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#651F01").ss(1,1,1).p("ABagcQgtgWgtAEQgsgEgtAYQgnATgBAOQgBAWAEALQAEAJAGgCQA8glA4AAQA7AAA6AkQAGABAEgHQAFgMgCgWQgBgPgngTg");
	this.shape.setTransform(140.5,160,0.639,0.794);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B0703").s().p("Ah+AoQgEgLABgWQABgOAngTQAtgYAsAEQAtgEAtAWQAnATABAPQACAWgFAMQgEAHgGgBQg6gkg7AAQg4AAg8AlIgCAAQgEAAgEgHg");
	this.shape_1.setTransform(140.5,160,0.639,0.794);

	this.instance = new lib.kilani_Book_4("synched",0);
	this.instance.setTransform(98.3,100.4,0.639,0.794,0,0,0,-61.5,41.4);

	this.instance_1 = new lib.kilani_Book_7("synched",0);
	this.instance_1.setTransform(94.6,99.2,0.639,0.794,0,0,0,-5.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF8A77").ss(1,1,1).p("ADRoEQkzhOk0BOIAAQwQGuhOF/A7g");
	this.shape_2.setTransform(179.7,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmWoEQE0hOEzBOIDGQdQl/g7muBOg");
	this.shape_3.setTransform(179.7,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#651F01").ss(0.8,1,1).p("AmVIGQGRg+GaBSIAAw0IpqAAQiJIRg4IPg");
	this.shape_4.setTransform(98.2,103.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmVIHQA4oQCJoRIJqAAIAAQ1QmahTmRA/g");
	this.shape_5.setTransform(98.2,103.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#651F01").ss(0.8,1,1).p("AmfIaIM/AAIAAwzIp3AAQiPIZg5Iag");
	this.shape_6.setTransform(96.8,103.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmfIaQA5oaCPoZIJ3AAIAAQzg");
	this.shape_7.setTransform(96.8,103.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#651F01").ss(0.8,1,1).p("AlbgPQg1ETgaEWINVAAIAAwzIqIAAQhLEFgzEFg");
	this.shape_8.setTransform(95.6,105.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmqIaQAakWA2kTQAykFBLkFIKIAAIAAQzg");
	this.shape_9.setTransform(95.6,105.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#651F01").ss(0.8,1,1).p("AGIISQmIhSmHBaIAAw0IJRAAQB6IMBEIgg");
	this.shape_10.setTransform(178.5,103.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmHoaIJRAAQB6IMBEIgQmIhSmHBbg");
	this.shape_11.setTransform(178.5,103.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#651F01").ss(0.8,1,1).p("AGSIaIsjAAIAAwzIJiAAQB/IVBCIeg");
	this.shape_12.setTransform(179.4,103.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmRIaIAAwzIJiAAQB/IVBCIeg");
	this.shape_13.setTransform(179.4,103.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#651F01").ss(0.8,1,1).p("AGhIaItBAAIAAwzIJ5AAQCQIPA4Ikg");
	this.shape_14.setTransform(180.5,105.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmgIaIAAwzIJ5AAQCQIPA4Ikg");
	this.shape_15.setTransform(180.5,105.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#330000","#660000","#CC3300"],[0.008,0.365,0.839],-1.5,15.8,2.3,-15).s().p("AmTgGIgRhlQA1gCAOgLQAJgGgCgHQAKgEEtAAQFCgBCGAOIgqEGg");
	this.shape_16.setTransform(183.3,184.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#330000","#660000","#CC3300"],[0.008,0.365,0.839],1.6,16.2,-1.5,-16.1).s().p("AnIh/IFfgDQHZgEAFACIAEAJQADAJAEAEIACACQANALAMADQAJACAfgBIAGAAIgQBiItqCAg");
	this.shape_17.setTransform(94.5,183.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#930026","#980425","#A51121","#BB261B","#DA4413","#F9620A"],[0,0.184,0.388,0.6,0.82,1],0.5,169,-1,-72.3).s().p("AgPJYQgNgCgNgMIgBgBQgEgFgEgIIgEgJQgEgDnbAEIlfADIgDAAIAAgBIACgJQAdi5AojnIAHgiQBQm+A/jqQAQAABCgJQBRgLA8gFQDWgODHA1IBqgDQCKgeCWgEQAxgBAzABQAkACDCARQA8DXBCG+QAZCiAnE8IAEAXIgHgBQiHgOlDABQktAAgKAEQACAHgJAGQgPALg0ACIgKAAIgFAAIgSABQgOAAgGgCg");
	this.shape_18.setTransform(137.4,113.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(134,134,134,0.361)").s().p("AgaLaQgXgDgYgQIAAgBQgKgHgIgPIAAAAQgEgFAAgGIggAAIj2ABQlOAEqqAJQgGAAgEgFQgFgEAAgGIAAgBIAAgDQAujhBCkaQCEozBmkiQACgEAEgDQAEgDAFAAQAXABBogLQB/gOBdgFQFRgRE5BAICkgFQEhguFAAHIABAAQA4ABEwAVQAEAAAEADQAEACABAEQBeECBpIVQAnDHBCGNQABAFgCAEQgCAEgEADQgFACgEAAQjQgSoGABQmcAAg9ADQgFAJgNAHQgbAPhtACIgbABQgZAAgKgCgAh/KgIAnAAQgDAHAEAHQAHAOAKAGIAAAAQAWAQAXADQANACAwgBQBrgCAbgOIAAgBQANgHADgIQA3gEGmAAQIGgBDQASQADAAADgCQADgBABgDQABgDAAgDQhCmNgnjHQhooVhekBQgCgDgCgBQgCgCgDAAQkxgVg4gBQlAgHkgAuIimAFQk4hAlRARQhdAFh+AOQhoALgYgBQgEAAgCACQgDACgBADQhmEhiEIzQhCEaguDhIAAACIAAABQAAAEADADQADADAEAAQKqgKFOgDIDzgBIADAAg");
	this.shape_19.setTransform(135.3,112.5,0.63,0.783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(134,134,134,0.18)").s().p("AgbLfQgYgDgZgRIAAgBQgLgHgJgRIAAABQgCgFgBgEIgcAAIj3ABQlNADqqAKQgIAAgGgGQgGgGAAgIIAAgBIAAgEQAujhBCkaQCEo0BnkiQACgGAFgDQAGgEAGAAQAYABBmgLQCAgOBcgFQFSgRE5BAICjgFQEhguFBAHQA5ABEwAVQAGAAAFAEQAFADACAGQBeEBBpIWQAnDHBCGNQABAHgDAFQgDAGgFADQgGADgGAAQjQgSoGABQmUAAhBADQgGAIgNAHIAAAAQgbAQhvACIgcABQgZAAgKgCgAhJLGIAAABQAYAQAXADQAOACAwgBQBtgCAbgPQANgHAEgJQA+gDGbAAQIHgBDQASQAEAAAEgCQAFgDABgEQADgEgBgFQhCmNgnjHQhpoVhekCQgBgEgEgCQgEgDgEAAQkwgVg5gBIAAAAQlAgHkhAuIikAFQk5hAlRARQhdAFh/AOQhoALgXgBQgFAAgEADQgEADgCAEQhmEiiEIzQhCEaguDhIAAADIAAABQAAAGAEAEQAFAFAGAAQKqgKFNgDID3gBIAgAAQAAAGAEAFIAAAAQAIAPAKAHg");
	this.shape_20.setTransform(135.3,112.5,0.63,0.783);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(134,134,134,0.541)").s().p("AgZLVQgXgDgWgQIAAAAQgKgGgHgOQgEgHADgHIgnAAIj2ABQlOADqqAKQgEAAgDgDQgDgDAAgEIAAgBIAAgCQAujhBCkaQCEozBmkhQABgDADgCQADgCADAAQAYABBogLQB+gOBdgFQFRgRE4BAICmgFQEgguFAAHQA4ABExAVQADAAACACQACABACADQBeEBBoIVQAnDHBCGNQAAADgBADQgBADgDABQgDACgDAAQjQgSoGABQmmAAg3AEQgDAIgNAHIAAABQgbAOhrACIgeABQgWAAgJgCgAhDK+IAAAAQAVAPAVADQAOACAvgBQBpgCAagOQAOgHAAgJQAsgEG2AAQIGgBDRASIADgBIACgCIAAgDQhCmNgnjHQhooUhekBIgCgCIgDgBQkwgVg4gBIAAAAQlAgHkhAuIikAFQk5hAlRARQhcAFh/AOQhpALgXgBIgDABIgCACQhmEiiEIyQhCEaguDhIAAABIAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQKqgKFOgDID2gBIAxAAQgKAHAGAKIAAgBQAGANAJAGg");
	this.shape_21.setTransform(135.3,112.5,0.63,0.783);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,134,134,0.722)").s().p("AgZLQQgVgDgVgPIgBAAQgIgGgHgNIAAABQgFgKAKgHIgxAAIj3ABQlNADqqAKQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgBIAAgBQAujhBCkaQCEoyBmkiIACgCIACgBQAYABBpgLQB/gOBcgFQFRgRE4BAIClgFQEhguFAAHIAAAAQA4ABEwAVIADABIACACQBeEBBoIUQAnDHBCGNIgBADIgCACIgDABQjQgSoHABQm1AAgsAEQgBAJgNAHQgaAOhpACIgdABQgXAAgJgCg");
	this.shape_22.setTransform(135.3,112.5,0.63,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,43.7,179.7,155.2);


(lib.書本漂浮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.翻書本();
	this.instance.setTransform(120.8,19.3,1.326,0.339,0,0,0,137.5,101.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},7).to({y:19.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,238.4,52.3);


(lib.女學生1 = function() {
	this.initialize();

	// 圖層 4
	this.instance = new lib.物件_資訊安全與倫理();
	this.instance.setTransform(51.1,144.8,0.584,0.584,0,0,0,85.4,65.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,111.8,113.2,69.3);


(lib.地球動 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.資料夾();
	this.instance.setTransform(364,299.8,0.524,0.517,0,98.3,108.3,9.2,46.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-9.3,20.3,8.5,-22.3).s().p("AhAhPICWhwIgXD9IiUCCg");
	this.shape.setTransform(366.6,307.4);

	this.instance_1 = new lib.電腦();
	this.instance_1.setTransform(411.1,279.2,0.88,0.88,94.3,0,0,80.5,42.5);

	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(41.2,42.6,1.308,1.308,-35.9,0,0,40.4,38.6);

	this.instance_3 = new lib.女學生1();
	this.instance_3.setTransform(312.4,397,1.273,1.273,146,0,0,53.6,145.5);

	this.instance_4 = new lib.小畫家LOGO();
	this.instance_4.setTransform(426.9,151.8,1.374,1.374,77,0,0,36,36.1);

	this.instance_5 = new lib.機器人();
	this.instance_5.setTransform(104.8,432.9,1.356,1.356,149.4,0,0,35.1,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCE4DC").s().p("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");
	this.shape_1.setTransform(-2.6,217.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#017676").s().p("AgTIRIAChNIADhlIAChaQgBgiACgsIACgnIAAhgQADkiACgZIADhsIABibIAUACQgCA6gDB/IgECdIAABBQgCAlABARIgBAhQgBAGABAEQABAEgBAHQgBATABAvIgEDLIgDDLIAABIg");
	this.shape_2.setTransform(7.4,217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46B39E").s().p("ABAINIgdgZIg5gwQgKgHgngkIgLgLIgHgHQAChiAFhkIAFiHIAChAIABh3IADh/IAAg3IAChGIAggcQAYgYAjgiQAmgiAdggIgCCbIgCBrQgCAagEEhIAABgIgCAoQgBAsABAhIgDBaIgDBlIgCBOIgFgFg");
	this.shape_3.setTransform(-1.6,216.9);

	this.instance_6 = new lib.滑鼠();
	this.instance_6.setTransform(8.3,146.7,0.7,0.7,-56.5,0,0,33.8,23.4);

	this.instance_7 = new lib.元件1();
	this.instance_7.setTransform(-38.4,213.7,0.707,0.626,-82.1,0,0,82,79.3);

	this.instance_8 = new lib.地球();
	this.instance_8.setTransform(195.3,195.2,1,1,0,0,0,195.3,195.2);

	this.instance_9 = new lib.城市();
	this.instance_9.setTransform(320.4,34,0.516,0.516,9.5,0,0,104.6,80.5);
	this.instance_9.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, -43, 43, 115, 0)];
	this.instance_9.cache(-2,-2,213,165);

	this.instance_10 = new lib.城市複製();
	this.instance_10.setTransform(218.3,422,0.577,0.577,145.7,0,0,104.8,80.8);
	this.instance_10.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, -43, 43, 115, 0)];
	this.instance_10.cache(55,-2,156,165);

	this.instance_11 = new lib.城市();
	this.instance_11.setTransform(40,345.8,0.493,0.493,-167.3,0,0,104.7,81);
	this.instance_11.filters = [new cjs.ColorFilter(0.84, 0.84, 0.84, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-2,-2,213,165);

	this.instance_12 = new lib.學校動();
	this.instance_12.setTransform(195.6,-30.1,0.888,1,0,0,0,86,64.5);
	this.instance_12.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 23, 0))];
	this.instance_12.cache(-2,-2,176,133);

	this.instance_13 = new lib._101();
	this.instance_13.setTransform(344.5,97.1,0.292,0.19,0,37,38.2,57.4,837);
	this.instance_13.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 36, 0))];
	this.instance_13.cache(-2,-2,230,811);

	this.addChild(this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.shape_3,this.shape_2,this.shape_1,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.4,-94.6,567,589.1);


(lib.地球合圖 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.書名();
	this.instance.setTransform(308.5,203.8,1.195,1.195,0,0,0,258.1,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282));

	// 圖層 1
	this.instance_1 = new lib.地球動();
	this.instance_1.setTransform(315.1,292,1,1,0,0,0,195.3,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-360},281).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.3,2.2,567,589.1);


(lib.書本秀地球 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("../html/lesson1.html", "_self");
		}
	}
	this.frame_29 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// 圖層 3
	this.button_1 = new lib.進入鈕();
	this.button_1.setTransform(321.7,394.1,1,1,0,0,0,89.8,32.1);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(30));

	// 圖層 9
	this.instance = new lib.雲動5();
	this.instance.setTransform(682.9,360.6,0.101,0.101,0,0,0,111,158.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({regX:110.9,regY:158.6,scaleX:0.82,scaleY:0.82,x:683,alpha:1},3).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(3));

	// 圖層 8
	this.instance_1 = new lib.雲動2();
	this.instance_1.setTransform(-47.2,372.5,0.191,0.191,0,0,0,-62,219.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regY:219.1,scaleX:0.91,scaleY:0.91,x:-47.1,alpha:1},3).wait(1).to({regX:-62.1,scaleX:0.81,scaleY:0.81,x:-47.2},0).wait(7));

	// 圖層 7
	this.instance_2 = new lib.雲動3();
	this.instance_2.setTransform(567.8,529.7,0.123,0.123,0,0,0,23.9,122.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regX:24.1,regY:122.2,scaleX:1.12,scaleY:1.12,y:529.6,alpha:1},3).wait(1).to({regX:24.2,regY:122.3,scaleX:1.01,scaleY:1.01,x:567.9,y:529.7},0).wait(11));

	// 圖層 5
	this.instance_3 = new lib.雲動1();
	this.instance_3.setTransform(88.4,536.5,0.13,0.13,0,0,0,160,118.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({regX:160.1,regY:118.6,scaleX:0.91,scaleY:0.91,x:88.5,y:536.6,alpha:1},4).wait(1).to({regX:160,scaleX:0.82,scaleY:0.82,x:88.4},0).wait(8));

	// 圖層 4
	this.instance_4 = new lib.太陽出來();
	this.instance_4.setTransform(-98.1,166.3,0.833,0.833,0,0,0,113.3,111.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(18));

	// 圖層 2
	this.instance_5 = new lib.地球合圖();
	this.instance_5.setTransform(312,568.7,0.067,0.067,0,0,0,307.4,243.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:307.1,regY:243.6,scaleX:0.83,scaleY:0.83,x:310,y:248.4,alpha:1},12).wait(18));

	// 圖層 1
	this.instance_6 = new lib.書本漂浮();
	this.instance_6.setTransform(316.9,549.6,0.675,0.675,0,0,0,119.1,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(236.5,357.7,161,234.2);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.eduweb.com.tw", "_blank");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.rock-jj.com.tw", "_blank");
		}
		playSound("Splashing_Around",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層 1
	this.button_3 = new lib.rocklogo();
	this.button_3.setTransform(1066.7,48.1,1,1,0,0,0,77.3,31.4);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.rocklogo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(1));

	// main
	this.instance = new lib.書本秀地球();
	this.instance.setTransform(613,331.7,1.237,1.237,0,0,0,307.1,269.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.button_2 = new lib.校園LOGO();
	this.button_2.setTransform(1186.9,49.2,0.21,0.205,0,0,0,157.9,158.1);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1));

	// 圖層 7
	this.instance_1 = new lib.城市剪影("single",0);
	this.instance_1.setTransform(625.5,792.2,1.198,1.111,0,0,0,527.5,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 圖層 10
	this.instance_2 = new lib.雲飄();
	this.instance_2.setTransform(860.8,133.5,2.186,2.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.102)").s().p("AvlI+QmqgIpIgbUgIfgAagzVgJWMAmtgBXIFZAvQJZBTJVBKQK0BQMXgBQClgCClgGQMegbJrg0QJsgzHthMIBPgMIDWggQPAiaPFiDQIghMIjhDIAAEdQoIBZoKBdIv7CyIyRDRIlQA6QpDBkpGA9QrRBKrRACQiuACicAAQizAAicgCg");
	this.shape.setTransform(699.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.153)").s().p("EA3LALaQrTgCrQhKQpGg9pDhjIlRg8IyPjQIv7i0QpRhnpRhmQpEhipGhWIw6ihIyXiuIljg1QJhAWJgAiQH4AdH3AsQH1AqHyA6QN/BlN8B9QPDCDPACXIDVAhIBQAMQHsBMJsA1QJrA1MhAaQCkAFClADQMXABK0hRQJWhLJXhSIFagvIAAJgQsoBOofAaQpIAbmqAHQikADi+AAIk3gCg");
	this.shape_1.setTransform(627.2,95.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.102)").s().p("EhroAH9QdmAdORhXQOQhZPjitQJVhMJYhTQJYhRK6hnQK9hpGBhcQGChcFxhmQFxhmMyg+QMxg/L+AqQL9AqDoAVQDpATDFAYQDFAYFMBuIAAP6IiZgPQo0g1lAgbQzohssKAAQxVAAypBQQsfA1zKB6Qt5BXpIAdQpHAbmrAIQmqAGviAKIhNABQvOAA2Qjvg");
	this.shape_2.setTransform(623,735.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.153)").s().p("EhR2ALeQqMgKq0ipIAAl1QEBAvK4AcQUdA3Q8h0QKIhMKKhSQKJhRL4hoQL0hoGihcQGhhdGQhmQGPhlN3g+QN2hAM9AqQM9ArD8AUQD8ATDVAYQDWAYFoBuIAAP7IimgPQpjg2lbgbQ1QhrtMAAQywAA0NBPQtgA20zB5QvCBYp5AcQp4AbnOAIQi5ADjYAAQlDAAmIgHg");
	this.shape_3.setTransform(624.1,389.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.102)").s().p("EhnHgPrQGVhLD5gOQCdgKEIAAIJ4AAQTzAAT7DGQH7BOJgB9IG/BdQGOBTLjDYQLlDXJ7CpQJ7CqJ5CcQDXAwDgAjQNwCGP7hZQKng8JOikIjBDdQ6NF60SBxQzZBsvXhvQ/XjlqwiEQqxiEwDADQwDADsuDKQsuDJlNBQQlMBPhMAOg");
	this.shape_4.setTransform(632.1,197.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AAAgMIABAXIgBACg");
	this.shape_5.setTransform(1263,284.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.153)").s().p("EhlQAVrIAC6SIEOAcQShB1dIkiQdIkiSDjjQEDg0JliCQH4hsEfgzQNjicNDAAQT/AAVqFNQEgBFEvBXIAAMQQqViEqjgzQ39h43QGcQz7Fg1FGmQ1IGm4ADTQttB4tzAAQqYAAqchEg");
	this.shape_6.setTransform(615,614.9,1,1,0,0,0,0,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A4E2FD").s().p("EhisBBFMAAAiCJMDFaAAAMAAACCJg");
	this.shape_7.setTransform(635.9,-9.2,1,1,0,0,0,5.6,-416.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(559.1,346.5,1555.6,930.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
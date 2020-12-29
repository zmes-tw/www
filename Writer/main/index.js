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
		{src:"images/document_sspng.png", id:"document_sspng"},
		{src:"images/photossspng.png", id:"photossspng"},
		{src:"images/pp30.jpg", id:"pp30"},
		{src:"images/pp31.jpg", id:"pp31"},
		{src:"images/pp32.jpg", id:"pp32"},
		{src:"images/pp33.jpg", id:"pp33"},
		{src:"images/Print_0.png", id:"Print_0"},
		{src:"images/SA30bn.png", id:"SA30bn"},
		{src:"images/SA30pp1.png", id:"SA30pp1"},
		{src:"images/wordoo.png", id:"wordoo"},
		{src:"images/writer_LOGO555.png", id:"writer_LOGO555"},
		{src:"sounds/Splashing_Around.mp3", id:"Splashing_Around"}
	]
};



// symbols:



(lib.book_dvd = function() {
	this.initialize(img.book_dvd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,141);


(lib.document_sspng = function() {
	this.initialize(img.document_sspng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.photossspng = function() {
	this.initialize(img.photossspng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.pp30 = function() {
	this.initialize(img.pp30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,380);


(lib.pp31 = function() {
	this.initialize(img.pp31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,477);


(lib.pp32 = function() {
	this.initialize(img.pp32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,269);


(lib.pp33 = function() {
	this.initialize(img.pp33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,457,327);


(lib.Print_0 = function() {
	this.initialize(img.Print_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.SA30bn = function() {
	this.initialize(img.SA30bn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,361);


(lib.SA30pp1 = function() {
	this.initialize(img.SA30pp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,611);


(lib.wordoo = function() {
	this.initialize(img.wordoo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.writer_LOGO555 = function() {
	this.initialize(img.writer_LOGO555);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,666);


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


(lib.電腦打字手3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#74728A").ss(3,1,1).p("AEUh1QgZgXgxhLQgzhNgDgEQg2g9gtgXQgugYhKABQhMAChBBTQhABTACCQQACCOAsC0QAtC0BrgHQANgBAMgCQBygWgNh7QgFg1gMg2QgHgigHghQgNg0gDgeQgDgtAJgsQAHgWAMgVQAGgJAGgK");
	this.shape.setTransform(119,109.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F1F1").s().p("AjkDnQgsi0gCiOQgDiQBBhTQBBhTBMgCQBKgBAuAYQAtAXA2A9QADAEAzBNQAxBLAZAXQglAKhxAJIh1AJQAHgWAMgVIAMgTIgMATQgMAVgHAWQgJAsADAtQADAeANA0IAOBDQAMA2AFA1QANB7hyAWIgZADIgIAAQhlAAgritg");
	this.shape_1.setTransform(119,109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#74728A").ss(3,1,1).p("AETiKQgagWg2hIQg3hJgEgEQg5g6gugUQgtgVhMAGQhMAGg8BYQg7BWALCQQALCOA4CwQA3CxBqgOQAOgCALgCQBwgdgUh6QgIg1gPg1QgKghgJghQgPgzgFgeQgHgsAGgtQAHgXAKgVQAGgKAFgJ");
	this.shape_2.setTransform(119.1,113.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F1F1").s().p("AjNDwQg4iwgLiOQgLiQA7hWQA8hYBMgGQBMgGAtAVQAuAUA5A6IA7BNQA2BIAaAWQgkAMhwAQIh1AQQAHgXAKgVIALgTIgLATQgKAVgHAXQgGAtAHAsQAFAeAPAzIATBCQAPA1AIA1QAUB6hwAdIgZAEIgPABQhfAAgzikg");
	this.shape_3.setTransform(119.1,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(6));

	// 圖層 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#74728A").ss(3,1,1).p("AAdmGQhggDg2BOQhbCDAIChQABAOABANQAKBVAsBcQBFCOAiAkQAjAjAugDQAwgEAegUQAfgVAGgrQAHgqgohtQgphsAAgdQAAg2AUgjQANgVAfgbQAhgbALgTQAUghAAg2QAAgbgGgRQgEgKgIgLQhFhGhZAAg");
	this.shape_4.setTransform(81.8,111.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F1F1").s().p("AgtFnQgigkhFiOQgshcgKhVIgCgbQgIihBbiDQA2hOBgADQBZAABFBGQAIALAEAKQAGARAAAbQAAA2gUAhQgLATghAbQgfAbgNAVQgUAjAAA2QAAAdApBsQAoBtgHAqQgGArgfAVQgeAUgwAEIgIAAQgpAAggggg");
	this.shape_5.setTransform(81.8,111.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#74728A").ss(3,1,1).p("ABJl+QhegUhDBCQhxBygUCfQgBAOgCAPQgGBTAdBjQAqCYAcApQAbAoAwAGQAwAFAggPQAhgQAOgoQAPgogVhyQgVhyAFgdQAKg1AagfQAPgTAkgUQAlgVAPgRQAZgdAJg1QAFgbgDgSQgCgKgGgMQg4hRhXgPg");
	this.shape_6.setTransform(82.9,120.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F1F1").s().p("Ag4GDQgwgGgbgoQgcgpgqiYQgdhjAGhTIADgdQAUifBxhyQBDhCBeAUQBXAPA4BRQAGAMACAKQADASgFAbQgJA1gZAdQgPARglAVQgkAUgPATQgaAfgKA1QgFAdAVByQAVBygPAoQgOAoghAQQgYALggAAIgYgBg");
	this.shape_7.setTransform(82.9,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},7).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(11));

	// 圖層 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#74728A").ss(3,1,1).p("AiyjeQgpB/AsB7QAFAPAGAPQABADABADQAfBYBBB1QAOAeAUAXQA0A9BOgGQALgDAKgDQACgBACAAQAMgEALgEQAYgOAKgWQAFgMACgNQAHg2gzhmQgzhmgOhPQgOhSAzgcQAzgcALgMQAVgWAAgmQAAgdgVgjQgLgTgMgKQgKgFgJgFQg7gbg8AAQgNAAgJABQhIAJg1A9QgeAjgRAwg");
	this.shape_8.setTransform(53.2,118.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F1F1").s().p("AggFCQgUgXgOgeQhBh1gfhYIgCgGIgLgeQgsh7Aph/QARgwAegjQA1g9BIgJQAJgBANAAQA8AAA7AbIATAKQAMAKALATQAVAjAAAdQAAAmgVAWQgLAMgzAcQgzAcAOBSQAOBPAzBmQAzBmgHA2QgCANgFAMQgKAWgYAOIgXAIIgEABIgVAGIgMAAQhGAAgwg3g");
	this.shape_9.setTransform(53.2,118.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#74728A").ss(3,1,1).p("AilkCQg9B2AVCDQADAOADAQQABADAAADQAQBbAsB/QAJAfAQAbQAqBFBMAIQALgBALgCQACAAACAAQAMgCAMgDQAagIAOgVQAGgKAEgNQAQg0gghtQghhtAAhRQgBhTA3gSQA4gUANgJQAYgSAHgmQAFgcgPgmQgIgVgKgMQgIgHgJgHQg1gkg8gKQgMgCgMgBQhGgEg+A0QgkAdgZAsg");
	this.shape_10.setTransform(53.9,126.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F1F1").s().p("AhxEvQgQgbgJgfQgsh/gQhbIgBgGIgGgeQgViDA9h2QAZgsAkgdQA+g0BGAEIAYADQA8AKA1AkIARAOQAKAMAIAVQAPAmgFAcQgHAmgYASQgNAJg4AUQg3ASABBTQAABRAhBtQAgBtgQA0QgEANgGAKQgOAVgaAIIgYAFIgEAAIgWADQhMgIgqhFg");
	this.shape_11.setTransform(53.9,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},7).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).wait(8));

	// 圖層 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#74728A").ss(3,1,1).p("AgukjQguANgmAmQg6A5AABPQAACJBIB9QAVAkASAaQAFAJAHAIQAtA4AuAFQB9gDgGhyQgBgHgCgHQgHgigWguQgdg8AAgkQAAgTAMgVQALgVAsgLQAggKADgEQADgEAAgXQAAgkgQglQgOgjgWgSQgKgKgKgHQgpgegzgCQgRAAgQABQgTABgTAEg");
	this.shape_12.setTransform(27.1,124.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F1F1").s().p("AhBDtIgMgRQgSgagVgkQhHh9gBiJQABhPA5g5QAmgmAugNQAUgEASgBQAQgBARAAQA0ACAoAeQAKAHAKAKQAVASAPAjQAPAlAAAkQAAAXgBAEQgEAEggAKQgsALgLAVQgMAVAAATQAAAkAdA8QAWAuAHAiIACAOQAHByh9ADQgugFgtg4g");
	this.shape_13.setTransform(27.1,124.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#74728A").ss(3,1,1).p("AgBkpQgwADgtAdQhFAqgRBNQgfCHAqCIQAMAnAMAeQAEAKAEAKQAfBAAvAPQB3AZAUhxQABgHAAgHQgBgigLgyQgOhBAIglQAEgQAQgSQAQgSAugCQAhgCAEgDQADgDAFgWQAIgkgHgoQgGglgRgWQgHgMgJgJQghgngxgMQgRgEgRgEQgTgCgSgBg");
	this.shape_14.setTransform(26.9,129.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3F1F1").s().p("Ag7ElQgvgPgfhAIgIgUQgMgegMgnQgqiIAfiHQARhNBFgqQAtgdAwgDQASABATACIAiAIQAxAMAhAnQAJAJAHAMQARAWAGAlQAHAogIAkQgFAWgDADQgEADghACQguACgQASQgQASgEAQQgIAlAOBBQALAyABAiIgBAOQgRBdhSAAQgSAAgWgFg");
	this.shape_15.setTransform(26.9,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(3));

	// 圖層 8
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#74728A").ss(3,1,1).p("Aj+hxQAAABAAgBQACAAACAAQADAAADgBQAHgBAHgBQABAAAAAAQADgBACAAQABAAAAAAQAFgBAEgBQAPgCAPgEQAzgMBJgiQAbgNAagKQANgFANgFQBdgkBfAXQBrAcAeBnQADAIABAIQABALgBALQgBA0gtAxQgxA2hJAOQgKACgJACQhdAPhCADQg/ADg5AGQg5AFggAJQgfAKgKACQgJADgKADQgJAEgEACQgEADgFACQgFADgEACQgHAEgGADQgGAEgGADQgMAGgNAH");
	this.shape_16.setTransform(176.2,109.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3F1F1").s().p("AkzBRQAehfAXhiIAAAAIAEgBIAGgBIAOgCIABAAIAFgBIABAAIAJgCIAegGQAzgMBJgiQAbgNAagJIAagLQBdgkBfAXQBrAcAeBoQADAHABAIIAAAWQgBA0gtAxQgxA2hJAOIgTAEQhdAPhCADQg/ADg5AGQg5AFggAJIgpAMIgTAGIgNAGIgJAFIgJAGIgNAGIgMAHIgZANQAUhKAVhIg");
	this.shape_17.setTransform(176.2,109.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#74728A").ss(3,1,1).p("AkAh0IAAAAQACAAACgBQADAAADAAQAHgBAHgBQAAAAABAAQACAAADgBQABAAAAAAQAEgBAFAAQAPgDAPgCQAzgMBIggQAbgLAZgKQANgFAOgEQBcgiBgAaQBrAfAfBoQADAHABAJQABAKAAALQgBA0gsAwQgxA1hJAMQgKACgJACQhdALhBACQhAACg4AEQg5ADggAJQgfAJgJACQgKACgJADQgKAEgEACQgEACgEADQgFACgFADQgGADgHADQgGADgFADQgMAHgNAG");
	this.shape_18.setTransform(176,109.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3F1F1").s().p("AkyBMQAchfAWhhIAAAAIAEgBIAGAAIAOgCIABAAIAFgBIABAAIAJgBIAegFQAzgMBIggIA0gVIAbgJQBcgiBgAaQBrAfAfBoQADAHABAJIABAVQgBA0gsAwQgxA1hJAMIgTAEQhdALhBACQhAACg4AEQg5ADggAJIgoALIgTAFIgOAGIgIAFIgKAFIgNAGIgLAGIgZANQAShKAWhHg");
	this.shape_19.setTransform(176,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},9).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},9).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).wait(1));

	// 圖層 6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#74728A").ss(3,1,1).p("AIDCXQiDBEhpAdQiIAmi2AAQg4AAhPgOQhWgPgrgVQgCgBgCgBQg6gYg1gfQh+hJg4hhQgPgYAQgoQAPgoEGhfQEGhfDmAAQCfAABgAaQAuALArAZQATALASALIANAHIAcAIQAIgBAIgB");
	this.shape_20.setTransform(89.7,116.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3F1F1").s().p("AiuEQQhWgPgrgVIgEgCQg6gYg1gfQh+hJg4hhQgPgYAQgoQAPgoEGhfQEGhfDmAAQCfAABgAaQAuALArAZIAlAWIANAHIAcAIIAQgCQgXBigdBgQgWBIgTBJQiDBEhpAdQiIAmi2AAQg4AAhPgOg");
	this.shape_21.setTransform(89.7,116.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,67.4,205.9,90.3);


(lib.電腦打字手2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#74728A").ss(3,1,1).p("AEUh1QgZgXgxhLQgzhNgDgEQg2g9gtgXQgugYhKABQhMAChBBTQhABTACCQQACCOAsC0QAtC0BrgHQANgBAMgCQBygWgNh7QgFg1gMg2QgHgigHghQgNg0gDgeQgDgtAJgsQAHgWAMgVQAGgJAGgK");
	this.shape.setTransform(119,109.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F1F1").s().p("AjkDnQgsi0gCiOQgDiQBBhTQBBhTBMgCQBKgBAuAYQAtAXA2A9QADAEAzBNQAxBLAZAXQglAKhxAJIh1AJQAHgWAMgVIAMgTIgMATQgMAVgHAWQgJAsADAtQADAeANA0IAOBDQAMA2AFA1QANB7hyAWIgZADIgIAAQhlAAgritg");
	this.shape_1.setTransform(119,109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#74728A").ss(3,1,1).p("AETiKQgagWg2hIQg3hJgEgEQg5g6gugUQgtgVhMAGQhMAGg8BYQg7BWALCQQALCOA4CwQA3CxBqgOQAOgCALgCQBwgdgUh6QgIg1gPg1QgKghgJghQgPgzgFgeQgHgsAGgtQAHgXAKgVQAGgKAFgJ");
	this.shape_2.setTransform(119.1,113.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F1F1").s().p("AjNDwQg4iwgLiOQgLiQA7hWQA8hYBMgGQBMgGAtAVQAuAUA5A6IA7BNQA2BIAaAWQgkAMhwAQIh1AQQAHgXAKgVIALgTIgLATQgKAVgHAXQgGAtAHAsQAFAeAPAzIATBCQAPA1AIA1QAUB6hwAdIgZAEIgPABQhfAAgzikg");
	this.shape_3.setTransform(119.1,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},8).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(9));

	// 圖層 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#74728A").ss(3,1,1).p("AAdmGQhggDg2BOQhbCDAIChQABAOABANQAKBVAsBcQBFCOAiAkQAjAjAugDQAwgEAegUQAfgVAGgrQAHgqgohtQgphsAAgdQAAg2AUgjQANgVAfgbQAhgbALgTQAUghAAg2QAAgbgGgRQgEgKgIgLQhFhGhZAAg");
	this.shape_4.setTransform(81.8,111.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F1F1").s().p("AgtFnQgigkhFiOQgshcgKhVIgCgbQgIihBbiDQA2hOBgADQBZAABFBGQAIALAEAKQAGARAAAbQAAA2gUAhQgLATghAbQgfAbgNAVQgUAjAAA2QAAAdApBsQAoBtgHAqQgGArgfAVQgeAUgwAEIgIAAQgpAAggggg");
	this.shape_5.setTransform(81.8,111.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#74728A").ss(3,1,1).p("ABJl+QhegUhDBCQhxBygUCfQgBAOgCAPQgGBTAdBjQAqCYAcApQAbAoAwAGQAwAFAggPQAhgQAOgoQAPgogVhyQgVhyAFgdQAKg1AagfQAPgTAkgUQAlgVAPgRQAZgdAJg1QAFgbgDgSQgCgKgGgMQg4hRhXgPg");
	this.shape_6.setTransform(82.9,120.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F1F1").s().p("Ag4GDQgwgGgbgoQgcgpgqiYQgdhjAGhTIADgdQAUifBxhyQBDhCBeAUQBXAPA4BRQAGAMACAKQADASgFAbQgJA1gZAdQgPARglAVQgkAUgPATQgaAfgKA1QgFAdAVByQAVBygPAoQgOAoghAQQgYALggAAIgYgBg");
	this.shape_7.setTransform(82.9,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},6).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},6).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(7));

	// 圖層 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#74728A").ss(3,1,1).p("AiyjeQgpB/AsB7QAFAPAGAPQABADABADQAfBYBBB1QAOAeAUAXQA0A9BOgGQALgDAKgDQACgBACAAQAMgEALgEQAYgOAKgWQAFgMACgNQAHg2gzhmQgzhmgOhPQgOhSAzgcQAzgcALgMQAVgWAAgmQAAgdgVgjQgLgTgMgKQgKgFgJgFQg7gbg8AAQgNAAgJABQhIAJg1A9QgeAjgRAwg");
	this.shape_8.setTransform(53.2,118.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F1F1").s().p("AggFCQgUgXgOgeQhBh1gfhYIgCgGIgLgeQgsh7Aph/QARgwAegjQA1g9BIgJQAJgBANAAQA8AAA7AbIATAKQAMAKALATQAVAjAAAdQAAAmgVAWQgLAMgzAcQgzAcAOBSQAOBPAzBmQAzBmgHA2QgCANgFAMQgKAWgYAOIgXAIIgEABIgVAGIgMAAQhGAAgwg3g");
	this.shape_9.setTransform(53.2,118.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#74728A").ss(3,1,1).p("AilkCQg9B2AVCDQADAOADAQQABADAAADQAQBbAsB/QAJAfAQAbQAqBFBMAIQALgBALgCQACAAACAAQAMgCAMgDQAagIAOgVQAGgKAEgNQAQg0gghtQghhtAAhRQgBhTA3gSQA4gUANgJQAYgSAHgmQAFgcgPgmQgIgVgKgMQgIgHgJgHQg1gkg8gKQgMgCgMgBQhGgEg+A0QgkAdgZAsg");
	this.shape_10.setTransform(53.9,126.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F1F1").s().p("AhxEvQgQgbgJgfQgsh/gQhbIgBgGIgGgeQgViDA9h2QAZgsAkgdQA+g0BGAEIAYADQA8AKA1AkIARAOQAKAMAIAVQAPAmgFAcQgHAmgYASQgNAJg4AUQg3ASABBTQAABRAhBtQAgBtgQA0QgEANgGAKQgOAVgaAIIgYAFIgEAAIgWADQhMgIgqhFg");
	this.shape_11.setTransform(53.9,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).wait(11));

	// 圖層 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#74728A").ss(3,1,1).p("AgukjQguANgmAmQg6A5AABPQAACJBIB9QAVAkASAaQAFAJAHAIQAtA4AuAFQB9gDgGhyQgBgHgCgHQgHgigWguQgdg8AAgkQAAgTAMgVQALgVAsgLQAggKADgEQADgEAAgXQAAgkgQglQgOgjgWgSQgKgKgKgHQgpgegzgCQgRAAgQABQgTABgTAEg");
	this.shape_12.setTransform(27.1,124.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F1F1").s().p("AhBDtIgMgRQgSgagVgkQhHh9gBiJQABhPA5g5QAmgmAugNQAUgEASgBQAQgBARAAQA0ACAoAeQAKAHAKAKQAVASAPAjQAPAlAAAkQAAAXgBAEQgEAEggAKQgsALgLAVQgMAVAAATQAAAkAdA8QAWAuAHAiIACAOQAHByh9ADQgugFgtg4g");
	this.shape_13.setTransform(27.1,124.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#74728A").ss(3,1,1).p("AgBkpQgwADgtAdQhFAqgRBNQgfCHAqCIQAMAnAMAeQAEAKAEAKQAfBAAvAPQB3AZAUhxQABgHAAgHQgBgigLgyQgOhBAIglQAEgQAQgSQAQgSAugCQAhgCAEgDQADgDAFgWQAIgkgHgoQgGglgRgWQgHgMgJgJQghgngxgMQgRgEgRgEQgTgCgSgBg");
	this.shape_14.setTransform(26.9,129.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3F1F1").s().p("Ag7ElQgvgPgfhAIgIgUQgMgegMgnQgqiIAfiHQARhNBFgqQAtgdAwgDQASABATACIAiAIQAxAMAhAnQAJAJAHAMQARAWAGAlQAHAogIAkQgFAWgDADQgEADghACQguACgQASQgQASgEAQQgIAlAOBBQALAyABAiIgBAOQgRBdhSAAQgSAAgWgFg");
	this.shape_15.setTransform(26.9,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},8).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(5));

	// 圖層 8
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#74728A").ss(3,1,1).p("Aj+hxQAAABAAgBQACAAACAAQADAAADgBQAHgBAHgBQABAAAAAAQADgBACAAQABAAAAAAQAFgBAEgBQAPgCAPgEQAzgMBJgiQAbgNAagKQANgFANgFQBdgkBfAXQBrAcAeBnQADAIABAIQABALgBALQgBA0gtAxQgxA2hJAOQgKACgJACQhdAPhCADQg/ADg5AGQg5AFggAJQgfAKgKACQgJADgKADQgJAEgEACQgEADgFACQgFADgEACQgHAEgGADQgGAEgGADQgMAGgNAH");
	this.shape_16.setTransform(176.2,109.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3F1F1").s().p("AkzBRQAehfAXhiIAAAAIAEgBIAGgBIAOgCIABAAIAFgBIABAAIAJgCIAegGQAzgMBJgiQAbgNAagJIAagLQBdgkBfAXQBrAcAeBoQADAHABAIIAAAWQgBA0gtAxQgxA2hJAOIgTAEQhdAPhCADQg/ADg5AGQg5AFggAJIgpAMIgTAGIgNAGIgJAFIgJAGIgNAGIgMAHIgZANQAUhKAVhIg");
	this.shape_17.setTransform(176.2,109.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#74728A").ss(3,1,1).p("AkAh0IAAAAQACAAACgBQADAAADAAQAHgBAHgBQAAAAABAAQACAAADgBQABAAAAAAQAEgBAFAAQAPgDAPgCQAzgMBIggQAbgLAZgKQANgFAOgEQBcgiBgAaQBrAfAfBoQADAHABAJQABAKAAALQgBA0gsAwQgxA1hJAMQgKACgJACQhdALhBACQhAACg4AEQg5ADggAJQgfAJgJACQgKACgJADQgKAEgEACQgEACgEADQgFACgFADQgGADgHADQgGADgFADQgMAHgNAG");
	this.shape_18.setTransform(176,109.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3F1F1").s().p("AkyBMQAchfAWhhIAAAAIAEgBIAGAAIAOgCIABAAIAFgBIABAAIAJgBIAegFQAzgMBIggIA0gVIAbgJQBcgiBgAaQBrAfAfBoQADAHABAJIABAVQgBA0gsAwQgxA1hJAMIgTAEQhdALhBACQhAACg4AEQg5ADggAJIgoALIgTAFIgOAGIgIAFIgKAFIgNAGIgLAGIgZANQAShKAWhHg");
	this.shape_19.setTransform(176,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},10).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).wait(6));

	// 圖層 6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#74728A").ss(3,1,1).p("AIDCXQiDBEhpAdQiIAmi2AAQg4AAhPgOQhWgPgrgVQgCgBgCgBQg6gYg1gfQh+hJg4hhQgPgYAQgoQAPgoEGhfQEGhfDmAAQCfAABgAaQAuALArAZQATALASALIANAHIAcAIQAIgBAIgB");
	this.shape_20.setTransform(89.7,116.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3F1F1").s().p("AiuEQQhWgPgrgVIgEgCQg6gYg1gfQh+hJg4hhQgPgYAQgoQAPgoEGhfQEGhfDmAAQCfAABgAaQAuALArAZIAlAWIANAHIAcAIIAQgCQgXBigdBgQgWBIgTBJQiDBEhpAdQiIAmi2AAQg4AAhPgOg");
	this.shape_21.setTransform(89.7,116.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,67.4,205.9,90.3);


(lib.電腦打字手臂2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#74728A").ss(3,1,1).p("ABFkEQhFAggkAcQhWBCAABhQAABwCuB4QBlBGD3CDAg1H3QhOgkiBimQiLi0AAh9QAAiYCTiZQB2h7ChhG");
	this.shape.setTransform(40,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F1F1").s().p("AkEEtQiLi0AAh9QAAiYCTiZQB2h7CihGIApDyQhFAggkAcQhWBCAABhQAABwCtB4QBmBGD3CDQjQAhj1BKQhOgkiBimg");
	this.shape_1.setTransform(40,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#74728A").ss(3,1,1).p("AAxKKQkuj3iTi4QiUi4AAihQgBikCFiQQCEiQCjhHAhPmXQkTCnC4D6QBpCQCSBkQDmCaDuCO");
	this.shape_2.setTransform(55,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F1F1").s().p("AmRDbQiTi4AAihQgBikCFiQQCEiQCjhHIAqDzQkTCmC4D6QBpCQCSBjQDmCbDuCNIn0BkQkuj2iUi4g");
	this.shape_3.setTransform(55,65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#74728A").ss(3,1,1).p("AlRllQhFAgg4A/Qg5BAAhBNQAhBODMB2QDLB4NGExADAJYQl6iJkljRQkljRgRiUQgRiWCSiZQB3h7CjhG");
	this.shape_4.setTransform(80.8,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F1F1").s().p("AnfD+QkljRgRiUQgRiWCSiZQB3h7CjhGIApDzQhFAfg4A/Qg5BAAhBNQAhBODMB2QDLB4NGEwIpYBkQl6iIkljRg");
	this.shape_5.setTransform(80.8,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,83,103.7);


(lib.電腦打字手臂1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#74728A").ss(3,1,1).p("AgtImQC+i+BZi+QBfjMgch8QgiiVixh0QiMheiuggAjTkvQBKAPArATQBhAtAVBeQAaBwiPCaQhTBbiDBe");
	this.shape.setTransform(164.7,55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F1F1").s().p("AkzFBQCDhfBThaQCPiagahvQgVhfhhgtQgrgThKgPIgNj2QCuAgCMBeQCxB1AiCUQAcB8hfDMQhZC9i+C+g");
	this.shape_1.setTransform(164.7,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#74728A").ss(3,1,1).p("AjaK8QNhnhBhiBQBhiAgcimQgcimiciRQibiQitgoAE9mPQBpBBAmA+QAnA/gZBMQgYBMj+CLQj7COr7EU");
	this.shape_2.setTransform(112,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F1F1").s().p("AsyHzQL7kTD8iOQD9iLAYhMQAZhMgng/Qgmg+hphBIgQksQCtAoCcCQQCbCRAcCmQAcCmhhCAQhhCBthHhg");
	this.shape_3.setTransform(112,70);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#74728A").ss(3,1,1).p("AARK8QDskrBSjdQBSjagcimQgcimibiRQiciQirgoAhomPQCmBWANCRQANCQhWCLQhUCMhzB4Qh0B5hOAyIgEAA");
	this.shape_4.setTransform(154.3,70);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F1F1").s().p("AmJIiQBOgyB0h4QBzh5BUiMQBWiLgNiQQgNiRimhWIgRksQCrAoCcCQQCbCRAcCmQAcCmhSDaQhSDdjsErg");
	this.shape_5.setTransform(154.5,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.4,-1.5,64.7,113);


(lib.電腦打字鍵盤 = function() {
	this.initialize();

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#74728A").ss(1.2,1,1).p("ABZjDIA0B2IiTAAIAsB4ICdAAICYAAADDArIg2h4ABZjDICPAAAAvkhIAqBeAh2ArIigAAAidhNIAnB4AgyjDIgjheAjDjDICRAAICLAAAjgkhIAdBeIiXAAAidhNIgmh2AlChNIClAAAj7CoICsAAIgnh9ICcAAIAuB9IijAAABUCoIAuB6AD6CoIimAAAEwEiIg2h6AgGhNIgsh2ADDArIA3B9AgGhNIiXAA");
	this.shape.setTransform(287.6,35.7);

	// 圖層 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#74728A").ss(1.5,1,1).p("ANpkhIARBeICVAAALbkhIALBeICUAAIAVB1IibAAIAPB5IFDAAAQohOIiZAAALmjDIAOB1IibAAIAKB5IihAAIADB9IirAAIitAAIijAAIixAAIiyAAIi2AAIglB6AJIkhIAIBeIiVAAIADB1ICbAAIgJh1ICWAAAEtkhIgEBeICSAAIgCheAEfArICjAAIgEh5IiaAAIgFB5IgFB9AEpjDIgFB1AHIEiIgDh6ICoAAIAKB6AO8CoIiqAAIilAAIgKh9ICgAAAPSEiIgWh6AMgEiIgOh6ARpCoIitAAACbkhIgKBeIgLB1IiaAAIgRB5ICeAAIANh5ICeAAAAHkhIgLBeICVAAICYAAAgEjDIgQB1IiiAAIAXh1gAkokhIgXBeICgAAIASheAnAkhIgdBeICeAAIgdB1ICmAAIgYB5Al6ArICsAAAndjDIglB1ICmAAIgeB5IgfB9AglArIgRB9AB5ArIgMB9AjnCoIAZh9ICpAAAqqhOIAqh1IAhheAsZjDIidAAArWArICuAAIAmh5IioAAIgsB5IlWAAAsZjDICZAAICjAAArvkhIgqBeAxoCoICsAAIg3B6AsCCoICzAAIAnh9AstEiIArh6Ii6AAAvmhOIE8AAAl6ArIiuAAAEfArIimAA");
	this.shape_1.setTransform(136.2,35.7);

	// 圖層 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#74728A").ss(1,1,1).p("AkaE9ILJAAIAAgxIkvpIIouAAIAABNgAkTEMIgHAxAmuk8ICbJIAGvEMIrCAA");
	this.shape_2.setTransform(292.8,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F1F1").s().p("AkSEkIicpHIIuAAIEvJHg");
	this.shape_3.setTransform(292.8,35.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhMjuIAAhOICZJHIgHAxg");
	this.shape_4.setTransform(257.4,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AlkAYIAIgvILBAAIAAAvg");
	this.shape_5.setTransform(300.2,67.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F1F1").s().p("AyXEfIEoo9IduAAICZI9g");
	this.shape_6.setTransform(134.7,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AyZAUIAAgnMAkzAAAIAAAng");
	this.shape_7.setTransform(134.6,67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#74728A").s().p("AyeFDQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgyIAAgCIAAgCIEtpHIACgCIADgBId1AAIADABIACADICbJGIAAABIAAA1QAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAyZE5MAkzAAAIAAgqMgkzAAAgAyWEFMAkvAAAIiZo9I9uAAg");
	this.shape_8.setTransform(134.6,38.1);

	// 圖層 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#74728A").ss(1,1,1).p("Aa2AtMg1kAAAAbkgsMg3HAAA");
	this.shape_9.setTransform(176.4,81.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#74728A").ss(2,1,1).p("Aa2GeIAAAgMg1kAAAIAAggIg1AAIAAhbIGksAMAp/AAAIGkMAIAABbg");
	this.shape_10.setTransform(176.4,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("Aa2AtMg1kAAAIg1AAIAAhZMA3GAAAIAABZg");
	this.shape_11.setTransform(176.4,81.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("A6yAPIAAgdMA1kAAAIAAAdg");
	this.shape_12.setTransform(176.8,87.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBFBFB").s().p("A7jGBIGlsBMAp9AAAIGkMBg");
	this.shape_13.setTransform(176.4,38.5);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,354.8,91.3);


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


(lib.補間動畫3 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.SA30pp1();
	this.instance.setTransform(-174.5,-152.3,0.499,0.499);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.5,-152.3,349.1,304.8);


(lib.補間動畫2 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.SA30pp1();
	this.instance.setTransform(-174.5,-152.3,0.499,0.499);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.5,-152.3,349.1,304.8);


(lib.補間動畫1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.SA30pp1();
	this.instance.setTransform(-174.5,-152.3,0.499,0.499);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.5,-152.3,349.1,304.8);


(lib.書名 = function() {
	this.initialize();

	// 圖層 3
	this.instance = new lib.SA30bn();
	this.instance.setTransform(80.7,-42.5,0.735,0.735,12.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.4,-42.5,487.1,352.8);


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


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.instance = new lib.book_dvd();
	this.instance.setTransform(76.5,-27.7,0.746,0.746,-31.7);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-211.1,456.8,332);


(lib.rocklogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#271F1C").s().p("ADCBVIgMgGQgFgDgGgJQgGgJgBgOQgCgPAGgIQAFgIAHgCIAFACIADABIACgBQAMgFAIABQAJABACALQABAMgBAKQgCALACAEIAHAEQAEADAFABQAGABABgEQABgDAAgEIAAgMIAAgsQAAgFgCgBIgYAIQgGADgJABIgOgBQgEAAgKgDQgMgCgMgGQgMgIgBgGQgBgHAFgEIAzAJIAeABIAXAAIAFgXIgUAFIgaAEQgOAAgMgDQgLgDgJgEIgCgCIgagSIgFgFQgDgDgBgEQgCgEADgCIAHgCIAZACIAGABQAJADAPADQANAEAWABQAWACAMgBIAXgDIADACIAAADIgBAEIgCACQgGAHgGALQgFAMgDATQgBAPAAAQIgBAWIABAIQAAAGAAAGQAAAIgDADQgDAEgDACIgHABIgLgBIgKgEIgGgFIgEAIQgCAFgEADQgCACgDAAIgFgBgADCAWIgBAFIgBAdQAAAKACAGQACAEACgBIAEgIQADgKABgNQABgOgEgFQgCgEgEAAIgDABgAhxBPIgOgJQgIgGgFgCQgFgCgCABIgCAGIgFAHQgDAEgDABIgEACQgIAAgGgMQgFgMgBgbQAAgbACgPIACgUIgJgHQgGgGgGgJQgHgIAAgIQAAgGAEgDIBBAdIASAFIAGAEIADADIAAADIgGARIgDAVQgDAOgFAHQgGAIgHAEQAAAEAFAAQAFABAHgBQAHgBgCAFQgCAEgHAIQABACADADIASARIADADIgCAAQgDAAgEgCgAipAnQgCADAAAEIgBAIIACAJIACAGIACADQAGAAAAgDQACgDgFgIQgCgHACgDQAEgEAIAAIgBgBIgBgCIgBgCIgBgCIgIAAQgDAAgDACgAiqAJIgCAHQABAGAEADQAEAEAJgDQAJgCAEgGQAEgFAAgEIgRgBIgJAAIgHAAgAingYIgCAIIAAADQAAADAEABQADACAIACIAUABIABgKIABgGIACgEIgIABIgLAAIgRgEgAgWBIQgFgDACgMQABgMALgSQALgTAGgIIAKgNIACAFQABACgBADIgBADIgCAFIAKALIArAlQgCAEgEADQgFADgGgBQgIgCgFgDIgHgEIgLAIQgGAFgIAEQgGAEgIAAQgIAAgEgCgAgLAzQADADAFABQADACAFgBQAGgBAEgDQAEgDADgDIgRgagAjvBBQgGgJgFgZIgKg4QgCgBgDgDQgEgDgDgGIgFgKIgDgHIADgEIADgDIABgBIAmAMIAYADIAIACIAEACQAAAFgDAHIgIAOQgFAJAAAGQAAAEADAFQACAEACAIQACAIgDAIQgDAIgGABQgHACgHgBQAAABgBAAQAAABAAAAQAAABAAABQgBAAAAABIAFARIAAAFIgDABQgDAAgEgHgAj1gQIgBACIAAAEIAJArQAKAAAFgEQAFgEgEgJIgGgRQgCgIACgFIgDAAIgPgDgAg0gDIgHgBIgPgGIgDgDQgDgCAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIADgCIBSgjQABAEgFAJQgDAIgNAMQgMAMgJAFIgMAGgAA9gYIgJgBIgJgHQgIgGgIgKQgJgLAAgFQAAgFAFAAIBFAdQABAFgEAEQgDAEgJACIgLABIgFAAg");
	this.shape.setTransform(103.6,26.4,1.043,1.043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#271F1C").s().p("ACPBWIgwgKIgHgCIgFAEIgLAFQgGADgFgBQgFgBgBgCIAGgBIAJgFIAHgFIAFgGQgBgCgEgGIgLgNQgHgIAAgFQAAgEAFgCIAGAEIAJAIIAJAJIAGAEIAHgJQAFgFADgIIAGgNIAEgHIgDABIgEABQgGABgLABQgLACgMgEQgNgEgIgFIgLgHIgKgJQgFgHgCgFQgCgHADgCQAEgCADAAIAcAHQASADAVAAQAZAAAQgCIAkgEQAAAAABABQAAAAAAAAQABABgBABQAAAAAAABQgBADgEAEIgGAIQgDADgFAEQgFAFgGADIgJAEIgGADIgMAaIgKAOIgHAKQAIAFAIADQAJAEAMABQAMAAAMgBIARgCQACAEgBAFQgCAFgGADQgIADgIAAgAHnBLQgLgLgDgZQgDgZAFgQQAEgQAEgHIAHAAIAagFQAKgCAIAGQAIAFADAPQACAQgCAKIgBARQgCAPgDAHQgDAKgEAAQgFgBAAgEQgBgFACgCIgFABIgIAAIgIgBIgGgCQAAADABAFIADAJQACAHABADQAAADgBABQgKAAgKgLgAHzAfQADAEAHACQAHACAGgBIAJgBIAAgSQgBACgGABIgKACIgLgBIgHAAQAAAFADADgAH/gTIgIACIgEADQgDADACADQACAEAJACIAQACIAIAAIAAgEIABgHQAAgEgEgCIgGgDgAkkBVQgFgCgGgEQgGgEgIgLQgGgLgEgKQgDgNAAgHIgZAgIgBACIgBAAQgBgEAFgLQAEgKANgUIAegqIgPgEQgIgDgRgKQgQgJgEgHQgFgIgBgHIABgCIABgDQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEgBIAHABIARAHIAGACQAJAEAQAEQAMAEAXACQAWABANAAIAZgBQADAGgHAGQgGAHgTAGQgVAGgLAAIgQABIgUAbIAEAAIAEABIABACIABACIAagGQAOgDAJAFQAJADgBAOQgBAPgCANQgDAKgEAKQgFALgHAGQgIAHgHgBQgHAAgEgBgAkiAIIgJAEIABAOIACATQACAKAEAIIAHALQAFACAFgFQAGgFAEgQQADgOACgKIABgOIgIgDQgIgCgFAAIgDAAIgJABgAiZBNQgFgFgBgHIABgDIAEgDIAHAAIADABIgBgIQgBgGgBgFQAAgGAEAAIAJACIAHAZQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAIADgRIADgJQABgBAAAAQABgBAAAAQAAgBABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQABADgBAFIAAANIAAABIACAAIAEABIACACQgBAHgIAEQgIAHgNAAIgEAAQgKAAgGgFgAhIBMQgDAAAAgDIAGgFIADgCIABgCQgHgCgGgIQgGgIgFgTQgDgTABgJQABgNADgEQAAgDADgDIAFgDQADgCADgDQADgCACgEQgEAAgEgDIgJgJQgFgGgEAAQgEgBgEAEIgEAEQgEADgDABIgIACIgHAAIgJABIgNgEIgNgHIgIgHQgDgDgCgEQgDgDgBgFQAAgFADAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABIAPACIA6AIQgBgFADgBQADgCAJABIANAEIAIAEQAHADAGAAIASAEQAJABAIADQAHAEAEAFQgDAFgJAFQgGADgOADQgNABgEACQgGACgBACIAAACIAAAAIADgBQAJgCAJAEQAIAGADAQQADAPgCAOIgBATIgBADIgCADIgBADIACADIAEAJQADAEgEACQgCABgFgCIgIgFQgBgBgFACIgMAFQgGAEgDAAIgBgBgAgvAmIgHACIgMABQACAFAFADQAEAEAGgDQAFgCACgEQABgFgBgDgAhHALIABADIAAADIgBABQACABADAAIAKACIAJAAIAFgBIAAgIIgPAAIgOgCgAg/gRQgGADAAADIADAEIAJADIAJACIAGAAQACgDgCgGQgCgFgGgCIgGgBIgHACgAFYBEQgHgCgEgIIgFgLQgCgJgBgIIgCgdIgOgBQgHAAgIgCQgGgDgFgJIgGgOIgCABIgBACIgDABQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAIgCAQIABAVIABAXQABALgBAGQgCADgCgHQgBgEgBgYIgBgpIgNABQgHAAgIgEQgIgEgFgFIgJgKIAAgBIABgCIAEgCIARgBIAXgEIAogKQABACABADIgFAIIgKANIAjADIACgYQACgKABgDQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABIABAFIABAMIgBAUIAHABIAxgIQACADgFAHQgFAHgNAJQgNAJgIAEIgLACIgBALIACAUQACANADAFQADAGAEABQAFACAGgEQAGgCAHgKQAFgKADgDQABAAAAgBQABAAAAgBQABAAAAAAQABABABAAQgBAFgFALQgFAKgKAIQgIAGgGAAIgEgBgAn7A9QgOgDgJgLQgHgLgCgKIgJABQgHAAgHgCQgJgDgEgDQgDgFAAgEQAFgBALgDQAIgEALgEIATgLIAPgFQABAAAAAAQABAAAAABQAAAAABABQAAABgBAAQAAAEgHALQgFAJgFAHIgEAGQgBAGAFAIQAFAGAJADQAIADAEgEQADgEgBgFIgCgRQgDgRgBgVQgCgZACgLQABgKAFADQADACACAJQACALAAARIABApQAEARgFAOQgEANgMAAIgCAAgAiLAcQgRgHgFgTQgFgRAFgQIAAgFIAFAAIAHABIAFACIAFADQAAABAAAAQABAAAAAAQABgBAAAAQABAAABgBQAEgDAFgBQAHgCADAFQAEAFACAJQADASgIASQgGAMgKAAIgIgCgAiKgRIADAUQACAIADAFQADAEABAAIAEgKQACgJgBgNQAAgOgGAAQgFAAgGAJgAm8AWQgUgKgIgMQgJgLACgGQAAgCAJACQAJACARAJIAdALQALAFACAAQAAAMgLAFQgDABgFAAQgJAAgOgGgAGuAZQgBgCADgJQACgFAMgPIAagjQgDAEgKgEQgJgEgMgLQgMgMgCgGQgCgHAEABIARADQALADAQACQAQABAIgDQAKgDADgGIACgCIADgBIAEAAIACAAIABAEIgDAMIAfABIATAAIANADQgDAHgIAHQgLAIgQACQgUAEgMAAIgTACQgCAAgIAJIgWAZQgPASgFAEQgGAFgBAAIgBAAgAA+g3QgPgLgCgMIADgDQABgCADgBIAGgCIAEAAIAQAFIAZADIAoAFQAEAJgKAKQgJAJgZABQgaAAgPgLg");
	this.shape_1.setTransform(10.8,26.5,1.043,1.043);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABOAmQgDgCAAgCIAAgCIAGgaIgLghIAAgBQAAgDACgCIAEgEIAHgBQADAAAFACQACABABADIAHAUQABADAEAAQADAAACgDIARgXIADgCIADgBIACAAIAAABQABADgDACIgbAkIgHAcQAAADgEACQgEACgGABQgFAAgDgCgAAFAeIgGgXQgBgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAAAIgCAFIgGAeQgBADgEAAIgCgBIgBgCIAAAAIAOhDQABgDAFgDQAFgCACAAQAJgBACAJIAJAcIACACIAEAAIADAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAHgiQACgCADAAIADAAIABACIAAABIgPBDQAAADgFACQgFACgEABQgJAAgDgKgAhHAmQgDgBgBgDIgCgIQgCgEgEAAIgeAAQgEAAgCAEIgKAMIgDACQgBAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAgBIADgFIABgBIAyhDQADgEACABQAEAAABADIAUA8IABABIABACIAAADQAAADgFADQgDADgHAAQgEAAgDgCgAhiAAIgMAOQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACABIATAAIADgBQAAgBABAAQAAAAAAAAQAAgBAAAAQABgBAAgBIgBgCIgEgJIgCgDIgEgCQgCABgDAEg");
	this.shape_2.setTransform(122.9,42.3,1.043,1.043);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AK0AlQgEgBAAgEIAMg4QAAgCAEgDIAIgFIAKgDIALgBQANAAAJACQAIADgBAFIgGAdQgBAHgJAEQgHADgPABIgGAAIgDAQIgCADIgEACIgFACIgFABQgFgBgCgCgALOghIgFACIgEADIgCAEIgFAYIAAADIACADIAEACIAGABQAIAAADgCQAEgCACgFIAFgWIAAgCQAAgFgEgBQgDgEgHAAgAJ/AlQgEgCAAgDIAAgBIAGgdIABAAIgCgCIgCAAIgFAAIgDAEIgZAhQgCADgEAAIgCgCIgBgDIgKgeIgCgEIgEAAIgDABIgCADIgHAfIgBADIgDABIgDgBIgBgDIAOhBQACgJAMAAQAKgBACAIIAMAgQABAFADAAQAFAAACgFIAZgeQAHgJAIAAQAEAAAEACQAEACAAADIgBACIgNA8QAAADgFADQgEADgFAAQgGgBgCgCgAHmAkQgHgEAAgGIAKgzQABgDADgCQACgCAFgCIAKgDIAMgBIAKABIAJABIAFAFQADACAAAEIgKAwQgCAIgJAEQgIAEgNABQgOAAgHgEgAIHgdQgFADAAAFIgKAtIAAABQAAAEAEADQAEACAGAAIAFAAIADgDIAEgEIACgEIAKgrIAAgBIgBgEIgCgDIgEgDIgGgBQgGAAgEADgAGPAjQgHgDgBgGIABgBIAKgxQACgDACgDIAIgFIALgCIALgBIAKABIAIACQAFACACACQADACgBADIAAACIgCANQgBAEgFACQgEADgFAAQgFAAgDgDQgCgCAAgEIACgMIAAgBQAAgDgEgCQgEgDgFAAIgFAAIgFADIgEACIgCACIgLAxIAAABIABACIACAEIAFADIAGABQAFgBAEgCQAFgDABgDIAEgMIABgEIADgDIAFgCIAFgBQAEAAADACQADADAAACIAAACIgCANQAAACgDADQgEADgDABQgFADgFAAIgNACQgOgBgHgEgAEYAoQgIgBgDgCQgEgCAAgDIAAgBIANg7QABgFAEgDQAFgCAFAAIApAAIACABIABABIgCADIgDABIgWAAQgFAAAAAEIgGAWIAAABQAAAEAFAAIAWAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgWAAIgDABIgCACIgFATIAAABQABAEADABQADACAHAAIASAAQAHAAAAADQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAgADlAmIAGgZIAAAAQgBgEgDgDQgEgDgGAAIgOAAIgGAaQAAAFgDADQgEADgFAAQgHgBgDgCQgDgCAAgDIAAgDIAMg2IADgFQAEgDAFgBIAKgDQAGgBAGAAQAMgBAIAEQAIAEgBAGIgDAQQgBAGgIADIgBAAIAAABIAEAEIACAEIAAADIgGAXIgBAEIgEABQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAgADbgdQgFADgBADIgEAXIAOAAQAGAAAFgCQAFgCABgGIADgMIAAgBIgBgDIgDgCIgDgDIgHgBQgEAAgGADgABoAnIgJgDIgGgDQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgCIAMg2QABgFAEgDQAEgCAGAAQAFAAADACQAEACAAAFIAAABIgMA0IAAACQAAAEADACQAEACAFAAQAEAAAGgCQAFgDAAgEIAOg9IABgBIACgBIAEABIABABIAAACIgOA7QgBAGgJAEQgLAEgNABIgLgBgAALAlQgDgCAAgDIANg8IAAgBIgBgDIgCAAIgSAAIgCgBIgBgCIACgCIACgBIBIAAIABAAIABACQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgFABIgRAAQgEABAAADIgNA7QgBAFgFACQgEADgFABQgGgBgDgCgAhZAnIgFgCIgCgCIgBgEIAAgCIANg6QABgEAEgDQAFgCAFAAQAEAAAEACQADACAAADIAAABIAAABIgKAvIgBAHQAAAEACAEQAEACAFAAIALAAQAHAAAAACQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABgAioAnIgJgDIgHgDQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgCIAMg2QABgFAFgDQAEgCAFAAQAFAAADACQADACAAAFIAAABIgLA0IAAACQAAAEADACQAEACAEAAQAFAAAFgCQAGgDABgEIAMg9IACgBIADgBIACABIABABIAAACIgMA7QgCAGgJAEQgLAEgNABIgKgBgAkIAjQgHgDgBgGIABgBIALgxQABgDACgDIAIgFIAKgCIAMgBIAKABIAJACIAGAEQACACAAADIAAACIgDANQAAAEgFACQgEADgFAAQgEAAgDgDQgDgCAAgEIACgMIAAgBQAAgDgEgCQgEgDgFAAIgFAAIgFADIgEACIgCACIgLAxIAAABIABACIACAEIAFADIAGABQAFgBAEgCQAFgDABgDIAEgMIAEgHIAFgCIAFgBQAEAAADACQADADAAACIAAACIgCANQgBADgCACQgDADgEABQgFADgFAAIgNACQgOgBgHgEgAl/AoQgIgBgDgCQgEgCAAgDIAAgBIANg7QABgFAEgDQAFgCAFAAIApAAIACABIABABIgCADIgDABIgWAAQgFAAAAAEIgGAWIAAABQAAAEAFAAIAWAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgWAAIgDABIgCACIgFATIAAABQAAAEAEABQADACAHAAIASAAQAHAAAAADQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAgAnGAeIgIgXIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAFIgHAeQAAADgEAAIgDgBIgBgCIAAAAIAPhDQABgEAEgCQAFgCAFAAQAIgBAEAJIAJAcIABACIADAAIAEAAIACgCIAHgiQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAEAAIABACIAAABIgPBDQAAADgGACQgDACgGABQgIAAgEgKgAoyAkQgHgEAAgGIALgzQABgDADgCIAHgEIAKgDIALgBIAKABIAJABQAEADACACQADACgBAEIgKAwQgCAIgIAEQgJAEgNABQgNAAgIgEgAoQgdQgFACgBAGIgKAtIAAABQAAADAFAEQADACAHAAIAEAAIAEgDIAEgEIABgEIAKgrIAAgBIgBgEIgCgDIgDgDIgGgBQgGAAgEADgAqGAlQgEgCAAgDIAOg8IAAgBIgBgDIgDAAIgUAAIgCgBIAAgCIABgCIAFgBIBHAAIACAAIABACQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgEABIgSAAQgDABAAADIgOA7QgBAFgEACQgEADgGABQgGgBgCgCgAroAnIgJgDIgGgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIACgLQABgDAEgDQAFgCAFAAQAEAAAEACQACADAAADIAAACIgBAHIAAAAQAAAEADACQAEACAFAAIAGAAIAFgCIAEgDIACgDIAAgDQAAgDgCgCIgHgEIgcgMQgLgCABgHIAAgCIACgOQACgGAJgFQAJgFAPABIALABIAJABIAGAEQADACgBADIAAAAIAAABIgBAJIgCAEIgFADIgEABIgFABIgDgBIgEAAIgDgCIgBgDIAAgBIABgIIAAgBQAAgDgCgDQgDgCgHAAIgGABIgGACIgEAEIAAAEQAAAFAJAEIAdAMQAFAAACACQABACAAADIAAACIgDARQgBADgDADQgDADgFABIgLADIgLABIgKgBg");
	this.shape_3.setTransform(27.9,42.3,1.043,1.043);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8D0D2").s().p("AvLCwQgMABgJgJQgIgIAAgMIAAkoQAAgLAIgIQAJgJAMAAIeYAAQALAAAJAJQAIAIAAALIAAEoQAAAMgIAIQgJAJgLgBg");
	this.shape_4.setTransform(42.5,31.6,1.043,1.043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:1.043,scaleY:1.043,x:42.5}},{t:this.shape_3,p:{scaleX:1.043,scaleY:1.043,x:27.9,y:42.3}},{t:this.shape_2,p:{scaleX:1.043,scaleY:1.043,x:122.9,y:42.3}},{t:this.shape_1,p:{scaleX:1.043,scaleY:1.043,x:10.8,y:26.5}},{t:this.shape,p:{scaleX:1.043,scaleY:1.043,x:103.6,y:26.4}}]}).to({state:[{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:42.3}},{t:this.shape_3,p:{scaleX:1.1,scaleY:1.1,x:26.9,y:42.9}},{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:127.1,y:42.9}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:8.9,y:26.2}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:106.7,y:26.1}}]},1).to({state:[{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:42.3}},{t:this.shape_3,p:{scaleX:1.1,scaleY:1.1,x:26.9,y:42.9}},{t:this.shape_2,p:{scaleX:1.1,scaleY:1.1,x:127.1,y:42.9}},{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1,x:8.9,y:26.2}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:106.7,y:26.1}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,13.1,209,36.9);


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


(lib.Path_1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.141,0.922],0.2,-133.1,0,61.7).s().p("ALrMnQjphijjh0Ii1hhQlwkguSh3QnJg7l/gCIgDsdQAHitBphrQA0g1AzgTMA3+AAEQCxARAwDEQAZBigLBeIgJcqQoFgDrok4g");
	this.shape.setTransform(202,112.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,404.1,224.6);


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


(lib.c4 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],3.1,-42.1,3.1,61.4).s().p("AsSHPQiFhWABh7QAAggAJgeQgcAHgeAAQhgAAhFhEQhEhFAAhfQAAhgBEhEQBFhEBggBIAJABIAAgNQAAhwBPhPQBPhPBwAAQBwAABPBPQANANALAOQCQhPDLAAQDLAACQBRQAmAVAcAYIAEgEQA3g2BNgBQBNABA2A2QA3A3AABNQAAAlgMAgQAdALAaAQQA2gpBGAAQBUAAA7A8QAnAmAOAyIACAAQBeAABDBAQBCBCAABeQAABehCBDQhDBCheAAQgzAAgrgUQhLAwhrgBQhrABhMgxQgbgQgQgTQgkArg5AlQiVBijSAAQhtgBhegaQh6BDikAAQi6AAiDhWg");
	this.shape.setTransform(34.8,28.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.3,-26.6,240.4,109.9);


(lib.元件4 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AGwhYIAACxIAACzIkQAAACgkLIEQAAIAACzIkQAAIAACxIAACzIkqAAIklAAIAAizACgkLIAACzIkqAAIAACxIklAAIAAixIAAizgAiKkGIAACuIklAAACgBZIkqAAIAACzAGwBZIkQAA");
	this.shape.setTransform(43.2,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AChCzIAAizIEPAAIAACzgAiKCzIAAizIAACzIklAAIAAizIElAAIAAixIErAAIAACxIkrAAIErAAIAACzgAChAAIAAixIEPAAIAACxgAChAAgAmvAAIAAixIElAAIAACxgAiKixg");
	this.shape_1.setTransform(43.2,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AChBZIAAixIEPAAIAACxgAChBZIkrAAIAAisIAACsIklAAIAAixIJQAAIAACxg");
	this.shape_2.setTransform(43.2,9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,88.4,55.7);


(lib.C8 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],-1.7,-46.8,-1.8,42).s().p("AgSGsQjTAAiVhQQiChFgRhfQgzAPg9AAQhuAAhOgyQhQgzAAhIQAAhGBQgzQBOgyBuAAQA0ABAsALIAAgOQgBhMBKg4QBIg1BlgBQBMAAA7AeQAZgdAmgZQBqhGCYAAQCYAABrBGQBXA4ASBMIANgBQCXABBsA9QBtA+AABZQAABYhtA+QhsA+iXAAQgcAAgbgCQgXBXh6BAQiUBQjQAAIAAAAg");
	this.shape.setTransform(47.1,33.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-9.6,181.2,85.7);


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


(lib.btn04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.pp32();
	this.instance.setTransform(251.5,87.7,0.398,0.398,3);

	this.instance_1 = new lib.pp33();
	this.instance_1.setTransform(405.4,46.2,0.317,0.317,13);

	this.instance_2 = new lib.pp31();
	this.instance_2.setTransform(75.2,-104.8,0.633,0.633,-10);

	this.instance_3 = new lib.pp30();
	this.instance_3.setTransform(309.4,-172.1,0.831,0.831,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.2,-172.1,471.5,375.3);


(lib.btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D666F").s().p("AnNI0Qhphpg3iIQg1iDAAiOQAAiMA1iEQA3iHBphoQBohpCHg3QCEg1CMAAQCOAACDA1QCHA3BpBpIBwBvQhjhch9gzQiEg1iNgBQiPABiBA1QiHA3hpBpQhoBog4CIQg1CAAACPQAACOA1CDQAzB9BdBjg");
	this.shape.setTransform(336.1,-176.5,0.166,0.137,0,-21.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D858B").s().p("AqQFxQhohpg3iHQg1iCAAiOQAAiNA1iEQA3iIBohoQBphoCHg4QCDg0CPAAQCOAACBA0QCHA4BpBoIH0H1Qhkhfh/g0QiDg1iOAAQiOAAiDA1QiGA3hoBoQhpBpg3CGQg1CDAACOQAACOA1CDQA0B/BfBlg");
	this.shape_1.setTransform(335.5,-175.5,0.166,0.137,0,-21.9,165.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374049").s().p("ACSD/IAAAAQhXAAkthVQgYhWAXhUQAWhaBChBQBBhCBZgWQBVgXBWAYQBVEwAABUIAAAAQACAWgHAVQgIAWgQAQQgcAcgoAAIgMAAg");
	this.shape_2.setTransform(287,-100.6,0.166,0.137,0,-21.9,165.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1DBB1").s().p("AMANtIAAAAQhyAAm3iEQm2iFjehlQh7g2hghgQhphpg3iHQg1iBAAiOQAAiPA1iDQA3iHBphpQBohoCIg3QCDg2COAAQCOAACCA2QCHA3BpBoQBfBfA3B8QBlDeCFG2QCEG3AAByIAAAAQACAWgHAVQgIAWgQAQQgcAdgnAAIgNgBg");
	this.shape_3.setTransform(293.7,-111.1,0.166,0.137,0,-21.9,165.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9A21E").s().p("EggfgbIIFWlXMA7pA7pIlXFWg");
	this.shape_4.setTransform(323.5,-142.8,0.166,0.137,0,-21.9,165.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2B23D").s().p("EggfgbJIFXlWMA7oA7oIlWFXg");
	this.shape_5.setTransform(316.2,-145.8,0.166,0.137,0,-21.9,165.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1C65F").s().p("Egl1gVyIQDwDMA7oA7oIwDQDg");
	this.shape_6.setTransform(316.2,-145.8,0.166,0.137,0,-21.9,165.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F97C89").s().p("AqQFxQhohpg3iHQg1iCAAiNQAAiOA1iEQA3iHBohpQBohpCIg2QCDg1COgBQCOABCCA1QCHA2BpBpIH0H0Qhkheh/g0QiDg1iOAAQiPAAiDA1QiFA3hpBpQhoBog3CFQg1CEAACOQAACOA1CDQAzCABfBjg");
	this.shape_7.setTransform(339.6,-181.9,0.166,0.137,0,-21.9,165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// 圖層 5
	this.instance = new lib.writer_LOGO555();
	this.instance.setTransform(107.1,-306.8,0.297,0.297,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107.1,-317.6,246.4,220.9);


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


(lib.電腦打字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjaCRIADgSIgQgFQACgRAEgMIARAEIAIgdIgVgGIgGAMIgGAPIgKASQgLgEgNgJIAmhVQAOABANAIIgHARQAWAEAZAGQgIAigIAaIBYATQABANgFALQgwgCgsgMIgHASIgBABQgOAAgKgIgACxBtQgDgFAAgHIAAgOIAwgCIgBgaQgbABgPgCQgCgEAAgHIAAgOIAsgCIgBgXQghAAgdgEQgGgLgCgjIgDhSIANgBIAOAAIAIBpIAlABIAAgdIgegCQgBgNACgMIAdgBIAAgaQAQgBAOAEIAAAYIAeACQAAALgCANIgbACIAAAaQAVABAUgBQACgJgCgTQgBgagDggQhMAAgTgCQgCgEAAgLIgBgMQA/gDA9AEQAEASAEBCQACAigBAQQgVAFgyACIAAAVIAFAAQAfgCANABIABAOIAAALQgFAFgnACIgGABIgBAXIAGgBIA4gDIAAANIABALQgGAHgyACQgjADgXAAIgWgBgAiQBkQABgjAFgkQAOAAAMACIAAACIArACQgCAVgDASQAIAEAKADQAAAIgBAKIgVACQgMAAgMgDQgBgVADgRQgHAAgGgBIgEAtIgFABQgLAAgLgFgAk1BgQgIgBgFgCQAGhBARhKQAOABANAEQgGBJgNBCgAAvA2QAQgEAPgBQgGgVgDgWIgGAAQgaACgCgDQgDgDgBgHIADgOIAbgDIAFAAIgDgcIAbgFIAHAfIAdACIABALIAAALQgEACgWABIAFAqIAZgBQACAEAAAHQABAHgCAFQgSAHg6AHQgHgIgCgTgAjBANIgHgnQgiACgEgBIgCgNIABgNIAkgDIgBgNQguADgtAEQgDgGAAgHIABgPQAigEAxgEIAAgEQgBgYADgYIANgEQAGAAAGADIACAKQAjgCApABQABAOgFAMQgqADgbgCIABALIAAAEIATgBQAtgDAzAEIACAdIACATIgNAAQgJABgGgBQAAgLgEgGQgdgGgnACIgMABIABAOQAjgCAWACIACALQABALgCACQgFACgxADIACAQIAmgEQADAEAAAIIABALQgLAFgfACIgKAAQgMAAgEgCgAAehJIgBgcQAvgBAxAFQABANgCAQIgcABQgiAAgggGg");
	this.shape.setTransform(6.4,10.9,1.806,1.806);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjlCMIAhgmQgZgPgXgQQAIgNAJgLIA1AdIApguQANAJALAKQgQAWgSAWQAcAPAdASQgDANgPALQgggOgegSQgTAWgVAVQgNgHgKgOgACDCZQgGgNgCgjIACgnQAFgCAJAAQAHgBAHACIABAaQAXgBAXAEIgBAKQAAAJgCAEIgcAAQgHgBgHABIAAAKQAtAAAsgCQACgJgBgTIgDgLQg4gBgOgCQgCgDAAgMIgBgNQAzgBAxADQAEAIACAeQACAkgBAQQgSAHgsADIgYABQgfAAgcgFgABkAcIA7gFIgBgJIgVABQgEgNgBgNIAXgCIAAgQIgbgCIgBgNIABgLIAagBIAAgMQgsABgjgBQgCgDAAgKQAAgHACgIIBPgDIgBgMQgcAAgegDQAAgQABgKIA5gCIAAgRIAQgBQAJgBAIABIABATIBRADQAEAOABAYIAcACIABALQAAAJgBAFIgaABQABAXgEAJQgLAJglACQgRAAgPABIAAALQAUgDATgBIADAaIgpAFIAAALQAagDAdgCIACALIAAANQhIAKhKAEQgDgNgBgNgAC+hEIABAKQAZAAAZgCIgBgKQgaAAgYACgAC9hjQAYAAAZgBIgBgLQgXACgZgBIAAALgAktAAQgBgRADgOQCAgHB/ABQABAQgCAPQh5AGh3AAIgQAAgAjghZQABgQAEgPQAsAFAtAJQABAQgGAPIgFAAQgdAAg3gOg");
	this.shape_1.setTransform(4.9,-67.8,2.142,2.142);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("Aw+NlQhUAAg9gzQg7gzAAhHIAA1pQgBhLA2g3QA3g4B3AJMAhlAADQBZgFA7AzQA7AygCBOIAAVpQAABHg8AzQg8AzhVAAg");
	this.shape_2.setTransform(3.1,-40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3868A3").s().p("AvSLVQgqgsAAhBIAAzLQgBhCArgwQAsgwBRAFIawADQBJgFAtAvQAtAvgBBBIAATLIhcyVQgGgbgTgbQgmg3g9AAI4mAAQgogHgoANQhQAaAABeIAASCIACAUQADAZAFAWQAQBHAjASQhCAAgsgtg");
	this.shape_3.setTransform(3.1,-40.6,1.265,1.128);

	this.instance = new lib.Path_1();
	this.instance.setTransform(2.8,-63.4,0.637,0.569,0,0,0,202.2,112.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#5BDBF5","#0292D8","#1766CC","#5BDBF5"],[0.2,0.459,0.784,1],-2.7,75.9,0,-2.7,75.9,200.6).s().p("AtbMAQhCAAgwgtQgvgtAAhAIAAzLQAAhAAvgtQAvgtBDAAIa2AAQBDAAAvAtQAwAtAABAIAATLQAABAgwAtQgvAthDAAg");
	this.shape_4.setTransform(3.1,-40.4,1.265,1.128);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AwuNfQhWAAg/g1Qg9gzAAhLIAA2SQAAhGA3gyMAnKAaUQg6AphNAAg");
	this.shape_5.setTransform(-0.9,-37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AD9F9E").s().p("A0LssIAHgGQA+g1BXAAMAinAAAQBYAAA+A1QA+AzAABLIAAWSQAABKg+A0IgPAMg");
	this.shape_6.setTransform(5.6,-42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C7C2BF","#FFFFFF"],[0,1],98.4,78.4,-93.7,-74.6).s().p("AvbOZQhOAAg3g2Qg3g2AAhMIAA3BQAAhMA3g3QA3g1BOAAIe3AAQBOAAA3A1QA3A3AABMIAAXBQAABMg3A2Qg3A2hOAAg");
	this.shape_7.setTransform(3.8,-40,1.204,1.074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#74728A").s().p("AkuPsIucAAQhjAAhFg8QhHg8AAhUIAY5AQAAhUBGg8QBGg8BjAAMAlnAAAQBiAABGA8QBGA8AABUIAXZAQAABUhFA8QhHA8hiAAItYgBIAAAAQhzACksAAIkDgBg");
	this.shape_8.setTransform(3.3,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

	// 圖層 9
	this.instance_1 = new lib.電腦打字手2("synched",8);
	this.instance_1.setTransform(-89.8,143.8,0.7,0.7,4,0,0,82.7,120.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},11).wait(9));

	// 圖層 3
	this.instance_2 = new lib.電腦打字手3("synched",16);
	this.instance_2.setTransform(-105.3,106,0.808,0.808,-0.5,0,0,82.6,120.2);

	this.instance_3 = new lib.電腦打字手3("synched",16);
	this.instance_3.setTransform(123,105.5,0.809,0.809,0,-0.9,179.1,82.6,120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{regX:82.6,regY:120.2,scaleX:0.808,scaleY:0.808,rotation:-0.5,skewX:0,skewY:0,x:-105.3,y:106,startPosition:16}}]}).to({state:[{t:this.instance_2,p:{regX:124.8,regY:124.5,scaleX:0.699,scaleY:0.699,rotation:0,skewX:-13.4,skewY:166.6,x:57.8,y:128.5,startPosition:5}}]},5).to({state:[{t:this.instance_2,p:{regX:124.9,regY:124.6,scaleX:0.699,scaleY:0.699,rotation:0,skewX:1,skewY:-179,x:82.6,y:135.5,startPosition:12}}]},7).to({state:[{t:this.instance_2,p:{regX:124.7,regY:124.7,scaleX:0.7,scaleY:0.7,rotation:0,skewX:0,skewY:180,x:69.3,y:111.1,startPosition:0}}]},8).wait(5));

	// 圖層 7
	this.instance_4 = new lib.電腦打字手臂1("single",1);
	this.instance_4.setTransform(120,25,0.7,0.7,0,0,0,139,3.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(7).to({startPosition:2},0).wait(8).to({startPosition:0},0).wait(5));

	// 圖層 8
	this.instance_5 = new lib.電腦打字手2("synched",16);
	this.instance_5.setTransform(-50.8,128.8,0.7,0.7,-7.8,0,0,82.8,120.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(9));

	// 圖層 6
	this.instance_6 = new lib.電腦打字手臂2("single",1);
	this.instance_6.setTransform(-120,35,0.7,0.7,0,0,0,39.7,-1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(11).to({startPosition:2},0).wait(9));

	// 圖層 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#74728A").ss(0.3,0,0,4).p("AhQiAQAXgcAgAAIAyAAQAhAAAXAcQAWAdAAAoIAAB4QAAAogWAcQgXAcghAAIgyAAQggAAgXgcQgWgdAAgoIAAh3QAAgoAWgdg");
	this.shape_9.setTransform(6.1,69.1,0.7,0.7,0,0,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C7C2BF","#FFFFFF"],[0,1],4.5,-34.1,-4.5,32.9).s().p("AhQCBQgWgdAAgoIAAh3QAAgoAWgdQAXgcAgAAIAyAAQAhgBAXAdQAWAdAAAoIAAB4QAAAogWAcQgXAcghAAIgyAAQggAAgXgcg");
	this.shape_10.setTransform(6.1,69.1,0.7,0.7,0,0,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#74728A").ss(2,1,0,4).p("AEiAwIAAhfIpEACIAABR");
	this.shape_11.setTransform(6.3,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#74728A").ss(0.3,0,0,4).p("AkiiSIAAD5QDwBBD3gsQAwgIAtgMIAAju");
	this.shape_12.setTransform(6.3,80.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#C7C2BF","#FFFFFF"],[0,1],4.1,-37.3,-4,22.3).s().p("AkhCUIAAj5IAAhTIJDgCIAABhIAADuQguAMgvAIQhkAShhAAQiSAAiPgng");
	this.shape_13.setTransform(6.3,76.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DAD6D4","#FFFFFF"],[0.31,0.945],1.6,28.7,-0.6,-21.2).s().p("AxeCpQnlg7gOhcQgPhaHQhHQHPhGKfgIQKdgHHkA8QHlA8AOBcQAPBanQBGQnPBGqfAIIiRABQpCAAmug2g");
	this.shape_14.setTransform(5.5,86,0.504,0.504);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#74728A").ss(2,1,0,4).p("AqsiPQD+hDF+ADQHOAFEGA6QBtAYA9AfQA3AcAJAcQANAogpAqQgsAuhkAiQjwBTnNgFQnMgFj5g7Qjhg1gOhWQgHgnA8gnQA8gnBygeg");
	this.shape_15.setTransform(4,86.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DAD6D4","#FFFFFF"],[0,0.541],0.5,19.3,0.6,-12.2).s().p("AAlDPQnMgFj5g7Qjhg1gOhWQgHgnA8gnQA8gnBygeQD+hDF+ADQHOAFEGA6QBtAYA9AfQA3AcAJAcQANAogpAqQgsAuhkAiQjiBPmnAAIg0gBg");
	this.shape_16.setTransform(4,86.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#74728A").ss(0.3,0,0,4).p("A6oiUQB2hODjg7QH5iGL1AHQOVAJIKB0QDXAwB6A9QBsA3ASA4QAbBShRBTQhZBajGBFQnbCluTgKQuUgKnuh1Qm+hqgcisQgNhOB3hNg");
	this.shape_17.setTransform(4,89.5,0.504,0.504);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#74728A").s().p("ABKGcQuUgKnuh1Qm+hqgcisQgNhOB3hNQB2hODjg7QH5iGL1AHQOVAJIKB0QDXAwB6A9QBsA3ASA4QAbBShRBTQhZBajGBFQnACctHAAIhngBg");
	this.shape_18.setTransform(4,89.5,0.504,0.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(25));

	// 圖層 5
	this.instance_7 = new lib.電腦打字鍵盤("single",0);
	this.instance_7.setTransform(5,160.2,1,1,0,0,0,176.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.4,-140,356.8,345.8);


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


(lib.雲動3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.btn04();
	this.instance.setTransform(20.7,125.1,0.522,0.522,0,0,0,144.8,93.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:147.8},19).to({y:125.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-17.3,260,210);


(lib.雲動2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.btn01();
	this.instance.setTransform(-72.7,231.9,0.641,0.641,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:223},14).to({y:231.9},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-31.5,158,141.6);


(lib.雲動1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.補間動畫1("synched",0);
	this.instance.setTransform(60.6,45.8);

	this.instance_1 = new lib.補間動畫2("synched",0);
	this.instance_1.setTransform(60.6,27.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫3("synched",0);
	this.instance_2.setTransform(60.6,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:27.8},11).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11).to({_off:true,y:45.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-106.6,349.1,304.8);


(lib.學校動 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.學校();
	this.instance.setTransform(86,64.5,1,1,0,0,0,86,64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.1,129.2);


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


(lib.btn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.電腦打字();
	this.instance.setTransform(171.3,-264.4,0.957,0.957,3.2,0,0,8.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-414.6,347.4,348.1);


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


(lib.地球動 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374049").s().p("AkbCFIAAkJII3AAIAAEJg");
	this.shape.setTransform(-22.4,89.5,0.182,0.182,-68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374049").s().p("AkbCFIAAkJII3AAIAAEJg");
	this.shape_1.setTransform(-27.2,101.8,0.182,0.182,-68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374049").s().p("AkbCFIAAkJII3AAIAAEJg");
	this.shape_2.setTransform(-32.1,114,0.182,0.182,-68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374049").s().p("AkcCFIAAkJII5AAIAAEJg");
	this.shape_3.setTransform(-36.9,126.3,0.182,0.182,-68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#374049").s().p("AkcCFIAAkJII5AAIAAEJg");
	this.shape_4.setTransform(-41.8,138.5,0.182,0.182,-68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#374049").s().p("AkcCFIAAkJII5AAIAAEJg");
	this.shape_5.setTransform(-46.6,150.8,0.182,0.182,-68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_6.setTransform(-5.9,78.1,0.182,0.182,-68.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_7.setTransform(5.3,82.5,0.182,0.182,-68.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#374049").s().p("AkcDVIAAmqII5AAIAAGqg");
	this.shape_8.setTransform(16.4,86.9,0.182,0.182,-68.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#374049").s().p("AqGDVIAAmpIUNAAIAAGpg");
	this.shape_9.setTransform(-14.4,99.7,0.182,0.182,-68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#374049").s().p("AkbDVIAAmpII3AAIAAGpg");
	this.shape_10.setTransform(-21.7,118.1,0.182,0.182,-68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_11.setTransform(-26.5,130.4,0.182,0.182,-68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_12.setTransform(-31.4,142.6,0.182,0.182,-68.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_13.setTransform(-36.2,154.9,0.182,0.182,-68.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#374049").s().p("AkbDVIAAmpII3AAIAAGpg");
	this.shape_14.setTransform(-0.8,98,0.182,0.182,-68.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#374049").s().p("AkbDVIAAmpII3AAIAAGpg");
	this.shape_15.setTransform(-5.7,110.3,0.182,0.182,-68.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#374049").s().p("AkbDVIAAmpII3AAIAAGpg");
	this.shape_16.setTransform(-10.5,122.5,0.182,0.182,-68.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_17.setTransform(-15.4,134.8,0.182,0.182,-68.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_18.setTransform(-20.2,147,0.182,0.182,-68.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#374049").s().p("AkcDVIAAmpII5AAIAAGpg");
	this.shape_19.setTransform(-25,159.3,0.182,0.182,-68.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#374049").s().p("AkbDVIAAmqII3AAIAAGqg");
	this.shape_20.setTransform(10.3,102.4,0.182,0.182,-68.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#374049").s().p("AkbDVIAAmqII3AAIAAGqg");
	this.shape_21.setTransform(5.5,114.7,0.182,0.182,-68.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#374049").s().p("AvwDVIAAmqIfhAAIAAGqg");
	this.shape_22.setTransform(-4.2,139.2,0.182,0.182,-68.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#374049").s().p("AkcDVIAAmqII5AAIAAGqg");
	this.shape_23.setTransform(-13.9,163.7,0.182,0.182,-68.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C2C5C7").s().p("Ego7AYNQiTAAhohoQhphpAAiTMAAAgmzQAAhrBMhMQBLhLBrAAMBU7AAAQBrAABLBLQBMBMAABrMAAAAmzQAACThpBpQhoBoiTAAg");
	this.shape_24.setTransform(-13.5,119.5,0.182,0.182,-68.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A3A7AB").s().p("Ego7AYNQiTABhohpQhphpAAiTMAAAgmzQAAhrBMhMQBLhMBrABMBU7AAAQBrgBBLBMQBMBMAABrMAAAAmzQAACThpBpQhoBpiTgBg");
	this.shape_25.setTransform(-8.4,121.5,0.182,0.182,-68.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D666F").s().p("AuJNJIAAnQQAAjqCmikQCmimDqAAIKnAAQChAABxhxQByhyAAigIAAkKICyAAIAAEKQAADqimCmQimCljqAAIqnAAQihAAhxBwQhyByABCgIAAHQg");
	this.shape_26.setTransform(-48.6,89.8,0.182,0.182,-68.5);

	// 圖層 1
	this.instance = new lib.Print_0();
	this.instance.setTransform(385.4,435.9,1,1,172.8);

	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(62.4,368.3,0.739,0.792,-146.7,0,0,43.2,26.8);

	this.instance_2 = new lib.document_sspng();
	this.instance_2.setTransform(136.8,455.4,0.483,0.483,-161);

	this.instance_3 = new lib.wordoo();
	this.instance_3.setTransform(1.7,-3.5,0.333,0.333,-32.2);

	this.instance_4 = new lib.photossspng();
	this.instance_4.setTransform(464.4,89.5,0.836,0.76,79.9);

	this.instance_5 = new lib.電腦();
	this.instance_5.setTransform(411.1,279.2,0.88,0.88,94.3,0,0,80.5,42.5);

	this.instance_6 = new lib.地球();
	this.instance_6.setTransform(195.3,195.2,1,1,0,0,0,195.3,195.2);

	this.instance_7 = new lib.城市();
	this.instance_7.setTransform(320.4,34,0.516,0.516,9.5,0,0,104.6,80.5);
	this.instance_7.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, -43, 43, 115, 0)];
	this.instance_7.cache(-2,-2,213,165);

	this.instance_8 = new lib.城市複製();
	this.instance_8.setTransform(218.3,422,0.577,0.577,145.7,0,0,104.8,80.8);
	this.instance_8.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, -43, 43, 115, 0)];
	this.instance_8.cache(55,-2,156,165);

	this.instance_9 = new lib.城市();
	this.instance_9.setTransform(-3.6,275.8,0.614,0.614,-145.8,0,0,104.6,81);
	this.instance_9.filters = [new cjs.ColorFilter(0.84, 0.84, 0.84, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-2,-2,213,165);

	this.instance_10 = new lib.學校動();
	this.instance_10.setTransform(195.6,-30.1,0.888,1,0,0,0,86,64.5);
	this.instance_10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 23, 0))];
	this.instance_10.cache(-2,-2,176,133);

	this.instance_11 = new lib._101();
	this.instance_11.setTransform(344.5,97.1,0.292,0.19,0,37,38.2,57.4,837);
	this.instance_11.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 36, 0))];
	this.instance_11.cache(-2,-2,230,811);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,-94.6,567.8,589.1);


(lib.地球合圖 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.書名();
	this.instance.setTransform(305.5,199.2,0.999,0.999,0,0,0,258.1,78.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282));

	// 圖層 1
	this.instance_1 = new lib.地球動();
	this.instance_1.setTransform(315.1,292,1,1,0,0,0,195.3,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-360},281).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.1,2.2,567.8,589.1);


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
p.nominalBounds = new cjs.Rectangle(98.7,5.3,54.4,40.3);


(lib.雲動5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.btn03();
	this.instance.setTransform(105.5,173,0.659,0.659,0,0,0,144.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:157.9},14).to({y:173},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-161.9,229.1,229.5);


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
		
		this.button_x.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.rock-jj.com.tw/stone.htm", "_blank");
		}
		playSound("Splashing_Around",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.instance = new lib.書本秀地球();
	this.instance.setTransform(613,331.7,1.237,1.237,0,0,0,307.1,269.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.button_x = new lib.rocklogo();
	this.button_x.setTransform(1066.7,48.1,1,1,0,0,0,77.3,31.4);
	new cjs.ButtonHelper(this.button_x, 0, 1, 2, false, new lib.rocklogo(), 3);

	this.button_2 = new lib.校園LOGO();
	this.button_2.setTransform(1186.9,49.2,0.21,0.205,0,0,0,157.9,158.1);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_2},{t:this.button_x}]}).wait(1));

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
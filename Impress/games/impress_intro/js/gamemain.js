(function() {
    window.onload = function() {
        var canvas, stage, exportRoot;

        canvas = document.getElementById("canvas");
        images = images || {};

        var manifest = [
            { src: "images/impress.jpg", id: "impress" },
			{ src: "images/o1.png", id: "o1" },
			{ src: "images/o2.png", id: "o2" },
			{ src: "images/o3.png", id: "o3" },
			{ src: "images/o4.png", id: "o4" },
			{ src: "images/o5.png", id: "o5" },
			{ src: "images/o6.png", id: "o6" },
			{ src: "images/t1.jpg", id: "t1" },
			{ src: "sounds/s0.mp3", id: "s0" },
			{ src: "sounds/s1.mp3", id: "s1" },
			{ src: "sounds/s2.mp3", id: "s2" },
			{ src: "sounds/s3.mp3", id: "s3" },
			{ src: "sounds/s4.mp3", id: "s4" },
			{ src: "sounds/s5.mp3", id: "s5" },
			{ src: "sounds/s6.mp3", id: "s6" },
			{ src: "sounds/s7.mp3", id: "s7" },
			{ src: "sounds/s8.mp3", id: "s8" }
        ];
        
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]); 
        var loader = new createjs.LoadQueue(false);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(manifest);

        function handleFileLoad(evt) {
            if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
        }

        function handleComplete() {
            exportRoot = new lib.game();

            stage = new createjs.Stage(canvas);
			
            stage.addChild(exportRoot);
            stage.update();
            stage.enableMouseOver();


            createjs.Ticker.setFPS(10);
            createjs.Ticker.addEventListener("tick", stage);
        }


    }
})();
(function(){
    
    angular.module("sharedModule")
    .service("screenService", screenService);
    
    //expose common canvas services
    function screenService(){
        
        this.setCanvasDPI = setCanvasDPI;
        this.centerThis = centerThis;  
        this.logPosition = logPosition;
        this.clicksound = clicksound;
    }
    
    
   var clicksound = function clicksound(){
           // if initializeDefaultPlugins returns false, we cannot play sound in this browser           
           createjs.Sound.registerSound("sounds/click.mp3", "mysoundID",1);
           var instance = createjs.Sound.play("mysoundID");
            // set the sound volume
             instance.volume = 1;
    }
    
   
    
    //sets resolution and size on canvas passed and returns canvas
    var setCanvasDPI= function(canvas,width,height){
            var ctx = document.createElement("canvas").getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
            
            ratio = dpr / bsr;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
            return canvas;
    }
    
    //returns object centered on canvas
    var centerThis = function(canvas, myObject){ 
        var b =myObject.getBounds();  
        myObject.x = canvas.width/2 - b.width/2; 
        myObject.y = canvas.height/2 - b.height/2;
        return myObject;
    }
    
    var logPosition = function(myObject){
        console.log(""+myObject.getBounds ());
    }
    
})();
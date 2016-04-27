(function(){
    
    angular.module("memoryApp")
    .controller("newGameController", newGameController);
    
    newGameController.$inject = ["$scope"];
    
    function newGameController($scope){
       
        $scope.runThis= function() {//this is newGameCanvas
            
            var canvas =document.getElementById("demoCanvas");
           
             var ctx = document.createElement("canvas").getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1;
            
            ratio = dpr / bsr;
              canvas.width = 800 * ratio;
            canvas.height = 600 * ratio;
            canvas.style.width = 800 + "px";
            canvas.style.height = 600 + "px";
            canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);

            context =canvas.getContext("2d");
            canvas.style.backgroundColor = 'rgba(0, 255, 127, 0.8)';
            var stage = new createjs.Stage("demoCanvas");
            
            var text = new createjs.Text("Memory", "bold 120px Lato", "#f8f3f5");
            var text2 = new createjs.Text("start", "bold 30px Lato", "#000000");           
            
            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -53, canvas.height/2+58, 106, 34);
            var shape = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 - 49, canvas.height/2+61, 98, 28);
            var shape2 = new createjs.Shape(graphics);
            
            text = centerThis(canvas,text);
            text.y = text.y - 20;
            text2 = centerThis(canvas,text2);
            text2.y = text2.y + 75;
            
            buttonContainer = new createjs.Container();
            buttonContainer.addChild(shape,shape2,text2);
            
            buttonContainer.addEventListener("click", function(event) {
                graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(0, 0, canvas.width, canvas.height);
                var shape3 = new createjs.Shape(graphics);               
                var img = new Image();  
                img.src = "/images/yeoman.png"; // image from folder        
                var loading_img = new createjs.Bitmap(img);                  
                
                stage.addChild(shape3);
                 stage.addChild(loading_img);
                stage.update(); });
            
            stage.addChild(text);
            stage.addChild(buttonContainer);
            stage.update();
    }
        
    }//end Game Contoleer
    
    //takes canvas and object and returns object with position centered on canvas
    function centerThis(canvas, myObject){ 
        var b =myObject.getBounds();  
        myObject.x = canvas.width/2 - b.width/2; 
        myObject.y = canvas.height/2 - b.height/2;
        return myObject;
    }
    
})();
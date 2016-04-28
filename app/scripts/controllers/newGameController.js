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

            var img = new Image();  
            img.src = "images/newGameCard.png"; // image from folder  
            img.onload = function() {
                loadimages();
            }
            
            function loadimages(){
                var cornercards = new createjs.Bitmap(img);
                    cornercards.x=-2;
                    cornercards.y=20;
                    cornercards.scaleX=0.5;
                    cornercards.scaleY=0.5;
                    cornercards.rotation= -30;

                var cornercards2 = new createjs.Bitmap(img);
                    cornercards2.x=canvas.width-46;
                    cornercards2.y=-10;
                    cornercards2.scaleX=0.5;
                    cornercards2.scaleY=0.5;
                    cornercards2.rotation= 30;

                var cornercards3 = new createjs.Bitmap(img);
                    cornercards3.x=50;
                    cornercards3.y=canvas.height+10;
                    cornercards3.scaleX=0.5;
                    cornercards3.scaleY=0.5;
                    cornercards3.rotation= -150;

                var cornercards4 = new createjs.Bitmap(img);
                    cornercards4.x=canvas.width+8;
                    cornercards4.y=canvas.height-20;
                    cornercards4.scaleX=0.5;
                    cornercards4.scaleY=0.5;
                    cornercards4.rotation= 150;
                
                stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
            }
            
            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -50, canvas.height/2+60, 100, 30);
            var shape = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 - 49, canvas.height/2+61, 98, 28);
            var shape2 = new createjs.Shape(graphics);
            
            
            
            
            text = centerThis(canvas,text);        
            text2 = centerThis(canvas,text2);
            text2.y = text2.y+75;
            stage.enableMouseOver(10);
            
            textContainer = new createjs.Container();
            text.shadow=new createjs.Shadow("#000000", 5, 5, 10);
            textContainer.addChild(text);
            textContainer.shadow=new createjs.Shadow("#000000", 5, 5, 10);
            buttonContainer = new createjs.Container();
            buttonContainer.addChild(shape,shape2,text2);
            buttonContainer.cursor = "pointer";
            shape.shadow=shadow=new createjs.Shadow("#000000", 5, 5, 10);
            butWidth=buttonContainer.getBounds.width;
            butHeight=buttonContainer.getBounds.height;
           
            buttonContainer.addEventListener("click", function(event) {

                 });

            buttonContainer.on("mouseover", alterTheButton);
             buttonContainer.on("mouseout", changeButtonBack);
            
            function alterTheButton(event) {
                buttonContainer.alpha=0.8
            }
            
               function changeButtonBack(event) {
                buttonContainer.alpha=1
            }
            
            stage.addChild(text);
            stage.addChild(buttonContainer);
            
            createjs.Ticker.setInterval(25);
            createjs.Ticker.setFPS(10);
            createjs.Ticker.addEventListener("tick", tick);
            
            function tick(event) { 
                 text.shadow=new createjs.Shadow("#000000", 5, 5, 10);
                stage.update();
            }

            
            stage.addChild(textContainer,buttonContainer);
            stage.enableMouseOver();
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
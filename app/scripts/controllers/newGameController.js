(function(){
    
    angular.module("memoryApp")
    .controller("newGameController", newGameController);
    
    newGameController.$inject = ["$scope","screenService"];
    
    function newGameController($scope,screenService){
       
        $scope.runThis= function() {//this is newGameCanvas
            
            var canvas =document.getElementById("demoCanvas");
            canvas = screenService.setCanvasDPI(canvas,800,600);
            

            context =canvas.getContext("2d");
            canvas.style.backgroundColor = 'rgba(0, 255, 127, 0.8)';
            var stage = new createjs.Stage("demoCanvas");  
            var text = new createjs.Text("Memory", "bold 120px Lato", "#f8f3f5");
            var text2 = new createjs.Text("start", "bold 30px Lato", "#000000");           

            var img = new Image();  
            img.src = "images/newGameCard.png"; // image from folder  
            
           
                 cornercards = new createjs.Bitmap(img);
                 cornercards.x=-2;
                 cornercards.y=20;
                 cornercards.scaleX=0.5;
                 cornercards.scaleY=0.5;
                 cornercards.rotation= -30;

                 cornercards2 = new createjs.Bitmap(img);
                    cornercards2.x=canvas.width-46;
                    cornercards2.y=-10;
                    cornercards2.scaleX=0.5;
                    cornercards2.scaleY=0.5;
                    cornercards2.rotation= 30;

                 cornercards3 = new createjs.Bitmap(img);
                    cornercards3.x=50;
                    cornercards3.y=canvas.height+10;
                    cornercards3.scaleX=0.5;
                    cornercards3.scaleY=0.5;
                    cornercards3.rotation= -150;

                cornercards4 = new createjs.Bitmap(img);
                    cornercards4.x=canvas.width+8;
                    cornercards4.y=canvas.height-20;
                    cornercards4.scaleX=0.5;
                    cornercards4.scaleY=0.5;
                    cornercards4.rotation= 150;
            
            img.onload =function(){
                stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
                stage.update();
            }
            stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
                   
            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -50, canvas.height/2+60, 100, 30);
            var shape = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 - 49, canvas.height/2+61, 98, 28);
            var shape2 = new createjs.Shape(graphics);
            
            
            
            text.shadow=new createjs.Shadow("#000000", 5, 5, 10);
            text = screenService.centerThis(canvas,text);      
            text2 = screenService.centerThis(canvas,text2);
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
                var speed=1000;
              createjs.Tween.get(cornercards4, { loop: true })
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:510 }, speed, createjs.Ease.getPowInOut(4))
                 
                createjs.Tween.get(cornercards3, { loop: true })
                .to({ x: -2, y:20, rotation:-30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                
                createjs.Tween.get(cornercards, { loop: true })
                
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                
                 createjs.Tween.get(cornercards2, { loop: true })
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                 .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4))
            });

            buttonContainer.on("mouseover", alterTheButton);
             buttonContainer.on("mouseout", changeButtonBack);
            
            function alterTheButton(event) {
                buttonContainer.alpha=0.8
            }
            
               function changeButtonBack(event) {
                buttonContainer.alpha=1
            }
            
            createjs.Ticker.setInterval(25);
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", tick);
           
            
            createjs.Ticker.addEventListener("tick", stage);
     
            
            function tick(event) { 
                //buttonContainer.setBounds(370+x,380)
                //screenService.logPosition(buttonContainer)
                //createjs.Tween.get(buttonContainer).to({alpha:1}, 1000).call(handleComplete);
                //stage.update();
               
            }
            
            stage.addChild(textContainer);
            stage.addChild(buttonContainer);
            stage.enableMouseOver();
            stage.update();
    }
        
    }//end Game Contoleer

    
})();
(function(){
    
    angular.module("memoryApp")
    .controller("newGameController", newGameController);
    
    newGameController.$inject = ["$scope"];
    
    function newGameController($scope){
       
        $scope.runThis= function() {//this is newGameCanvas
            
            var canvas =document.getElementById("demoCanvas");
            canvas.style.backgroundColor = 'rgba(0, 255, 127, 0.8)';
            var stage = new createjs.Stage("demoCanvas");  
            var text = new createjs.Text("Memory", "bold 40px Lato", "#f8f3f5");
            var text2 = new createjs.Text("Start", "bold 10px Lato", "#000000");           
            
            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -16, canvas.height/2+20, 32, 11);
            var shape = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 -15, canvas.height/2+21, 30, 9);
            var shape2 = new createjs.Shape(graphics);
            
            text = centerThis(canvas,text);        
            text2 = centerThis(canvas,text2);
            text2.y = text2.y+25;
            text2.addEventListener("click", function(event) { alert("clicked"); });
            shape.addEventListener("click", function(event) { alert("clicked"); });
            shape2.addEventListener("click", function(event) { alert("clicked"); });           
          
            stage.addChild(text);
            stage.addChild(shape);
            stage.addChild(shape2);
            stage.addChild(text2);
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
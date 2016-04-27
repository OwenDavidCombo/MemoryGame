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
           
            text=centerThis(canvas,text);
   
          
            stage.addChild(text);
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
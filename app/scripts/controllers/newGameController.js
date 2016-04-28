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
             var text3 = new createjs.Text("options", "bold 30px Lato", "#000000");       
            
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
            
            
            
            var img2 = new Image(); 
            img2.src = "images/table2.jpg";
            background = new createjs.Bitmap(img2);
            background.scaleX=background.scaleY=2;

            img.onload =function(){
                stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
                stage.update();
            }
            stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
                   

            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -50, canvas.height/2+60, 100, 30);
            var shape = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 - 49, canvas.height/2+61, 98, 28);
            var shape2 = new createjs.Shape(graphics);
            
            
            
            var graphics = new createjs.Graphics().beginFill("#000000").drawRect(canvas.width/2 -50, canvas.height/2+113, 100, 30);
            var shape3 = new createjs.Shape(graphics);

            graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(canvas.width/2 - 49, canvas.height/2+114, 98, 28);
            var shape4 = new createjs.Shape(graphics);
            
            
            
            text.shadow=new createjs.Shadow("#000000", 5, 5, 10);
            text = screenService.centerThis(canvas,text);
            text2 = screenService.centerThis(canvas,text2);
            text2.y = text2.y+75;
            text3 = screenService.centerThis(canvas,text3);
            text3.y = text3.y+125;
            
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
           
            buttonContainer2 = new createjs.Container();
            buttonContainer2.addChild(shape3,shape4,text3);
            buttonContainer2.cursor = "pointer";
            shape3.shadow=shadow=new createjs.Shadow("#000000", 5, 5, 10);
            butWidth2=buttonContainer2.getBounds.width;
            butHeight2=buttonContainer2.getBounds.height;
        
            
            buttonContainer2.addEventListener("click",function(event){
                    stage.removeAllChildren();
                    stage.addChild(background);
                    stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
                    stage.addChild(textContainer);
               
                        var speed=1000;
                createjs.Tween.get(cornercards4, { loop: false })
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:510 }, speed, createjs.Ease.getPowInOut(4))
                 
                createjs.Tween.get(cornercards3, { loop: false })
                .to({ x: -2, y:20, rotation:-30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                
                createjs.Tween.get(cornercards, { loop: false })
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                
                 createjs.Tween.get(cornercards2, { loop: false })
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                 .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4))
               
                stage.clear();                                  
            });
                                   
            buttonContainer.addEventListener("click", function(event) {
             var speed=1000;
                 screenService.setCookie("volume","0","30");
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

                
                animateCards(stage,canvas,cornercards,cornercards2,cornercards3,cornercards4)
                
            });

            buttonContainer.on("mouseover", alterTheButton);
             buttonContainer.on("mouseout", changeButtonBack);
            buttonContainer2.on("mouseover", alterTheButton);
             buttonContainer2.on("mouseout", changeButtonBack);
            
            
            function alterTheButton(event) {
                event.currentTarget.alpha=0.8;
                function clicksound(){
                   // if initializeDefaultPlugins returns false, we cannot play sound in this browser           
                    createjs.Sound.registerSound("sounds/music.mp3", "mysoundID",1);
                    createjs.Sound.play("mysoundID");
                   
                }

                screenService.clicksound();

            }
            
               function changeButtonBack(event) {
                event.currentTarget.alpha=1
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
            
            stage.addChild(background);

           
            stage.addChild(cornercards,cornercards2,cornercards3,cornercards4);
            stage.addChild(textContainer);
            stage.addChild(buttonContainer);
            stage.addChild(buttonContainer2);
            stage.enableMouseOver();
            stage.update();
            
          screenService.setCookie("volume","1","30");
            
    }
        
    }//end Game Contoleer
    
    animateCards =function(stage,canvas,cornercards,cornercards2,cornercards3,cornercards4){
        var speed=1000;
        createjs.Tween.get(cornercards4, { loop: false })
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:510 }, speed, createjs.Ease.getPowInOut(4))
                 
                createjs.Tween.get(cornercards3, { loop: false })
                .to({ x: -2, y:20, rotation:-30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                
                createjs.Tween.get(cornercards, { loop: false })
                .to({ x: canvas.width-46, y:-10, rotation:30 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                
                 createjs.Tween.get(cornercards2, { loop: false })
                .to({ x: canvas.width+8, y:canvas.height-20, rotation:150 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: 50, y:canvas.height+10, rotation:210 }, speed, createjs.Ease.getPowInOut(4))
                .to({ x: -2, y:20, rotation:330 }, speed, createjs.Ease.getPowInOut(4))
                 .to({ x: canvas.width-46, y:-10, rotation:390 }, speed, createjs.Ease.getPowInOut(4)).call(function(){
                     stage.clear();
                     startGame(stage,canvas);
                 })
    }
    
    startGame=function(stage,canvas){
        stage.removeAllChildren();
        stage.clear();
        deck=createNewDeck();
        deck=shuffle(deck);
        
        imageContainer = new createjs.Container();
		imageContainer.x = 3;
		imageContainer.y = 30;
        var j=0;
        for (i = 0; i < cardImages.length; i++) {
            if(((i%13) == 0) && i != 0){
                    j+=1;
            }
            cardImage=deck[i]["cardImage"];
            cardImage.x=((i%13)*60)+10;
            cardImage.y=(j*82)+40;
        }
        
        stage.addChild(background);
        stage=dealCards(stage,deck,imageContainer);
        
        console.log(deck);
       
    }
    
    dealCards=function(stage,deck){
        for (i = 0; i < cardImages.length; i++) {         
            imageContainer.addChild(deck[i]["cardImage"])
        }
        stage.addChild(imageContainer)
        return stage;
    }
    
    createNewDeck=function(){
          deck=[];
 
          for (i = 0; i < cardImages.length; i++) {
                cardImg = new Image();
                cardImg.src="images/cards/"+cardImages[i]+"";
                cardImage = new createjs.Bitmap(cardImg);
                cardImage.scaleX=50/500;
                cardImage.scaleY=72/726;
                
                cardImage.shadow=new createjs.Shadow("#000000", 5, 5, 10);
                cardImage.addEventListener("click", cardClicked)
                deck.push(Card(cardImages[i],cardImage));
              

          }
          return deck;
    }
    
    cardClicked =function(event){
        
    } 
    
    Card = function(imgName,cardImage){
        return{
            "value" : imageToValue[imgName],
            "imgName": imgName,
            "cardImage": cardImage,  
            "matchesThisCard" : function(Card){   
                if(value == Card.value){
                     if(this.xPosition!=Card.xPosition && this.yPosition != Card.yPosition){
                         return true;
                      } 
                }
                 return false;  
            }
        }
    }//end Card Function
    
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
     }//end shuffle function
    
    cardValues=["2","3","4","5","6","7","8","9","10","j","q","k","a"];
    cardImages=[ "10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png", "10_of_spades.png", "2_of_clubs.png", "2_of_diamonds.png", "2_of_hearts.png", "2_of_spades.png", "3_of_clubs.png", "3_of_diamonds.png", "3_of_hearts.png", "3_of_spades.png", "4_of_clubs.png", "4_of_diamonds.png", "4_of_hearts.png", "4_of_spades.png", "5_of_clubs.png", "5_of_diamonds.png", "5_of_hearts.png", "5_of_spades.png", "6_of_clubs.png", "6_of_diamonds.png", "6_of_hearts.png", "6_of_spades.png", "7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png", "7_of_spades.png", "8_of_clubs.png", "8_of_diamonds.png", "8_of_hearts.png", "8_of_spades.png", "9_of_clubs.png", "9_of_diamonds.png", "9_of_hearts.png", "9_of_spades.png", "ace_of_clubs.png", "ace_of_diamonds.png", "ace_of_hearts.png", "ace_of_spades.png", "jack_of_clubs.png", "jack_of_diamonds.png", "jack_of_hearts.png", "jack_of_spades.png", "king_of_clubs.png", "king_of_diamonds.png", "king_of_hearts.png", "king_of_spades.png", "queen_of_clubs.png", "queen_of_diamonds.png", "queen_of_hearts.png", "queen_of_spades.png"];
    
    imageToValue={
        
        "10_of_clubs.png" : "10",
        "10_of_diamonds.png" : "10",
        "10_of_hearts.png" : "10",
        "10_of_spades.png" : "10",
        "2_of_clubs.png" : "2",
        "2_of_diamonds.png" : "2",
        "2_of_hearts.png" : "2",
        "2_of_spades.png" : "2",
        "3_of_clubs.png" : "3",
        "3_of_diamonds.png" : "3",
        "3_of_hearts.png" : "3",
        "3_of_spades.png" : "3",
        "4_of_clubs.png" : "4",
        "4_of_diamonds.png" : "4",
        "4_of_hearts.png" : "4",
        "4_of_spades.png" : "4",
        "5_of_clubs.png" : "5",
        "5_of_diamonds.png" : "5",
        "5_of_hearts.png" : "5",
        "5_of_spades.png" : "5",
        "6_of_clubs.png" : "6",
        "6_of_diamonds.png" : "6",
        "6_of_hearts.png" : "6",
        "6_of_spades.png" : "6",
        "7_of_clubs.png" : "7",
        "7_of_diamonds.png" : "7",
        "7_of_hearts.png" : "7",
        "7_of_spades.png" : "7",
        "8_of_clubs.png" : "8",
        "8_of_diamonds.png" : "8",
        "8_of_hearts.png" : "8",
        "8_of_spades.png" : "8",
        "9_of_clubs.png" : "9",
        "9_of_diamonds.png" : "9",
        "9_of_hearts.png" : "9",
        "9_of_spades.png" : "9",
        "ace_of_clubs.png" : "a",
        "ace_of_diamonds.png" : "a",
        "ace_of_hearts.png" : "a",
        "ace_of_spades.png" : "a",
        "jack_of_clubs.png" : "j",
        "jack_of_diamonds.png" : "j",
        "jack_of_hearts.png" : "j",
        "jack_of_spades.png" : "j",
        "king_of_clubs.png" : "k",
        "king_of_diamonds.png" : "k",
        "king_of_hearts.png" : "k",
        "king_of_spades.png" : "k",
        "queen_of_clubs.png" : "q",
        "queen_of_diamonds.png" : "q",
        "queen_of_hearts.png" : "q",
        "queen_of_spades.png" : "q"

    }
    
})();
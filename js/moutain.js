
    var stage;
    function init(){
        stage = new createjs.Stage("canvas");
 
          var duck = new createjs.Bitmap("/img/duck.png");
         duck.x = 50;
         duck.y = 150;
   



        stage.addChild(duck);
 


 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }

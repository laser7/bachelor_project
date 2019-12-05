
    var stage;
    function init(){
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage("canvas");
        var startSeite = new createjs.Container();
        var playSeite = new createjs.Container();

        playSeite.visible = false;
 
          var bg = new createjs.Bitmap("/img/bg20.png");
         bg.x = 0;
         bg.y = 0;
   
        var bottom = new createjs.Bitmap("/img/bg21.png");
        bottom.x = 0;
        bottom.y = 450;

        var bottom2 = new createjs.Bitmap("/img/bg21.png");
        bottom2.x = 1300;
        bottom2.y = 450;
        
      var bottomTimer = window.setInterval(move,50);
        function move(){
        bottom.x = bottom.x -2;
        bottom2.x = bottom2.x -2 ;
    
        if(bottom.x == -1300){
          bottom.x = 1300;
        }
        if(bottom2.x == -1300){
          bottom2.x = 1300;
        }
      }

        var start = new createjs.Bitmap("/img/start.jpg");
        start.x = 550;
        start.y = 300;
        start.addEventListener("click",function(e){
        
         startSeite.visible = false;
         playSeite.visible = true;
       
     });

  
 
    
    //    var alive = true;
      
     
      
        
        var dataSonic = new createjs.SpriteSheet({
          "images": ["/img/sonic.png"],
          "frames": {"regX": 0, "height": 64, "count": 9, "regY": 0, "width": 64},
          "animations": {
            "up": [0,2,"up"],
            "straight": [3, 5, "straight"],
            "down": [6, 8, "down"]
          }
        });
        sonicN = new createjs.Sprite(dataSonic, "straight");  
        sonicN.x = 200;
      
        sonicN.speed = 0;
        
        window.addEventListener('keydown',keyOper, true);

    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 32){
           sonicN.speed -=80;
        } }

        window.addEventListener('click', mausOper, true);

        function mausOper(){
          sonicN.speed -=80;
        }

        var flyTimer = window.setInterval(fly,24);

        function fly(){
          sonicN.y = 250;
          sonicN.y+= sonicN.speed;
          sonicN.speed+=4;
          if(sonicN.y < 1){
            speed = 6;
          }
       
        }
        function dead(){
          sonicN.alive = false;
        }

        stage.addChild(bg);
        stage.addChild(bottom);
        stage.addChild(bottom2);
        startSeite.addChild(start);
        stage.addChild(startSeite);

        playSeite.addChild(sonicN);
     
        stage.addChild(playSeite);

       

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick',tick);
 

    }
 


    function tick(event){
      
      stage.update(event);
    }
    
(function(){
  new init();
}(init));
 
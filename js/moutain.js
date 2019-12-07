
    var stage;
    function init(){
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage("canvas");
        var startSeite = new createjs.Container();
        var playSeite = new createjs.Container();

     //   startseite und Seite wechseln
 
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
        
        
        stage.removeChild(startSeite);
     
       playSeite.addChild(sonicN);
       stage.addChild(playSeite);
       stage.addChild(pipe1);
       stage.addChild(pipe2);
       stage.addChild(pipe3);  
       
       var flyTimer = window.setInterval(fly,24);
       var pipeTimer = window.setInterval(pipeMove,60);
    //   var crashTimer = window.setInterval(crashTest,60);
     
      
      
       
     });

  
 
    
    //   Sonic Teil
      
     
      
        
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
      
           
           crashTest(pipeUp,pipeDown);
           crashTest(pipeUp2,pipeDown2);
           crashTest(pipeUp3,pipeDown3);
        } }

        window.addEventListener('click', mausOper, true);

        function mausOper(){
          sonicN.speed -=80;
          crashTest(pipeUp,pipeDown);
          crashTest(pipeUp2,pipeDown2);
          crashTest(pipeUp3,pipeDown3);
        }

        function fly(){
          sonicN.y = 200;
          sonicN.y+= sonicN.speed;

          sonicN.speed+=4;
          crashTest();
          if(sonicN.y < 1){
            speed = 6;
          }
          
       
        }
        function dead(){
          sonicN.alive = false;
        }

// pipe Teil
    var pipe1 = new createjs.Container();
    var pipe2 = new createjs.Container();
    var pipe3 = new createjs.Container();
   


      var px = 500;
      var px2 = 900;
      var px3 = 1300;
     // var pyUp, pyDown;
      var upHeight = Math.floor(Math.random()*60);
      var downHeight = (60 - upHeight)*3;
     // pyUp = upHeight*3 + pipeUp.height;
     // pyDown = 540- downHeight;


     var upHeight2 = Math.floor(Math.random()*60);
     var downHeight2 = (60 - upHeight2)*3;
     var upHeight3 = Math.floor(Math.random()*60);
     var downHeight3 = (60 - upHeight3)*3;

      var pipeUp = new createjs.Bitmap("/img/pipes-up.png");  // nach unten
      var pipeUp2 = new createjs.Bitmap("/img/pipes-up.png"); 
      var pipeUp3 = new createjs.Bitmap("/img/pipes-up.png"); 
     

      var pipeDown = new createjs.Bitmap("/img/pipes-down.png"); 
      var pipeDown2 = new createjs.Bitmap("/img/pipes-down.png"); 
      var pipeDown3 = new createjs.Bitmap("/img/pipes-down.png"); 
     

   //var pipeBody = new createjs.Bitmap("/img/pipes-body.png"); 
   //   var pipeBody1 = new createjs.Bitmap("/img/pipes-body.png"); 
      var pipeBody2 = new createjs.Bitmap("/img/pipes-body.png"); 
      var pipeBody3 = new createjs.Bitmap("/img/pipes-body.png"); 
      var pipeBody4 = new createjs.Bitmap("/img/pipes-body.png"); 
      var pipeBody5 = new createjs.Bitmap("/img/pipes-body.png"); 
      
      function newRandom(){
        var a =  Math.floor(Math.random()*60);
        upHeight = a;
        downHeight = (60 - upHeight)*3;
        }
        function newRandom2(){
          var b =  Math.floor(Math.random()*60);
          upHeight2 = b;
          downHeight2 = (60 - upHeight2)*3;
        }
        function newRandom3(){
          var c =  Math.floor(Math.random()*60);
          upHeight3 = c;
          downHeight3 = (60 - upHeight3)*3;
        }

     function pipeMove(){
    
    
       px -= 20;
       if(px<0){
        var numTimer = window.setTimeout(newRandom,10);
        px = 1300;
        
       // newRandom();
       }
       px2 -= 20;
       if(px2<0){
        var numTimer2 = window.setTimeout(newRandom2,10);
         px2 = 1300;
       }
       px3 -= 20;
       if(px3<0){
        var numTimer3 = window.setTimeout(newRandom3,10);
         px3 = 1300;
       }
    
          pipeUp.x = px;
          pipeUp.y = upHeight*3;
        pipeUp2.x = px2;
          pipeUp2.y = upHeight2*3;
          pipeUp3.x = px3;
          pipeUp3.y = upHeight3*3;
     
          pipeDown.x = px;
          pipeDown.y = 580 - downHeight;
          pipeDown2.x = px2;
          pipeDown2.y = 580 - downHeight2;
          pipeDown3.x = px3;
          pipeDown3.y = 580 - downHeight3;
  
       crashTest(pipeUp,pipeDown);
       crashTest(pipeUp2,pipeDown2);
       crashTest(pipeUp3,pipeDown3);
        }
    
        function crashTest(a,b){
          if((sonicN.x+ 30 > a.x)&&(sonicN.x< a.x + 60)){
            if((sonicN.y<a.y)|| (sonicN.y+30 > b.y)){
             alert("crashed");
            }
          }
        }

        function drawBody(){
          for(var i = 0; i < upHeight;i++){
            var pipeBody = new createjs.Bitmap("/img/pipes-body.png"); 
            pipeBody.x = px;
           pipeBody.y = i*3;
           pipe1.addChild(pipeBody);

            
          }
          for(var i = 0; i < upHeight2;i++){
            var pipeBody2 = new createjs.Bitmap("/img/pipes-body.png"); 
            pipeBody2.x = px;
           pipeBody2.y = i*3;
           pipe2.addChild(pipeBody2);

          }
          for(var i = 0; i < upHeight3;i++){
            pipeBody4.x = px3;
            pipeBody4.y = i*3;
            pipe3.addChild(pipeBody4);
          }
          for(var z = 0; z < downHeight;z++){
            pipeBody1.x = px;
            pipeBody1.y = 580-downHeight2 + pipeDown.height+z;
            pipe1.addChild(pipeBody1);
          }
          for(var z = 0; z < downHeight2;z++){
            pipeBody3.x = px2;
            pipeBody3.y = 580-downHeight2 + pipeDown2.height+z;
            pipe2.addChild(pipeBody3);
          }
          for(var z = 0; z < downHeight3;z++){
            pipeBody5.x = px3;
            pipeBody5.y = 580-downHeight3 + pipeDown3.height+z;
            pipe3.addChild(pipeBody5);
          }
   
        }
        stage.addChild(bg);
        stage.addChild(bottom);
        stage.addChild(bottom2);
        startSeite.addChild(start);
        stage.addChild(startSeite);
       
      pipe1.addChild(pipeUp);
      pipe1.addChild(pipeDown);
      pipe2.addChild(pipeUp2);
      pipe2.addChild(pipeDown2);
      pipe3.addChild(pipeUp3);
      pipe3.addChild(pipeDown3);
   //  pipe1.addChild(pipeBody);
    //   pipe2.addChild(pipeBody2);

       

      //  playSeite.addChild(sonicN);
     
       // stage.addChild(playSeite);

       

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick',tick);
 

    }
 


    function tick(event){
      
      stage.update(event);
    }
    
(function(){
  new init();
}(init));
 
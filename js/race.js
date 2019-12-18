var stage;
function init(){
    stage = new createjs.Stage("canvas");
   

    var bg = new createjs.Bitmap("/img/run.jpg");
    bg.x = 0;
    bg.y = 0;

    var start = new createjs.Bitmap("/img/start.jpg");
    start.x = 200;
    start.y = 0;
    start.addEventListener('click',function(e){
        var turtleTimer = window.setInterval(turtleMove,100);
        window.addEventListener('click', mausOper, true);
        var winTimer = window.setInterval(winTest,50);
    });

    var info = new createjs.Bitmap("/img/info.png");
    info.x = 300;
    info.y = 0;
    info.addEventListener("click", function(e){
        swal("Spielregeln","Druecken Sie jetzt die Linkmaus um der Turtle zu ueberstreiten");
    });
    var back = new createjs.Bitmap("/img/button.png");
         back.x = 570;
         back.y = 5;
         back.addEventListener("click",function(e){
            window.location.href= "/html/tree.html";
         });
    var rabbit = new createjs.Bitmap("/img/rabbit.png");
    rabbit.x = 580;
    rabbit.y = 40;


       

        function mausOper(){
         if(rabbit.x > 10 && turtle.x > 10){
            rabbit.x -=30;
         }
           
         
        }
    
    var turtle = new createjs.Bitmap("/img/turtle.png");
    turtle.x = 580;
    turtle.y = 150;

    var txt = new createjs.Text("you win, congratulation!", "20px Impact", "black");
    txt.x = 180;
    txt.y = 55;
    txt.visible = false;

    var win = new createjs.Bitmap("/img/win.png");
    win.x = 270;
    win.y  = 120;
    win.visible = false;

    var txt1 = new createjs.Text("you lose, try another round?", "25px Impact", "black");
    txt1.x = 180;
    txt1.y = 55;

    txt1.visible = false;

    var lose = new createjs.Bitmap("/img/lose.png");
    lose.x = 270;
    lose.y = 120;
    lose.visible = false;

    var replay = new createjs.Bitmap("/img/refresh.png");
    replay.x = 270;
    replay.y = 200;
    replay.addEventListener('click', function(e){
        location.reload();
    });
    replay.visible = false;
    function winTest(){

        if(rabbit.x < 11 &&  rabbit.x < turtle.x){
           
           start.visible = false;
           rabbit.visible = false;
           turtle.visible = false;
            txt.visible = true;
            win.visible = true;
            replay.visible = true;
           

        } else{
            if(turtle.x <11 &&  rabbit.x > turtle.x){
                
                start.visible = false;
                turtle.visible = false;
                rabbit.visible = false;
                txt1.visible = true;
                lose.visible = true;
                replay.visible = true;

            }
            
        }
    }

    function turtleMove(){
    
  
    if(turtle.x > 10 && rabbit.x >10 ){
        turtle.x = turtle.x -5;
    }

  }

    stage.addChild(bg);
    stage.addChild(start);
    stage.addChild(info);
    stage.addChild(back);
    stage.addChild(rabbit);
    stage.addChild(turtle);
    stage.addChild(txt);
    stage.addChild(txt1);
    stage.addChild(win);
    stage.addChild(lose);
    stage.addChild(replay);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}


function update(event){
    stage.update();
}



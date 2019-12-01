var stage;
function init(){
    stage = new createjs.Stage("canvas");
    var txt = new createjs.Text("Klein", "25px Arial", "black");
    txt.x = 300;
    txt.y = 65;
    var txt1 = new createjs.Text("Berg", "25px Arial", "black");
    txt1.x = 500;
    txt1.y = 65;
    var txt2 = new createjs.Text("Frank", "25px Arial", "black");
    txt2.x = 680;
    txt2.y = 65;
    var txt3 = new createjs.Text("Hermann", "25px Arial", "black");
    txt3.x = 850;
    txt3.y = 65;

    var txt4 = new createjs.Text("Hi, ich bin Herr Hermann, kannst du mein Auto in der richtige Platz parken?", "35px Arial", "black");
    txt4.x = 350;
    txt4.y = 500;
    var park = new createjs.Shape();
    park.graphics.beginFill("white").drawRect(0, 0, 810, 30);
    park.x = 200;
    park.y = 60;
    var park1 = new createjs.Shape();
    park1.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park1.x = 240;
    park1.y = 90;
    var park2 = new createjs.Shape();
    park2.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park2.x = 430;
    park2.y = 90;
    var park3 = new createjs.Shape();
    park3.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park3.x = 620;
    park3.y = 90;
    var park4= new createjs.Shape();
    park4.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park4.x = 810;
    park4.y = 90;
    var park5 = new createjs.Shape();
    park5.graphics.beginFill("white").drawRect(0, 0, 810, 30);
    park5.x = 200;
    park5.y = 330;


    var man = new createjs.Bitmap("/img/man.png");
    man.x = 1200;
    man.y = 550;
    man.addEventListener("click",function(e){
    });


    var img = new Image();
    img.src = "/img/cartop.png";
    var car = new createjs.Bitmap(img);
    car.x = 400;
    car.y = 700;
   
    window.addEventListener('keydown',keyOper, true);
    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 37){
            img.src = "/img/carleft.png";
            car.x -= 30;
          
            checkPosition(car.x,car.y);
        } else if(keyID === 38){
            img.src = "/img/cartop.png";
            car.y -= 30;
           
           checkPosition(car.x,car.y);
        } else if(keyID === 39){
            img.src = "/img/carright.png";
            car.x += 30;
         
            checkPosition(car.x,car.y);
        } else if (keyID === 40){
            img.src = "/img/cardown.png";
            car.y += 30;
          
            checkPosition(car.x,car.y);
        }
    }

    function checkPosition(x, y){
      if((810 < x )&&(x<980) && (90 < y )&&( y <230)){
            swal("Good Job", "Du hast den richtige Parkplatz gefunden","success");
       }
    }

    stage.addChild(park);
    stage.addChild(park5);
    stage.addChild(park1);
    stage.addChild(park2);
    stage.addChild(park3);
    stage.addChild(park4);
    stage.addChild(txt);
    stage.addChild(txt1);
    stage.addChild(txt2);
    stage.addChild(txt3);
    stage.addChild(txt4);
    stage.addChild(man);
    stage.addChild(car);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}


function update(event){
    stage.update();
}



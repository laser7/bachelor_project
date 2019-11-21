
var stage;
function init(){
    stage = new createjs.Stage('chooseCanvas');
    
    stage.enableMouseOver();

    
    

    var tree = new createjs.Bitmap("/img/tree.png");
   
    tree.x = 70;
    tree.y = 600;
    tree.addEventListener("click",function(e){
        window.location.href= "./html/tree.html";
    });

    var car = new createjs.Bitmap("/img/car.png");
    var bulb = new createjs.Bitmap("/img/bulb.png");
    var house = new createjs.Bitmap("/img/house.png");
    var worker = new createjs.Bitmap("/img/worker.png");
    var moutain = new createjs.Bitmap("/img/mountain.png");
    var windmill = new createjs.Bitmap("/img/windmill.png");
    var pig = new createjs.Bitmap("/img/pig.png");
    var flower = new createjs.Bitmap("/img/flower.png");


    car.x = 300;
    car.y = 500;
    car.addEventListener("click",function(e){
        window.location.href= "./html/car.html";
    });


    bulb.x = 180;
    bulb.y = 320;
    bulb.addEventListener("click",function(e){
        window.location.href= "./html/bulb.html";
    });


    house.x = 400;
    house.y = 170;
    house.addEventListener("click",function(e){
        window.location.href= "./html/house.html";
    });

 
    worker.x = 580;
    worker.y = 30;
    worker.addEventListener("click",function(e){
        window.location.href= "./html/worker.html";
    });


    moutain.x = 810;
    moutain.y = 100;
    moutain.addEventListener("click",function(e){
        window.location.href= "./html/moutain.html";
    });


    windmill.x = 1050;
    windmill.y = 160;
    windmill.addEventListener("click",function(e){
        window.location.href= "./html/windmill.html";
    });

 
    pig.x = 1150;
    pig.y = 400;
    pig.addEventListener("click",function(e){
        window.location.href= "./html/pig.html";
    });


    flower.x = 1350;
    flower.y = 600;
    flower.addEventListener("click",function(e){
        window.location.href= "./html/flower.html";
    });


    stage.addChild(tree);
    stage.addChild(car);
    stage.addChild(bulb);
    stage.addChild(house);
    stage.addChild(worker);
    stage.addChild(moutain);
    stage.addChild(windmill);
    stage.addChild(pig);
    stage.addChild(flower);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}

function update(e){
    stage.update();
}

























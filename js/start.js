
    var stage;
    function init(){
        stage = new createjs.Stage("canvas");
 
        var tree = new createjs.Bitmap("/img/apple.png");
        tree.x = 50;
        tree.y = 150;
        tree.addEventListener("click",function(e){
            swal("Wieviel Apfel habe ich?", {
                buttons:{
                    less:"5 ",
                    right: {
                        text: " 7 ",
                        value: "right",
                    },
                    more:{
                        text: " 8 ",
                        value:"more",
                    },
                },
            })
            .then((value) =>{
                switch(value){
                    case "less" :
                        swal("schaust du noch mal genau an?");
                        break;
                    case "right":
                        swal("super gemacht!", "du hast richtig geantwortet","success");
                       setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });

        function back(){
            window.location.href= "/themachoose.html";
        }

        stage.addChild(tree);

 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }





















































/*var tree;
var car;
var house;
var worker;
var cloud;
var background;
function startGame(){
    myGameArea.start();
    tree = new component(30, 150, " #aef1b6 ", 40, 400);
    car = new component(80,40, "grey",800, 450);
    house = new component(120,120, "brown", 550,300);
    cloud = new component(80,30," #aed6f1 ",400,50);
    worker = new component(30,80," #FFC300 ", 290, 460);

}
var myGameArea = {
    canvas : document.getElementById('canvas'),
    start: function(){
        this.canvas.width = 1200;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown', function(e){
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('mouseup', function(e){
            myGameArea.x = false;
            myGameArea.y = false;
        })
        
    },
    clear : function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}


function component(width, height, color, x, y,type){
    this.type = type;
    if(type == "image"){
        this.image = new Image();
        this.image.src = color;
    }
    
    this.width = width;
    this.height = height;
    this.x=x;
    this.y = y;
    this.update = function(){
    ctx= myGameArea.context;

        if(type == "image"){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }else{
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height); 
        }

   
    }
    this.clicked = function(){
        var left = this.x;
        var right = this.x + (this.width);
        var clicked = true;
        if((right < myGameArea.x) || (left > myGameArea.x)){
            clicked = false;
        }
        return clicked;
    }
}
function updateGameArea(){
    myGameArea.clear();

    if(myGameArea.x && myGameArea.y){
        if(car.clicked()){
            car.x += 10;
        }
    }
   
    tree.update();
    //car.x += 1;
    car.update();
    house.update();
    worker.update();
    cloud.update();

} */
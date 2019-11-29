
    var stage;
    function init(){
        stage = new createjs.Stage("canvas");

        var contain = new createjs.Container();
 
          var world = new createjs.Bitmap("/img/world-map.png");
         world.x = 0;
         world.y = 0;
   
         var c1 = new createjs.Shape();
         c1.graphics.beginFill("red");
         c1.graphics.drawCircle(387,270,5);
         c1.addEventListener("click",function(e){
             alert("fliegen nach China?");
             clear();
          
        });

        function clear(){
        
           contain.visible = false;

        }

         var r1 = new createjs.Shape();
         r1.graphics.beginFill("blue");
         r1.graphics.drawCircle(350,220,5);
         r1.addEventListener("click",function(e){
            alert(" fliegen nach Russland?");
            clear();
         
       });

 

         var b1 = new createjs.Shape();
         b1.graphics.beginFill("green");
         b1.graphics.drawCircle(180,330,5);
         b1.addEventListener("click",function(e){
            alert(" fliegen nach Brasilien?");
            clear();
         
       });

         var u1 = new createjs.Shape();
         u1.graphics.beginFill("pink");
         u1.graphics.drawCircle(120,260,5);
         u1.addEventListener("click",function(e){
            alert(" fliegen nach USA?");
            clear();
         
       });

         var c2 = new createjs.Shape();
         c2.graphics.beginFill("brown");
         c2.graphics.drawCircle(100,220,5);
         c2.addEventListener("click",function(e){
            alert(" fliegen nach Kanada?");
            clear();
         
       });

         var g1 = new createjs.Shape();
         g1.graphics.beginFill("yellow");
         g1.graphics.drawCircle(253,240,5);
         g1.addEventListener("click",function(e){
            alert(" fliegen nach Deutschland?");
            clear();
         
       });

         var e1 = new createjs.Shape();
         e1.graphics.beginFill("orange");
         e1.graphics.drawCircle(235,235,5);
         e1.addEventListener("click",function(e){
            alert(" fliegen nach England?");
            clear();
         
       });
// egypt
         var s1 = new createjs.Shape();
         s1.graphics.beginFill("purple");
         s1.graphics.drawCircle(280,280,5);
         s1.addEventListener("click",function(e){
            alert(" fliegen nach Ägypten?");
            clear();
         
       });

         var a1 = new createjs.Shape();
         a1.graphics.beginFill("blue");
         a1.graphics.drawCircle(420,350,5);
         a1.addEventListener("click",function(e){
            alert(" fliegen nach Australien?");
            clear();
         
       });
         

         var s2 = new createjs.Shape();
         s2.graphics.beginFill("red");
         s2.graphics.drawCircle(270,350,5);
         s2.addEventListener("click",function(e){
            alert(" fliegen nach Südafrika?");
            clear();
         
       });

         var t1 = new createjs.Shape();
         t1.graphics.beginFill("black");
         t1.graphics.drawCircle(290,260,5);
         t1.addEventListener("click",function(e){
            alert(" fliegen nach Türkei?");
            clear();
         
       });

        contain.addChild(world);
   
        contain.addChild(c1);
        contain.addChild(r1);
        contain.addChild(b1);
        contain.addChild(u1);
        contain.addChild(c2);
        contain.addChild(g1);
        contain.addChild(e1);
        contain.addChild(s1);
        contain.addChild(a1);
        contain.addChild(s2);
        contain.addChild(t1);

        stage.addChild(contain);

 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }

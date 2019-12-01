
    var stage;
    function init(){
        stage = new createjs.Stage("canvas");

        var contain = new createjs.Container();
        var containC1 = new createjs.Container();
        containC1.visible = false;
        var containC2 = new createjs.Container();
        containC2.visible = false;
        var containC3 = new createjs.Container();
        containC3.visible = false;
        var containC4 = new createjs.Container();
        containC4.visible = false;
        var containC5 = new createjs.Container();
        containC5.visible = false;

 
          var world = new createjs.Bitmap("/img/world-map.png");
         world.x = 0;
         world.y = 0;

   // China

         var c1 = new createjs.Shape();
         c1.graphics.beginFill("red");
         c1.graphics.drawCircle(387,270,5);
         c1.addEventListener("click",function(e){
             alert("fliegen nach China?");
             clear();
            containC1.visible = true;
          
        });

        var china = new createjs.Bitmap("/img/china.png");
        china.x = 0;
        china.y = 0;

        var panda = new createjs.Bitmap("/img/panda.png");
        panda.x = 50;
        panda.y = 150;
        panda.addEventListener("click",function(e){
  
        containC1.visible = false;
        containC2.visible = true;
      
       });

       // containC1
        var greatwall = new createjs.Bitmap("/img/greatwall.png");
        greatwall.x = 200;
        greatwall.y = 150;
        greatwall.addEventListener("click",function(e){
  
         containC1.visible = false;
         containC3.visible = true;
       
        });
        var fc = new createjs.Bitmap("/img/forbidden-city.png");
        fc.x = 350;
        fc.y = 150;
        fc.addEventListener("click",function(e){
  
         containC1.visible = false;
         containC4.visible = true;
       
        });
        var tc = new createjs.Bitmap("/img/terracotta.png");
        tc.x = 500;
        tc.y = 150;
        tc.addEventListener("click",function(e){
  
         containC1.visible = false;
         containC5.visible = true;
       
        });
        var btn = new createjs.Bitmap("/img/button.png");
        btn.x = 570;
        btn.y = 10;
            
       btn.addEventListener("click",function(e){
         containC1.visible = false;
         contain.visible = true;
       
     });
        var name = new createjs.Text("Volksrepublik China", "15px Arial", "black");
        name.x = 150;
        name.y = 25;
        var t = new createjs.Text("Einwohnern : 1,4 Milliarden", "10px Arial", "black");
        t.x = 150;
        t.y = 60;
        var t2 = new createjs.Text("Hauptstadt : Peking", "10px Arial", "black");
        t2.x = 150;
        t2.y = 70;
        
        var t3 = new createjs.Text("Fläche : 9.596.960 km²", "10px Arial", "black");
        t3.x = 150;
        t3.y = 80;

        var t4 = new createjs.Text("Panda", "10px Arial", "black");
        t4.x = 50;
        t4.y = 220;
        var t5 = new createjs.Text("Chinesische Mauer", "10px Arial", "black");
        t5.x = 200;
        t5.y = 220;
        var t6 = new createjs.Text("Verbotene Stadt ", "10px Arial", "black");
        t6.x = 350;
        t6.y = 220;
        var t7 = new createjs.Text("Terra-cotta warriors", "10px Arial", "black");
        t7.x = 500;
        t7.y = 220;
 // containC2
      var btn1 = new createjs.Bitmap("/img/button.png");
      btn1.x = 570;
      btn1.y = 10;
      btn1.addEventListener("click",function(e){
         containC1.visible = true;
         contain.visible = false;
         containC2.visible = false;
       
     });
     var p = new createjs.Bitmap("/img/panda.jpeg");
     p.x = 160;
     p.y = 0;
   
     var pT = new createjs.Text("Der Große Panda (Ailuropoda melanoleuca), auch Riesenpanda oder Pandabär, ist eine Säugetierart aus der Familie der Bären. ", "10px Arial", "black");
     pT.x = 30;
     pT.y = 220;
     var pT1 = new createjs.Text("Als Symbol des WWF und manchmal auch des Artenschutzes allgemein hat er trotz seines sehr beschränkten Verbreitungsgebiets", "10px Arial", "black");
     pT1.x = 30;
     pT1.y = 235;
     var pT2 = new createjs.Text("weltweite Bekanntheit erlangt. In älterer deutscher Literatur wird der Große Panda auch Bambusbär oder Prankenbär genannt. ", "10px Arial", "black");
     pT2.x = 30;
     pT2.y = 250;

// containC3
   var gT = new createjs.Bitmap("/img/greatwall.jpeg");
   gT.x = 150;
   gT.y = 0;

   var gT1 = new createjs.Text("Die Chinesische Mauer (chinesisch 中國長城 / 中国长城, Pinyin Zhōngguó Chángchéng ‚wörtl.: Lange Chinesische Mauer‘), ", "10px Arial", "black");
   gT1.x = 30;
   gT1.y = 200;

   var gT2 = new createjs.Text("ist ein System historischer Grenzbefestigungen, bestehend aus zeitlich und geografisch verschiedenen Schutzmauern, ", "10px Arial", "black");
   gT2.x = 30;
   gT2.y = 220;
   var gT3 = new createjs.Text(" welche die nomadischen Reitervölker aus dem Norden des chinesischen Kaiserreichs fernhalten und die Bevölkerung ", "10px Arial", "black");
   gT3.x = 30;
   gT3.y = 240;
   var gT4 = new createjs.Text(" vor Raubüberfällen und Angriffen schützen sollte. Mit ihrem Bau wurde im 7. Jahrhundert v. Chr. begonnen.  ", "10px Arial", "black");
   gT4.x = 30;
   gT4.y = 260;
   var gT5 = new createjs.Text(" Sie erstreckt sich nach neuesten Erhebungen über 21.196,18 Kilometer und umfasst 43.721 Einzelobjekte und Standorte. ", "10px Arial", "black");
   gT5.x = 30;
   gT5.y = 280;
   
   var btn2 = new createjs.Bitmap("/img/button.png");
   btn2.x = 570;
   btn2.y = 10;
   btn2.addEventListener("click",function(e){
      containC1.visible = true;
      contain.visible = false;
      containC3.visible = false;
    
  });

// contain C4

var fc1 = new createjs.Bitmap("/img/fc.jpeg");
fc1.x = 150;
fc1.y = 0;
var fc2 = new createjs.Text(" Die Verbotene Stadt (chinesisch 故宮 / 故宫, Pinyin Gùgōng ‚Kaiserpalast, eigentl.: alter Palast / Ursprungspalast‘) ist eine  ", "10px Arial", "black");
fc2.x = 30;
fc2.y = 200;
var fc3 = new createjs.Text(" Palastanlage im Zentrum Pekings. Dort lebten und regierten bis zur Revolution 1911 die chinesischen Kaiser der Dynastien   ", "10px Arial", "black");
fc3.x = 30;
fc3.y = 220;
var fc4 = new createjs.Text(" Ming und Qing. Der einfachen Bevölkerung war der Zutritt verwehrt – was den Namen Verbotene Stadt erklärt. Die Verbotene Stadt ", "10px Arial", "black");
fc4.x = 30;
fc4.y = 240;
var fc5 = new createjs.Text(" stellt ein Meisterwerk der chinesischen Architektur dar. Ihre Anlage entsprach der Weltsicht der kaiserlichen Herrscher: ", "10px Arial", "black");
fc5.x = 30;
fc5.y = 260;
var fc6 = new createjs.Text(" ein annähernd rechtwinkliger Grundriss – ausgerichtet entsprechend dem Prinzip von Yin und Yang an der Nord-Süd-Achse  ", "10px Arial", "black");
fc6.x = 30;
fc6.y = 280;
//– und die Verbotene Stadt als Machtsymbol des Kaisers in der Mitte.
var fc7 = new createjs.Text("und die Verbotene Stadt als Machtsymbol des Kaisers in der Mitte. In ihr befanden sich unter anderem die Paläste der Herrscher. ", "10px Arial", "black");
fc7.x = 30;
fc7.y = 300;

var btn3 = new createjs.Bitmap("/img/button.png");
btn3.x = 570;
btn3.y = 10;
btn3.addEventListener("click",function(e){
   containC1.visible = true;
   contain.visible = false;
   containC4.visible = false;
 
});

//containC5

var tc1 = new createjs.Bitmap("/img/tc.jpeg");
tc1.x = 150;
tc1.y = 0;

var tc2 = new createjs.Text(" Das Mausoleum Qín Shǐhuángdìs ist eine frühchinesische Grabanlage, errichtet für den ersten chinesischen Kaiser Qín Shǐhuángdì ", "10px Arial", "black");
tc2.x = 30;
tc2.y = 200;
var tc3 = new createjs.Text(" Mit dem Bau wurde im Jahr 221 v. Chr. begonnen, und der Kaiser wurde im Jahre 210 v. Chr. darin beigesetzt. Es ist einer der ", "10px Arial", "black");
tc3.x = 30;
tc3.y = 220;
var tc4 = new createjs.Text(" weltweit größten Grabbauten und vor allem bekannt für seine großen Soldatenfiguren, die sogenannte „Terrakotta-Armee“.", "10px Arial", "black");
tc4.x = 30;
tc4.y = 240;



var btn4 = new createjs.Bitmap("/img/button.png");
btn4.x = 570;
btn4.y = 10;
btn4.addEventListener("click",function(e){
   containC1.visible = true;
   contain.visible = false;
   containC5.visible = false;
 
});
        // Russia


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


       function clear(){
        
         contain.visible = false;

      }

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

        containC1.addChild(china);
        containC1.addChild(panda);
        containC1.addChild(greatwall);
        containC1.addChild(fc);
        containC1.addChild(tc);
        containC1.addChild(btn);
        containC1.addChild(name);
        containC1.addChild(t);
        containC1.addChild(t2);
        containC1.addChild(t3);
        containC1.addChild(t4);
        containC1.addChild(t5);
        containC1.addChild(t6);
        containC1.addChild(t7);

        containC2.addChild(p);
        containC2.addChild(btn1);
        containC2.addChild(pT);
        containC2.addChild(pT1);
        containC2.addChild(pT2);
       
        containC3.addChild(gT);
        containC3.addChild(gT1);
        containC3.addChild(gT2);
        containC3.addChild(gT3);
        containC3.addChild(gT4);
        containC3.addChild(gT5);
        containC3.addChild(btn2);

        containC4.addChild(fc1);
        containC4.addChild(fc2);
        containC4.addChild(fc3);
        containC4.addChild(fc4);
        containC4.addChild(fc5);
        containC4.addChild(fc6);
        containC4.addChild(fc7);
        containC4.addChild(btn3);

        containC5.addChild(tc1);
        containC5.addChild(tc2);
        containC5.addChild(tc3);
        containC5.addChild(tc4);
        containC5.addChild(btn4);

        stage.addChild(contain);
        stage.addChild(containC1);
        stage.addChild(containC2);
        stage.addChild(containC3);
        stage.addChild(containC4);
        stage.addChild(containC5);

 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }

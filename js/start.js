
  //   Ü ẞ Ö ä ö Ä ü 
  
  var stage;
    function init(){
        stage = new createjs.Stage("canvas");
        
        var rabbit = new createjs.Bitmap("/img/rabbit.png");
        rabbit.x = 1000;
        rabbit.y = 550;
        rabbit.addEventListener("click",function(e){
            swal("Wieviel Karrote habe ich verloren?"+num, {
                buttons:{
                    less: {
                        text: num+2,
                        value: "less",
                    },
                    right: {
                        text: num,
                        value: "right",
                    },
                    more:{
                        text: num+1,
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
                     //  setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });
         var arr2= [true,false];
         var num = 0;
       var c1 = new createjs.Bitmap("/img/carrot.png");
        c1.x = 800;
        c1.y = 670;
        c1.rotation = Math.floor(Math.random()*60);
       var v = arr2[Math.floor(Math.random()*arr2.length)];
        c1.visible = v;
        if(v =='1'){
          num += 1;
        }

     var c2 = new createjs.Bitmap("/img/carrot.png");
        c2.x = 780;
        c2.y = 630;
        c2.rotation = Math.floor(Math.random()*60);
        var q = arr2[Math.floor(Math.random()*arr2.length)];
        c2.visible = q;
       if(q =='1'){
        num += 1;
        }
        var c3 = new createjs.Bitmap("/img/carrot.png");
        c3.x = 760;
        c3.y = 650;
        c3.rotation = Math.floor(Math.random()*60);
        var r = arr2[Math.floor(Math.random()*arr2.length)];
        c3.visible = r;
 
        if(r =='1'){
        num += 1;
        }
        var c4 = new createjs.Bitmap("/img/carrot.png");
        c4.x = 720;
        c4.y = 610;
        c4.rotation = Math.floor(Math.random()*60);
        var s = arr2[Math.floor(Math.random()*arr2.length)];
        c4.visible = s;
        if(s =='1'){
        num += 1;
        }
        var c5 = new createjs.Bitmap("/img/carrot.png");
        c5.x = 600;
        c5.y = 580;
        c5.rotation = Math.floor(Math.random()*60);
        var t = arr2[Math.floor(Math.random()*arr2.length)];
        c5.visible = t;
      if(t =='1'){
        num +=1;
        }
        
// tree 
        var tree = new createjs.Bitmap("/img/tree12.png");
        tree.x = 50;
        tree.y = 150;
        tree.addEventListener("click",function(e){
            swal("Wieviel Apfel habe ich?", {
                buttons:{
                    less: {
                        text: test-2,
                        value: "less",
                    },
                    right: {
                        text: test,
                        value: "right",
                    },
                    more:{
                        text: test+1,
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

        stage.addChild(tree);
        var arr1 =[true,false];
        var apple = new createjs.Bitmap("/img/apple12.png");
        apple.x = 250;
        apple.y = 170;
       var a = arr1[Math.floor(Math.random()*arr1.length)];
       apple.visible = a;
       
        var test = 0;
        if(a=='1'){
            test+=1;
        }
        var app2 = new createjs.Bitmap("/img/apple12.png");
        app2.x = 310;
        app2.y = 190;
        
        var b = arr1[Math.floor(Math.random()*arr1.length)];
        app2.visible =b;
        if(b=='1'){
            test+=1;
        }
 
        var app3 = new createjs.Bitmap("/img/apple12.png");
        app3.x = 230;
        app3.y = 230;
        var c = arr1[Math.floor(Math.random()*arr1.length)];
        app3.visible = c;
        if(c=='1'){
            test+=1;
        }

        var app4 = new createjs.Bitmap("/img/apple12.png");
        app4.x = 260;
        app4.y = 242;
        var d = arr1[Math.floor(Math.random()*arr1.length)];
        app4.visible =d;
        if(d=='1'){
            test+=1;
        }
        var app5 = new createjs.Bitmap("/img/apple12.png");
        app5.x = 350;
        app5.y = 274;
        var e = arr1[Math.floor(Math.random()*arr1.length)];
        app5.visible = e;
        if(e=='1'){
            test+=1;
        }
        var app6 = new createjs.Bitmap("/img/apple12.png");
        app6.x = 210;
        app6.y = 290;
        var f = arr1[Math.floor(Math.random()*arr1.length)];
        app6.visible = f;
        if(f =='1'){
            test+=1;
        }
        var app7 = new createjs.Bitmap("/img/apple12.png");
        app7.x = 240;
        app7.y = 290;
        var g = arr1[Math.floor(Math.random()*arr1.length)];
        app7.visible =g;
        if(g =='1'){
            test+=1;
        }
        var app8 = new createjs.Bitmap("/img/apple12.png");
        app8.x = 360;
        app8.y = 340;
        var h = arr1[Math.floor(Math.random()*arr1.length)];
        app8.visible =h;
        if(h =='1'){
            test+=1;
        }
        var app9 = new createjs.Bitmap("/img/apple12.png");
        app9.x = 330;
        app9.y = 300;
        var i = arr1[Math.floor(Math.random()*arr1.length)];
        app9.visible =i;
        if(i =='1'){
            test+=1;
        }
        var app10 = new createjs.Bitmap("/img/apple12.png");
        app10.x = 160;
        app10.y = 330;
        var j = arr1[Math.floor(Math.random()*arr1.length)];
        app10.visible =j;
        if(j=='1'){
            test+=1;
        }
        var app11 = new createjs.Bitmap("/img/apple12.png");
        app11.x = 420;
        app11.y = 345;
        var k = arr1[Math.floor(Math.random()*arr1.length)];
        app11.visible =k;
        if(k=='1'){
            test+=1;
        }
        var app12 = new createjs.Bitmap("/img/apple12.png");
        app12.x = 130;
        app12.y = 370;
        var l = arr1[Math.floor(Math.random()*arr1.length)];
        app12.visible =l;
        if(l =='1'){
            test+=1;
        }
        var app13 = new createjs.Bitmap("/img/apple12.png");
        app13.x = 205;
        app13.y = 380;
        var m = arr1[Math.floor(Math.random()*arr1.length)];
        app13.visible = m;
        if(m =='1'){
            test+=1;
        }
        var app14 = new createjs.Bitmap("/img/apple12.png");
        app14.x = 370;
        app14.y = 375;
         var z = arr1[Math.floor(Math.random()*arr1.length)];
        app14.visible = z;
        if(z =='1'){
            test+=1;
        }
        var app15 = new createjs.Bitmap("/img/apple12.png");
        app15.x = 250;
        app15.y = 430;
      var o = arr1[Math.floor(Math.random()*arr1.length)];
        app15.visible = o;
        if(o=='1'){
            test+=1;
        }
   
       

        function back(){
            window.location.href= "/themachoose.html";
        }
    
        stage.addChild(rabbit);
        stage.addChild(apple);
        stage.addChild(app2);
        stage.addChild(app3);
        stage.addChild(app4);
        stage.addChild(app5);
        stage.addChild(app6);
        stage.addChild(app7);
        stage.addChild(app8);
        stage.addChild(app9);
        stage.addChild(app10);
        stage.addChild(app11);
        stage.addChild(app12);
        stage.addChild(app13);
        stage.addChild(app14);
        stage.addChild(app15);
        
        stage.addChild(c1);
        stage.addChild(c2);
        stage.addChild(c3);
        stage.addChild(c4);
        stage.addChild(c5);
        

 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }





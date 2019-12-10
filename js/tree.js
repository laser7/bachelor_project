
  //   Ü ẞ Ö ä ö Ä ü 
  
  var stage;
    function init(){
        stage = new createjs.Stage("canvas");
        
        var bg = new createjs.Bitmap("/img/bg57.jpg");
        bg.x = 0;
        bg.y = 0;
       
        var tree = new createjs.Bitmap("/img/lptree.png");
        tree.x =50;
        tree.y = 500;
        tree.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
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
        var tree1 = new createjs.Bitmap("/img/lptree1.png");
        tree1.x = 900;
        tree1.y = 400;
        tree1.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
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
        var tree2 = new createjs.Bitmap("/img/lptree1.png");
        tree2.x = 1050;
        tree2.y = 430;
        tree2.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
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
        var tree3 = new createjs.Bitmap("/img/lptree1.png");
        tree3.x = 600;
        tree3.y = 440;
        tree3.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
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

        var arr1 =[true,false];
        var apple = new createjs.Bitmap("/img/lpapple1.png");
        apple.x = 160;
        apple.y = 620;
       var a = arr1[Math.floor(Math.random()*arr1.length)];
       apple.visible = a;
 
       
        var test = 0;
        if(a=='1'){
            test+=1;
        }
        var app2 = new createjs.Bitmap("/img/lpapple1.png");
        app2.x = 320;
        app2.y = 680;
        
        var b = arr1[Math.floor(Math.random()*arr1.length)];
      app2.visible =b;
     
        if(b=='1'){
            test+=1;
        }
 
        var app3 = new createjs.Bitmap("/img/lpapple1.png");
        app3.x = 110;
        app3.y = 680;
        var c = arr1[Math.floor(Math.random()*arr1.length)];
     app3.visible = c;

        if(c=='1'){
            test+=1;
        }

        var app4 = new createjs.Bitmap("/img/lpapple1.png");
        app4.x = 220;
        app4.y = 650;
        var d = arr1[Math.floor(Math.random()*arr1.length)];
        app4.visible =d;
 
        if(d=='1'){
            test+=1;
        }
        var app5 = new createjs.Bitmap("/img/lpapple1.png");
        app5.x = 280;
        app5.y = 720;
        var e = arr1[Math.floor(Math.random()*arr1.length)];
        app5.visible = e;
        if(e=='1'){
            test+=1;
        }
        var app6 = new createjs.Bitmap("/img/lpapple1.png");
        app6.x = 780;
        app6.y = 560;
        var f = arr1[Math.floor(Math.random()*arr1.length)];
       app6.visible = f;

        if(f =='1'){
            test+=1;
        }
        var app7 = new createjs.Bitmap("/img/lpapple1.png");
        app7.x = 670;
        app7.y = 550;
        var g = arr1[Math.floor(Math.random()*arr1.length)];
    app7.visible =g;
      
        if(g =='1'){
            test+=1;
        }
        var app8 = new createjs.Bitmap("/img/lpapple1.png");
        app8.x = 700;
        app8.y = 500;
        var h = arr1[Math.floor(Math.random()*arr1.length)];
      app8.visible =h;
      
        if(h =='1'){
            test+=1;
        }
        var app9 = new createjs.Bitmap("/img/lpapple1.png");
        app9.x = 960;
        app9.y = 500;
        var i = arr1[Math.floor(Math.random()*arr1.length)];
       app9.visible =i;
  
        if(i =='1'){
            test+=1;
        }
        var app10 = new createjs.Bitmap("/img/lpapple1.png");
        app10.x = 1000;
        app10.y = 530;
        var j = arr1[Math.floor(Math.random()*arr1.length)];
       app10.visible =j;
    
        if(j=='1'){
            test+=1;
        }
        var app11 = new createjs.Bitmap("/img/lpapple1.png");
        app11.x = 1060;
        app11.y = 545;
        var k = arr1[Math.floor(Math.random()*arr1.length)];
       app11.visible =k;
     
        if(k=='1'){
            test+=1;
        }
        var app12 = new createjs.Bitmap("/img/lpapple1.png");
        app12.x = 1100;
        app12.y = 570;
        var l = arr1[Math.floor(Math.random()*arr1.length)];
        app12.visible = true;  //l
        if(l =='1'){
            test+=1;
        }
        var app13 = new createjs.Bitmap("/img/lpapple1.png");
        app13.x = 1180;
        app13.y = 550;
        var m = arr1[Math.floor(Math.random()*arr1.length)];
        app13.visible = true;   //m
        if(m =='1'){
            test+=1;
        }
        var app14 = new createjs.Bitmap("/img/lpapple1.png");
        app14.x = 1210;
        app14.y = 560;
         var z = arr1[Math.floor(Math.random()*arr1.length)];
        app14.visible = true;      //z
        if(z =='1'){
            test+=1;
        }
        var app15 = new createjs.Bitmap("/img/lpapple1.png");
        app15.x = 150;
        app15.y = 660;
      var o = arr1[Math.floor(Math.random()*arr1.length)];
        app15.visible = o;  
        if(o=='1'){
            test+=1;
        }
     
            function back(){
                location.reload();
            }
        var rabbit = new createjs.Bitmap("/img/lprabbit1.png");
        rabbit.x = 1280;
        rabbit.y = 430;
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
      var c1 = new createjs.Bitmap("/img/lpcarrot1.png");
       c1.x = 1300;
       c1.y = 670;
       c1.rotation = Math.floor(Math.random()*60);
      var v = arr2[Math.floor(Math.random()*arr2.length)];
       c1.visible = v;
       if(v =='1'){
         num += 1;
       }

    var c2 = new createjs.Bitmap("/img/lpcarrot1.png");
       c2.x = 1350;
       c2.y = 630;
       c2.rotation = Math.floor(Math.random()*60);
       var q = arr2[Math.floor(Math.random()*arr2.length)];
       c2.visible = q;
      if(q =='1'){
       num += 1;
       }
       var c3 = new createjs.Bitmap("/img/lpcarrot1.png");
       c3.x = 1400;
       c3.y = 650;
       c3.rotation = Math.floor(Math.random()*60);
       var r = arr2[Math.floor(Math.random()*arr2.length)];
       c3.visible = r;

       if(r =='1'){
       num += 1;
       }
       var c4 = new createjs.Bitmap("/img/lpcarrot1.png");
       c4.x = 1320;
       c4.y = 610;
       c4.rotation = Math.floor(Math.random()*60);
       var s = arr2[Math.floor(Math.random()*arr2.length)];
       c4.visible = s;
       if(s =='1'){
       num += 1;
       }
       var c5 = new createjs.Bitmap("/img/lpcarrot1.png");
       c5.x = 1500;
       c5.y = 580;
       c5.rotation = Math.floor(Math.random()*60);
       var t = arr2[Math.floor(Math.random()*arr2.length)];
       c5.visible = t;
     if(t =='1'){
       num +=1;
       }
       var c6 = new createjs.Bitmap("/img/lpcarrot1.png");
       c6.x = 1480;
       c6.y = 580;
       c6.rotation = Math.floor(Math.random()*60);
       var u = arr2[Math.floor(Math.random()*arr2.length)];
       c6.visible = u;
     if(u =='1'){
       num +=1;
       }
       var c7 = new createjs.Bitmap("/img/lpcarrot1.png");
       c7.x = 1520;
       c7.y = 580;
       c7.rotation = Math.floor(Math.random()*60);
       var v = arr2[Math.floor(Math.random()*arr2.length)];
       c7.visible = v;
     if(v =='1'){
       num +=1;
       }
       var c8 = new createjs.Bitmap("/img/lpcarrot1.png");
       c8.x = 1550;
       c8.y = 580;
       c8.rotation = Math.floor(Math.random()*60);
       var w = arr2[Math.floor(Math.random()*arr2.length)];
       c8.visible = w;
     if(w =='1'){
       num +=1;
       }
        
        stage.addChild(bg);
        stage.addChild(tree);
        stage.addChild(tree1);
        stage.addChild(tree2);
        stage.addChild(tree3);
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
        stage.addChild(c6);
        stage.addChild(c7);
        stage.addChild(c8);
 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }





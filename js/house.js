var btn=document.querySelector('button');
    var z=30.00;
    
	var sec=document.getElementById('sec');
	var uls=document.querySelector('ul');
	var li_1=document.getElementsByClassName('list1')[0];
	var score=document.getElementById('score');
	var level=1;
	var n=0;
	var turnOff=document.getElementById('turnOff');
	turnOff.onclick=function(){
        document.body.style.background='rgb(199,237,204)';
        z = 60.00;
		turnOff.innerHTML='normal mode';
			turn();	
	}
	function turn(){
		turnOff.onclick=function(){
			document.body.style.background='';
			turnOff.innerHTML='easy mode';
			turnOff.onclick=function(){
				document.body.style.background='rgb(199,237,204)';
                turnOff.innerHTML='normal mode';
                z = 60.00;
                
				turn();	
			}
		}
	}
	var back=document.getElementById('back');
	btn.onclick=function(){
		// 1.计时器
		var timer=setInterval(function(){
			z-=0.01;
			z=z.toFixed(2);
			sec.innerHTML=z;
			if (z<=0) {
				clearInterval(timer);
				if (n<5) {
					alert('GAME OVER!'+'  '+'rank:D');
				}else if (n>=17) {
					alert('GAME OVER!'+'  '+'rank:A');
				}else if (n>=9) {
					alert('GAME OVER!'+'  '+'rank:B');
				}else{
					alert('GAME OVER!'+'  '+'rank:C');
				}
				back.style.display='block';
			}
		},10)
		// 2.点击按钮消失,第一个li消失
		btn.remove();
		li_1.remove();
		turnOff.remove();
		// 3.添加4个li>img
		app();
		function app(){
			level+=1;
			for (var i=0;i<level*level;i++) {
				var newLi=document.createElement('li');
				uls.appendChild(newLi);
				var newImg=document.createElement('img');
				newLi.appendChild(newImg);
				newLi.style.width=100/level+'%';
				newLi.style.float='left';
				newImg.style.display='block';
				newImg.style.width=100+'%';
				newImg.src='/img/quince.png';
				newLi.style.backgroundColor='rgb('+rand(50,255)+','+rand(50,255)+','+rand(50,255)+')';
			}
			var x=rand(0,level*level-1);		// 赋予一个随机房祖名下标
			var imgs1=document.querySelectorAll('img');
			imgs1[x].src='/img/avocado.png';	// 随机一张图片变成房祖名
			var li=document.querySelectorAll('li');
			li[x].onclick=function(){
				for (var i=0;i<level*level;i++) {
					li[i].remove(this);
				}
				n+=1;
				score.innerHTML=n;
				if (level>10) {
					level=10;
				}
				app();
			}
		}
	}



	// 随机函数
	function rand(min,max){
		return Math.round(Math.random()*(max-min)+min);
	}
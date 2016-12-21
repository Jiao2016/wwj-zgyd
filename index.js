$(function(){
	var innerbox=$(".innerbox")[0];
	var container=$(".gundong")[0];
	var yidongt=setInterval(move,2000)
	function move(){
		animate(innerbox,{marginLeft:-295},function(){
			var first=getFirst(innerbox);
			innerbox.appendChild(first);
			this.style.marginLeft=0;
			flag1=true;
		})
	}
		container.onmouseover=function(){
			clearInterval(yidongt);
		}
		container.onmouseout=function(){
			yidongt=setInterval(move,2000);
		}
		var prev=$(".jiantouleft")[0];
		var next=$(".jiantouright")[0];
		var flag1=true;
		next.onclick=function(){
			if (flag1) {
				flag1=false;
				move();
			};
		}
		var flag2=true;
		prev.onclick=function(){
			if (flag2) {
				flag2=false;
				var	last=getLast(innerbox);
				var first=getFirst(innerbox);
				innerbox.insertBefore(last,first);
				innerbox.style.marginLeft="-295px";
				animate(innerbox,{marginLeft:0},function(){
					flag2=true;
				})
			}
		}

// nav
var nav=$(".nav")[0];
var navList=$(".nav-list");
var nav2=$(".nav2");
var navHead=$(".nav-head")[0];
for (var i = 0; i < navList.length; i++) {
	navList[i].index=i;
	hover(navList[i],function(){
		nav2[this.index].style.display="block";
		navList[this.index].style.color="#E4E4E4";
		
	},function(){
		nav2[this.index].style.display="none";
		navList[this.index].style.color="#000";
	})
}
hover(navHead,function(){
	navHead.style.background="#F3F3F3";
},
function(){
	navHead.style.background="#E4E4E4";
})

// banner
var banner=$(".tupian")[0];
var banbtns=$(".d1");
var bannerbox=$(".tupiantiao")[0];
var banprevbtn=$(".zuojiantou")[0];
var bannextbtn=$(".youjiantou")[0];
var ydlunbot=setInterval(ydlunbo,5000);
var num=1;
hover(banner,function(){
	clearInterval(ydlunbot);
},function(){
	ydlunbot=setInterval(ydlunbo,5000);
})
var flag=true;
bannextbtn.onclick=function(){
	if (flag) {
		flag=false;
		ydlunbo();
	};
}
banprevbtn.onclick=function(){
	if (flag) {
		num-=2;
		flag=false;
		ydlunbo();
	}
}
function ydlunbo(){
	num++;
	for (var i = 0; i < banbtns.length; i++) {
		banbtns[i].style.background="#ccc"
	}
	if (num==banbtns.length+1) {
		banbtns[0].style.background="#E40077";
		animate(bannerbox,{left:num*-740},function(){
			num=1;
			this.style.left=-740+"px";
			flag=true;
		})
	}else if (num==0) {
		animate(bannerbox,{left:0},400,function(){
			this.style.left=banbtns.length*-740+"px";
			num=banbtns.length+1;
			banbtns[banbtns.length-1].style.backgroundColor="#E40077";
			flag=true;
		})
	}else{
		banbtns[num-1].style.backgroundColor="#E40077";
		animate(bannerbox,{left:num*-740},function(){
			flag=true;
		})
	}
	for (var i = 0; i < banbtns.length; i++) {
		banbtns[i].index=i;
		banbtns[i].onmouseover=function(){
			for (var i = 0;i<banbtns.length;i++) {
				banbtns[i].style.backgroundColor="#ccc";
			}
			this.style.backgroundColor="#E40077";
			animate(bannerbox,{left:this.index*-740})
		}
	}
}
// banner图右边图片放大效果
var	banrtimg=$(".banrtimg");
for (var i = 0; i < banrtimg.length; i++) {
	banrtimg[i].index=i;
	hover(banrtimg[i],function(){
		banrtimg[this.index].style.width="35px";
		banrtimg[this.index].style.height="35px"
	},function(){
		banrtimg[this.index].style.width="32px";
		banrtimg[this.index].style.height="32px"
	})
};
// 下边图片右动画
var xydong=$(".xydong");
for (var i = 0; i < xydong.length; i++) {
	xydong[i].index=i;
	hover(xydong[i],function(){
		animate(xydong[this.index],{right:10})
	},function(){
		animate(xydong[this.index],{right:0})
	})
};
// 广告动效
var admintiao=$(".admintiao");
for (var i = 0; i < admintiao.length; i++) {
	admintiao[i].index=i;
	hover(admintiao[i],function(){
		animate(admintiao[this.index],{left:0})
	},function(){
		animate(admintiao[this.index],{left:65})
	})
	
};

//huan cun jia zai
var imgarr=$("img");
console.log(imgarr)
var chuangkou=getWindow();
var ksheight=document.documentElement.clientHeight;
for (var i = 0;i<imgarr.length;i++) {
	if (ksheight>getPosition(imgarr[i]).y) {
		imgarr[i].datesrc=imgarr[i].src;
	}else{
		imgarr[i].datesrc=imgarr[i].src;
		imgarr[i].src="";
	}
}
window.onscroll=function(){
	var st=chuangkou.scrollTop;
	for (var i = 0; i < imgarr.length; i++) {
		if (st+ksheight>getPosition(imgarr[i]).y) {
			imgarr[i].src=imgarr[i].datesrc;
		}
	}
}

})//页面加载之后执行
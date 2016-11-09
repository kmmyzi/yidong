 window.onload=function(){
	var hdl=$(".hlist1");
	var ss=$(".headRli");
	for(var i=0;i<ss.length;i++){
		ss[i].index=i;
		ss[i].onmouseover=function(){
			hdl[this.index].style.display="block";
		}
		ss[i].onmouseout=function(){
			hdl[this.index].style.display="none";
		}
	}
	var hsj=$(".hsj");
	var hye=$(".hlist2");
	for(var i=0;i<hsj.length;i++){
		hsj[i].index=i;
		hsj[i].onmouseover=function(){
			hye[this.index].style.display="block";
		}
		hsj[i].onmouseout=function(){
			hye[this.index].style.display="none";
		}
	}
	var items=$(".item");
	var lists=$(".navlist");
	for(var i=0;i<items.length;i++){
		items[i].index=i;
		items[i].onmouseover=function(){
			lists[this.index].style.display="block";
		}
		items[i].onmouseout=function(){
			lists[this.index].style.display="none";
		}
	}

    

	var imgs=$("a",$(".banimg")[0]);
	var ydgds=$("li",$(".ydgd")[0]);
	var fys=$("a",$(".fanye")[0]);
    var now=0;
    var next=0;
    var flag=true;
    imgs[0].style.zIndex=10;   
    ydgds[0].className="hot1";   
    var t=setInterval(move,2000);
    //鼠标移入轮播停止，移除继续 
        var center=$(".banCenter")[0];
        var wm=parseInt(getStyle(center,"width"));
        center.onmouseover=function(){
    		clearInterval(t);
    	}
   
    center.onmouseout=function(){
    		 t=setInterval(move,2000);
    	}
    for(var i=0;i<imgs.length;i++)
{    
	if(i==0){
		continue;
	}else{
     imgs[i].style.left=wm+"px";
	}
}
function move(){
	next=now+1;
	if(next==imgs.length)next=0;
	imgs[next].style.left=wm+"px";	
	animate(imgs[now],{left:-wm});
	animate(imgs[next],{left:0});
	for(var j=0;j<ydgds.length;j++) {
    	ydgds[j].className="";
      }    	
    ydgds[next].className="hot1";
	now=next;
	animate(imgs[now],{left:0},function(){
		flag=true;
	});

}
function move1(){
	next=now-1;
	if(next<0)next=imgs.length-1;
	imgs[next].style.left=-wm+"px";	
	animate(imgs[now],{left:wm});
	animate(imgs[next],{left:0});
	for(var j=0;j<ydgds.length;j++) {
    	ydgds[j].className="";
      }    	
    ydgds[next].className="hot1";
	now=next;
	animate(imgs[now],{left:0},function(){
		flag=true;
	});
}

//点轮播图出颜色，跳图片
    for(var i=0;i<ydgds.length;i++){
    	ydgds[i].index=i;     	
    	ydgds[i].onclick=function(){
    	 if(parseInt(getStyle(imgs[next],"left"))==0){
    	if(now!=this.index){   		      
	       if(now>this.index){

    	           imgs[this.index].style.left=-wm+"px";	
	               animate(imgs[now],{left:wm});
	               animate(imgs[this.index],{left:0});
		   }
	       else{
	    	    // if(flag){
	            imgs[this.index].style.left=wm+"px";	
	            animate(imgs[now],{left:-wm});
	            animate(imgs[this.index],{left:0});
	        }
	    }
	    for(var j=0;j<ydgds.length;j++){
    	     ydgds[j].className="";
        }    	
        ydgds[this.index].className="hot1";
	    now=this.index;
	    next=this.index;
    	} } 
      }  		
    
  //左翻页右翻页
  
    for(var i=0;i<fys.length;i++){
    	if(i==1){ 
    		fys[i].onclick=function(){		   	
    		    if(flag){
    		    move();    		   
    		    flag=false;
    		    }
    	}	  
        }else{    		
    	    fys[i].onclick=function(){      			    		    
    		    if(flag){
    		    move1();
    		    flag=false;    		   
              }
        }
   }
}

  var intrs=$(".jieshaokuang")[0];
  var intr=$(".jieshaokuang1")[0];
  var fy=$("a",$(".fy")[0]);
  var js=$("a",intr);
  var flag1=true; 
  var aw=parseInt(getStyle(js[0],"width"))+parseInt(getStyle(js[0],"borderRight"));
  intr.style.width=aw*js.length+"px";
  var a=setInterval(movea,2000);
// 鼠标移入轮播停止，鼠标移除轮播继续
  intrs.onmouseover=function(){
  	clearInterval(a);   
  }
  intrs.onmouseout=function(){
  	 a=setInterval(movea,2000);
  }
  function movea(){
    animate(intr,{left:-aw},function(){
        var first=firstChild(intr);  
        intr.appendChild(first);
        intr.style.left=0;
        flag1=true;
    })
  }

  function moveaL(){
  	 var first=firstChild(intr);
  	 var last=lastChild(intr);
  	 intr.insertBefore(last,first);
     intr.style.left=-aw+"px";
    animate(intr,{left:0},function(){
       flag1=true;       
    })
  }

  //左翻页右翻页
  
    for(var i=0;i<fy.length;i++){
    	if(i==1){ 
    		fy[i].onclick=function(){		   	
    		    if(flag1){
    		    movea();    		   
    		    flag=false;
    		    }
    	}	  
        }else{    		
    	    fy[i].onclick=function(){      			    		    
    		    if(flag1){
    		    moveaL();
    		    flag=false;    		   
              }
        }
   }
}

  }
/*
* @Author: Administrator
* @Date:   2017-09-18 17:27:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-30 10:32:49
*/
window.onload=function(){




	//菜单导航
	let liebiao =document.getElementsByClassName('liebiao-list')[0];
	let li=liebiao.getElementsByTagName('li');

	let liul=document.getElementsByClassName('item');

	for(let i=0;i<liul.length;i++){
        li[i].onmouseover=function(){
        	liul[i].style.display = "block";
        }
        li[i].onmouseout=function(){
        	liul[i].style.display = "none";
        }
	}


   //轮播
   let tu=document.getElementsByClassName('banner-tu')[0];
   let tuli=tu.getElementsByTagName('li');
   let lbtn =document.getElementsByClassName('btn')[0];
   let btnli=lbtn.getElementsByTagName('li');

  
    //方法一
    // let now=1;
    // for(let i=0;i<btnli.length;i++){
    // 	  btnli[0].style.background='#fff';
    //       btnli[i].onclick=function(){
    //         tuli[now].style.display='none';
    //         tuli[i].style.display='block';
    //         btnli[now].style.background ='rgba(0,0,0,0.5)';
            
    //         btnli[i].style.background ='#fff';
    //         now=i;
    //       }
    // }
    //方法二
    // for(let i=0;i<btnli.length;i++){
    //        btnli[i].onmouseover=function(){
    //        	for(let j=0;j<tuli.length;j++){
    //            tuli[j].style.display='none';
    //            btnli[j].style.background ='rgba(0,0,0,0.5)';
    //        	}
    //        	tuli[i].style.display='block';
    //        	btnli[i].style.background ='#fff';
    //         num=i;
    //        }
    // }
    //方法三
     // let now=1;
     // for(var i=0;i<btnli.length;i++){
     //      btnli[i].index=i;
     //      btnli[i].onclick=function(){
     //      	tuli[now].style.display='none';
     //      	tuli[this.index].style.display='block';
     //      	btnli[this.index].style.background='#fff';
     //      	now=[this.index];
     //      }
     // }
     // 方法四利用闭包函数
     // let now=1;
     // for(var i=0;i<btnli.length;i++){
     //      btnli[i].onclick=(function(i){
     //      	return function(){
     //      		tuli[now].style.display='none';
     //      		tuli[i].style.display='block';
     //      		now=[i];
     //      	}
     //      })(i);
     // }






     
     let num=0;
     let t=setInterval(move,3000); 
//图片轮播
     function move(){
      let tuarr=['#e8e8e8','#d7fefb','#c63230','#0865e0','#e6e9ef','#333438'];
      num++;
      if(num==tuli.length){
         num=0;
      }
      tu.style.background=tuarr[num];
      for(let i=0;i<tuli.length;i++){
           tuli[i].style.display='none';
           btnli[i].style.background ='rgba(0,0,0,0.5)';
      }
      tuli[num].style.display='block';
      btnli[num].style.background ='#fff';
     }
// 选项卡
     for(let i=0;i<btnli.length;i++){
           btnli[i].onmouseover=function(){
            for(let j=0;j<tuli.length;j++){
               tuli[j].style.display='none';
               btnli[j].style.background ='rgba(0,0,0,0.5)';
            }
            tuli[i].style.display='block';
            btnli[i].style.background ='#fff';
            num=i;

           }   
          }
 //鼠标移入停止轮播
     let stop=document.getElementsByClassName('banner')[0];
     // console.log(stop);
     stop.onmouseover=function(){
      window.clearInterval(t);
     }
     stop.onmouseout=function(){
       t= setInterval(move,3000); 
     }
   




//优化
   let wh=innerHeight;
   console.log(wh)
   let meil=document.querySelectorAll('.bgmodu > .meilirens');
   let meilarr=[];
   let aside=document.querySelector('.aside');
   let ali=document.querySelectorAll('.asidelist > li');
   meil.forEach(elements=>{
    meilarr.push(elements.offsetTop);
   });
   let colorarr=['#64C333','#FF0036','#EA5F8D','#0AA6E8','#F15453','#19C8A9'];
   let loga=true;
  for(let i=0;i<ali.length;i++){
    ali[i].onclick=function(){
      for(let j=0;j<ali.length;j++){
      ali[j].style.background='#626262';
    } 
      loga=false;
      animate(document.body,{scrollTop:meilarr[i]},function(){loga=true});
      animate(ali[i],{background:colorarr[i]})
      
    }
  }
   let slag=true;
   window.onscroll=function(){
    let mchaochu=document.body.scrollTop;
    let seach=document.querySelector('.seach');
    console.log(seach)
    if(mchaochu>=500){
      if(slag){
      animate(seach,{top:0});
      slag=!slag;
    }
    }
    if(mchaochu<=500){
      if(!slag){
      animate(seach,{top:-50});
      slag=!slag;
    }
  }
    if(!loga){
      return;
    }
    
    meilarr.forEach((value,index)=>{
      if(mchaochu+wh>value+400){
        animate(aside,{opacity: 1})
         let imgs=meil[index].getElementsByTagName('img');


         for(let j=0;j<ali.length;j++){
         ali[j].style.background='#626262';
        }

        ali[index].style.background=colorarr[index];
         for(let i=0;i<imgs.length;i++){
          imgs[i].src=imgs[i].getAttribute('src1');
         }
      }
      if(mchaochu+wh<meilarr[0]){
        animate(aside,{opacity: 0})

      }
     })
   }


 }
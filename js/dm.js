/*
* @Author: Administrator
* @Date:   2017-09-19 13:06:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 13:56:10
*/
function getClass(classname,ranger){
     ranger=ranger? ranger : document;
     if(document.getElementsByClassName){
        return ranger.getElementsByClassName(classname);
     }else{
     	var newarr=[];
     	var all = ranger.getElementsByTagName('*');
     	for(var i=0;i<all.length;i++){
            if(cheeekclass(all[i].className,classname)){
                 newarr.push(all[i]);
            }
     	}
     	return newarr;
     }
}
// console.log(getclass('box'));

function cheeekclass(className,classname){
       var arr=className.split(' ');
       for(var i=0;i<arr.length;i++){
           if(arr[i]==classname){
             return true;
           }
       }
       return false;
}
function $(select,ranger){
	ranger=ranger|| document;
    var frist=select.charAt(0);
    if(frist == '.'){
    	return getClass(select.substring(1),ranger);
        
    }else if(frist =='#'){
        return document.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
        return ranger.getElementsByTagName(select);
    }
}

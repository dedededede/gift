var currentpos,timer;
function initialize()
{
timer=setInterval ("scrollwindow ()",30);
}
function sc()
{
clearInterval(timer);
}
function scrollwindow()
{
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if (currentpos !=document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize
function getUrlParam1(name){nk="�װ���С�������˽ڿ���";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;
}  
function getUrlParam3(name){
	nk="";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;
}  
function getUrlParam2(name){
	nk="�ŵĵ�";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return nk;
}
function ok(){
}
function oCopy(obj)
{} 

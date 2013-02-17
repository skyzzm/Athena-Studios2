/*(c)copyright 2001 rain1977.comer  (rainer@mail.hf.ah.cn)
http://www.dhtmlet.com*/


function clickit(e){
if (n==1) window.open('http://www.bol.com.cn/cgi-bin/bol/bol/hmp_dp_006.jsp?referCode=15114');
}


function doSetBanner(){
var i=Math.random();
var oMainBanner=document.all('banner');

if (i<=1.0) {
n=1;with (oMainBanner) {src='http://www.rongshuxia.com/channels/adv/bol/sdbanner/468_60.gif';onclick=clickit;style.cursor="hand";}
}
}


function doBanner(){
if (window.document.readyState=="complete") doSetBanner();
else window.setTimeout('doBanner()',100);
}

doBanner();
/*(c)copyright 2001 rain1977.comer  (rainer@mail.hf.ah.cn)
http://www.dhtmlet.com*/

function gourl(l,i,s){
switch (i) {
case 1 : neww=window.open(l);neww.focus();break;
case 2 : neww=window.open(l,s,"scrollbars=1");neww.focus();break;
case 3 : parent.location=l;break;
case 4 : top.location=l;break;
case 5 : neww=window.open(l,s,"scrollbars=1,resizable=1");neww.focus();break;
default : window.location=l;break;
}}
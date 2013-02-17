function getCookieVal (offset) 
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name)
{
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)
{
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0)
break;
}
return null;
}

var RSAdsFlag=0;
var ViewRSAdsDay="0";
var CmdLine="<";
CmdLine=CmdLine+"SCRIPT LANGUAGE='JavaScript1.1' ";
CmdLine=CmdLine+"SRC='http://www.rongshuxia.com/bbs/le.js'>";
CmdLine=CmdLine+"</";
CmdLine=CmdLine+"script>";


var CmdLine2="<";
CmdLine2=CmdLine2+"SCRIPT LANGUAGE='JavaScript1.1' ";
CmdLine2=CmdLine2+"SRC='http://www.rongshuxia.com/bbs/ule.js'>";
CmdLine2=CmdLine2+"</";
CmdLine2=CmdLine2+"script>";
if (GetCookie('ViewRSAdsDay')!=null) 
 ViewRSAdsDay=GetCookie('ViewRSAdsDay');
 //alert(ViewRSAdsDay);
if (ViewRSAdsDay!=(new Date( )).getDate( ))
 {
  if (GetCookie('RSAdsFlag')!=null){RSAdsFlag=GetCookie('RSAdsFlag');}
  RSAdsFlag++;  
  //alert(RSAdsFlag);
  document.cookie=" RSAdsFlag="+RSAdsFlag;
   if (RSAdsFlag%9==1)
   {
    //alert("OOKKK!!!"); 
    document.write(CmdLine);
    ViewRSAdsDay=(new Date( )).getDate( );
    document.cookie=" ViewRSAdsDay="+ViewRSAdsDay;
   }else {document.write(CmdLine2);}
}else {document.write(CmdLine2);}


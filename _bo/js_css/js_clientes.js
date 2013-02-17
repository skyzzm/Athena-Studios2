var zona=0;
var multiplicador=0;
var numeroejecuciones=0;
var velocidad=0;
var activo=0;
var abierto=0;
var numerodenoticias=8
var topeizda=-(numerodenoticias)*150+75;
var topedcha=316;

function init() 
{
	parent.defaultStatus='treelogic :: clientes';
	setTimeout('finaliza()',1000)
	test();
	DynLayerInit();
	mueveinicial();
	CambiaCabeza();
}

function veloon(i)
{
if (i==-3) menos3on.show(); else menos3on.hide();
if (i==-2) menos2on.show(); else menos2on.hide();
if (i==-1) menos1on.show(); else menos1on.hide();
if (i==0) neutroon.show(); else neutroon.hide();
if (i==1) mas1on.show(); else mas1on.hide();
if (i==2) mas2on.show(); else mas2on.hide();
if (i==3) mas3on.show(); else mas3on.hide();
if (i<0) parent.parent.paisarelleno.ojosclinotizda(); else parent.parent.paisarelleno.ojosclinothizda();
if (i>0) parent.parent.paisarelleno.ojosclinotdcha(); else parent.parent.paisarelleno.ojosclinothdcha();

}

function test()
{
	numeroejecuciones++;
	if (numeroejecuciones>0) setTimeout('test()',10);
}

function finaliza ()
{
	multiplicador=100/numeroejecuciones;
	numeroejecuciones=-1000;
}

function pos_xy_init()
{
	document.onmousemove = mouseMove
	if (is.ns) document.captureEvents(Event.MOUSEMOVE)
}

function CambiaCabeza()
{
	if (activo==1)
	//si activo es 1 entonces ESTA FUERA del frame superior
	{
		if (!is.ns) parent.parent.paisarelleno.document.cabeza.src='images/ani_clientes_off.gif';
		else parent.parent.paisarelleno.document.cuerpo.document.cabeza.src='../images/ani_clientes_off.gif';
	}
	else 
	{
		if (!is.ns) parent.parent.paisarelleno.document.cabeza.src='images/ani_clientes.gif';			
		else parent.parent.paisarelleno.document.cuerpo.document.cabeza.src='../images/ani_clientes.gif';
	}
}

function mouseMove(e)
{
	var x = (is.ns)? e.pageX : event.x+document.body.scrollLeft
	var y = (is.ns)? e.pageY : event.y+document.body.scrollTop
	if (cargado&&!abierto) 
	{
		if  ((y>10)&&(y<120)) 
		{	
			if (x<70) zona=-3;
			else if(x<150) zona=-2;
			else if(x<250) zona=-1;
			else if(x<510) zona=0;
			else if(x<610) zona=1;
			else if(x<690) zona=2;
			else if(x<761) zona=3;
			if (activo==0) CambiaCabeza();
			velocidad=zona*multiplicador;
			activo=1;
		}			
		else 
		{
			if (activo==1) CambiaCabeza();
			activo=0;zona=0;
		}
		veloon(zona);
	}	
}

var cargado=1;

function mueveinicial()
{
noticiasContent.glideTo('fast','slow',topedcha-175,10,10,100);
pos_xy_init();
mueve();
}

function cierra(numcliente)
{
lacapa=eval('cliente'+numcliente+'on');
lacapa.glideTo('slow','fast',-475,10,10,100);
abierto=0;
}

function abre(numcliente)
{
lacapa=eval('cliente'+numcliente+'on');
lacapa.glideTo('slow','fast',140,10,10,100);
abierto=1;
}


function mueve()
{
	if (activo==1)
	{
	noticiasContent.moveBy(velocidad,null);
	if ((velocidad<0)&&(noticiasContent.x<topeizda)) noticiasContent.x=topeizda;
	if ((velocidad>0)&&(noticiasContent.x>topedcha)) noticiasContent.x=topedcha;
	} 
	setTimeout('mueve()',20);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//------------------------------ RUTINA PARA ABRIR Y REESCALAR UNA VENTANA --------------------------//
// La llamada a la rutina se efectúa de la siguiente forma:
//
//	freescalar(url1,url2,posx,posy,ancho,alto,inc)	siendo:
//
//	url1: url de la página cargada inicialmente mientras se reescala la ventana
//	url2: url de la página que se cargará en la ventana una vez haya terminado de reescalarse
//	posx: coordenada x en la que queremos situar la ventana 
//	posy: coordenada y en la que queremos situar la ventana 
//	ancho: ancho final de la ventana
//	alto: ancho final de la ventana
//	inc: incremento en pixels de reescalado de la ventana

var openurl='';
var alto=100;
var ancho=100;
var anchofinal,altofinal=0;
var incremento=0;
var incx=0;
var incy=0;

function freescalar(url1,url2,posx,posy,wfinal,hfinal,inc)
  {
    win2=open(url1,'win2','resizable=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,width=100,height=100,left='+posx+',top='+posy+',screenLeft='+posx+',screenTop='+posy);
    if (!document.layers&&!document.all)
      {
        win2.location=url2;
        return
      }
    anchofinal=wfinal;
    altofinal=hfinal;
    openurl=url2;
    incremento=inc;
    incx=inc;
    incy=inc;
    reescalar();
  }

function reescalar()
  {
    if ((alto<=altofinal)||(ancho<=anchofinal))	
      {
        if (ancho>anchofinal) {incx=0}
        if (alto>altofinal) {incy=0}
        win2.resizeBy(incx,incy);
        ancho+=incx;
        alto+=incy;

        setTimeout("reescalar()",50);
      }
    else
      {ancho=100;alto=100;win2.location=openurl;}
  }
//---------------------------------------------- FIN DE RUTINA -------------------------------------------//

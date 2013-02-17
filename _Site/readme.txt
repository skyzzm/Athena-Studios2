 说明：如何添加或删除一组菜单   
  第一步：定义菜单的个数
第一个菜单分为两个图层，一个用来显示菜单，另一个用于显示菜单内容
myLayer[0]=(NN) ? document.MFX0 : document.all.MFX0.style;　　　// 第一组
myLayer[1]=(NN) ? document.MFX1 : document.all.MFX1.style;
myLayer[2]=(NN) ? document.MFX2 : document.all.MFX2.style;　　　// 第二组
myLayer[3]=(NN) ? document.MFX3 : document.all.MFX3.style;
myLayer[4]=(NN) ? document.MFX4 : document.all.MFX4.style;　　　// 第三组
myLayer[5]=(NN) ? document.MFX5 : document.all.MFX5.style;
myLayer[6]=(NN) ? document.MFX6 : document.all.MFX6.style;　　　// 第四组
myLayer[7]=(NN) ? document.MFX7 : document.all.MFX7.style;
如果要删除一组显示三个菜单的话，则将MFX6和MFX7这一组删除即可。
添加一组菜单则在上面的基础上再添加如下：
myLayer[8]=(NN) ? document.MFX8 : document.all.MFX8.style;　　　// 第五组
myLayer[9]=(NN) ? document.MFX9 : document.all.MFX9.style;

--------------------------------------------------------------------------------
第二步：定义菜单名称及内容
在所有图层的后面加上一组菜单的名称：
<DIV id="MFX8" style="position:absolute; width:150px; height:38px; z-index:2; left:20px; top: 463px; visibility: hidden"> 
　<table width="156" border="0" cellspacing="0" cellpadding="0">
　　<tr> 
　　　<td height="13">
　　　　<a href="#" class="c215DC6" onClick="MFXrunMenu(8,5)">菜单名称</a>　// 8是ID名，5是速度
　　　</td> 
　　</tr>
　</table>
</DIV>
在MFX8图层后面再定义一个菜单内容的图层：
<DIV id="MFX9" style="position:absolute; width:150px; height:116px; z-index:1; left:20px; top: 488px; visibility: hidden"> 
　<table width="156" border="0" cellspacing="0" cellpadding="0">
　　<tr> 
　　　<td height="13">菜单内容</td>
　　</tr>
　</table>
</DIV>

--------------------------------------------------------------------------------
图层位置的定义：
图层必须定义一个绝对位置，这样对你显示的效果位置会有准确性些。
图层大小的定义： 
宽、高度必须为实际的宽、高度，因为菜单拉伸时会要根据图层定义的宽、高度来显
示，如果不是实际的则会出现某部分不能显示来或高出一节表格为空的部分，影响效果。

此效果是一豪根据以一个DW插件睡成的效果改写的。源DW插件： mfx_slidemenu.mxp 
  至此你就可以完成这个实例了，快去试试吧！  

---
layout: post
title: TextScript类
date: '2006-09-02'
categories:
- 未分类
tags: []
published: true
comments: true
---
<p>外国的一个牛人编写的一个字效果类：<br />原文：<a href="http://www.actionscript.com/Article/tabid/54/ArticleID/TextScript--The-Text-Effect-Infrastructure/Default.aspx">http://www.actionscript.com/Article/tabid/54/ArticleID/TextScript--The-Text-Effect-Infrastructure/Default.aspx</a><br />类的下载地址：<a href="http://www.actionscript.com/files/satori/TextScript.zip">TextScript</a><br />
<p>
<object height="280" width="660" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" xcodebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab">
<param name="Movie" value="/images/cnblogs_com/fireyang/TextEffects_demo.swf" /> <param name="Quality" value="high" /><param name="wmode" value="transparent" /><param name="bgcolor" value="#000000" /><embed src="http://www.cnblogs.com/images/cnblogs_com/fireyang/TextEffects_demo.swf" width="660" height="280" quality="high" wmode="transparent" bgcolor="#000000" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>
</object><br />首先在舞台上新建一个动态的文本，随意添加几个字符，在属性的栏里选择字体，是否粗体，是否有下划线等<br />接下来是代码:<br /><textarea rows="15" cols="70">import com.actionscript.text.TextScript;</textarea><br />
var myFormat:TextFormat = new TextFormat();<br />
myFormat.font="Arial Black";<br />
myFormat.bold = true;<br />
myFormat.size = 22;<br />
myFormat.color = 0x550000;<br />
var phrase:String = "Dynamic Effects with TextScript";<br />
var xLoc:Number = 50;<br />
var yLoc:Number = 70;<br />
var delay:Number = 3;<br />
m = TextScript.blurIn(this, phrase, xLoc, yLoc, myFormat, delay);
 <br />其中myFormat中的样式一定要和放到舞台上的字体，是否粗体，是否有下划线等要一致，否则便不能显示出来。<br />如果要去掉效果就用如下的代码<br /><textarea rows="4" cols="70">onMouseUp = function() {</textarea><br />
TextScript.removeBlurIn(m, delay);<br />
}
 </p>
<img src="http://www.cnblogs.com/FireYang/aggbug/513022.html" width="1" height="1" /><br /><br /><div align="right"><a style="text-decoration:none;" href="http://FireYang.cnblogs.com/" target="_blank">FireYang</a> 2006-09-24 00:13 <a href="http://www.cnblogs.com/FireYang/archive/2006/09/24/513022.html#Feedback" target="_blank" style="text-decoration:none;">发表评论</a></div></p>

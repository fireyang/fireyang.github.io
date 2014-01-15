---
layout: post
title: Picasa 的Flash浏览插件
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><h3>可以用以下两种方式：</h3>
<ol>
	<li><font size="3">&nbsp;可以在浏览器地址直接输入以下的地址，在其他论坛或blog的embed的src属性填入以下字符串也可以：<br />
	</font><font size="2">http://picasaweb.google.com/s/c/bin/slideshow.swf?<font face="arial black,avant garde">host</font>=picasaweb.google.com&amp;<font face="arial black,avant garde">captions</font>=1<br />
	&amp;<font face="arial black,avant garde">noautoplay</font>=1&amp;<font face="arial black,avant garde">RGB</font>=0x000000<br />
	&amp;<font face="arial black,avant garde">feed</font>=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F<font face="arial black,avant garde">shenhuan007</font>%3Fkind%3Dphoto%26alt%3Drss</font></li>
	<li><font size="3">如果支持HTML，你可以直接粘帖以下的代码：&nbsp;<br />
	</font><font size="2">&lt;embed type=&quot;application/x-shockwave-flash&quot; src=&quot;http://picasaweb.google.com/s/c/bin/slideshow.swf&quot; <font face="arial black,avant garde">width</font>=&quot;150&quot; <font face="arial black,avant garde">height</font>=&quot;130&quot; flashvars=&quot;host=picasaweb.google.com&amp;<font face="arial black,avant garde">captions</font>=1&amp;<font face="arial black,avant garde">noautoplay</font>=1&amp;<font face="arial black,avant garde">RGB</font>=0x000000<br />
	</font><font size="2">&amp;feed=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F<font face="arial black,avant garde">shenhuan007</font>%3Fkind%3D<font face="arial black,avant garde">photo</font>%26alt%3Drss&quot; pluginspage=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/embed&gt;</font></li>
</ol>
<p>
<font size="3">关键属性解释（加粗）：</font> 
</p>
<ol>
	<li><font face="Arial Black" size="2">width和height：相框的宽度和高度。</font></li>
	<li><font face="Arial Black" size="2"><font face="Verdana"><font face="Arial Black">host：服务提供，固定为</font><font face="Verdana">picasaweb.google.com。</font></font></font></li>
	<li><font face="Arial Black" size="2">captions：表示显示图片的时候是否同时显示文字说明，如果不就删掉此属性。</font></li>
	<li><font face="Arial Black" size="2">noautoplay：表示显示的图片是否自动播放，如果你要自动播放就省略这句。</font></li>
	<li><font face="Arial Black" size="2">RGB：相册的背景色，根据个人喜好设置。</font></li>
	<li><font face="Arial Black" size="2">shenhuan007：这里用你自己的相册帐号代替。</font></li>
	<li><font face="Arial Black" size="2">photo：表示播放所有相册的所有图片，还可以用album代替，表示显示相册的封面图片，且伴随文字说明。</font></li>
</ol>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="202" height="164">
	<param name="width" value="202" />
	<param name="height" value="164" />
	<param name="src" value="http://picasaweb.google.com/s/c/bin/slideshow.swf" />
	<param name="pluginspage" value="http://www.macromedia.com/go/getflashplayer" />
	<param name="flashvars" value="host=picasaweb.google.com&amp;captions=1&amp;RGB=0x000000&amp;feed=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Fshenhuan007%3Fkind%3Dphoto%26alt%3Drss" />
	<embed type="application/x-shockwave-flash" width="202" height="164" src="http://picasaweb.google.com/s/c/bin/slideshow.swf" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="host=picasaweb.google.com&amp;captions=1&amp;RGB=0x000000&amp;feed=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Fshenhuan007%3Fkind%3Dphoto%26alt%3Drss"></embed>
</object>
</p>

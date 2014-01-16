---
layout: post
title: getDefinitionByName+Embed使用，未定义错误
date: '2009-07-03'
categories:
- actionscript
- flex
tags:
- actionscript
- embed
- flex
published: true
comments: true
---
<p>getDefinitionByName的用处是可以通过字符串映射的取到相应的类。<br />
但是如果你在一个类中，embed一个图片，将这个图片声明为一个class 。这样用getDefinitionByName来调用，就会出现“未定义错误”。
<pre>package
{
	import flash.display.Bitmap;
	import flash.display.MovieClip;
	import flash.utils.getDefinitionByName;</pre></p>

<p>	/**<br />
	 * ...<br />
	 * @author FireYang<br />
	 */<br />
	public class embedTest extends MovieClip<br />
	{<br />
		[Embed(source="tile1.png")]<br />
		private var tile1:Class;</p>

<p>		public function embedTest()<br />
		{<br />
			<span style="color: #ff0000;">var string:String = "embedTest_tile1";//所在类名+"_"+embed的类名</span>
			var c:Class = getDefinitionByName(string) as  Class;<br />
			var b:Bitmap = new c();<br />
			b.x = 100;<br />
			b.y = 100;<br />
			trace(b);<br />
			addChild(b);<br />
		}<br />
	}<br />
}
采用上面的形式，红色部分是重点，就没问题了！原因还没找到，呵呵，但是测试了没错！</p>

<p><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="300" height="300" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="{{urls.media}}/2009/07/Main.swf" /><embed type="application/x-shockwave-flash" width="300" height="300" src="{{urls.media}}/2009/07/Main.swf"></embed></object></p>

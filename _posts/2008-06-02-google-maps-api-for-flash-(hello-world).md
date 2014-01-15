---
layout: post
title: Google Maps API for Flash (Hello World)
categories:
- 胡说八道
tags: []
published: false
comments: true
---
<p><h1 id="HelloWorld">Maps Flash API的一个“Hello World”示例</h1>
通过这个简单的示例，你将很容易学会针对Flash的Google Maps API。在这篇教程里，  我们创建一个简单的swf文件和刚好该文件的html文件。
<h2 id="ActionScript">ActionScript 原理</h2>
这个api的地图我们将用as 3.0来创建和处理。这里不做as 3.0的详细讲述，你可以参考下面的链接进行学习（英语）：
<ul>
	<li><a href="http://livedocs.adobe.com/flash/9.0/ActionScriptLangRefV3/"> http://livedocs.adobe.com/flash/9.0/ActionScriptLangRefV3/</a></li>
	<li><a href="http://www.adobe.com/devnet/flex/quickstart/coding_with_mxml_and_actionscript/"> http://www.adobe.com/devnet/flex/quickstart/coding_with_mxml_and_actionscript/</a></li>
</ul>
下面的 ActionScript 代码在地图上显示一个纽约城市。
<blockquote>package com.google.maps.examples {</blockquote></p>

<p>import flash.events.Event;<br />
import com.google.maps.Map;<br />
import com.google.maps.MapEvent;<br />
import com.google.maps.MapType;<br />
import com.google.maps.LatLng;</p>

<p>public class HelloWorld extends Map {</p>

<p>public function HelloWorld() {<br />
super();<br />
addEventListener(MapEvent.MAP_READY, onMapReady);<br />
}</p>

<p>private function onMapReady(event:MapEvent):void {<br />
setCenter(new LatLng(40.736072,-73.992062), 14, MapType.NORMAL_MAP_TYPE);<br />
}
}<br />
}
注意这里定义一个 <code>com.google.maps.examples的命名空间，所以你的源文件(HelloWorld.as)的路径应该在com/google/maps/examples的目录下。<br />
你可以在</code><a href="http://gmaps-samples-flash.googlecode.com/svn/trunk/examples/HelloWorld.html"> gmaps-samples-flash.googlecode.com/svn/trunk/examples/HelloWorld.html</a>看到示例，源代码在<a href="http://gmaps-samples-flash.googlecode.com/source/browse/trunk/examples/HelloWorld.html" target="_blank">这里。</a>注意在你创建自己的swf的是需要自己的序列号，这样你才能放到自己的网站上。</p>

<p>即使是一个简单的示例，也有5个地方需要注意：
<ol>
	<li>在我们自己的应用程序代码中需要声明一个包。</li>
	<li>需要从Google Maps API for Flash库中导入数个包。</li>
	<li>我们需要一个AS类去创建一个Map对象。</li>
	<li>我们需要创建一个事件监听器，当地图装载完后触发。</li>
	<li>当事件触发，我们需要将地图上的指定位置居中。</li>
</ol>
步骤如下：
<ol>
	<li>声明包：
<pre class="prettyprint"><span class="kwd">package</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">google</span><span class="pun">.</span><span class="pln">maps</span><span class="pun">.</span><span class="pln">examples </span><span class="pun">{</span></pre>
</li>
	<li>导入AS库：
<pre class="prettyprint"><span class="kwd">import</span><span class="pln"> flash</span><span class="pun">.</span><span class="pln">events</span><span class="pun">.</span><span class="typ">Event</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">google</span><span class="pun">.</span><span class="pln">maps</span><span class="pun">.</span><span class="typ">MapEvent</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">google</span><span class="pun">.</span><span class="pln">maps</span><span class="pun">.</span><span class="typ">Map</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">google</span><span class="pun">.</span><span class="pln">maps</span><span class="pun">.</span><span class="typ">MapType</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> com</span><span class="pun">.</span><span class="pln">google</span><span class="pun">.</span><span class="pln">maps</span><span class="pun">.</span><span class="pln">types</span><span class="pun">.</span><span class="typ">LatLng</span><span class="pun">;</span></pre>
</li>
	<li>设置你自己的Map对象<br />
其中含有一个构造函数，事件监听器都放到构造函数之前，
<pre class="prettyprint"><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">HelloWorld</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Map</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="typ">HelloWorld</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="kwd">super</span><span class="pun">();</span><span class="pln">
addEventListener</span><span class="pun">(</span><span class="typ">MapEvent</span><span class="pun">.</span><span class="pln">MAP_READY</span><span class="pun">,</span><span class="pln"> onMapReady</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></pre>
</li>
	<li>设定事件监听器的触发函数
<pre class="prettyprint"><span class="pln">  </span><span class="kwd">private</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> onMapReady</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">:</span><span class="typ">MapEvent</span><span class="pun">):</span><span class="kwd">void</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
setCenter</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">LatLng</span><span class="pun">(</span><span class="lit">40.736072</span><span class="pun">,-</span><span class="lit">73.992062</span><span class="pun">),</span><span class="pln"> </span><span class="lit">14</span><span class="pun">,</span><span class="pln"> </span><span class="typ">MapType</span><span class="pun">.</span><span class="pln">NORMAL_MAP_TYPE</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></pre>
</li>
	<li><span class="pun">制定UI容器
</span>Google Maps Flash应用程序不单只有AS代码还需要用户接口框架来呈现地图并与其他UI元素交互。在Flex中，这个UI组件被指定在MXML标记语言里。<br />
在helloworld.mxml里如下所示：
<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;examples:HelloWorld xmlns:examples="com.google.maps.examples.*" key="ABCDEF" width="800" height="600"/&gt;
你看到这里的xmlns就是你定义helloworld.as的命名空间，其中key属性需要你到google网站上申请的一个地图序列号（免费的）。你还可以指定高度和宽度。</pre>
</li>
	<li><span class="pun">编译你的swf文件，你可以在flex的工程里编译，也可以使用flex sdk的mxmlc工具来编译。<br />
google提供的map sdk里包含一个</span><code>maps_flash_1_1.swc，你可以直接用下面的语句编译：
</code>
<pre># Execute this command from the ROOT of your development directory, not from within
# the leaf of the namespace (e.g. not in com/google/maps/examples)
#
hostname$:~/src/helloworld$ <em>path_to_flex_sdk</em>/bin/mxmlc helloworld.mxml -library-path+=maps_flash_1_1.swc
Loading configuration file /home/src/flex_sdk/frameworks/flex-config.xml
/home/src/helloworld/helloworld.swf (22223 bytes)</pre>
</li>
	<li><span class="pun">嵌入HTMl里
</span>
<pre class="prettyprint"><span class="pln"> </span><span class="pun">&lt;</span><span class="tag">div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"map_canvas"</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"map_canvas"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">object</span><span class="pln">
</span><span class="atn">classid</span><span class="pun">=</span><span class="atv">"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"</span><span class="pln">
</span><span class="atn">codebase</span><span class="pun">=</span><span class="atv">"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"</span><span class="pln">
</span><span class="atn">width</span><span class="pun">=</span><span class="atv">"800px"</span><span class="pln">
</span><span class="atn">height</span><span class="pun">=</span><span class="atv">"600px"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">param</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"movie"</span><span class="pln"> </span><span class="atn">value</span><span class="pun">=</span><span class="atv">"helloworld.swf"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">param</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"quality"</span><span class="pln"> </span><span class="atn">value</span><span class="pun">=</span><span class="atv">"high"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">param</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"flashVars"</span><span class="pln"> </span><span class="atn">value</span><span class="pun">=</span><span class="atv">"key=ABCDEF"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">embed</span><span class="pln">
</span><span class="atn">width</span><span class="pun">=</span><span class="atv">"800px"</span><span class="pln">
</span><span class="atn">height</span><span class="pun">=</span><span class="atv">"600px"</span><span class="pln">
</span><span class="atn">src</span><span class="pun">=</span><span class="atv">"helloworld.swf"</span><span class="pln">
</span><span class="atn">quality</span><span class="pun">=</span><span class="atv">"high"</span><span class="pln">
</span><span class="atn">flashVars</span><span class="pun">=</span><span class="atv">"key=ABCDEFG"</span><span class="pln">
</span><span class="atn">pluginspage</span><span class="pun">=</span><span class="atv">"http://www.macromedia.com/go/getflashplayer"</span><span class="pln">
</span><span class="atn">type</span><span class="pun">=</span><span class="atv">"application/x-shockwave-flash"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="tag">embed</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="tag">object</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;
你是否注意到里面有个flashVars属性里指定了一个key。这个key和前面swf里的是一样的，如果你不想把key编译到里面，也可以放置在这里，如果两个地方都有，这里的key将覆盖掉里面的key。</span></pre>
</li>
	<li>
<pre class="prettyprint"><span class="pun">直接在MXML里使用
</span><span class="pun">&lt;?</span><span class="pln">xml version</span><span class="pun">=</span><span class="str">"1.0"</span><span class="pln"> encoding</span><span class="pun">=</span><span class="str">"utf-8"</span><span class="pun">?&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Application</span><span class="pln"> </span><span class="atn">xmlns</span><span class="pln">:</span><span class="atn">mx</span><span class="pun">=</span><span class="atv">"http://www.adobe.com/2006/mxml"</span><span class="pln"> </span><span class="atn">layout</span><span class="pun">=</span><span class="atv">"absolute"</span><span class="pln"> </span><span class="atn">width</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pln"> </span><span class="atn">height</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Panel</span><span class="pln"> </span><span class="atn">title</span><span class="pun">=</span><span class="atv">"Google Maps API for Flash - Simple Map"</span><span class="pln"> </span><span class="atn">width</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pln"> </span><span class="atn">height</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">UIComponent</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"mapContainer"</span><span class="pln">
</span><span class="atn">initialize</span><span class="pun">=</span><span class="atv">"startMap(event);"</span><span class="pln">
</span><span class="atn">resize</span><span class="pun">=</span><span class="atv">"resizeMap(event)"</span><span class="pln">
</span><span class="atn">width</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pln"> </span><span class="atn">height</span><span class="pun">=</span><span class="atv">"100%"</span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Panel</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Script</span><span class="pun">&gt;</span><span class="pln">
&lt;![CDATA[
import flash.events.Event;
import com.google.maps.MapEvent;
import com.google.maps.Map;
import com.google.maps.MapType;
import com.google.maps.LatLng;</span></pre></li></ol></p>

<p>private var map:Map;</p>

<p>public function startMap(event:Event):void {<br />
map = new Map();<br />
map.addEventListener(MapEvent.MAP_READY, onMapReady);<br />
mapContainer.addChild(map);<br />
}
public function resizeMap(event:Event):void {<br />
map.setSize(new Point(mapContainer.width, mapContainer.height));<br />
}
private function onMapReady(event:MapEvent):void {<br />
map.setCenter(new LatLng(40.736072,-73.992062), 14, MapType.NORMAL_MAP_TYPE);<br />
}
]]&gt;
<span class="pun">&lt;/</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Script</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="tag">mx</span><span class="pln">:</span><span class="atn">Application</span><span class="pun">&gt;</span>

</p>

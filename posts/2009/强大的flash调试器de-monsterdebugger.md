---
layout: post
title: 强大的Flash调试器De MonsterDebugger
date: '2009-07-18'
categories:
- actionscript
- Air
tags:
- Air
- Debuger
- Flash
published: true
comments: true
---
<p>无意间看到这个调试器，没有试用过，但是看了视频演示，确实很强大。</p>

<p>我把认为的优点介绍下：
<ol>
	<li>开源免费。（这是我最看重的一点）</li>
	<li>可以传递Trace，这其他调试器也可以，但是这个可以做到按trace的时间，用list的形式列出来，很好<br />
而且如果你trace的是xml，还自动以树形组件呈现。</li>
	<li>实时变量参看，你可以间当前的所有变量的值，可以直观的参看，而且可以对变量直接进行赋值，赋值结果直接传递到swf里。</li>
	<li>实时调用可见的函数，你可以在调试的时候，直接在调试器中调用函数，并且传递参数。</li>
</ol>
不足：
<ol>
	<li>查看的变量好像只能是displayobject一些自带的变量，而且不能看child的，这功能需要完善。</li>
	<li>没有断点功能！（用air做估计难度比较大，呵呵）</li>
	<li>debug后，正式发布需要删除所有的debug代码，比较麻烦。但是外置的调试器，都是通过通讯来实现的，估计比较难做到官方的调试器那样；<br />
所以在正式发布，需要对调试代码注释掉，一则为了安全，一则为了执行效率。</li>
	<li>因为是经过通讯实现调试，所以应该加个加密机制，就是在swf设置密码，在调试器查看时需要输入密码才能查看。（类似的调试器有这功能了）</li>
</ol>
但是总体来说这个外置调试器是我见过最牛的了，值得推荐！</p>

<p>地址：<a href="http://demonsterdebugger.com/" target="_blank">http://demonsterdebugger.com</a>/</p>

<p>air下载：<a id="download" href="http://monsterdebugger.googlecode.com/files/MonsterDebuggerV2_04.air" target="_blank">Download latest version</a></p>

<p>项目地址：<a href="http://monsterdebugger.googlecode.com" target="_blank">monsterdebugger.googlecode.com</a></p>

<p><a href="{{urls.media}}/2009/07/homepage.png"><img class="alignnone size-full wp-image-525" title="homepage" src="{{urls.media}}/2009/07/homepage.png" alt="homepage" width="658" height="247" /></a></p>

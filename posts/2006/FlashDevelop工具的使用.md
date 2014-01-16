---
layout: post
title: FlashDevelop工具的使用
date: '2006-10-01'
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><ol>
    <li>安装：<br /><a href="http://www.flashdevelop.org/downloads/releases/FlashDevelop-2.0.0-Final.exe" target="_blank">下载地址</a>
    </li><li>直接编译as文件，加入一下代码<br />/**&nbsp;@mtasc -swf&nbsp; swf路径 -header 500:400:24:EFEFEF -main*/<br />注意一定要有两个**&nbsp;<br />其中是mtasc的参数如下：<br />-pack&lt;路径&gt;：编译对象包中的所有文件。<br />-cp&lt;路径&gt;：添加类路径<br />-v：开启详细模式，能显示编译的详细信息<br />-strict：开启严格模式，加了此参数表示程序内所有的变量必须标明类型，否则会出现error。<br />-infer：开启本地变量引用，在初始化变量的时候就决定该变量的类型。<br />-header &lt;文件头&gt;：格式为：宽度：高度：帧速：背景色，如：600:375:30:FFFFFF<br />其他略<br />
    </li><li>可以新建项目，在项目里进行编写。 </li>
</ol>
<img src="http://www.cnblogs.com/FireYang/aggbug/529050.html" width="1" height="1" /><br /><br /><div align="right"><a style="text-decoration:none;" href="http://FireYang.cnblogs.com/" target="_blank">FireYang</a> 2006-10-14 17:35 <a href="http://www.cnblogs.com/FireYang/archive/2006/10/14/529050.html#Feedback" target="_blank" style="text-decoration:none;">发表评论</a></div></p>

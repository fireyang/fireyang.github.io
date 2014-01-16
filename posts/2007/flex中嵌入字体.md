---
layout: post
title: Flex中嵌入字体
date: '2007-08-02'
categories:
- flex
tags:
- flex
- font
published: true
comments: true
---
<p>使用以下的形式就可以将你本地电脑上的字体嵌入到Flex中
<span style="font-size: xx-small;"><span style="font-family: 宋体; color: red;">注意：在嵌入字体的同时会相应的增大</span><span style="color: red;"><span style="font-family: Times New Roman;">Flex</span></span><span style="font-family: 宋体; color: red;">文件的大小</span></span></p>

<p><span style="font-size: xx-small;"></span><span style="color: red;"><span style="font-family: Courier New; color: #000000;">@font-face {<br />
src: local("Arial");<br />
fontFamily: ArialEmbedded;<br />
fontWeight: normal;<br />
}</span></span></p>

<p>@font-face {<br />
src: local("Arial");<br />
fontFamily: ArialEmbedded;<br />
fontWeight: bold;<br />
}</p>

<p>Application {<br />
font-family: ArialEmbedded;<br />
}</p>

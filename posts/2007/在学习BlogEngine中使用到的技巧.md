---
layout: post
title: 在学习BlogEngine中使用到的技巧
date: '2007-08-02'
categories: []
tags: []
published: true
comments: true
---
<p><ol>
	<li><a href="http://weblogs.asp.net/scottgu/pages/ASP.NET-2.0-Tips_2C00_-Tricks_2C00_-Recipes-and-Gotchas.aspx" target="_blank">Asp.Net 2.0技巧收集</a> </li>
	<li>使用了c#2.0的泛式编程 <br />
	在msdn cast中的c#新锐技术中发现了关于泛式编程的视频教程，学习了，收益不少，是通过IReader学习的。 </li>
	<li>使用了在Web.config中注册用户控件和自定义控件： <br />
	相关文章连接：<br />
	<a href="http://msdn2.microsoft.com/zh-cn/library/ms164640(VS.80).aspx" target="_blank">pages 的 controls 元素（ASP.NET 设置架构）</a><br />
	<a href="http://blog.csdn.net/scottgu/archive/2006/11/28/1418318.aspx" target="_blank">技巧和诀窍：如何在Web.config中注册用户控件和自定义控件</a> <br />
	引用： <br />
	web.config中：<br />
	&nbsp;<font color="#0000ff">&lt;</font><font color="#800000">?xml</font><font color="#ff0000">&nbsp;version</font><font color="#0000ff">=&quot;1.0&quot;?&gt;</font><font color="#000000"><br />
	</font><font color="#0000ff">&lt;</font><font color="#800000">configuration</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;</font><font color="#0000ff">&lt;</font><font color="#800000">system.web</font><font color="#0000ff">&gt;</font><font color="#000000"> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</font><font color="#0000ff">&lt;</font><font color="#800000">pages</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="#0000ff">&lt;</font><font color="#800000">controls</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="#0000ff">&lt;</font><font color="#800000">add</font><font color="#ff0000">&nbsp;tagPrefix</font><font color="#0000ff">=&quot;scottgu&quot;</font><font color="#ff0000">&nbsp;src</font><font color="#0000ff">=&quot;~/Controls/Header.ascx&quot;</font><font color="#ff0000">&nbsp;tagName</font><font color="#0000ff">=&quot;header&quot;/&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</font><font color="#800000">add</font><font color="#ff0000">&nbsp;tagPrefix</font><font color="#0000ff">=&quot;scottgu&quot;</font><font color="#ff0000">&nbsp;src</font><font color="#0000ff">=&quot;~/Controls/Footer.ascx&quot;</font><font color="#ff0000">&nbsp;tagName</font><font color="#0000ff">=&quot;footer&quot;/&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</font><font color="#800000">add</font><font color="#ff0000">&nbsp;tagPrefix</font><font color="#0000ff">=&quot;ControlVendor&quot;</font><font color="#ff0000">&nbsp;assembly</font><font color="#0000ff">=&quot;ControlVendorAssembly&quot;/&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</font><font color="#800000">controls</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="#0000ff">&lt;/</font><font color="#800000">pages</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;</font><font color="#0000ff">&lt;/</font><font color="#800000">system.web</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	</font><font color="#0000ff">&lt;/</font><font color="#800000">configuration</font><font color="#0000ff">&gt;</font><font color="#000000"></font>&nbsp;<br />
	页面中：&nbsp; <br />
	<font color="#0000ff">&lt;</font><font color="#800000">html</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	</font><font color="#0000ff">&lt;</font><font color="#800000">body</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="#0000ff">&lt;</font><font color="#800000">form</font><font color="#ff0000">&nbsp;id</font><font color="#0000ff">=&quot;form1&quot;</font><font color="#ff0000">&nbsp;runat</font><font color="#0000ff">=&quot;server&quot;&gt;</font><font color="#000000"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp; </font><font color="#0000ff">&lt;</font><font color="#800000">scottgu:header</font><font color="#ff0000">&nbsp;ID</font><font color="#0000ff">=&quot;MyHeader&quot;</font><font color="#ff0000">&nbsp;runat</font><font color="#0000ff">=&quot;server&quot;</font><font color="#ff0000">&nbsp;</font><font color="#0000ff">/&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</font><font color="#800000">form</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	</font><font color="#0000ff">&lt;/</font><font color="#800000">body</font><font color="#0000ff">&gt;</font><font color="#000000"><br />
	</font><font color="#0000ff">&lt;/</font><font color="#800000">html</font><font color="#0000ff">&gt;</font><font color="#000000"></font> <br />
	</li>
</ol>
</p>

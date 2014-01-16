---
layout: post
title: ASP.NET中的标签映射（Tag mapping ）（译）
date: '2007-08-02'
categories:
- .Net
tags:
- .Net
- Tag mapping
published: true
comments: true
---
<p> 译自：<a href="http://blog.madskristensen.dk/post/Tag-mapping-in-ASPNET.aspx">http://blog.madskristensen.dk/post/Tag-mapping-in-ASPNET.aspx</a></p>

<p>最近我开始在 <a href="http://zyb.com/">ZYB</a> 工作但并没有看所有的代码。有一天我看到了一个web.config的一个特殊的节点<a href="http://msdn2.microsoft.com/en-us/library/ms164641.aspx">tagMapping</a>。我之前从来没有见到过，直到问了我周围的同事。基本上，它是在编译的时候将所有的一种类型转换成另一种类型。在自然语言的意思是它能将你整个网站中的所有例如<em>System.Web.UI.WebControls.Textbox</em> 实例转换成另一个组件。</p>

<p>如此酷的作用，我来做一个简单的示例。我已经建了一个简单的组件，这个组件继承自TextBox并重写了Text属性，因此它能HTML编码text。我把它放置到App_Code文件夹下并命名为SafeTextBox。</p>

<p><p class="code"> <span class="kwrd">public</span> <span class="kwrd">class</span> SafeTextBox : System.Web.UI.WebControls.TextBox<br />
{
<span class="kwrd">public</span> <span class="kwrd">override</span> <span class="kwrd">string</span> Text<br />
{
get<br />
{
<span class="kwrd">return</span> <span class="kwrd">base</span>.Text;<br />
}
set<br />
{
<span class="kwrd">base</span>.Text = System.Web.HttpUtility.HtmlEncode(<span class="kwrd">value</span>);<br />
}
}<br />
}</p>

<p>然后我需要在web.config中通过标签映射将所有的文本框和SafeTextBox实例关联起来。它能在整个网站中轻松的覆盖所有的TextBox实例。这个就是需要的Web.config配置：</p>

<p><p class="code"> <span class="kwrd">&lt;</span><span class="html">pages</span><span class="kwrd">&gt;</span>
<span class="kwrd">&lt;</span><span class="html">tagMapping</span><span class="kwrd">&gt;</span>
<span class="kwrd">&lt;</span><span class="html">add</span> <span class="attr">tagType</span><span class="kwrd">="System.Web.UI.WebControls.TextBox"</span> <span class="attr">mappedTagType</span><span class="kwrd">="SafeTextBox"</span><span class="kwrd">/&gt;</span>
<span class="kwrd">&lt;/</span><span class="html">tagMapping</span><span class="kwrd">&gt;</span>
<span class="kwrd">&lt;/</span><span class="html">pages</span><span class="kwrd">&gt;</span></p>

<p>这是一个聪明的方法将你自己的服务器组件应用到一个网站上去。 可惜的是直到最近我才知道有这种方法。</p></p></p>

---
layout: post
title: Air调用其他应用程序
date: '2008-07-12'
categories:
- Air
tags:
- Air
published: true
comments: true
---
<p>如果用air去跳转到一个特定的文件，系统会根据这个文件的类型，启用他默认的应用程序，如下：
<blockquote>&lt;?xml version=<span style="color: #0000ff;">"1.0"</span> encoding=<span style="color: #0000ff;">"utf-8"</span>?&gt;
<span style="color: #000080;">&lt;mx:WindowedApplication xmlns:mx=<span style="color: #0000ff;">"<a href="http://www.adobe.com/2006/mxml" target="_blank">http://www.adobe.com/2006/mxml</a>"</span> layout=<span style="color: #0000ff;">"absolute"</span>&gt;</span>
<span style="color: #000080;">&lt;mx:Script&gt;</span>&lt;![CDATA[<br />
import flash.net.URLRequest;</blockquote></p>

<p>public function clickButton():void{<br />
var request : URLRequest = new URLRequest('C:\\projects\\test.doc');<br />
navigateToURL(request )<br />
}
]]&gt;<span style="color: #000080;">&lt;/mx:Script&gt;</span></p>

<p><span style="color: #000080;">&lt;mx:Button click=<span style="color: #0000ff;">"clickButton()"</span> /&gt;</span>
<span style="color: #000080;">&lt;/mx:WindowedApplication&gt;</span>
这样就会用word打开这个文件了。</p>

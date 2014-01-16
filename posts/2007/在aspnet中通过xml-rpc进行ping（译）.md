---
layout: post
title: 在 ASP.NET中通过 XML-RPC 进行Ping（译）
date: '2007-08-02'
categories:
- .Net
tags:
- .Net
- XML-RPC
published: true
comments: true
---
<p> 译自：<a href="http://blog.madskristensen.dk/post/Ping-using-XML-RPC-in-ASPNET.aspx" target="_blank">http://blog.madskristensen.dk/post/Ping-using-XML-RPC-in-ASPNET.aspx</a></p>

<p>很多Blog已经具备了Ping功能，当内容发生被创建或修改的时候，就会Ping不同的Ping服务，例如 <a href="http://pingomatic.com/" target="_blank">Ping-o-Matic</a>, <a href="http://www.feedburner.com/" target="_blank">Feedburner</a> 和<a href="http://www.technorati.com/" target="_blank">Technorati</a>。但并不只是博客才能受惠这个Ping服务，所有的网站都可以用这个技术来定期发布它们的更新情况。</p>

<p>所有的这些服务都可以使用<a href="http://www.xmlrpc.com/" target="_blank">XML-RPC</a>或它的拓展形式，因此你可以写一个Ping类，仅仅是用来添加Ping服务的URL。我已经写了一个可以使用到ASP.NET应用程序中的简单静态Ping类。
<h2>代码：</h2>
Here is the the three methods needed to send XML-RPC pings.<br />
有3个方法发送XML-RPC Ping</p>

<p><p class="code"> /// &lt;summary&gt;<br />
/// Sends a ping to various ping services.<br />
/// &lt;/summary&gt;<br />
public static void Send()<br />
{
Execute("http://ping.feedburner.com");<br />
Execute("http://rpc.pingomatic.com/RPC2");<br />
}</p>

<p>/// &lt;summary&gt;<br />
/// Creates a web request and with the RPC-XML code in the stream.<br />
/// &lt;/summary&gt;<br />
private static void Execute(string url)<br />
{
try<br />
{
HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);<br />
request.Method = "POST";<br />
request.ContentType = "text/xml";<br />
request.Timeout = 3000;</p>

<p>AddXmlToRequest(request);<br />
request.GetResponse();<br />
}
catch (Exception)<br />
{
// Log the error.<br />
}
}</p>

<p>/// &lt;summary&gt;<br />
/// Adds the XML to web request. The XML is the standard<br />
/// XML used by RPC-XML requests.<br />
/// &lt;/summary&gt;<br />
private static void AddXmlToRequest(HttpWebRequest request)<br />
{
Stream stream = (Stream)request.GetRequestStream();<br />
using (XmlTextWriter writer = new XmlTextWriter(stream, Encoding.ASCII))<br />
{
writer.WriteStartDocument();<br />
writer.WriteStartElement("methodCall");<br />
writer.WriteElementString("methodName", "weblogUpdates.ping");<br />
writer.WriteStartElement("params");<br />
writer.WriteStartElement("param");<br />
// Add the name of your website here<br />
writer.WriteElementString("value", "The name of your website");<br />
writer.WriteEndElement();<br />
writer.WriteStartElement("param");<br />
// The absolute URL of your website - not the updated or new page<br />
writer.WriteElementString("value", "http://www.example.com");<br />
writer.WriteEndElement();<br />
writer.WriteEndElement();<br />
writer.WriteEndElement();<br />
}
}
<h2>使用：</h2>
下载下面这个类并把它放置在 App_Code 文件夹或一个类库里。在你ASP.NET工程的任何位置你都可以使用如下的形式来调用Send方法：<br />
PingService.Send();</p>

<p>因为要ping 所有不同的服务，你可能会考虑用异步调用的形式来实现。<a href="http://blog.madskristensen.dk/post.aspx?id=6b2ae805-21dc-4973-8d4d-96aec63c824c" target="_blank">如此实现</a>。现在你有一个类，可以使用 XML-RPC　pings 各种各样的服务了，你可以从这个列表里找<a href="http://www.dailyblogtips.com/ping-list/" target="_blank">ping 服务 </a>.</p>

<p><a href="http://blog.madskristensen.dk/file.axd?file=PingService.zip" rel="enclosure" target="_blank">PingService.zip (816 bytes)</a></p></p>

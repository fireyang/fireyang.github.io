---
layout: post
title: 从Microsoft.NET连接到DB2
date: '2007-11-02'
categories:
- .Net
- database
tags:
- .Net
- DB2
published: true
comments: true
---
<p><img src="http://www.fireyang.com/image.axd?picture=image001.jpg" alt="" width="566" height="373" />
<ol>
	<li>IBM DB2 UDB 8.1.2（需要安装服务器版的DB2）<br />
DB2Connection cn = new DB2Connection(<br />
"Database=TEST;UserID=db2admin; Password=password;Server=IS500");<br />
DB2Command cmd = new DB2Command("SELECT COUNT(*) FROM EMP01", cn);<br />
int count = Convert.ToInt32(cmd.ExecuteScalar());</li>
	<li>Microsoft Host Integration Server 2006<br />
试用下载地址：<a href="https://thesource.ofallevil.com/taiwan/hiserver/evaluation/trial/default.mspx">https://thesource.ofallevil.com/taiwan/hiserver/evaluation/trial/default.mspx</a></li>
	<li>DataDirect Connect for .NET, Edition 2.0
<a href="http://www.ddtek.com/products/dotnet/dotnetrelhigh.asp">http://www.ddtek.com/products/dotnet/dotnetrelhigh.asp</a> (DataDirect)</li>
	<li>Mono.Data.DB2Client
<a href="http://www.go-mono.com/ibmdb2.html">http://www.go-mono.com/ibmdb2.html</a> (Mono)</li>
</ol>
链接字符串：
<h4>TCP/IP</h4>
<span class="cpp-string"><span style="font-family: Courier New;">"Provider=DB2OLEDB;Network Transport Library=TCPIP;Network Address=XXX.XXX.XXX.XXX;Initial Catalog=MyCtlg;Package Collection =MyPkgCol;Default Schema=Schema;User ID=MyUser;Password=MyPW"</span></span>
<h4>APPC</h4>
<span class="cpp-string"><span style="font-family: Courier New;">"Provider=DB2OLEDB;APPC Local LU Alias=MyAlias;APPC Remote LU Alias =MyRemote;Initial Catalog=MyCtlg;Package Collection=MyPkgCol;Default Schema=Schema;UserID=MyUser;Password=MyPW"</span></span></p>

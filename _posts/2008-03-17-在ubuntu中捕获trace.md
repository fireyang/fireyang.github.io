---
layout: post
title: 在ubuntu中捕获trace
categories:
- actionscript
- flex
- ubuntu
tags:
- actionscript
- trace
- ubuntu
published: true
comments: true
---
<p>在ubuntu下的firefox中有一个这样的插件flashtracer插件，配置好他就能捕获你的trace，当然你的flashplayer一定要是debug版本的</p>

<p>参考此网站：<a href="http://www.sephiroth.it/weblog/archives/2007/01/install_flashtracer_on_linux.php" target="_blank">http://www.sephiroth.it/weblog/archives/2007/01/install_flashtracer_on_linux.php </a></p>

<p>其实你也可以手动把trace捕获到一个文件里，具体的配置是</p>

<p>在你的～目录下新建一个mm.cfg（在windows中一般是c盘），在ubuntu下一般就是/home/{username}；其中的{username}就是你系统的登录名
<table style="width: 552px; height: 99px;" border="1" cellspacing="0" cellpadding="0" width="552">
<tbody>
<tr>
<td>操作系统</td>
<td>位置</td>
</tr>
<tr>
<td>Windows XP</td>
<td>C:Documents and Settings[user name]mm.cfg</td>
</tr>
<tr>
<td>Windows 2000</td>
<td>C:mm.cfg</td>
</tr>
<tr>
<td>Mac OS X</td>
<td>MacHD:Library:Application Support:macromedia:mm.cfg</td>
</tr>
<tr>
<td>ubuntu</td>
<td>/home/[user name]/mm.cfg</td>
</tr>
</tbody>
</table>
在这个文件中写入以下内容</p>

<p>TraceOutPutFileName=/home/fireyang/.macromedia/Flash_Player/Logs/flashlog.txt<br />
ErrorReportingEnable=1<br />
TraceOutputFileEnable=1<br />
MaxWarnings=100</p>

<p>其中：<br />
TraceOutputFileEnable<br />
设置值为 0 (不写入文件) 或 1 (写入文件).<br />
TraceOutputFileName<br />
文件路径，如果没有指定，会在mm.cfg的同目录下生成一个叫flashlog.txt文件<br />
ErrorReportingEnable<br />
设置值为 0 (不输出错误信息到文件) 或 1 (输出错误信息). 默认为0<br />
MaxWarnings<br />
写入文件的错误信息数量。如果为0则没有限制。</p>

<p>Ps:从Flash Player 9 Update开始，我们不能修改日志文件的位置了，默认的位置为：<br />
Windows C:\Documents  and Settings\user_name\Application Data\Macromedia\Flash Player\Logs<br />
Macintosh  Users/user_name/Library/Preferences/Macromedia/Flash Player/Logs/<br />
Linux  home/user_name/macromedia/Flash_Player/Logs/flashlog.txt</p>

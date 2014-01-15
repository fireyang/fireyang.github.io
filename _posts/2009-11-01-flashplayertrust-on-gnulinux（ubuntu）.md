---
layout: post
title: FlashPlayerTrust on Gnu/Linux（ubuntu）
categories:
- actionscript
- 关于RIA
tags: []
published: true
comments: true
---
<p>在ubuntu如果直接在本地进行播放flash，如果这个flash有调用外部文件，经常出现"不能访问本地资源";</p>

<p>所有需要手动设置flashplayer的安全设置：</p>

<p>找到配置目录：/home/{user}/.macromedia/Flash_Player/#Security/FlashPlayerTrust</p>

<p>在该目录下可能已经有一些cfg文件了，如果你有安装air应用的话。</p>

<p>你可以在该目录下建：myTrustFiles.cfg</p>

<p>然后将以下的内容输入到文本：</p>

<p><code>/home/{user}</code></p>

<p><code> /tmp</code></p>

<p>这样，就可以允许你的/home/{user}和/tmp所包含的swf都可以穿越安全沙箱了</p>

<p>如果是windows和mac系统，只是路径不同而已：</p>

<p>Windows     boot disk\Documents and Settings\\Application Data\Macromedia\Flash Player\#Security<br />
Macintosh /Users//Library/Preferences/Macromedia/Flash Player/#Security/</p>

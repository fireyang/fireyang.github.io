---
layout: post
title: ms的小技巧
date: '2007-08-02'
categories:
- 其他
tags:
- 小技巧
published: true
comments: true
---
<p>以前要在命令行模式下打开某个文件夹，首先要用cmd打开命令行窗口，再用cd跳到那个目录下，现在可以通过下面的方法，直接在右击中选择命令就可以直接打开了，很方便（特别是在命令行下编译东东的时候，配置下环境变量就可以了），当然如果你懂用ant 来做项目当然更方便了。<br />
方法如下：（技术来源文章：<a href="http://www.cnblogs.com/java_aix/archive/2005/02/08/103399.html">http://www.cnblogs.com/java_aix/archive/2005/02/08/103399.html</a>）<br />
在“开始”－“运行”中输入“regedit”，打开注册表。找到HKEY_CLASSES_ROOTFoldershell，如果没有shell，可以在Folder下新建一个名为shell的键，在shell下新建一个名为“命令行(Command Windows)”的键，在这个键之下再建一个新的名为“Command”的键，设置默认值为“cmd /K cd /d %L”。
<img src="http://www.fireyang.com/image.axd?picture=20071204010701.jpg" alt="" width="640" height="427" />
完成后，直接在文件夹上右击，选择“命令行command windows”就直接打开，并跳到相应的目录了。</p>

<p><img src="http://www.fireyang.com/image.axd?picture=20071204010702.jpg" alt="" width="640" height="427" /></p>

<p><a href="http://www.fireyang.com/file.axd?file=regIn.reg">regIn.reg (368.00 bytes)</a>：可以直接下载这个注册表，双击导入就可以</p>

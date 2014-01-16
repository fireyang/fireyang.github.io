---
layout: post
title: ubuntu 连接远程 windows xp
date: '2008-01-02'
categories:
- ubuntu
tags:
- ubuntu
- windows
- 远程控制
published: true
comments: true
---
<p><span style="padding: 0pt 2px; background-color: #99cc00">sudo apt-get install rdesktop<br />
rdesktop 192.168.100.x</span></p>

<p>-f 全屏<br />
-a 16位色<br />
端口 3389（linux 22 sh）<br />
注意：windows 的服务中的 Terminal Servies 需要开启。我的电脑 右键 属性 远程中，勾选 允许远程用户链接到此计算机。另外，退出的时候选择注销，而不是关机！</p>

<p>问题有二：<br />
1.windows xp 必须打开 允许远程用户登录<br />
2.很奇怪，我的 guoshuang 登录时，会提示踢掉已经登录的用户（据查，xp sp2 以后不能同时登录）<br />
3.我的 windows 2003 允许远程用户登录 灰色不可选！</p>

<p>更多参数：</p>

<p>-u xxxxxx 登录用户，可选<br />
-p xxxxxx 登录密码，可选<br />
-r clipboard:PRIMARYCLIPBOARD 重要，剪贴板可以与远程桌面交互<br />
-a 16 颜色，可选，不过最高就是16位<br />
-z 压缩，可选<br />
-g 1024x768 分辨率，可选，缺省是一种比当前本地桌面低的分辨率<br />
-P 缓冲，可选<br />
-r disk:wj=/home/magicgod 映射虚拟盘，可选，会在远程机器的网上邻居里虚拟出一个映射盘，功能很强，甚至可以是软盘或光盘<br />
-r sound:off 关闭声音，当然也可以把远程发的声音映射到本地来。</p>

<p>重定向：</p>

<p>这时才发现它原来也可以将本地磁盘带到远端，而且连中文文件名也支持。只要加上 -r 参数就可以了。它除了可以将本地磁盘带到远端以外，还支持串口和打印机，这下 Windows 上远程桌面客户端的功能在 Linux 上都齐了。-r 参数的格式如下：<br />
-r comport:COM1=/dev/ttyS0 // 将串口 /dev/ttyS0 重定向为 COM1<br />
-r comport:COM1=/dev/ttyS0,COM2=/dev/ttyS1 // 多个串口重定向<br />
-r disk:floppy=/mnt/floppy // 将 /mnt/floppy 重定向为远程共享磁盘 'floppy'<br />
-r disk:floppy=/mnt/floppy,cdrom=/mnt/cdrom,root=/,c=/mnt/c // 多个磁盘重定向<br />
-r clientname=&lt;client name&gt; // 为重定向的磁盘设置显示的客户端名称<br />
-r lptport:LPT1=/dev/lp0 // 将并口 /dev/lp0 重定向为 LPT1<br />
-r lptport:LPT1=/dev/lp0,LPT2=/dev/lp1 // 多个并口重定向<br />
-r printer:mydeskjet // 打印机重定向<br />
-r printer:mydeskjet="HP LaserJet IIIP" // 打印机重定向<br />
-r sound:[local|off|remote] // 声音重定向</p>

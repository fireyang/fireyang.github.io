---
layout: post
title: Virtualbox下Debian中安装增强包
categories:
- 其他
tags:
- linux
published: true
comments: true
---
<p>安装好debian后，为了能与windows共享，所以需要共享文件夹。</p>

<p>为此需要安装增强功能，设备-》安装增强功能</p>

<p>你可以在debian的/media/cdrom中发现VBoxLinuxAdditions.run，然后执行：</p>

<p>sudo sh ./VBoxLinuxAdditions.run</p>

<p>如果你发现的你cdrom下啥都没有，需要手动挂载cdrom驱动器，命令如下：</p>

<p>sudo mount /dev/cdrom /media/cdrom</p>

<p>重新进入虚拟Debian，在命令行终端下输入：</p>

<p>mkdir   ~/work</p>

<p>mount -t vboxsf  temp  ~/work</p>

<p>其中”temp”是之前创建的共享文件夹的名字.</p>

<p>这样就可以使用了，呵呵。</p>

<p>假如您不想每一次都手动挂载，可以在/etc/fstab中添加一项</p>

<p>temp ~/work  vboxsf rw,gid=100,uid=1000,auto 0 0</p>

<p>这样就能够自动挂载了。</p>

<p>如果你发现无法加载到内核中，好像需要安装个linux headers才可以：</p>

<p>apt-get install build-essential linux-<em>headers</em>-`uname -r`</p>

<p>其中uname -r你执行后就可以获得，当前内核版本号。</p>

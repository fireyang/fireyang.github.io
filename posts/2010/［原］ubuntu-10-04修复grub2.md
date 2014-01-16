---
layout: post
title: ［原］ubuntu 10.04修复grub2
date: '2010-04-11'
categories:
- ubuntu
tags:
- ubuntu
published: true
comments: true
---
<p>在ubuntu系统之后安装其他系统，会将ubuntu的grub破坏掉，ubuntu 10.04已经使用grub2了。我尝试用9.04的livecd去修复，一直报错，而且想chroot也不成，个人能力不行吧。</p>

<p>现在用ubuntu 10.04的livecd来修复方法：
<ol>
	<li>进入livece的try模式下。</li>
	<li>将原来的系统mount到/mnt/newlinux下，方法如下我的系统盘在/dev/sda8下：
<pre lang="bash" line="1">
sudo mkdir /mnt/newlinux
sudo  mount /dev/sda8 /mnt/newlinux
sudo mount --bind /proc /mnt/newlinux/proc
sudo mount --bind /dev /mnt/newlinux/dev
sudo mount --bind /sys /mnt/newlinux/sys
sudo chroot /mnt/newlinux
</pre></li>
	<li>安装grub2,如果已经安装，也会给出提示
<pre lang="bash" line="1">sudo apt-get install grub2</pre></li>
	<li>开始修复,在修复一般是选择磁盘最上级目录。自动执行……
<pre lang="bash" line="1">upgrade-from-grub-legacy</pre></li>
</ol></p>

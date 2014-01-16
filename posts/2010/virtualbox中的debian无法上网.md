---
layout: post
title: VirtualBox中的Debian无法上网
date: '2010-08-11'
categories:
- 其他
tags:
- linux
published: true
comments: true
---
<p>之前因为在设置virtualbox的时候而修改了vb网卡的mac地址，但是debian中的mac地址并不会因此自动修改，</p>

<p>所以才导致在nat模式下debian无法连到外网的问题，其实只需要在debian中更改eth0(eth1也一样)对应的物理地址就可以了。</p>

<p>修改的文件如下：</p>

<p>/etc/udev/rules.d/70-persistent-net.rules</p>

<p>找到对应的mac数值，修改成跟你的vb的mac值一样就可以了，</p>

<p>折腾了比较久，很杯具……</p>

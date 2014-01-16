---
layout: post
title: ubuntu下修复menu_proxy_module_load错误
date: '2010-11-30'
categories:
- ubuntu
tags:
- ubuntu
published: true
comments: true
---
<p>在终端启动gedit或gvim的时候，总是出现类似的问题：undefined symbol: <em>menu_proxy_module_load</em></p>

<p>找了下发现是安装呢macbuntu的时候，之后再卸载后发生的问题，好像是多删除某个东西，</p>

<p>在这里找到答案：<a href="http://alexsleat.co.uk/2010/10/19/gedit-failed-to-load-type-module-menu_proxy_module_load-ubuntu/">http://alexsleat.co.uk/2010/10/19/gedit-failed-to-load-type-module-menu_proxy_module_load-ubuntu/</a></p>

<p>只需要重新安装下就可以了，执行命令如下：<br />
sudo apt-get install appmenu-gtk</p>

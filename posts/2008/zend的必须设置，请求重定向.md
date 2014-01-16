---
layout: post
title: zend Framework环境设置，请求重定向
date: '2008-03-29'
categories:
- php
- ubuntu
tags:
- .htaccess
- ubuntu
- zend FrameWork
published: true
comments: true
---
<p>
<h1 class="titel">Ubuntu系统启用Apache Mod_rewrite模块</h1>
<span id="zoom" class="a14c">sudo ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load  </span></p>

<p><span id="zoom" class="a14c"></span>
<p style="text-indent: 2em">sudo vim /etc/apache2/sites-enabled/000-default</p>
<p style="text-indent: 2em">将其中的：</p>
<p style="text-indent: 2em">AllowOverride None</p>
<p style="text-indent: 2em">修改为：</p>
<p style="text-indent: 2em">AllowOverride All</p>
<p style="text-indent: 2em">重启 Apache:</p>
<p style="text-indent: 2em">sudo /etc/init.d/apache2 restart</p>
<p style="text-indent: 2em">现在就可以在zend的网站目录下配置.htaccess文件了。</p>
<span id="zoom" class="a14c"></span>
<p style="text-indent: 2em">&nbsp;</p></p>

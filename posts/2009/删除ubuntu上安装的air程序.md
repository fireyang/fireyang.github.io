---
layout: post
title: 删除ubuntu上安装的air程序
date: '2009-01-29'
categories:
- Air
- ubuntu
tags:
- Air
- ubuntu
published: true
comments: true
---
<p>在ubuntu上安装air程序比较方便。但是没有直观的删除操作，只能命令行下删除，操作如下：
<ol>
	<li>查找应用程序全名：<br />
dpkg --list | grep name(name为程序名)</li>
	<li>根据上面查找的全名再执行删除<br />
sudo dpkg -r allname(allname为查找的程序全名)</li>
</ol></p>

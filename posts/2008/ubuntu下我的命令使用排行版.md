---
layout: post
title: ubuntu下我的命令使用排行版
date: '2008-12-06'
categories:
- ubuntu
tags:
- ubuntu
published: true
comments: true
---
<p>在ubuntu下,用这个命令可以知道你使用哪个命令是频率最高的：
<blockquote>history | awk '{a[$2]++ } END{for(i in a){print a[i] " " i}}' | sort -rn | head</blockquote>
我的排行如下：
<blockquote>120 ls<br />
119 cd<br />
48 cake<br />
43 sudo<br />
28 ping<br />
25 rdesktop<br />
19 gvim<br />
18 xrandr<br />
10 ifconfig<br />
8 gcc</blockquote>
你也不妨试试！</p>

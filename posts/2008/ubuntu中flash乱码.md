---
layout: post
title: ubuntu中flash乱码
date: '2008-09-10'
categories:
- ubuntu
tags:
- Flash
- ubuntu
published: true
comments: true
---
<p>在flash中可能由于字体的原因导致你的flash不能正确显示中文，由此而只显示一个个方框，其实方法很简单。</p>

<p>只需要删除/etc/fonts/conf.d/49-sansserif.conf即可，你可以这样操作:</p>

<p>cd /etc/fonts/conf.d/<br />
sudo cp 49-sansserif.conf  49-sansserif.conf~<br />
sudo rm 49-sansserif.conf</p>

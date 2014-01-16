---
layout: post
title: Flex中的透明AIR实现
date: '2008-07-10'
categories:
- Air
- flex
- 胡说八道
tags:
- Air
- flex
published: true
comments: true
---
<p>关键的地方是：</p>

<p>把<span style="color: #000102;">&lt;mx:WindowedApplication xmlns:mx="http://www.adobe.com/2006/mxml" layout="absolute"&gt;&lt;/mx:WindowedApplication&gt;</span></p>

<p>改成<span style="color: #000102;">&lt;mx:Application xmlns:mx="http://www.adobe.com/2006/mxml" layout="absolute"&gt;&lt;/mx:Application&gt;</span></p>

<p>如果你要看详细的教程可以看这里的说明，写的比较详细：</p>

<p><a href="http://space.flash8.net/space/html/21/461421_itemid_403548.html" target="_blank">http://space.flash8.net/space/html/21/461421_itemid_403548.html</a></p>

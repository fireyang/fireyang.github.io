---
layout: post
title: 通过wift实现Android 的真机调试
date: '2011-11-23'
categories:
- android
tags:
- android
published: true
comments: true
---
<p>现在android的调试可以不用usb链接在一起调试了，用wifi连接就可以了，很不错！</p>

<p>参考：<a title="Debugging Your Android App Wirelessly on an Android Smartphone" href="http://www.jessechen.net/blog/debugging-your-android-app-wirelessly-on-an-android-smartphone/" target="_blank">Debugging Your Android App Wirelessly on an Android Smartphone</a>
<ol>
	<li>首先在你的android设备上安装个应用<a href="https://market.android.com/details?id=siir.es.adbWireless&amp;feature=search_result">adbWireless</a>。然后开启，如图：
<img class="alignnone size-full wp-image-968" title="5568035211_7dcd1ed9ed" src="{{urls.media}}/2011/11/5568035211_7dcd1ed9ed.jpeg" alt="" width="320" height="480" /></li>
	<li>然后用adb直接连接，就可以看到设备了，命令可以直接在android的应用开启就看到了：
<img class="alignnone size-full wp-image-969" title="2011-03-16_2103" src="{{urls.media}}/2011/11/2011-03-16_2103.png" alt="" width="629" height="311" /></li>
	<li>可以在eclipse里直接看到：
<img class="alignnone size-full wp-image-970" title="2011-03-16_2044" src="{{urls.media}}/2011/11/2011-03-16_2044.png" alt="" width="672" height="382" /></li>
</ol></p>

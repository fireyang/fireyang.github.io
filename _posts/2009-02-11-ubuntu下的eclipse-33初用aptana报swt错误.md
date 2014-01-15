---
layout: post
title: ubuntu下的eclipse 3.3初用aptana报SWT错误
categories:
- ubuntu
tags:
- aptana
- eclipse
- ubuntu
published: true
comments: true
---
<p>安装好aptana后，打开eclipse后，进入aptana页面的时候出现报swt的错误
<blockquote>Unhandled event loop exception No more handles (java.lang.UnsatisfiedLinkError: no swt-mozilla-gtk-3349 or swt-mozilla-gtk in swt.library.path, java.library.path or the jar file)</blockquote>
<a href="http://www.fireyang.com/blog/wp-content/uploads/2009/02/xia7312oz5w3ngis.jpg"><img class="alignnone size-medium wp-image-337" title="xia7312oz5w3ngis" src="http://www.fireyang.com/blog/wp-content/uploads/2009/02/xia7312oz5w3ngis-300x239.jpg" alt="" width="305" height="255" /></a></p>

<p>才发现原来在eclipse调用firefox的时候，其实是许亚xulrunner的，所以安装下就可以了
<blockquote>sudo apt-get install xulrunner</blockquote>
重新打开eclipse，搞定－）－</p>

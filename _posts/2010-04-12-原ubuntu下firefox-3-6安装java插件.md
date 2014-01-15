---
layout: post
title: '[原]ubuntu下firefox 3.6安装java插件'
categories:
- ubuntu
tags: []
published: true
comments: true
---
<p><ol>
	<li>连接java插件：
<pre lang="bash" line="1">ln -s /usr/local/java/jre1.6.0_17/lib/i386/libnpjp2.so libnpjp2.so  ~/.mozilla/plugins
</pre>
</li>
	<li>如果还不行，执行：
<pre lang="bash" line="1">
sudo update-alternatives --install /usr/lib/mozilla/plugins/libjavaplugin.so 
     mozilla-javaplugin.so /usr/lib/jvm/java-6-sun/jre/lib/i386/libnpjp2.so 50
</pre></li>
</ol></p>

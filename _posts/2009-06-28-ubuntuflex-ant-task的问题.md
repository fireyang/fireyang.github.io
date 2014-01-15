---
layout: post
title: ubuntu+flex ant task的问题
categories:
- flex
- ubuntu
tags:
- ant
- flex
- ubuntu
published: true
comments: true
---
<p>在ubuntu下安装了ant</p>

<p>sudo apt-get install ant</p>

<p>然后配置好sdk。</p>

<p>完全依照<a href="http://blog.eshangrao.com/2007/02/25/349/" target="_blank">http://blog.eshangrao.com/2007/02/25/349/</a>这里的配置，但是出问题了</p>

<p>每次在编译的时候出现：
<pre>java.lang.IllegalAccessError: class org.apache.xerces.util.XMLAttributesMMImpl$AttributeMMImpl cannot access its superclass org.apache.xerces.util.XMLAttributesImpl$Attribute
        at java.lang.ClassLoader.defineClass1(Native Method)
        at java.lang.ClassLoader.defineClass(ClassLoader.java:620)
        at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:124)
        at java.net.URLClassLoader.defineClass(URLClassLoader.java:260)
        at java.net.URLClassLoader.access$100(URLClassLoader.java:56)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:195)
        at java.security.AccessController.doPrivileged(Native Method)</pre>
后来查了下原来是ant的版本问题，我的是1.7.1。在1.6.2是没有这个问题的，但是有办法解决。<br />
将sdk中的某个文件屏蔽掉就可以了。
<pre>mv ~/flex/lib/xercesPatch.jar ~/flex/lib/xercesPatch.jar.bak</pre>
如此就可以了，继续学习ant……</p>

<p></p>

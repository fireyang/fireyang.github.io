---
layout: post
title: 打破flash中bitmapData 2800X2800的限制！
date: '2010-07-15'
categories:
- 其他
tags: []
published: true
comments: true
---
<p>关于图像数据一般都用bitmapData这个类来处理，但是它的局限就是大于2800X2800的大图片就没办法保存了。</p>

<p>根据bit-101的方法就是用自定义一个类用，多个bitmapData组合来使用。</p>

<p>设计如下：
<ol>
	<li>如果像素在2800之内，当然就用一个bitmapData就可以了</li>
	<li>如果宽度大于2800，就用多个横向的bitmapData来保存。长度超过2800也是一样。（类似将大图片按切片）</li>
</ol>
作者的说明：<a href="http://www.bit-101.com/blog/?p=1199" target="_blank">http://www.bit-101.com/blog/?p=1199</a></p>

<p>处理类：<a href="http://www.bit-101.com/blog/wp-content/uploads/2008/03/BigAssCanvas.as" target="_blank">BigAssCanvas.as</a></p>

<p>使用：</p>

<p>var myBigAssCanvas:BigAssCanvas = new BigAssCanvas(10000, 10000, true, 0xff000000);<br />
addChild(myBigAssCanvas);</p>

<p><span style="color: #ff0000;">注意：</span><span style="color: #ff0000;">这个类不是bitmapData，它可以直接添加到显示列表中。</span></p>

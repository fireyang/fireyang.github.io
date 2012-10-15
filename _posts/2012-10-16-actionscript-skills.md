---
layout: post
title: "[转]AS文本位图描边"
description: ""
category: 
tags: [ActionScript]
---
{% include JB/setup %}

## 文本位图描边 ##
来源：James Li 的[《使用位图滤镜为动态文本描边》](http://jamesli.cn/blog/?p=1489)
{% highlight javascript %}
import flash.display.Bitmap;
import flash.text.TextField;
import flash.filters.*;
import flash.geom.Point;
 
var field:TextField = getChildByName("tf") as TextField;
var bitmap:Bitmap = new Bitmap();
var bitmapData:BitmapData = new BitmapData(field.width+10,
	field.height+10, true,0x00);
bitmapData.draw(field,new Matrix(1,0,0,1,5,0));
var matrix:Array = [0,1,0,
					1,1,1,
					0,1,0
					];
//发光滤镜
bitmapData.applyFilter(bitmapData, bitmapData.rect,new Point(), 
	new GlowFilter(0x000000,1.0,2.0,2.0,10,2));
//卷积滤镜,减轻锯齿
bitmapData.applyFilter(bitmapData, bitmapData.rect, new Point(),
	new ConvolutionFilter(3,3,matrix,3));
 
bitmap.bitmapData = bitmapData;
 
bitmap.x = field.x + field.width + 10;
bitmap.y = field.y;
 
addChild(bitmap);
{% endhighlight %}


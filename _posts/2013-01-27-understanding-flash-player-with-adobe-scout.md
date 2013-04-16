---
layout: post
title: "通过Adobe Scout 了解Flash Player"
description: ""
category: ActionScript
tags: [ActionScript]
---
{% include JB/setup %}

原文：
[Understanding Flash Player with Adobe Scout](http://www.adobe.com/devnet/scout/articles/understanding-flashplayer-with-scout.html)

## FP(Flash Player)综述

* Timelines 时间轴 逐帧执行动画，类似一系列的标签，每帧执行这些标签，比如，在场景中移动对象，添加对象到舞台并缓动等。
* Scripts 脚本,也就是ActionScript，被FP在某些指定的时间点执行，比如SWF的加载，计时器的触发，或鼠标的点击等，也可以直接绑定在个别帧上。

FP在执行脚本的过程是变动的，大致可以分为以下四类：

* Immediate activities: 立刻执行，就是在代码执行到的时候就立刻执行，比如new Bitmap、初始一个HTTP请求。
* Ongoing activities:持续执行 ，就是初始化后，就持续执行，而不是片段性，如：播放声音，下载文件等
* Deferred activities:延迟执行，就是一些操作会比较耗时，而延后执行，如:重新渲染，比如在更改一个显示对象的坐标，不会马上重新渲染，而是在之后的某个点再去渲染
* Implicit activities:隐形执行，是一些内部操作，是你无法控制的，比如垃圾回收的执行，对操作系统的鼠标和键盘事件的监听等。



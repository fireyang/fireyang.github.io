---
layout: post
title: ubuntu无法切换视觉效果
date: '2009-02-06'
categories:
- 未分类
tags: []
published: true
comments: true
---
<p>今天很奇怪无法切换到视觉效果的正常。</p>

<p>使用compiz直接运行，出现以下错误提示：
<blockquote>/usr/bin/compiz.real (core) - Error: Could not acquire compositing manager selection on screen 0 display ":0.0"<br />
/usr/bin/compiz.real (core) - Fatal: No manageable screens found on display :0.0</blockquote>
然后查了好多资料原来是开启了Metacity的复合特性，只要关闭就可以了</p>

<p><span style="font-size: 150%; line-height: normal;"><span style="font-weight: bold;">打开gconf-editor， 勾选/apps/metacity/general/compositing_manager这个键值即可</span></span></p>

---
title: 2014新的开始
date: '2014-01-16'
description:
categories:

tags:
-	随笔
---

好久没有写blog了，折腾了下把以前的wordpress的关掉了，全部迁移到github上来，之前用Jekyll
现在用[Gor](https://github.com/wendal/gor)来搭建，因为是用golang写的，所以compile比较方便，也不需要安装ruby和若干gems。

在迁移的过程中也出现了若干问题，大致步骤如下：

* 导出wordpress的文章（自带导出），输出：wordpress.xml
* 对wordpress.xml进行转换，折腾了很多，py，ruby，nodejs都尝试过，最后参考
参考[迁移WordPress博客至Octopress](http://www.dengdezhao.cn/blog/2013-03-19/qian-yi-wordpressbo-ke-zhi-octopress/)对wordpressdotcom做了简单的修改，改后的wordpressdotcom.rb在[gist](https://gist.github.com/fireyang/8450557)上
* 写脚本更改图片的连接，把uploads的资源拷贝到media下
* 提交到github上

参考：
* [迁移WordPress博客至Octopress](http://www.dengdezhao.cn/blog/2013-03-19/qian-yi-wordpressbo-ke-zhi-octopress/)
* [从WordPress迁移到Ruhoh的经验](http://wendal.net/linux/%E4%BB%8EWordPress%E8%BF%81%E7%A7%BB%E5%88%B0Ruhoh%E7%9A%84%E7%BB%8F%E9%AA%8C/)
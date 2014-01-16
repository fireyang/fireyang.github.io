---
layout: post
title: 安装ROR(Rails)
date: '2007-12-01'
categories:
- 其他
tags:
- rails
- 安装
published: true
comments: true
---
<p> 安装Ruby：<br />
从 <a href="http://www.rubyonrails.org.tw/">http://www.rubyonrails.org.tw/</a> 下载 ，安装Ruby。<br />
添加环境变量 ruby下bin 到 path</p>

<p>运行 ruby -v 显示版本号，表示安装成功。</p>

<p>安装Rails：<br />
(1) 远程安装：<br />
运行 gem install rails --include-dependencies，安装Rails（需要连接网络）。</p>

<p>(2) 本地安装：<br />
从 <a href="http://www.rubyonrails.org.tw/down.html">http://www.rubyonrails.org.tw/down.html</a>下载 rails-2.0.1.gem，安装Rails。<br />
运行 gem install rails-2.0.1.gem</p>

<p>运行 rails -v 显示版本号，表示安装成功。</p>

<p>使用：<br />
运行 rails path/to/your/new/application 创建一个新的项目。<br />
运行 ruby path/to/your/new/application/script/server 启动服务。</p>

<p>手工安装非常麻烦，可以从 <a href="http://www.rubyonrails.org.tw/down.html">http://www.rubyonrails.org.tw/down.html</a>
<h1 style="font-size: 20px">包裝好的<br />
Ruby on Rails</h1>
，全部搞定。</p>

<p>个人经验采用网络安装老是显示超时，建议先下载Gem在本地安装……</p>

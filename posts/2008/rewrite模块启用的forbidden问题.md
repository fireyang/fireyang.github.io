---
layout: post
title: rewrite模块启用的Forbidden问题
date: '2008-08-20'
categories:
- ubuntu
tags:
- apache2
- rewrite
- ubuntu
published: true
comments: true
---
<p>问题：如果要支持rewrite，必须在设置目录权限的时候使用AllowOverride All，但是我一访问就提示403错误（Forbidden），提示你没有权限访问该目录</p>

<p>原来要使用rewrite模块，不仅仅要AllowOverride All，还必须要设置 Options <span class="hilite1">FollowSymLinks。</span></p>

<p>这样才能成功使用。</p>

<p>在ubuntu启动rewrite的命令：<span>sudo a2enmod rewrite </span></p>

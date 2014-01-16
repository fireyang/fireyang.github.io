---
layout: post
title: 解决prism无法启动
date: '2010-04-17'
categories:
- ubuntu
tags:
- ubuntu
published: true
comments: true
---
<p>这几天在折腾ubuntu 10.04的内核升级，没想到把prism给破坏了……<br />
错误提示：<br />
Could not find compatible GRE between version 1.9.2 and 1.9.2.*.<br />
执行修复：<br />
sudo xulrunner-1.9.2 --register-global<br />
不要问我原理，因为我也不知道，哈哈哈哈</p>

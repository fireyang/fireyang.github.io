---
layout: post
title: "python develop env"
description: ""
category: 
tags: []
---
{% include JB/setup %}


## Python 开发环境
安装pip安装工具

	wget  https://github.com/pypa/pip/raw/master/contrib/get-pip.py
	sudo python get-pip.py

安装沙盒环境:
     
     sudo pip install virtualenv
  
使用沙盒环境

	＃创建环境
	virtualenv 沙盒名（比如mysandbox）
	＃启用沙盒
	source mysandbox/bin/activate
	＃关闭沙盒
	source mysandbox/bin/deactivate

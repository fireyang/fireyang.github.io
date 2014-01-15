---
layout: post
title: debian支持sql server连接
categories:
- ubuntu
tags:
- freetds
- sql server
- ubuntu
published: true
comments: true
---
<p><dl> <dt>如果你想要让ubuntu支持sql server，需要安装以下的包 </dt> <dt><a href="http://packages.ubuntu.com/dapper/freetds-dev">freetds-dev</a></dt> <dd lang="en">MS SQL and Sybase client library (static libs and headers)</dd> <dt><a href="http://packages.ubuntu.com/dapper/libct3">libct3</a></dt> <dd lang="en">libraries for connecting to MS SQL and Sybase SQL servers</dd> <dt><a href="http://packages.ubuntu.com/dapper/libsybdb5">libsybdb5</a></dt> <dd lang="en">libraries for connecting to MS SQL and Sybase SQL servers</dd> <dt><a href="http://packages.ubuntu.com/dapper/tdsodbc">tdsodbc</a></dt> <dd lang="en">ODBC driver for connecting to MS SQL and Sybase SQL servers</dd> </dl>sudo apt-get install   "包名称"</p>

<p>再安装：<br />
sudo apt-get install php5-sybase<br />
然后重启，重启后就一切搞定<br />
sudo /etc/init.d/apache2 restart</p>

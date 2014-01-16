---
layout: post
title: ubuntu 手动安装Apache
date: '2008-01-02'
categories:
- ubuntu
tags:
- apache
- ubuntu
published: true
comments: true
---
<p>
<ol>
	<li>去www.apache.org下载apache(httpd的一个bz2的包)，一般放到～目录下的</li>
	<li>解压压缩包：tar -zxvf 你下载的包名称（如： httpd*.tar.gz）</li>
	<li>一次执行下面的语句<br />
cd httpd*<br />
./configure --prefix=/usr/local/apache2<br />
make<br />
sudo make install</li>
	<li>sudo /usr/local/apache2/bin/apachectl stop (如果安装成功的话,默认已经启动了该服务,不管有没有启动,先关掉它.)<br />
初步修改一下httpd.conf文件<br />
sudo gedit /usr/local/apache2/conf/httpd.conf<br />
找到 行: #ServerName www.example.com:80<br />
在它下面一行加入: ServerName localhost</li>
	<li>现在启动httpd服务<br />
sudo /usr/local/apache2/bin/apachectl start<br />
一定要用sudo,管理员权力执行.不然80端口不能被Apache服务使用.要不然修改conf文件的端口.</li>
	<li> 	Apache启动后,在浏览器里输入 http://localhost/ 应该可以看到 It Words 安装成功信息.那么 Apache服务器就安装好了.我们关掉它.<br />
sudo /usr/local/apache2/bin/apachectl stop</li></ol></p>

<p>现在把apache添加到系统启动服务里让它自动启动.<br />
sudo cp /usr/local/apache2/bin/apachectl /etc/init.d/apache.server<br />
cd /etc/init.d<br />
sudo update-rc.d apache.server defaults
</p>

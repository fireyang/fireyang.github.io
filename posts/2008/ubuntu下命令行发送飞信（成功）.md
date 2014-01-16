---
layout: post
title: ubuntu下命令行发送飞信（成功）
date: '2008-08-13'
categories:
- ubuntu
tags:
- fetion
- ubuntu
- 短信
published: true
comments: true
---
<p>在ubuntu下可以用命令行发飞行短信了，以后可以配置个，发送些日志消息或报警短信到自己手机上了。</p>

<p>测试环境：ubuntu 8。10  （X86/32）</p>

<p>官网地址：<a href="http://www.it-adv.net/" target="_blank">http://www.it-adv.net/</a></p>

<p>在网站上下载<a href="http://www.it-adv.net/fetion/lib_lin_32.tar.gz" target="_blank">支持库</a>和<a href="http://www.it-adv.net/fetion/download/fetion20080618002-linux.tar.gz" target="_blank">最新程序</a>（LINUX X86/32），其他版本请到官方网站下载。</p>

<p>首先配置支持库，解压你下载的支持库。包含四个文件：</p>

<p>libACE.so.5.4.7  libACE_SSL.so.5.4.7  libcrypto.so.0.9.8  libssl.so.0.9.8</p>

<p>使用命令：cp *  /usr/lib/<br />
复制到用户的库目录下。</p>

<p>然后解压你下载的程序文件，fetion就是主程序。</p>

<p>./fetion -u 帐号 -p 密码</p>

<p>这样就成功运行了。</p>

<p>****************************************************************<br />
指令                    指令说明<br />
list                     好友列表: list<br />
sms                    发送短信: sms 飞信号/手机号/编号 短信内容(换行请用\n代替)<br />
chat                   在线消息: chat 飞信号/手机号/编号 短信内容(换行请用\n代替)<br />
status                 在线状态: status online/busy/away/hidden [个性化信息]<br />
add                    添加好友: add 飞信号/手机号 申请信息 本地呢称<br />
del                     删除好友: del 飞信号/手机号/编号<br />
invite                 邀请好友: invite 手机号 您的姓名(邀请好友开通飞信)<br />
autoaccept         自动接受: autoaccept on/off/status 自动接受加为好友申请<br />
myinfo                修改资料: myinfo nickname/impresa 内容(呢称/心情)<br />
help                   帮助菜单: help/?<br />
exit                   退出系统: quit/exit<br />
*********************************************************</p>

<p>1 插件开发原理</p>

<p>系统运行时，当遇到特写的事件，就会自动调用plugins目录的相应程序。我们可以根据实际应用来重写这些程序来达到自己的要求。</p>

<p>目录，系统支持四类插件：</p>

<p>1、定时插件：系统每10秒调用一次 plugins/plugin_timer<br />
自带演示插件的功能：每隔10秒钟更换一次心情。</p>

<p>2、消息插件：系统收到消息时，调用 plugins/plugin_message<br />
自带演示插件的功能：发送反话给对方。比如说，对方和你讲ABCD。插件自动发回DCBA。</p>

<p>3、激活对话窗口插件：当对方双击，打开对话窗口时，激活该插件plugin_invite。<br />
该功能适合做机器人。当对方激活后，立即提示帮助信息。帮助插件中带的是演示。</p>

<p>4、好友申请插件：当对方增加您为好友时，激活该插件plugin_buddy_application。<br />
程序中存在2处好友申请开关，插件的优先级高于全局的开关（通过 autoaccept on/off设置的值）</p>

<p>插件的详细说明可以参见：<a href="http://it-adv.apt-get.cn/bbs/viewthread.php?tid=28" target="_blank">http://it-adv.apt-get.cn/bbs/viewthread.php?tid=28</a>
windows下的使用方法参见：<a href="http://it-adv.apt-get.cn/bbs/viewthread.php?tid=7&amp;extra=page%3D1" target="_blank">http://it-adv.apt-get.cn/bbs/viewthread.php?tid=7&amp;extra=page%3D1</a></p>

---
layout: post
title: ubunt下wine＋TM2008 Preview4稳定运行
categories:
- ubuntu
tags:
- tm
- ubuntu
- wine
published: true
comments: true
---
<p>在<a href="http://czk.8866.org">czk</a>的指导下成功运行了TM2008 Preview4，而且很稳定。</p>

<p>成功运行：
<p style="padding-left: 30px;">1.消息的正常传输，包括聊天中的图篇都能正常显示</p>
<p style="padding-left: 30px;">2.可以进行截图，虽然不能有半透明的选择框，但是满足不精确截屏是没有问题了（考验你的眼力了）</p>
<p style="padding-left: 30px;">3.发送文件正常，发送一般的文件都正常。大小好像也没有影响，支持短点，哈哈</p>
<p style="padding-left: 30px;">4.更改签名，更改备注等都没有问题</p></p>

<p>目前就以上能实现吧，但是比eva要强大多了。</p>

<p>安装：
<p style="padding-left: 30px;">1.安装wine，通过库可以直接安装，现在版本是wine-1.1.2，<br />
sudo apt-get install wine<br />
你可以用wine --version来查看版本。</p>

<p></p><p style="padding-left: 30px;">2.下载TM2008 Preview4，一定要是这个版本，试了下beat好像不行，用这个就满足需求了。<strong>
下载：</strong><a href="http://dl_dir.qq.com/qqfile/tm/tm2008preview4_sp2_chs.exe" target="_blank"><strong>TM2008 Preview4</strong></a><strong>. </strong>你可以<a href="http://dl_dir.qq.com/qqfile/tm/tm2008preview4_sp2_en.exe" target="_blank">英文版</a>
</p><p style="padding-left: 30px;">3.安装tm：</p>
<p style="padding-left: 30px;">4.跳到你下载的路径下，执行wine tm2008preview4_sp2_chs.exe</p></p>

<p><p style="padding-left: 30px;">5.安装完成后，并不能运行，缺少一些dll。<br />
将tm2008目录下SysDir目录下的各个子目录（Microsoft.VC80.ATL等5个子目录）下的所有dll文件拷贝到tm2008下的Bin目录中。（如果你没有SysDir目录，<a href="http://groups.google.com/group/linux-wz/web/SysDir.tar.bz2" target="_blank">这里</a>下载）
</p><p style="padding-left: 30px;">6.这样你就 可以运行了。一般桌面会产生一个快捷图标的。</p></p>

<p>如果遇到中文乱码，注意做如下配置：
<p style="padding-left: 30px;">1.如果用的英文locale，记得改成中文再启动wine。即export LANG=zh_CN.UTF-8</p></p>

<p><p style="padding-left: 30px;">2.配置中文字体。将windows下的simsun.ttc拷贝到~/.fonts/目录下，然后运行regedit，修改<br />
[HKEY_CURRENT_USER\Software\\Wine\\Fonts\\Replacements]<br />
"Tahoma"="宋体"
</p><p style="padding-left: 30px;">移除 /usr/share/wine/fonts/下的tahoma.ttf和tahomabd.ttf的字体文件</p>
<p style="padding-left: 30px;"><a href="http://www.fireyang.com/blog/wp-content/uploads/2008/07/screenshot.png"><img class="alignnone size-medium wp-image-200" title="screenshot" src="http://www.fireyang.com/blog/wp-content/uploads/2008/07/screenshot-300x185.png" alt="" width="300" height="185" /></a></p></p>

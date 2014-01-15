---
layout: post
title: 原创翻译：在windows下安装cakephp
categories:
- php
- 胡说八道
tags:
- cakephp
- windows
published: true
comments: true
---
<p>很多初学者在使用cakephp的时候，连基本的配置都需要花费大量的时间，其实我也是摸索了一段时间；<br />
所以翻译这篇文章希望对Cakephp的初学者有帮助。<br />
原文：<a href="http://www.keithmedlin.com/2008/09/installing-cakephp-on-windows/" target="_blank">Installing CakePHP on Windows</a>
<div id="content" /></p>

<p>这篇教程将教你如何在Windows XP中安装Windows-Apache-PHP-MySQL+CakePHP。这篇教程同样适用于Windows2000和Vista，虽然我没有在这些环境中测试过，但是应该与Windows XP类似。</p>

<p>软件条件：
<ol>
	<li><strong>Apache</strong> <strong>2.2.x</strong>- <a href="http://httpd.apache.org/download.cgi" target="_blank">http://httpd.apache.org/download.cgi</a> : 下载“Win32 Binary without crypto (no mod_ssl) (MSI Installer)”，除非你计划在你的开发环境应用SSL（开发环境没必要，SSL一般用在生产环境）</li>
	<li><strong>PHP 5.2.6</strong> -<a href="http://us.php.net/get/php-5.2.6-Win32.zip/from/a/mirror" target="_blank">http://us.php.net/get/php-5.2.6-Win32.zip/from/a/mirror</a> : 选择一个镜像下载zip版本的。虽然也有安装版本，但是我发现zip的安装如此简单，其实比安装版本更有价值。（我也这么认为，更能知道php的执行原理）</li>
	<li><strong>MySQL 5.0.67 -</strong> <a href="http://dev.mysql.com/downloads/mysql/5.0.html#win32" target="_blank">http://dev.mysql.com/downloads/mysql/5.0.html#win32</a> : 选择一个镜像下载一个Windows Essentials (x86)版本。你将被提示创建一个帐号并登录。你可以<strong>跳过</strong>这一步直接点击“No thanks…“链接，忽略这个登录表单。选择一个下载地并下载这个程序。</li>
	<li><strong>CakePHP 1.2 RC2</strong> -<a href="http://cakeforge.org/frs/?group_id=23&amp;release_id=399" target="_blank">http://cakeforge.org/frs/?group_id=23&amp;release_id=399</a> :选择一个Zip版本下载到你的电脑。（截至到现在的版本是<a href="http://bakery.cakephp.org/articles/view/release-1-2-1-8004" target="_blank">1.2.1.8004 稳定版</a>）</li>
</ol>
现在所有的内容就是你所要的了。
<div /></p>

<p><strong>安装Apache</strong></p>

<p>双击安装程序图标来运行安装程序。我不喜欢将Apache安装到很多层下的目录，因此我把安装目标改到了：C:\Apache\。除此之外所有的默认的选项都是很好的。</p>

<p>然后启动你的Apache并在浏览器中输入<a href="http://localhost/" target="_blank">http://localhost/</a>来测试是否成功，如果成功你将看到页面上出现“It Works!”。
<div>［注意：如果在你的机器失败可能存在很多的原因，网络上其实有很多的资源供你参考，这些信息一直是有的（其实基本的错误，在网络上可以找到解决办法，顺便提醒下，如果你安装了IIS并运行着，这也可能失败请先关闭）］<strong>安装PHP</strong>
<ol>
	<li>创建一个PHP目录，我喜欢用C:\PHP,原因同上（跟apache的原因一样）。</li>
	<li>解压PHP的压缩包到你刚创建的C:\PHP目录下。</li>
	<li>将php.ini-recommended重命名为php.ini</li>
	<li>编辑你刚更名过来的php.ini文件，做如下的更改：<br />
目的：告知PHP在哪里可以找到具体特征的扩展。<br />
找到:<br />
;extension_dirChange Line:<br />
extension_dir = “C:\php\ext”PURPOSE: Tell PHP that you’d like to use MySQL.Find:<br />
;extension=php_mysql.dll<br />
;extension=php_mysqli.dll<br />
更改行（取消前面的分号[;]）:<br />
extension=php_mysql.dll<br />
extension=php_mysqli.dll</li>
	<li>现在我们需要使PHP工作到Apache上，因此打开C:\Apache\conf\httpd.conf并增加如下的行：<br />
目的：告知Apache哪里可以找到PHP并添加公认文件格式的.php的扩展。<br />
为PHP5需要如此设置：<br />
LoadModule php5_module “c:/php/php5apache2_2.dll”<br />
配置php.ini的路径，用于增加类型 application/x-httpd-php .php<br />
PHPIniDir “C:/php”</li>
	<li>最后在已经打开的httpd.conf文件中，我们需要增加一个index.php作为目录索引，如此我们的我们的服务器才能知道我们输入的index.php是有效的index页（原来的indwx.php不能被认为是首页，这里设置后index.php后，就能执行了）。<br />
找到：<br />
&lt;IfModule dir_module&gt;<br />
DirectoryIndex index.html<br />
&lt;/IfModule&gt;CHANGE LINES:<br />
&lt;IfModule dir_module&gt;<br />
DirectoryIndex index.html index.php<br />
&lt;/IfModule&gt;</li>
	<li>在任务栏中双击Apache Monitor图标（在时间旁边）并选择‘Restart'来重启Apache。</li>
</ol>
如果所有的都成功，你将在Apache Service Monitor 窗口的底部状态栏中看到Apache/2.2.x (Win32) PHP/5.2.6。有时候你可能需要关闭窗口，重新打开才能看到。</div></p>

<p><strong>安装MySQL</strong></p>

<p>我很想给你更具体的设置但是这里仅仅运行安装。当安装完毕，它将询问你是否想要默认设置(default settings )还是想通过引导安装（guided setup）。选择你想要引导安装（guided setup）。我做了一下的更改，其他都是默认的。
<ol>
	<li>作为一个名为MySQL来添加MySQL</li>
	<li>添加MySQL/bin到Windows的PATH（设置这些是因为你需要在Windows的命令行下运行MySQL）（就是设置MySQL的环境变量）</li>
	<li>这时设置root（管理员）的密码（记住…在任何地方用你管理员进行操作是非常方便，但是你还是花点时间为你每个应用程序分配指定一个特殊的用户，如此来危害只在一个独立的应用。即使是在开发环境中，也不会危害到所有的应用）。</li>
</ol>
到这里，我会重启我的电脑。也许你会问为什么？如果不重启会有很多因素导致PHP，Apache和MySQL不能很好的运行。</p>

<p><strong>安装CakePHP</strong>
<ol>
	<li>在C:\PHP下创建一个子目录Cake1_2。现在你有一个目录名为C:\PHP\Cake1_2\</li>
	<li>将 CakePHP RC2 的内容解压到上面的新目录下。CakePHP有个很酷的命令行构建接口，但是如果你没有执行如下的步骤，你将不能使用。</li>
	<li>右击“我的电脑”，选择属性。</li>
	<li>点击“高级”项。</li>
	<li>在面板的底部点击“环境变量”按钮。</li>
	<li>在“系统变量”（底部带滚动条的窗口）中找到Path。选中（高亮）并点击“编辑”按钮。</li>
	<li>将光标移到这行的末尾，如果末尾没有分号就增加一个分号，然后添加如下内容：<br />
c:\PHP;C:\PHP\cake1_2\cake\console;</li>
	<li> 点击“确定”按钮</li>
	<li>点击确定并退出系统属性窗口</li>
</ol>
现在…
<ol>
	<li>点击“开始”</li>
	<li>点击“运行”</li>
	<li>输入cmd</li>
	<li>在命令行输入: echo %PATH%</li>
	<li>你将看到你增加的条目。如果你没有看到，你可以重启你的电脑，或者等下次重新启动系统，我相信那将会存在的。</li>
</ol>
当你在%PATH%中看到新增的路径，试试如下步骤来验证安装是否成功：
<ol>
	<li>点击“开始”</li>
	<li>点击“运行”</li>
	<li>输入cmd</li>
	<li>在命令行输入: php -v</li>
	<li>在命令行输入: cake</li>
</ol>
你可以看到php的版本信息和cake控制台的帮助信息。</p>

<p>你现在可以在你的Windows XP开发cakePHP了</p>

<p><strong>最后声明</strong>：此信息截至2008年9月13日。不是所有的机器都配置相同的方式，让您的系统工作按照这些指示，这可能会导致问题。我发现这些步骤，是可重 复在许多不同的机器，但是它也有可能不适合您。每个工具都有很大的支持社区，以帮助您解决遇到的任何问题。我提供的信息“现状” ，并不会提供技术支持的人谁遇到的问题。</p>

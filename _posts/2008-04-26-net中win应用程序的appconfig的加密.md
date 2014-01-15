---
layout: post
title: .net中win应用程序的app.config的加密
categories:
- .Net
tags:
- .Net
- winForm
- 加密
published: true
comments: true
---
<p>在vs的命令行模式下键入 aspnet_regiis -pef "connectionStrings"  "/dir" -prov "RSAProtectedConfigurationProvider"<br />
说 明：-pef 指加密web.config区块　"/dir" 指web应用程序的虚拟目录 -prov 指选择哪种加密方式　如(RSAProtectedConfigurationProvider、 DataProtectionConfigurationProvider)</p>

<p>用-pdf 相反于-pef的解密模式</p>

<p>这种加密我换了台计算机就无法解密了，不知道安全性如何，但是起码比明文好。</p>

---
layout: post
title: DB2参照约束的删除规则（delete rule）
categories:
- 其他
tags:
- DB2
- 约束
published: true
comments: true
---
<p> DB2参照约束的 <strong><em>删除规则（delete rule）；</em></strong>为了能在删除父表的记录，同时能达到删除子表的相关记录的目的，使用的办法：
<ol>
	<li>选择Quest Central for DB2工具，连接相应的数据库（略）；</li>
	<li>选择相应的Table，右击选择修改（Alter），如图：</li>
	<li>对子表的外部键进行修改，选择Keys/Constraints，选择外键（就是Type为Foreign），如图：</li>
	<li>在右侧选择编辑按钮(Edit),弹出一个窗口，如图：
<img src="/image.axd?picture=20071201123603.jpg" height="210" width="170" /></li>
	<li>在弹出窗口的下方你可以找到相关的约束类型(如图)，4种类型（sql表示ON DELETE 『SET NULL』（中括号里为4种类型的任意一种）），选择好类型后选择OK确定：<br />
》NoAction表示删除父表记录对子表（我们修改的当前表）的关联记录无影响；<br />
》Restrict delete表示删除父表记录时如果存在子表的关联记录，将被回滚，并且报错；<br />
》Cascade to dependent表示在删除父表的同时删除子表的记录；<br />
》Set to Null in dependent表示在删除父表的同时，子表外键列被设置为 null；
<img src="/image.axd?picture=20071201123604.jpg" height="437" width="661" /></li>
	<li>在窗体的下方，按Build Script 按钮，生成SQL脚本（如图）：
<img src="/image.axd?picture=20071201123605.jpg" height="109" width="286" /></li>
	<li>执行Script，如图：
<img src="/image.axd?picture=20071201123606.jpg" height="503" width="631" /></li>
</ol></p>

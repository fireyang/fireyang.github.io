---
layout: post
title: DB2小技巧
date: '2007-10-02'
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><ol>
	<li>取時間點的年份的寫法:<br />
	SELECT YEAR(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的月份的寫法:<br />
	SELECT MONTH(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的日的寫法:<br />
	SELECT DAY(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的時的寫法:<br />
	SELECT HOUR(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的分的寫法:<br />
	SELECT MINUTE(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的秒的寫法:<br />
	SELECT SECOND(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的毫秒的寫法:<br />
	SELECT MICROSECOND(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的日期的寫法:<br />
	SELECT DATE(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>取時間點的時間的寫法:<br />
	SELECT TIME(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>日期,時間形態變為字符形態:<br />
	SELECT char(current date) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT char(current time) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT char(current date+12 hours) FROM SYSIBM.SYSDUMMY1;</li>
	<li>將字符串轉換成日期或時間形態:<br />
	SELECT TIMESTAMP(&#39;2002-10-20-12.00.00.000000&#39;) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT TIMESTAMP(&#39;2002-10-20 12:00:00&#39;) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT DATE(&#39;2002-10-20&#39;) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT DATE(&#39;10/20/2002&#39;) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT TIME(&#39;12:00:00&#39;) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT TIME (&#39;12.00.00&#39;) FROM SYSIBM.SYSDUMMY1;</li>
	<li>返回參數的星期几的寫法:<br />
	SELECT DAYNAME(current timestamp) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT DAYOFWEEK(current timestamp) FROM SYSIBM.SYSDUMMY1;<br />
	SELECT DAYOFWEEK_ISO(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>返回參數一年中的第几天的寫法:<br />
	SELECT DAYOFYEAR(current timestamp) FROM SYSIBM.SYSDUMMY1;</li>
	<li>返回午夜和參數中指定的時間值之間的秒數的寫法:<br />
	SELECT MIDNIGHT_SECONDS(current timestamp) FORM SYSIBM.SYSDUMMY1;</li>
	<li>返回參數中一年的第几周的寫法:<br />
	SELECT WEEK(current timestamp) FORM SYSIBM.SYSDUMMY1<br />
	</li>
</ol>
</p>

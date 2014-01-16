---
layout: post
title: AS3最佳技巧和实践
date: '2009-04-24'
categories:
- flex
tags:
- actionsc
- flex
published: true
comments: true
---
<p>在网络上找到很多关于AS3实践优化的资料，自己整理下（自己还没有验证过，有时间再写测试代码）：
<ol>
	<li>new Array() 和 new Object() 比直接用 [] 和 {}慢3倍的效率：
<blockquote>var a = [];<br />
var b = {};</blockquote>
代替
<blockquote>var a =new Array();<br />
var b = new Object;</blockquote>
</li>
	<li> 数组的索引用整数：
<code>list[int(0)]比直接用list[0]快。
</code></li>
	<li>Array的创建是消耗是非常大的，所以不要这样做，尽可能重复利用，更新数组相对性能小很多：
<pre><span class="category1">var</span> vanityCollection01 : <span class="category2">Array</span> = <span class="category1">new</span> <span class="category2">Array</span>();
<span class="category1">var</span> vanityCollection02 : <span class="category2">Array</span> = <span class="category1">new</span> <span class="category2">Array</span>();
<span class="category1">var</span> vanityCollection03 : <span class="category2">Array</span> = <span class="category1">new</span> <span class="category2">Array</span>();
<span class="category1">var</span> vanityCollection04 : <span class="category2">Array</span> = <span class="category1">new</span> <span class="category2">Array</span>();</pre>
</li>
	<li>更快的数组拷贝：
<pre><span class="category1">var</span> <span class="category2">copy</span> : <span class="category2">Array</span> = sourceArray.<span class="category2">concat</span>();</pre>
</li>
	<li>用{}的匿名对象创建比new 快：
<pre><span class="category1">var</span> <span class="category2">o</span> : * = {firstName:"<span class="quote">John</span>",lastName:"<span class="quote">Smith</span>",age:45 };
NOT:
<span class="category1">var</span> p : Person = <span class="category1">new</span> Person();
p.firstName = "<span class="quote">John</span>";
p.lastName = "<span class="quote">Smith</span>";
p.age = 45;</pre>
</li>
	<li>静态函数应用，不需要创建对象实例：
<pre>StringUtils.trim( "<span class="quote">text with space at end </span>" );
类定义:
package
{
     <span class="category1">public</span> final <span class="category1">class</span> StringUtils
         {
          <span class="category1">public</span> <span class="category1">static</span> <span class="category1">function</span> trim( s : <span class="category2">String</span> ) : <span class="category2">String</span>
          {
               <span class="category1">var</span> trimmed : <span class="category2">String</span>;
               <span class="linecomment">// implementation... </span>
               <span class="category1">return</span> trimmed;
           }
      }
}</pre>
</li>
	<li>在应用程序中，常量定义是无法修改的：
<pre><span class="category1">public</span> const APPLICATION_PUBLISHER : <span class="category2">String</span> = "<span class="quote">Kannopy, Inc.</span>";</pre>
</li>
	<li>不想被继承的类，可以用final来修饰：
<pre><span class="category1">public</span> final <span class="category1">class</span> StringUtils</pre>
</li>
	<li>package级别的函数和变量，不需要类和对象实例，直接调用（这些好像还没怎么用到）：
<pre>createSnapShot( arg );</pre>
不需要：
<pre>someObjectInstance.createSnapShot( arg );</pre>
<pre>SomeClass.createSnapShot( arg );</pre>
类定义：
<pre>package
{
     <span class="linecomment">// imports&amp;#133;; </span>
     <span class="category1">public</span> <span class="category1">function</span> createSnapShot(<span class="category2">target</span>:IBitmapDrawable) : Bitmap
     {
          <span class="linecomment">// implementation&amp;#133; </span>
      }
}</pre>
</li>
	<li>if和switch的效率是一样的，：
<pre><span class="category1">if</span> ( condition )
{
     <span class="linecomment">// handle condition </span>
} </pre></li></ol></p>

<p><span class="category1">switch</span> ( condition )<br />
{
     <span class="category1">case</span> "<span class="quote">A</span>":<br />
         <span class="linecomment">// logic to handle case A </span>
     <span class="category1">break</span>; </p>

<p>     <span class="category1">case</span> "<span class="quote">B</span>":<br />
         <span class="linecomment">// logic to handle case B  </span>
     <span class="category1">break</span>;<br />
}

	<li>AVM中用int比Number在执行循环速度要快：
<pre>(<span class="category1">var</span> i: <span class="category1">int</span> = 0; i &lt; n; i++) NOT <span class="category1">for</span> (<span class="category1">var</span> i: <span class="category2">Number</span> = 0; i &lt; n; i++)</pre>
</li>
	<li>uint要少用，比较慢：<code>
</code>
<pre><span class="category1">var</span> footerHex : uint = 0x00ccff;</pre>
<pre><span class="category1">for</span> (;i&lt;n2;i++) Vector3D(array[<span class="category1">int</span>(i*2)]).<span class="category2">x</span> = 2;</pre>
不要用（因为会自动转为Number的）：
<pre><span class="category1">for</span> (;i&lt;n2;i++) Vector3D(array[i*2]).<span class="category2">x</span> = 2;</pre>
</li>
	<li>不要用int来赋值小数：
<pre><span class="category1">var</span> decimal : <span class="category2">Number</span>  = 14.654;</pre>
不要用（因为会自动转为Number的）：
<pre><span class="category1">var</span> decimal : <span class="category1">int</span>  = 14.654;</pre>
</li>
	<li>用乘法来代替除法：5000/1000=&gt;5000*0.001：</li>
	<li>不要在循环内执行相同的运算：
<pre><span class="category1">for</span> (..){a*180/<span class="category2">Math</span>.<span class="category2">PI</span>;}
声明: toRadians = a*180/<span class="category2">Math</span>.<span class="category2">PI</span>; 放置到循环外面</pre>
<pre><span class="category1">for</span> (<span class="category1">var</span> i=0;i&lt; myArray.lengh;i++){ }</pre>
应该采用：
<pre><span class="category1">var</span> len : <span class="category1">int</span> = myArray.lengh;
<span class="category1">for</span> (<span class="category1">var</span> i=0;i&lt;len;i++){}</pre>
</li>
	<li>使用完事件监听需要remove掉
<pre>removeEventListener( Event.COMPLETE, onComplete );</pre>
</li>
	<li>使用delete释放内存
<pre><span class="category1">delete</span> someObject;</pre>
</li>
	<li>使用正则表达式验证，使用字符串搜索
<pre><span class="linecomment">// postal code validation example using regular expressions </span>
<span class="category1">private</span> <span class="category1">var</span> regEx:RegExp = /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/i;
<span class="category1">private</span> <span class="category1">function</span> validatePostal( event : Event ) : <span class="category1">void</span>
{
     <span class="category1">if</span>( regEx.test( zipTextInput.<span class="category2">text</span> ) )
     {
          <span class="linecomment">// handle invalid input case </span>
      }
} </pre></li></p>

<p><span class="linecomment">// search a string using String methods </span>
<span class="category1">var</span> string : <span class="category2">String</span> = "<span class="quote">Search me</span>";
<span class="category1">var</span> searchIndex : <span class="category1">int</span> = string.<span class="category2">indexOf</span>( "<span class="quote">me</span>" );
<span class="category1">var</span> search : <span class="category2">String</span> = string.<span class="category2">substring</span>( searchIndex, searchIndex + 2 );

	<li>重用对象特别是（DisplayObjects, URLLoader），保持内存使用平稳，因为创建这些对象会使得cpu和内存占用加大，可能导致画面不流畅。</li>
	<li>使用delete释放内存
<pre><span class="category1">delete</span> someObject;</pre>
</li>

继续补充中……</p>

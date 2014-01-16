---
layout: post
title: 提示：移除不需要的Timer事件监听器
date: '2010-06-07'
categories:
- actionscript
tags:
- actionscript
published: true
comments: true
---
<p>转自：<a href="http://blog.yoz.sk/2010/06/quick-tip-timer-listeners-doesnt-require-remove/" target="_blank">http://blog.yoz.sk/2010/06/quick-tip-timer-listeners-doesnt-require-remove/</a></p>

<p>用处：用于匿名监听函数的remove，很方便，再也不用担心匿名函数无法被移除的困扰了。</p>

<p>基于分析器（或 net.hires.debug.Stats）你的Timer监听器在被移除时却不能被垃圾回收器回收。移除它们所有的引用是一个很好的做法，即使是匿名函数。
<pre lang="actionscript3">package
{
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.events.TimerEvent;
    import flash.utils.Timer;</pre></p>

<p>    import net.hires.debug.Stats;</p>

<p>    [SWF(frameRate="60")]</p>

<p>    public class WonderflApp extends Sprite<br />
    {<br />
        public function WonderflApp()<br />
        {<br />
            addChild(new Stats());<br />
            addEventListener(Event.ENTER_FRAME, loop);<br />
        }</p>

<p>        public function loop(event:Event):void<br />
        {<br />
            for(var i:uint = 1; i &lt; 100; i++)<br />
            {<br />
                var timer:Timer = new Timer(100, 1);<br />
                timer.addEventListener(TimerEvent.TIMER_COMPLETE,<br />
                    function onTimer(event:TimerEvent):void{});<br />
                timer.start();<br />
            }<br />
        }<br />
    }<br />
}
简单的方法移除匿名函数的监听：
<pre lang="actionscript3">EventDispatcher(event.currentTarget).removeEventListener(event.type, arguments.callee);</pre></p>

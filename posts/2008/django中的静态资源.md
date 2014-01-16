---
layout: post
title: django中的静态资源
date: '2008-05-09'
categories:
- python
tags:
- css
- django
- python
published: true
comments: true
---
<p><tt class="docutils literal"><span class="pre">使用django.views.static.serve</span></tt>
<blockquote>(r'^site_media/(?P&lt;path&gt;.*)$', 'django.views.static.serve',<br />
{'document_root': '/path/to/media'}),</blockquote>
如上就可以将一个请求转到物理路径了，你也可以将路径直接配置到settings里，那样就便于修改。</p>

<p>详细：<a href="http://www.djangoproject.com/documentation/static_files/" target="_blank">http://www.djangoproject.com/documentation/static_files/</a></p>

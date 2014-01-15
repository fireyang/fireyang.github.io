---
layout: post
title: Access的update注意
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><p>
发现在access下的时候，如果你可以这样查询一张表： 
</p>
<p>
select * from&nbsp; be_Posts&nbsp; where postID = &quot;a9c2dc1f-87d2-4bf2-b2cd-ff5542a51077&quot;; 
</p>
<p>
其中postID 字段类型为&ldquo;数字&rdquo;的&ldquo;同步复制 ID&rdquo;，在数据库中的表现形式为{A9C2DC1F-87D2-4BF2-B2CD-FF5542A51077} 
</p>
<p>
但是我在更新语句中，用这样的语句却无法更新，不提示错误，只提示更新0条记录：<br />
update be_Posts set title = &#39;玉龙雪山3&#39; where postID = &quot;a9c2dc1f-87d2-4bf2-b2cd-ff5542a51077&quot;; 
</p>
<p>
如果改用以下的2种形式都可以更新成功：<br />
update be_Posts set title = &#39;玉龙雪山3&#39; where postID = &quot;{a9c2dc1f-87d2-4bf2-b2cd-ff5542a51077}&quot;<br />
或<br />
update be_Posts set title = &#39;玉龙雪山3&#39; where postID = {a9c2dc1f-87d2-4bf2-b2cd-ff5542a51077} 
</p>
<p>
以上两种形式能可以，这是在access中发现的，不知道在其他数据库是否也存在这样的问题，留意下。 
</p>
</p>

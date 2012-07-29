---
layout: page
---
{% include JB/setup %}

# FireYang

看到这篇文章: [如何高效利用GitHub](1) 很喜欢git的强大！

再看到[理想的写作环境：Git+GitHub+Markdown+Jekyll](2)的时候，我决定我也要开始用jekyll来写博客了，以后可以在本地写日志，再同步过去，而且还有很好的版本管理了，非常喜欢！

以后可以这样简单的写文章了，还可以用git来管理，个人表示很喜欢！

ps：原本打算迁移wp的文章，还是保持不动了

* 旧地址:[www.fireyang.com/blog](http://www.fireyang.com/blog)
* 订阅地址:[rss](/atom.xml)
  
  
### 最近文章:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

[1]:http://www.yangzhiping.com/tech/github.html
[2]:http://www.yangzhiping.com/tech/writing-space.html



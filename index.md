---
layout: page
---
{% include JB/setup %}

# FireYang
以后可以这样简单的写文章了，还可以用git来管理，个人表示很喜欢！

ps：原本打算迁移wp的文章，还是保持不动了

* 旧地址:[www.fireyang.com/blog](http://www.fireyang.com/blog)
* 订阅地址:[rss](/atom.xml)

## To-Do
  2012-7-27 开始使用jekyll
  
  
  
### 最近文章:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>




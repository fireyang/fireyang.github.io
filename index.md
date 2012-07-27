---
layout: page
---
{% include JB/setup %}
{% include JB/sharing %}

## To-Do
  2012-7-27 开始迁移博客
## 文章列表

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>




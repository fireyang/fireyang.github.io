---
layout: page
title: "烟花易冷，人事易分"
tagline: 简简单单生活
titleline: 最近Post
links: 
  - url: "http://www.fireyang.com/blog"
    name: "旧fireyang's blog"
    title: "旧版blog地址"

---
{% include JB/setup %}

<div class="front span8 pull-left">
</ul>
<ul class="listing">
{% for post in site.posts limit:20 %}

  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
  
</div>

<div id="aside" class="well sidebar-nav">
<ul class="nav nav-list">
<li class="nav-header">About me</li>
ID：FireYang
  <li class="nav-header">Categories</li>
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}

  <li class="nav-header">Tags</li>
  {% assign tags_list = site.tags %}
  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %} 
    	<li class="index_tags"><a href="{{ BASE_PATH }}{{ site.JB.tags_path }}#{{ tag }}-ref">{{ tag }} <span>{{ site.tags[tag].size }}</span></a></li>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %} 
    	<li class="index_tags"><a href="{{ BASE_PATH }}{{ site.JB.tags_path }}#{{ tag[0] }}-ref">{{ tag[0] }} <span>{{ tag[1].size }}</span></a></li>
    {% endfor %}
  {% endif %}
  {% assign tags_list = nil %}
  <li class="clear"></li>

  {% include fy/friend_links %}

</ul>
</div>
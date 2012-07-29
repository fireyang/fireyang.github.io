---
layout: page
title: "烟花易冷，人事易分"
tagline: This is a blog just for fun.
titleline: 日志列表
links: 
  - url: "https://www.fireayng.com/blog"
    name: "旧fireyang's blog"
    title: "旧版blog地址"

---
{% include JB/setup %}

<h2 id="index_titleline">{{page.titleline}}</h2>
<hr id="index_line" />
<div class="span8 pull-left">
  <ul class="posts index_posts span8">
  <!-- for post in site.posts -->
  {% for post in paginator.posts %}
    <li>
	  <div class="index_intro span6">
	  <h3 class="index_title"><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
	  <p class="index_excerpt">{{ post.description }}</p>
	  </div>
	  <span class="index_date span2">{{ post.date | date_to_string }}</span>
	</li>
  {% endfor %}
  </ul>
  <ul class="pager">
    {% if paginator.previous_page %}
      <li class="previous">
      {% if paginator.page == 2 %}
        <a href="/" rel="bookmark">上一页</a>
      {% else %}
        <a href="/page{{ paginator.previous_page }}" rel="bookmark">Previous Page</a>
      {% endif %}
      </li>
    {% endif %}
    {% if paginator.next_page %}
      <li class="next">
        <a href="/page{{ paginator.next_page }}" rel="bookmark" style="float:right">下一页</a>
      </li>
    {% endif %}
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
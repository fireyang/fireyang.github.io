---
layout: post
title: "jekyll的使用技巧"
description: "jekyll的使用"
category: [jekyll]
tags: [jekyll]
---
## 模版收集
* [mbleigh.github.com](https://github.com/mbleigh/mbleigh.github.com/)
* [blog.lenage.com](http://blog.lenage.com/about/)





## Pygments的语法高亮
ruby语法测试：

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

actionscript：

{% highlight ruby %}
function a(c:int):void{
	if(c==0){
		return 1;
	}else{
		return 0;
	}
}
{% endhighlight %}

## gist的代码嵌入
插件：[gist-tag](https://gist.github.com/803483)

坚持测试下语法高亮，可惜无法显示行号



{% include JB/setup %}

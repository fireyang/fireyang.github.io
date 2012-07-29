---
layout: post
title: "在jekyll中显示代码高量"
description: "简单测试下在jekyll中的代码高亮显示"
category: 
tags: []
---

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

坚持测试下语法高亮，可惜无法显示行号



{% include JB/setup %}

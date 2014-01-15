---
layout: post
title: vim添加as和mxml的语法高亮
categories:
- actionscript
- flex
- ubuntu
tags:
- actionscript
- flex
- ubuntu
- vim
published: true
comments: true
---
<p> vim很强大，学习中；配置下as和mxml的语法高亮，直接写flash</p>

<p>下载一下三个文件：
<ol>
	<li><a href="http://abdulqabiz.com/files/vim/actionscript.vim" target="_blank">http://abdulqabiz.com/files/vim/actionscript.vim</a></li>
	<li><a href="http://abdulqabiz.com/files/vim/mxml.vim" target="_blank">http://abdulqabiz.com/files/vim/mxml.vim</a></li>
	<li><a href="http://vim.cybermirror.org/patches/dtd.vim" target="_blank">http://vim.cybermirror.org/patches/dtd.vim</a> （这个是xml的语法，如果不装这个，mxml会报错）</li>
</ol>
下载好后，把3个文件拷贝到~/.vim/syntax/下，如果没有可以创建。</p>

<p>为了偷懒，修改了下启动程序./.vimrc如下：
<blockquote>
<blockquote> 		autocmd BufRead *.as set filetype=actionscript<br />
autocmd BufRead *.mxml set filetype=mxml</blockquote>
</blockquote>
这个是在ubuntu下的配置，如过是windows下的vim要参考下也可以配置好的。
<blockquote>
<blockquote></blockquote>
</blockquote></p>

---
layout: post
title: DataGridView的修改保存问题
date: '2007-08-02'
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><p>
在.Net的DataGridView(DG)中，如果你用一个bindingSource(BS)来绑定，当你在DG修改后，虽然已经保存到BS里了，<br />
但是还没有更改里面的一个更改标志，因此你如果update到数据库里的时候，是不会作为已经更改的记录更新的。<br />
但是如果你修改下一条记录时，前面的修改标记会自动更新的，因此如果你修改多条记录最后一条往往会丢失。 
</p>
<p>
解决办法： 
</p>
<p>
在结束修改的时候，及时吧edit状态结束调，如下代码： 
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private void LocalPDDDataGrid_CellEndEdit(object sender, DataGridViewCellEventArgs e)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DataGridView dgv = (DataGridView)sender;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dgv.EndEdit();<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } 
</p>
</p>

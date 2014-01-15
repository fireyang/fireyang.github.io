---
layout: post
title: SqlCommandBuilder 的强大作用
categories:
- 未分类
tags: []
published: true
comments: true
---
<p><p>
前面提到用SqlCommandBuilder 读取sqlserver的存储过程参数，其实这个类还有一个更强大的用处；
</p>
<p>
为了生成 INSERT、UPDATE 或 DELETE 语句，SqlCommandBuilder 会自动使用 SelectCommand 属性来检索所需的元数据集。<br />
个人理解：你只需要写下select的sql语句，其他的语句就自动生成，你不必要再写其他的语句的，是不是很方便<img src="/admin/pages/../tiny_mce/plugins/emotions/images/smiley-smile.gif" border="0" alt="Smile" title="Smile" width="18" height="18" />！
</p>
<p>
如：
</p>
<p>
public static DataSet SelectSqlRows(string connectionString,<br />
&nbsp;&nbsp;&nbsp; string queryString, string tableName)<br />
{<br />
&nbsp;&nbsp;&nbsp; using (SqlConnection connection = new SqlConnection(connectionString))<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SqlDataAdapter adapter = new SqlDataAdapter();<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adapter.SelectCommand = new SqlCommand(queryString, connection);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; connection.Open();
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DataSet dataSet = new DataSet();<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adapter.Fill(dataSet, tableName);
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //code to modify data in DataSet here
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //Without the SqlCommandBuilder this line would fail<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adapter.Update(dataSet, tableName);
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return dataSet;<br />
&nbsp;&nbsp;&nbsp; }<br />
}
</p>
<p>
&nbsp;需要注意的是：queryString这个SQL语句还必须至少返回一个主键列或唯一的列。如果什么都没有返回，就会产生 <strong>InvalidOperation</strong> 异常，不生成命令。<br />
还有其他需要注意的地方，请参阅vs2005的帮助。
</p>
<p>
看上面的示例，只写了一个SelectCommand ，再和SqlCommandBuilder 关联起来，你就可以使用Update 直接更新了。
</p>
</p>

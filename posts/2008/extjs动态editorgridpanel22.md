---
layout: post
title: extjs动态列－－editorGridPanel(2.2)
date: '2008-11-11'
categories:
- 胡说八道
tags:
- ajax
- extjs
- grid
published: true
comments: true
---
<p>根据<a href="http://extjs.com/forum/showthread.php?t=4548&amp;highlight=dynamic+grid" target="_blank"><strong>Dynamic Grid</strong></a>重新整理了一个适合在extjs2.2版本下使用的动态editGridPanel。</p>

<p>代码如下：
<blockquote>Ext.grid.DynamicColumnModel = function(store){<br />
var cols = [];<br />
var recordType = store.reader.recordType;<br />
var fields = recordType.prototype.fields;<br />
if (fields.length == 0) {<br />
fields = store.reader.headers;<br />
for (var i = 0; i &lt; store.reader.headers.length; i++) {<br />
var header = store.reader.headers[i]<br />
cols[i] = {<br />
header: header.text,<br />
dataIndex: header.name,<br />
tooltip: '',<br />
hidden: header.hidden,<br />
renderer: eval(header.renderer)<br />
};<br />
}
}<br />
else {<br />
for (var i = 0; i &lt; fields.keys.length; i++) {<br />
var fieldName = fields.keys[i];<br />
//add checkbox column<br />
if (fieldName == "__chkbox") {<br />
cols[i] = new Ext.grid.CheckboxSelectionModel();<br />
continue;<br />
}
//add checkbox column<br />
if (fieldName == "__rownum") {<br />
cols[i] = new Ext.grid.RowNumberer();<br />
continue;<br />
}</blockquote></p>

<p>var field = recordType.getField(fieldName);<br />
cols[i] = {<br />
header: field.header,<br />
dataIndex: field.name,<br />
tooltip: field.tooltip,<br />
hidden: field.hidden,<br />
sortable: true,<br />
renderer: eval(field.renderer),<br />
editor: new Ext.form.TextField()<br />
};<br />
}
}<br />
store.fields = store.reader.recordType.prototype.fields;<br />
Ext.grid.DynamicColumnModel.superclass.constructor.call(this, cols);<br />
};<br />
Ext.extend(Ext.grid.DynamicColumnModel, Ext.grid.ColumnModel, {});</p>

<p>Ext.data.DynamicXmlReader = function(meta){<br />
meta = meta ||{};<br />
Ext.data.XmlReader.superclass.constructor.call(this, meta,meta.fields);<br />
};<br />
Ext.extend(Ext.data.DynamicXmlReader, Ext.data.XmlReader, {<br />
getRecordType: function(data){<br />
recordDefinition = Ext.DomQuery.select(this.meta.recordDefinition + ' &gt; *', data);</p>

<p>var arr = [];<br />
j = 0;<br />
for (var i = 0; i &lt; recordDefinition.length; i++) {<br />
if (recordDefinition[i].nodeType == 1) {<br />
arr[j] = {<br />
name: recordDefinition[i].tagName,<br />
header: recordDefinition[i].getAttribute('header'),<br />
tooltip: recordDefinition[i].getAttribute('tooltip'),<br />
hidden: recordDefinition[i].getAttribute('hidden') == "true" ? true : false,<br />
renderer: recordDefinition[i].getAttribute('renderer')<br />
};<br />
j++;<br />
}
}</p>

<p>this.recordType = Ext.data.Record.create(arr);<br />
return this.recordType;<br />
},</p>

<p>readRecords: function(doc){<br />
this.xmlData = doc;<br />
var root = doc.documentElement || doc;<br />
this.getRecordType(root);<br />
return Ext.data.DynamicXmlReader.superclass.readRecords.call(this, doc);<br />
}
});</p>

<p>Ext.grid.DynamicGrid = function(container){<br />
Ext.grid.DynamicGrid.superclass.constructor.call(this, container, []);<br />
};<br />
Ext.extend(Ext.grid.DynamicGrid, Ext.grid.EditorGridPanel, {<br />
onRender: function(ct, position){<br />
this.store.on('load', this.doReconfiguration, this);<br />
this.colModel = new Ext.grid.ColumnModel([{<br />
header: '',<br />
dataIndex: '',<br />
sortable: true<br />
}]);<br />
Ext.grid.DynamicGrid.superclass.onRender.call(this, ct, position);<br />
},<br />
doReconfiguration: function(){<br />
this.colModel = new Ext.grid.DynamicColumnModel(this.store);<br />
this.view.bind(this.store, this.colModel);<br />
this.view.refresh(true);<br />
this.store.removeListener("load", this.doReconfiguration);<br />
}
});</p>

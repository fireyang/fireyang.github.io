---
layout: post
title: '[译]使用加密来保护你的Flash文件被反编译'
date: '2010-04-14'
categories:
- actionscript
tags:
- actionscript
- Flash
published: true
comments: true
---
<p><h3>出处：<a href="http://active.tutsplus.com/tutorials/workflow/protect-your-flash-files-from-decompilers-by-using-encryption/?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+Flashtuts+%28Activetuts%2B%29" target="_blank">Protect Your Flash Files From Decompilers by  Using Encryption</a></h3>
反编译真的让flash制作者讨厌的东西。你花大量的精力做了一个很好的游戏，却有很多人盗用，并且替换了你的logo然后将其放到他们自己的站点。</p>

<p>怎么做到呢？就是通过反编译。如果你不将你的swf进行保护，它将很容易被反编译，只需一个按钮就可以获取阅读性很强的源代码。</p>

<p>这篇教程我用一个案例来说明我是如何保护代码和资源，防止被剽窃。
<div><a href="{{urls.media}}/2010/04/VerletCloth.zip" target="_blank"><img class="alignnone size-full wp-image-597" title="source" src="{{urls.media}}/2010/04/source.jpg" alt="" width="190" height="60" /></a></div></p>

<p><a href="{{urls.media}}/2010/04/demo.jpg" target="_blank"></a></p>

<p><a href="{{urls.media}}/2010/04/Final.swf" target="_blank"><img class="alignnone size-full wp-image-598" title="demo" src="{{urls.media}}/2010/04/demo.jpg" alt="" width="190" height="60" /></a></p>

<p>
<strong>编者提示:</strong> 感谢 <a href="http://psd.tutsplus.com/author/vaclav/" target="_blank">Vaclav</a> 的icon图标. 访问<a href="http://psd.tutsplus.com/tutorials/designing-tutorials/create-a-shiny-lock-icon-design/" target="_blank">Psdtuts+</a> 你可以看到他的其他图标
<h2>让我们开始吧</h2>
我使用一个小项目的 demo来说明swf在反编译下试多么的脆弱。你可以从上面的source链接下载这个demo然后自己测试。</p>

<p>我是使用<a href="http://www.sothink.com/product/flashdecompiler/index.htm" target="_blank">Sothink SWF Decompiler 5</a>来反编译swf然后看他的解析输出。这些代码相当明显易懂， 而且你可以非常容易的拿来使用。
<div><a href="{{urls.media}}/2010/04/1.png"><img class="alignnone size-full wp-image-616" title="1" src="{{urls.media}}/2010/04/1.png" alt="" width="600" height="400" /></a></div>
<h2>那我们该怎么办呢？</h2>
我想出一个可以保护swf文件被反编译的方法，在之后的教程中将加以说明。我们能够得到如下的代码：（译者：如果你是破 解的人，是不是已经开始头痛了呢？）
<div><a href="{{urls.media}}/2010/04/2.png"><img class="alignnone size-full wp-image-617" title="2" src="{{urls.media}}/2010/04/2.png" alt="" width="600" height="443" /></a></div></p>

<p>这 些被反编译的代码实际就是你被解码的内容，其实已经与你的主代码完全不同了。另外这些命名已经全部是非法的了，因此已经无法被重新编译。你可以尝试去编译<a id="nf-s" title="它" href="http://activetuts.s3.amazonaws.com/tuts/067_swfEncryption/swf/final.html">它</a>。</p>

<p>在我们开始之前，需要指出的是这篇教程并不适合初学者，如果你想继续阅读必须具备扎实的 AS3知识。这里同样涉及字节和ByteArrays的一些底层程序设计，使用hex editor来操作swf 文件。</p>

<p>
我们需要的工具：
<ul>
	<li><strong>一个要被保护的SWF.</strong> 免费下载作者的<a id="dgix" title="作品" href="http://activetuts.s3.amazonaws.com/tuts/067_swfEncryption/VerletCloth.zip">作品</a></li>
	<li><strong>Flex SDK.</strong> 我们需要使用Embed标签内嵌资源，你可以从 <a href="http://opensource.adobe.com/wiki/display/flexsdk/Download+Flex+3">opensource.adobe.com</a> 下载.</li>
	<li><strong>hex editor（二进制编辑器）.</strong> 我使用免费的编辑器 Hex-Ed.你可以从这里下载 <a href="http://www.nielshorn.net/prog/old/hexed/">nielshorn.net</a> 当然你也可以选择自己喜欢的编辑器</li>
	<li><strong>反编译器.</strong> 虽然不是必须的，但它可以见证我们的保护措施是非常棒的。你可以从<a href="http://www.sothink.com/product/flashdecompiler/index.htm" target="_blank">sothink.com</a>获取一个试用的Sothink SWF Decompile</li>
</ul>
<h2>步骤 1: 实时加载SWF</h2>
打开一个新的ActionScript 3.0项目，并设置好编译的Flex  SDK（我用FlashDevelop来写代码）。选择一个你想要保护的SWF并将其以二进制数据的Embed标签嵌入：
<pre lang="actionscript3">[Embed  (source = "VerletCloth.swf", mimeType = "application/octet-stream")]
//  source = path to the swf you want to protect
private var  content:Class;</pre>
现在以<em>ByteArray</em>形式，swf被嵌入到其中，然后通过Loader.loadBytes() 将其加载。
<pre lang="actionscript3">var loader:Loader = new Loader();
addChild(loader);
loader.loadBytes(new  content(), new LoaderContext(false, new ApplicationDomain()));</pre>
最后我们将 得到如下的代码：
<pre lang="actionscript3">package
{
    import flash.display.Loader;
    import flash.display.Sprite;
    import flash.system.ApplicationDomain;
    import flash.system.LoaderContext;</pre></p>

<p>    [SWF (width = 640, height = 423)] //the dimensions should be same as the loaded swf's<br />
    public class Main extends Sprite<br />
    {<br />
        [Embed (source = "VerletCloth.swf", mimeType = "application/octet-stream")]<br />
        // source = path to the swf you want to protect<br />
        private var content:Class;</p>

<p>        public function Main():void<br />
        {<br />
            var loader:Loader = new Loader();<br />
            addChild(loader);<br />
            loader.loadBytes(new content(), new LoaderContext(false, new ApplicationDomain()));<br />
        }<br />
    }</p>

<p>}
编译然后查看是否正确运 行。现在我们称嵌入里面的SWF为“保护SWF”，刚刚编译的SWF被称为“加载SWF”
<div><a href="{{urls.media}}/2010/04/3.png"><img class="alignnone size-full wp-image-618" title="3" src="{{urls.media}}/2010/04/3.png" alt="" width="648" height="477" /></a></div>
<h2>步骤 2: 分析结果</h2>
让我们再反编译查看下：
<div><a href="{{urls.media}}/2010/04/4.png"><img class="alignnone size-full wp-image-619" title="4" src="{{urls.media}}/2010/04/4.png" alt="" width="600" height="400" /></a></div>
耶!</p>

<p>资源和原始代码都不见了！这里的代码看到的是被加载的SWF而不是它的内容了。这里我们可以避免掉大多数的攻击者，他们不是Flash的高手，但是你的保 护技术在高手面前依然还不是足够的安全，因为被加载的"保护SWF"还是依然等待着他们来破解。
<h2>步骤 3: 解压缩 SWF</h2>
让 我们用hex editor来查看swf:
<div><a href="{{urls.media}}/2010/04/5.png"><img class="alignnone size-full wp-image-620" title="5" src="{{urls.media}}/2010/04/5.png" alt="" width="600" height="471" /></a></div>
<div>它看上去像是一堆二进制数据因为它是以ASCII码的"CWS"开头的。我们需要解压它！（如果你的SWF是以“FWS”开始的，那么这些就是有意义的字 符，那它就是未压缩的。但是我们之后同样可以压缩它）。听上去很难的样子其实不然。SWF文件格式是开发的格式有详细的文档说 明了，你可以从<a href="http://www.adobe.com/devnet/swf/pdf/swf_file_format_spec_v10.pdf">adobe.com</a>下 载在文档的第25页。这里说明了头部结构并说明SWF是怎么压缩的，因此我们解压缩就变得容易多了。写在最开头的3个字节是一个标 志（CSW或FWS）,接下来的字节表示Flash的版本号，再后面的4个字节就表示SWF的大小。如果标志是CWS那剩下的字节的就是被压缩的内容了， 反之如果标志为FWS，那剩下的就是位压缩的。</div>
让我们写一个简单的函数来解压这个SWF:
<pre lang="actionscript3">private  function decompress(data:ByteArray):ByteArray
{
       var  header:ByteArray = new ByteArray();
       var compressed:ByteArray =  new ByteArray();
       var decompressed:ByteArray = new ByteArray();
       header.writeBytes(data, 3, 5); //读取未压缩的头信息，排除标记符号
       compressed.writeBytes(data, 8); //读取剩余的被压缩数据
       compressed.uncompress();
       decompressed.writeMultiByte("FWS",  "us-ascii"); //未压缩标记
       decompressed.writeBytes(header); //回写头部信息
       decompressed.writeBytes(compressed); //回写解压缩数据
       return  decompressed;
}</pre>
这个函数做了一些事：
<ol>
	<li>读取未压缩的header（开始的8个字节）记住不包括标志 符号。</li>
	<li>读取剩下的数据并解压缩它</li>
	<li>回写到头里（变成“FWS”标记）并解压缩数据，创建一个新的，解压缩的SWF。</li>
</ol>
<h2>步骤 4: 创建一个公共程序（Utility）</h2>
接下来我们用Flash创建一个灵巧的工具来压缩和解压缩SWF文件。在一个新的AS3项目中， 编译如下的文档类：
<pre lang="actionscript3">package
{
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.net.FileFilter;
    import flash.net.FileReference;
    import flash.utils.ByteArray;</pre></p>

<p>    public class Compressor extends Sprite<br />
    {<br />
        private var ref:FileReference;</p>

<p>        public function Compressor()<br />
        {<br />
            ref = new FileReference();<br />
            ref.addEventListener(Event.SELECT, load);<br />
            ref.browse([new FileFilter("SWF Files", "*.swf")]);<br />
        }</p>

<p>        private function load(e:Event):void<br />
        {<br />
            ref.addEventListener(Event.COMPLETE, processSWF);<br />
            ref.load();<br />
        }</p>

<p>        private function processSWF(e:Event):void<br />
        {<br />
            var swf:ByteArray;<br />
            switch(ref.data.readMultiByte(3, "us-ascii"))<br />
            {<br />
                case "CWS":<br />
                    swf = decompress(ref.data);<br />
                    break;<br />
                case "FWS":<br />
                    swf = compress(ref.data);<br />
                    break;<br />
                default:<br />
                    throw Error("Not SWF...");<br />
                    break;<br />
            }</p>

<p>            new FileReference().save(swf);<br />
        }</p>

<p>        private function compress(data:ByteArray):ByteArray<br />
       {<br />
            var header:ByteArray = new ByteArray();<br />
            var decompressed:ByteArray = new ByteArray();<br />
            var compressed:ByteArray = new ByteArray();</p>

<p>            header.writeBytes(data, 3, 5); //read the header, excluding the signature<br />
            decompressed.writeBytes(data, 8); //read the rest</p>

<p>            decompressed.compress();</p>

<p>            compressed.writeMultiByte("CWS", "us-ascii"); //mark as compressed<br />
            compressed.writeBytes(header);<br />
            compressed.writeBytes(decompressed);</p>

<p>            return compressed;<br />
        }</p>

<p>        private function decompress(data:ByteArray):ByteArray<br />
        {<br />
            var header:ByteArray = new ByteArray();<br />
            var compressed:ByteArray = new ByteArray();<br />
            var decompressed:ByteArray = new ByteArray();</p>

<p>            header.writeBytes(data, 3, 5); //read the uncompressed header, excluding the signature<br />
            compressed.writeBytes(data, 8); //read the rest, compressed</p>

<p>            compressed.uncompress();</p>

<p>            decompressed.writeMultiByte("FWS", "us-ascii"); //mark as uncompressed<br />
            decompressed.writeBytes(header); //write the header back<br />
            decompressed.writeBytes(compressed); //write the now uncompressed content</p>

<p>            return decompressed;<br />
        }<br />
    }<br />
}
大概你已经注意到了，我只是实现了两件事:加载文件和压缩函数。</p>

<p>这个压缩函数基本与解压缩函数一致，只是反转而以。文件的加载用的是 FileReference （必须FP10）而加载的文件要么被压缩，要么被解压缩。注意：我们只能用标准的player在本地运行这个SWF，因为<em>FileReference.browse()</em>必 须与用户交互（译者：只有用本地player才能运行，如果在网络访问，无法弹出对话框的）
<div><a href="{{urls.media}}/2010/04/6.png"><img class="alignnone size-full wp-image-621" title="6" src="{{urls.media}}/2010/04/6.png" alt="" width="563" height="419" /></a></div>
<h2>步 骤 5: 解压缩被加载的SWF</h2>
测试这个工具，动起来，加载一个SWF文件然后再保存。然后用hex  editor进行查看。你看到的ascii字符串就类似如下的：
<div><a href="{{urls.media}}/2010/04/7.png"><img class="alignnone size-full wp-image-622" title="7" src="{{urls.media}}/2010/04/7.png" alt="" width="600" height="471" /></a></div>
<h2>步 骤 6: 再次分析</h2>
让我们回到步骤2.当反编译器不能在“保护SWF”得到有用的数据，这是在未压缩的loader中获取这个SWF那将 是很容易的。只需要搜索“CWS”（如果“保护SWF”是未压缩的，直接搜索“FWS”）这样就看到如下的结果了：
<div><a href="{{urls.media}}/2010/04/8.png"><img class="alignnone size-full wp-image-623" title="8" src="{{urls.media}}/2010/04/8.png" alt="" width="600" height="471" /></a></div>
你 将会发现一个DefineBinaryData标记，这个就是包含“保护SWF”的，将这段字符提取出来便可以了。所以我们不得不再在这个加载的SWF上 加上一层保护:加密。
<h2>步骤 7: 加密</h2>
为了让我们的“保护SWF”不那么容易被找到，所 以我们要采用加密。我选择了as3crypto的方式，你可以从这里下载到：<a href="http://code.google.com/p/as3crypto/" target="_blank">code.google.com</a>。 你可以用其他任何类库来代替（或者你自己实现，或许更好），但有一个必须的条件就是一个key，用来对二进制进行加密和解密。
<h2>步骤 8: 加密数据</h2>
首先我们需要一个公用程序在将SWF嵌入之前进行加密。这需要对as3crypto库有简单的了解，而这个库也是非常 的简单易用，将这个类库添加到你的库路径里，然后就可以通过如下的方式使用了：
<pre lang="actionscript3">var aes:AESKey = new AESKey(binKey);
var bytesToEncrypt:int = (data.length &amp; ~15); //确保能被16整除，最后4个字节为0
for (var i:int = 0; i &lt; bytesToEncrypt; i += 16)
        aes.encrypt(data, i);</pre>
这里做了什么处理呢？我们使用as3crypto类所生成的实例 AESKey对内容进行加密。这个类每次加密16个字节（128-bit），我们通过for循环将所有的数据加密。注意第二行：data.length&amp;~15。这是为了确保被加密的字节数刚好可以被16整除否则我们将不能调用aes.encrypt().</p>

<p><strong>注 意:</strong> 在这里对加密知识的了解非常重要。这里不是真正的加密，我们只是在SWF中嵌入一个key来混淆而已。这里的目的是将数据变成二进制乱码，这就是上面代码 的作用，虽然可以达到15个加密字节（在我们的例子中我们不关心这个）。我不是一个密码专家，而我也相信上面的代码在专业的密码人员眼里是如此的渐现，但 是如我所说SWF中查找这个key也是很渺茫的。
<h2>步骤9:加密公共程序</h2>
现在需要另一个公共程序用 来帮助我们加密SWF文件。这几乎和我们之前轻松创建的压缩程序是一样的，这里就不再赘述了。</p>

<p>在新的项目里编译这个文档类：
<pre lang="actionscript3">package
{
    import com.hurlant.crypto.symmetric.AESKey;
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.net.FileReference;
    import flash.utils.ByteArray;</pre></p>

<p>    public class Encryptor extends Sprite<br />
    {<br />
        private var key:String = "activetuts"; //I hardcoded the key<br />
        private var ref:FileReference;</p>

<p>        public function Encryptor()<br />
        {<br />
            ref = new FileReference();<br />
            ref.addEventListener(Event.SELECT, load);<br />
            ref.browse();<br />
        }</p>

<p>        private function load(e:Event):void<br />
        {<br />
            ref.addEventListener(Event.COMPLETE, encrypt);<br />
            ref.load();<br />
        }</p>

<p>        private function encrypt(e:Event):void<br />
        {<br />
            var data:ByteArray = ref.data;</p>

<p>            var binKey:ByteArray = new ByteArray();<br />
            binKey.writeUTF(key); //AESKey requires binary key</p>

<p>            var aes:AESKey = new AESKey(binKey);<br />
            var bytesToEncrypt:int = (data.length &amp; ~15); //make sure that it can be divided by 16, zero the last 4 bytes<br />
            for (var i:int = 0; i &lt; bytesToEncrypt; i += 16)<br />
                aes.encrypt(data, i);</p>

<p>            new FileReference().save(data);<br />
        }<br />
    }<br />
}
运行它，首先选择你要加密的SWF，然后将加密后的swf另存就可以了。
<h2>步骤  10:更改加载模块</h2>
重新回到前面加载SWF项目。因为内容已经被加密过，所以我们必须修改加载SWF，在其中添加解密代码。不要忘记将 Embed 标签中的src重新指向被加密的SWF上。
<pre lang="actionscript3">package
{
    import com.hurlant.crypto.symmetric.AESKey;
    import flash.display.Loader;
    import flash.display.Sprite;
    import flash.system.ApplicationDomain;
    import flash.system.LoaderContext;
    import flash.utils.ByteArray;</pre></p>

<p>    [SWF (width = 640, height = 423)] //the dimensions should be same as the loaded swf's<br />
    public class Main extends Sprite<br />
    {<br />
        [Embed (source = "VerletClothEn.swf", mimeType = "application/octet-stream")]<br />
        // source = path to the swf you want to protect<br />
        private var content:Class;</p>

<p>        private var key:String = "activetuts";</p>

<p>        public function Main():void<br />
        {<br />
            var data:ByteArray = new content();</p>

<p>            var binKey:ByteArray = new ByteArray();<br />
            binKey.writeUTF(key); //AESKey requires binary key</p>

<p>            var aes:AESKey = new AESKey(binKey);<br />
            var bytesToDecrypt:int = (data.length &amp; ~15); //make sure that it can be divided by 16, zero the last 4 bytes<br />
            for (var i:int = 0; i &lt; bytesToDecrypt; i += 16)<br />
                aes.decrypt(data, i);</p>

<p>            var loader:Loader = new Loader();<br />
            addChild(loader);<br />
            loader.loadBytes(data, new LoaderContext(false, new ApplicationDomain()));<br />
        }<br />
    }</p>

<p>}
这里除了代码中间的解密代码不同外其余基本相同。现在编译这个加载SWF并测试它是否工作。如果你一直很仔细的根据我所说的做，这个“保护SWF”是会成功 被加载并显示的。
<h2>步骤 11:通过反编译器看看内部</h2>
在反编译器里打开这个加载SWF看看。
<div><a href="{{urls.media}}/2010/04/9.png"><img class="alignnone size-full wp-image-624" title="9" src="{{urls.media}}/2010/04/9.png" alt="" width="600" height="400" /></a></div>
这里包含约1000行的混乱的加密代码，从中提取这个“保护SWF”已经相当困难了。我们再加入一些新的步骤增加攻击者负担：
<ol>
	<li>他 （她）找到拥有加密内容的DefineBinaryData，并将其提取出来</li>
	<li>他必须有一个工具去解密它。</li>
</ol>
这个问题 就变成创建一个工具，类似从反编译器中复制－粘贴到代码编辑器，只需要对代码做简短的修改。我尝试着去破坏自己保护的swf,那是相当简单的－我做这些只 用了将近5分钟。所以我们不得不做一些测试。
<h2>步骤12:字符串混淆</h2>
首先，我将“保护SWF”加载到SWF，并加密它，现 在我们将对加载SWF做最后的处理。我们用非法的名字重命名类名，函数名和变量名。</p>

<p>我意味的非法名称例如,;!@@,^#^和(^_^)。 这么酷的事只对编译器有效果而对FlashPlayer是没关系的。当编译器内部识别遇到非法字符，它不能解析它们而它们就无法通过编译。另一方面，播放器中的非法命名是没有任何问题的。我们可以用非法字符编译SWF，解压它然后用一堆非法字符来重命名它们。这个反编译器将输出非法的代码，而攻击者不得不 自己去整理数以万计的代码，在他编译之前必须先移除这些非法字符。他值得这么做！</p>

<p>这是在字符混淆之前的视图：
<div><a href="{{urls.media}}/2010/04/10.png"><img class="alignnone size-full wp-image-625" title="10" src="{{urls.media}}/2010/04/10.png" alt="" width="600" height="492" /></a></div>
让我们开始吧！使用我们制作的工具解压缩加载SWF，并在hex editor查看。
<h2>步骤13: 你的第一个混淆</h2>
让我们重命名文档类。在左侧找到原名（Main),让我们用hex editor打开未压缩加载SWF并搜索：
<div><a href="{{urls.media}}/2010/04/11.png"><img class="alignnone size-full wp-image-626" title="11" src="{{urls.media}}/2010/04/11.png" alt="" width="600" height="471" /></a></div>
将“Main”重命名为;;;;。现在再继续查找“Main”同样重命名为;;;;。
<div><a href="{{urls.media}}/2010/04/12.png"><img class="alignnone size-full wp-image-627" title="12" src="{{urls.media}}/2010/04/12.png" alt="" width="600" height="471" /></a></div>
当我们在重命名的时候确保你不会将不必要的字符串重命名，否则SWF将无法运行。
<div><a href="{{urls.media}}/2010/04/13.png"><img class="alignnone size-full wp-image-628" title="13" src="{{urls.media}}/2010/04/13.png" alt="" width="600" height="287" /></a></div>
Save  and run the SWF. It works! And look what the decompiler says:
<div><a href="{{urls.media}}/2010/04/14.png"><img class="alignnone size-full wp-image-629" title="14" src="{{urls.media}}/2010/04/14.png" alt="" width="600" height="400" /></a></div>
胜利!! <img src="http://active.tutsplus.com/wp-includes/images/smilies/icon_smile.gif" alt=":)" />
<h2>步骤 14: 重命名剩余的类名</h2>
继续重命名你的类名。选择类名并查找它，从头到尾查找并替换成非法字符。如我所说，最重要的是利用你的常 识，确保你不会打乱你的SWF文件。当你重命名完类名后，你可以重命名你的包名。注意：当你重命名包名时，你可以将其命名为长长的非法字符包名。看看我的 命名：
<div><a href="{{urls.media}}/2010/04/15.png"><img class="alignnone size-full wp-image-630" title="15" src="{{urls.media}}/2010/04/15.png" alt="" width="600" height="423" /></a></div>
当你完成类名和包名的重命名后，你可以重命名函数和变量。它们同样非常容易重命名，因为它们通常出现的比较少。当然，确保你重命名你的方法不会与Flash 内置的方法相同。确保你不会擦除掉我们的加密使用的key（这里是"activetuts"）。
<h2>步骤  15: 压缩SWF</h2>
在你完成重命名后，你将压缩SWF，因为它大小将变小。我们可以使用我们之前制作的压缩工具，运行这个工具，选择 SWF然后另存。
<div><a href="{{urls.media}}/2010/04/16.png"><img class="alignnone size-full wp-image-631" title="16" src="{{urls.media}}/2010/04/16.png" alt="" width="600" height="480" /></a></div>
<h2>结 论：最后回顾</h2>
再打开看看，类名、变量名和方法名是否被混淆成功而“保护SWF”是否被藏匿其中，并加密。这个技术可能会让开始的时候比较 慢（因为有解密的原因），但是这仅仅是一点点时间。</p>

<p>之后我创建一个自动工具将我的“保护SWF”注入到“加载SWF”里，而它也能很好的操 作。唯一的问题就是如果你用了这个自动工具进行注入，它就能被其他工具破解。因此攻击者只要做一个相应的工具就会很容易获取你的SWF。所以我每次做 SWF的工作都是通过自己手动操作，附带一些细小的修改，让自动化变得困难。</p>

<p>另一个很好的应用技术就是<em>Domain locking</em>。 这里用你SWF当前正在执行的域名来代替前面进行解密所使用的字符串常量。<span>因此，用一个if语句来检查域，您可以引入一个更强大 的方式来保护放在其他网 站上的SWF。</span></p>

<p>最后，你可以用自己实现的加密代码来代替现在的加密代码。为 什么？因为我们使用的加密代码都是来自常见的开源库这样攻击者同样也能使用。他可以下一个完全的拷贝，怎么样的混淆都变得多余了。另外，使用你自己实现的 代码，他必须首先得还原你的混淆，这样他才能继续接下来的工作。
<h2>其他一些保护方法</h2>
在Flash应 用里SWF被破解是一个大问题，这里还有一些供选择的保护方法。许多程序都是基于字节层的AS混淆（比如Kindisoft的  secureSWF）。它们破坏编译好的字节，当反编译器尝试输出代码的时候就失败了，甚至有时候崩溃。当然越好的加密工具，价格也越贵。所以在你选择用 何种工具加密的时候，需要考虑加密的程度。如果你所保护的算法是拥有50个程序员工作室耗时2年做的东西，你就需要考虑比重命名变量更好的办法了。再者， 如果你只想要保护玩家提交的最高分，那这个技术就已经够了。</p>

<p>我喜欢这种办法只是在运行的时候你保护的SWF不被很容易接触到。而字节代码的 混淆可能会破坏SWF并产生一些Bug（虽然我自己还没有遇到过）。</p>

<p>这次就到这里，希望你喜欢这篇教程并能学到新的东西！如果你有什么问题 或意见可以在下方留言。</p>

<p>PS：我翻译这篇文章是想推荐这种简单的加密方法，让大家对flash的加密有简单的了解，只为抛 砖引玉。</p>

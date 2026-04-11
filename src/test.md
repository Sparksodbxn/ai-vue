### <font style="color:rgb(52, 73, 94);">TCP/IP网络模型/ OSI模型</font>
<font style="color:rgb(52, 73, 94);">OSI模型， 是国际标准化组织（ISO）制定的一个用于计算机或通信系统间互联的标准体系，将计算机网络通信划分为七个不同的层级，每个层级都负责特定的功能。每个层级都构建在其下方的层级之上，并为上方的层级提供服务。七层从下到上分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。虽然OSI模型在理论上更全面，但在实际网络通信中，TCP/IP模型更为实用。</font><font style="color:rgb(52, 73, 94);">TCP/IP模型分为四个层级，每个层级负责特定的网络功能。</font>

1. <font style="color:rgb(52, 73, 94);">应用层：该层与OSI模型的应用层和表示层以及会话层类似，提供直接与用户应用程序交互的接口。它为网络上的各种应用程序提供服务，如电子邮件（SMTP）、网页浏览（HTTP）、文件传输（FTP）等。</font>
2. <font style="color:rgb(52, 73, 94);">传输层：该层对应OSI模型的传输层。它负责端到端的数据传输，提供可靠的、无连接的数据传输服务。主要的传输层协议有TCP和UDP。TCP提供可靠的数据传输，确保数据的正确性和完整性；而UDP则是无连接的，适用于不要求可靠性的传输，如实时音频和视频流。</font>
3. <font style="color:rgb(52, 73, 94);">网际层：该层对应OSI模型的网络层。主要协议是IP，它负责数据包的路由和转发，选择最佳路径将数据从源主机传输到目标主机。IP协议使用IP地址来标识主机和网络，并进行逻辑地址寻址。</font>
4. <font style="color:rgb(52, 73, 94);">网络接口层：该层对应OSI模型的数据链路层和物理层。它负责物理传输媒介的传输，例如以太网、Wi-Fi等，并提供错误检测和纠正的功能。此外，网络接口层还包含硬件地址（MAC地址）的管理。</font>

### <font style="color:rgb(52, 73, 94);">HTTP有哪些请求方式？GET请求和POST请求的区别</font>
**<font style="color:rgb(52, 73, 94);">HTTP请求方式：</font>**

1. **<font style="color:rgb(52, 73, 94);">GET</font>**<font style="color:rgb(52, 73, 94);">：请求指定的资源。</font>
2. **<font style="color:rgb(52, 73, 94);">POST</font>**<font style="color:rgb(52, 73, 94);">：向指定资源提交数据进行处理请求（例如表单提交）。</font>
3. **<font style="color:rgb(52, 73, 94);">PUT</font>**<font style="color:rgb(52, 73, 94);">：更新指定资源。</font>
4. **<font style="color:rgb(52, 73, 94);">DELETE</font>**<font style="color:rgb(52, 73, 94);">：删除指定资源。</font>
5. **<font style="color:rgb(52, 73, 94);">HEAD</font>**<font style="color:rgb(52, 73, 94);">：获取报文首部，不返回报文主体。</font>
6. **<font style="color:rgb(52, 73, 94);">OPTIONS</font>**<font style="color:rgb(52, 73, 94);">：查询服务器支持的请求方法。</font>
7. **<font style="color:rgb(52, 73, 94);">PATCH</font>**<font style="color:rgb(52, 73, 94);">：对资源进行部分更新。</font>

**<font style="color:rgb(52, 73, 94);">GET请求和POST请求的区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">用途：</font>**<font style="color:rgb(52, 73, 94);">GET请求通常用于获取数据，POST请求用于提交数据。</font>
2. **<font style="color:rgb(52, 73, 94);">数据传输</font>**<font style="color:rgb(52, 73, 94);">：GET请求将参数附加在URL之后，POST请求将数据放在请求体中。</font>
3. **<font style="color:rgb(52, 73, 94);">安全性</font>**<font style="color:rgb(52, 73, 94);">：GET请求由于参数暴露在URL中，安全性较低；POST请求参数不会暴露在URL中，相对更安全。</font>
4. **<font style="color:rgb(52, 73, 94);">数据大小</font>**<font style="color:rgb(52, 73, 94);">：GET请求受到URL长度限制，数据量有限；POST请求理论上没有大小限制。</font>
5. **<font style="color:rgb(52, 73, 94);">幂等性</font>**<font style="color:rgb(52, 73, 94);">：GET请求是幂等的，即多次执行相同的GET请求，资源的状态不会改变；POST请求不是幂等的，因为每次提交都可能改变资源状态。</font>
6. **<font style="color:rgb(52, 73, 94);">缓存</font>**<font style="color:rgb(52, 73, 94);">：GET请求可以被缓存，POST请求默认不会被缓存。</font>

### <font style="color:rgb(52, 73, 94);">什么是强缓存和协商缓存</font>
<font style="color:rgb(52, 73, 94);">强缓存和协商缓存是HTTP缓存机制的两种类型，它们用于减少服务器的负担和提高网页加载速度。</font>

1. **<font style="color:rgb(52, 73, 94);">强缓存</font>**<font style="color:rgb(52, 73, 94);">：客户端在没有向服务器发送请求的情况下，直接从本地缓存中获取资源。强缓存通过HTTP响应头中的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cache-Control</font>`<font style="color:rgb(52, 73, 94);">字段实现，如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">max-age</font>`<font style="color:rgb(52, 73, 94);">，告诉浏览器在指定时间内可以直接使用缓存数据，无需再次请求。</font>
2. **<font style="color:rgb(52, 73, 94);">协商缓存</font>**<font style="color:rgb(52, 73, 94);">：当强缓存失效时，浏览器会发送请求到服务器，通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ETag</font>`<font style="color:rgb(52, 73, 94);">或</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-Modified</font>`<font style="color:rgb(52, 73, 94);">等HTTP响应头与服务器进行验证，以确定资源是否被修改。如果资源未修改，服务器返回</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">304 Not Modified</font>`<font style="color:rgb(52, 73, 94);">状态码，告知浏览器使用本地缓存；如果资源已修改，则返回新的资源，浏览器更新本地缓存。这种方式需要与服务器通信，但可以确保用户总是获取最新的内容。</font>

<font style="color:rgb(52, 73, 94);">强缓存和协商缓存是HTTP缓存机制的两种类型，它们用于减少服务器的负担和提高网页加载速度。</font>

1. **<font style="color:rgb(52, 73, 94);">强缓存</font>**<font style="color:rgb(52, 73, 94);">：客户端在没有向服务器发送请求的情况下，直接从本地缓存中获取资源。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Expires强缓存</font>`<font style="color:rgb(52, 73, 94);">：设置一个强缓存时间，此时间范围内，从内存中读取缓存并返回。但是因为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Expires</font>`<font style="color:rgb(52, 73, 94);">判断强缓存过期的机制是获取本地时间戳，与之前拿到的资源文件中的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Expires</font>`<font style="color:rgb(52, 73, 94);">字段的时间做比较来判断是否需要对服务器发起请求。这里有一个巨大的漏洞：“如果我本地时间不准咋办？”所以目前已经被废弃了。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cache-Control强缓存</font>`<font style="color:rgb(52, 73, 94);">：目前使用的强缓存是通过HTTP响应头中的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cache-Control</font>`<font style="color:rgb(52, 73, 94);">字段实现，通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">max-age</font>`<font style="color:rgb(52, 73, 94);">来告诉浏览器在指定时间内可以直接使用缓存数据，无需再次请求。</font>
1. **<font style="color:rgb(52, 73, 94);">协商缓存</font>**<font style="color:rgb(52, 73, 94);">：当强缓存失效时，浏览器会发送请求到服务器，通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ETag</font>`<font style="color:rgb(52, 73, 94);">或</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-Modified</font>`<font style="color:rgb(52, 73, 94);">等HTTP响应头与服务器进行验证，以确定资源是否被修改。如果资源未修改，服务器返回</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">304 Not Modified</font>`<font style="color:rgb(52, 73, 94);">状态码，告知浏览器使用本地缓存；如果资源已修改，则返回新的资源，浏览器更新本地缓存。这种方式需要与服务器通信，但可以确保用户总是获取最新的内容。</font>
+ <font style="color:rgb(52, 73, 94);">基于</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-Modified</font>`<font style="color:rgb(52, 73, 94);">的协商缓存</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-Modified</font>`<font style="color:rgb(52, 73, 94);"> 是资源的最后修改时间，服务器在响应头部中返回。</font>
    - <font style="color:rgb(52, 73, 94);">当客户端读取到</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-modified</font>`<font style="color:rgb(52, 73, 94);">的时候，会在下次的请求标头中携带一个字段:</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-Modified-Since</font>`<font style="color:rgb(52, 73, 94);">，而这个请求头中的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-Modified-Since</font>`<font style="color:rgb(52, 73, 94);">就是服务器第一次修改时候给他的时间。</font>
    - <font style="color:rgb(52, 73, 94);">服务器比较请求中的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-Modified-Since</font>`<font style="color:rgb(52, 73, 94);"> 值与当前资源的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Last-Modified</font>`<font style="color:rgb(52, 73, 94);"> 值，如果比对的结果是没有变化，表示资源未发生变化，返回状态码 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">304 Not Modified</font>`<font style="color:rgb(52, 73, 94);">。如果比对的结果说资源已经更新了，就会给浏览器正常返回资源，返回200状态。</font>

<font style="color:rgb(52, 73, 94);">但是这样的协商缓存有两个缺点：</font>

    - <font style="color:rgb(52, 73, 94);">因为是更改文件修改时间来判断的，所以在文件内容本身不修改的情况下，依然有可能更新文件修改时间（比如修改文件名再改回来），这样，就有可能文件内容明明没有修改，但是缓存依然失效了。</font>
    - <font style="color:rgb(52, 73, 94);">当文件在极短时间内完成修改的时候（比如几百毫秒）。因为文件修改时间记录的最小单位是秒，所以，如果文件在几百毫秒内完成修改的话，文件修改时间不会改变，这样，即使文件内容修改了，依然不会返回新的文件。</font>
+ <font style="color:rgb(52, 73, 94);">基于ETag的协商缓存：将原先协商缓存的比较时间戳的形式修改成了比较文件指纹（根据文件内容计算出的唯一哈希值）。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ETag</font>`<font style="color:rgb(52, 73, 94);"> 是服务器为资源生成的唯一标识符（文件指纹），可以是根据文件内容计算出的哈希值，服务端将其和资源一起放回给客户端。</font>
    - <font style="color:rgb(52, 73, 94);">客户端在请求头部的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-None-Match</font>`<font style="color:rgb(52, 73, 94);"> 字段中携带上次响应的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ETag</font>`<font style="color:rgb(52, 73, 94);"> 值。</font>
    - <font style="color:rgb(52, 73, 94);">服务器比较请求中的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-None-Match</font>`<font style="color:rgb(52, 73, 94);"> 值与当前资源的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ETag</font>`<font style="color:rgb(52, 73, 94);"> 值，如果匹配，表示资源未发生变化，返回状态码 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">304 Not Modified</font>`<font style="color:rgb(52, 73, 94);">。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的ETag中并返回给客户端</font>

### <font style="color:rgb(52, 73, 94);">HTTP1.0和HTTP1.1的区别</font>
1. **<font style="color:rgb(52, 73, 94);">持久连接</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 默认支持持久连接，允许在一个TCP连接上发送多个HTTP请求和响应，减少了连接建立和关闭的开销。而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.0</font>`<font style="color:rgb(52, 73, 94);"> 默认为短连接，每次请求都需要建立一个TCP连接，并通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Connection: keep-alive</font>`<font style="color:rgb(52, 73, 94);">头来实现持久连接。</font>
2. **<font style="color:rgb(52, 73, 94);">管道化</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 支持管道化，允许客户端在第一个请求的响应到达之前发送多个请求，这可以减少等待时间，提高效率。HTTP/1.0不支持管道化。</font>
3. **<font style="color:rgb(52, 73, 94);">缓存控制</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP1.0</font>`<font style="color:rgb(52, 73, 94);">主要使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">If-Modified-Since/Expires</font>`<font style="color:rgb(52, 73, 94);">来做为缓存判断的标准，而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP1.1</font>`<font style="color:rgb(52, 73, 94);">则引入了更多的缓存控制策略例如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Etag / If-None-Match</font>`<font style="color:rgb(52, 73, 94);">等更多可供选择的缓存头来控制缓存策略。 </font>
4. <font style="color:rgb(52, 73, 94);">错误处理：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 增加了一些新的HTTP状态码，如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">100 Continue</font>`<font style="color:rgb(52, 73, 94);">，用于增强错误处理和请求的中间响应。</font>
5. `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Host</font>`<font style="color:rgb(52, 73, 94);"> 头：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 引入了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Host</font>`<font style="color:rgb(52, 73, 94);">头，允许客户端指定请求的主机名，这使得在同一台服务器上托管多个域名成为可能。HTTP/1.0没有这个头字段。</font>
6. <font style="color:rgb(52, 73, 94);">带宽优化 ：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP1.0</font>`<font style="color:rgb(52, 73, 94);">中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能， 而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP1.1</font>`<font style="color:rgb(52, 73, 94);">则在请求头引入了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">range</font>`<font style="color:rgb(52, 73, 94);">头域，它允许只请求资源的某个部分，即返回码是</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">206（Partial Content）</font>`

### <font style="color:rgb(52, 73, 94);">HTTP2.0与HTTP1.1的区别？</font>
1. **<font style="color:rgb(52, 73, 94);">二进制协议</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/2.0</font>`<font style="color:rgb(52, 73, 94);"> 采用二进制格式传输数据，而非</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 的文本格式，使得解析更高效，减少了解析时间。</font>
2. **<font style="color:rgb(52, 73, 94);">多路复用</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/2.0</font>`<font style="color:rgb(52, 73, 94);"> 支持多路复用，允许在单个TCP连接上并行交错发送多个请求和响应，解决了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/1.1</font>`<font style="color:rgb(52, 73, 94);"> 中的</font>**<font style="color:rgb(52, 73, 94);">队头阻塞</font>**<font style="color:rgb(52, 73, 94);">问题。</font>
3. **<font style="color:rgb(52, 73, 94);">头部压缩</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/2.0</font>`<font style="color:rgb(52, 73, 94);"> 引入了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HPACK</font>`<font style="color:rgb(52, 73, 94);"> 压缩算法，对请求和响应的头部信息进行压缩，减少了冗余头部信息的传输，提高了传输效率。</font>
4. **<font style="color:rgb(52, 73, 94);">服务器推送</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/2.0</font>`<font style="color:rgb(52, 73, 94);"> 允许服务器主动推送资源给客户端，而不需要客户端明确请求，这可以减少页面加载时间。</font>
5. **<font style="color:rgb(52, 73, 94);">优先级和依赖</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP/2.0</font>`<font style="color:rgb(52, 73, 94);"> 允许客户端为请求设置优先级，并表达请求之间的依赖关系，资源加载更加有序。</font>

### <font style="color:rgb(52, 73, 94);">HTTPS和HTTP有哪些区别</font>
<font style="color:rgb(52, 73, 94);">两者的主要区别在于安全性和数据加密：</font>

1. **<font style="color:rgb(52, 73, 94);">加密层</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTPS</font>`<font style="color:rgb(52, 73, 94);"> 在</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);"> 的基础上增加了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SSL/TLS</font>`<font style="color:rgb(52, 73, 94);"> 协议作为加密层，确保数据传输的安全性。</font>
2. **<font style="color:rgb(52, 73, 94);">数据安全</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTPS</font>`<font style="color:rgb(52, 73, 94);"> 通过加密，保护数据在传输过程中不被窃听或篡改，而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);"> 数据传输是明文的，容易受到攻击。</font>
3. **<font style="color:rgb(52, 73, 94);">端口</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTPS</font>`<font style="color:rgb(52, 73, 94);"> 通常使用端口</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">443</font>`<font style="color:rgb(52, 73, 94);"> ，而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);"> 使用端口80。</font>

### <font style="color:rgb(52, 73, 94);">HTTPS工作原理</font>
`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTPS</font>`<font style="color:rgb(52, 73, 94);"> 主要基于</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SSL/TLS</font>`<font style="color:rgb(52, 73, 94);"> 协议，确保了数据传输的安全性和完整性, 其建立连接并传输数据的过程如下：</font>

1. **<font style="color:rgb(52, 73, 94);">密钥交换</font>**<font style="color:rgb(52, 73, 94);">：客户端发起HTTPS请求后，服务器会发送其公钥证书给客户端。</font>
2. **<font style="color:rgb(52, 73, 94);">证书验证</font>**<font style="color:rgb(52, 73, 94);">：客户端会验证服务器的证书是否由受信任的证书颁发机构（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">CA</font>`<font style="color:rgb(52, 73, 94);"> ）签发，并检查证书的有效性。</font>
3. **<font style="color:rgb(52, 73, 94);">加密通信</font>**<font style="color:rgb(52, 73, 94);">：一旦证书验证通过，客户端会生成一个随机的对称加密密钥，并使用服务器的公钥加密这个密钥，然后发送给服务器。</font>
4. **<font style="color:rgb(52, 73, 94);">建立安全连接</font>**<font style="color:rgb(52, 73, 94);">：服务器使用自己的私钥解密得到对称加密密钥，此时客户端和服务器都有了相同的密钥，可以进行加密和解密操作。</font>
5. **<font style="color:rgb(52, 73, 94);">数据传输</font>**<font style="color:rgb(52, 73, 94);">：使用对称加密密钥对所有传输的数据进行加密，确保数据在传输过程中的安全性。</font>
6. **<font style="color:rgb(52, 73, 94);">完整性校验</font>**<font style="color:rgb(52, 73, 94);">：SSL/TLS协议还包括消息完整性校验机制，如消息认证码，确保数据在传输过程中未被篡改。</font>
7. **<font style="color:rgb(52, 73, 94);">结束连接</font>**<font style="color:rgb(52, 73, 94);">：数据传输完成后，通信双方会进行会话密钥的销毁，以确保不会留下安全隐患。</font>

### <font style="color:rgb(52, 73, 94);">TCP和UDP的区别</font>
1. <font style="color:rgb(52, 73, 94);">TCP是</font>**<font style="color:rgb(52, 73, 94);">面向连接</font>**<font style="color:rgb(52, 73, 94);">的协议，需要在数据传输前建立连接；UDP是无连接的，不需要建立连接。</font>
2. <font style="color:rgb(52, 73, 94);">TCP提供</font>**<font style="color:rgb(52, 73, 94);">可靠</font>**<font style="color:rgb(52, 73, 94);">的数据传输，保证数据包的顺序和完整性；UDP不保证数据包的顺序或完整性。</font>
3. <font style="color:rgb(52, 73, 94);">TCP具有</font>**<font style="color:rgb(52, 73, 94);">拥塞控制机制</font>**<font style="color:rgb(52, 73, 94);">，可以根据网络状况调整数据传输速率；UDP没有拥塞控制，发送速率通常固定。</font>
4. <font style="color:rgb(52, 73, 94);">TCP通过</font>**<font style="color:rgb(52, 73, 94);">滑动窗口机制</font>**<font style="color:rgb(52, 73, 94);">进行流量控制，避免接收方处理不过来；UDP没有流量控制。</font>
5. <font style="color:rgb(52, 73, 94);">TCP能够</font>**<font style="color:rgb(52, 73, 94);">检测并重传</font>**<font style="color:rgb(52, 73, 94);">丢失或损坏的数据包；UDP不提供错误恢复机制。</font>
6. <font style="color:rgb(52, 73, 94);">TCP有复杂的报文头部，包含序列号、确认号等信息；UDP的报文头部相对简单。</font>
7. <font style="color:rgb(52, 73, 94);">由于TCP的连接建立、数据校验和重传机制，其性能开销通常比UDP大；UDP由于简单，性能开销小。</font>
8. **<font style="color:rgb(52, 73, 94);">适用场景：</font>**<font style="color:rgb(52, 73, 94);">TCP适用于需要可靠传输的应用，如网页浏览、文件传输等；UDP适用于对实时性要求高的应用，如语音通话、视频会议等。</font>

### <font style="color:rgb(52, 73, 94);">三次握手的过程，为什么是三次</font>
<font style="color:rgb(52, 73, 94);">(1) 三次握手的过程</font>

1. **<font style="color:rgb(52, 73, 94);">第一次握手</font>**<font style="color:rgb(52, 73, 94);">：客户端向服务器发送一个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN</font>`<font style="color:rgb(52, 73, 94);"> （同步序列编号）报文，请求建立连接，客户端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN_SENT</font>`<font style="color:rgb(52, 73, 94);"> 状态。</font>
2. **<font style="color:rgb(52, 73, 94);">第二次握手</font>**<font style="color:rgb(52, 73, 94);">：服务器收到</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN</font>`<font style="color:rgb(52, 73, 94);"> 报文后，如果同意建立连接，则会发送一个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN-ACK</font>`<font style="color:rgb(52, 73, 94);"> （同步确认）报文作为响应，同时进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN_RCVD</font>`<font style="color:rgb(52, 73, 94);"> 状态。</font>
3. **<font style="color:rgb(52, 73, 94);">第三次握手</font>**<font style="color:rgb(52, 73, 94);">：客户端收到服务器的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SYN-ACK</font>`<font style="color:rgb(52, 73, 94);"> 报文后，会发送一个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);"> （确认）报文作为最终响应，之后客户端和服务器都进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ESTABLISHED</font>`<font style="color:rgb(52, 73, 94);"> 状态，连接建立成功。</font>

<font style="color:rgb(52, 73, 94);">(2)为什么需要三次握手</font>

<font style="color:rgb(52, 73, 94);">通过三次握手，客户端和服务器都能够确认对方的接收和发送能力。第一次握手确认了客户端到服务器的通道是开放的；第二次握手确认了服务器到客户端的通道是开放的；第三次握手则确认了客户端接收到服务器的确认，从而确保了双方的通道都是可用的。</font>

<font style="color:rgb(52, 73, 94);">而如果仅使用两次握手，服务器可能无法确定客户端的接收能力是否正常，比如客户端可能已经关闭了连接，但之前发送的连接请求报文在网络上延迟到达了服务器，服务器就会主动去建立一个连接，但是客户端接收不到，导致资源的浪费。而四次握手可以优化为三次。</font>

### <font style="color:rgb(52, 73, 94);">四次挥手的过程，为什么是四次</font>
<font style="color:rgb(52, 73, 94);">（1）四次挥手的过程</font>

1. <font style="color:rgb(52, 73, 94);">第一次挥手：客户端发送一个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN</font>`<font style="color:rgb(52, 73, 94);">报文给服务端，表示自己要断开数据传送，报文中会指定一个序列号 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">(seq=x)</font>`<font style="color:rgb(52, 73, 94);">。然后,客户端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN-WAIT-1</font>`<font style="color:rgb(52, 73, 94);">状态。 </font>
2. <font style="color:rgb(52, 73, 94);">第二次挥手：服务端收到</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN</font>`<font style="color:rgb(52, 73, 94);">报文后，回复</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);">报文给客户端，且把客户端的序列号值</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">+1</font>`<font style="color:rgb(52, 73, 94);">，作为ACK</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">+1</font>`<font style="color:rgb(52, 73, 94);">报文的序列号</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">(seq=x+1)</font>`<font style="color:rgb(52, 73, 94);">。然后，服务端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">CLOSE-WAIT``(seq=x+1)</font>`<font style="color:rgb(52, 73, 94);">状态，客户端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN-WAIT-2</font>`<font style="color:rgb(52, 73, 94);">状态。 </font>
3. <font style="color:rgb(52, 73, 94);">第三次挥手：服务端也要断开连接时，发送</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN</font>`<font style="color:rgb(52, 73, 94);">报文给客户端，且指定一个序列号</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">(seq=y+1)</font>`<font style="color:rgb(52, 73, 94);">，随后服务端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">LAST-ACK</font>`<font style="color:rgb(52, 73, 94);">状态。</font>
4. <font style="color:rgb(52, 73, 94);">第四次挥手：客户端收到</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN</font>`<font style="color:rgb(52, 73, 94);">报文后，发出</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);">报文进行应答，并把服务端的序列号值</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">+1</font>`<font style="color:rgb(52, 73, 94);">作为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);">报文序列号</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">(seq=y+2)</font>`<font style="color:rgb(52, 73, 94);">。此时客户端进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TIME-WAIT</font>`<font style="color:rgb(52, 73, 94);">状态。服务端在收到客户端的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);">报文后进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">CLOSE</font>`<font style="color:rgb(52, 73, 94);"> 状态。如果客户端等待</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">2MSL</font>`<font style="color:rgb(52, 73, 94);">没有收到回复，才关闭连接。 </font>

<font style="color:rgb(52, 73, 94);">（2）为什么需要四次挥手</font>

`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">是全双工通信，可以双向传输数据。任何一方都可以在数据传送结束后发出连接释放的通知，待对方确认后进入半关闭状态。 当另一方也没有数据再发送的时候，则发出连接释放通知，对方确认后才会完全关闭</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);"> 连接。因此两次握手可以释放一端到另一端的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">连接，完全释放连接一共需要四次握手。</font>

<font style="color:rgb(52, 73, 94);">只有通过四次挥手，才可以确保双方都能接收到对方的最后一个数据段的确认，主动关闭方在发送完最后一个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);">后进入</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TIME-WAIT</font>`<font style="color:rgb(52, 73, 94);"> 状态，这是为了确保被动关闭方接收到最终的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);"> ，如果被动关闭方没有接收到，它可以重发</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">FIN</font>`<font style="color:rgb(52, 73, 94);"> 报文，主动关闭方可以再次发送</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ACK</font>`<font style="color:rgb(52, 73, 94);"> 。</font>

<font style="color:rgb(52, 73, 94);">而如果使用三次挥手，被动关闭方可能在发送最后一个数据段后立即关闭连接，而主动关闭方可能还没有接收到这个数据段的确认。</font>

### <font style="color:rgb(52, 73, 94);">TCP连接如何确保可靠性</font>
<font style="color:rgb(52, 73, 94);">TCP通过序列号、确认应答、超时重传、数据校验、流量控制、拥塞控制等机制，确保了数据传输的可靠性和效率。</font>

1. **<font style="color:rgb(52, 73, 94);">序列号</font>**<font style="color:rgb(52, 73, 94);">：每个TCP段都有一个序列号，确保数据包的顺序正确。</font>
2. **<font style="color:rgb(52, 73, 94);">确认应答</font>**<font style="color:rgb(52, 73, 94);">：接收方发送ACK确认收到的数据，如果发送方在一定时间内没有收到确认，会重新发送数据。</font>
3. **<font style="color:rgb(52, 73, 94);">超时重传</font>**<font style="color:rgb(52, 73, 94);">：发送方设置一个定时器，如果在定时器超时之前没有收到确认，发送方会重传数据。</font>
4. **<font style="color:rgb(52, 73, 94);">数据校验</font>**<font style="color:rgb(52, 73, 94);">：TCP使用校验和来检测数据在传输过程中是否出现错误，如果检测到错误，接收方会丢弃该数据包，并等待重传。</font>
5. **<font style="color:rgb(52, 73, 94);">流量控制</font>**<font style="color:rgb(52, 73, 94);">：TCP通过滑动窗口机制进行流量控制，确保接收方能够处理发送方的数据量。</font>
6. **<font style="color:rgb(52, 73, 94);">拥塞控制</font>**<font style="color:rgb(52, 73, 94);">：TCP通过算法如慢启动、拥塞避免、快重传和快恢复等，来控制数据的发送速率，防止网络拥塞。</font>

### <font style="color:rgb(52, 73, 94);">拥塞控制的实现机制</font>
1. **<font style="color:rgb(52, 73, 94);">慢启动：</font>**<font style="color:rgb(52, 73, 94);"> 开始时以较低的速率发送数据。随着每次成功收到确认的数据，发送方逐渐增加发送窗口的大小，实现指数级的增长，这称为慢启动。</font>
2. **<font style="color:rgb(52, 73, 94);">拥塞避免：</font>**<font style="color:rgb(52, 73, 94);"> 一旦达到一定的阈值（通常是慢启动阈值），TCP发送方就会进入拥塞避免阶段。在拥塞避免阶段，发送方以线性增加的方式增加发送窗口的大小，而不再是指数级的增长。</font>
3. **<font style="color:rgb(52, 73, 94);">快速重传：</font>**<font style="color:rgb(52, 73, 94);"> 如果发送方连续收到相同的确认，它会认为发生了数据包的丢失，并会快速重传未确认的数据包，而不必等待超时。</font>
4. **<font style="color:rgb(52, 73, 94);">快速恢复：</font>**<font style="color:rgb(52, 73, 94);"> 在发生快速重传后，TCP进入快速恢复阶段。在这个阶段，发送方不会回到慢启动阶段，而是将慢启动阈值设置为当前窗口的一半，并将拥塞窗口大小设置为慢启动阈值加上已确认但未被快速重传的数据块的数量。</font>

### <font style="color:rgb(52, 73, 94);">HTTP的Keep-Alive是什么？TCP 的 Keepalive 和 HTTP 的 Keep-Alive 是一个东西吗？</font>
1. `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);"> 的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Keep-Alive</font>`<font style="color:rgb(52, 73, 94);">，是由应用层实现的，称为 HTTP 长连接</font>

<font style="color:rgb(52, 73, 94);">每次请求都要经历这样的过程：建立 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">连接 -> </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);">请求资源 -> 响应资源 -> 释放连接，这就是HTTP短连接，但是这样每次建立连接都只能请求一次资源，所以</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);">的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Keep-Alive</font>`<font style="color:rgb(52, 73, 94);">实现了使用同一个 TCP 连接来发送和接收多个 HTTP 请求/应答，避免了连接建立和释放的开销，就就是 </font>**<font style="color:rgb(52, 73, 94);">HTTP 长连接</font>**<font style="color:rgb(52, 73, 94);">。通过设置HTTP头</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Connection: keep-alive</font>`<font style="color:rgb(52, 73, 94);">来实现。</font>

1. `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);"> 的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Keepalive</font>`<font style="color:rgb(52, 73, 94);">，是由</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">层（内核态）实现的，称为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">保活机制，是一种用于在 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">连接上检测空闲连接状态的机制</font>

<font style="color:rgb(52, 73, 94);">当</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP</font>`<font style="color:rgb(52, 73, 94);">连接建立后，如果一段时间内没有任何数据传输，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TCP Keepalive</font>`<font style="color:rgb(52, 73, 94);">会发送探测包来检查连接是否仍然有效。</font>

### <font style="color:rgb(52, 73, 94);">DNS查询过程</font>
`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">DNS</font>`<font style="color:rgb(52, 73, 94);"> 用来将主机名和域名转换为IP地址, 其查询过程一般通过以下步骤：</font>

1. **<font style="color:rgb(52, 73, 94);">本地DNS缓存检查</font>**<font style="color:rgb(52, 73, 94);">：首先查询本地DNS缓存，如果缓存中有对应的IP地址，则直接返回结果。</font>
2. <font style="color:rgb(52, 73, 94);">如果本地缓存中没有，则会向</font>**<font style="color:rgb(52, 73, 94);">本地的DNS服务器</font>**<font style="color:rgb(52, 73, 94);">（通常由你的互联网服务提供商（ISP）提供， 比如中国移动）发送一个DNS查询请求。</font>
3. <font style="color:rgb(52, 73, 94);">如果本地DNS解析器有该域名的ip地址，就会直接返回，如果没有缓存该域名的解析记录，它会向</font>**<font style="color:rgb(52, 73, 94);">根DNS服务器</font>**<font style="color:rgb(52, 73, 94);">发出查询请求。根DNS服务器并不负责解析域名，但它能告诉本地DNS解析器应该向哪个顶级域（.com/.net/.org）的DNS服务器继续查询。 </font>
4. <font style="color:rgb(52, 73, 94);">本地DNS解析器接着向指定的</font>**<font style="color:rgb(52, 73, 94);">顶级域名DNS服务器</font>**<font style="color:rgb(52, 73, 94);">发出查询请求。顶级域DNS服务器也不负责具体的域名解析，但它能告诉本地DNS解析器应该前往哪个权威DNS服务器查询下一步的信息。 </font>
5. <font style="color:rgb(52, 73, 94);">本地DNS解析器最后向</font>**<font style="color:rgb(52, 73, 94);">权威DNS服务器</font>**<font style="color:rgb(52, 73, 94);">发送查询请求。 权威DNS服务器是负责存储特定域名和IP地址映射的服务器。当权威DNS服务器收到查询请求时，它会查找"example.com"域名对应的IP地址，并将结果返回给本地DNS解析器。 </font>
6. <font style="color:rgb(52, 73, 94);">本地DNS解析器将收到的IP地址返回给浏览器，并且还会将域名解析结果缓存在本地，以便下次访问时更快地响应。</font>
7. **<font style="color:rgb(52, 73, 94);">浏览器发起连接：</font>**<font style="color:rgb(52, 73, 94);"> 本地DNS解析器已经将IP地址返回给您的计算机，您的浏览器可以使用该IP地址与目标服务器建立连接，开始获取网页内容。</font>

<img src="https://cdn.nlark.com/yuque/0/2024/png/1863325/1731395901398-6efd3fc7-8695-48f2-b19d-364ad0f8f2b0.png" width="1079" title="" crop="0,0,1,1" id="u2d42f4a5" class="ne-image">

### <font style="color:rgb(52, 73, 94);">CDN是什么</font>
<font style="color:rgb(52, 73, 94);">CDN是一种分布式网络服务，通过将内容存储在分布式的服务器上，使用户可以从距离较近的服务器获取所需的内容，从而加速互联网上的内容传输。</font>

+ **<font style="color:rgb(52, 73, 94);">就近访问</font>**<font style="color:rgb(52, 73, 94);">：CDN 在全球范围内部署了多个服务器节点，用户的请求会被路由到距离最近的 CDN 节点，提供快速的内容访问。</font>
+ **<font style="color:rgb(52, 73, 94);">内容缓存</font>**<font style="color:rgb(52, 73, 94);">：CDN 节点会缓存静态资源，如图片、样式表、脚本等。当用户请求访问这些资源时，CDN 会首先检查是否已经缓存了该资源。如果有缓存，CDN 节点会直接返回缓存的资源，如果没有缓存所需资源，它会从源服务器（原始服务器）回源获取资源，并将资源缓存到节点中，以便以后的请求。通过缓存内容，减少了对原始服务器的请求，减轻了源站的负载。</font>
+ <font style="color:rgb(52, 73, 94);">可用性：即使某些节点出现问题，用户请求可以被重定向到其他健康的节点。</font>

### <font style="color:rgb(52, 73, 94);">Cookie和Session是什么？有什么区别？</font>
<font style="color:rgb(52, 73, 94);">(1) Cookie和Session是什么？</font>

`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);">和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);">都用于管理用户的状态和身份, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);">通过在客户端记录信息确定用户身份，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);">通过在服务器端记录信息确定用户身份。</font>

1. <font style="color:rgb(52, 73, 94);">Cookie</font>
+ <font style="color:rgb(52, 73, 94);">通常，服务器会将一个或多个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 发送到用户浏览器，然后浏览器将这些 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 存储在本地。</font>
+ <font style="color:rgb(52, 73, 94);">服务器在接收到来自客户端浏览器的请求之后，就能够通过分析存放于请求头的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);">得到客户端特有的信息，从而动态生成与该客户端相对应的内容。 </font>
1. <font style="color:rgb(52, 73, 94);">Session</font>

<font style="color:rgb(52, 73, 94);">客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。这就是</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);">。Session 主要用于维护用户登录状态、存储用户的临时数据和上下文信息等。服务器为每个用户分配一个唯一的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session ID</font>`<font style="color:rgb(52, 73, 94);">，通常存储在</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);">中。</font>

<font style="color:rgb(52, 73, 94);">（2） Cookie和Session的区别？</font>

+ <font style="color:rgb(52, 73, 94);">存储位置：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 数据存储在用户的浏览器中，而 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);"> 数据存储在服务器上。</font>
+ <font style="color:rgb(52, 73, 94);">数据容量：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 存储容量较小，一般为几 KB。</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);"> 存储容量较大，通常没有固定限制，取决于服务器的配置和资源。</font>
+ <font style="color:rgb(52, 73, 94);">安全性：由于 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 存储在用户浏览器中，因此可以被用户读取和篡改。相比之下，Session 数据存储在服务器上，更难被用户访问和修改。</font>
+ <font style="color:rgb(52, 73, 94);">生命周期：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);">可以设置过期时间，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session</font>`<font style="color:rgb(52, 73, 94);"> 依赖于会话的持续时间或用户活动。</font>
+ <font style="color:rgb(52, 73, 94);">传输方式：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 在每次 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HTTP</font>`<font style="color:rgb(52, 73, 94);"> 请求中都会被自动发送到服务器，而 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Session ID</font>`<font style="color:rgb(52, 73, 94);"> 通常通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Cookie</font>`<font style="color:rgb(52, 73, 94);"> 或 URL 参数传递。</font>

### `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);"> 之间的区别。</font>
<font style="color:rgb(52, 73, 94);">它们都是Web存储，用来在浏览器中保存数据，让我们可以在页面刷新后仍然访问这些数据。</font>

1. **<font style="color:rgb(52, 73, 94);">存储范围</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);"> 是持久化的，它保存的数据没有时间限制，即使关闭浏览器窗口，数据依然存在，直到主动删除。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 呢，它是会话级的，数据只在当前会话下有效。也就是说，关闭浏览器窗口或者标签页，数据就会被清除。</font>
2. **<font style="color:rgb(52, 73, 94);">存储容量</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">它们都能存储大约5MB的数据，不过具体容量可能会因浏览器而异。</font>
3. **<font style="color:rgb(52, 73, 94);">适用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果你想保存一些长期需要的数据，比如用户的设置偏好，那就用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - <font style="color:rgb(52, 73, 94);">如果数据只是临时需要，比如在一个会话中的用户输入信息，那就用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);">。</font>
4. **<font style="color:rgb(52, 73, 94);">访问限制</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">由于 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 是会话级的，所以它在不同的标签页或窗口中是独立的。也就是说，同一个网站在不同的标签页打开，它们的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 是互不干扰的。</font>
    - <font style="color:rgb(52, 73, 94);">而 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);"> 在同一个域名下是共享的，所有标签页和窗口都能访问。</font>

<font style="color:rgb(52, 73, 94);">总的来说，选择 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);"> 还是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 就看你要存的数据是长期还是临时的，以及是否需要跨会话共享了。</font>

### <font style="color:rgb(52, 73, 94);">什么是XSS攻击，如何防范</font>
**<font style="color:rgb(52, 73, 94);">XSS攻击</font>**<font style="color:rgb(52, 73, 94);">，全称是跨站脚本攻击（Cross-Site Scripting），它是一种注入攻击，攻击者会在网页中注入恶意脚本，然后其他用户在访问这个网页时，恶意脚本就会在用户的浏览器上执行，可能会盗取用户数据，或者冒充用户进行恶意操作。</font>

<font style="color:rgb(52, 73, 94);">要防范XSS攻击，主要可以从下面几个方面入手：</font>

1. **<font style="color:rgb(52, 73, 94);">数据清洗</font>**<font style="color:rgb(52, 73, 94);">：对用户输入进行过滤，特别是一些特殊字符，比如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">&</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">"</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">'</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">/</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">=</font>`<font style="color:rgb(52, 73, 94);">等等，确保这些字符被正确转义。</font>
2. **<font style="color:rgb(52, 73, 94);">内容安全策略（CSP）</font>**<font style="color:rgb(52, 73, 94);">：设置HTTP头部的Content-Security-Policy，它可以限制网页能加载或执行的资源，从而减少XSS攻击的风险。</font>
3. **<font style="color:rgb(52, 73, 94);">使用安全的API</font>**<font style="color:rgb(52, 73, 94);">：比如在JavaScript中，使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">textContent</font>`<font style="color:rgb(52, 73, 94);">而不是</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">innerHTML</font>`<font style="color:rgb(52, 73, 94);">来设置元素内容，因为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">textContent</font>`<font style="color:rgb(52, 73, 94);">不会解析HTML标签。</font>
4. **<font style="color:rgb(52, 73, 94);">编码输出</font>**<font style="color:rgb(52, 73, 94);">：在输出内容到页面之前，对可能的危险字符进行编码，比如将</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><</font>`<font style="color:rgb(52, 73, 94);">转换为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><</font>`<font style="color:rgb(52, 73, 94);">。</font>
5. **<font style="color:rgb(52, 73, 94);">使用HTTP Only Cookies</font>**<font style="color:rgb(52, 73, 94);">：这样可以通过设置cookie的httpOnly属性，使得JavaScript脚本无法访问cookie，减少了XSS攻击的风险。</font>
6. **<font style="color:rgb(52, 73, 94);">输入验证</font>**<font style="color:rgb(52, 73, 94);">：对所有从外部获取的数据进行验证，确保它们符合预期的格式。</font>
7. **<font style="color:rgb(52, 73, 94);">定期更新和打补丁</font>**<font style="color:rgb(52, 73, 94);">：保持Web应用的框架和库是最新的，以利用最新的安全修复。</font>

<font style="color:rgb(52, 73, 94);">总的来说，XSS攻击主要是通过恶意脚本在用户浏览器上执行造成的，所以关键是要对用户输入进行严格的过滤和转义，同时采取一些额外的安全措施来预防攻击。</font>

### <font style="color:rgb(52, 73, 94);">什么是 CSRF 攻击，如何防范？</font>
**<font style="color:rgb(52, 73, 94);">CSRF</font>**<font style="color:rgb(52, 73, 94);">，也就是跨站请求伪造（Cross-Site Request Forgery），这种攻击的意思是攻击者诱导用户去触发一个他们原本无意去执行的操作。比如，用户在没有意识到的情况下，通过点击链接或者提交表单，对一个网站执行非预期的恶意请求。</font>

<font style="color:rgb(52, 73, 94);">攻击者利用的是网站对用户浏览器的信任。因为用户已经登录了目标网站，所以浏览器会有有效的会话cookie。</font>

<font style="color:rgb(52, 73, 94);">要防范 CSRF 攻击，可以这么做：</font>

1. **<font style="color:rgb(52, 73, 94);">使用验证码</font>**<font style="color:rgb(52, 73, 94);">：在敏感操作中加入验证码，确保操作是用户主动执行的。</font>
2. **<font style="color:rgb(52, 73, 94);">同源策略</font>**<font style="color:rgb(52, 73, 94);">：确保只有来自相同源的请求才能被接受。</font>
3. **<font style="color:rgb(52, 73, 94);">Referer 检查</font>**<font style="color:rgb(52, 73, 94);">：服务器检查 HTTP 请求的 Referer 头部，以确保请求是从同一个网站发起的。</font>
4. **<font style="color:rgb(52, 73, 94);">令牌验证</font>**<font style="color:rgb(52, 73, 94);">：在表单中加入一个隐藏的令牌字段，这个令牌是用户与服务器之间共享的秘密，每次请求都会变化。</font>
5. **<font style="color:rgb(52, 73, 94);">使用安全首部</font>**<font style="color:rgb(52, 73, 94);">：设置一些 HTTP 首部，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">SameSite</font>`<font style="color:rgb(52, 73, 94);"> 属性，它可以阻止浏览器在跨站请求中发送 cookie。</font>
6. **<font style="color:rgb(52, 73, 94);">内容安全策略</font>**<font style="color:rgb(52, 73, 94);">：通过设置内容安全策略（CSP），限制可以执行的资源，减少攻击面。</font>
7. **<font style="color:rgb(52, 73, 94);">状态检查</font>**<font style="color:rgb(52, 73, 94);">：对敏感操作增加额外的状态检查，比如二次确认。</font>
8. **<font style="color:rgb(52, 73, 94);">使用 POST 而非 GET</font>**<font style="color:rgb(52, 73, 94);">：因为 GET 请求容易被伪造，敏感操作应该使用 POST 请求。</font>

<font style="color:rgb(52, 73, 94);">总的来说，CSRF 攻击就是攻击者利用用户的登录状态，让浏览器替他们发送恶意请求。防范 CSRF 攻击的关键是验证请求的来源，确保操作是用户自愿发起的。</font>

### <font style="color:rgb(52, 73, 94);">什么是回流和重绘</font>
<font style="color:rgb(52, 73, 94);">在浏览器中，当我们对 DOM 进行操作时，可能会引起两个过程：回流（Reflow）和重绘（Repaint）。</font>

**<font style="color:rgb(52, 73, 94);">回流</font>**<font style="color:rgb(52, 73, 94);">，也称为重排，是指页面中的元素位置、尺寸发生变化，浏览器需要重新计算元素的几何属性，然后重新排列元素。回流是一个相对昂贵的操作，因为它需要浏览器做大量的计算。</font>

**<font style="color:rgb(52, 73, 94);">重绘</font>**<font style="color:rgb(52, 73, 94);">，则是指当元素外观改变，比如颜色、阴影、边框样式等，但布局没有变化时，浏览器需要重新绘制元素。重绘通常比回流要快，因为它不涉及布局的计算。</font>

<font style="color:rgb(52, 73, 94);">简单来说，回流一定会引发重绘，但重绘不一定会引发回流。</font>

<font style="color:rgb(52, 73, 94);">那么，如何减少回流和重绘呢？</font>

1. **<font style="color:rgb(52, 73, 94);">避免频繁操作DOM</font>**<font style="color:rgb(52, 73, 94);">：一次性修改多个元素的属性，而不是一个一个地改。</font>
2. **<font style="color:rgb(52, 73, 94);">使用 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">transform</font>**`**<font style="color:rgb(52, 73, 94);"> 和 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">opacity</font>**`**<font style="color:rgb(52, 73, 94);"> 进行动画</font>**<font style="color:rgb(52, 73, 94);">：这些属性的动画只会触发重绘，不会引发回流。</font>
3. **<font style="color:rgb(52, 73, 94);">使用 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">will-change</font>**`**<font style="color:rgb(52, 73, 94);"> 属性</font>**<font style="color:rgb(52, 73, 94);">：告诉浏览器哪些元素需要被优化。</font>
4. **<font style="color:rgb(52, 73, 94);">使用文档片段（Document Fragment）</font>**<font style="color:rgb(52, 73, 94);">：在操作大量 DOM 元素时，可以先在一个容器内操作，然后一次性添加到文档中。</font>
5. **<font style="color:rgb(52, 73, 94);">避免使用 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">table</font>**`**<font style="color:rgb(52, 73, 94);"> 布局</font>**<font style="color:rgb(52, 73, 94);">：因为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">table</font>`<font style="color:rgb(52, 73, 94);"> 的一个小小变化就可能引起整个表格的回流。</font>
6. **<font style="color:rgb(52, 73, 94);">合理使用 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>**`<font style="color:rgb(52, 73, 94);">：隐藏元素时，使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);"> 而不是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);">，因为后者只影响视觉但不会影响布局。</font>

### <font style="color:rgb(52, 73, 94);">什么是浏览器的同源策略</font>
**<font style="color:rgb(52, 73, 94);">啥叫同源呢？</font>**

<font style="color:rgb(52, 73, 94);">如果两个页面的协议、域名和端口都相同，我们就说它们是同源的。比如，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">http://example.com/app1</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">http://example.com/app2</font>`<font style="color:rgb(52, 73, 94);"> 就是同源的。</font>

**<font style="color:rgb(52, 73, 94);">为啥要有同源策略？</font>**

<font style="color:rgb(52, 73, 94);">主要是为了防止恶意文档窃取数据。如果没有这个策略，一个恶意网站就可以读取另一个网站的敏感数据，比如登录状态、个人信息等。</font>

**<font style="color:rgb(52, 73, 94);">同源策略限制了啥？</font>**

<font style="color:rgb(52, 73, 94);">它主要限制了以下行为：</font>

1. **<font style="color:rgb(52, 73, 94);">脚本访问</font>**<font style="color:rgb(52, 73, 94);">：不同源的脚本不能读取或修改对方文档的DOM。</font>
2. **<font style="color:rgb(52, 73, 94);">AJAX 请求</font>**<font style="color:rgb(52, 73, 94);">：不能向不同源的服务器发送 AJAX 请求。</font>
3. **<font style="color:rgb(52, 73, 94);">Cookie/Session</font>**<font style="color:rgb(52, 73, 94);">：不能获取不同源的Cookie或Session信息。</font>

**<font style="color:rgb(52, 73, 94);">那怎么绕过同源策略呢？</font>**

<font style="color:rgb(52, 73, 94);">虽然同源策略限制了很多操作，但我们还是有办法进行不同源之间的通信，比如：</font>

1. **<font style="color:rgb(52, 73, 94);">CORS</font>**<font style="color:rgb(52, 73, 94);">：跨源资源共享（Cross-Origin Resource Sharing），服务器可以通过设置特定的HTTP头部来允许其他源的请求。</font>
2. **<font style="color:rgb(52, 73, 94);">JSONP</font>**<font style="color:rgb(52, 73, 94);">：通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><script></font>`<font style="color:rgb(52, 73, 94);">标签获取不同源的JSON数据。</font>
3. **<font style="color:rgb(52, 73, 94);">WebSockets</font>**<font style="color:rgb(52, 73, 94);">：WebSockets 连接可以建立在不同源之间。</font>
4. **<font style="color:rgb(52, 73, 94);">代理服务器</font>**<font style="color:rgb(52, 73, 94);">：通过同源的服务器作为中介，实现不同源之间的通信。</font>

### <font style="color:rgb(52, 73, 94);">如何解决跨域问题</font>
<font style="color:rgb(52, 73, 94);">跨域问题主要是因为浏览器的同源策略导致的，它阻止一个域的脚本对另一个域的资源进行操作。但是，我们有几个方法可以解决这个问题：</font>

1. **<font style="color:rgb(52, 73, 94);">CORS</font>**<font style="color:rgb(52, 73, 94);">：跨源资源共享（Cross-Origin Resource Sharing）是最常用的方法。服务器端设置一些特殊的HTTP头部，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Access-Control-Allow-Origin</font>`<font style="color:rgb(52, 73, 94);">，允许来自不同源的请求。</font>
2. **<font style="color:rgb(52, 73, 94);">JSONP</font>**<font style="color:rgb(52, 73, 94);">：这种方法是通过动态添加 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><script></font>`<font style="color:rgb(52, 73, 94);"> 标签来绕过同源策略。服务器响应不是返回 JSON，而是返回一段包含回调函数的脚本。这种方法只支持GET请求。</font>
3. **<font style="color:rgb(52, 73, 94);">代理服务器</font>**<font style="color:rgb(52, 73, 94);">：在前端和后端之间加一个代理，前端请求同源的代理服务器，然后由代理服务器去请求实际的后端服务，再将结果返回给前端。</font>
4. **<font style="color:rgb(52, 73, 94);">WebSockets</font>**<font style="color:rgb(52, 73, 94);">：WebSockets 协议不遵循同源策略，因此可以通过它来实现跨域通信。</font>
5. **<font style="color:rgb(52, 73, 94);">PostMessage</font>**<font style="color:rgb(52, 73, 94);">：HTML5引入的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">postMessage</font>`<font style="color:rgb(52, 73, 94);"> 方法，允许来自不同源的页面间进行数据传递。</font>
6. **<font style="color:rgb(52, 73, 94);">Document.domain</font>**<font style="color:rgb(52, 73, 94);">：这种方法主要用于有相同主域但不同子域的情况，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sub1.example.com</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sub2.example.com</font>`<font style="color:rgb(52, 73, 94);">，可以通过设置 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">document.domain</font>`<font style="color:rgb(52, 73, 94);"> 为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">example.com</font>`<font style="color:rgb(52, 73, 94);"> 来实现相互访问。</font>

### <font style="color:rgb(52, 73, 94);">浏览器页面渲染过程</font>
<font style="color:rgb(52, 73, 94);">当浏览器开始加载一个网页，它会经历几个主要步骤来渲染页面：</font>

1. **<font style="color:rgb(52, 73, 94);">解析 HTML</font>**<font style="color:rgb(52, 73, 94);">：浏览器首先解析 HTML 文档，构建 DOM 树。这个过程中，它会碰到链接的脚本、样式表和图片，这些可能会被并行加载，以提高性能。</font>
2. **<font style="color:rgb(52, 73, 94);">构建 CSSOM 树</font>**<font style="color:rgb(52, 73, 94);">：浏览器解析 CSS（包括外部样式表和样式元素），构建 CSSOM（CSS 对象模型）树。这个树包含了所有CSS规则。</font>
3. **<font style="color:rgb(52, 73, 94);">渲染树的构建</font>**<font style="color:rgb(52, 73, 94);">：DOM 树和 CSSOM 树结合起来，形成渲染树。渲染树包含了页面上每个元素的显示信息。</font>
4. **<font style="color:rgb(52, 73, 94);">布局（回流）</font>**<font style="color:rgb(52, 73, 94);">：浏览器要计算出渲染树上每个元素的几何信息，比如位置和大小。这个过程也称为回流。</font>
5. **<font style="color:rgb(52, 73, 94);">绘制（重绘）</font>**<font style="color:rgb(52, 73, 94);">：最后，浏览器使用渲染树来绘制页面上的内容，这个过程称为重绘。</font>
6. **<font style="color:rgb(52, 73, 94);">合成</font>**<font style="color:rgb(52, 73, 94);">：浏览器把所有页面的部分合成我们最终看到的像素。</font>

**<font style="color:rgb(52, 73, 94);">性能优化</font>**<font style="color:rgb(52, 73, 94);">：为了加快渲染速度，我们可以做一些事情，比如减少重绘和回流、延迟加载图片、使用CSS硬件加速等。</font>

### <font style="color:rgb(52, 73, 94);">srcipt中defer和async的区别？</font>
<font style="color:rgb(52, 73, 94);">当我们在 HTML 文件里用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><script></font>`<font style="color:rgb(52, 73, 94);"> 标签引入 JavaScript 文件时，这两个属性决定了脚本的加载和执行行为：</font>

1. **<font style="color:rgb(52, 73, 94);">async</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 表示异步加载脚本，脚本下载时不会阻塞页面渲染。</font>
    - <font style="color:rgb(52, 73, 94);">下载完成后，立即执行脚本，并且可能会阻塞页面渲染。</font>
    - <font style="color:rgb(52, 73, 94);">适用于那些不依赖于其他脚本的脚本文件。</font>
2. **<font style="color:rgb(52, 73, 94);">defer</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">defer</font>`<font style="color:rgb(52, 73, 94);"> 表示延迟执行脚本，脚本下载时也不会阻塞页面渲染。</font>
    - <font style="color:rgb(52, 73, 94);">但是，脚本的执行被延迟到页面渲染完成之后，按照脚本在文档中出现的顺序执行。</font>
    - <font style="color:rgb(52, 73, 94);">适用于脚本之间有依赖关系，或者脚本操作 DOM 的情况。</font>

<font style="color:rgb(52, 73, 94);">总结一下，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">defer</font>`<font style="color:rgb(52, 73, 94);"> 都是用来异步加载 JavaScript 文件的，区别在于脚本的执行时机：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 是“下载完就执行”。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">defer</font>`<font style="color:rgb(52, 73, 94);"> 是“页面渲染完再执行”。</font>

<font style="color:rgb(52, 73, 94);">所以，如果脚本不依赖于页面的其他部分，比如一些分析脚本，用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 比较合适。 如果脚本需要在文档完全加载后运行，比如初始化脚本，用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">defer</font>`<font style="color:rgb(52, 73, 94);"> 更合适。</font>

### <font style="color:rgb(52, 73, 94);">V8引擎的垃圾回收机制如何工作</font>
<font style="color:rgb(52, 73, 94);">V8 引擎使用自动垃圾回收来管理内存，主要是通过两种类型：分代回收和标记-清除。</font>

1. **<font style="color:rgb(52, 73, 94);">分代回收</font>**<font style="color:rgb(52, 73, 94);">：V8 将内存分为新生代和老生代两部分。新生代中存放的是生存时间短的对象，老生代中存放的是生存时间长的对象。V8 引擎会频繁地对新生代进行垃圾回收，而老生代的回收频率则相对较低。</font>
2. **<font style="color:rgb(52, 73, 94);">标记-清除</font>**<font style="color:rgb(52, 73, 94);">：这是 V8 垃圾回收的主要算法。</font>
    - **<font style="color:rgb(52, 73, 94);">标记阶段</font>**<font style="color:rgb(52, 73, 94);">：V8 引擎会从一组根对象开始，标记所有从根对象可达的对象。这些被标记的对象就是正在使用中，不应该被回收的。</font>
    - **<font style="color:rgb(52, 73, 94);">清除阶段</font>**<font style="color:rgb(52, 73, 94);">：接着，V8 引擎会清除那些未被标记的对象，也就是那些不再使用的对象。</font>

<font style="color:rgb(52, 73, 94);">V8 还使用了增量标记的策略来减少垃圾回收的停顿时间。它会将标记过程分成多个小步骤，分批次进行，这样就不会造成浏览器卡顿。</font>

<font style="color:rgb(52, 73, 94);">另外，V8 还使用了一种叫做“扫雪机”（Scavenger）算法来优化新生代的垃圾回收。这个算法会将存活的对象从新生代复制到老生代，从而清理新生代的内存。</font>

### <font style="color:rgb(52, 73, 94);">进程和线程之间的区别</font>
<font style="color:rgb(52, 73, 94);">首先，它们都是操作系统用来执行任务的基本单位，但有一些关键的不同点：</font>

1. **<font style="color:rgb(52, 73, 94);">资源开销</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">进程是独立的运行环境，每个进程都有自己独立的内存空间。创建进程时，操作系统要为它分配资源，所以进程的开销比较大。</font>
    - <font style="color:rgb(52, 73, 94);">线程则共享进程的内存空间，创建线程的开销相对较小。</font>
2. **<font style="color:rgb(52, 73, 94);">执行独立性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">进程之间相互独立，一个进程崩溃不会影响其他进程。</font>
    - <font style="color:rgb(52, 73, 94);">线程则属于进程的一部分，同一进程下的线程可以共享数据。一个线程崩溃可能导致整个进程崩溃。</font>
3. **<font style="color:rgb(52, 73, 94);">上下文切换</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">进程的上下文切换比线程要慢，因为涉及到整个内存空间的切换。</font>
    - <font style="color:rgb(52, 73, 94);">线程的上下文切换快，因为它们共享相同的内存空间。</font>
4. **<font style="color:rgb(52, 73, 94);">通信方式</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">进程间通信（IPC）比较复杂，需要通过管道、信号、共享内存等方式。</font>
    - <font style="color:rgb(52, 73, 94);">线程间通信直接，因为它们共享相同的内存空间。</font>
5. **<font style="color:rgb(52, 73, 94);">操作系统调度</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">进程是操作系统进行资源分配和调度的基本单位。</font>
    - <font style="color:rgb(52, 73, 94);">线程则由进程创建和调度。</font>

<font style="color:rgb(52, 73, 94);">简单来说，进程像是独立的执行单元，拥有自己的独立空间；线程则像是进程内部的执行单元，共享进程的资源。线程更适合执行多个任务，而进程适合隔离运行的程序。</font>

### <font style="color:rgb(52, 73, 94);">Js是单线程的还是多线程的</font>
<font style="color:rgb(52, 73, 94);">JavaScript </font>**<font style="color:rgb(52, 73, 94);">运行在单线程</font>**<font style="color:rgb(52, 73, 94);">环境中，这是由它的设计决定的。在浏览器或Node.js中，JavaScript代码在一个线程上执行，也就是说，一次只能执行一个操作。</font>

<font style="color:rgb(52, 73, 94);">但是，JavaScript通过</font>**<font style="color:rgb(52, 73, 94);">异步编程</font>**<font style="color:rgb(52, 73, 94);">和</font>**<font style="color:rgb(52, 73, 94);">事件循环</font>**<font style="color:rgb(52, 73, 94);">机制，可以实现非阻塞的并发操作。虽然代码本身是按顺序执行的，但可以通过回调函数、Promises 或 async/await 来处理异步任务，如网络请求或文件读写。</font>

<font style="color:rgb(52, 73, 94);">此外，JavaScript </font>**<font style="color:rgb(52, 73, 94);">可以利用Web Workers</font>**<font style="color:rgb(52, 73, 94);">来实现多线程。Web Workers允许你在后台线程上运行代码，这样可以执行一些复杂的计算任务而不阻塞主线程。</font>

<font style="color:rgb(52, 73, 94);">所以，虽然JavaScript在主线程上是单线程的，但它有机制来处理并发，并且可以通过Web Workers实现多线程。</font>

### <font style="color:rgb(52, 73, 94);">浏览器渲染进程的线程有哪些</font>
<font style="color:rgb(52, 73, 94);">浏览器是一个多进程程序，渲染进程是其中之一，它负责页面的渲染工作。渲染进程中有几个关键的线程：</font>

1. **<font style="color:rgb(52, 73, 94);">主线程（UI线程）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">负责解析 HTML、CSS，构建 DOM 树和 CSSOM 树，然后合并成渲染树。</font>
    - <font style="color:rgb(52, 73, 94);">负责页面的布局（回流）和绘制（重绘）。</font>
    - <font style="color:rgb(52, 73, 94);">处理用户输入和页面交互。</font>
2. **<font style="color:rgb(52, 73, 94);">工作线程（Worker线程）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">执行 JavaScript 脚本，避免阻塞主线程，提高页面的响应性。</font>
    - <font style="color:rgb(52, 73, 94);">可以是浏览器专门为复杂计算创建的线程，比如用于Web Workers。</font>
3. **<font style="color:rgb(52, 73, 94);">合成线程（Compositor线程）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">负责图层的合成，将不同的页面图层合并成最终的页面供显示。</font>
    - <font style="color:rgb(52, 73, 94);">处理页面的滚动、放大等操作。</font>
4. **<font style="color:rgb(52, 73, 94);">网络线程</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">处理页面的网络请求，如 HTTP 请求的发送和接收。</font>
5. **<font style="color:rgb(52, 73, 94);">定时器触发线程</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">负责定时器（如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setTimeout</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setInterval</font>`<font style="color:rgb(52, 73, 94);">）的计时和触发。</font>
6. **<font style="color:rgb(52, 73, 94);">文件操作线程</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">异步处理文件的读写操作。</font>

<font style="color:rgb(52, 73, 94);">这些线程协同工作，共同完成页面的加载、渲染和交互处理。主线程是渲染进程中最核心的线程，其他线程都是为了减轻主线程的负担而存在的。</font>

### <font style="color:rgb(52, 73, 94);">谈一谈你对HTML语义化标签的理解</font>
<font style="color:rgb(52, 73, 94);">语义化标签，说白了，就是用具有语义含义的 HTML 标签来组织和结构化内容，让代码更易懂，也更利于搜索引擎优化。</font>

1. **<font style="color:rgb(52, 73, 94);">可读性</font>**<font style="color:rgb(52, 73, 94);">：语义化的标签让 HTML 更容易读懂。比如，用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><article></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><section></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><header></font>`<font style="color:rgb(52, 73, 94);"> 等标签代替传统的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><div></font>`<font style="color:rgb(52, 73, 94);">，一眼就能看出页面的结构。</font>
2. **<font style="color:rgb(52, 73, 94);">无障碍访问</font>**<font style="color:rgb(52, 73, 94);">：对于视力障碍者或其它残疾用户，屏幕阅读器可以通过语义化的标签理解网页的结构和内容，提升他们的访问体验。</font>
3. **<font style="color:rgb(52, 73, 94);">搜索引擎优化</font>**<font style="color:rgb(52, 73, 94);">：搜索引擎爬虫也依赖于标签来理解网页的结构和内容，合适的语义化标签有助于提升网页在搜索引擎中的排名。</font>
4. **<font style="color:rgb(52, 73, 94);">维护成本</font>**<font style="color:rgb(52, 73, 94);">：当项目很大或者由多人开发时，语义化的标签可以减少沟通成本，提高开发效率。</font>
5. **<font style="color:rgb(52, 73, 94);">样式和行为的分离</font>**<font style="color:rgb(52, 73, 94);">：使用语义化标签有助于将内容的结构与样式和行为分离，符合关注点分离原则。</font>

<font style="color:rgb(52, 73, 94);">举个例子，以前的布局可能大量依赖于 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><div></font>`<font style="color:rgb(52, 73, 94);"> 标签和 CSS，现在我们可以使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><nav></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><footer></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><aside></font>`<font style="color:rgb(52, 73, 94);"> 等更具描述性的标签。</font>

### <font style="color:rgb(52, 73, 94);">html5新特性有哪些</font>
1. **<font style="color:rgb(52, 73, 94);">新的语义化标签</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><header></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><footer></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><article></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><section></font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><aside></font>`<font style="color:rgb(52, 73, 94);"> 等，这让页面结构更清晰。</font>
2. **<font style="color:rgb(52, 73, 94);">表单控件</font>**<font style="color:rgb(52, 73, 94);">：增加了很多新的表单控件，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">email</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">url</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">number</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">date</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">time</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">range</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">search</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">color</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. **<font style="color:rgb(52, 73, 94);">图形和多媒体</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">引入了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><canvas></font>`<font style="color:rgb(52, 73, 94);"> 标签，可以用来绘制图形。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><audio></font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><video></font>`<font style="color:rgb(52, 73, 94);"> 标签，让音频和视频的嵌入变得更简单。</font>
4. **<font style="color:rgb(52, 73, 94);">Web存储</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">localStorage</font>`<font style="color:rgb(52, 73, 94);"> 提供了一种在用户浏览器中存储大量数据的方式。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">sessionStorage</font>`<font style="color:rgb(52, 73, 94);"> 则提供了在同一窗口（或标签页）中跟踪会话数据的方式。</font>
5. **<font style="color:rgb(52, 73, 94);">离线应用</font>**<font style="color:rgb(52, 73, 94);">：通过应用程序缓存（Application Cache），可以让应用在没有网络的情况下也能运行。</font>
6. **<font style="color:rgb(52, 73, 94);">Web Workers</font>**<font style="color:rgb(52, 73, 94);">：允许 JavaScript 脚本在后台线程中运行，不阻塞用户界面。</font>
7. **<font style="color:rgb(52, 73, 94);">地理定位</font>**<font style="color:rgb(52, 73, 94);">：通过 Geolocation API，可以获取用户的地理位置信息。</font>
8. **<font style="color:rgb(52, 73, 94);">跨文档通信</font>**<font style="color:rgb(52, 73, 94);">（Cross-document messaging）：允许来自不同源的页面间进行数据通信。</font>
9. **<font style="color:rgb(52, 73, 94);">服务器发送事件</font>**<font style="color:rgb(52, 73, 94);">（Server-Sent Events, SSE）：允许服务器向客户端推送实时消息。</font>
10. **<font style="color:rgb(52, 73, 94);">Web Components</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">自定义元素（Custom Elements）</font>
    - <font style="color:rgb(52, 73, 94);">影子 DOM（Shadow DOM）</font>
    - <font style="color:rgb(52, 73, 94);">HTML 模板（HTML Templates）</font>

<font style="color:rgb(52, 73, 94);">简单来说，HTML5 带来了很多新特性，从表单控件到图形多媒体，再到存储和通信，这些都大大增强了 Web 应用的功能和用户体验。</font>

### <font style="color:rgb(52, 73, 94);">行内元素，块级元素的区别？</font>
1. **<font style="color:rgb(52, 73, 94);">块级元素</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">像 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><div></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><section></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><header></font>`<font style="color:rgb(52, 73, 94);"> 这些元素，默认是块级元素。</font>
    - <font style="color:rgb(52, 73, 94);">块级元素通常会以"块"的形式显示，即它会在页面上占据一整行，上下会有换行。</font>
    - <font style="color:rgb(52, 73, 94);">它们的高度和宽度可以通过 CSS 控制。</font>
    - <font style="color:rgb(52, 73, 94);">块级元素内可以包含其他块级元素和行内元素。</font>
2. **<font style="color:rgb(52, 73, 94);">行内元素</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><span></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><a></font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><img></font>`<font style="color:rgb(52, 73, 94);"> 这些元素，默认是行内元素。</font>
    - <font style="color:rgb(52, 73, 94);">行内元素在页面上不会以块的形式显示，它们不会独占一行，多个行内元素会排成一行，直到填满整行。</font>
    - <font style="color:rgb(52, 73, 94);">行内元素的宽度和高度通常是由内容决定的，不过也可以用 CSS 控制。</font>
    - <font style="color:rgb(52, 73, 94);">行内元素内通常包含文本或其他行内元素。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">布局</font>**<font style="color:rgb(52, 73, 94);">：块级元素会影响布局的流，而行内元素不会。</font>
+ **<font style="color:rgb(52, 73, 94);">宽度和高度</font>**<font style="color:rgb(52, 73, 94);">：块级元素的宽度默认填满父元素，而行内元素的宽度默认是内容的宽度。</font>
+ **<font style="color:rgb(52, 73, 94);">换行</font>**<font style="color:rgb(52, 73, 94);">：块级元素前后会换行，行内元素不会。</font>

<font style="color:rgb(52, 73, 94);">举个例子，如果你在页面上放一个 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><div></font>`<font style="color:rgb(52, 73, 94);">（块级元素），它会独占一行。但如果你放一个 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><span></font>`<font style="color:rgb(52, 73, 94);">（行内元素），它就会和周围的内容排在同一行。</font>

### <font style="color:rgb(52, 73, 94);">css选择器有哪些</font>
1. **<font style="color:rgb(52, 73, 94);">通用选择器</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">*</font>`<font style="color:rgb(52, 73, 94);">，选择所有元素。</font>
2. **<font style="color:rgb(52, 73, 94);">类型选择器</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">div</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">p</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">h1</font>`<font style="color:rgb(52, 73, 94);">，按照元素类型来选择。</font>
3. **<font style="color:rgb(52, 73, 94);">类选择器</font>**<font style="color:rgb(52, 73, 94);">：用点号开头，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.my-class</font>`<font style="color:rgb(52, 73, 94);">，通过 class 属性选择元素。</font>
4. **<font style="color:rgb(52, 73, 94);">ID选择器</font>**<font style="color:rgb(52, 73, 94);">：用井号开头，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">#my-id</font>`<font style="color:rgb(52, 73, 94);">，通过 id 属性选择页面上唯一的元素。</font>
5. **<font style="color:rgb(52, 73, 94);">属性选择器</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">[type="text"]</font>`<font style="color:rgb(52, 73, 94);">，根据元素的属性选择。</font>
6. **<font style="color:rgb(52, 73, 94);">伪类选择器</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:hover</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:focus</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:nth-child(2)</font>`<font style="color:rgb(52, 73, 94);">，为页面上的特定状态选择元素。</font>
7. **<font style="color:rgb(52, 73, 94);">伪元素选择器</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">::before</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">::after</font>`<font style="color:rgb(52, 73, 94);">，允许你在元素的内容前后添加特殊的内容。</font>
8. **<font style="color:rgb(52, 73, 94);">关系选择器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">子选择器：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">></font>`<font style="color:rgb(52, 73, 94);">，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ul > li</font>`<font style="color:rgb(52, 73, 94);">，选择 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ul</font>`<font style="color:rgb(52, 73, 94);"> 元素的子 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">li</font>`<font style="color:rgb(52, 73, 94);"> 元素。</font>
    - <font style="color:rgb(52, 73, 94);">相邻兄弟选择器：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">+</font>`<font style="color:rgb(52, 73, 94);">，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">h1 + p</font>`<font style="color:rgb(52, 73, 94);">，选择紧跟在 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">h1</font>`<font style="color:rgb(52, 73, 94);"> 元素后的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">p</font>`<font style="color:rgb(52, 73, 94);"> 元素。</font>
    - <font style="color:rgb(52, 73, 94);">通用兄弟选择器：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">~</font>`<font style="color:rgb(52, 73, 94);">，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">h1 ~ p</font>`<font style="color:rgb(52, 73, 94);">，选择 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">h1</font>`<font style="color:rgb(52, 73, 94);"> 元素后所有的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">p</font>`<font style="color:rgb(52, 73, 94);"> 元素。</font>
9. **<font style="color:rgb(52, 73, 94);">组合器</font>**<font style="color:rgb(52, 73, 94);">：你可以组合使用不同的选择器来达到更精确的选择，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">div.my-class</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">input[type="text"]:focus</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">css选择器权重</font>
1. **<font style="color:rgb(52, 73, 94);">内联样式</font>**<font style="color:rgb(52, 73, 94);">：权重最高，直接在元素的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">style</font>`<font style="color:rgb(52, 73, 94);"> 属性中写的样式，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><div style="color: red;"></font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">ID 选择器</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">#my-id</font>`<font style="color:rgb(52, 73, 94);">，权重次之，值为 100。</font>
3. **<font style="color:rgb(52, 73, 94);">类选择器、属性选择器和伪类</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.my-class</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">[type="text"]</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:hover</font>`<font style="color:rgb(52, 73, 94);">，权重为 10。</font>
4. **<font style="color:rgb(52, 73, 94);">类型选择器和伪元素</font>**<font style="color:rgb(52, 73, 94);">：比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">div</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">::before</font>`<font style="color:rgb(52, 73, 94);">，权重为 1。</font>
5. **<font style="color:rgb(52, 73, 94);">继承样式</font>**<font style="color:rgb(52, 73, 94);">：没有权重。</font>
6. **<font style="color:rgb(52, 73, 94);">通配选择器、否定伪类和关系选择器</font>**<font style="color:rgb(52, 73, 94);">：没有权重，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">*</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:not()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">></font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">css3新增了哪些特性？</font>
1. **<font style="color:rgb(52, 73, 94);">选择器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">增加了更多的选择器，比如属性选择器、结构伪类（如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:nth-child</font>`<font style="color:rgb(52, 73, 94);">）、否定伪类（如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">:not</font>`<font style="color:rgb(52, 73, 94);">）。</font>
2. **<font style="color:rgb(52, 73, 94);">框盒模型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">对框盒模型进行了扩展，包括对 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">box-sizing</font>`<font style="color:rgb(52, 73, 94);"> 属性的支持，可以更容易地控制元素的宽度和高度。</font>
3. **<font style="color:rgb(52, 73, 94);">背景和边框</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">多背景图片、边框颜色和样式的单独控制、圆角边框（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">border-radius</font>`<font style="color:rgb(52, 73, 94);">）、阴影（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">box-shadow</font>`<font style="color:rgb(52, 73, 94);">）。</font>
4. **<font style="color:rgb(52, 73, 94);">2D/3D 转换</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">可以对元素进行旋转、缩放、移动和倾斜（使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">transform</font>`<font style="color:rgb(52, 73, 94);"> 属性）。</font>
5. **<font style="color:rgb(52, 73, 94);">动画</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">transition</font>`<font style="color:rgb(52, 73, 94);"> 用于平滑地过渡属性值的变化，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">animation</font>`<font style="color:rgb(52, 73, 94);"> 允许更复杂的动画序列。</font>
6. **<font style="color:rgb(52, 73, 94);">渐变</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">线性渐变（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">linear-gradient</font>`<font style="color:rgb(52, 73, 94);">）和径向渐变（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">radial-gradient</font>`<font style="color:rgb(52, 73, 94);">）。</font>
7. **<font style="color:rgb(52, 73, 94);">文字效果</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">文字阴影（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">text-shadow</font>`<font style="color:rgb(52, 73, 94);">）、文本换行（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">word-wrap</font>`<font style="color:rgb(52, 73, 94);">）、强制换行（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">text-overflow</font>`<font style="color:rgb(52, 73, 94);">）。</font>
8. **<font style="color:rgb(52, 73, 94);">多媒体查询</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">允许根据不同的屏幕尺寸、分辨率和设备方向应用不同的样式。</font>
9. **<font style="color:rgb(52, 73, 94);">弹性盒模型（Flexbox）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">提供了更加高效的方式来布局、对齐和分配容器内项目的空间。</font>
10. **<font style="color:rgb(52, 73, 94);">网格布局（CSS Grid）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">引入了二维布局系统，可以创建复杂的网页布局。</font>
11. **<font style="color:rgb(52, 73, 94);">新的单位</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">vw</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">vh</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">em</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">rem</font>`<font style="color:rgb(52, 73, 94);"> 提供了更多灵活的尺寸单位。</font>

### <font style="color:rgb(52, 73, 94);">谈一谈你对盒子模型的理解</font>
<font style="color:rgb(52, 73, 94);">CSS 盒子模型是设计网页布局的基础，它包括了几个关键部分：</font>

1. **<font style="color:rgb(52, 73, 94);">内容（Content）</font>**<font style="color:rgb(52, 73, 94);">：这是盒子模型的核心，也就是我们网页上展示的文本、图片等。</font>
2. **<font style="color:rgb(52, 73, 94);">内边距（Padding）</font>**<font style="color:rgb(52, 73, 94);">：内容和边框之间的空间，可以是单色的，也可以有背景图片或背景色。</font>
3. **<font style="color:rgb(52, 73, 94);">边框（Border）</font>**<font style="color:rgb(52, 73, 94);">：围绕在内边距外面的线，可以设置样式、颜色和宽度。</font>
4. **<font style="color:rgb(52, 73, 94);">外边距（Margin）</font>**<font style="color:rgb(52, 73, 94);">：边框外面的空间，用于控制元素间的距离，通常用于布局。</font>
5. **<font style="color:rgb(52, 73, 94);">宽度（Width）和高度（Height）</font>**<font style="color:rgb(52, 73, 94);">：内容的宽度和高度，注意，这通常不包括内边距、边框和外边距。</font>
6. **<font style="color:rgb(52, 73, 94);">盒子类型</font>**<font style="color:rgb(52, 73, 94);">：有两种类型的盒子，块级盒子（block-level box）和行内盒子（inline box）。块级盒子通常会创建一个新的块，而行内盒子则不会。</font>
7. **<font style="color:rgb(52, 73, 94);">box-sizing 属性</font>**<font style="color:rgb(52, 73, 94);">：这个属性可以让我们控制宽度和高度是仅包含内容，还是同时包含内边距和边框。</font>

### <font style="color:rgb(52, 73, 94);">position</font>
<font style="color:rgb(52, 73, 94);">CSS 的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">position</font>`<font style="color:rgb(52, 73, 94);"> 属性主要有以下五种值，它们决定了元素的定位方式：</font>

1. **<font style="color:rgb(52, 73, 94);">static</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">默认值，元素按照正常的文档流进行布局。</font>
2. **<font style="color:rgb(52, 73, 94);">relative</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">元素的位置相对于它在文档流中的原始位置进行偏移，但不会影响其他元素的布局。</font>
3. **<font style="color:rgb(52, 73, 94);">absolute</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">元素的位置相对于它的最近的非 static 定位祖先元素进行偏移；如果没有这样的祖先元素，那么相对于初始包含块进行偏移。</font>
    - <font style="color:rgb(52, 73, 94);">元素脱离文档流，不占据空间。</font>
4. **<font style="color:rgb(52, 73, 94);">fixed</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">元素的位置相对于浏览器窗口进行定位，即使页面滚动，元素也会固定在屏幕上。</font>
    - <font style="color:rgb(52, 73, 94);">同样脱离文档流。</font>
5. **<font style="color:rgb(52, 73, 94);">sticky</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">元素会根据正常文档流进行定位，直到页面滚动到达某个位置，之后它的表现就像 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">fixed</font>`<font style="color:rgb(52, 73, 94);"> 定位一样。</font>
    - <font style="color:rgb(52, 73, 94);">它在 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">relative</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">fixed</font>`<font style="color:rgb(52, 73, 94);"> 之间产生一种折衷的定位方式。</font>

### <font style="color:rgb(52, 73, 94);">display:none和visibility:hidden区别</font>
1. **<font style="color:rgb(52, 73, 94);">占用空间</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);">：元素完全从文档布局中消失，不占据任何空间。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);">：元素仍然占据空间，只是看不见。</font>
2. **<font style="color:rgb(52, 73, 94);">渲染</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);">：元素不会被渲染，也就是说，它不会被浏览器渲染过程考虑。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);">：元素会被渲染，但渲染的结果不可见。</font>
3. **<font style="color:rgb(52, 73, 94);">继承性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);"> 可以被继承，如果一个隐藏的元素包含其他元素，那些元素也会是隐藏的，除非被明确设置。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);"> 不会继承，子元素会随着父元素一起消失。</font>
4. **<font style="color:rgb(52, 73, 94);">滚动问题</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">当使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);"> 时，如果元素是一个滚动容器，滚动条仍然可见。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);"> 则不会有滚动条。</font>
5. **<font style="color:rgb(52, 73, 94);">性能</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);"> 通常性能更好，因为它减少了页面的渲染负担。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);"> 可能会影响性能，因为元素仍然参与渲染。</font>

<font style="color:rgb(52, 73, 94);">举个例子，如果你不想显示一个元素，并且希望它不占据空间，就用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: none</font>`<font style="color:rgb(52, 73, 94);">。如果你只是想让元素不可见，但保留布局占位，就用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visibility: hidden</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">对flex布局的理解</font>
<font style="color:rgb(52, 73, 94);">Flex布局（弹性布局）是一种现代的CSS布局方式，用于设计一维布局（水平或垂直）。它能够灵活地分配容器内的空间，使子元素（flex items）能够根据容器的大小动态调整自身的宽度或高度，从而实现响应式设计。</font>

<font style="color:rgb(52, 73, 94);">Flex布局主要涉及两个概念：容器（flex container）和子元素（flex items）。</font>

+ **<font style="color:rgb(52, 73, 94);">容器</font>**<font style="color:rgb(52, 73, 94);">：通过设置</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: flex</font>`<font style="color:rgb(52, 73, 94);">或</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: inline-flex</font>`<font style="color:rgb(52, 73, 94);">，一个元素可以被定义为Flex容器。</font>
+ **<font style="color:rgb(52, 73, 94);">子元素</font>**<font style="color:rgb(52, 73, 94);">：Flex容器内的直接子元素会自动成为Flex项（flex items），并遵循Flex布局的规则。</font>

<font style="color:rgb(52, 73, 94);">Flex布局的属性分为两类：容器属性和子元素属性，常用的容器属性包括</font>

+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display</font>**`<font style="color:rgb(52, 73, 94);">： 创建flex容器</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-direction</font>**`<font style="color:rgb(52, 73, 94);">用于定义主轴的方向</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">justify-content</font>**`<font style="color:rgb(52, 73, 94);">定义主轴上子元素的对齐方式</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">align-items</font>**`<font style="color:rgb(52, 73, 94);">定义交叉轴上子元素的对齐方式。</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-wrap</font>**`<font style="color:rgb(52, 73, 94);">定义子元素是否可以换行</font>

<font style="color:rgb(52, 73, 94);">子元素属性包括：</font>

+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-grow</font>**`<font style="color:rgb(52, 73, 94);">定义子元素在容器有剩余空间时的扩展比例。默认值为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">0</font>`<font style="color:rgb(52, 73, 94);">，表示子元素不会扩展。</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-shrink</font>**`<font style="color:rgb(52, 73, 94);">定义子元素在容器空间不足时的收缩比例。默认值为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">1</font>`<font style="color:rgb(52, 73, 94);">，表示子元素会按比例收缩。</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-basis</font>**`<font style="color:rgb(52, 73, 94);">定义子元素在分配空间之前的初始大小，默认值为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">auto</font>`<font style="color:rgb(52, 73, 94);">，表示子元素的初始大小为其内容大小。</font>
+ `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex</font>**`<font style="color:rgb(52, 73, 94);">，是</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-grow</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-shrink</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">flex-basis</font>`<font style="color:rgb(52, 73, 94);">的简写。默认值为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">0 1 auto</font>`<font style="color:rgb(52, 73, 94);">。</font>

<font style="color:rgb(52, 73, 94);">在实际开发中，flex常用在实现水平或垂直居中、等分容器空间、以及响应式布局上。</font>

### <font style="color:rgb(52, 73, 94);">对BFC的理解</font>
<font style="color:rgb(52, 73, 94);">BFC，全称是块级格式化上下文（Block Formatting Context），是 CSS 布局中一个重要的概念。它是一个独立的渲染区域，决定了元素的布局方式。</font>

**<font style="color:rgb(52, 73, 94);">关键点</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">创建BFC</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">BFC 通常由一些特定的 CSS 属性触发，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">float</font>`<font style="color:rgb(52, 73, 94);"> 属性的元素、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">position</font>`<font style="color:rgb(52, 73, 94);"> 为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">absolute</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">fixed</font>`<font style="color:rgb(52, 73, 94);"> 的元素、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">overflow</font>`<font style="color:rgb(52, 73, 94);"> 不是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">visible</font>`<font style="color:rgb(52, 73, 94);"> 的块级元素等。</font>
2. **<font style="color:rgb(52, 73, 94);">特性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">BFC 中的元素和外部的元素相互隔离，这就意味着，即使外部元素发生布局变化，也不会影响到 BFC 内部的布局。</font>
    - <font style="color:rgb(52, 73, 94);">BFC 内部的元素会尽可能地填充整个容器，这有助于防止 margin 重叠。</font>
3. **<font style="color:rgb(52, 73, 94);">作用</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">防止 margin 重叠</font>**<font style="color:rgb(52, 73, 94);">：通过创建 BFC 可以避免垂直 margin 重叠的问题。</font>
    - **<font style="color:rgb(52, 73, 94);">自适应布局</font>**<font style="color:rgb(52, 73, 94);">：利用 BFC 的特性，可以实现更灵活的页面布局。</font>
    - **<font style="color:rgb(52, 73, 94);">避免外部浮动的影响</font>**<font style="color:rgb(52, 73, 94);">：BFC 不会受到外部浮动的影响，可以用来包裹浮动元素。</font>

**<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">当你想要隔离布局，避免外部元素的干扰时，创建一个 BFC 会很有用。</font>
+ <font style="color:rgb(52, 73, 94);">当你想要解决 margin 重叠的问题时，BFC 是一个很好的解决方案。</font>

<font style="color:rgb(52, 73, 94);">简单来说，BFC 就像一个保护罩，让内部元素的布局不受外部影响，同时内部元素也会尽可能地占满整个容器。</font>

### <font style="color:rgb(52, 73, 94);">移动端响应式布局方式</font>
1. **<font style="color:rgb(52, 73, 94);">媒体查询</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 CSS3 的媒体查询（Media Queries），根据不同的屏幕尺寸、分辨率或设备方向应用不同的 CSS 规则。</font>
2. **<font style="color:rgb(52, 73, 94);">百分比布局</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用百分比而不是固定像素来设置元素的宽度，这样布局就可以根据容器的大小灵活伸缩。</font>
3. <font style="color:rgb(52, 73, 94);">flex布局</font>

### <font style="color:rgb(52, 73, 94);">居中的实现方式</font>
1. **<font style="color:rgb(52, 73, 94);">水平居中</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">行内元素</font>**<font style="color:rgb(52, 73, 94);">：使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">text-align: center;</font>`<font style="color:rgb(52, 73, 94);"> 可以水平居中行内元素或文本。</font>
    - **<font style="color:rgb(52, 73, 94);">块级元素</font>**<font style="color:rgb(52, 73, 94);">：可以设置左右 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">margin</font>`<font style="color:rgb(52, 73, 94);"> 为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">auto</font>`<font style="color:rgb(52, 73, 94);">，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">margin: 0 auto;</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">垂直居中</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">单行文本</font>**<font style="color:rgb(52, 73, 94);">：使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">line-height</font>`<font style="color:rgb(52, 73, 94);"> 等于高度可以实现。</font>
    - **<font style="color:rgb(52, 73, 94);">已知高度的元素</font>**<font style="color:rgb(52, 73, 94);">：将 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">position</font>`<font style="color:rgb(52, 73, 94);"> 设为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">absolute</font>`<font style="color:rgb(52, 73, 94);">，然后设置 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">top</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bottom</font>`<font style="color:rgb(52, 73, 94);"> 为50%，再将 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">top</font>`<font style="color:rgb(52, 73, 94);"> 减去自身高度的一半。</font>
3. **<font style="color:rgb(52, 73, 94);">绝对定位居中</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">position: absolute;</font>`<font style="color:rgb(52, 73, 94);"> 配合 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">transform: translate(-50%, -50%);</font>`<font style="color:rgb(52, 73, 94);"> 可以实现任何元素的水平和垂直居中。</font>
4. **<font style="color:rgb(52, 73, 94);">Flexbox 居中</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">display: flex;</font>`<font style="color:rgb(52, 73, 94);">，然后 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">justify-content: center;</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">align-items: center;</font>`<font style="color:rgb(52, 73, 94);"> 可以轻松实现水平和垂直居中。</font>

### <font style="color:rgb(52, 73, 94);">说一下JS的数据类型</font>
<font style="color:rgb(52, 73, 94);">JavaScript 是一种弱类型语言，它主要包含以下几种数据类型：</font>

1. **<font style="color:rgb(52, 73, 94);">Number</font>**<font style="color:rgb(52, 73, 94);">：用于表示数字，包括整数和浮点数。</font>
2. **<font style="color:rgb(52, 73, 94);">String</font>**<font style="color:rgb(52, 73, 94);">：用于表示文本数据，可以是字母、数字、符号等。</font>
3. **<font style="color:rgb(52, 73, 94);">Boolean</font>**<font style="color:rgb(52, 73, 94);">：只有两个值，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">true</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">false</font>`<font style="color:rgb(52, 73, 94);">，用于逻辑判断。</font>
4. **<font style="color:rgb(52, 73, 94);">Undefined</font>**<font style="color:rgb(52, 73, 94);">：表示变量已声明但未初始化，即没有赋予具体的值。</font>
5. **<font style="color:rgb(52, 73, 94);">Null</font>**<font style="color:rgb(52, 73, 94);">：表示故意赋予变量的空值，常用于表示不存在的对象。</font>
6. **<font style="color:rgb(52, 73, 94);">Object</font>**<font style="color:rgb(52, 73, 94);">：包括数组（Array）、函数（Function）、日期（Date）和其他对象。</font>
7. **<font style="color:rgb(52, 73, 94);">Symbol</font>**<font style="color:rgb(52, 73, 94);">（ES6 新增）：用于创建唯一的不可变的代号，常用于属性名。</font>
8. **<font style="color:rgb(52, 73, 94);">BigInt</font>**<font style="color:rgb(52, 73, 94);">（ES2020 新增）：用于表示大于 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">2^53 - 1</font>`<font style="color:rgb(52, 73, 94);"> 的整数。</font>

### <font style="color:rgb(52, 73, 94);">数据类型检测的方法有哪些</font>
1. **<font style="color:rgb(52, 73, 94);">typeof 操作符</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于获取一个变量或值的类型，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">typeof variable</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - <font style="color:rgb(52, 73, 94);">对于函数和对象，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">typeof</font>`<font style="color:rgb(52, 73, 94);"> 会返回 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">"function"</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">"object"</font>`<font style="color:rgb(52, 73, 94);">，包括 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">null</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">instanceof 操作符</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于检测构造函数的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prototype</font>`<font style="color:rgb(52, 73, 94);"> 属性是否出现在某个实例对象的原型链上。</font>
    - <font style="color:rgb(52, 73, 94);">比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">object instanceof Constructor</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. **<font style="color:rgb(52, 73, 94);">Object.prototype.toString.call()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">更为准确的类型检测方法，可以用来区分 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">null</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">，以及获取对象的准确类型。</font>
    - <font style="color:rgb(52, 73, 94);">比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.prototype.toString.call(variable)</font>`<font style="color:rgb(52, 73, 94);">。</font>
4. **<font style="color:rgb(52, 73, 94);">constructor 属性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">某些内置类型有 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">constructor</font>`<font style="color:rgb(52, 73, 94);"> 属性，可以用来检测类型，但可以被改写，所以不是最可靠的方法。</font>
5. **<font style="color:rgb(52, 73, 94);">Array.isArray()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">专门用来检测一个对象是否为数组，比 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">typeof</font>`<font style="color:rgb(52, 73, 94);"> 更准确。</font>

### `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">==</font>`<font style="color:rgb(52, 73, 94);">和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">===</font>`<font style="color:rgb(52, 73, 94);">区别是什么？</font>
1. **<font style="color:rgb(52, 73, 94);">双等号 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">==</font>**`<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这是所谓的"相等"运算符，它用来检查两个值是否相等。</font>
    - <font style="color:rgb(52, 73, 94);">当使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">==</font>`<font style="color:rgb(52, 73, 94);"> 进行比较时，如果比较的两个值类型不同，JavaScript 会尝试将它们转换成相同的类型，然后再进行比较，这个过程叫做类型转换或类型提升。</font>
2. **<font style="color:rgb(52, 73, 94);">三等号 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">===</font>**`<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这是所谓的"严格相等"运算符，它同样用来检查两个值是否相等。</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">===</font>`<font style="color:rgb(52, 73, 94);"> 进行比较时，如果两个值的类型不同，比较直接返回 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">false</font>`<font style="color:rgb(52, 73, 94);">，不会进行类型转换。</font>

### <font style="color:rgb(52, 73, 94);">null和undefined的区别是什么</font>
<font style="color:rgb(52, 73, 94);">JavaScript 中，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">null</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);"> 都是用来表示"没有值"，但它们的含义和用途有所不同：</font>

1. **<font style="color:rgb(52, 73, 94);">undefined</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">表示一个变量声明了但还没有被赋值。</font>
    - <font style="color:rgb(52, 73, 94);">调用函数时，应该返回值但没有返回值，那么返回的就是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);"> 是一个表示"缺少值"的原始值。</font>
2. **<font style="color:rgb(52, 73, 94);">null</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">表示一个变量当前没有指向任何对象，即显式地表示一个空值。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">null</font>`<font style="color:rgb(52, 73, 94);"> 是一个表示"空值"的对象。</font>

### <font style="color:rgb(52, 73, 94);">什么是变量提升</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 中，变量提升（Hoisting）是指变量声明和函数声明在代码执行前被提升到当前作用域的顶部的过程。</font>

**<font style="color:rgb(52, 73, 94);">变量提升的要点</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">变量声明提升</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">只有变量的声明被提升，而不是变量的赋值。</font>
    - <font style="color:rgb(52, 73, 94);">这意味着在变量声明之前就可以访问该变量，其值为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">函数声明提升</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">函数的声明（包括函数体内的变量和函数）都会被提升。</font>
    - <font style="color:rgb(52, 73, 94);">可以在这个函数声明之前的任何地方调用它。</font>
3. `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>**`**<font style="color:rgb(52, 73, 94);"> 和 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>**`**<font style="color:rgb(52, 73, 94);"> 提升</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>`<font style="color:rgb(52, 73, 94);"> 也有提升，但与 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 不同，它们不会在提升后直接赋予 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - <font style="color:rgb(52, 73, 94);">它们会进入一个称为"暂时性死区"（Temporal Dead Zone，TDZ）的状态，在初始化之前访问会引发错误。</font>

### <font style="color:rgb(52, 73, 94);">简单说下JS的作用域和作用域链</font>
**<font style="color:rgb(52, 73, 94);">作用域</font>**<font style="color:rgb(52, 73, 94);">：</font>

<font style="color:rgb(52, 73, 94);">在 JavaScript 中，作用域决定了变量或函数的可见性和可访问性。它限定了变量和函数的生命周期。</font>

1. **<font style="color:rgb(52, 73, 94);">全局作用域</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">在全局作用域中声明的变量和函数，在整个脚本中都可以访问。</font>
2. **<font style="color:rgb(52, 73, 94);">函数作用域</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">在函数内部声明的变量，只在该函数内部可访问。</font>
3. **<font style="color:rgb(52, 73, 94);">块级作用域</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">ES6 引入了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>`<font style="color:rgb(52, 73, 94);">，它们在块级作用域（如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">if</font>`<font style="color:rgb(52, 73, 94);"> 语句、循环、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">{}</font>`<font style="color:rgb(52, 73, 94);"> 代码块）中有效。</font>

**<font style="color:rgb(52, 73, 94);">作用域链</font>**<font style="color:rgb(52, 73, 94);">：</font>

<font style="color:rgb(52, 73, 94);">作用域链是一种机制，用于确定在哪个作用域中查找变量。当访问一个变量时，JavaScript 引擎会从当前作用域开始查找，然后逐级向上（函数的调用者）查找，直到全局作用域。</font>

1. **<font style="color:rgb(52, 73, 94);">查找过程</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">从当前作用域开始，查找变量。</font>
    - <font style="color:rgb(52, 73, 94);">如果当前作用域找不到，就查找上层作用域。</font>
    - <font style="color:rgb(52, 73, 94);">一直找到全局作用域，或者找到变量为止。</font>
2. **<font style="color:rgb(52, 73, 94);">闭包</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">闭包是作用域链的一个应用，允许函数访问并操作外部函数作用域中的变量。</font>

### <font style="color:rgb(52, 73, 94);">说一说你对执行上下文的理解</font>
<font style="color:rgb(52, 73, 94);">执行上下文（Execution Context）是 JavaScript 代码执行的环境，它定义了变量和函数的访问方式。</font>

1. **<font style="color:rgb(52, 73, 94);">全局执行上下文</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这是最基础的执行上下文，当 JavaScript 代码开始运行时创建。</font>
    - <font style="color:rgb(52, 73, 94);">全局上下文中的变量是全局变量，所有代码都共享这个全局上下文。</font>
2. **<font style="color:rgb(52, 73, 94);">函数执行上下文</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">每次调用函数时，都会为该函数创建一个新的执行上下文。</font>
    - <font style="color:rgb(52, 73, 94);">函数上下文中的变量是局部变量，只有函数内部可以访问。</font>
3. **<font style="color:rgb(52, 73, 94);">块级执行上下文</font>**<font style="color:rgb(52, 73, 94);">（ES6 新增）：</font>
    - <font style="color:rgb(52, 73, 94);">让 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>`<font style="color:rgb(52, 73, 94);"> 关键字具有块级作用域。</font>
    - <font style="color:rgb(52, 73, 94);">块级上下文中的变量只在 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">{}</font>`<font style="color:rgb(52, 73, 94);"> 内部有效</font><font style="color:rgb(52, 73, 94);">。</font>
4. **<font style="color:rgb(52, 73, 94);">评估阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">在代码执行之前，会进行变量和函数声明的评估。</font>
5. **<font style="color:rgb(52, 73, 94);">执行阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">执行代码，从上到下，遇到函数调用就创建新的执行上下文。</font>

**<font style="color:rgb(52, 73, 94);">作用域链</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">每个执行上下文都有自己的作用域链，用于确定变量和函数的访问权限。</font>
+ <font style="color:rgb(52, 73, 94);">作用域链的顶端是当前上下文中的变量对象，然后逐级向上查找，直到全局上下文。</font>

### <font style="color:rgb(52, 73, 94);">简单说下JS的闭包</font>
<font style="color:rgb(52, 73, 94);">闭包，简单来说，就是一个函数和它外部环境的组合。在 JavaScript 中，每当我们创建一个函数时，它都会在自己的作用域中执行，这个作用域由外部变量组成。即使函数执行完毕后，这些变量也不会消失，因为函数仍然记得它们。</font>

**<font style="color:rgb(52, 73, 94);">闭包的能力</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">访问外部变量</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">闭包可以访问创建它的外部函数中定义的变量。</font>
2. **<font style="color:rgb(52, 73, 94);">维持状态</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">闭包常用于创建带状态的函数，比如计数器或存储配置信息。</font>
3. **<font style="color:rgb(52, 73, 94);">延长变量生命周期</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">即使创建它的外部函数已经执行完毕，闭包仍然可以引用这些变量。</font>

**<font style="color:rgb(52, 73, 94);">如何形成闭包</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">当一个内部函数从包含它的外部函数中被返回，或者作为参数传递给其他函数时，就形成了闭包。</font>

**<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">模块化</font>**<font style="color:rgb(52, 73, 94);">：实现私有变量和函数，通过闭包暴露公有接口。</font>
+ **<font style="color:rgb(52, 73, 94);">函数柯里化</font>**<font style="color:rgb(52, 73, 94);">：预先设置参数，生成新的函数。</font>
+ **<font style="color:rgb(52, 73, 94);">事件处理器</font>**<font style="color:rgb(52, 73, 94);">：保存事件处理函数的状态。</font>

### <font style="color:rgb(52, 73, 94);">讲一讲Js垃圾回收机制</font>
<font style="color:rgb(52, 73, 94);">JavaScript 使用自动垃圾回收机制来管理内存，主要是通过标记-清除（Mark-and-Sweep）算法来实现的。</font>

**<font style="color:rgb(52, 73, 94);">垃圾回收的要点</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">引用类型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">JavaScript 中的对象如数组、函数、对象等，都是通过引用来访问的。</font>
2. **<font style="color:rgb(52, 73, 94);">标记阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">垃圾回收器会从全局对象开始，查找所有从根对象可达的引用。被标记的对象就是正在使用中的对象。</font>
3. **<font style="color:rgb(52, 73, 94);">清除阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">完成标记后，垃圾回收器会遍历内存，清除未被标记的对象，这些对象就是未被引用的，可以被回收的。</font>

**<font style="color:rgb(52, 73, 94);">额外的策略</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">引用计数</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">早期的垃圾回收策略，通过计数对象被引用的次数来判断是否可以回收。但如果两个对象相互引用，即使它们不再被使用，计数器也不会归零，这会导致内存泄漏。</font>
2. **<font style="color:rgb(52, 73, 94);">分代回收</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">将内存分为新生代和老生代。新生代中的对象生命周期短，垃圾回收频繁；老生代中的对象生命周期长，垃圾回收不那么频繁。</font>
3. **<font style="color:rgb(52, 73, 94);">增量回收</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">为了避免长时间的垃圾回收导致的卡顿，V8 引擎采用了增量回收策略，将垃圾回收过程分成多个小步骤。</font>

**<font style="color:rgb(52, 73, 94);">V8 引擎的优化</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">V8 引擎使用了许多优化技术，比如扫雪机算法（Scavenge Algorithm）来优化新生代的垃圾回收。</font>

### <font style="color:rgb(52, 73, 94);">哪些操作会造成内存泄漏？</font>
<font style="color:rgb(52, 73, 94);">内存泄漏是指本应该被垃圾回收器回收的内存，因为某些原因未被回收，导致内存持续占用。下面是一些常见的造成内存泄漏的操作：</font>

1. **<font style="color:rgb(52, 73, 94);">未解除的引用</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">例如，将一个对象存储在全局变量中，而这个对象不再需要时却没有被清除。</font>
2. **<font style="color:rgb(52, 73, 94);">闭包</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">过度使用闭包可能会持续持有引用，导致外部上下文无法被回收。</font>
3. **<font style="color:rgb(52, 73, 94);">未清理的事件监听器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">给元素添加了事件监听器，但当元素不再使用时，未移除这些监听器。</font>
4. **<font style="color:rgb(52, 73, 94);">定时器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">设置了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setInterval</font>`<font style="color:rgb(52, 73, 94);"> 但未在适当的时候使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">clearInterval</font>`<font style="color:rgb(52, 73, 94);"> 清除。</font>
5. **<font style="color:rgb(52, 73, 94);">未释放的DOM引用</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">存储了对DOM元素的引用，即使这些元素已经从文档中移除。</font>
6. **<font style="color:rgb(52, 73, 94);">不必要的全局变量</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">创建了全局变量来长期存储数据，但数据不再需要时没有适当清理。</font>

### <font style="color:rgb(52, 73, 94);">解释一下什么是原型和原型链</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 中，原型是一种面向对象的特征，用于实现继承和共享方法。</font>

**<font style="color:rgb(52, 73, 94);">原型（Prototype）</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">每个函数在创建时，都有一个 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prototype</font>`<font style="color:rgb(52, 73, 94);"> 属性，指向一个对象，这个对象包含了可以由通过该函数构造的所有实例共享的属性和方法。</font>

**<font style="color:rgb(52, 73, 94);">构造函数的原型</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">通过构造函数创建的对象实例，都包含一个内部链接，指向创建它们的构造函数的原型，这个链接就是原型链的基础。</font>

**<font style="color:rgb(52, 73, 94);">原型链（Prototype Chain）</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">当我们尝试访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，它会沿着原型链向上查找，直到找到属性或方法，或到达原型链的顶端。</font>

**<font style="color:rgb(52, 73, 94);">查找过程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">查找实例属性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">首先在对象自身上查找。</font>
2. **<font style="color:rgb(52, 73, 94);">原型链查找</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果在对象自身上找不到，沿着原型链向上查找。</font>
3. **<font style="color:rgb(52, 73, 94);">构造函数的原型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">最后到达构造函数的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prototype</font>`<font style="color:rgb(52, 73, 94);"> 对象。</font>

**<font style="color:rgb(52, 73, 94);">原型链的顶端</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.prototype</font>`<font style="color:rgb(52, 73, 94);"> 是原型链的最顶端，所有的原型链最终都会在这里结束。</font>

### <font style="color:rgb(52, 73, 94);">遍历对象属性的方法有哪些</font>
1. **<font style="color:rgb(52, 73, 94);">for...in 循环</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">遍历对象自身的所有可枚举属性，以及从原型链继承的可枚举属性。</font>
    - <font style="color:rgb(52, 73, 94);">如果要遍历对象自身的属性，需要结合 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">hasOwnProperty</font>`<font style="color:rgb(52, 73, 94);"> 方法进行检查。</font>
2. **<font style="color:rgb(52, 73, 94);">Object.keys()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">仅返回对象自身的可枚举属性的名称数组，不包括原型链中的属性。</font>
3. **<font style="color:rgb(52, 73, 94);">Object.getOwnPropertyNames()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">返回对象自身的所有属性（包括不可枚举的属性）的名称数组。</font>
4. **<font style="color:rgb(52, 73, 94);">Object.entries()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">返回一个给定对象自身可枚举属性的键值对数组，每个键值对是数组的形式。</font>
5. **<font style="color:rgb(52, 73, 94);">for...of 循环 + Object.values()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">通过 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.values()</font>`<font style="color:rgb(52, 73, 94);"> 获取对象的所有可枚举属性值的数组，然后用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...of</font>`<font style="color:rgb(52, 73, 94);"> 循环遍历。</font>
6. **<font style="color:rgb(52, 73, 94);">Reflect.ownKeys()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">返回对象自身的所有键（包括不可枚举的属性和Symbol属性）的数组。</font>

### <font style="color:rgb(52, 73, 94);">new</font>
1. **<font style="color:rgb(52, 73, 94);">创建一个新的空对象</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这个对象是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">{}</font>`<font style="color:rgb(52, 73, 94);">，它将作为新对象的实例。</font>
2. **<font style="color:rgb(52, 73, 94);">设置原型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这个新对象的原型会被指向构造函数的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prototype</font>`<font style="color:rgb(52, 73, 94);"> 属性。</font>
3. **<font style="color:rgb(52, 73, 94);">绑定构造函数的 </font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>**`<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">构造函数内部的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 被赋值为这个新对象，这样构造函数中的属性和方法就可以被添加到新对象上了。</font>
4. **<font style="color:rgb(52, 73, 94);">执行构造函数中的代码</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果构造函数中有代码，这些代码会执行，通常包括给对象添加属性或方法。</font>
5. **<font style="color:rgb(52, 73, 94);">返回新对象</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果构造函数中没有返回一个对象类型的值（比如返回一个数组或另一个对象），那么默认返回新创建的对象。</font>

### <font style="color:rgb(52, 73, 94);">call/bind/apply有什么区别</font>
1. **<font style="color:rgb(52, 73, 94);">call 方法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">调用时需要逐个传递参数。</font>
    - <font style="color:rgb(52, 73, 94);">立即执行该函数。</font>
2. **<font style="color:rgb(52, 73, 94);">apply 方法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">调用时传递一个参数数组。</font>
    - <font style="color:rgb(52, 73, 94);">立即执行该函数。</font>
3. **<font style="color:rgb(52, 73, 94);">bind 方法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于创建一个新的函数，其 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 被永久绑定到提供的值。</font>
    - <font style="color:rgb(52, 73, 94);">不会立即执行，而是返回一个新的函数。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>`<font style="color:rgb(52, 73, 94);"> 都是立即执行的，区别在于参数的传递方式。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bind</font>`<font style="color:rgb(52, 73, 94);"> 是用来创建一个新的函数，可以立即执行，也可以稍后执行。</font>

### <font style="color:rgb(52, 73, 94);">this绑定的规则</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 中，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 的值取决于函数的调用方式，而不是在哪里定义的。</font>

1. **<font style="color:rgb(52, 73, 94);">默认绑定</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果函数是独立调用的，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 默认指向全局对象（在浏览器中是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">window</font>`<font style="color:rgb(52, 73, 94);">）。</font>
2. **<font style="color:rgb(52, 73, 94);">隐式绑定</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果函数作为某个对象的方法被调用，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 会绑定到调用它的对象上。</font>
3. **<font style="color:rgb(52, 73, 94);">显式绑定</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bind</font>`<font style="color:rgb(52, 73, 94);"> 方法可以显式地设置 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 指向。</font>
4. **<font style="color:rgb(52, 73, 94);">新对象绑定（构造函数）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如果一个函数作为构造函数（使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">new</font>`<font style="color:rgb(52, 73, 94);"> 关键字调用），</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 会绑定到新创建的对象上。</font>
5. **<font style="color:rgb(52, 73, 94);">箭头函数</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数不会创建自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);">，它会捕获其所在上下文的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 值，作为自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`

### <font style="color:rgb(52, 73, 94);">继承有哪些实现的方式</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 中，由于它本身不支持传统的类继承，我们通常通过一些技巧来模拟继承行为：</font>

1. **<font style="color:rgb(52, 73, 94);">原型链继承</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">让一个构造函数的实例成为另一个构造函数的实例。</font>
    - <font style="color:rgb(52, 73, 94);">缺点是父类构造函数会被多次调用。</font>
2. **<font style="color:rgb(52, 73, 94);">借用构造函数（经典继承）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>`<font style="color:rgb(52, 73, 94);"> 将父类构造函数的上下文绑定到子类构造函数。</font>
    - <font style="color:rgb(52, 73, 94);">缺点是不能继承原型上的属性和方法。</font>
3. **<font style="color:rgb(52, 73, 94);">组合继承（原型链+借用构造函数）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">结合了原型链和借用构造函数的方法。</font>
    - <font style="color:rgb(52, 73, 94);">可以继承原型上的方法，也可以避免父类构造函数的多次调用。</font>
    - <font style="color:rgb(52, 73, 94);">缺点是父类构造函数被调用了两次。</font>
4. **<font style="color:rgb(52, 73, 94);">原型式继承</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">通过字面量对象或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.create()</font>`<font style="color:rgb(52, 73, 94);"> 创建一个新对象，使用一个对象来作为另一个对象的原型。</font>
    - <font style="color:rgb(52, 73, 94);">缺点是方法都在构造函数中定义，每次构造函数调用都会创建一遍方法。</font>
5. **<font style="color:rgb(52, 73, 94);">寄生式继承</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">创建一个增强对象的函数，然后返回这个对象。</font>
    - <font style="color:rgb(52, 73, 94);">适用于只需要少量的共有属性时。</font>
6. **<font style="color:rgb(52, 73, 94);">寄生组合继承</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">组合继承的优化，只调用一次父类构造函数。</font>
    - <font style="color:rgb(52, 73, 94);">在组合继承中，用寄生函数消除父类构造函数的重复调用。</font>
7. **<font style="color:rgb(52, 73, 94);">ES6 类继承</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">class</font>`<font style="color:rgb(52, 73, 94);"> 关键字和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">extends</font>`<font style="color:rgb(52, 73, 94);"> 实现继承。</font>
    - <font style="color:rgb(52, 73, 94);">语法简洁，易于理解。</font>

### <font style="color:rgb(52, 73, 94);">防抖和节流的区别</font>
1. 防抖（Debounce）

防抖是指在事件被触发后等待一定的延迟时间，如果在这段延迟时间内事件又被重新触发，则重新开始计算延迟时间。只有当指定的时间间隔内没有再次触发事件时，才会执行函数。

应用场景：

+ 输入框验证（如搜索框输入时，用户停止输入一段时间后才进行搜索）
+ 窗口调整大小、滚动等操作，避免在过程中频繁执行某些操作

核心思想：确保在一段指定时间内，不论触发了多少次事件，只有一次能够执行。

2. 节流（Throttle）

节流是指在指定的时间间隔内，只允许函数执行一次，即使事件触发多次，也只在固定的时间间隔内执行一次。

应用场景：

+ 滚动事件监听（如无限滚动加载）
+ 浏览器的前进、后退按钮事件监听

核心思想：确保函数在指定的时间间隔内最多只执行一次，不管事件触发了多少次。

### 深拷贝和浅拷贝的实现
在JavaScript中，深拷贝和浅拷贝是对象复制的两种方式，它们的主要区别在于是否递归复制对象的嵌套属性。

1. 浅拷贝只复制对象的第一层属性，对于嵌套的对象，复制的是引用，而不是对象本身。
    - 实现方式：扩展运算符（`...`）， 扩展运算符会遍历对象的可枚举属性，并将它们复制到新对象中。对于嵌套对象，只是复制了引用，这种方法简洁易用，但是只能实现浅拷贝，不能处理嵌套对象的深拷贝。
    - `Object.assign()`会将源对象的可枚举属性复制到目标对象中。它也是浅拷贝。可以同时合并多个对象。但是同样是浅拷贝，不能处理嵌套对象的深拷贝。
    - `Array.prototype.slice()`（针对数组）会创建一个新数组，并将原数组的元素复制到新数组中。它也是浅拷贝。
2. 深拷贝会递归复制对象的所有层级，确保新对象与原对象完全独立。
    - 通过`JSON.stringify()`将对象序列化为字符串，再通过`JSON.parse()`将字符串反序列化为新对象。这个过程会递归处理所有层级。这种方法简单易用，能实现深拷贝。但是不能处理函数、`undefined`、`NaN`、`Infinity`、循环引用等特殊值，也不能正确处理特殊的对象类型（如`Date`、`RegExp`等）。
    - 库函数，比如`lodash`的`_.cloneDeep()`方法
    - 自定义实现

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return null; // null 是特殊的对象
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj; // 非对象直接返回
  if (hash.has(obj)) return hash.get(obj); // 处理循环引用

  let cloneObj = new obj.constructor(); // 创建新对象
  hash.set(obj, cloneObj); // 将原对象和新对象存入哈希表

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash); // 递归拷贝
    }
  }
  return cloneObj;
}

const obj1 = { a: 1, b: { c: 2 }, d: new Date() };
const obj2 = deepClone(obj1);
console.log(obj2); // { a: 1, b: { c: 2 }, d: Date }
obj2.a = 10;
console.log(obj1.a); // 1
console.log(obj2.a); // 10
obj2.b.c = 20;
console.log(obj1.b.c); // 2
console.log(obj2.b.c); // 20
```

### <font style="color:rgb(52, 73, 94);">let 相比var有啥区别</font>
1. **<font style="color:rgb(52, 73, 94);">块级作用域</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 有块级作用域，它只在声明它的代码块（例如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">if</font>`<font style="color:rgb(52, 73, 94);"> 语句、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for</font>`<font style="color:rgb(52, 73, 94);"> 循环等）内部可见。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 是函数作用域或全局作用域，可能会在无意中造成变量泄漏。</font>
2. **<font style="color:rgb(52, 73, 94);">没有变量提升</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 声明的变量不会在代码块开始时被初始化，而是在声明时初始化，这意味着在声明之前访问变量会导致错误。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 声明的变量会先被提升并初始化为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. **<font style="color:rgb(52, 73, 94);">重复声明限制</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">在同一作用域内，不能用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 重复声明同一个变量。</font>
    - <font style="color:rgb(52, 73, 94);">用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 可以重复声明同一个变量，只有最后一次声明会被使用。</font>
4. **<font style="color:rgb(52, 73, 94);">与全局对象的关系</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 声明的变量不会成为全局对象的属性。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 声明的变量会成为全局对象（在浏览器中是 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">window</font>`<font style="color:rgb(52, 73, 94);"> 对象）的属性。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 提供了更严格的块级作用域和更安全的行为，推荐在需要块级作用域时使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">什么是暂时性死区</font>
<font style="color:rgb(52, 73, 94);">在 ES6 引入 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>`<font style="color:rgb(52, 73, 94);"> 之前，我们用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);"> 声明变量时可能会遇到变量提升的问题，即变量在声明前就能被访问，只是值为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">undefined</font>`<font style="color:rgb(52, 73, 94);">。ES6 为了解决这个问题，引入了暂时性死区的概念。</font>

**<font style="color:rgb(52, 73, 94);">暂时性死区</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">在代码块的开始到 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">let</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">const</font>`<font style="color:rgb(52, 73, 94);"> 声明变量的位置之间的区域，这个区域内访问这些变量会导致一个 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ReferenceError</font>`<font style="color:rgb(52, 73, 94);"> 错误。</font>
+ <font style="color:rgb(52, 73, 94);">这意味着在声明之前，这些变量是不可见的，形成了一个“死区”，在死区内任何对这些变量的访问尝试都不会成功。</font>

### <font style="color:rgb(52, 73, 94);">ES6中有什么新特性，你常用哪些</font>
1. **<font style="color:rgb(52, 73, 94);">let 和 const</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">引入了块级作用域的变量声明，取代了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">var</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">箭头函数</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">提供了更简洁的函数写法，并且 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 的绑定更加一致。</font>
3. **<font style="color:rgb(52, 73, 94);">模板字符串</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">允许在字符串中嵌入表达式，使得字符串拼接更加方便。</font>
4. **<font style="color:rgb(52, 73, 94);">默认参数</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">可以直接在函数参数中设置默认值。</font>
5. **<font style="color:rgb(52, 73, 94);">解构赋值</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">允许从数组和对象中提取数据并赋值给新的变量。</font>
6. **<font style="color:rgb(52, 73, 94);">模块导入导出</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">使得代码模块化更加方便。</font>
7. **<font style="color:rgb(52, 73, 94);">Promises</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于异步计算，是异步编程的一种解决方案。</font>
8. **<font style="color:rgb(52, 73, 94);">类</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">引入了基于类的面向对象编程。</font>
9. **<font style="color:rgb(52, 73, 94);">生成器和迭代器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">允许逐个产生值，而不是一次性计算并返回所有值。</font>
10. **<font style="color:rgb(52, 73, 94);">新的数组方法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Array.from()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">find()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">filter()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">map()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">reduce()</font>`<font style="color:rgb(52, 73, 94);"> 等。</font>
11. **<font style="color:rgb(52, 73, 94);">新的数值和数学方法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Number.isInteger()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Math.trunc()</font>`<font style="color:rgb(52, 73, 94);">。</font>
12. **<font style="color:rgb(52, 73, 94);">Symbol</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">一种新的原始数据类型，用于创建唯一的属性名。</font>
13. **<font style="color:rgb(52, 73, 94);">Proxy 和 Reflect</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">提供了一种在操作对象时自定义行为的能力。</font>

**<font style="color:rgb(52, 73, 94);">我常用的特性</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">箭头函数</font>**<font style="color:rgb(52, 73, 94);">：简化函数写法，避免 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 指向问题。</font>
+ **<font style="color:rgb(52, 73, 94);">模板字符串</font>**<font style="color:rgb(52, 73, 94);">：方便地构建字符串，尤其是多行字符串。</font>
+ **<font style="color:rgb(52, 73, 94);">解构赋值</font>**<font style="color:rgb(52, 73, 94);">：从数组或对象中提取数据，使代码更清晰。</font>
+ **<font style="color:rgb(52, 73, 94);">模块导入导出</font>**<font style="color:rgb(52, 73, 94);">：编写模块化的代码，提高代码的可维护性。</font>
+ **<font style="color:rgb(52, 73, 94);">新的数组方法</font>**<font style="color:rgb(52, 73, 94);">：如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">find()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">filter()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">map()</font>`<font style="color:rgb(52, 73, 94);">，简化数组操作。</font>

### <font style="color:rgb(52, 73, 94);">箭头函数和普通函数区别是啥？</font>
<font style="color:rgb(52, 73, 94);">箭头函数是 ES6 引入的新特性，它提供了一种更简洁的方式来写函数，并且有一些独特的行为：</font>

1. **<font style="color:rgb(52, 73, 94);">语法简洁</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数没有自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">arguments</font>`<font style="color:rgb(52, 73, 94);"> 对象，可以使用剩余参数（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">...</font>`<font style="color:rgb(52, 73, 94);">）和拓展运算符（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">...</font>`<font style="color:rgb(52, 73, 94);">）来处理参数。</font>
2. `**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>**`**<font style="color:rgb(52, 73, 94);"> 绑定</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数不绑定自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);">，它会捕获其所在上下文的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 值作为自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. **<font style="color:rgb(52, 73, 94);">不可以使用</font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">new</font>**`<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数不能作为构造函数，使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">new</font>`<font style="color:rgb(52, 73, 94);"> 调用箭头函数会抛出错误。</font>
4. **<font style="color:rgb(52, 73, 94);">没有原型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数没有自己的原型属性，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prototype</font>`<font style="color:rgb(52, 73, 94);"> 属性是不可枚举的。</font>
5. **<font style="color:rgb(52, 73, 94);">不支持</font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>**`**<font style="color:rgb(52, 73, 94);">、</font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>**`**<font style="color:rgb(52, 73, 94);">、</font>**`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bind</font>**`<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">箭头函数不能使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bind</font>`<font style="color:rgb(52, 73, 94);"> 方法来改变 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 的指向。</font>

<font style="color:rgb(52, 73, 94);">普通函数则没有这些限制，它们有自己的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 绑定规则，可以通过 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">call</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">apply</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">bind</font>`<font style="color:rgb(52, 73, 94);"> 方法来改变 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this</font>`<font style="color:rgb(52, 73, 94);"> 的指向，并且可以作为构造函数使用。</font>

### <font style="color:rgb(52, 73, 94);">什么是同步和异步, JS异步解决方案有哪些？</font>
**<font style="color:rgb(52, 73, 94);">同步和异步</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">同步</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">同步操作是阻塞的，在一个任务完成之前，会阻塞代码的执行，不进行下一个任务。</font>
2. **<font style="color:rgb(52, 73, 94);">异步</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">异步操作是非阻塞的，任务执行时不会等待结果，代码继续执行，任务完成后通过回调或其他方式获取结果。</font>

**<font style="color:rgb(52, 73, 94);">JavaScript 异步解决方案</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">回调函数</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">最早的异步解决方案，将代码作为回调函数传递给异步任务。</font>
2. **<font style="color:rgb(52, 73, 94);">Promises</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">提供了更好的异步操作管理方式，可以链式调用，避免回调地狱。</font>
3. **<font style="color:rgb(52, 73, 94);">async/await</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">建立在 Promises 之上，让异步代码看起来像同步代码，更简洁易读。</font>
4. **<font style="color:rgb(52, 73, 94);">事件监听器</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">通过注册事件和监听器来处理异步事件。</font>

### <font style="color:rgb(52, 73, 94);">描述下对事件循环的理解</font>
<font style="color:rgb(52, 73, 94);">JavaScript 有一种特殊的运行机制，称为事件循环，它允许 JavaScript 引擎在单线程环境中执行异步操作。</font>

**<font style="color:rgb(52, 73, 94);">事件循环的要点</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">调用栈</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">所有同步任务都在调用栈中执行，它们是阻塞的，必须等待当前任务完成后才能执行下一个任务。</font>
2. **<font style="color:rgb(52, 73, 94);">事件队列</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">异步任务（比如回调函数、Promises、setTimeout 等）会被放入事件队列中，等待被调用。</font>
3. **<font style="color:rgb(52, 73, 94);">事件循环检查</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件循环会不断检查调用栈是否清空。一旦调用栈清空，事件循环就会从事件队列中取出任务，放入调用栈中执行。</font>
4. **<font style="color:rgb(52, 73, 94);">宏任务与微任务</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件队列分为宏任务（如 setTimeout、setInterval、I/O、UI渲染）和微任务（如 Promises、MutationObserver）。</font>
    - <font style="color:rgb(52, 73, 94);">微任务在当前执行栈执行完毕之后，宏任务之前执行。</font>

### <font style="color:rgb(52, 73, 94);">宏任务和微任务的区别</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 的异步编程中，任务被分为两类：宏任务和微任务。</font>

1. **<font style="color:rgb(52, 73, 94);">宏任务（Macro Tasks）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这些是较重的任务，通常会导致 JavaScript 运行环境yield（让出）控制权。</font>
    - <font style="color:rgb(52, 73, 94);">例如：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setTimeout</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setInterval</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">I/O</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">UI渲染</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. **<font style="color:rgb(52, 73, 94);">微任务（Micro Tasks）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">这些是较轻的任务，会在当前执行栈清空之后，下一次事件循环开始之前执行。</font>
    - <font style="color:rgb(52, 73, 94);">例如：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Promise</font>`<font style="color:rgb(52, 73, 94);"> 回调、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">MutationObserver</font>`<font style="color:rgb(52, 73, 94);">。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">执行时机</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">宏任务</font>**<font style="color:rgb(52, 73, 94);">：当一个宏任务执行完毕后，会检查微任务队列，将所有微任务执行完后，才会去执行下一个宏任务。</font>
    - **<font style="color:rgb(52, 73, 94);">微任务</font>**<font style="color:rgb(52, 73, 94);">：微任务总是会在下一个宏任务执行之前执行。</font>
+ **<font style="color:rgb(52, 73, 94);">执行顺序</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">微任务的执行顺序是先进先出（FIFO），它们会按照添加的顺序执行。</font>
    - <font style="color:rgb(52, 73, 94);">宏任务的执行顺序也是先进先出，但它们可能会被浏览器重新调度。</font>

### <font style="color:rgb(52, 73, 94);">什么是Promise, Promise的常用方法有哪些</font>
<font style="color:rgb(52, 73, 94);">Promise 是 JavaScript 中用于异步编程的一种解决方案，它代表了一个异步操作的最终完成或失败。Promise 提供了一种更加优雅的方式来处理异步操作，避免了回调地狱。</font>

**<font style="color:rgb(52, 73, 94);">Promise 的状态</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">一个 Promise 有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。</font>

**<font style="color:rgb(52, 73, 94);">Promise 的常用方法</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">Promise.prototype.then()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于指定 promise 成功后的处理函数。</font>
2. **<font style="color:rgb(52, 73, 94);">Promise.prototype.catch()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于指定 promise 失败后的处理函数。</font>
3. **<font style="color:rgb(52, 73, 94);">Promise.prototype.finally()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">无论 promise 成功还是失败，都会执行的函数。</font>
4. **<font style="color:rgb(52, 73, 94);">Promise.all()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于将多个 promise 实例合成一个 promise，只有当所有 promise 都成功时，才解析。</font>
5. **<font style="color:rgb(52, 73, 94);">Promise.race()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">用于将多个 promise 实例合成一个 promise，只要有一个 promise 解析，合成的 promise 就解析。</font>
6. **<font style="color:rgb(52, 73, 94);">Promise.resolve()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">返回一个已解析的 promise。</font>
7. **<font style="color:rgb(52, 73, 94);">Promise.reject()</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">返回一个已拒绝的 promise。</font>

### <font style="color:rgb(52, 73, 94);">async关键字和await关键字的作用</font>
<font style="color:rgb(52, 73, 94);">这两个关键字是 ES2017 引入的，它们建立在 Promises 之上，使得异步代码看起来更像是同步代码，从而简化异步编程。</font>

**<font style="color:rgb(52, 73, 94);">async 关键字</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 用于声明一个异步函数，这意味着这个函数总是返回一个 Promise 对象。</font>
+ <font style="color:rgb(52, 73, 94);">如果函数正常执行结束，则 Promise 将被成功解析（resolved）。</font>
+ <font style="color:rgb(52, 73, 94);">如果函数中抛出错误，则 Promise 将被拒绝（rejected）。</font>

**<font style="color:rgb(52, 73, 94);">await 关键字</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">await</font>`<font style="color:rgb(52, 73, 94);"> 只能在 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 函数内部使用。</font>
+ <font style="color:rgb(52, 73, 94);">它用于等待一个 Promise 完成，并且在完成之前暂停 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">async</font>`<font style="color:rgb(52, 73, 94);"> 函数的执行。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">await</font>`<font style="color:rgb(52, 73, 94);"> 后面通常跟着一个异步操作，它会暂停代码执行直到 Promise 解析完成。</font>

### <font style="color:rgb(52, 73, 94);">proxy和Object.defineProperty的区别</font>
**<font style="color:rgb(52, 73, 94);">Object.defineProperty</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">它用于在对象上定义或修改属性，可以控制属性的描述符，如是否可写、是否可枚举、是否可配置等。</font>
+ <font style="color:rgb(52, 73, 94);">它只能定义或修改对象的单个属性。</font>

**<font style="color:rgb(52, 73, 94);">Proxy</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);"> 用于创建一个对象的代理，从而在访问对象的属性或方法时可以拦截和自定义操作。</font>
+ <font style="color:rgb(52, 73, 94);">它可以用来拦截对象的各种操作，包括属性访问、赋值、枚举、函数调用等。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);"> 可以针对整个对象，而不仅仅是单个属性。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">功能范围</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.defineProperty</font>`<font style="color:rgb(52, 73, 94);"> 主要用于定义或修改属性的特性。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);"> 用于创建一个对象的代理，可以拦截和自定义对象操作。</font>
2. **<font style="color:rgb(52, 73, 94);">拦截能力</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.defineProperty</font>`<font style="color:rgb(52, 73, 94);"> 无法拦截对属性的操作。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);"> 可以拦截几乎所有类型的操作。</font>
3. **<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">当需要定义或修改属性的描述符时，可以使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.defineProperty</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - <font style="color:rgb(52, 73, 94);">当需要对对象的操作进行更复杂的拦截和自定义时，可以使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">Map和普通对象、WeakMap的区别？</font>
**<font style="color:rgb(52, 73, 94);">Map</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Map</font>`<font style="color:rgb(52, 73, 94);"> 是 ES6 引入的一种新的数据结构，它存储键值对。</font>
+ <font style="color:rgb(52, 73, 94);">可以记住原始插入顺序，可以任意类型作为键。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Map</font>`<font style="color:rgb(52, 73, 94);"> 是 iterable 的，可以使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...of</font>`<font style="color:rgb(52, 73, 94);"> 循环遍历。</font>

**<font style="color:rgb(52, 73, 94);">普通对象</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">普通对象通常用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">{}</font>`<font style="color:rgb(52, 73, 94);"> 定义，也可以使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">new Object()</font>`<font style="color:rgb(52, 73, 94);">。</font>
+ <font style="color:rgb(52, 73, 94);">只能使用字符串或符号作为键（属性名）。</font>
+ <font style="color:rgb(52, 73, 94);">不保证属性的顺序。</font>

**<font style="color:rgb(52, 73, 94);">WeakMap</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 也是 ES6 引入的，它存储键值对，但键只能是对象引用。</font>
+ <font style="color:rgb(52, 73, 94);">它的键是弱引用，不影响垃圾回收机制，当键的对象没有其他引用时，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 会自动被垃圾回收。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 不可迭代，无法列出所有的键或值。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">键的类型</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Map</font>`<font style="color:rgb(52, 73, 94);"> 可以有任何类型的键。</font>
    - <font style="color:rgb(52, 73, 94);">普通对象的键只能是字符串或符号。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 的键只能是对象引用。</font>
2. **<font style="color:rgb(52, 73, 94);">内存占用</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Map</font>`<font style="color:rgb(52, 73, 94);"> 和普通对象都会阻止垃圾回收其键和值。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 的键是弱引用，键的对象可以被垃圾回收。</font>
3. **<font style="color:rgb(52, 73, 94);">迭代能力</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Map</font>`<font style="color:rgb(52, 73, 94);"> 是可迭代的，可以被 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...of</font>`<font style="color:rgb(52, 73, 94);"> 循环遍历。</font>
    - <font style="color:rgb(52, 73, 94);">普通对象可以通过 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.keys()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.values()</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.entries()</font>`<font style="color:rgb(52, 73, 94);"> 进行迭代。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">WeakMap</font>`<font style="color:rgb(52, 73, 94);"> 不可迭代。</font>

### <font style="color:rgb(52, 73, 94);">for、forEach、map的区别/ for...in、for...of的区别</font>
`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for</font>**`**<font style="color:rgb(52, 73, 94);"> 循环</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">最基础的循环语句，适用于所有类型的迭代场景。</font>
+ <font style="color:rgb(52, 73, 94);">可以对数组或对象进行迭代，但需要手动设置迭代变量和迭代逻辑。</font>

`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">forEach</font>**`**<font style="color:rgb(52, 73, 94);"> 方法</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">是数组的方法之一，用于对数组的每个元素执行一次提供的函数。</font>
+ <font style="color:rgb(52, 73, 94);">不能使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">break</font>`<font style="color:rgb(52, 73, 94);"> 或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">continue</font>`<font style="color:rgb(52, 73, 94);"> 来提前退出循环。</font>

`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">map</font>**`**<font style="color:rgb(52, 73, 94);"> 方法</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">也是数组的方法之一，用于将数组中的每个元素经过函数处理后生成一个新数组。</font>
+ <font style="color:rgb(52, 73, 94);">返回一个新数组，原数组不会被改变。</font>

`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...in</font>**`**<font style="color:rgb(52, 73, 94);"> 循环</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">用于遍历对象的属性。</font>
+ <font style="color:rgb(52, 73, 94);">按属性名的字母顺序遍历。</font>

`**<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...of</font>**`**<font style="color:rgb(52, 73, 94);"> 循环</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">ES6 新增的语法，用于遍历可迭代对象（如数组、字符串）。</font>
+ <font style="color:rgb(52, 73, 94);">直接遍历数组的值，不访问索引或对象的键。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for</font>`<font style="color:rgb(52, 73, 94);"> 循环最通用但需要手动设置迭代，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">forEach</font>`<font style="color:rgb(52, 73, 94);"> 用于执行数组元素的函数，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">map</font>`<font style="color:rgb(52, 73, 94);"> 用于生成新数组；</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...in</font>`<font style="color:rgb(52, 73, 94);"> 用于遍历对象属性，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">for...of</font>`<font style="color:rgb(52, 73, 94);"> 用于遍历可迭代对象的值。</font>

### <font style="color:rgb(52, 73, 94);">说一说你对CommonJS和ES6模块化的理解</font>
<font style="color:rgb(52, 73, 94);">在 JavaScript 中，模块化是一种代码组织方式，它允许我们将代码分割成独立、可重用的模块。</font>

**<font style="color:rgb(52, 73, 94);">CommonJS 模块</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">CommonJS 是 Node.js 使用的模块系统。</font>
+ <font style="color:rgb(52, 73, 94);">它基于同步加载，每个模块都是一个单独的作用域。</font>
+ <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">require</font>`<font style="color:rgb(52, 73, 94);"> 方法来加载模块，使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">module.exports</font>`<font style="color:rgb(52, 73, 94);"> 来导出模块的接口。</font>

**<font style="color:rgb(52, 73, 94);">ES6 模块</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">ES6 模块是 JavaScript 语言标准的模块系统。</font>
+ <font style="color:rgb(52, 73, 94);">它基于静态加载，编译时就确定了模块的依赖关系。</font>
+ <font style="color:rgb(52, 73, 94);">使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">import</font>`<font style="color:rgb(52, 73, 94);"> 语句来导入需要的模块成员，使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">export</font>`<font style="color:rgb(52, 73, 94);"> 语句来导出模块成员。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">加载方式</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">CommonJS 是运行时加载，可以有条件地加载模块。</font>
    - <font style="color:rgb(52, 73, 94);">ES6 模块是编译时加载，静态分析依赖关系。</font>
2. **<font style="color:rgb(52, 73, 94);">运行环境</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">CommonJS 主要用于 Node.js 服务器环境。</font>
    - <font style="color:rgb(52, 73, 94);">ES6 模块既可以用于浏览器环境，也可以用于 Node.js（较新版本）。</font>
3. **<font style="color:rgb(52, 73, 94);">语法</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">CommonJS 使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">require</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">module.exports</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - <font style="color:rgb(52, 73, 94);">ES6 模块使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">import</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">export</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">事件流的过程</font>
<font style="color:rgb(52, 73, 94);">在 Web 开发中，事件流是一个描述 DOM 事件在页面中传播过程的概念。主要有两种事件流模型：冒泡和捕获。</font>

**<font style="color:rgb(52, 73, 94);">事件冒泡</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">事件开始时由最具体的元素（事件的实际目标）接收，然后逐级向上传播到较为不具体的节点（如文档根节点）。</font>

**<font style="color:rgb(52, 73, 94);">事件捕获</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">与冒泡相反，事件从最不具体的节点（文档根节点）开始捕获，直到达到最具体的节点（事件的目标）。</font>

**<font style="color:rgb(52, 73, 94);">事件处理的三个阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">捕获阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件从文档根节点开始，向下传播到目标元素。</font>
2. **<font style="color:rgb(52, 73, 94);">目标阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件到达目标元素，触发该元素的事件处理程序。</font>
3. **<font style="color:rgb(52, 73, 94);">冒泡阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件从目标元素回传到文档根节点。</font>

**<font style="color:rgb(52, 73, 94);">事件流的控制</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">事件冒泡</font>**<font style="color:rgb(52, 73, 94);">：可以通过 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">event.stopPropagation()</font>`<font style="color:rgb(52, 73, 94);"> 方法阻止事件进一步冒泡。</font>
+ **<font style="color:rgb(52, 73, 94);">事件捕获</font>**<font style="color:rgb(52, 73, 94);">：可以通过设置 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">addEventListener</font>`<font style="color:rgb(52, 73, 94);"> 的第三个参数为 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">true</font>`<font style="color:rgb(52, 73, 94);"> 来启用捕获阶段的事件处理。</font>

**<font style="color:rgb(52, 73, 94);">现在的浏览器默认行为</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">大多数现代浏览器的默认行为是先冒泡，再捕获，但可以通过 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">addEventListener</font>`<font style="color:rgb(52, 73, 94);"> 方法的第三个参数来指定。</font>

### <font style="color:rgb(52, 73, 94);">什么是事件委托</font>
<font style="color:rgb(52, 73, 94);">事件委托是一种在父元素上设置事件监听器，来管理多个子元素或未来添加的元素的事件处理方式。</font>

**<font style="color:rgb(52, 73, 94);">事件委托的要点</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">利用冒泡原理</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">事件会从触发它的元素开始冒泡，通过祖先元素传递到根。</font>
    - <font style="color:rgb(52, 73, 94);">在父元素上设置监听器可以捕获到在子元素上触发的事件。</font>
2. **<font style="color:rgb(52, 73, 94);">性能优化</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">相比于在每个子元素上分别设置监听器，事件委托可以减少内存消耗和提高性能。</font>
3. **<font style="color:rgb(52, 73, 94);">动态元素管理</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - <font style="color:rgb(52, 73, 94);">对于动态添加的元素，即使它们在设置监听器之后被添加到DOM中，事件委托依然有效。</font>

### <font style="color:rgb(52, 73, 94);">e.target和e.currentTarget的区别？</font>
1. **<font style="color:rgb(52, 73, 94);">触发事件的元素</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.target</font>`<font style="color:rgb(52, 73, 94);"> 指的是触发事件的那个元素。比如，在一个嵌套的元素结构中，如果你点击了一个子元素，那么 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.target</font>`<font style="color:rgb(52, 73, 94);"> 就是这个被点击的子元素。</font>
2. **<font style="color:rgb(52, 73, 94);">绑定事件的元素</font>**<font style="color:rgb(52, 73, 94);">：而 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.currentTarget</font>`<font style="color:rgb(52, 73, 94);"> 则是指事件处理器绑定的那个元素。也就是说，你的事件监听器是绑定在哪个元素上，那么 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.currentTarget</font>`<font style="color:rgb(52, 73, 94);"> 就是那个元素。即使事件是在一个子元素上触发的，但事件处理器是绑定在父元素上的，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.currentTarget</font>`<font style="color:rgb(52, 73, 94);"> 也还是父元素。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.target</font>`<font style="color:rgb(52, 73, 94);"> 是事件的实际触发点，而 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">e.currentTarget</font>`<font style="color:rgb(52, 73, 94);"> 是事件监听被设置的地方。在没有事件冒泡的情况下，这两者是相同的，但如果有冒泡，它们就可能不同了。</font>

### <font style="color:rgb(52, 73, 94);">前端性能优化从哪些方面考虑</font>
1. **<font style="color:rgb(52, 73, 94);">减少HTTP请求</font>**<font style="color:rgb(52, 73, 94);">：合并文件、使用雪碧图等方法减少请求次数。</font>
2. **<font style="color:rgb(52, 73, 94);">利用缓存</font>**<font style="color:rgb(52, 73, 94);">：使用浏览器缓存、服务端缓存，减少重复请求。</font>
3. **<font style="color:rgb(52, 73, 94);">压缩资源</font>**<font style="color:rgb(52, 73, 94);">：压缩CSS、JavaScript和HTML文件，减少文件大小。</font>
4. **<font style="color:rgb(52, 73, 94);">异步加载</font>**<font style="color:rgb(52, 73, 94);">：用异步方式加载JavaScript，避免阻塞页面渲染。</font>
5. **<font style="color:rgb(52, 73, 94);">延迟加载</font>**<font style="color:rgb(52, 73, 94);">：对不立即需要的资源，可以延迟加载，比如图片懒加载。</font>
6. **<font style="color:rgb(52, 73, 94);">代码分割</font>**<font style="color:rgb(52, 73, 94);">：按需加载，把代码分割成小块，只加载用户需要的部分。</font>
7. **<font style="color:rgb(52, 73, 94);">优化CSS选择器</font>**<font style="color:rgb(52, 73, 94);">：编写高效的CSS选择器，避免复杂的选择器影响性能。</font>
8. **<font style="color:rgb(52, 73, 94);">减少重绘和重排</font>**<font style="color:rgb(52, 73, 94);">：优化DOM操作，减少页面的重绘和重排。</font>
9. **<font style="color:rgb(52, 73, 94);">使用CDN</font>**<font style="color:rgb(52, 73, 94);">：通过内容分发网络加速资源加载。</font>
10. **<font style="color:rgb(52, 73, 94);">优化图片</font>**<font style="color:rgb(52, 73, 94);">：使用适合的图片格式和大小，比如WebP格式，减少图片文件的体积。</font>

### <font style="color:rgb(52, 73, 94);">简单说下axios，为啥用axios，axios和fetch区别</font>
1. **<font style="color:rgb(52, 73, 94);">什么是axios</font>**<font style="color:rgb(52, 73, 94);">：axios是一个基于Promise的HTTP客户端，用于浏览器和node.js，它提供了一个简单的API来执行HTTP请求。</font>
2. **<font style="color:rgb(52, 73, 94);">为什么用axios</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">易用性</font>**<font style="color:rgb(52, 73, 94);">：它的API直观，使用起来很方便。</font>
    - **<font style="color:rgb(52, 73, 94);">兼容性</font>**<font style="color:rgb(52, 73, 94);">：支持所有现代浏览器，包括IE9及以上。</font>
    - **<font style="color:rgb(52, 73, 94);">功能丰富</font>**<font style="color:rgb(52, 73, 94);">：支持请求和响应的拦截，转换数据格式，自动转换JSON数据等。</font>
    - **<font style="color:rgb(52, 73, 94);">基于Promise</font>**<font style="color:rgb(52, 73, 94);">：支持ES6的Promise，使得异步处理更加优雅。</font>
3. **<font style="color:rgb(52, 73, 94);">axios和fetch的区别</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">返回值</font>**<font style="color:rgb(52, 73, 94);">：axios返回的是一个Promise对象，而fetch返回的是一个Response对象，需要再次调用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.json()</font>`<font style="color:rgb(52, 73, 94);">之类的方法来解析数据。</font>
    - **<font style="color:rgb(52, 73, 94);">错误处理</font>**<font style="color:rgb(52, 73, 94);">：axios在请求失败时会抛出一个错误，而fetch不会，fetch只有在网络故障时才会失败，其他如404或500错误都会解析为成功的响应。</font>
    - **<font style="color:rgb(52, 73, 94);">使用方便</font>**<font style="color:rgb(52, 73, 94);">：axios可以直接设置请求头、请求体等，而fetch需要手动设置。</font>
    - **<font style="color:rgb(52, 73, 94);">拦截器</font>**<font style="color:rgb(52, 73, 94);">：axios有强大的拦截器功能，可以拦截请求和响应，fetch则需要手动实现拦截逻辑。</font>

<font style="color:rgb(52, 73, 94);">总的来说，axios就像是给fetch加了一个“瑞士军刀”，它提供了更多便捷的特性和优雅的错误处理方式，让HTTP请求变得更加简单。</font>

### <font style="color:rgb(52, 73, 94);">webpack loader和plugin的不同，用过哪些loader和plugin</font>
<font style="color:rgb(52, 73, 94);">loader和plugin都是webpack中用来扩展其功能的工具，但它们的用途和工作方式不同。</font>

1. **<font style="color:rgb(52, 73, 94);">Loader</font>**<font style="color:rgb(52, 73, 94);">：它主要用于转换某些类型的模块，比如将Sass转换为CSS，或者将图片转换为DataURL。loader是在import或者加载模块的时候预处理文件的，也就是说，它可以操作文件内容。比如，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">babel-loader</font>`<font style="color:rgb(52, 73, 94);">可以把ES6代码转换为ES5代码。</font>
2. **<font style="color:rgb(52, 73, 94);">Plugin</font>**<font style="color:rgb(52, 73, 94);">：它则用于webpack构建过程的其他事情，比如优化打包体积、资源管理或者注入环境变量等。plugin可以在webpack的整个生命周期中插入钩子，执行更广泛的任务，比如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HtmlWebpackPlugin</font>`<font style="color:rgb(52, 73, 94);">可以自动生成HTML文件，并引入打包后的JavaScript和CSS文件。</font>

<font style="color:rgb(52, 73, 94);">我用过的loader包括</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">babel-loader</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">css-loader</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">style-loader</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">url-loader</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">file-loader</font>`<font style="color:rgb(52, 73, 94);">等，这些都是处理JavaScript、CSS和图片资源的常用loader。</font>

<font style="color:rgb(52, 73, 94);">用过的plugin包括</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">HtmlWebpackPlugin</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">CleanWebpackPlugin</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">MiniCssExtractPlugin</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">TerserPlugin</font>`<font style="color:rgb(52, 73, 94);">等，这些plugin分别用于自动生成HTML文件、清理构建输出、提取CSS文件以及压缩JavaScript代码。</font>

### <font style="color:rgb(52, 73, 94);">tree shaking是什么</font>
1. **<font style="color:rgb(52, 73, 94);">概念</font>**<font style="color:rgb(52, 73, 94);">：Tree shaking是一种技术，它利用了ES6模块的静态结构，通过Webpack等打包工具在编译时移除代码中未引用的部分，从而减少最终打包文件的大小。</font>
2. **<font style="color:rgb(52, 73, 94);">原理</font>**<font style="color:rgb(52, 73, 94);">：它的核心原理是在代码中找出那些没有被引用的函数或变量，然后通过语法分析将它们从最终的打包文件中排除。</font>
3. **<font style="color:rgb(52, 73, 94);">条件</font>**<font style="color:rgb(52, 73, 94);">：要实现tree shaking，代码需要满足以下条件：</font>
    - <font style="color:rgb(52, 73, 94);">使用ES6模块导入导出语法。</font>
    - <font style="color:rgb(52, 73, 94);">不能有副作用，也就是说，代码中不能有无法跟踪的引用。</font>
4. **<font style="color:rgb(52, 73, 94);">好处</font>**<font style="color:rgb(52, 73, 94);">：通过tree shaking，我们可以移除那些未使用的代码，从而减少应用的加载时间和提升性能。</font>
5. **<font style="color:rgb(52, 73, 94);">实践</font>**<font style="color:rgb(52, 73, 94);">：在Webpack中，我们可以通过配置</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">mode: 'production'</font>`<font style="color:rgb(52, 73, 94);">和相应的插件来实现tree shaking。</font>

### <font style="color:rgb(52, 73, 94);">vite和webpack的对比</font>
1. **<font style="color:rgb(52, 73, 94);">开发体验</font>**<font style="color:rgb(52, 73, 94);">：Vite的开发服务器启动快，因为它利用了浏览器原生的ES模块特性，不需要打包整个项目就能提供服务。Webpack启动相对慢，因为它需要打包所有模块。</font>
2. **<font style="color:rgb(52, 73, 94);">热更新</font>**<font style="color:rgb(52, 73, 94);">：Vite的热更新非常快，因为它只更新改动的模块。Webpack的热更新也不错，但随着项目增大，更新速度可能会变慢。</font>
3. **<font style="color:rgb(52, 73, 94);">配置</font>**<font style="color:rgb(52, 73, 94);">：Vite的配置更简单，它有很多内置功能，不需要太多配置就能开始工作。Webpack的配置更复杂，需要设置Loader和Plugin等。</font>
4. **<font style="color:rgb(52, 73, 94);">生产构建</font>**<font style="color:rgb(52, 73, 94);">：Webpack在生产构建方面更成熟，提供了很多优化和插件。Vite虽然也支持生产构建，但相对来说还在发展阶段，可能在一些高级特性上不如Webpack成熟。</font>
5. **<font style="color:rgb(52, 73, 94);">生态系统</font>**<font style="color:rgb(52, 73, 94);">：Webpack的生态系统更丰富，有大量的Loader和Plugin可以选择。Vite的生态还在建设中，但发展迅速，插件数量在增加。</font>
6. **<font style="color:rgb(52, 73, 94);">性能</font>**<font style="color:rgb(52, 73, 94);">：Vite在开发环境下性能更好，因为它不需要打包整个应用。Webpack在生产环境下通过代码分割、压缩等优化手段，可以提供很好的性能。</font>
7. **<font style="color:rgb(52, 73, 94);">语言支持</font>**<font style="color:rgb(52, 73, 94);">：Vite对TypeScript和JSX等现代JavaScript特性有更好的支持。Webpack虽然也支持，但可能需要额外的配置。</font>

### <font style="color:rgb(52, 73, 94);">webpack/vite打包过程</font>
**<font style="color:rgb(52, 73, 94);">Webpack打包过程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">初始化</font>**<font style="color:rgb(52, 73, 94);">：启动打包流程，读取配置文件。</font>
2. **<font style="color:rgb(52, 73, 94);">编译</font>**<font style="color:rgb(52, 73, 94);">：Webpack从入口文件开始，递归解析所有依赖的模块。</font>
3. **<font style="color:rgb(52, 73, 94);">模块转换</font>**<font style="color:rgb(52, 73, 94);">：使用Loaders对不同类型的模块进行转换，比如将Sass转为CSS，将ES6转为ES5。</font>
4. **<font style="color:rgb(52, 73, 94);">模块合并</font>**<font style="color:rgb(52, 73, 94);">：将所有模块合并成一个或多个Bundle。</font>
5. **<font style="color:rgb(52, 73, 94);">优化</font>**<font style="color:rgb(52, 73, 94);">：进行代码压缩、分割代码、去除无效模块等优化操作。</font>
6. **<font style="color:rgb(52, 73, 94);">输出</font>**<font style="color:rgb(52, 73, 94);">：将最终生成的Bundle输出到指定目录。</font>

**<font style="color:rgb(52, 73, 94);">Vite打包过程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">开发服务器</font>**<font style="color:rgb(52, 73, 94);">：Vite在开发环境下不打包，而是利用浏览器原生ES模块特性，快速启动一个开发服务器。</font>
2. **<font style="color:rgb(52, 73, 94);">依赖预构建</font>**<font style="color:rgb(52, 73, 94);">：Vite使用esbuild对依赖进行预构建，这是非常快的。</font>
3. **<font style="color:rgb(52, 73, 94);">按需编译</font>**<font style="color:rgb(52, 73, 94);">：Vite在浏览器请求时，按需编译源码，只处理实际用到的模块。</font>
4. **<font style="color:rgb(52, 73, 94);">热更新</font>**<font style="color:rgb(52, 73, 94);">：Vite支持快速的模块热替换（HMR），开发者可以立即看到更改效果。</font>
5. **<font style="color:rgb(52, 73, 94);">生产构建</font>**<font style="color:rgb(52, 73, 94);">：在生产环境下，Vite使用Rollup进行打包，生成优化过的静态资源。</font>

### <font style="color:rgb(52, 73, 94);">MVVM模式和MVC模式有什么区别</font>
**<font style="color:rgb(52, 73, 94);">MVC模式</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">Model（模型）</font>**<font style="color:rgb(52, 73, 94);">：负责业务逻辑和数据存取。</font>
2. **<font style="color:rgb(52, 73, 94);">View（视图）</font>**<font style="color:rgb(52, 73, 94);">：负责显示数据，不包含逻辑。</font>
3. **<font style="color:rgb(52, 73, 94);">Controller（控制器）</font>**<font style="color:rgb(52, 73, 94);">：作为中间人，接收用户输入，更新Model和View。</font>

<font style="color:rgb(52, 73, 94);">MVC就像是一个流水线，View展示数据，用户的操作通过Controller来处理，Controller再更新Model，Model变化了，View就跟着变。</font>

**<font style="color:rgb(52, 73, 94);">MVVM模式</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">Model（模型）</font>**<font style="color:rgb(52, 73, 94);">：和MVC中的Model一样，负责业务逻辑和数据。</font>
2. **<font style="color:rgb(52, 73, 94);">View（视图）</font>**<font style="color:rgb(52, 73, 94);">：同样只负责显示数据。</font>
3. **<font style="color:rgb(52, 73, 94);">ViewModel（视图模型）</font>**<font style="color:rgb(52, 73, 94);">：这是MVVM新增的部分，它充当View和Model之间的桥梁，包含业务逻辑，View的变化会通过数据绑定自动更新到ViewModel，ViewModel的变化也会自动反映到View。</font>

<font style="color:rgb(52, 73, 94);">MVVM就像是双向高速公路，View和ViewModel之间有数据双向绑定，ViewModel会监听Model的变化并更新View，View的变动也会通过ViewModel反馈给Model。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">中间层</font>**<font style="color:rgb(52, 73, 94);">：MVC有Controller，MVVM有ViewModel。</font>
2. **<font style="color:rgb(52, 73, 94);">数据绑定</font>**<font style="color:rgb(52, 73, 94);">：MVVM支持数据双向绑定，MVC通常是单向的。</font>
3. **<font style="color:rgb(52, 73, 94);">关注点分离</font>**<font style="color:rgb(52, 73, 94);">：MVVM通过ViewModel让UI逻辑和业务逻辑更清晰地分离。</font>

### <font style="color:rgb(52, 73, 94);">Vue2 和 Vue3 的区别有哪些？</font>
1. **<font style="color:rgb(52, 73, 94);">性能提升</font>**<font style="color:rgb(52, 73, 94);">：Vue3 在性能上进行了优化，比如它的虚拟 DOM 重写、静态树提升和基于 Proxy 的响应式系统，这些都让 Vue3 比 Vue2 快了1.2到2倍 。</font>
2. **<font style="color:rgb(52, 73, 94);">Composition API</font>**<font style="color:rgb(52, 73, 94);">：Vue3 引入了组合式 API，这使得组件逻辑更加模块化，代码复用更简单，尤其是在处理复杂组件时 。</font>
3. **<font style="color:rgb(52, 73, 94);">更好的 TypeScript 支持</font>**<font style="color:rgb(52, 73, 94);">：Vue3 的源码使用 TypeScript 重构，提供了更好的类型支持和更清晰的类型定义 。</font>
4. **<font style="color:rgb(52, 73, 94);">新的生命周期钩子</font>**<font style="color:rgb(52, 73, 94);">：Vue3 改进了生命周期钩子，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onBeforeMount</font>`<font style="color:rgb(52, 73, 94);"> 替代了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeMount</font>`<font style="color:rgb(52, 73, 94);">，让代码更清晰 。</font>
5. **<font style="color:rgb(52, 73, 94);">全局 API 的变化</font>**<font style="color:rgb(52, 73, 94);">：Vue3 移除了一些全局 API，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$children</font>`<font style="color:rgb(52, 73, 94);">，并改进了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$attrs</font>`<font style="color:rgb(52, 73, 94);"> 和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$listeners</font>`<font style="color:rgb(52, 73, 94);"> 的处理方式 。</font>
6. **<font style="color:rgb(52, 73, 94);">模板和编译器的改进</font>**<font style="color:rgb(52, 73, 94);">：Vue3 允许模板中有多个根节点，并且改进了编译器，增加了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">v-memo</font>`<font style="color:rgb(52, 73, 94);"> 指令用于缓存渲染列表 。</font>
7. **<font style="color:rgb(52, 73, 94);">更小的打包体积</font>**<font style="color:rgb(52, 73, 94);">：Vue3 通过 Tree-shaking 等技术减小了最终打包的体积 。</font>
8. **<font style="color:rgb(52, 73, 94);">新增特性</font>**<font style="color:rgb(52, 73, 94);">：Vue3 新增了一些特性，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Teleport</font>`<font style="color:rgb(52, 73, 94);"> 组件和 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Suspense</font>`<font style="color:rgb(52, 73, 94);">，为开发者提供了更多的灵活性 。</font>

### <font style="color:rgb(52, 73, 94);">Vue和React的区别</font>
1. **<font style="color:rgb(52, 73, 94);">设计哲学</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：推崇易用性和简洁性，提供了更多开箱即用的功能，比如模板语法、数据绑定等。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：更注重灵活性和可扩展性，推崇"一切皆组件"的理念，开发者可以自由组合。</font>
2. **<font style="color:rgb(52, 73, 94);">模板与JSX</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：使用基于HTML的模板语法，易于理解和上手。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：使用JSX语法，它是一种看起来像HTML的JavaScript语法扩展。</font>
3. **<font style="color:rgb(52, 73, 94);">响应式系统</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：使用依赖收集的机制，通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.defineProperty</font>`<font style="color:rgb(52, 73, 94);">实现数据响应。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useState</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useEffect</font>`<font style="color:rgb(52, 73, 94);">钩子来处理状态和副作用，依赖于一个高效的虚拟DOM算法。</font>
4. **<font style="color:rgb(52, 73, 94);">组件通信</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：有</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">props</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">events</font>`<font style="color:rgb(52, 73, 94);">来实现父子通信，以及</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">provide</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">inject</font>`<font style="color:rgb(52, 73, 94);">来实现跨组件通信。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：有</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">props</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">context</font>`<font style="color:rgb(52, 73, 94);">来实现通信，也支持自定义上下文。</font>
5. **<font style="color:rgb(52, 73, 94);">构建工具</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：通常与Vue CLI配合使用，提供一键式项目脚手架。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：通常与Create React App配合使用，同样提供快速的项目启动。</font>
6. **<font style="color:rgb(52, 73, 94);">生态系统</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">Vue</font>**<font style="color:rgb(52, 73, 94);">：有Vuex用于状态管理，Vue Router用于路由。</font>
    - **<font style="color:rgb(52, 73, 94);">React</font>**<font style="color:rgb(52, 73, 94);">：有Redux用于状态管理，React Router用于路由。</font>

### <font style="color:rgb(52, 73, 94);">ref 和 reactive 区别?</font>
1. **<font style="color:rgb(52, 73, 94);">ref</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ref</font>`<font style="color:rgb(52, 73, 94);">用于创建一个响应式的基本类型值，比如字符串、数字。</font>
    - <font style="color:rgb(52, 73, 94);">它返回一个带有</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.value</font>`<font style="color:rgb(52, 73, 94);">属性的响应式对象，你需要通过这个属性来访问或修改值。</font>
    - <font style="color:rgb(52, 73, 94);">用于处理单个数据项。</font>
2. **<font style="color:rgb(52, 73, 94);">reactive</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">reactive</font>`<font style="color:rgb(52, 73, 94);">用于创建一个响应式的复杂类型值，比如对象或数组。</font>
    - <font style="color:rgb(52, 73, 94);">它直接返回一个响应式的对象，不需要通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.value</font>`<font style="color:rgb(52, 73, 94);">属性访问。</font>
    - <font style="color:rgb(52, 73, 94);">用于处理多个属性或嵌套对象。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ref</font>`<font style="color:rgb(52, 73, 94);">适合用于基本数据类型，而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">reactive</font>`<font style="color:rgb(52, 73, 94);">适合用于对象或数组。在模板中使用时，Vue会自动解包</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ref</font>`<font style="color:rgb(52, 73, 94);">，所以不需要担心</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.value</font>`<font style="color:rgb(52, 73, 94);">的问题。</font>

### <font style="color:rgb(52, 73, 94);">watch 和 watchEffect的区别</font>
1. **<font style="color:rgb(52, 73, 94);">watch</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watch</font>`<font style="color:rgb(52, 73, 94);">用于观察特定的响应式引用或响应式对象，并在它们变化时执行回调函数。</font>
    - <font style="color:rgb(52, 73, 94);">它可以精确指定要观察的源，并且可以接收变化的值和旧值。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watch</font>`<font style="color:rgb(52, 73, 94);">是惰性的，只有当指定的响应式数据变化时，回调函数才会执行。</font>
2. **<font style="color:rgb(52, 73, 94);">watchEffect</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watchEffect</font>`<font style="color:rgb(52, 73, 94);">自动收集依赖并在依赖变化时重新执行回调函数。</font>
    - <font style="color:rgb(52, 73, 94);">它不指定具体要观察的响应式数据，而是自动追踪在回调函数中访问的任何响应式状态。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watchEffect</font>`<font style="color:rgb(52, 73, 94);">是积极的，一旦设置，任何它所依赖的响应式数据变化都会触发回调函数重新执行。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watch</font>`<font style="color:rgb(52, 73, 94);">更精细，适合用在需要响应特定数据变化的场景；而</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">watchEffect</font>`<font style="color:rgb(52, 73, 94);">更通用，适合用在需要执行副作用或依赖多个数据源的场景。</font>

### <font style="color:rgb(52, 73, 94);">Vue2和Vue3生命周期</font>
**<font style="color:rgb(52, 73, 94);">Vue2的生命周期</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">创建阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeCreate</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">created</font>`
2. **<font style="color:rgb(52, 73, 94);">装载阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeMount</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">mounted</font>`
3. **<font style="color:rgb(52, 73, 94);">更新阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeUpdate</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">updated</font>`
4. **<font style="color:rgb(52, 73, 94);">销毁阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeDestroy</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">destroyed</font>`

<font style="color:rgb(52, 73, 94);">Vue2的生命周期钩子比较直观，按照组件的创建、挂载、更新和销毁流程来命名。</font>

**<font style="color:rgb(52, 73, 94);">Vue3的生命周期</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">创建阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setup</font>`<font style="color:rgb(52, 73, 94);"> (新的组合式API的入口点，没有直接对应的Vue2生命周期)</font>
2. **<font style="color:rgb(52, 73, 94);">装载阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeMount</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onMounted</font>`
3. **<font style="color:rgb(52, 73, 94);">更新阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeUpdate</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onUpdated</font>`
4. **<font style="color:rgb(52, 73, 94);">销毁阶段</font>**<font style="color:rgb(52, 73, 94);">：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeUnmount</font>`<font style="color:rgb(52, 73, 94);">, </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onUnmounted</font>`

<font style="color:rgb(52, 73, 94);">Vue3引入了组合式API，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setup</font>`<font style="color:rgb(52, 73, 94);">函数是新的生命周期入口，它在</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeCreate</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">created</font>`<font style="color:rgb(52, 73, 94);">之前执行。其他的生命周期钩子在Vue3中都进行了一定程度的调整，比如加上了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">on</font>`<font style="color:rgb(52, 73, 94);">前缀，使得命名更加清晰。</font>

**<font style="color:rgb(52, 73, 94);">主要区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">Vue3的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setup</font>`<font style="color:rgb(52, 73, 94);">函数是新加入的，它允许使用组合式API来组织组件逻辑。</font>
+ <font style="color:rgb(52, 73, 94);">Vue3的生命周期钩子函数名称更明确，比如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onMounted</font>`<font style="color:rgb(52, 73, 94);">代替了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">mounted</font>`<font style="color:rgb(52, 73, 94);">，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">onUnmounted</font>`<font style="color:rgb(52, 73, 94);">代替了</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">destroyed</font>`<font style="color:rgb(52, 73, 94);">。</font>

### <font style="color:rgb(52, 73, 94);">父子组件生命周期执行顺序</font>
<font style="color:rgb(52, 73, 94);">当</font>**<font style="color:rgb(52, 73, 94);">创建和挂载</font>**<font style="color:rgb(52, 73, 94);">组件时：</font>

1. <font style="color:rgb(52, 73, 94);">父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeCreate</font>`<font style="color:rgb(52, 73, 94);">钩子首先被调用。</font>
2. <font style="color:rgb(52, 73, 94);">然后是父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">created</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. <font style="color:rgb(52, 73, 94);">接着父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeMount</font>`<font style="color:rgb(52, 73, 94);">。</font>
4. <font style="color:rgb(52, 73, 94);">父组件开始挂载，调用子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeCreate</font>`<font style="color:rgb(52, 73, 94);">。</font>
5. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">created</font>`<font style="color:rgb(52, 73, 94);">。</font>
6. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeMount</font>`<font style="color:rgb(52, 73, 94);">。</font>
7. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">mounted</font>`<font style="color:rgb(52, 73, 94);">。</font>
8. <font style="color:rgb(52, 73, 94);">最后是父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">mounted</font>`<font style="color:rgb(52, 73, 94);">。</font>

<font style="color:rgb(52, 73, 94);">当</font>**<font style="color:rgb(52, 73, 94);">更新</font>**<font style="color:rgb(52, 73, 94);">组件时：</font>

1. <font style="color:rgb(52, 73, 94);">父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeUpdate</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeUpdate</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">updated</font>`<font style="color:rgb(52, 73, 94);">。</font>
4. <font style="color:rgb(52, 73, 94);">父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">updated</font>`<font style="color:rgb(52, 73, 94);">。</font>

<font style="color:rgb(52, 73, 94);">当</font>**<font style="color:rgb(52, 73, 94);">销毁</font>**<font style="color:rgb(52, 73, 94);">组件时：</font>

1. <font style="color:rgb(52, 73, 94);">父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeDestroy</font>`<font style="color:rgb(52, 73, 94);">。</font>
2. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">beforeDestroy</font>`<font style="color:rgb(52, 73, 94);">。</font>
3. <font style="color:rgb(52, 73, 94);">子组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">destroyed</font>`<font style="color:rgb(52, 73, 94);">。</font>
4. <font style="color:rgb(52, 73, 94);">父组件的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">destroyed</font>`<font style="color:rgb(52, 73, 94);">。</font>

<font style="color:rgb(52, 73, 94);">简单来说，创建时父组件先初始化，然后轮到子组件，挂载时也是这个顺序。更新和销毁时，子组件的生命周期会先于父组件执行。</font>

### <font style="color:rgb(52, 73, 94);">Vue3的Composition API 相比于2的Options API, 有什么优势吗?</font>
1. **<font style="color:rgb(52, 73, 94);">更好的逻辑复用</font>**<font style="color:rgb(52, 73, 94);">：Composition API通过函数的方式组织代码，可以把相关的逻辑封装在单独的函数里，方便在不同的组件间复用。</font>
2. **<font style="color:rgb(52, 73, 94);">更灵活的代码组织</font>**<font style="color:rgb(52, 73, 94);">：在Vue2中，随着组件功能增多，代码会变得分散，而Vue3的Composition API让组件逻辑更加集中，易于理解和维护。</font>
3. **<font style="color:rgb(52, 73, 94);">更好的TypeScript支持</font>**<font style="color:rgb(52, 73, 94);">：Vue3的Composition API天生与TypeScript集成得更好，提供了更好的类型推断和编辑器支持。</font>
4. **<font style="color:rgb(52, 73, 94);">更小的生产包体积</font>**<font style="color:rgb(52, 73, 94);">：Vue3的Composition API配合</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);"><script setup></font>`<font style="color:rgb(52, 73, 94);">使用，可以减少最终打包体积，因为编译后的代码不需要从实例中代理属性。</font>
5. **<font style="color:rgb(52, 73, 94);">更先进的组件</font>**<font style="color:rgb(52, 73, 94);">：Vue3支持多根节点组件，允许组件模板有多个根节点，这在Vue2中是不支持的。</font>
6. **<font style="color:rgb(52, 73, 94);">更现代的响应式系统</font>**<font style="color:rgb(52, 73, 94);">：Vue3使用Proxy代替了Vue2中的Object.defineProperty，提高了性能，并且响应式系统更加可定制和扩展。</font>
7. **<font style="color:rgb(52, 73, 94);">生命周期钩子作为函数</font>**<font style="color:rgb(52, 73, 94);">：Vue3的Composition API提供了生命周期钩子的函数式写法，使得代码更加模块化和清晰。</font>

### <font style="color:rgb(52, 73, 94);">组件通信有什么方式</font>
1. **<font style="color:rgb(52, 73, 94);">Props和Events</font>**<font style="color:rgb(52, 73, 94);">：父组件通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">props</font>`<font style="color:rgb(52, 73, 94);">向子组件传递数据，子组件通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$emit</font>`<font style="color:rgb(52, 73, 94);">向父组件发送事件。</font>
2. **<font style="color:rgb(52, 73, 94);">Event Bus</font>**<font style="color:rgb(52, 73, 94);">：用一个空的Vue实例作为中央事件总线，组件们可以通过它发射和监听事件。</font>
3. **<font style="color:rgb(52, 73, 94);">Vuex</font>**<font style="color:rgb(52, 73, 94);">：对于复杂应用，用Vuex进行全局状态管理，任何组件都可以派发行动或提交变更来更新状态。</font>
4. **<font style="color:rgb(52, 73, 94);">Provide和Inject</font>**<font style="color:rgb(52, 73, 94);">：Vue提供的一对选项，允许一个祖先组件向其所有子孙组件注入一个依赖，而不论组件层次有多深。</font>
5. **<font style="color:rgb(52, 73, 94);">Vue 3的provide和inject</font>**<font style="color:rgb(52, 73, 94);">：类似于Vue 2，但是更加灵活，可以在任何组件间建立依赖关系。</font>
6. **<font style="color:rgb(52, 73, 94);">Refs</font>**<font style="color:rgb(52, 73, 94);">：通过访问子组件的引用（</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ref</font>`<font style="color:rgb(52, 73, 94);">），可以直接操作子组件的实例或访问其数据。</font>
7. **<font style="color:rgb(52, 73, 94);">$attrs和$listeners</font>**<font style="color:rgb(52, 73, 94);">（现在叫</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$attrs</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">v-on="$listeners"</font>`<font style="color:rgb(52, 73, 94);">）：</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$attrs</font>`<font style="color:rgb(52, 73, 94);">包含父作用域中不作为</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">prop</font>`<font style="color:rgb(52, 73, 94);">被识别（且获取）的属性绑定，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">$listeners</font>`<font style="color:rgb(52, 73, 94);">包含了父作用域中的（不含</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">.native</font>`<font style="color:rgb(52, 73, 94);">修饰器的）</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">v-on</font>`<font style="color:rgb(52, 73, 94);">事件监听器，它可以将事件监听器应用于子组件。</font>
8. **<font style="color:rgb(52, 73, 94);">Lodash/Global State</font>**<font style="color:rgb(52, 73, 94);">：对于简单的全局状态，有时也会用Lodash的</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">_</font>`<font style="color:rgb(52, 73, 94);">全局变量或者简单的全局状态对象。</font>
9. **<font style="color:rgb(52, 73, 94);">Vue 3的Composition API</font>**<font style="color:rgb(52, 73, 94);">：利用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">reactive</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">ref</font>`<font style="color:rgb(52, 73, 94);">等API在组合式函数中创建共享的响应式数据。</font>

### <font style="color:rgb(52, 73, 94);">Vue 的双向数据绑定是如何实现的？</font>
1. **<font style="color:rgb(52, 73, 94);">数据响应</font>**<font style="color:rgb(52, 73, 94);">：Vue 使用 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Object.defineProperty</font>`<font style="color:rgb(52, 73, 94);">（Vue 2.x）或 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Proxy</font>`<font style="color:rgb(52, 73, 94);">（Vue 3.x）来劫持属性的getter和setter，从而追踪数据的变化。</font>
2. **<font style="color:rgb(52, 73, 94);">视图更新</font>**<font style="color:rgb(52, 73, 94);">：当数据变化时，Vue 会自动更新视图。Vue 通过依赖收集机制，将视图的部分与数据建立联系，一旦数据变化，依赖的视图部分就会自动更新。</font>
3. **<font style="color:rgb(52, 73, 94);">事件监听</font>**<font style="color:rgb(52, 73, 94);">：在用户与视图交互时，比如输入、点击等，Vue 会监听这些事件，并在事件处理函数中修改数据。</font>
4. **<font style="color:rgb(52, 73, 94);">数据变更</font>**<font style="color:rgb(52, 73, 94);">：当用户操作导致数据变化时，Vue 通过setter进行拦截，触发视图更新。</font>
5. **<font style="color:rgb(52, 73, 94);">双向绑定</font>**<font style="color:rgb(52, 73, 94);">：Vue 提供了 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">v-model</font>`<font style="color:rgb(52, 73, 94);"> 指令，它内部会根据输入类型不同，自动使用不同的属性进行双向绑定，比如 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">input</font>`<font style="color:rgb(52, 73, 94);"> 元素的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">value</font>`<font style="color:rgb(52, 73, 94);"> 属性，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">checkbox</font>`<font style="color:rgb(52, 73, 94);"> 的 </font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">checked</font>`<font style="color:rgb(52, 73, 94);"> 属性等。</font>

### <font style="color:rgb(52, 73, 94);">为什么 Vue3 用 proxy 代替了 Vue2 中的 Object.defineProperty</font>
1. **<font style="color:rgb(52, 73, 94);">检测更多类型的数据</font>**<font style="color:rgb(52, 73, 94);">：Proxy 可以直接监听对象和数组的变化，包括新增属性和删除属性，Vue2 中则需要使用 Vue.set 或 Vue.delete 来处理数组和对象属性的添加和删除 。</font>
2. **<font style="color:rgb(52, 73, 94);">性能提升</font>**<font style="color:rgb(52, 73, 94);">：Vue3 的响应式系统使用 Proxy 后，不需要深度递归遍历对象属性来添加响应式，这样可以减少很多不必要的性能开销 。</font>
3. **<font style="color:rgb(52, 73, 94);">更好的语法</font>**<font style="color:rgb(52, 73, 94);">：Proxy 提供了一种更简洁和高效的方式来定义对象属性的自定义操作，Vue3 利用这一点，简化了内部实现 。</font>
4. **<font style="color:rgb(52, 73, 94);">现代浏览器兼容性</font>**<font style="color:rgb(52, 73, 94);">：虽然 Proxy 不兼容 IE 浏览器，但 Vue3 放弃了对 IE 的支持，现代浏览器对 Proxy 的支持使得 Vue3 可以利用这一特性 。</font>
5. **<font style="color:rgb(52, 73, 94);">更广泛的应用</font>**<font style="color:rgb(52, 73, 94);">：Proxy 作为一种新的数据结构，其应用范围更广，Vue3 可以利用 Proxy 的特性实现更多复杂的功能 。</font>

### <font style="color:rgb(52, 73, 94);">什么是虚拟 dom ？解析过程是怎样的</font>
1. **<font style="color:rgb(52, 73, 94);">什么是虚拟DOM</font>**<font style="color:rgb(52, 73, 94);">：虚拟DOM就是一个普通的JavaScript对象，它描述了真实的DOM节点的结构和属性。它并不是真正的DOM，而是用一组对象来表示页面的结构。</font>
2. **<font style="color:rgb(52, 73, 94);">为什么要用虚拟DOM</font>**<font style="color:rgb(52, 73, 94);">：使用虚拟DOM可以提高性能。在实际的DOM操作中，每次操作都可能导致回流或重绘，而虚拟DOM只在内存中操作，最后才一次性更新到真实DOM，减少了操作次数。</font>
3. **<font style="color:rgb(52, 73, 94);">解析过程</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">渲染阶段</font>**<font style="color:rgb(52, 73, 94);">：首先，框架会使用虚拟DOM的渲染函数生成一个虚拟DOM树。</font>
    - **<font style="color:rgb(52, 73, 94);">Diffing</font>**<font style="color:rgb(52, 73, 94);">：当状态更新时，会生成一个新的虚拟DOM树。然后，框架会通过Diff算法比较新旧两棵树的差异。</font>
    - **<font style="color:rgb(52, 73, 94);">打补丁</font>**<font style="color:rgb(52, 73, 94);">：根据Diff算法的结果，生成一个最小化的补丁操作列表，然后对真实DOM进行必要的操作，更新页面。</font>
4. **<font style="color:rgb(52, 73, 94);">优点</font>**<font style="color:rgb(52, 73, 94);">：通过避免直接操作真实DOM，减少了浏览器的重绘和回流次数，提高了性能。同时，虚拟DOM可以跨平台使用，比如可以在服务器端渲染生成HTML字符串。</font>

### <font style="color:rgb(52, 73, 94);">Vue 中 key 的作用 </font>
1. **<font style="color:rgb(52, 73, 94);">优化渲染</font>**<font style="color:rgb(52, 73, 94);">：Vue在更新列表时使用key来跟踪每个节点的身份，从而高效地进行元素的重用和重新排序。如果列表数据发生变化，Vue会根据key来决定是复用元素还是重新创建。</font>
2. **<font style="color:rgb(52, 73, 94);">解决组件复用问题</font>**<font style="color:rgb(52, 73, 94);">：在使用动态组件或者在v-for循环中，如果子组件有相同的标签名，key可以确保Vue能够正确地识别和复用组件。</font>
3. **<font style="color:rgb(52, 73, 94);">提高性能</font>**<font style="color:rgb(52, 73, 94);">：当Vue的虚拟DOM进行Diff算法比较时，key作为一个独特的标识符，帮助Vue更快地找到正确的节点进行操作，减少了不必要的DOM操作，提高了性能。</font>
4. **<font style="color:rgb(52, 73, 94);">避免不必要的渲染</font>**<font style="color:rgb(52, 73, 94);">：如果列表项的顺序没有变化，但是内容有更新，key可以确保Vue只更新内容而不是整个元素。</font>

### <font style="color:rgb(52, 73, 94);">vue diff 算法是怎么工作的</font>
1. **<font style="color:rgb(52, 73, 94);">识别差异</font>**<font style="color:rgb(52, 73, 94);">：Vue的diff算法通过比较新旧虚拟DOM树来识别差异。这个过程是深度优先遍历的，逐个比较每个节点。</font>
2. **<font style="color:rgb(52, 73, 94);">同层比较</font>**<font style="color:rgb(52, 73, 94);">：只会在同层级的节点间进行比较，不会跨层级比较。</font>
3. **<font style="color:rgb(52, 73, 94);">双端比较</font>**<font style="color:rgb(52, 73, 94);">：Vue会从新旧虚拟DOM列表的两端开始，向中间进行比较。这样做是因为头尾部分往往是最少变动的。</font>
4. **<font style="color:rgb(52, 73, 94);">复用节点</font>**<font style="color:rgb(52, 73, 94);">：如果找到相同的节点，Vue会复用这个节点，而不是删除旧的再创建新的。</font>
5. **<font style="color:rgb(52, 73, 94);">处理差异</font>**<font style="color:rgb(52, 73, 94);">：对于不同的节点，Vue会生成相应的补丁操作，如删除旧节点、创建新节点或移动节点等。</font>
6. **<font style="color:rgb(52, 73, 94);">更新DOM</font>**<font style="color:rgb(52, 73, 94);">：最后，Vue会应用这些补丁操作到真实DOM上，完成界面的更新。</font>
7. **<font style="color:rgb(52, 73, 94);">优化</font>**<font style="color:rgb(52, 73, 94);">：Vue还通过key来优化diff过程，使得算法可以更准确地识别节点变化，减少不必要的操作</font>

### <font style="color:rgb(52, 73, 94);">React类组件和函数组件的区别是</font>
1. **<font style="color:rgb(52, 73, 94);">定义方式</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：使用ES6类继承</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">React.Component</font>`<font style="color:rgb(52, 73, 94);">，需要编写构造函数、生命周期方法等。</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：使用JavaScript函数，直接返回JSX，更简洁。</font>
2. **<font style="color:rgb(52, 73, 94);">状态管理</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：状态通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this.state</font>`<font style="color:rgb(52, 73, 94);">管理，可以使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">this.setState()</font>`<font style="color:rgb(52, 73, 94);">来更新。</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：没有内置的状态管理，但可以使用Hooks（如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useState</font>`<font style="color:rgb(52, 73, 94);">）来添加状态。</font>
3. **<font style="color:rgb(52, 73, 94);">生命周期</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：有完整的生命周期方法，如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentDidMount</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentDidUpdate</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentWillUnmount</font>`<font style="color:rgb(52, 73, 94);">。</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：没有生命周期方法，但可以通过Hooks（如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useEffect</font>`<font style="color:rgb(52, 73, 94);">）模拟生命周期。</font>
4. **<font style="color:rgb(52, 73, 94);">性能</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：通常更轻量，没有构造函数和生命周期方法的开销。</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：稍微重一些，但差距不大，主要取决于实现的复杂度。</font>
5. **<font style="color:rgb(52, 73, 94);">代码组织</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：代码可能更分散，因为状态、生命周期和渲染逻辑都在一起。</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：借助Hooks，代码可以更模块化，逻辑清晰。</font>
6. **<font style="color:rgb(52, 73, 94);">新特性</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：React推荐的方式，所有新特性（如Hooks）都围绕函数组件设计。</font>
7. **<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - **<font style="color:rgb(52, 73, 94);">类组件</font>**<font style="color:rgb(52, 73, 94);">：适合复杂的组件，需要完整生命周期管理的场景。</font>
    - **<font style="color:rgb(52, 73, 94);">函数组件</font>**<font style="color:rgb(52, 73, 94);">：适合大多数场景，特别是逻辑简单、需要状态或生命周期的组件。</font>

### <font style="color:rgb(52, 73, 94);">React事件机制和普通事件有什么区别</font>
### <font style="color:rgb(52, 73, 94);">React 父子组件通信有哪些方法？</font>
1. **<font style="color:rgb(52, 73, 94);">Props</font>**<font style="color:rgb(52, 73, 94);">：父组件通过props向子组件传递数据，是最常用的方式。</font>
2. **<font style="color:rgb(52, 73, 94);">回调函数</font>**<font style="color:rgb(52, 73, 94);">：子组件通过回调函数将数据传回给父组件。</font>
3. **<font style="color:rgb(52, 73, 94);">Context</font>**<font style="color:rgb(52, 73, 94);">：当有很多组件层级时，可以使用Context来跨层级传递数据。</font>
4. **<font style="color:rgb(52, 73, 94);">Redux或Context API</font>**<font style="color:rgb(52, 73, 94);">：对于更复杂的状态管理，可以使用Redux或React的Context API。</font>
5. **<font style="color:rgb(52, 73, 94);">ref</font>**<font style="color:rgb(52, 73, 94);">：通过ref访问子组件的方法或状态，适用于特定场景。</font>
6. **<font style="color:rgb(52, 73, 94);">状态管理库</font>**<font style="color:rgb(52, 73, 94);">：使用如MobX、Recoil等状态管理库来跨组件通信。</font>

### <font style="color:rgb(52, 73, 94);">React 组件有哪些生命周期方法？</font>
1. **<font style="color:rgb(52, 73, 94);">挂载阶段（Mounting）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">constructor()</font>`<font style="color:rgb(52, 73, 94);">：构造函数，初始化state和绑定方法。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">static getDerivedStateFromProps()</font>`<font style="color:rgb(52, 73, 94);">：静态方法，根据props计算state。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">render()</font>`<font style="color:rgb(52, 73, 94);">：渲染组件，返回JSX。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentDidMount()</font>`<font style="color:rgb(52, 73, 94);">：组件挂载后执行，通常用于DOM操作或数据获取。</font>
2. **<font style="color:rgb(52, 73, 94);">更新阶段（Updating）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">static getDerivedStateFromProps()</font>`<font style="color:rgb(52, 73, 94);">：在props更新时调用，用于根据props变化更新state。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">shouldComponentUpdate()</font>`<font style="color:rgb(52, 73, 94);">：根据返回值决定是否重新渲染。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">render()</font>`<font style="color:rgb(52, 73, 94);">：重新渲染时调用。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">getSnapshotBeforeUpdate()</font>`<font style="color:rgb(52, 73, 94);">：在更新前调用，可以获取DOM信息。</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentDidUpdate()</font>`<font style="color:rgb(52, 73, 94);">：组件更新后执行，用于处理更新后的操作。</font>
3. **<font style="color:rgb(52, 73, 94);">卸载阶段（Unmounting）</font>**<font style="color:rgb(52, 73, 94);">：</font>
    - `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentWillUnmount()</font>`<font style="color:rgb(52, 73, 94);">：组件卸载前执行，用于清理工作，如定时器、事件监听器等。</font>

<font style="color:rgb(52, 73, 94);">对于函数组件，可以使用Hooks（如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useState</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useEffect</font>`<font style="color:rgb(52, 73, 94);">）来模拟这些生命周期方法。</font>

### <font style="color:rgb(52, 73, 94);">Context 是什么，如何使用？</font>
<font style="color:rgb(52, 73, 94);">React的Context是一种组件间通信的方式，它允许你在组件树中传递数据，而不需要通过每一层组件手动传递props。</font>

**<font style="color:rgb(52, 73, 94);">如何使用Context</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">创建Context</font>**<font style="color:rgb(52, 73, 94);">：使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">React.createContext()</font>`<font style="color:rgb(52, 73, 94);">创建一个新的Context对象。</font>
2. **<font style="color:rgb(52, 73, 94);">提供Context值</font>**<font style="color:rgb(52, 73, 94);">：使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">Context.Provider</font>`<font style="color:rgb(52, 73, 94);">组件包裹你的组件树，通过</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">value</font>`<font style="color:rgb(52, 73, 94);">属性提供数据。</font>
3. **<font style="color:rgb(52, 73, 94);">消费Context值</font>**<font style="color:rgb(52, 73, 94);">：在子组件中，你可以使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useContext(Context)</font>`<font style="color:rgb(52, 73, 94);"> Hook来读取Context的值，或者在类组件中使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">contextType</font>`<font style="color:rgb(52, 73, 94);">属性。</font>

**<font style="color:rgb(52, 73, 94);">Context的优势</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">跨层级通信</font>**<font style="color:rgb(52, 73, 94);">：可以直接访问祖先组件的props，无需逐层传递。</font>
+ **<font style="color:rgb(52, 73, 94);">避免Props逐层传递</font>**<font style="color:rgb(52, 73, 94);">：避免深层嵌套组件导致的Props逐层传递问题。</font>
+ **<font style="color:rgb(52, 73, 94);">集中管理状态</font>**<font style="color:rgb(52, 73, 94);">：可以在应用的顶层创建一个Context，全局管理状态。</font>

### <font style="color:rgb(52, 73, 94);">什么是受控组件与非受控组件</font>
<font style="color:rgb(52, 73, 94);">React中的受控组件和非受控组件主要区别在于组件的状态是否由React来管理。</font>

**<font style="color:rgb(52, 73, 94);">受控组件</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">状态由React管理</font>**<font style="color:rgb(52, 73, 94);">：组件的状态（如表单输入值）通过React的状态（state）来控制。</font>
+ **<font style="color:rgb(52, 73, 94);">通过props传递值</font>**<font style="color:rgb(52, 73, 94);">：组件的值通过props从父组件传递下来。</font>
+ **<font style="color:rgb(52, 73, 94);">onChange更新状态</font>**<font style="color:rgb(52, 73, 94);">：通过监听onChange事件来更新React的状态。</font>

**<font style="color:rgb(52, 73, 94);">非受控组件</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">状态由DOM管理</font>**<font style="color:rgb(52, 73, 94);">：组件的状态直接绑定到DOM元素上。</font>
+ **<font style="color:rgb(52, 73, 94);">不使用state</font>**<font style="color:rgb(52, 73, 94);">：不需要在React组件中使用state来保存状态。</font>
+ **<font style="color:rgb(52, 73, 94);">使用ref读取值</font>**<font style="color:rgb(52, 73, 94);">：通过设置ref属性，直接从DOM元素中读取值。</font>

### <font style="color:rgb(52, 73, 94);">什么是高阶组件</font>
<font style="color:rgb(52, 73, 94);">简单来说，高阶组件是一种基于函数式编程的React设计模式，用于封装和重用组件逻辑。</font>

**<font style="color:rgb(52, 73, 94);">什么是HOC</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">函数</font>**<font style="color:rgb(52, 73, 94);">：HOC是一个接受组件并返回新组件的函数。</font>
+ **<font style="color:rgb(52, 73, 94);">不修改组件</font>**<font style="color:rgb(52, 73, 94);">：它不修改传入的组件，而是将其包裹在返回的新组件中。</font>

**<font style="color:rgb(52, 73, 94);">HOC的作用</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">重用逻辑</font>**<font style="color:rgb(52, 73, 94);">：可以在多个组件间共享逻辑，如数据获取、监听、状态管理等。</font>
+ **<font style="color:rgb(52, 73, 94);">避免重复代码</font>**<font style="color:rgb(52, 73, 94);">：减少组件间的重复代码，提高代码复用性。</font>

**<font style="color:rgb(52, 73, 94);">如何创建HOC</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">定义一个函数</font>**<font style="color:rgb(52, 73, 94);">：这个函数接受一个组件作为参数。</font>
2. **<font style="color:rgb(52, 73, 94);">返回一个新的组件</font>**<font style="color:rgb(52, 73, 94);">：新组件包裹传入的组件，并添加额外的逻辑。</font>

### <font style="color:rgb(52, 73, 94);">Component和PureComponent的区别</font>
<font style="color:rgb(52, 73, 94);">React中的Component和PureComponent这两个类的主要区别在于它们对待props和state变化时的渲染行为。</font>

**<font style="color:rgb(52, 73, 94);">Component</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">默认的类组件</font>**<font style="color:rgb(52, 73, 94);">：它是React类组件的基类。</font>
+ **<font style="color:rgb(52, 73, 94);">完整的生命周期</font>**<font style="color:rgb(52, 73, 94);">：拥有完整的生命周期方法，比如</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">shouldComponentUpdate</font>`<font style="color:rgb(52, 73, 94);">、</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">componentDidMount</font>`<font style="color:rgb(52, 73, 94);">等。</font>
+ **<font style="color:rgb(52, 73, 94);">浅比较</font>**<font style="color:rgb(52, 73, 94);">：在</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">shouldComponentUpdate</font>`<font style="color:rgb(52, 73, 94);">生命周期方法中，默认进行浅比较来决定是否重新渲染。</font>

**<font style="color:rgb(52, 73, 94);">PureComponent</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">继承自Component</font>**<font style="color:rgb(52, 73, 94);">：它继承自Component，并且增加了对props和state的浅比较。</font>
+ **<font style="color:rgb(52, 73, 94);">性能优化</font>**<font style="color:rgb(52, 73, 94);">：通过在</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">shouldComponentUpdate</font>`<font style="color:rgb(52, 73, 94);">方法中进行浅比较props和state，如果未发生变化，则跳过重新渲染。</font>
+ **<font style="color:rgb(52, 73, 94);">不适用于深层数据</font>**<font style="color:rgb(52, 73, 94);">：如果props或state是深层嵌套的对象，浅比较可能无法正确判断变化。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">性能</font>**<font style="color:rgb(52, 73, 94);">：PureComponent通过浅比较props和state来自动优化性能，避免不必要的渲染。</font>
+ **<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：当组件的props和state结构简单且易于比较时，使用PureComponent可以提高性能。</font>

### <font style="color:rgb(52, 73, 94);">setState是同步的还是异步的</font>
**<font style="color:rgb(52, 73, 94);">为什么是异步的</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">批量更新</font>**<font style="color:rgb(52, 73, 94);">：React可能会把多个</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setState</font>`<font style="color:rgb(52, 73, 94);">调用合并成一个更新，以提高性能。</font>
+ **<font style="color:rgb(52, 73, 94);">避免直接DOM操作</font>**<font style="color:rgb(52, 73, 94);">：React使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setState</font>`<font style="color:rgb(52, 73, 94);">来集中管理和优化组件的渲染。</font>

**<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">状态更新</font>**<font style="color:rgb(52, 73, 94);">：当你需要更新组件的状态时调用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">setState</font>`<font style="color:rgb(52, 73, 94);">。</font>
+ **<font style="color:rgb(52, 73, 94);">后续操作</font>**<font style="color:rgb(52, 73, 94);">：如果你需要在状态更新后立即进行操作，应该使用回调函数或者</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useEffect</font>`<font style="color:rgb(52, 73, 94);"> Hook。</font>

### <font style="color:rgb(52, 73, 94);">说一说你对Redux的理解</font>
<font style="color:rgb(52, 73, 94);">Redux是一个用于JavaScript应用的状态管理库，它可以帮助我们以可预测的方式管理应用的状态。</font>

**<font style="color:rgb(52, 73, 94);">核心概念</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">单一数据源</font>**<font style="color:rgb(52, 73, 94);">：整个应用的状态都存储在一个单一的store对象中。</font>
2. **<font style="color:rgb(52, 73, 94);">状态是只读的</font>**<font style="color:rgb(52, 73, 94);">：唯一修改状态的方法是触发action，这是一个描述发生事件的普通对象。</font>
3. **<font style="color:rgb(52, 73, 94);">使用纯函数执行reducer</font>**<font style="color:rgb(52, 73, 94);">：reducer是一个函数，它接受当前状态和action，并返回新的状态。</font>

**<font style="color:rgb(52, 73, 94);">工作流程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">dispatch(action)</font>**<font style="color:rgb(52, 73, 94);">：当需要修改状态时，我们dispatch一个action。</font>
2. **<font style="color:rgb(52, 73, 94);">reducer执行</font>**<font style="color:rgb(52, 73, 94);">：store调用reducer函数，传入当前状态和action，返回新的状态。</font>
3. **<font style="color:rgb(52, 73, 94);">state更新</font>**<font style="color:rgb(52, 73, 94);">：store的状态更新，触发监听器，组件重新渲染。</font>

**<font style="color:rgb(52, 73, 94);">优势</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">可预测</font>**<font style="color:rgb(52, 73, 94);">：状态的更新逻辑都在reducer中，容易追踪和预测。</font>
+ **<font style="color:rgb(52, 73, 94);">中央管理</font>**<font style="color:rgb(52, 73, 94);">：所有状态都集中在一个store中，方便管理和调试。</font>
+ **<font style="color:rgb(52, 73, 94);">开发工具</font>**<font style="color:rgb(52, 73, 94);">：配套的Redux DevTools可以追踪状态变化，方便调试。</font>

### <font style="color:rgb(52, 73, 94);">useMemo和useCallback的区别和使用场景</font>
`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useMemo</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useCallback</font>`<font style="color:rgb(52, 73, 94);">都是React中用于性能优化的Hook。</font>

**<font style="color:rgb(52, 73, 94);">useMemo</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">用于缓存计算结果，避免在每次渲染时都进行高开销的计算。</font>
+ <font style="color:rgb(52, 73, 94);">只有在依赖项改变时，才会重新计算。</font>

**<font style="color:rgb(52, 73, 94);">useCallback</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">用于缓存函数，避免在每次渲染时都创建新的函数实例。</font>
+ <font style="color:rgb(52, 73, 94);">可以避免子组件不必要的渲染。</font>

**<font style="color:rgb(52, 73, 94);">区别</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useMemo</font>`<font style="color:rgb(52, 73, 94);">缓存的是值，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useCallback</font>`<font style="color:rgb(52, 73, 94);">缓存的是函数。</font>
+ `<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useMemo</font>`<font style="color:rgb(52, 73, 94);">可以避免重新计算，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useCallback</font>`<font style="color:rgb(52, 73, 94);">可以避免重新创建函数。</font>

**<font style="color:rgb(52, 73, 94);">使用场景</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">当有复杂计算，并且计算依赖于特定的状态或props时，使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useMemo</font>`<font style="color:rgb(52, 73, 94);">。</font>
+ <font style="color:rgb(52, 73, 94);">当需要将函数传递给子组件，并且希望在父组件重新渲染时，子组件的这个函数保持不变时，使用</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useCallback</font>`<font style="color:rgb(52, 73, 94);">。</font>

<font style="color:rgb(52, 73, 94);">简单来说，</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useMemo</font>`<font style="color:rgb(52, 73, 94);">和</font>`<font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">useCallback</font>`<font style="color:rgb(52, 73, 94);">都是用来避免不必要的计算和渲染，但它们缓存的对象不同</font>

### <font style="color:rgb(52, 73, 94);">什么是虚拟Dom</font>
**<font style="color:rgb(52, 73, 94);">什么是虚拟DOM</font>**<font style="color:rgb(52, 73, 94);">： 虚拟DOM就是一个普通的JavaScript对象，它描述了真实的DOM节点的结构和属性。</font>

**<font style="color:rgb(52, 73, 94);">作用</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">性能优化</font>**<font style="color:rgb(52, 73, 94);">：通过在内存中操作虚拟DOM，而不是直接操作真实DOM，减少对DOM的操作次数，从而提高性能。</font>
2. **<font style="color:rgb(52, 73, 94);">跨平台渲染</font>**<font style="color:rgb(52, 73, 94);">：虚拟DOM可以被渲染到不同的平台，不仅限于浏览器。</font>

**<font style="color:rgb(52, 73, 94);">工作流程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">状态变更</font>**<font style="color:rgb(52, 73, 94);">：当组件的状态或props发生变化时，React会创建一个新的虚拟DOM。</font>
2. **<font style="color:rgb(52, 73, 94);">Diffing算法</font>**<font style="color:rgb(52, 73, 94);">：React通过Diffing算法比较新旧虚拟DOM的差异。</font>
3. **<font style="color:rgb(52, 73, 94);">更新DOM</font>**<font style="color:rgb(52, 73, 94);">：React根据差异生成补丁，然后对真实DOM进行最小化的更新。</font>

### <font style="color:rgb(52, 73, 94);">React Diff算法如何工作的</font>
**<font style="color:rgb(52, 73, 94);">Diff算法的工作流程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">比较同层级节点</font>**<font style="color:rgb(52, 73, 94);">：React首先比较新旧虚拟DOM树的同一层级的节点，看是否有变化。</font>
2. **<font style="color:rgb(52, 73, 94);">识别不同</font>**<font style="color:rgb(52, 73, 94);">：如果节点发生了变化，React会根据变化生成对应的补丁操作。</font>
3. **<font style="color:rgb(52, 73, 94);">递归子节点</font>**<font style="color:rgb(52, 73, 94);">：如果节点没有变化，React会递归地比较它们的子节点。</font>
4. **<font style="color:rgb(52, 73, 94);">只比较同层级</font>**<font style="color:rgb(52, 73, 94);">：React不会跨层级比较，如果一个组件彻底改变了，React会直接删除旧的并创建新的。</font>
5. **<font style="color:rgb(52, 73, 94);">使用key属性</font>**<font style="color:rgb(52, 73, 94);">：给列表中的每个元素添加唯一的key属性，可以帮助React更快地识别元素的变化。</font>

**<font style="color:rgb(52, 73, 94);">Diff算法的优化</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">减少不必要的DOM操作</font>**<font style="color:rgb(52, 73, 94);">：通过比较虚拟DOM的差异，React可以最小化实际DOM的更新。</font>
+ **<font style="color:rgb(52, 73, 94);">批量更新</font>**<font style="color:rgb(52, 73, 94);">：React会将多个更新合并，以减少重渲染的次数。</font>

**<font style="color:rgb(52, 73, 94);">总结</font>**<font style="color:rgb(52, 73, 94);">：</font>

<font style="color:rgb(52, 73, 94);">React的Diff算法通过比较新旧虚拟DOM树的差异，生成最小的DOM操作补丁，以此来更新UI。它使得React在处理大规模数据更新时依然保持高性能。</font>

### <font style="color:rgb(52, 73, 94);">什么是React Fiber</font>
**<font style="color:rgb(52, 73, 94);">什么是React Fiber</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">Fiber是一个工作单元，用来表示React元素。</font>
+ <font style="color:rgb(52, 73, 94);">它使得React可以在渲染过程中暂停、中止或重用工作，以更好地利用分片时间。</font>

**<font style="color:rgb(52, 73, 94);">Fiber架构的工作流程</font>**<font style="color:rgb(52, 73, 94);">：</font>

1. **<font style="color:rgb(52, 73, 94);">Reconciliation（调和）</font>**<font style="color:rgb(52, 73, 94);">：React构建工作进度树，会比较新的props和旧的Fiber树来确定哪些部分需要更新。</font>
2. **<font style="color:rgb(52, 73, 94);">Commit（提交）</font>**<font style="color:rgb(52, 73, 94);">：遍历在Reconciliation阶段创建的副作用列表进行更新。</font>

**<font style="color:rgb(52, 73, 94);">Fiber的关键特性</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ **<font style="color:rgb(52, 73, 94);">增量渲染</font>**<font style="color:rgb(52, 73, 94);">：Fiber可以将渲染任务拆分，均匀到每一帧里面去执行。</font>
+ **<font style="color:rgb(52, 73, 94);">暂停、终止和复用渲染任务</font>**<font style="color:rgb(52, 73, 94);">：React可以在执行更新的过程中暂停，优先处理高优先级的事件，如用户输入。</font>
+ **<font style="color:rgb(52, 73, 94);">不同更新的优先级</font>**<font style="color:rgb(52, 73, 94);">：Fiber允许我们对里面的任务进行优先级排序和插队。</font>

**<font style="color:rgb(52, 73, 94);">为什么需要Fiber</font>**<font style="color:rgb(52, 73, 94);">：</font>

+ <font style="color:rgb(52, 73, 94);">解决了之前React版本中更新过程无法中断的问题，提升了性能和用户体验。</font>
+ <font style="color:rgb(52, 73, 94);">允许React在执行更新时更灵活地响应用户输入和动画帧。</font>

<font style="color:rgb(52, 73, 94);">简单来说，React Fiber为React带来了时间切片和优先级调度的能力，让渲染过程更加高效和响应用户操作。</font>

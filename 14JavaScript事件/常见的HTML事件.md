#### 鼠标事件
属性	描述	DOM
onclick	当用户点击某个对象时调用的事件句柄。	2
oncontextmenu	在用户点击鼠标右键打开上下文菜单时触发	 
ondblclick	当用户双击某个对象时调用的事件句柄。	2
onmousedown	鼠标按钮被按下。	2
onmouseenter	当鼠标指针移动到元素上时触发。	2
onmouseleave	当鼠标指针移出元素时触发	2
onmousemove	鼠标被移动。	2
onmouseover	鼠标移到某元素之上。	2
onmouseout	鼠标从某元素移开。	2
onmouseup	鼠标按键被松开。

#### 键盘事件
属性	描述	DOM
onkeydown	某个键盘按键被按下。	2
onkeypress	某个键盘按键被按下并松开。	2
onkeyup	某个键盘按键被松开。

#### 框架/对象（Frame/Object）事件
属性	描述	DOM
onabort	图像的加载被中断。 ( <object>)	2
onbeforeunload	该事件在即将离开页面（刷新或关闭）时触发	2
onerror	在加载文档或图像时发生错误。 ( <object>, <body>和 <frameset>)	 
onhashchange	该事件在当前 URL 的锚部分发生修改时触发。	 
onload	一张页面或一幅图像完成加载。	2
onpageshow	该事件在用户访问页面时触发	
onpagehide	该事件在用户离开当前网页跳转到另外一个页面时触发	
onresize	窗口或框架被重新调整大小。	2
onscroll	当文档被滚动时发生的事件。	2
onunload	用户退出页面。 ( <body> 和 <frameset>)

#### 表单事件
属性	描述	DOM
onblur	元素失去焦点时触发	2
onchange	该事件在表单元素的内容改变时触发( <input>, <keygen>, <select>, 和 <textarea>)	2
onfocus	元素获取焦点时触发	2
onfocusin	元素即将获取焦点时触发	2
onfocusout	元素即将失去焦点时触发	2
oninput	元素获取用户输入时触发	3
onreset	表单重置时触发	2
onsearch	用户向搜索域输入文本时触发 ( <input="search">)	 
onselect	用户选取文本时触发 ( <input> 和 <textarea>)	2
onsubmit	表单提交时触发

#### 剪贴板事件
属性	描述	DOM
oncopy	该事件在用户拷贝元素内容时触发	 
oncut	该事件在用户剪切元素内容时触发	 
onpaste	该事件在用户粘贴元素内容时触发

#### 打印事件
属性	描述	DOM
onafterprint	该事件在页面已经开始打印，或者打印窗口已经关闭时触发	 
onbeforeprint	该事件在页面即将开始打印时触发

#### 拖动事件
事件	描述	DOM
ondrag	该事件在元素正在拖动时触发	 
ondragend	该事件在用户完成元素的拖动时触发	 
ondragenter	该事件在拖动的元素进入放置目标时触发	 
ondragleave	该事件在拖动元素离开放置目标时触发	 
ondragover	该事件在拖动元素在放置目标上时触发	 
ondragstart	该事件在用户开始拖动元素时触发	 
ondrop	该事件在拖动元素放置在目标区域时触发

#### 多媒体（Media）事件
事件	描述	DOM
onabort	事件在视频/音频（audio/video）终止加载时触发。	 
oncanplay	事件在用户可以开始播放视频/音频（audio/video）时触发。	 
oncanplaythrough	事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。	 
ondurationchange	事件在视频/音频（audio/video）的时长发生变化时触发。	 
onemptied	当期播放列表为空时触发	 
onended	事件在视频/音频（audio/video）播放结束时触发。	 
onerror	事件在视频/音频（audio/video）数据加载期间发生错误时触发。	 
onloadeddata	事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。	 
onloadedmetadata	事件在指定视频/音频（audio/video）的元数据加载后触发。	 
onloadstart	事件在浏览器开始寻找指定视频/音频（audio/video）触发。	 
onpause	事件在视频/音频（audio/video）暂停时触发。	 
onplay	事件在视频/音频（audio/video）开始播放时触发。	 
onplaying	事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。	 
onprogress	事件在浏览器下载指定的视频/音频（audio/video）时触发。	 
onratechange	事件在视频/音频（audio/video）的播放速度发送改变时触发。	 
onseeked	事件在用户重新定位视频/音频（audio/video）的播放位置后触发。	 
onseeking	事件在用户开始重新定位视频/音频（audio/video）时触发。	 
onstalled	事件在浏览器获取媒体数据，但媒体数据不可用时触发。	 
onsuspend	事件在浏览器读取媒体数据中止时触发。	 
ontimeupdate	事件在当前的播放位置发送改变时触发。	 
onvolumechange	事件在音量发生改变时触发。	 
onwaiting	事件在视频由于要播放下一帧而需要缓冲时触发。
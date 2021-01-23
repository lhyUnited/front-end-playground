(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{301:function(e,v,_){"use strict";_.r(v);var r=_(16),t=Object(r.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("这些年也有不少的面试别人和面试自己的经历，也有好些人来咨询一些前端的面试题目和准备，所以整理一下记录下来。本文针对面试中 Javascript 相关的内容，进行详细的描述。\n")]),e._v(" "),_("p",[e._v("不管是小前端还是大前端，我们的开发都离不开 Javascript。关于 Javascript 有太多内容可以讲了，每一个点都可以讲很久很久。本文主要是围绕知识点，来讲述面试可能出现的一些题目。")]),e._v(" "),_("h2",{attrs:{id:"单线程的-javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单线程的-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" 单线程的 Javascript")]),e._v(" "),_("p",[e._v("要怎么理解 Javascript 是单线程这个概念呢？大概可以从浏览器来说起。")]),e._v(" "),_("p",[_("strong",[e._v("Q:为什么 Javascript 是单线程？")]),e._v("\nA:作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。如果 Javascript 是多线程，当页面更新内容的时候、用户又触发了交互，这时候线程间的同步问题会变得很复杂，为了避免复杂性，Javascript 被设计为单线程。")]),e._v(" "),_("p",[e._v("因此我们的 Javascript 是单线程的，这是大前提。")]),e._v(" "),_("h3",{attrs:{id:"异步任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步任务","aria-hidden":"true"}},[e._v("#")]),e._v(" 异步任务")]),e._v(" "),_("p",[e._v("那么这样一个单线程的 Javascript，要如何高效地进行页面的交互和渲染处理呢？Javascript 只有一个线程，意味着任务需要一个接一个地进行，如果这时候我们有一个任务是等待用户输入，那在用户进行操作前，所有其他任务都会等待，页面处于假死状态，体验糟糕。因此，异步任务出现了。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 为什么说 Javascript 是异步的？")]),e._v("\nA: I/O 类型的任务会有较长的等待时间。使用异步任务的方式，只要异步任务有了运行结果，再进行处理。这个过程中浏览器就不用处于等待状态，CPU 也可以处理其他任务。")]),e._v(" "),_("p",[e._v("(该问题其实不完全准确，因为 Javascript 中分为同步任务和异步任务，因此我们可以深入回答。)")]),e._v(" "),_("p",[e._v('A: 在浏览器中，任务可以分为同步任务和异步任务两种。同步任务在主线程上排队执行，只有前一个任务执行完毕，才能执行后一个任务。异步任务进入"任务队列"的任务，当该任务完成后，"任务队列"通知主线程，该任务才会进入主线程排队执行。')]),e._v(" "),_("p",[_("strong",[e._v("Q: 在实际使用中异步任务可能会存在什么问题？")]),e._v("\nA: "),_("code",[e._v("setTimeout")]),e._v("、"),_("code",[e._v("setInterval")]),e._v("的时间精确性。该类方法设置一个定时器，当定时器计时完成，需要执行回调函数，此时才把回调函数放入事件队列中。如果当回调函数放入队列时，假设队列中还有大量的事件没执行，此时就会造成任务执行时间不精确。")]),e._v(" "),_("p",[e._v("（那要怎么提升精确度呢？）")]),e._v(" "),_("p",[e._v("A: 可以使用系统时钟来补偿计时器不准确性。如果你的定时器是一系列的，可以在每次回调任务结束的时候，根据最初的系统时间和该任务的执行时间进行差值比较，来修正后续的定时器时间。")]),e._v(" "),_("h3",{attrs:{id:"eventloop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eventloop","aria-hidden":"true"}},[e._v("#")]),e._v(" EventLoop")]),e._v(" "),_("p",[e._v("前面我们提到异步任务机制，而 EventLoop 的设计解决了异步任务的同步问题。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 介绍浏览器的 EventLoop。")]),e._v("\nA: JavaScript 有一个基于事件循环的并发模型，称为 EventLoop。\nJavascript 有一个主线程和调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 宏任务（MacroTask）和微任务（MicroTask）的区别。")])]),e._v(" "),_("ul",[_("li",[e._v("宏任务（MacroTask）包括：script全部代码、"),_("code",[e._v("setTimeout")]),e._v("、"),_("code",[e._v("setInterval")]),e._v("、"),_("code",[e._v("setImmediate")]),e._v("(Node独有)、"),_("code",[e._v("requestAnimationFrame")]),e._v("(浏览器独有)、I/O、UI rendering(浏览器独有)。")]),e._v(" "),_("li",[e._v("微任务（MicroTask）包括："),_("code",[e._v("process.nextTick")]),e._v("(Node独有)、"),_("code",[e._v("Promise")]),e._v("、"),_("code",[e._v("Object.observe")]),e._v("(废弃)、"),_("code",[e._v("MutationObserver")]),e._v("。")])]),e._v(" "),_("ol",[_("li",[e._v("宏任务（MacroTask）队列一次只从队列中取一个任务执行，执行完后就去执行微任务（MicroTask）队列中的任务。")]),e._v(" "),_("li",[e._v("微任务（MicroTask）队列中所有的任务都会被依次取出来执行，直到微任务队列为空；")]),e._v(" "),_("li",[e._v("执行 UI rendering 的节点是在执行完所有的微任务（MicroTask）之后，下一个宏任务（MacroTask）之前，紧跟着执行 UI rendering。")])]),e._v(" "),_("blockquote",[_("p",[e._v("篇幅关系，大家可以从以下文章中获取更详细的内容说明：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/10/event_loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 Event Loop？"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 运行机制详解：再谈Event Loop"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5c3d8956e51d4511dc72c200",target:"_blank",rel:"noopener noreferrer"}},[e._v("一次弄懂Event Loop（彻底解决此类面试问题）"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5b8f76675188255c7c653811",target:"_blank",rel:"noopener noreferrer"}},[e._v("带你彻底弄懂Event Loop"),_("OutboundLink")],1)])])]),e._v(" "),_("p",[e._v("这里可能会出各式各样的题目，考察包括：")]),e._v(" "),_("ul",[_("li",[e._v("浏览器中，"),_("code",[e._v("setTimeout")]),e._v("、"),_("code",[e._v("Promise")]),e._v("和"),_("code",[e._v("async")]),e._v("/"),_("code",[e._v("await")]),e._v("的执行顺序")]),e._v(" "),_("li",[e._v("Node.js 中，"),_("code",[e._v("setTimeout")]),e._v("、"),_("code",[e._v("setImmediate")]),e._v("和"),_("code",[e._v("process.nextTick")]),e._v("的执行顺序")])]),e._v(" "),_("blockquote",[_("p",[e._v("这里就不写具体题目了，大家可以参考上面的文章，或者自行搜一下题目看看，理解原理了比死记硬背要好得多。")])]),e._v(" "),_("h3",{attrs:{id:"web-workers-service-workers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-workers-service-workers","aria-hidden":"true"}},[e._v("#")]),e._v(" Web Workers/Service Workers")]),e._v(" "),_("p",[e._v("现在硬件的性能也越来越强了，为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 介绍一下 Web Workers。")]),e._v("\nA: Web Workers 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。")]),e._v(" "),_("p",[_("strong",[e._v("Q: Service workers 有什么用途。")]),e._v("\nA: Service workers 可拦截并修改访问和资源请求，细粒度地缓存资源，本质上可充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。")]),e._v(" "),_("blockquote",[_("p",[e._v("参考内容：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Worker 使用教程"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Worker API"),_("OutboundLink")],1)])])]),e._v(" "),_("h2",{attrs:{id:"javascript-的设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript-的设计","aria-hidden":"true"}},[e._v("#")]),e._v(" Javascript 的设计")]),e._v(" "),_("p",[e._v("理解 Javascript 的一些基本设计，日常工作中也有很多帮助，例如可以更优雅地实现一些逻辑，也可以在遇到一些问题的时候快速定位。")]),e._v(" "),_("h3",{attrs:{id:"原型和继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型和继承","aria-hidden":"true"}},[e._v("#")]),e._v(" 原型和继承")]),e._v(" "),_("p",[_("strong",[e._v("Q: 如何理解 Javascript 中的“一切皆对象”？")]),e._v("\nA: 当谈到继承时，JavaScript 只有一种结构：对象。\n每个实例对象"),_("code",[e._v("object")]),e._v("都有一个私有属性"),_("code",[e._v("__proto__")]),e._v("指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象"),_("code",[e._v("__proto__")]),e._v("，层层向上直到一个对象的原型对象为 null。null 没有原型，并作为这个原型链中的最后一个环节。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 如何理解 Javascript 的原型继承？")]),e._v("\nA: JavaScript 对象有一个指向一个原型对象的链。\n当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。\n函数的继承与其他的属性继承没有差别。需要注意的是，当继承的函数被调用时，"),_("code",[e._v("this")]),e._v("指向的是当前继承的对象，而不是继承的函数所在的原型对象。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 如何创建一个对象？")]),e._v("\nA: 可以使用以下方法：")]),e._v(" "),_("ul",[_("li",[e._v("使用语法结构创建的对象，即定义一个数组、函数、对象等")]),e._v(" "),_("li",[e._v("使用构造器创建的对象: "),_("code",[e._v("new XXX()")])]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("Object.create")]),e._v("创建对象")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("class")]),e._v("关键字创建对象")])]),e._v(" "),_("p",[_("strong",[e._v("Q: "),_("strong",[e._v("proto")]),e._v(" 与 prototype 有什么区别？")]),e._v("\nA: JavaScript 可以通过"),_("code",[e._v("prototype")]),e._v("和"),_("code",[e._v("__proto__")]),e._v("在两个对象之间创建一个关联，使得一个对象就可以通过委托访问另一个对象的属性和函数。当我们创建函数时，Javascript 会为这个函数自动添加"),_("code",[e._v("prototype")]),e._v("属性，值是一个有"),_("code",[e._v("constructor")]),e._v("属性的对象。一旦我们通过"),_("code",[e._v("new")]),e._v("关键字调用，那么 Javascript 就会帮你创建该构造函数的实例，实例通过将"),_("code",[e._v("__proto__")]),e._v("指向承构造函数的"),_("code",[e._v("prototype")]),e._v("，来继承构造函数"),_("code",[e._v("prototype")]),e._v("的所有属性和方法。\n对象"),_("code",[e._v("__proto__")]),e._v("属性的值就是它所对应的原型对象，指向自己构造函数的"),_("code",[e._v("prototype")]),e._v("。每个对象都有"),_("code",[e._v("__proto__")]),e._v("属性来标识自己所继承的原型，但只有函数才有"),_("code",[e._v("prototype")]),e._v("属性。")]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("__proto__")]),e._v("与"),_("code",[e._v("prototype")]),e._v("可以考的点也很多，这里也不详述了，可以参考下：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/creeperyang/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("从__proto__和prototype来深入理解JS对象和原型链"),_("OutboundLink")],1)])])]),e._v(" "),_("p",[_("strong",[e._v("Q: 如何判断对象类型？")]),e._v("\nA: 看情境可结合使用以下三种方法：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("typeof")]),e._v("运算符，返回值有五种: "),_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("boolean")]),e._v(", "),_("code",[e._v("number")]),e._v(", "),_("code",[e._v("string")]),e._v(", "),_("code",[e._v("object")]),e._v("。问题：容易混淆"),_("code",[e._v("object")]),e._v("和"),_("code",[e._v("null")]),e._v("，会把"),_("code",[e._v("Array")]),e._v("还有用户自定义函数都返回为"),_("code",[e._v("object")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("instanceof")]),e._v("运算符，判断某一个对象是否是所给的构造函数的一个实例。")]),e._v(" "),_("li",[_("code",[e._v("constructor")]),e._v("属性，返回对创建此对象的数组函数的引用。")])]),e._v(" "),_("h3",{attrs:{id:"作用域与闭包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用域与闭包","aria-hidden":"true"}},[e._v("#")]),e._v(" 作用域与闭包")]),e._v(" "),_("p",[_("strong",[e._v("Q: 请描述以下代码的执行输出内容（题略，考察作用域）。")]),e._v("\nA: 当代码在一个环境中执行时，会创建变量对象的一个作用域链，来保证对执行环境有权访问的变量和函数的有序访问。")]),e._v(" "),_("blockquote",[_("p",[e._v("考察内容可包括：全局作用域、函数作用域、块级作用域、词法作用域、动态作用域，可参考：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://juejin.im/post/5abb99e9f265da2392366824",target:"_blank",rel:"noopener noreferrer"}},[e._v("谈谈 JavaScript 的作用域"),_("OutboundLink")],1)])])]),e._v(" "),_("p",[_("strong",[e._v("Q: 什么场景需要使用闭包？")]),e._v("\nA: 由于 Javascript 特殊的变量作用域，函数内部可以直接读取全局变量，但在函数外部自然无法读取函数内的局部变量。闭包用途:")]),e._v(" "),_("ul",[_("li",[e._v("用于从外部读取其他函数内部变量的函数")]),e._v(" "),_("li",[e._v("可以使用闭包来模拟私有方法")]),e._v(" "),_("li",[e._v("让这些变量的值始终保持在内存中（涉及垃圾回收机制，可能导致内存泄露问题）")])]),e._v(" "),_("blockquote",[_("p",[e._v("可参考:")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[e._v("闭包"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("学习Javascript闭包（Closure）"),_("OutboundLink")],1)])])]),e._v(" "),_("h3",{attrs:{id:"关于-this"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于-this","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于 this")]),e._v(" "),_("p",[_("strong",[e._v("Q: 简单描述 this 在不同场景下的指向。")]),e._v("\nA: Javascript 中 "),_("code",[e._v("this")]),e._v("指针代表的是执行当前代码的对象的所有者，可简单理解为"),_("code",[e._v("this")]),e._v("永远指向最后调用它的那个对象。\n根据 JavaScript 中函数的调用方式不同，分为以下情况：")]),e._v(" "),_("ol",[_("li",[e._v("函数作为对象的方法调用：此时"),_("code",[e._v("this")]),e._v("被自然绑定到该对象。")]),e._v(" "),_("li",[e._v("作为函数调用: 函数可以直接被调用，此时"),_("code",[e._v("this")]),e._v("绑定到全局对象（在浏览器中为 window）。")]),e._v(" "),_("li",[e._v("作为构造函数调用：如果不使用"),_("code",[e._v("new")]),e._v("调用，则和普通函数一样。")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("apply")]),e._v("、"),_("code",[e._v("call")]),e._v("、"),_("code",[e._v("bind")]),e._v("等方式调用：根据API不同，可切换函数执行的上下文环境，即"),_("code",[e._v("this")]),e._v("绑定的对象。")])]),e._v(" "),_("p",[_("strong",[e._v("Q: 手写代码实现 call/apply/bind。")]),e._v("\nA: 此处略，请自行谷歌。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 箭头函数与普通函数的区别。")]),e._v("\n箭头函数的"),_("code",[e._v("this")]),e._v("始终指向函数定义时的"),_("code",[e._v("this")]),e._v("，而非执行时。")]),e._v(" "),_("blockquote",[_("p",[e._v("关于 Javascript 的一些设计，可以参考：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript深入系列15篇正式完结！"),_("OutboundLink")],1)])])]),e._v(" "),_("h3",{attrs:{id:"es6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[e._v("#")]),e._v(" ES6+")]),e._v(" "),_("p",[e._v("ES6/ES7/.../ESn这些都是不断发展的语法糖，虽然可能很多人都没有大量用到，但是一些基本的还是需要掌握的。\n推荐阮大神的"),_("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES6 入门教程"),_("OutboundLink")],1),e._v("，里面讲的特别详细和清晰。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 为什么要使用 Promise？")]),e._v("\nJavascript 的单线程设计，导致网络请求、事件监听等都需要异步执行。异步执行通常用回调函数实现，多层的回调会导致回调金字塔的出现。\nPromise 允许我们为异步操作的成功和失败分别绑定相应的处理方法（handlers），同时可以通过"),_("code",[e._v("Promise.all()")]),e._v("、"),_("code",[e._v("Promise.race()")]),e._v("等方法来同时处理多个异步操作的结果。")]),e._v(" "),_("p",[_("strong",[e._v("Q: 手写代码 or 讲解 Promise、async/await 的实现。")]),e._v("\n对于"),_("code",[e._v("Promise")]),e._v("、"),_("code",[e._v("async")]),e._v("/"),_("code",[e._v("await")]),e._v("理解的考察，最简单的就是让描述或者手写它们的实现方式。具体可以参考 MDN 上的内容，也可以找一些 polyfill 来看，也可以看其他人的文章分享，这里就不多说啦。")]),e._v(" "),_("p",[e._v("除此之外，关于已下内容也可以去了解一下，这里也不多说了：")]),e._v(" "),_("ul",[_("li",[e._v("解构的使用")]),e._v(" "),_("li",[e._v("Class 的使用")]),e._v(" "),_("li",[e._v("Set 和 Map 数据结构")]),e._v(" "),_("li",[e._v("浏览器兼容性与 Babel")])]),e._v(" "),_("h2",{attrs:{id:"结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[e._v("#")]),e._v(" 结束语")]),e._v(" "),_("p",[e._v("除了以上问题以外，Javascript 还有一个典型的浮点数运算精确度的问题，大家可参考"),_("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 浮点数陷阱及解法"),_("OutboundLink")],1),e._v("。\nJavascript 这块的内容太多了，大家平时可以多关注一下自己对这些内容的理解和掌握程度，平时工作中也可以多进行思考，基础性的内容不建议临时抱佛脚哦。")])])},[],!1,null,null,null);v.default=t.exports}}]);
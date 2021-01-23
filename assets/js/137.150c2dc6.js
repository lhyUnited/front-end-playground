(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{426:function(t,a,n){"use strict";n.r(a);var s=n(16),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("该系列用于记录一些使用方法、demo 以及原理分析。本文介绍 transition 组件，和创建简单 demo 的过程。")]),t._v(" "),n("h1",{attrs:{id:"动画过渡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画过渡","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画过渡")]),t._v(" "),n("p",[t._v("Vue 的动画过渡做得挺强大的，不过平时总是做的管理类项目，几乎不怎么用到动画。这次也是因为要弄个讲课 PPT 才来仔细研究这块，开始以为照着官网看看差不多就可以了，后来才发现这块的内容超出本骚年的想象。嘛，还挺有意思的。")]),t._v(" "),n("h2",{attrs:{id:"vue-过渡常用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-过渡常用方式","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 过渡常用方式")]),t._v(" "),n("p",[t._v("Vue 过渡主要分为两类："),n("strong",[t._v("CSS 动画")]),t._v("和"),n("strong",[t._v("Javascript 动画")]),t._v("。")]),t._v(" "),n("p",[t._v("根据"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E6%A6%82%E8%BF%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1),t._v("的说法，Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果，举例如下：")]),t._v(" "),n("ul",[n("li",[t._v("在 CSS 过渡和动画中自动应用 class（CSS 动画）")]),t._v(" "),n("li",[t._v("可以配合使用第三方 CSS 动画库，如 Animate.css（CSS 动画）")]),t._v(" "),n("li",[t._v("在过渡钩子函数中使用 JavaScript 直接操作 DOM（Javascript 动画）")]),t._v(" "),n("li",[t._v("可以配合使用第三方 JavaScript 动画库，如 Velocity.js（Javascript 动画）")])]),t._v(" "),n("p",[t._v("嗯，也就是上面所说的两类，主要区分是否手动实现还是借用工具实现而已。")]),t._v(" "),n("h2",{attrs:{id:"动画过渡的方法和原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画过渡的方法和原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画过渡的方法和原理")]),t._v(" "),n("h3",{attrs:{id:"强大的-requestanimationframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#强大的-requestanimationframe","aria-hidden":"true"}},[t._v("#")]),t._v(" 强大的 requestAnimationFrame")]),t._v(" "),n("p",[t._v("关于 requestAnimationFrame ，如果说没怎么写过动画的，或许几乎没听过。一般来说，大家常用的方式主要是来解决传说中浏览器刷新频率的问题。")]),t._v(" "),n("p",[t._v("在本骚年以前也写动画的日子里，通常是使用 jQuery ，各种计算然后调用 "),n("code",[t._v("animate()")]),t._v(" 等。后面也接触了 CSS3 ， transform 到 animation ， CSS 的动画能力简直要上天了。")]),t._v(" "),n("p",[t._v("我们来看看"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1),t._v("上是怎么介绍的吧。")]),t._v(" "),n("p",[n("code",[t._v("window.requestAnimationFrame()")]),t._v(" 方法告诉浏览器您希望执行动画，并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("callback")]),t._v("\n一个在每次需要重新绘制动画时调用的包含指定函数的参数。这个回调函数有一个传参，DOMHighResTimeStamp，指示从触发 requestAnimationFrame 回调到现在（重新渲染页面内容之前）的时间。")]),t._v(" "),n("p",[n("strong",[t._v("返回值")]),t._v("\n一个 long 整数，请求 ID ，也是回调列表中唯一的标识。\n可以传此值到 "),n("code",[t._v("window.cancelAnimationFrame()")]),t._v(" 以取消回调函数。")]),t._v(" "),n("p",[t._v("关于 requestAnimationFrame 能做到的一些 CSS 不能做的，可以参考"),n("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS3 动画那么强，requestAnimationFrame 还有毛线用？》"),n("OutboundLink")],1),t._v("看看。")]),t._v(" "),n("p",[t._v("总之，我们来看看 Vue 里面的相关代码：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// binding to window is necessary to make hot reload work in IE in strict mode")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处在不兼容时使用setTimeout进行向下兼容")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" raf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  inBrowser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" setTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("raf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("raf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("nextFrame 就是 Vue 中用来 CSS 动画过渡的方法，可以在下一次重绘之前进行一些处理。后面讲 CSS 动画过渡的时候我们会再详细点分析。")]),t._v(" "),n("h3",{attrs:{id:"关键的-transitionend-和-animationend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关键的-transitionend-和-animationend","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键的 transitionend 和 animationend")]),t._v(" "),n("p",[t._v("这两个分别是 CSS 动画中的结束事件， transitionend 是 CSS transition（如 transform/scale 等）结束的触发事件，animationend 则是 CSS 动画（keyframe）结束的触发事件。")]),t._v(" "),n("h4",{attrs:{id:"transitionend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transitionend","aria-hidden":"true"}},[t._v("#")]),t._v(" transitionend")]),t._v(" "),n("p",[t._v("transitionend 事件会在 CSS transition 结束后触发。以下两种情况不会触发：")]),t._v(" "),n("ol",[n("li",[t._v("当 transition 完成前移除 transition 时，比如移除 css 的 transition-property 属性。")]),t._v(" "),n("li",[t._v('在 transition 完成前设置 display 为"none"。')])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在指定的元素上监听transitionend事件")]),t._v("\nelement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transitionend"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"animationend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animationend","aria-hidden":"true"}},[t._v("#")]),t._v(" animationend")]),t._v(" "),n("p",[t._v("animationend 事件会在一个 CSS 动画完成时触发。与 transitionend 相似，animationend 的触发不包括完成前就已终止的情况，例如元素变得不可见或者动画从元素中移除。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在指定的元素上监听animationend事件")]),t._v("\nelement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animationend"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("相比 CSS transition，CSS 动画还有相关的事件，包括：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("animationstart")]),t._v(": animationstart 事件会在 CSS 动画开始时触发。如果有 animation-delay 延时，事件会在延迟时效过后立即触发")]),t._v(" "),n("li",[n("strong",[t._v("animationiteration")]),t._v(": 循环动画中，在每次循环结束时触发")]),t._v(" "),n("li",[n("strong",[t._v("animationcancel")]),t._v(": animationcancel 事件会在 CSS 异常终止时触发（即在未触发 animationend 事件的情况下停止运行）")])]),t._v(" "),n("p",[t._v("Vue 的 CSS 过渡中会使用到这两个事件，后续会讲到。")]),t._v(" "),n("h2",{attrs:{id:"transition-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition-组件","aria-hidden":"true"}},[t._v("#")]),t._v(" transition 组件")]),t._v(" "),n("p",[t._v("Vue 提供了 transition 的封装组件，可以给元素和组件添加 entering/leaving 过渡。")]),t._v(" "),n("h3",{attrs:{id:"transition-的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition-的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" transition 的使用")]),t._v(" "),n("p",[t._v("我们看看有哪些情况下可以使用 transition：")]),t._v(" "),n("ul",[n("li",[t._v("条件渲染 (使用 v-if )")]),t._v(" "),n("li",[t._v("条件展示 (使用 v-show )")]),t._v(" "),n("li",[t._v("动态组件")]),t._v(" "),n("li",[t._v("组件根节点")])]),t._v(" "),n("p",[t._v("transition 的封装组件，主要是结合组件生命周期，在一些特殊逻辑（如 v-if、v-show、v-for）里增加钩子，来触发动画的实现。")]),t._v(" "),n("p",[t._v("我们知道，Vue 里面实现动画过渡有 CSS 和 Javascript 两种，而两种又是可以结合的，当然这是通过预埋的钩子以及上面讲到的 CSS 事件的方式来实现的。")]),t._v(" "),n("p",[t._v("至于具体的实现，后面分篇来讲一下，这里就不过多讲述了。")]),t._v(" "),n("h3",{attrs:{id:"来个-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#来个-demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 来个 demo")]),t._v(" "),n("p",[t._v("废话少说，直接甩个"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%8D%95%E5%85%83%E7%B4%A0-%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%87%E6%B8%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网的例子"),n("OutboundLink")],1),t._v("：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- transition的使用 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show = !show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Toggle\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 简单的css transition实现动画 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fade-enter-active,\n.fade-leave-active")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.5s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n.fade-enter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .fade-leave-to "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .fade-leave-active below version 2.1.8 */")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里是使用的 CSS transition 方式来实现动画过渡的，我们看看在切换 v-if 的时候都发生了什么。")]),t._v(" "),n("ol",[n("li",[t._v("v-if 绑定值的变更，导致插入或删除包含在 transition 组件中的元素。")]),t._v(" "),n("li",[t._v("自动嗅探目标元素是否应用了 CSS 过渡或动画。这里的确使用 CSS 过渡，于是会在元素添加时添加 CSS 类名，并判断动画加载完之后删除 CSS 类名。")]),t._v(" "),n("li",[t._v("如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。（这里由于没有使用到，故不会执行）")]),t._v(" "),n("li",[t._v("如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。（当然在我们的例子中，这一步也不会生效）")])]),t._v(" "),n("h2",{attrs:{id:"结束语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),n("p",[t._v("本节我们简单介绍了 Vue 中 transition 封装组件的使用和 demo ，以及一些实现原理相关的基础知识。由于直接举的官方例子，这里效果页面大家可以到官网上看看就好啦。")])])},[],!1,null,null,null);a.default=e.exports}}]);
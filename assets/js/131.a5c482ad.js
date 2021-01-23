(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{418:function(t,a,s){"use strict";s.r(a);var e=s(16),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("最近项目中需要搭建一个多页面的环境，包括本地路由服务和分页面打包。\n本节实现单个页面或是完整页面的打包过程的过程。")]),t._v(" "),s("h2",{attrs:{id:"npm-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 模块")]),t._v(" "),s("p",[t._v("打包页面需要用到一些 npm 模块（需单独安装），这里我们简单介绍一下。")]),t._v(" "),s("h3",{attrs:{id:"ora模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ora模块","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/ora",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ora")]),t._v("模块"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("主要用来实现"),s("code",[t._v("node.js")]),t._v("命令行环境的 loading 效果，和显示各种状态的图标等。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ora "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ora"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始显示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" spinner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ora")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loading unicorns"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一秒后设置颜色和内容")]),t._v("\n  spinner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yellow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  spinner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loading rainbows"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("更多的选项，大家到"),s("a",{attrs:{href:"https://www.npmjs.com/package/ora",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),s("OutboundLink")],1),t._v("上面看吧。")]),t._v(" "),s("h3",{attrs:{id:"rimraf模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rimraf模块","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/rimraf",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("rimraf")]),t._v("模块"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("实现"),s("code",[t._v("node.js")]),t._v("环境的 UNIX 命令"),s("code",[t._v("rm -rf")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rimraf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("f")]),t._v("，可为"),s("code",[t._v("glob")]),t._v("匹配规则的文件")]),t._v(" "),s("li",[s("code",[t._v("[opts]")]),t._v("，一些选项，具体可参考"),s("a",{attrs:{href:"https://www.npmjs.com/package/rimraf",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("callback")]),t._v("，若执行过程中出错，则回调参数为"),s("code",[t._v("error")])])]),t._v(" "),s("p",[t._v("如果大家用过"),s("code",[t._v("shalljs")]),t._v("，这是一个"),s("code",[t._v("node.js")]),t._v("环境的"),s("code",[t._v("Unix shell")]),t._v("命令，里面当然已经包括"),s("code",[t._v("rm")]),t._v("命令了。")]),t._v(" "),s("h3",{attrs:{id:"chalk模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chalk模块","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/chalk",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("chalk")]),t._v("模块"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("命令行输出各种样式的字符串。")]),t._v(" "),s("ul",[s("li",[t._v("使用方式")])]),t._v(" "),s("p",[s("code",[t._v("chalk.<style>[.<style>...](string, [string...])")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如，红色带下划线的粗体字")]),t._v("\nchalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("underline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"node-js-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" node.js 模块")]),t._v(" "),s("p",[t._v("介绍将使用到的 node.js 自带 API 和内置模块（无需安装）。")]),t._v(" "),s("h3",{attrs:{id:"path模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path模块","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/api/path.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("path")]),t._v("模块"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("path")]),t._v("模块提供了一些工具函数，用于处理文件与目录的路径。这是"),s("code",[t._v("node.js")]),t._v("一个自带的模块。")]),t._v(" "),s("p",[s("code",[t._v("path")]),t._v("模块的默认操作会根据"),s("code",[t._v("Node.js")]),t._v("应用程序运行的操作系统的不同而变化。比如，当运行在"),s("code",[t._v("Windows")]),t._v("操作系统上时，"),s("code",[t._v("path")]),t._v("模块会认为使用的是"),s("code",[t._v("Windows")]),t._v("风格的路径。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("path.join([...paths])")])])]),t._v(" "),s("p",[t._v("使用平台特定的分隔符把全部给定的"),s("code",[t._v("path")]),t._v("片段连接到一起，并规范化生成的路径。\n这个大概是我们写 webpack 配置的时候，最常用的一个方法啦，像"),s("code",[t._v("path.join(__dirname, 'src')")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("path.parse(path)")])])]),t._v(" "),s("p",[t._v("返回一个对象，对象的属性表示"),s("code",[t._v("path")]),t._v("的元素。返回属性包括："),s("code",[t._v("dir")]),t._v(", "),s("code",[t._v("root")]),t._v(", "),s("code",[t._v("base")]),t._v(", "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("ext")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("path.format(pathObject)")])])]),t._v(" "),s("p",[t._v("会从一个对象返回一个路径字符串，与"),s("code",[t._v("path.parse()")]),t._v("相反。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("path.dirname(path)")])])]),t._v(" "),s("p",[t._v("返回一个"),s("code",[t._v("path")]),t._v("的目录名，类似于"),s("code",[t._v("Unix")]),t._v("中的"),s("code",[t._v("dirname")]),t._v("命令。")]),t._v(" "),s("h3",{attrs:{id:"process模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process模块","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/api/process.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("process")]),t._v("模块"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("process")]),t._v("对象是一个"),s("code",[t._v("global")]),t._v("（全局变量），提供有关信息，控制当前"),s("code",[t._v("Node.js")]),t._v("进程。\n作为一个对象，它对于"),s("code",[t._v("Node.js")]),t._v("应用程序始终是可用的，故无需使用"),s("code",[t._v("require()")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("process.execPath")])])]),t._v(" "),s("p",[t._v("返回启动"),s("code",[t._v("Node.js")]),t._v("进程的可执行文件所在的绝对路径。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("process.argv")])])]),t._v(" "),s("p",[s("code",[t._v("process.argv")]),t._v("属性返回一个数组，这个数组包含了启动"),s("code",[t._v("Node.js")]),t._v("进程时的命令行参数。第一个元素为"),s("code",[t._v("process.execPath")]),t._v("。\n如果需要获取"),s("code",[t._v("argv[0]")]),t._v("的值请参见"),s("code",[t._v("process.argv0")]),t._v("。第二个元素为当前执行的 JavaScript 文件路径，剩余的元素为其他命令行参数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行以下命令，启动进程：")]),t._v("\n$ node process"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js one two"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("three four\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将输出：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mjr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" one\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" two"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("three\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" four\n")])])]),s("ul",[s("li",[s("code",[t._v("process.env")])])]),t._v(" "),s("p",[s("code",[t._v("process.env")]),t._v("属性返回一个包含用户环境信息的对象。\n像我们经常看到生产环境"),s("code",[t._v("process.env.NODE_ENV = 'production'")]),t._v("和开发环境"),s("code",[t._v("process.env.NODE_ENV = 'dev'")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("输入流"),s("code",[t._v("process.stdin")]),t._v("和输出流"),s("code",[t._v("process.stdout")])])]),t._v(" "),s("p",[s("code",[t._v("process")]),t._v("还有更多的进程管理相关的方法和参数，大家可以参考"),s("a",{attrs:{href:"http://nodejs.cn/api/process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("本节主要介绍了后面打包页面时会使用到的一些 node.js 内置和依赖模块，包括终端输出样式、命令、"),s("code",[t._v("path")]),t._v("、"),s("code",[t._v("process")]),t._v("等。后面一节也会用到来进行页面的打包。"),s("br"),t._v("\n可参考代码"),s("a",{attrs:{href:"https://github.com/godbasin/vue-multi-pages/blob/master/build/build.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-vue-multi-pages"),s("OutboundLink")],1),t._v("，主要是这套环境使用在 vue 上的 demo。")])])},[],!1,null,null,null);a.default=r.exports}}]);
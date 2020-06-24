(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{359:function(t,n,s){"use strict";s.r(n);var a=s(25),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"闭包-进阶必问！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包-进阶必问！"}},[t._v("#")]),t._v(" 闭包 进阶必问！")]),t._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("什么是闭包")]),t._v(" "),s("ul",[s("li",[t._v("闭包就是能够"),s("code",[t._v("读取其他函数内部变量的函数")])]),t._v(" "),s("li",[t._v("创建闭包的最常见的方式就是在"),s("code",[t._v("一个函数内创建另一个函数")]),t._v("，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域")])])]),t._v(" "),s("h2",{attrs:{id:"闭包的用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的用途"}},[t._v("#")]),t._v(" 闭包的用途")]),t._v(" "),s("ol",[s("li",[t._v("读取函数内部的变量：父函数为 f1，子函数为 f2 。f2 可以读取 f1 中的变量")]),t._v(" "),s("li",[t._v("让这些变量的值始终保持在内存中。不会再 f1 调用后被自动清除。")]),t._v(" "),s("li",[t._v("方便调用上下文的局部变量。利于代码封装。\n"),s("blockquote",[s("p",[t._v("原因：f1 是 f2 的父函数，f2 被赋给了一个全局变量，f2 始终存在内存中，f2 的存在依赖 f1，因此 f1 也始终存在内存中，不会在调用结束后，被垃圾回收机制回收。")])])]),t._v(" "),s("li",[t._v("可以让不能接收参数的方法变成可以接收参数，比如：vue 中的 "),s("code",[t._v("computed")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 判断tab链接是否高亮\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isCurrPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前页面的路由。只取path。path不带任何参数。匹配")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" currHref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currHref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 {{isCurrPath('url')}} 返回ture就是高亮。false就是非高亮tab")]),t._v("\n")])])]),s("h2",{attrs:{id:"先来一个题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先来一个题目"}},[t._v("#")]),t._v(" 先来一个题目")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn 函数中有console 调用就会打印对应的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请写出下面的输出结果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("m")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. console = ?")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. console = ?")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. console = ?")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. console = ?")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5. console = ?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6. console = ?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 7. console = ?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8. console = ?")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9. console ? 10 .console ?")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11. console ?")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12. console ?")]),t._v("\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("查看答案")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("a 对应编号")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("a 打印的值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("b 对应编号")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("b 打印的值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("c 对应编号")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("c 打印的值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")])])])]),t._v(" "),s("p",[t._v("全对了吗？恭喜可以跳过这块了~")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("查看解析")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("a 模块")]),t._v(" "),s("ul",[s("li",[t._v("console - 1 ：执行 "),s("code",[t._v("a.fn(0)")]),t._v(" => "),s("code",[t._v("o")]),t._v("的确不存在。返回了一个对象： "),s("code",[t._v("a = { fn (m) { return fn(m,0) } }")]),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意 "),s("code",[t._v("n 被改成了 0")]),t._v("。 "),s("strong",[t._v("因为内部函数可以访问外部函数的变量，理解这一点才能继续执行下去！！")])])]),t._v(" "),s("ul",[s("li",[t._v("console - 2 ：执行 "),s("code",[t._v("a.fn(1)")]),t._v(" = 执行"),s("code",[t._v("fn(1)")]),t._v(" => 执行了 "),s("code",[t._v("fn(1,0) = [fn(m,n) 这时候的 fn是最外层的fn]")]),t._v(" => 所以打印的 n 就是参数 0。这时候的 "),s("code",[t._v("O")]),t._v(" 来自第一次执行 "),s("code",[t._v("a.fn(0)")])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("因为这是闭包特性之一：内部函数可以访问外部函数的变量")]),t._v("，第一次执行 a.fn(0) 的 "),s("code",[t._v("参数n")]),t._v(" 被保留了下来！")]),t._v(" "),s("p",[s("strong",[t._v("注意这里虽然有返回值，可是并没有地方接收。a 还是之前的对象")])])]),t._v(" "),s("ul",[s("li",[t._v("console - 3 ：既然 a 没有变化。那继续执行 "),s("code",[t._v("a.fn(2)")]),t._v(" = 执行 "),s("code",[t._v("fn(2)")]),t._v(" => 执行了 "),s("code",[t._v("fn(2,0)")]),t._v(" => 打印的还是 "),s("code",[t._v("0")]),t._v("。原因同上：n 被保留了下来！并且没有重新赋值")]),t._v(" "),s("li",[t._v("console - 4：理由同 3。n 一直没变化")])])]),t._v(" "),s("li",[s("p",[t._v("b 模块")]),t._v(" "),s("blockquote",[s("blockquote",[s("p",[t._v("a 与 b 最大的不同在于：a 是分别调用，就算最后的 "),s("code",[t._v("fn(m,n)")]),t._v(" 返回了对象，可是 a 并没有接收，a 一直都是一开始的对象:"),s("code",[t._v("a = { fn (m) { return fn(m,n) } }")])]),t._v(" "),s("p",[t._v("而 b 则是"),s("code",[t._v("链式调用")]),t._v("。上一步的返回值会被下一次调用的时候用上。直接分析代码：")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("console - 5：第一步运行 "),s("code",[t._v("b = fn(0)")]),t._v(" => o 不存在，undefined。 "),s("strong",[t._v("注意")]),t._v("因为是链式调用，此时 b 还没被正确赋值，返回的对象："),s("code",[t._v("{ fn (m) { return fn(m,0) } }")]),t._v(" 会直接被步骤 6 接着执行")])]),t._v(" "),s("li",[s("p",[t._v("console - 6：这时候执行 "),s("code",[t._v("fn(1)")]),t._v("的"),s("code",[t._v("fn")]),t._v(" 来自"),s("code",[t._v("console-5")]),t._v("的返回值 => 执行 "),s("code",[t._v("fn(1)")]),t._v(" 时会执行 "),s("code",[t._v("fn(m,n)")]),t._v(" = 执行 "),s("code",[t._v("fn(1,0)")]),t._v(" 0 也是来自第一步的 "),s("code",[t._v("fn(0)")]),t._v("。因为闭包把外部函数的 n 保留了下来。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("与此同时 执行"),s("code",[t._v("fn(1,0)")]),t._v(" 又返回了一个对象！"),s("code",[t._v("{fn(m){ return fn(m,1)}}")]),t._v(" 。变量 n = 1，在父函数(fn(1,0))传入的")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("console - 7：链式调用的原因，所以执行 "),s("code",[t._v("fn(2)")]),t._v(" 的时候会接着步骤 6 返回的对象的 fn，就会执行到： "),s("code",[t._v("fn(2,1)")]),t._v(" 此时的 "),s("code",[t._v("变量 o = 1")]),t._v(" 来自与 console - 6 的"),s("code",[t._v("fn(1,0)")]),t._v(" 。所以 输出的 "),s("code",[t._v("变量o")]),t._v(" 的值便是 1。"),s("strong",[t._v("并且 n 会被继续被改成 2")])])]),t._v(" "),s("li",[s("p",[t._v("console - 8：理由同上，上一步骤的 n 被修改，并且保存了下来，所以执行 "),s("code",[t._v("fn(3)")]),t._v(" 相当于执行了 "),s("code",[t._v("fn(3,2)")]),t._v("。打印的值便是 2 。这时候链式调用的最后一个已经被执行完，b 被赋值为 :"),s("code",[t._v("{fn(m) return fn(m,3)}")]),t._v("。可是已经没有后续操作了，")])])]),t._v(" "),s("blockquote",[s("p",[t._v("b 模块结束。"),s("strong",[t._v("注意理解为什么最后是 "),s("code",[t._v("fn(m,3)")]),t._v("。这是贯穿这一题的精髓！")])])])]),t._v(" "),s("li",[s("p",[t._v("c 模块")]),t._v(" "),s("blockquote",[s("blockquote",[s("p",[t._v("c 模块与 a 和 b 的区别为，结合了他们 2 者的模式，既有闭包，也有链式调用，链式调用后赋值给 c。c 在继续执行了 2 次 fn")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("console - 9、console - 10：这个链式调用和 b 模块的一致，输出结果和"),s("code",[t._v("5,6")]),t._v("一致分别是"),s("code",[t._v("undefined")]),t._v("和"),s("code",[t._v("0")]),t._v("。此时的 c 被赋值为："),s("code",[t._v("{fn(m){return fn(m,1)}}")]),t._v(" 。不理解的可以重新跑一下 b 模块的 console - 8")])]),t._v(" "),s("li",[s("p",[t._v("console - 11：看上一步返回的 "),s("code",[t._v("{fn(m){return fn(m,1)}}")]),t._v(" 所以执行 "),s("code",[t._v("c.fn(2)")]),t._v(" 会接着执行 "),s("code",[t._v("fn(2,1)")]),t._v("。所以重新打印的是 "),s("code",[t._v("变量o = 1")]),t._v("。"),s("strong",[t._v("这里 fn(2,1)虽然有返回值，可是 c 并没有接收，所以 c 并没有被修改！参照 a 模块的原理")])])]),t._v(" "),s("li",[s("p",[t._v("console - 12：上一步也说了。既然 c 没有被修改，那么 c 还是 "),s("code",[t._v("{fn(m){return fn(m,1)}}")]),t._v("。所以执行 "),s("code",[t._v("c.fn(3)")]),t._v("。会触发 "),s("code",[t._v("fn(3,1)")]),t._v("。打印的变量就还是 1")])])])])])]),t._v(" "),s("h2",{attrs:{id:"闭包的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的优缺点"}},[t._v("#")]),t._v(" 闭包的优缺点")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ol",[s("li",[t._v("延长变量的生命周期（因为变量被子函数引用了，所以不会在父函数被调用后清除）")]),t._v(" "),s("li",[t._v("让外部函数可以访问内部函数中的变量，因为闭包返回的方法可以赋值给外部的函数，突破作用域的限制")])]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("闭包的优点也是闭包的缺点")]),t._v(" "),s("ol",[s("li",[t._v("变量不会被清除，如此反复操作多次后，将会有很多的变量存在内存中，很容易就会内存溢出。需要手动清除（把变量赋值为 null）")])]),t._v(" "),s("comment")],1)}),[],!1,null,null,null);n.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{382:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-自定义指令"}},[t._v("#")]),t._v(" vue 自定义指令")]),t._v(" "),a("p",[t._v("先回顾 vue 的指令有哪些："),a("RouterLink",{attrs:{to:"/01.基础/vue中有哪些指令作用是什么.html"}},[t._v("vue 中有哪些指令作用是什么")])],1),t._v(" "),a("h2",{attrs:{id:"自定义指令基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令基本语法"}},[t._v("#")]),t._v(" 自定义指令基本语法")]),t._v(" "),a("p",[t._v("参考 vue 的示例，写一个自动聚焦的指令")]),t._v(" "),a("h3",{attrs:{id:"全局指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局指令"}},[t._v("#")]),t._v(" 全局指令")]),t._v(" "),a("p",[a("code",[t._v("inserted")]),t._v(" 是一个钩子函数，后面会提到")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册一个全局自定义指令 `v-focus`")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当被绑定的元素插入到 DOM 中时……")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚焦元素")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"局部指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部指令"}},[t._v("#")]),t._v(" 局部指令")]),t._v(" "),a("p",[t._v("在组件中定义一个 "),a("code",[t._v("directives")]),t._v("（和 methods 等同级）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directives"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    focus"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令的定义")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"指令使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令使用"}},[t._v("#")]),t._v(" 指令使用")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-focus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"指令的钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令的钩子函数"}},[t._v("#")]),t._v(" 指令的钩子函数")]),t._v(" "),a("p",[t._v("一个指令定义对象可以提供如下几个钩子函数 (均为可选)："),a("br"),t._v("\n刚才的示例我们用的钩子函数是 "),a("code",[t._v("inserted")])]),t._v(" "),a("ul",[a("li",[t._v("钩子函数一共有：\n"),a("ul",[a("li",[a("code",[t._v("bind")]),t._v("：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。")]),t._v(" "),a("li",[a("code",[t._v("inserted")]),t._v(" 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)")]),t._v(" "),a("li",[a("code",[t._v("update")]),t._v(" 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 ("),a("s",[t._v("疑惑，却不说")]),t._v(" TODO 补充这一块内容)")]),t._v(" "),a("li",[a("code",[t._v("componentUpdated")]),t._v(" 指令所在组件的 VNode "),a("strong",[t._v("及其子 VNode")]),t._v(" 全部更新后调用。")]),t._v(" "),a("li",[a("code",[t._v("unbind")]),t._v(" 只调用一次，指令与元素解绑时调用。")])])])]),t._v(" "),a("h2",{attrs:{id:"钩子函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数的参数"}},[t._v("#")]),t._v(" 钩子函数的参数")]),t._v(" "),a("blockquote",[a("p",[t._v("摘自官方原话")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("el")]),t._v("：指令所绑定的元素，可以用来直接操作 DOM。")]),t._v(" "),a("li",[a("code",[t._v("binding")]),t._v("：一个对象，包含以下 property：\n"),a("ul",[a("li",[a("code",[t._v("name")]),t._v("：指令名，不包括 v- 前缀。")]),t._v(" "),a("li",[a("code",[t._v("value")]),t._v('：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。')]),t._v(" "),a("li",[a("code",[t._v("oldValue")]),t._v("：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。")]),t._v(" "),a("li",[a("code",[t._v("expression")]),t._v('：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。')]),t._v(" "),a("li",[a("code",[t._v("arg")]),t._v('：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。')]),t._v(" "),a("li",[a("code",[t._v("modifiers")]),t._v("：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。")])])]),t._v(" "),a("li",[a("code",[t._v("vnode")]),t._v("：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。")]),t._v(" "),a("li",[a("code",[t._v("oldVnode")]),t._v("：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。")])]),t._v(" "),a("comment")],1)}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{384:function(t,a,s){"use strict";s.r(a);var e=s(25),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-中有哪些指令作用是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中有哪些指令作用是什么"}},[t._v("#")]),t._v(" vue 中有哪些指令作用是什么")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#v-if-v-else-if-v-else"}},[t._v("v-if v-else-if v-else")])]),s("li",[s("a",{attrs:{href:"#v-show"}},[t._v("v-show")])]),s("li",[s("a",{attrs:{href:"#v-for"}},[t._v("v-for")])]),s("li",[s("a",{attrs:{href:"#v-bind"}},[t._v("v-bind / :")])]),s("li",[s("a",{attrs:{href:"#v-on"}},[t._v("v-on / @")])]),s("li",[s("a",{attrs:{href:"#v-model"}},[t._v("v-model")])]),s("li",[s("a",{attrs:{href:"#v-html"}},[t._v("v-html")])]),s("li",[s("a",{attrs:{href:"#v-text"}},[t._v("v-text")])]),s("li",[s("a",{attrs:{href:"#v-pre"}},[t._v("v-pre")])]),s("li",[s("a",{attrs:{href:"#v-cloak"}},[t._v("v-cloak")])]),s("li",[s("a",{attrs:{href:"#v-once"}},[t._v("v-once")])]),s("li",[s("a",{attrs:{href:"#v-slot"}},[t._v("v-slot / #")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"v-if-v-else-if-v-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-v-else-if-v-else"}},[t._v("#")]),t._v(" v-if v-else-if v-else")]),t._v(" "),s("p",[t._v("if else 指令。用于控制节点是否渲染。如果 if 为 false 的话，页面是不会渲染对应的节点。if 的每次 true 和 false 切换都会引起 dom 的新增/删除，相对来说开销较大（注意是相对来说）")]),t._v(" "),s("p",[t._v("v-if 为 "),s("code",[t._v("false")]),t._v(" 的时候，如果是组件，那么组件将会触发 "),s("code",[t._v("beforeDestroy")]),t._v(" "),s("code",[t._v("destroyed")]),t._v(" 的生命周期进行销毁。")]),t._v(" "),s("blockquote",[s("p",[t._v("拓展：如果子组件还嵌套着组件，使用 "),s("code",[t._v('v-if="false"')]),t._v(" 会先销毁最里层子组件，在逐渐向父组件删除。")])]),t._v(" "),s("h2",{attrs:{id:"v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[t._v("#")]),t._v(" v-show")]),t._v(" "),s("p",[t._v("v-show 相对 v-if 会友好一些。v-show 实际上是给节点啊添加了 "),s("code",[t._v("display:none")]),t._v(" 属性，只隐藏，不会引起 dom 的重新计算，对应的组件也不会销毁。")]),t._v(" "),s("h2",{attrs:{id:"v-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-for"}},[t._v("#")]),t._v(" v-for")]),t._v(" "),s("p",[t._v("循环事件 "),s("code",[t._v('v-for="(item,index) in 10"')]),t._v(" 常用 "),s("code",[t._v("for in")]),t._v(" 语法。item 就是对应的项的值，index 则为对象的索引（从 0 开始）。使用 "),s("code",[t._v("v-for")]),t._v(" 需要配合"),s("code",[t._v("key")]),t._v(" 使用。目的也是提高网页性能")]),t._v(" "),s("blockquote",[s("p",[t._v("v-if 和 v-for 不要在同一节点一起使用，默认来说 "),s("code",[t._v("v-if")]),t._v("的优先级会更高，可能会引发循环直接不渲染的情况，尽量避免一起使用")])]),t._v(" "),s("h2",{attrs:{id:"v-bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" v-bind / :")]),t._v(" "),s("p",[t._v("绑定指令，绑定各种对象和值，缩写为 "),s("code",[t._v(":")])]),t._v(" "),s("h2",{attrs:{id:"v-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-on"}},[t._v("#")]),t._v(" v-on / @")]),t._v(" "),s("p",[s("code",[t._v("v-on")]),t._v(" 和我们平时写的 "),s("code",[t._v("onclick")]),t._v(" 含义差不多"),s("br"),t._v(" "),s("code",[t._v('v-on:click="handle()"')]),t._v(" 或者不带参数也行 "),s("code",[t._v('v-on:click="handle()"')])]),t._v(" "),s("p",[t._v("简写："),s("br"),t._v(" "),s("code",[t._v('@click="handle()"')]),t._v(" / "),s("code",[t._v('@click="handle"')])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("v-on 还提供了很多修饰符")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".stop")]),t._v(" - 调用 event.stopPropagation()。")]),t._v(" "),s("li",[s("code",[t._v(".prevent")]),t._v(" - 调用 event.preventDefault()。")]),t._v(" "),s("li",[s("code",[t._v(".capture")]),t._v(" - 添加事件侦听器时使用 capture 模式。")]),t._v(" "),s("li",[s("code",[t._v(".self")]),t._v(" - 只当事件是从侦听器绑定的元素本身触发时才触发回调。")]),t._v(" "),s("li",[s("code",[t._v(".{keyCode | keyAlias}")]),t._v(" - 只当事件是从特定键触发时才触发回调。")]),t._v(" "),s("li",[s("code",[t._v(".native")]),t._v(" - 监听组件根元素的原生事件。")]),t._v(" "),s("li",[s("code",[t._v(".once")]),t._v(" - 只触发一次回调。")]),t._v(" "),s("li",[s("code",[t._v(".left")]),t._v(" - (2.2.0) 只当点击鼠标左键时触发。")]),t._v(" "),s("li",[s("code",[t._v(".right")]),t._v(" - (2.2.0) 只当点击鼠标右键时触发。")]),t._v(" "),s("li",[s("code",[t._v(".middle")]),t._v(" - (2.2.0) 只当点击鼠标中键时触发。")]),t._v(" "),s("li",[s("code",[t._v(".passive")]),t._v(" - (2.3.0) 以 { passive: true } 模式添加侦听器")])])])]),t._v(" "),s("h2",{attrs:{id:"v-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),s("p",[t._v("用于表单和数据的双向数据绑定。当然也可以在组件中使用 "),s("code",[t._v("v-model")]),t._v(" 来同步组件中的状态（比如一个弹窗的显示隐藏，就可以用 "),s("code",[t._v("v-model")]),t._v(" 来管理）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对于表单的组件来说，"),s("code",[t._v("v-model")]),t._v(" 也提供了很多"),s("code",[t._v("修饰符")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("v-model.lazy")]),t._v(" - 取代 input 监听 change 事件")]),t._v(" "),s("li",[s("code",[t._v("v-model.number")]),t._v(" - 输入字符串转为有效的数字")]),t._v(" "),s("li",[s("code",[t._v("v-model.trim")]),t._v(" - 输入首尾空格过滤")])])])]),t._v(" "),s("h2",{attrs:{id:"v-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-html"}},[t._v("#")]),t._v(" v-html")]),t._v(" "),s("p",[t._v("更新元素的 "),s("code",[t._v("innerHTML")])]),t._v(" "),s("p",[t._v("在单文件组件里，"),s("code",[t._v("scoped 的样式")]),s("strong",[t._v("不会应用在 v-html 内部")]),t._v("，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 CSS Modules 或用一个"),s("code",[t._v("额外的全局 <style> 元素")]),t._v("手动设置类似 BEM 的作用域策略。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("慎用")]),t._v(" "),s("p",[t._v("网站上动态渲染任意 HTML 是非常危险的，因为容易导致 "),s("code",[t._v("XSS 攻击")]),t._v("。只在可信内容上使用 v-html，永不用在用户提交的内容上。")])]),t._v(" "),s("h2",{attrs:{id:"v-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-text"}},[t._v("#")]),t._v(" v-text")]),t._v(" "),s("p",[t._v("更新元素的 textContent。如果要更新部分的 textContent，需要使用 "+t._s(t.Mustache)+" 插值。")]),t._v(" "),s("h2",{attrs:{id:"v-pre"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-pre"}},[t._v("#")]),t._v(" v-pre")]),t._v(" "),s("p",[t._v("因为 vue 渲染的语法是 "),s("code",[t._v("{{}}")]),t._v("。可是并不能避免我们在页面上也想输出"),s("code",[t._v("{{}}")]),t._v(" 这种符号。就可以用到 "),s("code",[t._v("v-pre")]),s("br"),t._v("\n跳过大量没有指令的节点会加快编译。")]),t._v(" "),s("p",[s("span",{pre:!0},[t._v("{{ this will not be compiled }}")])]),t._v(" "),s("h2",{attrs:{id:"v-cloak"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-cloak"}},[t._v("#")]),t._v(" v-cloak")]),t._v(" "),s("p",[t._v("这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 "),s("code",[t._v("[v-cloak] { display: none }")]),t._v(" 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[v-cloak]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 假设前面有大量的节点在渲染，耗时5s才到这个节点 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-cloak")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ message }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("不会显示，直到编译结束。")]),t._v(" "),s("h2",{attrs:{id:"v-once"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-once"}},[t._v("#")]),t._v(" v-once")]),t._v(" "),s("p",[t._v("只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。")]),t._v(" "),s("h2",{attrs:{id:"v-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-slot"}},[t._v("#")]),t._v(" v-slot / "),s("code",[t._v("#")])]),t._v(" "),s("p",[t._v("插槽语法，缩写是 "),s("code",[t._v("#")]),s("br"),t._v("\n可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。")]),t._v(" "),s("p",[t._v("下面表示插入到一个 "),s("code",[t._v("具名插槽（header）中")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("也可以使用插槽传参。value 就是要传递的参数甚至可以使用解构赋值")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#header")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{header.value}}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{header.value}}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{x,y}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{x}} {{y}}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=v.exports}}]);
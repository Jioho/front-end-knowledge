(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{395:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue-生命周期的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期的理解"}},[t._v("#")]),t._v(" vue 生命周期的理解")]),t._v(" "),e("p",[t._v("总共分为 8 个阶段创建前/后，载入前/后，更新前/后，销毁前/后\n")]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#beforecreate-创建前"}},[t._v("beforeCreate 创建前")])]),e("li",[e("a",{attrs:{href:"#created-完成创建"}},[t._v("created 完成创建")])]),e("li",[e("a",{attrs:{href:"#beforemount-挂载前"}},[t._v("beforeMount 挂载前")])]),e("li",[e("a",{attrs:{href:"#mounted-挂载完成"}},[t._v("mounted 挂载完成")])]),e("li",[e("a",{attrs:{href:"#beforeupdate-更新前"}},[t._v("beforeUpdate 更新前")])]),e("li",[e("a",{attrs:{href:"#updated-更新完成"}},[t._v("updated 更新完成")])]),e("li",[e("a",{attrs:{href:"#beforedestroy-销毁前"}},[t._v("beforeDestroy 销毁前")])]),e("li",[e("a",{attrs:{href:"#destroyed-销毁完成"}},[t._v("destroyed 销毁完成")])]),e("li",[e("a",{attrs:{href:"#vue-生命周期图"}},[t._v("vue 生命周期图")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"beforecreate-创建前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-创建前"}},[t._v("#")]),t._v(" beforeCreate 创建前")]),t._v(" "),e("p",[t._v("创建前执行（vue 实例的挂载元素$el 和数据对象 data 都为 undefined，还未初始化）")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("strong",[t._v("initState:")])]),t._v(" "),e("ul",[e("li",[t._v("作用：初始化 "),e("code",[t._v("props")]),t._v("、"),e("code",[t._v("data")]),t._v("、"),e("code",[t._v("methods")]),t._v("、"),e("code",[t._v("watch")]),t._v("、"),e("code",[t._v("computed")]),t._v(" 等属性")]),t._v(" "),e("li",[t._v("限制：beforeCreate 不能获取到 props，也不能调用 methods 的函数。也不能访问 DOM 因为并没有渲染 DOM")]),t._v(" "),e("li",[t._v("提示：要使用以上的 props,data,methods,Dom 等要等到 "),e("code",[t._v("created")])])]),t._v(" "),e("h2",{attrs:{id:"created-完成创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created-完成创建"}},[t._v("#")]),t._v(" created 完成创建")]),t._v(" "),e("p",[t._v("完成创建 （完成了 "),e("code",[t._v("data")]),t._v(" 数据初始化，el 还未初始化）\n这时候可以访问方法和 data。请求也可以放在这里开始执行")]),t._v(" "),e("p",[e("strong",[t._v("这时候只是初始化了 watcht 属性，可是 watch 还不能用")])]),t._v(" "),e("h2",{attrs:{id:"beforemount-挂载前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-挂载前"}},[t._v("#")]),t._v(" beforeMount 挂载前")]),t._v(" "),e("p",[t._v("载入前（vue 实例的$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点）")]),t._v(" "),e("ul",[e("li",[t._v("作用：\n"),e("ul",[e("li",[t._v("beforeMount 开始渲染虚拟 dom")]),t._v(" "),e("li",[t._v("这时候会执行一个 "),e("code",[t._v("new Watcher")]),t._v(" 用来监听数据更新的")]),t._v(" "),e("li",[t._v("mounted 钩子函数的执行顺序也是先子后父（子组件的 mounted 先执行，在渲染父组件的 mounted 方法）。")])])])]),t._v(" "),e("h2",{attrs:{id:"mounted-挂载完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted-挂载完成"}},[t._v("#")]),t._v(" mounted 挂载完成")]),t._v(" "),e("p",[t._v("载入后 html 已经渲染(vue 实例挂载完成。页面渲染完成)")]),t._v(" "),e("p",[e("code",[t._v("【重点】")]),t._v("watch 的挂载是在 "),e("code",[t._v("beforeMounted")]),t._v(" 的时候，而实际可以监听则是在 "),e("code",[t._v("mounted")]),t._v(" 之后")]),t._v(" "),e("h2",{attrs:{id:"beforeupdate-更新前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate-更新前"}},[t._v("#")]),t._v(" beforeUpdate 更新前")]),t._v(" "),e("p",[t._v("更新前状态（view 层的数据变化前，不是 data 中的数据改变前）")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Watcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    updateComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    noop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isMounted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeUpdate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* isRenderWatcher */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("作用：监听更新数据")]),t._v(" "),e("li",[t._v("提示：\n"),e("ul",[e("li",[t._v("beforeUpdate 的执行时机是在渲染 Watcher 的 before 函数中")]),t._v(" "),e("li",[t._v("有个判断 "),e("code",[t._v("必须在组件挂载后才会执行这个方法")])])])])]),t._v(" "),e("h2",{attrs:{id:"updated-更新完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated-更新完成"}},[t._v("#")]),t._v(" updated 更新完成")]),t._v(" "),e("p",[t._v("更新状态后")]),t._v(" "),e("h2",{attrs:{id:"beforedestroy-销毁前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-销毁前"}},[t._v("#")]),t._v(" beforeDestroy 销毁前")]),t._v(" "),e("p",[t._v("销毁前")]),t._v(" "),e("ul",[e("li",[t._v("作用：\n销毁组件 从 parent 的 "),e("code",[t._v("$children")]),t._v(" 中删掉自身，删除 "),e("code",[t._v("watcher")])]),t._v(" "),e("li",[t._v("提示：\n销毁自己的时候又会触发子组件的销毁，所以 "),e("code",[t._v("destroy")]),t._v(" 钩子函数执行顺序是"),e("code",[t._v("先子后父")]),t._v("，和 mounted 过程一样")])]),t._v(" "),e("h2",{attrs:{id:"destroyed-销毁完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroyed-销毁完成"}},[t._v("#")]),t._v(" destroyed 销毁完成")]),t._v(" "),e("p",[t._v("销毁后 （在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在）")]),t._v(" "),e("h2",{attrs:{id:"vue-生命周期图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期图"}},[t._v("#")]),t._v(" vue 生命周期图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/Jioho/img/raw/master/knowledge/20200615232700.png",alt:""}})]),t._v(" "),e("comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
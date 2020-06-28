(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{466:function(t,e,a){"use strict";a.r(e);var v=a(15),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex-的介绍和基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的介绍和基础用法"}},[t._v("#")]),t._v(" vuex 的介绍和基础用法")]),t._v(" "),a("p",[t._v("vuex 其实就是一个 store(仓库)")]),t._v(" "),a("h2",{attrs:{id:"store-相当于仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-相当于仓库"}},[t._v("#")]),t._v(" store (相当于仓库)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("提供一个初始的 "),a("code",[t._v("state")]),t._v(" 对象和 "),a("code",[t._v("mutation")]),t._v(" 变动的方法")])]),t._v(" "),a("li",[a("p",[t._v("然后可以通过 "),a("code",[t._v("store.state")]),t._v(" 获取对象。通过 "),a("code",[t._v("store.commit()")]),t._v(" 触发 "),a("code",[t._v("mutation")])])])]),t._v(" "),a("h2",{attrs:{id:"state-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-状态"}},[t._v("#")]),t._v(" state 状态")]),t._v(" "),a("p",[t._v("由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态")]),t._v(" "),a("p",[t._v("每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。")]),t._v(" "),a("h2",{attrs:{id:"getter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),a("p",[t._v("Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）")]),t._v(" "),a("blockquote",[a("p",[t._v("getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的")])]),t._v(" "),a("blockquote",[a("p",[t._v("getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果(闭包形式，调用 get 返回一个函数)")])]),t._v(" "),a("h2",{attrs:{id:"mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),a("p",[t._v("更改 Vuex 的 store 中的状态的唯一方法是提交 mutation（通过 commit）")]),t._v(" "),a("h3",{attrs:{id:"mutation-需遵守-vue-的响应规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation-需遵守-vue-的响应规则"}},[t._v("#")]),t._v(" Mutation 需遵守 Vue 的响应规则")]),t._v(" "),a("ol",[a("li",[t._v("最好提前在你的 store 中初始化好所有所需属性")]),t._v(" "),a("li",[t._v("当需要在对象上添加新属性时 使用 "),a("code",[t._v("Vue.set(obj, 'newProp', 123)")]),t._v(", 或者 "),a("code",[t._v("state.obj = { ...state.obj, newProp: 123 }")]),t._v(" 以新对象替换老对象")])]),t._v(" "),a("h3",{attrs:{id:"mutation-必须是同步函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation-必须是同步函数"}},[t._v("#")]),t._v(" Mutation 必须是同步函数")]),t._v(" "),a("blockquote",[a("p",[t._v("因为当 mutation 触发的时候，回调函数还没有被调用\n任何在回调函数中进行的状态的改变都是不可追踪的")])]),t._v(" "),a("h2",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),a("p",[t._v("action 和 mutation 的区别：")]),t._v(" "),a("ol",[a("li",[t._v("Action 提交的是 mutation，而不是直接变更状态")]),t._v(" "),a("li",[t._v("Action 可以包含任意异步操作")])]),t._v(" "),a("h3",{attrs:{id:"通过-dispatch-调用-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-dispatch-调用-action"}},[t._v("#")]),t._v(" 通过 dispatch 调用 action")]),t._v(" "),a("p",[a("code",[t._v("store.dispatch('increment')")])]),t._v(" "),a("h2",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),a("blockquote",[a("p",[t._v("Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割")])]),t._v(" "),a("h2",{attrs:{id:"vuex-刷新后状态就重置了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-刷新后状态就重置了"}},[t._v("#")]),t._v(" vuex 刷新后状态就重置了")]),t._v(" "),a("p",[t._v("vuex 刷新后状态的确都会被重置掉，所以我们需要把 vuex 的值存储到本地缓存中。")]),t._v(" "),a("p",[t._v("使用插件："),a("code",[t._v("vuex-persistedstate")]),t._v(" 这样 vuex 值同步更新的时候，都能及时更新到本地缓存中，刷新后也会从本地缓存中重新取值")])])}),[],!1,null,null,null);e.default=s.exports}}]);
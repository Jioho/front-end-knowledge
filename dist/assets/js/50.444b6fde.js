(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{381:function(e,t,r){"use strict";r.r(t);var a=r(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"小程序和-h5-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序和-h5-有什么区别"}},[e._v("#")]),e._v(" 小程序和 H5 有什么区别")]),e._v(" "),r("h2",{attrs:{id:"渲染方式与-h5-不同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染方式与-h5-不同"}},[e._v("#")]),e._v(" 渲染方式与 H5 不同")]),e._v(" "),r("p",[e._v("小程序一般是通过 Native 原生渲染的，但是小程序同时也支持 web 渲染，如果使用 web 渲染的方式，我们需要初始化一个 WebView 组件，然后在 WebView 中加载 H5 页面；")]),e._v(" "),r("p",[e._v("所以当我们开发一个小程序时，通常会使用 hybrid 的方式，即会根据具体情况选择部分功能用小程序原生的代码来开发，部分功能通过 WebView 加载 H5 页面来实现。Native 与 Web 渲染混合使用，以实现项目的最优解；\n这里值得注意的是，小程序下，native 方式通常情况下性能要优于 web 方式。")]),e._v(" "),r("h2",{attrs:{id:"小程序特有的双线程设计。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序特有的双线程设计。"}},[e._v("#")]),e._v(" 小程序特有的双线程设计。")]),e._v(" "),r("p",[e._v("H5 下我们所有资源通常都会打到一个 bundle.js 文件里（不考虑分包加载），而小程序编译后的结果会有两个 bundle，index.js 封装的是小程序项目的 view 层，以及 index.worker.js 封装的是项目的业务逻辑，在运行时，会有两条线程来分别处理这两个 bundle，一个是主渲染线程，它负责加载并渲染 index.js 里的内容，另外一个是 Service Worker 线 程，它负责执行 index.worker.js 里封装的业务逻辑，这里面会有很多对底层 api 调用。")]),e._v(" "),r("comment")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
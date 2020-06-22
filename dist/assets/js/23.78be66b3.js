(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{358:function(v,_,e){"use strict";e.r(_);var l=e(25),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"js-中函数执行过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-中函数执行过程"}},[v._v("#")]),v._v(" js 中函数执行过程")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("确定"),e("code",[v._v("this")]),v._v("的值 (确切的来说，this 在 JS 里面不是一个变量名而是一个关键字)")])]),v._v(" "),e("li",[e("p",[v._v("创建一个新的"),e("code",[v._v("作用域")])])]),v._v(" "),e("li",[e("p",[v._v("处理形参/实参（"),e("code",[v._v("没有定义")]),v._v("过才声明，无论如何都重新赋值(可能存在变量提升，提升的变量在这时候赋值)，没有对应实参则赋值为"),e("code",[v._v("undefined")]),v._v("）：")]),v._v(" "),e("ul",[e("li",[v._v("对于每一个传入的实参，按照从左往右的顺序依次执行：如果对应的形参在本作用域中还没有定义，则在本作用域中声明形参，并赋值。")]),v._v(" "),e("li",[v._v('如果已经定义过了，则重新给其赋值。(没有对应实参则赋值为"undefined"）（没有定义：就是“没有声明”的意思）')])])]),v._v(" "),e("li",[e("p",[v._v("处理函数定义（没有定义过才声明，无论如何都重新赋值）：")]),v._v(" "),e("ul",[e("li",[v._v("对该函数中所有的定义的函数，按照代码写的顺序依次执行")]),v._v(" "),e("li",[v._v("如果这个变量名在本作用域中还没有定义，则在本作用域中声明这个函数名，并且赋值为对应的函数")]),v._v(" "),e("li",[v._v("如果定义了这个变量，在可写的情况下重新给这个变量赋值为这个函数，否则抛出异常。")])])]),v._v(" "),e("li",[e("p",[v._v("处理 "),e("code",[v._v("arguments")]),v._v("（没有定义过才声明和赋值）:")]),v._v(" "),e("ul",[e("li",[v._v("如果在本作用域中没有定义 arguments，则在本作用域中声明 arguments 并给其赋值。")])])]),v._v(" "),e("li",[e("p",[v._v("处理变量声明（没有定义过才声明，不赋值）：")]),v._v(" "),e("ul",[e("li",[v._v("对于所有变量声明，按照代码写的顺序依次执行：如果在本作用域中没有定义这个变量，则在本作用域中声明这个变量，赋值为 undefined")])])]),v._v(" "),e("li",[e("p",[v._v("然后执行函数代码。（当然是去变量定义里面的 var 执行）")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);
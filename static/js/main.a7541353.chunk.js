(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(9),r=n.n(a),d=n(6),s=n(10),l=n(2),i=n(3),u=n(5),h=n(4),j=n(7),b=(n(15),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleKeyUp=function(t){var n=t.keyCode,o=t.target;if(13===n){""===o.value.trim()&&alert("\u8f38\u5165\u4e0d\u80fd\u70ba\u7a7a"),console.log(o.value,n);var c={id:Object(j.a)(),name:o.value,done:!1};console.log(c),e.props.addTodo(c)}},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"todo-header",children:Object(b.jsx)("input",{onKeyUp:this.handleKeyUp,type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u4efb\u52a1\u540d\u79f0\uff0c\u6309\u56de\u8f66\u952e\u786e\u8ba4"})})}}]),n}(o.Component),O=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleCheckAll=function(t){e.props.checkAllTodo(t.target.checked)},e.handleClearAllDone=function(){e.props.clearAllDone()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.todos,t=e.reduce((function(e,t){return e+(t.done?1:0)}),0);console.log("@@@",t);var n=e.length;return Object(b.jsxs)("div",{className:"todo-footer",children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"checkbox",onChange:this.handleCheckAll,checked:t===n&&0!==n})}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:["\u5df2\u5b8c\u6210",t]})," / \u5168\u90e8",n]}),Object(b.jsx)("button",{onClick:this.handleClearAllDone,className:"btn btn-danger",children:"\u6e05\u9664\u5df2\u5b8c\u6210\u4efb\u52a1"})]})}}]),n}(o.Component)),f=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={mouse:!1},e.handleMouse=function(t){return function(){console.log(t),e.setState({mouse:t})}},e.handleCheck=function(t){return function(n){console.log(t,n.target.checked),e.props.updateTodo(t,n.target.checked)}},e.handleDelete=function(t){window.confirm("\u78ba\u5b9a\u522a\u9664\u55ce?")&&e.props.deleteTodo(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.name,c=t.done,a=this.state.mouse;return Object(b.jsxs)("li",{style:{backgroundColor:a?"#ddd":"white"},onMouseEnter:this.handleMouse(!0),onMouseLeave:this.handleMouse(!1),children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",checked:c,onChange:this.handleCheck(n)}),Object(b.jsx)("span",{children:o})]}),Object(b.jsx)("button",{onClick:function(){e.handleDelete(n)},className:"btn btn-danger",style:{display:a?"block":"none"},children:"\u5220\u9664"})]})}}]),n}(o.Component)),v=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.updateTodo,o=e.deleteTodo;return Object(b.jsx)("ul",{className:"todo-main",children:t.map((function(e){return Object(b.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{updateTodo:n,deleteTodo:o}),e.id)}))})}}]),n}(o.Component)),m=(n(20),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={todos:[{id:Object(j.a)(),name:"\u5403\u98ef",done:!0},{id:Object(j.a)(),name:"\u7761\u89ba",done:!0},{id:Object(j.a)(),name:"\u6253\u4ee3\u78bc",done:!1},{id:Object(j.a)(),name:"\u901b\u8857",done:!1}]},e.addTodo=function(t){var n=e.state.todos,o=[t].concat(Object(s.a)(n));e.setState({todos:o})},e.updateTodo=function(t,n){var o=e.state.todos.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{done:n}):e}));e.setState({todos:o})},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.checkAllTodo=function(t){var n=e.state.todos.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{done:t})}));e.setState({todos:n})},e.clearAllDone=function(){var t=e.state.todos.filter((function(e){return!e.done}));e.setState({todos:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.todos;return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"todo-container",children:Object(b.jsxs)("div",{className:"todo-wrap",children:[Object(b.jsx)(p,{addTodo:this.addTodo}),Object(b.jsx)(v,{todos:e,updateTodo:this.updateTodo,deleteTodo:this.deleteTodo}),Object(b.jsx)(O,{todos:e,checkAllTodo:this.checkAllTodo,clearAllDone:this.clearAllDone})]})})})}}]),n}(o.Component));r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a7541353.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),u=a.n(r),i=(a(14),a(2)),s=a(3),m=a(5),o=a(4),l=a(6),b=a(1),d=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={amount:0},a.subtract=a.subtract.bind(Object(b.a)(Object(b.a)(a))),a.add=a.add.bind(Object(b.a)(Object(b.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"subtract",value:function(){this.setState(function(e){return{amount:Math.max(0,e.amount-1)}})}},{key:"add",value:function(){this.setState(function(e){return{amount:e.amount+1}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Tracker"},c.a.createElement("button",{onClick:this.subtract,className:"minus"},"-"),c.a.createElement("h5",{className:"ingredient"},this.props.name,": ",this.state.amount),c.a.createElement("button",{onClick:this.add,className:"plus"},"+"))}}]),t}(c.a.Component)),h=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Player"},c.a.createElement("h3",{className:"name"},this.props.name),c.a.createElement(d,{name:"meat"}),c.a.createElement(d,{name:"bread"}),c.a.createElement(d,{name:"fruit"}))}}]),t}(c.a.Component)),f=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{id:"title"},"Easy As Pie\u2122 - Ingredient Tracker"),c.a.createElement(h,{name:"Player 1"}),c.a.createElement(h,{name:"Player 2"}),c.a.createElement(h,{name:"Player 3"}),c.a.createElement(h,{name:"Player 4"}))}}]),t}(c.a.Component));u.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.0fd0055b.chunk.js.map
(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),r=n.n(c),o=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(s.NONE),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(!1),u=Object(o.a)(r,2),d=u[0],j=u[1],N=function(t,e){var n=e.sortType,c=e.isReversed,r=Object(i.a)(t);return r.sort((function(t,e){switch(n){case s.ALPABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&r.reverse(),r}(h,{sortType:n,isReversed:d}),E=function(t){switch(t){case s.ALPABET:return c(s.ALPABET);case s.LENGTH:return c(s.LENGTH);case"Reverse":return j((function(t){return!t}));case"Reset":return c(s.NONE),j(!1);default:return 0}};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){E(s.ALPABET)},className:l()("button","is-info",n!==s.ALPABET&&"is-light"),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){E(s.LENGTH)},className:l()("button","is-info",n!==s.LENGTH&&"is-light"),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(t){E(t.currentTarget.innerHTML)},className:l()("button","is-info",!d&&"is-light"),children:"Reverse"}),(d||n!==s.NONE)&&Object(b.jsx)("button",{type:"button",onClick:function(t){E(t.currentTarget.innerHTML)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.712536a2.chunk.js.map
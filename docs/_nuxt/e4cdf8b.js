(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{437:function(t,e,n){"use strict";n.r(e);var r=n(473),c=n(611),o=n(435),l=n(502),h=(n(28),n(188),n(48),n(91)),d={props:{value:{type:Array,default:function(){return[]}}},data:function(){return{colors:h.a,items:[{header:"Select an option or create one"}],nonce:1,search:null}},computed:{tags:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{tags:{handler:function(t,e){var n=this;if((null==t?void 0:t.length)===(null==e?void 0:e.length))return null;this.tags=t.map((function(t){return"string"==typeof t&&(t={text:t,color:n.colors[n.nonce-1]},n.items.push(t),n.nonce++),t}))},immediate:!1}}},f=n(64),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"hide-no-data":!t.search,items:t.items,"search-input":t.search,"hide-selected":"",label:"Search for an option",multiple:"","small-chips":"",flat:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e(l.a,[e("span",{staticClass:"subheading mr-2"},[t._v("Create ")]),t._v(" "),e(r.a,{attrs:{color:"".concat(t.colors[t.nonce-1]),label:"",small:"",dark:""}},[t._v("\n        "+t._s(t.search)+"\n      ")])],1)]},proxy:!0},{key:"selection",fn:function(n){var c=n.attrs,l=n.item,h=n.parent,d=n.selected;return[l===Object(l)?e(r.a,t._b({attrs:{color:"".concat(l.color),"input-value":d,label:"",small:"",dark:""}},"v-chip",c,!1),[e("span",{staticClass:"pr-2"},[t._v("\n        "+t._s(l.text)+"\n      ")]),t._v(" "),e(o.a,{attrs:{small:""},on:{click:function(t){return h.selectItem(l)}}},[t._v(" $delete ")])],1):t._e()]}},{key:"item",fn:function(n){var c=n.item;return[e(r.a,{attrs:{color:"".concat(c.color," lighten-3"),dark:"",label:"",small:""}},[t._v("\n      "+t._s(c.text)+"\n    ")])]}}]),model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})}),[],!1,null,"14481d79",null);e.default=component.exports}}]);
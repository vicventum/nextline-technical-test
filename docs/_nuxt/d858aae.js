(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{406:function(e,t,r){"use strict";r.r(t);r(16),r(27),r(30),r(31),r(22),r(8),r(23);var n=r(5),c=r(7),o=(r(65),r(103)),f=r(86),O=r(87),k=r(104);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={data:function(){return{mixinTask:{data:{},isLoading:!1,isError:!1}}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,e.mixinGetTask(r);case 3:case"end":return t.stop()}}),t)})))()},computed:d({},Object(o.c)("task.store",["task"])),watch:{task:function(e,t){this.mixinTask.data=e}},methods:d(d({},Object(o.d)("task.store",["setTask"])),{},{mixinGetTask:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=f.get,r.prev=1,t.mixinTask.isLoading=!0,r.next=5,Object(O.getTask)(n,e);case 5:c=r.sent,t.mixinTask.isLoading=!1,o=Object(k.utilFormatTask)(c),t.setTask(o),r.next=16;break;case 11:r.prev=11,r.t0=r.catch(1),console.error(r.t0),t.mixinTask.isError=!0,t.mixinTask.isLoading=!1;case 16:case"end":return r.stop()}}),r,null,[[1,11]])})))()}})};t.default=j}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40,10,24,25,26,27,28,29,30,31,32,33,35],{399:function(t,e,n){"use strict";n.r(e);var r=n(149),o=n(64),component=Object(o.a)({},(function(){return(0,this._self._c)(r.a,{staticClass:"pa-6",attrs:{rounded:""}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("42d0c79d",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n.r(e);n(16),n(27),n(30),n(31),n(22),n(8),n(23);var r=n(5),o=n(7),l=(n(65),n(103)),c=n(86),d=n(87),f=n(104);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={data:function(){return{mixinTaskList:{data:[],isLoading:!1,isError:!1},mixinTaskListOrders:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.mixinGetTaskList();case 2:case"end":return e.stop()}}),e)})))()},computed:x({},Object(l.c)("task.store",["taskList"])),watch:{taskList:function(t,e){var n=Object(f.utilSortTasksCreatedDate)({taskList:t});this.mixinTaskList.data=n,this.mixinTaskListOrders={alphaAscending:Object(f.utilSortTasksAlpha)({taskList:t}),alphaDescending:Object(f.utilSortTasksAlpha)({taskList:t,ascending:!1}),createdDateAscending:n,createdDateDescending:Object(f.utilSortTasksCreatedDate)({taskList:t,ascending:!1})}}},methods:x(x({},Object(l.d)("task.store",["setTaskList"])),{},{mixinGetTaskList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.getAll,e.prev=1,t.mixinTaskList.isLoading=!0,e.next=5,Object(d.getTaskList)(n);case 5:r=e.sent,t.mixinTaskList.isLoading=!1,o=Object(f.utilFormatTaskList)(r),t.setTaskList(o),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),t.mixinTaskList.isError=!0,t.mixinTaskList.isLoading=!1;case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mixinChangeAlphaOrder:function(t){this.mixinTaskList.data=t?this.mixinTaskList.taskListOrders.alphaAscending:this.mixinTaskList.taskListOrders.alphaDescending},mixinChangeCreatedDateOrder:function(t){this.mixinTaskList.data=t?this.mixinTaskList.taskListOrders.createdDateAscending:this.mixinTaskList.taskListOrders.createdDateDescending}})};e.default=h},406:function(t,e,n){"use strict";n.r(e);n(16),n(27),n(30),n(31),n(22),n(8),n(23);var r=n(5),o=n(7),l=(n(65),n(103)),c=n(86),d=n(87),f=n(104);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={data:function(){return{mixinTask:{data:{},isLoading:!1,isError:!1}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,t.mixinGetTask(n);case 3:case"end":return e.stop()}}),e)})))()},computed:x({},Object(l.c)("task.store",["task"])),watch:{task:function(t,e){this.mixinTask.data=t}},methods:x(x({},Object(l.d)("task.store",["setTask"])),{},{mixinGetTask:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.get,n.prev=1,e.mixinTask.isLoading=!0,n.next=5,Object(d.getTask)(r,t);case 5:o=n.sent,e.mixinTask.isLoading=!1,l=Object(f.utilFormatTask)(o),e.setTask(l),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0),e.mixinTask.isError=!0,e.mixinTask.isLoading=!1;case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()}})};e.default=h},407:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(65),n(86)),l=n(87),c={data:function(){return{mixinCreatingTask:{isLoading:!1,isError:!1}}},methods:{mixinCreateTask:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.create,n.prev=1,e.mixinCreatingTask.isLoading=!0,n.next=5,Object(l.createTask)(r,t);case 5:e.mixinCreatingTask.isLoading=!1,n.next=13;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),e.mixinCreatingTask.isError=!0,e.mixinCreatingTask.isLoading=!1;case 13:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}};e.default=c},408:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(65),n(86)),l=n(87),c={data:function(){return{mixinDeletingTask:{isLoading:!1,isError:!1}}},methods:{mixinDeleteTask:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.remove,n.prev=1,e.mixinDeletingTask.isLoading=!0,n.next=5,Object(l.deleteTask)(r,t);case 5:e.mixinDeletingTask.isLoading=!1,n.next=13;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),e.mixinDeletingTask.isError=!0,e.mixinDeletingTask.isLoading=!1;case 13:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}};e.default=c},409:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(65),n(86)),l=n(87),c={data:function(){return{mixinEditingTask:{isLoading:!1,isError:!1}}},methods:{mixinEditTask:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=o.edit,r.prev=1,n.mixinEditingTask.isLoading=!0,r.next=5,Object(l.editTask)(c,t,e);case 5:n.mixinEditingTask.isLoading=!1,r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0),n.mixinEditingTask.isError=!0,n.mixinEditingTask.isLoading=!1;case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()}}};e.default=c},415:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("25f7be68",content,!0,{sourceMap:!1})},420:function(t,e,n){"use strict";n(403)},421:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".bar-actions[data-v-509af35e]{display:flex;gap:1rem;justify-content:end}",""]),r.locals={},t.exports=r},425:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("0ff26efe",content,!0,{sourceMap:!1})},426:function(t,e,n){"use strict";n.r(e);var r=n(458),o={},l=(n(420),n(64)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("BaseCard",{staticClass:"bar-actions"},[e(r.a,{staticClass:"dark--text text--lighten-4",attrs:{text:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n    Back\n  ")]),t._v(" "),e("div",[t._t("default")],2)],1)}),[],!1,null,"509af35e",null);e.default=component.exports;installComponents(component,{BaseCard:n(399).default})},436:function(t,e,n){"use strict";n.r(e);var r=n(405);n.d(e,"MixinTaskList",(function(){return r.default}));var o=n(406);n.d(e,"MixinTask",(function(){return o.default}));var l=n(407);n.d(e,"MixinCreateTask",(function(){return l.default}));var c=n(408);n.d(e,"MixinDeleteTask",(function(){return c.default}));var d=n(409);n.d(e,"MixinEditTask",(function(){return d.default}))},437:function(t,e,n){"use strict";n.r(e);var r=n(473),o=n(611),l=n(435),c=n(502),d=(n(28),n(188),n(48),n(91)),f={props:{value:{type:Array,default:function(){return[]}}},data:function(){return{colors:d.a,items:[{header:"Select an option or create one"}],nonce:1,search:null}},computed:{tags:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{tags:{handler:function(t,e){var n=this;if((null==t?void 0:t.length)===(null==e?void 0:e.length))return null;this.tags=t.map((function(t){return"string"==typeof t&&(t={text:t,color:n.colors[n.nonce-1]},n.items.push(t),n.nonce++),t}))},immediate:!1}}},v=n(64),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{"hide-no-data":!t.search,items:t.items,"search-input":t.search,"hide-selected":"",label:"Search for an option",multiple:"","small-chips":"",flat:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e(c.a,[e("span",{staticClass:"subheading mr-2"},[t._v("Create ")]),t._v(" "),e(r.a,{attrs:{color:"".concat(t.colors[t.nonce-1]),label:"",small:"",dark:""}},[t._v("\n        "+t._s(t.search)+"\n      ")])],1)]},proxy:!0},{key:"selection",fn:function(n){var o=n.attrs,c=n.item,d=n.parent,f=n.selected;return[c===Object(c)?e(r.a,t._b({attrs:{color:"".concat(c.color),"input-value":f,label:"",small:"",dark:""}},"v-chip",o,!1),[e("span",{staticClass:"pr-2"},[t._v("\n        "+t._s(c.text)+"\n      ")]),t._v(" "),e(l.a,{attrs:{small:""},on:{click:function(t){return d.selectItem(c)}}},[t._v(" $delete ")])],1):t._e()]}},{key:"item",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"".concat(o.color," lighten-3"),dark:"",label:"",small:""}},[t._v("\n      "+t._s(o.text)+"\n    ")])]}}]),model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})}),[],!1,null,"14481d79",null);e.default=component.exports},438:function(t,e,n){"use strict";n.r(e);var r=n(610),o=n(525),l=n(467),c={props:{value:{type:String,default:""}},data:function(){return{menu:!1}},computed:{dueDate:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{dueDate:{handler:function(t){this.dueDate=t},immediate:!1}}},d=n(64),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(l.a,t._g(t._b({attrs:{label:"Date",hint:"MM/DD/YYYY format","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.dueDate=t.dueDate}},model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(r.a,{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1)}),[],!1,null,"1e4b934e",null);e.default=component.exports},439:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c54b7bb4",content,!0,{sourceMap:!1})},440:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed.v-text-field--reverse .v-text-field__slot .v-label{margin-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed.v-text-field--reverse .v-text-field__slot .v-label{margin-left:12px}",""]),r.locals={},t.exports=r},441:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7b5d4dc6",content,!0,{sourceMap:!1})},442:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},443:function(t,e,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("ae7a972c",content,!0,{sourceMap:!1})},444:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),r.locals={},t.exports=r},447:function(t,e,n){"use strict";n(415)},448:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".input-list[data-v-802b405e]{display:grid;grid-gap:.5rem;gap:.5rem}.input-list__details[data-v-802b405e]{display:grid;grid-template-columns:1fr}@media only screen and (min-width:600px){.input-list__details[data-v-802b405e]{align-items:flex-end;gap:1rem;grid-template-columns:auto auto 60%}}",""]),r.locals={},t.exports=r},452:function(t,e,n){"use strict";n.r(e);n(16),n(27),n(30),n(31),n(22),n(23);var r=n(105),o=n(5),l=(n(8),n(42),n(441),n(443),n(400)),c=n(428),d=n(412),f=n(0).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(460),x=n(47);function h(t){t.preventDefault()}var m=Object(x.a)(c.a,f,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:h},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),_=["title"];function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=m.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return O(O({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",O(O({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=n(467);n(46),n(79),n(439);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var D=Object(x.a)(w.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},w.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null===(n=e.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=w.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){w.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),T=(n(51),n(437)),C=n(438),L={components:{InputTags:T.default,InputCalendar:C.default},props:{value:{type:Object,default:null}},data:function(){return{taskData:this.value,titleRules:[function(t){return!!t||"Title is required"}]}},watch:{value:function(t,e){this.taskData=t}}},P=(n(447),n(64)),component=Object(P.a)(L,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-list"},[e(w.a,{attrs:{rules:t.titleRules,label:"Title",required:""},model:{value:t.taskData.title,callback:function(e){t.$set(t.taskData,"title",e)},expression:"taskData.title"}}),t._v(" "),e(D,{attrs:{label:"Description",rows:"4"},model:{value:t.taskData.description,callback:function(e){t.$set(t.taskData,"description",e)},expression:"taskData.description"}}),t._v(" "),e(D,{attrs:{label:"Comments",rows:"3"},model:{value:t.taskData.comments,callback:function(e){t.$set(t.taskData,"comments",e)},expression:"taskData.comments"}}),t._v(" "),e("div",{staticClass:"input-list__details"},[e(y,{attrs:{label:"Complete"},model:{value:t.taskData.isCompleted,callback:function(e){t.$set(t.taskData,"isCompleted",e)},expression:"taskData.isCompleted"}}),t._v(" "),e("InputCalendar",{model:{value:t.taskData.dueDate,callback:function(e){t.$set(t.taskData,"dueDate",e)},expression:"taskData.dueDate"}}),t._v(" "),e("InputTags",{model:{value:t.taskData.tags,callback:function(e){t.$set(t.taskData,"tags",e)},expression:"taskData.tags"}})],1)],1)}),[],!1,null,"802b405e",null);e.default=component.exports},456:function(t,e,n){"use strict";n(425)},457:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".form__actions[data-v-edb04a4e]{display:flex;justify-content:end}",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n.r(e);var r=n(458),o=n(5),l=(n(16),n(27),n(267),n(78),n(30),n(31),n(22),n(8),n(190),n(89),n(23),n(79),n(47)),c=n(189),d=n(424),f=n(1);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=Object(l.a)(c.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:x({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},Object(f.l)(this))}}),m=n(7),_=(n(65),n(51),n(81),n(48),n(399)),k=n(452),O=n(426);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var w={components:{InputListTask:k.default,BaseCard:_.default,BarButtonsAction:O.default},props:{taskData:{type:Object,default:function(){return{id:"",title:"",isCompleted:!1,dueDate:"",description:"",tags:[],token:"",createdAt:"",updatedAt:""}}},isLoading:{type:Boolean,default:!1},submitButtonText:{type:String,default:"Submit"}},emits:["submit"],data:function(){return{data:{}}},watch:{taskData:{handler:function(t){this.data=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)},immediate:!0}},methods:{submit:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=4;break}return t.$toast.warning("Title is required"),e.abrupt("return",null);case 4:return n={title:t.data.title,is_completed:t.data.isCompleted?"1":"0",description:t.data.description,due_date:t.data.dueDate?t.data.dueDate:null,comments:t.data.comments,tags:t.getTextValuesAsString(t.data.tags),token:t.data.token},e.next=7,t.$emit("submit",n);case 7:case"end":return e.stop()}}),e)})))()},getTextValuesAsString:function(t){return t.map((function(t){return t.text})).join(", ")}}},j=w,D=(n(456),n(64)),component=Object(D.a)(j,(function(){var t=this,e=t._self._c;return e(h,{ref:"form",staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("BaseCard",{staticClass:"mb-6"},[e("InputListTask",{model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1),t._v(" "),e("BarButtonsAction",[e(r.a,{attrs:{color:"success",type:"submit",loading:t.isLoading,disabled:t.isLoading,depressed:""}},[t._v("\n      "+t._s(t.submitButtonText)+"\n    ")])],1)],1)}),[],!1,null,"edb04a4e",null);e.default=component.exports;installComponents(component,{BaseCard:n(399).default})},529:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(65),n(468)),l=n(436),c={components:{FormTask:o.default},mixins:[l.MixinTask,l.MixinEditTask],methods:{submit:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,t.mixinEditTask(n,data);case 3:t.$toast.success("Task edited successfully");case 4:case"end":return e.stop()}}),e)})))()}}},d=n(64),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("FormTask",{attrs:{"task-data":t.mixinTask.data,"is-loading":t.mixinEditingTask.isLoading,"submit-button-text":"Edit task"},on:{submit:t.submit}})}),[],!1,null,"f35eadc6",null);e.default=component.exports},614:function(t,e,n){"use strict";n.r(e);var r={components:{FormEditTask:n(529).default}},o=n(64),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"mb-8 dark--text text--lighten-4"},[t._v("Edit Task")]),t._v(" "),e("FormEditTask")],1)}),[],!1,null,"146d9fdf",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10,15],{399:function(t,e,r){"use strict";r.r(e);var n=r(149),l=r(64),component=Object(l.a)({},(function(){return(0,this._self._c)(n.a,{staticClass:"pa-6",attrs:{rounded:""}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,r){var content=r(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("6456f701",content,!0,{sourceMap:!1})},418:function(t,e,r){"use strict";r(404)},419:function(t,e,r){var n=r(32)((function(i){return i[1]}));n.push([t.i,".task-deadline[data-v-897e4a06]{align-items:center;display:flex;gap:.5rem;justify-content:space-between}@media only screen and (min-width:600px){.task-deadline[data-v-897e4a06]{gap:1rem}}",""]),n.locals={},t.exports=n},422:function(t,e,r){"use strict";r.r(e);var n=r(477),l=r(469),o=r(460),d=r(435),c={name:"TaskDetailDeadline",props:{isCompleted:{type:Boolean,default:!1,required:!0},dueDate:{type:String,default:"",required:!1}},computed:{smAndDown:function(){return this.$vuetify.breakpoint.smAndDown}}},f=(r(418),r(64)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-deadline"},[t.isCompleted?[t.smAndDown?e(d.a,{attrs:{color:"success"}},[t._v("\n        mdi-checkbox-marked-circle\n      ")]):e(l.a,{attrs:{color:"success darken-1","text-color":"white",small:""}},[e(n.a,{attrs:{left:""}},[e(d.a,{attrs:{small:""}},[t._v(" mdi-checkbox-marked-circle ")])],1),t._v(" "),e("span",[t._v("Completed")])],1)]:[t.smAndDown?e(d.a,{attrs:{color:"warning"}},[t._v(" mdi-alert-circle ")]):e(l.a,{attrs:{color:"warning","text-color":"white",small:""}},[e(n.a,{attrs:{left:""}},[e(d.a,{attrs:{small:""}},[t._v("mdi-alert-circle")])],1),t._v(" "),e("span",[t._v("Pending")])],1)],t._v(" "),t.dueDate?[e(o.a,{attrs:{vertical:""}}),t._v(" "),e("span",{staticClass:"text-caption text-sm-body-2 light--text text--darken-4"},[t._v("\n\t\t\t\tDeadline: "+t._s(t.dueDate)+"\n\t\t\t")])]:t._e()],2)}),[],!1,null,"897e4a06",null);e.default=component.exports},449:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("6d59e9bc",content,!0,{sourceMap:!1})},450:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("8d7bb776",content,!0,{sourceMap:!1})},462:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("61ff62f9",content,!0,{sourceMap:!1})},470:function(t,e,r){"use strict";r(449)},471:function(t,e,r){var n=r(32)((function(i){return i[1]}));n.push([t.i,".task-header[data-v-faf72bf2]{align-items:center;display:flex;gap:1rem;justify-content:space-between}.task-header__content[data-v-faf72bf2]{align-items:center;display:flex;gap:1.5rem}",""]),n.locals={},t.exports=n},472:function(t,e,r){"use strict";r(450)},473:function(t,e,r){var n=r(32)((function(i){return i[1]}));n.push([t.i,".task-footer[data-v-d2b210ae]{gap:.5rem}.task-footer[data-v-d2b210ae],.task-footer__content[data-v-d2b210ae]{align-items:center;display:flex;justify-content:space-between}.task-footer__content[data-v-d2b210ae]{gap:1rem}.task-footer__actions[data-v-d2b210ae],.task-footer__tags[data-v-d2b210ae]{display:flex;gap:.5rem}.task-footer__actions[data-v-d2b210ae]{align-items:center;justify-content:flex-end}",""]),n.locals={},t.exports=n},478:function(t,e,r){"use strict";r.r(e);var n=r(468),l=r(435),o={props:{title:{type:String,default:"",required:!0}},emits:["delete"],methods:{deleteTask:function(t){this.$emit("delete",t)}}},d=(r(470),r(64)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"task-header"},[e("div",{staticClass:"task-header__content"},[e("h2",{staticClass:"text-h6"},[t._v(t._s(t.title))])]),t._v(" "),e(n.a,{attrs:{color:"error lighten-1","data-testid":"button-delete",icon:""},on:{click:t.deleteTask}},[e(l.a,[t._v("mdi-trash-can-outline")])],1)],1)}),[],!1,null,"faf72bf2",null);e.default=component.exports},479:function(t,e,r){"use strict";r.r(e);var n=r(468),l=(r(46),{components:{TaskDetailDeadline:r(422).default},props:{id:{type:Number,default:0,required:!0},isCompleted:{type:Boolean,default:!1,required:!0},dueDate:{type:String,default:"",required:!1}}}),o=(r(472),r(64)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"task-footer"},[e("div",{staticClass:"task-footer__content"},[e("TaskDetailDeadline",{attrs:{"is-completed":t.isCompleted,"due-date":t.dueDate}})],1),t._v(" "),e("div",{staticClass:"task-footer__actions"},[e(n.a,{attrs:{to:"/edit/".concat(t.id),color:"warning",outlined:"",small:""}},[t._v(" Edit ")]),t._v(" "),e(n.a,{attrs:{to:"/".concat(t.id),color:"primary",depressed:"",small:""}},[t._v(" View ")])],1)])}),[],!1,null,"d2b210ae",null);e.default=component.exports},488:function(t,e,r){"use strict";r(462)},489:function(t,e,r){var n=r(32)((function(i){return i[1]}));n.push([t.i,".task[data-v-291592e8]{transition-duration:.1s;transition-property:box-shadow,filter;transition-timing-function:ease-out}.task[data-v-291592e8]:hover{filter:drop-shadow(0 0 1px var(--v-primary-base))}.task__header[data-v-291592e8]{align-items:center;display:flex;gap:1rem;justify-content:space-between}",""]),n.locals={},t.exports=n},498:function(t,e,r){"use strict";r.r(e);r(46);var n=r(399),l=r(478),o=r(479),d={components:{TaskCardHeader:l.default,TaskCardFooter:o.default,BaseCard:n.default},props:{id:{type:Number,default:0,required:!0},title:{type:String,default:"",required:!0},isCompleted:{type:Boolean,default:!1,required:!0},dueDate:{type:String,default:"",required:!1}},emits:["delete"],methods:{deleteTask:function(t){this.$emit("delete",t)}}},c=(r(488),r(64)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("BaseCard",{staticClass:"task"},[e("TaskCardHeader",{staticClass:"mb-2",attrs:{title:t.title},on:{delete:function(e){return t.deleteTask(t.id)}}}),t._v(" "),e("TaskCardFooter",{staticClass:"mb-2",attrs:{id:t.id,"is-completed":t.isCompleted,"due-date":t.dueDate}})],1)}),[],!1,null,"291592e8",null);e.default=component.exports;installComponents(component,{BaseCard:r(399).default})}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[360],{5360:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var a=s(629),n={props:["station","isActive"],methods:{toggleActive:function(){this.$emit("onToggle")}}},i=s(1900);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var f={components:{StationItem:(0,i.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"station-item",class:{active:t.isActive},on:{click:t.toggleActive}},[s("div",{staticClass:"d-flex"},[s("b-col",{staticClass:"station-item-text",attrs:{cols:"10"}},[t._v("\n            "+t._s(t.station.name)+"\n        ")]),t._v(" "),s("b-col",{staticClass:"text-center",attrs:{cols:"2"}},[s("a",{staticClass:"station-item-btn-edit",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"fa fa-pen"})])])],1)])}),[],!1,null,null,null).exports},data:function(){return{activeIndex:null,stations:[{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"},{name:"asdfasdf"}]}},computed:o(o({},(0,a.Se)({users:"user/users",user:"auth/user"})),{},{rows:function(){return this.users.length}}),mounted:function(){this.$store.dispatch("user/getUsers",""),this.$store.dispatch("auth/fetchUser"),this.stations.length>0&&(this.activeIndex=0)},created:function(){},methods:{onToggle:function(t){this.activeIndex=t}}},l=(0,i.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("b-row",{staticClass:"mt-3"},[s("b-col",{attrs:{cols:"4"}},[s("div",{staticClass:"station-content"},[s("div",{staticClass:"station-title px-3 py-4"},[t._v("Stations")]),t._v(" "),s("div",{staticClass:"station-list"},t._l(t.stations,(function(e,a){return s("station-item",{key:a,attrs:{station:e,isActive:t.activeIndex===a},on:{onToggle:function(e){return t.onToggle(a)}}})})),1)])]),t._v(" "),s("b-col",{attrs:{cols:"8"}},[s("div",{staticClass:"station-content"},[t._v("asdfas")])])],1)],1)}),[],!1,null,null,null).exports}}]);
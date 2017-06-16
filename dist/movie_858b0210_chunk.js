webpackJsonp([2],{19:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(20),l=i(r),u=n(21),c=i(u),s=n(22),d=i(s),f=function(){function t(){a(this,t)}return o(t,null,[{key:"getMovilList",value:function(t){var e=t.count,n=(t.pageindex-1)*l.default.page.pagesize,i=t.type,a=t.q||"";return new Promise(function(t,o){c.default.getLocation().then(function(r){var u=""+l.default.apiurl.doubanurl.movie+i+"?start="+n+"&count="+e+"&city="+r.city+"&q="+a;d.default.fetch(u).then(function(e){t(e)}).catch(function(t){o(t)})}).catch(function(t){o(t)})})}},{key:"getMovieDetail",value:function(t){return new Promise(function(e,n){var i=l.default.apiurl.doubanurl.movie+"subject/"+t;d.default.fetch(i).then(function(t){e(t)}).catch(function(t){n(t)})})}}]),t}();e.default=f},21:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(20),l=i(r),u=n(22),c=i(u),s=function(){function t(){a(this,t)}return o(t,null,[{key:"getLocation",value:function(){return new Promise(function(t,e){c.default.fetch(l.default.apiurl.bmapurl.getLocationUrl).then(function(e){var n={province:e.content.address_detail.province,city:e.content.address_detail.city.substring(0,e.content.address_detail.city.length-1),city_code:e.content.address_detail.city_code,address:e.content.address,long:e.content.point.x,lat:e.content.point.y};t(n)}).catch(function(t){e(t)})})}}]),t}();e.default=s},22:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(23),l=i(r),u=function(){function t(){a(this,t)}return o(t,null,[{key:"fetch",value:function(t){return new Promise(function(e,n){(0,l.default)(t).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){n(t)})})}}]),t}();e.default=u},23:function(t,e,n){var i,a,o;!function(n,r){a=[e,t],i=r,o="function"==typeof i?i.apply(e,a):i,!(void 0!==o&&(t.exports=o))}(void 0,function(t,e){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function i(t){try{delete window[t]}catch(e){window[t]=void 0}}function a(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function o(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=t,l=e.timeout||r.timeout,u=e.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,s){var d=e.jsonpCallbackFunction||n(),f=u+"_"+d;window[d]=function(t){r({ok:!0,json:function(){return Promise.resolve(t)}}),c&&clearTimeout(c),a(f),i(d)},o+=o.indexOf("?")===-1?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+o+u+"="+d),e.charset&&p.setAttribute("charset",e.charset),p.id=f,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){s(new Error("JSONP request to "+t+" timed out")),i(d),a(f)},l),p.onerror=function(){s(new Error("JSONP request to "+t+" failed")),i(d),a(f),c&&clearTimeout(c)}})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};e.exports=o})},25:function(t,e,n){n(26);var i=n(17)(n(28),n(29),null,null);t.exports=i.exports},26:function(t,e,n){var i=n(27);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(15)("42c03435",i,!0)},27:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".movieitem2{margin:9px;cursor:pointer}.el-rate__icon{font-size:10px}",""])},28:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),o=i(a);e.default={data:function(){return{title:"正在热映",activeIndex:"1-1",movielist:[],loading:!0,currentPage:1,pagesize:12,total:0}},mounted:function(){this.loading=!0,this.defaultsel(),this.getMovieList()},watch:{$route:function(t,e){this.loading=!0,this.defaultsel(),this.getMovieList()}},methods:{todetail:function(t){this.$router.push("/movie/detail/"+t)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},defaultsel:function(){switch(this.$route.params.type){case"in_theaters":this.activeIndex="1-1",this.title="正在热映";break;case"coming_soon":this.activeIndex="1-2",this.title="即将上映";break;case"top250":this.activeIndex="1-3",this.title="口碑榜单";break;case"search":this.activeIndex="1-4";break;default:this.activeIndex="1-1",this.title="正在热映"}},getMovieList:function(){var t=this,e={pageindex:this.$route.params.page,type:this.$route.params.type,count:this.pagesize,q:this.$route.query.q||""};o.default.getMovilList(e).then(function(e){t.total=e.total,t.movielist=e.subjects,t.currentPage=parseInt(t.$route.params.page),t.loading=!1,"search"==t.$route.params.type&&(t.title="共搜到"+t.total+"相关“"+t.$route.query.q+"”的结果")},function(t){console.log(t)}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){this.loading=!0,this.$router.push({path:"/movie/"+this.$route.params.type+"/"+t,query:{q:this.$route.query.q}})}}}},29:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{span:3}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeIndex},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v("电影列表")]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1"}},[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("router-link",{attrs:{to:"/movie/in_theaters/1"}},[t._v("正在热映")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("router-link",{attrs:{to:"/movie/coming_soon/1"}},[t._v("即将上映")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"1-3"}},[n("i",{staticClass:"el-icon-star-on"}),t._v(" "),n("router-link",{attrs:{to:"/movie/top250/1"}},[t._v("口碑榜单")])],1)],1)],2)],1)],1),t._v(" "),n("el-col",{attrs:{span:19,offset:1}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",slot:"header"},[n("span",{staticStyle:{"line-height":"11px"}},[t._v(t._s(t.title))])]),t._v(" "),n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:3,"element-loading-text":"玩命加载中..."}},t._l(t.movielist,function(e){return n("el-col",{key:e.id,attrs:{span:4}},[n("el-card",{staticClass:"movieitem2",attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:e.images.medium,alt:"movie.title",width:"100%",height:"200"},on:{click:function(n){t.todetail(e.id)}}}),t._v(" "),n("div",{staticStyle:{padding:"3px","text-align":"center"}},[n("span",[t._v(t._s(e.title.length>9?e.title.substring(0,9)+"..":e.title))]),t._v(" "),n("div",{staticClass:"clearfix"},[e.rating.average>0?n("el-rate",{attrs:{value:e.rating.average/2,disabled:"","allow-half":"","show-text":"","text-color":"red","text-template":"{value}分"}}):n("span",{staticStyle:{color:"#D3D3D3","margin-top":"6px"}},[t._v("暂无评分")])],1)])])],1)})),t._v(" "),t.total>0?n("div",{staticStyle:{"text-align":"center"}},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1):t._e()],1)],1)],1)],1)},staticRenderFns:[]}}});
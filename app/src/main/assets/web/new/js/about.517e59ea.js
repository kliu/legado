(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(t,e,n){var a=n("342f"),s=a.match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},"0e8a":function(t,e,n){},"4e82":function(t,e,n){"use strict";var a=n("23e7"),s=n("1c0b"),r=n("7b0b"),i=n("50c4"),c=n("d039"),o=n("addb"),l=n("a640"),u=n("04d1"),d=n("d998"),h=n("2d00"),f=n("512c"),p=[],v=p.sort,g=c((function(){p.sort(void 0)})),m=c((function(){p.sort(null)})),C=l("sort"),w=!c((function(){if(h)return h<70;if(!(u&&u>3)){if(d)return!0;if(f)return f<603;var t,e,n,a,s="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)p.push({k:e+a,v:n})}for(p.sort((function(t,e){return e.v-t.v})),a=0;a<p.length;a++)e=p[a].k.charAt(0),s.charAt(s.length-1)!==e&&(s+=e);return"DGBEFHACIJK"!==s}})),A=g||!m||!C||!w,b=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}};a({target:"Array",proto:!0,forced:A},{sort:function(t){void 0!==t&&s(t);var e=r(this);if(w)return void 0===t?v.call(e):v.call(e,t);var n,a,c=[],l=i(e.length);for(a=0;a<l;a++)a in e&&c.push(e[a]);c=o(c,b(t)),n=c.length,a=0;while(a<n)e[a]=c[a++];while(a<l)delete e[a++];return e}})},"512c":function(t,e,n){var a=n("342f"),s=a.match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},"7b5b":function(t,e,n){},"7e43":function(t,e,n){t.exports=n.p+"img/noCover.b5c48bc1.jpeg"},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},addb:function(t,e){var n=Math.floor,a=function(t,e){var i=t.length,c=n(i/2);return i<8?s(t,e):r(a(t.slice(0,c),e),a(t.slice(c),e),e)},s=function(t,e){var n,a,s=t.length,r=1;while(r<s){a=r,n=t[r];while(a&&e(t[a-1],n)>0)t[a]=t[--a];a!==r++&&(t[a]=n)}return t},r=function(t,e,n){var a=t.length,s=e.length,r=0,i=0,c=[];while(r<a||i<s)r<a&&i<s?c.push(n(t[r],e[i])<=0?t[r++]:e[i++]):c.push(r<a?t[r++]:e[i++]);return c};t.exports=a},d504:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrapper"},[a("div",{staticClass:"navigation-wrapper"},[a("div",{staticClass:"navigation-title"},[t._v(" 阅读 ")]),a("div",{staticClass:"navigation-sub-title"},[t._v(" 清风不识字，何故乱翻书 ")]),a("div",{staticClass:"search-wrapper"},[a("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索书籍"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"recent-wrapper"},[a("div",{staticClass:"recent-title"},[t._v(" 最近阅读 ")]),a("div",{staticClass:"reading-recent"},[a("el-tag",{staticClass:"recent-book",class:{"no-point":""==t.readingRecent.url},attrs:{type:"warning"},on:{click:function(e){return t.toDetail(t.readingRecent.url,t.readingRecent.name,t.readingRecent.chapterIndex)}}},[t._v(" "+t._s(t.readingRecent.name)+" ")])],1)]),a("div",{staticClass:"setting-wrapper"},[a("div",{staticClass:"setting-title"},[t._v(" 基本设定 ")]),a("div",{staticClass:"setting-item"},[a("el-tag",{staticClass:"setting-connect",class:{"no-point":t.newConnect},attrs:{type:t.connectType},on:{click:t.setIP}},[t._v(" "+t._s(t.connectStatus)+" ")])],1)]),a("div",{staticClass:"bottom-icons"},[a("a",{attrs:{href:"https://github.com/Celeter/web-yuedu3",target:"_blank"}},[a("div",{staticClass:"bottom-icon"},[a("img",{attrs:{src:n("fa39"),alt:""}})])])])]),a("div",{ref:"shelfWrapper",staticClass:"shelf-wrapper"},[a("div",{staticClass:"books-wrapper"},[a("div",{staticClass:"wrapper"},t._l(t.shelf,(function(e){return a("div",{key:e.noteUrl,staticClass:"book",on:{click:function(n){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[a("div",{staticClass:"cover-img"},[a("img",{staticClass:"cover",attrs:{src:e.coverUrl||n("7e43"),alt:""}})]),a("div",{staticClass:"info",on:{click:function(n){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"sub"},[a("div",{staticClass:"author"},[t._v(" "+t._s(e.author)+" ")]),a("div",{staticClass:"dot"},[t._v("•")]),a("div",{staticClass:"size"},[t._v("共"+t._s(e.totalChapterNum)+"章")])]),a("div",{staticClass:"dur-chapter"},[t._v("已读："+t._s(e.durChapterTitle))]),a("div",{staticClass:"last-chapter"},[t._v("最新："+t._s(e.latestChapterTitle))])])])})),0)])])])},s=[],r=(n("4e82"),n("7b5b"),n("bc3a")),i=n.n(r),c={data:function(){return{search:"",readingRecent:{name:"尚无阅读记录",url:"",chapterIndex:0}}},mounted:function(){var t=localStorage.getItem("readingRecent");null!=t&&(this.readingRecent=JSON.parse(t),"undefined"==typeof this.readingRecent.chapterIndex&&(this.readingRecent.chapterIndex=0)),this.loading=this.$loading({target:this.$refs.shelfWrapper,lock:!0,text:"正在获取书籍信息",spinner:"el-icon-loading",background:"rgb(247,247,247)"});var e=this;i.a.get("/getBookshelf",{timeout:3e3}).then((function(t){e.loading.close(),e.$store.commit("setConnectType","success"),e.$store.commit("increaseBookNum",t.data.data.length),e.$store.commit("addBooks",t.data.data.sort((function(t,e){var n=t["durChapterTime"]||0,a=e["durChapterTime"]||0;return a-n}))),e.$store.commit("setConnectStatus","已连接 "),e.$store.commit("setNewConnect",!1)})).catch((function(t){throw e.loading.close(),e.$store.commit("setConnectType","danger"),e.$store.commit("setConnectStatus","连接失败"),e.$message.error("后端连接失败"),e.$store.commit("setNewConnect",!1),t}))},methods:{setIP:function(){},toDetail:function(t,e,n){sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",e),sessionStorage.setItem("chapterIndex",n),this.readingRecent={name:e,url:t,chapterIndex:n},localStorage.setItem("readingRecent",JSON.stringify(this.readingRecent)),this.$router.push({path:"/chapter"})}},computed:{shelf:function(){return this.$store.state.shelf},connectStatus:function(){return this.$store.state.connectStatus},connectType:function(){return this.$store.state.connectType},newConnect:function(){return this.$store.state.newConnect}}},o=c,l=(n("ef57"),n("2877")),u=Object(l["a"])(o,a,s,!1,null,"21a7f6c5",null);e["default"]=u.exports},d998:function(t,e,n){var a=n("342f");t.exports=/MSIE|Trident/.test(a)},ef57:function(t,e,n){"use strict";n("0e8a")},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],r=n("2877"),i={},c=Object(r["a"])(i,a,s,!1,null,null,null);e["default"]=c.exports},fa39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg=="}}]);
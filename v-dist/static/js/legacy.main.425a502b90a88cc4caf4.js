!function(n){function t(t){for(var r,i,a=t[0],c=t[1],s=t[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return A.push.apply(A,s||[]),e()}function e(){for(var n,t=0;t<A.length;t++){for(var e=A[t],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(A.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={1:0},A=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(n){var t=[],e=o[n];if(0!==e)if(e)t.push(e[2]);else{var r=new Promise((function(t,r){e=o[n]=[t,r]}));t.push(e[2]=r);var A,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(n){return i.p+"static/js/legacy."+({}[n]||n)+"."+{2:"8a1c1cd5b849f2d2cb8d",3:"3e08cc9f50c96d8bb203"}[n]+".js"}(n);var c=new Error;A=function(t){a.onerror=a.onload=null,clearTimeout(s);var e=o[n];if(0!==e){if(e){var r=t&&("load"===t.type?"missing":t.type),A=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+r+": "+A+")",c.name="ChunkLoadError",c.type=r,c.request=A,e[1](c)}o[n]=void 0}};var s=setTimeout((function(){A({type:"timeout",target:a})}),12e4);a.onerror=a.onload=A,document.head.appendChild(a)}return Promise.all(t)},i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/v-dist/",i.oe=function(n){throw console.error(n),n};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=c;A.push([188,0]),e()}({120:function(n,t,e){"use strict";var r=e(76),o=e.n(r),A=e(77),i=e.n(A),a=e(55),c=e.n(a),s=e(121),u=e.n(s),l=e(185),f=e.n(l),p=e(186),m=e.n(p),b=e(187),d=e.n(b),g=i()(o.a),C=c()(u.a),h=c()(u.a,{hash:"?#iefix"}),B=c()(f.a),y=c()(m.a),x=c()(d.a,{hash:"#FontName"});g.push([n.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}\nbody{margin:0}\nh1{font-size:2em;margin:.67em 0}\nhr{box-sizing:content-box;height:0;overflow:visible}\npre{font-family:monospace,monospace;font-size:1em}\na{background-color:transparent}\nabbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}\nb,strong{font-weight:bolder}\ncode,kbd,samp{font-family:monospace,monospace;font-size:1em}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}\nsup{top:-0.5em}\nimg{border-style:none}\nbutton,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\nbutton,input{overflow:visible}\nbutton,select{text-transform:none}\nbutton,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}\nbutton::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:0.01rem dotted ButtonText}\nfieldset{padding:.35em .75em .625em}\nlegend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\nprogress{vertical-align:baseline}\ntextarea{overflow:auto}\n[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}\n[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}\n[type="search"]{-webkit-appearance:textfield;outline-offset:-0.02rem}\n[type="search"]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\ndetails{display:block}\nsummary{display:list-item}\ntemplate{display:none}\n[hidden]{display:none}\n* {\r\n    box-sizing: border-box\n}\n*:before,\r\n*:after {\r\n    box-sizing: border-box\n}\n@font-face {\r\n    font-family: \'amrcaxbc\';\r\n    src: url('+C+");\r\n    src: url("+h+") format('embedded-opentype'),\r\n         url("+B+") format('woff'),\r\n         url("+y+") format('truetype'),\r\n         url("+x+") format('svg');\r\n    font-style: normal;\r\n    font-weight: normal;\n}\n.amrcaxbc{ font-family: 'amrcaxbc';\n}\nhtml,\r\nbody {\r\n    height: 100%;\n}\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\n}\ndiv {\r\n    text-align: center;\n}\nbutton {\r\n    font-size: 0.3rem;\r\n    vertical-align: middle;\n}\n.title {\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font-weight: bold;\n}\na {\r\n    text-decoration: none;\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 2;\r\n    font-weight: bold;\n}\na.active {\r\n    color: #35495e;\n}\nimg {\r\n    max-width: 100%;\n}\np {\r\n    padding: 0;\r\n    margin: 0;\n}\nbutton {\r\n    color: #35495e;\n}\n.fz40 {\r\n    font-size: 0.4rem;\r\n    color: #35495e;\n}\n.main {\r\n    width: 100%;\n}\n.hello {\r\n    font-size: 0;\n}\n.hello img {\r\n  position: relative;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  display: inline-block;\n}\n.hello img:after {\r\n  content: attr(alt) \" Loading ...\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 1rem;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n  font-size: 0.24rem;\r\n  color: rgb(100, 100, 100);\n}\n.router {\r\n  font-size: 0.5rem\n}\n.router_img {\r\n  font-size: 0;\r\n  text-align: center;\n}\n.router_img img{\r\n  width: 2rem;\r\n  height: 0.8rem;\n}\n.vuex {\r\n    line-height: 1\n}\n.increment {\r\n    margin-top: 0.2rem\n}\n","",{version:3,sources:["webpack://./v-src/static/css/index.css"],names:[],mappings:"AAAA,2EAA2E;AAC3E,KAAK,gBAAgB,CAAC,6BAA6B;AAAC,KAAK,QAAQ;AAAC,GAAG,aAAa,CAAC,cAAc;AAAC,GAAG,sBAAsB,CAAC,QAAQ,CAAC,gBAAgB;AAAC,IAAI,+BAA+B,CAAC,aAAa;AAAC,EAAE,4BAA4B;AAAC,YAAY,eAAe,CAAC,yBAAyB,CAAC,gCAAgC;AAAC,SAAS,kBAAkB;AAAC,cAAc,+BAA+B,CAAC,aAAa;AAAC,MAAM,aAAa;AAAC,QAAQ,aAAa,CAAC,aAAa,CAAC,iBAAiB,CAAC,uBAAuB;AAAC,IAAI,cAAc;AAAC,IAAI,UAAU;AAAC,IAAI,iBAAiB;AAAC,sCAAsC,mBAAmB,CAAC,cAAc,CAAC,gBAAgB,CAAC,QAAQ;AAAC,aAAa,gBAAgB;AAAC,cAAc,mBAAmB;AAAC,sDAAsD,yBAAyB;AAAC,8HAA8H,iBAAiB,CAAC,SAAS;AAAC,kHAAkH,iCAA6B;AAAC,SAAS,0BAA0B;AAAC,OAAO,qBAAqB,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,SAAS,CAAC,kBAAkB;AAAC,SAAS,uBAAuB;AAAC,SAAS,aAAa;AAAC,iCAAiC,qBAAqB,CAAC,SAAS;AAAC,sFAAsF,WAAW;AAAC,gBAAgB,4BAA4B,CAAC,uBAAmB;AAAC,2CAA2C,uBAAuB;AAAC,6BAA6B,yBAAyB,CAAC,YAAY;AAAC,QAAQ,aAAa;AAAC,QAAQ,iBAAiB;AAAC,SAAS,YAAY;AAAC,SAAS,YAAY;AAEptD;IACI;AACJ;AAEA;;IAEI;AACJ;AAEE;IACE,uBAAuB;IACvB,4CAAsC;IACtC;;;8DAG6D;IAC7D,kBAAkB;IAClB,mBAAmB;AACvB;AACA,WAAW,uBAAuB;AAAE;AAEpC;;IAEI,YAAY;AAChB;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,iBAAe;IACf,sBAAsB;AAC1B;AAEA;IACI,iBAAe;IACf,cAAc;IACd,SAAS;IACT,cAAc;IACd,iBAAiB;AACrB;AAEA;IACI,qBAAqB;IACrB,iBAAe;IACf,cAAc;IACd,SAAS;IACT,cAAc;IACd,iBAAiB;AACrB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,UAAU;IACV,SAAS;AACb;AAEA;IACI,cAAc;AAClB;AAEA;IACI,iBAAe;IACf,cAAc;AAClB;AAEA;IACI,WAAW;AACf;AAEA;IACI,YAAY;AAChB;AAEA;EACE,kBAAkB;EAClB,WAAY;EACZ,YAAa;EACb,qBAAqB;AACvB;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,sBAAsB;EACtB,iBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,yBAAyB;EACzB,kBAAkB;EAClB,kBAAe;EACf,yBAAyB;AAC3B;AAEA;EACE;AACF;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;AAEA;EACE,WAAY;EACZ,cAAY;AACd;AAEA;IACI;AACJ;AAEA;IACI;AACJ",sourcesContent:['/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\r\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\r\n\r\n* {\r\n    box-sizing: border-box\r\n}\r\n\r\n*:before,\r\n*:after {\r\n    box-sizing: border-box\r\n}\r\n\r\n  @font-face {\r\n    font-family: \'amrcaxbc\';\r\n    src: url(\'./static/font/amrcaxbc.eot\');\r\n    src: url(\'./static/font/amrcaxbc.eot?#iefix\') format(\'embedded-opentype\'),\r\n         url(\'./static/font/amrcaxbc.woff\') format(\'woff\'),\r\n         url(\'./static/font/amrcaxbc.ttf\') format(\'truetype\'),\r\n         url(\'./static/font/amrcaxbc.svg#FontName\') format(\'svg\');\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.amrcaxbc{ font-family: \'amrcaxbc\'; }\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\r\n}\r\n\r\ndiv {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    font-size: 30px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.title {\r\n    font-size: 60px;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font-weight: bold;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 60px;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 2;\r\n    font-weight: bold;\r\n}\r\n\r\na.active {\r\n    color: #35495e;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\np {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    color: #35495e;\r\n}\r\n\r\n.fz40 {\r\n    font-size: 40px;\r\n    color: #35495e;\r\n}\r\n\r\n.main {\r\n    width: 100%;\r\n}\r\n\r\n.hello {\r\n    font-size: 0;\r\n}\r\n\r\n.hello img {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  display: inline-block;\r\n}\r\n\r\n.hello img:after {\r\n  content: attr(alt) " Loading ...";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 100px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n  font-size: 24px;\r\n  color: rgb(100, 100, 100);\r\n}\r\n\r\n.router {\r\n  font-size: 50px\r\n}\r\n\r\n.router_img {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n\r\n.router_img img{\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n.vuex {\r\n    line-height: 1\r\n}\r\n\r\n.increment {\r\n    margin-top: 20px\r\n}\r\n'],sourceRoot:""}]),t.a=g},121:function(n,t,e){n.exports=e.p+"static/font/amrcaxbc.0006f75.eot"},122:function(n,t,e){"use strict";var r=e(76),o=e.n(r),A=e(77),i=e.n(A)()(o.a);i.push([n.i,".mlra{margin-left:auto;margin-right:auto}\n","",{version:3,sources:["webpack://./v-src/static/css/sass.scss"],names:[],mappings:"AACA,MAAO,gBADA,CACiB,iBADjB",sourcesContent:["$a:auto;\r\n.mlra {margin-left: $a; margin-right: $a;}"],sourceRoot:""}]),t.a=i},185:function(n,t,e){n.exports=e.p+"static/font/amrcaxbc.0acc140.woff"},186:function(n,t,e){n.exports=e.p+"static/font/amrcaxbc.8fb874b.ttf"},187:function(n,t){n.exports="data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJzdGF0aWMvZm9udC9hbXJjYXhiYy43YmQ0MGRmLnN2ZyI7"},188:function(n,t,e){e(189),n.exports=e(432)},429:function(n,t,e){n.exports=e.p+"static/img/hld.f056505.png"},432:function(n,t,e){"use strict";e.r(t),e.d(t,"app",(function(){return J})),e.d(t,"router",(function(){return O})),e.d(t,"store",(function(){return $}));var r={};e.r(r),e.d(r,"getRouter",(function(){return j})),e.d(r,"getText",(function(){return S})),e.d(r,"getCount",(function(){return _}));var o={};e.r(o),e.d(o,"getRouter",(function(){return P})),e.d(o,"getText",(function(){return Y})),e.d(o,"loadings",(function(){return R})),e.d(o,"increment",(function(){return D})),e.d(o,"decrement",(function(){return L}));var A={};e.r(A),e.d(A,"ROUTER_LIST",(function(){return Q})),e.d(A,"TEXT_LIST",(function(){return M})),e.d(A,"COUNT_LIST",(function(){return W})),e.d(A,"increment",(function(){return U})),e.d(A,"decrement",(function(){return q}));var i=e(82),a=e.n(i),c=e(32),s=e.n(c),u=e(44),l=e(54),f=e.n(l),p={props:{data:{type:Object,default:function(){return{avatar:""}}}}},m=e(29),b={components:{Hello:Object(m.a)(p,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"hello"},[t("p",{staticClass:"logo"},[t("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])}),[],!1,null,null,null).exports,Router:Object(m.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"router amrcaxbc"},[e("div",{staticClass:"title"},[n._v("Ecosystem")]),n._v(" "),e("RouterLink",{attrs:{to:"/vr1"}},[n._v(" router ")]),n._v(" "),e("RouterLink",{attrs:{to:"/axios"}},[n._v(" axios ")]),n._v(" "),e("RouterLink",{attrs:{to:"/vuex"}},[n._v(" vuex ")]),n._v(" "),e("RouterView",{staticClass:"fz40"})],1)}),[],!1,null,null,null).exports},data:function(){return{data:{}}},created:function(){var n=this;f.a.get("https://i-cut.cc/axios.json").then((function(t){n.data=t.data.logo}))}},d=e(75),g=e.n(d),C=e(120),h={insert:"head",singleton:!1},B=(g()(C.a,h),C.a.locals,e(122)),y={insert:"head",singleton:!1},x=(g()(B.a,y),B.a.locals,Object(m.a)(b,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("Hello",{attrs:{data:this.data}}),this._v(" "),t("Router")],1)}),[],!1,null,null,null).exports),v=(e(392),e(397),e(123)),w=[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"router_img"},[t("img",{attrs:{src:e(429),alt:""}})])}];function E(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}var I=function(n){return n.dispatch("getRouter")},z={prefetch:I,computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){a()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},Object(u.c)({RouterData:"getRouter"})),mounted:function(){I(this.$store)}},k=Object(m.a)(z,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])}),w,!1,null,null,null).exports;s.a.use(v.a);var O=new v.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:k},{path:"/axios",component:function(){return e.e(2).then(e.bind(null,436))}},{path:"/vuex",component:function(){return e.e(3).then(e.bind(null,435))}}],linkActiveClass:"active"}),j=function(n){return n.router},S=function(n){return n.text},_=function(n){return n.count},T="https://i-cut.cc/axios.json",P=function(n){var t=n.commit;return f.a.get(T).then((function(n){t("ROUTER_LIST",n.data)}))},Y=function(n){var t=n.commit;return f.a.get(T).then((function(n){t("TEXT_LIST",n.data)}))},R=function(n){var t=n.commit;return f.a.get(T).then((function(n){t("COUNT_LIST",n.data)}))},D=function(n){return(0,n.commit)("increment")},L=function(n){return(0,n.commit)("decrement")},Q=function(n,t){n.router=t.router},M=function(n,t){n.text=t.text},W=function(n,t){n.count=t.number.count},G="点击加载初始化值",U=function(n){"空"===n.count||n.count===G?n.count=G:n.count+=1},q=function(n){"空"===n.count||n.count===G?n.count=G:n.count-=1};s.a.use(u.a);var $=new u.a.Store({state:{router:{},text:"",count:"空"},getters:r,actions:o,mutations:A});function H(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}s.a.config.productionTip=!1,s.a.use(u.a);var J=new s.a(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?H(Object(e),!0).forEach((function(t){a()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):H(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({el:"#app",router:O,store:$},x))}});
//# sourceMappingURL=legacy.main.425a502b90a88cc4caf4.js.map
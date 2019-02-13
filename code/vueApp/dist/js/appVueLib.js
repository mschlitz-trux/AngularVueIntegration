!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=t[2],d=0,s=[];d<i.length;d++)o=i[d],H[o]&&s.push(H[o][0]),H[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(S&&S(t);s.length;)s.shift()();return k.push.apply(k,c||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==H[i]&&(r=!1)}r&&(k.splice(t--,1),e=R(R.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--m&&0===_&&x()}(e,t),r&&r(e,t)};var o,i=!0,a="f38da5c6b89a57275787",c=1e4,d={},s=[],u=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:I,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,y,b,m=0,_=0,w={},O={},g={};function D(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=R.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},g=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in y={},H)j(n);return"prepare"===f&&0===_&&0===m&&x(),t});var t}function j(e){g[e]?(O[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function x(){h("ready");var e=v;if(v=null,e)if(i)Promise.resolve().then(function(){return I(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(D(n));e.resolve(t)}}function I(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,i,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=P[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],u=P[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),l(n[s],[a])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],m={},_=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var O;c=D(w);var E=!1,j=!1,x=!1,I="";switch((O=y[w]?u(c):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(E=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(O),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return h("abort"),Promise.reject(E);if(j)for(c in m[c]=y[c],l(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(p[c]||(p[c]=[]),l(p[c],O.outdatedDependencies[c]));x&&(l(v,[O.moduleId]),m[c]=_)}var k,U=[];for(r=0;r<v.length;r++)c=v[r],P[c]&&P[c].hot._selfAccepted&&U.push({module:c,errorHandler:P[c].hot._selfAccepted});h("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete H[e]}(e)});for(var A,M,S=v.slice();S.length>0;)if(c=S.pop(),i=P[c]){var F={},T=i.hot._disposeHandlers;for(o=0;o<T.length;o++)(n=T[o])(F);for(d[c]=F,i.hot.active=!1,delete P[c],delete p[c],o=0;o<i.children.length;o++){var C=P[i.children[o]];C&&((k=C.parents.indexOf(c))>=0&&C.parents.splice(k,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(i=P[c]))for(M=p[c],o=0;o<M.length;o++)A=M[o],(k=i.children.indexOf(A))>=0&&i.children.splice(k,1);for(c in h("apply"),a=b,m)Object.prototype.hasOwnProperty.call(m,c)&&(e[c]=m[c]);var K=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(i=P[c])){M=p[c];var Y=[];for(r=0;r<M.length;r++)if(A=M[r],n=i.hot._acceptedDependencies[A]){if(-1!==Y.indexOf(n))continue;Y.push(n)}for(r=0;r<Y.length;r++){n=Y[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||K||(K=e)}}}for(r=0;r<U.length;r++){var V=U[r];c=V.module,s=[c];try{R(c)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||K||(K=n),K||(K=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||K||(K=e)}}return K?(h("fail"),Promise.reject(K)):(h("idle"),new Promise(function(e){e(v)}))}var P={},H={0:0},k=[];function R(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return R;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),R(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===f&&h("prepare"),_++,R.e(e).then(t,function(e){throw t(),e});function t(){_--,"prepare"===f&&(w[e]||j(e),0===_&&0===m&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.m=e,R.c=P,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/",R.h=function(){return a};var U=window.webpackJsonp=window.webpackJsonp||[],A=U.push.bind(U);U.push=t,U=U.slice();for(var M=0;M<U.length;M++)t(U[M]);var S=A;k.push(["tjUo",2,1]),n()}({Rbfy:function(e,t,n){},W6qm:function(e,t){e.exports=angular},YUnF:function(e,t,n){"use strict";var r=n("F3yY"),o={name:"SearchResults",data:function(){return{store:r.a.store}}},i=(n("gaph"),n("KHd+")),a={name:"VueAppContainer",components:{SearchResults:Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-SearchResults"},[e.store.searching?n("p",[e._v("Searching...")]):e._e(),e._v(" "),e.store.searchResults.length&&!e.store.searching?n("div",[n("p",[e._v(e._s(e.store.searchResults.length)+' results for: "'+e._s(e.store.searchParam)+'"')]),e._v(" "),n("ul",e._l(e.store.searchResults,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t.id}},[e._v(e._s(t.name)+" ("+e._s(t.id)+")")])],1)}),0)]):e._e()])},[],!1,null,null,null).exports}},c=(n("bBh8"),Object(i.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-VueAppContainer"},[t("nav",[t("search-results")],1),this._v(" "),t("main",[t("router-view")],1)])},[],!1,null,null,null));t.a=c.exports},aGE4:function(e,t,n){},abhn:function(e,t,n){"use strict";var r=n("oCYn"),o=n("jE9Z"),i=n("F3yY"),a={name:"Detail",data:function(){return{currentDetail:null}},methods:{getDetail:function(e){i.a.selectItem(Number(e)),this.currentDetail=i.a.store.currentDetail}},beforeRouteEnter:function(e,t,n){n(function(t){t.getDetail(e.params.itemId)})},beforeRouteUpdate:function(e,t,n){this.getDetail(e.params.itemId),n()}},c=(n("efUU"),n("KHd+")),d=Object(c.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentDetail?n("div",{staticClass:"app-Detail"},[n("h1",[e._v("Detail")]),e._v(" "),n("dl",[n("dt",[e._v("Id:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.id))]),e._v(" "),n("dt",[e._v("Text:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.name))]),e._v(" "),n("dt",[e._v("Other Field:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.value))])])]):e._e()},[],!1,null,null,null).exports;n.d(t,"a",function(){return s}),r.default.use(o.a);var s=new o.a({routes:[{path:"*",redirect:"/"},{path:"/:itemId?",name:"detail",component:d}]})},bBh8:function(e,t,n){"use strict";var r=n("kK8/");n.n(r).a},efUU:function(e,t,n){"use strict";var r=n("Rbfy");n.n(r).a},gaph:function(e,t,n){"use strict";var r=n("zAdU");n.n(r).a},"kK8/":function(e,t,n){},tjUo:function(e,t,n){"use strict";n.r(t);n("dE+T"),n("bHtr"),n("dRSK"),n("INYr"),n("HEwt"),n("Z2Ku"),n("yt8O"),n("6AQ9"),n("Vd3H"),n("0E+W"),n("yM4b"),n("IXt9"),n("f3/d"),n("9AAn"),n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("BJ/l"),n("eHKK"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),n("xfY5"),n("Ljet"),n("/KAi"),n("fN96"),n("7h0T"),n("sbF8"),n("h/M4"),n("knhD"),n("XfKG"),n("BP8U"),n("91GP"),n("RQRG"),n("/uf1"),n("/8Fb"),n("DW2E"),n("mYba"),n("jm62"),n("JduL"),n("5Pf0"),n("uaHG"),n("ZNX/"),n("mura"),n("25dN"),n("Zshi"),n("V/DX"),n("FlsD"),n("RW0V"),n("z2o2"),n("/SS/"),n("hhXQ"),n("VRzm"),n("CX2u"),n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),n("Oyvg"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("a1Th"),n("T39b"),n("ioFf"),n("rE2o"),n("hEkN"),n("nIY7"),n("+oPb"),n("SMB2"),n("oDIu"),n("rvZc"),n("0mN4"),n("bDcW"),n("nsiH"),n("VpUO"),n("L9s1"),n("0LDn"),n("XfO3"),n("tUrg"),n("9XZr"),n("7VC1"),n("eI33"),n("FLlr"),n("84bF"),n("9VmF"),n("FEjr"),n("Zz4T"),n("JCqj"),n("xm80"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("EK0E"),n("wCsR"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82"),n("aGE4"),n("F3yY")},zAdU:function(e,t,n){}});
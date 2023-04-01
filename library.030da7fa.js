!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequired7c6=a),a.register("b7ONl",(function(r,n){e(r.exports,"fetchPopularMovies",(function(){return s})),e(r.exports,"fetchTodayPopularMovies",(function(){return f})),e(r.exports,"fetchTrailerById",(function(){return h})),e(r.exports,"fetchGenres",(function(){return v}));var o=a("bpxeT"),i=a("2TvXO"),c="https://api.themoviedb.org/3",u="db5c04dbd9637821020050cea594d5e0";function s(t){return l.apply(this,arguments)}function l(){return(l=t(o)(t(i).mark((function e(r){var n,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URL("".concat(c,"/trending/movie/week"))).searchParams.append("api_key",u),n.searchParams.append("page",r),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(){return p.apply(this,arguments)}function p(){return(p=t(o)(t(i).mark((function e(){var r,n,o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new URL("".concat(c,"/trending/movie/day"))).searchParams.append("api_key",u),t.next=4,fetch(r);case 4:return n=t.sent,t.next=7,n.json();case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=t(o)(t(i).mark((function e(r){var n,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URL("".concat(c,"/movie/").concat(r,"/videos"))).searchParams.append("api_key",u),t.next=4,fetch(n);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=t(o)(t(i).mark((function e(){var r,n,o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new URL("".concat(c,"/genre/movie/list"))).searchParams.append("api_key",u),t.next=4,fetch(r);case 4:return n=t.sent,t.next=7,n.json();case 7:return o=t.sent,t.abrupt("return",o.genres);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}console.log(s(3))})),a.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==r&&n.call(b,a)&&(w=b);var E=m.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=m,u(E,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("cDXQO",(function(t,e){})),a.register("PqlDp",(function(e,r){var n=a("dDDEV"),o=a("jQDcF"),i=document.getElementById("info-modal");window.addEventListener("keydown",(function(t){"Escape"===t.key&&(i.classList.remove("open"),localStorage.removeItem("modalCardData"))}));var c=document.getElementById("close-modal");c.addEventListener("click",(function(t){console.log("111 event.target ",t.target),console.log("111 backdrop ",c),t.target==c&&(console.log("!!! "),i.classList.remove("open"),localStorage.removeItem("modalCardData"))})),window.onclick=function(t){var e=document.getElementById("info-modal");t.target==e&&(e.classList.remove("open"),localStorage.removeItem("modalCardData"))},window.onload=function(){var e=document.getElementsByClassName("movies")[0];console.log("movieListItems",e),e.addEventListener("click",(function(e){var r=t(n)({},e.target.dataset);console.log("bla ",r),localStorage.setItem("modalCardData",JSON.stringify(r)),u()}))};var u=function(){document.getElementById("info-modal").classList.add("open"),o.getInitialModalData()}})),a.register("dDDEV",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n.default(t,e,r[e])}))}return t};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}})),a.register("jQDcF",(function(t,r){e(t.exports,"getInitialModalData",(function(){return a}));var n=document.createElement("span"),o=document.createElement("span"),a=function(){var t=JSON.parse(localStorage.getItem("modalCardData"));console.log("!!!!!! DATA !!!!!! ",t),console.log("22222222 ",(1*t.vote_average).toFixed(2));var e=document.getElementById("film-img"),r=document.getElementById("film-title"),a=document.getElementById("votes"),i=document.getElementById("popul"),c=document.getElementById("origTitle"),u=document.getElementById("genre");e.src="".concat(t.poster_path),r.innerText="".concat(t.title),about.innerText="".concat(t.overview),n.className="average",o.className="count",n.innerText="".concat((1*t.vote_average).toFixed(2)),o.innerText="/ ".concat(t.vote_count),a.append(n,o),i.innerText="".concat(t.popularity),c.innerText="".concat(t.original_title),u.innerText="".concat(t.genre_ids)}})),a.register("5YIrO",(function(t,e){}))}();
//# sourceMappingURL=library.030da7fa.js.map

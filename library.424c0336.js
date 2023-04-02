!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("b7ONl",(function(r,n){t(r.exports,"fetchPopularMovies",(function(){return s})),t(r.exports,"fetchTodayPopularMovies",(function(){return f})),t(r.exports,"fetchTrailerById",(function(){return p})),t(r.exports,"fetchGenres",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c="https://api.themoviedb.org/3",u="db5c04dbd9637821020050cea594d5e0";function s(e){return l.apply(this,arguments)}function l(){return(l=e(o)(e(i).mark((function t(r){var n,o,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/trending/movie/week"))).searchParams.append("api_key",u),n.searchParams.append("page",r),e.next=5,fetch(n);case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=e(o)(e(i).mark((function t(){var r,n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/trending/movie/day"))).searchParams.append("api_key",u),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=e(o)(e(i).mark((function t(r){var n,o,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/movie/").concat(r,"/videos"))).searchParams.append("api_key",u),e.next=4,fetch(n);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=e(o)(e(i).mark((function t(){var r,n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/genre/movie/list"))).searchParams.append("api_key",u),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o.genres);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}console.log(s(3))})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(D([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=g.prototype=v.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function D(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=g,u(E,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(T.prototype),u(T.prototype,i,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new T(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=D,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("cDXQO",(function(t,r){var n,o=a("bpxeT"),i=a("2TvXO"),c=a("dyT35"),u=a("b7ONl"),s=(n=e(o)(e(i).mark((function t(r){var n,o,a,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),"A"===r.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,u.fetchTrailerById)(r.target.dataset.id);case 6:n=e.sent.results,o=n[0].key,a=function(e){"Escape"===e.code&&s.close()},(s=c.create('<iframe class="youtube-frame" width="900" height="600" src="https://www.youtube.com/embed/'.concat(o,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">     \n     </button>'),{onShow:function(){document.addEventListener("keydown",a)},onClose:function(){document.removeEventListener("keydown",a)}})).show(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0.message);case 16:case"end":return e.stop()}}),t,null,[[3,13]])}))),function(e){return n.apply(this,arguments)});document.querySelector(".trailer-btn").addEventListener("click",s)})),a.register("dyT35",(function(e,t){e.exports=function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var u=void 0;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,r,n)}return r[i].exports}for(var a=void 0,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=e.trim(),!0===t?r.children:r.firstChild},o=function(e,t){var r=e.children;return 1===r.length&&r[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};r.visible=a,r.create=function(e,t){var r=function(e,t){var r=n('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=r.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),u=o(a,"IFRAME");return!0===i&&r.classList.add("basicLightbox--img"),!0===c&&r.classList.add("basicLightbox--video"),!0===u&&r.classList.add("basicLightbox--iframe"),r}(e=function(e){var t="string"==typeof e,r=e instanceof HTMLElement==1;if(!1===t&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(r,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&r.addEventListener("click",(function(e){e.target===r&&i()}));var c={element:function(){return r},visible:function(){return a(r)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(r,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)})),a.register("PqlDp",(function(t,r){var n=a("dDDEV"),o=a("jQDcF"),i=a("4LMMA"),c=a("4Nugj"),u=a("l6KVq"),s=document.getElementById("info-modal");window.addEventListener("keydown",(function(e){"Escape"===e.key&&(s.classList.remove("open"),localStorage.removeItem("modalCardData"))}));var l=document.getElementById("close-modal");l.addEventListener("click",(function(e){e.target==l&&(s.classList.remove("open"),localStorage.removeItem("modalCardData"))})),window.onclick=function(e){var t=document.getElementById("info-modal");e.target==t&&(t.classList.remove("open"),localStorage.removeItem("modalCardData"))},window.onload=function(){document.getElementsByClassName("movies")[0].addEventListener("click",(function(t){var r=e(n)({},t.target.dataset);u.state.activeFilm=r,localStorage.setItem("modalCardData",JSON.stringify(r)),f();var o=(0,i.getFromStorage)(i.localStorageKeys.WATCHED)||[],a=(0,i.getFromStorage)(i.localStorageKeys.QUEUE)||[];o.find((function(e){return e.id===u.state.activeFilm.id}))?c.refs.addToWatchedBtn.innerText="REMOVE FROM WATCHED":c.refs.addToWatchedBtn.innerText="ADD TO WATCHED",a.find((function(e){return e.id===u.state.activeFilm.id}))?c.refs.addToQueueBtn.innerText="REMOVE FROM QUEUE":c.refs.addToQueueBtn.innerText="ADD TO QUEUE"}))};var f=function(){document.getElementById("info-modal").classList.add("open"),o.getInitialModalData()}})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("jQDcF",(function(e,r){t(e.exports,"getInitialModalData",(function(){return a}));var n=document.createElement("span"),o=document.createElement("span"),a=function(){var e=JSON.parse(localStorage.getItem("modalCardData"));console.log("!!!!!! DATA !!!!!! ",e),console.log("22222222 ",(1*e.vote_average).toFixed(2));var t=document.getElementById("film-img"),r=document.getElementById("film-title"),a=document.getElementById("votes"),i=document.getElementById("popul"),c=document.getElementById("origTitle"),u=document.getElementById("genre");t.src="".concat(e.poster_path),r.innerText="".concat(e.title),about.innerText="".concat(e.overview),n.className="average",o.className="count",n.innerText="".concat((1*e.vote_average).toFixed(2)),o.innerText="/ ".concat(e.vote_count),a.append(n,o),i.innerText="".concat(e.popularity),c.innerText="".concat(e.original_title),u.innerText="".concat(e.genre_ids)}})),a.register("4LMMA",(function(e,r){t(e.exports,"setToLocalStorage",(function(){return n})),t(e.exports,"getFromStorage",(function(){return o})),t(e.exports,"localStorageKeys",(function(){return a}));var n=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e.messege)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.messege)}},a={WATCHED:"watched",QUEUE:"queue"}})),a.register("4Nugj",(function(e,r){t(e.exports,"refs",(function(){return n})),document.querySelector(".footer__link");var n={form:document.querySelector(".header-search-form"),loader:document.querySelector(".loader"),pagination:document.querySelector(".pagination"),slider:document.querySelector(".swiper-wrapper"),btnWrapper:document.querySelector("#buttonWrapper"),addToWatchedBtn:document.querySelector(".add-to-watched-btn"),addToQueueBtn:document.querySelector(".add-to-queue-btn")}})),a.register("l6KVq",(function(e,r){t(e.exports,"state",(function(){return n}));var n={currentPage:1,totalPages:0,activeFilm:null}})),a.register("5YIrO",(function(e,t){var r={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal")};function n(e){r.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",o),document.body.style.overflow=""}function o(e){"Escape"===e.code&&n()}function a(e){e.target===r.teamBackdrop&&n()}r.openModal.addEventListener("click",(function(e){r.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",o),document.addEventListener("click",a),document.body.style.overflow="hidden"})),r.closeModal.addEventListener("click",n)}))}();
//# sourceMappingURL=library.424c0336.js.map

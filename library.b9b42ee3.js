!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("b7ONl",(function(r,n){e(r.exports,"fetchPopularMovies",(function(){return s})),e(r.exports,"fetchTodayPopularMovies",(function(){return d})),e(r.exports,"fetchMoviesByQuery",(function(){return p})),e(r.exports,"fetchTrailerById",(function(){return g})),e(r.exports,"fetchGenres",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c="https://api.themoviedb.org/3",u="db5c04dbd9637821020050cea594d5e0";function s(e){return l.apply(this,arguments)}function l(){return(l=t(o)(t(i).mark((function e(r){var n,o,a;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/trending/movie/week"))).searchParams.append("api_key",u),n.searchParams.append("page",r),e.next=5,fetch(n);case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=t(o)(t(i).mark((function e(){var r,n,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/trending/movie/day"))).searchParams.append("api_key",u),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return v.apply(this,arguments)}function v(){return(v=t(o)(t(i).mark((function e(r,n){var o,a,s;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new URL("".concat(c,"/search/movie"))).searchParams.append("api_key",u),o.searchParams.append("query",r),o.searchParams.append("page",n),e.next=6,fetch(o);case 6:return a=e.sent,e.next=9,a.json();case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=t(o)(t(i).mark((function e(r){var n,o,a;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/movie/").concat(r,"/videos"))).searchParams.append("api_key",u),e.next=4,fetch(n);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return y.apply(this,arguments)}function y(){return(y=t(o)(t(i).mark((function e(){var r,n,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/genre/movie/list"))).searchParams.append("api_key",u),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o.genres);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return M()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?v:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",g={};function h(){}function m(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=y.prototype=h.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=y,u(E,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(T.prototype),u(T.prototype,i,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new T(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("ajRVz",(function(e,t){var r=document.querySelectorAll("#btn"),n=document.getElementById("1");r.forEach((function(e){e.addEventListener("click",(function(){n.currentTime=0,n.play()}))}))})),a.register("k0xlu",(function(e,t){window.onscroll=function(){var e,t,r;e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=e/t*100,document.getElementById("myBar").style.width=r+"%"};var r=1.2*$(window).outerHeight();$(window).scroll((function(){$(document).scrollTop()>r?$("#up-button").addClass("active"):$("#up-button").removeClass("active")})),document.querySelector(".up-button").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),a.register("cDXQO",(function(e,t){var r=a("dyT35"),n=a("b7ONl"),o=a("jQDcF"),i="https://www.youtube.com/embed/",c=document.querySelector(".trailer-btn"),u=function(e){"Escape"===e.code&&s.close(),window.removeEventListener("keydown",u)};c.addEventListener("click",(function(){var e;e=o.filmId,(0,n.fetchTrailerById)(e).then((function(e){var t=e.results[0].key;l.src=i+t,s.show(),document.querySelector(".close-modal__trailer").addEventListener("click",u),window.addEventListener("keydown",u)})).catch((function(e){d.show(),console.log(e)}))}));var s=r.create('\n  <iframe width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">\n     </button>'),l=s.element().querySelector("iframe"),d=r.create('\n    <iframe width="900" height="600" src="'.concat(i,'6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      '))})),a.register("dyT35",(function(e,t){e.exports=function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var u=void 0;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,r,n)}return r[i].exports}for(var a=void 0,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=e.trim(),!0===t?r.children:r.firstChild},o=function(e,t){var r=e.children;return 1===r.length&&r[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};r.visible=a,r.create=function(e,t){var r=function(e,t){var r=n('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=r.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),u=o(a,"IFRAME");return!0===i&&r.classList.add("basicLightbox--img"),!0===c&&r.classList.add("basicLightbox--video"),!0===u&&r.classList.add("basicLightbox--iframe"),r}(e=function(e){var t="string"==typeof e,r=e instanceof HTMLElement==1;if(!1===t&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(r,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&r.addEventListener("click",(function(e){e.target===r&&i()}));var c={element:function(){return r},visible:function(){return a(r)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(r,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)})),a.register("jQDcF",(function(t,r){var n;e(t.exports,"filmId",(function(){return n})),e(t.exports,"getInitialModalData",(function(){return i}));var o=document.createElement("span"),a=document.createElement("span"),i=function(){var e=JSON.parse(localStorage.getItem("modalCardData")),t=document.getElementById("film-img"),r=document.getElementById("film-title"),i=document.getElementById("votes"),c=document.getElementById("popul"),u=document.getElementById("origTitle"),s=document.getElementById("genre");document.querySelector(".trailer-btn").dataset.filmId=e.id,n=e.id,t.src=e.poster_path?t.style.backgroundImage="url('https://image.tmdb.org/t/p/w500".concat(e.poster_path,"')"):"https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png",r.innerText=e.title?"".concat(e.title):"N/A",about.innerText=e.overview?"".concat(e.overview):"N/A",o.className="average",a.className="count",o.innerText=e.vote_average?"".concat((1*e.vote_average).toFixed(1)):"N/A",a.innerText=e.vote_count?"/ ".concat(e.vote_count):"N/A",i.append(o,a),c.innerText=e.popularity?"".concat((1*e.popularity).toFixed(1)):"N/A",u.innerText=e.original_title?"".concat(e.original_title):"N/A",s.innerText=e.genre_ids?"".concat(e.genre_ids):"N/A"}})),a.register("dOllX",(function(r,n){e(r.exports,"updateLibRender",(function(){return p})),e(r.exports,"localPaginate",(function(){return v})),e(r.exports,"loadFromStorageWatched",(function(){return g})),e(r.exports,"onClickWatched",(function(){return h}));var o,i=a("bpxeT"),c=a("2TvXO"),u=a("ewciJ"),s=a("4LMMA"),l=a("jcFG7"),d=a("5mKta"),f=a("l6KVq"),p=(o=t(i)(t(c).mark((function e(r){var n,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n="",(0,l.resetCurrentPage)(),o=v(r,f.state.currentPage),void 0!==r&&0!==r.length){e.next=9;break}(0,l.clearPagination)(),n='<li class="watched-warning">No movies have been added yet. Let\'s go pick something to your liking</li>',e.next=14;break;case 9:return e.next=11,(0,u.renderGallery)(o);case 11:n=e.sent,(0,l.clearPagination)(),(0,l.renderPaginationMarkup)();case 14:d.moviesEl.innerHTML="",d.moviesEl.insertAdjacentHTML("beforeend",n),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),function(e){return o.apply(this,arguments)}),v=function(e,t){if(e){var r=6*(t-1);return f.state.totalPages=Math.ceil(e.length/6),e.slice(r,r+6)}},g=function(){var e=(0,s.getFromStorage)(s.localStorageKeys.WATCHED);f.state.whatPaginated="local",f.state.whatchedOrQueue="WATCHED",p(e)},h=function(){var e=t(i)(t(c).mark((function e(r){var n,o,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(!r.target.classList.contains("active")){e.next=4;break}return e.abrupt("return");case 4:n=document.querySelector(".active"),o=r.target.dataset.value.toUpperCase(),f.state.whatchedOrQueue=o,a=(0,s.getFromStorage)(s.localStorageKeys[o]),p(a),n.classList.remove("active"),r.target.classList.add("active");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.register("ewciJ",(function(r,n){e(r.exports,"renderGallery",(function(){return l}));var o=a("bpxeT"),i=a("2TvXO"),c=a("b7ONl"),u="https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png";function s(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var u=i.value;if("N/A"===e||0===e.length){r.push("Other");break}e.includes(u.id)&&r.push(u.name)}}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r.length>2&&r.splice(2,r.length-2,"Other"),r.join(", ")}function l(e){return d.apply(this,arguments)}function d(){return d=t(o)(t(i).mark((function e(r){var n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.fetchGenres)();case 2:return n=e.sent,e.abrupt("return",r.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=e.id,o=e.poster_path,a=e.title,i=e.release_date,c=e.genre_ids,l=e.original_title,d=e.vote_average,p=e.popularity,v=e.vote_count,g=e.overview,h=o?"https://image.tmdb.org/t/p/w500".concat(o):u,m=i?i.split("-")[0]:"Unknown",y=c?s(c,n):"Unknown";return"\n      <li class='movie_list_item' data-id=\"".concat(t,'" >\n      <div href="" class=\'movie_list_link link\' id=').concat(t,'>\n      <div class="movie__cover--darkened"\n        data-id="').concat(t,'"\n        data-poster_path="').concat(o,'"\n        data-title="').concat(a,'"\n        data-genre_ids="').concat(y,'"\n        data-original_title="').concat(l,'"\n        data-vote_average="').concat(d,'"\n        data-popularity="').concat(p,'"\n        data-vote_count="').concat(v,'"\n        data-overview="').concat(g,'"\n        data-release_date="').concat(i,'"\n      ></div>\n        <img class="movie_list_image" src=').concat(h," alt='Poster ").concat(l,"' loading='lazy' />\n        <div class='movie-info'>\n            <p class='movie-title'>\n              <b>").concat(a.toUpperCase(),"</b>\n            </p>\n            <p class='movie-date'>\n              <span>").concat(y," | ").concat(m,'</span>\n            </p>\n            <div class="movie__average movie__average--').concat(f(d),'">').concat(Number(d).toFixed(1),"</div>\n        </div>\n        </div>\n      </li>\n      ")})).join(""));case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return e>=8?"green":e>6?"orange":"red"}})),a.register("4LMMA",(function(t,r){e(t.exports,"setToLocalStorage",(function(){return n})),e(t.exports,"getFromStorage",(function(){return o})),e(t.exports,"localStorageKeys",(function(){return a}));var n=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e.messege)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.messege)}},a={WATCHED:"watched",QUEUE:"queue"}})),a.register("jcFG7",(function(r,n){e(r.exports,"resetCurrentPage",(function(){return h})),e(r.exports,"clearPagination",(function(){return m})),e(r.exports,"renderPaginationMarkup",(function(){return w})),e(r.exports,"onBtnPageClick",(function(){return T}));var o,i=a("bpxeT"),c=a("2TvXO"),u=a("b7ONl"),s=a("ewciJ"),l=a("4LMMA"),d=a("4Nugj"),f=a("dOllX"),p=a("5mKta"),v=a("l6KVq"),g=d.refs.pagination,h=function(){v.state.currentPage=1},m=function(){g.innerHTML=""},y=(o=t(i)(t(c).mark((function e(r){var n,o,a,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="main"===e.t0?4:"search"===e.t0?18:"local"===e.t0?32:43;break;case 4:return e.prev=4,e.next=7,(0,u.fetchPopularMovies)(v.state.currentPage);case 7:return o=e.sent.results,e.next=10,(0,s.renderGallery)(o);case 10:n=e.sent,p.moviesEl.insertAdjacentHTML("beforeend",n),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(4),console.error(e.t1.message);case 17:return e.abrupt("break",44);case 18:return e.prev=18,e.next=21,(0,u.fetchMoviesByQuery)(v.state.query,v.state.currentPage);case 21:return a=e.sent.results,e.next=24,(0,s.renderGallery)(a);case 24:n=e.sent,p.moviesEl.insertAdjacentHTML("beforeend",n),e.next=31;break;case 28:e.prev=28,e.t2=e.catch(18),console.error(e.t2.message);case 31:return e.abrupt("break",44);case 32:return e.prev=32,i="WATCHED"===v.state.whatchedOrQueue?(0,l.getFromStorage)(l.localStorageKeys.WATCHED)||[]:(0,l.getFromStorage)(l.localStorageKeys.QUEUE)||[],e.next=36,(0,s.renderGallery)((0,f.localPaginate)(i,v.state.currentPage));case 36:n=e.sent,e.next=42;break;case 39:e.prev=39,e.t3=e.catch(32),console.error(e.t3.message);case 42:return e.abrupt("break",44);case 43:throw new Error("Invalid 'where' parameter: ".concat(r));case 44:p.moviesEl.insertAdjacentHTML("beforeend",n);case 45:case"end":return e.stop()}}),e,null,[[4,14],[18,28],[32,39]])}))),function(e){return o.apply(this,arguments)}),b=function(e,t){var r=Math.ceil(e/5),n=Math.ceil(t/5),o=5*(n-1)+1,a=Math.min(o+5-1,e);return{pages:Array.from({length:a-o+1},(function(e,t){return o+t})),hasPrevGroup:n>1,hasNextGroup:n<r}},w=function(){g.insertAdjacentHTML("beforeend",function(){if(!(v.state.totalPages<=1)){var e=b(v.state.totalPages,v.state.currentPage),t=e.pages,r=e.hasPrevGroup,n=e.hasNextGroup,o='<button type="button" class="end-btn page-btn">'.concat(v.state.totalPages,"</button>"),a='<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">\n    <use xlink:href="'.concat(v.state.sprite,'#icon-arrow-left"></use>\n  </svg></button>'),i='<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">\n    <use xlink:href="'.concat(v.state.sprite,'#icon-arrow-right"></use>\n  </svg></button>');return(r?a+'<button type="button" class="start-btn page-btn">1</button><button class="page-btn prev-dots">...</button>':"")+t.map((function(e){var t=e===v.state.currentPage?"active-page":"";return'<button type="button" class="page-btn '.concat(t,'\n        ">').concat(e,"</button>")})).join("")+(n?'<button class="page-btn next-dots">...</button>'+o+i:"")}}())},x=function(e){v.state.currentPage=e,m(),w()},E=function(){var e=b(v.state.totalPages,v.state.currentPage).pages[0],t=Math.max(e-1,1);x(t)},L=function(e){var t=document.querySelector(".active-page"),r=Number(e.target.textContent)||v.state.currentPage;r!==v.state.currentPage&&(x(r),t.classList.remove("active-page"),e.target.classList.add("active-page"))},T=function(){var e=t(i)(t(c).mark((function e(r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(Number(r.target.textContent)!==v.state.currentPage){e.next=4;break}return e.abrupt("return");case 4:r.target.classList.contains("next-btn")&&x(v.state.currentPage+1),r.target.classList.contains("prev-btn")&&x(v.state.currentPage-1),r.target.classList.contains("next-dots")&&(t=void 0,n=void 0,o=void 0,t=b(v.state.totalPages,v.state.currentPage).pages,n=t[t.length-1],o=Math.min(n+1,v.state.totalPages),v.state.currentPage=t[t.length-1]+1,x(o)),r.target.classList.contains("prev-dots")&&E(),L(r),p.moviesEl.innerHTML="",y(v.state.whatPaginated);case 11:case"end":return e.stop()}var t,n,o}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.register("4Nugj",(function(t,r){e(t.exports,"refs",(function(){return n}));var n={foterLink:document.querySelector(".footer__link"),form:document.querySelector(".header-search-form"),pagination:document.querySelector(".pagination"),slider:document.querySelector(".swiper-wrapper"),btnWrapper:document.querySelector("#buttonWrapper"),addToWatchedBtn:document.querySelector(".add-to-watched-btn"),addToQueueBtn:document.querySelector(".add-to-queue-btn"),moviesLib:document.querySelector(".movies-lib"),watchedQueueBtnBlock:document.querySelector(".buttons-block")}})),a.register("5mKta",(function(t,r){e(t.exports,"moviesEl",(function(){return u}));var n=a("b7ONl"),o=a("ewciJ"),i=a("jcFG7"),c=a("l6KVq"),u=document.querySelector(".movies");window.addEventListener("load",(function(){(0,i.resetCurrentPage)(),(0,n.fetchPopularMovies)(c.state.currentPage).then((function(e){if("local"!==c.state.whatPaginated){c.state.whatPaginated="main";var t=e.results,r=e.total_pages;return c.state.totalPages=r,(0,i.renderPaginationMarkup)(),(0,o.renderGallery)(t)}})).then((function(e){null==u||u.insertAdjacentHTML("beforeend",e)}))}))})),a.register("l6KVq",(function(t,r){e(t.exports,"state",(function(){return n}));var n={currentPage:1,totalPages:0,activeFilm:null,query:null,whatPaginated:null,whatchedOrQueue:null,sprite:new URL(a("8UD0o"))}})),a.register("8UD0o",(function(e,t){e.exports=a("aNJCr").getBundleURL("7nwxg")+a("iE7OH").resolve("ee16w")})),a.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("5YIrO",(function(e,t){var r={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal")};function n(e){r.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",o),document.body.style.overflow=""}function o(e){"Escape"===e.code&&n()}function a(e){e.target===r.teamBackdrop&&n()}r.openModal.addEventListener("click",(function(e){r.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",o),document.addEventListener("click",a),document.body.style.overflow="hidden"})),r.closeModal.addEventListener("click",n)})),a.register("PqlDp",(function(e,r){var n=a("dDDEV"),o=a("9Vzwk");a("b7ONl");var i=a("jQDcF");a("4LMMA"),a("4Nugj");var c=a("l6KVq"),u=document.getElementById("info-modal");window.addEventListener("keydown",(function(e){"Escape"===e.key&&(u.classList.remove("open"),localStorage.removeItem("modalCardData"))}));var s=document.getElementById("close-modal");s.addEventListener("click",(function(e){e.target==s&&(u.classList.remove("open"),localStorage.removeItem("modalCardData"))})),window.onclick=function(e){var t=document.getElementById("info-modal");e.target==t&&(t.classList.remove("open"),localStorage.removeItem("modalCardData"))},window.onload=function(){var e=document.getElementsByClassName("movies")[0],r=document.getElementsByClassName("movies-lib")[0];null==e||e.addEventListener("click",(function(e){a(e)})),null==r||r.addEventListener("click",(function(e){a(e)}));var a=function(e){var r=t(n)({},e.target.dataset);Object.keys(r).length&&(c.state.activeFilm=r,localStorage.setItem("modalCardData",JSON.stringify(r)),l(),(0,o.updateModalbuttons)())}};var l=function(){document.getElementById("info-modal").classList.add("open"),i.getInitialModalData()}})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("9Vzwk",(function(r,n){e(r.exports,"onBtnAddToLibrary",(function(){return p})),e(r.exports,"updateModalbuttons",(function(){return h})),e(r.exports,"updateMarkupLibrary",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO");a("ewciJ");var c=a("4LMMA"),u=a("jcFG7"),s=a("4Nugj"),l=a("dOllX");a("5mKta");var d=a("l6KVq"),f=function(e,t,r){"add"===t?(e.dataset.value="remove",e.innerText="REMOVE FROM ".concat(r)):(e.dataset.value="add",e.innerText="ADD TO ".concat(r))},p=function(e){if("BUTTON"===e.target.nodeName){var t=e.target.classList.contains("add-to-queue-btn")?"QUEUE":"WATCHED",r=(0,c.getFromStorage)(c.localStorageKeys[t])||[],n=(0,c.getFromStorage)(c.localStorageKeys.WATCHED)||[],o=(0,c.getFromStorage)(c.localStorageKeys.QUEUE)||[];if("add"===e.target.dataset.value){if("QUEUE"===t&&n.find((function(e){return e.id===d.state.activeFilm.id})))return g(n,"watched"),v(o,"queue"),f(s.refs.addToQueueBtn,"add","QUEUE"),void f(s.refs.addToWatchedBtn,"remove","WATCHED");if("WATCHED"===t&&o.find((function(e){return e.id===d.state.activeFilm.id})))return g(o,"queue"),v(n,"watched"),f(s.refs.addToWatchedBtn,"add","WATCHED"),void f(s.refs.addToQueueBtn,"remove","QUEUE");v(r,t.toLowerCase()),f(e.target,"add",t)}else g(r,t.toLowerCase()),f(e.target,"remove",t)}};function v(e,t){e.push(d.state.activeFilm),(0,c.setToLocalStorage)(t,e)}function g(e,t){var r=e.filter((function(e){return e.id!==d.state.activeFilm.id}));(0,c.setToLocalStorage)(t,r)}function h(){var e=(0,c.getFromStorage)(c.localStorageKeys.WATCHED)||[],t=(0,c.getFromStorage)(c.localStorageKeys.QUEUE)||[];e.find((function(e){return e.id===d.state.activeFilm.id}))?(f(s.refs.addToWatchedBtn,"add","WATCHED"),f(s.refs.addToQueueBtn,"remove","QUEUE")):t.find((function(e){return e.id===d.state.activeFilm.id}))?(f(s.refs.addToQueueBtn,"add","QUEUE"),f(s.refs.addToWatchedBtn,"remove","WATCHED")):(f(s.refs.addToWatchedBtn,"remove","WATCHED"),f(s.refs.addToQueueBtn,"remove","QUEUE"))}function m(e){"ADD TO WATCHED"===e.target.innerText||"REMOVE FROM WATCHED"===e.target.innerText?y():("ADD TO QUEUE"===e.target.innerText||"REMOVE FROM QUEUE"===e.target.innerText)&&w()}function y(){return b.apply(this,arguments)}function b(){return(b=t(o)(t(i).mark((function e(){var r,n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.resetCurrentPage)(),r=(0,c.getFromStorage)(c.localStorageKeys.WATCHED)||[],n=(0,l.localPaginate)(r,d.state.currentPage),(0,l.updateLibRender)(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return x.apply(this,arguments)}function x(){return(x=t(o)(t(i).mark((function e(){var r,n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.resetCurrentPage)(),r=(0,c.getFromStorage)(c.localStorageKeys.QUEUE)||[],n=(0,l.localPaginate)(r,d.state.currentPage),(0,l.updateLibRender)(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),a("iE7OH").register(JSON.parse('{"7nwxg":"library.b9b42ee3.js","4dE9U":"index.eb309886.css","ee16w":"sprite.a7e02cf8.svg"}'))}();
//# sourceMappingURL=library.b9b42ee3.js.map
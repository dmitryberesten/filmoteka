function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("7rYDH",(function(t,n){e(t.exports,"API_KEY",(function(){return o})),e(t.exports,"fetchPopularMovies",(function(){return r})),e(t.exports,"fetchTodayPopularMovies",(function(){return a})),e(t.exports,"fetchTrailerById",(function(){return i})),e(t.exports,"fetchGenres",(function(){return c}));const o="db5c04dbd9637821020050cea594d5e0";async function r(e){const t=new URL("https://api.themoviedb.org/3/trending/movie/week");t.searchParams.append("api_key",o),t.searchParams.append("page",e);const n=await fetch(t);return await n.json()}async function a(){const e=new URL("https://api.themoviedb.org/3/trending/movie/day");e.searchParams.append("api_key",o);const t=await fetch(e);return await t.json()}async function i(e){const t=new URL(`https://api.themoviedb.org/3/movie/${e}/videos`);t.searchParams.append("api_key",o);const n=await fetch(t);return await n.json()}async function c(){const e=new URL("https://api.themoviedb.org/3/genre/movie/list");e.searchParams.append("api_key",o);const t=await fetch(e);return(await t.json()).genres}console.log(r(3))})),r.register("37v9V",(function(e,t){var n=r("9B8F0"),o=r("7rYDH");const a="https://www.youtube.com/embed/",i=n.create('\n  <iframe width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">\n     </button>'),c=i.element().querySelector("iframe"),s=n.create('\n    <iframe width="900" height="600" src="https://www.youtube.com/embed/6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      ');document.querySelector(".trailer-btn").addEventListener("click",(function(e){(async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=${o.API_KEY}&language=en-US`);return await t.json()})(e).then((e=>{const t=e.results[0].key;c.src=a+t,i.show();document.querySelector(".close-modal__trailer").addEventListener("click",n);const n=e=>{"Escape"===e.code&&instance.close(),window.removeEventListener("keydown",closeModalHandler)}})).catch((e=>{s.show(),console.log(e)}))}))})),r.register("9B8F0",(function(e,t){e.exports=function e(t,n,o){function r(i,c){if(!n[i]){if(!t[i]){var s=void 0;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,(function(e){return r(t[i][1][e]||e)}),d,d.exports,e,t,n,o)}return n[i].exports}for(var a=void 0,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=r(a,"IMG"),c=r(a,"VIDEO"),s=r(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)})),r.register("b9l6T",(function(e,t){var n=r("62bmB"),o=r("b5rV1"),a=r("krGWQ"),i=r("lJEtM");const c=document.getElementById("info-modal");window.addEventListener("keydown",(e=>{"Escape"===e.key&&(c.classList.remove("open"),localStorage.removeItem("modalCardData"))}));const s=document.getElementById("close-modal");s.addEventListener("click",(e=>{e.target==s&&(c.classList.remove("open"),localStorage.removeItem("modalCardData"))})),window.onclick=e=>{let t=document.getElementById("info-modal");e.target==t&&(t.classList.remove("open"),localStorage.removeItem("modalCardData"))},window.onload=()=>{document.getElementsByClassName("movies")[0].addEventListener("click",(e=>{const t={...e.target.dataset};if(!Object.keys(t).length)return;i.state.activeFilm=t,localStorage.setItem("modalCardData",JSON.stringify(t)),l();const n=(0,o.getFromStorage)(o.localStorageKeys.WATCHED)||[],r=(0,o.getFromStorage)(o.localStorageKeys.QUEUE)||[];n.find((e=>e.id===i.state.activeFilm.id))?a.refs.addToWatchedBtn.innerText="REMOVE FROM WATCHED":a.refs.addToWatchedBtn.innerText="ADD TO WATCHED",r.find((e=>e.id===i.state.activeFilm.id))?a.refs.addToQueueBtn.innerText="REMOVE FROM QUEUE":a.refs.addToQueueBtn.innerText="ADD TO QUEUE"}))};const l=()=>{document.getElementById("info-modal").classList.add("open"),n.getInitialModalData()}})),r.register("62bmB",(function(t,n){e(t.exports,"getInitialModalData",(function(){return a}));const o=document.createElement("span"),r=document.createElement("span"),a=()=>{const e=JSON.parse(localStorage.getItem("modalCardData")),t=document.getElementById("film-img"),n=document.getElementById("film-title"),a=document.getElementById("votes"),i=document.getElementById("popul"),c=document.getElementById("origTitle"),s=document.getElementById("genre");t.src=`${e.poster_path}`,n.innerText=`${e.title}`,about.innerText=`${e.overview}`,o.className="average",r.className="count",o.innerText=`${(1*e.vote_average).toFixed(2)}`,r.innerText=`/ ${e.vote_count}`,a.append(o,r),i.innerText=`${e.popularity}`,c.innerText=`${e.original_title}`,s.innerText=`${e.genre_ids}`}})),r.register("b5rV1",(function(t,n){e(t.exports,"setToLocalStorage",(function(){return o})),e(t.exports,"getFromStorage",(function(){return r})),e(t.exports,"localStorageKeys",(function(){return a}));const o=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e.messege)}},r=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.messege)}},a={WATCHED:"watched",QUEUE:"queue"}})),r.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return o})),document.querySelector(".footer__link");const o={form:document.querySelector(".header-search-form"),pagination:document.querySelector(".pagination"),slider:document.querySelector(".swiper-wrapper"),btnWrapper:document.querySelector("#buttonWrapper"),addToWatchedBtn:document.querySelector(".add-to-watched-btn"),addToQueueBtn:document.querySelector(".add-to-queue-btn")}})),r.register("lJEtM",(function(t,n){e(t.exports,"state",(function(){return o}));const o={currentPage:1,totalPages:0,activeFilm:null}})),r.register("a9okJ",(function(e,t){const n={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal")};function o(e){n.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",r),document.body.style.overflow=""}function r(e){"Escape"===e.code&&o()}function a(e){e.target===n.teamBackdrop&&o()}n.openModal.addEventListener("click",(function(e){n.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",r),document.addEventListener("click",a),document.body.style.overflow="hidden"})),n.closeModal.addEventListener("click",o)}));
//# sourceMappingURL=library.53c1e5d6.js.map

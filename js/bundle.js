!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);i(2);window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,i){var n;e=window.matchMedia(e);var r=function(){return e.matches?void(n=new Swiper(t,i)):void(void 0!==n&&n.destroy(!0,!0))};e.addEventListener("change",r),r()};e("(max-width: 580px)",".slider-brands",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.3},360:{slidesPerView:1.6},470:{slidesPerView:2}},autoplay:{delay:3e3}}),e("(max-width: 580px)",".slider-devices",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.3},360:{slidesPerView:1.6},470:{slidesPerView:2}},autoplay:{delay:3e3}}),e("(max-width: 580px)",".slider-prices",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.2},360:{slidesPerView:1.3},420:{slidesPerView:1.5},480:{slidesPerView:1.7},530:{slidesPerView:2}},autoplay:{delay:3e3}})}));var n=document.querySelector(".info__text-wrapper"),r=n.querySelector(".info__text");n.querySelector(".btn--more").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),r.classList.toggle("info__text--visible"),this.textContent="Читать далее"===this.textContent?"Скрыть":"Читать далее"}));var o=document.querySelector(".brands__container"),s=o.querySelector(".brands__list");o.querySelector(".btn-show").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),s.classList.toggle("brands__list--visible"),this.textContent="Показать все"===this.textContent?"Скрыть":"Показать все"}));var l=document.querySelector(".devices__container"),a=l.querySelector(".devices__list");l.querySelector(".btn-show").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),a.classList.toggle("devices__list--visible"),this.textContent="Показать все"===this.textContent?"Скрыть":"Показать все"}))},function(e,t,i){}]);
//# sourceMappingURL=bundle.js.map
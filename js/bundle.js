!function(e){var t={};function i(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);i(2);window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,i){var n;e=window.matchMedia(e);var c=function(){return e.matches?void(n=new Swiper(t,i)):void(void 0!==n&&n.destroy(!0,!0))};e.addEventListener("change",c),c()};e("(max-width: 580px)",".slider-brands",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.3},360:{slidesPerView:1.6},470:{slidesPerView:2}},autoplay:{delay:4e3}}),e("(max-width: 580px)",".slider-devices",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.3},360:{slidesPerView:1.6},470:{slidesPerView:2}},autoplay:{delay:4e3}}),e("(max-width: 580px)",".slider-prices",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1.2},360:{slidesPerView:1.3},420:{slidesPerView:1.5},480:{slidesPerView:1.7},530:{slidesPerView:2}},autoplay:{delay:4e3}})}));var n=document.querySelector(".info__text-wrapper"),c=n.querySelector(".info__text");n.querySelector(".btn--more").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),c.classList.toggle("info__text--visible"),this.textContent="Читать далее"===this.textContent?"Скрыть":"Читать далее"}));var o=document.querySelector(".brands__container"),s=o.querySelector(".brands__list");o.querySelector(".btn-show").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),s.classList.toggle("brands__list--visible"),this.textContent="Показать все"===this.textContent?"Скрыть":"Показать все"}));var r=document.querySelector(".devices__container"),l=r.querySelector(".devices__list");r.querySelector(".btn-show").addEventListener("click",(function(){this.classList.toggle("btn--more--active"),l.classList.toggle("devices__list--visible"),this.textContent="Показать все"===this.textContent?"Скрыть":"Показать все"}));var a=document.querySelector(".sidebar"),d=document.querySelector(".header__menu-btn"),u=document.querySelector(".sidebar__close-btn"),v=document.querySelector("main"),f=document.querySelector(".footer"),b=document.querySelector("body"),p=document.querySelector(".header"),m=function(){v.classList.add("locked"),f.classList.add("locked"),p.classList.add("locked"),b.classList.add("no-scroll")},y=function(){v.classList.remove("locked"),f.classList.remove("locked"),p.classList.remove("locked"),b.classList.remove("no-scroll")};d.addEventListener("click",(function(){a.classList.add("sidebar--active"),m()}));var L=function(){a.classList.remove("sidebar--active"),y()};u.addEventListener("click",(function(){L()})),document.addEventListener("click",(function(e){a.classList.contains("sidebar--active")&&(e.composedPath().includes(a)||L())}),{capture:!0});var k=document.querySelector(".feedback"),_=k.querySelector("input"),w=document.querySelectorAll(".btn-feedback"),S=document.querySelector(".feedback__close-btn");w.forEach((function(e){e.addEventListener("click",(function(){a.classList.contains("sidebar--active")&&L(),k.classList.add("feedback--visible"),a.classList.add("locked"),m(),_.focus()}))}));var h=function(){k.classList.remove("feedback--visible"),a.classList.remove("locked"),y(),_.blur()};S.addEventListener("click",(function(){h()})),document.addEventListener("click",(function(e){k.classList.contains("feedback--visible")&&(e.composedPath().includes(k)||h())}),{capture:!0});var g=document.querySelector(".call"),q=g.querySelector("input"),x=document.querySelectorAll(".btn-modal-call"),P=document.querySelector(".call__close-btn");x.forEach((function(e){e.addEventListener("click",(function(){a.classList.contains("sidebar--active")&&L(),g.classList.add("call--visible"),a.classList.add("locked"),m(),q.focus()}))}));var E=function(){g.classList.remove("call--visible"),a.classList.remove("locked"),y(),q.blur()};P.addEventListener("click",(function(){E()})),document.addEventListener("click",(function(e){g.classList.contains("call--visible")&&(e.composedPath().includes(g)||E())}),{capture:!0}),document.onkeydown=function(e){27==e.keyCode&&(h(),L(),E())}},function(e,t,i){}]);
//# sourceMappingURL=bundle.js.map
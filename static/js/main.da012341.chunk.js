(this["webpackJsonpthe-book-store"]=this["webpackJsonpthe-book-store"]||[]).push([[0],{38:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(25),i=s.n(n),l=(s(38),s(26)),o=s(27),r=s(33),u=s(32),j=s(14),d=s.n(j),m=s(28),b=s(11),h=s(29),v=s.n(h),O=s(30),_=s.n(O),f=s(9),x=s(1);var p=function(){return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsxs)("div",{className:"header__logo-area",children:[Object(x.jsx)("div",{className:"header__logo",alt:"logo"}),Object(x.jsx)("h1",{className:"header__title",children:"The Book store"})]}),Object(x.jsx)("nav",{className:"nav",children:Object(x.jsxs)("ul",{className:"nav__menu",children:[Object(x.jsx)("li",{className:"nav__menu-list",children:Object(x.jsx)(f.b,{to:"/",className:"nav__menu-link",children:"Home"})}),Object(x.jsx)("li",{className:"nav__menu-list",children:Object(x.jsx)(f.b,{to:"#",className:"nav__menu-link",children:"Books"})}),Object(x.jsx)("li",{className:"nav__menu-list",children:Object(x.jsx)(f.b,{to:"#",className:"nav__menu-link",children:"Magazines"})}),Object(x.jsx)("li",{className:"nav__menu-list",children:Object(x.jsx)(f.b,{to:"#",className:"nav__menu-link",children:"E-Books"})}),Object(x.jsx)("li",{className:"nav__menu-list",children:Object(x.jsx)(f.b,{to:"#",className:"nav__menu-link",children:"Account"})})]})})]})};var g=function(e){var t,s=e.book;return Object(x.jsxs)(f.b,{to:"#",className:"card-featured",children:[Object(x.jsx)("div",{className:"card-featured__image-container",children:Object(x.jsx)("img",{src:s.volumeInfo.imageLinks.thumbnail,alt:s.volumeInfo.title,className:"card-featured__image"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"card-featured__title",children:s.volumeInfo.title}),Object(x.jsx)("h4",{className:"card-featured__author",children:s.volumeInfo.authors[0]}),Object(x.jsxs)("span",{className:"card-featured__pages",children:["Pages: ",s.volumeInfo.pageCount]}),Object(x.jsx)("p",{className:"card-featured__details",children:(t=s.volumeInfo.description,t.length>120?"".concat(t.substring(0,118),"..."):t)})]})]})};var N=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(),i=Object(b.a)(n,2),l=i[0],o=i[1],r=Object(c.useState)(!1),u=Object(b.a)(r,2),j=u[0],h=u[1],O=Object(c.useState)(""),f=Object(b.a)(O,2),N=f[0],k=f[1];Object(c.useEffect)((function(){h(!0),Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.get("https://www.googleapis.com/books/v1/volumes?q=HTML5").then((function(e){var t=e.data.items;I(t)})).catch((function(e){console.log(e)})).finally((function(){h(!1)})),k(localStorage.getItem("isSelected"));case 2:case"end":return e.stop()}}),e)})))()}),[]);var I=function(e){a(e.slice(0,e.length-2)),o(e.slice(-2))};return j?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)(_.a,{type:"Puff",color:"#ccc",height:100,width:100,timeout:3e3,svgClass:"my-custom-class"})}):Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(p,{}),Object(x.jsxs)("main",{children:[Object(x.jsx)("p",{className:"main__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dis purus leo fames in vulputate vivamus in. Dictumst scelerisque accumsan ut volutpat, sodales est laoreet phasellus volutpat. Malesuada nunc egestas tortor, orci sem proin. In felis ut facilisis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dis purus leo fames in vulputate"}),Object(x.jsxs)("section",{className:"book-section",children:[Object(x.jsxs)("div",{className:"book-section__featured",children:[Object(x.jsx)("h2",{className:"card-featured-title",children:"Featured"}),l&&l.map((function(e){return Object(x.jsx)(g,{book:e},e.etag)}))]}),Object(x.jsx)("div",{className:"book-section__main",children:s&&s.map((function(e){return Object(x.jsxs)("div",{className:"card ".concat(N===e.id?"selected":""),onClick:function(t){t.preventDefault(),k(e.id),localStorage.setItem("isSelected",e.id)},children:[Object(x.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title,className:"card__image"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"card__title",children:e.volumeInfo.title}),Object(x.jsx)("h4",{className:"card__author",children:e.volumeInfo.authors[0]}),Object(x.jsxs)("span",{className:"card__pages",children:["Pages: ",e.volumeInfo.pageCount]}),Object(x.jsx)("p",{className:"card__details",children:(t=e.volumeInfo.description,t.length>120?"".concat(t.substring(0,118),"..."):t)})]})]},e.etag);var t}))})]})]})]})},k=(s(85),s(3)),I=function(e){Object(r.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(f.a,{children:Object(x.jsx)(k.c,{children:Object(x.jsx)(k.a,{path:"/",exact:!0,component:N})})})})}}]),s}(c.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,87)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),S()}},[[86,1,2]]]);
//# sourceMappingURL=main.da012341.chunk.js.map
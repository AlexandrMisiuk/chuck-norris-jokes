(this["webpackJsonpchuck-norris-jokes"]=this["webpackJsonpchuck-norris-jokes"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(6),a=c.n(n),i=c(8),o=c(0);function s(){return Object(o.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#333333"}),Object(o.jsx)("rect",{x:"7",y:"16",width:"14",height:"2",rx:"1",fill:"white"}),Object(o.jsx)("rect",{x:"7",y:"10",width:"14",height:"2",rx:"1",fill:"white"})]})}function j(){return Object(o.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#333333"}),Object(o.jsx)("rect",{width:"14.8492",height:"2.12131",rx:"1.06065",transform:"matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)",fill:"white"}),Object(o.jsx)("rect",{width:"14.8492",height:"2.12131",rx:"1.06065",transform:"matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)",fill:"white"})]})}var l=function(e){var t=e.isFavouritesShow,c=e.setIsFavouritesShow,r=t?Object(o.jsx)(j,{}):Object(o.jsx)(s,{});return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"MSI 2020"}),Object(o.jsxs)("div",{className:"header-favourite-btn",onClick:function(){return c(!t)},children:[r,Object(o.jsx)("h3",{children:"Favourite"})]})]})},d=c(2),u=c(3),h="jokes/RECEIVE_JOKES",b="jokes/JOKES_ERROR",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:h,payload:e}},f=function(e){return{type:b,payload:e}},v="favourites/ADD_FAVOURITE",x="favourites/REMOVE_FAVOURITE",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:x,payload:e}};var C="jokes/SEARCH_TYPE",g="jokes/CATEGORIES",y="jokes/SEARCH_ERROR",w="jokes/SELECTED_CATEGORY",m="jokes/SEARCH_QUERY";function k(e){return fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){e(function(){return{type:g,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}(t))}),(function(t){e(function(e){return{type:y,payload:e}}(t))}))}function V(e){var t=e.category,c={onClick:e.onClick,id:"id"+t,type:"radio",name:"joke_category",value:t},r={className:"category-btn",htmlFor:"id"+t};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",Object(d.a)({},c)),Object(o.jsx)("label",Object(d.a)(Object(d.a)({},r),{},{children:t}))]})}var F=function(e){return e.jokeSearch};function A(e){var t=e.searchView,c=Object(u.c)(F).categories,r=Object(u.b)(),n=c.map((function(e,t){var c={key:t+1,category:e,onClick:i};return Object(o.jsx)(V,Object(d.a)({},c))})),a={display:"category"===t?"":"none"};function i(e){var t=function(){return{type:w,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(e.target.value);r(t)}return Object(o.jsx)("div",{className:"categories-btns",style:a,children:n})}function B(e){var t=e.searchView,c=Object(u.b)(),r={type:"text",placeholder:"Free text search... ",style:{display:"search"===t?"block":""},onChange:function(e){var t=e.target.value,r=e.target.style;(t.length<3||t.length>120)&&(e.target.placeholder="Request must be more than 3 characters.",r.borderColor="red");if(t.length>=3&&t.length<=120){r.borderColor="";var n=function(){return{type:m,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t);c(n)}}};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",Object(d.a)({},r))})}var H=function(e){var t=e.handleGetJoke,c=Object(r.useState)(null),n=Object(i.a)(c,2),a=n[0],s=n[1],j=Object(u.b)(),l={onClick:O,type:"radio",name:"api_reponse_type",value:"random",id:"randomRadioInput"},h={onClick:O,type:"radio",name:"api_reponse_type",value:"category",id:"categoriesRadioInput"},b={onClick:O,type:"radio",name:"api_reponse_type",value:"search",id:"searchRadioInput"};function O(e){var t=e.target.value,c=function(){return{type:C,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t);j(c),s(t)}return Object(r.useEffect)((function(){j(k)}),[]),Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(d.a)({defaultChecked:!0},l)),Object(o.jsx)("label",{htmlFor:"randomRadioInput",children:"Random"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(d.a)({},h)),Object(o.jsx)("label",{htmlFor:"categoriesRadioInput",children:"\u0421ategories"})]}),Object(o.jsx)(A,{searchView:a}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(d.a)({},b)),Object(o.jsx)("label",{htmlFor:"searchRadioInput",children:"Search"})]}),Object(o.jsx)(B,{searchView:a}),Object(o.jsx)("button",{type:"submit",children:"Get a joke"})]})};function S(){return Object(o.jsx)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z",fill:"#FF6767"})})}function E(){return Object(o.jsx)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z",fill:"#FF6767"})})}function R(){return Object(o.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"white"}),Object(o.jsx)("path",{d:"M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 15.1407H24.6471V16.3126H15.3529V15.1407Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 17.6407H24.6471V18.8126H15.3529V17.6407Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 20.1407H24.6471V21.3126H15.3529V20.1407Z",fill:"#ABABAB"})]})}function I(){return Object(o.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#F8F8F8"}),Object(o.jsx)("path",{d:"M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 15.1407H24.6471V16.3126H15.3529V15.1407Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 17.6407H24.6471V18.8126H15.3529V17.6407Z",fill:"#ABABAB"}),Object(o.jsx)("path",{d:"M15.3529 20.1407H24.6471V21.3126H15.3529V20.1407Z",fill:"#ABABAB"})]})}function N(){return Object(o.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M9.54545 0H5.90909C5.65806 0 5.45454 0.203515 5.45454 0.45455C5.45454 0.705585 5.65806 0.9091 5.90909 0.9091H8.44809L3.76952 5.58768C3.59204 5.76516 3.59204 6.05298 3.76952 6.2305C3.85825 6.31923 3.97458 6.36362 4.09091 6.36362C4.20724 6.36362 4.32359 6.31923 4.4123 6.23048L9.09092 1.55191V4.09091C9.09092 4.34194 9.29444 4.54546 9.54547 4.54546C9.7965 4.54546 10 4.34194 10 4.09091V0.45455C10 0.203515 9.79648 0 9.54545 0Z",fill:"#8EA7FF"}),Object(o.jsx)("path",{d:"M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z",fill:"#8EA7FF"})]})}var M=function(e){var t=e.isMain,c=e.isFavourite,r=e.jokeItem,n=e.handleChangeFavourite,a=r.id,i=r.url,s=r.value,j=r.updated_at,l=r.categories,d=new Date(j).toLocaleString(),u=t?"main":"aside",h=c?Object(o.jsx)(E,{}):Object(o.jsx)(S,{}),b=t?Object(o.jsx)(R,{}):Object(o.jsx)(I,{}),O=t?l.map((function(e,t){return Object(o.jsx)("p",{className:"".concat(u,"-jokecard-body-content-info-category"),children:e},t)})):null;return Object(o.jsxs)("div",{className:"".concat(u,"-jokecard"),onDoubleClick:function(){return n(r)},children:[Object(o.jsx)("p",{className:"".concat(u,"-jokecard-like"),onClick:function(){return n(r)},children:h}),Object(o.jsxs)("div",{className:"".concat(u,"-jokecard-body"),children:[Object(o.jsx)("p",{className:"".concat(u,"-jokecard-body-icon"),children:b}),Object(o.jsxs)("div",{className:"".concat(u,"-jokecard-body-content"),children:[Object(o.jsxs)("p",{className:"".concat(u,"-jokecard-body-content-id"),children:["ID:\xa0",Object(o.jsxs)("a",{href:i,target:"_blank",children:[a," \xa0",Object(o.jsx)(N,{})]})]}),Object(o.jsx)("p",{className:"".concat(u,"-jokecard-body-content-text"),children:s}),Object(o.jsxs)("div",{className:"".concat(u,"-jokecard-body-content-info"),children:[Object(o.jsxs)("p",{className:"".concat(u,"-jokecard-body-content-info-update"),children:["Last update: ",d]}),O]})]})]})]})},_=function(e){return e.jokeSearch},Z=function(e){return e.jokes},L=function(e){return e.favourites};var J=function(){var e=Object(u.c)(_),t=e.searchType,c=e.selectedCategory,r=e.searchQuery,n=Object(u.c)(Z),a=n.receivedJokes,i=n.error,s=Object(u.c)(L),j=Object(u.b)(),l=a.map((function(e){var t={isMain:!0,isFavourite:b(e),key:e.id,jokeItem:e,handleChangeFavourite:h};return Object(o.jsx)(M,Object(d.a)({},t))}));function h(e){if(b(e)){var t=s.filter((function(t){return t.id!==e.id})),c=p(t);j(c)}else{var r=function(){return{type:v,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(Object(d.a)({},e));j(r)}}function b(e){return!!s.filter((function(t){return t.id===e.id})).length}return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"main-heading",children:[Object(o.jsx)("h2",{children:"Hey!"}),Object(o.jsx)("h3",{children:"Let\u2019s try to find a joke for you:"})]}),Object(o.jsx)(H,{handleGetJoke:function(e){e.preventDefault(),i&&j(f(null));var n=function(e){return function(t){return fetch(e).then((function(e){return e.json()})).then((function(e){e.result?t(O(e.result)):t(O([e]))}),(function(e){t(O([])),t(f(e))}))}}(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"random",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n="https://api.chucknorris.io/jokes";return"random"===t&&(e="".concat(n,"/").concat(t)),"category"===t&&c&&(e="".concat(n,"/random?").concat(t,"=").concat(c)),"search"===t&&r&&(e="".concat(n,"/").concat(t,"?query=").concat(r)),e}(t,c,r));j(n)}}),Object(o.jsx)("div",{className:"main-jokecards-wrapper",children:l})]})},T=function(e){return e.favourites};var D=function(e){var t=e.isFavouritesShow,c=e.setIsFavouritesShow,n=Object(u.c)(T),a=Object(u.b)(),i={className:t?"aside-wrapper show":"aside-wrapper"},l={className:"favourite-btn",onClick:function(){return c(!t)}},h=t?Object(o.jsx)(j,{}):Object(o.jsx)(s,{}),b=n.map((function(e){var t={isFavourite:!0,key:e.id,jokeItem:e,handleChangeFavourite:O};return Object(o.jsx)(M,Object(d.a)({},t))}));function O(e){var t=n.filter((function(t){return t.id!==e.id})),c=p(t);a(c)}return Object(r.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("favourites",e)}),[n]),Object(o.jsx)("div",Object(d.a)(Object(d.a)({},i),{},{children:Object(o.jsxs)("aside",{className:"favourite",children:[Object(o.jsxs)("div",Object(d.a)(Object(d.a)({},l),{},{children:[h,Object(o.jsx)("h3",{children:"Favourite"})]})),b]})}))};function G(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(l,{isFavouritesShow:c,setIsFavouritesShow:n}),Object(o.jsx)(J,{})]}),Object(o.jsx)(D,{isFavouritesShow:c,setIsFavouritesShow:n})]})}c(24),c(25);var Q=c(4),U=c(12),Y=c(13),q={searchType:"random",searchQuery:"",categories:[],selectedCategory:"",error:null},K={receivedJokes:[],error:null},P=c(14),W=localStorage.getItem("favourites"),z=W?JSON.parse(W):[],X=Object(Q.combineReducers)({jokeSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(d.a)(Object(d.a)({},e),{},{searchType:t.payload});case m:return Object(d.a)(Object(d.a)({},e),{},{searchQuery:t.payload});case g:return Object(d.a)(Object(d.a)({},e),{},{categories:t.payload});case w:return Object(d.a)(Object(d.a)({},e),{},{selectedCategory:t.payload});case y:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{receivedJokes:t.payload});case b:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return[].concat(Object(P.a)(e),[t.payload]);case x:return t.payload;default:return e}}}),$=Object(Y.composeWithDevTools)(Object(Q.applyMiddleware)(U.a)),ee=Object(Q.createStore)(X,$),te=document.getElementById("root");a.a.render(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(u.a,{store:ee,children:Object(o.jsx)(G,{})})}),te)}},[[26,1,2]]]);
//# sourceMappingURL=main.e18d81b4.chunk.js.map
(this.webpackJsonpfit=this.webpackJsonpfit||[]).push([[0],{31:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),o=c(33),s=c.n(o),d=(c(41),c(42),c(16)),a=c(9),l=c(10),r=c(3),u=i.a.createContext();function j(e){var t=e.children;function c(){return window.innerWidth<=992?window.innerWidth/32:31}var i=Object(n.useState)(c()),o=Object(l.a)(i,2),s=o[0],d=o[1],a=Object(n.useState)(c()),j=Object(l.a)(a,2),b=j[0],O=j[1],v=Object(n.useState)(!1),h=Object(l.a)(v,2),p=h[0],f=h[1];return Object(n.useEffect)((function(){d(c())}),[]),window.addEventListener("resize",(function(){d(c())})),Object(r.jsx)(u.Provider,{value:{size:s,user:b,setUser:O,showAdd:p,setShowAdd:f},children:t})}var b=c(22),O=c(19),v=O.a.initializeApp({apiKey:"AIzaSyC2JC9Q0JWqIf40j4B7kBY47wjVPP90fUs",authDomain:"vue-crm-d6c4e.firebaseapp.com",databaseURL:"https://vue-crm-d6c4e-default-rtdb.firebaseio.com",projectId:"vue-crm-d6c4e",storageBucket:"vue-crm-d6c4e.appspot.com",messagingSenderId:"590464555013",appId:"1:590464555013:web:e29f1a9b0c72e235b7246c",measurementId:"G-JSLF4TE0TW"}).firestore();O.a.auth(),new O.a.auth.GoogleAuthProvider,c(31),c(47);function h(){return Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("span",{children:"Loading ..."})})}var p=c(36);c(48);function f(e){var t=e.cords,c=Object(n.useState)(!0),i=Object(l.a)(c,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){o&&setTimeout((function(){s(!1)}),1800)}),[]),Object(r.jsx)(r.Fragment,{children:o&&Object(r.jsx)("div",{style:t,className:"wive-effect-child"})})}function m(e){var t=e.children,c=Object(n.useState)([]),i=Object(l.a)(c,2),o=i[0],s=i[1],d=Object(n.useState)(0),a=Object(l.a)(d,2),u=a[0],j=a[1],b=Object(n.useState)(0),O=Object(l.a)(b,2),v=O[0],h=O[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e,t,c=window.pageYOffset||document.documentElement.scrollTop;j((null===(e=m.current)||void 0===e?void 0:e.getBoundingClientRect().top)+c),h(null===(t=m.current)||void 0===t?void 0:t.getBoundingClientRect().left)}),[]),Object(r.jsxs)("div",{className:"wive-effect",onClick:function(e){return s([].concat(Object(p.a)(o),[{left:e.pageX-v,top:e.pageY-u}]))},ref:m,children:[t,o.length?o.map((function(e,t){return Object(r.jsx)(f,{cords:e},t)})):null]})}c(49);function x(e){e.id;var t=e.data;return Object(r.jsx)(m,{children:Object(r.jsx)("div",{className:"list-item",children:Object(r.jsx)("span",{children:t.name})})})}function g(){var e=Object(n.useRef)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],o=c[1],s=Object(n.useState)([]),a=Object(l.a)(s,2),u=a[0],j=a[1],O=Object(b.a)(v.collection("groups").orderBy("createAt","desc").startAfter(i).limit(15)),p=Object(l.a)(O,3),f=p[0],m=p[1],g=p[2];return Object(n.useEffect)((function(){(null===f||void 0===f?void 0:f.docs.length)&&(u.length?u[u.length-1].id===f.docs[(null===f||void 0===f?void 0:f.docs.length)-1].id||u[0].id===f.docs[1].id?j(null===f||void 0===f?void 0:f.docs):j(u.concat(null===f||void 0===f?void 0:f.docs)):j(null===f||void 0===f?void 0:f.docs))}),[f]),console.log(g),Object(r.jsx)("div",{className:"groups",children:m&&!i?Object(r.jsx)(h,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("span",{children:"\u0413\u0440\u0443\u043f\u043f\u044b:"})}),Object(r.jsx)("div",{className:"groups-list",ref:e,children:null===u||void 0===u?void 0:u.map((function(e){return Object(r.jsx)(d.b,{to:"/group/".concat(e.id),children:Object(r.jsx)(x,{id:e.id,data:e.data()})},e.id)}))}),!(null===f||void 0===f?void 0:f.docs.length)||(null===f||void 0===f?void 0:f.docs.length)<15||m?null:Object(r.jsx)("div",{className:"button groups-btn-more",type:"button",onClick:function(){return o(null===f||void 0===f?void 0:f.docs[(null===f||void 0===f?void 0:f.docs.length)-1].data().createAt)},children:Object(r.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})})]})})}function w(){var e=Object(n.useRef)(),t=Object(a.g)().id,c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],s=i[1],u=Object(n.useState)([]),j=Object(l.a)(u,2),O=j[0],p=j[1],f=Object(b.b)(v.collection("groups").doc(t)),m=Object(l.a)(f,1)[0],g=Object(b.a)(v.collection("groups").doc(t).collection("exercise").orderBy("createAt","desc").startAfter(o).limit(15)),w=Object(l.a)(g,3),N=w[0],C=w[1],S=w[2];return Object(n.useEffect)((function(){console.log(null===N||void 0===N?void 0:N.docs),(null===N||void 0===N?void 0:N.docs.length)&&(O.length?O[O.length-1].id===N.docs[(null===N||void 0===N?void 0:N.docs.length)-1].id||O[0].id===N.docs[1].id?p(null===N||void 0===N?void 0:N.docs):p(O.concat(null===N||void 0===N?void 0:N.docs)):p(null===N||void 0===N?void 0:N.docs))}),[N]),console.log(S),Object(r.jsx)("div",{className:"groups",children:C&&!o?Object(r.jsx)(h,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("span",{children:null===m||void 0===m?void 0:m.data().name})}),Object(r.jsx)("div",{className:"groups-list",ref:e,children:null===O||void 0===O?void 0:O.map((function(e){return Object(r.jsx)(d.b,{to:"/group/".concat(e.id),children:Object(r.jsx)(x,{id:e.id,data:e.data()})},e.id)}))}),!(null===N||void 0===N?void 0:N.docs.length)||(null===N||void 0===N?void 0:N.docs.length)<15||C?null:Object(r.jsx)("div",{className:"groups-btn-more",onClick:function(){return s(null===N||void 0===N?void 0:N.docs[(null===N||void 0===N?void 0:N.docs.length)-1].data().createAt)},children:Object(r.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})})]})})}c(54);function N(){var e=Object(n.useContext)(u),t=e.showAdd,c=e.setShowAdd;return Object(r.jsx)("div",{className:"navbar",children:Object(r.jsx)("div",{className:"adding",onClick:function(){return c(!0)},disabled:t,children:Object(r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{d:"M156,256c0,11.046,8.954,20,20,20h60v60c0,11.046,8.954,20,20,20s20-8.954,20-20v-60h60c11.046,0,20-8.954,20-20\r c0-11.046-8.954-20-20-20h-60v-60c0-11.046-8.954-20-20-20s-20,8.954-20,20v60h-60C164.954,236,156,244.954,156,256z"}),Object(r.jsx)("path",{d:"M160.406,61.8l25.869-10.716c10.204-4.228,15.051-15.927,10.823-26.132c-4.228-10.205-15.926-15.054-26.132-10.823\r l-25.869,10.716c-10.204,4.228-15.051,15.927-10.823,26.132C138.488,61.148,150.168,66.038,160.406,61.8z"}),Object(r.jsx)("path",{d:"M256,0c-11.046,0-20,8.954-20,20s8.954,20,20,20c119.378,0,216,96.608,216,216c0,119.378-96.608,216-216,216\r c-119.378,0-216-96.608-216-216c0-11.046-8.954-20-20-20s-20,8.954-20,20c0,141.483,114.497,256,256,256\r c141.483,0,256-114.497,256-256C512,114.517,397.503,0,256,0z"}),Object(r.jsx)("path",{d:"M93.366,113.165l19.799-19.799c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L65.081,84.88\r c-7.811,7.811-7.811,20.475,0,28.285C72.89,120.974,85.555,120.976,93.366,113.165z"}),Object(r.jsx)("path",{d:"M24.952,197.099c10.227,4.236,21.914-0.642,26.132-10.823l10.716-25.87c4.228-10.205-0.619-21.904-10.823-26.132\r c-10.207-4.227-21.904,0.619-26.132,10.823l-10.716,25.869C9.901,181.172,14.748,192.871,24.952,197.099z"})]})})})})}var C=c(29);c(55);function S(){var e=Object(n.useContext)(u).setShowAdd,t=Object(n.useState)(!1),c=Object(l.a)(t,2),i=c[0],o=c[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),j=d[0],b=d[1],h=Object(a.f)().location,p="",f="";h.pathname.includes("/fitapp")?(p="\u0433\u0440\u0443\u043f\u043f\u044b",f="/fitapp"):h.pathname.includes("/group/")&&(p="\u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f",f="/group/:id");var m=Object(a.h)(f).params,x=Object(n.useRef)(null);return Object(n.useEffect)((function(){C.a.to(x,{duration:.5,scaleX:1,y:0,ease:"power3.inOut"})}),[]),Object(n.useEffect)((function(){if(i){C.a.to(x,{duration:.5,scaleX:1.2,y:"100%",ease:"power3.inOut"});var t=setTimeout((function(){e(!1)}),800);return function(){clearTimeout(t)}}}),[i]),Object(r.jsxs)("div",{className:"modal",ref:function(e){return x=e},children:[Object(r.jsxs)("div",{className:"input-wrapp",children:[Object(r.jsx)("input",{name:"addedName",type:"text",value:j,className:"added-name",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 ".concat(p),onChange:function(e){return b(e.target.value)}}),Object(r.jsx)("div",{className:"input-line"})]}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("div",{className:"button",onClick:function(){return o(!0)},children:Object(r.jsx)("span",{children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(r.jsx)("div",{className:"button",onClick:function(){o(!0),j&&(h.pathname.includes("/fitapp")?v.collection("groups").add({name:j,createAt:O.a.firestore.FieldValue.serverTimestamp()}):h.pathname.includes("/group/")&&v.collection("groups").doc(null===m||void 0===m?void 0:m.id).collection("exercise").add({name:j,createAt:O.a.firestore.FieldValue.serverTimestamp()}))},children:Object(r.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})]})}var A=function(){console.log("production");var e=Object(n.useContext)(u),t=e.size,c=e.showAdd,i=["app"];return c&&i.push("app-show-modal"),Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:i.join(" "),style:{fontSize:t},children:[Object(r.jsx)(N,{}),Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{exact:!0,path:"/",component:g}),Object(r.jsx)(a.a,{path:"/group/:id",component:w}),Object(r.jsx)(a.a,{path:"*",component:g})]}),c&&Object(r.jsx)(S,{})]})})};s.a.render(Object(r.jsx)(j,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ebe5ce0f.chunk.js.map
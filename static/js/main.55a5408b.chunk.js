(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{74:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),s=n.n(a),o=(n(74),n(18)),i=n(114),u=Object(i.a)({app:{color:"white",textAlign:"center"},header:{backgroundColor:"#282c34",minHeight:"90vh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px",marginBottom:"-100px"},footer:{minHeight:"10vh",opacity:.7,"& a":{color:"white",textDecoration:"none"}}}),j=Object(i.a)({textField:{width:"60vw"},input:{paddingBottom:"5px"}}),l=n(124),h=n(118),b=n(58),f=n.n(b),p=n(57),d=n.n(p),O=n(6),x=function(e){var t=e.search,n=e.setSearch,c=e.dropdown,a=e.setDropdown,s=Object(r.useRef)(),o=Object(r.useRef)(),i=j();return Object(O.jsx)(l.a,{label:"Search Countries",className:i.textField,value:t,onChange:function(e){n(e.target.value),!c&&a(!0)},inputRef:s,InputProps:{endAdornment:Object(O.jsx)(h.a,{ref:o,size:"small",onMouseDown:function(e){e.preventDefault(),s.current.focus()},children:c?Object(O.jsx)(d.a,{}):Object(O.jsx)(f.a,{})}),className:i.input},onClick:function(){return a(!c)},onBlur:function(){return a(!1)}})},m=n(43),v=n.n(m),g=n(59),w=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length?"name/".concat(t):"all",e.prev=1,e.next=4,fetch("https://restcountries.eu/rest/v2/".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("oops",e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),S=n(119),y=function(){return Object(O.jsx)(S.a,{size:20,style:{marginTop:"15px"}})},C=n(62),D=n(120),k=n(121),T=n(125),F=n(122),N=n(60);function B(e){var t=Object(r.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1],s=e.index,i=e.style,u=e.data;return Object(O.jsxs)(D.a,{button:!0,style:i,children:[Object(O.jsx)(k.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:u[s].flag,alt:"",style:{height:"10px",display:"".concat(c?"none":"flex")},onLoad:function(){return a(!1)}}),c&&Object(O.jsx)(F.a,{height:20,width:20,animation:!1})]})}),Object(O.jsx)(T.a,{primary:u[s].name})]},Object(N.v4)())}var I=function(e){var t=e.countries;return Object(O.jsx)(C.a,{height:400,width:"60vw",itemSize:46,itemCount:t.length,itemData:t,children:B})},E=function(e){var t=e.search,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),j=u[0],l=u[1],h=function(e,t){var n=Object(r.useState)(e),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}}),[e,t]),a}(t,500);return Object(r.useEffect)((function(){l(!0),w(h).then((function(e){e.length?s(e):s([{name:"No results..."}]),l(!1)}))}),[h]),j?Object(O.jsx)(y,{}):Object(O.jsx)(I,{countries:a})};var P=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(o.a)(a,2),i=s[0],j=s[1],l=u();return Object(O.jsxs)("div",{className:l.app,children:[Object(O.jsxs)("header",{className:l.header,children:[Object(O.jsx)(x,{search:n,setSearch:c,dropdown:i,setDropdown:j}),i?Object(O.jsx)(E,{search:n}):null]}),Object(O.jsx)("footer",{className:l.footer,children:Object(O.jsxs)("p",{children:["*API: ",Object(O.jsx)("a",{href:"https://restcountries.eu/rest/v2/all",target:"_blank",rel:"noreferrer",children:"REST Countries"})," "]})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},z=n(123),A=n(61),L=Object(A.a)({palette:{primary:{main:"#ffffff"},type:"dark"}});s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z.a,{theme:L,children:Object(O.jsx)(P,{})})}),document.getElementById("root")),R()}},[[83,1,2]]]);
//# sourceMappingURL=main.55a5408b.chunk.js.map
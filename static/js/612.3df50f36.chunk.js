"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[612],{612:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var i,r,c,o,u=t(885),s=t(176),a=t(168),l=t(444),d=t(731),f=l.ZP.div(i||(i=(0,a.Z)(["\n    padding: 20px 40px;\n"]))),h=l.ZP.input(r||(r=(0,a.Z)(["\n    width:300px;"]))),x=l.ZP.ul(c||(c=(0,a.Z)(["\n    padding:0;\n    font-size:22px;\n    margin-left:20px;\n"]))),p=(0,l.ZP)(d.rU)(o||(o=(0,a.Z)(["\n    text-decoration:none;\n"]))),m=t(791),v=t(739),Z=t(184),g=function(){var n,e=(0,m.useState)([]),t=(0,u.Z)(e,2),i=t[0],r=t[1],c=(0,v.TH)(),o=(0,d.lr)(),a=(0,u.Z)(o,2),l=a[0],g=a[1];console.log("searchParams: ",l);var j=null!==(n=l.get("query"))&&void 0!==n?n:"";(0,m.useEffect)((function(){""!==j&&(0,s.gW)(j).then((function(n){r(n)})).catch((function(n){return console.log(n)}))}),[j]);return(0,Z.jsxs)(f,{children:[(0,Z.jsxs)("form",{onSubmit:function(n){var e=n.query;g(""!==e?{query:e}:{})},children:[(0,Z.jsx)(h,{type:"text",name:"query"}),(0,Z.jsx)("button",{type:"submit",children:"Search"})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(x,{children:i.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(p,{to:"/movies/".concat(n.id),state:{from:c},children:n.title})},n.id)}))})})]})}}}]);
//# sourceMappingURL=612.3df50f36.chunk.js.map
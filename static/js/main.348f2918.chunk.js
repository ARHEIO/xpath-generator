(this["webpackJsonpxpath-generator"]=this["webpackJsonpxpath-generator"]||[]).push([[0],{122:function(e,n,t){},185:function(e,n,t){"use strict";t.r(n);var r,c=t(0),i=t.n(c),o=t(68),a=t.n(o),l=(t(122),t(92)),s=t(20),d=t(15),j=t(16),u=t(13),b=function(e){var n=e.onChange,t=function(e){n(e)};return Object(u.jsx)(d.Grid,{columns:1,rows:["333px","1fr"],children:Object(u.jsxs)("div",{children:[Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Label,{children:"Element"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.DropdownField,{data:["button","a"],direction:0,onChange:function(e){var n=e.value;return t(n[0])}})})]})})};!function(e){e.CLASS="@class",e.ID="@id",e.TEXT="text()",e.TYPE="@type",e.CHECKED="@checked"}(r||(r={}));var x=[r.CLASS,r.ID,r.TEXT,r.TYPE,r.CHECKED],h=function(e){var n=e.onSubmitCondition;return Object(u.jsx)(d.Grid,{columns:1,rows:["333px","1fr"],children:Object(u.jsxs)(d.Form,{onSubmit:function(e){var t=e.data,c=t.contains,i=t.key,o=t.value;n(function(e){var n=e.key,t=e.value,c=e.contains;return n===r.CHECKED?"".concat(n):c?"contains(".concat(n,', "').concat(t,'")'):"".concat(n,'="').concat(t,'"')}({contains:c,value:o,key:x[i]}))},children:[Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Label,{children:"Attribute"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.DropdownField,{data:x,name:"key"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Label,{children:"Value"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.TextField,{name:"value",autoComplete:"off"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Checkbox,{name:"contains",children:"Contains"})}),Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Button,{children:"Add Condition"})})]})})},O=function(e){var n=e.onClick,t=e.label,r=e.type;return Object(u.jsx)(d.Tag,{onClick:n,type:null!==r&&void 0!==r?r:"primary",children:Object(u.jsxs)(d.Container,{style:{display:"flex",fontSize:"16px",alignItems:"center"},children:[Object(u.jsx)("span",{children:t}),Object(u.jsx)(d.Icon,{style:{paddingLeft:"8px",alignItems:"center"},name:"Cancel"})]})})},g=function(e){var n=e.onDeleteCondition,t=e.conditions;return Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:Object(u.jsx)(d.Grid,{columns:1,spacing:"8px",children:t.length>0?t.map((function(e,t){return Object(u.jsx)(O,{type:"secondary",onClick:function(){return n(t)},label:e},t)})):Object(u.jsx)(d.Skeleton,{isText:!0,isPulsing:!1,height:"25px"})})})},f=function(e){var n=e.onDeleteElement,t=e.element;return Object(u.jsx)(d.PaddedContainer,{gutter:"small",children:t?Object(u.jsx)(O,{onClick:function(){return n()},label:t}):Object(u.jsx)(d.Skeleton,{isText:!0,isPulsing:!1,height:"25px"})})},C=function(e){var n=e.onChange,t=Object(c.useState)(null),r=Object(s.a)(t,2),i=r[0],o=r[1],a=Object(c.useState)([]),l=Object(s.a)(a,2),x=l[0],O=l[1];Object(c.useEffect)((function(){if(i)if(x.length>0){var e=1!==x.length?x[0]+x.slice(1).reduce((function(e,n){return e+" and "+n}),""):x[0];n("//"+i+(e&&"["+e+"]"))}else n("//"+i);else n("")}),[i,x,n]);return Object(u.jsxs)(d.Grid,{columns:2,rows:["1fr","fit-content"],spacing:"16px",children:[Object(u.jsx)(b,{onChange:function(e){return o(e)}}),Object(u.jsx)(h,{onSubmitCondition:function(e){return O((function(n){return[].concat(Object(j.a)(n),[e])}))}}),Object(u.jsx)(f,{element:i,onDeleteElement:function(){return o(null)}}),Object(u.jsx)(g,{conditions:x,onDeleteCondition:function(e){return O(x.filter((function(n,t){return t!==e})))}})]})},m={display:"flex",alignItems:"center"},p=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},v=t(18),w=function(){return Object(u.jsx)(d.PaddedContainer,{gutter:"xxlarge",children:Object(u.jsx)("header",{children:Object(u.jsx)(d.Headline,{style:{color:d.colors.whiteSmoke},children:"Xpath Generator"})})})},y=function(){var e=Object(c.useState)(),n=Object(s.a)(e,2),t=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.PaddedContainer,{gutter:"large",children:Object(u.jsx)(d.Container,{style:{width:"unset",padding:"16px",borderRadius:"6px",backgroundColor:d.colors.white},children:Object(u.jsx)(C,{onChange:function(e){r(e)}})})}),Object(u.jsx)(d.PaddedContainer,{gutter:"large",children:Object(u.jsx)(d.Container,{style:{width:"unset",padding:"24px",borderRadius:"6px",backgroundColor:d.colors.white},children:t?Object(u.jsx)("code",{children:t}):Object(u.jsx)(d.Skeleton,{isText:!0,isPulsing:!1,height:"18px"})})})]})},k=function(){var e=function(){var e=Object(c.useState)(p()),n=Object(s.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){var e=function(){r(p())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().width>v.breakpoints.large;return Object(u.jsx)(d.ThemeContext.Provider,{value:Object(l.a)(Object(l.a)({},d.themes),{},{ui2:d.colors.grey6,ui3:d.colors.grey6}),children:Object(u.jsx)(d.Container,{style:{height:"100vh",backgroundColor:d.colors.whiteSmoke},children:Object(u.jsxs)(d.Grid,{rows:["1fr","4fr"],columns:8,spacing:"16px",children:[Object(u.jsx)(d.GridArea,{colSpan:8,row:0,column:0,style:{backgroundColor:"#141b4d"}}),Object(u.jsx)(d.GridArea,{colSpan:e?6:8,row:0,column:e?1:0,style:m,children:Object(u.jsx)(w,{})}),Object(u.jsx)(d.GridArea,{colSpan:e?6:8,row:1,column:e?1:0,children:Object(u.jsx)(y,{})})]})})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,188)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),S()}},[[185,1,2]]]);
//# sourceMappingURL=main.348f2918.chunk.js.map
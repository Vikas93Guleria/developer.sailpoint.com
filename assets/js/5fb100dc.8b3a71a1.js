"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[3157],{17377:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(67294),r=n(86010),c=n(76828),o=n(39130),i=n(35096),s=n(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(99603),d=n(21702);function p({href:e,children:t}){return a.createElement(o.default,{href:e,className:(0,r.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:n,description:c}){return a.createElement(p,{href:e},a.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:n},t,n),c&&a.createElement("p",{className:l.cardDescription,title:c},c))}function g({item:e}){var t,n;const r=(0,c.Wl)(e);return r?a.createElement(m,{href:r,icon:a.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(n=null==(t=e.customProps)?void 0:t.description)?n:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,n;const r=(0,i.Z)(e.href)?a.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):a.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),o=(0,c.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(m,{href:e.href,icon:r,title:e.label,description:null!=(n=e.description)?n:null==o?void 0:o.description})}function b({item:e}){switch(e.type){case"link":return a.createElement(f,{item:e});case"category":return a.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&E(e,n,t[n]);if(y)for(var n of y(t))w.call(t,n)&&E(e,n,t[n]);return e};function C({className:e}){const t=(0,c.jA)();return a.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:n}=e;if(!t)return a.createElement(C,O({},e));const o=(0,c.MN)(t);return a.createElement("section",{className:(0,r.default)("row",n)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},70824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>C,frontMatter:()=>b,metadata:()=>y,toc:()=>w});var a=n(3905),r=n(17377),c=n(76828),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e},g=(e,t)=>i(e,s(t)),f=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const b={id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},h=void 0,y={unversionedId:"api/beta/account-usages",id:"api/beta/account-usages",title:"Account Usages",description:"Account Usages",source:"@site/docs/api/beta/account-usages.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/account-usages",permalink:"/docs/api/beta/account-usages",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"In-progress Account Aggregation status",permalink:"/docs/api/beta/get-account-aggregation-status"},next:{title:"Returns account usage insights",permalink:"/docs/api/beta/get-usages-by-account-id"}},v={},w=[],E={toc:w},O="wrapper";function C(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,a.kt)(O,g(m(m({},E),o),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement account usage insight functionality.\nWith this functionality in place, administrators can gather information and insights about how their tenants' source accounts are being used.\nThis allows organizations to get the information they need to start optimizing and securing source account usage."),(0,a.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}C.isMDXComponent=!0}}]);
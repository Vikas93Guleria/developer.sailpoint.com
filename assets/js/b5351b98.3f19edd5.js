"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[90880],{17377:(e,t,r)=>{r.d(t,{Z:()=>k});var i=r(67294),n=r(86010),a=r(76828),o=r(39130),c=r(35096),l=r(33084);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),p=r(21702);function u({href:e,children:t}){return i.createElement(o.default,{href:e,className:(0,n.default)("card padding--lg",s.cardContainer)},t)}function m({href:e,icon:t,title:r,description:a}){return i.createElement(u,{href:e},i.createElement("h2",{className:(0,n.default)("text--truncate",s.cardTitle),title:r},t,r),a&&i.createElement("p",{className:s.cardDescription,title:a},a))}function y({item:e}){var t,r;const n=(0,a.Wl)(e);return n?i.createElement(m,{href:n,icon:i.createElement(d.G,{icon:p.cC_,className:s.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const n=(0,c.Z)(e.href)?i.createElement(d.G,{icon:p.FL8,className:s.docCardIcon}):i.createElement(d.G,{icon:p.wlW,className:s.docCardIcon}),o=(0,a.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(m,{href:e.href,icon:n,title:e.label,description:null!=(r=e.description)?r:null==o?void 0:o.description})}function b({item:e}){switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&O(e,r,t[r]);if(v)for(var r of v(t))E.call(t,r)&&O(e,r,t[r]);return e};function I({className:e}){const t=(0,a.jA)();return i.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:r}=e;if(!t)return i.createElement(I,w({},e));const o=(0,a.MN)(t);return i.createElement("section",{className:(0,n.default)("row",r)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},59504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>I,frontMatter:()=>b,metadata:()=>v,toc:()=>E});var i=r(3905),n=r(17377),a=r(76828),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},y=(e,t)=>c(e,l(t)),f=(e,t)=>{var r={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&p.call(e,i)&&(r[i]=e[i]);return r};const b={id:"identity-history",title:"Identity History",description:"Identity History",custom_edit_url:null},h=void 0,v={unversionedId:"api/beta/identity-history",id:"api/beta/identity-history",title:"Identity History",description:"Identity History",source:"@site/docs/api/beta/identity-history.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/identity-history",permalink:"/docs/api/beta/identity-history",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identity-history",title:"Identity History",description:"Identity History",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Bulk delete Identity Attributes",permalink:"/docs/api/beta/delete-identity-attributes-in-bulk"},next:{title:"Lists all the identities",permalink:"/docs/api/beta/list-historical-identities"}},g={},E=[],O={toc:E},w="wrapper";function I(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,i.kt)(w,y(m(m({},O),o),{components:r,mdxType:"MDXLayout"}),(0,i.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}I.isMDXComponent=!0}}]);
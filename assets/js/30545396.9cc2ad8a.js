"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50241],{17377:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),i=r(86010),o=r(76828),a=r(39130),c=r(35096),l=r(33084);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),p=r(21702);function u({href:e,children:t}){return n.createElement(a.default,{href:e,className:(0,i.default)("card padding--lg",s.cardContainer)},t)}function m({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,i.default)("text--truncate",s.cardTitle),title:r},t,r),o&&n.createElement("p",{className:s.cardDescription,title:o},o))}function f({item:e}){var t,r;const i=(0,o.Wl)(e);return i?n.createElement(m,{href:i,icon:n.createElement(d.G,{icon:p.cC_,className:s.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function b({item:e}){var t,r;const i=(0,c.Z)(e.href)?n.createElement(d.G,{icon:p.FL8,className:s.docCardIcon}):n.createElement(d.G,{icon:p.wlW,className:s.docCardIcon}),a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(m,{href:e.href,icon:i,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function h({item:e}){switch(e.type){case"link":return n.createElement(b,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&O(e,r,t[r]);if(y)for(var r of y(t))E.call(t,r)&&O(e,r,t[r]);return e};function I({className:e}){const t=(0,o.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(I,w({},e));const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.default)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},87385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>I,frontMatter:()=>h,metadata:()=>y,toc:()=>E});var n=r(3905),i=r(17377),o=r(76828),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>c(e,l(t)),b=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={id:"role-insights",title:"Role Insights",description:"Role Insights",custom_edit_url:null},g=void 0,y={unversionedId:"api/beta/role-insights",id:"api/beta/role-insights",title:"Role Insights",description:"Role Insights",source:"@site/docs/api/beta/role-insights.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/role-insights",permalink:"/docs/api/beta/role-insights",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"role-insights",title:"Role Insights",description:"Role Insights",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Requestable Objects List",permalink:"/docs/api/beta/list-requestable-objects"},next:{title:"Generate insights for roles",permalink:"/docs/api/beta/create-role-insight-requests"}},v={},E=[],O={toc:E},w="wrapper";function I(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(w,f(m(m({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}I.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[12974],{17377:(e,t,r)=>{r.d(t,{Z:()=>C});var i=r(67294),a=r(86010),n=r(76828),s=r(39130),c=r(35096),o=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=r(99603),d=r(21702);function p({href:e,children:t}){return i.createElement(s.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:r,description:n}){return i.createElement(p,{href:e},i.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},t,r),n&&i.createElement("p",{className:l.cardDescription,title:n},n))}function f({item:e}){var t,r;const a=(0,n.Wl)(e);return a?i.createElement(m,{href:a,icon:i.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function v({item:e}){var t,r;const a=(0,c.Z)(e.href)?i.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):i.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),s=(0,n.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(m,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==s?void 0:s.description})}function b({item:e}){switch(e.type){case"link":return i.createElement(v,{item:e});case"category":return i.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var k=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&E(e,r,t[r]);if(y)for(var r of y(t))h.call(t,r)&&E(e,r,t[r]);return e};function w({className:e}){const t=(0,n.jA)();return i.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:r}=e;if(!t)return i.createElement(w,O({},e));const s=(0,n.MN)(t);return i.createElement("section",{className:(0,a.default)("row",r)},s.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},43897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>w,frontMatter:()=>b,metadata:()=>y,toc:()=>h});var i=r(3905),a=r(17377),n=r(76828),s=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>c(e,o(t)),v=(e,t)=>{var r={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(r[i]=e[i]);return r};const b={id:"task-results",title:"TaskResults",description:"TaskResults",custom_edit_url:null},k=void 0,y={unversionedId:"api/iiq/task-results",id:"api/iiq/task-results",title:"TaskResults",description:"TaskResults",source:"@site/docs/api/iiq/task-results.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/task-results",permalink:"/docs/api/iiq/task-results",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"task-results",title:"TaskResults",description:"TaskResults",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Returns all ServiceProviderConfig resources.",permalink:"/docs/api/iiq/service-provider-config-get"},next:{title:"Returns all TaskResult resources.",permalink:"/docs/api/iiq/task-results-get"}},g={},h=[],E={toc:h},O="wrapper";function w(e){var t=e,{components:r}=t,s=v(t,["components"]);return(0,i.kt)(O,f(m(m({},E),s),{components:r,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[72531],{17377:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(67294),o=n(86010),a=n(76828),r=n(39130),s=n(35096),c=n(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(99603),d=n(21702);function m({href:e,children:t}){return i.createElement(r.default,{href:e,className:(0,o.default)("card padding--lg",l.cardContainer)},t)}function p({href:e,icon:t,title:n,description:a}){return i.createElement(m,{href:e},i.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:n},t,n),a&&i.createElement("p",{className:l.cardDescription,title:a},a))}function g({item:e}){var t,n;const o=(0,a.Wl)(e);return o?i.createElement(p,{href:o,icon:i.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(n=null==(t=e.customProps)?void 0:t.description)?n:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,n;const o=(0,s.Z)(e.href)?i.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):i.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),r=(0,a.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(p,{href:e.href,icon:o,title:e.label,description:null!=(n=e.description)?n:null==r?void 0:r.description})}function b({item:e}){switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&w(e,n,t[n]);if(y)for(var n of y(t))C.call(t,n)&&w(e,n,t[n]);return e};function k({className:e}){const t=(0,a.jA)();return i.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:n}=e;if(!t)return i.createElement(k,x({},e));const r=(0,a.MN)(t);return i.createElement("section",{className:(0,o.default)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},99044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>b,metadata:()=>y,toc:()=>C});var i=n(3905),o=n(17377),a=n(76828),r=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&m(e,n,t[n]);return e},g=(e,t)=>s(e,c(t)),f=(e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n};const b={id:"configuration-management",title:"Configuration Management",pagination_label:"Configuration Management",sidebar_label:"Configuration Management",sidebar_position:6,sidebar_class_name:"Configuration Management",hide_title:!0,keywords:["portal","docs","documentation"],description:"Export and import tenant configurations.",slug:"/extensibility/configuration-management",tags:["Introduction","Getting Started"]},v=void 0,y={unversionedId:"extensibility/configuration-management/configuration-management",id:"extensibility/configuration-management/configuration-management",title:"Configuration Management",description:"Export and import tenant configurations.",source:"@site/docs/extensibility/configuration-management/index.mdx",sourceDirName:"extensibility/configuration-management",slug:"/extensibility/configuration-management",permalink:"/docs/extensibility/configuration-management",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/configuration-management/index.mdx",tags:[{label:"Introduction",permalink:"/docs/tags/introduction"},{label:"Getting Started",permalink:"/docs/tags/getting-started"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:6,frontMatter:{id:"configuration-management",title:"Configuration Management",pagination_label:"Configuration Management",sidebar_label:"Configuration Management",sidebar_position:6,sidebar_class_name:"Configuration Management",hide_title:!0,keywords:["portal","docs","documentation"],description:"Export and import tenant configurations.",slug:"/extensibility/configuration-management",tags:["Introduction","Getting Started"]},sidebar:"openApiSidebar",previous:{title:"Source Account Updated",permalink:"/docs/extensibility/event-triggers/triggers/source-account-updated"},next:{title:"Configuration Hub",permalink:"/docs/extensibility/configuration-management/configuration-hub"}},h={},C=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],w={toc:C},x="wrapper";function k(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,i.kt)(x,g(p(p({},w),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",p({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,"Configuration Management provides you with a form of version control for your tenant configurations.\nWith Configuration Management, you can export (backup in Configuration Hub) and import (deploy in Configuration Hub) snapshots of your current tenant configurations, downloading them in a JSON.\nThese configurations can serve as different versions of your tenant configuration.\nYou can then import those configurations into tenants to update, restore, or migrate tenant configurations. "),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",p({},{id:"discuss"}),"Discuss"),(0,i.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,i.kt)("p",null,"To learn more about ISC configuration management and discuss it with SailPoint Developer Community members, go to the ",(0,i.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/isc/6"}),"SailPoint Developer Community Forum"),"."))}k.isMDXComponent=!0}}]);
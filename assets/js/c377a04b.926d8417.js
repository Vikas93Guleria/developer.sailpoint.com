"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46971],{17377:(e,t,o)=>{o.d(t,{Z:()=>S});var i=o(67294),n=o(86010),r=o(76828),a=o(39130),s=o(35096),c=o(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=o(99603),u=o(21702);function p({href:e,children:t}){return i.createElement(a.default,{href:e,className:(0,n.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:o,description:r}){return i.createElement(p,{href:e},i.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:o},t,o),r&&i.createElement("p",{className:l.cardDescription,title:r},r))}function f({item:e}){var t,o;const n=(0,r.Wl)(e);return n?i.createElement(m,{href:n,icon:i.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(o=null==(t=e.customProps)?void 0:t.description)?o:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t,o;const n=(0,s.Z)(e.href)?i.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):i.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,r.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(m,{href:e.href,icon:n,title:e.label,description:null!=(o=e.description)?o:null==a?void 0:a.description})}function y({item:e}){switch(e.type){case"link":return i.createElement(h,{item:e});case"category":return i.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,C=(e,t,o)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&C(e,o,t[o]);if(b)for(var o of b(t))g.call(t,o)&&C(e,o,t[o]);return e};function I({className:e}){const t=(0,r.jA)();return i.createElement(S,{items:t.items,className:e})}function S(e){const{items:t,className:o}=e;if(!t)return i.createElement(I,k({},e));const a=(0,r.MN)(t);return i.createElement("section",{className:(0,n.default)("row",o)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(y,{item:e})))))}},89597:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>I,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var i=o(3905),n=o(17377),r=o(76828),a=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))d.call(t,o)&&p(e,o,t[o]);if(l)for(var o of l(t))u.call(t,o)&&p(e,o,t[o]);return e},f=(e,t)=>s(e,c(t)),h=(e,t)=>{var o={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&u.call(e,i)&&(o[i]=e[i]);return o};const y={id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},v=void 0,b={unversionedId:"docs",id:"docs",title:"Identity Security Cloud",description:"The Identity Security Cloud Developer Documentation.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/index.md",tags:[{label:"docs",permalink:"/docs/tags/docs"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:1,frontMatter:{id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},sidebar:"openApiSidebar",next:{title:"API Specifications",permalink:"/docs/api/api-specifications"}},w={},g=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],C={toc:g},k="wrapper";function I(e){var t=e,{components:o}=t,a=h(t,["components"]);return(0,i.kt)(k,f(m(m({},C),a),{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",m({},{id:"overview"}),"Overview"),(0,i.kt)("admonition",m({},{title:"What about IdentityNow?",type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"Looking for IdentityNow? You're in the right place! IdentityNow has an updated brand in Identity Security Cloud.")),(0,i.kt)("p",null,"Identity Security Cloud (ISC) is a unified, multi-tenant identity governance and security platform. ISC provides organizations with the ability to ensure that their users, known as identities in ISC, have secure access to different data sources, and it makes identity access management fast and easy."),(0,i.kt)("p",null,"The ISC platform out of the box will often meet all your identity governance and security needs, but it's possible that it won't. The beauty of ISC is that even if it doesn't quite meet all your needs, you can extend the platform's functionality and build custom solutions that do!"),(0,i.kt)("p",null,"The SailPoint Developer Documentation provides developers with all the information they need to extend their platforms' functionality and build their desired solutions. The developer documentation is written for developers of all experience levels, from nontechnical users exploring what's possible to advanced developers who live and breathe code."),(0,i.kt)("p",null,"Check out the developer documentation and see what's possible!"),(0,i.kt)("admonition",m({},{title:"Are you a partner?",type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"The developer documentation is written for customers and partners who already have access to ISC. If you're interested in becoming a partner, go ",(0,i.kt)("a",m({parentName:"p"},{href:"https://www.sailpoint.com/partners/become-partner/"}),"here"),".")),(0,i.kt)(n.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",m({},{id:"discuss"}),"Discuss"),(0,i.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."),(0,i.kt)("p",null,"To learn more about ISC and discuss it with SailPoint Developer Community members, go to the ",(0,i.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/isc/6"}),"SailPoint Developer Community Forum"),"."))}I.isMDXComponent=!0}}]);
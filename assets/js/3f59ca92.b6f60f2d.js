"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86658],{17377:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(67294),c=n(86010),r=n(76828),i=n(39130),o=n(35096),s=n(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(99603),d=n(21702);function p({href:e,children:t}){return a.createElement(i.default,{href:e,className:(0,c.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:n,description:r}){return a.createElement(p,{href:e},a.createElement("h2",{className:(0,c.default)("text--truncate",l.cardTitle),title:n},t,n),r&&a.createElement("p",{className:l.cardDescription,title:r},r))}function h({item:e}){var t,n;const c=(0,r.Wl)(e);return c?a.createElement(m,{href:c,icon:a.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(n=null==(t=e.customProps)?void 0:t.description)?n:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,n;const c=(0,o.Z)(e.href)?a.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):a.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),i=(0,r.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(m,{href:e.href,icon:c,title:e.label,description:null!=(n=e.description)?n:null==i?void 0:i.description})}function y({item:e}){switch(e.type){case"link":return a.createElement(f,{item:e});case"category":return a.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&w(e,n,t[n]);if(v)for(var n of v(t))k.call(t,n)&&w(e,n,t[n]);return e};function C({className:e}){const t=(0,r.jA)();return a.createElement(I,{items:t.items,className:e})}function I(e){const{items:t,className:n}=e;if(!t)return a.createElement(C,N({},e));const i=(0,r.MN)(t);return a.createElement("section",{className:(0,c.default)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(y,{item:e})))))}},66579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>C,frontMatter:()=>y,metadata:()=>v,toc:()=>k});var a=n(3905),c=n(17377),r=n(76828),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>o(e,s(t)),f=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const y={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},b=void 0,v={unversionedId:"api/v3/accounts",id:"api/v3/accounts",title:"Accounts",description:"Accounts",source:"@site/docs/api/v3/accounts.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/accounts",permalink:"/docs/api/v3/accounts",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Returns account usage insights",permalink:"/docs/api/v3/get-usages-by-account-id"},next:{title:"Accounts List",permalink:"/docs/api/v3/list-accounts"}},g={},k=[],w={toc:k},N="wrapper";function C(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,a.kt)(N,h(m(m({},w),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement and customize account functionality.\nWith this functionality in place, administrators can manage users' access across sources in Identity Security Cloud. "),(0,a.kt)("p",null,"In Identity Security Cloud, an account refers to a user's account on a supported source.\nThis typically includes a unique identifier for the user, a unique password, a set of permissions associated with the source and a set of attributes. Identity Security Cloud loads accounts through the creation of sources in Identity Security Cloud."),(0,a.kt)("p",null,"Administrators can correlate users' identities with the users' accounts on the different sources they use.\nThis allows Identity Security Cloud to govern the access of identities and all their correlated accounts securely and cohesively. "),(0,a.kt)("p",null,"To view the accounts on a source and their correlated identities, administrators can use the Connections drop-down menu, select Sources, select the relevant source, and select its Account tab. "),(0,a.kt)("p",null,"To view and edit source account statuses for an identity in Identity Security Cloud, administrators can use the Identities drop-down menu, select Identity List, select the relevant identity, and select its Accounts tab.\nAdministrators can toggle an account's Actions to aggregate the account, enable/disable it, unlock it, or remove it from the identity. "),(0,a.kt)("p",null,"Accounts can have the following statuses: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enabled: The account is enabled. The user can access it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Disabled: The account is disabled, and the user cannot access it, but the identity is not disabled in Identity Security Cloud. This can occur when an administrator disables the account or when the user's lifecycle state changes. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Locked: The account is locked. This may occur when someone has entered an incorrect password for the account too many times.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pending: The account is currently updating. This status typically lasts seconds. "))),(0,a.kt)("p",null,"Administrators can select the source account to view its attributes, entitlements, and the last time the account's password was changed."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts"}),"Managing User Accounts")," for more information about accounts."),(0,a.kt)(c.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}C.isMDXComponent=!0}}]);
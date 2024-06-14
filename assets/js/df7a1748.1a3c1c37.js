"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[95924],{49066:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>y,default:()=>z,frontMatter:()=>v,metadata:()=>f,toc:()=>k});var i=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&r(t,n,e[n]);if(l)for(var n of l(e))c.call(e,n)&&r(t,n,e[n]);return t},p=(t,e)=>a(t,s(e)),u=(t,e)=>{var n={};for(var i in t)m.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&l)for(var i of l(t))e.indexOf(i)<0&&c.call(t,i)&&(n[i]=t[i]);return n};const v={id:"entitlement-list-customizer",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","Entitlement List"],description:"Intercept the entitlement list command.",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-list",tags:["Connectivity","Connector Command"]},y=void 0,f={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list-customizer",title:"Entitlement List",description:"Intercept the entitlement list command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-list",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"entitlement-list-customizer",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","Entitlement List"],description:"Intercept the entitlement list command.",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-list",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Change Password",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/change-password"},next:{title:"Entitlement Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read"}},b={},k=[{value:"Overview",id:"overview",level:2},{value:"Example StdEntitlementListInput",id:"example-stdentitlementlistinput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before entitlement-list command",id:"before-entitlement-list-command",level:3},{value:"After entitlement-list command",id:"after-entitlement-list-command",level:3}],h={toc:k},g="wrapper";function z(t){var e=t,{components:n}=e,o=u(e,["components"]);return(0,i.kt)(g,p(d(d({},h),o),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",d({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,"Use these commands to intercept the ",(0,i.kt)("a",d({parentName:"p"},{href:"../../commands/entitlement-list"}),"entitlement-list")," command."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",d({parentName:"tr"},{align:"left"}),"Input/Output"),(0,i.kt)("th",d({parentName:"tr"},{align:"center"}),"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",d({parentName:"tr"},{align:"left"}),"Input"),(0,i.kt)("td",d({parentName:"tr"},{align:"center"}),"StdEntitlementListInput")))),(0,i.kt)("h3",d({},{id:"example-stdentitlementlistinput"}),"Example StdEntitlementListInput"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'{\n    "type": "group"\n}\n')),(0,i.kt)("h2",d({},{id:"implementation"}),"Implementation"),(0,i.kt)("h3",d({},{id:"before-entitlement-list-command"}),"Before entitlement-list command"),(0,i.kt)("p",null,"Use this logic to implement the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {\n        logger.info(`Running before entitlement list for account. State ${input.state}`)\n        return input\n    })\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,i.kt)("h3",d({},{id:"after-entitlement-list-command"}),"After entitlement-list command"),(0,i.kt)("p",null,"After entitlement-list is not available for customization at this time. If you need to modify the values of the response, it is recommended that you use ",(0,i.kt)("a",d({parentName:"p"},{href:"https://developer.sailpoint.com/docs/extensibility/transforms/"}),"Transforms"),"."))}z.isMDXComponent=!0}}]);
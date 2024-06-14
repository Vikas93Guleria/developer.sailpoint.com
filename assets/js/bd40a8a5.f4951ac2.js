"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21867],{63652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>A,frontMatter:()=>v,metadata:()=>k,toc:()=>f});var c=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),p=(e,t)=>{var n={};for(var c in e)r.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&l)for(var c of l(e))t.indexOf(c)<0&&u.call(e,c)&&(n[c]=e[c]);return n};const v={id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},y=void 0,k={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete-customizer",title:"Account Delete",description:"Intercept the account delete command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Create",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-create"},next:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable"}},b={},f=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountDeleteInput",id:"example-stdaccountdeleteinput",level:3},{value:"Example StdAccountDeleteOutput",id:"example-stdaccountdeleteoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-delete command",id:"before-account-delete-command",level:3},{value:"After account-delete command",id:"after-account-delete-command",level:3}],g={toc:f},h="wrapper";function A(e){var t=e,{components:n}=t,o=p(t,["components"]);return(0,c.kt)(h,m(s(s({},g),o),{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",s({},{id:"overview"}),"Overview"),(0,c.kt)("p",null,"Use these commands to intercept the ",(0,c.kt)("a",s({parentName:"p"},{href:"../../commands/account-delete"}),"account-delete")," command."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",s({parentName:"tr"},{align:"left"}),"Input/Output"),(0,c.kt)("th",s({parentName:"tr"},{align:"center"}),"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",s({parentName:"tr"},{align:"left"}),"Input"),(0,c.kt)("td",s({parentName:"tr"},{align:"center"}),"StdAccountDeleteInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",s({parentName:"tr"},{align:"left"}),"Output"),(0,c.kt)("td",s({parentName:"tr"},{align:"center"}),"StdAccountDeleteOutput")))),(0,c.kt)("h3",s({},{id:"example-stdaccountdeleteinput"}),"Example StdAccountDeleteInput"),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    }\n}\n')),(0,c.kt)("h3",s({},{id:"example-stdaccountdeleteoutput"}),"Example StdAccountDeleteOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"{\n}\n")),(0,c.kt)("h2",s({},{id:"implementation"}),"Implementation"),(0,c.kt)("h3",s({},{id:"before-account-delete-command"}),"Before account-delete command"),(0,c.kt)("p",null,"Use this logic to implement the command:"),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,c.kt)("h3",s({},{id:"after-account-delete-command"}),"After account-delete command"),(0,c.kt)("p",null,"Use this logic to implement the command:"),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"    .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {\n        logger.info(`Running after account delete`)\n        return output\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}A.isMDXComponent=!0}}]);
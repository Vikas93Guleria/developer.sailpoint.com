"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38443],{71509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>v,frontMatter:()=>c,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),g=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const c={id:"generate-random-string",title:"Generate Random String",pagination_label:"Generate Random String",sidebar_label:"Generate Random String",sidebar_class_name:"generateRandomString",keywords:["transforms","operations","generate","random","string"],description:"Generate a random string of any length.",slug:"/extensibility/transforms/operations/generate-random-string",tags:["Transforms","Transform Operations"]},f=void 0,k={unversionedId:"extensibility/transforms/operations/generate-random-string",id:"extensibility/transforms/operations/generate-random-string",title:"Generate Random String",description:"Generate a random string of any length.",source:"@site/docs/extensibility/transforms/operations/generate-random-string.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/generate-random-string",permalink:"/docs/extensibility/transforms/operations/generate-random-string",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/generate-random-string.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"generate-random-string",title:"Generate Random String",pagination_label:"Generate Random String",sidebar_label:"Generate Random String",sidebar_class_name:"generateRandomString",keywords:["transforms","operations","generate","random","string"],description:"Generate a random string of any length.",slug:"/extensibility/transforms/operations/generate-random-string",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"First Valid",permalink:"/docs/extensibility/transforms/operations/first-valid"},next:{title:"Get End of String",permalink:"/docs/extensibility/transforms/operations/get-end-of-string"}},h={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],N={toc:b},y="wrapper";function v(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(y,d(u(u({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Use the generate random string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Utility rule. The transform allows you to generate a random string of any length, using true/false flags to denote whether the stringe includes numbers and/or special characters."),(0,r.kt)("admonition",u({},{title:"Other Considerations",type:"note"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The generate random string transform shares some common features with two other transforms: ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/extensibility/transforms/operations/random-numeric"}),"random numeric")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/extensibility/transforms/operations/random-alphanumeric"}),"random alphanumeric"),". In most cases, either of these other two out-of-the-box transforms are recommended. However, the one advantage of the generate random string transform is its support for special characters, so a common use for this transform is generating random passwords that meet basic complexity requirements."))),(0,r.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,r.kt)("p",null,"The structure of a generate random string transform requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),' of the referenced rule to be the "Cloud Services Deployment Utility" rule built by SailPoint. You must also must set ',(0,r.kt)("inlineCode",{parentName:"p"},"operation")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"generateRandomString"),", provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),", and provide the true/false attributes for ",(0,r.kt)("inlineCode",{parentName:"p"},"includeNumbers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"includeSpecialChars"),". Last, you must include the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes required for all transforms:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "true",\n    "length": "16"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')),(0,r.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"rule"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"attributes.name")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Cloud Services Deployment Utility"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"operation")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"generateRandomString"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"includeNumbers")," - You must set this value to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to indicate whether the generator logic includes numbers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"includeSpecialChars")," - You must set this value to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to indicate whether the generator logic includes the followin special characters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"!"),(0,r.kt)("li",{parentName:"ul"},"@"),(0,r.kt)("li",{parentName:"ul"},"#"),(0,r.kt)("li",{parentName:"ul"},"\\$"),(0,r.kt)("li",{parentName:"ul"},"%"),(0,r.kt)("li",{parentName:"ul"},"&"),(0,r.kt)("li",{parentName:"ul"},"*"),(0,r.kt)("li",{parentName:"ul"},"("),(0,r.kt)("li",{parentName:"ul"},")"),(0,r.kt)("li",{parentName:"ul"},"+"),(0,r.kt)("li",{parentName:"ul"},"<"),(0,r.kt)("li",{parentName:"ul"},">"),(0,r.kt)("li",{parentName:"ul"},"?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"length")," - This is the required length ofthe randomly generated string.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," Due to identity attribute data constraints, the maximum allowable value is 450 characters."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"This transform generates a 16-character random string containing letters, numbers and special characters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "true",\n    "length": "16"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"This transform generates an 8-character random string containing only letters and numbers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "false",\n    "length": "8"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')))}v.isMDXComponent=!0}}]);
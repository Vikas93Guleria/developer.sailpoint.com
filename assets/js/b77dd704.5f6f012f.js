"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4697],{85407:(e,t)=>{function a(e,t){var a,l,s,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(a=e.xml)?void 0:a.name)?l:e.type:"array"===e.type?null!=(i=null==(s=e.xml)?void 0:s.name)?i:e.type:null!=(n=e.title)?n:e.type}t.A4=t.uc=void 0,t.uc=function(e,t){var l;return e.items?a(e.items)+"[]":null!=(l=a(e))?l:""},t.A4=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let a=[];if(t.items&&t.items.enum&&t.items.enum&&a.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,l,s="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(l=`\`<= ${t.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),a.push(s)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,l,s="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?l=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?l=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(l=`\`< ${t.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),a.push(s)}t.pattern&&a.push(`Value must match regular expression \`${t.pattern}\``);const l=t;if(l.mapping){const e=Object.keys(l.mapping);a.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&a.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&a.push(`\`>= ${t.minItems}\``),t.maxItems&&a.push(`\`<= ${t.maxItems}\``),0!==a.length?"**Possible values:** "+a.join(", "):void 0}},34168:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(67294),s=a(58750),i=a(82479),n=a(62574),m=a(94693),r=a(85407),o=a(52347),c=a(25365),p=a(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const g=function({param:{description:e,example:t,examples:a,name:g,required:y,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),b=(0,o.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),v=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var t=e,{node:a,inline:i,className:n,children:m}=t;((e,t)=>{var a={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&d)for(var l of d(e))t.indexOf(l)<0&&h.call(e,l)&&(a[l]=e[l])})(t,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?l.createElement("code",null,m):!i&&r?l.createElement(s.Z,{className:n},m):l.createElement(s.Z,null,m)}},rehypePlugins:[p.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(t),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),q=(0,o.lo)(a,(e=>{const t=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(i.default,null,t.map((([e,t])=>l.createElement(n.default,{value:e,label:e},t.summary&&l.createElement("p",null,t.summary),t.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,t.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,t.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},g),k,y&&l.createElement("span",{className:"openapi-schema__divider"}),b),x,T,v,E,q)}},37857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>S,contentTitle:()=>q,default:()=>A,frontMatter:()=>E,metadata:()=>N,toc:()=>w});var l=a(3905),s=a(68562),i=a(67001),n=a.n(i),m=a(98439),r=a(34168),o=a(3655),c=a(13503),p=a(82479),d=a(62574),u=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&b(e,a,t[a]);if(y)for(var a of y(t))k.call(t,a)&&b(e,a,t[a]);return e},v=(e,t)=>h(e,g(t)),T=(e,t)=>{var a={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&y)for(var l of y(e))t.indexOf(l)<0&&k.call(e,l)&&(a[l]=e[l]);return a};const E={id:"get-count-completed-work-items",sidebar_label:"Count Completed Work Items",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)"},q=void 0,N={unversionedId:"api/beta/get-count-completed-work-items",id:"api/beta/get-count-completed-work-items",title:"get-count-completed-work-items",description:"Count Completed Work Items",source:"@site/docs/api/beta/get-count-completed-work-items.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-count-completed-work-items",permalink:"/docs/api/beta/get-count-completed-work-items",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)",tags:[],version:"current",frontMatter:{id:"get-count-completed-work-items",sidebar_label:"Count Completed Work Items",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)"},sidebar:"openApiSidebar",previous:{title:"Count Work Items",permalink:"/docs/api/beta/get-count-work-items"},next:{title:"Work Items Summary",permalink:"/docs/api/beta/get-work-items-summary"}},S={},w=[{value:"Request",id:"request",level:2}],L={toc:w},U="wrapper";function A(e){var t=e,{components:a}=t,i=T(t,["components"]);return(0,l.kt)(U,v(x(x({},L),i),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Count Completed Work Items"),(0,l.kt)(n(),{method:"get",path:"/work-items/count/completed",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"This gets a count of completed work items belonging to either the specified user(admin required), or the current user."),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"ownerId",schema:{type:"string"},description:"ID of the work item owner.",required:!1},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"List of work items")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The count of work items",example:29},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'[\n  {\n    "count": 29\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Not Found - returned if the request URL refers to a resource or object that does not exist")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 404 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "404 Not found",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server did not find a current representation for the target resource."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}A.isMDXComponent=!0}}]);
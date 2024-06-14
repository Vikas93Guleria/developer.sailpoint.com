"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[97124],{85407:(e,t)=>{function a(e,t){var a,l,i,n,s;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(a=e.xml)?void 0:a.name)?l:e.type:"array"===e.type?null!=(n=null==(i=e.xml)?void 0:i.name)?n:e.type:null!=(s=e.title)?s:e.type}t.A4=t.uc=void 0,t.uc=function(e,t){var l;return e.items?a(e.items)+"[]":null!=(l=a(e))?l:""},t.A4=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let a=[];if(t.items&&t.items.enum&&t.items.enum&&a.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,l,i="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(l=`\`<= ${t.maxLength} characters\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),a.push(i)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,l,i="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?l=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?l=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(l=`\`< ${t.maximum}\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),a.push(i)}t.pattern&&a.push(`Value must match regular expression \`${t.pattern}\``);const l=t;if(l.mapping){const e=Object.keys(l.mapping);a.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&a.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&a.push(`\`>= ${t.minItems}\``),t.maxItems&&a.push(`\`<= ${t.maxItems}\``),0!==a.length?"**Possible values:** "+a.join(", "):void 0}},34168:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(67294),i=a(58750),n=a(82479),s=a(62574),m=a(94693),r=a(85407),o=a(52347),c=a(25365),p=a(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:t,examples:a,name:y,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const b=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,o.lo)(g,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),v=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var t=e,{node:a,inline:n,className:s,children:m}=t;((e,t)=>{var a={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&d)for(var l of d(e))t.indexOf(l)<0&&h.call(e,l)&&(a[l]=e[l])})(t,["node","inline","className","children"]);const r=/language-(\w+)/.exec(s||"");return n?l.createElement("code",null,m):!n&&r?l.createElement(i.Z,{className:s},m):l.createElement(i.Z,null,m)}},rehypePlugins:[p.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),L=(0,o.lo)((0,o.toString)(t),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),E=(0,o.lo)(a,(e=>{const t=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(n.default,null,t.map((([e,t])=>l.createElement(s.default,{value:e,label:e},t.summary&&l.createElement("p",null,t.summary),t.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,t.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,t.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},y),b,g&&l.createElement("span",{className:"openapi-schema__divider"}),k),x,T,v,L,E)}},70227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>q,contentTitle:()=>E,default:()=>Z,frontMatter:()=>L,metadata:()=>S,toc:()=>j});var l=a(3905),i=a(68562),n=a(67001),s=a.n(n),m=a(98439),r=a(34168),o=a(3655),c=a(13503),p=a(82479),d=a(62574),u=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&k(e,a,t[a]);if(g)for(var a of g(t))b.call(t,a)&&k(e,a,t[a]);return e},v=(e,t)=>h(e,y(t)),T=(e,t)=>{var a={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&g)for(var l of g(e))t.indexOf(l)<0&&b.call(e,l)&&(a[l]=e[l]);return a};const L={id:"get-entitlement-distribution-potential-role",sidebar_label:"Retrieves entitlement popularity distribution for a potential role in a role mining session",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves entitlement popularity distribution for a potential role in a role mining session' (get-entitlement-distribution-potential-role)"},E=void 0,S={unversionedId:"api/beta/get-entitlement-distribution-potential-role",id:"api/beta/get-entitlement-distribution-potential-role",title:"get-entitlement-distribution-potential-role",description:"Retrieves entitlement popularity distribution for a potential role in a role mining session",source:"@site/docs/api/beta/get-entitlement-distribution-potential-role.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-entitlement-distribution-potential-role",permalink:"/docs/api/beta/get-entitlement-distribution-potential-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves entitlement popularity distribution for a potential role in a role mining session' (get-entitlement-distribution-potential-role)",tags:[],version:"current",frontMatter:{id:"get-entitlement-distribution-potential-role",sidebar_label:"Retrieves entitlement popularity distribution for a potential role in a role mining session",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves entitlement popularity distribution for a potential role in a role mining session' (get-entitlement-distribution-potential-role)"},sidebar:"openApiSidebar",previous:{title:"Retrieves entitlements for a potential role in a role mining session",permalink:"/docs/api/beta/get-entitlements-potential-role"},next:{title:"Edit entitlements for a potential role to exclude some entitlements",permalink:"/docs/api/beta/update-entitlements-potential-role"}},q={},j=[{value:"Request",id:"request",level:2}],I={toc:j},N="wrapper";function Z(e){var t=e,{components:a}=t,n=T(t,["components"]);return(0,l.kt)(N,v(x(x({},I),n),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Retrieves entitlement popularity distribution for a potential role in a role mining session"),(0,l.kt)(s(),{method:"get",path:"/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"This method returns entitlement popularity distribution for a potential role in a role mining session."),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"sessionId",schema:{type:"string"},required:!0,description:"The role mining session id",example:"8c190e67-87aa-4ed9-a90b-d9d5344523fb"},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"potentialRoleId",schema:{type:"string"},required:!0,description:"A potential role id in a role mining session",example:"8c190e67-87aa-4ed9-a90b-d9d5344523fb"},mdxType:"ParamsItem"})))),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"includeCommonAccess",description:"Boolean determining whether common access entitlements will be included or not",required:!1,style:"form",explode:!0,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Succeeded. Returns a map containing entitlement popularity distribution for a potential role.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{name:"property name*",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}Z.isMDXComponent=!0}}]);
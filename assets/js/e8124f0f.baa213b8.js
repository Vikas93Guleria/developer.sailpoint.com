"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77741],{85407:(e,a)=>{function t(e,a){var t,l,s,m,i;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(m=null==(s=e.xml)?void 0:s.name)?m:e.type:null!=(i=e.title)?i:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var l=t(67294),s=t(58750),m=t(82479),i=t(62574),r=t(94693),n=t(85407),o=t(52347),p=t(25365),u=t(88453),d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:f,schema:g}}){g&&(null==g?void 0:g.type)||(g={type:"any"});const h=(0,o.lo)(g,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,n.uc)(e)))),b=(0,o.lo)(f,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,o.lo)((0,n.A4)(g),(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,r.T)(e),rehypePlugins:[u.Z]})))),x=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,r.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:m,className:i,children:r}=a;((e,a)=>{var t={};for(var l in e)c.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&v.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const n=/language-(\w+)/.exec(i||"");return m?l.createElement("code",null,r):!m&&n?l.createElement(s.Z,{className:i},r):l.createElement(s.Z,null,r)}},rehypePlugins:[u.Z]})))),E=(0,o.lo)(g&&g.items?g.items.default:g?g.default:void 0,(e=>l.createElement("div",null,l.createElement(p.D,{children:`**Default value:** \`${e}\``})))),T=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),w=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(m.default,null,a.map((([e,a])=>l.createElement(i.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},y),h,f&&l.createElement("span",{className:"openapi-schema__divider"}),b),k,E,x,T,w)}},426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>w,default:()=>j,frontMatter:()=>T,metadata:()=>_,toc:()=>q});var l=t(3905),s=t(68562),m=t(67001),i=t.n(m),r=t(98439),n=t(34168),o=t(3655),p=t(13503),u=t(82479),d=t(62574),c=Object.defineProperty,v=Object.defineProperties,y=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&b(e,t,a[t]);if(f)for(var t of f(a))h.call(a,t)&&b(e,t,a[t]);return e},x=(e,a)=>v(e,y(a)),E=(e,a)=>{var t={};for(var l in e)g.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&f)for(var l of f(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l]);return t};const T={id:"delete-user-profile",sidebar_label:"Delete a user profile assignment",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v40YM/SsETy0gx07idLcCekgRF3DR3S7y0cvCKGgNbc+uNKNwZpwYgv57wZGzceq02FxsSXwjvkc+Uh36loWi9W5usETDNUe+CyyfxK9szVig4VCJbRWDJV5lBBCkwALtgAIKwa5dwy5igZHWAcvPeIgIuCiwJaGGI4uGO3TUMJZoDRZo9d0txc1RwvkV+BXEDYNffuEqQvQgHMXylgtIraHIBXiBgTsWKHyfrLDBMkriAkO14Yaw7DDuWs0Yoli3xgJXXhqKWGJKmQU/UtPWCjk9m/5k3i/PR1Sd/TyaTk4vRu9PL6YjwzSdnk/p3fmKsO8Xmi203gUOmuBsMtG/lwruDiv1QAEMhyh+x5qy8i5q2coOqW1rW+VmjL8EPdodcx+KgH3f9wVOX0v3Kxm45vvEIcIIkqNlzVq0yqu2yCdvyeod/7nK3XqZv8BoY67U3G2ptuZ3PdoX/437S1E5zUzES8B+MYi4eE3E3EUWRzXcsGxZIJ+BkXY+iWMD3kFyG3KmZgP8WHE+Gd4k7t9UW9FpiHboJWvKY2aX0HAItGYYni+tW2d7DvhDE914kR0E33DcKOqBXYQH8W6d+5fVa8w/j56y0Ckocazj8/feNuPOmh4LDLkaw/gkqbHETYxtKMfjLrIjFz9Sw/2J846btvY75pPKN2NqLRa4JbFqhqzuGT5IXFGqdRKoarjyR1N4m+GgI7sfdjbZVClE37CooIXyq5LYuMsEl0zCcplUzufFYfhGWzDwOAR964iKwv3g6v0AwmJ/8dvT2N76r+wg6u8vO59kuEStq3Urr2/Ucg0STk8mJ5MDQ36cXX+Ay0/zY60bhqcgVORgybrtsl6qKg4ByBlovLGrHWhVfQogHHySigNYB5kMu60Vn7ei2rK2FbuQy73ffB/mt5lr60NsyB1EvmPLvuDcPZv+uzb0UObIj3Hc1mR1cgc/dXv7Ddv7yX5YYGmNrvCND1GjXbekwHdS970+vk8s2vTFs8uyBYwNem2wXFEd+H9Y/3C939o/wts3/qt69g/J7bL366R3WOBX3g1fnX7RF7hhMiyZ7BC4rHSXHBw52iHq5G9jezX7Y3Y7w77/B8MDhCE=",sidebar_class_name:"delete api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a user profile assignment' (delete-user-profile)"},w=void 0,_={unversionedId:"api/nerm/v1/delete-user-profile",id:"api/nerm/v1/delete-user-profile",title:"delete-user-profile",description:"Delete a user profile assignment",source:"@site/docs/api/nerm/v1/delete-user-profile.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/delete-user-profile",permalink:"/docs/api/nerm/v1/delete-user-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a user profile assignment' (delete-user-profile)",tags:[],version:"current",frontMatter:{id:"delete-user-profile",sidebar_label:"Delete a user profile assignment",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v40YM/SsETy0gx07idLcCekgRF3DR3S7y0cvCKGgNbc+uNKNwZpwYgv57wZGzceq02FxsSXwjvkc+Uh36loWi9W5usETDNUe+CyyfxK9szVig4VCJbRWDJV5lBBCkwALtgAIKwa5dwy5igZHWAcvPeIgIuCiwJaGGI4uGO3TUMJZoDRZo9d0txc1RwvkV+BXEDYNffuEqQvQgHMXylgtIraHIBXiBgTsWKHyfrLDBMkriAkO14Yaw7DDuWs0Yoli3xgJXXhqKWGJKmQU/UtPWCjk9m/5k3i/PR1Sd/TyaTk4vRu9PL6YjwzSdnk/p3fmKsO8Xmi203gUOmuBsMtG/lwruDiv1QAEMhyh+x5qy8i5q2coOqW1rW+VmjL8EPdodcx+KgH3f9wVOX0v3Kxm45vvEIcIIkqNlzVq0yqu2yCdvyeod/7nK3XqZv8BoY67U3G2ptuZ3PdoX/437S1E5zUzES8B+MYi4eE3E3EUWRzXcsGxZIJ+BkXY+iWMD3kFyG3KmZgP8WHE+Gd4k7t9UW9FpiHboJWvKY2aX0HAItGYYni+tW2d7DvhDE914kR0E33DcKOqBXYQH8W6d+5fVa8w/j56y0Ckocazj8/feNuPOmh4LDLkaw/gkqbHETYxtKMfjLrIjFz9Sw/2J846btvY75pPKN2NqLRa4JbFqhqzuGT5IXFGqdRKoarjyR1N4m+GgI7sfdjbZVClE37CooIXyq5LYuMsEl0zCcplUzufFYfhGWzDwOAR964iKwv3g6v0AwmJ/8dvT2N76r+wg6u8vO59kuEStq3Urr2/Ucg0STk8mJ5MDQ36cXX+Ay0/zY60bhqcgVORgybrtsl6qKg4ByBlovLGrHWhVfQogHHySigNYB5kMu60Vn7ei2rK2FbuQy73ffB/mt5lr60NsyB1EvmPLvuDcPZv+uzb0UObIj3Hc1mR1cgc/dXv7Ddv7yX5YYGmNrvCND1GjXbekwHdS970+vk8s2vTFs8uyBYwNem2wXFEd+H9Y/3C939o/wts3/qt69g/J7bL366R3WOBX3g1fnX7RF7hhMiyZ7BC4rHSXHBw52iHq5G9jezX7Y3Y7w77/B8MDhCE=",sidebar_class_name:"delete api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a user profile assignment' (delete-user-profile)"},sidebar:"openApiSidebar",previous:{title:"Update a user-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/patch-user-profile"},next:{title:"Create a role-profile contributor relationship",permalink:"/docs/api/nerm/v1/post-role-profile"}},I={},q=[{value:"Request",id:"request",level:2}],N={toc:q},D="wrapper";function j(e){var a=e,{components:t}=a,m=E(a,["components"]);return(0,l.kt)(D,x(k(k({},N),m),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete a user profile assignment"),(0,l.kt)(i(),{method:"delete",path:"/user_profile/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Delete a user profile assignment"),(0,l.kt)("h2",k({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"User profile was destroyed")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,l.kt)("p",null,"object"))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}j.isMDXComponent=!0}}]);
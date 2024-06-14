"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37888],{85407:(e,a)=>{function t(e,a){var t,l,m,s,r;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(s=null==(m=e.xml)?void 0:m.name)?s:e.type:null!=(r=e.title)?r:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,m="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(m+=e),l&&!e&&(m+=l),e&&l&&(m+=`${e} and ${l}`),t.push(m)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,m="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(m+=e),l&&!e&&(m+=l),e&&l&&(m+=`${e} and ${l}`),t.push(m)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>f});var l=t(67294),m=t(58750),s=t(82479),r=t(62574),n=t(94693),i=t(85407),p=t(52347),o=t(25365),u=t(88453),c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;const f=function({param:{description:e,example:a,examples:t,name:f,required:y,schema:h}}){h&&(null==h?void 0:h.type)||(h={type:"any"});const b=(0,p.lo)(h,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,i.uc)(e)))),x=(0,p.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,p.lo)((0,i.A4)(h),(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,n.T)(e),rehypePlugins:[u.Z]})))),g=(0,p.lo)(e,(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,n.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:s,className:r,children:n}=a;((e,a)=>{var t={};for(var l in e)d.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&c)for(var l of c(e))a.indexOf(l)<0&&v.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const i=/language-(\w+)/.exec(r||"");return s?l.createElement("code",null,n):!s&&i?l.createElement(m.Z,{className:r},n):l.createElement(m.Z,null,n)}},rehypePlugins:[u.Z]})))),T=(0,p.lo)(h&&h.items?h.items.default:h?h.default:void 0,(e=>l.createElement("div",null,l.createElement(o.D,{children:`**Default value:** \`${e}\``})))),E=(0,p.lo)((0,p.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),S=(0,p.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(s.default,null,a.map((([e,a])=>l.createElement(r.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},f),b,y&&l.createElement("span",{className:"openapi-schema__divider"}),x),k,T,g,E,S)}},12967:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>j,contentTitle:()=>S,default:()=>w,frontMatter:()=>E,metadata:()=>q,toc:()=>_});var l=t(3905),m=t(68562),s=t(67001),r=t.n(s),n=t(98439),i=t(34168),p=t(3655),o=t(13503),u=t(82479),c=t(62574),d=Object.defineProperty,v=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,x=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&x(e,t,a[t]);if(y)for(var t of y(a))b.call(a,t)&&x(e,t,a[t]);return e},g=(e,a)=>v(e,f(a)),T=(e,a)=>{var t={};for(var l in e)h.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&y)for(var l of y(e))a.indexOf(l)<0&&b.call(e,l)&&(t[l]=e[l]);return t};const E={id:"post-profile-avatar",sidebar_label:"Uploads a new profile avatar",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1vIzcM/SsCTy0wtvPhtNsBesi2KeACuwkSp5fAB3pE29rVSLOUxsnAmP9eULJjZ51mGx9sWSSl98gncgO+IcZovJtoKKHxId6wXxhLl2uMyFCAplCxacQHSrhvrEcdFCpHj6rJvgp3zhGXAcoH2BoCzApokLGmSCyWDTisCUowGgowcmSDcXV0z+RP5Rcqrkj5+ReqoopeMUU2tKZCtY3GSIXyrDRZigQFMH1rDZOGMnJLBYRqRTVCuYHYNXJjiGzcEgpYeK4xQgltm1DQE9aNFZfTs/Ev+sP8fIDV2W+D8cnpxeDD6cV4oAnH4/Mx/nq+QOj7Wb6NQvzodSdXfH955V0kF8VUtzaaBjmO5N6BxphAHcHLPKGQ3DXE0VAQq6TxTRJz45A76NNHgIXGu5CDz05O5Odlaq+eGqoiabVzldyiWqM1spd4wQsK2DTWVEkmoy9BDvn/+Fu2b9eAbSoe6mtnu5w/4RFNTCW5ZwuZ2fg1Mh9Rq9uMWQ1U63BuE5/KS0kjDd/DxDu6XiSRfs9ph2biUpr+ltC++G+/f8QrXXPF7DlAP8skLl4jMXGR2KFVd8RrYpVi1EAE37IjrbxTrVuh05a0oqeKUmR4F7m3y0Ry5TGyS1VTCLgklffnxi3Tq8z+h2/nzjN3Kvia4kq8HslF9cjeLbfa7AsQm981GsEgT7+E0a5djDZG96PnbhJSOnLbSDqCVYxNKEejTSSHLn7Gmvqh847qxvqOaFj5eoSNgQLWyEbUkOjt3TPHBbZW1IdVTZU/6j7T5K6kVSkMwSylCKKqNkRfEwujmeCrWjaxSwDnhEx82Qqjh9mh+U5qkHEcOj2XREjBtmHJ/+wExXbx1+6pTP1XcirK9++dbzkvQRJr3MLLiZKuTOF0eDI8OVDk56vbT+ryZnLMdUVqZ1QVOjUn1YbMF6uKQlDotKq9NotOSVZ9G6R3+JYrCso4lcCQWxv2riYXRZfWVORCSve243+aTBNWqX2N7sDyg6HyAu9mr/gfDqOc3khPcdRYNPJkd/0oK+9gUBVQpmGwjZ4VsBKNlg+w2cwx0D3bvpftby2xVHy2l1iqvzZB1hrKBdpAb8D+6XY7LX5W7x9zr5LabqLrkvBtK/+ggK/U5VHbz/oCVoSaOIHNhj8ypMFUwveBr00saXY56LKS9nPgftR2RPvPL/3m+m4qUt4OytpriZGD07nFfimvpu//Bfrx9TY=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new profile avatar' (post-profile-avatar)"},S=void 0,q={unversionedId:"api/nerm/v1/post-profile-avatar",id:"api/nerm/v1/post-profile-avatar",title:"post-profile-avatar",description:"Uploads a new profile avatar",source:"@site/docs/api/nerm/v1/post-profile-avatar.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/post-profile-avatar",permalink:"/docs/api/nerm/v1/post-profile-avatar",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new profile avatar' (post-profile-avatar)",tags:[],version:"current",frontMatter:{id:"post-profile-avatar",sidebar_label:"Uploads a new profile avatar",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1vIzcM/SsCTy0wtvPhtNsBesi2KeACuwkSp5fAB3pE29rVSLOUxsnAmP9eULJjZ51mGx9sWSSl98gncgO+IcZovJtoKKHxId6wXxhLl2uMyFCAplCxacQHSrhvrEcdFCpHj6rJvgp3zhGXAcoH2BoCzApokLGmSCyWDTisCUowGgowcmSDcXV0z+RP5Rcqrkj5+ReqoopeMUU2tKZCtY3GSIXyrDRZigQFMH1rDZOGMnJLBYRqRTVCuYHYNXJjiGzcEgpYeK4xQgltm1DQE9aNFZfTs/Ev+sP8fIDV2W+D8cnpxeDD6cV4oAnH4/Mx/nq+QOj7Wb6NQvzodSdXfH955V0kF8VUtzaaBjmO5N6BxphAHcHLPKGQ3DXE0VAQq6TxTRJz45A76NNHgIXGu5CDz05O5Odlaq+eGqoiabVzldyiWqM1spd4wQsK2DTWVEkmoy9BDvn/+Fu2b9eAbSoe6mtnu5w/4RFNTCW5ZwuZ2fg1Mh9Rq9uMWQ1U63BuE5/KS0kjDd/DxDu6XiSRfs9ph2biUpr+ltC++G+/f8QrXXPF7DlAP8skLl4jMXGR2KFVd8RrYpVi1EAE37IjrbxTrVuh05a0oqeKUmR4F7m3y0Ry5TGyS1VTCLgklffnxi3Tq8z+h2/nzjN3Kvia4kq8HslF9cjeLbfa7AsQm981GsEgT7+E0a5djDZG96PnbhJSOnLbSDqCVYxNKEejTSSHLn7Gmvqh847qxvqOaFj5eoSNgQLWyEbUkOjt3TPHBbZW1IdVTZU/6j7T5K6kVSkMwSylCKKqNkRfEwujmeCrWjaxSwDnhEx82Qqjh9mh+U5qkHEcOj2XREjBtmHJ/+wExXbx1+6pTP1XcirK9++dbzkvQRJr3MLLiZKuTOF0eDI8OVDk56vbT+ryZnLMdUVqZ1QVOjUn1YbMF6uKQlDotKq9NotOSVZ9G6R3+JYrCso4lcCQWxv2riYXRZfWVORCSve243+aTBNWqX2N7sDyg6HyAu9mr/gfDqOc3khPcdRYNPJkd/0oK+9gUBVQpmGwjZ4VsBKNlg+w2cwx0D3bvpftby2xVHy2l1iqvzZB1hrKBdpAb8D+6XY7LX5W7x9zr5LabqLrkvBtK/+ggK/U5VHbz/oCVoSaOIHNhj8ypMFUwveBr00saXY56LKS9nPgftR2RPvPL/3m+m4qUt4OytpriZGD07nFfimvpu//Bfrx9TY=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new profile avatar' (post-profile-avatar)"},sidebar:"openApiSidebar",previous:{title:"Retrieves the URL of the profile avatar",permalink:"/docs/api/nerm/v1/get-profile-avatar"},next:{title:"Get risk score data in bulk",permalink:"/docs/api/nerm/v1/get-risk-scores"}},j={},_=[{value:"Request",id:"request",level:2}],N={toc:_},D="wrapper";function w(e){var a=e,{components:t}=a,s=T(a,["components"]);return(0,l.kt)(D,g(k(k({},N),s),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Uploads a new profile avatar"),(0,l.kt)(r(),{method:"post",path:"/profiles/{id}/avatar",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Uploads a new profile avatar"),(0,l.kt)("h2",k({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(i.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)(n.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"file",required:!1,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",format:"binary"},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(m.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{type:"string",format:"url",readOnly:!0},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "url": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);
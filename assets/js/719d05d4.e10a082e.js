"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[91322],{19302:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>c,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>h});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(o)for(var a of o(e))d.call(e,a)&&u(t,a,e[a]);return t},m=(t,e)=>l(t,i(e)),k=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a};const g={id:"pagination-metadata-filtering",title:"Pagination, Metadata and Filtering",pagination_label:"Pagination, Metadata and Filtering",sidebar_label:"Pagination, Metadata and Filtering",sidebar_position:3,sidebar_class_name:"paginationMetadataFiltering",keywords:["pagination metadata filtering"],description:"NERM API pagination, metadata, and filtering.",slug:"/api/nerm/pagination-metadata-filtering",tags:["Pagination Metadata Filtering"]},c=void 0,f={unversionedId:"api/nerm/pagination-metadata-filtering",id:"api/nerm/pagination-metadata-filtering",title:"Pagination, Metadata and Filtering",description:"NERM API pagination, metadata, and filtering.",source:"@site/docs/api/nerm/pagination-metadata-filtering.md",sourceDirName:"api/nerm",slug:"/api/nerm/pagination-metadata-filtering",permalink:"/docs/api/nerm/pagination-metadata-filtering",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/nerm/pagination-metadata-filtering.md",tags:[{label:"Pagination Metadata Filtering",permalink:"/docs/tags/pagination-metadata-filtering"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:3,frontMatter:{id:"pagination-metadata-filtering",title:"Pagination, Metadata and Filtering",pagination_label:"Pagination, Metadata and Filtering",sidebar_label:"Pagination, Metadata and Filtering",sidebar_position:3,sidebar_class_name:"paginationMetadataFiltering",keywords:["pagination metadata filtering"],description:"NERM API pagination, metadata, and filtering.",slug:"/api/nerm/pagination-metadata-filtering",tags:["Pagination Metadata Filtering"]},sidebar:"openApiSidebar",previous:{title:"Authentication",permalink:"/docs/api/nerm/authentication"},next:{title:"NERM v1 API",permalink:"/docs/api/nerm/v1"}},N={},h=[{value:"Paginating Results",id:"paginating-results",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Filtering Results",id:"filtering-results",level:2},{value:"Advanced Profile Filtering",id:"advanced-profile-filtering",level:2},{value:"ProfileStatusRule",id:"profilestatusrule",level:3},{value:"ProfileTypeRule",id:"profiletyperule",level:3},{value:"ProfileAttributeRule",id:"profileattributerule",level:3}],b={toc:h},y="wrapper";function v(t){var e=t,{components:a}=e,r=k(e,["components"]);return(0,n.kt)(y,m(s(s({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Many endpoints in the NERM API support a generic syntax for paginating, filtering, and sorting results. A collection endpoint has the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The HTTP verb is always GET."),(0,n.kt)("li",{parentName:"ul"},"The last component in the URL is a plural noun (ex. ",(0,n.kt)("inlineCode",{parentName:"li"},"/users"),")."),(0,n.kt)("li",{parentName:"ul"},"The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.")),(0,n.kt)("h2",s({},{id:"paginating-results"}),"Paginating Results"),(0,n.kt)("p",null,"Use the following optional query parameters to achieve pagination:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"limit")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used."),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"100")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Maxiumum of 500 for ",(0,n.kt)("inlineCode",{parentName:"td"},"api/profiles"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"offset")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Integer specifying the offset of the first result from the beginning of the collection. The ",(0,n.kt)("strong",{parentName:"td"},"offset")," value is record-based, not page-based, and the index starts at 0. For example, ",(0,n.kt)("strong",{parentName:"td"},"offset=0")," and ",(0,n.kt)("strong",{parentName:"td"},"limit=20")," returns records 0-19, but ",(0,n.kt)("strong",{parentName:"td"},"offset=1")," and ",(0,n.kt)("strong",{parentName:"td"},"limit=20")," returns records 1-20."),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Between 0 and the last record index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"order")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"String specifying the ascending order in which the results should be returned, for example, ",(0,n.kt)("strong",{parentName:"td"},"order=login")," would return the users results in an ascending alphanumeric order"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Limited to specific parameters")))),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users?limit=2")),(0,n.kt)("li",{parentName:"ul"},"GET ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users?limit=20&offset=4")),(0,n.kt)("li",{parentName:"ul"},"GET ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users?order=created_at"))),(0,n.kt)("h2",s({},{id:"metadata"}),"Metadata"),(0,n.kt)("p",null,"Metadata can be added to a result to allow for progromatic approaches to fetching data."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"metadata")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Boolean that specifies wether or not to return a ",(0,n.kt)("strong",{parentName:"td"},"_","metadata")," key with pagination information"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"false")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users?metadata=true"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  ...\n  "_metadata": {\n    "limit": 100,\n    "offset": 200,\n    "total": 500,\n    "next": "api/users?offset=300&limit=100\n  }\n}\n')),(0,n.kt)("h2",s({},{id:"filtering-results"}),"Filtering Results"),(0,n.kt)("p",null,"Resource attributes can be added to parameters to perform a basic match filter. Refer to each documented endpoints ",(0,n.kt)("strong",{parentName:"p"},"Query Parameters")," to identify what can be used."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users?email=jim@acmeco.com"))),(0,n.kt)("h2",s({},{id:"advanced-profile-filtering"}),"Advanced Profile Filtering"),(0,n.kt)("p",null,"More advanced filtering can be performed on ",(0,n.kt)("strong",{parentName:"p"},"profiles")," by using the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://developer.sailpoint.com/nerm/api"}),"Advanced Search Endpoint"),"."),(0,n.kt)("p",null,"For example, if you wanted to find all profiles where the ",(0,n.kt)("strong",{parentName:"p"},"personal_first_name"),' started with the letter "a", you would first need to find the ',(0,n.kt)("strong",{parentName:"p"},"id")," of the ",(0,n.kt)("strong",{parentName:"p"},"personal_first_name")," attribute, and provide a JSON body like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  "advanced_search": {\n    "condition_rules_attributes: [\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": <id of the personal_first_name attribute>,\n        "object_type": "NeAttribute",\n        "comparison_operator": "start_with?",\n        "value": "a"\n      }\n    ]\n  }\n}\n')),(0,n.kt)("p",null,"You can also provide multiple filters in the same call. For example, you want to find all profiles that are not ",(0,n.kt)("strong",{parentName:"p"},"Active"),", that have a specific department profile. First you need to find the ",(0,n.kt)("strong",{parentName:"p"},"id")," of the attribute that contains that profile, and then the ",(0,n.kt)("strong",{parentName:"p"},"id")," of the specific department profile. Then provide a JSON body like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  "advanced_search": {\n    "condition_rules_attributes: [\n      {\n        "type": "ProfileStatusRule",\n        "comparison_operator": "!=",\n        "value": "Active"\n      },\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": <id of the department attribute>,\n        "object_type": "NeAttribute",\n        "comparison_operator": "include?",\n        "value": <id of the department profile>\n      }\n    ]\n  }\n}\n')),(0,n.kt)("p",null,"There are 3 types of ",(0,n.kt)("strong",{parentName:"p"},"condition_rules_attributes")),(0,n.kt)("h3",s({},{id:"profilestatusrule"}),"ProfileStatusRule"),(0,n.kt)("p",null,"This rule searches for profiles based on the status."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Key"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The value must be 'ProfileStatusRule'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"comparison_operator"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is how the comparison is made for the attribute values. ",(0,n.kt)("br",null),"Available basic operators: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"== (equals)"),(0,n.kt)("li",null,"!= (not equal)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is the value used for comparison.0 ",(0,n.kt)("br",null),"Available Values: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"Active"),(0,n.kt)("li",null,"Inactive"),(0,n.kt)("li",null,"Leave of absence"),(0,n.kt)("li",null,"Terminated")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"_","destroy"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),'Supplying this option with "true" will cause the condition to be destroyed')))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  "advanced_search": {\n    "condition_rules_attributes": [\n      {\n        "type": "ProfileStatusRule",\n        "comparison_operator": "==",\n        "value": "Active"\n      }\n    ]\n  }\n}\n')),(0,n.kt)("h3",s({},{id:"profiletyperule"}),"ProfileTypeRule"),(0,n.kt)("p",null,"This rule searches for profiles based on the id of the profile type."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Key"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The value must be 'ProfileTypeRule'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"comparison_operator"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is how the comparison is made for the attribute values. Available basic operators: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"== (equals)"),(0,n.kt)("li",null,"!= (not equal)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is the value used for comparison. This should be the ID of the profile type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"_","destroy"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),'Supplying this option with "true" will cause the condition to be destroyed')))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  "advanced_search": {\n    "condition_rules_attributes": [\n      {\n        "type": "ProfileTypeRule",\n        "comparison_operator": "==",\n        "value": "1bd99a83-57e1-4e3c-bbb0-861b4700cff6"\n      }\n    ]\n  }\n}\n')),(0,n.kt)("h3",s({},{id:"profileattributerule"}),"ProfileAttributeRule"),(0,n.kt)("p",null,"This rule searches for profiles based on an attribute that profile has."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Key"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The value must be 'ProfileAttributeRule'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"object_type"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The values must equal 'NeAttribute'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"condition_object_id"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"this is the id of the attribute you are searching against")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"comparison_operator"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is how the comparison is made for the attribute values. ",(0,n.kt)("br",null),"Available basic operators: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"== (equals)"),(0,n.kt)("li",null,"!= (not equal)"),(0,n.kt)("li",null,"> (greater than)"),(0,n.kt)("li",null,"< (less than)"),(0,n.kt)("li",null,"start_with? (starts with)"),(0,n.kt)("li",null,"end_with? (ends with)"),(0,n.kt)("li",null,"include? (includes)"))," Available date operators: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"before (before specific date)"),(0,n.kt)("li",null,"after (after specific date)"),(0,n.kt)("li",null,"> (more than X days before/after today)"),(0,n.kt)("li",null,"< (less than X days before/after today)"),(0,n.kt)("li",null,"== (equal to X days before/after today)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This is the value used for comparison. ",(0,n.kt)("br",null),"Value formatting: ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"profile select attribute: ID of profile"),(0,n.kt)("li",null,"profile search attribute: ID of profile"),(0,n.kt)("li",null,"user select attribute: ID of user"),(0,n.kt)("li",null,"user search attribute: ID of user"),(0,n.kt)("li",null,"date attribute (before, after): correct date format for attribute"),(0,n.kt)("li",null,'date attribute (>, <, ==): "X before" or "X after" where X is the number of days')))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"_","destroy"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),'Supplying this option with "true" will cause the condition to be destroyed')))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'{\n  "advanced_search": {\n    "condition_rules_attributes: [\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": "4ba5be36-3c4d-11ee-be56-0242ac120002",\n        "object_type": "NeAttribute",\n        "comparison_operator": "includes?",\n        "value": "term"\n      }\n    ]\n  }\n}\n')))}v.isMDXComponent=!0}}]);
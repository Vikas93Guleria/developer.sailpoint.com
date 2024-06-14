"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52391],{51798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var s=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))p.call(t,a)&&c(e,a,t[a]);return e},d=(e,t)=>i(e,o(t)),u=(e,t)=>{var a={};for(var s in e)l.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&p.call(e,s)&&(a[s]=e[s]);return a};const m={id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"Authorize your ISC API requests.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},f=void 0,g={unversionedId:"api/authorization",id:"api/authorization",title:"Authorization",description:"Authorize your ISC API requests.",source:"@site/docs/api/authorization.md",sourceDirName:"api",slug:"/api/authorization",permalink:"/docs/api/authorization",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/authorization.md",tags:[{label:"Authorization",permalink:"/docs/tags/authorization"},{label:"Scopes",permalink:"/docs/tags/scopes"},{label:"Permissions",permalink:"/docs/tags/permissions"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:3,frontMatter:{id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"Authorize your ISC API requests.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},sidebar:"openApiSidebar",previous:{title:"Authentication",permalink:"/docs/api/authentication"},next:{title:"Standard Collection Parameters",permalink:"/docs/api/standard-collection-parameters"}},k={},y=[{value:"Overview",id:"overview",level:2},{value:"User Level Permissions",id:"user-level-permissions",level:2},{value:"Scopes",id:"scopes",level:2},{value:"Identifying Necessary Authorization for an Endpoint",id:"identifying-necessary-authorization-for-an-endpoint",level:2},{value:"Assigning Scopes with the UI",id:"assigning-scopes-with-the-ui",level:2},{value:"Assigning Scopes with the API",id:"assigning-scopes-with-the-api",level:2}],v={toc:y},A="wrapper";function w(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,s.kt)(A,d(h(h({},v),i),{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",h({},{id:"overview"}),"Overview"),(0,s.kt)("p",null,"Authorization and authentication are two related concepts that help secure APIs. Authentication is the act of verifying a user's identity. Authorization is the act of validating the user's permission to access a given resource. When a user sends an API request, the server authenticates the user by checking the validity of the access token sent with the request. If the token is valid, the server checks whether the user is authorized to perform the desired operation on the resource. If the user is both authenticated and authorized, the server fulfills the request."),(0,s.kt)("div",{align:"center"},(0,s.kt)("mermaid",h({},{value:"sequenceDiagram\n    autonumber\n    participant H as HTTP Client\n    participant I as Identity Security Cloud\n\n    H->>I: Request to delete a source\n    I->>I: Authenticate access token\n    opt token fails authentication\n      I->>H: Return a 401 response code\n    end\n    I->>I: Authorize user to delete source\n    opt user fails authorization\n      I->>H: Return a 403 response code\n    end\n    I->>H: Delete source and return success"}))),(0,s.kt)("h2",h({},{id:"user-level-permissions"}),"User Level Permissions"),(0,s.kt)("p",null,"When managing a user's access to the API, you must first assign the target user an appropriate ",(0,s.kt)("a",h({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html"}),"user level"),'. It is important to choose the correct user level as it will place a boundary on which APIs a user can call, which also affects the areas and functions of the UI they have access to. For example, if a user is in charge of creating reports for auditing requirements, consider granting them the "Report Admin" user level.'),(0,s.kt)("p",null,"User levels are typically granted through the UI, ",(0,s.kt)("a",h({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/grant_remove_user_levels.html"}),"following the procedures from this document"),". You can also set user levels via API using the ",(0,s.kt)("a",h({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/patch-auth-user"}),"auth user update")," endpoint."),(0,s.kt)("p",null,"User levels act as the first line of defense by applying a rigid boundary around the APIs that a user can call. The next section introduces scopes, which allow users to apply granular controls on the APIs an access token can call."),(0,s.kt)("h2",h({},{id:"scopes"}),"Scopes"),(0,s.kt)("p",null,"Scopes are granular permissions you can add to personal access tokens (PATs) to create tokens with the least privilege necessary to fulfill their functions. User levels place a broad border around the APIs a token has access to, while scopes can further limit the set of endpoints a token can call. Scopes allow an API user to have multiple tokens with different privileges that support unique use cases and software applications. Using scopes is beneficial to security - if a bad actor compromises any one of the tokens, the bad actor can only perform the limited set of operations defined by the token's scopes, significantly reducing the potential damage that can be done. Therefore, it is recommended that all users apply scopes to each PAT they create in order to reduce the impact of stolen credentials."),(0,s.kt)("p",null,"Scopes contain one or more rights, which are low level permissions that grant access to individual endpoints. This means that a single scope, like ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-request:manage"),", can grant access to multiple API endpoints. To determine which scopes a PAT needs, you must first identify which endpoints the PAT needs to invoke. Each endpoint's API specification indicates which scope is necessary to call the endpoint. You can use this approach to curate a list of scopes that must be applied to the credential to call the necessary endpoints. ",(0,s.kt)("a",h({parentName:"p"},{href:"#identifying-necessary-authorization-for-an-endpoint"}),"Learn more about how to find an API's required scopes here"),"."),(0,s.kt)("p",null,"By default, each PAT has the scope ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:default"),", which is the least privileged scope. It only grants access to endpoints that require no authorization at all, such as ",(0,s.kt)("a",h({parentName:"p"},{href:"https://developer.sailpoint.com/idn/api/v3/get-public-identities"}),"List Public Identities"),". Access to the endpoint may still be determined by the user's ",(0,s.kt)("a",h({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html"}),"user level"),"."),(0,s.kt)("p",null,"Alternatively, ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," grants access to all the rights appropriate for the ",(0,s.kt)("a",h({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html"}),"user level"),". For example, a user with the ",(0,s.kt)("strong",{parentName:"p"},"Admin")," user level has access to all APIs, so ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," grants ",(0,s.kt)("strong",{parentName:"p"},"Admin")," users access to all APIs. A user with the ",(0,s.kt)("strong",{parentName:"p"},"Cert Admin")," user level, however, has access to only a subset of APIs necessary to perform their role, most notably the certification APIs, so ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," grants ",(0,s.kt)("strong",{parentName:"p"},"Cert Admin")," users access to only that subset of APIs."),(0,s.kt)("p",null,"Scopes are additive, which means the final right set is the intersection of all the rights granted by the scopes assigned to a PAT, excluding any rights that fall outside of the user level. Each scope added to an PAT builds up the credential's permission set, incrementally increasing access to the API. If a PAT has ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," granted, then any additional scope is ignored because ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," already contains the complete set of rights available to the user level."),(0,s.kt)("admonition",h({},{type:"tip"}),(0,s.kt)("p",{parentName:"admonition"},"If the API requirements for the personal access token exceed the scopes allowed by the user's assigned user level, then the following options may be considered."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Re-evaluate the user's responsibilities compared to their user level. It is possible that their user level is no longer appropriate for the functions they need to perform, and a more permissive user level may be necessary."),(0,s.kt)("li",{parentName:"ul"},"If the required access is a one-off need for a specific use case, then consider generating a PAT with the required scopes from a different user and sharing the credentials. This could be a dedicated service account designated for one-off applications. The downside of this approach is that it becomes more difficult to attribute an API call to a specific user, as the user now has a PAT that is not tied to their user account."))),(0,s.kt)("h2",h({},{id:"identifying-necessary-authorization-for-an-endpoint"}),"Identifying Necessary Authorization for an Endpoint"),(0,s.kt)("p",null,"Each endpoint document specifies how to authorize with the endpoint in the ",(0,s.kt)("strong",{parentName:"p"},"Authorization")," dropdown, which is located on the right side column below the endpoint path. Selecting ",(0,s.kt)("strong",{parentName:"p"},"Authorization")," expands the dropdown menu showing the details of how to authorize with the endpoint. The following image shows the authorization details of the ",(0,s.kt)("a",h({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/list-access-profiles"}),"List Access Profiles")," endpoint."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Authorization Dropdown",src:a(70813).Z,width:"1648",height:"359"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"type"),": The type of authorization method supported for this endpoint. SailPoint uses the ",(0,s.kt)("a",h({parentName:"li"},{href:"/docs/api/authentication#oauth-20"}),"OAuth2 standard")," for all the V3/Beta APIs."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"flow"),": One or more OAuth flows supported by the endpoint. A token only needs to be generated by one flow to be valid. Refer to ",(0,s.kt)("a",h({parentName:"li"},{href:"/docs/api/authentication#authentication-details"}),"Authentication Details")," for more information about the available flows."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"scopes"),": A list of scopes necessary to access the endpoint. A token only needs one of the scopes to authorize with the endpoint. When possible, choose the least privileged scope. Scopes ending in ",(0,s.kt)("inlineCode",{parentName:"li"},"read")," can only retrieve data. Scopes ending in ",(0,s.kt)("inlineCode",{parentName:"li"},"manage")," can retrieve, modify, and delete data.")),(0,s.kt)("p",null,"You may also notice that many API descriptions will indicate the user level(s) required to call the API endpoint. In the screenshot above, the list access profiles endpoint requires the user to have one of the following user levels: ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN. This means the PAT must have one of those user level ",(0,s.kt)("strong",{parentName:"p"},"in addition to")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-profile:read")," scope in order to call the endpoint."),(0,s.kt)("admonition",h({},{type:"info"}),(0,s.kt)("p",{parentName:"admonition"},"SailPoint is working to define scopes for every endpoint, but you may encounter a scenario where you need access to an endpoint that does not yet have a scope defined. Until a scope is defined for the endpoint, you can assign ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," to ensure that your credentials can access the necessary endpoints. Once all of the endpoints necessary for your use case have scopes defined, you can update or create a new PAT with the appropriate scopes in place.")),(0,s.kt)("h2",h({},{id:"assigning-scopes-with-the-ui"}),"Assigning Scopes with the UI"),(0,s.kt)("p",null,"When you create a PAT in the UI, you can apply scopes to the token. More information on how to do this will be added in the near future."),(0,s.kt)("h2",h({},{id:"assigning-scopes-with-the-api"}),"Assigning Scopes with the API"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",h({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/create-personal-access-token"}),"create PATs")," programmatically with the API. The request body for the endpoint allows the caller to specify a list of scopes to be applied to the PAT. If the ",(0,s.kt)("inlineCode",{parentName:"p"},"scope")," property is omitted from the request body, then ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," is granted to the credentials. The following example shows how to generate a PAT with the ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-request:manage")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:nelm:manage")," scopes."),(0,s.kt)("p",null,"POST ",(0,s.kt)("a",h({parentName:"p"},{href:"https://%7Btenant%7D.api.identitynow.com/v3/personal-access-tokens"}),"https://{tenant}.api.identitynow.com/v3/personal-access-tokens")),(0,s.kt)("p",null,"Request Body"),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Access Request and NELM Management",\n  "scope": ["idn:access-request:manage", "idn:nelm:manage"]\n}\n')),(0,s.kt)("p",null,"This request produces the following response, indicating that the scopes were successfully applied to the PAT."),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-json"}),'{\n  "id": "86286c0c456e4b03a8ccb1f892dd456d",\n  "name": "Access Request and NELM Management",\n  "secret": "********",\n  "scope": ["idn:access-request:manage", "idn:nelm:manage"],\n  "created": "2023-01-04T18:58:17.486584Z",\n  "owner": {\n    "name": "jane.doe",\n    "id": "2c9180ab7624cbd7017642d8c8c81a73",\n    "type": "IDENTITY"\n  }\n}\n')),(0,s.kt)("admonition",h({},{type:"caution"}),(0,s.kt)("p",{parentName:"admonition"},"If you attempt to add a scope that is outside the permissions of the ",(0,s.kt)("a",h({parentName:"p"},{href:"#user-level-permissions"}),"target user's level"),", the request will still succeed and include the invalid scope in the credentials. However, any token generated with these credentials will ",(0,s.kt)("strong",{parentName:"p"},"not")," include the rights of the invalid scope. This is not an issue when you apply scopes with the UI - the UI only shows scopes available to the current user.")))}w.isMDXComponent=!0},70813:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/authorization-dropdown-0610111d9fd2842fe8e4bfbe505b2477.png"}}]);
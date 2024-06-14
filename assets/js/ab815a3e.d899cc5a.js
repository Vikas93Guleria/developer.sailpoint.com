"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[7865],{3405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))l.call(n,t)&&c(e,t,n[t]);return e},h=(e,n)=>i(e,s(n)),u=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={id:"python-sdk-error-handling",title:"Error Handling with The Python SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","error"],description:"Learn how to configure error handling when using the Python SDK.",slug:"/tools/sdk/python/error-handling",tags:["SDK"]},f=void 0,g={unversionedId:"tools/sdk/python/python-sdk-error-handling",id:"tools/sdk/python/python-sdk-error-handling",title:"Error Handling with The Python SDK",description:"Learn how to configure error handling when using the Python SDK.",source:"@site/docs/tools/sdk/python/error-handling.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/error-handling",permalink:"/docs/tools/sdk/python/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/error-handling.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:8,frontMatter:{id:"python-sdk-error-handling",title:"Error Handling with The Python SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","error"],description:"Learn how to configure error handling when using the Python SDK.",slug:"/tools/sdk/python/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Retries",permalink:"/docs/tools/sdk/python/retries"},next:{title:"TypeScript SDK",permalink:"/docs/tools/sdk/typescript"}},y={},k=[],x={toc:k},b="wrapper";function v(e){var n=e,{components:t}=n,o=u(n,["components"]);return(0,r.kt)(b,h(d(d({},x),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Python SDK returns key exceptions if the request fails. You can find these exceptions at ",(0,r.kt)("inlineCode",{parentName:"p"},"sailpoint.v3.exceptions"),"."),(0,r.kt)("p",null,"Here is an example of the error handling process. In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},'name rt "Test"')," isn't a valid filter, which causes the function to return a 400 'bad request' exception message. Line 11 will catch that 'bad request' response, and you can log the appropriate message. This example will also catch 401 'unauthorized' and 500 'service exception' messages: "),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0}),'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException\n\nconfiguration = Configuration()\napi_client = sailpoint.v3.ApiClient(configuration)\n\ntry:\n    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters=\'name rt "Test"\')\nexcept BadRequestException as e:\n    print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\nexcept UnauthorizedException as e:\n    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\\n" % e)\nexcept ServiceException as e:\n    print("Service exception when calling TransformsApi->list_transforms: %s\\n" % e)\n')),(0,r.kt)("p",null,"If you don't want the program to exit for any error response, you can include ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," in each of your ",(0,r.kt)("inlineCode",{parentName:"p"},"except")," blocks after printing the error message, as you can see in this example: "),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-python"}),'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException\n\nconfiguration = Configuration()\napi_client = sailpoint.v3.ApiClient(configuration)\n\ntry:\n    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters=\'name rt "Test"\')\nexcept BadRequestException as e:\n    print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\nexcept UnauthorizedException as e:\n    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\nexcept ServiceException as e:\n    print("Service exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\n')))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8597],{34261:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>S,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var r=o(3905),s=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&d(e,o,t[o]);if(a)for(var o of a(t))p.call(t,o)&&d(e,o,t[o]);return e},g=(e,t)=>n(e,i(t)),u=(e,t)=>{var o={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o};const m={id:"go-sdk-retries",title:"Retries with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","retry"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/retries",tags:["SDK","Software Development Kit"]},f=void 0,h={unversionedId:"tools/sdk/go/go-sdk-retries",id:"tools/sdk/go/go-sdk-retries",title:"Retries with the Go SDK",description:"Learn how to paginate results with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/retries.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/retries",permalink:"/docs/tools/sdk/go/retries",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/retries.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:7,frontMatter:{id:"go-sdk-retries",title:"Retries with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","retry"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/retries",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/search"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/error-handling"}},k={},b=[],w={toc:b},D="wrapper";function S(e){var t=e,{components:o}=t,s=u(t,["components"]);return(0,r.kt)(D,g(c(c({},w),s),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The SDK uses the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/hashicorp/go-retryablehttp"}),"go-retryablehttp")," module to support retry logic."),(0,r.kt)("p",null,"On line 17-18 of the following example, the SDK is set to retry if there is an unexpected error up to 10 times and wait 2 seconds between each retry:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0}),'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n configuration.HTTPClient.RetryMax = 10\n configuration.HTTPClient.RetryWaitMax = time.Second * 2\n\n resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Filters("This is an incorrect string").Execute()\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n // response from `ListAccounts`: []Account\n fmt.Fprintf(os.Stdout, "First response from `TransformsApi.ListTransforms`: %v\\n", resp)\n\n}\n')))}S.isMDXComponent=!0}}]);
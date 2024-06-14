"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60935],{98302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>y,frontMatter:()=>w,metadata:()=>m,toc:()=>b});var s=r(3905),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&p(e,r,t[r]);if(n)for(var r of n(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),c=(e,t)=>{var r={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&n)for(var s of n(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r};const w={id:"powershell-sdk-retries",title:"Retries with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Retries",sidebar_position:6,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","retry"],description:"Learn how to configure retries using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/retries",tags:["SDK"]},k=void 0,m={unversionedId:"tools/sdk/powershell/powershell-sdk-retries",id:"tools/sdk/powershell/powershell-sdk-retries",title:"Retries with the PowerShell SDK",description:"Learn how to configure retries using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/retries.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/retries",permalink:"/docs/tools/sdk/powershell/retries",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/retries.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:6,frontMatter:{id:"powershell-sdk-retries",title:"Retries with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Retries",sidebar_position:6,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","retry"],description:"Learn how to configure retries using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/retries",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/search"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/error-handling"}},f={},b=[],S={toc:b},g="wrapper";function y(e){var t=e,{components:r}=t,o=c(t,["components"]);return(0,s.kt)(g,u(h(h({},S),o),{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The SDK supports retry logic in the case of an unexpected error. You have these two retry configuration options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"MaximumRetryCount - How many times to retry the request. Default is 10 retries."),(0,s.kt)("li",{parentName:"ul"},"RetryIntervalSeconds - How many seconds to wait between retries. Default is 5 seconds.")),(0,s.kt)("p",null,"The following code will tell the SDK to retry 2 times after an unexpected error and wait 3 seconds between retries."),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),"Set-DefaultConfiguration -MaximumRetryCount 2 -RetryIntervalSeconds 3\n")))}y.isMDXComponent=!0}}]);
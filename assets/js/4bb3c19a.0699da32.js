"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28774],{58518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>y,frontMatter:()=>w,metadata:()=>k,toc:()=>b});var o=r(3905),n=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))d.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>s(e,l(t)),u=(e,t)=>{var r={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&d.call(e,o)&&(r[o]=e[o]);return r};const w={id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},g=void 0,k={unversionedId:"tools/sdk/powershell/powershell-sdk-error-handling",id:"tools/sdk/powershell/powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",description:"Learn how to delete resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/error-handling.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/error-handling",permalink:"/docs/tools/sdk/powershell/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/error-handling.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:7,frontMatter:{id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/retries"},next:{title:"Python SDK",permalink:"/docs/tools/sdk/python"}},m={},b=[],f={toc:b},S="wrapper";function y(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,o.kt)(S,c(h(h({},f),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SDK uses the Invoke-WebRequest cmdlet to handle HTTP requests. Invoke-WebRequest will throw a terminating error for any response that falls out of the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace."),(0,o.kt)("p",null,"You can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"try/catch")," function to intercept any non success response and take actions on the results, such as logging the message or performing additional actions before exiting the program:"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'# Catch any non 2xx response and log the status code and error message\ntry {\n    Get-Transforms -Filters "id eq"\n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block will handle the error, and the script execution will continue. If you want to stop the scripts execution, include an ",(0,o.kt)("inlineCode",{parentName:"p"},"Exit")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block:"),(0,o.kt)("p",null,"This code ensures that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get-AccessProfiles")," cmdlet will never be called:"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'# Catch any non 2xx response and log the status code and error message. Stop the script with the Exit keyword.\ntry {\n    Get-Transforms -Filters "id eq"\n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n    Exit\n}\n\nGet-AccessProfiles\n')))}y.isMDXComponent=!0}}]);
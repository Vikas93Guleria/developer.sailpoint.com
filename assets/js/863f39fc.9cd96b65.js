"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[61345],{44884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>f,metadata:()=>k,toc:()=>N});var o=a(3905),l=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(r)for(var a of r(t))p.call(t,a)&&d(e,a,t[a]);return e},c=(e,t)=>i(e,n(t)),u=(e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&p.call(e,o)&&(a[o]=e[o]);return a};const f={id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},h=void 0,k={unversionedId:"tools/cli/cli-spconfig",id:"tools/cli/cli-spconfig",title:"SP Config",description:"Learn how to use the CLI to SPConfig.",source:"@site/docs/tools/cli/spconfig.md",sourceDirName:"tools/cli",slug:"/tools/cli/spconfig",permalink:"/docs/tools/cli/spconfig",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/spconfig.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:5,frontMatter:{id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-Set",permalink:"/docs/tools/cli/set"},next:{title:"CLI Transforms",permalink:"/docs/tools/cli/transforms"}},g={},N=[{value:"SPConfig",id:"spconfig",level:2},{value:"Commands",id:"commands",level:2},{value:"Download",id:"download",level:3},{value:"Flags",id:"flags",level:4},{value:"Import",id:"import",level:3},{value:"Flags",id:"flags-1",level:4},{value:"Export",id:"export",level:3},{value:"Flags",id:"flags-2",level:4},{value:"Status",id:"status",level:3},{value:"Flags",id:"flags-3",level:4},{value:"Template",id:"template",level:3},{value:"Flags",id:"flags-4",level:4}],C={toc:N},b="wrapper";function w(e){var t=e,{components:a}=t,l=u(t,["components"]);return(0,o.kt)(b,c(m(m({},C),l),{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",m({},{id:"spconfig"}),"SPConfig"),(0,o.kt)("p",null,"Learn how to use the CLI to import and export configurations."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/api/beta/sp-config"}),"SP Config APIs")," to import configurations into ISC and export them out."),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"spconfig")," command, you can access the same functionality."),(0,o.kt)("h2",m({},{id:"commands"}),"Commands"),(0,o.kt)("p",null,"To perform SPConfig operations, you can run these commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#spconfig"}),"SPConfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#commands"}),"Commands"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#download"}),"Download"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#flags"}),"Flags")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#import"}),"Import"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#flags-1"}),"Flags")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#export"}),"Export"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#flags-2"}),"Flags")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#status"}),"Status"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#flags-3"}),"Flags")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#template"}),"Template"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"#flags-4"}),"Flags"))))))),(0,o.kt)("h3",m({},{id:"download"}),"Download"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"download")," command to download import and export job results from ISC. The ",(0,o.kt)("inlineCode",{parentName:"p"},"download")," command is specified differently for ",(0,o.kt)("strong",{parentName:"p"},"Linux/Mac")," and ",(0,o.kt)("strong",{parentName:"p"},"Windows"),", respectively."),(0,o.kt)("p",null,"To download import and export job results from ISC on ",(0,o.kt)("strong",{parentName:"p"},"Linux/Mac"),", run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),"sail spconfig download \\\n  --export {export job ID} \\\n  --export {export job ID}\n")),(0,o.kt)("p",null,"To download import and export job results from ISC on ",(0,o.kt)("strong",{parentName:"p"},"Windows"),", run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),"sail spconfig download \\\n  --export {export job ID} \\\n  --import {import job ID}\n")),(0,o.kt)("h4",m({},{id:"flags"}),"Flags"),(0,o.kt)("p",null,"You can add these flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"download")," command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import"),": Add this flag to specify the import job ID to download."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"export"),": Add this flag to specify the export job ID to download."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"folderPath"),": Add this flag to specify the folder path to save the download in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")),(0,o.kt)("h3",m({},{id:"import"}),"Import"),(0,o.kt)("p",null,"To begin an import task in ISC, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),"sail spconfig import \\\n  --filePath path/to/the/import/file\n")),(0,o.kt)("h4",m({},{id:"flags-1"}),"Flags"),(0,o.kt)("p",null,"You can add these flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"folderPath"),": Add this flag to specify the folder path to save the import job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")),(0,o.kt)("h3",m({},{id:"export"}),"Export"),(0,o.kt)("p",null,"To begin an export task in ISC, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),'sail spconfig export \\\n  --include {types to include} \\\n  --exclude {types to exclude} \\\n  --description "optional description for the export job"\n')),(0,o.kt)("h4",m({},{id:"flags-2"}),"Flags"),(0,o.kt)("p",null,"You can add these flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"include"),": Add this flag to specify the types to include in the export job."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"exclude"),": Add this flag to specify the types to exclude from the export job."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description"),": Add this flag to provide an optional description for the export job."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"folderPath"),": Use this flag to specify the folder path you want to save the export job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wait"),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.")),(0,o.kt)("h3",m({},{id:"status"}),"Status"),(0,o.kt)("p",null,"To check the status of import and export jobs in ISC, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),"sail spconfig status --import {import job ID to check} --export {export job ID to check}\n")),(0,o.kt)("h4",m({},{id:"flags-3"}),"Flags"),(0,o.kt)("p",null,"You can add these flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import"),": Add this flag to specify a list of import job IDs to check the status of. This examples shows how"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"export"),": Add this flag to specify a list of export job IDs to check the status of.")),(0,o.kt)("h3",m({},{id:"template"}),"Template"),(0,o.kt)("p",null,"To begin exporting a template from ISC, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-shell"}),"sail spconfig template\n")),(0,o.kt)("h4",m({},{id:"flags-4"}),"Flags"),(0,o.kt)("p",null,"You can add these flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"folderPath"),": Use this flag to specify the folder path you want to save the template in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wait"),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.")))}w.isMDXComponent=!0}}]);
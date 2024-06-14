"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[15634],{4527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>S,frontMatter:()=>y,metadata:()=>v,toc:()=>k});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))d.call(t,a)&&u(e,a,t[a]);return e},p=(e,t)=>o(e,c(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const y={id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/connectivity/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},b=void 0,v={unversionedId:"connectivity/saas-connectivity/connector-commands/source-data-read",id:"connectivity/saas-connectivity/connector-commands/source-data-read",title:"Source Data Read",description:"Read source data.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/source-data-read.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/source-data-read",permalink:"/docs/connectivity/saas-connectivity/commands/source-data-read",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/source-data-read.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/connectivity/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Discover",permalink:"/docs/connectivity/saas-connectivity/commands/source-data-discover"},next:{title:"Test Connection",permalink:"/docs/connectivity/saas-connectivity/commands/test-connection"}},h={},k=[{value:"Example StdSourceDataReadInput",id:"example-stdsourcedatareadinput",level:3},{value:"Example StdSourceDataReadOutput",id:"example-stdsourcedatareadoutput",level:3},{value:"Description",id:"description",level:2}],f={toc:k},g="wrapper";function S(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(g,p(l(l({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Input/Output"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"Data Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Input"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"StdSourceDataReadInput")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Output"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"StdSourceDataReadOutput")))),(0,n.kt)("h3",l({},{id:"example-stdsourcedatareadinput"}),"Example StdSourceDataReadInput"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),'{\n    "sourceDataKey": "name",\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n')),(0,n.kt)("h3",l({},{id:"example-stdsourcedatareadoutput"}),"Example StdSourceDataReadOutput"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),"[\n  {\n    key: 'id',\n    label: 'Id',\n    subLabel: 'Airtable Base Id',\n  },\n  {\n    key: 'name',\n    label: 'Name',\n    subLabel: 'Airtable Source Table Name',\n  },\n];\n")),(0,n.kt)("h2",l({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Use the source data read command to query a source in Identity Security Cloud and return a set of data. This data is typically used to populate a dropdown menu for selection purposes. This functionality is typically useful for Identity Security Cloud forms, but it can be used for any type of implementation that requires you to get other information from a source, information that is not normally retrieved from identites or entitlements."),(0,n.kt)("p",null,"This is a simple example of the source data read command. It is implemented to retrieve the base ID name. The ",(0,n.kt)("inlineCode",{parentName:"p"},"sourceDataKey")," is required, the ",(0,n.kt)("inlineCode",{parentName:"p"},"source data read")," command should return it."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n")),(0,n.kt)("p",null,"You can optionally use ",(0,n.kt)("inlineCode",{parentName:"p"},"input.queryInput.query")," to make the list searchable. One way you could do this is to import a tool like ",(0,n.kt)("a",l({parentName:"p"},{href:"https://github.com/AlaSQL/alasql"}),"alasql")," and allow the user to implement a search on the dataset. This example from Airtable shows how you could use the source data read command to get accounts and allow a search to be performed with the Airtable API:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else if (input.sourceDataKey === 'accounts' && input.queryInput?.query) {\n        let accounts = await airtable.queryAccounts(input.queryInput.query)\n        let result: StdSourceDataReadOutput = []\n        for (let account of accounts) {\n            result.push({ key: account.id, label: account.displayName, subLabel: account.email })\n        }\n        res.send(result)\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n\n// airtable.ts implementation of queryAccounts:\n\nasync queryAccounts(query: string): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view',\n        filterByFormula: `SEARCH(LOWER(\"${query}\"), LOWER(displayName)) > 0`\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n\n")),(0,n.kt)("p",null,'Now, if the source system sends a command like the following, the system will only get results that contain the name "Adam":'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),'    "type": "std:source-data:read",\n    "input": {\n        "queryInput": {\n            "query": "Adam"\n        }\n    },\n')))}S.isMDXComponent=!0}}]);
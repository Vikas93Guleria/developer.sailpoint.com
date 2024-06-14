"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[51369],{66349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>S,frontMatter:()=>y,metadata:()=>k,toc:()=>g});var o=n(3905),a=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,r(t)),u=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n};const y={id:"python-sdk-search",title:"Search with The Python SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","search"],description:"Learn how to use the Python SDK to search.",slug:"/tools/sdk/python/search",tags:["SDK"]},m=void 0,k={unversionedId:"tools/sdk/python/python-sdk-search",id:"tools/sdk/python/python-sdk-search",title:"Search with The Python SDK",description:"Learn how to use the Python SDK to search.",source:"@site/docs/tools/sdk/python/search.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/search",permalink:"/docs/tools/sdk/python/search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/search.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:6,frontMatter:{id:"python-sdk-search",title:"Search with The Python SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","search"],description:"Learn how to use the Python SDK to search.",slug:"/tools/sdk/python/search",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Paginate Results",permalink:"/docs/tools/sdk/python/paginate"},next:{title:"Retries",permalink:"/docs/tools/sdk/python/retries"}},f={},g=[],b={toc:g},w="wrapper";function S(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,o.kt)(w,d(h(h({},b),a),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most useful functionalities you can access with the Python SDK is Identity Security Cloud's ",(0,o.kt)("a",h({parentName:"p"},{href:"/idn/api/v3/search-post"}),"search functionality"),". "),(0,o.kt)("p",null,'Here is an example of how you can implement Search, along with pagination. Copy this code into your "sdk.py" file to try it out: '),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-python"}),"\nimport sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.paginator import Paginator\n\nconfiguration = Configuration()\n\napi_client = sailpoint.v3.ApiClient(configuration)\n\nsearch = sailpoint.v3.Search(\n    indices=['identities'], \n    query=sailpoint.v3.Query(query='*'), \n    sort=['-name'])\n    \nidentities = Paginator.paginate_search(sailpoint.v3.SearchApi(api_client), search, increment=100, limit=1000)\n\nprint(identities.count)\n")),(0,o.kt)("p",null,"Run this command to run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"python sdk.py\n")),(0,o.kt)("p",null,"This example returns 1000 identities, 100 per page, and sorts them in descending order by name (",(0,o.kt)("inlineCode",{parentName:"p"},"'-name'"),'). You can also change the search pagination by changing "100" and "1000", respectively.'),(0,o.kt)("p",null,"There are two main ways you can manipulate this example to search for the results you want: "),(0,o.kt)("p",null,"The first way is to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"indices"),", the document types you want to limit your search to. For example, if you add ",(0,o.kt)("inlineCode",{parentName:"p"},'"access profiles"')," to the indices, the SDK will search access profiles too. To see all the indices you can search, refer to the ",(0,o.kt)("a",h({parentName:"p"},{href:"/idn/api/v3/search-post"}),"Search endpoint specification"),". "),(0,o.kt)("p",null,"The second way is to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),', the value you\'re searching for. For example, if you change the query to "a*", the search will return all records starting with the letter "a". To learn more about how to build search queries, refer to ',(0,o.kt)("a",h({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/search/building-query.html"}),"Building a Search Query"),". "),(0,o.kt)("p",null,"You can also change the sorting logic in the brackets next to ",(0,o.kt)("inlineCode",{parentName:"p"},"sort"),". For more information about sorting results, refer to ",(0,o.kt)("a",h({parentName:"p"},{href:"/idn/api/standard-collection-parameters/#sorting-results"}),"Sorting Results"),"."))}S.isMDXComponent=!0}}]);
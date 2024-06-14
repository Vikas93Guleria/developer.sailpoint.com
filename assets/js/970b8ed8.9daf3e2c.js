"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[35453],{28667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>v,frontMatter:()=>g,metadata:()=>k,toc:()=>h});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const g={id:"account-profile-attribute-generator",title:"Account Profile Attribute Generator",pagination_label:"Account Profile Attribute Generator",sidebar_label:"Account Profile Attribute Generator",sidebar_class_name:"accountProfileAttributeGenerator",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",tags:["Rules"]},b=void 0,k={unversionedId:"extensibility/rules/cloud-rules/account-profile-attribute-generator",id:"extensibility/rules/cloud-rules/account-profile-attribute-generator",title:"Account Profile Attribute Generator",description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",source:"@site/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1718394804,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"account-profile-attribute-generator",title:"Account Profile Attribute Generator",pagination_label:"Account Profile Attribute Generator",sidebar_label:"Account Profile Attribute Generator",sidebar_class_name:"accountProfileAttributeGenerator",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Cloud Executed Rules",permalink:"/docs/extensibility/rules/cloud-rules"},next:{title:"Account Profile Attribute Generator (from Template)",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template"}},f={},h=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Generate Username",id:"example---generate-username",level:2}],y={toc:h},N="wrapper";function v(e){var t=e,{components:a}=t,i=m(t,["components"]);return(0,r.kt)(N,d(p(p({},y),i),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",p({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"This rule generates complex account attribute values during provisioning, e.g. when creating an account. You would typically use this rule when you are creating an account to generate attributes like usernames, first time passwords, or email addresses."),(0,r.kt)("h2",p({},{id:"execution"}),"Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:n(44490).Z,width:"1594",height:"635"})),(0,r.kt)("h2",p({},{id:"input"}),"Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Argument"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"log"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"org.apache.log4j.Logger"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Logger to log statements. ",(0,r.kt)("em",{parentName:"td"},"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"idn"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.server.IdnRuleUtil"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,r.kt)("a",p({parentName:"td"},{href:"/docs/extensibility/rules/rule-utility"}),"IdnRuleUtil"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"identity"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.object.Identity"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Reference to identity object representing the identity being calculated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"application"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.object.Application"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Read-only reference to application object that represents the source to which provisioning is being done.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"field"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.object.Field"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Field object used to get information about the attribute being generated.")))),(0,r.kt)("h2",p({},{id:"output"}),"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Argument"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"value"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"java.lang.Object"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Value returned for the account attribute.")))),(0,r.kt)("h2",p({},{id:"template"}),"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-xml"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h2",p({},{id:"example---generate-username"}),"Example - Generate Username"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule language="beanshell" name="Generate Username" type="AttributeGenerator">\n  <Description>This will generate a username.</Description>\n  <Source><![CDATA[\nimport sailpoint.tools.GeneralException;\nimport java.util.Iterator;\nimport sailpoint.object.*;\nimport java.util.ArrayList;\nimport sailpoint.api.*;\nimport sailpoint.object.*;\nimport java.util.Iterator;\nimport java.util.List;\nimport org.apache.commons.lang.StringUtils;\n\nint maxIteration = 1000;\n\npublic String generateUsername ( String firstName,  String lastName, int iteration ) {\n\n  // Data protection.\n  firstName = StringUtils.trimToNull( firstName );\n  lastName = StringUtils.trimToNull( lastName );\n\n  if ( ( firstName == null ) || ( lastName == null ) )\n  return null;\n\n  // This will hold the final username;\n  String username = null;\n\n  switch ( iteration ) {\n    case 0:\n      username = firstName + "." + lastName;\n      break;\n    default:\n      username = firstName + "." + lastName + ( iteration - 1 );\n      break;\n  }\n  if ( isUnique ( username ) )\n    return username;\n  else if ( iteration < maxIteration )\n    return generateUsername ( firstName,  lastName, ( iteration + 1 ) );\n  else\n    return null;\n}\n\npublic boolean isUnique ( String username ) throws GeneralException {\n  return !idn.accountExistsByDisplayName(application.getName(), username);\n}\n\nreturn generateUsername( identity.getFirstname(), identity.getLastname(), 0 );\n\n  ]]></Source>\n</Rule>\n')))}v.isMDXComponent=!0},44490:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);
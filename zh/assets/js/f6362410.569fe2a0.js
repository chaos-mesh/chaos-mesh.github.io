"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[27629],{49613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,c=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return n?a.createElement(c,o(o({ref:e},d),{},{components:n})):a.createElement(c,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60135:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(60795),r=(n(59496),n(49613));const l={title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42"},o=void 0,i={unversionedId:"send-http-request-on-workflow",id:"version-2.6.0/send-http-request-on-workflow",title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",description:"Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86 Task \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 Job\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e Task \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/send-http-request-on-workflow.md",sourceDirName:".",slug:"/send-http-request-on-workflow",permalink:"/zh/docs/send-http-request-on-workflow",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/send-http-request-on-workflow.md",tags:[],version:"2.6.0",frontMatter:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42"},sidebar:"docs",previous:{title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",permalink:"/zh/docs/run-serial-or-parallel-experiments"},next:{title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",permalink:"/zh/docs/check-workflow-status"}},p={},s=[{value:"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42",id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9",id:"\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42",id:"\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9",id:"\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9",level:3},{value:"\u8868\u5355\u5b57\u6bb5",id:"\u8868\u5355\u5b57\u6bb5",level:2}],d={toc:s},u="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Job"),"\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Chaos Mesh \u4e2d\u4e0d\u5b58\u5728\u5c5e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u8282\u70b9\u3002\u672c\u7279\u6027\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," \u8282\u70b9\uff0c\u7528\u4e8e\u66f4\u65b9\u4fbf\u5730\u53d1\u9001 HTTP \u8bf7\u6c42\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u524d\u8be5\u529f\u80fd\u4e3a\u5b9e\u9a8c\u7279\u6027\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u5176\u914d\u7f6e\u4e0e\u884c\u4e3a\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u53d1\u751f\u53d8\u5316\u3002")),(0,r.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42"},"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5728 Chaos Dashboard \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\uff0c\u5177\u4f53\u64cd\u4f5c\u4ee5\u901a\u8fc7 Slack Webhook \u53d1\u9001\u6d88\u606f\u4e3a\u4f8b\u3002"),(0,r.kt)("h3",{id:"\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9"},"\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9"),(0,r.kt)("p",null,'\u4efb\u52a1\u7c7b\u578b\u9009\u4e3a"HTTP \u8bf7\u6c42" :'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-http-request-workflow-node",src:n(9698).Z,width:"676",height:"926"})),(0,r.kt)("h3",{id:"\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42"},"\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42"),(0,r.kt)("p",null,"\u5b8c\u6210\u5bf9\u4ee5\u4e0b\u914d\u7f6e\u7684\u8bbe\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8282\u70b9\u540d\u79f0\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"send-slack-message")),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5730\u5740\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX")),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},'{"text": "Hello, world."}'),'\uff0c\u5e76\u52fe\u9009 "\u4e3a JSON \u5185\u5bb9"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configure-http-request-workflow-node",src:n(1717).Z,width:"2010",height:"1164"})),(0,r.kt)("h3",{id:"\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9"},"\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u63d0\u4ea4\u201d\u6309\u94ae\uff0c\u5373\u53ef\u5728\u9884\u89c8\u7a97\u53e3\u67e5\u770b\u521b\u5efa\u7684\u4efb\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"http-request-task-node-preview",src:n(56742).Z,width:"1078",height:"1086"})),(0,r.kt)("h2",{id:"\u8868\u5355\u5b57\u6bb5"},"\u8868\u5355\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send-slack-message"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"text": "Hello, world."}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8ddf\u968f 301/302 \u8df3\u8f6c"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u53c2\u6570\u7684\u503c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"curl")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"-L")," \u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a JSON \u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u53c2\u6570\u4f1a\u5c06",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json")," \u6dfb\u52a0\u81f3 HTTP \u8bf7\u6c42\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"\u751f\u6210\u7684\u4efb\u52a1\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u7684\u503c\u4f1a\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"http-request"),' \u540e\u7f00\u52a0\u5230"\u540d\u79f0"\u7684\u540e\u9762\u3002'))}k.isMDXComponent=!0},1717:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/configure-http-request-workflow-node_zh-709f34ac46e370ffb3ff1ccb9d638afd.png"},9698:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/create-http-request-workflow-node_zh-5674b5cb05d294c2a80622b4976c4d0f.png"},56742:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png"}}]);
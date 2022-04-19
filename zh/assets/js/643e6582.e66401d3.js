"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5982],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2214:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42"},p=void 0,s={unversionedId:"send-http-request-on-workflow",id:"version-2.1.5/send-http-request-on-workflow",isDocsHomePage:!1,title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",description:"Chaos Mesh Workflow \u63d0\u4f9b\u4e86 Task \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 Job\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e Task \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.5/send-http-request-on-workflow.md",sourceDirName:".",slug:"/send-http-request-on-workflow",permalink:"/zh/docs/send-http-request-on-workflow",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.5/send-http-request-on-workflow.md",tags:[],version:"2.1.5",frontMatter:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42"},sidebar:"version-2.1.5/docs",previous:{title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",permalink:"/zh/docs/run-chaos-experiments-in-serial-or-parallel"},next:{title:"\u68c0\u67e5 Workflow \u72b6\u6001",permalink:"/zh/docs/check-workflow-status"}},d=[{value:"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42",id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42",children:[{value:"\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9",id:"\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9",children:[],level:3},{value:"\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42",id:"\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42",children:[],level:3},{value:"\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9",id:"\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9",children:[],level:3}],level:2},{value:"\u8868\u5355\u5b57\u6bb5",id:"\u8868\u5355\u5b57\u6bb5",children:[],level:2}],u={toc:d};function c(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Chaos Mesh Workflow \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Job"),"\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Chaos Mesh \u4e2d\u4e0d\u5b58\u5728\u5c5e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u8282\u70b9\u3002\u672c\u7279\u6027\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," \u8282\u70b9\uff0c\u7528\u4e8e\u66f4\u65b9\u4fbf\u5730\u53d1\u9001 HTTP \u8bf7\u6c42\u3002"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5f53\u524d\u8be5\u529f\u80fd\u4e3a\u5b9e\u9a8c\u7279\u6027\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u5176\u914d\u7f6e\u4e0e\u884c\u4e3a\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u53d1\u751f\u53d8\u5316\u3002"))),(0,l.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42"},"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5728 Chaos Dashboard \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\uff0c\u5177\u4f53\u64cd\u4f5c\u4ee5\u901a\u8fc7 Slack Webhook \u53d1\u9001\u6d88\u606f\u4e3a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9"},"\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9"),(0,l.kt)("p",null,'\u4efb\u52a1\u7c7b\u578b\u9009\u4e3a"HTTP \u8bf7\u6c42" :'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create-http-request-workflow-node",src:n(59463).Z})),(0,l.kt)("h3",{id:"\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42"},"\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42"),(0,l.kt)("p",null,"\u5b8c\u6210\u5bf9\u4ee5\u4e0b\u914d\u7f6e\u7684\u8bbe\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u540d\u79f0\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"send-slack-message")),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX")),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u6cd5\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"POST")),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},'{"text": "Hello, world."}'),'\uff0c\u5e76\u52fe\u9009 "\u4e3a JSON \u5185\u5bb9"')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"configure-http-request-workflow-node",src:n(47717).Z})),(0,l.kt)("h3",{id:"\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9"},"\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9"),(0,l.kt)("p",null,"\u70b9\u51fb\u201c\u63d0\u4ea4\u201d\u6309\u94ae\uff0c\u5373\u53ef\u5728\u9884\u89c8\u7a97\u53e3\u67e5\u770b\u521b\u5efa\u7684\u4efb\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"http-request-task-node-preview",src:n(33491).Z})),(0,l.kt)("h2",{id:"\u8868\u5355\u5b57\u6bb5"},"\u8868\u5355\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"send-slack-message"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POST"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"text": "Hello, world."}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8ddf\u968f 301/302 \u8df3\u8f6c"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u53c2\u6570\u7684\u503c\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"td"},"curl")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"-L")," \u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a JSON \u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u53c2\u6570\u4f1a\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json")," \u6dfb\u52a0\u81f3 HTTP \u8bf7\u6c42\u5934"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("p",null,"\u751f\u6210\u7684\u4efb\u52a1\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u7684\u503c\u4f1a\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"http-request"),' \u540e\u7f00\u52a0\u5230"\u540d\u79f0"\u7684\u540e\u9762\u3002'))}c.isMDXComponent=!0},47717:function(t,e,n){e.Z=n.p+"assets/images/configure-http-request-workflow-node_zh-709f34ac46e370ffb3ff1ccb9d638afd.png"},59463:function(t,e,n){e.Z=n.p+"assets/images/create-http-request-workflow-node_zh-5674b5cb05d294c2a80622b4976c4d0f.png"},33491:function(t,e,n){e.Z=n.p+"assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png"}}]);
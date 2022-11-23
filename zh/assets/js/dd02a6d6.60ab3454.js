"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[83356],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=m(a),N=l,s=u["".concat(d,".").concat(N)]||u[N]||k[N]||r;return a?n.createElement(s,p(p({ref:e},o),{},{components:a})):n.createElement(s,p({ref:e},o))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43434:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u6a21\u62df HTTP \u6545\u969c"},p=void 0,i={unversionedId:"simulate-http-chaos-on-kubernetes",id:"simulate-http-chaos-on-kubernetes",title:"\u6a21\u62df HTTP \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-http-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-http-chaos-on-kubernetes",permalink:"/zh/docs/next/simulate-http-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/simulate-http-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df HTTP \u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df GCP \u6545\u969c",permalink:"/zh/docs/next/simulate-gcp-chaos"},next:{title:"Simulate Block Device Latency",permalink:"/zh/docs/next/simulate-block-chaos-on-kubernetes"}},d={},m=[{value:"HTTPChaos \u7b80\u4ecb",id:"httpchaos-\u7b80\u4ecb",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528 Dashboard \u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"<code>abort</code> \u793a\u4f8b",id:"abort-\u793a\u4f8b",level:3},{value:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b",id:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b",level:3},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e",id:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u4e0e <code>target</code> \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",id:"\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"<code>Request</code> \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",id:"request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"<code>Response</code> \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",id:"response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",level:2}],o={toc:m};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002"),(0,l.kt)("h2",{id:"httpchaos-\u7b80\u4ecb"},"HTTPChaos \u7b80\u4ecb"),(0,l.kt)("p",null,"HTTPChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df ",(0,l.kt)("strong",{parentName:"p"},"HTTP \u670d\u52a1\u7aef"),"\u5728\u8bf7\u6c42\u6216\u54cd\u5e94\u8fc7\u7a0b\u4e2d\u53d1\u751f\u6545\u969c\u7684\u573a\u666f\u3002\u76ee\u524d\uff0cHTTPChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abort"),"\uff1a\u4e2d\u65ad\u670d\u52a1\u7aef\u7684\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay"),"\uff1a\u4e3a\u76ee\u6807\u8fc7\u7a0b\u6ce8\u5165\u5ef6\u8fdf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace"),"\uff1a\u66ff\u6362\u8bf7\u6c42\u62a5\u6587\u6216\u8005\u54cd\u5e94\u62a5\u6587\u7684\u90e8\u5206\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"patch"),"\uff1a\u7ed9\u8bf7\u6c42\u62a5\u6587\u6216\u54cd\u5e94\u62a5\u6587\u6dfb\u52a0\u989d\u5916\u5185\u5bb9")),(0,l.kt)("p",null,"HTTPChaos \u652f\u6301\u591a\u79cd\u7c7b\u578b\u6545\u969c\u7684\u7ec4\u5408\u3002\u5728\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u65f6\uff0c\u5982\u679c\u540c\u65f6\u914d\u7f6e\u4e86\u591a\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u5b9e\u9a8c\u8fd0\u884c\u65f6\u6ce8\u5165\u6545\u969c\u7684\u4f18\u5148\u7ea7\uff08\u987a\u5e8f\uff09\u56fa\u5b9a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"patch"),"\u3002\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," \u6545\u969c\u4f1a\u5bfc\u81f4\u77ed\u8def\uff0c\u76f4\u63a5\u4e2d\u65ad\u6b64\u6b21\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e HTTPChaos \u8be6\u7ec6\u7684\u914d\u7f6e\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5b57\u6bb5\u8bf4\u660e"),"\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u5728\u6ce8\u5165 HTTPChaos \u76f8\u5173\u6545\u969c\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u76ee\u6807\u670d\u52a1\u7981\u7528\u4e86 HTTPS \u8bbf\u95ee\uff0c\u56e0\u4e3a HTTPChaos \u6682\u4e0d\u652f\u6301\u6ce8\u5165 HTTPS \u8fde\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4f7f HTTPChaos \u6ce8\u5165\u751f\u6548\uff0c\u5c3d\u91cf\u907f\u514d\u590d\u7528\u5ba2\u6237\u7aef\u7684 TCP socket\u3002\u56e0\u4e3a\u5728\u6ce8\u5165\u6545\u969c\u524d\u5efa\u7acb\u7684 TCP socket \u4e0a\u8fdb\u884c HTTP \u8bf7\u6c42\u4e0d\u53d7 HTTPChaos \u5f71\u54cd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8c28\u614e\u4f7f\u7528\u975e\u5e42\u7b49\u8bed\u4e49\u8bf7\u6c42\uff08\u4f8b\u5982\u5927\u591a\u6570 POST \u8bf7\u6c42\uff09\u3002\u82e5\u4f7f\u7528\u4e86\u8fd9\u7c7b\u8bf7\u6c42\uff0c\u6ce8\u5165\u6545\u969c\u540e\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7\u91cd\u590d\u8bf7\u6c42\u4f7f\u76ee\u6807\u670d\u52a1\u6062\u590d\u6b63\u5e38\u72b6\u6001\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(65328).Z,width:"982",height:"648"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u533a\u57df\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"HTTP \u6545\u969c"),"\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"RESPONSE ABORT"),"\uff09\uff0c\u5e76\u586b\u5199\u5177\u4f53\u914d\u7f6e\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa HTTP \u6545\u969c",src:a(14655).Z,width:"1089",height:"1219"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0a\u56fe\u4e3a\u4f8b\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u4ea4"),"\u5373\u5b8c\u6210\u4e86\u5bf9 80 \u7aef\u53e3\u6240\u6709\u8bf7\u6c42\u7684\u54cd\u5e94\u4e2d\u65ad\u914d\u7f6e\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"Chaos Mesh \u4e5f\u652f\u6301\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u3002\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u4e00\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u6a21\u62df\u591a\u79cd HTTP \u6545\u969c\u7684\u7ec4\u5408\u3002"),(0,l.kt)("h3",{id:"abort-\u793a\u4f8b"},(0,l.kt)("inlineCode",{parentName:"h3"},"abort")," \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http-abort-failure.yaml")," \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," \u6545\u969c 5 \u5206\u949f\uff0c\u6545\u969c\u6ce8\u5165\u671f\u95f4\u8be5 Pod \u7684 80 \u7aef\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api")," \u8def\u5f84\u7684 GET \u8bf7\u6c42\u4f1a\u88ab\u4e2d\u65ad\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-abort-failure.yaml\n")))),(0,l.kt)("h3",{id:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b"},"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http-failure.yaml")," \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u5206\u522b\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," \u6545\u969c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," \u6545\u969c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"patch")," \u6545\u969c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-failure.yaml\n")))),(0,l.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"},"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u901a\u7528\u5b57\u6bb5\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a Request \u6216 Response \u65f6\u5747\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u53d6\u503c\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"Request")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"Response"),"\uff0c\u9700\u8981\u540c\u65f6\u914d\u7f6e",(0,l.kt)("a",{parentName:"td",href:"#%E4%B8%8E-target-%E7%9B%B8%E5%85%B3%E7%9A%84%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"a"},"target")," \u76f8\u5173\u7684\u5b57\u6bb5")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u670d\u52a1\u76d1\u542c\u7684 TCP \u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 URI \u8def\u5f84\uff0c\u652f\u6301",(0,l.kt)("a",{parentName:"td",href:"https://www.wikiwand.com/en/Matching_wildcards"},"\u901a\u914d\u7b26")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8def\u5f84\u751f\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 HTTP method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u65b9\u6cd5\u751f\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"request_headers")),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u5339\u914d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"abort")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6ce8\u5165\u8fde\u63a5\u4e2d\u65ad\u6545\u969c"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"delay")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5ef6\u8fdf\u6545\u969c\u7684\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"10s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.headers")),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u66ff\u6362\u6545\u969c\u4e2d\u7528\u4e8e\u66ff\u6362\u7684\u952e\u503c\u5bf9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/xml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.body")),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u66ff\u6362\u6545\u969c\u7684\u5185\u5bb9\uff08base64 \u7f16\u7801\uff09"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"eyJmb28iOiAiYmFyIn0K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch.headers")),(0,l.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[Set-Cookie, one cookie]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch.body.type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301 ",(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7396"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch.body.value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u6545\u969c\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'{"foo": "bar"}')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u8fd0\u884c\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5 ","*"," ","*"," ","*"," ","*")))),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"replace.body")," \u5fc5\u987b\u4e3a\u66ff\u6362\u5185\u5bb9\u7684 Base64 \u7f16\u7801\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4f7f\u7528 Kubernetes API \u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u65e0\u9700\u5c06\u66ff\u6362\u7684\u5185\u5bb9\u8fdb\u884c Base64 \u7f16\u7801\uff0c\u76f4\u63a5\u5c06\u5176\u8f6c\u6362\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"[]byte")," \u540e\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"httpchaos.Spec.Replace.Body")," \u5b57\u6bb5\u5373\u53ef\u3002\u4f8b\u5982\uff1a"))),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'httpchaos.Spec.Replace.Body = []byte(`{"foo": "bar"}`)\n'))),(0,l.kt)("h3",{id:"\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"h3"},"target")," \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("h3",{id:"request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},(0,l.kt)("inlineCode",{parentName:"h3"},"Request")," \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Request")," \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," \uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Request"),"\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI \u8def\u5f84\u66ff\u6362\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/v2/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.method")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42 HTTP \u65b9\u6cd5\u7684\u66ff\u6362\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.queries")),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u7684\u66ff\u6362\u952e\u503c\u5bf9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"foo: bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch.queries")),(0,l.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[foo, bar]")))),(0,l.kt)("h3",{id:"response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},(0,l.kt)("inlineCode",{parentName:"h3"},"Response")," \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")," \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Response")," \uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Response"),"\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u72b6\u6001\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u72b6\u6001\u7801\u751f\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"response_headers")),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u54cd\u5e94\u5934\u5339\u914d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u54cd\u5e94\u751f\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace.code")),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u54cd\u5e94\u72b6\u6001\u7801\u7684\u66ff\u6362\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"404")))),(0,l.kt)("h2",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u67d0\u79cd\u6545\u969c\u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rs-tproxy"},"rs-tproxy")," \u5728\u672c\u5730\u6d4b\u8bd5\u76f8\u5e94\u529f\u80fd\u3002Chaos Mesh \u540c\u6837\u4f7f\u7528 rs-tproxy \u5b9e\u73b0 HTTPChaos\u3002"))}k.isMDXComponent=!0},65328:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},14655:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-new-httpchaos-d7cb30f5ac1586585b27241eef6ec383.png"}}]);
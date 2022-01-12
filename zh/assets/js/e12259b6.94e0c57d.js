"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4767],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),N=l,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||r;return a?n.createElement(s,p(p({ref:e},m),{},{components:a})):n.createElement(s,p({ref:e},m))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},82154:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),p=["components"],i={title:"\u6a21\u62df HTTP \u6545\u969c"},d=void 0,o={unversionedId:"simulate-http-chaos-on-kubernetes",id:"version-2.0.6/simulate-http-chaos-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df HTTP \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/simulate-http-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-http-chaos-on-kubernetes",permalink:"/zh/docs/2.0.6/simulate-http-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/simulate-http-chaos-on-kubernetes.md",tags:[],version:"2.0.6",frontMatter:{title:"\u6a21\u62df HTTP \u6545\u969c"},sidebar:"version-2.0.6/docs",previous:{title:"\u6a21\u62df GCP \u6545\u969c",permalink:"/zh/docs/2.0.6/simulate-gcp-chaos"},next:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/zh/docs/2.0.6/chaosd-overview"}},m=[{value:"HTTPChaos \u7b80\u4ecb",id:"httpchaos-\u7b80\u4ecb",children:[],level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[],level:2},{value:"\u521b\u5efa\u5b9e\u9a8c",id:"\u521b\u5efa\u5b9e\u9a8c",children:[{value:"<code>abort</code> \u793a\u4f8b",id:"abort-\u793a\u4f8b",children:[],level:3},{value:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b",id:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[{value:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e",id:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e",children:[],level:3},{value:"\u4e0e <code>target</code> \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",id:"\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",children:[],level:3},{value:"Request \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",id:"request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",children:[],level:3},{value:"Response \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",id:"response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e",children:[],level:3}],level:2},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",children:[],level:2}],u={toc:m};function k(t){var e=t.components,a=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002"),(0,r.kt)("h2",{id:"httpchaos-\u7b80\u4ecb"},"HTTPChaos \u7b80\u4ecb"),(0,r.kt)("p",null,"HTTPChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df ",(0,r.kt)("strong",{parentName:"p"},"HTTP \u670d\u52a1\u7aef"),"\u5728\u8bf7\u6c42\u6216\u54cd\u5e94\u8fc7\u7a0b\u4e2d\u53d1\u751f\u6545\u969c\u7684\u573a\u666f\u3002\u76ee\u524d\uff0cHTTPChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abort"),"\uff1a\u4e2d\u65ad\u670d\u52a1\u7aef\u7684\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay"),"\uff1a\u4e3a\u76ee\u6807\u8fc7\u7a0b\u6ce8\u5165\u5ef6\u8fdf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace"),"\uff1a\u66ff\u6362\u8bf7\u6c42\u62a5\u6587\u6216\u8005\u54cd\u5e94\u62a5\u6587\u7684\u90e8\u5206\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patch"),"\uff1a\u7ed9\u8bf7\u6c42\u62a5\u6587\u6216\u54cd\u5e94\u62a5\u6587\u6dfb\u52a0\u989d\u5916\u5185\u5bb9")),(0,r.kt)("p",null,"HTTPChaos \u652f\u6301\u591a\u79cd\u7c7b\u578b\u6545\u969c\u7684\u7ec4\u5408\u3002\u5728\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u65f6\uff0c\u5982\u679c\u540c\u65f6\u914d\u7f6e\u4e86\u591a\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u5b9e\u9a8c\u8fd0\u884c\u65f6\u6ce8\u5165\u6545\u969c\u7684\u4f18\u5148\u7ea7\uff08\u987a\u5e8f\uff09\u56fa\u5b9a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"patch"),"\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u6545\u969c\u4f1a\u5bfc\u81f4\u77ed\u8def\uff0c\u76f4\u63a5\u4e2d\u65ad\u6b64\u6b21\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e HTTPChaos \u8be6\u7ec6\u7684\u914d\u7f6e\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5b57\u6bb5\u8bf4\u660e"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5728\u6ce8\u5165 HTTPChaos \u76f8\u5173\u6545\u969c\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u76ee\u6807\u670d\u52a1\u7981\u7528\u4e86 HTTPS \u8bbf\u95ee\uff0c\u56e0\u4e3a HTTPChaos \u6682\u4e0d\u652f\u6301\u6ce8\u5165 HTTPS \u8fde\u63a5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4f7f HTTPChaos \u6ce8\u5165\u751f\u6548\uff0c\u5c3d\u91cf\u907f\u514d\u590d\u7528\u5ba2\u6237\u7aef\u7684 TCP socket\u3002\u56e0\u4e3a\u5728\u6ce8\u5165\u6545\u969c\u524d\u5efa\u7acb\u7684 TCP socket \u4e0a\u8fdb\u884c HTTP \u8bf7\u6c42\u4e0d\u53d7 HTTPChaos \u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8c28\u614e\u4f7f\u7528\u975e\u5e42\u7b49\u8bed\u4e49\u8bf7\u6c42\uff08\u4f8b\u5982\u5927\u591a\u6570 POST \u8bf7\u6c42\uff09\u3002\u82e5\u4f7f\u7528\u4e86\u8fd9\u7c7b\u8bf7\u6c42\uff0c\u6ce8\u5165\u6545\u969c\u540e\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7\u91cd\u590d\u8bf7\u6c42\u4f7f\u76ee\u6807\u670d\u52a1\u6062\u590d\u6b63\u5e38\u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa\u5b9e\u9a8c"},"\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("p",null,"Chaos Mesh \u652f\u6301\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u3002\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u4e00\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u6a21\u62df\u591a\u79cd HTTP \u6545\u969c\u7684\u7ec4\u5408\u3002"),(0,r.kt)("h3",{id:"abort-\u793a\u4f8b"},(0,r.kt)("inlineCode",{parentName:"h3"},"abort")," \u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"http-abort-failure.yaml")," \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u6545\u969c 5 \u5206\u949f\uff0c\u6545\u969c\u6ce8\u5165\u671f\u95f4\u8be5 Pod \u7684 80 \u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api")," \u8def\u5f84\u7684 GET \u8bf7\u6c42\u4f1a\u88ab\u4e2d\u65ad\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-abort-failure.yaml\n")))),(0,r.kt)("h3",{id:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b"},"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"http-failure.yaml")," \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u5206\u522b\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u6545\u969c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," \u6545\u969c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," \u6545\u969c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-failure.yaml\n")))),(0,r.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"},"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u901a\u7528\u5b57\u6bb5\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a Request \u6216 Response \u65f6\u5747\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u53d6\u503c\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"Request")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"Response"),"\uff0c\u9700\u8981\u540c\u65f6\u914d\u7f6e",(0,r.kt)("a",{parentName:"td",href:"#%E4%B8%8E-target-%E7%9B%B8%E5%85%B3%E7%9A%84%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"a"},"target")," \u76f8\u5173\u7684\u5b57\u6bb5")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u670d\u52a1\u76d1\u542c\u7684 TCP \u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 URI \u8def\u5f84\uff0c\u652f\u6301",(0,r.kt)("a",{parentName:"td",href:"https://www.wikiwand.com/en/Matching_wildcards"},"\u901a\u914d\u7b26")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8def\u5f84\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 HTTP method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u65b9\u6cd5\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u5339\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6ce8\u5165\u8fde\u63a5\u4e2d\u65ad\u6545\u969c"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5ef6\u8fdf\u6545\u969c\u7684\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"10s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.headers"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u66ff\u6362\u6545\u969c\u4e2d\u7528\u4e8e\u66ff\u6362\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.body"),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u66ff\u6362\u6545\u969c\u7684\u5185\u5bb9\uff08base64 \u7f16\u7801\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"eyJmb28iOiAiYmFyIn0K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"patch.headers"),(0,r.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"- ","[Set-Cookie, one cookie]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"patch.body.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301 ",(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7396"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"patch.body.value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u6545\u969c\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'{"foo": "bar"}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"30s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduler"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u8fd0\u884c\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"5 ","*"," ","*"," ","*"," ","*")))),(0,r.kt)("h3",{id:"\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"h3"},"target")," \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("h3",{id:"request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},"Request \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"Request \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a Request \uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),"\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI \u8def\u5f84\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v2/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.method`"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42 HTTP \u65b9\u6cd5\u7684\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.queries`"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u7684\u66ff\u6362\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"foo: bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"patch.queries`"),(0,r.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"- ","[foo, bar]")))),(0,r.kt)("h3",{id:"response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},"Response \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"Response \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a Response \uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u72b6\u6001\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u72b6\u6001\u7801\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u54cd\u5e94\u5934\u5339\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u54cd\u5e94\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace.code"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u54cd\u5e94\u72b6\u6001\u7801\u7684\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"404")))),(0,r.kt)("h2",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u67d0\u79cd\u6545\u969c\u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rs-tproxy"},"rs-tproxy")," \u5728\u672c\u5730\u6d4b\u8bd5\u76f8\u5e94\u529f\u80fd\u3002Chaos Mesh \u540c\u6837\u4f7f\u7528 rs-tproxy \u5b9e\u73b0 HTTPChaos\u3002"))}k.isMDXComponent=!0}}]);
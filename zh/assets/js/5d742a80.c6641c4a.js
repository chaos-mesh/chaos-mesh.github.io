"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[17350],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=s(a),u=r,N=k["".concat(m,".").concat(u)]||k[u]||d[u]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4301:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6a21\u62df\u538b\u529b\u573a\u666f"},i=void 0,p={unversionedId:"simulate-heavy-stress-on-kubernetes",id:"version-2.2.3/simulate-heavy-stress-on-kubernetes",title:"\u6a21\u62df\u538b\u529b\u573a\u666f",description:"StressChaos \u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.3/simulate-heavy-stress-on-kubernetes.md",sourceDirName:".",slug:"/simulate-heavy-stress-on-kubernetes",permalink:"/zh/docs/2.2.3/simulate-heavy-stress-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.2.3/simulate-heavy-stress-on-kubernetes.md",tags:[],version:"2.2.3",frontMatter:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f"},sidebar:"version-2.2.3/docs",previous:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/2.2.3/simulate-network-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c",permalink:"/zh/docs/2.2.3/simulate-io-chaos-on-kubernetes"}},m={},s=[{value:"StressChaos \u4ecb\u7ecd",id:"stresschaos-\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"Stressors",id:"stressors",level:4},{value:"MemoryStressor",id:"memorystressor",level:5},{value:"CPUStressor",id:"cpustressor",level:5}],o={toc:s};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stresschaos-\u4ecb\u7ecd"},"StressChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"Chaos Mesh \u63d0\u4f9b\u7684 StressChaos \u5b9e\u9a8c\u7c7b\u578b\u53ef\u7528\u4e8e\u6a21\u62df\u5bb9\u5668\u5185\u538b\u529b\u7684\u573a\u666f\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa StressChaos \u5b9e\u9a8c\u4ee5\u53ca\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u5b9e\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u201c",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(82098).Z,width:"982",height:"648"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u201c",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u201d\u533a\u57df\u9009\u62e9\u201c",(0,r.kt)("strong",{parentName:"p"},"\u538b\u529b\u6d4b\u8bd5"),"\u201d\uff0c\u7136\u540e\u586b\u5199\u5b9e\u9a8c\u5185\u5bb9\uff0c\u914d\u7f6e\u5b57\u6bb5\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d\u7684\u4ecb\u7ecd\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"StressChaos \u5b9e\u9a8c",src:a(69843).Z,width:"1486",height:"1110"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u8ba1\u5212\u7684\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:a(71886).Z,width:"1838",height:"1328"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u672c\u6587\u6863\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"memory-stress.yaml")," \u6587\u4ef6\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: memory-stress-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  stressors:\n    memory:\n      workers: 4\n      size: '256MB'\n")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u4f1a\u5728\u9009\u4e2d\u5bb9\u5668\u4e2d\u521b\u5efa\u8fdb\u7a0b\uff0c\u4e0d\u65ad\u5206\u914d\u548c\u5728\u5185\u5b58\u4e2d\u8fdb\u884c\u8bfb\u5199\uff0c\u6700\u591a\u5360\u7528 256MB \u5185\u5b58\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u51c6\u5907\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f memory-stress.yaml\n")))),(0,r.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stressors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#stressors"},"Stressors")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a CPU \u6216\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stressngStressors"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a stress-ng \u7684\u53c2\u6570\u6765\u8fbe\u5230\u66f4\u4e30\u5bcc\u7684\u538b\u529b\u6ce8\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--clone 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["nginx"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/2.2.3/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"stressors"},"Stressors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#memorystressor"},"MemoryStressor")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cpustressor"},"CPUStressor")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a CPU \u538b\u529b\u7684\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"memorystressor"},"MemoryStressor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workers"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65bd\u52a0\u5185\u5b58\u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5206\u914d\u5185\u5b58\u7684\u5927\u5c0f\u6216\u662f\u5360\u603b\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff0c\u5206\u914d\u5185\u5b58\u7684\u603b\u548c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256MB"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"25%"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8fbe\u5230\u5206\u914d\u5185\u5b58\u5927\u5c0f\u7684\u65f6\u95f4\uff0c\u589e\u957f\u6a21\u578b\u4e3a\u7ebf\u6027\u6a21\u578b"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10min"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oomScoreAdj"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5360\u7528\u5185\u5b58\u538b\u529b\u8fdb\u7a0b\u7684 ",(0,r.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man5/proc.5.html"},"oom_score_adj")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-1000"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u907f\u514d\u56e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"stress-ng")," \u65bd\u52a0\u8bfb\u5199\u538b\u529b\u800c\u9020\u6210\u7684\u9ad8 CPU \u8d1f\u8f7d\uff0cChaos Mesh \u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/memStress"},"memStress")," \u6a21\u62df\u5185\u5b58\u538b\u529b\u7684\u65b9\u6cd5\u3002\u8fd9\u662f\u56e0\u4e3a memStress \u6a21\u62df\u5185\u5b58\u538b\u529b\u7684\u65b9\u6cd5\u4f1a\u5360\u7528\u5b9e\u9645\u5185\u5b58\uff0c\u800c\u4e0d\u662f\u5bf9\u5185\u5b58\u65bd\u52a0\u8bfb\u5199\u538b\u529b\u3002")),(0,r.kt)("h5",{id:"cpustressor"},"CPUStressor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workers"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65bd\u52a0 CPU \u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5360\u636e CPU \u7684\u767e\u5206\u6bd4\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u610f\u5473\u7740\u6ca1\u6709\u589e\u52a0\u989d\u5916\u7684\u8d1f\u8f7d\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"100")," \u610f\u5473\u7740\u6ee1\u8d1f\u8f7d\u3002\u603b\u7684\u8d1f\u8f7d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"workers * load"),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"50"))))))}d.isMDXComponent=!0},82098:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},71886:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"},69843:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stresschaos-exp-935cd4e385b90abd7f04ed6e7b0c2b35.png"}}]);
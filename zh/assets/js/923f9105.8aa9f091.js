"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[44957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},i=void 0,o={unversionedId:"simulate-time-chaos-on-kubernetes",id:"version-2.3.0/simulate-time-chaos-on-kubernetes",title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",description:"TimeChaos \u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/simulate-time-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-time-chaos-on-kubernetes",permalink:"/zh/docs/simulate-time-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/simulate-time-chaos-on-kubernetes.md",tags:[],version:"2.3.0",frontMatter:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df DNS \u6545\u969c",permalink:"/zh/docs/simulate-dns-chaos-on-kubernetes"},next:{title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c",permalink:"/zh/docs/simulate-jvm-application-chaos"}},p={},m=[{value:"TimeChaos \u4ecb\u7ecd",id:"timechaos-\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2}],d={toc:m};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"timechaos-\u4ecb\u7ecd"},"TimeChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"Chaos Mesh \u63d0\u4f9b\u7684 TimeChaos \u5b9e\u9a8c\u7c7b\u578b\u53ef\u7528\u4e8e\u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa TimeChaos \u5b9e\u9a8c\u4ee5\u53ca\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"TimeChaos \u53ea\u5f71\u54cd\u5bb9\u5668\u4e2d PID \u547d\u540d\u7a7a\u95f4\u7684 PID ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u8fdb\u7a0b\uff0c\u4ee5\u53ca PID ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u5b50\u8fdb\u7a0b\u3002\u4f8b\u5982\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl exec")," \u542f\u52a8\u7684\u8fdb\u7a0b\u4e0d\u4f1a\u88ab\u5f71\u54cd\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u5b9e\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u201c",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:n(84875).Z,width:"982",height:"648"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u201c",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u201d\u533a\u57df\u9009\u62e9\u201c",(0,r.kt)("strong",{parentName:"p"},"\u65f6\u949f\u504f\u79fb"),"\u201d\uff0c\u7136\u540e\u586b\u5199\u9009\u5b9a\u7684\u65f6\u949f\u548c\u504f\u79fb\u91cf\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"TimeChaos \u5b9e\u9a8c",src:n(1375).Z,width:"1478",height:"696"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u8ba1\u5212\u7684\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:n(64778).Z,width:"1838",height:"1328"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u672c\u6587\u6863\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"time-shift.yaml")," \u6587\u4ef6\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  timeOffset: '-10m100ns'\n")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u4f1a\u4f7f\u6307\u5b9a Pod \u4e2d\u8fdb\u7a0b\u7684\u65f6\u95f4\u5411\u524d\u504f\u79fb 10 \u5206\u949f 100 \u7eb3\u79d2\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u51c6\u5907\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f time-shift.yaml\n")))),(0,r.kt)("p",null,"\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u7684\u957f\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-5m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clockIds"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html"},(0,r.kt)("inlineCode",{parentName:"a"},"clock_gettime")," \u6587\u6863")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME"]')),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME","CLOCK_MONOTONIC"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["nginx"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},84875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},64778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"},1375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timechaos-exp-a6beb918302a9a9eded1c085db18d534.png"}}]);
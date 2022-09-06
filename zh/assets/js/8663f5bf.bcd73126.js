"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[43e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=l,m=h["".concat(o,".").concat(d)]||h[d]||E[d]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},i=void 0,s={unversionedId:"simulate-physical-machine-chaos",id:"version-2.1.8/simulate-physical-machine-chaos",title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.8/simulate-physical-machine-chaos.md",sourceDirName:".",slug:"/simulate-physical-machine-chaos",permalink:"/zh/docs/2.1.8/simulate-physical-machine-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.8/simulate-physical-machine-chaos.md",tags:[],version:"2.1.8",frontMatter:{title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},sidebar:"version-2.1.8/docs",previous:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/zh/docs/2.1.8/chaosd-overview"},next:{title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",permalink:"/zh/docs/2.1.8/simulate-process-chaos-in-physical-nodes"}},o={},p=[{value:"PhysicalMachineChaos \u4ecb\u7ecd",id:"physicalmachinechaos-\u4ecb\u7ecd",level:2},{value:"\u90e8\u7f72 Chaosd Server",id:"\u90e8\u7f72-chaosd-server",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"CPU \u538b\u529b",id:"cpu-\u538b\u529b",level:4},{value:"\u5185\u5b58\u538b\u529b",id:"\u5185\u5b58\u538b\u529b",level:4},{value:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u5199\u8d1f\u8f7d",id:"\u78c1\u76d8\u5199\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u586b\u5145",id:"\u78c1\u76d8\u586b\u5145",level:4},{value:"\u7f51\u7edc\u5305\u9519\u8bef",id:"\u7f51\u7edc\u5305\u9519\u8bef",level:4},{value:"\u7f51\u7edc\u5305\u5ef6\u8fdf",id:"\u7f51\u7edc\u5305\u5ef6\u8fdf",level:4},{value:"\u7f51\u7edc\u5305\u91cd\u590d",id:"\u7f51\u7edc\u5305\u91cd\u590d",level:4},{value:"\u7f51\u7edc\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5305\u4e22\u5931",level:4},{value:"\u7f51\u7edc\u5206\u533a",id:"\u7f51\u7edc\u5206\u533a",level:4},{value:"DNS \u6545\u969c",id:"dns-\u6545\u969c",level:4},{value:"\u8fdb\u7a0b\u6545\u969c",id:"\u8fdb\u7a0b\u6545\u969c",level:4},{value:"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",level:4},{value:"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",level:4},{value:"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",level:4},{value:"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",level:4},{value:"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",level:4},{value:"\u65f6\u95f4\u504f\u79fb",id:"\u65f6\u95f4\u504f\u79fb",level:4}],c={toc:p};function E(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002"),(0,l.kt)("h2",{id:"physicalmachinechaos-\u4ecb\u7ecd"},"PhysicalMachineChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"PhysicalMachineChaos \u53ef\u7528\u4e8e\u5728\u7269\u7406\u6216\u865a\u62df\u673a\u4e2d\u6a21\u62df\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002"),(0,l.kt)("h2",{id:"\u90e8\u7f72-chaosd-server"},"\u90e8\u7f72 Chaosd Server"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u5728\u5f85\u6ce8\u5165\u6545\u969c\u7684\u6240\u6709\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u90e8\u7f72\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\u3002Chaosd \u7684\u90e8\u7f72\u65b9\u6cd5\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/chaosd-overview#%E4%B8%8B%E8%BD%BD%E5%92%8C%E9%83%A8%E7%BD%B2"},"Chaosd \u7684\u4e0b\u8f7d\u548c\u90e8\u7f72"),"\u3002"),(0,l.kt)("p",null,"\u5728\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\u6a21\u5f0f Chaosd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n")),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e Chaos Mesh 2.1.0 \u7248\u672c\uff0c\u8bf7\u90e8\u7f72 Chaosd ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/releases/tag/v1.1.0"},"1.1.0")," \u7248\u672c\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(72763).Z,width:"982",height:"648"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u7c7b\u578b"),"\u5904\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u7269\u7406"),"\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u5b9e\u9a8c\u7c7b\u578b\uff0c\u4f8b\u5982",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u653b\u51fb"),"\u3002\u7136\u540e\u9009\u62e9\u5177\u4f53\u7684\u884c\u4e3a\uff0c\u6700\u540e\u518d\u586b\u5199\u76f8\u5e94\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"PhysicalMachineChaos \u5b9e\u9a8c",src:a(14090).Z,width:"1836",height:"1274"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:a(77761).Z,width:"1842",height:"1338"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"physicalmachine.yaml")," \u4e2d\uff0c\u5199\u5165\u5185\u5bb9\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-testing\nspec:\n  action: network-delay\n  address:\n    - 172.16.112.130:31767\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n")),(0,l.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u5411\u6307\u5b9a\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684 Chaosd \u670d\u52a1\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u89e6\u53d1\u7f51\u7edc\u5ef6\u8fdf\u5b9e\u9a8c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f physicalmachine.yaml\n")))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"action")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u5b9a\u4e49\u7269\u7406\u673a\u6545\u969c\u7684\u884c\u4e3a\uff0c\u53ef\u9009\u503c\u4e3a "stress-cpu", "stress-mem", "disk-read-payload", "disk-write-payload", "disk-fill", "network-corrupt", "network-duplicate", "network-loss", "network-delay", "network-partition", "network-dns", "process", "jvm-exception", "jvm-gc", "jvm-latency", "jvm-return", "jvm-stress", "jvm-rule-data", "clock"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"stress-cpu"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u6ce8\u5165\u6545\u969c\u7684 Chaosd \u670d\u52a1\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},'["192.168.0.10:31767"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30s")))),(0,l.kt)("p",null,"\u6bcf\u79cd\u6545\u969c\u884c\u4e3a\u90fd\u6709\u7279\u5b9a\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u90e8\u5206\u4ecb\u7ecd\u5404\u79cd\u6545\u969c\u7c7b\u578b\u4ee5\u53ca\u5bf9\u5e94\u7684\u914d\u7f6e\u65b9\u6cd5\u3002"),(0,l.kt)("h4",{id:"cpu-\u538b\u529b"},"CPU \u538b\u529b"),(0,l.kt)("p",null,'\u6a21\u62df CPU \u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-cpu"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F-CPU-%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u5185\u5b58\u538b\u529b"},"\u5185\u5b58\u538b\u529b"),(0,l.kt)("p",null,'\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-mem"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E5%86%85%E5%AD%98%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d"},"\u78c1\u76d8\u8bfb\u8d1f\u8f7d"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-read-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E8%AF%BB%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u5199\u8d1f\u8f7d"},"\u78c1\u76d8\u5199\u8d1f\u8f7d"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-write-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%86%99%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u586b\u5145"},"\u78c1\u76d8\u586b\u5145"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u586b\u5145\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-fill"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%A1%AB%E5%85%85%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u9519\u8bef"},"\u7f51\u7edc\u5305\u9519\u8bef"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-corrupt"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%94%99%E8%AF%AF%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u5ef6\u8fdf"},"\u7f51\u7edc\u5305\u5ef6\u8fdf"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-delay"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u91cd\u590d"},"\u7f51\u7edc\u5305\u91cd\u590d"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-duplicate"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%87%8D%E5%A4%8D%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u4e22\u5931"},"\u7f51\u7edc\u5305\u4e22\u5931"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-loss"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E4%B8%A2%E5%A4%B1%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5206\u533a"},"\u7f51\u7edc\u5206\u533a"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5206\u533a\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-partition"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%88%86%E5%8C%BA%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"dns-\u6545\u969c"},"DNS \u6545\u969c"),(0,l.kt)("p",null,'\u6a21\u62df DNS \u6545\u969c\uff0c \u5c06 action \u8bbe\u7f6e\u4e3a "network-dns"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003 ',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-network-chaos-in-physical-nodes#DNS-%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"DNS \u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u8fdb\u7a0b\u6545\u969c"},"\u8fdb\u7a0b\u6545\u969c"),(0,l.kt)("p",null,'\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "process"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-process-chaos-in-physical-nodes#%E8%BF%9B%E7%A8%8B%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38"},"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-exception"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-jvm-application-chaos-in-physical-nodes#%E6%8A%9B%E5%87%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf"},"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-latency"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-jvm-application-chaos-in-physical-nodes#%E5%A2%9E%E5%8A%A0%E6%96%B9%E6%B3%95%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"},"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-return"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-jvm-application-chaos-in-physical-nodes#%E4%BF%AE%E6%94%B9%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E5%80%BC%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536"},"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-gc"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-jvm-application-chaos-in-physical-nodes#%E8%A7%A6%E5%8F%91%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c"},"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c"),(0,l.kt)("p",null,'JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-rule-data"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-jvm-application-chaos-in-physical-nodes#%E8%AE%BE%E7%BD%AE-Byteman-%E9%85%8D%E7%BD%AE%E8%A7%A6%E5%8F%91%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u8bbe\u7f6e Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u65f6\u95f4\u504f\u79fb"},"\u65f6\u95f4\u504f\u79fb"),(0,l.kt)("p",null,'\u6a21\u62df\u65f6\u95f4\u504f\u79fb\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "clock"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/2.1.8/simulate-time-chaos-on-physical-nodes#%E6%A8%A1%E6%8B%9F%E6%97%B6%E9%97%B4%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"))}E.isMDXComponent=!0},72763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},77761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/physicalmachinechaos-exp-info-9d2045a888a56b22d2a98828576c24b4.png"},14090:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/physicalmachinechaos-exp-0e41776413e369396de105eb51b92e57.png"}}]);
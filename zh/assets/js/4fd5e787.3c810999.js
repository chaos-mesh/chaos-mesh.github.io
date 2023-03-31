"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[225],{17942:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(50959);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=l,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(51163),l=(a(50959),a(17942));const r={title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},i=void 0,o={unversionedId:"simulate-physical-machine-chaos",id:"simulate-physical-machine-chaos",title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-physical-machine-chaos.md",sourceDirName:".",slug:"/simulate-physical-machine-chaos",permalink:"/zh/docs/next/simulate-physical-machine-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/simulate-physical-machine-chaos.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},sidebar:"docs",previous:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/zh/docs/next/chaosd-overview"},next:{title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",permalink:"/zh/docs/next/simulate-process-chaos-in-physical-nodes"}},s={},p=[{value:"PhysicalMachineChaos \u4ecb\u7ecd",id:"physicalmachinechaos-\u4ecb\u7ecd",level:2},{value:"\u8fd0\u884c Chaosd Server",id:"\u8fd0\u884c-chaosd-server",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"CPU \u538b\u529b",id:"cpu-\u538b\u529b",level:4},{value:"\u5185\u5b58\u538b\u529b",id:"\u5185\u5b58\u538b\u529b",level:4},{value:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u5199\u8d1f\u8f7d",id:"\u78c1\u76d8\u5199\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u586b\u5145",id:"\u78c1\u76d8\u586b\u5145",level:4},{value:"\u7f51\u7edc\u5305\u9519\u8bef",id:"\u7f51\u7edc\u5305\u9519\u8bef",level:4},{value:"\u7f51\u7edc\u5305\u5ef6\u8fdf",id:"\u7f51\u7edc\u5305\u5ef6\u8fdf",level:4},{value:"\u7f51\u7edc\u5305\u91cd\u590d",id:"\u7f51\u7edc\u5305\u91cd\u590d",level:4},{value:"\u7f51\u7edc\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5305\u4e22\u5931",level:4},{value:"\u7f51\u7edc\u5206\u533a",id:"\u7f51\u7edc\u5206\u533a",level:4},{value:"DNS \u6545\u969c",id:"dns-\u6545\u969c",level:4},{value:"\u8fdb\u7a0b\u6545\u969c",id:"\u8fdb\u7a0b\u6545\u969c",level:4},{value:"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",level:4},{value:"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",level:4},{value:"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",level:4},{value:"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",level:4},{value:"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",level:4},{value:"\u65f6\u95f4\u504f\u79fb",id:"\u65f6\u95f4\u504f\u79fb",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002"),(0,l.kt)("h2",{id:"physicalmachinechaos-\u4ecb\u7ecd"},"PhysicalMachineChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"PhysicalMachineChaos \u7528\u4e8e\u5728\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u6a21\u62df\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002\u5728\u4f7f\u7528 Chaos Mesh \u7684 PhysicalMachineChaos \u529f\u80fd\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5728\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e0a\u90e8\u7f72 Chaosd\u3002Chaos Mesh \u4e0e Chaosd \u7684\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Chaos Mesh \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Chaosd \u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v2.1.x"),(0,l.kt)("td",{parentName:"tr",align:"left"},"v1.1.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v2.2.x"),(0,l.kt)("td",{parentName:"tr",align:"left"},"v1.2.x")))),(0,l.kt)("h2",{id:"\u8fd0\u884c-chaosd-server"},"\u8fd0\u884c Chaosd Server"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u5728\u5f85\u6ce8\u5165\u6545\u969c\u7684\u6240\u6709\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u90e8\u7f72\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\u3002\u90e8\u7f72 Chaosd \u540e\u8fd0\u884c Chaosd Server \u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72 Chaosd \u540e\uff0c\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u5e76\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"PhysicalMachine"),"\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u5173\u90e8\u7f72\u7684\u5177\u4f53\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/next/chaosd-overview#%E4%B8%8B%E8%BD%BD%E5%92%8C%E9%83%A8%E7%BD%B2"},"Chaosd \u7684\u4e0b\u8f7d\u548c\u90e8\u7f72"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u90e8\u7f72\u540e\uff0c\u5728\u8fd0\u884c Chaosd Server ",(0,l.kt)("strong",{parentName:"li"},"\u524d"),"\uff0c\u9700\u8981\u5148\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u5e76\u5728 Kubernetes \u96c6\u7fa4\u5185\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"PhysicalMachine"),"\u3002\u6709\u5173 TLS \u8bc1\u4e66\u7684\u751f\u6210\u65b9\u5f0f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/next/chaosctl-tool#%E4%B8%BA-chaosd-%E7%94%9F%E6%88%90-tls-%E8%AF%81%E4%B9%A6"},"Chaosctl \u4e3a Chaosd \u751f\u6210\u8bc1\u4e66"),"\u3002")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c Chaosd\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 Chaosctl \u751f\u6210\u4e86 TSL \u8bc1\u4e66\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --https-port 31768 --CA=/etc/chaosd/pki/ca.crt --cert=/etc/chaosd/pki/chaosd.crt --key=/etc/chaosd/pki/chaosd.key\n")),(0,l.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 Chaosctl \u751f\u6210\u7684 TLS \u8bc1\u4e66\u6587\u4ef6\u7684\u4fdd\u5b58\u8def\u5f84\u4e3a Chaosctl \u7684\u9ed8\u8ba4\u8f93\u51fa\u8def\u5f84\u3002\u5982\u679c\u5728\u751f\u6210\u8bc1\u4e66\u65f6\u624b\u52a8\u6307\u5b9a\u4e86\u5176\u4ed6\u8def\u5f84\uff0c\u8bf7\u624b\u52a8\u5c06\u547d\u4ee4\u4e2d\u7684\u8def\u5f84\u66ff\u6362\u4e3a\u5bf9\u5e94\u7684\u6587\u4ef6\u8def\u5f84\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u901a\u8fc7 Chaosctl \u914d\u7f6e TLS \u8bc1\u4e66\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\u3002\u4f46\u8003\u8651\u5230\u96c6\u7fa4\u7684\u5b89\u5168\u6027\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350"),"\u4f7f\u7528\u8fd9\u4e2a\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n")))),(0,l.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(74718).Z,width:"982",height:"648"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u7c7b\u578b"),"\u5904\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u7269\u7406"),"\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u5b9e\u9a8c\u7c7b\u578b\uff0c\u4f8b\u5982",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u653b\u51fb"),"\u3002\u7136\u540e\u9009\u62e9\u5177\u4f53\u7684\u884c\u4e3a\uff0c\u6700\u540e\u518d\u586b\u5199\u76f8\u5e94\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"PhysicalMachineChaos \u5b9e\u9a8c",src:a(84010).Z,width:"1836",height:"1274"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:a(53055).Z,width:"1842",height:"1338"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"physicalmachine.yaml")," \u4e2d\uff0c\u5199\u5165\u5185\u5bb9\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-mesh\nspec:\n  action: network-delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'arch': 'amd64'\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n")),(0,l.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u5411\u6307\u5b9a\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684 Chaosd \u670d\u52a1\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u89e6\u53d1\u7f51\u7edc\u5ef6\u8fdf\u5b9e\u9a8c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f physicalmachine.yaml\n")))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"action")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u7269\u7406\u673a\u6545\u969c\u7684\u884c\u4e3a\uff0c\u53ef\u9009\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"stress-cpu"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"stress-mem"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"disk-read-payload"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"disk-write-payload"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"disk-fill"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-corrupt"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-duplicate"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-loss"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-delay"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-partition"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"network-dns"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"process"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-exception"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-gc"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-latency"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-return"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-stress"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"jvm-rule-data"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"clock")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"stress-cpu"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u6ce8\u5165\u6545\u969c\u7684 Chaosd \u670d\u52a1\u5730\u5740\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"address")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"selector")," \u4e24\u8005\u53ea\u80fd\u9009\u62e9\u5176\u4e2d\u4e00\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},'["192.168.0.10:31767"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"selector")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 PhysicalMachine\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"address")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"selector")," \u4e24\u8005\u53ea\u80fd\u9009\u62e9\u5176\u4e2d\u4e00\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 PhysicalMachine\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 PhysicalMachine\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u51b3\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a PhysicalMachine \u7684\u767e\u5206\u6bd4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"30s"))))),(0,l.kt)("p",null,"\u6bcf\u79cd\u6545\u969c\u884c\u4e3a\u90fd\u6709\u7279\u5b9a\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u90e8\u5206\u4ecb\u7ecd\u5404\u79cd\u6545\u969c\u7c7b\u578b\u4ee5\u53ca\u5bf9\u5e94\u7684\u914d\u7f6e\u65b9\u6cd5\u3002"),(0,l.kt)("h4",{id:"cpu-\u538b\u529b"},"CPU \u538b\u529b"),(0,l.kt)("p",null,'\u6a21\u62df CPU \u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-cpu"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F-CPU-%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u5185\u5b58\u538b\u529b"},"\u5185\u5b58\u538b\u529b"),(0,l.kt)("p",null,'\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-mem"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E5%86%85%E5%AD%98%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d"},"\u78c1\u76d8\u8bfb\u8d1f\u8f7d"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-read-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E8%AF%BB%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u5199\u8d1f\u8f7d"},"\u78c1\u76d8\u5199\u8d1f\u8f7d"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-write-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%86%99%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u78c1\u76d8\u586b\u5145"},"\u78c1\u76d8\u586b\u5145"),(0,l.kt)("p",null,'\u6a21\u62df\u78c1\u76d8\u586b\u5145\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-fill"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%A1%AB%E5%85%85%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u9519\u8bef"},"\u7f51\u7edc\u5305\u9519\u8bef"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-corrupt"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%94%99%E8%AF%AF%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u5ef6\u8fdf"},"\u7f51\u7edc\u5305\u5ef6\u8fdf"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-delay"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u91cd\u590d"},"\u7f51\u7edc\u5305\u91cd\u590d"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-duplicate"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%87%8D%E5%A4%8D%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5305\u4e22\u5931"},"\u7f51\u7edc\u5305\u4e22\u5931"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-loss"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E4%B8%A2%E5%A4%B1%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u7f51\u7edc\u5206\u533a"},"\u7f51\u7edc\u5206\u533a"),(0,l.kt)("p",null,'\u6a21\u62df\u7f51\u7edc\u5206\u533a\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-partition"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%88%86%E5%8C%BA%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"dns-\u6545\u969c"},"DNS \u6545\u969c"),(0,l.kt)("p",null,'\u6a21\u62df DNS \u6545\u969c\uff0c \u5c06 action \u8bbe\u7f6e\u4e3a "network-dns"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003 ',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-network-chaos-in-physical-nodes#DNS-%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"DNS \u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u8fdb\u7a0b\u6545\u969c"},"\u8fdb\u7a0b\u6545\u969c"),(0,l.kt)("p",null,'\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "process"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-process-chaos-in-physical-nodes#%E8%BF%9B%E7%A8%8B%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38"},"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-exception"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes#%E6%8A%9B%E5%87%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf"},"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-latency"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes#%E5%A2%9E%E5%8A%A0%E6%96%B9%E6%B3%95%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"},"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-return"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes#%E4%BF%AE%E6%94%B9%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E5%80%BC%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536"},"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536"),(0,l.kt)("p",null,'\u6a21\u62df JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-gc"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes#%E8%A7%A6%E5%8F%91%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c"},"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c"),(0,l.kt)("p",null,'JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-rule-data"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes#%E8%AE%BE%E7%BD%AE-Byteman-%E9%85%8D%E7%BD%AE%E8%A7%A6%E5%8F%91%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u8bbe\u7f6e Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"),(0,l.kt)("h4",{id:"\u65f6\u95f4\u504f\u79fb"},"\u65f6\u95f4\u504f\u79fb"),(0,l.kt)("p",null,'\u6a21\u62df\u65f6\u95f4\u504f\u79fb\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "clock"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/simulate-time-chaos-on-physical-nodes#%E6%A8%A1%E6%8B%9F%E6%97%B6%E9%97%B4%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),"\u3002"))}m.isMDXComponent=!0},74718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},53055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/physicalmachinechaos-exp-info-9d2045a888a56b22d2a98828576c24b4.png"},84010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/physicalmachinechaos-exp-0e41776413e369396de105eb51b92e57.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[62708],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(60795),r=(a(59496),a(49613));const l={title:"\u8fd0\u884c\u5b9e\u9a8c"},o=void 0,p={unversionedId:"run-a-chaos-experiment",id:"version-2.4.3/run-a-chaos-experiment",title:"\u8fd0\u884c\u5b9e\u9a8c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u60c5\u51b5\u3001\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u4ee5\u53ca\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/run-a-chaos-experiment.md",sourceDirName:".",slug:"/run-a-chaos-experiment",permalink:"/zh/docs/2.4.3/run-a-chaos-experiment",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/run-a-chaos-experiment.md",tags:[],version:"2.4.3",frontMatter:{title:"\u8fd0\u884c\u5b9e\u9a8c"},sidebar:"docs",previous:{title:"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219",permalink:"/zh/docs/2.4.3/define-scheduling-rules"},next:{title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",permalink:"/zh/docs/2.4.3/inspect-chaos-experiments"}},i={},s=[{value:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c",id:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c",level:2},{value:"\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c",id:"\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c",id:"\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u4f7f\u7528 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",id:"\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u4f7f\u7528 Dashboard \u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c",id:"\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u4f7f\u7528 Dashboard \u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u60c5\u51b5\u3001\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u4ee5\u53ca\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c"},"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u4f7f\u7528 Chaos Mesh\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4ee5\u4e0b\u4e24\u7c7b\u6df7\u6c8c\u5b9e\u9a8c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c\uff1a\u662f\u6700\u5c0f\u7c92\u5ea6\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002\u521b\u5efa\u540e\uff0c\u5b9e\u9a8c\u4f1a\u7acb\u523b\u5411\u6d4b\u8bd5\u76ee\u6807\u6ce8\u5165\u5df2\u914d\u7f6e\u7684\u6545\u969c\u3002\u5982\u679c\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," \u53c2\u6570\uff0c\u6545\u969c\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," \u6307\u5b9a\u7684\u65f6\u95f4\u7ed3\u675f\u540e\u4f1a\u81ea\u52a8\u6062\u590d\u3002\u5f53\u6682\u505c\u6216\u8005\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u65f6\uff0c\u6545\u969c\u4f1a\u7acb\u523b\u88ab\u6062\u590d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c: \u662f\u53ef\u4ee5\u5b9a\u65f6\u8fd0\u884c\u6216\u5faa\u73af\u8fdb\u884c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002\u521b\u5efa\u65f6\u9700\u8981\u5b9a\u4e49\u5b9e\u9a8c\u7684\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219\u3002")),(0,r.kt)("h3",{id:"\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c"},"\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Dashboard \u65b0\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u63d0\u4ea4"),"\u6309\u94ae\u8fd0\u884c\u5b9e\u9a8c\u3002\u66f4\u591a\u8be6\u7ec6\u6b65\u9aa4\uff0c\u8bf7\u53c2\u9605\u5177\u4f53\u7684\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 YAML \u6587\u4ef6\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u5b9e\u9a8c\u3002\u8981\u4f7f\u7528 YAML \u6587\u4ef6\u65b9\u5f0f\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u5e76\u8fd0\u884c\u5b9e\u9a8c\uff0c\u8bf7\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u3002\u5728\u6b64 YAML \u6587\u4ef6\u4e2d\uff0c\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\uff0c\u6dfb\u52a0\u76f8\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u6a21\u62df\u7f51\u7edc\u6545\u969c\u4e3a\u4f8b\uff0c\u65b0\u5efa\u4e00\u4e2a\u5305\u542b\u5982\u4e0b\u914d\u7f6e\u793a\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay.yaml")," \u6587\u4ef6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show' # the label of the pod for chaos injection\n  delay:\n    latency: '10ms'\n  duration: '12s'\n")),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b YAML \u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6301\u7eed ",(0,r.kt)("inlineCode",{parentName:"p"},"12s")," \u7684\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\uff0c\u5b9e\u9a8c\u76ee\u6807\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"default namespace")," \u4e0b\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},'"app": "web-show"')," \u6807\u7b7e\u7684\u5e94\u7528\u3002\u5173\u4e8e\u7f51\u7edc\u6545\u969c\u7684\u66f4\u591a\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/simulate-network-chaos-on-kubernetes"},"\u6a21\u62df\u7f51\u7edc\u6545\u969c"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f")," \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u6b64\u6df7\u6c8c\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f network-delay.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6df7\u6c8c\u5b9e\u9a8c\u5f00\u59cb\u540e\uff0c\u5982\u9700\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl describe networkchaos network-delay\n")),(0,r.kt)("p",{parentName:"li"},"\u8981\u4e86\u89e3\u8be6\u7ec6\u7684\u8fd0\u884c\u7ed3\u679c\u68c0\u67e5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/inspect-chaos-experiments"},"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"),"\u3002"))),(0,r.kt)("h3",{id:"\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c"},"\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"Chaos Mesh \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\uff0c\u5e2e\u52a9\u521b\u5efa\u5b9a\u65f6\u6df7\u6c8c\u5b9e\u9a8c\u548c\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u3002\u5728\u6b64 YAML \u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," \u76f8\u5173\u53c2\u6570\u7528\u4e8e\u5b9a\u4e49\u5177\u4f53\u7684\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219\uff0c\u7136\u540e\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u914d\u7f6e\u6545\u969c\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u6a21\u62df\u4e00\u4e2a\u5b9a\u65f6\u7684\u7f51\u7edc\u6545\u969c\u4e3a\u4f8b\uff0c\u65b0\u5efa\u4e00\u4e2a\u5305\u542b\u5982\u4e0b\u914d\u7f6e\u793a\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule-delay-example.yaml")," \u6587\u4ef6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '12s'\n")),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b YAML \u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5c0f\u65f6\u7684\u7b2c 5 \u5206\u949f\u81ea\u52a8\u8fd0\u884c\u7684\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\u3002\u66f4\u8be6\u7ec6\u7684\u8c03\u5ea6\u89c4\u5219\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/define-scheduling-rules"},"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u6ce8\u610f\u5982\u679c\u4e0d\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"duration")," \u53c2\u6570\uff0c\u8868\u793a\u6545\u969c\u884c\u4e3a\u4f1a\u4e00\u76f4\u6301\u7eed\u4e0b\u53bb\uff0c\u76f4\u5230\u6682\u505c\u6216\u8005\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u3002 :::"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f")," \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f schedule-delay-example.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6df7\u6c8c\u5b9e\u9a8c\u5f00\u59cb\u540e\uff0c\u5982\u9700\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 kubectl describe \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 status \u6216\u8005 event\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl describe networkchaos schedule-delay-example\n")),(0,r.kt)("p",{parentName:"li"},"\u8981\u4e86\u89e3\u8be6\u7ec6\u7684\u8fd0\u884c\u7ed3\u679c\u68c0\u67e5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/inspect-chaos-experiments"},"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"),"\u3002"))),(0,r.kt)("h2",{id:"\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c"},"\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u5728\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u9700\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u8bbe\u7f6e\u6682\u505c\u6ce8\u89e3\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u6682\u505c\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e2d\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay")," \u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause=true\n")),(0,r.kt)("p",null,"\u6267\u884c\u6b64\u547d\u4ee4\u540e\uff0c\u6ce8\u5165\u7684\u6545\u969c\u4f1a\u88ab\u7acb\u523b\u6062\u590d\u3002\u5982\u679c\u60f3\u5c06\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u4ece\u6682\u505c\u72b6\u6001\u4e2d\u6062\u590d\u5230\u6b63\u5e38\u6267\u884c\u72b6\u6001\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause-\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-dashboard-\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u901a\u8fc7 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6df7\u6c8c\u5b9e\u9a8c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6682\u505c"),"\u6216\u8005",(0,r.kt)("strong",{parentName:"p"},"\u542f\u52a8"),"\u6309\u94ae\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pause experiment",src:a(26649).Z,width:"810",height:"390"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Restart experiment",src:a(62029).Z,width:"792",height:"384"})),(0,r.kt)("h2",{id:"\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"},"\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u76ee\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," \u5b57\u6bb5\u4e0d\u5141\u8bb8\u88ab\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u89c1\u5bf9\u5e94\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues/2227"},"GitHub issue"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-dashboard-\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u7531\u4e8e\u76ee\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," \u5b57\u6bb5\u4e0d\u5141\u8bb8\u88ab\u66f4\u65b0\uff0c\u6240\u4ee5 Dashboard \u6682\u4e0d\u652f\u6301\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c"},"\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u7ed3\u675f\u6df7\u6c8c\u5b9e\u9a8c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete")," \u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u3002\u6df7\u6c8c\u5b9e\u9a8c\u5220\u9664\u540e\uff0c\u6ce8\u5165\u7684\u6545\u969c\u4f1a\u88ab\u7acb\u523b\u6062\u590d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl delete -f network-delay.yaml\n# or delete the chaos object directly\nkubectl delete networkchaos network-delay\n")),(0,r.kt)("p",null,"\u5982\u679c\u5220\u9664\u64cd\u4f5c\u88ab\u963b\u585e\uff0c\u8fd9\u610f\u5473\u7740\u6709\u4e00\u4e9b\u76ee\u6807\u5bf9\u8c61\u7684\u6545\u969c\u884c\u4e3a\u65e0\u6cd5\u6062\u590d\u3002\u4f60\u53ef\u4ee5\u67e5\u770b Chaos Mesh \u7684\u65e5\u5fd7\u8fdb\u884c\u6545\u969c\u6392\u67e5\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u95ee\u9898\u3002\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f3a\u5236\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-dashboard-\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5728 Dashboard \u4e0a\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u5e76\u5f52\u6863\u5230\u5386\u53f2\u8bb0\u5f55\u6c47\u603b\uff0c\u53ef\u4ee5\u70b9\u51fb\u5bf9\u5e94\u6df7\u6c8c\u5b9e\u9a8c\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5f52\u6863"),"\u6309\u94ae\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive experiment",src:a(51011).Z,width:"778",height:"386"})))}m.isMDXComponent=!0},51011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/archive_zh-355d825f771f6fb4c38a7bb1e262bc50.png"},26649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pause_zh-6d7840c05c346be38ab2e496c4dc9024.png"},62029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restart_zh-8ea5c8beed2093a53b2d735799e4644b.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7564],{17942:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(50959);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(a),u=l,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(51163),l=(a(50959),a(17942));const r={title:"\u6a21\u62df Pod \u6545\u969c"},o=void 0,i={unversionedId:"simulate-pod-chaos-on-kubernetes",id:"version-2.4.3/simulate-pod-chaos-on-kubernetes",title:"\u6a21\u62df Pod \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-pod-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-pod-chaos-on-kubernetes",permalink:"/zh/docs/2.4.3/simulate-pod-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-pod-chaos-on-kubernetes.md",tags:[],version:"2.4.3",frontMatter:{title:"\u6a21\u62df Pod \u6545\u969c"},sidebar:"docs",previous:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5",permalink:"/zh/docs/2.4.3/status-check-in-workflow"},next:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/2.4.3/simulate-network-chaos-on-kubernetes"}},p={},d=[{value:"PodChaos \u4ecb\u7ecd",id:"podchaos-\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"pod-failure \u793a\u4f8b",id:"pod-failure-\u793a\u4f8b",level:3},{value:"pod-kill \u793a\u4f8b",id:"pod-kill-\u793a\u4f8b",level:3},{value:"container-kill \u793a\u4f8b",id:"container-kill-\u793a\u4f8b",level:3},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u201cPod Failure\u201d \u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879",id:"pod-failure-\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:d},s="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"podchaos-\u4ecb\u7ecd"},"PodChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"PodChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\uff0c\u901a\u8fc7\u521b\u5efa PodChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u6307\u5b9a Pod \u6216\u8005\u5bb9\u5668\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cPodChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pod Failure\uff1a\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165\u6545\u969c\uff0c\u4f7f\u5f97\u8be5 Pod \u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"Pod Kill\uff1a\u6740\u6b7b\u6307\u5b9a\u7684 Pod \u3002\u4e3a\u4e86\u4fdd\u8bc1 Pod \u80fd\u591f\u6210\u529f\u91cd\u542f\uff0c\u9700\u8981\u914d\u7f6e ReplicaSet \u6216\u8005\u7c7b\u4f3c\u7684\u673a\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"Container Kill\uff1a\u6740\u6b7b\u4f4d\u4e8e\u76ee\u6807 Pod \u4e2d\u7684\u6307\u5b9a\u5bb9\u5668\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.kt)("p",null,'Chaos Mesh \u53ef\u4ee5\u5411\u4efb\u4e00 Pod \u6ce8\u5165 PodChaos\uff0c\u65e0\u8bba\u5176 Pod \u662f\u5426\u7ed1\u5b9a\u81f3 Deployment\uff0cStatefulSet\uff0cDaemonSet \u6216\u5176\u4ed6\u63a7\u5236\u5668\u3002\u7136\u800c\uff0c\u5f53\u5411\u72ec\u7acb\u7684 Pod \u6ce8\u5165 PodChaos \u65f6\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u6bd4\u5982\uff0c\u5411\u72ec\u7acb\u7684 Pod \u6ce8\u5165 "pod-kill" \u6df7\u6c8c\u65f6\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u6545\u969c\u53d1\u751f\u540e\u80fd\u591f\u6062\u590d\u6b63\u5e38\u3002'),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u521b\u5efa PodChaos \u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6545\u969c\u7c7b\u578b\u4e3a Pod Kill\uff0c\u914d\u7f6e\u4e86 ReplicaSet \u6216\u8005\u7c7b\u4f3c\u4fdd\u8bc1 Pod \u80fd\u591f\u81ea\u52a8\u91cd\u542f\u7684\u673a\u5236\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c\u524d\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86 Chaos Dashboard\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5df2\u5b89\u88c5 Chaos Dashboard\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," \u547d\u4ee4\u7684\u65b9\u5f0f\u8bbf\u95ee Dashboard\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n")),(0,l.kt)("p",{parentName:"li"},"\u7136\u540e\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,l.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," \u8bbf\u95ee Chaos Dashboard\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:a(13362).Z,width:"832",height:"438"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u5904\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"POD \u6545\u969c"),"\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,l.kt)("strong",{parentName:"p"},"POD FAILURE"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("h3",{id:"pod-failure-\u793a\u4f8b"},"pod-failure \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-failure.yaml"),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-mesh\nspec:\n  action: pod-failure\n  mode: one\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-failure")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u5728 30 \u79d2\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./pod-failure.yaml\n")))),(0,l.kt)("h3",{id:"pod-kill-\u793a\u4f8b"},"pod-kill \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-kill.yaml"),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-mesh\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-kill")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u88ab\u6740\u6b7b\u4e00\u6b21\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./pod-kill.yaml\n")))),(0,l.kt)("h3",{id:"container-kill-\u793a\u4f8b"},"container-kill \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"container-kill.yaml"),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-mesh\nspec:\n  action: container-kill\n  mode: one\n  containerNames: ['prometheus']\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Container \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"container-kill")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Container \u88ab\u6740\u6b7b\u4e00\u6b21\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./container-kill.yaml\n")))),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u6ce8\u5165\u7684\u6545\u969c\u7c7b\u578b\uff0c\u4ec5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"pod-failure"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"container-kill")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/2.4.3/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"action")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"container-kill")," \u65f6\uff0c\u6b64\u914d\u7f6e\u4e3a\u5fc5\u586b\uff0c\u7528\u4e8e\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 container \u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"['prometheus']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"action")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill")," \u65f6\uff0c\u9700\u8981\u586b\u5199\u6b64\u9879\uff0c\u7528\u4e8e\u6307\u5b9a\u5220\u9664 Pod \u4e4b\u524d\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")))),(0,l.kt)("h2",{id:"pod-failure-\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879"},"\u201cPod Failure\u201d \u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,'\u7b80\u8a00\u4e4b\uff0c\u8fd9\u91cc\u6709\u51e0\u4e2a\u5173\u4e8e\u4f7f\u7528 "Pod Failure" \u6df7\u6c8c\u5b9e\u9a8c\u7684\u5efa\u8bae\uff1a'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u5982\u679c\u4f60\u6b63\u5728\u8fd0\u884c\u4e00\u4e2a\u6c14\u9699\u6216\u7f51\u7edc\u9694\u79bb\u7684 Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\u53ef\u7528\u7684 "pause image"\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u5bb9\u5668\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"livenessProbe")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"readinessProbe"),"\u3002")),(0,l.kt)("p",null,"Pod Failure \u6df7\u6c8c\u5b9e\u9a8c\u5c06\u4f1a\u6539\u53d8\u76ee\u6807 Pod \u4e2d\u6bcf\u4e2a\u5bb9\u5668\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),' \u4e3a "pause image"\uff0c\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u955c\u50cf\uff0c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u6211\u4eec\u4f7f\u7528 ',(0,l.kt)("inlineCode",{parentName:"p"},"gcr.io/google-containers/pause:latest"),' \u4f5c\u4e3a\u9ed8\u8ba4\u7684 "pause image"\uff0c\u4f60\u53ef\u4ee5\u5728 helm values ',(0,l.kt)("inlineCode",{parentName:"p"},"controllerManager.podChaos.podFailure.pauseImage")," \u4e2d\u66f4\u6539\u5b83\u3002"),(0,l.kt)("p",null,'\u4e0b\u8f7d "pause image" \u5c06\u4f1a\u6d88\u8017\u65f6\u95f4\uff0c\u5e76\u4e14\u8fd9\u4e2a\u65f6\u95f4\u5c06\u4f1a\u88ab\u8ba1\u5165\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4\u4e2d\u3002\u6240\u4ee5\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c"\u5b9e\u9645\u53d7\u5f71\u54cd\u7684\u65f6\u95f4" \u53ef\u80fd\u4f1a\u6bd4\u914d\u7f6e\u7684\u65f6\u95f4\u77ed\u3002\u8fd9\u662f\u63a8\u8350\u8bbe\u7f6e\u53ef\u7528\u7684 "pause image" \u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u3002'),(0,l.kt)("p",null,'\u53e6\u5916\u4e00\u4e2a\u8ff7\u60d1\u7684\u70b9\u662f\uff0c"pause image" \u53ef\u4ee5\u5728\u672a\u914d\u7f6e ',(0,l.kt)("inlineCode",{parentName:"p"},"command")," \u7684\u5bb9\u5668\u4e2d\u6b63\u5e38\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u5982\u679c\u5bb9\u5668\u672a\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"command"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"livenessProbe")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"readinessProbe"),"\uff0c\u5b83\u5c06\u4f1a\u88ab\u89c6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Running")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready"),'\uff0c\u5373\u4f7f\u5b83\u5df2\u7ecf\u88ab\u6539\u53d8\u4e3a "pause image"\uff0c\u5e76\u4e14\u5b9e\u9645\u4e0a\u4e0d\u63d0\u4f9b\u6b63\u5e38\u529f\u80fd\uff0c \u6216\u8005\u88ab\u89c6\u4e3a\u4e0d\u53ef\u7528\u3002\u6240\u4ee5\u5efa\u8bae\u4e3a\u5bb9\u5668\u914d\u7f6e ',(0,l.kt)("inlineCode",{parentName:"p"},"livenessProbe")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"readinessProbe"),"\u3002"))}k.isMDXComponent=!0},13362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-pod-chaos-on-dashboard-1_zh-8061597bd8deaadfedc8abf3a3685266.jpg"}}]);
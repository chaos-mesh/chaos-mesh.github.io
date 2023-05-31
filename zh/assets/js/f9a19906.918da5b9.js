"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[88410],{49613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),k=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=k(a),u=l,h=d["".concat(i,".").concat(u)]||d[u]||s[u]||r;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:l,o[1]=p;for(var k=2;k<r;k++)o[k]=a[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91299:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=a(60795),l=(a(59496),a(49613));const r={title:"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41"},o=void 0,p={unversionedId:"create-chaos-mesh-workflow",id:"create-chaos-mesh-workflow",title:"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41",description:"Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/create-chaos-mesh-workflow.md",sourceDirName:".",slug:"/create-chaos-mesh-workflow",permalink:"/zh/docs/next/create-chaos-mesh-workflow",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/create-chaos-mesh-workflow.md",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41"},sidebar:"docs",previous:{title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",permalink:"/zh/docs/next/inspect-chaos-experiments"},next:{title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",permalink:"/zh/docs/next/run-serial-or-parallel-experiments"}},i={},k=[{value:"Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb",id:"chaos-mesh-\u5de5\u4f5c\u6d41\u7b80\u4ecb",level:2},{value:"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u5de5\u4f5c\u6d41",id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u5de5\u4f5c\u6d41",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6253\u5f00 Chaos Dashboard",id:"\u7b2c-1-\u6b65\u6253\u5f00-chaos-dashboard",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f",id:"\u7b2c-2-\u6b65\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9",id:"\u7b2c-3-\u6b65\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41",id:"\u7b2c-4-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41",level:3},{value:"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e <code>kubectl</code> \u521b\u5efa\u5de5\u4f5c\u6d41",id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa\u5de5\u4f5c\u6d41",level:2},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"Workflow \u5b57\u6bb5\u8bf4\u660e",id:"workflow-\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"Template \u5b57\u6bb5\u8bf4\u660e",id:"template-\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"Task \u5b57\u6bb5\u8bf4\u660e",id:"task-\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e",id:"conditionalbranch-\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"Container \u5b57\u6bb5\u8bf4\u660e",id:"container-\u5b57\u6bb5\u8bf4\u660e",level:3}],m={toc:k},d="wrapper";function s(t){let{components:e,...r}=t;return(0,l.kt)(d,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"chaos-mesh-\u5de5\u4f5c\u6d41\u7b80\u4ecb"},"Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5728 Chaos Mesh \u4e2d\u6a21\u62df\u771f\u5b9e\u7684\u7cfb\u7edf\u6545\u969c\u65f6\uff0c\u901a\u5e38\u4f34\u968f\u7740\u6301\u7eed\u9a8c\u8bc1\u3002\u4f60\u53ef\u80fd\u5e0c\u671b\u5728 Chaos Mesh \u5e73\u53f0\u4e0a\u6784\u5efa\u4e00\u7cfb\u5217\u6545\u969c\uff0c\u800c\u4e0d\u662f\u6267\u884c\u5355\u4e2a\u72ec\u7acb\u7684\u6df7\u6c8c\u6545\u969c\u6ce8\u5165\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u4e3a\u6ee1\u8db3\u8be5\u9700\u6c42\uff0cChaos Mesh \u63d0\u4f9b\u4e86 Chaos Mesh \u5de5\u4f5c\u6d41\uff0c\u4e00\u4e2a\u5185\u7f6e\u7684\u5de5\u4f5c\u6d41\u5f15\u64ce\u3002\u4f7f\u7528\u8be5\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u4e32\u884c\u6216\u5e76\u884c\u5730\u6267\u884c\u591a\u79cd\u4e0d\u540c\u7684 Chaos \u5b9e\u9a8c\uff0c \u7528\u4e8e\u6a21\u62df\u751f\u4ea7\u7ea7\u522b\u7684\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0c Chaos Mesh \u5de5\u4f5c\u6d41\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e32\u884c\u7f16\u6392"),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u884c\u7f16\u6392"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u5206\u652f")),(0,l.kt)("p",null,"\u4f7f\u7528\u573a\u666f\u4e3e\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e76\u884c\u7f16\u6392\u540c\u65f6\u6ce8\u5165\u591a\u4e2a NetworkChaos \u6a21\u62df\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e32\u884c\u7f16\u6392\u4e2d\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u4f7f\u7528\u6761\u4ef6\u5206\u652f\u51b3\u5b9a\u662f\u5426\u6267\u884c\u5269\u4e0b\u7684\u6b65\u9aa4")),(0,l.kt)("p",null,"Chaos Mesh \u5de5\u4f5c\u6d41 \u5728\u8bbe\u8ba1\u65f6\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53c2\u8003\u4e86 Argo \u5de5\u4f5c\u6d41\u3002\u5982\u679c\u60a8\u719f\u6089 Argo \u5de5\u4f5c\u6d41\uff0c\u60a8\u4e5f\u80fd\u5f88\u5feb\u5730\u4e0a\u624b Chaos Mesh \u5de5\u4f5c\u6d41\u3002"),(0,l.kt)("p",null,"Github \u4ed3\u5e93\u4e2d\u542b\u6709\u5176\u4ed6\u5de5\u4f5c\u6d41\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow"},"\u793a\u4f8b"),"."),(0,l.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u5de5\u4f5c\u6d41"},"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u5de5\u4f5c\u6d41"),(0,l.kt)("h3",{id:"\u7b2c-1-\u6b65\u6253\u5f00-chaos-dashboard"},"\u7b2c 1 \u6b65\uff1a\u6253\u5f00 Chaos Dashboard"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5de5\u4f5c\u6d41"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New Workflow",src:a(28146).Z,width:"770",height:"443"})),(0,l.kt)("h3",{id:"\u7b2c-2-\u6b65\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f"},"\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Workflow Info",src:a(8086).Z,width:"651",height:"449"})),(0,l.kt)("h3",{id:"\u7b2c-3-\u6b65\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9"},"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6839\u636e\u9700\u6c42\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u4efb\u52a1\u7c7b\u578b")),(0,l.kt)("p",{parentName:"li"},"\u5728\u672c\u793a\u4f8b\u4e2d\u9009\u62e9\u7684\u4efb\u52a1\u7c7b\u578b\u4e3a\u201d\u5355\u4e00\u201c\u3002"),(0,l.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Chaos Dashboard \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u4e3a "entry" \u7684\u4e32\u884c\u8282\u70b9\uff0c\u4f5c\u5176\u7528\u4e3a\u8be5\u5de5\u4f5c\u6d41\u7684\u5165\u53e3\u3002')),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Choose Task Type",src:a(40981).Z,width:"387",height:"456"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f"),(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u65b9\u6cd5\u4e0e\u521b\u5efa\u666e\u901a\u7684\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u540c\u3002\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a POD KILL \u7c7b\u578b\u7684 PodChaos \u6545\u969c\uff0c\u5e76\u5c06\u5176\u547d\u540d\u4e3a \u201ckill-nginx\u201d\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Create podkill in Workflow",src:a(39941).Z,width:"1239",height:"1592"})))),(0,l.kt)("h3",{id:"\u7b2c-4-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41"},"\u7b2c 4 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5148\u5728",(0,l.kt)("strong",{parentName:"p"},"\u9884\u89c8"),"\u67e5\u770b\u5de5\u4f5c\u6d41\u5b9a\u4e49\u3002\u786e\u8ba4\u65e0\u8bef\u540e\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u4ea4\u5de5\u4f5c\u6d41"),"\u6309\u94ae\u521b\u5efa\u5de5\u4f5c\u6d41\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Submit Workflow",src:a(947).Z,width:"603",height:"1037"})),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa\u5de5\u4f5c\u6d41"},"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e ",(0,l.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u521b\u5efa\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,"\u5de5\u4f5c\u6d41 \u7c7b\u4f3c\u4e8e\u5404\u79cd\u7c7b\u578b\u7684 Chaos \u5bf9\u8c61\uff0c\u540c\u6837\u4f5c\u4e3a CRD \u5b58\u5728\u4e8e kubernetes \u96c6\u7fa4\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create -f <workflow.yaml>")," \u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41\u3002\u4ee5\u4e0b\u4e3a\u521b\u5efa\u7684\u5177\u4f53\u793a\u4f8b\u3002\u4f7f\u7528\u672c\u5730 YAML \u6587\u4ef6\u521b\u5efa\u5de5\u4f5c\u6d41\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f <workflow.yaml>\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u7f51\u7edc\u4e0a\u7684 YAML \u6587\u4ef6\u521b\u5efa\u5de5\u4f5c\u6d41\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n")),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u5de5\u4f5c\u6d41 YAML \u6587\u4ef6\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff0c\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u5c06\u4f1a\u540c\u65f6\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"StressChaos"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"PodChaos"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos-schedule\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: '@every 2s'\n        type: 'PodChaos'\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              'app': 'hello-kubernetes'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," \u5b9a\u4e49\u4e86\u5b9e\u9a8c\u4e2d\u7684\u5404\u4e2a\u6b65\u9aa4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"entry")," \u5b9a\u4e49\u4e86\u5de5\u4f5c\u6d41\u6267\u884c\u65f6\u7684\u5165\u53e3\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"templates")," \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u4ee3\u8868\u4e86\u4e00\u4e2a\u5de5\u4f5c\u6d41\u7684\u6b65\u9aa4\uff0c\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"templateType: Parallel")," \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a\u5e76\u884c\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"deadline: 240s")," \u4ee3\u8868\u8fd9\u4e2a\u8282\u70b9\u4e0b\u7684\u6240\u6709\u5e76\u884c\u5b9e\u9a8c\u9884\u671f\u5728 240 \u79d2\u5185\u6267\u884c\u5b8c\u6210\uff0c\u5426\u5219\u5c06\u8d85\u65f6\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"children")," \u4ee3\u8868\u5c06\u8981\u5e76\u884c\u6267\u884c\u7684\u5176\u4ed6 template \u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u518d\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"templateType: PodChaos")," \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a PodChaos \u5b9e\u9a8c\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"deadline: 40s")," \u4ee3\u8868\u5f53\u524d Chaos \u5b9e\u9a8c\u5c06\u6301\u7eed 40 \u79d2\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"podChaos")," \u5b57\u6bb5\u662f PodChaos \u5b9e\u9a8c\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 YAML \u6587\u4ef6\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5de5\u4f5c\u6d41\u8f83\u4e3a\u7075\u6d3b\uff0c\u4f60\u53ef\u4ee5\u5bf9\u4e32\u884c\u6d3b\u5e76\u884c\u7f16\u6392\u8fdb\u884c\u5d4c\u5957\uff0c\u58f0\u660e\u590d\u6742\u7684\u7f16\u6392\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0e\u6761\u4ef6\u5206\u652f\u7ec4\u5408\u8fbe\u5230\u5faa\u73af\u7684\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("h3",{id:"workflow-\u5b57\u6bb5\u8bf4\u660e"},"Workflow \u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entry"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u5de5\u4f5c\u6d41\u7684\u5165\u53e3\uff0c\u503c\u4e3a templates \u4e2d\u67d0\u4e00 template \u7684\u540d\u79f0\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"templates"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Template"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u5de5\u4f5c\u6d41\u4e2d\u53ef\u6267\u884c\u7684\u5404\u4e2a\u6b65\u9aa4\u7684\u884c\u4e3a\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#template-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Template \u5b57\u6bb5\u8bf4\u660e")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"template-\u5b57\u6bb5\u8bf4\u660e"},"Template \u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"template \u7684\u540d\u79f0\uff0c\u9700\u8981\u7b26\u5408 DNS-1123 \u547d\u540d\u89c4\u8303\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"any-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"template \u7684\u7c7b\u578b\u3002\u53ef\u9009\u503c\u6709: Task\u3001Serial\u3001Parallel\u3001Suspend\u3001Schedule\u3001AWSChaos\u3001DNSChaos\u3001GCPChaos\u3001HTTPChaos\u3001IOChaos\u3001JVMChaos\u3001KernelChaos\u3001NetworkChaos\u3001PodChaos\u3001StressChaos\u3001TimeChaos\u3001StatusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"PodChaos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deadline"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"template \u6301\u7eed\u7684\u65f6\u95f4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"'5m30s'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u8be5 template \u4e0b\u7684\u5b50\u4efb\u52a1\uff0c\u5f53 type \u4e3a Serial \u6216 Parallel \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'["any-chaos-1", "another-serial-2", "any-shcedule"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"task"),(0,l.kt)("td",{parentName:"tr",align:null},"Task"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u4efb\u52a1\uff0c\u5f53 type \u4e3a Task \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#task-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Task \u5b57\u6bb5\u8bf4\u660e")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conditionalBranches"),(0,l.kt)("td",{parentName:"tr",align:null},"[]ConditionalBranch"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u81ea\u5b9a\u4efb\u52a1\u540e\u7684\u6761\u4ef6\u5206\u652f\uff0c\u5f53 type \u4e3a Task \u65f6\u53ef\u9009\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#conditionalbranch-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awsChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e AWSChaos\uff0c\u5f53 type \u4e3a AWSChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-aws-chaos"},"\u6a21\u62df AWS \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dnsChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e DNSChaos\uff0c\u5f53 type \u4e3a DNSChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-dns-chaos-on-kubernetes"},"\u6a21\u62df DNS \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gcpChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e GCPChaos\uff0c\u5f53 type \u4e3a GCPChaos\uff0c\u5f53 \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-gcp-chaos"},"\u6a21\u62df GCP \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e HTTPChaos\uff0c\u5f53 type \u4e3a HTTPChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-http-chaos-on-kubernetes"},"\u6a21\u62df HTTP \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ioChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e IOChaos\uff0c\u5f53 type \u4e3a IOChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-io-chaos-on-kubernetes"},"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jvmChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e JVMChaos\uff0c\u5f53 type \u4e3a JVMChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-jvm-application-chaos"},"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kernelChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e KernelChaos\uff0c\u5f53 type \u4e3a KernelChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-kernel-chaos-on-kubernetes"},"\u6a21\u62df\u5185\u6838\u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"networkChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e NetworkChaos\uff0c\u5f53 type \u4e3a NetworkChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-aws-chaos"},"\u6a21\u62df AWS \u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"podChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e PodChaosd \uff0c\u5f53 type \u4e3a PodChaosd \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-network-chaos-on-kubernetes"},"\u6a21\u62df\u7f51\u7edc\u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e StressChaos\uff0c\u5f53 type \u4e3a StressChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-heavy-stress-on-kubernetes"},"\u6a21\u62df\u538b\u529b\u573a\u666f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e TimeChaos\uff0c\u5f53 type \u4e3a TimeChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/simulate-time-chaos-on-kubernetes"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e Schedule \uff0c\u5f53 type \u4e3a Schedule \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/define-scheduling-rules"},"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e StatusCheck\uff0c\u5f53 type \u4e3a StatusCheck \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/next/status-check-in-workflow"},"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abortWithStatusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5f53 StatusCheck \u5931\u8d25\u65f6\u662f\u5426\u7ec8\u6b62\u5de5\u4f5c\u6d41\uff0c\u5f53 type \u4e3a StatusCheck \u65f6\u53ef\u9009\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u5728\u5de5\u4f5c\u6d41\u4e2d\u5efa\u7acb\u6709\u6301\u7eed\u65f6\u95f4\u7684 Chaos \u65f6\uff0c\u9700\u8981\u5c06\u6301\u7eed\u65f6\u95f4\u586b\u5199\u5230\u5916\u5c42\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," \u5b57\u6bb5\u4e2d\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Chaos \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"duration")," \u5b57\u6bb5\u3002")),(0,l.kt)("h3",{id:"task-\u5b57\u6bb5\u8bf4\u660e"},"Task \u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\uff0c\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"#container-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Container \u5b57\u6bb5\u8bf4\u660e")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumes"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82e5\u9700\u8981\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\u4e2d\u6302\u8f7d\u5377\uff0c\u5219\u9700\u8981\u5728\u8be5\u5b57\u6bb5\u58f0\u660e\u5377\u3002\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#volume-v1-core"},"corev1.Volume")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"conditionalbranch-\u5b57\u6bb5\u8bf4\u660e"},"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6761\u4ef6\u5206\u652f\u60f3\u8981\u6267\u884c\u7684 template \u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"another-chaos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u4e3a\u5e03\u5c14\u7684\u8868\u8fbe\u5f0f\uff0c\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5f53\u8868\u8fbe\u5f0f\u503c\u4e3a\u771f\u65f6\uff0c\u5f53\u524d\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u88ab\u6267\u884c\u3002\u672a\u8bbe\u7f6e\u8be5\u503c\u65f6\uff0c\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\u76f4\u63a5\u6267\u884c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"exitCode == 0")))),(0,l.kt)("p",null,"\u76ee\u524d\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," \u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e0a\u4e0b\u6587\u53d8\u91cf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exitCode")," \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u9000\u51fa\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout")," \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u6807\u51c6\u8f93\u51fa\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u5728\u540e\u7eed\u8865\u5145\u3002")),(0,l.kt)("p",null,"\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"\u8be5\u6587\u6863"),"\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," \u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("h3",{id:"container-\u5b57\u6bb5\u8bf4\u660e"},"Container \u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ea\u5217\u4e3e\u4e86\u5e38\u7528\u5b57\u6bb5\uff0c\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core"},"corev1.Container")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"busybox:latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u6267\u884c\u7684\u547d\u4ee4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["wget", "-q", "http://httpbin.org/status/201"]'))))))}s.isMDXComponent=!0},40981:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/choose-task-type-b5234da563fdd6d24768a5d4a09fd4b3.png"},39941:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-podkill-in-workflow-0e94dafa7e77839b9c72750ae328632b.png"},28146:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new-workflow-5ed1b1dc5cfc3e9eb000f6b64db768cc.png"},947:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/submit-workflow-e441f2bc16d077b5479b45e835869ffe.png"},8086:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/workflow-info-13a1d29e9d2676d9cfa769efeac4d672.png"}}]);
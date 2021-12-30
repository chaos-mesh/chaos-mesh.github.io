"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1297],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?l.createElement(k,o(o({ref:t},p),{},{components:n})):l.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6228:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"},i=void 0,c={unversionedId:"define-chaos-experiment-scope",id:"version-2.1.2/define-chaos-experiment-scope",isDocsHomePage:!1,title:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u4e3a\u5355\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4\uff0c\u5e2e\u52a9\u4f60\u51c6\u786e\u5730\u63a7\u5236\u6545\u969c\u7206\u70b8\u534a\u5f84\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.2/define-chaos-experiment-scope.md",sourceDirName:".",slug:"/define-chaos-experiment-scope",permalink:"/zh/docs/define-chaos-experiment-scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.2/define-chaos-experiment-scope.md",tags:[],version:"2.1.2",frontMatter:{title:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"},sidebar:"version-2.1.2/docs",previous:{title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",permalink:"/zh/docs/configure-enabled-namespace"},next:{title:"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219",permalink:"/zh/docs/define-scheduling-rules"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",id:"\u5728-yaml-\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",children:[{value:"Namespace Selectors",id:"namespace-selectors",children:[],level:3},{value:"Label Selector",id:"label-selector",children:[],level:3},{value:"Expression Selector",id:"expression-selector",children:[],level:3},{value:"Annotation Selector",id:"annotation-selector",children:[],level:3},{value:"Field Selector",id:"field-selector",children:[],level:3},{value:"PodPhase Selector",id:"podphase-selector",children:[],level:3},{value:"Node Selector",id:"node-selector",children:[],level:3},{value:"Node List",id:"node-list",children:[],level:3},{value:"Pod List",id:"pod-list",children:[],level:3}],level:2},{value:"\u5728 Dashboard \u4e0a\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",id:"\u5728-dashboard-\u4e0a\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u4e3a\u5355\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4\uff0c\u5e2e\u52a9\u4f60\u51c6\u786e\u5730\u63a7\u5236\u6545\u969c\u7206\u70b8\u534a\u5f84\u3002"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5728 Chaos Mesh \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u9009\u62e9\u5668 (Selectors) \u7684\u65b9\u5f0f\u5b9a\u4e49\u5355\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4f5c\u7528\u8303\u56f4\u3002"),(0,a.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u7684 Selector \u5bf9\u5e94\u7740\u4e0d\u540c\u7684\u8fc7\u6ee4\u89c4\u5219\u3002\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u4e2d\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a Selector \u6765\u5b9a\u4e49\u4f60\u7684\u5b9e\u9a8c\u8303\u56f4\u3002\u5982\u679c\u540c\u65f6\u6307\u5b9a\u591a\u4e2a Selector\uff0c\u4ee3\u8868\u5f53\u524d\u5b9e\u9a8c\u76ee\u6807\u9700\u8981\u540c\u65f6\u6ee1\u8db3\u6240\u6709\u6307\u5b9a\u7684 Selectors \u7684\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u5728\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\u65f6\uff0cChaos Mesh \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u8303\u56f4\u7684\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u6309\u9700\u9009\u62e9\u4ee5\u4e0b\u4efb\u4e00\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"),(0,a.kt)("li",{parentName:"ul"},"\u5728 Dashboard \u4e0a\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,a.kt)("h2",{id:"\u5728-yaml-\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"},"\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"),(0,a.kt)("p",null,"\u672c\u5c0f\u8282\u63d0\u4f9b\u4e86\u4e0d\u540c\u7c7b\u578b\u7684 Selectors \u7684\u542b\u4e49\u3001\u7528\u6cd5\u3001\u5728 YAML \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u793a\u4f8b\u3002\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4\u65f6\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u5b9e\u9a8c\u8303\u56f4\u7684\u8fc7\u6ee4\u9700\u6c42\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a Selectors\u3002"),(0,a.kt)("h3",{id:"namespace-selectors"},"Namespace Selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64 Selector \u4e3a\u7a7a\u6216\u8005\u4e0d\u6307\u5b9a\u6b64 Selector\uff0cChaos Mesh \u4f1a\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5f53\u524d\u6df7\u6c8c\u5b9e\u9a8c\u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),(0,a.kt)("h3",{id:"label-selector"},"Label Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u9700\u8981\u5e26\u6709\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Labels"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u952e\u503c\u5bf9\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a Labels\uff0c\u4ee3\u8868\u5b9e\u9a8c\u76ee\u6807\u9700\u8981\u5e26\u6709\u6b64 Selector \u6307\u5b9a\u7684\u6240\u6709 Labels\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,a.kt)("h3",{id:"expression-selector"},"Expression Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e00\u7ec4\u5b9a\u4e49 Label \u89c4\u5219\u7684",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"\u8868\u8fbe\u5f0f"),"\u7528\u6765\u9650\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6b64 Selector \u8bbe\u7f6e\u4e0d\u6ee1\u8db3\u67d0\u4e9b Labels \u7684\u5b9e\u9a8c\u76ee\u6807 Pod\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    expressionSelectors:\n      - { key: tier, operator: In, values: [cache] }\n      - { key: environment, operator: NotIn, values: [dev] }\n")),(0,a.kt)("h3",{id:"annotation-selector"},"Annotation Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u9700\u8981\u5e26\u6709\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"Annotations"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u952e\u503c\u5bf9\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a Annotations\uff0c\u4ee3\u8868\u5b9e\u9a8c\u76ee\u6807\u9700\u8981\u5e26\u6709\u6b64 Selector \u6307\u5b9a\u7684\u6240\u6709 Annotations\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),(0,a.kt)("h3",{id:"field-selector"},"Field Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"},"Fields"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u952e\u503c\u5bf9\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a Fields \u5b57\u6bb5\uff0c\u4ee3\u8868\u5b9e\u9a8c\u76ee\u6807\u9700\u8981\u5e26\u6709\u6b64 Selector \u8bbe\u7f6e\u7684\u6240\u6709 Fields\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),(0,a.kt)("h3",{id:"podphase-selector"},"PodPhase Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u7684 Phase\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684 Phase \u6709\uff1aPending\u3001Running\u3001Succeeded\u3001Failed\u3001Unknown\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u9009\u9879\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u610f\u5473\u4e0d\u9650\u5236\u76ee\u6807 Pod \u7684 Phase\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),(0,a.kt)("h3",{id:"node-selector"},"Node Selector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u6240\u5c5e\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/"},"Node \u7684 Labels"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u952e\u503c\u5bf9\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a Node Labels\uff0c\u4ee3\u8868\u5b9e\u9a8c\u76ee\u6807 Pod \u6240\u5c5e\u7684 Node \u9700\u8981\u5e26\u6709\u6b64 Selector \u6307\u5b9a\u7684\u6240\u6709 Labels\u3002")),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u901a\u8fc7 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodeSelectors:\n      'node-label': 'label-one'\n")),(0,a.kt)("h3",{id:"node-list"},"Node List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u6240\u5c5e\u7684 Node\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a \u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807 Pod \u53ea\u9700\u5c5e\u4e8e\u914d\u7f6e\u7684 Node \u5217\u8868\u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a Node \u5373\u53ef\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodes:\n      - node1\n      - node2\n")),(0,a.kt)("h3",{id:"pod-list"},"Pod List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b9e\u9a8c\u76ee\u6807 Pod \u547d\u540d\u7a7a\u95f4\u548c Pod \u5217\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},'\u6570\u636e\u7c7b\u578b\uff1a\u952e\u503c\u5bf9\u7c7b\u578b\u3002"\u952e"\u4e3a\u76ee\u6807 Pod \u6240\u5c5e\u7684 Namespace, "\u503c"\u4e3a\u76ee\u6807 Pod \u5217\u8868\u3002'),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981\u6307\u5b9a\u4e86\u6b64 Selector\uff0cChaos Mesh \u5c31\u4f1a",(0,a.kt)("strong",{parentName:"li"},"\u5ffd\u7565\u5176\u4ed6\u914d\u7f6e\u7684 Selectors"),"\u3002")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")),(0,a.kt)("h2",{id:"\u5728-dashboard-\u4e0a\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"},"\u5728 Dashboard \u4e0a\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u5728\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\u65f6\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u8303\u56f4\u3002"),(0,a.kt)("p",null,"\u76ee\u524d Chaos Dashboard \u4e0a\u63d0\u4f9b\u4e86\u4ee5\u4e0b Selectors\u3002\u53ef\u4ee5\u6309\u7167\u5b9e\u9a8c\u8303\u56f4\u7684\u8fc7\u6ee4\u9700\u6c42\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a Selectors\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\u9009\u62e9\u5668 (",(0,a.kt)("inlineCode",{parentName:"li"},"Namespace Selectors"),")"),(0,a.kt)("li",{parentName:"ul"},"\u6807\u7b7e\u9009\u62e9\u5668 (",(0,a.kt)("inlineCode",{parentName:"li"},"Label Selectors"),")"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u89e3\u9009\u62e9\u5668 (",(0,a.kt)("inlineCode",{parentName:"li"},"Annotation Selectors"),")"),(0,a.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u9009\u62e9\u5668 (",(0,a.kt)("inlineCode",{parentName:"li"},"Phase Selectors"),")\u3002")),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6e Selectors \u7684\u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 Dashboard \u4e2d\u5b9e\u65f6\u9884\u89c8\u5b9e\u9a8c\u76ee\u6807\u7684\u5b9e\u9645\u8303\u56f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 Selectors \u8fc7\u6ee4\u51fa\u7684\u76ee\u6807 Pod \u8303\u56f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard Selectors",src:n(19155).Z})))}d.isMDXComponent=!0},19155:function(e,t,n){t.Z=n.p+"assets/images/dashboard_selectors_zh-6e732e9ddf2ae8e69121b54e93e96b96.png"}}]);
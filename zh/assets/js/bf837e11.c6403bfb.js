"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5904],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64772:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"\u6a21\u62df GCP \u6545\u969c"},p=void 0,s={unversionedId:"simulate-gcp-chaos",id:"version-2.0.6/simulate-gcp-chaos",isDocsHomePage:!1,title:"\u6a21\u62df GCP \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a GCP \u8282\u70b9\u6ce8\u5165\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa GCPChaos \u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/simulate-gcp-chaos.md",sourceDirName:".",slug:"/simulate-gcp-chaos",permalink:"/zh/docs/2.0.6/simulate-gcp-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/simulate-gcp-chaos.md",tags:[],version:"2.0.6",frontMatter:{title:"\u6a21\u62df GCP \u6545\u969c"},sidebar:"version-2.0.6/docs",previous:{title:"\u6a21\u62df AWS \u6545\u969c",permalink:"/zh/docs/2.0.6/simulate-aws-chaos"},next:{title:"\u6a21\u62df HTTP \u6545\u969c",permalink:"/zh/docs/2.0.6/simulate-http-chaos-on-kubernetes"}},m=[{value:"GCPChaos \u4ecb\u7ecd",id:"gcpchaos-\u4ecb\u7ecd",children:[],level:2},{value:"\u521b\u5efa Secret \u6587\u4ef6",id:"\u521b\u5efa-secret-\u6587\u4ef6",children:[],level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[],level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"node-stop \u793a\u4f8b",id:"node-stop-\u793a\u4f8b",children:[],level:3},{value:"node-reset \u793a\u4f8b",id:"node-reset-\u793a\u4f8b",children:[],level:3},{value:"disk-loss \u793a\u4f8b",id:"disk-loss-\u793a\u4f8b",children:[],level:3},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[],level:3}],level:2}],c={toc:m};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a GCP \u8282\u70b9\u6ce8\u5165\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa GCPChaos \u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"gcpchaos-\u4ecb\u7ecd"},"GCPChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"GCPChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa GCPChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cGCPChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Node Stop"),"\uff1a\u4f7f\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u8fdb\u5165\u505c\u6b62\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Node Reset"),"\uff1a\u91cd\u7f6e\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Disk Loss"),"\uff1a\u4ece\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u4e2d\u5378\u8f7d\u5b58\u50a8\u5377\u3002")),(0,l.kt)("h2",{id:"\u521b\u5efa-secret-\u6587\u4ef6"},"\u521b\u5efa Secret \u6587\u4ef6"),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5730\u8fde\u63a5 GCP \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u63d0\u524d\u521b\u5efa\u4e00\u4e2a Kubernetes Secret \u6587\u4ef6\u7528\u4e8e\u5b58\u50a8\u8ba4\u8bc1\u76f8\u5173\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"secret")," \u6587\u4ef6\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-testing\ntype: Opaque\nstringData:\n  service_account: your-gcp-service-account-base64-encode\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"name")," \u8868\u793a Kubernetes Secret \u5bf9\u8c61\u7684\u540d\u5b57\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"namespace")," \u8868\u793a Kubernetes Secret \u5bf9\u8c61\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"service_account")," \u5b58\u50a8 GCP \u96c6\u7fa4\u7684\u670d\u52a1\u8d26\u53f7\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u9700\u8981\u5bf9 GCP \u96c6\u7fa4\u7684\u670d\u52a1\u8d26\u53f7\u8fdb\u884c ",(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/Base64"},"Base64")," \u7f16\u7801\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5df2\u5b89\u88c5 Dashboard\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"kubectl port-forward")," \u65b9\u5f0f\u8bbf\u95ee Dashboard\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,l.kt)("p",{parentName:"li"},"\u63a5\u7740\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,l.kt)("inlineCode",{parentName:"a"},"http://localhost:2333")),"\u8bbf\u95ee Dashboard \u3002"))))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:a(92573).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u5904\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"GCP \u6545\u969c"),"\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,l.kt)("strong",{parentName:"p"},"STOP NODE"),"\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:a(95671).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:a(85671).Z})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:a(59834).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("h3",{id:"node-stop-\u793a\u4f8b"},"node-stop \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"gcpchaos-node-stop.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-stop-example\n  namespace: chaos-testing\nspec:\n  action: node-stop\n  secretName: 'cloud-key-secret'\n  project: 'your-project'\n  zone: 'your-zone'\n  instance: 'your-instance'\n  duration: '5m'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u4e2d\u6ce8\u5165 node-stop \u6545\u969c\uff0c\u4f7f\u8be5 GCP \u5b9e\u4f8b\u5728 5 \u5206\u949f\u65f6\u95f4\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8e\u505c\u6b62 GCP \u5b9e\u4f8b\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/stop-start-instance"},"\u505c\u6b62 GCP \u5b9e\u4f8b"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 kubectl \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-node-stop.yaml\n")))),(0,l.kt)("h3",{id:"node-reset-\u793a\u4f8b"},"node-reset \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"gcpchaos-node-reset.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-reset-example\n  namespace: chaos-testing\nspec:\n  action: node-reset\n  secretName: 'cloud-key-secret'\n  project: 'your-project'\n  zone: 'your-zone'\n  instance: 'your-instance'\n  duration: '5m'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u4e2d\u6ce8\u5165 node-reset \u6545\u969c\uff0c\u4f7f\u8be5 GCP \u5b9e\u4f8b\u91cd\u7f6e\u4e00\u6b21\u3002"),(0,l.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8e\u91cd\u7f6e GCP \u5b9e\u4f8b\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/stop-start-instance#resetting_an_instance"},"\u91cd\u7f6e GCP \u5b9e\u4f8b"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 kubectl \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-node-reset.yaml\n")))),(0,l.kt)("h3",{id:"disk-loss-\u793a\u4f8b"},"disk-loss \u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"gcpchaos-disk-loss.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: disk-loss-example\n  namespace: chaos-testing\nspec:\n  action: disk-loss\n  secretName: 'cloud-key-secret'\n  project: 'your-project'\n  zone: 'your-zone'\n  instance: 'your-instance'\n  deviceNames: ['disk-name']\n  duration: '5m'\n")),(0,l.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 GCP \u5b9e\u4f8b\u4e2d\u6ce8\u5165 disk-loss \u6545\u969c\uff0c\u4f7f\u8be5 GCP \u5b9e\u4f8b\u5728 5 \u5206\u949f\u5185\u4e0e\u6307\u5b9a\u5b58\u50a8\u8bbe\u5907\u5206\u79bb\u3002"),(0,l.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8e\u5206\u79bb GCP \u5b58\u50a8\u8bbe\u5907\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/reference/rest/v1/instances/detachDisk"},"\u5206\u79bb GCP \u5b58\u50a8"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 kubectl \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-disk-loss.yaml\n")))),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6545\u969c\u7c7b\u578b\uff0c\u53ef\u9009\u62e9\u7684\u7c7b\u578b\u5305\u62ec\uff1anode-stop\u3001node-reset\u3001disk-loss"),(0,l.kt)("td",{parentName:"tr",align:null},"node-stop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"node-stop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b58\u50a8 GCP \u8ba4\u8bc1\u4fe1\u606f\u7684 Kubernetes Secret \u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"cloud-key-secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a GCP \u9879\u76ee\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"your-project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zone"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a GCP \u5b9e\u4f8b\u533a\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"us-central1-a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a GCP \u5b9e\u4f8b\u7684 ID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"your-gcp-instance-id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceNames"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 action \u4e3a disk-loss \u5fc5\u586b\uff0c\u6307\u5b9a\u8bbe\u5907\u78c1\u76d8 ID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'["your-disk-id"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")))))}d.isMDXComponent=!0},95671:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashborad-2_zh-153c6ac35455b96172fb09bfa3a5a0de.jpg"},85671:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashborad-3_zh-70eccfd27ad38df1449844b2504496a7.jpg"},59834:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashborad-4_zh-e30a0b21f037f369b69c49dc4c2e0b42.jpg"},92573:function(e,t,a){t.Z=a.p+"assets/images/create-pod-chaos-on-dashborad-1_zh-8061597bd8deaadfedc8abf3a3685266.jpg"}}]);
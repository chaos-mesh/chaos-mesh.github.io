"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4910],{17942:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(50959);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(51163),r=(a(50959),a(17942));const l={title:"\u6a21\u62df Azure \u6545\u969c"},i=void 0,p={unversionedId:"simulate-azure-chaos",id:"version-2.5.1/simulate-azure-chaos",title:"\u6a21\u62df Azure \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u6765\u6a21\u62df Azure \u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/simulate-azure-chaos.md",sourceDirName:".",slug:"/simulate-azure-chaos",permalink:"/zh/docs/simulate-azure-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/simulate-azure-chaos.md",tags:[],version:"2.5.1",frontMatter:{title:"\u6a21\u62df Azure \u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df AWS \u6545\u969c",permalink:"/zh/docs/simulate-aws-chaos"},next:{title:"\u6a21\u62df GCP \u6545\u969c",permalink:"/zh/docs/simulate-gcp-chaos"}},o={},m=[{value:"AzureChaos \u4ecb\u7ecd",id:"azurechaos-\u4ecb\u7ecd",level:2},{value:"<code>Secret</code> \u6587\u4ef6",id:"secret-\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"<code>vm-stop</code> \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"vm-stop-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:3},{value:"<code>vm-restart</code> \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"vm-restart-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:3},{value:"<code>disk-detach</code> \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"disk-detach-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:3},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:3}],d={toc:m},s="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u6765\u6a21\u62df Azure \u6545\u969c\u3002"),(0,r.kt)("h2",{id:"azurechaos-\u4ecb\u7ecd"},"AzureChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"AzureChaos \u80fd\u591f\u5e2e\u52a9\u4f60\u6a21\u62df\u6307\u5b9a\u7684 Azure \u5b9e\u4f8b\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cAzureChaos \u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u6545\u969c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VM Stop"),"\uff1a\u4f7f\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u8fdb\u5165\u505c\u6b62\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VM Restart"),"\uff1a\u91cd\u542f\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disk Detach"),"\uff1a\u4ece\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u4e2d\u5378\u8f7d\u6570\u636e\u78c1\u76d8\u3002")),(0,r.kt)("h2",{id:"secret-\u6587\u4ef6"},(0,r.kt)("inlineCode",{parentName:"h2"},"Secret")," \u6587\u4ef6"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5730\u8fde\u63a5 Azure \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u63d0\u524d\u521b\u5efa\u4e00\u4e2a Kubernetes Secret \u6587\u4ef6\u5b58\u50a8\u8ba4\u8bc1\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," \u6587\u4ef6\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  client_id: your-client-id\n  client_secret: your-client-secret\n  tenant_id: your-tenant-id\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," \u8868\u793a Kubernetes Secret \u5bf9\u8c61\u7684\u540d\u5b57\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace")," \u8868\u793a Kubernetes Secret \u5bf9\u8c61\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client_id")," \u5b58\u50a8 Azure \u5e94\u7528\u6ce8\u518c\u7684\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09ID\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client_secret")," \u5b58\u50a8 Azure \u5e94\u7528\u6ce8\u518c\u7684\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u7684\u673a\u5bc6\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tenant_id")," \u5b58\u50a8 Azure \u5e94\u7528\u6ce8\u518c\u7684\u76ee\u5f55\uff08\u79df\u6237\uff09ID\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret")," \u7684\u83b7\u53d6\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-cn/azure/healthcare-apis/azure-api-for-fhir/register-confidential-azure-ad-client-app"},"\u673a\u5bc6\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f"),"\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd Secret \u6587\u4ef6\u4e2d\u7684\u5e94\u7528\u6ce8\u518c\u5df2\u4f5c\u4e3a\u53c2\u4e0e\u8005\u6216\u6240\u6709\u8005\u6dfb\u52a0\u5230\u6307\u5b9a VM \u5b9e\u4f8b\u7684\u8bbf\u95ee\u63a7\u5236\uff08IAM\uff09\u4e2d\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u8fdb\u884c\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img",src:a(55754).Z,width:"832",height:"438"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u5904\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Azure \u6545\u969c"),"\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"p"},"VM STOP"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("h3",{id:"vm-stop-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},(0,r.kt)("inlineCode",{parentName:"h3"},"vm-stop")," \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-vm-stop.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-stop-example\n  namespace: chaos-mesh\nspec:\n  action: vm-stop\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"vm-stop")," \u6545\u969c\uff0c\u8be5 VM \u5b9e\u4f8b\u5c06\u5728 5 \u5206\u949f\u65f6\u95f4\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u9700\u67e5\u770b\u66f4\u591a\u5173\u4e8e\u505c\u6b62 VM \u5b9e\u4f8b\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/devtest-labs/use-command-line-start-stop-virtual-machines"},"\u542f\u52a8\u6216\u505c\u6b62 VM"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-vm-stop.yaml\n")))),(0,r.kt)("h3",{id:"vm-restart-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},(0,r.kt)("inlineCode",{parentName:"h3"},"vm-restart")," \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-vm-restart.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-restart-example\n  namespace: chaos-mesh\nspec:\n  action: vm-restart\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"vm-restart")," \u6545\u969c\uff0c\u8be5 VM \u5b9e\u4f8b\u5c06\u91cd\u542f\u4e00\u6b21\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u9700\u67e5\u770b\u66f4\u591a\u5173\u4e8e\u91cd\u542f VM \u5b9e\u4f8b\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/devtest-labs/devtest-lab-restart-vm"},"\u91cd\u65b0\u542f\u52a8 VM"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-vm-restart.yaml\n")))),(0,r.kt)("h3",{id:"disk-detach-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},(0,r.kt)("inlineCode",{parentName:"h3"},"disk-detach")," \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-disk-detach.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: disk-detach-example\n  namespace: chaos-mesh\nspec:\n  action: disk-detach\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  lun: 'your-disk-lun'\n  diskName: 'your-disk-name'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 VM \u5b9e\u4f8b\u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"disk-detach "),"\u6545\u969c\uff0c\u4f7f\u8be5 VM \u5b9e\u4f8b\u5728 5 \u5206\u949f\u5185\u4e0e\u6307\u5b9a\u6570\u636e\u78c1\u76d8\u5206\u79bb\u3002"),(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u66f4\u591a\u5173\u4e8e\u5206\u79bb Azure \u6570\u636e\u78c1\u76d8\u7684\u6d88\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/devtest-labs/devtest-lab-attach-detach-data-disk#detach-a-data-disk"},"\u5206\u79bb\u6570\u636e\u78c1\u76d8"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-disk-detach.yaml\n")))),(0,r.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\uff0c\u4ec5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"vm-restart"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secretName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b58\u50a8 Azure \u8ba4\u8bc1\u4fe1\u606f\u7684 Kubernetes Secret \u540d\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloud-key-secret"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptionID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a VM \u5b9e\u4f8b\u7684\u8ba2\u9605 ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"your-subscription-id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceGroupName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a VM \u5b9e\u4f8b\u6240\u5c5e\u7684\u8d44\u6e90\u7ec4\u7684\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"your-resource-group-name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lun"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 action \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach")," \u65f6\u5fc5\u586b\uff0c\u6307\u5b9a\u786c\u76d8\u7684 LUN (Logic Unit Number)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diskName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 action \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach")," \u65f6\u5fc5\u586b\uff0c\u6307\u5b9a\u8bbe\u5907\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATADISK_0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))))))}u.isMDXComponent=!0},55754:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-pod-chaos-on-dashboard-1_zh-8061597bd8deaadfedc8abf3a3685266.jpg"}}]);
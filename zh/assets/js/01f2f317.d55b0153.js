"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4824],{49613:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},i),{},{components:n})):a.createElement(h,o({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(60795),r=(n(59496),n(49613));const l={title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4"},o=void 0,s={unversionedId:"configure-enabled-namespace",id:"configure-enabled-namespace",title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",description:"\u672c\u7bc7\u6587\u7ae0\u63cf\u8ff0\u5982\u4f55\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u5176\u4ed6\u672a\u914d\u7f6e\u7684\u547d\u4ee4\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6545\u969c\u6ce8\u5165\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/configure-enabled-namespace.md",sourceDirName:".",slug:"/configure-enabled-namespace",permalink:"/zh/docs/next/configure-enabled-namespace",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/configure-enabled-namespace.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4"},sidebar:"docs",previous:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/zh/docs/next/manage-user-permissions"},next:{title:"Remote Cluster Management",permalink:"/zh/docs/next/remote-cluster-management"}},c={},p=[{value:"\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4",id:"\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4",level:2},{value:"\u5f00\u542f FilterNamespace \u529f\u80fd",id:"\u5f00\u542f-filternamespace-\u529f\u80fd",level:2},{value:"\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3",id:"\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3",level:2},{value:"\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",id:"\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",level:2}],i={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u63cf\u8ff0\u5982\u4f55\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u5176\u4ed6\u672a\u914d\u7f6e\u7684\u547d\u4ee4\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6545\u969c\u6ce8\u5165\u3002"),(0,r.kt)("h2",{id:"\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4"},"\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4"),(0,r.kt)("p",null,"Chaos Mesh \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8981\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u4f60\u9700\u8981\u5f00\u542f FilterNamespace \u529f\u80fd\uff08\u9ed8\u8ba4\u5173\u95ed\uff09\uff0c\u6b64\u529f\u80fd\u5c06\u5728\u5168\u5c40\u8303\u56f4\u5185\u751f\u6548\u3002\u5f00\u542f\u6b64\u529f\u80fd\u540e\uff0c\u4f60\u53ef\u4ee5\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3\uff0c\u5176\u4ed6\u672a\u6dfb\u52a0\u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6ce8\u5165\u6545\u969c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u4e3a\u5355\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u6307\u5b9a\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"),"\u3002")),(0,r.kt)("h2",{id:"\u5f00\u542f-filternamespace-\u529f\u80fd"},"\u5f00\u542f FilterNamespace \u529f\u80fd"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5c1a\u672a\u5b89\u88c5 Chaos Mesh\uff0c\u5728\u4f7f\u7528 Helm \u8fdb\u884c\u5b89\u88c5\u65f6\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=true")," \u6765\u5f00\u542f\u8fd9\u9879\u529f\u80fd\u3002Docker \u5bb9\u5668\u7684\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --set controllerManager.enableFilterNamespace=true\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u4f7f\u7528 Helm \u8fdb\u884c\u5b89\u88c5\u65f6\uff0c\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u547d\u4ee4\u548c\u53c2\u6570\u6709\u6240\u533a\u522b\uff0c\u8be6\u60c5\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/production-installation-using-helm"},"\u4f7f\u7528 Helm \u5b89\u88c5"),"\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u901a\u8fc7 Helm \u5b89\u88c5\u4e86 Chaos Mesh \uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u547d\u4ee4\u6765\u66f4\u65b0\u914d\u7f6e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --set controllerManager.enableFilterNamespace=true\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u4e2d\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," \u53c2\u6570\u6765\u8bbe\u7f6e\u591a\u4e2a\u53c2\u6570\uff0c\u8986\u76d6\u89c4\u5219\u662f\u540e\u8bbe\u7f6e\u7684\u8986\u76d6\u524d\u8bbe\u7f6e\u7684\u3002\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=false --set controllerManager.enableFilterNamespace=true")," \u4ecd\u5c06\u5f00\u542f\u8fd9\u9879\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," \u53c2\u6570\u6765\u6307\u5b9a\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u63cf\u8ff0\u914d\u7f6e\uff0c\u8be6\u7ec6\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B"},"Helm \u5347\u7ea7\u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3"},"\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3"),(0,r.kt)("p",null,"\u5728\u5f00\u542f FilterNamespace \u529f\u80fd\u540e\uff0cChaos Mesh \u5c06\u53ea\u4f1a\u5411\u5305\u542b\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/inject=enabled")," \u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u6ce8\u5165\u6545\u969c\u3002\u56e0\u6b64\uff0c\u5728\u8fdb\u884c\u6df7\u6c8c\u5b9e\u9a8c\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u8be5\u6ce8\u89e3\uff0c\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u5219\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6ce8\u5165\u6545\u969c\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u4e3a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," \u6dfb\u52a0\u6ce8\u89e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," \u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u540d\u5b57\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u3002\u5982\u679c\u6210\u529f\uff0c\u5f97\u5230\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5220\u9664\u8fd9\u4e00\u6ce8\u89e3\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-\n")),(0,r.kt)("p",null,"\u5982\u679c\u6210\u529f\uff0c\u5f97\u5230\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,r.kt)("h2",{id:"\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4"},"\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns -o jsonpath='{.items[?(@.metadata.annotations.chaos-mesh\\.org/inject==\"enabled\")].metadata.name}'\n")),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u4f1a\u8f93\u51fa\u6240\u6709\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/inject=enabled")," \u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u3002\u793a\u4f8b\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"default\n")))}u.isMDXComponent=!0}}]);
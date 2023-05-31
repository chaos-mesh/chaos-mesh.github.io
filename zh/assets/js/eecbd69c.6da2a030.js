"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[70915],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(k,l(l({ref:t},p),{},{components:r})):o.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<n;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var o=r(60795),a=(r(59496),r(49613));const n={title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},l=void 0,s={unversionedId:"check-workflow-status",id:"version-2.5.2/check-workflow-status",title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",description:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/check-workflow-status.md",sourceDirName:".",slug:"/check-workflow-status",permalink:"/zh/docs/2.5.2/check-workflow-status",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/check-workflow-status.md",tags:[],version:"2.5.2",frontMatter:{title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},sidebar:"docs",previous:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",permalink:"/zh/docs/2.5.2/send-http-request-on-workflow"},next:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5",permalink:"/zh/docs/2.5.2/status-check-in-workflow"}},c={},i=[{value:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",level:2},{value:"\u901a\u8fc7 <code>kubectl</code> \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 Chaos Dashboard \u4e2d\u5217\u51fa\u6240\u6709\u7684\u5de5\u4f5c\u6d41\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"List Workflows On Dashboard",src:r(79661).Z,width:"2367",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u60f3\u8981\u68c0\u67e5\u7684\u5de5\u4f5c\u6d41\uff0c\u67e5\u770b\u5de5\u4f5c\u6d41\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Workflow Status On Dashboard",src:r(70865).Z,width:"2312",height:"1848"})))),(0,a.kt)("h2",{id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u7ecf\u521b\u5efa\u7684\u5de5\u4f5c\u6d41\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> get workflow\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6839\u636e\u4e0a\u4e00\u6b65\u8f93\u51fa\u7684\u5de5\u4f5c\u6d41\u5217\u8868\uff0c\u9009\u62e9\u60f3\u67e5\u770b\u7684\u5de5\u4f5c\u6d41\u5e76\u5728\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u6307\u5b9a\u5176\u540d\u79f0\u3002\u6267\u884c\u547d\u4ee4\u4ee5\u83b7\u53d6\u8be5\u5de5\u4f5c\u6d41\u4e0b\u7684\u6240\u6709 WorkflowNode\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n')),(0,a.kt)("admonition",{parentName:"li",title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5de5\u4f5c\u6d41\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u6b65\u9aa4\u4f1a\u4ee5 WorkflowNode \u8fd9\u4e00 CustomResource \u6765\u8868\u793a\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a WorkflowNode \u7684\u8be6\u7ec6\u72b6\u6001\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> describe workflownode <workflow-node-name>\n")),(0,a.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5185\u5bb9\u5305\u62ec\u5f53\u524d\u8282\u70b9\u662f\u5426\u6267\u884c\u5b8c\u6210\u3001\u5e76\u884c/\u4e32\u884c\u8282\u70b9\u7684\u6267\u884c\u72b6\u6001\u3001\u5bf9\u5e94\u7684 Chaos \u5b9e\u9a8c\u5bf9\u8c61\u7b49\u3002"))))}d.isMDXComponent=!0},79661:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/list-workflow-on-dashboard-6512db7bb9dcad835debe7ac46c59271.png"},70865:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/workflow-status-on-dashboard-f011da2c525de53e2d9e8fb409a003ea.png"}}]);
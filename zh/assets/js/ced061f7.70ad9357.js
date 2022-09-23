"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[16688],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(o),f=n,d=u["".concat(c,".").concat(f)]||u[f]||k[f]||a;return o?r.createElement(d,l(l({ref:t},p),{},{components:o})):r.createElement(d,l({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=o(87462),n=(o(67294),o(3905));const a={title:"\u68c0\u67e5 Workflow \u72b6\u6001"},l=void 0,s={unversionedId:"check-workflow-status",id:"version-2.3.2/check-workflow-status",title:"\u68c0\u67e5 Workflow \u72b6\u6001",description:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5 Workflow \u72b6\u6001",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.2/check-workflow-status.md",sourceDirName:".",slug:"/check-workflow-status",permalink:"/zh/docs/2.3.2/check-workflow-status",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.2/check-workflow-status.md",tags:[],version:"2.3.2",frontMatter:{title:"\u68c0\u67e5 Workflow \u72b6\u6001"},sidebar:"docs",previous:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",permalink:"/zh/docs/2.3.2/send-http-request-on-workflow"},next:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5",permalink:"/zh/docs/2.3.2/status-check-in-workflow"}},c={},i=[{value:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5 Workflow \u72b6\u6001",id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5-workflow-\u72b6\u6001",level:2},{value:"\u901a\u8fc7 <code>kubectl</code> \u68c0\u67e5 Workflow \u72b6\u6001",id:"\u901a\u8fc7-kubectl-\u68c0\u67e5-workflow-\u72b6\u6001",level:2}],p={toc:i};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5-workflow-\u72b6\u6001"},"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5 Workflow \u72b6\u6001"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728 Chaos Dashboard \u4e2d\u5217\u51fa\u6240\u6709\u7684 Workflow\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List Workflow On Dashboard",src:o(59986).Z,width:"2367",height:"810"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u60f3\u8981\u68c0\u67e5\u7684 Workflow\uff0c\u67e5\u770b Workflow \u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow Status On Dashboard",src:o(91637).Z,width:"2312",height:"1848"})),(0,n.kt)("h2",{id:"\u901a\u8fc7-kubectl-\u68c0\u67e5-workflow-\u72b6\u6001"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u68c0\u67e5 Workflow \u72b6\u6001"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u7ecf\u521b\u5efa\u7684 Workflow\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> get workflow\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6839\u636e\u4e0a\u4e00\u6b65\u8f93\u51fa\u7684 Workflow \u5217\u8868\uff0c\u9009\u62e9\u60f3\u67e5\u770b\u7684 Workflow \u5e76\u5728\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u6307\u5b9a\u5176\u540d\u79f0\u3002\u6267\u884c\u547d\u4ee4\u4ee5\u83b7\u53d6\u8be5 Workflow \u4e0b\u7684\u6240\u6709 WorkflowNode\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n')),(0,n.kt)("p",{parentName:"li"},"Workflow \u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u6b65\u9aa4\u4f1a\u4ee5 WorkflowNode \u8fd9\u4e00 CustomResource \u6765\u8868\u793a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a WorkflowNode \u7684\u8be6\u7ec6\u72b6\u6001\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> describe workflownode <workflow-node-name>\n")),(0,n.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5185\u5bb9\u5305\u62ec\u5f53\u524d\u8282\u70b9\u662f\u5426\u6267\u884c\u5b8c\u6210\u3001\u5e76\u884c/\u4e32\u884c\u8282\u70b9\u7684\u6267\u884c\u72b6\u6001\u3001\u5bf9\u5e94\u7684 Chaos \u5b9e\u9a8c\u5bf9\u8c61\u7b49\u3002"))))}k.isMDXComponent=!0},59986:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/list-workflow-on-dashboard-6512db7bb9dcad835debe7ac46c59271.png"},91637:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow-status-on-dashboard-f011da2c525de53e2d9e8fb409a003ea.png"}}]);
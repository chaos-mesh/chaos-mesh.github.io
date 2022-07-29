"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[26143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"},i=void 0,s={unversionedId:"inspect-chaos-experiments",id:"version-2.3.0/inspect-chaos-experiments",title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u548c\u7ed3\u679c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/inspect-chaos-experiments.md",sourceDirName:".",slug:"/inspect-chaos-experiments",permalink:"/zh/docs/inspect-chaos-experiments",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/inspect-chaos-experiments.md",tags:[],version:"2.3.0",frontMatter:{title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"},sidebar:"docs",previous:{title:"\u8fd0\u884c\u5b9e\u9a8c",permalink:"/zh/docs/run-a-chaos-experiment"},next:{title:"\u521b\u5efa Chaos Mesh Workflow",permalink:"/zh/docs/create-chaos-mesh-workflow"}},o={},p=[{value:"\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd",id:"\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd",level:2},{value:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",level:2},{value:"\u901a\u8fc7 <code>kubectl</code> \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u548c\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd"},"\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728 Chaos Mesh \u4e2d\uff0c\u6839\u636e\u5b9e\u9a8c\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u7684\u751f\u547d\u5468\u671f\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u56db\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u5165\u9636\u6bb5\uff1a\u6df7\u6c8c\u5b9e\u9a8c\u6b63\u5728\u8fdb\u884c\u6ce8\u5165\u6545\u969c\u64cd\u4f5c\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6b64\u9636\u6bb5\u6301\u7eed\u7684\u65f6\u95f4\u5f88\u77ed\u3002\u5982\u679c\u6b64\u9636\u6bb5\u6301\u7eed\u7684\u65f6\u95f4\u5f88\u957f\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u6df7\u6c8c\u5b9e\u9a8c\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u6b64\u65f6\u53ef\u4ee5\u67e5\u770b\u4e8b\u4ef6\u4fe1\u606f\u786e\u5b9a\u5f02\u5e38\u539f\u56e0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u9636\u6bb5\uff1a\u5f53\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6ce8\u5165\u6545\u969c\u540e\uff0c\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u5165\u8fd0\u884c\u9636\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6682\u505c\u9636\u6bb5\uff1a\u5f53\u5bf9\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u884c",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/run-a-chaos-experiment#%E6%9A%82%E5%81%9C%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C"},"\u6682\u505c"),"\u64cd\u4f5c\u65f6\uff0cChaos Mesh \u4f1a\u6062\u590d\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\uff0c\u6b64\u65f6\u5b9e\u9a8c\u8fdb\u5165\u6682\u505c\u9636\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u675f\u9636\u6bb5\uff1a\u5982\u679c\u914d\u7f6e\u4e86\u5b9e\u9a8c\u6301\u7eed\u65f6\u95f4\uff0c\u5f53\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\u8fbe\u5230\u4e86\u6301\u7eed\u65f6\u95f4\u540e\uff0cChaos Mesh \u4f1a\u6062\u590d\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\uff0c\u8868\u793a\u5b9e\u9a8c\u5df2\u7ecf\u7ed3\u675f\u3002")),(0,r.kt)("h2",{id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"},"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"),(0,r.kt)("p",null,"\u5728 Chaos Dashboard \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u4efb\u4e00\u9875\u9762\u67e5\u770b\u5b9e\u9a8c\u7684\u8fd0\u884c\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6df7\u6c8c\u5b9e\u9a8c\u5217\u8868\u9875\u9762\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u72b6\u6001",src:n(96631).Z,width:"2092",height:"866"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6df7\u6c8c\u5b9e\u9a8c\u8be6\u60c5\u9875\u9762\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u72b6\u6001",src:n(55821).Z,width:"1936",height:"776"})))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u957f\u65f6\u95f4\u5904\u4e8e",(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u5165"),"\u9636\u6bb5\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u6b64\u5b9e\u9a8c\u51fa\u73b0\u4e86\u5f02\u5e38\uff08\u4f8b\u5982\uff0c\u914d\u7f6e\u7684 Selectors \u672a\u9009\u51fa\u5f85\u6d4b\u76ee\u6807\uff09\u3002\u6b64\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b",(0,r.kt)("strong",{parentName:"li"},"\u4e8b\u4ef6\u4fe1\u606f"),"\u786e\u5b9a\u5f02\u5e38\u539f\u56e0\uff0c\u5e76\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Chaos Dashboard \u4e2d\u4ec5\u5c55\u793a\u4e86",(0,r.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E9%AA%8C%E7%9A%84%E9%98%B6%E6%AE%B5%E4%BB%8B%E7%BB%8D"},"\u4e3b\u8981\u5b9e\u9a8c\u9636\u6bb5"),"\uff0c\u5982\u9700\u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u5b9e\u9a8c\u72b6\u6001\uff0c\u8bf7\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c\u3002"))),(0,r.kt)("h2",{id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),"\uff0c\u4ece\u800c\u786e\u5b9a\u5b9e\u9a8c\u7ed3\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n")),(0,r.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u9884\u671f\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u8f93\u51fa\u4e2d\uff0c\u4e3b\u8981\u5305\u542b\u4e24\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Status")),(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6267\u884c\u6d41\u7a0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u56db\u7c7b\u72b6\u6001\u8bb0\u5f55\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Paused"),"\uff1a \u4ee3\u8868\u6df7\u6c8c\u5b9e\u9a8c\u6b63\u5904\u4e8e\u6682\u505c\u9636\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Selected"),"\uff1a \u4ee3\u8868\u6df7\u6c8c\u5b9e\u9a8c\u5df2\u7ecf\u6b63\u786e\u9009\u62e9\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AllInjected"),"\uff1a\u4ee3\u8868\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6ce8\u5165\u6545\u969c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AllRecoverd"),"\uff1a\u4ee3\u8868\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u7684\u6545\u969c\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6062\u590d\u3002")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u8fd9\u56db\u7c7b\u72b6\u6001\u8bb0\u5f55\u63a8\u65ad\u51fa\u5f53\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684\u771f\u5b9e\u8fd0\u884c\u60c5\u51b5\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"Paused"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Selected"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"AllRecoverd")," \u7684\u72b6\u6001\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," \u4e14 ",(0,r.kt)("inlineCode",{parentName:"li"},"AllInjected")," \u7684\u72b6\u6001\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),"\u65f6\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"Paused")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," \u7684\u65f6\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\uff0c\u4f46\u662f\u5982\u679c\u6b64\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Selected")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f97\u51fa\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u65e0\u6cd5\u9009\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002")),(0,r.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4ece\u4e0a\u8ff0\u7684\u56db\u7c7b\u5b9e\u9a8c\u8bb0\u5f55\u7ec4\u5408\u4e2d\u53ef\u4ee5\u63a8\u5bfc\u51fa\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"Paused")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," \u7684\u65f6\u5019\uff0c\u8bf4\u660e\u6df7\u6c8c\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\uff0c\u4f46\u662f\u5982\u679c\u6b64\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Selected")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f97\u51fa\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u65e0\u6cd5\u9009\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Events")),(0,r.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u5217\u8868\u4e2d\u5305\u542b\u6df7\u6c8c\u5b9e\u9a8c\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u7684\u64cd\u4f5c\u8bb0\u5f55\uff0c\u53ef\u4ee5\u5e2e\u52a9\u786e\u5b9a\u6df7\u6c8c\u5b9e\u9a8c\u72b6\u6001\u5e76\u6392\u9664\u95ee\u9898\u3002"))))}d.isMDXComponent=!0},55821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chaos_detail_status_zh-9e8ca4fe40029d3b702a940e2cf60e88.png"},96631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list_chaos_status_zh-a3a4ed11e2decd039c25847064bce0cc.png"}}]);
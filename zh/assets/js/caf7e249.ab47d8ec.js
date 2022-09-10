"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[25335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),h=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(r),m=o,C=p["".concat(i,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(C,s(s({ref:t},u),{},{components:r})):n.createElement(C,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var h=2;h<a;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/",title:"Chaos Mesh \u7b80\u4ecb"},s=void 0,l={unversionedId:"overview",id:"version-2.3.1/overview",title:"Chaos Mesh \u7b80\u4ecb",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0 Chaos Mesh \u7684\u6982\u5ff5\u3001\u4f7f\u7528\u573a\u666f\u3001\u6838\u5fc3\u4f18\u52bf\u3001\u4ee5\u53ca\u67b6\u6784\u6982\u89c8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.1/overview.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.1/overview.md",tags:[],version:"2.3.1",frontMatter:{slug:"/",title:"Chaos Mesh \u7b80\u4ecb"},sidebar:"docs",next:{title:"\u57fa\u672c\u529f\u80fd",permalink:"/zh/docs/basic-features"}},i={},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Chaos Mesh \u7684\u6838\u5fc3\u4f18\u52bf",id:"chaos-mesh-\u7684\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u67b6\u6784\u6982\u89c8",id:"\u67b6\u6784\u6982\u89c8",level:2}],u={toc:h};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0 Chaos Mesh \u7684\u6982\u5ff5\u3001\u4f7f\u7528\u573a\u666f\u3001\u6838\u5fc3\u4f18\u52bf\u3001\u4ee5\u53ca\u67b6\u6784\u6982\u89c8\u3002"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Chaos Mesh \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4e91\u539f\u751f\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\uff0c\u63d0\u4f9b\u4e30\u5bcc\u7684\u6545\u969c\u6a21\u62df\u7c7b\u578b\uff0c\u5177\u6709\u5f3a\u5927\u7684\u6545\u969c\u573a\u666f\u7f16\u6392\u80fd\u529b\uff0c\u65b9\u4fbf\u7528\u6237\u5728\u5f00\u53d1\u6d4b\u8bd5\u4e2d\u4ee5\u53ca\u751f\u4ea7\u73af\u5883\u4e2d\u6a21\u62df\u73b0\u5b9e\u4e16\u754c\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u5404\u7c7b\u5f02\u5e38\uff0c\u5e2e\u52a9\u7528\u6237\u53d1\u73b0\u7cfb\u7edf\u6f5c\u5728\u7684\u95ee\u9898\u3002Chaos Mesh \u63d0\u4f9b\u5b8c\u5584\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\uff0c\u65e8\u5728\u964d\u4f4e\u7528\u6237\u8fdb\u884c\u6df7\u6c8c\u5de5\u7a0b\u7684\u95e8\u69db\u3002\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 Web UI \u754c\u9762\u4e0a\u8bbe\u8ba1\u81ea\u5df1\u7684\u6df7\u6c8c\u573a\u666f\uff0c\u4ee5\u53ca\u76d1\u63a7\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,o.kt)("h2",{id:"chaos-mesh-\u7684\u6838\u5fc3\u4f18\u52bf"},"Chaos Mesh \u7684\u6838\u5fc3\u4f18\u52bf"),(0,o.kt)("p",null,"Chaos Mesh \u4f5c\u4e3a\u4e1a\u5185\u9886\u5148\u7684\u6df7\u6c8c\u6d4b\u8bd5\u5e73\u53f0\uff0c\u5177\u5907\u4ee5\u4e0b\u6838\u5fc3\u4f18\u52bf\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u80fd\u529b\u7a33\u56fa\uff1aChaos Mesh \u8d77\u6e90\u4e8e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb"},"TiDB")," \u7684\u6838\u5fc3\u6d4b\u8bd5\u5e73\u53f0\uff0c\u53d1\u5e03\u521d\u671f\u5373\u7ee7\u627f\u4e86\u5927\u91cf TiDB \u5df2\u6709\u7684\u6d4b\u8bd5\u7ecf\u9a8c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u88ab\u5145\u5206\u9a8c\u8bc1\uff1aChaos Mesh \u88ab\u4f17\u591a\u516c\u53f8\u4ee5\u53ca\u7ec4\u7ec7\u6240\u4f7f\u7528\uff0c\u4f8b\u5982\u817e\u8baf\u548c\u7f8e\u56e2\u7b49\uff1b\u540c\u65f6\u88ab\u7528\u4e8e\u4f17\u591a\u77e5\u540d\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u6d4b\u8bd5\u4f53\u7cfb\u4e2d\uff0c\u4f8b\u5982 Apache APISIX \u548c RabbitMQ \u7b49\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u6613\u7528\u6027\u5f3a\uff1a\u56fe\u5f62\u5316\u64cd\u4f5c\u548c\u57fa\u4e8e Kubernetes \u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u5145\u5206\u5229\u7528\u4e86\u81ea\u52a8\u5316\u80fd\u529b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\uff1aChaos Mesh \u539f\u751f\u652f\u6301 Kubernetes \u73af\u5883\uff0c\u63d0\u4f9b\u4e86\u5f3a\u608d\u7684\u81ea\u52a8\u5316\u80fd\u529b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e30\u5bcc\u7684\u6545\u969c\u6a21\u62df\u573a\u666f\uff1aChaos Mesh \u51e0\u4e4e\u6db5\u76d6\u4e86\u5206\u5e03\u5f0f\u6d4b\u8bd5\u4f53\u7cfb\u4e2d\u57fa\u7840\u6545\u969c\u6a21\u62df\u7684\u7edd\u5927\u591a\u6570\u573a\u666f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u5b9e\u9a8c\u7f16\u6392\u80fd\u529b\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5e73\u53f0\u8bbe\u8ba1\u81ea\u5df1\u7684\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\uff0c\u573a\u666f\u53ef\u5305\u542b\u591a\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u7f16\u6392\uff0c\u4ee5\u53ca\u5e94\u7528\u72b6\u6001\u68c0\u67e5\u7b49\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\u9ad8\uff1aChaos Mesh \u5177\u6709\u591a\u5c42\u6b21\u5b89\u5168\u63a7\u5236\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u9ad8\u5b89\u5168\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6d3b\u8dc3\u7684\u793e\u533a\uff1aChaos Mesh \u4e3a\u5168\u7403\u77e5\u540d\u5f00\u6e90\u6df7\u6c8c\u6d4b\u8bd5\u5e73\u53f0\uff0cCNCF \u5f00\u6e90\u57fa\u91d1\u4f1a\u5b75\u5316\u9879\u76ee\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff1aChaos Mesh \u4e3a\u6545\u969c\u6d4b\u8bd5\u7c7b\u578b\u6269\u5c55\u548c\u529f\u80fd\u6269\u5c55\u63d0\u4f9b\u4e86\u5145\u5206\u7684\u6269\u5c55\u80fd\u529b\u3002")),(0,o.kt)("h2",{id:"\u67b6\u6784\u6982\u89c8"},"\u67b6\u6784\u6982\u89c8"),(0,o.kt)("p",null,"Chaos Mesh \u57fa\u4e8e Kubernetes CRD (Custom Resource Definition) \u6784\u5efa\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6545\u969c\u7c7b\u578b\u5b9a\u4e49\u591a\u4e2a CRD \u7c7b\u578b\uff0c\u5e76\u4e3a\u4e0d\u540c\u7684 CRD \u5bf9\u8c61\u5b9e\u73b0\u5355\u72ec\u7684 Controller \u4ee5\u7ba1\u7406\u4e0d\u540c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002Chaos Mesh \u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u4e09\u4e2a\u7ec4\u4ef6:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chaos Dashboard"),"\uff1aChaos Mesh \u7684\u53ef\u89c6\u5316\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u4e00\u5957\u7528\u6237\u53cb\u597d\u7684 Web \u754c\u9762\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u8be5\u754c\u9762\u5bf9\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u884c\u64cd\u4f5c\u548c\u89c2\u6d4b\u3002\u540c\u65f6\uff0cChaos Dashboard \u8fd8\u63d0\u4f9b\u4e86 RBAC \u6743\u9650\u7ba1\u7406\u673a\u5236\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chaos Controller Manager"),"\uff1aChaos Mesh \u7684\u6838\u5fc3\u903b\u8f91\u7ec4\u4ef6\uff0c\u4e3b\u8981\u8d1f\u8d23\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8c03\u5ea6\u4e0e\u7ba1\u7406\u3002\u8be5\u7ec4\u4ef6\u5305\u542b\u591a\u4e2a CRD Controller\uff0c\u4f8b\u5982 Workflow Controller\u3001Scheduler Controller \u4ee5\u53ca\u5404\u7c7b\u6545\u969c\u7c7b\u578b\u7684 Controller\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chaos Daemon"),"\uff1aChaos Mesh \u7684\u4e3b\u8981\u6267\u884c\u7ec4\u4ef6\u3002Chaos Daemon \u4ee5 ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," \u7684\u65b9\u5f0f\u8fd0\u884c\uff0c\u9ed8\u8ba4\u62e5\u6709 Privileged \u6743\u9650\uff08\u53ef\u4ee5\u5173\u95ed\uff09\u3002\u8be5\u7ec4\u4ef6\u4e3b\u8981\u901a\u8fc7\u4fb5\u5165\u76ee\u6807 Pod Namespace \u7684\u65b9\u5f0f\u5e72\u6270\u5177\u4f53\u7684\u7f51\u7edc\u8bbe\u5907\u3001\u6587\u4ef6\u7cfb\u7edf\u3001\u5185\u6838\u7b49\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:r(5373).Z,width:"751",height:"922"})),(0,o.kt)("p",null,"Chaos Mesh \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0a\u56fe\u6240\u5c55\u793a\uff0c\u53ef\u4ee5\u81ea\u4e0a\u800c\u4e0b\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u8f93\u5165\u548c\u89c2\u6d4b\u7684\u90e8\u5206\u3002\u7528\u6237\u8f93\u5165\u4ee5\u7528\u6237\u64cd\u4f5c (User) \u4e3a\u8d77\u70b9\u5230\u8fbe Kubernetes API Server\u3002\u7528\u6237\u4e0d\u76f4\u63a5\u548c Chaos Mesh \u7684 Controller \u4ea4\u4e92\uff0c\u4e00\u5207\u7528\u6237\u64cd\u4f5c\u6700\u7ec8\u90fd\u5c06\u53cd\u6620\u4e3a\u67d0\u4e2a Chaos \u8d44\u6e90\u7684\u53d8\u66f4\uff08\u6bd4\u5982 NetworkChaos \u8d44\u6e90\u7684\u53d8\u66f4\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u76d1\u542c\u8d44\u6e90\u53d8\u5316\u3001\u8c03\u5ea6 Workflow \u548c\u5f00\u5c55\u6df7\u6c8c\u5b9e\u9a8c\u7684\u90e8\u5206\u3002Chaos Mesh \u7684 Controller \u53ea\u63a5\u53d7\u6765\u81ea Kubernetes API Server \u7684\u4e8b\u4ef6\uff0c\u8fd9\u79cd\u4e8b\u4ef6\u63cf\u8ff0\u67d0\u4e2a Chaos \u8d44\u6e90\u7684\u53d8\u66f4\uff0c\u4f8b\u5982\u65b0\u7684 Workflow \u5bf9\u8c61\u6216\u8005 Chaos \u5bf9\u8c61\u88ab\u521b\u5efa\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5177\u4f53\u8282\u70b9\u6545\u969c\u7684\u6ce8\u5165\u90e8\u5206\u3002\u8be5\u90e8\u5206\u4e3b\u8981\u7531 Chaos Daemon \u7ec4\u4ef6\u8d1f\u8d23\uff0c\u63a5\u53d7\u6765\u81ea Chaos Controller Manager \u7ec4\u4ef6\u7684\u6307\u4ee4\uff0c\u4fb5\u5165\u5230\u76ee\u6807 Pod \u7684 Namespace \u4e0b\uff0c\u6267\u884c\u5177\u4f53\u7684\u6545\u969c\u6ce8\u5165\u3002\u4f8b\u5982\u8bbe\u7f6e TC \u7f51\u7edc\u89c4\u5219\uff0c\u542f\u52a8 stress-ng \u8fdb\u7a0b\u62a2\u5360 CPU \u6216\u5185\u5b58\u8d44\u6e90\u7b49\u3002")))}c.isMDXComponent=!0},5373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-76301820de324f79d79db310b11b9246.png"}}]);
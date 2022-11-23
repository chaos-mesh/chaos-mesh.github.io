"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[83113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,N=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(N,o(o({ref:t},m),{},{components:a})):n.createElement(N,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6a21\u62df DNS \u6545\u969c"},o=void 0,i={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"version-2.3.3/simulate-dns-chaos-on-kubernetes",title:"\u6a21\u62df DNS \u6545\u969c",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/zh/docs/2.3.3/simulate-dns-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"2.3.3",frontMatter:{title:"\u6a21\u62df DNS \u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c",permalink:"/zh/docs/2.3.3/simulate-io-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",permalink:"/zh/docs/2.3.3/simulate-time-chaos-on-kubernetes"}},p={},s=[{value:"DNSChaos \u4ecb\u7ecd",id:"dnschaos-\u4ecb\u7ecd",level:2},{value:"\u90e8\u7f72 Chaos DNS Service",id:"\u90e8\u7f72-chaos-dns-service",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3}],m={toc:s};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002"),(0,r.kt)("h2",{id:"dnschaos-\u4ecb\u7ecd"},"DNSChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"DNSChaos \u53ef\u4ee5\u7528\u4e8e\u6a21\u62df\u9519\u8bef\u7684 DNS \u54cd\u5e94\uff0c\u4f8b\u5982\u5728\u6536\u5230 DNS \u8bf7\u6c42\u65f6\u8fd4\u56de\u9519\u8bef\uff0c\u6216\u8005\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\u3002"),(0,r.kt)("h2",{id:"\u90e8\u7f72-chaos-dns-service"},"\u90e8\u7f72 Chaos DNS Service"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u90e8\u7f72\u4e00\u4e2a\u4e13\u95e8\u7684 DNS \u670d\u52a1\u7528\u4e8e\u6ce8\u5165\u6545\u969c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --set dnsServer.create=true\n")),(0,r.kt)("p",null,"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 DNS \u670d\u52a1\u7684\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-mesh -l app.kubernetes.io/component=chaos-dns-server\n")),(0,r.kt)("p",null,"\u786e\u8ba4 Pod \u7684\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," \u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u76ee\u524d DNSChaos \u53ea\u652f\u6301 DNS \u8bb0\u5f55\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"AAAA"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chaos DNS \u670d\u52a1\u8fd0\u884c\u7684\u5e26\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," \u63d2\u4ef6\u7684 CoreDNS\u3002\u5982\u679c Kubernetes \u96c6\u7fa4\u672c\u8eab\u7684 CoreDNS \u670d\u52a1\u5305\u542b\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 configMap ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-server-config"),"\uff0c\u4f7f Chaos DNS \u670d\u52a1\u7684\u914d\u7f6e\u4e0e K8s CoreDNS \u670d\u52a1\u7684\u914d\u7f6e\u4e00\u81f4\uff0c\u7f16\u8f91\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-mesh\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(29796).Z,width:"982",height:"648"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u201c\u9009\u62e9\u76ee\u6807\u201d\u5904\u9009\u62e9 \u201cDNS \u6545\u969c\u201d\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR"),"\uff0c\u6700\u540e\u586b\u5199\u5339\u914d\u89c4\u5219\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DNSChaos \u5b9e\u9a8c",src:a(74466).Z,width:"1844",height:"1314"})),(0,r.kt)("p",{parentName:"li"},"\u56fe\u4e2d\u914d\u7f6e\u7684\u5339\u914d\u89c4\u5219\u53ef\u4ee5\u5bf9\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com")," \u751f\u6548\uff0c\u5373\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u9519\u8bef\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:a(3673).Z,width:"1838",height:"1328"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-mesh\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u53ef\u4ee5\u5bf9\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com")," \u751f\u6548\uff0c\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u968f\u673a IP \u5730\u5740\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,r.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49 DNS \u6545\u969c\u7684\u884c\u4e3a\uff0c\u53ef\u9009\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"random")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),"\u3002\u5f53\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"random")," \u65f6\uff0c DNS \u670d\u52a1\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\uff1b\u5f53\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," \u65f6 DNS \u670d\u52a1\u8fd4\u56de\u9519\u8bef"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"random")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"patterns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5339\u914d\u6545\u969c\u884c\u4e3a\u7684\u57df\u540d\u6a21\u7248\uff0c \u652f\u6301\u5360\u4f4d\u7b26 ",(0,r.kt)("inlineCode",{parentName:"td"},"?")," \u4ee5\u53ca\u901a\u914d\u7b26 ",(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"google.com"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u51b3\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/2.3.3/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," \u914d\u7f6e\u4e2d\u7684\u901a\u914d\u7b26\u5fc5\u987b\u4f4d\u4e8e\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org")," \u662f\u4e0d\u5408\u6cd5\u7684\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," \u6ca1\u6709\u914d\u7f6e\u65f6\uff0c\u9ed8\u8ba4\u5bf9\u6240\u6709\u57df\u540d\u6ce8\u5165\u6545\u969c\u3002")))))}d.isMDXComponent=!0},29796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},74466:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dnschaos-exp-3bb3ce1e583cebdeac93de61ce23ea8e.png"},3673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1847],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,N=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return n?a.createElement(N,o(o({ref:t},m),{},{components:n})):a.createElement(N,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85716:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u6a21\u62df DNS \u6545\u969c"},p=void 0,s={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"simulate-dns-chaos-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df DNS \u6545\u969c",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/zh/docs/next/simulate-dns-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df DNS \u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c",permalink:"/zh/docs/next/simulate-io-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",permalink:"/zh/docs/next/simulate-time-chaos-on-kubernetes"}},m=[{value:"DNSChaos \u4ecb\u7ecd",id:"dnschaos-\u4ecb\u7ecd",children:[]},{value:"\u90e8\u7f72 Chaos DNS Service",id:"\u90e8\u7f72-chaos-dns-service",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",children:[]}]}],d={toc:m};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002"),(0,i.kt)("h2",{id:"dnschaos-\u4ecb\u7ecd"},"DNSChaos \u4ecb\u7ecd"),(0,i.kt)("p",null,"DNSChaos \u53ef\u4ee5\u7528\u4e8e\u6a21\u62df\u9519\u8bef\u7684 DNS \u54cd\u5e94\uff0c\u4f8b\u5982\u5728\u6536\u5230 DNS \u8bf7\u6c42\u65f6\u8fd4\u56de\u9519\u8bef\uff0c\u6216\u8005\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\u3002"),(0,i.kt)("h2",{id:"\u90e8\u7f72-chaos-dns-service"},"\u90e8\u7f72 Chaos DNS Service"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u90e8\u7f72\u4e00\u4e2a\u4e13\u95e8\u7684 DNS \u670d\u52a1\u7528\u4e8e\u6ce8\u5165\u6545\u969c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dnsServer.create=true\n")),(0,i.kt)("p",null,"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 DNS \u670d\u52a1\u7684\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,i.kt)("p",null,"\u786e\u8ba4 Pod \u7684\u72b6\u6001\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," \u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d DNSChaos \u53ea\u652f\u6301 DNS \u8bb0\u5f55\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"AAAA"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chaos DNS \u670d\u52a1\u8fd0\u884c\u7684\u5e26\u6709 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," \u63d2\u4ef6\u7684 CoreDNS\u3002\u5982\u679c Kubernetes \u96c6\u7fa4\u672c\u8eab\u7684 CoreDNS \u670d\u52a1\u5305\u542b\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 configMap ",(0,i.kt)("inlineCode",{parentName:"p"},"dns-server-config"),"\uff0c\u4f7f Chaos DNS \u670d\u52a1\u7684\u914d\u7f6e\u4e0e K8s CoreDNS \u670d\u52a1\u7684\u914d\u7f6e\u4e00\u81f4\uff0c\u7f16\u8f91\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))),(0,i.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684\u201c\u65b0\u7684\u5b9e\u9a8c\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:n(50938).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u201c\u9009\u62e9\u76ee\u6807\u201d\u5904\u9009\u62e9 \u201cDNS \u6545\u969c\u201d\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR"),"\uff0c\u6700\u540e\u586b\u5199\u5339\u914d\u89c4\u5219\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"DNSChaos \u5b9e\u9a8c",src:n(6061).Z})),(0,i.kt)("p",{parentName:"li"},"\u56fe\u4e2d\u914d\u7f6e\u7684\u5339\u914d\u89c4\u5219\u53ef\u4ee5\u5bf9\u57df\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," \u751f\u6548\uff0c\u5373\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u9519\u8bef\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:n(11335).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,i.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-testing\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,i.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u53ef\u4ee5\u5bf9\u57df\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," \u751f\u6548\uff0c\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u968f\u673a IP \u5730\u5740\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 kubectl \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,i.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"action"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49 DNS \u6545\u969c\u7684\u884c\u4e3a\uff0c\u503c\u53ef\u4ee5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"random")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),"\u3002\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"random")," \u65f6\uff0c DNS \u670d\u52a1\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\uff1b\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"error")," \u65f6 DNS \u670d\u52a1\u8fd4\u56de\u9519\u8bef"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"random")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"td"},"error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"patterns"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string \u6570\u7ec4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5339\u914d\u6545\u969c\u884c\u4e3a\u7684\u57df\u540d\u6a21\u7248\uff0c \u652f\u6301\u5360\u4f4d\u7b26 ",(0,i.kt)("inlineCode",{parentName:"td"},"?")," \u4ee5\u53ca\u901a\u914d\u7b26 ",(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"google.com"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,i.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"one"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u51b3\u4e0e ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"td",href:"/zh/docs/next/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," \u914d\u7f6e\u4e2d\u7684\u901a\u914d\u7b26\u5fc5\u987b\u4f4d\u4e8e\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org")," \u662f\u4e0d\u5408\u6cd5\u7684\u914d\u7f6e\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," \u6ca1\u6709\u914d\u7f6e\u65f6\uff0c\u9ed8\u8ba4\u5bf9\u6240\u6709\u57df\u540d\u6ce8\u5165\u6545\u969c\u3002"))))))}c.isMDXComponent=!0},50938:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},6061:function(e,t,n){t.Z=n.p+"assets/images/dnschaos-exp-3bb3ce1e583cebdeac93de61ce23ea8e.png"},11335:function(e,t,n){t.Z=n.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"}}]);
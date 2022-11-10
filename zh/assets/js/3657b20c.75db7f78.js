"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=m(a),u=r,d=h["".concat(i,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2"},l=void 0,s={unversionedId:"upgrade-from-2.1-to-2.2",id:"version-2.3.3/upgrade-from-2.1-to-2.2",title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2",description:"\u5728 2.2.0 \u7248\u672c\u4e2d\uff0cHelm Charts \u505a\u4e86\u4e00\u4e9b\u6539\u53d8\u3002\u8fd9\u4e2a\u6587\u6863\u5c06\u5e2e\u52a9\u4f60\u4ece 2.1.x \u5347\u7ea7\u5230 2.2.0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/upgrade-from-2.1-to-2.2.md",sourceDirName:".",slug:"/upgrade-from-2.1-to-2.2",permalink:"/zh/docs/2.3.3/upgrade-from-2.1-to-2.2",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/upgrade-from-2.1-to-2.2.md",tags:[],version:"2.3.3",frontMatter:{title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2"},sidebar:"docs",previous:{title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0",permalink:"/zh/docs/2.3.3/upgrade-to-2.0"},next:{title:"Chaos Mesh Release Cycle",permalink:"/zh/docs/2.3.3/release-cycle"}},i={},m=[{value:"\u4f7f\u7528 Helm \u5347\u7ea7",id:"\u4f7f\u7528-helm-\u5347\u7ea7",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0/\u66f4\u65b0 Chaos Mesh Helm \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\u6dfb\u52a0\u66f4\u65b0-chaos-mesh-helm-\u4ed3\u5e93",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u8fc1\u79fb <code>values.yaml</code> \u6587\u4ef6",id:"\u7b2c-2-\u6b65\u8fc1\u79fb-valuesyaml-\u6587\u4ef6",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u4f7f\u7528 <code>helm upgrade</code> \u5347\u7ea7 Chaos Mesh",id:"\u7b2c-4-\u6b65\u4f7f\u7528-helm-upgrade-\u5347\u7ea7-chaos-mesh",level:3},{value:"\u8be2\u95ee\u793e\u533a",id:"\u8be2\u95ee\u793e\u533a",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 2.2.0 \u7248\u672c\u4e2d\uff0cHelm Charts \u505a\u4e86\u4e00\u4e9b\u6539\u53d8\u3002\u8fd9\u4e2a\u6587\u6863\u5c06\u5e2e\u52a9\u4f60\u4ece 2.1.x \u5347\u7ea7\u5230 2.2.0\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-helm-\u5347\u7ea7"},"\u4f7f\u7528 Helm \u5347\u7ea7"),(0,r.kt)("h3",{id:"\u7b2c-1-\u6b65\u6dfb\u52a0\u66f4\u65b0-chaos-mesh-helm-\u4ed3\u5e93"},"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0/\u66f4\u65b0 Chaos Mesh Helm \u4ed3\u5e93"),(0,r.kt)("p",null,"\u6dfb\u52a0 Chaos Mesh \u5230 Helm \u4ed3\u5e93\u5e76\u66f4\u65b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\nhelm repo update\n")),(0,r.kt)("h3",{id:"\u7b2c-2-\u6b65\u8fc1\u79fb-valuesyaml-\u6587\u4ef6"},"\u7b2c 2 \u6b65\uff1a\u8fc1\u79fb ",(0,r.kt)("inlineCode",{parentName:"h3"},"values.yaml")," \u6587\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5b89\u88c5 Chaos Mesh \u7684\u65f6\u5019\u4f7f\u7528\u4e86\u4e00\u4e2a\u7279\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5e94\u7528\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u5230 Chaos Mesh 2.2.0 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u83b7\u53d6\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values chaos-mesh/chaos-mesh --version 2.2.0 > values.yaml\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u719f\u6089\u8fd9\u4e9b\u6539\u53d8\u8fc7\u7684\u914d\u7f6e\uff0c\u4f60\u53ef\u80fd\u4e0d\u4f1a\u4f9d\u8d56\u8fd9\u4e9b\u7279\u5b9a\u7684\u529f\u80fd\uff0c\u5ffd\u7565\u4ed6\u4eec\u901a\u5e38\u662f\u5b89\u5168\u7684\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u662f Helm Chart \u6539\u53d8\u7684\u5217\u8868\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"chaosDaemon.mtls.enabled")," \u8868\u793a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"chaos-daemon")," \u4e4b\u95f4\u4f7f\u7528 mtls\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"webhook.caBundlePEM")," \u8868\u793a\u7528\u4e8e webhook \u670d\u52a1\u7684 CA bundle\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6539\u53d8\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"dashboard.serviceAccount")," \u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"chaos-dashboard"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6539\u53d8\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"webhook.FailurePolicy")," \u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"Ignore")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Fail"),"\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u6ce8\u610f\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/chaos-mesh/chaos-mesh/blob/v2.2.0/helm/chaos-mesh/README.md"},"README")," \u67e5\u770b Helm Chart \u914d\u7f6e\u7684\u8be6\u7ec6\u63cf\u8ff0\u3002 :::"),(0,r.kt)("h3",{parentName:"admonition",id:"\u7b2c-3-\u6b65\u66f4\u65b0-crd"},"\u7b2c 3 \u6b65\uff1a\u66f4\u65b0 CRD"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684 Kubernetes \u7248\u672c >= 1.16\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0 Chaos Mesh CRD\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd.yaml\n")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684 Kubernetes \u7248\u672c <= 1.15\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0 Chaos Mesh CRD\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd-v1beta1.yaml\n"))),(0,r.kt)("h3",{id:"\u7b2c-4-\u6b65\u4f7f\u7528-helm-upgrade-\u5347\u7ea7-chaos-mesh"},"\u7b2c 4 \u6b65\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"helm upgrade")," \u5347\u7ea7 Chaos Mesh"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5347\u7ea7 Chaos Mesh \u5230 2.2.0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade <release-name> chaos-mesh/chaos-mesh --namespace=<namespace> --version=2.2.0 <--other-required-flags>\n")),(0,r.kt)("h2",{id:"\u8be2\u95ee\u793e\u533a"},"\u8be2\u95ee\u793e\u533a"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u5347\u7ea7 Chaos Mesh \u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"Slack Channel"),"\uff0cGitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues/new?assignees=&labels=&template=question.md"},"Issues")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/discussions/new"},"Discussions")," \u8054\u7cfb\u6211\u4eec\u3002"))}p.isMDXComponent=!0}}]);
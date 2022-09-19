"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[84992,68622,86910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,p=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(p,s(s({ref:t},h),{},{components:a})):n.createElement(p,s({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91262:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(72389);function r(e){let{children:t,fallback:a}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}},56871:(e,t,a)=>{a.d(t,{Z:()=>c,p:()=>i});var n=a(91262),o=a(90814),r=a(67294),s=a(52263),l=a(28084);const i=(e,t)=>{const a=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";const o=t.filter((e=>e.isLast))[0].name;return t.filter((e=>a.includes(e.name))).map((e=>e.name))[0]||o};const c=e=>{let{children:t,replaced:a="latest",isArchive:c=!1,className:h="language-bash"}=e;const{siteConfig:m}=(0,s.Z)(),{versions:u}=(0,l.eZ)("docusaurus-plugin-content-docs");return r.createElement(n.Z,null,(()=>{const e=i(m,u),n=c?t.replace(a,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(a,"v"+e);return r.createElement(o.Z,{className:h},n)}))}},13396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},s=void 0,l={unversionedId:"common/quick-run",id:"common/quick-run",title:"quick-run",description:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/zh/docs/next/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md",tags:[],version:"current",frontMatter:{}},i={},c=[],h={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/run-a-chaos-experiment"},"\u8fd0\u884c\u8bd5\u9a8c"),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"))}m.isMDXComponent=!0},85769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},s=void 0,l={unversionedId:"common/verify-installation",id:"common/verify-installation",title:"verify-installation",description:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/zh/docs/next/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md",tags:[],version:"current",frontMatter:{}},i={},c=[],h={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n chaos-mesh\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," \u72b6\u6001\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-election"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}m.isMDXComponent=!0},7492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>h,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),r=a(56871),s=a(85769),l=a(13396);const i={title:"\u79bb\u7ebf\u5b89\u88c5"},c=void 0,h={unversionedId:"offline-installation",id:"offline-installation",title:"\u79bb\u7ebf\u5b89\u88c5",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/offline-installation.md",sourceDirName:".",slug:"/offline-installation",permalink:"/zh/docs/next/offline-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/offline-installation.md",tags:[],version:"current",frontMatter:{title:"\u79bb\u7ebf\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09",permalink:"/zh/docs/next/production-installation-using-helm"},next:{title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",permalink:"/zh/docs/next/persistence-dashboard"}},m={},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u6307\u5b9a\u7248\u672c\u53f7",id:"\u6307\u5b9a\u7248\u672c\u53f7",level:3},{value:"\u4e0b\u8f7d Chaos Mesh \u955c\u50cf",id:"\u4e0b\u8f7d-chaos-mesh-\u955c\u50cf",level:3},{value:"\u4e0b\u8f7d Chaos Mesh \u4ed3\u5e93\u538b\u7f29\u5305",id:"\u4e0b\u8f7d-chaos-mesh-\u4ed3\u5e93\u538b\u7f29\u5305",level:3},{value:"\u62f7\u8d1d\u6587\u4ef6",id:"\u62f7\u8d1d\u6587\u4ef6",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u52a0\u8f7d Chaos Mesh \u955c\u50cf",id:"\u7b2c-1-\u6b65\u52a0\u8f7d-chaos-mesh-\u955c\u50cf",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u63a8\u9001\u955c\u50cf\u81f3 Registry",id:"\u7b2c-2-\u6b65\u63a8\u9001\u955c\u50cf\u81f3-registry",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u7b2c-3-\u6b65\u4f7f\u7528-helm-\u5b89\u88c5",level:3},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u79bb\u7ebf\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 Docker \u5e76\u90e8\u7f72\u4e86 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u73af\u5883\u5c1a\u672a\u51c6\u5907\u597d\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u5b89\u88c5 Docker \u5e76\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes"))),(0,o.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,o.kt)("p",null,"\u5728\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh \u524d\uff0c\u4f60\u9700\u8981\u4ece\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\u4e0b\u8f7d\u6240\u6709 Chaos Mesh \u955c\u50cf\u548c\u4ed3\u5e93\u538b\u7f29\u5305\uff0c\u7136\u540e\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u62f7\u8d1d\u5230\u79bb\u7ebf\u73af\u5883\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u6307\u5b9a\u7248\u672c\u53f7"},"\u6307\u5b9a\u7248\u672c\u53f7"),(0,o.kt)("p",null,"\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u8bbe\u7f6e Chaos Mesh \u7684\u7248\u672c\u53f7\u4e3a\u73af\u5883\u53d8\u91cf\uff1a"),(0,o.kt)(r.Z,{mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest"),(0,o.kt)("h3",{id:"\u4e0b\u8f7d-chaos-mesh-\u955c\u50cf"},"\u4e0b\u8f7d Chaos Mesh \u955c\u50cf"),(0,o.kt)("p",null,"\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u901a\u8fc7\u5df2\u7ecf\u8bbe\u7f6e\u7684\u7248\u672c\u53f7\u62c9\u53d6\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\n")),(0,o.kt)("p",null,"\u4fdd\u5b58\u955c\u50cf\u4e3a tar \u5305\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker save ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u9700\u6a21\u62df DNS \u6545\u969c\uff08\u4f8b\u5982\uff0c\u4f7f DNS \u54cd\u5e94\u8fd4\u56de\u968f\u673a\u7684\u9519\u8bef IP \u5730\u5740\uff09\uff0c\u8bf7\u989d\u5916\u62c9\u53d6 ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pingcap/coredns"},(0,o.kt)("inlineCode",{parentName:"a"},"pingcap/coredns"))," \u955c\u50cf\u3002")),(0,o.kt)("h3",{id:"\u4e0b\u8f7d-chaos-mesh-\u4ed3\u5e93\u538b\u7f29\u5305"},"\u4e0b\u8f7d Chaos Mesh \u4ed3\u5e93\u538b\u7f29\u5305"),(0,o.kt)("p",null,"\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u4e0b\u8f7d Chaos Mesh \u7684 zip \u5305\uff1a"),(0,o.kt)(r.Z,{isArchive:!0,replaced:"refs/heads/master",mdxType:"PickVersion"},"curl -fsSL -o chaos-mesh.zip https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip"),(0,o.kt)("h3",{id:"\u62f7\u8d1d\u6587\u4ef6"},"\u62f7\u8d1d\u6587\u4ef6"),(0,o.kt)("p",null,"\u6240\u6709\u5b89\u88c5\u6240\u9700\u7684\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8bf7\u5c06\u8fd9\u4e9b\u6587\u4ef6\u62f7\u8d1d\u5230\u79bb\u7ebf\u73af\u5883\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-mesh.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-daemon.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-dashboard.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chaos-mesh.zip"))),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u5c06 Chaos Mesh \u955c\u50cf\u7684 tar \u5305\u548c\u4ed3\u5e93\u7684 zip \u5305\u62f7\u8d1d\u5230\u4f60\u7684\u79bb\u7ebf\u73af\u5883\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u5b89\u88c5\u3002"),(0,o.kt)("h3",{id:"\u7b2c-1-\u6b65\u52a0\u8f7d-chaos-mesh-\u955c\u50cf"},"\u7b2c 1 \u6b65\uff1a\u52a0\u8f7d Chaos Mesh \u955c\u50cf"),(0,o.kt)("p",null,"\u4ece tar \u5305\u4e2d\u52a0\u8f7d\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n")),(0,o.kt)("h3",{id:"\u7b2c-2-\u6b65\u63a8\u9001\u955c\u50cf\u81f3-registry"},"\u7b2c 2 \u6b65\uff1a\u63a8\u9001\u955c\u50cf\u81f3 Registry"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u63a8\u9001\u955c\u50cf\u524d\uff0c\u8bf7\u786e\u4fdd\u79bb\u7ebf\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72 Registry\u3002\u5982\u679c\u5c1a\u672a\u90e8\u7f72\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," \u8fdb\u884c\u90e8\u7f72\u3002")),(0,o.kt)("p",null,"\u8bbe\u7f6e Chaos Mesh \u7248\u672c\u548c Registry \u5730\u5740\u4e3a\u73af\u5883\u53d8\u91cf\uff1a"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000"),(0,o.kt)("p",null,"\u6807\u8bb0\u955c\u50cf\u4f7f\u5176\u6307\u5411 Registry\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n")),(0,o.kt)("p",null,"\u63a8\u9001\u955c\u50cf\u81f3 Registry\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n")),(0,o.kt)("h3",{id:"\u7b2c-3-\u6b65\u4f7f\u7528-helm-\u5b89\u88c5"},"\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 Helm \u5b89\u88c5"),(0,o.kt)("p",null,"\u89e3\u538b Chaos Mesh \u7684 zip \u5305\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6b63\u5728\u5b89\u88c5\u5728 Kubernetes v1.15\uff08\u6216\u66f4\u4f4e\u7248\u672c\uff09\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl create -f manifests/crd-v1beta1.yaml")," \u624b\u52a8\u5b89\u88c5 CRD\u3002 \u5177\u4f53\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/faqs#q-failed-to-install-chaos-mesh-with-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},"FAQ"),"\u3002")),(0,o.kt)("p",null,"\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,o.kt)("p",null,"\u6267\u884c Chaos Mesh \u5b89\u88c5\u547d\u4ee4\u3002\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6307\u5b9a Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4\u548c\u5404\u7ec4\u4ef6\u7684\u955c\u50cf\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set images.registry=$DOCKER_REGISTRY\n")),(0,o.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,o.kt)(s.default,{mdxType:"VerifyInstallation"}),(0,o.kt)("h2",{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c"},"\u8fd0\u884c Chaos \u5b9e\u9a8c"),(0,o.kt)(l.default,{mdxType:"QuickRun"}))}p.isMDXComponent=!0}}]);
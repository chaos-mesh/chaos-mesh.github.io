"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7830],{17942:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>f});var n=a(50959);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=m(a),s=r,f=d["".concat(o,".").concat(s)]||d[s]||N[s]||l;return a?n.createElement(f,p(p({ref:e},k),{},{components:a})):n.createElement(f,p({ref:e},k))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},90333:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(51163),r=(a(50959),a(17942));const l={},p="\u652f\u6301\u7684\u7248\u672c",i={type:"mdx",permalink:"/zh/supported-releases",source:"@site/i18n/zh/docusaurus-plugin-content-pages/supported-releases.md",title:"\u652f\u6301\u7684\u7248\u672c",description:"\u6b64\u9875\u9762\u5217\u51fa\u4e86\u5f53\u524d\u652f\u6301\u7684\u7248\u672c\u7684\u72b6\u6001\u3001\u65f6\u95f4\u8868\u548c\u7b56\u7565\u3002",frontMatter:{}},o=[{value:"\u547d\u540d\u65b9\u6848",id:"\u547d\u540d\u65b9\u6848",level:2},{value:"Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5",id:"chaos-mesh-\u7684\u652f\u6301\u72b6\u51b5",level:2},{value:"\u672a\u6765\u7248\u672c",id:"\u672a\u6765\u7248\u672c",level:2},{value:"\u652f\u6301\u7b56\u7565",id:"\u652f\u6301\u7b56\u7565",level:2},{value:"\u793e\u533a\u6280\u672f\u652f\u6301",id:"\u793e\u533a\u6280\u672f\u652f\u6301",level:3},{value:"\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d",id:"\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d",level:3},{value:"\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684 Kubernetes \u7248\u672c",id:"\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684-kubernetes-\u7248\u672c",level:2}],m={toc:o},k="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("p",null,"\u6b64\u9875\u9762\u5217\u51fa\u4e86\u5f53\u524d\u652f\u6301\u7684\u7248\u672c\u7684\u72b6\u6001\u3001\u65f6\u95f4\u8868\u548c\u7b56\u7565\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"tldr"},"TL;DR"),(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u4e2a\u7248\u672c\u7684\u652f\u6301\u671f\u9650\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u516d\u4e2a\u6708"),"\uff0c\u6211\u4eec",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e09\u4e2a\u6708"),"\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\u3002")),(0,r.kt)("h2",{id:"\u547d\u540d\u65b9\u6848"},"\u547d\u540d\u65b9\u6848"),(0,r.kt)("p",null,"\u6211\u4eec\u7684\u547d\u540d\u65b9\u6848\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c 2.0.0"),", \u5e76\u5728 git \u6807\u7b7e\u548c docker \u955c\u50cf\u4e2d\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," \u524d\u7f00:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"v<major>.<minor>.<patch>\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"<minor>")," \u5728\u6bcf\u4e2a\u7248\u672c\u4e2d\u90fd\u4f1a\u589e\u52a0\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"<patch>")," \u7edf\u8ba1\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"<minor>")," \u7248\u672c\u7684\u8865\u4e01\u6570\u91cf\u3002\u4e00\u4e2a\u8865\u4e01\u901a\u5e38\u662f\u76f8\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"<minor>")," \u7248\u672c\u7684\u4e00\u4e2a\u5c0f\u6539\u52a8\u3002"),(0,r.kt)("h2",{id:"chaos-mesh-\u7684\u652f\u6301\u72b6\u51b5"},"Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9 Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"1.22")," \u7684\u652f\u6301\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0.4")," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5f53\u524d\u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d1\u5e03\u65e5\u671f"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7ec8\u6b62\u65e5\u671f"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u652f\u6301\u7684 Kubernetes \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"master"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No, development only"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.21, 1.22, 1.23, 1.24, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.5 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nov 22, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"- \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.21, 1.22, 1.23, 1.24, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.4 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sep 23, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"- \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.21, 1.22, 1.23, 1.24, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jul 29, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apr 29, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sep 23, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nov 30, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jul 29, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jul 23, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apr 29, 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apr 23, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nov 30, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jan 08, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jul 23, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sep 25, 2020"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apr 23, 2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")))),(0,r.kt)("h2",{id:"\u672a\u6765\u7248\u672c"},"\u672a\u6765\u7248\u672c"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/milestones"},"GitHub Milestones")," \u4e0a\u67e5\u770b\u5373\u5c06\u53d1\u5e03\u7684 Chaos Mesh \u65b0\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7b56\u7565"},"\u652f\u6301\u7b56\u7565"),(0,r.kt)("p",null,"\u6211\u4eec\u5bf9\u6bcf\u4e2a\u53d1\u5e03\u5206\u652f\u7684\u652f\u6301\u7a97\u53e3\u662f",(0,r.kt)("strong",{parentName:"p"},"\u516d\u4e2a\u6708"),"\u3002\u9274\u4e8e\u6211\u4eec",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e09\u4e2a\u6708"),"\u5c31\u4f1a\u53d1\u5e03\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff0c\u8be5\u652f\u6301\u7a97\u53e3\u4e0e",(0,r.kt)("strong",{parentName:"p"},"\u6700\u65b0\u7684\u4e24\u4e2a\u7248\u672c"),"\u76f8\u5bf9\u5e94\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0cChaos Mesh \u56e2\u961f\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A4%BE%E5%8C%BA%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81"},"\u793e\u533a\u6280\u672f\u652f\u6301")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%AE%89%E5%85%A8%E5%92%8C%E9%94%99%E8%AF%AF%E4%BF%AE%E5%A4%8D"},"\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d"))),(0,r.kt)("h3",{id:"\u793e\u533a\u6280\u672f\u652f\u6301"},"\u793e\u533a\u6280\u672f\u652f\u6301"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u4f7f\u7528 Chaos Mesh \u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6b22\u8fce\u5728 CNCF Slack\uff08\u9891\u9053 ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"#project-chaos-mesh"),"\uff09\u5411\u793e\u533a\u63d0\u95ee\uff0c\u6216\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/discussions"},"GitHub Discussions")," \u5f00\u542f\u4e00\u4e2a\u8ba8\u8bba\u3002"),(0,r.kt)("h3",{id:"\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d"},"\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d"),(0,r.kt)("p",null,"\u5b89\u5168\u95ee\u9898\u4f1a\u5c3d\u5feb\u4fee\u590d\u3002\u5b83\u4eec\u4f1a\u88ab\u4fee\u590d\u5230\u6700\u540e\u4e24\u4e2a\u7248\u672c\uff0c\u5e76\u4f1a\u7acb\u5373\u4e3a\u5b83\u4eec\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8865\u4e01\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u589e\u5f3a\u529f\u80fd\u6216\u9519\u8bef\u4fee\u590d\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u9700\u8981\u5236\u4f5c\u65b0\u7684\u8865\u4e01\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684-kubernetes-\u7248\u672c"},"\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684 Kubernetes \u7248\u672c"),(0,r.kt)("p",null,"Chaos Mesh \u56e2\u961f\u4f1a\u901a\u8fc7 E2E \u6d4b\u8bd5\u5bf9\u4e0d\u540c\u7248\u672c\u7684 Kubernetes \u96c6\u7fa4\u7684\u517c\u5bb9\u6027\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6700\u540e\u6839\u636e\u6d4b\u8bd5\u7ed3\u679c\u6765\u786e\u5b9a ",(0,r.kt)("a",{parentName:"p",href:"#chaos-mesh-%E7%9A%84%E6%94%AF%E6%8C%81%E7%8A%B6%E5%86%B5"},"Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5"),"\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c E2E \u6d4b\u8bd5\u6240\u6db5\u76d6\u7684 Kubernetes \u7248\u672c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6d4b\u8bd5\u7684 Kubernetes \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"master"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.23, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.23, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.20, 1.23, 1.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.20, 1.23")))))}d.isMDXComponent=!0}}]);
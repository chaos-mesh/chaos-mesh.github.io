"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9029],{49613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,u=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(60795),r=(a(59496),a(49613));const l={title:"\u6a21\u62df\u538b\u529b\u573a\u666f"},s=void 0,i={unversionedId:"simulate-heavy-stress-in-physical-nodes",id:"version-2.5.2/simulate-heavy-stress-in-physical-nodes",title:"\u6a21\u62df\u538b\u529b\u573a\u666f",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u538b\u529b\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 stress-ng \u5728\u4e3b\u673a\u4e0a\u751f\u6210 CPU \u6216\u8005\u5185\u5b58\u538b\u529b\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-heavy-stress-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-heavy-stress-in-physical-nodes",permalink:"/zh/docs/2.5.2/simulate-heavy-stress-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-heavy-stress-in-physical-nodes.md",tags:[],version:"2.5.2",frontMatter:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f"},sidebar:"docs",previous:{title:"\u6a21\u62df\u4e3b\u673a\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-host-console-in-physical-nodes"},next:{title:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-disk-pressure-in-physical-nodes"}},p={},o=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c",level:2},{value:"\u6a21\u62df CPU \u538b\u529b\u573a\u666f",id:"\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f",level:3},{value:"\u6a21\u62df CPU \u538b\u529b\u547d\u4ee4",id:"\u6a21\u62df-cpu-\u538b\u529b\u547d\u4ee4",level:4},{value:"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",level:4},{value:"\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b",id:"\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b",level:4},{value:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f",id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f",level:3},{value:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4",id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4",level:4},{value:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",level:4},{value:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b",id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b",level:4},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c",level:2},{value:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u573a\u666f",id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f",level:3},{value:"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b",id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b",level:4},{value:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f",id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f",level:3},{value:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b",id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b",level:4}],d={toc:o},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u538b\u529b\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng"},"stress-ng")," \u5728\u4e3b\u673a\u4e0a\u751f\u6210 CPU \u6216\u8005\u5185\u5b58\u538b\u529b\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u538b\u529b\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Chaosd \u652f\u6301\u7684\u538b\u529b\u5b9e\u9a8c\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress --help\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Stress attack related commands\n\nUsage:\n  chaosd attack stress [command]\n\nAvailable Commands:\n  cpu         continuously stress CPU out\n  mem         continuously stress virtual memory out\n\nFlags:\n  -h, --help   help for stress\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack stress [command] --help\" for more information about a command.\n")),(0,r.kt)("p",null,"\u76ee\u524d Chaosd \u652f\u6301\u521b\u5efa CPU \u538b\u529b\u5b9e\u9a8c\u548c\u5185\u5b58\u538b\u529b\u5b9e\u9a8c\u3002"),(0,r.kt)("h3",{id:"\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f"},"\u6a21\u62df CPU \u538b\u529b\u573a\u666f"),(0,r.kt)("h4",{id:"\u6a21\u62df-cpu-\u538b\u529b\u547d\u4ee4"},"\u6a21\u62df CPU \u538b\u529b\u547d\u4ee4"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u6a21\u62df CPU \u538b\u529b\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --help\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress CPU out\n\nUsage:\n  chaosd attack stress cpu [options] [flags]\n\nFlags:\n  -h, --help              help for cpu\n  -l, --load int          Load specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading. (default 10)\n  -o, --options strings   extend stress-ng options.\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"load")),(0,r.kt)("td",{parentName:"tr",align:"left"},"l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u6bcf\u4e2a CPU worker \u5360\u7528 CPU \u8d1f\u8f7d\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff0c\u5219\u8868\u793a\u4e3a\u4e00\u4e2a\u7a7a\u8d1f\u8f7d\uff1b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"100")," \u5219\u8868\u793a\u6ee1\u8d1f\u8f7d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),"\uff0c \u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"workers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"w"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7528\u4e8e\u751f\u6210 CPU \u538b\u529b\u7684 worker \u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"o"),(0,r.kt)("td",{parentName:"tr",align:"left"},"stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u9ed8\u8ba4\u503c\u4e3a ""')))),(0,r.kt)("h4",{id:"\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b"},"\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,r.kt)("h3",{id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f"),(0,r.kt)("h4",{id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u547d\u4ee4"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --help\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress virtual memory out\n\nUsage:\n  chaosd attack stress mem [options] [flags]\n\nFlags:\n  -h, --help              help for mem\n  -o, --options strings   extend stress-ng options.\n  -s, --size string       Size specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6bcf\u4e2a VM worker \u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4f7f\u7528\u5355\u4f4d B\uff0cKB/KiB\uff0cMB/MiB\uff0cGB/GiB\uff0cTB/TiB \u6765\u8bbe\u7f6e\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u5360\u7528\u6240\u6709\u53ef\u7528\u7684\u5185\u5b58\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"o"),(0,r.kt)("td",{parentName:"tr",align:"left"},"stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u9ed8\u8ba4\u503c\uff1a""')))),(0,r.kt)("h4",{id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --workers 2 --size 100M\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:37:19.643 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --vm 2 --vm-keep --vm-bytes 100000000"]\n[2021/05/12 03:37:19.654 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --vm 2 --vm-keep --vm-bytes 100000000"] [Pid=26799]\nAttack stress mem successfully, uid: c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u538b\u529b\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/attack/stress")," \u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," HTTP \u8bf7\u6c42\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 172.16.112.130:31767/api/attack/stress -H \"Content-Type:application/json\" -d '{fault-configuration}'\n")))),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-configuration")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," \u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP \u8bf7\u6c42\u3002")),(0,r.kt)("h3",{id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u573a\u666f"},"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u573a\u666f"),(0,r.kt)("h4",{id:"\u6a21\u62df-cpu-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"},"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9e\u9a8c\u7684\u884c\u4e3a"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u8bbe\u7f6e\u4e3a "cpu"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"load")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u6bcf\u4e2a CPU worker \u5360\u7528 CPU \u8d1f\u8f7d\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff0c\u5219\u8868\u793a\u4e3a\u4e00\u4e2a\u7a7a\u8d1f\u8f7d\uff1b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"100")," \u5219\u8868\u793a\u6ee1\u8d1f\u8f7d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),"\uff0c \u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"workers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7528\u4e8e\u751f\u6210 CPU \u538b\u529b\u7684 worker \u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u9ed8\u8ba4\u503c\uff1a""')))),(0,r.kt)("h4",{id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df-cpu-\u538b\u529b\u793a\u4f8b"},"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df CPU \u538b\u529b\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,r.kt)("h3",{id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f"},"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f"),(0,r.kt)("h4",{id:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"},"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9e\u9a8c\u7684\u884c\u4e3a"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u8bbe\u7f6e\u4e3a "mem"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6bcf\u4e2a VM worker \u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4f7f\u7528\u5355\u4f4d B\uff0cKB/KiB\uff0cMB/MiB\uff0cGB/GiB\uff0cTB/TiB \u6765\u8bbe\u7f6e\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u5360\u7528\u6240\u6709\u53ef\u7528\u7684\u5185\u5b58\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"stress-ng \u7684\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u9ed8\u8ba4\u503c\uff1a""')))),(0,r.kt)("h4",{id:"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b"},"\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u5185\u5b58\u538b\u529b\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"size":"100M", "action":"mem"}\'\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n')))}k.isMDXComponent=!0}}]);
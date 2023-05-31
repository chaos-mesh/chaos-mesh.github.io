"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[50166],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),k=l,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(60795),l=(a(59496),a(49613));const r={title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},s=void 0,o={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"version-2.5.2/simulate-process-chaos-in-physical-nodes",title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 Golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/zh/docs/2.5.2/simulate-process-chaos-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"2.5.2",frontMatter:{title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-physical-machine-chaos"},next:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-network-chaos-in-physical-nodes"}},p={},i=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",level:3},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4",level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",level:3},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4",level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b",level:4},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",level:3},{value:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b",level:4},{value:"\u8fdb\u7a0b\u88ab\u7ec8\u6b62",id:"\u8fdb\u7a0b\u88ab\u7ec8\u6b62",level:5},{value:"\u8fdb\u7a0b\u88ab\u6682\u505c",id:"\u8fdb\u7a0b\u88ab\u6682\u505c",level:5}],c={toc:i},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kill")," \u7684 Golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u8fdb\u7a0b\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u8fdb\u7a0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,l.kt)("p",null,"\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u6545\u969c\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help                 help for kill\n  -p, --process string       The process name or the process ID\n  -r, --recover-cmd string   The command to be run when recovering experiment\n  -s, --signal int           The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"process")),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recover-cmd")),(0,l.kt)("td",{parentName:"tr",align:"left"},"r"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u5728\u5b9e\u9a8c\u6062\u590d\u65f6\u6267\u884c\u7684\u547d\u4ee4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"9"),"\u3002\u76ee\u524d\u53ea\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"SIGKILL"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"SIGTERM")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"SIGSTOP")," \u4e09\u79cd\u4fe1\u53f7\u503c\u3002")))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"signal")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"process")),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u6682\u505c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/attack/process")," \u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," HTTP \u8bf7\u6c42\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 172.16.112.130:31767/api/attack/process -H \"Content-Type:application/json\" -d '{fault-configuration}'\n")))),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"fault-configuration")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," \u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP \u8bf7\u6c42\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"),(0,l.kt)("h4",{id:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"},"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"process")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"9"),"\u3002")))),(0,l.kt)("h4",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u8fdb\u7a0b\u88ab\u7ec8\u6b62"},"\u8fdb\u7a0b\u88ab\u7ec8\u6b62"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,l.kt)("h5",{id:"\u8fdb\u7a0b\u88ab\u6682\u505c"},"\u8fdb\u7a0b\u88ab\u6682\u505c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":19}\'\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a00cca2b-eba7-4716-86b3-3e66f94880f7"}\n')),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"signal")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002")))}m.isMDXComponent=!0}}]);
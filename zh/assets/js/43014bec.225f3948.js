"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1417],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||l;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73447:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],o={title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},i=void 0,c={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"simulate-process-chaos-in-physical-nodes",isDocsHomePage:!1,title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/zh/docs/next/simulate-process-chaos-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c",permalink:"/zh/docs/next/simulate-physical-machine-chaos"},next:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/next/simulate-network-chaos-in-physical-nodes"}},p=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",children:[{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4",children:[],level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",children:[],level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b",children:[],level:4}],level:3},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",children:[{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4",children:[],level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e",children:[],level:4},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b",children:[],level:4}],level:3}],level:2},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",children:[{value:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",children:[],level:4},{value:"\u670d\u52a1\u6a21\u5f0f\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b",id:"\u670d\u52a1\u6a21\u5f0f\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b",children:[],level:4}],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u8fdb\u7a0b\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u8fdb\u7a0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,l.kt)("p",null,"\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u6545\u969c\u3002"),(0,l.kt)("h3",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help             help for kill\n  -p, --process string   The process name or the process ID\n  -s, --signal int       The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u7ed3\u675f\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"signal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a 9\u3002\u76ee\u524d\u53ea\u652f\u6301 SIGKILL\u3001SIGTERM \u548c SIGSTOP \u4e09\u79cd\u4fe1\u53f7\u503c\u3002")))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nAttack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u53ea\u6709 signal \u4e3a SIGSTOP \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002"))),(0,l.kt)("h3",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u7ed3\u675f\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""')))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nAttack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,l.kt)("li",{parentName:"ol"},"\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 /api/attack/process \u53d1\u9001 HTTP POTST \u8bf7\u6c42\u3002 ",(0,l.kt)("inlineCode",{parentName:"li"},"bash curl -X POST 172.16.112.130:31767/api/attack/process -H \"Content-Type:application/json\" -d '{fault-configuration}' ")," \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"fault-configuration")," \u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u8fdb\u884c\u914d\u7f6e\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002 \u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 uid \u4fe1\u606f\uff0c\u5f53\u8981\u7ed3\u675f uid \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 /api/attack/{uid} \u53d1\u9001 HTTP DELETE \u8bf7\u6c42\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"),(0,l.kt)("h4",{id:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"},"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u7ed3\u675f\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"signal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a 9\u3002")))),(0,l.kt)("h4",{id:"\u670d\u52a1\u6a21\u5f0f\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b"},"\u670d\u52a1\u6a21\u5f0f\u8fdb\u7a0b\u6545\u969c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u53ea\u6709 signal \u4e3a SIGSTOP \u7684\u5b9e\u9a8c\u652f\u6301\u88ab\u6062\u590d\u3002"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6255],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,s(s({ref:t},i),{},{components:n})):a.createElement(m,s({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],o={title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},c=void 0,p={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"version-2.0.4/simulate-process-chaos-in-physical-nodes",isDocsHomePage:!1,title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.4/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/zh/docs/simulate-process-chaos-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.4/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"2.0.4",frontMatter:{title:"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c"},sidebar:"version-2.0.4/docs",previous:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/zh/docs/chaosd-overview"},next:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/simulate-network-chaos-in-physical-nodes"}},i=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62",children:[]},{value:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c",children:[]}]},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]}],u={toc:i};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u8fdb\u7a0b\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 kill \u7684 golang \u63a5\u53e3\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u8fdb\u7a0b\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684\u8fdb\u7a0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,l.kt)("p",null,"\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u6216\u6682\u505c\u7684\u6545\u969c\u3002"),(0,l.kt)("h3",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help             help for kill\n  -p, --process string   The process name or the process ID\n  -s, --signal int       The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u9700\u8981\u6740\u6b7b\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"signal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u63d0\u4f9b\u7684\u8fdb\u7a0b\u4fe1\u53f7\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a 9\u3002\u76ee\u524d\u53ea\u652f\u6301 SIGKILL\u3001SIGTERM \u548c SIGSTOP \u4e09\u79cd\u4fe1\u53f7\u503c\u3002")))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u7ec8\u6b62\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nAttack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,l.kt)("h3",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c"),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u9700\u8981\u6740\u6b7b\u8fdb\u7a0b\u7684\u540d\u5b57\u6216\u8005\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""')))),(0,l.kt)("h4",{id:"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"},"\u6a21\u62df\u8fdb\u7a0b\u88ab\u6682\u505c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nAttack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\uff08\u6b63\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff09"))}d.isMDXComponent=!0}}]);
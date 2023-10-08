"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7543],{49613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(59496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),u=l,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8370:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(28957),l=(n(59496),n(49613));const r={title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},i=void 0,o={unversionedId:"simulate-time-chaos-on-physical-nodes",id:"simulate-time-chaos-on-physical-nodes",title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u529f\u80fd\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-time-chaos-on-physical-nodes.md",sourceDirName:".",slug:"/simulate-time-chaos-on-physical-nodes",permalink:"/zh/docs/next/simulate-time-chaos-on-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/simulate-time-chaos-on-physical-nodes.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c",permalink:"/zh/docs/next/simulate-jvm-application-chaos-in-physical-nodes"},next:{title:"\u6a21\u62df\u6587\u4ef6\u6545\u969c",permalink:"/zh/docs/next/simulate-file-chaos-in-physical-nodes"}},c={},p=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u5feb\u901f\u4f7f\u7528",id:"\u5feb\u901f\u4f7f\u7528",level:3},{value:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e",id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b",level:3}],s={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u529f\u80fd\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5b9e\u9a8c\u3002"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"chaosd attack clock -h\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ chaosd attack clock -h\n\nclock skew\n\nUsage:\n  chaosd attack clock attack [flags]\n\nFlags:\n  -c, --clock-ids-slice string   The identifier of the particular clock on which to act.More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime.Muti clock ids should be split with \",\" (default \"CLOCK_REALTIME\")\n  -h, --help                     help for clock\n  -p, --pid int                  Pid of target program.\n  -t, --time-offset string       Specifies the length of time offset.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\n")),(0,l.kt)("h3",{id:"\u5feb\u901f\u4f7f\u7528"},"\u5feb\u901f\u4f7f\u7528"),(0,l.kt)("p",null,"\u51c6\u5907\u6d4b\u8bd5\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cat > time.c << EOF\n#include <stdio.h>\n#include <time.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    printf("PID : %ld\\n", (long)getpid());\n    struct  timespec ts;\n    for(;;) {\n        clock_gettime(CLOCK_REALTIME, &ts);\n        printf("Time : %lld.%.9ld\\n", (long long)ts.tv_sec, ts.tv_nsec);\n        sleep(10);\n    }\n}\nEOF\n\ngcc -o get_time ./time.c\n')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u6267\u884c get_time \u5e76\u4e14\u4f7f\u7528 chaosd \u5c1d\u8bd5\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack clock -p $PID -t 11s\n")),(0,l.kt)("h3",{id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65f6\u95f4\u7684\u504f\u79fb\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-5m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clockIds"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html"},"clock_gettime documentation")," \u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME"]')),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME", "CLOCK_MONOTONIC"]'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("h3",{id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"time-offset"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u65f6\u95f4\u7684\u504f\u79fb\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"-5m"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clock-ids-slice"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html"},"clock_gettime documentation")," \u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string \u6570\u7ec4\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME"]'))))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b"),(0,l.kt)("p",null,"\u8fd0\u884c",(0,l.kt)("a",{parentName:"p",href:"#%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8"},"\u5feb\u901f\u4f7f\u7528"),"\u4e2d\u7684\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u65f6\u95f4\u6545\u969c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/clock -H "Content-Type:application/json" -d \'{"pid":123, "time-offset":"11s"}\'\n')))}d.isMDXComponent=!0}}]);
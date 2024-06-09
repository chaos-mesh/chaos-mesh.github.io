"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1504],{13322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(13274),i=n(90073);const l={title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},c=void 0,d={id:"simulate-time-chaos-on-physical-nodes",title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u529f\u80fd\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-time-chaos-on-physical-nodes.md",sourceDirName:".",slug:"/simulate-time-chaos-on-physical-nodes",permalink:"/zh/docs/2.5.2/simulate-time-chaos-on-physical-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-time-chaos-on-physical-nodes.md",tags:[],version:"2.5.2",frontMatter:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes"},next:{title:"\u6a21\u62df\u6587\u4ef6\u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-file-chaos-in-physical-nodes"}},r={},h=[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u5feb\u901f\u4f7f\u7528",id:"\u5feb\u901f\u4f7f\u7528",level:3},{value:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e",id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b",level:3}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u529f\u80fd\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,s.jsx)(t.p,{children:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5b9e\u9a8c\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e\u9879\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"chaosd attack clock -h\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ chaosd attack clock -h\n\nclock skew\n\nUsage:\n  chaosd attack clock attack [flags]\n\nFlags:\n  -c, --clock-ids-slice string   The identifier of the particular clock on which to act.More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime.Muti clock ids should be split with \",\" (default \"CLOCK_REALTIME\")\n  -h, --help                     help for clock\n  -p, --pid int                  Pid of target program.\n  -t, --time-offset string       Specifies the length of time offset.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\u5feb\u901f\u4f7f\u7528",children:"\u5feb\u901f\u4f7f\u7528"}),"\n",(0,s.jsx)(t.p,{children:"\u51c6\u5907\u6d4b\u8bd5\u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat > time.c << EOF\n#include <stdio.h>\n#include <time.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    printf("PID : %ld\\n", (long)getpid());\n    struct  timespec ts;\n    for(;;) {\n        clock_gettime(CLOCK_REALTIME, &ts);\n        printf("Time : %lld.%.9ld\\n", (long long)ts.tv_sec, ts.tv_nsec);\n        sleep(10);\n    }\n}\nEOF\n\ngcc -o get_time ./time.c\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u6267\u884c get_time \u5e76\u4e14\u4f7f\u7528 chaosd \u5c1d\u8bd5\u521b\u5efa\u65f6\u95f4\u6545\u969c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"chaosd attack clock -p $PID -t 11s\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e",children:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u7684\u76f8\u5173\u914d\u7f6e"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(t.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(t.th,{children:"\u5fc5\u8981\u9879"}),(0,s.jsx)(t.th,{children:"\u4f8b\u5b50"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timeOffset"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u6307\u5b9a\u65f6\u95f4\u7684\u504f\u79fb\u91cf\u3002"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"-5m"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clockIds"}),(0,s.jsx)(t.td,{children:"[]string"}),(0,s.jsxs)(t.td,{children:["\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ",(0,s.jsx)(t.a,{href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html",children:"clock_gettime documentation"})," \u3002"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'["CLOCK_REALTIME"]'})}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'["CLOCK_REALTIME", "CLOCK_MONOTONIC"]'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pid"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26\u3002"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,s.jsx)(t.h3,{id:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e",children:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u503c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"pid"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8fdb\u7a0b\u7684\u6807\u8bc6\u7b26\u3002"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"int \u7c7b\u578b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"time-offset"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u65f6\u95f4\u7684\u504f\u79fb\u91cf\u3002"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"-5m"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"clock-ids-slice"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ",(0,s.jsx)(t.a,{href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html",children:"clock_gettime documentation"})," \u3002"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["string \u6570\u7ec4\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(t.code,{children:'["CLOCK_REALTIME"]'})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b",children:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u65f6\u95f4\u6545\u969c\u793a\u4f8b"}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd0\u884c",(0,s.jsx)(t.a,{href:"#%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8",children:"\u5feb\u901f\u4f7f\u7528"}),"\u4e2d\u7684\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u65f6\u95f4\u6545\u969c\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST 172.16.112.130:31767/api/attack/clock -H "Content-Type:application/json" -d \'{"pid":123, "time-offset":"11s"}\'\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},90073:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var s=n(79474);const i={},l=s.createContext(i);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4271],{77493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"simulate-time-chaos-on-physical-nodes","title":"Simulate Time Faults","description":"This document describes how to use Chaosd to simulate a time offset scenario. You can create experiments either in command-line mode or service mode.","source":"@site/versioned_docs/version-2.5.2/simulate-time-chaos-on-physical-nodes.md","sourceDirName":".","slug":"/simulate-time-chaos-on-physical-nodes","permalink":"/docs/2.5.2/simulate-time-chaos-on-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/simulate-time-chaos-on-physical-nodes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate Time Faults","summary":"This document describes how to use Chaosd to simulate a time offset scenario."},"sidebar":"docs","previous":{"title":"Simulate JVM Application Faults","permalink":"/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes"},"next":{"title":"Simulate File Faults","permalink":"/docs/2.5.2/simulate-file-chaos-in-physical-nodes"}}');var i=n(86070),c=n(51377);const o={title:"Simulate Time Faults",summary:"This document describes how to use Chaosd to simulate a time offset scenario."},l=void 0,a={},r=[{value:"Create experiments using command-line mode",id:"create-experiments-using-command-line-mode",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Configurations of simulating time faults",id:"configurations-of-simulating-time-faults",level:3},{value:"Create experiments using service mode",id:"create-experiments-using-service-mode",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This document describes how to use Chaosd to simulate a time offset scenario. You can create experiments either in command-line mode or service mode."}),"\n",(0,i.jsx)(t.h2,{id:"create-experiments-using-command-line-mode",children:"Create experiments using command-line mode"}),"\n",(0,i.jsx)(t.p,{children:"This section describes how to create time fault experiments using commands."}),"\n",(0,i.jsx)(t.p,{children:"Before creating an experiment, you can run the following command to check the options of time faults:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"chaosd attack clock -h\n"})}),"\n",(0,i.jsx)(t.p,{children:"The result is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ chaosd attack clock -h\n\nclock skew\n\nUsage:\n  chaosd attack clock attack [flags]\n\nFlags:\n  -c, --clock-ids-slice string   The identifier of the particular clock on which to act.More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime.Muti clock ids should be split with \",\" (default \"CLOCK_REALTIME\")\n  -h, --help                     help for clock\n  -p, --pid int                  Pid of target program.\n  -t, --time-offset string       Specifies the length of time offset.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(t.p,{children:"Prepare test program:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'cat > time.c << EOF\n#include <stdio.h>\n#include <time.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    printf("PID : %ld\\n", (long)getpid());\n    struct  timespec ts;\n    for(;;) {\n        clock_gettime(CLOCK_REALTIME, &ts);\n        printf("Time : %lld.%.9ld\\n", (long long)ts.tv_sec, ts.tv_nsec);\n        sleep(10);\n    }\n}\nEOF\n\ngcc -o get_time ./time.c\n'})}),"\n",(0,i.jsx)(t.p,{children:"Then execute get_time and try to attack it. The following is an example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"chaosd attack clock -p $PID -t 11s\n"})}),"\n",(0,i.jsx)(t.h3,{id:"configurations-of-simulating-time-faults",children:"Configurations of simulating time faults"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Note"}),(0,i.jsx)(t.th,{children:"Default value"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timeOffset"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Specifies the length of time offset."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-5m"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clockIds"}),(0,i.jsx)(t.td,{children:"[]string"}),(0,i.jsxs)(t.td,{children:["Specifies the ID of clock that will be offset. See the ",(0,i.jsx)(t.a,{href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html",children:"clock_gettime documentation"})," for details."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'["CLOCK_REALTIME"]'})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'["CLOCK_REALTIME", "CLOCK_MONOTONIC"]'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pid"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The identifier of the process."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-experiments-using-service-mode",children:"Create experiments using service mode"}),"\n",(0,i.jsx)(t.p,{children:"(ongoing update)"})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},51377:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(30758);const i={},c=s.createContext(i);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);
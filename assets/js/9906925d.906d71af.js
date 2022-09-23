"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[32665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Simulate Time Faults",summary:"This document describes how to use Chaosd to simulate a time offset scenario."},l=void 0,o={unversionedId:"simulate-time-chaos-on-physical-nodes",id:"version-2.3.2/simulate-time-chaos-on-physical-nodes",title:"Simulate Time Faults",description:"This document describes how to use Chaosd to simulate a time offset scenario. You can create experiments either in command-line mode or service mode.",source:"@site/versioned_docs/version-2.3.2/simulate-time-chaos-on-physical-nodes.md",sourceDirName:".",slug:"/simulate-time-chaos-on-physical-nodes",permalink:"/docs/2.3.2/simulate-time-chaos-on-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.2/simulate-time-chaos-on-physical-nodes.md",tags:[],version:"2.3.2",frontMatter:{title:"Simulate Time Faults",summary:"This document describes how to use Chaosd to simulate a time offset scenario."},sidebar:"docs",previous:{title:"Simulate JVM Application Faults",permalink:"/docs/2.3.2/simulate-jvm-application-chaos-in-physical-nodes"},next:{title:"Simulate File Faults",permalink:"/docs/2.3.2/simulate-file-chaos-in-physical-nodes"}},s={},c=[{value:"Create experiments using command-line mode",id:"create-experiments-using-command-line-mode",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Configurations of simulating time faults",id:"configurations-of-simulating-time-faults",level:3},{value:"Create experiments using service mode",id:"create-experiments-using-service-mode",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to use Chaosd to simulate a time offset scenario. You can create experiments either in command-line mode or service mode."),(0,i.kt)("h2",{id:"create-experiments-using-command-line-mode"},"Create experiments using command-line mode"),(0,i.kt)("p",null,"This section describes how to create time fault experiments using commands."),(0,i.kt)("p",null,"Before creating an experiment, you can run the following command to check the options of time faults:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chaosd attack clock -h\n")),(0,i.kt)("p",null,"The result is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ chaosd attack clock -h\n\nclock skew\n\nUsage:\n  chaosd attack clock attack [flags]\n\nFlags:\n  -c, --clock-ids-slice string   The identifier of the particular clock on which to act.More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime.Muti clock ids should be split with \",\" (default \"CLOCK_REALTIME\")\n  -h, --help                     help for clock\n  -p, --pid int                  Pid of target program.\n  -t, --time-offset string       Specifies the length of time offset.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\n")),(0,i.kt)("h3",{id:"quick-example"},"Quick Example"),(0,i.kt)("p",null,"Prepare test program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat > time.c << EOF\n#include <stdio.h>\n#include <time.h>\n#include <unistd.h>\n#include <sys/types.h>\n\nint main() {\n    printf("PID : %ld\\n", (long)getpid());\n    struct  timespec ts;\n    for(;;) {\n        clock_gettime(CLOCK_REALTIME, &ts);\n        printf("Time : %lld.%.9ld\\n", (long long)ts.tv_sec, ts.tv_nsec);\n        sleep(10);\n    }\n}\nEOF\n\ngcc -o get_time ./time.c\n')),(0,i.kt)("p",null,"Then execute get_time and try to attack it. The following is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack clock -p $PID -t 11s\n")),(0,i.kt)("h3",{id:"configurations-of-simulating-time-faults"},"Configurations of simulating time faults"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the length of time offset."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-5m"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clockIds"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the ID of clock that will be offset. See the ",(0,i.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html"},"clock_gettime documentation")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME"]')),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME", "CLOCK_MONOTONIC"]'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier of the process."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))))),(0,i.kt)("h3",{id:"create-experiments-using-service-mode"},"Create experiments using service mode"),(0,i.kt)("p",null,"(ongoing update)"))}u.isMDXComponent=!0}}]);
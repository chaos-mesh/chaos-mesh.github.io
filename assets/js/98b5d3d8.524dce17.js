"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6336],{49613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var i=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=o(a),k=n,f=p["".concat(s,".").concat(k)]||p[k]||u[k]||r;return a?i.createElement(f,l(l({ref:t},m),{},{components:a})):i.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:n,l[1]=d;for(var o=2;o<r;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=a(60795),n=(a(59496),a(49613));const r={title:"Simulate Disk Faults"},l=void 0,d={unversionedId:"simulate-disk-pressure-in-physical-nodes",id:"version-2.4.3/simulate-disk-pressure-in-physical-nodes",title:"Simulate Disk Faults",description:"This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via dd) or disk fill (via dd or fallocate).",source:"@site/versioned_docs/version-2.4.3/simulate-disk-pressure-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-disk-pressure-in-physical-nodes",permalink:"/docs/2.4.3/simulate-disk-pressure-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/simulate-disk-pressure-in-physical-nodes.md",tags:[],version:"2.4.3",frontMatter:{title:"Simulate Disk Faults"},sidebar:"docs",previous:{title:"Simulate Stress Scenarios",permalink:"/docs/2.4.3/simulate-heavy-stress-in-physical-nodes"},next:{title:"Simulate JVM Application Faults",permalink:"/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes"}},s={},o=[{value:"Create experiments using the command-line mode",id:"create-experiments-using-the-command-line-mode",level:2},{value:"Simulate disk read load using the command-line mode",id:"simulate-disk-read-load-using-the-command-line-mode",level:3},{value:"Commands for simulating disk read load",id:"commands-for-simulating-disk-read-load",level:4},{value:"Configuration description for simulating disk read load",id:"configuration-description-for-simulating-disk-read-load",level:4},{value:"Example for simulating disk read load",id:"example-for-simulating-disk-read-load",level:4},{value:"Simulate disk write load using the command-line mode",id:"simulate-disk-write-load-using-the-command-line-mode",level:3},{value:"Command for simulating disk write load",id:"command-for-simulating-disk-write-load",level:4},{value:"Configuration description for simulating disk write load",id:"configuration-description-for-simulating-disk-write-load",level:4},{value:"Example for simulating disk write load",id:"example-for-simulating-disk-write-load",level:4},{value:"Simulate disk fill using the command-line mode",id:"simulate-disk-fill-using-the-command-line-mode",level:3},{value:"Command for simulating disk fill",id:"command-for-simulating-disk-fill",level:4},{value:"Configuration description for simulating disk fill",id:"configuration-description-for-simulating-disk-fill",level:4},{value:"Example for simulating disk fill",id:"example-for-simulating-disk-fill",level:4},{value:"Create experiments using the service mode",id:"create-experiments-using-the-service-mode",level:2},{value:"Simulate disk read load using the service mode",id:"simulate-disk-read-load-using-the-service-mode",level:3},{value:"Parameters for simulating disk read load",id:"parameters-for-simulating-disk-read-load",level:4},{value:"Example for simulating disk read load using the service mode",id:"example-for-simulating-disk-read-load-using-the-service-mode",level:4},{value:"Simulate disk write load using the service mode",id:"simulate-disk-write-load-using-the-service-mode",level:3},{value:"Parameters for simulating disk write load",id:"parameters-for-simulating-disk-write-load",level:4},{value:"Example for simulating disk write load using the service mode",id:"example-for-simulating-disk-write-load-using-the-service-mode",level:4},{value:"Simulate disk fill using the service mode",id:"simulate-disk-fill-using-the-service-mode",level:3},{value:"Parameters for simulating disk fill",id:"parameters-for-simulating-disk-fill",level:4},{value:"Example for simulating disk fill using the service mode",id:"example-for-simulating-disk-fill-using-the-service-mode",level:4}],m={toc:o},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd"),") or disk fill (via ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," or ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/fallocate.1.html"},"fallocate"),")."),(0,n.kt)("h2",{id:"create-experiments-using-the-command-line-mode"},"Create experiments using the command-line mode"),(0,n.kt)("p",null,"This section describes how to create disk fault experiments using the command-line mode."),(0,n.kt)("p",null,"Before creating an experiment, you can run the following command to check the types of disk faults that are supported by Chaosd:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk -h\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"disk attack related command\n\nUsage:\n  chaosd attack disk [command]\n\nAvailable Commands:\n  add-payload add disk payload\n  fill        fill disk\n\nFlags:\n  -h, --help   help for disk\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack disk [command] --help\" for more information about a command.\n")),(0,n.kt)("p",null,"Currently, Chaosd supports creating disk read load experiments, disk write load experiments, and disk fill experiments."),(0,n.kt)("h3",{id:"simulate-disk-read-load-using-the-command-line-mode"},"Simulate disk read load using the command-line mode"),(0,n.kt)("p",null,"Simulating disk read load is a one-time operation, so the experiment does not need to be recovered."),(0,n.kt)("h4",{id:"commands-for-simulating-disk-read-load"},"Commands for simulating disk read load"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -h\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"read payload\n\nUsage:\n  chaosd attack disk add-payload read [flags]\n\nFlags:\n  -h, --help                help for read\n  -p, --path string         'path' specifies the location to read data.If path not provided, payload will read from disk mount on \"/\"\n  -n, --process-num uint8   'process-num' specifies the number of process work on reading , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will read from the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,n.kt)("h4",{id:"configuration-description-for-simulating-disk-read-load"},"Configuration description for simulating disk read load"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"p"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Specifies the file path to read the data. If this parameter is not specified, or the parameter value is set to an empty string, Chaosd reads from the virtual disk files mounted in the "/" directory. Depending on the permissions to read the files, you might be required to run this program using certain permissions.'),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"process-num")),(0,n.kt)("td",{parentName:"tr",align:"left"},"n"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrently running ",(0,n.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: uint8; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"; range: ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"255"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be read. It is the total size of data that <0>dd</0> reads."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; ",(0,n.kt)("strong",{parentName:"td"},"required"),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on.")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-read-load"},"Example for simulating disk read load"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n[2021/05/20 13:54:31.323 +08:00] [INFO] [disk.go:128] ["5242880+0 records in\\n5242880+0 records out\\n5242880 bytes (5.2 MB, 5.0 MiB) copied, 4.13252 s, 1.3 MB/s\\n"]\n[2021/05/20 13:54:46.977 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6513 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.002 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6762 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.004 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6777 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.015 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6899 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.018 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6914 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.051 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7254 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.074 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7487 s, 9.7 GB/s\\n"]\nRead file /dev/zero successfully, uid: 4bc9b74a-5fe2-4038-b4f2-09ae95b57694\n')),(0,n.kt)("h3",{id:"simulate-disk-write-load-using-the-command-line-mode"},"Simulate disk write load using the command-line mode"),(0,n.kt)("h4",{id:"command-for-simulating-disk-write-load"},"Command for simulating disk write load"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -h\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"write payload\n\nUsage:\n  chaosd attack disk add-payload write [flags]\n\nFlags:\n  -h, --help                help for write\n  -p, --path string         'path' specifies the location to fill data in.If path not provided, payload will write into a temp file, temp file will be deleted after writing\n  -n, --process-num uint8   'process-num' specifies the number of process work on writing , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will write into the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,n.kt)("h4",{id:"configuration-description-for-simulating-disk-write-load"},"Configuration description for simulating disk write load"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"p"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"process-num")),(0,n.kt)("td",{parentName:"tr",align:"left"},"n"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrently running ",(0,n.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: uint8; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"; range: ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"255"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be written. It is the total size of data that <0>dd</0> writes."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; ",(0,n.kt)("strong",{parentName:"td"},"required"),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on.")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-write-load"},"Example for simulating disk write load"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -s 2G -n 8\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/20 14:28:14.452 +08:00] [INFO] [disk.go:128] ["0+0 records in\\n0+0 records out\\n0 bytes copied, 4.3e-05 s, 0.0 kB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.32841 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3344 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33312 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33466 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33189 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33752 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33295 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.794 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3359 s, 115 MB/s\\n"]\nWrite file /home/andrew/chaosd/bin/example255569279 successfully, uid: e66afd86-6f3e-43a0-b161-09447ed84856\n')),(0,n.kt)("h3",{id:"simulate-disk-fill-using-the-command-line-mode"},"Simulate disk fill using the command-line mode"),(0,n.kt)("h4",{id:"command-for-simulating-disk-fill"},"Command for simulating disk fill"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -h\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"fill disk\n\nUsage:\n  chaosd attack disk fill [flags]\n\nFlags:\n  -d, --destroy          destroy file after filled in or allocated\n  -f, --fallocate        fill disk by fallocate instead of dd (default true)\n  -h, --help             help for fill\n  -p, --path string      'path' specifies the location to fill data in.If path not provided, a temp file will be generated and deleted immediately after data filled in or allocated\n  -c, --percent string   'percent' how many percent data of disk will fill in the file path\n  -s, --size string      'size' specifies how many units of data will fill in the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,n.kt)("h4",{id:"configuration-description-for-simulating-disk-fill"},"Configuration description for simulating disk fill"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"destroy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true,")," the fill file is immediately deleted after being filled."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fallocate")),(0,n.kt)("td",{parentName:"tr",align:"left"},"f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", Linux is used to call fallocate to quickly apply for disk space and size must be greater than ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),". If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", Linux is used to call dd to fill disks at a relatively slow pace."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"p"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"percent")),(0,n.kt)("td",{parentName:"tr",align:"left"},"c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the percentage of disk size to be filled."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; positive integer of the uint type is acceptable; You must set one of ",(0,n.kt)("inlineCode",{parentName:"td"},"size")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"percent")," (both items ",(0,n.kt)("strong",{parentName:"td"},"cannot")," be ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," at the same time).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be written."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on. You must set one of ",(0,n.kt)("inlineCode",{parentName:"td"},"size")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"percent")," (both items ",(0,n.kt)("strong",{parentName:"td"},"cannot")," be ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," at the same time).")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-fill"},"Example for simulating disk fill"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -c 50 -d\n")),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[2021/05/20 14:30:02.943 +08:00] [INFO] [disk.go:215]\nFill file /home/andrew/chaosd/bin/example623832242 successfully, uid: 097b4214-8d8e-46ad-8768-c3e0d8cbb326\n")),(0,n.kt)("h2",{id:"create-experiments-using-the-service-mode"},"Create experiments using the service mode"),(0,n.kt)("p",null,"This section describes how to create disk fault experiments using the service mode."),(0,n.kt)("h3",{id:"simulate-disk-read-load-using-the-service-mode"},"Simulate disk read load using the service mode"),(0,n.kt)("p",null,"Simulating disk read load is a one-time operation, so the experiment does not need to be recovered."),(0,n.kt)("h4",{id:"parameters-for-simulating-disk-read-load"},"Parameters for simulating disk read load"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"action")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Actions of the experiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set to ",(0,n.kt)("inlineCode",{parentName:"td"},'"read-payload"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Specifies the file path to read the data. If this parameter is not specified, or the parameter value is set to an empty string, Chaosd reads from the virtual disk files mounted in the "/" directory. Depending on the permissions to read the files, you might be required to run this program using certain permissions.'),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'"""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"payload-process-num")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrently running ",(0,n.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: uint8; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"; range: ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"255"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be read. It is the total size of data that <0>dd</0> reads."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; ",(0,n.kt)("strong",{parentName:"td"},"required"),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on.")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-read-load-using-the-service-mode"},"Example for simulating disk read load using the service mode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"read-payload","path":"/dev/zero", "payload-process-num":7,"size":"1000G"}\'\n')),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n')),(0,n.kt)("h3",{id:"simulate-disk-write-load-using-the-service-mode"},"Simulate disk write load using the service mode"),(0,n.kt)("h4",{id:"parameters-for-simulating-disk-write-load"},"Parameters for simulating disk write load"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"action")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Actions of the experiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set to ",(0,n.kt)("inlineCode",{parentName:"td"},'"write-payload"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"payload-process-num")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrently running ",(0,n.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: uint8; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"; range: ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"255"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be written. It is the total size of data that <0>dd</0> writes."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; ",(0,n.kt)("strong",{parentName:"td"},"required"),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on.")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-write-load-using-the-service-mode"},"Example for simulating disk write load using the service mode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"write-payload","path":"/tmp/test", "payload-process-num":7,"size":"1000G"}\'\n')),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n')),(0,n.kt)("h3",{id:"simulate-disk-fill-using-the-service-mode"},"Simulate disk fill using the service mode"),(0,n.kt)("h4",{id:"parameters-for-simulating-disk-fill"},"Parameters for simulating disk fill"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"action")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Actions of the experiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set to ",(0,n.kt)("inlineCode",{parentName:"td"},'"fill"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"destroy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true,")," the fill file is immediately deleted after being filled."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fill-by-fallocate")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", Chaosd uses Linux to call ",(0,n.kt)("inlineCode",{parentName:"td"},"fallocate")," to apply for disk space quickly, and you must set ",(0,n.kt)("inlineCode",{parentName:"td"},"size")," to a value greater than ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),". If this parameter is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", Chaosd uses Linux to call dd to fill disks at a relatively slow pace."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: ",(0,n.kt)("inlineCode",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"percent")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the percentage of disk size to be filled."),(0,n.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""; positive integer of the uint type is acceptable; You must set one of ',(0,n.kt)("inlineCode",{parentName:"td"},"size")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"percent")," (both items ",(0,n.kt)("strong",{parentName:"td"},"cannot")," be ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," at the same time).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the volume of data to be read."),(0,n.kt)("td",{parentName:"tr",align:"left"},"type: string; default: ",(0,n.kt)("inlineCode",{parentName:"td"},'""'),"; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000","*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*","1024 BYTE and so on. You must set one of ",(0,n.kt)("inlineCode",{parentName:"td"},"size")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"percent")," (both items ",(0,n.kt)("strong",{parentName:"td"},"cannot")," be ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," at the same time).")))),(0,n.kt)("h4",{id:"example-for-simulating-disk-fill-using-the-service-mode"},"Example for simulating disk fill using the service mode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"fill","path":"/tmp/test", "fill-by-fallocate":true,"percent":"50"}\'\n')),(0,n.kt)("p",null,"The result is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n')))}u.isMDXComponent=!0}}]);
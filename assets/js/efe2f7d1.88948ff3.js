"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9615],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),d=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,f=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?i.createElement(f,l(l({ref:t},p),{},{components:a})):i.createElement(f,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67692:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Simulate Disk Faults"},o=void 0,d={unversionedId:"simulate-disk-pressure-in-physical-nodes",id:"version-2.1.0/simulate-disk-pressure-in-physical-nodes",isDocsHomePage:!1,title:"Simulate Disk Faults",description:"This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via dd) or disk fill (via dd or fallocate).",source:"@site/versioned_docs/version-2.1.0/simulate-disk-pressure-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-disk-pressure-in-physical-nodes",permalink:"/docs/simulate-disk-pressure-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.0/simulate-disk-pressure-in-physical-nodes.md",tags:[],version:"2.1.0",frontMatter:{title:"Simulate Disk Faults"},sidebar:"version-2.1.0/docs",previous:{title:"Simulate Stress Scenarios",permalink:"/docs/simulate-heavy-stress-in-physical-nodes"},next:{title:"Simulate JVM Application Faults",permalink:"/docs/simulate-jvm-application-chaos-in-physical-nodes"}},p=[{value:"Create experiments using commands",id:"create-experiments-using-commands",children:[{value:"Simulate disk read load",id:"simulate-disk-read-load",children:[{value:"Command of simulating disk read load",id:"command-of-simulating-disk-read-load",children:[],level:4},{value:"Configuration description of simulating disk read load",id:"configuration-description-of-simulating-disk-read-load",children:[],level:4},{value:"Example of simulating disk read load",id:"example-of-simulating-disk-read-load",children:[],level:4}],level:3},{value:"Simulate disk write load",id:"simulate-disk-write-load",children:[{value:"Command of simulating disk write load",id:"command-of-simulating-disk-write-load",children:[],level:4},{value:"Configuration description of simulating disk write load",id:"configuration-description-of-simulating-disk-write-load",children:[],level:4},{value:"Example of simulating disk write load",id:"example-of-simulating-disk-write-load",children:[],level:4}],level:3},{value:"Simulate disk fill",id:"simulate-disk-fill",children:[{value:"Command of simulating disk fill",id:"command-of-simulating-disk-fill",children:[],level:4},{value:"Configuration description of simulating disk fill",id:"configuration-description-of-simulating-disk-fill",children:[],level:4},{value:"Example of simulating disk fill",id:"example-of-simulating-disk-fill",children:[],level:4}],level:3}],level:2},{value:"Create experiments using service mode",id:"create-experiments-using-service-mode",children:[],level:2}],m={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd"),") or disk fill (via ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," or ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/fallocate.1.html"},"fallocate"),")."),(0,r.kt)("h2",{id:"create-experiments-using-commands"},"Create experiments using commands"),(0,r.kt)("p",null,"This section describes how to create disk fault experiments using commands."),(0,r.kt)("p",null,"Before creating an experiment, you can run the following command to check the types of disk faults that are supported by Chaosd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk -h\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"disk attack related command\n\nUsage:\n  chaosd attack disk [command]\n\nAvailable Commands:\n  add-payload add disk payload\n  fill        fill disk\n\nFlags:\n  -h, --help   help for disk\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack disk [command] --help\" for more information about a command.\n")),(0,r.kt)("p",null,"Currently, Chaosd supports creating disk read load experiments, disk write load experiments, and disk fill experiments."),(0,r.kt)("h3",{id:"simulate-disk-read-load"},"Simulate disk read load"),(0,r.kt)("h4",{id:"command-of-simulating-disk-read-load"},"Command of simulating disk read load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -h\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"read payload\n\nUsage:\n  chaosd attack disk add-payload read [flags]\n\nFlags:\n  -h, --help                help for read\n  -p, --path string         'path' specifies the location to read data.If path not provided, payload will read from disk mount on \"/\"\n  -n, --process-num uint8   'process-num' specifies the number of process work on reading , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will read from the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description-of-simulating-disk-read-load"},"Configuration description of simulating disk read load"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration Item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Specifies the file path to read the data. If this parameter is not specified, or the parameter value is set to an empty string, Chaosd reads from the virtual disk files mounted in the "/" directory. Depending on the permissions to read the files, you might be required to run this program using certain permissions.'),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"process-num"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrent running ",(0,r.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: uint8; default: "1"; range: 1-255')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the amount of data to be read. It is the total size of data that <0>dd</0> reads."),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"example-of-simulating-disk-read-load"},"Example of simulating disk read load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n[2021/05/20 13:54:31.323 +08:00] [INFO] [disk.go:128] ["5242880+0 records in\\n5242880+0 records out\\n5242880 bytes (5.2 MB, 5.0 MiB) copied, 4.13252 s, 1.3 MB/s\\n"]\n[2021/05/20 13:54:46.977 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6513 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.002 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6762 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.004 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6777 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.015 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6899 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.018 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6914 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.051 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7254 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.074 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7487 s, 9.7 GB/s\\n"]\nRead file /dev/zero successfully, uid: 4bc9b74a-5fe2-4038-b4f2-09ae95b57694\n')),(0,r.kt)("h3",{id:"simulate-disk-write-load"},"Simulate disk write load"),(0,r.kt)("h4",{id:"command-of-simulating-disk-write-load"},"Command of simulating disk write load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -h\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"write payload\n\nUsage:\n  chaosd attack disk add-payload write [flags]\n\nFlags:\n  -h, --help                help for write\n  -p, --path string         'path' specifies the location to fill data in.If path not provided, payload will write into a temp file, temp file will be deleted after writing\n  -n, --process-num uint8   'process-num' specifies the number of process work on writing , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will write into the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description-of-simulating-disk-write-load"},"Configuration description of simulating disk write load"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration Item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"process-num"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of concurrent running ",(0,r.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," programs to be used."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: uint8; default: "1"; range: 1-255')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the amount of data to be written. It is the total size of data that <0>dd</0> writes."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""; legal form: an integer plus a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000',"*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*",'1024 BYTE and so on. Size cannot be "".')))),(0,r.kt)("h4",{id:"example-of-simulating-disk-write-load"},"Example of simulating disk write load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -s 2G -n 8\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/20 14:28:14.452 +08:00] [INFO] [disk.go:128] ["0+0 records in\\n0+0 records out\\n0 bytes copied, 4.3e-05 s, 0.0 kB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.32841 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3344 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33312 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33466 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33189 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33752 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33295 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.794 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3359 s, 115 MB/s\\n"]\nWrite file /home/andrew/chaosd/bin/example255569279 successfully, uid: e66afd86-6f3e-43a0-b161-09447ed84856\n')),(0,r.kt)("h3",{id:"simulate-disk-fill"},"Simulate disk fill"),(0,r.kt)("h4",{id:"command-of-simulating-disk-fill"},"Command of simulating disk fill"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -h\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fill disk\n\nUsage:\n  chaosd attack disk fill [flags]\n\nFlags:\n  -d, --destroy          destroy file after filled in or allocated\n  -f, --fallocate        fill disk by fallocate instead of dd (default true)\n  -h, --help             help for fill\n  -p, --path string      'path' specifies the location to fill data in.If path not provided, a temp file will be generated and deleted immediately after data filled in or allocated\n  -c, --percent string   'percent' how many percent data of disk will fill in the file path\n  -s, --size string      'size' specifies how many units of data will fill in the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description-of-simulating-disk-fill"},"Configuration description of simulating disk fill"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration Item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"destroy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to true, the fill file is immediately deleted after being filled."),(0,r.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fallocate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If this parameter is set to true, linux is used to call fallocate to quickly apply for disk space and size must be greater than 0. If this parameter is set to false, linux is used to call dd to fill disks at a relatively slow pace."),(0,r.kt)("td",{parentName:"tr",align:"left"},"type: bool; default: true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the fill percentage of disk size."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""; positive integer of the uint type is acceptable but size and percent cannot both be "".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the amount of data to be written."),(0,r.kt)("td",{parentName:"tr",align:"left"},'type: string; default: ""; legal form: an integer plus a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000',"*","1000, M=1024","*","1024, GB=1000","*","1000","*","1000, G=1024","*","1024","*","1024","*",'1024 BYTE and so on. Size and percent cannot both be "".')))),(0,r.kt)("h4",{id:"example-of-simulating-disk-fill"},"Example of simulating disk fill"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -c 50 -d\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[2021/05/20 14:30:02.943 +08:00] [INFO] [disk.go:215]\nFill file /home/andrew/chaosd/bin/example623832242 successfully, uid: 097b4214-8d8e-46ad-8768-c3e0d8cbb326\n")),(0,r.kt)("h2",{id:"create-experiments-using-service-mode"},"Create experiments using service mode"),(0,r.kt)("p",null,"(ongoing update)"))}u.isMDXComponent=!0}}]);
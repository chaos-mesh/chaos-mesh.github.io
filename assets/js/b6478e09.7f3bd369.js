"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2728],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(60795),r=(n(59496),n(49613));const o={title:"Search and Recover Experiments of Chaosd",summary:"Describes how to search and recover the experiments of Chaosd, and provide related examples."},s=void 0,i={unversionedId:"chaosd-search-recover",id:"version-2.6.0/chaosd-search-recover",title:"Search and Recover Experiments of Chaosd",description:"You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples.",source:"@site/versioned_docs/version-2.6.0/chaosd-search-recover.md",sourceDirName:".",slug:"/chaosd-search-recover",permalink:"/docs/chaosd-search-recover",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/chaosd-search-recover.md",tags:[],version:"2.6.0",frontMatter:{title:"Search and Recover Experiments of Chaosd",summary:"Describes how to search and recover the experiments of Chaosd, and provide related examples."},sidebar:"docs",previous:{title:"Simulate Redis Faults",permalink:"/docs/simulate-redis-chaos-on-physical-nodes"},next:{title:"GCP OAuth Authentication",permalink:"/docs/gcp-authentication"}},l={},d=[{value:"Search experiments of Chaosd",id:"search-experiments-of-chaosd",level:2},{value:"Search experiments using the command-line mode",id:"search-experiments-using-the-command-line-mode",level:3},{value:"Configuration description",id:"configuration-description",level:4},{value:"Example",id:"example",level:4},{value:"Search experiments using the service mode",id:"search-experiments-using-the-service-mode",level:3},{value:"Example",id:"example-1",level:4},{value:"Recover experiments of Chaosd",id:"recover-experiments-of-chaosd",level:2},{value:"Recover experiments using the command-line mode",id:"recover-experiments-using-the-command-line-mode",level:3},{value:"Recover experiments using the service mode",id:"recover-experiments-using-the-service-mode",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples."),(0,r.kt)("h2",{id:"search-experiments-of-chaosd"},"Search experiments of Chaosd"),(0,r.kt)("p",null,"This section introduces how to use command-line mode and service mode to find experiments of Chaosd."),(0,r.kt)("h3",{id:"search-experiments-using-the-command-line-mode"},"Search experiments using the command-line mode"),(0,r.kt)("p",null,"By running the following command, you can view the configurations supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chaosd search --help\nSearch chaos attack, you can search attacks through the uid or the state of the attack\n\nUsage:\n  chaosd search UID [flags]\n\nFlags:\n  -A, --all             list all chaos attacks\n      --asc             order by CreateTime, default value is false that means order by CreateTime desc\n  -h, --help            help for search\n  -k, --kind string     attack kind, supported value: network, process, stress, disk, host, jvm\n  -l, --limit uint32    limit the count of attacks\n  -o, --offset uint32   starting to search attacks from offset\n  -s, --status string   attack status, supported value: created, success, error, destroyed, revoked\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description"},"Configuration description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lists all experiments"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"asc")),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sorts the experiments in ascending order of the creation time. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kind")),(0,r.kt)("td",{parentName:"tr",align:"left"},"k"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lists experiments of the specified kind"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string. The supported kinds are as follows: ",(0,r.kt)("inlineCode",{parentName:"td"},"network"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"process"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stress"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"disk"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of listed experiments"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"o"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Searches from the specified offset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lists experiments with the specified status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string. The supported types are as follows: ",(0,r.kt)("inlineCode",{parentName:"td"},"created"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"destroyed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"revoked"))))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosd search --kind network --status destroyed --limit 1\n")),(0,r.kt)("p",null,"By running this command, you can search the experiments of the kind of ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," in the status of ",(0,r.kt)("inlineCode",{parentName:"p"},"destroyed")," (indicating that the experiment has been recovered)."),(0,r.kt)("p",null,"After running the command, only one row of data is output in the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'                  UID                     KIND     ACTION    STATUS            CREATE TIME                                                                                                                  CONFIGURATION\n--------------------------------------- --------- -------- ----------- --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  1f6c1253-522a-43d9-83f8-42607102b3b9   network   delay    destroyed   2021-11-02T15:14:07+08:00   {"schedule":"","duration":"","action":"delay","kind":"network","uid":"1f6c1253-522a-43d9-83f8-42607102b3b9","latency":"2s","jitter":"0ms","correlation":"0","device":"eth0","ip-address":"220.181.38.251","ip-protocol":"all"}\n')),(0,r.kt)("h3",{id:"search-experiments-using-the-service-mode"},"Search experiments using the service mode"),(0,r.kt)("p",null,"Currently, the service mode only supports searching all experiments. You can get the data by visiting the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/experiments/")," path of Chaosd service."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 127.0.0.1:31767/api/experiments/\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[{"id":1,"uid":"ddc5ca81-b677-4595-b691-0ce57bedb156","created_at":"2021-10-18T16:01:18.563542491+08:00","updated_at":"2021-10-18T16:07:27.87111393+08:00","status":"success","kind":"stress","action":"mem","recover_command":"{\\"schedule\\":\\"\\",\\"duration\\":\\"\\",\\"action\\":\\"mem\\",\\"kind\\":\\"stress\\",\\"uid\\":\\"ddc5ca81-b677-4595-b691-0ce57bedb156\\",\\"Load\\":0,\\"Workers\\":0,\\"Size\\":\\"100MB\\",\\"Options\\":null,\\"StressngPid\\":0}","launch_mode":"svr"}]\n')),(0,r.kt)("h2",{id:"recover-experiments-of-chaosd"},"Recover experiments of Chaosd"),(0,r.kt)("p",null,"After creating an experiment, if you want to withdraw the impact caused by the experiment, you can use the recovery feature of experiments."),(0,r.kt)("h3",{id:"recover-experiments-using-the-command-line-mode"},"Recover experiments using the command-line mode"),(0,r.kt)("p",null,"You can recover an experiment by using Chaosd recover UID."),(0,r.kt)("p",null,"The following example shows how to recover an experiment using the command-line mode."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a CPU stress experiment using Chaosd:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,r.kt)("p",{parentName:"li"},"The result is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,r.kt)("p",{parentName:"li"},"Save the experiment UID for later use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you do not need to simulate the CPU stress scenario anymore, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"recover")," command to recover the experiment corresponding to the UID:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd recover 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n")))),(0,r.kt)("h3",{id:"recover-experiments-using-the-service-mode"},"Recover experiments using the service mode"),(0,r.kt)("p",null,"You can recover an experiment by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of Chaosd service."),(0,r.kt)("p",null,"The following example shows how to recover an experiment using the service mode."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," HTTP request to the Chaosd service to create a CPU stress experiment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n    ```\n\n    The result is as follows:\n\n    ```bash\n    {"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n    ```\n\n    Save the experiment UID for later use.\n\n2. When you do not need to simulate the CPU stress scenario anymore, run the following command to recover the experiment corresponding to the UID:\n\n    ```bash\n    curl -X DELETE 172.16.112.130:31767/api/attack/c3c519bf-819a-4a7b-97fb-e3d0814481fa\n    ```\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9872],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Search and Recover Experiments of Chaosd",summary:"Describes how to search and recover the experiments of Chaosd, and provide related examples."},l=void 0,c={unversionedId:"chaosd-search-recover",id:"chaosd-search-recover",isDocsHomePage:!1,title:"Search and Recover Experiments of Chaosd",description:"You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples.",source:"@site/docs/chaosd-search-recover.md",sourceDirName:".",slug:"/chaosd-search-recover",permalink:"/docs/next/chaosd-search-recover",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/chaosd-search-recover.md",tags:[],version:"current",frontMatter:{title:"Search and Recover Experiments of Chaosd",summary:"Describes how to search and recover the experiments of Chaosd, and provide related examples."},sidebar:"docs",previous:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-physical-nodes"},next:{title:"GCP OAuth Authentication",permalink:"/docs/next/gcp-authentication"}},d=[{value:"Search experiments of Chaosd",id:"search-experiments-of-chaosd",children:[{value:"Search experiments using the command-line mode",id:"search-experiments-using-the-command-line-mode",children:[{value:"Configuration description",id:"configuration-description",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Search experiments using the service mode",id:"search-experiments-using-the-service-mode",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3}],level:2},{value:"Recover experiments of Chaosd",id:"recover-experiments-of-chaosd",children:[{value:"Recover experiments using the command-line mode",id:"recover-experiments-using-the-command-line-mode",children:[],level:3},{value:"Recover experiments using the service mode",id:"recover-experiments-using-the-service-mode",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can search experiments by conditions and recover the experiments corresponding to specified UIDs using Chaosd. This document describes how to search and recover experiments of Chaosd, and provides releated examples."),(0,o.kt)("h2",{id:"search-experiments-of-chaosd"},"Search experiments of Chaosd"),(0,o.kt)("p",null,"This section introduces how to use command-line mode and service mode to find experiments of Chaosd."),(0,o.kt)("h3",{id:"search-experiments-using-the-command-line-mode"},"Search experiments using the command-line mode"),(0,o.kt)("p",null,"By running the following command, you can view the configurations supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ chaosd search --help\nSearch chaos attack, you can search attacks through the uid or the state of the attack\n\nUsage:\n  chaosd search UID [flags]\n\nFlags:\n  -A, --all             list all chaos attacks\n      --asc             order by CreateTime, default value is false that means order by CreateTime desc\n  -h, --help            help for search\n  -k, --kind string     attack kind, supported value: network, process, stress, disk, host, jvm\n  -l, --limit uint32    limit the count of attacks\n  -o, --offset uint32   starting to search attacks from offset\n  -s, --status string   attack status, supported value: created, success, error, destroyed, revoked\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,o.kt)("h4",{id:"configuration-description"},"Configuration description"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"all")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lists all experiments"),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"asc")),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sorts the experiments in ascending order of the creation time. The default value is ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"kind")),(0,o.kt)("td",{parentName:"tr",align:"left"},"k"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lists experiments of the specified kind"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string. The supported kinds are as follows: ",(0,o.kt)("inlineCode",{parentName:"td"},"network"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"process"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"stress"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"disk"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"jvm"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"limit")),(0,o.kt)("td",{parentName:"tr",align:"left"},"l"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of listed experiments"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"offset")),(0,o.kt)("td",{parentName:"tr",align:"left"},"o"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Searches from the specified offset"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"status")),(0,o.kt)("td",{parentName:"tr",align:"left"},"s"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lists experiments with the specified status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string. The supported types are as follows: ",(0,o.kt)("inlineCode",{parentName:"td"},"created"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"destroyed"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"revoked"))))),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosd search --kind network --status destroyed --limit 1\n")),(0,o.kt)("p",null,"By running this command, you can search the experiments of the kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," in the status of ",(0,o.kt)("inlineCode",{parentName:"p"},"destroyed")," (indicating that the experiment has been recovered)."),(0,o.kt)("p",null,"After running the command, only one row of data is output in the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'                  UID                     KIND     ACTION    STATUS            CREATE TIME                                                                                                                  CONFIGURATION\n--------------------------------------- --------- -------- ----------- --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  1f6c1253-522a-43d9-83f8-42607102b3b9   network   delay    destroyed   2021-11-02T15:14:07+08:00   {"schedule":"","duration":"","action":"delay","kind":"network","uid":"1f6c1253-522a-43d9-83f8-42607102b3b9","latency":"2s","jitter":"0ms","correlation":"0","device":"eth0","ip-address":"220.181.38.251","ip-protocol":"all"}\n')),(0,o.kt)("h3",{id:"search-experiments-using-the-service-mode"},"Search experiments using the service mode"),(0,o.kt)("p",null,"Currently, the service mode only supports searching all experiments. You can get the data by visiting the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/experiments/")," path of Chaosd service."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 127.0.0.1:31767/api/experiments/\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[{"id":1,"uid":"ddc5ca81-b677-4595-b691-0ce57bedb156","created_at":"2021-10-18T16:01:18.563542491+08:00","updated_at":"2021-10-18T16:07:27.87111393+08:00","status":"success","kind":"stress","action":"mem","recover_command":"{\\"schedule\\":\\"\\",\\"duration\\":\\"\\",\\"action\\":\\"mem\\",\\"kind\\":\\"stress\\",\\"uid\\":\\"ddc5ca81-b677-4595-b691-0ce57bedb156\\",\\"Load\\":0,\\"Workers\\":0,\\"Size\\":\\"100MB\\",\\"Options\\":null,\\"StressngPid\\":0}","launch_mode":"svr"}]\n')),(0,o.kt)("h2",{id:"recover-experiments-of-chaosd"},"Recover experiments of Chaosd"),(0,o.kt)("p",null,"After creating an experiment, if you want to withdraw the impact caused by the experiment, you can use the recovery feature of experiments."),(0,o.kt)("h3",{id:"recover-experiments-using-the-command-line-mode"},"Recover experiments using the command-line mode"),(0,o.kt)("p",null,"You can recover an experiment by using Chaosd recover UID."),(0,o.kt)("p",null,"The following example shows how to recover an experiment using the command-line mode."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a CPU stress experiment using Chaosd:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,o.kt)("p",{parentName:"li"},"The result is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,o.kt)("p",{parentName:"li"},"Save the experiment UID for later use.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you do not need to simulate the CPU stress scenario anymore, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"recover")," command to recover the experiment corresponding to the UID:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd recover 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n")))),(0,o.kt)("h3",{id:"recover-experiments-using-the-service-mode"},"Recover experiments using the service mode"),(0,o.kt)("p",null,"You can recover an experiment by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of Chaosd service."),(0,o.kt)("p",null,"The following example shows how to recover an experiment using the service mode."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send a ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," HTTP request to the Chaosd service to create a CPU stress experiment:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n    ```\n\n    The result is as follows:\n\n    ```bash\n    {"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n    ```\n\n    Save the experiment UID for later use.\n\n2. When you do not need to simulate the CPU stress scenario anymore, run the following command to recover the experiment corresponding to the UID:\n\n    ```bash\n    curl -X DELETE 172.16.112.130:31767/api/attack/c3c519bf-819a-4a7b-97fb-e3d0814481fa\n    ```\n')))}m.isMDXComponent=!0}}]);
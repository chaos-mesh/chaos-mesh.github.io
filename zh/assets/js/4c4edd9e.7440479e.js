"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[33057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,u=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c",summary:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c\u7684\u64cd\u4f5c\u65b9\u6cd5\uff0c\u5e76\u63d0\u4f9b\u4e86\u793a\u4f8b\u3002"},s=void 0,o={unversionedId:"chaosd-search-recover",id:"version-2.4.3/chaosd-search-recover",title:"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c",description:"Chaosd \u652f\u6301\u6309\u7167\u6761\u4ef6\u641c\u7d22\u5b9e\u9a8c\uff0c\u4ee5\u53ca\u6062\u590d\u6307\u5b9a\u7684 UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c\u7684\u64cd\u4f5c\u65b9\u6cd5\uff0c\u5e76\u63d0\u4f9b\u4e86\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/chaosd-search-recover.md",sourceDirName:".",slug:"/chaosd-search-recover",permalink:"/zh/docs/2.4.3/chaosd-search-recover",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/chaosd-search-recover.md",tags:[],version:"2.4.3",frontMatter:{title:"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c",summary:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c\u7684\u64cd\u4f5c\u65b9\u6cd5\uff0c\u5e76\u63d0\u4f9b\u4e86\u793a\u4f8b\u3002"},sidebar:"docs",previous:{title:"\u6a21\u62df Redis \u6545\u969c",permalink:"/zh/docs/2.4.3/simulate-redis-chaos-on-physical-nodes"},next:{title:"GCP \u8eab\u4efd\u9a8c\u8bc1\u63a5\u5165",permalink:"/zh/docs/2.4.3/gcp-authentication"}},i={},d=[{value:"\u67e5\u627e Chaosd \u5b9e\u9a8c",id:"\u67e5\u627e-chaosd-\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u6062\u590d Chaosd \u5b9e\u9a8c",id:"\u6062\u590d-chaosd-\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c",level:3},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaosd \u652f\u6301\u6309\u7167\u6761\u4ef6\u641c\u7d22\u5b9e\u9a8c\uff0c\u4ee5\u53ca\u6062\u590d\u6307\u5b9a\u7684 UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c\u7684\u64cd\u4f5c\u65b9\u6cd5\uff0c\u5e76\u63d0\u4f9b\u4e86\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u67e5\u627e-chaosd-\u5b9e\u9a8c"},"\u67e5\u627e Chaosd \u5b9e\u9a8c"),(0,r.kt)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u548c\u670d\u52a1\u6a21\u5f0f\u67e5\u627e Chaosd \u5b9e\u9a8c\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u67e5\u770b\u641c\u7d22\u547d\u4ee4 (",(0,r.kt)("inlineCode",{parentName:"p"},"search"),") \u6240\u652f\u6301\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chaosd search --help\nSearch chaos attack, you can search attacks through the uid or the state of the attack\n\nUsage:\n  chaosd search UID [flags]\n\nFlags:\n  -A, --all             list all chaos attacks\n      --asc             order by CreateTime, default value is false that means order by CreateTime desc\n  -h, --help            help for search\n  -k, --kind string     attack kind, supported value: network, process, stress, disk, host, jvm\n  -l, --limit uint32    limit the count of attacks\n  -o, --offset uint32   starting to search attacks from offset\n  -s, --status string   attack status, supported value: created, success, error, destroyed, revoked\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5217\u51fa\u6240\u6709\u7684\u5b9e\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"asc")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6309\u7167\u521b\u5efa\u65f6\u95f4\u7684\u5347\u5e8f\u5bf9\u5b9e\u9a8c\u8fdb\u884c\u6392\u5217\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kind")),(0,r.kt)("td",{parentName:"tr",align:"left"},"k"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5217\u51fa\u6307\u5b9a\u7c7b\u578b\u7684\u5b9e\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u652f\u6301\u7684\u7c7b\u578b\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"network"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"process"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"stress"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"disk"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"host"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"jvm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5217\u51fa\u5b9e\u9a8c\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"o"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u6307\u5b9a\u7684\u504f\u79fb\u91cf\u5f00\u59cb\u641c\u7d22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5217\u51fa\u6307\u5b9a\u72b6\u6001\u7684\u5b9e\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string \u7c7b\u578b\uff0c\u652f\u6301\u7684\u72b6\u6001\u7c7b\u578b\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"created"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"success"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"error"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"destroyed"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"revoked"))))),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosd search --kind network --status destroyed --limit 1\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u8be5\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u67e5\u627e\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," \u4e14\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"destroyed"),"\uff08\u8868\u793a\u5b9e\u9a8c\u5df2\u6062\u590d\uff09\u7684\u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\u540e\uff0c\u7ed3\u679c\u4e2d\u4ec5\u4f1a\u8f93\u51fa\u4e00\u884c\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'                  UID                     KIND     ACTION    STATUS            CREATE TIME                                                                                                                  CONFIGURATION\n--------------------------------------- --------- -------- ----------- --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  1f6c1253-522a-43d9-83f8-42607102b3b9   network   delay    destroyed   2021-11-02T15:14:07+08:00   {"schedule":"","duration":"","action":"delay","kind":"network","uid":"1f6c1253-522a-43d9-83f8-42607102b3b9","latency":"2s","jitter":"0ms","correlation":"0","device":"eth0","ip-address":"220.181.38.251","ip-protocol":"all"}\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u67e5\u627e\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u670d\u52a1\u6a21\u5f0f\u53ea\u652f\u6301\u67e5\u627e\u51fa\u6240\u6709\u7684\u5b9e\u9a8c\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee Chaosd \u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/experiments/")," \u8def\u5f84\u6765\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 127.0.0.1:31767/api/experiments/\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[{"id":1,"uid":"ddc5ca81-b677-4595-b691-0ce57bedb156","created_at":"2021-10-18T16:01:18.563542491+08:00","updated_at":"2021-10-18T16:07:27.87111393+08:00","status":"success","kind":"stress","action":"mem","recover_command":"{\\"schedule\\":\\"\\",\\"duration\\":\\"\\",\\"action\\":\\"mem\\",\\"kind\\":\\"stress\\",\\"uid\\":\\"ddc5ca81-b677-4595-b691-0ce57bedb156\\",\\"Load\\":0,\\"Workers\\":0,\\"Size\\":\\"100MB\\",\\"Options\\":null,\\"StressngPid\\":0}","launch_mode":"svr"}]\n')),(0,r.kt)("h2",{id:"\u6062\u590d-chaosd-\u5b9e\u9a8c"},"\u6062\u590d Chaosd \u5b9e\u9a8c"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u5b8c\u5b9e\u9a8c\u540e\uff0c\u5982\u679c\u60f3\u64a4\u9500\u5b9e\u9a8c\u9020\u6210\u7684\u5f71\u54cd\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9e\u9a8c\u7684\u6062\u590d\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Chaosd recover UID \u7684\u65b9\u5f0f\u6062\u590d\u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u901a\u8fc7\u8be5\u65b9\u5f0f\u6062\u590d\u5b9e\u9a8c\u7684\u793a\u4f8b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Chaosd \u521b\u5efa\u4e00\u4e2a CPU \u538b\u529b\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,r.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\u4fdd\u5b58\u8f93\u51fa\u4e2d\u7684\u5b9e\u9a8c UID \u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u4e0b\u4e00\u6b65\u64cd\u4f5c\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e0d\u9700\u8981\u6a21\u62df CPU \u538b\u529b\u573a\u666f\u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"recover")," \u547d\u4ee4\u6765\u6062\u590d UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd recover 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n")))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6062\u590d\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411 Chaosd \u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," \u8def\u5f84\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP \u8bf7\u6c42\u7684\u65b9\u5f0f\u6765\u6062\u590d\u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5728\u670d\u52a1\u6a21\u5f0f\u4e0b\u901a\u8fc7\u8be5\u65b9\u5f0f\u6062\u590d\u5b9e\u9a8c\u7684\u793a\u4f8b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5411 Chaosd \u670d\u52a1\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," HTTP \u8bf7\u6c42\uff0c\u521b\u5efa\u4e00\u4e2a CPU \u538b\u529b\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n')),(0,r.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\u4fdd\u5b58\u8f93\u51fa\u4e2d\u7684\u5b9e\u9a8c UID \u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u4e0b\u4e00\u6b65\u64cd\u4f5c\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e0d\u9700\u8981\u6a21\u62df CPU \u538b\u529b\u573a\u666f\u65f6\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 172.16.112.130:31767/api/attack/c3c519bf-819a-4a7b-97fb-e3d0814481fa\n")))))}c.isMDXComponent=!0}}]);
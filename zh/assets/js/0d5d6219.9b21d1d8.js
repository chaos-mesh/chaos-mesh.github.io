"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[40197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=l,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(87462),l=(t(67294),t(3905));const r={title:"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219"},o=void 0,i={unversionedId:"define-scheduling-rules",id:"version-2.1.7/define-scheduling-rules",title:"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219",description:"Schedule \u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.7/define-scheduling-rules.md",sourceDirName:".",slug:"/define-scheduling-rules",permalink:"/zh/docs/2.1.7/define-scheduling-rules",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.7/define-scheduling-rules.md",tags:[],version:"2.1.7",frontMatter:{title:"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219"},sidebar:"version-2.1.7/docs",previous:{title:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",permalink:"/zh/docs/2.1.7/define-chaos-experiment-scope"},next:{title:"\u8fd0\u884c\u5b9e\u9a8c",permalink:"/zh/docs/2.1.7/run-a-chaos-experiment"}},p={},d=[{value:"Schedule \u7b80\u4ecb",id:"schedule-\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e <code>kubectl</code> \u521b\u5efa Schedule \u8c03\u5ea6\u89c4\u5219",id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa-schedule-\u8c03\u5ea6\u89c4\u5219",level:2},{value:"<code>schedule</code> \u5b57\u6bb5",id:"schedule-\u5b57\u6bb5",level:3},{value:"<code>historyLimit</code> \u5b57\u6bb5",id:"historylimit-\u5b57\u6bb5",level:3},{value:"<code>concurrencyPolicy</code> \u5b57\u6bb5",id:"concurrencypolicy-\u5b57\u6bb5",level:3},{value:"<code>startingDeadlineSeconds</code> \u5b57\u6bb5",id:"startingdeadlineseconds-\u5b57\u6bb5",level:3},{value:"\u5b9a\u4e49\u5b9e\u9a8c",id:"\u5b9a\u4e49\u5b9e\u9a8c",level:3},{value:"\u4f7f\u7528 Dashboard \u521b\u5efa Schedule \u8c03\u5ea6\u89c4\u5219",id:"\u4f7f\u7528-dashboard-\u521b\u5efa-schedule-\u8c03\u5ea6\u89c4\u5219",level:2},{value:"\u6682\u505c\u5b9a\u65f6\u4efb\u52a1",id:"\u6682\u505c\u5b9a\u65f6\u4efb\u52a1",level:3}],c={toc:d};function s(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"schedule-\u7b80\u4ecb"},"Schedule \u7b80\u4ecb"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa\u5b9a\u65f6\u4efb\u52a1\uff0c\u4ece\u800c\u5728\u56fa\u5b9a\u7684\u65f6\u95f4\uff08\u6216\u6839\u636e\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff09\u81ea\u52a8\u65b0\u5efa\u6df7\u6c8c\u5b9e\u9a8c\u3002"),(0,l.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0cChaos Mesh \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\u6765\u63cf\u8ff0\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\u540d\u4e0d\u5e94\u8d85\u8fc7 57 \u5b57\u7b26\uff0c\u56e0\u4e3a\u5b83\u521b\u5efa\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5c06\u5728\u540d\u5b57\u540e\u989d\u5916\u6dfb\u52a0 6 \u4f4d\u968f\u673a\u5b57\u7b26\u3002\u4e00\u4e2a\u5305\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Workflow")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\u540d\u4e0d\u5e94\u8d85\u8fc7 51 \u5b57\u7b26\uff0c\u56e0\u4e3a Workflow \u4e5f\u5c06\u5728\u521b\u5efa\u7684\u540d\u5b57\u540e\u989d\u5916\u6dfb\u52a0 6 \u4f4d\u968f\u673a\u5b57\u7b26\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa-schedule-\u8c03\u5ea6\u89c4\u5219"},"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e ",(0,l.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u521b\u5efa Schedule \u8c03\u5ea6\u89c4\u5219"),(0,l.kt)("p",null,"\u4ee5\u5728\u6bcf\u4e2a\u5c0f\u65f6\u7684\u7b2c 5 \u5206\u949f\u6301\u7eed 12 \u79d2\u65bd\u52a0 100 \u6beb\u79d2\u5ef6\u8fdf\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n      correlation: '100'\n      jitter: '0ms'\n    duration: '12s'\n")),(0,l.kt)("p",null,"\u5c06\u6b64 YAML \u6587\u4ef6\u4fdd\u5b58\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"schedule-networkchaos.yaml"),"\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ./schedule-networkchaos.yaml")," \u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4f9d\u636e\u6b64\u914d\u7f6e\uff0cChaos Mesh \u5c06\u4f1a\u5728\u6bcf\u4e2a\u5c0f\u65f6\u7684\u7b2c\u4e94\u5206\u949f\uff08\u6bd4\u5982 0:05, 1:05...\uff09\u521b\u5efa\u4ee5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: schedule-delay-example-xxxxx\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n  duration: '12s'\n")),(0,l.kt)("p",null,"\u5728\u540e\u6587\u4e2d\u4f1a\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u4e2d\u7684\u5b57\u6bb5\u8fdb\u884c\u63cf\u8ff0\uff0c\u5927\u591a\u4e0e Kubernetes ",(0,l.kt)("inlineCode",{parentName:"p"},"CronJob")," \u7684\u5b57\u6bb5\u7b49\u4ef7\u3002\u53ef\u4ee5\u53c2\u8003 Kubernetes CronJob \u7684",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/"},"\u6587\u6863"),"\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"schedule")," \u5b57\u6bb5\u5bf9\u5e94\u7684\u65f6\u533a\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," \u7684\u65f6\u533a\u4e3a\u51c6\u3002")),(0,l.kt)("h3",{id:"schedule-\u5b57\u6bb5"},(0,l.kt)("inlineCode",{parentName:"h3"},"schedule")," \u5b57\u6bb5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"schedule")," \u5b57\u6bb5\u7528\u4e8e\u6307\u5b9a\u5b9e\u9a8c\u53d1\u751f\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u5206\u949f (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u5c0f\u65f6 (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u6708\u7684\u67d0\u5929 (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u6708\u4efd (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u5468\u7684\u67d0\u5929 (0 - 6) \uff08\u5468\u65e5\u5230\u5468\u4e00\uff1b\u5728\u67d0\u4e9b\u7cfb\u7edf\u4e0a\uff0c7 \u4e5f\u662f\u661f\u671f\u65e5\uff09\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * *\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8f93\u5165"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b49\u6548\u66ff\u4ee3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@yearly (or @annually)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5e74 1 \u6708 1 \u65e5\u7684\u5348\u591c\u8fd0\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 1 1 ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@monthly"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6708\u7b2c\u4e00\u5929\u7684\u5348\u591c\u8fd0\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 1 ","*"," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@weekly"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5468\u7684\u5468\u65e5\u5348\u591c\u8fd0\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@daily (or @midnight)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5929\u5348\u591c\u8fd0\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@hourly"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u65f6\u7684\u5f00\u59cb\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"0 ","*"," ","*"," ","*"," ","*")))),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u8981\u751f\u6210\u65f6\u95f4\u8868\u8fbe\u5f0f\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://crontab.guru"},"crontab.guru")," \u7b49 Web \u5de5\u5177\u3002"),(0,l.kt)("h3",{id:"historylimit-\u5b57\u6bb5"},(0,l.kt)("inlineCode",{parentName:"h3"},"historyLimit")," \u5b57\u6bb5"),(0,l.kt)("p",null,"\u4e00\u9879\u5b9e\u9a8c\u5728\u7ed3\u675f\u4e4b\u540e\u5e76\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u8fd9\u662f\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u68c0\u7d22\u548c\u89c2\u5bdf\u5b9e\u9a8c\u7ed3\u679c\uff0c\u5728\u51fa\u9519\u65f6\u80fd\u591f\u6392\u67e5\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"historyLimit")," \u4e2d\u8bbe\u5b9a\u7684\u6570\u503c\u4e3a\u4fdd\u7559\u7684\u4efb\u52a1\u6570\uff0c\u8fd9\u4e00\u6570\u91cf\u5305\u62ec\u4e86\u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\u3002\u5f53\u7136\uff0cChaos Mesh \u5e76\u4e0d\u4f1a\u5220\u9664\u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"\u5f53\u5b58\u5728\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"historyLimit")," \u6570\u91cf\u7684\u4efb\u52a1\u65f6\uff0cChaos Mesh \u5c06\u4f1a\u6309\u7167\u987a\u5e8f\u4f9d\u6b21\u5220\u9664\u6700\u65e9\u521b\u5efa\u7684\u4efb\u52a1\u3002\u5982\u679c\u90a3\u4e9b\u4efb\u52a1\u8fd8\u5728\u7ee7\u7eed\uff0c\u5219\u4f1a\u8df3\u8fc7\u3002"),(0,l.kt)("h3",{id:"concurrencypolicy-\u5b57\u6bb5"},(0,l.kt)("inlineCode",{parentName:"h3"},"concurrencyPolicy")," \u5b57\u6bb5"),(0,l.kt)("p",null,"\u8be5\u5b57\u6bb5\u6240\u6709\u53ef\u7528\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'"Forbid"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"Allow"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'""'),"\u3002"),(0,l.kt)("p",null,"\u8be5\u5b57\u6bb5\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5141\u8bb8\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\u521b\u5efa\u591a\u4e2a\u540c\u65f6\u8fd0\u884c\u7684\u5b9e\u9a8c\u3002\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"schedule: * * * * *")," \u914d\u7f6e\u4e0b\uff0c\u6bcf\u5206\u949f\u521b\u5efa\u4e00\u4e2a\u5b9e\u9a8c\u5bf9\u8c61\uff0c\u800c\u5982\u679c\u5b9e\u9a8c\u5bf9\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"duration")," \u914d\u7f6e\u4e3a 70 \u79d2\uff0c\u5219\u4f1a\u51fa\u73b0\u591a\u4e2a\u5b9e\u9a8c\u540c\u65f6\u53d1\u751f\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u5b57\u6bb5\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Forbid"),"\uff0c\u5373\u4e0d\u5141\u8bb8\u591a\u4e2a\u5b9e\u9a8c\u540c\u65f6\u53d1\u751f\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u5b57\u6bb5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Allow")," \u65f6\uff0c\u5c06\u5141\u8bb8\u591a\u4e2a\u5b9e\u9a8c\u540c\u65f6\u53d1\u751f\u3002"),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0b\u914d\u7f6e\u7684\u57fa\u7840\u4e0a\uff0c\u4ecd\u4ee5\u5ef6\u8fdf\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,l.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Allow"'),"\uff0c\u5219\u8868\u73b0\u4e3a\u5728\u6bcf\u5206\u949f\u4e2d\u5b58\u5728 10 \u79d2\u6709 20 \u6beb\u79d2\u7684\u5ef6\u8fdf\uff0c\u800c\u5176\u4ed6 50 \u79d2\u5c06\u5b58\u5728 10 \u6beb\u79d2\u7684\u5ef6\u8fdf\uff1b\u5982\u679c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Forbid"'),"\uff0c\u5219\u8868\u73b0\u4e3a\u4e00\u76f4\u6709 10 \u6beb\u79d2\u7684\u5ef6\u8fdf\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5e76\u975e\u6240\u6709\u5b9e\u9a8c\u7c7b\u578b\u5747\u652f\u6301\u591a\u4e2a\u5b9e\u9a8c\u5bf9\u540c\u4e00 Pod \u751f\u6548\u3002\u8be6\u89c1\u5404\u5b9e\u9a8c\u7c7b\u578b\u7684\u6587\u6863\u3002")),(0,l.kt)("h3",{id:"startingdeadlineseconds-\u5b57\u6bb5"},(0,l.kt)("inlineCode",{parentName:"h3"},"startingDeadlineSeconds")," \u5b57\u6bb5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u9ed8\u8ba4\u503c\u4e3a 0\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u4e3a 0 \u65f6\uff0cChaos Mesh \u5c06\u68c0\u67e5\u4ece\u4e0a\u4e00\u6b21\u8c03\u5ea6\u53d1\u751f\u5230\u5f53\u524d\u65f6\u95f4\u4e3a\u6b62\uff0c\u671f\u95f4\u662f\u5426\u6709\u9519\u8fc7\u7684\u5b9e\u9a8c\uff08\u8fd9\u79cd\u60c5\u51b5\u5728\u7528\u6237\u5173\u95ed Chaos Mesh\u3001\u957f\u671f\u6682\u505c Schedule\u3001\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Forbid")," \u65f6\u53ef\u80fd\u53d1\u751f\uff09\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u7684\u503c\u5927\u4e8e 0 \u65f6\uff0cChaos Mesh \u5c06\u68c0\u67e5\u4ece\u5f53\u524d\u65f6\u95f4\u5f00\u59cb\uff0c\u8fc7\u53bb\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u79d2\u5185\u662f\u5426\u6709\u9519\u8fc7\u7684\u5b9e\u9a8c\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u7684\u503c\u8fc7\u5c0f\u53ef\u80fd\u4f1a\u9519\u8fc7\u4e00\u4e9b\u5b9e\u9a8c\uff0c\u4ee5\u4e0b\u7ed9\u51fa\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    startingDeadlineSeconds: 5\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,l.kt)("p",null,"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Forbid"),"\uff0c\u5728\u5206\u949f\u7684\u5f00\u59cb\u4f1a\u56e0\u4e3a\u8fd9\u4e00\u9650\u5236\u800c\u7981\u6b62\u521b\u5efa\u65b0\u4efb\u52a1\u3002\u800c\u5728\u8be5\u5206\u949f\u7684\u7b2c\u5341\u79d2\uff0c\u4e0a\u4e00\u6b21\u521b\u5efa\u7684 Chaos \u8fd0\u884c\u7ed3\u675f\uff0c\u4f46\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \u7684\u9650\u5236\u4e0d\u4f1a\u68c0\u7d22\u5230\u56e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u800c\u9519\u8fc7\u7684\u4e8b\u4ef6\uff0c\u6240\u4ee5\u4e0d\u4f1a\u521b\u5efa Chaos\u3002\u5728\u4e0b\u4e00\u5206\u949f\u5f00\u59cb\u65f6\u624d\u4f1a\u521b\u5efa\u65b0\u7684 Chaos\u3002"),(0,l.kt)("p",null,"\u800c\u5982\u679c\u4e0d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," \uff08\u6216\u8bbe\u7f6e\u4e3a 0\uff09\uff0c\u5219\u8868\u73b0\u4e3a\u4e00\u76f4\u6709 10 \u6beb\u79d2\u7684\u5ef6\u8fdf\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u8fd0\u884c\u7740\u7684\u4efb\u52a1\u7ed3\u675f\u4e4b\u540e\uff0cChaos Mesh \u53d1\u73b0\u4e00\u6bb5\u65f6\u95f4\u524d\u9519\u8fc7\u4e86\u4e00\u4e2a\u4efb\u52a1\uff08\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," \u7684\u963b\u6b62\uff09\uff0c\u4e8e\u662f\u7acb\u5373\u521b\u5efa\u4e86\u65b0\u7684\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u5b57\u6bb5\u5728 Kubernetes CronJob \u7684",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations"},"\u6587\u6863"),"\u4e2d\u62e5\u6709\u5176\u4ed6\u4f8b\u5b50\u4e0e\u7c7b\u4f3c\u89e3\u91ca\u3002"),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u5b9e\u9a8c"},"\u5b9a\u4e49\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u4e2d\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u5b57\u6bb5\u6765\u5b9a\u4e49\u5b9e\u9a8c\u7684\u5177\u4f53\u5185\u5bb9\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"*Chaos")," \u5b57\u6bb5\u3002\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u7528\u4e8e\u6307\u5b9a\u5b9e\u9a8c\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"*Chaos")," \u5b57\u6bb5\u7528\u4e8e\u63cf\u8ff0\u5b9e\u9a8c\u5185\u5bb9\u3002\u901a\u5e38\u6765\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u7684\u5185\u5bb9\u4e3a\u5927\u9a7c\u5cf0\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkChaos"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"PodChaos"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"IOChaos"),"\uff1b\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"*Chaos")," \u7684\u952e\u4e3a\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5c0f\u9a7c\u5cf0\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"networkChaos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"podChaos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ioChaos"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"*Chaos")," \u7684\u952e\u4e3a\u5bf9\u5e94\u5b9e\u9a8c\u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"spec"),"\uff0c\u8be6\u89c1\u4e2a\u5b9e\u9a8c\u7c7b\u578b\u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u521b\u5efa-schedule-\u8c03\u5ea6\u89c4\u5219"},"\u4f7f\u7528 Dashboard \u521b\u5efa Schedule \u8c03\u5ea6\u89c4\u5219"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u8ba1\u5212\u9875\u9762\u4e2d\u7684\u201c\u65b0\u7684\u8ba1\u5212\u201d\u6309\u94ae\u521b\u5efa\u8ba1\u5212\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa\u8ba1\u5212",src:t(49999).Z,width:"584",height:"325"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u5e76\u586b\u5199\u5b9e\u9a8c\u7684\u5177\u4f53\u5185\u5bb9"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u9009\u62e9\u5e76\u586b\u5199\u5185\u5bb9",src:t(55427).Z,width:"1487",height:"310"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u8ba1\u5212\u5468\u671f\u3001\u5e76\u53d1\u7b56\u7565\u7b49\u4fe1\u606f"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u586b\u5199\u8ba1\u5212\u89c4\u5219",src:t(67592).Z,width:"1484",height:"872"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c"))),(0,l.kt)("h3",{id:"\u6682\u505c\u5b9a\u65f6\u4efb\u52a1"},"\u6682\u505c\u5b9a\u65f6\u4efb\u52a1"),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"CronJob")," \u4e0d\u540c\uff0c\u6682\u505c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u4e0d\u4ec5\u4ec5\u4f1a\u963b\u6b62\u5b83\u521b\u5efa\u65b0\u7684\u5b9e\u9a8c\uff0c\u4e5f\u4f1a\u6682\u505c\u5df2\u521b\u5efa\u7684\u5b9e\u9a8c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6682\u65f6\u4e0d\u60f3\u518d\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1\u6765\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u9700\u8981\u4e3a\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u5bf9\u8c61\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"experiment.chaos-mesh.org/pause=true")," \u6ce8\u89e3\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u6dfb\u52a0\u6ce8\u89e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause=true\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," \u4e3a\u547d\u540d\u7a7a\u95f4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$NAME")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u7684\u540d\u5b57\u3002\u8fd4\u56de\u6210\u529f\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u89e3\u9664\u6682\u505c\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u53bb\u9664\u8be5\u6ce8\u89e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause-\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," \u4e3a\u547d\u540d\u7a7a\u95f4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$NAME")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," \u7684\u540d\u5b57\u3002\u6210\u529f\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")))}s.isMDXComponent=!0},49999:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-new-schedule-ba2c607c15a491209d3a09c2a1605995.png"},55427:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/define-schedule-inner-resource-e4dc4f94d0ae0ff59fb558ab2651054f.png"},67592:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/define-schedule-spec-b63567f39cc2f1d5154bb0bb609c132f.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9299],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94963:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],r={title:"Define Scheduling Rules"},s=void 0,d={unversionedId:"define-scheduling-rules",id:"version-2.1.5/define-scheduling-rules",isDocsHomePage:!1,title:"Define Scheduling Rules",description:"Schedule overview",source:"@site/versioned_docs/version-2.1.5/define-scheduling-rules.md",sourceDirName:".",slug:"/define-scheduling-rules",permalink:"/docs/2.1.5/define-scheduling-rules",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.5/define-scheduling-rules.md",tags:[],version:"2.1.5",frontMatter:{title:"Define Scheduling Rules"},sidebar:"version-2.1.5/docs",previous:{title:"Define the Scope of Chaos Experiments",permalink:"/docs/2.1.5/define-chaos-experiment-scope"},next:{title:"Run a Chaos Experiment",permalink:"/docs/2.1.5/run-a-chaos-experiment"}},c=[{value:"Schedule overview",id:"schedule-overview",children:[],level:2},{value:"Create scheduling rules with <code>kubectl</code> using YAML files",id:"create-scheduling-rules-with-kubectl-using-yaml-files",children:[{value:"<code>schedule</code> field",id:"schedule-field",children:[],level:3},{value:"<code>historyLimit</code> field",id:"historylimit-field",children:[],level:3},{value:"<code>ConciliationPolicy</code> field",id:"conciliationpolicy-field",children:[],level:3},{value:"<code>startingDeadlineSeconds</code> field",id:"startingdeadlineseconds-field",children:[],level:3},{value:"Define experiments",id:"define-experiments",children:[],level:3}],level:2},{value:"Create Scheduling rules using Chaos Dashboard",id:"create-scheduling-rules-using-chaos-dashboard",children:[{value:"Pause the scheduled task",id:"pause-the-scheduled-task",children:[],level:3}],level:2}],p={toc:c};function m(e){var n=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"schedule-overview"},"Schedule overview"),(0,o.kt)("p",null,"This document describes how to use Chaos Mesh to create a scheduled task, which can automatically create Chaos experiments at a fixed time (or at a fixed time interval)."),(0,o.kt)("p",null,"In Kubernetes, Chaos Mesh uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," to describe scheduled tasks."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The name of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," object should not exceed 57 characters because the created Chaos experiment will add 6 additional random characters to the end of the name.The name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," object with ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," should not exceed 51 characters because Workflow will add 6 additional random characters to the end of the name."))),(0,o.kt)("h2",{id:"create-scheduling-rules-with-kubectl-using-yaml-files"},"Create scheduling rules with ",(0,o.kt)("inlineCode",{parentName:"h2"},"kubectl")," using YAML files"),(0,o.kt)("p",null,"For example, to apply a 100 millisecond delay for 12 seconds in the fifth minute of each hour, configure the YAML file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n      correlation: '100'\n      jitter: '0ms'\n    duration: '12s'\n")),(0,o.kt)("p",null,"Save this YAML file as ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-networkchaos.yaml"),", and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apple-f ./schedule-networkchaos.yaml"),"."),(0,o.kt)("p",null,"Based on this configuration, Chaos Mesh will create the following ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," object in the fifth minute of each hour (such as 0:05, 1:05...):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: schedule-delay-example-xxxxx\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n  duration: '12s'\n")),(0,o.kt)("p",null,"The fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," are described below, mostly similar to fields in Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"CronJob"),". You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/"},"documentation of Kubernetes CronJob")," for more information."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The timezone in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," field subjects to the timezone of ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),"."))),(0,o.kt)("h3",{id:"schedule-field"},(0,o.kt)("inlineCode",{parentName:"h3"},"schedule")," field"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," field is used to specify the time when an experiment occurs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of week (0 - 6) (from Sunday to Monday; on some systems, 7 is also Sunday)\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * *\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Equivalence"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@year (or @annually)"),(0,o.kt)("td",{parentName:"tr",align:null},"run at midnight on January 1 of each year"),(0,o.kt)("td",{parentName:"tr",align:null},"0 0 1 1 ","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@monthly"),(0,o.kt)("td",{parentName:"tr",align:null},"run at midnight on the first day of each month"),(0,o.kt)("td",{parentName:"tr",align:null},"0 0 1 ","*"," ","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@weekly"),(0,o.kt)("td",{parentName:"tr",align:null},"run at midnight on Sunday of each week"),(0,o.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@daily (or @midnight)"),(0,o.kt)("td",{parentName:"tr",align:null},"run at midnight each day"),(0,o.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," ","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@hourly"),(0,o.kt)("td",{parentName:"tr",align:null},"run at the beginning of each hour"),(0,o.kt)("td",{parentName:"tr",align:null},"0 ","*"," ","*"," ","*"," ","*")))),(0,o.kt)("p",null,"If you need to generate time expressions, you can also use web tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://crontab.guru"},"crontab.guru"),"."),(0,o.kt)("h3",{id:"historylimit-field"},(0,o.kt)("inlineCode",{parentName:"h3"},"historyLimit")," field"),(0,o.kt)("p",null,"After an experiment ends, the corresponding history will not be deleted so you can retrieve and observe the results easily in case of any errors. The number set in ",(0,o.kt)("inlineCode",{parentName:"p"},"historyLimit")," is the number of reserved tasks. This number includes tasks in progress. Chaos Mesh does not delete running tasks."),(0,o.kt)("p",null,"When there are more than ",(0,o.kt)("inlineCode",{parentName:"p"},"historyLimit")," tasks, Chaos Mesh will delete the earliest created tasks sequentially. If those tasks continue to run, they will be skipped and not deleted."),(0,o.kt)("h3",{id:"conciliationpolicy-field"},(0,o.kt)("inlineCode",{parentName:"h3"},"ConciliationPolicy")," field"),(0,o.kt)("p",null,"The values available for this field are ",(0,o.kt)("inlineCode",{parentName:"p"},'"Forbid"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"Allow"'),", and ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,o.kt)("p",null,"This field is used to specify whether to allow this ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," object to create multiple concurrent experiments. For example, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule: * * * * *")," configuration, one experiment will be created every minute. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," of the experiment is configured to be 70 seconds, multiple experiments will be created simtaneously."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," field is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbid"),", which means multiple experiments are not allowed to be created simultaneously. If you set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow"),", multiple experiments are allowed to be created simultaneously."),(0,o.kt)("p",null,"The following configuration still takes the delay experiment as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,o.kt)("p",null,"Based on this configuration, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Allow"'),", there will be a delay of 20 milliseconds in 10 seconds every minute. And for the other 50 seconds, there will be a delay of 10 milliseconds. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Forbid"'),", there will always be a delay of 10 milliseconds."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not all experiment types support multiple experiments on the same Pod. For details, refer to the documents of the specific experiment types."))),(0,o.kt)("h3",{id:"startingdeadlineseconds-field"},(0,o.kt)("inlineCode",{parentName:"h3"},"startingDeadlineSeconds")," field"),(0,o.kt)("p",null,"The default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is 0."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is set to 0, Chaos Mesh will check if any experiments are missed from the last time of the scheduling to now (this might happen when you close Chaos Mesh, suspend Schedule for a long time, or set ",(0,o.kt)("inlineCode",{parentName:"p"},"concertencyPolicy")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbid"),")."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," exceeds 0, Chaos Mesh will check if any experiments are missed for the past ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," seconds since the current time. If the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is too small, some experiments might be missed. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    startingDeadlineSeconds: 5\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,o.kt)("p",null,"In the above example, due to ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbid"),", creating new tasks is forbidden at the beginning of the minute. And in the tenth second of this minute, the last created Chaos experiment has finished running. But due to the limits of ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," and the set of ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy"),", the missing events will not be retrieved and no Chaos experiments will be created. New Chaos experiment will only be created at the beginning of the next minute."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is not set (or is set to 0), there will always be a delay of 10 milliseconds. This is because after the running task is done, Chaos Mesh finds a previous missing task (due to ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbid"),"), and immediately creates a new task."),(0,o.kt)("p",null,"To learn more examples and similar explanations of this field, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations"},"Kubernetes CronJob documents"),"."),(0,o.kt)("h3",{id:"define-experiments"},"Define experiments"),(0,o.kt)("p",null,"To define the specific content of the experiment, you need to specify two fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*Chaos"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field is used to specify the type of an experiment, and ",(0,o.kt)("inlineCode",{parentName:"p"},"*Chaos")," field is used to describe the content of the experiment. Normally, the content in the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field uses upper camel case, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkChaos"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PodChaos"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IOChaos"),". While the key of ",(0,o.kt)("inlineCode",{parentName:"p"},"*Chaos")," uses lower camel case like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkChaos"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"podChaos"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ioChaos"),". The key of ",(0,o.kt)("inlineCode",{parentName:"p"},"*Chaos")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," of the corresponding type of experiment. For details, refer to the documents of the specific experiment types."),(0,o.kt)("h2",{id:"create-scheduling-rules-using-chaos-dashboard"},"Create Scheduling rules using Chaos Dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,o.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create plans",src:t(52028).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select and fill in the specific details of the experiment."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Select and fill in the content",src:t(23710).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out information including the planning cycle and concurrency strategy."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Fill out planning rules",src:t(64410).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,o.kt)("h3",{id:"pause-the-scheduled-task"},"Pause the scheduled task"),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"CronJob"),", pausing ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," not only prevents it from creating a new experiment, but also pauses an already created experiment."),(0,o.kt)("p",null,"If you do not want to create a Chaos experiment as a scheduled task for now, you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"experiment.chaos-mesh.org/pause=true")," annotation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," object. You can add the annotation using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause=true\n")),(0,o.kt)("p",null,"In the command, ",(0,o.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," is a namespace, and ",(0,o.kt)("inlineCode",{parentName:"p"},"$NAME")," is the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule"),". The successful result is returned as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")),(0,o.kt)("p",null,"If you want to unpause the task, you can use the following command to remove the annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause-\n")),(0,o.kt)("p",null,"In the command, ",(0,o.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," is the namespace, and ",(0,o.kt)("inlineCode",{parentName:"p"},"$NAME")," is the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule"),".The successful result is returned as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")))}m.isMDXComponent=!0},52028:function(e,n,t){n.Z=t.p+"assets/images/create-new-schedule-e82ccedf7ffe3c4d7c5801bb122f23ee.png"},23710:function(e,n,t){n.Z=t.p+"assets/images/define-schedule-inner-resource-89388e7af1d18dfbb43233addb35055d.png"},64410:function(e,n,t){n.Z=t.p+"assets/images/define-schedule-spec-7a8d2b0b0fec3b65c7577cbf87ae686a.png"}}]);
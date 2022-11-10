"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={title:"Define Scheduling Rules"},o=void 0,r={unversionedId:"define-scheduling-rules",id:"version-2.3.3/define-scheduling-rules",title:"Define Scheduling Rules",description:"Schedule overview",source:"@site/versioned_docs/version-2.3.3/define-scheduling-rules.md",sourceDirName:".",slug:"/define-scheduling-rules",permalink:"/docs/2.3.3/define-scheduling-rules",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/define-scheduling-rules.md",tags:[],version:"2.3.3",frontMatter:{title:"Define Scheduling Rules"},sidebar:"docs",previous:{title:"Define the Scope of Chaos Experiments",permalink:"/docs/2.3.3/define-chaos-experiment-scope"},next:{title:"Run a Chaos Experiment",permalink:"/docs/2.3.3/run-a-chaos-experiment"}},s={},d=[{value:"Schedule overview",id:"schedule-overview",level:2},{value:"Create scheduling rules with <code>kubectl</code> using YAML files",id:"create-scheduling-rules-with-kubectl-using-yaml-files",level:2},{value:"<code>schedule</code> field",id:"schedule-field",level:3},{value:"<code>historyLimit</code> field",id:"historylimit-field",level:3},{value:"<code>ConciliationPolicy</code> field",id:"conciliationpolicy-field",level:3},{value:"<code>startingDeadlineSeconds</code> field",id:"startingdeadlineseconds-field",level:3},{value:"Define experiments",id:"define-experiments",level:3},{value:"Create Scheduling rules using Chaos Dashboard",id:"create-scheduling-rules-using-chaos-dashboard",level:2},{value:"Pause the scheduled task",id:"pause-the-scheduled-task",level:3}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"schedule-overview"},"Schedule overview"),(0,i.kt)("p",null,"This document describes how to use Chaos Mesh to create a scheduled task, which can automatically create Chaos experiments at a fixed time (or at a fixed time interval)."),(0,i.kt)("p",null,"In Kubernetes, Chaos Mesh uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," to describe scheduled tasks."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The name of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," object should not exceed 57 characters because the created Chaos experiment will add 6 additional random characters to the end of the name.The name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," object with ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflow")," should not exceed 51 characters because Workflow will add 6 additional random characters to the end of the name.")),(0,i.kt)("h2",{id:"create-scheduling-rules-with-kubectl-using-yaml-files"},"Create scheduling rules with ",(0,i.kt)("inlineCode",{parentName:"h2"},"kubectl")," using YAML files"),(0,i.kt)("p",null,"For example, to apply a 100 millisecond delay for 12 seconds in the fifth minute of each hour, configure the YAML file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n      correlation: '100'\n      jitter: '0ms'\n    duration: '12s'\n")),(0,i.kt)("p",null,"Save this YAML file as ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule-networkchaos.yaml"),", and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apple-f ./schedule-networkchaos.yaml"),"."),(0,i.kt)("p",null,"Based on this configuration, Chaos Mesh will create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," object in the fifth minute of each hour (such as 0:05, 1:05...):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: schedule-delay-example-xxxxx\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n  duration: '12s'\n")),(0,i.kt)("p",null,"The fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," are described below, mostly similar to fields in Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"CronJob"),". You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/"},"documentation of Kubernetes CronJob")," for more information."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The timezone in the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule")," field subjects to the timezone of ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),".")),(0,i.kt)("h3",{id:"schedule-field"},(0,i.kt)("inlineCode",{parentName:"h3"},"schedule")," field"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule")," field is used to specify the time when an experiment occurs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of week (0 - 6) (from Sunday to Monday; on some systems, 7 is also Sunday)\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * *\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Equivalence"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@year (or @annually)"),(0,i.kt)("td",{parentName:"tr",align:null},"run at midnight on January 1 of each year"),(0,i.kt)("td",{parentName:"tr",align:null},"0 0 1 1 ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@monthly"),(0,i.kt)("td",{parentName:"tr",align:null},"run at midnight on the first day of each month"),(0,i.kt)("td",{parentName:"tr",align:null},"0 0 1 ","*"," ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@weekly"),(0,i.kt)("td",{parentName:"tr",align:null},"run at midnight on Sunday of each week"),(0,i.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@daily (or @midnight)"),(0,i.kt)("td",{parentName:"tr",align:null},"run at midnight each day"),(0,i.kt)("td",{parentName:"tr",align:null},"0 0 ","*"," ","*"," ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@hourly"),(0,i.kt)("td",{parentName:"tr",align:null},"run at the beginning of each hour"),(0,i.kt)("td",{parentName:"tr",align:null},"0 ","*"," ","*"," ","*"," ","*")))),(0,i.kt)("p",null,"If you need to generate time expressions, you can also use web tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://crontab.guru"},"crontab.guru"),"."),(0,i.kt)("h3",{id:"historylimit-field"},(0,i.kt)("inlineCode",{parentName:"h3"},"historyLimit")," field"),(0,i.kt)("p",null,"After an experiment ends, the corresponding history will not be deleted so you can retrieve and observe the results easily in case of any errors. The number set in ",(0,i.kt)("inlineCode",{parentName:"p"},"historyLimit")," is the number of reserved tasks. This number includes tasks in progress. Chaos Mesh does not delete running tasks."),(0,i.kt)("p",null,"When there are more than ",(0,i.kt)("inlineCode",{parentName:"p"},"historyLimit")," tasks, Chaos Mesh will delete the earliest created tasks sequentially. If those tasks continue to run, they will be skipped and not deleted."),(0,i.kt)("h3",{id:"conciliationpolicy-field"},(0,i.kt)("inlineCode",{parentName:"h3"},"ConciliationPolicy")," field"),(0,i.kt)("p",null,"The values available for this field are ",(0,i.kt)("inlineCode",{parentName:"p"},'"Forbid"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"Allow"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("p",null,"This field is used to specify whether to allow this ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," object to create multiple concurrent experiments. For example, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule: * * * * *")," configuration, one experiment will be created every minute. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," of the experiment is configured to be 70 seconds, multiple experiments will be created simtaneously."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid"),", which means multiple experiments are not allowed to be created simultaneously. If you set the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow"),", multiple experiments are allowed to be created simultaneously."),(0,i.kt)("p",null,"The following configuration still takes the delay experiment as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,i.kt)("p",null,"Based on this configuration, if you set ",(0,i.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Allow"'),", there will be a delay of 20 milliseconds in 10 seconds every minute. And for the other 50 seconds, there will be a delay of 10 milliseconds. If you set ",(0,i.kt)("inlineCode",{parentName:"p"},'concurrencyPolicy: "Forbid"'),", there will always be a delay of 10 milliseconds."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Not all experiment types support multiple experiments on the same Pod. For details, refer to the documents of the specific experiment types.")),(0,i.kt)("h3",{id:"startingdeadlineseconds-field"},(0,i.kt)("inlineCode",{parentName:"h3"},"startingDeadlineSeconds")," field"),(0,i.kt)("p",null,"The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),", Chaos Mesh will check if any experiments are missed from the last time of the scheduling to now (this might happen when you close Chaos Mesh, suspend Schedule for a long time, or set ",(0,i.kt)("inlineCode",{parentName:"p"},"concertencyPolicy")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid"),")."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is set and larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", Chaos Mesh will check if any experiments are missed for the past ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," seconds since the current time. If the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is too small, some experiments might be missed. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    startingDeadlineSeconds: 5\n    delay:\n      latency: '10ms'\n    duration: '70s'\n")),(0,i.kt)("p",null,"In the above example, due to ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid"),", creating new tasks is forbidden at the beginning of the minute. And in the tenth second of this minute, the last created Chaos experiment has finished running. But due to the limits of ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," and the set of ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy"),", the missing events will not be retrieved and no Chaos experiments will be created. New Chaos experiment will only be created at the beginning of the next minute."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"startingDeadlineSeconds")," is not set (or is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"), there will always be a delay of 10 milliseconds. This is because after the running task is done, Chaos Mesh finds a previous missing task (due to ",(0,i.kt)("inlineCode",{parentName:"p"},"concurrencyPolicy")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbid"),"), and immediately creates a new task."),(0,i.kt)("p",null,"To learn more examples and similar explanations of this field, see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations"},"Kubernetes CronJob documents"),"."),(0,i.kt)("h3",{id:"define-experiments"},"Define experiments"),(0,i.kt)("p",null,"To define the specific content of the experiment, you need to specify two fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"*Chaos"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field is used to specify the type of an experiment, and ",(0,i.kt)("inlineCode",{parentName:"p"},"*Chaos")," field is used to describe the content of the experiment. Normally, the content in the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field uses upper camel case, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkChaos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PodChaos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IOChaos"),". While the key of ",(0,i.kt)("inlineCode",{parentName:"p"},"*Chaos")," uses lower camel case like ",(0,i.kt)("inlineCode",{parentName:"p"},"networkChaos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"podChaos"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ioChaos"),". The key of ",(0,i.kt)("inlineCode",{parentName:"p"},"*Chaos")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," of the corresponding type of experiment. For details, refer to the documents of the specific experiment types."),(0,i.kt)("h2",{id:"create-scheduling-rules-using-chaos-dashboard"},"Create Scheduling rules using Chaos Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create plans",src:n(50460).Z,width:"1242",height:"504"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select and fill in the specific details of the experiment."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Select and fill in the content",src:n(19181).Z,width:"1224",height:"854"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out information including the planning cycle and concurrency strategy."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Fill out planning rules",src:n(36680).Z,width:"1536",height:"1526"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h3",{id:"pause-the-scheduled-task"},"Pause the scheduled task"),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"CronJob"),", pausing ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," not only prevents it from creating a new experiment, but also pauses an already created experiment."),(0,i.kt)("p",null,"If you do not want to create a Chaos experiment as a scheduled task for now, you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"experiment.chaos-mesh.org/pause=true")," annotation to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule")," object. You can add the annotation using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause=true\n")),(0,i.kt)("p",null,"In the command, ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," is a namespace, and ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAME")," is the name of ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule"),". The successful result is returned as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")),(0,i.kt)("p",null,"If you want to unpause the task, you can use the following command to remove the annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause-\n")),(0,i.kt)("p",null,"In the command, ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," is the namespace, and ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAME")," is the name of ",(0,i.kt)("inlineCode",{parentName:"p"},"Schedule"),".The successful result is returned as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"schedule/$NAME annotated\n")))}c.isMDXComponent=!0},50460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-new-schedule-e82ccedf7ffe3c4d7c5801bb122f23ee.png"},19181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/define-schedule-inner-resource-89388e7af1d18dfbb43233addb35055d.png"},36680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/define-schedule-spec-7a8d2b0b0fec3b65c7577cbf87ae686a.png"}}]);
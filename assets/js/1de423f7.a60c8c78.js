"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[44305],{49613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(60795),r=(a(59496),a(49613));const l={title:"Simulate JVM Application Faults"},i=void 0,o={unversionedId:"simulate-jvm-application-chaos",id:"version-2.6.0/simulate-jvm-application-chaos",title:"Simulate JVM Application Faults",description:"Chaos Mesh simulates the faults of JVM application through Byteman. The supported fault types are as follows:",source:"@site/versioned_docs/version-2.6.0/simulate-jvm-application-chaos.md",sourceDirName:".",slug:"/simulate-jvm-application-chaos",permalink:"/docs/simulate-jvm-application-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/simulate-jvm-application-chaos.md",tags:[],version:"2.6.0",frontMatter:{title:"Simulate JVM Application Faults"},sidebar:"docs",previous:{title:"Simulate Time Faults",permalink:"/docs/simulate-time-chaos-on-kubernetes"},next:{title:"Simulate Linux Kernel Faults",permalink:"/docs/simulate-kernel-chaos-on-kubernetes"}},p={},m=[{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using YAML files",id:"create-experiments-using-yaml-files",level:2},{value:"Step 1. Create the target application",id:"step-1-create-the-target-application",level:3},{value:"Step 2. Observe application behaviors before injecting faults\u200b",id:"step-2-observe-application-behaviors-before-injecting-faults",level:3},{value:"Step 3. Inject JVMChaos and check",id:"step-3-inject-jvmchaos-and-check",level:3},{value:"Field description",id:"field-description",level:2},{value:"Parameters for <code>latency</code>",id:"parameters-for-latency",level:3},{value:"Parameters for <code>return</code>",id:"parameters-for-return",level:3},{value:"Parameters for <code>exception</code>",id:"parameters-for-exception",level:3},{value:"Parameters for <code>stress</code>",id:"parameters-for-stress",level:3},{value:"Parameters for <code>gc</code>",id:"parameters-for-gc",level:3},{value:"Parameters for <code>ruleData</code>",id:"parameters-for-ruledata",level:3}],s={toc:m},d="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaos Mesh simulates the faults of JVM application through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/byteman"},"Byteman"),". The supported fault types are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Throw custom exceptions"),(0,r.kt)("li",{parentName:"ul"},"Trigger garbage collection"),(0,r.kt)("li",{parentName:"ul"},"Increase method latency"),(0,r.kt)("li",{parentName:"ul"},"Modify return values of a method"),(0,r.kt)("li",{parentName:"ul"},"Trigger faults by setting Byteman configuration files"),(0,r.kt)("li",{parentName:"ul"},"Increase JVM pressure")),(0,r.kt)("p",null,"This document describes how to use Chaos Mesh to create the above fault types of JVM experiments."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your Linux kernel must be v4.1 or later.")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create a new experiment",src:a(45861).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"JVM FAULT"),", and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"RETURN")),". Then, fill out the detailed configurations."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"JVMChaos experiments",src:a(41403).Z,width:"2682",height:"1484"})),(0,r.kt)("p",{parentName:"li"},"For information about how to fill out the configurations, refer to ","[Field Description]"," (#field-description).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"experiment information",src:a(12376).Z,width:"973",height:"442"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-yaml-files"},"Create experiments using YAML files"),(0,r.kt)("p",null,"The following example shows the usage and effects of JVMChaos. The example specifies the return values of a method. The YAML files referred to in the following steps can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm"},"examples/jvm"),". The default work directory for the following steps is also ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/jvm"),". The default namespace where Chaos Mesh is installed is ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh"),"."),(0,r.kt)("h3",{id:"step-1-create-the-target-application"},"Step 1. Create the target application"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld"},"Helloworld")," is a simple Java application. In this section, this application is used as the target application that is to be tested. The target application is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"example/jvm/app.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: helloworld\n  namespace: helloworld\nspec:\n  containers:\n    - name: helloworld\n      # source code: https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld\n      # this application will print log like this below:\n      # 0. Hello World\n      # 1. Hello World\n      # ...\n      image: xiang13225080/helloworld:v1.0\n      imagePullPolicy: IfNotPresent\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the namespace for the target application:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace helloworld\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the application Pod:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n helloworld get pods"),", and you are expected to find a pod named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld get pods\n")),(0,r.kt)("p",{parentName:"li"},"The result is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get pods -n helloworld\nNAME         READY   STATUS    RESTARTS   AGE\nhelloworld   1/1     Running   0          2m\n")),(0,r.kt)("p",{parentName:"li"},"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," column turns to ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1"),", you can proceed to the next step."))),(0,r.kt)("h3",{id:"step-2-observe-application-behaviors-before-injecting-faults"},"Step 2. Observe application behaviors before injecting faults\u200b"),(0,r.kt)("p",null,"You can observe the behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," application before injecting faults, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld logs -f helloworld\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"0. Hello World\n1. Hello World\n2. Hello World\n3. Hello World\n4. Hello World\n5. Hello World\n")),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," outputs a line of ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," every second, and the number of each line increases in turn."),(0,r.kt)("h3",{id:"step-3-inject-jvmchaos-and-check"},"Step 3. Inject JVMChaos and check"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The JVMChaos with a specified return value is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: return\n  namespace: helloworld\nspec:\n  action: return\n  class: Main\n  method: getnum\n  value: '9999'\n  mode: all\n  selector:\n    namespaces:\n      - helloworld\n")),(0,r.kt)("p",{parentName:"li"},"JVMChaos changes the return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"getnum")," method to the number ",(0,r.kt)("inlineCode",{parentName:"p"},"9999"),", which means that the number of each line in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," output is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"9999"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inject JVMChaos with a specified value:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./jvm-return-example.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the latest log of ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld logs -f helloworld\n")),(0,r.kt)("p",{parentName:"li"},"The log is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Rule.execute called for return_0:0\nreturn execute\ncaught ReturnException\n9999. Hello World\n")))),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific fault type. The available fault types include ",(0,r.kt)("inlineCode",{parentName:"td"},"latency"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"return"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"exception"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stress"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gc"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ruleData"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"return")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates how to select Pod. The supported modes include ",(0,r.kt)("inlineCode",{parentName:"td"},"one"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))))),(0,r.kt)("p",null,"The meanings of the different ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," values are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latency")),(0,r.kt)("td",{parentName:"tr",align:null},"Increase method latency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"return")),(0,r.kt)("td",{parentName:"tr",align:null},"Modify return values of a method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exception")),(0,r.kt)("td",{parentName:"tr",align:null},"Throw custom exceptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stress")),(0,r.kt)("td",{parentName:"tr",align:null},"Increase CPU usage of Java process, or cause memory overflow (support heap overflow and stack overflow)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gc")),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger garbage collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ruleData")),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger faults by setting Byteman configuration files")))),(0,r.kt)("p",null,"For different ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," values, there are different configuration items that can be filled in."),(0,r.kt)("h3",{id:"parameters-for-latency"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"latency")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"class")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latency")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The duration of increasing method latency. The unit is milisecond."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"parameters-for-return"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"class")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the return value of the method"),(0,r.kt)("td",{parentName:"tr",align:null},'string type, required. Currently, the item can be numeric and string types. If the item (return value) is string, double quotes are required, like "chaos".'),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"parameters-for-exception"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"exception")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"class")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exception")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The thrown custom exception, such as 'java.io.IOException(\"BOOM\")'."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"parameters-for-stress"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"stress")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpuCount")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of CPU cores used for increasing CPU stress. You must configure one item between ",(0,r.kt)("inlineCode",{parentName:"td"},"cpu-count")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"mem-type"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of OOM. Currently, both 'stack' and 'heap' OOM types are supported. You must configure one item between ",(0,r.kt)("inlineCode",{parentName:"td"},"cpu-count")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"mem-type"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"parameters-for-gc"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"gc")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"parameters-for-ruledata"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"h3"},"ruleData")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ruleData")),(0,r.kt)("td",{parentName:"tr",align:null},"srting"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the Byteman configuration data"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"When you write the rule configuration file, take into account the specific Java program and the ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language"},"byteman-rule-language"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n")),(0,r.kt)("p",null,'You need to escape the line breaks in the configuration file to the newline character "\\n", and use the escaped text as the value of "rule-data" as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},'\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"\n')))}u.isMDXComponent=!0},45861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},12376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},41403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jvmchaos-exp-fd327cba6c3f8efc68f6f672e8c60ac4.png"}}]);
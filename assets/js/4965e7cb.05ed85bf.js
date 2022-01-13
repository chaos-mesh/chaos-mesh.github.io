"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3276],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48123:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Simulate JVM Application Faults"},p=void 0,m={unversionedId:"simulate-jvm-application-chaos",id:"simulate-jvm-application-chaos",isDocsHomePage:!1,title:"Simulate JVM Application Faults",description:"Chaos Mesh simulates the faults of JVM application through Byteman. The supported fault types are as follows:",source:"@site/docs/simulate-jvm-application-chaos.md",sourceDirName:".",slug:"/simulate-jvm-application-chaos",permalink:"/docs/next/simulate-jvm-application-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-jvm-application-chaos.md",tags:[],version:"current",frontMatter:{title:"Simulate JVM Application Faults"},sidebar:"docs",previous:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-kubernetes"},next:{title:"Simulate Linux Kernel Faults",permalink:"/docs/next/simulate-kernel-chaos-on-kubernetes"}},s=[{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[],level:2},{value:"Create experiments using YAML files",id:"create-experiments-using-yaml-files",children:[{value:"Step 1. Create the target application",id:"step-1-create-the-target-application",children:[],level:3},{value:"Step 2. Observe application behaviors before injecting faults\u200b",id:"step-2-observe-application-behaviors-before-injecting-faults",children:[],level:3},{value:"Step 3. Inject JVMChaos and check",id:"step-3-inject-jvmchaos-and-check",children:[],level:3}],level:2},{value:"Field description",id:"field-description",children:[{value:"Parameters for <code>latency</code>",id:"parameters-for-latency",children:[],level:3},{value:"Parameters for <code>return</code>",id:"parameters-for-return",children:[],level:3},{value:"Parameters for <code>exception</code>",id:"parameters-for-exception",children:[],level:3},{value:"Parameters for <code>stress</code>",id:"parameters-for-stress",children:[],level:3},{value:"Parameters for <code>gc</code>",id:"parameters-for-gc",children:[],level:3},{value:"Parameters for <code>ruleData</code>",id:"parameters-for-ruledata",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Chaos Mesh simulates the faults of JVM application through ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/byteman"},"Byteman"),". The supported fault types are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Throw custom exceptions"),(0,l.kt)("li",{parentName:"ul"},"Trigger garbage collection"),(0,l.kt)("li",{parentName:"ul"},"Increase method latency"),(0,l.kt)("li",{parentName:"ul"},"Modify return values of a method"),(0,l.kt)("li",{parentName:"ul"},"Trigger faults by setting Byteman configuration files"),(0,l.kt)("li",{parentName:"ul"},"Increase JVM pressure")),(0,l.kt)("p",null,"This document describes how to use Chaos Mesh to create the above fault types of JVM experiments."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Your Linux kernel must be v4.1 or later."))),(0,l.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,l.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"create a new experiment",src:a(31822).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'In the "',(0,l.kt)("strong",{parentName:"p"},"Choose a Target"),'" area, choose ',(0,l.kt)("strong",{parentName:"p"},"JVM FAULT"),", and select a specific behavior, such as ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"RETURN")),". Then, fill out the detailed configurations."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"JVMChaos experiments",src:a(10921).Z})),(0,l.kt)("p",{parentName:"li"},"For information about how to fill out the configurations, refer to ","[Field Description]"," (#field-description).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"experiment information",src:a(78878).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,l.kt)("h2",{id:"create-experiments-using-yaml-files"},"Create experiments using YAML files"),(0,l.kt)("p",null,"The following example shows the usage and effects of JVMChaos. The example specifies the return values of a method. The YAML files referred to in the following steps can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm"},"examples/jvm"),". The default work directory for the following steps is also ",(0,l.kt)("inlineCode",{parentName:"p"},"examples/jvm"),". The default namespace where Chaos Mesh is installed is ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),"."),(0,l.kt)("h3",{id:"step-1-create-the-target-application"},"Step 1. Create the target application"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld"},"Helloworld")," is a simple Java application. In this section, this application is used as the target application that is to be tested. The target application is defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"example/jvm/app.yaml")," as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: helloworld\n  namespace: helloworld\nspec:\n  containers:\n    - name: helloworld\n      # source code: https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld\n      # this application will print log like this below:\n      # 0. Hello World\n      # 1. Hello World\n      # ...\n      image: xiang13225080/helloworld:v1.0\n      imagePullPolicy: IfNotPresent\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the namespace for the target application:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace helloworld\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build the application Pod:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Execute ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl -n helloworld get pods"),", and you are expected to find a pod named ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," namespace."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld get pods\n")),(0,l.kt)("p",{parentName:"li"},"The result is as follows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kubectl get pods -n helloworld\nNAME         READY   STATUS    RESTARTS   AGE\nhelloworld   1/1     Running   0          2m\n")),(0,l.kt)("p",{parentName:"li"},"After the ",(0,l.kt)("inlineCode",{parentName:"p"},"READY")," column turns to ",(0,l.kt)("inlineCode",{parentName:"p"},"1/1"),", you can proceed to the next step."))),(0,l.kt)("h3",{id:"step-2-observe-application-behaviors-before-injecting-faults"},"Step 2. Observe application behaviors before injecting faults\u200b"),(0,l.kt)("p",null,"You can observe the behavior of ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," application before injecting faults, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld logs -f helloworld\n")),(0,l.kt)("p",null,"The result is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"0. Hello World\n1. Hello World\n2. Hello World\n3. Hello World\n4. Hello World\n5. Hello World\n")),(0,l.kt)("p",null,"You can see that ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," outputs a line of ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World")," every second, and the number of each line increases in turn."),(0,l.kt)("h3",{id:"step-3-inject-jvmchaos-and-check"},"Step 3. Inject JVMChaos and check"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The JVMChaos with a specified return value is as follows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: return\n  namespace: helloworld\nspec:\n  action: return\n  class: Main\n  method: getnum\n  value: "9999"\n  mode: all\n  selector:\n    namespaces:\n      - helloworld\n')),(0,l.kt)("p",{parentName:"li"},"JVMChaos changes the return value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"getnum")," method to the number ",(0,l.kt)("inlineCode",{parentName:"p"},"9999"),", which means that the number of each line in the ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," output is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"9999"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Inject JVMChaos with a specified value:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./jvm-return-example.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the latest log of ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n helloworld logs -f helloworld\n")),(0,l.kt)("p",{parentName:"li"},"The log is as follows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Rule.execute called for return_0:0\nreturn execute\ncaught ReturnException\n9999. Hello World\n")))),(0,l.kt)("h2",{id:"field-description"},"Field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"action")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the specific fault type. The available fault types include ",(0,l.kt)("inlineCode",{parentName:"td"},"latency"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"return"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"exception"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"stress"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"gc"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"ruleData"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"return")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates how to select Pod. The supported modes include ",(0,l.kt)("inlineCode",{parentName:"td"},"one"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))))),(0,l.kt)("p",null,"The meanings of the different ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," values are as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latency")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase method latency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"return")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify return values of a method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exception")),(0,l.kt)("td",{parentName:"tr",align:null},"Throw custom exceptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stress")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase CPU usage of Java process, or cause memory overflow (support heap overflow and stack overflow)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gc")),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger garbage collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ruleData")),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger faults by setting Byteman configuration files")))),(0,l.kt)("p",null,"For different ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," values, there are different configuration items that can be filled in."),(0,l.kt)("h3",{id:"parameters-for-latency"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"latency")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"class")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latency")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration of increasing method latency. The unit is milisecond."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"parameters-for-return"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"return")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"class")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the return value of the method"),(0,l.kt)("td",{parentName:"tr",align:null},'string type, required. Currently, the item can be numeric and string types. If the item (return value) is string, double quotes are required, like  "chaos".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"parameters-for-exception"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"exception")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"class")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Java class"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the method"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exception")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The thrown custom exception, such as 'java.io.IOException(\"BOOM\")'."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"parameters-for-stress"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"stress")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpuCount")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of CPU cores used for increasing CPU stress. You must configure one item between ",(0,l.kt)("inlineCode",{parentName:"td"},"cpu-count")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"mem-type"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"memType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of OOM. Currently, both 'stack' and 'heap' OOM types are supported. You must configure one item between ",(0,l.kt)("inlineCode",{parentName:"td"},"cpu-count")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"mem-type"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"parameters-for-gc"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"gc")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"parameters-for-ruledata"},"Parameters for ",(0,l.kt)("inlineCode",{parentName:"h3"},"ruleData")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ruleData")),(0,l.kt)("td",{parentName:"tr",align:null},"srting"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the Byteman configuration data"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port ID attached to the Java process agent. The faults are injected into the Java process through this ID."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,"When you write the rule configuration file, take into account the specific Java program and the ",(0,l.kt)("a",{parentName:"p",href:"https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language"},"byteman-rule-language"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n")),(0,l.kt)("p",null,'You need to escape the line breaks in the configuration file to the newline character "\\n", and use the escaped text as the value of "rule-data" as follows:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},'\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"\n')))}u.isMDXComponent=!0},31822:function(e,t,a){t.Z=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},78878:function(e,t,a){t.Z=a.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},10921:function(e,t,a){t.Z=a.p+"assets/images/jvmchaos-exp-fd327cba6c3f8efc68f6f672e8c60ac4.png"}}]);
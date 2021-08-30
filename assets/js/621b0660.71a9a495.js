"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9892],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),o={id:"stresschaos_experiment",title:"StressChaos Experiment",sidebar_label:"StressChaos Experiment"},i=void 0,l={unversionedId:"user_guides/stresschaos_experiment",id:"version-0.9.1/user_guides/stresschaos_experiment",isDocsHomePage:!1,title:"StressChaos Experiment",description:"This document helps you create StressChaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/stress_chaos.md",sourceDirName:"user_guides",slug:"/user_guides/stresschaos_experiment",permalink:"/docs/0.9.1/user_guides/stresschaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/stress_chaos.md",tags:[],version:"0.9.1",frontMatter:{id:"stresschaos_experiment",title:"StressChaos Experiment",sidebar_label:"StressChaos Experiment"},sidebar:"version-0.9.1/docs",previous:{title:"NetworkChaos Experiment",permalink:"/docs/0.9.1/user_guides/networkchaos_experiment"},next:{title:"TimeChaos Experiment",permalink:"/docs/0.9.1/user_guides/timechaos_experiment"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document helps you create StressChaos experiments."),(0,s.kt)("p",null,"StressChaos can generate plenty of stresses over a collection of pods. The stressors is injected into the target pods via the ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," internally."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"A StressChaos shares common configurations like other chaos, such as how to select pods, how to specify periodic chaos. You can refer to other docs for details. It defines stressors in ",(0,s.kt)("strong",{parentName:"p"},"either")," of the following two ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"stressors")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Stressors")," defines a plenty of stressors supported to stress system components out. You can use one or more of them to make up various kinds of stresses. At least one of the stressors should be specified. The following is supported stressors for now:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"memory")),(0,s.kt)("p",{parentName:"li"},"A ",(0,s.kt)("inlineCode",{parentName:"p"},"memory")," stressor will continuously stress virtual memory out."),(0,s.kt)("table",{parentName:"li"},(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Option"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"workers")),(0,s.kt)("td",{parentName:"tr",align:null},"Integer"),(0,s.kt)("td",{parentName:"tr",align:null},"True"),(0,s.kt)("td",{parentName:"tr",align:null},"Specifies concurrent stressing instance.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"size")),(0,s.kt)("td",{parentName:"tr",align:null},"String"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"Specifies memory size consumed per worker, default is the total available memory. One can also specify the size as ",(0,s.kt)("em",{parentName:"td"},"%")," of total available memory or in units of ",(0,s.kt)("em",{parentName:"td"},"B, KB/KiB, MB/MiB, GB/GiB, TB/TiB"),"."))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"cpu")),(0,s.kt)("p",{parentName:"li"},"A ",(0,s.kt)("inlineCode",{parentName:"p"},"cpu")," stressor will continuously stress CPU out."),(0,s.kt)("table",{parentName:"li"},(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Option"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"workers")),(0,s.kt)("td",{parentName:"tr",align:null},"Integer"),(0,s.kt)("td",{parentName:"tr",align:null},"True"),(0,s.kt)("td",{parentName:"tr",align:null},"Specifies concurrent stressing instance. Actually it specifies how many CPUs to stress when it's less than available CPUs.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"load")),(0,s.kt)("td",{parentName:"tr",align:null},"Integer"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"Specifies percent loading per worker. 0 is effectively a sleep (no load) and 100 is full loading."))))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"stressngStressors")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"StressngStressors")," defines a plenty of stressors just like ",(0,s.kt)("inlineCode",{parentName:"p"},"Stressors")," except that it's an experimental feature and more powerful."),(0,s.kt)("p",{parentName:"li"},"You can define stressors in ",(0,s.kt)("inlineCode",{parentName:"p"},"stress-ng")," (see also ",(0,s.kt)("inlineCode",{parentName:"p"},"man stress-ng"),") dialect."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("p",{parentName:"blockquote"},"However, not all of the supported stressors are well tested. It might be retired in later releases. Therefore, it is recommended to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Stressors")," to define the stressors and use this only when you want more stressors unsupported by ",(0,s.kt)("inlineCode",{parentName:"p"},"Stressors"),".")),(0,s.kt)("p",{parentName:"li"},"When both ",(0,s.kt)("inlineCode",{parentName:"p"},"StressngStressors")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Stressors")," are defined, ",(0,s.kt)("inlineCode",{parentName:"p"},"StressngStressors")," wins."))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Below is an example YAML file of StressChaos which is set to burn 1 CPU for 30 seconds in every 2 minutes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n  stressors:\n    cpu:\n      workers: 1\n  duration: '30s'\n  scheduler:\n    cron: '@every 2m'\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a namespace for your application. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"tidb-cluster-demo"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns tidb-cluster-demo\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create your pods in the target namespace:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f *your-pods.yaml*\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Inject a StressChaos:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f *your-stress-chaos.yaml*\n")))),(0,s.kt)("p",null,"Then, your pod's CPU will burn for 30 seconds."))}u.isMDXComponent=!0}}]);
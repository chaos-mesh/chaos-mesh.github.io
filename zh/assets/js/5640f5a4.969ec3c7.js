"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[84133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"StressChaos Experiment"},o=void 0,i={unversionedId:"user_guides/stresschaos",id:"version-0.9.1/user_guides/stresschaos",title:"StressChaos Experiment",description:"This document helps you create StressChaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/stresschaos.md",sourceDirName:"user_guides",slug:"/user_guides/stresschaos",permalink:"/zh/docs/0.9.1/user_guides/stresschaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/stresschaos.md",tags:[],version:"0.9.1",frontMatter:{title:"StressChaos Experiment"},sidebar:"version-0.9.1/docs",previous:{title:"NetworkChaos Experiment",permalink:"/zh/docs/0.9.1/user_guides/networkchaos"},next:{title:"TimeChaos Experiment",permalink:"/zh/docs/0.9.1/user_guides/timechaos"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document helps you create StressChaos experiments."),(0,a.kt)("p",null,"StressChaos can generate plenty of stresses over a collection of pods. The stressors is injected into the target pods via the ",(0,a.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," internally."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"A StressChaos shares common configurations like other chaos, such as how to select pods, how to specify periodic chaos. You can refer to other docs for details. It defines stressors in ",(0,a.kt)("strong",{parentName:"p"},"either")," of the following two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"stressors")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Stressors")," defines a plenty of stressors supported to stress system components out. You can use one or more of them to make up various kinds of stresses. At least one of the stressors should be specified. The following is supported stressors for now:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"memory")),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," stressor will continuously stress virtual memory out."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"workers")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies concurrent stressing instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies memory size consumed per worker, default is the total available memory. One can also specify the size as ",(0,a.kt)("em",{parentName:"td"},"%")," of total available memory or in units of ",(0,a.kt)("em",{parentName:"td"},"B, KB/KiB, MB/MiB, GB/GiB, TB/TiB"),"."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cpu")),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu")," stressor will continuously stress CPU out."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"workers")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies concurrent stressing instance. Actually it specifies how many CPUs to stress when it's less than available CPUs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"load")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies percent loading per worker. 0 is effectively a sleep (no load) and 100 is full loading."))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"stressngStressors")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"StressngStressors")," defines a plenty of stressors just like ",(0,a.kt)("inlineCode",{parentName:"p"},"Stressors")," except that it's an experimental feature and more powerful."),(0,a.kt)("p",{parentName:"li"},"You can define stressors in ",(0,a.kt)("inlineCode",{parentName:"p"},"stress-ng")," (see also ",(0,a.kt)("inlineCode",{parentName:"p"},"man stress-ng"),") dialect."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"However, not all of the supported stressors are well tested. It might be retired in later releases. Therefore, it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Stressors")," to define the stressors and use this only when you want more stressors unsupported by ",(0,a.kt)("inlineCode",{parentName:"p"},"Stressors"),".")),(0,a.kt)("p",{parentName:"li"},"When both ",(0,a.kt)("inlineCode",{parentName:"p"},"StressngStressors")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Stressors")," are defined, ",(0,a.kt)("inlineCode",{parentName:"p"},"StressngStressors")," wins."))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Below is an example YAML file of StressChaos which is set to burn 1 CPU for 30 seconds in every 2 minutes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n  stressors:\n    cpu:\n      workers: 1\n  duration: '30s'\n  scheduler:\n    cron: '@every 2m'\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a namespace for your application. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"tidb-cluster-demo"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns tidb-cluster-demo\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create your pods in the target namespace:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f *your-pods.yaml*\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inject a StressChaos:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f *your-stress-chaos.yaml*\n")))),(0,a.kt)("p",null,"Then, your pod's CPU will burn for 30 seconds."))}u.isMDXComponent=!0}}]);
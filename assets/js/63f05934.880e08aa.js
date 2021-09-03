"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8149],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],l={id:"podchaos_experiment",title:"PodChaos Experiment",sidebar_label:"PodChaos Experiment"},p=void 0,s={unversionedId:"user_guides/podchaos_experiment",id:"version-0.9.1/user_guides/podchaos_experiment",isDocsHomePage:!1,title:"PodChaos Experiment",description:"This document introduces how to create PodChaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/pod_chaos.md",sourceDirName:"user_guides",slug:"/user_guides/podchaos_experiment",permalink:"/docs/0.9.1/user_guides/podchaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/pod_chaos.md",tags:[],version:"0.9.1",frontMatter:{id:"podchaos_experiment",title:"PodChaos Experiment",sidebar_label:"PodChaos Experiment"},sidebar:"version-0.9.1/docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/0.9.1/user_guides/run_chaos_experiment"},next:{title:"NetworkChaos Experiment",permalink:"/docs/0.9.1/user_guides/networkchaos_experiment"}},d=[{value:"<code>pod-failure</code> configuration file",id:"pod-failure-configuration-file",children:[]},{value:"<code>pod-kill</code> configuration file",id:"pod-kill-configuration-file",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document introduces how to create PodChaos experiments."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"Currently, Chaos Mesh does not support simulation injection of naked pods. And it only supports some specific pods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"statefulset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"daemonset"),".")),(0,r.kt)("p",null,"PodChaos allows you to simulate pod faults, specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"pod failure")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pod kill"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"pod failure")," can be used to simulate a situation where a pod is down. In this case, the pod is unavailable for a long time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pod Failure")," action periodically injects errors to pods. And it will cause pod creation failure for a while. In other words, the selected pod will be unavailable in a specified period.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pod Kill")," action kills the specified pod (ReplicaSet or something similar might be needed to ensure the pod will be restarted)."))),(0,r.kt)("h2",{id:"pod-failure-configuration-file"},(0,r.kt)("inlineCode",{parentName:"h2"},"pod-failure")," configuration file"),(0,r.kt)("p",null,"Below is a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-failure")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-testing\nspec:\n  action: pod-failure\n  mode: one\n  value: ''\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 2m'\n")),(0,r.kt)("p",null,"For more sample files, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,r.kt)("p",null,"Description:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"action")," defines the specific chaos action for the pod. In this case, it is pod failure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," defines the mode to run chaos action. Supported mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"one")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed-percent")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"random-max-percent"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," depends on the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"mode"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"mode")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"one")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"all"),", leave ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," empty. If ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed"),", provide an integer of pods to do chaos action. If ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed-percent"),", provide a number from 0 to 100 to specify the percent of pods the server can do chaos action. If ",(0,r.kt)("inlineCode",{parentName:"li"},"random-max-percent"),", provide a number from 0 to 100 to specify the max percent of pods to do chaos action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. The value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," field is ",(0,r.kt)("inlineCode",{parentName:"li"},"30s"),", which indicates that pod failure will last 30 seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"selector")," is used to select pods that are used to inject chaos actions. For more details, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.9.1/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,r.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"),".")),(0,r.kt)("h2",{id:"pod-kill-configuration-file"},(0,r.kt)("inlineCode",{parentName:"h2"},"pod-kill")," configuration file"),(0,r.kt)("p",null,"Below is a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-kill")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 1m'\n")),(0,r.kt)("p",null,"The detailed description of each field in the configuration template are consistent with that in ",(0,r.kt)("a",{parentName:"p",href:"#pod-failure-configuration-file"},(0,r.kt)("inlineCode",{parentName:"a"},"pod-failure")),"."))}u.isMDXComponent=!0}}]);
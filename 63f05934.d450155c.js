(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),i=(n(0),n(173)),r={id:"podchaos_experiment",title:"PodChaos Experiment",sidebar_label:"PodChaos Experiment"},c={unversionedId:"user_guides/podchaos_experiment",id:"version-0.9.1/user_guides/podchaos_experiment",isDocsHomePage:!1,title:"PodChaos Experiment",description:"This document introduces how to create PodChaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/pod_chaos.md",slug:"/user_guides/podchaos_experiment",permalink:"/docs/0.9.1/user_guides/podchaos_experiment",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/versioned_docs/version-0.9.1/user_guides/pod_chaos.md",version:"0.9.1",sidebar_label:"PodChaos Experiment",sidebar:"version-0.9.1/docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/0.9.1/user_guides/run_chaos_experiment"},next:{title:"NetworkChaos Experiment",permalink:"/docs/0.9.1/user_guides/networkchaos_experiment"}},l=[{value:"<code>pod-failure</code> configuration file",id:"pod-failure-configuration-file",children:[]},{value:"<code>pod-kill</code> configuration file",id:"pod-kill-configuration-file",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document introduces how to create PodChaos experiments."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("p",{parentName:"blockquote"},"Currently, Chaos Mesh does not support simulation injection of naked pods. And it only supports some specific pods, such as ",Object(i.b)("inlineCode",{parentName:"p"},"deployment"),", ",Object(i.b)("inlineCode",{parentName:"p"},"statefulset"),", ",Object(i.b)("inlineCode",{parentName:"p"},"daemonset"),".")),Object(i.b)("p",null,"PodChaos allows you to simulate pod faults, specifically ",Object(i.b)("inlineCode",{parentName:"p"},"pod failure")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pod kill"),". ",Object(i.b)("inlineCode",{parentName:"p"},"pod failure")," can be used to simulate a situation where a pod is down. In this case, the pod is unavailable for a long time."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Pod Failure")," action periodically injects errors to pods. And it will cause pod creation failure for a while. In other words, the selected pod will be unavailable in a specified period.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Pod Kill")," action kills the specified pod (ReplicaSet or something similar might be needed to ensure the pod will be restarted)."))),Object(i.b)("h2",{id:"pod-failure-configuration-file"},Object(i.b)("inlineCode",{parentName:"h2"},"pod-failure")," configuration file"),Object(i.b)("p",null,"Below is a sample ",Object(i.b)("inlineCode",{parentName:"p"},"pod-failure")," configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-testing\nspec:\n  action: pod-failure\n  mode: one\n  value: ""\n  duration: "30s"\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n  scheduler:\n    cron: "@every 2m"\n')),Object(i.b)("p",null,"For more sample files, see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"action")," defines the specific chaos action for the pod. In this case, it is pod failure."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mode")," defines the mode to run chaos action. Supported mode: ",Object(i.b)("inlineCode",{parentName:"li"},"one")," / ",Object(i.b)("inlineCode",{parentName:"li"},"all")," / ",Object(i.b)("inlineCode",{parentName:"li"},"fixed")," / ",Object(i.b)("inlineCode",{parentName:"li"},"fixed-percent")," / ",Object(i.b)("inlineCode",{parentName:"li"},"random-max-percent"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," depends on the value of ",Object(i.b)("inlineCode",{parentName:"li"},"mode"),". If ",Object(i.b)("inlineCode",{parentName:"li"},"mode")," is ",Object(i.b)("inlineCode",{parentName:"li"},"one")," or ",Object(i.b)("inlineCode",{parentName:"li"},"all"),", leave ",Object(i.b)("inlineCode",{parentName:"li"},"value")," empty. If ",Object(i.b)("inlineCode",{parentName:"li"},"fixed"),", provide an integer of pods to do chaos action. If ",Object(i.b)("inlineCode",{parentName:"li"},"fixed-percent"),", provide a number from 0 to 100 to specify the percent of pods the server can do chaos action. If ",Object(i.b)("inlineCode",{parentName:"li"},"random-max-percent"),", provide a number from 0 to 100 to specify the max percent of pods to do chaos action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. The value of the ",Object(i.b)("inlineCode",{parentName:"li"},"duration")," field is ",Object(i.b)("inlineCode",{parentName:"li"},"30s"),", which indicates that pod failure will last 30 seconds."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"selector")," is used to select pods that are used to inject chaos actions. For more details, see ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/0.9.1/user_guides/experiment_scope"}),"Define the Scope of Chaos Experiment"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://godoc.org/github.com/robfig/cron"}),"robfig/cron"),".")),Object(i.b)("h2",{id:"pod-kill-configuration-file"},Object(i.b)("inlineCode",{parentName:"h2"},"pod-kill")," configuration file"),Object(i.b)("p",null,"Below is a sample ",Object(i.b)("inlineCode",{parentName:"p"},"pod-kill")," configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n  scheduler:\n    cron: "@every 1m"\n')),Object(i.b)("p",null,"The detailed description of each field in the configuration template are consistent with that in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#pod-failure-configuration-file"}),Object(i.b)("inlineCode",{parentName:"a"},"pod-failure")),"."))}s.isMDXComponent=!0}}]);
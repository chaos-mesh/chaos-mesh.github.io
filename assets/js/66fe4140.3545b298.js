"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5137],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?i.createElement(f,r(r({ref:n},c),{},{components:t})):i.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96463:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=["components"],l={title:"PodChaos Experiment"},s=void 0,p={unversionedId:"chaos_experiments/podchaos",id:"version-1.2.4/chaos_experiments/podchaos",isDocsHomePage:!1,title:"PodChaos Experiment",description:"This document introduces how to create PodChaos experiments.",source:"@site/versioned_docs/version-1.2.4/chaos_experiments/podchaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/podchaos",permalink:"/docs/1.2.4/chaos_experiments/podchaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/chaos_experiments/podchaos.md",tags:[],version:"1.2.4",frontMatter:{title:"PodChaos Experiment"},sidebar:"version-1.2.4/docs",previous:{title:"Chaos Dashboard",permalink:"/docs/1.2.4/user_guides/dashboard"},next:{title:"NetworkChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/networkchaos"}},c=[{value:"<code>pod-failure</code> configuration file",id:"pod-failure-configuration-file",children:[],level:2},{value:"<code>pod-kill</code> configuration file",id:"pod-kill-configuration-file",children:[],level:2},{value:"<code>container-kill</code> configuration file",id:"container-kill-configuration-file",children:[],level:2},{value:"Fields description",id:"fields-description",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document introduces how to create PodChaos experiments."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"Currently, Chaos Mesh does not support simulation injection of naked pods. And it only supports some specific pods, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"statefulset"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"daemonset"),".")),(0,a.kt)("p",null,"PodChaos allows you to simulate pod faults or specific container issue, specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"pod failure"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pod kill")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"container kill"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"pod failure")," can be used to simulate a situation where a pod is down. In this case, the pod is unavailable for a long time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Pod Failure")," action periodically injects errors to pods. And it will cause pod creation failure for a while. In other words, the selected pod will be unavailable in a specified period.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Pod Kill")," action kills the specified pod (ReplicaSet or something similar might be needed to ensure the pod will be restarted).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Container Kill")," action kills the specified container in the target pods."))),(0,a.kt)("h2",{id:"pod-failure-configuration-file"},(0,a.kt)("inlineCode",{parentName:"h2"},"pod-failure")," configuration file"),(0,a.kt)("p",null,"Below is a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-failure")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-testing\nspec:\n  action: pod-failure\n  mode: one\n  value: ''\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 2m'\n")),(0,a.kt)("p",null,"For more sample files, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,a.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,a.kt)("a",{parentName:"p",href:"#fields-description"},(0,a.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,a.kt)("h2",{id:"pod-kill-configuration-file"},(0,a.kt)("inlineCode",{parentName:"h2"},"pod-kill")," configuration file"),(0,a.kt)("p",null,"Below is a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-kill")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 1m'\n")),(0,a.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,a.kt)("a",{parentName:"p",href:"#fields-description"},(0,a.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,a.kt)("h2",{id:"container-kill-configuration-file"},(0,a.kt)("inlineCode",{parentName:"h2"},"container-kill")," configuration file"),(0,a.kt)("p",null,"Below is a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"container-kill")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-testing\nspec:\n  action: container-kill\n  mode: one\n  containerName: 'prometheus'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n  scheduler:\n    cron: '@every 30s'\n")),(0,a.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,a.kt)("a",{parentName:"p",href:"#fields-description"},(0,a.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,a.kt)("h2",{id:"fields-description"},"Fields description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"action")," defines the specific chaos action for the Pod. In this case, it is a Pod failure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," defines the mode to run chaos action. Supported mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"one")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"all")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"fixed")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"fixed-percent")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"random-max-percent"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," depends on the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"mode"),". If ",(0,a.kt)("inlineCode",{parentName:"li"},"mode")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"one")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"all"),", leave ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," empty. If ",(0,a.kt)("inlineCode",{parentName:"li"},"fixed"),", provide an integer of pods to do chaos action. If ",(0,a.kt)("inlineCode",{parentName:"li"},"fixed-percent"),", provide a number from 0 to 100 to specify the percent of pods the server can do chaos action. If ",(0,a.kt)("inlineCode",{parentName:"li"},"random-max-percent"),", provide a number from 0 to 100 to specify the max percent of pods to do chaos action."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"selector")," specifies the target pods for chaos injections. For more details, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"containerName")," defines the target container name, it is needed by container kill action."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gracePeriod")," defines the duration in seconds before the pod should be deleted. It is used in pod-kill action, and its value must be non-negative integer. The default value is zero that indicates delete immediately."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"30s"),", which indicates that pod failure will last for 30 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,a.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"),".")))}m.isMDXComponent=!0}}]);
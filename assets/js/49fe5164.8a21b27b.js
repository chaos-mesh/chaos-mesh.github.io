"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5583],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"NetworkChaos Experiment"},l=void 0,p={unversionedId:"chaos_experiments/networkchaos",id:"version-1.2.4/chaos_experiments/networkchaos",isDocsHomePage:!1,title:"NetworkChaos Experiment",description:"This document describes how to create NetworkChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.2.4/chaos_experiments/networkchaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/networkchaos",permalink:"/docs/1.2.4/chaos_experiments/networkchaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/chaos_experiments/networkchaos.md",tags:[],version:"1.2.4",frontMatter:{title:"NetworkChaos Experiment"},sidebar:"version-1.2.4/docs",previous:{title:"PodChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/podchaos"},next:{title:"StressChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/stresschaos"}},c=[{value:"Network Partition Action",id:"network-partition-action",children:[],level:2},{value:"Netem Chaos Actions",id:"netem-chaos-actions",children:[{value:"Network Loss",id:"network-loss",children:[],level:3},{value:"Network Delay",id:"network-delay",children:[],level:3},{value:"Network Duplicate",id:"network-duplicate",children:[],level:3},{value:"Network Corrupt",id:"network-corrupt",children:[],level:3}],level:2},{value:"Network Bandwidth Action",id:"network-bandwidth-action",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to create NetworkChaos experiments in Chaos Mesh."),(0,o.kt)("p",null,"NetworkChaos actions are divided into two categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Network Partition")," action separates pods into several independent subnets by blocking communication between them.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Network Emulation (Netem) Chaos")," actions cover regular network faults, such as network delay, duplication, loss, and corruption."))),(0,o.kt)("h2",{id:"network-partition-action"},"Network Partition Action"),(0,o.kt)("p",null,"Below is a sample network partition configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-partition-example\n  namespace: chaos-testing\nspec:\n  action: partition\n  mode: one\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  direction: to\n  target:\n    selector:\n      namespaces:\n        - tidb-cluster-demo\n      labelSelectors:\n        'app.kubernetes.io/component': 'tikv'\n    mode: one\n  duration: '10s'\n  scheduler:\n    cron: '@every 15s'\n")),(0,o.kt)("p",null,"For more sample files, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,o.kt)("p",null,"Description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"action")," defines the specific chaos action for the pod. In this case, it is network partition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mode")," defines the mode to run chaos action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"selector")," specifies the target pods for chaos injection. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.2.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"direction")," specifies the partition direction. Supported directions are ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"both"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"target")," specifies the targets for network chaos action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"externalTargets")," specifies the targets outside the Kubernetes cluster for network chaos action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. In the sample file above, the network partition lasts for ",(0,o.kt)("inlineCode",{parentName:"li"},"10")," seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"),".")),(0,o.kt)("h2",{id:"netem-chaos-actions"},"Netem Chaos Actions"),(0,o.kt)("p",null,"There are 4 cases for netem chaos actions, namely loss, delay, duplicate, and corrupt."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"The detailed description of each field in the configuration template are consistent with that in ",(0,o.kt)("a",{parentName:"p",href:"#network-partition-action"},"Network Partition"),".")),(0,o.kt)("h3",{id:"network-loss"},"Network Loss"),(0,o.kt)("p",null,"A Network Loss action causes network packets to drop randomly. To add a Network Loss action, locate and edit the corresponding template in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-loss-example.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"/examples")),"."),(0,o.kt)("p",null,"In this case, two action specific attributes are required - loss and correlation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"loss:\n  loss: '25'\n  correlation: '25'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"loss")," defines the percentage of packet loss."),(0,o.kt)("p",null,"NetworkChaos variation is not purely random, so to emulate that there is a correlation value as well."),(0,o.kt)("h3",{id:"network-delay"},"Network Delay"),(0,o.kt)("p",null,"A Network Delay action causes delays in message sending. To add a Network Delay action, locate and edit the corresponding template in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-delay-example.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"/examples")),"."),(0,o.kt)("p",null,"In this case, three action specific attributes are required - correlation, jitter, and latency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"delay:\n  latency: '90ms'\n  correlation: '25'\n  jitter: '90ms'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"latency")," defines the delay time in sending packets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"jitter")," specifies the jitter of the delay time. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"0ms"),". Jitter is also referred technically as packet delay variation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"correlation")," specifies the correlation of the jitter. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"In the above example, the network latency is 90ms \xb1 90ms with 25% correlation."),(0,o.kt)("p",null,"For a better understanding of Jitter, Latency and Network Delay, you can read ",(0,o.kt)("a",{parentName:"p",href:"https://www.speedcheck.org/wiki/jitter/"},"this article"),"."),(0,o.kt)("h3",{id:"network-duplicate"},"Network Duplicate"),(0,o.kt)("p",null,"A Network Duplicate action causes packet duplication. To add a Network Duplicate action, locate and edit the corresponding template in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-duplicate-example.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"/examples")),"."),(0,o.kt)("p",null,"In this case, two attributes are required - correlation and duplicate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"duplicate:\n  duplicate: '40'\n  correlation: '25'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"duplicate")," indicates the percentage of packet duplication. In the above example, the duplication rate is 40%."),(0,o.kt)("h3",{id:"network-corrupt"},"Network Corrupt"),(0,o.kt)("p",null,"A Network Corrupt action causes packet corruption. To add a Network Corrupt action, locate and edit the corresponding template in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-corrupt-example.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"/examples")),"."),(0,o.kt)("p",null,"In this case, two action specific attributes are required - correlation and corrupt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"corrupt:\n  corrupt: '40'\n  correlation: '25'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"corrupt")," specifies the percentage of packet corruption."),(0,o.kt)("h2",{id:"network-bandwidth-action"},"Network Bandwidth Action"),(0,o.kt)("p",null,"Network Bandwidth Action is used to limit the network bandwidth. To add a Network Bandwidth Action, locate and edit the corresponding template in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-bandwidth-example.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"/examples")),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"Minikube does not support this feature as ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_NET_SCH_TBF")," is disabled in Minikube's image.")),(0,o.kt)("p",null,"To inject Network Bandwidth fault, three action specific attributes are required - rate, buffer and limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"bandwidth:\n  rate: 10 kbps\n  buffer: 1000\n  limit: 100\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rate"),' allows "bps", "kbps", "mbps", "gbps", "tbps" unit. "bps" means bytes per second.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"limit")," defines the number of bytes that can be queued waiting for tokens to become available."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"buffer")," is the maximum amount of bytes that tokens can be available for instantaneously."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"peakrate")," is the maximum depletion rate of the bucket."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"minburst")," specifies the size of the peakrate bucket."))}u.isMDXComponent=!0}}]);
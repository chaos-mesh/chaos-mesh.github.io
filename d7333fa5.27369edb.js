(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(201)),i={id:"networkchaos_experiment",title:"NetworkChaos Experiment",sidebar_label:"NetworkChaos Experiment"},c={unversionedId:"user_guides/networkchaos_experiment",id:"version-1.0.0/user_guides/networkchaos_experiment",isDocsHomePage:!1,title:"NetworkChaos Experiment",description:"This document describes how to create NetworkChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.0.0/user_guides/network_chaos.md",slug:"/user_guides/networkchaos_experiment",permalink:"/docs/1.0.0/user_guides/networkchaos_experiment",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/versioned_docs/version-1.0.0/user_guides/network_chaos.md",version:"1.0.0",sidebar_label:"NetworkChaos Experiment",sidebar:"version-1.0.0/docs",previous:{title:"PodChaos Experiment",permalink:"/docs/1.0.0/user_guides/podchaos_experiment"},next:{title:"StressChaos Experiment",permalink:"/docs/1.0.0/user_guides/stresschaos_experiment"}},s=[{value:"Network Partition Action",id:"network-partition-action",children:[]},{value:"Netem Chaos Actions",id:"netem-chaos-actions",children:[{value:"Network Loss",id:"network-loss",children:[]},{value:"Network Delay",id:"network-delay",children:[]},{value:"Network Duplicate",id:"network-duplicate",children:[]},{value:"Network Corrupt",id:"network-corrupt",children:[]}]},{value:"Network Bandwidth Action",id:"network-bandwidth-action",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to create NetworkChaos experiments in Chaos Mesh."),Object(o.b)("p",null,"NetworkChaos actions are divided into two categories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Network Partition")," action separates pods into several independent subnets by blocking communication between them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Network Emulation (Netem) Chaos")," actions cover regular network faults, such as network delay, duplication, loss, and corruption."))),Object(o.b)("h2",{id:"network-partition-action"},"Network Partition Action"),Object(o.b)("p",null,"Below is a sample network partition configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-partition-example\n  namespace: chaos-testing\nspec:\n  action: partition\n  mode: one\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n  direction: to\n  target:\n    selector:\n      namespaces:\n        - tidb-cluster-demo\n      labelSelectors:\n        "app.kubernetes.io/component": "tikv"\n    mode: one\n  duration: "10s"\n  scheduler:\n    cron: "@every 15s"\n')),Object(o.b)("p",null,"For more sample files, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(o.b)("p",null,"Description:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"action")," defines the specific chaos action for the pod. In this case, it is network partition."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mode")," defines the mode to run chaos action."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"selector")," specifies the target pods for chaos injection. For more details, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0.0/user_guides/experiment_scope"}),"Define the Scope of Chaos Experiment"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"direction")," specifies the partition direction. Supported directions are ",Object(o.b)("inlineCode",{parentName:"li"},"from"),", ",Object(o.b)("inlineCode",{parentName:"li"},"to")," and ",Object(o.b)("inlineCode",{parentName:"li"},"both"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"target")," specifies the target for network partition."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. In the sample file above, the network partition lasts for ",Object(o.b)("inlineCode",{parentName:"li"},"10")," seconds."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://godoc.org/github.com/robfig/cron"}),"robfig/cron"),".")),Object(o.b)("h2",{id:"netem-chaos-actions"},"Netem Chaos Actions"),Object(o.b)("p",null,"There are 4 cases for netem chaos actions, namely loss, delay, duplicate, and corrupt."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"The detailed description of each field in the configuration template are consistent with that in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#network-partition-action"}),"Network Partition"),".")),Object(o.b)("h3",{id:"network-loss"},"Network Loss"),Object(o.b)("p",null,"A Network Loss action causes network packets to drop randomly. To add a Network Loss action, locate and edit the corresponding template in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-loss-example.yaml"}),"/examples"),"."),Object(o.b)("p",null,"In this case, two action specific attributes are required - loss and correlation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'loss:\n  loss: "25"\n  correlation: "25"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"loss")," defines the percentage of packet loss."),Object(o.b)("p",null,"NetworkChaos variation is not purely random, so to emulate that there is a correlation value as well."),Object(o.b)("h3",{id:"network-delay"},"Network Delay"),Object(o.b)("p",null,"A Network Delay action causes delays in message sending. To add a Network Delay action, locate and edit the corresponding template in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-delay-example.yaml"}),"/examples"),"."),Object(o.b)("p",null,"In this case, three action specific attributes are required - correlation, jitter, and latency."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'delay:\n  latency: "90ms"\n  correlation: "25"\n  jitter: "90ms"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"latency")," defines the delay time in sending packets."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"jitter")," specifies the jitter of the delay time. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"0ms"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"correlation")," specifies the correlation of the jitter. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("p",null,"In the above example, the network latency is 90ms \xb1 90ms with 25% correlation."),Object(o.b)("h3",{id:"network-duplicate"},"Network Duplicate"),Object(o.b)("p",null,"A Network Duplicate action causes packet duplication. To add a Network Duplicate action, locate and edit the corresponding template in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-duplicate-example.yaml"}),"/examples"),"."),Object(o.b)("p",null,"In this case, two attributes are required - correlation and duplicate."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'duplicate:\n  duplicate: "40"\n  correlation: "25"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"duplicate")," indicates the percentage of packet duplication. In the above example, the duplication rate is 40%."),Object(o.b)("h3",{id:"network-corrupt"},"Network Corrupt"),Object(o.b)("p",null,"A Network Corrupt action causes packet corruption. To add a Network Corrupt action, locate and edit the corresponding template in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-corrupt-example.yaml"}),"/examples"),"."),Object(o.b)("p",null,"In this case, two action specific attributes are required - correlation and corrupt."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'corrupt:\n  corrupt: "40"\n  correlation: "25"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"corrupt")," specifies the percentage of packet corruption."),Object(o.b)("h2",{id:"network-bandwidth-action"},"Network Bandwidth Action"),Object(o.b)("p",null,"Network Bandwidth Action is used to limit the network bandwidth. To add a Network Bandwidth Action, locate and edit the corresponding template in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/network-bandwidth-example.yaml"}),"/examples"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"Minikube does not support this feature as ",Object(o.b)("inlineCode",{parentName:"p"},"CONFIG_NET_SCH_TBF")," is disabled in Minikube's image.")),Object(o.b)("p",null,"To inject Network Bandwidth fault, three action specific attributes are required - rate, buffer and limit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"})," bandwidth:\n   rate: 10 kbps\n   buffer: 1000\n   limit: 100\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"rate"),' allows "bps", "kbps", "mbps", "gbps", "tbps" unit. "bps" means bytes per second.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"limit")," defines the number of bytes that can be queued waiting for tokens to become available."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"buffer")," is the maximum amount of bytes that tokens can be available for instantaneously."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"peakrate")," is the maximum depletion rate of the bucket."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"minburst")," specifies the size of the peakrate bucket."))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),s=(n(0),n(229)),o={id:"stresschaos_experiment",title:"StressChaos Experiment",sidebar_label:"StressChaos Experiment"},i={unversionedId:"chaos_experiments/stresschaos_experiment",id:"version-1.0.3/chaos_experiments/stresschaos_experiment",isDocsHomePage:!1,title:"StressChaos Experiment",description:"This document helps you create StressChaos experiments.",source:"@site/versioned_docs/version-1.0.3/chaos_experiments/stress_chaos.md",slug:"/chaos_experiments/stresschaos_experiment",permalink:"/docs/1.0.3/chaos_experiments/stresschaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/chaos_experiments/stress_chaos.md",version:"1.0.3",sidebar_label:"StressChaos Experiment",sidebar:"version-1.0.3/docs",previous:{title:"NetworkChaos Experiment",permalink:"/docs/1.0.3/chaos_experiments/networkchaos_experiment"},next:{title:"TimeChaos Experiment",permalink:"/docs/1.0.3/chaos_experiments/timechaos_experiment"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document helps you create StressChaos experiments."),Object(s.b)("p",null,"StressChaos can generate plenty of stresses over a collection of pods. The stressors is injected into the target pods via the ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-daemon")," internally."),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"A StressChaos shares common configurations like other chaos, such as how to select pods, how to specify periodic chaos. You can refer to other docs for details. It defines stressors in ",Object(s.b)("strong",{parentName:"p"},"either")," of the following two ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"stressors")),Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"Stressors")," defines a plenty of stressors supported to stress system components out. You can use one or more of them to make up various kinds of stresses. At least one of the stressors should be specified. The following is supported stressors for now:"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"memory")),Object(s.b)("p",{parentName:"li"},"A ",Object(s.b)("inlineCode",{parentName:"p"},"memory")," stressor will continuously stress virtual memory out."),Object(s.b)("table",{parentName:"li"},Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Option"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"workers")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Integer"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"True"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies concurrent stressing instance."))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"cpu")),Object(s.b)("p",{parentName:"li"},"A ",Object(s.b)("inlineCode",{parentName:"p"},"cpu")," stressor will continuously stress CPU out."),Object(s.b)("table",{parentName:"li"},Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Option"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"workers")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Integer"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"True"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies concurrent stressing instance. Actually it specifies how many CPUs to stress when it's less than available CPUs.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"load")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Integer"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"False"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies percent loading per worker. 0 is effectively a sleep (no load) and 100 is full loading."))))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"stressngStressors")),Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"StressngStressors")," defines a plenty of stressors just like ",Object(s.b)("inlineCode",{parentName:"p"},"Stressors")," except that it's an experimental feature and more powerful."),Object(s.b)("p",{parentName:"li"},"You can define stressors in ",Object(s.b)("inlineCode",{parentName:"p"},"stress-ng")," (see also ",Object(s.b)("inlineCode",{parentName:"p"},"man stress-ng"),") dialect."),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Note:")),Object(s.b)("p",{parentName:"blockquote"},"However, not all of the supported stressors are well tested. It might be retired in later releases. Therefore, it is recommended to use ",Object(s.b)("inlineCode",{parentName:"p"},"Stressors")," to define the stressors and use this only when you want more stressors unsupported by ",Object(s.b)("inlineCode",{parentName:"p"},"Stressors"),".")),Object(s.b)("p",{parentName:"li"},"When both ",Object(s.b)("inlineCode",{parentName:"p"},"StressngStressors")," and ",Object(s.b)("inlineCode",{parentName:"p"},"Stressors")," are defined, ",Object(s.b)("inlineCode",{parentName:"p"},"StressngStressors")," wins."))),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"Below is an example YAML file of StressChaos which is set to burn 1 CPU for 30 seconds in every 2 minutes:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n  stressors:\n    cpu:\n      workers: 1\n  duration: '30s'\n  scheduler:\n    cron: '@every 2m'\n")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create a namespace for your application. For example, ",Object(s.b)("inlineCode",{parentName:"p"},"tidb-cluster-demo"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns tidb-cluster-demo\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create your pods in the target namespace:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f *your-pods.yaml*\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Inject a StressChaos:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f *your-stress-chaos.yaml*\n")))),Object(s.b)("p",null,"Then, your pod's CPU will burn for 30 seconds."))}b.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||s;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
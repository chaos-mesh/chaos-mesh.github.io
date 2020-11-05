(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(2),i=n(6),a=(n(0),n(205)),o={id:"timechaos_experiment",title:"TimeChaos Experiment",sidebar_label:"TimeChaos Experiment"},s={unversionedId:"user_guides/timechaos_experiment",id:"version-1.0.0/user_guides/timechaos_experiment",isDocsHomePage:!1,title:"TimeChaos Experiment",description:"This document describe how to add TimeChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.0.0/user_guides/time_chaos.md",slug:"/user_guides/timechaos_experiment",permalink:"/docs/1.0.0/user_guides/timechaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.0/user_guides/time_chaos.md",version:"1.0.0",sidebar_label:"TimeChaos Experiment",sidebar:"version-1.0.0/docs",previous:{title:"StressChaos Experiment",permalink:"/docs/1.0.0/user_guides/stresschaos_experiment"},next:{title:"IOChaos Experiment",permalink:"/docs/1.0.0/user_guides/iochaos_experiment"}},c=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Limitation",id:"limitation",children:[]}],l={rightToc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document describe how to add TimeChaos experiments in Chaos Mesh."),Object(a.b)("p",null,"TimeChaos is used to modify the return value of ",Object(a.b)("inlineCode",{parentName:"p"},"clock_gettime"),", which causes time offset on Go's ",Object(a.b)("inlineCode",{parentName:"p"},"time.Now()")," and Rust std's ",Object(a.b)("inlineCode",{parentName:"p"},"std::time::Instant::now()")," etc."),Object(a.b)("h2",{id:"configuration-file"},"Configuration file"),Object(a.b)("p",null,"Below is a sample TimeChaos configuration file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "pd"\n  timeOffset: "-10m100ns"\n  clockIds:\n    - CLOCK_REALTIME\n  containerNames:\n    - pd\n  duration: "10s"\n  scheduler:\n    cron: "@every 15s"\n')),Object(a.b)("p",null,"For more sample files, see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(a.b)("p",null,"Description:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"mode")," defines the mode to select pods."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"selector")," specifies the target pods for chaos injection. For more details, see ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/user_guides/experiment_scope"}),"Define the Scope of Chaos Experiment"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"timeOffset")," specifies the time offset. It is a duration string with specified unit, such as ",Object(a.b)("inlineCode",{parentName:"li"},"300ms"),", ",Object(a.b)("inlineCode",{parentName:"li"},"-1.5h"),'. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", "h".'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"clockIds")," defines all affected ",Object(a.b)("inlineCode",{parentName:"li"},"clk_id"),". ",Object(a.b)("inlineCode",{parentName:"li"},"clk_id")," refers to the first argument of ",Object(a.b)("inlineCode",{parentName:"li"},"clock_gettime")," call. For most application, ",Object(a.b)("inlineCode",{parentName:"li"},"CLOCK_REALTIME")," is enough."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"containerNames")," selects affected containers' names. If not set, all containers will be injected."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. In the sample file above, the time chaos lasts for 10 seconds."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://godoc.org/github.com/robfig/cron"}),"robfig/cron"),".")),Object(a.b)("h2",{id:"limitation"},"Limitation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Time modification can only be injected into the main process of container."),Object(a.b)("li",{parentName:"ul"},"Time chaos has no effect on pure system call ",Object(a.b)("inlineCode",{parentName:"li"},"clock_gettime"),"."),Object(a.b)("li",{parentName:"ul"},"All injected ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/vdso.7.html"}),"vDSO")," calls use pure system calls to get the real time, so clock-related function calls can be much slower.")))}m.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(d,s(s({ref:t},l),{},{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
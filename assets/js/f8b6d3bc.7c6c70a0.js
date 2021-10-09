"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"TimeChaos Experiment"},l=void 0,c={unversionedId:"chaos_experiments/timechaos",id:"version-1.2.3/chaos_experiments/timechaos",isDocsHomePage:!1,title:"TimeChaos Experiment",description:"This document describe how to add TimeChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.2.3/chaos_experiments/timechaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/timechaos",permalink:"/docs/1.2.3/chaos_experiments/timechaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/chaos_experiments/timechaos.md",tags:[],version:"1.2.3",frontMatter:{title:"TimeChaos Experiment"},sidebar:"version-1.2.3/docs",previous:{title:"StressChaos Experiment",permalink:"/docs/1.2.3/chaos_experiments/stresschaos"},next:{title:"IOChaos Experiment",permalink:"/docs/1.2.3/chaos_experiments/iochaos"}},m=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Limitation",id:"limitation",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describe how to add TimeChaos experiments in Chaos Mesh."),(0,o.kt)("p",null,"TimeChaos is used to modify the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"clock_gettime"),", which causes time offset on Go's ",(0,o.kt)("inlineCode",{parentName:"p"},"time.Now()")," and Rust std's ",(0,o.kt)("inlineCode",{parentName:"p"},"std::time::Instant::now()")," etc."),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Below is a sample TimeChaos configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'pd'\n  timeOffset: '-10m100ns'\n  clockIds:\n    - CLOCK_REALTIME\n  containerNames:\n    - pd\n  duration: '10s'\n  scheduler:\n    cron: '@every 15s'\n")),(0,o.kt)("p",null,"For more sample files, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,o.kt)("p",null,"Description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mode")," defines the mode to select pods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"selector")," specifies the target pods for chaos injection. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.2.3/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"timeOffset")," specifies the time offset. It is a duration string with specified unit, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"300ms"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-1.5h"),'. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", "h".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"clockIds")," defines all affected ",(0,o.kt)("inlineCode",{parentName:"li"},"clk_id"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"clk_id")," refers to the first argument of ",(0,o.kt)("inlineCode",{parentName:"li"},"clock_gettime")," call. For most application, ",(0,o.kt)("inlineCode",{parentName:"li"},"CLOCK_REALTIME")," is enough."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"containerNames")," selects affected containers' names. If not set, all containers will be injected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment. In the sample file above, the time chaos lasts for 10 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"),".")),(0,o.kt)("h2",{id:"limitation"},"Limitation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time modification can only be injected into the main process of container."),(0,o.kt)("li",{parentName:"ul"},"Time chaos has no effect on pure system call ",(0,o.kt)("inlineCode",{parentName:"li"},"clock_gettime"),"."),(0,o.kt)("li",{parentName:"ul"},"All injected ",(0,o.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/vdso.7.html"},"vDSO")," calls use pure system calls to get the real time, so clock-related function calls can be much slower.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8496],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=s,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),i={title:"Inspect Results of Chaos Experiments"},o=void 0,c={unversionedId:"inspect-chaos-experiments",id:"version-2.0.1/inspect-chaos-experiments",isDocsHomePage:!1,title:"Inspect Results of Chaos Experiments",description:"This document describes how to use Chaos Mesh to check running status and results of chaos experiments.",source:"@site/versioned_docs/version-2.0.1/inspect-chaos-experiments.md",sourceDirName:".",slug:"/inspect-chaos-experiments",permalink:"/docs/inspect-chaos-experiments",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/inspect-chaos-experiments.md",tags:[],version:"2.0.1",frontMatter:{title:"Inspect Results of Chaos Experiments"},sidebar:"version-2.0.1/docs",previous:{title:"Run a Chaos Experiment",permalink:"/docs/run-a-chaos-experiment"},next:{title:"Clean up Chaos Experiments",permalink:"/docs/clean-up-chaos-experiments"}},l=[{value:"Introduction to steps of a chaos experiment",id:"introduction-to-steps-of-a-chaos-experiment",children:[]},{value:"Check results using Chaos Dashboard",id:"check-results-using-chaos-dashboard",children:[]},{value:"Check results using the <code>kubectl</code> command",id:"check-results-using-the-kubectl-command",children:[]}],p={toc:l};function u(e){var t=e.components,i=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use Chaos Mesh to check running status and results of chaos experiments."),(0,r.kt)("h2",{id:"introduction-to-steps-of-a-chaos-experiment"},"Introduction to steps of a chaos experiment"),(0,r.kt)("p",null,"In Chaos Mesh, the life cycle of a chaos experiment is divided into four steps, according to its running process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Injecting: Chaos experiment is in the process of fault injection. Normally, this step lasts for a short time. If the "Injecting" step lasts a long time, it may be due to some exceptions in the chaos experiment. In this case, you can check ',(0,r.kt)("inlineCode",{parentName:"li"},"Events")," to find the cause of the exceptions."),(0,r.kt)("li",{parentName:"ul"},"Running: After the faults have been successfully injected into all target pods, the chaos experiment starts running."),(0,r.kt)("li",{parentName:"ul"},"Paused: when executing a ",(0,r.kt)("a",{parentName:"li",href:"/docs/run-a-chaos-experiment/#pause-chaos-experiments"},"paused")," process for a running chaos experiment, Chaos Mesh restores the injected faults from all target pods, which indicates the experiment is paused."),(0,r.kt)("li",{parentName:"ul"},"Finished: if the ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," parameter of the experiment is configured, and when the experiment runs it up, Chaos Mesh restores the injected faults from all target pods, which indicates that the experiment is finished.")),(0,r.kt)("h2",{id:"check-results-using-chaos-dashboard"},"Check results using Chaos Dashboard"),(0,r.kt)("p",null,"You can check the running steps of chaos experiments on any of the following pages using Chaos Dashboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List of chaos experiments:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experimental Status",src:n(38124).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Details of chaos experiments:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experimental Status",src:n(74684).Z})))),(0,r.kt)("p",null,":::Note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("strong",{parentName:"li"},'"Injecting"')," step lasts for a long time, it may be due to some anomalies in the chaos experiment (e.g. the configured selectors have not selected target pods where to inject chaos actions). In this case, you can check ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Events"))," to find the cause of the exceptions and check the configuration of the chaos experiment."),(0,r.kt)("li",{parentName:"ul"},"Chaos Dashboard only displays ",(0,r.kt)("a",{parentName:"li",href:"#Introduction-to-steps-of-a-Chaos-experiment"},"main steps of a chaos experiment"),". For more detailed information about experiment status and results, run the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," command.")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"check-results-using-the-kubectl-command"},"Check results using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")," command"),(0,r.kt)("p",null,"To confirm the results of chaos experiments, use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," of experiment objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n")),(0,r.kt)("p",null,"The expected output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n")),(0,r.kt)("p",null,"The above output contains two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Status")),(0,r.kt)("p",{parentName:"li"},"Based on the running process of the chaos experiment, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," provides four types of status records:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Paused"),': indicates the chaos experiment is in the "Paused" step.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Selected"),": indicates the chaos experiment had correctly selected the target pods where to inject chaos actions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AllInjected"),": indicates the faults have been successfully injected to all target pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AllRecoverd"),": indicates the injected faults have been succesfully restored from all target pods.")),(0,r.kt)("p",{parentName:"li"},"The actual running status of current chaos experiments can be inferred from these four types of status records. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"Paused"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Selected"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"AllRecoverd")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AllInjected")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),", it indicates the current chaos experiment is paused."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"Paused")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", it indicates the current chaos experiment is paused. However, if the ",(0,r.kt)("inlineCode",{parentName:"li"},"Selected")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions.")),(0,r.kt)("p",{parentName:"li"},":::Note"),(0,r.kt)("p",{parentName:"li"},"You can get more information from the combination of the above status records, for example, when ",(0,r.kt)("inlineCode",{parentName:"p"},"Paused")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", it indicates the experiment is paused, but if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Selected")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions."),(0,r.kt)("p",{parentName:"li"},":::")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Events")),(0,r.kt)("p",{parentName:"li"},"It contains the records of actions conducted during the whole life cycle of a chaos experiment, which can help to check experiment status and troubleshoot issues."))))}u.isMDXComponent=!0},74684:function(e,t,n){t.Z=n.p+"assets/images/chaos_detail_status-171482b3cd8c1e3759a52e4fd6860875.png"},38124:function(e,t,n){t.Z=n.p+"assets/images/list_chaos_status-478857ce5a06cb75eabc4d3a980a91e0.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const i={title:"Inspect Results of Chaos Experiments"},r=void 0,o={unversionedId:"inspect-chaos-experiments",id:"version-2.2.2/inspect-chaos-experiments",title:"Inspect Results of Chaos Experiments",description:"This document describes how to use Chaos Mesh to check running status and results of chaos experiments.",source:"@site/versioned_docs/version-2.2.2/inspect-chaos-experiments.md",sourceDirName:".",slug:"/inspect-chaos-experiments",permalink:"/docs/2.2.2/inspect-chaos-experiments",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.2/inspect-chaos-experiments.md",tags:[],version:"2.2.2",frontMatter:{title:"Inspect Results of Chaos Experiments"},sidebar:"version-2.2.2/docs",previous:{title:"Run a Chaos Experiment",permalink:"/docs/2.2.2/run-a-chaos-experiment"},next:{title:"Create Chaos Mesh Workflow",permalink:"/docs/2.2.2/create-chaos-mesh-workflow"}},l={},c=[{value:"Introduction to steps of a chaos experiment",id:"introduction-to-steps-of-a-chaos-experiment",level:2},{value:"Check results using Chaos Dashboard",id:"check-results-using-chaos-dashboard",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to use Chaos Mesh to check running status and results of chaos experiments."),(0,s.kt)("h2",{id:"introduction-to-steps-of-a-chaos-experiment"},"Introduction to steps of a chaos experiment"),(0,s.kt)("p",null,"In Chaos Mesh, the life cycle of a chaos experiment is divided into four steps, according to its running process:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Injecting: Chaos experiment is in the process of fault injection. Normally, this step lasts for a short time. If the "Injecting" step lasts a long time, it may be due to some exceptions in the chaos experiment. In this case, you can check ',(0,s.kt)("inlineCode",{parentName:"li"},"Events")," to find the cause of the exceptions."),(0,s.kt)("li",{parentName:"ul"},"Running: After the faults have been successfully injected into all target pods, the chaos experiment starts running."),(0,s.kt)("li",{parentName:"ul"},"Paused: when executing a ",(0,s.kt)("a",{parentName:"li",href:"/docs/2.2.2/run-a-chaos-experiment#pause-chaos-experiments"},"paused")," process for a running chaos experiment, Chaos Mesh restores the injected faults from all target pods, which indicates the experiment is paused."),(0,s.kt)("li",{parentName:"ul"},"Finished: if the ",(0,s.kt)("inlineCode",{parentName:"li"},"duration")," parameter of the experiment is configured, and when the experiment runs it up, Chaos Mesh restores the injected faults from all target pods, which indicates that the experiment is finished.")),(0,s.kt)("h2",{id:"check-results-using-chaos-dashboard"},"Check results using Chaos Dashboard"),(0,s.kt)("p",null,"You can check the running steps of chaos experiments on any of the following pages using Chaos Dashboard:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"List of chaos experiments:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Experimental Status",src:n(51991).Z,width:"1760",height:"648"}))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Details of chaos experiments:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Experimental Status",src:n(67443).Z,width:"1680",height:"762"})))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"If the ",(0,s.kt)("strong",{parentName:"li"},'"Injecting"')," step lasts for a long time, it may be due to some anomalies in the chaos experiment (e.g. the configured selectors have not selected target pods where to inject chaos actions). In this case, you can check ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"Events"))," to find the cause of the exceptions and check the configuration of the chaos experiment."),(0,s.kt)("li",{parentName:"ul"},"Chaos Dashboard only displays ",(0,s.kt)("a",{parentName:"li",href:"#Introduction-to-steps-of-a-Chaos-experiment"},"main steps of a chaos experiment"),". For more detailed information about experiment status and results, run the ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl")," command. :::")),(0,s.kt)("h2",{parentName:"admonition",id:"check-results-using-the-kubectl-command"},"Check results using the ",(0,s.kt)("inlineCode",{parentName:"h2"},"kubectl")," command"),(0,s.kt)("p",{parentName:"admonition"},"To confirm the results of chaos experiments, use the following ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,s.kt)("inlineCode",{parentName:"p"},"Status")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Events")," of experiment objects."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n")),(0,s.kt)("p",{parentName:"admonition"},"The expected output is as follows:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n")),(0,s.kt)("p",{parentName:"admonition"},"The above output contains two parts:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Status")),(0,s.kt)("p",{parentName:"li"},"Based on the running process of the chaos experiment, the ",(0,s.kt)("inlineCode",{parentName:"p"},"Status")," provides four types of status records:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Paused"),': indicates the chaos experiment is in the "Paused" step.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Selected"),": indicates the chaos experiment had correctly selected the target pods where to inject chaos actions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"AllInjected"),": indicates the faults have been successfully injected to all target pods."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"AllRecoverd"),": indicates the injected faults have been succesfully restored from all target pods.")),(0,s.kt)("p",{parentName:"li"},"The actual running status of current chaos experiments can be inferred from these four types of status records. For example:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"Paused"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"Selected"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"AllRecoverd")," is ",(0,s.kt)("inlineCode",{parentName:"li"},"True")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"AllInjected")," is ",(0,s.kt)("inlineCode",{parentName:"li"},"False"),", it indicates the current chaos experiment is paused."),(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"Paused")," is ",(0,s.kt)("inlineCode",{parentName:"li"},"True"),", it indicates the current chaos experiment is paused. However, if the ",(0,s.kt)("inlineCode",{parentName:"li"},"Selected")," is ",(0,s.kt)("inlineCode",{parentName:"li"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions.")),(0,s.kt)("admonition",{parentName:"li",type:"note"},(0,s.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"You can get more information from the combination of the above status records, for example, when ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Paused")," is ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"True"),", it indicates the experiment is paused, but if the ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Selected")," is ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions. :::"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Events")),(0,s.kt)("p",{parentName:"li"},"It contains the records of actions conducted during the whole life cycle of a chaos experiment, which can help to check experiment status and troubleshoot issues.")))))}d.isMDXComponent=!0},67443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chaos_detail_status-171482b3cd8c1e3759a52e4fd6860875.png"},51991:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list_chaos_status-478857ce5a06cb75eabc4d3a980a91e0.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9396],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90058:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],o={title:"Inspect Results of Chaos Experiments"},c=void 0,l={unversionedId:"inspect-chaos-experiments",id:"version-2.1.5/inspect-chaos-experiments",isDocsHomePage:!1,title:"Inspect Results of Chaos Experiments",description:"This document describes how to use Chaos Mesh to check running status and results of chaos experiments.",source:"@site/versioned_docs/version-2.1.5/inspect-chaos-experiments.md",sourceDirName:".",slug:"/inspect-chaos-experiments",permalink:"/docs/2.1.5/inspect-chaos-experiments",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.5/inspect-chaos-experiments.md",tags:[],version:"2.1.5",frontMatter:{title:"Inspect Results of Chaos Experiments"},sidebar:"version-2.1.5/docs",previous:{title:"Run a Chaos Experiment",permalink:"/docs/2.1.5/run-a-chaos-experiment"},next:{title:"Create Chaos Mesh Workflow",permalink:"/docs/2.1.5/create-chaos-mesh-workflow"}},p=[{value:"Introduction to steps of a chaos experiment",id:"introduction-to-steps-of-a-chaos-experiment",children:[],level:2},{value:"Check results using Chaos Dashboard",id:"check-results-using-chaos-dashboard",children:[],level:2}],d={toc:p};function u(e){var t=e.components,o=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to use Chaos Mesh to check running status and results of chaos experiments."),(0,i.kt)("h2",{id:"introduction-to-steps-of-a-chaos-experiment"},"Introduction to steps of a chaos experiment"),(0,i.kt)("p",null,"In Chaos Mesh, the life cycle of a chaos experiment is divided into four steps, according to its running process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Injecting: Chaos experiment is in the process of fault injection. Normally, this step lasts for a short time. If the "Injecting" step lasts a long time, it may be due to some exceptions in the chaos experiment. In this case, you can check ',(0,i.kt)("inlineCode",{parentName:"li"},"Events")," to find the cause of the exceptions."),(0,i.kt)("li",{parentName:"ul"},"Running: After the faults have been successfully injected into all target pods, the chaos experiment starts running."),(0,i.kt)("li",{parentName:"ul"},"Paused: when executing a ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.1.5/run-a-chaos-experiment#pause-chaos-experiments"},"paused")," process for a running chaos experiment, Chaos Mesh restores the injected faults from all target pods, which indicates the experiment is paused."),(0,i.kt)("li",{parentName:"ul"},"Finished: if the ",(0,i.kt)("inlineCode",{parentName:"li"},"duration")," parameter of the experiment is configured, and when the experiment runs it up, Chaos Mesh restores the injected faults from all target pods, which indicates that the experiment is finished.")),(0,i.kt)("h2",{id:"check-results-using-chaos-dashboard"},"Check results using Chaos Dashboard"),(0,i.kt)("p",null,"You can check the running steps of chaos experiments on any of the following pages using Chaos Dashboard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"List of chaos experiments:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Experimental Status",src:n(36718).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Details of chaos experiments:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Experimental Status",src:n(32985).Z})))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},'"Injecting"')," step lasts for a long time, it may be due to some anomalies in the chaos experiment (e.g. the configured selectors have not selected target pods where to inject chaos actions). In this case, you can check ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Events"))," to find the cause of the exceptions and check the configuration of the chaos experiment."),(0,i.kt)("li",{parentName:"ul"},"Chaos Dashboard only displays ",(0,i.kt)("a",{parentName:"li",href:"#Introduction-to-steps-of-a-Chaos-experiment"},"main steps of a chaos experiment"),". For more detailed information about experiment status and results, run the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," command. :::")),(0,i.kt)("h2",{parentName:"div",id:"check-results-using-the-kubectl-command"},"Check results using the ",(0,i.kt)("inlineCode",{parentName:"h2"},"kubectl")," command"),(0,i.kt)("p",{parentName:"div"},"To confirm the results of chaos experiments, use the following ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Events")," of experiment objects."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n")),(0,i.kt)("p",{parentName:"div"},"The expected output is as follows:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n")),(0,i.kt)("p",{parentName:"div"},"The above output contains two parts:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Status")),(0,i.kt)("p",{parentName:"li"},"Based on the running process of the chaos experiment, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," provides four types of status records:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Paused"),': indicates the chaos experiment is in the "Paused" step.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Selected"),": indicates the chaos experiment had correctly selected the target pods where to inject chaos actions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AllInjected"),": indicates the faults have been successfully injected to all target pods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AllRecoverd"),": indicates the injected faults have been succesfully restored from all target pods.")),(0,i.kt)("p",{parentName:"li"},"The actual running status of current chaos experiments can be inferred from these four types of status records. For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"Paused"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Selected"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"AllRecoverd")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AllInjected")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),", it indicates the current chaos experiment is paused."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"Paused")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),", it indicates the current chaos experiment is paused. However, if the ",(0,i.kt)("inlineCode",{parentName:"li"},"Selected")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions.")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You can get more information from the combination of the above status records, for example, when ",(0,i.kt)("inlineCode",{parentName:"h5"},"Paused")," is ",(0,i.kt)("inlineCode",{parentName:"h5"},"True"),", it indicates the experiment is paused, but if the ",(0,i.kt)("inlineCode",{parentName:"h5"},"Selected")," is ",(0,i.kt)("inlineCode",{parentName:"h5"},"False")," at the same time, then it means the current experiment cannot select the target pods where to inject chaos actions. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Events")),(0,i.kt)("p",{parentName:"li"},"It contains the records of actions conducted during the whole life cycle of a chaos experiment, which can help to check experiment status and troubleshoot issues."))))))}u.isMDXComponent=!0},32985:function(e,t,n){t.Z=n.p+"assets/images/chaos_detail_status-171482b3cd8c1e3759a52e4fd6860875.png"},36718:function(e,t,n){t.Z=n.p+"assets/images/list_chaos_status-478857ce5a06cb75eabc4d3a980a91e0.png"}}]);
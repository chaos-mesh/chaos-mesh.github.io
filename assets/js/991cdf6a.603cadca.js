"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2643],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Simulate Stress Scenarios"},s=void 0,p={unversionedId:"simulate-heavy-stress-on-kubernetes",id:"version-2.0.4/simulate-heavy-stress-on-kubernetes",isDocsHomePage:!1,title:"Simulate Stress Scenarios",description:"StressChaos Introduction",source:"@site/versioned_docs/version-2.0.4/simulate-heavy-stress-on-kubernetes.md",sourceDirName:".",slug:"/simulate-heavy-stress-on-kubernetes",permalink:"/docs/simulate-heavy-stress-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.4/simulate-heavy-stress-on-kubernetes.md",tags:[],version:"2.0.4",frontMatter:{title:"Simulate Stress Scenarios"},sidebar:"version-2.0.4/docs",previous:{title:"Simulate Network Faults",permalink:"/docs/simulate-network-chaos-on-kubernetes"},next:{title:"Simulate File I/O Faults",permalink:"/docs/simulate-io-chaos-on-kubernetes"}},m=[{value:"StressChaos Introduction",id:"stresschaos-introduction",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[{value:"Field description",id:"field-description",children:[]}]}],d={toc:m};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"stresschaos-introduction"},"StressChaos Introduction"),(0,l.kt)("p",null,"Chaos Mesh provides StressChaos experiments to simulate stress scenarios inside containers. This document describes how to create StressChaos experiments and how to prepare the corresponding configuration file."),(0,l.kt)("p",null,"You can create experiments using either Chaos Dashboard or the YAML configuration files."),(0,l.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,l.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Create Experiment",src:n(17681).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,l.kt)("strong",{parentName:"p"},"STRESS TEST")," and fill out the experiment information. For specific configuration fields, refer to the description in ","[Configuration Description]","(#fields description)."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"StressChaos Experiment",src:n(99920).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Experiment Information",src:n(57023).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,l.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Write the experiment configuration to the YAML configuration file. In the following example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"memory-stress.yaml")," file is used."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: memory-stress-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  stressors:\n    memory:\n      workers: 4\n      size: '256MB'\n")),(0,l.kt)("p",{parentName:"li"},"This experiment configuration will create a process in the selected container, continuously allocate and read and write in memory, occupying up to 256MB of memory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f memory-stress.yaml\n")))),(0,l.kt)("h3",{id:"field-description"},"Field description"),(0,l.kt)("p",null,"The fields in the YAML configuration file are described in the following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#stressors"},"Stressors")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the stress of CPU or memory"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressngStressors"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the stres-ng parameter to reach richer stress injection"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--clone 2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,l.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides a parameter for the ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"mode"),".For example, when ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the name of the container into which the fault is injected."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["nginx"]'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/define-chaos-experiment-scope"},"Define the Scope of Chaos Experiments"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"stressors"},"Stressors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#memorystressor"},"MemoryStressor")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the memory stress"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cpustressor"},"CPUStressor")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the CPU stress"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"memorystressor"},"MemoryStressor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the number of threads that apply memory stress"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the maximum memory size available for total"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256MB"))))),(0,l.kt)("h5",{id:"cpustressor"},"CPUStressor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the number of threads that apply memory stress"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the percentage of CPU occupied0 means sleep and no load; 100 means full load"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50"))))))}u.isMDXComponent=!0},17681:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},57023:function(e,t,n){t.Z=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},99920:function(e,t,n){t.Z=n.p+"assets/images/stresschaos-exp-39c9a56022d3ca830e6418949ec71820.png"}}]);
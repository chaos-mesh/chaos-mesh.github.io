"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8358],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Simulate Time Faults"},p=void 0,s={unversionedId:"simulate-time-chaos-on-kubernetes",id:"version-2.1.0/simulate-time-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate Time Faults",description:"TimeChaos Introduction",source:"@site/versioned_docs/version-2.1.0/simulate-time-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-time-chaos-on-kubernetes",permalink:"/docs/simulate-time-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.0/simulate-time-chaos-on-kubernetes.md",tags:[],version:"2.1.0",frontMatter:{title:"Simulate Time Faults"},sidebar:"version-2.1.0/docs",previous:{title:"Simulate DNS Faults",permalink:"/docs/simulate-dns-chaos-on-kubernetes"},next:{title:"Simulate JVM Application Faults",permalink:"/docs/simulate-jvm-application-chaos"}},m=[{value:"TimeChaos Introduction",id:"timechaos-introduction",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[]}],c={toc:m};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"timechaos-introduction"},"TimeChaos Introduction"),(0,i.kt)("p",null,"Chaos Mesh provides the TimeChaos experiment type. You can use this experiment type to simulate a time offset scenario. This document describes how to create a TimeChaos experiment and its associated configuration file."),(0,i.kt)("p",null,"::: note"),(0,i.kt)("p",null,"TimeChaos only affects the PID ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," process in the PID namespace of the container, and child processes of the PID ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". For example, the process started by ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl exec")," does not be affected."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"You can create experiments in Chaos Dashboard or using the YAML configuration file."),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create Experiment",src:n(93381).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,i.kt)("strong",{parentName:"p"},"CLOCK SCREW")," and fill out the Clock ID and time offset."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"TimeChaos Experiments",src:n(99184).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Experiment Information",src:n(79509).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the YAML configuration file. In the following example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"time-shift.yaml")," file is used."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  timeOffset: '-10m100ns'\n")),(0,i.kt)("p",{parentName:"li"},"This experiment configuration will shift the time of the processes in the specified Pod forward by 10 minutes and 100 nanoseconds.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f time-shift.yaml\n")))),(0,i.kt)("p",null,"The fields in the YAML configuration file are described in the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the length of time offset."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-5m"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clockIds"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the ID of clock that will be offset. See the ",(0,i.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man2/clock_gettime.2.html"},(0,i.kt)("clock",null,"clock_gettime")," documentation")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME"]')),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["CLOCK_REALTIME", "CLOCK_MONOTONIC"]'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"one"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),".For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the name of the container into which the fault is injected."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["nginx"]'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"selector"),(0,i.kt)("td",{parentName:"tr",align:null},"struct"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/define-chaos-experiment-scope"},"Define the experiment scope"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},93381:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},79509:function(e,t,n){t.Z=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},99184:function(e,t,n){t.Z=n.p+"assets/images/timechaos-exp-5f24c2314275106d7b726e601dd1aa8c.png"}}]);
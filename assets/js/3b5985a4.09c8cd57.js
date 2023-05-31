"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5818],{49613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(59496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(60795),i=(a(59496),a(49613));const r={title:"Simulate Pod Faults"},o=void 0,l={unversionedId:"simulate-pod-chaos-on-kubernetes",id:"simulate-pod-chaos-on-kubernetes",title:"Simulate Pod Faults",description:"This document describes how to use Chaos Mesh to inject faults into Kubernetes Pod to simulate Pod or container faults. Chaos Dashboard and YAML files are provided to create PodChaos experiments.",source:"@site/docs/simulate-pod-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-pod-chaos-on-kubernetes",permalink:"/docs/next/simulate-pod-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-pod-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate Pod Faults"},sidebar:"docs",previous:{title:"Status Check in Workflow",permalink:"/docs/next/status-check-in-workflow"},next:{title:"Simulate Network Faults",permalink:"/docs/next/simulate-network-chaos-on-kubernetes"}},p={},s=[{value:"PodChaos introduction",id:"podchaos-introduction",level:2},{value:"Usage restrictions",id:"usage-restrictions",level:2},{value:"Notes",id:"notes",level:2},{value:"Create Experiments Using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using YAML configuration files",id:"create-experiments-using-yaml-configuration-files",level:2},{value:"pod-failure example",id:"pod-failure-example",level:3},{value:"pod-kill example",id:"pod-kill-example",level:3},{value:"container-kill example",id:"container-kill-example",level:3},{value:"Field description",id:"field-description",level:3},{value:"Some Notes for &quot;Pod Failure&quot; Chaos Experiment",id:"some-notes-for-pod-failure-chaos-experiment",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to use Chaos Mesh to inject faults into Kubernetes Pod to simulate Pod or container faults. Chaos Dashboard and YAML files are provided to create PodChaos experiments."),(0,i.kt)("h2",{id:"podchaos-introduction"},"PodChaos introduction"),(0,i.kt)("p",null,"PodChaos is a fault type in Chaos Mesh. By creating a PodChaos experiment, you can simulate fault scenarios of the specified Pods or containers. Currently, PodChaos supports the following fault types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pod Failure"),": injects fault into a specified Pod to make the Pod unavailable for a period of time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pod Kill"),": kills a specified Pod.To ensure that the Pod can be successfully restarted, you need to configure ReplicaSet or similar mechanisms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Container Kill"),": kills the specified container in the target Pod.")),(0,i.kt)("h2",{id:"usage-restrictions"},"Usage restrictions"),(0,i.kt)("p",null,'Chaos Mesh can inject PodChaos into any Pod, no matter whether the Pod is bound to Deployment, StatefulSet, DaemonSet, or other controllers. However, when you inject PodChaos into an independent Pod, some different situations might occur. For example, when you inject "pod-kill" chaos into an independent Pod, Chaos Mesh cannot guarantee that the application recovers from its failure.'),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Before creating PodChaos experiments, ensure the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is no Control Manager of Chaos Mesh running on the target Pod."),(0,i.kt)("li",{parentName:"ul"},"If the fault type is Pod Kill, replicaSet or a similar mechanism is configured to ensure that Pod can restart automatically.")),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create Experiments Using Chaos Dashboard"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Before create experiments using Chaos Dashboard, ensure the following:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Chaos Dashboard is installed."),(0,i.kt)("li",{parentName:"ul"},"If Chaos Dashboard is already installed, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl port-forward")," to access Dashboard: ",(0,i.kt)("inlineCode",{parentName:"li"},"bash kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333"),". Then you can enter ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:2333"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," to access Chaos Dashboard."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create a New Experiment",src:a(3681).Z,width:"959",height:"519"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,i.kt)("strong",{parentName:"p"},"POD FAULT")," and select a specific behavior, such as ",(0,i.kt)("strong",{parentName:"p"},"POD FAILURE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-yaml-configuration-files"},"Create experiments using YAML configuration files"),(0,i.kt)("h3",{id:"pod-failure-example"},"pod-failure example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-failure.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-mesh\nspec:\n  action: pod-failure\n  mode: one\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this example, Chaos Mesh injects ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-failure")," into the specified Pod and makes the Pod unavailable for 30 seconds.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./pod-failure.yaml\n")))),(0,i.kt)("h3",{id:"pod-kill-example"},"pod-kill example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-kill.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-mesh\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this example, Chaos Mesh injects ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-kill")," into the specified Pod and kills the Pod once.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./pod-kill.yaml\n")))),(0,i.kt)("h3",{id:"container-kill-example"},"container-kill example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"container-kill.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-mesh\nspec:\n  action: container-kill\n  mode: one\n  containerNames: ['prometheus']\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this example, Chaos Mesh injects ",(0,i.kt)("inlineCode",{parentName:"p"},"container-kill")," into the specified container and kills the container once.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./container-kill.yaml\n")))),(0,i.kt)("h3",{id:"field-description"},"Field description"),(0,i.kt)("p",null,"The following table describes the fields in the YAML configuration file."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the fault type to inject. The supported types include ",(0,i.kt)("inlineCode",{parentName:"td"},"pod-failure"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pod-kill"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"container-kill"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pod-kill"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"one"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),".For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"selector"),(0,i.kt)("td",{parentName:"tr",align:null},"struct"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/define-chaos-experiment-scope"},"Define the experiment scope"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"When you configure ",(0,i.kt)("inlineCode",{parentName:"td"},"action")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"container-kill"),", this configuration is mandatory to specify the target container name for injecting faults."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"['prometheus']")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gracePeriod"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"When you configure ",(0,i.kt)("inlineCode",{parentName:"td"},"action")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"pod-kill"),", this configuration is mandatory to specify the duration before deleting Pod."),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"30s")))),(0,i.kt)("h2",{id:"some-notes-for-pod-failure-chaos-experiment"},'Some Notes for "Pod Failure" Chaos Experiment'),(0,i.kt)("p",null,'TLDR; There are several suggestions for using "Pod Failure" chaos experiment:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Change to an available "pause image" if you are operating an air-gapped Kubernetes cluster.'),(0,i.kt)("li",{parentName:"ul"},"Setup ",(0,i.kt)("inlineCode",{parentName:"li"},"livenessProbe")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"readinessProbe")," for containers.")),(0,i.kt)("p",null,"Pod Failure Chaos Experiment would change the ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),' of each container in the target Pod to the "pause image", which is a special image that does not perform any operations. We use ',(0,i.kt)("inlineCode",{parentName:"p"},"gcr.io/google-containers/pause:latest"),' as the default image as "pause image", and you could change it to any other image in helm values ',(0,i.kt)("inlineCode",{parentName:"p"},"controllerManager.podChaos.podFailure.pauseImage"),"."),(0,i.kt)("p",null,"Downloading ",(0,i.kt)("inlineCode",{parentName:"p"},"pause image"),' would consume time, and that duration would be counted in the experiment duration. So you might find that the "actual effected duration" might be shorter than the configured duration. That\'s another reason why recommend to setup available "pause image".'),(0,i.kt)("p",null,'Another ambiguous point is that "pause image" could work "properly well" with unconfigured ',(0,i.kt)("inlineCode",{parentName:"p"},"command")," in the container. So if the container is configured without ",(0,i.kt)("inlineCode",{parentName:"p"},"command"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"livenessProbe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"readinessProbe"),", the container would be inspected as ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ready"),', although it had been changed to the "pause image", and actually does not provide functionalities as normal or not-available. So setup ',(0,i.kt)("inlineCode",{parentName:"p"},"livenessProbe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"readinessProbe")," for containers is recommended."))}u.isMDXComponent=!0},3681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"}}]);
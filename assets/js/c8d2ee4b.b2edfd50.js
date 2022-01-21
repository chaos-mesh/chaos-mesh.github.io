"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6556],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54092:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Simulate GCP Faults"},s=void 0,p={unversionedId:"simulate-gcp-chaos",id:"version-2.0.6/simulate-gcp-chaos",isDocsHomePage:!1,title:"Simulate GCP Faults",description:"This document describes how to use Chaos Mesh to inject faults into GCP Pod. Chaos Dashboard and YAML files are provided to create GCPChaos experiments.",source:"@site/versioned_docs/version-2.0.6/simulate-gcp-chaos.md",sourceDirName:".",slug:"/simulate-gcp-chaos",permalink:"/docs/2.0.6/simulate-gcp-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.6/simulate-gcp-chaos.md",tags:[],version:"2.0.6",frontMatter:{title:"Simulate GCP Faults"},sidebar:"version-2.0.6/docs",previous:{title:"Simulate AWS Faults",permalink:"/docs/2.0.6/simulate-aws-chaos"},next:{title:"Simulate HTTP faults",permalink:"/docs/2.0.6/simulate-http-chaos-on-kubernetes"}},c=[{value:"GCPChaos introduction",id:"gcpchaos-introduction",children:[],level:2},{value:"<code>Secret</code> file",id:"secret-file",children:[],level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[],level:2},{value:"Create experiments using YAML file",id:"create-experiments-using-yaml-file",children:[{value:"A <code>node-stop</code> configuration example",id:"a-node-stop-configuration-example",children:[],level:3},{value:"A <code>node-reset</code> configuration example",id:"a-node-reset-configuration-example",children:[],level:3},{value:"A <code>disk-loss</code> configuration example",id:"a-disk-loss-configuration-example",children:[],level:3},{value:"Field description",id:"field-description",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to use Chaos Mesh to inject faults into GCP Pod. Chaos Dashboard and YAML files are provided to create GCPChaos experiments."),(0,i.kt)("h2",{id:"gcpchaos-introduction"},"GCPChaos introduction"),(0,i.kt)("p",null,"GCPChaos is a fault type in Chaos Mesh. By creating a GCPChaos experiment, you can simulate fault scenarios of the specified GCP instance. Currently, GCPChaos supports the following fault types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node Stop"),": stops the specified GCP instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node Reset"),": reboots the specified GCP instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disk Loss"),": uninstalls the storage volume from the specified GCP instance.")),(0,i.kt)("h2",{id:"secret-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"Secret")," file"),(0,i.kt)("p",null,"To easily connect to the GCP cluster, you can create a Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," file to store the authentication information in advance."),(0,i.kt)("p",null,"Below is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-testing\ntype: Opaque\nstringData:\n  service_account: your-gcp-service-account-base64-encode\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," defines the name of kubernetes secret."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"namespace")," defines the namespace of kubernetes secret."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"service_account")," stores the service account key of your GCP cluster. Remember to complete ",(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/Base64"},"Base64")," encoding for your GCP service account key. To learn more about service account key, see ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Creating and managing service account keys"),".")),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before you create an experiment using Chaos Dashboard, make sure the following requirements are met:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chaos Dashboard is installed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chaos Dashboard can be accessed using ",(0,i.kt)("strong",{parentName:"p"},"kubectl port-forward")," command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,i.kt)("p",{parentName:"li"},"You can then access the dashboard via ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in your browser."))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(37770).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,i.kt)("strong",{parentName:"p"},"GCP fault")," and select a specific behavior, such as ",(0,i.kt)("strong",{parentName:"p"},"STOP NODE"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(49631).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(89909).Z})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(64298).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-yaml-file"},"Create experiments using YAML file"),(0,i.kt)("h3",{id:"a-node-stop-configuration-example"},"A ",(0,i.kt)("inlineCode",{parentName:"h3"},"node-stop")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcpchaos-node-stop.yaml"),"\uff0c as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-stop-example\n  namespace: chaos-testing\nspec:\n  action: node-stop\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  duration: '5m'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-stop")," fault into the specified GCP instance so that the GCP instance will be unavailable in 5 minutes."),(0,i.kt)("p",{parentName:"li"},"For more information about stopping GCP instances, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/stop-start-instance"},"Stop GCP instance"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-node-stop.yaml\n")))),(0,i.kt)("h3",{id:"a-node-reset-configuration-example"},"A ",(0,i.kt)("inlineCode",{parentName:"h3"},"node-reset")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcpchaos-node-reset.yaml"),", as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-reset-example\n  namespace: chaos-testing\nspec:\n  action: node-reset\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  duration: '5m'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject ",(0,i.kt)("inlineCode",{parentName:"p"},"node-reset")," fault into the specified GCP instance so that the GCP instance will be reset."),(0,i.kt)("p",{parentName:"li"},"For more information about resetting GCP instances, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/stop-start-instance#resetting_an_instance"},"Resetting a GCP instance"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-node-reset.yaml\n")))),(0,i.kt)("h3",{id:"a-disk-loss-configuration-example"},"A ",(0,i.kt)("inlineCode",{parentName:"h3"},"disk-loss")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcpchaos-disk-loss.yaml"),", as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: disk-loss-example\n  namespace: chaos-testing\nspec:\n  action: disk-loss\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  deviceNames: ['disk-name']\n  duration: '5m'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"disk-loss")," fault into the specified GCP instance so that the GCP instance is detached from the specified storage volume within 5 minutes."),(0,i.kt)("p",{parentName:"li"},"For more information about detaching GCP instances, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/reference/rest/v1/instances/detachDisk"},"Detach GCP storage"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f gcpchaos-disk-loss.yaml\n")))),(0,i.kt)("h3",{id:"field-description"},"Field description"),(0,i.kt)("p",null,"The following table shows the fields in the YAML configuration file."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descpription"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the specific type of faults. The available fault types include node-stop, node-reset, and disk-loss."),(0,i.kt)("td",{parentName:"tr",align:null},"node-stop"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"node-stop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a Pod at random), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"one"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of pods."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"secretName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the name of the Kubernetes secret that stores the GCP authentication information."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"cloud-key-secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the ID of GCP project."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"your-project-id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zone"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the region of GCP instance."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"us-central1-a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"instance"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the name of GCP instance."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"your-gcp-instance-name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceNames"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,i.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"disk-loss"),". This field specifies the machine disk ID."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'["your-disk-id"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the duration of the experiment."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"30s")))))}d.isMDXComponent=!0},49631:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashboard-2-b005001db6b98e4b2f00394777a5bb25.png"},89909:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashboard-3-ae3fca17bc020295b609d1ed5c611d0e.png"},64298:function(e,t,a){t.Z=a.p+"assets/images/create-gcp-chaos-on-dashboard-4-e08e6f26e6db3e497cb7359ac3ed45fb.png"},37770:function(e,t,a){t.Z=a.p+"assets/images/create-pod-chaos-on-dashboard-1-c839bc424bbbdabd55a89ef7fa24710b.png"}}]);
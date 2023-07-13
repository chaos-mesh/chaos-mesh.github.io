"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6890],{49613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(60795),r=(a(59496),a(49613));const i={title:"Simulate Azure Faults"},l=void 0,o={unversionedId:"simulate-azure-chaos",id:"version-2.4.3/simulate-azure-chaos",title:"Simulate Azure Faults",description:"This document describes how to use Chaos Mesh to simulate Azure faults.",source:"@site/versioned_docs/version-2.4.3/simulate-azure-chaos.md",sourceDirName:".",slug:"/simulate-azure-chaos",permalink:"/docs/2.4.3/simulate-azure-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/simulate-azure-chaos.md",tags:[],version:"2.4.3",frontMatter:{title:"Simulate Azure Faults"},sidebar:"docs",previous:{title:"Simulate AWS Faults",permalink:"/docs/2.4.3/simulate-aws-chaos"},next:{title:"Simulate GCP Faults",permalink:"/docs/2.4.3/simulate-gcp-chaos"}},s={},p=[{value:"AzureChaos introduction",id:"azurechaos-introduction",level:2},{value:"<code>Secret</code> file",id:"secret-file",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"A <code>vm-stop</code> configuration example",id:"a-vm-stop-configuration-example",level:3},{value:"A <code>vm-restart</code> configuration example",id:"a-vm-restart-configuration-example",level:3},{value:"A <code>detach-volume</code> configuration example",id:"a-detach-volume-configuration-example",level:3},{value:"Field description",id:"field-description",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use Chaos Mesh to simulate Azure faults."),(0,r.kt)("h2",{id:"azurechaos-introduction"},"AzureChaos introduction"),(0,r.kt)("p",null,"AzureChaos can help you simulate fault scenarios on the specified Azure instance. Currently, AzureChaos supports the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VM Stop"),": stops the specified VM instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VM Restart"),": restarts the specified VM instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disk Detach"),": uninstalls the data disk from the specified VM instance.")),(0,r.kt)("h2",{id:"secret-file"},(0,r.kt)("inlineCode",{parentName:"h2"},"Secret")," file"),(0,r.kt)("p",null,"To easily connect to the Azure cluster, you can create a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," file to store the authentication information in advance."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," file sample is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  client_id: your-client-id\n  client_secret: your-client-secret\n  tenant_id: your-tenant-id\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," means the Kubernetes Secret object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace")," means the namespace of the Kubernetes Secret object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client_id")," stores Application (client) ID of Azure App registrations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client_secret")," stores Application (client) secret value of Azure App registrations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tenant_id")," stores Directory (tenant) ID of Azure App registrations. For ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),", please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/register-confidential-azure-ad-client-app"},"Confidential client application"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that App registrations in the Secret file has been added as a contributor or owner to the access control (IAM) of the VM instance.")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img",src:a(4116).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"Azure FAULT")," and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},"VM STOP"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,r.kt)("h3",{id:"a-vm-stop-configuration-example"},"A ",(0,r.kt)("inlineCode",{parentName:"h3"},"vm-stop")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-vm-stop.yaml")," file, as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-stop-example\n  namespace: chaos-mesh\nspec:\n  action: vm-stop\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"vm-stop")," fault into the specified VM instance so that the VM instance will be unavailable in 5 minutes."),(0,r.kt)("p",{parentName:"li"},"For more information about stopping VM instances, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devtest-labs/use-command-line-start-stop-virtual-machines"},"Azure documentation - Start or stop a VM"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-vm-stop.yaml\n")))),(0,r.kt)("h3",{id:"a-vm-restart-configuration-example"},"A ",(0,r.kt)("inlineCode",{parentName:"h3"},"vm-restart")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-vm-restart.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-restart-example\n  namespace: chaos-mesh\nspec:\n  action: vm-restart\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject ",(0,r.kt)("inlineCode",{parentName:"p"},"vm-restart")," fault into the specified VM instance so that the VM instance will be restarted."),(0,r.kt)("p",{parentName:"li"},"For more information about restarting the VM instance, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devtest-labs/devtest-lab-restart-vm"},"Azure documentation - Restart a VM"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-vm-restart.yaml\n")))),(0,r.kt)("h3",{id:"a-detach-volume-configuration-example"},"A ",(0,r.kt)("inlineCode",{parentName:"h3"},"detach-volume")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"azurechaos-disk-detach.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: disk-detach-example\n  namespace: chaos-mesh\nspec:\n  action: disk-detach\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n  diskName: 'your-disk-name'\n  lun: 'your-disk-lun'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"disk-detach")," fault into the specified VM instance so that the VM instance is detached from the specified data disk within 5 minutes."),(0,r.kt)("p",{parentName:"li"},"For more information about detaching Azure date disk, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devtest-labs/devtest-lab-attach-detach-data-disk#detach-a-data-disk"},"Azure documentation - Detach a data disk"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f azurechaos-disk-detach.yaml\n")))),(0,r.kt)("h3",{id:"field-description"},"Field description"),(0,r.kt)("p",null,"The following table shows the fields in the YAML configuration file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific type of faults. Only ",(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"vm-restart"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach")," are supported."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vm-stop"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secretName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the name of the Kubernetes Secret that stores the Azure authentication information."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloud-key-secret"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptionID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the VM instacnce's subscription ID."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"your-subscription-id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceGroupName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the Resource group of VM."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"your-resource-group-name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vmName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"VMName defines the name of Virtual Machine."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"your-vm-name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diskName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach"),", specifies the name of data disk."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATADISK_0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lun"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-detach"),", specifies the LUN (Logic Unit Number) of data disk."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))))))}u.isMDXComponent=!0},4116:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"}}]);
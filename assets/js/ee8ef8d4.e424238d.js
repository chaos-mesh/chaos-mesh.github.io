"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5759],{49613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(60795),r=(a(59496),a(49613));const i={title:"Simulate AWS Faults"},l=void 0,o={unversionedId:"simulate-aws-chaos",id:"version-2.6.2/simulate-aws-chaos",title:"Simulate AWS Faults",description:"This document describes how to use Chaos Mesh to simulate AWS faults.",source:"@site/versioned_docs/version-2.6.2/simulate-aws-chaos.md",sourceDirName:".",slug:"/simulate-aws-chaos",permalink:"/docs/simulate-aws-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/simulate-aws-chaos.md",tags:[],version:"2.6.2",frontMatter:{title:"Simulate AWS Faults"},sidebar:"docs",previous:{title:"Simulate Linux Kernel Faults",permalink:"/docs/simulate-kernel-chaos-on-kubernetes"},next:{title:"Simulate Azure Faults",permalink:"/docs/simulate-azure-chaos"}},s={},p=[{value:"AWSChaos introduction",id:"awschaos-introduction",level:2},{value:"<code>Secret</code> file",id:"secret-file",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"An <code>ec2-stop</code> configuration example",id:"an-ec2-stop-configuration-example",level:3},{value:"An <code>ec2-start</code> configuration example",id:"an-ec2-start-configuration-example",level:3},{value:"A <code>detach-volume</code> configuration example",id:"a-detach-volume-configuration-example",level:3},{value:"Field description",id:"field-description",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use Chaos Mesh to simulate AWS faults."),(0,r.kt)("h2",{id:"awschaos-introduction"},"AWSChaos introduction"),(0,r.kt)("p",null,"AWSChaos can help you simulate fault scenarios on the specified AWS instance. Currently, AWSChaos supports the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EC2 Stop"),": stops the specified EC2 instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EC2 Restart"),": restarts the specified EC2 instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detach Volume"),": uninstalls the storage volume from the specified EC2 instance.")),(0,r.kt)("h2",{id:"secret-file"},(0,r.kt)("inlineCode",{parentName:"h2"},"Secret")," file"),(0,r.kt)("p",null,"To easily connect to the AWS cluster, you can create a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," file to store the authentication information in advance."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," file sample is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  aws_access_key_id: your-aws-access-key-id\n  aws_secret_access_key: your-aws-secret-access-key\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," means the Kubernetes Secret object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace")," means the namespace of the Kubernetes Secret object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aws_access_key_id")," stores the ID of the access key to the AWS cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aws_secret_access_key")," stores the secrete access key to the AWS cluster.")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before you create an experiment using Chaos Dashboard, make sure the following requirements are met:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chaos Dashboard is installed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chaos Dashboard can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n")),(0,r.kt)("p",{parentName:"li"},"Then you can access the dashboard via ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in your browser.")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img",src:a(68582).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"AWS FAULT")," and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},"STOP EC2"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,r.kt)("h3",{id:"an-ec2-stop-configuration-example"},"An ",(0,r.kt)("inlineCode",{parentName:"h3"},"ec2-stop")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"awschaos-ec2-stop.yaml")," file, as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-stop-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2-stop")," fault into the specified EC2 instance so that the EC2 instance will be unavailable in 5 minutes."),(0,r.kt)("p",{parentName:"li"},"For more information about stopping EC2 instances, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html"},"AWS documentation - Stop and start your instance"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-ec2-stop.yaml\n")))),(0,r.kt)("h3",{id:"an-ec2-start-configuration-example"},"An ",(0,r.kt)("inlineCode",{parentName:"h3"},"ec2-start")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"awchaos-ec2-restot.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-restart-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-restart\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2-restart")," fault into the specified EC2 instance so that the EC2 instance will be restarted."),(0,r.kt)("p",{parentName:"li"},"For more information about restarting the EC2 instance, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-reboot.html"},"AWS documentation - Reboot your instance"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-ec2-restart.yaml\n")))),(0,r.kt)("h3",{id:"a-detach-volume-configuration-example"},"A ",(0,r.kt)("inlineCode",{parentName:"h3"},"detach-volume")," configuration example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"awschaos-detach-volume.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-detach-volume-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  volumeID: 'your-volume-id'\n  deviceName: '/dev/sdf'\n  duration: '5m'\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"detail-volume")," fault into the specified EC2 instance so that the EC2 instance is detached from the specified storage volume within 5 minutes."),(0,r.kt)("p",{parentName:"li"},"For more information about detaching Amazon EBS volumes, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html"},"AWS documentation - Detach an Amazon EBS volume from a Linux instance"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-detach-volume.yaml\n")))),(0,r.kt)("h3",{id:"field-description"},"Field description"),(0,r.kt)("p",null,"The following table shows the fields in the YAML configuration file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific type of faults. Only ec2-stop, ec2-restore, and detain-volume are supported."),(0,r.kt)("td",{parentName:"tr",align:null},"ec2-stop"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"ec2-stop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),".For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secretName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the name of the Kubernetes Secret that stores the AWS authentication information."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"cloud-key-secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsRegion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the AWS region."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"us-east-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec2Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the ID of the EC2 instance."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"your-ec2-instance-id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volumeID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"detach-volume"),". This field specifies the EBS volume ID."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"your-volume-id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"detach-volume"),". This field specifies the machine name."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"/dev/sdf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"30s")))))}d.isMDXComponent=!0},68582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"}}]);
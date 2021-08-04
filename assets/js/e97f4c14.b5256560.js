"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7378],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32995:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l={title:"Simulate AWS Faults",sidebar_label:"Simulate AWS Faults"},o=void 0,s={unversionedId:"simulate-aws-chaos",id:"simulate-aws-chaos",isDocsHomePage:!1,title:"Simulate AWS Faults",description:"This document describes how to use Chaos Mesh to simulate AWS faults.",source:"@site/docs/simulate-aws-chaos.md",sourceDirName:".",slug:"/simulate-aws-chaos",permalink:"/docs/next/simulate-aws-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-aws-chaos.md",version:"current",frontMatter:{title:"Simulate AWS Faults",sidebar_label:"Simulate AWS Faults"},sidebar:"docs",previous:{title:"Simulate Linux Kernel Faults",permalink:"/docs/next/simulate-kernel-chaos-on-kubernetes"},next:{title:"Simulate GCP Faults",permalink:"/docs/next/simulate-gcp-chaos"}},p=[{value:"AWSChaos introduction",id:"awschaos-introduction",children:[]},{value:"<code>Secret</code> file",id:"secret-file",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[{value:"An <code>ec2-stop</code> configuration example",id:"an-ec2-stop-configuration-example",children:[]},{value:"An <code>ec2-start</code> configuration example",id:"an-ec2-start-configuration-example",children:[]},{value:"A <code>detail-volume</code> configuration example",id:"a-detail-volume-configuration-example",children:[]},{value:"Field description",id:"field-description",children:[]}]}],c={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to use Chaos Mesh to simulate AWS faults."),(0,i.kt)("h2",{id:"awschaos-introduction"},"AWSChaos introduction"),(0,i.kt)("p",null,"AWSChaos can help you simulate fault scenarios on the specified AWS instance. Currently, AWSChaos supports the following fault types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EC2 Stop"),": stops the specified EC2 instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EC2 Restart"),": restarts the specified EC2 instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detach Volume"),": uninstalls the storage volume from the specified EC2 instance.")),(0,i.kt)("h2",{id:"secret-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"Secret")," file"),(0,i.kt)("p",null,"To easily connect to the AWS cluster, you can create a Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," file to store the authentication information in advance."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," file sample is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-testing\ntype: Opaque\nstringData:\n  aws_access_key_id: your-aws-access-key-id\n  aws_secret_access_key: your-aws-secret-access-key\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," means the Kubernetes Secret object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"namespace")," means the namespace of the Kubernetes Secret object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"aws_access_key_id")," stores the ID of the access key to the AWS cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"aws_secret_access_key")," stores the secrete access key to the AWS cluster.")),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before you create an experiment using Chaos Dashboard, make sure the following requirements are met:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chaos Dashboard is installed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chaos Dashboard can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,i.kt)("p",{parentName:"li"},"You can then access the dashboard via ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in your browser."))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(31822).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the "',(0,i.kt)("strong",{parentName:"p"},"Choose a Target"),'" area, choose ',(0,i.kt)("strong",{parentName:"p"},"AWS FAULT")," and select a specific behavior, such as ",(0,i.kt)("strong",{parentName:"p"},"STOP EC2"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,i.kt)("h3",{id:"an-ec2-stop-configuration-example"},"An ",(0,i.kt)("inlineCode",{parentName:"h3"},"ec2-stop")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"awschaos-ec2-stop.yaml")," file, as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\nname: ec2-stop-example\nnamespace: chaos-testing\nspec:\naction: ec2-stop\nsecretName: 'cloud-key-secret'\nawsRegion: 'us-east-2'\nec2Instance: 'your-ec2-instance-id'\nduration: '5m'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-stop")," fault into the specified EC2 instance so that the EC2 instance will be unavailable in 5 minutes."),(0,i.kt)("p",{parentName:"li"},"For more information about stopping EC2 instances, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html"},"AWS documentation - Stop and start your instance"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-ec2-stop.yaml\n")))),(0,i.kt)("h3",{id:"an-ec2-start-configuration-example"},"An ",(0,i.kt)("inlineCode",{parentName:"h3"},"ec2-start")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"awchaos-ec2-restot.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\nname: ec2-restart-example\nnamespace: chaos-testing\nspec:\naction: ec2-restart\nsecretName: 'cloud-key-secret'\nawsRegion: 'us-east-2'\nec2Instance: 'your-ec2-instance-id'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-restart")," fault into the specified EC2 instance so that the EC2 instance will be restarted."),(0,i.kt)("p",{parentName:"li"},"For more information about restarting the EC2 instance, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-reboot.html"},"AWS documentation - Reboot your instance"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-ec2-restart.yaml\n")))),(0,i.kt)("h3",{id:"a-detail-volume-configuration-example"},"A ",(0,i.kt)("inlineCode",{parentName:"h3"},"detail-volume")," configuration example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"awschaos-detach-volume.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\nname: ec2-detach-volume-example\nnamespace: chaos-testing\nspec:\naction: ec2-stop\nsecretName: 'cloud-key-secret'\nawsRegion: 'us-east-2'\nec2Instance: 'your-ec2-instance-id'\nvolumeID: 'your-volume-id'\ndeviceName: '/dev/sdf'\nduration: '5m'\n")),(0,i.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"detail-volume")," fault into the specified EC2 instance so that the EC2 instance is detached from the specified storage volume within 5 minutes."),(0,i.kt)("p",{parentName:"li"},"For more information about detaching Amazon EBS volumes, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html"},"AWS documentation - Detach an Amazon EBS volume from a Linux instance"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f awschaos-detach-volume.yaml\n")))),(0,i.kt)("h3",{id:"field-description"},"Field description"),(0,i.kt)("p",null,"The following table shows the fields in the YAML configuration file."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the specific type of faults. Only ec2-stop, ec2-restore, and detain-volume are supported."),(0,i.kt)("td",{parentName:"tr",align:null},"ec2-stop"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"ec2-stop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),".For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"secretName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the name of the Kubernetes Secret that stores the AWS authentication information."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"cloud-key-secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"awsRegion"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the AWS region."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"us-east-2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ec2Instance"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the ID of the EC2 instance."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"your-ec2-instance-id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"volumeID"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,i.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"detach-volume"),". This field specifies the EBS volume ID."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"your-volume-id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a required field when the ",(0,i.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"detach-volume"),". This field specifies the machine name."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"/dev/sdf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"30s")))))}m.isMDXComponent=!0},31822:function(e,t,a){t.Z=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"}}]);
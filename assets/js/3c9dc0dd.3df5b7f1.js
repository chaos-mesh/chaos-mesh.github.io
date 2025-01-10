"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6863],{15653:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"simulate-aws-chaos","title":"Simulate AWS Faults","description":"This document describes how to use Chaos Mesh to simulate AWS faults.","source":"@site/versioned_docs/version-2.5.2/simulate-aws-chaos.md","sourceDirName":".","slug":"/simulate-aws-chaos","permalink":"/docs/2.5.2/simulate-aws-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/simulate-aws-chaos.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate AWS Faults"},"sidebar":"docs","previous":{"title":"Simulate Linux Kernel Faults","permalink":"/docs/2.5.2/simulate-kernel-chaos-on-kubernetes"},"next":{"title":"Simulate Azure Faults","permalink":"/docs/2.5.2/simulate-azure-chaos"}}');var i=n(86070),c=n(8637);const r={title:"Simulate AWS Faults"},a=void 0,d={},o=[{value:"AWSChaos introduction",id:"awschaos-introduction",level:2},{value:"<code>Secret</code> file",id:"secret-file",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"An <code>ec2-stop</code> configuration example",id:"an-ec2-stop-configuration-example",level:3},{value:"An <code>ec2-start</code> configuration example",id:"an-ec2-start-configuration-example",level:3},{value:"A <code>detach-volume</code> configuration example",id:"a-detach-volume-configuration-example",level:3},{value:"Field description",id:"field-description",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"This document describes how to use Chaos Mesh to simulate AWS faults."}),"\n",(0,i.jsx)(s.h2,{id:"awschaos-introduction",children:"AWSChaos introduction"}),"\n",(0,i.jsx)(s.p,{children:"AWSChaos can help you simulate fault scenarios on the specified AWS instance. Currently, AWSChaos supports the following fault types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"EC2 Stop"}),": stops the specified EC2 instance."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"EC2 Restart"}),": restarts the specified EC2 instance."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Detach Volume"}),": uninstalls the storage volume from the specified EC2 instance."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"secret-file",children:[(0,i.jsx)(s.code,{children:"Secret"})," file"]}),"\n",(0,i.jsxs)(s.p,{children:["To easily connect to the AWS cluster, you can create a Kubernetes ",(0,i.jsx)(s.code,{children:"Secret"})," file to store the authentication information in advance."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"Secret"})," file sample is as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  aws_access_key_id: your-aws-access-key-id\n  aws_secret_access_key: your-aws-secret-access-key\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"name"})," means the Kubernetes Secret object."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"namespace"})," means the namespace of the Kubernetes Secret object."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"aws_access_key_id"})," stores the ID of the access key to the AWS cluster."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"aws_secret_access_key"})," stores the secrete access key to the AWS cluster."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"create-experiments-using-chaos-dashboard",children:"Create experiments using Chaos Dashboard"}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Before you create an experiment using Chaos Dashboard, make sure the following requirements are met:"}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Chaos Dashboard is installed."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Chaos Dashboard can be accessed via ",(0,i.jsx)(s.code,{children:"kubectl port-forward"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:" kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Then you can access the dashboard via ",(0,i.jsx)(s.a,{href:"http://localhost:2333",children:(0,i.jsx)(s.code,{children:"http://localhost:2333"})})," in your browser."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Open Chaos Dashboard, and click ",(0,i.jsx)(s.strong,{children:"NEW EXPERIMENT"})," on the page to create a new experiment:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(5533).A+"",width:"959",height:"519"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Choose a Target"})," area, choose ",(0,i.jsx)(s.strong,{children:"AWS FAULT"})," and select a specific behavior, such as ",(0,i.jsx)(s.strong,{children:"STOP EC2"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Submit the experiment information."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"create-experiments-using-the-yaml-file",children:"Create experiments using the YAML file"}),"\n",(0,i.jsxs)(s.h3,{id:"an-ec2-stop-configuration-example",children:["An ",(0,i.jsx)(s.code,{children:"ec2-stop"})," configuration example"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Write the experiment configuration to the ",(0,i.jsx)(s.code,{children:"awschaos-ec2-stop.yaml"})," file, as shown below:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-stop-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  duration: '5m'\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Based on this configuration example, Chaos Mesh will inject the ",(0,i.jsx)(s.code,{children:"ec2-stop"})," fault into the specified EC2 instance so that the EC2 instance will be unavailable in 5 minutes."]}),"\n",(0,i.jsxs)(s.p,{children:["For more information about stopping EC2 instances, refer to ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html",children:"AWS documentation - Stop and start your instance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["After the configuration file is prepared, use ",(0,i.jsx)(s.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f awschaos-ec2-stop.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"an-ec2-start-configuration-example",children:["An ",(0,i.jsx)(s.code,{children:"ec2-start"})," configuration example"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Write the experiment configuration to the ",(0,i.jsx)(s.code,{children:"awchaos-ec2-restot.yaml"})," file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-restart-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-restart\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Based on this configuration example, Chaos Mesh will inject ",(0,i.jsx)(s.code,{children:"ec2-restart"})," fault into the specified EC2 instance so that the EC2 instance will be restarted."]}),"\n",(0,i.jsxs)(s.p,{children:["For more information about restarting the EC2 instance, refer to the ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-reboot.html",children:"AWS documentation - Reboot your instance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["After the configuration file is prepared, use ",(0,i.jsx)(s.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f awschaos-ec2-restart.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"a-detach-volume-configuration-example",children:["A ",(0,i.jsx)(s.code,{children:"detach-volume"})," configuration example"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Write the experiment configuration to the ",(0,i.jsx)(s.code,{children:"awschaos-detach-volume.yaml"})," file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: AWSChaos\nmetadata:\n  name: ec2-detach-volume-example\n  namespace: chaos-mesh\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  volumeID: 'your-volume-id'\n  deviceName: '/dev/sdf'\n  duration: '5m'\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Based on this configuration example, Chaos Mesh will inject a ",(0,i.jsx)(s.code,{children:"detail-volume"})," fault into the specified EC2 instance so that the EC2 instance is detached from the specified storage volume within 5 minutes."]}),"\n",(0,i.jsxs)(s.p,{children:["For more information about detaching Amazon EBS volumes, refer to the ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html",children:"AWS documentation - Detach an Amazon EBS volume from a Linux instance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["After the configuration file is prepared, use ",(0,i.jsx)(s.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f awschaos-detach-volume.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"field-description",children:"Field description"}),"\n",(0,i.jsx)(s.p,{children:"The following table shows the fields in the YAML configuration file."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default value"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Example"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"action"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Indicates the specific type of faults. Only ec2-stop, ec2-restore, and detain-volume are supported."}),(0,i.jsx)(s.td,{children:"ec2-stop"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"ec2-stop"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"mode"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsxs)(s.td,{children:["Specifies the mode of the experiment. The mode options include ",(0,i.jsx)(s.code,{children:"one"})," (selecting a random Pod), ",(0,i.jsx)(s.code,{children:"all"})," (selecting all eligible Pods), ",(0,i.jsx)(s.code,{children:"fixed"})," (selecting a specified number of eligible Pods), ",(0,i.jsx)(s.code,{children:"fixed-percent"})," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.jsx)(s.code,{children:"random-max-percent"})," (selecting the maximum percentage of Pods from the eligible Pods)."]}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"one"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"value"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsxs)(s.td,{children:["Provides parameters for the ",(0,i.jsx)(s.code,{children:"mode"})," configuration, depending on ",(0,i.jsx)(s.code,{children:"mode"}),".For example, when ",(0,i.jsx)(s.code,{children:"mode"})," is set to ",(0,i.jsx)(s.code,{children:"fixed-percent"}),", ",(0,i.jsx)(s.code,{children:"value"})," specifies the percentage of Pods."]}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"secretName"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Specifies the name of the Kubernetes Secret that stores the AWS authentication information."}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"cloud-key-secret"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"awsRegion"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Specifies the AWS region."}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"us-east-2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ec2Instance"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Specifies the ID of the EC2 instance."}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"your-ec2-instance-id"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"volumeID"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsxs)(s.td,{children:["This is a required field when the ",(0,i.jsx)(s.code,{children:"action"})," is ",(0,i.jsx)(s.code,{children:"detach-volume"}),". This field specifies the EBS volume ID."]}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"your-volume-id"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"deviceName"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsxs)(s.td,{children:["This is a required field when the ",(0,i.jsx)(s.code,{children:"action"})," is ",(0,i.jsx)(s.code,{children:"detach-volume"}),". This field specifies the machine name."]}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"/dev/sdf"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"duration"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Specifies the duration of the experiment."}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"30s"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5533:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},8637:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(30758);const i={},c=t.createContext(i);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);
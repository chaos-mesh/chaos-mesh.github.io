"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7108],{54436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=i(11527),o=i(88672);const t={title:"Simulate Pod Faults"},r=void 0,d={id:"simulate-pod-chaos-on-kubernetes",title:"Simulate Pod Faults",description:"This document describes how to use Chaos Mesh to inject faults into Kubernetes Pod to simulate Pod or container faults. Chaos Dashboard and YAML files are provided to create PodChaos experiments.",source:"@site/versioned_docs/version-2.5.2/simulate-pod-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-pod-chaos-on-kubernetes",permalink:"/docs/2.5.2/simulate-pod-chaos-on-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/simulate-pod-chaos-on-kubernetes.md",tags:[],version:"2.5.2",frontMatter:{title:"Simulate Pod Faults"},sidebar:"docs",previous:{title:"Status Check in Workflow",permalink:"/docs/2.5.2/status-check-in-workflow"},next:{title:"Simulate Network Faults",permalink:"/docs/2.5.2/simulate-network-chaos-on-kubernetes"}},a={},l=[{value:"PodChaos introduction",id:"podchaos-introduction",level:2},{value:"Usage restrictions",id:"usage-restrictions",level:2},{value:"Notes",id:"notes",level:2},{value:"Create Experiments Using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using YAML configuration files",id:"create-experiments-using-yaml-configuration-files",level:2},{value:"pod-failure example",id:"pod-failure-example",level:3},{value:"pod-kill example",id:"pod-kill-example",level:3},{value:"container-kill example",id:"container-kill-example",level:3},{value:"Field description",id:"field-description",level:3},{value:"Some Notes for &quot;Pod Failure&quot; Chaos Experiment",id:"some-notes-for-pod-failure-chaos-experiment",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document describes how to use Chaos Mesh to inject faults into Kubernetes Pod to simulate Pod or container faults. Chaos Dashboard and YAML files are provided to create PodChaos experiments."}),"\n",(0,s.jsx)(n.h2,{id:"podchaos-introduction",children:"PodChaos introduction"}),"\n",(0,s.jsx)(n.p,{children:"PodChaos is a fault type in Chaos Mesh. By creating a PodChaos experiment, you can simulate fault scenarios of the specified Pods or containers. Currently, PodChaos supports the following fault types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pod Failure"}),": injects fault into a specified Pod to make the Pod unavailable for a period of time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pod Kill"}),": kills a specified Pod.To ensure that the Pod can be successfully restarted, you need to configure ReplicaSet or similar mechanisms."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Container Kill"}),": kills the specified container in the target Pod."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage-restrictions",children:"Usage restrictions"}),"\n",(0,s.jsx)(n.p,{children:'Chaos Mesh can inject PodChaos into any Pod, no matter whether the Pod is bound to Deployment, StatefulSet, DaemonSet, or other controllers. However, when you inject PodChaos into an independent Pod, some different situations might occur. For example, when you inject "pod-kill" chaos into an independent Pod, Chaos Mesh cannot guarantee that the application recovers from its failure.'}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"Before creating PodChaos experiments, ensure the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There is no Control Manager of Chaos Mesh running on the target Pod."}),"\n",(0,s.jsx)(n.li,{children:"If the fault type is Pod Kill, replicaSet or a similar mechanism is configured to ensure that Pod can restart automatically."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-experiments-using-chaos-dashboard",children:"Create Experiments Using Chaos Dashboard"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Before create experiments using Chaos Dashboard, ensure the following:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Chaos Dashboard is installed."}),"\n",(0,s.jsxs)(n.li,{children:["If Chaos Dashboard is already installed, you can run ",(0,s.jsx)(n.code,{children:"kubectl port-forward"})," to access Dashboard: ",(0,s.jsx)(n.code,{children:"bash kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333"}),". Then you can enter ",(0,s.jsx)(n.a,{href:"http://localhost:2333",children:(0,s.jsx)(n.code,{children:"http://localhost:2333"})})," to access Chaos Dashboard."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open Chaos Dashboard, and click ",(0,s.jsx)(n.strong,{children:"NEW EXPERIMENT"})," on the page to create a new experiment."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create a New Experiment",src:i(39512).Z+"",width:"959",height:"519"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Choose a Target"})," area, choose ",(0,s.jsx)(n.strong,{children:"POD FAULT"})," and select a specific behavior, such as ",(0,s.jsx)(n.strong,{children:"POD FAILURE"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Submit the experiment information."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-experiments-using-yaml-configuration-files",children:"Create experiments using YAML configuration files"}),"\n",(0,s.jsx)(n.h3,{id:"pod-failure-example",children:"pod-failure example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Write the experiment configuration to the ",(0,s.jsx)(n.code,{children:"pod-failure.yaml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-mesh\nspec:\n  action: pod-failure\n  mode: one\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on this example, Chaos Mesh injects ",(0,s.jsx)(n.code,{children:"pod-failure"})," into the specified Pod and makes the Pod unavailable for 30 seconds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After the configuration file is prepared, use ",(0,s.jsx)(n.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f ./pod-failure.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pod-kill-example",children:"pod-kill example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Write the experiment configuration to the ",(0,s.jsx)(n.code,{children:"pod-kill.yaml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-mesh\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on this example, Chaos Mesh injects ",(0,s.jsx)(n.code,{children:"pod-kill"})," into the specified Pod and kills the Pod once."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After the configuration file is prepared, use ",(0,s.jsx)(n.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f ./pod-kill.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"container-kill-example",children:"container-kill example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Write the experiment configuration to the ",(0,s.jsx)(n.code,{children:"container-kill.yaml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-mesh\nspec:\n  action: container-kill\n  mode: one\n  containerNames: ['prometheus']\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on this example, Chaos Mesh injects ",(0,s.jsx)(n.code,{children:"container-kill"})," into the specified container and kills the container once."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After the configuration file is prepared, use ",(0,s.jsx)(n.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f ./container-kill.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"field-description",children:"Field description"}),"\n",(0,s.jsx)(n.p,{children:"The following table describes the fields in the YAML configuration file."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"action"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Specifies the fault type to inject. The supported types include ",(0,s.jsx)(n.code,{children:"pod-failure"}),", ",(0,s.jsx)(n.code,{children:"pod-kill"}),", and ",(0,s.jsx)(n.code,{children:"container-kill"}),"."]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pod-kill"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mode"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Specifies the mode of the experiment. The mode options include ",(0,s.jsx)(n.code,{children:"one"})," (selecting a random Pod), ",(0,s.jsx)(n.code,{children:"all"})," (selecting all eligible Pods), ",(0,s.jsx)(n.code,{children:"fixed"})," (selecting a specified number of eligible Pods), ",(0,s.jsx)(n.code,{children:"fixed-percent"})," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,s.jsx)(n.code,{children:"random-max-percent"})," (selecting the maximum percentage of Pods from the eligible Pods)."]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"one"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Provides parameters for the ",(0,s.jsx)(n.code,{children:"mode"})," configuration, depending on ",(0,s.jsx)(n.code,{children:"mode"}),".For example, when ",(0,s.jsx)(n.code,{children:"mode"})," is set to ",(0,s.jsx)(n.code,{children:"fixed-percent"}),", ",(0,s.jsx)(n.code,{children:"value"})," specifies the percentage of Pods."]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"struct"}),(0,s.jsxs)(n.td,{children:["Specifies the target Pod. For details, refer to ",(0,s.jsx)(n.a,{href:"/docs/2.5.2/define-chaos-experiment-scope",children:"Define the experiment scope"}),"."]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"containerNames"}),(0,s.jsx)(n.td,{children:"[]string"}),(0,s.jsxs)(n.td,{children:["When you configure ",(0,s.jsx)(n.code,{children:"action"})," to ",(0,s.jsx)(n.code,{children:"container-kill"}),", this configuration is mandatory to specify the target container name for injecting faults."]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"['prometheus']"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gracePeriod"}),(0,s.jsx)(n.td,{children:"int64"}),(0,s.jsxs)(n.td,{children:["When you configure ",(0,s.jsx)(n.code,{children:"action"})," to ",(0,s.jsx)(n.code,{children:"pod-kill"}),", this configuration is mandatory to specify the duration before deleting Pod."]}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"duration"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Specifies the duration of the experiment."}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"30s"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"some-notes-for-pod-failure-chaos-experiment",children:'Some Notes for "Pod Failure" Chaos Experiment'}),"\n",(0,s.jsx)(n.p,{children:'TLDR; There are several suggestions for using "Pod Failure" chaos experiment:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Change to an available "pause image" if you are operating an air-gapped Kubernetes cluster.'}),"\n",(0,s.jsxs)(n.li,{children:["Setup ",(0,s.jsx)(n.code,{children:"livenessProbe"})," and ",(0,s.jsx)(n.code,{children:"readinessProbe"})," for containers."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pod Failure Chaos Experiment would change the ",(0,s.jsx)(n.code,{children:"image"}),' of each container in the target Pod to the "pause image", which is a special image that does not perform any operations. We use ',(0,s.jsx)(n.code,{children:"gcr.io/google-containers/pause:latest"}),' as the default image as "pause image", and you could change it to any other image in helm values ',(0,s.jsx)(n.code,{children:"controllerManager.podChaos.podFailure.pauseImage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Downloading ",(0,s.jsx)(n.code,{children:"pause image"}),' would consume time, and that duration would be counted in the experiment duration. So you might find that the "actual effected duration" might be shorter than the configured duration. That\'s another reason why recommend to setup available "pause image".']}),"\n",(0,s.jsxs)(n.p,{children:['Another ambiguous point is that "pause image" could work "properly well" with unconfigured ',(0,s.jsx)(n.code,{children:"command"})," in the container. So if the container is configured without ",(0,s.jsx)(n.code,{children:"command"}),", ",(0,s.jsx)(n.code,{children:"livenessProbe"})," and ",(0,s.jsx)(n.code,{children:"readinessProbe"}),", the container would be inspected as ",(0,s.jsx)(n.code,{children:"Running"})," and ",(0,s.jsx)(n.code,{children:"Ready"}),', although it had been changed to the "pause image", and actually does not provide functionalities as normal or not-available. So setup ',(0,s.jsx)(n.code,{children:"livenessProbe"})," and ",(0,s.jsx)(n.code,{children:"readinessProbe"})," for containers is recommended."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},39512:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},88672:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(50959);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
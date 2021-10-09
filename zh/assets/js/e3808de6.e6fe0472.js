"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2775],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"FAQs"},l=void 0,c={unversionedId:"faqs",id:"version-1.1.4/faqs",isDocsHomePage:!1,title:"FAQs",description:"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?",source:"@site/versioned_docs/version-1.1.4/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/zh/docs/1.1.4/faqs",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/faqs.md",tags:[],version:"1.1.4",frontMatter:{title:"FAQs"},sidebar:"version-1.1.4/docs",previous:{title:"Add Facilities to Chaos Daemon",permalink:"/zh/docs/1.1.4/development_guides/add_facilities_to_chaos_daemon"},next:{title:"Chaos Mesh v1.0.0 Release Notes",permalink:"/zh/docs/1.1.4/releases/v1.0.0"}},d=[{value:"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?",id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments",children:[]},{value:"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown below:",id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-below",children:[]},{value:"Q: I just saw <code>ERROR: failed to get cluster internal kubeconfig: command &quot;docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf&quot; failed with error: exit status 1</code> when installing Chaos Mesh with kind. How to fix it?",id:"q-i-just-saw-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it",children:[]},{value:"Debug",id:"debug",children:[{value:"Q: Experiment not working after chaos is applied",id:"q-experiment-not-working-after-chaos-is-applied",children:[]}]},{value:"IOChaos",id:"iochaos",children:[{value:"Q: Running chaosfs sidecar container failed, and log shows <code>pid file found, ensure docker is not running or delete /tmp/fuse/pid</code>",id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid",children:[]}]},{value:"Install",id:"install",children:[{value:"Q: While trying to install chaos-mesh in OpenShift, tripped over problems regarding authorization.",id:"q-while-trying-to-install-chaos-mesh-in-openshift-tripped-over-problems-regarding-authorization",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments"},"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?"),(0,r.kt)("p",null,"No, you can not use Chaos Mesh in this case. But still you can run chaos experiments using command line. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/blob/master/doc/command_line_chaos.md"},"Command Line Usages of Chaos")," for details."),(0,r.kt)("h3",{id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-below"},"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'2020-06-18T01:05:26.207Z    ERROR   controllers.TimeChaos   failed to apply chaos on all pods   {"reconciler": "timechaos", "error": "rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp xx.xx.xx.xx:xxxxx: connect: connection refused\\""}\n')),(0,r.kt)("p",null,"You can try using the parameter: ",(0,r.kt)("inlineCode",{parentName:"p"},"hostNetwork"),", as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# vim helm/chaos-mesh/values.yaml, change hostNetwork from false to true\nhostNetwork: true\n")),(0,r.kt)("h3",{id:"q-i-just-saw-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it"},"Q: I just saw ",(0,r.kt)("inlineCode",{parentName:"h3"},'ERROR: failed to get cluster internal kubeconfig: command "docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf" failed with error: exit status 1')," when installing Chaos Mesh with kind. How to fix it?"),(0,r.kt)("p",null,"You can try the following command to fix it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster\n")),(0,r.kt)("p",null,"then deploy again."),(0,r.kt)("h2",{id:"debug"},"Debug"),(0,r.kt)("h3",{id:"q-experiment-not-working-after-chaos-is-applied"},"Q: Experiment not working after chaos is applied"),(0,r.kt)("p",null,"You can debug as described below:"),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," to check the specified chaos experiment resource."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are ",(0,r.kt)("inlineCode",{parentName:"p"},"NextStart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRecover")," fields under ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", then the chaos will be triggered after ",(0,r.kt)("inlineCode",{parentName:"p"},"NextStart")," is executed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are no ",(0,r.kt)("inlineCode",{parentName:"p"},"NextStart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRecover"),"fields in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", run the following command to get controller-manager's log and see whether there are errors in it."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl logs -n chaos-testing chaos-controller-manager-xxxxx (replace this with the name of the controller-manager) | grep "ERROR"\n')),(0,r.kt)("p",{parentName:"li"},"For error message ",(0,r.kt)("inlineCode",{parentName:"p"},"no pod is selected"),", run the following command to show the labels and check if the selector is desired."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n yourNamespace --show-labels\n")))),(0,r.kt)("p",null,"If the above steps cannot solve the problem or you encounter other related errors in controller's log, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"file an issue")," or message us in the #project-chaos-mesh channel in the ",(0,r.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"CNCF Slack")," workspace."),(0,r.kt)("h2",{id:"iochaos"},"IOChaos"),(0,r.kt)("h3",{id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid"},"Q: Running chaosfs sidecar container failed, and log shows ",(0,r.kt)("inlineCode",{parentName:"h3"},"pid file found, ensure docker is not running or delete /tmp/fuse/pid")),(0,r.kt)("p",null,"The chaosfs sidecar container is continuously restarting, and you might see the following logs at the current sidecar container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'2020-01-19T06:30:56.629Z    INFO    chaos-daemon    Init hookfs\n2020-01-19T06:30:56.630Z    ERROR   chaos-daemon    failed to create pid file   {"error": "pid file found, ensure docker is not running or delete /tmp/fuse/pid"}\ngithub.com/go-logr/zapr.(*zapLogger).Error\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cause"),": Chaos Mesh uses Fuse to inject I/O failures. It fails if you specify an existing directory as the source path for chaos. This often happens when you try to reuse a persistent volume (PV) with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Retain")," reclaim policy to request a PersistentVolumeClaims (PVC) resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solution"),": In this case, use the following command to change the reclaim policy to ",(0,r.kt)("inlineCode",{parentName:"li"},"Delete"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch pv <your-pv-name> -p \'{"spec":{"persistentVolumeReclaimPolicy":"Delete"}}\'\n')),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"q-while-trying-to-install-chaos-mesh-in-openshift-tripped-over-problems-regarding-authorization"},"Q: While trying to install chaos-mesh in OpenShift, tripped over problems regarding authorization."),(0,r.kt)("p",null,"Message most looked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Error creating: pods "chaos-daemon-" is forbidden: unable\n to validate against any security context constraint: [spec.securityContext.hostNetwork:\n Invalid value: true: Host network is not allowed to be used spec.securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.securityContext.hostIPC:\n Invalid value: true: Host IPC is not allowed to be used securityContext.runAsUser:\n Invalid value: "hostPath": hostPath volumes are not allowed to be used spec.containers[0].securityContext.volumes[1]:\n Invalid value: true: Host network is not allowed to be used spec.containers[0].securityContext.containers[0].hostPort:\n Invalid value: 31767: Host ports are not allowed to be used spec.containers[0].securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.containers[0].securityContext.hostIPC:\n......]\n')),(0,r.kt)("p",null,"You need to add privileged scc to default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user privileged -n chaos-testing -z default\n")))}p.isMDXComponent=!0}}]);
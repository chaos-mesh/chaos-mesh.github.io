(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(201)),i={id:"faqs",title:"FAQs",sidebar_label:"FAQs"},s={unversionedId:"faqs",id:"version-1.0.1/faqs",isDocsHomePage:!1,title:"FAQs",description:"Question",source:"@site/versioned_docs/version-1.0.1/faqs.md",slug:"/faqs",permalink:"/docs/faqs",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/versioned_docs/version-1.0.1/faqs.md",version:"1.0.1",sidebar_label:"FAQs",sidebar:"version-1.0.1/docs",previous:{title:"Develop a New Chaos",permalink:"/docs/development_guides/develop_a_new_chaos"},next:{title:"Chaos Mesh v1.0.0 Release Notes",permalink:"/docs/releases/v1.0.0"}},c=[{value:"Question",id:"question",children:[{value:"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?",id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments",children:[]},{value:"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown below:",id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-below",children:[]},{value:"Q: I just saw <code>ERROR: failed to get cluster internal kubeconfig: command &quot;docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf&quot; failed with error: exit status 1</code> when installing Chaos Mesh with kind. How to fix it?",id:"q-i-just-saw-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it",children:[]}]},{value:"Debug",id:"debug",children:[{value:"Q: Experiment not working after chaos is applied",id:"q-experiment-not-working-after-chaos-is-applied",children:[]}]},{value:"IOChaos",id:"iochaos",children:[{value:"Q: Running chaosfs sidecar container failed, and log shows <code>pid file found, ensure docker is not running or delete /tmp/fuse/pid</code>",id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid",children:[]}]},{value:"Install",id:"install",children:[{value:"Q: While trying to install chaos-mesh in OpenShift, tripped over problems regarding authorization.",id:"q-while-trying-to-install-chaos-mesh-in-openshift-tripped-over-problems-regarding-authorization",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("h3",{id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments"},"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?"),Object(r.b)("p",null,"No, you can not use Chaos Mesh in this case. But still you can run chaos experiments using command line. Refer to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/pingcap/tipocket/blob/master/doc/command_line_chaos.md"}),"Command Line Usages of Chaos")," for details."),Object(r.b)("h3",{id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-below"},"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'2020-06-18T01:05:26.207Z    ERROR   controllers.TimeChaos   failed to apply chaos on all pods   {"reconciler": "timechaos", "error": "rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp xx.xx.xx.xx:xxxxx: connect: connection refused\\""}\n')),Object(r.b)("p",null,"You can try using the parameter: ",Object(r.b)("inlineCode",{parentName:"p"},"hostNetwork"),",  as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"# vim helm/chaos-mesh/values.yaml, change hostNetwork from false to true\nhostNetwork: true\n")),Object(r.b)("h3",{id:"q-i-just-saw-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it"},"Q: I just saw ",Object(r.b)("inlineCode",{parentName:"h3"},'ERROR: failed to get cluster internal kubeconfig: command "docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf" failed with error: exit status 1')," when installing Chaos Mesh with kind. How to fix it?"),Object(r.b)("p",null,"You can try the following command to fix it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kind delete cluster\n")),Object(r.b)("p",null,"then deploy again."),Object(r.b)("h2",{id:"debug"},"Debug"),Object(r.b)("h3",{id:"q-experiment-not-working-after-chaos-is-applied"},"Q: Experiment not working after chaos is applied"),Object(r.b)("p",null,"You can debug as described below:"),Object(r.b)("p",null,"Execute ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl describe")," to check the specified chaos experiment resource."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If there are ",Object(r.b)("inlineCode",{parentName:"p"},"NextStart")," and ",Object(r.b)("inlineCode",{parentName:"p"},"NextRecover")," fields under ",Object(r.b)("inlineCode",{parentName:"p"},"spec"),", then the chaos will be triggered after ",Object(r.b)("inlineCode",{parentName:"p"},"NextStart")," is executed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If there are no ",Object(r.b)("inlineCode",{parentName:"p"},"NextStart")," and ",Object(r.b)("inlineCode",{parentName:"p"},"NextRecover"),"fields in ",Object(r.b)("inlineCode",{parentName:"p"},"spec"),", run the following command to get controller-manager's log and see whether there are errors in it."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'kubectl logs -n chaos-testing chaos-controller-manager-xxxxx (replace this with the name of the controller-manager) | grep "ERROR"\n')),Object(r.b)("p",{parentName:"li"},"  For error message ",Object(r.b)("inlineCode",{parentName:"p"},"no pod is selected"),", run the following command to show the labels and check if the selector is desired."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -n yourNamespace --show-labels\n")))),Object(r.b)("p",null,"If the above steps cannot solve the problem or you encounter other related errors in controller's log, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"file an issue")," or message us in the #project-chaos-mesh channel in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://join.slack.com/t/cloud-native/shared_invite/zt-fyy3b8up-qHeDNVqbz1j8HDY6g1cY4w"}),"CNCF Slack")," workspace."),Object(r.b)("h2",{id:"iochaos"},"IOChaos"),Object(r.b)("h3",{id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid"},"Q: Running chaosfs sidecar container failed, and log shows ",Object(r.b)("inlineCode",{parentName:"h3"},"pid file found, ensure docker is not running or delete /tmp/fuse/pid")),Object(r.b)("p",null,"The chaosfs sidecar container is continuously restarting, and you might see the following logs at the current sidecar container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'2020-01-19T06:30:56.629Z    INFO    chaos-daemon    Init hookfs\n2020-01-19T06:30:56.630Z    ERROR   chaos-daemon    failed to create pid file   {"error": "pid file found, ensure docker is not running or delete /tmp/fuse/pid"}\ngithub.com/go-logr/zapr.(*zapLogger).Error\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cause"),": Chaos Mesh uses Fuse to inject I/O failures. It fails if you specify an existing directory as the source path for chaos. This often happens when you try to reuse a persistent volume (PV) with the ",Object(r.b)("inlineCode",{parentName:"li"},"Retain")," reclaim policy to request a PersistentVolumeClaims (PVC) resource."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Solution"),": In this case, use the following command to change the reclaim policy to ",Object(r.b)("inlineCode",{parentName:"li"},"Delete"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'kubectl patch pv <your-pv-name> -p \'{"spec":{"persistentVolumeReclaimPolicy":"Delete"}}\'\n')),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("h3",{id:"q-while-trying-to-install-chaos-mesh-in-openshift-tripped-over-problems-regarding-authorization"},"Q: While trying to install chaos-mesh in OpenShift, tripped over problems regarding authorization."),Object(r.b)("p",null,"Message most looked like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'Error creating: pods "chaos-daemon-" is forbidden: unable\n to validate against any security context constraint: [spec.securityContext.hostNetwork:\n Invalid value: true: Host network is not allowed to be used spec.securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.securityContext.hostIPC:\n Invalid value: true: Host IPC is not allowed to be used securityContext.runAsUser:\n Invalid value: "hostPath": hostPath volumes are not allowed to be used spec.containers[0].securityContext.volumes[1]:\n Invalid value: true: Host network is not allowed to be used spec.containers[0].securityContext.containers[0].hostPort:\n Invalid value: 31767: Host ports are not allowed to be used spec.containers[0].securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.containers[0].securityContext.hostIPC:\n......]\n')),Object(r.b)("p",null,"You need to add privileged scc to default."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"oc adm policy add-scc-to-user privileged -n chaos-testing -z default\n")))}d.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
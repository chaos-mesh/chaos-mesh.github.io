(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(185)),i={id:"faqs",title:"FAQs",sidebar_label:"FAQs"},s={id:"faqs",title:"FAQs",description:"Question",source:"@site/docs/faqs.md",permalink:"/docs/faqs",editUrl:"https://github.com/pingcap/chaos-mesh/edit/master/website/docs/faqs.md",sidebar_label:"FAQs",sidebar:"docs",previous:{title:"Develop a New Chaos",permalink:"/docs/development_guides/develop_a_new_chaos"},next:{title:"Chaos Mesh v0.8.0 Release Notes",permalink:"/docs/releases/v0.8.0"}},c=[{value:"Question",id:"question",children:[{value:"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?",id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments",children:[]},{value:"Q: When I deploy Chaos-mesh successfully, Then I create PodChaos experiments successfully, but create NetworkChaos/TimeChaos Experiment failed. The log is shown below, what&#39;s the matter\uff1f",id:"q-when-i-deploy-chaos-mesh-successfully-then-i-create-podchaos-experiments-successfully-but-create-networkchaostimechaos-experiment-failed-the-log-is-shown-below-whats-the-matter\uff1f",children:[]},{value:"Q: If you see an error message like this <code>ERROR: failed to get cluster internal kubeconfig: command &quot;docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf&quot; failed with error: exit status 1</code> when installing Chaos Mesh with kind. How to fix it?",id:"q-if-you-see-an-error-message-like-this-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it",children:[]}]},{value:"Debug",id:"debug",children:[{value:"Q: Experiment not working after chaos is applied",id:"q-experiment-not-working-after-chaos-is-applied",children:[]}]},{value:"IOChaos",id:"iochaos",children:[{value:"Q: Running chaosfs sidecar container failed, and log shows <code>pid file found, ensure docker is not running or delete /tmp/fuse/pid</code>",id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"question"},"Question"),Object(a.b)("h3",{id:"q-if-i-do-not-have-kubernetes-clusters-deployed-can-i-use-chaos-mesh-to-create-chaos-experiments"},"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?"),Object(a.b)("p",null,"No, you can not use Chaos Mesh in this case. But still you can run chaos experiments using command line. Refer to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pingcap/tipocket/blob/master/doc/command_line_chaos.md"}),"Command Line Usages of Chaos")," for details."),Object(a.b)("h3",{id:"q-when-i-deploy-chaos-mesh-successfully-then-i-create-podchaos-experiments-successfully-but-create-networkchaostimechaos-experiment-failed-the-log-is-shown-below-whats-the-matter\uff1f"},"Q: When I deploy Chaos-mesh successfully, Then I create PodChaos experiments successfully, but create NetworkChaos/TimeChaos Experiment failed. The log is shown below, what's the matter\uff1f"),Object(a.b)("p",null,"I get chaos-controller-manager's log, as shown below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'2020-06-18T01:05:26.207Z    ERROR   controllers.TimeChaos   failed to apply chaos on all pods   {"reconciler": "timechaos", "error": "rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp xx.xx.xx.xx:xxxxx: connect: connection refused\\""}\n')),Object(a.b)("p",null,"You can try use the parameters: ",Object(a.b)("inlineCode",{parentName:"p"},"hostNetwork"),". Usage is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# vim helm/chaos-mesh/values.yaml, change hostNetwork from false to true\nhostNetwork: true\n")),Object(a.b)("h3",{id:"q-if-you-see-an-error-message-like-this-error-failed-to-get-cluster-internal-kubeconfig-command-docker-exec---privileged-kind-control-plane-cat-etckubernetesadminconf-failed-with-error-exit-status-1-when-installing-chaos-mesh-with-kind-how-to-fix-it"},"Q: If you see an error message like this ",Object(a.b)("inlineCode",{parentName:"h3"},'ERROR: failed to get cluster internal kubeconfig: command "docker exec --privileged kind-control-plane cat /etc/kubernetes/admin.conf" failed with error: exit status 1')," when installing Chaos Mesh with kind. How to fix it?"),Object(a.b)("p",null,"You can try the following command to fix it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kind delete cluster\n")),Object(a.b)("p",null,"then deploy again"),Object(a.b)("h2",{id:"debug"},"Debug"),Object(a.b)("h3",{id:"q-experiment-not-working-after-chaos-is-applied"},"Q: Experiment not working after chaos is applied"),Object(a.b)("p",null,"You can debug as described below:"),Object(a.b)("p",null,"Execute ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe")," to check the specified chaos experiment resource."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If there are ",Object(a.b)("inlineCode",{parentName:"p"},"NextStart")," and ",Object(a.b)("inlineCode",{parentName:"p"},"NextRecover")," fields under ",Object(a.b)("inlineCode",{parentName:"p"},"spec"),", then the chaos will be triggered after ",Object(a.b)("inlineCode",{parentName:"p"},"NextStart")," is executed.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If there are no ",Object(a.b)("inlineCode",{parentName:"p"},"NextStart")," and ",Object(a.b)("inlineCode",{parentName:"p"},"NextRecover"),"fields in ",Object(a.b)("inlineCode",{parentName:"p"},"spec"),", run the following command to get controller-manager's log and see whether there are errors in it."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'kubectl logs -n chaos-testing chaos-controller-manager-xxxxx (replace this with the name of the controller-manager) | grep "ERROR"\n')),Object(a.b)("p",{parentName:"li"},"  For error message ",Object(a.b)("inlineCode",{parentName:"p"},"no pod is selected"),", run the following command to show the labels and check if the selector is desired."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -n yourNamespace --show-labels\n")))),Object(a.b)("p",null,"If the above steps cannot solve the problem or you encounter other related errors in controller's log, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/issues"}),"file an issue")," or message us in #sig-chaos-mesh channel in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://pingcap.com/tidbslack"}),"TiDB Community")," slack workspace."),Object(a.b)("h2",{id:"iochaos"},"IOChaos"),Object(a.b)("h3",{id:"q-running-chaosfs-sidecar-container-failed-and-log-shows-pid-file-found-ensure-docker-is-not-running-or-delete-tmpfusepid"},"Q: Running chaosfs sidecar container failed, and log shows ",Object(a.b)("inlineCode",{parentName:"h3"},"pid file found, ensure docker is not running or delete /tmp/fuse/pid")),Object(a.b)("p",null,"The chaosfs sidecar container is continuously restarting, and you might see the following logs at the current sidecar container:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'2020-01-19T06:30:56.629Z    INFO    chaos-daemon    Init hookfs\n2020-01-19T06:30:56.630Z    ERROR   chaos-daemon    failed to create pid file   {"error": "pid file found, ensure docker is not running or delete /tmp/fuse/pid"}\ngithub.com/go-logr/zapr.(*zapLogger).Error\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Cause"),": Chaos Mesh uses Fuse to inject I/O failures. It fails if you specify an existing directory as the source path for chaos. This often happens when you try to reuse a persistent volume (PV) with the ",Object(a.b)("inlineCode",{parentName:"li"},"Retain")," reclaim policy to request a PersistentVolumeClaims (PVC) resource."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Solution"),": In this case, use the following command to change the reclaim policy to ",Object(a.b)("inlineCode",{parentName:"li"},"Delete"),":")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'kubectl patch pv <your-pv-name> -p \'{"spec":{"persistentVolumeReclaimPolicy":"Delete"}}\'\n')))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5624],{89400:(e,t,o)=>{o.d(t,{Z:()=>h});var s=o(91262),n=o(52263),a=o(28084),i=o(90814),r=o(67294),l=o(81249),c=o.n(l),d=o(56871);const h=e=>{let{children:t,className:o="language-bash"}=e;const{siteConfig:l}=(0,n.Z)(),{versions:h}=(0,a.eZ)("docusaurus-plugin-content-docs");return r.createElement(s.Z,null,(()=>{const e=(0,d.p)(l,h),s="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(i.Z,{className:o},t.replace("--version latest",s).trim())}))}},56871:(e,t,o)=>{o.d(t,{Z:()=>c,p:()=>l});var s=o(91262),n=o(52263),a=o(28084),i=o(90814),r=o(67294);const l=(e,t)=>{const o=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(o===e.baseUrl&&s)return"current"===s?"latest":s;if(o.includes("/docs/next"))return"latest";const n=t.find((e=>e.isLast)),a=t.find((e=>o.includes(e.name)));return a?a.name:n.name};const c=e=>{let{children:t,replaced:o="latest",isArchive:c=!1,className:d="language-bash"}=e;const{siteConfig:h}=(0,n.Z)(),{versions:u}=(0,a.eZ)("docusaurus-plugin-content-docs");return r.createElement(s.Z,null,(()=>{const e=l(h,u),s=c?t.replace(o,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(o,"v"+e);return r.createElement(i.Z,{className:d},s)}))}},72094:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=o(87462),n=(o(67294),o(3905)),a=o(89400);const i={title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)"},r=void 0,l={unversionedId:"faqs",id:"version-2.4.0/faqs",title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)",description:"\u95ee\u9898",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/zh/docs/faqs",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/faqs.md",tags:[],version:"2.4.0",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)"},sidebar:"docs",previous:{title:"\u62d3\u5c55 Chaosd \u7ec4\u4ef6",permalink:"/zh/docs/extend-chaosd"},next:{title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0",permalink:"/zh/docs/upgrade-to-2.0"}},c={},d=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"Q: If I do not have deployed Kubernetes clusters, can I use Chaos Mesh to create chaos experiments?",id:"q-if-i-do-not-have-deployed-kubernetes-clusters-can-i-use-chaos-mesh-to-create-chaos-experiments",level:3},{value:"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown as below:",id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-as-below",level:3},{value:"Q: The default administrator Google Cloud user account is forbidden to create chaos experiments. How to fix it?",id:"q-the-default-administrator-google-cloud-user-account-is-forbidden-to-create-chaos-experiments-how-to-fix-it",level:3},{value:"Q: Daemon throws an error similar to <code>version 1.41 is too new. The maximum supported API version is 1.39</code>",id:"q-daemon-throws-an-error-similar-to-version-141-is-too-new-the-maximum-supported-api-version-is-139",level:3},{value:"DNSChaos",id:"dnschaos",level:2},{value:"Q: While trying to run DNSChaos in OpenShift, the problems regarding authorization blocked the process",id:"q-while-trying-to-run-dnschaos-in-openshift-the-problems-regarding-authorization-blocked-the-process",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Q: While trying to install Chaos Mesh in OpenShift, the problems regarding authorization blocked the installation process",id:"q-while-trying-to-install-chaos-mesh-in-openshift-the-problems-regarding-authorization-blocked-the-installation-process",level:3},{value:"Q: Failed to install Chaos Mesh with the message: no matches for kind &quot;CustomResourceDefinition&quot; in version &quot;apiextensions.k8s.io/v1&quot;",id:"q-failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1",level:3}],h={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,n.kt)("h3",{id:"q-if-i-do-not-have-deployed-kubernetes-clusters-can-i-use-chaos-mesh-to-create-chaos-experiments"},"Q: If I do not have deployed Kubernetes clusters, can I use Chaos Mesh to create chaos experiments?"),(0,n.kt)("p",null,"No. Instead, you could use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/"},(0,n.kt)("inlineCode",{parentName:"a"},"chaosd"))," to inject failures without kubernetes."),(0,n.kt)("h3",{id:"q-i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-as-below"},"Q: I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown as below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'2020-06-18T02:49:15.160Z ERROR controllers.TimeChaos failed to apply chaos on all pods {"reconciler": "timechaos", "error": "rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp xx.xx.xx.xx:xxxx: connect: connection refused\\""}\n')),(0,n.kt)("p",null,"The reason is that ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," failed to connect to ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),". You need to first check the Pod network and its ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"policies"),"."),(0,n.kt)("p",null,"If everything is in order, maybe you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostNetwork")," parameter to fix this problem as follows:"),(0,n.kt)(a.Z,{mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --version latest --set chaosDaemon.hostNetwork=true"),(0,n.kt)("p",null,"Reference: ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#hostport-services-do-not-work"},"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#hostport-services-do-not-work")),(0,n.kt)("h3",{id:"q-the-default-administrator-google-cloud-user-account-is-forbidden-to-create-chaos-experiments-how-to-fix-it"},"Q: The default administrator Google Cloud user account is forbidden to create chaos experiments. How to fix it?"),(0,n.kt)("p",null,"The default administrator Google Cloud user cannot be checked by ",(0,n.kt)("inlineCode",{parentName:"p"},"AdmissionReview"),". You need to create an administrator role and assign the role to your account to grant the privilege of creating chaos experiments to it. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: role-cluster-manager-pdmas\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'watch', 'list']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-testing\nsubjects:\n  # Google Cloud user account\n  - kind: User\n    name: USER_ACCOUNT\nroleRef:\n  kind: ClusterRole\n  name: role-cluster-manager-pdmas\n  apiGroup: rbac.authorization.k8s.io\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"USER_ACCOUNT")," above should be your Google Cloud user email."),(0,n.kt)("h3",{id:"q-daemon-throws-an-error-similar-to-version-141-is-too-new-the-maximum-supported-api-version-is-139"},"Q: Daemon throws an error similar to ",(0,n.kt)("inlineCode",{parentName:"h3"},"version 1.41 is too new. The maximum supported API version is 1.39")),(0,n.kt)("p",null,"This indicates that the maximum API version that the Docker daemon can accept is ",(0,n.kt)("inlineCode",{parentName:"p"},"1.39"),", but the client in ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"1.41")," by default. You can choose the following options to solve this problem:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upgrade your Docker to a newer version."),(0,n.kt)("li",{parentName:"ol"},"Helm install/upgrade with ",(0,n.kt)("inlineCode",{parentName:"li"},"--set chaosDaemon.env.DOCKER_API_VERSION=1.39"),".")),(0,n.kt)("h2",{id:"dnschaos"},"DNSChaos"),(0,n.kt)("h3",{id:"q-while-trying-to-run-dnschaos-in-openshift-the-problems-regarding-authorization-blocked-the-process"},"Q: While trying to run DNSChaos in OpenShift, the problems regarding authorization blocked the process"),(0,n.kt)("p",null,"If the error message is similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Error creating: pods "chaos-dns-server-123aa56123-" is forbidden: unable to validate against any security context constraint: [spec.containers[0].securityContext.capabilities.add: Invalid value: "NET_BIND_SERVICE": capability may not be added]\n')),(0,n.kt)("p",null,"You need to add the privileged Security Context Constraints (SCC) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-dns-server"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user privileged -n chaos-testing -z chaos-dns-server\n")),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("h3",{id:"q-while-trying-to-install-chaos-mesh-in-openshift-the-problems-regarding-authorization-blocked-the-installation-process"},"Q: While trying to install Chaos Mesh in OpenShift, the problems regarding authorization blocked the installation process"),(0,n.kt)("p",null,"If the error message is similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Error creating: pods "chaos-daemon-" is forbidden: unable\n to validate against any security context constraint: [spec.securityContext.hostNetwork:\n Invalid value: true: Host network is not allowed to be used spec.securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.securityContext.hostIPC:\n Invalid value: true: Host IPC is not allowed to be used securityContext.runAsUser:\n Invalid value: "hostPath": hostPath volumes are not allowed to be used spec.containers[0].securityContext.volumes[1]:\n Invalid value: true: Host network is not allowed to be used spec.containers[0].securityContext.containers[0].hostPort:\n Invalid value: 31767: Host ports are not allowed to be used spec.containers[0].securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.containers[0].securityContext.hostIPC:\n......]\n')),(0,n.kt)("p",null,"You need to add privileged scc to default."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user privileged -n chaos-testing -z chaos-daemon\n")),(0,n.kt)("h3",{id:"q-failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},'Q: Failed to install Chaos Mesh with the message: no matches for kind "CustomResourceDefinition" in version "apiextensions.k8s.io/v1"'),(0,n.kt)("p",null,"This issue occurs when you install Chaos Mesh on Kubernetes v1.15 or an earlier version. We use ",(0,n.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1")," by default, but it was introduced in Kubernetes v1.16 on 2019-09-19."),(0,n.kt)("p",null,"When you install Chaos Mesh on Kubernetes lower than v1.16, you need to follow the below process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Manually create CRD through ",(0,n.kt)("inlineCode",{parentName:"li"},"https://mirrors.chaos-mesh.org/<chaos-mesh-version>/crd-v1beta1.yaml"),"."),(0,n.kt)("li",{parentName:"ol"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"--validate=false"),". If the configuration is not added, compatibility issues with breaking changes with CRD might occur. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl create -f https://mirrors.chaos-mesh.org/v2.1.0/crd-v1beta1.yaml --validate=false"),"."),(0,n.kt)("li",{parentName:"ol"},"Use Helm to finish the rest process of installation, and append ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-crds")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"helm install")," command.")),(0,n.kt)("p",null,"We suggest upgrading your Kubernetes cluster by referencing Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/releases/version-skew-policy/"},"Version Skew Policy"),"."))}u.isMDXComponent=!0}}]);
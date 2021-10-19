"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7185],{89400:function(e,a,t){var n=t(91262),s=t(16213),r=t(67294),i=t(18141),o=t.n(i),l=t(52263),c=t(56871),p=t(28084);a.Z=function(e){var a=e.children,t=e.className,i=void 0===t?"language-bash":t,u=(0,l.Z)().siteConfig,d=(0,p.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(n.Z,null,(function(){var e=(0,c.p)(u,d),t="latest"===e?"":"--version "+function(e){if(o().satisfies(e,">=2.0.3"))return e;var a=e.slice(0,3);return"v"+(parseFloat(a)-.7)+e.slice(3)}(e);return r.createElement(s.Z,{className:i},a.replace("--version latest",t).trim())}))}},56871:function(e,a,t){t.d(a,{p:function(){return l}});var n=t(91262),s=t(16213),r=t(67294),i=t(52263),o=t(28084),l=function(e,a){var t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var s=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||s};a.Z=function(e){var a=e.children,t=e.className,c=void 0===t?"language-bash":t,p=(0,i.Z)().siteConfig,u=(0,o.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(n.Z,null,(function(){var e=l(p,u),t="latest"===e?a:a.replace("latest","v"+e);return r.createElement(s.Z,{className:c},t)}))}},26299:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),i=t(89400),o=["components"],l={title:"Chaos Dashboard"},c=void 0,p={unversionedId:"user_guides/dashboard",id:"version-1.2.3/user_guides/dashboard",isDocsHomePage:!1,title:"Chaos Dashboard",description:"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard.",source:"@site/versioned_docs/version-1.2.3/user_guides/dashboard.md",sourceDirName:"user_guides",slug:"/user_guides/dashboard",permalink:"/docs/1.2.3/user_guides/dashboard",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/user_guides/dashboard.md",tags:[],version:"1.2.3",frontMatter:{title:"Chaos Dashboard"},sidebar:"version-1.2.3/docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/1.2.3/user_guides/run_chaos_experiment"},next:{title:"PodChaos Experiment",permalink:"/docs/1.2.3/chaos_experiments/podchaos"}},u=[{value:"Install Chaos Dashboard",id:"install-chaos-dashboard",children:[]},{value:"Enable/Disable security mode",id:"enabledisable-security-mode",children:[]},{value:"Access Chaos Dashboard",id:"access-chaos-dashboard",children:[]},{value:"Log In",id:"log-in",children:[{value:"Create the account",id:"create-the-account",children:[]},{value:"Get the token",id:"get-the-token",children:[]},{value:"Fill in",id:"fill-in",children:[]}]},{value:"Create a chaos experiment",id:"create-a-chaos-experiment",children:[]},{value:"Manage a chaos experiment",id:"manage-a-chaos-experiment",children:[]},{value:"Quick glance",id:"quick-glance",children:[]},{value:"Manage existing tokens",id:"manage-existing-tokens",children:[]}],d={toc:u};function m(e){var a=e.components,l=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard."),(0,r.kt)("h2",{id:"install-chaos-dashboard"},"Install Chaos Dashboard"),(0,r.kt)("p",null,"Chaos Dashboard is installed by default after v1.2.0. You can run the following command to check the status of Chaos Dashboard Pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# chaos-testing: the default namespace for installing Chaos Mesh\nkubectl get pod -n chaos-testing -l app.kubernetes.io/component=chaos-dashboard\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaos-dashboard-b8767fbcd-46cnd   1/1     Running   0          31m\n")),(0,r.kt)("p",null,"If you don't get the Chaos Dashboard pod, you can add it by executing:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dashboard.create=true"),(0,r.kt)("h2",{id:"enabledisable-security-mode"},"Enable/Disable security mode"),(0,r.kt)("p",null,"Chaos Dashboard supports a security mode, which requires users to login with a token generated by Kubernetes. Each token is linked to a ",(0,r.kt)("inlineCode",{parentName:"p"},"service account"),". You can only perform operations within the scope as allowed by the role that is associated with the service account."),(0,r.kt)("p",null,"The security mode is enabled by default if you install via Helm. You can disable it by executing:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dashboard.securityMode=false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For actual testing scenarios, we strongly recommend that you enable the security mode."),(0,r.kt)("li",{parentName:"ul"},"The security mode is disabled if you install Chaos Mesh by ",(0,r.kt)("inlineCode",{parentName:"li"},"install.sh"),", which is suitable for trying Chaos Mesh out."))),(0,r.kt)("h2",{id:"access-chaos-dashboard"},"Access Chaos Dashboard"),(0,r.kt)("p",null,"A typical way to access Chaos Dashboard is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,r.kt)("p",null,"Now you should be able to access ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),(0,r.kt)("h2",{id:"log-in"},"Log In"),(0,r.kt)("p",null,"By default, the security mode is enabled when using helm to install Chaos Mesh, and you will need to log in Chaos Dashboard with an account ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),". This section introduces how to create the account and the token. You can skip this step if you have disabled the security mode."),(0,r.kt)("h3",{id:"create-the-account"},"Create the account"),(0,r.kt)("p",null,"Chaos Dashboard supports Role-Based Access Control (",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"},"RBAC"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you want to create the account later and start using Chaos Dashboard quickly, you can use the token of Chaos Mesh. Get the token by executing the command: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep chaos-controller-manager | awk '{print $1}')"),", and then you can go to ",(0,r.kt)("a",{parentName:"li",href:"#fill-in"},"Fill in")," directly."))),(0,r.kt)("p",null,"To create the account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Role"),". Here are sample role configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster Manager")),(0,r.kt)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under all namespaces in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),(0,r.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-manager\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster Viewer")),(0,r.kt)("p",{parentName:"li"},"This role has permission to view chaos experiments under all namespaces in the Kubernetes cluster."),(0,r.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-viewer\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Namespace Manager")),(0,r.kt)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under a specified namespace in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),(0,r.kt)("p",{parentName:"li"},"The sample configuration file is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-manager\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Namespace Viewer")),(0,r.kt)("p",{parentName:"li"},"This role has access to the chaos experiment under a specified namespace in the Kubernetes cluster."),(0,r.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-viewer\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", and bind it with a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Role"),". Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"},"RBAC")," for more details. Here are sample configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a ServiceAccount and bind cluster role")),(0,r.kt)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Manager")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Viewer"),"."),(0,r.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  name: account-cluster-manager # use "account-cluster-viewer" for viewer\n  namespace: chaos-testing\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: bind-cluster-manager # use "bind-cluster-viewer" for viewer\nsubjects:\n  - kind: ServiceAccount\n    name: account-cluster-manager # use "account-cluster-viewer" for viewer\n    namespace: chaos-testing\nroleRef:\n  kind: ClusterRole\n  name: cluster-role-manager # use "cluster-role-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a ServiceAccount and bind namespace role")),(0,r.kt)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace Manager")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace Viewer"),"."),(0,r.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  name: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n  namespace: test\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-namespace-test-manager # use "bind-namespace-test-viewer" for viewer\n  namespace: test\nsubjects:\n  - kind: ServiceAccount\n    name: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n    namespace: test\nroleRef:\n  kind: Role\n  name: namespace-test-role-manager # use "namespace-test-role-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n')))))),(0,r.kt)("h3",{id:"get-the-token"},"Get the token"),(0,r.kt)("p",null,"The token is generated by Kubernetes. To get a token for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," created above, run command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n ${namespace} describe secret $(kubectl -n ${namespace} get secret | grep ${service-account-name} | awk '{print $1}')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"${namespace}")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"${service-account-name}")," with the actual value. For example, executing command ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep cluster-role-manager | awk '{print $1}')")," to get the token of ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster-role-manager"),"."))),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md#getting-a-bearer-token"},"getting-a-bearer-token")," for more details."),(0,r.kt)("h3",{id:"fill-in"},"Fill in"),(0,r.kt)("p",null,"With the token generated, you need to identify it with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),". A meaningful name is recommended, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster-Manager"),", to indicate that the token has permissions managed chaos experiments in the cluster."),(0,r.kt)("p",null,"Fill in the form with ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard-login",src:t(69145).Z})),(0,r.kt)("h2",{id:"create-a-chaos-experiment"},"Create a chaos experiment"),(0,r.kt)("p",null,"To create a chaos experiment on Chaos Dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," button to create a new chaos experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"dashboard-new-experiment",src:t(49393).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the chaos experiment, including the experiment type, name, scheduling information, etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"dashboard-fill-experiment",src:t(46009).Z})))),(0,r.kt)("h2",{id:"manage-a-chaos-experiment"},"Manage a chaos experiment"),(0,r.kt)("p",null,"To manage a specific chaos experiment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Experiments")," button to view all the chaos experiments."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"dashboard-experiments",src:t(87065).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the target experiment to view the detail, archive, pause or update."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"dashboard-experiment-detail",src:t(79871).Z})))),(0,r.kt)("h2",{id:"quick-glance"},"Quick glance"),(0,r.kt)("p",null,"Through the steps just now, you already know how to create an experiment and view its detail. But this is only one of the main features of the dashboard."),(0,r.kt)("p",null,"Next, you can click the ",(0,r.kt)("strong",{parentName:"p"},"TUTORIAL")," button on the homepage to learn about all the features of the dashboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard-home",src:t(85277).Z})),(0,r.kt)("h2",{id:"manage-existing-tokens"},"Manage existing tokens"),(0,r.kt)("p",null,"To create and manage existing tokens:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard-settings",src:t(38364).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode=false")," is set, this section will be invisible.")))}m.isMDXComponent=!0},79871:function(e,a,t){a.Z=t.p+"assets/images/dashboard-exp-detail-755ab29ad6a851b63e1baeea6bbb525e.png"},87065:function(e,a,t){a.Z=t.p+"assets/images/dashboard-experiments-8c56e1d4159760b615c6de0e8218e3fe.png"},46009:function(e,a,t){a.Z=t.p+"assets/images/dashboard-fill-exp-65a6e463019749a2169e8ac731ec37fe.png"},85277:function(e,a,t){a.Z=t.p+"assets/images/dashboard-home-4b546b72e9cb6466225379d1e553c942.png"},69145:function(e,a,t){a.Z=t.p+"assets/images/dashboard-login-841eeaf483f58b24b98db4855386f64c.png"},49393:function(e,a,t){a.Z=t.p+"assets/images/dashboard-new-exp-5c57e4024410b334b40fa905d9f98969.png"},38364:function(e,a,t){a.Z=t.p+"assets/images/dashboard-settings-8360eee965ec3042d238edb86bf310aa.png"}}]);
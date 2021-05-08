(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9847],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4948:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var n=t(2122),r=t(9756),s=(t(7294),t(3905)),i={id:"dashboard",title:"Chaos Dashboard"},o={unversionedId:"user_guides/dashboard",id:"version-1.1.4/user_guides/dashboard",isDocsHomePage:!1,title:"Chaos Dashboard",description:"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard.",source:"@site/versioned_docs/version-1.1.4/user_guides/dashboard.md",sourceDirName:"user_guides",slug:"/user_guides/dashboard",permalink:"/docs/1.1.4/user_guides/dashboard",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/user_guides/dashboard.md",version:"1.1.4",frontMatter:{id:"dashboard",title:"Chaos Dashboard"},sidebar:"version-1.1.4/docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/1.1.4/user_guides/run_chaos_experiment"},next:{title:"PodChaos Experiment",permalink:"/docs/1.1.4/chaos_experiments/podchaos_experiment"}},l=[{value:"Install Chaos Dashboard",id:"install-chaos-dashboard",children:[]},{value:"Enable/Disable security mode",id:"enabledisable-security-mode",children:[]},{value:"Access Chaos Dashboard",id:"access-chaos-dashboard",children:[]},{value:"Log In",id:"log-in",children:[{value:"Create the account",id:"create-the-account",children:[]},{value:"Get the token",id:"get-the-token",children:[]},{value:"Fill in",id:"fill-in",children:[]}]},{value:"Create a chaos experiment",id:"create-a-chaos-experiment",children:[]},{value:"Manage a chaos experiment",id:"manage-a-chaos-experiment",children:[]},{value:"Quick glance",id:"quick-glance",children:[]},{value:"Manage existing tokens",id:"manage-existing-tokens",children:[]}],c={toc:l};function p(e){var a=e.components,i=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard."),(0,s.kt)("h2",{id:"install-chaos-dashboard"},"Install Chaos Dashboard"),(0,s.kt)("p",null,"You can install Chaos Mesh with Chaos Dashboard by executing the command below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true\n")),(0,s.kt)("p",null,"If you have already installed Chaos Mesh, upgrade it by executing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true\n")),(0,s.kt)("h2",{id:"enabledisable-security-mode"},"Enable/Disable security mode"),(0,s.kt)("p",null,"Chaos Dashboard supports a security mode, which requires users to login with a token generated by Kubernetes. Each token is linked to a ",(0,s.kt)("inlineCode",{parentName:"p"},"service account"),". You can only perform operations within the scope as allowed by the role that is associated with the service account."),(0,s.kt)("p",null,"The security mode is enabled by default if you install via Helm. You can disable it by executing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.securityMode=false\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"For actual testing scenarios, we strongly recommend that you enable the security mode."),(0,s.kt)("li",{parentName:"ul"},"The security mode is disabled if you install Chaos Mesh by ",(0,s.kt)("inlineCode",{parentName:"li"},"install.sh"),", which is suitable for trying Chaos Mesh out."))),(0,s.kt)("h2",{id:"access-chaos-dashboard"},"Access Chaos Dashboard"),(0,s.kt)("p",null,"A typical way to access Chaos Dashboard is to use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,s.kt)("p",null,"Now you should be able to access ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),(0,s.kt)("h2",{id:"log-in"},"Log In"),(0,s.kt)("p",null,"By default, the security mode is enabled when using helm to install Chaos Mesh, and you will need to log in Chaos Dashboard with an account ",(0,s.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Token"),". This section introduces how to create the account and the token. You can skip this step if you have disabled the security mode."),(0,s.kt)("h3",{id:"create-the-account"},"Create the account"),(0,s.kt)("p",null,"Chaos Dashboard supports Role-Based Access Control (",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"},"RBAC"),")."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"If you want to create the account later and start using Chaos Dashboard quickly, you can use the token of Chaos Mesh. Get the token by executing the command: ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep chaos-controller-manager | awk '{print $1}')"),", and then you can go to ",(0,s.kt)("a",{parentName:"li",href:"#fill-in"},"Fill in")," directly."))),(0,s.kt)("p",null,"To create the account:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create the ",(0,s.kt)("inlineCode",{parentName:"p"},"Role"),". Here are sample role configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Cluster Manager")),(0,s.kt)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under all namespaces in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),(0,s.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-manager\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Cluster Viewer")),(0,s.kt)("p",{parentName:"li"},"This role has permission to view chaos experiments under all namespaces in the Kubernetes cluster."),(0,s.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-viewer\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Namespace Manager")),(0,s.kt)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under a specified namespace in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),(0,s.kt)("p",{parentName:"li"},"The sample configuration file is as follows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-manager\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Namespace Viewer")),(0,s.kt)("p",{parentName:"li"},"This role has access to the chaos experiment under a specified namespace in the Kubernetes cluster."),(0,s.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-viewer\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", and bind it with a specific ",(0,s.kt)("inlineCode",{parentName:"p"},"Role"),". Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"},"RBAC")," for more details. Here are sample configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Create a ServiceAccount and bind cluster role")),(0,s.kt)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster Manager")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster Viewer"),"."),(0,s.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  name: account-cluster-manager # use "account-cluster-viewer" for viewer\n  namespace: chaos-testing\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: bind-cluster-manager # use "bind-cluster-viewer" for viewer\nsubjects:\n  - kind: ServiceAccount\n    name: account-cluster-manager # use "account-cluster-viewer" for viewer\n    namespace: chaos-testing\nroleRef:\n  kind: ClusterRole\n  name: cluster-role-manager # use "cluster-role-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Create a ServiceAccount and bind namespace role")),(0,s.kt)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",(0,s.kt)("inlineCode",{parentName:"p"},"Namespace Manager")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Namespace Viewer"),"."),(0,s.kt)("p",{parentName:"li"},"Sample configuration file:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  name: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n  namespace: test\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-namespace-test-manager # use "bind-namespace-test-viewer" for viewer\n  namespace: test\nsubjects:\n  - kind: ServiceAccount\n    name: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n    namespace: test\nroleRef:\n  kind: Role\n  name: namespace-test-role-manager # use "namespace-test-role-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n')))))),(0,s.kt)("h3",{id:"get-the-token"},"Get the token"),(0,s.kt)("p",null,"The token is generated by Kubernetes. To get a token for the ",(0,s.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," created above, run command below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n ${namespace} describe secret $(kubectl -n ${namespace} get secret | grep ${service-account-name} | awk '{print $1}')\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"You need to replace the ",(0,s.kt)("inlineCode",{parentName:"li"},"${namespace}")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"${service-account-name}")," with the actual value. For example, executing command ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep cluster-role-manager | awk '{print $1}')")," to get the token of ",(0,s.kt)("inlineCode",{parentName:"li"},"cluster-role-manager"),"."))),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md#getting-a-bearer-token"},"getting-a-bearer-token")," for more details."),(0,s.kt)("h3",{id:"fill-in"},"Fill in"),(0,s.kt)("p",null,"With the token generated, you need to identify it with a ",(0,s.kt)("inlineCode",{parentName:"p"},"Name"),". A meaningful name is recommended, for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster-Manager"),", to indicate that the token has permissions managed chaos experiments in the cluster."),(0,s.kt)("p",null,"Fill in the form with ",(0,s.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Token"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"dashboard-login",src:t(9145).Z})),(0,s.kt)("h2",{id:"create-a-chaos-experiment"},"Create a chaos experiment"),(0,s.kt)("p",null,"To create a chaos experiment on Chaos Dashboard:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," button to create a new chaos experiment:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"dashboard-new-experiment",src:t(9393).Z}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure the chaos experiment, including the experiment type, name, scheduling information, etc."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"dashboard-fill-experiment",src:t(6009).Z})))),(0,s.kt)("h2",{id:"manage-a-chaos-experiment"},"Manage a chaos experiment"),(0,s.kt)("p",null,"To manage a specific chaos experiment:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"Experiments")," button to view all the chaos experiments."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"dashboard-experiments",src:t(7065).Z}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose the target experiment to view the detail, archive, pause or update."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"dashboard-experiment-detail",src:t(9871).Z})))),(0,s.kt)("h2",{id:"quick-glance"},"Quick glance"),(0,s.kt)("p",null,"Through the steps just now, you already know how to create an experiment and view its detail. But this is only one of the main features of the dashboard."),(0,s.kt)("p",null,"Next, you can click the ",(0,s.kt)("strong",{parentName:"p"},"TUTORIAL")," button on the homepage to learn about all the features of the dashboard."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"dashboard-home",src:t(5277).Z})),(0,s.kt)("h2",{id:"manage-existing-tokens"},"Manage existing tokens"),(0,s.kt)("p",null,"To create and manage existing tokens:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"dashboard-settings",src:t(8364).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If ",(0,s.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode=false")," is set, this section will be invisible.")))}p.isMDXComponent=!0},9871:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-exp-detail-755ab29ad6a851b63e1baeea6bbb525e.png"},7065:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-experiments-8c56e1d4159760b615c6de0e8218e3fe.png"},6009:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-fill-exp-65a6e463019749a2169e8ac731ec37fe.png"},5277:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-home-4b546b72e9cb6466225379d1e553c942.png"},9145:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-login-841eeaf483f58b24b98db4855386f64c.png"},9393:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-new-exp-5c57e4024410b334b40fa905d9f98969.png"},8364:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboard-settings-8360eee965ec3042d238edb86bf310aa.png"}}]);
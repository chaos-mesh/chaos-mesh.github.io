(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(197)),s={id:"dashboard",title:"Chaos Dashboard"},i={unversionedId:"user_guides/dashboard",id:"user_guides/dashboard",isDocsHomePage:!1,title:"Chaos Dashboard",description:"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard.",source:"@site/docs/user_guides/dashboard.md",slug:"/user_guides/dashboard",permalink:"/docs/next/user_guides/dashboard",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/user_guides/dashboard.md",version:"current",sidebar:"docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/next/user_guides/run_chaos_experiment"},next:{title:"PodChaos Experiment",permalink:"/docs/next/chaos_experiments/podchaos_experiment"}},o=[{value:"Install Chaos Dashboard",id:"install-chaos-dashboard",children:[]},{value:"Enable/Disable security mode",id:"enabledisable-security-mode",children:[]},{value:"Access Chaos Dashboard",id:"access-chaos-dashboard",children:[]},{value:"Log In",id:"log-in",children:[{value:"Create the account",id:"create-the-account",children:[]},{value:"Get the token",id:"get-the-token",children:[]},{value:"Fill in",id:"fill-in",children:[]}]},{value:"Create a chaos experiment",id:"create-a-chaos-experiment",children:[]},{value:"Manage a chaos experiment",id:"manage-a-chaos-experiment",children:[]},{value:"Quick glance",id:"quick-glance",children:[]},{value:"Manage existing tokens",id:"manage-existing-tokens",children:[]}],l={rightToc:o};function b(e){var a=e.components,s=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,s,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard."),Object(c.b)("h2",{id:"install-chaos-dashboard"},"Install Chaos Dashboard"),Object(c.b)("p",null,"You can install Chaos Mesh with Chaos Dashboard by executing the command below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true\n")),Object(c.b)("p",null,"If you have already installed Chaos Mesh, upgrade it by executing:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true\n")),Object(c.b)("h2",{id:"enabledisable-security-mode"},"Enable/Disable security mode"),Object(c.b)("p",null,"Chaos Dashboard supports a security mode, which requires users to login with a token generated by Kubernetes. Each token is linked to a ",Object(c.b)("inlineCode",{parentName:"p"},"service account"),". You can only perform operations within the scope as allowed by the role that is associated with the service account."),Object(c.b)("p",null,"The security mode is enabled by default if you install via Helm. You can disable it by executing:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.securityMode=false\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"For actual testing scenarios, we strongly recommend that you enable the security mode."),Object(c.b)("li",{parentName:"ul"},"The security mode is disabled if you install Chaos Mesh by ",Object(c.b)("inlineCode",{parentName:"li"},"install.sh"),", which is suitable for trying Chaos Mesh out."))),Object(c.b)("h2",{id:"access-chaos-dashboard"},"Access Chaos Dashboard"),Object(c.b)("p",null,"A typical way to access Chaos Dashboard is to use ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),Object(c.b)("p",null,"Now you should be able to access ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:2333"}),Object(c.b)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),Object(c.b)("h2",{id:"log-in"},"Log In"),Object(c.b)("p",null,"By default, the security mode is enabled when using helm to install Chaos Mesh, and you will need to log in Chaos Dashboard with an account ",Object(c.b)("inlineCode",{parentName:"p"},"Name")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Token"),". This section introduces how to create the account and the token. You can skip this step if you have disabled the security mode."),Object(c.b)("h3",{id:"create-the-account"},"Create the account"),Object(c.b)("p",null,"Chaos Dashboard supports Role-Based Access Control (",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"}),"RBAC"),")."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"If you want to create the account later and start using Chaos Dashboard quickly, you can use the token of Chaos Mesh. Get the token by executing the command: ",Object(c.b)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep chaos-controller-manager | awk '{print $1}')"),", and then you can go to ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#fill-in"}),"Fill in")," directly."))),Object(c.b)("p",null,"To create the account:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create the ",Object(c.b)("inlineCode",{parentName:"p"},"Role"),". Here are sample role configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Cluster Manager")),Object(c.b)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under all namespaces in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),Object(c.b)("p",{parentName:"li"},"Sample configuration file:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-manager\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Cluster Viewer")),Object(c.b)("p",{parentName:"li"},"This role has permission to view chaos experiments under all namespaces in the Kubernetes cluster."),Object(c.b)("p",{parentName:"li"},"Sample configuration file:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-role-viewer\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Namespace Manager")),Object(c.b)("p",{parentName:"li"},"This role has administrative permissions on chaos experiments under a specified namespace in the Kubernetes cluster, including creating, updating, archiving, and viewing chaos experiments."),Object(c.b)("p",{parentName:"li"},"The sample configuration file is as follows:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-manager\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n      - create\n      - update\n      - patch\n      - delete\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Namespace Viewer")),Object(c.b)("p",{parentName:"li"},"This role has access to the chaos experiment under a specified namespace in the Kubernetes cluster."),Object(c.b)("p",{parentName:"li"},"Sample configuration file:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: namespace-test-role-viewer\n  namespace: test\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs:\n      - get\n      - list\n      - watch\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create a ",Object(c.b)("inlineCode",{parentName:"p"},"ServiceAccount"),", and bind it with a specific ",Object(c.b)("inlineCode",{parentName:"p"},"Role"),". Refer to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"}),"RBAC")," for more details. Here are sample configurations that you can choose from and edit to meet your specific requirement. You need to save the configuration to an YAML file, and then use ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl apply -f {YAML-File}")," to create it."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create a ServiceAccount and bind namespace role")),Object(c.b)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",Object(c.b)("inlineCode",{parentName:"p"},"Namespace Manager")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Namespace Viewer"),"."),Object(c.b)("p",{parentName:"li"},"Sample configuration file:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'kind: ServiceAccount\napiVersion: v1\nmetadata:\nnamespace: namespace-test\nname: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-namespace-test-manager # use "bind-namespace-test-viewer" for viewer\n  namespace: namespace-test\nsubjects:\n  - kind: ServiceAccount\n    name: account-namespace-test-manager # use "account-namespace-test-viewer" for viewer\n    namespace: namespace-test\nroleRef:\n  kind: Role\n  name: role-namespace-test-manager # use "role-namespace-test-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create a ServiceAccount and bind cluster role")),Object(c.b)("p",{parentName:"li"},"Create a ServiceAccount and bind it with the role ",Object(c.b)("inlineCode",{parentName:"p"},"Namespace Manager")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Namespace Viewer"),"."),Object(c.b)("p",{parentName:"li"},"Sample configuration file:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  name: account-cluster-manager # use "account-cluster-viewer" for viewer\n  namespace: chaos-testing\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: bind-cluster-manager # use "bind-cluster-viewer" for viewer\nsubjects:\n  - kind: ServiceAccount\n    name: account-cluster-manager # # use "account-cluster-viewer" for viewer\n    namespace: chaos-testing\nroleRef:\n  kind: ClusterRole\n  name: cluster-role-manager # use "cluster-role-viewer" for viewer\n  apiGroup: rbac.authorization.k8s.io\n')))))),Object(c.b)("h3",{id:"get-the-token"},"Get the token"),Object(c.b)("p",null,"The token is generated by Kubernetes. To get a token for the ",Object(c.b)("inlineCode",{parentName:"p"},"ServiceAccount")," created above, run command below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl -n ${namespace} describe secret $(kubectl -n ${namespace} get secret | grep ${service-account-name} | awk '{print $1}')\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"You need to replace the ",Object(c.b)("inlineCode",{parentName:"li"},"${namespace}")," and ",Object(c.b)("inlineCode",{parentName:"li"},"${service-account-name}")," with the actual value. For example, executing command ",Object(c.b)("inlineCode",{parentName:"li"},"kubectl -n chaos-testing describe secret $(kubectl -n chaos-testing get secret | grep cluster-role-manager | awk '{print $1}')")," to get the token of ",Object(c.b)("inlineCode",{parentName:"li"},"cluster-role-manager"),"."))),Object(c.b)("p",null,"Refer to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md#getting-a-bearer-token"}),"getting-a-bearer-token")," for more details."),Object(c.b)("h3",{id:"fill-in"},"Fill in"),Object(c.b)("p",null,"With the token generated, you need to identify it with a ",Object(c.b)("inlineCode",{parentName:"p"},"Name"),". A meaningful name is recommended, for example, ",Object(c.b)("inlineCode",{parentName:"p"},"Cluster-Manager"),", to indicate that the token has permissions managed chaos experiments in the cluster."),Object(c.b)("p",null,"Fill in the form with ",Object(c.b)("inlineCode",{parentName:"p"},"Name")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Token"),":"),Object(c.b)("p",null,Object(c.b)("img",{alt:"dashboard-login",src:t(280).default})),Object(c.b)("h2",{id:"create-a-chaos-experiment"},"Create a chaos experiment"),Object(c.b)("p",null,"To create a chaos experiment on Chaos Dashboard:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the ",Object(c.b)("strong",{parentName:"p"},"NEW EXPERIMENT")," button to create a new chaos experiment:"),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{alt:"dashboard-new-experiment",src:t(281).default}))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Configure the chaos experiment, including the experiment type, name, scheduling information, etc."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{alt:"dashboard-fill-experiment",src:t(282).default})))),Object(c.b)("h2",{id:"manage-a-chaos-experiment"},"Manage a chaos experiment"),Object(c.b)("p",null,"To manage a specific chaos experiment:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the ",Object(c.b)("strong",{parentName:"p"},"Experiments")," button to view all the chaos experiments."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{alt:"dashboard-experiments",src:t(283).default}))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Choose the target experiment to view the detail, archive, pause or update."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{alt:"dashboard-experiment-detail",src:t(284).default})))),Object(c.b)("h2",{id:"quick-glance"},"Quick glance"),Object(c.b)("p",null,"Through the steps just now, you already know how to create an experiment and view its detail. But this is only one of the main features of the dashboard."),Object(c.b)("p",null,"Next, you can click the ",Object(c.b)("strong",{parentName:"p"},"TUTORIAL")," button on the homepage to learn about all the features of the dashboard."),Object(c.b)("p",null,Object(c.b)("img",{alt:"dashboard-home",src:t(285).default})),Object(c.b)("h2",{id:"manage-existing-tokens"},"Manage existing tokens"),Object(c.b)("p",null,"To create and manage existing tokens:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"dashboard-settings",src:t(286).default})))}b.isMDXComponent=!0},197:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=b(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(t),m=n,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return t?r.a.createElement(d,i(i({ref:a},l),{},{components:t})):r.a.createElement(d,i({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},280:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-login-841eeaf483f58b24b98db4855386f64c.png"},281:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-new-exp-5c57e4024410b334b40fa905d9f98969.png"},282:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-fill-exp-65a6e463019749a2169e8ac731ec37fe.png"},283:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-experiments-8c56e1d4159760b615c6de0e8218e3fe.png"},284:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-exp-detail-755ab29ad6a851b63e1baeea6bbb525e.png"},285:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-home-4b546b72e9cb6466225379d1e553c942.png"},286:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dashboard-settings-8360eee965ec3042d238edb86bf310aa.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[760],{89400:function(e,n,a){var t=a(91262),s=a(16213),o=a(67294),i=a(81249),r=a.n(i),c=a(52263),p=a(56871),l=a(28084);n.Z=function(e){var n=e.children,a=e.className,i=void 0===a?"language-bash":a,u=(0,c.Z)().siteConfig,m=(0,l.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(t.Z,null,(function(){var e=(0,p.p)(u,m),a="latest"===e?"":"--version "+function(e){if(r().satisfies(e,">=2.0.3"))return e;var n=e.slice(0,3);return"v"+(parseFloat(n)-.7)+e.slice(3)}(e);return o.createElement(s.Z,{className:i},n.replace("--version latest",a).trim())}))}},56871:function(e,n,a){a.d(n,{p:function(){return c}});var t=a(91262),s=a(16213),o=a(67294),i=a(52263),r=a(28084),c=function(e,n){var a=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&t)return"current"===t?"latest":t;if(a.includes("/docs/next"))return"latest";var s=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||s};n.Z=function(e){var n=e.children,a=e.className,p=void 0===a?"language-bash":a,l=(0,i.Z)().siteConfig,u=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(t.Z,null,(function(){var e=c(l,u),a="latest"===e?n:n.replace("latest","v"+e);return o.createElement(s.Z,{className:p},a)}))}},46004:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var t=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(89400),r=["components"],c={title:"Manage User Permissions"},p=void 0,l={unversionedId:"manage-user-permissions",id:"version-2.0.5/manage-user-permissions",isDocsHomePage:!1,title:"Manage User Permissions",description:"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication.",source:"@site/versioned_docs/version-2.0.5/manage-user-permissions.md",sourceDirName:".",slug:"/manage-user-permissions",permalink:"/docs/2.0.5/manage-user-permissions",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.5/manage-user-permissions.md",tags:[],version:"2.0.5",frontMatter:{title:"Manage User Permissions"},sidebar:"version-2.0.5/docs",previous:{title:"Install Chaos Mesh Offline",permalink:"/docs/2.0.5/offline-installation"},next:{title:"Configure namespace for Chaos experiments",permalink:"/docs/2.0.5/configure-enabled-namespace"}},u=[{value:"Create user accounts and bind permissions",id:"create-user-accounts-and-bind-permissions",children:[]},{value:"Manage Tokens",id:"manage-tokens",children:[]},{value:"Enable or disable permission authentication",id:"enable-or-disable-permission-authentication",children:[]}],m={toc:u};function h(e){var n=e.components,c=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication."),(0,o.kt)("p",null,"Chaos Mesh uses the native ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," features in Kubernetes to manage user roles and permissions. To create, view and manage Chaos experiments, users need to have the corresponding permissions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiGroups")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," to customize resources of Chaos experiments."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Chaos Mesh is installed using Helm, permission authentication is enabled by default. For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled. If you just want to give Chaos Mesh a try and quickly create Chaos experiments without enabling the permission authentication feature, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"#enable-or-disable-permission-authentication"},"Enable or disable permission authentication")," to learn how to disable the feature."))),(0,o.kt)("h3",{id:"create-user-accounts-and-bind-permissions"},"Create user accounts and bind permissions"),(0,o.kt)("p",null,"You can create user accounts and bind permissions directly through the Chaos Mesh Dashboard interface. When you access the Dashboard, a login window pops up. Click the link ",(0,o.kt)("strong",{parentName:"p"},"Click here to generate"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard Token Login",src:a(66078).Z})),(0,o.kt)("p",null,"After you click the link, another window pops up as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard Token Generator",src:a(15648).Z})),(0,o.kt)("p",null,"The steps to create user accounts and bind permissions are as follows. You need to perform the first three of the following steps in the pop-up window:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the permission scope"),(0,o.kt)("p",{parentName:"li"},"If you want to give the account the appropriate permissions for all Chaos experiments in Kubernetes, check the ",(0,o.kt)("strong",{parentName:"p"},"Cluster scoped")," box. If you specify a namespace in the ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," dropdown option box, the account only has permissions in that specified namespace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the user role"),(0,o.kt)("p",{parentName:"li"},"Currently, Chaos Mesh provides the following user roles:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Manager, who has all permissions to create, view, update, and delete Chaos experiments."),(0,o.kt)("li",{parentName:"ul"},"Viewer, who has only the view permission for Chaos experiments."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate RBAC configurations"),(0,o.kt)("p",{parentName:"li"},"After determining the permission scope and user role of the created account, the Dashboard shows the corresponding RBAC configuration on the pop-up window page. For example, the RBAC configurations for a manager account in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"busybox")," looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  kind: ServiceAccount\n  apiVersion: v1\n  metadata:\n    namespace: busybox\n    name: account-busybox-manager-zcbaf\n\n  ---\n  kind: Role\n  apiVersion: rbac.authorization.k8s.io/v1\n  metadata:\n    namespace: busybox\n    name: role-busybox-manager-zcbaf\n  rules:\n  - apiGroups: [""]\n    resources: ["pods", "namespaces"]\n    verbs: ["get", "watch", "list"]\n  - apiGroups:\n    - chaos-mesh.org\n    resources: [ "*" ]\n    verbs: ["get", "list", "watch", "create", "delete", "patch", "update"]\n\n  ---\n  apiVersion: rbac.authorization.k8s.io/v1\n  kind: RoleBinding\n  metadata:\n    name: bind-busybox-manager-zcbaf\n    namespace: busybox\n  subjects:\n  - kind: ServiceAccount\n    name: account-busybox-manager-zcbaf\n    namespace: busybox\n  roleRef:\n    kind: Role\n    name: role-busybox-manager-zcbaf\n    apiGroup: rbac.authorization.k8s.io\n')),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"COPY")," in the upper right corner of the configuration section in the pop-up window to copy the RBAC configuration and then save the content as ",(0,o.kt)("inlineCode",{parentName:"p"},"rbac.yaml")," locally.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the user account and bind permissions"),(0,o.kt)("p",{parentName:"li"},"Run the following command in your terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f rbac.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the token"),(0,o.kt)("p",{parentName:"li"},"Copy the command shown in the third step on the Token generator page and run the command in your terminal. The following is an example command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe - n busybox secrets account-busybox-manager-zcbaf\n")),(0,o.kt)("p",{parentName:"li"},"The output is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Name:         account-busybox-manager-zcbaf-token-x572r\nNamespace:    busybox\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-busybox-manager-zcbaf\n              kubernetes.io/service-account.uid: 19757b8d-195f-4231-b193-be18280b65d3\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1025 bytes\nnamespace:  7 bytes\ntoken:      eyJhbGciOi...z-PWMK8iQ\n")),(0,o.kt)("p",{parentName:"li"},"Copy the token data in the above output and use it for the next step to log in.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to Chaos Mesh with the user account you have created"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Close")," the Token generator window and return to the login window. Enter the token that you have got from the previous step in the ",(0,o.kt)("strong",{parentName:"p"},"Token")," input box and enter a meaningful name for the token in the ",(0,o.kt)("strong",{parentName:"p"},"Name")," input box. It is recommended to use a name consisting of the permission scope and the user role, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"busybox-manager"),". Once you finish filling these two input boxes, click ",(0,o.kt)("strong",{parentName:"p"},"Submit")," to log in:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Dashboard Token Login",src:a(43864).Z})))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You need to ensure that the local user who executes kubectl has permissions for the cluster so that this user can create user accounts, bind permission for other users, and generate tokens.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have not deployed Chaos Mesh Dashboard, you can also generate RBAC configurations by yourself, then use kubectl to create user accounts and bind permissions."))))),(0,o.kt)("h3",{id:"manage-tokens"},"Manage Tokens"),(0,o.kt)("p",null,"If you need to manage tokens, click the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button shown in the left side bar on the Dashboard web page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard Token Management",src:a(47217).Z})),(0,o.kt)("p",null,"In the right part of this page, you can add new tokens in the ",(0,o.kt)("strong",{parentName:"p"},"Add token")," window, or click the ",(0,o.kt)("strong",{parentName:"p"},"Use")," button at the bottom of the page to switch between tokens with different permissions, or click the square button to delete a token."),(0,o.kt)("h3",{id:"enable-or-disable-permission-authentication"},"Enable or disable permission authentication"),(0,o.kt)("p",null,"If Chaos Mesh is installed using Helm, the permission authentication feature is enabled by default.For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled.If you just want to give Chaos Mesh a try and quickly create Chaos experiments with the permission authentication feature disabled, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=false")," in a Helm command. The command is as follows:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dashboard.securityMode=false"),(0,o.kt)("p",null,"If you want to enable the permission authentication feature again, then reset ",(0,o.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=true")," in a Helm command."))}h.isMDXComponent=!0},66078:function(e,n,a){n.Z=a.p+"assets/images/dashboard_login1-a553968e8199c19ea87d6368d8b949bf.png"},43864:function(e,n,a){n.Z=a.p+"assets/images/dashboard_login2-65a76a2cdb9ba4804fed68edcc4631f2.png"},15648:function(e,n,a){n.Z=a.p+"assets/images/token_helper-34e518f1de2376ea567878283974a83d.png"},47217:function(e,n,a){n.Z=a.p+"assets/images/token_manager-64698b85e59de246c3b40fee6578fa71.png"}}]);
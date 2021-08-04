"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2203],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return t?a.createElement(d,s(s({ref:n},l),{},{components:t})):a.createElement(d,s({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48892:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),s={title:"Manage User Permissions"},i=void 0,c={unversionedId:"manage-user-permissions",id:"manage-user-permissions",isDocsHomePage:!1,title:"Manage User Permissions",description:"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication.",source:"@site/docs/manage-user-permissions.md",sourceDirName:".",slug:"/manage-user-permissions",permalink:"/docs/next/manage-user-permissions",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/manage-user-permissions.md",version:"current",frontMatter:{title:"Manage User Permissions"},sidebar:"docs",previous:{title:"Install Chaos Mesh Offline",permalink:"/docs/next/offline-installation"},next:{title:"Configure Protected Namespaces",permalink:"/docs/next/configure-protected-namespace"}},p=[{value:"Create user accounts and bind permissions",id:"create-user-accounts-and-bind-permissions",children:[]},{value:"Manage Tokens",id:"manage-tokens",children:[]},{value:"Enable or disable permission authentication",id:"enable-or-disable-permission-authentication",children:[]}],l={toc:p};function u(e){var n=e.components,s=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication."),(0,r.kt)("p",null,"Chaos Mesh uses the native ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," features in Kubernetes to manage user roles and permissions. To create, view and manage Chaos experiments, users need to have the corresponding permissions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiGroups")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," to customize resources of Chaos experiments."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If Chaos Mesh is installed using Helm, permission authentication is enabled by default. For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled. If you just want to give Chaos Mesh a try and quickly create Chaos experiments without enabling the permission authentication feature, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"#enable-or-disable-permission-authentication"},"Enable or disable permission authentication")," to learn how to disable the feature."))),(0,r.kt)("h3",{id:"create-user-accounts-and-bind-permissions"},"Create user accounts and bind permissions"),(0,r.kt)("p",null,"You can create user accounts and bind permissions directly through the Chaos Mesh Dashboard interface. When you access the Dashboard, a login window pops up. Click the link ",(0,r.kt)("strong",{parentName:"p"},"Click here to generate"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard Token Login",src:t(24655).Z})),(0,r.kt)("p",null,"After you click the link, another window pops up as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard Token Generator",src:t(25563).Z})),(0,r.kt)("p",null,"The steps to create user accounts and bind permissions are as follows. You need to perform the first three of the following steps in the pop-up window:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the permission scope"),(0,r.kt)("p",{parentName:"li"},"If you want to give the account the appropriate permissions for all Chaos experiments in Kubernetes, check the ",(0,r.kt)("strong",{parentName:"p"},"Cluster scoped")," box. If you specify a namespace in the ",(0,r.kt)("strong",{parentName:"p"},"Namespace")," dropdown option box, the account only has permissions in that specified namespace.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the user role"),(0,r.kt)("p",{parentName:"li"},"Currently, Chaos Mesh provides the following user roles:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manager, who has all permissions to create, view, update, and delete Chaos experiments."),(0,r.kt)("li",{parentName:"ul"},"Viewer, who has only the view permission for Chaos experiments."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate RBAC configurations"),(0,r.kt)("p",{parentName:"li"},"After determining the permission scope and user role of the created account, the Dashboard shows the corresponding RBAC configuration on the pop-up window page. For example, the RBAC configurations for a manager account in the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox")," looks like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  kind: ServiceAccount\n  apiVersion: v1\n  metadata:\n    namespace: busybox\n    name: account-busybox-manager-zcbaf\n\n  ---\n  kind: Role\n  apiVersion: rbac.authorization.k8s.io/v1\n  metadata:\n    namespace: busybox\n    name: role-busybox-manager-zcbaf\n  rules:\n  - apiGroups: [""]\n    resources: ["pods", "namespaces"]\n    verbs: ["get", "watch", "list"]\n  - apiGroups:\n    - chaos-mesh.org\n    resources: [ "*" ]\n    verbs: ["get", "list", "watch", "create", "delete", "patch", "update"]\n\n  ---\n  apiVersion: rbac.authorization.k8s.io/v1\n  kind: RoleBinding\n  metadata:\n    name: bind-busybox-manager-zcbaf\n    namespace: busybox\n  subjects:\n  - kind: ServiceAccount\n    name: account-busybox-manager-zcbaf\n    namespace: busybox\n  roleRef:\n    kind: Role\n    name: role-busybox-manager-zcbaf\n    apiGroup: rbac.authorization.k8s.io\n')),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"COPY")," in the upper right corner of the configuration section in the pop-up window to copy the RBAC configuration and then save the content as ",(0,r.kt)("inlineCode",{parentName:"p"},"rbac.yaml")," locally.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the user account and bind permissions"),(0,r.kt)("p",{parentName:"li"},"Run the following command in your terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f rbac.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the token"),(0,r.kt)("p",{parentName:"li"},"Copy the command shown in the third step on the Token generator page and run the command in your terminal. The following is an example command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe - n busybox secrets account-busybox-manager-zcbaf\n")),(0,r.kt)("p",{parentName:"li"},"The output is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Name:         account-busybox-manager-zcbaf-token-x572r\nNamespace:    busybox\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-busybox-manager-zcbaf\n              kubernetes.io/service-account.uid: 19757b8d-195f-4231-b193-be18280b65d3\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1025 bytes\nnamespace:  7 bytes\ntoken:      eyJhbGciOi...z-PWMK8iQ\n")),(0,r.kt)("p",{parentName:"li"},"Copy the token data in the above output and use it for the next step to log in.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to Chaos Mesh with the user account you have created"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Close")," the Token generator window and return to the login window. Enter the token that you have got from the previous step in the ",(0,r.kt)("strong",{parentName:"p"},"Token")," input box and enter a meaningful name for the token in the ",(0,r.kt)("strong",{parentName:"p"},"Name")," input box. It is recommended to use a name consisting of the permission scope and the user role, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox-manager"),". Once you finish filling these two input boxes, click ",(0,r.kt)("strong",{parentName:"p"},"Submit")," to log in:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Dashboard Token Login",src:t(56779).Z})))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to ensure that the local user who executes kubectl has permissions for the cluster so that this user can create user accounts, bind permission for other users, and generate tokens.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have not deployed Chaos Mesh Dashboard, you can also generate RBAC configurations by yourself, then use kubectl to create user accounts and bind permissions."))))),(0,r.kt)("h3",{id:"manage-tokens"},"Manage Tokens"),(0,r.kt)("p",null,"If you need to manage tokens, click the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," button shown in the left side bar on the Dashboard web page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard Token Management",src:t(75492).Z})),(0,r.kt)("p",null,"In the right part of this page, you can add new tokens in the ",(0,r.kt)("strong",{parentName:"p"},"Add token")," window, or click the ",(0,r.kt)("strong",{parentName:"p"},"Use")," button at the bottom of the page to switch between tokens with different permissions, or click the square button to delete a token."),(0,r.kt)("h3",{id:"enable-or-disable-permission-authentication"},"Enable or disable permission authentication"),(0,r.kt)("p",null,"If Chaos Mesh is installed using Helm, the permission authentication feature is enabled by default.For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled.If you just want to give Chaos Mesh a try and quickly create Chaos experiments with the permission authentication feature disabled, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=false")," in a Helm command. The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.securityMode=false\n")),(0,r.kt)("p",null,"If you want to enable the permission authentication feature again, then reset ",(0,r.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=true")," in a Helm command."))}u.isMDXComponent=!0},24655:function(e,n,t){n.Z=t.p+"assets/images/dashboard_login1-a553968e8199c19ea87d6368d8b949bf.png"},56779:function(e,n,t){n.Z=t.p+"assets/images/dashboard_login2-65a76a2cdb9ba4804fed68edcc4631f2.png"},25563:function(e,n,t){n.Z=t.p+"assets/images/token_helper-34e518f1de2376ea567878283974a83d.png"},75492:function(e,n,t){n.Z=t.p+"assets/images/token_manager-64698b85e59de246c3b40fee6578fa71.png"}}]);
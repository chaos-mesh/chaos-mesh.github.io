"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2203],{89400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(91262),s=n(52263),o=n(28084),i=n(90814),r=n(67294),l=n(81249),c=n.n(l),p=n(56871);const u=e=>{let{children:t,className:n="language-bash"}=e;const{siteConfig:l}=(0,s.Z)(),{versions:u}=(0,o.eZ)("docusaurus-plugin-content-docs");return r.createElement(a.Z,null,(()=>{const e=(0,p.p)(l,u),a="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(i.Z,{className:n},t.replace("--version latest",a).trim())}))}},56871:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>l});var a=n(91262),s=n(52263),o=n(28084),i=n(90814),r=n(67294);const l=(e,t)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const s=t.find((e=>e.isLast)),o=t.find((e=>n.includes(e.name)));return o?o.name:s.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:u}=(0,s.Z)(),{versions:m}=(0,o.eZ)("docusaurus-plugin-content-docs");return r.createElement(a.Z,null,(()=>{const e=l(u,m),a=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return r.createElement(i.Z,{className:p},a)}))}},62492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905)),o=n(89400);const i={title:"Manage User Permissions"},r=void 0,l={unversionedId:"manage-user-permissions",id:"manage-user-permissions",title:"Manage User Permissions",description:"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication.",source:"@site/docs/manage-user-permissions.md",sourceDirName:".",slug:"/manage-user-permissions",permalink:"/docs/next/manage-user-permissions",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/manage-user-permissions.md",tags:[],version:"current",frontMatter:{title:"Manage User Permissions"},sidebar:"docs",previous:{title:"Uninstall Chaos Mesh",permalink:"/docs/next/uninstallation"},next:{title:"Configure namespace for Chaos experiments",permalink:"/docs/next/configure-enabled-namespace"}},c={},p=[{value:"Create user accounts and bind permissions",id:"create-user-accounts-and-bind-permissions",level:3},{value:"Logout Token",id:"logout-token",level:3},{value:"Enable or disable permission authentication",id:"enable-or-disable-permission-authentication",level:3}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to manage user permissions in Chaos Mesh, including creating user account of different roles, binding permissions for users, managing tokens, and enable or disable permission authentication."),(0,s.kt)("p",null,"Chaos Mesh uses the native ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," features in Kubernetes to manage user roles and permissions. To create, view and manage Chaos experiments, users need to have the corresponding permissions in the ",(0,s.kt)("inlineCode",{parentName:"p"},"apiGroups")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," to customize resources of Chaos experiments."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If Chaos Mesh is installed using Helm, permission authentication is enabled by default. For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled. If you just want to give Chaos Mesh a try and quickly create Chaos experiments without enabling the permission authentication feature, you can refer to ",(0,s.kt)("a",{parentName:"p",href:"#enable-or-disable-permission-authentication"},"Enable or disable permission authentication")," to learn how to disable the feature.")),(0,s.kt)("h3",{id:"create-user-accounts-and-bind-permissions"},"Create user accounts and bind permissions"),(0,s.kt)("p",null,"You can create user accounts and bind permissions directly through the Chaos Mesh Dashboard interface. When you access the Dashboard, a login window pops up. Click the link ",(0,s.kt)("strong",{parentName:"p"},"Click here to generate"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Login 1",src:n(94056).Z,width:"1098",height:"1216"})),(0,s.kt)("p",null,"After you click the link, another window pops up as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Generator",src:n(17786).Z,width:"1572",height:"1524"})),(0,s.kt)("p",null,"The steps to create user accounts and bind permissions are as follows. You need to perform the first three of the following steps in the pop-up window:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose the permission scope"),(0,s.kt)("p",{parentName:"li"},"If you want to give the account the appropriate permissions for all Chaos experiments in Kubernetes, check the ",(0,s.kt)("strong",{parentName:"p"},"Cluster scoped")," box. If you specify a namespace in the ",(0,s.kt)("strong",{parentName:"p"},"Namespace")," dropdown option box, the account only has permissions in that specified namespace.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose the user role"),(0,s.kt)("p",{parentName:"li"},"Currently, Chaos Mesh provides the following user roles:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Manager, who has all permissions to create, view, update, and delete Chaos experiments."),(0,s.kt)("li",{parentName:"ul"},"Viewer, who has only the view permission for Chaos experiments."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Generate RBAC configurations"),(0,s.kt)("p",{parentName:"li"},"After determining the permission scope and user role of the created account, the Dashboard shows the corresponding RBAC configuration on the pop-up window page. For example, the RBAC configurations for a manager account in the namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," looks like this:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  namespace: default\n  name: account-default-manager-vfmot\n\n---\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: default\n  name: role-default-manager-vfmot\nrules:\n- apiGroups: [""]\n  resources: ["pods", "namespaces"]\n  verbs: ["get", "watch", "list"]\n- apiGroups:\n  - chaos-mesh.org\n  resources: [ "*" ]\n  verbs: ["get", "list", "watch", "create", "delete", "patch", "update"]\n\n ---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-default-manager-vfmot\n  namespace: default\nsubjects:\n- kind: ServiceAccount\n  name: account-default-manager-vfmot\n  namespace: default\nroleRef:\n  kind: Role\n  name: role-default-manager-vfmot\n  apiGroup: rbac.authorization.k8s.io\n')),(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"COPY")," in the upper right corner of the configuration section in the pop-up window to copy the RBAC configuration and then save the content as ",(0,s.kt)("inlineCode",{parentName:"p"},"rbac.yaml")," locally.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create the user account and bind permissions"),(0,s.kt)("p",{parentName:"li"},"Run the following command in your terminal:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f rbac.yaml\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Generate the token"),(0,s.kt)("p",{parentName:"li"},"Copy the command shown in the third step on the Token generator page and run the command in your terminal. The following is an example command:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe -n default secrets account-default-manager-vfmot\n")),(0,s.kt)("p",{parentName:"li"},"The output is as follows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-log"},"Name:         account-default-manager-vfmot-token-n4tg8\nNamespace:    default\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-default-manager-vfmot\n              kubernetes.io/service-account.uid: b71b3bf4-cd5e-4efb-8bf6-ff9a55fd7e07\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1111 bytes\nnamespace:  7 bytes\ntoken:      eyJhbG...\n")),(0,s.kt)("p",{parentName:"li"},"Copy the token data in the above output and use it for the next step to log in.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Sign in to Chaos Mesh with the user account you have created"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Close")," the Token generator window and return to the login window. Enter the token that you have got from the previous step in the ",(0,s.kt)("strong",{parentName:"p"},"Token")," input box and enter a meaningful name for the token in the ",(0,s.kt)("strong",{parentName:"p"},"Name")," input box. It is recommended to use a name consisting of the permission scope and the user role, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"default-manager"),". Once you finish filling these two input boxes, click ",(0,s.kt)("strong",{parentName:"p"},"Submit")," to log in:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Dashboard Token Login 2",src:n(18621).Z,width:"1096",height:"1214"})))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"You need to ensure that the local user who executes kubectl has permissions for the cluster so that this user can create user accounts, bind permission for other users, and generate tokens.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you have not deployed Chaos Mesh Dashboard, you can also generate RBAC configurations by yourself, then use kubectl to create user accounts and bind permissions.")))),(0,s.kt)("h3",{id:"logout-token"},"Logout Token"),(0,s.kt)("p",null,"If you need to replace the token with another, click the ",(0,s.kt)("strong",{parentName:"p"},"Settings")," button shown in the left side bar on the Dashboard web page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Logout",src:n(25941).Z,width:"1348",height:"346"})),(0,s.kt)("p",null,"On the most top of the page, you can see the ",(0,s.kt)("strong",{parentName:"p"},"Logout")," button. Click the button to log out the current token."),(0,s.kt)("h3",{id:"enable-or-disable-permission-authentication"},"Enable or disable permission authentication"),(0,s.kt)("p",null,"If Chaos Mesh is installed using Helm, the permission authentication feature is enabled by default.For production environments and other scenarios with high security requirements, it is recommended to keep the permission authentication feature enabled.If you just want to give Chaos Mesh a try and quickly create Chaos experiments with the permission authentication feature disabled, you can set ",(0,s.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=false")," in a Helm command. The command is as follows:"),(0,s.kt)(o.Z,{mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dashboard.securityMode=false"),(0,s.kt)("p",null,"If you want to enable the permission authentication feature again, then reset ",(0,s.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=true")," in a Helm command."))}m.isMDXComponent=!0},94056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_login1-dfdb1c8e7065189206548133f4268ded.png"},18621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_login2-04fcd7cd8c409649d558011f74b3ea4c.png"},17786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_helper-7295fb5793a10defbb506193f39df948.png"},25941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_logout-e5c9c5cfca099f33e47ab979053d806f.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5491],{68070:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(8714),s=n(43205),o=n(73622),i=n(85881),r=n(59496),l=n(16682),c=n.n(l),u=n(62125);const d=e=>{let{children:t,className:n="language-bash"}=e;const{siteConfig:l}=(0,s.Z)(),{versions:d}=(0,o.eZ)("docusaurus-plugin-content-docs");return r.createElement(a.Z,null,(()=>{const e=(0,u.p)(l,d),a="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(i.Z,{className:n},t.replace("--version latest",a).trim())}))}},62125:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>l});var a=n(8714),s=n(43205),o=n(73622),i=n(85881),r=n(59496);const l=(e,t)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const s=t.find((e=>e.isLast)),o=t.find((e=>n.includes(e.name)));return o?o.name:s.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:u="language-bash"}=e;const{siteConfig:d}=(0,s.Z)(),{versions:p}=(0,o.eZ)("docusaurus-plugin-content-docs");return r.createElement(a.Z,null,(()=>{const e=l(d,p),a=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return r.createElement(i.Z,{className:u},a)}))}},12445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(60795),s=(n(59496),n(49613)),o=n(68070);const i={title:"Manage User Permissions"},r=void 0,l={unversionedId:"manage-user-permissions",id:"version-2.6.0/manage-user-permissions",title:"Manage User Permissions",description:"This document describes how to manage user permissions in Chaos Mesh, including creating user accounts with different roles, binding permissions to user accounts, managing tokens, and enabling or disabling permission authentication.",source:"@site/versioned_docs/version-2.6.0/manage-user-permissions.md",sourceDirName:".",slug:"/manage-user-permissions",permalink:"/docs/manage-user-permissions",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/manage-user-permissions.md",tags:[],version:"2.6.0",frontMatter:{title:"Manage User Permissions"},sidebar:"docs",previous:{title:"Uninstall Chaos Mesh",permalink:"/docs/uninstallation"},next:{title:"Configure namespace for Chaos experiments",permalink:"/docs/configure-enabled-namespace"}},c={},u=[{value:"Create user accounts and bind permissions",id:"create-user-accounts-and-bind-permissions",level:2},{value:"Choose the scope of permissions",id:"choose-the-scope-of-permissions",level:3},{value:"Select the role of users",id:"select-the-role-of-users",level:3},{value:"Generate the permission",id:"generate-the-permission",level:3},{value:"Create the user account and bind permissions",id:"create-the-user-account-and-bind-permissions",level:3},{value:"Get the token",id:"get-the-token",level:3},{value:"Log in to Chaos Dashboard with the user account you have created",id:"log-in-to-chaos-dashboard-with-the-user-account-you-have-created",level:2},{value:"Log out of Chaos Dashboard",id:"log-out-of-chaos-dashboard",level:2},{value:"FAQ",id:"faq",level:2},{value:"Enable or disable permission authentication",id:"enable-or-disable-permission-authentication",level:3}],d={toc:u},p="wrapper";function h(e){let{components:t,...i}=e;return(0,s.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to manage user permissions in Chaos Mesh, including creating user accounts with different roles, binding permissions to user accounts, managing tokens, and enabling or disabling permission authentication."),(0,s.kt)("p",null,"Chaos Mesh uses ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC Authorization")," to manage user permissions. To create, view and manage chaos experiments, users must have the appropriate permissions in the ",(0,s.kt)("inlineCode",{parentName:"p"},"apiGroups")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," to refer the resources of chaos experiments."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Chaos Mesh allows you to disable permission authentication, see ",(0,s.kt)("a",{parentName:"p",href:"#enable-or-disable-permission-authentication"},"Enable or disable permission authentication")," to learn how to disable it."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Note that we do not recommend disabling permission authentication in production environments."))),(0,s.kt)("h2",{id:"create-user-accounts-and-bind-permissions"},"Create user accounts and bind permissions"),(0,s.kt)("p",null,"You can use the Chaos Dashboard to help you create user accounts and bind permissions. When you access the dashboard, a login window will appear. Click on the ",(0,s.kt)("strong",{parentName:"p"},"Click here to generate")," link:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Login 1",src:n(48837).Z,width:"1098",height:"1216"})),(0,s.kt)("p",null,"When you click on the link, a Token Generator will appear, as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Generator",src:n(98238).Z,width:"1572",height:"1524"})),(0,s.kt)("p",null,"The steps to create user accounts and bind permissions are as follows:"),(0,s.kt)("h3",{id:"choose-the-scope-of-permissions"},"Choose the scope of permissions"),(0,s.kt)("p",null,"If you want to give the account the appropriate permissions for all chaos experiments in the cluster, tick the ",(0,s.kt)("strong",{parentName:"p"},"Cluster scoped")," checkbox. If you specify a namespace in the ",(0,s.kt)("strong",{parentName:"p"},"Namespace")," dropdown, the account will only have permissions in the specified namespace."),(0,s.kt)("p",null,"In summary, there are two options to choose from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Cluster scoped"),": the account has permissions for all chaos experiments in cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Namespace scoped"),": the account has permissions for all chaos experiments in the specified namespace.")),(0,s.kt)("h3",{id:"select-the-role-of-users"},"Select the role of users"),(0,s.kt)("p",null,"Currently, Chaos Mesh provides the following user roles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Manager"),": who has all permissions to create, view, update and delete chaos experiments."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Viewer"),": who only has the right to view chaos experiments.")),(0,s.kt)("h3",{id:"generate-the-permission"},"Generate the permission"),(0,s.kt)("p",null,"Once the permission scope and user role have been defined, the Dashboard will display the corresponding RBAC configuration in the Token Generator. For example, the permission for a manager with the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," namespace will look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ServiceAccount\napiVersion: v1\nmetadata:\n  namespace: default\n  name: account-default-manager-vfmot\n\n---\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: default\n  name: role-default-manager-vfmot\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'watch', 'list']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-default-manager-vfmot\n  namespace: default\nsubjects:\n  - kind: ServiceAccount\n    name: account-default-manager-vfmot\n    namespace: default\nroleRef:\n  kind: Role\n  name: role-default-manager-vfmot\n  apiGroup: rbac.authorization.k8s.io\n")),(0,s.kt)("p",null,"Click ",(0,s.kt)("strong",{parentName:"p"},"COPY")," in the top right corner of the configuration section to copy the RBAC configuration and then save the contents locally as ",(0,s.kt)("inlineCode",{parentName:"p"},"rbac.yaml"),"."),(0,s.kt)("h3",{id:"create-the-user-account-and-bind-permissions"},"Create the user account and bind permissions"),(0,s.kt)("p",null,"Run the following command in your terminal:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f rbac.yaml\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You need to ensure that the local user running ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," has permissions to the cluster so that they can create user accounts, bind permissions for other users and generate tokens.")),(0,s.kt)("h3",{id:"get-the-token"},"Get the token"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Versions of Kubernetes before v1.22 automatically created long term credentials for accessing the Kubernetes API. In recent versions of Kubernetes, you must manually create a service account token Secret."),(0,s.kt)("p",{parentName:"admonition"},"For more details, see ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#manually-create-an-api-token-for-a-serviceaccount"},"Manually create an API token for a ServiceAccount"),".")),(0,s.kt)("p",null,"Copy the command shown in the third step to the Token Generator and run it in your terminal. The following is a sample command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe -n default secrets account-default-manager-vfmot\n")),(0,s.kt)("p",null,"The output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-log"},"Name:         account-default-manager-vfmot-token-n4tg8\nNamespace:    default\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-default-manager-vfmot\n              kubernetes.io/service-account.uid: b71b3bf4-cd5e-4efb-8bf6-ff9a55fd7e07\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1111 bytes\nnamespace:  7 bytes\ntoken:      eyJhbG...\n")),(0,s.kt)("p",null,"Copy the token at the bottom and use it in the next step to login."),(0,s.kt)("h2",{id:"log-in-to-chaos-dashboard-with-the-user-account-you-have-created"},"Log in to Chaos Dashboard with the user account you have created"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Close")," the Token Generator. In the ",(0,s.kt)("strong",{parentName:"p"},"Token")," field, enter the token you obtained in the previous step and in the ",(0,s.kt)("strong",{parentName:"p"},"Name")," field, enter a meaningful name for the token. It is recommended that you use a name that is a combination of the permission scope and the user role, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"default-manager"),". Once you have completed these two fields, click ",(0,s.kt)("strong",{parentName:"p"},"Submit")," to log in:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Login 2",src:n(15912).Z,width:"1096",height:"1214"})),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If you have not deployed Chaos Dashboard, you can also generate RBAC configurations by yourself and then use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to create user accounts and bind permissions.")),(0,s.kt)("h2",{id:"log-out-of-chaos-dashboard"},"Log out of Chaos Dashboard"),(0,s.kt)("p",null,"If you need to replace the token with another one, click the ",(0,s.kt)("strong",{parentName:"p"},"Settings")," on the left side bar of the Dashboard:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Token Logout",src:n(12593).Z,width:"1348",height:"346"})),(0,s.kt)("p",null,"At the top of the page you will see the ",(0,s.kt)("strong",{parentName:"p"},"Logout")," button. Click it to log out the current account."),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)("h3",{id:"enable-or-disable-permission-authentication"},"Enable or disable permission authentication"),(0,s.kt)("p",null,"When Chaos Mesh is installed using Helm, Permission Authentication is enabled by default. For production environments and other high security scenarios, it is recommended to leave permission authentication enabled. If you are just trying out Chaos Mesh and want to quickly create chaos experiments, you can set ",(0,s.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=false")," in a Helm command to disable authentication. The command looks like this:"),(0,s.kt)(o.Z,{mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dashboard.securityMode=false"),(0,s.kt)("p",null,"If you want to enable the permission authentication again, then reset ",(0,s.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=true")," in a Helm command."))}h.isMDXComponent=!0},48837:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_login1-dfdb1c8e7065189206548133f4268ded.png"},15912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_login2-04fcd7cd8c409649d558011f74b3ea4c.png"},98238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_helper-7295fb5793a10defbb506193f39df948.png"},12593:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_logout-e5c9c5cfca099f33e47ab979053d806f.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[66303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"GCP OAuth Authentication"},i=void 0,l={unversionedId:"gcp-authentication",id:"version-2.2.2/gcp-authentication",title:"GCP OAuth Authentication",description:"When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function.",source:"@site/versioned_docs/version-2.2.2/gcp-authentication.md",sourceDirName:".",slug:"/gcp-authentication",permalink:"/docs/2.2.2/gcp-authentication",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.2/gcp-authentication.md",tags:[],version:"2.2.2",frontMatter:{title:"GCP OAuth Authentication"},sidebar:"version-2.2.2/docs",previous:{title:"Search and Recover Experiments of Chaosd",permalink:"/docs/2.2.2/chaosd-search-recover"},next:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/2.2.2/integrate-chaos-mesh-into-github-actions"}},s={},c=[{value:"Create OAuth Client",id:"create-oauth-client",level:2},{value:"Configure and start Chaos Mesh",id:"configure-and-start-chaos-mesh",level:2},{value:"Use the function",id:"use-the-function",level:2}],h={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function."),(0,a.kt)("h2",{id:"create-oauth-client"},"Create OAuth Client"),(0,a.kt)("p",null,"Create GCP OAuth client and get the Client ID and Client Secret according to ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/cloud/answer/6158849?hl=en"},"Setting up OAuth 2.0"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google Cloud Platform Console"),"."),(0,a.kt)("li",{parentName:"ol"},"From the projects list, select a project or create a new one."),(0,a.kt)("li",{parentName:"ol"},'If the APIs & services page was not loaded automatically, open the console left side menu and select "APIs & services" manually.'),(0,a.kt)("li",{parentName:"ol"},'Click "Credentials" on the left.'),(0,a.kt)("li",{parentName:"ol"},'Click "New Credentials", then select "OAuth client ID".'),(0,a.kt)("li",{parentName:"ol"},'Select "Web Application" as the application type, and enter additional information and the redirect URL of Chaos dashboard, which is ',(0,a.kt)("inlineCode",{parentName:"li"},"ROOT_URL/api/auth/gcp/callback"),". In this part, ",(0,a.kt)("inlineCode",{parentName:"li"},"ROOT_URL"),' is the root URL of Chaos dashboard, like "http://localhost:2333". This URL can be set through the configuration item ',(0,a.kt)("inlineCode",{parentName:"li"},"dashboard.rootUrl")," by",(0,a.kt)("inlineCode",{parentName:"li"},"helm"),"."),(0,a.kt)("li",{parentName:"ol"},'Click "Create Client ID".')),(0,a.kt)("p",null,"After creating the client, remember to save the Client ID and Client Secret for the following steps."),(0,a.kt)("h2",{id:"configure-and-start-chaos-mesh"},"Configure and start Chaos Mesh"),(0,a.kt)("p",null,"To enable the function, you need to set the configuration items in helm charts as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboard.gcpSecurityMode")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboard.gcpClientId")," to the Client ID from the former section."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboard.gcpClientSecret")," to the Client Secret from the former section."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboard.rootUrl")," to the root address of Chaos Dashboard.")),(0,a.kt)("p",null,"If Chaos Mesh has been installed, you can update the configuration items through ",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade"),". If not, you can install Chaos Mesh through ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,a.kt)("h2",{id:"use-the-function"},"Use the function"),(0,a.kt)("p",null,"Open Chaos Dashboard, and click the google icon under the authentication window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(31265).Z,width:"640",height:"855"})),(0,a.kt)("p",null,"After logging in to the Google account and being granted permission to OAuth Client, the page automatically redirects to Chaos Dashboard with logged-in status. At this time, you have the same permissions as the google account in this cluster. If you need to add other permissions, you can edit the permission through the RBAC (Role-based access control). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: chaos-mesh-cluster-manager\nrules:\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-testing\nsubjects:\n  - kind: User\n    name: example@gmail.com\nroleRef:\n  kind: ClusterRole\n  name: chaos-mesh-cluster-manager\n  apiGroup: rbac.authorization.k8s.io\n")),(0,a.kt)("p",null,"By setting this configuration, the user ",(0,a.kt)("inlineCode",{parentName:"p"},"example@gmail.com")," is enabled to see or create any chaos experiments."))}u.isMDXComponent=!0},31265:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/google-auth-44ea9b662b5a11c6e148a1f5f6983c69.png"}}]);
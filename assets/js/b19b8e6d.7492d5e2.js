"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5077],{17942:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(50959);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(a),d=o,u=h["".concat(i,".").concat(d)]||h[d]||c[d]||n;return a?r.createElement(u,s(s({ref:t},p),{},{components:a})):r.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:o,s[1]=l;for(var m=2;m<n;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=a(51163),o=(a(50959),a(17942));const n={title:"Upgrade from 2.1 to 2.2"},s=void 0,l={unversionedId:"upgrade-from-2.1-to-2.2",id:"version-2.5.1/upgrade-from-2.1-to-2.2",title:"Upgrade from 2.1 to 2.2",description:"There are several changes in Helm Charts 2.2.0 release. This documentation introduces how to migrate from 2.1.x to 2.2.0.",source:"@site/versioned_docs/version-2.5.1/upgrade-from-2.1-to-2.2.md",sourceDirName:".",slug:"/upgrade-from-2.1-to-2.2",permalink:"/docs/upgrade-from-2.1-to-2.2",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.1/upgrade-from-2.1-to-2.2.md",tags:[],version:"2.5.1",frontMatter:{title:"Upgrade from 2.1 to 2.2"},sidebar:"docs",previous:{title:"Upgrade to Chaos Mesh 2.0",permalink:"/docs/upgrade-to-2.0"},next:{title:"Chaos Mesh Release Cycle",permalink:"/docs/release-cycle"}},i={},m=[{value:"Upgrade with Helm",id:"upgrade-with-helm",level:2},{value:"Step 1: Add/Update Chaos Mesh Helm repository",id:"step-1-addupdate-chaos-mesh-helm-repository",level:3},{value:"Step 2: Migrate the <code>values.yaml</code> file",id:"step-2-migrate-the-valuesyaml-file",level:3},{value:"Step 4: Upgrade Chaos Mesh by <code>helm upgrade</code>",id:"step-4-upgrade-chaos-mesh-by-helm-upgrade",level:3},{value:"Ask the Community",id:"ask-the-community",level:2}],p={toc:m},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several changes in Helm Charts 2.2.0 release. This documentation introduces how to migrate from 2.1.x to 2.2.0."),(0,o.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with Helm"),(0,o.kt)("h3",{id:"step-1-addupdate-chaos-mesh-helm-repository"},"Step 1: Add/Update Chaos Mesh Helm repository"),(0,o.kt)("p",null,"Add the Chaos Mesh repository to the Helm repository and update it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\nhelm repo update\n")),(0,o.kt)("h3",{id:"step-2-migrate-the-valuesyaml-file"},"Step 2: Migrate the ",(0,o.kt)("inlineCode",{parentName:"h3"},"values.yaml")," file"),(0,o.kt)("p",null,"If you installed Chaos Mesh with a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),", it is recommended to apply your customized configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," of Chaos Mesh 2.2.0."),(0,o.kt)("p",null,"You can fetch the default ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values chaos-mesh/chaos-mesh --version 2.2.0 > values.yaml\n")),(0,o.kt)("p",null,"If you do not recognize the changed configurations, you might not rely on that specific feature, it is usually safe to ignore them."),(0,o.kt)("p",null,"Here is a list of Helm Chart changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new configuration: ",(0,o.kt)("inlineCode",{parentName:"li"},"chaosDaemon.mtls.enabled")," represents using mtls bwteen chaos-controller-manager and chaos-daemon."),(0,o.kt)("li",{parentName:"ul"},"new configuration: ",(0,o.kt)("inlineCode",{parentName:"li"},"webhook.caBundlePEM")," represents the CA bundle used to serve the webhook server."),(0,o.kt)("li",{parentName:"ul"},"value changed: ",(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.serviceAccount")," changed from ",(0,o.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"chaos-dashboard")),(0,o.kt)("li",{parentName:"ul"},"value changed: ",(0,o.kt)("inlineCode",{parentName:"li"},"webhook.FailurePolicy")," changed from ",(0,o.kt)("inlineCode",{parentName:"li"},"Ignore")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Fail"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"For more information about the detailed description, see ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/chaos-mesh/chaos-mesh/blob/v2.2.0/helm/chaos-mesh/README.md"},"README"),". :::"),(0,o.kt)("h3",{parentName:"admonition",id:"step-3-update-the-crd"},"Step 3: Update the CRD"),(0,o.kt)("p",{parentName:"admonition"},"For Kubernetes version >= 1.16, you can apply the latest CRD by executing the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd.yaml\n")),(0,o.kt)("p",{parentName:"admonition"},"For Kubernetes version <= 1.15, you can apply the latest CRD by executing the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd-v1beta1.yaml\n"))),(0,o.kt)("h3",{id:"step-4-upgrade-chaos-mesh-by-helm-upgrade"},"Step 4: Upgrade Chaos Mesh by ",(0,o.kt)("inlineCode",{parentName:"h3"},"helm upgrade")),(0,o.kt)("p",null,"Then you can execute the following command to upgrade Chaos Mesh to the 2.2.0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade <release-name> chaos-mesh/chaos-mesh --namespace=<namespace> --version=2.2.0 <--other-required-flags>\n")),(0,o.kt)("h2",{id:"ask-the-community"},"Ask the Community"),(0,o.kt)("p",null,"If you have any questions about upgrading Chaos Mesh, feel free to contact us at ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"Slack Channel"),", GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues/new?assignees=&labels=&template=question.md"},"Issues")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/discussions/new"},"Discussions"),"."))}c.isMDXComponent=!0}}]);
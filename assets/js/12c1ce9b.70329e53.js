"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6691,298,9328],{30834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(11527),r=n(45305);const a={},o=void 0,i={id:"common/quick-run",title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.4.3/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/2.4.3/common/quick-run",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/common/quick-run.md",tags:[],version:"2.4.3",frontMatter:{}},l={},c=[];function u(e){const t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."}),"\n",(0,s.jsxs)(t.p,{children:["For the method to run the experiment, it is recommended to refer to ",(0,s.jsx)(t.a,{href:"/docs/2.4.3/run-a-chaos-experiment",children:"Run a Chaos experiment"}),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},40649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(11527),r=n(45305);const a={},o=void 0,i={id:"common/verify-installation",title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.4.3/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/2.4.3/common/verify-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/common/verify-installation.md",tags:[],version:"2.4.3",frontMatter:{}},l={},c=[];function u(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To check the running status of Chaos Mesh, execute the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"kubectl get po -n chaos-mesh\n"})}),"\n",(0,s.jsx)(t.p,{children:"The expected output is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If your actual output is similar to the expected output with ",(0,s.jsx)(t.code,{children:"NAME"}),", ",(0,s.jsx)(t.code,{children:"READY"}),", ",(0,s.jsx)(t.code,{children:"STATUS"}),", ",(0,s.jsx)(t.code,{children:"RESTARTS"}),", and ",(0,s.jsx)(t.code,{children:"AGE"}),", it means that Helm is installed successfully."]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"STATUS"})," of your actual output is not ",(0,s.jsx)(t.code,{children:"Running"}),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"leader-election"})," feature is turned off manually, ",(0,s.jsx)(t.code,{children:"chaos-controller-manager"})," should only have 1 replication."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},62216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>x,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var s=n(11527),r=n(45305),a=n(11219),o=n(77815),i=n(9260),l=n(40649),c=n(30834);const u={title:"Quick Start"},h=void 0,d={id:"quick-start",title:"Quick Start",description:"This document describes how to start Chaos Mesh quickly in a test or local environment.",source:"@site/versioned_docs/version-2.4.3/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/2.4.3/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/quick-start.md",tags:[],version:"2.4.3",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Basic Features",permalink:"/docs/2.4.3/basic-features"},next:{title:"Install Chaos Mesh using Helm",permalink:"/docs/2.4.3/production-installation-using-helm"}},m={},p=[{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Quick installation",id:"quick-installation",level:2},{value:"Verify the installation",id:"verify-the-installation",level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",level:2},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why the <code>local</code> directory appears in the root directory after installation?",id:"why-the-local-directory-appears-in-the-root-directory-after-installation",level:3}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This document describes how to start Chaos Mesh quickly in a test or local environment."}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"In this document, Chaos Mesh is installed via a script for quick trial only."})}),(0,s.jsxs)(t.p,{children:["If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ",(0,s.jsx)(t.a,{href:"https://helm.sh/",children:"Helm"}),". For more details, refer to ",(0,s.jsx)(t.a,{href:"/docs/2.4.3/production-installation-using-helm",children:"Installation using Helm"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"environment-preparation",children:"Environment preparation"}),"\n",(0,s.jsx)(t.p,{children:"Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/setup/",children:"Kubernetes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"minikube"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"kind"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://rancher.com/docs/k3s/latest/en/quick-start/",children:"K3s"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://microk8s.io/",children:"Microk8s"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"quick-installation",children:"Quick installation"}),"\n",(0,s.jsx)(t.p,{children:"To install Chaos Mesh in a test environment, run the following script:"}),"\n",(0,s.jsxs)(a.Z,{defaultValue:"k8s",values:[{label:"K8s",value:"k8s"},{label:"kind",value:"kind"},{label:"K3s",value:"k3s"},{label:"MicroK8s",value:"microk8s"}],children:[(0,s.jsx)(o.Z,{value:"k8s",children:(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"})}),(0,s.jsxs)(o.Z,{value:"kind",children:[(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"}),(0,s.jsxs)(t.p,{children:["If you want to specify a ",(0,s.jsx)(t.code,{children:"kind"})," version, add the ",(0,s.jsx)(t.code,{children:"--kind-version xx"})," parameter at the end of the script, for example:"]}),(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.20.0"})]}),(0,s.jsx)(o.Z,{value:"k3s",children:(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"})}),(0,s.jsx)(o.Z,{value:"microk8s",children:(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s"})})]}),"\n",(0,s.jsx)(t.p,{children:"After running, Chaos Mesh will automatically install the appropriate version of CustomResourceDefinitions and the required components."}),"\n",(0,s.jsxs)(t.p,{children:["For more installation details, refer to the source code of the ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh",children:(0,s.jsx)(t.code,{children:"install.sh"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"verify-the-installation",children:"Verify the installation"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)(t.h2,{id:"run-chaos-experiments",children:"Run Chaos experiments"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(t.h2,{id:"uninstall-chaos-mesh",children:"Uninstall Chaos Mesh"}),"\n",(0,s.jsx)(t.p,{children:"To uninstall Chaos Mesh, execute the following command:"}),"\n",(0,s.jsx)(i.Z,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"}),"\n",(0,s.jsxs)(t.p,{children:["You can also delete the ",(0,s.jsx)(t.code,{children:"chaos-mesh"})," namespace to directly uninstall Chaos Mesh:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"kubectl delete ns chaos-mesh\n"})}),"\n",(0,s.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(t.h3,{id:"why-the-local-directory-appears-in-the-root-directory-after-installation",children:["Why the ",(0,s.jsx)(t.code,{children:"local"})," directory appears in the root directory after installation?"]}),"\n",(0,s.jsxs)(t.p,{children:["If you don't install ",(0,s.jsx)(t.code,{children:"kind"})," in the existing environment, and you use the ",(0,s.jsx)(t.code,{children:"--local kind"})," parameter when executing the installation command, the ",(0,s.jsx)(t.code,{children:"install.sh"})," script will automatically install the ",(0,s.jsx)(t.code,{children:"kind"})," in the ",(0,s.jsx)(t.code,{children:"local"})," directory under the root directory."]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},58456:(e,t,n)=>{n.d(t,{Z:()=>a});n(50959);var s=n(38250),r=n(11527);function a(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},77815:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var s=n(86259);const r={tabItem:"tabItem_wvL0"};var a=n(11527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},11219:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(50959),r=n(86259),a=n(47534),o=n(28903),i=n(21091),l=n(10987),c=n(23448),u=n(54171);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,h]=p({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=n(38250);const v={tabList:"tabList_jQjR",tabItem:"tabItem_dzqc"};var j=n(11527);function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...a,className:(0,r.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(t))}},9260:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>l});var s=n(58456),r=n(12858),a=n(13176),o=n(66918),i=n(11527);const l=(e,t)=>{const n=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&s)return"current"===s?"latest":s;if(n.includes("/docs/next"))return"latest";const r=t.find((e=>e.isLast)),a=t.find((e=>n.includes(e.name)));return a?a.name:r.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:u="language-bash"}=e;const{siteConfig:h}=(0,r.Z)(),{versions:d}=(0,a.eZ)("docusaurus-plugin-content-docs");return(0,i.jsx)(s.Z,{children:()=>{const e=l(h,d),s=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return(0,i.jsx)(o.Z,{className:u,children:s})}})}},45305:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(50959);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
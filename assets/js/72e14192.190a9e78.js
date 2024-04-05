"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2814],{678:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(13274),r=t(9534);const a=[];function l(e){const n={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."}),"\n",(0,s.jsxs)(n.p,{children:["For the method to run the experiment, it is recommended to refer to ",(0,s.jsx)(n.a,{href:"/docs/next/run-a-chaos-experiment",children:"Run a Chaos experiment"}),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},46433:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(13274),r=t(9534);const a=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"To check the running status of Chaos Mesh, execute the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"kubectl get po -n chaos-mesh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The expected output is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If your actual output is similar to the expected output with ",(0,s.jsx)(n.code,{children:"NAME"}),", ",(0,s.jsx)(n.code,{children:"READY"}),", ",(0,s.jsx)(n.code,{children:"STATUS"}),", ",(0,s.jsx)(n.code,{children:"RESTARTS"}),", and ",(0,s.jsx)(n.code,{children:"AGE"}),", it means that Helm is installed successfully."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"STATUS"})," of your actual output is not ",(0,s.jsx)(n.code,{children:"Running"}),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"leader-election"})," feature is turned off manually, ",(0,s.jsx)(n.code,{children:"chaos-controller-manager"})," should only have 1 replication."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})})]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},48418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>h,metadata:()=>d,toc:()=>m});var s=t(13274),r=t(9534),a=t(64622),l=t(89711),o=t(5449),i=t(46433),c=t(678);const h={title:"Quick Start"},u=void 0,d={id:"quick-start",title:"Quick Start",description:"This document describes how to start Chaos Mesh quickly in a test or local environment.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/next/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/quick-start.md",tags:[],version:"current",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Basic Features",permalink:"/docs/next/basic-features"},next:{title:"Install Chaos Mesh using Helm",permalink:"/docs/next/production-installation-using-helm"}},p={},m=[{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Quick installation",id:"quick-installation",level:2},{value:"Verify the installation",id:"verify-the-installation",level:2},...i.RM,{value:"Run Chaos experiments",id:"run-chaos-experiments",level:2},...c.RM,{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why the <code>local</code> directory appears in the root directory after installation?",id:"why-the-local-directory-appears-in-the-root-directory-after-installation",level:3}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document describes how to start Chaos Mesh quickly in a test or local environment."}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"In this document, Chaos Mesh is installed via a script for quick trial only."})}),(0,s.jsxs)(n.p,{children:["If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ",(0,s.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),". For more details, refer to ",(0,s.jsx)(n.a,{href:"/docs/next/production-installation-using-helm",children:"Installation using Helm"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"environment-preparation",children:"Environment preparation"}),"\n",(0,s.jsx)(n.p,{children:"Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/",children:"Kubernetes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"minikube"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"kind"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rancher.com/docs/k3s/latest/en/quick-start/",children:"K3s"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://microk8s.io/",children:"Microk8s"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quick-installation",children:"Quick installation"}),"\n",(0,s.jsx)(n.p,{children:"To install Chaos Mesh in a test environment, run the following script:"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"k8s",values:[{label:"K8s",value:"k8s"},{label:"kind",value:"kind"},{label:"K3s",value:"k3s"},{label:"MicroK8s",value:"microk8s"}],children:[(0,s.jsx)(l.A,{value:"k8s",children:(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"})}),(0,s.jsxs)(l.A,{value:"kind",children:[(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"}),(0,s.jsxs)(n.p,{children:["If you want to specify a ",(0,s.jsx)(n.code,{children:"kind"})," version, add the ",(0,s.jsx)(n.code,{children:"--kind-version xx"})," parameter at the end of the script, for example:"]}),(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.20.0"})]}),(0,s.jsx)(l.A,{value:"k3s",children:(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"})}),(0,s.jsx)(l.A,{value:"microk8s",children:(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s"})})]}),"\n",(0,s.jsx)(n.p,{children:"After running, Chaos Mesh will automatically install the appropriate version of CustomResourceDefinitions and the required components."}),"\n",(0,s.jsxs)(n.p,{children:["For more installation details, refer to the source code of the ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh",children:(0,s.jsx)(n.code,{children:"install.sh"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"verify-the-installation",children:"Verify the installation"}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"run-chaos-experiments",children:"Run Chaos experiments"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"uninstall-chaos-mesh",children:"Uninstall Chaos Mesh"}),"\n",(0,s.jsx)(n.p,{children:"To uninstall Chaos Mesh, execute the following command:"}),"\n",(0,s.jsx)(o.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"}),"\n",(0,s.jsxs)(n.p,{children:["You can also delete the ",(0,s.jsx)(n.code,{children:"chaos-mesh"})," namespace to directly uninstall Chaos Mesh:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"kubectl delete ns chaos-mesh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.h3,{id:"why-the-local-directory-appears-in-the-root-directory-after-installation",children:["Why the ",(0,s.jsx)(n.code,{children:"local"})," directory appears in the root directory after installation?"]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't install ",(0,s.jsx)(n.code,{children:"kind"})," in the existing environment, and you use the ",(0,s.jsx)(n.code,{children:"--local kind"})," parameter when executing the installation command, the ",(0,s.jsx)(n.code,{children:"install.sh"})," script will automatically install the ",(0,s.jsx)(n.code,{children:"kind"})," in the ",(0,s.jsx)(n.code,{children:"local"})," directory under the root directory."]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},25737:(e,n,t)=>{t.d(n,{A:()=>a});t(79474);var s=t(94154),r=t(13274);function a(e){let{children:n,fallback:t}=e;return(0,s.A)()?(0,r.jsx)(r.Fragment,{children:n?.()}):t??null}},89711:(e,n,t)=>{t.d(n,{A:()=>l});t(79474);var s=t(28923);const r={tabItem:"tabItem_OoN9"};var a=t(13274);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},64622:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(79474),r=t(28923),a=t(83911),l=t(20241),o=t(49074),i=t(17032),c=t(92665),h=t(94459);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=d(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,h.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(94154);const j={tabList:"tabList_bMQ9",tabItem:"tabItem_phVg"};var b=t(13274);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),h=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==s&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:h,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,x.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},5449:(e,n,t)=>{t.d(n,{A:()=>c,t:()=>i});var s=t(25737),r=t(70195),a=t(25979),l=t(1391),o=t(13274);const i=(e,n)=>{const t=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&s)return"current"===s?"latest":s;if(t.includes("/docs/next"))return"latest";const r=n.find((e=>e.isLast)),a=n.find((e=>t.includes(e.name)));return a?a.name:r.name};const c=e=>{let{children:n,replaced:t="latest",isArchive:c=!1,className:h="language-bash"}=e;const{siteConfig:u}=(0,r.A)(),{versions:d}=(0,a.P_)("docusaurus-plugin-content-docs");return(0,o.jsx)(s.A,{children:()=>{const e=i(u,d),s=c?n.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?n:n.replace(t,"v"+e);return(0,o.jsx)(l.A,{className:h,children:s})}})}},9534:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(79474);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
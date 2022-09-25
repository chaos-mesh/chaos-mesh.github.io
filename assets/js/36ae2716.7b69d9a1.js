"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7378],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=i(o),f=n,w=k["".concat(c,".").concat(f)]||k[f]||p[f]||a;return o?r.createElement(w,s(s({ref:t},u),{},{components:o})):r.createElement(w,s({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=o[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},60426:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=o(87462),n=(o(67294),o(3905));const a={title:"Check Workflow Status"},s=void 0,l={unversionedId:"check-workflow-status",id:"version-2.2.3/check-workflow-status",title:"Check Workflow Status",description:"Check workflow status using Chaos Dashboard",source:"@site/versioned_docs/version-2.2.3/check-workflow-status.md",sourceDirName:".",slug:"/check-workflow-status",permalink:"/docs/2.2.3/check-workflow-status",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.3/check-workflow-status.md",tags:[],version:"2.2.3",frontMatter:{title:"Check Workflow Status"},sidebar:"version-2.2.3/docs",previous:{title:"Send HTTP Requests on Workflow",permalink:"/docs/2.2.3/send-http-request-on-workflow"},next:{title:"Status Check in Workflow",permalink:"/docs/2.2.3/status-check-in-workflow"}},c={},i=[{value:"Check workflow status using Chaos Dashboard",id:"check-workflow-status-using-chaos-dashboard",level:2},{value:"Check workflow status using <code>kubectl</code> commands",id:"check-workflow-status-using-kubectl-commands",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"check-workflow-status-using-chaos-dashboard"},"Check workflow status using Chaos Dashboard"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"List all workflows in Chaos Dashboard.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List Workflow On Dashboard",src:o(28502).Z,width:"2255",height:"746"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select the workflow you want to check and see the details of the workflow.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow Status On Dashboard",src:o(65990).Z,width:"2283",height:"1820"})),(0,n.kt)("h2",{id:"check-workflow-status-using-kubectl-commands"},"Check workflow status using ",(0,n.kt)("inlineCode",{parentName:"h2"},"kubectl")," commands"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the following command to list the current created workflows in the specified namespace:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> get workflow\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose a workflow you want to check and specify the workflow name in the following command. Execute the command to get all workflow nodes of the workflow:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n')),(0,n.kt)("p",{parentName:"li"},"The steps of the workflow are represented by the names of these workflow nodes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the following command to the get detailed status of the specified workflow node:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> describe workflownode <workflow-node-name>\n")),(0,n.kt)("p",{parentName:"li"},"The output includes whether the execution of the current node is completed, the execution status of its parallel or serial node, the corresponding Chaos experiment object of the current node, and so on."))))}p.isMDXComponent=!0},28502:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/list-workflow-on-dashboard-a67310dee3e406648c062f614850a377.png"},65990:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow-status-on-dashboard-5ef0a1eac75e1564d7faad74b7c39435.png"}}]);
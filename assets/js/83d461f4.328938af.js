"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6668],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8632:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],l={title:"Check Workflow Status"},s=void 0,i={unversionedId:"check-workflow-status",id:"version-2.0.4/check-workflow-status",isDocsHomePage:!1,title:"Check Workflow Status",description:"Check workflow status using kubectl commands",source:"@site/versioned_docs/version-2.0.4/check-workflow-status.md",sourceDirName:".",slug:"/check-workflow-status",permalink:"/docs/check-workflow-status",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.4/check-workflow-status.md",tags:[],version:"2.0.4",frontMatter:{title:"Check Workflow Status"},sidebar:"version-2.0.4/docs",previous:{title:"Serial and Parallel Experiments",permalink:"/docs/run-chaos-experiments-in-serial-or-parallel"},next:{title:"Simulate Pod Faults",permalink:"/docs/simulate-pod-chaos-on-kubernetes"}},u=[{value:"Check workflow status using <code>kubectl</code> commands",id:"check-workflow-status-using-kubectl-commands",children:[]}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"check-workflow-status-using-kubectl-commands"},"Check workflow status using ",(0,a.kt)("inlineCode",{parentName:"h2"},"kubectl")," commands"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the following command to list the current created workflows in the specified namespace:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> get workflow\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose a workflow you want to check and specify the workflow name in the following command. Execute the command to get all workflow nodes of the workflow:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n')),(0,a.kt)("p",{parentName:"li"},"The steps of the workflow are represented by the names of these workflow nodes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the following command to the get detailed status of the specified workflow node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n <namespace> describe workflownode <workflow-node-name>\n")),(0,a.kt)("p",{parentName:"li"},"The output includes whether the execution of the current node is completed, the execution status of its parallel or serial node, the corresponding Chaos experiment object of the current node, and so on."))))}f.isMDXComponent=!0}}]);
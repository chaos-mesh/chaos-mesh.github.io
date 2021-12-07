"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7423],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99466:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Chaos Mesh v0.9.0 Release Notes"},l=void 0,p={unversionedId:"releases/v0.9.0",id:"version-1.1.4/releases/v0.9.0",isDocsHomePage:!1,title:"Chaos Mesh v0.9.0 Release Notes",description:"Chaos Mesh v0.9.0 mainly introduces the Chaos Dashboard component, which is the web UI for users to manage and monitor chaos experiments. In this version, NetworkChaos has been refactored to support setting multiple network attack rules on the same Pod at the same time, a one-click installation script is added to help users quickly get started with Chaos Mesh.",source:"@site/versioned_docs/version-1.1.4/releases/v0.9.0.md",sourceDirName:"releases",slug:"/releases/v0.9.0",permalink:"/docs/1.1.4/releases/v0.9.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/releases/v0.9.0.md",tags:[],version:"1.1.4",frontMatter:{title:"Chaos Mesh v0.9.0 Release Notes"},sidebar:"version-1.1.4/docs",previous:{title:"Chaos Mesh v1.0.0 Release Notes",permalink:"/docs/1.1.4/releases/v1.0.0"},next:{title:"Chaos Mesh v0.8.0 Release Notes",permalink:"/docs/1.1.4/releases/v0.8.0"}},c=[{value:"New Features &amp; Enhancements",id:"new-features--enhancements",children:[],level:2},{value:"Major Bug Fixes",id:"major-bug-fixes",children:[],level:2}],h={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chaos Mesh v0.9.0 mainly introduces the Chaos Dashboard component, which is the web UI for users to manage and monitor chaos experiments. In this version, NetworkChaos has been refactored to support setting multiple network attack rules on the same Pod at the same time, a one-click installation script is added to help users quickly get started with Chaos Mesh."),(0,o.kt)("h2",{id:"new-features--enhancements"},"New Features & Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduce Chaos Dashboard component",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Support creating/updating/deleting/pausing PodChaos, NetworkChaos, StressChaos, TimeChaos, IoChaos, KernelChaos through the web interface ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/481"},"#481")),(0,o.kt)("li",{parentName:"ul"},"Support directly uploading YAML files through the interface to create chaos experiments ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/665"},"#665")),(0,o.kt)("li",{parentName:"ul"},"Support obtaining specific fault injection event details through the interface ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/628"},"#628")),(0,o.kt)("li",{parentName:"ul"},"Support direct reuse of archived chaos configurations ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/783"},"#783")))),(0,o.kt)("li",{parentName:"ul"},"Supports forcibly cleaning chaos experiment by setting chaos experiment object annotations to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/415"},"#415")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/478"},"#478")),(0,o.kt)("li",{parentName:"ul"},"Support the use of ",(0,o.kt)("inlineCode",{parentName:"li"},"installsh")," script to quickly install Chaos Mesh ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/466"},"#466")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/506"},"#506")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/511"},"#511")),(0,o.kt)("li",{parentName:"ul"},"Add a new sidecar configuration template to simplify the IoChaos configuration file ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/502"},"#502")),(0,o.kt)("li",{parentName:"ul"},"Support setting protected namespaces ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/661"},"#661")),(0,o.kt)("li",{parentName:"ul"},"Support injecting StressChaos into a specified container in the Pod ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/759"},"#759")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/794"},"#794")),(0,o.kt)("li",{parentName:"ul"},"Refactor NetworkChaos to support setting multiple network attack rules on the same Pod ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/788"},"#788"))),(0,o.kt)("h2",{id:"major-bug-fixes"},"Major Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix burn-memory not taking effect ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/776"},"#776")),(0,o.kt)("li",{parentName:"ul"},"Fix the failure to restore NetworkChaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/chaos-mesh/pull/788"},"#788"))))}u.isMDXComponent=!0}}]);
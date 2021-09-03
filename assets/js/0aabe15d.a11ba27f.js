"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7002],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=h(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var h=2;h<o;h++)s[h]=a[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99797:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"v1.0.0",title:"Chaos Mesh v1.0.0 Release Notes",sidebar_label:"v1.0.0"},l=void 0,h={unversionedId:"releases/v1.0.0",id:"version-1.2.3/releases/v1.0.0",isDocsHomePage:!1,title:"Chaos Mesh v1.0.0 Release Notes",description:"On September 25, 2020, Chaos Mesh v1.0 is now released! We have made some significant improvements in this release, including the refactor of IoChaos, providing more security guarantees for chaos experiments, supporting the setting of protected Namespaces, and supporting the use of Namespace\u2019s permissions. In addition, this release is also focused on Chaos Dashboard and Chaos Operator components, which helps users create more stable, safe, and controllable chaos experiments.",source:"@site/versioned_docs/version-1.2.3/releases/v1.0.0.md",sourceDirName:"releases",slug:"/releases/v1.0.0",permalink:"/docs/1.2.3/releases/v1.0.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/releases/v1.0.0.md",tags:[],version:"1.2.3",frontMatter:{id:"v1.0.0",title:"Chaos Mesh v1.0.0 Release Notes",sidebar_label:"v1.0.0"},sidebar:"version-1.2.3/docs",previous:{title:"FAQs",permalink:"/docs/1.2.3/faqs"},next:{title:"v0.9.0",permalink:"/docs/1.2.3/releases/v0.9.0"}},c=[{value:"New Feature &amp; Enhancements",id:"new-feature--enhancements",children:[]},{value:"Major Bug Fixes",id:"major-bug-fixes",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On September 25, 2020, Chaos Mesh v1.0 is now released! We have made some significant improvements in this release, including the refactor of IoChaos, providing more security guarantees for chaos experiments, supporting the setting of protected Namespaces, and supporting the use of Namespace\u2019s permissions. In addition, this release is also focused on Chaos Dashboard and Chaos Operator components, which helps users create more stable, safe, and controllable chaos experiments."),(0,o.kt)("h2",{id:"new-feature--enhancements"},"New Feature & Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New implementation of IoChaos",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Refactor the API and controller of IoChaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/932"},"#932")),(0,o.kt)("li",{parentName:"ul"},"Implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"toda")," project, a hook filesystem for injecting IO chaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/toda"},"https://github.com/chaos-mesh/toda")),(0,o.kt)("li",{parentName:"ul"},"Add pod status in IoChaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/958"},"#958")))),(0,o.kt)("li",{parentName:"ul"},"Support namespace scoped chaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/872"},"#872")),(0,o.kt)("li",{parentName:"ul"},"Record the error information on the Chaos object ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/931"},"#931")),(0,o.kt)("li",{parentName:"ul"},"Update Reconcile logic and make updated ",(0,o.kt)("inlineCode",{parentName:"li"},"cron")," take effect immediately ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/920"},"#920")),(0,o.kt)("li",{parentName:"ul"},"Add command to check install script ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/916"},"#916")),(0,o.kt)("li",{parentName:"ul"},"Add hostNetwork option for controller-manager ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/874"},"#874"))),(0,o.kt)("h2",{id:"major-bug-fixes"},"Major Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix the error in retrying failed NetworkChaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/949"},"#949")),(0,o.kt)("li",{parentName:"ul"},"Fix the issue that fields selectors do not work ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/920"},"#920")),(0,o.kt)("li",{parentName:"ul"},"Fix the abnormal error when deleting chaos object ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/943"},"#943")),(0,o.kt)("li",{parentName:"ul"},"Fix incomplete experiments caused by the restart of Chaos Dashboard ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/933"},"#933")),(0,o.kt)("li",{parentName:"ul"},"Fix the bug caused by the empty target mode ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/930"},"#930")),(0,o.kt)("li",{parentName:"ul"},"Fix invalid usage of ",(0,o.kt)("inlineCode",{parentName:"li"},"cgo/unsafe")," pointer in TimeChaos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/904"},"#904")),(0,o.kt)("li",{parentName:"ul"},"Fix the selectors issue in ",(0,o.kt)("inlineCode",{parentName:"li"},"new experiments scope")," page ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/pull/881"},"#881"))))}m.isMDXComponent=!0}}]);
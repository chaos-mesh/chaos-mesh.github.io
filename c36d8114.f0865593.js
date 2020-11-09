(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return h}));var r=a(2),n=a(6),o=(a(0),a(184)),s={id:"v1.0.0",title:"Chaos Mesh v1.0.0 Release Notes",sidebar_label:"v1.0.0"},c={unversionedId:"releases/v1.0.0",id:"releases/v1.0.0",isDocsHomePage:!1,title:"Chaos Mesh v1.0.0 Release Notes",description:"On September 25, 2020, Chaos Mesh v1.0 is now released! We have made some significant improvements in this release, including the refactor of IoChaos, providing more security guarantees for chaos experiments, supporting the setting of protected Namespaces, and supporting the use of Namespace\u2019s permissions. In addition, this release is also focused on Chaos Dashboard and Chaos Operator components, which helps users create more stable, safe, and controllable chaos experiments.",source:"@site/docs/releases/v1.0.0.md",slug:"/releases/v1.0.0",permalink:"/docs/next/releases/v1.0.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/releases/v1.0.0.md",version:"current",sidebar_label:"v1.0.0",sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/next/faqs"},next:{title:"Chaos Mesh v0.9.0 Release Notes",permalink:"/docs/next/releases/v0.9.0"}},i=[{value:"New Feature &amp; Enhancements",id:"new-feature--enhancements",children:[]},{value:"Major Bug Fixes",id:"major-bug-fixes",children:[]}],l={rightToc:i};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"On September 25, 2020, Chaos Mesh v1.0 is now released! We have made some significant improvements in this release, including the refactor of IoChaos, providing more security guarantees for chaos experiments, supporting the setting of protected Namespaces, and supporting the use of Namespace\u2019s permissions. In addition, this release is also focused on Chaos Dashboard and Chaos Operator components, which helps users create more stable, safe, and controllable chaos experiments."),Object(o.b)("h2",{id:"new-feature--enhancements"},"New Feature & Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"New implementation of IoChaos",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Refactor the API and controller of IoChaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/932"}),"#932")),Object(o.b)("li",{parentName:"ul"},"Implement the ",Object(o.b)("inlineCode",{parentName:"li"},"toda")," project, a hook filesystem for injecting IO chaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/toda"}),"https://github.com/chaos-mesh/toda")),Object(o.b)("li",{parentName:"ul"},"Add pod status in IoChaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/958"}),"#958")))),Object(o.b)("li",{parentName:"ul"},"Support namespace scoped chaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/872"}),"#872")),Object(o.b)("li",{parentName:"ul"},"Record the error information on the Chaos object ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/931"}),"#931")),Object(o.b)("li",{parentName:"ul"},"Update Reconcile logic and make updated ",Object(o.b)("inlineCode",{parentName:"li"},"cron")," take effect immediately ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/920"}),"#920")),Object(o.b)("li",{parentName:"ul"},"Add command to check install script ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/916"}),"#916")),Object(o.b)("li",{parentName:"ul"},"Add hostNetwork option for controller-manager ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/874"}),"#874"))),Object(o.b)("h2",{id:"major-bug-fixes"},"Major Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fix the error in retrying failed NetworkChaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/949"}),"#949")),Object(o.b)("li",{parentName:"ul"},"Fix the issue that fields selectors do not work ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/920"}),"#920")),Object(o.b)("li",{parentName:"ul"},"Fix the abnormal error when deleting chaos object ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/943"}),"#943")),Object(o.b)("li",{parentName:"ul"},"Fix incomplete experiments caused by the restart of Chaos Dashboard ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/933"}),"#933")),Object(o.b)("li",{parentName:"ul"},"Fix the bug caused by the empty target mode ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/930"}),"#930")),Object(o.b)("li",{parentName:"ul"},"Fix invalid usage of ",Object(o.b)("inlineCode",{parentName:"li"},"cgo/unsafe")," pointer in TimeChaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/904"}),"#904")),Object(o.b)("li",{parentName:"ul"},"Fix the selectors issue in ",Object(o.b)("inlineCode",{parentName:"li"},"new experiments scope")," page ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/881"}),"#881"))))}h.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),h=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=h(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=h(a),b=r,u=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return a?n.a.createElement(u,c(c({ref:t},l),{},{components:a})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
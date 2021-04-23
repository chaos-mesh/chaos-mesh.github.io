(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(263)),s={id:"v0.9.0",title:"Chaos Mesh v0.9.0 Release Notes",sidebar_label:"v0.9.0"},i={unversionedId:"releases/v0.9.0",id:"version-1.2.0/releases/v0.9.0",isDocsHomePage:!1,title:"Chaos Mesh v0.9.0 Release Notes",description:"Chaos Mesh v0.9.0 mainly introduces the Chaos Dashboard component, which is the web UI for users to manage and monitor chaos experiments. In this version, NetworkChaos has been refactored to support setting multiple network attack rules on the same Pod at the same time, a one-click installation script is added to help users quickly get started with Chaos Mesh.",source:"@site/versioned_docs/version-1.2.0/releases/v0.9.0.md",slug:"/releases/v0.9.0",permalink:"/docs/releases/v0.9.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.0/releases/v0.9.0.md",version:"1.2.0",sidebar_label:"v0.9.0",sidebar:"version-1.2.0/docs",previous:{title:"Chaos Mesh v1.0.0 Release Notes",permalink:"/docs/releases/v1.0.0"},next:{title:"Chaos Mesh v0.8.0 Release Notes",permalink:"/docs/releases/v0.8.0"}},c=[{value:"New Features &amp; Enhancements",id:"new-features--enhancements",children:[]},{value:"Major Bug Fixes",id:"major-bug-fixes",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chaos Mesh v0.9.0 mainly introduces the Chaos Dashboard component, which is the web UI for users to manage and monitor chaos experiments. In this version, NetworkChaos has been refactored to support setting multiple network attack rules on the same Pod at the same time, a one-click installation script is added to help users quickly get started with Chaos Mesh."),Object(o.b)("h2",{id:"new-features--enhancements"},"New Features & Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Introduce Chaos Dashboard component",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Support creating/updating/deleting/pausing PodChaos, NetworkChaos, StressChaos, TimeChaos, IoChaos, KernelChaos through the web interface ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/481"}),"#481")),Object(o.b)("li",{parentName:"ul"},"Support directly uploading YAML files through the interface to create chaos experiments ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/pull/665"}),"#665")),Object(o.b)("li",{parentName:"ul"},"Support obtaining specific fault injection event details through the interface ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/628"}),"#628")),Object(o.b)("li",{parentName:"ul"},"Support direct reuse of archived chaos configurations ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/783"}),"#783")))),Object(o.b)("li",{parentName:"ul"},"Supports forcibly cleaning chaos experiment by setting chaos experiment object annotations to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/415"}),"#415")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/478"}),"#478")),Object(o.b)("li",{parentName:"ul"},"Support the use of ",Object(o.b)("inlineCode",{parentName:"li"},"installsh")," script to quickly install Chaos Mesh ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/466"}),"#466")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/506"}),"#506")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/511"}),"#511")),Object(o.b)("li",{parentName:"ul"},"Add a new sidecar configuration template to simplify the IoChaos configuration file ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/502"}),"#502")),Object(o.b)("li",{parentName:"ul"},"Support setting protected namespaces ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/661"}),"#661")),Object(o.b)("li",{parentName:"ul"},"Support injecting StressChaos into a specified container in the Pod ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/759"}),"#759")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/794"}),"#794")),Object(o.b)("li",{parentName:"ul"},"Refactor NetworkChaos to support setting multiple network attack rules on the same Pod ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/788"}),"#788"))),Object(o.b)("h2",{id:"major-bug-fixes"},"Major Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fix burn-memory not taking effect ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/776"}),"#776")),Object(o.b)("li",{parentName:"ul"},"Fix the failure to restore NetworkChaos ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pingcap/chaos-mesh/pull/788"}),"#788"))))}l.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(a),b=r,m=h["".concat(s,".").concat(b)]||h[b]||u[b]||o;return a?n.a.createElement(m,i(i({ref:t},p),{},{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
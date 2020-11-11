(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(184)),i={id:"development_overview",title:"Development Guide",sidebar_label:"Development Overview"},c={unversionedId:"development_guides/development_overview",id:"development_guides/development_overview",isDocsHomePage:!1,title:"Development Guide",description:"This guide prepares you for the development of Chaos Mesh from scratch. Before you get started, it is recommended to get familiar with the project through the following materials:",source:"@site/docs/development_guides/develop.md",slug:"/development_guides/development_overview",permalink:"/docs/next/development_guides/development_overview",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/development_guides/develop.md",version:"current",sidebar_label:"Development Overview",sidebar:"docs",previous:{title:"Network latency simulation across multiple data centers",permalink:"/docs/next/use_cases/multi_data_centers"},next:{title:"Set up the development environment",permalink:"/docs/next/development_guides/set_up_the_development_environment"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide prepares you for the development of Chaos Mesh from scratch. Before you get started, it is recommended to get familiar with the project through the following materials:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/README.md"}),"README")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/ui/README.md"}),"README (Dashboard)"))),Object(a.b)("p",null,"The development flow starts from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/development_guides/set_up_the_development_environment"}),"Set up your development environment"),". After this, you can choose any of the following procedures to contribute:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/development_guides/develop_a_new_chaos"}),"Develop a New Chaos Type")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/development_guides/add_facilities_to_chaos_daemon"}),"Add facilities to chaos daemon"))))}s.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{184:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(f,s(s({ref:t},u),{},{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(184)),i={id:"blast_radius",title:"Blast Radius",sidebar_label:"Blast Radius"},s={unversionedId:"concepts/blast_radius",id:"version-1.0.2/concepts/blast_radius",isDocsHomePage:!1,title:"Blast Radius",description:"Chaos experiments are executed in production environments, this leaves room for customer facing outages. While there has to be some allowance for short-term negative impact the blast radius or fallout from the experiment must be minimized and contained.",source:"@site/versioned_docs/version-1.0.2/concepts/blast-radius.md",slug:"/concepts/blast_radius",permalink:"/docs/concepts/blast_radius",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.2/concepts/blast-radius.md",version:"1.0.2",sidebar_label:"Blast Radius",sidebar:"version-1.0.2/docs",previous:{title:"Chaos Engineering",permalink:"/docs/concepts/chaos_engineering"},next:{title:"Installation",permalink:"/docs/get_started/installation"}},c=[],u={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Chaos experiments are executed in production environments, this leaves room for customer facing outages. While there has to be some allowance for short-term negative impact the blast radius or fallout from the experiment must be minimized and contained."))}l.isMDXComponent=!0}}]);
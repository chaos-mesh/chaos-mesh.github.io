"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2385],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Simulate Host Faults"},l=void 0,u={unversionedId:"simulate-host-console-in-physical-nodes",id:"version-2.1.5/simulate-host-console-in-physical-nodes",isDocsHomePage:!1,title:"Simulate Host Faults",description:"This document introduces how to simulate host shutdown faults using Chaosd.",source:"@site/versioned_docs/version-2.1.5/simulate-host-console-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-host-console-in-physical-nodes",permalink:"/docs/2.1.5/simulate-host-console-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.5/simulate-host-console-in-physical-nodes.md",tags:[],version:"2.1.5",frontMatter:{title:"Simulate Host Faults"},sidebar:"version-2.1.5/docs",previous:{title:"Simulate Network Faults",permalink:"/docs/2.1.5/simulate-network-chaos-in-physical-nodes"},next:{title:"Simulate Stress Scenarios",permalink:"/docs/2.1.5/simulate-heavy-stress-in-physical-nodes"}},c=[{value:"View the help information of host shutdown experiments",id:"view-the-help-information-of-host-shutdown-experiments",children:[],level:2},{value:"Create a host shutdown experiment",id:"create-a-host-shutdown-experiment",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document introduces how to simulate host shutdown faults using Chaosd."),(0,s.kt)("h2",{id:"view-the-help-information-of-host-shutdown-experiments"},"View the help information of host shutdown experiments"),(0,s.kt)("p",null,"Before creating a fault experiment, you can run the following command to view the help information of host shutdown experiments:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown -h\n")),(0,s.kt)("p",null,"The output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h2",{id:"create-a-host-shutdown-experiment"},"Create a host shutdown experiment"),(0,s.kt)("p",null,"To create a host shutdown experiment, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\n")),(0,s.kt)("p",null,"The example output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n")),(0,s.kt)("p",null,"After executing this command, your host will shut down after all processes are closed."))}p.isMDXComponent=!0}}]);
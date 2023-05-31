"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2276],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(59496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=s,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(60795),s=(n(59496),n(49613));const r={title:"Simulate Host Faults"},a=void 0,l={unversionedId:"simulate-host-console-in-physical-nodes",id:"version-2.5.2/simulate-host-console-in-physical-nodes",title:"Simulate Host Faults",description:"This document introduces how to simulate host shutdown faults using Chaosd.",source:"@site/versioned_docs/version-2.5.2/simulate-host-console-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-host-console-in-physical-nodes",permalink:"/docs/2.5.2/simulate-host-console-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/simulate-host-console-in-physical-nodes.md",tags:[],version:"2.5.2",frontMatter:{title:"Simulate Host Faults"},sidebar:"docs",previous:{title:"Simulate Network Faults",permalink:"/docs/2.5.2/simulate-network-chaos-in-physical-nodes"},next:{title:"Simulate Stress Scenarios",permalink:"/docs/2.5.2/simulate-heavy-stress-in-physical-nodes"}},i={},c=[{value:"View the help information of host shutdown experiments",id:"view-the-help-information-of-host-shutdown-experiments",level:2},{value:"Create a host shutdown experiment",id:"create-a-host-shutdown-experiment",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document introduces how to simulate host shutdown faults using Chaosd."),(0,s.kt)("h2",{id:"view-the-help-information-of-host-shutdown-experiments"},"View the help information of host shutdown experiments"),(0,s.kt)("p",null,"Before creating a fault experiment, you can run the following command to view the help information of host shutdown experiments:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown -h\n")),(0,s.kt)("p",null,"The output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h2",{id:"create-a-host-shutdown-experiment"},"Create a host shutdown experiment"),(0,s.kt)("p",null,"To create a host shutdown experiment, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\n")),(0,s.kt)("p",null,"The example output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n")),(0,s.kt)("p",null,"After executing this command, your host will shut down after all processes are closed."))}p.isMDXComponent=!0}}]);
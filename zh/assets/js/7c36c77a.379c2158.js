"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2339],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(60795),o=(n(59496),n(49613));const a={title:"\u6a21\u62df\u4e3b\u673a\u6545\u969c"},s=void 0,l={unversionedId:"simulate-host-console-in-physical-nodes",id:"version-2.6.1/simulate-host-console-in-physical-nodes",title:"\u6a21\u62df\u4e3b\u673a\u6545\u969c",description:"\u6a21\u62df\u4e3b\u673a\u6545\u969c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/simulate-host-console-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-host-console-in-physical-nodes",permalink:"/zh/docs/simulate-host-console-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/simulate-host-console-in-physical-nodes.md",tags:[],version:"2.6.1",frontMatter:{title:"\u6a21\u62df\u4e3b\u673a\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/zh/docs/simulate-network-chaos-in-physical-nodes"},next:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f",permalink:"/zh/docs/simulate-heavy-stress-in-physical-nodes"}},c={},i=[{value:"\u6a21\u62df\u4e3b\u673a\u6545\u969c",id:"\u6a21\u62df\u4e3b\u673a\u6545\u969c",level:2},{value:"\u521b\u5efa\u5b9e\u9a8c",id:"\u521b\u5efa\u5b9e\u9a8c",level:3}],u={toc:i},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6a21\u62df\u4e3b\u673a\u6545\u969c"},"\u6a21\u62df\u4e3b\u673a\u6545\u969c"),(0,o.kt)("p",null,"Chaosd \u652f\u6301\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\u3002"),(0,o.kt)("h3",{id:"\u521b\u5efa\u5b9e\u9a8c"},"\u521b\u5efa\u5b9e\u9a8c"),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u5b9e\u9a8c\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n")),(0,o.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u4f60\u7684\u4e3b\u673a\u4f1a\u5728\u6240\u6709\u8fdb\u7a0b\u5173\u95ed\u540e\u5173\u673a\u3002"),(0,o.kt)("p",null,"\u8981\u67e5\u770b Chaosd \u652f\u6301\u54ea\u4e9b\u7c7b\u578b\u7684\u4e3b\u673a\u5173\u673a\u5b9e\u9a8c\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack host shutdown -h\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")))}h.isMDXComponent=!0}}]);
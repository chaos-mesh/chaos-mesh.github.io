"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[69626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(d,s(s({ref:t},h),{},{components:a})):o.createElement(d,s({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<r;i++)s[i]=a[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=a(87462),n=(a(67294),a(3905));const r={title:"chaosctl"},s=void 0,c={unversionedId:"chaosctl-tool",id:"version-2.1.6/chaosctl-tool",title:"chaosctl",description:"chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.6/chaosctl-tool.md",sourceDirName:".",slug:"/chaosctl-tool",permalink:"/zh/docs/2.1.6/chaosctl-tool",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.6/chaosctl-tool.md",tags:[],version:"2.1.6",frontMatter:{title:"chaosctl"},sidebar:"version-2.1.6/docs",previous:{title:"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b",permalink:"/zh/docs/2.1.6/use-grafana-data-source"},next:{title:"\u5f00\u53d1\u6307\u5357\u6982\u89c8",permalink:"/zh/docs/2.1.6/developer-guide-overview"}},l={},i=[{value:"\u83b7\u53d6 chaosctl",id:"\u83b7\u53d6-chaosctl",level:2},{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u65e5\u5fd7\u67e5\u770b",id:"\u65e5\u5fd7\u67e5\u770b",level:3},{value:"\u8c03\u8bd5 Chaos",id:"\u8c03\u8bd5-chaos",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5f00\u53d1\u4e0e\u6539\u8fdb",id:"\u5f00\u53d1\u4e0e\u6539\u8fdb",level:2}],h={toc:i};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002"),(0,n.kt)("h2",{id:"\u83b7\u53d6-chaosctl"},"\u83b7\u53d6 chaosctl"),(0,n.kt)("p",null,"\u6211\u4eec\u4e3a Linux \u63d0\u4f9b\u4e86\u53ef\u6267\u884c\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d chaosctl\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl\n")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Windows \u6216 macOS\uff0c\u53ef\u4ee5\u81ea\u884c\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1\u3002\u63a8\u8350\u4f7f\u7528 Go 1.15 \u4ee5\u4e0a\u7248\u672c\u8fdb\u884c\u7f16\u8bd1\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 Chaos Mesh \u514b\u9686\u81f3\u672c\u5730"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5207\u6362\u81f3 Chaos Mesh \u76ee\u5f55\u4e0b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make chaosctl\n")),(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5f97\u5230\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/chaosctl")))),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("p",null,"chaosctl \u6709\u4e24\u7c7b\u529f\u80fd\uff0c\u5206\u522b\u662f\u67e5\u770b\u65e5\u5fd7\u53ca\u8c03\u8bd5 Chaos\u3002"),(0,n.kt)("h3",{id:"\u65e5\u5fd7\u67e5\u770b"},"\u65e5\u5fd7\u67e5\u770b"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," \u53ef\u4ee5\u67e5\u770b\u6240\u6709 Chaos Mesh \u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs -h")," \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosctl logs -t 100 # \u8f93\u51fa\u6240\u6709\u7ec4\u4ef6\u7684\u6700\u540e100\u884c\u65e5\u5fd7\n")),(0,n.kt)("h3",{id:"\u8c03\u8bd5-chaos"},"\u8c03\u8bd5 Chaos"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," \u53ef\u4ee5\u67e5\u770b Chaos \u7684\u8c03\u8bd5\u4fe1\u606f\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug -h")," \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u4f7f\u7528\u8fd9\u4e00\u529f\u80fd\u65f6\uff0cchaosctl \u9700\u8981\u4e0e\u76f8\u5e94\u7684 chaos-daemon \u5efa\u7acb\u8fde\u63a5\uff0c\u5982\u679c\u4f60\u5728\u90e8\u7f72 Chaos Mesh \u65f6\u5173\u95ed\u4e86 TLS \uff08\u9ed8\u8ba4\u6253\u5f00\uff09\uff0c\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"-i")," \u9009\u9879\u6765\u544a\u77e5 chaosctl \u4e0d\u4f7f\u7528 TLS\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl debug -i networkchaos web-show-network-delay\n")),(0,n.kt)("p",null,"\u76ee\u524d\uff0cchaosctl \u53ea\u652f\u6301 iochaos, networkchaos, stresschaos \u4e09\u7c7b Chaos \u7684\u8c03\u8bd5\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u63d0\u4ea4\u5173\u4e8e Chaos Mesh \u7684\u95ee\u9898\uff0c\u5728\u95ee\u9898\u4e2d\u9644\u4e0a\u76f8\u5173\u7684\u65e5\u5fd7\u4e0e chaos \u4fe1\u606f\u5f88\u6709\u5e2e\u52a9\u3002\u4f60\u53ef\u4ee5\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," \u7684\u8f93\u51fa\u9644\u5728 issue \u5c3e\u90e8\u4ee5\u4f9b\u5f00\u53d1\u4eba\u5458\u53c2\u8003\u3002\u5982\u679c\u4f60\u5e0c\u671b\u63d0\u4ea4\u7684\u95ee\u9898\u4e0e iochaos, networkchaos, stresschaos \u6709\u5173\uff0c\u90a3\u4e48 ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," \u7684\u76f8\u5173\u4fe1\u606f\u4e5f\u4f1a\u5f88\u6709\u7528\u3002"),(0,n.kt)("h2",{id:"\u5f00\u53d1\u4e0e\u6539\u8fdb"},"\u5f00\u53d1\u4e0e\u6539\u8fdb"),(0,n.kt)("p",null,"chaosctl \u7684\u4ee3\u7801\u76ee\u524d\u6258\u7ba1\u4e8e Chaos Mesh \u9879\u76ee\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl"},"chaos-mesh/pkg/chaosctl")," \u627e\u5230\u76f8\u5173\u5b9e\u73b0\u3002\u5982\u679c\u4f60\u6709\u5174\u8da3\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u8fd9\u4e00\u5de5\u5177\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"Slack")," \u8054\u7cfb\u6211\u4eec\uff0c\u6216\u662f\u5728 Chaos Mesh \u9879\u76ee\u4e2d\u63d0\u51fa\u76f8\u5173 issue \u3002"))}p.isMDXComponent=!0}}]);
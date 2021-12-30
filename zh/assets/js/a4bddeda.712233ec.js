"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(i,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0"},i=void 0,u={unversionedId:"upgrade-to-2.0",id:"version-2.0.6/upgrade-to-2.0",isDocsHomePage:!1,title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0",description:"\u672c\u6587\u4ecb\u7ecd\u4ece Chaos Mesh 1.x \u5347\u7ea7\u81f3 2.0 \u7684\u8be6\u7ec6\u6b65\u9aa4\u3002Chaos Mesh 2.0 \u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\uff0c\u5e76\u4fee\u590d\u4e86\u8bb8\u591a\u95ee\u9898\u3002Chaos Mesh 2.0 \u91cd\u6784\u4e86\u4e00\u90e8\u5206\u4ee3\u7801\uff0c\u56e0\u6b64\u9700\u8981\u505a\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u4ece Chaos Mesh 1.x \u5347\u7ea7\u5230 2.0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/upgrade-to-2.0.md",sourceDirName:".",slug:"/upgrade-to-2.0",permalink:"/zh/docs/2.0.6/upgrade-to-2.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/upgrade-to-2.0.md",tags:[],version:"2.0.6",frontMatter:{title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0"},sidebar:"version-2.0.6/docs",previous:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)",permalink:"/zh/docs/2.0.6/faqs"}},c=[{value:"\u5347\u7ea7\u5de5\u5177",id:"\u5347\u7ea7\u5de5\u5177",children:[],level:2},{value:"\u7b2c 1 \u6b65\uff1a\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c",id:"\u7b2c-1-\u6b65\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c",children:[],level:2},{value:"\u7b2c 2 \u6b65\uff1a\u5347\u7ea7 CRD",id:"\u7b2c-2-\u6b65\u5347\u7ea7-crd",children:[],level:2},{value:"\u7b2c 3 \u6b65\uff1a\u5347\u7ea7 Chaos Mesh",id:"\u7b2c-3-\u6b65\u5347\u7ea7-chaos-mesh",children:[],level:2},{value:"\u7b2c 4 \u6b65\uff1a\u5bfc\u5165\u5b9e\u9a8c",id:"\u7b2c-4-\u6b65\u5bfc\u5165\u5b9e\u9a8c",children:[],level:2},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",children:[],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4ece Chaos Mesh 1.x \u5347\u7ea7\u81f3 2.0 \u7684\u8be6\u7ec6\u6b65\u9aa4\u3002Chaos Mesh 2.0 \u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\uff0c\u5e76\u4fee\u590d\u4e86\u8bb8\u591a\u95ee\u9898\u3002Chaos Mesh 2.0 \u91cd\u6784\u4e86\u4e00\u90e8\u5206\u4ee3\u7801\uff0c\u56e0\u6b64\u9700\u8981\u505a\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u4ece Chaos Mesh 1.x \u5347\u7ea7\u5230 2.0\u3002"),(0,o.kt)("h2",{id:"\u5347\u7ea7\u5de5\u5177"},"\u5347\u7ea7\u5de5\u5177"),(0,o.kt)("p",null,"CRD \u5728 Chaos Mesh 2.0 \u4e2d\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u65e7\u7248\u672c\u5b9e\u9a8c\u7684 YAML \u6587\u4ef6\u65e0\u6cd5\u5728 Chaos Mesh 2.0 \u4e0a\u8fd0\u884c\u3002\u5982\u679c\u5e0c\u671b\u7ee7\u7eed\u4f7f\u7528\u65e7\u7248\u672c\u5b9e\u9a8c\u7684 YAML \u6587\u4ef6\uff0c\u5219\u9700\u8981\u5bfc\u51fa\u5e76\u5347\u7ea7\u8fd9\u4e9b\u6587\u4ef6\uff0c\u5e76\u5728 Chaos Mesh \u5347\u7ea7\u540e\u91cd\u65b0\u5bfc\u5165\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u5347\u7ea7\u8fc7\u7a0b\uff0cChaos Mesh 2.0 \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5347\u7ea7\u5de5\u5177\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"migrate.sh"),"\uff1a\u7528\u4e8e\u81ea\u52a8\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c YAML \u6587\u4ef6\u3001\u5347\u7ea7 CRD\u3001\u5bfc\u5165\u5347\u7ea7\u540e\u7684 YAML \u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schedule-migration"),"\uff1a\u7528\u4e8e\u5c06\u6307\u5b9a\u7684\u65e7\u7248 YAML \u6587\u4ef6\u66f4\u65b0\u4e3a\u65b0\u7248 YAML \u6587\u4ef6\u3002")),(0,o.kt)("p",null,"\u8981\u83b7\u53d6\u5347\u7ea7\u5de5\u5177\uff0c\u5efa\u8bae\u5c06 Chaos Mesh \u9879\u76ee\u514b\u9686\u81f3\u672c\u5730\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"make schedule-migration.tar.gz"),"\uff0c\u6216\u662f\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"},"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz")," \u4e0b\u8f7d\u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u89e3\u538b\uff0c\u5373\u53ef\u5f97\u5230\u4e0a\u8ff0\u4e24\u4e2a\u5de5\u5177\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf ./schedule-migration.tar.gz\n")),(0,o.kt)("p",null,"\u8be5\u538b\u7f29\u5305\u6253\u5305\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," \u5de5\u5177\u4ec5\u9002\u7528\u4e8e Linux x86_64 \u5e73\u53f0\uff0c\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf / \u67b6\u6784\u7684\u7528\u6237\u9700\u8981\u81ea\u884c\u7f16\u8bd1\u3002"),(0,o.kt)("h2",{id:"\u7b2c-1-\u6b65\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c"},"\u7b2c 1 \u6b65\uff1a\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5347\u7ea7\u5de5\u5177 ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate.sh")," \u81ea\u52a8\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c\u3002\u5728\u8fd0\u884c\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5f53\u524d\u7528\u6237\u6709\u8db3\u591f\u7684\u6743\u9650\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate.sh")," \u4f4d\u4e8e\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14 ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," \u5de5\u5177\u4e5f\u7f6e\u4e8e\u8be5\u76ee\u5f55\u4e0b\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -e\n")),(0,o.kt)("p",null,"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e86\u8bb8\u591a YAML \u6587\u4ef6\uff0c\u8fd9\u4e9b\u5c31\u662f\u88ab\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u3002\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u5df2\u7ecf\u88ab\u81ea\u52a8\u5347\u7ea7\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," \u5de5\u5177\u53ea\u5347\u7ea7\u6307\u5b9a\u7684\u65e7\u7248 YAML \u6587\u4ef6\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./schedule-migration <path-to-old-yaml> <path-to-new-yaml>\n")),(0,o.kt)("p",null,"\u5728\u4f60\u6307\u5b9a\u7684 YAML \u6587\u4ef6\u8def\u5f84\uff0c\u5c31\u53ef\u4ee5\u83b7\u53d6\u5347\u7ea7\u540e\u7684\u65b0\u7248 YAML \u6587\u4ef6\u3002\u5728\u5220\u9664\u65e7\u8d44\u6e90\u540e\u91cd\u65b0\u5e94\u7528\u65b0 YAML \u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u66f4\u65b0\u3002"),(0,o.kt)("h2",{id:"\u7b2c-2-\u6b65\u5347\u7ea7-crd"},"\u7b2c 2 \u6b65\uff1a\u5347\u7ea7 CRD"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 Helm \u5347\u7ea7 Chaos Mesh \u524d\uff0c\u4e3a\u4e86\u80fd\u6700\u5927\u7a0b\u5ea6\u4fdd\u8bc1\u5347\u7ea7\u6210\u529f\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u624b\u52a8\u5347\u7ea7 CRD\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -c\n")),(0,o.kt)("p",null,"\u5373\u53ef\u770b\u5230 CRD \u88ab\u5220\u9664\u540e\u91cd\u65b0\u6dfb\u52a0\u3002"),(0,o.kt)("h2",{id:"\u7b2c-3-\u6b65\u5347\u7ea7-chaos-mesh"},"\u7b2c 3 \u6b65\uff1a\u5347\u7ea7 Chaos Mesh"),(0,o.kt)("p",null,"\u7531\u4e8e 2.0 \u7684\u6539\u52a8\u8f83\u5927\uff0c\u63a8\u8350\u5728\u5378\u8f7d 1.x \u540e\u91cd\u65b0\u8fdb\u884c\u5b89\u88c5\u3002\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/2.0.6/production-installation-using-helm"},"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"),"\u3002"),(0,o.kt)("h2",{id:"\u7b2c-4-\u6b65\u5bfc\u5165\u5b9e\u9a8c"},"\u7b2c 4 \u6b65\uff1a\u5bfc\u5165\u5b9e\u9a8c"),(0,o.kt)("p",null,"Chaos Mesh 2.0 \u5bf9\u5b9e\u9a8c\u5b9a\u4e49\u8fdb\u884c\u4e86\u4e00\u4e9b\u4fee\u6539\uff0c\u9700\u8981\u5347\u7ea7\u65e7\u7248\u5b9e\u9a8c\u6587\u4ef6\u540e\u624d\u80fd\u7ee7\u7eed\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u5728\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u7684\u540c\u4e00\u76ee\u5f55\u4e0b\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u5165\u5b9e\u9a8c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -i\n")),(0,o.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5c06\u547d\u4ee4\u884c\u8f93\u51fa\u63d0\u4ea4\u81f3 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"slack")," \u6216\u5728 Github \u4e0a\u65b0\u5efa\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue"),"\u3002\u611f\u8c22\u4f60\u7684\u53cd\u9988\uff0cChaos Mesh \u56e2\u961f\u5f88\u4e50\u610f\u5e2e\u52a9\u89e3\u51b3\u3002"))}h.isMDXComponent=!0}}]);
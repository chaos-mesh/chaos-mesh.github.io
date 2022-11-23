"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[19885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,k=m["".concat(c,".").concat(u)]||m[u]||i[u]||l;return a?n.createElement(k,r(r({ref:t},h),{},{components:a})):n.createElement(k,r({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const l={title:"Chaosctl"},r=void 0,s={unversionedId:"chaosctl-tool",id:"version-2.3.3/chaosctl-tool",title:"Chaosctl",description:"Chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 Chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/chaosctl-tool.md",sourceDirName:".",slug:"/chaosctl-tool",permalink:"/zh/docs/2.3.3/chaosctl-tool",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/chaosctl-tool.md",tags:[],version:"2.3.3",frontMatter:{title:"Chaosctl"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b",permalink:"/zh/docs/2.3.3/use-grafana-data-source"},next:{title:"\u5f00\u53d1\u6307\u5357\u6982\u89c8",permalink:"/zh/docs/2.3.3/developer-guide-overview"}},c={},p=[{value:"\u83b7\u53d6 Chaosctl",id:"\u83b7\u53d6-chaosctl",level:2},{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u65e5\u5fd7\u67e5\u770b",id:"\u65e5\u5fd7\u67e5\u770b",level:3},{value:"\u8c03\u8bd5 Chaos",id:"\u8c03\u8bd5-chaos",level:3},{value:"\u4e3a Chaosd \u751f\u6210 TLS \u8bc1\u4e66",id:"\u4e3a-chaosd-\u751f\u6210-tls-\u8bc1\u4e66",level:3},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",level:2}],h={toc:p};function i(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 Chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002"),(0,o.kt)("h2",{id:"\u83b7\u53d6-chaosctl"},"\u83b7\u53d6 Chaosctl"),(0,o.kt)("p",null,"\u6211\u4eec\u4e3a Linux \u63d0\u4f9b\u4e86\u53ef\u6267\u884c\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d Chaosctl\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl -O\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Windows \u6216 macOS\uff0c\u53ef\u4ee5\u81ea\u884c\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1\u3002\u63a8\u8350\u4f7f\u7528 Go 1.15 \u4ee5\u4e0a\u7248\u672c\u8fdb\u884c\u7f16\u8bd1\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06 Chaos Mesh \u514b\u9686\u81f3\u672c\u5730"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5207\u6362\u81f3 Chaos Mesh \u76ee\u5f55\u4e0b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make chaosctl\n")),(0,o.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5f97\u5230\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/chaosctl")))),(0,o.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,o.kt)("p",null,"Chaosctl \u6709\u4e24\u7c7b\u529f\u80fd\uff0c\u5206\u522b\u662f\u67e5\u770b\u65e5\u5fd7\u53ca\u8c03\u8bd5 Chaos\u3002"),(0,o.kt)("h3",{id:"\u65e5\u5fd7\u67e5\u770b"},"\u65e5\u5fd7\u67e5\u770b"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," \u53ef\u4ee5\u67e5\u770b\u6240\u6709 Chaos Mesh \u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl logs -h")," \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosctl logs -t 100 # \u8f93\u51fa\u6240\u6709\u7ec4\u4ef6\u7684\u6700\u540e100\u884c\u65e5\u5fd7\n")),(0,o.kt)("h3",{id:"\u8c03\u8bd5-chaos"},"\u8c03\u8bd5 Chaos"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," \u53ef\u4ee5\u67e5\u770b Chaos \u7684\u8c03\u8bd5\u4fe1\u606f\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl debug -h")," \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u4f7f\u7528\u8fd9\u4e00\u529f\u80fd\u65f6\uff0cChaosctl \u9700\u8981\u4e0e\u76f8\u5e94\u7684 chaos-daemon \u5efa\u7acb\u8fde\u63a5\uff0c\u5982\u679c\u4f60\u5728\u90e8\u7f72 Chaos Mesh \u65f6\u5173\u95ed\u4e86 TLS \uff08\u9ed8\u8ba4\u6253\u5f00\uff09\uff0c\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," \u9009\u9879\u6765\u544a\u77e5 Chaosctl \u4e0d\u4f7f\u7528 TLS\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl debug -i networkchaos web-show-network-delay\n")),(0,o.kt)("p",null,"\u76ee\u524d\uff0cChaosctl \u53ea\u652f\u6301 iochaos, networkchaos, stresschaos \u4e09\u7c7b Chaos \u7684\u8c03\u8bd5\u3002"),(0,o.kt)("h3",{id:"\u4e3a-chaosd-\u751f\u6210-tls-\u8bc1\u4e66"},"\u4e3a Chaosd \u751f\u6210 TLS \u8bc1\u4e66"),(0,o.kt)("p",null,"\u5f53\u5728 Chaosd \u548c Chaos Mesh \u4e4b\u95f4\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u4e3a\u4e86\u4fdd\u969c Chaosd \u548c Chaos-controller-manager \u670d\u52a1\u4e4b\u95f4\u7684\u901a\u4fe1\u5b89\u5168\uff0cChaos Mesh \u63a8\u8350\u5f00\u542f mTLS (Mutual Transport Layer Security) \u6a21\u5f0f\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u5f00\u542f mTLS \u6a21\u5f0f\uff0cChaosd \u548c Chaos mesh \u7684\u53c2\u6570\u4e2d\u9700\u8981\u914d\u7f6e\u597d TLS \u8bc1\u4e66\u53c2\u6570\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u786e\u5b9a Chaosd \u548c Chaos Mesh \u5df2\u7ecf\u751f\u6210\u4e86 TLS \u8bc1\u4e66\u540e\uff0c\u518d\u628a TLS \u8bc1\u4e66\u4f5c\u4e3a\u53c2\u6570\u542f\u52a8 Chaosd \u548c Chaos Mesh\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chaosd\uff1a\u8be5\u5de5\u5177\u652f\u6301\u5728\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u524d\u548c\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u540e\u5f00\u59cb\u542f\u52a8\u3002\u4e3a\u4e86\u4fdd\u969c\u96c6\u7fa4\u5b89\u5168\uff0c\u63a8\u8350\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570",(0,o.kt)("strong",{parentName:"li"},"\u540e"),"\uff0c\u518d\u542f\u52a8\u5de5\u5177\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/2.3.3/simulate-physical-machine-chaos#%E8%BF%90%E8%A1%8C-chaosd-server"},"\u8fd0\u884c Chaosd Server"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"Chaos Mesh\uff1a\u5f53\u4f7f\u7528 Helm \u90e8\u7f72 Chaos Mesh \u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684 Chaosd \u6ca1\u6709\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u53ef\u4ee5\u4f7f\u7528 Chaosctl\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u4fbf\u5730\u751f\u6210\u8be5\u8bc1\u4e66\u3002\u5728\u4ee5\u4e0b\u573a\u666f\u4e0b\uff0cChaosctl \u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u6848\u6267\u884c\u547d\u4ee4\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u573a\u666f\u4e00"),"\uff1a\u5f00\u542f Chaosctl \u7684\u8fd0\u884c\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee Kubernetes \u96c6\u7fa4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 SSH \u5de5\u5177\u8fde\u63a5\u5230\u7269\u7406\u673a\u3002"),(0,o.kt)("p",null,"\u5728\u8be5\u573a\u666f\u4e0b\uff0c\u4ec5\u9700\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u4e0b\u5217\u64cd\u4f5c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u547d\u4ee4\uff1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm init")," \u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm init pm-name --ip=123.123.123.123 -l arch=amd64,anotherkey=value\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u64cd\u4f5c\uff1a\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u6267\u884c\u4e0b\u5217\u64cd\u4f5c\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e00\u952e\u751f\u6210 Chaosd \u6240\u9700\u8981\u7684\u8bc1\u4e66\uff0c\u5e76\u628a\u8bc1\u4e66\u4fdd\u5b58\u5230\u5bf9\u5e94\u7684\u7269\u7406\u673a\u4e0a\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"PhysicalMachine")," \u8d44\u6e90\u3002")))),(0,o.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm init -h")," \u67e5\u9605\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u573a\u666f\u4e8c"),"\uff1a\u5f00\u542f Chaosctl \u7684\u8fd0\u884c\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee Kubernetes \u96c6\u7fa4\uff0c\u4f46\u65e0\u6cd5\u4f7f\u7528 SSH \u5de5\u5177\u8fde\u63a5\u5230\u7269\u7406\u673a\u3002"),(0,o.kt)("p",null,"\u5728\u8be5\u573a\u666f\u4e0b\uff0c\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6267\u884c\u547d\u4ee4\u524d\uff0c\u5148\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u83b7\u53d6 CA \u8bc1\u4e66\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o \"jsonpath={.data['ca\\.crt']}\" | base64 -d > ca.crt\nkubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o \"jsonpath={.data['ca\\.key']}\" | base64 -d> ca.key\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c\u547d\u4ee4\u540e\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"ca.crt")," \u6587\u4ef6\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ca.key")," \u6587\u4ef6\u62f7\u8d1d\u5230",(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u5e94\u7684\u7269\u7406\u673a"),"\u4e0a\u3002\u4e0b\u6587\u4ee5\u4fdd\u5b58\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/chaosd/pki")," \u76ee\u5f55\u4e0b\u4e3a\u4f8b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u5728",(0,o.kt)("strong",{parentName:"p"},"\u7269\u7406\u673a"),"\u4e0a\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm generate")," \u547d\u4ee4\uff0c\u751f\u6210 TLS \u8bc1\u4e66\uff08\u8bc1\u4e66\u7684\u9ed8\u8ba4\u4fdd\u5b58\u8def\u5f84\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/chaosd/pki"),"\uff09\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm generate --cacert=/etc/chaosd/pki/ca.crt --cakey=/etc/chaosd/pki/ca.key\n")),(0,o.kt)("p",{parentName:"li"},"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm generate -h")," \u67e5\u9605\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u5728\u53ef\u8bbf\u95ee\u5230 Kubernetes \u96c6\u7fa4\u7684\u673a\u5668\u4e0a\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm create")," \u547d\u4ee4\uff0c\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"PhysicalMachine")," \u8d44\u6e90\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm create pm-name --ip=123.123.123.123 -l arch=amd64\n")),(0,o.kt)("p",{parentName:"li"},"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl pm create -h")," \u67e5\u9605\u3002"))),(0,o.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,o.kt)("p",null,"Chaosctl \u7684\u4ee3\u7801\u76ee\u524d\u6258\u7ba1\u4e8e Chaos Mesh \u9879\u76ee\u4e2d\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl"},"chaos-mesh/pkg/chaosctl")," \u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u64cd\u4f5c\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6216\u6709\u5174\u8da3\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u8fd9\u4e00\u5de5\u5177\uff0c\u6b22\u8fce\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack")," \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue"),"\u3002"),(0,o.kt)("p",null,"\u53cd\u9988\u95ee\u9898\u65f6\uff0c\u5728\u95ee\u9898\u4e2d\u9644\u4e0a\u76f8\u5173\u7684\u65e5\u5fd7\u548c Chaos \u4fe1\u606f\u4f1a\u6709\u52a9\u4e8e\u8bca\u65ad\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," \u7684\u8f93\u51fa\u9644\u5728 issue \u5c3e\u90e8\uff0c\u4ee5\u4f9b\u5f00\u53d1\u4eba\u5458\u53c2\u8003\u3002\u5982\u679c\u4f60\u7684\u95ee\u9898\u4e0e iochaos, networkchaos, stresschaos \u76f8\u5173\uff0c\u4e5f\u8bf7\u9644\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," \u76f8\u5173\u4fe1\u606f\u3002"))}i.isMDXComponent=!0}}]);
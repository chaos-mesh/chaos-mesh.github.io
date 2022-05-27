"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2758],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"GCP \u8eab\u4efd\u9a8c\u8bc1\u63a5\u5165"},s=void 0,c={unversionedId:"gcp-authentication",id:"version-2.1.5/gcp-authentication",isDocsHomePage:!1,title:"GCP \u8eab\u4efd\u9a8c\u8bc1\u63a5\u5165",description:"\u5982\u679c Chaos Mesh \u96c6\u7fa4\u90e8\u7f72\u4e8e Google Cloud Platform\uff0c\u7528\u6237\u5c06\u80fd\u591f\u901a\u8fc7 Google OAuth \u9a8c\u8bc1\u767b\u5165 Chaos Dashboard\u3002\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u542f\u7528\u8fd9\u9879\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.5/gcp-authentication.md",sourceDirName:".",slug:"/gcp-authentication",permalink:"/zh/docs/2.1.5/gcp-authentication",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.1.5/gcp-authentication.md",tags:[],version:"2.1.5",frontMatter:{title:"GCP \u8eab\u4efd\u9a8c\u8bc1\u63a5\u5165"},sidebar:"version-2.1.5/docs",previous:{title:"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c",permalink:"/zh/docs/2.1.5/chaosd-search-recover"},next:{title:"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions",permalink:"/zh/docs/2.1.5/integrate-chaos-mesh-into-github-actions"}},u=[{value:"\u521b\u5efa\u7528\u4e8e\u767b\u9646\u9a8c\u8bc1\u7684 OAuth Client",id:"\u521b\u5efa\u7528\u4e8e\u767b\u9646\u9a8c\u8bc1\u7684-oauth-client",children:[],level:2},{value:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8 Chaos Mesh",id:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8-chaos-mesh",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c Chaos Mesh \u96c6\u7fa4\u90e8\u7f72\u4e8e Google Cloud Platform\uff0c\u7528\u6237\u5c06\u80fd\u591f\u901a\u8fc7 Google OAuth \u9a8c\u8bc1\u767b\u5165 Chaos Dashboard\u3002\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u542f\u7528\u8fd9\u9879\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u7528\u4e8e\u767b\u9646\u9a8c\u8bc1\u7684-oauth-client"},"\u521b\u5efa\u7528\u4e8e\u767b\u9646\u9a8c\u8bc1\u7684 OAuth Client"),(0,o.kt)("p",null,"\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/cloud/answer/6158849?hl=en"},"Setting up OAuth 2.0")," \u521b\u5efa\u7528\u4e8e\u63a5\u5165 GCP \u7684 OAuth 2.0 \u5ba2\u6237\u7aef\uff0c\u5e76\u83b7\u5f97 Client ID \u4e0e Client Secret\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u5165 ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google Cloud Platform \u63a7\u5236\u53f0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u81ea\u52a8\u6253\u5f00 APIs & services \u9875\u9762\uff0c\u8bf7\u5728\u63a7\u5236\u53f0\u7684\u5de6\u4fa7\u83dc\u5355\u4e2d\u624b\u52a8\u9009\u62e9 APIs & services\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4f4d\u4e8e\u5de6\u4fa7\u7684 Credentials\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb Create Credentials\uff0c\u5e76\u9009\u62e9 OAuth client ID\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7c7b\u578b\u9009\u62e9 Web Application\uff0c\u586b\u5165\u5408\u9002\u7684\u540d\u79f0\u4ee5\u53ca Chaos Dashboard \u5bf9\u5e94\u7684 redirect urls\u3002Chaos Dashboard \u7684 redirect urls \u5c06\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"ROOT_URL/api/auth/gcp/callback"),"\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"ROOT_URL")," \u662f dashboard \u7684\u6839\u5730\u5740\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:2333"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"helm")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.rootUrl")," \u914d\u7f6e\u9879\u8fdb\u884c\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u521b\u5efa\u3002")),(0,o.kt)("p",null,"\u5b8c\u6210\u521b\u5efa\u540e\uff0c\u5373\u53ef\u83b7\u5f97\u8be5\u5ba2\u6237\u7aef\u7684 Client ID \u4e0e Client Secret\uff0c\u8bf7\u4fdd\u5b58\u8fd9\u4e24\u9879\u5185\u5bb9\uff0c\u4f9b\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8-chaos-mesh"},"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8 Chaos Mesh"),(0,o.kt)("p",null,"\u8981\u542f\u52a8\u8fd9\u9879\u529f\u80fd\uff0c\u9700\u8981\u6253\u5f00 Chaos Mesh \u7684 helm charts \uff0c\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.gcpSecurityMode")," \u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.gcpClientId")," \u9700\u8981\u8bbe\u7f6e\u4e3a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u83b7\u5f97\u7684 Client ID"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.gcpClientSecret")," \u9700\u8981\u8bbe\u7f6e\u4e3a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u83b7\u5f97\u7684 Client Secret"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dashboard.rootUrl")," \u9700\u8981\u8bbe\u7f6e\u4e3a Chaos Dashboard \u7684\u6839\u5730\u5740")),(0,o.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u5e76\u8fd0\u884c\u4e86 Chaos Mesh\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u547d\u4ee4\u6765\u66f4\u65b0\u914d\u7f6e\uff1b\u5982\u679c\u8fd8\u672a\u5b89\u88c5 Chaos Mesh\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," \u8fdb\u884c\u5b89\u88c5\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u6253\u5f00 Chaos Dashboard\uff0c\u70b9\u51fb\u9a8c\u8bc1\u7a97\u53e3\u4e0b\u65b9\u7684 Google Icon\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(46070).Z})),(0,o.kt)("p",null,"\u767b\u5165 Google \u8d26\u53f7\u5e76\u6388\u4e88 OAuth Client \u6743\u9650\u540e\uff0c\u9875\u9762\u4f1a\u81ea\u52a8\u8df3\u8f6c\u81f3 Chaos Dashboard\uff0c\u5e76\u63d0\u793a\u7528\u6237\u5df2\u767b\u5f55\u3002\u6b64\u65f6\uff0c\u7528\u6237\u7684\u6743\u9650\u4e0e\u8be5 Google \u8d26\u6237\u5728\u96c6\u7fa4\u4e2d\u7684\u6743\u9650\u4e00\u81f4\u3002\u5982\u9700\u8bbe\u7f6e\u989d\u5916\u7684\u7528\u6237\u6743\u9650\uff0c\u53ef\u4ee5\u4f7f\u7528 RBAC \u7684\u65b9\u5f0f\u6765\u8d4b\u4e88\u5176\u5bf9\u5e94\u6743\u9650\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: chaos-mesh-cluster-manager\nrules:\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-testing\nsubjects:\n  - kind: User\n    name: example@gmail.com\nroleRef:\n  kind: ClusterRole\n  name: chaos-mesh-cluster-manager\n  apiGroup: rbac.authorization.k8s.io\n")),(0,o.kt)("p",null,"\u8fd9\u4e00\u914d\u7f6e\u4e3a\u7528\u6237 ",(0,o.kt)("inlineCode",{parentName:"p"},"example@gmail.com")," \u8d4b\u4e88\u4e86\u6d4f\u89c8\u6216\u521b\u5efa\u6240\u6709\u7c7b\u578b\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6743\u9650\u3002"))}h.isMDXComponent=!0},46070:function(e,t,n){t.Z=n.p+"assets/images/google-auth-44ea9b662b5a11c6e148a1f5f6983c69.png"}}]);
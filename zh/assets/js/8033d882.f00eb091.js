"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9938,5148,1494],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:function(e,t,n){var a=n(67294),r=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,r.Z)()&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},56871:function(e,t,n){n.d(t,{p:function(){return c}});var a=n(91262),r=n(19055),i=n(67294),o=n(52263),s=n(28084),c=function(e,t){var n=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";var r=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||r};t.Z=function(e){var t=e.children,n=e.replaced,l=void 0===n?"latest":n,m=e.isArchive,u=void 0!==m&&m,p=e.className,d=void 0===p?"language-bash":p,h=(0,o.Z)().siteConfig,k=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions;return i.createElement(a.Z,null,(function(){var e=c(h,k),n=u?t.replace(l,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(l,"v"+e);return i.createElement(r.Z,{className:d},n)}))}},96618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c=void 0,l={unversionedId:"common/quick-run",id:"version-2.0.6/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/zh/docs/2.0.6/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/common/quick-run.md",tags:[],version:"2.0.6",frontMatter:{}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/2.0.6/run-a-chaos-experiment"},"\u8fd0\u884c\u8bd5\u9a8c"),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"))}p.isMDXComponent=!0},47185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c=void 0,l={unversionedId:"common/verify-installation",id:"version-2.0.6/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/zh/docs/2.0.6/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/common/verify-installation.md",tags:[],version:"2.0.6",frontMatter:{}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n chaos-testing\n")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"STATUS")," \u72b6\u6001\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}p.isMDXComponent=!0},61387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(56871),s=n(47185),c=n(96618),l=["components"],m={title:"\u5feb\u901f\u8bd5\u7528\uff08\u6d4b\u8bd5\u63a8\u8350\uff09"},u=void 0,p={unversionedId:"quick-start",id:"version-2.0.6/quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u8bd5\u7528\uff08\u6d4b\u8bd5\u63a8\u8350\uff09",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/2.0.6/quick-start",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.6/quick-start.md",tags:[],version:"2.0.6",frontMatter:{title:"\u5feb\u901f\u8bd5\u7528\uff08\u6d4b\u8bd5\u63a8\u8350\uff09"},sidebar:"version-2.0.6/docs",previous:{title:"\u57fa\u672c\u529f\u80fd",permalink:"/zh/docs/2.0.6/basic-features"},next:{title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09",permalink:"/zh/docs/2.0.6/production-installation-using-helm"}},d=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[],level:2},{value:"\u5feb\u901f\u5b89\u88c5",id:"\u5feb\u901f\u5b89\u88c5",children:[],level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",children:[],level:2},{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",children:[],level:2},{value:"\u5378\u8f7d Chaos Mesh",id:"\u5378\u8f7d-chaos-mesh",children:[],level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:[{value:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 <code>local</code> \u76ee\u5f55",id:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55",children:[],level:3}],level:2}],h={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u6863\u63d0\u4f9b\u7684 Chaos Mesh \u5b89\u88c5\u65b9\u5f0f\u4e3a\u811a\u672c\u5b89\u88c5\uff0c\u4ec5\u4f9b\u5feb\u901f\u8bd5\u7528\u3002")),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u6216\u8005\u662f\u5176\u4ed6\u4e25\u683c\u7684\u975e\u6d4b\u8bd5\u573a\u666f\u4e0b\u5b89\u88c5\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/2.0.6/production-installation-using-helm"},"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"),"\u3002"))),(0,i.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,i.kt)("p",null,"\u5728\u8bd5\u7528\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u5c1a\u672a\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u5b8c\u6210\u90e8\u7f72\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"))),(0,i.kt)("h2",{id:"\u5feb\u901f\u5b89\u88c5"},"\u5feb\u901f\u5b89\u88c5"),(0,i.kt)("p",null,"\u8981\u5728\u8bd5\u7528\u73af\u5883\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u811a\u672c\uff1a"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--local kind")," \u53c2\u6570\u3002"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,i.kt)("p",{parentName:"li"},"\u82e5\u9700\u8981\u6307\u5b9a kind \u7248\u672c\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--kind-version xxx")," \u53c2\u6570\uff0c\u5982\uff1a"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--k3s")," \u53c2\u6570\u3002"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://microk8s.io/"},"Microk8s"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--microk8s")," \u53c2\u6570\u3002"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5efa\u8bae")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e2d\u56fd\u5927\u9646\u5730\u533a\u7684\u7528\u6237\u53ef\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--docker-mirror")," \u53c2\u6570\u6765\u52a0\u5feb\u62c9\u53d6\u955c\u50cf\u7684\u901f\u5ea6\u3002\u6dfb\u52a0\u8be5\u53c2\u6570\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," \u5b89\u88c5\u811a\u672c\u5c06\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerhub.azk8s.cn")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"gcr.azk8s.cn")," \u62c9\u53d6\u955c\u50cf\u3002"))),(0,i.kt)("p",null,"\u8fd0\u884c\u6b64\u5b89\u88c5\u811a\u672c\u540e\uff0cChaos Mesh \u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5\u4e0e\u7248\u672c\u76f8\u7b26\u7684 CustomResourceDefinition (CRD)\u3001\u6240\u6709\u9700\u8981\u7684\u7ec4\u4ef6\u3001\u53ca\u76f8\u5173\u7684 Service Account \u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u5b89\u88c5\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"install.sh")," \u7684\u6e90\u4ee3\u7801"),"\u3002"),(0,i.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,i.kt)(s.default,{mdxType:"VerifyInstallation"}),(0,i.kt)("h2",{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c"},"\u8fd0\u884c Chaos \u5b9e\u9a8c"),(0,i.kt)(c.default,{mdxType:"QuickRun"}),(0,i.kt)("h2",{id:"\u5378\u8f7d-chaos-mesh"},"\u5378\u8f7d Chaos Mesh"),(0,i.kt)("p",null,"\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-testing")," \u547d\u540d\u7a7a\u95f4\u76f4\u63a5\u5378\u8f7d Chaos Mesh\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete ns chaos-testing\n")),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55"},"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 ",(0,i.kt)("inlineCode",{parentName:"h3"},"local")," \u76ee\u5f55"),(0,i.kt)("p",null,"\u5982\u679c\u5f53\u524d\u73af\u5883\u5e76\u6ca1\u6709\u5b89\u88c5 kind \u4f46\u4f60\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"--local kind")," \u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," \u5b89\u88c5\u811a\u672c\u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5 kind \u5230\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," \u76ee\u5f55\u4e2d\u3002"))}k.isMDXComponent=!0}}]);
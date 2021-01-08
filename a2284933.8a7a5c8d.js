(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),s=(n(0),n(225)),i=n(229),c={id:"get_started_on_kind",title:"Get started on kind"},o={unversionedId:"get_started/get_started_on_kind",id:"version-1.0.3/get_started/get_started_on_kind",isDocsHomePage:!1,title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/versioned_docs/version-1.0.3/get_started/get_started_on_kind.md",slug:"/get_started/get_started_on_kind",permalink:"/docs/1.0.3/get_started/get_started_on_kind",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/get_started/get_started_on_kind.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Blast Radius",permalink:"/docs/1.0.3/concepts/blast_radius"},next:{title:"Get started on Minikube",permalink:"/docs/1.0.3/get_started/get_started_on_minikube"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Run Chaos experiment",id:"run-chaos-experiment",children:[]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Clean kind cluster",id:"clean-kind-cluster",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"Before deployment, make sure ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker")," is installed and running on your local machine."),Object(s.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(s.b)(i.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl"),", ",Object(s.b)("inlineCode",{parentName:"p"},"helm"),", ",Object(s.b)("inlineCode",{parentName:"p"},"kind"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),Object(s.b)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),Object(s.b)("p",null,"You also can use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/"}),"helm")," to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0.3/user_guides/installation#install-by-helm"}),"install Chaos Mesh manually"),"."),Object(s.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(s.b)("p",null,"Verify if Chaos Mesh is running"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(s.b)("p",null,"Expected output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(s.b)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),Object(s.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0.3/user_guides/run_chaos_experiment"}),"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),Object(s.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(s.b)(i.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(s.b)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns chaos-testing\n")),Object(s.b)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},228:function(e,t,n){"use strict";var a=n(3),r=n(0),s=n.n(r),i=n(226),c=n(237),o=n(234),l=n.n(o),u=n(235),d=n.n(u),p=n(236),h=n(54),b=n.n(h),m=n(227),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},j=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,o=e.metastring,u=Object(m.useThemeConfig)().prism,h=Object(r.useState)(!1),y=h[0],O=h[1],v=Object(r.useState)(!1),k=v[0],_=v[1];Object(r.useEffect)((function(){_(!0)}),[]);var x=Object(r.useRef)(null),N=[],w="",C=Object(p.a)();if(Array.isArray(t)&&(t=t.join("")),o&&f.test(o)){var E=o.match(f)[1];N=d()(E).filter((function(e){return e>0}))}o&&j.test(o)&&(w=o.match(j)[1]);var T=n&&n.replace(/language-/,"");!T&&u.defaultLanguage&&(T=u.defaultLanguage);var P=t.replace(/\n$/,"");if(0===N.length&&void 0!==T){for(var M,S="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(T),D=t.replace(/\n$/,"").split("\n"),R=0;R<D.length;){var L=R+1,A=D[R].match(B);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=L+",";break;case"highlight-start":M=L;break;case"highlight-end":S+=M+"-"+(L-1)+","}D.splice(R,1)}else R+=1}N=d()(S),P=D.join("\n")}var I=function(){l()(P),O(!0),setTimeout((function(){return O(!1)}),2e3)};return s.a.createElement(c.a,Object(a.a)({},c.b,{key:String(k),theme:C,code:P,language:T}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,o=e.getLineProps,l=e.getTokenProps;return s.a.createElement(s.a.Fragment,null,w&&s.a.createElement("div",{style:r,className:b.a.codeBlockTitle},w),s.a.createElement("div",{className:b.a.codeBlockContent},s.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,b.a.codeBlock,"thin-scrollbar",(t={},t[b.a.codeBlockWithTitle]=w,t))},s.a.createElement("div",{className:b.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),s.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return s.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),s.a.createElement("button",{ref:x,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(b.a.copyButton),onClick:I},y?"Copied":"Copy")))}))}},229:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(8);var i=function(e){var t=e.children,n=e.fallback;return s.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):n||null},c=n(228),o=n(231);t.a=function(e){var t=e.children,n=e.className,a=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"1.25rem"}},r.a.createElement(c.a,{className:n},t))};return r.a.createElement(i,{fallback:r.a.createElement(a,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var n=Object(o.usePluginData)("docusaurus-plugin-content-docs").versions,a=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||a}(),n="latest"===e?t:t.replace("latest","v"+e);return r.a.createElement(a,null,n)}))}}}]);
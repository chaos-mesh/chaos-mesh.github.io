(window.webpackJsonp=window.webpackJsonp||[]).push([[42,10,72,93],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(184)),i=n(196),s={id:"get_started_on_minikube",title:"Get started on Minikube"},l={unversionedId:"installation/get_started_on_minikube",id:"version-0.9.1/installation/get_started_on_minikube",isDocsHomePage:!1,title:"Get started on Minikube",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.",source:"@site/versioned_docs/version-0.9.1/installation/get_started_on_minikube.md",slug:"/installation/get_started_on_minikube",permalink:"/docs/0.9.1/installation/get_started_on_minikube",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/get_started_on_minikube.md",version:"0.9.1",sidebar:"version-0.9.1/docs",previous:{title:"Get started on kind",permalink:"/docs/0.9.1/installation/get_started_on_kind"},next:{title:"Run Chaos Experiment",permalink:"/docs/0.9.1/user_guides/run_chaos_experiment"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Set up the Kubernetes environment",id:"step-1-set-up-the-kubernetes-environment",children:[]},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Limitations",id:"limitations",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before deployment, make sure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube")," is installed on your local machine."),Object(o.b)("h2",{id:"step-1-set-up-the-kubernetes-environment"},"Step 1: Set up the Kubernetes environment"),Object(o.b)("p",null,"Perform the following steps to set up the local Kubernetes environment:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start a Kubernetes cluster:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'minikube start --kubernetes-version v1.15.0 --cpus 4 --memory "8192mb"\n')),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"It is recommended to allocate enough RAM (more than 8192 MiB) to the Virtual Machine (VM) using the ",Object(o.b)("inlineCode",{parentName:"p"},"--cpus")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--memory")," flag."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install helm:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash\nhelm init\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check whether the helm tiller pod is running:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl -n kube-system get pods -l app=helm\n")))),Object(o.b)("h2",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),Object(o.b)(i.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),Object(o.b)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(o.b)("p",null,"You also can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://helm.sh/"}),"helm")," to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.9.1/installation/installation#install-by-helm"}),"install Chaos Mesh manually"),"."),Object(o.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(o.b)("p",null,"Verify if the chaos mesh is running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(o.b)("p",null,"Expected output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(o.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(o.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(o.b)(i.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"There are some known restrictions for Chaos Operator deployed in the Minikube cluster:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"netem chaos")," is only supported for Minikube clusters >= version 1.6.")),Object(o.b)("p",null,"In Minikube, the default virtual machine driver's image does not contain the ",Object(o.b)("inlineCode",{parentName:"p"},"sch_netem")," kernel module in earlier versions. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"none")," driver (if your host is Linux with the ",Object(o.b)("inlineCode",{parentName:"p"},"sch_netem")," kernel module loaded) to try these chaos actions using Minikube or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/contrib/building/iso/"}),"build an image with sch_netem by yourself"),"."))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";var r=n(0),a=n(21);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},186:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(185);function a(){return Object(r.a)().siteConfig.themeConfig}},188:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(186),s=n(192),l=n(189),c=n.n(l),u=n(190),p=n.n(u),b=n(185),m=n(191),d=n(48),h=n.n(d),f=/{([\d,-]+)}/,y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},g=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,u=Object(b.a)().siteConfig.themeConfig.prism,d=void 0===u?{}:u,v=Object(a.useState)(!1),j=v[0],O=v[1],k=Object(a.useState)(!1),N=k[0],w=k[1];Object(a.useEffect)((function(){w(!0)}),[]);var x=Object(a.useRef)(null),E=[],C="",T=Object(m.a)();if(l&&f.test(l)){var _=l.match(f)[1];E=p.a.parse(_).filter((function(e){return e>0}))}l&&g.test(l)&&(C=l.match(g)[0].split("title=")[1].replace(/"+/g,""));var P=n&&n.replace(/language-/,"");!P&&d.defaultLanguage&&(P=d.defaultLanguage);var S=t.replace(/\n$/,"");if(0===E.length&&void 0!==P){for(var D,M="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"]);case"jsx":case"tsx":return y(["js","jsBlock","jsx"]);case"html":return y(["js","jsBlock","html"]);case"python":case"py":return y(["python"]);default:return y()}}(P),A=t.replace(/\n$/,"").split("\n"),B=0;B<A.length;){var R=B+1,I=A[B].match(L);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=R+",";break;case"highlight-start":D=R;break;case"highlight-end":M+=D+"-"+(R-1)+","}A.splice(B,1)}else B+=1}E=p.a.parse(M),S=A.join("\n")}var q=function(){c()(S),O(!0),setTimeout((function(){return O(!1)}),2e3)};return o.a.createElement(s.a,Object(r.a)({},s.b,{key:String(N),theme:T,code:S,language:P}),(function(e){var t,n,a=e.className,s=e.style,l=e.tokens,c=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,C&&o.a.createElement("div",{style:s,className:h.a.codeBlockTitle},C),o.a.createElement("div",{className:h.a.codeBlockContent},o.a.createElement("button",{ref:x,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(h.a.copyButton,(t={},t[h.a.copyButtonWithTitle]=C,t)),onClick:q},j?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(i.a)(a,h.a.codeBlock,(n={},n[h.a.codeBlockWithTitle]=C,n))},o.a.createElement("div",{className:h.a.codeBlockLines,style:s},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return E.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))}},189:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(s){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),i};e.exports=r,e.exports.default=r},190:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var s=n;s!=a;s+=i)o.push(s);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},191:function(e,t,n){"use strict";var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},a=n(193),o=n(187);t.a=function(){var e=Object(o.a)().prism,t=Object(a.a)().isDarkTheme,n=e.theme||r,i=e.darkTheme||n;return t?i:n}},192:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(20),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),i={Prism:r.a,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var d=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?l({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,s=[],l=[s];i>-1;){for(;(o=r[i]++)<a[i];){var b=void 0,m=t[i],d=n[i][o];if("string"==typeof d?(m=i>0?m:["plain"],b=d):(m=p(m,d.type),d.alias&&(m=p(m,d.alias)),b=d.content),"string"==typeof b){var h=b.split(c),f=h.length;s.push({types:m,content:h[0]});for(var y=1;y<f;y++)u(s),l.push(s=[]),s.push({types:m,content:h[y]})}else i++,t.push(m),n.push(b),r.push(0),a.push(b.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return u(s),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=d},193:function(e,t,n){"use strict";var r=n(0),a=n(195);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},194:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(185);function a(){var e=Object(r.a)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},195:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(void 0);t.a=a},196:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(7);var i=function(e){var t=e.children,n=e.fallback;return o.a.canUseDOM&&null!=t?a.a.createElement(a.a.Fragment,null,t()):n||null},s=n(188),l=n(194);t.a=function(e){var t=e.children,n=e.className,r=function(e){var t=e.children;return a.a.createElement("div",{style:{marginBottom:"1.25rem"}},a.a.createElement(s.a,{className:n},t))};return a.a.createElement(i,{fallback:a.a.createElement(r,null,t)},(function(){var e,n,o,i,s=(e=window.location.href,n=Object(l.usePluginData)("docusaurus-plugin-content-docs").versions,o=n.filter((function(e){return e.isLast}))[0].name,i=n.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0],e.includes("/docs/next")&&(i="latest"),i||o),c="latest"===s?t:t.replace("latest","v"+s);return a.a.createElement(r,null,c)}))}}}]);
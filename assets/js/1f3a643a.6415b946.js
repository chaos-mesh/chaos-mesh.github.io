(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[533,5250,5469,5807,8012,3918,5359,6202,8324,4106,5433],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91262:function(e,t,n){"use strict";var r=n(67294),o=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,o.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},82924:function(e,t,n){"use strict";var r=n(67294).createContext(void 0);t.Z=r},83583:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},o=n(85350),a=n(941),s=function(){var e=(0,a.LU)().prism,t=(0,o.Z)().isDarkTheme,n=e.theme||r,s=e.darkTheme||n;return t?s:n}},85350:function(e,t,n){"use strict";var r=n(67294),o=n(82924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},56871:function(e,t,n){"use strict";var r=n(91262),o=n(73148),a=n(67294),s=n(52263),i=n(28084);t.Z=function(e){var t=e.children,n=e.className,l=function(e){var t=e.children;return a.createElement("div",{style:{marginBottom:"1.25rem"}},a.createElement(o.Z,{className:n},t))};return a.createElement(r.Z,{fallback:a.createElement(l,null,t)},(function(){var e=function(){var e=(0,s.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var r=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions,o=r.filter((function(e){return e.isLast}))[0].name;return r.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||o}(),n="latest"===e?t:t.replace("latest","v"+e);return a.createElement(l,null,n)}))}},73148:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(87462),o=n(67294),a=n(86010),s=n(24544),i=n(10195),l=n(87594),c=n.n(l),u=n(83583),p=n(24973),d="codeBlockContainer_2gih",m="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",y="codeBlock_6upA",f="codeBlockWithTitle_xy-i",g="copyButton_2e3i",k="codeBlockLines_xlV7",v=n(941),b=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function N(e){var t=e.children,n=e.className,l=e.metastring,N=e.title,x=(0,v.LU)().prism,C=(0,o.useState)(!1),j=C[0],w=C[1],O=(0,o.useState)(!1),E=O[0],T=O[1];(0,o.useEffect)((function(){T(!0)}),[]);var P=(0,v.bc)(l)||N,S=(0,o.useRef)(null),M=[],Z=(0,u.Z)(),L=Array.isArray(t)?t.join(""):t;if(l&&b.test(l)){var D=l.match(b)[1];M=c()(D).filter((function(e){return e>0}))}var B=n&&n.replace(/language-/,"");!B&&x.defaultLanguage&&(B=x.defaultLanguage);var R=L.replace(/\n$/,"");if(0===M.length&&void 0!==B){for(var A,I="",q=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(B),V=L.replace(/\n$/,"").split("\n"),z=0;z<V.length;){var F=z+1,G=V[z].match(q);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=F+",";break;case"highlight-start":A=F;break;case"highlight-end":I+=A+"-"+(F-1)+","}V.splice(z,1)}else z+=1}M=c()(I),R=V.join("\n")}var K=function(){(0,i.Z)(R),w(!0),setTimeout((function(){return w(!1)}),2e3)};return o.createElement(s.ZP,(0,r.Z)({},s.lG,{key:String(E),theme:Z,code:R,language:B}),(function(e){var t,n=e.className,s=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{className:d},P&&o.createElement("div",{style:s,className:h},P),o.createElement("div",{className:(0,a.Z)(m,B)},o.createElement("div",{tabIndex:0,className:(0,a.Z)(n,y,"thin-scrollbar",(t={},t[f]=P,t))},o.createElement("div",{className:k,style:s},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return M.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),o.createElement("button",{ref:S,type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(g),onClick:K},j?o.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},46752:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=n(56871),i=["components"],l={id:"get_started_on_minikube",title:"Get started on Minikube"},c=void 0,u={unversionedId:"get_started/get_started_on_minikube",id:"version-1.1.4/get_started/get_started_on_minikube",isDocsHomePage:!1,title:"Get started on Minikube",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.",source:"@site/versioned_docs/version-1.1.4/get_started/get_started_on_minikube.md",sourceDirName:"get_started",slug:"/get_started/get_started_on_minikube",permalink:"/docs/1.1.4/get_started/get_started_on_minikube",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/get_started/get_started_on_minikube.md",tags:[],version:"1.1.4",frontMatter:{id:"get_started_on_minikube",title:"Get started on Minikube"},sidebar:"version-1.1.4/docs",previous:{title:"Get started on kind",permalink:"/docs/1.1.4/get_started/get_started_on_kind"},next:{title:"Installation",permalink:"/docs/1.1.4/user_guides/installation"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Set up the Kubernetes environment",id:"step-1-set-up-the-kubernetes-environment",children:[]},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Run Chaos experiment",id:"run-chaos-experiment",children:[]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Limitations",id:"limitations",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before deployment, make sure ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube")," is installed on your local machine."),(0,a.kt)("h2",{id:"step-1-set-up-the-kubernetes-environment"},"Step 1: Set up the Kubernetes environment"),(0,a.kt)("p",null,"Perform the following steps to set up the local Kubernetes environment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a Kubernetes cluster:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --kubernetes-version v1.15.0 --cpus 4 --memory "8192mb"\n')),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"It is recommended to allocate enough RAM (more than 8192 MiB) to the Virtual Machine (VM) using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cpus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--memory")," flag."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install helm:"),(0,a.kt)("p",{parentName:"li"},"Following helm installation steps: ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install"},"https://helm.sh/docs/intro/install")))),(0,a.kt)("h2",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,a.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,a.kt)("p",null,"You also can use ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.4/user_guides/installation#install-by-helm"},"install Chaos Mesh manually"),"."),(0,a.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,a.kt)("p",null,"Verify if Chaos Mesh is running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,a.kt)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),(0,a.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.4/user_guides/run_chaos_experiment"},"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),(0,a.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,a.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"There are some known restrictions for Chaos Operator deployed in the Minikube cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"netem chaos")," is only supported for Minikube clusters >= version 1.6.")),(0,a.kt)("p",null,"In Minikube, the default virtual machine driver's image does not contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module in earlier versions. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," driver (if your host is Linux with the ",(0,a.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module loaded) to try these chaos actions using Minikube or ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/contrib/building/iso/"},"build an image with sch_netem by yourself"),"."))}m.isMDXComponent=!0},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return h},lG:function(){return s}});var r=n(87410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(67294),s={Prism:r.default,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=l({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=r[s]++)<o[s];){var d=void 0,m=t[s],h=n[s][a];if("string"==typeof h?(m=s>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(c),f=y.length;i.push({types:m,content:y[0]});for(var g=1;g<f;g++)u(i),l.push(i=[]),i.push({types:m,content:y[g]})}else s++,t.push(m),n.push(d),r.push(0),o.push(d.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return u(i),l}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},10195:function(e,t,n){"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var s=document.getSelection(),i=!1;s.rangeCount>0&&(i=s.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(c){}return o.remove(),i&&(s.removeAllRanges(),s.addRange(i)),a&&a.focus(),l}n.d(t,{Z:function(){return r}})}}]);
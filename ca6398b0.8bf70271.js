(window.webpackJsonp=window.webpackJsonp||[]).push([[109,12,88,111],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(206)),s=n(218),c={id:"run_chaos_experiment",title:"Run Chaos Experiment"},i={unversionedId:"get_started/run_chaos_experiment",id:"version-1.0.1/get_started/run_chaos_experiment",isDocsHomePage:!1,title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/versioned_docs/version-1.0.1/get_started/run_chaos_experiment.md",slug:"/get_started/run_chaos_experiment",permalink:"/docs/get_started/run_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.1/get_started/run_chaos_experiment.md",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"Get started on Minikube",permalink:"/docs/get_started/get_started_on_minikube"},next:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/user_guides/experiment_scope"}},l=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",children:[]},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),Object(o.b)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),Object(o.b)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/web-show"}),"web-show")," is used as an example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),Object(o.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | sh"),Object(o.b)("p",null,"After executing the above command, you can access ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need to use the host ip to access the application.")),Object(o.b)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),Object(o.b)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),Object(o.b)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),Object(o.b)("p",null,"Run the following commands to apply the experiment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),Object(o.b)("p",null,"Then you can access ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),Object(o.b)("p",null,Object(o.b)("img",{alt:"network-delay",src:n(224).default})),Object(o.b)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"}),"examples/web-show"),"."),Object(o.b)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),Object(o.b)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),Object(o.b)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),Object(o.b)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),Object(o.b)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),Object(o.b)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f network-delay.yaml\n")),Object(o.b)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/issues"}),"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),Object(o.b)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),Object(o.b)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",Object(o.b)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true"),".")),Object(o.b)("p",null,"A typical way to access it is to use ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),Object(o.b)("p",null,"Then you can access ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:2333"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),Object(o.b)("p",null,"To get a quick look of Chaos Dashboard workflow, check out the following articles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96"}),"Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1"))))}p.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},208:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(207);function r(){return Object(a.a)().siteConfig.themeConfig}},210:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),s=n(208),c=n(214),i=n(211),l=n.n(i),u=n(212),p=n.n(u),h=n(207),d=n(213),m=n(48),b=n.n(m),f=/{([\d,-]+)}/,y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},g=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,u=Object(h.a)().siteConfig.themeConfig.prism,m=void 0===u?{}:u,v=Object(r.useState)(!1),j=v[0],O=v[1],w=Object(r.useState)(!1),x=w[0],k=w[1];Object(r.useEffect)((function(){k(!0)}),[]);var N=Object(r.useRef)(null),C=[],E="",D=Object(d.a)();if(i&&f.test(i)){var T=i.match(f)[1];C=p.a.parse(T).filter((function(e){return e>0}))}i&&g.test(i)&&(E=i.match(g)[0].split("title=")[1].replace(/"+/g,""));var P=n&&n.replace(/language-/,"");!P&&m.defaultLanguage&&(P=m.defaultLanguage);var _=t.replace(/\n$/,"");if(0===C.length&&void 0!==P){for(var S,A="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"]);case"jsx":case"tsx":return y(["js","jsBlock","jsx"]);case"html":return y(["js","jsBlock","html"]);case"python":case"py":return y(["python"]);default:return y()}}(P),L=t.replace(/\n$/,"").split("\n"),M=0;M<L.length;){var B=M+1,R=L[M].match(I);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=B+",";break;case"highlight-start":S=B;break;case"highlight-end":A+=S+"-"+(B-1)+","}L.splice(M,1)}else M+=1}C=p.a.parse(A),_=L.join("\n")}var F=function(){l()(_),O(!0),setTimeout((function(){return O(!1)}),2e3)};return o.a.createElement(c.a,Object(a.a)({},c.b,{key:String(x),theme:D,code:_,language:P}),(function(e){var t,n,r=e.className,c=e.style,i=e.tokens,l=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,E&&o.a.createElement("div",{style:c,className:b.a.codeBlockTitle},E),o.a.createElement("div",{className:b.a.codeBlockContent},o.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(b.a.copyButton,(t={},t[b.a.copyButtonWithTitle]=E,t)),onClick:F},j?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(s.a)(r,b.a.codeBlock,(n={},n[b.a.codeBlockWithTitle]=E,n))},o.a.createElement("div",{className:b.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return C.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}},211:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),s};e.exports=a,e.exports.default=a},212:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],s=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=s);for(var c=n;c!=r;c+=s)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},213:function(e,t,n){"use strict";var a={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(215),o=n(209);t.a=function(){var e=Object(o.a)().prism,t=Object(r.a)().isDarkTheme,n=e.theme||a,s=e.darkTheme||n;return t?s:n}},214:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(20),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,c=[],i=[c];s>-1;){for(;(o=a[s]++)<r[s];){var h=void 0,d=t[s],m=n[s][o];if("string"==typeof m?(d=s>0?d:["plain"],h=m):(d=p(d,m.type),m.alias&&(d=p(d,m.alias)),h=m.content),"string"==typeof h){var b=h.split(l),f=b.length;c.push({types:d,content:b[0]});for(var y=1;y<f;y++)u(c),i.push(c=[]),c.push({types:d,content:b[y]})}else s++,t.push(d),n.push(h),a.push(0),r.push(h.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(c),i}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},215:function(e,t,n){"use strict";var a=n(0),r=n(217);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},216:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return s}));var a=n(207);function r(){var e=Object(a.a)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function s(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},217:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},218:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7);var s=function(e){var t=e.children,n=e.fallback;return o.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):n||null},c=n(210),i=n(216);t.a=function(e){var t=e.children,n=e.className,a=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"1.25rem"}},r.a.createElement(c.a,{className:n},t))};return r.a.createElement(s,{fallback:r.a.createElement(a,null,t)},(function(){var e,n,o,s,c=(e=window.location.href,n=Object(i.usePluginData)("docusaurus-plugin-content-docs").versions,o=n.filter((function(e){return e.isLast}))[0].name,s=n.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0],e.includes("/docs/next")&&(s="latest"),s||o),l="latest"===c?t:t.replace("latest","v"+c);return r.a.createElement(a,null,l)}))}},224:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"}}]);
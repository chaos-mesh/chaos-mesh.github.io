(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9087,4936,6926,6817,5134,7384,6721,5201,4188,7690,7341],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,s(s({ref:t},u),{},{components:n})):o.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91262:function(e,t,n){"use strict";var o=n(67294),r=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,r.Z)()&&null!=t?o.createElement(o.Fragment,null,t()):n||null}},82924:function(e,t,n){"use strict";var o=n(67294).createContext(void 0);t.Z=o},83583:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(85350),a=n(41773),s=function(){var e=(0,a.LU)().prism,t=(0,r.Z)().isDarkTheme,n=e.theme||o,s=e.darkTheme||n;return t?s:n}},85350:function(e,t,n){"use strict";var o=n(67294),r=n(82924);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},97985:function(e,t,n){"use strict";function o(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var s=document.getSelection(),i=!1;s.rangeCount>0&&(i=s.getRangeAt(0)),o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}return r.remove(),i&&(s.removeAllRanges(),s.addRange(i)),a&&a.focus(),c}n.d(t,{Z:function(){return o}})},56871:function(e,t,n){"use strict";var o=n(91262),r=n(73148),a=n(67294),s=n(52263),i=n(28084);t.Z=function(e){var t=e.children,n=e.className,c=function(e){var t=e.children;return a.createElement("div",{style:{marginBottom:"1.25rem"}},a.createElement(r.Z,{className:n},t))};return a.createElement(o.Z,{fallback:a.createElement(c,null,t)},(function(){var e=function(){var e=(0,s.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var o=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions,r=o.filter((function(e){return e.isLast}))[0].name;return o.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||r}(),n="latest"===e?t:t.replace("latest","v"+e);return a.createElement(c,null,n)}))}},73148:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(22122),r=n(67294),a=n(86010),s=n(24544),i=n(97985),c=n(87594),l=n.n(c),u=n(83583),p=n(24973),h="codeBlockContainer_2gih",m="codeBlockContent_3z4W",d="codeBlockTitle_1Kb7",y="codeBlock_6upA",f="codeBlockWithTitle_xy-i",g="copyButton_2e3i",k="codeBlockLines_xlV7",b=n(41773),v=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function w(e){var t=e.children,n=e.className,c=e.metastring,w=e.title,N=(0,b.LU)().prism,j=(0,r.useState)(!1),C=j[0],_=j[1],E=(0,r.useState)(!1),O=E[0],T=E[1];(0,r.useEffect)((function(){T(!0)}),[]);var P=(0,b.bc)(c)||w,D=(0,r.useRef)(null),Z=[],S=(0,u.Z)(),I=Array.isArray(t)?t.join(""):t;if(c&&v.test(c)){var L=c.match(v)[1];Z=l()(L).filter((function(e){return e>0}))}var B=n&&n.replace(/language-/,"");!B&&N.defaultLanguage&&(B=N.defaultLanguage);var A=I.replace(/\n$/,"");if(0===Z.length&&void 0!==B){for(var R,M="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(B),F=I.replace(/\n$/,"").split("\n"),q=0;q<F.length;){var U=q+1,W=F[q].match(z);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=U+",";break;case"highlight-start":R=U;break;case"highlight-end":M+=R+"-"+(U-1)+","}F.splice(q,1)}else q+=1}Z=l()(M),A=F.join("\n")}var $=function(){(0,i.Z)(A),_(!0),setTimeout((function(){return _(!1)}),2e3)};return r.createElement(s.ZP,(0,o.Z)({},s.lG,{key:String(O),theme:S,code:A,language:B}),(function(e){var t,n=e.className,s=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.createElement("div",{className:h},P&&r.createElement("div",{style:s,className:d},P),r.createElement("div",{className:(0,a.Z)(m,B)},r.createElement("div",{tabIndex:0,className:(0,a.Z)(n,y,"thin-scrollbar",(t={},t[f]=P,t))},r.createElement("div",{className:k,style:s},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return Z.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,o.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))})))})))),r.createElement("button",{ref:D,type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(g),onClick:$},C?r.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},67670:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),s=n(56871),i={id:"run_chaos_experiment",title:"Run Chaos Experiment"},c=void 0,l={unversionedId:"user_guides/run_chaos_experiment",id:"version-1.2.3/user_guides/run_chaos_experiment",isDocsHomePage:!1,title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/versioned_docs/version-1.2.3/user_guides/run_chaos_experiment.md",sourceDirName:"user_guides",slug:"/user_guides/run_chaos_experiment",permalink:"/docs/1.2.3/user_guides/run_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/user_guides/run_chaos_experiment.md",tags:[],version:"1.2.3",frontMatter:{id:"run_chaos_experiment",title:"Run Chaos Experiment"},sidebar:"version-1.2.3/docs",previous:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/1.2.3/user_guides/experiment_scope"},next:{title:"Chaos Dashboard",permalink:"/docs/1.2.3/user_guides/dashboard"}},u=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",children:[]},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],p={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),(0,a.kt)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),(0,a.kt)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/web-show"},"web-show")," is used as an example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | bash"),(0,a.kt)("p",null,"After executing the above command, you can access ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need to use the host IP to access the application.")),(0,a.kt)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),(0,a.kt)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),(0,a.kt)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),(0,a.kt)("p",null,"Run the following commands to apply the experiment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),(0,a.kt)("p",null,"Then you can access ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"network-delay",src:n(29247).Z})),(0,a.kt)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"},"examples/web-show"),"."),(0,a.kt)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),(0,a.kt)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),(0,a.kt)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),(0,a.kt)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),(0,a.kt)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),(0,a.kt)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f network-delay.yaml\n")),(0,a.kt)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,a.kt)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),(0,a.kt)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true"),".")),(0,a.kt)("p",null,"A typical way to access it is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,a.kt)("p",null,"Then you can access ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),(0,a.kt)("p",null,"To get a quick look of Chaos Dashboard workflow, check out the following articles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96"},"Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1"))))}h.isMDXComponent=!0},87594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d},lG:function(){return s}});var o=n(87410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(67294),s={Prism:o.Z,theme:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var d=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=c({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?c({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=c({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?c({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,i=[],c=[i];s>-1;){for(;(a=o[s]++)<r[s];){var h=void 0,m=t[s],d=n[s][a];if("string"==typeof d?(m=s>0?m:["plain"],h=d):(m=p(m,d.type),d.alias&&(m=p(m,d.alias)),h=d.content),"string"==typeof h){var y=h.split(l),f=y.length;i.push({types:m,content:y[0]});for(var g=1;g<f;g++)u(i),c.push(i=[]),i.push({types:m,content:y[g]})}else s++,t.push(m),n.push(h),o.push(0),r.push(h.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return u(i),c}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},29247:function(e,t,n){"use strict";t.Z=n.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"}}]);
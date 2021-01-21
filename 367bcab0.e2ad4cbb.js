(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{229:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(s,".").concat(b)]||p[b]||h[b]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},232:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r),s=a(230),c=a(241),i=a(238),l=a.n(i),u=a(239),p=a.n(u),h=a(240),b=a(54),m=a.n(b),d=a(231),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},j=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,i=e.metastring,u=Object(d.useThemeConfig)().prism,b=Object(r.useState)(!1),y=b[0],O=b[1],w=Object(r.useState)(!1),x=w[0],v=w[1];Object(r.useEffect)((function(){v(!0)}),[]);var k=Object(r.useRef)(null),N=[],C="",E=Object(h.a)();if(Array.isArray(t)&&(t=t.join("")),i&&f.test(i)){var _=i.match(f)[1];N=p()(_).filter((function(e){return e>0}))}i&&j.test(i)&&(C=i.match(j)[1]);var D=a&&a.replace(/language-/,"");!D&&u.defaultLanguage&&(D=u.defaultLanguage);var T=t.replace(/\n$/,"");if(0===N.length&&void 0!==D){for(var P,S="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(D),I=t.replace(/\n$/,"").split("\n"),B=0;B<I.length;){var R=B+1,A=I[B].match(M);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=R+",";break;case"highlight-start":P=R;break;case"highlight-end":S+=P+"-"+(R-1)+","}I.splice(B,1)}else B+=1}N=p()(S),T=I.join("\n")}var L=function(){l()(T),O(!0),setTimeout((function(){return O(!1)}),2e3)};return o.a.createElement(c.a,Object(n.a)({},c.b,{key:String(x),theme:E,code:T,language:D}),(function(e){var t,a=e.className,r=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,C&&o.a.createElement("div",{style:r,className:m.a.codeBlockTitle},C),o.a.createElement("div",{className:m.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(a,m.a.codeBlock,"thin-scrollbar",(t={},t[m.a.codeBlockWithTitle]=C,t))},o.a.createElement("div",{className:m.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return N.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:k,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(m.a.copyButton),onClick:L},y?"Copied":"Copy")))}))}},233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(8);var s=function(e){var t=e.children,a=e.fallback;return o.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):a||null},c=a(232),i=a(235);t.a=function(e){var t=e.children,a=e.className,n=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"1.25rem"}},r.a.createElement(c.a,{className:a},t))};return r.a.createElement(s,{fallback:r.a.createElement(n,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var a=Object(i.usePluginData)("docusaurus-plugin-content-docs").versions,n=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||n}(),a="latest"===e?t:t.replace("latest","v"+e);return r.a.createElement(n,null,a)}))}},255:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(229)),s=a(233),c={id:"run_chaos_experiment",title:"Run Chaos Experiment"},i={unversionedId:"user_guides/run_chaos_experiment",id:"version-1.1.1/user_guides/run_chaos_experiment",isDocsHomePage:!1,title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/versioned_docs/version-1.1.1/user_guides/run_chaos_experiment.md",slug:"/user_guides/run_chaos_experiment",permalink:"/docs/user_guides/run_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.1/user_guides/run_chaos_experiment.md",version:"1.1.1",sidebar:"version-1.1.1/docs",previous:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/user_guides/experiment_scope"},next:{title:"Chaos Dashboard",permalink:"/docs/user_guides/dashboard"}},l=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",children:[]},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),Object(o.b)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),Object(o.b)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/web-show"}),"web-show")," is used as an example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),Object(o.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | sh"),Object(o.b)("p",null,"After executing the above command, you can access ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need to use the host ip to access the application.")),Object(o.b)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),Object(o.b)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),Object(o.b)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),Object(o.b)("p",null,"Run the following commands to apply the experiment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),Object(o.b)("p",null,"Then you can access ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),Object(o.b)("p",null,Object(o.b)("img",{alt:"network-delay",src:a(255).default})),Object(o.b)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"}),"examples/web-show"),"."),Object(o.b)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),Object(o.b)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),Object(o.b)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),Object(o.b)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),Object(o.b)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),Object(o.b)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f network-delay.yaml\n")),Object(o.b)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/issues"}),"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),Object(o.b)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),Object(o.b)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",Object(o.b)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true"),".")),Object(o.b)("p",null,"A typical way to access it is to use ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),Object(o.b)("p",null,"Then you can access ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:2333"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),Object(o.b)("p",null,"To get a quick look of Chaos Dashboard workflow, check out the following articles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96"}),"Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1"))))}p.isMDXComponent=!0}}]);
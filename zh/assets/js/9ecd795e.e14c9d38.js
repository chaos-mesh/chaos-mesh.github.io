"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2314],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91262:function(e,t,n){var a=n(67294),o=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,o.Z)()&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},56871:function(e,t,n){n.d(t,{p:function(){return c}});var a=n(91262),o=n(16213),r=n(67294),s=n(52263),i=n(28084),c=function(e,t){var n=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";var o=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||o};t.Z=function(e){var t=e.children,n=e.replaced,l=void 0===n?"latest":n,p=e.isArchive,h=void 0!==p&&p,u=e.className,m=void 0===u?"language-bash":u,d=(0,s.Z)().siteConfig,f=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(a.Z,null,(function(){var e=c(d,f),n=h?t.replace(l,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(l,"v"+e);return r.createElement(o.Z,{className:m},n)}))}},70560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=n(56871),i=["components"],c={title:"Run Chaos Experiment"},l=void 0,p={unversionedId:"user_guides/run_chaos_experiment",id:"version-0.9.1/user_guides/run_chaos_experiment",isDocsHomePage:!1,title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/run_chaos_experiment.md",sourceDirName:"user_guides",slug:"/user_guides/run_chaos_experiment",permalink:"/zh/docs/0.9.1/user_guides/run_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/run_chaos_experiment.md",tags:[],version:"0.9.1",frontMatter:{title:"Run Chaos Experiment"},sidebar:"version-0.9.1/docs",previous:{title:"Get started on Minikube",permalink:"/zh/docs/0.9.1/installation/get_started_on_minikube"},next:{title:"PodChaos Experiment",permalink:"/zh/docs/0.9.1/user_guides/podchaos"}},h=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",children:[]},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],u={toc:h};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),(0,r.kt)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),(0,r.kt)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/web-show"},"web-show")," is used as an example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | sh"),(0,r.kt)("p",null,"After executing the above command, you can access ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need to use the host ip to access the application.")),(0,r.kt)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),(0,r.kt)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),(0,r.kt)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),(0,r.kt)("p",null,"Run the following commands to apply the experiment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),(0,r.kt)("p",null,"Then you can access ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"network-delay",src:n(29247).Z})),(0,r.kt)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"},"examples/web-show"),"."),(0,r.kt)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),(0,r.kt)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),(0,r.kt)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),(0,r.kt)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),(0,r.kt)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),(0,r.kt)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f network-delay.yaml\n")),(0,r.kt)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,r.kt)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),(0,r.kt)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version v0.2.1 --set dashboard.create=true"),".")),(0,r.kt)("p",null,"A typical way to access it is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,r.kt)("p",null,"Then you can access ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),(0,r.kt)("p",null,"To get a quick look of Chaos Dashboard workflow, check out the following articles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96"},"Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1"))))}m.isMDXComponent=!0},29247:function(e,t,n){t.Z=n.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"}}]);
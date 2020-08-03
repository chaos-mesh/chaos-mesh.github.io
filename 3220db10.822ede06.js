(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},h=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(a),b=n,m=h["".concat(s,".").concat(b)]||h[b]||u[b]||r;return a?o.a.createElement(m,c(c({ref:t},p),{},{components:a})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<r;p++)s[p]=a[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(110)),s={id:"run_chaos_experiment",title:"Run Chaos Experiment",sidebar_label:"Run Chaos Experiment"},c={unversionedId:"user_guides/run_chaos_experiment",id:"user_guides/run_chaos_experiment",isDocsHomePage:!1,title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/docs/user_guides/run_chaos_experiment.md",permalink:"/docs/user_guides/run_chaos_experiment",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/user_guides/run_chaos_experiment.md",sidebar_label:"Run Chaos Experiment",sidebar:"docs",previous:{title:"Get started on Minikube",permalink:"/docs/installation/get_started_on_minikube"},next:{title:"PodChaos Experiment",permalink:"/docs/user_guides/podchaos_experiment"}},i=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",children:[]},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],p={rightToc:i};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),Object(r.b)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),Object(r.b)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/web-show"}),"web-show")," is used as a example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSl https://raw.githubusercontent.com/pingcap/chaos-mesh/master/examples/web-show/deploy.sh | sh\n")),Object(r.b)("p",null,"After executing the above command, you can access ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(r.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need use the host ip to access the application.")),Object(r.b)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),Object(r.b)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),Object(r.b)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),Object(r.b)("p",null,"Run the following commands to apply the experiment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),Object(r.b)("p",null,"Then you can access ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8081"}),Object(r.b)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/using-chaos-mesh-to-insert-delays-in-web-show.png",alt:"network-delay"}))),Object(r.b)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"}),"examples/web-show"),"."),Object(r.b)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),Object(r.b)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),Object(r.b)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),Object(r.b)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),Object(r.b)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),Object(r.b)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f network-delay.yaml\n")),Object(r.b)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/issues"}),"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),Object(r.b)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),Object(r.b)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",Object(r.b)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set dashboard.create=true"),".")),Object(r.b)("p",null,"A typical way to access it is to use ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),Object(r.b)("p",null,"Then you can access ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:2333"}),Object(r.b)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/chaos-dashboard.gif",alt:"Chaos Dashboard"}))))}l.isMDXComponent=!0}}]);
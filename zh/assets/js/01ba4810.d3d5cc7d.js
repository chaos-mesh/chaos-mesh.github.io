"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?o.createElement(d,s(s({ref:t},p),{},{components:a})):o.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91262:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294),n=a(72389);function r(e){let{children:t,fallback:a}=e;return(0,n.Z)()?o.createElement(o.Fragment,null,null==t?void 0:t()):a??null}},56871:(e,t,a)=>{a.d(t,{Z:()=>c,p:()=>l});var o=a(91262),n=a(52263),r=a(28084),s=a(90814),i=a(67294);const l=(e,t)=>{const a=window.location.pathname;let o=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&o)return"current"===o?"latest":o;if(a.includes("/docs/next"))return"latest";const n=t.filter((e=>e.isLast))[0].name;return t.filter((e=>a.includes(e.name))).map((e=>e.name))[0]||n};const c=e=>{let{children:t,replaced:a="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:h}=(0,n.Z)(),{versions:u}=(0,r.eZ)("docusaurus-plugin-content-docs");return i.createElement(o.Z,null,(()=>{const e=l(h,u),o=c?t.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(a,"v"+e);return i.createElement(s.Z,{className:p},o)}))}},4829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905)),r=a(56871);const s={title:"Run Chaos Experiment"},i=void 0,l={unversionedId:"user_guides/run_chaos_experiment",id:"version-1.0.3/user_guides/run_chaos_experiment",title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/versioned_docs/version-1.0.3/user_guides/run_chaos_experiment.md",sourceDirName:"user_guides",slug:"/user_guides/run_chaos_experiment",permalink:"/zh/docs/1.0.3/user_guides/run_chaos_experiment",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/user_guides/run_chaos_experiment.md",tags:[],version:"1.0.3",frontMatter:{title:"Run Chaos Experiment"},sidebar:"version-1.0.3/docs",previous:{title:"Define the Scope of Chaos Experiment",permalink:"/zh/docs/1.0.3/user_guides/experiment_scope"},next:{title:"PodChaos Experiment",permalink:"/zh/docs/1.0.3/chaos_experiments/podchaos"}},c={},p=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",level:2},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",level:2},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",level:2},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",level:2},{value:"Update a chaos experiment",id:"update-a-chaos-experiment",level:3},{value:"Pause a chaos experiment",id:"pause-a-chaos-experiment",level:3},{value:"Resume a chaos experiment",id:"resume-a-chaos-experiment",level:3},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",level:3},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",level:3}],h={toc:p};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),(0,n.kt)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),(0,n.kt)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/web-show"},"web-show")," is used as an example cluster because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),(0,n.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | sh"),(0,n.kt)("p",null,"After executing the above command, you can access ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,n.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the web-show application."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"If the web-show is deployed on the server, you need to use the host ip to access the application.")),(0,n.kt)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),(0,n.kt)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: web-show-network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"  # the label of the pod for chaos injection\n  delay:\n    latency: "10ms"\n  duration: "30s" # duration for the injected chaos experiment\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 60s"\n')),(0,n.kt)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),(0,n.kt)("p",null,"Run the following commands to apply the experiment:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n")),(0,n.kt)("p",null,"Then you can access ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8081"},(0,n.kt)("inlineCode",{parentName:"a"},"http://localhost:8081"))," in the browser to check the result of the chaos experiment."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"network-delay",src:a(98404).Z,width:"1600",height:"780"})),(0,n.kt)("p",null,"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show"},"examples/web-show"),"."),(0,n.kt)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),(0,n.kt)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),(0,n.kt)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),(0,n.kt)("h3",{id:"pause-a-chaos-experiment"},"Pause a chaos experiment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true\n")),(0,n.kt)("h3",{id:"resume-a-chaos-experiment"},"Resume a chaos experiment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause-\n")),(0,n.kt)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f network-delay.yaml\n")),(0,n.kt)("p",null,"If you encounter a situation that the delete action is blocked, it means that there are some target pods fail to recover. You can check the log of Chaos Mesh or just feel free to file an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue"),". In addition, you also can force delete the chaos experiment by the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,n.kt)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),(0,n.kt)("p",null,"Chaos Dashboard is a Web UI for managing, designing, monitoring Chaos Experiments. Stay tuned for more supports or join us in making it happen."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version v0.3.3 --set dashboard.create=true"),".")),(0,n.kt)("p",null,"A typical way to access it is to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n")),(0,n.kt)("p",null,"Then you can access ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:2333"},(0,n.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," in the browser."),(0,n.kt)("p",null,"To get a quick look of Chaos Dashboard workflow, check out the following articles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96"},"Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1"))))}u.isMDXComponent=!0},98404:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"}}]);
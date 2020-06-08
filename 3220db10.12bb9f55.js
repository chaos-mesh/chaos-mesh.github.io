(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(150)),i={id:"run_chaos_experiment",title:"Run Chaos Experiment",sidebar_label:"Run Chaos Experiment"},c={id:"user_guides/run_chaos_experiment",title:"Run Chaos Experiment",description:"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.",source:"@site/docs/user_guides/run_chaos_experiment.md",permalink:"/docs/user_guides/run_chaos_experiment",editUrl:"https://github.com/pingcap/chaos-mesh/edit/master/website/docs/user_guides/run_chaos_experiment.md",sidebar_label:"Run Chaos Experiment",sidebar:"docs",previous:{title:"Get Started on Minikube",permalink:"/docs/installation/get_started_on_minikube"},next:{title:"Pause Chaos Experiment",permalink:"/docs/user_guides/pause_experiment"}},s=[{value:"Step 1: Deploy the target cluster",id:"step-1-deploy-the-target-cluster",children:[]},{value:"Step 2: Define the experiment configuration file",id:"step-2-define-the-experiment-configuration-file",children:[]},{value:"Step 3: Apply a chaos experiment",id:"step-3-apply-a-chaos-experiment",children:[]},{value:"Regular operations on chaos experiments",id:"regular-operations-on-chaos-experiments",children:[{value:"Update a chaos experiment",id:"update-a-chaos-experiment",children:[]},{value:"Delete a chaos experiment",id:"delete-a-chaos-experiment",children:[]},{value:"Watch your chaos experiments in Chaos Dashboard",id:"watch-your-chaos-experiments-in-chaos-dashboard",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments."),Object(o.b)("h2",{id:"step-1-deploy-the-target-cluster"},"Step 1: Deploy the target cluster"),Object(o.b)("p",null,"The first step is always to deploy a testing cluster. For illustration purposes, TiDB is used as a sample cluster."),Object(o.b)("p",null,"You can follow the instructions in the following two documents to deploy a TiDB cluster:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pingcap.com/docs/tidb-in-kubernetes/stable/deploy-tidb-from-kubernetes-kind/"}),"Deploy using kind")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pingcap.com/docs/tidb-in-kubernetes/stable/deploy-tidb-from-kubernetes-minikube/"}),"Deploy using Minikube"))),Object(o.b)("h2",{id:"step-2-define-the-experiment-configuration-file"},"Step 2: Define the experiment configuration file"),Object(o.b)("p",null,"The chaos experiment configuration is defined in a YAML file. You need to create your own experiment configuration file based on the available fields in the sample below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: pingcap.com/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-testing\nspec:\n  action: pod-failure # the specific chaos action to inject; supported actions: pod-kill/pod-failure\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  duration: "60s" # duration for the injected chaos experiment\n  selector: # pods where to inject chaos actions\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv" # the label of the pod for chaos injection\n  scheduler: # scheduler rules for the running time of the chaos experiments about pods.\n    cron: "@every 5m"\n')),Object(o.b)("h2",{id:"step-3-apply-a-chaos-experiment"},"Step 3: Apply a chaos experiment"),Object(o.b)("p",null,"Run the following commands to apply the experiment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f pod-failure-example.yaml\nkubectl get podchaos --namespace=chaos-testing\n")),Object(o.b)("p",null,"By ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pingcap.com/docs/stable/benchmark/how-to-run-sysbench/"}),"running a benchmark against the cluster"),", you can check the QPS performance affected by the chaos experiment:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../static/img/tikv-pod-failure.png",alt:"tikv-pod-failure"}))),Object(o.b)("h2",{id:"regular-operations-on-chaos-experiments"},"Regular operations on chaos experiments"),Object(o.b)("p",null,"In this section, you will learn some follow-up operations when the chaos experiment is running."),Object(o.b)("h3",{id:"update-a-chaos-experiment"},"Update a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vim pod-failure-example.yaml # modify pod-failure-example.yaml to what you want\nkubectl apply -f pod-failure-example.yaml\n")),Object(o.b)("h3",{id:"delete-a-chaos-experiment"},"Delete a chaos experiment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f pod-failure-example.yaml\n")),Object(o.b)("h3",{id:"watch-your-chaos-experiments-in-chaos-dashboard"},"Watch your chaos experiments in Chaos Dashboard"),Object(o.b)("p",null,"Chaos Dashboard is currently only available for TiDB clusters. Stay tuned for more supports or join us in making it happen."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If Chaos Dashboard was not installed, upgrade Chaos Mesh by executing ",Object(o.b)("inlineCode",{parentName:"p"},"helm upgrade chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set dashboard.create=true"),".")),Object(o.b)("p",null,"A typical way to access it is to use ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward -n chaos-testing svc/chaos-dashboard 8080:80\n")),Object(o.b)("p",null,"Then you can access ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:8080"))," in the browser."))}l.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
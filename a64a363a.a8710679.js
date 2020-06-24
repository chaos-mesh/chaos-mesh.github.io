(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(2),o=t(9),s=(t(0),t(185)),r={id:"pause_experiment",title:"Pause Chaos Experiment",sidebar_label:"Pause Chaos Experiment"},c={id:"user_guides/pause_experiment",title:"Pause Chaos Experiment",description:"This document describes how to pause a running chaos experiment in Chaos Mesh.",source:"@site/docs/user_guides/pause.md",permalink:"/docs/user_guides/pause_experiment",editUrl:"https://github.com/pingcap/chaos-mesh/edit/master/website/docs/user_guides/pause.md",sidebar_label:"Pause Chaos Experiment",sidebar:"docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/user_guides/run_chaos_experiment"},next:{title:"PodChaos Experiment",permalink:"/docs/user_guides/podchaos_experiment"}},p=[{value:"Usage",id:"usage",children:[]}],i={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes how to pause a running chaos experiment in Chaos Mesh."),Object(s.b)("p",null,"Pause is a state suggests that a running chaos experiment has been temporarily hung up but not deleted."),Object(s.b)("p",null,"Resume a paused experiment means running the chaos experiment again with the same parameters."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"Below is a sample configuration file of PodChaos:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: pingcap.com/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "chaos-daemon"\n  duration: "10s"\n  scheduler:\n    cron: "@every 15s"\n')),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"When the chaos is running, run the following command to get its status:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ kubectl get podchaos pod-kill-example --namespace chaos-testing --output yaml \\\n&& kubectl get pods --namespace chaos-testing\n")),Object(s.b)("p",{parentName:"li"},"The output is like this:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'...\nspec:\n  action: pod-kill\n  containerName: ""\n  duration: 10s\n  mode: one\n  nextRecover: "2020-04-15T03:18:14Z"\n  nextStart: "2020-04-15T03:18:19Z"\n  paused: false\n  scheduler:\n    cron: \'@every 15s\'\n  selector:\n    labelSelectors:\n      app.kubernetes.io/component: chaos-daemon\n    namespaces:\n    - chaos-testing\n  value: ""\nstatus:\n  experiment:\n    endTime: "2020-04-15T03:17:59Z"\n    phase: Running\n    podChaos:\n      - action: pod-kill\n      hostIP: 172.17.0.5\n      message: delete pod\n      name: chaos-daemon-mdwqr\n      namespace: chaos-testing\n      podIP: 10.244.2.3\n    startTime: "2020-04-15T03:18:04Z"\n  phase: ""\nNAME                                        READY   STATUS              RESTARTS   AGE\nchaos-controller-manager-7f67fbcfdc-ljlkn   1/1     Running             0          39s\nchaos-daemon-8cdv2                          1/1     Running             0          15s\nchaos-daemon-k7smn                          0/1     ContainerCreating   0          1s\nchaos-daemon-p9wxd                          1/1     Running             0          39s\n'))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Pause the running chaos:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$  kubectl annotate podchaos pod-kill-example --namespace chaos-testing experiment.pingcap.com/pause=true\npodchaos.pingcap.com/pod-kill-example annotated\n$ kubectl get podchaos pod-kill-example --namespace chaos-testing --output yaml \\\n&& kubectl get pods --namespace chaos-testing\n")),Object(s.b)("p",{parentName:"li"},"The output is like this:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'...\nmetadata:\n  annotations:\n    experiment.pingcap.com/pause: "true"\n...\nspec:\n  action: pod-kill\n  containerName: ""\n  duration: 10s\n  mode: one\n  nextStart: "2020-04-15T03:18:34Z"\n  paused: true\n  scheduler:\n    cron: \'@every 15s\'\n  selector:\n    labelSelectors:\n      app.kubernetes.io/component: chaos-daemon\n    namespaces:\n    - chaos-testing\n  value: ""\nstatus:\n  experiment:\n    endTime: "2020-04-15T03:18:24Z"\n    phase: Paused\n    podChaos:\n    - action: pod-kill\n      hostIP: 172.17.0.4\n      message: delete pod\n      name: chaos-daemon-p9wxd\n      namespace: chaos-testing\n      podIP: 10.244.3.3\n    startTime: "2020-04-15T03:18:19Z"\n  phase: ""\nNAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-7f67fbcfdc-ljlkn   1/1     Running   0          5m58s\nchaos-daemon-8cdv2                          1/1     Running   0          5m34s\nchaos-daemon-k7smn                          1/1     Running   0          5m20s\nchaos-daemon-sflc4                          1/1     Running   0          5m5s\n'))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Resume this chaos:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ kubectl annotate podchaos pod-kill-example --namespace chaos-testing experiment.pingcap.com/pause-\npodchaos.pingcap.com/pod-kill-example annotated\n")),Object(s.b)("p",{parentName:"li"},"The output is like this:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'...\nspec:\n  action: pod-kill\n  containerName: ""\n  duration: 10s\n  mode: one\n  nextRecover: "2020-04-15T03:23:56Z"\n  nextStart: "2020-04-15T03:24:01Z"\n  scheduler:\n    cron: \'@every 15s\'\n  selector:\n    labelSelectors:\n      app.kubernetes.io/component: chaos-daemon\n    namespaces:\n    - chaos-testing\n  value: ""\nstatus:\n  experiment:\n    endTime: "2020-04-15T03:18:24Z"\n    phase: Running\n    podChaos:\n    - action: pod-kill\n      hostIP: 172.17.0.5\n      message: delete pod\n      name: chaos-daemon-k7smn\n      namespace: chaos-testing\n      podIP: 10.244.2.4\n    startTime: "2020-04-15T03:23:46Z"\n  phase: ""\nNAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-7f67fbcfdc-ljlkn   1/1     Running   0          6m29s\nchaos-daemon-2pcs9                          1/1     Running   0          9s\nchaos-daemon-8cdv2                          1/1     Running   0          6m5s\nchaos-daemon-sflc4                          1/1     Running   0          5m36s\n')))))}l.isMDXComponent=!0},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,b=m["".concat(r,".").concat(d)]||m[d]||u[d]||s;return t?o.a.createElement(b,c(c({ref:n},i),{},{components:t})):o.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var i=2;i<s;i++)r[i]=t[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
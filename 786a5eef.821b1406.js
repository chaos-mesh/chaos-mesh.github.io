(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),c=n(6),b=(n(0),n(205)),r={id:"multi_data_centers",title:"Network latency simulation across multiple data centers",sidebar_label:"Network latency simulation across multiple data centers"},i={unversionedId:"use_cases/multi_data_centers",id:"version-1.0.0/use_cases/multi_data_centers",isDocsHomePage:!1,title:"Network latency simulation across multiple data centers",description:"This document helps you simulate multiple data centers scenarios.",source:"@site/versioned_docs/version-1.0.0/use_cases/multi_data_centers.md",slug:"/use_cases/multi_data_centers",permalink:"/docs/1.0.0/use_cases/multi_data_centers",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.0/use_cases/multi_data_centers.md",version:"1.0.0",sidebar_label:"Network latency simulation across multiple data centers",sidebar:"version-1.0.0/docs",previous:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/1.0.0/user_guides/experiment_scope"},next:{title:"Development Guide",permalink:"/docs/1.0.0/development_guides/development_overview"}},s=[{value:"Characteristics of multiple data centers scenarios",id:"characteristics-of-multiple-data-centers-scenarios",children:[]},{value:"Experiment environment",id:"experiment-environment",children:[{value:"Grouping",id:"grouping",children:[]},{value:"Latency between three data centers",id:"latency-between-three-data-centers",children:[]}]},{value:"Inject network latency",id:"inject-network-latency",children:[{value:"Design injection rules",id:"design-injection-rules",children:[]},{value:"Define the chaos experiment",id:"define-the-chaos-experiment",children:[]},{value:"Apply the chaos experiment",id:"apply-the-chaos-experiment",children:[]},{value:"Check the result",id:"check-the-result",children:[]}]},{value:"Delete the network latency",id:"delete-the-network-latency",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This document helps you simulate multiple data centers scenarios."),Object(b.b)("h2",{id:"characteristics-of-multiple-data-centers-scenarios"},"Characteristics of multiple data centers scenarios"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The latency between different data centers"),Object(b.b)("li",{parentName:"ul"},"The bandwidth limitations between data centers")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Note"),":"),Object(b.b)("p",{parentName:"blockquote"},"Currently, Chaos Mesh cannot simulate the scenario of the bandwidth limitations between data centers. So in this case, only simulate the scenario of the latency between different data centers.")),Object(b.b)("h2",{id:"experiment-environment"},"Experiment environment"),Object(b.b)("p",null,"Suppose our application will be deployed in three data centers in a production environment\nand these data centers are still under construction. Now we want to test the impact of\nsuch a deployment topology on the business in advance."),Object(b.b)("p",null,"Here we use TiDB cluster as an example. Suppose we already install the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.pingcap.com/tidb-in-kubernetes/stable/"}),"TiDB cluster")," and ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0.0/installation/installation"}),"Chaos Mesh"),"\nin our Kubernetes environment. In this TiDB cluster, we have three TiDB pods, three PD pods and seven TiKV pods:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'kubectl get pod -n tidb-cluster # "tidb-cluster" is the namespace of TiDB cluster\n')),Object(b.b)("p",null,"Output:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                               READY   STATUS    RESTARTS   AGE\nbasic-discovery-7f9f48c465-6pdhn   1/1     Running   0          30m\nbasic-pd-0                         1/1     Running   0          30m\nbasic-pd-1                         1/1     Running   0          30m\nbasic-pd-2                         1/1     Running   0          30m\nbasic-tidb-0                       2/2     Running   0          29m\nbasic-tidb-1                       2/2     Running   0          29m\nbasic-tidb-2                       2/2     Running   0          29m\nbasic-tikv-0                       1/1     Running   0          29m\nbasic-tikv-1                       1/1     Running   0          29m\nbasic-tikv-2                       1/1     Running   0          29m\nbasic-tikv-3                       1/1     Running   0          29m\nbasic-tikv-4                       1/1     Running   0          29m\nbasic-tikv-5                       1/1     Running   0          29m\nbasic-tikv-6                       1/1     Running   0          29m\n")),Object(b.b)("h3",{id:"grouping"},"Grouping"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"dc-a"),", ",Object(b.b)("inlineCode",{parentName:"p"},"dc-b"),", and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-c")," are the three data centers we will use later. So we will split the pods to these data centers:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-a"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-b"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-c"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-pd-0"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-pd-1"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-pd-2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tidb-0"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tidb-1"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tidb-2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tikv-0/1"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tikv-2/3"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"basic-tikv-4/5/6")))),Object(b.b)("h3",{id:"latency-between-three-data-centers"},"Latency between three data centers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"latency"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-a <--\x3e dc-b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"db-a <--\x3e dc-c"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-b <--\x3e dc-c"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2ms")))),Object(b.b)("h2",{id:"inject-network-latency"},"Inject network latency"),Object(b.b)("h3",{id:"design-injection-rules"},"Design injection rules"),Object(b.b)("p",null,"Chaos Mesh provides ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0.0/user_guides/networkchaos_experiment"}),Object(b.b)("inlineCode",{parentName:"a"},"NetworkChaos"))," to inject network latency,\nso we can use it to simulate the latency between three data centers."),Object(b.b)("p",null,"At present, ",Object(b.b)("inlineCode",{parentName:"p"},"NetworkChaos")," has a limitation that each target pod only has one configuration of ",Object(b.b)("inlineCode",{parentName:"p"},"netem")," in effect.\nSo we can use the following rules:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"source pods"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"latency"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"target pods"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-c"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-c"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1ms"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dc-b")))),Object(b.b)("p",null,"According to above rules, the latency between ",Object(b.b)("inlineCode",{parentName:"p"},"dc-a")," and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-b")," is ",Object(b.b)("inlineCode",{parentName:"p"},"1ms"),", the latency between ",Object(b.b)("inlineCode",{parentName:"p"},"dc-a")," and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-c")," is ",Object(b.b)("inlineCode",{parentName:"p"},"2ms"),"\nand the latency between ",Object(b.b)("inlineCode",{parentName:"p"},"dc-b")," and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-c")," is ",Object(b.b)("inlineCode",{parentName:"p"},"2ms"),"."),Object(b.b)("h3",{id:"define-the-chaos-experiment"},"Define the chaos experiment"),Object(b.b)("p",null,"According to the injection rules, we define the chaos experiment as following:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-a\n  namespace: tidb-cluster\nspec:\n  action: delay # chaos action\n  mode: all\n  selector: # define the pods belong to dc-a\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n  delay:\n    latency: "1ms"\n  direction: to\n  target:\n    selector: # define the pods belong to dc-b and dc-c\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-1\n          - basic-tidb-2\n          - basic-pd-1\n          - basic-pd-2\n          - basic-tikv-2\n          - basic-tikv-3\n          - basic-tikv-4\n          - basic-tikv-5\n          - basic-tikv-6\n    mode: all\n\n---\napiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-b\n  namespace: tidb-cluster\nspec:\n  action: delay\n  mode: all\n  selector: # define the pods belong to dc-b\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-1\n        - basic-pd-1\n        - basic-tikv-2\n        - basic-tikv-3\n  delay:\n    latency: "1ms"\n  direction: to\n  target:\n    selector: # define the pods belong to dc-c\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-2\n          - basic-pd-2\n          - basic-tikv-4\n          - basic-tikv-5\n          - basic-tikv-6\n    mode: all\n\n---\napiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-c\n  namespace: tidb-cluster\nspec:\n  action: delay\n  mode: all\n  selector: # define the pods belong to dc-c\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-2\n        - basic-pd-2\n        - basic-tikv-4\n        - basic-tikv-5\n        - basic-tikv-6\n  delay:\n    latency: "1ms"\n  direction: to\n  target:\n    selector: # define the pods belong to dc-a and dc-b\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-0\n          - basic-tidb-1\n          - basic-pd-0\n          - basic-pd-1\n          - basic-tikv-0\n          - basic-tikv-1\n          - basic-tikv-2\n          - basic-tikv-3\n    mode: all\n')),Object(b.b)("h3",{id:"apply-the-chaos-experiment"},"Apply the chaos experiment"),Object(b.b)("p",null,"Define the above chaos experiment as ",Object(b.b)("inlineCode",{parentName:"p"},"delay.yaml")," and apply this file:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f delay.yaml\n")),Object(b.b)("h3",{id:"check-the-result"},"Check the result"),Object(b.b)("p",null,"Use ",Object(b.b)("inlineCode",{parentName:"p"},"ping")," command to check the latency between three centers."),Object(b.b)("h4",{id:"check-the-latency-between-the-pods-belong-to-dc-a"},"Check the latency between the pods belong to ",Object(b.b)("inlineCode",{parentName:"h4"},"dc-a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tikv-0.basic-tikv-peer.tidb-cluster.svc\n")),Object(b.b)("p",null,"output:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PING basic-tikv-0.basic-tikv-peer.tidb-cluster.svc (10.244.1.229): 56 data bytes\n64 bytes from 10.244.1.229: seq=0 ttl=63 time=0.095 ms\n64 bytes from 10.244.1.229: seq=1 ttl=63 time=0.100 ms\n")),Object(b.b)("p",null,"From the output, we can see that the latency between the pods belong to ",Object(b.b)("inlineCode",{parentName:"p"},"dc-a")," is around ",Object(b.b)("inlineCode",{parentName:"p"},"0.1ms"),"."),Object(b.b)("h4",{id:"check-the-latency-between-dc-a-and-dc-c"},"Check the latency between ",Object(b.b)("inlineCode",{parentName:"h4"},"dc-a")," and ",Object(b.b)("inlineCode",{parentName:"h4"},"dc-c")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tidb-1.basic-tidb-peer.tidb-cluster.svc\n")),Object(b.b)("p",null,"output:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PING basic-tidb-1.basic-tidb-peer.tidb-cluster.svc (10.244.3.3): 56 data bytes\n64 bytes from 10.244.3.3: seq=0 ttl=62 time=1.193 ms\n64 bytes from 10.244.3.3: seq=1 ttl=62 time=1.201 ms\n")),Object(b.b)("p",null,"From the output, we can see that the latency between ",Object(b.b)("inlineCode",{parentName:"p"},"dc-a")," and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-c")," is around ",Object(b.b)("inlineCode",{parentName:"p"},"1ms"),"."),Object(b.b)("h4",{id:"check-the-latency-between-dc-b-and-dc-c"},"Check the latency between ",Object(b.b)("inlineCode",{parentName:"h4"},"dc-b")," and ",Object(b.b)("inlineCode",{parentName:"h4"},"dc-c")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tidb-2.basic-tidb-peer.tidb-cluster.svc\n")),Object(b.b)("p",null,"output:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PING basic-tidb-2.basic-tidb-peer.tidb-cluster.svc (10.244.2.27): 56 data bytes\n64 bytes from 10.244.2.27: seq=0 ttl=62 time=2.200 ms\n64 bytes from 10.244.2.27: seq=1 ttl=62 time=2.251 ms\n")),Object(b.b)("p",null,"From the output, we can see that the latency between ",Object(b.b)("inlineCode",{parentName:"p"},"dc-a")," and ",Object(b.b)("inlineCode",{parentName:"p"},"dc-c")," is around ",Object(b.b)("inlineCode",{parentName:"p"},"2ms"),"."),Object(b.b)("h2",{id:"delete-the-network-latency"},"Delete the network latency"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f delay.yaml\n")))}d.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),o=d(n),m=a,u=o["".concat(r,".").concat(m)]||o[m]||p[m]||b;return n?c.a.createElement(u,i(i({ref:t},l),{},{components:n})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<b;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3346],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return b}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(n),b=r,u=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return n?a.createElement(u,c(c({ref:t},o),{},{components:n})):a.createElement(u,c({ref:t},o))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var d=2;d<i;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=["components"],l={title:"Network latency simulation across multiple data centers"},s=void 0,d={unversionedId:"use_cases/multi_data_centers",id:"version-1.2.4/use_cases/multi_data_centers",isDocsHomePage:!1,title:"Network latency simulation across multiple data centers",description:"This document helps you simulate multiple data centers scenarios.",source:"@site/versioned_docs/version-1.2.4/use_cases/multi_data_centers.md",sourceDirName:"use_cases",slug:"/use_cases/multi_data_centers",permalink:"/docs/1.2.4/use_cases/multi_data_centers",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/use_cases/multi_data_centers.md",tags:[],version:"1.2.4",frontMatter:{title:"Network latency simulation across multiple data centers"},sidebar:"version-1.2.4/docs",previous:{title:"AwsChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/awschaos"},next:{title:"Development Guide",permalink:"/docs/1.2.4/development_guides/development_overview"}},o=[{value:"Characteristics of multiple data centers scenarios",id:"characteristics-of-multiple-data-centers-scenarios",children:[],level:2},{value:"Experiment environment",id:"experiment-environment",children:[{value:"Grouping",id:"grouping",children:[],level:3},{value:"Latency between three data centers",id:"latency-between-three-data-centers",children:[],level:3}],level:2},{value:"Inject network latency",id:"inject-network-latency",children:[{value:"Design injection rules",id:"design-injection-rules",children:[],level:3},{value:"Define the chaos experiment",id:"define-the-chaos-experiment",children:[],level:3},{value:"Apply the chaos experiment",id:"apply-the-chaos-experiment",children:[],level:3},{value:"Check the result",id:"check-the-result",children:[{value:"Check the latency between the pods belong to <code>dc-a</code>",id:"check-the-latency-between-the-pods-belong-to-dc-a",children:[],level:4},{value:"Check the latency between <code>dc-a</code> and <code>dc-c</code>",id:"check-the-latency-between-dc-a-and-dc-c",children:[],level:4},{value:"Check the latency between <code>dc-b</code> and <code>dc-c</code>",id:"check-the-latency-between-dc-b-and-dc-c",children:[],level:4}],level:3}],level:2},{value:"Delete the network latency",id:"delete-the-network-latency",children:[],level:2}],p={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document helps you simulate multiple data centers scenarios."),(0,i.kt)("h2",{id:"characteristics-of-multiple-data-centers-scenarios"},"Characteristics of multiple data centers scenarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The latency between different data centers"),(0,i.kt)("li",{parentName:"ul"},"The bandwidth limitations between data centers")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"Currently, Chaos Mesh cannot simulate the scenario of the bandwidth limitations between data centers. So in this case, only simulate the scenario of the latency between different data centers.")),(0,i.kt)("h2",{id:"experiment-environment"},"Experiment environment"),(0,i.kt)("p",null,"Suppose our application will be deployed in three data centers in a production environment and these data centers are still under construction. Now we want to test the impact of such a deployment topology on the business in advance."),(0,i.kt)("p",null,"Here we use TiDB cluster as an example. Suppose we already install the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb-in-kubernetes/stable/"},"TiDB cluster")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2.4/user_guides/installation"},"Chaos Mesh")," in our Kubernetes environment. In this TiDB cluster, we have three TiDB pods, three PD pods and seven TiKV pods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get pod -n tidb-cluster # "tidb-cluster" is the namespace of TiDB cluster\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                               READY   STATUS    RESTARTS   AGE\nbasic-discovery-7f9f48c465-6pdhn   1/1     Running   0          30m\nbasic-pd-0                         1/1     Running   0          30m\nbasic-pd-1                         1/1     Running   0          30m\nbasic-pd-2                         1/1     Running   0          30m\nbasic-tidb-0                       2/2     Running   0          29m\nbasic-tidb-1                       2/2     Running   0          29m\nbasic-tidb-2                       2/2     Running   0          29m\nbasic-tikv-0                       1/1     Running   0          29m\nbasic-tikv-1                       1/1     Running   0          29m\nbasic-tikv-2                       1/1     Running   0          29m\nbasic-tikv-3                       1/1     Running   0          29m\nbasic-tikv-4                       1/1     Running   0          29m\nbasic-tikv-5                       1/1     Running   0          29m\nbasic-tikv-6                       1/1     Running   0          29m\n")),(0,i.kt)("h3",{id:"grouping"},"Grouping"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dc-a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-b"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-c")," are the three data centers we will use later. So we will split the pods to these data centers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"dc-a"),(0,i.kt)("th",{parentName:"tr",align:"center"},"dc-b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"dc-c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-pd-0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-pd-1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-pd-2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tidb-0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tidb-1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tidb-2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tikv-0/1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tikv-2/3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"basic-tikv-4/5/6")))),(0,i.kt)("h3",{id:"latency-between-three-data-centers"},"Latency between three data centers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"latency"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-a <--\x3e dc-b"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"db-a <--\x3e dc-c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-b <--\x3e dc-c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2ms")))),(0,i.kt)("h2",{id:"inject-network-latency"},"Inject network latency"),(0,i.kt)("h3",{id:"design-injection-rules"},"Design injection rules"),(0,i.kt)("p",null,"Chaos Mesh provides ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2.4/chaos_experiments/networkchaos"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkChaos"))," to inject network latency, so we can use it to simulate the latency between three data centers."),(0,i.kt)("p",null,"At present, ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," has a limitation that each target pod only has one configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"netem")," in effect. So we can use the following rules:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"source pods"),(0,i.kt)("th",{parentName:"tr",align:"center"},"latency"),(0,i.kt)("th",{parentName:"tr",align:"center"},"target pods"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-a"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-a"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-b"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dc-b")))),(0,i.kt)("p",null,"According to above rules, the latency between ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-b")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"1ms"),", the latency between ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-c")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"2ms")," and the latency between ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-b")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-c")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"2ms"),"."),(0,i.kt)("h3",{id:"define-the-chaos-experiment"},"Define the chaos experiment"),(0,i.kt)("p",null,"According to the injection rules, we define the chaos experiment as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-a\n  namespace: tidb-cluster\nspec:\n  action: delay # chaos action\n  mode: all\n  selector: # define the pods belong to dc-a\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n  delay:\n    latency: '1ms'\n  direction: to\n  target:\n    selector: # define the pods belong to dc-b and dc-c\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-1\n          - basic-tidb-2\n          - basic-pd-1\n          - basic-pd-2\n          - basic-tikv-2\n          - basic-tikv-3\n          - basic-tikv-4\n          - basic-tikv-5\n          - basic-tikv-6\n    mode: all\n\n---\napiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-b\n  namespace: tidb-cluster\nspec:\n  action: delay\n  mode: all\n  selector: # define the pods belong to dc-b\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-1\n        - basic-pd-1\n        - basic-tikv-2\n        - basic-tikv-3\n  delay:\n    latency: '1ms'\n  direction: to\n  target:\n    selector: # define the pods belong to dc-c\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-2\n          - basic-pd-2\n          - basic-tikv-4\n          - basic-tikv-5\n          - basic-tikv-6\n    mode: all\n\n---\napiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-c\n  namespace: tidb-cluster\nspec:\n  action: delay\n  mode: all\n  selector: # define the pods belong to dc-c\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-2\n        - basic-pd-2\n        - basic-tikv-4\n        - basic-tikv-5\n        - basic-tikv-6\n  delay:\n    latency: '1ms'\n  direction: to\n  target:\n    selector: # define the pods belong to dc-a and dc-b\n      pods:\n        tidb-cluster: # namespace of the target pods\n          - basic-tidb-0\n          - basic-tidb-1\n          - basic-pd-0\n          - basic-pd-1\n          - basic-tikv-0\n          - basic-tikv-1\n          - basic-tikv-2\n          - basic-tikv-3\n    mode: all\n")),(0,i.kt)("h3",{id:"apply-the-chaos-experiment"},"Apply the chaos experiment"),(0,i.kt)("p",null,"Define the above chaos experiment as ",(0,i.kt)("inlineCode",{parentName:"p"},"delay.yaml")," and apply this file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f delay.yaml\n")),(0,i.kt)("h3",{id:"check-the-result"},"Check the result"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," command to check the latency between three centers."),(0,i.kt)("h4",{id:"check-the-latency-between-the-pods-belong-to-dc-a"},"Check the latency between the pods belong to ",(0,i.kt)("inlineCode",{parentName:"h4"},"dc-a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tikv-0.basic-tikv-peer.tidb-cluster.svc\n")),(0,i.kt)("p",null,"output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PING basic-tikv-0.basic-tikv-peer.tidb-cluster.svc (10.244.1.229): 56 data bytes\n64 bytes from 10.244.1.229: seq=0 ttl=63 time=0.095 ms\n64 bytes from 10.244.1.229: seq=1 ttl=63 time=0.100 ms\n")),(0,i.kt)("p",null,"From the output, we can see that the latency between the pods belong to ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-a")," is around ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1ms"),"."),(0,i.kt)("h4",{id:"check-the-latency-between-dc-a-and-dc-c"},"Check the latency between ",(0,i.kt)("inlineCode",{parentName:"h4"},"dc-a")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"dc-c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tidb-1.basic-tidb-peer.tidb-cluster.svc\n")),(0,i.kt)("p",null,"output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PING basic-tidb-1.basic-tidb-peer.tidb-cluster.svc (10.244.3.3): 56 data bytes\n64 bytes from 10.244.3.3: seq=0 ttl=62 time=1.193 ms\n64 bytes from 10.244.3.3: seq=1 ttl=62 time=1.201 ms\n")),(0,i.kt)("p",null,"From the output, we can see that the latency between ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-c")," is around ",(0,i.kt)("inlineCode",{parentName:"p"},"1ms"),"."),(0,i.kt)("h4",{id:"check-the-latency-between-dc-b-and-dc-c"},"Check the latency between ",(0,i.kt)("inlineCode",{parentName:"h4"},"dc-b")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"dc-c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n tidb-cluster basic-tidb-0 -c tidb -- ping -c 2 basic-tidb-2.basic-tidb-peer.tidb-cluster.svc\n")),(0,i.kt)("p",null,"output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PING basic-tidb-2.basic-tidb-peer.tidb-cluster.svc (10.244.2.27): 56 data bytes\n64 bytes from 10.244.2.27: seq=0 ttl=62 time=2.200 ms\n64 bytes from 10.244.2.27: seq=1 ttl=62 time=2.251 ms\n")),(0,i.kt)("p",null,"From the output, we can see that the latency between ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-c")," is around ",(0,i.kt)("inlineCode",{parentName:"p"},"2ms"),"."),(0,i.kt)("h2",{id:"delete-the-network-latency"},"Delete the network latency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f delay.yaml\n")))}m.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),h=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=h(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),p=a,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?s.a.createElement(m,r(r({ref:t},l),{},{components:n})):s.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-engineering-0a7a0b74bf0c31599b29b2ddc1069830.png"},323:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-mesh-discovers-downtime-recovery-exceptions-in-tikv-1d52a2abba675a8b9ee6d00660c5e7b0.png"},324:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-mesh-workflow-0ae9b7507c78c0e54f10971f6ecca876.png"},325:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-experiment-running-797059e0d5752cc6a247970e20d22991.gif"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),s=n(7),o=(n(0),n(233)),i={slug:"/chaos_mesh_your_chaos_engineering_solution",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/chaos-engineering.png",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},r={permalink:"/blog/chaos_mesh_your_chaos_engineering_solution",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",source:"@site/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",description:"Chaos Engineering",date:"2020-01-15T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",readingTime:10.945,truncated:!0,prevItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},c=[{value:"Why Chaos Mesh?",id:"why-chaos-mesh",children:[]},{value:"What can Chaos Mesh do?",id:"what-can-chaos-mesh-do",children:[]},{value:"Design principles",id:"design-principles",children:[{value:"Easy to use",id:"easy-to-use",children:[]},{value:"Scalable",id:"scalable",children:[]},{value:"Designed for Kubernetes",id:"designed-for-kubernetes",children:[]}]},{value:"CustomResourceDefinitions design",id:"customresourcedefinitions-design",children:[]},{value:"How does Chaos Mesh work?",id:"how-does-chaos-mesh-work",children:[]},{value:"Running chaos",id:"running-chaos",children:[{value:"Preparing the environment",id:"preparing-the-environment",children:[]},{value:"Running chaos using a YAML file",id:"running-chaos-using-a-yaml-file",children:[]},{value:"Running chaos using the Kubernetes API",id:"running-chaos-using-the-kubernetes-api",children:[]}]},{value:"What does the future hold?",id:"what-does-the-future-hold",children:[]}],l={rightToc:c};function h(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Chaos Engineering",src:n(273).default})),Object(o.b)("h2",{id:"why-chaos-mesh"},"Why Chaos Mesh?"),Object(o.b)("p",null,"In the world of distributed computing, faults can happen to your clusters unpredictably any time, anywhere. Traditionally we have unit tests and integration tests that guarantee a system is production ready, but these cover just the tip of the iceberg as clusters scale, complexities amount, and data volumes increase by PB levels. To better identify system vulnerabilities and improve resilience, Netflix invented ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://netflix.github.io/chaosmonkey/"}),"Chaos Monkey")," and injects various types of faults into the infrastructure and business systems. This is how Chaos Engineering was originated."),Object(o.b)("p",null,"At ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://chaos-mesh.org/"}),"PingCAP"),", we are facing the same problem while building ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tidb"}),"TiDB"),", an open source distributed NewSQL database. To be fault tolerant, or resilient holds especially true to us, because the most important asset for any database users, the data itself, is at stake. To ensure resilience, we started ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pingcap.com/blog/chaos-practice-in-tidb/"}),"practicing Chaos Engineering")," internally in our testing framework from a very early stage. However, as TiDB grew, so did the testing requirements. We realized that we needed a universal chaos testing platform, not just for TiDB, but also for other distributed systems."),Object(o.b)("p",null,"Therefore, we present to you Chaos Mesh, a cloud-native Chaos Engineering platform that orchestrates chaos experiments on Kubernetes environments. It's an open source project available at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"https://github.com/chaos-mesh/chaos-mesh"),"."),Object(o.b)("p",null,"In the following sections, I will share with you what Chaos Mesh is, how we design and implement it, and finally I will show you how you can use it in your environment."),Object(o.b)("h2",{id:"what-can-chaos-mesh-do"},"What can Chaos Mesh do?"),Object(o.b)("p",null,"Chaos Mesh is a versatile Chaos Engineering platform that features all-around fault injection methods for complex systems on Kubernetes, covering faults in Pod, network, file system, and even the kernel."),Object(o.b)("p",null,"Here is an example of how we use Chaos Mesh to locate a TiDB system bug. In this example, we simulate Pod downtime with our distributed storage engine (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pingcap.com/docs/stable/architecture/#tikv-server"}),"TiKV"),") and observe changes in queries per second (QPS). Regularly, if one TiKV node is down, the QPS may experience a transient jitter before it returns to the level before the failure. This is how we guarantee high availability."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Chaos Mesh discovers downtime recovery exceptions in TiKV",src:n(323).default})),Object(o.b)("div",{class:"caption-center"}," Chaos Mesh discovers downtime recovery exceptions in TiKV "),Object(o.b)("p",null,"As you can see from the dashboard:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"During the first two downtimes, the QPS returns to normal after about 1 minute."),Object(o.b)("li",{parentName:"ul"},"After the third downtime, however, the QPS takes much longer to recover\u2014about 9 minutes. Such a long downtime is unexpected, and it would definitely impact online services.")),Object(o.b)("p",null,"After some diagnosis, we found the TiDB cluster version under test (V3.0.1) had some tricky issues when handling TiKV downtimes. We resolved these issues in later versions."),Object(o.b)("p",null,"But Chaos Mesh can do a lot more than just simulate downtime. It also includes these fault injection methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pod-kill:")," Simulates Kubernetes Pods being killed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pod-failure:")," Simulates Kubernetes Pods being continuously unavailable"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"network-delay:")," Simulates network delay"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"network-loss:")," Simulates network packet loss"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"network-duplication:")," Simulates network packet duplication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"network-corrupt:")," Simulates network packet corruption"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"network-partition:")," Simulates network partition"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"I/O delay:")," Simulates file system I/O delay"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"I/O errno:")," Simulates file system I/O errors")),Object(o.b)("h2",{id:"design-principles"},"Design principles"),Object(o.b)("p",null,"We designed Chaos Mesh to be easy to use, scalable, and designed for Kubernetes."),Object(o.b)("h3",{id:"easy-to-use"},"Easy to use"),Object(o.b)("p",null,"To be easy to use, Chaos Mesh must:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Require no special dependencies, so that it can be deployed directly on Kubernetes clusters, including ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes/minikube"}),"Minikube"),"."),Object(o.b)("li",{parentName:"ul"},"Require no modification to the deployment logic of the system under test (SUT), so that chaos experiments can be performed in a production environment."),Object(o.b)("li",{parentName:"ul"},"Easily orchestrate fault injection behaviors in chaos experiments, and easily view experiment status and results. You should also be able to quickly rollback injected failures."),Object(o.b)("li",{parentName:"ul"},"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments.")),Object(o.b)("h3",{id:"scalable"},"Scalable"),Object(o.b)("p",null,'Chaos Mesh should be scalable, so that we can "plug" new requirements into it conveniently without reinventing the wheel. Specifically, Chaos Mesh must:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Leverage existing implementations so that fault injection methods can be easily scaled."),Object(o.b)("li",{parentName:"ul"},"Easily integrate with other testing frameworks.")),Object(o.b)("h3",{id:"designed-for-kubernetes"},"Designed for Kubernetes"),Object(o.b)("p",null,"In the container world, Kubernetes is the absolute leader. Its growth rate of adoption is far beyond everybody's expectations, and it has won the war of containerized orchestration. In essence, Kubernetes is an operating system for the cloud."),Object(o.b)("p",null,"TiDB is a cloud-native distributed database. Our internal automated testing platform was built on Kubernetes from the beginning. We had hundreds of TiDB clusters running on Kubernetes every day for various experiments, including extensive chaos testing to simulate all kinds of failures or issues in a production environment. To support these chaos experiments, the combination of chaos and Kubernetes became a natural choice and principle for our implementation."),Object(o.b)("h2",{id:"customresourcedefinitions-design"},"CustomResourceDefinitions design"),Object(o.b)("p",null,"Chaos Mesh uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"}),"CustomResourceDefinitions")," (CRD) to define chaos objects. In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."),Object(o.b)("p",null,"Instead of defining all types of fault injections in a unified CRD object, we allow flexible and separate CRD objects for different types of fault injection. If we add a fault injection method that conforms to an existing CRD object, we scale directly based on this object; if it is a completely new method, we create a new CRD object for it. With this design, chaos object definitions and the logic implementation are extracted from the top level, which makes the code structure clearer. This approach also reduces the degree of coupling and the probability of errors. In addition, Kubernetes' ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/controller-runtime"}),"controller-runtime")," is a great wrapper for implementing controllers. This saves us a lot of time because we don't have to repeatedly implement the same set of controllers for each CRD project."),Object(o.b)("p",null,"Chaos Mesh implements the PodChaos, NetworkChaos, and IOChaos objects. The names clearly identify the corresponding fault injection types."),Object(o.b)("p",null,"For example, Pod crashing is a very common problem in a Kubernetes environment. Many native resource objects automatically handle such errors with typical actions such as creating a new Pod. But can our application really deal with such errors? What if the Pod won't start?"),Object(o.b)("p",null,"With well-defined actions such as ",Object(o.b)("inlineCode",{parentName:"p"},"pod-kill"),", PodChaos can help us pinpoint these kinds of issues more effectively. The PodChaos object uses the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'spec:\n action: pod-kill\n mode: one\n selector:\n   namespaces:\n     - tidb-cluster-demo\n   labelSelectors:\n     "app.kubernetes.io/component": "tikv"\n  scheduler:\n   cron: "@every 2m"\n')),Object(o.b)("p",null,"This code does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"action")," attribute defines the specific error type to be injected. In this case, ",Object(o.b)("inlineCode",{parentName:"li"},"pod-kill")," kills Pods randomly."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"selector")," attribute limits the scope of chaos experiment to a specific scope. In this case, the scope is TiKV Pods for the TiDB cluster with the ",Object(o.b)("inlineCode",{parentName:"li"},"tidb-cluster-demo")," namespace."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"scheduler")," attribute defines the interval for each chaos fault action.")),Object(o.b)("p",null,"For more details on CRD objects such as NetworkChaos and IOChaos, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"Chaos-mesh documentation"),"."),Object(o.b)("h2",{id:"how-does-chaos-mesh-work"},"How does Chaos Mesh work?"),Object(o.b)("p",null,"With the CRD design settled, let's look at the big picture on how Chaos Mesh works. The following major components are involved:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"controller-manager")),Object(o.b)("p",{parentName:"li"},'Acts as the platform\'s "brain." It manages the life cycle of CRD objects and schedules chaos experiments. It has object controllers for scheduling CRD object instances, and the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"}),"admission-webhooks")," controller dynamically injects sidecar containers into Pods.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"chaos-daemon")),Object(o.b)("p",{parentName:"li"},"Runs as a privileged daemonset that can operate network devices on the node and Cgroup.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"sidecar")),Object(o.b)("p",{parentName:"li"},"Runs as a special type of container that is dynamically injected into the target Pod by the admission-webhooks. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," sidecar container runs a fuse-daemon to hijack the I/O operation of the application container."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Chaos Mesh workflow",src:n(324).default})),Object(o.b)("div",{class:"caption-center"}," Chaos Mesh workflow "),Object(o.b)("p",null,"Here is how these components streamline a chaos experiment:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Using a YAML file or Kubernetes client, the user creates or updates chaos objects to the Kubernetes API server."),Object(o.b)("li",{parentName:"ol"},"Chaos Mesh uses the API server to watch the chaos objects and manages the lifecycle of chaos experiments through creating, updating, or deleting events. In this process, controller-manager, chaos-daemon, and sidecar containers work together to inject errors."),Object(o.b)("li",{parentName:"ol"},"When admission-webhooks receives a Pod creation request, the Pod object to be created is dynamically updated; for example, it is injected into the sidecar container and the Pod.")),Object(o.b)("h2",{id:"running-chaos"},"Running chaos"),Object(o.b)("p",null,"The above sections introduce how we design Chaos Mesh and how it works. Now let's get down to business and show you how to use Chaos Mesh. Note that the chaos testing time may vary depending on the complexity of the application to be tested and the test scheduling rules defined in the CRD."),Object(o.b)("h3",{id:"preparing-the-environment"},"Preparing the environment"),Object(o.b)("p",null,"Chaos Mesh runs on Kubernetes v1.12 or later. Helm, a Kubernetes package management tool, deploys and manages Chaos Mesh. Before you run Chaos Mesh, make sure that Helm is properly installed in the Kubernetes cluster. To set up the environment, do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you have a Kubernetes cluster. If you do, skip to step 2; otherwise, start one locally using the script provided by Chaos Mesh:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"// install kind\ncurl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.6.1/kind-$(uname)-amd64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n\n// get script\ngit clone https://github.com/chaos-mesh/chaos-mesh\ncd chaos-mesh\n// start cluster\nhack/kind-cluster-build.sh\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," Starting Kubernetes clusters locally affects network-related fault injections.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If the Kubernetes cluster is ready, use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/"}),"Helm")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/kubectl/overview/"}),"Kubectl")," to deploy Chaos Mesh:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n// create CRD resource\nkubectl apply -f manifests/\n// install chaos-mesh\nhelm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),Object(o.b)("p",{parentName:"li"},"Wait until all components are installed, and check the installation status using:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"// check chaos-mesh status\nkubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(o.b)("p",{parentName:"li"},"If the installation is successful, you can see all pods up and running. Now, time to play."),Object(o.b)("p",{parentName:"li"},"You can run Chaos Mesh using a YAML definition or a Kubernetes API."))),Object(o.b)("h3",{id:"running-chaos-using-a-yaml-file"},"Running chaos using a YAML file"),Object(o.b)("p",null,"You can define your own chaos experiments through the YAML file method, which provides a fast, convenient way to conduct chaos experiments after you deploy the application. To run chaos using a YAML file, follow the steps below:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," For illustration purposes, we use TiDB as our system under test. You can use a target system of your choice, and modify the YAML file accordingly."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy a TiDB cluster named ",Object(o.b)("inlineCode",{parentName:"p"},"chaos-demo-1"),". You can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tidb-operator"}),"TiDB Operator")," to deploy TiDB.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the YAML file named ",Object(o.b)("inlineCode",{parentName:"p"},"kill-tikv.yaml")," and add the following content:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-chaos-demo\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - chaos-demo-1\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 1m'\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Save the file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To start chaos, ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl apply -f kill-tikv.yaml"),"."))),Object(o.b)("p",null,"The following chaos experiment simulates the TiKV Pods being frequently killed in the ",Object(o.b)("inlineCode",{parentName:"p"},"chaos-demo-1")," cluster:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Chaos experiment running",src:n(325).default})),Object(o.b)("div",{class:"caption-center"}," Chaos experiment running "),Object(o.b)("p",null,"We use a sysbench program to monitor the real-time QPS changes in the TiDB cluster. When errors are injected into the cluster, the QPS show a drastic jitter, which means a specific TiKV Pod has been deleted, and Kubernetes then re-creates a new TiKV Pod."),Object(o.b)("p",null,"For more YAML file examples, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"),"."),Object(o.b)("h3",{id:"running-chaos-using-the-kubernetes-api"},"Running chaos using the Kubernetes API"),Object(o.b)("p",null,"Chaos Mesh uses CRD to define chaos objects, so you can manipulate CRD objects directly through the Kubernetes API. This way, it is very convenient to apply Chaos Mesh to your own applications with customized test scenarios and automated chaos experiments."),Object(o.b)("p",null,"In the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tipocket/tree/35206e8483b66f9728b7b14823a10b3e4114e0e3/test-infra"}),"test-infra")," project, we simulate potential errors in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tipocket/blob/35206e8483b66f9728b7b14823a10b3e4114e0e3/test-infra/tests/etcd/nemesis_test.go"}),"etcd")," clusters on Kubernetes, including nodes restarting, network failure, and file system failure."),Object(o.b)("p",null,"The following is a Chaos Mesh sample script using the Kubernetes API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'import (\n    "context"\n\n "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\nfunc main() {\n  ...\n  delay := &chaosv1alpha1.NetworkChaos{\n  Spec: chaosv1alpha1.NetworkChaosSpec{...},\n      }\n      k8sClient := client.New(conf, client.Options{ Scheme: scheme.Scheme })\n  k8sClient.Create(context.TODO(), delay)\n      k8sClient.Delete(context.TODO(), delay)\n}\n')),Object(o.b)("h2",{id:"what-does-the-future-hold"},"What does the future hold?"),Object(o.b)("p",null,"In this article, we introduced you to Chaos Mesh, our open source cloud-native Chaos Engineering platform. There are still many pieces in progress, with more details to unveil regarding the design, use cases, and development. Stay tuned."),Object(o.b)("p",null,"Open sourcing is just a starting point. In addition to the infrastructure-level chaos experiments introduced in previous sections, we are in the process of supporting a wider range of fault types of finer granularity, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Injecting errors at the system call and kernel levels with the assistance of eBPF and other tools"),Object(o.b)("li",{parentName:"ul"},"Injecting specific error types into the application function and statement levels by integrating ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pingcap/failpoint"}),"failpoint"),", which will cover scenarios that are otherwise impossible with conventional injection methods")),Object(o.b)("p",null,"Moving forward, we will continuously improve the Chaos Mesh Dashboard, so that users can easily see if and how their online businesses are impacted by fault injections. In addition, our roadmap includes an easy-to-use fault orchestration interface. We're planning other cool features, such as Chaos Mesh Verifier and Chaos Mesh Cloud."),Object(o.b)("p",null,"If any of these sound interesting to you, join us in building a world class Chaos Engineering platform. May our applications dance in chaos on Kubernetes!"),Object(o.b)("p",null,"If you find a bug or think something is missing, feel free to file an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"issue"),", open a PR, or message us in the #project-chaos-mesh channel in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://slack.cncf.io/"}),"CNCF Slack")," workspace."),Object(o.b)("p",null,"GitHub: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"https://github.com/chaos-mesh/chaos-mesh")))}h.isMDXComponent=!0}}]);
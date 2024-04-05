"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3871],{47026:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=n(13274),i=n(9534);const o={slug:"/chaos_mesh_your_chaos_engineering_solution",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-engineering.png",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},a=void 0,r={permalink:"/blog/chaos_mesh_your_chaos_engineering_solution",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",source:"@site/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",description:"Chaos Engineering",date:"2020-01-15T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:10.94,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/chaos_mesh_your_chaos_engineering_solution",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-engineering.png",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},unlisted:!1,prevItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},h={authorsImageUrls:[void 0]},l=[{value:"Why Chaos Mesh?",id:"why-chaos-mesh",level:2},{value:"What can Chaos Mesh do?",id:"what-can-chaos-mesh-do",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Easy to use",id:"easy-to-use",level:3},{value:"Scalable",id:"scalable",level:3},{value:"Designed for Kubernetes",id:"designed-for-kubernetes",level:3},{value:"CustomResourceDefinitions design",id:"customresourcedefinitions-design",level:2},{value:"How does Chaos Mesh work?",id:"how-does-chaos-mesh-work",level:2},{value:"Running chaos",id:"running-chaos",level:2},{value:"Preparing the environment",id:"preparing-the-environment",level:3},{value:"Running chaos using a YAML file",id:"running-chaos-using-a-yaml-file",level:3},{value:"Running chaos using the Kubernetes API",id:"running-chaos-using-the-kubernetes-api",level:3},{value:"What does the future hold?",id:"what-does-the-future-hold",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Engineering",src:n(80338).A+"",width:"900",height:"402"})}),"\n",(0,t.jsx)(s.h2,{id:"why-chaos-mesh",children:"Why Chaos Mesh?"}),"\n",(0,t.jsxs)(s.p,{children:["In the world of distributed computing, faults can happen to your clusters unpredictably any time, anywhere. Traditionally we have unit tests and integration tests that guarantee a system is production ready, but these cover just the tip of the iceberg as clusters scale, complexities amount, and data volumes increase by PB levels. To better identify system vulnerabilities and improve resilience, Netflix invented ",(0,t.jsx)(s.a,{href:"https://netflix.github.io/chaosmonkey/",children:"Chaos Monkey"})," and injects various types of faults into the infrastructure and business systems. This is how Chaos Engineering was originated."]}),"\n",(0,t.jsxs)(s.p,{children:["At ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/",children:"PingCAP"}),", we are facing the same problem while building ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/tidb",children:"TiDB"}),", an open source distributed NewSQL database. To be fault tolerant, or resilient holds especially true to us, because the most important asset for any database users, the data itself, is at stake. To ensure resilience, we started ",(0,t.jsx)(s.a,{href:"https://pingcap.com/blog/chaos-practice-in-tidb/",children:"practicing Chaos Engineering"})," internally in our testing framework from a very early stage. However, as TiDB grew, so did the testing requirements. We realized that we needed a universal chaos testing platform, not just for TiDB, but also for other distributed systems."]}),"\n",(0,t.jsxs)(s.p,{children:["Therefore, we present to you Chaos Mesh, a cloud-native Chaos Engineering platform that orchestrates chaos experiments on Kubernetes environments. It's an open source project available at ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"https://github.com/chaos-mesh/chaos-mesh"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"In the following sections, I will share with you what Chaos Mesh is, how we design and implement it, and finally I will show you how you can use it in your environment."}),"\n",(0,t.jsx)(s.h2,{id:"what-can-chaos-mesh-do",children:"What can Chaos Mesh do?"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh is a versatile Chaos Engineering platform that features all-around fault injection methods for complex systems on Kubernetes, covering faults in Pod, network, file system, and even the kernel."}),"\n",(0,t.jsxs)(s.p,{children:["Here is an example of how we use Chaos Mesh to locate a TiDB system bug. In this example, we simulate Pod downtime with our distributed storage engine (",(0,t.jsx)(s.a,{href:"https://docs.pingcap.com/tidb/stable/tidb-architecture#tikv-server",children:"TiKV"}),") and observe changes in queries per second (QPS). Regularly, if one TiKV node is down, the QPS may experience a transient jitter before it returns to the level before the failure. This is how we guarantee high availability."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh discovers downtime recovery exceptions in TiKV",src:n(89453).A+"",width:"600",height:"290"})}),"\n",(0,t.jsx)("div",{className:"caption",children:" Chaos Mesh discovers downtime recovery exceptions in TiKV"}),"\n",(0,t.jsx)(s.p,{children:"As you can see from the dashboard:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"During the first two downtimes, the QPS returns to normal after about 1 minute."}),"\n",(0,t.jsx)(s.li,{children:"After the third downtime, however, the QPS takes much longer to recover\u2014about 9 minutes. Such a long downtime is unexpected, and it would definitely impact online services."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"After some diagnosis, we found the TiDB cluster version under test (V3.0.1) had some tricky issues when handling TiKV downtimes. We resolved these issues in later versions."}),"\n",(0,t.jsx)(s.p,{children:"But Chaos Mesh can do a lot more than just simulate downtime. It also includes these fault injection methods:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"pod-kill:"})," Simulates Kubernetes Pods being killed"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"pod-failure:"})," Simulates Kubernetes Pods being continuously unavailable"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"network-delay:"})," Simulates network delay"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"network-loss:"})," Simulates network packet loss"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"network-duplication:"})," Simulates network packet duplication"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"network-corrupt:"})," Simulates network packet corruption"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"network-partition:"})," Simulates network partition"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"I/O delay:"})," Simulates file system I/O delay"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"I/O errno:"})," Simulates file system I/O errors"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"design-principles",children:"Design principles"}),"\n",(0,t.jsx)(s.p,{children:"We designed Chaos Mesh to be easy to use, scalable, and designed for Kubernetes."}),"\n",(0,t.jsx)(s.h3,{id:"easy-to-use",children:"Easy to use"}),"\n",(0,t.jsx)(s.p,{children:"To be easy to use, Chaos Mesh must:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Require no special dependencies, so that it can be deployed directly on Kubernetes clusters, including ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes/minikube",children:"Minikube"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Require no modification to the deployment logic of the system under test (SUT), so that chaos experiments can be performed in a production environment."}),"\n",(0,t.jsx)(s.li,{children:"Easily orchestrate fault injection behaviors in chaos experiments, and easily view experiment status and results. You should also be able to quickly rollback injected failures."}),"\n",(0,t.jsx)(s.li,{children:"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"scalable",children:"Scalable"}),"\n",(0,t.jsx)(s.p,{children:'Chaos Mesh should be scalable, so that we can "plug" new requirements into it conveniently without reinventing the wheel. Specifically, Chaos Mesh must:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Leverage existing implementations so that fault injection methods can be easily scaled."}),"\n",(0,t.jsx)(s.li,{children:"Easily integrate with other testing frameworks."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"designed-for-kubernetes",children:"Designed for Kubernetes"}),"\n",(0,t.jsx)(s.p,{children:"In the container world, Kubernetes is the absolute leader. Its growth rate of adoption is far beyond everybody's expectations, and it has won the war of containerized orchestration. In essence, Kubernetes is an operating system for the cloud."}),"\n",(0,t.jsx)(s.p,{children:"TiDB is a cloud-native distributed database. Our internal automated testing platform was built on Kubernetes from the beginning. We had hundreds of TiDB clusters running on Kubernetes every day for various experiments, including extensive chaos testing to simulate all kinds of failures or issues in a production environment. To support these chaos experiments, the combination of chaos and Kubernetes became a natural choice and principle for our implementation."}),"\n",(0,t.jsx)(s.h2,{id:"customresourcedefinitions-design",children:"CustomResourceDefinitions design"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Mesh uses ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"CustomResourceDefinitions"})," (CRD) to define chaos objects. In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."]}),"\n",(0,t.jsxs)(s.p,{children:["Instead of defining all types of fault injections in a unified CRD object, we allow flexible and separate CRD objects for different types of fault injection. If we add a fault injection method that conforms to an existing CRD object, we scale directly based on this object; if it is a completely new method, we create a new CRD object for it. With this design, chaos object definitions and the logic implementation are extracted from the top level, which makes the code structure clearer. This approach also reduces the degree of coupling and the probability of errors. In addition, Kubernetes' ",(0,t.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/controller-runtime",children:"controller-runtime"})," is a great wrapper for implementing controllers. This saves us a lot of time because we don't have to repeatedly implement the same set of controllers for each CRD project."]}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh implements the PodChaos, NetworkChaos, and IOChaos objects. The names clearly identify the corresponding fault injection types."}),"\n",(0,t.jsx)(s.p,{children:"For example, Pod crashing is a very common problem in a Kubernetes environment. Many native resource objects automatically handle such errors with typical actions such as creating a new Pod. But can our application really deal with such errors? What if the Pod won't start?"}),"\n",(0,t.jsxs)(s.p,{children:["With well-defined actions such as ",(0,t.jsx)(s.code,{children:"pod-kill"}),", PodChaos can help us pinpoint these kinds of issues more effectively. The PodChaos object uses the following code:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",children:'spec:\n action: pod-kill\n mode: one\n selector:\n   namespaces:\n     - tidb-cluster-demo\n   labelSelectors:\n     "app.kubernetes.io/component": "tikv"\n  scheduler:\n   cron: "@every 2m"\n'})}),"\n",(0,t.jsx)(s.p,{children:"This code does the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"action"})," attribute defines the specific error type to be injected. In this case, ",(0,t.jsx)(s.code,{children:"pod-kill"})," kills Pods randomly."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"selector"})," attribute limits the scope of chaos experiment to a specific scope. In this case, the scope is TiKV Pods for the TiDB cluster with the ",(0,t.jsx)(s.code,{children:"tidb-cluster-demo"})," namespace."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"scheduler"})," attribute defines the interval for each chaos fault action."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more details on CRD objects such as NetworkChaos and IOChaos, see the ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos-mesh documentation"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-does-chaos-mesh-work",children:"How does Chaos Mesh work?"}),"\n",(0,t.jsx)(s.p,{children:"With the CRD design settled, let's look at the big picture on how Chaos Mesh works. The following major components are involved:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"controller-manager"})}),"\n",(0,t.jsxs)(s.p,{children:['Acts as the platform\'s "brain." It manages the life cycle of CRD objects and schedules chaos experiments. It has object controllers for scheduling CRD object instances, and the ',(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",children:"admission-webhooks"})," controller dynamically injects sidecar containers into Pods."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"chaos-daemon"})}),"\n",(0,t.jsx)(s.p,{children:"Runs as a privileged DaemonSet that can operate network devices on the node and Cgroup."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"sidecar"})}),"\n",(0,t.jsxs)(s.p,{children:["Runs as a special type of container that is dynamically injected into the target Pod by the admission-webhooks. For example, the ",(0,t.jsx)(s.code,{children:"chaosfs"})," sidecar container runs a fuse-daemon to hijack the I/O operation of the application container."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh workflow",src:n(21228).A+"",width:"600",height:"235"})}),"\n",(0,t.jsx)("div",{className:"caption",children:" Chaos Mesh workflow "}),"\n",(0,t.jsx)(s.p,{children:"Here is how these components streamline a chaos experiment:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Using a YAML file or Kubernetes client, the user creates or updates chaos objects to the Kubernetes API server."}),"\n",(0,t.jsx)(s.li,{children:"Chaos Mesh uses the API server to watch the chaos objects and manages the lifecycle of chaos experiments through creating, updating, or deleting events. In this process, controller-manager, chaos-daemon, and sidecar containers work together to inject errors."}),"\n",(0,t.jsx)(s.li,{children:"When admission-webhooks receives a Pod creation request, the Pod object to be created is dynamically updated; for example, it is injected into the sidecar container and the Pod."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"running-chaos",children:"Running chaos"}),"\n",(0,t.jsx)(s.p,{children:"The above sections introduce how we design Chaos Mesh and how it works. Now let's get down to business and show you how to use Chaos Mesh. Note that the chaos testing time may vary depending on the complexity of the application to be tested and the test scheduling rules defined in the CRD."}),"\n",(0,t.jsx)(s.h3,{id:"preparing-the-environment",children:"Preparing the environment"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh runs on Kubernetes v1.12 or later. Helm, a Kubernetes package management tool, deploys and manages Chaos Mesh. Before you run Chaos Mesh, make sure that Helm is properly installed in the Kubernetes cluster. To set up the environment, do the following:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Make sure you have a Kubernetes cluster. If you do, skip to step 2; otherwise, start one locally using the script provided by Chaos Mesh:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"// install kind\ncurl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.6.1/kind-$(uname)-amd64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n\n// get script\ngit clone https://github.com/chaos-mesh/chaos-mesh\ncd chaos-mesh\n// start cluster\nhack/kind-cluster-build.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Starting Kubernetes clusters locally affects network-related fault injections."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["If the Kubernetes cluster is ready, use ",(0,t.jsx)(s.a,{href:"https://helm.sh/",children:"Helm"})," and ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/kubectl/overview/",children:"Kubectl"})," to deploy Chaos Mesh:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n// create CRD resource\nkubectl apply -f manifests/\n// install chaos-mesh\nhelm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-mesh\n"})}),"\n",(0,t.jsx)(s.p,{children:"Wait until all components are installed, and check the installation status using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"// check chaos-mesh status\nkubectl get pods --namespace chaos-mesh -l app.kubernetes.io/instance=chaos-mesh\n"})}),"\n",(0,t.jsx)(s.p,{children:"If the installation is successful, you can see all pods up and running. Now, time to play."}),"\n",(0,t.jsx)(s.p,{children:"You can run Chaos Mesh using a YAML definition or a Kubernetes API."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"running-chaos-using-a-yaml-file",children:"Running chaos using a YAML file"}),"\n",(0,t.jsx)(s.p,{children:"You can define your own chaos experiments through the YAML file method, which provides a fast, convenient way to conduct chaos experiments after you deploy the application. To run chaos using a YAML file, follow the steps below:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," For illustration purposes, we use TiDB as our system under test. You can use a target system of your choice, and modify the YAML file accordingly."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Deploy a TiDB cluster named ",(0,t.jsx)(s.code,{children:"chaos-demo-1"}),". You can use ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/tidb-operator",children:"TiDB Operator"})," to deploy TiDB."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create the YAML file named ",(0,t.jsx)(s.code,{children:"kill-tikv.yaml"})," and add the following content:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-chaos-demo\n  namespace: chaos-mesh\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - chaos-demo-1\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 1m'\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To start chaos, ",(0,t.jsx)(s.code,{children:"kubectl apply -f kill-tikv.yaml"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The following chaos experiment simulates the TiKV Pods being frequently killed in the ",(0,t.jsx)(s.code,{children:"chaos-demo-1"})," cluster:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos experiment running",src:n(94183).A+"",width:"512",height:"288"})}),"\n",(0,t.jsx)("div",{className:"caption",children:" Chaos experiment running "}),"\n",(0,t.jsx)(s.p,{children:"We use a sysbench program to monitor the real-time QPS changes in the TiDB cluster. When errors are injected into the cluster, the QPS show a drastic jitter, which means a specific TiKV Pod has been deleted, and Kubernetes then re-creates a new TiKV Pod."}),"\n",(0,t.jsxs)(s.p,{children:["For more YAML file examples, see ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples",children:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"running-chaos-using-the-kubernetes-api",children:"Running chaos using the Kubernetes API"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh uses CRD to define chaos objects, so you can manipulate CRD objects directly through the Kubernetes API. This way, it is very convenient to apply Chaos Mesh to your own applications with customized test scenarios and automated chaos experiments."}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/tipocket/tree/35206e8483b66f9728b7b14823a10b3e4114e0e3/test-infra",children:"test-infra"})," project, we simulate potential errors in ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/tipocket/blob/35206e8483b66f9728b7b14823a10b3e4114e0e3/test-infra/tests/etcd/nemesis_test.go",children:"etcd"})," clusters on Kubernetes, including nodes restarting, network failure, and file system failure."]}),"\n",(0,t.jsx)(s.p,{children:"The following is a Chaos Mesh sample script using the Kubernetes API:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'import (\n    "context"\n\n "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\nfunc main() {\n  ...\n  delay := &chaosv1alpha1.NetworkChaos{\n  Spec: chaosv1alpha1.NetworkChaosSpec{...},\n      }\n      k8sClient := client.New(conf, client.Options{ Scheme: scheme.Scheme })\n  k8sClient.Create(context.TODO(), delay)\n      k8sClient.Delete(context.TODO(), delay)\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"what-does-the-future-hold",children:"What does the future hold?"}),"\n",(0,t.jsx)(s.p,{children:"In this article, we introduced you to Chaos Mesh, our open source cloud-native Chaos Engineering platform. There are still many pieces in progress, with more details to unveil regarding the design, use cases, and development. Stay tuned."}),"\n",(0,t.jsx)(s.p,{children:"Open sourcing is just a starting point. In addition to the infrastructure-level chaos experiments introduced in previous sections, we are in the process of supporting a wider range of fault types of finer granularity, such as:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Injecting errors at the system call and kernel levels with the assistance of eBPF and other tools"}),"\n",(0,t.jsxs)(s.li,{children:["Injecting specific error types into the application function and statement levels by integrating ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/failpoint",children:"failpoint"}),", which will cover scenarios that are otherwise impossible with conventional injection methods"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Moving forward, we will continuously improve the Chaos Mesh Dashboard, so that users can easily see if and how their online businesses are impacted by fault injections. In addition, our roadmap includes an easy-to-use fault orchestration interface. We're planning other cool features, such as Chaos Mesh Verifier and Chaos Mesh Cloud."}),"\n",(0,t.jsx)(s.p,{children:"If any of these sound interesting to you, join us in building a world class Chaos Engineering platform. May our applications dance in chaos on Kubernetes!"}),"\n",(0,t.jsxs)(s.p,{children:["If you find a bug or think something is missing, feel free to file an ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"issue"}),", open a PR, or message us in the #project-chaos-mesh channel in the ",(0,t.jsx)(s.a,{href:"https://slack.cncf.io/",children:"CNCF Slack"})," workspace."]}),"\n",(0,t.jsxs)(s.p,{children:["GitHub: ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"https://github.com/chaos-mesh/chaos-mesh"})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},80338:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-engineering-0a7a0b74bf0c31599b29b2ddc1069830.png"},94183:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-experiment-running-797059e0d5752cc6a247970e20d22991.gif"},89453:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-discovers-downtime-recovery-exceptions-in-tikv-1d52a2abba675a8b9ee6d00660c5e7b0.png"},21228:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-workflow-0ae9b7507c78c0e54f10971f6ecca876.png"},9534:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(79474);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);
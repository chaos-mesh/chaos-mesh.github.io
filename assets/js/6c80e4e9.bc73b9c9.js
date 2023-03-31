"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3366],{29505:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(34579),o=a(67874),l=a(42178),s=a(30682),r=a(50959),i=a(16682),p=a.n(i),h=a(87004);const c=e=>{let{children:t,className:a="language-bash"}=e;const{siteConfig:i}=(0,o.Z)(),{versions:c}=(0,l.eZ)("docusaurus-plugin-content-docs");return r.createElement(n.Z,null,(()=>{const e=(0,h.p)(i,c),n="latest"===e?"":`--version ${(e=>{if(p().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(s.Z,{className:a},t.replace("--version latest",n).trim())}))}},87004:(e,t,a)=>{a.d(t,{Z:()=>p,p:()=>i});var n=a(34579),o=a(67874),l=a(42178),s=a(30682),r=a(50959);const i=(e,t)=>{const a=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";const o=t.find((e=>e.isLast)),l=t.find((e=>a.includes(e.name)));return l?l.name:o.name};const p=e=>{let{children:t,replaced:a="latest",isArchive:p=!1,className:h="language-bash"}=e;const{siteConfig:c}=(0,o.Z)(),{versions:m}=(0,l.eZ)("docusaurus-plugin-content-docs");return r.createElement(n.Z,null,(()=>{const e=i(c,m),n=p?t.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(a,"v"+e);return r.createElement(s.Z,{className:h},n)}))}},81624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=a(51163),o=(a(50959),a(17942)),l=a(29505);const s={title:"Add New Chaos Experiment Type"},r=void 0,i={unversionedId:"add-new-chaos-experiment-type",id:"version-2.3.3/add-new-chaos-experiment-type",title:"Add New Chaos Experiment Type",description:"This document describes how to add a new chaos experiment type.",source:"@site/versioned_docs/version-2.3.3/add-new-chaos-experiment-type.md",sourceDirName:".",slug:"/add-new-chaos-experiment-type",permalink:"/docs/2.3.3/add-new-chaos-experiment-type",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/add-new-chaos-experiment-type.md",tags:[],version:"2.3.3",frontMatter:{title:"Add New Chaos Experiment Type"},sidebar:"docs",previous:{title:"Configure the Development Environment",permalink:"/docs/2.3.3/configure-development-environment"},next:{title:"Extend Chaos Daemon Interface",permalink:"/docs/2.3.3/extend-chaos-daemon-interface"}},p={},h=[{value:"Step 1: Define the schema type",id:"step-1-define-the-schema-type",level:2},{value:"Step 2: Register the CRD",id:"step-2-register-the-crd",level:2},{value:"Step 3: Register the event handler for this chaos object",id:"step-3-register-the-event-handler-for-this-chaos-object",level:2},{value:"Step 4: Build the Docker image",id:"step-4-build-the-docker-image",level:2},{value:"Step 5: Run the chaos experiment",id:"step-5-run-the-chaos-experiment",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],c={toc:h},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to add a new chaos experiment type."),(0,o.kt)("p",null,"The following walks you through an example of HelloWorldChaos, a new chaos experiment type that prints ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," to the log. The steps include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 1: Define the schema type"),(0,o.kt)("li",{parentName:"ul"},"Step 2: Register the CRD"),(0,o.kt)("li",{parentName:"ul"},"Step 3: Register the event handler for this chaos object"),(0,o.kt)("li",{parentName:"ul"},"Step 4: Build the Docker image"),(0,o.kt)("li",{parentName:"ul"},"Step 5: Run the chaos experiment")),(0,o.kt)("h2",{id:"step-1-define-the-schema-type"},"Step 1: Define the schema type"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the API directory ",(0,o.kt)("inlineCode",{parentName:"p"},"api/v1alpha1")," with the following content:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:experiment\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,o.kt)("p",{parentName:"li"},"This file defines the schema type of HelloWorldChaos, which can be described in a YAML file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh. rg/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <resource name>\n  name: <namespace>\nspec:\n  duration: <duration>\nstatus:\n  experiment: <experimental status>\n...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make generate")," in the root directory of Chaos Mesh, which generates a boilerplate for Chaos Mesh to compile."))),(0,o.kt)("h2",{id:"step-2-register-the-crd"},"Step 2: Register the CRD"),(0,o.kt)("p",null,"You need to register the CRD (Custom Resource Definition) of HelloWorldChaos to interact it with Kubernetes API."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make yaml")," in the root directory. The generated YAML file is at ",(0,o.kt)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To combine this YAML file into ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),", add a new line in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/crd/kustomization.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # This is the new line\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make yaml")," again. You can see the definition of HelloWorldChaos in ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),". To confirm, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"git diff")," command."))),(0,o.kt)("h2",{id:"step-3-register-the-event-handler-for-this-chaos-object"},"Step 3: Register the event handler for this chaos object"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloworldchaos/types.go")," with the following content:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n\n    "github.com/go-logr/logr"\n    "go.uber.org/fx"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n    "github.com/chaos-mesh/chaos-mesh/controllers/common"\n    "github.com/chaos-mesh/chaos-mesh/controllers/utils/chaosdaemon"\n)\n\ntype Impl struct {\n    client.Client\n    Log logr.Logger\n    decoder *utils.ContainerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Hello world!")\n    return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Goodbye world!")\n    return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *common.ChaosImplPair {\n    return &common.ChaosImplPair{\n        Name:   "helloworldchaos",\n        Object: &v1alpha1.HelloWorldChaos{},\n        Impl: &Impl{\n            Client: c,\n            Log:    log.WithName("helloworldchaos"),\n            decoder: decoder,\n        },\n        ObjectList: &v1alpha1.HelloWorldChaosList{},\n    }\n}\n\nvar Module = fx.Provide(\n    fx.Annotated{\n        Group:  "impl",\n        Target: NewImpl,\n    },\n)\n\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Chaos Mesh uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/uber-go/fx"},"fx")," library for dependency injection. To register HelloWorldChaos in the Controller Manager, add a line in ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/fx.go"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    ...\n    gcpchaos.Module,\n    stresschaos.Module,\n    jvmchaos.Module,\n    timechaos.Module,\n    helloworldchaos.Module //Add a new line. Make sure you have imported HelloWorldChaos to this file first.\n")),(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/types/types.go"),", add the following content:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    ...\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "timechaos",\n            Object: &v1alpha1.TimeChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "gcpchaos",\n            Object: &v1alpha1.GCPChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "helloworldchaos",\n            Object: &v1alpha1.HelloWorldChaos{},\n        },\n    },\n')))),(0,o.kt)("h2",{id:"step-4-build-the-docker-image"},"Step 4: Build the Docker image"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the Docker image:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push the image to your local Docker Registry:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you deploy Kubernetes clusters using kind, then you need to load images into kind:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image localhost:5000/chaos-mesh/chaos-mesh:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-daemon:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-dashboard:latest\n")))),(0,o.kt)("h2",{id:"step-5-run-the-chaos-experiment"},"Step 5: Run the chaos experiment"),(0,o.kt)("p",null,"In this step, you need to deploy Chaos Mesh with your latest changes to test HelloWorldChaos."),(0,o.kt)("p",null,"Before you pull any image for Chaos Mesh (using ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify the helm template ",(0,o.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," to replace the default image with what you just pushed to your local Docker registry."),(0,o.kt)("p",null,"The templates in Chaos Mesh use ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-mesh/chaos-mesh:latest")," as the default Registry. You need to set the path with the environment variable of ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," (The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"), as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"controllerManager:\n  image: localhost:5000/chaos-mesh/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/chaos-mesh/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/chaos-mesh/chaos-dashboard:latest\n  ...\n")),(0,o.kt)("p",null,"After you update the template, try running HelloWorldChaos."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Register the CRD in your cluster:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f manifests/crd.yaml\n")),(0,o.kt)("p",{parentName:"li"},"You can see HelloWorldChaos is created from the output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),(0,o.kt)("p",{parentName:"li"},"Now you can get the CRD of HelloWorldChaos using the command below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy Chaos Mesh:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest"),(0,o.kt)("p",{parentName:"li"},"To verify the deployment is successful, you can check all Pods in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," namespace:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-mesh -l app.kubernetes.io/instance=chaos-mesh\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Arguments ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," are used to run NeteworkChaos on kind. :::"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy the Pod for testing:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),(0,o.kt)("p",{parentName:"li"},"Make sure the Pod for testing works properly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," file in any location with the following content:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-mesh\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: one\n  duration: 1h\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the chaos experiment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get HelloWorldChaos -n chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"Now you can see ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the logs of ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"Example output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-24T06:42:26.858Z        INFO    records apply chaos     {"id": "chaos-mesh/chaos-daemon-vsmc5"}\n2021-06-24T06:42:26.858Z        INFO    helloworldchaos Hello World!\n')),(0,o.kt)("p",{parentName:"li"},":::note ",(0,o.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes. You can check it by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-mesh"),". :::"))),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"If you encounter any problems during the process, create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," in the Chaos Mesh repository."),(0,o.kt)("p",null,"If you want to dive deep into developing new chaos experiment types, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.3/extend-chaos-daemon-interface"},"Extend Chaos Daemon interface"),"."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5493],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,u=m["".concat(i,".").concat(d)]||m[d]||h[d]||r;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1301:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Add New Chaos Experiment Type",sidebar_label:"Add New Chaos Experiment Type"},i=void 0,p={unversionedId:"add-new-chaos-experiment-type",id:"version-2.0.1/add-new-chaos-experiment-type",isDocsHomePage:!1,title:"Add New Chaos Experiment Type",description:"This document describes how to add a new chaos experiment type.",source:"@site/versioned_docs/version-2.0.1/add-new-chaos-experiment-type.md",sourceDirName:".",slug:"/add-new-chaos-experiment-type",permalink:"/docs/add-new-chaos-experiment-type",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/add-new-chaos-experiment-type.md",tags:[],version:"2.0.1",frontMatter:{title:"Add New Chaos Experiment Type",sidebar_label:"Add New Chaos Experiment Type"},sidebar:"version-2.0.1/docs",previous:{title:"Configure the Development Environment",permalink:"/docs/configure-development-environment"},next:{title:"Extend Chaos Daemon Interface",permalink:"/docs/extend-chaos-daemon-interface"}},c=[{value:"Step 1: Define the schema type",id:"step-1-define-the-schema-type",children:[]},{value:"Step 2: Register the CRD",id:"step-2-register-the-crd",children:[]},{value:"Step 3: Register the event handler for this chaos object",id:"step-3-register-the-event-handler-for-this-chaos-object",children:[]},{value:"Step 4: Build the Docker image",id:"step-4-build-the-docker-image",children:[]},{value:"Step 5: Run the chaos experiment",id:"step-5-run-the-chaos-experiment",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],h={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to add a new chaos experiment type."),(0,r.kt)("p",null,"The following walks you through an example of HelloWorldChaos, a new chaos experiment type that prints ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," to the log. The steps include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1: Define the schema type"),(0,r.kt)("li",{parentName:"ul"},"Step 2: Register the CRD"),(0,r.kt)("li",{parentName:"ul"},"Step 3: Register the event handler for this chaos object"),(0,r.kt)("li",{parentName:"ul"},"Step 4: Build the Docker image"),(0,r.kt)("li",{parentName:"ul"},"Step 5: Run the chaos experiment")),(0,r.kt)("h2",{id:"step-1-define-the-schema-type"},"Step 1: Define the schema type"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the API directory ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v1alpha1")," with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:base\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"This file defines the schema type of HelloWorldChaos, which can be described in a YAML file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh. rg/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <resource name>\n  name: <namespace>\nspec:\n  duration: <duration>\nstatus:\n  experiment: <experimental status>\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make generate")," in the root directory of Chaos Mesh, which generates a boilerplate for Chaos Mesh to compile."))),(0,r.kt)("h2",{id:"step-2-register-the-crd"},"Step 2: Register the CRD"),(0,r.kt)("p",null,"You need to register the CRD (Custom Resource Definition) of HelloWorldChaos to interact it with Kubernetes API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make yaml")," in the root directory. The generated YAML file is at ",(0,r.kt)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To combine this YAML file into ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),", add a new line in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/crd/kustomization.yaml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # This is the new line\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make yaml")," again. You can see the definition of HelloWorldChaos in ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),". To confirm, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"git diff")," command."))),(0,r.kt)("h2",{id:"step-3-register-the-event-handler-for-this-chaos-object"},"Step 3: Register the event handler for this chaos object"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloworldchaos/types.go")," with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n\n    "github.com/go-logr/logr"\n    "go.uber.org/fx"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n    "github.com/chaos-mesh/chaos-mesh/controllers/common"\n    "github.com/chaos-mesh/chaos-mesh/controllers/utils/chaosdaemon"\n)\n\ntype Impl struct {\n    client.Client\n    Log logr.Logger\n    decoder *utils.ContianerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Hello world!")\n    return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Goodbye world!")\n    return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContianerRecordDecoder) *common.ChaosImplPair {\n    return &common.ChaosImplPair{\n        Name:   "helloworldchaos",\n        Object: &v1alpha1.HelloWorldChaos{},\n        Impl: &Impl{\n            Client: c,\n            Log:    log.WithName("helloworldchaos"),\n            decoder: decoder,\n        },\n        ObjectList: &v1alpha1.HelloWorldChaosList{},\n    }\n}\n\nvar Module = fx.Provide(\n    fx.Annotated{\n        Group:  "impl",\n        Target: NewImpl,\n    },\n)\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chaos Mesh uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uber-go/fx"},"fx")," library for dependency injection. To register HelloWorldChaos in the Controller Manager, add a line in ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/fx.go"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    ...\n    gcpchaos.Module,\n    stresschaos.Module,\n    jvmchaos.Module,\n    timechaos.Module,\n    helloworldchaos.Module //Add a new line. Make sure you have imported HelloWorldChaos to this file first.\n")))),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers/types/types.go"),", add the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```go\n    ...\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "timechaos",\n            Object: &v1alpha1.TimeChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "gcpchaos",\n            Object: &v1alpha1.GCPChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "helloworldchaos",\n            Object: &v1alpha1.HelloWorldChaos{},\n        },\n    },\n```\n')),(0,r.kt)("h2",{id:"step-4-build-the-docker-image"},"Step 4: Build the Docker image"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the Docker image:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Push the image to your local Docker Registry:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you deploy Kubernetes clusters using kind, then you need to load images into kind:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n")))),(0,r.kt)("h2",{id:"step-5-run-the-chaos-experiment"},"Step 5: Run the chaos experiment"),(0,r.kt)("p",null,"In this step, you need to deploy Chaos Mesh with your latest changes to test HelloWorldChaos."),(0,r.kt)("p",null,"Before you pull any image for Chaos Mesh (using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify the helm template ",(0,r.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," to replace the default image with what you just pushed to your local Docker registry."),(0,r.kt)("p",null,"The templates in Chaos Mesh use ",(0,r.kt)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default Registry. You need to set the path with the environment variable of ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," (The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"), as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"controllerManager:\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),(0,r.kt)("p",null,"After you update the template, try running HelloWorldChaos."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register the CRD in your cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f manifests/crd.yaml\n")),(0,r.kt)("p",{parentName:"li"},"You can see HelloWorldChaos is created from the output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),(0,r.kt)("p",{parentName:"li"},"Now you can get the CRD of HelloWorldChaos using the command below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy Chaos Mesh:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,r.kt)("p",{parentName:"li"},"To verify the deployment is successful, you can check all Pods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," are used to run NeteworkChaos on kind.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the Pod for testing:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),(0,r.kt)("p",{parentName:"li"},"Make sure the Pod for testing works properly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," file in any location with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: one\n  duration: 1h\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the chaos experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get HelloWorldChaos -n chaos-testing\n")),(0,r.kt)("p",{parentName:"li"},"Now you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the logs of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),(0,r.kt)("p",{parentName:"li"},"Example output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-24T06:42:26.858Z        INFO    records apply chaos     {"id": "chaos-testing/chaos-daemon-vsmc5"}\n2021-06-24T06:42:26.858Z        INFO    helloworldchaos Hello World!\n')),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes. You can check it by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-testing"),"."))))),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"If you encounter any problems during the process, create an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," in the Chaos Mesh repository."),(0,r.kt)("p",null,"If you want to dive deep into developing new chaos experiment types, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/extend-chaos-daemon-interface"},"Extend Chaos Daemon interface"),"."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1746],{89400:function(e,t,a){var n=a(91262),o=a(19055),s=a(67294),l=a(81249),r=a.n(l),i=a(52263),c=a(56871),h=a(28084);t.Z=function(e){var t=e.children,a=e.className,l=void 0===a?"language-bash":a,p=(0,i.Z)().siteConfig,m=(0,h.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(n.Z,null,(function(){var e=(0,c.p)(p,m),a="latest"===e?"":"--version "+function(e){if(r().satisfies(e,">=2.0.3"))return e;var t=e.slice(0,3);return"v"+(parseFloat(t)-.7)+e.slice(3)}(e);return s.createElement(o.Z,{className:l},t.replace("--version latest",a).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return i}});var n=a(91262),o=a(19055),s=a(67294),l=a(52263),r=a(28084),i=function(e,t){var a=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";var o=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||o};t.Z=function(e){var t=e.children,a=e.replaced,c=void 0===a?"latest":a,h=e.isArchive,p=void 0!==h&&h,m=e.className,d=void 0===m?"language-bash":m,u=(0,l.Z)().siteConfig,k=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(n.Z,null,(function(){var e=i(u,k),a=p?t.replace(c,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(c,"v"+e);return s.createElement(o.Z,{className:d},a)}))}},87962:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return p},default:function(){return d}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),l=a(89400),r=["components"],i={title:"Develop a New Chaos"},c=void 0,h={unversionedId:"development_guides/develop_a_new_chaos",id:"version-1.1.4/development_guides/develop_a_new_chaos",isDocsHomePage:!1,title:"Develop a New Chaos",description:'After preparing the development environment, let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:',source:"@site/versioned_docs/version-1.1.4/development_guides/develop_a_new_chaos.md",sourceDirName:"development_guides",slug:"/development_guides/develop_a_new_chaos",permalink:"/docs/1.1.4/development_guides/develop_a_new_chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/development_guides/develop_a_new_chaos.md",tags:[],version:"1.1.4",frontMatter:{title:"Develop a New Chaos"},sidebar:"version-1.1.4/docs",previous:{title:"Setup the development environment",permalink:"/docs/1.1.4/development_guides/setup_env"},next:{title:"Add Facilities to Chaos Daemon",permalink:"/docs/1.1.4/development_guides/add_facilities_to_chaos_daemon"}},p=[{value:"Define the schema type",id:"define-the-schema-type",children:[],level:2},{value:"Register the CRD",id:"register-the-crd",children:[],level:2},{value:"Register the handler for this chaos object",id:"register-the-handler-for-this-chaos-object",children:[],level:2},{value:"Make the Docker image",id:"make-the-docker-image",children:[],level:2},{value:"Run chaos",id:"run-chaos",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.1.4/development_guides/setup_env"},"preparing the development environment"),', let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#define-the-schema-type"},"Define the schema type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#register-the-crd"},"Register the CRD")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#register-the-handler-for-this-chaos-object"},"Register the handler for this chaos object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#make-the-docker-image"},"Make the Docker image")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#run-chaos"},"Run chaos")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#next-steps"},"Next steps"))),(0,s.kt)("h2",{id:"define-the-schema-type"},"Define the schema type"),(0,s.kt)("p",null,"To define the schema type for the new chaos object, add ",(0,s.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the api directory ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/api/v1alpha1"},(0,s.kt)("inlineCode",{parentName:"a"},"api/v1alpha1"))," and fill it with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:base\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n\n    // Scheduler defines some schedule rules to control the running time of the chaos experiment about time.\n    // +optional\n    Scheduler *SchedulerSpec `json:"scheduler,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n')),(0,s.kt)("p",null,"With this file added, the HelloWorldChaos schema type is defined. The structure of it can be described as the YAML file below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <name-of-this-resource>\n  namespace: <ns-of-this-resource>\nspec:\n  duration: <duration-of-every-action>\n  scheduler:\n    cron: <the-cron-job-definition-of-this-chaos>\nstatus:\n  phase: <phase-of-this-resource>\n  ...\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"make generate")," will generate boilerplate functions for it, which is needed to integrate the resource in the Chaos Mesh."),(0,s.kt)("h2",{id:"register-the-crd"},"Register the CRD"),(0,s.kt)("p",null,"The HelloWorldChaos object is a custom resource object in Kubernetes. This means you need to register the corresponding CRD in the Kubernetes API. Run ",(0,s.kt)("inlineCode",{parentName:"p"},"make yaml"),", then the CRD will be generated in ",(0,s.kt)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),". In order to combine all these YAML file into ",(0,s.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),", modify ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/config/crd/kustomization.yaml"},"kustomization.yaml")," by adding the corresponding line as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # this is the new line\n")),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"make yaml")," again, and the definition of HelloWorldChaos will show in ",(0,s.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),". You can check it through ",(0,s.kt)("inlineCode",{parentName:"p"},"git diff")),(0,s.kt)("h2",{id:"register-the-handler-for-this-chaos-object"},"Register the handler for this chaos object"),(0,s.kt)("p",null,"Create file ",(0,s.kt)("inlineCode",{parentName:"p"},"controllers/helloworldchaos/types.go")," and fill it with following codes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n\n    "k8s.io/apimachinery/pkg/runtime"\n    ctrl "sigs.k8s.io/controller-runtime"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/pkg/router"\n    ctx "github.com/chaos-mesh/chaos-mesh/pkg/router/context"\n    end "github.com/chaos-mesh/chaos-mesh/pkg/router/endpoint"\n)\n\ntype endpoint struct {\n    ctx.Context\n}\n\nfunc (e *endpoint) Apply(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    e.Log.Info("Hello World!")\n    return nil\n}\n\nfunc (e *endpoint) Recover(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    return nil\n}\n\nfunc (e *endpoint) Object() v1alpha1.InnerObject {\n    return &v1alpha1.HelloWorldChaos{}\n}\n\nfunc init() {\n    router.Register("helloworldchaos", &v1alpha1.HelloWorldChaos{}, func(obj runtime.Object) bool {\n        return true\n    }, func(ctx ctx.Context) end.Endpoint {\n        return &endpoint{\n            Context: ctx,\n        }\n    })\n}\n')),(0,s.kt)("p",null,"We should also import ",(0,s.kt)("inlineCode",{parentName:"p"},"github.com/chaos-mesh/chaos-mesh/controllers/helloworldchaos")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cmd/controller-manager/main.go"),", then it will register on the route table when the controller starts up."),(0,s.kt)("h2",{id:"make-the-docker-image"},"Make the Docker image"),(0,s.kt)("p",null,"Having the object successfully added, you can make a Docker image:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,s.kt)("p",null,"Then push it to your registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n")),(0,s.kt)("p",null,"If your Kubernetes cluster is deployed by Kind, you need to load images to Kind:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n")),(0,s.kt)("h2",{id:"run-chaos"},"Run chaos"),(0,s.kt)("p",null,"You are almost there. In this step, you will pull the image and apply it for testing."),(0,s.kt)("p",null,"Before you pull any image for Chaos Mesh (using ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"values.yaml")," of the helm template to replace the default image with what you just pushed to your local registry."),(0,s.kt)("p",null,"In this case, the template uses ",(0,s.kt)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default target registry, so you need to replace it with the environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY"),"'s value(default ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"), as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"clusterScoped: true\n\n# Also see clusterScoped and controllerManager.serviceAccount\nrbac:\n  create: true\n\ncontrollerManager:\n  serviceAccount: chaos-controller-manager\n  ...\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),(0,s.kt)("p",null,"Now take the following steps to run chaos:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-testing")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace chaos-testing\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get the related custom resource type for Chaos Mesh:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f manifests/\n")),(0,s.kt)("p",{parentName:"li"},"You can see CRD ",(0,s.kt)("inlineCode",{parentName:"p"},"helloworldchaos")," is created:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-log"},"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),(0,s.kt)("p",{parentName:"li"},"Now you can get the CRD using the command below:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Install Chaos Mesh:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For helm 3.X"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For helm 2.X"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock"))),(0,s.kt)("p",{parentName:"li"},"To verify your installation, get pods from the ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("p",{parentName:"blockquote"},"Arguments ",(0,s.kt)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," are used to to support network chaos on kind."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," in any location with the lines below:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\nspec: {}\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Apply the chaos:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get HelloWorldChaos -n chaos-testing\n")),(0,s.kt)("p",{parentName:"li"},"Now you should be able to check the ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World!")," result in the log of of ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),(0,s.kt)("p",{parentName:"li"},"The log is as follows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-log"},'2020-09-07T09:21:29.301Z        INFO    controllers.HelloWorldChaos     Hello World!    {"reconciler": "helloworldchaos"}\n2020-09-07T09:21:29.308Z        DEBUG   controller-runtime.controller   Successfully Reconciled {"controller": "helloworldchaos", "request": "chaos-testing/hello-world"}\n')),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes. You can check it by executing ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-testing"),".")))),(0,s.kt)("h2",{id:"next-steps"},"Next steps"),(0,s.kt)("p",null,"Congratulations! You have just added a chaos type for Chaos Mesh successfully. Let us know if you run into any issues during the process. If you feel like doing other types of contributions, refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.1.4/development_guides/add_facilities_to_chaos_daemon"},"Add facilities to chaos daemon"),"."))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(c,".").concat(m)]||h[m]||b[m]||r;return a?o.a.createElement(d,l(l({ref:t},i),{},{components:a})):o.a.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(184)),c={id:"develop_a_new_chaos",title:"Develop a New Chaos",sidebar_label:"Develop a New Chaos"},l={unversionedId:"development_guides/develop_a_new_chaos",id:"development_guides/develop_a_new_chaos",isDocsHomePage:!1,title:"Develop a New Chaos",description:'After preparing the development environment, let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:',source:"@site/docs/development_guides/dev_hello_world.md",slug:"/development_guides/develop_a_new_chaos",permalink:"/docs/next/development_guides/develop_a_new_chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/development_guides/dev_hello_world.md",version:"current",sidebar_label:"Develop a New Chaos",sidebar:"docs",previous:{title:"Set up the development environment",permalink:"/docs/next/development_guides/set_up_the_development_environment"},next:{title:"Add Facilities to Chaos Daemon",permalink:"/docs/next/development_guides/add_facilities_to_chaos_daemon"}},s=[{value:"Define the schema type",id:"define-the-schema-type",children:[]},{value:"Register the CRD",id:"register-the-crd",children:[]},{value:"Register the handler for this chaos object",id:"register-the-handler-for-this-chaos-object",children:[]},{value:"Make the Docker image",id:"make-the-docker-image",children:[]},{value:"Run chaos",id:"run-chaos",children:[]},{value:"Next steps",id:"next-steps",children:[]}],i={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/development_guides/set_up_the_development_environment"}),"preparing the development environment"),', let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#define-the-schema-type"}),"Define the schema type")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#register-the-crd"}),"Register the CRD")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#register-the-handler-for-this-chaos-object"}),"Register the handler for this chaos object")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#make-the-docker-image"}),"Make the Docker image")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#run-chaos"}),"Run chaos"))),Object(r.b)("h2",{id:"define-the-schema-type"},"Define the schema type"),Object(r.b)("p",null,"To define the schema type for the new chaos object, add ",Object(r.b)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the api directory ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/api/v1alpha1"}),Object(r.b)("inlineCode",{parentName:"a"},"api/v1alpha1"))," and fill it with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:base\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n\n    // Scheduler defines some schedule rules to control the running time of the chaos experiment about time.\n    // +optional\n    Scheduler *SchedulerSpec `json:"scheduler,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n')),Object(r.b)("p",null,"With this file added, the HelloWorldChaos schema type is defined. The structure of it can be described as the YAML file below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <name-of-this-resource>\n  namespace: <ns-of-this-resource>\nspec:\n  duration: <duration-of-every-action>\n  scheduler:\n    cron: <the-cron-job-definition-of-this-chaos>\nstatus:\n  phase: <phase-of-this-resource>\n  ...\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"make generate")," will generate boilerplate functions for it, which is needed to integrate the resource in the Chaos Mesh."),Object(r.b)("h2",{id:"register-the-crd"},"Register the CRD"),Object(r.b)("p",null,"The HelloWorldChaos object is a custom resource object in Kubernetes. This means you need to register the corresponding CRD in the Kubernetes API. Run ",Object(r.b)("inlineCode",{parentName:"p"},"make yaml"),", then the CRD will be generated in ",Object(r.b)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),". In order to combine all these YAML file into ",Object(r.b)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),", modify ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/config/crd/kustomization.yaml"}),"kustomization.yaml")," by adding the corresponding line as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # this is the new line\n")),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"make yaml")," again, and the definition of HelloWorldChaos will show in ",Object(r.b)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),". You can check it through ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")),Object(r.b)("h2",{id:"register-the-handler-for-this-chaos-object"},"Register the handler for this chaos object"),Object(r.b)("p",null,"Create file ",Object(r.b)("inlineCode",{parentName:"p"},"controllers/helloworldchaos/types.go")," and fill it with following codes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package helloworldchaos\n\nimport (\n    "context"\n\n    "k8s.io/apimachinery/pkg/runtime"\n    ctrl "sigs.k8s.io/controller-runtime"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/pkg/router"\n    ctx "github.com/chaos-mesh/chaos-mesh/pkg/router/context"\n    end "github.com/chaos-mesh/chaos-mesh/pkg/router/endpoint"\n)\n\ntype endpoint struct {\n    ctx.Context\n}\n\nfunc (e *endpoint) Apply(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    e.Log.Info("Hello World!")\n    return nil\n}\n\nfunc (e *endpoint) Recover(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    return nil\n}\n\nfunc (e *endpoint) Object() v1alpha1.InnerObject {\n    return &v1alpha1.HelloWorldChaos{}\n}\n\nfunc init() {\n    router.Register("helloworldchaos", &v1alpha1.HelloWorldChaos{}, func(obj runtime.Object) bool {\n        return true\n    }, func(ctx ctx.Context) end.Endpoint {\n        return &endpoint{\n            Context: ctx,\n        }\n    })\n}\n')),Object(r.b)("p",null,"We should also import ",Object(r.b)("inlineCode",{parentName:"p"},"github.com/chaos-mesh/chaos-mesh/controllers/helloworldchaos")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"cmd/controller-manager/main.go"),", then it will register on the route table when the controller starts up."),Object(r.b)("h2",{id:"make-the-docker-image"},"Make the Docker image"),Object(r.b)("p",null,"Having the object successfully added, you can make a Docker image:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"make\n")),Object(r.b)("p",null,"Then push it to your registry:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"make docker-push\n")),Object(r.b)("p",null,"If your Kubernetes cluster is deployed by Kind, you need to load images to Kind:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n")),Object(r.b)("h2",{id:"run-chaos"},"Run chaos"),Object(r.b)("p",null,"You are almost there. In this step, you will pull the image and apply it for testing."),Object(r.b)("p",null,"Before you pull any image for Chaos Mesh (using ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"}),"values.yaml")," of the helm template to replace the default image with what you just pushed to your local registry."),Object(r.b)("p",null,"In this case, the template uses ",Object(r.b)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default target registry, so you need to replace it with the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY"),"'s value(default ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:5000"),"), as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"clusterScoped: true\n\n# Also see clusterScoped and controllerManager.serviceAccount\nrbac:\n  create: true\n\ncontrollerManager:\n  serviceAccount: chaos-controller-manager\n  ...\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),Object(r.b)("p",null,"Now take the following steps to run chaos:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create namespace chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get the related custom resource type for Chaos Mesh:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f manifests/\n")),Object(r.b)("p",{parentName:"li"},"You can see CRD ",Object(r.b)("inlineCode",{parentName:"p"},"helloworldchaos")," is created:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),Object(r.b)("p",{parentName:"li"},"Now you can get the CRD using the command below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For helm 3.X"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For helm 2.X"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")))),Object(r.b)("p",{parentName:"li"},"To verify your installation, get pods from the ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing")," namespace:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"Arguments ",Object(r.b)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," are used to to support network chaos on kind."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create ",Object(r.b)("inlineCode",{parentName:"p"},"chaos.yaml")," in any location with the lines below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\nspec: {}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply the chaos:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f /path/to/chaos.yaml\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get HelloWorldChaos -n chaos-testing\n")),Object(r.b)("p",{parentName:"li"},"Now you should be able to check the ",Object(r.b)("inlineCode",{parentName:"p"},"Hello World!")," result in the log of of ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),Object(r.b)("p",{parentName:"li"},"The log is as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'2020-09-07T09:21:29.301Z        INFO    controllers.HelloWorldChaos     Hello World!    {"reconciler": "helloworldchaos"}\n2020-09-07T09:21:29.308Z        DEBUG   controller-runtime.controller   Successfully Reconciled {"controller": "helloworldchaos", "request": "chaos-testing/hello-world"}\n')),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes. You can check it by executing ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-testing"),".")))),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Congratulations! You have just added a chaos type for Chaos Mesh successfully. Let us know if you run into any issues during the process. If you feel like doing other types of contributions, refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/development_guides/add_facilities_to_chaos_daemon"}),"Add facilities to chaos daemon"),"."))}p.isMDXComponent=!0}}]);
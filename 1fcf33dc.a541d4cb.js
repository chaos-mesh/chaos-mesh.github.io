(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),h=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||r;return n?o.a.createElement(d,s(s({ref:t},i),{},{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),r=(n(0),n(205)),c={id:"develop_a_new_chaos",title:"Develop a New Chaos",sidebar_label:"Develop a New Chaos"},s={unversionedId:"development_guides/develop_a_new_chaos",id:"version-1.0.1/development_guides/develop_a_new_chaos",isDocsHomePage:!1,title:"Develop a New Chaos",description:'After preparing the development environment, let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:',source:"@site/versioned_docs/version-1.0.1/development_guides/dev_hello_world.md",slug:"/development_guides/develop_a_new_chaos",permalink:"/docs/development_guides/develop_a_new_chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.1/development_guides/dev_hello_world.md",version:"1.0.1",sidebar_label:"Develop a New Chaos",sidebar:"version-1.0.1/docs",previous:{title:"Set up the development environment",permalink:"/docs/development_guides/set_up_the_development_environment"},next:{title:"FAQs",permalink:"/docs/faqs"}},l=[{value:"Define the schema type",id:"define-the-schema-type",children:[]},{value:"Register the CRD",id:"register-the-crd",children:[]},{value:"Register the handler for this chaos object",id:"register-the-handler-for-this-chaos-object",children:[]},{value:"Make the Docker image",id:"make-the-docker-image",children:[]},{value:"Run chaos",id:"run-chaos",children:[]},{value:"Next steps",id:"next-steps",children:[]}],i={rightToc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development_guides/set_up_the_development_environment"}),"preparing the development environment"),', let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#define-the-schema-type"}),"Define the schema type")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#register-the-crd"}),"Register the CRD")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#register-the-handler-for-this-chaos-object"}),"Register the handler for this chaos object")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#make-the-docker-image"}),"Make the Docker image")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#run-chaos"}),"Run chaos"))),Object(r.b)("h2",{id:"define-the-schema-type"},"Define the schema type"),Object(r.b)("p",null,"To define the schema type for the new chaos object, add ",Object(r.b)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the api directory ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/api/v1alpha1"}),Object(r.b)("inlineCode",{parentName:"a"},"/api/v1alpha1"))," and fill it with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:base\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n\n    // Scheduler defines some schedule rules to control the running time of the chaos experiment about time.\n    // +optional\n    Scheduler *SchedulerSpec `json:"scheduler,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n')),Object(r.b)("p",null,"With this file added, the HelloWorldChaos schema type is defined. The structure of it can be described as the YAML file below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <name-of-this-resource>\n  namespace: <ns-of-this-resource>\nspec:\n  duration: <duration-of-every-action>\n  scheduler:\n    cron: <the-cron-job-definition-of-this-chaos>\nstatus:\n  phase: <phase-of-this-resource>\n  ...\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"make generate")," will generate boilerplate functions for it, which is needed to integrate the resource in the Chaos Mesh."),Object(r.b)("h2",{id:"register-the-crd"},"Register the CRD"),Object(r.b)("p",null,"The HelloWorldChaos object is a custom resource object in Kubernetes. This means you need to register the corresponding CRD in the Kubernetes API. Run ",Object(r.b)("inlineCode",{parentName:"p"},"make yaml"),", then the CRD will be generated in ",Object(r.b)("inlineCode",{parentName:"p"},"/config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),". In order to combine all these YAML file into ",Object(r.b)("inlineCode",{parentName:"p"},"/manifests/crd.yaml"),", modify ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/config/crd/kustomization.yaml"}),"kustomization.yaml")," by adding the corresponding line as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"resources:\n- bases/chaos-mesh.org_podchaos.yaml\n- bases/chaos-mesh.org_networkchaos.yaml\n- bases/chaos-mesh.org_iochaos.yaml\n- bases/chaos-mesh.org_helloworldchaos.yaml  # this is the new line\n")),Object(r.b)("p",null,"Then the definition of HelloWorldChaos will show in ",Object(r.b)("inlineCode",{parentName:"p"},"/manifests/crd.yaml"),". You can check it through ",Object(r.b)("inlineCode",{parentName:"p"},"git diff")),Object(r.b)("h2",{id:"register-the-handler-for-this-chaos-object"},"Register the handler for this chaos object"),Object(r.b)("p",null,"Create file ",Object(r.b)("inlineCode",{parentName:"p"},"/controllers/helloworldchaos/endpoint.go")," and fill it with following codes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package helloworldchaos\n\nimport (\n    "context"\n\n    "k8s.io/apimachinery/pkg/runtime"\n    ctrl "sigs.k8s.io/controller-runtime"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/pkg/router"\n    ctx "github.com/chaos-mesh/chaos-mesh/pkg/router/context"\n    end "github.com/chaos-mesh/chaos-mesh/pkg/router/endpoint"\n)\n\ntype endpoint struct {\n    ctx.Context\n}\n\nfunc (e *endpoint) Apply(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    e.Log.Info("Hello World!")\n    return nil\n}\n\nfunc (e *endpoint) Recover(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    return nil\n}\n\nfunc (e *endpoint) Object() v1alpha1.InnerObject {\n    return &v1alpha1.HelloWorldChaos{}\n}\n\nfunc init() {\n    router.Register("helloworldchaos", &v1alpha1.HelloWorldChaos{}, func(obj runtime.Object) bool {\n        return true\n    }, func(ctx ctx.Context) end.Endpoint {\n        return &endpoint{\n            Context: ctx,\n        }\n    })\n}\n')),Object(r.b)("p",null,"We should also import ",Object(r.b)("inlineCode",{parentName:"p"},"github.com/chaos-mesh/chaos-mesh/controllers/helloworldchaos")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"/cmd/controller-manager/main.go"),", then it will register on the route table when the controller starts up."),Object(r.b)("h2",{id:"make-the-docker-image"},"Make the Docker image"),Object(r.b)("p",null,"Having the object successfully added, you can make a Docker image and push it to your registry:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make\nmake docker-push\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"The default ",Object(r.b)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," is ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:5000"),", which is preset in ",Object(r.b)("inlineCode",{parentName:"p"},"hack/kind-cluster-build.sh"),". You can overwrite it to any registry to which you have access permission.")),Object(r.b)("h2",{id:"run-chaos"},"Run chaos"),Object(r.b)("p",null,"You are almost there. In this step, you will pull the image and apply it for testing."),Object(r.b)("p",null,"Before you pull any image for Chaos Mesh (using ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"}),"values.yaml")," of helm template to replace the default image with what you just pushed to your local registry."),Object(r.b)("p",null,"In this case, the template uses ",Object(r.b)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default target registry, so you need to replace it with ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:5000"),", as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"clusterScoped: true\n\n# Also see clusterScoped and controllerManager.serviceAccount\nrbac:\n  create: true\n\ncontrollerManager:\n  serviceAccount: chaos-controller-manager\n  ...\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),Object(r.b)("p",null,"Now take the following steps to run chaos:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get the related custom resource type for Chaos Mesh:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f manifests/\nkubectl get crd podchaos.chaos-mesh.org\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\nkubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"The arguments ",Object(r.b)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," is used to to support network chaos on kind.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create ",Object(r.b)("inlineCode",{parentName:"p"},"chaos.yaml")," in any location with the lines below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\nspec: {}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply the chaos:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f /path/to/chaos.yaml\nkubectl get HelloWorldChaos -n chaos-testing\n")),Object(r.b)("p",{parentName:"li"},"Now you should be able to check the ",Object(r.b)("inlineCode",{parentName:"p"},"Hello World!")," result in the log:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes, you can check it by executing ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get po -n chaos-testing"),".")))),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Congratulations! You have just added a chaos type for Chaos Mesh successfully. Let us know if you run into any issues during the process. If you feel like doing other types of contributions, refer to Add facilities to chaos daemon (WIP)."))}h.isMDXComponent=!0}}]);
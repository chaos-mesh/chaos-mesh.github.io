"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5835],{89400:function(e,t,a){var n=a(91262),o=a(73148),l=a(67294),r=a(56871);t.Z=function(e){var t=e.children,a=e.className,s=function(e){var t=e.children;return l.createElement("div",{style:{marginBottom:"1.25rem"}},l.createElement(o.Z,{className:a},t))};return l.createElement(n.Z,{fallback:l.createElement(s,null,t)},(function(){var e=(0,r.p)(),a="latest"===e?"":"--version v"+function(e){if("2"===e[0])return e;var t=e.slice(0,3);return(parseFloat(t)-.7).toString()+e.slice(3)}(e);return l.createElement(s,null,t.replace("--version latest",a).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return i}});var n=a(91262),o=a(73148),l=a(67294),r=a(52263),s=a(28084),i=function(){var e=(0,r.Z)().siteConfig,t=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&a)return"current"===a?"latest":a;if(t.includes("/docs/next"))return"latest";var n=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions,o=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||o};t.Z=function(e){var t=e.children,a=e.className,r=function(e){var t=e.children;return l.createElement("div",{style:{marginBottom:"1.25rem"}},l.createElement(o.Z,{className:a},t))};return l.createElement(n.Z,{fallback:l.createElement(r,null,t)},(function(){var e=i(),a="latest"===e?t:t.replace("latest","v"+e);return l.createElement(r,null,a)}))}},73148:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(87462),o=a(67294),l=a(86010),r=a(24544),s=a(10195),i=a(87594),c=a.n(i),p=a(83583),h=a(24973),m="codeBlockContainer_2gih",d="codeBlockContent_3z4W",u="codeBlockTitle_1Kb7",g="codeBlock_6upA",k="codeBlockWithTitle_xy-i",N="copyButton_2e3i",f="codeBlockLines_xlV7",y=a(941),v=/{([\d,-]+)}/,b=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function C(e){var t=e.children,a=e.className,i=e.metastring,C=e.title,w=(0,y.LU)().prism,x=(0,o.useState)(!1),j=x[0],T=x[1],H=(0,o.useState)(!1),S=H[0],W=H[1];(0,o.useEffect)((function(){W(!0)}),[]);var R=(0,y.bc)(i)||C,D=(0,o.useRef)(null),M=[],E=(0,p.Z)(),I=Array.isArray(t)?t.join(""):t;if(i&&v.test(i)){var A=i.match(v)[1];M=c()(A).filter((function(e){return e>0}))}var B=a&&a.replace(/language-/,"");!B&&w.defaultLanguage&&(B=w.defaultLanguage);var Z=I.replace(/\n$/,"");if(0===M.length&&void 0!==B){for(var P,_="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"]);case"jsx":case"tsx":return b(["js","jsBlock","jsx"]);case"html":return b(["js","jsBlock","html"]);case"python":case"py":return b(["python"]);default:return b()}}(B),O=I.replace(/\n$/,"").split("\n"),z=0;z<O.length;){var G=z+1,Y=O[z].match(L);if(null!==Y){switch(Y.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":_+=G+",";break;case"highlight-start":P=G;break;case"highlight-end":_+=P+"-"+(G-1)+","}O.splice(z,1)}else z+=1}M=c()(_),Z=O.join("\n")}var V=function(){(0,s.Z)(Z),T(!0),setTimeout((function(){return T(!1)}),2e3)};return o.createElement(r.ZP,(0,n.Z)({},r.lG,{key:String(S),theme:E,code:Z,language:B}),(function(e){var t,a=e.className,r=e.style,s=e.tokens,i=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{className:m},R&&o.createElement("div",{style:r,className:u},R),o.createElement("div",{className:(0,l.Z)(d,B)},o.createElement("div",{tabIndex:0,className:(0,l.Z)(a,g,"thin-scrollbar",(t={},t[k]=R,t))},o.createElement("div",{className:f,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return M.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return o.createElement("span",(0,n.Z)({key:t},c({token:e,key:t})))})))})))),o.createElement("button",{ref:D,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(N),onClick:V},j?o.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},91742:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=a(89400),s=["components"],i={title:"Add New Chaos Experiment Type",sidebar_label:"Add New Chaos Experiment Type"},c=void 0,p={unversionedId:"add-new-chaos-experiment-type",id:"add-new-chaos-experiment-type",isDocsHomePage:!1,title:"Add New Chaos Experiment Type",description:"This document describes how to add a new chaos experiment type.",source:"@site/docs/add-new-chaos-experiment-type.md",sourceDirName:".",slug:"/add-new-chaos-experiment-type",permalink:"/docs/next/add-new-chaos-experiment-type",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/add-new-chaos-experiment-type.md",tags:[],version:"current",frontMatter:{title:"Add New Chaos Experiment Type",sidebar_label:"Add New Chaos Experiment Type"},sidebar:"docs",previous:{title:"Configure the Development Environment",permalink:"/docs/next/configure-development-environment"},next:{title:"Extend Chaos Daemon Interface",permalink:"/docs/next/extend-chaos-daemon-interface"}},h=[{value:"Step 1: Define the schema type",id:"step-1-define-the-schema-type",children:[]},{value:"Step 2: Register the CRD",id:"step-2-register-the-crd",children:[]},{value:"Step 3: Register the event handler for this chaos object",id:"step-3-register-the-event-handler-for-this-chaos-object",children:[]},{value:"Step 4: Build the Docker image",id:"step-4-build-the-docker-image",children:[]},{value:"Step 5: Run the chaos experiment",id:"step-5-run-the-chaos-experiment",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],m={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document describes how to add a new chaos experiment type."),(0,l.kt)("p",null,"The following walks you through an example of HelloWorldChaos, a new chaos experiment type that prints ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," to the log. The steps include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 1: Define the schema type"),(0,l.kt)("li",{parentName:"ul"},"Step 2: Register the CRD"),(0,l.kt)("li",{parentName:"ul"},"Step 3: Register the event handler for this chaos object"),(0,l.kt)("li",{parentName:"ul"},"Step 4: Build the Docker image"),(0,l.kt)("li",{parentName:"ul"},"Step 5: Run the chaos experiment")),(0,l.kt)("h2",{id:"step-1-define-the-schema-type"},"Step 1: Define the schema type"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the API directory ",(0,l.kt)("inlineCode",{parentName:"p"},"api/v1alpha1")," with the following content:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:base\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,l.kt)("p",{parentName:"li"},"This file defines the schema type of HelloWorldChaos, which can be described in a YAML file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh. rg/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <resource name>\n  name: <namespace>\nspec:\n  duration: <duration>\nstatus:\n  experiment: <experimental status>\n...\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"make generate")," in the root directory of Chaos Mesh, which generates a boilerplate for Chaos Mesh to compile."))),(0,l.kt)("h2",{id:"step-2-register-the-crd"},"Step 2: Register the CRD"),(0,l.kt)("p",null,"You need to register the CRD (Custom Resource Definition) of HelloWorldChaos to interact it with Kubernetes API."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"make yaml")," in the root directory. The generated YAML file is at ",(0,l.kt)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To combine this YAML file into ",(0,l.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),", add a new line in ",(0,l.kt)("inlineCode",{parentName:"p"},"config/crd/kustomization.yaml"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # This is the new line\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"make yaml")," again. You can see the definition of HelloWorldChaos in ",(0,l.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml"),". To confirm, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"git diff")," command."))),(0,l.kt)("h2",{id:"step-3-register-the-event-handler-for-this-chaos-object"},"Step 3: Register the event handler for this chaos object"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a new file ",(0,l.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloworldchaos/types.go")," with the following content:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n\n    "github.com/go-logr/logr"\n    "go.uber.org/fx"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n    "github.com/chaos-mesh/chaos-mesh/controllers/common"\n    "github.com/chaos-mesh/chaos-mesh/controllers/utils/chaosdaemon"\n)\n\ntype Impl struct {\n    client.Client\n    Log logr.Logger\n    decoder *utils.ContianerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Hello world!")\n    return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Goodbye world!")\n    return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContianerRecordDecoder) *common.ChaosImplPair {\n    return &common.ChaosImplPair{\n        Name:   "helloworldchaos",\n        Object: &v1alpha1.HelloWorldChaos{},\n        Impl: &Impl{\n            Client: c,\n            Log:    log.WithName("helloworldchaos"),\n            decoder: decoder,\n        },\n        ObjectList: &v1alpha1.HelloWorldChaosList{},\n    }\n}\n\nvar Module = fx.Provide(\n    fx.Annotated{\n        Group:  "impl",\n        Target: NewImpl,\n    },\n)\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Chaos Mesh uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uber-go/fx"},"fx")," library for dependency injection. To register HelloWorldChaos in the Controller Manager, add a line in ",(0,l.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/fx.go"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    ...\n    gcpchaos.Module,\n    stresschaos.Module,\n    jvmchaos.Module,\n    timechaos.Module,\n    helloworldchaos.Module //Add a new line. Make sure you have imported HelloWorldChaos to this file first.\n")))),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"controllers/types/types.go"),", add the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```go\n    ...\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "timechaos",\n            Object: &v1alpha1.TimeChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "gcpchaos",\n            Object: &v1alpha1.GCPChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "helloworldchaos",\n            Object: &v1alpha1.HelloWorldChaos{},\n        },\n    },\n```\n')),(0,l.kt)("h2",{id:"step-4-build-the-docker-image"},"Step 4: Build the Docker image"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build the Docker image:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Push the image to your local Docker Registry:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you deploy Kubernetes clusters using kind, then you need to load images into kind:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n")))),(0,l.kt)("h2",{id:"step-5-run-the-chaos-experiment"},"Step 5: Run the chaos experiment"),(0,l.kt)("p",null,"In this step, you need to deploy Chaos Mesh with your latest changes to test HelloWorldChaos."),(0,l.kt)("p",null,"Before you pull any image for Chaos Mesh (using ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify the helm template ",(0,l.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," to replace the default image with what you just pushed to your local Docker registry."),(0,l.kt)("p",null,"The templates in Chaos Mesh use ",(0,l.kt)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default Registry. You need to set the path with the environment variable of ",(0,l.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," (The default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"), as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"controllerManager:\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),(0,l.kt)("p",null,"After you update the template, try running HelloWorldChaos."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Register the CRD in your cluster:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f manifests/crd.yaml\n")),(0,l.kt)("p",{parentName:"li"},"You can see HelloWorldChaos is created from the output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-log"},"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),(0,l.kt)("p",{parentName:"li"},"Now you can get the CRD of HelloWorldChaos using the command below:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy Chaos Mesh:"),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest"),(0,l.kt)("p",{parentName:"li"},"To verify the deployment is successful, you can check all Pods in the ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Arguments ",(0,l.kt)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," are used to run NeteworkChaos on kind.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy the Pod for testing:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),(0,l.kt)("p",{parentName:"li"},"Make sure the Pod for testing works properly.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," file in any location with the following content:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: one\n  duration: 1h\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the chaos experiment:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get HelloWorldChaos -n chaos-testing\n")),(0,l.kt)("p",{parentName:"li"},"Now you can see ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the logs of ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),(0,l.kt)("p",{parentName:"li"},"Example output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-24T06:42:26.858Z        INFO    records apply chaos     {"id": "chaos-testing/chaos-daemon-vsmc5"}\n2021-06-24T06:42:26.858Z        INFO    helloworldchaos Hello World!\n')),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes. You can check it by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-testing"),"."))))),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"If you encounter any problems during the process, create an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," in the Chaos Mesh repository."),(0,l.kt)("p",null,"If you want to dive deep into developing new chaos experiment types, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/extend-chaos-daemon-interface"},"Extend Chaos Daemon interface"),"."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2706],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=i(o),d=n,u=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return o?a.createElement(u,l(l({ref:t},h),{},{components:o})):a.createElement(u,l({ref:t},h))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<r;i++)l[i]=o[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8794:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var a=o(2122),n=o(9756),r=(o(7294),o(3905)),l={id:"develop_a_new_chaos",title:"Develop a New Chaos",sidebar_label:"Develop a New Chaos"},s=void 0,c={unversionedId:"development_guides/develop_a_new_chaos",id:"version-0.9.1/development_guides/develop_a_new_chaos",isDocsHomePage:!1,title:"Develop a New Chaos",description:'After preparing the development environment, let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:',source:"@site/versioned_docs/version-0.9.1/development_guides/dev_hello_world.md",sourceDirName:"development_guides",slug:"/development_guides/develop_a_new_chaos",permalink:"/docs/0.9.1/development_guides/develop_a_new_chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/development_guides/dev_hello_world.md",version:"0.9.1",frontMatter:{id:"develop_a_new_chaos",title:"Develop a New Chaos",sidebar_label:"Develop a New Chaos"},sidebar:"version-0.9.1/docs",previous:{title:"Set up the development environment",permalink:"/docs/0.9.1/development_guides/set_up_the_development_environment"},next:{title:"FAQs",permalink:"/docs/0.9.1/faqs"}},i=[{value:"Add the chaos object in controller",id:"add-the-chaos-object-in-controller",children:[]},{value:"Register the CRD",id:"register-the-crd",children:[]},{value:"Implement the schema type",id:"implement-the-schema-type",children:[]},{value:"Make the Docker image",id:"make-the-docker-image",children:[]},{value:"Run chaos",id:"run-chaos",children:[]},{value:"Next steps",id:"next-steps",children:[]}],h={toc:i};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.1/development_guides/set_up_the_development_environment"},"preparing the development environment"),', let\'s develop a new type of chaos, HelloWorldChaos, which only prints a "Hello World!" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#add-the-chaos-object-in-controller"},"Add the chaos object in controller")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#register-the-crd"},"Register the CRD")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#implement-the-schema-type"},"Implement the schema type")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#make-the-docker-image"},"Make the Docker image")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#run-chaos"},"Run chaos"))),(0,r.kt)("h2",{id:"add-the-chaos-object-in-controller"},"Add the chaos object in controller"),(0,r.kt)("p",null,"In Chaos Mesh, all chaos types are managed by the controller manager. To add a new chaos type, you need to start from adding the corresponding reconciler type in the controller, as instructed in the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the HelloWorldChaos object in the controller manager ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/cmd/controller-manager/main.go#L104"},"main.go"),"."),(0,r.kt)("p",{parentName:"li"},"You will notice existing chaos types such as PodChaos, NetworkChaos and IOChaos. Add the new type below them:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    if err = (&controllers.HelloWorldChaosReconciler{\n        Client: mgr.GetClient(),\n        Log:    ctrl.Log.WithName("controllers").WithName("HelloWorldChaos"),\n    }).SetupWithManager(mgr); err != nil {\n        setupLog.Error(err, "unable to create controller", "controller", "HelloWorldChaos")\n        os.Exit(1)\n    }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/controllers"},"controllers"),", create a ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworldchaos_controller.go")," file and edit it as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package controllers\n\nimport (\n  "github.com/go-logr/logr"\n\n  chaosmeshv1alpha1 "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n\n  ctrl "sigs.k8s.io/controller-runtime"\n  "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\n// HelloWorldChaosReconciler reconciles a HelloWorldChaos object\ntype HelloWorldChaosReconciler struct {\n  client.Client\n  Log logr.Logger\n}\n\n// +kubebuilder:rbac:groups=chaos-mesh.org,resources=helloworldchaos,verbs=get;list;watch;create;update;patch;delete\n// +kubebuilder:rbac:groups=chaos-mesh.org,resources=helloworldchaos/status,verbs=get;update;patch\n\nfunc (r *HelloWorldChaosReconciler) Reconcile(req ctrl.Request) (ctrl.Result, error) {\n  logger := r.Log.WithValues("reconciler", "helloworldchaos")\n\n  // the main logic of `HelloWorldChaos`, it prints a log `Hello World!` and returns nothing.\n  logger.Info("Hello World!")\n\n  return ctrl.Result{}, nil\n}\n\nfunc (r *HelloWorldChaosReconciler) SetupWithManager(mgr ctrl.Manager) error {\n// exports `HelloWorldChaos` object, which represents the yaml schema content the user applies.\nreturn ctrl.NewControllerManagedBy(mgr).\n  For(&chaosmeshv1alpha1.HelloWorldChaos{}).\n  Complete(r)\n}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"The comment ",(0,r.kt)("inlineCode",{parentName:"p"},"// +kubebuilder:rbac:groups=chaos-mesh.org...")," is an authority control mechanism that decides which account can access this reconciler. To make it accessible by the dashboard and chaos-controller-manager, you need to modify ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/templates/controller-manager-rbac.yaml"},"controller-manager-rbac.yaml")," accordingly:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiGroups: ['chaos-mesh.org']\n  resources:\n    - podchaos\n    - networkchaos\n    - iochaos\n    - helloworldchaos # Add this line in all chaos-mesh.org group\n  verbs: ['*']\n")),(0,r.kt)("h2",{id:"register-the-crd"},"Register the CRD"),(0,r.kt)("p",null,"The HelloWorldChaos object is a custom resource object in Kubernetes. This means you need to register the corresponding CRD in the Kubernetes API. To do this, modify ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/config/crd/kustomization.yaml"},"kustomization.yaml")," by adding the corresponding line as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # this is the new line\n")),(0,r.kt)("h2",{id:"implement-the-schema-type"},"Implement the schema type"),(0,r.kt)("p",null,"To implement the schema type for the new chaos object, add ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/api/v1alpha1"},"api directory")," and modify it as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n}\n\n// +kubebuilder:object:root=true\n\n// HelloWorldChaosList contains a list of HelloWorldChaos\ntype HelloWorldChaosList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata,omitempty"`\n    Items           []HelloWorldChaos `json:"items"`\n}\n\nfunc init() {\n    SchemeBuilder.Register(&HelloWorldChaos{}, &HelloWorldChaosList{})\n}\n')),(0,r.kt)("p",null,"With this file added, the HelloWorldChaos schema type is defined and can be called by the following YAML lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <name-of-this-resource>\n  namespace: <ns-of-this-resource>\n")),(0,r.kt)("h2",{id:"make-the-docker-image"},"Make the Docker image"),(0,r.kt)("p",null,"Having the object successfully added, you can make a Docker image and push it to your registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make\nmake docker-push\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", which is preset in ",(0,r.kt)("inlineCode",{parentName:"p"},"hack/kind-cluster-build.sh"),". You can overwrite it to any registry to which you have access permission.")),(0,r.kt)("h2",{id:"run-chaos"},"Run chaos"),(0,r.kt)("p",null,"You are almost there. In this step, you will pull the image and apply it for testing."),(0,r.kt)("p",null,"Before you pull any image for Chaos Mesh (using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"), modify ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"values.yaml")," of helm template to replace the default image with what you just pushed to your local registry."),(0,r.kt)("p",null,"In this case, the template uses ",(0,r.kt)("inlineCode",{parentName:"p"},"pingcap/chaos-mesh:latest")," as the default target registry, so you need to replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"clusterScoped: true\n\n# Also see clusterScoped and controllerManager.serviceAccount\nrbac:\n  create: true\n\ncontrollerManager:\n  serviceAccount: chaos-controller-manager\n  ...\n  image: localhost:5000/pingcap/chaos-mesh:latest\n  ...\nchaosDaemon:\n  image: localhost:5000/pingcap/chaos-daemon:latest\n  ...\ndashboard:\n  image: localhost:5000/pingcap/chaos-dashboard:latest\n  ...\n")),(0,r.kt)("p",null,"Now take the following steps to run chaos:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the related custom resource type for Chaos Mesh:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f manifests/\nkubectl get crd podchaos.chaos-mesh.org\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Chaos Mesh:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\nkubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,r.kt)("p",{parentName:"li"},"The arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," is used to to support network chaos on kind.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," in any location with the lines below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-testing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the chaos:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\nkubectl get HelloWorldChaos -n chaos-testing\n")),(0,r.kt)("p",{parentName:"li"},"Now you should be able to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," result in the log:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," is a random string generated by Kubernetes, you can check it by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get po -n chaos-testing"),".")))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Congratulations! You have just added a chaos type for Chaos Mesh successfully. Let us know if you run into any issues during the process. If you feel like doing other types of contributions, refer to Add facilities to chaos daemon (WIP)."))}p.isMDXComponent=!0}}]);
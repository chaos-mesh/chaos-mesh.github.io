"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8724],{25643:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var o=s(11527),l=s(7463);s(78939);const r={title:"Add a New Chaos Experiment Type"},a=void 0,t={id:"add-new-chaos-experiment-type",title:"Add a New Chaos Experiment Type",description:"This document describes how to add a new chaos experiment type.",source:"@site/versioned_docs/version-2.6.2/add-new-chaos-experiment-type.md",sourceDirName:".",slug:"/add-new-chaos-experiment-type",permalink:"/docs/add-new-chaos-experiment-type",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/add-new-chaos-experiment-type.md",tags:[],version:"2.6.2",frontMatter:{title:"Add a New Chaos Experiment Type"},sidebar:"docs",previous:{title:"Configure the Development Environment",permalink:"/docs/configure-development-environment"},next:{title:"Extend Chaos Daemon Interface",permalink:"/docs/extend-chaos-daemon-interface"}},c={},h=[{value:"Step 1: Define the schema of HelloWorldChaos",id:"step-1-define-the-schema-of-helloworldchaos",level:2},{value:"Step 2: Register the CRD",id:"step-2-register-the-crd",level:2},{value:"Step 3: Register the event handler for helloworldchaos objects",id:"step-3-register-the-event-handler-for-helloworldchaos-objects",level:2},{value:"Step 4: Build Docker images",id:"step-4-build-docker-images",level:2},{value:"Step 5: Run HelloWorldChaos",id:"step-5-run-helloworldchaos",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document describes how to add a new chaos experiment type."}),"\n",(0,o.jsxs)(n.p,{children:["The following walks you through an example of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"}),", a new chaos experiment type that prints ",(0,o.jsx)(n.code,{children:"Hello world!"})," to the log. The steps include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#step-1-define-the-schema-of-helloworldchaos",children:"Step 1: Define the schema of HelloWorldChaos"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#step-2-register-the-crd",children:"Step 2: Register the CRD"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#step-3-register-the-event-handler-for-helloworldchaos-objects",children:"Step 3: Register the event handler for helloworld objects"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#step-4-build-docker-images",children:"Step 4: Build Docker images"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#step-5-run-helloworldchaos",children:"Step 5: Run HelloWorldChaos"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-define-the-schema-of-helloworldchaos",children:"Step 1: Define the schema of HelloWorldChaos"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"helloworldchaos_types.go"})," to the ",(0,o.jsx)(n.code,{children:"api/v1alpha1"})," API directory with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package v1alpha1\n\nimport (\n        metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:experiment\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n        metav1.TypeMeta   `json:",inline"`\n        metav1.ObjectMeta `json:"metadata,omitempty"`\n\n        Spec   HelloWorldChaosSpec   `json:"spec"`\n        Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec defines the desired state of HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n        // ContainerSelector specifies the target for injection\n        ContainerSelector `json:",inline"`\n\n        // Duration represents the duration of the chaos\n        // +optional\n        Duration *string `json:"duration,omitempty"`\n\n        // RemoteCluster represents the remote cluster where the chaos will be deployed\n        // +optional\n        RemoteCluster string `json:"remoteCluster,omitempty"`\n}\n\n// HelloWorldChaosStatus defines the observed state of HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n        ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n        return map[string]interface{}{\n                ".": &obj.Spec.ContainerSelector,\n        }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This file defines the schema type of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"}),", which can be described in a YAML file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <resource name>\n  namespace: <namespace>\nspec:\n  duration: <duration>\n#...\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-register-the-crd",children:"Step 2: Register the CRD"}),"\n",(0,o.jsxs)(n.p,{children:["You need to register the CRD (Custom Resource Definition) of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," to interact it with Kubernetes API."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To combine the CRD into manifests/crd.yaml, append ",(0,o.jsx)(n.code,{children:"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"})," we generated in the previous step to ",(0,o.jsx)(n.code,{children:"config/crd/kustomization.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # This is the new line\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"make generate"})," in the root directory of Chaos Mesh, which generates a boilerplate of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," for Chaos Mesh to compile:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make generate\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you can see the definition of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," in ",(0,o.jsx)(n.code,{children:"manifests/crd.yaml"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-3-register-the-event-handler-for-helloworldchaos-objects",children:"Step 3: Register the event handler for helloworldchaos objects"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a new file ",(0,o.jsx)(n.code,{children:"controllers/chaosimpl/helloworldchaos/types.go"})," with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package helloworldchaos\n\nimport (\n        "context"\n\n        "github.com/go-logr/logr"\n        "go.uber.org/fx"\n        "sigs.k8s.io/controller-runtime/pkg/client"\n\n        "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n        impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n        "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n)\n\nvar _ impltypes.ChaosImpl = (*Impl)(nil)\n\ntype Impl struct {\n        client.Client\n        Log logr.Logger\n\n        decoder *utils.ContainerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n        impl.Log.Info("Hello world!")\n        return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n        impl.Log.Info("Goodbye world!")\n        return v1alpha1.NotInjected, nil\n}\n\n// NewImpl returns a new HelloWorldChaos implementation instance.\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n        return &impltypes.ChaosImplPair{\n                Name:   "helloworldchaos",\n                Object: &v1alpha1.HelloWorldChaos{},\n                Impl: &Impl{\n                        Client:  c,\n                        Log:     log.WithName("helloworldchaos"),\n                        decoder: decoder,\n                },\n                ObjectList: &v1alpha1.HelloWorldChaosList{},\n     }\n}\n\nvar Module = fx.Provide(\n         fx.Annotated{\n                 Group:  "impl",\n                 Target: NewImpl,\n         },\n)\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Chaos Mesh uses the ",(0,o.jsx)(n.a,{href:"https://github.com/uber-go/fx",children:"fx"})," library for dependency injection. To register ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," in the controller manager, add a line to ",(0,o.jsx)(n.code,{children:"controllers/chaosimpl/fx.go"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"var AllImpl = fx.Options(\n        gcpchaos.Module,\n        stresschaos.Module,\n        jvmchaos.Module,\n        timechaos.Module,\n        helloworldchaos.Module // Add a new line. Make sure you have imported helloworldchaos first.\n        //...\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then in ",(0,o.jsx)(n.code,{children:"controllers/types/types.go"}),", append the following content into ",(0,o.jsx)(n.code,{children:"ChaosObjects"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var ChaosObjects = fx.Supply(\n       //...\n       fx.Annotated{\n               Group: "objs",\n               Target: Object{\n                       Name:   "helloworldchaos",\n                       Object: &v1alpha1.HelloWorldChaos{},\n               },\n       },\n)\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-4-build-docker-images",children:"Step 4: Build Docker images"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Build the production images:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make image\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you deploy the Kubernetes cluster using minikube, then you need to load images into the cluster:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-5-run-helloworldchaos",children:"Step 5: Run HelloWorldChaos"}),"\n",(0,o.jsx)(n.p,{children:"In this step, you need to deploy Chaos Mesh with your latest changes to test HelloWorldChaos."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Register the CRD in your cluster:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl create -f manifests/crd.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can see ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," is created from the output:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can get the CRD of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"})," using the command below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get crd helloworldchaos.chaos-mesh.org\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy Chaos Mesh:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install chaos-mesh helm/chaos-mesh -n=chaos-mesh --set controllerManager.leaderElection.enabled=false,dashboard.securityMode=false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To verify the deployment is successful, you can check all Pods in the ",(0,o.jsx)(n.code,{children:"chaos-mesh"})," namespace:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get pods --namespace chaos-mesh -l app.kubernetes.io/instance=chaos-mesh\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy a deployment for testing, we can use an example echo server from minikube docs:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl create deployment hello-minikube --image=kicbase/echo-server:1.0\n"})}),"\n",(0,o.jsx)(n.p,{children:"Wait to see the pod is running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get pods\n"})}),"\n",(0,o.jsx)(n.p,{children:"Example output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"NAME                              READY   STATUS    RESTARTS   AGE\nhello-minikube-77b6f68484-dg4sw   1/1     Running   0          2m\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"hello.yaml"})," file with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-mesh\nspec:\n  selector:\n    labelSelectors:\n      app: hello-minikube\n  mode: one\n  duration: 1h\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f hello.yaml\n# helloworldchaos.chaos-mesh.org/hello-world created\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can check if ",(0,o.jsx)(n.code,{children:"chaos-controller-manager"})," has ",(0,o.jsx)(n.code,{children:"Hello world!"})," in its logs:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl logs -n chaos-mesh chaos-controller-manager-xxx\n"})}),"\n",(0,o.jsx)(n.p,{children:"Example output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:'2023-07-16T06:19:40.068Z INFO records records/controller.go:149 apply chaos {"id": "default/hello-minikube-77b6f68484-dg4sw/echo-server"}\n2023-07-16T06:19:40.068Z INFO helloworldchaos helloworldchaos/types.go:26 Hello world!\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,o.jsxs)(n.p,{children:["If you encounter any problems during the process, create an ",(0,o.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"issue"})," in the Chaos Mesh repository."]}),"\n",(0,o.jsxs)(n.p,{children:["In the next section, we'll learn more about how to extend the behavior of ",(0,o.jsx)(n.code,{children:"HelloWorldChaos"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},78939:(e,n,s)=>{s.d(n,{Z:()=>d});var o=s(32947),l=s(71396),r=s(64134),a=s(56090),t=s(45863),c=s.n(t),h=s(37170),i=s(11527);const d=e=>{let{children:n,className:s="language-bash"}=e;const{siteConfig:t}=(0,l.Z)(),{versions:d}=(0,r.eZ)("docusaurus-plugin-content-docs");return(0,i.jsx)(o.Z,{children:()=>{const e=(0,h.p)(t,d),o="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const n=e.slice(0,3);return"v"+(parseFloat(n)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,i.jsx)(a.Z,{className:s,children:n.replace("--version latest",o).trim()})}})}},37170:(e,n,s)=>{s.d(n,{Z:()=>h,p:()=>c});var o=s(32947),l=s(71396),r=s(64134),a=s(56090),t=s(11527);const c=(e,n)=>{const s=window.location.pathname;let o=window.localStorage.getItem("docs-preferred-version-default");if(s===e.baseUrl&&o)return"current"===o?"latest":o;if(s.includes("/docs/next"))return"latest";const l=n.find((e=>e.isLast)),r=n.find((e=>s.includes(e.name)));return r?r.name:l.name};const h=e=>{let{children:n,replaced:s="latest",isArchive:h=!1,className:i="language-bash"}=e;const{siteConfig:d}=(0,l.Z)(),{versions:p}=(0,r.eZ)("docusaurus-plugin-content-docs");return(0,t.jsx)(o.Z,{children:()=>{const e=c(d,p),o=h?n.replace(s,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?n:n.replace(s,"v"+e);return(0,t.jsx)(a.Z,{className:i,children:o})}})}}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2341],{31695:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=o(11527),r=o(7463),t=o(78939);const a={title:"Extend Chaos Daemon Interface"},l=void 0,c={id:"extend-chaos-daemon-interface",title:"Extend Chaos Daemon Interface",description:"In Add new chaos experiment type, you have added HelloWorldChaos, which can print Hello World! in the logs of Chaos Controller Manager. To enable the HelloWorldChaos to inject some faults into the target Pod, you need to extend interface for Chaos Daemon.",source:"@site/versioned_docs/version-2.5.2/extend-chaos-daemon-interface.md",sourceDirName:".",slug:"/extend-chaos-daemon-interface",permalink:"/docs/2.5.2/extend-chaos-daemon-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/extend-chaos-daemon-interface.md",tags:[],version:"2.5.2",frontMatter:{title:"Extend Chaos Daemon Interface"},sidebar:"docs",previous:{title:"Add New Chaos Experiment Type",permalink:"/docs/2.5.2/add-new-chaos-experiment-type"},next:{title:"Extend Chaosd",permalink:"/docs/2.5.2/extend-chaosd"}},i={},h=[{value:"Selector",id:"selector",level:2},{value:"Implement the gRPC interface",id:"implement-the-grpc-interface",level:2},{value:"Verify the experiment",id:"verify-the-experiment",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/docs/2.5.2/add-new-chaos-experiment-type",children:"Add new chaos experiment type"}),", you have added HelloWorldChaos, which can print ",(0,s.jsx)(n.code,{children:"Hello World!"})," in the logs of Chaos Controller Manager. To enable the HelloWorldChaos to inject some faults into the target Pod, you need to extend interface for Chaos Daemon."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It's recommended to read ",(0,s.jsx)(n.a,{href:"/docs/2.5.2/#architecture-overview",children:"the architecture of Chaos Mesh"})," before you go forward."]})}),"\n",(0,s.jsx)(n.p,{children:"This document covers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#selector",children:"Selector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#implement-the-grpc-interface",children:"Implement the gRPC interface"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#verify-the-experiment",children:"Verify the experiment"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#next-steps",children:"Next steps"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"selector",children:"Selector"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"api/v1alpha1/helloworldchaos_type.go"}),", you have defined ",(0,s.jsx)(n.code,{children:"HelloWorldSpec"}),", which includes ",(0,s.jsx)(n.code,{children:"ContainerSelector"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n...\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In Chaos Mesh, Selector is used to define the scope of a chaos experiment, the target namespace, annotation, label, etc. Selector can also be some more specific values (for example, AWSSelector in AWSChaos). Usually, each chaos experiment requires only one Selector, with exceptions such as NetworkChaos because it sometimes needs two Selectors as two objects for network partition."}),"\n",(0,s.jsx)(n.h2,{id:"implement-the-grpc-interface",children:"Implement the gRPC interface"}),"\n",(0,s.jsx)(n.p,{children:"To allow Chaos Daemon to accept the requests from Chaos Controller Manager, you need to implement a new gRPC interface."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the RPC in ",(0,s.jsx)(n.code,{children:"pkg/chaosdaemon/pb/chaosdaemon.proto"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-proto",children:"service chaosDaemon {\n   ...\n\n   rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n   string container_id = 1;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You need to update the Golang code generated by this proto file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make proto\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Implement gRPC services in Chaos Daemon."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"pkg/chaosdaemon"})," directory, create a file named ",(0,s.jsx)(n.code,{children:"helloworld_server.go"})," with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package chaosdaemon\n\nimport (\n   "context"\n   "fmt"\n\n   "github.com/golang/protobuf/ptypes/empty"\n\n   "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *DaemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n   log := s.getLoggerFromContext(ctx)\n   log.Info("ExecHelloWorldChaos", "request", req)\n\n   pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n   if err != nil {\n      return nil, err\n   }\n\n   cmd := bpm.DefaultProcessBuilder("sh", "-c", fmt.Sprintf("ps aux")).\n      SetNS(pid, bpm.MountNS).\n      SetContext(ctx).\n      Build(ctx)\n   out, err := cmd.Output()\n   if err != nil {\n      return nil, err\n   }\n   if len(out) != 0 {\n      log.Info("cmd output", "output", string(out))\n   }\n\n   return &empty.Empty{}, nil\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.code,{children:"chaos-daemon"})," receives the ",(0,s.jsx)(n.code,{children:"ExecHelloWorldChaos"})," request, you can see a list of processes in the current container."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send a gRPC request when applying the chaos experiment."}),"\n",(0,s.jsxs)(n.p,{children:["Each chaos experiment has its life cycle: ",(0,s.jsx)(n.code,{children:"apply"})," and then ",(0,s.jsx)(n.code,{children:"recover"}),". However, there are some chaos experiments that cannot be recovered by default (for example, PodKill in PodChaos, and HelloWorldChaos). These are called OneShot experiments. You can find ",(0,s.jsx)(n.code,{children:"+chaos-mesh:oneshot=true"})," in the file that defines the schema type of chaos experiment type."]}),"\n",(0,s.jsxs)(n.p,{children:["Chaos Controller Manager needs to send a request to Chaos Daemon when HelloWorldChaos is in ",(0,s.jsx)(n.code,{children:"recover"}),". To do this, you need to modify ",(0,s.jsx)(n.code,{children:"controllers/chaosimpl/helloordchaos/types.go"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package helloworldchaos\n\nimport (\n   "context"\n\n   "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n   impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n   "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n   "github.com/go-logr/logr"\n   "go.uber.org/fx"\n   "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\ntype Impl struct {\n   client.Client\n   Log     logr.Logger\n   decoder *utils.ContainerRecordDecoder\n}\n\n// Apply applies KernelChaos\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   impl.Log.Info("Apply helloworld chaos")\n   decodedContainer, err := impl.decoder.DecodeContainerRecord(ctx, records[index], obj)\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n   pbClient := decodedContainer.PbClient\n   containerId := decodedContainer.ContainerId\n\n   _, err = pbClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n   \tContainerId: containerId,\n   })\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n\n   return v1alpha1.Injected, nil\n}\n\n// Recover means the reconciler recovers the chaos action\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   mpl.Log.Info("Recover helloworld chaos")\n   return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n   return &impltypes.ChaosImplPair{\n      Name:   "helloworldchaos",\n      Object: &v1alpha1.HelloWorldChaos{},\n      Impl: &Impl{\n         Client:  c,\n         Log:     log.WithName("helloworldchaos"),\n         decoder: decoder,\n      },\n      ObjectList: &v1alpha1.HelloWorldChaosList{},\n   }\n}\n\nvar Module = fx.Provide(\n   fx.Annotated{\n      Group:  "impl",\n      Target: NewImpl,\n   },\n)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In this chaos experiment, there is no need to recover the chaos action. This is because HelloWorldChaos is a OneShot experiment. For the chaos experiment type you developed, you can implement the logic of the recovery function as needed."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verify-the-experiment",children:"Verify the experiment"}),"\n",(0,s.jsx)(n.p,{children:"To verify the experiment, perform the following steps."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the Docker image and push it to your local Registry. If the Kubernetes cluster is deployed using kind, you need to load the image to kind:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make image\nmake docker-push\nkind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update Chaos Mesh:"}),"\n",(0,s.jsx)(t.Z,{children:"helm upgrade chaos-mesh helm/chaos-mesh --namespace=chaos-mesh --version latest"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy the target Pod for testing. Skip this step if you have already deployed this Pod:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new YAML file with the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: busybox-helloworld-chaos\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: all\n  duration: 1h\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Apply the chaos experiment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f /path/to/helloworld.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the results. You can check several logs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the logs of Chaos Controller Manager:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:'2021-06-25T06:02:12.754Z        INFO    records apply chaos     {"id": "busybox/busybox-1/busybox"}\n2021-06-25T06:02:12.754Z        INFO    helloworldchaos Apply helloworld chaos\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the logs of Chaos Daemon:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl logs chaos-daemon-{pod-post-fix} -n chaos-mesh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:'2021-06-25T06:25:13.048Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://af1b99df3513c49c4cab4f12e468ed1d7a274fe53722bd883256d8f65bc9f681\\""}\n2021-06-25T06:25:13.050Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243383/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.056Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n2021-06-25T06:25:13.070Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://88f6a469e5da82b48dc1190de07a2641b793df1f4e543a5958e448119d1bec11\\""}\n2021-06-25T06:25:13.072Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243479/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.076Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can see ",(0,s.jsx)(n.code,{children:"ps aux"})," in two separate lines, which are corresponding to two different Pods."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If your cluster has multiple nodes, you will find more than one Chaos Daemon Pod. Try to check logs of every Chaos Daemon Pods and find which Pod is being called."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["If you encounter any problems in this process, create an ",(0,s.jsx)(n.a,{href:"https://github.com/pingcap/chaos-mesh/issues",children:"issue"})," in the Chaos Mesh repository."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are curious about how all of these come into effect, you can read the README files of different ",(0,s.jsx)(n.code,{children:"controllers"})," in the ",(0,s.jsx)(n.code,{children:"controller"})," directory to learn their functionalities. For example, ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/controllers/README.md",children:"controllers/README.md"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Now you are ready to become a Chaos Mesh developer! You are welcome to visit the ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," repository to find a ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/labels/good%20first%20issue",children:"good first issue"})," and get started!"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},78939:(e,n,o)=>{o.d(n,{Z:()=>d});var s=o(32947),r=o(71396),t=o(64134),a=o(56090),l=o(45863),c=o.n(l),i=o(37170),h=o(11527);const d=e=>{let{children:n,className:o="language-bash"}=e;const{siteConfig:l}=(0,r.Z)(),{versions:d}=(0,t.eZ)("docusaurus-plugin-content-docs");return(0,h.jsx)(s.Z,{children:()=>{const e=(0,i.p)(l,d),s="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const n=e.slice(0,3);return"v"+(parseFloat(n)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,h.jsx)(a.Z,{className:o,children:n.replace("--version latest",s).trim()})}})}},37170:(e,n,o)=>{o.d(n,{Z:()=>i,p:()=>c});var s=o(32947),r=o(71396),t=o(64134),a=o(56090),l=o(11527);const c=(e,n)=>{const o=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(o===e.baseUrl&&s)return"current"===s?"latest":s;if(o.includes("/docs/next"))return"latest";const r=n.find((e=>e.isLast)),t=n.find((e=>o.includes(e.name)));return t?t.name:r.name};const i=e=>{let{children:n,replaced:o="latest",isArchive:i=!1,className:h="language-bash"}=e;const{siteConfig:d}=(0,r.Z)(),{versions:p}=(0,t.eZ)("docusaurus-plugin-content-docs");return(0,l.jsx)(s.Z,{children:()=>{const e=c(d,p),s=i?n.replace(o,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?n:n.replace(o,"v"+e);return(0,l.jsx)(a.Z,{className:h,children:s})}})}}}]);
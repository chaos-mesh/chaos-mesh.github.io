"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[42341],{68070:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(8714),a=n(43205),r=n(73622),l=n(85881),s=n(59496),i=n(16682),c=n.n(i),p=n(62125);const m=e=>{let{children:t,className:n="language-bash"}=e;const{siteConfig:i}=(0,a.Z)(),{versions:m}=(0,r.eZ)("docusaurus-plugin-content-docs");return s.createElement(o.Z,null,(()=>{const e=(0,p.p)(i,m),o="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return s.createElement(l.Z,{className:n},t.replace("--version latest",o).trim())}))}},62125:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>i});var o=n(8714),a=n(43205),r=n(73622),l=n(85881),s=n(59496);const i=(e,t)=>{const n=window.location.pathname;let o=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&o)return"current"===o?"latest":o;if(n.includes("/docs/next"))return"latest";const a=t.find((e=>e.isLast)),r=t.find((e=>n.includes(e.name)));return r?r.name:a.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:m}=(0,a.Z)(),{versions:h}=(0,r.eZ)("docusaurus-plugin-content-docs");return s.createElement(o.Z,null,(()=>{const e=i(m,h),o=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return s.createElement(l.Z,{className:p},o)}))}},89286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(60795),a=(n(59496),n(49613)),r=n(68070);const l={title:"Extend Chaos Daemon Interface"},s=void 0,i={unversionedId:"extend-chaos-daemon-interface",id:"version-2.5.2/extend-chaos-daemon-interface",title:"Extend Chaos Daemon Interface",description:"In Add new chaos experiment type, you have added HelloWorldChaos, which can print Hello World! in the logs of Chaos Controller Manager. To enable the HelloWorldChaos to inject some faults into the target Pod, you need to extend interface for Chaos Daemon.",source:"@site/versioned_docs/version-2.5.2/extend-chaos-daemon-interface.md",sourceDirName:".",slug:"/extend-chaos-daemon-interface",permalink:"/docs/2.5.2/extend-chaos-daemon-interface",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/extend-chaos-daemon-interface.md",tags:[],version:"2.5.2",frontMatter:{title:"Extend Chaos Daemon Interface"},sidebar:"docs",previous:{title:"Add New Chaos Experiment Type",permalink:"/docs/2.5.2/add-new-chaos-experiment-type"},next:{title:"Extend Chaosd",permalink:"/docs/2.5.2/extend-chaosd"}},c={},p=[{value:"Selector",id:"selector",level:2},{value:"Implement the gRPC interface",id:"implement-the-grpc-interface",level:2},{value:"Verify the experiment",id:"verify-the-experiment",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.2/add-new-chaos-experiment-type"},"Add new chaos experiment type"),", you have added HelloWorldChaos, which can print ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the logs of Chaos Controller Manager. To enable the HelloWorldChaos to inject some faults into the target Pod, you need to extend interface for Chaos Daemon."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's recommended to read ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.2/architecture"},"Chaos Mesh architecture")," before you go forward.")),(0,a.kt)("p",null,"This document covers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#selector"},"Selector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#implement-the-grpc-interface"},"Implement the gRPC interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#verify-the-experiment"},"Verify the experiment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#next-steps"},"Next steps"))),(0,a.kt)("h2",{id:"selector"},"Selector"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"api/v1alpha1/helloworldchaos_type.go"),", you have defined ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorldSpec"),", which includes ",(0,a.kt)("inlineCode",{parentName:"p"},"ContainerSelector"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n...\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,a.kt)("p",null,"In Chaos Mesh, Selector is used to define the scope of a chaos experiment, the target namespace, annotation, label, etc. Selector can also be some more specific values (for example, AWSSelector in AWSChaos). Usually, each chaos experiment requires only one Selector, with exceptions such as NetworkChaos because it sometimes needs two Selectors as two objects for network partition."),(0,a.kt)("h2",{id:"implement-the-grpc-interface"},"Implement the gRPC interface"),(0,a.kt)("p",null,"To allow Chaos Daemon to accept the requests from Chaos Controller Manager, you need to implement a new gRPC interface."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the RPC in ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/chaosdaemon/pb/chaosdaemon.proto"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"service chaosDaemon {\n   ...\n\n   rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n   string container_id = 1;\n}\n")),(0,a.kt)("p",{parentName:"li"},"You need to update the Golang code generated by this proto file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make proto\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement gRPC services in Chaos Daemon."),(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/chaosdaemon")," directory, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld_server.go")," with the following contents:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package chaosdaemon\n\nimport (\n   "context"\n   "fmt"\n\n   "github.com/golang/protobuf/ptypes/empty"\n\n   "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *DaemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n   log := s.getLoggerFromContext(ctx)\n   log.Info("ExecHelloWorldChaos", "request", req)\n\n   pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n   if err != nil {\n      return nil, err\n   }\n\n   cmd := bpm.DefaultProcessBuilder("sh", "-c", fmt.Sprintf("ps aux")).\n      SetNS(pid, bpm.MountNS).\n      SetContext(ctx).\n      Build(ctx)\n   out, err := cmd.Output()\n   if err != nil {\n      return nil, err\n   }\n   if len(out) != 0 {\n      log.Info("cmd output", "output", string(out))\n   }\n\n   return &empty.Empty{}, nil\n}\n')),(0,a.kt)("p",{parentName:"li"},"After ",(0,a.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecHelloWorldChaos")," request, you can see a list of processes in the current container.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send a gRPC request when applying the chaos experiment."),(0,a.kt)("p",{parentName:"li"},"Each chaos experiment has its life cycle: ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),". However, there are some chaos experiments that cannot be recovered by default (for example, PodKill in PodChaos, and HelloWorldChaos). These are called OneShot experiments. You can find ",(0,a.kt)("inlineCode",{parentName:"p"},"+chaos-mesh:oneshot=true")," in the file that defines the schema type of chaos experiment type."),(0,a.kt)("p",{parentName:"li"},"Chaos Controller Manager needs to send a request to Chaos Daemon when HelloWorldChaos is in ",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),". To do this, you need to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloordchaos/types.go"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n   "context"\n\n   "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n   impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n   "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n   "github.com/go-logr/logr"\n   "go.uber.org/fx"\n   "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\ntype Impl struct {\n   client.Client\n   Log     logr.Logger\n   decoder *utils.ContainerRecordDecoder\n}\n\n// Apply applies KernelChaos\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   impl.Log.Info("Apply helloworld chaos")\n   decodedContainer, err := impl.decoder.DecodeContainerRecord(ctx, records[index], obj)\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n   pbClient := decodedContainer.PbClient\n   containerId := decodedContainer.ContainerId\n\n   _, err = pbClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n    ContainerId: containerId,\n   })\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n\n   return v1alpha1.Injected, nil\n}\n\n// Recover means the reconciler recovers the chaos action\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   mpl.Log.Info("Recover helloworld chaos")\n   return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n   return &impltypes.ChaosImplPair{\n      Name:   "helloworldchaos",\n      Object: &v1alpha1.HelloWorldChaos{},\n      Impl: &Impl{\n         Client:  c,\n         Log:     log.WithName("helloworldchaos"),\n         decoder: decoder,\n      },\n      ObjectList: &v1alpha1.HelloWorldChaosList{},\n   }\n}\n\nvar Module = fx.Provide(\n   fx.Annotated{\n      Group:  "impl",\n      Target: NewImpl,\n   },\n)\n')),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In this chaos experiment, there is no need to recover the chaos action. This is because HelloWorldChaos is a OneShot experiment. For the chaos experiment type you developed, you can implement the logic of the recovery function as needed.")))),(0,a.kt)("h2",{id:"verify-the-experiment"},"Verify the experiment"),(0,a.kt)("p",null,"To verify the experiment, perform the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the Docker image and push it to your local Registry. If the Kubernetes cluster is deployed using kind, you need to load the image to kind:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make image\nmake docker-push\nkind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Chaos Mesh:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh helm/chaos-mesh --namespace=chaos-mesh --version latest")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy the target Pod for testing. Skip this step if you have already deployed this Pod:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new YAML file with the following content:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: busybox-helloworld-chaos\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: all\n  duration: 1h\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply the chaos experiment:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/helloworld.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the results. You can check several logs:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Check the logs of Chaos Controller Manager:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n")),(0,a.kt)("p",{parentName:"li"},"Example output:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-25T06:02:12.754Z        INFO    records apply chaos     {"id": "busybox/busybox-1/busybox"}\n2021-06-25T06:02:12.754Z        INFO    helloworldchaos Apply helloworld chaos\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Check the logs of Chaos Daemon:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-daemon-{pod-post-fix} -n chaos-mesh\n")),(0,a.kt)("p",{parentName:"li"},"Example output:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-25T06:25:13.048Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://af1b99df3513c49c4cab4f12e468ed1d7a274fe53722bd883256d8f65bc9f681\\""}\n2021-06-25T06:25:13.050Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243383/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.056Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n2021-06-25T06:25:13.070Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://88f6a469e5da82b48dc1190de07a2641b793df1f4e543a5958e448119d1bec11\\""}\n2021-06-25T06:25:13.072Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243479/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.076Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n')),(0,a.kt)("p",{parentName:"li"},"You can see ",(0,a.kt)("inlineCode",{parentName:"p"},"ps aux")," in two separate lines, which are corresponding to two different Pods."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your cluster has multiple nodes, you will find more than one Chaos Daemon Pod. Try to check logs of every Chaos Daemon Pods and find which Pod is being called.")))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"If you encounter any problems in this process, create an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," in the Chaos Mesh repository."),(0,a.kt)("p",null,"If you are curious about how all of these come into effect, you can read the README files of different ",(0,a.kt)("inlineCode",{parentName:"p"},"controllers")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," directory to learn their functionalities. For example, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/controllers/common/README.md"},"controllers/common/README.md"),"."),(0,a.kt)("p",null,"Now you are ready to become a Chaos Mesh developer! You are welcome to visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," repository to find a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/labels/good%20first%20issue"},"good first issue")," and get started!"))}d.isMDXComponent=!0}}]);
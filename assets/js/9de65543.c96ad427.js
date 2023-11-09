"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6437],{45618:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=o(11527),r=o(54881),t=o(54443);const a={title:"Extend Chaos Daemon Interface"},l=void 0,c={id:"extend-chaos-daemon-interface",title:"Extend Chaos Daemon Interface",description:"In Add a new chaos experiment type, you have added HelloWorldChaos, which can print Hello world! in the logs of Chaos Controller Manager.",source:"@site/docs/extend-chaos-daemon-interface.md",sourceDirName:".",slug:"/extend-chaos-daemon-interface",permalink:"/docs/next/extend-chaos-daemon-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/extend-chaos-daemon-interface.md",tags:[],version:"current",frontMatter:{title:"Extend Chaos Daemon Interface"},sidebar:"docs",previous:{title:"Add a New Chaos Experiment Type",permalink:"/docs/next/add-new-chaos-experiment-type"},next:{title:"Extend Chaosd",permalink:"/docs/next/extend-chaosd"}},d={},h=[{value:"Selector",id:"selector",level:2},{value:"Implement the gRPC interface",id:"implement-the-grpc-interface",level:2},{value:"Verify the output of HelloWorldChaos",id:"verify-the-output-of-helloworldchaos",level:2},{value:"Next steps",id:"next-steps",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/docs/next/add-new-chaos-experiment-type",children:"Add a new chaos experiment type"}),", you have added ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"}),", which can print ",(0,s.jsx)(n.code,{children:"Hello world!"})," in the logs of Chaos Controller Manager."]}),"\n",(0,s.jsxs)(n.p,{children:["To enable the ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"})," to inject some faults into the target Pod, you need to extend Chaos Daemon interface."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["It's recommended to read ",(0,s.jsx)(n.a,{href:"/docs/next/#architecture-overview",children:"the architecture of Chaos Mesh"})," before you go forward."]})}),"\n",(0,s.jsx)(n.p,{children:"This document covers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#selector",children:"Selector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#implement-the-grpc-interface",children:"Implement the gRPC interface"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#verify-the-output-of-helloworldchaos",children:"Verify the output of HelloWorldChaos"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#next-steps",children:"Next steps"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"selector",children:"Selector"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"api/v1alpha1/helloworldchaos_type.go"}),", you have defined ",(0,s.jsx)(n.code,{children:"HelloWorldSpec"}),", which includes ",(0,s.jsx)(n.code,{children:"ContainerSelector"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// HelloWorldChaosSpec defines the desired state of HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n        // ContainerSelector specifies the target for injection\n        ContainerSelector `json:",inline"`\n\n        // Duration represents the duration of the chaos\n        // +optional\n        Duration *string `json:"duration,omitempty"`\n\n        // RemoteCluster represents the remote cluster where the chaos will be deployed\n        // +optional\n        RemoteCluster string `json:"remoteCluster,omitempty"`\n}\n\n//...\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n        return map[string]interface{}{\n                ".": &obj.Spec.ContainerSelector,\n        }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In Chaos Mesh, Selector is used to define the scope of a chaos experiment, the target namespace, the annotation, the label, etc."}),"\n",(0,s.jsxs)(n.p,{children:["Selector can also be some more specific values (e.g. ",(0,s.jsx)(n.code,{children:"AWSSelector"})," in ",(0,s.jsx)(n.code,{children:"AWSChaos"}),"). Normally each chaos experiment needs only one selector, with exceptions like ",(0,s.jsx)(n.code,{children:"NetworkChaos"})," because it sometimes needs two selectors as two objects for network partitioning."]}),"\n",(0,s.jsxs)(n.p,{children:["You can refer to ",(0,s.jsx)(n.a,{href:"/docs/next/define-chaos-experiment-scope",children:"Define the Scope of Chaos Experiments"})," for more information about Selector."]}),"\n",(0,s.jsx)(n.h2,{id:"implement-the-grpc-interface",children:"Implement the gRPC interface"}),"\n",(0,s.jsx)(n.p,{children:"To allow Chaos Daemon to accept the requests from Chaos Controller Manager, you need to implement a new gRPC interface."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the RPC in ",(0,s.jsx)(n.code,{children:"pkg/chaosdaemon/pb/chaosdaemon.proto"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-proto",children:"service ChaosDaemon {\n   ...\n\n   rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n   string container_id = 1;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you need to update the related ",(0,s.jsx)(n.code,{children:"chaosdaemon.pb.go"})," file by running the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make proto\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Implement gRPC services in Chaos Daemon."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"pkg/chaosdaemon"})," directory, create a file named ",(0,s.jsx)(n.code,{children:"helloworld_server.go"})," with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package chaosdaemon\n\nimport (\n        "context"\n\n        "github.com/golang/protobuf/ptypes/empty"\n\n        "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n        "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *DaemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n        log := s.getLoggerFromContext(ctx)\n        log.Info("ExecHelloWorldChaos", "request", req)\n\n        pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n        if err != nil {\n                return nil, err\n        }\n\n        cmd := bpm.DefaultProcessBuilder("sh", "-c", "ps aux").\n                SetContext(ctx).\n                SetNS(pid, bpm.MountNS).\n                Build(ctx)\n        out, err := cmd.Output()\n        if err != nil {\n                return nil, err\n        }\n        if len(out) != 0 {\n                log.Info("cmd output", "output", string(out))\n        }\n\n        return &empty.Empty{}, nil\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.code,{children:"chaos-daemon"})," receives the ",(0,s.jsx)(n.code,{children:"ExecHelloWorldChaos"})," request, you can see a list of processes in the current container."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send a gRPC request when applying the chaos experiment."}),"\n",(0,s.jsxs)(n.p,{children:["Every chaos experiment has a life cycle: ",(0,s.jsx)(n.code,{children:"apply"})," and then ",(0,s.jsx)(n.code,{children:"recover"}),". However, there are some chaos experiments that cannot be recovered by default (for example, PodKill in PodChaos and HelloWorldChaos). These are called OneShot experiments. You can find ",(0,s.jsx)(n.code,{children:"+chaos-mesh:oneshot=true"}),", which we have defined in the ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"})," schema."]}),"\n",(0,s.jsxs)(n.p,{children:["The chaos controller manager needs to send a request to the chaos daemon when ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"})," is in the ",(0,s.jsx)(n.code,{children:"apply"})," phase. This is done by updating ",(0,s.jsx)(n.code,{children:"controllers/chaosimpl/helloworldchaos/types.go"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n        impl.Log.Info("Apply helloworld chaos")\n\n        decodedContainer, err := impl.decoder.DecodeContainerRecord(ctx, records[index], obj)\n        if err != nil {\n                return v1alpha1.NotInjected, err\n        }\n\n        pbClient := decodedContainer.PbClient\n        containerId := decodedContainer.ContainerId\n\n        _, err = pbClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n                ContainerId: containerId,\n        })\n        if err != nil {\n                return v1alpha1.NotInjected, err\n        }\n\n        return v1alpha1.Injected, nil\n}\n\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n        impl.Log.Info("Recover helloworld chaos")\n        return v1alpha1.NotInjected, nil\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["There is no need to recover ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"})," because ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"})," is a ",(0,s.jsx)(n.strong,{children:"OneShot"})," experiment. For the type of chaos experiment you develop, you can implement the logic of the recovery function as needed."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verify-the-output-of-helloworldchaos",children:"Verify the output of HelloWorldChaos"}),"\n",(0,s.jsxs)(n.p,{children:["Now you can verify the output of ",(0,s.jsx)(n.code,{children:"HelloWorldChaos"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build Docker images as we described in ",(0,s.jsx)(n.a,{href:"/docs/next/add-new-chaos-experiment-type#step-4-build-docker-images",children:"Add a new chaos experiment type"}),", then load them into your cluster."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you're using minikube, some versions of minikube cannot overwrite the existing images with the same tag. You may delete the existing images before loading the new ones."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update Chaos Mesh:"}),"\n",(0,s.jsx)(t.Z,{children:"helm upgrade chaos-mesh helm/chaos-mesh -n=chaos-mesh --set controllerManager.leaderElection.enabled=false,dashboard.securityMode=false"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy a Pod for testing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"hello-busybox.yaml"})," file with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-busybox\n  namespace: chaos-mesh\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: all\n  duration: 1h\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f hello-busybox.yaml\n# helloworldchaos.chaos-mesh.org/hello-busybox created\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Now you can check if ",(0,s.jsx)(n.code,{children:"chaos-controller-manager"})," has ",(0,s.jsx)(n.code,{children:"Apply helloworld chaos"})," in its logs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl logs -n chaos-mesh chaos-controller-manager-xxx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:'2023-07-16T08:20:46.823Z INFO records records/controller.go:149 apply chaos {"id": "busybox/busybox-0/busybox"}\n2023-07-16T08:20:46.823Z INFO helloworldchaos helloworldchaos/types.go:27 Apply helloworld chaos\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the logs of Chaos Daemon:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl logs -n chaos-mesh chaos-daemon-xxx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:'2023-07-16T08:20:46.833Z INFO chaos-daemon.daemon-server chaosdaemon/server.go:187 ExecHelloWorldChaos {"namespacedName": "chaos-mesh/hello-busybox", "request": "container_id:\\"docker://5e01e76efdec6aa0934afc15bb80e121d58b43c529a6696a01a242f7ac68f201\\""}\n2023-07-16T08:20:46.834Z INFO chaos-daemon.daemon-server.background-process-manager.process-builder pb/chaosdaemon.pb.go:4568 build command {"namespacedName": "chaos-mesh/hello-busybox", "command": "/usr/local/bin/nsexec -m /proc/104710/ns/mnt -- sh -c ps aux"}\n2023-07-16T08:20:46.841Z INFO chaos-daemon.daemon-server chaosdaemon/server.go:187 cmd output {"namespacedName": "chaos-mesh/hello-busybox", "output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sh -c echo Container is Running ; sleep 3600\\n"}\n2023-07-16T08:20:46.856Z INFO chaos-daemon.daemon-server chaosdaemon/server.go:187 ExecHelloWorldChaos {"namespacedName": "chaos-mesh/hello-busybox", "request": "container_id:\\"docker://bab4f632a0358529f7d72d35e014b8c2ce57438102d99d6174dd9df52d093e99\\""}\n2023-07-16T08:20:46.864Z INFO chaos-daemon.daemon-server.background-process-manager.process-builder pb/chaosdaemon.pb.go:4568 build command {"namespacedName": "chaos-mesh/hello-busybox", "command": "/usr/local/bin/nsexec -m /proc/104841/ns/mnt -- sh -c ps aux"}\n2023-07-16T08:20:46.867Z INFO chaos-daemon.daemon-server chaosdaemon/server.go:187 cmd output {"namespacedName": "chaos-mesh/hello-busybox", "output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sh -c echo Container is Running ; sleep 3600\\n"}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You will see two separate lines of ",(0,s.jsx)(n.code,{children:"ps aux"}),", which are corresponding to two different Pods."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["If you encounter any problems during the process, create an ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"issue"})," in the Chaos Mesh repository."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are curious about how all this works, you can read the ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/controllers/README.md",children:"controllers/README.md"})," and code for different controllers next."]}),"\n",(0,s.jsxs)(n.p,{children:["You are now ready to become a Chaos Mesh developer! Feel free to visit the ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"Chaos Mesh issues"})," to find a ",(0,s.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/labels/good%20first%20issue",children:"good first issue"})," and get started!"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},54443:(e,n,o)=>{o.d(n,{Z:()=>i});var s=o(86969),r=o(19327),t=o(46832),a=o(62613),l=o(45863),c=o.n(l),d=o(31344),h=o(11527);const i=e=>{let{children:n,className:o="language-bash"}=e;const{siteConfig:l}=(0,r.Z)(),{versions:i}=(0,t.eZ)("docusaurus-plugin-content-docs");return(0,h.jsx)(s.Z,{children:()=>{const e=(0,d.p)(l,i),s="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const n=e.slice(0,3);return"v"+(parseFloat(n)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,h.jsx)(a.Z,{className:o,children:n.replace("--version latest",s).trim()})}})}},31344:(e,n,o)=>{o.d(n,{Z:()=>d,p:()=>c});var s=o(86969),r=o(19327),t=o(46832),a=o(62613),l=o(11527);const c=(e,n)=>{const o=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(o===e.baseUrl&&s)return"current"===s?"latest":s;if(o.includes("/docs/next"))return"latest";const r=n.find((e=>e.isLast)),t=n.find((e=>o.includes(e.name)));return t?t.name:r.name};const d=e=>{let{children:n,replaced:o="latest",isArchive:d=!1,className:h="language-bash"}=e;const{siteConfig:i}=(0,r.Z)(),{versions:p}=(0,t.eZ)("docusaurus-plugin-content-docs");return(0,l.jsx)(s.Z,{children:()=>{const e=c(i,p),s=d?n.replace(o,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?n:n.replace(o,"v"+e);return(0,l.jsx)(a.Z,{className:h,children:s})}})}}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[49199],{49613:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>u});var o=a(59496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=o.createContext({}),c=function(e){var n=o.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=t,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||r;return a?o.createElement(u,l(l({ref:n},i),{},{components:a})):o.createElement(u,l({ref:n},i))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:t,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1438:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(60795),t=(a(59496),a(49613));const r={title:"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3"},l=void 0,s={unversionedId:"extend-chaos-daemon-interface",id:"version-2.5.2/extend-chaos-daemon-interface",title:"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3",description:'\u5728\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u4e2d\uff0c\u4f60\u5b9e\u73b0\u4e86\u4e00\u79cd\u540d\u4e3a HelloWorldChaos \u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u5b83\u7684\u529f\u80fd\u662f\u5728 Chaos Controller Manager \u7684\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e00\u884c "Hello world!"\u3002\u4e3a\u4e86\u8ba9 HelloWorldChaos \u771f\u6b63\u6709\u7528\uff0c\u4f60\u8fd8\u9700\u8981\u5411 Chaos Daemon \u6dfb\u52a0\u63a5\u53e3\uff0c\u4ece\u800c\u5728\u76ee\u6807 Pod \u4e0a\u6ce8\u5165\u4e00\u4e9b\u6545\u969c\u3002\u6bd4\u65b9\u8bf4\uff0c\u83b7\u53d6\u76ee\u6807 Pod \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002',source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/extend-chaos-daemon-interface.md",sourceDirName:".",slug:"/extend-chaos-daemon-interface",permalink:"/zh/docs/2.5.2/extend-chaos-daemon-interface",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/extend-chaos-daemon-interface.md",tags:[],version:"2.5.2",frontMatter:{title:"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3"},sidebar:"docs",previous:{title:"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b",permalink:"/zh/docs/2.5.2/add-new-chaos-experiment-type"},next:{title:"\u62d3\u5c55 Chaosd \u7ec4\u4ef6",permalink:"/zh/docs/2.5.2/extend-chaosd"}},p={},c=[{value:"\u9009\u62e9\u5668",id:"\u9009\u62e9\u5668",level:2},{value:"\u5b9e\u73b0 gRPC \u63a5\u53e3",id:"\u5b9e\u73b0-grpc-\u63a5\u53e3",level:2},{value:"\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c",id:"\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c",level:2},{value:"\u63a2\u7d22\u66f4\u591a",id:"\u63a2\u7d22\u66f4\u591a",level:2}],i={toc:c},m="wrapper";function h(e){let{components:n,...a}=e;return(0,t.kt)(m,(0,o.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u5728",(0,t.kt)("a",{parentName:"p",href:"/zh/docs/2.5.2/add-new-chaos-experiment-type"},"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b"),'\u4e2d\uff0c\u4f60\u5b9e\u73b0\u4e86\u4e00\u79cd\u540d\u4e3a HelloWorldChaos \u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u5b83\u7684\u529f\u80fd\u662f\u5728 Chaos Controller Manager \u7684\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e00\u884c "Hello world!"\u3002\u4e3a\u4e86\u8ba9 HelloWorldChaos \u771f\u6b63\u6709\u7528\uff0c\u4f60\u8fd8\u9700\u8981\u5411 Chaos Daemon \u6dfb\u52a0\u63a5\u53e3\uff0c\u4ece\u800c\u5728\u76ee\u6807 Pod \u4e0a\u6ce8\u5165\u4e00\u4e9b\u6545\u969c\u3002\u6bd4\u65b9\u8bf4\uff0c\u83b7\u53d6\u76ee\u6807 Pod \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002'),(0,t.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u5173\u4e8e Chaos Mesh \u67b6\u6784\u7684\u77e5\u8bc6\u5bf9\u4e8e\u5e2e\u52a9\u4f60\u7406\u89e3\u8fd9\u4e00\u6587\u6863\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982 ",(0,t.kt)("a",{parentName:"p",href:"/zh/docs/2.5.2/architecture"},"Chaos Mesh\xa0 \u67b6\u6784"),"\u3002")),(0,t.kt)("p",null,"\u672c\u6587\u6863\u5206\u4e3a\u4ee5\u4e0b\u51e0\u90e8\u5206\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E9%80%89%E6%8B%A9%E5%99%A8"},"\u9009\u62e9\u5668")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E7%8E%B0-grpc-%E6%8E%A5%E5%8F%A3"},"\u5b9e\u73b0 gRPC \u63a5\u53e3")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E9%AA%8C%E8%AF%81%E5%AE%9E%E9%AA%8C%E6%95%88%E6%9E%9C"},"\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A"},"\u63a2\u7d22\u66f4\u591a"))),(0,t.kt)("h2",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),(0,t.kt)("p",null,"\u56de\u987e\u4e00\u4e0b\u4f60\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"api/v1alpha1/helloworldchaos_type.go")," \u4e2d\u5b9a\u4e49\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"HelloWorldSpec")," \u8fd9\u4e00\u7ed3\u6784\uff0c\u5176\u4e2d\u5305\u62ec\u4e86\u4e00\u9879 ",(0,t.kt)("inlineCode",{parentName:"p"},"ContainerSelector"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n...\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,t.kt)("p",null,"\u5728 Chaos Mesh \u4e2d\uff0c\u6df7\u6c8c\u5b9e\u9a8c\u901a\u8fc7\u9009\u62e9\u5668\u6765\u5b9a\u4e49\u8bd5\u9a8c\u8303\u56f4\u3002\u9009\u62e9\u5668\u53ef\u4ee5\u9650\u5b9a\u76ee\u6807\u7684\u547d\u540d\u7a7a\u95f4\u3001\u6ce8\u89e3\u3001\u6807\u7b7e\u7b49\u3002\u9009\u62e9\u5668\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e9b\u66f4\u7279\u6b8a\u7684\u503c\uff08\u5982 AWSChaos \u4e2d\u7684 AWSSelector\uff09\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u6bcf\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u9700\u8981\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u4f46\u4e5f\u6709\u4f8b\u5916\uff0c\u6bd4\u5982 NetworkChaos \u6709\u65f6\u9700\u8981\u4e24\u4e2a\u9009\u62e9\u5668\u4f5c\u4e3a\u7f51\u7edc\u5206\u533a\u7684\u4e24\u4e2a\u5bf9\u8c61\u3002"),(0,t.kt)("h2",{id:"\u5b9e\u73b0-grpc-\u63a5\u53e3"},"\u5b9e\u73b0 gRPC \u63a5\u53e3"),(0,t.kt)("p",null,"\u4e3a\u4e86\u8ba9 Chaos Daemon \u80fd\u63a5\u53d7 Chaos Controller Manager \u7684\u8bf7\u6c42\uff0c\u9700\u8981\u7ed9\u5b83\u4eec\u52a0\u4e0a\u65b0\u7684 gRPC \u63a5\u53e3\u3002"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"pkg/chaosdaemon/pb/chaosdaemon.proto")," \u4e2d\u52a0\u4e0a\u65b0\u7684 RPC\u3002"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-proto"},"service chaosDaemon {\n    ...\n\n    rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n    string container_id = 1;\n}\n")),(0,t.kt)("p",{parentName:"li"},"\u66f4\u65b0\u4e86 proto \u6587\u4ef6\u540e\uff0c\u9700\u8981\u91cd\u65b0\u751f\u6210 Golang \u4ee3\u7801\u3002"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"make proto\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728 Chaos Daemon \u4e2d\u5b9e\u73b0 gRPC \u670d\u52a1\u3002"),(0,t.kt)("p",{parentName:"li"},"\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"pkg/chaosdaemon")," \u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"helloworld_server.go")," \u7684\u6587\u4ef6\uff0c\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package chaosdaemon\n\nimport (\n   "context"\n   "fmt"\n\n   "github.com/golang/protobuf/ptypes/empty"\n\n   "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *DaemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n   log := s.getLoggerFromContext(ctx)\n   log.Info("ExecHelloWorldChaos", "request", req)\n\n   pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n   if err != nil {\n      return nil, err\n   }\n\n   cmd := bpm.DefaultProcessBuilder("sh", "-c", fmt.Sprintf("ps aux")).\n      SetNS(pid, bpm.MountNS).\n      SetContext(ctx).\n      Build(ctx)\n   out, err := cmd.Output()\n   if err != nil {\n      return nil, err\n   }\n   if len(out) != 0 {\n      log.Info("cmd output", "output", string(out))\n   }\n\n   return &empty.Empty{}, nil\n}\n')),(0,t.kt)("p",{parentName:"li"},"\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," \u6536\u5230 ",(0,t.kt)("inlineCode",{parentName:"p"},"ExecHelloWorldChaos")," \u8bf7\u6c42\u540e, \u5b83\u4f1a\u8f93\u51fa\u5f53\u524d\u5bb9\u5668\u7684\u8fdb\u7a0b\u5217\u8868.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728\u5e94\u7528\u6df7\u6c8c\u5b9e\u9a8c\u4e2d\u53d1\u9001 gRPC \u8bf7\u6c42\u3002"),(0,t.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u6709\u5176\u751f\u547d\u5468\u671f\uff0c\u9996\u5148\u88ab\u5e94\u7528\uff0c\u7136\u540e\u88ab\u6062\u590d\u3002\u6709\u4e00\u4e9b\u6df7\u6c8c\u5b9e\u9a8c\u65e0\u6cd5\u88ab\u6062\u590d\uff08\u5982 PodChaos \u4e2d\u7684 PodKill\uff0c\u4ee5\u53ca HelloWorldChaos\uff09\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a OneShot \u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u5728 HelloWorldChaos \u7ed3\u6784\u7684\u5b9a\u4e49\u4e0a\u65b9\u627e\u5230\u4e00\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"+chaos-mesh:oneshot=true"),"\u3002"),(0,t.kt)("p",{parentName:"li"},"Chaos Controller Manager \u9700\u8981\u5728\u5e94\u7528 HelloWorldChaos \u65f6\u7ed9 Chaos Daemon \u53d1\u9001\u8bf7\u6c42\u3002\u4e3a\u6b64\uff0c\u4f60\u9700\u8981\u5bf9 ",(0,t.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloworldchaos/types.go")," \u7a0d\u4f5c\u4fee\u6539\u3002"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n   "context"\n\n   "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n   impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n   "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n   "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n   "github.com/go-logr/logr"\n   "go.uber.org/fx"\n   "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\ntype Impl struct {\n   client.Client\n   Log     logr.Logger\n   decoder *utils.ContainerRecordDecoder\n}\n\n// Apply applies KernelChaos\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   impl.Log.Info("Apply helloworld chaos")\n   decodedContainer, err := impl.decoder.DecodeContainerRecord(ctx, records[index], obj)\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n   pbClient := decodedContainer.PbClient\n   containerId := decodedContainer.ContainerId\n\n   _, err = pbClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n    ContainerId: containerId,\n   })\n   if err != nil {\n      return v1alpha1.NotInjected, err\n   }\n\n   return v1alpha1.Injected, nil\n}\n\n// Recover means the reconciler recovers the chaos action\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n   mpl.Log.Info("Recover helloworld chaos")\n   return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n   return &impltypes.ChaosImplPair{\n      Name:   "helloworldchaos",\n      Object: &v1alpha1.HelloWorldChaos{},\n      Impl: &Impl{\n         Client:  c,\n         Log:     log.WithName("helloworldchaos"),\n         decoder: decoder,\n      },\n      ObjectList: &v1alpha1.HelloWorldChaosList{},\n   }\n}\n\nvar Module = fx.Provide(\n   fx.Annotated{\n      Group:  "impl",\n      Target: NewImpl,\n   },\n)\n')),(0,t.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u5728 HelloWorldChaos \u4e2d\uff0c\u6062\u590d\u8fc7\u7a0b\u4ec0\u4e48\u90fd\u6ca1\u6709\u505a\u3002\u8fd9\u662f\u56e0\u4e3a HelloWorldChaos \u662f\u4e00\u4e2a OneShot \u5b9e\u9a8c\u3002\u5982\u679c\u4f60\u7684\u65b0\u5b9e\u9a8c\u9700\u8981\u6062\u590d\uff0c\u4f60\u5e94\u8be5\u5728\u5176\u4e2d\u5b9e\u73b0\u76f8\u5173\u903b\u8f91\u3002")))),(0,t.kt)("h2",{id:"\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c"},"\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c"),(0,t.kt)("p",null,"\u8981\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u91cd\u65b0\u7f16\u8bd1 Docker \u955c\u50cf\uff0c\u5e76\u63a8\u9001\u5230\u672c\u5730 Registry \u4e0a\uff0c\u7136\u540e\u52a0\u8f7d\u8fdb kind\uff08\u5982\u679c\u4f60\u4f7f\u7528 kind\uff09\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"make image\nmake docker-push\nkind load docker-image localhost:5000/pingcap/chaos-mesh:latest\nkind load docker-image localhost:5000/pingcap/chaos-daemon:latest\nkind load docker-image localhost:5000/pingcap/chaos-dashboard:latest\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u66f4\u65b0 Chaos Mesh\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh helm/chaos-mesh --namespace=chaos-mesh\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u90e8\u7f72\u7528\u4e8e\u6d4b\u8bd5\u7684\u76ee\u6807 Pod\uff08\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u4e4b\u524d\u90e8\u7f72\u4e86\u8fd9\u4e2a Pod\uff0c\u8bf7\u8df3\u8fc7\u8fd9\u4e00\u6b65\uff09\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\uff0c\u5199\u5165\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: busybox-helloworld-chaos\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: all\n  duration: 1h\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5e94\u7528\u6df7\u6c8c\u5b9e\u9a8c\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/helloworld.yaml\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c\u3002\u6709\u51e0\u4efd\u65e5\u5fd7\u9700\u8981\u786e\u8ba4\uff1a"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u67e5\u770b Chaos Controller Manager \u7684\u65e5\u5fd7:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n")),(0,t.kt)("p",{parentName:"li"},"\u67e5\u627e\u4ee5\u4e0b\u5185\u5bb9:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-25T06:02:12.754Z        INFO    records apply chaos     {"id": "busybox/busybox-1/busybox"}\n2021-06-25T06:02:12.754Z        INFO    helloworldchaos Apply helloworld chaos\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u67e5\u770b Chaos Daemon \u7684\u65e5\u5fd7:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-daemon-{pod-post-fix} -n chaos-mesh\n")),(0,t.kt)("p",{parentName:"li"},"\u67e5\u627e\u4ee5\u4e0b\u5185\u5bb9:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-25T06:25:13.048Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://af1b99df3513c49c4cab4f12e468ed1d7a274fe53722bd883256d8f65bc9f681\\""}\n2021-06-25T06:25:13.050Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243383/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.056Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n2021-06-25T06:25:13.070Z        INFO    chaos-daemon-server     ExecHelloWorldChaos     {"request": "container_id:\\"containerd://88f6a469e5da82b48dc1190de07a2641b793df1f4e543a5958e448119d1bec11\\""}\n2021-06-25T06:25:13.072Z        INFO    background-process-manager      build command   {"command": "/usr/local/bin/nsexec -m /proc/243479/ns/mnt -- sh -c ps aux"}\n2021-06-25T06:25:13.076Z        INFO    chaos-daemon-server     cmd output      {"output": "PID   USER     TIME  COMMAND\\n    1 root      0:00 sleep 3600\\n"}\n')),(0,t.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230\u4e24\u6761 ",(0,t.kt)("inlineCode",{parentName:"p"},"ps aux"),"\uff0c\u5bf9\u5e94\u4e24\u4e2a\u4e0d\u540c\u7684 Pod\u3002"),(0,t.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u6709\u591a\u4e2a\u8282\u70b9\uff0c\u4f60\u4f1a\u53d1\u73b0\u6709\u4e0d\u6b62\u4e00\u4e2a Chaos Daemon Pod\u3002\u8bd5\u7740\u67e5\u770b\u6bcf\u4e00\u4e2a Chaos Daemon Pod \u7684\u65e5\u5fd7\uff0c\u5bfb\u627e\u771f\u6b63\u88ab\u8c03\u7528\u7684\u90a3\u4e00\u4e2a\u3002")))))),(0,t.kt)("h2",{id:"\u63a2\u7d22\u66f4\u591a"},"\u63a2\u7d22\u66f4\u591a"),(0,t.kt)("p",null,"\u5728\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0cHelloWorldChaos \u5df2\u7ecf\u6210\u4e3a\u4e00\u79cd\u6709\u5b9e\u9645\u4f5c\u7528\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002\u5982\u679c\u4f60\u5728\u8fd9\u4e00\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u8bf7\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u3002"),(0,t.kt)("p",null,"\u4f60\u53ef\u80fd\u5f88\u597d\u5947\u8fd9\u4e00\u5207\u662f\u5982\u4f55\u751f\u6548\u7684\u3002\u53ef\u4ee5\u8bd5\u7740\u770b\u770b ",(0,t.kt)("inlineCode",{parentName:"p"},"controllers")," \u76ee\u5f55\u4e0b\u7684\u5404\u7c7b ",(0,t.kt)("inlineCode",{parentName:"p"},"controller"),"\uff0c\u5b83\u4eec\u6709\u81ea\u5df1\u7684 README\uff08\u5982 ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/controllers/common/README.md"},"controllers/common/README.md"),"\uff09\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b README \u4e86\u89e3\u6bcf\u4e2a controller \u7684\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u9605\u8bfb ",(0,t.kt)("a",{parentName:"p",href:"/zh/docs/2.5.2/architecture"},"Chaos Mesh\xa0 \u67b6\u6784"),"\u4e86\u89e3 Chaos Mesh \u80cc\u540e\u7684\u539f\u7406\u3002"),(0,t.kt)("p",null,"\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u6210\u4e3a\u4e00\u540d\u771f\u6b63\u7684 Chaos Mesh \u5f00\u53d1\u8005\u4e86\uff01\u5230 ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," \u91cc\u627e\u4e00\u627e\u7ec3\u624b\u7684\u4efb\u52a1\u5427\uff01\u63a8\u8350\u4f60\u5148\u4ece\u7b80\u5355\u7684\u5165\u624b\uff0c\u4f8b\u5982\u8fd9\u4e9b ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/labels/good%20first%20issue"},"good first issues"),"\u3002"))}h.isMDXComponent=!0}}]);
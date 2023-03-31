"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8807],{17942:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(50959);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||r;return t?n.createElement(u,l(l({ref:a},c),{},{components:t})):n.createElement(u,l({ref:a},c))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39655:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=t(51163),o=(t(50959),t(17942));const r={title:"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b"},l=void 0,s={unversionedId:"add-new-chaos-experiment-type",id:"add-new-chaos-experiment-type",title:"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u79cd\u65b0\u7684\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/add-new-chaos-experiment-type.md",sourceDirName:".",slug:"/add-new-chaos-experiment-type",permalink:"/zh/docs/next/add-new-chaos-experiment-type",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/add-new-chaos-experiment-type.md",tags:[],version:"current",frontMatter:{title:"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883",permalink:"/zh/docs/next/configure-development-environment"},next:{title:"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3",permalink:"/zh/docs/next/extend-chaos-daemon-interface"}},p={},i=[{value:"\u7b2c 1 \u6b65\uff1a\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u6784\u7c7b\u578b",id:"\u7b2c-1-\u6b65\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u6784\u7c7b\u578b",level:2},{value:"\u7b2c 2 \u6b65\uff1a\u6ce8\u518c CRD",id:"\u7b2c-2-\u6b65\u6ce8\u518c-crd",level:2},{value:"\u7b2c 3 \u6b65\uff1a\u6ce8\u518c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u5904\u7406\u51fd\u6570",id:"\u7b2c-3-\u6b65\u6ce8\u518c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u5904\u7406\u51fd\u6570",level:2},{value:"\u7b2c 4 \u6b65\uff1a\u7f16\u8bd1 Docker \u955c\u50cf",id:"\u7b2c-4-\u6b65\u7f16\u8bd1-docker-\u955c\u50cf",level:2},{value:"\u7b2c 5 \u6b65\uff1a\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c",id:"\u7b2c-5-\u6b65\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c",level:2},{value:"\u63a2\u7d22\u66f4\u591a",id:"\u63a2\u7d22\u66f4\u591a",level:2}],c={toc:i},m="wrapper";function h(e){let{components:a,...t}=e;return(0,o.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u79cd\u65b0\u7684\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u3002"),(0,o.kt)("p",null,'\u4ee5\u5f00\u53d1\u4e00\u79cd\u540d\u4e3a HelloWorldChaos \u7684\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u4e3a\u4f8b\uff0c\u5b83\u7684\u529f\u80fd\u662f\u5411\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e00\u884c "Hello world!"\u3002\u4e3a\u4e86\u5b8c\u6210\u8fd9\u4e00\u76ee\u6807\uff0c\u4f60\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c 1 \u6b65\uff1a\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u6784\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c 2 \u6b65\uff1a\u6ce8\u518c CRD"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c 3 \u6b65\uff1a\u6ce8\u518c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u5904\u7406\u51fd\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c 4 \u6b65\uff1a\u7f16\u8bd1 Docker \u955c\u50cf"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c 5 \u6b65\uff1a\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c")),(0,o.kt)("h2",{id:"\u7b2c-1-\u6b65\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u6784\u7c7b\u578b"},"\u7b2c 1 \u6b65\uff1a\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u6784\u7c7b\u578b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 API \u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"api/v1alpha1")," \u4e2d\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworldchaos_types.go")," \u7684\u6587\u4ef6\uff0c\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:experiment\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n')),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u6587\u4ef6\u5b9a\u4e49\u4e86 HelloWorldChaos \u7684\u7ed3\u6784\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u7528\u4e00\u4e2a YAML \u6587\u4ef6\u63cf\u8ff0:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <\u8d44\u6e90\u540d>\n  namespace: <\u547d\u540d\u7a7a\u95f4\u540d>\nspec:\n  duration: <\u6301\u7eed\u65f6\u95f4>\nstatus:\n  experiment: <\u5b9e\u9a8c\u72b6\u6001>\n  ...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 Chaos Mesh \u6839\u76ee\u5f55\u4e0b\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"make generate"),"\uff0c\u4e3a HelloWorldChaos \u751f\u6210\u4e00\u4e9b\u7528\u4e8e\u7f16\u8bd1 Chaos Mesh \u7684\u8f85\u52a9\u4ee3\u7801\u3002"))),(0,o.kt)("h2",{id:"\u7b2c-2-\u6b65\u6ce8\u518c-crd"},"\u7b2c 2 \u6b65\uff1a\u6ce8\u518c CRD"),(0,o.kt)("p",null,"\u5728 Kubernetes API \u4e2d\u6ce8\u518c HelloWorldChaos \u7684 CRD\uff0c\u4f7f HelloWorldChaos \u6210\u4e3a\u4e00\u79cd Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"make yaml"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u751f\u6210\u7684 YAML \u6587\u4ef6\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"config/crd/bases/chaos-mesh.org_helloworldchaos.yaml"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u5c06\u8fd9\u4e2a YAML \u6587\u4ef6\u5408\u5e76\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml")," \u4e2d\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"config/crd/kustomization.yaml"),"\uff0c\u5728\u5176\u4e2d\u52a0\u5165\u65b0\u7684\u4e00\u884c:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # \u65b0\u589e\u4e00\u884c\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u518d\u6b21\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"make yaml"),"\uff0cHelloWorldChaos \u7684\u5b9a\u4e49\u5c31\u4f1a\u51fa\u73b0\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests/crd.yaml")," \u91cc\u3002 \u5982\u9700\u786e\u8ba4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"git diff")," \u547d\u4ee4\u3002"))),(0,o.kt)("h2",{id:"\u7b2c-3-\u6b65\u6ce8\u518c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u5904\u7406\u51fd\u6570"},"\u7b2c 3 \u6b65\uff1a\u6ce8\u518c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u5904\u7406\u51fd\u6570"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/helloworldchaos/types.go")," \u5e76\u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n\n    "github.com/go-logr/logr"\n    "go.uber.org/fx"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n    "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n)\n\ntype Impl struct {\n    client.Client\n    Log     logr.Logger\n    decoder *utils.ContainerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Hello world!")\n    return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Goodbye world!")\n    return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n    return &impltypes.ChaosImplPair{\n        Name:   "helloworldchaos",\n        Object: &v1alpha1.HelloWorldChaos{},\n        Impl: &Impl{\n            Client:  c,\n            Log:     log.WithName("helloworldchaos"),\n            decoder: decoder,\n        },\n        ObjectList: &v1alpha1.HelloWorldChaosList{},\n    }\n}\n\nvar Module = fx.Provide(\n    fx.Annotated{\n        Group:  "impl",\n        Target: NewImpl,\n    },\n)\n\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Chaos Mesh \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/uber-go/fx"},"fx")," \u8fd9\u4e2a\u5e93\u6765\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\u3002\u4e3a\u4e86\u6ce8\u518c\u8fdb Controller Manager\uff0c\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/chaosimpl/fx.go")," \u4e2d\u52a0\u5165\u4e00\u884c\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    ...\n    gcpchaos.Module,\n    stresschaos.Module,\n    jvmchaos.Module,\n    timechaos.Module,\n    helloworldchaos.Module // \u65b0\u589e\u4e00\u884c\uff0c\u6ce8\u610f\u5904\u7406 import\n")),(0,o.kt)("p",{parentName:"li"},"\u4ee5\u53ca\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers/types/types.go")," \u4e2d\u52a0\u5165\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    ...\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "timechaos",\n            Object: &v1alpha1.TimeChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "gcpchaos",\n            Object: &v1alpha1.GCPChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "helloworldchaos",\n            Object: &v1alpha1.HelloWorldChaos{},\n        },\n    },\n')))),(0,o.kt)("h2",{id:"\u7b2c-4-\u6b65\u7f16\u8bd1-docker-\u955c\u50cf"},"\u7b2c 4 \u6b65\uff1a\u7f16\u8bd1 Docker \u955c\u50cf"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5b8c\u6210\u4e86\u524d\u9762\u6240\u6709\u6b65\u9aa4\u540e\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u7f16\u8bd1\u955c\u50cf\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u955c\u50cf\u63a8\u9001\u5230\u672c\u5730\u7684 Docker Registry \u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684 Kubernetes \u96c6\u7fa4\u90e8\u7f72\u5728 kind \u4e0a\uff0c\u5219\u8fd8\u9700\u8981\u5c06\u955c\u50cf\u52a0\u8f7d\u8fdb kind \u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image localhost:5000/chaos-mesh/chaos-mesh:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-daemon:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-dashboard:latest\n")))),(0,o.kt)("h2",{id:"\u7b2c-5-\u6b65\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c"},"\u7b2c 5 \u6b65\uff1a\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e2d\uff0c\u4f60\u9700\u8981\u90e8\u7f72\u4fee\u6539\u7248\u7684 Chaos Mesh \u5e76\u6d4b\u8bd5 HelloWorldChaos\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06 CRD \u6ce8\u518c\u8fdb\u96c6\u7fa4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f manifests/crd.yaml\n")),(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230 HelloWorldChaos \u5df2\u7ecf\u88ab\u521b\u5efa\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},"customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n")),(0,o.kt)("p",{parentName:"li"},"\u73b0\u5728\u53ef\u4ee5\u67e5\u770b HelloWorldChaos \u7684 CRD\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd helloworldchaos.chaos-mesh.org\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5 Chaos Mesh\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --set images.registry=localhost:5000 --version latest\n")),(0,o.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u4e00\u4e0b\u5b89\u88c5\u662f\u5426\u6210\u529f\uff0c\u67e5\u8be2 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," \u547d\u540d\u7a7a\u95f4\u7684 Pod:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-mesh -l app.kubernetes.io/instance=chaos-mesh\n")),(0,o.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")," \u662f\u7528\u6765\u5728 kind \u4e0a\u8fd0\u884c NetworkChaos \u7684\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u90e8\u7f72\u7528\u4e8e\u6d4b\u8bd5\u7684\u76ee\u6807 Pod\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),(0,o.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd\u7528\u4e8e\u6d4b\u8bd5\u7684\u76ee\u6807 Pod \u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos.yaml")," \u7684\u6587\u4ef6\uff0c\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-mesh\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: one\n  duration: 1h\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/chaos.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get HelloWorldChaos -n chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"\u73b0\u5728\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," \u7684\u65e5\u5fd7\uff0c\u5c31\u4f1a\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!"),"\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"\u663e\u793a\u65e5\u5fd7\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},'2021-06-24T06:42:26.858Z        INFO    records apply chaos     {"id": "chaos-mesh/chaos-daemon-vsmc5"}\n2021-06-24T06:42:26.858Z        INFO    helloworldchaos Hello World!\n')),(0,o.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"{pod-post-fix}")," \u662f\u4e00\u4e2a\u968f\u673a\u4e32\u3002\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pod -n chaos-mesh")," \u6765\u67e5\u770b\u5b83\u3002")))),(0,o.kt)("h2",{id:"\u63a2\u7d22\u66f4\u591a"},"\u63a2\u7d22\u66f4\u591a"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u8bf7\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8fdb\u4e00\u6b65\u5c1d\u8bd5\u5f00\u53d1\u5de5\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/extend-chaos-daemon-interface"},"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3"),"\u3002"))}h.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{157:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(7),r=(o(0),o(197)),c={id:"add_facilities_to_chaos_daemon",title:"Add Facilities to Chaos Daemon",sidebar_label:"Add Facilities to Chaos Daemon"},l={unversionedId:"development_guides/add_facilities_to_chaos_daemon",id:"version-1.0.3/development_guides/add_facilities_to_chaos_daemon",isDocsHomePage:!1,title:"Add Facilities to Chaos Daemon",description:"In Develop a new chaos, we have added a new chaos type named HelloWorldChaos, which will print hello world in chaos-controller-manager. To actually run the chaos, we need to configure some facilities for Chaos Daemon - so that controller-manager can select the specified Pods according to the chaos configuration and sends the chaos request to the chaos-daemon corresponding to these Pods. Once these are done, the chaos-daemon could run the chaos at last.",source:"@site/versioned_docs/version-1.0.3/development_guides/add_chaos_daemon.md",slug:"/development_guides/add_facilities_to_chaos_daemon",permalink:"/docs/development_guides/add_facilities_to_chaos_daemon",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/development_guides/add_chaos_daemon.md",version:"1.0.3",sidebar_label:"Add Facilities to Chaos Daemon",sidebar:"version-1.0.3/docs",previous:{title:"Develop a New Chaos",permalink:"/docs/development_guides/develop_a_new_chaos"},next:{title:"FAQs",permalink:"/docs/faqs"}},s=[{value:"Add selector for HelloWorldChaos",id:"add-selector-for-helloworldchaos",children:[]},{value:"Implement the gRPC interface",id:"implement-the-grpc-interface",children:[]},{value:"Verify your chaos",id:"verify-your-chaos",children:[]}],i={rightToc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development_guides/develop_a_new_chaos"}),"Develop a new chaos"),", we have added a new chaos type named ",Object(r.b)("inlineCode",{parentName:"p"},"HelloWorldChaos"),", which will print ",Object(r.b)("inlineCode",{parentName:"p"},"hello world")," in ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager"),". To actually run the chaos, we need to configure some facilities for Chaos Daemon - so that ",Object(r.b)("inlineCode",{parentName:"p"},"controller-manager")," can select the specified Pods according to the chaos configuration and sends the chaos request to the ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," corresponding to these Pods. Once these are done, the ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," could run the chaos at last."),Object(r.b)("p",null,"This guide covers the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#add-selector-for-helloworldChaos"}),"Add selector for HelloWorldChaos")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#implement-grpc-interface-for-chaos-request"}),"Implement the gRPC interface")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#verify-your-chaos"}),"Verify your chaos"))),Object(r.b)("h2",{id:"add-selector-for-helloworldchaos"},"Add selector for HelloWorldChaos"),Object(r.b)("p",null,"In Chaos Mesh, we have defined the ",Object(r.b)("inlineCode",{parentName:"p"},"spec.selector")," field to specify the scope of the chaos by namespace, labels, annotation, etc. You can refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/user_guides/experiment_scope"}),"Define the Scope of Chaos Experiment")," for more information. To specify the Pods for ",Object(r.b)("inlineCode",{parentName:"p"},"HelloWorld")," chaos:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the ",Object(r.b)("inlineCode",{parentName:"p"},"Spec")," field in ",Object(r.b)("inlineCode",{parentName:"p"},"HelloWorldChaos"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-golang"}),'// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    // Spec defines the behavior of a pod chaos experiment\n    Spec HelloWorldSpec `json:"spec"`\n}\n\ntype HelloWorldSpec struct {\n    Selector SelectorSpec `json:"selector"`\n}\n\n// GetSelector is a getter for Selector (for implementing SelectSpec)\nfunc (in *HelloWorldSpec) GetSelector() SelectorSpec {\n    return in.Selector\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate boilerplate functions for the ",Object(r.b)("inlineCode",{parentName:"p"},"spec")," field. This is required to integrate the resource in Chaos Mesh."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"make generate\n")))),Object(r.b)("h2",{id:"implement-the-grpc-interface"},"Implement the gRPC interface"),Object(r.b)("p",null,"In order for ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," to accept requests from ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager"),", a new gRPC interface is required for ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager")," and ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon"),". Take the steps below to add the gRPC interface:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the RPC in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/pkg/chaosdaemon/pb/chaosdaemon.proto"}),"chaosdaemon.proto"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-proto"}),"service chaosDaemon {\n    ...\n\n    rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n    string container_id = 1;\n}\n")),Object(r.b)("p",{parentName:"li"},"You will need to update golang code generated by this proto file:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"make proto\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement the gRPC service in ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon"),"."),Object(r.b)("p",{parentName:"li"},"Add a new file named ",Object(r.b)("inlineCode",{parentName:"p"},"helloworld_server.go")," under ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosdaemon"}),"chaosdaemon"),", with the content as below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-golang"}),'package chaosdaemon\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/golang/protobuf/ptypes/empty"\n\n    "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n    pb "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *daemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n    log.Info("ExecHelloWorldChaos", "request", req)\n\n    pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n    if err != nil {\n        return nil, err\n    }\n\n    cmd := bpm.DefaultProcessBuilder("sh", "-c", fmt.Sprintf("echo \'hello\' `hostname`")).\n        SetNS(pid, bpm.UtsNS).\n        SetContext(ctx).\n        Build()\n    out, err := cmd.Output()\n    if err != nil {\n        return nil, err\n    }\n    if len(out) != 0 {\n        log.Info("cmd output", "output", string(out))\n    }\n\n    return &empty.Empty{}, nil\n}\n')),Object(r.b)("p",{parentName:"li"},"After ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," receives the ",Object(r.b)("inlineCode",{parentName:"p"},"ExecHelloWorldChaos")," request, ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," will print ",Object(r.b)("inlineCode",{parentName:"p"},"hello")," to this container's hostname.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Send gRPC requests in reconcile."),Object(r.b)("p",{parentName:"li"},"When a CRD object is updated (for example: create or delete), we need to compare the state specified in the object against the actual state, and then perform operations to make the actual cluster state reflect the state specified. This process is called ",Object(r.b)("inlineCode",{parentName:"p"},"reconcile"),"."),Object(r.b)("p",{parentName:"li"},"For ",Object(r.b)("inlineCode",{parentName:"p"},"HelloworldChaos"),", ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager")," needs to send chaos request to ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," in ",Object(r.b)("inlineCode",{parentName:"p"},"reconcile"),". To do this, we need to update the file ",Object(r.b)("inlineCode",{parentName:"p"},"controllers/helloworldchaos/types.go")," created in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development_guides/develop_a_new_chaos"}),"Develop a New Chaos")," with the content as below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-golang"}),'package helloworldchaos\n\nimport (\n   "context"\n   "errors"\n   "fmt"\n\n   "k8s.io/apimachinery/pkg/runtime"\n   ctrl "sigs.k8s.io/controller-runtime"\n\n   "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n   "github.com/chaos-mesh/chaos-mesh/controllers/common"\n   pb "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n   "github.com/chaos-mesh/chaos-mesh/pkg/router"\n   ctx "github.com/chaos-mesh/chaos-mesh/pkg/router/context"\n   end "github.com/chaos-mesh/chaos-mesh/pkg/router/endpoint"\n   "github.com/chaos-mesh/chaos-mesh/pkg/utils"\n)\n\n// endpoint is dns-chaos reconciler\ntype endpoint struct {\n   ctx.Context\n}\n\n// Apply applies helloworld chaos\nfunc (r *endpoint) Apply(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    r.Log.Info("Apply helloworld chaos")\n    helloworldchaos, ok := chaos.(*v1alpha1.HelloWorldChaos)\n    if !ok {\n        return errors.New("chaos is not helloworldchaos")\n    }\n\n    pods, err := utils.SelectPods(ctx, r.Client, r.Reader, helloworldchaos.Spec.GetSelector())\n    if err != nil {\n        return err\n    }\n\n    for _, pod := range pods {\n        daemonClient, err := utils.NewChaosDaemonClient(ctx, r.Client, &pod, common.ControllerCfg.ChaosDaemonPort)\n        if err != nil {\n            r.Log.Error(err, "get chaos daemon client")\n            return err\n        }\n        defer daemonClient.Close()\n        if len(pod.Status.ContainerStatuses) == 0 {\n            return fmt.Errorf("%s %s can\'t get the state of container", pod.Namespace, pod.Name)\n        }\n\n        containerID := pod.Status.ContainerStatuses[0].ContainerID\n\n        _, err = daemonClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n            ContainerId: containerID,\n        })\n        if err != nil {\n            return err\n        }\n    }\n\n    return nil\n}\n\n// Recover means the reconciler recovers the chaos action\nfunc (r *endpoint) Recover(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    return nil\n}\n\n// Object would return the instance of chaos\nfunc (r *endpoint) Object() v1alpha1.InnerObject {\n    return &v1alpha1.HelloWorldChaos{}\n}\n\nfunc init() {\n    router.Register("helloworldchaos", &v1alpha1.HelloWorldChaos{}, func(obj runtime.Object) bool {\n        return true\n    }, func(ctx ctx.Context) end.Endpoint {\n        return &endpoint{\n            Context: ctx,\n        }\n    })\n}\n')),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Notes:")),Object(r.b)("p",{parentName:"blockquote"},"In our case here, the ",Object(r.b)("inlineCode",{parentName:"p"},"Recover")," function does nothing because ",Object(r.b)("inlineCode",{parentName:"p"},"HelloWorldChaos")," only prints some log and doesn't change anything. You may need to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"Recover")," function in your development.")))),Object(r.b)("h2",{id:"verify-your-chaos"},"Verify your chaos"),Object(r.b)("p",null,"Now you are all set. It's time to verify the chaos type you just created. Take the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make the Docker image. Refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development_guides/develop_a_new_chaos#make-the-docker-image"}),"Make the Docker image"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Upgrade Chaos Mesh. Since we have already installed Chaos Mesh in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development_guides/develop_a_new_chaos#run-chaos"}),"Develop a New Chaos"),", we only need to restart it with the latest image:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl rollout restart deployment chaos-controller-manager -n chaos-testing\nkubectl rollout restart daemonset chaos-daemon -n chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy the Pods for test:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),Object(r.b)("p",{parentName:"li"},"This command deploys two Pods in the ",Object(r.b)("inlineCode",{parentName:"p"},"busybox")," namespace.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create the chaos YAML file:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: busybox-helloworld-chaos\nspec:\n  selector:\n    namespaces:\n      - busybox\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply the chaos:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f /path/to/helloworld.yaml\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify your chaos. There are different logs to check to see whether your chaos works as expected:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the log of ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),Object(r.b)("p",{parentName:"li"},"The log is as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'2020-09-09T09:13:36.018Z        INFO    controllers.HelloWorldChaos     Reconciling helloworld chaos    {"reconciler": "helloworldchaos"}\n2020-09-09T09:13:36.018Z        INFO    controllers.HelloWorldChaos     Apply helloworld chaos  {"reconciler": "helloworldchaos"}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the log of ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs chaos-daemon-{pod-post-fix} -n chaos-testing\n")),Object(r.b)("p",{parentName:"li"},"The log is as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'2020-09-09T09:13:36.036Z        INFO    chaos-daemon-server     exec hello world chaos  {"request": "container_id:\\"docker://8f2918ee05ed587f7074a923cede3bbe5886277faca95d989e513f7b7e831da5\\" "}\n2020-09-09T09:13:36.044Z        INFO    chaos-daemon-server     build command   {"command": "nsenter -u/proc/45664/ns/uts -- sh -c echo \'hello\' `hostname`"}\n2020-09-09T09:13:36.058Z        INFO    chaos-daemon-server     cmd output      {"output": "hello busybox-1\\n"}\n2020-09-09T09:13:36.064Z        INFO    chaos-daemon-server     exec hello world chaos  {"request": "container_id:\\"docker://53e982ba5593fa87648edba665ba0f7da3f58df67f8b70a1354ca00447c00524\\" "}\n2020-09-09T09:13:36.066Z        INFO    chaos-daemon-server     build command   {"command": "nsenter -u/proc/45620/ns/uts -- sh -c echo \'hello\' `hostname`"}\n2020-09-09T09:13:36.070Z        INFO    chaos-daemon-server     cmd output      {"output": "hello busybox-0\\n"}\n')),Object(r.b)("p",{parentName:"li"},"We can see the ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-daemon")," prints ",Object(r.b)("inlineCode",{parentName:"p"},"hello")," to these two Pods."))))))}p.isMDXComponent=!0},197:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(o),b=n,m=d["".concat(c,".").concat(b)]||d[b]||h[b]||r;return o?a.a.createElement(m,l(l({ref:t},i),{},{components:o})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=o[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);
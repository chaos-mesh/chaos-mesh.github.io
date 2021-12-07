"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7095],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(o),m=a,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return o?n.createElement(u,l(l({ref:t},p),{},{components:o})):n.createElement(u,l({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},91965:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),l=["components"],s={title:"Add Facilities to Chaos Daemon"},c=void 0,i={unversionedId:"development_guides/add_facilities_to_chaos_daemon",id:"version-1.2.4/development_guides/add_facilities_to_chaos_daemon",isDocsHomePage:!1,title:"Add Facilities to Chaos Daemon",description:"In Develop a new chaos, we have added a new chaos type named HelloWorldChaos, which will print hello world in chaos-controller-manager. To actually run the chaos, we need to configure some facilities for Chaos Daemon - so that controller-manager can select the specified Pods according to the chaos configuration and sends the chaos request to the chaos-daemon corresponding to these Pods. Once these are done, the chaos-daemon could run the chaos at last.",source:"@site/versioned_docs/version-1.2.4/development_guides/add_facilities_to_chaos_daemon.md",sourceDirName:"development_guides",slug:"/development_guides/add_facilities_to_chaos_daemon",permalink:"/docs/1.2.4/development_guides/add_facilities_to_chaos_daemon",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/development_guides/add_facilities_to_chaos_daemon.md",tags:[],version:"1.2.4",frontMatter:{title:"Add Facilities to Chaos Daemon"},sidebar:"version-1.2.4/docs",previous:{title:"Develop a New Chaos",permalink:"/docs/1.2.4/development_guides/develop_a_new_chaos"},next:{title:"FAQs",permalink:"/docs/1.2.4/faqs"}},p=[{value:"Add selector for HelloWorldChaos",id:"add-selector-for-helloworldchaos",children:[],level:2},{value:"Implement the gRPC interface",id:"implement-the-grpc-interface",children:[],level:2},{value:"Verify your chaos",id:"verify-your-chaos",children:[],level:2}],h={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.4/development_guides/develop_a_new_chaos"},"Develop a new chaos"),", we have added a new chaos type named ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorldChaos"),", which will print ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),". To actually run the chaos, we need to configure some facilities for Chaos Daemon - so that ",(0,r.kt)("inlineCode",{parentName:"p"},"controller-manager")," can select the specified Pods according to the chaos configuration and sends the chaos request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," corresponding to these Pods. Once these are done, the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," could run the chaos at last."),(0,r.kt)("p",null,"This guide covers the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#add-selector-for-helloworldChaos"},"Add selector for HelloWorldChaos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#implement-grpc-interface-for-chaos-request"},"Implement the gRPC interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#verify-your-chaos"},"Verify your chaos"))),(0,r.kt)("h2",{id:"add-selector-for-helloworldchaos"},"Add selector for HelloWorldChaos"),(0,r.kt)("p",null,"In Chaos Mesh, we have defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector")," field to specify the scope of the chaos by namespace, labels, annotation, etc. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment")," for more information. To specify the Pods for ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," chaos:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorldChaos"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    // Spec defines the behavior of a pod chaos experiment\n    Spec HelloWorldSpec `json:"spec"`\n}\n\ntype HelloWorldSpec struct {\n    Selector SelectorSpec `json:"selector"`\n}\n\n// GetSelector is a getter for Selector (for implementing SelectSpec)\nfunc (in *HelloWorldSpec) GetSelector() SelectorSpec {\n    return in.Selector\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate boilerplate functions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," field. This is required to integrate the resource in Chaos Mesh."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make generate\n")))),(0,r.kt)("h2",{id:"implement-the-grpc-interface"},"Implement the gRPC interface"),(0,r.kt)("p",null,"In order for ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," to accept requests from ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),", a new gRPC interface is required for ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),". Take the steps below to add the gRPC interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the RPC in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/pkg/chaosdaemon/pb/chaosdaemon.proto"},"chaosdaemon.proto"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"service chaosDaemon {\n    ...\n\n    rpc ExecHelloWorldChaos(ExecHelloWorldRequest) returns (google.protobuf.Empty) {}\n}\n\nmessage ExecHelloWorldRequest {\n    string container_id = 1;\n}\n")),(0,r.kt)("p",{parentName:"li"},"You will need to update golang code generated by this proto file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make proto\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the gRPC service in ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),"."),(0,r.kt)("p",{parentName:"li"},"Add a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld_server.go")," under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosdaemon"},"chaosdaemon"),", with the content as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package chaosdaemon\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/golang/protobuf/ptypes/empty"\n\n    "github.com/chaos-mesh/chaos-mesh/pkg/bpm"\n    pb "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n)\n\nfunc (s *daemonServer) ExecHelloWorldChaos(ctx context.Context, req *pb.ExecHelloWorldRequest) (*empty.Empty, error) {\n    log.Info("ExecHelloWorldChaos", "request", req)\n\n    pid, err := s.crClient.GetPidFromContainerID(ctx, req.ContainerId)\n    if err != nil {\n        return nil, err\n    }\n\n    cmd := bpm.DefaultProcessBuilder("sh", "-c", fmt.Sprintf("echo \'hello\' `hostname`")).\n        SetNS(pid, bpm.UtsNS).\n        SetContext(ctx).\n        Build()\n    out, err := cmd.Output()\n    if err != nil {\n        return nil, err\n    }\n    if len(out) != 0 {\n        log.Info("cmd output", "output", string(out))\n    }\n\n    return &empty.Empty{}, nil\n}\n')),(0,r.kt)("p",{parentName:"li"},"After ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecHelloWorldChaos")," request, ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," will print ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," to this container's hostname.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send gRPC requests in reconcile."),(0,r.kt)("p",{parentName:"li"},"When a CRD object is updated (for example: create or delete), we need to compare the state specified in the object against the actual state, and then perform operations to make the actual cluster state reflect the state specified. This process is called ",(0,r.kt)("inlineCode",{parentName:"p"},"reconcile"),"."),(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloworldChaos"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," needs to send chaos request to ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"reconcile"),". To do this, we need to update the file ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers/helloworldchaos/types.go")," created in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.4/development_guides/develop_a_new_chaos"},"Develop a New Chaos")," with the content as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package helloworldchaos\n\nimport (\n    "context"\n    "errors"\n    "fmt"\n\n    "k8s.io/apimachinery/pkg/runtime"\n    ctrl "sigs.k8s.io/controller-runtime"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    "github.com/chaos-mesh/chaos-mesh/controllers/common"\n    "github.com/chaos-mesh/chaos-mesh/controllers/config"\n    pb "github.com/chaos-mesh/chaos-mesh/pkg/chaosdaemon/pb"\n    "github.com/chaos-mesh/chaos-mesh/pkg/router"\n    ctx "github.com/chaos-mesh/chaos-mesh/pkg/router/context"\n    end "github.com/chaos-mesh/chaos-mesh/pkg/router/endpoint"\n    "github.com/chaos-mesh/chaos-mesh/pkg/selector"\n    "github.com/chaos-mesh/chaos-mesh/pkg/utils"\n)\n\ntype endpoint struct {\n    ctx.Context\n}\n\n// Apply applies helloworld chaos\nfunc (r *endpoint) Apply(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    r.Log.Info("Apply helloworld chaos")\n    helloworldchaos, ok := chaos.(*v1alpha1.HelloWorldChaos)\n    if !ok {\n        return errors.New("chaos is not helloworldchaos")\n    }\n\n    pods, err := selector.SelectAndFilterPods(ctx, r.Client, r.Reader, &helloworldchaos.Spec, config.ControllerCfg.ClusterScoped, config.ControllerCfg.TargetNamespace, config.ControllerCfg.AllowedNamespaces, config.ControllerCfg.IgnoredNamespaces)\n    if err != nil {\n        r.Log.Error(err, "failed to select and filter pods")\n        return err\n    }\n\n    for _, pod := range pods {\n        daemonClient, err := utils.NewChaosDaemonClient(ctx, r.Client, &pod, common.ControllerCfg.ChaosDaemonPort)\n        if err != nil {\n            r.Log.Error(err, "get chaos daemon client")\n            return err\n        }\n        defer daemonClient.Close()\n        if len(pod.Status.ContainerStatuses) == 0 {\n            return fmt.Errorf("%s %s can\'t get the state of container", pod.Namespace, pod.Name)\n        }\n\n        containerID := pod.Status.ContainerStatuses[0].ContainerID\n\n        _, err = daemonClient.ExecHelloWorldChaos(ctx, &pb.ExecHelloWorldRequest{\n            ContainerId: containerID,\n        })\n        if err != nil {\n            return err\n        }\n    }\n\n    return nil\n}\n\n// Recover means the reconciler recovers the chaos action\nfunc (r *endpoint) Recover(ctx context.Context, req ctrl.Request, chaos v1alpha1.InnerObject) error {\n    return nil\n}\n\n// Object would return the instance of chaos\nfunc (r *endpoint) Object() v1alpha1.InnerObject {\n    return &v1alpha1.HelloWorldChaos{}\n}\n\nfunc init() {\n    router.Register("helloworldchaos", &v1alpha1.HelloWorldChaos{}, func(obj runtime.Object) bool {\n        return true\n    }, func(ctx ctx.Context) end.Endpoint {\n        return &endpoint{\n            Context: ctx,\n        }\n    })\n}\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("p",{parentName:"blockquote"},"In our case here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recover")," function does nothing because ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorldChaos")," only prints some log and doesn't change anything. You may need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recover")," function in your development.")))),(0,r.kt)("h2",{id:"verify-your-chaos"},"Verify your chaos"),(0,r.kt)("p",null,"Now you are all set. It's time to verify the chaos type you just created. Take the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the Docker image. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.4/development_guides/develop_a_new_chaos#make-the-docker-image"},"Make the Docker image"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade Chaos Mesh. Since we have already installed Chaos Mesh in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.4/development_guides/develop_a_new_chaos#run-chaos"},"Develop a New Chaos"),", we only need to restart it with the latest image:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout restart deployment chaos-controller-manager -n chaos-testing\nkubectl rollout restart daemonset chaos-daemon -n chaos-testing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the Pods for test:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n")),(0,r.kt)("p",{parentName:"li"},"This command deploys two Pods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox")," namespace.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the chaos YAML file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: busybox-helloworld-chaos\nspec:\n  selector:\n    namespaces:\n      - busybox\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the chaos:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/helloworld.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify your chaos. There are different logs to check to see whether your chaos works as expected:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the log of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-testing\n")),(0,r.kt)("p",{parentName:"li"},"The log is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},'2020-09-09T09:13:36.018Z        INFO    controllers.HelloWorldChaos     Reconciling helloworld chaos    {"reconciler": "helloworldchaos"}\n2020-09-09T09:13:36.018Z        INFO    controllers.HelloWorldChaos     Apply helloworld chaos  {"reconciler": "helloworldchaos"}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the log of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs chaos-daemon-{pod-post-fix} -n chaos-testing\n")),(0,r.kt)("p",{parentName:"li"},"The log is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},'2020-09-09T09:13:36.036Z        INFO    chaos-daemon-server     exec hello world chaos  {"request": "container_id:\\"docker://8f2918ee05ed587f7074a923cede3bbe5886277faca95d989e513f7b7e831da5\\" "}\n2020-09-09T09:13:36.044Z        INFO    chaos-daemon-server     build command   {"command": "nsenter -u/proc/45664/ns/uts -- sh -c echo \'hello\' `hostname`"}\n2020-09-09T09:13:36.058Z        INFO    chaos-daemon-server     cmd output      {"output": "hello busybox-1\\n"}\n2020-09-09T09:13:36.064Z        INFO    chaos-daemon-server     exec hello world chaos  {"request": "container_id:\\"docker://53e982ba5593fa87648edba665ba0f7da3f58df67f8b70a1354ca00447c00524\\" "}\n2020-09-09T09:13:36.066Z        INFO    chaos-daemon-server     build command   {"command": "nsenter -u/proc/45620/ns/uts -- sh -c echo \'hello\' `hostname`"}\n2020-09-09T09:13:36.070Z        INFO    chaos-daemon-server     cmd output      {"output": "hello busybox-0\\n"}\n')),(0,r.kt)("p",{parentName:"li"},"We can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," prints ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," to these two Pods."))))))}d.isMDXComponent=!0}}]);
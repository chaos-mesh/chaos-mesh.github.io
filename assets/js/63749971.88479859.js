"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8447],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27821:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],i={title:"Simulate JVM Application Faults"},s=void 0,p={unversionedId:"simulate-jvm-application-chaos",id:"version-2.0.4/simulate-jvm-application-chaos",isDocsHomePage:!1,title:"Simulate JVM Application Faults",description:"JVMChaos introduction",source:"@site/versioned_docs/version-2.0.4/simulate-jvm-application-chaos.md",sourceDirName:".",slug:"/simulate-jvm-application-chaos",permalink:"/docs/simulate-jvm-application-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.4/simulate-jvm-application-chaos.md",tags:[],version:"2.0.4",frontMatter:{title:"Simulate JVM Application Faults"},sidebar:"version-2.0.4/docs",previous:{title:"Simulate Time Faults",permalink:"/docs/simulate-time-chaos-on-kubernetes"},next:{title:"Simulate Linux Kernel Faults",permalink:"/docs/simulate-kernel-chaos-on-kubernetes"}},m=[{value:"JVMChaos introduction",id:"jvmchaos-introduction",children:[]},{value:"Usage restrictions",id:"usage-restrictions",children:[]},{value:"Create experiments using YAML files",id:"create-experiments-using-yaml-files",children:[{value:"1. Create a namespace and configure MutatingAdmissionWebhook",id:"1-create-a-namespace-and-configure-mutatingadmissionwebhook",children:[]},{value:"2. Create target applications",id:"2-create-target-applications",children:[]},{value:"3. Obseve application behaviors before injecting faults",id:"3-obseve-application-behaviors-before-injecting-faults",children:[]},{value:"4. Inject JVMChaos and check",id:"4-inject-jvmchaos-and-check",children:[]}]},{value:"Field description",id:"field-description",children:[]}],c={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jvmchaos-introduction"},"JVMChaos introduction"),(0,r.kt)("p",null,"JVMChaos can inject faults into JVM of the target container, which can be applied for any application that uses JVM as the runtime environment. Currently, JVMChaos uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-jvm"},"chaosblade-exec-jvm")," to inject faults into the JVM. JVMChaos supports the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify return value"),(0,r.kt)("li",{parentName:"ul"},"Method Delay"),(0,r.kt)("li",{parentName:"ul"},"Throw custom exceptions"),(0,r.kt)("li",{parentName:"ul"},"Out of memory"),(0,r.kt)("li",{parentName:"ul"},"Fill JVM Code Cache"),(0,r.kt)("li",{parentName:"ul"},"CPU full load in Java"),(0,r.kt)("li",{parentName:"ul"},"Perform customized Groovy or Java script")),(0,r.kt)("h2",{id:"usage-restrictions"},"Usage restrictions"),(0,r.kt)("p",null,"Currently, Chaos Mesh uses ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"MutatingAdmissionWebhook")," to modify the Pod definition and loads Java agent using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/pods/init-containers/"},"Init Containers")," instead of loading java agent at runtime. Therefore, there are some restrictions when you use JVMChaos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Webhook support needs to be enabled in Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"For Pods that exist before you configure ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"MutatingAdmissionWebhook")," for the namespace, they will not be affected by JVMChaos."),(0,r.kt)("li",{parentName:"ul"},"JVM in all containers under namespace will load Java agent at the startup stage, and JVMChaos will not unload Java agent after being deleted. If you hope to clean up the Java agent considering the impact that Java agent may have on program behaviors or performance, you can move the workload out of the namespace.")),(0,r.kt)("p",null,"In addition, creating JVMChaos using Chaos Dashboard is not supported currently."),(0,r.kt)("h2",{id:"create-experiments-using-yaml-files"},"Create experiments using YAML files"),(0,r.kt)("p",null,"The following example shows you the methods and effects of JVMChaos with a specified return value. The YAML files referred in the following steps can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm"},"examples/jvm"),". The default work directory for the following steps is in ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/jvm"),". The default namespace installed by Chaos Mesh is ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing"),"."),(0,r.kt)("h3",{id:"1-create-a-namespace-and-configure-mutatingadmissionwebhook"},"1. Create a namespace and configure MutatingAdmissionWebhook"),(0,r.kt)("p",null,"Create the namespace for the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns app\n")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"admission-webhook=enabled")," label for the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," namespace, and allow the MutatingAdmissionWebhook of Chaos Mesh to modify Pods under the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label ns app admission-webhook=enabled\n")),(0,r.kt)("p",null,"Prepare a template for modifications to be made by JVMChaos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f sidecar-template.yaml\nkubectl apply -f sidecar.yaml\n")),(0,r.kt)("h3",{id:"2-create-target-applications"},"2. Create target applications"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/jvm-chaos-demo"},"jvm-chaos-demo")," is a simple Spring Boot application and here serves as a target application. A target application is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"example/jvm/app.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: springboot-jvmchaos-demo\n  namespace: app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: springboot-jvmchaos-demo\n  template:\n    metadata:\n      annotations:\n        admission-webhook.chaos-mesh.org/request: jvmchaos-sidecar\n      creationTimestamp: null\n      labels:\n        app: springboot-jvmchaos-demo\n    spec:\n      containers:\n        - image: 'gallardot/chaosmesh-jvmchaos-sample:latest'\n          imagePullPolicy: IfNotPresent\n          name: springboot-jvmchaos-demo\n")),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"admission-webhook.chaos-mesh.org/request: jvmchaos-sidecar")," corresponds to the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecar.yaml")," of step 1."),(0,r.kt)("p",null,"Build application deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n app get pods"),", and then you can find ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," Pod with a name like ",(0,r.kt)("inlineCode",{parentName:"p"},"springboot-jvmchaos-demo-777d94c5b9-7t7l2")," under the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),". Wait for ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1")," and then execute the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n app get pods\n")),(0,r.kt)("p",null,"The result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME                                        READY   STATUS    RESTARTS   AGE\nspringboot-jvmchaos-demo-777d94c5b9-7t7l2   1/1     Running   0          21s\n")),(0,r.kt)("h3",{id:"3-obseve-application-behaviors-before-injecting-faults"},"3. Obseve application behaviors before injecting faults"),(0,r.kt)("p",null,"You can observe the behavior of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jvm-chaos-demo")," application before injecting faults, for example:"),(0,r.kt)("p",null,"Map the port of Pod to local using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n app port-forward pod/springboot-jvmchaos-demo-777d94c5b9-7t7l2 8080:8080\n")),(0,r.kt)("p",null,"Use curl in another shell session or directly access to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/hello"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello firend")," is expected to be returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/hello\nHello friend\n")),(0,r.kt)("h3",{id:"4-inject-jvmchaos-and-check"},"4. Inject JVMChaos and check"),(0,r.kt)("p",null,"The JVMChaos with a specified return value is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: jvm-return-example\n  namespace: app\nspec:\n  action: return\n  target: jvm\n  flags:\n    value: 'hello chaos mesh!'\n  matchers:\n    classname: 'org.chaosmesh.jvm.Application'\n    methodname: 'hello'\n  mode: one\n  selector:\n    labelSelectors:\n      app: springboot-jvmchaos-demo\n")),(0,r.kt)("p",null,"JVMChaos modifies the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," method to string ",(0,r.kt)("inlineCode",{parentName:"p"},"hello chaos mesh!"),"."),(0,r.kt)("p",null,"Inject JVMChaos with a specified value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./jvm-return-example.yaml\n")),(0,r.kt)("p",null,"Use curl or directly access to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/hello"},"http://localhost:8080/hello"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hello chaos mesh!")," is expected to be returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/hello\nhello chaos mesh!\n")),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific fault type. The available fault types include return, script, cfl, oom, ccf, tce, tcf, cpf, tde, and tpf."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"return")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates how to select Pod. The supported modes include one, all, fixed, fixed-percent, and random-max-percent."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the parameter passed to ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-exec-jvm"),", representing JVMChaos targets, supporting servlet, psql, jvm, jedis, http, dubbo, rocketmq, tars, mysql, ruid, redisson, rabbitmq, monodb."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flags"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates parameters passed to ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-exec-jvm")," and represents the flags of action."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matchers"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates parameters passed to ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-execu-jvm")," and represents the matching of injection points."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"For the meaning of the value of action, refer to:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies method call delay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"return"),(0,r.kt)("td",{parentName:"tr",align:null},"Modifies the return value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"script"),(0,r.kt)("td",{parentName:"tr",align:null},"Writes groovy and Java implement scenarios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfl"),(0,r.kt)("td",{parentName:"tr",align:null},"Java CPU usage overload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oom"),(0,r.kt)("td",{parentName:"tr",align:null},"Out of memory, supporting oom of heap, stack, and metaspaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ccf"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM code cache fill")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tce"),(0,r.kt)("td",{parentName:"tr",align:null},"Throw custom exceptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpf"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection pool full")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tde"),(0,r.kt)("td",{parentName:"tr",align:null},"Throw the first exception of method declare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tpf"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread pool full")))),(0,r.kt)("p",null,"For the details of action, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://chaosblade-io.gitbook.io/chaosblade-help-zh-cn/blade-create-jvm"},"chaos blade document"),"."),(0,r.kt)("p",null,"For the parameters passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),", Chaos Mesh will merge all fields in ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"matchers")," as a request body and then send it to ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),". For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-dev-doc/blob/a7074ab656de469f7dfaa19227723d0967c590ae/zh-cn/chaosblade-exec-jvm/%E5%8D%8F%E8%AE%AE%E7%AF%87.md"},"chaosblade-exec-jvm/Protocol"),"."))}d.isMDXComponent=!0}}]);
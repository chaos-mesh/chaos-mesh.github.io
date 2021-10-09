"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8669],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83670:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],p={title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c"},i=void 0,m={unversionedId:"simulate-jvm-application-chaos",id:"version-2.0.2/simulate-jvm-application-chaos",isDocsHomePage:!1,title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c",description:"JVMChaos \u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.2/simulate-jvm-application-chaos.md",sourceDirName:".",slug:"/simulate-jvm-application-chaos",permalink:"/zh/docs/simulate-jvm-application-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.0.2/simulate-jvm-application-chaos.md",tags:[],version:"2.0.2",frontMatter:{title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c"},sidebar:"version-2.0.2/docs",previous:{title:"\u6a21\u62df\u65f6\u95f4\u6545\u969c",permalink:"/zh/docs/simulate-time-chaos-on-kubernetes"},next:{title:"\u6a21\u62df Linux \u5185\u6838\u6545\u969c",permalink:"/zh/docs/simulate-kernel-chaos-on-kubernetes"}},s=[{value:"JVMChaos \u4ecb\u7ecd",id:"jvmchaos-\u4ecb\u7ecd",children:[]},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",children:[]},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"1. \u521b\u5efa\u547d\u540d\u7a7a\u95f4\u5e76\u914d\u7f6e MutatingAdmissionWebhook",id:"1-\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u5e76\u914d\u7f6e-mutatingadmissionwebhook",children:[]},{value:"2. \u521b\u5efa\u88ab\u6d4b\u5e94\u7528",id:"2-\u521b\u5efa\u88ab\u6d4b\u5e94\u7528",children:[]},{value:"3. \u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a",id:"3-\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a",children:[]},{value:"4. \u6ce8\u5165 JVMChaos \u5e76\u9a8c\u8bc1",id:"4-\u6ce8\u5165-jvmchaos-\u5e76\u9a8c\u8bc1",children:[]}]},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[]}],d={toc:s};function c(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jvmchaos-\u4ecb\u7ecd"},"JVMChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"JVMChaos \u80fd\u5411\u76ee\u6807\u5bb9\u5668\u4e2d\u7684 JVM \u6ce8\u5165\u6545\u969c\uff0c\u9002\u7528\u4e8e\u4efb\u4f55\u4f7f\u7528 JVM \u4f5c\u4e3a\u8fd0\u884c\u65f6\u7684\u5e94\u7528\u3002\u76ee\u524d JVMChaos \u501f\u52a9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-jvm"},"chaosblade-exec-jvm")," \u5b9e\u73b0\u5bf9 JVM \u7684\u9519\u8bef\u6ce8\u5165\uff0c\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u6545\u969c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8fd4\u56de\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u5ef6\u8fdf"),(0,r.kt)("li",{parentName:"ul"},"\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6ea2\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u586b\u5145 JVM Code Cache"),(0,r.kt)("li",{parentName:"ul"},"Java \u8fdb\u7a0b CPU \u6ee1\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4efb\u610f\u81ea\u5b9a\u4e49 Groovy/Java \u811a\u672c")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"\u76ee\u524d Chaos Mesh \u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"MutatingAdmissionWebhook")," \u4fee\u6539\u5bf9 Pod \u7684\u5b9a\u4e49\uff0c\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/workloads/pods/init-containers/"},"Init \u5bb9\u5668"),"\u52a0\u8f7d java agnet\uff0c\u5e76\u975e\u8fd0\u884c\u65f6\u52a0\u8f7d java agent\u3002\u56e0\u6b64\u5728\u4f7f\u7528\u65f6\u5b58\u5728\u5982\u4e0b\u9650\u5236\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u9700\u8981\u542f\u7528 Webhook \u652f\u6301\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e3a\u547d\u540d\u7a7a\u95f4\u914d\u7f6e MutatingAdmissionWebhook \u4e4b\u524d\u5df2\u7ecf\u5b58\u5728 Pod\uff0c\u4e0d\u4f1a\u53d7\u5230 JVMChaos \u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u6240\u6709\u5bb9\u5668\u4e2d\u7684 JVM \u90fd\u4f1a\u5728\u542f\u52a8\u9636\u6bb5\u52a0\u8f7d java agent\uff0cJVMChaos \u5728\u88ab\u5220\u9664\u540e\u4e5f\u4e0d\u4f1a\u5378\u8f7d java agent\u3002\u82e5\u8003\u8651\u5230 java agent \u53ef\u80fd\u5bf9\u7a0b\u5e8f\u884c\u4e3a\u6216\u6027\u80fd\u5e26\u6765\u7684\u5f71\u54cd\uff0c\u671f\u671b\u6e05\u7406 java agnet\uff0c\u8bf7\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u79fb\u51fa\u8be5\u547d\u540d\u7a7a\u95f4\u3002")),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u76ee\u524d\u65e0\u6cd5\u901a\u8fc7 Chaos Dashboard \u521b\u5efa JVMChaos\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u4ee5\u6307\u5b9a\u8fd4\u56de\u503c\u4e3a\u4f8b\uff0c\u5c55\u793a JVMChaos \u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6548\u679c\u3002\u4ee5\u4e0b\u5185\u5bb9\u4e2d\u6d89\u53ca\u7684 yaml \u6587\u4ef6\u5747\u53ef\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm"},"examples/jvm")," \u4e2d\u627e\u5230\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u9ed8\u8ba4\u7684\u5de5\u4f5c\u8def\u5f84\u4e5f\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/jvm")," \u4e2d\u3002 \u9ed8\u8ba4 Chaos Mesh \u5b89\u88c5\u7684\u547d\u540d\u7a7a\u95f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing"),"\u3002"),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u5e76\u914d\u7f6e-mutatingadmissionwebhook"},"1. \u521b\u5efa\u547d\u540d\u7a7a\u95f4\u5e76\u914d\u7f6e MutatingAdmissionWebhook"),(0,r.kt)("p",null,"\u5efa\u7acb\u5e94\u7528\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns app\n")),(0,r.kt)("p",null,"\u4e3a\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," \u589e\u52a0 label ",(0,r.kt)("inlineCode",{parentName:"p"},"admission-webhook=enabled"),"\uff0c\u5141\u8bb8 Chaos Mesh \u7684 MutatingAdmissionWebhook \u4fee\u6539\u8be5\u547d\u540d\u7a7a\u95f4\u4e0b\u7684 Pod\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label ns app admission-webhook=enabled\n")),(0,r.kt)("p",null,"\u4e3a JVMChaos \u6240\u9700\u8981\u7684\u4fee\u6539\u884c\u4e3a\u51c6\u5907\u6a21\u677f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f sidecar-template.yaml\nkubectl apply -f sidecar.yaml\n")),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u88ab\u6d4b\u5e94\u7528"},"2. \u521b\u5efa\u88ab\u6d4b\u5e94\u7528"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/jvm-chaos-demo"},"jvm-chaos-demo")," \u662f\u4e00\u4e2a\u7b80\u5355\u7684 Spring Boot \u5e94\u7528\uff0c\u6b64\u5904\u4f5c\u4e3a\u88ab\u6d4b\u5e94\u7528\u3002\u88ab\u6d4b\u5e94\u7528\u5b9a\u4e49\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"example/jvm/app.yaml")," \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: springboot-jvmchaos-demo\n  namespace: app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: springboot-jvmchaos-demo\n  template:\n    metadata:\n      annotations:\n        admission-webhook.chaos-mesh.org/request: jvmchaos-sidecar\n      creationTimestamp: null\n      labels:\n        app: springboot-jvmchaos-demo\n    spec:\n      containers:\n        - image: 'gallardot/chaosmesh-jvmchaos-sample:latest'\n          imagePullPolicy: IfNotPresent\n          name: springboot-jvmchaos-demo\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"admission-webhook.chaos-mesh.org/request: jvmchaos-sidecar")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation")," \u4e0e\u6b65\u9aa4 1 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecar.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u7684\u540d\u79f0\u5bf9\u5e94\u3002"),(0,r.kt)("p",null,"\u5efa\u7acb\u5e94\u7528 Deployment\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n app get pods"),"\uff0c\u9884\u671f\u80fd\u591f\u89c2\u5bdf\u5230\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," \u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u4e2a\u540d\u79f0\u5f62\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"springboot-jvmchaos-demo-777d94c5b9-7t7l2")," \u7684 Pod\uff0c\u7b49\u5f85\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1")," \u540e\u8fdb\u884c\u4e0b\u4e00\u6b65\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n app get pods\n")),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME                                        READY   STATUS    RESTARTS   AGE\nspringboot-jvmchaos-demo-777d94c5b9-7t7l2   1/1     Running   0          21s\n")),(0,r.kt)("h3",{id:"3-\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a"},"3. \u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a"),(0,r.kt)("p",null,"\u5728\u6ce8\u5165\u524d\u4f60\u53ef\u4ee5\u5148\u89c2\u6d4b\u5e94\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"jvm-chaos-demo")," \u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," \u5c06 Pod \u7684\u7aef\u53e3\u6620\u5c04\u5230\u672c\u5730\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n app port-forward pod/springboot-jvmchaos-demo-777d94c5b9-7t7l2 8080:8080\n")),(0,r.kt)("p",null,"\u5728\u53e6\u5916\u4e00\u4e2a shell session \u4e2d\u4f7f\u7528 curl \u6216\u8005\u76f4\u63a5\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/hello"),"\uff0c\u9884\u671f\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello firend"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/hello\nHello friend\n")),(0,r.kt)("h3",{id:"4-\u6ce8\u5165-jvmchaos-\u5e76\u9a8c\u8bc1"},"4. \u6ce8\u5165 JVMChaos \u5e76\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u6307\u5b9a\u8fd4\u56de\u503c\u7684 JVMChaos \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: jvm-return-example\n  namespace: app\nspec:\n  action: return\n  target: jvm\n  flags:\n    value: 'hello chaos mesh!'\n  matchers:\n    classname: 'org.chaosmesh.jvm.Application'\n    methodname: 'hello'\n  mode: one\n  selector:\n    labelSelectors:\n      app: springboot-jvmchaos-demo\n")),(0,r.kt)("p",null,"JVMChaos \u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4fee\u6539\u4e3a\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello chaos mesh!"),"\u3002"),(0,r.kt)("p",null,"\u6ce8\u5165\u6307\u5b9a\u8fd4\u56de\u503c\u7684 JVMChaos\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./jvm-return-example.yaml\n")),(0,r.kt)("p",null,"\u4f7f\u7528 curl \u6216\u8005\u76f4\u63a5\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/hello"},"http://localhost:8080/hello"),"\uff0c\u9884\u671f\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"hello chaos mesh!"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/hello\nhello chaos mesh!\n")),(0,r.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\uff0c\u652f\u6301 delay\u3001return\u3001script\u3001cfl\u3001oom\u3001ccf\u3001tce\u3001cpf\u3001tde\u3001tpf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"return")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u9009\u62e9 Pod \u7684\u65b9\u5f0f\uff0c\u652f\u6301 one\u3001all\u3001fixed\u3001fixed-percent\u3001random-max-percent\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e mode \u7684\u53d6\u503c\uff0c\u4e3a mode \u63d0\u4f9b\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-exec-jvm")," \u7684\u53c2\u6570\uff0c\u4ee3\u8868 JVMChaos \u7684\u76ee\u6807\uff0c\u652f\u6301 servlet\u3001psql\u3001jvm\u3001jedis\u3001http\u3001dubbo\u3001rocketmq\u3001tars\u3001mysql\u3001druid\u3001redisson\u3001rabbitmq\u3001mongodb\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flags"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-exec-jvm")," \u7684\u53c2\u6570\uff0c\u4ee3\u8868 action \u7684 flags"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matchers"),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"td"},"chaosblade-exec-jvm")," \u7684\u53c2\u6570\uff0c\u4ee3\u8868\u6ce8\u5165\u70b9\u7684\u5339\u914d\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u5173\u4e8e action \u7684\u53d6\u503c\u7684\u542b\u4e49\uff0c\u53ef\u53c2\u8003\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65b9\u6cd5\u8c03\u7528\u5ef6\u8fdf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"return"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u8fd4\u56de\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"script"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u5199 groovy \u548c java \u5b9e\u73b0\u573a\u666f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfl"),(0,r.kt)("td",{parentName:"tr",align:null},"java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u6ee1\u8f7d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6ea2\u51fa\uff0c\u652f\u6301\u5806\u3001\u6808\u3001metaspace \u533a\u6ea2\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ccf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u586b\u5145 jvm code cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tce"),(0,r.kt)("td",{parentName:"tr",align:null},"\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38\u573a\u666f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6c60\u6ee1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tde"),(0,r.kt)("td",{parentName:"tr",align:null},"\u629b\u65b9\u6cd5\u58f0\u660e\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tpf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6c60\u6ee1")))),(0,r.kt)("p",null,"\u5173\u4e8e action \u7684\u8be6\u7ec6\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://chaosblade-io.gitbook.io/chaosblade-help-zh-cn/blade-create-jvm"},"chaos blade \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u7684\u53c2\u6570\uff0cChaos Mesh \u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"matchers")," \u4e2d\u7684\u6240\u6709\u5b57\u6bb5\u5408\u5e76\u540e\u4f5c\u4e3a\u8bf7\u6c42\u4f53\u53d1\u9001\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),"\uff0c\u5177\u4f53\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-dev-doc/blob/a7074ab656de469f7dfaa19227723d0967c590ae/zh-cn/chaosblade-exec-jvm/%E5%8D%8F%E8%AE%AE%E7%AF%87.md"},"chaosblade-exec-jvm/\u534f\u8bae\u7bc7"),"\u3002"))}c.isMDXComponent=!0}}]);
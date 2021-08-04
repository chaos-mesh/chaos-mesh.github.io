"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1945],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80350:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o={id:"iochaos_experiment",title:"IOChaos Experiment",sidebar_label:"IOChaos Experiment"},l=void 0,s={unversionedId:"user_guides/iochaos_experiment",id:"version-0.9.1/user_guides/iochaos_experiment",isDocsHomePage:!1,title:"IOChaos Experiment",description:"This document helps you build IOChaos experiments.",source:"@site/versioned_docs/version-0.9.1/user_guides/io_chaos.md",sourceDirName:"user_guides",slug:"/user_guides/iochaos_experiment",permalink:"/docs/0.9.1/user_guides/iochaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/io_chaos.md",version:"0.9.1",frontMatter:{id:"iochaos_experiment",title:"IOChaos Experiment",sidebar_label:"IOChaos Experiment"},sidebar:"version-0.9.1/docs",previous:{title:"TimeChaos Experiment",permalink:"/docs/0.9.1/user_guides/timechaos_experiment"},next:{title:"KernelChaos Experiment",permalink:"/docs/0.9.1/user_guides/kernelchaos_experiment"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Commands and arguments for the application container",id:"commands-and-arguments-for-the-application-container",children:[]},{value:"Admission controller",id:"admission-controller",children:[]},{value:"Template Configuration",id:"template-configuration",children:[]},{value:"Data directory",id:"data-directory",children:[]}]},{value:"Injection configuration",id:"injection-configuration",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[{value:"Start a chaos experiment",id:"start-a-chaos-experiment",children:[]}]},{value:"IOChaos available actions",id:"iochaos-available-actions",children:[{value:"delay",id:"delay",children:[]},{value:"errno",id:"errno",children:[]},{value:"mixed",id:"mixed",children:[]}]},{value:"Common Linux system errors",id:"common-linux-system-errors",children:[]},{value:"Available methods",id:"available-methods",children:[]}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document helps you build IOChaos experiments."),(0,i.kt)("p",null,"IOChaos allows you to simulate file system faults such as IO delay and read/write errors. It can inject delay and errno when you use IO system calls such as ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"write"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"IOChaos can only be used if the relevant labels and annotations are set before the application is created. See ",(0,i.kt)("a",{parentName:"p",href:"#create-a-chaos-experiment"},"Create a chaos experiment")," for more information.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"commands-and-arguments-for-the-application-container"},"Commands and arguments for the application container"),(0,i.kt)("p",null,"Chaos Mesh uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/user_guides/sidecar_template/#tips"},(0,i.kt)("inlineCode",{parentName:"a"},"wait-fush.sh"))," to ensure that the fuse-daemon server is running normally before the application starts."),(0,i.kt)("p",null,"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"wait-fush.sh")," needs to be injected into the startup command of the container. If the application process is not started by the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/"},"commands and arguments of the container"),", IOChaos cannot work properly."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"When Kubernetes natively supports ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/issues/753"},"Sidecar Containers")," in future versions, we will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"wait-fush.sh")," dependency.")),(0,i.kt)("h3",{id:"admission-controller"},"Admission controller"),(0,i.kt)("p",null,"IOChaos needs to inject a sidecar container to user pods and the sidecar container can be added to applicable Kubernetes pods using a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"},"mutating webhook admission controller")," provided by Chaos Mesh."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"While admission controllers are enabled by default, some Kubernetes distributions might disable them. In this case, follow the instructions to ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#how-do-i-turn-on-an-admission-controller"},"turn on admission controllers"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"ValidatingAdmissionWebhooks")," and ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"MutatingAdmissionWebhooks")," are required by IOChaos."))),(0,i.kt)("h3",{id:"template-configuration"},"Template Configuration"),(0,i.kt)("p",null,"Chaos Mesh uses a template mechanism to simplify the configuration of sidecar injection."),(0,i.kt)("p",null,"Because of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Go Template")," conflict with ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),", the common template is not included in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/installation/installation#install-by-helm"},"helm chart"),".\nHowever, it will be deployed automatically if you install Chaos Mesh via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/installation/installation#install-chaos-mesh"},"install script"),"."),(0,i.kt)("p",null,"By default, the common template ConfigMaps should be deployed in the same namespace as Chaos Mesh."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f manifests/chaosfs-sidecar.yaml -n <Chaos Mesh namespace>\n")),(0,i.kt)("h3",{id:"data-directory"},"Data directory"),(0,i.kt)("p",null,"The data directory of the application in the target pod should be a ",(0,i.kt)("strong",{parentName:"p"},"subdirectory")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentVolumes"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# the config about tikv PersistentVolumes\nvolumeMounts:\n  - name: datadir\n    mountPath: /var/lib/tikv\n\n# the arguments to start tikv\nARGS="--pd=${CLUSTER_NAME}-pd:2379 \\\n  --advertise-addr=${HOSTNAME}.${HEADLESS_SERVICE_NAME}.${NAMESPACE}.svc:20160 \\\n  --addr=0.0.0.0:20160 \\\n  --data-dir=/var/lib/tikv/data \\  # data directory\n  --capacity=${CAPACITY} \\\n  --config=/etc/tikv/tikv.toml\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The default data directory of TiKV is not a subdirectory of ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistentVolumes"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are testing a TiDB cluster, you need to modify it at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb-operator/blob/master/charts/tidb-cluster/templates/scripts/_start_tikv.sh.tpl"},(0,i.kt)("inlineCode",{parentName:"a"},"_start_tikv.sh.tpl")),"."),(0,i.kt)("li",{parentName:"ul"},"PD has the same issue with TiKV. You need to modify the data directory of PD at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb-operator/blob/master/charts/tidb-cluster/templates/scripts/_start_pd.sh.tpl"},(0,i.kt)("inlineCode",{parentName:"a"},"_start_pd.sh.tpl")),"."))),(0,i.kt)("h2",{id:"injection-configuration"},"Injection configuration"),(0,i.kt)("p",null,"Injection configuration is another ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"ConfigMap")," and is required to fulfill IO Chaos."),(0,i.kt)("p",null,"To define a specified ConfigMap for your application before starting your chaos experiment, please refer to this ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/user_guides/sidecar_configmap"},"document"),"."),(0,i.kt)("p",null,"You can apply the ConfigMap defined for your application to Kubernetes cluster by the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f app-configmap.yaml # app-configmap.yaml is the ConfigMap file\n")),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"Below is a sample YAML file of IOChaos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: IoChaos\nmetadata:\n  name: io-delay-example\n  namespace: chaos-testing\nspec:\n  action: mixed\n  mode: one\n  duration: '400s'\n  path: ''\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  layer: 'fs'\n  percent: '50'\n  delay: '1ms'\n  scheduler:\n    cron: '@every 10m'\n")),(0,i.kt)("p",null,"For more sample files, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sample Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"selector")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Selects pods that are used to inject chaos actions."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Represents the IOChaos actions. Refer to ",(0,i.kt)("a",{parentName:"td",href:"#iochaos-available-actions"},"IOChaos available actions")," for more details."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delay")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"errno")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"mixed"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"mode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the mode to run chaos actions."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"one")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"duration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Represents the duration of a chaos action. The duration might be a string with the signed sequence of decimal numbers, each with optional fraction and a unit suffix."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"300ms"'),"/ ",(0,i.kt)("inlineCode",{parentName:"td"},'"-1.5h"')," / ",(0,i.kt)("inlineCode",{parentName:"td"},'"2h45m"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Defines the value of IOChaos action delay. The duration might be a string with the signed sequence of decimal numbers, each with optional fraction and a unit suffix. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", and "h". If ',(0,i.kt)("inlineCode",{parentName:"td"},"Delay")," is empty, the operator will generate a value for it randomly."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"300ms"'),"/ ",(0,i.kt)("inlineCode",{parentName:"td"},'"-1.5h"')," / ",(0,i.kt)("inlineCode",{parentName:"td"},'"2h45m"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"errno")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the error code that is returned by an IO action. This value and the ",(0,i.kt)("a",{parentName:"td",href:"http://man7.org/linux/man-pages/man3/errno.3.html"},"errno defined by Linux system")," are consistent. This field needs to be set when you choose an ",(0,i.kt)("inlineCode",{parentName:"td"},"errno")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"mixed")," action. If ",(0,i.kt)("inlineCode",{parentName:"td"},"errno")," is empty, the operator randomly generates an error code for it. See the ",(0,i.kt)("a",{parentName:"td",href:"#common-linux-system-errors"},"common Linux system errors")," for more Linux system error codes."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"2"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"percent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the percentage of injection errors and provides a number from 0-100."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"100")," (by default)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the path of files for injecting IOChaos actions. It should be a regular expression for the path which you want to inject errno or delay. If the path is ",(0,i.kt)("inlineCode",{parentName:"td"},'""')," or not defined, the IOChaos action is injected into all files."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"methods")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the IO methods for injecting IOChaos actions. It is an array of string, which sets the IO syscalls."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"open")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"read")," See the ",(0,i.kt)("a",{parentName:"td",href:"#available-methods"},"available methods")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"addr")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the sidecar HTTP server address for a sidecar container."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'":8080"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"layer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Represents the layer of the IO action."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fs")," (by default).")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Before the application created, you need to enable admission-webhook enabled on the application namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns app-ns\nkubectl label ns app-ns admission-webhook=enabled\n")),(0,i.kt)("p",null,"Then we have two ways to mark the pods we want to inject IO Chaos:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set annotation ",(0,i.kt)("inlineCode",{parentName:"li"},"admission-webhook.chaos-mesh.org/init-request")," on the namespace, then all pods in this namespace meet the selector requirements will be injected.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# set annotation\nkubectl annotate ns app-ns admission-webhook.chaos-mesh.org/init-request=chaosfs-tikv\n\n# create your application\n...\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Set annotation ",(0,i.kt)("inlineCode",{parentName:"li"},"admission-webhook.chaos-mesh.org/request")," on the pods, you can check this ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/etcd/etcd.yaml"},"example"),".")),(0,i.kt)("p",null,"Then, you can start your application and define YAML file to start your chaos experiment."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"The value of the annotation in the above examples, ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-tikv")," is the name field in your injection config.")),(0,i.kt)("h3",{id:"start-a-chaos-experiment"},"Start a chaos experiment"),(0,i.kt)("p",null,"Assume that you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/io-mixed-example.yaml"),", you can run the following command to create a chaos experiment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f examples/io-mixed-example.yaml\n")),(0,i.kt)("h2",{id:"iochaos-available-actions"},"IOChaos available actions"),(0,i.kt)("p",null,"IOChaos currently supports the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delay"),": IO delay action. You can specify the latency before the IO operation returns a result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"errno"),": IO errno action. In this mode, read/write IO operations returns an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mixed"),": Both ",(0,i.kt)("strong",{parentName:"li"},"delay")," and ",(0,i.kt)("strong",{parentName:"li"},"errno")," actions.")),(0,i.kt)("h3",{id:"delay"},"delay"),(0,i.kt)("p",null,"If you are using the delay mode, you can edit spec as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: delay\n  delay: '1ms'\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," is not specified, it is generated randomly on runtime."),(0,i.kt)("h3",{id:"errno"},"errno"),(0,i.kt)("p",null,"If you are using the errno mode, you can edit spec as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: errno\n  errno: '32'\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"errno")," is not specified, it is generated randomly on runtime."),(0,i.kt)("h3",{id:"mixed"},"mixed"),(0,i.kt)("p",null,"If you are using the mixed mode, you can edit spec as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: mixed\n  delay: '1ms'\n  errno: '32'\n")),(0,i.kt)("p",null,"The mix mode defines the ",(0,i.kt)("strong",{parentName:"p"},"delay")," and ",(0,i.kt)("strong",{parentName:"p"},"errno")," actions in one spec."),(0,i.kt)("h2",{id:"common-linux-system-errors"},"Common Linux system errors"),(0,i.kt)("p",null,"Common Linux system errors are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": Operation not permitted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": No such file or directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5"),": I/O error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6"),": No such device or address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"12"),": Out of memory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"16"),": Device or resource busy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"17"),": File exists"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"20"),": Not a directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"22"),": Invalid argument"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"24"),": Too many open files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"28"),": No space left on device")),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Errors/unix_system_errors.html"},"Errors: Linux System Errors")," for more."),(0,i.kt)("h2",{id:"available-methods"},"Available methods"),(0,i.kt)("p",null,"Available methods are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"open")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"write")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mkdir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rmdir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"opendir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fsync")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flush")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"truncate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getattr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chmod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utimens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allocate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getlk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setlk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setlkw")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"statfs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readlink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"symlink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mknod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rename")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unlink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getxattr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listxattr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removexattr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setxattr"))))}d.isMDXComponent=!0}}]);
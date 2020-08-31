(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,O=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(O,b(b({ref:t},c),{},{components:a})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(136)),o={id:"iochaos_experiment",title:"IOChaos Experiment",sidebar_label:"IOChaos Experiment"},b={unversionedId:"user_guides/iochaos_experiment",id:"user_guides/iochaos_experiment",isDocsHomePage:!1,title:"IOChaos Experiment",description:"This document helps you build IOChaos experiments.",source:"@site/docs/user_guides/io_chaos.md",permalink:"/docs/next/user_guides/iochaos_experiment",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/user_guides/io_chaos.md",version:"next",sidebar_label:"IOChaos Experiment",sidebar:"docs",previous:{title:"TimeChaos Experiment",permalink:"/docs/next/user_guides/timechaos_experiment"},next:{title:"KernelChaos Experiment",permalink:"/docs/next/user_guides/kernelchaos_experiment"}},l=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Commands and arguments for the application container",id:"commands-and-arguments-for-the-application-container",children:[]},{value:"Admission controller",id:"admission-controller",children:[]},{value:"Template Configuration",id:"template-configuration",children:[]},{value:"Data directory",id:"data-directory",children:[]}]},{value:"Injection configuration",id:"injection-configuration",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[{value:"Start a chaos experiment",id:"start-a-chaos-experiment",children:[]}]},{value:"IOChaos available actions",id:"iochaos-available-actions",children:[{value:"delay",id:"delay",children:[]},{value:"errno",id:"errno",children:[]},{value:"mixed",id:"mixed",children:[]}]},{value:"Common Linux system errors",id:"common-linux-system-errors",children:[]},{value:"Available methods",id:"available-methods",children:[]}],c={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document helps you build IOChaos experiments."),Object(i.b)("p",null,"IOChaos allows you to simulate file system faults such as IO delay and read/write errors. It can inject delay and errno when you use IO system calls such as ",Object(i.b)("inlineCode",{parentName:"p"},"open"),", ",Object(i.b)("inlineCode",{parentName:"p"},"read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"write"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("p",{parentName:"blockquote"},"IOChaos can only be used if the relevant labels and annotations are set before the application is created. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#create-a-chaos-experiment"}),"Create a chaos experiment")," for more information.")),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"commands-and-arguments-for-the-application-container"},"Commands and arguments for the application container"),Object(i.b)("p",null,"Chaos Mesh uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://chaos-mesh.org/docs/user_guides/sidecar_template/#tips"}),Object(i.b)("inlineCode",{parentName:"a"},"wait-fush.sh"))," to ensure that the fuse-daemon server is running normally before the application starts."),Object(i.b)("p",null,"Therefore, ",Object(i.b)("inlineCode",{parentName:"p"},"wait-fush.sh")," needs to be injected into the startup command of the container. If the application process is not started by the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/"}),"commands and arguments of the container"),", IOChaos cannot work properly."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("p",{parentName:"blockquote"},"When Kubernetes natively supports ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubernetes/enhancements/issues/753"}),"Sidecar Containers")," in future versions, we will remove the ",Object(i.b)("inlineCode",{parentName:"p"},"wait-fush.sh")," dependency.")),Object(i.b)("h3",{id:"admission-controller"},"Admission controller"),Object(i.b)("p",null,"IOChaos needs to inject a sidecar container to user pods and the sidecar container can be added to applicable Kubernetes pods using a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"}),"mutating webhook admission controller")," provided by Chaos Mesh."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"While admission controllers are enabled by default, some Kubernetes distributions might disable them. In this case, follow the instructions to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#how-do-i-turn-on-an-admission-controller"}),"turn on admission controllers"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"}),"ValidatingAdmissionWebhooks")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"}),"MutatingAdmissionWebhooks")," are required by IOChaos."))),Object(i.b)("h3",{id:"template-configuration"},"Template Configuration"),Object(i.b)("p",null,"Chaos Mesh uses a template mechanism to simplify the configuration of sidecar injection."),Object(i.b)("p",null,"Because of the ",Object(i.b)("inlineCode",{parentName:"p"},"Go Template")," conflict with ",Object(i.b)("inlineCode",{parentName:"p"},"helm"),", the common template is not included in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/installation/installation#install-by-helm"}),"helm chart"),".\nHowever, it will be deployed automatically if you install Chaos Mesh via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/installation/installation#install-chaos-mesh"}),"install script"),"."),Object(i.b)("p",null,"By default, the common template ConfigMaps should be deployed in the same namespace as Chaos Mesh."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f manifests/chaosfs-sidecar.yaml -n <Chaos Mesh namespace>\n")),Object(i.b)("h3",{id:"data-directory"},"Data directory"),Object(i.b)("p",null,"The data directory of the application in the target pod should be a ",Object(i.b)("strong",{parentName:"p"},"subdirectory")," of ",Object(i.b)("inlineCode",{parentName:"p"},"PersistentVolumes"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# the config about tikv PersistentVolumes\nvolumeMounts:\n  - name: datadir\n    mountPath: /var/lib/tikv\n\n# the arguments to start tikv\nARGS="--pd=${CLUSTER_NAME}-pd:2379 \\\n  --advertise-addr=${HOSTNAME}.${HEADLESS_SERVICE_NAME}.${NAMESPACE}.svc:20160 \\\n  --addr=0.0.0.0:20160 \\\n  --data-dir=/var/lib/tikv/data \\  # data directory\n  --capacity=${CAPACITY} \\\n  --config=/etc/tikv/tikv.toml\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"The default data directory of TiKV is not a subdirectory of ",Object(i.b)("inlineCode",{parentName:"li"},"PersistentVolumes"),"."),Object(i.b)("li",{parentName:"ul"},"If you are testing a TiDB cluster, you need to modify it at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/pingcap/tidb-operator/blob/master/charts/tidb-cluster/templates/scripts/_start_tikv.sh.tpl"}),Object(i.b)("inlineCode",{parentName:"a"},"_start_tikv.sh.tpl")),"."),Object(i.b)("li",{parentName:"ul"},"PD has the same issue with TiKV. You need to modify the data directory of PD at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/pingcap/tidb-operator/blob/master/charts/tidb-cluster/templates/scripts/_start_pd.sh.tpl"}),Object(i.b)("inlineCode",{parentName:"a"},"_start_pd.sh.tpl")),"."))),Object(i.b)("h2",{id:"injection-configuration"},"Injection configuration"),Object(i.b)("p",null,"Injection configuration is another ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"}),"ConfigMap")," and is required to fulfill IO Chaos."),Object(i.b)("p",null,"To define a specified ConfigMap for your application before starting your chaos experiment, please refer to this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/user_guides/sidecar_configmap"}),"document"),"."),Object(i.b)("p",null,"You can apply the ConfigMap defined for your application to Kubernetes cluster by the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f app-configmap.yaml # app-configmap.yaml is the ConfigMap file\n")),Object(i.b)("h2",{id:"configuration-file"},"Configuration file"),Object(i.b)("p",null,"Below is a sample YAML file of IOChaos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: IoChaos\nmetadata:\n  name: io-delay-example\n  namespace: chaos-testing\nspec:\n  action: mixed\n  mode: one\n  duration: "400s"\n  path: ""\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n  layer: "fs"\n  percent: "50"\n  delay: "1ms"\n  scheduler:\n    cron: "@every 10m"\n')),Object(i.b)("p",null,"For more sample files, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Sample Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"selector")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selects pods that are used to inject chaos actions."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"action")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the IOChaos actions. Refer to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#iochaos-available-actions"}),"IOChaos available actions")," for more details."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"delay")," / ",Object(i.b)("inlineCode",{parentName:"td"},"errno")," / ",Object(i.b)("inlineCode",{parentName:"td"},"mixed"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"mode")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the mode to run chaos actions."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"one")," / ",Object(i.b)("inlineCode",{parentName:"td"},"all")," / ",Object(i.b)("inlineCode",{parentName:"td"},"fixed")," / ",Object(i.b)("inlineCode",{parentName:"td"},"fixed-percent")," / ",Object(i.b)("inlineCode",{parentName:"td"},"random-max-percent"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"duration")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the duration of a chaos action. The duration might be a string with the signed sequence of decimal numbers, each with optional fraction and a unit suffix."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"300ms"'),"/ ",Object(i.b)("inlineCode",{parentName:"td"},'"-1.5h"')," / ",Object(i.b)("inlineCode",{parentName:"td"},'"2h45m"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"delay")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Defines the value of IOChaos action delay. The duration might be a string with the signed sequence of decimal numbers, each with optional fraction and a unit suffix. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", and "h". If ',Object(i.b)("inlineCode",{parentName:"td"},"Delay")," is empty, the operator will generate a value for it randomly."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"300ms"'),"/ ",Object(i.b)("inlineCode",{parentName:"td"},'"-1.5h"')," / ",Object(i.b)("inlineCode",{parentName:"td"},'"2h45m"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"errno")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the error code that is returned by an IO action. This value and the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://man7.org/linux/man-pages/man3/errno.3.html"}),"errno defined by Linux system")," are consistent. This field needs to be set when you choose an ",Object(i.b)("inlineCode",{parentName:"td"},"errno")," or ",Object(i.b)("inlineCode",{parentName:"td"},"mixed")," action. If ",Object(i.b)("inlineCode",{parentName:"td"},"errno")," is empty, the operator randomly generates an error code for it. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#common-linux-system-errors"}),"common Linux system errors")," for more Linux system error codes."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"2"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"percent")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the percentage of injection errors and provides a number from 0-100."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"100")," (by default)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"path")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the path of files for injecting IOChaos actions. It should be a regular expression for the path which you want to inject errno or delay. If the path is ",Object(i.b)("inlineCode",{parentName:"td"},'""')," or not defined, the IOChaos action is injected into all files."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"methods")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the IO methods for injecting IOChaos actions. It is an array of string, which sets the IO syscalls."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"open")," / ",Object(i.b)("inlineCode",{parentName:"td"},"read")," See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#available-methods"}),"available methods")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"addr")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the sidecar HTTP server address for a sidecar container."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'":8080"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"layer")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the layer of the IO action."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"fs")," (by default).")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Before the application created, you need to enable admission-webhook enabled on the application namespace:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns app-ns\nkubectl label ns app-ns admission-webhook=enabled\n")),Object(i.b)("p",null,"Then we have two ways to mark the pods we want to inject IO Chaos:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set annotation ",Object(i.b)("inlineCode",{parentName:"li"},"admission-webhook.chaos-mesh.org/init-request")," on the namespace, then all pods in this namespace meet the selector requirements will be injected.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# set annotation\nkubectl annotate ns app-ns admission-webhook.chaos-mesh.org/init-request=chaosfs-tikv\n\n# create your application\n...\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Set annotation ",Object(i.b)("inlineCode",{parentName:"li"},"admission-webhook.chaos-mesh.org/request")," on the pods, you can check this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/etcd/etcd.yaml"}),"example"),".")),Object(i.b)("p",null,"Then, you can start your application and define YAML file to start your chaos experiment."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("p",{parentName:"blockquote"},"The value of the annotation in the above examples, ",Object(i.b)("inlineCode",{parentName:"p"},"chaos-tikv")," is the name filed in your injection config.")),Object(i.b)("h3",{id:"start-a-chaos-experiment"},"Start a chaos experiment"),Object(i.b)("p",null,"Assume that you are using ",Object(i.b)("inlineCode",{parentName:"p"},"examples/io-mixed-example.yaml"),", you can run the following command to create a chaos experiment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f examples/io-mixed-example.yaml\n")),Object(i.b)("h2",{id:"iochaos-available-actions"},"IOChaos available actions"),Object(i.b)("p",null,"IOChaos currently supports the following actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"delay"),": IO delay action. You can specify the latency before the IO operation returns a result."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"errno"),": IO errno action. In this mode, read/write IO operations returns an error."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mixed"),": Both ",Object(i.b)("strong",{parentName:"li"},"delay")," and ",Object(i.b)("strong",{parentName:"li"},"errno")," actions.")),Object(i.b)("h3",{id:"delay"},"delay"),Object(i.b)("p",null,"If you are using the delay mode, you can edit spec as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  action: delay\n  delay: "1ms"\n')),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"delay")," is not specified, it is generated randomly on runtime."),Object(i.b)("h3",{id:"errno"},"errno"),Object(i.b)("p",null,"If you are using the errno mode, you can edit spec as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  action: errno\n  errno: "32"\n')),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"errno")," is not specified, it is generated randomly on runtime."),Object(i.b)("h3",{id:"mixed"},"mixed"),Object(i.b)("p",null,"If you are using the mixed mode, you can edit spec as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  action: mixed\n  delay: "1ms"\n  errno: "32"\n')),Object(i.b)("p",null,"The mix mode defines the ",Object(i.b)("strong",{parentName:"p"},"delay")," and ",Object(i.b)("strong",{parentName:"p"},"errno")," actions in one spec."),Object(i.b)("h2",{id:"common-linux-system-errors"},"Common Linux system errors"),Object(i.b)("p",null,"Common Linux system errors are as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),": Operation not permitted"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2"),": No such file or directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"5"),": I/O error"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"6"),": No such device or address"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"12"),": Out of memory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"16"),": Device or resource busy"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"17"),": File exists"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"20"),": Not a directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"22"),": Invalid argument"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"24"),": Too many open files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"28"),": No space left on device")),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Errors/unix_system_errors.html"}),"Errors: Linux System Errors")," for more."),Object(i.b)("h2",{id:"available-methods"},"Available methods"),Object(i.b)("p",null,"Available methods are as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"open")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"read")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"write")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mkdir")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rmdir")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"opendir")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fsync")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"flush")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"release")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"truncate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getattr")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chown")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chmod")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"utimens")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allocate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getlk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setlk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setlkw")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"statfs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"readlink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"symlink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"access")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"link")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mknod")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rename")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unlink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getxattr")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"listxattr")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"removexattr")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setxattr"))))}s.isMDXComponent=!0}}]);
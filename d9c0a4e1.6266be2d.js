(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(158)),r={id:"sidecar_template",title:"Sidecar Template",sidebar_label:"Sidecar Template"},s={unversionedId:"user_guides/sidecar_template",id:"version-0.9.0/user_guides/sidecar_template",isDocsHomePage:!1,title:"Sidecar Template",description:"The following content is the common template ConfigMap defined for injecting IOChaos sidecar, you can also find this example here:",source:"@site/versioned_docs/version-0.9.0/user_guides/sidecar_template.md",permalink:"/docs/0.9.0/user_guides/sidecar_template",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/versioned_docs/version-0.9.0/user_guides/sidecar_template.md",version:"0.9.0",sidebar_label:"Sidecar Template",sidebar:"version-0.9.0/docs",previous:{title:"Sidecar ConfigMap",permalink:"/docs/0.9.0/user_guides/sidecar_configmap"},next:{title:"Network latency simulation across multiple data centers",permalink:"/docs/0.9.0/use_cases/multi_data_centers"}},c=[{value:"Template ConfigMap",id:"template-configmap",children:[{value:"Containers",id:"containers",children:[]},{value:"Tips",id:"tips",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following content is the common template ConfigMap defined for injecting IOChaos sidecar, you can also find this example ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/manifests/chaosfs-sidecar.yaml"}),"here"),":"),Object(o.b)("h2",{id:"template-configmap"},"Template ConfigMap"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    initContainers:\n    - name: inject-scripts\n      image: pingcap/chaos-scripts:latest\n      imagePullPolicy: Always\n      command: ["sh", "-c", "/scripts/init.sh -d {{.DataPath}} -f {{.MountPath}}/fuse-data"]\n    containers:\n    - name: chaosfs\n      image: pingcap/chaos-fs:latest\n      imagePullPolicy: Always\n      ports:\n      - containerPort: 65533\n      securityContext:\n        privileged: true\n      command:\n        - /usr/local/bin/chaosfs\n        - -addr=:65533\n        - -pidfile=/tmp/fuse/pid\n        - -original={{.MountPath}}/fuse-data\n        - -mountpoint={{.DataPath}}\n      volumeMounts:\n        - name: {{.VolumeName}}\n          mountPath: {{.MountPath}}\n          mountPropagation: Bidirectional\n    volumeMounts:\n    - name: {{.VolumeName}}\n      mountPath: {{.MountPath}}\n      mountPropagation: HostToContainer\n    - name: scripts\n      mountPath: /tmp/scripts\n    - name: fuse\n      mountPath: /tmp/fuse\n    volumes:\n    - name: scripts\n      emptyDir: {}\n    - name: fuse\n      emptyDir: {}\n    postStart:\n      {{.ContainerName}}:\n        command:\n          - /tmp/scripts/wait-fuse.sh\n')),Object(o.b)("p",null,"Template config defines some variables by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"Go Template")," mechanism. This example has four arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DataPath: original data directory"),Object(o.b)("li",{parentName:"ul"},"MountPath: after injecting chaosfs sidecar, data directory will be mounted to {{.MountPath}}/fuse-data"),Object(o.b)("li",{parentName:"ul"},"VolumeName: the data volume name used by the pod"),Object(o.b)("li",{parentName:"ul"},"ContainerName: to which container the sidecar is injected")),Object(o.b)("p",null,"For fields defined in this template, we have some brief descriptions below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"initContainers"),": defines the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"}),"initContainer")," need to be injected."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"container"),": defines the sidecar container need to be injected."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"volumeMounts"),": defines the new volumeMounts or overwrite the old volumeMounts of each containers in target pods."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"volume"),": defines the new volumes for the target pod or overwrite the old volumes in target pods."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"postStart"),": called after a container is created first. If the handler fails, the containers will failed.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"Chaos controller-manager only watches template config map with the label selector specified by its flag ",Object(o.b)("inlineCode",{parentName:"p"},"--template-labels"),", by default this label\nis ",Object(o.b)("inlineCode",{parentName:"p"},"app.kubernetes.io/component=template")," if your Chaos Mesh is deployed by helm."),Object(o.b)("p",{parentName:"blockquote"},"Each template config map should be deployed in the same namespace as Chaos Mesh, and it is identified by the name of the config map, which is ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs-sidecar")," in the above example."),Object(o.b)("p",{parentName:"blockquote"},"The template config content should be in the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," field. This means it is not possible to define two templates in one config map, you have to use two config maps like the example below.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar0\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    xxxx\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar1\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    xxxx\n")),Object(o.b)("h3",{id:"containers"},"Containers"),Object(o.b)("h4",{id:"chaosfs"},Object(o.b)("inlineCode",{parentName:"h4"},"chaosfs")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," container is designed as a sidecar container and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/cmd/chaosfs"}),"chaosfs")," process runs in this container."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hanwen/go-fuse"}),"fuse libary")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/filesystems/fuse.txt"}),"fusermount")," tool to implement a fuse-daemon service and mounts the application's data directory. ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," hijacks all the file system IO actions of the application, so it can be used to simulate various real-world IO faults."),Object(o.b)("p",null,"The following configuration injects ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," container to the target pods and starts a ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," process in this container."),Object(o.b)("p",null,"In addition, ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," container should be run as ",Object(o.b)("inlineCode",{parentName:"p"},"privileged")," and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"}),Object(o.b)("inlineCode",{parentName:"a"},"mountPropagation"))," field in ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," Container.volumeMounts should be set to ",Object(o.b)("inlineCode",{parentName:"p"},"Bidirectional"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"fusermount")," to mount the data directory of the application container in ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs")," container."),Object(o.b)("p",null,"If any Pod with ",Object(o.b)("inlineCode",{parentName:"p"},"Bidirectional")," mount propagation to the same volume mounts anything there, the Container with ",Object(o.b)("inlineCode",{parentName:"p"},"HostToContainer")," mount propagation will see it."),Object(o.b)("p",null,"This mode is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"rslave")," mount propagation as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt"}),"Linux kernel documentation"),"."),Object(o.b)("p",null,"More detail about ",Object(o.b)("inlineCode",{parentName:"p"},"Mount propagation")," can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"containers:\n- name: chaosfs\n  image: pingcap/chaos-fs\n  imagePullpolicy: Always\n  ports:\n  - containerPort: 65534\n  securityContext:\n    privileged: true\n  command:\n    - /usr/local/bin/chaosfs\n    - -addr=:65534\n    - -pidfile=/tmp/fuse/pid\n    - -original=/var/lib/tikv/fuse-data\n    - -mountpoint=/var/lib/tikv/data\n  volumeMounts:\n    - name: tikv\n      mountPath: /var/lib/tikv\n      mountPropagation: Bidirectional\n")),Object(o.b)("p",null,"Description of ",Object(o.b)("inlineCode",{parentName:"p"},"chaosfs"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"addr"),': defines the address of the grpc server, default value: ":65534".'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pidfile"),": defines the pid file to record the pid of the ",Object(o.b)("inlineCode",{parentName:"li"},"chaosfs")," process."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"original"),": defines the fuse directory. This directory is usually set to the same level directory as the application data directory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mountpoint"),": defines the mountpoint to mount the original directory.")),Object(o.b)("p",null,"This value should be set to the data directory of the target application."),Object(o.b)("h4",{id:"chaos-scripts"},Object(o.b)("inlineCode",{parentName:"h4"},"chaos-scripts")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chaos-scripts")," container is used to inject some scripts to the target pods including ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/scripts/wait-fuse.sh"}),"wait-fuse.sh"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"wait-fuse.sh")," is used by application container to ensure that the fuse-daemon server is running normally before the application starts."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chaos-scripts")," is generally used as an initContainer to do some preparations."),Object(o.b)("p",null,"The following config uses ",Object(o.b)("inlineCode",{parentName:"p"},"chaos-scripts")," container to inject scripts and moves the scripts to ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp/scripts")," directory using ",Object(o.b)("inlineCode",{parentName:"p"},"init.sh"),". ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp/scripts")," is an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/#emptydir"}),"emptyDir volume")," used to share the scripts with all containers of the pod."),Object(o.b)("p",null,"So you can use ",Object(o.b)("inlineCode",{parentName:"p"},"wait-fuse.sh")," script in tikv container to ensure that the fuse-daemon server is running normally before the application starts."),Object(o.b)("p",null,"In addition, ",Object(o.b)("inlineCode",{parentName:"p"},"init.sh")," creates a directory named ",Object(o.b)("inlineCode",{parentName:"p"},"fuse-data")," in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"PersistentVolumes")," directory of the tikv as the original directory for fuse-daemon server and the original directory is required."),Object(o.b)("p",null,"You should also create the original directory in the PersistentVolumes directory of the application."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'initContainers:\n  - name: inject-scripts\n    image: pingcap/chaos-scripts:latest\n    imagePullpolicy: Always\n    command: ["sh", "-c", "/scripts/init.sh -d /var/lib/tikv/data -f /var/lib/tikv/fuse-data"]\n')),Object(o.b)("p",null,"The usage of ",Object(o.b)("inlineCode",{parentName:"p"},"init.sh"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./scripts/init.sh -h\n")),Object(o.b)("p",null,"Expected output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"USAGE: ./scripts/init.sh [-d data directory] [-f fuse directory]\nUsed to do some preparation\nOPTIONS:\n   -h                      Show this message\n   -d <data directory>     Data directory of the application\n   -f <fuse directory>     Data directory of the fuse original directory\n   -s <scripts directory>  Scripts directory\nEXAMPLES:\n   init.sh -d /var/lib/tikv/data -f /var/lib/tikv/fuse-data\n")),Object(o.b)("h3",{id:"tips"},"Tips"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The application Container.volumeMounts used to define data directory should be set to ",Object(o.b)("inlineCode",{parentName:"li"},"HostToContainer"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"scripts")," and ",Object(o.b)("inlineCode",{parentName:"li"},"fuse")," emptyDir should be created and should be mounted to all container of the pod."),Object(o.b)("li",{parentName:"ol"},"The application uses ",Object(o.b)("inlineCode",{parentName:"li"},"wait-fuse.sh")," script to ensure that the fuse-daemon server is running normally.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"postStart:\n  tikv:\n    command:\n      - /tmp/scripts/wait-fuse.sh\n")),Object(o.b)("p",null,"The usage of ",Object(o.b)("inlineCode",{parentName:"p"},"wait-fuse.sh"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./scripts/wait-fuse.sh -h\n")),Object(o.b)("p",null,"Expected output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/wait-fuse.sh: option requires an argument -- h\nUSAGE: ./scripts/wait-fuse.sh [-a <host>] [-p <port>]\nWaiting for fuse server ready\nOPTIONS:\n   -h                   Show this message\n   -f <host>            Set the target file\n   -d <delay>           Set the delay time\n   -r <retry>           Set the retry count\nEXAMPLES:\n   wait-fuse.sh -f /tmp/fuse/pid -d 5 -r 60\n")))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||o;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
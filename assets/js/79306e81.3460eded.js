(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"sidecar_template",title:"Sidecar Template",sidebar_label:"Sidecar Template"},s={unversionedId:"user_guides/sidecar_template",id:"version-0.9.1/user_guides/sidecar_template",isDocsHomePage:!1,title:"Sidecar Template",description:"The following content is the common template ConfigMap defined for injecting IOChaos sidecar, you can also find this example here:",source:"@site/versioned_docs/version-0.9.1/user_guides/sidecar_template.md",sourceDirName:"user_guides",slug:"/user_guides/sidecar_template",permalink:"/docs/0.9.1/user_guides/sidecar_template",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/user_guides/sidecar_template.md",version:"0.9.1",sidebar_label:"Sidecar Template",frontMatter:{id:"sidecar_template",title:"Sidecar Template",sidebar_label:"Sidecar Template"},sidebar:"version-0.9.1/docs",previous:{title:"Sidecar ConfigMap",permalink:"/docs/0.9.1/user_guides/sidecar_configmap"},next:{title:"Network latency simulation across multiple data centers",permalink:"/docs/0.9.1/use_cases/multi_data_centers"}},l=[{value:"Template ConfigMap",id:"template-configmap",children:[{value:"Containers",id:"containers",children:[]},{value:"Tips",id:"tips",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following content is the common template ConfigMap defined for injecting IOChaos sidecar, you can also find this example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/release-0.9/manifests/chaosfs-sidecar.yaml"},"here"),":"),(0,o.kt)("h2",{id:"template-configmap"},"Template ConfigMap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    initContainers:\n    - name: inject-scripts\n      image: pingcap/chaos-scripts:latest\n      imagePullPolicy: Always\n      command: ["sh", "-c", "/scripts/init.sh -d {{.DataPath}} -f {{.MountPath}}/fuse-data"]\n    containers:\n    - name: chaosfs\n      image: pingcap/chaos-fs:latest\n      imagePullPolicy: Always\n      ports:\n      - containerPort: 65533\n      securityContext:\n        privileged: true\n      command:\n        - /usr/local/bin/chaosfs\n        - -addr=:65533\n        - -pidfile=/tmp/fuse/pid\n        - -original={{.MountPath}}/fuse-data\n        - -mountpoint={{.DataPath}}\n      volumeMounts:\n        - name: {{.VolumeName}}\n          mountPath: {{.MountPath}}\n          mountPropagation: Bidirectional\n    volumeMounts:\n    - name: {{.VolumeName}}\n      mountPath: {{.MountPath}}\n      mountPropagation: HostToContainer\n    - name: scripts\n      mountPath: /tmp/scripts\n    - name: fuse\n      mountPath: /tmp/fuse\n    volumes:\n    - name: scripts\n      emptyDir: {}\n    - name: fuse\n      emptyDir: {}\n    postStart:\n      {{.ContainerName}}:\n        command:\n          - /tmp/scripts/wait-fuse.sh\n')),(0,o.kt)("p",null,"Template config defines some variables by ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"Go Template")," mechanism. This example has four arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataPath: original data directory"),(0,o.kt)("li",{parentName:"ul"},"MountPath: after injecting chaosfs sidecar, data directory will be mounted to {{.MountPath}}/fuse-data"),(0,o.kt)("li",{parentName:"ul"},"VolumeName: the data volume name used by the pod"),(0,o.kt)("li",{parentName:"ul"},"ContainerName: to which container the sidecar is injected")),(0,o.kt)("p",null,"For fields defined in this template, we have some brief descriptions below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"initContainers"),": defines the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"initContainer")," need to be injected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"container"),": defines the sidecar container need to be injected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"volumeMounts"),": defines the new volumeMounts or overwrite the old volumeMounts of each containers in target pods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"volume"),": defines the new volumes for the target pod or overwrite the old volumes in target pods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"postStart"),": called after a container is created first. If the handler fails, the containers will failed.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"Chaos controller-manager only watches template config map with the label selector specified by its flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--template-labels"),", by default this label\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"app.kubernetes.io/component=template")," if your Chaos Mesh is deployed by helm."),(0,o.kt)("p",{parentName:"blockquote"},"Each template config map should be deployed in the same namespace as Chaos Mesh, and it is identified by the name of the config map, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs-sidecar")," in the above example."),(0,o.kt)("p",{parentName:"blockquote"},"The template config content should be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field. This means it is not possible to define two templates in one config map, you have to use two config maps like the example below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar0\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    xxxx\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-sidecar1\n  labels:\n    app.kubernetes.io/component: template\ndata:\n  data: |\n    xxxx\n")),(0,o.kt)("h3",{id:"containers"},"Containers"),(0,o.kt)("h4",{id:"chaosfs"},(0,o.kt)("inlineCode",{parentName:"h4"},"chaosfs")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," container is designed as a sidecar container and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/cmd/chaosfs"},"chaosfs")," process runs in this container."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hanwen/go-fuse"},"fuse libary")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/filesystems/fuse.txt"},"fusermount")," tool to implement a fuse-daemon service and mounts the application's data directory. ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," hijacks all the file system IO actions of the application, so it can be used to simulate various real-world IO faults."),(0,o.kt)("p",null,"The following configuration injects ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," container to the target pods and starts a ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," process in this container."),(0,o.kt)("p",null,"In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," container should be run as ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"},(0,o.kt)("inlineCode",{parentName:"a"},"mountPropagation"))," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," Container.volumeMounts should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Bidirectional"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"fusermount")," to mount the data directory of the application container in ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs")," container."),(0,o.kt)("p",null,"If any Pod with ",(0,o.kt)("inlineCode",{parentName:"p"},"Bidirectional")," mount propagation to the same volume mounts anything there, the Container with ",(0,o.kt)("inlineCode",{parentName:"p"},"HostToContainer")," mount propagation will see it."),(0,o.kt)("p",null,"This mode is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"rslave")," mount propagation as described in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt"},"Linux kernel documentation"),"."),(0,o.kt)("p",null,"More detail about ",(0,o.kt)("inlineCode",{parentName:"p"},"Mount propagation")," can be found ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n  - name: chaosfs\n    image: pingcap/chaos-fs\n    imagePullpolicy: Always\n    ports:\n      - containerPort: 65534\n    securityContext:\n      privileged: true\n    command:\n      - /usr/local/bin/chaosfs\n      - -addr=:65534\n      - -pidfile=/tmp/fuse/pid\n      - -original=/var/lib/tikv/fuse-data\n      - -mountpoint=/var/lib/tikv/data\n    volumeMounts:\n      - name: tikv\n        mountPath: /var/lib/tikv\n        mountPropagation: Bidirectional\n")),(0,o.kt)("p",null,"Description of ",(0,o.kt)("inlineCode",{parentName:"p"},"chaosfs"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"addr"),': defines the address of the grpc server, default value: ":65534".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pidfile"),": defines the pid file to record the pid of the ",(0,o.kt)("inlineCode",{parentName:"li"},"chaosfs")," process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"original"),": defines the fuse directory. This directory is usually set to the same level directory as the application data directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mountpoint"),": defines the mountpoint to mount the original directory.")),(0,o.kt)("p",null,"This value should be set to the data directory of the target application."),(0,o.kt)("h4",{id:"chaos-scripts"},(0,o.kt)("inlineCode",{parentName:"h4"},"chaos-scripts")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chaos-scripts")," container is used to inject some scripts to the target pods including ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/scripts/wait-fuse.sh"},"wait-fuse.sh"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wait-fuse.sh")," is used by application container to ensure that the fuse-daemon server is running normally before the application starts."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chaos-scripts")," is generally used as an initContainer to do some preparations."),(0,o.kt)("p",null,"The following config uses ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-scripts")," container to inject scripts and moves the scripts to ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/scripts")," directory using ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/scripts")," is an ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#emptydir"},"emptyDir volume")," used to share the scripts with all containers of the pod."),(0,o.kt)("p",null,"So you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"wait-fuse.sh")," script in tikv container to ensure that the fuse-daemon server is running normally before the application starts."),(0,o.kt)("p",null,"In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," creates a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse-data")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolumes")," directory of the tikv as the original directory for fuse-daemon server and the original directory is required."),(0,o.kt)("p",null,"You should also create the original directory in the PersistentVolumes directory of the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"initContainers:\n  - name: inject-scripts\n    image: pingcap/chaos-scripts:latest\n    imagePullpolicy: Always\n    command: ['sh', '-c', '/scripts/init.sh -d /var/lib/tikv/data -f /var/lib/tikv/fuse-data']\n")),(0,o.kt)("p",null,"The usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./scripts/init.sh -h\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"USAGE: ./scripts/init.sh [-d data directory] [-f fuse directory]\nUsed to do some preparation\nOPTIONS:\n   -h                      Show this message\n   -d <data directory>     Data directory of the application\n   -f <fuse directory>     Data directory of the fuse original directory\n   -s <scripts directory>  Scripts directory\nEXAMPLES:\n   init.sh -d /var/lib/tikv/data -f /var/lib/tikv/fuse-data\n")),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The application Container.volumeMounts used to define data directory should be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"HostToContainer"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"scripts")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"fuse")," emptyDir should be created and should be mounted to all container of the pod."),(0,o.kt)("li",{parentName:"ol"},"The application uses ",(0,o.kt)("inlineCode",{parentName:"li"},"wait-fuse.sh")," script to ensure that the fuse-daemon server is running normally.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"postStart:\n  tikv:\n    command:\n      - /tmp/scripts/wait-fuse.sh\n")),(0,o.kt)("p",null,"The usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"wait-fuse.sh"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./scripts/wait-fuse.sh -h\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/wait-fuse.sh: option requires an argument -- h\nUSAGE: ./scripts/wait-fuse.sh [-a <host>] [-p <port>]\nWaiting for fuse server ready\nOPTIONS:\n   -h                   Show this message\n   -f <host>            Set the target file\n   -d <delay>           Set the delay time\n   -r <retry>           Set the retry count\nEXAMPLES:\n   wait-fuse.sh -f /tmp/fuse/pid -d 5 -r 60\n")))}c.isMDXComponent=!0}}]);
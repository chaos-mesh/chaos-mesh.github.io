(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{216:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),o=(t(0),t(232)),s={id:"offline_installation",title:"Offline Installation"},c={unversionedId:"user_guides/offline_installation",id:"user_guides/offline_installation",isDocsHomePage:!1,title:"Offline Installation",description:"This document describes how to install Chaos Mesh in an offline environment.",source:"@site/docs/user_guides/offline_installation.md",slug:"/user_guides/offline_installation",permalink:"/docs/next/user_guides/offline_installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/user_guides/offline_installation.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/user_guides/installation"},next:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/next/user_guides/experiment_scope"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare the installation file",id:"prepare-the-installation-file",children:[]},{value:"Install Chaos Mesh offline",id:"install-chaos-mesh-offline",children:[]}],l={rightToc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to install Chaos Mesh in an offline environment."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/admin/authorization/rbac"}),"RBAC")," enabled (optional)"),Object(o.b)("li",{parentName:"ul"},"Docker")),Object(o.b)("h2",{id:"prepare-the-installation-file"},"Prepare the installation file"),Object(o.b)("p",null,"To install Chaos Mesh offline, you need to get the installation images via an internet connection. Take the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Specify the version you want to install:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'export CHAOS_MESH_VERSION="v1.1.0"\n')),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"It is recommended that you use a stable release, or you can set the version to ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," if you want to experience the latest features that are under development."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Archive the docker images of Chaos Mesh:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"#pull images of Chaos Mesh","#pull":!0,images:!0,of:!0,Chaos:!0,Mesh:!0}),"docker pull pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker pull pingcap/coredns:v0.2.0\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"#save images of Chaos Mesh to files","#save":!0,images:!0,of:!0,Chaos:!0,Mesh:!0,to:!0,files:!0}),"docker save -o ./image-chaos-mesh pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-daemon pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-dashboard pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-coredns pingcap/coredns:v0.2.0\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the Chaos Mesh repository to your local:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'wget "https://github.com/chaos-mesh/chaos-mesh/archive/${CHAOS_MESH_VERSION}.zip"\n')),Object(o.b)("p",{parentName:"li"},"Or you can download the latest unstable version:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/chaos-mesh/chaos-mesh/archive/master.zip\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"./image-chaos-mesh"),", ",Object(o.b)("inlineCode",{parentName:"p"},"./image-chaos-daemon"),", ",Object(o.b)("inlineCode",{parentName:"p"},"./image-chaos-dashboard"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"{CHAOS_MESH_VERSION}.zip")," into the offline environment."))),Object(o.b)("h2",{id:"install-chaos-mesh-offline"},"Install Chaos Mesh offline"),Object(o.b)("p",null,"Now that you already have the image and repo archive files in the offline environment, start installing Chaos Mesh."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Specify the version you are going to install in the offline environment:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'export CHAOS_MESH_VERSION="v1.1.0"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Load the image from the archive files:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker load -i ./image-chaos-mesh\ndocker load -i ./image-chaos-daemon\ndocker load -i ./image-chaos-dashboard\ndocker load -i ./image-chaos-coredns\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push the Chaos Mesh images. You can choose to push them to Docker Registry or Docker Hub."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Push images to Docker Registry"),Object(o.b)("p",{parentName:"li"},"a. Set the Docker Registry variable, for example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export DOCKER_REGISTRY=localhost:5000\n")),Object(o.b)("p",{parentName:"li"},"b. Tag these images with ",Object(o.b)("inlineCode",{parentName:"p"},"$DOCKER_REGISTRY"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\nexport CHAOS_COREDNS_IMAGE=$DOCKER_REGISTRY/pingcap/coredns:v0.2.0\ndocker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\ndocker image tag pingcap/coredns:v0.2.0 $CHAOS_COREDNS_IMAGE\n")),Object(o.b)("p",{parentName:"li"},"c. Push these images to Docker Registry:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\ndocker push $CHAOS_COREDNS_IMAGE\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If the Docker Registry can only work locally, you need to load and push these images on each K8s node."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Push images to Docker Hub"),Object(o.b)("p",{parentName:"li"},"a. Set the Docker Hub variable, for example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export DOCKER_HUB=hub\n")),Object(o.b)("p",{parentName:"li"},"b. Tag these images with ",Object(o.b)("inlineCode",{parentName:"p"},"$DOCKER_REGISTRY"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export CHAOS_MESH_IMAGE=$DOCKER_HUB/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_HUB/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_HUB/chaos-dashboard:${CHAOS_MESH_VERSION}\nexport CHAOS_COREDNS_IMAGE=$DOCKER_HUB/coredns:v0.2.0\ndocker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\ndocker image tag pingcap/coredns:v0.2.0 $CHAOS_COREDNS_IMAGE\n")),Object(o.b)("p",{parentName:"li"},"c. Push these images to Docker Registry:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\ndocker push $CHAOS_COREDNS_IMAGE\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Chaos Mesh offline with the following steps:"),Object(o.b)("p",{parentName:"li"},"a. Unzip the repo archive files to a path:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"unzip ${CHAOS_MESH_VERSION}.zip -d chaos-mesh && cd chaos-mesh/*/\n")),Object(o.b)("p",{parentName:"li"},"b. Create a namespace for installing Chaos Mesh:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create namespace chaos-testing\n")),Object(o.b)("p",{parentName:"li"},"c. Install Chaos Mesh by helm:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh helm/chaos-mesh  --namespace=chaos-testing \\\n   --set dashboard.create=true \\\n   --set dnsServer.create=true \\\n   --set chaosDaemon.image=$CHAOS_DAEMON_IMAGE \\\n   --set controllerManager.image=$CHAOS_MESH_IMAGE \\\n   --set dashboard.image=$CHAOS_DASHBOARD_IMAGE \\\n   --set dnsServer.image=${CHAOS_COREDNS_IMAGE}\n")),Object(o.b)("p",{parentName:"li"},"d. Check whether Chaos Mesh pods are installed:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"#get pods of Chaos Mesh","#get":!0,pods:!0,of:!0,Chaos:!0,Mesh:!0}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(o.b)("p",{parentName:"li"},"Expected output:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(o.b)("p",{parentName:"li"},"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"issue")," for help."))))}p.isMDXComponent=!0},232:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(t),m=n,O=b["".concat(s,".").concat(m)]||b[m]||h[m]||o;return t?r.a.createElement(O,c(c({ref:a},l),{},{components:t})):r.a.createElement(O,c({ref:a},l))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
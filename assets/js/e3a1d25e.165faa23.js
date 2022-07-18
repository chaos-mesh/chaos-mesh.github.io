"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[86804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Configure the Development Environment"},l=void 0,i={unversionedId:"configure-development-environment",id:"version-2.1.5/configure-development-environment",title:"Configure the Development Environment",description:"This document describes how to configure a development environment for Chaos Mesh.",source:"@site/versioned_docs/version-2.1.5/configure-development-environment.md",sourceDirName:".",slug:"/configure-development-environment",permalink:"/docs/2.1.5/configure-development-environment",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.5/configure-development-environment.md",tags:[],version:"2.1.5",frontMatter:{title:"Configure the Development Environment"},sidebar:"version-2.1.5/docs",previous:{title:"Developer Guide Overview",permalink:"/docs/2.1.5/developer-guide-overview"},next:{title:"Add New Chaos Experiment Type",permalink:"/docs/2.1.5/add-new-chaos-experiment-type"}},s={},p=[{value:"Configuration requirements",id:"configuration-requirements",level:2},{value:"Prepare the toolchain",id:"prepare-the-toolchain",level:2},{value:"Prepare the environment for deployment",id:"prepare-the-environment-for-deployment",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to configure a development environment for Chaos Mesh."),(0,a.kt)("h2",{id:"configuration-requirements"},"Configuration requirements"),(0,a.kt)("p",null,"Before configuring, you need to install the development tools for Chaos Mesh."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"golang"),", v1.15 or later versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," v2.8.2 or later versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"kind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs")," and ",(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com/lang/en/"},"yarn"),", for developing Chaos Dashboard")),(0,a.kt)("h2",{id:"prepare-the-toolchain"},"Prepare the toolchain"),(0,a.kt)("p",null,"After installing the above tools, follow the steps below to configure the toolchain for compiling Chaos Mesh."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repository to your local server."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure that ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running in your environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," is running. Set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," as the address of Docker Registry:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," is in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the configuration environment related to Node.js."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," node -v\n yarn -v\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compile Chaos Mesh:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")))),(0,a.kt)("p",null,"If no error occurs, you have successfully cnofigured the toolchain."),(0,a.kt)("h2",{id:"prepare-the-environment-for-deployment"},"Prepare the environment for deployment"),(0,a.kt)("p",null,"After configuring the toolchain, you need to launch a local Kubernetes cluster to deploy Chaos Mesh. Because kind is installed in the configuration requirements section, you can directly use the following command to launch a Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hack/kind-cluster-build.sh\n")),(0,a.kt)("p",null,"When you no longer need this cluster and want to delete it, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")),(0,a.kt)("p",null,"To start Chaos Dashboard, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ui && yarn\n# start\nyarn workspace @ui/app start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"After finishing the above preparation, you can try to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.1.5/add-new-chaos-experiment-type"},"Add a New Chaos Experiment type"),"."))}m.isMDXComponent=!0}}]);
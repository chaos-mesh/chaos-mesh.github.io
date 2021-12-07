"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6434],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Configure the Development Environment"},p=void 0,s={unversionedId:"configure-development-environment",id:"configure-development-environment",isDocsHomePage:!1,title:"Configure the Development Environment",description:"This document describes how to configure a development environment for Chaos Mesh.",source:"@site/docs/configure-development-environment.md",sourceDirName:".",slug:"/configure-development-environment",permalink:"/docs/next/configure-development-environment",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/configure-development-environment.md",tags:[],version:"current",frontMatter:{title:"Configure the Development Environment"},sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/next/developer-guide-overview"},next:{title:"Add New Chaos Experiment Type",permalink:"/docs/next/add-new-chaos-experiment-type"}},c=[{value:"Configuration requirements",id:"configuration-requirements",children:[],level:2},{value:"Prepare the toolchain",id:"prepare-the-toolchain",children:[],level:2},{value:"Prepare the environment for deployment",id:"prepare-the-environment-for-deployment",children:[],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to configure a development environment for Chaos Mesh."),(0,a.kt)("h2",{id:"configuration-requirements"},"Configuration requirements"),(0,a.kt)("p",null,"Before configuring, you need to install the development tools for Chaos Mesh."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"golang"),", v1.15 or later versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," v2.8.2 or later versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"kind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs")," and ",(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com/lang/en/"},"yarn"),", for developing Chaos Dashboard")),(0,a.kt)("h2",{id:"prepare-the-toolchain"},"Prepare the toolchain"),(0,a.kt)("p",null,"After installing the above tools, follow the steps below to configure the toolchain for compiling Chaos Mesh."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repository to your local server."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure that ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running in your environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," is running. Set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," as the address of Docker Registry:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," is in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the configuration environment related to Node.js."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," node -v\n yarn -v\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compile Chaos Mesh:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")))),(0,a.kt)("p",null,"If no error occurs, you have successfully cnofigured the toolchain."),(0,a.kt)("h2",{id:"prepare-the-environment-for-deployment"},"Prepare the environment for deployment"),(0,a.kt)("p",null,"After configuring the toolchain, you need to launch a local Kubernetes cluster to deploy Chaos Mesh. Because kind is installed in the configuration requirements section, you can directly use the following command to launch a Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hack/kind-cluster-build.sh\n")),(0,a.kt)("p",null,"When you no longer need this cluster and want to delete it, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")),(0,a.kt)("p",null,"To start Chaos Dashboard, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ui && yarn\n# start\nyarn start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"After finishing the above preparation, you can try to ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/add-new-chaos-experiment-type"},"Add a New Chaos Experiment type"),"."))}m.isMDXComponent=!0}}]);
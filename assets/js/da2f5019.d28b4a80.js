"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[141],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"set_up_the_development_environment",title:"Set up the development environment",sidebar_label:"Set up the development environment"},i=void 0,p={unversionedId:"development_guides/set_up_the_development_environment",id:"version-1.2.3/development_guides/set_up_the_development_environment",isDocsHomePage:!1,title:"Set up the development environment",description:"This document walks you through the environment setup process for Chaos Mesh development.",source:"@site/versioned_docs/version-1.2.3/development_guides/setup_env.md",sourceDirName:"development_guides",slug:"/development_guides/set_up_the_development_environment",permalink:"/docs/1.2.3/development_guides/set_up_the_development_environment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/development_guides/setup_env.md",version:"1.2.3",frontMatter:{id:"set_up_the_development_environment",title:"Set up the development environment",sidebar_label:"Set up the development environment"},sidebar:"version-1.2.3/docs",previous:{title:"Development Overview",permalink:"/docs/1.2.3/development_guides/development_overview"},next:{title:"Develop a New Chaos",permalink:"/docs/1.2.3/development_guides/develop_a_new_chaos"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare the toolchain",id:"prepare-the-toolchain",children:[]},{value:"Prepare the deployment environment",id:"prepare-the-deployment-environment",children:[]},{value:"Next step",id:"next-step",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document walks you through the environment setup process for Chaos Mesh development."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"golang")," version >= v1.13"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," version >= v2.8.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs")," and ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/lang/en/"},"yarn")," (for Chaos Dashboard)")),(0,o.kt)("h2",{id:"prepare-the-toolchain"},"Prepare the toolchain"),(0,o.kt)("p",null,"Make sure you have the above prerequisites met. Now follow the steps below to prepare the toolchain for compiling Chaos Mesh:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repo to your local machine."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the Kubernetes API development framework - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make ensure-all\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running on your local machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," is running. Set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," with the registry address:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," is in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check nodejs related environment."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," node -v\n yarn -v\n")))),(0,o.kt)("p",null,"Now you can test the toolchain by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,o.kt)("p",null,"If there is no error in the output, the compiling toolchain is successfully configured."),(0,o.kt)("h2",{id:"prepare-the-deployment-environment"},"Prepare the deployment environment"),(0,o.kt)("p",null,"With the toolchain ready, you still need a local Kubernetes cluster as the deployment environment. Because kind is already installed, you can now set up the Kubernetes cluster directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hack/kind-cluster-build.sh\n")),(0,o.kt)("p",null,"The above script creates a Kubernetes cluster via Kind. When you are done with it, run the following command to delete it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bootstrap Chaos Dashboard. (Optional)"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ui && yarn\n# Run it\nyarn start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n"))),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"Congratulations! You are now all set up for Chaos Mesh development. Try the following tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.2.3/development_guides/develop_a_new_chaos"},"Develop a New Chaos Type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.2.3/development_guides/add_facilities_to_chaos_daemon"},"Add facilities to chaos daemon"))))}c.isMDXComponent=!0}}]);
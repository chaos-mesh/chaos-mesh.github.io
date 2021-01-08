(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(225)),c={id:"set_up_the_development_environment",title:"Set up the development environment",sidebar_label:"Set up the development environment"},l={unversionedId:"development_guides/set_up_the_development_environment",id:"version-1.0.3/development_guides/set_up_the_development_environment",isDocsHomePage:!1,title:"Set up the development environment",description:"This document walks you through the environment setup process for Chaos Mesh development.",source:"@site/versioned_docs/version-1.0.3/development_guides/setup_env.md",slug:"/development_guides/set_up_the_development_environment",permalink:"/docs/1.0.3/development_guides/set_up_the_development_environment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/development_guides/setup_env.md",version:"1.0.3",sidebar_label:"Set up the development environment",sidebar:"version-1.0.3/docs",previous:{title:"Development Guide",permalink:"/docs/1.0.3/development_guides/development_overview"},next:{title:"Develop a New Chaos",permalink:"/docs/1.0.3/development_guides/develop_a_new_chaos"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare the toolchain",id:"prepare-the-toolchain",children:[]},{value:"Prepare the deployment environment",id:"prepare-the-deployment-environment",children:[]},{value:"Next step",id:"next-step",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document walks you through the environment setup process for Chaos Mesh development."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/dl/"}),"golang")," version >= v1.13"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://gcc.gnu.org/"}),"gcc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/"}),"helm")," version >= v2.8.2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/kind"}),"kind")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"nodejs")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://yarnpkg.com/lang/en/"}),"yarn")," (for Chaos Dashboard)")),Object(o.b)("h2",{id:"prepare-the-toolchain"},"Prepare the toolchain"),Object(o.b)("p",null,"Make sure you have the above prerequisites met. Now follow the steps below to prepare the toolchain for compiling Chaos Mesh:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the Chaos Mesh repo to your local machine."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the Kubernetes API development framework - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kubebuilder"}),"kubebuilder")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kustomize"}),"kustomize"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make ensure-all\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker")," is installed and running on your local machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/registry/"}),"Docker Regitry")," is running. Set the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," with the registry address:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," is in your ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source ~/.bash_profile\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check nodejs related environment."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," node -v\n yarn -v\n")))),Object(o.b)("p",null,"Now you can test the toolchain by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make\n")),Object(o.b)("p",null,"If there is no error in the output, the compiling toolchain is successfully configured."),Object(o.b)("h2",{id:"prepare-the-deployment-environment"},"Prepare the deployment environment"),Object(o.b)("p",null,"With the toolchain ready, you still need a local Kubernetes cluster as the deployment environment. Because kind is already installed, you can now set up the Kubernetes cluster directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"hack/kind-cluster-build.sh\n")),Object(o.b)("p",null,"The above script creates a Kubernetes cluster via Kind. When you are done with it, run the following command to delete it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Bootstrap Chaos Dashboard. (Optional)"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ui && yarn\n# Run it\nyarn start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n"))),Object(o.b)("h2",{id:"next-step"},"Next step"),Object(o.b)("p",null,"Congratulations! You are now all set up for Chaos Mesh development. Try the following tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0.3/development_guides/develop_a_new_chaos"}),"Develop a New Chaos Type")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0.3/development_guides/add_facilities_to_chaos_daemon"}),"Add facilities to chaos daemon"))))}s.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
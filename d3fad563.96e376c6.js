(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(205)),l={id:"set_up_the_development_environment",title:"Set up the development environment",sidebar_label:"Set up the development environment"},c={unversionedId:"development_guides/set_up_the_development_environment",id:"version-0.9.1/development_guides/set_up_the_development_environment",isDocsHomePage:!1,title:"Set up the development environment",description:"This document walks you through the environment setup process for Chaos Mesh development.",source:"@site/versioned_docs/version-0.9.1/development_guides/setup_env.md",slug:"/development_guides/set_up_the_development_environment",permalink:"/docs/0.9.1/development_guides/set_up_the_development_environment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/development_guides/setup_env.md",version:"0.9.1",sidebar_label:"Set up the development environment",sidebar:"version-0.9.1/docs",previous:{title:"Development Guide",permalink:"/docs/0.9.1/development_guides/development_overview"},next:{title:"Develop a New Chaos",permalink:"/docs/0.9.1/development_guides/develop_a_new_chaos"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare the toolchain",id:"prepare-the-toolchain",children:[]},{value:"Prepare the deployment environment",id:"prepare-the-deployment-environment",children:[]},{value:"Next step",id:"next-step",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document walks you through the environment setup process for Chaos Mesh development."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://golang.org/dl/"}),"golang")," version >= v1.13"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.docker.com/"}),"docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://gcc.gnu.org/"}),"gcc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://helm.sh/"}),"helm")," version >= v2.8.2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/kind"}),"kind")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://yarnpkg.com/lang/en/"}),"yarn")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"nodejs")," (for Chaos Dashboard)")),Object(o.b)("h2",{id:"prepare-the-toolchain"},"Prepare the toolchain"),Object(o.b)("p",null,"Make sure you have the above prerequisites met. Now follow the steps below to prepare the toolchain for compiling Chaos Mesh:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the Chaos Mesh repo to your local machine."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the Kubernetes API development framework - ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kubebuilder"}),"kubebuilder")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kustomize"}),"kustomize"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"make ensure-all\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker")," is installed and running on your local machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," is in your ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"source ~/. bash_profile\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")),Object(o.b)("p",{parentName:"blockquote"},"If your yarn is newly installed, you might need to restart the terminal to make it available.")),Object(o.b)("p",null,"Now you can test the toolchain by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"make\n")),Object(o.b)("p",null,"If there is no error in the output, the compiling toolchain is successfully configured."),Object(o.b)("h2",{id:"prepare-the-deployment-environment"},"Prepare the deployment environment"),Object(o.b)("p",null,"With the toolchain ready, you still need a local Kubernetes cluster as the deployment environment. Because kind is already installed, you can now set up the Kubernetes cluster directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"hack/kind-cluster-build.sh\n")),Object(o.b)("p",null,"The above script will create a Kubernetes cluster by kind. When you don't need this cluster, you can run the following command to delete it: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")),Object(o.b)("h2",{id:"next-step"},"Next step"),Object(o.b)("p",null,"Congratulations! You are now all set up for Chaos Mesh development. Try the following tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.9.1/development_guides/develop_a_new_chaos"}),"Develop a New Chaos Type")),Object(o.b)("li",{parentName:"ul"},"Add facilities to chaos daemon")))}s.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
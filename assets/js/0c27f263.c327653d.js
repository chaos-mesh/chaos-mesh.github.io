"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1559],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Chaosd Introduction"},l=void 0,d={unversionedId:"chaosd-overview",id:"version-2.0.3/chaosd-overview",isDocsHomePage:!1,title:"Chaosd Introduction",description:"Chaosd introduction",source:"@site/versioned_docs/version-2.0.3/chaosd-overview.md",sourceDirName:".",slug:"/chaosd-overview",permalink:"/docs/chaosd-overview",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.3/chaosd-overview.md",tags:[],version:"2.0.3",frontMatter:{title:"Chaosd Introduction"},sidebar:"version-2.0.3/docs",previous:{title:"Simulate HTTP faults",permalink:"/docs/simulate-http-chaos-on-kubernetes"},next:{title:"Simulate Process Faults",permalink:"/docs/simulate-process-chaos-in-physical-nodes"}},c=[{value:"Chaosd introduction",id:"chaosd-introduction",children:[{value:"Supported fault types",id:"supported-fault-types",children:[]},{value:"Operating environment",id:"operating-environment",children:[]},{value:"Download and deploy",id:"download-and-deploy",children:[]},{value:"Work modes",id:"work-modes",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chaosd-introduction"},"Chaosd introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd"},"Chaosd")," is a Chaos Engineering testing tool provided by Chaos Mesh. You need to download and deploy it separately (see ",(0,r.kt)("a",{parentName:"p",href:"#download-and-deploy"},"Download and deploy"),"). It is used to inject faults into physical machine environments and also recover faults."),(0,r.kt)("p",null,"Chaosd has the following core strengths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy-to-use: You only need to execute simple commands in Chaosd to create and manage Chaos experiments."),(0,r.kt)("li",{parentName:"ul"},"Various fault types: Chaosd provides various fault types to be injected into physical machines at different levels, including process, network, pressure, disk, host, etc. More fault types are to be added."),(0,r.kt)("li",{parentName:"ul"},"Multiple work modes: Chaosd can be used both as a command-line tool and as a service to meet the needs of different scenarios.")),(0,r.kt)("h3",{id:"supported-fault-types"},"Supported fault types"),(0,r.kt)("p",null,"You can use Chaosd to simulate the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Process: Injects faults into the processes. Operations such as killing the process or stopping the process are supported."),(0,r.kt)("li",{parentName:"ul"},"Network: Injects faults into the network of physical machines. Operations such as increasing network latency, losing packets, and corrupting packets are supported."),(0,r.kt)("li",{parentName:"ul"},"Pressure: Injects pressure on the CPU or memory of the physical machines."),(0,r.kt)("li",{parentName:"ul"},"Disk: Injects faults into disks of the physical machines. Operations such as increasing disk load of reads and writes, and filling disks are supported."),(0,r.kt)("li",{parentName:"ul"},"Host: Injects faults into the physical machine. Operations such as shutdown the physical machine are supported.")),(0,r.kt)("p",null,"For details about the introduction and usage of each fault type, refer to the related documentation."),(0,r.kt)("h3",{id:"operating-environment"},"Operating environment"),(0,r.kt)("p",null,"Your Linux kernel version must be v2.17 or later."),(0,r.kt)("h3",{id:"download-and-deploy"},"Download and deploy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the version of Chaosd to be downloaded as the environment variable. For example, v1.0.0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOSD_VERSION=v1.0.0\n")),(0,r.kt)("p",{parentName:"li"},"To view all released versions of Chaosd, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/releases"},"releases"),"."),(0,r.kt)("p",{parentName:"li"},"To download the latest version (not stable), use ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOSD_VERSION=latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download Chaosd:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL -o chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz https://mirrors.chaos-mesh.org/chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the Chaosd file and move it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local")," directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz && sudo mv chaosd-$CHAOSD_VERSION-linux-amd64 /usr/local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the Chaosd directory to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/local/chaosd-$CHAOSD_VERSION-linux-amd64:$PATH\n")))),(0,r.kt)("h3",{id:"work-modes"},"Work modes"),(0,r.kt)("p",null,"You can use Chaosd in the following modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command-line mode: Run Chaosd directly as a command-line tool to inject and recover faults."),(0,r.kt)("li",{parentName:"ul"},"Service mode: Run Chaosd as a service in the background, to inject and recover faults by sending HTTP requests.")))}u.isMDXComponent=!0}}]);
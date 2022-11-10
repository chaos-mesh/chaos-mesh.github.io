"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},45139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={title:"Chaosd Introduction"},s=void 0,i={unversionedId:"chaosd-overview",id:"version-2.4.2/chaosd-overview",title:"Chaosd Introduction",description:"Chaosd introduction",source:"@site/versioned_docs/version-2.4.2/chaosd-overview.md",sourceDirName:".",slug:"/chaosd-overview",permalink:"/docs/chaosd-overview",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.2/chaosd-overview.md",tags:[],version:"2.4.2",frontMatter:{title:"Chaosd Introduction"},sidebar:"docs",previous:{title:"Simulate Block Device Latency",permalink:"/docs/simulate-block-chaos-on-kubernetes"},next:{title:"Simulate Faults on Physical Machines",permalink:"/docs/simulate-physical-machine-chaos"}},l={},d=[{value:"Chaosd introduction",id:"chaosd-introduction",level:2},{value:"Supported fault types",id:"supported-fault-types",level:3},{value:"Operating environment",id:"operating-environment",level:3},{value:"Download and deploy",id:"download-and-deploy",level:3},{value:"Work modes",id:"work-modes",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"chaosd-introduction"},"Chaosd introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd"},"Chaosd")," is a Chaos Engineering testing tool provided by Chaos Mesh. You need to download and deploy it separately (see ",(0,o.kt)("a",{parentName:"p",href:"#download-and-deploy"},"Download and deploy"),"). It is used to inject faults into physical machine environments and also recover faults."),(0,o.kt)("p",null,"Chaosd has the following core strengths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy-to-use: You only need to execute simple commands in Chaosd to create and manage Chaos experiments."),(0,o.kt)("li",{parentName:"ul"},"Various fault types: Chaosd provides various fault types to be injected into physical machines at different levels, including process, network, pressure, disk, host, etc. More fault types are to be added."),(0,o.kt)("li",{parentName:"ul"},"Multiple work modes: Chaosd can be used both as a command-line tool and as a service to meet the needs of different scenarios.")),(0,o.kt)("h3",{id:"supported-fault-types"},"Supported fault types"),(0,o.kt)("p",null,"You can use Chaosd to simulate the following fault types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Process: Injects faults into the processes. Operations such as killing the process or stopping the process are supported."),(0,o.kt)("li",{parentName:"ul"},"Network: Injects faults into the network of physical machines. Operations such as increasing network latency, losing packets, and corrupting packets are supported."),(0,o.kt)("li",{parentName:"ul"},"Pressure: Injects pressure on the CPU or memory of the physical machines."),(0,o.kt)("li",{parentName:"ul"},"Disk: Injects faults into disks of the physical machines. Operations such as increasing disk load of reads and writes, and filling disks are supported."),(0,o.kt)("li",{parentName:"ul"},"Host: Injects faults into the physical machine. Operations such as shutdown the physical machine are supported.")),(0,o.kt)("p",null,"For details about the introduction and usage of each fault type, refer to the related documentation."),(0,o.kt)("h3",{id:"operating-environment"},"Operating environment"),(0,o.kt)("p",null,"Your glibc version must be v2.17 or later versions."),(0,o.kt)("h3",{id:"download-and-deploy"},"Download and deploy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the version of Chaosd to be downloaded as the environment variable. For example, v1.0.0:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOSD_VERSION=v1.0.0\n")),(0,o.kt)("p",{parentName:"li"},"To view all released versions of Chaosd, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/releases"},"releases"),"."),(0,o.kt)("p",{parentName:"li"},"To download the latest version (not stable), use ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOSD_VERSION=latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download Chaosd:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSLO https://mirrors.chaos-mesh.org/chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unzip the Chaosd file and move it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local")," directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz && sudo mv chaosd-$CHAOSD_VERSION-linux-amd64 /usr/local/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Chaosd directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/local/chaosd-$CHAOSD_VERSION-linux-amd64:$PATH\n")))),(0,o.kt)("h3",{id:"work-modes"},"Work modes"),(0,o.kt)("p",null,"You can use Chaosd in the following modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command-line mode: Run Chaosd directly as a command-line tool to inject and recover faults."),(0,o.kt)("li",{parentName:"ul"},"Service mode: Run Chaosd as a service in the background, to inject and recover faults by sending HTTP requests.")))}c.isMDXComponent=!0}}]);
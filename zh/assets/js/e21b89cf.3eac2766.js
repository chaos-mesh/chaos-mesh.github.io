"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[95353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"Simulate Block Device Latency"},o=void 0,i={unversionedId:"simulate-block-chaos-on-kubernetes",id:"version-2.3.2/simulate-block-chaos-on-kubernetes",title:"Simulate Block Device Latency",description:"BlockChaos Introduction",source:"@site/versioned_docs/version-2.3.2/simulate-block-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-block-chaos-on-kubernetes",permalink:"/zh/docs/2.3.2/simulate-block-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.2/simulate-block-chaos-on-kubernetes.md",tags:[],version:"2.3.2",frontMatter:{title:"Simulate Block Device Latency"},sidebar:"docs",previous:{title:"\u6a21\u62df HTTP \u6545\u969c",permalink:"/zh/docs/2.3.2/simulate-http-chaos-on-kubernetes"},next:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/zh/docs/2.3.2/chaosd-overview"}},p={},m=[{value:"BlockChaos Introduction",id:"blockchaos-introduction",level:2},{value:"Install kernel module",id:"install-kernel-module",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blockchaos-introduction"},"BlockChaos Introduction"),(0,r.kt)("p",null,"Chaos Mesh provides the BlockChaos experiment type. You can use this experiment type to simulate a block device latency scenario. This document describes how to install the dependencies of a BlockChaos experiment, and create a BlockChaos."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"BlockChaos is in an early stage. The installation and configuration experience of it will continue to improve. If you find any issues, please open an issue in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"chaos-mesh/chaos-mesh")," to report.")),(0,r.kt)("h2",{id:"install-kernel-module"},"Install kernel module"),(0,r.kt)("p",null,"BlockChaos depends on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-driver"},"chaos-driver")," kernel module. It can only be injected on a machine with this module installed. Currently, you have to compile and install the module manually."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the source code of this module using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL -o chaos-driver-v0.2.1.tar.gz https://github.com/chaos-mesh/chaos-driver/archive/refs/tags/v0.2.1.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uncompress the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-driver-v0.2.1.tar.gz")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf chaos-driver-v0.2.1.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the headers of your current kernel. If you are using CentOS/Fedora, you can install the kernel headers with ",(0,r.kt)("inlineCode",{parentName:"p"},"yum"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install kernel-devel-$(uname -r)\n")),(0,r.kt)("p",{parentName:"li"},"If you are using Ubuntu/Debian, you can install the kernel headers with ",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install linux-headers-$(uname -r)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile the module:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd chaos-driver-v0.2.1\nmake driver/chaos_driver.ko\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the kernel module:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"insmod ./driver/chaos_driver.ko\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos_driver")," module has to be installed every time after rebooting. To load the module automatically, you can copy the module to a subdirectory in ",(0,r.kt)("inlineCode",{parentName:"p"},"/lib/modules/$(uname -r)/kernel/drivers"),", run ",(0,r.kt)("inlineCode",{parentName:"p"},"depmod -a"),", and then add ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos_driver")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/modules"),"."),(0,r.kt)("p",null,"If you have upgraded the kernel, the module should be recompiled."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to use DKMS or akmod for automatic kernel module compiling or loading. If you want to help us improve the installation experience, creating a DKMS or akmod package and submitting it to different distribution repositories is very welcome.")),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the YAML configuration file. The following uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"block-latency.yaml")," file as an example."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: BlockChaos\nmetadata:\n  name: hostpath-example-delay\nspec:\n  selector:\n    labelSelectors:\n      app: hostpath-example\n  mode: all\n  volumeName: hostpath-example\n  action: delay\n  delay:\n    latency: 1s\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only hostpath or localvolume is supported."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f block-latency.yaml\n")))),(0,r.kt)("p",null,"You can find the following magic happened:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The elevator of the volume is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"ioem")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ioem-mq"),". You can check it through ",(0,r.kt)("inlineCode",{parentName:"li"},"cat /sys/block/<device>/queue/scheduler"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ioem")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ioem-mq")," scheduler will receive the latency request and delay the request for the specified time.")),(0,r.kt)("p",null,"The fields in the YAML configuration file are described in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"./define-chaos-experiment-scope.md"},"Define the experiment scope"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"volumeName")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the volume to inject in the target pods. There should be a corresponding entry in the pods' ",(0,r.kt)("inlineCode",{parentName:"td"},".spec.volumes"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hostpath-example"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.latency"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the latency of the block device."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500ms"))))))}d.isMDXComponent=!0}}]);
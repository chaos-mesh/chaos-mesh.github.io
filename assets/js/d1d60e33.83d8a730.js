"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Simulate Linux Kernel Faults"},l=void 0,o={unversionedId:"simulate-kernel-chaos-on-kubernetes",id:"version-2.3.3/simulate-kernel-chaos-on-kubernetes",title:"Simulate Linux Kernel Faults",description:"This document describes how to use KernelChaos to simulate Linux kernel faults. This feature injects I/O-based or memory-based faults into the specified kernel paths using BPF.",source:"@site/versioned_docs/version-2.3.3/simulate-kernel-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-kernel-chaos-on-kubernetes",permalink:"/docs/2.3.3/simulate-kernel-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/simulate-kernel-chaos-on-kubernetes.md",tags:[],version:"2.3.3",frontMatter:{title:"Simulate Linux Kernel Faults"},sidebar:"docs",previous:{title:"Simulate JVM Application Faults",permalink:"/docs/2.3.3/simulate-jvm-application-chaos"},next:{title:"Simulate AWS Faults",permalink:"/docs/2.3.3/simulate-aws-chaos"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Create an experiment using kubectl",id:"create-an-experiment-using-kubectl",level:2},{value:"Usage restriction",id:"usage-restriction",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use KernelChaos to simulate Linux kernel faults. This feature injects I/O-based or memory-based faults into the specified kernel paths using ",(0,r.kt)("a",{parentName:"p",href:"https://lore.kernel.org/lkml/20171213180356.hsuhzoa7s4ngro2r@destiny/T/"},"BPF"),"."),(0,r.kt)("p",null,"Although you can set the injection target of KernelChaos to one or several Pods, the performance of other Pods on the host will be affected, because all Pods share the same kernel."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The simulation of Linux kernel faults is disabled by default. Do not use this feature in a production environment.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux kernel version >= 4.18."),(0,r.kt)("li",{parentName:"ul"},"The Linux kernel configuration ",(0,r.kt)("a",{parentName:"li",href:"https://cateee.net/lkddb/web-lkddb/BPF_KPROBE_OVERRIDE.html"},"CONFOG_BPF_KPROBE_OVERRIDE")," is enabled."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"bpfki.create")," configuration value in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"values.yaml")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"A simple KernelChaos configuration file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: KernelChaos\nmetadata:\n  name: kernel-chaos-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - chaos-mount\n  failKernRequest:\n    callchain:\n      - funcname: '__x64_sys_mount'\n    failtype: 0\n")),(0,r.kt)("p",null,"For more configuration examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can modify these configuration examples as needed."),(0,r.kt)("p",null,"Configuration description:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mode")," specifies how the experiment runs. The options are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"one"),": randomly selects an eligible Pod."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),": selects all eligible Pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed"),": selects a specified number of eligible Pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed-percent"),": selects a specified percentage of eligible Pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random-max-percent"),": selects the maximum percentage of eligible Pods."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"selector")," specifies the target Pod for fault injection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FailedkernRequest")," specifies the fault mode (such as kmallo and bio). It also specifies a specific call chain path and the optional filtering conditions. The configuration items are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Failtype")," specifies the fault type. The value options are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'0': injects the slab allocation error should_failslab."),(0,r.kt)("li",{parentName:"ul"},"'1': injects the memory page allocation error should_fail_alloc_page."),(0,r.kt)("li",{parentName:"ul"},"'2': injects the bio error should_fail_bio.")),(0,r.kt)("p",{parentName:"li"},"For more information on these three fault types, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html"},"fault-injection")," and ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"inject_example"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Callchain")," specifies a specific call chain. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"ext4_mount\n-> mount_subtree\n-> ...\n    -> should_failslab\n")),(0,r.kt)("p",{parentName:"li"},"You can also use the function parameters as filtering rules to inject more fine-grained faults. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/bpfki/tree/develop/examples"},"call chain and predicate examples")," for more information. If no call chain is specified, keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"callchain")," field empty, indicating that faults will be injected to any path on which slab alloc is called (for example, kmallo)."),(0,r.kt)("p",{parentName:"li"},"The call chain type is a frame array, consisting of the following three parts:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"funcname"),", which can be found from the kernel source code or from ",(0,r.kt)("inlineCode",{parentName:"li"},"/proc/kallsyms"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"ext4_mount"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"parameters"),", which is used for filtering. If you want to inject a slab error on the ",(0,r.kt)("inlineCode",{parentName:"li"},"d_alloc_parallel(struct dentry *parent, const struct qstr *name)")," with a special name ",(0,r.kt)("inlineCode",{parentName:"li"},"bananas")," path, you need to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"struct dentry *parent, const struct qstr *name"),". Otherwise, omit this configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"predicate"),", which is used to access the parameters of the frame array. Taking ",(0,r.kt)("strong",{parentName:"li"},"parameters")," as an example, you can set it to ",(0,r.kt)("inlineCode",{parentName:"li"},'STRNCMP(name->name, "bananas", 8)')," to control the path of fault injection, or you can leave it empty for all call paths that execute ",(0,r.kt)("inlineCode",{parentName:"li"},"d_allo_parallel")," receive the slab fault injection."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"headers"),' specifies the kernel header file you need. For example, "linux/mmzone.h" and "linux/blkdev.h".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"probability")," specifies the probability of faults. If you want the probability of 1%, set to '1'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"times")," specifies the maximum number of times a fault is triggered."))))),(0,r.kt)("h2",{id:"create-an-experiment-using-kubectl"},"Create an experiment using kubectl"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f KernelChaos\n")),(0,r.kt)("p",null,"The KernelChaos feature is similar to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject.py"},"inject.py"),". For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"input_example.txt"),"."),(0,r.kt)("p",null,"A simple example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <sys/mount.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n#include <unistd.h>\n\nint main(void) {\n  int ret;\n  while (1) {\n    ret = mount("/dev/sdc", "/mnt", "ext4",\n          MS_MGC_VAL | MS_RDONLY | MS_NOSUID, "");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n    sleep(1);\n    ret = umount("/mnt");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n  }\n}\n')),(0,r.kt)("p",null,"During the fault injection, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n")),(0,r.kt)("h2",{id:"usage-restriction"},"Usage restriction"),(0,r.kt)("p",null,"You can use container_id to limit the scope of the fault injection, but some paths trigger system-level behaviors. For example:"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"failtype")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", it means that the physical page allocation fails. If this event is frequently triggered within a short period of time (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"while (1) {memset(malloc(1M), '1', 1M)}"),"), the oom-killer system call is triggered to recycle memory."))}c.isMDXComponent=!0}}]);
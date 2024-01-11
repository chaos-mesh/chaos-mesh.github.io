"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8499],{56734:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=s(11527),t=s(7463);const l={title:"Simulate Linux Kernel Faults"},r=void 0,a={id:"simulate-kernel-chaos-on-kubernetes",title:"Simulate Linux Kernel Faults",description:"This document describes how to use KernelChaos to simulate Linux kernel faults. This feature injects I/O-based or memory-based faults into the specified kernel paths using BPF.",source:"@site/docs/simulate-kernel-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-kernel-chaos-on-kubernetes",permalink:"/docs/next/simulate-kernel-chaos-on-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-kernel-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate Linux Kernel Faults"},sidebar:"docs",previous:{title:"Simulate JVM Application Faults",permalink:"/docs/next/simulate-jvm-application-chaos"},next:{title:"Simulate AWS Faults",permalink:"/docs/next/simulate-aws-chaos"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Create an experiment using kubectl",id:"create-an-experiment-using-kubectl",level:2},{value:"Usage restriction",id:"usage-restriction",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This document describes how to use KernelChaos to simulate Linux kernel faults. This feature injects I/O-based or memory-based faults into the specified kernel paths using ",(0,i.jsx)(n.a,{href:"https://lore.kernel.org/lkml/20171213180356.hsuhzoa7s4ngro2r@destiny/T/",children:"BPF"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Although you can set the injection target of KernelChaos to one or several Pods, the performance of other Pods on the host will be affected, because all Pods share the same kernel."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The simulation of Linux kernel faults is disabled by default. Do not use this feature in a production environment."})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Linux kernel version >= 4.18."}),"\n",(0,i.jsxs)(n.li,{children:["The Linux kernel configuration ",(0,i.jsx)(n.a,{href:"https://cateee.net/lkddb/web-lkddb/BPF_KPROBE_OVERRIDE.html",children:"CONFOG_BPF_KPROBE_OVERRIDE"})," is enabled."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"bpfki.create"})," configuration value in ",(0,i.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml",children:"values.yaml"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,i.jsx)(n.p,{children:"A simple KernelChaos configuration file is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: KernelChaos\nmetadata:\n  name: kernel-chaos-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - chaos-mount\n  failKernRequest:\n    callchain:\n      - funcname: '__x64_sys_mount'\n    failtype: 0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more configuration examples, refer to ",(0,i.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples",children:"examples"}),". You can modify these configuration examples as needed."]}),"\n",(0,i.jsx)(n.p,{children:"Configuration description:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mode"})," specifies how the experiment runs. The options are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"one"}),": randomly selects an eligible Pod."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"all"}),": selects all eligible Pods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fixed"}),": selects a specified number of eligible Pods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fixed-percent"}),": selects a specified percentage of eligible Pods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"random-max-percent"}),": selects the maximum percentage of eligible Pods."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"selector"})," specifies the target Pod for fault injection."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FailedkernRequest"})," specifies the fault mode (such as kmallo and bio). It also specifies a specific call chain path and the optional filtering conditions. The configuration items are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Failtype"})," specifies the fault type. The value options are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'0': injects the slab allocation error should_failslab."}),"\n",(0,i.jsx)(n.li,{children:"'1': injects the memory page allocation error should_fail_alloc_page."}),"\n",(0,i.jsx)(n.li,{children:"'2': injects the bio error should_fail_bio."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on these three fault types, refer to ",(0,i.jsx)(n.a,{href:"https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html",children:"fault-injection"})," and ",(0,i.jsx)(n.a,{href:"http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt",children:"inject_example"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Callchain"})," specifies a specific call chain. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"ext4_mount\n-> mount_subtree\n-> ...\n    -> should_failslab\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use the function parameters as filtering rules to inject more fine-grained faults. Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/chaos-mesh/bpfki/tree/develop/examples",children:"call chain and predicate examples"})," for more information. If no call chain is specified, keep the ",(0,i.jsx)(n.code,{children:"callchain"})," field empty, indicating that faults will be injected to any path on which slab alloc is called (for example, kmallo)."]}),"\n",(0,i.jsx)(n.p,{children:"The call chain type is a frame array, consisting of the following three parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"funcname"}),", which can be found from the kernel source code or from ",(0,i.jsx)(n.code,{children:"/proc/kallsyms"}),", such as ",(0,i.jsx)(n.code,{children:"ext4_mount"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"parameters"}),", which is used for filtering. If you want to inject a slab error on the ",(0,i.jsx)(n.code,{children:"d_alloc_parallel(struct dentry *parent, const struct qstr *name)"})," with a special name ",(0,i.jsx)(n.code,{children:"bananas"})," path, you need to set the ",(0,i.jsx)(n.code,{children:"parameters"})," to ",(0,i.jsx)(n.code,{children:"struct dentry *parent, const struct qstr *name"}),". Otherwise, omit this configuration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"predicate"}),", which is used to access the parameters of the frame array. Taking ",(0,i.jsx)(n.strong,{children:"parameters"})," as an example, you can set it to ",(0,i.jsx)(n.code,{children:'STRNCMP(name->name, "bananas", 8)'})," to control the path of fault injection, or you can leave it empty for all call paths that execute ",(0,i.jsx)(n.code,{children:"d_allo_parallel"})," receive the slab fault injection."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"headers"}),' specifies the kernel header file you need. For example, "linux/mmzone.h" and "linux/blkdev.h".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"probability"})," specifies the probability of faults. If you want the probability of 1%, set to '1'."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"times"})," specifies the maximum number of times a fault is triggered."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-experiment-using-kubectl",children:"Create an experiment using kubectl"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f KernelChaos\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The KernelChaos feature is similar to ",(0,i.jsx)(n.a,{href:"https://github.com/iovisor/bcc/blob/master/tools/inject.py",children:"inject.py"}),". For more information, refer to ",(0,i.jsx)(n.a,{href:"https://github.com/iovisor/bcc/blob/master/tools/inject_example.txt",children:"input_example.txt"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A simple example is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <sys/mount.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n#include <unistd.h>\n\nint main(void) {\n  int ret;\n  while (1) {\n    ret = mount("/dev/sdc", "/mnt", "ext4",\n          MS_MGC_VAL | MS_RDONLY | MS_NOSUID, "");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n    sleep(1);\n    ret = umount("/mnt");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"During the fault injection, the output is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-restriction",children:"Usage restriction"}),"\n",(0,i.jsx)(n.p,{children:"You can use container_id to limit the scope of the fault injection, but some paths trigger system-level behaviors. For example:"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"failtype"})," is ",(0,i.jsx)(n.code,{children:"1"}),", it means that the physical page allocation fails. If this event is frequently triggered within a short period of time (for example, ",(0,i.jsx)(n.code,{children:"while (1) {memset(malloc(1M), '1', 1M)}"}),"), the oom-killer system call is triggered to recycle memory."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7463:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(50959);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
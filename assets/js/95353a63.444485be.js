"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7196],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"kernelchaos_experiment",title:"KernelChaos Experiment",sidebar_label:"KernelChaos Experiment"},l=void 0,s={unversionedId:"chaos_experiments/kernelchaos_experiment",id:"version-1.1.4/chaos_experiments/kernelchaos_experiment",isDocsHomePage:!1,title:"KernelChaos Experiment",description:"This document describes how to create KernelChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.1.4/chaos_experiments/kernel_chaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/kernelchaos_experiment",permalink:"/docs/1.1.4/chaos_experiments/kernelchaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/chaos_experiments/kernel_chaos.md",tags:[],version:"1.1.4",frontMatter:{id:"kernelchaos_experiment",title:"KernelChaos Experiment",sidebar_label:"KernelChaos Experiment"},sidebar:"version-1.1.4/docs",previous:{title:"IOChaos Experiment",permalink:"/docs/1.1.4/chaos_experiments/iochaos_experiment"},next:{title:"DNSChaos Experiment",permalink:"/docs/1.1.4/chaos_experiments/dnschaos_experiment"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Limitation",id:"limitation",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to create KernelChaos experiments in Chaos Mesh."),(0,i.kt)("p",null,"Although KernelChaos targets a certain pod, the performance of other pods are also impacted depending on the specific callchain and frequency. It is because all pods of the same host share the same kernel."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")),(0,i.kt)("p",{parentName:"blockquote"},"This feature is disabled by default. Do not use it in production environment.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux kernel: version >= 4.18"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cateee.net/lkddb/web-lkddb/BPF_KPROBE_OVERRIDE.html"},"CONFIG_BPF_KPROBE_OVERRIDE")," enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bpfki.create = true")," in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"values.yaml"))),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"Below is a sample KernelChaos configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: KernelChaos\nmetadata:\n  name: kernel-chaos-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - chaos-mount\n  failKernRequest:\n    callchain:\n      - funcname: '__x64_sys_mount'\n    failtype: 0\n")),(0,i.kt)("p",null,"For more sample files, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,i.kt)("p",null,"Description:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"mode")," defines the mode to select pods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"selector")," specifies the target pods for chaos injection. For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"failkernRequest")," defines the specified injection mode (kmalloc, bio, etc.) with a call chain and an optional set of predicates. The fields are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"failtype")," indicates what to fail, can be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", indicates slab to fail (should_failslab)"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", indicates alloc_page to fail (should_fail_alloc_page)"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", indicates bio to fail (should_fail_bio)")),(0,i.kt)("p",{parentName:"li"},"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html"},"fault-injection")," and ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"inject_example"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"callchain")," indicates a special call chain, such as:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"ext4_mount\n-> mount_subtree\n   -> ...\n      -> should_failslab\n")),(0,i.kt)("p",{parentName:"li"},"With an optional set of predicates and an optional set of parameters, which used with predicates. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/bpfki/tree/develop/examples"},"call chain and predicate examples")," to learn more. If there is no special call chain, just keep ",(0,i.kt)("inlineCode",{parentName:"p"},"callchain")," empty, which means it will fail at any call chain with slab alloc (eg: kmalloc)."),(0,i.kt)("p",{parentName:"li"},"The challchain's type is an array of frames, the frame has three fields:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"funcname")," can be find from kernel source or ",(0,i.kt)("inlineCode",{parentName:"li"},"/proc/kallsyms"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ext4_mount"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"parameters")," is used with predicate, for example, if you want to inject slab error in ",(0,i.kt)("inlineCode",{parentName:"li"},"d_alloc_parallel(struct dentry *parent, const struct qstr *name)")," with a special name ",(0,i.kt)("inlineCode",{parentName:"li"},"bananas"),", you need to set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"struct dentry *parent, const struct qstr *name"),"otherwise omit it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"predicate")," accesses the arguments of this frame, example with parameters's, you can set it to ",(0,i.kt)("inlineCode",{parentName:"li"},'STRNCMP(name->name, "bananas", 8)')," to make inject only with it, or omit it to inject for all d_alloc_parallel call chain."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"headers"),' indicates the appropriate kernel headers you need. Eg: "linux/mmzone.h", "linux/blkdev.h" and so on.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"probability")," indicates the fails with probability. If you want 1%, please set this field with ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"times")," indicates the max times of fails.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"duration")," defines the duration for each chaos experiment. In the sample file above, the time chaos lasts for 10 seconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,i.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"KernelChaos's function is similar to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject.py"},"inject.py"),", which guarantees the appropriate erroneous return of the specified injection mode (kmalloc, bio, etc.) given a call chain and an optional set of predicates."),(0,i.kt)("p",null,"You can read ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"inject_example.txt")," to learn more."),(0,i.kt)("p",null,"Below is a sample program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <sys/mount.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n#include <unistd.h>\n\nint main(void) {\n    int ret;\n    while (1) {\n        ret = mount("/dev/sdc", "/mnt", "ext4",\n                MS_MGC_VAL | MS_RDONLY | MS_NOSUID, "");\n        if (ret < 0)\n            fprintf(stderr, "%s\\n", strerror(errno));\n        sleep(1);\n        ret = umount("/mnt");\n        if (ret < 0)\n            fprintf(stderr, "%s\\n", strerror(errno));\n    }\n}\n')),(0,i.kt)("p",null,"During the injection, the output is similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n")),(0,i.kt)("h2",{id:"limitation"},"Limitation"),(0,i.kt)("p",null,"Although we use container_id to limit fault injection, but some behaviors might trigger systemic behaviors. For example:"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"failtype")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", it means that physical page allocation will fail. If the behavior is continuous in a very short time (eg: `",(0,i.kt)("inlineCode",{parentName:"p"},"while (1) {memset(malloc(1M), '1', 1M)}"),"), the system's oom-killer will be awakened to release memory. So the container_id will lose limit to oom-killer."))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(187)),o={id:"kernelchaos_experiment",title:"KernelChaos Experiment",sidebar_label:"KernelChaos Experiment"},l={unversionedId:"chaos_experiments/kernelchaos_experiment",id:"chaos_experiments/kernelchaos_experiment",isDocsHomePage:!1,title:"KernelChaos Experiment",description:"This document describes how to create KernelChaos experiments in Chaos Mesh.",source:"@site/docs/chaos_experiments/kernel_chaos.md",slug:"/chaos_experiments/kernelchaos_experiment",permalink:"/docs/next/chaos_experiments/kernelchaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/chaos_experiments/kernel_chaos.md",version:"current",sidebar_label:"KernelChaos Experiment",sidebar:"docs",previous:{title:"IOChaos Experiment",permalink:"/docs/next/chaos_experiments/iochaos_experiment"},next:{title:"DNSChaos Experiment",permalink:"/docs/next/chaos_experiments/dnschaos_experiment"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Limitation",id:"limitation",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document describes how to create KernelChaos experiments in Chaos Mesh."),Object(i.b)("p",null,"Although KernelChaos targets a certain pod, the performance of other pods are also impacted depending on the specific callchain and frequency. It is because all pods of the same host share the same kernel."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Warning:")),Object(i.b)("p",{parentName:"blockquote"},"This feature is disabled by default. Do not use it in production environment.")),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux kernel: version >= 4.18"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://cateee.net/lkddb/web-lkddb/BPF_KPROBE_OVERRIDE.html"}),"CONFIG_BPF_KPROBE_OVERRIDE")," enabled"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bpfki.create = true")," in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"}),"values.yaml"))),Object(i.b)("h2",{id:"configuration-file"},"Configuration file"),Object(i.b)("p",null,"Below is a sample KernelChaos configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: chaos-mesh.org/v1alpha1\nkind: KernelChaos\nmetadata:\n  name: kernel-chaos-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - chaos-mount\n  failKernRequest:\n    callchain:\n      - funcname: '__x64_sys_mount'\n    failtype: 0\n")),Object(i.b)("p",null,"For more sample files, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"mode")," defines the mode to select pods.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"selector")," specifies the target pods for chaos injection. For more details, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/user_guides/experiment_scope"}),"Define the Scope of Chaos Experiment"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"failkernRequest")," defines the specified injection mode (kmalloc, bio, etc.) with a call chain and an optional set of predicates. The fields are:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"failtype")," indicates what to fail, can be set to ",Object(i.b)("inlineCode",{parentName:"p"},"0")," / ",Object(i.b)("inlineCode",{parentName:"p"},"1")," / ",Object(i.b)("inlineCode",{parentName:"p"},"2"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"0"),", indicates slab to fail (should_failslab)"),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"1"),", indicates alloc_page to fail (should_fail_alloc_page)"),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"2"),", indicates bio to fail (should_fail_bio)")),Object(i.b)("p",{parentName:"li"},"For more information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html"}),"fault-injection")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"}),"inject_example"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"callchain")," indicates a special call chain, such as:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"ext4_mount\n-> mount_subtree\n   -> ...\n      -> should_failslab\n")),Object(i.b)("p",{parentName:"li"},"With an optional set of predicates and an optional set of parameters, which used with predicates. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/bpfki/tree/develop/examples"}),"call chain and predicate examples")," to learn more. If there is no special call chain, just keep ",Object(i.b)("inlineCode",{parentName:"p"},"callchain")," empty, which means it will fail at any call chain with slab alloc (eg: kmalloc)."),Object(i.b)("p",{parentName:"li"},"The challchain's type is an array of frames, the frame has three fields:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"funcname")," can be find from kernel source or ",Object(i.b)("inlineCode",{parentName:"li"},"/proc/kallsyms"),", such as ",Object(i.b)("inlineCode",{parentName:"li"},"ext4_mount"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"parameters")," is used with predicate, for example, if you want to inject slab error in ",Object(i.b)("inlineCode",{parentName:"li"},"d_alloc_parallel(struct dentry *parent, const struct qstr *name)")," with a special name ",Object(i.b)("inlineCode",{parentName:"li"},"bananas"),", you need to set it to ",Object(i.b)("inlineCode",{parentName:"li"},"struct dentry *parent, const struct qstr *name"),"otherwise omit it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"predicate")," accesses the arguments of this frame, example with parameters's, you can set it to ",Object(i.b)("inlineCode",{parentName:"li"},'STRNCMP(name->name, "bananas", 8)')," to make inject only with it, or omit it to inject for all d_alloc_parallel call chain."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"headers"),' indicates the appropriate kernel headers you need. Eg: "linux/mmzone.h", "linux/blkdev.h" and so on.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"probability")," indicates the fails with probability. If you want 1%, please set this field with ",Object(i.b)("inlineCode",{parentName:"p"},"1"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"times")," indicates the max times of fails.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"duration")," defines the duration for each chaos experiment. In the sample file above, the time chaos lasts for 10 seconds.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://godoc.org/github.com/robfig/cron"}),"robfig/cron")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"KernelChaos's function is similar to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/iovisor/bcc/blob/master/tools/inject.py"}),"inject.py"),", which guarantees the appropriate erroneous return of the specified injection mode (kmalloc, bio, etc.) given a call chain and an optional set of predicates."),Object(i.b)("p",null,"You can read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"}),"inject_example.txt")," to learn more."),Object(i.b)("p",null,"Below is a sample program:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'#include <sys/mount.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n#include <unistd.h>\n\nint main(void) {\n    int ret;\n    while (1) {\n        ret = mount("/dev/sdc", "/mnt", "ext4",\n                MS_MGC_VAL | MS_RDONLY | MS_NOSUID, "");\n        if (ret < 0)\n            fprintf(stderr, "%s\\n", strerror(errno));\n        sleep(1);\n        ret = umount("/mnt");\n        if (ret < 0)\n            fprintf(stderr, "%s\\n", strerror(errno));\n    }\n}\n')),Object(i.b)("p",null,"During the injection, the output is similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n")),Object(i.b)("h2",{id:"limitation"},"Limitation"),Object(i.b)("p",null,"Although we use container_id to limit fault injection, but some behaviors might trigger systemic behaviors. For example:"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"failtype")," is ",Object(i.b)("inlineCode",{parentName:"p"},"1"),", it means that physical page allocation will fail. If the behavior is continuous in a very short time (eg: `",Object(i.b)("inlineCode",{parentName:"p"},"while (1) {memset(malloc(1M), '1', 1M)}"),"), the system's oom-killer will be awakened to release memory. So the container_id will lose limit to oom-killer."))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
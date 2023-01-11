"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6a21\u62df Linux \u5185\u6838\u6545\u969c"},i=void 0,o={unversionedId:"simulate-kernel-chaos-on-kubernetes",id:"version-2.3.3/simulate-kernel-chaos-on-kubernetes",title:"\u6a21\u62df Linux \u5185\u6838\u6545\u969c",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KernelChaos \u6a21\u62df Linux \u5185\u6838\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 BPF \u5728\u6307\u5b9a\u5185\u6838\u8def\u5f84\u4e0a\u6ce8\u5165\u57fa\u4e8e I/O \u6216\u5185\u5b58\u7684\u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/simulate-kernel-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-kernel-chaos-on-kubernetes",permalink:"/zh/docs/2.3.3/simulate-kernel-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.3.3/simulate-kernel-chaos-on-kubernetes.md",tags:[],version:"2.3.3",frontMatter:{title:"\u6a21\u62df Linux \u5185\u6838\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c",permalink:"/zh/docs/2.3.3/simulate-jvm-application-chaos"},next:{title:"\u6a21\u62df AWS \u6545\u969c",permalink:"/zh/docs/2.3.3/simulate-aws-chaos"}},p={},m=[{value:"\u51c6\u5907\u6761\u4ef6",id:"\u51c6\u5907\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 <code>kubectl</code> \u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-kubectl-\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KernelChaos \u6a21\u62df Linux \u5185\u6838\u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://lore.kernel.org/lkml/20171213180356.hsuhzoa7s4ngro2r@destiny/T/"},"BPF")," \u5728\u6307\u5b9a\u5185\u6838\u8def\u5f84\u4e0a\u6ce8\u5165\u57fa\u4e8e I/O \u6216\u5185\u5b58\u7684\u6545\u969c\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1 KernelChaos \u7684\u6ce8\u5165\u5bf9\u8c61\u53ef\u4ee5\u8bbe\u7f6e\u6210\u4e00\u4e2a\u6216\u51e0\u4e2a Pod\uff0c\u4f46\u6240\u5c5e\u4e3b\u673a\u7684\u5176\u4ed6 Pod \u7684\u6027\u80fd\u4e5f\u4f1a\u53d7\u5230\u4e00\u4e9b\u5f71\u54cd\uff0c\u56e0\u4e3a\u6240\u6709\u7684 Pod \u5171\u4eab\u540c\u4e00\u4e2a\u5185\u6838\u3002"),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u6a21\u62df Linux \u5185\u6838\u6545\u969c\u7684\u529f\u80fd\u9ed8\u8ba4\u5173\u95ed\uff0c\u8bf7\u4e0d\u8981\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u6761\u4ef6"},"\u51c6\u5907\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux \u5185\u6838: \u7248\u672c >= 4.18"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u542f\u52a8 Linux \u5185\u6838\u914d\u7f6e\u9879 ",(0,r.kt)("a",{parentName:"li",href:"https://cateee.net/lkddb/web-lkddb/BPF_KPROBE_OVERRIDE.html"},"CONFIG_BPF_KPROBE_OVERRIDE")),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"values.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"bpfki.create")," \u914d\u7f6e\u9879\u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684 KernelChaos \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: KernelChaos\nmetadata:\n  name: kernel-chaos-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    namespaces:\n      - chaos-mount\n  failKernRequest:\n    callchain:\n      - funcname: '__x64_sys_mount'\n    failtype: 0\n")),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u914d\u7f6e\u793a\u4f8b\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),"\u3002\u4f60\u53ef\u6309\u9700\u4fee\u6539\u8fd9\u4e9b\u914d\u7f6e\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mode")," \u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"one"),"\uff1a\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),"\uff1a\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed"),"\uff1a\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed-percent"),"\uff1a\u8868\u793a\u9009\u51fa\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random-max-percent"),"\uff1a\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"selector")," \u6307\u5b9a\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pods\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failedkernRequest")," \u6307\u5b9a\u6545\u969c\u6a21\u5f0f (kmalloc, bio \u7b49)\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5177\u4f53\u7684\u8c03\u7528\u94fe\u8def\u5f84\u548c\u53ef\u9009\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002\u914d\u7f6e\u9879\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"failtype")," \u6307\u5b9a\u6545\u969c\u7c7b\u578b\uff0c\u53ef\u8bbe\u7f6e\u7684\u503c\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'0'\uff1a\u8868\u660e\u6ce8\u5165 slab \u5206\u914d\u9519\u8bef should_failslab\u3002"),(0,r.kt)("li",{parentName:"ul"},"'1'\uff1a\u8868\u660e\u6ce8\u5165 \u5185\u5b58\u9875\u5206\u914d\u9519\u8bef should_fail_alloc_page\u3002"),(0,r.kt)("li",{parentName:"ul"},"'2'\uff1a\u8868\u660e\u6ce8\u5165 bio \u9519\u8bef should_fail_bio\u3002")),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u8fd9\u4e09\u79cd\u6545\u969c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html"},"fault-injection")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"inject_example"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"callchain")," \u6307\u5b9a\u4e00\u4e2a\u5177\u4f53\u7684\u8c03\u7528\u94fe\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"ext4_mount\n-> mount_subtree\n-> ...\n    -> should_failslab\n")),(0,r.kt)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u53c2\u6570\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fdb\u4e00\u6b65\u7ec6\u7c92\u5ea6\u7684\u6545\u969c\u6ce8\u5165\u3002\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/bpfki/tree/develop/examples"},"call chain and predicate examples")," \u6765\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8c03\u7528\u94fe\uff0c\u8bf7\u4fdd\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"callchain")," \u4e3a\u7a7a\uff0c\u8868\u660e\u5b83\u5c06\u5728\u4efb\u610f\u8c03\u7528 slab alloc \u7684\u8def\u5f84\uff08\u6bd4\u5982 kmalloc\uff09\u4e0a\u6ce8\u5165\u6545\u969c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528\u94fe\u7684\u7c7b\u578b\u662f frame \u6570\u7ec4\uff0c\u7531\u4ee5\u4e0b\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"funcname"),"\uff1a\u53ef\u4ee5\u4ece\u5185\u6838\u6e90\u7801\u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"/proc/kallsyms")," \u4e2d\u627e\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"funcname"),"\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"ext4_mount"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"parameters"),"\uff1a\u7528\u4e8e\u8fc7\u6ee4\u3002\u5982\u679c\u4f60\u60f3\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"d_alloc_parallel(struct dentry *parent, const struct qstr *name)"),"\uff08\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"bananas"),"\uff09\u8def\u5f84\u4e0a\u6ce8\u5165 slab \u9519\u8bef\uff0c\u4f60\u9700\u8981\u5c06 parameters \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"struct dentry *parent, const struct qstr *name")," \u5426\u5219\u7701\u7565\u6b64\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"predicate"),"\uff1a\u7528\u4e8e\u8bbf\u95ee frame \u6570\u7ec4\u7684\u53c2\u6570\uff0c\u4ee5 ",(0,r.kt)("strong",{parentName:"li"},"parameters")," \u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},'STRNCMP(name->name, "bananas", 8)')," \u6765\u63a7\u5236\u6545\u969c\u6ce8\u5165\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u8bbe\u7f6e\uff0c\u4f7f\u5f97\u6240\u6709\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"d_alloc_parallel")," \u7684\u8c03\u7528\u8def\u5f84\u90fd\u6ce8\u5165 slab \u6545\u969c\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"headers"),' \u6307\u5b9a\u4f60\u9700\u8981\u7684\u5185\u6838\u5934\u6587\u4ef6\uff0c\u6bd4\u5982\uff1a"linux/mmzone.h"\uff0c"linux/blkdev.h" \u7b49\u3002')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"probability")," \u6307\u5b9a\u6545\u969c\u53d1\u751f\u6982\u7387\uff0c\u5982\u679c\u4f60\u60f3\u8981 1% \u7684\u6982\u7387\uff0c\u8bf7\u5c06\u5176\u8bbe\u7f6e\u4e3a '1'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"times")," \u6307\u5b9a\u89e6\u53d1\u6545\u969c\u7684\u6700\u5927\u6b21\u6570\u3002"))))),(0,r.kt)("h2",{id:"\u4f7f\u7528-kubectl-\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f KernelChaos\n")),(0,r.kt)("p",null,"KernelChaos \u529f\u80fd\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject.py"},"inject.py")," \u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/inject_example.txt"},"inject_example.txt")," \u6765\u83b7\u5f97\u66f4\u591a\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <sys/mount.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n#include <unistd.h>\n\nint main(void) {\n  int ret;\n  while (1) {\n    ret = mount("/dev/sdc", "/mnt", "ext4",\n          MS_MGC_VAL | MS_RDONLY | MS_NOSUID, "");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n    sleep(1);\n    ret = umount("/mnt");\n    if (ret < 0)\n      fprintf(stderr, "%s\\n", strerror(errno));\n  }\n}\n')),(0,r.kt)("p",null,"\u5728\u6545\u969c\u6ce8\u5165\u671f\u95f4\uff0c\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n> Cannot allocate memory\n> Invalid argument\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"\u901a\u8fc7 container_id \u53ef\u4ee5\u9650\u5236\u6545\u969c\u6ce8\u5165\u8303\u56f4\uff0c\u4f46\u6709\u4e9b\u8def\u5f84\u4f1a\u89e6\u53d1\u7cfb\u7edf\u7ea7\u522b\u7684\u884c\u4e3a\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"failtype")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u65f6\uff0c\u5b83\u610f\u5473\u7740\u7269\u7406\u9875\u9762\u5206\u914d\u5931\u8d25\u3002\u5982\u679c\u8fd9\u4e2a\u4e8b\u4ef6\u5728\u5f88\u77ed\u7684\u65f6\u95f4\u5185\u9891\u7e41\u89e6\u53d1\uff08\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"while (1) {memset(malloc(1M), '1', 1M)}"),"\uff09\uff0c\u4f1a\u89e6\u53d1\u7cfb\u7edf\u8c03\u7528 oom-killer \u6765\u56de\u6536\u5185\u5b58\u3002"))}c.isMDXComponent=!0}}]);
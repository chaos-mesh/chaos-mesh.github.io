(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(231)),i={slug:"/how-to-simulate-io-faults-at-runtime",title:"How to Simulate I/O Faults at Runtime",author:"Keao Yang",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/YangKeao",author_image_url:"https://avatars2.githubusercontent.com/u/5244316",image:"/img/how-to-simulate-io-faults-at-runtime.jpg",tags:["Chaos Mesh","Chaos Engineering","Fault Injection"]},s={permalink:"/blog/how-to-simulate-io-faults-at-runtime",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",source:"@site/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",description:"Chaos Engineering - How to simulate I/O faults at runtime",date:"2021-01-08T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Fault Injection",permalink:"/blog/tags/fault-injection"}],title:"How to Simulate I/O Faults at Runtime",readingTime:8.915,truncated:!0,prevItem:{title:"Celebrating One Year of Chaos Mesh: Looking Back and Ahead",permalink:"/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead"},nextItem:{title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",permalink:"/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"}},l=[{value:"I/O fault injection",id:"io-fault-injection",children:[]},{value:"Inject I/O faults without the mutating admission webhook",id:"inject-io-faults-without-the-mutating-admission-webhook",children:[{value:"Dynamically replace file descriptors",id:"dynamically-replace-file-descriptors",children:[]},{value:"Overall fault injection process",id:"overall-fault-injection-process",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],c={rightToc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Chaos Engineering - How to simulate I/O faults at runtime",src:a(281).default})),Object(r.b)("p",null,"In a production environment, filesystem faults might occur due to various incidents such as disk failures and administrator errors. As a Chaos Engineering platform, Chaos Mesh has supported simulating I/O faults in a filesystem ever since its early versions. By simply adding an IOChaos CustomResourceDefinition (CRD), we can watch how the filesystem fails and returns errors."),Object(r.b)("p",null,"However, before Chaos Mesh 1.0, this experiment was not easy and may have consumed a lot of resources. We needed to inject sidecar containers to the Pod through the mutating admission webhooks and rewrite the ",Object(r.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," command. Even if no fault was injected, the injected sidecar container caused a substantial amount of overhead."),Object(r.b)("p",null,"Chaos Mesh 1.0 has changed all this. Now, we can use IOChaos to inject faults to a filesystem at runtime. This simplifies the process and greatly reduces system overhead. This blog post introduces how we implement the IOChaos experiment without using a sidecar."),Object(r.b)("h2",{id:"io-fault-injection"},"I/O fault injection"),Object(r.b)("p",null,"To simulate I/O faults at runtime, we need to inject faults into a filesystem after the program starts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://man7.org/linux/man-pages/man2/syscall.2.html"}),"system calls")," (such as reads and writes) but before the call requests arrive at the target filesystem. We can do that in one of two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use Berkeley Packet Filter (BPF); however, it ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/iovisor/bcc/issues/2336"}),"cannot be used to inject delay"),"."),Object(r.b)("li",{parentName:"ul"},"Add a filesystem layer called ChaosFS before the target filesystem. ChaosFS uses the target filesystem as the backend and receives requests from the operating system. The entire call link is ",Object(r.b)("strong",{parentName:"li"},"target program syscall")," -> ",Object(r.b)("strong",{parentName:"li"},"Linux kernel")," -> ",Object(r.b)("strong",{parentName:"li"},"ChaosFS")," -> ",Object(r.b)("strong",{parentName:"li"},"target filesystem"),". Because ChaosFS is customizable, we can inject delays and errors as we want. Therefore, ChaosFS is our choice.")),Object(r.b)("p",null,"But ChaosFS has several problems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If ChaosFS reads and writes files in the target filesystem, we need to ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://man7.org/linux/man-pages/man2/mount.2.html"}),"mount")," ChaosFS to a different path than the target path specified in the Pod configuration. ChaosFS ",Object(r.b)("strong",{parentName:"li"},"cannot")," be mounted to the path of the target directory."),Object(r.b)("li",{parentName:"ul"},"We need to mount ChaosFS ",Object(r.b)("strong",{parentName:"li"},"before")," the target program starts running. This is because the newly-mounted ChaosFS takes effect only on files that are newly opened by the program in the target filesystem."),Object(r.b)("li",{parentName:"ul"},"We need to mount ChaosFS to the target containter's ",Object(r.b)("inlineCode",{parentName:"li"},"mnt")," namespace. For details, see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://man7.org/linux/man-pages/man7/mount_namespaces.7.html"}),"mount_namespaces(7) \u2014 Linux manual page"),".")),Object(r.b)("p",null,"Before Chaos Mesh 1.0, we used the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"}),"mutating admission webhook")," to implement IOChaos. This technique addressed the three problems lists above and allowed us to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run scripts in the target container. This action changed the target directory of the ChaosFS's backend filesystem (for example, from ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/a")," to ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/a_bak"),") so that we could mount ChaosFS to the target path (",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/a"),").\nModify the command that starts the Pod. For example, we could modify the original command ",Object(r.b)("inlineCode",{parentName:"li"},"/app")," to ",Object(r.b)("inlineCode",{parentName:"li"},"/waitfs.sh /app"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"waitfs.sh")," script kept checking whether the filesystem was successfully mounted. If it was mounted, ",Object(r.b)("inlineCode",{parentName:"li"},"/app")," was started."),Object(r.b)("li",{parentName:"ul"},"Add a new container in the Pod to run ChaosFS. This container needed to share a volume with the target container (for example, ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt"),"), and then we mounted this volume to the target directory (for example, ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/a"),"). We also properly enabled ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"}),"mount propagation")," for this volume's mount to penetrate the share to host and then penetrate slave to the target.")),Object(r.b)("p",null,"These three approaches allowed us to inject I/O faults while the program was running. However, the injection was far from convenient:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We could only inject faults into a volume subdirectory, not into the entire volume. The workaround was to replace ",Object(r.b)("inlineCode",{parentName:"li"},"mv")," (rename) with ",Object(r.b)("inlineCode",{parentName:"li"},"mount move")," to move the mount point of the target volume."),Object(r.b)("li",{parentName:"ul"},"We had to explicitly write commands in the Pod rather than implicitly use the image commands. Otherwise, the ",Object(r.b)("inlineCode",{parentName:"li"},"/waitfs.sh")," script could not properly start the program after the filesystem was mounted."),Object(r.b)("li",{parentName:"ul"},"The corresponding container needed to have a proper configuration for mount propagation. Due to potential privacy and security issues, we ",Object(r.b)("strong",{parentName:"li"},"could not")," modify the configuration via the mutating admission webhook."),Object(r.b)("li",{parentName:"ul"},"The injection configuration was troublesome. Worse still, we had to create a new Pod after the configuration was able to inject faults."),Object(r.b)("li",{parentName:"ul"},"We could not withdraw ChaosFS while the program was running. Even if no fault or error was injected, the performance was greatly affected.")),Object(r.b)("h2",{id:"inject-io-faults-without-the-mutating-admission-webhook"},"Inject I/O faults without the mutating admission webhook"),Object(r.b)("p",null,"What about cracking these tough nuts without the mutating admission webhook? Let's get back and think a bit about the reason why we used the mutating admission webhook to add a container in which ChaosFS runs. We do that to mount the filesystem to the target container."),Object(r.b)("p",null,"In fact, there is another solution. Instead of adding containers to the Pod, we can first use the ",Object(r.b)("inlineCode",{parentName:"p"},"setns")," Linux system call to modify the namespace of the current process and then use the ",Object(r.b)("inlineCode",{parentName:"p"},"mount")," call to mount ChaosFS to the target container. Suppose that the filesystem to inject is ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt"),". The new injection process is as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"setns")," for the current process to enter the mnt namespace of the target container."),Object(r.b)("li",{parentName:"ol"},"Execute ",Object(r.b)("inlineCode",{parentName:"li"},"mount --move")," to move ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt")," to ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt_bak"),"."),Object(r.b)("li",{parentName:"ol"},"Mount ChaosFS to ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt")," and use ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt_bak")," as the backend.")),Object(r.b)("p",null,"After the process is finished, the target container will open, read, and write the files in ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt")," through ChaosFS. In this way, delays or faults are injected much more easily. However, there are still two questions to answer:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How do you handle the files that are already opened by the target process?"),Object(r.b)("li",{parentName:"ul"},"How do you recover the process given that we cannot unmount the filesystem when files are opened?")),Object(r.b)("h3",{id:"dynamically-replace-file-descriptors"},"Dynamically replace file descriptors"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ptrace solves both of the two questions above.")," We can use ptrace to replace the opened file descriptors (FD) at runtime and replace the current working directory (CWD) and mmap."),Object(r.b)("h4",{id:"use-ptrace-to-allow-a-tracee-to-run-a-binary-program"},"Use ptrace to allow a tracee to run a binary program"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://man7.org/linux/man-pages/man2/ptrace.2.html"}),"ptrace")," is a powerful tool that makes the target process (tracee) to run any system call or binary program. For a tracee to run the program, ptrace modifies the RIP-pointed address to the target process and adds an ",Object(r.b)("inlineCode",{parentName:"p"},"int3")," instruction to trigger a breakpoint. When the binary program stops, we need to restore the registers and memory."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"In the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/X86_assembly_language"}),"x86_64 architecture"),", the RIP register (also called an instruction pointer) always points to the memory address at which the next directive is run.\nTo load the program into the target process memory spaces:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Use ptrace to call mmap in the target program to allocate the needed memory."),Object(r.b)("li",{parentName:"ol"},"Write the binary program to the newly allocated memory and make the RIP register point to it."),Object(r.b)("li",{parentName:"ol"},"After the binary program stops, call munmap to clean up the memory section.")),Object(r.b)("p",null,"As a best practice, we often replace ptrace ",Object(r.b)("inlineCode",{parentName:"p"},"POKE_TEXT")," writes with ",Object(r.b)("inlineCode",{parentName:"p"},"process_vm_writev")," because if there is a huge amount of data to write, ",Object(r.b)("inlineCode",{parentName:"p"},"process_vm_writev")," performs more efficiently."),Object(r.b)("p",null,"Using ptrace, we are able to make a process to replace its own FD. Now we only need a method to make that replacement happen. This method is the ",Object(r.b)("inlineCode",{parentName:"p"},"dup2")," system call."),Object(r.b)("h4",{id:"use-dup2-to-replace-file-descriptor"},"Use ",Object(r.b)("inlineCode",{parentName:"h4"},"dup2")," to replace file descriptor"),Object(r.b)("p",null,"The signature of the ",Object(r.b)("inlineCode",{parentName:"p"},"dup2")," function is ",Object(r.b)("inlineCode",{parentName:"p"},"int dup2(int oldfd, int newfd);"),". It is used to create a copy of the old FD (",Object(r.b)("inlineCode",{parentName:"p"},"oldfd"),"). This copy has an FD number of ",Object(r.b)("inlineCode",{parentName:"p"},"newfd"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"newfd")," already corresponds to the FD of an opened file, the FD on the file that's already opened is automatically closed."),Object(r.b)("p",null,"For example, the current process opens ",Object(r.b)("inlineCode",{parentName:"p"},"/var/run/__chaosfs__test__/a")," whose FD is ",Object(r.b)("inlineCode",{parentName:"p"},"1"),". To replace this opened file with ",Object(r.b)("inlineCode",{parentName:"p"},"/var/run/test/a"),", this process performs the following operations:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Uses the ",Object(r.b)("inlineCode",{parentName:"li"},"fcntl")," system call to get the ",Object(r.b)("inlineCode",{parentName:"li"},"OFlags")," (the parameter used by the ",Object(r.b)("inlineCode",{parentName:"li"},"open")," system call, such as ",Object(r.b)("inlineCode",{parentName:"li"},"O_WRONLY"),") of ",Object(r.b)("inlineCode",{parentName:"li"},"/var/run/__chaosfs__test__/a"),"."),Object(r.b)("li",{parentName:"ol"},"Uses the ",Object(r.b)("inlineCode",{parentName:"li"},"Iseek")," system call to get the current location of ",Object(r.b)("inlineCode",{parentName:"li"},"seek"),"."),Object(r.b)("li",{parentName:"ol"},"Uses the ",Object(r.b)("inlineCode",{parentName:"li"},"open")," system call to open ",Object(r.b)("inlineCode",{parentName:"li"},"/var/run/test/a")," using the same ",Object(r.b)("inlineCode",{parentName:"li"},"OFlags"),". Assume that the FD is ",Object(r.b)("inlineCode",{parentName:"li"},"2"),"."),Object(r.b)("li",{parentName:"ol"},"Uses ",Object(r.b)("inlineCode",{parentName:"li"},"Iseek")," to change the ",Object(r.b)("inlineCode",{parentName:"li"},"seek")," location of the newly opened FD ",Object(r.b)("inlineCode",{parentName:"li"},"2"),"."),Object(r.b)("li",{parentName:"ol"},"Uses ",Object(r.b)("inlineCode",{parentName:"li"},"dup2(2, 1)")," to replace the FD ",Object(r.b)("inlineCode",{parentName:"li"},"1")," of ",Object(r.b)("inlineCode",{parentName:"li"},"/var/run/__chaosfs__test__/a")," with the newly opened FD ",Object(r.b)("inlineCode",{parentName:"li"},"2"),"."),Object(r.b)("li",{parentName:"ol"},"Closes FD ",Object(r.b)("inlineCode",{parentName:"li"},"2"),".")),Object(r.b)("p",null,"After the process is finished, FD ",Object(r.b)("inlineCode",{parentName:"p"},"1")," of the current process points to ",Object(r.b)("inlineCode",{parentName:"p"},"/var/run/test/a"),". So that we can inject faults, any subsequent operations on the target file go through the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Filesystem_in_Userspace"}),"Filesystem in Userspace")," (FUSE). FUSE is a software interface for Unix and Unix-like computer operating systems that lets non-privileged users create their own file systems without editing kernel code."),Object(r.b)("h4",{id:"write-a-program-to-make-the-target-process-replace-its-own-file-descriptor"},"Write a program to make the target process replace its own file descriptor"),Object(r.b)("p",null,"The combined functionality of ptrace and dup2 makes it possible for the tracer to make the tracee replace the opened FD by itself. Now, we need to write a binary program and make the target process run it:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"In the implementation above, we assume that:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"The threads of the target process are POSIX threads and share the opened files."),Object(r.b)("li",{parentName:"ul"},"When the target process creates threads using the ",Object(r.b)("inlineCode",{parentName:"li"},"clone")," function, the ",Object(r.b)("inlineCode",{parentName:"li"},"CLONE_FILES")," parameter is passed.")),Object(r.b)("p",{parentName:"blockquote"},"Therefore, Chaos Mesh only replaces the FD of the first thread in the thread group.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write a piece of assembly code according to the two sections above and the usage of syscall directives. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chaos-mesh/toda/blob/1d73871d8ab72b8d1eace55f5222b01957193531/src/replacer/fd_replacer.rs#L133"}),"Here")," is an example of the assembly code."),Object(r.b)("li",{parentName:"ol"},"Use an assembler to translate the code into a binary program. We use ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CensoredUsername/dynasm-rs"}),"dynasm-rs")," as the assembler."),Object(r.b)("li",{parentName:"ol"},"Use ptrace to make the target process run this program.\nWhen the program runs, the FD is replaced at runtime.")),Object(r.b)("h3",{id:"overall-fault-injection-process"},"Overall fault injection process"),Object(r.b)("p",null,"The following diagram illustrates the overall I/O fault injection process:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fault injection process",src:a(331).default})),Object(r.b)("div",{style:{margin:"1rem 0",fontStyle:"italic",textAlign:"center"}}," Fault injection process "),Object(r.b)("p",null,"In this diagram, each horizontal line corresponds to a thread that runs in the direction of the arrows. The ",Object(r.b)("strong",{parentName:"p"},"Mount/Umount Filesystem")," and ",Object(r.b)("strong",{parentName:"p"},"Replace FD")," tasks are carefully arranged in sequence. Given the process above, this arrangement makes a lot of sense."),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)("p",null,"I've discussed how we implement fault injection to simulate I/O faults at runtime (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/toda"}),"chaos-mesh/toda"),"). However, the current implementation is far from perfect:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Generation numbers are not supported."),Object(r.b)("li",{parentName:"ul"},"ioctl is not supported."),Object(r.b)("li",{parentName:"ul"},"Chaos Mesh does not immediately determine whether a filesystem is successfully mounted. It does so only after one second.")),Object(r.b)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud-native.slack.com/join/shared_invite/zt-fyy3b8up-qHeDNVqbz1j8HDY6g1cY4w#/"}),"our Slack channel")," or submit your pull requests or issues to our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"GitHub repository"),"."),Object(r.b)("p",null,"This is the first post in a series on Chaos Mesh implementation. If you want to see how other types of fault injection are implemented, stay tuned."))}p.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,u=b["".concat(i,".").concat(h)]||b[h]||m[h]||r;return a?o.a.createElement(u,s(s({ref:t},c),{},{components:a})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},281:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/how-to-simulate-io-faults-at-runtime-39daaf89aa83a5be58402f763db0d5c5.jpg"},331:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fault-injection-process-581a3b4c6954f9ccb3fc9eb17f45f937.jpg"}}]);
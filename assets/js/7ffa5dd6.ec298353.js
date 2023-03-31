"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2175],{17942:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(50959);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(a),c=o,d=h["".concat(l,".").concat(c)]||h[c]||u[c]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(51163),o=(a(50959),a(17942));const r={slug:"/how-to-simulate-io-faults-at-runtime",title:"How to Simulate I/O Faults at Runtime",author:"Keao Yang",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/YangKeao",author_image_url:"https://avatars2.githubusercontent.com/u/5244316",image:"/img/blog/how-to-simulate-io-faults-at-runtime.jpg",tags:["Chaos Mesh","Chaos Engineering","Fault Injection"]},i=void 0,s={permalink:"/blog/how-to-simulate-io-faults-at-runtime",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",source:"@site/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",title:"How to Simulate I/O Faults at Runtime",description:"Chaos Engineering - How to simulate I/O faults at runtime",date:"2021-01-08T00:00:00.000Z",formattedDate:"January 8, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Fault Injection",permalink:"/blog/tags/fault-injection"}],readingTime:8.91,hasTruncateMarker:!0,authors:[{name:"Keao Yang",title:"Maintainer of Chaos Mesh",url:"https://github.com/YangKeao",imageURL:"https://avatars2.githubusercontent.com/u/5244316"}],frontMatter:{slug:"/how-to-simulate-io-faults-at-runtime",title:"How to Simulate I/O Faults at Runtime",author:"Keao Yang",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/YangKeao",author_image_url:"https://avatars2.githubusercontent.com/u/5244316",image:"/img/blog/how-to-simulate-io-faults-at-runtime.jpg",tags:["Chaos Mesh","Chaos Engineering","Fault Injection"]},prevItem:{title:"Celebrating One Year of Chaos Mesh: Looking Back and Ahead",permalink:"/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead"},nextItem:{title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",permalink:"/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"}},l={authorsImageUrls:[void 0]},p=[{value:"I/O fault injection",id:"io-fault-injection",level:2},{value:"Inject I/O faults without the mutating admission webhook",id:"inject-io-faults-without-the-mutating-admission-webhook",level:2},{value:"Dynamically replace file descriptors",id:"dynamically-replace-file-descriptors",level:3},{value:"Use ptrace to allow a tracee to run a binary program",id:"use-ptrace-to-allow-a-tracee-to-run-a-binary-program",level:4},{value:"Use <code>dup2</code> to replace file descriptor",id:"use-dup2-to-replace-file-descriptor",level:4},{value:"Write a program to make the target process replace its own file descriptor",id:"write-a-program-to-make-the-target-process-replace-its-own-file-descriptor",level:4},{value:"Overall fault injection process",id:"overall-fault-injection-process",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],m={toc:p},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chaos Engineering - How to simulate I/O faults at runtime",src:a(48112).Z,width:"3126",height:"1043"})),(0,o.kt)("p",null,"In a production environment, filesystem faults might occur due to various incidents such as disk failures and administrator errors. As a Chaos Engineering platform, Chaos Mesh has supported simulating I/O faults in a filesystem ever since its early versions. By simply adding an IOChaos CustomResourceDefinition (CRD), we can watch how the filesystem fails and returns errors."),(0,o.kt)("p",null,"However, before Chaos Mesh 1.0, this experiment was not easy and may have consumed a lot of resources. We needed to inject sidecar containers to the Pod through the mutating admission webhooks and rewrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," command. Even if no fault was injected, the injected sidecar container caused a substantial amount of overhead."),(0,o.kt)("p",null,"Chaos Mesh 1.0 has changed all this. Now, we can use IOChaos to inject faults to a filesystem at runtime. This simplifies the process and greatly reduces system overhead. This blog post introduces how we implement the IOChaos experiment without using a sidecar."),(0,o.kt)("h2",{id:"io-fault-injection"},"I/O fault injection"),(0,o.kt)("p",null,"To simulate I/O faults at runtime, we need to inject faults into a filesystem after the program starts ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/syscall.2.html"},"system calls")," (such as reads and writes) but before the call requests arrive at the target filesystem. We can do that in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Berkeley Packet Filter (BPF); however, it ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iovisor/bcc/issues/2336"},"cannot be used to inject delay"),"."),(0,o.kt)("li",{parentName:"ul"},"Add a filesystem layer called ChaosFS before the target filesystem. ChaosFS uses the target filesystem as the backend and receives requests from the operating system. The entire call link is ",(0,o.kt)("strong",{parentName:"li"},"target program syscall")," -> ",(0,o.kt)("strong",{parentName:"li"},"Linux kernel")," -> ",(0,o.kt)("strong",{parentName:"li"},"ChaosFS")," -> ",(0,o.kt)("strong",{parentName:"li"},"target filesystem"),". Because ChaosFS is customizable, we can inject delays and errors as we want. Therefore, ChaosFS is our choice.")),(0,o.kt)("p",null,"But ChaosFS has several problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If ChaosFS reads and writes files in the target filesystem, we need to ",(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man2/mount.2.html"},"mount")," ChaosFS to a different path than the target path specified in the Pod configuration. ChaosFS ",(0,o.kt)("strong",{parentName:"li"},"cannot")," be mounted to the path of the target directory."),(0,o.kt)("li",{parentName:"ul"},"We need to mount ChaosFS ",(0,o.kt)("strong",{parentName:"li"},"before")," the target program starts running. This is because the newly-mounted ChaosFS takes effect only on files that are newly opened by the program in the target filesystem."),(0,o.kt)("li",{parentName:"ul"},"We need to mount ChaosFS to the target containter's ",(0,o.kt)("inlineCode",{parentName:"li"},"mnt")," namespace. For details, see ",(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man7/mount_namespaces.7.html"},"mount_namespaces(7) \u2014 Linux manual page"),".")),(0,o.kt)("p",null,"Before Chaos Mesh 1.0, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"mutating admission webhook")," to implement IOChaos. This technique addressed the three problems lists above and allowed us to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run scripts in the target container. This action changed the target directory of the ChaosFS's backend filesystem (for example, from ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/a")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/a_bak"),") so that we could mount ChaosFS to the target path (",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/a"),"). Modify the command that starts the Pod. For example, we could modify the original command ",(0,o.kt)("inlineCode",{parentName:"li"},"/app")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/waitfs.sh /app"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"waitfs.sh")," script kept checking whether the filesystem was successfully mounted. If it was mounted, ",(0,o.kt)("inlineCode",{parentName:"li"},"/app")," was started."),(0,o.kt)("li",{parentName:"ul"},"Add a new container in the Pod to run ChaosFS. This container needed to share a volume with the target container (for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt"),"), and then we mounted this volume to the target directory (for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/a"),"). We also properly enabled ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"},"mount propagation")," for this volume's mount to penetrate the share to host and then penetrate slave to the target.")),(0,o.kt)("p",null,"These three approaches allowed us to inject I/O faults while the program was running. However, the injection was far from convenient:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We could only inject faults into a volume subdirectory, not into the entire volume. The workaround was to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"mv")," (rename) with ",(0,o.kt)("inlineCode",{parentName:"li"},"mount move")," to move the mount point of the target volume."),(0,o.kt)("li",{parentName:"ul"},"We had to explicitly write commands in the Pod rather than implicitly use the image commands. Otherwise, the ",(0,o.kt)("inlineCode",{parentName:"li"},"/waitfs.sh")," script could not properly start the program after the filesystem was mounted."),(0,o.kt)("li",{parentName:"ul"},"The corresponding container needed to have a proper configuration for mount propagation. Due to potential privacy and security issues, we ",(0,o.kt)("strong",{parentName:"li"},"could not")," modify the configuration via the mutating admission webhook."),(0,o.kt)("li",{parentName:"ul"},"The injection configuration was troublesome. Worse still, we had to create a new Pod after the configuration was able to inject faults."),(0,o.kt)("li",{parentName:"ul"},"We could not withdraw ChaosFS while the program was running. Even if no fault or error was injected, the performance was greatly affected.")),(0,o.kt)("h2",{id:"inject-io-faults-without-the-mutating-admission-webhook"},"Inject I/O faults without the mutating admission webhook"),(0,o.kt)("p",null,"What about cracking these tough nuts without the mutating admission webhook? Let's get back and think a bit about the reason why we used the mutating admission webhook to add a container in which ChaosFS runs. We do that to mount the filesystem to the target container."),(0,o.kt)("p",null,"In fact, there is another solution. Instead of adding containers to the Pod, we can first use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setns")," Linux system call to modify the namespace of the current process and then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mount")," call to mount ChaosFS to the target container. Suppose that the filesystem to inject is ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt"),". The new injection process is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"setns")," for the current process to enter the mnt namespace of the target container."),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"mount --move")," to move ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt_bak"),"."),(0,o.kt)("li",{parentName:"ol"},"Mount ChaosFS to ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt")," and use ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt_bak")," as the backend.")),(0,o.kt)("p",null,"After the process is finished, the target container will open, read, and write the files in ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt")," through ChaosFS. In this way, delays or faults are injected much more easily. However, there are still two questions to answer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do you handle the files that are already opened by the target process?"),(0,o.kt)("li",{parentName:"ul"},"How do you recover the process given that we cannot unmount the filesystem when files are opened?")),(0,o.kt)("h3",{id:"dynamically-replace-file-descriptors"},"Dynamically replace file descriptors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ptrace solves both of the two questions above.")," We can use ptrace to replace the opened file descriptors (FD) at runtime and replace the current working directory (CWD) and mmap."),(0,o.kt)("h4",{id:"use-ptrace-to-allow-a-tracee-to-run-a-binary-program"},"Use ptrace to allow a tracee to run a binary program"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/ptrace.2.html"},"ptrace")," is a powerful tool that makes the target process (tracee) to run any system call or binary program. For a tracee to run the program, ptrace modifies the RIP-pointed address to the target process and adds an ",(0,o.kt)("inlineCode",{parentName:"p"},"int3")," instruction to trigger a breakpoint. When the binary program stops, we need to restore the registers and memory."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"In the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_assembly_language"},"x86_64 architecture"),", the RIP register (also called an instruction pointer) always points to the memory address at which the next directive is run. To load the program into the target process memory spaces:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use ptrace to call mmap in the target program to allocate the needed memory."),(0,o.kt)("li",{parentName:"ol"},"Write the binary program to the newly allocated memory and make the RIP register point to it."),(0,o.kt)("li",{parentName:"ol"},"After the binary program stops, call munmap to clean up the memory section.")),(0,o.kt)("p",null,"As a best practice, we often replace ptrace ",(0,o.kt)("inlineCode",{parentName:"p"},"POKE_TEXT")," writes with ",(0,o.kt)("inlineCode",{parentName:"p"},"process_vm_writev")," because if there is a huge amount of data to write, ",(0,o.kt)("inlineCode",{parentName:"p"},"process_vm_writev")," performs more efficiently."),(0,o.kt)("p",null,"Using ptrace, we are able to make a process to replace its own FD. Now we only need a method to make that replacement happen. This method is the ",(0,o.kt)("inlineCode",{parentName:"p"},"dup2")," system call."),(0,o.kt)("h4",{id:"use-dup2-to-replace-file-descriptor"},"Use ",(0,o.kt)("inlineCode",{parentName:"h4"},"dup2")," to replace file descriptor"),(0,o.kt)("p",null,"The signature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dup2")," function is ",(0,o.kt)("inlineCode",{parentName:"p"},"int dup2(int oldfd, int newfd);"),". It is used to create a copy of the old FD (",(0,o.kt)("inlineCode",{parentName:"p"},"oldfd"),"). This copy has an FD number of ",(0,o.kt)("inlineCode",{parentName:"p"},"newfd"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"newfd")," already corresponds to the FD of an opened file, the FD on the file that's already opened is automatically closed."),(0,o.kt)("p",null,"For example, the current process opens ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/__chaosfs__test__/a")," whose FD is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". To replace this opened file with ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/test/a"),", this process performs the following operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"fcntl")," system call to get the ",(0,o.kt)("inlineCode",{parentName:"li"},"OFlags")," (the parameter used by the ",(0,o.kt)("inlineCode",{parentName:"li"},"open")," system call, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"O_WRONLY"),") of ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/run/__chaosfs__test__/a"),"."),(0,o.kt)("li",{parentName:"ol"},"Uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"Iseek")," system call to get the current location of ",(0,o.kt)("inlineCode",{parentName:"li"},"seek"),"."),(0,o.kt)("li",{parentName:"ol"},"Uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"open")," system call to open ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/run/test/a")," using the same ",(0,o.kt)("inlineCode",{parentName:"li"},"OFlags"),". Assume that the FD is ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ol"},"Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"Iseek")," to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"seek")," location of the newly opened FD ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ol"},"Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"dup2(2, 1)")," to replace the FD ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/run/__chaosfs__test__/a")," with the newly opened FD ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ol"},"Closes FD ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,o.kt)("p",null,"After the process is finished, FD ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," of the current process points to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/test/a"),". So that we can inject faults, any subsequent operations on the target file go through the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Filesystem_in_Userspace"},"Filesystem in Userspace")," (FUSE). FUSE is a software interface for Unix and Unix-like computer operating systems that lets non-privileged users create their own file systems without editing kernel code."),(0,o.kt)("h4",{id:"write-a-program-to-make-the-target-process-replace-its-own-file-descriptor"},"Write a program to make the target process replace its own file descriptor"),(0,o.kt)("p",null,"The combined functionality of ptrace and dup2 makes it possible for the tracer to make the tracee replace the opened FD by itself. Now, we need to write a binary program and make the target process run it:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"In the implementation above, we assume that:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The threads of the target process are POSIX threads and share the opened files."),(0,o.kt)("li",{parentName:"ul"},"When the target process creates threads using the ",(0,o.kt)("inlineCode",{parentName:"li"},"clone")," function, the ",(0,o.kt)("inlineCode",{parentName:"li"},"CLONE_FILES")," parameter is passed.")),(0,o.kt)("p",{parentName:"blockquote"},"Therefore, Chaos Mesh only replaces the FD of the first thread in the thread group.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write a piece of assembly code according to the two sections above and the usage of syscall directives. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/toda/blob/1d73871d8ab72b8d1eace55f5222b01957193531/src/replacer/fd_replacer.rs#L133"},"Here")," is an example of the assembly code."),(0,o.kt)("li",{parentName:"ol"},"Use an assembler to translate the code into a binary program. We use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CensoredUsername/dynasm-rs"},"dynasm-rs")," as the assembler."),(0,o.kt)("li",{parentName:"ol"},"Use ptrace to make the target process run this program. When the program runs, the FD is replaced at runtime.")),(0,o.kt)("h3",{id:"overall-fault-injection-process"},"Overall fault injection process"),(0,o.kt)("p",null,"The following diagram illustrates the overall I/O fault injection process:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fault injection process",src:a(13126).Z,width:"1600",height:"778"})),(0,o.kt)("div",{style:{margin:"1rem 0",fontStyle:"italic",textAlign:"center"}}," Fault injection process "),(0,o.kt)("p",null,"In this diagram, each horizontal line corresponds to a thread that runs in the direction of the arrows. The ",(0,o.kt)("strong",{parentName:"p"},"Mount/Umount Filesystem")," and ",(0,o.kt)("strong",{parentName:"p"},"Replace FD")," tasks are carefully arranged in sequence. Given the process above, this arrangement makes a lot of sense."),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"I've discussed how we implement fault injection to simulate I/O faults at runtime (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/toda"},"chaos-mesh/toda"),"). However, the current implementation is far from perfect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generation numbers are not supported."),(0,o.kt)("li",{parentName:"ul"},"ioctl is not supported."),(0,o.kt)("li",{parentName:"ul"},"Chaos Mesh does not immediately determine whether a filesystem is successfully mounted. It does so only after one second.")),(0,o.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,o.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"our Slack channel")," or submit your pull requests or issues to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."),(0,o.kt)("p",null,"This is the first post in a series on Chaos Mesh implementation. If you want to see how other types of fault injection are implemented, stay tuned."))}u.isMDXComponent=!0},13126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fault-injection-process-581a3b4c6954f9ccb3fc9eb17f45f937.jpg"},48112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/how-to-simulate-io-faults-at-runtime-39daaf89aa83a5be58402f763db0d5c5.jpg"}}]);
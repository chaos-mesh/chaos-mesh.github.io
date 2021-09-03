"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6914],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(d,s(s({ref:t},h),{},{components:n})):a.createElement(d,s({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return m},default:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],r={slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},l=void 0,c={permalink:"/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",source:"@site/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",description:"Clock synchronization in distributed system",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Distributed System",permalink:"/blog/tags/distributed-system"}],readingTime:8.43,truncated:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],prevItem:{title:"Chaos Mesh\xae Joins CNCF as a Sandbox Project",permalink:"/blog/chaos-mesh-join-cncf-sandbox-project"},nextItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},h={authorsImageUrls:[void 0]},m=[{value:"Simulating clock skew without affecting other containers on the node",id:"simulating-clock-skew-without-affecting-other-containers-on-the-node",children:[]},{value:"Various approaches for simulating clock skew we&#39;ve explored",id:"various-approaches-for-simulating-clock-skew-weve-explored",children:[{value:"<code>LD_PRELOAD</code>",id:"ld_preload",children:[]},{value:"Use BPF to modify the return value of <code>clock_gettime</code> system call",id:"use-bpf-to-modify-the-return-value-of-clock_gettime-system-call",children:[]}]},{value:"TimeChaos, our final hack",id:"timechaos-our-final-hack",children:[]},{value:"Simulating clock skew on a distributed SQL database",id:"simulating-clock-skew-on-a-distributed-sql-database",children:[]},{value:"Try out Chaos Mesh",id:"try-out-chaos-mesh",children:[]}],p={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clock synchronization in distributed system",src:n(11026).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh\u2122"),", an easy-to-use, open-source, cloud-native chaos engineering platform for Kubernetes (K8s), has a new feature, TimeChaos, which simulates the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clock_skew#On_a_network"},"clock skew")," phenomenon. Usually, when we modify clocks in a container, we want a ",(0,i.kt)("a",{parentName:"p",href:"https://learning.oreilly.com/library/view/chaos-engineering/9781491988459/ch07.html"},"minimized blast radius"),", and we don't want the change to affect the other containers on the node. In reality, however, implementing this can be harder than you think. How does Chaos Mesh solve this problem?"),(0,i.kt)("p",null,"In this post, I'll describe how we hacked through different approaches of clock skew and how TimeChaos in Chaos Mesh enables time to swing freely in containers."),(0,i.kt)("h2",{id:"simulating-clock-skew-without-affecting-other-containers-on-the-node"},"Simulating clock skew without affecting other containers on the node"),(0,i.kt)("p",null,"Clock skew refers to the time difference between clocks on nodes within a network. It might cause reliability problems in a distributed system, and it's a concern for designers and developers of complex distributed systems. For example, in a distributed SQL database, it's vital to maintain a synchronized local clock across nodes to achieve a consistent global snapshot and ensure the ACID properties for transactions."),(0,i.kt)("p",null,"Currently, there are well-recognized ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/Time-in-Distributed-Systems/"},"solutions to synchronize clocks"),", but without proper testing, you can never be sure that your implementation is solid."),(0,i.kt)("p",null,"Then how can we test global snapshot consistency in a distributed system? The answer is obvious: we can simulate clock skew to test whether distributed systems can keep a consistent global snapshot under abnormal clock conditions. Some testing tools support simulating clock skew in containers, but they have an impact on physical nodes."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/wiki/Time-Chaos"},"TimeChaos")," is a tool that ",(0,i.kt)("strong",{parentName:"p"},"simulates clock skew in containers to test how it impacts your application without affecting the whole node"),". This way, we can precisely identify the potential consequences of clock skew and take measures accordingly."),(0,i.kt)("h2",{id:"various-approaches-for-simulating-clock-skew-weve-explored"},"Various approaches for simulating clock skew we've explored"),(0,i.kt)("p",null,"Reviewing the existing choices, we know clearly that they cannot be applied to Chaos Mesh, which runs on Kubernetes. Two common ways of simulating clock skew--changing the node clock directly and using the Jepsen framework--change the time for all processes on the node. These are not acceptable solutions for us. In a Kubernetes container, if we inject a clock skew error that affects the entire node, other containers on the same node will be disturbed. Such a clumsy approach is not tolerable."),(0,i.kt)("p",null,"Then how are we supposed to tackle this problem? Well, the first thing that comes into our mind is finding solutions in the kernel using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"Berkeley Packet Filter")," (BPF)."),(0,i.kt)("h3",{id:"ld_preload"},(0,i.kt)("inlineCode",{parentName:"h3"},"LD_PRELOAD")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," is a Linux environment variable that lets you define which dynamic link library is loaded before the program execution."),(0,i.kt)("p",null,"This variable has two advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can call our own functions without being aware of the source code."),(0,i.kt)("li",{parentName:"ul"},"We can inject code into other programs to achieve specific purposes.")),(0,i.kt)("p",null,"For some languages that use applications to call the time function in glibc, such as Rust and C, using ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," is enough to simulate clock skew. But things are trickier for Golang. Because languages such as Golang directly parse virtual Dynamic Shared Object (",(0,i.kt)("a",{parentName:"p",href:"http://man7.org/linux/man-pages/man7/vdso.7.html"},"vDSO"),"), a mechanism to speed up system calls. To obtain the time function address, we can't simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," to intercept the glic interface. Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," is not our solution."),(0,i.kt)("h3",{id:"use-bpf-to-modify-the-return-value-of-clock_gettime-system-call"},"Use BPF to modify the return value of ",(0,i.kt)("inlineCode",{parentName:"h3"},"clock_gettime")," system call"),(0,i.kt)("p",null,"We also tried to filter the task ",(0,i.kt)("a",{parentName:"p",href:"http://www.linfo.org/pid.html"},"process identification number")," (PID) with BPF. This way, we could simulate clock skew on a specified process and modify the return value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime")," system call."),(0,i.kt)("p",null,"This seemed like a good idea, but we also encountered a problem: in most cases, vDSO speeds up ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime")," doesn't make a system call. This selection didn't work, either. Oops."),(0,i.kt)("p",null,"Thankfully, we determined that if the system kernel version is 4.18 or later, and if we use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/timers/hpet.html"},"HPET")," clock, ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime()")," gets time by making normal system calls instead of vDSO. We implemented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/bpfki"},"a version of clock skew")," using this approach, and it works fine for Rust and C. As for Golang, the program can get the time right, but if we perform ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep")," during the clock skew injection, the sleep operation is very likely to be blocked. Even after the injection is canceled, the system cannot recover. Thus, we have to give up this approach, too."),(0,i.kt)("h2",{id:"timechaos-our-final-hack"},"TimeChaos, our final hack"),(0,i.kt)("p",null,"From the previous section, we know that programs usually get the system time by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime"),". In our case, ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime")," uses vDSO to speed up the calling process, so we cannot use ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," to hack the ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime")," system calls."),(0,i.kt)("p",null,"We figured out the cause; then what's the solution? Start from vDSO. If we can redirect the address that stores the ",(0,i.kt)("inlineCode",{parentName:"p"},"clock_gettime")," return value in vDSO to an address we define, we can solve the problem."),(0,i.kt)("p",null,"Easier said than done. To achieve this goal, we must tackle the following problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Know the user-mode address used by vDSO"),(0,i.kt)("li",{parentName:"ul"},"Know vDSO's kernel-mode address, if we want to modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"clock_gettime")," function in vDSO by any address in the kernel mode"),(0,i.kt)("li",{parentName:"ul"},"Know how to modify vDSO data")),(0,i.kt)("p",null,"First, we need to peek inside vDSO. We can see the vDSO memory address in ",(0,i.kt)("inlineCode",{parentName:"p"},"/proc/pid/maps"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cat /proc/pid/maps\n...\n7ffe53143000-7ffe53145000 r-xp 00000000 00:00 0                     [vdso]\n")),(0,i.kt)("p",null,"The last line is vDSO information. The privilege of this memory space is ",(0,i.kt)("inlineCode",{parentName:"p"},"r-xp"),": readable and executable, but not writable. That means the user mode cannot modify this memory. We can use ",(0,i.kt)("a",{parentName:"p",href:"http://man7.org/linux/man-pages/man2/ptrace.2.html"},"ptrace")," to avoid this restriction."),(0,i.kt)("p",null,"Next, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"gdb dump memory")," to export the vDSO and use ",(0,i.kt)("inlineCode",{parentName:"p"},"objdump")," to see what's inside. Here is what we get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(gdb) dump memory vdso.so 0x00007ffe53143000 0x00007ffe53145000\n$ objdump -T vdso.so\nvdso.so:    file format elf64-x86-64\nDYNAMIC SYMBOL TABLE:\nffffffffff700600  w  DF .text   0000000000000545  LINUX_2.6  clock_gettime\n")),(0,i.kt)("p",null,"We can see that the whole vDSO is like a ",(0,i.kt)("inlineCode",{parentName:"p"},".so")," file, so we can use an executable and linkable format (ELF) file to format it. With this information, a basic workflow for implementing TimeChaos starts to take shape:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TimeChaos workflow",src:n(14132).Z})),(0,i.kt)("div",{class:"caption-center"}," TimeChaos workflow "),(0,i.kt)("p",null,"The chart above is the process of ",(0,i.kt)("strong",{parentName:"p"},"TimeChaos"),", an implementation of clock skew in Chaos Mesh."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use ptrace to attach the specified PID process to stop the current process."),(0,i.kt)("li",{parentName:"ol"},"Use ptrace to create a new mapping in the virtual address space of the calling process and use ",(0,i.kt)("a",{parentName:"li",href:"https://linux.die.net/man/2/process_vm_writev"},(0,i.kt)("inlineCode",{parentName:"a"},"process_vm_writev"))," to write the ",(0,i.kt)("inlineCode",{parentName:"li"},"fake_clock_gettime")," function we defined into the memory space."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"process_vm_writev")," to write the specified parameters into ",(0,i.kt)("inlineCode",{parentName:"li"},"fake_clock_gettime"),". These parameters are the time we would like to inject, such as two hours backward or two days forward."),(0,i.kt)("li",{parentName:"ol"},"Use ptrace to modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"clock_gettime")," function in vDSO and redirect to the ",(0,i.kt)("inlineCode",{parentName:"li"},"fake_clock_gettime")," function."),(0,i.kt)("li",{parentName:"ol"},"Use ptrace to detach the PID process.")),(0,i.kt)("p",null,"If you are interested in the details, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/pkg/time/time_linux.go"},"Chaos Mesh GitHub repository"),"."),(0,i.kt)("h2",{id:"simulating-clock-skew-on-a-distributed-sql-database"},"Simulating clock skew on a distributed SQL database"),(0,i.kt)("p",null,"Statistics speak volumes. Here we're going to try TimeChaos on ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/overview/"},"TiDB"),", an open source, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NewSQL"},"NewSQL"),", distributed SQL database that supports ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hybrid_transactional/analytical_processing"},"Hybrid Transactional/Analytical Processing")," (HTAP) workloads, to see if the chaos testing can really work."),(0,i.kt)("p",null,"TiDB uses a centralized service Timestamp Oracle (TSO) to obtain the globally consistent version number, and to ensure that the transaction version number increases monotonically. The TSO service is managed by the Placement Driver (PD) component. Therefore, we choose a random PD node and inject TimeChaos regularly, each with a 10-millisecond-backward clock skew. Let's see if TiDB can meet the challenge."),(0,i.kt)("p",null,"To better perform the testing, we use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cwen0/bank"},"bank")," as the workload, which simulates the financial transfers in a banking system. It's often used to verify the correctness of database transactions."),(0,i.kt)("p",null,"This is our test configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-skew-example\n  namespace: tidb-demo\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "pd"\n  timeOffset:\n    sec: -600\n  clockIds:\n    - CLOCK_REALTIME\n  duration: "10s"\n  scheduler:\n    cron: "@every 1m"\n')),(0,i.kt)("p",null,"During this test, Chaos Mesh injects TimeChaos into a chosen PD Pod every 1 millisecond for 10 seconds. Within the duration, the time acquired by PD will have a 600 second offset from the actual time. For further details, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/wiki/Time-Chaos"},"Chaos Mesh Wiki"),"."),(0,i.kt)("p",null,"Let's create a TimeChaos experiment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f pd-time.yaml\n")),(0,i.kt)("p",null,"Now, we can retrieve the PD log by the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl logs -n tidb-demo tidb-app-pd-0 | grep "system time jump backward"\n')),(0,i.kt)("p",null,"Here's the log:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[2020/03/24 09:06:23.164 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585041383060109693]\n[2020/03/24 09:16:32.260 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585041992160476622]\n[2020/03/24 09:20:32.059 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585042231960027622]\n[2020/03/24 09:23:32.059 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585042411960079655]\n[2020/03/24 09:25:32.059 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585042531963640321]\n[2020/03/24 09:28:32.060 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585042711960148191]\n[2020/03/24 09:33:32.063 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043011960517655]\n[2020/03/24 09:34:32.060 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043071959942937]\n[2020/03/24 09:35:32.059 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043131978582964]\n[2020/03/24 09:36:32.059 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043191960687755]\n[2020/03/24 09:38:32.060 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043311959970737]\n[2020/03/24 09:41:32.060 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043491959970502]\n[2020/03/24 09:45:32.061 +00:00] [ERROR] [systime_mon.go:32] ["system time jump backward"] [last=1585043731961304629]\n...\n')),(0,i.kt)("p",null,"From the log above, we see that every now and then, PD detects that the system time rolls back. This means:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TimeChaos successfully simulates clock skew."),(0,i.kt)("li",{parentName:"ul"},"PD can deal with the clock skew situation.")),(0,i.kt)("p",null,"That's encouraging. But does TimeChaos affect services other than PD? We can check it out in the Chaos Dashboard:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chaos Dashboard",src:n(68111).Z})),(0,i.kt)("div",{class:"caption-center"}," Chaos Dashboard "),(0,i.kt)("p",null,"It's clear that in the monitor, TimeChaos was injected every 1 millisecond and the whole duration lasted 10 seconds. What's more, TiDB was not affected by that injection. The bank program ran normally, and performance was not affected."),(0,i.kt)("h2",{id:"try-out-chaos-mesh"},"Try out Chaos Mesh"),(0,i.kt)("p",null,"As a cloud-native chaos engineering platform, Chaos Mesh features all-around ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/chaos-mesh-your-chaos-engineering-solution-for-system-resiliency-on-kubernetes/"},"fault injection methods for complex systems on Kubernetes"),", covering faults in Pods, the network, the file system, and even the kernel."),(0,i.kt)("p",null,"Wanna have some hands-on experience in chaos engineering? Welcome to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh"),". This ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/run-first-chaos-experiment-in-ten-minutes/"},"10-minute tutorial")," will help you quickly get started with chaos engineering and run your first chaos experiment with Chaos Mesh."))}u.isMDXComponent=!0},68111:function(e,t,n){t.Z=n.p+"assets/images/chaos-dashboard-0693a3b8da68e9c7f47c7c633dbb1f9b.jpg"},11026:function(e,t,n){t.Z=n.p+"assets/images/clock-sync-chaos-engineering-k8s-05986b97ada98f9cf1cabda6a8855c86.jpg"},14132:function(e,t,n){t.Z=n.p+"assets/images/timechaos-workflow-b9960dd4ac9c21fa72817ae910305235.jpg"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3854],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>c});var n=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(s),c=o,d=u["".concat(l,".").concat(c)]||u[c]||h[c]||r;return s?n.createElement(d,a(a({ref:t},p),{},{components:s})):n.createElement(d,a({ref:t},p))}));function c(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var m=2;m<r;m++)a[m]=s[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},57779:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=s(87462),o=(s(67294),s(3905));const r={slug:"/how-to-efficiently-stress-test-pod-memory",title:"How to efficiently stress test Pod memory",author:"Yinghao Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/AsterNighT",author_image_url:"https://avatars.githubusercontent.com/u/22937027?v=4",image:"/img/blog/how-to-efficiently-stress-test-pod-memory-banner.jpg",tags:["Chaos Mesh","Chaos Engineering","StressChaos","Stress Testing"]},a=void 0,i={permalink:"/blog/how-to-efficiently-stress-test-pod-memory",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-01-how-to-efficiently-stress-test-pod-memory.md",source:"@site/blog/2021-07-01-how-to-efficiently-stress-test-pod-memory.md",title:"How to efficiently stress test Pod memory",description:"banner",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"StressChaos",permalink:"/blog/tags/stress-chaos"},{label:"Stress Testing",permalink:"/blog/tags/stress-testing"}],readingTime:10.015,hasTruncateMarker:!0,authors:[{name:"Yinghao Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/AsterNighT",imageURL:"https://avatars.githubusercontent.com/u/22937027?v=4"}],frontMatter:{slug:"/how-to-efficiently-stress-test-pod-memory",title:"How to efficiently stress test Pod memory",author:"Yinghao Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/AsterNighT",author_image_url:"https://avatars.githubusercontent.com/u/22937027?v=4",image:"/img/blog/how-to-efficiently-stress-test-pod-memory-banner.jpg",tags:["Chaos Mesh","Chaos Engineering","StressChaos","Stress Testing"]},prevItem:{title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",permalink:"/blog/securing-tenant-namespaces-using-restrict-authorization-feature"},nextItem:{title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",permalink:"/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service"}},l={authorsImageUrls:[void 0]},m=[{value:"Injecting stress into a target",id:"injecting-stress-into-a-target",level:2},{value:"Why does StressChaos disappear?",id:"why-does-stresschaos-disappear",level:2},{value:"What if there was no liveness probe?",id:"what-if-there-was-no-liveness-probe",level:2},{value:"Deeper dive into Kubernetes memory management",id:"deeper-dive-into-kubernetes-memory-management",level:2},{value:"How we implement StressChaos",id:"how-we-implement-stresschaos",level:2}],p={toc:m};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"banner",src:s(90386).Z,width:"1600",height:"534"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," includes the StressChaos tool, which allows you to inject CPU and memory stress into your Pod. This tool can be very useful when you test or benchmark a CPU-sensitive or memory-sensitive program and want to know its behavior under pressure."),(0,o.kt)("p",null,"However, as we tested and used StressChaos, we found some issues with usability and performance. For example, why does StressChaos use far less memory than we configured? To correct these issues, we developed a new set of tests. In this article, I'll describe how we troubleshooted these issues and corrected them. This information will enable you to get the most out of StressChaos."),(0,o.kt)("p",null,"Before you continue, you need to install Chaos Mesh in your cluster. You can find detailed instructions on our ",(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/quick-start"},"website"),"."),(0,o.kt)("h2",{id:"injecting-stress-into-a-target"},"Injecting stress into a target"),(0,o.kt)("p",null,"I\u2019d like to demonstrate how to inject StressChaos into a target. In this example, I\u2019ll use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paulbouwer/hello-kubernetes"},(0,o.kt)("inlineCode",{parentName:"a"},"hello-kubernetes")),", which is managed by ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm charts"),". The first step is to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paulbouwer/hello-kubernetes"},(0,o.kt)("inlineCode",{parentName:"a"},"hello-kubernetes"))," repo and modify the chart to give it a resource limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paulbouwer/hello-kubernetes.git\ncode deploy/helm/hello-kubernetes/values.yaml # or whichever editor you prefer\n")),(0,o.kt)("p",null,"Find the resources line, and change it into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  requests:\n    memory: '200Mi'\n  limits:\n    memory: '500Mi'\n")),(0,o.kt)("p",null,"However, before we inject anything, let's see how much memory the target is consuming. Go into the Pod and start a shell. Enter the following, substituting the name of your Pod for the one in the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n hello-kubernetes hello-kubernetes-hello-world-b55bfcf68-8mln6 -- /bin/sh\n")),(0,o.kt)("p",null,"Display a summary of memory usage. Enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/src/app $ free -m\n/usr/src/app $ top\n")),(0,o.kt)("p",null,"As you can see from the output below, the Pod is consuming 4,269 MB of memory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/src/app $ free -m\n              used\nMem:          4269\nSwap:            0\n\n/usr/src/app $ top\nMem: 12742432K used\n  PID  PPID USER     STAT   VSZ %VSZ CPU %CPU COMMAND\n    1     0 node     S     285m   2%   0   0% npm start\n   18     1 node     S     284m   2%   3   0% node server.js\n   29     0 node     S     1636   0%   2   0% /bin/sh\n   36    29 node     R     1568   0%   3   0% top\n")),(0,o.kt)("p",null,"That doesn\u2019t seem right. We\u2019ve limited its memory usage to 500 MiBs, and now the Pod seems to be using several GBs of memory. If we total the amount of process memory being used, it doesn\u2019t equal 500 MiB. However, top and free at least give similar answers."),(0,o.kt)("p",null,"We will run a StressChaos on the Pod and see what happens. Here's the yaml we\u2019ll use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: mem-stress\n  namespace: chaos-testing\nspec:\n  mode: all\n  selector:\n    namespaces:\n      - hello-kubernetes\n  stressors:\n    memory:\n      workers: 4\n      size: 50MiB\n      options: ['']\n  duration: '1h'\n")),(0,o.kt)("p",null,"Save the yaml to a file. I named it ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.yaml"),". To apply the chaos, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"~ kubectl apply -f memory.yaml\nstresschaos.chaos-mesh.org/mem-stress created\n")),(0,o.kt)("p",null,"Now, let's check the memory usage again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"              used\nMem:          4332\nSwap:            0\n\nMem: 12805568K used\n  PID  PPID USER     STAT   VSZ %VSZ CPU %CPU COMMAND\n   54    50 root     R    53252   0%   1  24% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   57    52 root     R    53252   0%   0  22% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   55    53 root     R    53252   0%   2  21% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   56    51 root     R    53252   0%   3  21% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   18     1 node     S     289m   2%   2   0% node server.js\n    1     0 node     S     285m   2%   0   0% npm start\n   51    49 root     S    41048   0%   0   0% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   50    49 root     S    41048   0%   2   0% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   52    49 root     S    41048   0%   0   0% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   53    49 root     S    41048   0%   3   0% {stress-ng-vm} stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   49     0 root     S    41044   0%   0   0% stress-ng --vm 4 --vm-keep --vm-bytes 50000000\n   29     0 node     S     1636   0%   3   0% /bin/sh\n   48    29 node     R     1568   0%   1   0% top\n")),(0,o.kt)("p",null,"You can see that stress-ng instances are being injected into the Pod. There is a 60 MiB rise in the Pod, which we didn\u2019t expect. The ",(0,o.kt)("a",{parentName:"p",href:"https://manpages.ubuntu.com/manpages/focal/en/man1/stress-ng.1.html"},"documentation")," indicates that the increase should 200 MiB (4 ","*"," 50 MiB)."),(0,o.kt)("p",null,"Let's increase the stress by changing the memory stress from 50 MiB to 3,000 MiB. This should break the Pod\u2019s memory limit. I\u2019ll delete the chaos, modify the size, and reapply it."),(0,o.kt)("p",null,"And then, boom! The shell exits with code 137. A moment later, I reconnect to the container, and the memory usage returns to normal. No stress-ng instances are found! What happened?"),(0,o.kt)("h2",{id:"why-does-stresschaos-disappear"},"Why does StressChaos disappear?"),(0,o.kt)("p",null,"Kubernetes limits your container memory usage through a mechanism named ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/cgroups.7.html"},"cgroup"),". To see the 500 MiB limit in our Pod, go to the container and enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/src/app $ cat /sys/fs/cgroup/memory/memory.limit_in_bytes\n524288000\n")),(0,o.kt)("p",null,"The output is displayed in bytes and translates to ",(0,o.kt)("inlineCode",{parentName:"p"},"500 * 1024 * 1024"),"."),(0,o.kt)("p",null,"Requests are used only for scheduling where to place the Pod. The Pod does not have a memory limit or request, but it can be seen as the sum of all its containers."),(0,o.kt)("p",null,'We\'ve been making a mistake since the very beginning. free and top are not "cgrouped." They rely on ',(0,o.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," (procfs) for data. Unfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," is old, so old it predates cgroup. It will provide you with ",(0,o.kt)("strong",{parentName:"p"},"host")," memory information instead of your container. Let's start from the beginning and see what memory usage we get this time."),(0,o.kt)("p",null,"To get the cgrouped memory usage, enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/src/app $ cat /sys/fs/cgroup/memory/memory.usage_in_bytes\n39821312\n")),(0,o.kt)("p",null,"Applying the 50 MiB StressChaos, yields the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/src/app $ cat /sys/fs/cgroup/memory/memory.usage_in_bytes\n93577216\n")),(0,o.kt)("p",null,"That is about 51 MiB more memory usage than without StressChaos."),(0,o.kt)("p",null,'Next, why did our shell exit? Exit code 137 indicates "failure as container received SIGKILL." That leads us to check the Pod. Pay attention to the Pod state and events.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'~ kubectl describe pods -n hello-kubernetes\n......\n    Last State:     Terminated\n      Reason:       Error\n      Exit Code:    1\n......\nEvents:\n  Type     Reason     Age                  From               Message\n  ----     ------     ----                 ----               -------\n......\n  Warning  Unhealthy  10m (x4 over 16m)    kubelet            Readiness probe failed: Get "http://10.244.1.19:8080/": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\n  Normal   Killing    10m (x2 over 16m)    kubelet            Container hello-kubernetes failed liveness probe, will be restarted\n......\n')),(0,o.kt)("p",null,"The events tell us why the shell crashed. ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-kubernetes")," has a liveness probe, and when the container memory is reaching the limit, the application starts to fail, and Kubernetes decides to terminate and restart it. When the Pod restarts, StressChaos stops. In that case, you can say that the chaos works fine. It finds vulnerability in your Pod. You could now fix it, and reapply the chaos. Everything seems perfect now\u2014except for one thing. Why do four 50 MiB vm workers result in 51 MiB in total? The answer will not reveal itself unless we go into the stress-ng source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ColinIanKing/stress-ng/blob/819f7966666dafea5264cf1a2a0939fd344fcf08/stress-vm.c#L2074"},"here")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"vm_bytes /= args->num_instances;\n")),(0,o.kt)("p",null,"Oops! So the document is wrong. The multiple vm workers will take up the total size specified, rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"mmap")," that much memory per worker. Now, finally, we get an answer for everything. In the following sections, we\u2019ll discuss some other situations involving memory stress."),(0,o.kt)("h2",{id:"what-if-there-was-no-liveness-probe"},"What if there was no liveness probe?"),(0,o.kt)("p",null,"Let's delete the probes and try again. Find the following lines in ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy/helm/hello-kubernetes/templates/deployment.yaml")," and delete them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"livenessProbe:\n  httpGet:\n    path: /\n    port: http\nreadinessProbe:\n  httpGet:\n    path: /\n    port: http\n")),(0,o.kt)("p",null,"After that, upgrade the deployment."),(0,o.kt)("p",null,"What is interesting in this scenario is that the memory usage goes up continuously, and then drops sharply; it goes back and forth. What is happening now? Let's check the kernel log. Pay attention to the last two lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/src/app $ dmesg\n......\n[189937.362908] [ pid ]   uid  tgid total_vm      rss nr_ptes swapents oom_score_adj name\n[189937.363092] [441060]  1000 441060    63955     3791      80     3030           988 node\n[189937.363110] [441688]     0 441688   193367     2136     372   181097          1000 stress-ng-vm\n......\n[189937.363148] Memory cgroup out of memory: Kill process 443160 (stress-ng-vm) score 1272 or sacrifice child\n[189937.363186] Killed process 443160 (stress-ng-vm), UID 0, total-vm:773468kB, anon-rss:152704kB, file-rss:164kB, shmem-rss:0kB\n")),(0,o.kt)("p",null,"It\u2019s clear from the output that the ",(0,o.kt)("inlineCode",{parentName:"p"},"stress-ng-vm")," processes are being killed because there are out of memory (OOM) errors."),(0,o.kt)("p",null,"If processes can\u2019t get the memory they want, things get tricky. They are very likely to fail. Rather than wait for processes to crash, it\u2019s better if you kill some of them to get more memory. The OOM killer stops processes by an order and tries to recover the most memory while causing the least trouble. For detailed information on this process, see ",(0,o.kt)("a",{parentName:"p",href:"https://lwn.net/Articles/391222/"},"this introduction")," to OOM killer."),(0,o.kt)("p",null,"Looking at the output above, you can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),", which is our application process that should never be terminated, has an ",(0,o.kt)("inlineCode",{parentName:"p"},"oom_score_adj")," of 988. That is quite dangerous since it is the process with the highest score to get killed. But there is a simple way to stop the OOM killer from killing a specific process. When you create a Pod, it is assigned a Quality of Service (QoS) class. For detailed information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/"},"Configure Quality of Service for Pods"),"."),(0,o.kt)("p",null,"Generally, if you create a Pod with precisely-specified resource requests, it is classified as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Guaranteed")," Pod. OOM killers do not kill containers in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Guaranteed")," Pod if there are other things to kill. These entities include non-",(0,o.kt)("inlineCode",{parentName:"p"},"Guaranteed")," Pods and stress-ng workers. A Pod with no resource requests is marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"BestEffort"),", and the OOM killer stops it first."),(0,o.kt)("p",null,"So that's all for the tour. Our suggestion is that ",(0,o.kt)("inlineCode",{parentName:"p"},"free")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," should not be used to assess memory in containers. Be careful when you assign resource limits to your Pod and select the right QoS. In the future, we\u2019ll create a more detailed StressChaos document."),(0,o.kt)("h2",{id:"deeper-dive-into-kubernetes-memory-management"},"Deeper dive into Kubernetes memory management"),(0,o.kt)("p",null,"Kubernetes tries to evict Pods that use too much memory (but not more memory than their limits). Kubernetes gets your Pod memory usage from ",(0,o.kt)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/memory/memory.usage_in_bytes")," and subtracts it by the ",(0,o.kt)("inlineCode",{parentName:"p"},"total_inactive_file")," line in ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.stat"),"."),(0,o.kt)("p",null,"Keep in mind that Kuberenetes ",(0,o.kt)("strong",{parentName:"p"},"does not")," support swap. Even if you have a node with swap enabled, Kubernetes creates containers with ",(0,o.kt)("inlineCode",{parentName:"p"},"swappiness=0"),", which means swap is eventually disabled. That is mainly for performance concerns."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"memory.usage_in_bytes")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"resident set")," plus ",(0,o.kt)("inlineCode",{parentName:"p"},"cache"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"total_inactive_file")," is memory in cache that the OS can retrieve if the memory is running out. ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.usage_in_bytes - total_inactive_file")," is called ",(0,o.kt)("inlineCode",{parentName:"p"},"working_set"),". You will get this ",(0,o.kt)("inlineCode",{parentName:"p"},"working_set")," value by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl top pod <your pod> --containers"),". Kubernetes uses this value to decide whether or not to evict your Pods."),(0,o.kt)("p",null,"Kubernetes periodically inspects memory usage. If a container's memory usage increases too quickly or the container cannot be evicted, the OOM killer is invoked. Kubernetes has its way of protecting its own process, so it always picks the container. When a container is killed, it may or may not be restarted, depending on your restart policy. If it is killed, when you execute ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe pod <your pod>")," you will see it is restarted and the reason is ",(0,o.kt)("inlineCode",{parentName:"p"},"OOMKilled"),"."),(0,o.kt)("p",null,"Another thing worth mentioning is the kernel memory. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.9"),", Kubernetes\u2019 kernel memory support is enabled by default. It is also a feature of cgroup memory subsystems. You can limit container kernel memory usage. Unfortunately, this causes a cgroup leak on kernel versions up to ",(0,o.kt)("inlineCode",{parentName:"p"},"v4.2"),". You can either upgrade your kernel to ",(0,o.kt)("inlineCode",{parentName:"p"},"v4.3")," or disable it."),(0,o.kt)("h2",{id:"how-we-implement-stresschaos"},"How we implement StressChaos"),(0,o.kt)("p",null,"StressChaos is a simple way to test your container's behavior when it is low on memory. StressChaos utilizes a powerful tool named ",(0,o.kt)("inlineCode",{parentName:"p"},"stress-ng")," to allocate memory and continue writing to the allocated memory. Because containers have memory limits and container limits are bound to a cgroup, we must find a way to run ",(0,o.kt)("inlineCode",{parentName:"p"},"stress-ng")," in a specific cgroup. Luckily, this part is easy. With enough privileges, we can assign any process to any cgroup by writing to files in ",(0,o.kt)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/"),"."),(0,o.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack channel")," (#project-chaos-mesh)! Or submit your pull requests or issues to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}h.isMDXComponent=!0},90386:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/how-to-efficiently-stress-test-pod-memory-banner-3dd86c1ed5645a75c8cd7c2236a7c41a.jpg"}}]);
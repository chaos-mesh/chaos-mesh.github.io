"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[64634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,s(s({ref:t},h),{},{components:n})):a.createElement(k,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},s=void 0,i={permalink:"/zh/blog/run_your_first_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-03-18-run-your-first-chaos-experiment.md",source:"@site/blog/2020-03-18-run-your-first-chaos-experiment.md",title:"Run Your First Chaos Experiment in 10 Minutes",description:"Run your first chaos experiment in 10 minutes",date:"2020-03-18T00:00:00.000Z",formattedDate:"2020\u5e743\u670818\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/zh/blog/tags/kubernetes"}],readingTime:5.73,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},prevItem:{title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",permalink:"/zh/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"},nextItem:{title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",permalink:"/zh/blog/chaos_mesh_your_chaos_engineering_solution"}},l={authorsImageUrls:[void 0]},p=[{value:"A preview of our little experiment",id:"a-preview-of-our-little-experiment",level:2},{value:"Let&#39;s get started!",id:"lets-get-started",level:2},{value:"Prepare the environment",id:"prepare-the-environment",level:3},{value:"Deploy the application",id:"deploy-the-application",level:3},{value:"Create the chaos experiment",id:"create-the-chaos-experiment",level:3},{value:"Delete the chaos experiment",id:"delete-the-chaos-experiment",level:3},{value:"Delete Kubernetes clusters",id:"delete-kubernetes-clusters",level:3},{value:"Cool! What&#39;s next?",id:"cool-whats-next",level:2}],h={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run your first chaos experiment in 10 minutes",src:n(97329).Z,width:"1000",height:"333"})),(0,o.kt)("p",null,"Chaos Engineering is a way to test a production software system's robustness by simulating unusual or disruptive conditions. For many people, however, the transition from learning Chaos Engineering to practicing it on their own systems is daunting. It sounds like one of those big ideas that require a fully-equipped team to plan ahead. Well, it doesn't have to be. To get started with chaos experimenting, you may be just one suitable platform away."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is an ",(0,o.kt)("strong",{parentName:"p"},"easy-to-use"),", open-source, cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. This 10-minute tutorial will help you quickly get started with Chaos Engineering and run your first chaos experiment with Chaos Mesh."),(0,o.kt)("p",null,"For more information about Chaos Mesh, refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/chaos-mesh-your-chaos-engineering-solution-for-system-resiliency-on-kubernetes/"},"previous article")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"chaos-mesh project")," on GitHub."),(0,o.kt)("h2",{id:"a-preview-of-our-little-experiment"},"A preview of our little experiment"),(0,o.kt)("p",null,"Chaos experiments are similar to experiments we do in a science class. It's perfectly fine to stimulate turbulent situations in a controlled environment. In our case here, we will be simulating network chaos on a small web application called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/web-show"},"web-show"),". To visualize the chaos effect, web-show records the latency from its pod to the kube-controller pod (under the namespace of ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system"),") every 10 seconds."),(0,o.kt)("p",null,"The following clip shows the process of installing Chaos Mesh, deploying web-show, and creating the chaos experiment within a few commands:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The whole process of the chaos experiment",src:n(84958).Z,width:"800",height:"450"})),(0,o.kt)("div",{className:"caption-center"}," The whole process of the chaos experiment "),(0,o.kt)("p",null,"Now it's your turn! It's time to get your hands dirty."),(0,o.kt)("h2",{id:"lets-get-started"},"Let's get started!"),(0,o.kt)("p",null,"For our simple experiment, we use Kubernetes in the Docker (",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"Kind"),") for Kubernetes development. You can feel free to use ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube")," or any existing Kubernetes clusters to follow along."),(0,o.kt)("h3",{id:"prepare-the-environment"},"Prepare the environment"),(0,o.kt)("p",null,"Before moving forward, make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed on your local computer, with Docker up and running. For macOS, it's recommended to allocate at least 6 CPU cores to Docker. For details, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/#advanced"},"Docker configuration for Mac"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get Chaos Mesh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh with the ",(0,o.kt)("inlineCode",{parentName:"p"},"install.sh")," script:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh --local kind\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"install.sh")," is an automated shell script that checks your environment, installs Kind, launches Kubernetes clusters locally, and deploys Chaos Mesh. To see the detailed description of ",(0,o.kt)("inlineCode",{parentName:"p"},"install.sh"),", you can include the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"If your local computer cannot pull images from ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gcr.io"),", use the local gcr.io mirror and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"./install.sh --local kind --docker-mirror")," instead."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the system environment variable:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Depending on your network, these steps might take a few minutes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you see an error message like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ERROR: failed to create cluster: failed to generate kubeadm config content: failed to get kubernetes version from node: failed to get file: command "docker exec --privileged kind-control-plane cat /kind/version" failed with error: exit status 1\n')),(0,o.kt)("p",{parentName:"li"},"increase the available resources for Docker on your local computer and execute the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh --local kind --force-local-kube\n"))))),(0,o.kt)("p",null,"When the process completes you will see a message indicating Chaos Mesh is successfully installed."),(0,o.kt)("h3",{id:"deploy-the-application"},"Deploy the application"),(0,o.kt)("p",null,"The next step is to deploy the application for testing. In our case here, we choose web-show because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy web-show with the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.sh")," script:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the Chaos Mesh directory\ncd examples/web-show &&\n./deploy.sh\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"If your local computer cannot pull images from ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"local gcr.io")," mirror and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"./deploy.sh --docker-mirror")," instead."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the web-show application. From your web browser, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."))),(0,o.kt)("h3",{id:"create-the-chaos-experiment"},"Create the chaos experiment"),(0,o.kt)("p",null,"Now that everything is ready, it's time to run your chaos experiment!"),(0,o.kt)("p",null,"Chaos Mesh uses ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/"},"CustomResourceDefinitions")," (CRD) to define chaos experiments. CRD objects are designed separately based on different experiment scenarios, which greatly simplifies the definition of CRD objects. Currently, CRD objects that have been implemented in Chaos Mesh include PodChaos, NetworkChaos, IOChaos, TimeChaos, and KernelChaos. Later, we'll support more fault injection types."),(0,o.kt)("p",null,"In this experiment, we are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/web-show/network-delay.yaml"},"NetworkChaos")," for the chaos experiment. The NetworkChaos configuration file, written in YAML, is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-example\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"\n  delay:\n    latency: "10ms"\n    correlation: "100"\n    jitter: "0ms"\n  duration: "30s"\n  scheduler:\n    cron: "@every 60s"\n')),(0,o.kt)("p",null,"For detailed descriptions of NetworkChaos actions, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/wiki/Network-Chaos"},"Chaos Mesh wiki"),". Here, we just rephrase the configuration as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"target: ",(0,o.kt)("inlineCode",{parentName:"li"},"web-show")),(0,o.kt)("li",{parentName:"ul"},"mission: inject a ",(0,o.kt)("inlineCode",{parentName:"li"},"10ms")," network delay every ",(0,o.kt)("inlineCode",{parentName:"li"},"60s")),(0,o.kt)("li",{parentName:"ul"},"attack duration: ",(0,o.kt)("inlineCode",{parentName:"li"},"30s")," each time")),(0,o.kt)("p",null,"To start NetworkChaos, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"network-delay.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the web-show application. In your web browser, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."),(0,o.kt)("p",{parentName:"li"},"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Using Chaos Mesh to insert delays in web-show",src:n(98404).Z,width:"1600",height:"780"})),(0,o.kt)("div",{className:"caption-center"}," Using Chaos Mesh to insert delays in web-show "),(0,o.kt)("p",null,"Congratulations! You just stirred up a little bit of chaos. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/web-show"},"examples/web-show"),"."),(0,o.kt)("h3",{id:"delete-the-chaos-experiment"},"Delete the chaos experiment"),(0,o.kt)("p",null,"Once you're finished testing, terminate the chaos experiment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete ",(0,o.kt)("inlineCode",{parentName:"p"},"network-delay.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl delete -f network-delay.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the web-show application. From your web browser, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."))),(0,o.kt)("p",null,"From the line graph, you can see the network latency level is back to normal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network latency level is back to normal",src:n(66225).Z,width:"1600",height:"794"})),(0,o.kt)("div",{className:"caption-center"}," Network latency level is back to normal "),(0,o.kt)("h3",{id:"delete-kubernetes-clusters"},"Delete Kubernetes clusters"),(0,o.kt)("p",null,"After you're done with the chaos experiment, execute the following command to delete the Kubernetes clusters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"If you encounter the ",(0,o.kt)("inlineCode",{parentName:"p"},"kind: command not found")," error, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile")," command first and then delete the Kubernetes clusters.")),(0,o.kt)("h2",{id:"cool-whats-next"},"Cool! What's next?"),(0,o.kt)("p",null,"Congratulations on your first successful journey into Chaos Engineering. How does it feel? Chaos Engineering is easy, right? But perhaps Chaos Mesh is not that easy-to-use. Command-line operation is inconvenient, writing YAML files manually is a bit tedious, or checking the experiment results is somewhat clumsy? Don't worry, Chaos Dashboard is on its way! Running chaos experiments on the web sure does sound exciting! If you'd like to help us build testing standards for cloud platforms or make Chaos Mesh better, we'd love to hear from you!"),(0,o.kt)("p",null,"If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the #project-chaos-mesh channel in the ",(0,o.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"CNCF slack workspace"),"."),(0,o.kt)("p",null,"GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"https://github.com/chaos-mesh/chaos-mesh")))}c.isMDXComponent=!0},66225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/network-latency-level-is-back-to-normal-1f6f4aa22c2582d0dfa8a5a2cc65c1d6.png"},97329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-first-chaos-experiment-in-ten-minutes-ff1807ef1fb0abc90717cde221c6fa9d.jpg"},98404:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"},84958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/whole-process-of-chaos-experiment-f244c2133045486ab9c715b740f0c728.gif"}}]);
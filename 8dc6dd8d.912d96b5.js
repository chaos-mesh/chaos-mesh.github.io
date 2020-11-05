(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(205)),s={slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},i={permalink:"/blog/run_your_first_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-03-18-run-your-first-chaos-experiment.md",source:"@site/blog/2020-03-18-run-your-first-chaos-experiment.md",description:"Run your first chaos experiment in 10 minutes",date:"2020-03-18T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],title:"Run Your First Chaos Experiment in 10 Minutes",readingTime:5.73,truncated:!0,prevItem:{title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",permalink:"/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"},nextItem:{title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",permalink:"/blog/chaos_mesh_your_chaos_engineering_solution"}},c=[{value:"A preview of our little experiment",id:"a-preview-of-our-little-experiment",children:[]},{value:"Let&#39;s get started!",id:"lets-get-started",children:[{value:"Prepare the environment",id:"prepare-the-environment",children:[]},{value:"Deploy the application",id:"deploy-the-application",children:[]},{value:"Create the chaos experiment",id:"create-the-chaos-experiment",children:[]},{value:"Delete the chaos experiment",id:"delete-the-chaos-experiment",children:[]},{value:"Delete Kubernetes clusters",id:"delete-kubernetes-clusters",children:[]}]},{value:"Cool! What&#39;s next?",id:"cool-whats-next",children:[]}],l={rightToc:c};function b(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Run your first chaos experiment in 10 minutes",src:a(241).default})),Object(r.b)("p",null,"Chaos Engineering is a way to test a production software system's robustness by simulating unusual or disruptive conditions. For many people, however, the transition from learning Chaos Engineering to practicing it on their own systems is daunting. It sounds like one of those big ideas that require a fully-equipped team to plan ahead. Well, it doesn't have to be. To get started with chaos experimenting, you may be just one suitable platform away."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"Chaos Mesh")," is an ",Object(r.b)("strong",{parentName:"p"},"easy-to-use"),", open-source, cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. This 10-minute tutorial will help you quickly get started with Chaos Engineering and run your first chaos experiment with Chaos Mesh."),Object(r.b)("p",null,"For more information about Chaos Mesh, refer to our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://pingcap.com/blog/chaos-mesh-your-chaos-engineering-solution-for-system-resiliency-on-kubernetes/"}),"previous article")," or the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"chaos-mesh project")," on GitHub."),Object(r.b)("h2",{id:"a-preview-of-our-little-experiment"},"A preview of our little experiment"),Object(r.b)("p",null,"Chaos experiments are similar to experiments we do in a science class. It's perfectly fine to stimulate turbulent situations in a controlled environment. In our case here, we will be simulating network chaos on a small web application called ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/web-show"}),"web-show"),". To visualize the chaos effect, web-show records the latency from its pod to the kube-controller pod (under the namespace of ",Object(r.b)("inlineCode",{parentName:"p"},"kube-system"),") every 10 seconds."),Object(r.b)("p",null,"The following clip shows the process of installing Chaos Mesh, deploying web-show, and creating the chaos experiment within a few commands:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"The whole process of the chaos experiment",src:a(290).default})),Object(r.b)("div",{class:"caption-center"}," The whole process of the chaos experiment "),Object(r.b)("p",null,"Now it's your turn! It's time to get your hands dirty."),Object(r.b)("h2",{id:"lets-get-started"},"Let's get started!"),Object(r.b)("p",null,"For our simple experiment, we use Kubernetes in the Docker (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kind.sigs.k8s.io/"}),"Kind"),") for Kubernetes development. You can feel free to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/"}),"Minikube")," or any existing Kubernetes clusters to follow along."),Object(r.b)("h3",{id:"prepare-the-environment"},"Prepare the environment"),Object(r.b)("p",null,"Before moving forward, make sure you have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," installed on your local computer, with Docker up and running. For macOS, it's recommended to allocate at least 6 CPU cores to Docker. For details, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/#advanced"}),"Docker configuration for Mac"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get Chaos Mesh:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh/\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh with the ",Object(r.b)("inlineCode",{parentName:"p"},"install.sh")," script:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./install.sh --local kind\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"install.sh")," is an automated shell script that checks your environment, installs Kind, launches Kubernetes clusters locally, and deploys Chaos Mesh. To see the detailed description of ",Object(r.b)("inlineCode",{parentName:"p"},"install.sh"),", you can include the ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," option."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"If your local computer cannot pull images from ",Object(r.b)("inlineCode",{parentName:"p"},"docker.io")," or ",Object(r.b)("inlineCode",{parentName:"p"},"gcr.io"),", use the local gcr.io mirror and execute ",Object(r.b)("inlineCode",{parentName:"p"},"./install.sh --local kind --docker-mirror")," instead."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the system environment variable:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"source ~/.bash_profile\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Depending on your network, these steps might take a few minutes.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you see an error message like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'ERROR: failed to create cluster: failed to generate kubeadm config content: failed to get kubernetes version from node: failed to get file: command "docker exec --privileged kind-control-plane cat /kind/version" failed with error: exit status 1\n')),Object(r.b)("p",{parentName:"li"},"  increase the available resources for Docker on your local computer and execute the following command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./install.sh --local kind --force-local-kube\n"))))),Object(r.b)("p",null,"When the process completes you will see a message indicating Chaos Mesh is successfully installed."),Object(r.b)("h3",{id:"deploy-the-application"},"Deploy the application"),Object(r.b)("p",null,"The next step is to deploy the application for testing. In our case here, we choose web-show because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy web-show with the ",Object(r.b)("inlineCode",{parentName:"p"},"deploy.sh")," script:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the Chaos Mesh directory\ncd examples/web-show &&\n./deploy.sh\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"If your local computer cannot pull images from ",Object(r.b)("inlineCode",{parentName:"p"},"docker.io"),", use the ",Object(r.b)("inlineCode",{parentName:"p"},"local gcr.io")," mirror and execute ",Object(r.b)("inlineCode",{parentName:"p"},"./deploy.sh --docker-mirror")," instead."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the web-show application. From your web browser, go to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."))),Object(r.b)("h3",{id:"create-the-chaos-experiment"},"Create the chaos experiment"),Object(r.b)("p",null,"Now that everything is ready, it's time to run your chaos experiment!"),Object(r.b)("p",null,"Chaos Mesh uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/"}),"CustomResourceDefinitions")," (CRD) to define chaos experiments. CRD objects are designed separately based on different experiment scenarios, which greatly simplifies the definition of CRD objects. Currently, CRD objects that have been implemented in Chaos Mesh include PodChaos, NetworkChaos, IOChaos, TimeChaos, and KernelChaos. Later, we'll support more fault injection types."),Object(r.b)("p",null,"In this experiment, we are using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/web-show/network-delay.yaml"}),"NetworkChaos")," for the chaos experiment. The NetworkChaos configuration file, written in YAML, is shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-example\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"\n  delay:\n    latency: "10ms"\n    correlation: "100"\n    jitter: "0ms"\n  duration: "30s"\n  scheduler:\n    cron: "@every 60s"\n')),Object(r.b)("p",null,"For detailed descriptions of NetworkChaos actions, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/wiki/Network-Chaos"}),"Chaos Mesh wiki"),". Here, we just rephrase the configuration as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"target: ",Object(r.b)("inlineCode",{parentName:"li"},"web-show")),Object(r.b)("li",{parentName:"ul"},"mission: inject a ",Object(r.b)("inlineCode",{parentName:"li"},"10ms")," network delay every ",Object(r.b)("inlineCode",{parentName:"li"},"60s")),Object(r.b)("li",{parentName:"ul"},"attack duration: ",Object(r.b)("inlineCode",{parentName:"li"},"30s")," each time")),Object(r.b)("p",null,"To start NetworkChaos, do the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"network-delay.yaml"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the web-show application. In your web browser, go to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."),Object(r.b)("p",{parentName:"li"},"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds."))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Using Chaos Mesh to insert delays in web-show",src:a(223).default})),Object(r.b)("div",{class:"caption-center"}," Using Chaos Mesh to insert delays in web-show "),Object(r.b)("p",null,"Congratulations! You just stirred up a little bit of chaos. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/web-show"}),"examples/web-show"),"."),Object(r.b)("h3",{id:"delete-the-chaos-experiment"},"Delete the chaos experiment"),Object(r.b)("p",null,"Once you're finished testing, terminate the chaos experiment."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Delete ",Object(r.b)("inlineCode",{parentName:"p"},"network-delay.yaml"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl delete -f network-delay.yaml\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the web-show application. From your web browser, go to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."))),Object(r.b)("p",null,"From the line graph, you can see the network latency level is back to normal."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Network latency level is back to normal",src:a(291).default})),Object(r.b)("div",{class:"caption-center"}," Network latency level is back to normal "),Object(r.b)("h3",{id:"delete-kubernetes-clusters"},"Delete Kubernetes clusters"),Object(r.b)("p",null,"After you're done with the chaos experiment, execute the following command to delete the Kubernetes clusters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"If you encounter the ",Object(r.b)("inlineCode",{parentName:"p"},"kind: command not found")," error, execute ",Object(r.b)("inlineCode",{parentName:"p"},"source ~/.bash_profile")," command first and then delete the Kubernetes clusters.")),Object(r.b)("h2",{id:"cool-whats-next"},"Cool! What's next?"),Object(r.b)("p",null,"Congratulations on your first successful journey into Chaos Engineering. How does it feel? Chaos Engineering is easy, right? But perhaps Chaos Mesh is not that easy-to-use. Command-line operation is inconvenient, writing YAML files manually is a bit tedious, or checking the experiment results is somewhat clumsy? Don't worry, Chaos Dashboard is on its way! Running chaos experiments on the web sure does sound exciting! If you'd like to help us build testing standards for cloud platforms or make Chaos Mesh better, we'd love to hear from you!"),Object(r.b)("p",null,"If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the #project-chaos-mesh channel in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://join.slack.com/t/cloud-native/shared_invite/zt-fyy3b8up-qHeDNVqbz1j8HDY6g1cY4w"}),"CNCF slack workspace"),"."),Object(r.b)("p",null,"GitHub: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"https://github.com/chaos-mesh/chaos-mesh")))}b.isMDXComponent=!0},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return a?o.a.createElement(m,i(i({ref:t},l),{},{components:a})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},223:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"},241:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/run-first-chaos-experiment-in-ten-minutes-ff1807ef1fb0abc90717cde221c6fa9d.jpg"},290:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/whole-process-of-chaos-experiment-f244c2133045486ab9c715b740f0c728.gif"},291:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/network-latency-level-is-back-to-normal-1f6f4aa22c2582d0dfa8a5a2cc65c1d6.png"}}]);
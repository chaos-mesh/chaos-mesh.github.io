"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1772],{76016:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var t=n(34152),o=n(86070),i=n(8637);const r={slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",authors:"cwen",image:"/img/blog/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},a=void 0,h={authorsImageUrls:[void 0]},l=[{value:"A preview of our little experiment",id:"a-preview-of-our-little-experiment",level:2},{value:"Let&#39;s get started!",id:"lets-get-started",level:2},{value:"Prepare the environment",id:"prepare-the-environment",level:3},{value:"Deploy the application",id:"deploy-the-application",level:3},{value:"Create the chaos experiment",id:"create-the-chaos-experiment",level:3},{value:"Delete the chaos experiment",id:"delete-the-chaos-experiment",level:3},{value:"Delete Kubernetes clusters",id:"delete-kubernetes-clusters",level:3},{value:"Cool! What&#39;s next?",id:"cool-whats-next",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Run your first chaos experiment in 10 minutes",src:n(98466).A+"",width:"1000",height:"333"})}),"\n",(0,o.jsx)(s.p,{children:"Chaos Engineering is a way to test a production software system's robustness by simulating unusual or disruptive conditions. For many people, however, the transition from learning Chaos Engineering to practicing it on their own systems is daunting. It sounds like one of those big ideas that require a fully-equipped team to plan ahead. Well, it doesn't have to be. To get started with chaos experimenting, you may be just one suitable platform away."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," is an ",(0,o.jsx)(s.strong,{children:"easy-to-use"}),", open-source, cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. This 10-minute tutorial will help you quickly get started with Chaos Engineering and run your first chaos experiment with Chaos Mesh."]}),"\n",(0,o.jsxs)(s.p,{children:["For more information about Chaos Mesh, refer to our ",(0,o.jsx)(s.a,{href:"https://pingcap.com/blog/chaos-mesh-your-chaos-engineering-solution-for-system-resiliency-on-kubernetes/",children:"previous article"})," or the ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"chaos-mesh project"})," on GitHub."]}),"\n",(0,o.jsx)(s.h2,{id:"a-preview-of-our-little-experiment",children:"A preview of our little experiment"}),"\n",(0,o.jsxs)(s.p,{children:["Chaos experiments are similar to experiments we do in a science class. It's perfectly fine to stimulate turbulent situations in a controlled environment. In our case here, we will be simulating network chaos on a small web application called ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/web-show",children:"web-show"}),". To visualize the chaos effect, web-show records the latency from its pod to the kube-controller pod (under the namespace of ",(0,o.jsx)(s.code,{children:"kube-system"}),") every 10 seconds."]}),"\n",(0,o.jsx)(s.p,{children:"The following clip shows the process of installing Chaos Mesh, deploying web-show, and creating the chaos experiment within a few commands:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"The whole process of the chaos experiment",src:n(96252).A+"",width:"800",height:"450"})}),"\n",(0,o.jsx)(s.p,{children:"Now it's your turn! It's time to get your hands dirty."}),"\n",(0,o.jsx)(s.h2,{id:"lets-get-started",children:"Let's get started!"}),"\n",(0,o.jsxs)(s.p,{children:["For our simple experiment, we use Kubernetes in the Docker (",(0,o.jsx)(s.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"}),") for Kubernetes development. You can feel free to use ",(0,o.jsx)(s.a,{href:"https://minikube.sigs.k8s.io/",children:"Minikube"})," or any existing Kubernetes clusters to follow along."]}),"\n",(0,o.jsx)(s.h3,{id:"prepare-the-environment",children:"Prepare the environment"}),"\n",(0,o.jsxs)(s.p,{children:["Before moving forward, make sure you have ",(0,o.jsx)(s.a,{href:"https://git-scm.com/",children:"Git"})," and ",(0,o.jsx)(s.a,{href:"https://www.docker.com/",children:"Docker"})," installed on your local computer, with Docker up and running. For macOS, it's recommended to allocate at least 6 CPU cores to Docker. For details, see ",(0,o.jsx)(s.a,{href:"https://docs.docker.com/docker-for-mac/#advanced",children:"Docker configuration for Mac"}),"."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Get Chaos Mesh:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh/\n"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Install Chaos Mesh with the ",(0,o.jsx)(s.code,{children:"install.sh"})," script:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"./install.sh --local kind\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"install.sh"})," is an automated shell script that checks your environment, installs Kind, launches Kubernetes clusters locally, and deploys Chaos Mesh. To see the detailed description of ",(0,o.jsx)(s.code,{children:"install.sh"}),", you can include the ",(0,o.jsx)(s.code,{children:"--help"})," option."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(s.p,{children:["If your local computer cannot pull images from ",(0,o.jsx)(s.code,{children:"docker.io"})," or ",(0,o.jsx)(s.code,{children:"gcr.io"}),", use the local gcr.io mirror and execute ",(0,o.jsx)(s.code,{children:"./install.sh --local kind --docker-mirror"})," instead."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Set the system environment variable:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"source ~/.bash_profile\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Depending on your network, these steps might take a few minutes."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"If you see an error message like this:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'ERROR: failed to create cluster: failed to generate kubeadm config content: failed to get kubernetes version from node: failed to get file: command "docker exec --privileged kind-control-plane cat /kind/version" failed with error: exit status 1\n'})}),"\n",(0,o.jsx)(s.p,{children:"increase the available resources for Docker on your local computer and execute the following command:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"./install.sh --local kind --force-local-kube\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"When the process completes you will see a message indicating Chaos Mesh is successfully installed."}),"\n",(0,o.jsx)(s.h3,{id:"deploy-the-application",children:"Deploy the application"}),"\n",(0,o.jsx)(s.p,{children:"The next step is to deploy the application for testing. In our case here, we choose web-show because it allows us to directly observe the effect of network chaos. You can also deploy your own application for testing."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Deploy web-show with the ",(0,o.jsx)(s.code,{children:"deploy.sh"})," script:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# Make sure you are in the Chaos Mesh directory\ncd examples/web-show &&\n./deploy.sh\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(s.p,{children:["If your local computer cannot pull images from ",(0,o.jsx)(s.code,{children:"docker.io"}),", use the ",(0,o.jsx)(s.code,{children:"local gcr.io"})," mirror and execute ",(0,o.jsx)(s.code,{children:"./deploy.sh --docker-mirror"})," instead."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Access the web-show application. From your web browser, go to ",(0,o.jsx)(s.code,{children:"http://localhost:8081"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"create-the-chaos-experiment",children:"Create the chaos experiment"}),"\n",(0,o.jsx)(s.p,{children:"Now that everything is ready, it's time to run your chaos experiment!"}),"\n",(0,o.jsxs)(s.p,{children:["Chaos Mesh uses ",(0,o.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/",children:"CustomResourceDefinitions"})," (CRD) to define chaos experiments. CRD objects are designed separately based on different experiment scenarios, which greatly simplifies the definition of CRD objects. Currently, CRD objects that have been implemented in Chaos Mesh include PodChaos, NetworkChaos, IOChaos, TimeChaos, and KernelChaos. Later, we'll support more fault injection types."]}),"\n",(0,o.jsxs)(s.p,{children:["In this experiment, we are using ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/web-show/network-delay.yaml",children:"NetworkChaos"})," for the chaos experiment. The NetworkChaos configuration file, written in YAML, is shown below:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay-example\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      "app": "web-show"\n  delay:\n    latency: "10ms"\n    correlation: "100"\n    jitter: "0ms"\n  duration: "30s"\n  scheduler:\n    cron: "@every 60s"\n'})}),"\n",(0,o.jsxs)(s.p,{children:["For detailed descriptions of NetworkChaos actions, see ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/wiki/Network-Chaos",children:"Chaos Mesh wiki"}),". Here, we just rephrase the configuration as:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["target: ",(0,o.jsx)(s.code,{children:"web-show"})]}),"\n",(0,o.jsxs)(s.li,{children:["mission: inject a ",(0,o.jsx)(s.code,{children:"10ms"})," network delay every ",(0,o.jsx)(s.code,{children:"60s"})]}),"\n",(0,o.jsxs)(s.li,{children:["attack duration: ",(0,o.jsx)(s.code,{children:"30s"})," each time"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"To start NetworkChaos, do the following:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Run ",(0,o.jsx)(s.code,{children:"network-delay.yaml"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl apply -f network-delay.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Access the web-show application. In your web browser, go to ",(0,o.jsx)(s.code,{children:"http://localhost:8081"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"From the line graph, you can tell that there is a 10 ms network delay every 60 seconds."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Using Chaos Mesh to insert delays in web-show",src:n(41532).A+"",width:"1600",height:"780"})}),"\n",(0,o.jsxs)(s.p,{children:["Congratulations! You just stirred up a little bit of chaos. If you are intrigued and want to try out more chaos experiments with Chaos Mesh, check out ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/web-show",children:"examples/web-show"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"delete-the-chaos-experiment",children:"Delete the chaos experiment"}),"\n",(0,o.jsx)(s.p,{children:"Once you're finished testing, terminate the chaos experiment."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Delete ",(0,o.jsx)(s.code,{children:"network-delay.yaml"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# Make sure you are in the chaos-mesh/examples/web-show directory\nkubectl delete -f network-delay.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Access the web-show application. From your web browser, go to ",(0,o.jsx)(s.code,{children:"http://localhost:8081"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"From the line graph, you can see the network latency level is back to normal."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Network latency level is back to normal",src:n(16950).A+"",width:"1600",height:"794"})}),"\n",(0,o.jsx)(s.h3,{id:"delete-kubernetes-clusters",children:"Delete Kubernetes clusters"}),"\n",(0,o.jsx)(s.p,{children:"After you're done with the chaos experiment, execute the following command to delete the Kubernetes clusters:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"kind delete cluster --name=kind\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(s.p,{children:["If you encounter the ",(0,o.jsx)(s.code,{children:"kind: command not found"})," error, execute ",(0,o.jsx)(s.code,{children:"source ~/.bash_profile"})," command first and then delete the Kubernetes clusters."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"cool-whats-next",children:"Cool! What's next?"}),"\n",(0,o.jsx)(s.p,{children:"Congratulations on your first successful journey into Chaos Engineering. How does it feel? Chaos Engineering is easy, right? But perhaps Chaos Mesh is not that easy-to-use. Command-line operation is inconvenient, writing YAML files manually is a bit tedious, or checking the experiment results is somewhat clumsy? Don't worry, Chaos Dashboard is on its way! Running chaos experiments on the web sure does sound exciting! If you'd like to help us build testing standards for cloud platforms or make Chaos Mesh better, we'd love to hear from you!"}),"\n",(0,o.jsxs)(s.p,{children:["If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the #project-chaos-mesh channel in the ",(0,o.jsx)(s.a,{href:"https://slack.cncf.io/",children:"CNCF slack workspace"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["GitHub: ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"https://github.com/chaos-mesh/chaos-mesh"})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},16950:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/network-latency-level-is-back-to-normal-1f6f4aa22c2582d0dfa8a5a2cc65c1d6.png"},98466:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/run-first-chaos-experiment-in-ten-minutes-ff1807ef1fb0abc90717cde221c6fa9d.jpg"},41532:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/using-chaos-mesh-to-insert-delays-in-web-show-7305090c77db159c16a1bb29464c2d61.png"},96252:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/whole-process-of-chaos-experiment-f244c2133045486ab9c715b740f0c728.gif"},8637:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(30758);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}},34152:e=>{e.exports=JSON.parse('{"permalink":"/zh/blog/run_your_first_chaos_experiment","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2020-03-18-run-your-first-chaos-experiment.md","source":"@site/blog/2020-03-18-run-your-first-chaos-experiment.md","title":"Run Your First Chaos Experiment in 10 Minutes","description":"Run your first chaos experiment in 10 minutes","date":"2020-03-18T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/zh/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/zh/blog/tags/chaos-engineering"},{"inline":true,"label":"Kubernetes","permalink":"/zh/blog/tags/kubernetes"}],"readingTime":5.575,"hasTruncateMarker":true,"authors":[{"name":"Cwen Yin","title":"Maintainer of Chaos Mesh","url":"https://github.com/cwen0","email":"cwenyin0@gmail.com","socials":{"x":"https://x.com/CWenYin"},"imageURL":"https://avatars.githubusercontent.com/u/22956341?v=4","key":"cwen","page":null}],"frontMatter":{"slug":"/run_your_first_chaos_experiment","title":"Run Your First Chaos Experiment in 10 Minutes","authors":"cwen","image":"/img/blog/run-first-chaos-experiment-in-ten-minutes.jpg","tags":["Chaos Mesh","Chaos Engineering","Kubernetes"]},"unlisted":false,"prevItem":{"title":"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node","permalink":"/zh/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"},"nextItem":{"title":"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes","permalink":"/zh/blog/chaos_mesh_your_chaos_engineering_solution"}}')}}]);
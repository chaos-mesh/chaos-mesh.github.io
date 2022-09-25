"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2986],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=h(o),p=a,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||s;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,i=new Array(s);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var h=2;h<s;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7786:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=o(87462),a=(o(67294),o(3905));const s={slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},i=void 0,r={permalink:"/zh/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",description:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",date:"2020-09-18T00:00:00.000Z",formattedDate:"2020\u5e749\u670818\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/zh/blog/tags/git-hub-action"},{label:"CI",permalink:"/zh/blog/tags/ci"}],readingTime:5.38,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars3.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},prevItem:{title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",permalink:"/zh/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",permalink:"/zh/blog/building_automated_testing_framework"}},l={authorsImageUrls:[void 0]},h=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",level:2},{value:"Using chaos-mesh-action in GitHub workflow",id:"using-chaos-mesh-action-in-github-workflow",level:2},{value:"Design a workflow",id:"design-a-workflow",level:3},{value:"Create the workflow",id:"create-the-workflow",level:3},{value:"Run the workflow",id:"run-the-workflow",level:3},{value:"Current status and next steps",id:"current-status-and-next-steps",level:2}],c={toc:h};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",src:o(14325).Z,width:"1600",height:"533"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chaos-mesh.org"},"Chaos Mesh")," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."),(0,a.kt)("p",null,"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."),(0,a.kt)("p",null,"chaos-mesh-action is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"GitHub market"),", and the source code is on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh-action"},"GitHub"),"."),(0,a.kt)("h2",{id:"design-of-chaos-mesh-action"},"Design of chaos-mesh-action"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action")," is a CI/CD feature natively supported by GitHub, through which we can easily build automated and customized software development workflows in the GitHub repository."),(0,a.kt)("p",null,"Combined with GitHub actions, Chaos Mesh can be more easily integrated into the daily development and testing of the system, thus guaranteeing that each code submission on GitHub is bug-free and won\u2019t damage existing code. The following figure shows chaos-mesh-action integrated into the CI workflow:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"chaos-mesh-action integration in the CI workflow",src:o(39587).Z,width:"698",height:"400"})),(0,a.kt)("h2",{id:"using-chaos-mesh-action-in-github-workflow"},"Using chaos-mesh-action in GitHub workflow"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"chaos-mesh-action")," works in Github workflows. A GitHub workflow is a configurable automated process that you can set up in your repository to build, test, package, release, or deploy any GitHub project. To integrate Chaos Mesh in your CI, do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Design a workflow."),(0,a.kt)("li",{parentName:"ol"},"Create a workflow."),(0,a.kt)("li",{parentName:"ol"},"Run the workflow.")),(0,a.kt)("h3",{id:"design-a-workflow"},"Design a workflow"),(0,a.kt)("p",null,"Before you design a workflow, you must consider the following issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What functions are we going to test in this workflow?"),(0,a.kt)("li",{parentName:"ul"},"What types of faults will we inject?"),(0,a.kt)("li",{parentName:"ul"},"How do we verify the correctness of the system?")),(0,a.kt)("p",null,"As an example, let\u2019s design a simple test workflow that includes the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create two Pods in a Kubernetes cluster."),(0,a.kt)("li",{parentName:"ol"},"Ping one pod from the other."),(0,a.kt)("li",{parentName:"ol"},"Use Chaos Mesh to inject network delay chaos and test whether the ping command is affected.")),(0,a.kt)("h3",{id:"create-the-workflow"},"Create the workflow"),(0,a.kt)("p",null,"After you design the workflow, the next step is to create it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the GitHub repository that contains the software you want to test."),(0,a.kt)("li",{parentName:"ol"},"To start creating a workflow, click ",(0,a.kt)("strong",{parentName:"li"},"Actions"),", and then click the ",(0,a.kt)("strong",{parentName:"li"},"New workflow")," button:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Creating a workflow",src:o(2217).Z,width:"1600",height:"396"})),(0,a.kt)("p",null,"A workflow is essentially the configuration of jobs that take place sequentially and automatically. Note that the jobs are configured in a single file. For better illustration, we split the script into different job groups as shown below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the workflow name and trigger rules."),(0,a.kt)("p",{parentName:"li"},'This job names the workflow "Chaos.\u201d When the code is pushed to the master branch or a pull request is submitted to the master branch, this workflow is triggered.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the CI-related environment."),(0,a.kt)("p",{parentName:"li"},"This configuration specifies the operating system (Ubuntu), and that it uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/kind-cluster"},"helm/kind-action")," to create a Kind cluster. Then, it outputs related information about the cluster. Finally, it checks out the GitHub repository for the workflow to access."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy the application."),(0,a.kt)("p",{parentName:"li"},"In our example, this job deploys an application that creates two Kubernetes Pods."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Inject chaos with chaos-mesh-action."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n")),(0,a.kt)("p",{parentName:"li"},"With chaos-mesh-action, the installation of Chaos Mesh and the injection of chaos complete automatically. You simply need to prepare the chaos configuration that you intend to use to get its Base64 representation. Here, we want to inject network delay chaos into the Pods, so we use the original chaos configuration as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n")),(0,a.kt)("p",{parentName:"li"},"You can obtain the Base64 value of the above chaos configuration file using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ base64 chaos.yaml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Verify the system correctness."),(0,a.kt)("p",{parentName:"li"},"In this job, the workflow pings one Pod from the other and observes the changes in network delay."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n')))),(0,a.kt)("h3",{id:"run-the-workflow"},"Run the workflow"),(0,a.kt)("p",null,"Now that the workflow is configured, we can trigger it by submitting a pull request to the master branch. When the workflow completes, the verification job outputs of the results that look similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n")),(0,a.kt)("p",null,"The output indicates a regular series of 10-millisecond delays that last about 5 seconds each. This is consistent with the chaos configuration we injected into chaos-mesh-action."),(0,a.kt)("h2",{id:"current-status-and-next-steps"},"Current status and next steps"),(0,a.kt)("p",null,"At present, we have applied chaos-mesh-action to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator"},"TiDB Operator")," project. The workflow is injected with the Pod chaos to verify the restart function of the specified instances of the operator. The purpose is to ensure that tidb-operator can work normally when the pods of the operator are randomly deleted by the injected faults. You can view the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos"},"TiDB Operator page")," for more details."),(0,a.kt)("p",null,"In the future, we plan to apply chaos-mesh-action to more tests to ensure the stability of TiDB and related components. You are welcome to create your own workflow using chaos-mesh-action."),(0,a.kt)("p",null,"If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the ",(0,a.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"#project-chaos-mesh")," channel in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"CNCF")," slack workspace."))}u.isMDXComponent=!0},39587:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},14325:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"},2217:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"}}]);
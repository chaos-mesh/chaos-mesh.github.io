"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2986],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?o.createElement(g,s(s({ref:t},h),{},{components:n})):o.createElement(g,s({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return p}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],r={slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},l=void 0,c={permalink:"/zh/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",description:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",date:"2020-09-18T00:00:00.000Z",formattedDate:"September 18, 2020",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/zh/blog/tags/git-hub-action"},{label:"CI",permalink:"/zh/blog/tags/ci"}],readingTime:5.38,truncated:!0,authors:[{name:"Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars3.githubusercontent.com/u/5793595?v=4"}],prevItem:{title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",permalink:"/zh/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",permalink:"/zh/blog/building_automated_testing_framework"}},h={authorsImageUrls:[void 0]},u=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",children:[]},{value:"Using chaos-mesh-action in GitHub workflow",id:"using-chaos-mesh-action-in-github-workflow",children:[{value:"Design a workflow",id:"design-a-workflow",children:[]},{value:"Create the workflow",id:"create-the-workflow",children:[]},{value:"Run the workflow",id:"run-the-workflow",children:[]}]},{value:"Current status and next steps",id:"current-status-and-next-steps",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",src:n(29108).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org"},"Chaos Mesh")," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."),(0,i.kt)("p",null,"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."),(0,i.kt)("p",null,"chaos-mesh-action is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"GitHub market"),", and the source code is on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh-action"},"GitHub"),"."),(0,i.kt)("h2",{id:"design-of-chaos-mesh-action"},"Design of chaos-mesh-action"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action")," is a CI/CD feature natively supported by GitHub, through which we can easily build automated and customized software development workflows in the GitHub repository."),(0,i.kt)("p",null,"Combined with GitHub actions, Chaos Mesh can be more easily integrated into the daily development and testing of the system, thus guaranteeing that each code submission on GitHub is bug-free and won\u2019t damage existing code. The following figure shows chaos-mesh-action integrated into the CI workflow:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chaos-mesh-action integration in the CI workflow",src:n(16261).Z})),(0,i.kt)("h2",{id:"using-chaos-mesh-action-in-github-workflow"},"Using chaos-mesh-action in GitHub workflow"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"chaos-mesh-action")," works in Github workflows. A GitHub workflow is a configurable automated process that you can set up in your repository to build, test, package, release, or deploy any GitHub project. To integrate Chaos Mesh in your CI, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Design a workflow."),(0,i.kt)("li",{parentName:"ol"},"Create a workflow."),(0,i.kt)("li",{parentName:"ol"},"Run the workflow.")),(0,i.kt)("h3",{id:"design-a-workflow"},"Design a workflow"),(0,i.kt)("p",null,"Before you design a workflow, you must consider the following issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What functions are we going to test in this workflow?"),(0,i.kt)("li",{parentName:"ul"},"What types of faults will we inject?"),(0,i.kt)("li",{parentName:"ul"},"How do we verify the correctness of the system?")),(0,i.kt)("p",null,"As an example, let\u2019s design a simple test workflow that includes the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create two Pods in a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ol"},"Ping one pod from the other."),(0,i.kt)("li",{parentName:"ol"},"Use Chaos Mesh to inject network delay chaos and test whether the ping command is affected.")),(0,i.kt)("h3",{id:"create-the-workflow"},"Create the workflow"),(0,i.kt)("p",null,"After you design the workflow, the next step is to create it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the GitHub repository that contains the software you want to test."),(0,i.kt)("li",{parentName:"ol"},"To start creating a workflow, click ",(0,i.kt)("strong",{parentName:"li"},"Actions"),", and then click the ",(0,i.kt)("strong",{parentName:"li"},"New workflow")," button:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a workflow",src:n(23202).Z})),(0,i.kt)("p",null,"A workflow is essentially the configuration of jobs that take place sequentially and automatically. Note that the jobs are configured in a single file. For better illustration, we split the script into different job groups as shown below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the workflow name and trigger rules."),(0,i.kt)("p",{parentName:"li"},'This job names the workflow "Chaos.\u201d When the code is pushed to the master branch or a pull request is submitted to the master branch, this workflow is triggered.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the CI-related environment."),(0,i.kt)("p",{parentName:"li"},"This configuration specifies the operating system (Ubuntu), and that it uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/kind-cluster"},"helm/kind-action")," to create a Kind cluster. Then, it outputs related information about the cluster. Finally, it checks out the GitHub repository for the workflow to access."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deploy the application."),(0,i.kt)("p",{parentName:"li"},"In our example, this job deploys an application that creates two Kubernetes Pods."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inject chaos with chaos-mesh-action."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n")),(0,i.kt)("p",{parentName:"li"},"With chaos-mesh-action, the installation of Chaos Mesh and the injection of chaos complete automatically. You simply need to prepare the chaos configuration that you intend to use to get its Base64 representation. Here, we want to inject network delay chaos into the Pods, so we use the original chaos configuration as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n")),(0,i.kt)("p",{parentName:"li"},"You can obtain the Base64 value of the above chaos configuration file using the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ base64 chaos.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify the system correctness."),(0,i.kt)("p",{parentName:"li"},"In this job, the workflow pings one Pod from the other and observes the changes in network delay."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n')))),(0,i.kt)("h3",{id:"run-the-workflow"},"Run the workflow"),(0,i.kt)("p",null,"Now that the workflow is configured, we can trigger it by submitting a pull request to the master branch. When the workflow completes, the verification job outputs of the results that look similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n")),(0,i.kt)("p",null,"The output indicates a regular series of 10-millisecond delays that last about 5 seconds each. This is consistent with the chaos configuration we injected into chaos-mesh-action."),(0,i.kt)("h2",{id:"current-status-and-next-steps"},"Current status and next steps"),(0,i.kt)("p",null,"At present, we have applied chaos-mesh-action to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator"},"TiDB Operator")," project. The workflow is injected with the Pod chaos to verify the restart function of the specified instances of the operator. The purpose is to ensure that tidb-operator can work normally when the pods of the operator are randomly deleted by the injected faults. You can view the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos"},"TiDB Operator page")," for more details."),(0,i.kt)("p",null,"In the future, we plan to apply chaos-mesh-action to more tests to ensure the stability of TiDB and related components. You are welcome to create your own workflow using chaos-mesh-action."),(0,i.kt)("p",null,"If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the ",(0,i.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"#project-chaos-mesh")," channel in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"CNCF")," slack workspace."))}p.isMDXComponent=!0},16261:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},29108:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"},23202:function(e,t,n){t.Z=n.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"}}]);
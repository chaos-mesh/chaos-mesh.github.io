"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[96040],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||s;return o?n.createElement(d,i(i({ref:t},u),{},{components:o})):n.createElement(d,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<s;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},69702:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const s={title:"Integrate Chaos Mesh to GitHub Actions"},i=void 0,r={unversionedId:"integrate-chaos-mesh-into-github-actions",id:"version-2.3.3/integrate-chaos-mesh-into-github-actions",title:"Integrate Chaos Mesh to GitHub Actions",description:"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases.",source:"@site/versioned_docs/version-2.3.3/integrate-chaos-mesh-into-github-actions.md",sourceDirName:".",slug:"/integrate-chaos-mesh-into-github-actions",permalink:"/docs/2.3.3/integrate-chaos-mesh-into-github-actions",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/integrate-chaos-mesh-into-github-actions.md",tags:[],version:"2.3.3",frontMatter:{title:"Integrate Chaos Mesh to GitHub Actions"},sidebar:"docs",previous:{title:"GCP OAuth Authentication",permalink:"/docs/2.3.3/gcp-authentication"},next:{title:"Use Grafana Data Source Plugin for Observations",permalink:"/docs/2.3.3/use-grafana-data-source"}},l={},c=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",level:2},{value:"Use chaos-mesh-action in GitHub workflow",id:"use-chaos-mesh-action-in-github-workflow",level:2},{value:"Step 1: Design workflow",id:"step-1-design-workflow",level:3},{value:"Step 2: Create workflow",id:"step-2-create-workflow",level:3},{value:"Step 3: Run workflow",id:"step-3-run-workflow",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases."),(0,a.kt)("p",null,"chaos-mesh-action is a GitHub action that has been released on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"GitHub Marketplace"),". Its source code is on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh-action"},"GitHub")," as well."),(0,a.kt)("h2",{id:"design-of-chaos-mesh-action"},"Design of chaos-mesh-action"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action")," is the continuous integration (CI) and continuous deployment (CD) feature natively supported by GitHub. Using GitHub Action, you can easily automate and customize software development workflows right in your repository with GitHub Actions."),(0,a.kt)("p",null,"Equipped with GitHub Action, Chaos Mesh can be easily integrated into your daily development and tests, which ensures that all code submitted on GitHub is bug-free (to pass tests at least) without affecting the current logic. The image below shows chaos-mesh-action integrated into the CI workflow:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"chaos-mesh-action-integrate-in-the-ci-workflow",src:o(27351).Z,width:"698",height:"400"})),(0,a.kt)("h2",{id:"use-chaos-mesh-action-in-github-workflow"},"Use chaos-mesh-action in GitHub workflow"),(0,a.kt)("p",null,"chaos-mesh-action works for GitHub workflow. GitHub workflow is a configurable automated process. You can set up GitHub workflows in your repository to build, test, pack, publish or deploy any GitHub project. To integrate Chaos Mesh into your CI, take the following process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Design workflow"),(0,a.kt)("li",{parentName:"ul"},"Step 2: Create workflow"),(0,a.kt)("li",{parentName:"ul"},"Step 3: Run workflow")),(0,a.kt)("h3",{id:"step-1-design-workflow"},"Step 1: Design workflow"),(0,a.kt)("p",null,"Before designing a workflow, take the following questions into consideration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What features do you want to test in this workflow?"),(0,a.kt)("li",{parentName:"ul"},"What type of fault will be injected?"),(0,a.kt)("li",{parentName:"ul"},"How to verify the correctness of the system?")),(0,a.kt)("p",null,"For example, we can design a simple workflow for tests. The steps below can be included:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create two Pods in the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ol"},"Send ping request from one Pod to another Pod."),(0,a.kt)("li",{parentName:"ol"},"Use Chaos Mesh to inject the network latency fault to test whether the ping command is affected.")),(0,a.kt)("h3",{id:"step-2-create-workflow"},"Step 2: Create workflow"),(0,a.kt)("p",null,"After the workflow is designed, take the following steps to create a workflow."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter the GitHub repository of the software to be tested."),(0,a.kt)("li",{parentName:"ol"},"Create a workflow by clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Actions")," and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"New workflow"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"creating-a-workflow",src:o(92969).Z,width:"1600",height:"396"})),(0,a.kt)("p",null,"In essence, workflow is a sequentially automated job configuration. Note that the following job is configured in a single file. To provide a clear explanation, the script is split into different working groups, as shown below in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the workflow name and the trigger rules."),(0,a.kt)("p",{parentName:"li"},'Name the workflow to "Chaos". When you commit code or create a pull request to a master branch, this workflow is triggered.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the CI-related environment."),(0,a.kt)("p",{parentName:"li"},"This configuration specifies the operating system (Ubuntu) and creates a Kind cluster using helm/kind-action. After that, it prints the cluster information. Finally, it checks out the GitHub repository that the workflow is to access."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy an application."),(0,a.kt)("p",{parentName:"li"},"In the following example, this job deploys an application that creates two Kubernetes Pods."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Inject faults using Chaos Mesh."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n")),(0,a.kt)("p",{parentName:"li"},"Using chaos-mesh-action, Chaos Mesh is be installed and injects faults automatically. You only need to prepare the configuration of the chaos experiment and get its value encoded in base64. If you want to inject network latency to the Pod, you can use the following configuration example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n")),(0,a.kt)("p",{parentName:"li"},"Get the base64-encoded value of the chaos experiment configuration file above using the command below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"base64 chaos.yaml\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Verify the correctness of the system."),(0,a.kt)("p",{parentName:"li"},"In this job, the workflow sends ping requests from one Pod to another Pod and observes the network latency."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n')))),(0,a.kt)("h3",{id:"step-3-run-workflow"},"Step 3: Run workflow"),(0,a.kt)("p",null,"Once a workflow is created, you can trigger it by creating a pull request to a master branch. Once the workflow completes its running process, the output of the job verification is similar to the one below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n")),(0,a.kt)("p",null,"The output shows a series of 10-milliseconds delays, and each delay lasts for 5 seconds (which is 5 times). This is consistent with the configuration of chaos experiments that are injected using chaos-mesh-action."),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"Currently, chaos-mesh-action has been applied in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator"},"TiDB Operator"),". By injecting Pod faults into the workflow, you can verify the restart of the Operator instances. This is to ensure that the TiDB Operator can work properly when a Pod of TiDB operator is randomly deleted by the injected fault. For details, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos"},"TiDB Operator Workflow page"),"."),(0,a.kt)("p",null,"In the future, chaos-mesh-action will be applied in more TiDB tests to ensure the stability of TiDB and its components. Your are welcome to use chaos-mesh-action to create your own workflow."),(0,a.kt)("p",null,"If you find any issue in chaos-mesh-action, or find any information is missing, you are welcome to create an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"GitHub issue")," or a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/pulls"},"pull request (PR)")," in the Chaos Mesh repository. You can also join our slack channel ",(0,a.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"#project-chaos-mesh")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"CNCF")," workspace."))}h.isMDXComponent=!0},27351:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},92969:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"}}]);
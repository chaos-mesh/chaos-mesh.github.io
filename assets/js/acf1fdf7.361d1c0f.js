"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),s={title:"Integrate Chaos Mesh to GitHub Actions"},r=void 0,l={unversionedId:"integrate-chaos-mesh-into-github-actions",id:"version-2.0.0/integrate-chaos-mesh-into-github-actions",isDocsHomePage:!1,title:"Integrate Chaos Mesh to GitHub Actions",description:"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases.",source:"@site/versioned_docs/version-2.0.0/integrate-chaos-mesh-into-github-actions.md",sourceDirName:".",slug:"/integrate-chaos-mesh-into-github-actions",permalink:"/docs/integrate-chaos-mesh-into-github-actions",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.0/integrate-chaos-mesh-into-github-actions.md",version:"2.0.0",frontMatter:{title:"Integrate Chaos Mesh to GitHub Actions"},sidebar:"version-2.0.0/docs",previous:{title:"Simulate Stress Scenarios",permalink:"/docs/simulate-heavy-stress-in-physical-nodes"},next:{title:"Developer Guide Overview",permalink:"/docs/developer-guide-overview"}},c=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",children:[]},{value:"Use chaos-mesh-action in GitHub workflow",id:"use-chaos-mesh-action-in-github-workflow",children:[{value:"Step 1: Design workflow",id:"step-1-design-workflow",children:[]},{value:"Step 2: Create workflow",id:"step-2-create-workflow",children:[]},{value:"Step 3: Run workflow",id:"step-3-run-workflow",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],u={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases."),(0,i.kt)("p",null,"chaos-mesh-action is a GitHub action that has been released on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/chaos-mesh"},"GitHub Marketplace"),". Its source code is on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh-action"},"GitHub")," as well."),(0,i.kt)("h2",{id:"design-of-chaos-mesh-action"},"Design of chaos-mesh-action"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action")," is the continuous integration (CI) and continuous deployment (CD) feature natively supported by GitHub. Using GitHub Action, you can easily automate and customize software development workflows right in your repository with GitHub Actions."),(0,i.kt)("p",null,"Equipped with GitHub Action, Chaos Mesh can be easily integrated into your daily development and tests, which ensures that all code submitted on GitHub is bug-free (to pass tests at least) without affecting the current logic. The image below shows chaos-mesh-action integrated into the CI workflow:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chaos-mesh-action-integrate-in-the-ci-workflow",src:n(23368).Z})),(0,i.kt)("h2",{id:"use-chaos-mesh-action-in-github-workflow"},"Use chaos-mesh-action in GitHub workflow"),(0,i.kt)("p",null,"chaos-mesh-action works for GitHub workflow. GitHub workflow is a configurable automated process. You can set up GitHub workflows in your repository to build, test, pack, publish or deploy any GitHub project. To integrate Chaos Mesh into your CI, take the following process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1: Design workflow"),(0,i.kt)("li",{parentName:"ul"},"Step 2: Create workflow"),(0,i.kt)("li",{parentName:"ul"},"Step 3: Run workflow")),(0,i.kt)("h3",{id:"step-1-design-workflow"},"Step 1: Design workflow"),(0,i.kt)("p",null,"Before designing a workflow, take the following questions into consideration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What features do you want to test in this workflow?"),(0,i.kt)("li",{parentName:"ul"},"What type of fault will be injected?"),(0,i.kt)("li",{parentName:"ul"},"How to verify the correctness of the system?")),(0,i.kt)("p",null,"For example, we can design a simple workflow for tests. The steps below can be included:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create two Pods in the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ol"},"Send ping request from one Pod to another Pod."),(0,i.kt)("li",{parentName:"ol"},"Use Chaos Mesh to inject the network latency fault to test whether the ping command is affected.")),(0,i.kt)("h3",{id:"step-2-create-workflow"},"Step 2: Create workflow"),(0,i.kt)("p",null,"After the workflow is designed, take the following steps to create a workflow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the GitHub repository of the software to be tested."),(0,i.kt)("li",{parentName:"ol"},"Create a workflow by clicking ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," and then click ",(0,i.kt)("inlineCode",{parentName:"li"},"New workflow"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"creating-a-workflow",src:n(76788).Z})),(0,i.kt)("p",null,"In essence, workflow is a sequentially automated job configuration. Note that the following job is configured in a single file. To provide a clear explanation, the script is split into different working groups, as shown below in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the workflow name and the trigger rules."),(0,i.kt)("p",{parentName:"li"},'Name the workflow to "Chaos". When you commit code or create a pull request to a master branch, this workflow is triggered.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the CI-related environment."),(0,i.kt)("p",{parentName:"li"},"This configuration specifies the operating system (Ubuntu) and creates a Kind cluster using helm/kind-action. After that, it prints the cluster information. Finally, it checks out the GitHub repository that the workflow is to access."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deploy an application."),(0,i.kt)("p",{parentName:"li"},"In the following example, this job deploys an application that creates two Kubernetes Pods."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inject faults using Chaos Mesh."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n")),(0,i.kt)("p",{parentName:"li"},"Using chaos-mesh-action, Chaos Mesh is be installed and injects faults automatically. You only need to prepare the configuration of the chaos experiment and get its value encoded in base64. If you want to inject network latency to the Pod, you can use the following configuration example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n")),(0,i.kt)("p",{parentName:"li"},"Get the base64-encoded value of the chaos experiment configuration file above using the command below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"base64 chaos.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify the correctness of the system."),(0,i.kt)("p",{parentName:"li"},"In this job, the workflow sends ping requests from one Pod to another Pod and observes the network latency."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n')))),(0,i.kt)("h3",{id:"step-3-run-workflow"},"Step 3: Run workflow"),(0,i.kt)("p",null,"Once a workflow is created, you can trigger it by creating a pull request to a master branch. Once the workflow completes its running process, the output of the job verification is similar to the one below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n")),(0,i.kt)("p",null,"The output shows a series of 10-milliseconds delays, and each delay lasts for 5 seconds (which is 5 times). This is consistent with the configuration of chaos experiments that are injected using chaos-mesh-action."),(0,i.kt)("h2",{id:"whats-next"},"What's next"),(0,i.kt)("p",null,"Currently, chaos-mesh-action has been applied in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator"},"TiDB Operator"),". By injecting Pod faults into the workflow, you can verify the restart of the Operator instances. This is to ensure that the TiDB Operator can work properly when a Pod of TiDB operator is randomly deleted by the injected fault. For details, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos"},"TiDB Operator Workflow page"),"."),(0,i.kt)("p",null,"In the future, chaos-mesh-action will be applied in more TiDB tests to ensure the stability of TiDB and its components. Your are welcome to use chaos-mesh-action to create your own workflow."),(0,i.kt)("p",null,"If you find any issue in chaos-mesh-action, or find any information is missing, you are welcome to create an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"GitHub issue")," or a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/pulls"},"pull request (PR)")," in the Chaos Mesh repository. You can also join our slack channel ",(0,i.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"#project-chaos-mesh")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"CNCF")," workspace."))}h.isMDXComponent=!0},23368:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},76788:function(e,t,n){t.Z=n.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"}}]);
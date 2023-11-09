"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8593],{50999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(11527),o=n(54881);const i={title:"Integrate Chaos Mesh to GitHub Actions"},a=void 0,r={id:"integrate-chaos-mesh-into-github-actions",title:"Integrate Chaos Mesh to GitHub Actions",description:"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases.",source:"@site/versioned_docs/version-2.6.2/integrate-chaos-mesh-into-github-actions.md",sourceDirName:".",slug:"/integrate-chaos-mesh-into-github-actions",permalink:"/docs/integrate-chaos-mesh-into-github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/integrate-chaos-mesh-into-github-actions.md",tags:[],version:"2.6.2",frontMatter:{title:"Integrate Chaos Mesh to GitHub Actions"},sidebar:"docs",previous:{title:"GCP OAuth Authentication",permalink:"/docs/gcp-authentication"},next:{title:"Use Grafana Data Source Plugin for Observations",permalink:"/docs/use-grafana-data-source"}},c={},l=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",level:2},{value:"Use chaos-mesh-action in GitHub workflow",id:"use-chaos-mesh-action-in-github-workflow",level:2},{value:"Step 1: Design workflow",id:"step-1-design-workflow",level:3},{value:"Step 2: Create workflow",id:"step-2-create-workflow",level:3},{value:"Step 3: Run workflow",id:"step-3-run-workflow",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This document describes how to integrate Chaos Mesh to customize the continuous integration (CI) using chaos-mesh-action. This helps you identify issues that have been introduced into system development before product releases."}),"\n",(0,s.jsxs)(t.p,{children:["chaos-mesh-action is a GitHub action that has been released on ",(0,s.jsx)(t.a,{href:"https://github.com/marketplace/actions/chaos-mesh",children:"GitHub Marketplace"}),". Its source code is on ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh-action",children:"GitHub"})," as well."]}),"\n",(0,s.jsx)(t.h2,{id:"design-of-chaos-mesh-action",children:"Design of chaos-mesh-action"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Action"})," is the continuous integration (CI) and continuous deployment (CD) feature natively supported by GitHub. Using GitHub Action, you can easily automate and customize software development workflows right in your repository with GitHub Actions."]}),"\n",(0,s.jsx)(t.p,{children:"Equipped with GitHub Action, Chaos Mesh can be easily integrated into your daily development and tests, which ensures that all code submitted on GitHub is bug-free (to pass tests at least) without affecting the current logic. The image below shows chaos-mesh-action integrated into the CI workflow:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chaos-mesh-action-integrate-in-the-ci-workflow",src:n(83795).Z+"",width:"698",height:"400"})}),"\n",(0,s.jsx)(t.h2,{id:"use-chaos-mesh-action-in-github-workflow",children:"Use chaos-mesh-action in GitHub workflow"}),"\n",(0,s.jsx)(t.p,{children:"chaos-mesh-action works for GitHub workflow. GitHub workflow is a configurable automated process. You can set up GitHub workflows in your repository to build, test, pack, publish or deploy any GitHub project. To integrate Chaos Mesh into your CI, take the following process:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Step 1: Design workflow"}),"\n",(0,s.jsx)(t.li,{children:"Step 2: Create workflow"}),"\n",(0,s.jsx)(t.li,{children:"Step 3: Run workflow"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-design-workflow",children:"Step 1: Design workflow"}),"\n",(0,s.jsx)(t.p,{children:"Before designing a workflow, take the following questions into consideration:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"What features do you want to test in this workflow?"}),"\n",(0,s.jsx)(t.li,{children:"What type of fault will be injected?"}),"\n",(0,s.jsx)(t.li,{children:"How to verify the correctness of the system?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, we can design a simple workflow for tests. The steps below can be included:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create two Pods in the Kubernetes cluster."}),"\n",(0,s.jsx)(t.li,{children:"Send ping request from one Pod to another Pod."}),"\n",(0,s.jsx)(t.li,{children:"Use Chaos Mesh to inject the network latency fault to test whether the ping command is affected."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-create-workflow",children:"Step 2: Create workflow"}),"\n",(0,s.jsx)(t.p,{children:"After the workflow is designed, take the following steps to create a workflow."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Enter the GitHub repository of the software to be tested."}),"\n",(0,s.jsxs)(t.li,{children:["Create a workflow by clicking ",(0,s.jsx)(t.code,{children:"Actions"})," and then click ",(0,s.jsx)(t.code,{children:"New workflow"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"creating-a-workflow",src:n(42933).Z+"",width:"1600",height:"396"})}),"\n",(0,s.jsx)(t.p,{children:"In essence, workflow is a sequentially automated job configuration. Note that the following job is configured in a single file. To provide a clear explanation, the script is split into different working groups, as shown below in:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set the workflow name and the trigger rules."}),"\n",(0,s.jsx)(t.p,{children:'Name the workflow to "Chaos". When you commit code or create a pull request to a master branch, this workflow is triggered.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install the CI-related environment."}),"\n",(0,s.jsx)(t.p,{children:"This configuration specifies the operating system (Ubuntu) and creates a Kind cluster using helm/kind-action. After that, it prints the cluster information. Finally, it checks out the GitHub repository that the workflow is to access."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy an application."}),"\n",(0,s.jsx)(t.p,{children:"In the following example, this job deploys an application that creates two Kubernetes Pods."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Inject faults using Chaos Mesh."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n"})}),"\n",(0,s.jsx)(t.p,{children:"Using chaos-mesh-action, Chaos Mesh is be installed and injects faults automatically. You only need to prepare the configuration of the chaos experiment and get its value encoded in base64. If you want to inject network latency to the Pod, you can use the following configuration example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the base64-encoded value of the chaos experiment configuration file above using the command below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"base64 chaos.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Verify the correctness of the system."}),"\n",(0,s.jsx)(t.p,{children:"In this job, the workflow sends ping requests from one Pod to another Pod and observes the network latency."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-run-workflow",children:"Step 3: Run workflow"}),"\n",(0,s.jsx)(t.p,{children:"Once a workflow is created, you can trigger it by creating a pull request to a master branch. Once the workflow completes its running process, the output of the job verification is similar to the one below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-log",children:"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n"})}),"\n",(0,s.jsx)(t.p,{children:"The output shows a series of 10-milliseconds delays, and each delay lasts for 5 seconds (which is 5 times). This is consistent with the configuration of chaos experiments that are injected using chaos-mesh-action."}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, chaos-mesh-action has been applied in ",(0,s.jsx)(t.a,{href:"https://github.com/pingcap/tidb-operator",children:"TiDB Operator"}),". By injecting Pod faults into the workflow, you can verify the restart of the Operator instances. This is to ensure that the TiDB Operator can work properly when a Pod of TiDB operator is randomly deleted by the injected fault. For details, see the ",(0,s.jsx)(t.a,{href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos",children:"TiDB Operator Workflow page"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In the future, chaos-mesh-action will be applied in more TiDB tests to ensure the stability of TiDB and its components. Your are welcome to use chaos-mesh-action to create your own workflow."}),"\n",(0,s.jsxs)(t.p,{children:["If you find any issue in chaos-mesh-action, or find any information is missing, you are welcome to create an ",(0,s.jsx)(t.a,{href:"https://github.com/pingcap/chaos-mesh/issues",children:"GitHub issue"})," or a ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/pulls",children:"pull request (PR)"})," in the Chaos Mesh repository. You can also join our slack channel ",(0,s.jsx)(t.a,{href:"https://slack.cncf.io/",children:"#project-chaos-mesh"})," in the ",(0,s.jsx)(t.a,{href:"https://www.cncf.io/",children:"CNCF"})," workspace."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},83795:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},42933:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"},54881:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(50959);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
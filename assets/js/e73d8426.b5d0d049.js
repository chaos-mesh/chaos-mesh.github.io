"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2986],{3353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(11527),o=n(7463);const i={slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},a=void 0,r={permalink:"/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",description:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",date:"2020-09-18T00:00:00.000Z",formattedDate:"September 18, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/blog/tags/git-hub-action"},{label:"CI",permalink:"/blog/tags/ci"}],readingTime:5.38,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars3.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},unlisted:!1,prevItem:{title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",permalink:"/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",permalink:"/blog/building_automated_testing_framework"}},h={authorsImageUrls:[void 0]},c=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",level:2},{value:"Using chaos-mesh-action in GitHub workflow",id:"using-chaos-mesh-action-in-github-workflow",level:2},{value:"Design a workflow",id:"design-a-workflow",level:3},{value:"Create the workflow",id:"create-the-workflow",level:3},{value:"Run the workflow",id:"run-the-workflow",level:3},{value:"Current status and next steps",id:"current-status-and-next-steps",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",src:n(12028).Z+"",width:"1600",height:"533"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://chaos-mesh.org",children:"Chaos Mesh"})," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."]}),"\n",(0,s.jsx)(t.p,{children:"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."}),"\n",(0,s.jsxs)(t.p,{children:["chaos-mesh-action is available on ",(0,s.jsx)(t.a,{href:"https://github.com/marketplace/actions/chaos-mesh",children:"GitHub market"}),", and the source code is on ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh-action",children:"GitHub"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"design-of-chaos-mesh-action",children:"Design of chaos-mesh-action"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Action"})," is a CI/CD feature natively supported by GitHub, through which we can easily build automated and customized software development workflows in the GitHub repository."]}),"\n",(0,s.jsx)(t.p,{children:"Combined with GitHub actions, Chaos Mesh can be more easily integrated into the daily development and testing of the system, thus guaranteeing that each code submission on GitHub is bug-free and won\u2019t damage existing code. The following figure shows chaos-mesh-action integrated into the CI workflow:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chaos-mesh-action integration in the CI workflow",src:n(88186).Z+"",width:"698",height:"400"})}),"\n",(0,s.jsx)(t.h2,{id:"using-chaos-mesh-action-in-github-workflow",children:"Using chaos-mesh-action in GitHub workflow"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/marketplace/actions/chaos-mesh",children:"chaos-mesh-action"})," works in Github workflows. A GitHub workflow is a configurable automated process that you can set up in your repository to build, test, package, release, or deploy any GitHub project. To integrate Chaos Mesh in your CI, do the following:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Design a workflow."}),"\n",(0,s.jsx)(t.li,{children:"Create a workflow."}),"\n",(0,s.jsx)(t.li,{children:"Run the workflow."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"design-a-workflow",children:"Design a workflow"}),"\n",(0,s.jsx)(t.p,{children:"Before you design a workflow, you must consider the following issues:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"What functions are we going to test in this workflow?"}),"\n",(0,s.jsx)(t.li,{children:"What types of faults will we inject?"}),"\n",(0,s.jsx)(t.li,{children:"How do we verify the correctness of the system?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As an example, let\u2019s design a simple test workflow that includes the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create two Pods in a Kubernetes cluster."}),"\n",(0,s.jsx)(t.li,{children:"Ping one pod from the other."}),"\n",(0,s.jsx)(t.li,{children:"Use Chaos Mesh to inject network delay chaos and test whether the ping command is affected."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"create-the-workflow",children:"Create the workflow"}),"\n",(0,s.jsx)(t.p,{children:"After you design the workflow, the next step is to create it."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Navigate to the GitHub repository that contains the software you want to test."}),"\n",(0,s.jsxs)(t.li,{children:["To start creating a workflow, click ",(0,s.jsx)(t.strong,{children:"Actions"}),", and then click the ",(0,s.jsx)(t.strong,{children:"New workflow"})," button:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Creating a workflow",src:n(96412).Z+"",width:"1600",height:"396"})}),"\n",(0,s.jsx)(t.p,{children:"A workflow is essentially the configuration of jobs that take place sequentially and automatically. Note that the jobs are configured in a single file. For better illustration, we split the script into different job groups as shown below:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set the workflow name and trigger rules."}),"\n",(0,s.jsx)(t.p,{children:'This job names the workflow "Chaos.\u201d When the code is pushed to the master branch or a pull request is submitted to the master branch, this workflow is triggered.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install the CI-related environment."}),"\n",(0,s.jsxs)(t.p,{children:["This configuration specifies the operating system (Ubuntu), and that it uses ",(0,s.jsx)(t.a,{href:"https://github.com/marketplace/actions/kind-cluster",children:"helm/kind-action"})," to create a Kind cluster. Then, it outputs related information about the cluster. Finally, it checks out the GitHub repository for the workflow to access."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy the application."}),"\n",(0,s.jsx)(t.p,{children:"In our example, this job deploys an application that creates two Kubernetes Pods."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Inject chaos with chaos-mesh-action."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n"})}),"\n",(0,s.jsx)(t.p,{children:"With chaos-mesh-action, the installation of Chaos Mesh and the injection of chaos complete automatically. You simply need to prepare the chaos configuration that you intend to use to get its Base64 representation. Here, we want to inject network delay chaos into the Pods, so we use the original chaos configuration as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can obtain the Base64 value of the above chaos configuration file using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ base64 chaos.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Verify the system correctness."}),"\n",(0,s.jsx)(t.p,{children:"In this job, the workflow pings one Pod from the other and observes the changes in network delay."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"run-the-workflow",children:"Run the workflow"}),"\n",(0,s.jsx)(t.p,{children:"Now that the workflow is configured, we can trigger it by submitting a pull request to the master branch. When the workflow completes, the verification job outputs of the results that look similar to the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n"})}),"\n",(0,s.jsx)(t.p,{children:"The output indicates a regular series of 10-millisecond delays that last about 5 seconds each. This is consistent with the chaos configuration we injected into chaos-mesh-action."}),"\n",(0,s.jsx)(t.h2,{id:"current-status-and-next-steps",children:"Current status and next steps"}),"\n",(0,s.jsxs)(t.p,{children:["At present, we have applied chaos-mesh-action to the ",(0,s.jsx)(t.a,{href:"https://github.com/pingcap/tidb-operator",children:"TiDB Operator"})," project. The workflow is injected with the Pod chaos to verify the restart function of the specified instances of the operator. The purpose is to ensure that tidb-operator can work normally when the pods of the operator are randomly deleted by the injected faults. You can view the ",(0,s.jsx)(t.a,{href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos",children:"TiDB Operator page"})," for more details."]}),"\n",(0,s.jsx)(t.p,{children:"In the future, we plan to apply chaos-mesh-action to more tests to ensure the stability of TiDB and related components. You are welcome to create your own workflow using chaos-mesh-action."}),"\n",(0,s.jsxs)(t.p,{children:["If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the ",(0,s.jsx)(t.a,{href:"https://slack.cncf.io/",children:"#project-chaos-mesh"})," channel in the ",(0,s.jsx)(t.a,{href:"https://www.cncf.io/",children:"CNCF"})," slack workspace."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},88186:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},12028:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"},96412:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"},7463:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(50959);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
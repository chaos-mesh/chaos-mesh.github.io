(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(173)),s={slug:"/chaos-mesh-action-integrate-chaos-engineering-into -your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},r={permalink:"/blog/chaos-mesh-action-integrate-chaos-engineering-into -your-ci",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",description:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",date:"2020-09-18T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/blog/tags/git-hub-action"},{label:"CI",permalink:"/blog/tags/ci"}],title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",readingTime:5.37,truncated:!0,prevItem:{title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",permalink:"/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh\xae and Argo",permalink:"/blog/building_automated_testing_framework"}},c=[{value:"Design of chaos-mesh-action",id:"design-of-chaos-mesh-action",children:[]},{value:"Using chaos-mesh-action in GitHub workflow",id:"using-chaos-mesh-action-in-github-workflow",children:[{value:"Design a workflow",id:"design-a-workflow",children:[]},{value:"Create the workflow",id:"create-the-workflow",children:[]},{value:"Run the workflow",id:"run-the-workflow",children:[]}]},{value:"Current status and next steps",id:"current-status-and-next-steps",children:[]}],l={rightToc:c};function b(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",src:n(207).default})),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://chaos-mesh.org"}),"Chaos Mesh")," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."),Object(i.b)("p",null,"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."),Object(i.b)("p",null,"chaos-mesh-action is available on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/chaos-mesh"}),"GitHub market"),", and the source code is on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh-action"}),"GitHub"),"."),Object(i.b)("h2",{id:"design-of-chaos-mesh-action"},"Design of chaos-mesh-action"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/actions"}),"GitHub Action")," is a CI/CD feature natively supported by GitHub, through which we can easily build automated and customized software development workflows in the GitHub repository. "),Object(i.b)("p",null,"Combined with GitHub actions, Chaos Mesh can be more easily integrated into the daily development and testing of the system, thus guaranteeing that each code submission on GitHub is bug-free and won\u2019t damage existing code. The following figure shows chaos-mesh-action integrated into the CI workflow:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"chaos-mesh-action integration in the CI workflow",src:n(264).default})),Object(i.b)("h2",{id:"using-chaos-mesh-action-in-github-workflow"},"Using chaos-mesh-action in GitHub workflow"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/chaos-mesh"}),"chaos-mesh-action")," works in Github workflows. A GitHub workflow is a configurable automated process that you can set up in your repository to build, test, package, release, or deploy any GitHub project. To integrate Chaos Mesh in your CI, do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Design a workflow."),Object(i.b)("li",{parentName:"ol"},"Create a workflow."),Object(i.b)("li",{parentName:"ol"},"Run the workflow.")),Object(i.b)("h3",{id:"design-a-workflow"},"Design a workflow"),Object(i.b)("p",null,"Before you design a workflow, you must consider the following issues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What functions are we going to test in this workflow?"),Object(i.b)("li",{parentName:"ul"},"What types of faults will we inject? "),Object(i.b)("li",{parentName:"ul"},"How do we verify the correctness of the system?")),Object(i.b)("p",null,"As an example, let\u2019s design a simple test workflow that includes the following steps: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create two Pods in a Kubernetes cluster."),Object(i.b)("li",{parentName:"ol"},"Ping one pod from the other. "),Object(i.b)("li",{parentName:"ol"},"Use Chaos Mesh to inject network delay chaos and test whether the ping command is affected.")),Object(i.b)("h3",{id:"create-the-workflow"},"Create the workflow"),Object(i.b)("p",null,"After you design the workflow, the next step is to create it. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navigate to the GitHub repository that contains the software you want to test."),Object(i.b)("li",{parentName:"ol"},"To start creating a workflow, click ",Object(i.b)("strong",{parentName:"li"},"Actions"),", and then click the ",Object(i.b)("strong",{parentName:"li"},"New workflow")," button:")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Creating a workflow",src:n(265).default})),Object(i.b)("p",null,"A workflow is essentially the configuration of jobs that take place sequentially and automatically. Note that the jobs are configured in a single file. For better illustration, we split the script into different job groups as shown below: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the workflow name and trigger rules."),Object(i.b)("p",{parentName:"li"},'This job names the workflow "Chaos.\u201d When the code is pushed to the master branch or a pull request is submitted to the master branch, this workflow is triggered.'),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"name: Chaos\n\non:\n push:\n   branches:\n     - master\n pull_request:\n   branches:\n     - master\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install the CI-related environment."),Object(i.b)("p",{parentName:"li"},"This configuration specifies the operating system (Ubuntu), and that it uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/kind-cluster"}),"helm/kind-action")," to create a Kind cluster. Then, it outputs related information about the cluster. Finally, it checks out the GitHub repository for the workflow to access. "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"jobs:\n build:\n   runs-on: ubuntu-latest\n   steps:\n\n   - name: Creating kind cluster\n     uses: helm/kind-action@v1.0.0-rc.1\n\n   - name: Print cluster information\n     run: |\n       kubectl config view\n       kubectl cluster-info\n       kubectl get nodes\n       kubectl get pods -n kube-system\n       helm version\n       kubectl version\n\n   - uses: actions/checkout@v2\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Deploy the application."),Object(i.b)("p",{parentName:"li"},"In our example, this job deploys an application that creates two Kubernetes Pods."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Inject chaos with chaos-mesh-action."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@xiang/refine_script\n    env:\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n")),Object(i.b)("p",{parentName:"li"},"With chaos-mesh-action, the installation of Chaos Mesh and the injection of chaos complete automatically. You simply need to prepare the chaos configuration that you intend to use to get its Base64 representation. Here, we want to inject network delay chaos into the Pods, so we use the original chaos configuration as follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n name: network-delay\n namespace: busybox\nspec:\n action: delay # the specific chaos action to inject\n mode: all\n selector:\n   pods:\n     busybox:\n       - busybox-0\n delay:\n   latency: "10ms"\n duration: "5s"\n scheduler:\n   cron: "@every 10s"\n direction: to\n target:\n   selector:\n     pods:\n       busybox:\n         - busybox-1\n   mode: all\n')),Object(i.b)("p",{parentName:"li"},"You can obtain the Base64 value of the above chaos configuration file using the following command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ base64 chaos.yaml\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify the system correctness."),Object(i.b)("p",{parentName:"li"},"In this job,  the workflow pings one Pod from the other and observes the changes in network delay."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n')))),Object(i.b)("h3",{id:"run-the-workflow"},"Run the workflow"),Object(i.b)("p",null,"Now that the workflow is configured, we can trigger it by submitting a pull request to the master branch. When the workflow completes, the verification job outputs of the results that look similar to the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n")),Object(i.b)("p",null,"The output indicates a regular series of 10-millisecond delays that last about 5 seconds each. This is consistent with the chaos configuration we injected into chaos-mesh-action.  "),Object(i.b)("h2",{id:"current-status-and-next-steps"},"Current status and next steps"),Object(i.b)("p",null,"At present, we have applied chaos-mesh-action to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tidb-operator"}),"TiDB Operator")," project. The workflow is injected with the Pod chaos to verify the restart function of the specified instances of the operator. The purpose is to ensure that tidb-operator can work normally when the pods of the operator are randomly deleted by the injected faults. You can view the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos"}),"TiDB Operator page")," for more details."),Object(i.b)("p",null,"In the future, we plan to apply chaos-mesh-action to more tests to ensure the stability of TiDB and related components. You are welcome to create your own workflow using chaos-mesh-action."),Object(i.b)("p",null,"If you find a bug or think something is missing, feel free to file an issue, open a pull request (PR), or join us on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://join.slack.com/t/cloud-native/shared_invite/zt-fyy3b8up-qHeDNVqbz1j8HDY6g1cY4w"}),"#project-chaos-mesh")," channel in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cncf.io/"}),"CNCF")," slack workspace. "))}b.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=b(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return n?o.a.createElement(m,r(r({ref:t},l),{},{components:n})):o.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"},264:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png"},265:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png"}}]);
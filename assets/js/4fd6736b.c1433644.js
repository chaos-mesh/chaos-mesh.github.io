"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5519],{4271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var r=s(11527),i=s(7463);const l={title:"Chaos Mesh Release Cycle"},a=void 0,t={id:"release-cycle",title:"Chaos Mesh Release Cycle",description:"This document is focused on Chaos Mesh developers and contributors who need to create an enhancement, issue, or pull request which targets a specific release milestone.",source:"@site/versioned_docs/version-2.6.2/release-cycle.md",sourceDirName:".",slug:"/release-cycle",permalink:"/docs/release-cycle",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/release-cycle.md",tags:[],version:"2.6.2",frontMatter:{title:"Chaos Mesh Release Cycle"},sidebar:"docs",previous:{title:"Upgrade from 2.1 to 2.2",permalink:"/docs/upgrade-from-2.1-to-2.2"},next:{title:"Chaos Mesh v2.5.0 Tracking",permalink:"/docs/release-2.5-tracking"}},o={},c=[{value:"Roles",id:"roles",level:2},{value:"Contributors/Developers",id:"contributorsdevelopers",level:3},{value:"Release Manager",id:"release-manager",level:3},{value:"Becoming Release Manager?",id:"becoming-release-manager",level:3},{value:"Versioning Scheme and Timeline",id:"versioning-scheme-and-timeline",level:2},{value:"Release Phases",id:"release-phases",level:2},{value:"Normal Dev",id:"normal-dev",level:3},{value:"Code Freeze",id:"code-freeze",level:3},{value:"Release Week",id:"release-week",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document is focused on Chaos Mesh developers and contributors who need to create an enhancement, issue, or pull request which targets a specific release milestone."}),"\n",(0,r.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,r.jsx)(n.h3,{id:"contributorsdevelopers",children:"Contributors/Developers"}),"\n",(0,r.jsx)(n.p,{children:"Contributors are expected to participate in the release cycle with the following forms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"participant discussions of new features/enhancements collection"}),"\n",(0,r.jsx)(n.li,{children:"contribute with codes/docs for Chaos Mesh"}),"\n",(0,r.jsx)(n.li,{children:"help to prune feature if required"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As a contributor, the only 2 things you need to notice are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"you might be asked to complete your uncompleted work, or prune them from the release branch."}),"\n",(0,r.jsx)(n.li,{children:'your PR might not be merged into master quickly during "Code Freeze"'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"release-manager",children:"Release Manager"}),"\n",(0,r.jsx)(n.p,{children:'"Release Managers" is an umbrella term that encompasses the set of Chaos Mesh contributors responsible for maintaining release branches, tagging releases, and building/packaging Chaos Mesh.'}),"\n",(0,r.jsx)(n.p,{children:"Release Manager are expected to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'collect "new features/enhancements" as a GitHub Issue'}),"\n",(0,r.jsxs)(n.li,{children:["create and maintain ",(0,r.jsx)(n.code,{children:"vX.Y.0"})," GitHub Milestone"]}),"\n",(0,r.jsx)(n.li,{children:"schedule and hold the required meeting"}),"\n",(0,r.jsx)(n.li,{children:"keep maintaining the tracking documentation for next coming release"}),"\n",(0,r.jsx)(n.li,{children:"communicate with contributors asking for help to complete/prune the unfinished features/docs; Or prune them by yourself if we lost the communication with contributors."}),"\n",(0,r.jsx)(n.li,{children:"cut the release branch"}),"\n",(0,r.jsx)(n.li,{children:"draft the Release Notes for the minor version"}),"\n",(0,r.jsx)(n.li,{children:"release the alpha, beta, minor versions"}),"\n",(0,r.jsx)(n.li,{children:"keeping enriching release-related documents"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"becoming-release-manager",children:"Becoming Release Manager?"}),"\n",(0,r.jsxs)(n.p,{children:["Chaos Mesh committers and maintainers would nominate new release managers at about the 1st week of the new release cycle, the nomination should be published in slack channel #chaos-mesh-maintainers. And they would be selected if there are no more than half the number of oppositions. At last, we would announce the release managers on the document website and slack channel ",(0,r.jsx)(n.a,{href:"https://cloud-native.slack.com/archives/C0193VAV272",children:"#project-chaos-mesh"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"versioning-scheme-and-timeline",children:"Versioning Scheme and Timeline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Chaos Mesh would release a minor version ",(0,r.jsx)(n.code,{children:"vX.Y.0"})," every 8 weeks."]}),"\n",(0,r.jsxs)(n.li,{children:["Chaos Mesh would release a preview version(",(0,r.jsx)(n.code,{children:"vX.Y.0.alpha/beta-W"}),", W>=0) every at least 2 weeks."]}),"\n",(0,r.jsxs)(n.li,{children:["Chaos Mesh would release a bugfix/patch (",(0,r.jsx)(n.code,{children:"vX.Y.Z"}),", Z>0) version as required."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"release-phases",children:"Release Phases"}),"\n",(0,r.jsx)(n.p,{children:"There would be 3 phases in a cycle of release:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Normal Dev (Week 1-5)"}),"\n",(0,r.jsx)(n.li,{children:"Code Freeze (Week 6-7)"}),"\n",(0,r.jsx)(n.li,{children:"Release Week (Week 8)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"normal-dev",children:"Normal Dev"}),"\n",(0,r.jsx)(n.p,{children:'Things happened during "Normal Dev":'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"selecting new Release Managers"}),"\n",(0,r.jsx)(n.li,{children:'collecting "new features/enhancements" would be carried with the next release'}),"\n",(0,r.jsxs)(n.li,{children:["create the ",(0,r.jsx)(n.code,{children:"vX.Y.0"})," milestone if not existed"]}),"\n",(0,r.jsx)(n.li,{children:"coding and documenting"}),"\n",(0,r.jsx)(n.li,{children:"releasing alpha versions every 2 weeks"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"code-freeze",children:"Code Freeze"}),"\n",(0,r.jsx)(n.p,{children:'Things happened during "Code Freeze":'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"blocking the merging of all unrelated PRs"}),"\n",(0,r.jsxs)(n.li,{children:['reviewing "new features/enhancements" would be carried with the next release',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"finish or prune the unfinished features"}),"\n",(0,r.jsx)(n.li,{children:"the documents are ready, at least have a related open issue on chaos-mesh/website"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["cutting branch ",(0,r.jsx)(n.code,{children:"release-X.Y"})]}),"\n",(0,r.jsx)(n.li,{children:"releasing beta versions"}),"\n",(0,r.jsx)(n.li,{children:"preparing the Release Notes"}),"\n",(0,r.jsxs)(n.li,{children:["create the ",(0,r.jsx)(n.code,{children:"vX.Y+1.0"})," milestone"]}),"\n",(0,r.jsx)(n.li,{children:"merging bugfix if required"}),"\n",(0,r.jsx)(n.li,{children:"documenting about the new release"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Phase "Code Freeze" would start at Week 6, and finish at branch ',(0,r.jsx)(n.code,{children:"release-X.Y"})," created."]}),"\n",(0,r.jsx)(n.p,{children:'When we are in "Code Freeze", PRs which are not related to the coming minor release would be prevented from merging into master. Only PRs related to the coming release could be merged into the master branch.'}),"\n",(0,r.jsx)(n.p,{children:"Release Managers would communicate with contributors to ask them for finishing or pruning the unfinished features. Sometimes Release Managers would prune them by themselves if we lost the communication with the contributors."}),"\n",(0,r.jsxs)(n.p,{children:['Once all the unfinished features are completed or marked as "need prune", the release manager would cut the ',(0,r.jsx)(n.code,{children:"release-X.Y"})," branch. The merging process for all PRs back to normal."]}),"\n",(0,r.jsx)(n.p,{children:"Once uncompleted features are pruned, Release Manager would release the first beta version. After that, only bug fixes would be cherry-picked into the release branch. Release Manager could release more beta versions if we have updates on the release branch."}),"\n",(0,r.jsx)(n.p,{children:"Release Manager should start to prepare Release Notes after the beta version is released."}),"\n",(0,r.jsx)(n.h3,{id:"release-week",children:"Release Week"}),"\n",(0,r.jsx)(n.p,{children:'Things happened during "Release Week":'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"merging emergency bugfix or vulnerabilities fix if required"}),"\n",(0,r.jsx)(n.li,{children:"releasing the minor version artifacts (helm charts, container images, and others)"}),"\n",(0,r.jsx)(n.li,{children:"releasing the minor version documentation"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Release Manager would release the ",(0,r.jsx)(n.code,{children:"vX.Y.0"})," in this week."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7463:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var r=s(50959);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
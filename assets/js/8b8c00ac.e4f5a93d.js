"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,d=h["".concat(o,".").concat(p)]||h[p]||m[p]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Chaos Mesh Release Cycle"},i=void 0,s={unversionedId:"release-cycle",id:"release-cycle",title:"Chaos Mesh Release Cycle",description:"This document is focused on Chaos Mesh developers and contributors who need to create an enhancement, issue, or pull request which targets a specific release milestone.",source:"@site/docs/release-cycle.md",sourceDirName:".",slug:"/release-cycle",permalink:"/docs/next/release-cycle",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/release-cycle.md",tags:[],version:"current",frontMatter:{title:"Chaos Mesh Release Cycle"},sidebar:"docs",previous:{title:"Upgrade from 2.1 to 2.2",permalink:"/docs/next/upgrade-from-2.1-to-2.2"},next:{title:"Chaos Mesh v2.5.0 Tracking",permalink:"/docs/next/release-2.5-tracking"}},o={},u=[{value:"Roles",id:"roles",level:2},{value:"Contributors/Developers",id:"contributorsdevelopers",level:3},{value:"Release Manager",id:"release-manager",level:3},{value:"Becoming Release Manager?",id:"becoming-release-manager",level:3},{value:"Versioning Scheme and Timeline",id:"versioning-scheme-and-timeline",level:2},{value:"Release Phases",id:"release-phases",level:2},{value:"Normal Dev",id:"normal-dev",level:3},{value:"Code Freeze",id:"code-freeze",level:3},{value:"Release Week",id:"release-week",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is focused on Chaos Mesh developers and contributors who need to create an enhancement, issue, or pull request which targets a specific release milestone."),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("h3",{id:"contributorsdevelopers"},"Contributors/Developers"),(0,r.kt)("p",null,"Contributors are expected to participate in the release cycle with the following forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"participant discussions of new features/enhancements collection"),(0,r.kt)("li",{parentName:"ul"},"contribute with codes/docs for Chaos Mesh"),(0,r.kt)("li",{parentName:"ul"},"help to prune feature if required")),(0,r.kt)("p",null,"As a contributor, the only 2 things you need to notice are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you might be asked to complete your uncompleted work, or prune them from the release branch."),(0,r.kt)("li",{parentName:"ul"},'your PR might not be merged into master quickly during "Code Freeze"')),(0,r.kt)("h3",{id:"release-manager"},"Release Manager"),(0,r.kt)("p",null,'"Release Managers" is an umbrella term that encompasses the set of Chaos Mesh contributors responsible for maintaining release branches, tagging releases, and building/packaging Chaos Mesh.'),(0,r.kt)("p",null,"Release Manager are expected to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'collect "new features/enhancements" as a GitHub Issue'),(0,r.kt)("li",{parentName:"ul"},"create and maintain ",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y.0")," GitHub Milestone"),(0,r.kt)("li",{parentName:"ul"},"schedule and hold the required meeting"),(0,r.kt)("li",{parentName:"ul"},"keep maintaining the tracking documentation for next coming release"),(0,r.kt)("li",{parentName:"ul"},"communicate with contributors asking for help to complete/prune the unfinished features/docs; Or prune them by yourself if we lost the communication with contributors."),(0,r.kt)("li",{parentName:"ul"},"cut the release branch"),(0,r.kt)("li",{parentName:"ul"},"draft the Release Notes for the minor version"),(0,r.kt)("li",{parentName:"ul"},"release the alpha, beta, minor versions"),(0,r.kt)("li",{parentName:"ul"},"keeping enriching release-related documents")),(0,r.kt)("h3",{id:"becoming-release-manager"},"Becoming Release Manager?"),(0,r.kt)("p",null,"Chaos Mesh committers and maintainers would nominate new release managers at about the 1st week of the new release cycle, the nomination should be published in slack channel #chaos-mesh-maintainers. And they would be selected if there are no more than half the number of oppositions. At last, we would announce the release managers on the document website and slack channel ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"#project-chaos-mesh"),"."),(0,r.kt)("h2",{id:"versioning-scheme-and-timeline"},"Versioning Scheme and Timeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chaos Mesh would release a minor version ",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y.0")," every 8 weeks."),(0,r.kt)("li",{parentName:"ul"},"Chaos Mesh would release a preview version(",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y.0.alpha/beta-W"),", W>=0) every at least 2 weeks."),(0,r.kt)("li",{parentName:"ul"},"Chaos Mesh would release a bugfix/patch (",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y.Z"),", Z>0) version as required.")),(0,r.kt)("h2",{id:"release-phases"},"Release Phases"),(0,r.kt)("p",null,"There would be 3 phases in a cycle of release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Normal Dev (Week 1-5)"),(0,r.kt)("li",{parentName:"ul"},"Code Freeze (Week 6-7)"),(0,r.kt)("li",{parentName:"ul"},"Release Week (Week 8)")),(0,r.kt)("h3",{id:"normal-dev"},"Normal Dev"),(0,r.kt)("p",null,'Things happened during "Normal Dev":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"selecting new Release Managers"),(0,r.kt)("li",{parentName:"ul"},'collecting "new features/enhancements" would be carried with the next release'),(0,r.kt)("li",{parentName:"ul"},"create the ",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y.0")," milestone if not existed"),(0,r.kt)("li",{parentName:"ul"},"coding and documenting"),(0,r.kt)("li",{parentName:"ul"},"releasing alpha versions every 2 weeks")),(0,r.kt)("h3",{id:"code-freeze"},"Code Freeze"),(0,r.kt)("p",null,'Things happened during "Code Freeze":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"blocking the merging of all unrelated PRs"),(0,r.kt)("li",{parentName:"ul"},'reviewing "new features/enhancements" would be carried with the next release',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"finish or prune the unfinished features"),(0,r.kt)("li",{parentName:"ul"},"the documents are ready, at least have a related open issue on chaos-mesh/website"))),(0,r.kt)("li",{parentName:"ul"},"cutting branch ",(0,r.kt)("inlineCode",{parentName:"li"},"release-X.Y")),(0,r.kt)("li",{parentName:"ul"},"releasing beta versions"),(0,r.kt)("li",{parentName:"ul"},"preparing the Release Notes"),(0,r.kt)("li",{parentName:"ul"},"create the ",(0,r.kt)("inlineCode",{parentName:"li"},"vX.Y+1.0")," milestone"),(0,r.kt)("li",{parentName:"ul"},"merging bugfix if required"),(0,r.kt)("li",{parentName:"ul"},"documenting about the new release")),(0,r.kt)("p",null,'Phase "Code Freeze" would start at Week 6, and finish at branch ',(0,r.kt)("inlineCode",{parentName:"p"},"release-X.Y")," created."),(0,r.kt)("p",null,'When we are in "Code Freeze", PRs which are not related to the coming minor release would be prevented from merging into master. Only PRs related to the coming release could be merged into the master branch.'),(0,r.kt)("p",null,"Release Managers would communicate with contributors to ask them for finishing or pruning the unfinished features. Sometimes Release Managers would prune them by themselves if we lost the communication with the contributors."),(0,r.kt)("p",null,'Once all the unfinished features are completed or marked as "need prune", the release manager would cut the ',(0,r.kt)("inlineCode",{parentName:"p"},"release-X.Y")," branch. The merging process for all PRs back to normal."),(0,r.kt)("p",null,"Once uncompleted features are pruned, Release Manager would release the first beta version. After that, only bug fixes would be cherry-picked into the release branch. Release Manager could release more beta versions if we have updates on the release branch."),(0,r.kt)("p",null,"Release Manager should start to prepare Release Notes after the beta version is released."),(0,r.kt)("h3",{id:"release-week"},"Release Week"),(0,r.kt)("p",null,'Things happened during "Release Week":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"merging emergency bugfix or vulnerabilities fix if required"),(0,r.kt)("li",{parentName:"ul"},"releasing the minor version artifacts (helm charts, container images, and others)"),(0,r.kt)("li",{parentName:"ul"},"releasing the minor version documentation")),(0,r.kt)("p",null,"Release Manager would release the ",(0,r.kt)("inlineCode",{parentName:"p"},"vX.Y.0")," in this week."))}m.isMDXComponent=!0}}]);
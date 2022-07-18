"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[27306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={title:"Supported Releases"},s=void 0,o={unversionedId:"supported-releases",id:"supported-releases",title:"Supported Releases",description:"This page lists the status, timeline and policy for currently supported releases.",source:"@site/docs/supported-releases.md",sourceDirName:".",slug:"/supported-releases",permalink:"/docs/next/supported-releases",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/supported-releases.md",tags:[],version:"current",frontMatter:{title:"Supported Releases"},sidebar:"docs",previous:{title:"Uninstall Chaos Mesh",permalink:"/docs/next/uninstallation"},next:{title:"Manage User Permissions",permalink:"/docs/next/manage-user-permissions"}},p={},i=[{value:"Support status of Chaos Mesh",id:"support-status-of-chaos-mesh",level:2},{value:"Upcoming releases",id:"upcoming-releases",level:2},{value:"Support Policy",id:"support-policy",level:2},{value:"Community technical support",id:"community-technical-support",level:3},{value:"Security and bug fixes",id:"security-and-bug-fixes",level:3},{value:"How we determine supported Kubernetes versions",id:"how-we-determine-supported-kubernetes-versions",level:2}],u={toc:i};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page lists the status, timeline and policy for currently supported releases."),(0,n.kt)("p",null,"Each release is supported for a period of six months, and we create a new release every three months."),(0,n.kt)("p",null,"Our naming scheme mostly follows ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"v")," prepended to git tags and docker images:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"v<major>.<minor>.<patch>\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"<minor>")," is increased for each release, and ",(0,n.kt)("inlineCode",{parentName:"p"},"<patch>")," counts the number of patches for the current ",(0,n.kt)("inlineCode",{parentName:"p"},"<minor>")," release. A patch is usually a small change relative to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<minor>")," release."),(0,n.kt)("h2",{id:"support-status-of-chaos-mesh"},"Support status of Chaos Mesh"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Currently Supported"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"End of Life"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported Kubernetes versions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"master"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No, development only"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apr 29, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nov 30, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Jul 23, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apr 29, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apr 23, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nov 30, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Jan 08, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Jul 23, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 25, 2020"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apr 23, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.12, 1.13, 1.14, 1.15")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Note that dates in the future are uncertain and might change.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The support of kubernetes 1.22 is (will be) available with release 2.0.4.")),(0,n.kt)("h2",{id:"upcoming-releases"},"Upcoming releases"),(0,n.kt)("p",null,"You could track our upcoming release on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/milestones"},"Github Milestones"),"."),(0,n.kt)("h2",{id:"support-policy"},"Support Policy"),(0,n.kt)("p",null,"Our support window is six months for each release branch. The support window corresponds to the two latest releases, given that we produce a new final release every three months."),(0,n.kt)("p",null,"We offer two type of supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Community technical support"),(0,n.kt)("li",{parentName:"ul"},"Security and bug fixes")),(0,n.kt)("h3",{id:"community-technical-support"},"Community technical support"),(0,n.kt)("p",null,"You can request support from the community on CNCF Slack (in the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"#project-chaos-mesh")," channel), or using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/discussions"},"GitHub Discussion")," ."),(0,n.kt)("h3",{id:"security-and-bug-fixes"},"Security and bug fixes"),(0,n.kt)("p",null,"Security issues are fixed as soon as possible. They get back-ported to the last two releases, and a new patch release is immediately created for them."),(0,n.kt)("p",null,"For enhancements or bugfixes, we would make a new patch release as required."),(0,n.kt)("h2",{id:"how-we-determine-supported-kubernetes-versions"},"How we determine supported Kubernetes versions"),(0,n.kt)("p",null,"The list of supported Kubernetes versions displayed in the ",(0,n.kt)("a",{parentName:"p",href:"#support-status-of-chaos-mesh"},"Supported status of Chaos Mesh")," section depends on what the Chaos Mesh maintainers think is reasonable to support and to test."),(0,n.kt)("p",null,"We use e2e test for testing compatibility on each version of kubernetes cluster, our testing coverage is:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Tested kubernetes Versions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"master"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.20, 1.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.20, 1.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.15, 1.20, 1.23")))))}m.isMDXComponent=!0}}]);
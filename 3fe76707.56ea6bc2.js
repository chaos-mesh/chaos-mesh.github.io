(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=h(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),r=(n(0),n(111)),i={id:"chaos-mesh-join-cncf-sandbox-project",title:"Chaos Mesh\xae Joins CNCF as a Sandbox Project",author:"Chaos Mesh Authors",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","CNCF","Cloud Native"]},c={permalink:"/blog/chaos-mesh-join-cncf-sandbox-project",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/blog/2020-07-28-chaos-mesh-join-cncf-sandbox-project.md",source:"@site/blog/2020-07-28-chaos-mesh-join-cncf-sandbox-project.md",description:"Chaos Mesh Join CNCF as Sandbox Project",date:"2020-07-28T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"CNCF",permalink:"/blog/tags/cncf"},{label:"Cloud Native",permalink:"/blog/tags/cloud-native"}],title:"Chaos Mesh\xae Joins CNCF as a Sandbox Project",readingTime:1.63,truncated:!0,nextItem:{title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",permalink:"/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"}},s=[],l={rightToc:s};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/chaos-mesh-cncf.png",alt:"Chaos Mesh Join CNCF as Sandbox Project"})),"\nWe\u2019re thrilled to announce that ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh"}),"Chaos Mesh\xae")," is now officially accepted as a CNCF Sandbox project. As maintainers of Chaos Mesh, we\u2019d like to thank all the contributors and adopters. This would not be possible without your trust, support, and contributions."),Object(r.b)("p",null,"Chaos Mesh is a powerful Chaos Engineering platform that orchestrates chaos experiments on Kubernetes environments. By covering comprehensive fault injection methods in Pod, network, file system, and even the kernel, we aim at providing a neutral, universal Chaos Engineering platform that enables cloud-native applications to be as resilient as they should be."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/chaos-mesh.svg",alt:"Architecture"}))),Object(r.b)("p",null,"Within only 7 months since it was open-sourced on December 31st, 2019, Chaos Mesh has already received 2000 GitHub stars, with 44 contributors from multiple organizations. As a young project, the adoption in production has been the key recognition and motivation that pushes us forward constantly. Here is a list of our adopters so far:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.pingcap.com"}),"PingCAP")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.xiaopeng.com/"}),"Xpeng Motor")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.crunchbase.com/organization/netease-fuxi-lab"}),"NetEase Fuxi Lab")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://juicefs.com/?hl=en"}),"JuiceFS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.dailymotion.com/"}),"Dailymotion")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://about.meituan.com/en"}),"Meituan-Dianping")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://celo.org/"}),"Celo"))),Object(r.b)("p",null,"Being a CNCF Sandbox project marks a major step forward for the project. It means that Chaos Mesh has become part of the great vendor-neutral cloud-native community. With the guidance and help from CNCF, Chaos Mesh will strive to develop a community with transparent, meritocracy-based governance for open communication and open collaboration, while driving the project forward, towards our ultimate goal of establishing the Chaos Engineering standards on Cloud.\nCurrently, Chaos Mesh is in active development for 1.0 GA. Going forward, we will be focusing on the following aspects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Lowering the bar of chaos engineering by improving Chaos Dashboard."),Object(r.b)("li",{parentName:"ul"},"Extending chaos injection to application layers"),Object(r.b)("li",{parentName:"ul"},"Completing the full chaos engineering loop with status checking, reporting, and scenario defining, etc.")),Object(r.b)("p",null,"If you are interested in the project, check out our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://chaos-mesh.org/"}),"website"),",  join our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud-native.slack.com/archives/C018JJ686BS"}),"Slack")," discussions, or attend our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/document/d/1H8IfmhIJiJ1ltg-XLjqR_P_RaMHUGrl1CzvHnKM_9Sc/edit"}),"monthly meeting")," to know more. Or better yet, become part of us."))}h.isMDXComponent=!0}}]);
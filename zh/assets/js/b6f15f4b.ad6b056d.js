"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1675],{99945:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var o=s(86070),n=s(6383);const a={slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",authors:"chaos-mesh",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","Open Source"]},i=void 0,h={permalink:"/zh/blog/chaos-mesh-hacktoberfest-2021",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",source:"@site/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",title:"Hacktoberfest 2021: hack with Chaos Mesh!",description:"Chaos Mesh x Hacktoberfest 2021",date:"2021-09-28T00:00:00.000Z",tags:[{inline:!0,label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{inline:!0,label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{inline:!0,label:"Open Source",permalink:"/zh/blog/tags/open-source"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Authors",title:"All maintainers of Chaos Mesh",url:"https://github.com/chaos-mesh",socials:{x:"https://x.com/chaos_mesh"},imageURL:"https://avatars.githubusercontent.com/u/59082378?v=4",key:"chaos-mesh",page:null}],frontMatter:{slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",authors:"chaos-mesh",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","Open Source"]},unlisted:!1,prevItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/zh/blog/implement-chaos-engineering-in-k8s"},nextItem:{title:"How to run chaos experiments on your physical machine",permalink:"/zh/blog/run-chaos-experiments-on-physical-machines"}},r={authorsImageUrls:[void 0]},c=[{value:"What is Chaos Mesh?",id:"what-is-chaos-mesh",level:2},{value:"Why Hacktoberfest?",id:"why-hacktoberfest",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Some notes",id:"some-notes",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Chaos Mesh x Hacktoberfest 2021",src:s(10535).A+"",width:"1800",height:"600"})}),"\n",(0,o.jsxs)(t.p,{children:["Happy ",(0,o.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/",children:"Hacktoberfest"})," 2021! We are excited to announce that ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh",children:"Chaos Mesh"})," will be participating in the 8th annual Hacktoberfest hosted by DigitalOcean. During the month of October, anyone is welcome to join in on this global celebration of open-source by contributing changes, and earn one of 55,000 custom-made Hacktoberfest T-shirts!"]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-chaos-mesh",children:"What is Chaos Mesh?"}),"\n",(0,o.jsx)(t.p,{children:"Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel. Chaos Mesh is currently a CNCF Sandbox project."}),"\n",(0,o.jsx)(t.p,{children:"More importantly, Chaos Mesh fully embraces open source: ever since open sourced 1.5 years ago, the project has gained more than 4k stars with over 1.2k commits from 140+ contributors all over the world. It is through the open-source world that we are able to collaborate with an amazing community. Simply put, Chaos Mesh grew alongside its community and would not be where it is today without the dedication and commitment to open source, which is why we are more than proud to be back again in Hacktoberfest!"}),"\n",(0,o.jsx)(t.h2,{id:"why-hacktoberfest",children:"Why Hacktoberfest?"}),"\n",(0,o.jsx)(t.p,{children:"If you are interested in chaos engineering, open-source, trying to come up with a project for school, or looking into a potential career path as an SRE/DevOps engineer, then this is your golden opportunity: throughout Hacktoberfest, anyone, regardless of background and experience, can join and contribute changes - big or small. So grab the chance and learn about how to make a system more resilient! The Chaos Mesh community welcomes you with open arms and is more than willing to work and share feedback with you. Your contributions can make a big difference!"}),"\n",(0,o.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsxs)(t.p,{children:["Here\u2019s a quick run-through of how to be part of Hacktoberfest 2021, and you can check out a detailed how to be part of Hacktoberfest on the ",(0,o.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/participation",children:"official website"}),":"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Sign up for ",(0,o.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/",children:"Hacktoberfest"})," anytime between Oct 1 and Oct 31."]}),"\n",(0,o.jsxs)(t.li,{children:["Join the #project-chaos-mesh channel under ",(0,o.jsx)(t.a,{href:"https://slack.cncf.io/",children:"CNCF Slack"}),", just in case you have any questions, or need help."]}),"\n",(0,o.jsxs)(t.li,{children:["Start creating and submitting your PRs! Here are some top tips:","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Check out the ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CONTRIBUTING.md",children:"Chaos Mesh Contribution guide"})," before making contributions."]}),"\n",(0,o.jsxs)(t.li,{children:["Have a go at any ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"issue"}),' labeled with "Hacktoberfest", note that these are the ones that we think might be good for those new to open source or Chaos Mesh, so it only serves as a starting point!']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"some-notes",children:"Some notes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"To get a shirt, you must make 4 approved PRs on opted-in projects between October 1-31 in any time zone. If a repository has no \u201cHacktoberfest\u201d topic set, please reach out to us or mention Hacktoberfest in your PR so we can set repository topics."}),"\n",(0,o.jsx)(t.li,{children:"No spams please (e.g. creating a PR just for the sake of it and not adding any value in any way)! Our maintainer will mark a PR as invalid if it\u2019s determined to be spam, which does NOT count towards your PR total."}),"\n",(0,o.jsxs)(t.li,{children:["Note that if our maintainer reports behavior that\u2019s not in line with the ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CODE_OF_CONDUCT.md",children:"code of conduct"}),", you will be ineligible to participate."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Lastly, good luck, on your marks, get set, and hack away!"})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},10535:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/chaos-mesh-hacktoberfest-2021-134ce78502c4189aa98edb62e7b3a4cf.png"},6383:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>h});var o=s(30758);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2891],{13134:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var s=o(11527),a=o(7463);const n={slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","open source"]},i=void 0,h={permalink:"/blog/chaos-mesh-hacktoberfest-2021",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",source:"@site/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",title:"Hacktoberfest 2021: hack with Chaos Mesh!",description:"Chaos Mesh x Hacktoberfest 2021",date:"2021-09-28T00:00:00.000Z",formattedDate:"September 28, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","open source"]},unlisted:!1,prevItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/blog/implement-chaos-engineering-in-k8s"},nextItem:{title:"How to run chaos experiments on your physical machine",permalink:"/blog/run-chaos-experiments-on-physical-machines"}},r={authorsImageUrls:[void 0]},c=[{value:"What is Chaos Mesh?",id:"what-is-chaos-mesh",level:2},{value:"Why Hacktoberfest?",id:"why-hacktoberfest",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Some notes",id:"some-notes",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chaos Mesh x Hacktoberfest 2021",src:o(81815).Z+"",width:"1800",height:"600"})}),"\n",(0,s.jsxs)(t.p,{children:["Happy ",(0,s.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/",children:"Hacktoberfest"})," 2021! We are excited to announce that ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh",children:"Chaos Mesh"})," will be participating in the 8th annual Hacktoberfest hosted by DigitalOcean. During the month of October, anyone is welcome to join in on this global celebration of open-source by contributing changes, and earn one of 55,000 custom-made Hacktoberfest T-shirts!"]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-chaos-mesh",children:"What is Chaos Mesh?"}),"\n",(0,s.jsx)(t.p,{children:"Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel. Chaos Mesh is currently a CNCF Sandbox project."}),"\n",(0,s.jsx)(t.p,{children:"More importantly, Chaos Mesh fully embraces open source: ever since open sourced 1.5 years ago, the project has gained more than 4k stars with over 1.2k commits from 140+ contributors all over the world. It is through the open-source world that we are able to collaborate with an amazing community. Simply put, Chaos Mesh grew alongside its community and would not be where it is today without the dedication and commitment to open source, which is why we are more than proud to be back again in Hacktoberfest!"}),"\n",(0,s.jsx)(t.h2,{id:"why-hacktoberfest",children:"Why Hacktoberfest?"}),"\n",(0,s.jsx)(t.p,{children:"If you are interested in chaos engineering, open-source, trying to come up with a project for school, or looking into a potential career path as an SRE/DevOps engineer, then this is your golden opportunity: throughout Hacktoberfest, anyone, regardless of background and experience, can join and contribute changes - big or small. So grab the chance and learn about how to make a system more resilient! The Chaos Mesh community welcomes you with open arms and is more than willing to work and share feedback with you. Your contributions can make a big difference!"}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,s.jsxs)(t.p,{children:["Here\u2019s a quick run-through of how to be part of Hacktoberfest 2021, and you can check out a detailed how to be part of Hacktoberfest on the ",(0,s.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/participation",children:"official website"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up for ",(0,s.jsx)(t.a,{href:"https://hacktoberfest.digitalocean.com/",children:"Hacktoberfest"})," anytime between Oct 1 and Oct 31."]}),"\n",(0,s.jsxs)(t.li,{children:["Join the #project-chaos-mesh channel under ",(0,s.jsx)(t.a,{href:"https://slack.cncf.io/",children:"CNCF Slack"}),", just in case you have any questions, or need help."]}),"\n",(0,s.jsxs)(t.li,{children:["Start creating and submitting your PRs! Here are some top tips:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Check out the ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CONTRIBUTING.md",children:"Chaos Mesh Contribution guide"})," before making contributions."]}),"\n",(0,s.jsxs)(t.li,{children:["Have a go at any ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues",children:"issue"}),' labeled with "Hacktoberfest", note that these are the ones that we think might be good for those new to open source or Chaos Mesh, so it only serves as a starting point!']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"some-notes",children:"Some notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"To get a shirt, you must make 4 approved PRs on opted-in projects between October 1-31 in any time zone. If a repository has no \u201cHacktoberfest\u201d topic set, please reach out to us or mention Hacktoberfest in your PR so we can set repository topics."}),"\n",(0,s.jsx)(t.li,{children:"No spams please (e.g. creating a PR just for the sake of it and not adding any value in any way)! Our maintainer will mark a PR as invalid if it\u2019s determined to be spam, which does NOT count towards your PR total."}),"\n",(0,s.jsxs)(t.li,{children:["Note that if our maintainer reports behavior that\u2019s not in line with the ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CODE_OF_CONDUCT.md",children:"code of conduct"}),", you will be ineligible to participate."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Lastly, good luck, on your marks, get set, and hack away!"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},81815:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/chaos-mesh-hacktoberfest-2021-134ce78502c4189aa98edb62e7b3a4cf.png"},7463:(e,t,o)=>{o.d(t,{Z:()=>h,a:()=>i});var s=o(50959);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
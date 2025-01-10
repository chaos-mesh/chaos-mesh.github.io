"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6663],{20542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var a=n(9441),o=n(86070),i=n(8637);const s={slug:"/lfx-mentorship-enriching-awschaos",title:"From a Newbie in Software Engineering to a Graduated LFX-Mentee",authors:"debabratapanigrahi",image:"/img/blog/mentorship_experience.png",tags:["Chaos Mesh","Chaos Engineering","LFX Mentorship","AWS Chaos"]},r=void 0,h={authorsImageUrls:[void 0]},l=[{value:"The journey through the application",id:"the-journey-through-the-application",level:2},{value:"The selection and Initial days as a mentee",id:"the-selection-and-initial-days-as-a-mentee",level:2},{value:"My contribution to AWS Chaos",id:"my-contribution-to-aws-chaos",level:2},{value:"Other opportunities",id:"other-opportunities",level:2},{value:"Graduation and Next steps",id:"graduation-and-next-steps",level:2},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"LFX Mentorship Experience",src:n(69190).A+"",width:"3126",height:"1042"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://mentorship.lfx.linuxfoundation.org/mentee/6a0bf7de-9e18-4acb-9a66-f5fecdbeb42e",children:"I\u2019m"})," a junior undergraduate majoring in Biomedical Engineering in the Department of Biotechnology and Medical Engineering at the ",(0,o.jsx)(t.a,{href:"https://nitrkl.ac.in/",children:"National Institute of Technology Rourkela"}),", India. For someone who started to code only because I was fascinated by it, it was all a journey of self-learning, filled with various adversities. But when I started with open-source contributions, it was all very beginner-friendly and I came across a lot of people who helped me learn the tech stack better."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img1",src:n(77510).A+"",width:"353",height:"419"})}),"\n",(0,o.jsx)(t.h2,{id:"the-journey-through-the-application",children:"The journey through the application"}),"\n",(0,o.jsxs)(t.p,{children:["In the spring of 2021, I got to know about this LFX mentorship program and after browsing through all the ",(0,o.jsx)(t.a,{href:"https://github.com/cncf/mentoring/blob/master/lfx-mentorship/2021/01-Spring/README.md",children:"projects"}),", it felt quite intimidating to me as I wasn\u2019t acquainted with most of the terms and was confused, and I thought it was not for newbies like me. Then I went through the program ",(0,o.jsx)(t.a,{href:"https://docs.linuxfoundation.org/lfx/mentorship",children:"docs"}),", the mentorship ",(0,o.jsx)(t.a,{href:"https://docs.linuxfoundation.org/lfx/mentorship/mentorship-faqs",children:"FAQ\u2019s"})," followed the steps mentioned there and applied for a few projects that interested me, and used tech-stacks that I am familiar with, like Docker, AWS, Python, etc."]}),"\n",(0,o.jsxs)(t.p,{children:["Then I applied to both projects offered by ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," and submitted my CV and cover letter as immediate tasks. After a few days, I received an email from my mentor regarding an additional task to be submitted."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img2",src:n(83452).A+"",width:"700",height:"590"})}),"\n",(0,o.jsx)(t.p,{children:"I completed the above-mentioned task, uploaded the files to GitHub, and shared the link with my mentor."}),"\n",(0,o.jsx)(t.h2,{id:"the-selection-and-initial-days-as-a-mentee",children:"The selection and Initial days as a mentee"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["2022-10-24: Because of ",(0,o.jsx)(t.a,{href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html",children:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"}),", and refer to ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/website/pull/356",children:"#356"}),", the interactive tutorial is temporarily unavailable."]})}),"\n",(0,o.jsx)(t.p,{children:"I distinctly remember the day when I received an email from my mentor regarding my selection in the mentorship program. I was elated, as it was my first involvement in any open-source program. I was glad to be accepted as a mentee in the program, I even received an email from CNCF regarding my selection."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img3",src:n(98297).A+"",width:"687",height:"772"})}),"\n",(0,o.jsx)(t.p,{children:"Along with my mentor, we decided on our mode of communication: through Slack. He also enquired about my knowledge of Kubernetes and GOlang, as I didn\u2019t have much knowledge about either of them. He suggested a few resources and gave me 2 weeks to go through them. In the meantime, he also planned a few experiments for me to get acquainted with all these technologies."}),"\n",(0,o.jsxs)(t.p,{children:["As I was getting more comfortable with Kubernetes, I started exploring Chaos Mesh and completed the ",(0,o.jsx)(t.code,{children:"interactive tutorial"}),", which gave me a clearer idea about the usage of Chaos Mesh. I then implemented the ",(0,o.jsx)(t.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/development_guides/develop_a_new_chaos",children:"hello-world chaos"}),", which helped me to know more about controllers and CRDs, considered to be the most important part of Chaos Mesh. Also, I got to know about the boilerplate codes, the ",(0,o.jsx)(t.a,{href:"https://github.com/kubernetes-sigs/kubebuilder",children:"kube-builder client"}),", and how to use them for scaffolding, followed by writing our own controllers."]}),"\n",(0,o.jsx)(t.p,{children:"After the initial days of experimenting and getting to know the project better, I started with solving a few good first issues to get acquainted with upstream contributions to Chaos Mesh."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img4",src:n(95878).A+"",width:"1208",height:"156"})}),"\n",(0,o.jsxs)(t.p,{children:["In one of my contributions, I tried to add multi-container support to stress-chaos, which was not possible before. Though it was successfully implemented, it broke a few other features and couldn\u2019t be merged for the upcoming release. What\u2019s more, for the 2.0.0 release, this refactoring was already done, so this particular contribution was a learning experience for both me and my mentor. After that, we became careful and the next time we tried to implement any new features, we would first submit an ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/rfcs",children:"RFC"})," and have discussions with the other contributors before starting."]}),"\n",(0,o.jsx)(t.h2,{id:"my-contribution-to-aws-chaos",children:"My contribution to AWS Chaos"}),"\n",(0,o.jsxs)(t.p,{children:["Initially, I was asked to implement one type of AWS Chaos as part of this project, but as I started exploring more about it, I found ",(0,o.jsx)(t.a,{href:"https://github.com/amzn/awsssmchaosrunner",children:"awsssmchaosrunner"}),", and given its functionality, we wanted to integrate it into Chaos Mesh."]}),"\n",(0,o.jsxs)(t.p,{children:["We planned to do it in two parts, one part is the \u201c",(0,o.jsx)(t.a,{href:"https://github.com/STRRL/awsssmchaosrunner-cli",children:"runner thing"}),"\u201d project, which integrates with awsssmchaosrunner, that part should be written in kotlin, and a docker image is to be built out of it."]}),"\n",(0,o.jsxs)(t.p,{children:["Another part is the definition of the AWS Chaos and its ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/pull/1919",children:"controller"}),", which is to be written in go, the controller of AWS Chaos will create a pod with that \u201ckotlin cli image\u201d, and send commands to AWS."]}),"\n",(0,o.jsx)(t.h2,{id:"other-opportunities",children:"Other opportunities"}),"\n",(0,o.jsxs)(t.p,{children:["I was invited to one of the Chaos Mesh ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=ElG0pHRoXwI&t=2s",children:"community meetings"})," towards the end of the mentorship where I showcased my project."]}),"\n",(0,o.jsxs)(t.p,{children:["Afterwards, I applied for the CFP for ",(0,o.jsx)(t.a,{href:"https://community.cncf.io/events/details/cncf-kcd-bengaluru-presents-kubernetes-community-days-bengaluru/",children:"Kubernetes Community Days Bangalore"}),", scheduled virtually from June 25\u201326, 2021, and was selected as a speaker and now I\u2019m all set to present my talk there."]}),"\n",(0,o.jsx)(t.h2,{id:"graduation-and-next-steps",children:"Graduation and Next steps"}),"\n",(0,o.jsxs)(t.p,{children:["Yayyyy!! After 12 weeks, I successfully graduated from the program, thanks to my mentor ",(0,o.jsx)(t.a,{href:"https://mentorship.lfx.linuxfoundation.org/mentor/e78b3177-160c-4566-9f3d-8fc9b2ec3cea",children:"Zhou Zhiqiang"})," and his guidance, because without whom, this wouldn\u2019t have been possible."]}),"\n",(0,o.jsx)(t.p,{children:"I had an amazing time with the Chaos Mesh community, with the amazing members supporting and helping me throughout the journey. I look forward to contributing more to this project and being more active in the community."}),"\n",(0,o.jsx)(t.h2,{id:"join-the-chaos-mesh-community",children:"Join the Chaos Mesh community"}),"\n",(0,o.jsxs)(t.p,{children:["To join and learn more about Chaos Mesh, find the #project-chaos-mesh channel in ",(0,o.jsx)(t.a,{href:"https://slack.cncf.io/",children:"CNCF slack workspace"})," or their ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},69190:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mentorship_blog-0c9d6fd8d0cc68644782727e0d67baee.jpeg"},83452:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mentorship_blog2-5925a4b5126efae502340dfaf5d95064.png"},95878:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mentorship_blog3-7e4fd166523fb553e3c254d2ba1390ae.png"},98297:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mentorship_blog4-c9f0e57401ea29be852f9f62f8aba238.png"},77510:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mentroship_blog1-e96abe255f46c1dab61e7662a5a04e0e.png"},8637:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(30758);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}},9441:e=>{e.exports=JSON.parse('{"permalink":"/zh/blog/lfx-mentorship-enriching-awschaos","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2021-06-20-lfx-mentorship-enriching-awschaos.md","source":"@site/blog/2021-06-20-lfx-mentorship-enriching-awschaos.md","title":"From a Newbie in Software Engineering to a Graduated LFX-Mentee","description":"LFX Mentorship Experience","date":"2021-06-20T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/zh/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/zh/blog/tags/chaos-engineering"},{"inline":true,"label":"LFX Mentorship","permalink":"/zh/blog/tags/lfx-mentorship"},{"inline":true,"label":"AWS Chaos","permalink":"/zh/blog/tags/aws-chaos"}],"readingTime":4.265,"hasTruncateMarker":true,"authors":[{"name":"Debabrata Panigrahi","title":"LFX Mentee at Chaos Mesh","url":"https://github.com/Debanitrkl","imageURL":"https://avatars.githubusercontent.com/u/50622005?v=4","key":"debabratapanigrahi","page":null}],"frontMatter":{"slug":"/lfx-mentorship-enriching-awschaos","title":"From a Newbie in Software Engineering to a Graduated LFX-Mentee","authors":"debabratapanigrahi","image":"/img/blog/mentorship_experience.png","tags":["Chaos Mesh","Chaos Engineering","LFX Mentorship","AWS Chaos"]},"unlisted":false,"prevItem":{"title":"Chaos Mesh Remake: One Step Closer toward Chaos as a Service","permalink":"/zh/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service"},"nextItem":{"title":"Celebrating One Year of Chaos Mesh: Looking Back and Ahead","permalink":"/zh/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead"}}')}}]);
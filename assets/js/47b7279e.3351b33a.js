"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9670],{13754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(13274),i=n(9534);const o={slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},a=void 0,r={permalink:"/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",source:"@site/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",description:"Clock synchronization in distributed system",date:"2020-04-20T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Distributed System",permalink:"/blog/tags/distributed-system"}],readingTime:8.43,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},unlisted:!1,prevItem:{title:"Chaos Mesh Joins CNCF as a Sandbox Project",permalink:"/blog/chaos-mesh-join-cncf-sandbox-project"},nextItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},h={authorsImageUrls:[void 0]},c=[];function l(e){const t={a:"a",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Clock synchronization in distributed system",src:n(73654).A+"",width:"2000",height:"667"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"}),", an easy-to-use, open-source, cloud-native chaos engineering platform for Kubernetes (K8s), has a new feature, TimeChaos, which simulates the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Clock_skew#On_a_network",children:"clock skew"})," phenomenon. Usually, when we modify clocks in a container, we want a ",(0,s.jsx)(t.a,{href:"https://learning.oreilly.com/library/view/chaos-engineering/9781491988459/ch07.html",children:"minimized blast radius"}),", and we don't want the change to affect the other containers on the node. In reality, however, implementing this can be harder than you think. How does Chaos Mesh solve this problem?"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},73654:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/clock-sync-chaos-engineering-k8s-05986b97ada98f9cf1cabda6a8855c86.jpg"},9534:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(79474);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
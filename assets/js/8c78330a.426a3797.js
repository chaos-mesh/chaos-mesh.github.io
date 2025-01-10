"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[258],{5554:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"chaosd-overview","title":"Chaosd Introduction","description":"Chaosd introduction","source":"@site/docs/chaosd-overview.md","sourceDirName":".","slug":"/chaosd-overview","permalink":"/docs/next/chaosd-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/docs/chaosd-overview.md","tags":[],"version":"current","frontMatter":{"title":"Chaosd Introduction"},"sidebar":"docs","previous":{"title":"Simulate Block Device Incidents","permalink":"/docs/next/simulate-block-chaos-on-kubernetes"},"next":{"title":"Simulate Faults on Physical Machines","permalink":"/docs/next/simulate-physical-machine-chaos"}}');var t=n(86070),a=n(8637);const i={title:"Chaosd Introduction"},r=void 0,d={},l=[{value:"Chaosd introduction",id:"chaosd-introduction",level:2},{value:"Supported fault types",id:"supported-fault-types",level:3},{value:"Operating environment",id:"operating-environment",level:3},{value:"Download and deploy",id:"download-and-deploy",level:3},{value:"Work modes",id:"work-modes",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"chaosd-introduction",children:"Chaosd introduction"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd",children:"Chaosd"})," is a Chaos Engineering testing tool provided by Chaos Mesh. You need to download and deploy it separately (see ",(0,t.jsx)(s.a,{href:"#download-and-deploy",children:"Download and deploy"}),"). It is used to inject faults into physical machine environments and also recover faults."]}),"\n",(0,t.jsx)(s.p,{children:"Chaosd has the following core strengths:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Easy-to-use: You only need to execute simple commands in Chaosd to create and manage Chaos experiments."}),"\n",(0,t.jsx)(s.li,{children:"Various fault types: Chaosd provides various fault types to be injected into physical machines at different levels, including process, network, pressure, disk, host, etc. More fault types are to be added."}),"\n",(0,t.jsx)(s.li,{children:"Multiple work modes: Chaosd can be used both as a command-line tool and as a service to meet the needs of different scenarios."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"supported-fault-types",children:"Supported fault types"}),"\n",(0,t.jsx)(s.p,{children:"You can use Chaosd to simulate the following fault types:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Process: Injects faults into the processes. Operations such as killing the process or stopping the process are supported."}),"\n",(0,t.jsx)(s.li,{children:"Network: Injects faults into the network of physical machines. Operations such as increasing network latency, losing packets, and corrupting packets are supported."}),"\n",(0,t.jsx)(s.li,{children:"Pressure: Injects pressure on the CPU or memory of the physical machines."}),"\n",(0,t.jsx)(s.li,{children:"Disk: Injects faults into disks of the physical machines. Operations such as increasing disk load of reads and writes, and filling disks are supported."}),"\n",(0,t.jsx)(s.li,{children:"Host: Injects faults into the physical machine. Operations such as shutdown the physical machine are supported."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For details about the introduction and usage of each fault type, refer to the related documentation."}),"\n",(0,t.jsx)(s.h3,{id:"operating-environment",children:"Operating environment"}),"\n",(0,t.jsx)(s.p,{children:"Your glibc version must be v2.17 or later versions."}),"\n",(0,t.jsx)(s.h3,{id:"download-and-deploy",children:"Download and deploy"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Set the version of Chaosd to be downloaded as the environment variable. For example, v1.0.0:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"export CHAOSD_VERSION=v1.0.0\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To view all released versions of Chaosd, refer to ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd/releases",children:"releases"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To download the latest version (not stable), use ",(0,t.jsx)(s.code,{children:"latest"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"export CHAOSD_VERSION=latest\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Download Chaosd:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -fsSLO https://mirrors.chaos-mesh.org/chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Unzip the Chaosd file and move it to the ",(0,t.jsx)(s.code,{children:"/usr/local"})," directory:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tar zxvf chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz && sudo mv chaosd-$CHAOSD_VERSION-linux-amd64 /usr/local/\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add the Chaosd directory to the ",(0,t.jsx)(s.code,{children:"PATH"})," environment variable:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"export PATH=/usr/local/chaosd-$CHAOSD_VERSION-linux-amd64:$PATH\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"work-modes",children:"Work modes"}),"\n",(0,t.jsx)(s.p,{children:"You can use Chaosd in the following modes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Command-line mode: Run Chaosd directly as a command-line tool to inject and recover faults."}),"\n",(0,t.jsx)(s.li,{children:"Service mode: Run Chaosd as a service in the background, to inject and recover faults by sending HTTP requests."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8637:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var o=n(30758);const t={},a=o.createContext(t);function i(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);
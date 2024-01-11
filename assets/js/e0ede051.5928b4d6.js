"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9920],{33199:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>h,toc:()=>r});var n=t(11527),o=t(7463);const a={title:"Simulate Host Faults"},i=void 0,h={id:"simulate-host-console-in-physical-nodes",title:"Simulate Host Faults",description:"This document introduces how to simulate host shutdown faults using Chaosd.",source:"@site/versioned_docs/version-2.6.2/simulate-host-console-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-host-console-in-physical-nodes",permalink:"/docs/simulate-host-console-in-physical-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/simulate-host-console-in-physical-nodes.md",tags:[],version:"2.6.2",frontMatter:{title:"Simulate Host Faults"},sidebar:"docs",previous:{title:"Simulate Network Faults",permalink:"/docs/simulate-network-chaos-in-physical-nodes"},next:{title:"Simulate Stress Scenarios",permalink:"/docs/simulate-heavy-stress-in-physical-nodes"}},l={},r=[{value:"View the help information of host shutdown experiments",id:"view-the-help-information-of-host-shutdown-experiments",level:2},{value:"Create a host shutdown experiment",id:"create-a-host-shutdown-experiment",level:2}];function c(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"This document introduces how to simulate host shutdown faults using Chaosd."}),"\n",(0,n.jsx)(s.h2,{id:"view-the-help-information-of-host-shutdown-experiments",children:"View the help information of host shutdown experiments"}),"\n",(0,n.jsx)(s.p,{children:"Before creating a fault experiment, you can run the following command to view the help information of host shutdown experiments:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack host shutdown -h\n"})}),"\n",(0,n.jsx)(s.p,{children:"The output is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n"})}),"\n",(0,n.jsx)(s.h2,{id:"create-a-host-shutdown-experiment",children:"Create a host shutdown experiment"}),"\n",(0,n.jsx)(s.p,{children:"To create a host shutdown experiment, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack host shutdown\n"})}),"\n",(0,n.jsx)(s.p,{children:"The example output is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n"})}),"\n",(0,n.jsx)(s.p,{children:"After executing this command, your host will shut down after all processes are closed."})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7463:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>i});var n=t(50959);const o={},a=n.createContext(o);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6239],{28253:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var o=t(13274),r=t(90073);const n={title:"Upgrade to Chaos Mesh 2.0"},a=void 0,i={id:"upgrade-to-2.0",title:"Upgrade to Chaos Mesh 2.0",description:"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade.",source:"@site/versioned_docs/version-2.4.3/upgrade-to-2.0.md",sourceDirName:".",slug:"/upgrade-to-2.0",permalink:"/docs/2.4.3/upgrade-to-2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/upgrade-to-2.0.md",tags:[],version:"2.4.3",frontMatter:{title:"Upgrade to Chaos Mesh 2.0"},sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/2.4.3/faqs"},next:{title:"Upgrade from 2.1 to 2.2",permalink:"/docs/2.4.3/upgrade-from-2.1-to-2.2"}},d={},h=[{value:"Upgrade tools",id:"upgrade-tools",level:2},{value:"Step 1: Export and upgrade an experiment",id:"step-1-export-and-upgrade-an-experiment",level:2},{value:"Step 2: Upgrade CRD",id:"step-2-upgrade-crd",level:2},{value:"Step 3: Upgrade Chaos Mesh",id:"step-3-upgrade-chaos-mesh",level:2},{value:"Step 4: Import an experiment",id:"step-4-import-an-experiment",level:2},{value:"Report issues",id:"report-issues",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade."}),"\n",(0,o.jsx)(s.h2,{id:"upgrade-tools",children:"Upgrade tools"}),"\n",(0,o.jsx)(s.p,{children:"Because CRD has changed in Chaos Mesh 2.0, the YAML files for experiments from an earlier version of Chaos Mesh cannot be run on Chaos Mesh 2.0. If you want to continue using these YAML files, you need to export and update the YAML files and re-import them after upgrading Chaos Mesh."}),"\n",(0,o.jsx)(s.p,{children:"To simplify the upgrade process, Chaos Mesh 2.0 provides the following upgrade tools:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"migrate.sh"}),": used to automatically export and upgrade the YAML files, upgrade CRD, import upgraded YAML files."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"schedule-migration"}),": used to update the earlier YAML files to the latest YAML files."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["To get the upgrade tools, it is recommended to clone the Chaos Mesh project to your local repository and then execute the command ",(0,o.jsx)(s.code,{children:"make schedule-migration.tar.gz"}),". Or you can download the project from ",(0,o.jsx)(s.a,{href:"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz",children:"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"}),". After the ",(0,o.jsx)(s.code,{children:"tar.gz"})," package is downloaded, execute the following command and you can get the above two upgrade tools:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"tar xvf ./schedule-migration.tar.gz\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"schedule-migration"})," tool in this package applies only to the Linux x86_64 platform. If you are using other operating systems or architectures, you need to compile the code by yourselves."]}),"\n",(0,o.jsx)(s.h2,{id:"step-1-export-and-upgrade-an-experiment",children:"Step 1: Export and upgrade an experiment"}),"\n",(0,o.jsxs)(s.p,{children:["You can use the upgrade tool ",(0,o.jsx)(s.code,{children:"migrate.sh"})," to automatically export and upgrade the experiment. Before running, make sure you have enough permissions to access the cluster."]}),"\n",(0,o.jsxs)(s.p,{children:["If ",(0,o.jsx)(s.code,{children:"migrate.sh"})," is in the current directory, place the ",(0,o.jsx)(s.code,{children:"schedule-migration"})," tool in this directory. Then execute the following command to export and upgrade the experiment:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"bash migrate.sh -e\n"})}),"\n",(0,o.jsx)(s.p,{children:"Then many YAML files are generated in the current directory. These are the exported files of the experiments. The exported experiment files are automatically upgraded."}),"\n",(0,o.jsxs)(s.p,{children:["In addition, you can use the ",(0,o.jsx)(s.code,{children:"schedule-migration"})," tool to upgrade the specified old version of YAML files:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"./schedule-migration <path-to-old-yaml> <path-to-new-yaml>\n"})}),"\n",(0,o.jsx)(s.p,{children:"In the YAML file path you have specified, you can get upgraded YAML files. After deleting the old resources, reapply the new YAML files to complete the update process."}),"\n",(0,o.jsx)(s.h2,{id:"step-2-upgrade-crd",children:"Step 2: Upgrade CRD"}),"\n",(0,o.jsx)(s.p,{children:"Before upgrading Chaos Mesh using Helm, to increase the success rate of the upgrade, execute the following command to manually upgrade CRD:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"bash migrate.sh -c\n"})}),"\n",(0,o.jsx)(s.p,{children:"You can see that CRD is deleted and re-added."}),"\n",(0,o.jsx)(s.h2,{id:"step-3-upgrade-chaos-mesh",children:"Step 3: Upgrade Chaos Mesh"}),"\n",(0,o.jsxs)(s.p,{children:["Because Chaos Mesh 2.0 contains many changes made from 1.x, it is recommended to uninstall 1.x first and then install 2.0. For specific installation steps, refer to ",(0,o.jsx)(s.a,{href:"/docs/2.4.3/production-installation-using-helm",children:"Install using Helm (production environment recommended)"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"step-4-import-an-experiment",children:"Step 4: Import an experiment"}),"\n",(0,o.jsx)(s.p,{children:"Chaos Mesh 2.0 has made some changes on the experiment definition. Before you continue using it, you need to upgrade the experiment files of an earlier version."}),"\n",(0,o.jsx)(s.p,{children:"In the same directory of exported experiment files, execute the following command to import the experiment:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"bash migrate.sh -i\n"})}),"\n",(0,o.jsx)(s.h2,{id:"report-issues",children:"Report issues"}),"\n",(0,o.jsxs)(s.p,{children:["If you encounter any problems in the upgrade process, submit the output of your command to ",(0,o.jsx)(s.a,{href:"https://cloud-native.slack.com/archives/C0193VAV272",children:"slack"})," or create an ",(0,o.jsx)(s.a,{href:"https://github.com/pingcap/chaos-mesh/issues",children:"issue"})," on Github. Thanks for your feedback, and the Chaos Mesh team is happy to resolve your problems."]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},90073:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var o=t(79474);const r={},n=o.createContext(r);function a(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);
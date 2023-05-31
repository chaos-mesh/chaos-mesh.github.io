"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3044],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||n;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(60795),o=(r(59496),r(49613));const n={title:"Upgrade to Chaos Mesh 2.0"},s=void 0,i={unversionedId:"upgrade-to-2.0",id:"version-2.4.3/upgrade-to-2.0",title:"Upgrade to Chaos Mesh 2.0",description:"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade.",source:"@site/versioned_docs/version-2.4.3/upgrade-to-2.0.md",sourceDirName:".",slug:"/upgrade-to-2.0",permalink:"/docs/2.4.3/upgrade-to-2.0",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/upgrade-to-2.0.md",tags:[],version:"2.4.3",frontMatter:{title:"Upgrade to Chaos Mesh 2.0"},sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/2.4.3/faqs"},next:{title:"Upgrade from 2.1 to 2.2",permalink:"/docs/2.4.3/upgrade-from-2.1-to-2.2"}},p={},l=[{value:"Upgrade tools",id:"upgrade-tools",level:2},{value:"Step 1: Export and upgrade an experiment",id:"step-1-export-and-upgrade-an-experiment",level:2},{value:"Step 2: Upgrade CRD",id:"step-2-upgrade-crd",level:2},{value:"Step 3: Upgrade Chaos Mesh",id:"step-3-upgrade-chaos-mesh",level:2},{value:"Step 4: Import an experiment",id:"step-4-import-an-experiment",level:2},{value:"Report issues",id:"report-issues",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade."),(0,o.kt)("h2",{id:"upgrade-tools"},"Upgrade tools"),(0,o.kt)("p",null,"Because CRD has changed in Chaos Mesh 2.0, the YAML files for experiments from an earlier version of Chaos Mesh cannot be run on Chaos Mesh 2.0. If you want to continue using these YAML files, you need to export and update the YAML files and re-import them after upgrading Chaos Mesh."),(0,o.kt)("p",null,"To simplify the upgrade process, Chaos Mesh 2.0 provides the following upgrade tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"migrate.sh"),": used to automatically export and upgrade the YAML files, upgrade CRD, import upgraded YAML files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schedule-migration"),": used to update the earlier YAML files to the latest YAML files.")),(0,o.kt)("p",null,"To get the upgrade tools, it is recommended to clone the Chaos Mesh project to your local repository and then execute the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make schedule-migration.tar.gz"),". Or you can download the project from ",(0,o.kt)("a",{parentName:"p",href:"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"},"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"),". After the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar.gz")," package is downloaded, execute the following command and you can get the above two upgrade tools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf ./schedule-migration.tar.gz\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool in this package applies only to the Linux x86_64 platform. If you are using other operating systems or architectures, you need to compile the code by yourselves."),(0,o.kt)("h2",{id:"step-1-export-and-upgrade-an-experiment"},"Step 1: Export and upgrade an experiment"),(0,o.kt)("p",null,"You can use the upgrade tool ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate.sh")," to automatically export and upgrade the experiment. Before running, make sure you have enough permissions to access the cluster."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate.sh")," is in the current directory, place the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool in this directory. Then execute the following command to export and upgrade the experiment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -e\n")),(0,o.kt)("p",null,"Then many YAML files are generated in the current directory. These are the exported files of the experiments. The exported experiment files are automatically upgraded."),(0,o.kt)("p",null,"In addition, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool to upgrade the specified old version of YAML files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./schedule-migration <path-to-old-yaml> <path-to-new-yaml>\n")),(0,o.kt)("p",null,"In the YAML file path you have specified, you can get upgraded YAML files. After deleting the old resources, reapply the new YAML files to complete the update process."),(0,o.kt)("h2",{id:"step-2-upgrade-crd"},"Step 2: Upgrade CRD"),(0,o.kt)("p",null,"Before upgrading Chaos Mesh using Helm, to increase the success rate of the upgrade, execute the following command to manually upgrade CRD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -c\n")),(0,o.kt)("p",null,"You can see that CRD is deleted and re-added."),(0,o.kt)("h2",{id:"step-3-upgrade-chaos-mesh"},"Step 3: Upgrade Chaos Mesh"),(0,o.kt)("p",null,"Because Chaos Mesh 2.0 contains many changes made from 1.x, it is recommended to uninstall 1.x first and then install 2.0. For specific installation steps, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.3/production-installation-using-helm"},"Install using Helm (production environment recommended)"),"."),(0,o.kt)("h2",{id:"step-4-import-an-experiment"},"Step 4: Import an experiment"),(0,o.kt)("p",null,"Chaos Mesh 2.0 has made some changes on the experiment definition. Before you continue using it, you need to upgrade the experiment files of an earlier version."),(0,o.kt)("p",null,"In the same directory of exported experiment files, execute the following command to import the experiment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -i\n")),(0,o.kt)("h2",{id:"report-issues"},"Report issues"),(0,o.kt)("p",null,"If you encounter any problems in the upgrade process, submit the output of your command to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"slack")," or create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," on Github. Thanks for your feedback, and the Chaos Mesh team is happy to resolve your problems."))}c.isMDXComponent=!0}}]);
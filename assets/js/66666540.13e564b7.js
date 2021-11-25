"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4247],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29861:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Upgrade to Chaos Mesh 2.0"},p=void 0,l={unversionedId:"upgrade-to-2.0",id:"version-2.0.5/upgrade-to-2.0",isDocsHomePage:!1,title:"Upgrade to Chaos Mesh 2.0",description:"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade.",source:"@site/versioned_docs/version-2.0.5/upgrade-to-2.0.md",sourceDirName:".",slug:"/upgrade-to-2.0",permalink:"/docs/upgrade-to-2.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.5/upgrade-to-2.0.md",tags:[],version:"2.0.5",frontMatter:{title:"Upgrade to Chaos Mesh 2.0"},sidebar:"version-2.0.5/docs",previous:{title:"FAQs",permalink:"/docs/faqs"}},u=[{value:"Upgrade tools",id:"upgrade-tools",children:[]},{value:"Step 1: Export and upgrade an experiment",id:"step-1-export-and-upgrade-an-experiment",children:[]},{value:"Step 2: Upgrade CRD",id:"step-2-upgrade-crd",children:[]},{value:"Step 3: Upgrade Chaos Mesh",id:"step-3-upgrade-chaos-mesh",children:[]},{value:"Step 4: Import an experiment",id:"step-4-import-an-experiment",children:[]},{value:"Report issues",id:"report-issues",children:[]}],d={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides detailed instruction for upgrading Chaos Mesh from 1.x to 2.0. Chaos Mesh 2.0 introduced some new features and fixed many issues. Because in Chaos Mesh 2.0, some code has been rebuilt, you need to perform extra actions for the upgrade."),(0,a.kt)("h2",{id:"upgrade-tools"},"Upgrade tools"),(0,a.kt)("p",null,"Because CRD has changed in Chaos Mesh 2.0, the YAML files for experiments from an earlier version of Chaos Mesh cannot be run on Chaos Mesh 2.0. If you want to continue using these YAML files, you need to export and update the YAML files and re-import them after upgrading Chaos Mesh."),(0,a.kt)("p",null,"To simplify the upgrade process, Chaos Mesh 2.0 provides the following upgrade tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"migrate.sh"),": used to automatically export and upgrade the YAML files, upgrade CRD, import upgraded YAML files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schedule-migration"),": used to update the earlier YAML files to the latest YAML files.")),(0,a.kt)("p",null,"To get the upgrade tools, it is recommended to clone the Chaos Mesh project to your local repository and then execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"make schedule-migration.tar.gz"),". Or you can download the project from ",(0,a.kt)("a",{parentName:"p",href:"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"},"https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz"),". After the ",(0,a.kt)("inlineCode",{parentName:"p"},"tar.gz")," package is downloaded, execute the following command and you can get the above two upgrade tools:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf ./schedule-migration.tar.gz\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool in this package applies only to the Linux x86_64 platform. If you are using other operating systems or architectures, you need to compile the code by yourselves."),(0,a.kt)("h2",{id:"step-1-export-and-upgrade-an-experiment"},"Step 1: Export and upgrade an experiment"),(0,a.kt)("p",null,"You can use the upgrade tool ",(0,a.kt)("inlineCode",{parentName:"p"},"migrate.sh")," to automatically export and upgrade the experiment. Before running, make sure you have enough permissions to access the cluster."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"migrate.sh")," is in the current directory, place the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool in this directory. Then execute the following command to export and upgrade the experiment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -e\n")),(0,a.kt)("p",null,"Then many YAML files are generated in the current directory. These are the exported files of the experiments. The exported experiment files are automatically upgraded."),(0,a.kt)("p",null,"In addition, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule-migration")," tool to upgrade the specified old version of YAML files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./schedule-migration <path-to-old-yaml> <path-to-new-yaml>\n")),(0,a.kt)("p",null,"In the YAML file path you have specified, you can get upgraded YAML files. After deleting the old resources, reapply the new YAML files to complete the update process."),(0,a.kt)("h2",{id:"step-2-upgrade-crd"},"Step 2: Upgrade CRD"),(0,a.kt)("p",null,"Before upgrading Chaos Mesh using Helm, to increase the success rate of the upgrade, execute the following command to manually upgrade CRD:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -c\n")),(0,a.kt)("p",null,"You can see that CRD is deleted and re-added."),(0,a.kt)("h2",{id:"step-3-upgrade-chaos-mesh"},"Step 3: Upgrade Chaos Mesh"),(0,a.kt)("p",null,"Because Chaos Mesh 2.0 contains many changes made from 1.x, it is recommended to uninstall 1.x first and then install 2.0. For specific installation steps, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/production-installation-using-helm"},"Install using Helm (production environment recommended)"),"."),(0,a.kt)("h2",{id:"step-4-import-an-experiment"},"Step 4: Import an experiment"),(0,a.kt)("p",null,"Chaos Mesh 2.0 has made some changes on the experiment definition. Before you continue using it, you need to upgrade the experiment files of an earlier version."),(0,a.kt)("p",null,"In the same directory of exported experiment files, execute the following command to import the experiment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash migrate.sh -i\n")),(0,a.kt)("h2",{id:"report-issues"},"Report issues"),(0,a.kt)("p",null,"If you encounter any problems in the upgrade process, submit the output of your command to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"slack")," or create an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"issue")," on Github. Thanks for your feedback, and the Chaos Mesh team is happy to resolve your problems."))}c.isMDXComponent=!0}}]);
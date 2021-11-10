"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3976],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return m}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(d,s(s({ref:t},h),{},{components:o})):n.createElement(d,s({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2111:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),s=["components"],i={title:"chaosctl"},c=void 0,l={unversionedId:"chaosctl-tool",id:"version-2.0.4/chaosctl-tool",isDocsHomePage:!1,title:"chaosctl",description:"chaosctl is a tool to assist in debugging Chaos Mesh. With chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue.",source:"@site/versioned_docs/version-2.0.4/chaosctl-tool.md",sourceDirName:".",slug:"/chaosctl-tool",permalink:"/docs/chaosctl-tool",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.4/chaosctl-tool.md",tags:[],version:"2.0.4",frontMatter:{title:"chaosctl"}},h=[{value:"Get chaosctl",id:"get-chaosctl",children:[]},{value:"Features",id:"features",children:[{value:"Printing logs",id:"printing-logs",children:[]},{value:"Printing debugging information",id:"printing-debugging-information",children:[]}]},{value:"Scenarios",id:"scenarios",children:[]},{value:"Development and improvement",id:"development-and-improvement",children:[]}],p={toc:h};function u(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"chaosctl is a tool to assist in debugging Chaos Mesh. With chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue."),(0,r.kt)("h2",{id:"get-chaosctl"},"Get chaosctl"),(0,r.kt)("p",null,"For Linux users, you can directly download the executable file for chaosctl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl\n")),(0,r.kt)("p",null,"For Windows or macOS users, you can compile it from the source code. Go v1.15 or above is recommended for compiling. Perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repository to your local machine."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to the Chaos Mesh directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make chaosctl\n")),(0,r.kt)("p",{parentName:"li"},"The compiled executable file is at ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/chaosctl"),"."))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Currently, chaosctl supports printing logs and debugging information for Chaos experiments."),(0,r.kt)("h3",{id:"printing-logs"},"Printing logs"),(0,r.kt)("p",null,"To print the logs from all Chaos Mesh components, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," command. To check the help information and examples of this feature, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl logs -h")," command. An example command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosctl logs -t 100 # Print the last 100 lines of logs from all components\n")),(0,r.kt)("h3",{id:"printing-debugging-information"},"Printing debugging information"),(0,r.kt)("p",null,"To print debugging information, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," command. To check the help information and examples of this feature, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl debug -h")," command. When you are debugging, you need to make sure chaosctl is connected to the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),". If you disable TLS (enabled by default) when deploying Chaos Mesh, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," option to tell chaosctl that TLS is not used. An example command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl debug -i networkchaos web-show-network-delay\n")),(0,r.kt)("p",null,"Currently, chaosctl only supports the debugging of IOChaos, NetworkChaos, and StressChaos."),(0,r.kt)("h2",{id:"scenarios"},"Scenarios"),(0,r.kt)("p",null,"If you want to raise an issue about Chaos Mesh, it is recommended to attach the relevant logs and chaos information. Therefore, you can attach the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," to the end of the issue for developers' reference. If you want to raise issues about IOChaos, NetworkChaos or StressChaos, you can also attach the output from ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosctl debug"),"."),(0,r.kt)("h2",{id:"development-and-improvement"},"Development and improvement"),(0,r.kt)("p",null,"The code of chaosctl is currently hosted in the Chaos Mesh project. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl"},"chaos-mesh/pkg/chaosctl")," for details. If you are interested in helping us improve this tool, contact us by ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"Slack")," or raise the issue in the Chaos Mesh project."))}u.isMDXComponent=!0}}]);
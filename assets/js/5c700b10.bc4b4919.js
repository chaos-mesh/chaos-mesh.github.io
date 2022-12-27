"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[14317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?o.createElement(d,s(s({ref:t},h),{},{components:a})):o.createElement(d,s({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Chaosctl"},s=void 0,i={unversionedId:"chaosctl-tool",id:"version-2.5.0/chaosctl-tool",title:"Chaosctl",description:"Chaosctl is a tool to assist in debugging Chaos Mesh. With Chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue.",source:"@site/versioned_docs/version-2.5.0/chaosctl-tool.md",sourceDirName:".",slug:"/chaosctl-tool",permalink:"/docs/chaosctl-tool",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.0/chaosctl-tool.md",tags:[],version:"2.5.0",frontMatter:{title:"Chaosctl"},sidebar:"docs",previous:{title:"Use Grafana Data Source Plugin for Observations",permalink:"/docs/use-grafana-data-source"},next:{title:"Developer Guide Overview",permalink:"/docs/developer-guide-overview"}},l={},c=[{value:"Get Chaosctl",id:"get-chaosctl",level:2},{value:"Features",id:"features",level:2},{value:"Printing logs",id:"printing-logs",level:3},{value:"Printing debugging information",id:"printing-debugging-information",level:3},{value:"Generate TLS certificates for Chaosd",id:"generate-tls-certificates-for-chaosd",level:3},{value:"Questions and feedback",id:"questions-and-feedback",level:2}],h={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Chaosctl is a tool to assist in debugging Chaos Mesh. With Chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue."),(0,n.kt)("h2",{id:"get-chaosctl"},"Get Chaosctl"),(0,n.kt)("p",null,"For Linux users, you can directly download the executable file for Chaosctl."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl -O\n")),(0,n.kt)("p",null,"For Windows or macOS users, you can compile it from the source code. Go v1.15 or above is recommended for compiling. Perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repository to your local machine."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch to the Chaos Mesh directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make chaosctl\n")),(0,n.kt)("p",{parentName:"li"},"The compiled executable file is at ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/chaosctl"),"."))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"Currently, Chaosctl supports printing logs and debugging information for Chaos experiments."),(0,n.kt)("h3",{id:"printing-logs"},"Printing logs"),(0,n.kt)("p",null,"To print the logs from all Chaos Mesh components, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," command. To check the help information and examples of this feature, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs -h")," command. An example command is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chaosctl logs -t 100 # Print the last 100 lines of logs from all components\n")),(0,n.kt)("h3",{id:"printing-debugging-information"},"Printing debugging information"),(0,n.kt)("p",null,"To print debugging information, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," command. To check the help information and examples of this feature, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug -h")," command. When you are debugging, you need to make sure Chaosctl is connected to the corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),". If you disable TLS (enabled by default) when deploying Chaos Mesh, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"-i")," option to tell Chaosctl that TLS is not used. An example command is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl debug -i networkchaos web-show-network-delay\n")),(0,n.kt)("p",null,"Currently, Chaosctl only supports the debugging of IOChaos, NetworkChaos, and StressChaos."),(0,n.kt)("h3",{id:"generate-tls-certificates-for-chaosd"},"Generate TLS certificates for Chaosd"),(0,n.kt)("p",null,"When a request is initiated between Chaosd and Chaos Mesh, to ensure communications security between Chaosd and Chaos-controller-manager services, Chaos Mesh recommends enabling mTLS (Mutual Transport Layer Security) mode."),(0,n.kt)("p",null,"To enable mTLS mode, the TLS certificate parameters should be configured in Chaosd and Chaos mesh. Therefore, make sure that Chaosd and Chaos Mesh have generated TLS certificates, then start Chaosd and Chaos Mesh with the TLS certificate as parameters."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chaosd: You can start Chaosd before ",(0,n.kt)("strong",{parentName:"li"},"or")," after configuring TLS certificate parameters. For clusters security, it is recommended to configure TLS certificate parameters first, and then start Chaosd. For details, see ",(0,n.kt)("a",{parentName:"li",href:"/docs/simulate-physical-machine-chaos#deploy-chaosd-server"},"Deploy Chaosd server"),"."),(0,n.kt)("li",{parentName:"ul"},"Chaos Mesh: If you deployed Chaos Mesh using Helm, TLS certificate parameters are configured by default.")),(0,n.kt)("p",null,"If your Chaosd does not generate a TLS certificate, you can use Chaosctl to easily generate the certificate through the command lines. In the following use cases, Chaosctl runs commands through different schemes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Case 1"),": The nodes where Chaosctl runs can access Kubernetes clusters and connect to a physical machine using SSH tools."),(0,n.kt)("p",null,"Run the following commands to complete the operations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Command: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm init")," command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm init pm-name --ip=123.123.123.123 -l arch=amd64,anotherkey=value\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Operation: The command performs the following operations."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Generate the required certificate for Chaosd simply, and save the certificate to the corresponding physical machine."),(0,n.kt)("li",{parentName:"ul"},"Create the corresponding ",(0,n.kt)("inlineCode",{parentName:"li"},"PhysicalMachine")," resource in Kubernetes clusters.")))),(0,n.kt)("p",null,"For further information and examples of this feature, refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm init -h"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Case 2"),": The nodes where Chaosctl runs can access Kubernetes clusters, but they cannot connect to a physical machine using SSH tools."),(0,n.kt)("p",null,"Run the following commands to complete the operations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before executing the command, you need to manually get a CA certificate from Kubernetes clusters through commands. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o \"jsonpath={.data['ca\\.crt']}\" | base64 -d > ca.crt\n\nkubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o \"jsonpath={.data['ca\\.key']}\" | base64 -d> ca.key\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"ca.crt")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ca.key")," files to ",(0,n.kt)("strong",{parentName:"p"},"the corresponding physical machine"),". For example, copy the files to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/chaosd/pki")," directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm generate")," command to generate TLS certificates (save to `/etc/chaosd/pki by default) on ",(0,n.kt)("strong",{parentName:"p"},"the physical machine"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm generate --cacert=/etc/chaosd/pki/ca.crt --cakey=/etc/chaosd/pki/ca.key\n")),(0,n.kt)("p",{parentName:"li"},"For further information and examples of this feature, refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm generate -h"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm create")," command to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"PhysicalMachine")," resource in Kubernetes clusters on the machine that has access to Kubernetes clusters. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./chaosctl pm create pm-name --ip=123.123.123.123 -l arch=amd64\n")),(0,n.kt)("p",{parentName:"li"},"For further information and examples of this feature, refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl pm create -h"),"."))),(0,n.kt)("h2",{id:"questions-and-feedback"},"Questions and feedback"),(0,n.kt)("p",null,"The code of Chaosctl is currently hosted in the Chaos Mesh project. For details, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl"},"chaos-mesh/pkg/chaosctl"),"."),(0,n.kt)("p",null,"If you encounter problems during performing operations, or you are interested in helping us improve this tool, you are welcome to contact the Chaos Mesh team through ",(0,n.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack"),", or create an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"GitHub issue"),"."),(0,n.kt)("p",null,"When describing your issues, it would be helpful to attach related logs and Chaos information. To provide reference material for developers, you are encouraged to attach the results of ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl logs")," to your questions. Besides, if your question is related to iochaos, networkchaos, stresschaos, the ",(0,n.kt)("inlineCode",{parentName:"p"},"chaosctl debug")," related information also helps to diagnose the problem."))}p.isMDXComponent=!0}}]);
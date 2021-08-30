"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2294],{56871:function(e,t,a){var n=a(91262),o=a(73148),s=a(67294),i=a(52263),r=a(28084);t.Z=function(e){var t=e.children,a=e.className,l=function(e){var t=e.children;return s.createElement("div",{style:{marginBottom:"1.25rem"}},s.createElement(o.Z,{className:a},t))};return s.createElement(n.Z,{fallback:s.createElement(l,null,t)},(function(){var e=function(){var e=(0,i.Z)().siteConfig,t=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&a)return"current"===a?"latest":a;if(t.includes("/docs/next"))return"latest";var n=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions,o=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||o}(),a="latest"===e?t:t.replace("latest","v"+e);return s.createElement(l,null,a)}))}},73148:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(22122),o=a(67294),s=a(86010),i=a(24544),r=a(97985),l=a(87594),c=a.n(l),h=a(83583),m=a(24973),d="codeBlockContainer_2gih",p="codeBlockContent_3z4W",u="codeBlockTitle_1Kb7",k="codeBlock_6upA",g="codeBlockWithTitle_xy-i",f="copyButton_2e3i",v="codeBlockLines_xlV7",N=a(41773),y=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function M(e){var t=e.children,a=e.className,l=e.metastring,M=e.title,S=(0,N.LU)().prism,b=(0,o.useState)(!1),E=b[0],w=b[1],A=(0,o.useState)(!1),x=A[0],_=A[1];(0,o.useEffect)((function(){_(!0)}),[]);var H=(0,N.bc)(l)||M,O=(0,o.useRef)(null),R=[],I=(0,h.Z)(),D=Array.isArray(t)?t.join(""):t;if(l&&y.test(l)){var T=l.match(y)[1];R=c()(T).filter((function(e){return e>0}))}var z=a&&a.replace(/language-/,"");!z&&S.defaultLanguage&&(z=S.defaultLanguage);var B=D.replace(/\n$/,"");if(0===R.length&&void 0!==z){for(var $,V="",Z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(z),j=D.replace(/\n$/,"").split("\n"),G=0;G<j.length;){var P=G+1,q=j[G].match(Z);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":V+=P+",";break;case"highlight-start":$=P;break;case"highlight-end":V+=$+"-"+(P-1)+","}j.splice(G,1)}else G+=1}R=c()(V),B=j.join("\n")}var L=function(){(0,r.Z)(B),w(!0),setTimeout((function(){return w(!1)}),2e3)};return o.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(x),theme:I,code:B,language:z}),(function(e){var t,a=e.className,i=e.style,r=e.tokens,l=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{className:d},H&&o.createElement("div",{style:i,className:u},H),o.createElement("div",{className:(0,s.Z)(p,z)},o.createElement("div",{tabIndex:0,className:(0,s.Z)(a,k,"thin-scrollbar",(t={},t[g]=H,t))},o.createElement("div",{className:v,style:i},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=l({line:e,key:t});return R.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return o.createElement("span",(0,n.Z)({key:t},c({token:e,key:t})))})))})))),o.createElement("button",{ref:O,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(f),onClick:L},E?o.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},97001:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(22122),o=a(19756),s=(a(67294),a(3905)),i={},r=void 0,l={unversionedId:"common/quick-run",id:"common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/docs/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/next/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/common/quick-run.md",tags:[],version:"current",frontMatter:{}},c=[],h={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,s.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}m.isMDXComponent=!0},58377:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(22122),o=a(19756),s=(a(67294),a(3905)),i={},r=void 0,l={unversionedId:"common/verify-installation",id:"common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/docs/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/next/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/common/verify-installation.md",tags:[],version:"current",frontMatter:{}},c=[],h={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,s.kt)("p",null,"The expected output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,s.kt)("p",null,"If your actual output is similar to the expected output with ",(0,s.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}m.isMDXComponent=!0},65985:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(22122),o=a(19756),s=(a(67294),a(3905)),i=a(56871),r=a(58377),l=a(97001),c={title:"Install Chaos Mesh Offline",sidebar_label:"Install Chaos Mesh Offline"},h=void 0,m={unversionedId:"offline-installation",id:"offline-installation",isDocsHomePage:!1,title:"Install Chaos Mesh Offline",description:"This document describes how to install Chaos Mesh offline.",source:"@site/docs/offline-installation.md",sourceDirName:".",slug:"/offline-installation",permalink:"/docs/next/offline-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/offline-installation.md",tags:[],version:"current",frontMatter:{title:"Install Chaos Mesh Offline",sidebar_label:"Install Chaos Mesh Offline"},sidebar:"docs",previous:{title:"Install Chaos Mesh using Helm",permalink:"/docs/next/production-installation-using-helm"},next:{title:"Manage User Permissions",permalink:"/docs/next/manage-user-permissions"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare installation files",id:"prepare-installation-files",children:[{value:"Specify version number",id:"specify-version-number",children:[]},{value:"Download Chaos Mesh images",id:"download-chaos-mesh-images",children:[]},{value:"Download the repository compression package of Chaos Mesh",id:"download-the-repository-compression-package-of-chaos-mesh",children:[]},{value:"Copy files",id:"copy-files",children:[]}]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Step 1: Load Chaos Mesh images",id:"step-1-load-chaos-mesh-images",children:[]},{value:"Step 2: Push images to Registry",id:"step-2-push-images-to-registry",children:[]},{value:"Step 3: Install Chaos Mesh using Helm",id:"step-3-install-chaos-mesh-using-helm",children:[]}]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[]}],p={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to install Chaos Mesh offline."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before installing Chaos Mesh, make sure that Docker is installed and the Kubernetes cluster is deployed in the offline environment. If the environment is not prepared, refer to the following documents to install Docker and deploy the Kubernetes cluster:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes"))),(0,s.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,s.kt)("p",null,"Before you install Chaos Mesh offline, you need to download all Chaos Mesh images and repository compression packages from the machines with external network connection, and then copy the downloaded files into your offline environment."),(0,s.kt)("h3",{id:"specify-version-number"},"Specify version number"),(0,s.kt)("p",null,"Set the version number of Chaos Mesh as the environment variable on the machine with external network connection:"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest"),(0,s.kt)("h3",{id:"download-chaos-mesh-images"},"Download Chaos Mesh images"),(0,s.kt)("p",null,"On the machine connected to external network, pull images using the version number that has been set:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\n")),(0,s.kt)("p",null,"Save images as the tar packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker save pingcap/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save pingcap/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To simulate a DNS fault (for example, make the DNS responses return a random wrong IP address), you need to pull the additional ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pingcap/coredns"},(0,s.kt)("inlineCode",{parentName:"a"},"pingcap/coredns"))," images."))),(0,s.kt)("h3",{id:"download-the-repository-compression-package-of-chaos-mesh"},"Download the repository compression package of Chaos Mesh"),(0,s.kt)("p",null,"On the machine connected to the external network, download the zip package of Chaos Mesh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/${CHAOS_MESH_VERSION}.zip -o chaos-mesh.zip\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"latest")," version corresponds to the ",(0,s.kt)("inlineCode",{parentName:"p"},"master")," branch of the Chaos Mesh repository. The download link of the latest zip package is as follows:"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip"},"https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip")))),(0,s.kt)("h3",{id:"copy-files"},"Copy files"),(0,s.kt)("p",null,"After downloading all the files required for installation, you need to copy these files to the offline environment:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-mesh.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-daemon.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-dashboard.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chaos-mesh.zip"))),(0,s.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,s.kt)("p",null,"After copying the tar package of the Chaos Mesh images and the zip package of the repository to the offline environment, take the following steps to install Chaos Mesh."),(0,s.kt)("h3",{id:"step-1-load-chaos-mesh-images"},"Step 1: Load Chaos Mesh images"),(0,s.kt)("p",null,"Load images from the tar package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n")),(0,s.kt)("h3",{id:"step-2-push-images-to-registry"},"Step 2: Push images to Registry"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before pushing images to Registry, make sure that Registry has been deployed in the offline environment. If Registry is not deployed, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," for the deployment method."))),(0,s.kt)("p",null,"Set the Chaos Mesh version and the Registry address as the environment variable:"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000"),(0,s.kt)("p",null,"Mark the images so that the images point to the Registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n")),(0,s.kt)("p",null,"Push images to Registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n")),(0,s.kt)("h3",{id:"step-3-install-chaos-mesh-using-helm"},"Step 3: Install Chaos Mesh using Helm"),(0,s.kt)("p",null,"Unpack the zip package of Chaos Mesh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n")),(0,s.kt)("p",null,"Create the namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,s.kt)("p",null,"Execute the installation command. When executing the installation command, you need to specify the namespace of Chaos Mesh and the image value of each component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing \\\n  --set chaosDaemon.image=$CHAOS_DAEMON_IMAGE \\\n  --set controllerManager.image=$CHAOS_MESH_IMAGE \\\n  --set dashboard.image=$CHAOS_DASHBOARD_IMAGE\n")),(0,s.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,s.kt)(r.default,{mdxType:"VerifyInstallation"}),(0,s.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,s.kt)(l.default,{mdxType:"QuickRun"}))}u.isMDXComponent=!0}}]);
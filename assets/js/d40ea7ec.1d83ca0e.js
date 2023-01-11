"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Use Grafana Data Source Plugin for Observations"},i=void 0,l={unversionedId:"use-grafana-data-source",id:"use-grafana-data-source",title:"Use Grafana Data Source Plugin for Observations",description:"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source.",source:"@site/docs/use-grafana-data-source.md",sourceDirName:".",slug:"/use-grafana-data-source",permalink:"/docs/next/use-grafana-data-source",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/use-grafana-data-source.md",tags:[],version:"current",frontMatter:{title:"Use Grafana Data Source Plugin for Observations"},sidebar:"docs",previous:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/next/integrate-chaos-mesh-into-github-actions"},next:{title:"Chaosctl",permalink:"/docs/next/chaosctl-tool"}},s={},p=[{value:"Install Data Source Plugin",id:"install-data-source-plugin",level:2},{value:"Set up Data Source Plugin",id:"set-up-data-source-plugin",level:2},{value:"Query",id:"query",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Variables",id:"variables",level:2},{value:"Questions and feedback",id:"questions-and-feedback",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Grafana should be in 7.0.0 or later versions."),(0,o.kt)("li",{parentName:"ul"},"The Data Source plugin cannot be installed through ",(0,o.kt)("inlineCode",{parentName:"li"},"grafana-cli")," at this time, because Grafana has not yet accepted the plugin submission for Chaos Mesh Data Source."))),(0,o.kt)("h2",{id:"install-data-source-plugin"},"Install Data Source Plugin"),(0,o.kt)("p",null,"You can install the Data Source plugin locally in Grafana by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the plugin zip package with the following command, or visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/releases"},"https://github.com/chaos-mesh/datasource/releases")," to download the package:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.1.0/chaosmeshorg-datasource-2.1.0.zip\n")),(0,o.kt)("p",{parentName:"li"},"After downloading, extract the plugin to the Grafana plugin directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unzip chaosmeshorg-datasource-2.1.0.zip -d YOUR_PLUGIN_DIR\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To find the plugin directory, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"},"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update and save the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana.ini")," of Grafana. Then, add the plugin to ",(0,o.kt)("inlineCode",{parentName:"p"},"allow_loading_unsigned_plugins")," to ensure that Grafana can load the unsigned plugin:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To find the configuration file, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"},"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, restart Grafana to load the Data Source plugin."))),(0,o.kt)("h2",{id:"set-up-data-source-plugin"},"Set up Data Source Plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you have successfully installed the Data Source plugin locally in Grafana, go to ",(0,o.kt)("strong",{parentName:"p"},"Configuration -> Data sources")," and add Chaos Mesh to there, then visit the following configuration page:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Configuration page",src:a(55442).Z,width:"1400",height:"1330"})),(0,o.kt)("p",{parentName:"li"},"On this page, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," field needs to be filled in, and the other fields can be ignored."),(0,o.kt)("p",{parentName:"li"},"Suppose that you have installed Chaos Mesh locally. In this case, Dashboard exports the API on port ",(0,o.kt)("inlineCode",{parentName:"p"},"2333")," by default. Therefore, if you have not changed anything, you can write ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:2333")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"URL"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"port-forward")," command to make the API externally accessible:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save & Test")," to test the connection. If it shows a successful notification, the set-up is complete."))),(0,o.kt)("h2",{id:"query"},"Query"),(0,o.kt)("p",null,"The Data Source plugin observes Chaos Mesh from the perspective of events. The following options are responsible for filtering different events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Object ID"),": Filter by object UUID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Namespace"),": Filter by different namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name"),": Filter by object name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Kind"),": Filter by kind (PodChaos, Schedule, and so on)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Limit"),": Limit the number of events")),(0,o.kt)("p",null,"The settings for these options are passed as parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/events")," API."),(0,o.kt)("h2",{id:"annotations"},"Annotations"),(0,o.kt)("p",null,"You can integrate Chaos Mesh events into the panel by setting up Annotations. For example:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Annotations",src:a(10074).Z,width:"1280",height:"1300"})),(0,o.kt)("p",null,"For information on how to fill in the fields in annotations, refer to ",(0,o.kt)("a",{parentName:"p",href:"#query"},"Query"),"."),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("p",null,"You can query Chaos Mesh for events dynamically by setting different variables."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/chaos-mesh/datasource/master/src/img/variables.png",alt:"Variables"})),(0,o.kt)("p",null,"The types of variables provided by the plugin are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Namespace"),": After your selection, all available namespaces are displayed directly at the bottom of the page under ",(0,o.kt)("inlineCode",{parentName:"li"},"Preview of values"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Kind"),": Same as ",(0,o.kt)("strong",{parentName:"li"},"Namespace"),". It can get all kinds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Experiment"),": Same as ",(0,o.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all experiments."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Schedule"),": Same as ",(0,o.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all schedules.")),(0,o.kt)("h2",{id:"questions-and-feedback"},"Questions and feedback"),(0,o.kt)("p",null,"If you encounter problems during installation or set-up, you are welcome to ask questions to the community at ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack"),", or create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/issues"},"GitHub issue")," to communicate with the Chaos Mesh team."),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"If you want to learn more details about the Data Source plugin, feel free to check out the source code for the plugin at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource"},"chaos-mesh/datasource"),"."))}u.isMDXComponent=!0},10074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotations-b9e5e1fd76f38a49dd9886922307fc69.png"},55442:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png"}}]);
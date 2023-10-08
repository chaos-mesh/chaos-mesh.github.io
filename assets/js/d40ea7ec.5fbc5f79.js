"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1167],{49613:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(59496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3405:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(28957),r=(t(59496),t(49613));const o={title:"Use Grafana Data Source Plugin for Observations"},i=void 0,l={unversionedId:"use-grafana-data-source",id:"use-grafana-data-source",title:"Use Grafana Data Source Plugin for Observations",description:"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source.",source:"@site/docs/use-grafana-data-source.md",sourceDirName:".",slug:"/use-grafana-data-source",permalink:"/docs/next/use-grafana-data-source",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/use-grafana-data-source.md",tags:[],version:"current",frontMatter:{title:"Use Grafana Data Source Plugin for Observations"},sidebar:"docs",previous:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/next/integrate-chaos-mesh-into-github-actions"},next:{title:"Chaosctl",permalink:"/docs/next/chaosctl-tool"}},s={},p=[{value:"Install Data Source Plugin using grafana-cli",id:"install-data-source-plugin-using-grafana-cli",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Set up Data Source Plugin",id:"set-up-data-source-plugin",level:2},{value:"Query",id:"query",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Variables",id:"variables",level:2},{value:"Questions and feedback",id:"questions-and-feedback",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:p},c="wrapper";function m(e){let{components:a,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Minimum supported version for Grafana is 7.0.0"),(0,r.kt)("li",{parentName:"ul"},"Minimum supported version for Chaos Mesh is 2.1.0"))),(0,r.kt)("h2",{id:"install-data-source-plugin-using-grafana-cli"},"Install Data Source Plugin using grafana-cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," grafana-cli plugins install chaosmeshorg-datasource\n")),(0,r.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,r.kt)("p",null,"As an alternative, you can also install the Data Source plugin locally in Grafana by following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the plugin zip package with the following command, or visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/releases"},"https://github.com/chaos-mesh/datasource/releases")," to download the package:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.2.3/chaosmeshorg-datasource-2.2.3.zip\n")),(0,r.kt)("p",{parentName:"li"},"After downloading, extract the plugin to the Grafana plugin directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip chaosmeshorg-datasource-2.2.3.zip -d YOUR_PLUGIN_DIR\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To find the plugin directory, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"},"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update and save the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana.ini")," of Grafana. Then, add the plugin to ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_loading_unsigned_plugins")," to ensure that Grafana can load the unsigned plugin:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To find the configuration file, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"},"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, restart Grafana to load the Data Source plugin."))),(0,r.kt)("h2",{id:"set-up-data-source-plugin"},"Set up Data Source Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you have successfully installed the Data Source plugin locally in Grafana, go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration -> Data sources")," and add Chaos Mesh to there, then visit the following configuration page:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Configuration page",src:t(41938).Z,width:"1400",height:"1330"})),(0,r.kt)("p",{parentName:"li"},"On this page, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," field needs to be filled in, and the other fields can be ignored."),(0,r.kt)("p",{parentName:"li"},"Suppose that you have installed Chaos Mesh locally. In this case, Dashboard exports the API on port ",(0,r.kt)("inlineCode",{parentName:"p"},"2333")," by default. Therefore, if you have not changed anything, you can write ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:2333")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," command to make the API externally accessible:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test")," to test the connection. If it shows a successful notification, the set-up is complete."))),(0,r.kt)("h2",{id:"query"},"Query"),(0,r.kt)("p",null,"The Data Source plugin observes Chaos Mesh from the perspective of events. The following options are responsible for filtering different events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object ID"),": Filter by object UUID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": Filter by different namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": Filter by object name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": Filter by kind (PodChaos, Schedule, and so on)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Limit"),": Limit the number of events")),(0,r.kt)("p",null,"The settings for these options are passed as parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/events")," API."),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"You can integrate Chaos Mesh events into the panel by setting up Annotations. For example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Annotations",src:t(69206).Z,width:"1280",height:"1300"})),(0,r.kt)("p",null,"For information on how to fill in the fields in annotations, refer to ",(0,r.kt)("a",{parentName:"p",href:"#query"},"Query"),"."),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"You can query Chaos Mesh for events dynamically by setting different variables."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/chaos-mesh/datasource/master/src/img/variables.png",alt:"Variables"})),(0,r.kt)("p",null,"The types of variables provided by the plugin are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": After your selection, all available namespaces are displayed directly at the bottom of the page under ",(0,r.kt)("inlineCode",{parentName:"li"},"Preview of values"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get all kinds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Experiment"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all experiments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Schedule"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all schedules.")),(0,r.kt)("h2",{id:"questions-and-feedback"},"Questions and feedback"),(0,r.kt)("p",null,"If you encounter problems during installation or set-up, you are welcome to ask questions to the community at ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack"),", or create an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/issues"},"GitHub issue")," to communicate with the Chaos Mesh team."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"If you want to learn more details about the Data Source plugin, feel free to check out the source code for the plugin at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource"},"chaos-mesh/datasource"),"."))}m.isMDXComponent=!0},69206:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/annotations-b9e5e1fd76f38a49dd9886922307fc69.png"},41938:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png"}}]);
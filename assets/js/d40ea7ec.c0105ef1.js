"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1167],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(h,o(o({ref:a},p),{},{components:t})):n.createElement(h,o({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56448:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"Use Grafana Data Source Plugin for Observations"},s=void 0,c={unversionedId:"use-grafana-data-source",id:"use-grafana-data-source",isDocsHomePage:!1,title:"Use Grafana Data Source Plugin for Observations",description:"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source.",source:"@site/docs/use-grafana-data-source.md",sourceDirName:".",slug:"/use-grafana-data-source",permalink:"/docs/next/use-grafana-data-source",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/use-grafana-data-source.md",tags:[],version:"current",frontMatter:{title:"Use Grafana Data Source Plugin for Observations"},sidebar:"docs",previous:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/next/integrate-chaos-mesh-into-github-actions"},next:{title:"Developer Guide Overview",permalink:"/docs/next/developer-guide-overview"}},p=[{value:"Install Data Source Plugin",id:"install-data-source-plugin",children:[],level:2},{value:"Set up Data Source Plugin",id:"set-up-data-source-plugin",children:[],level:2},{value:"Query",id:"query",children:[],level:2},{value:"Annotations",id:"annotations",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Questions and feedback",id:"questions-and-feedback",children:[],level:2},{value:"What&#39;s next",id:"whats-next",children:[],level:2}],u={toc:p};function d(e){var a=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to install the Data Source plugin locally in Grafana and make observations using Grafana Data Source."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Grafana should be in 7.0.0 or later versions."),(0,r.kt)("li",{parentName:"ul"},"The Data Source plugin cannot be installed through ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana-cli")," at this time, because Grafana has not yet accepted the plugin submission for Chaos Mesh Data Source.")))),(0,r.kt)("h2",{id:"install-data-source-plugin"},"Install Data Source Plugin"),(0,r.kt)("p",null,"You can install the Data Source plugin locally in Grafana by following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the plugin zip package with the following command, or visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/releases"},"https://github.com/chaos-mesh/datasource/releases")," to download the package:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.1.0/chaosmeshorg-datasource-2.1.0.zip\n")),(0,r.kt)("p",{parentName:"li"},"After downloading, extract the plugin to the Grafana plugin directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip chaosmeshorg-datasource-2.1.0.zip -d YOUR_PLUGIN_DIR\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To find the plugin directory, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"},"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update and save the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana.ini")," of Grafana. Then, add the plugin to ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_loading_unsigned_plugins")," to ensure that Grafana can load the unsigned plugin:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To find the configuration file, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"},"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, restart Grafana to load the Data Source plugin."))),(0,r.kt)("h2",{id:"set-up-data-source-plugin"},"Set up Data Source Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you have successfully installed the Data Source plugin locally in Grafana, go to ",(0,r.kt)("strong",{parentName:"p"},"Configuration -> Data sources")," and add Chaos Mesh to there, then visit the following configuration page:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Configuration page",src:t(30009).Z})),(0,r.kt)("p",{parentName:"li"},"On this page, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," field needs to be filled in, and the other fields can be ignored."),(0,r.kt)("p",{parentName:"li"},"Suppose that you have installed Chaos Mesh locally. In this case, Dashboard exports the API on port ",(0,r.kt)("inlineCode",{parentName:"p"},"2333")," by default. Therefore, if you have not changed anything, you can write ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:2333")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," command to make the API externally accessible:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test")," to test the connection. If it shows a successful notification, the set-up is complete."))),(0,r.kt)("h2",{id:"query"},"Query"),(0,r.kt)("p",null,"The Data Source plugin observes Chaos Mesh from the perspective of events. The following options are responsible for filtering different events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object ID"),": Filter by object UUID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": Filter by different namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": Filter by object name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": Filter by kind (PodChaos, Schedule, and so on)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Limit"),": Limit the number of events")),(0,r.kt)("p",null,"The settings for these options are passed as parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/events")," API."),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"You can integrate Chaos Mesh events into the panel by setting up Annotations. For example:"),(0,r.kt)("p",null,"! ",(0,r.kt)("a",{target:"_blank",href:t(62061).Z},"Annotations")),(0,r.kt)("p",null,"For information on how to fill in the fields in annotations, refer to ",(0,r.kt)("a",{parentName:"p",href:"#query"},"Query"),"."),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"You can query Chaos Mesh for events dynamically by setting different variables."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/chaos-mesh/datasource/master/src/img/variables.png",alt:"Variables"})),(0,r.kt)("p",null,"The types of variables provided by the plugin are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": After your selection, all available namespaces are displayed directly at the bottom of the page under ",(0,r.kt)("inlineCode",{parentName:"li"},"Preview of values"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get all kinds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Experiment"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all experiments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Schedule"),": Same as ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),". It can get the names of all schedules.")),(0,r.kt)("h2",{id:"questions-and-feedback"},"Questions and feedback"),(0,r.kt)("p",null,"If you encounter problems during installation or set-up, you are welcome to ask questions to the community at ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack"),", or create an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/issues"},"GitHub issue")," to communicate with the Chaos Mesh team."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"If you want to learn more details about the Data Source plugin, feel free to check out the source code for the plugin at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource"},"chaos-mesh/datasource"),"."))}d.isMDXComponent=!0},62061:function(e,a,t){a.Z=t.p+"assets/files/annotations-b9e5e1fd76f38a49dd9886922307fc69.png"},30009:function(e,a,t){a.Z=t.p+"assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png"}}]);
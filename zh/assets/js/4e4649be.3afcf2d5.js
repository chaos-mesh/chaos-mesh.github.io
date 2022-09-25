"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7510],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9822:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={title:"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b"},o=void 0,l={unversionedId:"use-grafana-data-source",id:"version-2.2.3/use-grafana-data-source",title:"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff0c\u5e76\u4f7f\u7528 Grafana Data Source \u8fdb\u884c\u89c2\u6d4b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.3/use-grafana-data-source.md",sourceDirName:".",slug:"/use-grafana-data-source",permalink:"/zh/docs/2.2.3/use-grafana-data-source",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.2.3/use-grafana-data-source.md",tags:[],version:"2.2.3",frontMatter:{title:"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b"},sidebar:"version-2.2.3/docs",previous:{title:"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions",permalink:"/zh/docs/2.2.3/integrate-chaos-mesh-into-github-actions"},next:{title:"Chaosctl",permalink:"/zh/docs/2.2.3/chaosctl-tool"}},s={},p=[{value:"\u5b89\u88c5 Data Source \u63d2\u4ef6",id:"\u5b89\u88c5-data-source-\u63d2\u4ef6",level:2},{value:"\u8bbe\u7f6e Data Source \u63d2\u4ef6",id:"\u8bbe\u7f6e-data-source-\u63d2\u4ef6",level:2},{value:"Query",id:"query",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Variables",id:"variables",level:2},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",level:2},{value:"\u63a2\u7d22\u66f4\u591a",id:"\u63a2\u7d22\u66f4\u591a",level:2}],c={toc:p};function u(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff0c\u5e76\u4f7f\u7528 Grafana Data Source \u8fdb\u884c\u89c2\u6d4b\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Grafana \u5e94\u4e3a v7.0.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e8e Grafana \u8fd8\u6ca1\u6709\u53d7\u7406 Chaos Mesh Data Source \u7684\u63d2\u4ef6\u63d0\u4ea4\uff0c\u6240\u4ee5\u76ee\u524d\u65e0\u6cd5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana-cli")," \u8fdb\u884c\u5b89\u88c5\u3002"))),(0,r.kt)("h2",{id:"\u5b89\u88c5-data-source-\u63d2\u4ef6"},"\u5b89\u88c5 Data Source \u63d2\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u63d2\u4ef6 zip \u5305\uff0c\u6216\u524d\u5f80 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/releases"},"https://github.com/chaos-mesh/datasource/releases")," \u4e0b\u8f7d\u8be5\u538b\u7f29\u5305\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.1.0/chaosmeshorg-datasource-2.1.0.zip\n")),(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u63d2\u4ef6\u89e3\u538b\u81f3 Grafana \u63d2\u4ef6\u76ee\u5f55\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip chaosmeshorg-datasource-2.1.0.zip -d YOUR_PLUGIN_DIR\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u5c0f\u8d34\u58eb",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u67e5\u627e\u63d2\u4ef6\u76ee\u5f55\uff0c\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"},"https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u66f4\u65b0\u5e76\u4fdd\u5b58 Grafana \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana.ini"),"\uff0c\u5c06\u63d2\u4ef6\u6dfb\u52a0\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_loading_unsigned_plugins")," \u4ee5\u4fdd\u8bc1 Grafana \u53ef\u4ee5\u52a0\u8f7d\u672a\u7b7e\u540d\u7684\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u5c0f\u8d34\u58eb",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u67e5\u627e\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"},"https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4fee\u6539\u540e\uff0c\u91cd\u542f Grafana \u5373\u53ef\u52a0\u8f7d Data Source \u63d2\u4ef6\u3002"))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-data-source-\u63d2\u4ef6"},"\u8bbe\u7f6e Data Source \u63d2\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6210\u529f\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\u540e\uff0c\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"p"},"Configuration -> Data sources"),"\uff0c\u5728\u6b64\u5904\u6dfb\u52a0 Chaos Mesh \u540e\uff0c\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u9875\u9762\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u914d\u7f6e\u9875\u9762",src:t(18108).Z,width:"1400",height:"1330"})),(0,r.kt)("p",{parentName:"li"},"\u5728\u672c\u9875\u9762\u4e2d\uff0c\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," \u5b57\u6bb5\u9700\u8981\u586b\u5199\uff0c\u5176\u4ed6\u5b57\u6bb5\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u672c\u5730\u5b89\u88c5\u4e86 Chaos Mesh\uff0cDashboard \u4f1a\u9ed8\u8ba4\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"2333")," \u7aef\u53e3\u5bfc\u51fa API\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u4fee\u6539\u4efb\u4f55\u4e1c\u897f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," \u4e2d\u586b\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:2333"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," \u547d\u4ee4\u8ba9 API \u53ef\u88ab\u5916\u90e8\u8bbf\u95ee:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Save & Test")," \u6765\u6d4b\u8bd5\u8fde\u63a5\u3002\u5982\u679c\u663e\u793a\u6210\u529f\u7684\u901a\u77e5\uff0c\u5219\u8bf4\u660e\u8bbe\u7f6e\u5df2\u7ecf\u5b8c\u6210\u3002"))),(0,r.kt)("h2",{id:"query"},"Query"),(0,r.kt)("p",null,"Data Source \u63d2\u4ef6\u4f1a\u4ee5\u4e8b\u4ef6\u7684\u89c6\u89d2\u6765\u89c2\u6d4b Chaos Mesh\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u9009\u9879\u8d1f\u8d23\u8fc7\u6ee4\u4e0d\u540c\u7684\u4e8b\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object ID"),": \u901a\u8fc7\u5bf9\u8c61\u7684 UUID \u8fdb\u884c\u8fc7\u6ee4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": \u901a\u8fc7\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u8fc7\u6ee4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": \u901a\u8fc7\u5bf9\u8c61\u540d\u8fdb\u884c\u8fc7\u6ee4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": \u901a\u8fc7\u7c7b\u578b\uff08PodChaos, Schedule \u7b49\uff09\u8fdb\u884c\u8fc7\u6ee4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Limit"),": \u9650\u5236\u4e8b\u4ef6\u7684\u6570\u91cf")),(0,r.kt)("p",null,"\u5bf9\u8fd9\u4e9b\u9009\u9879\u7684\u8bbe\u7f6e\u4f1a\u4f5c\u4e3a\u53c2\u6570\u88ab\u4f20\u9012\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/events")," API \u4e2d\u3002"),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Annotations \u628a Chaos Mesh \u7684\u4e8b\u4ef6\u96c6\u6210\u5230\u9762\u677f\u4e0a\uff0c\u5177\u4f53\u521b\u5efa\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Annotations",src:t(56390).Z,width:"1280",height:"1300"})),(0,r.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5982\u4f55\u586b\u5199 Annotations \u4e2d\u7684\u5b57\u6bb5\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"#query"},"Query"),"\u3002"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e0d\u540c\u7684\u53d8\u91cf\u6765\u52a8\u6001\u5730\u67e5\u8be2 Chaos Mesh \u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Variables",src:t(69729).Z,width:"1860",height:"1280"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u63d2\u4ef6\u63d0\u4f9b\u7684\u53d8\u91cf\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Namespace"),": \u9009\u62e9\u540e\uff0c\u6240\u6709\u53ef\u7528\u7684\u547d\u540d\u7a7a\u95f4\u5c06\u76f4\u63a5\u663e\u793a\u5728\u9875\u9762\u4e0b\u65b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Preview of values"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kind"),": \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u79cd\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Experiment"),": \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u5b9e\u9a8c\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Schedule"),": \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u65f6\u95f4\u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5b89\u88c5\u6216\u8bbe\u7f6e\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6b22\u8fce\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C0193VAV272"},"CNCF Slack")," \u5411\u793e\u533a\u63d0\u95ee\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource/issues"},"issue")," \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u3002"),(0,r.kt)("h2",{id:"\u63a2\u7d22\u66f4\u591a"},"\u63a2\u7d22\u66f4\u591a"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5185\u5bb9\uff0c \u6b22\u8fce\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/datasource"},"chaos-mesh/datasource")," \u67e5\u770b\u63d2\u4ef6\u7684\u6e90\u4ee3\u7801\u3002"))}u.isMDXComponent=!0},56390:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/annotations-b9e5e1fd76f38a49dd9886922307fc69.png"},18108:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png"},69729:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/variables-a7c176c8c7d5421dc93e921d29d697a5.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{220:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(250),l=a(229),r=a(0),c=a.n(r),i=a(226),o=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imgUrl:"img/undraw_server_down_s4lk.svg",description:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including"," ",c.a.createElement("a",{href:"https://github.com/kubernetes/minikube"},"Minikube")," and"," ",c.a.createElement("a",{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),"."),c.a.createElement("ul",null,c.a.createElement("li",null,"Require no modification to the deployment logic of the system under test (SUT)"),c.a.createElement("li",null,"Easily orchestrate fault injection behaviors in chaos experiments"),c.a.createElement("li",null,"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments")))},{title:c.a.createElement(c.a.Fragment,null,"Design for Kubernetes"),imgUrl:"img/logos/kubernetes.svg",description:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Chaos Mesh uses"," ",c.a.createElement("a",{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank"},"CustomResourceDefinitions")," ","(CRD) to define chaos objects."),c.a.createElement("p",null,"In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem.")),reverse:!0}],m=a(189),u=a.n(m),g=a(241),h=a(22),d=[{name:"APISIX",img:"img/logos/apisix.svg",style:{height:"80%"}},{name:"Celo",img:"img/logos/celo.png"},{name:"Dailymotion",img:"img/logos/dailymotion.svg"},{name:"Fuxi Lab",img:"img/logos/fuxilab.png"},{name:"juiceFS",img:"img/logos/juicefs.svg"},{name:"KingNet",img:"img/logos/kingnet.png",style:{marginBottom:"1rem"}},{name:"Meituan Dianping",img:"img/logos/meituandianping.png"},{name:"PingCAP",img:"img/logos/pingcap.svg"},{name:"Pulsar",img:"img/logos/pulsar.svg"},{name:"Qihoo 360",img:"img/logos/qihoo360.png"},{name:"Qiniu Cloud",img:"img/logos/qiniucloud.png"},{name:"Tencent",img:"img/logos/tencent.png"},{name:"Vald",img:"img/logos/vald.svg",style:{height:"50%"}},{name:"WeBank",img:"img/logos/webank.png"},{name:"Xpeng",img:"img/logos/xpeng.png"}];function p(e){var t=e.imgUrl,a=e.title,n=e.description,s=e.reverse;return c.a.createElement("div",{className:Object(i.a)("row",u.a.feature,s?u.a.featureReverse:"")},c.a.createElement("div",{className:"col col--6"},c.a.createElement("div",{className:"text--center"},t&&c.a.createElement("img",{className:u.a.featureImage,src:Object(g.a)(t),alt:a}))),c.a.createElement("div",{className:Object(i.a)("col col--6",u.a.featureDesc)},c.a.createElement("div",null,c.a.createElement("h3",null,a),c.a.createElement("div",null,n))))}t.default=function(){var e=Object(h.default)().siteConfig;return c.a.createElement(s.a,{title:e.tagline,description:e.tagline},c.a.createElement("header",{className:Object(i.a)("hero",u.a.hero)},c.a.createElement("div",{className:"container text--center"},c.a.createElement("div",{className:u.a.heroLogoWrapper},c.a.createElement("img",{className:u.a.heroLogo,src:Object(g.a)("img/logos/logo-mini.svg"),alt:"Chaos Mesh Logo"})),c.a.createElement("h1",{className:Object(i.a)("hero__title",u.a.heroTitle)},e.title),c.a.createElement("p",{className:"hero__subtitle"},e.tagline))),c.a.createElement("div",{className:Object(i.a)("hero",u.a.hero)},c.a.createElement("div",{className:"container text--center"},c.a.createElement("h2",{className:"hero__subtitle"},"Start By One Line"),c.a.createElement("div",{className:u.a.installTextWrapper},c.a.createElement(l.a,null,"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash")))),c.a.createElement("main",{className:Object(i.a)("hero",u.a.hero)},c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:u.a.features},c.a.createElement("div",{className:"container"},o.map((function(e,t){return c.a.createElement(p,Object(n.a)({key:t},e))})))))),c.a.createElement("div",{className:Object(i.a)("hero",u.a.hero)},c.a.createElement("div",{className:"container text--center"},c.a.createElement("h2",{className:"hero__subtitle"},"Who Are Using Chaos Mesh?"),c.a.createElement("div",{className:u.a.whiteboard},c.a.createElement("div",{className:"row"},d.map((function(e){return c.a.createElement("div",{key:e.name,className:"col col--3"},c.a.createElement("div",{className:u.a.logoWrapper},c.a.createElement("img",{style:e.style,src:Object(g.a)(e.img),alt:e.name})))})))))),c.a.createElement("div",{className:Object(i.a)("hero",u.a.hero)},c.a.createElement("div",{className:"container text--center"},c.a.createElement("h2",{className:"hero__subtitle"},"Chaos Mesh\xae is a ",c.a.createElement("a",{href:"https://cncf.io/"},"Cloud Native Computing Foundation")," sandbox project"),c.a.createElement("div",{className:Object(i.a)("cncf-logo",u.a.cncfLogo)}))))}},228:function(e,t,a){"use strict";var n=a(3),s=a(0),l=a.n(s),r=a(226),c=a(237),i=a(234),o=a.n(i),m=a(235),u=a.n(m),g=a(236),h=a(54),d=a.n(h),p=a(227),v=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},E=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,i=e.metastring,m=Object(p.useThemeConfig)().prism,h=Object(s.useState)(!1),b=h[0],j=h[1],N=Object(s.useState)(!1),k=N[0],y=N[1];Object(s.useEffect)((function(){y(!0)}),[]);var O=Object(s.useRef)(null),x=[],C="",w=Object(g.a)();if(Array.isArray(t)&&(t=t.join("")),i&&v.test(i)){var B=i.match(v)[1];x=u()(B).filter((function(e){return e>0}))}i&&E.test(i)&&(C=i.match(E)[1]);var _=a&&a.replace(/language-/,"");!_&&m.defaultLanguage&&(_=m.defaultLanguage);var L=t.replace(/\n$/,"");if(0===x.length&&void 0!==_){for(var D,F="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(_),S=t.replace(/\n$/,"").split("\n"),T=0;T<S.length;){var R=T+1,U=S[T].match(M);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":F+=R+",";break;case"highlight-start":D=R;break;case"highlight-end":F+=D+"-"+(R-1)+","}S.splice(T,1)}else T+=1}x=u()(F),L=S.join("\n")}var P=function(){o()(L),j(!0),setTimeout((function(){return j(!1)}),2e3)};return l.a.createElement(c.a,Object(n.a)({},c.b,{key:String(k),theme:w,code:L,language:_}),(function(e){var t,a=e.className,s=e.style,c=e.tokens,i=e.getLineProps,o=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,C&&l.a.createElement("div",{style:s,className:d.a.codeBlockTitle},C),l.a.createElement("div",{className:d.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(r.a)(a,d.a.codeBlock,"thin-scrollbar",(t={},t[d.a.codeBlockWithTitle]=C,t))},l.a.createElement("div",{className:d.a.codeBlockLines,style:s},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return x.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))})))})))),l.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:Object(r.a)(d.a.copyButton),onClick:P},b?"Copied":"Copy")))}))}},229:function(e,t,a){"use strict";var n=a(0),s=a.n(n),l=a(8);var r=function(e){var t=e.children,a=e.fallback;return l.a.canUseDOM&&null!=t?s.a.createElement(s.a.Fragment,null,t()):a||null},c=a(228),i=a(231);t.a=function(e){var t=e.children,a=e.className,n=function(e){var t=e.children;return s.a.createElement("div",{style:{marginBottom:"1.25rem"}},s.a.createElement(c.a,{className:a},t))};return s.a.createElement(r,{fallback:s.a.createElement(n,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var a=Object(i.usePluginData)("docusaurus-plugin-content-docs").versions,n=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||n}(),a="latest"===e?t:t.replace("latest","v"+e);return s.a.createElement(n,null,a)}))}}}]);
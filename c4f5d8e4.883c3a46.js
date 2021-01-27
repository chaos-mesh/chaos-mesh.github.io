(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{223:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),r=a.n(s),l=function(){return Object(s.useEffect)((function(){if(!document.body.contains(document.querySelector("#banner"))&&!window.closeBanner){var e=document.createElement("div");e.id="banner",e.innerHTML='\ud83d\ude4b\u200d\u2640\ufe0f \ud83d\ude4b\u200d\u2642\ufe0f Contributors & adopters, take the&nbsp;<a href="https://bit.ly/3i3v2Vr" target="_blank">community survey</a>&nbsp;and claim your Chaos Mesh anniversary swag!';var t=document.createElement("span");t.className="close",t.innerHTML="x",t.onclick=function(){e.remove(),window.closeBanner=!0},e.append(t),document.querySelector("#__docusaurus").prepend(e)}}),[]),null},c=a(254),i=a(233),o=a(230),m=[{title:r.a.createElement(r.a.Fragment,null,"Easy to Use"),imgUrl:"img/undraw_server_down_s4lk.svg",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including"," ",r.a.createElement("a",{href:"https://github.com/kubernetes/minikube"},"Minikube")," and"," ",r.a.createElement("a",{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),"."),r.a.createElement("ul",null,r.a.createElement("li",null,"Require no modification to the deployment logic of the system under test (SUT)"),r.a.createElement("li",null,"Easily orchestrate fault injection behaviors in chaos experiments"),r.a.createElement("li",null,"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments")))},{title:r.a.createElement(r.a.Fragment,null,"Design for Kubernetes"),imgUrl:"img/logos/kubernetes.svg",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Chaos Mesh uses"," ",r.a.createElement("a",{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank"},"CustomResourceDefinitions")," ","(CRD) to define chaos objects."),r.a.createElement("p",null,"In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem.")),reverse:!0}],u=a(192),g=a.n(u),d=a(245),h=a(22),p=[{name:"APISIX",img:"img/logos/apisix.svg",style:{height:"80%"}},{name:"Celo",img:"img/logos/celo.png"},{name:"Dailymotion",img:"img/logos/dailymotion.svg"},{name:"Fuxi Lab",img:"img/logos/fuxilab.png"},{name:"juiceFS",img:"img/logos/juicefs.svg"},{name:"KingNet",img:"img/logos/kingnet.png",style:{marginBottom:"1rem"}},{name:"Meituan Dianping",img:"img/logos/meituandianping.png"},{name:"PingCAP",img:"img/logos/pingcap.svg"},{name:"Pulsar",img:"img/logos/pulsar.svg"},{name:"Qihoo 360",img:"img/logos/qihoo360.png"},{name:"Qiniu Cloud",img:"img/logos/qiniucloud.png"},{name:"Tencent",img:"img/logos/tencent.png"},{name:"Vald",img:"img/logos/vald.svg",style:{height:"50%"}},{name:"WeBank",img:"img/logos/webank.png"},{name:"Xpeng",img:"img/logos/xpeng.png"}];function v(e){var t=e.imgUrl,a=e.title,n=e.description,s=e.reverse;return r.a.createElement("div",{className:Object(o.a)("row",g.a.feature,s?g.a.featureReverse:"")},r.a.createElement("div",{className:"col col--6"},r.a.createElement("div",{className:"text--center"},t&&r.a.createElement("img",{className:g.a.featureImage,src:Object(d.a)(t),alt:a}))),r.a.createElement("div",{className:Object(o.a)("col col--6",g.a.featureDesc)},r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("div",null,n))))}t.default=function(){var e=Object(h.default)().siteConfig;return r.a.createElement(c.a,{title:e.tagline,description:e.tagline},r.a.createElement("header",{className:Object(o.a)("hero",g.a.hero)},r.a.createElement("div",{className:"container text--center"},r.a.createElement("div",{className:g.a.heroLogoWrapper},r.a.createElement("img",{className:g.a.heroLogo,src:Object(d.a)("img/logos/logo-mini.svg"),alt:"Chaos Mesh Logo"})),r.a.createElement("h1",{className:Object(o.a)("hero__title",g.a.heroTitle)},e.title),r.a.createElement("p",{className:"hero__subtitle"},e.tagline))),r.a.createElement("div",{className:Object(o.a)("hero",g.a.hero)},r.a.createElement("div",{className:"container text--center"},r.a.createElement("h2",{className:"hero__subtitle"},"Start By One Line"),r.a.createElement("div",{className:g.a.installTextWrapper},r.a.createElement(i.a,null,"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash")))),r.a.createElement("main",{className:Object(o.a)("hero",g.a.hero)},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:g.a.features},r.a.createElement("div",{className:"container"},m.map((function(e,t){return r.a.createElement(v,Object(n.a)({key:t},e))})))))),r.a.createElement("div",{className:Object(o.a)("hero",g.a.hero)},r.a.createElement("div",{className:"container text--center"},r.a.createElement("h2",{className:"hero__subtitle"},"Who Are Using Chaos Mesh?"),r.a.createElement("div",{className:g.a.whiteboard},r.a.createElement("div",{className:"row"},p.map((function(e){return r.a.createElement("div",{key:e.name,className:Object(o.a)("col col--3",g.a.whiteboardCol)},r.a.createElement("div",{className:g.a.logoWrapper},r.a.createElement("img",{style:e.style,src:Object(d.a)(e.img),alt:e.name})))})))))),r.a.createElement("div",{className:Object(o.a)("hero",g.a.hero)},r.a.createElement("div",{className:"container text--center"},r.a.createElement("h2",{className:"hero__subtitle"},"Chaos Mesh\xae is a ",r.a.createElement("a",{href:"https://cncf.io/"},"Cloud Native Computing Foundation")," sandbox project"),r.a.createElement("div",{className:Object(o.a)("cncf-logo",g.a.cncfLogo)}))),r.a.createElement(l,null))}},232:function(e,t,a){"use strict";var n=a(3),s=a(0),r=a.n(s),l=a(230),c=a(241),i=a(238),o=a.n(i),m=a(239),u=a.n(m),g=a(240),d=a(54),h=a.n(d),p=a(231),v=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},b=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,i=e.metastring,m=Object(p.useThemeConfig)().prism,d=Object(s.useState)(!1),E=d[0],j=d[1],y=Object(s.useState)(!1),k=y[0],N=y[1];Object(s.useEffect)((function(){N(!0)}),[]);var O=Object(s.useRef)(null),x=[],w="",C=Object(g.a)();if(Array.isArray(t)&&(t=t.join("")),i&&v.test(i)){var B=i.match(v)[1];x=u()(B).filter((function(e){return e>0}))}i&&b.test(i)&&(w=i.match(b)[1]);var _=a&&a.replace(/language-/,"");!_&&m.defaultLanguage&&(_=m.defaultLanguage);var L=t.replace(/\n$/,"");if(0===x.length&&void 0!==_){for(var M,S="",T=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(_),D=t.replace(/\n$/,"").split("\n"),F=0;F<D.length;){var R=F+1,U=D[F].match(T);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=R+",";break;case"highlight-start":M=R;break;case"highlight-end":S+=M+"-"+(R-1)+","}D.splice(F,1)}else F+=1}x=u()(S),L=D.join("\n")}var P=function(){o()(L),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(c.a,Object(n.a)({},c.b,{key:String(k),theme:C,code:L,language:_}),(function(e){var t,a=e.className,s=e.style,c=e.tokens,i=e.getLineProps,o=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,w&&r.a.createElement("div",{style:s,className:h.a.codeBlockTitle},w),r.a.createElement("div",{className:h.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(a,h.a.codeBlock,"thin-scrollbar",(t={},t[h.a.codeBlockWithTitle]=w,t))},r.a.createElement("div",{className:h.a.codeBlockLines,style:s},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return x.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))})))})))),r.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(h.a.copyButton),onClick:P},E?"Copied":"Copy")))}))}},233:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(8);var l=function(e){var t=e.children,a=e.fallback;return r.a.canUseDOM&&null!=t?s.a.createElement(s.a.Fragment,null,t()):a||null},c=a(232),i=a(235);t.a=function(e){var t=e.children,a=e.className,n=function(e){var t=e.children;return s.a.createElement("div",{style:{marginBottom:"1.25rem"}},s.a.createElement(c.a,{className:a},t))};return s.a.createElement(l,{fallback:s.a.createElement(n,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var a=Object(i.usePluginData)("docusaurus-plugin-content-docs").versions,n=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||n}(),a="latest"===e?t:t.replace("latest","v"+e);return s.a.createElement(n,null,a)}))}}}]);
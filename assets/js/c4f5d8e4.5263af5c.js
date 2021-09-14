(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4195],{91262:function(e,t,n){"use strict";var r=n(67294),a=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,a.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},83583:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},a=n(85350),o=n(941),s=function(){var e=(0,o.LU)().prism,t=(0,a.Z)().isDarkTheme,n=e.theme||r,s=e.darkTheme||n;return t?s:n}},56871:function(e,t,n){"use strict";var r=n(91262),a=n(73148),o=n(67294),s=n(52263),l=n(28084);t.Z=function(e){var t=e.children,n=e.className,i=function(e){var t=e.children;return o.createElement("div",{style:{marginBottom:"1.25rem"}},o.createElement(a.Z,{className:n},t))};return o.createElement(r.Z,{fallback:o.createElement(i,null,t)},(function(){var e=function(){var e=(0,s.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var r=(0,l.usePluginData)("docusaurus-plugin-content-docs").versions,a=r.filter((function(e){return e.isLast}))[0].name;return r.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||a}(),n="latest"===e?t:t.replace("latest","v"+e);return o.createElement(i,null,n)}))}},73998:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(87462),a=n(67294),o=n(46254),s=n(56871),l=n(86010),i=[{title:a.createElement(a.Fragment,null,"Easy to Use"),imgUrl:"img/undraw_server_down_s4lk.svg",description:a.createElement(a.Fragment,null,a.createElement("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including"," ",a.createElement("a",{href:"https://github.com/kubernetes/minikube"},"Minikube")," and"," ",a.createElement("a",{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),"."),a.createElement("ul",null,a.createElement("li",null,"Require no modification to the deployment logic of the system under test (SUT)"),a.createElement("li",null,"Easily orchestrate fault injection behaviors in chaos experiments"),a.createElement("li",null,"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments")))},{title:a.createElement(a.Fragment,null,"Design for Kubernetes"),imgUrl:"img/logos/kubernetes.svg",description:a.createElement(a.Fragment,null,a.createElement("p",null,"Chaos Mesh uses"," ",a.createElement("a",{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank"},"CustomResourceDefinitions")," ","(CRD) to define chaos objects."),a.createElement("p",null,"In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem.")),reverse:!0}],c={hero:"hero_39XR",heroLogoWrapper:"heroLogoWrapper_MNlE",heroLogo:"heroLogo_17HU",heroTitle:"heroTitle_3Th-",installTextWrapper:"installTextWrapper_61Bt",feature:"feature_2oFu",featureReverse:"featureReverse_3dMY",featureImage:"featureImage_3Q9E",featureDesc:"featureDesc_1Bie",whiteboard:"whiteboard_vzcT",whiteboardCol:"whiteboardCol_3_EW",logoWrapper:"logoWrapper_9Ypb",cncfLogo:"cncfLogo_q9cW"},m=n(44996),u=n(52263),g=[{name:"APISIX",img:"img/logos/apisix.svg",style:{height:"80%"}},{name:"ByteDance",img:"img/logos/bytedance.svg"},{name:"Celo",img:"img/logos/celo.png"},{name:"Dailymotion",img:"img/logos/dailymotion.svg"},{name:"DataStax",img:"img/logos/datastax.svg"},{name:"Fuxi Lab",img:"img/logos/fuxilab.png"},{name:"juiceFS",img:"img/logos/juicefs.svg"},{name:"KingNet",img:"img/logos/kingnet.png",style:{marginBottom:"1rem"}},{name:"Meituan Dianping",img:"img/logos/meituandianping.png"},{name:"NETSTARS",img:"img/logos/netstars.png"},{name:"Percona",img:"img/logos/percona.jpeg"},{name:"PingCAP",img:"img/logos/pingcap.svg"},{name:"Pulsar",img:"img/logos/pulsar.svg"},{name:"Qihoo 360",img:"img/logos/qihoo360.png"},{name:"Qiniu Cloud",img:"img/logos/qiniucloud.png"},{name:"S.J. Distributors",img:"img/logos/sj.png",style:{width:"40%"}},{name:"Tencent",img:"img/logos/tencent.png"},{name:"Vald",img:"img/logos/vald.svg",style:{height:"50%"}},{name:"WeBank",img:"img/logos/webank.png"},{name:"Xpeng",img:"img/logos/xpeng.png"}];function p(e){var t=e.imgUrl,n=e.title,r=e.description,o=e.reverse;return a.createElement("div",{className:(0,l.Z)("row",c.feature,o?c.featureReverse:"")},a.createElement("div",{className:"col col--6"},a.createElement("div",{className:"text--center"},t&&a.createElement("img",{className:c.featureImage,src:(0,m.Z)(t),alt:n}))),a.createElement("div",{className:(0,l.Z)("col col--6",c.featureDesc)},a.createElement("div",null,a.createElement("h3",null,n),a.createElement("div",null,r))))}var d=function(){var e=(0,u.Z)().siteConfig;return a.createElement(o.Z,{title:e.tagline,description:e.tagline},a.createElement("header",{className:(0,l.Z)("hero",c.hero)},a.createElement("div",{className:"container text--center"},a.createElement("div",{className:c.heroLogoWrapper},a.createElement("img",{className:c.heroLogo,src:(0,m.Z)("img/logos/logo-mini.svg"),alt:"Chaos Mesh Logo"})),a.createElement("h1",{className:(0,l.Z)("hero__title",c.heroTitle)},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline))),a.createElement("div",{className:(0,l.Z)("hero",c.hero)},a.createElement("div",{className:"container text--center"},a.createElement("h2",{className:"hero__subtitle"},"Start By One Line"),a.createElement("div",{className:c.installTextWrapper},a.createElement(s.Z,null,"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash")))),a.createElement("main",{className:(0,l.Z)("hero",c.hero)},a.createElement("div",{className:"container"},a.createElement("section",{className:c.features},a.createElement("div",{className:"container"},i.map((function(e,t){return a.createElement(p,(0,r.Z)({key:t},e))})))))),a.createElement("div",{className:(0,l.Z)("hero",c.hero)},a.createElement("div",{className:"container text--center"},a.createElement("h2",{className:"hero__subtitle"},"Who is Using Chaos Mesh"),a.createElement("div",{className:c.whiteboard},a.createElement("div",{className:"row"},g.map((function(e){return a.createElement("div",{key:e.name,className:(0,l.Z)("col col--3",c.whiteboardCol)},a.createElement("div",{className:c.logoWrapper},a.createElement("img",{style:e.style,src:(0,m.Z)(e.img),alt:e.name})))})))))),a.createElement("div",{className:(0,l.Z)("hero",c.hero)},a.createElement("div",{className:"container text--center"},a.createElement("h2",{className:"hero__subtitle"},"Chaos Mesh\xae is a"," ",a.createElement("a",{href:"https://cncf.io/",target:"_blank"},"Cloud Native Computing Foundation")," ","sandbox project"),a.createElement("div",{className:(0,l.Z)("cncf-logo",c.cncfLogo)}))))}},73148:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(87462),a=n(67294),o=n(86010),s=n(24544),l=n(10195),i=n(87594),c=n.n(i),m=n(83583),u=n(24973),g="codeBlockContainer_2gih",p="codeBlockContent_3z4W",d="codeBlockTitle_1Kb7",h="codeBlock_6upA",y="codeBlockWithTitle_xy-i",f="copyButton_2e3i",v="codeBlockLines_xlV7",b=n(941),k=/{([\d,-]+)}/,E=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function N(e){var t=e.children,n=e.className,i=e.metastring,N=e.title,_=(0,b.LU)().prism,x=(0,a.useState)(!1),Z=x[0],C=x[1],j=(0,a.useState)(!1),T=j[0],w=j[1];(0,a.useEffect)((function(){w(!0)}),[]);var L=(0,b.bc)(i)||N,D=(0,a.useRef)(null),B=[],S=(0,m.Z)(),P=Array.isArray(t)?t.join(""):t;if(i&&k.test(i)){var R=i.match(k)[1];B=c()(R).filter((function(e){return e>0}))}var W=n&&n.replace(/language-/,"");!W&&_.defaultLanguage&&(W=_.defaultLanguage);var I=P.replace(/\n$/,"");if(0===B.length&&void 0!==W){for(var A,F="",O=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"]);case"jsx":case"tsx":return E(["js","jsBlock","jsx"]);case"html":return E(["js","jsBlock","html"]);case"python":case"py":return E(["python"]);default:return E()}}(W),U=P.replace(/\n$/,"").split("\n"),M=0;M<U.length;){var z=M+1,K=U[M].match(O);if(null!==K){switch(K.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":F+=z+",";break;case"highlight-start":A=z;break;case"highlight-end":F+=A+"-"+(z-1)+","}U.splice(M,1)}else M+=1}B=c()(F),I=U.join("\n")}var q=function(){(0,l.Z)(I),C(!0),setTimeout((function(){return C(!1)}),2e3)};return a.createElement(s.ZP,(0,r.Z)({},s.lG,{key:String(T),theme:S,code:I,language:W}),(function(e){var t,n=e.className,s=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return a.createElement("div",{className:g},L&&a.createElement("div",{style:s,className:d},L),a.createElement("div",{className:(0,o.Z)(p,W)},a.createElement("div",{tabIndex:0,className:(0,o.Z)(n,h,"thin-scrollbar",(t={},t[y]=L,t))},a.createElement("div",{className:v,style:s},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return B.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.createElement("div",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),a.createElement("button",{ref:D,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(f),onClick:q},Z?a.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d},lG:function(){return s}});var r=n(87410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(67294),s={Prism:r.default,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var d=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=i({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var s=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,s=i({},p(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?i({},s.style,a):a),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),l(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=r[s]++)<a[s];){var g=void 0,p=t[s],d=n[s][o];if("string"==typeof d?(p=s>0?p:["plain"],g=d):(p=u(p,d.type),d.alias&&(p=u(p,d.alias)),g=d.content),"string"==typeof g){var h=g.split(c),y=h.length;l.push({types:p,content:h[0]});for(var f=1;f<y;f++)m(l),i.push(l=[]),l.push({types:p,content:h[f]})}else s++,t.push(p),n.push(g),r.push(0),a.push(g.length)}s--,t.pop(),n.pop(),r.pop(),a.pop()}return m(l),i}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},10195:function(e,t,n){"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var s=document.getSelection(),l=!1;s.rangeCount>0&&(l=s.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(c){}return a.remove(),l&&(s.removeAllRanges(),s.addRange(l)),o&&o.focus(),i}n.d(t,{Z:function(){return r}})}}]);
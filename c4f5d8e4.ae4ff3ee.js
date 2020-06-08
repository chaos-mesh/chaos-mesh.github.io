(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(152),r=n.n(o),i=n(155),l=n(153),c=n(151),p=n(156),u=n(141),m=n.n(u),y=n(2),h=n(142),d=n.n(h),g=n(163),f=n(177),b=n(247),v=n.n(b);var k=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=Object(c.a)(),[n,o]=Object(a.useState)(!1);Object(a.useEffect)(()=>{o(!0)},[]);const{isDarkTheme:r}=Object(g.a)(),i=t.theme||v.a,l=t.darkTheme||i,p=r?l:i,{lang:u="yaml",snippet:m}=e;return s.a.createElement(f.a,Object(y.a)({},f.b,{key:n,theme:p,code:m,language:u}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:o})=>s.a.createElement("pre",{className:`${e} ${d.a.codeSnippet}`,style:t},n.map((e,t)=>s.a.createElement("div",a({line:e,key:t}),e.map((e,t)=>s.a.createElement("span",o({token:e,key:t})))))))};t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return s.a.createElement(i.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},s.a.createElement("header",{className:r()("hero hero--primary",m.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"hero__title"},t.title),s.a.createElement("p",{className:"hero__subtitle"},t.tagline),s.a.createElement("div",{className:m.a.buttons},s.a.createElement(l.a,{className:r()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(p.a)("docs/")},"Get Started")))),s.a.createElement("main",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:r()(m.a.pitch+" col col--6")},s.a.createElement("h2",null,"Easy to Use"),s.a.createElement("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including ",s.a.createElement("a",{href:"https://github.com/kubernetes/minikube"},"Minikube")," and ",s.a.createElement("a",{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),". Require no modification to the deployment logic of the system under test (SUT). Easily orchestrate fault injection behaviors in chaos experiments. Hide underlying implementation details so that users can focus on orchestrating the chaos experiments."),s.a.createElement(k,{snippet:"# Install on Kubernetes \ncurl -sSL https://raw.githubusercontent.com/pingcap/chaos-mesh/master/install.sh | sh",lang:"bash"})),s.a.createElement("div",{className:r()(m.a.pitch+" col col--6")},s.a.createElement("h2",null,"Designed for Kubernetes"),s.a.createElement("p",null,"Chaos Mesh uses ",s.a.createElement("a",{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResourceDefinitions")," (CRD) to define chaos objects. In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."),s.a.createElement("img",{src:"img/chaos-mesh.svg"}))))))}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(34),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),r={Prism:a.a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),s=e.styles.reduce((function(e,n){var a=n.languages,s=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=l({},e[t],s);e[t]=n})),e}),a);return s.root=n,s.plain=l({},n,{backgroundColor:null}),s};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,s=e.style,o=l({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==s&&(o.style=void 0!==o.style?l({},o.style,s):s),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,s=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===s&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===s&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,s=e.style,o=e.token,r=l({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==s&&(r.style=void 0!==r.style?l({},r.style,s):s),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,s=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],a=[0],s=[e.length],o=0,r=0,i=[],l=[i];r>-1;){for(;(o=a[r]++)<s[r];){var m=void 0,y=t[r],h=n[r][o];if("string"==typeof h?(y=r>0?y:["plain"],m=h):(y=u(y,h.type),h.alias&&(y=u(y,h.alias)),m=h.content),"string"==typeof m){var d=m.split(c),g=d.length;i.push({types:y,content:d[0]});for(var f=1;f<g;f++)p(i),l.push(i=[]),i.push({types:y,content:d[f]})}else r++,t.push(y),n.push(m),a.push(0),s.push(m.length)}r--,t.pop(),n.pop(),a.pop(),s.pop()}return p(i),l}(void 0!==r?t.tokenize(a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=h},247:function(e,t){e.exports={styles:[{types:["comment"],style:{color:"rgb(136, 132, 111)"}},{types:["string","changed"],style:{color:"rgb(230, 219, 116)"}},{types:["punctuation","tag","deleted"],style:{color:"rgb(249, 38, 114)"}},{types:["number","builtin"],style:{color:"rgb(174, 129, 255)"}},{types:["variable"],style:{color:"rgb(248, 248, 242)"}},{types:["function","attr-name","inserted"],style:{color:"rgb(166, 226, 46)"}}]}}}]);
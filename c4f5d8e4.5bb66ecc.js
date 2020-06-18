(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(187),s=n.n(o),l=n(190),i=n(188),c=n(186),u=n(191),p=n(176),m=n.n(p),y=n(2),h=n(177),d=n.n(h),g=n(200),f=n(218),b=n(316),v=n.n(b);var k=function(e){var t=Object(c.a)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,o=Object(a.useState)(!1),s=o[0],l=o[1];Object(a.useEffect)((function(){l(!0)}),[]);var i=Object(g.a)().isDarkTheme,u=n.theme||v.a,p=n.darkTheme||u,m=i?p:u,h=e.lang,b=void 0===h?"yaml":h,k=e.snippet;return r.a.createElement(f.a,Object(y.a)({},f.b,{key:s,theme:m,code:k,language:b}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("pre",{className:t+" "+d.a.codeSnippet,style:n},a.map((function(e,t){return r.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))}))};t.default=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:s()("hero hero--primary",m.a.heroBanner),style:{background:"linear-gradient(to right, #0b2050, #00b7ef, #0b2050)"}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(i.a,{className:s()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:s()(m.a.pitch+" col col--6")},r.a.createElement("h2",null,"Easy to Use"),r.a.createElement("div",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including ",r.a.createElement("a",{href:"https://github.com/kubernetes/minikube"},"Minikube")," and ",r.a.createElement("a",{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),".",r.a.createElement("ul",null,r.a.createElement("li",null,"Require no modification to the deployment logic of the system under test (SUT)"),r.a.createElement("li",null,"Easily orchestrate fault injection behaviors in chaos experiments"),r.a.createElement("li",null,"Hide underlying implementation details so that users can focus on orchestrating the chaos experiments"))),r.a.createElement(k,{snippet:"# Install on Kubernetes \ncurl -sSL https://raw.githubusercontent.com/pingcap/chaos-mesh/master/install.sh | bash",lang:"bash"})),r.a.createElement("div",{className:s()(m.a.pitch+" col col--6")},r.a.createElement("h2",null,"Designed for Kubernetes"),r.a.createElement("p",null,"Chaos Mesh uses ",r.a.createElement("a",{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResourceDefinitions")," (CRD) to define chaos objects. In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."),r.a.createElement("img",{src:"img/chaos-mesh.svg"}))))))}},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(52),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=a[s]++)<r[s];){var m=void 0,y=t[s],h=n[s][o];if("string"==typeof h?(y=s>0?y:["plain"],m=h):(y=p(y,h.type),h.alias&&(y=p(y,h.alias)),m=h.content),"string"==typeof m){var d=m.split(c),g=d.length;l.push({types:y,content:d[0]});for(var f=1;f<g;f++)u(l),i.push(l=[]),l.push({types:y,content:d[f]})}else s++,t.push(y),n.push(m),a.push(0),r.push(m.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=h},316:function(e,t){e.exports={styles:[{types:["comment"],style:{color:"rgb(136, 132, 111)"}},{types:["string","changed"],style:{color:"rgb(230, 219, 116)"}},{types:["punctuation","tag","deleted"],style:{color:"rgb(249, 38, 114)"}},{types:["number","builtin"],style:{color:"rgb(174, 129, 255)"}},{types:["variable"],style:{color:"rgb(248, 248, 242)"}},{types:["function","attr-name","inserted"],style:{color:"rgb(166, 226, 46)"}}]}}}]);
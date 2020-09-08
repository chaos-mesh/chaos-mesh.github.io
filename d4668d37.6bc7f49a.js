(window.webpackJsonp=window.webpackJsonp||[]).push([[80,11,68,78],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(159)),s=n(170),l={id:"get_started_on_kind",title:"Get started on kind"},i={unversionedId:"installation/get_started_on_kind",id:"installation/get_started_on_kind",isDocsHomePage:!1,title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/docs/installation/get_started_on_kind.md",slug:"/installation/get_started_on_kind",permalink:"/docs/next/installation/get_started_on_kind",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/installation/get_started_on_kind.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/installation/installation"},next:{title:"Get started on Minikube",permalink:"/docs/next/installation/get_started_on_minikube"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Clean kind cluster",id:"clean-kind-cluster",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before deployment, make sure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker")," is installed and running on your local machine."),Object(o.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(o.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl"),", ",Object(o.b)("inlineCode",{parentName:"p"},"helm"),", ",Object(o.b)("inlineCode",{parentName:"p"},"kind"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),Object(o.b)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),Object(o.b)("p",null,"You also can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://helm.sh/"}),"helm")," to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/installation/installation#install-by-helm"}),"install Chaos Mesh manually"),"."),Object(o.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(o.b)("p",null,"Verify if the chaos mesh is running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(o.b)("p",null,"Expected output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(o.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(o.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(o.b)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns chaos-testing\n")),Object(o.b)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(y,l(l({ref:t},c),{},{components:n})):a.a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";var r=n(0),a=n(21);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},161:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},162:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),s=n(161),l=n(166),i=n(163),c=n.n(i),u=n(164),p=n.n(u),d=n(160),h=n(165),y=n(48),m=n.n(y),f=/{([\d,-]+)}/,b=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},g=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,u=Object(d.a)().siteConfig.themeConfig.prism,y=void 0===u?{}:u,v=Object(a.useState)(!1),j=v[0],O=v[1],k=Object(a.useState)(!1),x=k[0],N=k[1];Object(a.useEffect)((function(){N(!0)}),[]);var w=Object(a.useRef)(null),E=[],C="",T=Object(h.a)();if(i&&f.test(i)){var P=i.match(f)[1];E=p.a.parse(P).filter((function(e){return e>0}))}i&&g.test(i)&&(C=i.match(g)[0].split("title=")[1].replace(/"+/g,""));var D=n&&n.replace(/language-/,"");!D&&y.defaultLanguage&&(D=y.defaultLanguage);var _=t.replace(/\n$/,"");if(0===E.length&&void 0!==D){for(var S,A="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"]);case"jsx":case"tsx":return b(["js","jsBlock","jsx"]);case"html":return b(["js","jsBlock","html"]);case"python":case"py":return b(["python"]);default:return b()}}(D),M=t.replace(/\n$/,"").split("\n"),B=0;B<M.length;){var R=B+1,I=M[B].match(L);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=R+",";break;case"highlight-start":S=R;break;case"highlight-end":A+=S+"-"+(R-1)+","}M.splice(B,1)}else B+=1}E=p.a.parse(A),_=M.join("\n")}var q=function(){c()(_),O(!0),setTimeout((function(){return O(!1)}),2e3)};return o.a.createElement(l.a,Object(r.a)({},l.b,{key:String(x),theme:T,code:_,language:D}),(function(e){var t,n,a=e.className,l=e.style,i=e.tokens,c=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,C&&o.a.createElement("div",{style:l,className:m.a.codeBlockTitle},C),o.a.createElement("div",{className:m.a.codeBlockContent},o.a.createElement("button",{ref:w,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(m.a.copyButton,(t={},t[m.a.copyButtonWithTitle]=C,t)),onClick:q},j?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(s.a)(a,m.a.codeBlock,(n={},n[m.a.codeBlockWithTitle]=C,n))},o.a.createElement("div",{className:m.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return E.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))}},163:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),s};e.exports=r,e.exports.default=r},164:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],s=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=s);for(var l=n;l!=a;l+=s)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},165:function(e,t,n){"use strict";var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},a=n(160),o=n(167);t.a=function(){var e=Object(a.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(o.a)().isDarkTheme,s=t.theme||r,l=t.darkTheme||s;return n?l:s}},166:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(20),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:r.a,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=i({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var s=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,s=i({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?i({},s.style,a):a),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=r[s]++)<a[s];){var d=void 0,h=t[s],y=n[s][o];if("string"==typeof y?(h=s>0?h:["plain"],d=y):(h=p(h,y.type),y.alias&&(h=p(h,y.alias)),d=y.content),"string"==typeof d){var m=d.split(c),f=m.length;l.push({types:h,content:m[0]});for(var b=1;b<f;b++)u(l),i.push(l=[]),l.push({types:h,content:m[b]})}else s++,t.push(h),n.push(d),r.push(0),a.push(d.length)}s--,t.pop(),n.pop(),r.pop(),a.pop()}return u(l),i}(void 0!==s?t.tokenize(r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=y},167:function(e,t,n){"use strict";var r=n(0),a=n(168);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},168:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(void 0);t.a=a},169:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return s}));var r=n(160);function a(){var e=Object(r.a)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function s(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},170:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(7);var s=function(e){var t=e.children,n=e.fallback;return o.a.canUseDOM&&null!=t?a.a.createElement(a.a.Fragment,null,t()):n||null},l=n(162),i=n(169);t.a=function(e){var t=e.children,n=e.className,r=function(e){var t=e.children;return a.a.createElement("div",{style:{marginBottom:"1.25rem"}},a.a.createElement(l.a,{className:n},t))};return a.a.createElement(s,{fallback:a.a.createElement(r,null,t)},(function(){var e,n,o,s,l=(e=window.location.href,n=Object(i.usePluginData)("docusaurus-plugin-content-docs"),o=n.latestVersionName,"next"===(s=n.versions.filter((function(t){return e.includes(t.path)})).map((function(e){return e.name}))[0])&&(s="latest"),s||o),c="latest"===l?t:t.replace("latest","v"+l);return a.a.createElement(r,null,c)}))}}}]);
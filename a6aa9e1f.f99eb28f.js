(window.webpackJsonp=window.webpackJsonp||[]).push([[72,10,93],{188:function(e,t,a){"use strict";var n=a(2),c=a(0),s=a.n(c),r=a(186),l=a(192),i=a(189),o=a.n(i),u=a(190),h=a.n(u),d=a(185),p=a(191),g=a(48),m=a.n(g),j=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},k=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,i=e.metastring,u=Object(d.a)().siteConfig.themeConfig.prism,g=void 0===u?{}:u,v=Object(c.useState)(!1),b=v[0],y=v[1],B=Object(c.useState)(!1),x=B[0],E=B[1];Object(c.useEffect)((function(){E(!0)}),[]);var O=Object(c.useRef)(null),w=[],N="",C=Object(p.a)();if(i&&j.test(i)){var T=i.match(j)[1];w=h.a.parse(T).filter((function(e){return e>0}))}i&&k.test(i)&&(N=i.match(k)[0].split("title=")[1].replace(/"+/g,""));var L=a&&a.replace(/language-/,"");!L&&g.defaultLanguage&&(L=g.defaultLanguage);var S=t.replace(/\n$/,"");if(0===w.length&&void 0!==L){for(var $,J="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(L),R=t.replace(/\n$/,"").split("\n"),W=0;W<R.length;){var F=W+1,I=R[W].match(P);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":J+=F+",";break;case"highlight-start":$=F;break;case"highlight-end":J+=$+"-"+(F-1)+","}R.splice(W,1)}else W+=1}w=h.a.parse(J),S=R.join("\n")}var q=function(){o()(S),y(!0),setTimeout((function(){return y(!1)}),2e3)};return s.a.createElement(l.a,Object(n.a)({},l.b,{key:String(x),theme:C,code:S,language:L}),(function(e){var t,a,c=e.className,l=e.style,i=e.tokens,o=e.getLineProps,u=e.getTokenProps;return s.a.createElement(s.a.Fragment,null,N&&s.a.createElement("div",{style:l,className:m.a.codeBlockTitle},N),s.a.createElement("div",{className:m.a.codeBlockContent},s.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:Object(r.a)(m.a.copyButton,(t={},t[m.a.copyButtonWithTitle]=N,t)),onClick:q},b?"Copied":"Copy"),s.a.createElement("div",{tabIndex:0,className:Object(r.a)(c,m.a.codeBlock,(a={},a[m.a.codeBlockWithTitle]=N,a))},s.a.createElement("div",{className:m.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=o({line:e,key:t});return w.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),s.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return s.a.createElement("span",Object(n.a)({key:t},u({token:e,key:t})))})))}))))))}))}}}]);
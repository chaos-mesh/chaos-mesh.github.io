(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||r;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(159)),o={id:"sidecar_configmap",title:"Sidecar ConfigMap",sidebar_label:"Sidecar ConfigMap"},c={unversionedId:"user_guides/sidecar_configmap",id:"user_guides/sidecar_configmap",isDocsHomePage:!1,title:"Sidecar ConfigMap",description:"This document guides you to define a specified sidecar ConfigMap for your application.",source:"@site/docs/user_guides/sidecar_configmap.md",slug:"/user_guides/sidecar_configmap",permalink:"/docs/next/user_guides/sidecar_configmap",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/user_guides/sidecar_configmap.md",version:"current",sidebar_label:"Sidecar ConfigMap",sidebar:"docs",previous:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/next/user_guides/experiment_scope"},next:{title:"Sidecar Template",permalink:"/docs/next/user_guides/sidecar_template"}},s=[{value:"Why do we need a specified Sidecar ConfigMap?",id:"why-do-we-need-a-specified-sidecar-configmap",children:[]},{value:"How it works?",id:"how-it-works",children:[]},{value:"Injection Configuration",id:"injection-configuration",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document guides you to define a specified sidecar ConfigMap for your application."),Object(r.b)("h2",{id:"why-do-we-need-a-specified-sidecar-configmap"},"Why do we need a specified Sidecar ConfigMap?"),Object(r.b)("p",null,"Chaos Mesh runs a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/filesystems/fuse.txt"}),"fuse-daemon")," server in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.magalix.com/blog/the-sidecar-pattern"}),"sidecar container")," for implementing file system IOChaos."),Object(r.b)("p",null,"In sidecar container, fuse-daemon needs to mount the data directory of application by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://manpages.ubuntu.com/manpages/bionic/en/man1/fusermount.1.html"}),"fusermount")," before the application starts."),Object(r.b)("h2",{id:"how-it-works"},"How it works?"),Object(r.b)("p",null,"Currently, Chaos Mesh supports two types of ConfigMaps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Template config. The skeleton of each sidecar config is similar, in order to fulfill different requirements and make the configuration simplified,\nChaos Mesh supports creating common templates to be used by different applications. For the details of template configuration, please refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/user_guides/sidecar_template"}),"template config"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Injection config. This configuration will be combined with template config and finally generate a config to inject to the selected pods.\nSince most applications use different data directories, volume name or container name, you can define different parameters based on the common template created in the first step."))),Object(r.b)("h2",{id:"injection-configuration"},"Injection Configuration"),Object(r.b)("p",null,"The following content is an injection ConfigMap defined for tikv:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: chaosfs-tikv\n  namespace: chaos-testing\n  labels:\n    app.kubernetes.io/component: webhook\ndata:\n  chaosfs-tikv: |\n    name: chaosfs-tikv\n    selector:\n      labelSelectors:\n        "app.kubernetes.io/component": "tikv"\n    template: chaosfs-sidecar\n    arguments:\n      ContainerName: "tikv"\n      DataPath: "/var/lib/tikv/data"\n      MountPath: "/var/lib/tikv"\n      VolumeName: "tikv"\n')),Object(r.b)("p",null,"Injection config defines some injection arguments for different applications, and it is based on the common template created beforehand."),Object(r.b)("p",null,"For fields defined in this config, we have some brief descriptions below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"name"),": injection config name, uniquely identifies a injection config in one namespace.\nHowever, you can have the same name in different namespaces so this is useful to implement multi-tenancy."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"selector"),": is used to filter pods to inject sidecar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"template"),': the template config map name used to render the injection config. "chaosfs-sidecar" template is used for injecting fuse-server sidecar.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"arguments"),": the arguments you should define to be used in the template.")),Object(r.b)("p",null,"For more sample ConfigMap files, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/chaosfs-configmap"}),"examples"),"."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/user_guides/iochaos_experiment"}),"IOChaos Document"),"."))}l.isMDXComponent=!0}}]);
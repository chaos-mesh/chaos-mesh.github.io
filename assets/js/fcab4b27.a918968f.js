"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7489],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=t(60795),r=(t(59496),t(49613));const a={},i=void 0,c={unversionedId:"common/verify-installation",id:"version-2.6.0/common/verify-installation",title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.6.0/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/common/verify-installation.md",tags:[],version:"2.6.0",frontMatter:{}},l={},s=[],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-mesh\n")),(0,r.kt)("p",null,"The expected output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,r.kt)("p",null,"If your actual output is similar to the expected output with ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Simulate HTTP faults"},i=void 0,o={unversionedId:"simulate-http-chaos-on-kubernetes",id:"version-2.4.3/simulate-http-chaos-on-kubernetes",title:"Simulate HTTP faults",description:"This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-2.4.3/simulate-http-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-http-chaos-on-kubernetes",permalink:"/docs/2.4.3/simulate-http-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/simulate-http-chaos-on-kubernetes.md",tags:[],version:"2.4.3",frontMatter:{title:"Simulate HTTP faults"},sidebar:"docs",previous:{title:"Simulate GCP Faults",permalink:"/docs/2.4.3/simulate-gcp-chaos"},next:{title:"Simulate Block Device Latency",permalink:"/docs/2.4.3/simulate-block-chaos-on-kubernetes"}},p={},s=[{value:"HTTPChaos introduction",id:"httpchaos-introduction",level:2},{value:"Notes",id:"notes",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using YAML files",id:"create-experiments-using-yaml-files",level:2},{value:"Example of <code>abort</code>",id:"example-of-abort",level:3},{value:"Example of fault combinations",id:"example-of-fault-combinations",level:3},{value:"Field description",id:"field-description",level:2},{value:"Description for common fields",id:"description-for-common-fields",level:3},{value:"Description for <code>target</code>-related fields",id:"description-for-target-related-fields",level:3},{value:"<code>Request</code>-related fields",id:"request-related-fields",level:4},{value:"<code>Respond</code>-related fields",id:"respond-related-fields",level:4},{value:"Specify side",id:"specify-side",level:2},{value:"Client side",id:"client-side",level:3},{value:"Server side",id:"server-side",level:3},{value:"Local debugging",id:"local-debugging",level:2}],d={toc:s};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh."),(0,r.kt)("h2",{id:"httpchaos-introduction"},"HTTPChaos introduction"),(0,r.kt)("p",null,"HTTPChaos is a fault type provided by Chaos Mesh. By creating HTTPChaos experiments, you can simulate the fault scenarios during the HTTP request and response processing. Currently, HTTPChaos supports simulating the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abort"),": interrupts the connection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay"),": injects latency into the request or response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace"),": replaces part of content in HTTP request or response messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patch"),": adds additional content to HTTP request or response messages")),(0,r.kt)("p",null,"HTTPChaos supports combinations of different fault types. If you have configured multiple HTTP fault types at the same time when creating HTTPChaos experiments, the order set to inject the faults when the experiments start running is ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"patch"),". When the ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," fault cause short circuits, the connection will be directly interrupted."),(0,r.kt)("p",null,"For the detailed description of HTTPChaos configuration, see ",(0,r.kt)("a",{parentName:"p",href:"#field-description"},"Field description")," below."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Before injecting the faults supported by HTTPChaos, note the followings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is no control manager of Chaos Mesh running on the target Pod."),(0,r.kt)("li",{parentName:"ul"},"The rules will affect both of clients and servers in the Pod, if you want to affect only one side, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"#specify-side"},"specify side")," section."),(0,r.kt)("li",{parentName:"ul"},"HTTPS accesses should be disabled, because injecting HTTPS connections is not supported currently."),(0,r.kt)("li",{parentName:"ul"},"For HTTPChaos injection to take effect, the client should avoid reusing TCP socket. This is because HTTPChaos does not affect the HTTP requests that are sent via TCP socket before the fault injection."),(0,r.kt)("li",{parentName:"ul"},"Use non-idempotent requests (such as most of the POST requests) with caution in production environments. If such requests are used, the target service may not return to normal status by repeating requests after the fault injection.")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create an experiment",src:n(91490).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"HTTP FAULT")," and select a specific behavior, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"RESPONSE ABORT"),". Then fill out specific configurations."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create HTTP fault",src:n(6642).Z,width:"1085",height:"1219"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."),(0,r.kt)("p",{parentName:"li"},'In the example above, you have configured injecting the "Response abort" fault into all requests of Port 80.'))),(0,r.kt)("h2",{id:"create-experiments-using-yaml-files"},"Create experiments using YAML files"),(0,r.kt)("p",null,"Chaos Mesh also supports using YAML configuration files to create HTTPChaos experiments. In a YAML file, you can simulate either one HTTP fault type or a combination of different HTTP fault types."),(0,r.kt)("h3",{id:"example-of-abort"},"Example of ",(0,r.kt)("inlineCode",{parentName:"h3"},"abort")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experimental configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"http-abort-failure.yaml")," file as the example below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," fault into the specified pod for 5 minutes. During the fault injection, the GET requests sent through port 80 in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api")," path of the target Pod will be interrupted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-abort-failure.yaml\n")))),(0,r.kt)("h3",{id:"example-of-fault-combinations"},"Example of fault combinations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experimental configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"http-failure.yaml")," file as the example below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n")),(0,r.kt)("p",{parentName:"li"},"Based on this configuration example, Chaos Mesh will inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," fault, ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," fault, and ",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," fault consecutively.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-failure.yaml\n")))),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("h3",{id:"description-for-common-fields"},"Description for common fields"),(0,r.kt)("p",null,"Common fields are meaningful when the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," of fault injection is ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible pods)."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration depending on the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies whether the target of fault injuection is ",(0,r.kt)("inlineCode",{parentName:"td"},"Request")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Response"),". The ",(0,r.kt)("a",{parentName:"td",href:"#Description-for-%60target%60-related-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"target"),"-related fields")," should be configured at the same time."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"The TCP port that the target service listens on."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The URI path of the target request. Supports ",(0,r.kt)("a",{parentName:"td",href:"https://www.wikiwand.com/en/Matching_wildcards"},"Matching wildcards"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Takes effect on all paths by default."),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP method of the target request method."),(0,r.kt)("td",{parentName:"tr",align:null},"Takes effect for all methods by default."),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request_headers")),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Matches request headers to the target service."),(0,r.kt)("td",{parentName:"tr",align:null},"Takes effect for all requests by default."),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abort")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether to inject the fault that interrupts the connection."),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the time for a latency fault."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"10s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.headers")),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the key pair used to replace the request headers or response headers."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.body")),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies request body or response body to replace the fault (Base64 encoded)."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"eyJmb28iOiAiYmFyIn0K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.headers")),(0,r.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the attached key pair of the request headers or response headers with patch faults."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"- ","[Set-Cookie, one cookie]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.body.type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of patch faults of the request body or response body. Currently, it only supports ",(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7396"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON")),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.body.value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the fault of the request body or response body with patch faults."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"{"foo": "bar"}"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the duration of a specific experiment."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"30s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the scheduling rules for the time of a specific experiment."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"5 ","*"," ","*"," ","*"," ","*")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When creating experiments with YAML files, ",(0,r.kt)("inlineCode",{parentName:"p"},"replace.body")," must be the base64 encoding of the replacement content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When creating experiments with the Kubernetes API, there is no need to encode the replacement content, just convert it to ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," and put it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpchaos.Spec.Replace.Body")," field. The following is an example:"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'httpchaos.Spec.Replace.Body = []byte(`{"foo": "bar"}`)\n'))),(0,r.kt)("h3",{id:"description-for-target-related-fields"},"Description for ",(0,r.kt)("inlineCode",{parentName:"h3"},"target"),"-related fields"),(0,r.kt)("h4",{id:"request-related-fields"},(0,r.kt)("inlineCode",{parentName:"h4"},"Request"),"-related fields"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," field is a meaningful when the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," during the fault injection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the URI path used to replace content."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v2/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.method")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the replaced content of the HTTP request method."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.queries")),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the replaced key pair of the URI query."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"foo: bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.queries")),(0,r.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the attached key pair of the URI query with patch faults."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"- ","[foo, bar]")))),(0,r.kt)("h4",{id:"respond-related-fields"},(0,r.kt)("inlineCode",{parentName:"h4"},"Respond"),"-related fields"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," is a meaningful when the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," during the fault injection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the status code responded by ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Takes effect for all status codes by default."),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response_headers")),(0,r.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,r.kt)("td",{parentName:"tr",align:null},"Matches request headers to ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Takes effect for all responses by default."),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.code")),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the replaced content of the response status code."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"404")))),(0,r.kt)("h2",{id:"specify-side"},"Specify side"),(0,r.kt)("p",null,"The rules will affect both of clients and servers in the Pod by default, but you can affect only one side by selecting the request headers."),(0,r.kt)("p",null,"This section provides some examples to specify the affected side, you can adjust the header selector in rules depend on your particular cases."),(0,r.kt)("h3",{id:"client-side"},"Client side"),(0,r.kt)("p",null,"To inject faults into clients in the Pod without affecting servers, you can select the request/response by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," header in the request."),(0,r.kt)("p",null,"For example, if you want to interrupt all requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://example.com/"),", you can apply the following YAML config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-client\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: some-http-client\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    Host: 'example.com'\n  abort: true\n")),(0,r.kt)("h3",{id:"server-side"},"Server side"),(0,r.kt)("p",null,"To inject faults into servers in the Pod without affecting clients, you can also select the request/response by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," header in the request."),(0,r.kt)("p",null,"For example, if you want to interrupt all requests to your server behind service ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.nginx.svc"),", you can apply the following YAML config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-server\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    Host: 'nginx.nginx.svc'\n  abort: true\n")),(0,r.kt)("p",null,"In other cases, especially when injecting the inbound request from outside, you may select the request/response by the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Host")," header in the request."),(0,r.kt)("p",null,"For example, if you want to interrupt all requests to your server behind a public gateway ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.host.org"),", you can apply the following YAML config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-server\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    X-Forwarded-Host: 'nginx.host.org'\n  abort: true\n")),(0,r.kt)("h2",{id:"local-debugging"},"Local debugging"),(0,r.kt)("p",null,"If you are not sure of the effects of certain fault injections, you can also test the corresponding features locally using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rs-tproxy"},"rs-tproxy"),". Chaos Mesh also provides HTTPChaos by using rs-tproxy."))}u.isMDXComponent=!0},91490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},6642:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-new-httpchaos-f393051ca1c9c7fc3c5893dd9a024dc5.png"}}]);
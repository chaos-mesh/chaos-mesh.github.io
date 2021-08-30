"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4783],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Simulate HTTP faults",sidebar_label:"Simulate HTTP faults"},o=void 0,p={unversionedId:"simulate-http-chaos-on-kubernetes",id:"version-2.0.1/simulate-http-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate HTTP faults",description:"This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-2.0.1/simulate-http-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-http-chaos-on-kubernetes",permalink:"/docs/simulate-http-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/simulate-http-chaos-on-kubernetes.md",tags:[],version:"2.0.1",frontMatter:{title:"Simulate HTTP faults",sidebar_label:"Simulate HTTP faults"},sidebar:"version-2.0.1/docs",previous:{title:"Simulate GCP Faults",permalink:"/docs/simulate-gcp-chaos"},next:{title:"Chaosd",permalink:"/docs/chaosd-overview"}},s=[{value:"HTTPChaos introduction",id:"httpchaos-introduction",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Create experiments",id:"create-experiments",children:[{value:"Example of <code>abort</code>",id:"example-of-abort",children:[]},{value:"Example of fault combinations",id:"example-of-fault-combinations",children:[]}]},{value:"Field description",id:"field-description",children:[{value:"Description for common fields",id:"description-for-common-fields",children:[]},{value:"Description for <code>target</code>-related fields",id:"description-for-target-related-fields",children:[]}]},{value:"Local debugging",id:"local-debugging",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh."),(0,l.kt)("h2",{id:"httpchaos-introduction"},"HTTPChaos introduction"),(0,l.kt)("p",null,"HTTPChaos is a fault type provided by Chaos Mesh. By creating HTTPChaos experiments, you can simulate the fault scenarios of the HTTP server during the HTTP request and response processing. Currently, HTTPChaos supports simulating the following fault types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abort"),": interrupts server connection"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay"),": injects latency into the target process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace"),": replaces part of content in HTTP request or response messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"patch"),": adds additional content to HTTP request or response messages")),(0,l.kt)("p",null,"HTTPChaos supports combinations of different fault types. If you have configured multiple HTTP fault types at the same time when creating HTTPChaos experiments, the order set to inject the faults when the experiments start running is ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"patch"),". When the ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," fault cause short circuits, the connection will be directly interrupted."),(0,l.kt)("p",null,"For the detailed description of HTTPChaos configuration, see ",(0,l.kt)("a",{parentName:"p",href:"#Field-description"},"Field description")," below."),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("p",null,"Before injecting the faults supported by HTTPChaos, note the followings:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is no control manager of Chaos Mesh running on the target Pod."),(0,l.kt)("li",{parentName:"ul"},"For HTTPChaos injection to take effect, the client should avoid reusing TCP socket. This is because HTTPChaos does not affect the HTTP requests that are sent via TCP socket before the fault injection."),(0,l.kt)("li",{parentName:"ul"},"Use non-idempotent requests (such as most of the POST requests) with caution in production environments. If such requests are used, the target service may not return to normal status by repeating requests after the fault injection.")),(0,l.kt)("h2",{id:"create-experiments"},"Create experiments"),(0,l.kt)("p",null,"Currently, Chaos Mesh only supports using YAML configuration files to create HTTPChaos experiments. In the YAML files, you can simulate either one HTTP fault type or a combination of different HTTP fault types."),(0,l.kt)("h3",{id:"example-of-abort"},"Example of ",(0,l.kt)("inlineCode",{parentName:"h3"},"abort")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Write the experimental configuration to the ",(0,l.kt)("inlineCode",{parentName:"li"},"http-abort-failure.yaml")," file as the example below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n  scheduler:\n    cron: '@every 10m'\n")),(0,l.kt)("p",null,"Based on this configuration example, every 10 minutes, Chaos Mesh will inject the ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," fault into the specified pod for 5 minutes. During the fault injection, the GET requests sent through port 80 in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api")," path of the target Pod will be interrupted."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," to create the experiment:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-abort-failure.yaml\n")),(0,l.kt)("h3",{id:"example-of-fault-combinations"},"Example of fault combinations"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Write the experimental configuration to ",(0,l.kt)("inlineCode",{parentName:"li"},"http-failure.yaml")," file as the example below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n  scheduler:\n    cron: '@every 10m'\n")),(0,l.kt)("p",null,"Based on this configuration example, Chaos Mesh will inject the ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," fault, ",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," fault, and ",(0,l.kt)("inlineCode",{parentName:"p"},"patch")," fault consecutively."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," to create the experiment:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./http-failure.yaml\n")),(0,l.kt)("h2",{id:"field-description"},"Field description"),(0,l.kt)("h3",{id:"description-for-common-fields"},"Description for common fields"),(0,l.kt)("p",null,"Common fields are meaningful when the ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," of fault injection is ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,l.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random pod), ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible pods), ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible pods), ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible pods), and ",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible pods)."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," configuration depending on the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"mode"),"."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies whether the target of fault injuection is ",(0,l.kt)("inlineCode",{parentName:"td"},"Request")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Response"),". The ",(0,l.kt)("a",{parentName:"td",href:"#Description-for-%60target%60-related-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"target"),"-related fields")," should be configured at the same time."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP port that the target service listens on."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The HTTP method of the target request method."),(0,l.kt)("td",{parentName:"tr",align:null},"Takes effect for all methods by default."),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The URI path of the target request which supports ",(0,l.kt)("a",{parentName:"td",href:"https://www.wikiwand.com/en/Matching_wildcards"},"Matching wildcards"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Takes effect on all paths by default."),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches request headers to the target service."),(0,l.kt)("td",{parentName:"tr",align:null},"Takes effect for all requests by default."),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abort"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether to inject the fault that interrupts server connection."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delay"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the time for a latency fault."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.header"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the key pair used to replace the request header or response header."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/xml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.body"),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies request body or response body to replace the fault (Base64 encoded)."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"eyJmb28iOiAiYmFyIn0K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"patch.header"),(0,l.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the attached key pair of the request header or response header with patch faults."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[Set-Cookie, one cookie]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"patch.body.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the type of patch faults of the request body or response body. Currently, it only supports ",(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7396"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON")),"."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"patch.body.value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the fault of the request body or response body with patch faults."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"{"foo": "bar"}"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the duration of a specific experiment."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the scheduling rules for the time of a specific experiment."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"5 ","*"," ","*"," ","*"," ","*")))),(0,l.kt)("h3",{id:"description-for-target-related-fields"},"Description for ",(0,l.kt)("inlineCode",{parentName:"h3"},"target"),"-related fields"),(0,l.kt)("h4",{id:"request-related-fields"},(0,l.kt)("inlineCode",{parentName:"h4"},"Request"),"-related fields"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," field is a meaningful when the ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," during the fault injection."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the URI path used to replace content."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/v2/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the replaced content of the HTTP request method."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.queries"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the replaced key pair of the URI query."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"foo: bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"patch.queries"),(0,l.kt)("td",{parentName:"tr",align:null},"[][]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the attached key pair of the URI query with patch faults."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[foo, bar]")))),(0,l.kt)("h4",{id:"respond-related-fields"},(0,l.kt)("inlineCode",{parentName:"h4"},"Respond"),"-related fields"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Response")," is a meaningful when the ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"Response")," during the fault injection."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the status code responded by ",(0,l.kt)("inlineCode",{parentName:"td"},"target"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Takes effect for all status codes by default."),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_heads"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches request headers to ",(0,l.kt)("inlineCode",{parentName:"td"},"target"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Takes effect for all responses by default."),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace.code"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the replaced content of the response status code."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"404")))),(0,l.kt)("h2",{id:"local-debugging"},"Local debugging"),(0,l.kt)("p",null,"If you are not sure of the effects of certain fault injections, you can also test the corresponding features locally using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rs-tproxy"},"rs-tproxy"),". Chaos Mesh also provides HTTPChaos by using rs-tproxy."))}u.isMDXComponent=!0}}]);
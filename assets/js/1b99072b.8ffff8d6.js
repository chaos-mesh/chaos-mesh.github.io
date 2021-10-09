"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6457],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39655:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"IOChaos Experiment"},m=void 0,s={unversionedId:"chaos_experiments/iochaos",id:"version-1.0.3/chaos_experiments/iochaos",isDocsHomePage:!1,title:"IOChaos Experiment",description:"This document walks you through the IOChaos experiment.",source:"@site/versioned_docs/version-1.0.3/chaos_experiments/iochaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/iochaos",permalink:"/docs/1.0.3/chaos_experiments/iochaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/chaos_experiments/iochaos.md",tags:[],version:"1.0.3",frontMatter:{title:"IOChaos Experiment"},sidebar:"version-1.0.3/docs",previous:{title:"TimeChaos Experiment",permalink:"/docs/1.0.3/chaos_experiments/timechaos"},next:{title:"KernelChaos Experiment",permalink:"/docs/1.0.3/chaos_experiments/kernelchaos"}},p=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[]},{value:"IOChaos available actions",id:"iochaos-available-actions",children:[{value:"latency",id:"latency",children:[]},{value:"fault",id:"fault",children:[]},{value:"attrOverride",id:"attroverride",children:[]}]},{value:"Common Linux system errors",id:"common-linux-system-errors",children:[]},{value:"Available methods",id:"available-methods",children:[]},{value:"Available attributes",id:"available-attributes",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document walks you through the IOChaos experiment."),(0,i.kt)("p",null,"IOChaos allows you to simulate file system faults such as IO delay and read/write errors. It can inject delay and fault when your program is running IO system calls such as ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"read"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"write"),"."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"Below is a sample YAML file of IOChaos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: IoChaos\nmetadata:\n  name: io-delay-example\nspec:\n  action: latency\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: '/var/run/etcd/**/*'\n  delay: '100ms'\n  percent: 50\n  duration: '400s'\n  scheduler:\n    cron: '@every 10m'\n")),(0,i.kt)("p",null,"For more sample files, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sample Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"mode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the mode of the selector."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"one")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"selector")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the pods to be injected with IO chaos."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Represents the IOChaos actions. Refer to ",(0,i.kt)("a",{parentName:"td",href:"#iavailable-actions-for-iochaos"},"Available actions for IOChaos")," for more details."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delay")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"fault")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"attrOverride"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"volumePath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The mount path of the target volume."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"/var/run/etcd"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Specifies the latency of the fault injection. The duration might be a string with a signed sequence of decimal numbers, each with an optional fraction and a unit suffix. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", and "h".'),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"300ms"')," / ",(0,i.kt)("inlineCode",{parentName:"td"},'"2h45m"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"errno")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the error code returned by an IO action. See ",(0,i.kt)("a",{parentName:"td",href:"#common-linux-system-errors"},"common Linux system errors")," for more Linux system error codes."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"attr")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the attribute to be overridden and the corresponding value"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/io-attr-example.yaml"},"examples"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"percent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the probability of injecting errors in percentage."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"100")," (by default)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the path of files for injecting IOChaos actions. It should be a glob for the files which you want to inject fault or delay. It is base on ",(0,i.kt)("a",{parentName:"td",href:"https://www.man7.org/linux/man-pages/man7/glob.7.html"},"glob pattern")," and should be in the volumePath directory."),(0,i.kt)("td",{parentName:"tr",align:"left"},'"/var/run/etcd/',"*","*","/","*",'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"methods")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the IO methods for injecting IOChaos actions. It is represented as an array of string."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"open")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"read")," See the ",(0,i.kt)("a",{parentName:"td",href:"#available-methods"},"available methods")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"duration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Represents the duration of a chaos action. The duration might be a string with the signed sequence of decimal numbers, each with an optional fraction and a unit suffix."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"300ms"')," / ",(0,i.kt)("inlineCode",{parentName:"td"},'"2h45m"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"scheduler")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the scheduler rules for the running time of the chaos experiment."),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"))))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Assume that you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/io-mixed-example.yaml"),", you can run the following command to create a chaos experiment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f examples/io-mixed-example.yaml\n")),(0,i.kt)("h2",{id:"iochaos-available-actions"},"IOChaos available actions"),(0,i.kt)("p",null,"IOChaos currently supports the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"latency"),": IO latency action. You can specify the latency before the IO operation returns a result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fault"),": IO fault action. In this mode, IO operations returns an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attrOverride"),": Override attributes of a file.")),(0,i.kt)("h3",{id:"latency"},"latency"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"latency")," action, you can edit the specification as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: latency\n  delay: '1ms'\n")),(0,i.kt)("p",null,"It will inject a latency of 1ms into the selected methods."),(0,i.kt)("h3",{id:"fault"},"fault"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fault")," action, you can edit the specification as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: fault\n  errno: 32\n")),(0,i.kt)("p",null,"The selected methods return error 32, which means ",(0,i.kt)("inlineCode",{parentName:"p"},"broken pipe"),"."),(0,i.kt)("h3",{id:"attroverride"},"attrOverride"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"attrOverride")," mode, you can edit the specification as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  action: attrOverride\n  attr:\n    perm: 72\n")),(0,i.kt)("p",null,"Then the permission of selected files will be overridden with 110 in octal, which means the files cannot be read or modified (without CAP_DAC_OVERRIDE). See ",(0,i.kt)("a",{parentName:"p",href:"#available-attributes"},"available attributes")," for a list of all possible attributes to override."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"Attributes could be cached by Linux kernel, so it might have no effect if your program had accessed it before.")),(0,i.kt)("h2",{id:"common-linux-system-errors"},"Common Linux system errors"),(0,i.kt)("p",null,"Common Linux system errors are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": Operation not permitted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": No such file or directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5"),": I/O error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6"),": No such device or address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"12"),": Out of memory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"16"),": Device or resource busy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"17"),": File exists"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"20"),": Not a directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"22"),": Invalid argument"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"24"),": Too many open files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"28"),": No space left on device")),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/torvalds/linux/master/include/uapi/asm-generic/errno-base.h"},"related header files")," for more information."),(0,i.kt)("h2",{id:"available-methods"},"Available methods"),(0,i.kt)("p",null,"Available methods are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lookup"),(0,i.kt)("li",{parentName:"ul"},"forget"),(0,i.kt)("li",{parentName:"ul"},"getattr"),(0,i.kt)("li",{parentName:"ul"},"setattr"),(0,i.kt)("li",{parentName:"ul"},"readlink"),(0,i.kt)("li",{parentName:"ul"},"mknod"),(0,i.kt)("li",{parentName:"ul"},"mkdir"),(0,i.kt)("li",{parentName:"ul"},"unlink"),(0,i.kt)("li",{parentName:"ul"},"rmdir"),(0,i.kt)("li",{parentName:"ul"},"symlink"),(0,i.kt)("li",{parentName:"ul"},"rename"),(0,i.kt)("li",{parentName:"ul"},"link"),(0,i.kt)("li",{parentName:"ul"},"open"),(0,i.kt)("li",{parentName:"ul"},"read"),(0,i.kt)("li",{parentName:"ul"},"write"),(0,i.kt)("li",{parentName:"ul"},"flush"),(0,i.kt)("li",{parentName:"ul"},"release"),(0,i.kt)("li",{parentName:"ul"},"fsync"),(0,i.kt)("li",{parentName:"ul"},"opendir"),(0,i.kt)("li",{parentName:"ul"},"readdir"),(0,i.kt)("li",{parentName:"ul"},"releasedir"),(0,i.kt)("li",{parentName:"ul"},"fsyncdir"),(0,i.kt)("li",{parentName:"ul"},"statfs"),(0,i.kt)("li",{parentName:"ul"},"setxattr"),(0,i.kt)("li",{parentName:"ul"},"getxattr"),(0,i.kt)("li",{parentName:"ul"},"listxattr"),(0,i.kt)("li",{parentName:"ul"},"removexattr"),(0,i.kt)("li",{parentName:"ul"},"access"),(0,i.kt)("li",{parentName:"ul"},"create"),(0,i.kt)("li",{parentName:"ul"},"getlk"),(0,i.kt)("li",{parentName:"ul"},"setlk"),(0,i.kt)("li",{parentName:"ul"},"bmap")),(0,i.kt)("h2",{id:"available-attributes"},"Available attributes"),(0,i.kt)("p",null,"Available attributes and the meaning of them are listed here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ino"),", inode of a file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size"),", total size, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocks"),", number of 512B blocks allocated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"atime"),", time of last access"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mtime"),", time of last modification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctime"),", time of last status change"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind"),", file type. It can be ",(0,i.kt)("inlineCode",{parentName:"li"},"namedPipe"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"charDevice"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"blockDevice"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"directory"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"regularFile"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"symlink")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"socket")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"perm"),", permission of a file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nlink"),", number of hard links"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid"),", user id of owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gid"),", group id of owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rdev"),", device ID (if special file)")))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{162:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,O=p["".concat(b,".").concat(d)]||p[d]||s[d]||i;return a?r.a.createElement(O,l(l({ref:t},o),{},{components:a})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),i=(a(0),a(162)),b={id:"iochaos_experiment",title:"IOChaos Experiment",sidebar_label:"IOChaos Experiment"},l={unversionedId:"user_guides/iochaos_experiment",id:"user_guides/iochaos_experiment",isDocsHomePage:!1,title:"IOChaos Experiment",description:"This document walks you through the IOChaos experiment.",source:"@site/docs/user_guides/io_chaos.md",slug:"/user_guides/iochaos_experiment",permalink:"/docs/next/user_guides/iochaos_experiment",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/user_guides/io_chaos.md",version:"current",sidebar_label:"IOChaos Experiment",sidebar:"docs",previous:{title:"TimeChaos Experiment",permalink:"/docs/next/user_guides/timechaos_experiment"},next:{title:"KernelChaos Experiment",permalink:"/docs/next/user_guides/kernelchaos_experiment"}},c=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Usage",id:"usage",children:[]},{value:"IOChaos available actions",id:"iochaos-available-actions",children:[{value:"delay",id:"delay",children:[]},{value:"fault",id:"fault",children:[]},{value:"attrOverride",id:"attroverride",children:[]}]},{value:"Common Linux system errors",id:"common-linux-system-errors",children:[]},{value:"Available methods",id:"available-methods",children:[]},{value:"Available attributes",id:"available-attributes",children:[]}],o={rightToc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document walks you through the IOChaos experiment."),Object(i.b)("p",null,"IOChaos allows you to simulate file system faults such as IO delay and read/write errors. It can inject delay and fault when your program is running IO system calls such as ",Object(i.b)("inlineCode",{parentName:"p"},"open"),", ",Object(i.b)("inlineCode",{parentName:"p"},"read"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"write"),"."),Object(i.b)("h2",{id:"configuration-file"},"Configuration file"),Object(i.b)("p",null,"Below is a sample YAML file of IOChaos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: chaos-mesh.org/v1alpha1\nkind: IoChaos\nmetadata:\n  name: io-delay-example\nspec:\n  action: latency\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: "/var/run/etcd/**/*"\n  delay: "100ms"\n  percent: 50\n  duration: "400s"\n  scheduler:\n    cron: "@every 10m"\n')),Object(i.b)("p",null,"For more sample files, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"}),"examples"),". You can edit them as needed."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Sample Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"mode")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the mode of the selector."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"one")," / ",Object(i.b)("inlineCode",{parentName:"td"},"all")," / ",Object(i.b)("inlineCode",{parentName:"td"},"fixed")," / ",Object(i.b)("inlineCode",{parentName:"td"},"fixed-percent")," / ",Object(i.b)("inlineCode",{parentName:"td"},"random-max-percent"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"selector")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the pods to be injected with IO chaos."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"action")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the IOChaos actions. Refer to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#iavailable-actions-for-iochaos"}),"Available actions for IOChaos")," for more details."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"delay")," / ",Object(i.b)("inlineCode",{parentName:"td"},"fault")," / ",Object(i.b)("inlineCode",{parentName:"td"},"attrOverride"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"volumePath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The mount path of the target volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"/var/run/etcd"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"delay")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Specifies the latency of the fault injection. The duration might be a string with a signed sequence of decimal numbers, each with an optional fraction and a unit suffix. Valid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", and "h".'),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"300ms"')," / ",Object(i.b)("inlineCode",{parentName:"td"},'"2h45m"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"errno")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the error code returned by an IO action. See ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#common-linux-system-errors"}),"common Linux system errors")," for more Linux system error codes."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"attr")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the attribute to be overridden and the corresponding value"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/io-attr-example.yaml"}),"examples"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"percent")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the probability of injecting errors in percentage."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"100")," (by default)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"path")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the path of files for injecting IOChaos actions. It should be a glob for the files which you want to inject fault or delay."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"/var/run/etcd/*',"*","/","*",'"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"methods")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the IO methods for injecting IOChaos actions. It is represented as an array of string."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"open")," / ",Object(i.b)("inlineCode",{parentName:"td"},"read")," See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#available-methods"}),"available methods")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"duration")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the duration of a chaos action. The duration might be a string with the signed sequence of decimal numbers, each with an optional fraction and a unit suffix."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"300ms"')," / ",Object(i.b)("inlineCode",{parentName:"td"},'"2h45m"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"scheduler")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the scheduler rules for the running time of the chaos experiment."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/github.com/robfig/cron"}),"robfig/cron"))))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Assume that you are using ",Object(i.b)("inlineCode",{parentName:"p"},"examples/io-mixed-example.yaml"),", you can run the following command to create a chaos experiment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f examples/io-mixed-example.yaml\n")),Object(i.b)("h2",{id:"iochaos-available-actions"},"IOChaos available actions"),Object(i.b)("p",null,"IOChaos currently supports the following actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"delay"),": IO delay action. You can specify the latency before the IO operation returns a result."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fault"),": IO fault action. In this mode, IO operations returns an error."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"attrOverride"),": Override attributes of a file.")),Object(i.b)("h3",{id:"delay"},"delay"),Object(i.b)("p",null,"If you are using the ",Object(i.b)("inlineCode",{parentName:"p"},"delay")," action, you can edit the specification as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  action: delay\n  delay: "1ms"\n')),Object(i.b)("p",null,"It will inject a latency of 1ms into the selected methods."),Object(i.b)("h3",{id:"fault"},"fault"),Object(i.b)("p",null,"If you are using the ",Object(i.b)("inlineCode",{parentName:"p"},"fault")," action, you can edit the specification  as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  action: fault\n  errno: 32\n")),Object(i.b)("p",null,"The selected methods return error 32, which means ",Object(i.b)("inlineCode",{parentName:"p"},"broken pipe"),"."),Object(i.b)("h3",{id:"attroverride"},"attrOverride"),Object(i.b)("p",null,"If you are using the ",Object(i.b)("inlineCode",{parentName:"p"},"attrOverride")," mode, you can edit the specification as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  action: attrOverride\n  attr:\n    perm: 72\n")),Object(i.b)("p",null,"Then the permission of selected files will be overridden with 110 in octal, which means the files cannot be read or modified (without CAP_DAC_OVERRIDE). See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#available-attributes"}),"available attributes")," for a list of all possible attributes to override."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"**Note:"),Object(i.b)("p",{parentName:"blockquote"},"Attributes could be cached by Linux kernel, so it might have no effect if your program had accessed it before.**")),Object(i.b)("h2",{id:"common-linux-system-errors"},"Common Linux system errors"),Object(i.b)("p",null,"Common Linux system errors are as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),": Operation not permitted"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2"),": No such file or directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"5"),": I/O error"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"6"),": No such device or address"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"12"),": Out of memory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"16"),": Device or resource busy"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"17"),": File exists"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"20"),": Not a directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"22"),": Invalid argument"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"24"),": Too many open files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"28"),": No space left on device")),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/torvalds/linux/master/include/uapi/asm-generic/errno-base.h"}),"related header files")," for more information."),Object(i.b)("h2",{id:"available-methods"},"Available methods"),Object(i.b)("p",null,"Available methods are as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"lookup"),Object(i.b)("li",{parentName:"ul"},"forget"),Object(i.b)("li",{parentName:"ul"},"getattr"),Object(i.b)("li",{parentName:"ul"},"setattr"),Object(i.b)("li",{parentName:"ul"},"readlink"),Object(i.b)("li",{parentName:"ul"},"mknod"),Object(i.b)("li",{parentName:"ul"},"mkdir"),Object(i.b)("li",{parentName:"ul"},"unlink"),Object(i.b)("li",{parentName:"ul"},"rmdir"),Object(i.b)("li",{parentName:"ul"},"symlink"),Object(i.b)("li",{parentName:"ul"},"rename"),Object(i.b)("li",{parentName:"ul"},"link"),Object(i.b)("li",{parentName:"ul"},"open"),Object(i.b)("li",{parentName:"ul"},"read"),Object(i.b)("li",{parentName:"ul"},"write"),Object(i.b)("li",{parentName:"ul"},"flush"),Object(i.b)("li",{parentName:"ul"},"release"),Object(i.b)("li",{parentName:"ul"},"fsync"),Object(i.b)("li",{parentName:"ul"},"opendir"),Object(i.b)("li",{parentName:"ul"},"readdir"),Object(i.b)("li",{parentName:"ul"},"releasedir"),Object(i.b)("li",{parentName:"ul"},"fsyncdir"),Object(i.b)("li",{parentName:"ul"},"statfs"),Object(i.b)("li",{parentName:"ul"},"setxattr"),Object(i.b)("li",{parentName:"ul"},"getxattr"),Object(i.b)("li",{parentName:"ul"},"listxattr"),Object(i.b)("li",{parentName:"ul"},"removexattr"),Object(i.b)("li",{parentName:"ul"},"access"),Object(i.b)("li",{parentName:"ul"},"create"),Object(i.b)("li",{parentName:"ul"},"getlk"),Object(i.b)("li",{parentName:"ul"},"setlk"),Object(i.b)("li",{parentName:"ul"},"bmap")),Object(i.b)("h2",{id:"available-attributes"},"Available attributes"),Object(i.b)("p",null,"Available attributes and the meaning of them are listed here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ino"),", inode of a file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size"),", total size, in bytes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"blocks"),", number of 512B blocks allocated"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"atime"),", time of last access"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mtime"),", time of last modification"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ctime"),", time of last status change"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"kind"),", file type. It can be ",Object(i.b)("inlineCode",{parentName:"li"},"namedPipe"),", ",Object(i.b)("inlineCode",{parentName:"li"},"charDevice"),", ",Object(i.b)("inlineCode",{parentName:"li"},"blockDevice"),", ",Object(i.b)("inlineCode",{parentName:"li"},"directory"),", ",Object(i.b)("inlineCode",{parentName:"li"},"regularFile"),", ",Object(i.b)("inlineCode",{parentName:"li"},"symlink")," or ",Object(i.b)("inlineCode",{parentName:"li"},"socket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"perm"),", permission of a file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nlink"),", number of hard links"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"uid"),", user id of owner"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gid"),", group id of owner"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rdev"),", device ID (if special file)")))}m.isMDXComponent=!0}}]);
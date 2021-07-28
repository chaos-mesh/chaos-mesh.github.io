(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1952],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"awschaos_experiment",title:"AwsChaos Experiment",sidebar_label:"AwsChaos Experiment"},s={unversionedId:"chaos_experiments/awschaos_experiment",id:"version-1.2.3/chaos_experiments/awschaos_experiment",isDocsHomePage:!1,title:"AwsChaos Experiment",description:"This document introduces how to create AwsChaos experiments.",source:"@site/versioned_docs/version-1.2.3/chaos_experiments/aws_chaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/awschaos_experiment",permalink:"/docs/chaos_experiments/awschaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/chaos_experiments/aws_chaos.md",version:"1.2.3",sidebar_label:"AwsChaos Experiment",frontMatter:{id:"awschaos_experiment",title:"AwsChaos Experiment",sidebar_label:"AwsChaos Experiment"},sidebar:"version-1.2.3/docs",previous:{title:"DNSChaos Experiment",permalink:"/docs/chaos_experiments/dnschaos_experiment"},next:{title:"Network latency simulation across multiple data centers",permalink:"/docs/use_cases/multi_data_centers"}},c=[{value:"Secret file",id:"secret-file",children:[]},{value:"<code>ec2-stop</code> configuration file",id:"ec2-stop-configuration-file",children:[]},{value:"<code>ec2-restart</code> configuration file",id:"ec2-restart-configuration-file",children:[]},{value:"<code>detach-volume</code> configuration file",id:"detach-volume-configuration-file",children:[]},{value:"Fields description",id:"fields-description",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document introduces how to create AwsChaos experiments."),(0,i.kt)("p",null,"AwsChaos can help you inject faults into the specified AWS Instance, specifically ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-stop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-restart")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"detach-volume"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ec2 Stop")," action periodically stops the specified ec2 instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ec2 Restart")," action periodically reboots the specified ec2 instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Detach Volume")," action detaches the storage volume from the specified ec2 instance."))),(0,i.kt)("h2",{id:"secret-file"},"Secret file"),(0,i.kt)("p",null,"In order to facilitate the connection to the AWS cluster, you can first create a kubernetes secret file to store related information (such as access key id)."),(0,i.kt)("p",null,"Below is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-testing\ntype: Opaque\nstringData:\n  aws_access_key_id: your-aws-access-key-id\n  aws_secret_access_key: your-aws-secret-access-key\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," defines the name of kubernetes secret."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"namespace")," defines the namespace of kubernetes secret."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"aws_access_key_id")," stores your AWS access key id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"aws_secret_access_key")," stores your AWS secret access key.")),(0,i.kt)("h2",{id:"ec2-stop-configuration-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"ec2-stop")," configuration file"),(0,i.kt)("p",null,"Below is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-stop")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AwsChaos\nmetadata:\n  name: ec2-stop-example\n  namespace: chaos-testing\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  duration: '5m'\n  scheduler:\n    cron: '@every 10m'\n")),(0,i.kt)("p",null,"For more details about stopping ec2 instance, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html"},"docs"),"."),(0,i.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,i.kt)("a",{parentName:"p",href:"#fields-description"},(0,i.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,i.kt)("h2",{id:"ec2-restart-configuration-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"ec2-restart")," configuration file"),(0,i.kt)("p",null,"Below is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-restart")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AwsChaos\nmetadata:\n  name: ec2-restart-example\n  namespace: chaos-testing\nspec:\n  action: ec2-restart\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  duration: '5m'\n  scheduler:\n    cron: '@every 10m'\n")),(0,i.kt)("p",null,"For more details about rebooting ec2 instance, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-reboot.html"},"docs"),"."),(0,i.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,i.kt)("a",{parentName:"p",href:"#fields-description"},(0,i.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,i.kt)("h2",{id:"detach-volume-configuration-file"},(0,i.kt)("inlineCode",{parentName:"h2"},"detach-volume")," configuration file"),(0,i.kt)("p",null,"Below is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"detach-volume")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: AwsChaos\nmetadata:\n  name: ec2-detach-volume-example\n  namespace: chaos-testing\nspec:\n  action: ec2-stop\n  secretName: 'cloud-key-secret'\n  awsRegion: 'us-east-2'\n  ec2Instance: 'your-ec2-instance-id'\n  volumeID: 'your-volume-id'\n  deviceName: '/dev/sdf'\n  duration: '5m'\n  scheduler:\n    cron: '@every 10m'\n")),(0,i.kt)("p",null,"For more details about detaching an Amazon EBS volume, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html"},"docs"),"."),(0,i.kt)("p",null,"For a detailed description of each field in the configuration template, see ",(0,i.kt)("a",{parentName:"p",href:"#fields-description"},(0,i.kt)("inlineCode",{parentName:"a"},"Fields description")),"."),(0,i.kt)("h2",{id:"fields-description"},"Fields description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"action")," defines the specific chaos action for the AWS instance. Supported action: ",(0,i.kt)("inlineCode",{parentName:"li"},"ec2-stop")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"ec2-restart")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"detach-volume"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secretName")," defines the kubernetes secret name used to store AWS information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"awsRegion")," defines the AWS region."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ec2Instance")," indicates the ID of the ec2 instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"volumeID")," is needed in ",(0,i.kt)("inlineCode",{parentName:"li"},"detach-volume")," action. It indicates the ID of the EBS volume."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deviceName")," is needed in ",(0,i.kt)("inlineCode",{parentName:"li"},"detach-volume")," action. It indicates the name of the device."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"duration")," defines the duration for each chaos experiment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scheduler")," defines the scheduler rules for the running time of the chaos experiment. For more rule information, see ",(0,i.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/robfig/cron"},"robfig/cron"),".")))}p.isMDXComponent=!0}}]);
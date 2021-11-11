"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4195],{91262:function(e,t,a){var n=a(67294),i=a(72389);t.Z=function(e){var t=e.children,a=e.fallback;return(0,i.Z)()&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},56871:function(e,t,a){a.d(t,{p:function(){return l}});var n=a(91262),i=a(16213),s=a(67294),r=a(52263),o=a(28084),l=function(e,t){var a=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";var i=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||i};t.Z=function(e){var t=e.children,a=e.className,m=void 0===a?"language-bash":a,c=(0,r.Z)().siteConfig,g=(0,o.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(n.Z,null,(function(){var e=l(c,g),a="latest"===e?t:t.replace("latest","v"+e);return s.createElement(i.Z,{className:m},a)}))}},8622:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(46254),i=a(36742),s=a(56871),r=a(67294),o=a(24973),l=a(86010),m="heroLogoWrapper_MNlE",c="heroLogo_17HU",g="heroTitle_3Th-",h="feature_2oFu",u="featureReverse_3dMY",d="featureImage_3Q9E",p="featureContent_2GO9",f="whiteboard_vzcT",E="whiteboardCol_3_EW",w="logoWrapper_9Ypb",v="cncfLogo_q9cW",b=a(44996),y=a(52263),k=[{name:"APISIX",img:"img/logos/apisix.svg",href:"https://apisix.apache.org/",style:{height:"80%"}},{name:"Authzed",img:"img/logos/authzed.svg",href:"https://authzed.com/"},{name:"ByteDance",img:"img/logos/bytedance.svg",href:"https://www.bytedance.com/"},{name:"Celo",img:"img/logos/celo.png",href:"https://celo.org/"},{name:"China Everbright Bank",img:"img/logos/cebbank.png",href:"https://www.cebbank.com/"},{name:"Dailymotion",img:"img/logos/dailymotion.svg",href:"https://www.dailymotion.com/"},{name:"DataStax",img:"img/logos/datastax.svg",href:"https://www.datastax.com/"},{name:"Digital China",img:"img/logos/digitalchina.jpeg",href:"http://www.digitalchina.com/"},{name:"Fuxi Lab",img:"img/logos/fuxilab.png",href:"https://fuxi.163.com/"},{name:"juiceFS",img:"img/logos/juicefs.svg",href:"https://juicefs.com/"},{name:"KingNet",img:"img/logos/kingnet.png",href:"https://www.kingnet.com/",style:{marginBottom:"1rem"}},{name:"Meituan Dianping",img:"img/logos/meituandianping.png",href:"https://about.meituan.com/"},{name:"NETSTARS",img:"img/logos/netstars.png",href:"https://www.netstars.co.jp/"},{name:"Percona",img:"img/logos/percona.jpeg",href:"https://www.percona.com/"},{name:"PingCAP",img:"img/logos/pingcap.svg",href:"https://pingcap.com/"},{name:"Pulsar",img:"img/logos/pulsar.svg",href:"https://pulsar.apache.org/"},{name:"Qihoo 360",img:"img/logos/qihoo360.png",href:"http://www.360totalsecurity.com/"},{name:"Qiniu Cloud",img:"img/logos/qiniucloud.png",href:"https://www.qiniu.com/"},{name:"RabbitMQ",img:"img/logos/rabbitmq.svg",href:"https://www.rabbitmq.com/"},{name:"S.J. Distributors",img:"img/logos/sj.png",href:"https://www.sjfood.com/",style:{width:"40%"}},{name:"Tencent",img:"img/logos/tencent.png",href:"https://www.tencent.com/"},{name:"Vald",img:"img/logos/vald.svg",href:"https://vald.vdaas.org/",style:{height:"50%"}},{name:"WeBank",img:"img/logos/webank.png",href:"https://www.webank.com/"},{name:"Xpeng",img:"img/logos/xpeng.png",href:"https://www.xiaopeng.com/"}];function _(e){var t=e.imgUrl,a=e.title,n=e.description,i=e.reverse;return r.createElement("div",{className:(0,l.Z)("row",h,i&&u)},r.createElement("div",{className:"col col--6 text--center"},r.createElement("img",{className:d,src:(0,b.Z)(t),alt:a})),r.createElement("div",{className:(0,l.Z)("col col--6",p)},r.createElement("div",null,r.createElement("h3",null,a),r.createElement("div",null,n))))}var Z=function(){var e=(0,y.Z)().siteConfig;return r.createElement(n.Z,{title:e.tagline,description:e.tagline},r.createElement("main",null,r.createElement("div",{className:"hero"},r.createElement("div",{className:"container text--center"},r.createElement("div",{className:m},r.createElement("img",{className:c,src:(0,b.Z)("img/logos/logo-mini.svg"),alt:"Chaos Mesh"})),r.createElement("h1",{className:(0,l.Z)("hero__title",g)},e.title),r.createElement("p",{className:"hero__subtitle"},r.createElement(o.Z,{id:"siteConfig.tagline"},e.tagline)))),r.createElement("div",{className:"hero"},r.createElement("div",{className:"container text--center"},r.createElement("h2",{className:"hero__subtitle"},r.createElement(o.Z,{id:"home.quickstart"},"Start By One Line")),r.createElement(s.Z,null,"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"))),r.createElement("div",{className:"hero"},r.createElement("div",{className:"container"},r.createElement(_,{imgUrl:"img/features/undraw_server_down_s4lk.svg",title:r.createElement(o.Z,{id:"home.easytouse"},"Easy to Use"),description:r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(o.Z,{id:"home.easytouse.1",values:{minikube:r.createElement(i.Z,{to:"https://minikube.sigs.k8s.io/"},"minikube"),kind:r.createElement(i.Z,{to:"https://kind.sigs.k8s.io/"},"kind")}},"No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.")),r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Z,{id:"home.easytouse.2"},"Ability to perform chaos experiments in production environments without modifying the deployment logic of the application.")),r.createElement("li",null,r.createElement(o.Z,{id:"home.easytouse.3"},"Easily orchestrate the behavior of chaos experiments, allowing users to observe the state of the experiment itself in real time and quickly rollback any injected failures.")),r.createElement("li",null,r.createElement(o.Z,{id:"home.easytouse.4"},"Packed with dashboard. No handwritten experiment definitions are required, and a chaos experiment can be run smoothly in just a few clicks."))))}),r.createElement(_,{imgUrl:"img/logos/kubernetes.svg",title:r.createElement(o.Z,{id:"home.k8s"},"Design for Kubernetes"),description:r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(o.Z,{id:"home.k8s.1",values:{crd:r.createElement(i.Z,{to:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResourceDefinition (CRD)")}},"Chaos Mesh uses {crd} to define chaos experiments.")),r.createElement("p",null,r.createElement(o.Z,{id:"home.k8s.2"},"In the Kubernetes realm, CRD is a proven solution for implementing custom resources. CRD enables the natural integration of Chaos Mesh with the Kubernetes ecosystem."))),reverse:!0}),r.createElement(_,{imgUrl:"img/features/undraw_Operating_system_re_iqsc.svg",title:r.createElement(o.Z,{id:"home.failuretypes"},"A wide variety of failure types"),description:r.createElement("p",null,r.createElement(o.Z,{id:"home.failuretypes.1"},"Chaos Mesh initially started from a distributed system perspective, fully considering the possible failures of distributed systems, thus providing a more comprehensive and fine-grained fault type to help users with fault injection for network, disk, file system, operating system, etc. in a comprehensive manner."))}),r.createElement(_,{imgUrl:"img/features/undraw_Security_on_re_e491.svg",title:r.createElement(o.Z,{id:"home.safe"},"Safe and Controllable"),description:r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(o.Z,{id:"home.safe.1"},"Chaos Mesh provides role-based access control. Users can create roles with corresponding permissions according to their needs, such as visitor roles, administrative roles, etc.")),r.createElement("p",null,r.createElement(o.Z,{id:"home.safe.2"},'In addition, Chaos Mesh supports setting up Namespace whitelists and blacklists, which allow users to protect important Namespaces and thus gain greater control over the "blast radius" of experiments.'))),reverse:!0}))),r.createElement("div",{className:"hero"},r.createElement("div",{className:"container text--center"},r.createElement("h2",{className:"hero__subtitle"},r.createElement(o.Z,{id:"home.whoisusing"},"Who is Using Chaos Mesh")),r.createElement("div",{className:f},r.createElement("div",{className:"row"},k.map((function(e){return r.createElement("div",{key:e.name,className:(0,l.Z)("col col--3",E)},r.createElement("a",{className:w,href:e.href,target:"_blank"},r.createElement("img",{style:e.style,src:(0,b.Z)(e.img),alt:e.name})))})))))),r.createElement("div",{className:"hero"},r.createElement("div",{className:"container text--center"},r.createElement("h2",{className:"hero__subtitle"},"Chaos Mesh is a ",r.createElement(i.Z,{to:"https://cncf.io/"},"Cloud Native Computing Foundation")," sandbox project"),r.createElement("div",{className:(0,l.Z)("cncf-logo",v)})))))}}}]);
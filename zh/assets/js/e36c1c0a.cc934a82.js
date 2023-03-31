"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2378],{29505:(e,s,t)=>{t.d(s,{Z:()=>m});var a=t(34579),n=t(67874),o=t(42178),r=t(30682),i=t(50959),l=t(16682),d=t.n(l),h=t(87004);const m=e=>{let{children:s,className:t="language-bash"}=e;const{siteConfig:l}=(0,n.Z)(),{versions:m}=(0,o.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=(0,h.p)(l,m),a="latest"===e?"":`--version ${(e=>{if(d().satisfies(e,">=2.0.3"))return e;const s=e.slice(0,3);return"v"+(parseFloat(s)-.7).toFixed(1)+e.slice(3)})(e)}`;return i.createElement(r.Z,{className:t},s.replace("--version latest",a).trim())}))}},87004:(e,s,t)=>{t.d(s,{Z:()=>d,p:()=>l});var a=t(34579),n=t(67874),o=t(42178),r=t(30682),i=t(50959);const l=(e,s)=>{const t=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&a)return"current"===a?"latest":a;if(t.includes("/docs/next"))return"latest";const n=s.find((e=>e.isLast)),o=s.find((e=>t.includes(e.name)));return o?o.name:n.name};const d=e=>{let{children:s,replaced:t="latest",isArchive:d=!1,className:h="language-bash"}=e;const{siteConfig:m}=(0,n.Z)(),{versions:c}=(0,o.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=l(m,c),a=d?s.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?s:s.replace(t,"v"+e);return i.createElement(r.Z,{className:h},a)}))}},70650:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=t(51163),n=(t(50959),t(17942)),o=t(29505);const r={title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"},i=void 0,l={unversionedId:"persistence-dashboard",id:"version-2.5.1/persistence-dashboard",title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/persistence-dashboard.md",sourceDirName:".",slug:"/persistence-dashboard",permalink:"/zh/docs/persistence-dashboard",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/persistence-dashboard.md",tags:[],version:"2.5.1",frontMatter:{title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"},sidebar:"docs",previous:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/offline-installation"},next:{title:"\u5378\u8f7d Chaos Mesh",permalink:"/zh/docs/uninstallation"}},d={},h=[{value:"SQLite\uff08\u9ed8\u8ba4\u5b58\u50a8\uff09",id:"sqlite\u9ed8\u8ba4\u5b58\u50a8",level:2},{value:"MySQL",id:"mysql",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4",id:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4",level:2}],m={toc:h},c="wrapper";function p(e){let{components:s,...t}=e;return(0,n.kt)(c,(0,a.Z)({},m,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e\u3002"),(0,n.kt)("p",null,"Chaos Dashboard \u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLite"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," \u4f5c\u4e3a\u540e\u7aef\u6570\u636e\u5b58\u50a8\u3002"),(0,n.kt)("h2",{id:"sqlite\u9ed8\u8ba4\u5b58\u50a8"},"SQLite\uff08\u9ed8\u8ba4\u5b58\u50a8\uff09"),(0,n.kt)("p",null,"Chaos Dashboard \u9ed8\u8ba4\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLite")," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u5e76\u63a8\u8350\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLite")," \u914d\u7f6e\u5355\u72ec\u7684",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/"},"\u6301\u4e45\u5377 (PV)")," \u3002\u5982\u9700\u8981\u914d\u7f6e PV\uff0c\u8bf7\u5728\u5b89\u88c5\u7684\u65f6\u5019\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.persistentVolume.enabled")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," \u548c\u8bbe\u7f6e\u5176\u4ed6 PV \u76f8\u5173\u7684\u914d\u7f6e\u3002",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml#L255-L282"},(0,n.kt)("inlineCode",{parentName:"a"},"value.yaml"))," \u4e2d PV \u76f8\u5173\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'dashboard:\n  ...\n  persistentVolume:\n    # If you are using SQLite as your DB for Chaos Dashboard, it is recommended to enable persistence.\n    # If enable, the chart will create a PersistenceVolumeClaim to store its state in. If you are\n    # using a DB other than SQLite, set this to false to avoid allocating unused storage.\n    # If set to false, Chaos Mesh will use an emptyDir instead, which is ephemeral.\n    enabled: true\n\n    # If you\'d like to bring your own PVC for persisting chaos event, pass the name of the\n    # created + ready PVC here. If set, this Chart will not create the default PVC.\n    # Requires server.persistentVolume.enabled: true\n    existingClaim: ""\n\n    # Chaos Dashboard data Persistent Volume size.\n    size: 8Gi\n\n    # Chaos Dashboard data Persistent Volume Storage Class.\n    # If defined, storageClassName: <storageClass>\n    storageClassName: standard\n\n    # Chaos Dashboard data Persistent Volume mount root path\n    mountPath: /data\n\n    # Subdirectory of Chaos Dashboard data Persistent Volume to mount\n    # Useful if the volume\'s root directory is not empty\n    subPath: ""\n')),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u914d\u7f6e PV \u7684\u60c5\u51b5\u4e0b\uff0cChaos Dashboard \u53d1\u751f\u91cd\u542f\uff0c\u6570\u636e\u5c06\u51fa\u73b0\u4e22\u5931\uff0c\u5e76\u4e14\u65e0\u6cd5\u627e\u56de\u3002")),(0,n.kt)("h2",{id:"mysql"},"MySQL"),(0,n.kt)("p",null,"Chaos Dashboard \u652f\u6301\u4f7f\u7528 MySQL 5.6 \u6216\u8005\u66f4\u9ad8\u7248\u672c\u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002\u82e5\u60f3\u4f7f\u7528 MySQL \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u7684\u65f6\u5019\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.DATABASE_DRIVER")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.DATABASE_DATASOURCE")," \u53c2\u6570\uff0c\u5177\u4f53\u53c2\u6570\u914d\u7f6e\u8bf7\u53c2\u8003[\u5b98\u65b9\u9a71\u52a8\u6587\u6863(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"https://github.com/go-sql-driver/mysql#dsn-data-source-name"),") \u3002"),(0,n.kt)(o.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=mysql --set dashboard.env.DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/chaos-mesh?parseTime=true"),(0,n.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("p",null,"Chaos Dashboard \u652f\u6301\u4f7f\u7528 PostgreSQL 9.6 \u6216\u8005\u66f4\u9ad8\u7248\u672c\u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002\u82e5\u60f3\u4f7f\u7528 PostgreSQL \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u7684\u65f6\u5019\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.DATABASE_DRIVER")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.DATABASE_DATASOURCE")," \u53c2\u6570\uff0c\u5177\u4f53\u53c2\u6570\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"libpq connect"),"\u3002"),(0,n.kt)(o.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=postgres --set dashboard.env.DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable"),(0,n.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4"},"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4"),(0,n.kt)("p",null,"Chaos Dashboard \u652f\u6301\u914d\u7f6e\u6570\u636e\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"Event")," \u76f8\u5173\u6570\u636e\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"168h")," \u8fc7\u671f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"Experiment")," \u76f8\u5173\u6570\u636e\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"336h")," \u8fc7\u671f\uff0c\u5982\u9700\u8981\u4fee\u6539\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EVENT")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EXPERIMENT")," \u53c2\u6570\uff0c\u5982\uff1a"),(0,n.kt)(o.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.TTL_EVENT=168h --set dashboard.env.TTL_EXPERIMENT=336h"))}p.isMDXComponent=!0}}]);
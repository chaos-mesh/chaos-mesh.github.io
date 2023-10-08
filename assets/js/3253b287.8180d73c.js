"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3501],{17324:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(65731),o=s(78344),n=s(73279),r=s(27483),i=s(59496),l=s(31559),d=s.n(l),h=s(39309);const c=e=>{let{children:t,className:s="language-bash"}=e;const{siteConfig:l}=(0,o.Z)(),{versions:c}=(0,n.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=(0,h.p)(l,c),a="latest"===e?"":`--version ${(e=>{if(d().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return i.createElement(r.Z,{className:s},t.replace("--version latest",a).trim())}))}},39309:(e,t,s)=>{s.d(t,{Z:()=>d,p:()=>l});var a=s(65731),o=s(78344),n=s(73279),r=s(27483),i=s(59496);const l=(e,t)=>{const s=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(s===e.baseUrl&&a)return"current"===a?"latest":a;if(s.includes("/docs/next"))return"latest";const o=t.find((e=>e.isLast)),n=t.find((e=>s.includes(e.name)));return n?n.name:o.name};const d=e=>{let{children:t,replaced:s="latest",isArchive:d=!1,className:h="language-bash"}=e;const{siteConfig:c}=(0,o.Z)(),{versions:m}=(0,n.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=l(c,m),a=d?t.replace(s,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(s,"v"+e);return i.createElement(r.Z,{className:h},a)}))}},60164:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=s(28957),o=(s(59496),s(49613)),n=s(17324);const r={title:"Persistence Chaos Dashboard"},i=void 0,l={unversionedId:"persistence-dashboard",id:"version-2.4.3/persistence-dashboard",title:"Persistence Chaos Dashboard",description:"This document describes how to make Chaos Dashboard persistence.",source:"@site/versioned_docs/version-2.4.3/persistence-dashboard.md",sourceDirName:".",slug:"/persistence-dashboard",permalink:"/docs/2.4.3/persistence-dashboard",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/persistence-dashboard.md",tags:[],version:"2.4.3",frontMatter:{title:"Persistence Chaos Dashboard"},sidebar:"docs",previous:{title:"Install Chaos Mesh Offline",permalink:"/docs/2.4.3/offline-installation"},next:{title:"Uninstall Chaos Mesh",permalink:"/docs/2.4.3/uninstallation"}},d={},h=[{value:"SQLite (default)",id:"sqlite-default",level:2},{value:"MySQL",id:"mysql",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Set TTL (Time To Live) for Chaos Dashboard data",id:"set-ttl-time-to-live-for-chaos-dashboard-data",level:2}],c={toc:h},m="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to make Chaos Dashboard persistence."),(0,o.kt)("p",null,"Chaos Dashboard support ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLite"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," as database backends for persistence."),(0,o.kt)("h2",{id:"sqlite-default"},"SQLite (default)"),(0,o.kt)("p",null,"Chaos Dashboard uses ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLite")," as the default database engine, and it is recommended to enable ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PV (Persistent Volumes)"),". To enable PV, set ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.persistentVolume.enabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". You can find related configurations on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml#L255-L282"},(0,o.kt)("inlineCode",{parentName:"a"},"value.yaml"))," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'dashboard:\n  ...\n  persistentVolume:\n    # If you are using SQLite as your DB for Chaos Dashboard, it is recommended to enable persistence.\n    # If enable, the chart will create a PersistenceVolumeClaim to store its state in. If you are\n    # using a DB other than SQLite, set this to false to avoid allocating unused storage.\n    # If set to false, Chaos Mesh will use an emptyDir instead, which is ephemeral.\n    enabled: true\n\n    # If you\'d like to bring your own PVC for persisting chaos event, pass the name of the\n    # created + ready PVC here. If set, this Chart will not create the default PVC.\n    # Requires server.persistentVolume.enabled: true\n    existingClaim: ""\n\n    # Chaos Dashboard data Persistent Volume size.\n    size: 8Gi\n\n    # Chaos Dashboard data Persistent Volume Storage Class.\n    # If defined, storageClassName: <storageClass>\n    storageClassName: standard\n\n    # Chaos Dashboard data Persistent Volume mount root path\n    mountPath: /data\n\n    # Subdirectory of Chaos Dashboard data Persistent Volume to mount\n    # Useful if the volume\'s root directory is not empty\n    subPath: ""\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If Chaos Dashboard component restarts without PV, the data of Chaos Dashboard will be lost and can't be retrieved.")),(0,o.kt)("h2",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"Chaos Dashboard supports MySQL 5.6 and higher versions as the database engine. The below example demonstrates MySQL database configuration. For details about connection string configuration, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"MySQL-Driver for Go"),"."),(0,o.kt)(n.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=mysql --set dashboard.env.DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/chaos-mesh?parseTime=true"),(0,o.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"Chaos Dashboard supports PostgreSQL 9.6 and higher versions as the database engine. The below example demonstrates PostgreSQL database configuration. For details about connection string configuration, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING"},"libpq connect"),"."),(0,o.kt)(n.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=postgres --set dashboard.env.DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable"),(0,o.kt)("h2",{id:"set-ttl-time-to-live-for-chaos-dashboard-data"},"Set TTL (Time To Live) for Chaos Dashboard data"),(0,o.kt)("p",null,"Chaos Dashboard supports setting the expiration time of Chaos Dashboard data. The default ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," related data expires by ",(0,o.kt)("inlineCode",{parentName:"p"},"168h"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Experiment")," related data defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"336h"),". If you need to modify it, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EVENT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EXPERIMENT")," parameters, like:"),(0,o.kt)(n.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.TTL_EVENT=168h --set dashboard.env.TTL_EXPERIMENT=336h"))}p.isMDXComponent=!0}}]);
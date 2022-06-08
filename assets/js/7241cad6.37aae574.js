"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2397],{89400:function(e,t,a){var s=a(91262),n=a(19055),o=a(67294),r=a(81249),i=a.n(r),d=a(52263),l=a(56871),h=a(28084);t.Z=function(e){var t=e.children,a=e.className,r=void 0===a?"language-bash":a,c=(0,d.Z)().siteConfig,u=(0,h.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(s.Z,null,(function(){var e=(0,l.p)(c,u),a="latest"===e?"":"--version "+function(e){if(i().satisfies(e,">=2.0.3"))return e;var t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)}(e);return o.createElement(n.Z,{className:r},t.replace("--version latest",a).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return d}});var s=a(91262),n=a(19055),o=a(67294),r=a(52263),i=a(28084),d=function(e,t){var a=window.location.pathname,s=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&s)return"current"===s?"latest":s;if(a.includes("/docs/next"))return"latest";var n=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||n};t.Z=function(e){var t=e.children,a=e.replaced,l=void 0===a?"latest":a,h=e.isArchive,c=void 0!==h&&h,u=e.className,m=void 0===u?"language-bash":u,p=(0,r.Z)().siteConfig,f=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(s.Z,null,(function(){var e=d(p,f),a=c?t.replace(l,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(l,"v"+e);return o.createElement(n.Z,{className:m},a)}))}},79171:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var s=a(87462),n=a(63366),o=(a(67294),a(3905)),r=a(89400),i=["components"],d={title:"Persistence Chaos Dashboard"},l=void 0,h={unversionedId:"persistence-dashboard",id:"version-2.2.0/persistence-dashboard",isDocsHomePage:!1,title:"Persistence Chaos Dashboard",description:"This document describes how to make Chaos Dashboard persistence.",source:"@site/versioned_docs/version-2.2.0/persistence-dashboard.md",sourceDirName:".",slug:"/persistence-dashboard",permalink:"/docs/persistence-dashboard",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.0/persistence-dashboard.md",tags:[],version:"2.2.0",frontMatter:{title:"Persistence Chaos Dashboard"},sidebar:"version-2.2.0/docs",previous:{title:"Install Chaos Mesh Offline",permalink:"/docs/offline-installation"},next:{title:"Uninstall Chaos Mesh",permalink:"/docs/uninstallation"}},c=[{value:"SQLite (default)",id:"sqlite-default",children:[],level:2},{value:"MySQL",id:"mysql",children:[],level:2},{value:"PostgreSQL",id:"postgresql",children:[],level:2},{value:"Set TTL (Time To Live) for Chaos Dashboard data",id:"set-ttl-time-to-live-for-chaos-dashboard-data",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to make Chaos Dashboard persistence."),(0,o.kt)("p",null,"Chaos Dashboard support ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLite"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," as database backends for persistence."),(0,o.kt)("h2",{id:"sqlite-default"},"SQLite (default)"),(0,o.kt)("p",null,"Chaos Dashboard uses ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLite")," as the default database engine, and it is recommended to enable ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PV (Persistent Volumes)"),". To enable PV, set ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.persistentVolume.enabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". You can find related configurations on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml#L255-L282"},(0,o.kt)("inlineCode",{parentName:"a"},"value.yaml"))," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'dashboard:\n  ...\n  persistentVolume:\n    # If you are using SQLite as your DB for Chaos Dashboard, it is recommended to enable persistence.\n    # If enable, the chart will create a PersistenceVolumeClaim to store its state in. If you are\n    # using a DB other than SQLite, set this to false to avoid allocating unused storage.\n    # If set to false, Chaos Mesh will use an emptyDir instead, which is ephemeral.\n    enabled: true\n\n    # If you\'d like to bring your own PVC for persisting chaos event, pass the name of the\n    # created + ready PVC here. If set, this Chart will not create the default PVC.\n    # Requires server.persistentVolume.enabled: true\n    existingClaim: ""\n\n    # Chaos Dashboard data Persistent Volume size.\n    size: 8Gi\n\n    # Chaos Dashboard data Persistent Volume Storage Class.\n    # If defined, storageClassName: <storageClass>\n    storageClassName: standard\n\n    # Chaos Dashboard data Persistent Volume mount root path\n    mountPath: /data\n\n    # Subdirectory of Chaos Dashboard data Persistent Volume to mount\n    # Useful if the volume\'s root directory is not empty\n    subPath: ""\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Chaos Dashboard component restarts without PV, the data of Chaos Dashboard will be lost and can't be retrieved."))),(0,o.kt)("h2",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"Chaos Dashboard supports MySQL 5.6 and higher versions as the database engine. The below example demonstrates MySQL database configuration. For details about connection string configuration, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"MySQL-Driver for Go"),"."),(0,o.kt)(r.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --version latest --set dashboard.env.DATABASE_DRIVER=mysql --set dashboard.env.DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/chaos-mesh?parseTime=true"),(0,o.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"Chaos Dashboard supports PostgreSQL 9.6 and higher versions as the database engine. The below example demonstrates PostgreSQL database configuration. For details about connection string configuration, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING"},"libpq connect"),"."),(0,o.kt)(r.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --version latest --set dashboard.env.DATABASE_DRIVER=postgres --set dashboard.env.DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable"),(0,o.kt)("h2",{id:"set-ttl-time-to-live-for-chaos-dashboard-data"},"Set TTL (Time To Live) for Chaos Dashboard data"),(0,o.kt)("p",null,"Chaos Dashboard supports setting the expiration time of Chaos Dashboard data. The default ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," related data expires by ",(0,o.kt)("inlineCode",{parentName:"p"},"168h"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Experiment")," related data defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"336h"),". If you need to modify it, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EVENT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.env.TTL_EXPERIMENT")," parameters, like:"),(0,o.kt)(r.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --version latest --set dashboard.env.TTL_EVENT=168h --set dashboard.env.TTL_EXPERIMENT=336h"))}m.isMDXComponent=!0}}]);
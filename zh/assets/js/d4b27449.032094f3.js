"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7847],{28166:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var t=a(13274),n=a(90073),r=a(48852);const o={title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"},d=void 0,h={id:"persistence-dashboard",title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/persistence-dashboard.md",sourceDirName:".",slug:"/persistence-dashboard",permalink:"/zh/docs/next/persistence-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/persistence-dashboard.md",tags:[],version:"current",frontMatter:{title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"},sidebar:"docs",previous:{title:"Expose Chaos Dashboard with Ingress",permalink:"/zh/docs/next/expose-dashboard-with-ingress"},next:{title:"\u5378\u8f7d Chaos Mesh",permalink:"/zh/docs/next/uninstallation"}},i={},l=[{value:"SQLite\uff08\u9ed8\u8ba4\u5b58\u50a8\uff09",id:"sqlite\u9ed8\u8ba4\u5b58\u50a8",level:2},{value:"MySQL",id:"mysql",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4",id:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Dashboard \u652f\u6301 ",(0,t.jsx)(s.code,{children:"SQLite"}),"\u3001",(0,t.jsx)(s.code,{children:"MySQL"})," \u548c ",(0,t.jsx)(s.code,{children:"PostgreSQL"})," \u4f5c\u4e3a\u540e\u7aef\u6570\u636e\u5b58\u50a8\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"sqlite\u9ed8\u8ba4\u5b58\u50a8",children:"SQLite\uff08\u9ed8\u8ba4\u5b58\u50a8\uff09"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Dashboard \u9ed8\u8ba4\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"SQLite"})," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u5e76\u63a8\u8350\u4e3a ",(0,t.jsx)(s.code,{children:"SQLite"})," \u914d\u7f6e\u5355\u72ec\u7684",(0,t.jsx)(s.a,{href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/",children:"\u6301\u4e45\u5377 (PV)"})," \u3002\u5982\u9700\u8981\u914d\u7f6e PV\uff0c\u8bf7\u5728\u5b89\u88c5\u7684\u65f6\u5019\u6307\u5b9a ",(0,t.jsx)(s.code,{children:"dashboard.persistentVolume.enabled"})," \u4e3a ",(0,t.jsx)(s.code,{children:"true"})," \u548c\u8bbe\u7f6e\u5176\u4ed6 PV \u76f8\u5173\u7684\u914d\u7f6e\u3002",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml#L255-L282",children:(0,t.jsx)(s.code,{children:"value.yaml"})})," \u4e2d PV \u76f8\u5173\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'dashboard:\n  ...\n  persistentVolume:\n    # If you are using SQLite as your DB for Chaos Dashboard, it is recommended to enable persistence.\n    # If enable, the chart will create a PersistenceVolumeClaim to store its state in. If you are\n    # using a DB other than SQLite, set this to false to avoid allocating unused storage.\n    # If set to false, Chaos Mesh will use an emptyDir instead, which is ephemeral.\n    enabled: true\n\n    # If you\'d like to bring your own PVC for persisting chaos event, pass the name of the\n    # created + ready PVC here. If set, this Chart will not create the default PVC.\n    # Requires server.persistentVolume.enabled: true\n    existingClaim: ""\n\n    # Chaos Dashboard data Persistent Volume size.\n    size: 8Gi\n\n    # Chaos Dashboard data Persistent Volume Storage Class.\n    # If defined, storageClassName: <storageClass>\n    storageClassName: standard\n\n    # Chaos Dashboard data Persistent Volume mount root path\n    mountPath: /data\n\n    # Subdirectory of Chaos Dashboard data Persistent Volume to mount\n    # Useful if the volume\'s root directory is not empty\n    subPath: ""\n'})}),"\n",(0,t.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,t.jsx)(s.p,{children:"\u5982\u679c\u4e0d\u914d\u7f6e PV \u7684\u60c5\u51b5\u4e0b\uff0cChaos Dashboard \u53d1\u751f\u91cd\u542f\uff0c\u6570\u636e\u5c06\u51fa\u73b0\u4e22\u5931\uff0c\u5e76\u4e14\u65e0\u6cd5\u627e\u56de\u3002"})}),"\n",(0,t.jsx)(s.h2,{id:"mysql",children:"MySQL"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Dashboard \u652f\u6301\u4f7f\u7528 MySQL 5.6 \u6216\u8005\u66f4\u9ad8\u7248\u672c\u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002\u82e5\u60f3\u4f7f\u7528 MySQL \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u7684\u65f6\u5019\u8bbe\u7f6e ",(0,t.jsx)(s.code,{children:"dashboard.env.DATABASE_DRIVER"})," \u548c ",(0,t.jsx)(s.code,{children:"dashboard.env.DATABASE_DATASOURCE"})," \u53c2\u6570\uff0c\u5177\u4f53\u53c2\u6570\u914d\u7f6e\u8bf7\u53c2\u8003[\u5b98\u65b9\u9a71\u52a8\u6587\u6863(",(0,t.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"}),")"," \u3002"]}),"\n",(0,t.jsx)(r.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=mysql --set dashboard.env.DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/chaos-mesh?parseTime=true"}),"\n",(0,t.jsx)(s.h2,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Dashboard \u652f\u6301\u4f7f\u7528 PostgreSQL 9.6 \u6216\u8005\u66f4\u9ad8\u7248\u672c\u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002\u82e5\u60f3\u4f7f\u7528 PostgreSQL \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u7684\u65f6\u5019\u8bbe\u7f6e ",(0,t.jsx)(s.code,{children:"dashboard.env.DATABASE_DRIVER"})," \u548c ",(0,t.jsx)(s.code,{children:"dashboard.env.DATABASE_DATASOURCE"})," \u53c2\u6570\uff0c\u5177\u4f53\u53c2\u6570\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,t.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"libpq connect"}),"\u3002"]}),"\n",(0,t.jsx)(r.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.DATABASE_DRIVER=postgres --set dashboard.env.DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable"}),"\n",(0,t.jsx)(s.h2,{id:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4",children:"\u914d\u7f6e\u6570\u636e\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Dashboard \u652f\u6301\u914d\u7f6e\u6570\u636e\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4 ",(0,t.jsx)(s.code,{children:"Event"})," \u76f8\u5173\u6570\u636e\u9ed8\u8ba4 ",(0,t.jsx)(s.code,{children:"168h"})," \u8fc7\u671f\uff0c",(0,t.jsx)(s.code,{children:"Experiment"})," \u76f8\u5173\u6570\u636e\u9ed8\u8ba4 ",(0,t.jsx)(s.code,{children:"336h"})," \u8fc7\u671f\uff0c\u5982\u9700\u8981\u4fee\u6539\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,t.jsx)(s.code,{children:"dashboard.env.TTL_EVENT"})," \u548c ",(0,t.jsx)(s.code,{children:"dashboard.env.TTL_EXPERIMENT"})," \u53c2\u6570\uff0c\u5982\uff1a"]}),"\n",(0,t.jsx)(r.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.env.TTL_EVENT=168h --set dashboard.env.TTL_EXPERIMENT=336h"})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},48852:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(73066),n=a(43406),r=a(30744),o=a(36604),d=a(29582),h=a.n(d),i=a(81720),l=a(13274);const c=e=>{let{children:s,className:a="language-bash"}=e;const{siteConfig:d}=(0,n.A)(),{versions:c}=(0,r.P_)("docusaurus-plugin-content-docs");return(0,l.jsx)(t.A,{children:()=>{const e=(0,i.t)(d,c),t="latest"===e?"":`--version ${(e=>{if(h().satisfies(e,">=2.0.3"))return e;const s=e.slice(0,3);return"v"+(parseFloat(s)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,l.jsx)(o.A,{className:a,children:s.replace("--version latest",t).trim()})}})}},81720:(e,s,a)=>{a.d(s,{A:()=>i,t:()=>h});var t=a(73066),n=a(43406),r=a(30744),o=a(36604),d=a(13274);const h=(e,s)=>{const a=window.location.pathname;let t=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&t)return"current"===t?"latest":t;if(a.includes("/docs/next"))return"latest";const n=s.find((e=>e.isLast)),r=s.find((e=>a.includes(e.name)));return r?r.name:n.name};const i=e=>{let{children:s,replaced:a="latest",isArchive:i=!1,className:l="language-bash"}=e;const{siteConfig:c}=(0,n.A)(),{versions:u}=(0,r.P_)("docusaurus-plugin-content-docs");return(0,d.jsx)(t.A,{children:()=>{const e=h(c,u),t=i?s.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?s:s.replace(a,"v"+e);return(0,d.jsx)(o.A,{className:l,children:t})}})}}}]);
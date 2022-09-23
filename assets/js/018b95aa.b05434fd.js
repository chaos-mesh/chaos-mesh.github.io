"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[18969],{89400:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(91262),s=t(52263),o=t(28084),i=t(90814),l=t(67294),r=t(81249),c=t.n(r),p=t(56871);const m=e=>{let{children:a,className:t="language-bash"}=e;const{siteConfig:r}=(0,s.Z)(),{versions:m}=(0,o.eZ)("docusaurus-plugin-content-docs");return l.createElement(n.Z,null,(()=>{const e=(0,p.p)(r,m),n="latest"===e?"":`--version ${(e=>{if(c().satisfies(e,">=2.0.3"))return e;const a=e.slice(0,3);return"v"+(parseFloat(a)-.7).toFixed(1)+e.slice(3)})(e)}`;return l.createElement(i.Z,{className:t},a.replace("--version latest",n).trim())}))}},56871:(e,a,t)=>{t.d(a,{Z:()=>c,p:()=>r});var n=t(91262),s=t(52263),o=t(28084),i=t(90814),l=t(67294);const r=(e,a)=>{const t=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";const s=a.filter((e=>e.isLast))[0].name;return a.filter((e=>t.includes(e.name))).map((e=>e.name))[0]||s};const c=e=>{let{children:a,replaced:t="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:m}=(0,s.Z)(),{versions:h}=(0,o.eZ)("docusaurus-plugin-content-docs");return l.createElement(n.Z,null,(()=>{const e=r(m,h),n=c?a.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?a:a.replace(t,"v"+e);return l.createElement(i.Z,{className:p},n)}))}},80155:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=t(87462),s=(t(67294),t(3905)),o=t(89400);const i={title:"Configure namespace for Chaos experiments"},l=void 0,r={unversionedId:"configure-enabled-namespace",id:"version-2.3.2/configure-enabled-namespace",title:"Configure namespace for Chaos experiments",description:"This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection.",source:"@site/versioned_docs/version-2.3.2/configure-enabled-namespace.md",sourceDirName:".",slug:"/configure-enabled-namespace",permalink:"/docs/2.3.2/configure-enabled-namespace",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.2/configure-enabled-namespace.md",tags:[],version:"2.3.2",frontMatter:{title:"Configure namespace for Chaos experiments"},sidebar:"docs",previous:{title:"Manage User Permissions",permalink:"/docs/2.3.2/manage-user-permissions"},next:{title:"Define the Scope of Chaos Experiments",permalink:"/docs/2.3.2/define-chaos-experiment-scope"}},c={},p=[{value:"Control the scope where the Chaos experiment takes effect",id:"control-the-scope-where-the-chaos-experiment-takes-effect",level:2},{value:"Enable FilterNamespace",id:"enable-filternamespace",level:2},{value:"Add annotations to namespaces for Chaos experiments",id:"add-annotations-to-namespaces-for-chaos-experiments",level:2},{value:"Check all namespaces where Chaos experiments take effect",id:"check-all-namespaces-where-chaos-experiments-take-effect",level:2}],m={toc:p};function h(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection."),(0,s.kt)("h2",{id:"control-the-scope-where-the-chaos-experiment-takes-effect"},"Control the scope where the Chaos experiment takes effect"),(0,s.kt)("p",null,"Chaos Mesh offers two ways to control the scope of the Chaos experiment to take effect:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To configure Chaos experiments to only take effect in the specified namespace, you need to enable the FilterNamespace feature (which is off by default). This feature takes effect on a global scope. After this feature is enabled, you can add annotations to the namespace in which Chaos experiments are allowed to take effect. Other namespaces without annotations are protected against fault injection."),(0,s.kt)("li",{parentName:"ul"},"To specify the scope for a single Chaos experiment to take effect, refer to ",(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.2/define-chaos-experiment-scope"},"Define the scope of a Chaos experiment"),".")),(0,s.kt)("h2",{id:"enable-filternamespace"},"Enable FilterNamespace"),(0,s.kt)("p",null,"If you have not installed Chaos Mesh yet, you can enable this feature during installation by adding ",(0,s.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=true")," to the command when installing using Helm. The following is a command example in the Docker container:"),(0,s.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true --version latest"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When you use Helm for installation, commands and parameters differ for different containers. Refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/production-installation-using-helm"},"Install Chaos Mesh using Helm")," for more information.")),(0,s.kt)("p",null,"If you have installed Chaos Mesh using Helm, you can enable this feature by upgrading the configuration with the ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command. For example:"),(0,s.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --version latest --set controllerManager.enableFilterNamespace=true"),(0,s.kt)("p",null,"For ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", you can set multiple parameters by adding multiple ",(0,s.kt)("inlineCode",{parentName:"p"},"--set")," in the command. Later settings override previous settings. For example, if you add ",(0,s.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=false -set controllerManager.enableFilterNamespace=true")," in the command, it still enables this feature."),(0,s.kt)("p",null,"You can also specify a YAML file using the ",(0,s.kt)("inlineCode",{parentName:"p"},"-f")," parameter to describe the configuration. Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B"},"Helm upgrade")," for more information."),(0,s.kt)("h2",{id:"add-annotations-to-namespaces-for-chaos-experiments"},"Add annotations to namespaces for Chaos experiments"),(0,s.kt)("p",null,"When FilterNamespace is enabled, Chaos Mesh only injects faults to namespaces containing the annotation ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/inject=enabled"),". Therefore, before starting Chaos experiments, you need to add this annotation to the namespace in which Chaos experiments can take effect, while other namespaces are protected against fault injection."),(0,s.kt)("p",null,"You can add the annotation for a ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace")," using the following ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled\n")),(0,s.kt)("p",null,"In the above command, ",(0,s.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," refers to the name of the namespace, for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),". If the annotation is successfully added, the output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,s.kt)("p",null,"If you want to delete this annotation, you can use the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-\n")),(0,s.kt)("p",null,"If the annotation is successfully deleted, the output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,s.kt)("h2",{id:"check-all-namespaces-where-chaos-experiments-take-effect"},"Check all namespaces where Chaos experiments take effect"),(0,s.kt)("p",null,"You can list all the namespaces that allows Chaos experiments using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns -o jsonpath='{.items[?(@.metadata.annotations.chaos-mesh\\.org/inject==\"enabled\")].metadata.name}'\n")),(0,s.kt)("p",null,"This command outputs all the namespaces with the ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/inject=enabled")," annotation. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"default\n")))}h.isMDXComponent=!0}}]);
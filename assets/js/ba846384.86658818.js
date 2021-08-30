"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2867],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,f=h["".concat(l,".").concat(u)]||h[u]||m[u]||r;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56507:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),s={title:"Configure namespace for Chaos experiments",sidebar_label:"Configure namespace for Chaos experiments"},i=void 0,l={unversionedId:"configure-enabled-namespace",id:"version-2.0.1/configure-enabled-namespace",isDocsHomePage:!1,title:"Configure namespace for Chaos experiments",description:"This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection.",source:"@site/versioned_docs/version-2.0.1/configure-enabled-namespace.md",sourceDirName:".",slug:"/configure-enabled-namespace",permalink:"/docs/configure-enabled-namespace",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/configure-enabled-namespace.md",tags:[],version:"2.0.1",frontMatter:{title:"Configure namespace for Chaos experiments",sidebar_label:"Configure namespace for Chaos experiments"}},c=[{value:"Control the scope where the Chaos experiment takes effect",id:"control-the-scope-where-the-chaos-experiment-takes-effect",children:[]},{value:"Enable FilterNamespace",id:"enable-filternamespace",children:[]},{value:"Add annotations to namespaces for Chaos experiments",id:"add-annotations-to-namespaces-for-chaos-experiments",children:[]},{value:"Check all namespaces where Chaos experiments take effect",id:"check-all-namespaces-where-chaos-experiments-take-effect",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection."),(0,r.kt)("h2",{id:"control-the-scope-where-the-chaos-experiment-takes-effect"},"Control the scope where the Chaos experiment takes effect"),(0,r.kt)("p",null,"Chaos Mesh offers two ways to control the scope of the Chaos experiment to take effect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To configure Chaos experiments to only take effect in the specified namespace, you need to enable the FilterNamespace feature (which is off by default). This feature takes effect on a global scope. After this feature is enabled, you can add annotations to the namespace in which Chaos experiments are allowed to take effect. Other namespaces without annotations are protected against fault injection."),(0,r.kt)("li",{parentName:"ul"},"To specify the scope for a single Chaos experiment to take effect, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/define-chaos-experiment-scope"},"Define the scope of a Chaos experiment"),".")),(0,r.kt)("h2",{id:"enable-filternamespace"},"Enable FilterNamespace"),(0,r.kt)("p",null,"If you have not installed Chaos Mesh yet, you can enable this feature during installation by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=true")," to the command when installing using Helm. The following is a command example in the Docker container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you use Helm for installation, commands and parameters differ for different containers. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/production-installation-using-helm"},"Install Chaos Mesh using Helm")," for more information."))),(0,r.kt)("p",null,"If you have installed Chaos Mesh using Helm, you can enable this feature by upgrading the configuration with the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", you can set multiple parameters by adding multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," in the command. Later settings override previous settings. For example, if you add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set controllerManager.enableFilterNamespace=false -set controllerManager.enableFilterNamespace=true")," in the command, it still enables this feature."),(0,r.kt)("p",null,"You can also specify a YAML file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," parameter to describe the configuration. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B"},"Helm upgrade")," for more information."),(0,r.kt)("h2",{id:"add-annotations-to-namespaces-for-chaos-experiments"},"Add annotations to namespaces for Chaos experiments"),(0,r.kt)("p",null,"When FilterNamespace is enabled, Chaos Mesh only injects faults to namespaces containing the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/input=enabled"),". Therefore, before starting Chaos experiments, you need to add this annotation to the namespace in which Chaos experiments can take effect, while other namespaces are protected agains fault injection."),(0,r.kt)("p",null,"You can add the annotation for a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," using the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled\n")),(0,r.kt)("p",null,"In the above command, ",(0,r.kt)("inlineCode",{parentName:"p"},"$NAMESPACE")," refers to the name of the namespace, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". If the annotation is successfully added, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,r.kt)("p",null,"If you want to delete this annotation, you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-\n")),(0,r.kt)("p",null,"If the annotation is successfully deleted, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/$NAMESPACE annotated\n")),(0,r.kt)("h2",{id:"check-all-namespaces-where-chaos-experiments-take-effect"},"Check all namespaces where Chaos experiments take effect"),(0,r.kt)("p",null,"You can list all the namespaces that allows Chaos experiments using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns -o jsonpath='{.items[?(@.metadata.annotations.chaos-mesh\\.org/inject==\"enabled\")].metadata.name}'\n")),(0,r.kt)("p",null,"This command outputs all the namespaces with the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org/input=enabled")," annotation. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"default\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return a?s.createElement(g,o(o({ref:t},h),{},{components:a})):s.createElement(g,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<n;l++)o[l]=a[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=a(87462),r=(a(67294),a(3905));const n={slug:"/securing-tenant-namespaces-using-restrict-authorization-feature",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",author:"Anurag Paliwal",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/anuragpaliwal80",author_image_url:"https://avatars.githubusercontent.com/u/3283882?v=4",image:"/img/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},o=void 0,i={permalink:"/zh/blog/securing-tenant-namespaces-using-restrict-authorization-feature",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-07-restrict-authorization.md",source:"@site/blog/2021-07-07-restrict-authorization.md",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",description:"Chaos engineering tools",date:"2021-07-07T00:00:00.000Z",formattedDate:"2021\u5e747\u67087\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:2.795,hasTruncateMarker:!0,authors:[{name:"Anurag Paliwal",title:"Contributor of Chaos Mesh",url:"https://github.com/anuragpaliwal80",imageURL:"https://avatars.githubusercontent.com/u/3283882?v=4"}],frontMatter:{slug:"/securing-tenant-namespaces-using-restrict-authorization-feature",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",author:"Anurag Paliwal",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/anuragpaliwal80",author_image_url:"https://avatars.githubusercontent.com/u/3283882?v=4",image:"/img/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Chaos Mesh Q&A",permalink:"/zh/blog/chaos-mesh-q&a"},nextItem:{title:"How to efficiently stress test Pod memory",permalink:"/zh/blog/how-to-efficiently-stress-test-pod-memory"}},c={authorsImageUrls:[void 0]},l=[{value:"Cluster multi-tenancy",id:"cluster-multi-tenancy",level:2},{value:"Cluster having Chaos Mesh",id:"cluster-having-chaos-mesh",level:2},{value:"For more tutorials",id:"for-more-tutorials",level:2},{value:"Last but not least",id:"last-but-not-least",level:2}],h={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chaos engineering tools",src:a(82953).Z,width:"3126",height:"1043"})),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/multitenancy-overview"},"multi-tenant"),' cluster is shared by multiple users and/or workloads which are referred to as "tenants".The operators of multi-tenant clusters must isolate tenants from each other to minimize the damage that a compromised or malicious tenant can do to the cluster and other tenants.'),(0,r.kt)("h2",{id:"cluster-multi-tenancy"},"Cluster multi-tenancy"),(0,r.kt)("p",null,"When you plan a multi-tenant architecture, you should consider the layers of resource isolation in Kubernetes: cluster, namespace, node, Pod, and container."),(0,r.kt)("p",null,"Although Kubernetes cannot guarantee perfectly secure isolation between tenants, it does offer features that may be sufficient for specific use cases. You can separate each tenant and their Kubernetes resources into their own ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"namespaces"),".\nKubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespaces")," are intended for use in environments with many users spread across multiple teams, or projects."),(0,r.kt)("h2",{id:"cluster-having-chaos-mesh"},"Cluster having Chaos Mesh"),(0,r.kt)("p",null,"You designed your Kubernetes cluster to have multiple tenant services. You followed the best security practices for Kubernetes: each tenant service is running in its own namespaces, users of these tenant services have appropriate access that also only for their respective namespaces, etc."),(0,r.kt)("p",null,"You enabled Chaos Mesh (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments) on the cluster so that your tenant services can perform different chaos activities to make sure their application/system is resilient. You have also given Chaos Mesh specific rights to those tenant service users so that they can manage Chaos Mesh resources using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC"),"."),(0,r.kt)("p",null,"Suppose one of the tenant users wants to perform pod kill operations in his/her namespace i.e. chaos-testing. To achieve the same, the user created the below Chaos Mesh YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  scheduler:\n    cron: '@every 1m'\n")),(0,r.kt)("p",null,"The user has required rights to namespace chaos-testing, but does not have rights on tidb-cluster-demo namespace. When the user applies the above YAML file using kubectl, it will create the pod-kill Chaos Mesh resource in chaos-testing namespace. As we can see in the selector section, the user has specified some other namespace (tidb-cluster-demo), which means the pods which will be selected for this chaos operation will be from tidb-cluster-demo namespace, and not from the one for which the user has access i.e. chaos-testing. This means that this user is able to impact the other namespace for which (s)he does not have the rights. ",(0,r.kt)("strong",{parentName:"p"},"Problem!!!")),(0,r.kt)("p",null,"Since the release of Chaos Mesh 1.1.3, this security issue has been fixed with a restricted authorization feature. Now when user applies the above YAML file, the system shows the error similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'Error when creating "pod/pod-kill.yaml": admission webhook "vauth.kb.io" denied the request: ... is forbidden on namespace\ntidb-cluster-demo\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem solved!")),(0,r.kt)("p",null,"Please note, if the user has required rights on tidb-cluster-demo namespace as well, then there will be no such error."),(0,r.kt)("h2",{id:"for-more-tutorials"},"For more tutorials"),(0,r.kt)("p",null,"In case you want to enforce that no user should be allowed to create chaos across namespaces, you can check out my previous blog: ",(0,r.kt)("a",{parentName:"p",href:"https://anuragpaliwal-93749.medium.com/securing-tenant-services-while-using-chaos-mesh-using-opa-3ae80c7f4b85"},"Securing tenant services while using chaos mesh using OPA"),"."),(0,r.kt)("h2",{id:"last-but-not-least"},"Last but not least"),(0,r.kt)("p",null,"If you are interested in Chaos Mesh and would like to learn more, you're welcome to join the ",(0,r.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack channel")," or submit your pull requests or issues to its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}u.isMDXComponent=!0},82953:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/chaos-mesh-restrict-authorization-83f3faf086be2029938cd1923256b5a2.jpeg"}}]);
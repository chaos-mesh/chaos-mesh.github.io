"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3942],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return p}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),h=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=h(o),p=n,b=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return o?a.createElement(b,s(s({ref:t},l),{},{components:o})):a.createElement(b,s({ref:t},l))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var h=2;h<r;h++)s[h]=o[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},10101:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return h},assets:function(){return l},toc:function(){return u},default:function(){return p}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),s=["components"],i={slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","open source"]},c=void 0,h={permalink:"/zh/blog/chaos-mesh-hacktoberfest-2021",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",source:"@site/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",title:"Hacktoberfest 2021: hack with Chaos Mesh!",description:"Chaos Mesh x Hacktoberfest 2021",date:"2021-09-28T00:00:00.000Z",formattedDate:"September 28, 2021",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"open source",permalink:"/zh/blog/tags/open-source"}],readingTime:2.73,truncated:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],nextItem:{title:"How to run chaos experiments on your physical machine",permalink:"/zh/blog/run-chaos-experiments-on-physical-machines"}},l={authorsImageUrls:[void 0]},u=[{value:"What is Chaos Mesh?",id:"what-is-chaos-mesh",children:[]},{value:"Why Hacktoberfest?",id:"why-hacktoberfest",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"Some notes",id:"some-notes",children:[]}],m={toc:u};function p(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chaos Mesh x Hacktoberfest 2021",src:o(38924).Z})),(0,r.kt)("p",null,"Happy ",(0,r.kt)("a",{parentName:"p",href:"https://hacktoberfest.digitalocean.com/"},"Hacktoberfest")," 2021! We are excited to announce that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh"},"Chaos Mesh")," will be participating in the 8th annual Hacktoberfest hosted by DigitalOcean. During the month of October, anyone is welcome to join in on this global celebration of open-source by contributing changes, and earn one of 55,000 custom-made Hacktoberfest T-shirts!"),(0,r.kt)("h2",{id:"what-is-chaos-mesh"},"What is Chaos Mesh?"),(0,r.kt)("p",null,"Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel. Chaos Mesh is currently a CNCF Sandbox project."),(0,r.kt)("p",null,"More importantly, Chaos Mesh fully embraces open source: ever since open sourced 1.5 years ago, the project has gained more than 4k stars with over 1.2k commits from 140+ contributors all over the world. It is through the open-source world that we are able to collaborate with an amazing community. Simply put, Chaos Mesh grew alongside its community and would not be where it is today without the dedication and commitment to open source, which is why we are more than proud to be back again in Hacktoberfest!"),(0,r.kt)("h2",{id:"why-hacktoberfest"},"Why Hacktoberfest?"),(0,r.kt)("p",null,"If you are interested in chaos engineering, open-source, trying to come up with a project for school, or looking into a potential career path as an SRE/DevOps engineer, then this is your golden opportunity: throughout Hacktoberfest, anyone, regardless of background and experience, can join and contribute changes - big or small. So grab the chance and learn about how to make a system more resilient! The Chaos Mesh community welcomes you with open arms and is more than willing to work and share feedback with you. Your contributions can make a big difference!"),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"Here\u2019s a quick run-through of how to be part of Hacktoberfest 2021, and you can check out a detailed how to be part of Hacktoberfest on the ",(0,r.kt)("a",{parentName:"p",href:"https://hacktoberfest.digitalocean.com/resources/participation"},"official website"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up for ",(0,r.kt)("a",{parentName:"li",href:"https://hacktoberfest.digitalocean.com/"},"Hacktoberfest")," anytime between Oct 1 and Oct 31."),(0,r.kt)("li",{parentName:"ol"},"Join the #project-chaos-mesh channel under ",(0,r.kt)("a",{parentName:"li",href:"https://slack.cncf.io/"},"CNCF Slack"),", just in case you have any questions, or need help."),(0,r.kt)("li",{parentName:"ol"},"Start creating and submitting your PRs! Here are some top tips:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CONTRIBUTING.md"},"Chaos Mesh Contribution guide")," before making contributions."),(0,r.kt)("li",{parentName:"ol"},"Have a go at any ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue"),' labeled with "Hacktoberfest", note that these are the ones that we think might be good for those new to open source or Chaos Mesh, so it only serves as a starting point!')))),(0,r.kt)("h2",{id:"some-notes"},"Some notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To get a shirt, you must make 4 approved PRs on opted-in projects between October 1-31 in any time zone. If a repository has no \u201cHacktoberfest\u201d topic set, please reach out to us or mention Hacktoberfest in your PR so we can set repository topics."),(0,r.kt)("li",{parentName:"ul"},"No spams please (e.g. creating a PR just for the sake of it and not adding any value in any way)! Our maintainer will mark a PR as invalid if it\u2019s determined to be spam, which does NOT count towards your PR total."),(0,r.kt)("li",{parentName:"ul"},"Note that if our maintainer reports behavior that\u2019s not in line with the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CODE_OF_CONDUCT.md"},"code of conduct"),", you will be ineligible to participate.")),(0,r.kt)("p",null,"Lastly, good luck, on your marks, get set, and hack away!"))}p.isMDXComponent=!0},38924:function(e,t,o){t.Z=o.p+"assets/images/chaos-mesh-hacktoberfest-2021-134ce78502c4189aa98edb62e7b3a4cf.png"}}]);
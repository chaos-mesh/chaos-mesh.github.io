"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1456],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8549:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"10 Minute Guide to Chaos Mesh v2.1.0"},l=void 0,p={unversionedId:"the-guide-to-chaos-mesh-v21",id:"the-guide-to-chaos-mesh-v21",isDocsHomePage:!1,title:"10 Minute Guide to Chaos Mesh v2.1.0",description:"Chaos Mesh v2.1.0 introduces the following significant changes, which expand the user scenarios of Chaos Mesh and improve overall usability:",source:"@site/docs/the-guide-to-chaos-mesh-v21.md",sourceDirName:".",slug:"/the-guide-to-chaos-mesh-v21",permalink:"/docs/next/the-guide-to-chaos-mesh-v21",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/the-guide-to-chaos-mesh-v21.md",tags:[],version:"current",frontMatter:{title:"10 Minute Guide to Chaos Mesh v2.1.0"},sidebar:"docs",previous:{title:"Status Check in Workflow",permalink:"/docs/next/status-check-in-workflow"},next:{title:"Simulate Pod Faults",permalink:"/docs/next/simulate-pod-chaos-on-kubernetes"}},h=[{value:"Prepare the environment",id:"prepare-the-environment",children:[{value:"Deploy Kubernetes and Chaos Mesh",id:"deploy-kubernetes-and-chaos-mesh",children:[],level:3},{value:"Forward the port for Dashboard service",id:"forward-the-port-for-dashboard-service",children:[],level:3},{value:"Deploy Chaosd",id:"deploy-chaosd",children:[],level:3},{value:"Deploy the test applications",id:"deploy-the-test-applications",children:[{value:"Deploy MySQL",id:"deploy-mysql",children:[],level:4},{value:"Deploy mysql-query service",id:"deploy-mysql-query-service",children:[],level:4}],level:3}],level:2},{value:"Create Chaos experiments",id:"create-chaos-experiments",children:[{value:"Experiment 1: Is the service highly available?",id:"experiment-1-is-the-service-highly-available",children:[],level:3},{value:"Experiment 2: What if the query returns an exception?",id:"experiment-2-what-if-the-query-returns-an-exception",children:[],level:3},{value:"Experiment 3: How does heavy workload affect MySQL queries?",id:"experiment-3-how-does-heavy-workload-affect-mysql-queries",children:[],level:3}],level:2},{value:"What&#39;s next",id:"whats-next",children:[],level:2}],c={toc:h};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaos Mesh v2.1.0 introduces the following significant changes, which expand the user scenarios of Chaos Mesh and improve overall usability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support creating and running Chaos experiments in a physical machine, an important step for Chaos Mesh to become a Chaos Engineering platform."),(0,r.kt)("li",{parentName:"ul"},"Optimize Workflow to display the Workflow-related events and configurations and to create HTTP tasks in Workflow, which greatly expands the user scenarios of workflow."),(0,r.kt)("li",{parentName:"ul"},"Support creating HTTPChaos on Chaos Dashboard, which improves the usability of HTTPChaos."),(0,r.kt)("li",{parentName:"ul"},"Supports simulating the faults of JVM application through ",(0,r.kt)("a",{parentName:"li",href:"https://byteman.jboss.org"},"Byteman"),", which improves the usability and scalability of JVMChaos."),(0,r.kt)("li",{parentName:"ul"},"Integrates GCP certification into Chaos Dashboard.")),(0,r.kt)("p",null,"This tutorial introduces how to use the key features in Chaos Mesh v2.1.0."),(0,r.kt)("h2",{id:"prepare-the-environment"},"Prepare the environment"),(0,r.kt)("h3",{id:"deploy-kubernetes-and-chaos-mesh"},"Deploy Kubernetes and Chaos Mesh"),(0,r.kt)("p",null,"Before you begin, make sure you have installed ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," on your computer."),(0,r.kt)("p",null,"In this section, you are going to deploy Kubernetes and Chaos Mesh using the installation script ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),", which performs the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy a Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"Install Chaos Mesh in that Kubernetes cluster.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The deployment methods of Kubernetes and Chaos Mesh provided in this document are only for testing and quick start. If you want to deploy them in a production environment, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/production-installation-using-helm"},"Install Chaos Mesh using Helm"),"."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone Chaos Mesh project"),(0,r.kt)("p",{parentName:"li"},"You can clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh project")," on Github by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/chaos-mesh/chaos-mesh.git && \\\ncd chaos-mesh && git checkout v2.1.0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy Kubernetes and Chaos Mesh using ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")),(0,r.kt)("p",{parentName:"li"},"Run the following command to deploy a Kubernetes cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./install.sh --local kind\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," is a one-click installation script provided by Chaos Mesh. The script checks your environment automatically, installs ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io"},"kind"),", starts a local Kubernetes cluster, and then installs Chaos Mesh."))),(0,r.kt)("h3",{id:"forward-the-port-for-dashboard-service"},"Forward the port for Dashboard service"),(0,r.kt)("p",null,"To visit Chaos Dashboard in the browser, you need to run the following command to forward the port for the Chaos Dashboard service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333 --address 0.0.0.0\n")),(0,r.kt)("p",null,"After running the command, you can access Chaos Dashboard by visiting <127.0.0.1:2333> in your browser. The Dashboard interface is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard interface",src:a(47006).Z})),(0,r.kt)("h3",{id:"deploy-chaosd"},"Deploy Chaosd"),(0,r.kt)("p",null,"Chaosd, provided by Chaos Mesh, is a tool to run Chaos experiments on a physical machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download Chaosd:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -fsSL -o chaosd-v1.1.0-linux-amd64.tar.gz https://mirrors.chaos-mesh.org/chaosd-v1.1.0-linux-amd64.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the Chaosd file and navigate to the local directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"tar zxvf chaosd-v1.1.0-linux-amd64.tar.gz\ncd chaosd-v1.1.0-linux-amd64\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable Chaosd in the service mode:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"nohup chaosd server --port 31767 2>&1 chaosd.log &\n")))),(0,r.kt)("p",null,'After that, you can send the request for Chaos experiments to Chaosd through the port "31767" of your local machine.'),(0,r.kt)("h3",{id:"deploy-the-test-applications"},"Deploy the test applications"),(0,r.kt)("p",null,'To run the test smoothly, you need to set up a test environment beforehand. Suppose that you have a MySQL database on a physical machine, and an application "mysql-query" in Kubernetes provides data query services for MySQL.'),(0,r.kt)("p",null,"In this tutorial, you are going to use Chaos Mesh to insert faults into a physical machine and an application in Kubernetes, and then see the impact of the faults on your service."),(0,r.kt)("p",null,"The architecture of the test application is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture of the test application",src:a(34691).Z})),(0,r.kt)("h4",{id:"deploy-mysql"},"Deploy MySQL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy MySQL v8.0 using Docker:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run --rm --name mysql-3306 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql/mysql-server:8.0.27 --port=3306 --bind-address=0.0.0.0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Docker to enter the container and connect to MySQL, because it is not yet possible to access the MySQL service from outside the container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker exec -it mysql-3306 mysql -uroot -p123456\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following SQL statements to create a user that can access the database externally, and grant all privileges to the user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"CREATE USER 'chaos'@'%' IDENTIFIED BY 'chaos-mesh';\nGRANT ALL PRIVILEGES ON * . * TO 'chaos'@'%';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the dataset for testing. You can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/blob/chaos_demo/mysqldemo/example.SQL"},(0,r.kt)("inlineCode",{parentName:"a"},"example.SQL"))," in MySQL to generate the test data."))),(0,r.kt)("h4",{id:"deploy-mysql-query-service"},"Deploy mysql-query service"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/tree/chaos_demo/mysqldemo"},"mysql-query")," is a demo application written in Java, whose image is uploaded to Docker Hub. To deploy the service in the Kubernetes cluster, take the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/blob/chaos_demo/mysqldemo/deployment.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"deployment.yaml"))," file and modify the configuration."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You need to replace the IP address in the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"MYSQL_DSN")," with the address of the server where MySQL is installed.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yaml")," to create the mysql-query service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl create namespace mysql-query\nkubectl apply -f ./deployment.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether the Pod in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-query")," namespace runs successfully:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n mysql-query\n")),(0,r.kt)("p",{parentName:"li"},"The expected result is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                           READY   STATUS    RESTARTS   AGE\nmysql-query-6dd8bd5474-5zbkw   1/1     Running   0          60s\nmysql-query-6dd8bd5474-k8bgs   1/1     Running   0          60s\n")),(0,r.kt)("p",{parentName:"li"},"In the result, you can find that there are two Pods that share the query request, and the mysql-query service has configured ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePort"),". Therefore, the Pods can directly access the service on the nodes of the Kubernetes cluster through the NodePort (",(0,r.kt)("inlineCode",{parentName:"p"},"30001")," in here).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to access kind-control-plane and send HTTP requests:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'docker exec -it kind-control-plane curl -X GET "http://127.0.0.1:30001/query?sql=SELECT%20*%20FROM%20chaos.website"\n')),(0,r.kt)("p",{parentName:"li"},"mysql-query gets the SQL statement in the request and runs it in MySQL. The expected result is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"id, name, url\n1, Chaos Mesh, https://chaos-mesh.org\n2, GitHub, https://github.com\n2, Google, https://google.com\nElapsed time: 35(ms)\n")))),(0,r.kt)("p",null,"If the result shows the query results and the query time, the application can provide its service normally."),(0,r.kt)("h2",{id:"create-chaos-experiments"},"Create Chaos experiments"),(0,r.kt)("p",null,"After deploying Chaos Mesh, you can design Chaos experiments for your application and create the experiments using Chaos Mesh v2.1.0."),(0,r.kt)("h3",{id:"experiment-1-is-the-service-highly-available"},"Experiment 1: Is the service highly available?"),(0,r.kt)("p",null,"If you send HTTP requests to mysql-query service through NodePort multiple times and check the logs of the two mysql-query Pods, you can see that both Pods print the query requests in their logs. In such cases, these two Pods share the responsibility for serving your SQL queries."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Two mysql-query Pods",src:a(3870).Z})),(0,r.kt)("p",null,"If one of the Pods fails and cannot be connected, a highly available system can automatically forward the requests to another Pod. You can create a Chaos experiment to verify the service's high availability. The steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New experiment")," in Chaos Dashboard:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"New experiment",src:a(71966).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," as the experiment environment and ",(0,r.kt)("strong",{parentName:"p"},"HTTP Fault")," as the experiment type:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select experiment environment",src:a(70851).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Request abort")," as the fault behavior, and fill out the fault configuration:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select Request abort",src:a(59306).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment information",src:a(91917).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."))),(0,r.kt)("p",null,"This experiment chooses a random Pod of the mysql-query service and injects the HTTP fault into the Pod. The chosen Pod will terminate its connection."),(0,r.kt)("p",null,"After running the experiment, you can verify the experiment results by running the following command ",(0,r.kt)("em",{parentName:"p"},"multiple times"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker exec -it kind-control-plane curl -X GET "http://127.0.0.1:30001/query?sql=SELECT%20*%20FROM%20chaos.website"\n')),(0,r.kt)("p",null,"You can see that the command sometimes returns a normal response, but sometimes it also reports an error as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Report errors",src:a(28203).Z})),(0,r.kt)("p",null,"The experiment shows that this service is not highly available. You have successfully found a fault in the service architecture through a HTTP fault injection."),(0,r.kt)("p",null,"After the experiment, you might need to consider how to optimize the service architecture, such as using Ingress and NGINX."),(0,r.kt)("h3",{id:"experiment-2-what-if-the-query-returns-an-exception"},"Experiment 2: What if the query returns an exception?"),(0,r.kt)("p",null,"Even though all of your SQL queries executed in normal situations return normal data, it does not mean your code has no bugs. If the query returns an exception, you might wonder whether your application can handle the exception and return the error message. In such cases, you can verify that situation by running a Chaos experiment."),(0,r.kt)("p",null,"Before creating the experiment, you need to understand the code logic of your application. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WangXiangUSTC/byteman-example/blob/318a35fbff3e1648464b69bf892fcc0ec1860a28/mysqldemo/src/main/java/com/mysqldemo/App.java#L126"},(0,r.kt)("inlineCode",{parentName:"a"},"querySQL"))," function executes SQL statements and can throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"java.sql.SQLException")," exception. You can inject faults into this function."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New experiment")," in Chaos Dashboard. Select ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," as the experiment environment and ",(0,r.kt)("strong",{parentName:"p"},"JVM Fault")," as the experiment type:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select experiment type",src:a(54317).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Exception")," as the fault behavior, and fill out the fault configuration:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select fault behaviors",src:a(83434).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment information",src:a(72536).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."))),(0,r.kt)("p",null,"This experiment chooses all Pods of the mysql-query service and injects the JVM fault into the Pods. When your application executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"querySQL")," function, it throws an exception."),(0,r.kt)("p",null,"After running the experiment, you can verify the experiment results by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker exec -it kind-control-plane curl -X GET "http://127.0.0.1:30001/query?sql=SELECT%20*%20FROM%20chaos.test"\ncurl: (18) transfer closed with outstanding read data remaining\n')),(0,r.kt)("p",null,"As you can see in the result, the application reports an error, but the result is not the exception information of the application. The logs of the two mysql-query Pods do not contain any notable information."),(0,r.kt)("p",null,"To find out the root cause, you need to read the code and find out which part of the code is executed after ",(0,r.kt)("inlineCode",{parentName:"p"},"java.sql.SQLException")," is thrown. Through investigation, you can find an exception caused by a null pointer."),(0,r.kt)("p",null,"You have successfully found a fault in the code through a JVM fault injection."),(0,r.kt)("h3",{id:"experiment-3-how-does-heavy-workload-affect-mysql-queries"},"Experiment 3: How does heavy workload affect MySQL queries?"),(0,r.kt)("p",null,"After the two preceding experiments, you already know how vulnerable your application can be. This is what Chaos Engineering is all about: it helps you understand how the system handles failure, identify potential issues, fix them in advance, and thereby build confidence in your system."),(0,r.kt)("p",null,"After you fix the two issues exposed above, you might want to run an experiment on the storage of your application \u2013 MySQL. When the server that MySQL runs on also runs heavy workloads for other applications, how does those workloads affect MySQL queries? You can check it by the following experiment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New experiment")," in Chaos Dashboard. Because MySQL is deployed on a physical machine, select ",(0,r.kt)("strong",{parentName:"p"},"Physic")," as the experiment environment and ",(0,r.kt)("strong",{parentName:"p"},"Stress test")," as the experiment type:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Stree type",src:a(44315).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"CPU")," as the fault behavior, and fill out the fault configuration:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Stree test",src:a(53279).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information. In the ",(0,r.kt)("strong",{parentName:"p"},"Address")," text box, write the Chaosd service address:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Write address",src:a(1496).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."))),(0,r.kt)("p",null,"This experiment injects CPU stress fault into the physical machine using Chaosd."),(0,r.kt)("p",null,"To check the experiment result, run the following command to send a HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker exec -it kind-control-plane curl -X GET "http://127.0.0.1:30001/query?sql=SELECT%20*%20FROM%20chaos.website"\n')),(0,r.kt)("p",null,"The expected result is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id, name, url\n1, Chaos Mesh, https://chaos-mesh.org\n2, GitHub, https://github.com\n2, Google, https://google.com\nElapsed time: 39(ms)\n")),(0,r.kt)("p",null,"You can see that the query successfully returns a result. The elapsed time does not increase significantly."),(0,r.kt)("p",null,"For now, you do not have to worry about the performance of MySQL, and you can even deploy other applications on this physical machine. However, when the data volume is large and the database must serve thousands of queries per second, MySQL might not be able to provide your application with acceptable performance. At this time, you might consider try TiDB."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"By going through this tutorial, you have now tried out three experiments of Chaos Mesh v2.1.0 (HTTP, JVM, physical machine environment) and felt the charm of Chaos Mesh and Chaos Engineering."),(0,r.kt)("p",null,"If you have any questions when you use Chaos Mesh, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"tell us"),"."))}u.isMDXComponent=!0},47006:function(e,t,a){t.Z=a.p+"assets/images/quick-start-chaos-mesh-dashboard-67ebdb901942662ad2bf1e721049abc2.png"},91917:function(e,t,a){t.Z=a.p+"assets/images/quick-start-experiment-information-0d7962024f96e3e16159328551389eec.png"},72536:function(e,t,a){t.Z=a.p+"assets/images/quick-start-fill-in-info-29e77f7e647830a74ca86d564f038bd8.png"},71966:function(e,t,a){t.Z=a.p+"assets/images/quick-start-new-experiment-dashboard-2055c612921e9de013d18f6311e95ecc.png"},28203:function(e,t,a){t.Z=a.p+"assets/images/quick-start-report-error-4368b8a8ce24eb236545d6052083f4fb.png"},53279:function(e,t,a){t.Z=a.p+"assets/images/quick-start-select-cpu-cecb5021b3aefb2891bc7ca7cc1d6e18.png"},70851:function(e,t,a){t.Z=a.p+"assets/images/quick-start-select-experiment-on-dashboard-43066ff94588a2b1213ae8b0cf0224f4.png"},54317:function(e,t,a){t.Z=a.p+"assets/images/quick-start-select-experiment-type-0557d0a80eaa99ba8d814d8a06c416b0.png"},83434:function(e,t,a){t.Z=a.p+"assets/images/quick-start-select-fault-behavior-a41a29f2a6cbe5f087ce5f599ce16b77.png"},59306:function(e,t,a){t.Z=a.p+"assets/images/quick-start-select-request-abort-f81b88d25b0642f41c49116bae7d0236.png"},44315:function(e,t,a){t.Z=a.p+"assets/images/quick-start-stress-test-3c3e3b95e94b1bb4e294f5a2509a7e27.png"},34691:function(e,t,a){t.Z=a.p+"assets/images/quick-start-test-application-architecture-24e34f3075b7e3beb48f8830010f52e6.png"},3870:function(e,t,a){t.Z=a.p+"assets/images/quick-start-two-pods-for-sql-queries-cb1053cf3b1161b14c91efb13e9db0c5.png"},1496:function(e,t,a){t.Z=a.p+"assets/images/quick-start-write-address-8a754c26e834cbeacaadfcba21896533.png"}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[51964],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(f,l(l({ref:e},p),{},{components:a})):n.createElement(f,l({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26568:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Simulate Network Faults"},l=void 0,i={unversionedId:"simulate-network-chaos-in-physical-nodes",id:"version-2.1.5/simulate-network-chaos-in-physical-nodes",title:"Simulate Network Faults",description:"This document introduces how to use Chaosd to simulate network faults. The simulations can be completed by modifying network routing and traffic flow control using iptables, ipsets, tc, etc.",source:"@site/versioned_docs/version-2.1.5/simulate-network-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-network-chaos-in-physical-nodes",permalink:"/docs/2.1.5/simulate-network-chaos-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.5/simulate-network-chaos-in-physical-nodes.md",tags:[],version:"2.1.5",frontMatter:{title:"Simulate Network Faults"},sidebar:"version-2.1.5/docs",previous:{title:"Simulate Process Faults",permalink:"/docs/2.1.5/simulate-process-chaos-in-physical-nodes"},next:{title:"Simulate Host Faults",permalink:"/docs/2.1.5/simulate-host-console-in-physical-nodes"}},s={},c=[{value:"Create network fault experiments using command-line mode",id:"create-network-fault-experiments-using-command-line-mode",level:2},{value:"Network corruption",id:"network-corruption",level:3},{value:"The command for network corruption",id:"the-command-for-network-corruption",level:4},{value:"Configuration items related to network corruption",id:"configuration-items-related-to-network-corruption",level:4},{value:"An example of network corruption",id:"an-example-of-network-corruption",level:4},{value:"Network latency",id:"network-latency",level:3},{value:"The command for network latency",id:"the-command-for-network-latency",level:4},{value:"Configuration items related to network latency",id:"configuration-items-related-to-network-latency",level:4},{value:"An example of network latency",id:"an-example-of-network-latency",level:4},{value:"Network duplication",id:"network-duplication",level:3},{value:"The command for network duplication",id:"the-command-for-network-duplication",level:4},{value:"Configuration items related to network duplication",id:"configuration-items-related-to-network-duplication",level:4},{value:"An example of network duplication",id:"an-example-of-network-duplication",level:4},{value:"Network loss",id:"network-loss",level:3},{value:"The command for network loss",id:"the-command-for-network-loss",level:4},{value:"Configuration items related to network loss",id:"configuration-items-related-to-network-loss",level:4},{value:"An example of network loss",id:"an-example-of-network-loss",level:4},{value:"Create network fault experiments using service mode",id:"create-network-fault-experiments-using-service-mode",level:2}],p={toc:c};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document introduces how to use Chaosd to simulate network faults. The simulations can be completed by modifying network routing and traffic flow control using iptables, ipsets, tc, etc."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the NET_SCH_NETEM module is installed in the Linux kernel. If you are using CentOS, you can install the module through the kernel-modules-extra package. Most other Linux distributions have installed it already by default.")),(0,r.kt)("h2",{id:"create-network-fault-experiments-using-command-line-mode"},"Create network fault experiments using command-line mode"),(0,r.kt)("p",null,"This section introduces how to create network fault experiments using command-line mode."),(0,r.kt)("p",null,"Before creating an experiment, you can run the following command to check the types of network faults supported by Chaosd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network --help\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Network attack related commands\n\nUsage:\n  chaosd attack network [command]\n\nAvailable Commands:\n  corrupt     corrupt network packet\n  delay       delay network\n  duplicate   duplicate network packet\n  loss        loss network packet\n\nFlags:\n  -h, --help   help for network\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack network [command] --help\" for more information about a command.\n")),(0,r.kt)("p",null,"Currently, you can simulate four experimental scenarios using Chaosd: network corruption, network latency, network duplication, and network loss."),(0,r.kt)("h3",{id:"network-corruption"},"Network corruption"),(0,r.kt)("p",null,"You can run the command below to see the configuration of simulated network corruption using Chaosd."),(0,r.kt)("h4",{id:"the-command-for-network-corruption"},"The command for network corruption"),(0,r.kt)("p",null,"The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network corrupt --help\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"corrupt network packet\n\nUsage:\n  chaosd attack network corrupt [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for corrupt\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to corrupt (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-items-related-to-network-corruption"},"Configuration items related to network corruption"),(0,r.kt)("p",null,"The related configuration items are described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"correlation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The correlation between the percentage of current corrupt occurrence and the previous occurrence."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default ).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"device"),(0,r.kt)("td",{parentName:"tr",align:"left"},"d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the impacted network interface card."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "eth0". The value is required.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"egress-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic that only impacts specific destination ports. It can only be configured when the protocol is TCP or UDP."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hostname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The host name impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "chaos-mesh.org".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP address impacted by egress traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "123.123.123.123".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP protocol impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. Supported protocols: tcp, udp, icmp, all (all network protocols).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic which only impact specific source ports. It can only be configured when the protocol is tcp or udp."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. Use a ',' to delimit the specific port or to indicate the range of the ports, such as \"80,8001:8010\".")))),(0,r.kt)("h4",{id:"an-example-of-network-corruption"},"An example of network corruption"),(0,r.kt)("p",null,"Run the following command to simulate network corruption:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network corrupt -d eth0 -i 172.16.4.4 --percent 50\n")),(0,r.kt)("p",null,"If the command runs successfully, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack network successfully, uid: 4eab1e62-8d60-45cb-ac85-3c17b8ac4825\n")),(0,r.kt)("h3",{id:"network-latency"},"Network latency"),(0,r.kt)("p",null,"You can run the command below to see the configuration of simulated network latency using Chaosd."),(0,r.kt)("h4",{id:"the-command-for-network-latency"},"The command for network latency"),(0,r.kt)("p",null,"The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network delay --help\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"delay network\n\nUsage:\n  chaosd attack network delay [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for delay\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n  -j, --jitter string        jitter time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -l, --latency string       delay egress time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-items-related-to-network-latency"},"Configuration items related to network latency"),(0,r.kt)("p",null,"The related configuration items are described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"correlation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The correlation between the current latency and the previous one."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"device"),(0,r.kt)("td",{parentName:"tr",align:"left"},"d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the impacted network interface card."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "eth0". The value is required.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"egress-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic which only impact specific destination ports. It can only be configured when the protocol is TCP or UDP."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hostname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The host name impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "chaos-mesh.org".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP address impacted by egress traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "123.123.123.123".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"jitter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"j"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Range of the length of network delay time."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String. The time units can be: ns, us (\xb5s), ms, s, m, h, such as "1ms".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"latency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Length of network delay time."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String. The time units can be: ns, us (\u03bcs), ms, s, m, h, such as "1ms".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP protocol impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. It supports the following protocol types: tcp, udp, icmp, all (all network protocols).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic that only impacts specified source ports. It can only be configured when the protocol is TCP or UDP."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")))),(0,r.kt)("h4",{id:"an-example-of-network-latency"},"An example of network latency"),(0,r.kt)("p",null,"Run the following command to simulate network latency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network delay -d eth0 -i 172.16.4.4 -l 10ms\n")),(0,r.kt)("p",null,"If the command runs successfully, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack network successfully, uid: 4b23a0b5-e193-4b27-90a7-3e04235f32ab\n")),(0,r.kt)("h3",{id:"network-duplication"},"Network duplication"),(0,r.kt)("p",null,"You can run the command below to see the configuration of simulated network duplication using Chaosd:"),(0,r.kt)("h4",{id:"the-command-for-network-duplication"},"The command for network duplication"),(0,r.kt)("p",null,"The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network duplicate --help\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"duplicate network packet\n\nUsage:\n  chaosd attack network duplicate [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for duplicate\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to duplicate (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-items-related-to-network-duplication"},"Configuration items related to network duplication"),(0,r.kt)("p",null,"The related configuration items are described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"correlation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The correlation between the percentage of current duplication occurrence and the previous one."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage which range is 0 to 100 (10 is 10%) (default "0").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"device"),(0,r.kt)("td",{parentName:"tr",align:"left"},"d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the impacted network interface card."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "eth0". The value is required.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"egress-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hostname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The host name impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "chaos-mesh.org".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP address impacted by egress traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "123.123.123.123".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ratio of network packet duplicate."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP protocol impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. It supports the following protocol types: tcp, udp, icmp, all (all network protocols).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic which only impact specific source ports. It can only be configured when the protocol is tcp or udp."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")))),(0,r.kt)("h4",{id:"an-example-of-network-duplication"},"An example of network duplication"),(0,r.kt)("p",null,"Run the following command to simulate network duplication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network duplicate -d eth0 -i 172.16.4.4 --percent 50\n")),(0,r.kt)("p",null,"If the command runs successfully, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack network successfully, uid: 7bcb74ee-9101-4ae4-82f0-e44c8a7f113c\n")),(0,r.kt)("h3",{id:"network-loss"},"Network loss"),(0,r.kt)("p",null,"You can run the command below to see the configuration of simulated network loss using Chaosd:"),(0,r.kt)("h4",{id:"the-command-for-network-loss"},"The command for network loss"),(0,r.kt)("p",null,"The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network loss --help\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"loss network packet\n\nUsage:\n  chaosd attack network loss [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for loss\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to drop (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-items-related-to-network-loss"},"Configuration items related to network loss"),(0,r.kt)("p",null,"The related configuration items are described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"correlation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The correlation between the percentage of the current network loss and the previous one."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage which range is 0 to 100 (10 is 10%) (default "0").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"device"),(0,r.kt)("td",{parentName:"tr",align:"left"},"d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the impacted network interface card."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "eth0". The value is required.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"egress-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hostname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The host name impacted by traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "chaos-mesh.org".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IP address impacted by egress traffic."),(0,r.kt)("td",{parentName:"tr",align:"left"},'String, such as "123.123.123.123".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ratio of network packet loss."),(0,r.kt)("td",{parentName:"tr",align:"left"},'Int. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only impact traffic using this IP protocol."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. It supports the following protocol types: tcp, udp, icmp, all (all network protocols).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The egress traffic which only impact specific source ports. It can only be configured when the protocol is tcp or udp."),(0,r.kt)("td",{parentName:"tr",align:"left"},"String. You need to use a ',' to separate the specific port or to indicate the range of the port, such as \"80,8001:8010\".")))),(0,r.kt)("h4",{id:"an-example-of-network-loss"},"An example of network loss"),(0,r.kt)("p",null,"Run the following command to simulate network loss:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack network loss -d eth0 -i 172.16.4.4 --percent 50\n")),(0,r.kt)("p",null,"If the command runs successfully, the output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack network successfully, uid: 1e818adf-3942-4de4-949b-c8499f120265\n")),(0,r.kt)("h2",{id:"create-network-fault-experiments-using-service-mode"},"Create network fault experiments using service mode"),(0,r.kt)("p",null,"(To be added)"))}d.isMDXComponent=!0}}]);
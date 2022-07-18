"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[15191],{90246:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.1.4","label":"1.1.4","banner":"unmaintained","badge":true,"className":"docs-version-1.1.4","isLast":false,"docsSidebars":{"version-1.1.4/docs":[{"collapsed":true,"type":"category","label":"Overview","items":[{"type":"link","label":"What is Chaos Mesh","href":"/docs/1.1.4/","docId":"overview/what_is_chaos_mesh"},{"type":"link","label":"Features","href":"/docs/1.1.4/overview/features","docId":"overview/features"},{"type":"link","label":"Architecture","href":"/docs/1.1.4/overview/architecture","docId":"overview/architecture"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Concepts","items":[{"type":"link","label":"Chaos Engineering","href":"/docs/1.1.4/concepts/chaos_engineering","docId":"concepts/chaos_engineering"},{"type":"link","label":"Blast Radius","href":"/docs/1.1.4/concepts/blast_radius","docId":"concepts/blast_radius"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Getting Started","items":[{"type":"link","label":"Get started on kind","href":"/docs/1.1.4/get_started/get_started_on_kind","docId":"get_started/get_started_on_kind"},{"type":"link","label":"Get started on Minikube","href":"/docs/1.1.4/get_started/get_started_on_minikube","docId":"get_started/get_started_on_minikube"}],"collapsible":true},{"collapsed":true,"type":"category","label":"User Guides","items":[{"type":"link","label":"Installation","href":"/docs/1.1.4/user_guides/installation","docId":"user_guides/installation"},{"type":"link","label":"Define the Scope of Chaos Experiment","href":"/docs/1.1.4/user_guides/experiment_scope","docId":"user_guides/experiment_scope"},{"type":"link","label":"Run Chaos Experiment","href":"/docs/1.1.4/user_guides/run_chaos_experiment","docId":"user_guides/run_chaos_experiment"},{"type":"link","label":"Chaos Dashboard","href":"/docs/1.1.4/user_guides/dashboard","docId":"user_guides/dashboard"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Chaos Experiments","items":[{"type":"link","label":"PodChaos Experiment","href":"/docs/1.1.4/chaos_experiments/podchaos","docId":"chaos_experiments/podchaos"},{"type":"link","label":"NetworkChaos Experiment","href":"/docs/1.1.4/chaos_experiments/networkchaos","docId":"chaos_experiments/networkchaos"},{"type":"link","label":"StressChaos Experiment","href":"/docs/1.1.4/chaos_experiments/stresschaos","docId":"chaos_experiments/stresschaos"},{"type":"link","label":"TimeChaos Experiment","href":"/docs/1.1.4/chaos_experiments/timechaos","docId":"chaos_experiments/timechaos"},{"type":"link","label":"IOChaos Experiment","href":"/docs/1.1.4/chaos_experiments/iochaos","docId":"chaos_experiments/iochaos"},{"type":"link","label":"KernelChaos Experiment","href":"/docs/1.1.4/chaos_experiments/kernelchaos","docId":"chaos_experiments/kernelchaos"},{"type":"link","label":"DNSChaos Experiment","href":"/docs/1.1.4/chaos_experiments/dnschaos","docId":"chaos_experiments/dnschaos"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Use Cases","items":[{"type":"link","label":"Network latency simulation across multiple data centers","href":"/docs/1.1.4/use_cases/multi_data_centers","docId":"use_cases/multi_data_centers"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Development Guide","items":[{"type":"link","label":"Development Guide","href":"/docs/1.1.4/development_guides/development_overview","docId":"development_guides/development_overview"},{"type":"link","label":"Setup the development environment","href":"/docs/1.1.4/development_guides/setup_env","docId":"development_guides/setup_env"},{"type":"link","label":"Develop a New Chaos","href":"/docs/1.1.4/development_guides/develop_a_new_chaos","docId":"development_guides/develop_a_new_chaos"},{"type":"link","label":"Add Facilities to Chaos Daemon","href":"/docs/1.1.4/development_guides/add_facilities_to_chaos_daemon","docId":"development_guides/add_facilities_to_chaos_daemon"}],"collapsible":true},{"type":"link","label":"FAQs","href":"/docs/1.1.4/faqs","docId":"faqs"},{"collapsed":true,"type":"category","label":"Releases","items":[{"type":"link","label":"Chaos Mesh v1.0.0 Release Notes","href":"/docs/1.1.4/releases/v1.0.0","docId":"releases/v1.0.0"},{"type":"link","label":"Chaos Mesh v0.9.0 Release Notes","href":"/docs/1.1.4/releases/v0.9.0","docId":"releases/v0.9.0"},{"type":"link","label":"Chaos Mesh v0.8.0 Release Notes","href":"/docs/1.1.4/releases/v0.8.0","docId":"releases/v0.8.0"}],"collapsible":true}]},"docs":{"chaos_experiments/dnschaos":{"id":"chaos_experiments/dnschaos","title":"DNSChaos Experiment","description":"This document describes how to create DNSChaos experiments in Chaos Mesh.","sidebar":"version-1.1.4/docs"},"chaos_experiments/iochaos":{"id":"chaos_experiments/iochaos","title":"IOChaos Experiment","description":"This document walks you through the IOChaos experiment.","sidebar":"version-1.1.4/docs"},"chaos_experiments/kernelchaos":{"id":"chaos_experiments/kernelchaos","title":"KernelChaos Experiment","description":"This document describes how to create KernelChaos experiments in Chaos Mesh.","sidebar":"version-1.1.4/docs"},"chaos_experiments/networkchaos":{"id":"chaos_experiments/networkchaos","title":"NetworkChaos Experiment","description":"This document describes how to create NetworkChaos experiments in Chaos Mesh.","sidebar":"version-1.1.4/docs"},"chaos_experiments/podchaos":{"id":"chaos_experiments/podchaos","title":"PodChaos Experiment","description":"This document introduces how to create PodChaos experiments.","sidebar":"version-1.1.4/docs"},"chaos_experiments/stresschaos":{"id":"chaos_experiments/stresschaos","title":"StressChaos Experiment","description":"This document helps you create StressChaos experiments.","sidebar":"version-1.1.4/docs"},"chaos_experiments/timechaos":{"id":"chaos_experiments/timechaos","title":"TimeChaos Experiment","description":"This document describe how to add TimeChaos experiments in Chaos Mesh.","sidebar":"version-1.1.4/docs"},"concepts/blast_radius":{"id":"concepts/blast_radius","title":"Blast Radius","description":"Chaos experiments are executed in production environments, this leaves room for customer facing outages. While there has to be some allowance for short-term negative impact the blast radius or fallout from the experiment must be minimized and contained.","sidebar":"version-1.1.4/docs"},"concepts/chaos_engineering":{"id":"concepts/chaos_engineering","title":"Chaos Engineering","description":"Chaos engineering is the discipline of experimenting on a software system in production in order to build confidence in the system\'s capability to withstand turbulent and unexpected conditions. More details refer to Chaos Engineering.","sidebar":"version-1.1.4/docs"},"development_guides/add_facilities_to_chaos_daemon":{"id":"development_guides/add_facilities_to_chaos_daemon","title":"Add Facilities to Chaos Daemon","description":"In Develop a new chaos, we have added a new chaos type named HelloWorldChaos, which will print hello world in chaos-controller-manager. To actually run the chaos, we need to configure some facilities for Chaos Daemon - so that controller-manager can select the specified Pods according to the chaos configuration and sends the chaos request to the chaos-daemon corresponding to these Pods. Once these are done, the chaos-daemon could run the chaos at last.","sidebar":"version-1.1.4/docs"},"development_guides/develop_a_new_chaos":{"id":"development_guides/develop_a_new_chaos","title":"Develop a New Chaos","description":"After preparing the development environment, let\'s develop a new type of chaos, HelloWorldChaos, which only prints a \\"Hello World!\\" message to the log. Generally, to add a new chaos type for Chaos Mesh, you need to take the following steps:","sidebar":"version-1.1.4/docs"},"development_guides/development_overview":{"id":"development_guides/development_overview","title":"Development Guide","description":"This guide prepares you for the development of Chaos Mesh from scratch. Before you get started, it is recommended to get familiar with the project through the following materials:","sidebar":"version-1.1.4/docs"},"development_guides/setup_env":{"id":"development_guides/setup_env","title":"Setup the development environment","description":"This document walks you through the environment setup process for Chaos Mesh development.","sidebar":"version-1.1.4/docs"},"faqs":{"id":"faqs","title":"FAQs","description":"Q: If I do not have Kubernetes clusters deployed, can I use Chaos Mesh to create chaos experiments?","sidebar":"version-1.1.4/docs"},"get_started/get_started_on_kind":{"id":"get_started/get_started_on_kind","title":"Get started on kind","description":"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.","sidebar":"version-1.1.4/docs"},"get_started/get_started_on_minikube":{"id":"get_started/get_started_on_minikube","title":"Get started on Minikube","description":"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.","sidebar":"version-1.1.4/docs"},"overview/architecture":{"id":"overview/architecture","title":"Architecture","description":"The architecture of Chaos Mesh is as follows:","sidebar":"version-1.1.4/docs"},"overview/features":{"id":"overview/features","title":"Features","description":"Easy to Use","sidebar":"version-1.1.4/docs"},"overview/what_is_chaos_mesh":{"id":"overview/what_is_chaos_mesh","title":"What is Chaos Mesh","description":"Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments. At the current stage, it has the following components:","sidebar":"version-1.1.4/docs"},"releases/v0.8.0":{"id":"releases/v0.8.0","title":"Chaos Mesh v0.8.0 Release Notes","description":"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.","sidebar":"version-1.1.4/docs"},"releases/v0.9.0":{"id":"releases/v0.9.0","title":"Chaos Mesh v0.9.0 Release Notes","description":"Chaos Mesh v0.9.0 mainly introduces the Chaos Dashboard component, which is the web UI for users to manage and monitor chaos experiments. In this version, NetworkChaos has been refactored to support setting multiple network attack rules on the same Pod at the same time, a one-click installation script is added to help users quickly get started with Chaos Mesh.","sidebar":"version-1.1.4/docs"},"releases/v1.0.0":{"id":"releases/v1.0.0","title":"Chaos Mesh v1.0.0 Release Notes","description":"On September 25, 2020, Chaos Mesh v1.0 is now released! We have made some significant improvements in this release, including the refactor of IoChaos, providing more security guarantees for chaos experiments, supporting the setting of protected Namespaces, and supporting the use of Namespace\u2019s permissions. In addition, this release is also focused on Chaos Dashboard and Chaos Operator components, which helps users create more stable, safe, and controllable chaos experiments.","sidebar":"version-1.1.4/docs"},"use_cases/multi_data_centers":{"id":"use_cases/multi_data_centers","title":"Network latency simulation across multiple data centers","description":"This document helps you simulate multiple data centers scenarios.","sidebar":"version-1.1.4/docs"},"user_guides/dashboard":{"id":"user_guides/dashboard","title":"Chaos Dashboard","description":"Chaos Dashboard is a one-step web UI for managing, designing, and monitoring chaos experiments on Chaos Mesh. This document provides a step-by-step introduction on how to use Chaos Dashboard.","sidebar":"version-1.1.4/docs"},"user_guides/experiment_scope":{"id":"user_guides/experiment_scope","title":"Define the Scope of Chaos Experiment","description":"This document describes how to define the scope of a chaos experiment.","sidebar":"version-1.1.4/docs"},"user_guides/installation":{"id":"user_guides/installation","title":"Installation","description":"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.","sidebar":"version-1.1.4/docs"},"user_guides/run_chaos_experiment":{"id":"user_guides/run_chaos_experiment","title":"Run Chaos Experiment","description":"Now that you have deployed Chaos Mesh in your environment, it\'s time to use it for your chaos experiments. This document walks you through the process of running chaos experiments. It also describes the regular operations on chaos experiments.","sidebar":"version-1.1.4/docs"}}}')}}]);
"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5378],{30468:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"2.1.5","label":"2.1.5","banner":"unmaintained","badge":true,"className":"docs-version-2.1.5","isLast":false,"docsSidebars":{"version-2.1.5/docs":[{"type":"category","label":"About Chaos Mesh","items":[{"type":"link","label":"Chaos Mesh Overview","href":"/docs/2.1.5/"},{"type":"link","label":"Basic Features","href":"/docs/2.1.5/basic-features"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"category","label":"Installation and Deployment","collapsed":false,"items":[{"type":"link","label":"Quick Start (Test Recommended)","href":"/docs/2.1.5/quick-start"},{"type":"link","label":"Install Chaos Mesh using Helm (Recommended for Production Environments)","href":"/docs/2.1.5/production-installation-using-helm"},{"type":"link","label":"Install Chaos Mesh Offline","href":"/docs/2.1.5/offline-installation"},{"type":"link","label":"Persistence Chaos Dashboard","href":"/docs/2.1.5/persistence-dashboard"},{"type":"link","label":"Uninstall Chaos Mesh","href":"/docs/2.1.5/uninstallation"},{"type":"link","label":"Supported Releases","href":"/docs/2.1.5/supported-releases"}],"collapsible":true},{"type":"link","label":"Manage User Permissions","href":"/docs/2.1.5/manage-user-permissions"},{"type":"link","label":"Configure namespace for Chaos experiments","href":"/docs/2.1.5/configure-enabled-namespace"},{"type":"category","label":"Run a Single Chaos Experiment","items":[{"type":"link","label":"Define the Scope of Chaos Experiments","href":"/docs/2.1.5/define-chaos-experiment-scope"},{"type":"link","label":"Define Scheduling Rules","href":"/docs/2.1.5/define-scheduling-rules"},{"type":"link","label":"Run a Chaos Experiment","href":"/docs/2.1.5/run-a-chaos-experiment"},{"type":"link","label":"Inspect Results of Chaos Experiments","href":"/docs/2.1.5/inspect-chaos-experiments"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Orchestrate Multiple Chaos Experiments","items":[{"type":"link","label":"Create Chaos Mesh Workflow","href":"/docs/2.1.5/create-chaos-mesh-workflow"},{"type":"link","label":"Serial and Parallel Experiments","href":"/docs/2.1.5/run-chaos-experiments-in-serial-or-parallel"},{"type":"link","label":"Send HTTP Requests on Workflow","href":"/docs/2.1.5/send-http-request-on-workflow"},{"type":"link","label":"Check Workflow Status","href":"/docs/2.1.5/check-workflow-status"}],"collapsible":true,"collapsed":true}],"collapsible":true},{"type":"category","label":"Tutorials","collapsed":false,"items":[{"type":"link","label":"10 Minute Guide to Chaos Mesh v2.1.0","href":"/docs/2.1.5/the-guide-to-chaos-mesh-v21"}],"collapsible":true},{"type":"category","label":"Types of Chaos Experiments","items":[{"type":"category","label":"Kubernetes","items":[{"type":"link","label":"Simulate Pod Faults","href":"/docs/2.1.5/simulate-pod-chaos-on-kubernetes"},{"type":"link","label":"Simulate Network Faults","href":"/docs/2.1.5/simulate-network-chaos-on-kubernetes"},{"type":"link","label":"Simulate Stress Scenarios","href":"/docs/2.1.5/simulate-heavy-stress-on-kubernetes"},{"type":"link","label":"Simulate File I/O Faults","href":"/docs/2.1.5/simulate-io-chaos-on-kubernetes"},{"type":"link","label":"Simulate DNS Faults","href":"/docs/2.1.5/simulate-dns-chaos-on-kubernetes"},{"type":"link","label":"Simulate Time Faults","href":"/docs/2.1.5/simulate-time-chaos-on-kubernetes"},{"type":"link","label":"Simulate JVM Application Faults","href":"/docs/2.1.5/simulate-jvm-application-chaos"},{"type":"link","label":"Simulate Linux Kernel Faults","href":"/docs/2.1.5/simulate-kernel-chaos-on-kubernetes"},{"type":"link","label":"Simulate AWS Faults","href":"/docs/2.1.5/simulate-aws-chaos"},{"type":"link","label":"Simulate GCP Faults","href":"/docs/2.1.5/simulate-gcp-chaos"},{"type":"link","label":"Simulate HTTP faults","href":"/docs/2.1.5/simulate-http-chaos-on-kubernetes"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Physical Nodes","items":[{"type":"link","label":"Chaosd Introduction","href":"/docs/2.1.5/chaosd-overview"},{"type":"link","label":"Simulate Faults on Physical Machines","href":"/docs/2.1.5/simulate-physical-machine-chaos"},{"type":"link","label":"Simulate Process Faults","href":"/docs/2.1.5/simulate-process-chaos-in-physical-nodes"},{"type":"link","label":"Simulate Network Faults","href":"/docs/2.1.5/simulate-network-chaos-in-physical-nodes"},{"type":"link","label":"Simulate Host Faults","href":"/docs/2.1.5/simulate-host-console-in-physical-nodes"},{"type":"link","label":"Simulate Stress Scenarios","href":"/docs/2.1.5/simulate-heavy-stress-in-physical-nodes"},{"type":"link","label":"Simulate Disk Faults","href":"/docs/2.1.5/simulate-disk-pressure-in-physical-nodes"},{"type":"link","label":"Simulate JVM Application Faults","href":"/docs/2.1.5/simulate-jvm-application-chaos-in-physical-nodes"},{"type":"link","label":"Simulate Time Faults","href":"/docs/2.1.5/simulate-time-chaos-on-physical-nodes"},{"type":"link","label":"Search and Recover Experiments of Chaosd","href":"/docs/2.1.5/chaosd-search-recover"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Authentication","items":[{"type":"link","label":"GCP OAuth Authentication","href":"/docs/2.1.5/gcp-authentication"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Tools Integration","items":[{"type":"link","label":"Integrate Chaos Mesh to GitHub Actions","href":"/docs/2.1.5/integrate-chaos-mesh-into-github-actions"},{"type":"link","label":"Use Grafana Data Source Plugin for Observations","href":"/docs/2.1.5/use-grafana-data-source"},{"type":"link","label":"chaosctl","href":"/docs/2.1.5/chaosctl-tool"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Development Guides","items":[{"type":"link","label":"Developer Guide Overview","href":"/docs/2.1.5/developer-guide-overview"},{"type":"link","label":"Configure the Development Environment","href":"/docs/2.1.5/configure-development-environment"},{"type":"link","label":"Add New Chaos Experiment Type","href":"/docs/2.1.5/add-new-chaos-experiment-type"},{"type":"link","label":"Extend Chaos Daemon Interface","href":"/docs/2.1.5/extend-chaos-daemon-interface"},{"type":"link","label":"Extend Chaosd","href":"/docs/2.1.5/extend-chaosd"}],"collapsible":true,"collapsed":true},{"type":"category","label":"FAQs and Troubleshooting","items":[{"type":"link","label":"FAQs","href":"/docs/2.1.5/faqs"},{"type":"link","label":"Upgrade to Chaos Mesh 2.0","href":"/docs/2.1.5/upgrade-to-2.0"}],"collapsible":true,"collapsed":true}]}}')}}]);
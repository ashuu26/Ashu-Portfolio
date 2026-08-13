export const hero = {
  title: 'Architecting the Cloud. Accelerating Business. Delivering Results.',
  subtitle:
    '11 years moving enterprise workloads to Cloud (AWS/ Azure), automating with Terraform, and hardening platforms with DR strategy, cost controls, and secure network architectures.',
  badges: ['11+ Years Experience', 'Cloud (AWS/ Azure) Migrations', 'Terraform Automation', 'DevOps & SRE'],
};

export const experience = [
  {
    company: 'Software One Experts Sdn Bhd, KL',
    role: 'Sr. Expert Technology Infrastructure - Cloud',
    period: 'Sep 2024 — Present',
    summary:
      'Primary technical lead for presales and enterprise cloud transformation programs across Malaysia, designing AWS and Azure solutions with secure architecture, modernization roadmaps, and governance alignment.',
    logo: '/logo-softwareone.png',
    highlights: [
      'Served as primary technical lead for presales, partnering with Sales and Professional Services to understand customer requirements and design AWS/Azure solutions, contributing to 8+ cloud transformation programmes.',
      'Authored technical responses for 4+ complex RFPs, translating business requirements into AWS/Azure architectures and actionable modernization roadmaps.',
      'Led customer discovery sessions and executive workshops, presenting cloud solutions and driving technical alignment and project buy-in.',
      'Led cloud migration programmes covering 250+ workloads across 15+ client accounts using AWS MGN, Azure Migrate, ASR, RiverMeadow, and Veeam, achieving <2-hour RTO with zero unplanned downtime during cutovers.',
      'Designed hybrid-cloud architectures using AWS VPC, Direct Connect, VPN, Azure VNet, ExpressRoute, and Azure Firewall, supporting 99.9% availability requirements.',
      'Designed AWS Landing Zones with hub-and-spoke architecture and automated governance controls aligned with BNM RMiT, reducing compliance gaps by approximately 40%.',
      'Applied AI/ML and Generative AI fundamentals to assess enterprise AI use cases and understand how AI capabilities can complement cloud solutions.',
      'Evaluated AWS AI services, including Amazon Bedrock, based on business use cases, functionality, security, responsible AI, and cost considerations.',
      'Applied foundational concepts of prompt engineering, RAG, AI security, privacy, governance, responsible AI, model selection, performance, scalability, and cost optimization when evaluating potential AWS-based AI solutions.'
    ],
  },
  {
    company: 'Software One India Private Limited',
    role: 'Cloud Consultant',
    period: 'Nov 2022 — Sep 2024',
    summary:
      'Designed, delivered, and governed enterprise-grade AWS and Azure solutions for FSI clients, spanning assessments, infrastructure automation, migrations, and cost optimization.',
    logo: '/logo-softwareone.png',
    highlights: [
      'Designed and delivered scalable, secure, enterprise-grade AWS solutions for leading FSI organizations.',
      'Architected and delivered a robust, enterprise-grade AWS cloud solution for a top-tier FSI.',
      'Oversaw delivery of proposed solutions end to end, providing architectural guidance to delivery teams, resolving technical escalations, and ensuring successful implementation and client satisfaction across 12+ enterprise engagements.',
      'Automated infrastructure provisioning with Terraform and CloudFormation across multi-cloud environments, reducing manual provisioning time by 60%; implemented governance via AWS Systems Manager, Azure Automation, Azure Arc, and Azure Policy for 500+ resources.',
      'Conducted Cloud Readiness Assessments and TCO analyses for 10+ clients, producing roadmaps that drove 25-35% cost savings; identified Reserved Instance and right-sizing opportunities saving clients an average of $150K+ annually.',
      'Migrated Linux workloads (RHEL, Ubuntu, CentOS) to AWS/Azure, configuring DNS, LDAP, and TCP/IP networking within hybrid architectures; remediated critical security vulnerabilities and performance bottlenecks on the Sun Life engagement.'
    ],
  },
  {
    company: 'Accenture Solutions Private Limited',
    role: 'Cloud Operations Architect Specialist',
    period: 'Nov 2019 — Oct 2022',
    summary:
      'Delivered infrastructure automation, platform operations, and reliability engineering across AWS and Azure environments, strengthening DevOps delivery and day-2 operational readiness.',
    logo: '/logo-accenture.png',
    highlights: [
      'Authored and maintained Terraform modules for 50+ infrastructure components (EC2, VMs, Load Balancers, VPCs, Scale Sets) across AWS and Azure; migrated 30+ CloudFormation templates to Terraform to standardise IaC practices.',
      'Managed Docker and Kubernetes clusters for a Vodafone production environment serving millions of users, covering pod health monitoring, rolling upgrades, patching, and AMI lifecycle management.',
      'Built and maintained CI/CD pipelines using Jenkins and GitLab for the Amdocs suite on AWS, reducing deployment lead time from 4 hours to under 45 minutes.',
      'Developed Ansible playbooks for automated OS patching across 200+ servers, achieving 95%+ patch compliance with Systems Manager Patch Manager; monitored environment health via CloudWatch dashboards.',
      'Managed root credential rotation via CyberArk/MasterSAM and enforced tag compliance across AWS accounts for security and cost allocation governance.',
      'Supported AI/ML infrastructure using SageMaker and QuickSight; configured Cassandra clusters and authored SOPs for L2 support teams.'
    ],
  },
  {
    company: 'Cognizant Technology Solutions India Private Limited',
    role: 'Tech Lead - Cloud & Infrastructure',
    period: 'Oct 2015 — Nov 2019',
    summary:
      'Led ITIL-aligned operations, production support, and application delivery for enterprise workloads, with a strong focus on incident management, access governance, and AWS infrastructure reliability.',
    logo: '/logo-cognizant.png',
    highlights: [
      'Managed L1/L2 Incident and Change Management (ITIL) for a production environment with 99.5% uptime; coordinated 50+ major incidents and emergency deployments with cross-functional vendor teams.',
      'Administered IAM roles, policies, and Active Directory groups for 300+ users; enforced RBAC, SFTP access control, and network share permissions.',
      'Automated build and deployment pipelines using Jenkins and Git; built and deployed Docker containers and Maven artefacts (JAR/WAR) to Apache Tomcat across DEV/QA/UAT environments.',
      'Designed fault-tolerant infrastructure using AWS EC2, S3, IAM, ELB, VPC, and CloudWatch; collaborated with SQL database teams on production deployments and produced Monthly Service Reports.'
    ],
  },
];

export const projects = [
  {
    name: 'Adaptive Cloud Landing Zone',
    description:
      'Opinionated Cloud (AWS/ Azure) blueprint with org guardrails, multi-account VPC/VNet topology, and policy packs mapped to BNM RMiT controls (encryption, egress, IAM/RBAC, logging).',
    stack: ['Cloud (AWS/ Azure)', 'Terraform', 'Control Tower', 'RMiT'],
    impact: '12min to provision a compliant sandbox; accelerates RMiT evidence with built-in policy checks and conformance packs.'
  },
  {
    name: 'Kubernetes Reliability Kit',
    description:
      'Collection of K8s operators, Prometheus rules, and chaos scenarios to harden critical workloads.',
    stack: ['Kubernetes', 'Azure DevOps', 'Prometheus', 'Litmus'],
    impact: 'Reduced Sev-1 frequency by 30% after adopting SLO-driven alerting and autoscaling recipes.'
  },
  {
    name: 'Data Pipeline Observability',
    description:
      'End-to-end lineage, quality gates, and anomaly detection for streaming + batch pipelines.',
    stack: ['Databricks', 'dbt', 'Airflow', 'Great Expectations'],
    impact: 'Decreased data incident triage time from hours to minutes with standardized runbooks.'
  },
];

export const credentials = [
  { title: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: 2026 },
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: 2023 },
  { title: 'Certification of Completion: AWS Solutions Architect', issuer: 'Amazon Web Services', year: 2020 },
  { title: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: 2022 },
  { title: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: 2020 },
  { title: 'Azure Data Fundamentals', issuer: 'Microsoft', year: 2021 },
];

export const skills = [
  {
    title: 'Architecture',
    items: ['Well-Architected Reviews', 'Multi-Region Design', 'Event-Driven Systems', 'Data Platforms', 'Zero Trust'],
  },
  {
    title: 'Platform Engineering',
    items: ['Kubernetes', 'Service Mesh (Istio)', 'GitOps (Azure DevOps)', 'Progressive Delivery', 'Platform APIs'],
  },
  {
    title: 'DevSecOps & Reliability',
    items: ['IaC (Terraform/CDK)', 'SRE Playbooks', 'Observability', 'Chaos Engineering', 'Cost Guardrails'],
  },
];

export const contact = {
  email: 'ashuu25.saini@gmail.com',
  location: 'Kuala Lumpur, Malaysia',
};

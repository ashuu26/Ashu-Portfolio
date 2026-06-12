export const hero = {
  title: 'Cloud infrastructure leader focused on Cloud (AWS/ Azure) migrations and day-2 reliability.',
  subtitle:
    '11 years moving enterprise workloads to Cloud (AWS/ Azure), automating with Terraform, and hardening platforms with DR strategy, cost controls, and secure network architectures.',
  badges: ['11+ Years Experience', 'Cloud (AWS/ Azure) Migrations', 'Terraform Automation', 'DevOps & SRE'],
};

export const experience = [
  {
    company: 'SoftwareOne',
    role: 'Expert Technology Infrastructure',
    period: 'Nov 2022 — Present',
    summary:
      'Leads regulated Cloud (AWS/ Azure) migration programs, landing-zone architecture, and deployment readiness for banks/FSIs in Malaysia and APAC, combining AWS and Azure platform engineering with policy-as-code aligned to BNM RMiT.',
    logo: '/logo-softwareone.png',
    highlights: [
      'Led AWS and Azure cloud migration initiatives using AWS MGN, Azure Migrate, Azure Site Recovery, Azure DMS, RiverMeadow, Veeam, and Cloudamize for discovery, dependency mapping, migration wave planning, and workload cutovers.',
      'Architected secure and scalable AWS and Azure platforms spanning EC2, VPC, Security Groups, NACLs, Direct Connect, VPN, VPC Peering, Virtual Machines, VNet, NSG, Azure Firewall, ExpressRoute, VPN Gateway, and VNet Peering.',
      'Built enterprise-scale AWS and Azure landing zones with organizational guardrails, multi-account/subscription governance, hub-and-spoke VPC/VNet design, and automated policy enforcement mapped to Bank Negara Malaysia RMiT controls.',
      'Automated infrastructure provisioning and configuration management with Terraform for standardized, repeatable, and compliant Infrastructure-as-Code deployments across multi-cloud environments.',
      'Implemented cloud operations, governance, and compliance frameworks using AWS Systems Manager, Azure Automation, Azure Arc, Azure Policy, Azure Monitor, and Log Analytics.',
      'Designed disaster recovery and business continuity solutions with AWS Backup, Azure Backup, Azure Site Recovery, Recovery Services Vaults, and Geo-Redundant Storage aligned to RTO/RPO objectives.',
      'Conducted cloud readiness assessments, TCO analysis, and migration business case evaluations aligned with the AWS Well-Architected Framework, Azure Well-Architected Framework, and Microsoft Cloud Adoption Framework.',
      'Led technical consulting, post-sales engagements, and executive stakeholder discussions to translate business requirements into scalable cloud architectures and transformation roadmaps.',
      'Delivered architecture workshops, migration discovery sessions, and cloud adoption enablement programs with Cloud Solution Architects, Professional Services, and Sales teams.'
    ],
  },
  {
    company: 'Accenture',
    role: 'Cloud Operations Architect Specialist',
    period: 'Nov 2019 — Oct 2022',
    summary:
      'Owned IaC, Kubernetes operations, CI/CD deployment pipelines, monitoring, cost optimization, and operational handover across AWS and Azure environments.',
    logo: '/logo-accenture.png',
    highlights: [
      'Authored and maintained Terraform scripts for EC2, VMs, load balancers, VPCs, bastion hosts, and scale sets across AWS and Azure; converted CloudFormation templates to Terraform and automated delivery via Azure DevOps and GitHub.',
      'Managed Docker and Kubernetes clusters including pod health, upgrades, patching, and AMI updates.',
      'Built Jenkins CI/CD pipelines, deployed the Amdocs suite on Vodafone AWS, managed Docker images with Dockerfiles and Docker Compose, and developed Ansible playbooks for automated patching with Systems Manager Patch Manager.',
      'Monitored environment health with CloudWatch, optimized performance and cost with AWS Trusted Advisor, managed root credential rotation through CyberArk, and implemented tag-compliance strategies.',
      'Worked with SageMaker and QuickSight analytics, configured Cassandra clusters, provided security oversight, led knowledge transitions, and created SOPs for support teams.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Tech Lead',
    period: 'Oct 2015 — Nov 2019',
    summary:
      'Managed ITIL-aligned incident/change operations, IAM and Active Directory access controls, CI/CD deployment support, and AWS-hosted service reliability for enterprise applications.',
    logo: '/logo-cognizant.png',
    highlights: [
      'Managed L1/L2 incident and change management aligned with ITIL, coordinating major incidents, emergency deployments, IIS-level configuration changes, and critical production issue resolution with vendors.',
      'Administered IAM roles, policies, and Active Directory groups; enforced resource tagging and access control strategies; managed network-shared path permissions and SFTP connections.',
      'Automated build and deployment pipelines with Jenkins and Git; built and deployed Docker containers; created JAR/WAR files with Maven and deployed to Apache Tomcat across DEV, QA, and UAT environments.',
      'Used AWS services including EC2, S3, IAM, AMI, ELB, VPC, and CloudWatch to support fault-tolerant infrastructure; collaborated with SQL teams on database deployments and produced operational and monthly service reports.',
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

export const hero = {
  title: 'Architecting the Cloud. Accelerating Business. Delivering Results.',
  subtitle:
    '11 years moving enterprise workloads to Cloud (AWS/ Azure), automating with Terraform, and hardening platforms with DR strategy, cost controls, and secure network architectures.',
  badges: ['11+ Years Experience', 'Cloud (AWS/ Azure) Migrations', 'Terraform Automation', 'DevOps & SRE'],
};

export const experience = [
  {
    company: 'SoftwareOne',
    role: 'Associate Solutions Architect',
    period: 'Nov 2022 — Present',
    summary:
      'Leads AWS and Azure migration programs for regulated financial services, combining platform architecture, landing-zone design, and cloud adoption strategy for clients across Malaysia and APAC.',
    logo: '/logo-softwareone.png',
    highlights: [
      'Lead enterprise-scale AWS and Azure cloud migration programs spanning 250+ workloads across 15+ client accounts, leveraging AWS MGN, Azure Migrate, ASR, RiverMeadow and Veeam to achieve <2-hour RTO and zero unplanned downtime.',
      'Architect secure, resilient multi-cloud platforms (AWS VPC, Direct Connect, Transit Gateway; Azure VNet, ExpressRoute, Firewall) delivering 99.9% uptime SLA across hybrid environments for 12+ enterprise clients.',
      'Design enterprise Landing Zones with hub-and-spoke topology, AWS Control Tower, IAM Identity Center, Azure Entra ID, SCPs and RBAC, mapping governance controls to BNM RMiT requirements and cutting compliance gaps by ~40%.',
      'Author end-to-end architecture documentation — HLD, LLD, network/IAM design, DR runbooks and operational handover packages — and lead customer discovery workshops, architecture whiteboarding and design authority/risk review sessions with executive stakeholders.',
      'Automate infrastructure provisioning with Terraform IaC, cutting manual provisioning time by 60% and governing 500+ managed resources via AWS Systems Manager, Azure Automation, Azure Arc and Azure Policy.',
      'Design and validate Disaster Recovery solutions (AWS Backup, Azure Site Recovery, Geo-Redundant Storage) meeting defined RTO/RPO targets for 12+ enterprise clients, including failover automation and DR test exercises.',
      'Lead cloud readiness assessments, dependency mapping and migration-factory wave/cutover/rollback planning for 10+ clients, producing TCO analyses and modernization roadmaps that drive 25-35% cost savings vs. on-prem baselines.',
      'Drive FinOps and Zero Trust Architecture initiatives — right-sizing, Reserved Instance strategy and identity/encryption hardening — saving clients an average of $150K+ annually.',
      'Own pre-sales technical solutioning for customer pursuits: author RFI/RFP/RFQ responses (architecture designs, implementation methodology, effort estimates, risk, SOW inputs), run PoCs/demos, and partner with Sales and Professional Services to close and deliver 8+ cloud transformation programs.'
    ],
  },
  {
    company: 'Accenture',
    role: 'Cloud Operations Architect Specialist',
    period: 'Nov 2019 — Oct 2022',
    summary:
      'Delivered infrastructure automation, platform operations, and reliability engineering across AWS and Azure environments, strengthening DevOps delivery and day-2 operational readiness.',
    logo: '/logo-accenture.png',
    highlights: [
      'Author and maintain Terraform modules for 50+ infrastructure components (EC2, VMs, Load Balancers, VPCs, Scale Sets) across AWS and Azure; migrate 30+ CloudFormation templates to Terraform to standardize IaC practices.',
      'Manage Docker and Kubernetes clusters for a Vodafone production environment serving millions of users, overseeing pod health monitoring, rolling upgrades, patching and AMI lifecycle management.',
      'Build and maintain CI/CD pipelines with Jenkins for the Amdocs suite on AWS, reducing deployment lead time from 4 hours to under 45 minutes; manage Docker images via Dockerfiles and Docker Compose.',
      'Develop Ansible playbooks for automated OS patching across 200+ servers, achieving 95%+ patch compliance with Systems Manager Patch Manager; monitor environment health via CloudWatch dashboards.',
      'Manage root credential rotation via CyberArk/MasterSAM and enforce tag compliance strategies across AWS accounts for security and cost allocation governance.',
      'Deliver AI/ML infrastructure support using SageMaker and QuickSight analytics; configure Cassandra clusters; author SOPs for Level 2 support teams.'
    ],
  },
  {
    company: 'Cognizant',
    role: 'Technical Lead',
    period: 'Oct 2015 — Nov 2019',
    summary:
      'Led ITIL-aligned operations, production support, and application delivery for enterprise workloads, with a strong focus on incident management, access governance, and AWS infrastructure reliability.',
    logo: '/logo-cognizant.png',
    highlights: [
      'Manage L1/L2 Incident & Change Management (ITIL) for a production environment with 99.5% uptime, coordinating 50+ major incidents and emergency deployments with cross-functional vendor teams.',
      'Administer IAM roles, policies and Active Directory groups for 300+ users; enforce RBAC strategies, SFTP access control and network-shared path permissions.',
      'Automate build and deployment pipelines using Jenkins and Git; build and deploy Docker containers; create JAR/WAR artifacts with Maven deployed to Apache Tomcat across DEV/QA/UAT environments.',
      'Design fault-tolerant infrastructure using AWS EC2, S3, IAM, ELB, VPC and CloudWatch; collaborate with SQL database teams on production deployments; generate Monthly Service Reports (MSR).'
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

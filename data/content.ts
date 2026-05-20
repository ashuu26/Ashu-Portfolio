export const hero = {
  title: 'Cloud infrastructure leader focused on Cloud (AWS/ Azure) migrations and day-2 reliability.',
  subtitle:
    '11 years moving enterprise workloads to Cloud (AWS/ Azure), automating with Terraform, and hardening platforms with DR strategy, cost controls, and secure network architectures.',
  badges: ['11+ Years Experience', 'Cloud (AWS/ Azure) Migrations', 'Terraform Automation', 'DevOps & SRE'],
};

export const experience = [
  {
    company: 'SoftwareOne',
    role: 'Expert Technology Infrastructure & Cloud Solution Architect',
    period: '2021 — Present',
    summary:
      'Leads regulated Cloud (AWS/ Azure) migration programs, landing-zone architecture, and deployment readiness for banks/FSIs in Malaysia and APAC, combining AWS and Azure platform engineering with policy-as-code aligned to BNM RMiT.',
    logo: '/logo-softwareone.png',
    highlights: [
      'Delivered RiverMeadow/VEEAM-led workload migrations when AWS MGN was unavailable, maintaining security baselines, rollback plans, and minimal downtime windows.',
      'Ran discovery and assessment with Cloudamize, TCO analysis, application dependency mapping, migration wave planning, and AWS/Azure Well-Architected gap closure.',
      'Designed Cloud (AWS/ Azure) landing zones with VPC/VNet segmentation, VPN/Direct Connect/ExpressRoute connectivity, mTLS, centralized logging, backup, and automated guardrails.',
      'Mapped RMiT controls to policy-as-code guardrails for egress, encryption, IAM/RBAC least privilege, logging retention, and Terraform/GitOps deployment pipelines.',
      'Produced landing-zone reference designs, migration runbooks, and control evidence packs for compliance teams; enabled audit-ready posture with conformance checks.',
      'Implemented CI/CD policy checks, approved AMI/image whitelisting, and release gates to block non-compliant infrastructure changes before deployment.'
    ],
  },
  {
    company: 'Accenture',
    role: 'Cloud Operations Architect Specialist',
    period: 'Nov 2019 — Oct 2022',
    summary:
      'Owned IaC, Kubernetes operations, and CI/CD deployment pipelines across Cloud (AWS/ Azure); standardized backup, tagging, monitoring, governance, and compliance controls.',
    logo: '/logo-accenture.png',
    highlights: [
      'Converted CloudFormation to Terraform and supported ARM/Bicep-aligned deployments; managed EC2/VM scale sets, load balancers, bastions, and secure root rotations.',
      'Implemented tag-compliance reporting, cost optimization, performance tuning, CloudWatch/Azure Monitor observability, Trusted Advisor reviews, and governance dashboards.',
      'Built Docker images, Jenkins/Azure DevOps pipelines, and Ansible playbooks to automate patching, application deployment, and environment promotion.',
      'Guided clients on cloud adoption strategy, rehost/replatform migration paths, security oversight, and continuous improvement of operations.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Tech Lead',
    period: 'Oct 2015 — Nov 2019',
    summary:
      'Handled ITIL incident/change management, IAM/RBAC governance, CI/CD deployment support, and Cloud (AWS/ Azure)-hosted service reliability for enterprise applications.',
    logo: '/logo-cognizant.png',
    highlights: [
      'Ran major-incident coordination, post-mortems, root-cause analysis, and service restorations across application teams and vendors.',
      'Managed IAM roles/policies, SFTP setups, RBAC access controls, Git branching, change approvals, and CI/CD pipeline health.',
      'Built and deployed Docker containers, Maven builds, and Tomcat releases; generated SLA, availability, and monthly service review reports.',
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

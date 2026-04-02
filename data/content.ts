export const hero = {
  title: 'Cloud infrastructure leader focused on AWS migrations and day-2 reliability.',
  subtitle:
    '11 years moving enterprise workloads to AWS, automating with Terraform, and hardening platforms with DR strategy, cost controls, and secure network architectures.',
  badges: ['11+ Years Experience', 'AWS Cloud Migrations', 'Terraform Automation', 'DevOps & SRE'],
};

export const experience = [
  {
    company: 'SoftwareOne',
    role: 'Expert Technology Infrastructure & Cloud Solution Architect',
    period: '2021 — Present',
    summary:
      'Leads regulated cloud migrations and landing-zone design for banks/FSIs in Malaysia and APAC, blending AWS platform engineering with policy-as-code aligned to BNM RMiT.',
    logo: '/logo-softwareone.svg',
    highlights: [
      'Delivered RiverMeadow/VEEAM-led migrations when AWS MGN was unavailable, maintaining security baselines and minimizing downtime.',
      'Ran discovery + assessment with Cloudamize, TCO analysis, wave planning, and AWS Well-Architected gap closure.',
      'Built regulated AWS landing zones: VPC segmentation, VPN/Direct Connect, mTLS, centralized logging/backup, and automated guardrails.',
      'Mapped RMiT controls to policy-as-code guardrails (egress, encryption, IAM least-privilege, logging retention) embedded in Terraform/GitOps pipelines.',
      'Produced landing-zone reference designs and control evidence packs for compliance teams; enabled audit-ready posture with conformance checks.',
      'Implemented CI policy checks and approved AMI whitelisting to block non-compliant changes before deploy.'
    ],
  },
  {
    company: 'Accenture',
    role: 'Cloud Operations Architect Specialist',
    period: 'Nov 2019 — Oct 2022',
    summary:
      'Owned IaC, Kubernetes operations, and CI/CD pipelines across AWS and Azure; standardized backups, tagging, and compliance.',
    logo: '/logo-accenture.svg',
    highlights: [
      'Converted CloudFormation to Terraform; managed EC2/VM scale sets, load balancers, bastions, and secure root rotations.',
      'Implemented tag-compliance reporting, cost/performance tuning via CloudWatch + Trusted Advisor, and governance.',
      'Built Docker images, Jenkins pipelines, and Ansible playbooks to automate patching and delivery.',
      'Guided clients on cloud adoption strategy, security oversight, and continuous improvement of operations.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Tech Lead',
    period: 'Oct 2015 — Nov 2019',
    summary:
      'Handled incident/change management under ITIL, IAM governance, and AWS-hosted service reliability for enterprise apps.',
    logo: '/logo-cognizant.svg',
    highlights: [
      'Ran major-incident coordination, post-mortems, and service restorations across application teams and vendors.',
      'Managed IAM roles/policies, SFTP setups, and access controls; oversaw Git branching and CI/CD pipeline health.',
      'Built and deployed Docker containers, Maven builds, and Tomcat releases; generated availability and MSR reports.',
    ],
  },
];

export const projects = [
  {
    name: 'Adaptive Cloud Landing Zone',
    description:
      'Opinionated AWS blueprint with org guardrails, multi-account VPC topology, and policy packs mapped to BNM RMiT controls (encryption, egress, IAM, logging).',
    stack: ['AWS', 'Terraform', 'Control Tower', 'RMiT'],
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

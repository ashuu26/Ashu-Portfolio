export const hero = {
  title: 'Architecting the Cloud. Accelerating Business. Delivering Results.',
  subtitle:
    '11 years of experience architecting and solutioning enterprise cloud transformations across AWS and Azure, designing scalable and secure architectures, automating infrastructure with Terraform, and driving DR, cost optimization, governance, and cloud networking strategies.',
  badges: ['11+ Years Experience', 'Cloud (AWS/ Azure) Migrations', 'Terraform Automation', 'DevOps & SRE'],
  roles: ['Solutions Architect', 'Founder · Terraform Studio', 'Sr. Cloud Consultant', 'Migration Lead', 'IaC & DevOps Engineer'],
};

export const stats = [
  { value: 11, suffix: '+', label: 'Years in cloud & infra' },
  { value: 250, suffix: '+', label: 'Workloads migrated' },
  { value: 15, suffix: '+', label: 'Client accounts' },
  { value: 40, suffix: '%', label: 'Fewer compliance gaps' },
];

export const toolbelt = [
  'AWS',
  'Azure',
  'Terraform',
  'CloudFormation',
  'Kubernetes',
  'Docker',
  'Ansible',
  'Jenkins',
  'GitLab CI',
  'Azure DevOps',
  'AWS MGN',
  'Azure Migrate',
  'Amazon Bedrock',
  'SageMaker',
  'CloudWatch',
  'Prometheus',
  'Azure Arc',
  'Veeam',
];

export const terraformStudio = {
  name: 'Terraform Studio',
  role: 'Founder',
  url: 'https://www.terraformstudioiac.com',
  tagline: 'Infrastructure as Code for AWS and Azure',
  pitch:
    'Choose the services you need, configure them and download a working Terraform project where every resource references the others — no boilerplate, no guesswork.',
  verbs: ['build', 'plan', 'ship'],
  coBuilder: 'Abhishek Chaurasia',
  stats: [
    { value: 55, label: 'AWS services' },
    { value: 63, label: 'Azure services' },
    { value: 233, label: 'Resource types' },
    { value: 19, label: 'Guided presets' },
  ],
  steps: [
    { title: 'Choose a cloud', copy: 'Start with AWS or Azure. Both follow the same workflow.' },
    { title: 'Pick services', copy: 'Dependencies are suggested as you go, so the VPC, subnets and security groups line up.' },
    { title: 'Configure and learn', copy: 'Every block is explained, with links to the Terraform Registry docs.' },
    { title: 'Download', copy: 'Get a ZIP that is ready for terraform init and plan.' },
  ],
  providers: [
    {
      id: 'aws',
      name: 'Amazon Web Services',
      short: 'AWS',
      source: 'hashicorp/aws',
      version: '~> 6.0',
      status: 'Available',
      summary:
        '55 services, from VPCs and subnets to EKS, Aurora, AWS Backup and CloudWatch, plus an Enterprise or Non-Enterprise multi-account landing zone.',
      services: ['VPC & NAT', 'EC2 · ECS · EKS', 'Aurora · DynamoDB', 'S3 · Lambda', 'Backup · CloudWatch', 'Landing Zone'],
      network: 'VPC 10.0.0.0/16',
      nodes: { edge: 'ALB', compute: 'EC2', data: 'Aurora' },
      plan: ['aws_vpc.main', 'aws_lb.web', 'aws_instance.web[0]', 'aws_instance.web[1]', 'aws_rds_cluster.db'],
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      short: 'AZ',
      source: 'hashicorp/azurerm',
      version: '~> 4.0',
      status: 'Available',
      summary:
        '63 services on the azurerm provider, from VNets and NSGs to AKS, Azure SQL and Cosmos DB, plus an Enterprise or Standard CAF landing zone.',
      services: ['VNet & NSG', 'VMs · AKS', 'Azure SQL · Cosmos DB', 'Storage · Functions', 'Backup · Monitor', 'CAF landing zone'],
      network: 'VNET 10.1.0.0/16 · rg-web',
      nodes: { edge: 'App GW', compute: 'VM', data: 'Azure SQL' },
      plan: [
        'azurerm_resource_group.main',
        'azurerm_virtual_network.main',
        'azurerm_application_gateway.web',
        'azurerm_linux_virtual_machine.web[0]',
        'azurerm_linux_virtual_machine.web[1]',
        'azurerm_mssql_server.db',
      ],
    },
  ],
};

export const experience = [
  {
    company: 'Software One Experts Sdn Bhd, KL',
    role: 'Sr. Cloud Consultant',
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
      'Designed and developed end-to-end cloud HLD/LLD architectures, covering cloud infrastructure, networking, security, IAM, compute, storage, databases, DR, monitoring, and governance.',
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
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    year: 2026,
    badge: '/aws-certified-solutions-architect-associate.png',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: 2026,
    badge: '/aws-certified-ai-practitioner.png',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 2023,
    badge: '/aws-certified-cloud-practitioner.png',
  },
  {
    title: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    year: 2021,
    badge: '/microsoft-certified-azure-data-fundamentals.png',
  },
  {
    title: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: 2020,
    badge: '/microsoft-certified-azure-fundamentals.png',
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    year: 2022,
    badge: '/hashicorp-certified-terraform-associate.jpeg',
  },
];

export const skillGroups = ['Cloud Platforms', 'Automation & Delivery', 'Security & Networking', 'AI / GenAI', 'Operations', 'Architecture & Practice'] as const;

export const skills: { title: string; group: (typeof skillGroups)[number]; items: string[] }[] = [
  {
    title: 'AWS',
    group: 'Cloud Platforms',
    items: [
      'EC2', 'VPC', 'S3', 'IAM', 'ELB', 'NAT Gateway', 'CloudWatch', 'Secrets Manager', 'ECS', 'Systems Manager',
      'AWS Backup', 'Direct Connect', 'GuardDuty', 'Config', 'IAM Identity Center', 'KMS', 'SageMaker', 'QuickSight', 'WorkSpaces',
    ],
  },
  {
    title: 'Azure',
    group: 'Cloud Platforms',
    items: [
      'VMs', 'VNet', 'NSG', 'ExpressRoute', 'Site-to-Site VPN', 'Load Balancer', 'Blob Storage', 'Microsoft Sentinel',
      'Azure Policy', 'Entra ID', 'Key Vault', 'Azure Monitor', 'Azure Arc', 'Log Analytics',
    ],
  },
  {
    title: 'IaC & Automation',
    group: 'Automation & Delivery',
    items: ['Terraform', 'AWS CloudFormation', 'Ansible', 'AWS CDK'],
  },
  {
    title: 'CI/CD & Containers',
    group: 'Automation & Delivery',
    items: ['GitLab', 'Jenkins', 'Docker', 'Kubernetes', 'Git', 'Maven', 'Azure DevOps', 'GitHub'],
  },
  {
    title: 'Migration Tools',
    group: 'Automation & Delivery',
    items: ['AWS MGN', 'Azure Migrate', 'ASR', 'Azure DMS', 'RiverMeadow', 'Veeam', 'Cloudamize'],
  },
  {
    title: 'Security & Governance',
    group: 'Security & Networking',
    items: ['Zero Trust Architecture', 'CSPM', 'BNM RMiT Compliance', 'FinOps', 'Platform Engineering', 'CyberArk', 'Splunk', 'AWS Trusted Advisor'],
  },
  {
    title: 'Networking',
    group: 'Security & Networking',
    items: ['DNS', 'LDAP', 'TCP/IP', 'Direct Connect', 'ExpressRoute', 'Site-to-Site VPN', 'Firewalls', 'NSG', 'Hybrid Connectivity'],
  },
  {
    title: 'AI / GenAI',
    group: 'AI / GenAI',
    items: ['Amazon Bedrock', 'LLMs', 'RAG', 'Prompt Engineering', 'Responsible AI', 'AI Security', 'SageMaker', 'QuickSight'],
  },
  {
    title: 'Monitoring & ITSM',
    group: 'Operations',
    items: ['CloudWatch', 'Azure Monitor', 'Log Analytics', 'Splunk', 'ServiceNow', 'JIRA', 'Confluence'],
  },
  {
    title: 'Operating Systems',
    group: 'Operations',
    items: ['Linux (RHEL, CentOS, Ubuntu)', 'Windows Server'],
  },
  {
    title: 'Architecture',
    group: 'Architecture & Practice',
    items: ['Well-Architected Reviews', 'Multi-Region Design', 'Event-Driven Systems', 'Data Platforms', 'Zero Trust'],
  },
  {
    title: 'Platform Engineering',
    group: 'Architecture & Practice',
    items: ['Kubernetes', 'Service Mesh (Istio)', 'GitOps (Azure DevOps)', 'Progressive Delivery', 'Platform APIs'],
  },
  {
    title: 'DevSecOps & Reliability',
    group: 'Architecture & Practice',
    items: ['IaC (Terraform/CDK)', 'SRE Playbooks', 'Observability', 'Chaos Engineering', 'Cost Guardrails'],
  },
];

export const recommendationsUrl = 'https://www.linkedin.com/in/ashusaini-in/details/recommendations/';

// LinkedIn recommendations, copied verbatim (one string per paragraph). `context` is only set where
// the recommendation itself says how we worked together. The Testimonials section and its nav link
// stay hidden while this list is empty.
export const testimonials: {
  name: string;
  context?: string;
  quote: string[];
}[] = [
  {
    name: "Hemant Tayade",
    context: "Worked together at Accenture",
    quote: [
      "Ashu is a highly dependable and talented professional who I had the pleasure of working with at Accenture. He brings a strong combination of technical expertise, ownership, and a collaborative mindset to every engagement.",
      "What stood out most was his ability to understand complex requirements, work effectively with different stakeholders, and consistently deliver with a positive and professional attitude. He is someone you can rely on to take accountability and get things done.",
      "I would gladly recommend Ashu to any organization looking for a skilled, committed, and team-oriented professional. It was a pleasure working with him, and I wish him continued success in his career.",
    ],
  },
  {
    name: "Kunal Chaumal",
    quote: [
      "I’m happy to recommend Ashu Saini for his professionalism, dedication, and strong work ethic. Ashu is a dependable and collaborative professional who consistently approaches challenges with a positive attitude and a solution-oriented mindset.",
      "He has demonstrated strong communication skills, a willingness to take ownership, and the ability to work effectively with others. His commitment to delivering quality results and supporting his team makes him a valuable professional to work with.",
      "I would gladly recommend Ashu to any organization looking for a responsible, motivated, and trustworthy professional.",
    ],
  },
  {
    name: "Sachin Gupta",
    context: "Worked together at SoftwareOne",
    quote: [
      "I had the opportunity to work with him on a project at SoftwareOne, where he led the project exceptionally well. He did an amazing job managing the team and handling the various challenges, issues, and unexpected hiccups we faced along the way.",
      "What I appreciated most was his supportive and collaborative approach. He was always there to support the team, provide guidance when needed, and help us navigate challenges effectively. His leadership, problem-solving skills, and ability to keep the team together made a real difference to the project.",
    ],
  },
  {
    name: "Harsimran Kaur",
    context: "Worked under Ashu’s leadership",
    quote: [
      "I had the opportunity to work under Ashu's leadership, and I greatly valued his technical guidance and support. He has strong knowledge across cloud infrastructure, DevOps, and automation, particularly AWS, Azure, Terraform, Ansible, Jenkins, Docker, and Kubernetes.",
      "What stood out to me was his ability to support the team through production issues and infrastructure changes while also encouraging people to learn and take ownership of their work. He was always approachable when guidance was needed and brought a calm, practical approach to solving technical challenges.",
      "I learned a lot while working with Ashu and would confidently recommend him as a knowledgeable, dependable, and supportive technical leader.",
    ],
  },
  {
    name: "Pravind Vijaya",
    quote: [
      "Ashu is a solid professional, exhibiting one of the the highest levels of productivity, creativity and technical expertise I have seen in any consultant. He exudes confidence and dexterity when faced with immense pressure from engagements.",
      "He is proactive and a definite asset to any team, driving initiatives above and beyond expected parameters.",
    ],
  },
  {
    name: "Sameer Sharma",
    quote: [
      "Ashu is an effective leader and a quick learner. One kind of a leader who always emphasizes on developing team and peers. He is agile enough to adapt to and support any kind of IT infrastructure or Devops architecture. While being in one of our team, he led the learning initiative of Containers. Linux, Devops and Cloud administration are his expertise areas.",
    ],
  },
];

export const contact = {
  email: 'ashuu25.saini@gmail.com',
  location: 'Kuala Lumpur, Malaysia',
};

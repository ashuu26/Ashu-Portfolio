export const hero = {
  title: 'Cloud-native consultant turning uptime into a feature.',
  subtitle:
    'Designing resilient, cost-aware platforms with multi-cloud, Kubernetes, and DevSecOps practices. I guide teams from whiteboard to production with clarity and care.',
  badges: ['Cloud Architecture', 'Platform Engineering', 'FinOps & Reliability'],
};

export const experience = [
  {
    company: 'SkyStack Advisory',
    role: 'Lead Cloud Consultant',
    period: '2023 — Present',
    summary:
      'Designed multi-region landing zones on AWS & Azure, standardized golden paths, and mentored platform squads on IaC and observability.',
    highlights: [
      'Cut infra spend by 22% via rightsizing, Graviton adoption, and autoscaling guardrails.',
      'Built a zero-trust service mesh with mTLS + OPA policies across 40+ microservices.',
      'Championed SRE playbooks that reduced MTTR by 38% and improved change success rate to 96%.',
    ],
  },
  {
    company: 'Nimbus Labs',
    role: 'Senior Solutions Architect',
    period: '2020 — 2023',
    summary:
      'Owned architecture for a SaaS analytics platform handling 4B+ events/day with Kubernetes, Kafka, and Snowflake.',
    highlights: [
      'Delivered 99.98% availability by introducing progressive delivery (Argo Rollouts) and chaos drills.',
      'Built GitOps pipelines (ArgoCD/Terraform) enabling sub-hour environment spins and drift-free operations.',
      'Established FinOps scorecards aligning engineering with CFO targets; realized $450k annual savings.',
    ],
  },
];

export const projects = [
  {
    name: 'Adaptive Cloud Landing Zone',
    description:
      'Opinionated AWS blueprint with org guardrails, multi-account VPC topology, OPA policy packs, and SOC2-ready controls.',
    stack: ['AWS', 'Terraform', 'OPA', 'Control Tower'],
    github: 'https://github.com/yourhandle/adaptive-landing-zone',
    live: 'https://landingzone.cloud',
    impact: '12min to provision a compliant sandbox; 40% faster onboarding of product teams.'
  },
  {
    name: 'Kubernetes Reliability Kit',
    description:
      'Collection of K8s operators, Prometheus rules, and chaos scenarios to harden critical workloads.',
    stack: ['Kubernetes', 'Argo', 'Prometheus', 'Litmus'],
    github: 'https://github.com/yourhandle/k8s-reliability-kit',
    live: 'https://reliability-kit.dev',
    impact: 'Reduced Sev-1 frequency by 30% after adopting SLO-driven alerting and autoscaling recipes.'
  },
  {
    name: 'Data Pipeline Observability',
    description:
      'End-to-end lineage, quality gates, and anomaly detection for streaming + batch pipelines.',
    stack: ['Databricks', 'dbt', 'Airflow', 'Great Expectations'],
    github: 'https://github.com/yourhandle/data-observability-blueprint',
    live: 'https://data-observe.dev',
    impact: 'Decreased data incident triage time from hours to minutes with standardized runbooks.'
  },
];

export const credentials = [
  {
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    year: 2025,
  },
  { title: 'Azure Solutions Architect Expert', issuer: 'Microsoft', year: 2024 },
  { title: 'CKA & CKS', issuer: 'CNCF', year: 2024 },
  { title: 'FinOps Certified Practitioner', issuer: 'FinOps Foundation', year: 2023 },
];

export const skills = [
  {
    title: 'Architecture',
    items: ['Well-Architected Reviews', 'Multi-Region Design', 'Event-Driven Systems', 'Data Platforms', 'Zero Trust'],
  },
  {
    title: 'Platform Engineering',
    items: ['Kubernetes', 'Service Mesh (Istio)', 'GitOps (ArgoCD)', 'Progressive Delivery', 'Platform APIs'],
  },
  {
    title: 'DevSecOps & Reliability',
    items: ['IaC (Terraform/CDK)', 'SRE Playbooks', 'Observability', 'Chaos Engineering', 'Cost Guardrails'],
  },
];

export const contact = {
  email: 'ashu@example.com',
  location: 'Remote · Kuala Lumpur, MY',
  phone: '+60 12 345 6789',
};

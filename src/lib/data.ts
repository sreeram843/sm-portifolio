export const profile = {
  name: "Sriram Mentey",
  title: "Senior Software Engineer & Engineering Lead",
  location: "Austin, TX",
  phone: "+1 816-605-8945",
  email: "menteysriram43@gmail.com",
  linkedin: "https://www.linkedin.com/in/srirammentey/",
  github: "https://github.com/sreeram843",
  githubUsername: "sreeram843",
  medium: "https://medium.com/@menteysriram43",
  x: "https://x.com/sriram_mentey",
  heroLine: "I build systems where",
  rotatingWords: [
    "healthcare meets scale",
    "scheduling feels instant",
    "AI augments engineering",
    "payments just work",
  ],
  pitch:
    "Engineering lead shipping telehealth platforms for 90M+ members — from real-time scheduling engines to RAG assistants you can talk to today.",
  heroStatement:
    "Sriram Mentey is a Senior Software Engineer & Engineering Lead who builds healthcare systems at scale — from real-time scheduling for 90M+ members to RAG assistants in production.",
  about: [
    "Based in Austin, Sriram is an engineering lead with 9+ years building regulated healthcare, financial, and logistics systems. Most recently at Teladoc Health, he built real-time provider availability — slot generation per service line, Redis-backed reads, and predictive scheduling for millions of members — while driving EHR integrations, payments, and platform modernization.",
    "His approach balances architecture and execution, grounded in SLA ownership and close cross-functional collaboration. Above all, he's committed to shipping systems that are reliable under load, compliant in regulated environments, and clear enough for teams to maintain.",
  ],
};

export const impactMoments = [
  {
    id: "scale",
    value: "90M+",
    label: "members on scheduling platforms I've helped shape",
    accent: "from-salt/45 to-gray-light/20",
  },
  {
    id: "latency",
    value: "7×",
    label: "faster booking with real-time availability engine (12.5s → 1.8s)",
    accent: "from-gray-light/50 to-gray-mid/25",
  },
  {
    id: "lcns",
    value: "13→8%",
    label: "late cancel rate after LCNS & payments redesign",
    accent: "from-salt/35 to-gray-mid/30",
  },
  {
    id: "throughput",
    value: "+57%",
    label: "scheduling throughput under load, maintaining <1% error rate",
    accent: "from-gray-light/40 to-salt/15",
  },
  {
    id: "states",
    value: "50",
    label: "US states covered by telehealth & scheduling platforms I've shipped",
    accent: "from-salt/40 to-gray-light/25",
  },
  {
    id: "cerner-perf",
    value: "~50%",
    label: "performance gain modernizing Cerner infusion & medication workflows",
    accent: "from-gray-mid/45 to-gray-light/20",
  },
  {
    id: "years",
    value: "9+",
    label: "years in regulated healthcare, finance & logistics systems",
    accent: "from-salt/30 to-gray-mid/25",
  },
  {
    id: "certs",
    value: "4",
    label: "professional credentials — 3 Azure certs + healthcare Mini-MBA",
    accent: "from-gray-light/35 to-salt/20",
  },
];

export const featuredWork = {
  eyebrow: "Personal project",
  name: "CurAI",
  tagline: "Personal project — live in production at app.cura-i.com",
  description:
    "A private assistant workspace for grounded chat, document retrieval, and multi-step workflows — named for Marie Curie, blending Curie and AI. I designed and shipped it end-to-end: a multi-user RAG system with smart routing, live data, a tool-calling agent, and multi-agent workflows. Every conversation and document is scoped to your account.",
  liveUrl: "https://app.cura-i.com",
  githubUrl: "https://github.com/sreeram843/personal-ai",
  stack: [
    "FastAPI",
    "PostgreSQL",
    "Qdrant",
    "Redis",
    "LangChain",
    "React 19",
    "GCP",
    "Groq",
  ],
  highlights: [
    {
      label: "Smart routing",
      text: "Each message is sent to fast chat, document retrieval, or a multi-agent workflow (researcher → synthesizer → reviewer → writer) based on intent, with an optional live SSE trace.",
    },
    {
      label: "Live data",
      text: "FX, stocks, weather, and news return through a deterministic adapter path that skips the model entirely when intent is clear.",
    },
    {
      label: "Tool-calling agent",
      text: "A LangChain agent picks web and live-data tools per query; RAG answers come back grounded with cited sources.",
    },
    {
      label: "Multi-user & private",
      text: "Per-user auth, conversations and Qdrant retrieval scoped by user ID; only you can list, open, or delete your chats.",
    },
    {
      label: "Multi-runtime",
      text: "Same app runs on Ollama locally, LM Studio on a Mac mini over LAN, and Groq in production on GCP.",
    },
  ],
};

export const workGallery = [
  {
    title: "CurAI",
    subtitle: "Personal project",
    description:
      "Private assistant workspace for grounded chat, document retrieval, and multi-step workflows — multi-user RAG with smart routing, live data, and tool-calling agents.",
    link: "https://app.cura-i.com",
    embed: true as const,
  },
  {
    title: "Real-Time Availability",
    subtitle: "Teladoc · VPC, MH, Nutrition",
    description:
      "Event-driven sync model replacing batch updates — near real-time provider availability, sliced into bookable slots per service-line config. Redis-backed reads, predictive scheduling for optimal provider times. Axle Health integration for CCM & MyStrength. Booking 12.5s → 1.8s at +57% throughput across 100 coaches and 2,000+ core providers.",
    link: "https://www.linkedin.com/in/srirammentey/",
  },
  {
    title: "EHR Integrations",
    subtitle: "Altera & Athena",
    description:
      "Altera enterprise scheduling and Athena clinical data — Member, Provider, and Admin flows — through Mirth Connect, FHIR, and HL7 v2. Built across Primary Care, Mental Health, and Nutrition with multiple engineering teams.",
    link: "https://medium.com/@menteysriram43/what-working-with-mirth-taught-me-about-healthcare-systems-0fdc3ad196a9",
  },
  {
    title: "LCNS & Payments",
    subtitle: "Teladoc Health",
    description:
      "Late-cancel / no-show flows with Authorize.net, HSA/FSA exclusion logic, and first-visit no-charge offers. Cancellations 13% → 8%, recovering ~$50 average revenue per missed consultation.",
    link: "https://medium.com/@menteysriram43/designing-a-late-cancellation-and-no-show-system-at-scale-50a9e7b259ea",
  },
  {
    title: "Microservices & Platform Ops",
    subtitle: "Teladoc · Oracle Health",
    description:
      "Scheduling monolith decomposed into independently deployable services — defined service boundaries per service line. SLA/SLO ownership, on-call, and incident response across Web, iOS, and Android. Container security: Twistlock scans, CVE remediation, Fortify hardening. Led 2 engineering teams.",
    link: "https://medium.com/@menteysriram43/microservices-are-not-always-the-answer-2546896a3137",
  },
  {
    title: "Infusion Management",
    subtitle: "Oracle Health · Cerner",
    description:
      "Critical-care infusion moved from desktop RCP to React. Billing, audit trails, clinical compliance. ~50% performance gain via batching, caching, and event-based processing.",
    link: "https://www.linkedin.com/in/srirammentey/",
  },
  {
    title: "Medication Administration",
    subtitle: "Oracle Health · Cerner",
    description:
      "Medication, device, and encounter APIs for ICU medication-safety workflows in Cerner Millennium and PowerChart.",
    link: "https://www.linkedin.com/in/srirammentey/",
  },
];

export const highlightMetrics = [
  { value: "90M+", label: "members on platforms shaped" },
  { value: "7×", label: "faster booking (12.5s → 1.8s)" },
  { value: "+57%", label: "scheduling throughput under load" },
  { value: "9+", label: "years in regulated systems" },
];

export const journey = [
  {
    year: "2022 — Now",
    company: "Teladoc Health",
    role: "Sr. Software Engineer · Engineering Lead",
    story:
      "Event-driven availability engine replacing batch updates — near real-time scheduling for 90M+ members. Cut CCM booking 12.5s → 1.8s (~7×) at +57% throughput, error rate under 1%. Led Altera & Athena EHR integrations (FHIR/HL7 via Mirth), LCNS payments (13% → 8% cancellations), and the monolith-to-microservices split.",
    metric: "7× faster · +57% throughput",
    details: [
      "Availability engine: provider avail/unavail → slots by service-line config; Redis fast fetch; predictive schedule suggestions — ~7× latency cut, +57% throughput, <1% error rate",
      "Core Teladoc lines: VPC, MH, Nutrition, Gen Med; Axle Health integration for CCM & MyStrength partner programs",
      "Altera Enterprise Scheduling across Primary Care, Mental Health, Nutrition",
      "Athena integration via Mirth Connect for Member, Provider & Admin MHD data (FHIR, HL7 v2)",
      "LCNS workflows with Authorize.net & HSA/FSA logic",
      "Monolith-to-microservices decomposition for scheduling platform",
      "SLA/SLO ownership & cross-platform releases (Web, iOS, Android)",
    ],
  },
  {
    year: "Nov 2021 — Mar 2022",
    company: "Intercontinental Exchange",
    role: "Software Developer",
    story:
      "Automated the unglamorous — a Ruby gem for global access revocation across SDLC tools, and a Rails app standardizing artifact deploys. Internal tooling finance teams quietly depend on.",
    metric: "Global SDLC automation",
    details: [
      "Ruby gem for global access revocation across SDLC tools",
      "Rails app standardizing Artifactory deployment requests",
      "JIRA & Bitbucket provisioning workflows",
    ],
  },
  {
    year: "2019 — 2021",
    company: "Cerner · Oracle Health",
    role: "Full Stack Developer",
    story:
      "Modernized critical-care Infusion Management and Medication Administration from desktop RCP to React — ~50% performance gain via batching, caching, and event-based processing, with billing and audit trails for clinical compliance.",
    metric: "~50% performance · ICU workflows",
    details: [
      "Led Infusion Management modernization from RCP to React, Java & Ruby",
      "Built medication administration REST APIs for device, encounter & medication data",
      "Infusion billing and audit workflows for clinical compliance & traceability",
      "Cerner Millennium & PowerChart integration across critical-care settings",
      "~50% performance improvement via batching, caching & event-based processing",
      "Containerized cloud migration, CVE remediation & CI/CD with Splunk observability",
    ],
  },
  {
    year: "2015 — 2017",
    company: "Wipro · FedEx Ground",
    role: "Project Engineer",
    story:
      "Java/Spring routing and payment workflows on Oracle for FedEx Ground linehaul, plus high-priority incident response across quarterly releases. Before healthcare became the mission.",
    metric: "Enterprise logistics",
    details: [
      "Java/Spring routing and payment workflows on Oracle",
      "FedEx Ground linehaul TMS & high-priority incident response",
    ],
  },
];

export const craftTags = [
  "Java",
  "Python",
  "React",
  "FastAPI",
  "Kafka",
  "FHIR",
  "HL7",
  "Azure",
  "Kubernetes",
  "PostgreSQL",
  "LangChain",
  "Mirth Connect",
  "Microservices",
  "GitHub Copilot",
  "Cursor",
  "Splunk",
  "Terraform",
  "Payments",
  "Scheduling",
  "RAG",
];

export const mediumPosts = [
  {
    title: "What Running Out of AI Credits Taught Me About Local Models",
    date: "Jun 2026",
    url: "https://medium.com/@menteysriram43/what-running-out-of-ai-credits-taught-me-about-local-models-3f5986928e13",
    image: "https://cdn-images-1.medium.com/max/1024/1*W2WlzG-tb-s-BFDZt8B1Zw.jpeg",
    excerpt:
      "Moving inference to a Mac mini made memory, context, and configuration visible again — the system around the model matters more than the model.",
    featured: true,
  },
  {
    title: "When AI Becomes a System of Models",
    date: "Apr 2026",
    url: "https://medium.com/@menteysriram43/when-ai-becomes-a-system-of-models-52395e534b2a",
    image: "https://cdn-images-1.medium.com/max/1024/1*UxObmIpQy5xBPjLG9L69hA.jpeg",
    excerpt:
      "How modern AI systems evolve from single models into orchestrated multi-agent architectures.",
    featured: true,
  },
  {
    title: "Designing My Own Personal AI System",
    date: "Mar 2026",
    url: "https://medium.com/@menteysriram43/designing-my-own-personal-ai-system-what-building-the-stack-taught-me-b8cc94b3e610",
    image: "https://cdn-images-1.medium.com/max/1024/1*K7wOb6tDebt1i0T3cA9o-w.png",
    excerpt:
      "What building the CurAI stack taught me about going beyond the chat interface.",
    featured: false,
  },
  {
    title: "What Working With Mirth Taught Me About Healthcare",
    date: "Jan 2026",
    url: "https://medium.com/@menteysriram43/what-working-with-mirth-taught-me-about-healthcare-systems-0fdc3ad196a9",
    image: "https://cdn-images-1.medium.com/max/1024/1*ecvu67GeNsWceJjHyFRgWw.png",
    excerpt:
      "Integration is more than parsing messages — it's trust, contracts, and clinical context.",
    featured: false,
  },
  {
    title: "Designing LCNS at Scale",
    date: "Jan 2026",
    url: "https://medium.com/@menteysriram43/designing-a-late-cancellation-and-no-show-system-at-scale-50a9e7b259ea",
    image: "https://cdn-images-1.medium.com/max/1024/1*KRYoRsBrHzohnWBgD2ywdA.png",
    excerpt:
      "Late cancellation handling as a revenue-aware system, not a small feature.",
    featured: false,
  },
];

export const certifications = [
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2025–2026",
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2025–2026",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025–2026",
  },
  {
    name: "Mini-MBA, Healthcare Management",
    issuer: "University of Arizona · Eller Executive Education",
    date: "2024",
  },
];

export const education = [
  {
    school: "University of Missouri–Kansas City",
    degree: "M.S. Computer Science",
    period: "2018",
    detail: "GPA 3.6",
  },
  {
    school: "GITAM University",
    degree: "B.Tech Electronics & Communication Engineering",
    period: "2015",
    detail: "GPA 3.7",
  },
];

export const expertise = [
  "Healthcare platform engineering",
  "Real-time scheduling & availability",
  "EHR integration (FHIR, HL7, Mirth)",
  "Payments & revenue systems",
  "AI / RAG architecture",
  "Microservices & cloud (Azure, K8s)",
  "Engineering leadership",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/srirammentey/", external: true },
  { label: "Contact", href: "mailto:menteysriram43@gmail.com", external: true },
];

export const budgetOptions = [
  "Select…",
  "Full-time role",
  "Contract / consulting",
  "$5k – $15k",
  "$15k – $50k",
  "> $50k",
];

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Matheus Barros",
  title: "Senior Full-Stack Developer",
  location: "Miami, FL",
  email: "matheusbarros1305@gmail.com",
  linkedin: "https://www.linkedin.com/in/mattheusbarroos/",
  website: "https://www.matheusbarros.dev/",
  summary:
    "Senior Full-Stack Developer with 6+ years building end-to-end solutions from Next.js/React/Angular frontends to .NET/Django backends. Master's in CS. Expert in cloud architecture (Azure), PostgreSQL databases, enterprise APIs, and real-time data systems—delivering complete products that drive measurable business impact."
};

export const metrics: Metric[] = [
  {
    value: "6+",
    label: "Years Engineering",
    detail: "Leading full-stack architecture across enterprise systems"
  },
  {
    value: "95%",
    label: "ETL Efficiency Gain",
    detail: "Automated data pipelines transforming client operations"
  },
  {
    value: "30x",
    label: "Query Performance",
    detail: "120s → 4s optimization for mission-critical workflows"
  }
];

export const experience: Experience[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "CHA Consulting, Inc.",
    location: "Miami, FL",
    period: "June 2022 - Present",
    highlights: [
      "Architect and deliver enterprise-scale systems using C#/.NET, React, Angular, SQL Server, and Azure cloud infrastructure across multiple high-value products.",
      "Design secure, scalable REST APIs with .NET and Entity Framework; build complex relational data models optimized for performance and reliability.",
      "Lead development of real-time analytics dashboards processing 5M+ traffic records using React, Django, PostgreSQL, and cloud-native architecture.",
      "Own Azure infrastructure design including App Services, Functions, Data Factory, and DevOps pipelines—ensuring 99.9% uptime and automated deployments.",
      "Drive AI-assisted development practices across the team, accelerating delivery velocity and code quality through strategic tooling integration.",
      "Mentor junior developers on architecture patterns, code reviews, and best practices while collaborating with cross-functional teams in hybrid environments.",
      "Build production-grade ETL pipelines with Python and Azure Data Factory, reducing client reporting cycles from days to hours (95% improvement)."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "PBACO",
    location: "West Palm Beach, FL",
    period: "February 2020 - June 2022",
    highlights: [
      "Led complete architectural redesign of Android application using MVVM, Jetpack Compose, and Kotlin—reducing production crashes by 70%.",
      "Optimized database layer with advanced T-SQL and stored procedures, achieving 95-97% performance improvements on critical user flows.",
      "Delivered 30x query performance gains (120s → 4s) through indexing strategies, query refactoring, and execution plan optimization.",
      "Built robust .NET Web APIs and interactive frontend experiences, resulting in 90% reduction in production defects."
    ]
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Florida International University",
    location: "Miami, FL",
    year: "Graduated 2020"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Florida International University",
    location: "Miami, FL",
    year: "Graduated 2018"
  }
];

export const certifications = [
  "Microsoft Azure Cloud Fundamentals (2024)",
  "Microsoft Artificial Intelligence Fundamentals (2025)",
  "Google Agile Fundamentals (2024)",
  "Docker Foundations Professional Certificate (2026)"
];

export const publication =
  "Data-Driven Decision Support Platform for Selection of Intersections for Traffic Signal Control (2023).";

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    label: "Backend",
    items: ["C#", ".NET", "Python", "Django", "Java", "Kotlin", "REST APIs"]
  },
  {
    label: "Data & Cloud",
    items: ["SQL", "PostgreSQL", "MSSQL", "Azure", "Azure Data Factory", "ETL", "Power BI"]
  },
  {
    label: "DevOps & AI Tools",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "Claude (AI-Assisted Dev)", "GitHub Copilot", "Agile"]
  }
];

export const languages = ["English (Professional)", "Portuguese (Native)", "Spanish (Conversational)"];

export type ProjectType = "landing-page" | "web-app" | "android-app" | "data-platform" | "api";

export type Project = {
  title: string;
  description: string;
  type: ProjectType;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  private?: boolean;
  company?: string;
  featured?: boolean;
};

export const freelanceProjects: Project[] = [
  {
    title: "DeCora Florida",
    description:
      "Landing page for a Miami-based event decoration and party planning company. Covers services from birthday parties to baby showers, with full concept-to-execution planning across Florida.",
    type: "landing-page",
    liveUrl: "https://decoraflorida.com",
    tags: ["React", "Tailwind CSS", "GitHub Pages"]
  },
  {
    title: "Prime House Cleaning",
    description:
      "High-converting landing page for a professional house cleaning service in Florida. Features service showcase, pricing tiers, and lead capture form.",
    type: "landing-page",
    liveUrl: "https://cleaningservicesprime.com",
    githubUrl: "https://github.com/barros-m/prime-house-cleaning",
    tags: ["React", "Tailwind CSS", "GitHub Pages"]
  },
  {
    title: "Bizu Agency",
    description:
      "Full website for a creative digital marketing agency offering social media management, content creation, paid media campaigns, and visual design.",
    type: "landing-page",
    liveUrl: "https://barros-m.github.io/bizu/",
    githubUrl: "https://github.com/barros-m/bizu",
    tags: ["React", "Tailwind CSS", "GitHub Pages"]
  }
];

export const privateProjects: Project[] = [
  {
    title: "Built Asset Intelligence Platform",
    description:
      "Enterprise platform helping organizations track, analyze, and plan maintenance across their physical assets — covering investment opportunities, energy usage, carbon footprint, and sustainability metrics. Led architecture and development end-to-end.",
    type: "web-app",
    private: true,
    featured: true,
    company: "CHA Consulting, Inc.",
    tags: [".NET Web API", "React", "Bootstrap", "C#", "SQL Server", "CI/CD","Architecture Lead"]
  },
  {
    title: "Real-Time Traffic Analytics Dashboard",
    description:
      "Enterprise-scale web app processing 5M+ traffic records, featuring multiple dashboards with rich data visualizations and advanced filtering options to slice and analyze traffic data across different dimensions.",
    type: "web-app",
    private: true,
    company: "CHA Consulting, Inc.",
    tags: ["React", "Django", "PostgreSQL", "Azure", "Python"]
  },
  {
    title: "Enterprise ETL Pipeline System",
    description:
      "Automated data pipeline reducing client reporting cycles from days to hours (95% improvement) using cloud-native ETL orchestration.",
    type: "data-platform",
    private: true,
    company: "CHA Consulting, Inc.",
    tags: ["Azure Data Factory", "Python", "SQL Server", "Azure Functions", "PostgreSQL"]
  },
  {
    title: "SuperDOC 2.0",
    description:
      "Architectural redesign of a doctor management app that keeps physicians informed of patient status changes in real time.",
    type: "android-app",
    private: true,
    company: "PBACO",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", ".NET Web API", "T-SQL", "HIPAA"]
  }
];

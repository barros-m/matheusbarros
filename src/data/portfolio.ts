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
  title: "Senior Software Engineer",
  location: "Miami, FL",
  email: "matheusbarros1305@gmail.com",
  phone: "(786) 380-5423",
  linkedin: "https://www.linkedin.com/in/mattheusbarroos/",
  website: "https://www.matheusbarros.dev/",
  summary:
    "Senior Software Engineer with 6 years of experience and a Master's in Computer Science. Data-oriented full-stack builder focused on scalable systems, cloud architecture, and high-impact ETL workflows."
};

export const metrics: Metric[] = [
  {
    value: "6",
    label: "Years of Experience",
    detail: "Delivering full-stack products from architecture to production."
  },
  {
    value: "95%",
    label: "Reporting Time Reduced",
    detail: "Automated ETL workflows that transformed client operations."
  },
  {
    value: "120s → 4s",
    label: "SQL Query Optimization",
    detail: "Major performance gains for mission-critical features."
  },
  {
    value: "70%",
    label: "Crash Rate Reduction",
    detail: "Re-architected Android experience with MVVM + Jetpack Compose."
  }
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "CHA Consulting, Inc.",
    location: "Miami, FL",
    period: "June 2022 - Present",
    highlights: [
      "Led high-impact full-stack delivery using C#/.NET, Entity Framework, React, Angular, SQL, and Azure across multiple enterprise products.",
      "Designed and implemented secure .NET APIs, complex SQL data models, and responsive React/Angular frontends for operational systems.",
      "Built a real-time data dashboard with React, Django, and PostgreSQL to process millions of traffic records with production reliability.",
      "Architected Azure cloud infrastructure and CI/CD pipelines to improve system availability, security posture, and deployment speed.",
      "Used AI-assisted workflows to accelerate coding, debugging, documentation, and code review cycles, increasing team productivity.",
      "Collaborated with multiple cross-functional teams in hybrid, in-person, and fully remote settings while mentoring junior developers.",
      "Automated multi-source ETL pipelines with Python + Azure Data Factory, reducing client reporting turnaround time by 95%."
    ]
  },
  {
    role: "Software Developer",
    company: "PBACO",
    location: "West Palm Beach, FL",
    period: "February 2020 - June 2022",
    highlights: [
      "Re-architected a core Android app with MVVM and Jetpack Compose, reducing crash rates by 70%.",
      "Optimized stored procedures and SQL queries, improving feature efficiency by 95-97%.",
      "Cut query execution from 120 seconds to 4 seconds for critical user workflows.",
      "Developed C#/.NET APIs and interactive webpages that reduced reported bugs by 90%."
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
    items: ["C#", ".NET Core", "Python", "Django", "Java", "Kotlin", "REST APIs"]
  },
  {
    label: "Data & Cloud",
    items: ["SQL", "PostgreSQL", "MSSQL", "Azure", "Azure Data Factory", "ETL", "Power BI"]
  },
  {
    label: "DevOps & Practices",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "Agile", "Scrum", "Code Reviews", "Mentorship"]
  }
];

export const languages = ["English (Professional)", "Portuguese (Native)", "Spanish (Conversational)"];

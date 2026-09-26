export const profile = {
  name: "Harshit Arora",
  role: "Software Engineer",
  tagline: "I build scalable web applications & APIs",
  intro:
    "Full Stack Developer with professional experience building scalable web applications using Go, Gin, React, Next.js, and PostgreSQL. Experienced in REST APIs, production debugging, third-party integrations, and software architecture.",
  location: "New Delhi, India",
  email: "harshitarora14100@gmail.com",
  phone: "+91 8700866165",
  linkedin: "https://www.linkedin.com/in/harshit-arora-28b432285",
  github: "https://github.com/harshitarora1410",
  photo: "https://harshit-demo.vercel.app/IMG_5952%20(1).jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Go", "Java", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Zustand", "TanStack"],
  },
  {
    title: "Backend & Database",
    items: ["Go", "Gin", "REST APIs", "Microservices", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Concepts",
    items: ["Git", "GitHub Actions", "GitLab", "Docker", "Postman", "System Design", "Agile"],
  },
];

export const experience = [
  {
    company: "RemoteState",
    location: "Noida",
    period: "Jun 2026 – Present",
    title: "Software Engineer",
    points: [
      "Developing production-grade full-stack applications using Go, Gin, React.js, Next.js, PostgreSQL, and RESTful APIs.",
      "Contributing to the ASI Hotel Management Service, implementing and customizing backend services and workflows based on client-specific business requirements.",
      "Debugged and enhanced the Folio Notice Service and Email Service across frontend and backend, resolving integration issues and improving reliability of client notification workflows.",
      "Delivered maintainable solutions using modular architecture, separation of concerns, validation, error handling, and scalable API design while collaborating in Agile development cycles.",
    ],
  },
  {
    company: "RemoteState",
    location: "Noida",
    period: "Jan 2026 – Jun 2026",
    title: "Software Engineer Intern",
    points: [
      "Contributed to the Travel Sales Console (TSC), an airline ticketing platform integrating providers including Sabre, Tripjack, and Air India.",
      "Worked on workflows where travel agents purchase airline tickets in bulk, with commission-based profit calculations and provider-specific pricing integrated into the platform.",
      "Contributed to frontend and backend Email Service fixes, debugging API flows and resolving issues across service integration, validation, and notification delivery.",
    ],
  },
];

export const projects = [
  {
    title: "CricOP",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1470&q=80",
    tags: ["React.js", "Zustand", "TanStack", "Tailwind CSS"],
    description:
      "Real-time cricket scoring platform with synchronized live match updates across concurrent sessions, TanStack polling, Zustand state management, and role-based access control for team and match creation.",
  },
  {
    title: "Notes Application",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1470&q=80",
    tags: ["Next.js", "React.js", "Go", "PostgreSQL"],
    description:
      "Full-stack notes app with a Next.js frontend and a Go REST API backed by PostgreSQL, featuring CRUD note management, persistent storage, and reusable responsive Tailwind components.",
  },
  {
    title: "MovieApp",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Vite", "Tailwind CSS"],
    description:
      "Responsive movie discovery platform with search, dynamic routing, interactive UI components, and persistent watchlists using LocalStorage and React state management.",
  },
];

export const education = [
  {
    period: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    school: "Amity University, Noida",
    detail:
      "GPA: 7.15/10. Advanced programming concepts, software development methodologies, system design, and emerging technologies.",
  },
  {
    period: "2021 - 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "GGSIPU | SIMS",
    detail:
      "GPA: 7.25/10. Core computer science subjects including programming, databases, and system design.",
  },
];

export const certifications = [
  {
    title: "IBM Python Certification",
    description: "IBM Python Certification for Data Science and AI",
    tags: ["Python", "Data Science", "AI"],
  },
  {
    title: "Oracle Database Certification",
    description: "Oracle Database Foundations Certification for SQL",
    tags: ["SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Data Structures with Java",
    description: "Certification in Data Structures using Java programming language",
    tags: ["Java", "Algorithms", "Data Structures"],
  },
];

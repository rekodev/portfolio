export const FULL_NAME = "Artūras Tyškevičius" as const;
export const NAV_LINKS = [
  {
    href: "/#about",
    text: "About Me",
  },
  {
    href: "/#projects",
    text: "Projects",
  },
  {
    href: "/#contact",
    text: "Contact",
  },
];

export const THEME_OPTIONS = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
] as const;

export const PROJECTS = [
  {
    year: "2024 - Present",
    name: "InvoiceTrackr",
    description:
      "Invoicing, payment tracking, expenses and tax estimates for Lithuanian freelancers working under individuali veikla.",
    technologies: ["Next.js", "Fastify", "Drizzle", "Zod", "PostgreSQL"],
    link: "/projects/invoicetrackr",
    actions: [
      { label: "Read case study", href: "/projects/invoicetrackr" },
      { label: "Live app", href: "https://invoicetrackr.app" },
    ],
    imageSrc: "/projects/invoicetrackr-landing.png",
  },
  {
    year: "2026",
    name: "Zero Guess",
    description:
      "A Claude Code plugin that stops your agent from guessing. When a request is ambiguous, it asks the few questions that matter before starting. Clear requests go straight through.",
    technologies: ["Claude Code", "Agent Skills"],
    link: "https://www.skills.sh/rekodev/skills/clarify",
    imageSrc: "/projects/zero-guess.png",
    badge: "In Anthropic's plugin directory",
    installCommand: "npx skills add rekodev/skills --skill clarify",
    actions: [
      {
        label: "View on skills.sh",
        href: "https://www.skills.sh/rekodev/skills/clarify",
      },
      { label: "GitHub", href: "https://github.com/rekodev/skills" },
    ],
  },
  {
    year: "2024",
    name: "Gargždai Interactive Kiosk",
    // TODO: add real detail (who commissioned it, your role, what it shows, CMS setup)
    description:
      "Software for an interactive kiosk in Gargždai, Lithuania, providing visitors with information about local attractions and services.",
    technologies: ["React", "Vite", "Strapi"],
    imageSrc: "/projects/gargzdai.jpg",
    // TODO: confirm the kiosk's exact spot (currently Gargždai centre,
    // 55.712, 21.398) and re-render both map images around it
    map: {
      lightSrc: "/projects/gargzdai-map-light.png",
      darkSrc: "/projects/gargzdai-map-dark.png",
    },
  },
];

export const EXPERIENCE = [
  {
    company: "Ovoko",
    href: "https://ovoko.com",
    title: "Frontend Engineer",
    years: "2026 – Present",
    highlights: [
      "Frontend engineer on an interactive SVG parts-diagram feature, now in production and generating revenue.",
      "Code quality domain lead: built the team's AI agent setup (skills, hooks, custom commands) and AI code review.",
    ],
  },
  {
    company: "Vinted",
    href: "https://vinted.lt",
    title: "Web Engineer",
    years: "2023 – 2026",
    highlights: [
      "Built an internal configuration dashboard for offline item verification, with recursive rule logic in React and Next.js.",
      "Shipped A/B-tested item upload features end to end with backend, ML and product teams.",
    ],
  },
  {
    company: "Edigino",
    href: "https://edigino.com",
    title: "Full-Stack Engineer (Contract)",
    years: "2023 – 2025",
    highlights: [
      "Built the Gargždai tourism kiosk and a full-stack meal-planning and logistics system that replaced spreadsheets.",
    ],
  },
];

export const RESUME_HREF = "/arturas-tyskevicius-resume.pdf";

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/rekodev",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://linkedin.com/in/arturas-tyskevicius",
  },
  {
    label: "X",
    icon: "x",
    href: "https://x.com/rekodev",
  },
];

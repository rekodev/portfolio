export const FULL_NAME = "Artūras Tyškevičius" as const;
export const NAV_LINKS = [
  {
    href: "#about",
    text: "About Me",
  },
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: "#contact",
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
    year: "2025",
    name: "InvoiceTrackr",
    description:
      "A comprehensive invoicing and income tracking web application designed for freelancers and small businesses.",
    technologies: ["Next.js", "Fastify"],
    link: "https://invoicetrackr.app",
    imageSrc: "/projects/invoicetrackr.png",
  },
  {
    year: "2024",
    name: "Snake Game",
    description:
      "A classic snake game built with React and TypeScript, featuring smooth controls and pretty graphics.",
    technologies: ["Next.js", "Hono"],
    link: "https://snake-game-react-snowy.vercel.app/",
    imageSrc: "/projects/snake-game.png",
  },
  {
    year: "2024",
    name: "Gargždai Interactive Kiosk",
    description:
      "Software for an interactive kiosk in Gargždai, Lithuania, providing visitors with information about local attractions and services.",
    technologies: ["React", "Vite", "Strapi"],
    imageSrc: "/projects/gargzdai.jpg",
  },
  {
    year: "2023",
    name: "Rock Paper Scissors",
    description:
      "An extended version of the classic Rock Paper Scissors game, adding Lizard and Spock for more fun.",
    technologies: ["React", "Vite"],
    link: "https://rekodev-rpsls.netlify.app/",
    imageSrc: "/projects/rpsls.png",
  },
];

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

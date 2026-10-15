export const INVOICETRACKR_CASE_STUDY = {
  name: "InvoiceTrackr",
  year: "2024 - Present",
  summary:
    "Invoicing and income tracking for Lithuanian freelancers working under individuali veikla. Built solo, end to end.",
  imageSrc: "/projects/invoicetrackr-landing.png",
  links: [
    { label: "Live app", href: "https://invoicetrackr.app" },
    { label: "Source", href: "https://github.com/rekodev/invoicetrackr" },
  ],
  stack: [
    "Next.js",
    "Fastify",
    "Drizzle",
    "PostgreSQL",
    "Zod",
    "Dokku",
    "PostHog",
  ],
  // TODO: verify the decision bullets match how InvoiceTrackr actually works
  sections: [
    {
      title: "Problem",
      paragraphs: [
        "Lithuanian freelancers working under individuali veikla have to issue invoices in a specific format, track income against tax thresholds, and keep records that hold up later. Generic invoicing tools don't know these rules, so most people fall back to spreadsheets.",
      ],
    },
    {
      title: "Architecture",
      paragraphs: [
        "A Next.js frontend talks to a Fastify API backed by PostgreSQL through Drizzle. Request and response shapes are shared Zod schemas, so the client and server can't drift apart.",
        "The server generates invoice PDFs and sends them by email. The app is deployed with Dokku, and product analytics run through PostHog.",
      ],
    },
    {
      title: "Key decisions & tradeoffs",
      items: [
        "Issued invoices are immutable. Corrections create a new document instead of editing history, which keeps records trustworthy at the cost of a slightly more involved editing flow.",
        "Lithuanian tax rules are modeled in the domain layer rather than scattered through the UI, so threshold and rate changes happen in one place.",
        "Client details can be looked up from the VMI registry, which cuts down on manual entry and typos in legal details.",
        "Shared Zod types across the monorepo trade a little build setup for compile-time safety on every API contract.",
      ],
    },
    {
      title: "Quality",
      items: [
        "~556 commits and 163 merged pull requests since March 2024",
        "CI on every pull request, ~48 test files",
      ],
    },
  ],
} as const;

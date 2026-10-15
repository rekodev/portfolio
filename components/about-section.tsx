import Link from "next/link";
import { Mail, MapPinHouse } from "lucide-react";

import ExperienceList from "./experience-list";
import SectionHeading from "./section-heading";
import { Badge } from "./ui/badge";

const frontendTechnologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Vite",
];

const backendTechnologies = [
  "Node.js",
  "Express",
  "Fastify",
  "PostgreSQL",
  "MongoDB",
];

export default function AboutSection() {
  const renderTechnologiesSubsection = (technologies: Array<string>) => (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <p className="text-muted-foreground text-sm">
        {technologies.includes("React") ? "Frontend" : "Backend"}
      </p>
      <div className="flex max-w-64 flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge
            variant="secondary"
            key={technology}
            className="font-mono text-sm"
          >
            {technology}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="mx-auto flex w-full scroll-mt-24 flex-col gap-12 py-16 md:flex-row"
    >
      <div className="flex w-full flex-col gap-6 md:w-1/3 md:gap-10">
        <SectionHeading>About</SectionHeading>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <MapPinHouse className="h-4 w-4" /> Vilnius, Lithuania
          </p>
          <Link
            href="mailto:reko.jsx@gmail.com"
            className="text-muted-foreground flex w-fit items-center gap-2 text-sm hover:underline"
          >
            <Mail className="h-4 w-4" /> reko.jsx@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 md:w-2/3">
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            I’m a Frontend Engineer who cares a lot about the details. I like
            building things that look good, feel right to use, and work the way
            they should.
          </p>
          {/* TODO: add a concrete UI detail you shipped at Ovoko or Vinted */}
          <p className="text-muted-foreground">
            On the side I build InvoiceTrackr end to end, from Lithuanian tax
            rules and immutable invoices to PDF generation and the UI around
            them.
          </p>
          <p className="text-muted-foreground">
            Before getting into tech, I spent a lot of time making music, and at
            some point I realized programming gave me that same deep focus and
            creative pull. The artistic side carried over into how I write code.
            I think about structure, flow, and the small decisions that make
            something feel solid. For me, building software feels closer to
            making art than just writing code.
          </p>
          <p className="text-muted-foreground">
            When I’m not coding, I’m usually out playing disc golf in the summer
            or snowboarding in the winter.
          </p>
        </div>

        <div className="border-border flex w-full flex-col gap-4 border-t pt-8 md:pt-10">
          <h3 className="text-lg font-medium">Technologies</h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-0">
            {renderTechnologiesSubsection(frontendTechnologies)}
            {renderTechnologiesSubsection(backendTechnologies)}
          </div>
        </div>

        <div className="border-border flex w-full flex-col gap-4 border-t pt-8 md:pt-10">
          <h3 className="text-lg font-medium">Experience</h3>
          <ExperienceList />
        </div>
      </div>
    </section>
  );
}

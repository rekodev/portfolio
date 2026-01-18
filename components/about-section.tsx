import Link from "next/link";
import { Mail, MapPinHouse } from "lucide-react";

import { Badge } from "./ui/badge";

export default function AboutSection() {
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

  const renderTechnologiesSubsection = (technologies: Array<string>) => (
    <div className="flex w-1/2 flex-col gap-2">
      <p className="text-muted-foreground text-sm uppercase">
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
    <section id="about" className="mx-auto flex w-full py-16">
      <div className="flex w-1/3 flex-col gap-10">
        <h3 className="font-medium uppercase">About</h3>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <MapPinHouse className="h-4 w-4" /> Vilnius, Lithuania
          </p>
          <Link
            href="mailto:reko.jsx@gmail.com"
            className="text-muted-foreground flex items-center gap-2 text-sm hover:underline"
          >
            <Mail className="h-4 w-4" /> reko.jsx@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex w-2/3 flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            I’m a Web Developer who cares a lot about the details. I like
            building things that look good, feel right to use, and work the way
            they should.
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

        <div className="border-accent-foreground/10 flex w-full flex-col gap-4 border-t pt-10">
          <h4 className="text-muted-foreground text-lg uppercase">
            Technologies
          </h4>
          <div className="flex">
            {renderTechnologiesSubsection(frontendTechnologies)}
            {renderTechnologiesSubsection(backendTechnologies)}
          </div>
        </div>

        <div className="border-accent-foreground/10 flex w-full flex-col gap-4 border-t pt-10">
          <h4 className="text-muted-foreground text-lg uppercase">
            Experience
          </h4>
          <div>
            <div className="flex items-end justify-between">
              <p>Vinted</p>
              <p className="text-muted-foreground">Web Engineer</p>
              <p className="text-muted-foreground font-mono text-sm">
                2023 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

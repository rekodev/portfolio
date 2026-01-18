import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    year: "2025",
    name: "InvoiceTrackr",
    description:
      "A comprehensive invoicing and income tracking web application designed for freelancers and small businesses.",
    technologies: ["Next.js", "Fastify"],
    links: {
      github: "https://github.com/rekodev/invoicetrackr",
      live: "https://invoicetrackr.app",
    },
    imageSrc: "/projects/invoicetrackr.png",
  },
];

export default function ProjectsSection() {
  const renderProjectSubsection = (project: (typeof projects)[number]) => {
    return (
      <div className="group flex flex-col" key={project.name}>
        <div className="border-border relative flex w-full flex-col gap-4 border-t py-8 md:flex-row md:items-center md:gap-0">
          <div className="flex w-full items-center gap-6 md:w-1/3 md:gap-12">
            <p className="text-muted-foreground font-mono text-sm">
              {project.year}
            </p>
            <Button
              asChild
              className="text-chart-5 md:text-foreground md:group-hover:text-chart-5 text-lg"
              variant="link"
            >
              <Link
                href={project.links.live}
                className="flex items-center font-medium md:group-hover:cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
                <ArrowUpRight className="ml-1 h-5 w-5 md:hidden md:group-hover:flex" />
              </Link>
            </Button>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-2/3 md:flex-row md:items-center md:justify-between">
            <p className="text-muted-foreground max-w-lg text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg md:max-h-0 md:opacity-0 md:transition-all md:duration-700 md:ease-out md:group-focus-within:max-h-[600px] md:group-focus-within:opacity-100 md:group-hover:max-h-[600px] md:group-hover:opacity-100">
          <Image
            src={project.imageSrc}
            alt={project.name}
            width={1600}
            height={900}
            sizes="100vw"
            className="h-auto w-full md:blur-sm md:transition-all md:duration-700 md:ease-out md:group-focus-within:blur-none md:group-hover:blur-none"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="mx-auto w-full scroll-mt-24 py-16">
      <div className="flex items-center justify-between">
        <h3 className="font-medium uppercase">Selected Work</h3>
        <p className="text-muted-foreground font-mono text-sm uppercase">
          {projects.length.toString().padStart(2, "0")} projects
        </p>
      </div>
      <div className="mt-12">{projects.map(renderProjectSubsection)}</div>
    </section>
  );
}

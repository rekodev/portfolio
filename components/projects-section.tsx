import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
        <div className="border-accent-foreground/10 relative flex w-full items-center border-t py-8">
          <div className="flex w-1/3 items-center gap-12">
            <p className="text-muted-foreground font-mono text-sm">
              {project.year}
            </p>
            <Button asChild className="text-lg" variant="link">
              <Link
                href={project.links.live}
                className="group-hover:text-chart-3 flex items-center font-medium group-hover:cursor-pointer"
              >
                {project.name}
                <ArrowUpRight className="hidden h-5 w-5 group-hover:flex" />
              </Link>
            </Button>
          </div>
          <div className="flex w-2/3 items-center justify-between">
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
        <div className="group-hover:blur-0 max-h-0 w-full overflow-hidden rounded-lg opacity-0 transition-all duration-700 ease-out group-hover:max-h-[600px] group-hover:opacity-100">
          <Image
            src={project.imageSrc}
            alt={project.name}
            width={1600}
            height={900}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="mx-auto w-full py-16">
      <div className="flex items-center justify-between">
        <h3 className="font-medium uppercase">Selected Work</h3>
        <p className="text-muted-foreground font-mono text-sm uppercase">
          04 projects
        </p>
      </div>
      <div className="mt-12">{projects.map(renderProjectSubsection)}</div>
    </section>
  );
}

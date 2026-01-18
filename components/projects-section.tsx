import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, WifiOff } from "lucide-react";

import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export default function ProjectsSection() {
  const renderProjectSubsection = (project: (typeof PROJECTS)[number]) => {
    const content = (
      <>
        <div className="border-border relative mt-8 flex w-full flex-col gap-4 border-t py-8 md:mt-0 md:flex-row md:items-center md:gap-12">
          <div className="flex w-full items-center gap-4 md:w-1/3 md:gap-12">
            <p className="text-muted-foreground font-mono text-sm">
              {project.year}
            </p>
            <span
              className={cn("flex items-center gap-2 text-lg font-medium", {
                "md:text-foreground md:group-hover:text-chart-5": project.link,
              })}
            >
              {project.name}
              {project.link ? (
                <ArrowUpRight className="inline max-h-4 min-h-4 max-w-4 min-w-4 md:hidden md:group-hover:inline" />
              ) : (
                <WifiOff className="text-muted-foreground inline max-h-4 min-h-4 max-w-4 min-w-4" />
              )}
            </span>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-2/3 md:flex-row md:items-center md:justify-between">
            <p className="text-muted-foreground max-w-lg text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge variant="secondary" className="font-mono" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg md:max-h-0 md:rounded-xl md:rounded-b-none md:opacity-0 md:transition-all md:duration-700 md:ease-out md:group-focus-within:max-h-[600px] md:group-focus-within:opacity-100 md:group-hover:max-h-[600px] md:group-hover:opacity-100">
          <Image
            src={project.imageSrc}
            alt={project.name}
            width={1600}
            height={900}
            sizes="100vw"
            className="h-auto w-full md:blur-sm md:transition-all md:duration-700 md:ease-out md:group-focus-within:blur-none md:group-hover:blur-none"
          />
        </div>
      </>
    );

    if (!project.link) {
      return (
        <div className="group flex flex-col" key={project.name}>
          {content}
        </div>
      );
    }

    return (
      <Link
        key={project.name}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col"
      >
        {content}
      </Link>
    );
  };

  return (
    <section id="projects" className="mx-auto w-full scroll-mt-24 py-16">
      <div className="flex items-center justify-between">
        <h3 className="font-medium uppercase">Selected Work</h3>
        <p className="text-muted-foreground font-mono text-sm uppercase">
          {PROJECTS.length.toString().padStart(2, "0")} projects
        </p>
      </div>
      <div className="mt-12">{PROJECTS.map(renderProjectSubsection)}</div>
    </section>
  );
}

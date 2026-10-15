import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MapPin, SquareTerminal } from "lucide-react";

import { PROJECTS } from "@/lib/constants";

import CopyCommand from "./copy-command";
import LocationMap from "./location-map";
import SectionHeading from "./section-heading";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const isExternalHref = (href: string) => href.startsWith("http");

export default function ProjectsSection() {
  const renderProject = (project: (typeof PROJECTS)[number]) => (
    <article
      key={project.name}
      className="border-border grid gap-6 border-t py-10 md:grid-cols-[7.5rem_1fr_18rem] md:gap-10"
    >
      <p className="text-muted-foreground font-mono text-sm md:pt-1">
        {project.year}
      </p>

      <div className="flex min-w-0 flex-col gap-4">
        {project.badge && (
          <Badge variant="outline" className="bg-background/60">
            <BadgeCheck className="text-chart-2" /> {project.badge}
          </Badge>
        )}
        <h3 className="text-xl font-medium">
          {project.link ? (
            <Link
              href={project.link}
              target={isExternalHref(project.link) ? "_blank" : undefined}
              rel={isExternalHref(project.link) ? "noreferrer" : undefined}
              className="hover:text-brand transition-colors"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-muted-foreground max-w-xl">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge variant="secondary" className="font-mono" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
        {project.installCommand && (
          <CopyCommand command={project.installCommand} />
        )}
        {project.actions ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.actions.map((action, index) => (
              <Button
                asChild
                size="sm"
                key={action.href}
                variant={index === 0 ? "default" : "outline"}
              >
                <Link
                  href={action.href}
                  target={isExternalHref(action.href) ? "_blank" : undefined}
                  rel={isExternalHref(action.href) ? "noreferrer" : undefined}
                >
                  {action.label}
                  {isExternalHref(action.href) && <ArrowUpRight />}
                </Link>
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground flex items-center gap-2 pt-2 text-sm">
            <MapPin className="h-4 w-4" /> Installed on site, not online
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {project.imageSrc ? (
          <div className="relative">
            <Image
              src={project.imageSrc}
              alt={`${project.name} screenshot`}
              width={1600}
              height={1000}
              sizes="(min-width: 768px) 18rem, 100vw"
              className="border-border aspect-[16/10] w-full rounded-xl border object-cover object-top"
            />
            {project.map && (
              <LocationMap
                lightSrc={project.map.lightSrc}
                darkSrc={project.map.darkSrc}
                label={`Map showing where the ${project.name} stands`}
                className="border-background absolute right-3 bottom-3 overflow-hidden rounded-lg border-2 shadow-lg"
              />
            )}
          </div>
        ) : (
          <div className="border-border bg-secondary/60 text-muted-foreground flex aspect-[16/10] w-full items-center justify-center gap-2 rounded-xl border font-mono text-sm">
            <SquareTerminal className="h-4 w-4" /> {project.name}
          </div>
        )}
        {project.map && (
          <p className="text-muted-foreground text-xs">
            Map:{" "}
            <a href="https://openfreemap.org" className="hover:underline">
              OpenFreeMap
            </a>{" "}
            ©{" "}
            <a href="https://www.openmaptiles.org" className="hover:underline">
              OpenMapTiles
            </a>
            , data from{" "}
            <a
              href="https://www.openstreetmap.org/copyright"
              className="hover:underline"
            >
              OpenStreetMap
            </a>
          </p>
        )}
      </div>
    </article>
  );

  return (
    <section id="projects" className="mx-auto w-full scroll-mt-24 py-16">
      <div className="flex items-baseline justify-between">
        <SectionHeading>Selected work</SectionHeading>
        <p className="text-muted-foreground text-sm">
          {PROJECTS.length} projects
        </p>
      </div>
      <div className="mt-8 md:mt-12">{PROJECTS.map(renderProject)}</div>
    </section>
  );
}

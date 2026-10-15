import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import CaseStudySection from "@/components/case-study/case-study-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INVOICETRACKR_CASE_STUDY } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "InvoiceTrackr case study - rekodev",
  description: INVOICETRACKR_CASE_STUDY.summary,
};

export default function InvoiceTrackrPage() {
  const { name, year, summary, imageSrc, links, stack, sections } =
    INVOICETRACKR_CASE_STUDY;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4">
      <section className="flex flex-col gap-6 py-16">
        <Link
          href="/#projects"
          className="text-muted-foreground flex w-fit items-center gap-2 text-sm hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <p className="text-muted-foreground font-mono text-sm">{year}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {name}
        </h1>
        <p className="text-secondary-foreground max-w-2xl text-lg">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge variant="secondary" className="font-mono" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Button asChild variant="outline" key={link.href}>
              <Link href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight />
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <Image
        src={imageSrc}
        alt={name}
        width={1600}
        height={900}
        sizes="(min-width: 1152px) 1152px, 100vw"
        className="mb-16 h-auto w-full rounded-lg md:rounded-xl"
        priority
      />

      <div className="pb-16">
        {sections.map((section) => (
          <CaseStudySection
            key={section.title}
            title={section.title}
            paragraphs={
              "paragraphs" in section ? section.paragraphs : undefined
            }
            items={"items" in section ? section.items : undefined}
          />
        ))}
      </div>
    </main>
  );
}

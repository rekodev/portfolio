import SectionHeading from "@/components/section-heading";

type CaseStudySectionProps = {
  title: string;
  paragraphs?: ReadonlyArray<string>;
  items?: ReadonlyArray<string>;
};

export default function CaseStudySection({
  title,
  paragraphs,
  items,
}: CaseStudySectionProps) {
  return (
    <section className="border-border flex w-full flex-col gap-6 border-t py-10 md:flex-row md:gap-12">
      <SectionHeading className="md:w-1/3">{title}</SectionHeading>
      <div className="text-muted-foreground flex flex-col gap-4 md:w-2/3">
        {paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {items && (
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

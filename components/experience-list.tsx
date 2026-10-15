import Link from "next/link";

import { EXPERIENCE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ExperienceList() {
  return (
    <ol className="flex flex-col gap-9">
      {EXPERIENCE.map((experience, index) => {
        const isCurrent = index === 0;
        const isLast = index === EXPERIENCE.length - 1;

        return (
          <li key={experience.company} className="relative pl-7">
            {/* Rail runs from this role's dot to the next one, so it starts and ends on a dot. */}
            {!isLast && (
              <span
                aria-hidden
                className="bg-border absolute top-[11px] -bottom-[47px] left-[4px] w-px"
              />
            )}
            <span
              aria-hidden
              className={cn(
                "border-border bg-background absolute top-[7px] left-0 size-[9px] rounded-full border",
                isCurrent && "border-brand bg-brand ring-brand/15 ring-4",
              )}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <p className="flex flex-wrap items-baseline gap-x-2">
                <Link
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand font-medium transition-colors"
                >
                  {experience.company}
                </Link>
                <span className="text-muted-foreground">
                  {experience.title}
                </span>
              </p>
              <p className="text-muted-foreground text-sm whitespace-nowrap tabular-nums">
                {experience.years}
              </p>
            </div>
            {experience.highlights.length > 0 && (
              <ul className="text-foreground/80 mt-3 flex flex-col gap-2 text-[0.9375rem] leading-relaxed">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden
                      className="bg-brand mt-[0.6em] size-1.5 shrink-0 rounded-full"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}

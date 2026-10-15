import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  lightSrc: string;
  darkSrc: string;
  label: string;
  className?: string;
};

// Static map renders, made once from the open Positron / Dark styles, so the
// page ships two small images instead of a map library.
export default function LocationMap({
  lightSrc,
  darkSrc,
  label,
  className,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative size-24 overflow-hidden", className)}
    >
      <Image src={lightSrc} alt="" fill sizes="96px" className="dark:hidden" />
      <Image
        src={darkSrc}
        alt=""
        fill
        sizes="96px"
        className="hidden dark:block"
      />
      <span className="bg-brand absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md ring-2 ring-white" />
    </div>
  );
}

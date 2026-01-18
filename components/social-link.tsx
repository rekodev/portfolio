import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type Props = {
  href: string;
  icon?: string;
  label: string;
  variant?: "outline" | "link";
};

export default function SocialLink({
  href,
  icon,
  label,
  variant = "outline",
}: Props) {
  return (
    <Button
      asChild
      key={label}
      variant={variant}
      className={cn({
        "text-muted-foreground": variant === "link",
      })}
    >
      <Link
        className="flex items-center gap-0.5"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon && (
          <Image
            priority
            loading="eager"
            src={`/${icon}.svg`}
            alt={icon}
            width={16}
            height={16}
          />
        )}
        {label} <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

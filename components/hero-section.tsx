import Link from "next/link";
import { FileText } from "lucide-react";

import { RESUME_HREF, SOCIAL_LINKS } from "@/lib/constants";

import SocialLink from "./social-link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="flex scroll-mt-24 flex-col gap-6 py-16">
      <h1 className="text-lg font-medium">Artūras Tyškevičius</h1>
      <p className="text-muted-foreground max-w-3xl text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
        <span className="text-foreground">Crafting interfaces.</span> Building
        polished web products and sweating the small details that make them feel
        right.
      </p>
      <p className="text-muted-foreground text-lg">
        Currently a Frontend Engineer at{" "}
        <Link className="font-medium hover:underline" href="https://ovoko.com">
          Ovoko
        </Link>
        , previously at{" "}
        <Link className="font-medium hover:underline" href="https://vinted.lt">
          Vinted
        </Link>
        . Also doing some freelance work on the side.
      </p>
      <div className="flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((socialLink) => (
          <SocialLink
            key={socialLink.href}
            href={socialLink.href}
            label={socialLink.label}
            icon={socialLink.icon}
          />
        ))}
        <Button asChild>
          <Link href={RESUME_HREF} target="_blank" rel="noreferrer">
            <FileText /> Resume
          </Link>
        </Button>
      </div>
    </section>
  );
}

import Link from "next/link";

import { SOCIAL_LINKS } from "@/lib/constants";

import SocialLink from "./social-link";

export default function HeroSection() {
  return (
    <section id="hero" className="flex scroll-mt-24 flex-col gap-6 py-16">
      <h1 className="text-lg font-medium">Artūras Tyškevičius</h1>
      <p className="text-secondary-foreground max-w-2xl text-4xl leading-snug font-medium">
        <span className="text-chart-5 [font-family:var(--font-syne)] font-semibold">
          Crafting interfaces.
        </span>{" "}
        Building polished software and web experiences. Experimenting with
        magical details in user interfaces.
      </p>
      <p className="text-muted-foreground text-lg">
        Currently a Web Engineer at{" "}
        <Link className="font-medium hover:underline" href="https://vinted.lt">
          Vinted
        </Link>
        . Also doing some freelance work on the side.
      </p>
      <div className="flex gap-2">
        {SOCIAL_LINKS.map((socialLink) => (
          <SocialLink
            key={socialLink.href}
            href={socialLink.href}
            label={socialLink.label}
            icon={socialLink.icon}
          />
        ))}
      </div>
    </section>
  );
}

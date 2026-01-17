import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  const links = [
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/rekodev",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://linkedin.com/arturas-tyskevicius",
    },
    {
      label: "X",
      icon: "x",
      href: "https://x.com/rekodev",
    },
  ];

  const renderLink = ({ label, href, icon }: (typeof links)[number]) => (
    <Button asChild key={label} variant="outline">
      <Link className="flex items-center gap-0.5" href={href} target="_blank">
        <Image src={`/${icon}.svg`} alt={icon} width={16} height={16} />
        {label} <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <section className="flex flex-col gap-6 py-16">
      <h1 className="text-lg font-medium">Artūras Tyškevičius</h1>
      <p className="text-secondary-foreground max-w-2xl text-4xl leading-snug font-medium">
        <span className="text-chart-5 font-serif italic">
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
      <div className="flex gap-2">{links.map(renderLink)}</div>
    </section>
  );
}

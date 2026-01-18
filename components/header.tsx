import Link from "next/link";
import { CodeXml } from "lucide-react";

import { Button } from "@/components/ui/button";

import Clock from "./clock";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  {
    href: "#about",
    text: "About Me",
  },
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

export default function Header() {
  const renderLink = (link: (typeof navLinks)[number]) => (
    <Button className="text-md px-0" key={link.href} asChild variant="link">
      <Link href={link.href}>{link.text}</Link>
    </Button>
  );

  return (
    <div className="border-accent-foreground/10 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 font-mono font-medium hover:cursor-pointer"
        >
          <CodeXml className="h-5 w-5" /> rekodev
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map(renderLink)}
          <ModeToggle />
          <Clock />
        </div>
      </div>
    </div>
  );
}

import { CodeXml } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Clock from "./clock";

export default function Header() {
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

  const renderLink = (href: string, text: string) => (
    <Button key={href} asChild variant="link">
      <Link href={href}>{text}</Link>
    </Button>
  );

  return (
    <div className="border-accent-foreground/10 sticky top-0 w-full border-b backdrop-blur-3xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <p className="flex items-center gap-2 font-mono font-medium">
          <CodeXml className="h-5 w-5" /> rekodev
        </p>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => renderLink(link.href, link.text))}
          <Clock />
        </div>
      </div>
    </div>
  );
}

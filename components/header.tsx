import Link from "next/link";
import { CodeXml } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

import Clock from "./clock";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";

export default function Header() {
  const renderLink = (link: (typeof NAV_LINKS)[number]) => (
    <Button className="text-md px-0" key={link.href} asChild variant="link">
      <Link href={link.href}>{link.text}</Link>
    </Button>
  );

  return (
    <div className="border-border bg-background/20 sticky top-0 z-50 w-full border-b backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 font-mono font-medium hover:cursor-pointer"
        >
          <CodeXml className="h-5 w-5" /> rekodev
        </Link>
        <MobileNav />
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(renderLink)}
          <ModeToggle />
          <Clock />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FULL_NAME, SOCIAL_LINKS } from "@/lib/constants";

import SocialLink from "./social-link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="border-border scroll-mt-24 border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-16 pb-10 md:flex-row">
        <h3 className="w-full font-medium uppercase md:w-1/3">Contact</h3>
        <div className="flex w-full flex-col gap-10 md:w-2/3">
          <p className="text-3xl font-medium">
            If you&apos;d like to discuss a project or just say hi, I&apos;m
            always down to chat.
          </p>
          <Button asChild className="w-fit">
            <Link href="mailto:reko.jsx@gmail.com">
              Get in touch <ArrowUpRight className="" />
            </Link>
          </Button>
          <div className="text-muted-foreground border-border flex w-full flex-col items-center justify-between gap-10 border-t pt-10 text-sm md:flex-row md:gap-0">
            <div className="flex flex-col justify-center md:flex-row">
              {SOCIAL_LINKS.map((socialLink) => (
                <SocialLink
                  variant="link"
                  key={socialLink.href}
                  href={socialLink.href}
                  label={socialLink.label}
                />
              ))}
            </div>
            <p>
              © {new Date().getFullYear()} {FULL_NAME}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

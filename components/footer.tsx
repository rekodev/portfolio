import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FULL_NAME } from "@/lib/constants";

import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="border-border border-t scroll-mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-16 pb-10 md:flex-row md:gap-0">
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
          <div className="text-muted-foreground border-border flex w-full flex-col border-t pt-10 text-sm">
            <p className="self-center md:self-end">
              © {new Date().getFullYear()} {FULL_NAME}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

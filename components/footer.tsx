import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { FULL_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <div className="mx-auto flex w-full max-w-6xl px-4 pt-16 pb-10">
      <h4 className="w-1/3 font-medium uppercase">Contact</h4>
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl font-medium">
          If you&apos;d like to discuss a project or just say hi, I&apos;m
          always down to chat.
        </h3>
        <Button asChild className="w-fit">
          <Link href="mailto:reko.jsx@gmail.com">
            Get in touch <ArrowUpRight className="" />
          </Link>
        </Button>
        <div className="text-muted-foreground flex w-full flex-col border-t pt-10 text-sm">
          <p className="self-end">
            © {new Date().getFullYear()} {FULL_NAME}
          </p>
        </div>
      </div>
    </div>
  );
}

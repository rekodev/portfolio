"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
  command: string;
};

export default function CopyCommand({ command }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="border-border bg-background/60 flex w-full max-w-xl items-center gap-3 rounded-xl border py-1.5 pr-1.5 pl-4 font-mono text-sm backdrop-blur-sm">
      <span className="text-muted-foreground select-none" aria-hidden>
        $
      </span>
      <code className="min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto whitespace-nowrap">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring/50 flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors outline-none focus-visible:ring-[3px]"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}

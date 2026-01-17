import { CodeXml } from "lucide-react";
import Clock from "./clock";

export default function Header() {
  return (
    <div className="sticky top-0 w-full border-b backdrop-blur-3xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <p className="flex items-center gap-2 font-mono font-medium">
          <CodeXml className="h-5 w-5" /> rekodev
        </p>
        <div className="flex items-end gap-6">
          <div className="font-medium">About Me</div>
          <div className="font-medium">Projects</div>
          <div className="font-medium">Contact</div>
          <Clock />
        </div>
      </div>
    </div>
  );
}

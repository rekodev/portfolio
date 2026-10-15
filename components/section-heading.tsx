import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "font-display text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

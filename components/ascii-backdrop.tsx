import { generateAsciiField } from "@/lib/ascii-field";

// Wide enough to reach both edges on large monitors.
const FIELD = generateAsciiField({ cols: 420, rows: 72, seed: 11 });

// The same field is drawn twice: sharp around the edges and blurred behind
// the hero text, each masked to its own area so they blend into each other.
const LAYERS = ["ascii-sharp", "ascii-soft"] as const;

export default function AsciiBackdrop() {
  return (
    <div
      aria-hidden
      className="ascii-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden"
    >
      {LAYERS.map((layer) => (
        <div key={layer} className={`${layer} absolute inset-0`}>
          <pre className="ascii-field absolute top-0 left-1/2 -translate-x-1/2 font-mono text-[11px] leading-[14px] select-none">
            {FIELD}
          </pre>
        </div>
      ))}
    </div>
  );
}

import { Briefcase, GraduationCap, Target } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import type { TimelineEntry } from "@/lib/types";

const typeIcons = {
  formation: GraduationCap,
  experience: Briefcase,
  objectif: Target,
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8">
      {entries.map((entry, i) => {
        const TypeIcon = typeIcons[entry.type];
        return (
        <li key={entry.year + entry.title} className="mb-10 last:mb-0">
          <FadeIn delay={i * 0.08}>
            <span
              className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-accent to-accent-2"
              aria-hidden="true"
            />
            <div className="mb-1 flex items-center gap-2 text-sm font-mono text-accent">
              <TypeIcon size={14} />
              {entry.year}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
            <p className="mb-2 text-sm text-muted">{entry.subtitle}</p>
            <p className="max-w-2xl leading-relaxed text-muted">{entry.description}</p>
          </FadeIn>
        </li>
        );
      })}
    </ol>
  );
}

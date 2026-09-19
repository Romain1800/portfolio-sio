"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Rss } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import type { VeilleArticle } from "@/lib/types";

function formatVeilleDate(date: string) {
  // Certaines sources (pages de référence OWASP, tutoriel Grafikart) n'affichent
  // qu'une année : on la garde telle quelle plutôt que d'inventer un jour.
  if (/^\d{4}$/.test(date)) return date;
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function VeilleExplorer({ articles }: { articles: VeilleArticle[] }) {
  const [category, setCategory] = useState("Tous");

  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );

  const sorted = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [articles]
  );

  const filtered = sorted.filter(
    (a) => category === "Tous" || a.category === category
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            aria-pressed={category === cat}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              category === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface text-muted hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        {filtered.map((article, i) => (
          <FadeIn key={article.id} delay={i * 0.04}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{article.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Rss size={12} /> {article.source}
                  </span>
                  <span className="text-xs text-muted">
                    {formatVeilleDate(article.date)}
                  </span>
                </div>
                <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{article.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {article.tags.map((t) => (
                    <span key={t} className="rounded-md bg-background px-2 py-1 text-xs text-muted">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <ExternalLink size={16} className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent" />
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

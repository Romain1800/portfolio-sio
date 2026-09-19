import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_var(--color-accent)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-3 top-3">
          <Badge
            variant={project.status === "En cours" ? "warning" : "success"}
            className="border-transparent bg-background/90 font-semibold shadow-sm backdrop-blur-sm"
          >
            {project.status}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock size={12} /> {project.duration}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background px-2 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
          Voir la fiche projet
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

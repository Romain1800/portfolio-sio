import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/ui/fade-in";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

export function FeaturedProjects() {
  const featured = (projects as Project[]).filter((p) => p.featured).slice(0, 3);

  return (
    <section className="border-b border-border bg-surface/30 py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Réalisations"
            title="Projets mis en avant"
            description="Une sélection de projets de développement réalisés durant ma formation et mon stage."
          />
          <Link
            href="/projets"
            className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Tous les projets <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

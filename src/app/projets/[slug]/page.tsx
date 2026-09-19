import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

const allProjects = projects as Project[];

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { default: ProjectBody } = await import(
    `@/content/projects/${slug}.mdx`
  );

  return (
    <article>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <Container className="relative py-16">
          <Link
            href="/projets"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft size={14} /> Retour aux projets
          </Link>

          <FadeIn>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant={project.status === "En cours" ? "warning" : "success"}>
                {project.status}
              </Badge>
            </div>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {project.duration}
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <FadeIn className="max-w-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover}
              alt={project.title}
              className="mb-10 w-full rounded-xl border border-border"
            />
            <div>
              <ProjectBody />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Tag size={14} /> Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </article>
  );
}

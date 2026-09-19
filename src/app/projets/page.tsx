import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectExplorer } from "@/components/project-explorer";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projets",
  description: "Mes projets de développement en BTS SIO SLAM : application web MVC (PHP/MySQL), programme Java orienté objet et outil de gestion.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Mes réalisations techniques"
        description="Chaque projet documente le contexte, les missions, l'architecture mise en œuvre et les résultats obtenus."
      />
      <section className="py-16">
        <Container>
          <ProjectExplorer projects={projects as Project[]} />
        </Container>
      </section>
    </>
  );
}

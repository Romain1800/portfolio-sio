import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCategoryCard } from "@/components/skill-category-card";
import { SkillsRadarChart } from "@/components/skills-radar-chart";
import skills from "@/data/skills.json";
import type { SkillCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Compétences",
  description: "Dashboard des compétences techniques : langages (Java, PHP, SQL), bases de données, conception (POO, MVC) et sécurité applicative.",
};

export default function SkillsPage() {
  const data = skills as SkillCategory[];

  return (
    <>
      <PageHero
        eyebrow="Compétences"
        title="Un dashboard technique de mes compétences SLAM"
        description="Niveaux évalués honnêtement, actualisés au fil des projets et des modules de formation."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Vue d'ensemble"
            title="Niveau moyen par domaine"
          />
          <div className="mt-8">
            <SkillsRadarChart data={data} />
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {data.map((cat, i) => (
              <SkillCategoryCard key={cat.category} data={cat} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

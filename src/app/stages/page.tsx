import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { StageCard } from "@/components/stage-card";
import stages from "@/data/stages.json";
import type { Stage } from "@/lib/types";

export const metadata: Metadata = {
  title: "Stages",
  description: "Mon stage de 1ʳᵉ année de BTS SIO chez Al Nilaya : missions, outils et retour d'expérience.",
};

export default function StagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stages"
        title="Mes expériences en entreprise"
        description="Chaque stage est détaillé : entreprise, missions confiées, compétences développées et bilan personnel."
      />
      <section className="py-16">
        <Container className="space-y-10">
          {(stages as Stage[]).map((stage, i) => (
            <StageCard key={stage.id} stage={stage} index={i} />
          ))}
        </Container>
      </section>
    </>
  );
}

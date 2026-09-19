import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { VeilleExplorer } from "@/components/veille-explorer";
import veille from "@/data/veille.json";
import type { VeilleArticle } from "@/lib/types";

export const metadata: Metadata = {
  title: "Veille technologique",
  description: "Veille technologique orientée intelligence artificielle, cybersécurité (injections SQL, OWASP) et développement web.",
};

export default function VeillePage() {
  return (
    <>
      <PageHero
        eyebrow="Veille technologique"
        title="Suivre l'actualité IT au quotidien"
        description="Une sélection d'articles que je suis régulièrement : intelligence artificielle, cybersécurité et développement web."
      />
      <section className="py-16">
        <Container>
          <VeilleExplorer articles={veille as VeilleArticle[]} />
        </Container>
      </section>
    </>
  );
}

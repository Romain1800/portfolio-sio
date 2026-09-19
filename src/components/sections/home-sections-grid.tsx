import Link from "next/link";
import { ArrowRight, Network, FolderGit2, Briefcase, Award, Rss, User } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    href: "/a-propos",
    icon: User,
    title: "À propos",
    description: "Mon parcours atypique, mes objectifs et ce qui me motive dans le développement.",
  },
  {
    href: "/competences",
    icon: Network,
    title: "Compétences",
    description: "Dashboard interactif : langages, bases de données, conception et sécurité.",
  },
  {
    href: "/projets",
    icon: FolderGit2,
    title: "Projets",
    description: "Mes réalisations : application web MVC (PHP/MySQL), Java POO et outil de gestion.",
  },
  {
    href: "/stages",
    icon: Briefcase,
    title: "Stages",
    description: "Mon stage chez Al Nilaya : outils de gestion, tableau de bord et documentation.",
  },
  {
    href: "/certifications",
    icon: Award,
    title: "Certifications",
    description: "RGPD (CNIL), SecNumacadémie (ANSSI) et une formation IA en cours.",
  },
  {
    href: "/veille",
    icon: Rss,
    title: "Veille technologique",
    description: "Intelligence artificielle, cybersécurité (injections SQL, OWASP) et développement web.",
  },
];

export function HomeSectionsGrid() {
  return (
    <section className="border-b border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="Explorer le portfolio"
          title="Une vision complète de mon parcours en développement"
          description="Chaque section est alimentée par des fichiers de contenu structurés, faciles à mettre à jour au fil de ma formation."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon size={20} />
                </span>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span className="flex items-center gap-1 text-sm font-medium text-accent">
                  Découvrir
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

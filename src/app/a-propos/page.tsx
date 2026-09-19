import type { Metadata } from "next";
import { CheckCircle2, Globe2, Heart, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/timeline";
import { FadeIn } from "@/components/ui/fade-in";
import profile from "@/data/profile.json";
import timeline from "@/data/timeline.json";
import type { TimelineEntry } from "@/lib/types";

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation, parcours et objectifs professionnels de Romain Audebert, étudiant en BTS SIO 2ᵉ année option SLAM à Lyon.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Mon parcours vers le développement"
        description={profile.shortBio}
      />

      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading eyebrow="Présentation" title="Qui suis-je ?" />
            <p className="mt-6 leading-relaxed text-muted">
              Je m&apos;appelle Romain, je prépare un BTS Services Informatiques aux Organisations,
              option Solutions Logicielles et Applications Métiers (SLAM), à l&apos;ICOF — Campus
              Lyon Saint-Irénée. Mon parcours est atypique : après un Bac général (spécialités
              Mathématiques et NSI) puis un passage en BUT Gestion Logistique &amp; Transport, je me
              suis réorienté vers le développement informatique, qui me passionne.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ce qui me motive : l&apos;instant où une idée devient une application concrète. Je
              construis mes compétences par la pratique, à travers des projets que je publie sur
              GitHub — une application web en <strong>PHP/MySQL selon l&apos;architecture MVC</strong>
              {" "}et un programme <strong>Java orienté objet</strong>. Je suis surtout
              {" "}<strong>passionné par l&apos;intelligence artificielle</strong>, que je souhaite
              intégrer à mes développements, et je garde un œil, de plus loin, sur la sécurité
              applicative (injections SQL, OWASP).
            </p>
            <p className="mt-4 leading-relaxed text-muted">{profile.objectives}</p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-sm text-muted">{profile.status}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <CheckCircle2 size={18} />
                  <h3 className="font-semibold text-foreground">Qualités</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {profile.qualities.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <Heart size={18} />
                  <h3 className="font-semibold text-foreground">Centres d&apos;intérêt</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {profile.interests.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6 sm:col-span-2">
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <Globe2 size={18} />
                  <h3 className="font-semibold text-foreground">Langues</h3>
                </div>
                <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
                  {profile.languages.map((lang) => (
                    <li key={lang.name}>
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <br />
                      {lang.level}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Parcours"
            title="Mon parcours de formation"
            description="Une progression continue vers le développement d'applications."
          />
          <div className="mt-12">
            <Timeline entries={timeline as TimelineEntry[]} />
          </div>
        </Container>
      </section>
    </>
  );
}

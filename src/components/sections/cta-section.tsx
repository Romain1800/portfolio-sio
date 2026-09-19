import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import profile from "@/data/profile.json";

export function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Une question, un projet à échanger&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                {profile.availability}. N&apos;hésitez pas à me contacter depuis {profile.location.split(",")[0]} ou à distance.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Me contacter <ArrowRight size={16} />
                </Link>
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Download size={16} /> Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

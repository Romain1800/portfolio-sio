import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/icon-map";
import certifications from "@/data/certifications.json";
import type { Certification } from "@/lib/types";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications et formations : MOOC RGPD de la CNIL, SecNumacadémie de l'ANSSI, et une formation en intelligence artificielle en cours.",
};

const STATUS_ORDER: Record<Certification["status"], number> = {
  Obtenue: 0,
  Suivie: 1,
  Visée: 2,
};

const STATUS_VARIANT: Record<Certification["status"], "success" | "accent" | "warning"> = {
  Obtenue: "success",
  Suivie: "accent",
  Visée: "warning",
};

export default function CertificationsPage() {
  const sorted = [...(certifications as Certification[])].sort(
    (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
  );

  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Certifications obtenues & visées"
        description="Les formations et certifications déjà suivies, ainsi que celles que je prépare en parallèle de mon BTS SIO SLAM."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((cert, i) => {
              const Icon = getIcon(cert.icon);
              const hasLink = Boolean(cert.url && cert.url !== "#");
              return (
                <FadeIn key={cert.id} delay={i * 0.06} className="h-full">
                  <a
                    href={hasLink ? cert.url : undefined}
                    {...(hasLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-accent-foreground">
                        <Icon size={20} />
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant={STATUS_VARIANT[cert.status]}>
                          {cert.status}
                        </Badge>
                        <ExternalLink size={14} className="text-muted transition-colors group-hover:text-accent" />
                      </div>
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">{cert.name}</h3>
                    <p className="mb-3 text-xs uppercase tracking-wide text-accent">
                      {cert.issuer}
                    </p>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
                      <span>{cert.date}</span>
                      <span className="font-medium text-foreground">{cert.score}</span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

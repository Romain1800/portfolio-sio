import { Building2, Calendar, Download, MapPin, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import type { Stage } from "@/lib/types";

export function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const hasDetails = stage.missions.length > 0 || stage.competences.length > 0 || stage.outils.length > 0;

  return (
    <FadeIn delay={index * 0.08}>
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={stage.logo}
            alt=""
            className="h-14 w-14 rounded-lg border border-border object-cover"
          />
          <div className="flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-foreground">{stage.role}</h3>
              <Badge variant={stage.status === "À venir" ? "warning" : "success"}>
                {stage.status}
              </Badge>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <Building2 size={14} /> {stage.company}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm text-muted sm:items-end">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {stage.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {stage.location}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Contexte</h4>
          <p className="text-sm leading-relaxed text-muted">{stage.context}</p>
        </div>

        {hasDetails && (
          <div className="grid gap-8 border-t border-border p-6 lg:grid-cols-2">
            {stage.missions.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Missions</h4>
                <ul className="space-y-1.5 text-sm text-muted">
                  {stage.missions.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="text-accent">—</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              {stage.outils.length > 0 && (
                <>
                  <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    <Wrench size={14} /> Outils utilisés
                  </h4>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {stage.outils.map((o) => (
                      <Badge key={o}>{o}</Badge>
                    ))}
                  </div>
                </>
              )}

              {stage.competences.length > 0 && (
                <>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">Compétences développées</h4>
                  <div className="flex flex-wrap gap-2">
                    {stage.competences.map((c) => (
                      <Badge key={c} variant="accent">{c}</Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-border bg-background/40 p-6">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Analyse &amp; retour d&apos;expérience</h4>
          <p className="text-sm leading-relaxed text-muted">{stage.feedback}</p>
          {stage.attestation && (
            <a
              href={stage.attestation}
              download
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <Download size={14} /> Télécharger l&apos;attestation de stage
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

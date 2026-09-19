import type { Metadata } from "next";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/contact-form";
import { LinkedinIcon, GithubIcon } from "@/components/ui/brand-icons";
import profile from "@/data/profile.json";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Romain Audebert, étudiant en BTS SIO 2ᵉ année option SLAM à Lyon, en recherche de stage.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discutons de vos projets ou de vos questions"
        description={`${profile.availability}. N'hésitez pas à me contacter directement.`}
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <FadeIn>
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Téléphone</p>
                <p className="text-sm text-muted">{profile.phone}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <LinkedinIcon size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted">Voir mon profil</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GithubIcon size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-sm text-muted">github.com/Romain1800</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Localisation</p>
                <p className="text-sm text-muted">{profile.location}</p>
              </div>
            </div>

            <a
              href={profile.cvUrl}
              download
              className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-accent/50 bg-accent/5 p-5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <Download size={16} /> Télécharger mon CV
            </a>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

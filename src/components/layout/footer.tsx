import Link from "next/link";
import { Mail, Phone, Code2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/brand-icons";
import { navLinks } from "@/lib/nav";
import profile from "@/data/profile.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-accent-foreground">
                <Code2 size={18} />
              </span>
              {profile.name}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <p className="mt-3 text-sm text-muted">{profile.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone size={16} /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
          <p>Conçu &amp; développé avec Next.js, TypeScript et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

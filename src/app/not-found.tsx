import Link from "next/link";
import { ArrowLeft, WifiOff } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
        <WifiOff size={28} />
      </span>
      <p className="font-mono text-sm text-muted">Erreur 404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        Cette route n&apos;existe pas sur le réseau.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        La page que vous cherchez a peut-être été déplacée ou n&apos;a jamais existé.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground"
      >
        <ArrowLeft size={16} /> Retour à l&apos;accueil
      </Link>
    </Container>
  );
}

import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
      </Container>
    </section>
  );
}

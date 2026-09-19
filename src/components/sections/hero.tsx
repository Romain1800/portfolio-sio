"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, CircleDot } from "lucide-react";
import { NetworkBackground } from "@/components/ui/network-background";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import profile from "@/data/profile.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <NetworkBackground className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <CircleDot size={14} className="text-success" />
            {profile.availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_0_40px_-10px_var(--color-accent)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg font-medium text-gradient sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted"
          >
            <MapPin size={14} /> {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} /> Télécharger le CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Me contacter <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-gradient sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

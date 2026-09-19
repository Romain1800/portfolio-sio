"use client";
/* eslint-disable react-hooks/static-components -- icons are resolved dynamically from data-driven content */

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icon-map";
import type { SkillCategory } from "@/lib/types";

export function SkillCategoryCard({ data, index }: { data: SkillCategory; index: number }) {
  const Icon = getIcon(data.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-xl border border-border bg-surface p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon size={20} />
        </span>
        <div>
          <h3 className="font-semibold text-foreground">{data.category}</h3>
          <p className="text-xs text-muted">{data.description}</p>
        </div>
      </div>

      <ul className="space-y-4">
        {data.skills.map((skill, i) => {
          const SkillIcon = getIcon(skill.icon);
          return (
            <li key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 text-foreground">
                  <SkillIcon size={14} className="text-muted" />
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-muted">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-background">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: index * 0.06 + i * 0.05, ease: "easeOut" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

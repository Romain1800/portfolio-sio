"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { SkillCategory } from "@/lib/types";

export function SkillsRadarChart({ data }: { data: SkillCategory[] }) {
  const chartData = data.map((cat) => ({
    category: cat.category,
    niveau: Math.round(
      cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length
    ),
  }));

  return (
    <div className="h-80 w-full rounded-xl border border-border bg-surface p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData} outerRadius="70%">
          <PolarGrid stroke="var(--color-border)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "var(--color-muted)", fontSize: 10 }}
          />
          <Radar
            name="Niveau moyen"
            dataKey="niveau"
            stroke="var(--color-accent)"
            fill="var(--color-accent)"
            fillOpacity={0.35}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

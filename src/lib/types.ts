export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  duration: string;
  featured: boolean;
  cover: string;
  technologies: string[];
  competencesBTS: string[];
  status: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "formation" | "experience" | "objectif";
}

export interface Stage {
  id: string;
  company: string;
  logo: string;
  logoDark?: string;
  location: string;
  period: string;
  role: string;
  status: string;
  context: string;
  missions: string[];
  competences: string[];
  outils: string[];
  feedback: string;
  attestation: string | null;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  score: string;
  icon: string;
  description: string;
  url: string;
  credential: string | null;
  status: "Obtenue" | "Visée";
}

export interface VeilleArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  source: string;
  url: string;
  summary: string;
  tags: string[];
}

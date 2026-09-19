import {
  Server, Terminal, Users, Network, Globe, ShieldCheck, SquareCode,
  SquareTerminal, Boxes, Layers, Box, Hash, Split, Route, GitBranch,
  Radar, Router, Flame, Lock, KeyRound, DatabaseBackup, Activity,
  Code, Code2, FileCode, FileCode2, Newspaper, Rss, Cloud, Cpu,
  Shield, GraduationCap, Award, BookOpen, FileText, Building2,
  Briefcase, Wifi, HardDrive, Bug, Search, type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Server, Terminal, Users, Network, Globe, ShieldCheck, SquareCode,
  SquareTerminal, Boxes, Layers, Box, Hash, Split, Route, GitBranch,
  Radar, Router, Flame, Lock, KeyRound, DatabaseBackup, Activity,
  Code, Code2, FileCode, FileCode2, Newspaper, Rss, Cloud, Cpu,
  Shield, GraduationCap, Award, BookOpen, FileText, Building2,
  Briefcase, Wifi, HardDrive, Bug, Search,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Server;
}

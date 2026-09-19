import { Hero } from "@/components/sections/hero";
import { HomeSectionsGrid } from "@/components/sections/home-sections-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSectionsGrid />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}

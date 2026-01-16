import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}

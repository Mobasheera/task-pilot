import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <CTASection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 EvoTask AI — Intelligent Growth-Based Task Allocation Engine
    </footer>
  </div>
);

export default Index;

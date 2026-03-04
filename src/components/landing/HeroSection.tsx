import { Brain, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-bg">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-glow-blue/10 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 opacity-0 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Task Intelligence</span>
        </div>

        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="p-3 rounded-2xl gradient-bg glow-border">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="glow-text">TaskPilot</span>{" "}
            <span className="text-foreground"></span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Smart Task Allocation for Modern Devs

        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>TaskPilot matches team skills with project needs to assign the right tasks to the right developers. Build faster with balanced workloads.

        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] hover:scale-105">
            
            <span>View Live Demo</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary font-semibold text-secondary-foreground transition-all duration-300 hover:bg-muted hover:border-primary/30">
            
            How It Works
          </a>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold glow-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;
import { Users, FileSearch, Zap } from "lucide-react";

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Analyze Team Skills",
    description: "AI maps every team member's skill depth, learning velocity, and performance history.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Understand Project Requirements",
    description: "Natural language processing breaks tasks into skill requirements and complexity vectors.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Generate Optimized Assignments",
    description: "Growth-weighted matching algorithm assigns tasks for maximum output and skill development.",
  },
];

const SolutionSection = () => (
  <section id="how-it-works" className="py-24 px-6 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Solution</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
          AI That Understands Your Team
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            {i < 2 && (
              <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />
            )}
            <div className="glass-card-hover p-8 relative z-10 text-center">
              <div className="text-5xl font-black glow-text mb-4">{s.step}</div>
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;

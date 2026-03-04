import { AlertTriangle, BarChart3, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual Assignment Ignores Real Skill Depth",
    description: "Managers rely on assumptions, not data. Critical skill gaps go unnoticed until deadlines are at risk.",
  },
  {
    icon: BarChart3,
    title: "Uneven Workload Distribution",
    description: "Top performers get overloaded while others remain underutilized, leading to burnout and inefficiency.",
  },
  {
    icon: TrendingDown,
    title: "No Growth-Based Optimization",
    description: "Teams stagnate when tasks don't challenge members. Without growth tracking, potential is wasted.",
  },
];

const ProblemSection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Problem</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
          Why Task Allocation Fails<br />in Modern Teams
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div
            key={i}
            className="glass-card-hover p-8 group"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

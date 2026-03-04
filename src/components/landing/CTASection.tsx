import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center glass-card p-12 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-[80px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience AI-Based<br />Team Synchronization
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            See how EvoTask AI analyzes your team and generates optimized task assignments in real-time.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            Open Demo Dashboard
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

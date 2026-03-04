import { Bot, Star } from "lucide-react";

export interface Assignment {
  title: string;
  category: string;
  difficulty: string;
  assignedTo: string;
  confidence: number;
  reasoning: string;
  xpReward: number;
}

const categoryColors: Record<string, string> = {
  Frontend: "bg-info/20 text-info",
  Backend: "bg-success/20 text-success",
  "AI/ML": "bg-primary/20 text-primary",
  Communication: "bg-warning/20 text-warning",
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-success/20 text-success",
  Medium: "bg-warning/20 text-warning",
  Hard: "bg-destructive/20 text-destructive",
};

const AIAssignments = ({ assignments }: { assignments: Assignment[] }) => (
  <section>
    <div className="flex items-center gap-2 mb-4">
      <Bot className="w-5 h-5 text-primary" />
      <h2 className="text-xl font-bold text-foreground">AI Assignments</h2>
    </div>
    <div className="space-y-4">
      {assignments.map((a, i) => (
        <div
          key={i}
          className="glass-card-hover p-6 opacity-0 animate-fade-in"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <h3 className="font-semibold text-foreground mr-auto">{a.title}</h3>
            <span className={`category-tag ${categoryColors[a.category] || "bg-muted text-muted-foreground"}`}>
              {a.category}
            </span>
            <span className={`category-tag ${difficultyColors[a.difficulty] || ""}`}>
              {a.difficulty}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm">
            <span className="text-muted-foreground">
              Assigned to <span className="text-foreground font-semibold">{a.assignedTo}</span>
            </span>
            <span className="text-primary font-bold">{a.confidence}% confidence</span>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 mb-4 border border-border/50">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">AI Reasoning: </span>
              {a.reasoning}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-warning">
              <Star className="w-4 h-4 fill-current" />
              +{a.xpReward} XP
            </div>
            <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full gradient-fill transition-all duration-1000"
                style={{ width: `${a.confidence}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AIAssignments;

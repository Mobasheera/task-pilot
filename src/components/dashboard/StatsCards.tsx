import { Zap, CheckCircle, BookOpen, Target } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Zap, label: "Total XP Earned", value: 7800, suffix: "" },
  { icon: CheckCircle, label: "Tasks Completed", value: 132, suffix: "" },
  { icon: BookOpen, label: "Learning Tasks", value: 21, suffix: "" },
  { icon: Target, label: "Assignment Accuracy", value: 96, suffix: "%" },
];

const StatsCards = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((s, i) => (
      <div key={i} className="glass-card-hover p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <s.icon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
        </div>
        <AnimatedCounter end={s.value} suffix={s.suffix} />
      </div>
    ))}
  </div>
);

export default StatsCards;

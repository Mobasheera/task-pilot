import { Flame } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  level: number;
  skills: { name: string; score: number }[];
  xp: number;
  maxXp: number;
  streak: number;
}

const members: TeamMember[] = [
  {
    name: "Avanish", role: "Full Stack Developer", level: 7,
    skills: [{ name: "React", score: 9 }, { name: "Node", score: 8 }, { name: "MongoDB", score: 8 }],
    xp: 2900, maxXp: 3500, streak: 6,
  },
  {
    name: "Gyan", role: "Frontend Engineer", level: 5,
    skills: [{ name: "React", score: 8 }, { name: "Tailwind", score: 9 }, { name: "UI/UX", score: 7 }],
    xp: 1800, maxXp: 2500, streak: 4,
  },
  {
    name: "Moba", role: "ML Engineer", level: 6,
    skills: [{ name: "Python", score: 9 }, { name: "TensorFlow", score: 8 }, { name: "FastAPI", score: 7 }],
    xp: 2400, maxXp: 3000, streak: 8,
  },
  {
    name: "Shashwat", role: "Backend Developer", level: 5,
    skills: [{ name: "Node", score: 8 }, { name: "PostgreSQL", score: 7 }, { name: "DevOps", score: 6 }],
    xp: 1700, maxXp: 2500, streak: 5,
  },
];

const TeamMembers = () => (
  <section>
    <h2 className="text-xl font-bold text-foreground mb-4">👥 Team Members</h2>
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {members.map((m, i) => (
        <div key={i} className="glass-card-hover p-6 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-foreground text-lg">{m.name}</h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md gradient-bg text-primary">LVL {m.level}</span>
          </div>
          <p className="text-xs text-muted-foreground mb-4">{m.role}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {m.skills.map((s) => (
              <span key={s.name} className="skill-badge">{s.name} {s.score}/10</span>
            ))}
          </div>

          {/* XP bar */}
          <div className="mt-auto">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{m.xp.toLocaleString()} XP</span>
              <span>{m.maxXp.toLocaleString()}</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full gradient-fill transition-all duration-1000" style={{ width: `${(m.xp / m.maxXp) * 100}%` }} />
            </div>
          </div>

          <div className="flex items-center gap-1 mt-3 text-xs text-warning">
            <Flame className="w-3.5 h-3.5" />
            <span>{m.streak} day streak</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamMembers;

import { Crown, Medal } from "lucide-react";

const leaderboard = [
  { name: "Avanish", xp: 2900, rank: 1 },
  { name: "Moba", xp: 2400, rank: 2 },
  { name: "Gyan", xp: 1800, rank: 3 },
  { name: "Shashwat", xp: 1700, rank: 4 },
];

const Leaderboard = () => (
  <div className="glass-card p-6">
    <h2 className="text-lg font-bold text-foreground mb-4">🏆 Leaderboard</h2>
    <div className="space-y-3">
      {leaderboard.map((m) => (
        <div
          key={m.rank}
          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
            m.rank === 1 ? "bg-primary/10 border border-primary/30" : "bg-muted/30 border border-transparent"
          }`}
        >
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-sm font-bold text-primary">
            {m.rank === 1 ? <Crown className="w-4 h-4 text-warning fill-current" /> : `#${m.rank}`}
          </div>
          <span className="font-medium text-foreground flex-1">{m.name}</span>
          <span className="text-sm font-bold glow-text">{m.xp.toLocaleString()} XP</span>
        </div>
      ))}
    </div>
  </div>
);

export default Leaderboard;

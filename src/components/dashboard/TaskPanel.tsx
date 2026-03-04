import { useState } from "react";
import { Plus, Zap, Loader2 } from "lucide-react";

const categories = ["Frontend", "Backend", "AI/ML", "Design", "DevOps", "Communication"];
const difficulties = ["Easy", "Medium", "Hard"];

interface TaskPanelProps {
  onRunAI: () => void;
  isLoading: boolean;
}

const TaskPanel = ({ onRunAI, isLoading }: TaskPanelProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [difficulty, setDifficulty] = useState("Medium");
  const [tasks, setTasks] = useState<{ title: string; category: string; difficulty: string }[]>([]);

  const addTask = () => {
    if (!title.trim()) return;
    setTasks([...tasks, { title, category, difficulty }]);
    setTitle("");
  };

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-bold text-foreground mb-4">➕ Add Task</h2>

      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors mb-4"
      />

      <div className="mb-4">
        <span className="text-xs text-muted-foreground font-medium mb-2 block">Category</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <span className="text-xs text-muted-foreground font-medium mb-2 block">Difficulty</span>
        <div className="flex gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                difficulty === d
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {tasks.length > 0 && (
        <div className="mb-4 space-y-2">
          {tasks.map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
              <span className="text-foreground font-medium">{t.title}</span>
              <span className="skill-badge">{t.category}</span>
              <span className="skill-badge">{t.difficulty}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={addTask}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Task
        </button>
        <button
          onClick={onRunAI}
          disabled={isLoading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-[1.02] disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Analyzing...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" /> Run AI Assignment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskPanel;

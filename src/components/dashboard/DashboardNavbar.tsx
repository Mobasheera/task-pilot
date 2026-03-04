import { Brain, Users, ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="p-1.5 rounded-lg gradient-bg glow-border">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-bold glow-text">TaskPilot</span>
        </button>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>4 Members</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ListTodo className="w-4 h-4" />
            <span>4 Tasks</span>
          </div>
        </div>
      </div>
    </nav>);

};

export default DashboardNavbar;